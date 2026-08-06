// ============================================================
// src/registry/lessons/cssLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for CSS until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "css",
  title: "CSS Tutorial",
  shortTitle: "CSS",
  category: "Frontend",
  description: "Learn CSS from beginner to advanced with practical examples, projects, interview preparation, and best practices.",
  icon: "css",
  difficulty: "Beginner", // course-level badge, separate from per-section defaults
  estimatedHours: 18,
  totalLessons: 87,
  version: "CSS3",
  language: "English",
  path: "/css",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["css", "frontend", "web development", "styling", "responsive design", "css3", "css basics", "css advanced"],
  seo: {
    title: "CSS Tutorial - Learn CSS from Scratch | DevSphere",
    description: "Master CSS with beginner to advanced tutorials, examples, interview questions, projects and best practices.",
    keywords: ["CSS", "Web Development", "Frontend Development", "CSS Tutorial", "Learn CSS", "CSS Basics", "CSS Advanced", "CSS Projects"],
  }
};

export const sections = [

  {
    id: "getting-started",
    title: "Getting Started",
    order: 1,
    difficulty: "Beginner",
    lessons: [
      { id: 1, order: 1, slug: "introduction-to-css", title: "Introduction to CSS", shortTitle: "Introduction", readingTime: 12, tags: ["css", "introduction", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what CSS is and how it brings style and design to HTML webpages.", prerequisites: [], related: ["why-css", "css-syntax", "ways-to-add-css"], recommended: ["css-syntax", "css-selectors"] },
      { id: 2, order: 2, slug: "why-css", title: "Why CSS?", shortTitle: "Why CSS", readingTime: 8, tags: ["css", "motivation", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Understand why CSS exists and the problems it solves in web development.", prerequisites: ["introduction-to-css"], related: ["introduction-to-css", "css-syntax"], recommended: [] },
      { id: 3, order: 3, slug: "css-syntax", title: "CSS Syntax", shortTitle: "Syntax", readingTime: 10, tags: ["css", "syntax", "rules"], status: STATUS.PUBLISHED, featured: true, description: "Learn the basic syntax of CSS including selectors, properties, and values.", prerequisites: ["introduction-to-css"], related: ["css-selectors", "ways-to-add-css", "css-comments"], recommended: ["css-selectors"] },
      { id: 4, order: 4, slug: "css-selectors", title: "CSS Selectors", shortTitle: "Selectors", readingTime: 12, tags: ["css", "selectors", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS selectors target HTML elements for styling.", prerequisites: ["css-syntax"], related: ["css-syntax", "css-combinators", "css-pseudo-classes"], recommended: ["css-combinators"] },
      { id: 5, order: 5, slug: "css-comments", title: "CSS Comments", shortTitle: "Comments", readingTime: 6, tags: ["css", "comments", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add comments to CSS code to document and organize your stylesheets.", prerequisites: ["css-syntax"], related: ["css-organization", "css-best-practices"], recommended: [] },
      { id: 6, order: 6, slug: "ways-to-add-css", title: "Ways to Add CSS", shortTitle: "Adding CSS", readingTime: 10, tags: ["css", "inline css", "internal css", "external css"], status: STATUS.PUBLISHED, featured: true, description: "Learn the three ways to add CSS to an HTML document: inline, internal, and external.", prerequisites: ["css-syntax"], related: ["introduction-to-css", "css-syntax"], recommended: ["css-colors"] }
    ]
  },
 
  {
    id: "css-fundamentals",
    title: "CSS Fundamentals",
    order: 2,
    difficulty: "Beginner",
    lessons: [
      { id: 7, order: 1, slug: "css-colors", title: "Colors", shortTitle: "Colors", readingTime: 10, tags: ["css", "colors", "design"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to apply and work with colors in CSS using different color formats.", prerequisites: ["css-syntax"], related: ["css-backgrounds", "css-gradients"], recommended: ["css-backgrounds"] },
      { id: 8, order: 2, slug: "css-backgrounds", title: "Backgrounds", shortTitle: "Backgrounds", readingTime: 10, tags: ["css", "backgrounds", "design"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style element backgrounds using colors, images, and gradients.", prerequisites: ["css-colors"], related: ["css-colors", "css-gradients"], recommended: [] },
      { id: 9, order: 3, slug: "css-borders", title: "Borders", shortTitle: "Borders", readingTime: 8, tags: ["css", "borders", "box model"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add and style borders around HTML elements.", prerequisites: ["css-box-model"], related: ["css-box-model", "css-outline"], recommended: [] },
      { id: 10, order: 4, slug: "css-margin", title: "Margin", shortTitle: "Margin", readingTime: 8, tags: ["css", "margin", "box model"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control spacing outside elements using the margin property.", prerequisites: ["css-box-model"], related: ["css-box-model", "css-padding"], recommended: ["css-padding"] },
      { id: 11, order: 5, slug: "css-padding", title: "Padding", shortTitle: "Padding", readingTime: 8, tags: ["css", "padding", "box model"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control spacing inside elements using the padding property.", prerequisites: ["css-box-model"], related: ["css-box-model", "css-margin"], recommended: [] },
      { id: 12, order: 6, slug: "css-height-width", title: "Height & Width", shortTitle: "Height & Width", readingTime: 8, tags: ["css", "dimensions", "box model"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set the height and width of HTML elements using CSS.", prerequisites: ["css-box-model"], related: ["css-box-model"], recommended: [] },
      { id: 13, order: 7, slug: "css-box-model", title: "Box Model", shortTitle: "Box Model", readingTime: 14, tags: ["css", "box model", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Understand the CSS box model and how content, padding, border, and margin work together.", prerequisites: ["css-borders", "css-margin", "css-padding"], related: ["css-margin", "css-padding", "css-borders", "css-height-width"], recommended: ["css-display-property"] },
      { id: 14, order: 8, slug: "css-outline", title: "Outline", shortTitle: "Outline", readingTime: 6, tags: ["css", "outline", "accessibility"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add outlines to elements and how they differ from borders.", prerequisites: ["css-borders"], related: ["css-borders", "css-accessibility"], recommended: [] }
    ]
  },
 
  {
    id: "working-with-text",
    title: "Working With Text",
    order: 3,
    difficulty: "Beginner",
    lessons: [
      { id: 15, order: 1, slug: "css-text-formatting", title: "Text Formatting", shortTitle: "Text Formatting", readingTime: 10, tags: ["css", "text", "typography"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to format text using CSS properties like alignment, decoration, and transform.", prerequisites: ["css-fonts"], related: ["css-fonts", "css-text-shadow"], recommended: [] },
      { id: 16, order: 2, slug: "css-fonts", title: "Fonts", shortTitle: "Fonts", readingTime: 12, tags: ["css", "fonts", "typography"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control font family, size, weight, and style in CSS.", prerequisites: ["css-text-formatting"], related: ["css-google-fonts", "css-text-formatting"], recommended: ["css-google-fonts"] },
      { id: 17, order: 3, slug: "css-google-fonts", title: "Google Fonts", shortTitle: "Google Fonts", readingTime: 8, tags: ["css", "fonts", "google fonts"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to import and use Google Fonts in your CSS projects.", prerequisites: ["css-fonts"], related: ["css-fonts"], recommended: [] },
      { id: 18, order: 4, slug: "css-icons", title: "Icons", shortTitle: "Icons", readingTime: 8, tags: ["css", "icons", "design"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add and style icons using icon libraries and CSS.", prerequisites: ["css-fonts"], related: ["css-fonts", "css-buttons"], recommended: [] },
      { id: 19, order: 5, slug: "css-links", title: "Links", shortTitle: "Links", readingTime: 8, tags: ["css", "links", "pseudo-classes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style hyperlinks and their different states using CSS.", prerequisites: ["css-pseudo-classes"], related: ["css-pseudo-classes", "css-navigation-bars"], recommended: [] },
      { id: 20, order: 6, slug: "css-lists", title: "Lists", shortTitle: "Lists", readingTime: 8, tags: ["css", "lists", "styling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style ordered and unordered lists using CSS.", prerequisites: ["css-text-formatting"], related: ["css-navigation-bars", "css-text-formatting"], recommended: [] }
    ]
  },
 
  {
    id: "display-positioning",
    title: "Display & Positioning",
    order: 4,
    difficulty: "Intermediate",
    lessons: [
      { id: 21, order: 1, slug: "css-display-property", title: "Display Property", shortTitle: "Display", readingTime: 12, tags: ["css", "display", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the display property controls how elements are rendered on the page.", prerequisites: ["css-box-model"], related: ["css-inline-block", "css-position-property", "css-flexbox-introduction"], recommended: ["css-position-property"] },
      { id: 22, order: 2, slug: "css-position-property", title: "Position Property", shortTitle: "Position", readingTime: 14, tags: ["css", "position", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to position elements using static, relative, absolute, and fixed positioning.", prerequisites: ["css-display-property"], related: ["css-z-index", "css-display-property"], recommended: ["css-z-index"] },
      { id: 23, order: 3, slug: "css-z-index", title: "Z-Index", shortTitle: "Z-Index", readingTime: 8, tags: ["css", "z-index", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the z-index property controls the stacking order of positioned elements.", prerequisites: ["css-position-property"], related: ["css-position-property"], recommended: [] },
      { id: 24, order: 4, slug: "css-overflow", title: "Overflow", shortTitle: "Overflow", readingTime: 8, tags: ["css", "overflow", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control content that overflows its container using the overflow property.", prerequisites: ["css-box-model"], related: ["css-display-property", "css-position-property"], recommended: [] },
      { id: 25, order: 5, slug: "css-float-clear", title: "Float & Clear", shortTitle: "Float & Clear", readingTime: 10, tags: ["css", "float", "clear", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the float and clear properties work for legacy CSS layouts.", prerequisites: ["css-display-property"], related: ["css-inline-block", "css-display-property"], recommended: [] },
      { id: 26, order: 6, slug: "css-inline-block", title: "Inline Block", shortTitle: "Inline Block", readingTime: 8, tags: ["css", "display", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the inline-block display value combines inline and block behavior.", prerequisites: ["css-display-property"], related: ["css-float-clear", "css-display-property"], recommended: [] }
    ]
  },
 
  {
    id: "tables-forms-navigation",
    title: "Tables, Forms & Navigation",
    order: 5,
    difficulty: "Intermediate",
    lessons: [
      { id: 27, order: 1, slug: "css-tables", title: "Styling Tables", shortTitle: "Tables", readingTime: 10, tags: ["css", "tables", "styling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style HTML tables using borders, spacing, and hover effects.", prerequisites: ["css-borders"], related: ["css-forms", "css-borders"], recommended: [] },
      { id: 28, order: 2, slug: "css-forms", title: "Styling Forms", shortTitle: "Forms", readingTime: 12, tags: ["css", "forms", "styling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style HTML forms and input fields for better usability.", prerequisites: ["css-borders", "css-padding"], related: ["css-tables", "css-buttons"], recommended: ["css-buttons"] },
      { id: 29, order: 3, slug: "css-buttons", title: "Buttons", shortTitle: "Buttons", readingTime: 10, tags: ["css", "buttons", "styling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style buttons with hover states, shadows, and transitions.", prerequisites: ["css-borders"], related: ["css-forms", "css-transitions"], recommended: ["css-transitions"] },
      { id: 30, order: 4, slug: "css-navigation-bars", title: "Navigation Bars", shortTitle: "Nav Bars", readingTime: 12, tags: ["css", "navigation", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build styled navigation bars using CSS.", prerequisites: ["css-flexbox-introduction", "css-display-property"], related: ["css-dropdown-menus", "css-position-property"], recommended: ["css-dropdown-menus"] },
      { id: 31, order: 5, slug: "css-dropdown-menus", title: "Dropdown Menus", shortTitle: "Dropdown Menus", readingTime: 12, tags: ["css", "dropdown", "navigation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build dropdown menus using CSS hover and positioning techniques.", prerequisites: ["css-navigation-bars", "css-position-property"], related: ["css-navigation-bars", "css-pseudo-classes"], recommended: [] }
    ]
  },
 
  {
    id: "advanced-selectors",
    title: "Advanced Selectors",
    order: 6,
    difficulty: "Intermediate",
    lessons: [
      { id: 32, order: 1, slug: "css-combinators", title: "Combinators", shortTitle: "Combinators", readingTime: 10, tags: ["css", "selectors", "combinators"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to combine selectors using descendant, child, and sibling combinators.", prerequisites: ["css-selectors"], related: ["css-attribute-selectors", "css-selectors"], recommended: ["css-attribute-selectors"] },
      { id: 33, order: 2, slug: "css-attribute-selectors", title: "Attribute Selectors", shortTitle: "Attribute Selectors", readingTime: 10, tags: ["css", "selectors", "attributes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to select elements based on their HTML attributes.", prerequisites: ["css-selectors"], related: ["css-combinators", "css-pseudo-classes"], recommended: [] },
      { id: 34, order: 3, slug: "css-pseudo-classes", title: "Pseudo Classes", shortTitle: "Pseudo Classes", readingTime: 12, tags: ["css", "selectors", "pseudo-classes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how pseudo-classes select elements based on state, such as hover and focus.", prerequisites: ["css-selectors"], related: ["css-pseudo-elements", "css-links"], recommended: ["css-pseudo-elements"] },
      { id: 35, order: 4, slug: "css-pseudo-elements", title: "Pseudo Elements", shortTitle: "Pseudo Elements", readingTime: 10, tags: ["css", "selectors", "pseudo-elements"], status: STATUS.PUBLISHED, featured: true, description: "Learn how pseudo-elements let you style specific parts of an element's content.", prerequisites: ["css-pseudo-classes"], related: ["css-pseudo-classes"], recommended: [] },
      { id: 36, order: 5, slug: "css-specificity", title: "Specificity", shortTitle: "Specificity", readingTime: 12, tags: ["css", "specificity", "cascade"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS specificity determines which styles take priority.", prerequisites: ["css-selectors"], related: ["css-important-rule", "css-combinators"], recommended: ["css-important-rule"] },
      { id: 37, order: 6, slug: "css-important-rule", title: "!important Rule", shortTitle: "!important", readingTime: 8, tags: ["css", "important", "specificity"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the !important rule overrides normal specificity and when to avoid it.", prerequisites: ["css-specificity"], related: ["css-specificity"], recommended: [] }
    ]
  },
 
  {
    id: "modern-layout-systems",
    title: "Modern Layout Systems",
    order: 7,
    difficulty: "Intermediate",
    lessons: [
      { id: 38, order: 1, slug: "css-flexbox-introduction", title: "Flexbox Introduction", shortTitle: "Flexbox Intro", readingTime: 14, tags: ["css", "flexbox", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to CSS Flexbox and how it simplifies one-dimensional layouts.", prerequisites: ["css-display-property"], related: ["css-flex-container", "css-flex-items", "css-grid-introduction"], recommended: ["css-flex-container"] },
      { id: 39, order: 2, slug: "css-flex-container", title: "Flex Container", shortTitle: "Flex Container", readingTime: 12, tags: ["css", "flexbox", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure the flex container using properties like justify-content and align-items.", prerequisites: ["css-flexbox-introduction"], related: ["css-flex-items", "css-flexbox-introduction"], recommended: ["css-flex-items"] },
      { id: 40, order: 3, slug: "css-flex-items", title: "Flex Items", shortTitle: "Flex Items", readingTime: 12, tags: ["css", "flexbox", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control individual flex items using flex-grow, flex-shrink, and flex-basis.", prerequisites: ["css-flex-container"], related: ["css-flex-container", "css-responsive-flexbox"], recommended: [] },
      { id: 41, order: 4, slug: "css-responsive-flexbox", title: "Responsive Flexbox", shortTitle: "Responsive Flexbox", readingTime: 12, tags: ["css", "flexbox", "responsive"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build responsive layouts using Flexbox and media queries.", prerequisites: ["css-flex-items", "css-media-queries"], related: ["css-flexbox-introduction", "css-media-queries"], recommended: [] },
      { id: 42, order: 5, slug: "css-grid-introduction", title: "CSS Grid Introduction", shortTitle: "Grid Intro", readingTime: 14, tags: ["css", "grid", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to CSS Grid and how it enables two-dimensional layouts.", prerequisites: ["css-display-property"], related: ["css-grid-container", "css-grid-items", "css-flexbox-introduction"], recommended: ["css-grid-container"] },
      { id: 43, order: 6, slug: "css-grid-container", title: "Grid Container", shortTitle: "Grid Container", readingTime: 12, tags: ["css", "grid", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure the grid container using columns, rows, and gaps.", prerequisites: ["css-grid-introduction"], related: ["css-grid-items", "css-grid-introduction"], recommended: ["css-grid-items"] },
      { id: 44, order: 7, slug: "css-grid-items", title: "Grid Items", shortTitle: "Grid Items", readingTime: 12, tags: ["css", "grid", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to position and size individual grid items within a CSS Grid layout.", prerequisites: ["css-grid-container"], related: ["css-grid-container", "css-grid-layout-projects"], recommended: [] },
      { id: 45, order: 8, slug: "css-grid-layout-projects", title: "Grid Layout Examples", shortTitle: "Grid Examples", readingTime: 16, tags: ["css", "grid", "projects"], status: STATUS.PUBLISHED, featured: true, description: "Explore real-world layout examples built using CSS Grid.", prerequisites: ["css-grid-items"], related: ["css-grid-container", "css-grid-items", "css-dashboard-ui"], recommended: [] }
    ]
  },
 
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    order: 8,
    difficulty: "Intermediate",
    lessons: [
      { id: 46, order: 1, slug: "css-responsive-design", title: "Responsive Design", shortTitle: "Responsive Design", readingTime: 12, tags: ["css", "responsive", "mobile"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to responsive web design principles in CSS.", prerequisites: ["css-box-model"], related: ["css-viewport", "css-media-queries", "css-mobile-first-design"], recommended: ["css-media-queries"] },
      { id: 47, order: 2, slug: "css-viewport", title: "Viewport", shortTitle: "Viewport", readingTime: 8, tags: ["css", "responsive", "viewport"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the viewport affects responsive design and how to control it.", prerequisites: ["css-responsive-design"], related: ["css-responsive-design", "css-media-queries"], recommended: [] },
      { id: 48, order: 3, slug: "css-media-queries", title: "Media Queries", shortTitle: "Media Queries", readingTime: 14, tags: ["css", "responsive", "media queries"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use media queries to apply styles based on screen size.", prerequisites: ["css-responsive-design"], related: ["css-viewport", "css-mobile-first-design", "css-responsive-flexbox"], recommended: ["css-mobile-first-design"] },
      { id: 49, order: 4, slug: "css-responsive-images", title: "Responsive Images", shortTitle: "Responsive Images", readingTime: 10, tags: ["css", "responsive", "images"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to make images scale and adapt across different screen sizes.", prerequisites: ["css-responsive-design"], related: ["css-responsive-videos", "css-object-fit"], recommended: [] },
      { id: 50, order: 5, slug: "css-responsive-videos", title: "Responsive Videos", shortTitle: "Responsive Videos", readingTime: 10, tags: ["css", "responsive", "video"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to make video embeds responsive using CSS.", prerequisites: ["css-responsive-design"], related: ["css-responsive-images"], recommended: [] },
      { id: 51, order: 6, slug: "css-mobile-first-design", title: "Mobile First Design", shortTitle: "Mobile First", readingTime: 10, tags: ["css", "responsive", "mobile first"], status: STATUS.PUBLISHED, featured: true, description: "Learn the mobile-first approach to writing responsive CSS.", prerequisites: ["css-media-queries"], related: ["css-responsive-design", "css-media-queries"], recommended: [] }
    ]
  },
 
  {
    id: "animations-effects",
    title: "Animations & Effects",
    order: 9,
    difficulty: "Advanced",
    lessons: [
      { id: 52, order: 1, slug: "css-transforms", title: "Transforms", shortTitle: "Transforms", readingTime: 12, tags: ["css", "transform", "animation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to rotate, scale, skew, and translate elements using CSS transforms.", prerequisites: ["css-box-model"], related: ["css-transitions", "css-animations"], recommended: ["css-transitions"] },
      { id: 53, order: 2, slug: "css-transitions", title: "Transitions", shortTitle: "Transitions", readingTime: 12, tags: ["css", "transitions", "animation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to smoothly animate property changes using CSS transitions.", prerequisites: ["css-transforms"], related: ["css-transforms", "css-animations"], recommended: ["css-animations"] },
      { id: 54, order: 3, slug: "css-animations", title: "Animations", shortTitle: "Animations", readingTime: 16, tags: ["css", "animation", "keyframes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create keyframe animations using CSS.", prerequisites: ["css-transitions"], related: ["css-transforms", "css-transitions"], recommended: [] },
      { id: 55, order: 4, slug: "css-gradients", title: "Gradients", shortTitle: "Gradients", readingTime: 10, tags: ["css", "gradients", "backgrounds"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create linear and radial gradients using CSS.", prerequisites: ["css-backgrounds"], related: ["css-backgrounds", "css-box-shadow"], recommended: [] },
      { id: 56, order: 5, slug: "css-box-shadow", title: "Box Shadow", shortTitle: "Box Shadow", readingTime: 8, tags: ["css", "shadow", "design"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add shadow effects to elements using the box-shadow property.", prerequisites: ["css-box-model"], related: ["css-text-shadow", "css-gradients"], recommended: [] },
      { id: 57, order: 6, slug: "css-text-shadow", title: "Text Shadow", shortTitle: "Text Shadow", readingTime: 6, tags: ["css", "shadow", "typography"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add shadow effects to text using the text-shadow property.", prerequisites: ["css-box-shadow"], related: ["css-box-shadow"], recommended: [] },
      { id: 58, order: 7, slug: "css-filters", title: "Filters", shortTitle: "Filters", readingTime: 10, tags: ["css", "filters", "effects"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to apply visual filters like blur and brightness to elements using CSS.", prerequisites: ["css-transforms"], related: ["css-transforms", "css-masking"], recommended: [] }
    ]
  },
 
  {
    id: "advanced-css",
    title: "Advanced CSS",
    order: 10,
    difficulty: "Advanced",
    lessons: [
      { id: 59, order: 1, slug: "css-variables", title: "CSS Variables", shortTitle: "Variables", readingTime: 12, tags: ["css", "variables", "custom properties"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to define and use reusable custom properties with CSS variables.", prerequisites: ["css-syntax"], related: ["css-functions", "css-calc-function"], recommended: ["css-calc-function"] },
      { id: 60, order: 2, slug: "css-functions", title: "CSS Functions", shortTitle: "Functions", readingTime: 12, tags: ["css", "functions", "advanced"], status: STATUS.PUBLISHED, featured: true, description: "Learn about built-in CSS functions used for calculations and dynamic values.", prerequisites: ["css-variables"], related: ["css-calc-function", "css-clamp-function"], recommended: ["css-calc-function"] },
      { id: 61, order: 3, slug: "css-calc-function", title: "calc()", shortTitle: "calc()", readingTime: 8, tags: ["css", "functions", "calc"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to perform calculations directly in CSS using the calc function.", prerequisites: ["css-functions"], related: ["css-functions", "css-clamp-function"], recommended: ["css-clamp-function"] },
      { id: 62, order: 4, slug: "css-clamp-function", title: "clamp()", shortTitle: "clamp()", readingTime: 8, tags: ["css", "functions", "clamp"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set responsive values with a minimum and maximum using clamp().", prerequisites: ["css-calc-function"], related: ["css-calc-function", "css-responsive-design"], recommended: [] },
      { id: 63, order: 5, slug: "css-masking", title: "CSS Masking", shortTitle: "Masking", readingTime: 10, tags: ["css", "masking", "effects"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to hide parts of elements using CSS masking techniques.", prerequisites: ["css-filters"], related: ["css-filters"], recommended: [] },
      { id: 64, order: 6, slug: "css-object-fit", title: "Object Fit", shortTitle: "Object Fit", readingTime: 8, tags: ["css", "object-fit", "images"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control how images and videos are resized within their container.", prerequisites: ["css-responsive-images"], related: ["css-object-position", "css-responsive-images"], recommended: ["css-object-position"] },
      { id: 65, order: 7, slug: "css-object-position", title: "Object Position", shortTitle: "Object Position", readingTime: 8, tags: ["css", "object-position", "images"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control the position of replaced content within its container.", prerequisites: ["css-object-fit"], related: ["css-object-fit"], recommended: [] }
    ]
  },
 
  {
    id: "css-architecture",
    title: "CSS Architecture",
    order: 11,
    difficulty: "Advanced",
    lessons: [
      { id: 66, order: 1, slug: "css-best-practices", title: "Best Practices", shortTitle: "Best Practices", readingTime: 12, tags: ["css", "best practices", "clean code"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of best practices followed by professional CSS developers.", prerequisites: ["css-specificity"], related: ["css-organization", "css-maintainable-css"], recommended: ["css-organization"] },
      { id: 67, order: 2, slug: "css-organization", title: "CSS Organization", shortTitle: "Organization", readingTime: 10, tags: ["css", "organization", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to organize CSS files and rules for maintainable projects.", prerequisites: ["css-best-practices"], related: ["css-best-practices", "css-maintainable-css"], recommended: [] },
      { id: 68, order: 3, slug: "css-performance", title: "Performance Optimization", shortTitle: "Performance", readingTime: 12, tags: ["css", "performance", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for writing performant CSS that renders quickly.", prerequisites: ["css-best-practices"], related: ["css-animations", "css-best-practices"], recommended: [] },
      { id: 69, order: 4, slug: "css-accessibility", title: "CSS Accessibility", shortTitle: "Accessibility", readingTime: 12, tags: ["css", "accessibility", "a11y"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS choices affect accessibility for users with disabilities.", prerequisites: ["css-outline"], related: ["css-best-practices", "css-outline"], recommended: [] },
      { id: 70, order: 5, slug: "css-maintainable-css", title: "Maintainable CSS", shortTitle: "Maintainable CSS", readingTime: 12, tags: ["css", "maintainability", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write CSS that stays maintainable as a project grows.", prerequisites: ["css-organization"], related: ["css-organization", "css-best-practices"], recommended: [] }
    ]
  },
 
  {
    id: "css-preprocessors",
    title: "CSS Preprocessors",
    order: 12,
    difficulty: "Advanced",
    lessons: [
      { id: 71, order: 1, slug: "css-sass-introduction", title: "Introduction to Sass", shortTitle: "Sass Intro", readingTime: 12, tags: ["css", "sass", "preprocessor"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Sass and how it extends CSS with programming features.", prerequisites: ["css-variables"], related: ["css-sass-variables", "css-sass-nesting"], recommended: ["css-sass-variables"] },
      { id: 72, order: 2, slug: "css-sass-variables", title: "Sass Variables", shortTitle: "Sass Variables", readingTime: 10, tags: ["css", "sass", "variables"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use variables in Sass to store reusable values.", prerequisites: ["css-sass-introduction"], related: ["css-sass-introduction", "css-variables"], recommended: [] },
      { id: 73, order: 3, slug: "css-sass-nesting", title: "Sass Nesting", shortTitle: "Sass Nesting", readingTime: 10, tags: ["css", "sass", "nesting"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Sass nesting lets you write CSS that mirrors your HTML structure.", prerequisites: ["css-sass-introduction"], related: ["css-sass-introduction", "css-combinators"], recommended: [] },
      { id: 74, order: 4, slug: "css-sass-mixins", title: "Sass Mixins", shortTitle: "Sass Mixins", readingTime: 12, tags: ["css", "sass", "mixins"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to reuse groups of CSS declarations using Sass mixins.", prerequisites: ["css-sass-variables"], related: ["css-sass-nesting", "css-sass-variables"], recommended: [] }
    ]
  },
 
  {
    id: "real-projects",
    title: "Real Projects",
    order: 13,
    difficulty: "Advanced",
    lessons: [
      { id: 75, order: 1, slug: "css-landing-page", title: "Responsive Landing Page", shortTitle: "Landing Page Project", readingTime: 22, tags: ["css", "project", "landing page"], status: STATUS.PUBLISHED, featured: true, description: "Build a fully responsive landing page using modern CSS layout techniques.", prerequisites: ["css-responsive-design", "css-flexbox-introduction"], related: ["css-portfolio-website", "css-mobile-first-design"], recommended: ["css-portfolio-website"] },
      { id: 76, order: 2, slug: "css-portfolio-website", title: "Portfolio Website", shortTitle: "Portfolio Project", readingTime: 22, tags: ["css", "project", "portfolio"], status: STATUS.PUBLISHED, featured: true, description: "Build a styled personal portfolio website using CSS.", prerequisites: ["css-flexbox-introduction", "css-responsive-design"], related: ["css-landing-page"], recommended: [] },
      { id: 77, order: 3, slug: "css-dashboard-ui", title: "Dashboard UI", shortTitle: "Dashboard Project", readingTime: 24, tags: ["css", "project", "dashboard"], status: STATUS.PUBLISHED, featured: true, description: "Build a dashboard interface using CSS Grid and Flexbox.", prerequisites: ["css-grid-introduction", "css-flexbox-introduction"], related: ["css-grid-layout-projects", "css-ecommerce-layout"], recommended: [] },
      { id: 78, order: 4, slug: "css-pricing-page", title: "Pricing Page", shortTitle: "Pricing Page Project", readingTime: 18, tags: ["css", "project", "pricing"], status: STATUS.PUBLISHED, featured: true, description: "Build a pricing comparison page styled with CSS.", prerequisites: ["css-flexbox-introduction"], related: ["css-landing-page", "css-buttons"], recommended: [] },
      { id: 79, order: 5, slug: "css-login-page", title: "Login Page", shortTitle: "Login Page Project", readingTime: 16, tags: ["css", "project", "login"], status: STATUS.PUBLISHED, featured: true, description: "Build a styled login page using CSS forms and layout techniques.", prerequisites: ["css-forms"], related: ["css-forms", "css-buttons"], recommended: [] },
      { id: 80, order: 6, slug: "css-ecommerce-layout", title: "E-Commerce Layout", shortTitle: "E-Commerce Project", readingTime: 22, tags: ["css", "project", "ecommerce"], status: STATUS.PUBLISHED, featured: true, description: "Build a product grid layout for an e-commerce webpage using CSS.", prerequisites: ["css-grid-introduction"], related: ["css-dashboard-ui", "css-grid-layout-projects"], recommended: [] }
    ]
  },
 
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    order: 14,
    difficulty: "Advanced",
    lessons: [
      { id: 81, order: 1, slug: "css-interview-questions", title: "CSS Interview Questions", shortTitle: "Interview Questions", readingTime: 18, tags: ["css", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Prepare for CSS interviews with commonly asked questions and answers.", prerequisites: ["css-best-practices", "css-common-css-mistakes"], related: ["css-coding-challenges", "css-tricks"], recommended: ["css-coding-challenges"] },
      { id: 82, order: 2, slug: "css-tricks", title: "Important CSS Tricks", shortTitle: "CSS Tricks", readingTime: 12, tags: ["css", "tricks", "tips"], status: STATUS.PUBLISHED, featured: true, description: "Learn useful CSS tricks that professional developers rely on.", prerequisites: ["css-best-practices"], related: ["css-interview-questions", "css-common-css-mistakes"], recommended: [] },
      { id: 83, order: 3, slug: "css-common-css-mistakes", title: "Common CSS Mistakes", shortTitle: "Common Mistakes", readingTime: 12, tags: ["css", "mistakes", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn about common CSS mistakes developers make and how to avoid them.", prerequisites: ["css-best-practices"], related: ["css-best-practices", "css-interview-questions"], recommended: ["css-interview-questions"] },
      { id: 84, order: 4, slug: "css-coding-challenges", title: "CSS Coding Challenges", shortTitle: "Coding Challenges", readingTime: 20, tags: ["css", "interview", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Practice CSS coding challenges commonly used in technical interviews.", prerequisites: ["css-interview-questions"], related: ["css-interview-questions", "css-tricks"], recommended: [] }
    ]
  },
 
  {
    id: "conclusion",
    title: "Conclusion",
    order: 15,
    difficulty: "Beginner",
    lessons: [
      { id: 85, order: 1, slug: "css-roadmap", title: "CSS Learning Roadmap", shortTitle: "Roadmap", readingTime: 10, tags: ["css", "roadmap", "career"], status: STATUS.PUBLISHED, featured: true, description: "Review a complete roadmap of everything you've learned in this CSS tutorial.", prerequisites: ["css-interview-questions"], related: ["next-after-css", "css-frontend-roadmap"], recommended: ["next-after-css"] },
      { id: 86, order: 2, slug: "next-after-css", title: "What to Learn Next?", shortTitle: "Next Steps", readingTime: 8, tags: ["css", "javascript", "next steps"], status: STATUS.PUBLISHED, featured: true, description: "Learn what to study next as you move from CSS into JavaScript.", prerequisites: ["css-roadmap"], related: ["css-roadmap", "css-frontend-roadmap"], recommended: [] },
      { id: 87, order: 3, slug: "css-frontend-roadmap", title: "Frontend Development Roadmap", shortTitle: "Frontend Roadmap", readingTime: 12, tags: ["css", "frontend", "roadmap"], status: STATUS.PUBLISHED, featured: true, description: "Explore a complete frontend development roadmap covering HTML, CSS, and JavaScript.", prerequisites: ["css-roadmap"], related: ["css-roadmap", "next-after-css"], recommended: [] }
    ]
  }

];

export const resources = [

  {
    id: "css-architecture-resources",
    title: "CSS Architecture",
    order: 1,
    items: [
      { id: 88, order: 1, slug: "organizing-css-files", title: "Organizing CSS Files", shortTitle: "File Organization", type: "article", readingTime: 10, tags: ["css", "architecture", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical strategies for organizing CSS files in real projects." },
      { id: 89, order: 2, slug: "sclable-css", title: "Scalable CSS", shortTitle: "Scalable CSS", type: "article", readingTime: 10, tags: ["css", "architecture", "scalability"], status: STATUS.PUBLISHED, featured: true, description: "Learn principles for writing CSS that scales across large projects." },
      { id: 90, order: 3, slug: "bem-methodology", title: "BEM Methodology", shortTitle: "BEM", type: "article", readingTime: 12, tags: ["css", "bem", "naming"], status: STATUS.PUBLISHED, featured: true, description: "Learn the BEM naming methodology for writing structured, reusable CSS classes." },
      { id: 91, order: 4, slug: "utility-first-css", title: "Utility-First CSS", shortTitle: "Utility-First CSS", type: "article", readingTime: 10, tags: ["css", "utility-first", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Explore the utility-first approach to CSS popularized by frameworks like Tailwind." },
      { id: 92, order: 5, slug: "component-based-css", title: "Component-Based CSS", shortTitle: "Component-Based CSS", type: "article", readingTime: 10, tags: ["css", "components", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to structure CSS around reusable UI components." }
    ]
  },
 
  {
    id: "modern-css-2026",
    title: "Modern CSS (2026)",
    order: 2,
    items: [
      { id: 93, order: 1, slug: "css-variables-in-practice", title: "CSS Variables in Practice", shortTitle: "Variables in Practice", type: "article", readingTime: 10, tags: ["css", "variables", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Explore practical, real-world use cases for CSS custom properties." },
      { id: 94, order: 2, slug: "clamp-function-in-css", title: "Clamp()", shortTitle: "Clamp() Deep Dive", type: "article", readingTime: 8, tags: ["css", "clamp", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Take a deeper look at using clamp() for fluid, responsive sizing." },
      { id: 95, order: 3, slug: "min-function-in-css", title: "Min()", shortTitle: "Min()", type: "article", readingTime: 8, tags: ["css", "min", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the min() function helps constrain CSS values dynamically." },
      { id: 96, order: 4, slug: "max-function-in-css", title: "Max()", shortTitle: "Max()", type: "article", readingTime: 8, tags: ["css", "max", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the max() function helps constrain CSS values dynamically." },
      { id: 97, order: 5, slug: "container-queries", title: "Container Queries", shortTitle: "Container Queries", type: "article", readingTime: 12, tags: ["css", "container queries", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Learn how container queries let components respond to their container's size." },
      { id: 98, order: 6, slug: "css-nesting", title: "CSS Nesting", shortTitle: "Nesting", type: "article", readingTime: 10, tags: ["css", "nesting", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Learn how native CSS nesting simplifies writing scoped, structured styles." },
      { id: 99, order: 7, slug: "css-layers", title: "CSS Layers", shortTitle: "Layers", type: "article", readingTime: 10, tags: ["css", "cascade layers", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS cascade layers help manage specificity in large projects." },
      { id: 100, order: 8, slug: "modern-selectors", title: "Modern Selectors", shortTitle: "Modern Selectors", type: "article", readingTime: 10, tags: ["css", "selectors", "modern css"], status: STATUS.PUBLISHED, featured: true, description: "Explore modern CSS selectors like :has(), :is(), and :where()." }
    ]
  },
 
  {
    id: "css-for-developers",
    title: "CSS For Developers",
    order: 3,
    items: [
      { id: 101, order: 1, slug: "how-professionals-structure-css", title: "How Professionals Structure CSS", shortTitle: "Pro CSS Structure", type: "article", readingTime: 10, tags: ["css", "architecture", "professional"], status: STATUS.PUBLISHED, featured: true, description: "Learn how professional teams structure CSS in production codebases." },
      { id: 102, order: 2, slug: "industry-folder-structure", title: "Industry Folder Structure", shortTitle: "Folder Structure", type: "article", readingTime: 10, tags: ["css", "architecture", "folder structure"], status: STATUS.PUBLISHED, featured: true, description: "Explore common folder structures used for organizing CSS in real projects." },
      { id: 103, order: 3, slug: "css-debugging", title: "CSS Debugging", shortTitle: "Debugging", type: "article", readingTime: 10, tags: ["css", "debugging", "devtools"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques and tools for debugging CSS issues effectively." },
      { id: 104, order: 4, slug: "writing-maintainable-css", title: "Writing Maintainable CSS", shortTitle: "Maintainable CSS Guide", type: "article", readingTime: 10, tags: ["css", "maintainability", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical habits for writing CSS that stays maintainable over time." }
    ]
  },
 
  {
    id: "css-performance-optimization",
    title: "CSS Performance Optimization",
    order: 4,
    items: [
      { id: 105, order: 1, slug: "repaint-vs-reflow", title: "Repaint vs Reflow", shortTitle: "Repaint vs Reflow", type: "article", readingTime: 10, tags: ["css", "performance", "rendering"], status: STATUS.PUBLISHED, featured: true, description: "Understand the difference between browser repaint and reflow and how CSS affects both." },
      { id: 106, order: 2, slug: "expensive-css-properties", title: "Expensive CSS Properties", shortTitle: "Expensive Properties", type: "article", readingTime: 10, tags: ["css", "performance", "rendering"], status: STATUS.PUBLISHED, featured: true, description: "Learn which CSS properties are costly to render and how to avoid performance issues." },
      { id: 107, order: 3, slug: "animation-performance", title: "Animation Performance", shortTitle: "Animation Performance", type: "article", readingTime: 10, tags: ["css", "performance", "animation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write CSS animations that run smoothly without jank." },
      { id: 108, order: 4, slug: "gpu-acceleration", title: "GPU Acceleration", shortTitle: "GPU Acceleration", type: "article", readingTime: 10, tags: ["css", "performance", "gpu"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to leverage GPU acceleration for smoother CSS animations." }
    ]
  },
 
  {
    id: "css-accessibility-resources",
    title: "CSS Accessibility",
    order: 5,
    items: [
      { id: 109, order: 1, slug: "contrast-ratios", title: "Contrast Ratios", shortTitle: "Contrast Ratios", type: "article", readingTime: 8, tags: ["css", "accessibility", "contrast"], status: STATUS.PUBLISHED, featured: true, description: "Learn how color contrast ratios affect readability and accessibility compliance." },
      { id: 110, order: 2, slug: "focus-states", title: "Focus States", shortTitle: "Focus States", type: "article", readingTime: 8, tags: ["css", "accessibility", "focus"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to style focus states to support keyboard navigation and accessibility." },
      { id: 111, order: 3, slug: "keyboard-navigation", title: "Keyboard Navigation", shortTitle: "Keyboard Navigation", type: "article", readingTime: 8, tags: ["css", "accessibility", "keyboard"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS choices affect keyboard navigation for accessibility." },
      { id: 112, order: 4, slug: "screen-reader-considerations", title: "Screen Reader Considerations", shortTitle: "Screen Reader Tips", type: "article", readingTime: 8, tags: ["css", "accessibility", "screen readers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how certain CSS practices can help or hurt screen reader users." }
    ]
  },
 
  {
    id: "css-design-system-basics",
    title: "CSS Design System Basics",
    order: 6,
    items: [
      { id: 113, order: 1, slug: "color-palettes", title: "Color Palettes", shortTitle: "Color Palettes", type: "article", readingTime: 10, tags: ["css", "design system", "colors"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a consistent color palette for a design system." },
      { id: 114, order: 2, slug: "typography-scales", title: "Typography Scales", shortTitle: "Typography Scales", type: "article", readingTime: 10, tags: ["css", "design system", "typography"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a consistent typography scale for a design system." },
      { id: 115, order: 3, slug: "spacing-systems", title: "Spacing Systems", shortTitle: "Spacing Systems", type: "article", readingTime: 10, tags: ["css", "design system", "spacing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a consistent spacing system for a design system." },
      { id: 116, order: 4, slug: "design-tokens", title: "Design Tokens", shortTitle: "Design Tokens", type: "article", readingTime: 10, tags: ["css", "design system", "design tokens"], status: STATUS.PUBLISHED, featured: true, description: "Learn how design tokens connect design decisions to CSS implementation." }
    ]
  },
 
  {
    id: "css-interview-preparation-resources",
    title: "CSS Interview Preparation",
    order: 7,
    items: [
      { id: 117, order: 1, slug: "most-asked-css-interview-questions", title: "Most Asked CSS Interview Questions", shortTitle: "Top Interview Questions", type: "article", readingTime: 14, tags: ["css", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Review the most frequently asked CSS interview questions with answers." },
      { id: 118, order: 2, slug: "tricky-css-questions", title: "Tricky CSS Questions", shortTitle: "Tricky Questions", type: "article", readingTime: 12, tags: ["css", "interview", "tricky"], status: STATUS.PUBLISHED, featured: true, description: "Explore tricky CSS interview questions designed to test deep understanding." },
      { id: 119, order: 3, slug: "layout-challenges", title: "Layout Challenges", shortTitle: "Layout Challenges", type: "article", readingTime: 14, tags: ["css", "interview", "layout"], status: STATUS.PUBLISHED, featured: true, description: "Practice common CSS layout challenges asked in technical interviews." },
      { id: 120, order: 4, slug: "flexbox-grid-challenges", title: "Flexbox/Grid Challenges", shortTitle: "Flexbox/Grid Challenges", type: "article", readingTime: 14, tags: ["css", "interview", "flexbox", "grid"], status: STATUS.PUBLISHED, featured: true, description: "Practice Flexbox and Grid coding challenges commonly asked in interviews." }
    ]
  },
 
  {
    id: "css-debugging-guide",
    title: "CSS Debugging Guide",
    order: 8,
    items: [
      { id: 121, order: 1, slug: "why-is-not-my-css-working", title: "Why Isn't My CSS Working?", shortTitle: "CSS Not Working?", type: "article", readingTime: 10, tags: ["css", "debugging", "troubleshooting"], status: STATUS.PUBLISHED, featured: true, description: "Troubleshoot common reasons why CSS styles don't apply as expected." },
      { id: 122, order: 2, slug: "specificity-conflicts", title: "Specificity Conflicts", shortTitle: "Specificity Conflicts", type: "article", readingTime: 10, tags: ["css", "debugging", "specificity"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to identify and resolve CSS specificity conflicts." },
      { id: 123, order: 3, slug: "positioning-issues", title: "Positioning Issues", shortTitle: "Positioning Issues", type: "article", readingTime: 10, tags: ["css", "debugging", "positioning"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common CSS positioning problems." },
      { id: 124, order: 4, slug: "overflow-issues", title: "Overflow Issues", shortTitle: "Overflow Issues", type: "article", readingTime: 8, tags: ["css", "debugging", "overflow"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common CSS overflow problems." },
      { id: 125, order: 5, slug: "z-index-problems", title: "Z-Index Problems", shortTitle: "Z-Index Problems", type: "article", readingTime: 8, tags: ["css", "debugging", "z-index"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common CSS z-index stacking problems." }
    ]
  }

];