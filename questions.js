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
    question: "Income withholding is the most widely used and effective administrative remedy used by PCSE.",
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
    explanation: "Court notice requirements must be met prior to initiating an ELR.",
    course: "Court Presentations"
  },
  {
    question: "A worker may need to take additional steps after receiving a New Employer alert to avoid double garnishment.",
    correct: true,
    explanation: "Additional review may be required to prevent duplicate income withholding.",
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
    explanation: "Only the Court can determine whether SSI is permanent or temporary.",
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
    explanation: "AER permits the NCP to contest income withholding as an enforcement action under administrative review.",
    course: "Administrative Enforcement Remedies"
  }
]

  },
  {
    label: "Finance",
 questions: [
  {
    question: "A financial note must be entered on NJKiDS before local finance or SDU can take action.",
    correct: false,
    explanation: "A court order is required before finance or SDU can take action.",
    course: "Core Financial Concepts"
  },
  {
    question: "If a child is emancipated in an unallocated order, the order amount remains the same.",
    correct: true,
    explanation: "Unallocated orders do not automatically change upon emancipation.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "SOIL (Set-Off Individual Liability) can be applied when medical support debt exists in the case.",
    correct: true,
    explanation: "SOIL may be applied to recover medical support debt.",
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
    explanation: "FNOOM is the note sent to the local Finance Department to modify current obligations in NJKiDS.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "OWIZ is the finance screen where the obligation is entered.",
    correct: true,
    explanation: "OWIZ is used to enter child support obligations.",
    course: "Core Financial Concepts"
  },
  {
    question: "A MNFR hold will automatically be released after three months.",
    correct: false,
    explanation: "MNFR holds automatically release after six months.",
    course: "Finance Workshop: FTO, Arrears & Receipt Reversal"
  },
  {
    question: "First In, First Out is the rule followed regarding payouts for multiple states requesting federal tax offset.",
    correct: true,
    explanation: "FIFO rules apply when multiple states request offsets.",
    course: "Finance Workshop: FTO, Arrears & Receipt Reversal"
  },
  {
    question: "When the CP requests a hold, it is called an MNCO.",
    correct: false,
    explanation: "MNCO is when a hold is entered per a court order.",
    course: "Beyond the Numbers: Navigating Child Support Financials"
  },
  {
    question: "Finance Division routinely reviews USSO and SORD when entering or modifying a court ordered obligation.",
    correct: false,
    explanation: "Finance Divisionrelies completelyon the Financial Note submitted to enter or modify orders per standard operating procedure.",
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
    question: "Only a judge can determine if an emergent hearing is necessary.",
    correct: true,
    explanation: "Judicial authority determines whether a matter is emergent.",
    course: "Modifications"
  },
  {
    question: "The process to resolve a court filing is called disposition.",
    correct: true,
    explanation: "Disposition refers to resolving a court filing.",
    course: "Understanding Disposition, Case Closure and Termination"
  },
  {
    question: "A member is allowed to have multiple Department Client Numbers (DCN).",
    correct: false,
    explanation: "Each member is assigned only one DCN.",
    course: "The Path Through Family: Tools for Success"
  },
  {
    question: "Managers Dashboard allows staff to analyze information that mirrors the life cycle of a child support case.",
    correct: false,
    explanation: "Track My Cases is the tool that allows staff to analyze information that mirrors the life cycle of a child support case.",
    course: "Improving IV-D Performance Guidance for Family"
  },
  {
    question: "The intake checklist provides tips for searching databases that communicate with NJKiDS.",
    correct: true,
    explanation: "The intake checklist supports accurate database searches.",
    course: "Improving IV-D Performance Guidance for Family"
  },
  {
    question: "An adjournment is the removal of a scheduled proceeding from the calendar.",
    correct: false,
    explanation: "That describes a cancellation, not an adjournment.",
    course: "Modifications, Processing Hearing Outcomes for Family"
  },
  {
    question: "The Post Court Reference Manual is the tool utilized for assisting with disposition and case closure.",
    correct: false,
    explanation: "The Disposition Checklist is the correct tool.",
    course: "Family Workshop: Understanding Disposition, Case Closure and Termination"
  },
  {
    question: "A Child Support Hearing Officer may hear cases that involve domestic violence.",
    correct: false,
    explanation: "Per IV-D regulations, the CSHO nor consent conferencing can be scheduled when there is known domestic violence.",
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
    explanation: "Parties have 60 days to respond.",
    course: "Case Closure Theory and Practice for CWA Staff"
  },
  {
    question: "Child support is distributed to the state when dependents are on TANF.",
    correct: true,
    explanation: "Support is assigned to the state during TANF receipt.",
    course: "CSSA Case Initiation"
  },
  {
    question: "A CP may not receive cash payments if they fail to meet the standards for cooperation.",
    correct: true,
    explanation: "Failure to cooperate may affect eligibility.",
    course: "Cooperation, Good Cause and Good Faith"
  },
  {
    question: "Mandatory for all parties on a new case include: Name, Date of Birth, Social Security Number  and Address.",
    correct: false,
    explanation: "While all that information is helpful, the required information for the NCP is much less to open the case .  Only the Name, Race, and Sex are required.",
    course: "Case Create and Scheduling"
  },
  {
    question: "DOB, SSN, and full name are required to initiate the Locate function.",
    correct: true,
    explanation: "These data elements are required to begin Locate.",
    course: "Locate for County Welfare Agency"
  },
  {
    question: "The primary address is the first address in the hierarchy.",
    correct: false,
    explanation: "The first address is the non-end-dated confirmed good mailing address.",
    course: "Locate for County Welfare Agency"
  },
  {
    question: "CP must be willing to appear in court as needed and lend full cooperation in order to remain compliant with the program.",
    correct: true,
    explanation: "Cooperation and court participation are required.",
    course: "Cooperation, Good Cause and Good Faith"
  },
  {
    question: "Triennial Review is a process scheduled by CSSA but conducted by PCSE.",
    correct: false,
    explanation: "CSSA office executes the Triennial Review process.",
    course: "Triennial Review: Theory and Practice"
  },
  {
    question: "NRRQ is the page where you can manually generate documents.",
    correct: false,
    explanation: "NPRO allows users to view and print documents.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "The NCP listed on the case must have 25% or more overnights with the child to have the Shared Parenting Guideline applied.",
    correct: false,
    explanation: "The NCP must have 28% or more overnights, have proof of incurred expenses, and request the shared parenting guideline on the application.",
    course: "Triennial Review: Theory and Practice"
  }
]


  },
  {
    label: "UIFSA",
   questions: [
  {
    question: "BI Portal  is a tool available  to assist staff with improving performance measures.",
    correct: true,
    explanation: "BI Portal supports performance tracking.",
    course: "BI Portal in person, All staff reporting virtually"
  },
  {
    question: "NJKiDS communicates with federal and state databases through the Child Support Portal.",
    correct: true,
    explanation: "The portal facilitates system integration.",
    course: "Introduction to UIFSA"
  },
  {
    question: "Federal Case Registry is a tool that gives users access to other states child support case activities.",
    correct: false,
    explanation: "Access occurs through tools such as QUICK.",
    course: "UIFSA Online Tools"
  },
  {
    question: "A task stays on the worker’s task list for 5 days before it is automatically deleted.",
    correct: false,
    explanation: "Tasks are deleted automatically at ten days.",
    course: "7 Habits for Effectively Managing Tasks and Notifications"
  },
  {
    question: "When communicating with another state, you must select the appropriate Function, Action and Reason codes.",
    correct: true,
    explanation: "Correct code selection is required.",
    course: "UIFSA Online Tools"
  },
  {
    question: "An unmarried same-sex couple can only establish parentage using a Certificate of Parentage.",
    correct: false,
    explanation: "Parentage in this scenario can only be established by a court order.",
    course: "Advanced UIFSA"
  },
  {
    question: "Only the Controlling Jurisdiction has the authority to modify an intergovernmental order.",
    correct: false,
    explanation: "Only the state that has CEJ, or Continued Exclusive Jurisdiction, may modify a child support order.",
    course: "Introduction to UIFSA"
  },
  {
    question: "All states and territories operate under UIFSA 2008.",
    correct: true,
    explanation: "UIFSA 2008 is currently in effect nationwide.",
    course: "Introduction to UIFSA"
  },
  {
    question: "Tribal Information regarding child support can be found on the Child Support Portal via the BIA.",
    correct: false,
    explanation: "Tribal law is located in the OCSE Intergovernmental Reference Guide (IRG).",
    course: "UIFSA Online Tools"
  },
  {
    question: "FIPS is the acronym Federal Information Payment Standard.",
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
    explanation: "Guidelines were first utilized in 1986.",
    course: "Beginner Guidelines"
  },
  {
    question: "Workers sign confidentiality agreements annually.",
    correct: true,
    explanation: "Annual confidentiality agreements are required.",
    course: "Data Security"
  },
  {
    question: "CSSA and Family are responsible for performing Locate functions.",
    correct: false,
    explanation: "Locate is performed by PCSE and CSSA.",
    course: "Introduction to Child Support"
  },
  {
    question: "COMP is a financial page in NJKiDS.",
    correct: false,
    explanation: "Financial pages include OWIZ, OBAA, MHIS, RHIS, DSBV, ELOG, and SLOG.",
    course: "Core Financial Concepts"
  },
  {
    question: "FCR is the site on the Child Support Portal that gives you financial information and case activities in real time for cases in another state.",
    correct: false,
    explanation: "QUICK is the site that gives the user permission to search this information.",
    course: "Exploring the Child Support Portal"
  },
  {
    question: "The magnifying glass icon is the way to initiate the search feature in NJKiDS.",
    correct: true,
    explanation: "The magnifying glass starts the search feature.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "Program History screen on NJKiDS is IVMG for CSSA.",
    correct: false,
    explanation: "MHIS is the correct screen.",
    course: "Case Initiation for CSSA Staff"
  },
  {
    question: "CSSA can conduct a Triennial Review for a case that is an out of state order.",
    correct: false,
    explanation: "While the Court may have the authority if registered by the other state to enforce and modify, the CSSA office cannot conduct the administrative process of Triennial Review to an out-of-state order.",
    course: "Triennial Review: Theory and Practice"
  },
  {
    question: "International Forms is the application on the Child Support Portal that enables staff to build International (Hague) documents online.",
    correct: true,
    explanation: "International Forms supports Hague document creation.",
    course: "Exploring the Child Support Portal"
  },
  {
    question: "QUICK includes all cases in the 54 states and territories, both IV-D and non IV-D.",
    correct: false,
    explanation: "That information is contained in the Federal Case Registry (FCR).",
    course: "Exploring the Child Support Portal"
  }
]

  }
];

