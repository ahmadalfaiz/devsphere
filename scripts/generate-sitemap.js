import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import contentRegistry from "../src/content/contentRegistry.js";

const SITE_URL = "https://devspherehq.com";

/*
|--------------------------------------------------------------------------
| Static Pages
|--------------------------------------------------------------------------
|
| These are pages that always exist.
| Tutorial pages will be added automatically later.
|
*/

const pages = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1.0,
  },

  {
    url: "/tutorials",
    changefreq: "daily",
    priority: 0.95,
  },

  {
    url: "/courses",
    changefreq: "weekly",
    priority: 0.90,
  },

  // Tutorial Course Pages
  {
    url: "/tutorials/html",
    changefreq: "weekly",
    priority: 0.90,
  },
  {
    url: "/tutorials/css",
    changefreq: "weekly",
    priority: 0.90,
  },
  {
    url: "/tutorials/react",
    changefreq: "weekly",
    priority: 0.90,
  },
  {
    url: "/tutorials/nextjs",
    changefreq: "weekly",
    priority: 0.90,
  },
  {
    url: "/tutorials/nodejs",
    changefreq: "weekly",
    priority: 0.90,
  },
  {
    url: "/tutorials/expressjs",
    changefreq: "weekly",
    priority: 0.90,
  },
];

// Automatically build a URL for every lesson inside contentRegistry
/*const lessonPages = [];

for (const techStack in contentRegistry) {
  const lessons = contentRegistry[techStack];

  for (const lessonSlug in lessons) {
    lessonPages.push({
      url: `/tutorials/${techStack}/${lessonSlug}`,
      changefreq: "monthly",
      priority: 0.8,
    });
  }
}*/

/* Newly added code on 13th AUg to automatically add lesson url */
const lessonPages = [];

Object.entries(contentRegistry).forEach(
  ([stackSlug, lessons]) => {

    Object.keys(lessons).forEach(
      (lessonSlug) => {

        lessonPages.push({
          url: `/tutorials/${stackSlug}/${lessonSlug}`,
          changefreq: "monthly",
          priority: 0.80,
        });

      }
    );

  }
);
/* Upto this line newly added 13th Aug */

async function generateSitemap() {
  const distFolder = resolve("dist");

  if (!existsSync(distFolder)) {
    mkdirSync(distFolder, { recursive: true });
  }

  const sitemap = new SitemapStream({
    hostname: SITE_URL,
  });

  const writeStream = createWriteStream(resolve(distFolder, "sitemap.xml"));

  sitemap.pipe(writeStream);

  /*[...pages, ...lessonPages]*/ pages.forEach((page) => {
    sitemap.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: new Date().toISOString(),
    });
  });

  /* Newly added code on 13th AUg to automatically add lesson url */
  lessonPages.forEach((page) => {

    sitemap.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: new Date().toISOString(),
    });

  });
  /* Upto this line newly added 13th Aug */

  sitemap.end();

  await streamToPromise(sitemap);

  console.log("✅ sitemap.xml generated successfully!");

  /* Newly added code on 13th Aug to automatically add lesson url */
  console.log(
    `📄 Static pages: ${pages.length}`
  );

  console.log(
    `📚 Tutorial lessons: ${lessonPages.length}`
  );

  console.log(
    `🔗 Total URLs: ${pages.length + lessonPages.length}`
  );
  /* Upto this line newly added 13th Aug */
}

generateSitemap().catch((error) => {
  console.error("❌ Sitemap generation failed.");
  console.error(error);
  process.exit(1);
});