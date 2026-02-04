/* =========================================================
   NJCSI Spin & Learn
   - Wheel categories (wedges) + 4 questions each
   - True/False answers
   - Feedback screen always shown
     - Header differs based on correctness
     - If incorrect: show explanation
     - Always: prompt to take a course
   - Prevent repeats per category until all 4 used
   ========================================================= */


/* =========================
   WHEEL APPEARANCE
   =========================
   You can assign one color per wedge here.
   If you want the wheel to use colors from the editor later, this becomes config-driven.
*/
const colors = ["#000000", "#cc0033", "#ffffff"];

/* =========================
   SPIN SETTINGS  ✅ SLOW DOWN HERE
   =========================
   To slow the wheel:
   1) Increase SPIN_TIME_MS (longer animation)
   2) Reduce SPIN_ANGLE_MIN/MAX (less total rotation)
   These two together control "how fast it feels."
*/
const SPIN_TIME_MS = 15000;     // was 3500; increase = slower spin
const SPIN_ANGLE_MIN = 100;   // lower = fewer total degrees of rotation
const SPIN_ANGLE_MAX = 500;   // lower = fewer total degrees of rotation

/* =========================
   ANSWER LABEL CONFIG
   =========================
   Change these labels without touching logic.
   The values MUST map to true/false internally.
*/
const ANSWER_LABELS = {
  true: "Fact",
  false: "Fiction"
};


/* =========================
   DOM REFERENCES
   ========================= */
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
let center = canvas.width / 2;
let radius = center;

const spinBtn = document.getElementById("spinBtn");
const overlay = document.getElementById("overlay");

const questionView = document.getElementById("questionView");
const infoView = document.getElementById("infoView");

const overlayTitle = document.getElementById("overlay-title");
const overlayQuestion = document.getElementById("overlay-question");

const WHEEL_PADDING = 20;

const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
trueBtn.innerText = ANSWER_LABELS.true;
falseBtn.innerText = ANSWER_LABELS.false;


const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

const courseName = document.getElementById("course-name");
const courseLink = document.getElementById("course-link");

const backBtn = document.getElementById("backBtn");
/* =========================
   AUDIO (Background + SFX)
   ========================= */

// Update these paths to match your files
const AUDIO_FILES = {
  bgm: "audio/background.mp3",
  cheer: "audio/cheer.mp3",
  tick: "audio/tick.mp3"
};

const audio = {
  bgm: new Audio(AUDIO_FILES.bgm),
  cheer: new Audio(AUDIO_FILES.cheer),
  unlocked: false,
  muted: false
};

// Background music settings
audio.bgm.loop = true;
audio.bgm.volume = 0.22;      // 0.0 to 1.0 (keep low under voice)
audio.bgm.preload = "auto";

// Cheer settings
audio.cheer.volume = 0.95;
audio.cheer.preload = "auto";

// tick settings
audio.tick = new Audio(AUDIO_FILES.tick);
audio.tick.volume = 0.6;
audio.tick.preload = "auto";
// Tick pool (so rapid ticks don't clip)
audio.tickPool = Array.from({ length: 6 }, () => {
  const a = new Audio(AUDIO_FILES.tick);
  a.volume = 0.6;
  a.preload = "auto";
  return a;
});
audio.tickIndex = 0;


/**
 * Unlock audio and start background music.
 * Call this from a user gesture (click/tap), e.g., the Spin button click.
 */
// async function startBackgroundMusic() {
//   if (audio.unlocked) return;

//   try {
//     // Attempt to play; if it works, audio is "unlocked"
//     await audio.bgm.play();
//     audio.unlocked = true;
//   } catch (err) {
//     // If blocked, leave it locked; user can tap again
//     console.warn("Background music blocked until user interaction.", err);
//   }
// }
/** Try to unlock audio (must be called from a user gesture). */
async function unlockAudio() {
  if (audio.unlocked) return true;

  try {
    // A play/pause sequence often unlocks reliably across browsers
    await audio.bgm.play();
    audio.bgm.pause();
    audio.bgm.currentTime = 0;

    audio.unlocked = true;
    return true;
  } catch (err) {
    console.warn("Audio still blocked until a user interaction.", err);
    return false;
  }
}

function applyMuteState() {
  audio.bgm.muted = audio.muted;
  audio.cheer.muted = audio.muted;
  if (audio.tickPool) {
    audio.tickPool.forEach(t => (t.muted = audio.muted));
  }
}
const muteBtn = document.getElementById("muteBtn");

function updateSoundButtonUI() {
  if (audio.muted || audio.bgm.paused) {
    muteBtn.textContent = "🔇";
  } else {
    muteBtn.textContent = "🔊";
  }
}

muteBtn.addEventListener("click", async () => {
  const ok = await unlockAudio();
  if (!ok) return;

  // Toggle sound state: if music is playing -> pause; if paused -> play
  if (!audio.bgm.paused && !audio.muted) {
    audio.bgm.pause();
  } else {
    audio.muted = false;      // ensure not muted when turning on
    applyMuteState();
    try {
      await audio.bgm.play();
    } catch (err) {
      console.warn("Could not start background music.", err);
    }
  }

  updateSoundButtonUI();
});

// Initialize button label
applyMuteState();
updateSoundButtonUI();

/**
 * Play cheer SFX (safe even if bgm is running).
 * Resets to start so it can fire repeatedly.
 */
function playCheer() {
  if (!audio.unlocked || audio.muted) return;

  const originalVol = audio.bgm.volume;

  // Duck background music if it’s playing
  if (!audio.bgm.paused) {
    audio.bgm.volume = Math.max(0, originalVol * 0.25);
  }

  audio.cheer.currentTime = 0;
  audio.cheer.play().catch(() => {});

  const restore = () => {
    audio.bgm.volume = originalVol;
    audio.cheer.removeEventListener("ended", restore);
  };

  audio.cheer.addEventListener("ended", restore);

  // Fallback restore (in case "ended" doesn't fire)
  setTimeout(() => {
    audio.bgm.volume = originalVol;
  }, 2000);
}

function playTick() {
  if (!audio.unlocked || audio.muted) return;

  const t = audio.tickPool[audio.tickIndex];
  audio.tickIndex = (audio.tickIndex + 1) % audio.tickPool.length;

  try {
    t.currentTime = 0;
    t.play().catch(() => {});
  } catch {}
}



/* =========================
   STATE
   ========================= */
let angle = 0;
let spinning = false;

let currentWedge = null;
let currentQuestion = null;

/**
 * Prevent repeats per category:
 * Map: category label -> Set of used question indices
 * Once all questions are used for a category, we clear its set.
 */
const usedQuestionIndicesByCategory = new Map();

/* =========================
   HELPERS
   ========================= */

/** Show overlay */
function showOverlay() {
  overlay.style.display = "flex";
}

/** Hide overlay */
function hideOverlay() {
  overlay.style.display = "none";
}

/** Show only one section inside the overlay */
function showSection(sectionEl) {
  questionView.style.display = "none";
  infoView.style.display = "none";
  sectionEl.style.display = "block";
}

/** Get or create the used-set for a category label */
function getUsedSetForCategory(label) {
  if (!usedQuestionIndicesByCategory.has(label)) {
    usedQuestionIndicesByCategory.set(label, new Set());
  }
  return usedQuestionIndicesByCategory.get(label);
}

/**
 * Pick a question that hasn't been used yet for this category.
 * If all have been used, we reset and start over.
 */
function pickNonRepeatingQuestion(wedge) {
  const used = getUsedSetForCategory(wedge.label);

  // Reset if all have been used
  if (used.size >= wedge.questions.length) {
    used.clear();
  }

  // Build list of unused indices
  const available = [];
  for (let i = 0; i < wedge.questions.length; i++) {
    if (!used.has(i)) available.push(i);
  }

  // Pick one unused index at random
  const idx = available[Math.floor(Math.random() * available.length)];
  used.add(idx);

  return wedge.questions[idx];
}
/**
 * Determines whether black or white text will have better contrast
 * against a given hex color.
 * Returns "#000000" or "#FFFFFF"
 */
function getContrastingTextColor(hexColor) {
  // Remove leading #
  const hex = hexColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance (perceived brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  // Threshold: tweak if needed (140–160 are common)
  return luminance > 150 ? "#000000" : "#FFFFFF";
}

function wrapLabel(text, maxCharsPerLine = 12) {
  // Split into words and build lines up to maxCharsPerLine
  const words = text.split(" ");
  const lines = [];
  let line = "";

  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (test.length <= maxCharsPerLine) {
      line = test;
    } else {
      if (line) lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);

  // cap to 2 lines for cleanliness
  if (lines.length > 2) {
    // merge extras into last line and truncate
    const first = lines[0];
    const rest = lines.slice(1).join(" ");
    lines.length = 0;
    lines.push(first);
    lines.push(rest.length > maxCharsPerLine ? rest.slice(0, maxCharsPerLine - 1) + "…" : rest);
  }

  return lines;
}

/* =========================
   DRAW THE WHEEL
   ========================= */

function drawWheel() {
  const slice = (2 * Math.PI) / wedges.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fontSize = Math.max(12, Math.min(16, Math.floor(220 / wedges.length)));

  for (let i = 0; i < wedges.length; i++) {
    // 🔹 DEFINE ANGLES FIRST (this is critical)
    const startAngle = angle + i * slice;
    const endAngle = startAngle + slice;
    const midAngle = startAngle + slice / 2;

    /* -------- Draw wedge -------- */
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    /* -------- Divider line between wedges -------- */
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "rgba(95,106,114,0.4)"; // Rutgers gray
    ctx.lineWidth = 6;
    ctx.moveTo(center, center);
    ctx.lineTo(
      center + radius * Math.cos(startAngle),
      center + radius * Math.sin(startAngle)
    );
    ctx.stroke();
    ctx.restore();

    /* -------- Centered label -------- */
    const textRadius = radius * 0.6;

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(midAngle);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Base font size (you already have fontSize)
let labelFontSize = fontSize;

// // Decide wrap aggressiveness based on wheel size
// const maxChars = canvas.width < 420 ? 10 : 12;

// const lines = wrapLabel(wedges[i].label, maxChars);

// // If it's 2 lines, reduce font a bit so it fits nicely
// if (lines.length === 2) labelFontSize = Math.max(10, fontSize - 2);
// How much horizontal space the label is allowed (in px) at its radius
const maxTextPx = radius * 0.55; // tweak: 0.50–0.60 usually works

ctx.font = `${labelFontSize}px Arial`;
const label = wedges[i].label;

// Only wrap if the single-line label would exceed the allowed width
let lines = [label];
if (ctx.measureText(label).width > maxTextPx) {
  // Wrap more aggressively on small wheels
  const maxChars = canvas.width < 420 ? 10 : 12;
  lines = wrapLabel(label, maxChars);

  // Slightly reduce font only when we actually wrap
  if (lines.length > 1) labelFontSize = Math.max(10, fontSize - 2);
  ctx.font = `${labelFontSize}px Arial`;
}


ctx.font = `${labelFontSize}px Arial`;
    ctx.fillStyle = getContrastingTextColor(colors[i % colors.length]);
    // ctx.fillText(wedges[i].label, textRadius, 0);
   const lineHeight = labelFontSize + 2;
const startY = (lines.length === 1) ? 0 : -(lineHeight / 2);

for (let li = 0; li < lines.length; li++) {
  ctx.fillText(lines[li], textRadius, startY + li * lineHeight);
}

ctx.restore();
  }

  /* -------- Outer border -------- */
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "#5F6A72";
  ctx.lineWidth = 10;
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}


/* =========================
   SPIN LOGIC
   ========================= */
//function spin() {
//   if (spinning) return; // prevent double spins
//   spinning = true;

//   // Disable button while spinning
//   spinBtn.disabled = true;

//   // Choose how far the wheel rotates
//   const spinAngle = Math.random() * (SPIN_ANGLE_MAX - SPIN_ANGLE_MIN) + SPIN_ANGLE_MIN;

//   const start = performance.now();

//   function animate(now) {
//     const elapsed = now - start;

//     if (elapsed < SPIN_TIME_MS) {
//       // Increase angle over time; divide by time to control speed
//       angle += spinAngle / SPIN_TIME_MS;
//       drawWheel();
//       requestAnimationFrame(animate);
//     } else {
//       finishSpin();
//     }
//   }

//   requestAnimationFrame(animate);
// }
function easeOutCubic(t) {
  // t in [0,1]
  return 1 - Math.pow(1 - t, 3);
}

function spin() {
  //startBackgroundMusic(); // starts looping bg music after first tap/click
  if (spinning) return;
  spinning = true;
  spinBtn.disabled = true;
let lastTickTime = performance.now(); // ✅ baseline
let firstTickPlayed = false;

const minInterval = 35;   // ms (fast ticks early)
const maxInterval = 220;  // ms (slow ticks near end)

  // ✅ Random spin time (milliseconds)
  const duration = Math.floor(Math.random() * 2500) + 4500; // 4500–7000ms

  // ✅ Random total rotation (radians)
  // Convert “degrees” feel into radians: 360° = 2π
  const minTurns = 5;  // minimum full rotations
  const maxTurns = 9;  // maximum full rotations
  const turns = Math.random() * (maxTurns - minTurns) + minTurns;

  // Add some extra randomness within one turn
  const extra = Math.random() * (2 * Math.PI);

  const startAngle = angle;
  const targetAngle = startAngle + turns * (2 * Math.PI) + extra;

  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);    // 0..1
    // interval grows as t approaches 1 (slower ticks near end)
const interval = minInterval + (maxInterval - minInterval) * t;
if (!firstTickPlayed) {
  playTick();                 // ✅ immediate first click
  firstTickPlayed = true;
  lastTickTime = now;
}

// tick when enough time has passed
if (now - lastTickTime >= interval) {
  playTick();
  lastTickTime = now;
}

    const eased = easeOutCubic(t);                // fast then slow

    angle = startAngle + (targetAngle - startAngle) * eased;
    drawWheel();

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      finishSpin(); // uses angle to pick category/question
      spinning = false;
      spinBtn.disabled = false;
    }
  }

  requestAnimationFrame(animate);
}


/**
 * Determine which wedge is at the arrow (top).
 * Then pick a non-repeating question from that wedge.
 */
function finishSpin() {
  const slice = (2 * Math.PI) / wedges.length;

  // Canvas 0 rad is at 3 o'clock. Our arrow is at 12 o'clock (-90°).
  // We want the angle that is pointing straight up, adjusted by current rotation.
  const pointerAngle = (3 * Math.PI / 2); // 12 o'clock in [0, 2π) terms

  // Normalize current wheel rotation into [0, 2π)
  const normalized = ((angle % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);

  // Compute which wedge is under the pointer
  // We subtract wheel rotation from pointer position to get "wheel space"
  const wheelSpaceAngle = (pointerAngle - normalized + (2 * Math.PI)) % (2 * Math.PI);

  const index = Math.floor(wheelSpaceAngle / slice) % wedges.length;

  currentWedge = wedges[index];
  currentQuestion = pickNonRepeatingQuestion(currentWedge);

  showQuestion(currentWedge, currentQuestion);

  spinning = false;
  spinBtn.disabled = false;
}


/* =========================
   OVERLAY FLOW
   ========================= */
function showQuestion(wedge, q) {
  overlayTitle.innerText = wedge.label;
  overlayQuestion.innerText = q.question;

  showSection(questionView);
  showOverlay();
}

/**
 * Called when user clicks True or False.
 * Shows same info screen either way:
 * - Header changes based on correctness
 * - Explanation shown if incorrect
 * - Course CTA always shown
 */
function answer(userAnswer) {
  const isCorrect = userAnswer === currentQuestion.correct;
 if (isCorrect) {
    playCheer(); // ✅ cheering for correct answers
  }
  feedbackTitle.innerText = isCorrect ? "✅ Correct!" : "ℹ️ Let’s Take a Closer Look";

  feedbackText.innerText = isCorrect
    ? "Nice work! Want to go deeper? This topic is covered in NJCSI training."
    : `${currentQuestion.explanation} NJCSI training covers this topic in detail.`;

  courseName.innerText = currentQuestion.course || "NJCSI Training";

  // Show course link only if a URL exists
  if (currentQuestion.courseUrl && currentQuestion.courseUrl.trim() !== "") {
    courseLink.href = currentQuestion.courseUrl;
    courseLink.style.display = "inline-block";
  } else {
    courseLink.href = "#";
    courseLink.style.display = "none";
  }

  showSection(infoView);
}

function backToWheel() {
  hideOverlay();
  currentWedge = null;
  currentQuestion = null;
}
function resizeCanvasToContainer() {
  const container = document.getElementById("wheel-container");
  const rect = container.getBoundingClientRect();

  // Set the canvas pixel size to match the CSS size
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);

  // Recompute geometry based on new size
  // IMPORTANT: these were const before; change them to let variables
  center = canvas.width / 2;
  radius = center - WHEEL_PADDING;

  drawWheel();
}

/* =========================
   EVENT LISTENERS
   ========================= */
spinBtn.addEventListener("click", spin);
trueBtn.addEventListener("click", () => answer(true));
falseBtn.addEventListener("click", () => answer(false));
backBtn.addEventListener("click", backToWheel);

/**
 * Optional: clicking outside the modal closes it.
 * If you want a more "locked" kiosk flow, comment this out.
 */
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) backToWheel();
});

// const muteBtn = document.getElementById("muteBtn");
// let muted = false;

// function setMuted(state) {
//   muted = state;
//   audio.bgm.muted = muted;
//   audio.cheer.muted = muted;
//   muteBtn.textContent = muted ? "🔇 Muted" : "🔊 Sound";
// }

// muteBtn.addEventListener("click", async () => {
//   // Ensure audio is unlocked by user gesture
//   await startBackgroundMusic();

//   setMuted(!muted);

//   // If unmuting and bgm was paused/blocked, try playing again
//   if (!muted && audio.bgm.paused) {
//     try { await audio.bgm.play(); } catch {}
//   }
// });

// // Default state
// setMuted(false);

/* =========================
   INIT
   ========================= */
/* =========================
   INIT
   ========================= */
window.addEventListener("load", () => {
  // Make sure wedges exists
  console.log("wedges loaded?", typeof wedges, wedges?.length);

  resizeCanvasToContainer();
});

window.addEventListener("resize", resizeCanvasToContainer);

