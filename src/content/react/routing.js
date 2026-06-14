const routing = {


/* ===========================
    First Topic : Introduction to React Router
============================= */
    "introduction-to-react-router": {
    title: "Introduction to React Router",
    readingTime: "12 min",
        
    content: [
        {
        heading: "What is React Router?",
        blocks: [
          {
            type: "paragraph",
            content: "React Router is the most popular routing library used in React applications."
          },
          {
            type: "paragraph",
            content: "It enables navigation between different views, pages, and components without requiring a full page reload."
          },
          {
            type: "paragraph",
            content: "In traditional websites, navigating from one page to another sends a new request to the server and reloads the entire webpage."
          },
          {
            type: "paragraph",
            content: "React applications are typically Single Page Applications (SPAs), meaning the browser loads a single HTML page, and React updates only the necessary parts of the interface."
          },
          {
            type: "paragraph",
            content: "React Router makes this navigation possible."
          },
          {
            type: "paragraph",
            content: "Instead of reloading the page, React Router updates the URL and renders the appropriate components dynamically."
          }
        ]
      },

      {
        heading: "Why Routing is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building an e-commerce application."
          },
          {
            type: "paragraph",
            content: "You might have:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home Page",
              "Products Page",
              "Product Details Page",
              "Cart Page",
              "Checkout Page",
              "User Profile Page"
            ]
          },
          {
            type: "paragraph",
            content: "Without routing, you would have to manually show and hide components based on application state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home />}
      {page === "products" && <Products />}
      {page === "cart" && <Cart />}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "This quickly becomes difficult to maintain."
          },
          {
            type: "paragraph",
            content: "React Router solves this by mapping URLs directly to components."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/ → Home",
              "/products → Products",
              "/cart → Cart",
              "/profile → Profile"
            ]
          },
          {
            type: "paragraph",
            content: "The URL becomes the source of navigation."
          }
        ]
      },

      {
        heading: "What is a Route?",
        blocks: [
          {
            type: "paragraph",
            content: "A route is a mapping between a URL path and a React component."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "URL", "→",
              "/about", "→",
              "About Component"
            ]
          },
          {
            type: "paragraph",
            content: "When users visit:"
          },
          {
            type: "output",
            content: "https://example.com/about"
          },
          {
            type: "paragraph",
            content: "React Router displays the About component."
          }
        ]
      },

      {
        heading: "Traditional Navigation vs React Router",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Traditional Website Navigation",
            leftItems: [
              "User Clicks Link",
              "↓",
              "Browser Requests New Page",
              "↓",
              "Server Sends HTML",
              "↓",
              "Page Reloads Completely"
            ],
            rightTitle: "React Router Navigation",
            rightItems: [
              "User Clicks Link",
              "↓",
              "URL Changes",
              "↓",
              "React Router Detects Change",
              "↓",
              "Relevant Component Renders",
              "↓",
              "No Full Page Reload"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster navigation",
              "Better user experience",
              "Reduced server requests",
              "Smoother applications"
            ]
          }
        ]
      },

      {
        heading: "Understanding Single Page Applications (SPA)",
        blocks: [
          {
            type: "paragraph",
            content: "React Router is primarily designed for SPAs."
          },
          {
            type: "paragraph",
            content: "In an SPA:"
          },
          {
            type: "flow",
            steps: [
              "Browser Loads Once", "→",
              "React Takes Control", "→",
              "UI Updates Dynamically"
            ]
          },
          {
            type: "paragraph",
            content: "Even though the URL changes:"
          },
          {
            type: "output",
            content: [
              "/home",
              "/about",
              "/contact"
            ]
          },
          {
            type: "paragraph",
            content: "The browser does not reload the entire application."
          },
          {
            type: "paragraph",
            content: "Only the required React components change."
          },
          {
            type: "paragraph",
            content: "This creates a much faster experience."
          }
        ]
      },

      {
        heading: "Installing React Router",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React projects usually use React Router DOM."
          },
          {
            type: "paragraph",
            content: "Installation:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install react-router-dom`
          },
          {
            type: "paragraph",
            content: "Verify installation:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm list react-router-dom`
          },
          {
            type: "paragraph",
            content: "After installation, routing features become available."
          }
        ]
      },

      {
        heading: "Basic React Router Setup",
        blocks: [
          {
            type: "paragraph",
            content: "A typical React Router setup looks like:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`
          },
          {
            type: "paragraph",
            content: "This tells React:"
          },
          {
            type: "output",
            content: [
              "/ → Home Component",
              "/about → About Component"
            ]
          }
        ]
      },

      {
        heading: "Core React Router Components",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides several important components."
          },
          {
            type: "cards",
            items: [
              {
                title: "BrowserRouter",
                description: "Acts as the routing provider. Example: `<BrowserRouter><App /></BrowserRouter>`. It enables routing throughout the application."
              },
              {
                title: "Routes",
                description: "A container for all routes. Example: `<Routes>...</Routes>`. React Router looks inside this component to determine which route matches the current URL."
              },
              {
                title: "Route",
                description: "Defines an individual route. Example: `<Route path=\"/about\" element={<About />} />`. Meaning: /about → About Component."
              },
              {
                title: "Link",
                description: "Used for navigation. Example: `<Link to=\"/about\">About</Link>`. Unlike HTML anchor tags, Link prevents full page reloads."
              }
            ]
          }
        ]
      },

      {
        heading: "First Routing Example",
        blocks: [
          {
            type: "paragraph",
            content: "Home Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Home() {
  return <h1>Home Page</h1>;
}`
          },
          {
            type: "paragraph",
            content: "About Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function About() {
  return <h1>About Page</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Router Setup:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "flow",
            steps: [
              "Click Home", "→",
              "Home Page"
            ]
          },
          {
            type: "flow",
            steps: [
              "Click About", "→",
              "About Page"
            ]
          },
          {
            type: "paragraph",
            content: "No page refresh occurs."
          }
        ]
      },

      {
        heading: "Understanding URL Paths",
        blocks: [
          {
            type: "paragraph",
            content: "Each route has a unique path."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/contact" element={<Contact />} />`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "/ → Home",
              "/products → Products",
              "/contact → Contact"
            ]
          },
          {
            type: "paragraph",
            content: "Paths are matched against the browser URL."
          }
        ]
      },

      {
        heading: "Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications require dynamic URLs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/products/1",
              "/products/2",
              "/products/3"
            ]
          },
          {
            type: "paragraph",
            content: "Creating separate routes for each product is impossible."
          },
          {
            type: "paragraph",
            content: "React Router provides route parameters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/products/:id"
  element={<Product />}
/>`
          },
          {
            type: "paragraph",
            content: "Now all URLs match:"
          },
          {
            type: "output",
            content: [
              "/products/1",
              "/products/2",
              "/products/50",
              "/products/999"
            ]
          },
          {
            type: "paragraph",
            content: "Inside the component:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { id } = useParams();`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "flow",
            steps: [
              "/products/7", "→",
              "id = 7"
            ]
          },
          {
            type: "paragraph",
            content: "This is essential for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Product pages",
              "User profiles",
              "Blog posts",
              "Course lessons"
            ]
          }
        ]
      },

      {
        heading: "Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often have routes inside routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner architecture",
              "Better route organization",
              "Easier maintenance"
            ]
          }
        ]
      },

      {
        heading: "Navigation Programmatically",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes navigation occurs through code."
          },
          {
            type: "paragraph",
            content: "Example:\nAfter login:"
          },
          {
            type: "flow",
            steps: [
              "Login Successful", "→",
              "Redirect User", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const navigate = useNavigate();`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps("/dashboard");`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login systems",
              "Logout systems",
              "Form submissions",
              "Checkout flows"
            ]
          }
        ]
      },

      {
        heading: "Route Parameters vs Query Parameters",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Route Parameters",
            leftItems: [
              "Example: /products/15",
              "Route: /products/:id",
              "Value: id = 15"
            ],
            rightTitle: "Query Parameters",
            rightItems: [
              "Example: /products?category=mobile",
              "Value: category = mobile",
              "Useful for: Search filters, Sorting, Pagination, Product categories"
            ]
          }
        ]
      },

      {
        heading: "Protected Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications require authentication."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/profile",
              "/settings"
            ]
          },
          {
            type: "paragraph",
            content: "Only logged-in users should access them."
          },
          {
            type: "paragraph",
            content: "Protected routing flow:"
          },
          {
            type: "flow",
            steps: [
              "User Visits Dashboard", "→",
              "Check Login Status", "→",
              "Logged In?", "→",
              "Yes → Dashboard", "→",
              "No → Login Page"
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most common React Router use cases."
          }
        ]
      },

      {
        heading: "React Router Folder Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Small Project:"
          },
          {
            type: "tree",
            content: `src
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx`
          },
          {
            type: "paragraph",
            content: "Medium Project:"
          },
          {
            type: "tree",
            content: `src
├── pages
├── routes
├── layouts
├── components
└── App.jsx`
          },
          {
            type: "paragraph",
            content: "Large Project:"
          },
          {
            type: "tree",
            content: `src
├── routes
├── features
├── layouts
├── pages
├── components
└── App.jsx`
          },
          {
            type: "paragraph",
            content: "Keeping routes organized becomes increasingly important as applications grow."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Using <a> Instead of <Link>",
                answer: "Bad: `<a href=\"/about\">About</a>`. This causes full page reloads and defeats the purpose of an SPA. Correct: `<Link to=\"/about\">About</Link>`."
              },
              {
                question: "Mistake 2: Forgetting BrowserRouter",
                answer: "Bad: Rendering `<Routes>` without wrapping them in `<BrowserRouter>`. Correct: Wrap your entire routing tree in `<BrowserRouter>`."
              },
              {
                question: "Mistake 3: Creating Too Many Routes Early",
                answer: "Beginners often create dozens of routes before features exist. Start simple. Expand as the application grows."
              },
              {
                question: "Mistake 4: Mixing Routing Logic With Components",
                answer: "Bad: Keeping heavy routing and configuration logic directly inside regular UI components like `Home()`. Better: Keep responsibilities separated using dedicated `routes/` and `pages/` folders."
              }
            ]
          }
        ]
      },

      {
        heading: "React Router Development Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications follow:"
          },
          {
            type: "flow",
            steps: [
              "Create Pages", "→",
              "Configure Routes", "→",
              "Add Navigation", "→",
              "Create Dynamic Routes", "→",
              "Add Protected Routes", "→",
              "Deploy"
            ]
          },
          {
            type: "paragraph",
            content: "Routing is usually implemented early because many other features depend on navigation."
          }
        ]
      },

      {
        heading: "React Router in Modern Applications",
        blocks: [
          {
            type: "paragraph",
            content: "React Router powers navigation in many types of applications:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SaaS Platforms",
              "Dashboards",
              "E-commerce Websites",
              "Social Media Apps",
              "Learning Platforms",
              "Admin Panels",
              "Portfolio Websites"
            ]
          },
          {
            type: "paragraph",
            content: "Almost every production React application uses routing."
          }
        ]
      },

      {
        heading: "React Router vs Manual Navigation",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Manual Navigation",
            leftItems: [
              "State-Based",
              "Complex",
              "Hard to Scale"
            ],
            rightTitle: "React Router",
            rightItems: [
              "URL-Based",
              "Scalable",
              "Industry Standard"
            ]
          },
          {
            type: "paragraph",
            content: "As applications grow, React Router becomes significantly easier to manage."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "React Router is the standard routing solution for React applications."
          },
          {
            type: "paragraph",
            content: "It enables:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Client-side navigation",
              "Dynamic routing",
              "Nested routes",
              "Protected routes",
              "Programmatic navigation",
              "Better user experience"
            ]
          },
          {
            type: "paragraph",
            content: "Core concepts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "BrowserRouter",
              "Routes",
              "Route",
              "Link",
              "useNavigate",
              "useParams"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of reloading pages, React Router updates the UI dynamically, making React applications faster and more interactive."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think React Router is only for switching pages. In reality, React Router is the navigation backbone of a React application. Modern applications use routing not only for pages but also for layouts, authentication flows, dashboards, dynamic content, nested interfaces, and deep linking. As applications scale, routing architecture becomes just as important as component architecture."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Browser Router
============================= */
    "browser-router": {
    title: "Browser Router",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications are often built as Single Page Applications (SPAs)."
          },
          {
            type: "paragraph",
            content: "Unlike traditional websites where the browser loads a completely new HTML page for every URL, React applications typically load a single HTML file and update the interface dynamically."
          },
          {
            type: "paragraph",
            content: "This creates a problem:\nIf the application only loads one page, how can users navigate between different screens such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home",
              "About",
              "Contact",
              "Dashboard",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "This is where Browser Router comes into play."
          },
          {
            type: "paragraph",
            content: "Browser Router is one of the most important components provided by React Router. It enables React applications to synchronize the user interface with the browser URL while maintaining SPA behavior."
          },
          {
            type: "paragraph",
            content: "Instead of requesting a new page from the server, Browser Router updates the URL and tells React which component should be displayed."
          },
          {
            type: "paragraph",
            content: "Without Browser Router, React Router cannot manage navigation."
          },
          {
            type: "paragraph",
            content: "It acts as the foundation of client-side routing."
          }
        ]
      },

      {
        heading: "What is Browser Router?",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router is a routing component provided by React Router that uses the browser's History API to keep the UI synchronized with the URL."
          },
          {
            type: "paragraph",
            content: "In simple words:\nBrowser Router allows React applications to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Change URLs without reloading pages",
              "Navigate between routes",
              "Maintain browser history",
              "Support back and forward buttons",
              "Create clean URLs"
            ]
          },
          {
            type: "paragraph",
            content: "Example URLs:"
          },
          {
            type: "output",
            content: [
              "/",
              "/about",
              "/contact",
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of refreshing the page, React updates only the necessary components."
          }
        ]
      },

      {
        heading: "Why Browser Router Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a React application without routing."
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return <Home />;
}`
          },
          {
            type: "paragraph",
            content: "No matter what URL the user enters:"
          },
          {
            type: "output",
            content: [
              "/",
              "/about",
              "/contact"
            ]
          },
          {
            type: "paragraph",
            content: "The application still renders:"
          },
          {
            type: "output",
            content: "<Home />"
          },
          {
            type: "paragraph",
            content: "React has no understanding of URLs."
          },
          {
            type: "paragraph",
            content: "Browser Router solves this problem by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reading the URL",
              "Monitoring URL changes",
              "Updating the displayed component",
              "Managing navigation history"
            ]
          }
        ]
      },

      {
        heading: "Browser Router and the History API",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router is built on top of the browser's native History API."
          },
          {
            type: "paragraph",
            content: "The History API provides methods such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "history.pushState()",
              "history.replaceState()",
              "history.back()",
              "history.forward()"
            ]
          },
          {
            type: "paragraph",
            content: "These methods allow URL changes without reloading the page."
          },
          {
            type: "paragraph",
            content: "Traditional Website:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "Browser Requests New Page", "→",
              "Server Returns HTML", "→",
              "Page Reloads"
            ]
          },
          {
            type: "paragraph",
            content: "React Router with Browser Router:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "Browser Router Updates URL", "→",
              "React Renders Component", "→",
              "No Page Reload"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a much smoother user experience."
          }
        ]
      },

      {
        heading: "Installing React Router",
        blocks: [
          {
            type: "paragraph",
            content: "Before using Browser Router, React Router must be installed."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install react-router-dom`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "bash",
            content: `yarn add react-router-dom`
          },
          {
            type: "paragraph",
            content: "The package includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "BrowserRouter",
              "Routes",
              "Route",
              "Link",
              "NavLink",
              "Navigate",
              "useNavigate",
              "useParams",
              "useLocation",
              "and many other routing utilities."
            ]
          }
        ]
      },

      {
        heading: "Importing Browser Router",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router is imported from:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { BrowserRouter } from "react-router-dom";`
          },
          {
            type: "paragraph",
            content: "It is usually placed at the highest level of the application."
          },
          {
            type: "paragraph",
            content: "Most commonly inside:"
          },
          {
            type: "output",
            content: [
              "main.jsx",
              "or",
              "index.jsx"
            ]
          }
        ]
      },

      {
        heading: "Basic Browser Router Setup",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "<BrowserRouter>"
          },
          {
            type: "paragraph",
            content: "wraps the entire application."
          },
          {
            type: "paragraph",
            content: "This gives every component access to routing functionality."
          }
        ]
      },

      {
        heading: "How Browser Router Works",
        blocks: [
          {
            type: "paragraph",
            content: "When a user visits:"
          },
          {
            type: "output",
            content: "http://localhost:5173/about"
          },
          {
            type: "paragraph",
            content: "Browser Router:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reads the URL",
              "Matches the route",
              "Finds the corresponding component",
              "Renders that component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`
          },
          {
            type: "paragraph",
            content: "URL:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "<About />"
          }
        ]
      },

      {
        heading: "Browser Router Component Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "Typical structure:"
          },
          {
            type: "tree",
            content: `BrowserRouter
│
├── Routes
│
├── Route
│
├── Route
│
└── Route`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>`
          },
          {
            type: "paragraph",
            content: "Browser Router manages navigation while Routes and Route handle matching."
          }
        ]
      },

      {
        heading: "Clean URLs with Browser Router",
        blocks: [
          {
            type: "paragraph",
            content: "One major benefit is clean URLs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/about",
              "/products",
              "/profile"
            ]
          },
          {
            type: "paragraph",
            content: "These look professional and user-friendly."
          }
        ]
      },

      {
        heading: "Browser Router vs Traditional Navigation",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Traditional Website",
            leftItems: [
              "Click Link",
              "↓",
              "HTTP Request",
              "↓",
              "Server Response",
              "↓",
              "Full Page Reload"
            ],
            rightTitle: "Browser Router",
            rightItems: [
              "Click Link",
              "↓",
              "URL Changes",
              "↓",
              "Component Updates",
              "↓",
              "No Reload"
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
              "Faster navigation",
              "Better user experience",
              "Reduced server requests",
              "Smooth transitions"
            ]
          }
        ]
      },

      {
        heading: "Browser Router and Browser History",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router automatically integrates with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Back Button",
              "Forward Button",
              "Refresh Button"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Home", "→",
              "About", "→",
              "Contact"
            ]
          },
          {
            type: "paragraph",
            content: "Press:"
          },
          {
            type: "output",
            content: "Back"
          },
          {
            type: "paragraph",
            content: "Browser Router returns:"
          },
          {
            type: "output",
            content: "About"
          },
          {
            type: "paragraph",
            content: "Press:"
          },
          {
            type: "output",
            content: "Back"
          },
          {
            type: "paragraph",
            content: "Returns:"
          },
          {
            type: "output",
            content: "Home"
          },
          {
            type: "paragraph",
            content: "This behavior feels natural to users."
          }
        ]
      },

      {
        heading: "Browser Router and Deep Linking",
        blocks: [
          {
            type: "paragraph",
            content: "Deep linking means opening a specific page directly."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "https://example.com/dashboard"
          },
          {
            type: "paragraph",
            content: "Browser Router allows users to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Bookmark routes",
              "Share URLs",
              "Open specific screens directly"
            ]
          },
          {
            type: "paragraph",
            content: "Without routing, every URL would point to the same page."
          }
        ]
      },

      {
        heading: "Browser Router and Single Page Applications",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router is specifically designed for SPAs."
          },
          {
            type: "paragraph",
            content: "SPA Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Load Application Once", "→",
              "Navigate Internally", "→",
              "Update Components", "→",
              "Keep Application Running"
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
              "Faster navigation",
              "Better performance",
              "Reduced network requests"
            ]
          }
        ]
      },

      {
        heading: "Browser Router vs Hash Router",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides another router:"
          },
          {
            type: "output",
            content: "<HashRouter>"
          },
          {
            type: "paragraph",
            content: "Comparison:"
          },
          {
            type: "table",
            headers: ["Browser Router", "Hash Router"],
            rows: [
              ["Uses History API", "Uses URL Hash"],
              ["Clean URLs", "URLs contain #"],
              ["Better SEO", "Poorer SEO"],
              ["Requires server setup", "Works almost everywhere"],
              ["Preferred for production", "Often used for static hosting"]
            ]
          },
          {
            type: "paragraph",
            content: "Browser Router URL:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "Hash Router URL:"
          },
          {
            type: "output",
            content: "#/about"
          },
          {
            type: "paragraph",
            content: "Modern applications generally prefer Browser Router."
          }
        ]
      },

      {
        heading: "When to Use Browser Router",
        blocks: [
          {
            type: "paragraph",
            content: "Use Browser Router when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building a React SPA",
              "Using React Router",
              "Creating clean URLs",
              "Supporting bookmarks",
              "Supporting browser history",
              "Building production applications"
            ]
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboards",
              "SaaS products",
              "E-commerce stores",
              "Social media platforms",
              "Portfolio websites",
              "Learning platforms"
            ]
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Forgetting Browser Router",
                answer: "Without Browser Router, routes will not work.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<App />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<BrowserRouter>
  <App />
</BrowserRouter>`
                  }
                ]
              },
              {
                question: "Mistake 2: Wrapping Multiple Times",
                answer: "Use a single Browser Router at the application root instead of creating multiple instances.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<BrowserRouter>
  <Home />
</BrowserRouter>

<BrowserRouter>
  <About />
</BrowserRouter>`
                  }
                ]
              },
              {
                question: "Mistake 3: Using Anchor Tags",
                answer: "Using traditional `<a>` tags causes page reloads. Always use React Router's `<Link>`.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<a href="/about">About</a>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Link to="/about">About</Link>`
                  }
                ]
              },
              {
                question: "Mistake 4: Placing Routes Outside Browser Router",
                answer: "Routes must be placed inside the `<BrowserRouter>` context to function properly.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Routes>
  <Route path="/" element={<Home />} />
</Routes>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Browser Router Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A typical navigation flow:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "Browser Router Updates URL", "→",
              "Routes Match Path", "→",
              "React Renders Component", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "No refresh occurs during this process."
          }
        ]
      },

      {
        heading: "Performance Benefits",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router improves perceived performance because:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Only components update",
              "HTML is not reloaded",
              "CSS is not reloaded",
              "JavaScript remains loaded"
            ]
          },
          {
            type: "paragraph",
            content: "This creates near-instant navigation."
          }
        ]
      },

      {
        heading: "Professional Project Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Common structure:"
          },
          {
            type: "tree",
            content: `src
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx`
          },
          {
            type: "paragraph",
            content: "Browser Router is usually configured in:"
          },
          {
            type: "output",
            content: "main.jsx"
          },
          {
            type: "paragraph",
            content: "while route definitions stay inside:"
          },
          {
            type: "output",
            content: "routes/AppRoutes.jsx"
          }
        ]
      },

      {
        heading: "Browser Router Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers usually:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Browser Router at the root level.",
              "Keep route definitions organized.",
              "Use Link instead of anchor tags.",
              "Create separate route files.",
              "Use nested routes when appropriate.",
              "Keep URLs meaningful.",
              "Use Browser Router for production SPAs."
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Applications using Browser Router-style navigation:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Netflix",
              "Airbnb",
              "Shopify",
              "LinkedIn",
              "Facebook"
            ]
          },
          {
            type: "paragraph",
            content: "These applications provide smooth navigation without full page reloads."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Browser Router is the foundation of client-side routing in React."
          },
          {
            type: "paragraph",
            content: "It:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Uses the browser History API",
              "Synchronizes UI with URLs",
              "Enables clean routes",
              "Supports browser navigation buttons",
              "Allows deep linking",
              "Prevents full page reloads",
              "Creates SPA navigation experiences"
            ]
          },
          {
            type: "paragraph",
            content: "Browser Router is typically the first routing component added to a React application and serves as the entry point for all React Router functionality."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think Browser Router's only job is changing URLs. In reality, Browser Router acts as the bridge between the browser and React's rendering system. It continuously listens for navigation events, synchronizes application state with the current URL, and ensures that React renders the correct screen without forcing a page reload. Understanding Browser Router deeply makes advanced topics like nested routes, protected routes, dynamic routing, loaders, and route-based code splitting much easier to learn later."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Routes and Route
============================= */
    "routes-and-routes": {
    title: "Routes and Route",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "After setting up Browser Router, the next step in building a navigable React application is defining which components should appear for specific URLs."
          },
          {
            type: "paragraph",
            content: "This is where Routes and Route come into play."
          },
          {
            type: "paragraph",
            content: "Browser Router provides the routing environment, but it does not know which component should be displayed when a user visits:"
          },
          {
            type: "output",
            content: [
              "/",
              "/about",
              "/contact",
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Routes and Route solve this problem by creating a mapping between URLs and React components."
          },
          {
            type: "paragraph",
            content: "Together, they form the core routing system of every React Router application."
          },
          {
            type: "paragraph",
            content: "Without Routes and Route, Browser Router would have no instructions about what content to render."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Routes is",
              "What Route is",
              "How route matching works",
              "How React Router renders components",
              "Route hierarchy",
              "Route paths",
              "Route elements",
              "Index routes",
              "Nested routes",
              "Dynamic routes",
              "Wildcard routes",
              "Route organization",
              "Common mistakes",
              "Professional routing practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how React Router decides what users see when navigating through an application."
          }
        ]
      },

      {
        heading: "What is Route?",
        blocks: [
          {
            type: "paragraph",
            content: "A Route defines a relationship between:"
          },
          {
            type: "flow",
            steps: [
              "URL", "→",
              "Component"
            ]
          },
          {
            type: "paragraph",
            content: "It tells React Router:"
          },
          {
            type: "quote",
            content: "\"When the URL matches this path, render this component.\""
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/" element={<Home />} />`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "URL: /", "→",
              "Render Home Component"
            ]
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/about" element={<About />} />`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "URL: /about", "→",
              "Render About Component"
            ]
          },
          {
            type: "paragraph",
            content: "Each Route represents a single routing rule."
          }
        ]
      },

      {
        heading: "What is Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "Routes is a container component that holds multiple Route components."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`
          },
          {
            type: "paragraph",
            content: "Routes performs route matching."
          },
          {
            type: "paragraph",
            content: "Its responsibilities include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reading the current URL",
              "Comparing URLs with Route paths",
              "Finding the best match",
              "Rendering the correct component"
            ]
          },
          {
            type: "paragraph",
            content: "Think of Routes as a manager and Route as an individual instruction."
          }
        ]
      },

      {
        heading: "Routes vs Route",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these two components."
          },
          {
            type: "comparison",
            leftTitle: "Route",
            leftItems: [
              "Defines a single route.",
              "Example: `<Route path=\"/about\" element={<About />} />`"
            ],
            rightTitle: "Routes",
            rightItems: [
              "Groups and manages multiple routes.",
              "Example: `<Routes><Route path=\"/\" element={<Home />} />...</Routes>`"
            ]
          },
          {
            type: "paragraph",
            content: "Relationship:"
          },
          {
            type: "tree",
            content: `Routes
│
├── Route
├── Route
├── Route
└── Route`
          },
          {
            type: "paragraph",
            content: "You rarely use Route without Routes."
          }
        ]
      },

      {
        heading: "Basic Routing Example",
        blocks: [
          {
            type: "paragraph",
            content: "A simple application:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "table",
            headers: ["URL", "Component"],
            rows: [
              ["/", "Home"],
              ["/about", "About"],
              ["/contact", "Contact"]
            ]
          }
        ]
      },

      {
        heading: "Understanding Route Matching",
        blocks: [
          {
            type: "paragraph",
            content: "When a URL changes:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "React Router:"
          },
          {
            type: "flow",
            steps: [
              "Read URL", "→",
              "Check Routes", "→",
              "Find Matching Route", "→",
              "Render Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/about"
  element={<About />}
/>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "<About />"
          },
          {
            type: "paragraph",
            content: "Only the matched component is rendered."
          }
        ]
      },

      {
        heading: "Understanding the path Prop",
        blocks: [
          {
            type: "paragraph",
            content: "Every Route contains a path."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/profile"
  element={<Profile />}
/>`
          },
          {
            type: "paragraph",
            content: "The path defines which URL should trigger the route."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/",
              "/about",
              "/contact",
              "/profile",
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "React Router compares the browser URL against these paths."
          }
        ]
      },

      {
        heading: "Understanding the element Prop",
        blocks: [
          {
            type: "paragraph",
            content: "The element prop defines what should be rendered."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/about"
  element={<About />}
/>`
          },
          {
            type: "paragraph",
            content: "If the URL becomes:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "React Router renders:"
          },
          {
            type: "output",
            content: "<About />"
          },
          {
            type: "paragraph",
            content: "The element prop must contain JSX."
          },
          {
            type: "comparison",
            leftTitle: "Incorrect",
            leftItems: [
              "`element={About}`"
            ],
            rightTitle: "Correct",
            rightItems: [
              "`element={<About />}`"
            ]
          }
        ]
      },

      {
        heading: "Route Matching Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Example URL:"
          },
          {
            type: "output",
            content: "/products"
          },
          {
            type: "paragraph",
            content: "React Router performs:"
          },
          {
            type: "flow",
            steps: [
              "Read URL", "→",
              "Check Route #1", "→",
              "Check Route #2", "→",
              "Check Route #3", "→",
              "Match Found", "→",
              "Render Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/products"
    element={<Products />}
  />

</Routes>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "<Products />"
          }
        ]
      },

      {
        heading: "Route Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "A typical routing structure:"
          },
          {
            type: "tree",
            content: `Routes
│
├── Home
├── About
├── Contact
├── Products
└── Dashboard`
          },
          {
            type: "paragraph",
            content: "React Router evaluates routes within the Routes container."
          }
        ]
      },

      {
        heading: "Index Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a parent route needs a default page."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/dashboard">

  <Route
    index
    element={<DashboardHome />}
  />

</Route>`
          },
          {
            type: "paragraph",
            content: "When users visit:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "React Router displays:"
          },
          {
            type: "output",
            content: "<DashboardHome />"
          },
          {
            type: "paragraph",
            content: "This is called an Index Route."
          }
        ]
      },

      {
        heading: "Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Real applications often contain pages inside pages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings"
            ]
          },
          {
            type: "paragraph",
            content: "Nested Routes allow this structure."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/dashboard"
  element={<Dashboard />}
>

  <Route
    path="profile"
    element={<Profile />}
  />

  <Route
    path="settings"
    element={<Settings />}
  />

</Route>`
          },
          {
            type: "paragraph",
            content: "URL:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "<Dashboard>",
              "  <Profile />",
              "</Dashboard>"
            ]
          },
          {
            type: "paragraph",
            content: "Nested routing is extremely common in dashboards and admin panels."
          }
        ]
      },

      {
        heading: "Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications require dynamic URLs."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/products/1",
              "/products/25",
              "/users/101"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating hundreds of routes, React Router supports route parameters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/products/:id"
  element={<Product />}
/>`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/products/1",
              "/products/25",
              "/products/100"
            ]
          },
          {
            type: "paragraph",
            content: "The parameter can later be accessed using:"
          },
          {
            type: "output",
            content: "useParams()"
          }
        ]
      },

      {
        heading: "Wildcard Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Applications should handle invalid URLs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/random-page",
              "/unknown"
            ]
          },
          {
            type: "paragraph",
            content: "Wildcard routes solve this."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="*"
  element={<NotFound />}
/>`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "Any Unmatched Route", "→",
              "Show 404 Page"
            ]
          },
          {
            type: "paragraph",
            content: "Professional applications almost always include a wildcard route."
          }
        ]
      },

      {
        heading: "Route Ordering in React Router v6+",
        blocks: [
          {
            type: "paragraph",
            content: "Older React Router versions depended heavily on order."
          },
          {
            type: "paragraph",
            content: "Modern React Router automatically finds the best match."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/products"
  element={<Products />}
/>

<Route
  path="/products/:id"
  element={<Product />}
 />`
          },
          {
            type: "paragraph",
            content: "React Router intelligently chooses the correct route."
          },
          {
            type: "paragraph",
            content: "This reduces routing errors significantly."
          }
        ]
      },

      {
        heading: "Route-Based Application Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Small Project:"
          },
          {
            type: "tree",
            content: `src
├── Home.jsx
├── About.jsx
├── Contact.jsx`
          },
          {
            type: "paragraph",
            content: "Medium Project:"
          },
          {
            type: "tree",
            content: `src
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── routes
│   └── AppRoutes.jsx`
          },
          {
            type: "paragraph",
            content: "Large Project:"
          },
          {
            type: "tree",
            content: `src
├── features
├── pages
├── layouts
├── routes
├── components
└── services`
          },
          {
            type: "paragraph",
            content: "Professional projects usually separate route definitions into dedicated route files."
          }
        ]
      },

      {
        heading: "Routes and Single Page Applications",
        blocks: [
          {
            type: "paragraph",
            content: "Without React Router:"
          },
          {
            type: "flow",
            steps: [
              "Click Link", "→",
              "Page Reload"
            ]
          },
          {
            type: "paragraph",
            content: "With Routes:"
          },
          {
            type: "flow",
            steps: [
              "Click Link", "→",
              "URL Updates", "→",
              "Route Matches", "→",
              "Component Changes", "→",
              "No Reload"
            ]
          },
          {
            type: "paragraph",
            content: "This creates SPA navigation."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Using Route Outside Routes",
                answer: "A `<Route>` must always be rendered inside a `<Routes>` container.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Route path="/" element={<Home />} />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Routes>\n  <Route path=\"/\" element={<Home />} />\n</Routes>`
                  }
                ]
              },
              {
                question: "Mistake 2: Forgetting element",
                answer: "You must specify what component to render using the `element` prop.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Route path="/about" />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Route path=\"/about\" element={<About />} />`
                  }
                ]
              },
              {
                question: "Mistake 3: Passing Component Incorrectly",
                answer: "The `element` prop expects a React element (JSX), not a component reference.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Route path="/about" element={About} />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Route path=\"/about\" element={<About />} />`
                  }
                ]
              },
              {
                question: "Mistake 4: No Wildcard Route",
                answer: "Without a wildcard route (`path=\"*\"`), users navigating to invalid URLs might see a blank page instead of a helpful 404 page."
              },
              {
                question: "Mistake 5: Creating Too Many Static Routes",
                answer: "Avoid hardcoding `/products/1`, `/products/2`. Use dynamic routes (`/products/:id`) because they scale much better."
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Routing Practices",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Keep routes centralized.",
                description: "Organize route definitions in dedicated files."
              },
              {
                title: "Use nested routes.",
                description: "Reflect UI hierarchy in the URL structure."
              },
              {
                title: "Use dynamic parameters.",
                description: "Handle dynamic data effectively."
              },
              {
                title: "Create 404 pages.",
                description: "Always include a wildcard route."
              },
              {
                title: "Organize routes by feature.",
                description: "Group related routes together."
              },
              {
                title: "Use layouts for shared UI.",
                description: "Wrap routes in layout components."
              },
              {
                title: "Avoid duplicate routes.",
                description: "Maintain a clean routing table."
              },
              {
                title: "Keep URLs meaningful.",
                description: "Example: `/products/25` instead of `/page1`."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Routing Example",
        blocks: [
          {
            type: "paragraph",
            content: "E-commerce Application:"
          },
          {
            type: "tree",
            content: `/
├── Home
│
├── /products
│
├── /products/:id
│
├── /cart
│
├── /checkout
│
├── /profile
│
└── /orders`
          },
          {
            type: "paragraph",
            content: "Each route maps to a React component."
          }
        ]
      },

      {
        heading: "Route Matching Visualization",
        blocks: [
          {
            type: "flow",
            steps: [
              "User Visits URL", "→",
              "Browser Router", "→",
              "Routes", "→",
              "Matching Route", "→",
              "Render Component"
            ]
          },
          {
            type: "paragraph",
            content: "This process happens every time navigation occurs."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Routes and Route form the core of React Router navigation."
          },
          {
            type: "paragraph",
            content: "Route:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Defines a URL-to-component mapping.",
              "Represents a single routing rule."
            ]
          },
          {
            type: "paragraph",
            content: "Routes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Contains multiple Route components.",
              "Finds matching routes.",
              "Renders the correct component."
            ]
          },
          {
            type: "paragraph",
            content: "Key concepts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Path matching",
              "Element rendering",
              "Nested routes",
              "Dynamic routes",
              "Index routes",
              "Wildcard routes"
            ]
          },
          {
            type: "paragraph",
            content: "Together with Browser Router, they enable React applications to provide fast, modern SPA navigation experiences."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think Routes simply displays pages. In reality, Routes acts as React Router's route-matching engine. Every navigation event triggers a matching process where React Router analyzes the URL, ranks possible matches, selects the most specific route, and renders only the appropriate component tree. Understanding this matching process makes advanced topics like nested routes, dynamic parameters, layouts, loaders, protected routes, and route-based code splitting much easier to master."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Navigation
============================= */
    "navigation-in-react": {
    title: "Navigation in React",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Building multiple pages is only half of the routing process."
          },
          {
            type: "paragraph",
            content: "The other half is allowing users to move between those pages."
          },
          {
            type: "paragraph",
            content: "This process is called Navigation."
          },
          {
            type: "paragraph",
            content: "Navigation is one of the most fundamental concepts in React applications because it determines how users interact with different sections of an application."
          },
          {
            type: "paragraph",
            content: "Consider a typical application:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home",
              "About",
              "Products",
              "Cart",
              "Profile",
              "Dashboard",
              "Settings"
            ]
          },
          {
            type: "paragraph",
            content: "Users need a way to move between these screens smoothly."
          },
          {
            type: "paragraph",
            content: "In traditional websites, navigation happens by loading a completely new page from the server."
          },
          {
            type: "paragraph",
            content: "In React applications, navigation usually happens without reloading the page."
          },
          {
            type: "paragraph",
            content: "This creates a much faster and smoother user experience."
          },
          {
            type: "paragraph",
            content: "Navigation in React is primarily handled through React Router, which provides several tools for moving between routes."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What navigation is",
              "Why navigation is important",
              "Client-side vs server-side navigation",
              "Link component",
              "NavLink component",
              "Programmatic navigation",
              "useNavigate Hook",
              "Navigation history",
              "Redirects",
              "Dynamic navigation",
              "Nested route navigation",
              "Navigation patterns used in real applications",
              "Common mistakes",
              "Professional navigation practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how users move through React applications and how developers control that movement."
          }
        ]
      },

      {
        heading: "What is Navigation?",
        blocks: [
          {
            type: "paragraph",
            content: "Navigation is the process of moving from one route to another."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Home", "→",
              "About", "→",
              "Contact", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "Every time a user changes screens, navigation occurs."
          },
          {
            type: "paragraph",
            content: "In React:"
          },
          {
            type: "flow",
            steps: [
              "URL Changes", "→",
              "React Router Matches Route", "→",
              "Component Updates", "→",
              "New Screen Appears"
            ]
          },
          {
            type: "paragraph",
            content: "Navigation is therefore the mechanism that connects routes together."
          }
        ]
      },

      {
        heading: "Why Navigation is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Without navigation:"
          },
          {
            type: "output",
            content: "Home Page"
          },
          {
            type: "paragraph",
            content: "Users would have no way to reach:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Products",
              "Cart",
              "Profile",
              "Settings"
            ]
          },
          {
            type: "paragraph",
            content: "Navigation provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better user experience",
              "Faster movement between pages",
              "Application discoverability",
              "Logical flow",
              "Better accessibility"
            ]
          },
          {
            type: "paragraph",
            content: "Every modern application relies heavily on navigation."
          }
        ]
      },

      {
        heading: "Traditional Navigation vs React Navigation",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Traditional Website Navigation",
            leftItems: [
              "When a user clicks a link:",
              "Click Link → Browser Requests Page → Server Responds → Page Reloads",
              "Example: `<a href=\"/about\">About</a>`",
              "Each click causes a complete page refresh."
            ],
            rightTitle: "React Navigation",
            rightItems: [
              "React applications use client-side routing.",
              "Process: Click Link → URL Updates → React Router Matches Route → Component Changes → No Page Reload",
              "Benefits: Faster navigation, Better performance, Smoother transitions, Reduced server requests",
              "This is one of the biggest advantages of React SPAs."
            ]
          }
        ]
      },

      {
        heading: "Navigation and React Router",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides navigation tools:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "BrowserRouter",
              "Routes",
              "Route",
              "Link",
              "NavLink",
              "Navigate",
              "useNavigate"
            ]
          },
          {
            type: "paragraph",
            content: "Among these:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Link",
              "NavLink",
              "useNavigate"
            ]
          },
          {
            type: "paragraph",
            content: "are the most commonly used for navigation."
          }
        ]
      },

      {
        heading: "Link Component",
        blocks: [
          {
            type: "paragraph",
            content: "The Link component is React Router's replacement for:"
          },
          {
            type: "output",
            content: "<a>"
          },
          {
            type: "paragraph",
            content: "Import:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { Link } from "react-router-dom";`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Link to="/about">
  About
</Link>`
          },
          {
            type: "paragraph",
            content: "When clicked:"
          },
          {
            type: "flow",
            steps: [
              "Current Page", "→",
              "/about", "→",
              "About Component"
            ]
          },
          {
            type: "paragraph",
            content: "No page reload occurs."
          }
        ]
      },

      {
        heading: "Why Link is Better Than Anchor Tags",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<a href="/about">
  About
</a>`
          },
          {
            type: "paragraph",
            content: "Problem:"
          },
          {
            type: "flow",
            steps: [
              "Page Reload", "→",
              "Application Restarts"
            ]
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Link to="/about">
  About
</Link>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "flow",
            steps: [
              "Route Changes", "→",
              "Component Updates", "→",
              "No Reload"
            ]
          },
          {
            type: "paragraph",
            content: "Professional React applications rarely use anchor tags for internal navigation."
          }
        ]
      },

      {
        heading: "Understanding the to Prop",
        blocks: [
          {
            type: "paragraph",
            content: "Link uses the:"
          },
          {
            type: "output",
            content: "to"
          },
          {
            type: "paragraph",
            content: "prop."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Link to="/">
  Home
</Link>
<Link to="/products">
  Products
</Link>
<Link to="/profile">
  Profile
</Link>`
          },
          {
            type: "paragraph",
            content: "The value determines the destination route."
          }
        ]
      },

      {
        heading: "Navigation Menu Example",
        blocks: [
          {
            type: "paragraph",
            content: "A simple navigation bar:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<nav>

  <Link to="/">
    Home
  </Link>

  <Link to="/about">
    About
  </Link>

  <Link to="/contact">
    Contact
  </Link>

</nav>`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Click Home", "→",
              "/"
            ]
          },
          {
            type: "flow",
            steps: [
              "Click About", "→",
              "/about"
            ]
          },
          {
            type: "flow",
            steps: [
              "Click Contact", "→",
              "/contact"
            ]
          }
        ]
      },

      {
        heading: "NavLink Component",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes users need visual feedback indicating which page is active."
          },
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "output",
            content: "NavLink"
          },
          {
            type: "paragraph",
            content: "Import:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NavLink } from "react-router-dom";`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<NavLink to="/about">
  About
</NavLink>`
          },
          {
            type: "paragraph",
            content: "Unlike Link, NavLink knows whether it matches the current route."
          }
        ]
      },

      {
        heading: "Why NavLink Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home",
              "About",
              "Contact"
            ]
          },
          {
            type: "paragraph",
            content: "When users are on:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "The About button should appear active."
          },
          {
            type: "paragraph",
            content: "NavLink makes this easy."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "flow",
            steps: [
              "Current Page", "→",
              "Highlighted Navigation Link"
            ]
          }
        ]
      },

      {
        heading: "Link vs NavLink",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Link",
            leftItems: [
              "`<Link to=\"/about\">About</Link>`",
              "Purpose: Simple Navigation",
              "Use Link for: Buttons, Cards, Simple route changes"
            ],
            rightTitle: "NavLink",
            rightItems: [
              "`<NavLink to=\"/about\">About</NavLink>`",
              "Purpose: Navigation + Active Route Detection",
              "Use NavLink for: Menus, Sidebars, Navigation bars"
            ]
          }
        ]
      },

      {
        heading: "Programmatic Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes navigation should happen automatically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Login Successful", "→",
              "Redirect User", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Users don't click anything."
          },
          {
            type: "paragraph",
            content: "The application navigates automatically."
          },
          {
            type: "paragraph",
            content: "This is called:"
          },
          {
            type: "output",
            content: "Programmatic Navigation"
          }
        ]
      },

      {
        heading: "The useNavigate Hook",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "output",
            content: "useNavigate()"
          },
          {
            type: "paragraph",
            content: "Import:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { useNavigate } from "react-router-dom";`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const navigate = useNavigate();`
          },
          {
            type: "paragraph",
            content: "Navigate to another route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps("/dashboard");`
          },
          {
            type: "paragraph",
            content: "This changes the route programmatically."
          }
        ]
      },

      {
        heading: "Real Example: Login Redirect",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `function Login() {

  const navigate = useNavigate();

  function handleLogin() {

    // Login Logic

    navigate("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Logs In", "→",
              "Login Successful", "→",
              "navigate(\"/dashboard\")", "→",
              "Dashboard Opens"
            ]
          }
        ]
      },

      {
        heading: "Navigation History",
        blocks: [
          {
            type: "paragraph",
            content: "React Router maintains browser history."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Home", "→",
              "Products", "→",
              "Cart"
            ]
          },
          {
            type: "paragraph",
            content: "History Stack:"
          },
          {
            type: "code",
            language: "json",
            content: `[
 "Home",
 "Products",
 "Cart"
]`
          },
          {
            type: "paragraph",
            content: "This enables:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Back Button",
              "Forward Button"
            ]
          },
          {
            type: "paragraph",
            content: "to work naturally."
          }
        ]
      },

      {
        heading: "Navigating Backward",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps(-1);`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Go Back One Page"
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Products", "→",
              "Cart", "→",
              "navigate(-1)", "→",
              "Products"
            ]
          }
        ]
      },

      {
        heading: "Navigating Forward",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps(1);`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Go Forward One Page"
          },
          {
            type: "paragraph",
            content: "Useful for browser-like behavior."
          }
        ]
      },

      {
        heading: "Replace Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "Default behavior:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps("/dashboard");`
          },
          {
            type: "paragraph",
            content: "adds a history entry."
          },
          {
            type: "paragraph",
            content: "Sometimes we want to replace the current page."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps(
  "/dashboard",
  { replace: true }
);`
          },
          {
            type: "paragraph",
            content: "Common use case:"
          },
          {
            type: "flow",
            steps: [
              "Login Page", "→",
              "Successful Login", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Users should not return to login via the Back button."
          }
        ]
      },

      {
        heading: "Redirect Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "output",
            content: "<Navigate />"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Navigate
  to="/login"
/>`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "Immediately Redirect", "→",
              "/login"
            ]
          },
          {
            type: "paragraph",
            content: "Common use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication",
              "Protected routes",
              "Default redirects"
            ]
          }
        ]
      },

      {
        heading: "Dynamic Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often navigate dynamically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Maps(\`/products/\${id}\`);`
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "output",
            content: "id = 25"
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "/products/25"
          },
          {
            type: "paragraph",
            content: "This is extremely common in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce",
              "Dashboards",
              "Social media apps"
            ]
          }
        ]
      },

      {
        heading: "Navigation in Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Example routes:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings"
            ]
          },
          {
            type: "paragraph",
            content: "Navigation:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Link to="profile">
  Profile
</Link>`
          },
          {
            type: "paragraph",
            content: "Inside:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "Results in:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "React Router automatically resolves relative paths."
          }
        ]
      },

      {
        heading: "Navigation Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A complete navigation cycle:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "URL Changes", "→",
              "Browser Router Detects Change", "→",
              "Routes Match Path", "→",
              "Component Renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This entire process typically happens within milliseconds."
          }
        ]
      },

      {
        heading: "Navigation in Real Applications",
        blocks: [
          {
            type: "paragraph",
            content: "E-Commerce"
          },
          {
            type: "flow",
            steps: [
              "Home", "→",
              "Products", "→",
              "Product Details", "→",
              "Cart", "→",
              "Checkout"
            ]
          },
          {
            type: "paragraph",
            content: "Social Media"
          },
          {
            type: "flow",
            steps: [
              "Feed", "→",
              "Profile", "→",
              "Post", "→",
              "Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Dashboard"
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "Users", "→",
              "Reports", "→",
              "Settings"
            ]
          },
          {
            type: "paragraph",
            content: "Navigation creates the entire user journey."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Using Anchor Tags",
                answer: "Using standard `<a>` tags causes a full page reload, breaking the SPA experience.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<a href="/about">\n  About\n</a>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Link to="/about">\n  About\n</Link>`
                  }
                ]
              },
              {
                question: "Mistake 2: Forgetting Browser Router",
                answer: "Without wrapping your app in `BrowserRouter`, components like `<Link to=\"/about\">` will not function correctly and will throw an error."
              },
              {
                question: "Mistake 3: Overusing useNavigate",
                answer: "Bad: calling `Maps()` inside onClick handlers for normal navigation links. Use `<Link />` whenever possible for accessibility and SEO. Use `useNavigate()` only for programmatic navigation (like after form submissions)."
              },
              {
                question: "Mistake 4: Hardcoding URLs",
                answer: "Bad: `Maps(\"/products/1\");`. Better: `Maps(\`/products/\${id}\`);`."
              },
              {
                question: "Mistake 5: No Active Navigation State",
                answer: "Users may become confused about their location in the app if the active tab isn't highlighted. Use `<NavLink>` for menus and sidebars to easily apply active styles."
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Navigation Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers typically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Link for navigation links.",
              "Use NavLink for menus.",
              "Use useNavigate for redirects.",
              "Avoid anchor tags.",
              "Support browser history.",
              "Create meaningful URLs.",
              "Use dynamic routes where appropriate.",
              "Highlight active pages.",
              "Keep navigation consistent across the application."
            ]
          }
        ]
      },

      {
        heading: "Navigation Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Typical routing setup:"
          },
          {
            type: "tree",
            content: `BrowserRouter
│
├── Navbar
│   ├── Home Link
│   ├── About Link
│   └── Contact Link
│
├── Routes
│   ├── Home Route
│   ├── About Route
│   └── Contact Route`
          },
          {
            type: "paragraph",
            content: "Navigation and routing work together to create the user experience."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Navigation is the process of moving between routes in a React application."
          },
          {
            type: "paragraph",
            content: "React Router provides several navigation tools:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Link",
              "NavLink",
              "useNavigate",
              "Navigate"
            ]
          },
          {
            type: "paragraph",
            content: "Key concepts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Client-side navigation",
              "Link-based navigation",
              "Programmatic navigation",
              "Navigation history",
              "Active links",
              "Dynamic navigation",
              "Redirects"
            ]
          },
          {
            type: "paragraph",
            content: "Together, these tools allow React applications to provide fast, seamless, SPA-style user experiences without page reloads."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think navigation is simply \"changing pages.\" Professional developers view navigation as managing user flow. Good navigation reduces confusion, improves usability, increases engagement, and helps users reach important actions faster. In large applications, navigation architecture becomes just as important as component architecture because it directly shapes how users experience the entire product."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : URL Parameters
============================= */
    "url-parameters": {
    title: "URL Parameters",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications often need to display different content based on information contained inside the URL."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "/products/101",
              "/products/102",
              "/products/103"
            ]
          },
          {
            type: "paragraph",
            content: "Although the route is the same (/products), the product ID changes."
          },
          {
            type: "paragraph",
            content: "Instead of creating separate routes for every possible product, React Router allows developers to create dynamic URL parameters that can capture values directly from the URL."
          },
          {
            type: "paragraph",
            content: "This feature is essential for building scalable applications such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce websites",
              "Blog platforms",
              "Social media applications",
              "Learning management systems",
              "Dashboard applications",
              "User profile systems"
            ]
          },
          {
            type: "paragraph",
            content: "URL parameters allow a single route definition to handle thousands or even millions of different pages."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What URL parameters are",
              "Why URL parameters are useful",
              "Dynamic routes in React Router",
              "Using the useParams() hook",
              "Multiple URL parameters",
              "Nested URL parameters",
              "URL parameters vs Query Parameters",
              "Common use cases",
              "Best practices",
              "Common mistakes beginners make"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will be able to create dynamic routes that respond to URL values and build more powerful React applications."
          }
        ]
      },

      {
        heading: "What Are URL Parameters?",
        blocks: [
          {
            type: "paragraph",
            content: "URL Parameters are dynamic values embedded inside the path of a URL."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "/products/101"
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "101"
          },
          {
            type: "paragraph",
            content: "is the parameter value."
          },
          {
            type: "paragraph",
            content: "Instead of hardcoding:"
          },
          {
            type: "output",
            content: [
              "/products/101",
              "/products/102",
              "/products/103"
            ]
          },
          {
            type: "paragraph",
            content: "React Router allows:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/products/:id" element={<Product />} />`
          },
          {
            type: "paragraph",
            content: "The colon (:) indicates a dynamic parameter."
          },
          {
            type: "paragraph",
            content: "React Router automatically extracts the value and makes it available inside the component."
          }
        ]
      },

      {
        heading: "Why URL Parameters Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Without URL parameters, applications would require separate routes for every item."
          },
          {
            type: "paragraph",
            content: "Imagine an e-commerce website with:"
          },
          {
            type: "output",
            content: "100,000 products"
          },
          {
            type: "paragraph",
            content: "Creating routes manually would be impossible."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/product/:id" />`
          },
          {
            type: "paragraph",
            content: "can handle:"
          },
          {
            type: "output",
            content: [
              "/product/1",
              "/product/2",
              "/product/500",
              "/product/99999"
            ]
          },
          {
            type: "paragraph",
            content: "using a single route definition."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fewer routes",
              "Cleaner code",
              "Better scalability",
              "Dynamic content generation",
              "SEO-friendly URLs",
              "Easier maintenance"
            ]
          }
        ]
      },

      {
        heading: "Dynamic Route Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "React Router uses a colon (:) to define URL parameters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/user/:id"
  element={<UserProfile />}
/>`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: ":id"
          },
          {
            type: "paragraph",
            content: "is a URL parameter."
          },
          {
            type: "paragraph",
            content: "Possible URLs:"
          },
          {
            type: "output",
            content: [
              "/user/1",
              "/user/25",
              "/user/100"
            ]
          },
          {
            type: "paragraph",
            content: "Each URL renders the same component."
          },
          {
            type: "paragraph",
            content: "Only the parameter value changes."
          }
        ]
      },

      {
        heading: "Understanding Dynamic Segments",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/blog/:slug"
  element={<BlogPost />}
/>`
          },
          {
            type: "paragraph",
            content: "Possible URLs:"
          },
          {
            type: "output",
            content: [
              "/blog/react-hooks",
              "/blog/javascript-arrays",
              "/blog-routing-guide"
            ]
          },
          {
            type: "paragraph",
            content: "Values captured:"
          },
          {
            type: "output",
            content: [
              "react-hooks",
              "javascript-arrays",
              "routing-guide"
            ]
          },
          {
            type: "paragraph",
            content: "This technique is heavily used in blogs and CMS systems."
          }
        ]
      },

      {
        heading: "Accessing URL Parameters with useParams()",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides the useParams() hook."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { useParams } from "react-router-dom";`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  return (
    <h1>Product ID: {params.id}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "If the URL is:"
          },
          {
            type: "output",
            content: "/product/101"
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Product ID: 101"
          },
          {
            type: "paragraph",
            content: "useParams() returns an object containing all URL parameters."
          }
        ]
      },

      {
        heading: "Destructuring Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const params = useParams();

params.id`
          },
          {
            type: "paragraph",
            content: "Developers often use destructuring."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { id } = useParams();`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>{id}</h1>`
          },
          {
            type: "paragraph",
            content: "This approach is cleaner and easier to read."
          }
        ]
      },

      {
        heading: "Complete Example",
        blocks: [
          {
            type: "paragraph",
            content: "Route Setup:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/product/:id"
          element={<Product />}
        />

      </Routes>
    </BrowserRouter>
  );
}`
          },
          {
            type: "paragraph",
            content: "Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <h2>
      Viewing Product {id}
    </h2>
  );
}`
          },
          {
            type: "paragraph",
            content: "URL:"
          },
          {
            type: "output",
            content: "/product/50"
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Viewing Product 50"
          }
        ]
      },

      {
        heading: "Multiple URL Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "A route can contain multiple parameters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/users/:userId/posts/:postId"
  element={<Post />}
 />`
          },
          {
            type: "paragraph",
            content: "URL:"
          },
          {
            type: "output",
            content: "/users/5/posts/10"
          },
          {
            type: "paragraph",
            content: "Inside component:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { userId, postId } = useParams();`
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "output",
            content: [
              "userId = 5",
              "postId = 10"
            ]
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "User 5 Post 10"
          }
        ]
      },

      {
        heading: "Nested URL Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Complex applications often use nested dynamic routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/course/:courseId/lesson/:lessonId"
  element={<Lesson />}
 />`
          },
          {
            type: "paragraph",
            content: "URL:"
          },
          {
            type: "output",
            content: "/course/react/lesson/15"
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "output",
            content: [
              "courseId = react",
              "lessonId = 15"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern is common in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Online learning platforms",
              "Documentation websites",
              "SaaS dashboards"
            ]
          }
        ]
      },

      {
        heading: "URL Parameters with API Calls",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common uses of URL parameters is fetching data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

function Product() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    fetch(
      \`https://api.example.com/products/\${id}\`
    )
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [id]);

  return (
    <h2>{product?.name}</h2>
  );
}`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "URL Changes", "→",
              "Parameter Changes", "→",
              "API Request", "→",
              "New Data Loaded", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This is how most real-world React applications load dynamic content."
          }
        ]
      },

      {
        heading: "URL Parameters Are Strings",
        blocks: [
          {
            type: "paragraph",
            content: "A very important detail:\nAll URL parameters are returned as strings."
          },
          {
            type: "paragraph",
            content: "Example:\nURL:"
          },
          {
            type: "output",
            content: "/product/25"
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { id } = useParams();

console.log(typeof id);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "string"
          },
          {
            type: "paragraph",
            content: "If numeric operations are needed:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const productId = Number(id);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "25"
          },
          {
            type: "paragraph",
            content: "Many beginners forget this conversion."
          }
        ]
      },

      {
        heading: "Optional URL Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "React Router does not directly support traditional optional parameters in the same way older versions did."
          },
          {
            type: "paragraph",
            content: "Instead developers often create separate routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/products"
  element={<Products />}
/>

<Route
  path="/products/:id"
  element={<ProductDetails />}
/>`
          },
          {
            type: "paragraph",
            content: "This keeps routing predictable and easier to maintain."
          }
        ]
      },

      {
        heading: "URL Parameters vs Query Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these concepts."
          },
          {
            type: "comparison",
            leftTitle: "URL Parameters",
            leftItems: [
              "Example: `/product/101`",
              "Route: `/product/:id`",
              "Used for: Resource identification, Dynamic pages"
            ],
            rightTitle: "Query Parameters",
            rightItems: [
              "Example: `/products?category=electronics`",
              "Example: `/products?page=2`",
              "Used for: Filters, Sorting, Searching, Pagination"
            ]
          },
          {
            type: "paragraph",
            content: "Rule:"
          },
          {
            type: "output",
            content: [
              "URL Parameters\n→ Identify a resource",
              "Query Parameters\n→ Modify or filter data"
            ]
          }
        ]
      },

      {
        heading: "Common Real-World Examples",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "User Profile",
                description: "URL: `/user/25`, Route: `/user/:id`"
              },
              {
                title: "Product Page",
                description: "URL: `/product/101`, Route: `/product/:id`"
              },
              {
                title: "Blog Post",
                description: "URL: `/blog/react-hooks-guide`, Route: `/blog/:slug`"
              },
              {
                title: "Course Lesson",
                description: "URL: `/course/react/lesson/10`, Route: `/course/:courseId/lesson/:lessonId`"
              },
              {
                title: "GitHub Repository",
                description: "URL: `/github/facebook/react`, Route: `/github/:owner/:repo`"
              }
            ]
          }
        ]
      },

      {
        heading: "Best Practices",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Use Meaningful Parameter Names",
                description: "Good: `/user/:userId`, Bad: `/user/:x`"
              },
              {
                title: "Keep URLs Readable",
                description: "Good: `/blog/react-hooks-guide`, Bad: `/blog/1234567890`"
              },
              {
                title: "Validate Parameters",
                description: "Before using: `if (!id) { return <p>Invalid ID</p>; }`"
              },
              {
                title: "Convert Numbers Explicitly",
                description: "`const userId = Number(id);` Avoid relying on automatic conversion."
              },
              {
                title: "Use Parameters for Resource Identity Only",
                description: "Good: `/product/10`, Bad: `/product/10/sort/price/filter/electronics`. Use query parameters for filtering."
              }
            ]
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Forgetting the Colon",
                answer: "You must use a colon to denote a parameter in the route path.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Route\n  path="/user/id"\n  element={<User />}\n/>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<Route\n  path="/user/:id"\n  element={<User />}\n/>`
                  }
                ]
              },
              {
                question: "Mistake 2: Using useParams Outside a Route",
                answer: "Calling `const params = useParams();` in a component not rendered by React Router causes errors."
              },
              {
                question: "Mistake 3: Assuming Parameters Are Numbers",
                answer: "URL parameters are always strings. If `id` is '25', then `id + 5` results in '255', not 30. You must convert it using `Number(id) + 5`."
              },
              {
                question: "Mistake 4: Not Handling Missing Data",
                answer: "Always prepare for an Invalid URL, Deleted Resource, or Failed API Request. Graceful error handling improves user experience."
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications use URL parameters in this pattern:"
          },
          {
            type: "flow",
            steps: [
              "User Visits URL", "→",
              "Route Matches", "→",
              "useParams Reads Values", "→",
              "API Request Executes", "→",
              "Data Returned", "→",
              "Component Renders"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this flow is crucial for building scalable React applications."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "URL Parameters allow React applications to create dynamic routes that respond to values inside the URL."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "URL parameters create dynamic routes",
              "Parameters are defined using :",
              "useParams() reads parameter values",
              "Multiple parameters are supported",
              "Nested parameters are supported",
              "Parameters are always strings",
              "Parameters commonly drive API requests",
              "URL parameters identify resources",
              "Query parameters modify or filter resources",
              "Proper parameter design improves scalability"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering URL parameters is an essential step toward building real-world React applications such as e-commerce platforms, blogs, dashboards, social media systems, and SaaS products."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Professional React developers often design the URL structure before writing components. A well-designed URL scheme makes routing, API integration, SEO, bookmarking, and user navigation significantly easier. Many scalability problems in large applications originate from poorly planned URL architecture rather than poorly written components."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Nested Routes
============================= */
    "nested-routes": {
    title: "Nested Routes",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, a single level of routing is often not enough."
          },
          {
            type: "paragraph",
            content: "Consider a dashboard application:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "All these pages belong to the Dashboard section, yet each page displays different content."
          },
          {
            type: "paragraph",
            content: "Creating separate top-level routes for every page quickly becomes difficult to manage."
          },
          {
            type: "paragraph",
            content: "This is where Nested Routes become useful."
          },
          {
            type: "paragraph",
            content: "Nested Routes allow routes to exist inside other routes."
          },
          {
            type: "paragraph",
            content: "Instead of treating every page as a completely independent route, React Router allows child routes to be rendered inside parent routes."
          },
          {
            type: "paragraph",
            content: "This makes applications:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "More organized",
              "Easier to scale",
              "Easier to maintain",
              "Better structured"
            ]
          },
          {
            type: "paragraph",
            content: "Nested routing is heavily used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Admin Dashboards",
              "E-Commerce Websites",
              "Learning Platforms",
              "Social Media Applications",
              "SaaS Products"
            ]
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Nested Routes are",
              "Why Nested Routes are important",
              "How parent and child routes work",
              "The role of <Outlet />",
              "How URL structures are created",
              "Relative vs absolute paths",
              "Index routes",
              "Multi-level nested routes",
              "Layout routes",
              "Common mistakes beginners make",
              "Best practices used in production applications"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you'll be able to build scalable route hierarchies using React Router."
          }
        ]
      },

      {
        heading: "What Are Nested Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "Nested Routes are routes defined inside another route."
          },
          {
            type: "paragraph",
            content: "Think of them as parent-child relationships."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Dashboard
│
├── Profile
├── Settings
└── Orders`
          },
          {
            type: "paragraph",
            content: "URL Structure:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "is the parent route."
          },
          {
            type: "paragraph",
            content: "And:"
          },
          {
            type: "output",
            content: [
              "profile",
              "settings",
              "orders"
            ]
          },
          {
            type: "paragraph",
            content: "are child routes."
          },
          {
            type: "paragraph",
            content: "React Router allows these child routes to render inside the parent page."
          }
        ]
      },

      {
        heading: "Why Nested Routes Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Without Nested Routes, applications become repetitive."
          },
          {
            type: "paragraph",
            content: "Imagine a dashboard page."
          },
          {
            type: "paragraph",
            content: "Every page contains:"
          },
          {
            type: "output",
            content: [
              "Sidebar",
              "Top Navigation",
              "Content Area",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "Without nesting:"
          },
          {
            type: "output",
            content: [
              "DashboardProfile",
              "DashboardSettings",
              "DashboardOrders"
            ]
          },
          {
            type: "paragraph",
            content: "would each contain the same layout code."
          },
          {
            type: "paragraph",
            content: "This creates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate code",
              "Maintenance problems",
              "Larger components"
            ]
          },
          {
            type: "paragraph",
            content: "Nested Routes solve this by sharing a common layout."
          }
        ]
      },

      {
        heading: "Understanding Parent and Child Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "Parent Route:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="dashboard" element={<Dashboard />} />`
          },
          {
            type: "paragraph",
            content: "Child Routes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="profile" element={<Profile />} />
<Route path="settings" element={<Settings />} />
<Route path="orders" element={<Orders />} />`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "tree",
            content: `Dashboard
│
├── Profile
├── Settings
└── Orders`
          },
          {
            type: "paragraph",
            content: "The Dashboard component acts as the parent container."
          }
        ]
      },

      {
        heading: "How Nested Routes Work",
        blocks: [
          {
            type: "paragraph",
            content: "Nested routes are written inside another route."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
    <Route path="orders" element={<Orders />} />
  </Route>
</Routes>`
          },
          {
            type: "paragraph",
            content: "Generated URLs:"
          },
          {
            type: "output",
            content: [
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "React Router automatically combines parent and child paths."
          }
        ]
      },

      {
        heading: "The Role of <Outlet />",
        blocks: [
          {
            type: "paragraph",
            content: "Nested routes require a placeholder where child routes will appear."
          },
          {
            type: "paragraph",
            content: "This placeholder is:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Outlet />`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Outlet />
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "Think of Outlet as:"
          },
          {
            type: "output",
            content: "Insert Child Route Here"
          },
          {
            type: "paragraph",
            content: "Without Outlet, child routes cannot render."
          }
        ]
      },

      {
        heading: "Visualizing Outlet",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose URL:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "Dashboard Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Dashboard() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Profile Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Profile() {
  return <h2>Profile Page</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Rendered Output:"
          },
          {
            type: "output",
            content: [
              "Sidebar",
              "",
              "Profile Page"
            ]
          },
          {
            type: "paragraph",
            content: "React Router inserts Profile into the Outlet location."
          }
        ]
      },

      {
        heading: "Complete Nested Route Example",
        blocks: [
          {
            type: "paragraph",
            content: "**Route Configuration**"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>
  <Route path="/" element={<Home />} />

  <Route path="dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
    <Route path="orders" element={<Orders />} />
  </Route>
</Routes>`
          },
          {
            type: "paragraph",
            content: "**Dashboard Component**"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Outlet />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "**Profile Component**"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Profile() {
  return <h2>Profile Page</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Visiting:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: [
              "Dashboard",
              "",
              "Profile Page"
            ]
          }
        ]
      },

      {
        heading: "Nested Route URL Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Route Tree:"
          },
          {
            type: "tree",
            content: `Dashboard
│
├── Profile
├── Settings
└── Orders`
          },
          {
            type: "paragraph",
            content: "Generated URLs:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Notice how child paths are automatically appended."
          }
        ]
      },

      {
        heading: "Relative Paths",
        blocks: [
          {
            type: "paragraph",
            content: "Child routes usually use relative paths."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="profile" element={<Profile />} />`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "React Router automatically combines paths."
          }
        ]
      },

      {
        heading: "Absolute Paths",
        blocks: [
          {
            type: "paragraph",
            content: "You can also define absolute paths."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="/profile" element={<Profile />} />`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "/profile"
          },
          {
            type: "paragraph",
            content: "Notice:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "is ignored."
          },
          {
            type: "paragraph",
            content: "This route becomes completely independent."
          },
          {
            type: "paragraph",
            content: "For nested routes, relative paths are usually preferred."
          }
        ]
      },

      {
        heading: "Index Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a parent route should display default content."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "should display:"
          },
          {
            type: "output",
            content: "Welcome Dashboard"
          },
          {
            type: "paragraph",
            content: "without needing:"
          },
          {
            type: "output",
            content: "/dashboard/welcome"
          },
          {
            type: "paragraph",
            content: "For this, React Router provides Index Routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="dashboard" element={<Dashboard />}>
  <Route index element={<Welcome />} />
</Route>`
          },
          {
            type: "paragraph",
            content: "Visiting:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: "Welcome Component"
          },
          {
            type: "paragraph",
            content: "inside the Outlet."
          }
        ]
      },

      {
        heading: "Example of Index Route",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `<Route path="dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />
</Route>`
          },
          {
            type: "paragraph",
            content: "URLs:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: "DashboardHome"
          },
          {
            type: "paragraph",
            content: "URLs:"
          },
          {
            type: "output",
            content: "/dashboard/profile"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: "Profile"
          }
        ]
      },

      {
        heading: "Multi-Level Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Nested routes can contain more nested routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `/dashboard
   └── users
         └── details`
          },
          {
            type: "paragraph",
            content: "Route Configuration:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="dashboard" element={<Dashboard />}>
  <Route path="users" element={<Users />}>
    <Route path="details" element={<UserDetails />} />
  </Route>
</Route>`
          },
          {
            type: "paragraph",
            content: "Generated URL:"
          },
          {
            type: "output",
            content: "/dashboard/users/details"
          },
          {
            type: "paragraph",
            content: "This creates deep route hierarchies."
          }
        ]
      },

      {
        heading: "Layout Routes",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most powerful uses of nested routing is creating layouts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Sidebar",
              "Navbar",
              "Main Content",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of repeating these elements on every page:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <Outlet />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Routes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="dashboard" element={<DashboardLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`
          },
          {
            type: "paragraph",
            content: "All child pages automatically inherit the layout."
          }
        ]
      },

      {
        heading: "Nested Navigation Links",
        blocks: [
          {
            type: "paragraph",
            content: "Navigation often accompanies nested routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Link to="profile">Profile</Link>
<Link to="settings">Settings</Link>
<Link to="orders">Orders</Link>`
          },
          {
            type: "paragraph",
            content: "Current URL:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "Generated links:"
          },
          {
            type: "output",
            content: [
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "React Router automatically resolves relative paths."
          }
        ]
      },

      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Admin Dashboard:"
          },
          {
            type: "tree",
            content: `/admin
│
├── users
├── products
├── orders
├── analytics
└── settings`
          },
          {
            type: "paragraph",
            content: "Routes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route path="admin" element={<AdminLayout />}>
  <Route path="users" element={<Users />} />
  <Route path="products" element={<Products />} />
  <Route path="orders" element={<Orders />} />
  <Route path="analytics" element={<Analytics />} />
  <Route path="settings" element={<Settings />} />
</Route>`
          },
          {
            type: "paragraph",
            content: "This pattern is used in most modern SaaS applications."
          }
        ]
      },

      {
        heading: "Benefits of Nested Routes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "1. Shared Layouts",
                description: "Avoid duplicate code."
              },
              {
                title: "2. Cleaner Structure",
                description: "Route hierarchy mirrors UI hierarchy."
              },
              {
                title: "3. Better Scalability",
                description: "Large applications become easier to manage."
              },
              {
                title: "4. Improved Maintainability",
                description: "Layout changes happen in one place."
              },
              {
                title: "5. Better Developer Experience",
                description: "Routes become predictable and organized."
              }
            ]
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Forgetting Outlet",
                answer: "Child routes will never appear if you forget `<Outlet />`.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function Dashboard() {
  return <h1>Dashboard</h1>;
}`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}`
                  }
                ]
              },
              {
                question: "Mistake 2: Using Absolute Child Paths",
                answer: "Using an absolute path in a child creates an independent route, ignoring the parent prefix.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<Route path="/profile" element={<Profile />} />`
                  }
                ]
              },
              {
                question: "Mistake 3: Duplicating Layout Code",
                answer: "Creating separate layouts for every page is redundant. Use Layout Routes instead."
              },
              {
                question: "Mistake 4: Over-Nesting",
                answer: "Bad: `/dashboard/users/details/edit/settings/profile`. Deep nesting becomes difficult to maintain. Keep route hierarchies reasonable."
              }
            ]
          }
        ]
      },

      {
        heading: "Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Outlet for every parent route",
              "Use relative paths for child routes",
              "Create dedicated layout components",
              "Use index routes for default pages",
              "Keep route trees organized",
              "Match route structure with UI structure",
              "Avoid unnecessary deep nesting",
              "Group related pages together"
            ]
          }
        ]
      },

      {
        heading: "Professional Route Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
│
├── Home
├── About
├── Dashboard
│   ├── Profile
│   ├── Orders
│   └── Settings
│
└── Admin
    ├── Users
    ├── Products
    └── Analytics`
          },
          {
            type: "paragraph",
            content: "This structure scales very well."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Nested Routes allow routes to exist inside other routes."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Parent routes and child routes",
              "Route hierarchies",
              "Nested route configuration",
              "The purpose of <Outlet />",
              "Relative and absolute paths",
              "Index routes",
              "Multi-level nested routes",
              "Layout routes",
              "Nested navigation",
              "Common mistakes",
              "Industry best practices"
            ]
          },
          {
            type: "paragraph",
            content: "Nested routing is one of the most important React Router features because it enables shared layouts, cleaner architectures, and scalable applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A useful rule followed by experienced React developers is: If multiple pages share the same layout, they should usually be nested routes. When your route hierarchy matches your UI hierarchy, your application becomes significantly easier to understand, maintain, and scale."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Protected Routes
============================= */
    "protected-routes": {
    title: "Protected Routes",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications often contain pages that should not be accessible to every user."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User dashboards",
              "Profile settings",
              "Admin panels",
              "Payment pages",
              "Order history",
              "Premium content",
              "Account management sections"
            ]
          },
          {
            type: "paragraph",
            content: "Imagine a banking application. Anyone can visit:"
          },
          {
            type: "output",
            content: [
              "/login",
              "/register",
              "/about"
            ]
          },
          {
            type: "paragraph",
            content: "But pages such as:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/transactions",
              "/profile"
            ]
          },
          {
            type: "paragraph",
            content: "should only be accessible after authentication."
          },
          {
            type: "paragraph",
            content: "This is where Protected Routes come into play."
          },
          {
            type: "paragraph",
            content: "Protected Routes are a routing pattern used to restrict access to specific pages based on conditions such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User authentication",
              "User roles",
              "Subscription status",
              "Permissions",
              "Feature access"
            ]
          },
          {
            type: "paragraph",
            content: "Protected Routes are one of the most common patterns used in professional React applications."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Protected Routes are",
              "Why they are needed",
              "How Protected Routes work internally",
              "Authentication-based route protection",
              "Role-based route protection",
              "Redirecting unauthorized users",
              "Creating reusable Protected Route components",
              "Common mistakes beginners make",
              "Industry best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will be able to secure React routes properly and build real-world authentication flows."
          }
        ]
      },

      {
        heading: "What Are Protected Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "A Protected Route is a route that checks whether a user meets certain requirements before allowing access."
          },
          {
            type: "paragraph",
            content: "Instead of directly rendering a page, React first verifies a condition."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "User Requests:",
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "React checks: Is User Logged In?"
          },
          {
            type: "paragraph",
            content: "If Yes:"
          },
          {
            type: "output",
            content: "Render Dashboard"
          },
          {
            type: "paragraph",
            content: "If No:"
          },
          {
            type: "output",
            content: "Redirect To Login Page"
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Protected Route", "→",
              "Authentication Check", "→",
              "Allow OR Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "This mechanism prevents unauthorized access to sensitive parts of an application."
          }
        ]
      },

      {
        heading: "Why Protected Routes Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Without route protection, users could manually type URLs into the browser."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "https://myapp.com/admin"
          },
          {
            type: "paragraph",
            content: "Even if the Admin button is hidden, users could still try accessing the URL directly."
          },
          {
            type: "paragraph",
            content: "Protected Routes solve this problem by validating access before rendering the page."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Improves security",
              "Prevents unauthorized access",
              "Creates better user experiences",
              "Supports authentication systems",
              "Supports role-based access control",
              "Works seamlessly with React Router"
            ]
          },
          {
            type: "paragraph",
            content: "Every serious React application uses some form of route protection."
          }
        ]
      },

      {
        heading: "Understanding the Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Consider this routing setup:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>`
          },
          {
            type: "paragraph",
            content: "Problem:\nAnyone can visit:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "even if they are not logged in."
          },
          {
            type: "paragraph",
            content: "We need a mechanism that decides:"
          },
          {
            type: "output",
            content: "Can user enter this page?"
          },
          {
            type: "paragraph",
            content: "before rendering it."
          },
          {
            type: "paragraph",
            content: "Protected Routes provide that mechanism."
          }
        ]
      },

      {
        heading: "How Protected Routes Work",
        blocks: [
          {
            type: "paragraph",
            content: "Protected Routes act as gatekeepers."
          },
          {
            type: "paragraph",
            content: "Instead of rendering a page immediately:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/dashboard"
  element={<Dashboard />}
/>`
          },
          {
            type: "paragraph",
            content: "we place a protection layer in front of it."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Request Dashboard", "→",
              "Protected Route", "→",
              "Authentication Check", "→",
              "Authorized? (Yes → Dashboard | No → Login Page)"
            ]
          },
          {
            type: "paragraph",
            content: "The protection logic runs first."
          }
        ]
      },

      {
        heading: "Basic Protected Route Component",
        blocks: [
          {
            type: "paragraph",
            content: "A common approach is creating a reusable component."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "isAuthenticated"
          },
          {
            type: "paragraph",
            content: "determines whether access is allowed."
          },
          {
            type: "paragraph",
            content: "If authentication fails:"
          },
          {
            type: "output",
            content: "<Navigate />"
          },
          {
            type: "paragraph",
            content: "redirects the user. Otherwise:"
          },
          {
            type: "output",
            content: "children"
          },
          {
            type: "paragraph",
            content: "are rendered."
          }
        ]
      },

      {
        heading: "Using a Protected Route",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/dashboard"
  element={
    <ProtectedRoute
      isAuthenticated={true}
    >
      <Dashboard />
    </ProtectedRoute>
  }
/>`
          },
          {
            type: "paragraph",
            content: "When:"
          },
          {
            type: "output",
            content: "isAuthenticated = true"
          },
          {
            type: "paragraph",
            content: "Dashboard loads."
          },
          {
            type: "paragraph",
            content: "When:"
          },
          {
            type: "output",
            content: "isAuthenticated = false"
          },
          {
            type: "paragraph",
            content: "User gets redirected."
          },
          {
            type: "paragraph",
            content: "This pattern is extremely common in React projects."
          }
        ]
      },

      {
        heading: "Understanding Navigate",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "output",
            content: "Navigate"
          },
          {
            type: "paragraph",
            content: "for programmatic redirection."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `return <Navigate to="/login" />;`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "Leave Current Route", "→",
              "Go To Login Page"
            ]
          },
          {
            type: "paragraph",
            content: "This is the preferred way to redirect users in React Router."
          }
        ]
      },

      {
        heading: "Protecting Multiple Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of protecting only one route:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "you can protect many pages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/profile"
  element={
    <ProtectedRoute
      isAuthenticated={user}
    >
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute
      isAuthenticated={user}
    >
      <Settings />
    </ProtectedRoute>
  }
/>`
          },
          {
            type: "paragraph",
            content: "All pages now require authentication."
          }
        ]
      },

      {
        heading: "Using Authentication State",
        blocks: [
          {
            type: "paragraph",
            content: "In real applications:"
          },
          {
            type: "output",
            content: "isAuthenticated"
          },
          {
            type: "paragraph",
            content: "usually comes from state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, setUser] = useState(null);`
          },
          {
            type: "paragraph",
            content: "Protected Route:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProtectedRoute
  isAuthenticated={user}
>`
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "output",
            content: "user === null"
          },
          {
            type: "paragraph",
            content: "User is considered unauthenticated."
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "output",
            content: "user !== null"
          },
          {
            type: "paragraph",
            content: "Access is granted."
          }
        ]
      },

      {
        heading: "Protecting Nested Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often contain entire protected sections."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of protecting each route individually:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  element={
    <ProtectedRoute
      isAuthenticated={user}
    />
  }
>
  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/dashboard/profile"
    element={<Profile />}
  />
</Route>`
          },
          {
            type: "paragraph",
            content: "This protects multiple routes at once. Much cleaner and more scalable."
          }
        ]
      },

      {
        heading: "Using Outlet For Nested Protection",
        blocks: [
          {
            type: "paragraph",
            content: "React Router provides:"
          },
          {
            type: "output",
            content: "Outlet"
          },
          {
            type: "paragraph",
            content: "for nested routes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import {
  Navigate,
  Outlet
} from "react-router-dom";

function ProtectedRoute() {
  const user = true;

  return user
    ? <Outlet />
    : <Navigate to="/login" />;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route element={<ProtectedRoute />}>
  <Route
    path="/dashboard"
    element={<Dashboard />}
  />
  <Route
    path="/profile"
    element={<Profile />}
  />
</Route>`
          },
          {
            type: "paragraph",
            content: "All child routes automatically become protected."
          }
        ]
      },

      {
        heading: "Role-Based Protected Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is not the only requirement. Sometimes different users have different permissions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Admin",
              "Can Access:",
              "- Dashboard",
              "- Users",
              "- Settings",
              "",
              "Regular User",
              "Can Access:",
              "- Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Role-based protection solves this."
          }
        ]
      },

      {
        heading: "Example: Admin Route",
        blocks: [
          {
            type: "paragraph",
            content: "Protected Route:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function AdminRoute({
  user,
  children
}) {
  if (
    user?.role !== "admin"
  ) {
    return (
      <Navigate to="/" />
    );
  }

  return children;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Route
  path="/admin"
  element={
    <AdminRoute user={user}>
      <AdminPanel />
    </AdminRoute>
  }
/>`
          },
          {
            type: "paragraph",
            content: "Only admins can access:"
          },
          {
            type: "output",
            content: "/admin"
          }
        ]
      },

      {
        heading: "Multiple Role Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function ProtectedRoute({
  user,
  allowedRoles,
  children
}) {
  if (
    !allowedRoles.includes(
      user.role
    )
  ) {
    return (
      <Navigate to="/" />
    );
  }

  return children;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProtectedRoute
  user={user}
  allowedRoles={[
    "admin",
    "manager"
  ]}
>
  <Reports />
</ProtectedRoute>`
          },
          {
            type: "paragraph",
            content: "Access becomes permission-based."
          }
        ]
      },

      {
        heading: "Remembering Intended Destination",
        blocks: [
          {
            type: "paragraph",
            content: "Professional applications often redirect users back after login."
          },
          {
            type: "paragraph",
            content: "Example:\nUser tries:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "Not authenticated.\nRedirect:"
          },
          {
            type: "output",
            content: "/login"
          },
          {
            type: "paragraph",
            content: "After login:"
          },
          {
            type: "output",
            content: "/dashboard"
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "output",
            content: "/"
          },
          {
            type: "paragraph",
            content: "This creates a much smoother user experience."
          }
        ]
      },

      {
        heading: "Loading States During Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication often requires API requests."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Checking Session..."
          },
          {
            type: "paragraph",
            content: "During this time:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <Spinner />;
}`
          },
          {
            type: "paragraph",
            content: "Avoid redirecting too early."
          },
          {
            type: "paragraph",
            content: "Many beginners accidentally redirect users before authentication finishes loading."
          }
        ]
      },

      {
        heading: "Protected Routes vs Hidden Links",
        blocks: [
          {
            type: "paragraph",
            content: "A common misconception:"
          },
          {
            type: "output",
            content: [
              "If I hide a navigation link,",
              "the page is protected."
            ]
          },
          {
            type: "paragraph",
            content: "Wrong. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{isAdmin && (
  <Link to="/admin">
    Admin
  </Link>
)}`
          },
          {
            type: "paragraph",
            content: "The URL can still be entered manually."
          },
          {
            type: "paragraph",
            content: "Always protect the route itself. Never rely only on hidden UI elements."
          }
        ]
      },

      {
        heading: "Client-Side Protection vs Server-Side Protection",
        blocks: [
          {
            type: "paragraph",
            content: "React Protected Routes provide:"
          },
          {
            type: "output",
            content: "Client-Side Protection"
          },
          {
            type: "paragraph",
            content: "Important:\nClient-side protection is NOT true security. Users can still inspect frontend code. Real security must be enforced on the server."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Frontend:",
              "Hide Admin Page",
              "",
              "Backend:",
              "Reject Unauthorized Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Professional applications use both."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Protecting Buttons Instead of Routes",
                answer: "Hiding a button does not secure a route. A user can still type the URL manually.",
                examples: [
                  {
                    title: "Wrong",
                    language: "jsx",
                    content: `{user && (\n  <Link to=\"/dashboard\">\n    Dashboard\n  </Link>\n)}`
                  }
                ]
              },
              {
                question: "Mistake 2: Forgetting Redirects",
                answer: "Returning `null` leaves users stranded on a blank page. Always redirect unauthorized users.",
                examples: [
                  {
                    title: "Wrong",
                    language: "javascript",
                    content: `if (!user) { return null; }`
                  },
                  {
                    title: "Better",
                    language: "jsx",
                    content: `return <Navigate to=\"/login\" />;`
                  }
                ]
              },
              {
                question: "Mistake 3: Repeating Protection Logic",
                answer: "Avoid repeating `if (!user)` checks in every component. Create reusable route guards instead."
              },
              {
                question: "Mistake 4: Ignoring Loading States",
                answer: "Checking `if (!user)` before an async authentication check finishes will cause premature redirects. Always handle loading properly."
              },
              {
                question: "Mistake 5: Trusting Frontend Roles",
                answer: "Never trust `user.role` alone for security. Server-side validation is still required."
              }
            ]
          }
        ]
      },

      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers usually:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create reusable Protected Route components",
              "Use React Context for authentication state",
              "Protect route groups with Outlet",
              "Handle loading states properly",
              "Redirect users intelligently",
              "Implement role-based permissions",
              "Validate permissions on the backend",
              "Keep route protection logic centralized"
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Protected Routes are commonly used for:"
          },
          {
            type: "cards",
            items: [
              {
                title: "E-Commerce",
                description: "Orders, Checkout, Profile"
              },
              {
                title: "Banking Apps",
                description: "Transactions, Payments, Statements"
              },
              {
                title: "Learning Platforms",
                description: "Courses, Certificates, Premium Content"
              },
              {
                title: "SaaS Applications",
                description: "Dashboard, Billing, Team Settings"
              },
              {
                title: "Admin Panels",
                description: "Users, Analytics, Configuration"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Almost every production React application uses Protected Routes."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Protected Routes allow React applications to restrict access to specific pages based on conditions such as authentication, roles, permissions, or subscriptions."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Protected Routes act as route guards",
              "Unauthorized users can be redirected",
              "React Router uses Navigate for redirection",
              "Outlet helps protect nested routes",
              "Role-based access control supports multiple permission levels",
              "Loading states are important during authentication checks",
              "Hiding UI is not the same as protecting routes",
              "Backend validation is still required for real security"
            ]
          },
          {
            type: "paragraph",
            content: "Protected Routes are a foundational pattern in modern React applications and are essential for building secure dashboards, admin panels, SaaS products, and authentication-based systems."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A Protected Route is not a security feature by itself—it is a user experience feature. Real security always comes from backend authorization. React Protected Routes improve navigation flow and prevent casual access, but sensitive data should never be trusted solely to frontend route checks."
          }
        ]
      }
    ]
  },
};

export default routing;