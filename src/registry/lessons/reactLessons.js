// ============================================================
// src/registry/lessons/reactLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for React until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "react",
  title: "React Tutorial",
  shortTitle: "React",
  category: "Frontend",
  description: "Learn React from scratch with this comprehensive tutorial. Master React fundamentals, hooks, state management, and routing to build dynamic web applications.",
  icon: "react",
  difficulty: "Beginner", // course-level badge, separate from per-section defaults
  estimatedHours: 30,
  totalLessons: 106,
  version: "React 19.2.7",
  language: "English",
  path: "/react",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["react", "frontend", "javascript", "web development", "react tutorial", "reactjs", "react hooks", "react router", "react state management"],
  seo: {
    title: "React Tutorial | DevSphere",
    description: "Learn React from scratch with this comprehensive tutorial. Master React fundamentals, hooks, state management, and routing to build dynamic web applications.",
    keywords: ["React", "Frontend", "JavaScript", "Web Development", "React Tutorial"],
  }
};

export const sections = [

  {
    id: "getting-started",
    title: "Getting Started",
    order: 1,
    difficulty: "Beginner",
    lessons: [
      { id: 1, order: 1, slug: "introduction-to-react", title: "Introduction to React", shortTitle: "Introduction", readingTime: 12, tags: ["react", "introduction", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what React is and why it has become one of the most popular frontend libraries.", prerequisites: [], related: ["why-react", "react-environment-setup", "first-react-app"], recommended: ["why-react", "jsx-fundamentals"] },
      { id: 2, order: 2, slug: "why-react", title: "Why React?", shortTitle: "Why React", readingTime: 10, tags: ["react", "motivation", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Understand the problems React solves and why developers choose it over plain JavaScript.", prerequisites: ["introduction-to-react"], related: ["introduction-to-react", "react-environment-setup"], recommended: [] },
      { id: 3, order: 3, slug: "react-environment-setup", title: "React Environment Setup", shortTitle: "Environment Setup", readingTime: 14, tags: ["react", "setup", "tooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to set up your development environment for building React applications.", prerequisites: ["introduction-to-react"], related: ["first-react-app", "react-project-structure"], recommended: ["first-react-app"] },
      { id: 4, order: 4, slug: "first-react-app", title: "Create Your First React App", shortTitle: "First React App", readingTime: 18, tags: ["react", "first app", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Build your first React application from scratch using Vite or Create React App.", prerequisites: ["react-environment-setup"], related: ["react-project-structure", "jsx-fundamentals"], recommended: ["jsx-fundamentals"] },
      { id: 5, order: 5, slug: "react-project-structure", title: "React Project Structure", shortTitle: "Project Structure", readingTime: 10, tags: ["react", "project structure", "organization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how a typical React project is structured and organized.", prerequisites: ["first-react-app"], related: ["react-development-workflow", "first-react-app"], recommended: [] },
      { id: 6, order: 6, slug: "react-development-workflow", title: "React Development Workflow", shortTitle: "Dev Workflow", readingTime: 10, tags: ["react", "workflow", "tooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn the typical development workflow used when building React applications.", prerequisites: ["react-project-structure"], related: ["react-project-structure", "first-react-app"], recommended: [] }
    ]
  },
 
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    order: 2,
    difficulty: "Beginner",
    lessons: [
      { id: 7, order: 1, slug: "jsx-fundamentals", title: "JSX Fundamentals", shortTitle: "JSX Fundamentals", readingTime: 14, tags: ["react", "jsx", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn the fundamentals of JSX and how it lets you write HTML-like syntax in JavaScript.", prerequisites: ["first-react-app"], related: ["jsx-expressions", "rendering-elements", "component-overview"], recommended: ["jsx-expressions"] },
      { id: 8, order: 2, slug: "jsx-expressions", title: "JSX Expressions", shortTitle: "JSX Expressions", readingTime: 10, tags: ["react", "jsx", "expressions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to embed JavaScript expressions inside JSX markup.", prerequisites: ["jsx-fundamentals"], related: ["jsx-fundamentals", "conditional-rendering"], recommended: [] },
      { id: 9, order: 3, slug: "rendering-elements", title: "Rendering Elements", shortTitle: "Rendering Elements", readingTime: 12, tags: ["react", "rendering", "dom"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React renders elements to the DOM and updates them efficiently.", prerequisites: ["jsx-fundamentals"], related: ["component-overview", "jsx-fundamentals"], recommended: [] },
      { id: 10, order: 4, slug: "component-overview", title: "Component Overview", shortTitle: "Component Overview", readingTime: 12, tags: ["react", "components", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of components, the fundamental building blocks of React applications.", prerequisites: ["rendering-elements"], related: ["functional-components", "class-components", "props"], recommended: ["functional-components"] },
      { id: 11, order: 5, slug: "functional-components", title: "Functional Components", shortTitle: "Functional Components", readingTime: 12, tags: ["react", "components", "functional"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build React components using functions.", prerequisites: ["component-overview"], related: ["class-components", "props", "state"], recommended: ["props"] },
      { id: 12, order: 6, slug: "class-components", title: "Class Components", shortTitle: "Class Components", readingTime: 12, tags: ["react", "components", "class"], status: STATUS.PUBLISHED, featured: true, description: "Learn how class components work in React and how they differ from functional components.", prerequisites: ["component-overview"], related: ["functional-components", "state"], recommended: [] },
      { id: 13, order: 7, slug: "props", title: "Props", shortTitle: "Props", readingTime: 12, tags: ["react", "props", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to pass data between components using props.", prerequisites: ["functional-components"], related: ["state", "parent-to-child-communication"], recommended: ["state"] },
      { id: 14, order: 8, slug: "state", title: "State", shortTitle: "State", readingTime: 14, tags: ["react", "state", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how state lets components manage and update their own data.", prerequisites: ["props"], related: ["usestate-hook", "props"], recommended: ["usestate-hook"] },
      { id: 15, order: 9, slug: "event-handling", title: "Event Handling", shortTitle: "Event Handling", readingTime: 12, tags: ["react", "events", "interactivity"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle user events like clicks and input changes in React.", prerequisites: ["state"], related: ["conditional-rendering", "react-forms"], recommended: [] },
      { id: 16, order: 10, slug: "conditional-rendering", title: "Conditional Rendering", shortTitle: "Conditional Rendering", readingTime: 10, tags: ["react", "conditional rendering", "jsx"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to render different UI based on conditions in React.", prerequisites: ["state"], related: ["event-handling", "list-and-keys"], recommended: [] },
      { id: 17, order: 11, slug: "list-and-keys", title: "Lists and Keys", shortTitle: "Lists & Keys", readingTime: 12, tags: ["react", "lists", "keys"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to render lists of data efficiently using keys in React.", prerequisites: ["conditional-rendering"], related: ["conditional-rendering", "component-overview"], recommended: [] }
    ]
  },
 
  {
    id: "forms-user-input",
    title: "Forms & User Input",
    order: 3,
    difficulty: "Intermediate",
    lessons: [
      { id: 18, order: 1, slug: "react-forms", title: "React Forms", shortTitle: "React Forms", readingTime: 12, tags: ["react", "forms"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to building forms in React and handling user input.", prerequisites: ["state", "event-handling"], related: ["controlled-components", "handling-multiple-inputs"], recommended: ["controlled-components"] },
      { id: 19, order: 2, slug: "controlled-components", title: "Controlled Components", shortTitle: "Controlled Components", readingTime: 12, tags: ["react", "forms", "controlled components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how controlled components keep form state in sync with React state.", prerequisites: ["react-forms"], related: ["handling-multiple-inputs", "react-forms"], recommended: ["handling-multiple-inputs"] },
      { id: 20, order: 3, slug: "handling-multiple-inputs", title: "Handling Multiple Inputs", shortTitle: "Multiple Inputs", readingTime: 12, tags: ["react", "forms", "inputs"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage multiple form inputs using a single state object.", prerequisites: ["controlled-components"], related: ["select-dropdowns", "radio-buttons", "react-checkboxes"], recommended: [] },
      { id: 21, order: 4, slug: "select-dropdowns", title: "Select Dropdowns", shortTitle: "Select Dropdowns", readingTime: 10, tags: ["react", "forms", "select"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build controlled select dropdowns in React.", prerequisites: ["handling-multiple-inputs"], related: ["radio-buttons", "react-checkboxes"], recommended: [] },
      { id: 22, order: 5, slug: "radio-buttons", title: "Radio Buttons", shortTitle: "Radio Buttons", readingTime: 10, tags: ["react", "forms", "radio"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build controlled radio button groups in React.", prerequisites: ["handling-multiple-inputs"], related: ["select-dropdowns", "react-checkboxes"], recommended: [] },
      { id: 23, order: 6, slug: "react-checkboxes", title: "React Checkboxes", shortTitle: "Checkboxes", readingTime: 10, tags: ["react", "forms", "checkbox"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build controlled checkboxes in React.", prerequisites: ["handling-multiple-inputs"], related: ["radio-buttons", "select-dropdowns"], recommended: [] },
      { id: 24, order: 7, slug: "form-validation", title: "Form Validation", shortTitle: "Validation", readingTime: 14, tags: ["react", "forms", "validation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to validate form input in React applications.", prerequisites: ["react-forms"], related: ["controlled-components", "handling-multiple-inputs"], recommended: [] }
    ]
  },
 
  {
    id: "styling-react-apps",
    title: "Styling React Apps",
    order: 4,
    difficulty: "Intermediate",
    lessons: [
      { id: 25, order: 1, slug: "css-in-react", title: "CSS in React", shortTitle: "CSS in React", readingTime: 10, tags: ["react", "css", "styling"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of the different ways to style React components.", prerequisites: ["component-overview"], related: ["inline-styling", "css-modules", "styled-components"], recommended: ["css-modules"] },
      { id: 26, order: 2, slug: "inline-styling", title: "Inline Styling", shortTitle: "Inline Styling", readingTime: 8, tags: ["react", "css", "inline styles"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to apply inline styles using JavaScript objects in React.", prerequisites: ["css-in-react"], related: ["css-in-react", "css-modules"], recommended: [] },
      { id: 27, order: 3, slug: "css-modules", title: "CSS Modules", shortTitle: "CSS Modules", readingTime: 10, tags: ["react", "css", "css modules"], status: STATUS.PUBLISHED, featured: true, description: "Learn how CSS Modules provide scoped styling for React components.", prerequisites: ["css-in-react"], related: ["inline-styling", "sass-with-react"], recommended: [] },
      { id: 28, order: 4, slug: "sass-with-react", title: "Sass with React", shortTitle: "Sass with React", readingTime: 10, tags: ["react", "css", "sass"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use Sass to style React components.", prerequisites: ["css-in-react"], related: ["css-modules", "styled-components"], recommended: [] },
      { id: 29, order: 5, slug: "styled-components", title: "Styled Components", shortTitle: "Styled Components", readingTime: 12, tags: ["react", "css", "styled-components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write CSS-in-JS using the styled-components library.", prerequisites: ["css-in-react"], related: ["css-modules", "sass-with-react"], recommended: [] }
    ]
  },
 
  {
    id: "react-hooks",
    title: "React Hooks",
    order: 5,
    difficulty: "Intermediate",
    lessons: [
      { id: 30, order: 1, slug: "introduction-to-hooks", title: "Introduction to Hooks", shortTitle: "Intro to Hooks", readingTime: 14, tags: ["react", "hooks", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to React Hooks and how they let you use state in functional components.", prerequisites: ["state"], related: ["usestate-hook", "useeffect-hook", "custom-hooks"], recommended: ["usestate-hook"] },
      { id: 31, order: 2, slug: "usestate-hook", title: "useState", shortTitle: "useState", readingTime: 12, tags: ["react", "hooks", "usestate"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage state in functional components using the useState hook.", prerequisites: ["introduction-to-hooks"], related: ["useeffect-hook", "state"], recommended: ["useeffect-hook"] },
      { id: 32, order: 3, slug: "useeffect-hook", title: "useEffect", shortTitle: "useEffect", readingTime: 14, tags: ["react", "hooks", "useeffect"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle side effects in functional components using the useEffect hook.", prerequisites: ["usestate-hook"], related: ["usestate-hook", "fetch-api", "loading-states"], recommended: ["fetch-api"] },
      { id: 33, order: 4, slug: "usecontext-hook", title: "useContext", shortTitle: "useContext", readingTime: 12, tags: ["react", "hooks", "usecontext"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to consume context values in functional components using the useContext hook.", prerequisites: ["context-api"], related: ["context-api", "usereducer-hook"], recommended: [] },
      { id: 34, order: 5, slug: "useref-hook", title: "useRef", shortTitle: "useRef", readingTime: 10, tags: ["react", "hooks", "useref"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to access DOM nodes and persist values using the useRef hook.", prerequisites: ["introduction-to-hooks"], related: ["forward-refs", "usestate-hook"], recommended: [] },
      { id: 35, order: 6, slug: "usereducer-hook", title: "useReducer", shortTitle: "useReducer", readingTime: 14, tags: ["react", "hooks", "usereducer"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to manage complex state logic using the useReducer hook.", prerequisites: ["usestate-hook"], related: ["usecontext-hook", "redux-fundamentals"], recommended: [] },
      { id: 36, order: 7, slug: "usememo-hook", title: "useMemo", shortTitle: "useMemo", readingTime: 12, tags: ["react", "hooks", "usememo"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to memoize expensive calculations using the useMemo hook.", prerequisites: ["introduction-to-hooks"], related: ["usecallback-hook", "react-usememo-hook", "memoization"], recommended: ["usecallback-hook"] },
      { id: 37, order: 8, slug: "usecallback-hook", title: "useCallback", shortTitle: "useCallback", readingTime: 12, tags: ["react", "hooks", "usecallback"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to memoize functions using the useCallback hook to avoid unnecessary re-renders.", prerequisites: ["usememo-hook"], related: ["usememo-hook", "react-usecallback-hook", "memoization"], recommended: [] },
      { id: 38, order: 9, slug: "custom-hooks", title: "Custom Hooks", shortTitle: "Custom Hooks", readingTime: 14, tags: ["react", "hooks", "custom hooks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build your own reusable custom hooks in React.", prerequisites: ["useeffect-hook", "usestate-hook"], related: ["useeffect-hook", "usestate-hook"], recommended: [] }
    ]
  },
 
  {
    id: "component-communication",
    title: "Component Communication",
    order: 6,
    difficulty: "Intermediate",
    lessons: [
      { id: 39, order: 1, slug: "parent-to-child-communication", title: "Parent to Child Communication", shortTitle: "Parent to Child", readingTime: 10, tags: ["react", "communication", "props"], status: STATUS.PUBLISHED, featured: true, description: "Learn how parent components pass data down to child components using props.", prerequisites: ["props"], related: ["child-to-parent-communication", "props"], recommended: ["child-to-parent-communication"] },
      { id: 40, order: 2, slug: "child-to-parent-communication", title: "Child to Parent Communication", shortTitle: "Child to Parent", readingTime: 10, tags: ["react", "communication", "callbacks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how child components communicate back to parent components using callback functions.", prerequisites: ["parent-to-child-communication"], related: ["parent-to-child-communication", "sibling-communication"], recommended: [] },
      { id: 41, order: 3, slug: "sibling-communication", title: "Sibling Communication", shortTitle: "Sibling Communication", readingTime: 10, tags: ["react", "communication", "state lifting"], status: STATUS.PUBLISHED, featured: true, description: "Learn how sibling components communicate by lifting state up to a shared parent.", prerequisites: ["child-to-parent-communication"], related: ["parent-to-child-communication", "prop-drilling"], recommended: [] },
      { id: 42, order: 4, slug: "prop-drilling", title: "Prop Drilling", shortTitle: "Prop Drilling", readingTime: 10, tags: ["react", "communication", "prop drilling"], status: STATUS.PUBLISHED, featured: true, description: "Understand the problem of prop drilling and why it becomes difficult to manage in large apps.", prerequisites: ["sibling-communication"], related: ["context-api", "sibling-communication"], recommended: ["context-api"] },
      { id: 43, order: 5, slug: "context-api", title: "Context API", shortTitle: "Context API", readingTime: 14, tags: ["react", "context", "state management"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Context API solves prop drilling by sharing state across components.", prerequisites: ["prop-drilling"], related: ["usecontext-hook", "prop-drilling", "context-api-review"], recommended: ["usecontext-hook"] }
    ]
  },
 
  {
    id: "routing",
    title: "Routing",
    order: 7,
    difficulty: "Intermediate",
    lessons: [
      { id: 44, order: 1, slug: "introduction-to-react-router", title: "Introduction to React Router", shortTitle: "React Router Intro", readingTime: 12, tags: ["react", "routing", "react router"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to React Router and client-side routing in React applications.", prerequisites: ["component-overview"], related: ["browser-router", "routes-and-routes"], recommended: ["browser-router"] },
      { id: 45, order: 2, slug: "browser-router", title: "Browser Router", shortTitle: "Browser Router", readingTime: 10, tags: ["react", "routing", "browser router"], status: STATUS.PUBLISHED, featured: true, description: "Learn how BrowserRouter enables client-side routing using the HTML5 history API.", prerequisites: ["introduction-to-react-router"], related: ["routes-and-routes", "introduction-to-react-router"], recommended: [] },
      { id: 46, order: 3, slug: "routes-and-routes", title: "Routes and Route", shortTitle: "Routes and Route", readingTime: 12, tags: ["react", "routing", "routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to define application routes using the Routes and Route components.", prerequisites: ["browser-router"], related: ["navigation-in-react", "url-parameters"], recommended: ["navigation-in-react"] },
      { id: 47, order: 4, slug: "navigation-in-react", title: "Navigation", shortTitle: "Navigation", readingTime: 10, tags: ["react", "routing", "navigation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to navigate between pages using Link and useNavigate in React Router.", prerequisites: ["routes-and-routes"], related: ["routes-and-routes", "url-parameters"], recommended: [] },
      { id: 48, order: 5, slug: "url-parameters", title: "URL Parameters", shortTitle: "URL Parameters", readingTime: 10, tags: ["react", "routing", "url parameters"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to read dynamic URL parameters using React Router.", prerequisites: ["routes-and-routes"], related: ["nested-routes", "navigation-in-react"], recommended: [] },
      { id: 49, order: 6, slug: "nested-routes", title: "Nested Routes", shortTitle: "Nested Routes", readingTime: 12, tags: ["react", "routing", "nested routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build nested routes for complex page layouts in React Router.", prerequisites: ["url-parameters"], related: ["url-parameters", "protected-routes"], recommended: [] },
      { id: 50, order: 7, slug: "protected-routes", title: "Protected Routes", shortTitle: "Protected Routes", readingTime: 12, tags: ["react", "routing", "protected routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to restrict access to certain routes based on authentication state.", prerequisites: ["nested-routes"], related: ["protected-routes-in-react", "authentication-basics"], recommended: ["protected-routes-in-react"] }
    ]
  },
 
  {
    id: "working-with-apis",
    title: "Working With APIs",
    order: 8,
    difficulty: "Intermediate",
    lessons: [
      { id: 51, order: 1, slug: "an-api", title: "What is an API?", shortTitle: "What is an API?", readingTime: 10, tags: ["react", "api", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what an API is and how frontend applications communicate with servers.", prerequisites: [], related: ["fetch-api", "rest-api-integration"], recommended: ["fetch-api"] },
      { id: 52, order: 2, slug: "fetch-api", title: "Fetch API", shortTitle: "Fetch API", readingTime: 14, tags: ["react", "api", "fetch"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fetch data from an API using the built-in fetch function in React.", prerequisites: ["an-api", "useeffect-hook"], related: ["async-await", "loading-states"], recommended: ["async-await"] },
      { id: 53, order: 3, slug: "async-await", title: "Async/Await", shortTitle: "Async/Await", readingTime: 12, tags: ["react", "api", "async-await"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write cleaner asynchronous code in React using async/await.", prerequisites: ["fetch-api"], related: ["fetch-api", "error-handling"], recommended: [] },
      { id: 54, order: 4, slug: "loading-states", title: "Loading States", shortTitle: "Loading States", readingTime: 10, tags: ["react", "api", "loading states"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to show loading indicators while data is being fetched in React.", prerequisites: ["fetch-api"], related: ["error-handling", "fetch-api"], recommended: [] },
      { id: 55, order: 5, slug: "error-handling", title: "Error Handling", shortTitle: "Error Handling", readingTime: 12, tags: ["react", "api", "error handling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to handle API errors gracefully in React applications.", prerequisites: ["fetch-api"], related: ["loading-states", "rest-api-integration"], recommended: [] },
      { id: 56, order: 6, slug: "rest-api-integration", title: "REST API Integration", shortTitle: "REST API Integration", readingTime: 16, tags: ["react", "api", "rest api"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fully integrate a REST API into a React application.", prerequisites: ["fetch-api", "error-handling"], related: ["fetch-api", "loading-states", "error-handling"], recommended: [] }
    ]
  },
 
  {
    id: "advanced-react-concepts",
    title: "Advanced React Concepts",
    order: 9,
    difficulty: "Advanced",
    lessons: [
      { id: 57, order: 1, slug: "react-fragments", title: "React Fragments", shortTitle: "Fragments", readingTime: 8, tags: ["react", "fragments", "jsx"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React Fragments let you group elements without adding extra DOM nodes.", prerequisites: ["jsx-fundamentals"], related: ["component-overview"], recommended: [] },
      { id: 58, order: 2, slug: "react-portals", title: "React Portals", shortTitle: "Portals", readingTime: 10, tags: ["react", "portals", "dom"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React Portals let you render children into a different part of the DOM.", prerequisites: ["rendering-elements"], related: ["forward-refs", "react-fragments"], recommended: [] },
      { id: 59, order: 3, slug: "higher-order-components", title: "Higher-Order Components", shortTitle: "HOCs", readingTime: 14, tags: ["react", "hoc", "patterns"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Higher-Order Components let you reuse component logic across your app.", prerequisites: ["functional-components", "props"], related: ["render-props", "custom-hooks"], recommended: ["render-props"] },
      { id: 60, order: 4, slug: "render-props", title: "Render Props", shortTitle: "Render Props", readingTime: 12, tags: ["react", "render props", "patterns"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the render props pattern lets components share code using a prop that is a function.", prerequisites: ["functional-components"], related: ["higher-order-components", "custom-hooks"], recommended: [] },
      { id: 61, order: 5, slug: "forward-refs", title: "Forward Refs", shortTitle: "Forward Refs", readingTime: 10, tags: ["react", "refs", "forwardref"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to pass a ref through a component to a child using forwardRef.", prerequisites: ["useref-hook"], related: ["useref-hook", "react-portals"], recommended: [] },
      { id: 62, order: 6, slug: "react-memo", title: "React Memo", shortTitle: "React.memo", readingTime: 10, tags: ["react", "memo", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React.memo prevents unnecessary re-renders of functional components.", prerequisites: ["functional-components"], related: ["usememo-hook", "react-usememo-hook"], recommended: ["usememo-hook"] },
      { id: 63, order: 7, slug: "lazy-loading", title: "Lazy Loading", shortTitle: "Lazy Loading", readingTime: 12, tags: ["react", "lazy loading", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to lazily load components in React to improve initial load performance.", prerequisites: ["component-overview"], related: ["code-splitting", "suspense"], recommended: ["code-splitting"] },
      { id: 64, order: 8, slug: "code-splitting", title: "Code Splitting", shortTitle: "Code Splitting", readingTime: 12, tags: ["react", "code splitting", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how code splitting reduces bundle size by loading code only when needed.", prerequisites: ["lazy-loading"], related: ["lazy-loading", "suspense"], recommended: ["suspense"] },
      { id: 65, order: 9, slug: "suspense", title: "Suspense", shortTitle: "Suspense", readingTime: 12, tags: ["react", "suspense", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React Suspense lets you show fallback UI while components are loading.", prerequisites: ["lazy-loading", "code-splitting"], related: ["lazy-loading", "code-splitting", "error-boundaries"], recommended: [] },
      { id: 66, order: 10, slug: "error-boundaries", title: "Error Boundaries", shortTitle: "Error Boundaries", readingTime: 12, tags: ["react", "error boundaries", "error handling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how error boundaries catch JavaScript errors in the component tree and display fallback UI.", prerequisites: ["component-overview"], related: ["suspense", "error-handling"], recommended: [] }
    ]
  },
 
  {
    id: "state-management",
    title: "State Management",
    order: 10,
    difficulty: "Advanced",
    lessons: [
      { id: 67, order: 1, slug: "context-api-review", title: "Context API Review", shortTitle: "Context API Review", readingTime: 12, tags: ["react", "context", "state management"], status: STATUS.PUBLISHED, featured: true, description: "Revisit the Context API with a focus on scaling it for larger applications.", prerequisites: ["context-api"], related: ["context-api", "usecontext-hook"], recommended: [] },
      { id: 68, order: 2, slug: "redux-fundamentals", title: "Redux Fundamentals", shortTitle: "Redux Fundamentals", readingTime: 16, tags: ["react", "redux", "state management"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Redux and how it manages global application state.", prerequisites: ["context-api-review"], related: ["redux-toolkit", "global-state-management"], recommended: ["redux-toolkit"] },
      { id: 69, order: 3, slug: "redux-toolkit", title: "Redux Toolkit", shortTitle: "Redux Toolkit", readingTime: 16, tags: ["react", "redux", "redux toolkit"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Redux Toolkit simplifies writing Redux logic with less boilerplate.", prerequisites: ["redux-fundamentals"], related: ["redux-fundamentals", "global-state-management"], recommended: [] },
      { id: 70, order: 4, slug: "global-state-management", title: "Global State Management", shortTitle: "Global State", readingTime: 12, tags: ["react", "state management", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Compare different approaches to managing global state in React applications.", prerequisites: ["redux-toolkit", "context-api-review"], related: ["redux-toolkit", "context-api-review"], recommended: [] }
    ]
  },
 
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    order: 11,
    difficulty: "Advanced",
    lessons: [
      { id: 71, order: 1, slug: "react-performance-basics", title: "React Performance Basics", shortTitle: "Performance Basics", readingTime: 12, tags: ["react", "performance", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to performance optimization techniques in React applications.", prerequisites: ["react-memo"], related: ["memoization", "react-profiler"], recommended: ["memoization"] },
      { id: 72, order: 2, slug: "memoization", title: "Memoization", shortTitle: "Memoization", readingTime: 12, tags: ["react", "memoization", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn the concept of memoization and how it prevents redundant calculations and renders.", prerequisites: ["react-performance-basics"], related: ["react-usememo-hook", "react-usecallback-hook"], recommended: ["react-usememo-hook"] },
      { id: 73, order: 3, slug: "react-usememo-hook", title: "useMemo", shortTitle: "useMemo (Performance)", readingTime: 12, tags: ["react", "usememo", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Revisit the useMemo hook with a deeper focus on real-world performance optimization.", prerequisites: ["usememo-hook", "memoization"], related: ["usememo-hook", "memoization"], recommended: [] },
      { id: 74, order: 4, slug: "react-usecallback-hook", title: "useCallback", shortTitle: "useCallback (Performance)", readingTime: 12, tags: ["react", "usecallback", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Revisit the useCallback hook with a deeper focus on preventing unnecessary re-renders.", prerequisites: ["usecallback-hook", "memoization"], related: ["usecallback-hook", "memoization"], recommended: [] },
      { id: 75, order: 5, slug: "react-profiler", title: "React Profiler", shortTitle: "React Profiler", readingTime: 14, tags: ["react", "profiler", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use the React Profiler to measure and diagnose performance issues.", prerequisites: ["react-performance-basics"], related: ["memoization", "react-usememo-hook"], recommended: [] }
    ]
  },
 
  {
    id: "authentication-authorization",
    title: "Authentication & Authorization",
    order: 12,
    difficulty: "Advanced",
    lessons: [
      { id: 76, order: 1, slug: "authentication-basics", title: "Authentication Basics", shortTitle: "Auth Basics", readingTime: 12, tags: ["react", "authentication", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to authentication concepts in modern web applications.", prerequisites: ["rest-api-integration"], related: ["jwt-authentication", "login-logout-flow"], recommended: ["jwt-authentication"] },
      { id: 77, order: 2, slug: "jwt-authentication", title: "JWT Authentication", shortTitle: "JWT Authentication", readingTime: 14, tags: ["react", "jwt", "authentication"], status: STATUS.PUBLISHED, featured: true, description: "Learn how JSON Web Tokens are used to authenticate users in React applications.", prerequisites: ["authentication-basics"], related: ["authentication-basics", "protected-routes-in-react"], recommended: [] },
      { id: 78, order: 3, slug: "protected-routes-in-react", title: "Protected Routes", shortTitle: "Protected Routes (Auth)", readingTime: 12, tags: ["react", "authentication", "protected routes"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to protect routes in a React application based on user authentication status.", prerequisites: ["protected-routes", "authentication-basics"], related: ["protected-routes", "authentication-basics"], recommended: [] },
      { id: 79, order: 4, slug: "login-logout-flow", title: "Login & Logout Flow", shortTitle: "Login & Logout", readingTime: 14, tags: ["react", "authentication", "login flow"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a complete login and logout flow in a React application.", prerequisites: ["jwt-authentication"], related: ["jwt-authentication", "protected-routes-in-react"], recommended: [] }
    ]
  },
 
  {
    id: "react-backend",
    title: "React + Backend",
    order: 13,
    difficulty: "Advanced",
    lessons: [
      { id: 80, order: 1, slug: "react-with-expressjs", title: "React with Express.js", shortTitle: "React + Express.js", readingTime: 16, tags: ["react", "expressjs", "backend"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to connect a React frontend to an Express.js backend.", prerequisites: ["rest-api-integration"], related: ["react-with-nodejs", "mern-stack-overview"], recommended: ["mern-stack-overview"] },
      { id: 81, order: 2, slug: "react-with-nodejs", title: "React with Node.js", shortTitle: "React + Node.js", readingTime: 14, tags: ["react", "nodejs", "backend"], status: STATUS.PUBLISHED, featured: true, description: "Learn how React applications interact with a Node.js backend.", prerequisites: ["rest-api-integration"], related: ["react-with-expressjs", "mern-stack-overview"], recommended: [] },
      { id: 82, order: 3, slug: "react-with-mongodb", title: "React with MongoDB", shortTitle: "React + MongoDB", readingTime: 14, tags: ["react", "mongodb", "backend"], status: STATUS.PUBLISHED, featured: true, description: "Learn how a React application interacts with data stored in MongoDB via an API.", prerequisites: ["react-with-expressjs"], related: ["react-with-expressjs", "mern-stack-overview"], recommended: [] },
      { id: 83, order: 4, slug: "mern-stack-overview", title: "MERN Stack Overview", shortTitle: "MERN Stack", readingTime: 16, tags: ["react", "mern", "fullstack"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of the MERN stack and how MongoDB, Express, React, and Node.js work together.", prerequisites: ["react-with-expressjs", "react-with-mongodb"], related: ["react-with-expressjs", "react-with-nodejs", "react-with-mongodb", "full-mern-project"], recommended: ["full-mern-project"] }
    ]
  },
 
  {
    id: "testing",
    title: "Testing",
    order: 14,
    difficulty: "Advanced",
    lessons: [
      { id: 84, order: 1, slug: "introduction-to-testing", title: "Introduction to Testing", shortTitle: "Testing Intro", readingTime: 12, tags: ["react", "testing", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to why testing matters for React applications.", prerequisites: ["component-overview"], related: ["jest-basics", "react-testing-library"], recommended: ["jest-basics"] },
      { id: 85, order: 2, slug: "jest-basics", title: "Jest Basics", shortTitle: "Jest Basics", readingTime: 12, tags: ["react", "testing", "jest"], status: STATUS.PUBLISHED, featured: true, description: "Learn the basics of Jest, a popular JavaScript testing framework.", prerequisites: ["introduction-to-testing"], related: ["react-testing-library", "introduction-to-testing"], recommended: ["react-testing-library"] },
      { id: 86, order: 3, slug: "react-testing-library", title: "React Testing Library", shortTitle: "Testing Library", readingTime: 14, tags: ["react", "testing", "react testing library"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to test React components using React Testing Library.", prerequisites: ["jest-basics"], related: ["jest-basics", "component-testing"], recommended: ["component-testing"] },
      { id: 87, order: 4, slug: "component-testing", title: "Component Testing", shortTitle: "Component Testing", readingTime: 14, tags: ["react", "testing", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical strategies for testing individual React components.", prerequisites: ["react-testing-library"], related: ["react-testing-library", "jest-basics"], recommended: [] }
    ]
  },
 
  {
    id: "deployment",
    title: "Deployment",
    order: 15,
    difficulty: "Advanced",
    lessons: [
      { id: 88, order: 1, slug: "build-for-production", title: "Build for Production", shortTitle: "Production Build", readingTime: 10, tags: ["react", "deployment", "build"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to create an optimized production build of a React application.", prerequisites: [], related: ["deployment-on-vercel", "deployment-on-netlify"], recommended: ["deployment-on-vercel"] },
      { id: 89, order: 2, slug: "deployment-on-vercel", title: "Deployment on Vercel", shortTitle: "Deploy on Vercel", readingTime: 10, tags: ["react", "deployment", "vercel"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a React application to Vercel.", prerequisites: ["build-for-production"], related: ["build-for-production", "deployment-on-netlify"], recommended: [] },
      { id: 90, order: 3, slug: "deployment-on-netlify", title: "Deployment on Netlify", shortTitle: "Deploy on Netlify", readingTime: 10, tags: ["react", "deployment", "netlify"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a React application to Netlify.", prerequisites: ["build-for-production"], related: ["build-for-production", "deployment-on-vercel"], recommended: [] },
      { id: 91, order: 4, slug: "environment-variables", title: "Environment Variables", shortTitle: "Environment Variables", readingTime: 10, tags: ["react", "deployment", "env variables"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use environment variables to manage configuration in React applications.", prerequisites: ["build-for-production"], related: ["build-for-production", "deployment-on-vercel"], recommended: [] }
    ]
  },
 
  {
    id: "real-projects",
    title: "Real Projects",
    order: 16,
    difficulty: "Advanced",
    lessons: [
      { id: 92, order: 1, slug: "todo-app", title: "Todo App", shortTitle: "Todo App", readingTime: 18, tags: ["react", "project", "todo app"], status: STATUS.PUBLISHED, featured: true, description: "Build a classic todo list application to practice core React concepts.", prerequisites: ["usestate-hook", "event-handling"], related: ["notes-app", "expense-tracker"], recommended: [] },
      { id: 93, order: 2, slug: "weather-app", title: "Weather App", shortTitle: "Weather App", readingTime: 20, tags: ["react", "project", "weather app"], status: STATUS.PUBLISHED, featured: true, description: "Build a weather application that fetches live data from a public API.", prerequisites: ["fetch-api", "loading-states"], related: ["rest-api-integration", "error-handling"], recommended: [] },
      { id: 94, order: 3, slug: "notes-app", title: "Notes App", shortTitle: "Notes App", readingTime: 18, tags: ["react", "project", "notes app"], status: STATUS.PUBLISHED, featured: true, description: "Build a notes-taking application using React state and local storage.", prerequisites: ["usestate-hook"], related: ["todo-app", "expense-tracker"], recommended: [] },
      { id: 95, order: 4, slug: "quiz-app", title: "Quiz App", shortTitle: "Quiz App", readingTime: 20, tags: ["react", "project", "quiz app"], status: STATUS.PUBLISHED, featured: true, description: "Build an interactive quiz application using React state and conditional rendering.", prerequisites: ["conditional-rendering", "usestate-hook"], related: ["todo-app", "quiz-app"], recommended: [] },
      { id: 96, order: 5, slug: "expense-tracker", title: "Expense Tracker", shortTitle: "Expense Tracker", readingTime: 20, tags: ["react", "project", "expense tracker"], status: STATUS.PUBLISHED, featured: true, description: "Build an expense tracker application to practice forms, state, and lists in React.", prerequisites: ["react-forms", "list-and-keys"], related: ["todo-app", "notes-app"], recommended: [] },
      { id: 97, order: 6, slug: "chat-application", title: "Chat Application", shortTitle: "Chat Application", readingTime: 24, tags: ["react", "project", "chat app"], status: STATUS.PUBLISHED, featured: true, description: "Build a real-time chat application using React.", prerequisites: ["rest-api-integration", "usecontext-hook"], related: ["weather-app", "ecommerce-frontend"], recommended: [] },
      { id: 98, order: 7, slug: "ecommerce-frontend", title: "E-commerce Frontend", shortTitle: "E-commerce Frontend", readingTime: 26, tags: ["react", "project", "ecommerce"], status: STATUS.PUBLISHED, featured: true, description: "Build the frontend for an e-commerce application using React.", prerequisites: ["rest-api-integration", "react-with-expressjs"], related: ["chat-application", "full-mern-project"], recommended: ["full-mern-project"] },
      { id: 99, order: 8, slug: "full-mern-project", title: "Full MERN Project", shortTitle: "Full MERN Project", readingTime: 30, tags: ["react", "project", "mern stack"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete full-stack application using the MERN stack.", prerequisites: ["mern-stack-overview", "ecommerce-frontend"], related: ["mern-stack-overview", "ecommerce-frontend"], recommended: [] }
    ]
  },
 
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    order: 17,
    difficulty: "Advanced",
    lessons: [
      { id: 100, order: 1, slug: "react-interview-questions", title: "React Interview Questions", shortTitle: "Interview Questions", readingTime: 20, tags: ["react", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Prepare for React interviews with commonly asked questions and answers.", prerequisites: ["react-best-practices", "common-mistakes"], related: ["react-coding-challenges", "common-mistakes"], recommended: ["react-coding-challenges"] },
      { id: 101, order: 2, slug: "react-best-practices", title: "React Best Practices", shortTitle: "Best Practices", readingTime: 14, tags: ["react", "best practices", "clean code"], status: STATUS.PUBLISHED, featured: true, description: "Learn a checklist of best practices followed by professional React developers.", prerequisites: ["component-overview"], related: ["common-mistakes", "react-interview-questions"], recommended: [] },
      { id: 102, order: 3, slug: "common-mistakes", title: "Common Mistakes", shortTitle: "Common Mistakes", readingTime: 12, tags: ["react", "mistakes", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn about common React mistakes developers make and how to avoid them.", prerequisites: ["react-best-practices"], related: ["react-best-practices", "react-interview-questions"], recommended: ["react-interview-questions"] },
      { id: 103, order: 4, slug: "react-coding-challenges", title: "React Coding Challenges", shortTitle: "Coding Challenges", readingTime: 22, tags: ["react", "interview", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Practice React coding challenges commonly used in technical interviews.", prerequisites: ["react-interview-questions"], related: ["react-interview-questions", "react-best-practices"], recommended: [] }
    ]
  },
 
  {
    id: "conclusion",
    title: "Conclusion",
    order: 18,
    difficulty: "Beginner",
    lessons: [
      { id: 104, order: 1, slug: "react-learning-roadmap", title: "React Learning Roadmap", shortTitle: "Roadmap", readingTime: 10, tags: ["react", "roadmap", "career"], status: STATUS.PUBLISHED, featured: true, description: "Review a complete roadmap of everything you've learned in this React tutorial.", prerequisites: ["react-interview-questions"], related: ["next-steps-after-react", "react-ecosystem-overview"], recommended: ["next-steps-after-react"] },
      { id: 105, order: 2, slug: "next-steps-after-react", title: "Next Steps After React", shortTitle: "Next Steps", readingTime: 10, tags: ["react", "next steps", "career"], status: STATUS.PUBLISHED, featured: true, description: "Learn what to study next as you continue your journey beyond React.", prerequisites: ["react-learning-roadmap"], related: ["react-learning-roadmap", "react-ecosystem-overview"], recommended: [] },
      { id: 106, order: 3, slug: "react-ecosystem-overview", title: "React Ecosystem Overview", shortTitle: "Ecosystem Overview", readingTime: 14, tags: ["react", "ecosystem", "tools"], status: STATUS.PUBLISHED, featured: true, description: "Explore the broader React ecosystem including tools, libraries, and frameworks.", prerequisites: ["react-learning-roadmap"], related: ["react-learning-roadmap", "next-steps-after-react"], recommended: [] }
    ]
  }

];

export const resources = [

  {
    id: "react-in-production",
    title: "React in Production",
    order: 1,
    items: [
      { id: 107, order: 1, slug: "how-companies-use-react", title: "How Companies Use React", shortTitle: "React in Companies", type: "article", readingTime: 10, tags: ["react", "production", "real world"], status: STATUS.PUBLISHED, featured: true, description: "Explore how real companies use React in large-scale production applications." },
      { id: 108, order: 2, slug: "real-project-architecture", title: "Real Project Architecture", shortTitle: "Project Architecture", type: "article", readingTime: 12, tags: ["react", "architecture", "production"], status: STATUS.PUBLISHED, featured: true, description: "Learn how real React projects are architected at scale." },
      { id: 109, order: 3, slug: "react-in-startups-vs-enterprises", title: "React in Startups vs Enterprises", shortTitle: "Startups vs Enterprises", type: "article", readingTime: 10, tags: ["react", "production", "career"], status: STATUS.PUBLISHED, featured: true, description: "Compare how React is used differently in startups versus large enterprises." },
      { id: 110, order: 4, slug: "frontend-team-workflows", title: "Frontend Team Workflows", shortTitle: "Team Workflows", type: "article", readingTime: 10, tags: ["react", "workflow", "teams"], status: STATUS.PUBLISHED, featured: true, description: "Learn how frontend teams collaborate and manage workflows around React codebases." }
    ]
  },
 
  {
    id: "react-best-practices-resources",
    title: "React Best Practices",
    order: 2,
    items: [
      { id: 111, order: 1, slug: "component-organization", title: "Component Organization", shortTitle: "Component Organization", type: "article", readingTime: 10, tags: ["react", "architecture", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to organize React components for scalability and clarity." },
      { id: 112, order: 2, slug: "folder-structure", title: "Folder Structure", shortTitle: "Folder Structure", type: "article", readingTime: 10, tags: ["react", "architecture", "folder structure"], status: STATUS.PUBLISHED, featured: true, description: "Explore common folder structures used in professional React projects." },
      { id: 113, order: 3, slug: "clean-code-principles", title: "Clean Code Principles", shortTitle: "Clean Code", type: "article", readingTime: 12, tags: ["react", "clean code", "best practices"], status: STATUS.PUBLISHED, featured: true, description: "Learn clean code principles that apply specifically to React development." },
      { id: 114, order: 4, slug: "reusable-components", title: "Reusable Components", shortTitle: "Reusable Components", type: "article", readingTime: 12, tags: ["react", "components", "reusability"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to design reusable, composable React components." }
    ]
  },
 
  {
    id: "common-react-mistakes",
    title: "Common React Mistakes",
    order: 3,
    items: [
      { id: 115, order: 1, slug: "overusing-state", title: "Overusing State", shortTitle: "Overusing State", type: "article", readingTime: 8, tags: ["react", "mistakes", "state"], status: STATUS.PUBLISHED, featured: true, description: "Learn why overusing state can lead to unnecessary complexity and re-renders." },
      { id: 116, order: 2, slug: "wrong-key-usage", title: "Wrong Key Usage", shortTitle: "Wrong Key Usage", type: "article", readingTime: 8, tags: ["react", "mistakes", "keys"], status: STATUS.PUBLISHED, featured: true, description: "Learn why using array indexes as keys can cause subtle bugs in React lists." },
      { id: 117, order: 3, slug: "unnecessary-re-renders", title: "Unnecessary Re-renders", shortTitle: "Unnecessary Re-renders", type: "article", readingTime: 10, tags: ["react", "mistakes", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn common causes of unnecessary re-renders and how to prevent them." },
      { id: 118, order: 4, slug: "poor-component-design", title: "Poor Component Design", shortTitle: "Poor Component Design", type: "article", readingTime: 10, tags: ["react", "mistakes", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn common component design mistakes that hurt maintainability." }
    ]
  },
 
  {
    id: "react-career-interview-guide",
    title: "React Career & Interview Guide",
    order: 4,
    items: [
      { id: 119, order: 1, slug: "react-developer-roadmap", title: "React Developer Roadmap", shortTitle: "Developer Roadmap", type: "article", readingTime: 12, tags: ["react", "career", "roadmap"], status: STATUS.PUBLISHED, featured: true, description: "Explore a roadmap for becoming a professional React developer." },
      { id: 120, order: 2, slug: "skills-companies-expect", title: "Skills Companies Expect", shortTitle: "Skills Companies Expect", type: "article", readingTime: 10, tags: ["react", "career", "skills"], status: STATUS.PUBLISHED, featured: true, description: "Learn the React skills companies commonly expect from job candidates." },
      { id: 121, order: 3, slug: "interview-preparation", title: "Interview Preparation", shortTitle: "Interview Preparation", type: "article", readingTime: 12, tags: ["react", "interview", "career"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to prepare effectively for React developer interviews." },
      { id: 122, order: 4, slug: "portfolio-building", title: "Portfolio Building", shortTitle: "Portfolio Building", type: "article", readingTime: 12, tags: ["react", "career", "portfolio"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a strong React portfolio to showcase to employers." }
    ]
  },
 
  {
    id: "react-ai-development",
    title: "React + AI Development",
    order: 5,
    items: [
      { id: 123, order: 1, slug: "using-chatgpt-with-react", title: "Using ChatGPT with React", shortTitle: "ChatGPT + React", type: "article", readingTime: 10, tags: ["react", "ai", "chatgpt"], status: STATUS.PUBLISHED, featured: true, description: "Learn practical ways developers use ChatGPT while building React applications." },
      { id: 124, order: 2, slug: "ai-assisted-coding-workflows", title: "AI-Assisted Coding Workflows", shortTitle: "AI Coding Workflows", type: "article", readingTime: 10, tags: ["react", "ai", "workflow"], status: STATUS.PUBLISHED, featured: true, description: "Explore how AI tools are changing React development workflows." },
      { id: 125, order: 3, slug: "generating-components-with-ai", title: "Generating Components with AI", shortTitle: "AI-Generated Components", type: "article", readingTime: 10, tags: ["react", "ai", "components"], status: STATUS.PUBLISHED, featured: true, description: "Learn how AI tools can help generate React component code." },
      { id: 126, order: 4, slug: "ai-limitations-in-frontend-development", title: "AI Limitations in Frontend Development", shortTitle: "AI Limitations", type: "article", readingTime: 10, tags: ["react", "ai", "limitations"], status: STATUS.PUBLISHED, featured: true, description: "Understand the current limitations of AI tools in frontend development." }
    ]
  }

];