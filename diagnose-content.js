// diagnose-content.js
import { lessonRegistry } from "./src/registry/lessonRegistry.js";
import contentRegistry from "./src/content/contentRegistry.js";

for (const [tech, tutorial] of Object.entries(lessonRegistry)) {
  const content = contentRegistry[tech] || {};

  const missing = Object.keys(tutorial.lessonIndex)
    .filter((slug) => !content[slug]);

  console.log(`\n${tech}: ${Object.keys(tutorial.lessonIndex).length} lessons, ${missing.length} missing`);

  if (missing.length) {
    console.log(missing.join("\n"));
  }
}