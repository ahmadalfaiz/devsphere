// ============================================================
// src/registry/lessons/htmlLessons.js
// Raw content only. No previous/next, no seo.title/keywords,
// no repeated author info — lessonRegistry.js generates those.
//
// Per lesson you write:
//   id, order, slug, title, shortTitle, readingTime, tags,
//   status, featured, description
// Plus (only for genuine "hub" lessons):
//   related, prerequisites, recommended
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "html",
  title: "HTML Tutorial",
  shortTitle: "HTML",
  category: "Frontend",
  description:
    "Learn HTML from beginner to advanced with practical examples, projects, interview preparation, and best practices.",
  icon: "html",
  difficulty: "Beginner", // course-level badge, separate from per-section defaults
  estimatedHours: 21,
  totalLessons: 76,
  version: "HTML5",
  language: "English",
  path: "/html",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["html", "frontend", "web development", "markup", "html5", "html basics", "html advanced"],
  seo: {
    title: "HTML Tutorial - Learn HTML from Scratch | DevSphere",
    description:
      "Master HTML with beginner to advanced tutorials, examples, interview questions, projects and best practices.",
    keywords: ["HTML", "HTML Tutorial", "Learn HTML", "HTML5", "Web Development", "Frontend Development", "HTML Basics", "HTML Advanced", "HTML Projects"]
  }
};

export const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    order: 1,
    difficulty: "Beginner", // section-level default
    lessons: [
      {
        id: 1,
        order: 1,
        slug: "introduction-to-html",
        title: "Introduction to HTML",
        shortTitle: "Introduction",
        readingTime: 15,
        tags: ["html", "introduction", "basics"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn what HTML is, why it is used, and how to build your first webpage.",
        related: ["history-of-html", "html-editors", "html-document-structure"],
        prerequisites: [],
        recommended: ["first-html-page", "html-elements"]
      },
      {
        id: 2,
        order: 2,
        slug: "history-of-html",
        title: "History of HTML",
        shortTitle: "History",
        readingTime: 12,
        tags: ["html", "history", "tim-berners-lee"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Discover how HTML evolved from HTML 1.0 to modern HTML5.",
        related: ["introduction-to-html", "html-editors", "html-document-structure"],
        prerequisites: ["introduction-to-html"],
        recommended: ["html-editors"]
      },
      {
        id: 3,
        order: 3,
        slug: "html-editors",
        title: "HTML Editors",
        shortTitle: "Editors",
        readingTime: 10,
        tags: ["html", "vscode", "editors"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Explore VS Code, Sublime Text, Notepad++, and online HTML editors.",
        related: ["introduction-to-html", "history-of-html", "html-document-structure"],
        prerequisites: ["introduction-to-html"],
        recommended: ["first-html-page"]
      },
      {
        id: 4,
        order: 4,
        slug: "html-document-structure",
        title: "HTML Document Structure",
        shortTitle: "Document Structure",
        readingTime: 18,
        tags: ["html", "doctype", "head", "body"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Understand the structure of every HTML document including DOCTYPE, html, head and body.",
        related: ["html-elements"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 5,
        order: 5,
        slug: "first-html-page",
        title: "Create Your First HTML Page",
        shortTitle: "First HTML Page",
        readingTime: 20,
        tags: ["html", "first webpage", "practice"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Build your first HTML webpage from scratch using VS Code.",
        related: ["html-editors", "html-document-structure"],
        prerequisites: ["html-editors", "html-document-structure"],
        recommended: []
      }
    ]
  },

  {
    id: "html-fundamentals",
    title: "HTML Fundamentals",
    order: 2,
    difficulty: "Beginner",
    lessons: [
      {
        id: 6,
        order: 1,
        slug: "html-elements",
        title: "HTML Elements",
        shortTitle: "Elements",
        readingTime: 12,
        tags: ["html", "elements", "syntax"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn what HTML elements are and how opening tags, content, and closing tags work together.",
        related: ["html-attributes", "html-document-structure"],
        prerequisites: ["first-html-page"],
        recommended: ["html-attributes"]
      },
      {
        id: 7,
        order: 2,
        slug: "html-attributes",
        title: "HTML Attributes",
        shortTitle: "Attributes",
        readingTime: 12,
        tags: ["html", "attributes", "syntax"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Understand how attributes add extra information and behavior to HTML elements.",
        related: ["html-elements", "global-attributes"],
        prerequisites: ["html-elements"],
        recommended: ["html-classes"]
      },
      {
        id: 8,
        order: 3,
        slug: "html-headings",
        title: "HTML Headings",
        shortTitle: "Headings",
        readingTime: 10,
        tags: ["html", "headings", "seo"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Master heading levels h1 through h6 and learn how to structure content for readability and SEO.",
        related: ["html-paragraphs", "seo-friendly-html"],
        prerequisites: ["html-elements"],
        recommended: []
      },
      {
        id: 9,
        order: 4,
        slug: "html-paragraphs",
        title: "HTML Paragraphs",
        shortTitle: "Paragraphs",
        readingTime: 8,
        tags: ["html", "paragraphs", "text"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to structure body text using paragraph elements correctly.",
        related: ["html-headings", "html-formatting"],
        prerequisites: ["html-elements"],
        recommended: []
      },
      {
        id: 10,
        order: 5,
        slug: "html-comments",
        title: "HTML Comments",
        shortTitle: "Comments",
        readingTime: 8,
        tags: ["html", "comments", "best practices"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to add comments to HTML code to document and organize your markup.",
        related: ["html-best-practices"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 11,
        order: 6,
        slug: "html-formatting",
        title: "HTML Text Formatting",
        shortTitle: "Text Formatting",
        readingTime: 10,
        tags: ["html", "formatting", "text"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Explore bold, italic, underline, and other inline formatting elements in HTML.",
        related: ["html-paragraphs", "html-quotations"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 12,
        order: 7,
        slug: "html-quotations",
        title: "HTML Quotations",
        shortTitle: "Quotations",
        readingTime: 9,
        tags: ["html", "quotations", "blockquote"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to correctly mark up quotes and citations using blockquote, q, and cite elements.",
        related: ["html-formatting"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "links-images-media",
    title: "Links, Images & Media",
    order: 3,
    difficulty: "Beginner",
    lessons: [
      {
        id: 13,
        order: 1,
        slug: "html-links",
        title: "HTML Links",
        shortTitle: "Links",
        readingTime: 12,
        tags: ["html", "links", "hyperlinks"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to create hyperlinks that connect webpages and resources together.",
        related: ["html-images", "url-encoding"],
        prerequisites: ["html-elements"],
        recommended: ["html-images"]
      },
      {
        id: 14,
        order: 2,
        slug: "html-images",
        title: "HTML Images",
        shortTitle: "Images",
        readingTime: 12,
        tags: ["html", "images", "media"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed images correctly with proper alt text for accessibility and SEO.",
        related: ["html-links", "responsive-images"],
        prerequisites: ["html-links"],
        recommended: []
      },
      {
        id: 15,
        order: 3,
        slug: "html-favicon",
        title: "HTML Favicon",
        shortTitle: "Favicon",
        readingTime: 6,
        tags: ["html", "favicon", "branding"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to add a favicon to your website for browser tab branding.",
        related: ["html-images"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 16,
        order: 4,
        slug: "html-audio",
        title: "HTML Audio",
        shortTitle: "Audio",
        readingTime: 10,
        tags: ["html", "audio", "media"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed native audio playback in webpages using the audio element.",
        related: ["html-video"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 17,
        order: 5,
        slug: "html-video",
        title: "HTML Video",
        shortTitle: "Video",
        readingTime: 12,
        tags: ["html", "video", "media"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed native video playback in webpages using the video element.",
        related: ["html-audio", "youtube-embedding"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 18,
        order: 6,
        slug: "youtube-embedding",
        title: "Embedding YouTube Videos",
        shortTitle: "YouTube Embeds",
        readingTime: 8,
        tags: ["html", "video", "iframe"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed YouTube videos into your webpages using iframes.",
        related: ["html-video", "html-iframes"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "lists-tables",
    title: "Lists & Tables",
    order: 4,
    difficulty: "Beginner",
    lessons: [
      {
        id: 19,
        order: 1,
        slug: "html-lists",
        title: "HTML Lists",
        shortTitle: "Lists",
        readingTime: 8,
        tags: ["html", "lists"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Get an overview of the different types of lists available in HTML.",
        related: ["ordered-lists", "unordered-lists"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 20,
        order: 2,
        slug: "ordered-lists",
        title: "Ordered Lists",
        shortTitle: "Ordered Lists",
        readingTime: 8,
        tags: ["html", "lists", "ordered list"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to create numbered lists using the ordered list element.",
        related: ["html-lists", "unordered-lists"],
        prerequisites: ["html-lists"],
        recommended: []
      },
      {
        id: 21,
        order: 3,
        slug: "unordered-lists",
        title: "Unordered Lists",
        shortTitle: "Unordered Lists",
        readingTime: 8,
        tags: ["html", "lists", "unordered list"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to create bullet point lists using the unordered list element.",
        related: ["html-lists", "ordered-lists"],
        prerequisites: ["html-lists"],
        recommended: []
      },
      {
        id: 22,
        order: 4,
        slug: "description-lists",
        title: "Description Lists",
        shortTitle: "Description Lists",
        readingTime: 8,
        tags: ["html", "lists", "definitions"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to create term-and-description lists using the description list element.",
        related: ["html-lists"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 23,
        order: 5,
        slug: "html-tables",
        title: "HTML Tables",
        shortTitle: "Tables",
        readingTime: 14,
        tags: ["html", "tables", "data"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to structure tabular data using rows, columns, and headers in HTML tables.",
        related: ["html-lists"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "page-layout-structure",
    title: "Page Layout & Structure",
    order: 5,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 24,
        order: 1,
        slug: "block-inline-elements",
        title: "Block vs Inline Elements",
        shortTitle: "Block vs Inline",
        readingTime: 10,
        tags: ["html", "layout", "display"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Understand the difference between block-level and inline elements and how they affect layout.",
        related: ["html-div", "html-span"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 25,
        order: 2,
        slug: "html-div",
        title: "HTML Div",
        shortTitle: "Div",
        readingTime: 8,
        tags: ["html", "div", "layout"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the div element as a generic container for grouping content.",
        related: ["block-inline-elements", "html-classes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 26,
        order: 3,
        slug: "html-span",
        title: "HTML Span",
        shortTitle: "Span",
        readingTime: 6,
        tags: ["html", "span", "inline"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the span element to group inline content for styling.",
        related: ["block-inline-elements", "html-div"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 27,
        order: 4,
        slug: "html-classes",
        title: "HTML Classes",
        shortTitle: "Classes",
        readingTime: 8,
        tags: ["html", "classes", "css hooks"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the class attribute to group and style multiple elements.",
        related: ["html-id", "html-attributes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 28,
        order: 5,
        slug: "html-id",
        title: "HTML ID",
        shortTitle: "ID",
        readingTime: 8,
        tags: ["html", "id", "css hooks"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the id attribute to uniquely identify elements on a page.",
        related: ["html-classes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 29,
        order: 6,
        slug: "html-layout",
        title: "HTML Layout",
        shortTitle: "Layout",
        readingTime: 12,
        tags: ["html", "layout", "structure"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn common HTML layout techniques used to structure real webpages.",
        related: ["semantic-html", "html-div"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 30,
        order: 7,
        slug: "html-iframes",
        title: "HTML Iframes",
        shortTitle: "Iframes",
        readingTime: 8,
        tags: ["html", "iframe", "embedding"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed external content into your webpage using the iframe element.",
        related: ["youtube-embedding"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "html-forms",
    title: "HTML Forms",
    order: 6,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 31,
        order: 1,
        slug: "html-forms",
        title: "HTML Forms",
        shortTitle: "Forms",
        readingTime: 12,
        tags: ["html", "forms"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Get an introduction to HTML forms and how they collect user input.",
        related: ["form-elements", "input-types"],
        prerequisites: ["html-attributes"],
        recommended: ["form-elements"]
      },
      {
        id: 32,
        order: 2,
        slug: "form-elements",
        title: "Form Elements",
        shortTitle: "Form Elements",
        readingTime: 12,
        tags: ["html", "forms", "form elements"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn about the building blocks that make up an HTML form.",
        related: ["html-forms", "input-types"],
        prerequisites: ["html-forms"],
        recommended: []
      },
      {
        id: 33,
        order: 3,
        slug: "input-types",
        title: "Input Types",
        shortTitle: "Input Types",
        readingTime: 14,
        tags: ["html", "forms", "input"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Explore the different HTML5 input types available for collecting user data.",
        related: ["input-attributes", "form-validation"],
        prerequisites: ["form-elements"],
        recommended: []
      },
      {
        id: 34,
        order: 4,
        slug: "input-attributes",
        title: "Input Attributes",
        shortTitle: "Input Attributes",
        readingTime: 10,
        tags: ["html", "forms", "input"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn the common attributes used to configure and validate input fields.",
        related: ["input-types", "form-validation"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 35,
        order: 5,
        slug: "textarea",
        title: "Textarea",
        shortTitle: "Textarea",
        readingTime: 6,
        tags: ["html", "forms", "textarea"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the textarea element to collect multi-line text input.",
        related: ["form-elements"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 36,
        order: 6,
        slug: "select-dropdown",
        title: "Select Dropdown",
        shortTitle: "Select Dropdown",
        readingTime: 8,
        tags: ["html", "forms", "select"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to create dropdown menus using the select and option elements.",
        related: ["radio-buttons", "checkboxes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 37,
        order: 7,
        slug: "radio-buttons",
        title: "Radio Buttons",
        shortTitle: "Radio Buttons",
        readingTime: 8,
        tags: ["html", "forms", "radio"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to let users pick a single option using radio buttons.",
        related: ["checkboxes", "select-dropdown"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 38,
        order: 8,
        slug: "checkboxes",
        title: "Checkboxes",
        shortTitle: "Checkboxes",
        readingTime: 8,
        tags: ["html", "forms", "checkbox"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to let users select multiple options using checkboxes.",
        related: ["radio-buttons"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 39,
        order: 9,
        slug: "form-validation",
        title: "Form Validation",
        shortTitle: "Validation",
        readingTime: 12,
        tags: ["html", "forms", "validation"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to validate form input directly in the browser using built-in HTML attributes.",
        related: ["input-types", "input-attributes"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "semantic-html",
    title: "Semantic HTML",
    order: 7,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 40,
        order: 1,
        slug: "semantic-html",
        title: "Introduction to Semantic HTML",
        shortTitle: "Semantic HTML",
        readingTime: 12,
        tags: ["html", "semantic", "accessibility"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn why semantic HTML matters for accessibility, SEO, and code readability.",
        related: ["header-footer", "main-section-article"],
        prerequisites: [],
        recommended: ["header-footer"]
      },
      {
        id: 41,
        order: 2,
        slug: "header-footer",
        title: "Header & Footer",
        shortTitle: "Header & Footer",
        readingTime: 8,
        tags: ["html", "semantic", "header", "footer"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the header and footer elements to structure page sections.",
        related: ["semantic-html", "main-section-article"],
        prerequisites: ["semantic-html"],
        recommended: []
      },
      {
        id: 42,
        order: 3,
        slug: "main-section-article",
        title: "Main, Section & Article",
        shortTitle: "Main / Section / Article",
        readingTime: 12,
        tags: ["html", "semantic", "structure"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn the differences between main, section, and article elements and when to use each.",
        related: ["header-footer", "aside-nav"],
        prerequisites: ["semantic-html"],
        recommended: []
      },
      {
        id: 43,
        order: 4,
        slug: "aside-nav",
        title: "Aside & Navigation",
        shortTitle: "Aside & Nav",
        readingTime: 10,
        tags: ["html", "semantic", "navigation"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to use the aside and nav elements for sidebars and navigation menus.",
        related: ["main-section-article"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 44,
        order: 5,
        slug: "semantic-best-practices",
        title: "Semantic Best Practices",
        shortTitle: "Semantic Best Practices",
        readingTime: 10,
        tags: ["html", "semantic", "best practices"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn best practices for writing clean, meaningful, semantic HTML.",
        related: ["semantic-html", "html-best-practices"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "responsive-html",
    title: "Responsive HTML",
    order: 8,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 45,
        order: 1,
        slug: "responsive-web-design",
        title: "Responsive Web Design",
        shortTitle: "Responsive Design",
        readingTime: 12,
        tags: ["html", "responsive", "mobile"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Get an introduction to responsive web design principles and why they matter.",
        related: ["viewport", "responsive-images"],
        prerequisites: [],
        recommended: ["viewport"]
      },
      {
        id: 46,
        order: 2,
        slug: "viewport",
        title: "Viewport Meta Tag",
        shortTitle: "Viewport",
        readingTime: 8,
        tags: ["html", "responsive", "viewport"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how the viewport meta tag controls layout on mobile devices.",
        related: ["responsive-web-design"],
        prerequisites: ["responsive-web-design"],
        recommended: []
      },
      {
        id: 47,
        order: 3,
        slug: "responsive-images",
        title: "Responsive Images",
        shortTitle: "Responsive Images",
        readingTime: 10,
        tags: ["html", "responsive", "images"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to serve appropriately sized images across different screen sizes.",
        related: ["html-images", "viewport"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 48,
        order: 4,
        slug: "mobile-friendly-pages",
        title: "Mobile Friendly Pages",
        shortTitle: "Mobile Friendly",
        readingTime: 10,
        tags: ["html", "responsive", "mobile"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn practical tips for making your webpages mobile-friendly.",
        related: ["responsive-web-design", "viewport"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "graphics-visual-content",
    title: "Graphics & Visual Content",
    order: 9,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 49,
        order: 1,
        slug: "html-canvas",
        title: "HTML Canvas",
        shortTitle: "Canvas",
        readingTime: 14,
        tags: ["html", "canvas", "graphics"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to draw graphics and animations directly in the browser using the canvas element.",
        related: ["html-svg"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 50,
        order: 2,
        slug: "html-svg",
        title: "HTML SVG",
        shortTitle: "SVG",
        readingTime: 12,
        tags: ["html", "svg", "graphics"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to embed scalable vector graphics directly into HTML.",
        related: ["html-canvas"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "html-apis",
    title: "HTML APIs",
    order: 10,
    difficulty: "Advanced",
    lessons: [
      {
        id: 51,
        order: 1,
        slug: "web-storage",
        title: "Web Storage",
        shortTitle: "Web Storage",
        readingTime: 12,
        tags: ["html", "api", "storage"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to store data in the browser using localStorage and sessionStorage.",
        related: ["geolocation-api"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 52,
        order: 2,
        slug: "geolocation-api",
        title: "Geolocation API",
        shortTitle: "Geolocation",
        readingTime: 10,
        tags: ["html", "api", "geolocation"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to access a user's location in the browser using the Geolocation API.",
        related: ["web-storage"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 53,
        order: 3,
        slug: "drag-drop-api",
        title: "Drag and Drop API",
        shortTitle: "Drag & Drop",
        readingTime: 12,
        tags: ["html", "api", "drag and drop"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to implement native drag-and-drop interactions using HTML5 APIs.",
        related: ["web-storage"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 54,
        order: 4,
        slug: "web-workers",
        title: "Web Workers",
        shortTitle: "Web Workers",
        readingTime: 12,
        tags: ["html", "api", "web workers"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how web workers allow scripts to run in the background without blocking the UI.",
        related: ["server-sent-events"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 55,
        order: 5,
        slug: "server-sent-events",
        title: "Server-Sent Events",
        shortTitle: "Server-Sent Events",
        readingTime: 12,
        tags: ["html", "api", "real-time"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to receive real-time updates from a server using Server-Sent Events.",
        related: ["web-workers"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "accessibility-seo",
    title: "Accessibility & SEO",
    order: 11,
    difficulty: "Intermediate",
    lessons: [
      {
        id: 56,
        order: 1,
        slug: "html-accessibility",
        title: "HTML Accessibility",
        shortTitle: "Accessibility",
        readingTime: 14,
        tags: ["html", "accessibility", "a11y"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to write accessible HTML that works well with assistive technologies.",
        related: ["aria-attributes", "semantic-html"],
        prerequisites: [],
        recommended: ["aria-attributes"]
      },
      {
        id: 57,
        order: 2,
        slug: "aria-attributes",
        title: "ARIA Attributes",
        shortTitle: "ARIA",
        readingTime: 12,
        tags: ["html", "accessibility", "aria"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how ARIA attributes enhance accessibility for complex UI components.",
        related: ["html-accessibility"],
        prerequisites: ["html-accessibility"],
        recommended: []
      },
      {
        id: 58,
        order: 3,
        slug: "seo-friendly-html",
        title: "SEO-Friendly HTML",
        shortTitle: "SEO-Friendly HTML",
        readingTime: 12,
        tags: ["html", "seo", "semantic"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to write HTML that helps search engines understand and rank your content.",
        related: ["semantic-html", "html-headings"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 59,
        order: 4,
        slug: "html-best-practices",
        title: "HTML Best Practices",
        shortTitle: "Best Practices",
        readingTime: 12,
        tags: ["html", "best practices", "clean code"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn a checklist of best practices followed by professional HTML developers.",
        related: ["semantic-best-practices", "seo-friendly-html"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "html-references",
    title: "HTML References",
    order: 12,
    difficulty: "Beginner",
    lessons: [
      {
        id: 60,
        order: 1,
        slug: "html-tags-reference",
        title: "HTML Tags Reference",
        shortTitle: "Tags Reference",
        readingTime: 10,
        tags: ["html", "reference", "tags"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "A complete reference of commonly used HTML tags and their purposes.",
        related: ["global-attributes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 61,
        order: 2,
        slug: "global-attributes",
        title: "Global Attributes",
        shortTitle: "Global Attributes",
        readingTime: 10,
        tags: ["html", "reference", "attributes"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn about attributes that can be used on almost any HTML element.",
        related: ["html-attributes"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 62,
        order: 3,
        slug: "html-entities",
        title: "HTML Entities",
        shortTitle: "Entities",
        readingTime: 8,
        tags: ["html", "entities", "reference"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to display reserved and special characters using HTML entities.",
        related: ["html-symbols"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 63,
        order: 4,
        slug: "html-symbols",
        title: "HTML Symbols",
        shortTitle: "Symbols",
        readingTime: 8,
        tags: ["html", "symbols", "reference"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to display mathematical and other symbols using HTML entity codes.",
        related: ["html-entities"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 64,
        order: 5,
        slug: "html-emojis",
        title: "HTML Emojis",
        shortTitle: "Emojis",
        readingTime: 6,
        tags: ["html", "emoji", "unicode"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how to display emojis in HTML using unicode characters and entities.",
        related: ["html-symbols"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 65,
        order: 6,
        slug: "html-charsets",
        title: "HTML Character Sets",
        shortTitle: "Character Sets",
        readingTime: 8,
        tags: ["html", "charset", "encoding"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how character encoding affects how text is displayed on webpages.",
        related: ["url-encoding"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 66,
        order: 7,
        slug: "url-encoding",
        title: "URL Encoding",
        shortTitle: "URL Encoding",
        readingTime: 8,
        tags: ["html", "url", "encoding"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn how special characters are encoded in URLs and why it matters.",
        related: ["html-charsets", "html-links"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "real-projects",
    title: "Real Projects",
    order: 13,
    difficulty: "Advanced",
    lessons: [
      {
        id: 67,
        order: 1,
        slug: "portfolio-page",
        title: "Portfolio Page",
        shortTitle: "Portfolio Project",
        readingTime: 20,
        tags: ["html", "project", "portfolio"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Build a personal portfolio page using everything you've learned so far.",
        related: ["landing-page"],
        prerequisites: ["semantic-html", "html-forms"],
        recommended: []
      },
      {
        id: 68,
        order: 2,
        slug: "landing-page",
        title: "Landing Page",
        shortTitle: "Landing Page Project",
        readingTime: 20,
        tags: ["html", "project", "landing page"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Build a marketing landing page using semantic HTML structure.",
        related: ["portfolio-page"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 69,
        order: 3,
        slug: "registration-form",
        title: "Registration Form",
        shortTitle: "Registration Form Project",
        readingTime: 18,
        tags: ["html", "project", "forms"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Build a real-world registration form using HTML form elements and validation.",
        related: ["form-validation", "html-forms"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 70,
        order: 4,
        slug: "restaurant-website",
        title: "Restaurant Website",
        shortTitle: "Restaurant Website Project",
        readingTime: 22,
        tags: ["html", "project", "restaurant"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Build a multi-section restaurant website using semantic HTML.",
        related: ["landing-page"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 71,
        order: 5,
        slug: "blog-page",
        title: "Blog Website",
        shortTitle: "Blog Website Project",
        readingTime: 20,
        tags: ["html", "project", "blog"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Build a blog webpage layout using headings, articles, and semantic structure.",
        related: ["main-section-article"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    order: 14,
    difficulty: "Advanced",
    lessons: [
      {
        id: 72,
        order: 1,
        slug: "html-interview-questions",
        title: "HTML Interview Questions",
        shortTitle: "Interview Questions",
        readingTime: 18,
        tags: ["html", "interview", "career"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Prepare for HTML interviews with commonly asked questions and answers.",
        related: ["html-coding-challenges"],
        prerequisites: [],
        recommended: ["html-coding-challenges"]
      },
      {
        id: 73,
        order: 2,
        slug: "html-coding-challenges",
        title: "HTML Coding Challenges",
        shortTitle: "Coding Challenges",
        readingTime: 20,
        tags: ["html", "interview", "practice"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Practice HTML coding challenges commonly used in technical interviews.",
        related: ["html-interview-questions"],
        prerequisites: [],
        recommended: []
      },
      {
        id: 74,
        order: 3,
        slug: "common-html-mistakes",
        title: "Common HTML Mistakes",
        shortTitle: "Common Mistakes",
        readingTime: 12,
        tags: ["html", "mistakes", "best practices"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn about common HTML mistakes developers make and how to avoid them.",
        related: ["html-best-practices"],
        prerequisites: [],
        recommended: []
      }
    ]
  },
 
  {
    id: "conclusion",
    title: "Conclusion",
    order: 15,
    difficulty: "Beginner",
    lessons: [
      {
        id: 75,
        order: 1,
        slug: "html-roadmap",
        title: "HTML Learning Roadmap",
        shortTitle: "Roadmap",
        readingTime: 10,
        tags: ["html", "roadmap", "career"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Review a complete roadmap of everything you've learned in this HTML tutorial.",
        related: ["next-step-css"],
        prerequisites: [],
        recommended: ["next-step-css"]
      },
      {
        id: 76,
        order: 2,
        slug: "next-step-css",
        title: "Next Step: CSS",
        shortTitle: "Next: CSS",
        readingTime: 8,
        tags: ["html", "css", "next steps"],
        status: STATUS.PUBLISHED,
        featured: true,
        description:
          "Learn what to study next as you move from HTML into CSS.",
        related: ["html-roadmap"],
        prerequisites: [],
        recommended: []
      }
    ]
  }

  // Add more sections here: "html-fundamentals", "links-images-media", ...
 
];

export const resources = [
  {
    id: "html-real-websites",
    title: "HTML in Real Websites",
    order: 1,
    items: [
      {
        id: 77,
        order: 1,
        slug: "how-html-is-used-in-production-websites",
        title: "How HTML is Used in Production Websites",
        shortTitle: "Production HTML",
        type: "article",
        readingTime: 10,
        tags: ["production", "html", "real websites"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore how modern companies use HTML in large-scale production applications."
      },
      {
        id: 78,
        order: 2,
        slug: "structure-of-a-modern-webpage",
        title: "Structure of a Modern Webpage",
        shortTitle: "Modern Layout",
        type: "article",
        readingTime: 12,
        tags: ["layout", "html", "structure"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Understand how professional websites organize their HTML layout using semantic elements."
      },
      {
        id: 79,
        order: 3,
        slug: "inspecting-real-websites-using-devtools",
        title: "Inspecting Real Websites Using DevTools",
        shortTitle: "DevTools Inspection",
        type: "article",
        readingTime: 10,
        tags: ["html", "devtools", "real websites"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to inspect and analyze real websites using browser DevTools."
      },
      {
        id: 80,
        order: 4,
        slug: "undrstanding-website-layouts",
        title: "Understanding Website Layouts",
        shortTitle: "Website Layouts",
        type: "article",
        readingTime: 10,
        tags: ["html", "layout", "real websites"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how real websites are structured and organized visually."
      }
    ]
  },
  {
    id: "html-best-practices-resources",
    title: "HTML Best Practices",
    order: 2,
    items: [
      {
        id: 81,
        order: 1,
        slug: "semantic-html-usage",
        title: "Semantic HTML Usage",
        shortTitle: "Semantic Usage",
        type: "article",
        readingTime: 10,
        tags: ["html", "semantic", "best practices"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore real examples of proper semantic HTML usage in production code."
      },
      {
        id: 82,
        order: 2,
        slug: "accessibility-basics",
        title: "Accessibility Basics",
        shortTitle: "A11y Basics",
        type: "article",
        readingTime: 10,
        tags: ["html", "accessibility", "basics"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn the accessibility basics every developer should know."
      },
      {
        id: 83,
        order: 3,
        slug: "seo-optimized-html-guide",
        title: "SEO-Friendly HTML Guide",
        shortTitle: "SEO Guide",
        type: "article",
        readingTime: 12,
        tags: ["html", "seo", "guide"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "A practical guide to writing SEO-optimized HTML markup."
      },
      {
        id: 84,
        order: 4,
        slug: "naming-conventions",
        title: "Naming Conventions",
        shortTitle: "Naming Conventions",
        type: "article",
        readingTime: 8,
        tags: ["html", "naming", "best practices"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn naming conventions for classes, IDs, and files in HTML projects."
      },
      {
        id: 85,
        order: 5,
        slug: "clean-code-practices",
        title: "Clean Code Practices",
        shortTitle: "Clean Code",
        type: "article",
        readingTime: 10,
        tags: ["html", "clean code", "best practices"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to write clean, maintainable, and readable HTML code."
      }
    ]
  },
 
  {
    id: "html-mistakes-beginners-make",
    title: "HTML Mistakes Beginners Make",
    order: 3,
    items: [
      {
        id: 86,
        order: 1,
        slug: "overusing-divs",
        title: "Overusing Divs",
        shortTitle: "Overusing Divs",
        type: "article",
        readingTime: 8,
        tags: ["html", "mistakes", "div"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn why overusing div elements hurts accessibility and code clarity."
      },
      {
        id: 87,
        order: 2,
        slug: "missing-alt-attributes",
        title: "Missing Alt Attributes",
        shortTitle: "Missing Alt Text",
        type: "article",
        readingTime: 6,
        tags: ["html", "mistakes", "accessibility"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn why missing alt attributes on images is a common accessibility mistake."
      },
      {
        id: 88,
        order: 3,
        slug: "wrong-heading-heirarchy",
        title: "Wrong Heading Hierarchy",
        shortTitle: "Heading Hierarchy",
        type: "article",
        readingTime: 8,
        tags: ["html", "mistakes", "headings"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn why skipping heading levels breaks accessibility and SEO."
      },
      {
        id: 89,
        order: 4,
        slug: "using-inline-styles",
        title: "Using Inline Styles",
        shortTitle: "Inline Styles",
        type: "article",
        readingTime: 8,
        tags: ["html", "mistakes", "css"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn why relying on inline styles instead of CSS is considered a bad practice."
      },
      {
        id: 90,
        order: 5,
        slug: "poor-form-structure",
        title: "Poor Form Structure",
        shortTitle: "Poor Form Structure",
        type: "article",
        readingTime: 8,
        tags: ["html", "mistakes", "forms"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn common form structuring mistakes and how to avoid them."
      }
    ]
  },
 
  {
    id: "html-ai-era",
    title: "HTML + AI Era",
    order: 4,
    items: [
      {
        id: 91,
        order: 1,
        slug: "can-ai-generate-html",
        title: "Can AI Generate HTML?",
        shortTitle: "AI & HTML",
        type: "article",
        readingTime: 10,
        tags: ["html", "ai", "tools"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore how AI tools can generate and assist with writing HTML code."
      },
      {
        id: 92,
        order: 2,
        slug: "how-developers-use-chatgpt-with-html",
        title: "How Developers Use ChatGPT With HTML",
        shortTitle: "ChatGPT + HTML",
        type: "article",
        readingTime: 10,
        tags: ["html", "ai", "chatgpt"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn practical ways developers use ChatGPT while writing HTML."
      },
      {
        id: 93,
        order: 3,
        slug: "ai-assisted-frontend-development",
        title: "AI-Assisted Frontend Development",
        shortTitle: "AI Frontend Dev",
        type: "article",
        readingTime: 10,
        tags: ["html", "ai", "frontend"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore how AI tools are changing frontend development workflows."
      },
      {
        id: 94,
        order: 4,
        slug: "human-vs-ai-generated-html",
        title: "Human vs AI Generated HTML",
        shortTitle: "Human vs AI HTML",
        type: "article",
        readingTime: 10,
        tags: ["html", "ai", "comparison"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Compare the quality and structure of human-written versus AI-generated HTML."
      }
    ]
  },
 
  {
    id: "html-performance-basics",
    title: "HTML Performance Basics",
    order: 5,
    items: [
      {
        id: 95,
        order: 1,
        slug: "optimizing-images",
        title: "Optimizing Images",
        shortTitle: "Image Optimization",
        type: "article",
        readingTime: 10,
        tags: ["html", "performance", "images"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn techniques for optimizing images to improve page load speed."
      },
      {
        id: 96,
        order: 2,
        slug: "lazy-loading",
        title: "Lazy Loading",
        shortTitle: "Lazy Loading",
        type: "article",
        readingTime: 8,
        tags: ["html", "performance", "lazy loading"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how native lazy loading improves webpage performance."
      },
      {
        id: 97,
        order: 3,
        slug: "reducing-dom-sizes",
        title: "Reducing DOM Size",
        shortTitle: "Reduce DOM Size",
        type: "article",
        readingTime: 8,
        tags: ["html", "performance", "dom"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn why a smaller DOM improves rendering performance and how to achieve it."
      },
      {
        id: 98,
        order: 4,
        slug: "faster-page-loading",
        title: "Faster Page Loading",
        shortTitle: "Faster Page Loads",
        type: "article",
        readingTime: 10,
        tags: ["html", "performance", "speed"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn practical HTML techniques for making webpages load faster."
      }
    ]
  },
 
  {
    id: "html-developer-tools",
    title: "HTML Developer Tools",
    order: 6,
    items: [
      {
        id: 99,
        order: 1,
        slug: "chrome-devtools",
        title: "Chrome DevTools",
        shortTitle: "Chrome DevTools",
        type: "article",
        readingTime: 10,
        tags: ["html", "devtools", "chrome"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to use Chrome DevTools to inspect and debug HTML."
      },
      {
        id: 100,
        order: 2,
        slug: "inspect-element",
        title: "Inspect Element",
        shortTitle: "Inspect Element",
        type: "article",
        readingTime: 8,
        tags: ["html", "devtools", "inspect"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to use the Inspect Element tool to examine webpage markup."
      },
      {
        id: 101,
        order: 3,
        slug: "network-tab",
        title: "Network Tab",
        shortTitle: "Network Tab",
        type: "article",
        readingTime: 8,
        tags: ["html", "devtools", "network"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to use the Network tab to analyze page load requests."
      },
      {
        id: 102,
        order: 4,
        slug: "lighthouse",
        title: "Lighthouse",
        shortTitle: "Lighthouse",
        type: "article",
        readingTime: 10,
        tags: ["html", "devtools", "lighthouse"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Learn how to use Lighthouse to audit performance, accessibility, and SEO."
      }
    ]
  },
 
  {
    id: "real-html-projects",
    title: "Real HTML Projects",
    order: 7,
    items: [
      {
        id: 103,
        order: 1,
        slug: "personal-portfolio",
        title: "Personal Portfolio",
        shortTitle: "Portfolio Reference",
        type: "article",
        readingTime: 12,
        tags: ["html", "project", "portfolio"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a personal portfolio website built with HTML."
      },
      {
        id: 104,
        order: 2,
        slug: "resume-website",
        title: "Resume Website",
        shortTitle: "Resume Website",
        type: "article",
        readingTime: 12,
        tags: ["html", "project", "resume"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a resume website built with HTML."
      },
      {
        id: 105,
        order: 3,
        slug: "restaurant-website-showcase",
        title: "Restaurant Website Showcase",
        shortTitle: "Restaurant Showcase",
        type: "article",
        readingTime: 12,
        tags: ["html", "project", "restaurant"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a restaurant website built with HTML."
      },
      {
        id: 106,
        order: 4,
        slug: "blog-website",
        title: "Blog Website",
        shortTitle: "Blog Reference",
        type: "article",
        readingTime: 12,
        tags: ["html", "project", "blog"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a blog website built with HTML."
      },
      {
        id: 107,
        order: 5,
        slug: "product-landing-website",
        title: "Product Landing Website",
        shortTitle: "Product Landing Page",
        type: "article",
        readingTime: 12,
        tags: ["html", "project", "landing page"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a product landing page built with HTML."
      },
      {
        id: 108,
        order: 6,
        slug: "university-website-clone",
        title: "University Website Clone",
        shortTitle: "University Site Clone",
        type: "article",
        readingTime: 14,
        tags: ["html", "project", "education"],
        status: STATUS.COMING_SOON,
        featured: true,
        description:
          "Explore a reference example of a university website clone built with HTML."
      }
    ]
  }
    
  // Add more resource groups here: "html-best-practices", "html-dev-tools", ...
];