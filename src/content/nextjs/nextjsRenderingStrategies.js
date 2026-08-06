const nextjsRenderingStrategies = {

/* ===========================
    First Topic : Client-side Rendering (CSR)
============================= */
    "nextjs-client-side-rendering": {
    title: "Client-side Rendering (CSR)",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are expected to feel as responsive as desktop applications. Users expect pages to update instantly without full page reloads, forms to submit asynchronously, notifications to appear in real time, and dashboards to refresh automatically. These interactive experiences are made possible through Client-side Rendering (CSR)."
          },
          {
            type: "paragraph",
            content: "Although Next.js is widely recognized for its Server-side Rendering (SSR), Static Site Generation (SSG), and the App Router, it also fully supports Client-side Rendering. In fact, nearly every production Next.js application uses CSR to some extent. Authentication, dashboards, chat systems, shopping carts, notifications, filters, search bars, and interactive forms all rely heavily on client-side rendering."
          },
          {
            type: "paragraph",
            content: "Understanding CSR is essential because choosing the wrong rendering strategy can negatively impact SEO, performance, and user experience. In this lesson, you'll learn not only what CSR is, but also how it works internally, when to use it, when to avoid it, how Next.js implements it, and how to combine it with other rendering strategies."
          }
        ]
      },

      {
        heading: "What is Client-side Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side Rendering (CSR) is a rendering technique in which the browser downloads a minimal HTML page along with JavaScript. The JavaScript then executes inside the browser and generates the user interface dynamically."
          },
          {
            type: "paragraph",
            content: "Instead of the server sending a fully rendered HTML page, it mainly sends:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML shell",
              "CSS",
              "JavaScript bundles"
            ]
          },
          {
            type: "paragraph",
            content: "The browser downloads these resources and React renders the page."
          },
          {
            type: "flow",
            steps: [
              "User Requests Page", "→",
              "Server Sends HTML + JS + CSS", "→",
              "Browser Downloads JavaScript", "→",
              "React Executes", "→",
              "Page is Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "The browser performs most of the rendering work rather than the server."
          }
        ]
      },

      {
        heading: "Traditional Website vs CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional Website"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Creates HTML", "→",
              "Browser Receives HTML", "→",
              "User Sees Content"
            ]
          },
          {
            type: "paragraph",
            content: "Rendering happens on the server."
          },
          {
            type: "paragraph",
            content: "CSR Website"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Sends Empty HTML", "→",
              "Browser Downloads JavaScript", "→",
              "React Builds UI", "→",
              "User Sees Content"
            ]
          },
          {
            type: "paragraph",
            content: "Rendering happens in the browser."
          }
        ]
      },

      {
        heading: "Why Client-side Rendering Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine opening Gmail. Does the browser reload the entire page every time you:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "open an email?",
              "archive a message?",
              "delete a message?",
              "receive a new email?"
            ]
          },
          {
            type: "paragraph",
            content: "No. Only the necessary parts update. This creates an application-like experience."
          },
          {
            type: "paragraph",
            content: "Other examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Facebook",
              "Instagram",
              "WhatsApp Web",
              "Discord",
              "Slack",
              "Trello",
              "Notion",
              "Google Docs"
            ]
          },
          {
            type: "paragraph",
            content: "These applications heavily rely on CSR."
          }
        ]
      },

      {
        heading: "How CSR Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand the complete lifecycle."
          },
          {
            type: "paragraph",
            content: "Step 1: Browser Requests Page"
          },
          {
            type: "code",
            language: "text",
            content: `GET /`
          },
          {
            type: "paragraph",
            content: "Step 2: Server Responds. The server returns:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "index.html",
              "main.js",
              "styles.css"
            ]
          },
          {
            type: "paragraph",
            content: "The HTML usually contains only a root element. Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<body>
  <div id="root"></div>
</body>`
          },
          {
            type: "paragraph",
            content: "Very little content is visible initially."
          },
          {
            type: "paragraph",
            content: "Step 3: Browser Downloads JavaScript"
          },
          {
            type: "flow",
            steps: [
              "main.js", "→",
              "React", "→",
              "Application Code", "→",
              "Components"
            ]
          },
          {
            type: "paragraph",
            content: "Step 4: React Starts. React creates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components",
              "Virtual DOM",
              "Event handlers",
              "State"
            ]
          },
          {
            type: "paragraph",
            content: "Step 5: UI Appears. Now the page becomes visible."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "React", "→",
              "Component Tree", "→",
              "HTML", "→",
              "Visible UI"
            ]
          }
        ]
      },

      {
        heading: "CSR in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "In Next.js, CSR usually occurs inside Client Components. A Client Component begins with:"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client";`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

export default function Home() {
  return <h1>Hello DevSphere</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Without \"use client\" in the App Router, components are Server Components by default."
          }
        ]
      },

      {
        heading: "Client Components and CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Client Components run inside the browser. They support:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useState",
              "useEffect",
              "useRef",
              "useContext",
              "Browser APIs",
              "Event listeners",
              "Window object",
              "Local Storage",
              "Session Storage"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "The button updates instantly without requesting another page from the server."
          }
        ]
      },

      {
        heading: "Client-side Data Fetching",
        blocks: [
          {
            type: "paragraph",
            content: "CSR commonly fetches data after the page loads. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
          },
          {
            type: "paragraph",
            content: "Sequence:"
          },
          {
            type: "flow",
            steps: [
              "Page Loads", "→",
              "React Mounts", "→",
              "useEffect Executes", "→",
              "API Request", "→",
              "Response", "→",
              "State Updates", "→",
              "UI Re-renders"
            ]
          }
        ]
      },

      {
        heading: "Why useEffect is Common in CSR",
        blocks: [
          {
            type: "paragraph",
            content: "useEffect() runs after rendering."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {

}, []);`
          },
          {
            type: "paragraph",
            content: "It is commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "API requests",
              "WebSockets",
              "Analytics",
              "Browser APIs",
              "Event listeners",
              "Timers",
              "Authentication checks"
            ]
          }
        ]
      },

      {
        heading: "Real-world CSR Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Shopping Cart"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client";

const [cart, setCart] = useState([]);`
          },
          {
            type: "paragraph",
            content: "Items update instantly."
          },
          {
            type: "paragraph",
            content: "Search"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [query, setQuery] = useState("");`
          },
          {
            type: "paragraph",
            content: "Results update while typing."
          },
          {
            type: "paragraph",
            content: "Notifications"
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "WebSocket", "→",
              "Browser", "→",
              "React State", "→",
              "Notification Appears"
            ]
          },
          {
            type: "paragraph",
            content: "Dashboard"
          },
          {
            type: "flow",
            steps: [
              "API", "→",
              "Fetch", "→",
              "State Update", "→",
              "Charts Refresh"
            ]
          },
          {
            type: "paragraph",
            content: "Theme Switcher"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client";

const [dark, setDark] = useState(false);`
          },
          {
            type: "paragraph",
            content: "Switches theme instantly."
          }
        ]
      },

      {
        heading: "CSR Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "When navigating between pages using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import Link from "next/link";`
          },
          {
            type: "paragraph",
            content: "Next.js avoids a full page reload."
          },
          {
            type: "flow",
            steps: [
              "Click Link", "→",
              "Fetch Route", "→",
              "Update UI", "→",
              "No Refresh"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a Single Page Application (SPA)-like experience."
          }
        ]
      },

      {
        heading: "Browser APIs Available in CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Since code runs in the browser, you can use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "window",
              "document",
              "localStorage",
              "sessionStorage",
              "navigator",
              "history",
              "location",
              "Notification",
              "Geolocation",
              "Clipboard",
              "IntersectionObserver"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client";

useEffect(() => {
  console.log(window.innerWidth);
}, []);`
          },
          {
            type: "paragraph",
            content: "This would fail in a Server Component because window doesn't exist on the server."
          }
        ]
      },

      {
        heading: "CSR and State Management",
        blocks: [
          {
            type: "paragraph",
            content: "CSR enables interactive state libraries such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React Context",
              "Redux",
              "Zustand",
              "MobX",
              "Jotai",
              "Recoil"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks", "→",
              "State Changes", "→",
              "React Re-renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "No server request is required for local UI state."
          }
        ]
      },

      {
        heading: "Hydration and CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Hydration is the process where React attaches JavaScript behavior to HTML."
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "React Hydrates", "→",
              "Buttons Work", "→",
              "Forms Work", "→",
              "State Works"
            ]
          },
          {
            type: "paragraph",
            content: "Pure CSR often starts from an almost empty HTML shell, while hybrid Next.js pages may hydrate server-rendered HTML. Hydration is what makes the page interactive in both cases."
          }
        ]
      },

      {
        heading: "CSR vs Server-side Rendering",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "CSR", "SSR"],
            rows: [
              ["Rendering Location", "Browser", "Server"],
              ["Initial Load", "Slower", "Faster"],
              ["SEO", "Poor by default", "Excellent"],
              ["Interactivity", "Excellent", "Excellent after hydration"],
              ["JavaScript Required", "Yes", "Yes (for hydration)"],
              ["Server Load", "Lower", "Higher"],
              ["First Content", "Delayed", "Immediate"]
            ]
          }
        ]
      },

      {
        heading: "CSR vs Static Site Generation",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "CSR", "SSG"],
            rows: [
              ["HTML Generated", "Browser", "Build Time"],
              ["SEO", "Weak", "Excellent"],
              ["Speed", "Moderate", "Very Fast"],
              ["Dynamic Content", "Excellent", "Limited without client fetches"],
              ["API Calls", "Runtime", "Build Time (plus optional client fetches)"]
            ]
          }
        ]
      },

      {
        heading: "Advantages of CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Rich Interactivity: Instant UI updates without page refreshes."
          },
          {
            type: "paragraph",
            content: "Less Server Rendering: The server mostly serves static assets and APIs."
          },
          {
            type: "paragraph",
            content: "Faster Internal Navigation: Next.js prefetches routes. Navigation feels almost instant."
          },
          {
            type: "paragraph",
            content: "Better User Experience: The application behaves like native software."
          },
          {
            type: "paragraph",
            content: "Real-time Updates: Works well with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "WebSockets",
              "Live notifications",
              "Chats",
              "Dashboards"
            ]
          },
          {
            type: "paragraph",
            content: "Reduced Server CPU: Rendering is delegated to the client."
          }
        ]
      },

      {
        heading: "Disadvantages of CSR",
        blocks: [
          {
            type: "paragraph",
            content: "Slower First Load: Users must download JavaScript before seeing meaningful content."
          },
          {
            type: "paragraph",
            content: "Worse SEO (If Used Alone): Search engines are much better at executing JavaScript than they once were, but server-rendered HTML is still generally more reliable for SEO and faster indexing."
          },
          {
            type: "paragraph",
            content: "JavaScript Dependency: If JavaScript fails:"
          },
          {
            type: "flow",
            steps: [
              "No JavaScript", "→",
              "No Rendering", "→",
              "Blank or Incomplete UI"
            ]
          },
          {
            type: "paragraph",
            content: "Larger Bundle Size: Large JavaScript bundles increase:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "download time",
              "parse time",
              "execution time"
            ]
          },
          {
            type: "paragraph",
            content: "Lower-end Devices: Older phones may struggle to execute large client bundles efficiently."
          }
        ]
      },

      {
        heading: "Optimizing CSR in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Split Components: Avoid putting an entire page inside one large Client Component. Instead:"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "Client Component", "→",
              "Interactive Widget"
            ]
          },
          {
            type: "paragraph",
            content: "Only interactive parts become client-side code."
          },
          {
            type: "paragraph",
            content: "Dynamic Imports: Load heavy components only when needed."
          },
          {
            type: "code",
            language: "javascript",
            content: `import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"));`
          },
          {
            type: "paragraph",
            content: "This reduces the initial JavaScript bundle."
          },
          {
            type: "paragraph",
            content: "Lazy Load Components: Render expensive UI only when users actually need it."
          },
          {
            type: "paragraph",
            content: "Fetch Only Required Data: Avoid requesting unnecessary API data."
          },
          {
            type: "paragraph",
            content: "Cache Requests: Libraries like SWR and TanStack Query reduce duplicate requests through caching and background revalidation."
          },
          {
            type: "paragraph",
            content: "Minimize Client Components: Every \"use client\" increases the amount of JavaScript sent to the browser. Prefer Server Components unless browser-only features are required."
          }
        ]
      },

      {
        heading: "CSR and Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "CSR can affect several Core Web Vitals if not optimized:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "LCP (Largest Contentful Paint): Large JavaScript bundles can delay meaningful content.",
              "INP (Interaction to Next Paint): Heavy client-side computation can make interactions feel sluggish.",
              "CLS (Cumulative Layout Shift): Loading content without reserving space can cause layout shifts."
            ]
          },
          {
            type: "paragraph",
            content: "Reducing bundle size, code splitting, lazy loading, and reserving layout space help maintain good scores."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Adding \"use client\" to every component.",
              "Fetching all data on the client when server fetching is sufficient.",
              "Sending huge JavaScript bundles.",
              "Blocking rendering with heavy computations.",
              "Ignoring loading and error states.",
              "Accessing window or document in Server Components.",
              "Using CSR for SEO-critical pages like blogs or product landing pages."
            ]
          }
        ]
      },

      {
        heading: "When Should You Use CSR?",
        blocks: [
          {
            type: "paragraph",
            content: "Use CSR when building:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Admin dashboards",
              "Authenticated user panels",
              "Shopping carts",
              "Chat applications",
              "Live notifications",
              "Interactive forms",
              "Drag-and-drop interfaces",
              "Real-time collaboration tools",
              "Games",
              "Rich data visualizations"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid relying solely on CSR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Marketing pages",
              "Blog articles",
              "Documentation",
              "News websites",
              "Landing pages",
              "Product catalogs that depend heavily on SEO"
            ]
          }
        ]
      },

      {
        heading: "Real-world Rendering Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "A mature Next.js application rarely uses a single rendering strategy."
          },
          {
            type: "flow",
            steps: [
              "Marketing Homepage", "→",
              "SSR / SSG"
            ]
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "CSR"
            ]
          },
          {
            type: "flow",
            steps: [
              "Blog", "→",
              "SSG"
            ]
          },
          {
            type: "flow",
            steps: [
              "Profile Settings", "→",
              "CSR"
            ]
          },
          {
            type: "flow",
            steps: [
              "Product Details", "→",
              "SSR + Client Components"
            ]
          },
          {
            type: "flow",
            steps: [
              "Shopping Cart", "→",
              "CSR"
            ]
          },
          {
            type: "paragraph",
            content: "The best applications combine SSR, SSG, ISR, RSC, and CSR based on the needs of each page rather than choosing one approach everywhere."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many tutorials present CSR as simply \"rendering on the browser.\" In practice, the most important architectural decision is deciding how much of your application should be rendered on the client. Every Client Component adds JavaScript that must be downloaded, parsed, and executed. In modern Next.js, the goal is not to maximize CSR, but to minimize it while preserving interactivity. A common production pattern is to render most of the page with Server Components and isolate only interactive features—such as forms, search boxes, filters, or buttons—into small Client Components. This \"client islands\" approach keeps bundle sizes small, improves performance, and still delivers a highly interactive user experience."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side Rendering (CSR) is a rendering strategy where the browser downloads JavaScript and React generates the user interface on the client. It powers highly interactive experiences such as dashboards, chats, shopping carts, search interfaces, and real-time applications. In Next.js, CSR is primarily implemented through Client Components marked with \"use client\", enabling React hooks, browser APIs, and client-side data fetching. While CSR offers excellent interactivity and smooth navigation, it can negatively impact initial load time, SEO, and Core Web Vitals if overused. Modern Next.js applications therefore use CSR selectively, combining it with Server Components, SSR, SSG, and other rendering strategies to achieve the best balance between performance, scalability, and user experience."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Server-side Rendering (SSR)
============================= */
    "nextjs-server-side-rendering": {
    title: "Server-side Rendering (SSR)",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "When users visit a website, they expect to see meaningful content immediately. Search engines expect fully rendered HTML that they can crawl efficiently. Businesses expect fast page loading, better SEO rankings, and an excellent user experience."
          },
          {
            type: "paragraph",
            content: "However, if the browser must first download large JavaScript files before showing anything, users may stare at a blank screen for several seconds. This is one of the major limitations of pure Client-side Rendering (CSR)."
          },
          {
            type: "paragraph",
            content: "To solve this problem, Server-side Rendering (SSR) renders the page on the server before sending it to the browser. Instead of receiving an almost empty HTML document, the browser receives a fully generated page containing the requested content."
          },
          {
            type: "paragraph",
            content: "SSR is one of the core rendering strategies supported by Next.js and is widely used for applications that require fresh data, excellent SEO, and fast initial page rendering."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn not only what SSR is, but also how it works internally, how Next.js implements it, when to use it, when not to use it, its performance implications, common misconceptions, and real-world production practices."
          }
        ]
      },

      {
        heading: "What is Server-side Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side Rendering (SSR) is a rendering strategy where the HTML for a page is generated on the server for every incoming request, and the fully rendered HTML is sent to the browser."
          },
          {
            type: "paragraph",
            content: "Instead of letting React build the page inside the browser, the server performs the rendering first."
          },
          {
            type: "flow",
            steps: [
              "User Requests Page", "→",
              "Server Fetches Data", "→",
              "React Renders HTML", "→",
              "HTML Sent to Browser", "→",
              "Browser Displays Page", "→",
              "React Hydrates Page"
            ]
          },
          {
            type: "paragraph",
            content: "The user sees actual page content immediately instead of waiting for JavaScript to render it."
          }
        ]
      },

      {
        heading: "Why SSR Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine opening an online news article. The article should:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "appear immediately",
              "be searchable by Google",
              "display the latest information",
              "be shareable on social media",
              "work well on slow devices"
            ]
          },
          {
            type: "paragraph",
            content: "If the browser first downloads several megabytes of JavaScript before rendering the article, users may leave before the page becomes usable."
          },
          {
            type: "paragraph",
            content: "SSR solves this by generating the page before it reaches the browser."
          }
        ]
      },

      {
        heading: "Traditional CSR vs SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side Rendering"
          },
          {
            type: "flow",
            steps: [
              "Browser Requests Page", "→",
              "Server Sends Empty HTML", "→",
              "Browser Downloads JavaScript", "→",
              "React Executes", "→",
              "UI Appears"
            ]
          },
          {
            type: "paragraph",
            content: "Server-side Rendering"
          },
          {
            type: "flow",
            steps: [
              "Browser Requests Page", "→",
              "Server Fetches Data", "→",
              "React Generates HTML", "→",
              "Browser Receives HTML", "→",
              "Content Appears Immediately", "→",
              "Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that the browser receives meaningful HTML directly."
          }
        ]
      },

      {
        heading: "How SSR Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand the complete lifecycle."
          },
          {
            type: "paragraph",
            content: "Step 1: The browser requests a page."
          },
          {
            type: "code",
            language: "text",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content: "Step 2: The Next.js server receives the request."
          },
          {
            type: "paragraph",
            content: "Step 3: Required data is fetched. For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Database",
              "CMS",
              "REST API",
              "GraphQL API",
              "Internal Services"
            ]
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "Database", "→",
              "Product Data"
            ]
          },
          {
            type: "paragraph",
            content: "Step 4: React renders HTML on the server. Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>MacBook Pro</h1>

<p>$1999</p>

<button>Buy Now</button>`
          },
          {
            type: "paragraph",
            content: "This HTML already exists before reaching the browser."
          },
          {
            type: "paragraph",
            content: "Step 5: The HTML is sent to the browser."
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "Rendered HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Step 6: The browser displays content immediately. Users can already read the page before JavaScript finishes downloading."
          },
          {
            type: "paragraph",
            content: "Step 7: React hydrates the page."
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "React Hydration", "→",
              "Buttons Work", "→",
              "Forms Work", "→",
              "State Works"
            ]
          },
          {
            type: "paragraph",
            content: "The page now becomes fully interactive."
          }
        ]
      },

      {
        heading: "SSR in Next.js (Pages Router)",
        blocks: [
          {
            type: "paragraph",
            content: "In the Pages Router, SSR is implemented using getServerSideProps. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getServerSideProps() {

  const res = await fetch(
    "https://api.example.com/users"
  );

  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {

  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "For every request:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "getServerSideProps()", "→",
              "Fetch Data", "→",
              "Render HTML", "→",
              "Send HTML"
            ]
          }
        ]
      },

      {
        heading: "SSR in App Router",
        blocks: [
          {
            type: "paragraph",
            content: "The App Router simplifies SSR even further. Server Components are rendered on the server by default. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default async function Page() {

  const res = await fetch(
    "https://api.example.com/users",
    {
      cache: "no-store",
    }
  );

  const users = await res.json();

  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Notice:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No useEffect",
              "No loading state for the initial fetch",
              "No client-side API request for the first render"
            ]
          },
          {
            type: "paragraph",
            content: "The HTML already contains the data"
          },
          {
            type: "paragraph",
            content: "Why cache: \"no-store\"?"
          },
          {
            type: "paragraph",
            content: "By default, Next.js may cache fetch requests depending on the context. Using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `cache: "no-store"`
          },
          {
            type: "paragraph",
            content: "means:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "always fetch fresh data",
              "disable caching",
              "render on every request"
            ]
          },
          {
            type: "paragraph",
            content: "This produces SSR behavior in the App Router."
          }
        ]
      },

      {
        heading: "Hydration in SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think SSR eliminates JavaScript. That is incorrect. SSR only changes where the first HTML is generated."
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "HTML", "→",
              "Browser", "→",
              "JavaScript", "→",
              "Hydration", "→",
              "Interactive Page"
            ]
          },
          {
            type: "paragraph",
            content: "Without hydration:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "buttons won't work",
              "forms won't submit",
              "event handlers won't run",
              "React state won't update"
            ]
          },
          {
            type: "paragraph",
            content: "Hydration is still necessary for interactive React applications."
          }
        ]
      },

      {
        heading: "Real-world SSR Examples",
        blocks: [
          {
            type: "paragraph",
            content: "News Website"
          },
          {
            type: "flow",
            steps: [
              "User Opens Article", "→",
              "Server Fetches Latest News", "→",
              "HTML Generated", "→",
              "User Reads Immediately"
            ]
          },
          {
            type: "paragraph",
            content: "Product Page. Every request retrieves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "latest price",
              "current stock",
              "discounts",
              "reviews"
            ]
          },
          {
            type: "paragraph",
            content: "Perfect for SSR."
          },
          {
            type: "paragraph",
            content: "Weather Dashboard. Every request gets:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "latest temperature",
              "humidity",
              "forecast"
            ]
          },
          {
            type: "paragraph",
            content: "Fresh data is critical."
          },
          {
            type: "paragraph",
            content: "Flight Booking. Prices change constantly. SSR ensures users always receive updated information."
          },
          {
            type: "paragraph",
            content: "Sports Scores. Live score pages frequently benefit from SSR combined with client-side updates."
          }
        ]
      },

      {
        heading: "Advantages of SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Better SEO. Search engines receive complete HTML. Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Next.js Tutorial</h1>

<p>Learn Next.js...</p>`
          },
          {
            type: "paragraph",
            content: "The crawler doesn't have to wait for JavaScript to execute to discover primary content."
          },
          {
            type: "paragraph",
            content: "Faster First Paint. Users see content almost immediately."
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "Screen Displays", "→",
              "Hydration Later"
            ]
          },
          {
            type: "paragraph",
            content: "Fresh Data. Every request gets the newest information. No stale content unless caching is intentionally configured."
          },
          {
            type: "paragraph",
            content: "Better Social Sharing. Open Graph tags already exist inside HTML. Platforms like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Facebook",
              "LinkedIn",
              "X (Twitter)",
              "Discord"
            ]
          },
          {
            type: "paragraph",
            content: "can easily generate previews."
          },
          {
            type: "paragraph",
            content: "Better Accessibility. Assistive technologies can access meaningful HTML immediately."
          },
          {
            type: "paragraph",
            content: "Works Well on Slow Devices. The browser performs less initial rendering work because the server already generated the HTML."
          }
        ]
      },

      {
        heading: "Disadvantages of SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Increased Server Load. Every request requires rendering."
          },
          {
            type: "flow",
            steps: [
              "1000 Users", "→",
              "1000 Server Renders"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike static pages, SSR consumes CPU for each request."
          },
          {
            type: "paragraph",
            content: "Higher Response Time. The server must:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "fetch data",
              "render React",
              "create HTML"
            ]
          },
          {
            type: "paragraph",
            content: "before sending the response."
          },
          {
            type: "paragraph",
            content: "More Infrastructure Cost. Busy SSR applications may require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "more servers",
              "higher CPU",
              "additional memory",
              "caching layers"
            ]
          },
          {
            type: "paragraph",
            content: "Not Necessary for Every Page. Static content usually doesn't benefit from SSR."
          }
        ]
      },

      {
        heading: "SSR vs CSR",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "SSR", "CSR"],
            rows: [
              ["Rendering Location", "Server", "Browser"],
              ["Initial HTML", "Complete", "Minimal"],
              ["SEO", "Excellent", "Limited if used alone"],
              ["Initial Load", "Faster meaningful paint", "Slower"],
              ["Server Usage", "Higher", "Lower"],
              ["Browser Work", "Less initially", "More"],
              ["Fresh Data", "Every request", "Client fetches after load"]
            ]
          }
        ]
      },

      {
        heading: "SSR vs Static Site Generation (SSG)",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "SSR", "SSG"],
            rows: [
              ["Render Time", "Every request", "Build time"],
              ["Data", "Always fresh", "Can become stale"],
              ["Speed", "Fast", "Usually fastest"],
              ["Server Load", "High", "Low"],
              ["Dynamic Content", "Excellent", "Limited without revalidation"]
            ]
          }
        ]
      },

      {
        heading: "SSR vs Incremental Static Regeneration (ISR)",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "SSR", "ISR"],
            rows: [
              ["Freshness", "Every request", "Periodic revalidation"],
              ["Cost", "Higher", "Lower"],
              ["Speed", "Fast", "Very Fast"],
              ["Scalability", "Moderate", "Excellent"]
            ]
          }
        ]
      },

      {
        heading: "When Should You Use SSR?",
        blocks: [
          {
            type: "paragraph",
            content: "SSR is a great choice for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "News websites",
              "Blogs with personalized content",
              "E-commerce product pages",
              "Flight booking",
              "Hotel booking",
              "Stock market dashboards",
              "Weather applications",
              "Personalized dashboards",
              "User profiles",
              "Search results",
              "Real-time pricing"
            ]
          }
        ]
      },

      {
        heading: "When Should You Avoid SSR?",
        blocks: [
          {
            type: "paragraph",
            content: "SSR is usually unnecessary for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Portfolio websites",
              "Documentation",
              "Marketing pages",
              "Landing pages",
              "FAQ pages",
              "Privacy policy",
              "Terms of service",
              "Static tutorials"
            ]
          },
          {
            type: "paragraph",
            content: "These pages often perform better with Static Site Generation."
          }
        ]
      },

      {
        heading: "Data Fetching in SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Typical workflow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server", "→",
              "Database", "→",
              "Data", "→",
              "React", "→",
              "HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Everything happens before the browser receives the page."
          }
        ]
      },

      {
        heading: "Streaming with SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Modern Next.js improves SSR using streaming. Instead of waiting for the entire page to finish rendering, the server can stream completed sections to the browser as they become ready."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Header", "→",
              "Navigation", "→",
              "Main Content", "→",
              "Sidebar", "→",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "Users begin seeing content sooner, especially for complex pages with multiple data sources."
          }
        ]
      },

      {
        heading: "Caching and SSR",
        blocks: [
          {
            type: "paragraph",
            content: "SSR doesn't always mean no caching. Production applications often combine SSR with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CDN caching",
              "Edge caching",
              "Route cache",
              "Fetch cache",
              "HTTP cache headers"
            ]
          },
          {
            type: "paragraph",
            content: "The goal is to keep data fresh while reducing unnecessary server work."
          }
        ]
      },

      {
        heading: "SEO Benefits",
        blocks: [
          {
            type: "paragraph",
            content: "SSR improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "crawlability",
              "indexing",
              "metadata visibility",
              "Open Graph previews",
              "structured data discovery"
            ]
          },
          {
            type: "paragraph",
            content: "Because HTML already contains meaningful content, search engines don't have to rely solely on JavaScript execution."
          }
        ]
      },

      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "SSR improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "First Contentful Paint (FCP)",
              "Largest Contentful Paint (LCP)",
              "perceived loading speed"
            ]
          },
          {
            type: "paragraph",
            content: "However, excessive server work can increase Time to First Byte (TTFB). Optimizing database queries, caching, and rendering logic is therefore essential."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Using SSR for completely static pages.",
              "Assuming SSR removes the need for hydration.",
              "Performing slow database queries during every request.",
              "Fetching unnecessary data.",
              "Ignoring caching opportunities.",
              "Returning extremely large payloads.",
              "Mixing sensitive server logic into Client Components."
            ]
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Keep server-side data fetching efficient.",
              "Cache where freshness requirements allow.",
              "Fetch only the fields you need.",
              "Use streaming and Suspense for slow sections.",
              "Keep Client Components small and focused.",
              "Monitor server response times.",
              "Prefer SSG or ISR for content that doesn't change frequently."
            ]
          }
        ]
      },

      {
        heading: "Real-world Rendering Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "A production-grade application rarely relies on SSR alone."
          },
          {
            type: "flow",
            steps: [
              "Homepage", "→",
              "SSG"
            ]
          },
          {
            type: "flow",
            steps: [
              "Blog Articles", "→",
              "ISR"
            ]
          },
          {
            type: "flow",
            steps: [
              "Product Details", "→",
              "SSR"
            ]
          },
          {
            type: "flow",
            steps: [
              "Shopping Cart", "→",
              "CSR"
            ]
          },
          {
            type: "flow",
            steps: [
              "User Dashboard", "→",
              "SSR + CSR"
            ]
          },
          {
            type: "flow",
            steps: [
              "Analytics Panel", "→",
              "CSR"
            ]
          },
          {
            type: "paragraph",
            content: "Each page uses the rendering strategy that best matches its requirements."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the biggest misconceptions is that SSR is always faster. In reality, SSR improves the time until meaningful content appears, not necessarily the total response time. Since the server must render every request, slow database queries or expensive computations can increase Time to First Byte (TTFB). Modern Next.js applications therefore treat SSR as one tool among many, not the default for every page. A common production architecture is to render SEO-critical or data-dependent content on the server while keeping highly interactive elements (filters, forms, charts, live widgets) as Client Components. Combined with streaming, Suspense, intelligent caching, and React Server Components, this hybrid approach delivers excellent SEO, fast perceived performance, and efficient resource usage."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side Rendering (SSR) is a rendering strategy in which the server generates a fully rendered HTML page for every incoming request before sending it to the browser. In Next.js, SSR can be implemented using getServerSideProps in the Pages Router or by using Server Components with dynamic data fetching in the App Router."
          },
          {
            type: "paragraph",
            content: "SSR provides excellent SEO, fast initial content display, improved social sharing, and always-fresh data, making it ideal for news sites, e-commerce pages, search results, dashboards, and personalized content. However, it also increases server workload and response-time complexity, so it should be used selectively alongside SSG, ISR, CSR, and React Server Components to build scalable, high-performance Next.js applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Static Site Generation (SSG)
============================= */
    "nextjs-static-site-generation": {
    title: "Static Site Generation (SSG)",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are expected to load instantly, provide excellent SEO, display fresh data, and work smoothly across different devices and internet speeds. Traditional client-side applications often struggle with these requirements because the browser must download JavaScript before displaying meaningful content."
          },
          {
            type: "paragraph",
            content: "Server-side Rendering (SSR) solves this problem by generating HTML on the server for every incoming request and sending a fully rendered page to the browser. The browser can display content immediately while React hydrates the page to make it interactive."
          },
          {
            type: "paragraph",
            content: "SSR is one of the most important rendering strategies in Next.js and is one of the primary reasons developers choose the framework for production applications."
          }
        ]
      },

      {
        heading: "What is Server-side Rendering (SSR)?",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side Rendering (SSR) is a rendering technique where the HTML page is generated on the server whenever a user requests a page."
          },
          {
            type: "paragraph",
            content: "Instead of sending an almost empty HTML file and relying on JavaScript to build the page, the server prepares the complete HTML beforehand."
          },
          {
            type: "paragraph",
            content: "The browser receives ready-to-display HTML, making the page appear much faster."
          },
          {
            type: "paragraph",
            content: "Traditional Client-side Rendering"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Browser requests page", "→",
              "Server sends almost empty HTML", "→",
              "Browser downloads JavaScript", "→",
              "React executes", "→",
              "API requests", "→",
              "Page finally appears"
            ]
          },
          {
            type: "paragraph",
            content: "Server-side Rendering"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Browser requests page", "→",
              "Server fetches required data", "→",
              "React renders HTML on server", "→",
              "Complete HTML sent to browser", "→",
              "Browser displays content instantly", "→",
              "React hydrates page", "→",
              "Interactive application"
            ]
          },
          {
            type: "paragraph",
            content: "The user sees useful content before JavaScript finishes downloading."
          }
        ]
      },

      {
        heading: "Why was SSR introduced?",
        blocks: [
          {
            type: "paragraph",
            content: "React originally focused heavily on Client-side Rendering."
          },
          {
            type: "paragraph",
            content: "Although CSR provides excellent user interactions after loading, it has several drawbacks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blank page while JavaScript loads",
              "Poor SEO",
              "Slow first contentful paint",
              "Large JavaScript bundles",
              "Delayed data fetching",
              "Worse experience on slow devices"
            ]
          },
          {
            type: "paragraph",
            content: "SSR addresses these issues by shifting rendering work from the browser to the server."
          }
        ]
      },

      {
        heading: "Benefits at a Glance",
        blocks: [
          {
            type: "table",
            headers: ["CSR", "SSR"],
            rows: [
              ["Browser renders page", "Server renders page"],
              ["Slow first load", "Fast first load"],
              ["Poor SEO", "Excellent SEO"],
              ["Blank screen initially", "Content visible immediately"],
              ["Heavy client work", "Server performs rendering"],
              ["Good after initial load", "Great first impression"]
            ]
          }
        ]
      },

      {
        heading: "How SSR Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think SSR simply means \"rendering on the server.\""
          },
          {
            type: "paragraph",
            content: "In reality, multiple steps occur behind the scenes."
          },
          {
            type: "paragraph",
            content: "Let's understand the entire pipeline."
          }
        ]
      },

      {
        heading: "Step 1 — Browser Requests Page",
        blocks: [
          {
            type: "output",
            content: "GET /products/15"
          },
          {
            type: "paragraph",
            content: "The browser sends an HTTP request to the Next.js server."
          }
        ]
      },

      {
        heading: "Step 2 — Next.js Receives Request",
        blocks: [
          {
            type: "paragraph",
            content: "The server identifies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Requested route",
              "Cookies",
              "Authentication",
              "Headers",
              "Query parameters",
              "Locale",
              "Middleware",
              "Dynamic route parameters"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "URL: /products/15",
              "Route parameter: id = 15"
            ]
          }
        ]
      },

      {
        heading: "Step 3 — Fetch Data",
        blocks: [
          {
            type: "paragraph",
            content: "The server fetches required data."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getProduct(id) {
    const res = await fetch(
        \`https://api.example.com/products/\${id}\`,
        {
            cache: "no-store"
        }
    )

    return res.json()
}`
          },
          {
            type: "paragraph",
            content: "Notice"
          },
          {
            type: "code",
            language: "javascript",
            content: `cache: "no-store"`
          },
          {
            type: "paragraph",
            content: "This tells Next.js that fresh data is required for every request."
          }
        ]
      },

      {
        heading: "Step 4 — React Builds HTML",
        blocks: [
          {
            type: "paragraph",
            content: "React executes all components on the server."
          },
          {
            type: "flow",
            steps: [
              "<ProductPage />", "→",
              "<ProductDetails />", "→",
              "<Reviews />", "→",
              "<Sidebar />", "→",
              "<Footer />"
            ]
          },
          {
            type: "paragraph",
            content: "Each component returns HTML."
          }
        ]
      },

      {
        heading: "Step 5 — HTML Generated",
        blocks: [
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<html>
  <body>

    <h1>Gaming Laptop</h1>

    <p>₹95,000</p>

    <button>Add to Cart</button>

  </body>
</html>`
          },
          {
            type: "paragraph",
            content: "Notice that this HTML already contains the product information."
          }
        ]
      },

      {
        heading: "Step 6 — Browser Receives HTML",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of an empty page, the browser instantly displays"
          },
          {
            type: "output",
            content: [
              "Gaming Laptop",
              "₹95,000",
              "Add to Cart"
            ]
          }
        ]
      },

      {
        heading: "Step 7 — JavaScript Downloads",
        blocks: [
          {
            type: "paragraph",
            content: "After HTML appears, Next.js downloads"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "Client Components",
              "Event handlers"
            ]
          }
        ]
      },

      {
        heading: "Step 8 — Hydration Begins",
        blocks: [
          {
            type: "paragraph",
            content: "React connects JavaScript with existing HTML."
          },
          {
            type: "paragraph",
            content: "Buttons become clickable. Forms work. Navigation works. Animations start. The page becomes interactive."
          }
        ]
      },

      {
        heading: "Complete SSR Rendering Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request page", "→",
              "Next.js Server", "→",
              "Middleware", "→",
              "Authentication", "→",
              "Read Cookies", "→",
              "Fetch Database/API", "→",
              "Render React Components", "→",
              "Generate HTML", "→",
              "Send HTML", "→",
              "Browser paints page", "→",
              "Download JavaScript", "→",
              "Hydration", "→",
              "Interactive Page"
            ]
          },
          {
            type: "paragraph",
            content: "This entire lifecycle usually completes within a few hundred milliseconds on production servers."
          }
        ]
      },

      {
        heading: "SSR vs Client-side Rendering (CSR)",
        blocks: [
          {
            type: "paragraph",
            content: "CSR Workflow"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "HTML", "→",
              "JavaScript", "→",
              "Execute React", "→",
              "Fetch API", "→",
              "Render UI"
            ]
          },
          {
            type: "paragraph",
            content: "Problems"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blank page initially",
              "Slow first paint",
              "Poor SEO"
            ]
          },
          {
            type: "paragraph",
            content: "SSR Workflow"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server fetches data", "→",
              "Server renders HTML", "→",
              "HTML sent", "→",
              "Instant page", "→",
              "Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better SEO",
              "Faster first paint",
              "Better accessibility",
              "Better social sharing"
            ]
          }
        ]
      },

      {
        heading: "Practical Comparison",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce product page."
          },
          {
            type: "paragraph",
            content: "CSR"
          },
          {
            type: "output",
            content: [
              "Loading...",
              "Loading...",
              "Loading..."
            ]
          },
          {
            type: "paragraph",
            content: "SSR"
          },
          {
            type: "output",
            content: [
              "Gaming Laptop",
              "₹95,000",
              "★★★★☆",
              "Buy Now"
            ]
          },
          {
            type: "paragraph",
            content: "Displayed immediately."
          }
        ]
      },

      {
        heading: "SSR vs Static Site Generation (SSG)",
        blocks: [
          {
            type: "paragraph",
            content: "Although both send HTML from the server, they are fundamentally different."
          },
          {
            type: "table",
            headers: ["SSR", "SSG"],
            rows: [
              ["Generated on every request", "Generated during build"],
              ["Fresh data", "Cached data"],
              ["Slower than SSG", "Extremely fast"],
              ["Dynamic content", "Static content"],
              ["Higher server cost", "Very low server cost"],
              ["Great for dashboards", "Great for blogs"]
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "cards",
            items: [
              {
                title: "News Website",
                description: "Breaking News. Should always show the latest information. Use SSR."
              },
              {
                title: "Documentation Website",
                description: "Installation Guide. Rarely changes. Use SSG."
              }
            ]
          }
        ]
      },

      {
        heading: "SSR in App Router",
        blocks: [
          {
            type: "paragraph",
            content: "The App Router uses Server Components by default, making SSR feel natural."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function ProductsPage() {

    const products = await fetch(
        "https://api.example.com/products",
        {
            cache: "no-store"
        }
    ).then(res => res.json())

    return (

        <div>

            {products.map(product => (

                <h2 key={product.id}>
                    {product.name}
                </h2>

            ))}

        </div>

    )
}`
          },
          {
            type: "paragraph",
            content: "No getServerSideProps() is required."
          },
          {
            type: "paragraph",
            content: "The component itself runs on the server."
          },
          {
            type: "paragraph",
            content: "Why is this better?"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less boilerplate.",
              "Cleaner code.",
              "Better developer experience.",
              "Improved streaming support."
            ]
          }
        ]
      },

      {
        heading: "SSR in Pages Router",
        blocks: [
          {
            type: "paragraph",
            content: "Pages Router uses getServerSideProps()."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getServerSideProps() {

    const res = await fetch(
        "https://api.example.com/products"
    )

    const products = await res.json()

    return {

        props: {

            products

        }

    }

}

export default function Products({ products }) {

    return (

        <div>

            {products.map(product => (

                <h2 key={product.id}>
                    {product.name}
                </h2>

            ))}

        </div>

    )

}`
          },
          {
            type: "paragraph",
            content: "Every request runs getServerSideProps()."
          }
        ]
      },

      {
        heading: "App Router vs Pages Router for SSR",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "App Router", "Pages Router"],
            rows: [
              ["Server Components", "✅", "❌"],
              ["getServerSideProps", "❌", "✅"],
              ["Streaming", "✅", "Limited"],
              ["Nested Layouts", "✅", "Partial"],
              ["Better caching", "✅", "Limited"],
              ["Future of Next.js", "✅", "Legacy-compatible"]
            ]
          },
          {
            type: "paragraph",
            content: "New projects should generally prefer the App Router."
          }
        ]
      },

      {
        heading: "Dynamic Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic Rendering means the page is generated separately for every request rather than reused from a prebuilt version."
          },
          {
            type: "paragraph",
            content: "Typical triggers include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Personalized content",
              "User-specific dashboards",
              "Request headers",
              "Cookies",
              "Authentication",
              "Frequently changing data",
              "cache: \"no-store\"",
              "Dynamic APIs like cookies() or headers()"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { cookies } from "next/headers";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  const user = await fetch(
    \`https://api.example.com/users/\${userId}\`,
    {
      cache: "no-store",
    }
  ).then(res => res.json());

  return <h1>Welcome, {user.name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Each user receives personalized HTML generated on the server."
          }
        ]
      },

      {
        heading: "Request Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Every SSR request follows a predictable sequence:"
          },
          {
            type: "flow",
            steps: [
              "Client Request", "→",
              "Middleware", "→",
              "Route Matching", "→",
              "Authentication", "→",
              "Read Cookies & Headers", "→",
              "Fetch Data", "→",
              "Render React Tree", "→",
              "Generate HTML", "→",
              "Send Response", "→",
              "Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this lifecycle helps debug rendering, authentication, and performance issues."
          }
        ]
      },

      {
        heading: "Data Fetching in SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Data fetching is central to SSR because the server must gather all necessary information before generating HTML."
          },
          {
            type: "paragraph",
            content: "App Router"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function UsersPage() {
  const users = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  ).then(res => res.json());

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
          },
          {
            type: "paragraph",
            content: "Pages Router"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getServerSideProps() {
  const users = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then(res => res.json());

  return {
    props: { users },
  };
}`
          },
          {
            type: "paragraph",
            content: "Always handle loading and error states appropriately when fetching external data."
          }
        ]
      },

      {
        heading: "Caching Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike static pages, SSR often requires fresh data, but Next.js provides flexible caching controls."
          },
          {
            type: "paragraph",
            content: "Common options:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url, {
  cache: "force-cache",
});`
          },
          {
            type: "paragraph",
            content: "Uses cached data whenever possible."
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url, {
  cache: "no-store",
});`
          },
          {
            type: "paragraph",
            content: "Always fetches fresh data (true dynamic rendering)."
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url, {
  next: {
    revalidate: 60,
  },
});`
          },
          {
            type: "paragraph",
            content: "Revalidates cached data every 60 seconds (Incremental Static Regeneration behavior)."
          },
          {
            type: "paragraph",
            content: "Choose the strategy based on how frequently your data changes."
          }
        ]
      },

      {
        heading: "Streaming with SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional SSR waits until the entire page is ready before sending HTML."
          },
          {
            type: "paragraph",
            content: "Streaming SSR improves this by sending completed parts of the page as soon as they are available."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Header Ready", "→",
              "Send Header", "→",
              "Sidebar Ready", "→",
              "Send Sidebar", "→",
              "Products Loading...", "→",
              "Send Product List", "→",
              "Footer Ready", "→",
              "Send Footer"
            ]
          },
          {
            type: "paragraph",
            content: "The user begins interacting with visible sections without waiting for slower components."
          },
          {
            type: "paragraph",
            content: "Using React Suspense:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Suspense } from "react";
import ProductList from "./ProductList";

export default function Page() {
  return (
    <>
      <h1>Products</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Streaming significantly improves perceived performance, especially for pages with slow database queries."
          }
        ]
      },

      {
        heading: "Hydration",
        blocks: [
          {
            type: "paragraph",
            content: "Hydration is the process of attaching JavaScript to server-rendered HTML."
          },
          {
            type: "paragraph",
            content: "Initially, the browser receives static HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<button>Add to Cart</button>`
          },
          {
            type: "paragraph",
            content: "It looks like a button but doesn't respond to clicks yet."
          },
          {
            type: "paragraph",
            content: "After hydration:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Click handlers are attached.",
              "React state becomes active.",
              "Forms work.",
              "Navigation works.",
              "Client Components become interactive."
            ]
          },
          {
            type: "paragraph",
            content: "Hydration bridge:"
          },
          {
            type: "flow",
            steps: [
              "Server HTML", "→",
              "Browser Displays Content", "→",
              "React Downloads", "→",
              "Hydration", "→",
              "Interactive Application"
            ]
          },
          {
            type: "paragraph",
            content: "Without hydration, the page would remain a static document."
          }
        ]
      },

      {
        heading: "Real-world Examples",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "E-commerce Product Page",
                description: "Product details, Current inventory, Latest pricing, User reviews. SSR ensures customers always see the latest information."
              },
              {
                title: "Banking Dashboard",
                description: "Account balance, Recent transactions, Notifications. Each request generates personalized content securely."
              },
              {
                title: "News Portal",
                description: "Latest headlines and breaking news should be rendered on every request to keep readers up to date."
              },
              {
                title: "Flight Booking",
                description: "Seat availability, Ticket prices, Flight status. These values change rapidly, making SSR a suitable rendering strategy."
              }
            ]
          }
        ]
      },

      {
        heading: "Advantages of SSR",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Excellent SEO because crawlers receive complete HTML.",
              "Faster First Contentful Paint (FCP).",
              "Better Largest Contentful Paint (LCP).",
              "Fresh data on every request.",
              "Improved social media previews.",
              "Better accessibility for users with JavaScript limitations.",
              "Reduced work on low-powered client devices.",
              "Supports authentication and personalized pages naturally.",
              "Works well with Server Components and streaming."
            ]
          }
        ]
      },

      {
        heading: "Disadvantages of SSR",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Increased server workload.",
              "Slightly higher Time to First Byte (TTFB) than fully static pages.",
              "Every request may trigger database or API calls.",
              "Higher infrastructure costs under heavy traffic.",
              "More complex caching strategies.",
              "Slow external APIs directly impact response time.",
              "Not ideal for content that rarely changes."
            ]
          }
        ]
      },

      {
        heading: "When to Use SSR",
        blocks: [
          {
            type: "paragraph",
            content: "SSR is a good choice when your page needs fresh or user-specific data."
          },
          {
            type: "paragraph",
            content: "Recommended use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User dashboards",
              "Banking applications",
              "Stock market data",
              "Sports scores",
              "Flight booking systems",
              "Hotel booking platforms",
              "Weather dashboards",
              "Personalized homepages",
              "E-commerce checkout",
              "Admin panels",
              "Analytics dashboards",
              "News websites with constantly changing content"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid SSR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation websites",
              "Portfolio sites",
              "Marketing landing pages",
              "Blogs with infrequent updates",
              "Static company websites"
            ]
          },
          {
            type: "paragraph",
            content: "These are often better served by SSG or ISR."
          }
        ]
      },

      {
        heading: "Common Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. What is Server-side Rendering in Next.js?",
                answer: "Server-side Rendering generates HTML on the server for each incoming request before sending it to the browser, ensuring fresh content and improved SEO."
              },
              {
                question: "2. How is SSR different from CSR?",
                answer: "In CSR, the browser downloads JavaScript first and then renders the UI. In SSR, the server sends fully rendered HTML first, and the browser hydrates it afterward."
              },
              {
                question: "3. How is SSR different from SSG?",
                answer: "SSR generates HTML for every request using the latest data, whereas SSG generates HTML at build time and serves the same prebuilt page until it is rebuilt or revalidated."
              },
              {
                question: "4. What is hydration?",
                answer: "Hydration is the process where React attaches JavaScript behavior to server-rendered HTML, making the page interactive without rebuilding the DOM from scratch."
              },
              {
                question: "5. Which API enables SSR in the Pages Router?",
                answer: "getServerSideProps()."
              },
              {
                question: "6. How do you enable dynamic rendering in the App Router?",
                answer: "By using uncached data fetching (for example, cache: \"no-store\"), or by using dynamic APIs such as cookies() or headers(), which require rendering on each request."
              },
              {
                question: "7. What are the drawbacks of SSR?",
                answer: "Higher server load, increased infrastructure cost, potentially slower Time to First Byte compared to static pages, and dependency on backend response times."
              }
            ]
          }
        ]
      },

      {
        heading: "Lesson Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side Rendering is one of the most powerful rendering strategies in Next.js, allowing the server to generate complete HTML for every request. This results in fresh data, excellent SEO, improved initial load performance, and a better user experience for dynamic applications. By understanding the SSR lifecycle, data fetching, caching, streaming, and hydration, you can choose the right rendering strategy for modern web applications and build scalable, production-ready Next.js projects."
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "SEO Benefits of SSR",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest reasons why companies choose Server-side Rendering (SSR) is its excellent support for Search Engine Optimization (SEO)."
          },
          {
            type: "paragraph",
            content: "Search engines like Google, Bing, DuckDuckGo, Yahoo, and many social media crawlers analyze the HTML they receive from your server. If important content is generated only after JavaScript executes (as in CSR), crawlers may not immediately see all the page content."
          },
          {
            type: "paragraph",
            content: "SSR solves this problem by sending fully rendered HTML directly from the server."
          }
        ]
      },

      {
        heading: "Why SEO Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine you have an online shopping website. Product Page:"
          },
          {
            type: "output",
            content: [
              "Gaming Laptop",
              "₹89,999",
              "★★★★★",
              "In Stock"
            ]
          },
          {
            type: "paragraph",
            content: "With SSR, this content already exists inside the HTML. Google can immediately crawl:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Product title",
              "Description",
              "Headings",
              "Images",
              "Metadata",
              "Structured data",
              "Internal links"
            ]
          },
          {
            type: "paragraph",
            content: "Without waiting for JavaScript execution."
          }
        ]
      },

      {
        heading: "CSR SEO Problem",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser Request", "→",
              "Empty HTML", "→",
              "Download JS", "→",
              "Execute React", "→",
              "Render Content"
            ]
          },
          {
            type: "paragraph",
            content: "Crawler may initially see:"
          },
          {
            type: "code",
            language: "html",
            content: `<div id="root"></div>`
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Gaming Laptop</h1>`
          }
        ]
      },

      {
        heading: "SSR SEO Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Crawler", "→",
              "Next.js Server", "→",
              "HTML Generated", "→",
              "Complete HTML Sent", "→",
              "Crawler Reads Content", "→",
              "Indexed Faster"
            ]
          }
        ]
      },

      {
        heading: "SEO Advantages of SSR",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Better indexing",
              "Faster crawling",
              "Rich search snippets",
              "Better Open Graph previews",
              "Better Twitter Cards",
              "Improved accessibility",
              "Better page titles",
              "Better metadata support",
              "Improved social sharing",
              "Better international SEO"
            ]
          }
        ]
      },

      {
        heading: "SSR Works Perfectly With Metadata API",
        blocks: [
          {
            type: "paragraph",
            content: "App Router example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const metadata = {

    title: "Gaming Laptop",

    description:
        "Latest gaming laptops at affordable prices."

}`
          },
          {
            type: "paragraph",
            content: "Metadata is rendered on the server. Search engines receive it immediately."
          }
        ]
      },

      {
        heading: "Performance Analysis",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners believe SSR always makes websites faster. This is not always true."
          },
          {
            type: "paragraph",
            content: "SSR improves perceived performance, but depending on the situation, some metrics improve while others may slightly worsen. Let's understand why."
          },
          {
            type: "paragraph",
            content: "Traditional CSR:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Empty HTML", "→",
              "Download JS", "→",
              "Run JS", "→",
              "Fetch API", "→",
              "Display UI"
            ]
          },
          {
            type: "paragraph",
            content: "SSR:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Fetches Data", "→",
              "Render HTML", "→",
              "Send HTML", "→",
              "Display Page", "→",
              "Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "The browser receives visible content much earlier."
          }
        ]
      },

      {
        heading: "Performance Characteristics",
        blocks: [
          {
            type: "table",
            headers: ["Metric", "CSR", "SSR"],
            rows: [
              ["Initial content", "Slow", "Fast"],
              ["SEO", "Poor", "Excellent"],
              ["JavaScript execution", "Heavy", "Reduced initially"],
              ["First Paint", "-", "Better with SSR ✔"],
              ["Interactive Time", "Slightly slower", "Due to hydration"],
              ["Dynamic data", "Client fetch", "Server fetch"]
            ]
          },
          {
            type: "paragraph",
            content: "Server Load: SSR moves rendering work from Browser to Server. This improves user experience but increases server workload."
          }
        ]
      },

      {
        heading: "Trade-offs",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Faster first page",
              "Better SEO",
              "Fresh data",
              "Better accessibility"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "More server CPU",
              "Higher hosting cost",
              "Higher TTFB if backend is slow"
            ]
          }
        ]
      },

      {
        heading: "Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "Google measures website quality using Core Web Vitals. SSR directly influences these metrics."
          },
          {
            type: "paragraph",
            content: "1. Largest Contentful Paint (LCP)"
          },
          {
            type: "paragraph",
            content: "Measures: How quickly the largest visible element appears. SSR improves LCP because HTML already contains visible content."
          },
          {
            type: "paragraph",
            content: "2. First Contentful Paint (FCP)"
          },
          {
            type: "paragraph",
            content: "Measures: When the first visible content appears. SSR generally produces a much earlier FCP."
          },
          {
            type: "paragraph",
            content: "3. Cumulative Layout Shift (CLS)"
          },
          {
            type: "paragraph",
            content: "Measures: Unexpected layout movement. SSR helps because content dimensions are known before rendering."
          },
          {
            type: "paragraph",
            content: "Example (Bad):"
          },
          {
            type: "flow",
            steps: [
              "Loading...", "→",
              "Image appears", "→",
              "Entire page shifts"
            ]
          },
          {
            type: "paragraph",
            content: "Example (Good):"
          },
          {
            type: "flow",
            steps: [
              "Image space reserved", "→",
              "Image loads", "→",
              "No layout movement"
            ]
          },
          {
            type: "paragraph",
            content: "4. Interaction to Next Paint (INP)"
          },
          {
            type: "paragraph",
            content: "Measures: How responsive the page is after user interaction. Hydration affects INP. Large Client Components can delay interaction."
          }
        ]
      },

      {
        heading: "Core Web Vitals Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Metric", "CSR", "SSR"],
            rows: [
              ["LCP", "Medium", "Excellent"],
              ["FCP", "Medium", "Excellent"],
              ["CLS", "Depends", "Better"],
              ["INP", "Good after load", "Depends on hydration"]
            ]
          }
        ]
      },

      {
        heading: "SSR and Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "SSR is extremely useful for authenticated applications."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Banking",
              "Dashboard",
              "Admin panel",
              "CRM",
              "Hospital system"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of fetching user data after page load, the server can authenticate the request before generating HTML."
          },
          {
            type: "paragraph",
            content: "Authentication Flow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Read Cookie", "→",
              "Validate Session", "→",
              "Fetch User", "→",
              "Render Dashboard", "→",
              "Send HTML"
            ]
          }
        ]
      },

      {
        heading: "Reading Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "App Router:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { cookies } from "next/headers";

export default async function Dashboard() {

    const cookieStore = await cookies();

    const token = cookieStore.get("token");

    return (
        <h1>Dashboard</h1>
    );

}`
          },
          {
            type: "paragraph",
            content: "Cookies are only available on the server during rendering."
          }
        ]
      },

      {
        heading: "Redirect Unauthorized Users",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import { redirect } from "next/navigation";

if (!token) {

    redirect("/login");

}`
          },
          {
            type: "paragraph",
            content: "The user never sees protected content."
          }
        ]
      },

      {
        heading: "Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "Network requests can fail. Database connections can break. External APIs may become unavailable. SSR should always handle these situations gracefully."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default async function Users() {

    try {

        const users = await fetch(
            "https://api.example.com/users",
            {
                cache: "no-store"
            }
        ).then(res => res.json());

        return <div>{users.length}</div>;

    }

    catch {

        return <h2>Unable to load users.</h2>;

    }

}`
          }
        ]
      },

      {
        heading: "Using Error Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "App Router supports error.js. Example:"
          },
          {
            type: "tree",
            content: `[app]
  └── [dashboard]
       └── error.js`
          },
          {
            type: "paragraph",
            content: "If rendering fails, Next.js automatically displays the nearest error boundary."
          }
        ]
      },

      {
        heading: "Server Components Relationship",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest misconceptions is: Server Components and SSR are the same thing. They are related but not identical."
          },
          {
            type: "paragraph",
            content: "Server Component: Runs on the server. May be Static, Dynamic, Cached."
          },
          {
            type: "paragraph",
            content: "SSR: Means HTML is generated for every request."
          },
          {
            type: "paragraph",
            content: "Relationship:"
          },
          {
            type: "flow",
            steps: [
              "Server Components", "→",
              "Can participate in", "→",
              "SSR"
            ]
          },
          {
            type: "paragraph",
            content: "Not every Server Component performs SSR. Some Server Components are statically rendered during build time."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default async function Products() {

    const products = await fetch(
        "...",
        {
            cache: "no-store"
        }
    ).then(res => res.json());

    return (
        <div>
            {products.length}
        </div>
    );

}`
          },
          {
            type: "paragraph",
            content: "Because of cache: \"no-store\", this Server Component participates in SSR."
          }
        ]
      },

      {
        heading: "Edge Runtime with SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of running SSR only from a centralized server, Next.js can execute rendering closer to users using the Edge Runtime."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Nearest Edge Server", "→",
              "SSR", "→",
              "HTML Returned"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lower latency",
              "Faster global response",
              "Better international performance",
              "Reduced round-trip time"
            ]
          },
          {
            type: "paragraph",
            content: "Ideal for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Personalized pages",
              "Authentication",
              "Geo-based content",
              "A/B testing",
              "Localization"
            ]
          },
          {
            type: "paragraph",
            content: "Keep in mind that the Edge Runtime has a different execution environment than Node.js, so some Node-specific APIs and packages are not supported."
          }
        ]
      },

      {
        heading: "Deployment Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "SSR applications require a runtime capable of executing server code. Common deployment platforms include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Vercel",
              "Self-hosted Node.js servers",
              "Docker containers",
              "Cloud platforms (AWS, Azure, GCP)",
              "Serverless functions (depending on architecture)"
            ]
          },
          {
            type: "paragraph",
            content: "Things to consider before deployment:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Environment variables",
              "Secure API keys",
              "Database connection pooling",
              "Logging and monitoring",
              "CDN for static assets",
              "Image optimization",
              "Caching strategy",
              "Automatic scaling"
            ]
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Cache whenever possible: Avoid making every request fully dynamic. Use caching strategically."
          },
          {
            type: "paragraph",
            content: "Keep Server Components Large: Keep most rendering on the server. Move only interactive UI into Client Components."
          },
          {
            type: "paragraph",
            content: "Minimize Client JavaScript: Less hydration means Faster page, Better INP, Smaller bundle."
          },
          {
            type: "paragraph",
            content: "Optimize Database Queries: Never fetch unnecessary data."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT *
FROM users`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT
name,
email
FROM users`
          },
          {
            type: "paragraph",
            content: "Parallelize Requests:"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(A);

await fetch(B);

await fetch(C);`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [a, b, c] = await Promise.all([
    fetch(A),
    fetch(B),
    fetch(C),
]);`
          },
          {
            type: "paragraph",
            content: "Stream Slow Sections: Wrap slower components in Suspense so the browser can display available content immediately."
          },
          {
            type: "paragraph",
            content: "Secure Sensitive Data: Never expose secrets to Client Components. Keep authentication logic, tokens, and private API keys on the server."
          },
          {
            type: "paragraph",
            content: "Monitor Performance: Regularly analyze LCP, INP, CLS, TTFB, Server response times, Cache hit rates."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Making Every Page SSR: Static pages do not need SSR. Use SSG or ISR when appropriate.",
              "Fetching Too Much Data: Only fetch the information required for the current page.",
              "Ignoring Caching: Rendering every request without need wastes server resources.",
              "Putting Heavy Logic in Client Components: Expensive computations belong on the server whenever possible.",
              "Blocking the Entire Page: Waiting for every request before sending HTML creates unnecessary delays. Prefer streaming for slower sections.",
              "Forgetting Error Handling: Every external request should account for failures and unexpected responses.",
              "Mixing Secrets into Client Code: Never expose database credentials, tokens, or private API keys in Client Components."
            ]
          }
        ]
      },

      {
        heading: "Real-world Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A large e-commerce website might organize SSR like this:"
          },
          {
            type: "output",
            content: [
              "                 User",
              "                   │",
              "                   ▼",
              "            CDN / Edge Network",
              "                   │",
              "                   ▼",
              "             Next.js Server",
              "                   │",
              "      ┌────────────┼────────────┐",
              "      ▼            ▼            ▼",
              " Authentication  Product API   CMS API",
              "      │            │            │",
              "      └────────────┼────────────┘",
              "                   ▼",
              "             Database Layer",
              "                   │",
              "                   ▼",
              "        Render React Components",
              "                   │",
              "                   ▼",
              "          Stream HTML Response",
              "                   │",
              "                   ▼",
              "         Browser Paint + Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "This architecture combines authentication, multiple data sources, caching, and streaming to deliver fast, personalized pages."
          }
        ]
      },

      {
        heading: "DevSphere Special Notes",
        blocks: [
          {
            type: "note",
            content: "💡 Choose SSR Only When It Adds Value: SSR is powerful, but it is not the default answer for every page. Ask yourself: Does the content change frequently? Is the content personalized? Does the page require authentication? Is SEO important? Must users always see the latest data? If the answer is yes, SSR is likely a good fit. Otherwise, consider SSG or ISR for better scalability.\n\nThink in Terms of Rendering Strategies: Modern Next.js applications often combine multiple strategies: Marketing pages → SSG, Blog posts → ISR, Product catalog → SSG + Revalidation, Product details → SSR or ISR, User dashboard → SSR, Interactive widgets → Client Components. Using the right strategy for each page leads to the best balance of performance, freshness, and cost.\n\nOptimize the Entire Request Lifecycle: Improving SSR is not just about React code. Focus on: Fast database queries, Efficient API responses, Smart caching, Small JavaScript bundles, Streaming slow sections, Image and font optimization, CDN usage. A fast server with inefficient data fetching can still produce a slow application."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side Rendering (SSR) is one of the most important rendering strategies in Next.js for delivering fresh, personalized, and SEO-friendly content. By generating HTML on the server for each request, SSR enables faster initial rendering, better search engine visibility, and seamless integration with authentication, dynamic data, and modern React Server Components. Features such as streaming, intelligent caching, and Edge Runtime support further enhance its capabilities for production-scale applications."
          },
          {
            type: "paragraph",
            content: "While SSR provides significant benefits, it also introduces additional server workload and infrastructure considerations. Choosing SSR thoughtfully—only where dynamic, request-specific rendering is required—and combining it with SSG, ISR, and Client Components when appropriate allows you to build high-performance, scalable Next.js applications that offer an excellent user experience without unnecessary complexity."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Incremental Static Regeneration (ISR)
============================= */
    "nextjs-incremental-static-regeneration": {
    title: "Incremental Static Regeneration (ISR)",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications face a difficult challenge:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users expect pages to load instantly.",
              "Businesses expect content to stay up-to-date.",
              "Search engines expect fully rendered HTML.",
              "Developers want scalable applications."
            ]
          },
          {
            type: "paragraph",
            content: "Traditional rendering methods struggle to satisfy all these requirements simultaneously."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Static Site Generation (SSG) creates incredibly fast pages, but content becomes outdated after deployment.",
              "Server-side Rendering (SSR) always serves fresh content but executes server-side code for every request, increasing server load and response time."
            ]
          },
          {
            type: "paragraph",
            content: "Incremental Static Regeneration (ISR) is the solution introduced by Next.js to combine the best aspects of both SSG and SSR."
          },
          {
            type: "paragraph",
            content: "ISR allows static pages to remain extremely fast while automatically updating them in the background whenever content changes—without rebuilding the entire application. Instead of choosing between speed and freshness, ISR provides both."
          }
        ]
      },

      {
        heading: "What is Incremental Static Regeneration (ISR)?",
        blocks: [
          {
            type: "paragraph",
            content: "Incremental Static Regeneration (ISR) is a rendering strategy where:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pages are generated as static HTML.",
              "The generated page is cached.",
              "Users receive the cached version instantly.",
              "After a specified time interval, Next.js regenerates the page in the background.",
              "Future visitors receive the newly generated page."
            ]
          },
          {
            type: "paragraph",
            content: "In simple words:"
          },
          {
            type: "paragraph",
            content: "ISR creates static pages that can automatically update themselves without requiring a complete site rebuild. Unlike traditional SSG, pages are incrementally regenerated only when needed, making large websites much easier to maintain."
          }
        ]
      },

      {
        heading: "Why Was ISR Introduced?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "800,000 products",
              "Product prices changing every hour",
              "Thousands of visitors every minute"
            ]
          },
          {
            type: "paragraph",
            content: "Using SSG: Every product page is generated during build."
          },
          {
            type: "flow",
            steps: [
              "800,000 pages", "→",
              "Deploy", "→",
              "Prices change", "→",
              "Entire site must rebuild", "→",
              "Deploy again"
            ]
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Extremely long build times",
              "Frequent deployments",
              "Outdated content"
            ]
          },
          {
            type: "paragraph",
            content: "Using SSR: Every request generates HTML."
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Server fetches database", "→",
              "Creates HTML", "→",
              "Returns page"
            ]
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slower response",
              "Higher server cost",
              "More database queries"
            ]
          },
          {
            type: "paragraph",
            content: "Using ISR"
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Receives cached page instantly", "→",
              "Cache expires", "→",
              "Background regeneration", "→",
              "New cache stored"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fast like SSG",
              "Fresh like SSR",
              "Minimal server workload"
            ]
          },
          {
            type: "paragraph",
            content: "This makes ISR ideal for websites with frequently changing content."
          }
        ]
      },

      {
        heading: "Why \"Incremental\"?",
        blocks: [
          {
            type: "paragraph",
            content: "The word Incremental means: Only the affected pages are regenerated—not the entire website."
          },
          {
            type: "paragraph",
            content: "Suppose your blog contains: 5000 articles. Only one article is updated."
          },
          {
            type: "paragraph",
            content: "Traditional SSG:"
          },
          {
            type: "flow",
            steps: [
              "Rebuild", "→",
              "5000 pages"
            ]
          },
          {
            type: "paragraph",
            content: "ISR:"
          },
          {
            type: "flow",
            steps: [
              "Regenerate", "→",
              "Only one page"
            ]
          },
          {
            type: "paragraph",
            content: "This dramatically reduces deployment time."
          }
        ]
      },

      {
        heading: "How ISR Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding the internal workflow is important because many interview questions focus on it. Imagine this page: /products/iphone-17 with:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 60;`
          },
          {
            type: "paragraph",
            content: "The page lifecycle looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Build Time", "→",
              "Generate HTML", "→",
              "Store in cache", "→",
              "Visitor requests page", "→",
              "Serve cached HTML", "→",
              "60 seconds pass", "→",
              "Next visitor requests page", "→",
              "Old page served immediately", "→",
              "Background regeneration starts", "→",
              "Cache replaced", "→",
              "Future visitors receive updated page"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something important: The visitor who triggers regeneration still receives the old cached page. The new version becomes available only after regeneration finishes successfully. This prevents users from waiting while pages regenerate."
          }
        ]
      },

      {
        heading: "Complete ISR Rendering Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Let's examine the complete lifecycle."
          },
          {
            type: "paragraph",
            content: "Step 1: Build Time. Next.js creates static HTML."
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "HTML Generated", "→",
              "Cache Stored"
            ]
          },
          {
            type: "paragraph",
            content: "Step 2: First Visitor"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "CDN", "→",
              "Cached HTML", "→",
              "Instant Response"
            ]
          },
          {
            type: "paragraph",
            content: "No server rendering occurs."
          },
          {
            type: "paragraph",
            content: "Step 3: Cache Valid. If revalidate is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `revalidate = 300`
          },
          {
            type: "paragraph",
            content: "Any visitor within five minutes receives: Cached HTML. No regeneration."
          },
          {
            type: "paragraph",
            content: "Step 4: Cache Expired"
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Cached page returned", "→",
              "Background regeneration begins"
            ]
          },
          {
            type: "paragraph",
            content: "Notice: The visitor never waits."
          },
          {
            type: "paragraph",
            content: "Step 5: New Cache. After regeneration:"
          },
          {
            type: "flow",
            steps: [
              "Old Cache", "→",
              "Deleted", "→",
              "New Cache", "→",
              "Future requests use new version"
            ]
          }
        ]
      },

      {
        heading: "ISR vs SSG",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "SSG", "ISR"],
            rows: [
              ["Static HTML", "✅", "✅"],
              ["Automatic updates", "❌", "✅"],
              ["Rebuild entire app", "Yes", "No"],
              ["Fast response", "✅", "✅"],
              ["Fresh content", "❌", "✅"],
              ["Background regeneration", "❌", "✅"]
            ]
          }
        ]
      },

      {
        heading: "ISR vs SSR",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "SSR", "ISR"],
            rows: [
              ["HTML generated", "Every request", "Occasionally"],
              ["Response speed", "Medium", "Very Fast"],
              ["Server load", "High", "Low"],
              ["SEO", "Excellent", "Excellent"],
              ["Freshness", "Immediate", "After revalidation"],
              ["Scalability", "Moderate", "Excellent"]
            ]
          }
        ]
      },

      {
        heading: "ISR in the Pages Router",
        blocks: [
          {
            type: "paragraph",
            content: "The Pages Router uses getStaticProps(). Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products");
    const products = await res.json();

    return {
        props: {
            products,
        },

        revalidate: 60,
    };
}`
          },
          {
            type: "paragraph",
            content: "This means:"
          },
          {
            type: "flow",
            steps: [
              "Generate page", "→",
              "Cache", "→",
              "After 60 seconds", "→",
              "Regenerate automatically"
            ]
          },
          {
            type: "paragraph",
            content: "Complete Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Products({ products }) {
    return (
        <>
            <h1>Products</h1>

            {products.products.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </>
    );
}

export async function getStaticProps() {

    const res = await fetch(
        "https://dummyjson.com/products"
    );

    const products = await res.json();

    return {

        props: {
            products,
        },

        revalidate: 120,

    };
}`
          },
          {
            type: "paragraph",
            content: "Every two minutes the page becomes eligible for regeneration."
          }
        ]
      },

      {
        heading: "ISR in the App Router",
        blocks: [
          {
            type: "paragraph",
            content: "The App Router simplifies ISR considerably. Instead of getStaticProps, simply export:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 60;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export const revalidate = 60;

export default async function ProductsPage() {

    const res = await fetch(
        "https://dummyjson.com/products"
    );

    const products = await res.json();

    return (

        <main>

            <h1>Products</h1>

            {products.products.map(product => (

                <p key={product.id}>
                    {product.title}
                </p>

            ))}

        </main>

    );
}`
          },
          {
            type: "paragraph",
            content: "Next.js automatically caches the page and regenerates it after 60 seconds. Much simpler than the Pages Router."
          }
        ]
      },

      {
        heading: "Understanding revalidate",
        blocks: [
          {
            type: "paragraph",
            content: "The revalidate value tells Next.js: \"This page may be regenerated after this many seconds.\""
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 300;`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "5 minutes", "→",
              "Page becomes stale", "→",
              "Next request triggers regeneration", "→",
              "Background update"
            ]
          }
        ]
      },

      {
        heading: "Different Revalidate Values",
        blocks: [
          {
            type: "paragraph",
            content: "60 seconds"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 60;`
          },
          {
            type: "paragraph",
            content: "Ideal for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "News",
              "Stock prices",
              "Product catalogs"
            ]
          },
          {
            type: "paragraph",
            content: "3600 seconds"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 3600;`
          },
          {
            type: "paragraph",
            content: "Ideal for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation",
              "Blogs",
              "Company pages"
            ]
          },
          {
            type: "paragraph",
            content: "One day"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 86400;`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Landing pages",
              "Marketing pages",
              "About page"
            ]
          }
        ]
      },

      {
        heading: "How Fetch Works with ISR",
        blocks: [
          {
            type: "paragraph",
            content: "In the App Router:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {

    next: {

        revalidate: 300,

    },

});`
          },
          {
            type: "paragraph",
            content: "Notice this is different from page-level ISR. Here only the fetched data gets revalidated."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const products = await fetch(

    "/api/products",

    {

        next: {

            revalidate: 120,

        },

    }

);`
          },
          {
            type: "paragraph",
            content: "This provides more granular caching."
          }
        ]
      },

      {
        heading: "Cache Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest misconceptions about ISR is that it regenerates pages immediately after the timer expires. It does not."
          },
          {
            type: "paragraph",
            content: "Timeline:"
          },
          {
            type: "flow",
            steps: [
              "12:00", "→",
              "Page Generated", "→",
              "12:01", "→",
              "Visitor", "→",
              "Cached page", "→",
              "12:05", "→",
              "Still cached", "→",
              "12:06", "→",
              "Cache expired", "→",
              "Visitor arrives", "→",
              "Old page served", "→",
              "Background regeneration", "→",
              "12:07", "→",
              "New cache available"
            ]
          },
          {
            type: "paragraph",
            content: "The timer simply marks the page as stale. Regeneration occurs only when another request arrives."
          }
        ]
      },

      {
        heading: "Build Process with ISR",
        blocks: [
          {
            type: "paragraph",
            content: "During deployment:"
          },
          {
            type: "flow",
            steps: [
              "Source Code", "→",
              "next build", "→",
              "Static pages generated", "→",
              "Deployment", "→",
              "Pages cached", "→",
              "Users visit", "→",
              "ISR updates pages over time"
            ]
          },
          {
            type: "paragraph",
            content: "Notice: Future updates require no rebuild. Only the modified page is regenerated."
          }
        ]
      },

      {
        heading: "Real-world Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Real-world Example 1: News Website"
          },
          {
            type: "flow",
            steps: [
              "Home", "→",
              "Latest News", "→",
              "Updated every minute"
            ]
          },
          {
            type: "paragraph",
            content: "Using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 60;`
          },
          {
            type: "paragraph",
            content: "Visitors receive:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fast page loads",
              "Fresh articles",
              "Excellent SEO"
            ]
          },
          {
            type: "paragraph",
            content: "Real-world Example 2: E-commerce"
          },
          {
            type: "flow",
            steps: [
              "Product", "→",
              "Price", "→",
              "Inventory", "→",
              "Reviews"
            ]
          },
          {
            type: "paragraph",
            content: "Updated every five minutes."
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 300;`
          },
          {
            type: "paragraph",
            content: "No rebuild required when inventory changes."
          },
          {
            type: "paragraph",
            content: "Real-world Example 3: Blog"
          },
          {
            type: "paragraph",
            content: "A technology blog publishes: 10 articles/day"
          },
          {
            type: "paragraph",
            content: "Instead of rebuilding: 5000 pages"
          },
          {
            type: "paragraph",
            content: "ISR updates only: 10 modified pages. Saving enormous build time."
          }
        ]
      },

      {
        heading: "Advantages of ISR",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "✅ Extremely fast page loads",
              "✅ Excellent SEO",
              "✅ Automatic updates",
              "✅ Low server cost",
              "✅ Works well with CDNs",
              "✅ Smaller deployments",
              "✅ Better scalability",
              "✅ Reduced build time",
              "✅ Background regeneration",
              "✅ Suitable for millions of pages"
            ]
          }
        ]
      },

      {
        heading: "Disadvantages of ISR",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Content is not instantly updated.",
              "❌ First visitor after expiration still receives stale content.",
              "❌ Not suitable for real-time dashboards.",
              "❌ Requires thoughtful cache duration.",
              "❌ More complex caching strategy than pure SSG."
            ]
          }
        ]
      },

      {
        heading: "When Should You Use ISR?",
        blocks: [
          {
            type: "paragraph",
            content: "ISR is an excellent choice for content that changes periodically but does not require real-time updates."
          },
          {
            type: "paragraph",
            content: "Use ISR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce product pages",
              "Blogs and news websites",
              "Documentation sites",
              "Company websites",
              "Marketing pages",
              "Portfolio websites",
              "CMS-driven applications",
              "Recipe websites",
              "Course platforms",
              "Real estate listings",
              "Travel and booking catalogs",
              "Frequently updated FAQs"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid ISR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Live sports scores",
              "Chat applications",
              "Financial trading dashboards",
              "Real-time analytics",
              "Collaborative editing tools",
              "Instant messaging systems"
            ]
          },
          {
            type: "paragraph",
            content: "These applications are better suited to SSR with live data, WebSockets, or client-side fetching."
          }
        ]
      },

      {
        heading: "Common Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Q1. What problem does ISR solve?",
                answer: "ISR solves the limitation of Static Site Generation by allowing static pages to update automatically without rebuilding the entire application, providing both high performance and fresh content."
              },
              {
                question: "Q2. Does ISR regenerate pages exactly when the revalidate time expires?",
                answer: "No. The revalidate value marks the page as stale. The next incoming request after expiration triggers background regeneration while still serving the existing cached page to that user."
              },
              {
                question: "Q3. Which router supports ISR?",
                answer: "Both the Pages Router (using getStaticProps with revalidate) and the App Router (using export const revalidate or fetch revalidation) support Incremental Static Regeneration."
              },
              {
                question: "Q4. Is ISR good for SEO?",
                answer: "Yes. Since ISR serves pre-rendered HTML to search engines, it provides SEO benefits similar to Static Site Generation while keeping content reasonably fresh."
              }
            ]
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "Incremental Static Regeneration (ISR) — Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, you learned how ISR generates static pages, caches them, and regenerates them in the background using the revalidate option. However, modern applications often require more control than simply waiting for a timer to expire. Imagine an e-commerce website where a product price changes immediately after an admin updates it. Waiting 10 minutes for the page to regenerate would show outdated information to users."
          },
          {
            type: "paragraph",
            content: "This is where On-demand Revalidation comes into play. Instead of relying solely on time-based regeneration, Next.js allows developers to regenerate pages or cached data instantly whenever important events occur."
          },
          {
            type: "paragraph",
            content: "In this part, you'll learn how Next.js performs selective cache invalidation, the differences between revalidatePath() and revalidateTag(), how ISR behaves with CDNs, how it improves SEO and Core Web Vitals, and the production practices followed by large-scale Next.js applications."
          }
        ]
      },

      {
        heading: "On-demand Revalidation",
        blocks: [
          {
            type: "paragraph",
            content: "What is On-demand Revalidation?"
          },
          {
            type: "paragraph",
            content: "Normally, ISR waits until the revalidate duration expires before updating a page. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 3600;`
          },
          {
            type: "paragraph",
            content: "This means the page becomes eligible for regeneration after one hour. But what if your CMS publishes a breaking news article just five minutes after deployment? Waiting an hour is unacceptable."
          },
          {
            type: "paragraph",
            content: "Instead, the CMS can notify Next.js immediately:"
          },
          {
            type: "flow",
            steps: [
              "CMS Update", "→",
              "Notify Next.js", "→",
              "Invalidate cache", "→",
              "Generate new page", "→",
              "Serve fresh content"
            ]
          },
          {
            type: "paragraph",
            content: "This process is called On-demand Revalidation. Instead of waiting for time-based regeneration, the application explicitly tells Next.js to refresh its cache."
          }
        ]
      },

      {
        heading: "Why On-demand Revalidation Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose an online store updates product prices."
          },
          {
            type: "flow",
            steps: [
              "Old Price", "→",
              "₹50,000", "→",
              "Admin changes", "→",
              "₹44,999"
            ]
          },
          {
            type: "paragraph",
            content: "If ISR waits 30 minutes:"
          },
          {
            type: "flow",
            steps: [
              "Visitors", "→",
              "Still see ₹50,000"
            ]
          },
          {
            type: "paragraph",
            content: "Not ideal. Instead:"
          },
          {
            type: "flow",
            steps: [
              "Database Updated", "→",
              "Revalidate Product Page", "→",
              "New HTML Generated", "→",
              "Visitors see ₹44,999"
            ]
          },
          {
            type: "paragraph",
            content: "This provides fresh content almost immediately while preserving ISR performance."
          }
        ]
      },

      {
        heading: "Time-based vs On-demand Revalidation",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Time-based ISR", "On-demand ISR"],
            rows: [
              ["Trigger", "Timer", "Developer action"],
              ["Update timing", "After interval", "Immediate"],
              ["Best for", "Blogs, documentation", "CMS, e-commerce, dashboards"],
              ["Developer control", "Limited", "Full"],
              ["Cache freshness", "Delayed", "Instant"]
            ]
          }
        ]
      },

      {
        heading: "Understanding Cache Invalidation",
        blocks: [
          {
            type: "paragraph",
            content: "The word invalidate simply means: Remove an outdated cache so a fresh version can replace it. Imagine this:"
          },
          {
            type: "flow",
            steps: [
              "Old HTML", "→",
              "Stored in Cache", "→",
              "Content Changes", "→",
              "Cache Invalidated", "→",
              "Fresh HTML Generated", "→",
              "New Cache Stored"
            ]
          },
          {
            type: "paragraph",
            content: "Without invalidation, users continue seeing stale content."
          }
        ]
      },

      {
        heading: "revalidatePath()",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most useful functions introduced in the App Router is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `revalidatePath()`
          },
          {
            type: "paragraph",
            content: "It regenerates a specific route. Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { revalidatePath } from "next/cache";

revalidatePath("/products");`
          },
          {
            type: "paragraph",
            content: "The specified page is marked for regeneration. Example: Suppose an admin updates a product."
          },
          {
            type: "code",
            language: "javascript",
            content: `"use server";

import { revalidatePath } from "next/cache";

export async function updateProduct() {

    await database.update();

    revalidatePath("/products");

}`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Admin Saves Product", "→",
              "Database Updated", "→",
              "revalidatePath()", "→",
              "Cache Removed", "→",
              "Next Request", "→",
              "Fresh HTML Generated"
            ]
          },
          {
            type: "paragraph",
            content: "Very efficient."
          }
        ]
      },

      {
        heading: "Revalidating Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic pages work exactly the same."
          },
          {
            type: "code",
            language: "javascript",
            content: `revalidatePath("/products/iphone-17");`
          },
          {
            type: "paragraph",
            content: "Only this page regenerates. Not: Entire Website. Only: Product Page. This selective regeneration makes ISR highly scalable."
          }
        ]
      },

      {
        heading: "Revalidating Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `revalidatePath("/dashboard/orders");`
          },
          {
            type: "paragraph",
            content: "Only:"
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "Orders Page"
            ]
          },
          {
            type: "paragraph",
            content: "gets regenerated. Everything else remains cached."
          }
        ]
      },

      {
        heading: "revalidateTag()",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes multiple pages depend on the same data. Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Homepage → Featured Products",
              "Product Page → Related Products",
              "Category Page → Product List"
            ]
          },
          {
            type: "paragraph",
            content: "All three pages display product information. Calling revalidatePath() three times is inefficient. Instead, use cache tags."
          },
          {
            type: "paragraph",
            content: "Adding Tags"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(API_URL, {

    next: {

        tags: ["products"],

    },

});`
          },
          {
            type: "paragraph",
            content: "Now the fetched data belongs to the tag: products."
          },
          {
            type: "paragraph",
            content: "Revalidating the Tag"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { revalidateTag } from "next/cache";

revalidateTag("products");`
          },
          {
            type: "paragraph",
            content: "Result: Every page using tags: [\"products\"] gets refreshed automatically."
          }
        ]
      },

      {
        heading: "When Should You Use revalidateTag()?",
        blocks: [
          {
            type: "paragraph",
            content: "Perfect for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Product catalogs",
              "Categories",
              "CMS content",
              "Blog articles",
              "User profiles",
              "Inventory",
              "Pricing",
              "Reviews"
            ]
          },
          {
            type: "paragraph",
            content: "One command updates every related page."
          }
        ]
      },

      {
        heading: "revalidatePath() vs revalidateTag()",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "revalidatePath", "revalidateTag"],
            rows: [
              ["Targets", "Route", "Cached data"],
              ["Scope", "One page", "Multiple pages"],
              ["Flexibility", "Moderate", "High"],
              ["Best for", "Individual pages", "Shared data"]
            ]
          }
        ]
      },

      {
        heading: "Cache Layers in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think ISR only has one cache. Actually, several caches work together."
          },
          {
            type: "flow",
            steps: [
              "Browser Cache", "→",
              "CDN Cache", "→",
              "Next.js Router Cache", "→",
              "Data Cache", "→",
              "Full Route Cache"
            ]
          },
          {
            type: "paragraph",
            content: "Each serves a different purpose. Understanding them helps diagnose caching issues."
          },
          {
            type: "paragraph",
            content: "Data Cache: Stores fetched data."
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "fetch()", "→",
              "Data Cache"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of querying the database repeatedly, cached data is reused until invalidated."
          },
          {
            type: "paragraph",
            content: "Full Route Cache: Stores Generated HTML, React Server Component payload."
          },
          {
            type: "flow",
            steps: [
              "Page Generated", "→",
              "HTML Cached", "→",
              "Next Visitor", "→",
              "Instant Response"
            ]
          },
          {
            type: "paragraph",
            content: "This is the primary cache used by ISR."
          },
          {
            type: "paragraph",
            content: "Router Cache: The App Router also caches routes in the browser."
          },
          {
            type: "flow",
            steps: [
              "User Visits", "→",
              "Dashboard", "→",
              "Navigate Back", "→",
              "Instant Navigation"
            ]
          },
          {
            type: "paragraph",
            content: "No additional server request. This improves navigation speed."
          }
        ]
      },

      {
        heading: "CDN Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "ISR works exceptionally well with Content Delivery Networks (CDNs). Example:"
          },
          {
            type: "flow",
            steps: [
              "Origin Server", "→",
              "Generate HTML", "→",
              "CDN", "→",
              "Worldwide Edge Servers", "→",
              "Visitors"
            ]
          },
          {
            type: "paragraph",
            content: "Once regenerated:"
          },
          {
            type: "flow",
            steps: [
              "New HTML", "→",
              "CDN Updated", "→",
              "Fast Global Delivery"
            ]
          },
          {
            type: "paragraph",
            content: "This combination provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Low latency",
              "Reduced server load",
              "Global scalability"
            ]
          }
        ]
      },

      {
        heading: "ISR and CDN Cache Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Nearest CDN", "→",
              "Cached Page", "→",
              "Cache Expired", "→",
              "Origin Regenerates", "→",
              "CDN Updated", "→",
              "Future Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Only one regeneration occurs. Thousands of users still receive fast responses."
          }
        ]
      },

      {
        heading: "ISR and SEO",
        blocks: [
          {
            type: "paragraph",
            content: "Search engines love prerendered HTML. ISR provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fully rendered HTML",
              "Crawlable pages",
              "Fast loading",
              "Fresh content"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Googlebot", "→",
              "Receives HTML", "→",
              "Indexes Content", "→",
              "Ranks Website"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike CSR, search engines do not need to wait for JavaScript to build the page."
          },
          {
            type: "paragraph",
            content: "SEO Benefits: ISR improves Crawlability, Page indexing, Fresh metadata, Open Graph updates, Product availability, Updated pricing, Structured data freshness, Sitemap accuracy."
          },
          {
            type: "paragraph",
            content: "This makes ISR excellent for blogs, documentation, and e-commerce."
          }
        ]
      },

      {
        heading: "ISR and Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Since HTML is already generated:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Downloads HTML", "→",
              "Displays Page"
            ]
          },
          {
            type: "paragraph",
            content: "No expensive rendering occurs on every request. Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lower CPU usage",
              "Lower memory usage",
              "Faster Time to First Byte",
              "Better scalability"
            ]
          }
        ]
      },

      {
        heading: "Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "ISR contributes positively to Google's Core Web Vitals."
          },
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP): Pre-rendered HTML allows meaningful content to appear quickly. Result: Lower LCP."
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS): Since HTML already contains the page structure, unexpected layout shifts are minimized. Result: Better CLS."
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP): ISR reduces server processing, allowing faster page interaction after hydration. Result: Improved INP."
          }
        ]
      },

      {
        heading: "Real-world Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A large e-commerce application often looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "CDN", "→",
              "Next.js App", "→",
              "Data Cache", "→",
              "Database", "→",
              "CMS", "→",
              "Admin Dashboard", "→",
              "revalidateTag()", "→",
              "Fresh Product Pages"
            ]
          },
          {
            type: "paragraph",
            content: "Millions of users can access the site while only modified pages are regenerated."
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "1. Choose sensible revalidation times: Not every page needs revalidate = 10; Instead: News → 60 seconds, Products → 300 seconds, Blogs → 1 hour, Documentation → 1 day. Choose values based on how frequently content changes."
          },
          {
            type: "paragraph",
            content: "2. Prefer On-demand Revalidation for CMS: If editors manually publish content, trigger revalidation after publishing instead of using very short intervals."
          },
          {
            type: "paragraph",
            content: "3. Group related data using tags: Instead of refreshing multiple pages individually, revalidateTag(\"products\"); is cleaner and easier to maintain."
          },
          {
            type: "paragraph",
            content: "4. Avoid unnecessary regeneration: Frequently regenerating pages wastes server resources and diminishes ISR's performance benefits."
          },
          {
            type: "paragraph",
            content: "5. Monitor cache performance: Track Cache hit ratio, Regeneration frequency, Server response time, Build duration, CDN cache efficiency. Monitoring helps identify bottlenecks before they impact users."
          },
          {
            type: "paragraph",
            content: "6. Combine ISR with Server Components: Server Components reduce JavaScript sent to the browser, while ISR keeps pages fast and fresh. Together, they provide an excellent balance of performance and maintainability."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Using ISR for real-time applications",
                description: "Bad choice for Live chat, Multiplayer games, Stock trading, Live sports scores. These require real-time updates, not periodic regeneration."
              },
              {
                title: "Setting extremely short revalidation times",
                description: "revalidate = 1; This causes constant regeneration and defeats the purpose of caching."
              },
              {
                title: "Forgetting to invalidate after CMS updates",
                description: "If content changes but no revalidation occurs, users continue seeing stale pages until the next scheduled regeneration."
              },
              {
                title: "Revalidating the entire site unnecessarily",
                description: "Instead of invalidating hundreds of pages, regenerate only the routes or data that actually changed."
              },
              {
                title: "Ignoring cache relationships",
                description: "A product update may affect: Product page, Category page, Homepage, Search results. Tag-based revalidation helps keep all related pages consistent."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-world Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a blog powered by a headless CMS:"
          },
          {
            type: "flow",
            steps: [
              "Author Publishes Article", "→",
              "CMS Webhook", "→",
              "Next.js API Route", "→",
              "revalidateTag(\"posts\")", "→",
              "Cache Invalidated", "→",
              "Next Request", "→",
              "Fresh HTML Generated", "→",
              "CDN Updated", "→",
              "Readers Receive Updated Article"
            ]
          },
          {
            type: "paragraph",
            content: "No full deployment is required, yet visitors always receive recent content."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many developers think ISR is simply \"SSG with a timer.\" That is a major misconception. ISR is a cache management strategy rather than just a rendering strategy. The true strength of ISR lies in its intelligent cache invalidation system, selective regeneration, and seamless integration with modern caching layers. Understanding when pages are regenerated, how caches interact, and which invalidation method to use (revalidate, revalidatePath(), or revalidateTag()) is what separates intermediate Next.js developers from advanced ones. When designing an application, think beyond individual pages. Consider the relationships between data, routes, caches, and user experience. A well-planned ISR strategy can drastically reduce infrastructure costs while delivering near real-time content to users around the world."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Incremental Static Regeneration (ISR) enables Next.js applications to serve fast, SEO-friendly static pages while keeping content fresh through intelligent background regeneration. In addition to time-based revalidation using the revalidate option, Next.js provides powerful on-demand revalidation APIs such as revalidatePath() for refreshing specific routes and revalidateTag() for invalidating shared cached data across multiple pages. Combined with layered caching, CDN integration, and React Server Components, ISR delivers excellent scalability, reduced server load, and improved Core Web Vitals. By choosing appropriate revalidation strategies, organizing cache tags thoughtfully, and following production best practices, developers can build applications that remain both highly performant and consistently up to date without the cost of full site rebuilds."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Partial Prerendering (PPR)
============================= */
    "nextjs-partial-prerendering": {
    title: "Partial Prerendering (PPR)",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications rarely consist entirely of static or dynamic content. Consider the homepage of a large e-commerce website[cite: 1]:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The navigation bar rarely changes.[cite: 1]",
              "The footer is almost always static.[cite: 1]",
              "Product categories change occasionally.[cite: 1]",
              "Personalized recommendations change for every user.[cite: 1]",
              "Shopping cart information is unique for each visitor.[cite: 1]",
              "Flash sale timers update every second.[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "If the entire page is rendered statically (SSG), personalized content becomes impossible[cite: 1]. If the entire page is rendered dynamically (SSR), the browser waits for everything—even the static parts[cite: 1]."
          },
          {
            type: "paragraph",
            content: "This creates an important question:"
          },
          {
            type: "paragraph",
            content: "Why should users wait for dynamic content before seeing static content?[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Next.js introduced Partial Prerendering (PPR) to solve this problem[cite: 1]. Instead of choosing between static and dynamic rendering, PPR allows a single page to contain both[cite: 1]. Static parts are prerendered ahead of time, while dynamic sections are streamed into the page only when they are ready[cite: 1]. It combines the performance of Static Site Generation with the flexibility of Server-side Rendering[cite: 1]."
          }
        ]
      },

      {
        heading: "What is Partial Prerendering (PPR)?",
        blocks: [
          {
            type: "paragraph",
            content: "Partial Prerendering (PPR) is a rendering strategy in Next.js that allows part of a page to be statically generated while other parts are rendered dynamically at request time[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Instead of treating an entire page as either static or dynamic, PPR divides the page into smaller sections[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Some sections are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Generated during build time[cite: 1]",
              "Cached[cite: 1]",
              "Instantly served[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Other sections are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Generated on demand[cite: 1]",
              "Streamed later[cite: 1]",
              "Personalized for every user[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Think of a webpage as a puzzle[cite: 1]."
          },
          {
            type: "output",
            content: [
              "+-------------------------------------+",
              "| Header          (Static)            |",
              "+-------------------------------------+",
              "| Hero Banner     (Static)            |",
              "+-------------------------------------+",
              "| Product List    (Dynamic)           |",
              "+-------------------------------------+",
              "| User Cart       (Dynamic)           |",
              "+-------------------------------------+",
              "| Footer          (Static)            |",
              "+-------------------------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Only the dynamic pieces are rendered later[cite: 1]. Everything else appears instantly[cite: 1]."
          }
        ]
      },

      {
        heading: "Why PPR was Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "To appreciate PPR, we first need to understand the limitations of previous rendering strategies[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Problem 1: Server-side Rendering (SSR)[cite: 1]"
          },
          {
            type: "paragraph",
            content: "With SSR:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request", "→",
              "Server renders EVERYTHING", "→",
              "Return HTML", "→",
              "Browser displays page"
            ]
          },
          {
            type: "paragraph",
            content: "Imagine a page like this: Navbar, Hero, Latest Products, Recommendations, Footer[cite: 1]."
          },
          {
            type: "paragraph",
            content: "If Recommendations require three seconds to load:"
          },
          {
            type: "flow",
            steps: [
              "Entire page waits", "→",
              "3 seconds", "→",
              "Everything appears together"
            ]
          },
          {
            type: "paragraph",
            content: "Even the static navbar must wait[cite: 1]. This creates unnecessary delays[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Problem 2: Static Site Generation (SSG)[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Static Site Generation is incredibly fast[cite: 1]."
          },
          {
            type: "flow",
            steps: [
              "Build", "→",
              "Generate HTML", "→",
              "Deploy", "→",
              "Serve instantly"
            ]
          },
          {
            type: "paragraph",
            content: "However, Suppose today's homepage contains: Top Deals[cite: 1]. Tomorrow: New Deals[cite: 1]."
          },
          {
            type: "paragraph",
            content: "The static page becomes outdated[cite: 1]. You need: New build, New deployment[cite: 1]. This is not practical for frequently changing content[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Problem 3: Incremental Static Regeneration (ISR)[cite: 1]"
          },
          {
            type: "paragraph",
            content: "ISR improves SSG by regenerating pages periodically[cite: 1]. However, Imagine: Navbar, Hero, Recommendations, Footer[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Even though only recommendations are dynamic, ISR still regenerates the entire page[cite: 1]. This wastes resources[cite: 1]. Sometimes only one small section actually changes[cite: 1]."
          }
        ]
      },

      {
        heading: "The Evolution of Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js rendering evolved like this:"
          },
          {
            type: "flow",
            steps: [
              "SSR", "→",
              "Everything Dynamic", "→",
              "SSG", "→",
              "Everything Static", "→",
              "ISR", "→",
              "Entire Page Regenerated", "→",
              "PPR", "→",
              "Only Dynamic Parts Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "PPR represents the next step in rendering evolution[cite: 1]."
          }
        ]
      },

      {
        heading: "What PPR Actually Is",
        blocks: [
          {
            type: "paragraph",
            content: "Partial Prerendering mixes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Static Rendering[cite: 1]",
              "Dynamic Rendering[cite: 1]",
              "Streaming[cite: 1]",
              "React Suspense[cite: 1]",
              "Server Components[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Inside one page[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Instead of this:"
          },
          {
            type: "flow",
            steps: [
              "Entire Page", "→",
              "Static"
            ]
          },
          {
            type: "paragraph",
            content: "Or this:"
          },
          {
            type: "flow",
            steps: [
              "Entire Page", "→",
              "Dynamic"
            ]
          },
          {
            type: "paragraph",
            content: "We now have:"
          },
          {
            type: "flow",
            steps: [
              "Page", "→",
              "Static Parts",
              "+",
              "Dynamic Parts"
            ]
          },
          {
            type: "paragraph",
            content: "This gives developers much finer control[cite: 1]."
          }
        ]
      },

      {
        heading: "Static Shell + Dynamic Islands",
        blocks: [
          {
            type: "paragraph",
            content: "This is the core concept of PPR[cite: 1]. A page consists of: Static Shell[cite: 1]."
          },
          {
            type: "paragraph",
            content: "The shell includes content that rarely changes[cite: 1]. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation[cite: 1]",
              "Logo[cite: 1]",
              "Footer[cite: 1]",
              "Hero section[cite: 1]",
              "Static banners[cite: 1]",
              "Documentation text[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "These are prerendered[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Dynamic Islands[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Dynamic Islands contain request-specific content[cite: 1]. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Notifications[cite: 1]",
              "Shopping cart[cite: 1]",
              "User profile[cite: 1]",
              "Weather[cite: 1]",
              "Comments[cite: 1]",
              "Recommendations[cite: 1]",
              "Live stock prices[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "These are rendered separately[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Visualization:"
          },
          {
            type: "output",
            content: [
              "+--------------------------------------+",
              "| Logo                Static           |",
              "+--------------------------------------+",
              "| Hero Banner         Static           |",
              "+--------------------------------------+",
              "| Featured Products   Static           |",
              "+--------------------------------------+",
              "| Cart Widget         Dynamic          |",
              "+--------------------------------------+",
              "| Personalized Ads    Dynamic          |",
              "+--------------------------------------+",
              "| Footer              Static           |",
              "+--------------------------------------+"
            ]
          }
        ]
      },

      {
        heading: "How PPR Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Internally, Next.js separates rendering into multiple stages[cite: 1]."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Serve Static Shell", "→",
              "Browser starts rendering", "→",
              "Dynamic components begin rendering", "→",
              "React Suspense waits", "→",
              "Streaming starts", "→",
              "Dynamic HTML injected", "→",
              "Page complete"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something important: The browser never waits for the slow parts before displaying the page[cite: 1]."
          }
        ]
      },

      {
        heading: "Internal Rendering Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine this page: Header, Hero, Dashboard, Footer[cite: 1]. Dashboard needs database queries[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Traditional SSR:"
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Hero", "→",
              "Dashboard", "→",
              "Footer", "→",
              "Return HTML"
            ]
          },
          {
            type: "paragraph",
            content: "PPR:"
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Hero", "→",
              "Footer", "→",
              "Immediately Sent", "→",
              "Dashboard", "→",
              "Generated Later", "→",
              "Streamed"
            ]
          },
          {
            type: "paragraph",
            content: "Huge performance improvement[cite: 1]."
          }
        ]
      },

      {
        heading: "Request Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Let's examine every step[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Step 1: User requests: /dashboard[cite: 1]. Next.js receives request[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Step 2: Next.js checks the static shell[cite: 1]. Already available[cite: 1]."
          },
          {
            type: "flow",
            steps: [
              "Cached Shell", "→",
              "Ready"
            ]
          },
          {
            type: "paragraph",
            content: "Step 3: Immediately send: Header, Sidebar, Footer, Layout[cite: 1]. Browser starts painting[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Step 4: Dynamic components begin rendering[cite: 1]. Example:"
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "Orders", "→",
              "Revenue", "→",
              "Notifications"
            ]
          },
          {
            type: "paragraph",
            content: "Step 5: Each dynamic section streams independently[cite: 1]. The page becomes interactive much sooner[cite: 1]."
          }
        ]
      },

      {
        heading: "Rendering Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional SSR:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Entire Page", "→",
              "Return HTML", "→",
              "Browser Displays"
            ]
          },
          {
            type: "paragraph",
            content: "PPR:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Return Static Shell", "→",
              "Browser Paint", "→",
              "Dynamic Rendering", "→",
              "Streaming", "→",
              "Complete UI"
            ]
          },
          {
            type: "paragraph",
            content: "Notice: Rendering and displaying happen simultaneously[cite: 1]."
          }
        ]
      },

      {
        heading: "Suspense Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "PPR relies heavily on React Suspense[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Without Suspense:"
          },
          {
            type: "flow",
            steps: [
              "Entire Page Waits"
            ]
          },
          {
            type: "paragraph",
            content: "With Suspense:"
          },
          {
            type: "flow",
            steps: [
              "Static Page", "→",
              "Fallback UI", "→",
              "Dynamic Content", "→",
              "Replace Fallback"
            ]
          },
          {
            type: "paragraph",
            content: "This is exactly how loading skeletons work[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Suspense } from "react";
import ProductList from "./ProductList";

export default function Home() {

    return (

        <main>

            <Hero />

            <Suspense
                fallback={<LoadingProducts />}
            >

                <ProductList />

            </Suspense>

        </main>

    );

}`
          },
          {
            type: "paragraph",
            content: "The Hero renders immediately[cite: 1]. ProductList streams later[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Another Example: Dashboard"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<OrdersSkeleton />}>

    <Orders />

</Suspense>`
          },
          {
            type: "paragraph",
            content: "Users immediately see: Orders, Loading...[cite: 1]. Then: Orders, ✓ Data Loaded[cite: 1]. This greatly improves perceived performance[cite: 1]."
          }
        ]
      },

      {
        heading: "Streaming with PPR",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming means: Send HTML before the whole page finishes rendering[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Without streaming:"
          },
          {
            type: "flow",
            steps: [
              "Render Everything", "→",
              "Send Everything"
            ]
          },
          {
            type: "paragraph",
            content: "With streaming:"
          },
          {
            type: "flow",
            steps: [
              "Render Header", "→",
              "Send", "→",
              "Render Hero", "→",
              "Send", "→",
              "Render Products", "→",
              "Send", "→",
              "Render Cart", "→",
              "Send"
            ]
          },
          {
            type: "paragraph",
            content: "The browser progressively builds the page[cite: 1]."
          }
        ]
      },

      {
        heading: "Why Streaming Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine: Navbar 20 ms, Hero 15 ms, Footer 10 ms, Recommendations 2500 ms[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Traditional SSR:"
          },
          {
            type: "flow",
            steps: [
              "2545 ms", "→",
              "Everything Appears"
            ]
          },
          {
            type: "paragraph",
            content: "PPR:"
          },
          {
            type: "flow",
            steps: [
              "45 ms", "→",
              "Page Visible", "→",
              "Recommendations Later"
            ]
          },
          {
            type: "paragraph",
            content: "The user feels the site is much faster[cite: 1]."
          }
        ]
      },

      {
        heading: "Enabling Partial Prerendering",
        blocks: [
          {
            type: "paragraph",
            content: "PPR is available in supported versions of Next.js and can be enabled experimentally or through the appropriate configuration depending on your Next.js version[cite: 1]."
          },
          {
            type: "paragraph",
            content: "A typical configuration looks like:"
          },
          {
            type: "code",
            language: "javascript",
            content: `// next.config.js

module.exports = {

    experimental: {

        ppr: true,

    },

};`
          },
          {
            type: "paragraph",
            content: "After enabling it, use Server Components, Suspense boundaries, and static layouts to allow Next.js to determine which parts can be prerendered and which should be streamed dynamically[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Note: The exact configuration may vary depending on the Next.js version you are using, as PPR has evolved from an experimental feature toward broader platform support[cite: 1]."
          }
        ]
      },

      {
        heading: "PPR Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A simplified architecture looks like this[cite: 1]:"
          },
          {
            type: "output",
            content: [
              "                 Browser",
              "                    │",
              "                    ▼",
              "             Request Page",
              "                    │",
              "                    ▼",
              "              Next.js Server",
              "                    │",
              "      ┌─────────────┴─────────────┐",
              "      │                           │",
              "      ▼                           ▼",
              " Static Shell Cache       Dynamic Renderer",
              "      │                           │",
              "      ▼                           ▼",
              "  HTML Response            Database/API",
              "      │                           │",
              "      └─────────────┬─────────────┘",
              "                    ▼",
              "            React Streaming",
              "                    │",
              "                    ▼",
              "               Browser Updates"
            ]
          },
          {
            type: "paragraph",
            content: "The static shell is served immediately, while dynamic sections are fetched, rendered, and streamed independently[cite: 1]."
          }
        ]
      },

      {
        heading: "Real-world Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Real-world Example 1: E-commerce Homepage"
          },
          {
            type: "flow",
            steps: [
              "Logo", "→",
              "Categories", "→",
              "Hero Banner", "→",
              "Trending Products", "→",
              "Personalized Offers", "→",
              "Shopping Cart"
            ]
          },
          {
            type: "paragraph",
            content: "Static: Logo, Categories, Hero, Trending Products[cite: 1]. Dynamic: Offers, Cart[cite: 1]. Users start browsing immediately while personalized sections continue loading[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Real-world Example 2: Dashboard"
          },
          {
            type: "paragraph",
            content: "Static: Sidebar, Navigation, Footer[cite: 1]. Dynamic: Revenue, Orders, Analytics, Notifications[cite: 1]. Each widget streams independently[cite: 1]. A slow analytics query does not delay the rest of the dashboard[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Real-world Example 3: News Website"
          },
          {
            type: "paragraph",
            content: "Static: Header, Navigation, Breaking News Layout[cite: 1]. Dynamic: Live Comments, Trending Stories, Weather, Stock Market[cite: 1]. The reader can start reading the article instantly while live widgets load progressively[cite: 1]."
          }
        ]
      },

      {
        heading: "Advantages of Partial Prerendering",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Extremely fast initial page load[cite: 1]",
              "Static content appears immediately[cite: 1]",
              "Dynamic content remains personalized[cite: 1]",
              "Better user experience[cite: 1]",
              "Improved perceived performance[cite: 1]",
              "Lower server workload for static sections[cite: 1]",
              "Excellent SEO for prerendered content[cite: 1]",
              "Reduced Time to First Byte for the shell[cite: 1]",
              "Works naturally with React Suspense and Server Components[cite: 1]",
              "Ideal for modern hybrid applications[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Disadvantages of Partial Prerendering",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "More advanced architecture to understand[cite: 1]",
              "Requires thoughtful placement of Suspense boundaries[cite: 1]",
              "Not every page benefits from PPR[cite: 1]",
              "Poorly designed dynamic boundaries can reduce its advantages[cite: 1]",
              "Debugging streamed content may be more complex than traditional SSR[cite: 1]",
              "Some third-party libraries may need adjustments to work optimally with streaming[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "When Should You Use PPR?",
        blocks: [
          {
            type: "paragraph",
            content: "PPR is most beneficial for pages that combine large static sections with smaller dynamic areas[cite: 1]."
          },
          {
            type: "paragraph",
            content: "Use PPR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce homepages[cite: 1]",
              "Personalized shopping experiences[cite: 1]",
              "SaaS dashboards[cite: 1]",
              "News portals[cite: 1]",
              "Social media feeds[cite: 1]",
              "Learning platforms[cite: 1]",
              "Documentation websites with user-specific widgets[cite: 1]",
              "Admin panels[cite: 1]",
              "Analytics dashboards[cite: 1]",
              "Travel booking sites[cite: 1]",
              "Streaming platforms[cite: 1]",
              "Finance portals with live market widgets[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid PPR for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Entirely static marketing pages (SSG is sufficient)[cite: 1]",
              "Fully real-time applications where almost every section updates continuously[cite: 1]",
              "Very small applications with little dynamic content[cite: 1]"
            ]
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "Partial Prerendering (PPR) - Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned what Partial Prerendering is, why it exists, how it works internally, and how it combines static and dynamic rendering."
          },
          {
            type: "paragraph",
            content: "Now we'll explore how PPR behaves in real production applications, how it interacts with other rendering strategies, its SEO and performance implications, and the best practices followed by experienced Next.js developers."
          }
        ]
      },

      {
        heading: "PPR with Server Components",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest strengths of Partial Prerendering is that it is built around React Server Components (RSC)."
          },
          {
            type: "paragraph",
            content: "In fact, PPR wouldn't exist without Server Components. Think of the page like this:"
          },
          {
            type: "tree",
            content: `Entire Page
Static Shell
│
├── Header (Server Component)
├── Navbar (Server Component)
├── Hero Section (Server Component)
├── Product Description (Server Component)
│
└── Dynamic Island
     └── Recommendations`
          },
          {
            type: "paragraph",
            content: "Server Components can be:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "prerendered",
              "streamed",
              "cached",
              "partially rendered"
            ]
          },
          {
            type: "paragraph",
            content: "This makes them ideal for PPR."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <Suspense fallback={<LoadingRecommendations />}>
        <Recommendations />
      </Suspense>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Header is prerendered",
              "Hero is prerendered",
              "Recommendations streams later"
            ]
          },
          {
            type: "paragraph",
            content: "Everything happens on the server."
          }
        ]
      },

      {
        heading: "Why Server Components fit PPR perfectly",
        blocks: [
          {
            type: "paragraph",
            content: "Server Components:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "have zero client JavaScript",
              "can access databases directly",
              "fetch data securely",
              "reduce bundle size",
              "stream naturally"
            ]
          },
          {
            type: "paragraph",
            content: "PPR simply delays rendering only the slow Server Components."
          }
        ]
      },

      {
        heading: "PPR with Client Components",
        blocks: [
          {
            type: "paragraph",
            content: "Client Components also work with PPR."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Page", "→",
              "Static", "→",
              "Server Component", "→",
              "Client Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<Loading />}>
    <ShoppingCart />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "Inside ShoppingCart"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client"

export default function ShoppingCart() {
   const [items, setItems] = useState([])
}`
          },
          {
            type: "paragraph",
            content: "The page loads immediately. The client component hydrates later."
          }
        ]
      },

      {
        heading: "Important",
        blocks: [
          {
            type: "paragraph",
            content: "PPR does not eliminate hydration."
          },
          {
            type: "paragraph",
            content: "Client Components still require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JavaScript download",
              "hydration",
              "browser execution"
            ]
          },
          {
            type: "paragraph",
            content: "Only Server Components avoid hydration."
          }
        ]
      },

      {
        heading: "Combining Server and Client Components",
        blocks: [
          {
            type: "paragraph",
            content: "A common production pattern:"
          },
          {
            type: "flow",
            steps: [
              "Product Page", "→",
              "Static", "→",
              "Product Info (Server)", "→",
              "Reviews (Server)", "→",
              "Review Form (Client)", "→",
              "Wishlist Button (Client)", "→",
              "Recommended Products (Server)"
            ]
          },
          {
            type: "paragraph",
            content: "Only the necessary interactive parts hydrate. Everything else stays server-rendered."
          }
        ]
      },

      {
        heading: "Interaction with SSR",
        blocks: [
          {
            type: "paragraph",
            content: "SSR renders the entire page for every request."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Entire Page", "→",
              "Send HTML"
            ]
          },
          {
            type: "paragraph",
            content: "PPR changes this."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Static Shell", "→",
              "Send Immediately", "→",
              "Continue Rendering Dynamic Sections", "→",
              "Stream Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of waiting for everything, PPR sends useful content instantly."
          }
        ]
      },

      {
        heading: "Comparison",
        blocks: [
          {
            type: "paragraph",
            content: "SSR"
          },
          {
            type: "flow",
            steps: [
              "Wait", "→",
              "Everything", "→",
              "Send"
            ]
          },
          {
            type: "paragraph",
            content: "PPR"
          },
          {
            type: "flow",
            steps: [
              "Send", "→",
              "Continue", "→",
              "Stream"
            ]
          },
          {
            type: "paragraph",
            content: "This is why PPR often feels much faster."
          }
        ]
      },

      {
        heading: "Interaction with SSG",
        blocks: [
          {
            type: "paragraph",
            content: "Static Site Generation produces:"
          },
          {
            type: "flow",
            steps: [
              "Entire HTML", "→",
              "Build Time", "→",
              "Serve Forever"
            ]
          },
          {
            type: "paragraph",
            content: "PPR still generates static HTML. However, it allows some sections to stay dynamic."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Blog Page", "→",
              "Static", "→",
              "Article", "→",
              "Author", "→",
              "Comments (Dynamic)"
            ]
          },
          {
            type: "paragraph",
            content: "The article is prerendered. Comments stream later."
          }
        ]
      },

      {
        heading: "Interaction with ISR",
        blocks: [
          {
            type: "paragraph",
            content: "ISR regenerates pages after a specified interval."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `revalidate = 60`
          },
          {
            type: "paragraph",
            content: "Every minute the static shell updates. Inside the shell:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense>
   <LivePrice />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "LivePrice remains dynamic. Therefore PPR and ISR work together. ISR updates static content. PPR streams dynamic content."
          }
        ]
      },

      {
        heading: "Caching Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "PPR introduces multiple cache layers."
          },
          {
            type: "flow",
            steps: [
              "Browser Cache", "→",
              "CDN Cache", "→",
              "Next.js Cache", "→",
              "React Cache", "→",
              "Database"
            ]
          },
          {
            type: "output",
            content: [
              "Static shell",
              "↓",
              "Can be cached aggressively.",
              "",
              "Dynamic islands",
              "↓",
              "May be:",
              "uncached",
              "revalidated",
              "user-specific"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "Static",
              "Landing page",
              "Cache",
              "1 hour",
              "",
              "Dynamic",
              "User Notifications",
              "Cache",
              "No cache"
            ]
          },
          {
            type: "paragraph",
            content: "Both exist in the same page."
          }
        ]
      },

      {
        heading: "Dynamic APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Certain APIs automatically force dynamic rendering."
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "cookies()",
              "headers()",
              "draftMode()",
              "searchParams"
            ]
          },
          {
            type: "paragraph",
            content: "If used inside a Suspense boundary: Only that island becomes dynamic. The rest of the page remains static. This is one of the biggest advantages of PPR."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Static Page", "→",
              "Suspense", "→",
              "cookies()"
            ]
          },
          {
            type: "paragraph",
            content: "Only that subtree becomes request-specific."
          }
        ]
      },

      {
        heading: "SEO Implications",
        blocks: [
          {
            type: "paragraph",
            content: "PPR is highly SEO-friendly."
          },
          {
            type: "paragraph",
            content: "Search engines immediately receive:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "page title",
              "headings",
              "metadata",
              "structured content",
              "links"
            ]
          },
          {
            type: "paragraph",
            content: "Since the shell is prerendered, crawlers don't need to wait for JavaScript. This gives PPR many of the SEO advantages of traditional SSR and SSG."
          }
        ]
      },

      {
        heading: "Dynamic content and SEO",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "flow",
            steps: [
              "Blog Post", "→",
              "Static", "→",
              "Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Search engines mainly care about:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "article",
              "headings",
              "metadata"
            ]
          },
          {
            type: "paragraph",
            content: "Comments usually aren't critical. Perfect PPR use case."
          }
        ]
      },

      {
        heading: "Performance Analysis",
        blocks: [
          {
            type: "paragraph",
            content: "PPR mainly improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "First Contentful Paint (FCP)",
              "Largest Contentful Paint (LCP)",
              "Time to First Byte (TTFB)",
              "Perceived Performance"
            ]
          },
          {
            type: "paragraph",
            content: "Because users see meaningful UI almost immediately."
          },
          {
            type: "paragraph",
            content: "Traditional SSR"
          },
          {
            type: "flow",
            steps: [
              "3 seconds", "→",
              "Everything appears"
            ]
          },
          {
            type: "paragraph",
            content: "PPR"
          },
          {
            type: "flow",
            steps: [
              "0.5 seconds", "→",
              "Shell appears", "→",
              "1 second", "→",
              "Dynamic content streams"
            ]
          },
          {
            type: "paragraph",
            content: "Users perceive the application as much faster."
          }
        ]
      },

      {
        heading: "Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP)"
          },
          {
            type: "paragraph",
            content: "If the hero section is in the static shell: LCP becomes significantly faster."
          },
          {
            type: "paragraph",
            content: "First Contentful Paint (FCP)"
          },
          {
            type: "paragraph",
            content: "Improves because HTML arrives earlier."
          },
          {
            type: "paragraph",
            content: "Time to First Byte (TTFB)"
          },
          {
            type: "paragraph",
            content: "Static shell generation is much quicker than rendering the full page."
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS)"
          },
          {
            type: "paragraph",
            content: "Good Suspense fallbacks prevent layout shifts. Example"
          },
          {
            type: "output",
            content: [
              "Instead of",
              "",
              "Loading...",
              "",
              "Use",
              "",
              "Gray skeleton",
              "with the same height as the final component."
            ]
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP)"
          },
          {
            type: "paragraph",
            content: "Client Components still determine INP. PPR doesn't directly improve interactivity, but by reducing the amount of client-side JavaScript needed for initial rendering, it can indirectly help keep interactions responsive."
          }
        ]
      },

      {
        heading: "Edge Runtime Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "PPR works well with the Edge Runtime because both aim to reduce latency."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster response times closer to users.",
              "Streaming dynamic islands from edge locations.",
              "Reduced origin server load."
            ]
          },
          {
            type: "paragraph",
            content: "However, remember that the Edge Runtime has limitations (such as unsupported Node.js APIs). Ensure any dynamic logic inside PPR-compatible components is also compatible with the chosen runtime."
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "1. Keep the static shell meaningful"
          },
          {
            type: "paragraph",
            content: "Include content users expect immediately:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logo",
              "Navigation",
              "Hero",
              "Product details",
              "Article body"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid empty shells that show only placeholders."
          },
          {
            type: "paragraph",
            content: "2. Place Suspense boundaries strategically"
          },
          {
            type: "paragraph",
            content: "Don't wrap the whole page in one Suspense boundary. Prefer smaller boundaries around slow sections. Good:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Header />

<Hero />

<Suspense>
  <Reviews />
</Suspense>

<Suspense>
  <Recommendations />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "3. Design quality fallbacks"
          },
          {
            type: "paragraph",
            content: "Fallbacks should closely match the final layout. Use skeleton loaders instead of generic \"Loading...\" text."
          },
          {
            type: "paragraph",
            content: "4. Minimize Client Components"
          },
          {
            type: "paragraph",
            content: "Keep interactive logic small and isolated. The more UI remains as Server Components, the greater the benefits of PPR."
          },
          {
            type: "paragraph",
            content: "5. Separate user-specific content"
          },
          {
            type: "paragraph",
            content: "Authentication, notifications, and dashboards should live in isolated dynamic islands rather than making the entire page dynamic."
          },
          {
            type: "paragraph",
            content: "6. Measure performance"
          },
          {
            type: "paragraph",
            content: "Use tools like Lighthouse, WebPageTest, and the React Profiler to validate that PPR actually improves user experience rather than relying on assumptions."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Making everything dynamic",
                description: "If every section depends on request-specific data, PPR offers little benefit."
              },
              {
                title: "Wrapping the entire page in one Suspense boundary",
                description: "This delays rendering instead of enabling progressive streaming."
              },
              {
                title: "Tiny Suspense boundaries everywhere",
                description: "Too many small boundaries can create unnecessary complexity and fragmented streaming."
              },
              {
                title: "Poor fallback design",
                description: "A flashing spinner often creates a worse experience than a well-designed skeleton placeholder."
              },
              {
                title: "Ignoring caching",
                description: "Dynamic islands should only bypass caching when necessary. Cache expensive computations whenever possible."
              },
              {
                title: "Assuming PPR replaces SSR or ISR",
                description: "PPR complements existing rendering strategies rather than replacing them. Many production applications use PPR together with ISR, SSR, and static rendering."
              }
            ]
          }
        ]
      },

      {
        heading: "Large-scale Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an enterprise e-commerce homepage."
          },
          {
            type: "tree",
            content: `Home
├── Header (Static)
├── Hero Banner (Static)
├── Categories (Static)
├── Featured Products (Static + ISR)
├── Flash Sale (Dynamic)
├── Personalized Recommendations (Dynamic)
├── Shopping Cart Preview (Dynamic)
├── Notifications (Dynamic)
└── Footer (Static)`
          },
          {
            type: "paragraph",
            content: "Rendering flow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Static HTML generated instantly", "→",
              "Browser receives usable page", "→",
              "Flash Sale streams", "→",
              "Recommendations stream", "→",
              "Cart streams", "→",
              "Notifications stream"
            ]
          },
          {
            type: "paragraph",
            content: "Users never stare at a blank page, yet still receive fresh, personalized information."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A useful way to think about PPR is this: SSR asks, \"Render everything before responding.\" SSG asks, \"Render everything during the build.\" ISR asks, \"Regenerate the whole page occasionally.\" PPR asks, \"What absolutely must be ready immediately, and what can arrive a moment later?\" This mindset encourages developers to design pages around user perception instead of treating the page as a single rendering unit. By separating static content from dynamic islands, large applications become faster, more scalable, and easier to optimize."
          }
        ]
      },

      {
        heading: "Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. What is Partial Prerendering (PPR)?",
                answer: "PPR is a rendering strategy that combines static prerendering with dynamic streaming. It sends a static shell immediately while slower dynamic sections are streamed later using React Suspense."
              },
              {
                question: "2. How does PPR differ from SSR?",
                answer: "SSR renders the complete page for every request before sending it. PPR sends the static shell immediately and streams only the dynamic portions later, reducing perceived latency."
              },
              {
                question: "3. What role does React Suspense play in PPR?",
                answer: "Suspense defines the boundaries where rendering can pause. Each Suspense boundary becomes a potential dynamic island that can stream independently."
              },
              {
                question: "4. Does PPR eliminate hydration?",
                answer: "No. Client Components still hydrate in the browser. PPR primarily optimizes server-rendered content and streaming."
              },
              {
                question: "5. Can PPR work with ISR?",
                answer: "Yes. ISR can regenerate the static shell while PPR continues to stream dynamic sections independently."
              },
              {
                question: "6. When should you choose PPR?",
                answer: "PPR is ideal for pages that combine mostly static content with a few slow or personalized sections, such as e-commerce homepages, dashboards, news sites, and content-heavy applications."
              }
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Partial Prerendering is one of the most significant advancements in modern Next.js rendering. Instead of forcing developers to choose between static and dynamic rendering for an entire page, it allows both approaches to coexist seamlessly."
          },
          {
            type: "paragraph",
            content: "By combining Server Components, React Suspense, streaming, and selective dynamic rendering, PPR delivers faster initial page loads, excellent SEO, improved Core Web Vitals, and a better user experience without sacrificing fresh or personalized content. As Next.js continues to evolve, understanding PPR and designing applications around static shells and dynamic islands will become an increasingly valuable skill for building high-performance web applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Streaming
============================= */
    "nextjs-streaming": {
    title: "Streaming",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are expected to feel instant. Users don't want to stare at a blank page while the server prepares every piece of data before sending it to the browser. This expectation has pushed web frameworks to evolve beyond traditional rendering techniques."
          },
          {
            type: "paragraph",
            content: "One of the biggest improvements introduced in modern React and Next.js is Streaming."
          },
          {
            type: "paragraph",
            content: "Streaming fundamentally changes how pages are delivered to the browser. Instead of waiting for an entire page to finish rendering before sending anything, Next.js can start sending completed parts of the page immediately while slower sections continue rendering in the background."
          },
          {
            type: "paragraph",
            content: "This results in faster perceived performance, better user experience, improved Core Web Vitals, and a smoother loading process."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn not only how to use Streaming, but also how it works internally, why React Suspense makes it possible, how browsers process streamed HTML, and how Streaming powers many of Next.js's advanced rendering features."
          }
        ]
      },

      {
        heading: "What You Will Learn",
        blocks: [
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why Streaming was introduced",
              "Problems with traditional rendering",
              "How browsers normally render web pages",
              "How Streaming changes the rendering pipeline",
              "HTTP Chunked Transfer Encoding",
              "React Suspense fundamentals",
              "Server Components and Streaming",
              "loading.js",
              "Manual Suspense boundaries",
              "Nested Streaming",
              "Multiple streaming regions",
              "Real-world implementation strategies",
              "Advantages and limitations",
              "When Streaming should be used"
            ]
          }
        ]
      },

      {
        heading: "Why Streaming Was Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "To understand Streaming, we first need to understand the biggest limitation of traditional rendering."
          },
          {
            type: "paragraph",
            content: "Imagine you're opening an e-commerce product page. The page contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bar",
              "Product details",
              "Product images",
              "Reviews",
              "Recommended products",
              "Related videos",
              "Live inventory",
              "Personalized offers"
            ]
          },
          {
            type: "paragraph",
            content: "Some of these sections are extremely fast to render. Others require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Database queries",
              "API requests",
              "Authentication",
              "Recommendation engines",
              "External services"
            ]
          },
          {
            type: "paragraph",
            content: "Traditional rendering waits for everything before sending anything. Even if 90% of the page is already ready, users still see a blank page while the slowest component finishes. This creates unnecessary waiting."
          },
          {
            type: "paragraph",
            content: "Streaming solves this problem. Instead of waiting for every component, Next.js immediately sends whatever is ready and streams the remaining parts later."
          }
        ]
      },

      {
        heading: "Traditional Rendering Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Let's visualize a traditional request."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request Page", "→",
              "Server starts rendering", "→",
              "Header ✅", "→",
              "Navbar ✅", "→",
              "Hero ✅", "→",
              "Products ✅", "→",
              "Reviews (slow...)", "→",
              "Recommendations (slow...)", "→",
              "Everything finishes", "→",
              "Entire HTML sent", "→",
              "Browser renders page"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something important. Even though Header finished first, Navbar finished second, Hero finished third, The browser receives none of them until Reviews and Recommendations finish. This means users stare at a blank page."
          }
        ]
      },

      {
        heading: "Real Example",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose rendering times are:"
          },
          {
            type: "output",
            content: [
              "Header               10ms",
              "Navbar               15ms",
              "Hero                 20ms",
              "Product Details      40ms",
              "Reviews            1500ms",
              "Recommendations    1800ms"
            ]
          },
          {
            type: "paragraph",
            content: "Traditional SSR waits:"
          },
          {
            type: "flow",
            steps: [
              "1800ms", "→",
              "Send HTML"
            ]
          },
          {
            type: "paragraph",
            content: "Even though most of the page finished within 40ms. This is inefficient."
          }
        ]
      },

      {
        heading: "What is Streaming?",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is a rendering technique where the server sends HTML piece by piece instead of waiting for the complete page."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Wait", "→",
              "Render Everything", "→",
              "Send Everything"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming works like:"
          },
          {
            type: "flow",
            steps: [
              "Render Header", "→",
              "Send Header", "→",
              "Render Hero", "→",
              "Send Hero", "→",
              "Render Product", "→",
              "Send Product", "→",
              "Render Reviews", "→",
              "Send Reviews", "→",
              "Render Recommendations", "→",
              "Send Recommendations"
            ]
          },
          {
            type: "paragraph",
            content: "The browser begins displaying content immediately. Users feel the application is much faster."
          }
        ]
      },

      {
        heading: "Traditional SSR vs Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional SSR"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Entire Page", "→",
              "Send HTML", "→",
              "Browser Paint"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Header", "→",
              "Send", "→",
              "Render Hero", "→",
              "Send", "→",
              "Render Product", "→",
              "Send", "→",
              "Render Reviews", "→",
              "Send", "→",
              "Render Rest"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming eliminates unnecessary waiting."
          }
        ]
      },

      {
        heading: "Browser Rendering Without Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Normally, the browser performs these steps:"
          },
          {
            type: "flow",
            steps: [
              "1. Request page", "→",
              "2. Wait for server", "→",
              "3. Receive complete HTML", "→",
              "4. Parse HTML", "→",
              "5. Build DOM", "→",
              "6. Download CSS", "→",
              "7. Execute JavaScript", "→",
              "8. Paint screen"
            ]
          },
          {
            type: "paragraph",
            content: "Notice step 2. The browser simply waits. It cannot render HTML that hasn't arrived yet."
          },
          {
            type: "paragraph",
            content: "Example Timeline"
          },
          {
            type: "flow",
            steps: [
              "0 ms", "→",
              "Request", "→",
              "1000 ms", "→",
              "Still waiting", "→",
              "1800 ms", "→",
              "HTML arrives", "→",
              "1820 ms", "→",
              "Browser starts rendering"
            ]
          },
          {
            type: "paragraph",
            content: "The first visible content appears after 1.8 seconds."
          }
        ]
      },

      {
        heading: "Browser Rendering With Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming changes this timeline."
          },
          {
            type: "flow",
            steps: [
              "0 ms", "→",
              "Request", "→",
              "150 ms", "→",
              "Header HTML arrives", "→",
              "Browser paints Header", "→",
              "400 ms", "→",
              "Hero arrives", "→",
              "Browser paints Hero", "→",
              "900 ms", "→",
              "Products arrive", "→",
              "Browser paints Products", "→",
              "1700 ms", "→",
              "Reviews arrive", "→",
              "Browser updates page"
            ]
          },
          {
            type: "paragraph",
            content: "The browser begins rendering long before the entire page finishes. Users see useful content almost immediately."
          }
        ]
      },

      {
        heading: "How Streaming Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is made possible by combining several technologies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React Server Components",
              "React Suspense",
              "HTTP Chunked Transfer Encoding",
              "Server-side rendering",
              "Browser incremental HTML parsing"
            ]
          },
          {
            type: "paragraph",
            content: "The complete pipeline looks like this:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Request", "→",
              "Next.js Server", "→",
              "Render Server Components", "→",
              "Completed HTML Chunks", "→",
              "HTTP Stream", "→",
              "Browser receives chunks", "→",
              "Incremental DOM updates", "→",
              "Hydration (when needed)"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that HTML is no longer sent as one giant response. Instead, it flows continuously."
          }
        ]
      },

      {
        heading: "The Internal Rendering Pipeline",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose our page is:"
          },
          {
            type: "tree",
            content: `<Home>
  ├── Header
  ├── Hero
  ├── Products
  ├── Reviews
  ├── Recommendations
  └── Footer`
          },
          {
            type: "paragraph",
            content: "Rendering starts."
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Finished", "→",
              "Send"
            ]
          },
          {
            type: "paragraph",
            content: "Next"
          },
          {
            type: "flow",
            steps: [
              "Hero", "→",
              "Finished", "→",
              "Send"
            ]
          },
          {
            type: "paragraph",
            content: "Meanwhile"
          },
          {
            type: "flow",
            steps: [
              "Reviews", "→",
              "Still fetching data..."
            ]
          },
          {
            type: "paragraph",
            content: "Next.js doesn't wait. Instead it sends everything else."
          },
          {
            type: "paragraph",
            content: "Later:"
          },
          {
            type: "flow",
            steps: [
              "Reviews Finished", "→",
              "Stream Reviews HTML"
            ]
          },
          {
            type: "paragraph",
            content: "The browser inserts the new HTML automatically."
          }
        ]
      },

      {
        heading: "HTTP Chunked Transfer Encoding",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming relies on an HTTP feature called Chunked Transfer Encoding. Normally HTTP responses look like this:"
          },
          {
            type: "code",
            language: "text",
            content: `Content-Length: 24500`
          },
          {
            type: "paragraph",
            content: "The server knows the response size before sending it."
          },
          {
            type: "paragraph",
            content: "Streaming is different. The server doesn't know the final size yet. Instead:"
          },
          {
            type: "code",
            language: "text",
            content: `Transfer-Encoding: chunked`
          },
          {
            type: "paragraph",
            content: "The response is divided into chunks. Example"
          },
          {
            type: "flow",
            steps: [
              "Chunk 1", "→",
              "Header HTML", "→",
              "Chunk 2", "→",
              "Hero HTML", "→",
              "Chunk 3", "→",
              "Products HTML", "→",
              "Chunk 4", "→",
              "Reviews HTML"
            ]
          },
          {
            type: "paragraph",
            content: "The browser processes each chunk immediately. This is the foundation of Streaming."
          }
        ]
      },

      {
        heading: "React Suspense Fundamentals",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming would not be possible without React Suspense. Suspense allows React to temporarily pause rendering of a component while waiting for asynchronous work. Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Suspense } from "react";
import Reviews from "./Reviews";
import ReviewsSkeleton from "./ReviewsSkeleton";

export default function ProductPage() {
  return (
    <>
      <ProductInfo />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "The sequence is:"
          },
          {
            type: "flow",
            steps: [
              "Render ProductInfo", "→",
              "Reviews still loading", "→",
              "Show Skeleton", "→",
              "Reviews finish", "→",
              "Replace Skeleton"
            ]
          },
          {
            type: "paragraph",
            content: "Without Suspense:"
          },
          {
            type: "flow",
            steps: [
              "Wait", "→",
              "Everything finishes", "→",
              "Render page"
            ]
          },
          {
            type: "paragraph",
            content: "Suspense allows rendering to continue."
          }
        ]
      },

      {
        heading: "What Happens Behind the Scenes?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine Reviews needs 3 seconds. React does:"
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Ready", "→",
              "Send"
            ]
          },
          {
            type: "flow",
            steps: [
              "Hero", "→",
              "Ready", "→",
              "Send"
            ]
          },
          {
            type: "flow",
            steps: [
              "Reviews", "→",
              "Waiting..."
            ]
          },
          {
            type: "paragraph",
            content: "Instead of blocking:"
          },
          {
            type: "flow",
            steps: [
              "Fallback", "→",
              "Loading Skeleton"
            ]
          },
          {
            type: "paragraph",
            content: "Later"
          },
          {
            type: "flow",
            steps: [
              "Reviews Ready", "→",
              "Replace Skeleton"
            ]
          },
          {
            type: "paragraph",
            content: "The user never sees a blank page."
          }
        ]
      },

      {
        heading: "Streaming Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "A complete streaming lifecycle looks like this:"
          },
          {
            type: "flow",
            steps: [
              "User Request", "→",
              "Server Starts Rendering", "→",
              "Server Components Execute", "→",
              "Fast Components Finish", "→",
              "HTML Stream Starts", "→",
              "Browser Displays Partial Page", "→",
              "Slow Components Finish", "→",
              "More HTML Streams", "→",
              "React Hydrates Client Components", "→",
              "Fully Interactive Page"
            ]
          },
          {
            type: "paragraph",
            content: "Notice how rendering and displaying happen simultaneously."
          }
        ]
      },

      {
        heading: "Server Components Relationship",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is tightly integrated with Server Components. Server Components:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "execute on the server",
              "fetch data directly",
              "produce HTML",
              "don't send JavaScript to the browser"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "If fetching takes time: Streaming can send the rest of the page immediately. Later it streams ProductList. This is why Streaming and Server Components work perfectly together."
          }
        ]
      },

      {
        heading: "Streaming in App Router",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is built into the App Router. Unlike the Pages Router, which required more manual handling, the App Router supports Streaming automatically through:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server Components",
              "Suspense",
              "loading.js",
              "React's streaming renderer"
            ]
          },
          {
            type: "paragraph",
            content: "This means you often get streaming behavior without writing additional logic."
          }
        ]
      },

      {
        heading: "Using loading.js",
        blocks: [
          {
            type: "paragraph",
            content: "The easiest way to enable Streaming in Next.js is by creating a loading.js file. Example project:"
          },
          {
            type: "tree",
            content: `[app]
  └── [products]
       ├── page.js
       └── loading.js`
          },
          {
            type: "paragraph",
            content: "loading.js"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Loading() {
  return <h2>Loading products...</h2>;
}`
          },
          {
            type: "paragraph",
            content: "page.js"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "How it works:"
          },
          {
            type: "flow",
            steps: [
              "User visits /products", "→",
              "loading.js appears instantly", "→",
              "Data fetch starts", "→",
              "Page renders", "→",
              "Loading UI disappears", "→",
              "Actual page appears"
            ]
          },
          {
            type: "paragraph",
            content: "This behavior is powered by React Suspense behind the scenes."
          }
        ]
      },

      {
        heading: "Manual Suspense Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you don't want the entire page to wait for one slow component. Instead, you can create your own boundaries."
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Suspense } from "react";

export default function Dashboard() {
  return (
    <>
      <Header />

      <Suspense fallback={<SalesSkeleton />}>
        <SalesChart />
      </Suspense>

      <Suspense fallback={<OrdersSkeleton />}>
        <RecentOrders />
      </Suspense>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Header appears immediately.",
              "Sales and Orders load independently.",
              "One slow section doesn't block another."
            ]
          },
          {
            type: "paragraph",
            content: "This creates a smoother user experience."
          }
        ]
      },

      {
        heading: "Nested Suspense",
        blocks: [
          {
            type: "paragraph",
            content: "Suspense boundaries can also be nested."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<DashboardSkeleton />}>
  <Dashboard>

    <Suspense fallback={<ChartSkeleton />}>
      <Chart />
    </Suspense>

    <Suspense fallback={<TableSkeleton />}>
      <OrdersTable />
    </Suspense>

  </Dashboard>
</Suspense>`
          },
          {
            type: "paragraph",
            content: "Rendering sequence:"
          },
          {
            type: "flow",
            steps: [
              "Dashboard Skeleton", "→",
              "Dashboard", "→",
              "Chart Skeleton", "→",
              "Table Skeleton", "→",
              "Chart", "→",
              "Table"
            ]
          },
          {
            type: "paragraph",
            content: "Each nested boundary streams independently. Nested boundaries are useful for complex dashboards where different sections have different loading times."
          }
        ]
      },

      {
        heading: "Multiple Streaming Regions",
        blocks: [
          {
            type: "paragraph",
            content: "A page can have several independent streaming regions. Example:"
          },
          {
            type: "tree",
            content: `Home Page
├── Header (Instant)
├── Hero (Instant)
├── Featured Products (Streams)
├── Reviews (Streams)
├── News Feed (Streams)
├── Recommendations (Streams)
└── Footer (Instant)`
          },
          {
            type: "paragraph",
            content: "Timeline:"
          },
          {
            type: "flow",
            steps: [
              "150 ms", "→",
              "Header + Hero + Footer", "→",
              "600 ms", "→",
              "Featured Products", "→",
              "900 ms", "→",
              "Reviews", "→",
              "1400 ms", "→",
              "News Feed", "→",
              "1700 ms", "→",
              "Recommendations"
            ]
          },
          {
            type: "paragraph",
            content: "Users continuously see new content appearing instead of waiting for everything at once."
          }
        ]
      },

      {
        heading: "Real-World Example: E-commerce Homepage",
        blocks: [
          {
            type: "paragraph",
            content: "Consider an online shopping site."
          },
          {
            type: "tree",
            content: `Home
├── Logo
├── Navigation
├── Promotional Banner
├── Categories
├── Flash Sale
├── Personalized Products
├── Trending Items
└── Footer`
          },
          {
            type: "paragraph",
            content: "Rendering strategy:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logo → Static",
              "Navigation → Static",
              "Banner → Static",
              "Categories → Static",
              "Flash Sale → Stream",
              "Personalized Products → Stream",
              "Trending Items → Stream",
              "Footer → Static"
            ]
          },
          {
            type: "paragraph",
            content: "The customer can begin browsing while personalized data is still loading. This dramatically improves perceived speed and engagement."
          }
        ]
      },

      {
        heading: "Advantages of Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming offers numerous benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster First Contentful Paint (FCP)",
              "Better Largest Contentful Paint (LCP)",
              "Improved perceived performance",
              "Reduced waiting time",
              "Progressive rendering",
              "Better user experience",
              "Natural integration with Server Components",
              "Built-in support in the App Router",
              "Excellent compatibility with React Suspense",
              "Better scalability for data-heavy applications"
            ]
          },
          {
            type: "paragraph",
            content: "For many modern applications, Streaming makes pages feel significantly more responsive without changing the underlying data-fetching logic."
          }
        ]
      },

      {
        heading: "Limitations of Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is powerful, but it isn't a universal solution. Keep these limitations in mind:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Requires React Suspense for granular control.",
              "Poorly designed loading states can create visual inconsistency.",
              "Client Components still require hydration.",
              "Too many nested boundaries can increase complexity.",
              "Very small pages may not benefit noticeably.",
              "Developers need to design meaningful fallback UIs rather than generic spinners."
            ]
          },
          {
            type: "paragraph",
            content: "Streaming improves when users see content—it doesn't magically make slow data sources faster."
          }
        ]
      },

      {
        heading: "When to Use Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is especially useful when pages contain sections with different loading times. Ideal use cases include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce product pages",
              "News portals",
              "Dashboards",
              "Analytics applications",
              "Social media feeds",
              "Personalized homepages",
              "Search results",
              "Financial dashboards",
              "Project management tools",
              "SaaS applications",
              "AI-powered interfaces with progressively generated responses"
            ]
          },
          {
            type: "paragraph",
            content: "For simple static pages or pages where all content loads instantly, traditional static rendering may be sufficient."
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "Advanced Streaming in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned how Next.js automatically optimizes images using the Image component, responsive images, lazy loading, modern image formats, and automatic resizing."
          },
          {
            type: "paragraph",
            content: "In this part, we'll explore advanced concepts including caching, CDN integration, SEO assets, production best practices, security, and common mistakes. These are the concepts that separate beginner-level Next.js developers from professional developers building scalable production applications."
          }
        ]
      },

      {
        heading: "Streaming with Server-side Rendering (SSR)",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming and SSR are closely related, but they are not the same thing. Traditional SSR waits for the entire page before sending HTML."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server fetches everything", "→",
              "Build complete HTML", "→",
              "Send HTML"
            ]
          },
          {
            type: "paragraph",
            content: "The user waits until everything finishes. Streaming SSR changes this behavior."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Header Ready", "→",
              "Send Header Immediately", "→",
              "Sidebar Ready", "→",
              "Send Sidebar", "→",
              "Comments Ready", "→",
              "Send Comments", "→",
              "Recommendations Ready", "→",
              "Send Recommendations"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of one large HTML response, the server sends multiple chunks. Users begin reading the page almost immediately."
          }
        ]
      },

      {
        heading: "Example",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `export default async function ProductPage() {
  const product = await getProduct()

  return (
    <>
      <ProductInfo product={product} />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </>
  )
}`
          },
          {
            type: "paragraph",
            content: "The product appears instantly. Reviews load afterward."
          }
        ]
      },

      {
        heading: "Traditional SSR vs Streaming SSR",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional SSR"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Fetch Everything", "→",
              "Render Everything", "→",
              "Send Everything", "→",
              "Hydration"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming SSR"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Available Parts", "→",
              "Send First Chunk", "→",
              "Continue Rendering", "→",
              "Send More Chunks", "→",
              "Hydrate Incrementally"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming dramatically improves perceived performance."
          }
        ]
      },

      {
        heading: "Streaming with Partial Prerendering (PPR)",
        blocks: [
          {
            type: "paragraph",
            content: "PPR is built on top of streaming. Instead of streaming the whole page, PPR sends:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Static Shell",
              "Interactive immediately",
              "Dynamic Islands Stream Later"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Dashboard
├── Sidebar (Static)
├── Header (Static)
├── Weather Widget (Dynamic)
├── User Balance (Dynamic)
└── Notifications (Dynamic)`
          },
          {
            type: "paragraph",
            content: "The static shell loads instantly. Dynamic sections appear as their data becomes available."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<WeatherSkeleton />}>
   <Weather />
</Suspense>

<Suspense fallback={<BalanceSkeleton />}>
   <Balance />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "Each widget streams independently."
          }
        ]
      },

      {
        heading: "Streaming with Incremental Static Regeneration (ISR)",
        blocks: [
          {
            type: "paragraph",
            content: "ISR pages are usually pre-rendered. However, streamed components can still exist."
          },
          {
            type: "paragraph",
            content: "Example: Static Blog Page → Related Articles → Live Comments → Real-time Stock Widget. The page is static. Certain sections stream dynamically."
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function BlogPage() {
  return (
    <>
      <Article />

      <Suspense fallback={<CommentsLoading />}>
          <Comments />
      </Suspense>
    </>
  )
}`
          }
        ]
      },

      {
        heading: "Data Fetching Patterns",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming becomes powerful when combined with efficient data fetching."
          },
          {
            type: "paragraph",
            content: "Pattern 1 — Sequential Fetching (Very slow)"
          },
          {
            type: "flow",
            steps: [
              "Fetch User", "→",
              "Fetch Orders", "→",
              "Fetch Reviews", "→",
              "Render"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await getUser()
const orders = await getOrders(user.id)
const reviews = await getReviews(user.id)`
          },
          {
            type: "paragraph",
            content: "Pattern 2 — Parallel Fetching (Much faster)"
          },
          {
            type: "flow",
            steps: [
              "User + Orders + Reviews", "→",
              "Render"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, orders, reviews] = await Promise.all([
    getUser(),
    getOrders(),
    getReviews()
])`
          },
          {
            type: "paragraph",
            content: "Pattern 3 — Streaming Fetching"
          },
          {
            type: "flow",
            steps: [
              "Header Ready", "→",
              "Render Header", "→",
              "Orders Loading...", "→",
              "Orders Ready", "→",
              "Render Orders", "→",
              "Reviews Ready", "→",
              "Render Reviews"
            ]
          },
          {
            type: "paragraph",
            content: "The page continuously improves."
          }
        ]
      },

      {
        heading: "Error Boundaries During Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "What happens if a streamed component fails? Instead of crashing the whole page, only that Suspense region fails."
          },
          {
            type: "output",
            content: [
              "Header ✔",
              "Sidebar ✔",
              "Comments ❌",
              "Recommendations ✔"
            ]
          },
          {
            type: "paragraph",
            content: "The rest of the page keeps working. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ErrorBoundary fallback={<ErrorCard />}>
    <Suspense fallback={<LoadingCard />}>
        <Comments />
    </Suspense>
</ErrorBoundary>`
          },
          {
            type: "paragraph",
            content: "This greatly improves application resilience."
          }
        ]
      },

      {
        heading: "Loading UI Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Match the final layout.",
              "Prevent layout shift.",
              "Be lightweight.",
              "Avoid unnecessary animations.",
              "Display meaningful placeholders."
            ]
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: [
              "████████████",
              "████████████",
              "████████████"
            ]
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Loading...",
              "Loading...",
              "Loading..."
            ]
          },
          {
            type: "paragraph",
            content: "Skeletons create a much smoother experience."
          },
          {
            type: "paragraph",
            content: "Keep Skeleton Dimensions Fixed. Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div>Loading...</div>`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div className="h-40 rounded bg-gray-200 animate-pulse" />`
          },
          {
            type: "paragraph",
            content: "The browser reserves space, reducing CLS."
          }
        ]
      },

      {
        heading: "Caching Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming does not disable caching. Each streamed component follows the caching rules of the data it fetches. Possible cache modes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "force-cache",
              "no-store",
              "revalidate",
              "revalidateTag",
              "revalidatePath"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {
    cache: "force-cache"
})`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {
    next: {
        revalidate: 60
    }
})`
          },
          {
            type: "paragraph",
            content: "Streaming simply changes when HTML is delivered—not how data is cached."
          }
        ]
      },

      {
        heading: "SEO Implications",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers worry: \"Will streamed content hurt SEO?\" In most cases, no. Search engines can process streamed HTML. As long as important content is server-rendered and accessible, streaming remains SEO-friendly. Best practice:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Stream secondary content.",
              "Keep critical headings and metadata in the initial response.",
              "Render structured data immediately.",
              "Avoid hiding essential SEO text behind client-only rendering."
            ]
          }
        ]
      },

      {
        heading: "Performance Analysis",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming significantly improves perceived speed. Typical improvements include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster First Contentful Paint (FCP)",
              "Faster Largest Contentful Paint (LCP)",
              "Lower Time to First Byte (TTFB) perception",
              "Better user engagement",
              "Reduced bounce rate"
            ]
          },
          {
            type: "paragraph",
            content: "While total rendering time may stay similar, users see meaningful content much sooner."
          }
        ]
      },

      {
        heading: "Streaming and Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP): Streaming helps if the LCP element is sent early. Avoid placing the hero inside a delayed Suspense boundary."
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP): Streaming doesn't directly improve INP, but faster page availability often allows users to interact sooner. Keep client-side JavaScript minimal."
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS): Poorly designed loading placeholders can increase CLS. Reserve space for streamed content."
          }
        ]
      },

      {
        heading: "Edge Runtime and Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming works especially well on the Edge Runtime because responses can start close to the user. Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lower network latency",
              "Faster Time to First Byte",
              "Quicker delivery of initial HTML chunks",
              "Better experience for globally distributed users"
            ]
          },
          {
            type: "paragraph",
            content: "For geographically diverse applications, combining Edge Runtime with streaming can noticeably improve responsiveness."
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use multiple small Suspense boundaries instead of one large boundary.",
              "Stream non-critical sections like comments, recommendations, and analytics.",
              "Keep the main content outside delayed boundaries whenever possible.",
              "Design realistic skeleton UIs that match final layouts.",
              "Fetch independent data in parallel using Promise.all().",
              "Cache data appropriately instead of disabling caching unnecessarily.",
              "Test slow network conditions to validate the streaming experience.",
              "Monitor Core Web Vitals after deployment.",
              "Avoid excessive nesting of Suspense boundaries, which can make rendering harder to reason about."
            ]
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Wrapping the Entire Page in One Suspense Boundary: Everything waits for one component.",
              "Streaming Critical Content: Don't stream: Main heading, Hero section, Primary article, Product title, Important SEO content.",
              "Tiny Suspense Boundaries Everywhere: Too many small boundaries can create unnecessary complexity and overhead.",
              "Ignoring Skeleton Design: A flashing \"Loading...\" message is far less user-friendly than a stable skeleton layout.",
              "Sequential Data Fetching: Waiting for one request before starting the next reduces the benefits of streaming.",
              "Assuming Streaming Solves Slow APIs: Streaming improves delivery, but it cannot make a slow backend fast."
            ]
          }
        ]
      },

      {
        heading: "Large-scale Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A production e-commerce homepage might be organized like this:"
          },
          {
            type: "tree",
            content: `Home Page
├── Navigation (Instant)
├── Hero (Instant)
├── Featured Products (Streams)
├── Categories (Streams)
├── Promotional Banner (Streams)
├── Personalized Recommendations (Streams)
├── Recently Viewed (Streams)
├── Reviews (Streams)
└── Footer (Instant)`
          },
          {
            type: "paragraph",
            content: "This lets users begin interacting while personalized sections continue loading. This approach ensures users never stare at a blank page, yet still receive fresh, personalized information."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Streaming is not a replacement for SSR, SSG, ISR, or PPR—it is a rendering enhancement that complements them. Think of these technologies as answering different questions: SSR decides when HTML is generated. SSG decides when HTML is pre-generated. ISR decides when static pages should be regenerated. PPR decides which parts of a page are static versus dynamic. Streaming decides how the generated HTML is delivered to the browser. Understanding this distinction helps you choose the right combination rather than treating them as competing features."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming is one of the most impactful rendering improvements in modern Next.js. Instead of making users wait for an entire page, it delivers HTML progressively, allowing meaningful content to appear sooner while slower sections continue loading in the background. By combining React Suspense, Server Components, loading.js, SSR, ISR, or PPR, developers can build applications that feel dramatically faster without sacrificing SEO or scalability. When paired with efficient data fetching, thoughtful caching, and well-designed loading states, streaming creates highly responsive user experiences suitable for modern production applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Rendering Strategy Comparison
============================= */
    "nextjs-rendering-strategy-comparison": {
    title: "Rendering Strategy Comparison",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Rendering Strategy Comparison in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Modern Next.js provides multiple rendering strategies. One of the most common mistakes developers make is assuming that there is a single \"best\" rendering method."
          },
          {
            type: "paragraph",
            content: "In reality:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "There is no universally best rendering strategy.",
              "The best strategy depends on the type of content, update frequency, SEO requirements, personalization needs, and performance goals.",
              "A modern Next.js application often combines multiple rendering strategies on the same page."
            ]
          },
          {
            type: "paragraph",
            content: "In this lesson, we'll compare:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Client-Side Rendering (CSR)",
              "Server-Side Rendering (SSR)",
              "Static Site Generation (SSG)",
              "Incremental Static Regeneration (ISR)",
              "Partial Prerendering (PPR)",
              "Streaming",
              "Server Components",
              "Client Components"
            ]
          },
          {
            type: "paragraph",
            content: "By the end, you'll know exactly when and why to choose each one."
          }
        ]
      },

      {
        heading: "Why Rendering Strategies Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website. Some content rarely changes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "About Us Page",
              "Terms of Service",
              "Privacy Policy"
            ]
          },
          {
            type: "paragraph",
            content: "Some content changes occasionally:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blog Posts",
              "Product Descriptions",
              "Documentation"
            ]
          },
          {
            type: "paragraph",
            content: "Some content changes constantly:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Stock Prices",
              "Live Sports Scores",
              "Chat Messages",
              "User Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Rendering all of these pages using the same strategy would be inefficient. This is why Next.js offers multiple rendering approaches."
          }
        ]
      },

      {
        heading: "The Evolution of Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional Web"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Server", "→",
              "HTML"
            ]
          },
          {
            type: "paragraph",
            content: "Everything rendered on the server."
          },
          {
            type: "paragraph",
            content: "SPA Era (React)"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Download JS", "→",
              "Fetch Data", "→",
              "Render UI"
            ]
          },
          {
            type: "paragraph",
            content: "Everything rendered in browser."
          },
          {
            type: "paragraph",
            content: "Modern Next.js"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SSG",
              "SSR",
              "ISR",
              "CSR",
              "PPR",
              "Streaming",
              "Server Components"
            ]
          },
          {
            type: "paragraph",
            content: "Developers choose the best tool for each use case."
          }
        ]
      },

      {
        heading: "Rendering Strategy Overview",
        blocks: [
          {
            type: "table",
            headers: ["Strategy", "Rendered Where", "Rendered When"],
            rows: [
              ["CSR", "Browser", "After JS loads"],
              ["SSR", "Server", "Every request"],
              ["SSG", "Server", "Build time"],
              ["ISR", "Server", "Build time + Revalidation"],
              ["PPR", "Static + Server", "Mixed"],
              ["Streaming", "Server", "Progressive"],
              ["Server Components", "Server", "Request/Build"],
              ["Client Components", "Browser", "Hydration"]
            ]
          }
        ]
      },

      {
        heading: "Client-Side Rendering (CSR)",
        blocks: [
          {
            type: "paragraph",
            content: "What is CSR? Browser renders the page using JavaScript."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Empty HTML", "→",
              "JS Bundle Download", "→",
              "Fetch Data", "→",
              "Render UI"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}`
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Highly interactive",
              "Excellent for dashboards",
              "Real-time updates",
              "Minimal server work"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Poor SEO",
              "Slower initial load",
              "Requires JavaScript",
              "Higher hydration cost"
            ]
          },
          {
            type: "paragraph",
            content: "Best Use Cases: Admin dashboards, Internal tools, Analytics panels, Chat systems."
          }
        ]
      },

      {
        heading: "Server-Side Rendering (SSR)",
        blocks: [
          {
            type: "paragraph",
            content: "What is SSR? HTML is generated on every request."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Fetches Data", "→",
              "HTML Generated", "→",
              "Browser Receives HTML"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function Page() {
  const data = await fetch(
    "https://api.example.com/products",
    {
      cache: "no-store",
    }
  );

  const products = await data.json();

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}`
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Excellent SEO",
              "Fresh data",
              "Better first paint",
              "Great for dynamic content"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Higher server load",
              "Slower than SSG",
              "More expensive at scale"
            ]
          },
          {
            type: "paragraph",
            content: "Best Use Cases: News Sites, Stock Data, Personalized Pages, Live Product Inventory."
          }
        ]
      },

      {
        heading: "Static Site Generation (SSG)",
        blocks: [
          {
            type: "paragraph",
            content: "What is SSG? Pages are generated during build time."
          },
          {
            type: "flow",
            steps: [
              "Build", "→",
              "Generate HTML", "→",
              "Store Static File", "→",
              "User Visits", "→",
              "Serve Instantly"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}`
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Fastest performance",
              "Great SEO",
              "Low server cost",
              "Highly scalable"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Data becomes stale",
              "Rebuild required"
            ]
          },
          {
            type: "paragraph",
            content: "Best Use Cases: Blogs, Marketing Pages, Documentation, Landing Pages, Portfolio Sites."
          }
        ]
      },

      {
        heading: "Incremental Static Regeneration (ISR)",
        blocks: [
          {
            type: "paragraph",
            content: "ISR combines SSG and SSR."
          },
          {
            type: "flow",
            steps: [
              "Build Static Page", "→",
              "Serve Static Page", "→",
              "Revalidate Later", "→",
              "Generate Fresh Version"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const revalidate = 60;`
          },
          {
            type: "paragraph",
            content: "Meaning: Regenerate every 60 seconds."
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Near-SSG performance",
              "Fresh content",
              "Excellent scalability"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Slight complexity",
              "Cache invalidation concerns"
            ]
          },
          {
            type: "paragraph",
            content: "Best Use Cases: Blogs, E-commerce Catalogs, News Sites, CMS Content."
          }
        ]
      },

      {
        heading: "Partial Prerendering (PPR)",
        blocks: [
          {
            type: "paragraph",
            content: "PPR is one of the newest rendering models. Core Idea: Split page into Static Shell + Dynamic Islands."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Navbar, Sidebar, Footer (Static)",
              "User Balance, Notifications, Weather (Dynamic)"
            ]
          },
          {
            type: "paragraph",
            content: "How it works: Request → Send Static Shell → Stream Dynamic Sections."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<Loading />}>
   <UserDashboard />
</Suspense>`
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Fast initial load",
              "Dynamic data support",
              "Excellent user experience"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "New concept",
              "Requires Suspense planning"
            ]
          },
          {
            type: "paragraph",
            content: "Best Use Cases: Dashboards, E-commerce, SaaS Platforms, Personalized Apps."
          }
        ]
      },

      {
        heading: "Streaming",
        blocks: [
          {
            type: "paragraph",
            content: "Streaming changes how content reaches the browser."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Send Header", "→",
              "Send Sidebar", "→",
              "Send Content", "→",
              "Send Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<Skeleton />}>
   <Reviews />
</Suspense>`
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Faster perceived performance",
              "Better UX",
              "Reduces waiting"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "More complexity",
              "Requires Suspense boundaries"
            ]
          }
        ]
      },

      {
        heading: "Server Components vs Client Components",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers confuse these with rendering strategies. They are not. They are component execution models."
          },
          {
            type: "paragraph",
            content: "Server Components: Run only on server."
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function Products() {
  const products = await getProducts();

  return <div>{products.length}</div>;
}`
          },
          {
            type: "paragraph",
            content: "Advantages: Smaller bundles, Better performance, Secure data access."
          },
          {
            type: "paragraph",
            content: "Client Components: Run in browser."
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Advantages: Interactivity, Browser APIs, State management."
          }
        ]
      },

      {
        heading: "Complete Comparison Table",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "CSR", "SSR", "SSG", "ISR", "PPR"],
            rows: [
              ["SEO", "Poor", "Excellent", "Excellent", "Excellent", "Excellent"],
              ["Initial Load", "Slow", "Good", "Very Fast", "Very Fast", "Excellent"],
              ["Fresh Data", "Excellent", "Excellent", "Poor", "Good", "Excellent"],
              ["Server Cost", "Low", "High", "Very Low", "Low", "Medium"],
              ["Scalability", "High", "Medium", "Excellent", "Excellent", "Excellent"],
              ["Personalization", "Excellent", "Excellent", "Poor", "Limited", "Excellent"]
            ]
          }
        ]
      },

      {
        heading: "Real-World Application Mapping",
        blocks: [
          {
            type: "table",
            headers: ["Application", "Best Choice"],
            rows: [
              ["Blog", "SSG + ISR"],
              ["News Website", "ISR + Streaming"],
              ["Social Media", "SSR + CSR"],
              ["SaaS Dashboard", "PPR + Streaming + CSR"],
              ["E-commerce", "SSG + ISR + PPR + Streaming"]
            ]
          }
        ]
      },

      {
        heading: "Performance Comparison",
        blocks: [
          {
            type: "paragraph",
            content: "Fastest Initial Load: 1. SSG, 2. ISR, 3. PPR, 4. SSR, 5. CSR"
          },
          {
            type: "paragraph",
            content: "Fastest Data Freshness: 1. CSR, 2. SSR, 3. PPR, 4. ISR, 5. SSG"
          }
        ]
      },

      {
        heading: "SEO Comparison",
        blocks: [
          {
            type: "paragraph",
            content: "Excellent: SSG, ISR, SSR, PPR"
          },
          {
            type: "paragraph",
            content: "Moderate: CSR"
          },
          {
            type: "paragraph",
            content: "Search engines prefer HTML available immediately. This is why SSR, SSG, ISR, and PPR are commonly used for public-facing pages."
          }
        ]
      },

      {
        heading: "Core Web Vitals Impact",
        blocks: [
          {
            type: "table",
            headers: ["Metric", "Best Strategy"],
            rows: [
              ["LCP", "SSG / ISR"],
              ["CLS", "SSG / ISR / PPR"],
              ["INP", "Server Components + Small Client Components"],
              ["TTFB", "SSG"]
            ]
          }
        ]
      },

      {
        heading: "Choosing the Right Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Ask these questions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is SEO important? Yes → SSR, SSG, ISR, PPR. No → CSR possible.",
              "Does content change every request? Yes → SSR. No → SSG. Sometimes → ISR.",
              "Is content personalized? Yes → SSR or PPR. No → SSG or ISR.",
              "Is page highly interactive? Yes → Client Components. No → Server Components."
            ]
          }
        ]
      },

      {
        heading: "Modern Next.js Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A production Next.js application often looks like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home Page: SSG + Server Components + Streaming",
              "Blog: ISR + Server Components",
              "Dashboard: PPR + SSR + Client Components + Streaming",
              "Product Pages: ISR + PPR + Streaming"
            ]
          },
          {
            type: "paragraph",
            content: "Notice: Modern Next.js applications rarely use a single rendering strategy. They combine multiple techniques."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The biggest misconception among beginners is: 'Should I use SSR or SSG?' The real question is: 'Which parts of my application should use SSR, SSG, ISR, CSR, Streaming, or PPR?' Modern Next.js is no longer about choosing one rendering strategy for the whole application. It is about choosing the optimal rendering strategy for each route, component, and data source. The most performant applications today use a blend of Server Components, ISR, Streaming, PPR, and small Client Components. This combination delivers excellent SEO, performance, scalability, and user experience simultaneously."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js offers multiple rendering strategies because different types of content have different requirements. CSR prioritizes interactivity, SSR prioritizes fresh dynamic content, SSG prioritizes maximum performance, ISR balances speed and freshness, PPR combines static and dynamic rendering, and Streaming improves perceived performance by delivering content progressively."
          },
          {
            type: "paragraph",
            content: "The most important lesson is that modern Next.js development is not about picking a single strategy. Instead, successful applications combine SSG, ISR, SSR, PPR, Streaming, Server Components, and Client Components where each provides the greatest benefit. Understanding these trade-offs allows you to design scalable, SEO-friendly, and highly performant applications for real-world production environments."
          }
        ]
      }
    ]
  },
};

export default nextjsRenderingStrategies;