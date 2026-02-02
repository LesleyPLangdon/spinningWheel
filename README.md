# Spin & Learn 🎡  
Interactive Learning Theory Game – Instructional Design Portfolio Project

## Overview

Spin & Learn is a stand-alone, browser-based interactive learning experience designed to demonstrate instructional design principles through an engaging, game-based format. The project uses a spinning wheel mechanic to present learners with Fact vs. Fiction questions related to learning theory, instructional design models, and educational psychology.

Learners spin the wheel, respond to a question, and receive immediate feedback along with a suggested topic or resource for deeper exploration. Feedback is provided whether the learner answers correctly or incorrectly, reinforcing reflection and conceptual understanding.

This project is designed as a **portfolio artifact** showcasing learner-centered design, microlearning principles, feedback strategies, and interactive web-based delivery.

---

## Design Goals

- Demonstrate application of learning theory through interactive design
- Reinforce conceptual understanding using immediate feedback
- Model effective microlearning and retrieval practice
- Showcase instructional design thinking in a technical implementation
- Provide a reusable framework for educational content delivery

---

## Learning Experience Flow

1. Learner clicks the Spin button
2. The wheel lands on a learning theory category, such as:
   - Behaviorism
   - Cognitivism
   - Constructivism
   - Adult Learning Theory
   - Instructional Design Models
   - Assessment & Feedback
3. A Fact or Fiction statement appears
4. Learner selects an answer
5. A feedback screen appears:
   - Correct answer: confirmation and reinforcement
   - Incorrect answer: explanation and clarification
6. Learner is prompted to continue exploring or return to the wheel

---

## Key Features

- Animated spinning wheel with easing for natural motion
- Category-based questions aligned to learning theory
- Fact / Fiction response model for conceptual clarity
- Non-repeating questions per category
- Immediate corrective feedback
- Optional background audio and sound effects
- Full-viewport, distraction-free layout
- Responsive design for different screen sizes
- Framework-free implementation (HTML, CSS, JavaScript only)

---

## Instructional Design Foundations

This project intentionally incorporates several instructional design principles:

- **Retrieval Practice:** Learners actively recall information through questions
- **Immediate Feedback:** Reinforces correct understanding and corrects misconceptions
- **Microlearning:** Short, focused interactions reduce cognitive load
- **Motivation & Engagement:** Game mechanics increase voluntary participation
- **Adult Learning Principles:** Respectful tone, relevance, and autonomy

---

## Technology Stack

- HTML5 for structure and semantic layout
- CSS3 for responsive design and visual styling
- Vanilla JavaScript for logic, state management, and interaction
- Canvas API for dynamic wheel rendering and animation

No external libraries or frameworks are used.

---

## Project Structure

/project-root  
├── index.html  
├── style.css  
├── script.js  
├── images/  
│   └── background.png  
├── audio/  
│   ├── background.mp3  
│   └── feedback.mp3  
└── README.md  

---

## Content Configuration

All instructional content is managed in script.js inside the wedges array.

Each category contains an array of question objects with the following structure:

{
  question: "Fact or Fiction statement related to learning theory",
  correct: true or false,
  explanation: "Explanation shown when the learner selects the incorrect answer",
  course: "Related concept, theory, or learning resource",
  courseUrl: "optional link"
}

Field usage:
- question: the conceptual statement presented to the learner
- correct: boolean value (true = Fact, false = Fiction)
- explanation: supports conceptual clarification
- course: related theory, model, or suggested reading
- courseUrl: optional reference or resource link

---

## Answer Labels

The experience uses internal boolean logic while displaying learner-friendly labels.

Answer labels are configurable:

{
  true: "Fact",
  false: "Fiction"
}

This allows the interaction model to be reused with different terminology if desired.

---

## Audio Behavior (Optional)

Audio is optional and configurable to support engagement without distraction.

- Background audio may loop while the experience is active
- Audio playback begins only after a learner interaction
- Sound controls allow audio to be toggled on or off
- Feedback sounds may reinforce correct responses

Audio behavior is managed centrally in script.js.

---

## Visual Design

The visual design emphasizes clarity, accessibility, and professionalism.

- High-contrast text for readability
- Minimalist layout to reduce cognitive load
- Responsive scaling for different devices
- Neutral or academic-themed background imagery

All styling is contained in style.css.

---

## Learning Contexts

This project can be adapted for use in:

- Instructional design portfolios
- Professional development demonstrations
- Faculty training examples
- Educational technology showcases
- Self-paced learning modules

---

## Reusability and Adaptation

The project is intentionally designed to be reusable.

To adapt for a new topic:
1. Update categories and questions in script.js
2. Adjust visual styling in style.css if needed
3. Replace background or audio assets if desired
4. Test interaction flow and feedback clarity

No structural changes are required.

---

## Future Enhancements

Potential future enhancements include:

- Content editor interface for non-technical users
- Importing questions from external data sources
- Expanded analytics for learner interactions
- Multiple difficulty levels
- Integration with LMS or SCORM wrappers

---

## Maintenance Notes

- Content changes require editing only script.js
- Visual updates require editing only style.css
- No external dependencies ensure longevity and portability

---

## Portfolio Context

This project was developed as an instructional design portfolio artifact to demonstrate:

- Learning theory application
- Interactive learning design
- Feedback and assessment strategies
- Technical implementation of instructional concepts

It may be extended or customized to support additional learning objectives.
