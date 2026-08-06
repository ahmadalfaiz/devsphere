// ============================================================
// src/registry/lessonRegistry.js
// Combines every tech's raw lesson data into one lookup object.
// This is the ONLY file that changes when you add a new
// technology — and the change is always the same 1 line.
// ============================================================

import { buildLessonIndex, buildResourceIndex } from "../utils/buildIndex";
import { authors } from "../data/authors";

import * as html from "./lessons/htmlLessons";
import * as css from "./lessons/cssLessons";
import * as react from "./lessons/reactLessons";
import * as nextjs from "./lessons/nextjsLessons";
import * as nodejs from "./lessons/nodejsLessons";
import * as expressjs from "./lessons/expressjsLessons";
import * as restapis from "./lessons/restapisLessons";
import * as python from "./lessons/pythonLessons";
// import * as javascript from "./lessons/javascriptLessons";
// import * as nextjs from "./lessons/nextjsLessons";
// import * as expressjs from "./lessons/expressjsLessons";
// ...add each new tech's import here as you create its file

function register(tech) {
  return {
    info: {
      ...tech.tutorialInfo,
      author: authors[tech.tutorialInfo.authorId] // resolved, not repeated
    },
    sections: tech.sections,
    resources: tech.resources,
    lessonIndex: buildLessonIndex(tech.sections, tech.tutorialInfo.shortTitle),
    resourceIndex: buildResourceIndex(tech.resources)
  };
}

export const lessonRegistry = {
  html: register(html),
  css: register(css),
  react: register(react),
  nextjs: register(nextjs),
  nodejs: register(nodejs),
  expressjs: register(expressjs),
  "rest-apis": register(restapis),
  python: register(python),
  // javascript: register(javascript),
  // nextjs: register(nextjs),
  // expressjs: register(expressjs),
  // ...one line per technology, no matter how many hundreds you add
};

export default lessonRegistry;

// ------------------------------------------------------------
// Usage elsewhere in the app:
//
//   import lessonRegistry from "../registry/lessonRegistry";
//
//   lessonRegistry.html.info                                -> course metadata
//   lessonRegistry.html.sections                             -> sidebar nav
//   lessonRegistry.html.lessonIndex["first-html-page"]        -> O(1) lookup
//   lessonRegistry.html.lessonIndex["first-html-page"].graph.next
//   lessonRegistry.html.resourceIndex["structure-of-a-modern-webpage"]
// ------------------------------------------------------------