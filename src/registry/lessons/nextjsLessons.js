// ============================================================
// src/registry/lessons/nextjsLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for Next.js until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "nextjs",
  title: "Next.js Tutorial",
  shortTitle: "Next.js",
  category: "Frontend",
  description: "Learn Next.js, the React framework for production. Build fast, SEO-friendly web applications with server-side rendering and static site generation.",
  icon: "nextjs",
  difficulty: "Intermediate", // course-level badge, separate from per-section defaults
  estimatedHours: 35,
  totalLessons: 155,
  version: "Next.js 16.2.10",
  language: "English",
  path: "/nextjs",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["nextjs", "next", "react", "frontend", "web development", "javascript"],
  seo: {
    title: "Next.js Tutorial | DevSphere",
    description: "Master Next.js, the React framework for production-ready web applications. Learn Next.js with our comprehensive tutorial, covering everything from basics to advanced concepts.",
    keywords: ["Next.js", "Next.js tutorial", "Next.js course", "Next.js lessons", "Next.js guide", "Next.js for beginners", "Next.js web development", "Next.js React framework"],
  }
};

export const sections = [

  {
    id: "getting-started",
    title: "Getting Started",
    order: 1,
    difficulty: "Beginner",
    lessons: [
      { id: 1, order: 1, slug: "introduction-to-nextjs", title: "Introduction to Next.js", shortTitle: "Introduction", readingTime: 12, tags: ["nextjs", "introduction", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what Next.js is and how it extends React into a full production framework.", prerequisites: [], related: ["nextjs-why-nextjs", "nextjs-features-of-nextjs", "nextjs-installing-nextjs"], recommended: ["nextjs-why-nextjs", "nextjs-first-nextjs-app"] },
      { id: 2, order: 2, slug: "nextjs-why-nextjs", title: "Why Next.js?", shortTitle: "Why Next.js", readingTime: 10, tags: ["nextjs", "motivation", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Understand the problems Next.js solves and why it's the go-to framework for production React apps.", prerequisites: ["introduction-to-nextjs"], related: ["introduction-to-nextjs", "nextjs-features-of-nextjs"], recommended: ["nextjs-features-of-nextjs"] },
      { id: 3, order: 3, slug: "nextjs-features-of-nextjs", title: "Features of Next.js", shortTitle: "Features", readingTime: 12, tags: ["nextjs", "features", "overview"], status: STATUS.PUBLISHED, featured: true, description: "Explore the core features that make Next.js a powerful React framework.", prerequisites: ["nextjs-why-nextjs"], related: ["nextjs-why-nextjs", "nextjs-installing-nextjs"], recommended: ["nextjs-installing-nextjs"] },
      { id: 4, order: 4, slug: "nextjs-installing-nextjs", title: "Installing Next.js", shortTitle: "Installing Next.js", readingTime: 10, tags: ["nextjs", "installation", "setup"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to install Next.js and set up a new project.", prerequisites: ["nextjs-features-of-nextjs"], related: ["nextjs-first-nextjs-app", "nextjs-project-structure"], recommended: ["nextjs-first-nextjs-app"] },
      { id: 5, order: 5, slug: "nextjs-first-nextjs-app", title: "Create Your First Next.js App", shortTitle: "First Next.js App", readingTime: 16, tags: ["nextjs", "first app", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Build your first Next.js application from scratch.", prerequisites: ["nextjs-installing-nextjs"], related: ["nextjs-project-structure", "nextjs-development-workflow"], recommended: ["nextjs-project-structure"] },
      { id: 6, order: 6, slug: "nextjs-project-structure", title: "Project Structure", shortTitle: "Project Structure", readingTime: 10, tags: ["nextjs", "project structure", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how a typical Next.js project is structured and organized.", prerequisites: ["nextjs-first-nextjs-app"], related: ["nextjs-development-workflow", "nextjs-app-directory-structure"], recommended: ["nextjs-app-directory-structure"] },
      { id: 7, order: 7, slug: "nextjs-development-workflow", title: "Development Workflow", shortTitle: "Dev Workflow", readingTime: 10, tags: ["nextjs", "workflow", "tooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn the typical development workflow used when building Next.js applications.", prerequisites: ["nextjs-project-structure"], related: ["nextjs-project-structure", "nextjs-first-nextjs-app"], recommended: ["nextjs-pages-and-components"] }
    ]
  },
 
  {
    id: "nextjs-fundamentals",
    title: "Next.js Fundamentals",
    order: 2,
    difficulty: "Beginner",
    lessons: [
      { id: 8, order: 1, slug: "nextjs-pages-and-components", title: "Pages and Components", shortTitle: "Pages & Components", readingTime: 12, tags: ["nextjs", "pages", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how pages and components work together in a Next.js application.", prerequisites: ["nextjs-development-workflow"], related: ["nextjs-file-based-routing", "nextjs-rendering-ui"], recommended: ["nextjs-file-based-routing"] },
      { id: 9, order: 2, slug: "nextjs-file-based-routing", title: "File-based Routing", shortTitle: "File-Based Routing", readingTime: 12, tags: ["nextjs", "routing", "file-based routing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Next.js uses the file system to automatically generate routes.", prerequisites: ["nextjs-pages-and-components"], related: ["nextjs-app-router-vs-pages-router", "nextjs-app-directory-structure"], recommended: ["nextjs-app-router-vs-pages-router"] },
      { id: 10, order: 3, slug: "nextjs-app-router-vs-pages-router", title: "App Router vs Pages Router", shortTitle: "App Router vs Pages Router", readingTime: 14, tags: ["nextjs", "app router", "pages router"], status: STATUS.PUBLISHED, featured: true, description: "Compare the App Router and Pages Router and understand when to use each.", prerequisites: ["nextjs-file-based-routing"], related: ["nextjs-file-based-routing", "nextjs-app-directory-structure"], recommended: ["nextjs-app-directory-structure"] },
      { id: 11, order: 4, slug: "nextjs-server-and-client-components", title: "Understanding Server and Client Components", shortTitle: "Server & Client Components", readingTime: 16, tags: ["nextjs", "server components", "client components"], status: STATUS.PUBLISHED, featured: true, description: "Understand the difference between Server Components and Client Components in Next.js.", prerequisites: ["nextjs-app-router-vs-pages-router"], related: ["nextjs-rendering-ui", "nextjs-server-components-deep-dive"], recommended: ["nextjs-rendering-ui"] },
      { id: 12, order: 5, slug: "nextjs-rendering-ui", title: "Rendering UI", shortTitle: "Rendering UI", readingTime: 12, tags: ["nextjs", "rendering", "ui"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Next.js renders UI across the server and the client.", prerequisites: ["nextjs-server-and-client-components"], related: ["nextjs-server-and-client-components", "nextjs-client-side-rendering"], recommended: ["nextjs-client-side-rendering"] },
      { id: 13, order: 6, slug: "nextjs-navigation-with-link", title: "Navigation with Link", shortTitle: "Navigation with Link", readingTime: 10, tags: ["nextjs", "navigation", "link"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to navigate between pages using the Link component.", prerequisites: ["nextjs-file-based-routing"], related: ["nextjs-programmatic-navigation", "nextjs-file-based-routing"], recommended: ["nextjs-programmatic-navigation"] },
      { id: 14, order: 7, slug: "nextjs-programmatic-navigation", title: "Programmatic Navigation", shortTitle: "Programmatic Navigation", readingTime: 10, tags: ["nextjs", "navigation", "router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to navigate programmatically using the Next.js router.", prerequisites: ["nextjs-navigation-with-link"], related: ["nextjs-navigation-with-link", "nextjs-dynamic-routes"], recommended: ["nextjs-dynamic-routes"] }
    ]
  },
 
  {
    id: "app-router-essentials",
    title: "App Router Essentials",
    order: 3,
    difficulty: "Beginner",
    lessons: [
      { id: 15, order: 1, slug: "nextjs-app-directory-structure", title: "App Directory Structure", shortTitle: "App Directory Structure", readingTime: 12, tags: ["nextjs", "app router", "structure"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the app directory is structured in the Next.js App Router.", prerequisites: ["nextjs-app-router-vs-pages-router"], related: ["nextjs-pages", "nextjs-layouts"], recommended: ["nextjs-pages"] },
      { id: 16, order: 2, slug: "nextjs-pages", title: "Pages", shortTitle: "Pages", readingTime: 10, tags: ["nextjs", "pages", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create pages inside the Next.js App Router.", prerequisites: ["nextjs-app-directory-structure"], related: ["nextjs-layouts", "nextjs-templates"], recommended: ["nextjs-layouts"] },
      { id: 17, order: 3, slug: "nextjs-layouts", title: "Layouts", shortTitle: "Layouts", readingTime: 12, tags: ["nextjs", "layouts", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how layouts let you share UI across multiple pages in Next.js.", prerequisites: ["nextjs-pages"], related: ["nextjs-templates", "nextjs-route-groups"], recommended: ["nextjs-templates"] },
      { id: 18, order: 4, slug: "nextjs-templates", title: "Templates", shortTitle: "Templates", readingTime: 10, tags: ["nextjs", "templates", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how templates differ from layouts and when to use them.", prerequisites: ["nextjs-layouts"], related: ["nextjs-layouts", "nextjs-route-groups"], recommended: ["nextjs-route-groups"] },
      { id: 19, order: 5, slug: "nextjs-route-groups", title: "Route Groups", shortTitle: "Route Groups", readingTime: 10, tags: ["nextjs", "route groups", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how route groups let you organize routes without affecting the URL structure.", prerequisites: ["nextjs-templates"], related: ["nextjs-app-directory-structure", "nextjs-nested-routes"], recommended: ["nextjs-nested-routes"] },
      { id: 20, order: 6, slug: "nextjs-loading-ui", title: "Loading UI", shortTitle: "Loading UI", readingTime: 10, tags: ["nextjs", "loading ui", "suspense"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to show loading UI automatically while a route segment loads.", prerequisites: ["nextjs-layouts"], related: ["nextjs-not-found-pages", "nextjs-error-handling"], recommended: ["nextjs-error-handling"] },
      { id: 21, order: 7, slug: "nextjs-not-found-pages", title: "Not Found Pages", shortTitle: "Not Found Pages", readingTime: 8, tags: ["nextjs", "not found", "404"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create custom 404 pages in the Next.js App Router.", prerequisites: ["nextjs-pages"], related: ["nextjs-loading-ui", "nextjs-error-handling"], recommended: ["nextjs-error-handling"] },
      { id: 22, order: 8, slug: "nextjs-error-handling", title: "Error Handling", shortTitle: "Error Handling", readingTime: 12, tags: ["nextjs", "error handling", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle errors gracefully using error boundaries in Next.js.", prerequisites: ["nextjs-not-found-pages"], related: ["nextjs-loading-ui", "nextjs-not-found-pages"], recommended: ["nextjs-server-actions-error-handling"] }
    ]
  },
 
  {
    id: "routing",
    title: "Routing",
    order: 4,
    difficulty: "Intermediate",
    lessons: [
      { id: 23, order: 1, slug: "nextjs-static-routes", title: "Static Routes", shortTitle: "Static Routes", readingTime: 8, tags: ["nextjs", "routing", "static routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to define static routes in a Next.js application.", prerequisites: ["nextjs-file-based-routing"], related: ["nextjs-dynamic-routes", "nextjs-nested-routes"], recommended: ["nextjs-dynamic-routes"] },
      { id: 24, order: 2, slug: "nextjs-dynamic-routes", title: "Dynamic Routes", shortTitle: "Dynamic Routes", readingTime: 12, tags: ["nextjs", "routing", "dynamic routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create dynamic routes that respond to variable URL segments.", prerequisites: ["nextjs-static-routes"], related: ["nextjs-catch-all-routes", "nextjs-nested-routes"], recommended: ["nextjs-catch-all-routes"] },
      { id: 25, order: 3, slug: "nextjs-catch-all-routes", title: "Catch-all Routes", shortTitle: "Catch-all Routes", readingTime: 10, tags: ["nextjs", "routing", "catch-all routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how catch-all routes let you match multiple dynamic URL segments at once.", prerequisites: ["nextjs-dynamic-routes"], related: ["nextjs-dynamic-routes", "nextjs-nested-routes"], recommended: ["nextjs-nested-routes"] },
      { id: 26, order: 4, slug: "nextjs-nested-routes", title: "Nested Routes", shortTitle: "Nested Routes", readingTime: 12, tags: ["nextjs", "routing", "nested routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build nested routes for complex page hierarchies in Next.js.", prerequisites: ["nextjs-catch-all-routes"], related: ["nextjs-parallel-routes", "nextjs-route-groups"], recommended: ["nextjs-parallel-routes"] },
      { id: 27, order: 5, slug: "nextjs-parallel-routes", title: "Parallel Routes", shortTitle: "Parallel Routes", readingTime: 14, tags: ["nextjs", "routing", "parallel routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how parallel routes let you render multiple pages in the same layout simultaneously.", prerequisites: ["nextjs-nested-routes"], related: ["nextjs-intercepting-routes", "nextjs-nested-routes"], recommended: ["nextjs-intercepting-routes"] },
      { id: 28, order: 6, slug: "nextjs-intercepting-routes", title: "Intercepting Routes", shortTitle: "Intercepting Routes", readingTime: 14, tags: ["nextjs", "routing", "intercepting routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how intercepting routes let you show a route within the current layout, like a modal.", prerequisites: ["nextjs-parallel-routes"], related: ["nextjs-parallel-routes", "nextjs-route-handlers"], recommended: ["nextjs-route-handlers"] },
      { id: 29, order: 7, slug: "nextjs-route-handlers", title: "Route Handlers", shortTitle: "Route Handlers", readingTime: 12, tags: ["nextjs", "routing", "route handlers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how route handlers let you build custom request handlers for a route in Next.js.", prerequisites: ["nextjs-intercepting-routes"], related: ["nextjs-api-route-handlers", "nextjs-redirects-and-rewrites"], recommended: ["nextjs-api-route-handlers"] },
      { id: 30, order: 8, slug: "nextjs-redirects-and-rewrites", title: "Redirects and Rewrites", shortTitle: "Redirects & Rewrites", readingTime: 10, tags: ["nextjs", "routing", "redirects"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure redirects and rewrites in a Next.js application.", prerequisites: ["nextjs-route-handlers"], related: ["nextjs-route-handlers", "nextjs-middleware"], recommended: ["nextjs-middleware"] }
    ]
  },
 
  {
    id: "styling-nextjs-applications",
    title: "Styling Next.js Applications",
    order: 5,
    difficulty: "Intermediate",
    lessons: [
      { id: 31, order: 1, slug: "nextjs-global-css", title: "Global CSS", shortTitle: "Global CSS", readingTime: 8, tags: ["nextjs", "css", "global styles"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to apply global CSS styles across a Next.js application.", prerequisites: ["nextjs-project-structure"], related: ["nextjs-css-modules", "nextjs-sass"], recommended: ["nextjs-css-modules"] },
      { id: 32, order: 2, slug: "nextjs-css-modules", title: "CSS Modules", shortTitle: "CSS Modules", readingTime: 10, tags: ["nextjs", "css", "css modules"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS Modules provide scoped styling for Next.js components.", prerequisites: ["nextjs-global-css"], related: ["nextjs-global-css", "nextjs-sass"], recommended: ["nextjs-sass"] },
      { id: 33, order: 3, slug: "nextjs-sass", title: "Sass", shortTitle: "Sass", readingTime: 10, tags: ["nextjs", "css", "sass"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use Sass to style Next.js applications.", prerequisites: ["nextjs-css-modules"], related: ["nextjs-css-modules", "nextjs-tailwind-css"], recommended: ["nextjs-tailwind-css"] },
      { id: 34, order: 4, slug: "nextjs-tailwind-css", title: "Tailwind CSS", shortTitle: "Tailwind CSS", readingTime: 12, tags: ["nextjs", "css", "tailwind"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set up and use Tailwind CSS in a Next.js application.", prerequisites: ["nextjs-sass"], related: ["nextjs-sass", "nextjs-css-in-js"], recommended: ["nextjs-css-in-js"] },
      { id: 35, order: 5, slug: "nextjs-css-in-js", title: "CSS-in-JS", shortTitle: "CSS-in-JS", readingTime: 12, tags: ["nextjs", "css", "css-in-js"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use CSS-in-JS libraries with Next.js Server and Client Components.", prerequisites: ["nextjs-tailwind-css"], related: ["nextjs-tailwind-css", "nextjs-theme-management"], recommended: ["nextjs-theme-management"] },
      { id: 36, order: 6, slug: "nextjs-fonts", title: "Fonts", shortTitle: "Fonts", readingTime: 10, tags: ["nextjs", "fonts", "typography"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add and optimize fonts using next/font.", prerequisites: ["nextjs-global-css"], related: ["nextjs-font-optimization", "nextjs-theme-management"], recommended: ["nextjs-font-optimization"] },
      { id: 37, order: 7, slug: "nextjs-theme-management", title: "Theme Management", shortTitle: "Theme Management", readingTime: 12, tags: ["nextjs", "theming", "dark mode"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement theme switching, such as light and dark mode, in Next.js.", prerequisites: ["nextjs-css-in-js"], related: ["nextjs-fonts", "nextjs-css-in-js"], recommended: ["nextjs-fonts"] }
    ]
  },
 
  {
    id: "images-fonts-static-assets",
    title: "Images, Fonts & Static Assets",
    order: 6,
    difficulty: "Intermediate",
    lessons: [
      { id: 38, order: 1, slug: "nextjs-image-component", title: "Image Component", shortTitle: "Image Component", readingTime: 12, tags: ["nextjs", "images", "image component"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use the built-in Image component for optimized image rendering.", prerequisites: ["nextjs-global-css"], related: ["nextjs-image-optimization", "nextjs-static-assets"], recommended: ["nextjs-image-optimization"] },
      { id: 39, order: 2, slug: "nextjs-image-optimization", title: "Image Optimization", shortTitle: "Image Optimization", readingTime: 12, tags: ["nextjs", "images", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Next.js automatically optimizes images for performance.", prerequisites: ["nextjs-image-component"], related: ["nextjs-image-component", "nextjs-perf-image-optimization"], recommended: ["nextjs-perf-image-optimization"] },
      { id: 40, order: 3, slug: "nextjs-font-optimization", title: "Font Optimization", shortTitle: "Font Optimization", readingTime: 10, tags: ["nextjs", "fonts", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Next.js optimizes font loading to improve performance.", prerequisites: ["nextjs-fonts"], related: ["nextjs-fonts", "nextjs-perf-font-optimization"], recommended: ["nextjs-perf-font-optimization"] },
      { id: 41, order: 4, slug: "nextjs-static-assets", title: "Static Assets", shortTitle: "Static Assets", readingTime: 8, tags: ["nextjs", "static assets", "public folder"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to work with static assets like images, fonts, and documents in Next.js.", prerequisites: ["nextjs-image-component"], related: ["nextjs-public-folder", "nextjs-script-component"], recommended: ["nextjs-public-folder"] },
      { id: 42, order: 5, slug: "nextjs-public-folder", title: "Public Folder", shortTitle: "Public Folder", readingTime: 8, tags: ["nextjs", "public folder", "static files"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the public folder is used to serve static files directly in Next.js.", prerequisites: ["nextjs-static-assets"], related: ["nextjs-static-assets", "nextjs-script-component"], recommended: ["nextjs-script-component"] },
      { id: 43, order: 6, slug: "nextjs-script-component", title: "Script Component", shortTitle: "Script Component", readingTime: 10, tags: ["nextjs", "scripts", "third-party"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to load third-party scripts efficiently using the Script component.", prerequisites: ["nextjs-public-folder"], related: ["nextjs-public-folder", "nextjs-static-assets"], recommended: ["nextjs-script-optimization"] }
    ]
  },
 
  {
    id: "rendering-strategies",
    title: "Rendering Strategies",
    order: 7,
    difficulty: "Intermediate",
    lessons: [
      { id: 44, order: 1, slug: "nextjs-client-side-rendering", title: "Client-side Rendering (CSR)", shortTitle: "Client-side Rendering", readingTime: 12, tags: ["nextjs", "rendering", "csr"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Client-side Rendering works and when it's the right choice in Next.js.", prerequisites: ["nextjs-rendering-ui"], related: ["nextjs-server-side-rendering", "nextjs-static-site-generation"], recommended: ["nextjs-server-side-rendering"] },
      { id: 45, order: 2, slug: "nextjs-server-side-rendering", title: "Server-side Rendering (SSR)", shortTitle: "Server-side Rendering", readingTime: 14, tags: ["nextjs", "rendering", "ssr"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Server-side Rendering generates HTML on each request in Next.js.", prerequisites: ["nextjs-client-side-rendering"], related: ["nextjs-static-site-generation", "nextjs-client-side-rendering"], recommended: ["nextjs-static-site-generation"] },
      { id: 46, order: 3, slug: "nextjs-static-site-generation", title: "Static Site Generation (SSG)", shortTitle: "Static Site Generation", readingTime: 14, tags: ["nextjs", "rendering", "ssg"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Static Site Generation pre-renders pages at build time in Next.js.", prerequisites: ["nextjs-server-side-rendering"], related: ["nextjs-incremental-static-regeneration", "nextjs-server-side-rendering"], recommended: ["nextjs-incremental-static-regeneration"] },
      { id: 47, order: 4, slug: "nextjs-incremental-static-regeneration", title: "Incremental Static Regeneration (ISR)", shortTitle: "Incremental Static Regeneration", readingTime: 14, tags: ["nextjs", "rendering", "isr"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Incremental Static Regeneration updates static pages after deployment.", prerequisites: ["nextjs-static-site-generation"], related: ["nextjs-partial-prerendering", "nextjs-static-site-generation"], recommended: ["nextjs-partial-prerendering"] },
      { id: 48, order: 5, slug: "nextjs-partial-prerendering", title: "Partial Prerendering (PPR)", shortTitle: "Partial Prerendering", readingTime: 14, tags: ["nextjs", "rendering", "ppr"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Partial Prerendering combines static and dynamic rendering in a single route.", prerequisites: ["nextjs-incremental-static-regeneration"], related: ["nextjs-streaming", "nextjs-advanced-partial-prerendering"], recommended: ["nextjs-streaming"] },
      { id: 49, order: 6, slug: "nextjs-streaming", title: "Streaming", shortTitle: "Streaming", readingTime: 12, tags: ["nextjs", "rendering", "streaming"], status: STATUS.PUBLISHED, featured: true, description: "Learn how streaming lets Next.js progressively render UI as data becomes available.", prerequisites: ["nextjs-partial-prerendering"], related: ["nextjs-partial-prerendering", "nextjs-rendering-strategy-comparison"], recommended: ["nextjs-rendering-strategy-comparison"] },
      { id: 50, order: 7, slug: "nextjs-rendering-strategy-comparison", title: "Rendering Strategy Comparison", shortTitle: "Rendering Strategy Comparison", readingTime: 16, tags: ["nextjs", "rendering", "comparison"], status: STATUS.PUBLISHED, featured: true, description: "Compare CSR, SSR, SSG, ISR, and PPR to choose the right rendering strategy for your page.", prerequisites: ["nextjs-streaming"], related: ["nextjs-client-side-rendering", "nextjs-server-side-rendering", "nextjs-static-site-generation"], recommended: ["nextjs-data-fetching-patterns"] }
    ]
  },
 
  {
    id: "data-fetching",
    title: "Data Fetching",
    order: 8,
    difficulty: "Intermediate",
    lessons: [
      { id: 51, order: 1, slug: "nextjs-fetch-api", title: "Fetch API", shortTitle: "Fetch API", readingTime: 12, tags: ["nextjs", "data fetching", "fetch"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fetch data in Next.js using the extended fetch API.", prerequisites: ["nextjs-rendering-strategy-comparison"], related: ["nextjs-server-side-fetching", "nextjs-client-side-fetching"], recommended: ["nextjs-server-side-fetching"] },
      { id: 52, order: 2, slug: "nextjs-server-side-fetching", title: "Server-side Fetching", shortTitle: "Server-side Fetching", readingTime: 12, tags: ["nextjs", "data fetching", "server-side"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fetch data directly inside Server Components.", prerequisites: ["nextjs-fetch-api"], related: ["nextjs-async-components", "nextjs-client-side-fetching"], recommended: ["nextjs-async-components"] },
      { id: 53, order: 3, slug: "nextjs-client-side-fetching", title: "Client-side Fetching", shortTitle: "Client-side Fetching", readingTime: 12, tags: ["nextjs", "data fetching", "client-side"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fetch data inside Client Components in Next.js.", prerequisites: ["nextjs-fetch-api"], related: ["nextjs-server-side-fetching", "nextjs-async-components"], recommended: ["nextjs-async-components"] },
      { id: 54, order: 4, slug: "nextjs-async-components", title: "Async Components", shortTitle: "Async Components", readingTime: 12, tags: ["nextjs", "data fetching", "async components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how async Server Components let you fetch data directly in your component functions.", prerequisites: ["nextjs-server-side-fetching"], related: ["nextjs-server-side-fetching", "nextjs-caching"], recommended: ["nextjs-caching"] },
      { id: 55, order: 5, slug: "nextjs-caching", title: "Caching", shortTitle: "Caching", readingTime: 14, tags: ["nextjs", "caching", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Next.js caches data and rendered output to improve performance.", prerequisites: ["nextjs-async-components"], related: ["nextjs-revalidation", "nextjs-data-cache"], recommended: ["nextjs-revalidation"] },
      { id: 56, order: 6, slug: "nextjs-revalidation", title: "Revalidation", shortTitle: "Revalidation", readingTime: 12, tags: ["nextjs", "caching", "revalidation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to revalidate cached data so your application stays up to date.", prerequisites: ["nextjs-caching"], related: ["nextjs-cache-revalidation", "nextjs-caching"], recommended: ["nextjs-cache-revalidation"] },
      { id: 57, order: 7, slug: "nextjs-data-fetching-patterns", title: "Data Fetching Patterns", shortTitle: "Data Fetching Patterns", readingTime: 14, tags: ["nextjs", "data fetching", "patterns"], status: STATUS.PUBLISHED, featured: true, description: "Explore common data fetching patterns used in real-world Next.js applications.", prerequisites: ["nextjs-revalidation"], related: ["nextjs-caching", "nextjs-revalidation"], recommended: ["nextjs-introduction-to-server-actions"] }
    ]
  },
 
  {
    id: "server-actions-mutations",
    title: "Server Actions & Mutations",
    order: 9,
    difficulty: "Advanced",
    lessons: [
      { id: 58, order: 1, slug: "nextjs-introduction-to-server-actions", title: "Introduction to Server Actions", shortTitle: "Intro to Server Actions", readingTime: 14, tags: ["nextjs", "server actions", "mutations"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Server Actions and how they let you run server-side code from the client.", prerequisites: ["nextjs-data-fetching-patterns"], related: ["nextjs-forms-with-server-actions", "nextjs-mutating-data"], recommended: ["nextjs-forms-with-server-actions"] },
      { id: 59, order: 2, slug: "nextjs-forms-with-server-actions", title: "Forms with Server Actions", shortTitle: "Forms with Server Actions", readingTime: 14, tags: ["nextjs", "server actions", "forms"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle form submissions using Server Actions in Next.js.", prerequisites: ["nextjs-introduction-to-server-actions"], related: ["nextjs-mutating-data", "nextjs-introduction-to-server-actions"], recommended: ["nextjs-mutating-data"] },
      { id: 60, order: 3, slug: "nextjs-mutating-data", title: "Mutating Data", shortTitle: "Mutating Data", readingTime: 14, tags: ["nextjs", "server actions", "data mutations"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to mutate data on the server using Server Actions in Next.js.", prerequisites: ["nextjs-forms-with-server-actions"], related: ["nextjs-optimistic-updates", "nextjs-cache-revalidation"], recommended: ["nextjs-optimistic-updates"] },
      { id: 61, order: 4, slug: "nextjs-optimistic-updates", title: "Optimistic Updates", shortTitle: "Optimistic Updates", readingTime: 14, tags: ["nextjs", "server actions", "optimistic updates"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement optimistic UI updates while a Server Action is processing.", prerequisites: ["nextjs-mutating-data"], related: ["nextjs-mutating-data", "nextjs-cache-revalidation"], recommended: ["nextjs-cache-revalidation"] },
      { id: 62, order: 5, slug: "nextjs-cache-revalidation", title: "Cache Revalidation", shortTitle: "Cache Revalidation", readingTime: 12, tags: ["nextjs", "server actions", "cache revalidation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to revalidate the cache after a Server Action mutates data.", prerequisites: ["nextjs-optimistic-updates"], related: ["nextjs-revalidation", "nextjs-optimistic-updates"], recommended: ["nextjs-server-actions-error-handling"] },
      { id: 63, order: 6, slug: "nextjs-server-actions-error-handling", title: "Error Handling", shortTitle: "Server Actions Error Handling", readingTime: 12, tags: ["nextjs", "server actions", "error handling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle errors that occur inside Server Actions.", prerequisites: ["nextjs-cache-revalidation"], related: ["nextjs-error-handling", "nextjs-cache-revalidation"], recommended: ["nextjs-error-handling"] }
    ]
  },
 
  {
    id: "apis-backend-development",
    title: "APIs & Backend Development",
    order: 10,
    difficulty: "Advanced",
    lessons: [
      { id: 64, order: 1, slug: "nextjs-api-routes", title: "API Routes", shortTitle: "API Routes", readingTime: 14, tags: ["nextjs", "api", "backend"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to building API endpoints directly inside a Next.js application.", prerequisites: ["nextjs-server-actions-error-handling"], related: ["nextjs-api-route-handlers", "nextjs-dynamic-api-routes"], recommended: ["nextjs-api-route-handlers"] },
      { id: 65, order: 2, slug: "nextjs-api-route-handlers", title: "Route Handlers", shortTitle: "API Route Handlers", readingTime: 14, tags: ["nextjs", "api", "route handlers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to define custom request handlers for building backend APIs in Next.js.", prerequisites: ["nextjs-api-routes"], related: ["nextjs-route-handlers", "nextjs-dynamic-api-routes"], recommended: ["nextjs-dynamic-api-routes"] },
      { id: 66, order: 3, slug: "nextjs-dynamic-api-routes", title: "Dynamic API Routes", shortTitle: "Dynamic API Routes", readingTime: 12, tags: ["nextjs", "api", "dynamic routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build dynamic API routes that respond to variable URL segments.", prerequisites: ["nextjs-api-route-handlers"], related: ["nextjs-api-routes", "nextjs-middleware"], recommended: ["nextjs-middleware"] },
      { id: 67, order: 4, slug: "nextjs-middleware", title: "Middleware", shortTitle: "Middleware", readingTime: 14, tags: ["nextjs", "middleware", "backend"], status: STATUS.PUBLISHED, featured: true, description: "Learn how middleware lets you run code before a request is completed in Next.js.", prerequisites: ["nextjs-dynamic-api-routes"], related: ["nextjs-response-helpers", "nextjs-advanced-middleware"], recommended: ["nextjs-response-helpers"] },
      { id: 68, order: 5, slug: "nextjs-response-helpers", title: "Response Helpers", shortTitle: "Response Helpers", readingTime: 10, tags: ["nextjs", "api", "response helpers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use response helpers to build consistent API responses in Next.js.", prerequisites: ["nextjs-middleware"], related: ["nextjs-middleware", "nextjs-crud-api"], recommended: ["nextjs-crud-api"] },
      { id: 69, order: 6, slug: "nextjs-crud-api", title: "CRUD API", shortTitle: "CRUD API", readingTime: 16, tags: ["nextjs", "api", "crud"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a complete CRUD API using Next.js route handlers.", prerequisites: ["nextjs-response-helpers"], related: ["nextjs-rest-api-integration", "nextjs-crud-operations"], recommended: ["nextjs-rest-api-integration"] },
      { id: 70, order: 7, slug: "nextjs-rest-api-integration", title: "REST API Integration", shortTitle: "REST API Integration", readingTime: 16, tags: ["nextjs", "api", "rest api"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fully integrate a REST API into a Next.js application.", prerequisites: ["nextjs-crud-api"], related: ["nextjs-crud-api", "nextjs-authentication-basics"], recommended: ["nextjs-authentication-basics"] }
    ]
  },
 
  {
    id: "authentication-authorization",
    title: "Authentication & Authorization",
    order: 11,
    difficulty: "Advanced",
    lessons: [
      { id: 71, order: 1, slug: "nextjs-authentication-basics", title: "Authentication Basics", shortTitle: "Authentication Basics", readingTime: 12, tags: ["nextjs", "authentication", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to authentication concepts in modern Next.js applications.", prerequisites: ["nextjs-rest-api-integration"], related: ["nextjs-session-management", "nextjs-nextauth"], recommended: ["nextjs-nextauth"] },
      { id: 72, order: 2, slug: "nextjs-session-management", title: "Session Management", shortTitle: "Session Management", readingTime: 12, tags: ["nextjs", "authentication", "sessions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage user sessions in a Next.js application.", prerequisites: ["nextjs-authentication-basics"], related: ["nextjs-authentication-basics", "nextjs-nextauth"], recommended: ["nextjs-nextauth"] },
      { id: 73, order: 3, slug: "nextjs-nextauth", title: "NextAuth", shortTitle: "NextAuth", readingTime: 16, tags: ["nextjs", "authentication", "nextauth"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add authentication to Next.js applications using NextAuth.", prerequisites: ["nextjs-session-management"], related: ["nextjs-jwt-authentication", "nextjs-session-management"], recommended: ["nextjs-jwt-authentication"] },
      { id: 74, order: 4, slug: "nextjs-jwt-authentication", title: "JWT Authentication", shortTitle: "JWT Authentication", readingTime: 14, tags: ["nextjs", "authentication", "jwt"], status: STATUS.PUBLISHED, featured: true, description: "Learn how JSON Web Tokens are used to authenticate users in Next.js applications.", prerequisites: ["nextjs-nextauth"], related: ["nextjs-nextauth", "nextjs-protected-routes"], recommended: ["nextjs-protected-routes"] },
      { id: 75, order: 5, slug: "nextjs-protected-routes", title: "Protected Routes", shortTitle: "Protected Routes", readingTime: 12, tags: ["nextjs", "authentication", "protected routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to protect routes in a Next.js application based on authentication status.", prerequisites: ["nextjs-jwt-authentication"], related: ["nextjs-authorization", "nextjs-role-based-access-control"], recommended: ["nextjs-authorization"] },
      { id: 76, order: 6, slug: "nextjs-authorization", title: "Authorization", shortTitle: "Authorization", readingTime: 12, tags: ["nextjs", "authorization", "access control"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to control what authenticated users are allowed to do in your application.", prerequisites: ["nextjs-protected-routes"], related: ["nextjs-role-based-access-control", "nextjs-protected-routes"], recommended: ["nextjs-role-based-access-control"] },
      { id: 77, order: 7, slug: "nextjs-role-based-access-control", title: "Role-Based Access Control", shortTitle: "Role-Based Access Control", readingTime: 14, tags: ["nextjs", "authorization", "rbac"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to implement role-based access control in a Next.js application.", prerequisites: ["nextjs-authorization"], related: ["nextjs-authorization", "nextjs-environment-variables"], recommended: ["nextjs-environment-variables"] }
    ]
  },
 
  {
    id: "database-integration",
    title: "Database Integration",
    order: 12,
    difficulty: "Advanced",
    lessons: [
      { id: 78, order: 1, slug: "nextjs-environment-variables", title: "Environment Variables", shortTitle: "Environment Variables", readingTime: 10, tags: ["nextjs", "environment variables", "configuration"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage environment variables to configure database connections in Next.js.", prerequisites: ["nextjs-role-based-access-control"], related: ["nextjs-connecting-mongodb", "nextjs-connecting-postgresql"], recommended: ["nextjs-connecting-mongodb"] },
      { id: 79, order: 2, slug: "nextjs-connecting-mongodb", title: "Connecting MongoDB", shortTitle: "Connecting MongoDB", readingTime: 14, tags: ["nextjs", "database", "mongodb"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to connect a Next.js application to a MongoDB database.", prerequisites: ["nextjs-environment-variables"], related: ["nextjs-connecting-postgresql", "nextjs-prisma-orm"], recommended: ["nextjs-prisma-orm"] },
      { id: 80, order: 3, slug: "nextjs-connecting-postgresql", title: "Connecting PostgreSQL", shortTitle: "Connecting PostgreSQL", readingTime: 14, tags: ["nextjs", "database", "postgresql"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to connect a Next.js application to a PostgreSQL database.", prerequisites: ["nextjs-environment-variables"], related: ["nextjs-connecting-mongodb", "nextjs-prisma-orm"], recommended: ["nextjs-prisma-orm"] },
      { id: 81, order: 4, slug: "nextjs-prisma-orm", title: "Prisma ORM", shortTitle: "Prisma ORM", readingTime: 16, tags: ["nextjs", "database", "prisma"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use Prisma ORM to interact with a database in Next.js.", prerequisites: ["nextjs-connecting-postgresql"], related: ["nextjs-drizzle-orm", "nextjs-crud-operations"], recommended: ["nextjs-crud-operations"] },
      { id: 82, order: 5, slug: "nextjs-drizzle-orm", title: "Drizzle ORM", shortTitle: "Drizzle ORM", readingTime: 16, tags: ["nextjs", "database", "drizzle"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use Drizzle ORM as a lightweight alternative for database access in Next.js.", prerequisites: ["nextjs-prisma-orm"], related: ["nextjs-prisma-orm", "nextjs-crud-operations"], recommended: ["nextjs-crud-operations"] },
      { id: 83, order: 6, slug: "nextjs-crud-operations", title: "CRUD Operations", shortTitle: "CRUD Operations", readingTime: 16, tags: ["nextjs", "database", "crud"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to perform create, read, update, and delete operations against a database in Next.js.", prerequisites: ["nextjs-drizzle-orm"], related: ["nextjs-prisma-orm", "nextjs-crud-api"], recommended: ["nextjs-crud-api"] }
    ]
  },
 
  {
    id: "seo-metadata",
    title: "SEO & Metadata",
    order: 13,
    difficulty: "Intermediate",
    lessons: [
      { id: 84, order: 1, slug: "nextjs-metadata-api", title: "Metadata API", shortTitle: "Metadata API", readingTime: 12, tags: ["nextjs", "seo", "metadata"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to the Next.js Metadata API for managing SEO tags.", prerequisites: ["nextjs-crud-operations"], related: ["nextjs-generate-metadata", "nextjs-dynamic-metadata"], recommended: ["nextjs-generate-metadata"] },
      { id: 85, order: 2, slug: "nextjs-generate-metadata", title: "generateMetadata()", shortTitle: "generateMetadata()", readingTime: 12, tags: ["nextjs", "seo", "generatemetadata"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use the generateMetadata function to create dynamic page metadata.", prerequisites: ["nextjs-metadata-api"], related: ["nextjs-dynamic-metadata", "nextjs-metadata-api"], recommended: ["nextjs-dynamic-metadata"] },
      { id: 86, order: 3, slug: "nextjs-open-graph", title: "Open Graph", shortTitle: "Open Graph", readingTime: 10, tags: ["nextjs", "seo", "open graph"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure Open Graph tags for rich social media previews.", prerequisites: ["nextjs-generate-metadata"], related: ["nextjs-metadata-api", "nextjs-structured-data"], recommended: ["nextjs-structured-data"] },
      { id: 87, order: 4, slug: "nextjs-robots-txt", title: "Robots.txt", shortTitle: "Robots.txt", readingTime: 8, tags: ["nextjs", "seo", "robots.txt"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure a robots.txt file to control search engine crawling in Next.js.", prerequisites: ["nextjs-metadata-api"], related: ["nextjs-sitemap-xml", "nextjs-canonical-urls"], recommended: ["nextjs-sitemap-xml"] },
      { id: 88, order: 5, slug: "nextjs-sitemap-xml", title: "Sitemap.xml", shortTitle: "Sitemap.xml", readingTime: 10, tags: ["nextjs", "seo", "sitemap"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to generate a sitemap.xml file to help search engines index your Next.js site.", prerequisites: ["nextjs-robots-txt"], related: ["nextjs-robots-txt", "nextjs-canonical-urls"], recommended: ["nextjs-canonical-urls"] },
      { id: 89, order: 6, slug: "nextjs-canonical-urls", title: "Canonical URLs", shortTitle: "Canonical URLs", readingTime: 8, tags: ["nextjs", "seo", "canonical urls"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set canonical URLs to avoid duplicate content issues in search engines.", prerequisites: ["nextjs-sitemap-xml"], related: ["nextjs-sitemap-xml", "nextjs-structured-data"], recommended: ["nextjs-structured-data"] },
      { id: 90, order: 7, slug: "nextjs-structured-data", title: "Structured Data", shortTitle: "Structured Data", readingTime: 12, tags: ["nextjs", "seo", "structured data"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to add structured data to help search engines understand your content.", prerequisites: ["nextjs-canonical-urls"], related: ["nextjs-open-graph", "nextjs-canonical-urls"], recommended: ["nextjs-dynamic-metadata"] },
      { id: 91, order: 8, slug: "nextjs-dynamic-metadata", title: "Dynamic Metadata", shortTitle: "Dynamic Metadata", readingTime: 12, tags: ["nextjs", "seo", "dynamic metadata"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to generate metadata dynamically based on page content or route parameters.", prerequisites: ["nextjs-structured-data"], related: ["nextjs-generate-metadata", "nextjs-structured-data"], recommended: ["nextjs-seo-best-practices"] }
    ]
  },
 
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    order: 14,
    difficulty: "Advanced",
    lessons: [
      { id: 92, order: 1, slug: "nextjs-core-web-vitals", title: "Core Web Vitals", shortTitle: "Core Web Vitals", readingTime: 14, tags: ["nextjs", "performance", "core web vitals"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Core Web Vitals measure real-world performance and how Next.js helps improve them.", prerequisites: ["nextjs-dynamic-metadata"], related: ["nextjs-lazy-loading", "nextjs-bundle-optimization"], recommended: ["nextjs-lazy-loading"] },
      { id: 93, order: 2, slug: "nextjs-lazy-loading", title: "Lazy Loading", shortTitle: "Lazy Loading", readingTime: 12, tags: ["nextjs", "performance", "lazy loading"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to lazily load components in Next.js to improve initial load performance.", prerequisites: ["nextjs-core-web-vitals"], related: ["nextjs-dynamic-imports", "nextjs-code-splitting"], recommended: ["nextjs-dynamic-imports"] },
      { id: 94, order: 3, slug: "nextjs-dynamic-imports", title: "Dynamic Imports", shortTitle: "Dynamic Imports", readingTime: 12, tags: ["nextjs", "performance", "dynamic imports"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use dynamic imports to load modules only when needed in Next.js.", prerequisites: ["nextjs-lazy-loading"], related: ["nextjs-code-splitting", "nextjs-lazy-loading"], recommended: ["nextjs-code-splitting"] },
      { id: 95, order: 4, slug: "nextjs-code-splitting", title: "Code Splitting", shortTitle: "Code Splitting", readingTime: 12, tags: ["nextjs", "performance", "code splitting"], status: STATUS.PUBLISHED, featured: true, description: "Learn how code splitting reduces bundle size by loading code only when needed.", prerequisites: ["nextjs-dynamic-imports"], related: ["nextjs-bundle-optimization", "nextjs-dynamic-imports"], recommended: ["nextjs-bundle-optimization"] },
      { id: 96, order: 5, slug: "nextjs-bundle-optimization", title: "Bundle Optimization", shortTitle: "Bundle Optimization", readingTime: 14, tags: ["nextjs", "performance", "bundle size"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for optimizing your Next.js application's bundle size.", prerequisites: ["nextjs-code-splitting"], related: ["nextjs-perf-image-optimization", "nextjs-code-splitting"], recommended: ["nextjs-perf-image-optimization"] },
      { id: 97, order: 6, slug: "nextjs-perf-image-optimization", title: "Image Optimization", shortTitle: "Image Optimization (Performance)", readingTime: 12, tags: ["nextjs", "performance", "images"], status: STATUS.PUBLISHED, featured: true, description: "Revisit image optimization with a deeper focus on real-world performance gains.", prerequisites: ["nextjs-bundle-optimization"], related: ["nextjs-image-optimization", "nextjs-perf-font-optimization"], recommended: ["nextjs-perf-font-optimization"] },
      { id: 98, order: 7, slug: "nextjs-perf-font-optimization", title: "Font Optimization", shortTitle: "Font Optimization (Performance)", readingTime: 10, tags: ["nextjs", "performance", "fonts"], status: STATUS.PUBLISHED, featured: true, description: "Revisit font optimization with a deeper focus on real-world performance gains.", prerequisites: ["nextjs-perf-image-optimization"], related: ["nextjs-font-optimization", "nextjs-script-optimization"], recommended: ["nextjs-script-optimization"] },
      { id: 99, order: 8, slug: "nextjs-script-optimization", title: "Script Optimization", shortTitle: "Script Optimization", readingTime: 10, tags: ["nextjs", "performance", "scripts"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to optimize third-party script loading for better performance in Next.js.", prerequisites: ["nextjs-perf-font-optimization"], related: ["nextjs-script-component", "nextjs-perf-font-optimization"], recommended: ["nextjs-request-memoization"] }
    ]
  },
 
  {
    id: "caching",
    title: "Caching",
    order: 15,
    difficulty: "Advanced",
    lessons: [
      { id: 100, order: 1, slug: "nextjs-request-memoization", title: "Request Memoization", shortTitle: "Request Memoization", readingTime: 12, tags: ["nextjs", "caching", "request memoization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how request memoization avoids duplicate data fetches within a single render pass.", prerequisites: ["nextjs-script-optimization"], related: ["nextjs-data-cache", "nextjs-full-route-cache"], recommended: ["nextjs-data-cache"] },
      { id: 101, order: 2, slug: "nextjs-data-cache", title: "Data Cache", shortTitle: "Data Cache", readingTime: 12, tags: ["nextjs", "caching", "data cache"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Data Cache persists fetched data across requests and deployments.", prerequisites: ["nextjs-request-memoization"], related: ["nextjs-full-route-cache", "nextjs-router-cache"], recommended: ["nextjs-full-route-cache"] },
      { id: 102, order: 3, slug: "nextjs-full-route-cache", title: "Full Route Cache", shortTitle: "Full Route Cache", readingTime: 12, tags: ["nextjs", "caching", "full route cache"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Full Route Cache stores the rendered output of static routes.", prerequisites: ["nextjs-data-cache"], related: ["nextjs-router-cache", "nextjs-data-cache"], recommended: ["nextjs-router-cache"] },
      { id: 103, order: 4, slug: "nextjs-router-cache", title: "Router Cache", shortTitle: "Router Cache", readingTime: 12, tags: ["nextjs", "caching", "router cache"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Router Cache stores route segments on the client for faster navigation.", prerequisites: ["nextjs-full-route-cache"], related: ["nextjs-cache-revalidation-techniques", "nextjs-full-route-cache"], recommended: ["nextjs-cache-revalidation-techniques"] },
      { id: 104, order: 5, slug: "nextjs-cache-revalidation-techniques", title: "Revalidation", shortTitle: "Cache Revalidation Techniques", readingTime: 14, tags: ["nextjs", "caching", "revalidation"], status: STATUS.PUBLISHED, featured: true, description: "Explore advanced techniques for revalidating Next.js caches across your application.", prerequisites: ["nextjs-router-cache"], related: ["nextjs-cache-tags", "nextjs-revalidation"], recommended: ["nextjs-cache-tags"] },
      { id: 105, order: 6, slug: "nextjs-cache-tags", title: "Cache Tags", shortTitle: "Cache Tags", readingTime: 12, tags: ["nextjs", "caching", "cache tags"], status: STATUS.PUBLISHED, featured: true, description: "Learn how cache tags let you selectively invalidate cached data in Next.js.", prerequisites: ["nextjs-cache-revalidation-techniques"], related: ["nextjs-cache-revalidation-techniques", "nextjs-data-cache"], recommended: ["nextjs-advanced-middleware"] }
    ]
  },
 
  {
    id: "advanced-nextjs",
    title: "Advanced Next.js",
    order: 16,
    difficulty: "Advanced",
    lessons: [
      { id: 106, order: 1, slug: "nextjs-advanced-middleware", title: "Middleware", shortTitle: "Advanced Middleware", readingTime: 14, tags: ["nextjs", "middleware", "advanced"], status: STATUS.PUBLISHED, featured: true, description: "Explore advanced middleware patterns for authentication, redirects, and A/B testing.", prerequisites: ["nextjs-cache-tags"], related: ["nextjs-middleware", "nextjs-edge-runtime"], recommended: ["nextjs-edge-runtime"] },
      { id: 107, order: 2, slug: "nextjs-edge-runtime", title: "Edge Runtime", shortTitle: "Edge Runtime", readingTime: 14, tags: ["nextjs", "edge runtime", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Edge Runtime lets you run code closer to your users for lower latency.", prerequisites: ["nextjs-advanced-middleware"], related: ["nextjs-advanced-middleware", "nextjs-draft-mode"], recommended: ["nextjs-draft-mode"] },
      { id: 108, order: 3, slug: "nextjs-draft-mode", title: "Draft Mode", shortTitle: "Draft Mode", readingTime: 12, tags: ["nextjs", "draft mode", "cms"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Draft Mode lets you preview unpublished content from a headless CMS.", prerequisites: ["nextjs-edge-runtime"], related: ["nextjs-edge-runtime", "nextjs-internationalization"], recommended: ["nextjs-internationalization"] },
      { id: 109, order: 4, slug: "nextjs-internationalization", title: "Internationalization (i18n)", shortTitle: "Internationalization", readingTime: 16, tags: ["nextjs", "i18n", "internationalization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to internationalize a Next.js application to support multiple languages.", prerequisites: ["nextjs-draft-mode"], related: ["nextjs-draft-mode", "nextjs-nextjs-mdx"], recommended: ["nextjs-nextjs-mdx"] },
      { id: 110, order: 5, slug: "nextjs-nextjs-mdx", title: "MDX", shortTitle: "MDX", readingTime: 12, tags: ["nextjs", "mdx", "content"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write and render MDX content in a Next.js application.", prerequisites: ["nextjs-internationalization"], related: ["nextjs-internationalization", "nextjs-server-components-deep-dive"], recommended: ["nextjs-server-components-deep-dive"] },
      { id: 111, order: 6, slug: "nextjs-server-components-deep-dive", title: "Server Components Deep Dive", shortTitle: "Server Components Deep Dive", readingTime: 16, tags: ["nextjs", "server components", "advanced"], status: STATUS.PUBLISHED, featured: true, description: "Take a deeper look at how Server Components work under the hood in Next.js.", prerequisites: ["nextjs-nextjs-mdx"], related: ["nextjs-react-server-components", "nextjs-server-and-client-components"], recommended: ["nextjs-react-server-components"] },
      { id: 112, order: 7, slug: "nextjs-react-server-components", title: "React Server Components", shortTitle: "React Server Components", readingTime: 16, tags: ["nextjs", "react server components", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React Server Components work as the foundation of the Next.js App Router.", prerequisites: ["nextjs-server-components-deep-dive"], related: ["nextjs-server-components-deep-dive", "nextjs-advanced-partial-prerendering"], recommended: ["nextjs-advanced-partial-prerendering"] },
      { id: 113, order: 8, slug: "nextjs-advanced-partial-prerendering", title: "Partial Prerendering", shortTitle: "Advanced Partial Prerendering", readingTime: 16, tags: ["nextjs", "ppr", "advanced"], status: STATUS.PUBLISHED, featured: true, description: "Explore advanced use cases for Partial Prerendering in production applications.", prerequisites: ["nextjs-react-server-components"], related: ["nextjs-partial-prerendering", "nextjs-react-server-components"], recommended: ["nextjs-next-config-js"] }
    ]
  },
 
  {
    id: "configuration-tooling",
    title: "Configuration & Tooling",
    order: 17,
    difficulty: "Intermediate",
    lessons: [
      { id: 114, order: 1, slug: "nextjs-next-config-js", title: "next.config.js", shortTitle: "next.config.js", readingTime: 12, tags: ["nextjs", "configuration", "next.config.js"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure a Next.js application using the next.config.js file.", prerequisites: ["nextjs-advanced-partial-prerendering"], related: ["nextjs-typescript", "nextjs-eslint"], recommended: ["nextjs-typescript"] },
      { id: 115, order: 2, slug: "nextjs-typescript", title: "TypeScript", shortTitle: "TypeScript", readingTime: 14, tags: ["nextjs", "typescript", "tooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set up and use TypeScript in a Next.js application.", prerequisites: ["nextjs-next-config-js"], related: ["nextjs-eslint", "nextjs-next-config-js"], recommended: ["nextjs-eslint"] },
      { id: 116, order: 3, slug: "nextjs-eslint", title: "ESLint", shortTitle: "ESLint", readingTime: 10, tags: ["nextjs", "eslint", "code quality"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure ESLint to catch errors and enforce code quality in Next.js.", prerequisites: ["nextjs-typescript"], related: ["nextjs-typescript", "nextjs-env-variables"], recommended: ["nextjs-env-variables"] },
      { id: 117, order: 4, slug: "nextjs-env-variables", title: "Environment Variables", shortTitle: "Environment Variables (Config)", readingTime: 10, tags: ["nextjs", "environment variables", "configuration"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure environment variables for different environments in Next.js.", prerequisites: ["nextjs-eslint"], related: ["nextjs-environment-variables", "nextjs-cli-commands"], recommended: ["nextjs-cli-commands"] },
      { id: 118, order: 5, slug: "nextjs-cli-commands", title: "CLI Commands", shortTitle: "CLI Commands", readingTime: 10, tags: ["nextjs", "cli", "tooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn the essential Next.js CLI commands used during development and deployment.", prerequisites: ["nextjs-env-variables"], related: ["nextjs-file-conventions", "nextjs-debugging"], recommended: ["nextjs-file-conventions"] },
      { id: 119, order: 6, slug: "nextjs-file-conventions", title: "File Conventions", shortTitle: "File Conventions", readingTime: 12, tags: ["nextjs", "file conventions", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn the special file conventions Next.js uses, like page.js, layout.js, and loading.js.", prerequisites: ["nextjs-cli-commands"], related: ["nextjs-cli-commands", "nextjs-debugging"], recommended: ["nextjs-debugging"] },
      { id: 120, order: 7, slug: "nextjs-debugging", title: "Debugging", shortTitle: "Debugging", readingTime: 12, tags: ["nextjs", "debugging", "devtools"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common issues in a Next.js application.", prerequisites: ["nextjs-file-conventions"], related: ["nextjs-file-conventions", "nextjs-introduction-to-testing"], recommended: ["nextjs-introduction-to-testing"] }
    ]
  },
 
  {
    id: "testing",
    title: "Testing",
    order: 18,
    difficulty: "Advanced",
    lessons: [
      { id: 121, order: 1, slug: "nextjs-introduction-to-testing", title: "Introduction to Testing", shortTitle: "Testing Intro", readingTime: 12, tags: ["nextjs", "testing", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to why testing matters for Next.js applications.", prerequisites: ["nextjs-debugging"], related: ["nextjs-unit-testing", "nextjs-jest"], recommended: ["nextjs-jest"] },
      { id: 122, order: 2, slug: "nextjs-unit-testing", title: "Unit Testing", shortTitle: "Unit Testing", readingTime: 12, tags: ["nextjs", "testing", "unit testing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write unit tests for individual functions and components in Next.js.", prerequisites: ["nextjs-introduction-to-testing"], related: ["nextjs-jest", "nextjs-introduction-to-testing"], recommended: ["nextjs-jest"] },
      { id: 123, order: 3, slug: "nextjs-jest", title: "Jest", shortTitle: "Jest", readingTime: 12, tags: ["nextjs", "testing", "jest"], status: STATUS.PUBLISHED, featured: true, description: "Learn the basics of Jest, a popular JavaScript testing framework, in a Next.js project.", prerequisites: ["nextjs-unit-testing"], related: ["nextjs-react-testing-library", "nextjs-unit-testing"], recommended: ["nextjs-react-testing-library"] },
      { id: 124, order: 4, slug: "nextjs-react-testing-library", title: "React Testing Library", shortTitle: "React Testing Library", readingTime: 14, tags: ["nextjs", "testing", "react testing library"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to test Next.js components using React Testing Library.", prerequisites: ["nextjs-jest"], related: ["nextjs-jest", "nextjs-playwright"], recommended: ["nextjs-playwright"] },
      { id: 125, order: 5, slug: "nextjs-playwright", title: "Playwright", shortTitle: "Playwright", readingTime: 14, tags: ["nextjs", "testing", "playwright"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write end-to-end tests for Next.js applications using Playwright.", prerequisites: ["nextjs-react-testing-library"], related: ["nextjs-cypress", "nextjs-react-testing-library"], recommended: ["nextjs-cypress"] },
      { id: 126, order: 6, slug: "nextjs-cypress", title: "Cypress", shortTitle: "Cypress", readingTime: 14, tags: ["nextjs", "testing", "cypress"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write end-to-end tests for Next.js applications using Cypress.", prerequisites: ["nextjs-playwright"], related: ["nextjs-playwright", "nextjs-production-build"], recommended: ["nextjs-production-build"] }
    ]
  },
 
  {
    id: "deployment",
    title: "Deployment",
    order: 19,
    difficulty: "Advanced",
    lessons: [
      { id: 127, order: 1, slug: "nextjs-production-build", title: "Production Build", shortTitle: "Production Build", readingTime: 12, tags: ["nextjs", "deployment", "build"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create an optimized production build of a Next.js application.", prerequisites: ["nextjs-cypress"], related: ["nextjs-deploy-environment-variables", "nextjs-deploy-to-vercel"], recommended: ["nextjs-deploy-to-vercel"] },
      { id: 128, order: 2, slug: "nextjs-deploy-environment-variables", title: "Environment Variables", shortTitle: "Deployment Env Variables", readingTime: 10, tags: ["nextjs", "deployment", "environment variables"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to configure environment variables for a production deployment.", prerequisites: ["nextjs-production-build"], related: ["nextjs-production-build", "nextjs-deploy-to-vercel"], recommended: ["nextjs-deploy-to-vercel"] },
      { id: 129, order: 3, slug: "nextjs-deploy-to-vercel", title: "Deploy to Vercel", shortTitle: "Deploy to Vercel", readingTime: 10, tags: ["nextjs", "deployment", "vercel"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a Next.js application to Vercel.", prerequisites: ["nextjs-deploy-environment-variables"], related: ["nextjs-deploy-to-netlify", "nextjs-self-hosting"], recommended: ["nextjs-deploy-to-netlify"] },
      { id: 130, order: 4, slug: "nextjs-deploy-to-netlify", title: "Deploy to Netlify", shortTitle: "Deploy to Netlify", readingTime: 10, tags: ["nextjs", "deployment", "netlify"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a Next.js application to Netlify.", prerequisites: ["nextjs-deploy-to-vercel"], related: ["nextjs-deploy-to-vercel", "nextjs-self-hosting"], recommended: ["nextjs-self-hosting"] },
      { id: 131, order: 5, slug: "nextjs-self-hosting", title: "Self Hosting", shortTitle: "Self Hosting", readingTime: 14, tags: ["nextjs", "deployment", "self-hosting"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to self-host a Next.js application on your own server.", prerequisites: ["nextjs-deploy-to-netlify"], related: ["nextjs-docker-deployment", "nextjs-deploy-to-vercel"], recommended: ["nextjs-docker-deployment"] },
      { id: 132, order: 6, slug: "nextjs-docker-deployment", title: "Docker Deployment", shortTitle: "Docker Deployment", readingTime: 16, tags: ["nextjs", "deployment", "docker"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to containerize and deploy a Next.js application using Docker.", prerequisites: ["nextjs-self-hosting"], related: ["nextjs-self-hosting", "nextjs-monitoring"], recommended: ["nextjs-monitoring"] },
      { id: 133, order: 7, slug: "nextjs-monitoring", title: "Monitoring", shortTitle: "Monitoring", readingTime: 12, tags: ["nextjs", "deployment", "monitoring"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to monitor a Next.js application in production for errors and performance.", prerequisites: ["nextjs-docker-deployment"], related: ["nextjs-docker-deployment", "nextjs-personal-portfolio"], recommended: ["nextjs-personal-portfolio"] }
    ]
  },
 
  {
    id: "full-stack-projects",
    title: "Full-Stack Projects",
    order: 20,
    difficulty: "Advanced",
    lessons: [
      { id: 134, order: 1, slug: "nextjs-personal-portfolio", title: "Personal Portfolio", shortTitle: "Personal Portfolio", readingTime: 20, tags: ["nextjs", "project", "portfolio"], status: STATUS.PUBLISHED, featured: true, description: "Build a personal portfolio website using Next.js, showcasing your projects and skills.", prerequisites: ["nextjs-monitoring"], related: ["nextjs-blog-cms", "nextjs-dashboard-application"], recommended: ["nextjs-blog-cms"] },
      { id: 135, order: 2, slug: "nextjs-blog-cms", title: "Blog CMS", shortTitle: "Blog CMS", readingTime: 24, tags: ["nextjs", "project", "blog cms"], status: STATUS.PUBLISHED, featured: true, description: "Build a blog application with a content management system using Next.js.", prerequisites: ["nextjs-personal-portfolio"], related: ["nextjs-personal-portfolio", "nextjs-authentication-system"], recommended: ["nextjs-authentication-system"] },
      { id: 136, order: 3, slug: "nextjs-authentication-system", title: "Authentication System", shortTitle: "Authentication System", readingTime: 24, tags: ["nextjs", "project", "authentication"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete authentication system in Next.js with signup, login, and protected routes.", prerequisites: ["nextjs-blog-cms"], related: ["nextjs-dashboard-application", "nextjs-blog-cms"], recommended: ["nextjs-dashboard-application"] },
      { id: 137, order: 4, slug: "nextjs-dashboard-application", title: "Dashboard Application", shortTitle: "Dashboard Application", readingTime: 26, tags: ["nextjs", "project", "dashboard"], status: STATUS.PUBLISHED, featured: true, description: "Build an admin dashboard application using Next.js, charts, and protected data.", prerequisites: ["nextjs-authentication-system"], related: ["nextjs-authentication-system", "nextjs-ecommerce-store"], recommended: ["nextjs-ecommerce-store"] },
      { id: 138, order: 5, slug: "nextjs-ecommerce-store", title: "E-Commerce Store", shortTitle: "E-Commerce Store", readingTime: 30, tags: ["nextjs", "project", "ecommerce"], status: STATUS.PUBLISHED, featured: true, description: "Build a full-featured e-commerce store using Next.js and a headless backend.", prerequisites: ["nextjs-dashboard-application"], related: ["nextjs-dashboard-application", "nextjs-social-media-app"], recommended: ["nextjs-social-media-app"] },
      { id: 139, order: 6, slug: "nextjs-social-media-app", title: "Social Media App", shortTitle: "Social Media App", readingTime: 30, tags: ["nextjs", "project", "social media"], status: STATUS.PUBLISHED, featured: true, description: "Build a social media application with posts, likes, and comments using Next.js.", prerequisites: ["nextjs-ecommerce-store"], related: ["nextjs-ecommerce-store", "nextjs-fullstack-saas-project"], recommended: ["nextjs-fullstack-saas-project"] },
      { id: 140, order: 7, slug: "nextjs-fullstack-saas-project", title: "Full-Stack SaaS Project", shortTitle: "Full-Stack SaaS Project", readingTime: 32, tags: ["nextjs", "project", "saas"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete full-stack SaaS application using Next.js, authentication, and billing.", prerequisites: ["nextjs-social-media-app", "nextjs-ecommerce-store"], related: ["nextjs-social-media-app", "nextjs-ecommerce-store"], recommended: ["nextjs-folder-organization"] }
    ]
  },
 
  {
    id: "best-practices",
    title: "Best Practices",
    order: 21,
    difficulty: "Advanced",
    lessons: [
      { id: 141, order: 1, slug: "nextjs-folder-organization", title: "Folder Organization", shortTitle: "Folder Organization", readingTime: 12, tags: ["nextjs", "best practices", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to organize folders and files in large-scale Next.js applications.", prerequisites: ["nextjs-fullstack-saas-project"], related: ["nextjs-component-architecture", "nextjs-performance-best-practices"], recommended: ["nextjs-component-architecture"] },
      { id: 142, order: 2, slug: "nextjs-component-architecture", title: "Component Architecture", shortTitle: "Component Architecture", readingTime: 14, tags: ["nextjs", "best practices", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect components for scalability and maintainability in Next.js.", prerequisites: ["nextjs-folder-organization"], related: ["nextjs-folder-organization", "nextjs-performance-best-practices"], recommended: ["nextjs-performance-best-practices"] },
      { id: 143, order: 3, slug: "nextjs-performance-best-practices", title: "Performance Best Practices", shortTitle: "Performance Best Practices", readingTime: 14, tags: ["nextjs", "best practices", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of performance best practices for production Next.js applications.", prerequisites: ["nextjs-component-architecture"], related: ["nextjs-seo-best-practices", "nextjs-security-best-practices"], recommended: ["nextjs-seo-best-practices"] },
      { id: 144, order: 4, slug: "nextjs-seo-best-practices", title: "SEO Best Practices", shortTitle: "SEO Best Practices", readingTime: 14, tags: ["nextjs", "best practices", "seo"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of SEO best practices for production Next.js applications.", prerequisites: ["nextjs-performance-best-practices"], related: ["nextjs-security-best-practices", "nextjs-accessibility"], recommended: ["nextjs-accessibility"] },
      { id: 145, order: 5, slug: "nextjs-security-best-practices", title: "Security Best Practices", shortTitle: "Security Best Practices", readingTime: 14, tags: ["nextjs", "best practices", "security"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of security best practices for production Next.js applications.", prerequisites: ["nextjs-seo-best-practices"], related: ["nextjs-accessibility", "nextjs-common-mistakes"], recommended: ["nextjs-common-mistakes"] },
      { id: 146, order: 6, slug: "nextjs-accessibility", title: "Accessibility", shortTitle: "Accessibility", readingTime: 14, tags: ["nextjs", "best practices", "accessibility"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build accessible Next.js applications that work for everyone.", prerequisites: ["nextjs-security-best-practices"], related: ["nextjs-seo-best-practices", "nextjs-common-mistakes"], recommended: ["nextjs-common-mistakes"] },
      { id: 147, order: 7, slug: "nextjs-common-mistakes", title: "Common Mistakes", shortTitle: "Common Mistakes", readingTime: 12, tags: ["nextjs", "mistakes", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn about common Next.js mistakes developers make and how to avoid them.", prerequisites: ["nextjs-accessibility"], related: ["nextjs-security-best-practices", "nextjs-interview-questions"], recommended: ["nextjs-interview-questions"] }
    ]
  },
 
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    order: 22,
    difficulty: "Advanced",
    lessons: [
      { id: 148, order: 1, slug: "nextjs-interview-questions", title: "Next.js Interview Questions", shortTitle: "Interview Questions", readingTime: 20, tags: ["nextjs", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Prepare for Next.js interviews with commonly asked questions and answers.", prerequisites: ["nextjs-common-mistakes"], related: ["nextjs-scenario-based-questions", "nextjs-coding-challenges"], recommended: ["nextjs-coding-challenges"] },
      { id: 149, order: 2, slug: "nextjs-scenario-based-questions", title: "Scenario-Based Questions", shortTitle: "Scenario-Based Questions", readingTime: 18, tags: ["nextjs", "interview", "scenario-based"], status: STATUS.PUBLISHED, featured: true, description: "Practice scenario-based Next.js interview questions used to test real-world understanding.", prerequisites: ["nextjs-interview-questions"], related: ["nextjs-interview-questions", "nextjs-app-router-vs-pages-router-interview"], recommended: ["nextjs-app-router-vs-pages-router-interview"] },
      { id: 150, order: 3, slug: "nextjs-coding-challenges", title: "Next.js Coding Challenges", shortTitle: "Coding Challenges", readingTime: 22, tags: ["nextjs", "interview", "coding challenges"], status: STATUS.PUBLISHED, featured: true, description: "Practice Next.js coding challenges commonly used in technical interviews.", prerequisites: ["nextjs-interview-questions"], related: ["nextjs-interview-questions", "nextjs-scenario-based-questions"], recommended: ["nextjs-ssr-vs-csr-vs-ssg-interview"] },
      { id: 151, order: 4, slug: "nextjs-app-router-vs-pages-router-interview", title: "App Router vs Pages Router Interview Questions", shortTitle: "App vs Pages Router (Interview)", readingTime: 16, tags: ["nextjs", "interview", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Review interview questions comparing the App Router and Pages Router.", prerequisites: ["nextjs-scenario-based-questions"], related: ["nextjs-app-router-vs-pages-router", "nextjs-ssr-vs-csr-vs-ssg-interview"], recommended: ["nextjs-ssr-vs-csr-vs-ssg-interview"] },
      { id: 152, order: 5, slug: "nextjs-ssr-vs-csr-vs-ssg-interview", title: "SSR vs CSR vs SSG Interview Questions", shortTitle: "SSR vs CSR vs SSG (Interview)", readingTime: 16, tags: ["nextjs", "interview", "rendering strategies"], status: STATUS.PUBLISHED, featured: true, description: "Review interview questions comparing SSR, CSR, and SSG rendering strategies.", prerequisites: ["nextjs-app-router-vs-pages-router-interview"], related: ["nextjs-rendering-strategy-comparison", "nextjs-app-router-vs-pages-router-interview"], recommended: ["nextjs-learning-roadmap"] }
    ]
  },
 
  {
    id: "conclusion",
    title: "Conclusion",
    order: 23,
    difficulty: "Beginner",
    lessons: [
      { id: 153, order: 1, slug: "nextjs-learning-roadmap", title: "Next.js Learning Roadmap", shortTitle: "Roadmap", readingTime: 10, tags: ["nextjs", "roadmap", "career"], status: STATUS.PUBLISHED, featured: true, description: "Review a complete roadmap of everything you've learned in this Next.js tutorial.", prerequisites: ["nextjs-ssr-vs-csr-vs-ssg-interview"], related: ["nextjs-ecosystem", "nextjs-what-to-learn-next"], recommended: ["nextjs-what-to-learn-next"] },
      { id: 154, order: 2, slug: "nextjs-ecosystem", title: "Next.js Ecosystem", shortTitle: "Ecosystem", readingTime: 12, tags: ["nextjs", "ecosystem", "tools"], status: STATUS.PUBLISHED, featured: true, description: "Explore the broader Next.js ecosystem including tools, libraries, and hosting platforms.", prerequisites: ["nextjs-learning-roadmap"], related: ["nextjs-learning-roadmap", "nextjs-what-to-learn-next"], recommended: ["nextjs-what-to-learn-next"] },
      { id: 155, order: 3, slug: "nextjs-what-to-learn-next", title: "What to Learn Next", shortTitle: "What to Learn Next", readingTime: 10, tags: ["nextjs", "next steps", "career"], status: STATUS.PUBLISHED, featured: true, description: "Learn what to study next as you continue your journey beyond Next.js.", prerequisites: ["nextjs-ecosystem"], related: ["nextjs-learning-roadmap", "nextjs-ecosystem"], recommended: [] }
    ]
  }

];

export const resources = [

  {
    id: "nextjs-in-production",
    title: "Next.js in Production",
    order: 1,
    items: [
      { id: 156, order: 1, slug: "nextjs-how-companies-use-nextjs", title: "How Companies Use Next.js", shortTitle: "Next.js in Companies", type: "article", readingTime: 10, tags: ["nextjs", "production", "real world"], status: STATUS.PUBLISHED, featured: true, description: "Explore how real companies use Next.js in large-scale production applications." },
      { id: 157, order: 2, slug: "nextjs-real-world-nextjs-project-architecture", title: "Real-World Next.js Project Architecture", shortTitle: "Project Architecture", type: "article", readingTime: 12, tags: ["nextjs", "architecture", "production"], status: STATUS.PUBLISHED, featured: true, description: "Learn how real Next.js projects are architected at scale." },
      { id: 158, order: 3, slug: "nextjs-monolith-vs-full-stack-nextjs-applications", title: "Monolith vs Full-Stack Next.js Applications", shortTitle: "Monolith vs Full-Stack", type: "article", readingTime: 12, tags: ["nextjs", "architecture", "fullstack"], status: STATUS.PUBLISHED, featured: true, description: "Compare monolithic and full-stack approaches to building Next.js applications." },
      { id: 159, order: 4, slug: "nextjs-building-scalable-production-applications", title: "Building Scalable Production Applications", shortTitle: "Scalable Production Apps", type: "article", readingTime: 12, tags: ["nextjs", "production", "scalability"], status: STATUS.PUBLISHED, featured: true, description: "Learn principles for building Next.js applications that scale in production." }
    ]
  },
 
  {
    id: "nextjs-best-practices-resources",
    title: "Next.js Best Practices",
    order: 2,
    items: [
      { id: 160, order: 1, slug: "nextjs-organizing-the-app-router", title: "Organizing the App Router", shortTitle: "Organizing App Router", type: "article", readingTime: 10, tags: ["nextjs", "app router", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical strategies for organizing routes in the Next.js App Router." },
      { id: 161, order: 2, slug: "nextjs-folder-structure-for-large-applications", title: "Folder Structure for Large Applications", shortTitle: "Large App Folder Structure", type: "article", readingTime: 12, tags: ["nextjs", "architecture", "folder structure"], status: STATUS.PUBLISHED, featured: true, description: "Explore folder structures suited for large-scale Next.js applications." },
      { id: 162, order: 3, slug: "nextjs-server-vs-client-component-best-practices", title: "Server vs Client Component Best Practices", shortTitle: "Server vs Client Best Practices", type: "article", readingTime: 12, tags: ["nextjs", "server components", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn best practices for deciding between Server and Client Components." },
      { id: 163, order: 4, slug: "nextjs-writing-maintainable-nextjs-applications", title: "Writing Maintainable Next.js Applications", shortTitle: "Maintainable Next.js Apps", type: "article", readingTime: 12, tags: ["nextjs", "maintainability", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical habits for writing Next.js applications that stay maintainable over time." },
      { id: 164, order: 5, slug: "nextjs-clean-project-architecture", title: "Clean Project Architecture", shortTitle: "Clean Architecture", type: "article", readingTime: 12, tags: ["nextjs", "architecture", "clean code"], status: STATUS.PUBLISHED, featured: true, description: "Learn principles of clean project architecture applied to Next.js applications." }
    ]
  },
 
  {
    id: "common-nextjs-mistakes",
    title: "Common Next.js Mistakes",
    order: 3,
    items: [
      { id: 165, order: 1, slug: "nextjs-overusing-client-components", title: "Overusing Client Components", shortTitle: "Overusing Client Components", type: "article", readingTime: 10, tags: ["nextjs", "mistakes", "client components"], status: STATUS.PUBLISHED, featured: true, description: "Learn why overusing Client Components hurts performance in Next.js applications." },
      { id: 166, order: 2, slug: "nextjs-fetching-data-in-the-wrong-place", title: "Fetching Data in the Wrong Place", shortTitle: "Wrong Data Fetching Location", type: "article", readingTime: 10, tags: ["nextjs", "mistakes", "data fetching"], status: STATUS.PUBLISHED, featured: true, description: "Learn why fetching data in the wrong place leads to performance and architecture issues." },
      { id: 167, order: 3, slug: "nextjs-incorrect-rendering-strategy-selection", title: "Incorrect Rendering Strategy Selection", shortTitle: "Wrong Rendering Strategy", type: "article", readingTime: 10, tags: ["nextjs", "mistakes", "rendering"], status: STATUS.PUBLISHED, featured: true, description: "Learn how choosing the wrong rendering strategy can hurt performance and SEO." },
      { id: 168, order: 4, slug: "nextjs-misusing-server-actions", title: "Misusing Server Actions", shortTitle: "Misusing Server Actions", type: "article", readingTime: 10, tags: ["nextjs", "mistakes", "server actions"], status: STATUS.PUBLISHED, featured: true, description: "Learn common mistakes developers make when using Server Actions." },
      { id: 169, order: 5, slug: "nextjs-ignoring-caching-and-revalidation", title: "Ignoring Caching and Revalidation", shortTitle: "Ignoring Caching", type: "article", readingTime: 10, tags: ["nextjs", "mistakes", "caching"], status: STATUS.PUBLISHED, featured: true, description: "Learn why ignoring caching and revalidation can cause stale or inconsistent data." }
    ]
  },
 
  {
    id: "nextjs-performance-guide",
    title: "Next.js Performance Guide",
    order: 4,
    items: [
      { id: 170, order: 1, slug: "nextjs-understanding-the-nextjs-rendering-pipeline", title: "Understanding the Next.js Rendering Pipeline", shortTitle: "Rendering Pipeline", type: "article", readingTime: 14, tags: ["nextjs", "performance", "rendering pipeline"], status: STATUS.PUBLISHED, featured: true, description: "Understand how the Next.js rendering pipeline processes and delivers pages." },
      { id: 171, order: 2, slug: "nextjs-choosing-between-ssr-ssg-isr-csr-and-ppr", title: "Choosing Between SSR, SSG, ISR, CSR, and PPR", shortTitle: "Choosing a Rendering Strategy", type: "article", readingTime: 14, tags: ["nextjs", "performance", "rendering strategies"], status: STATUS.PUBLISHED, featured: true, description: "Learn a practical framework for choosing the right rendering strategy for each page." },
      { id: 172, order: 3, slug: "nextjs-optimizing-bundle-size", title: "Optimizing Bundle Size", shortTitle: "Bundle Size Optimization", type: "article", readingTime: 12, tags: ["nextjs", "performance", "bundle size"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for reducing bundle size in a Next.js application." },
      { id: 173, order: 4, slug: "nextjs-reducing-unnecessary-javascript", title: "Reducing Unnecessary JavaScript", shortTitle: "Reducing JavaScript", type: "article", readingTime: 12, tags: ["nextjs", "performance", "javascript"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to identify and remove unnecessary JavaScript from your Next.js application." },
      { id: 174, order: 5, slug: "nextjs-measuring-performance-with-core-web-vitals", title: "Measuring Performance with Core Web Vitals", shortTitle: "Measuring with Core Web Vitals", type: "article", readingTime: 12, tags: ["nextjs", "performance", "core web vitals"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to measure and monitor Core Web Vitals in a Next.js application." }
    ]
  },
 
  {
    id: "nextjs-fullstack-architecture",
    title: "Next.js Full-Stack Architecture",
    order: 5,
    items: [
      { id: 175, order: 1, slug: "nextjs-building-a-full-stack-application-with-nextjs", title: "Building a Full-Stack Application with Next.js", shortTitle: "Full-Stack with Next.js", type: "article", readingTime: 16, tags: ["nextjs", "fullstack", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect a complete full-stack application using Next.js." },
      { id: 176, order: 2, slug: "nextjs-feature-based-folder-organization", title: "Feature-Based Folder Organization", shortTitle: "Feature-Based Organization", type: "article", readingTime: 12, tags: ["nextjs", "architecture", "folder structure"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to organize a Next.js project by feature instead of by file type." },
      { id: 177, order: 3, slug: "nextjs-api-layer-architecture", title: "API Layer Architecture", shortTitle: "API Layer Architecture", type: "article", readingTime: 14, tags: ["nextjs", "api", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect the API layer of a full-stack Next.js application." },
      { id: 178, order: 4, slug: "nextjs-database-integration-patterns", title: "Database Integration Patterns", shortTitle: "Database Integration Patterns", type: "article", readingTime: 14, tags: ["nextjs", "database", "patterns"], status: STATUS.PUBLISHED, featured: true, description: "Explore common patterns for integrating databases into Next.js applications." },
      { id: 179, order: 5, slug: "nextjs-authentication-architecture", title: "Authentication Architecture", shortTitle: "Auth Architecture", type: "article", readingTime: 14, tags: ["nextjs", "authentication", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect authentication for a full-stack Next.js application." }
    ]
  },
 
  {
    id: "nextjs-debugging-guide",
    title: "Next.js Debugging Guide",
    order: 6,
    items: [
      { id: 180, order: 1, slug: "nextjs-debugging-routing-issues", title: "Debugging Routing Issues", shortTitle: "Routing Issues", type: "article", readingTime: 10, tags: ["nextjs", "debugging", "routing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common routing issues in a Next.js application." },
      { id: 181, order: 2, slug: "nextjs-hydration-mismatch-errors", title: "Hydration Mismatch Errors", shortTitle: "Hydration Errors", type: "article", readingTime: 12, tags: ["nextjs", "debugging", "hydration"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to diagnose and fix hydration mismatch errors in Next.js." },
      { id: 182, order: 3, slug: "nextjs-server-component-errors", title: "Server Component Errors", shortTitle: "Server Component Errors", type: "article", readingTime: 12, tags: ["nextjs", "debugging", "server components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common errors that occur in Server Components." },
      { id: 183, order: 4, slug: "nextjs-environment-variable-issues", title: "Environment Variable Issues", shortTitle: "Env Variable Issues", type: "article", readingTime: 10, tags: ["nextjs", "debugging", "environment variables"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common environment variable issues in Next.js." },
      { id: 184, order: 5, slug: "nextjs-build-and-deployment-debugging", title: "Build and Deployment Debugging", shortTitle: "Build & Deploy Debugging", type: "article", readingTime: 12, tags: ["nextjs", "debugging", "deployment"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to debug common build and deployment issues in Next.js." }
    ]
  },
 
  {
    id: "nextjs-ai-development",
    title: "Next.js + AI Development",
    order: 7,
    items: [
      { id: 185, order: 1, slug: "nextjs-using-chatgpt-with-nextjs", title: "Using ChatGPT with Next.js", shortTitle: "ChatGPT + Next.js", type: "article", readingTime: 10, tags: ["nextjs", "ai", "chatgpt"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical ways developers use ChatGPT while building Next.js applications." },
      { id: 186, order: 2, slug: "nextjs-ai-assisted-full-stack-development", title: "AI-Assisted Full-Stack Development", shortTitle: "AI Full-Stack Dev", type: "article", readingTime: 10, tags: ["nextjs", "ai", "fullstack"], status: STATUS.PUBLISHED, featured: true, description: "Explore how AI tools are changing full-stack Next.js development workflows." },
      { id: 187, order: 3, slug: "nextjs-generating-app-router-components-with-ai", title: "Generating App Router Components with AI", shortTitle: "AI-Generated Components", type: "article", readingTime: 10, tags: ["nextjs", "ai", "app router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how AI tools can help generate App Router components and layouts." },
      { id: 188, order: 4, slug: "nextjs-ai-limitations-in-modern-web-development", title: "AI Limitations in Modern Web Development", shortTitle: "AI Limitations", type: "article", readingTime: 10, tags: ["nextjs", "ai", "limitations"], status: STATUS.PUBLISHED, featured: true, description: "Understand the current limitations of AI tools in modern web development." }
    ]
  },
 
  {
    id: "nextjs-career-interview-guide",
    title: "Next.js Career & Interview Guide",
    order: 8,
    items: [
      { id: 189, order: 1, slug: "nextjs-developer-roadmap", title: "Next.js Developer Roadmap", shortTitle: "Developer Roadmap", type: "article", readingTime: 12, tags: ["nextjs", "career", "roadmap"], status: STATUS.PUBLISHED, featured: true, description: "Explore a roadmap for becoming a professional Next.js developer." },
      { id: 190, order: 2, slug: "nextjs-skills-companies-expect", title: "Skills Companies Expect", shortTitle: "Skills Companies Expect", type: "article", readingTime: 10, tags: ["nextjs", "career", "skills"], status: STATUS.PUBLISHED, featured: true, description: "Learn the Next.js skills companies commonly expect from job candidates." },
      { id: 191, order: 3, slug: "nextjs-portfolio-projects-that-get-noticed", title: "Portfolio Projects That Get Noticed", shortTitle: "Noticed Portfolio Projects", type: "article", readingTime: 12, tags: ["nextjs", "career", "portfolio"], status: STATUS.PUBLISHED, featured: true, description: "Learn what kinds of Next.js portfolio projects stand out to employers." },
      { id: 192, order: 4, slug: "nextjs-freelancing-with-nextjs", title: "Freelancing with Next.js", shortTitle: "Freelancing", type: "article", readingTime: 12, tags: ["nextjs", "career", "freelancing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a freelancing career using Next.js." },
      { id: 193, order: 5, slug: "nextjs-preparing-for-nextjs-interviews", title: "Preparing for Next.js Interviews", shortTitle: "Interview Prep", type: "article", readingTime: 12, tags: ["nextjs", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to prepare effectively for Next.js developer interviews." }
    ]
  }

];