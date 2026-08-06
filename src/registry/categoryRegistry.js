// ============================================================
// src/registry/categoryRegistry.js
// NOT hand-written. Groups every tech by its tutorialInfo.category
// (Frontend, Backend, etc.) so a category landing page can do:
//   categoryRegistry["Frontend"] -> [{ id: "html", title, path }, ...]
// ============================================================

import lessonRegistry from "./lessonRegistry";

function buildCategoryRegistry() {
  const registry = {};

  Object.entries(lessonRegistry).forEach(([techId, tech]) => {
    const category = tech.info.category;
    if (!registry[category]) registry[category] = [];
    registry[category].push({
      id: techId,
      title: tech.info.title,
      shortTitle: tech.info.shortTitle,
      path: tech.info.path,
      difficulty: tech.info.difficulty,
      totalLessons: tech.info.totalLessons
    });
  });

  return registry;
}

export const categoryRegistry = buildCategoryRegistry();
export default categoryRegistry;

// ------------------------------------------------------------
// Usage:
//   import categoryRegistry from "../registry/categoryRegistry";
//   categoryRegistry["Frontend"]  -> [html, css, react, ...]
//   categoryRegistry["Backend"]   -> [nodejs, python, expressjs, ...]
// ------------------------------------------------------------