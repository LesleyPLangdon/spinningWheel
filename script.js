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
   CONTENT (EDIT THIS)
   =========================
   - Each wedge has a label and an array of questions.
   - Each question has:
     question (string)
     correct (true/false)
     explanation (string)  <-- used when incorrect
     course (string)
     courseUrl (optional string)
*/
const wedges = [
  {
    label: "Probation",
    questions: [
      {
        question: "True or False: New Jersey uses statewide Child Support Guidelines to help calculate support.",
        correct: true,
        explanation: "New Jersey uses statewide guidelines to promote consistency and fairness across cases.",
        course: "NJ Child Support Guidelines: Foundations",
        courseUrl: ""
      },
      {
        question: "True or False: Child support automatically ends when a child turns 18 in New Jersey.",
        correct: false,
        explanation: "Support may continue beyond age 18 depending on factors such as education status and circumstances.",
        course: "Emancipation & Support Duration in NJ",
        courseUrl: ""
      },
      {
        question: "True or False: Both parents’ incomes are considered when calculating guideline support.",
        correct: true,
        explanation: "Guideline calculations typically consider the incomes of both parents and other relevant factors.",
        course: "Income Determinations in Child Support Cases",
        courseUrl: ""
      },
      {
        question: "True or False: Child support is intended to cover only food and housing.",
        correct: false,
        explanation: "Child support contributes to a child’s overall needs, including housing, food, clothing, and other essentials.",
        course: "What Child Support Covers: Practice & Communication",
        courseUrl: ""
      }
    ]
  },
  {
    label: "Finance",
    questions: [
      {
        question: "True or False: Child support matters are handled within the Family Division in New Jersey.",
        correct: true,
        explanation: "Child support cases are handled within the Family Division of the New Jersey Superior Court.",
        course: "Child Support Case Flow in the Family Division",
        courseUrl: ""
      },
      {
        question: "True or False: Child support orders can be reviewed and modified when circumstances change.",
        correct: true,
        explanation: "A significant change in circumstances may warrant review or modification through appropriate processes.",
        course: "Modifications: Standards, Documentation, and Practice",
        courseUrl: ""
      },
      {
        question: "True or False: Enforcement is optional once an order is entered.",
        correct: false,
        explanation: "There are established enforcement mechanisms to address noncompliance with court orders.",
        course: "Enforcement Tools & Compliance Strategies",
        courseUrl: ""
      },
      {
        question: "True or False: Clear documentation supports consistent decision-making and case management.",
        correct: true,
        explanation: "Accurate, complete documentation helps ensure consistent processing, communication, and outcomes.",
        course: "Effective Documentation in Child Support Matters",
        courseUrl: ""
      }
    ]
  },
  {
    label: "Family",
    questions: [
      {
        question: "True or False: Parents can ignore a court order if they have an informal agreement.",
        correct: false,
        explanation: "Court orders govern child support obligations. Informal agreements do not replace an order.",
        course: "Addressing Informal Agreements & Order Compliance",
        courseUrl: ""
      },
      {
        question: "True or False: Parenting time and child support are the same legal issue.",
        correct: false,
        explanation: "Parenting time and child support are separate issues, even though families often experience them together.",
        course: "Communicating the Difference: Support vs. Parenting Time",
        courseUrl: ""
      },
      {
        question: "True or False: Only one parent has responsibilities under child support law.",
        correct: false,
        explanation: "Child support frameworks recognize parental responsibilities and financial considerations across both parents.",
        course: "Shared Responsibilities in Support Determinations",
        courseUrl: ""
      },
      {
        question: "True or False: Child support cases are identical from family to family.",
        correct: false,
        explanation: "Cases vary based on individual circumstances, documentation, and case-specific factors.",
        course: "Applying Guidelines to Real-World Case Variations",
        courseUrl: ""
      }
    ]
  },
  {
    label: "CSSA",
    questions: [
      {
        question: "True or False: Child support is intended to benefit the custodial parent.",
        correct: false,
        explanation: "Child support is intended to benefit the child by contributing to the child’s needs.",
        course: "How to Explain Child Support Purpose to Participants",
        courseUrl: ""
      },
      {
        question: "True or False: Many participants misunderstand how child support amounts are determined.",
        correct: true,
        explanation: "Guidelines and case factors can be confusing; clear explanations help reduce frustration and conflict.",
        course: "Plain-Language Communication in Child Support",
        courseUrl: ""
      },
      {
        question: "True or False: Consistent, respectful communication can reduce conflict in child support matters.",
        correct: true,
        explanation: "Clarity and professionalism help participants understand process, expectations, and next steps.",
        course: "De-escalation & Communication Strategies",
        courseUrl: ""
      },
      {
        question: "True or False: Child support professionals routinely work with diverse families and complex barriers.",
        correct: true,
        explanation: "Cases often involve varied circumstances; awareness and consistency support fair process.",
        course: "Serving Diverse Participants: Practice Considerations",
        courseUrl: ""
      }
    ]
  },
  {
    label: "UIFSA",
    questions: [
      {
        question: "True or False: Ongoing training helps professionals keep pace with policy, procedure, and best practices.",
        correct: true,
        explanation: "Training supports consistency, accuracy, and confidence in practice as expectations and tools evolve.",
        course: "Continuous Learning in Child Support Practice",
        courseUrl: ""
      },
      {
        question: "True or False: Scenario-based learning helps adult learners apply policy to real situations.",
        correct: true,
        explanation: "Scenarios help bridge policy knowledge to day-to-day decision-making and communication.",
        course: "Scenario-Based Training for Child Support Professionals",
        courseUrl: ""
      },
      {
        question: "True or False: Consistent statewide training can support more uniform practice across counties.",
        correct: true,
        explanation: "Shared training promotes common language and expectations across teams and locations.",
        course: "Statewide Consistency: Standards & Practice Alignment",
        courseUrl: ""
      },
      {
        question: "True or False: Professional development improves outcomes for children and families by strengthening practice.",
        correct: true,
        explanation: "High-quality practice supports timely, accurate, and respectful processes that affect real families.",
        course: "Professional Practice & Family Impact",
        courseUrl: ""
      }
    ]
  },
  {
    label: "General Knowledge",
    questions: [
      {
        question: "True or False: Ongoing training helps professionals keep pace with policy, procedure, and best practices.",
        correct: true,
        explanation: "Training supports consistency, accuracy, and confidence in practice as expectations and tools evolve.",
        course: "Continuous Learning in Child Support Practice",
        courseUrl: ""
      },
      {
        question: "True or False: Scenario-based learning helps adult learners apply policy to real situations.",
        correct: true,
        explanation: "Scenarios help bridge policy knowledge to day-to-day decision-making and communication.",
        course: "Scenario-Based Training for Child Support Professionals",
        courseUrl: ""
      },
      {
        question: "True or False: Consistent statewide training can support more uniform practice across counties.",
        correct: true,
        explanation: "Shared training promotes common language and expectations across teams and locations.",
        course: "Statewide Consistency: Standards & Practice Alignment",
        courseUrl: ""
      },
      {
        question: "True or False: Professional development improves outcomes for children and families by strengthening practice.",
        correct: true,
        explanation: "High-quality practice supports timely, accurate, and respectful processes that affect real families.",
        course: "Professional Practice & Family Impact",
        courseUrl: ""
      }
    ]
  }
];

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
  cheer: "audio/cheer.mp3"
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
}
const muteBtn = document.getElementById("muteBtn");

function updateSoundButtonUI() {
  if (audio.muted || audio.bgm.paused) {
    muteBtn.textContent = "🔇 Sound Off";
  } else {
    muteBtn.textContent = "🔊 Sound On";
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
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = getContrastingTextColor(colors[i % colors.length]);
    ctx.fillText(wedges[i].label, textRadius, 0);
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
    : `${currentQuestion.explanation} Want to explore this further? NJCSI training covers this topic in detail.`;

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
drawWheel();

