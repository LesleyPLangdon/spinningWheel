# NJCSI Spin & Learn 🎡  
Interactive Conference Table Game – New Jersey Child Support Institute

## Overview

NJCSI Spin & Learn is a stand-alone, browser-based interactive game designed for conference vendor tables and outreach events. The game uses a spinning wheel mechanic to engage participants with Fact vs. Fiction questions related to New Jersey child support policy, procedures, and systems.

Participants spin the wheel, answer a question, and receive immediate feedback along with a recommended NJCSI training course for deeper learning. Course information is shown whether the participant answers correctly or incorrectly.

The experience is designed to be visually engaging, easy to use, and appropriate for unattended or lightly supervised conference environments.

---

## Goals

- Engage conference attendees through interactive learning
- Reinforce accurate child support knowledge
- Correct common misconceptions in a supportive way
- Promote NJCSI training opportunities
- Provide a reusable framework for future events

---

## Game Flow

1. Participant clicks the Spin button
2. The wheel lands on a category:
   - Probation
   - Finance
   - Family
   - UIFSA
   - CSSA
   - General Knowledge
3. A Fact or Fiction question appears
4. Participant selects an answer
5. A feedback screen appears:
   - Correct answer: celebratory message and course suggestion
   - Incorrect answer: explanation of the correct answer and course suggestion
6. Participant returns to the wheel and may play again

---

## Features

- Animated spinning wheel with easing (fast start, slow stop)
- Six content categories with ten questions each
- Non-repeating questions per category until all are used
- Fact / Fiction answer model
- Background music with sound toggle
- Sound effects for correct answers
- Rutgers University–aligned color branding
- Full-viewport, kiosk-friendly layout
- Responsive sizing for different screen resolutions
- No external libraries or frameworks required

---

## Technology Stack

- HTML5 for structure
- CSS3 for layout, styling, and branding
- Vanilla JavaScript for logic and interactivity
- Canvas API for wheel rendering and animation

---

## Project Structure

/project-root  
├── index.html  
├── style.css  
├── script.js  
├── images/  
│   └── boardwalkWithFarrisWheel.png  
├── audio/  
│   ├── background.mp3  
│   └── cheer.mp3  
└── README.md  

---

## Content Configuration

All game content is managed in script.js inside the wedges array.

Each category contains an array of question objects with the following structure:

{
  question: "Fact or Fiction statement",
  correct: true or false,
  explanation: "Shown when answer is incorrect",
  course: "NJCSI course title",
  courseUrl: "optional link"
}

Field usage:
- question: text shown to the participant
- correct: boolean value (true = Fact, false = Fiction)
- explanation: displayed when the participant selects the incorrect answer
- course: NJCSI course title shown on the feedback screen
- courseUrl: optional link to course information

---

## Answer Labels

The game uses internal boolean logic but displays customizable labels to users.

Answer labels are configured in one place:

{
  true: "Fact",
  false: "Fiction"
}

This allows the labels to be changed (for example, True/False or Yes/No) without modifying game logic or question data.

---

## Audio Behavior

Audio is managed entirely in JavaScript and follows modern browser autoplay requirements.

- Background music loops while the page is open
- Audio playback begins only after a user interaction
- A Sound button allows users to toggle audio on and off
- A cheer sound effect plays for correct answers
- Background music volume may be reduced during sound effects for clarity

Audio file paths are configured in a single location.

---

## Branding and Visual Design

The game is styled to align with Rutgers University and NJCSI branding.

- Rutgers Scarlet: #CC0033
- Rutgers Gray: #5F6A72
- High-contrast text for readability
- Clean, uncluttered layout suitable for professional audiences
- Atlantic City boardwalk–inspired background image

All visual styling is contained in style.css.

---

## Kiosk and Conference Use

This application is designed specifically for conference vendor tables and kiosk-style displays.

- Fills the viewport with no scrolling
- Responsive layout adapts to different screen sizes
- Suitable for laptops, touchscreen kiosks, and large monitors
- Can be hosted locally or on a simple web server

For best results, run the browser in full-screen mode during events.

---

## Configuration Checklist

To reuse this project for a new event:

1. Update categories and questions in script.js (wedges array)
2. Update wheel colors in script.js if desired
3. Replace the background image in the images folder if needed
4. Replace audio files in the audio folder if needed
5. Test the layout on the target device before the event

---

## Future Enhancements

Possible enhancements for future versions include:

- Content editor interface for non-technical users
- Importing questions from CSV or Google Sheets
- Additional sound effects (buzzer, confetti)
- Simple analytics (plays per category, correct answers)
- NJCSI logo placement in the center of the wheel
- Idle animation when no interaction occurs

---

## Maintenance Notes

- Content updates require editing only script.js
- Visual updates require editing only style.css
- The project intentionally avoids external libraries for longevity and portability

---

## Ownership and Use

Developed for the New Jersey Child Support Institute (NJCSI).

Intended for conference, outreach, and training support use.  
This project may be reused or adapted for future NJCSI events by updating content and assets.
