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
import * as authentication from "./lessons/authenticationLessons";
import * as microservices from "./lessons/microservicesLessons";
import * as c from "./lessons/cLessons";
import * as cpp from "./lessons/cppLessons";
import * as python from "./lessons/pythonLessons";
import * as machinelearning from "./lessons/machinelearningLessons";
import * as deeplearning from "./lessons/deeplearningLessons";
import * as nlp from "./lessons/nlpLessons.js";
import * as computervision from "./lessons/computervisionLessons.js";
import * as generativeai from "./lessons/generativeaiLessons.js";
import * as docker from "./lessons/dockerLessons.js";
import * as kubernetes from "./lessons/kubernetesLessons.js";
import * as cicd from "./lessons/cicdLessons.js";
import * as linux from "./lessons/linuxLessons.js";
import * as aws from "./lessons/awsLessons.js";
import * as mysql from "./lessons/mysqlLessons.js";
import * as postgresql from "./lessons/postgresqlLessons.js";
import * as mongodb from "./lessons/mongodbLessons.js";
import * as redis from "./lessons/redisLessons.js";
import * as databasedesign from "./lessons/databasedesignLessons.js";
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
  authentication: register(authentication),
  microservices: register(microservices),
  c: register(c),
  cpp: register(cpp),
  python: register(python),
  "machine-learning": register(machinelearning),
  "deep-learning": register(deeplearning),
  "natural-language-processing": register(nlp),
  "computer-vision": register(computervision),
  "generative-ai": register(generativeai),
  docker: register(docker),
  kubernetes: register(kubernetes),
  "ci-cd": register(cicd),
  linux: register(linux),
  "amazon-web-services": register(aws),
  mysql: register(mysql),
  postgresql: register(postgresql),
  mongodb: register(mongodb),
  redis: register(redis),
  "database-design": register(databasedesign),
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