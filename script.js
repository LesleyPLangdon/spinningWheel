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
    question: "Income withholding is the most widely used administrative and effective remedy used by PCSE.",
    correct: true,
    explanation: "Income withholding is the most widely used and effective administrative remedy used by PCSE.",
    course: "Administrative Remedies"
  },
  {
    question: "Cost of Living Adjustments (COLAs) occur on child support orders every three years.",
    correct: false,
    explanation: "COLAs occur every two years, not every three.",
    course: "Judicial Enforcement Remedies"
  },
  {
    question: "A court notice must be sent to the NCP 24 days before an ELR.",
    correct: true,
    explanation: "Court notice requirements must be met prior to an ELR.",
    course: "Court Presentations"
  },
  {
    question: "A worker may need to take additional steps when they receive a New Employer alert to avoid double garnishment.",
    correct: true,
    explanation: "Additional steps may be required to prevent duplicate income withholding.",
    course: "7 Habits for Effectively Managing Tasks and Notifications"
  },
  {
    question: "Scheduling a hearing can be done without supervisor approval.",
    correct: false,
    explanation: "Supervisor approval is required to schedule a hearing.",
    course: "7 Habits for Effectively Managing Tasks and Notifications"
  },
  {
    question: "PCSE determines whether an NCP’s SSI is permanent or temporary.",
    correct: false,
    explanation: "Only the Court can make determinations regarding SSI status.",
    course: "Ch-Ch-Changes: Case Closure & Income Withholding"
  },
  {
    question: "A Distribution Hold prevents funds from being sent to the payee.",
    correct: false,
    explanation: "A Disbursement Hold prevents funds from being sent to the payee.",
    course: "Life Cycle of Holds"
  },
  {
    question: "Bail money may be seized by a writ.",
    correct: true,
    explanation: "A writ of execution may be used to seize bail money.",
    course: "Writs of Execution Process"
  },
  {
    question: "TAXI is the offset program used to collect delinquent support obligations from the NCP.",
    correct: false,
    explanation: "SOIL (Set-Off Individual Liability) is the appropriate remedy.",
    course: "Administrative Enforcement Remedies"
  },
  {
    question: "The NCP cannot contest an income withholding order under administrative review.",
    correct: false,
    explanation: "AER allows the NCP to contest income withholding under administrative review.",
    course: "Administrative Enforcement Remedies"
  }
]

  },
  {
    label: "Finance",
    questions: [
  {
    question: "A financial note must be entered on NJKIDS before local finance or SDU can take action.",
    correct: false,
    explanation: "A court order is required before finance or SDU can act.",
    course: "Core Financial Concepts"
  },
  {
    question: "If a child is emancipated in an unallocated order, the order amount remains the same.",
    correct: true,
    explanation: "Unallocated orders do not automatically change when one child emancipates.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "SOIL (Set-Off Individual Liability) can be applied when medical support debt exists on the case.",
    correct: true,
    explanation: "SOIL may be applied to recover medical support arrears.",
    course: "Tax Offset in Child Support"
  },
  {
    question: "OCSE developed the Federal Offset Program (FOP).",
    correct: true,
    explanation: "OCSE developed the Federal Offset Program.",
    course: "Finance Workshop: FTO, Arrears & Receipt Reversal"
  },
  {
    question: "FNOOM is the note to Finance to place a distribution hold.",
    correct: false,
    explanation: "FNOOM is sent to local Finance to modify a current obligation in NJKIDS.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "OWIZ is the Finance screen where the obligation is entered.",
    correct: true,
    explanation: "OWIZ is used to enter financial obligations.",
    course: "Core Financial Concepts"
  },
  {
    question: "A MNFR hold will automatically release after three months.",
    correct: false,
    explanation: "MNFR holds automatically release after six months.",
    course: "Finance Workshop: FTO, Arrears & Receipt Reversal"
  },
  {
    question: "First In, First Out is the rule followed for payouts involving multiple state tax offsets.",
    correct: true,
    explanation: "FIFO rules apply for multiple state offset requests.",
    course: "Finance Workshop: FTO, Arrears & Receipt Reversal"
  },
  {
    question: "When the CP requests a hold, it is called an MNCO.",
    correct: false,
    explanation: "MNCO is entered when a hold is ordered by the court.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "Finance Division routinely reviews USSO and SORD when entering or modifying an obligation.",
    correct: false,
    explanation: "Finance relies on the Financial Note submitted per SOP.",
    course: "Core Financial Concepts"
  }
]

  },
  {
    label: "Family",
    questions: [
  {
    question: "Paternity must be established before a custody order can be filed.",
    correct: false,
    explanation: "A support order may be filed prior to custody determination.",
    course: "Case Create and Scheduling for Family Division Staff"
  },
  {
    question: "The proper way to dispose a case is to move the chain, dispose the reliefs, and execute the court order.",
    correct: false,
    explanation: "The correct disposition order is Order, Chain, Relief.",
    course: "Case Closure"
  },
  {
    question: "Only a Judge can determine if an emergent hearing is necessary.",
    correct: true,
    explanation: "Judicial authority determines emergent status.",
    course: "Modification"
  },
  {
    question: "The process to resolve a court filing is called disposition.",
    correct: true,
    explanation: "Disposition refers to the resolution of a filing.",
    course: "Family Workshop – Understanding Disposition, Case Closure and Termination"
  },
  {
    question: "A member is allowed to have multiple Department Client Numbers (DCN).",
    correct: false,
    explanation: "A member may only have one DCN.",
    course: "The Path Through Family: Tools for Success"
  },
  {
    question: "Managers Dashboard mirrors the life cycle of a child support case.",
    correct: false,
    explanation: "Track My Cases mirrors the life cycle of a child support case.",
    course: "Improving Your IV-D Performance Guidance for Family"
  },
  {
    question: "An adjournment is the removal of a scheduled proceeding from the calendar.",
    correct: false,
    explanation: "That definition describes a cancellation.",
    course: "Modifications: Processing Hearing Outcomes for Family"
  },
  {
    question: "The Post Court Reference Manual is used for disposition and case closure.",
    correct: false,
    explanation: "The Disposition Checklist is the correct tool.",
    course: "Family Workshop – Understanding Disposition, Case Closure and Termination"
  },
  {
    question: "A Child Support Hearing Officer may hear cases involving domestic violence.",
    correct: false,
    explanation: "CSHOs and consent conferencing cannot be scheduled when domestic violence is known.",
    course: "Case Create and Scheduling for Family Division"
  }
]

  },
  {
    label: "CSSA",
    questions: [
  {
    question: "Parties have 30 days to respond to a Notice of Intent to Terminate.",
    correct: false,
    explanation: "Parties have 60 days to respond to a Notice of Intent to Terminate.",
    course: "Case Closure Theory and Practice for CWA Staff"
  },
  {
    question: "Child support is distributed to the State when dependents are on TANF.",
    correct: true,
    explanation: "When dependents receive TANF, child support is assigned to the State.",
    course: "CSSA Case Initiation"
  },
  {
    question: "A CP may not receive cash payments if they fail to meet cooperation standards.",
    correct: true,
    explanation: "Failure to cooperate may impact eligibility for benefits.",
    course: "Cooperation, Good Cause and Good Faith"
  },
  {
    question: "Mandatory information for all parties on a new case includes name, DOB, SSN, and address.",
    correct: false,
    explanation: "Only limited information is required to open a case; full details are not mandatory at initiation.",
    course: "Case Create and Scheduling"
  },
  {
    question: "Date of birth, SSN, and full name are required to initiate the Locate function.",
    correct: true,
    explanation: "These data elements are required to initiate Locate activities.",
    course: "Locate for County Welfare Agency"
  },
  {
    question: "The primary address is the first address in the address hierarchy.",
    correct: false,
    explanation: "The first address in the hierarchy is the non-end-dated confirmed good mailing address.",
    course: "Locate for County Welfare Agency"
  },
  {
    question: "A CP must be willing to appear in court and fully cooperate to remain compliant with the program.",
    correct: true,
    explanation: "Court appearance and cooperation are required to maintain compliance.",
    course: "Cooperation, Good Cause and Good Faith for CWA Staff"
  },
  {
    question: "Triennial Review is scheduled by CSSA but conducted by PCSE.",
    correct: false,
    explanation: "The CSSA office executes the Triennial Review process.",
    course: "Triennial Review: Theory and Practice"
  },
  {
    question: "NRRQ is the page where documents are manually generated.",
    correct: false,
    explanation: "NPRO allows staff to view and print documents.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "Shared Parenting Guidelines apply when the NCP has 25% or more overnights.",
    correct: false,
    explanation: "Shared parenting requires 28% or more overnights, proof of expenses, and a request.",
    course: "Triennial Review: Theory and Practice"
  }
]

  },
  {
    label: "UIFSA",
   questions: [
  {
    question: "The BI Portal is available to assist staff with improving performance measures.",
    correct: true,
    explanation: "BI Portal supports performance tracking and reporting.",
    course: "BI Portal (In Person or Virtual)"
  },
  {
    question: "NJKIDS communicates with federal and state databases through the Child Support Portal.",
    correct: true,
    explanation: "The Child Support Portal facilitates integration with external systems.",
    course: "Introduction to UIFSA"
  },
  {
    question: "The Federal Case Registry allows users to view other states’ case activity.",
    correct: false,
    explanation: "FCR data is accessed through tools such as QUICK.",
    course: "UIFSA Online Tools"
  },
  {
    question: "A task remains on a worker’s task list for five days before being deleted.",
    correct: false,
    explanation: "Tasks are automatically deleted after ten days.",
    course: "7 Habits for Effectively Managing Tasks and Notifications"
  },
  {
    question: "When communicating with another state, Function, Action, and Reason codes must be selected.",
    correct: true,
    explanation: "Correct code selection is required for interstate communication.",
    course: "UIFSA Online Tools"
  },
  {
    question: "An unmarried same-sex couple may only establish parentage using a Certificate of Parentage.",
    correct: false,
    explanation: "Parentage in this situation must be established by court order.",
    course: "Advanced UIFSA"
  },
  {
    question: "Only the controlling jurisdiction may modify an intergovernmental order.",
    correct: false,
    explanation: "Only the state with Continued Exclusive Jurisdiction may modify the order.",
    course: "Introduction to UIFSA"
  },
  {
    question: "All states and territories are operating under UIFSA 2008.",
    correct: true,
    explanation: "UIFSA 2008 is currently in effect nationwide.",
    course: "Introduction to UIFSA"
  },
  {
    question: "Tribal child support information can be found on the Child Support Portal via BIA.",
    correct: false,
    explanation: "Tribal law information is located in the OCSE Intergovernmental Reference Guide (IRG).",
    course: "UIFSA Online Tools"
  },
  {
    question: "FIPS stands for Federal Information Payment Standard.",
    correct: false,
    explanation: "FIPS stands for Federal Information Processing Standards Code.",
    course: "Introduction to UIFSA"
  }
]

  },
  {
    label: "General Knowledge",
    questions: [
  {
    question: "1980 was the first year Child Support Guidelines were utilized.",
    correct: false,
    explanation: "Child Support Guidelines were first utilized in 1986.",
    course: "Beginner Guidelines"
  },
  {
    question: "Workers sign confidentiality agreements annually.",
    correct: true,
    explanation: "Annual confidentiality agreements are required.",
    course: "Data Security"
  },
  {
    question: "CSSA and Family are responsible for performing locate functions.",
    correct: false,
    explanation: "PCSE and CSSA perform locate functions.",
    course: "Introduction to Child Support"
  },
  {
    question: "COMP is a financial page in NJKIDS.",
    correct: false,
    explanation: "Financial pages include OWIZ, OBAA, MHIS, RHIS, DSBV, ELOG, and SLOG.",
    course: "Core Financial Concepts"
  },
  {
    question: "FCR provides real-time financial and case activity information for other states.",
    correct: false,
    explanation: "QUICK provides access to this information.",
    course: "Exploring the Child Support Portal"
  },
  {
    question: "The magnifying glass icon initiates the search feature in NJKIDS.",
    correct: true,
    explanation: "The magnifying glass icon is used to initiate searches.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "The Program History screen for CSSA in NJKIDS is IVMG.",
    correct: false,
    explanation: "The correct screen is MHIS.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "CSSA can conduct a Triennial Review on an out-of-state order.",
    correct: false,
    explanation: "CSSA cannot conduct Triennial Review on out-of-state orders.",
    course: "Triennial Review: Theory and Practice"
  },
  {
    question: "International Forms allows staff to build Hague documents online.",
    correct: true,
    explanation: "International Forms supports Hague document creation.",
    course: "Exploring the Child Support Portal"
  },
  {
    question: "QUICK includes IV-D and non IV-D cases from all states and territories.",
    correct: false,
    explanation: "The Federal Case Registry (FCR) contains this information.",
    course: "Exploring the Child Support Portal"
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

