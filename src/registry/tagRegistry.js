// ============================================================
// src/registry/tagRegistry.js
// NOT hand-written. Scans every lesson across every tech and
// groups them by tag, so search/filter-by-tag is O(1):
//   tagRegistry["forms"] -> [{ techId, slug, title }, ...]
// ============================================================

import lessonRegistry from "./lessonRegistry";

function buildTagRegistry() {
  const registry = {};

  Object.entries(lessonRegistry).forEach(([techId, tech]) => {
    Object.values(tech.lessonIndex).forEach((lesson) => {
      lesson.tags.forEach((tag) => {
        if (!registry[tag]) registry[tag] = [];
        registry[tag].push({
          techId,
          slug: lesson.slug,
          title: lesson.title,
          path: `/${techId}/${lesson.slug}`
        });
      });
    });
  });

  return registry;
}

export const tagRegistry = buildTagRegistry();
export default tagRegistry;

// ------------------------------------------------------------
// Usage:
//   import tagRegistry from "../registry/tagRegistry";
//   tagRegistry["forms"]  -> every lesson across every tech tagged "forms"
// ------------------------------------------------------------