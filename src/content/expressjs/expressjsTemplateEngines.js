const expressjsTemplateEngines = {

/* ===========================
    First Topic : Introduction to Server-Side Rendering
============================= */
    "expressjs-introduction-to-ssr": {
    title: "Introduction to Server-Side Rendering",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction to Server-Side Rendering (SSR)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern web applications can generate web pages in different ways. Some applications send a fully prepared HTML page directly from the server, while others send a minimal HTML file and let JavaScript build the page inside the browser. These approaches are known as Server-Side Rendering (SSR) and Client-Side Rendering (CSR)."
          },
          {
            type: "paragraph",
            content:
              "Express.js is one of the most popular frameworks for building server-rendered applications in Node.js. By combining Express with a template engine such as EJS, Pug, or Handlebars, developers can generate dynamic HTML pages on the server before sending them to the browser."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what Server-Side Rendering is, why it exists, how Express performs it, and where it fits in modern web development."
          }
        ]
      },

      {
        heading: "What is Server-Side Rendering (SSR)?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Server-Side Rendering (SSR) is the process of generating a complete HTML page on the web server before sending it to the client's browser."
          },
          {
            type: "paragraph",
            content:
              "Instead of sending only data or JavaScript, the server combines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML templates",
              "Dynamic data",
              "Business logic"
            ]
          },
          {
            type: "paragraph",
            content:
              "to produce a finished HTML document."
          },
          {
            type: "paragraph",
            content:
              "The browser simply receives this HTML and displays it immediately."
          },
          {
            type: "paragraph",
            content: "Example flow:"
          },
          {
            type: "flow",
            steps: [
              "User requests: https://example.com/profile", "→",
              "Express Server", "→",
              "Retrieve user data", "→",
              "Combine data with template", "→",
              "Generate complete HTML", "→",
              "Browser receives ready-made page"
            ]
          },
          {
            type: "paragraph",
            content:
              "Unlike static HTML files, every request can produce different content depending on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logged-in user",
              "Database records",
              "Current time",
              "User preferences",
              "URL parameters",
              "Query parameters"
            ]
          },
          {
            type: "paragraph",
            content:
              "This makes SSR suitable for websites that display personalized or frequently changing information."
          }
        ]
      },

      {
        heading: "Why Server-Side Rendering Exists",
        blocks: [
          {
            type: "paragraph",
            content:
              "In the early days of the web, browsers had very limited JavaScript capabilities. Servers generated almost every page before sending it to users."
          },
          {
            type: "paragraph",
            content:
              "Although JavaScript frameworks later popularized client-side rendering, SSR remains extremely important because many websites still benefit from server-generated HTML."
          },
          {
            type: "paragraph",
            content: "SSR solves several important problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Generates dynamic pages",
              "Improves first-page loading experience",
              "Makes pages easier for search engines to understand",
              "Allows users to see content even before JavaScript finishes loading",
              "Keeps sensitive business logic on the server"
            ]
          },
          {
            type: "paragraph",
            content:
              "Today, many modern frameworks—including Next.js, Nuxt, Remix, and traditional Express applications—use SSR either completely or partially."
          }
        ]
      },

      {
        heading: "How Express Generates HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "Express itself is not a template engine."
          },
          {
            type: "paragraph",
            content:
              "Instead, it works together with template engines."
          },
          {
            type: "paragraph",
            content: "The general process looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser Request", "→",
              "Express Route", "→",
              "Retrieve Data (Database/API/File)", "→",
              "Template Engine (EJS/Pug/Handlebars)", "→",
              "Merge Template + Data", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "paragraph",
            content: "Suppose a user visits:"
          },
          {
            type: "output",
            content: "/products"
          },
          {
            type: "paragraph",
            content: "Express may perform these steps:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Receive the request.",
              "Fetch products from a database.",
              "Pass product data to a template.",
              "Generate HTML.",
              "Send the HTML to the browser."
            ]
          },
          {
            type: "paragraph",
            content:
              "Instead of manually building HTML strings, the template engine inserts data into predefined templates."
          }
        ]
      },

      {
        heading: "Request → Template → HTML → Browser Flow",
        blocks: [
          {
            type: "paragraph",
            content:
              "The SSR workflow is one of the most important concepts to understand."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Step 1: Browser Sends a Request"
          },
          {
            type: "output",
            content: "GET /profile"
          },
          {
            type: "paragraph",
            content:
              "The browser asks the server for a web page."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Step 2: Express Receives the Request"
          },
          {
            type: "paragraph",
            content:
              "The request reaches an Express route."
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/profile", (req, res) => {\n    // Process request\n});`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Step 3: Server Collects Data"
          },
          {
            type: "paragraph",
            content: "The server may fetch:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User information",
              "Products",
              "Blog posts",
              "News articles",
              "Dashboard statistics"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {\n    name: "Alice",\n    age: 25\n};`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Step 4: Template Engine Creates HTML"
          },
          {
            type: "paragraph",
            content:
              "The data is injected into a template."
          },
          {
            type: "paragraph",
            content: "Conceptually:"
          },
          {
            type: "code",
            language: "text",
            content: "Template\n\n<h1><%= name %></h1>\n\n+\n\n{name: \"Alice\"}\n\n↓\n\nGenerated HTML\n\n<h1>Alice</h1>"
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Step 5: Browser Displays the Page"
          },
          {
            type: "paragraph",
            content:
              "The browser receives fully generated HTML."
          },
          {
            type: "code",
            language: "html",
            content: "<html>\n<body>\n<h1>Alice</h1>\n</body>\n</html>"
          },
          {
            type: "paragraph",
            content:
              "No additional rendering is required before the user can see the page."
          }
        ]
      },

      {
        heading: "Why Template Engines Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine generating HTML manually."
          },
          {
            type: "code",
            language: "javascript",
            content: `let html =\n"<html>" +\n"<body>" +\n"<h1>" + user.name + "</h1>" +\n"</body>" +\n"</html>";`
          },
          {
            type: "paragraph",
            content:
              "As applications grow, this becomes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Difficult to read",
              "Hard to maintain",
              "Error-prone",
              "Nearly impossible to reuse"
            ]
          },
          {
            type: "paragraph",
            content:
              "Template engines solve this problem."
          },
          {
            type: "paragraph",
            content:
              "They allow developers to write HTML naturally while inserting dynamic values only where needed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1><%= user.name %></h1>`
          },
          {
            type: "paragraph",
            content:
              "This is much cleaner than concatenating strings."
          },
          {
            type: "paragraph",
            content:
              "Template engines also support:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Variables",
              "Loops",
              "Conditions",
              "Includes",
              "Layouts",
              "Reusable components"
            ]
          },
          {
            type: "paragraph",
            content:
              "You'll learn these in the upcoming lessons."
          }
        ]
      },

      {
        heading: "Server-Side Rendering vs Client-Side Rendering",
        blocks: [
          {
            type: "paragraph",
            content:
              "The biggest alternative to SSR is Client-Side Rendering (CSR)."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Server-Side Rendering"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request", "→",
              "Server generates HTML", "→",
              "Complete HTML returned", "→",
              "Browser displays page"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Client-Side Rendering"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request", "→",
              "Server sends HTML shell", "→",
              "JavaScript downloads", "→",
              "API requests happen", "→",
              "JavaScript builds page", "→",
              "Page finally appears"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Comparison"
          },
          {
            type: "table",
            headers: ["Feature", "Server-Side Rendering", "Client-Side Rendering"],
            rows: [
              ["HTML generation", "Server", "Browser"],
              ["Initial content", "Immediately available", "Built after JavaScript executes"],
              ["SEO", "Excellent", "Requires additional optimization"],
              ["Initial page load", "Usually faster for content", "Can appear slower on first load"],
              ["Browser workload", "Lower", "Higher"],
              ["Server workload", "Higher", "Lower"],
              ["Best for", "Websites, blogs, news, e-commerce", "Highly interactive applications"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Neither approach is universally better. The right choice depends on your application's goals."
          }
        ]
      },

      {
        heading: "SSR vs Single-Page Applications (SPA)",
        blocks: [
          {
            type: "paragraph",
            content:
              "A Single-Page Application (SPA) loads a single HTML page initially and updates content dynamically without performing full page reloads."
          },
          {
            type: "paragraph",
            content: "Examples include applications built with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "Angular",
              "Vue"
            ]
          },
          {
            type: "paragraph",
            content: "In an SPA:"
          },
          {
            type: "flow",
            steps: [
              "Browser loads app", "→",
              "JavaScript controls navigation", "→",
              "Only data changes", "→",
              "Entire page isn't reloaded"
            ]
          },
          {
            type: "paragraph",
            content:
              "By contrast, a traditional SSR application requests a new HTML page from the server whenever the user navigates to another page."
          },
          {
            type: "paragraph",
            content: "High-Level Comparison"
          },
          {
            type: "table",
            headers: ["SSR", "SPA"],
            rows: [
              ["Server generates HTML", "Browser generates UI"],
              ["Good for SEO", "Better for highly interactive apps"],
              ["Faster initial content", "Faster page transitions after load"],
              ["Less JavaScript required initially", "More JavaScript downloaded upfront"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Modern frameworks like Next.js combine SSR and SPA techniques to provide the benefits of both."
          }
        ]
      },

      {
        heading: "SEO Implications of SSR",
        blocks: [
          {
            type: "paragraph",
            content:
              "One major reason developers choose SSR is Search Engine Optimization (SEO)."
          },
          {
            type: "paragraph",
            content:
              "Search engines work by crawling HTML pages."
          },
          {
            type: "paragraph",
            content: "With SSR:"
          },
          {
            type: "flow",
            steps: [
              "Crawler requests page", "→",
              "Receives complete HTML", "→",
              "Indexes content easily"
            ]
          },
          {
            type: "paragraph",
            content: "Since the page already contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Titles",
              "Headings",
              "Text",
              "Images",
              "Metadata"
            ]
          },
          {
            type: "paragraph",
            content:
              "search engines can process it immediately."
          },
          {
            type: "paragraph",
            content: "This is particularly useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blogs",
              "Documentation sites",
              "E-commerce websites",
              "Marketing websites",
              "News portals",
              "Educational platforms"
            ]
          },
          {
            type: "paragraph",
            content:
              "Although modern search engines can execute JavaScript, server-rendered pages are generally indexed more consistently and become available to crawlers sooner, especially for content-heavy websites."
          }
        ]
      },

      {
        heading: "Performance Overview",
        blocks: [
          {
            type: "paragraph",
            content:
              "Performance is often misunderstood when comparing SSR and CSR."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "SSR Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster first content display",
              "Users see content sooner",
              "Better perceived performance",
              "Less client-side rendering work"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "SSR Costs"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Every request requires server processing",
              "Server resources increase as traffic grows",
              "Rendering large templates repeatedly can become expensive"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "CSR Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "After the initial load, page transitions can feel very fast.",
              "Much of the rendering work is handled by the user's browser."
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "CSR Costs"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Larger JavaScript bundles",
              "Slower first meaningful content on slower devices or networks",
              "Heavier browser processing"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Important Insight"
          },
          {
            type: "quote",
            content: "Fast first page ≠ fast entire application."
          },
          {
            type: "paragraph",
            content:
              "SSR usually improves the first page load, while CSR often provides smoother navigation after the application has loaded. This is why many modern applications use hybrid rendering strategies."
          }
        ]
      },

      {
        heading: "Real-World Use Cases",
        blocks: [
          {
            type: "paragraph",
            content:
              "Server-Side Rendering is commonly used in:"
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "E-commerce Websites"
          },
          {
            type: "paragraph",
            content:
              "Each product page is generated dynamically."
          },
          {
            type: "output",
            content: "/products/phone"
          },
          {
            type: "output",
            content: "/products/laptop"
          },
          {
            type: "output",
            content: "/products/shoes"
          },
          {
            type: "paragraph",
            content:
              "Product information comes from a database before HTML is created."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Blogging Platforms"
          },
          {
            type: "paragraph",
            content:
              "Each article is rendered dynamically."
          },
          {
            type: "output",
            content: "/blog/nodejs"
          },
          {
            type: "output",
            content: "/blog/express"
          },
          {
            type: "output",
            content: "/blog/javascript"
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "News Websites"
          },
          {
            type: "paragraph",
            content:
              "Every request may generate the latest headlines."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Online Learning Platforms"
          },
          {
            type: "paragraph",
            content:
              "Course pages are generated using student progress and lesson data."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Company Websites"
          },
          {
            type: "paragraph",
            content: "Dynamic pages display:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Team members",
              "Services",
              "Careers",
              "Contact information"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Dashboards"
          },
          {
            type: "paragraph",
            content:
              "After login, each user receives personalized content."
          },
          {
            type: "output",
            content: "Welcome, Alice"
          },
          {
            type: "output",
            content: "Revenue: $18,200"
          },
          {
            type: "output",
            content: "Pending Orders: 12"
          },
          {
            type: "paragraph",
            content:
              "The HTML differs for every authenticated user."
          }
        ]
      },

      {
        heading: "When Should You Use Server-Side Rendering?",
        blocks: [
          {
            type: "paragraph",
            content:
              "SSR is an excellent choice when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Your pages should be indexed by search engines.",
              "The first page should display content quickly.",
              "Content changes frequently based on server-side data.",
              "Users access your application from slower devices or networks.",
              "You are building blogs, documentation sites, dashboards, e-commerce platforms, or content-driven websites."
            ]
          },
          {
            type: "paragraph",
            content:
              "A purely client-side application may be more suitable when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Most interactions happen after the initial load.",
              "The application behaves more like desktop software.",
              "SEO is not a major requirement.",
              "You want rich, highly interactive user interfaces."
            ]
          }
        ]
      },

      {
        heading: "Advantages of Server-Side Rendering",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Better SEO support",
              "Faster first meaningful content",
              "Dynamic HTML generation",
              "Personalized pages for each request",
              "Reduced client-side rendering work",
              "Works well even when JavaScript loads slowly",
              "Keeps sensitive business logic on the server",
              "Easier integration with traditional web architectures"
            ]
          }
        ]
      },

      {
        heading: "Limitations of Server-Side Rendering",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Higher server workload",
              "Every request may require rendering",
              "More complex caching strategies",
              "Slower response if rendering is computationally expensive",
              "Less interactive by default than modern SPAs unless enhanced with JavaScript"
            ]
          },
          {
            type: "paragraph",
            content:
              "These limitations can often be mitigated using caching, content delivery networks (CDNs), and hybrid rendering techniques."
          }
        ]
      },

      {
        heading: "Common Misconceptions About SSR",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "SSR means no JavaScript.",
                answer: "False. Most server-rendered websites still use JavaScript for interactivity such as menus, forms, image sliders, and live updates."
              },
              {
                question: "SSR is outdated.",
                answer: "False. Many modern frameworks—including Next.js, Nuxt, Remix, SvelteKit, and others—continue to use SSR because it offers significant benefits for SEO and initial performance."
              },
              {
                question: "SSR is only for HTML websites.",
                answer: "False. An Express application can serve server-rendered HTML pages, REST APIs, static files, and JSON responses. A single Express server can support all of these simultaneously."
              }
            ]
          }
        ]
      },

      {
        heading: "How Express Fits into SSR",
        blocks: [
          {
            type: "paragraph",
            content:
              "Express provides the infrastructure for handling HTTP requests, routing, middleware, and responses. It does not render HTML on its own. Instead, it integrates with a template engine that transforms templates and data into complete HTML documents."
          },
          {
            type: "paragraph",
            content: "The overall workflow is:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Retrieve Data", "→",
              "Template Engine (EJS / Pug / Handlebars)", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "This separation of responsibilities keeps applications clean and maintainable:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Express manages requests and responses.",
              "Template engines generate dynamic HTML.",
              "Databases or APIs provide the data."
            ]
          },
          {
            type: "paragraph",
            content:
              "This architecture is one of the primary reasons Express has remained a popular choice for building server-rendered web applications."
          }
        ]
      },

      {
        heading: "Looking Ahead",
        blocks: [
          {
            type: "paragraph",
            content:
              "Now that you understand why Server-Side Rendering exists, the next step is learning how Express actually renders templates."
          },
          {
            type: "paragraph",
            content:
              "In the upcoming lessons, you'll explore popular template engines such as EJS, Pug, and Handlebars, learn how Express connects to them, and discover how dynamic data is transformed into fully rendered HTML pages that users see in their browsers."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Server-Side Rendering (SSR) is the process of generating complete HTML pages on the server before sending them to the browser. By combining Express with template engines such as EJS, Pug, or Handlebars, developers can create dynamic, personalized, and SEO-friendly web pages that load quickly and display content immediately."
          },
          {
            type: "paragraph",
            content:
              "SSR offers significant advantages for content-driven websites, e-commerce platforms, blogs, dashboards, and applications where SEO, first-page performance, and server-side data integration are important. While modern frameworks increasingly adopt hybrid approaches, understanding SSR with Express remains a foundational skill for building scalable, server-rendered Node.js applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 A common misconception about SSR is that it's a relic of the past, replaced entirely by client-side frameworks. In reality, SSR is experiencing a resurgence through frameworks like Next.js, Nuxt, and Remix, which combine the performance benefits of server-rendered HTML with the interactivity of client-side JavaScript. The key insight is that SSR and CSR are not mutually exclusive—they can work together. A well-architected Express application can deliver the initial HTML quickly while enhancing interactivity with client-side JavaScript. This hybrid approach gives you the best of both worlds: fast initial load, excellent SEO, and a rich, interactive user experience. When building with Express, think of SSR as a tool for the initial render and client-side enhancements as the layer that makes your application feel responsive and modern."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : EJS
============================= */
    "expressjs-ejs": {
    title: "EJS",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "After understanding Server-Side Rendering (SSR), the next step is learning how to generate dynamic HTML pages in Express. While Express is responsible for handling requests and responses, it doesn't know how to create HTML with dynamic data on its own. That's where template engines come into play."
          },
          {
            type: "paragraph",
            content:
              "One of the most popular and beginner-friendly template engines for Express is EJS (Embedded JavaScript). EJS allows you to write standard HTML and embed JavaScript directly inside it. This makes it easy to build dynamic web pages without manually concatenating HTML strings."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what EJS is, how to install and configure it with Express, its syntax, output tags, JavaScript capabilities, comments, includes, advantages, limitations, and best practices."
          }
        ]
      },

      {
        heading: "What is EJS?",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS (Embedded JavaScript) is a template engine for Node.js that allows developers to generate dynamic HTML by embedding JavaScript code inside HTML templates."
          },
          {
            type: "paragraph",
            content:
              "Instead of creating HTML using JavaScript strings, EJS lets you write normal HTML and insert dynamic values wherever needed."
          },
          {
            type: "paragraph",
            content: "For example, instead of writing:"
          },
          {
            type: "code",
            language: "javascript",
            content: `let html = "<h1>" + username + "</h1>";`
          },
          {
            type: "paragraph",
            content: "you simply write:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1><%= username %></h1>`
          },
          {
            type: "paragraph",
            content:
              "When Express renders the template, EJS replaces the placeholder with the actual value."
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "code",
            language: "javascript",
            content: `username = "Alice";`
          },
          {
            type: "paragraph",
            content: "The generated HTML becomes:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Alice</h1>`
          },
          {
            type: "paragraph",
            content:
              "This makes templates much cleaner, easier to read, and easier to maintain."
          }
        ]
      },

      {
        heading: "Why Use EJS?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building a blog website."
          },
          {
            type: "paragraph",
            content:
              "Without EJS, every blog page would require manually constructing HTML."
          },
          {
            type: "paragraph",
            content: "With EJS:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "One template can render thousands of blog posts.",
              "Only the data changes.",
              "The HTML layout stays the same."
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: "Template"
          },
          {
            type: "output",
            content: "Blog Title"
          },
          {
            type: "output",
            content: "Article Content"
          },
          {
            type: "output",
            content: "Author"
          },
          {
            type: "output",
            content: "Date"
          },
          {
            type: "paragraph",
            content:
              "Different requests simply insert different values into the same template."
          },
          {
            type: "paragraph",
            content:
              "This dramatically reduces duplicated code."
          }
        ]
      },

      {
        heading: "Why is EJS Called Embedded JavaScript?",
        blocks: [
          {
            type: "paragraph",
            content:
              "The name Embedded JavaScript comes from its ability to place JavaScript directly inside HTML."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1><%= username %></h1>\n\n<% if (isLoggedIn) { %>\n    <p>Welcome back!</p>\n<% } %>`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML defines the page structure.",
              "JavaScript controls the dynamic behavior."
            ]
          },
          {
            type: "paragraph",
            content:
              "The two work together seamlessly."
          }
        ]
      },

      {
        heading: "How EJS Works with Express",
        blocks: [
          {
            type: "paragraph",
            content: "The rendering process looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Fetch Data (Database/API)", "→",
              "EJS Template", "→",
              "Insert Dynamic Values", "→",
              "Generate HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home", {\n        username: "Alice"\n    });\n});`
          },
          {
            type: "paragraph",
            content:
              "Express sends the data to EJS."
          },
          {
            type: "paragraph",
            content:
              "EJS creates the final HTML."
          },
          {
            type: "paragraph",
            content:
              "The browser receives only the generated HTML—not the EJS code."
          }
        ]
      },

      {
        heading: "Installing EJS",
        blocks: [
          {
            type: "paragraph",
            content: "Install EJS using npm."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install ejs`
          },
          {
            type: "paragraph",
            content:
              "Once installed, it becomes available as a template engine for your Express application."
          },
          {
            type: "paragraph",
            content:
              "Your project structure might look like this:"
          },
          {
            type: "tree",
            content: "project/\n│\n├── node_modules/\n├── views/\n│   └── home.ejs\n├── app.js\n├── package.json"
          },
          {
            type: "paragraph",
            content:
              "The views folder stores EJS templates by default."
          }
        ]
      },

      {
        heading: "Configuring Express for EJS",
        blocks: [
          {
            type: "paragraph",
            content:
              "Express needs to know which template engine it should use."
          },
          {
            type: "paragraph",
            content: "Configure it using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const express = require("express");\nconst app = express();\napp.set("view engine", "ejs");`
          },
          {
            type: "paragraph",
            content:
              "That's all that's required."
          },
          {
            type: "paragraph",
            content:
              "Now Express automatically renders `.ejs` files."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home");`
          },
          {
            type: "paragraph",
            content: "Express searches for:"
          },
          {
            type: "output",
            content: "views/home.ejs"
          },
          {
            type: "paragraph",
            content:
              "You don't need to specify the `.ejs` extension."
          }
        ]
      },

      {
        heading: "Understanding the Views Folder",
        blocks: [
          {
            type: "paragraph",
            content:
              "By default, Express looks inside a folder named:"
          },
          {
            type: "output",
            content: "views/"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: "project/\nviews/\n│\n├── home.ejs\n├── about.ejs\n├── contact.ejs"
          },
          {
            type: "paragraph",
            content: "When you write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("about");`
          },
          {
            type: "paragraph",
            content: "Express automatically loads:"
          },
          {
            type: "output",
            content: "views/about.ejs"
          },
          {
            type: "paragraph",
            content:
              "You can also change the views directory if needed:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.set("views", "./templates");`
          },
          {
            type: "paragraph",
            content:
              "However, most projects keep the default `views` folder for consistency."
          }
        ]
      },

      {
        heading: "Creating Your First EJS Template",
        blocks: [
          {
            type: "paragraph",
            content: "Create:"
          },
          {
            type: "output",
            content: "views/home.ejs"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n<h1>Welcome to DevSphere</h1>\n</body>\n</html>"
          },
          {
            type: "paragraph",
            content: "Render it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home");\n});`
          },
          {
            type: "paragraph",
            content: "When visiting:"
          },
          {
            type: "output",
            content: "http://localhost:3000/"
          },
          {
            type: "paragraph",
            content:
              "The browser displays the generated HTML."
          }
        ]
      },

      {
        heading: "Basic EJS Syntax",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS uses special delimiters enclosed in `<%` and `%>`."
          },
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% JavaScript %>`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%= Value %>`
          },
          {
            type: "paragraph",
            content:
              "These tags tell EJS which parts are JavaScript and which parts are plain HTML."
          }
        ]
      },

      {
        heading: "Output Tags",
        blocks: [
          {
            type: "paragraph",
            content:
              "Output tags are the most commonly used feature of EJS."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "1. Escaped Output"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%= username %>`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home", {\n    username: "Alice"\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1><%= username %></h1>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Alice</h1>`
          },
          {
            type: "paragraph",
            content:
              "This is the safest output tag because HTML characters are automatically escaped."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: "<script>alert(\"Hi\")</script>"
          },
          {
            type: "paragraph",
            content:
              "is rendered as plain text instead of executable HTML."
          },
          {
            type: "paragraph",
            content:
              "This helps protect against Cross-Site Scripting (XSS) attacks."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "2. Unescaped Output"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%- htmlContent %>`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `htmlContent = "<strong>Hello</strong>";`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%- htmlContent %>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<strong>Hello</strong>`
          },
          {
            type: "paragraph",
            content:
              "Unlike `<%=`, this does not escape HTML."
          },
          {
            type: "paragraph",
            content:
              "Only use `<%-` with trusted content. Rendering user-supplied HTML without sanitization can introduce security vulnerabilities."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "3. Scriptlet Tag"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% %>`
          },
          {
            type: "paragraph",
            content:
              "This executes JavaScript without producing output."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%\nlet age = 20;\n%>`
          },
          {
            type: "paragraph",
            content:
              "Nothing is displayed."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Common EJS Tags"
          },
          {
            type: "table",
            headers: ["Tag", "Purpose"],
            rows: [
              ["`<% %>`", "Execute JavaScript"],
              ["`<%= %>`", "Output escaped value"],
              ["`<%- %>`", "Output unescaped HTML"],
              ["`<%# %>`", "Comment"],
              ["`<%%`", "Print a literal `<%`"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Knowing these four tags covers most day-to-day EJS development."
          }
        ]
      },

      {
        heading: "Using JavaScript Inside Templates",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS supports ordinary JavaScript."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%\nlet year = 2026;\n%>\n\n<p><%= year %></p>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<p>2026</p>`
          },
          {
            type: "paragraph",
            content: "You can declare:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Variables",
              "Functions",
              "Constants",
              "Expressions"
            ]
          },
          {
            type: "paragraph",
            content:
              "However, templates should focus on presentation. Complex business logic belongs in your Express routes or services, not in the view."
          }
        ]
      },

      {
        heading: "Conditional Statements",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS supports JavaScript conditions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% if (isLoggedIn) { %>\n<h2>Welcome Back!</h2>\n<% } else { %>\n<h2>Please Login</h2>\n<% } %>`
          },
          {
            type: "paragraph",
            content:
              "Only the matching block is rendered."
          },
          {
            type: "paragraph",
            content: "This is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login pages",
              "User dashboards",
              "Role-based content",
              "Conditional navigation",
              "Feature flags"
            ]
          }
        ]
      },

      {
        heading: "Loops",
        blocks: [
          {
            type: "paragraph",
            content:
              "Displaying lists is one of the biggest advantages of EJS."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const products = [\n    "Laptop",\n    "Phone",\n    "Tablet"\n];`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<ul>\n<% products.forEach(product => { %>\n<li><%= product %></li>\n<% }) %>\n</ul>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>\n<li>Laptop</li>\n<li>Phone</li>\n<li>Tablet</li>\n</ul>`
          },
          {
            type: "paragraph",
            content:
              "This allows a single template to render any number of items."
          }
        ]
      },

      {
        heading: "Comments",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS comments are ignored during rendering."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%# This is a comment %>`
          },
          {
            type: "paragraph",
            content:
              "Nothing appears in the generated HTML."
          },
          {
            type: "paragraph",
            content: "This is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation",
              "Temporary notes",
              "Explaining template sections"
            ]
          },
          {
            type: "paragraph",
            content:
              "Unlike HTML comments (`<!-- -->`), EJS comments are completely removed before the response is sent to the browser."
          }
        ]
      },

      {
        heading: "Includes (Brief Introduction)",
        blocks: [
          {
            type: "paragraph",
            content:
              "As applications grow, repeating the same HTML across pages becomes difficult to maintain."
          },
          {
            type: "paragraph",
            content:
              "EJS solves this with includes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: "views/\nheader.ejs\nfooter.ejs\nhome.ejs"
          },
          {
            type: "paragraph",
            content: "Inside `home.ejs`:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%- include("header") %>\n<h1>Home Page</h1>\n<%- include("footer") %>`
          },
          {
            type: "paragraph",
            content:
              "This inserts the contents of `header.ejs` and `footer.ejs` into the page."
          },
          {
            type: "paragraph",
            content: "Includes help you reuse common components such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bars",
              "Footers",
              "Sidebars",
              "Headers",
              "Menus"
            ]
          },
          {
            type: "paragraph",
            content:
              "We'll explore includes, layouts, and partials in much greater detail in later lessons."
          }
        ]
      },

      {
        heading: "Simple Dynamic Example",
        blocks: [
          {
            type: "paragraph",
            content: "Express:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home", {\n        name: "Alice",\n        city: "London"\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1>Hello <%= name %></h1>\n<p>City: <%= city %></p>`
          },
          {
            type: "paragraph",
            content: "Generated HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Hello Alice</h1>\n<p>City: London</p>`
          },
          {
            type: "paragraph",
            content:
              "The template remains the same while the data changes for each request."
          }
        ]
      },

      {
        heading: "Real-World Uses of EJS",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS is commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blog websites",
              "Admin dashboards",
              "E-commerce stores",
              "Company websites",
              "Portfolio websites",
              "School management systems",
              "Inventory applications",
              "Internal business tools"
            ]
          },
          {
            type: "paragraph",
            content:
              "Whenever the server needs to generate HTML dynamically, EJS is a suitable choice."
          }
        ]
      },

      {
        heading: "Advantages of EJS",
        blocks: [
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Simple HTML Syntax"
          },
          {
            type: "paragraph",
            content:
              "Developers write mostly standard HTML, making templates easy to learn and maintain."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Easy to Learn"
          },
          {
            type: "paragraph",
            content: "If you know:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML",
              "Basic JavaScript"
            ]
          },
          {
            type: "paragraph",
            content:
              "you can start using EJS almost immediately."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Seamless Express Integration"
          },
          {
            type: "paragraph",
            content:
              "Express supports EJS with minimal configuration using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.set("view engine", "ejs");`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Reusable Templates"
          },
          {
            type: "paragraph",
            content:
              "Includes reduce duplication and promote reusable UI components."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Dynamic Rendering"
          },
          {
            type: "paragraph",
            content:
              "The same template can generate thousands of unique pages using different data."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Full JavaScript Support"
          },
          {
            type: "paragraph",
            content:
              "Since EJS uses JavaScript, you don't need to learn a separate template language for conditions and loops."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Good for Server-Side Rendering"
          },
          {
            type: "paragraph",
            content:
              "EJS is lightweight and well suited for traditional server-rendered Express applications."
          }
        ]
      },

      {
        heading: "Limitations of EJS",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although EJS is powerful, it isn't ideal for every project."
          },
          {
            type: "paragraph",
            content: "Some limitations include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Templates can become difficult to read if too much JavaScript is embedded.",
              "It does not provide advanced component systems like modern frontend frameworks.",
              "Large interactive applications often require additional client-side JavaScript.",
              "Repeated rendering on every request can increase server workload.",
              "Layout support is more basic than in some other template engines unless additional packages or patterns are used."
            ]
          },
          {
            type: "paragraph",
            content:
              "These limitations are manageable for many applications when templates remain focused on presentation and complex logic stays outside the view layer."
          }
        ]
      },

      {
        heading: "Common Mistakes Beginners Make",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Putting Too Much Logic Inside Templates",
                answer: "Keep templates focused on displaying data. Perform calculations and business logic in your Express application before calling `res.render()`.",
                examples: [
                  {
                    title: "Avoid",
                    language: "ejs",
                    content: `<%\n// Hundreds of lines of business logic\n%>`
                  }
                ]
              },
              {
                question: "Using Unescaped Output Unnecessarily",
                answer: "Use `<%=` for user-generated content to benefit from automatic HTML escaping. Only use `<%-` when you intentionally need to render trusted HTML.",
                examples: [
                  {
                    title: "Less Safe",
                    language: "ejs",
                    content: `<%- userInput %>`
                  },
                  {
                    title: "Safer",
                    language: "ejs",
                    content: `<%= userInput %>`
                  }
                ]
              },
              {
                question: "Forgetting the Views Folder",
                answer: "Developers sometimes place templates outside the configured `views` directory without updating Express, resulting in \"view not found\" errors."
              },
              {
                question: "Rendering Complex HTML Strings",
                answer: "Instead of building HTML inside JavaScript variables, let EJS handle dynamic rendering through templates."
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
              "Keep templates focused on presentation, not business logic.",
              "Pass prepared data from Express rather than performing heavy processing inside templates.",
              "Use `<%= %>` for user-generated content to benefit from automatic HTML escaping.",
              "Organize reusable sections with includes instead of copying HTML between pages.",
              "Use meaningful file names for templates (such as `home.ejs`, `profile.ejs`, and `dashboard.ejs`).",
              "Store templates in a well-organized `views` directory with subfolders for larger projects.",
              "Keep JavaScript blocks concise to improve readability and maintainability."
            ]
          }
        ]
      },

      {
        heading: "EJS vs Writing Raw HTML Strings",
        blocks: [
          {
            type: "table",
            headers: ["Raw HTML Strings", "EJS Templates"],
            rows: [
              ["Difficult to read", "Clean and readable"],
              ["HTML mixed with JavaScript", "HTML remains separate from application logic"],
              ["Hard to reuse", "Supports reusable includes"],
              ["Poor maintainability", "Easy to maintain"],
              ["Error-prone", "Structured and organized"],
              ["Not ideal for large applications", "Well suited for scalable server-rendered applications"]
            ]
          }
        ]
      },

      {
        heading: "How EJS Fits into the Express Rendering Pipeline",
        blocks: [
          {
            type: "paragraph",
            content:
              "Understanding where EJS fits in the request lifecycle helps clarify its role."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Business Logic (Database / API / Services)", "→",
              "res.render(\"home\", data)", "→",
              "EJS Template", "→",
              "Merge Template + Data", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "A useful way to think about EJS is that it acts as the presentation layer. Express decides what data should be displayed, while EJS decides how that data should appear in the final HTML. Keeping these responsibilities separate leads to cleaner, more maintainable applications—a practice that many introductory tutorials mention only briefly but becomes increasingly important as projects grow."
          }
        ]
      },

      {
        heading: "Looking Ahead",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS is an excellent starting point for server-side rendering because it combines familiar HTML with the power of JavaScript. You now know how to install and configure it, render dynamic content, use output tags, embed JavaScript, write comments, and reuse templates with includes."
          },
          {
            type: "paragraph",
            content:
              "In the next lessons, you'll explore other popular template engines such as Pug and Handlebars, compare their approaches, and learn how to choose the right one for different types of Express applications."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "EJS (Embedded JavaScript) is a beginner-friendly template engine that allows developers to generate dynamic HTML pages by embedding JavaScript directly inside HTML templates. It integrates seamlessly with Express through the `view engine` configuration and the `views` folder, enabling clean separation between application logic and presentation."
          },
          {
            type: "paragraph",
            content:
              "EJS supports output tags (`<%=` for escaped output, `<%-` for unescaped HTML), scriptlet tags (`<% %>` for JavaScript logic), comments (`<%# %>`), conditionals, loops, and includes for reusable components. By keeping templates focused on presentation and using proper escaping for user-generated content, you can build maintainable, secure, and dynamic server-rendered Express applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common mistakes with EJS is treating it as a place to run complex business logic. EJS is a view layer—it should only handle display logic like conditionals and loops. When you find yourself writing complex calculations or database queries inside your EJS templates, it's a sign that logic should be moved back into your route handlers or services. Another often-overlooked aspect is that EJS templates are rendered on every request unless you implement caching. For high-traffic applications, consider using caching strategies or moving to a hybrid rendering approach if server-side rendering becomes a performance bottleneck. Understanding EJS's strengths—simplicity and familiarity—while respecting its limitations will help you build scalable, maintainable Express applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Pug
============================= */
    "expressjs-pug": {
    title: "Pug",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "After learning about EJS, you might wonder whether every template engine looks and feels like HTML. The answer is no. While EJS lets you write almost normal HTML with embedded JavaScript, Pug takes a completely different approach by replacing traditional HTML syntax with a clean, indentation-based language."
          },
          {
            type: "paragraph",
            content:
              "Pug is one of the most popular template engines for Express.js applications. Instead of writing long opening and closing HTML tags, you describe the structure of your page using indentation and concise syntax. This often results in smaller, cleaner, and more readable templates."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what Pug is, why developers use it, how to configure it with Express, its unique syntax, and when it is the right (or wrong) choice for your project."
          }
        ]
      },

      {
        heading: "What is Pug?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug is a template engine for Node.js and Express.js that allows developers to generate HTML using a simplified, indentation-based syntax."
          },
          {
            type: "paragraph",
            content:
              "Instead of writing standard HTML, you write Pug templates. When a user requests a page, Express passes the template to Pug, which compiles it into normal HTML before sending it to the browser."
          },
          {
            type: "paragraph",
            content:
              "The browser never sees Pug code—it only receives the generated HTML."
          },
          {
            type: "paragraph",
            content:
              "For example, instead of writing this HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>\n<html>\n<head>\n    <title>DevSphere</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n    <p>Learning Express.js</p>\n</body>\n</html>`
          },
          {
            type: "paragraph",
            content: "The same page in Pug becomes:"
          },
          {
            type: "code",
            language: "pug",
            content: `doctype html\nhtml\n  head\n    title DevSphere\n  body\n    h1 Welcome\n    p Learning Express.js`
          },
          {
            type: "paragraph",
            content:
              "Both produce exactly the same HTML output."
          }
        ]
      },

      {
        heading: "Why was Pug created?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Writing HTML can become repetitive."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">\n    <div class="card">\n        <h2>Product</h2>\n        <p>Description</p>\n    </div>\n</div>`
          },
          {
            type: "paragraph",
            content:
              "Notice the repeated opening and closing tags."
          },
          {
            type: "paragraph",
            content:
              "Pug was designed to reduce this repetition by allowing developers to focus on the document structure instead of constantly writing closing tags."
          },
          {
            type: "paragraph",
            content: "The same layout becomes:"
          },
          {
            type: "code",
            language: "pug",
            content: `.container\n  .card\n    h2 Product\n    p Description`
          },
          {
            type: "paragraph",
            content:
              "The code is shorter while still expressing the same hierarchy."
          }
        ]
      },

      {
        heading: "Why use Pug?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug offers several advantages for server-side rendered applications."
          },
          {
            type: "paragraph",
            content:
              "Some of the major reasons developers choose Pug include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less code to write",
              "Cleaner templates",
              "No closing tags",
              "Easy nesting through indentation",
              "Built-in support for JavaScript expressions",
              "Good readability once familiar with the syntax",
              "Easy integration with Express"
            ]
          }
        ]
      },

      {
        heading: "How Pug Works with Express",
        blocks: [
          {
            type: "paragraph",
            content: "When a request arrives:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Pug Template (.pug)", "→",
              "Pug Compiler", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "The workflow is:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Client requests a page.",
              "Express selects a Pug template.",
              "Pug converts the template into HTML.",
              "Express sends the HTML to the client."
            ]
          },
          {
            type: "paragraph",
            content:
              "The browser never executes Pug."
          }
        ]
      },

      {
        heading: "Installing Pug",
        blocks: [
          {
            type: "paragraph",
            content: "Install Pug using npm."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install pug`
          },
          {
            type: "paragraph",
            content:
              "After installation, the package becomes available inside your project."
          }
        ]
      },

      {
        heading: "Configuring Express",
        blocks: [
          {
            type: "paragraph",
            content:
              "Tell Express that Pug is the template engine."
          },
          {
            type: "code",
            language: "javascript",
            content: `const express = require("express");\nconst app = express();\napp.set("view engine", "pug");`
          },
          {
            type: "paragraph",
            content: "This single line tells Express:"
          },
          {
            type: "quote",
            content: '"Whenever a view is rendered, use Pug."'
          },
          {
            type: "paragraph",
            content:
              "By default, Express looks for templates inside a folder named:"
          },
          {
            type: "output",
            content: "views/"
          }
        ]
      },

      {
        heading: "Typical Project Structure",
        blocks: [
          {
            type: "tree",
            content: "project/\n│\n├── app.js\n├── package.json\n│\n├── views/\n│   ├── index.pug\n│   ├── about.pug\n│   └── contact.pug\n│\n├── public/\n│\n└── node_modules/"
          },
          {
            type: "paragraph",
            content:
              "Keeping all templates inside the views folder is the common convention in Express applications."
          }
        ]
      },

      {
        heading: "Creating Your First Pug Template",
        blocks: [
          {
            type: "paragraph",
            content: "Create a file named:"
          },
          {
            type: "output",
            content: "views/index.pug"
          },
          {
            type: "paragraph",
            content: "Write:"
          },
          {
            type: "code",
            language: "pug",
            content: `doctype html\nhtml\n  head\n    title My Website\n  body\n    h1 Welcome to DevSphere\n    p Learning Express.js with Pug.`
          },
          {
            type: "paragraph",
            content: "Now create a route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("index");\n});`
          },
          {
            type: "paragraph",
            content: "When the browser opens:"
          },
          {
            type: "output",
            content: "http://localhost:3000/"
          },
          {
            type: "paragraph",
            content:
              "Express renders the template and sends HTML to the browser."
          }
        ]
      },

      {
        heading: "Understanding Pug's Indentation-Based Syntax",
        blocks: [
          {
            type: "paragraph",
            content:
              "Unlike HTML, Pug uses indentation to represent parent-child relationships."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "pug",
            content: `body\n  h1 Welcome\n  p Hello World`
          },
          {
            type: "paragraph",
            content: "means:"
          },
          {
            type: "code",
            language: "html",
            content: `<body>\n    <h1>Welcome</h1>\n    <p>Hello World</p>\n</body>`
          },
          {
            type: "paragraph",
            content:
              "Every nested element is created simply by indenting it."
          }
        ]
      },

      {
        heading: "Why Indentation Matters",
        blocks: [
          {
            type: "paragraph",
            content:
              "Indentation is not just for readability—it defines the structure of the page."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "pug",
            content: `body\n  h1 Welcome\n  p Learning Pug`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "pug",
            content: `body\nh1 Welcome\np Learning Pug`
          },
          {
            type: "paragraph",
            content:
              "The second example changes the hierarchy and may even produce unexpected output or syntax errors."
          },
          {
            type: "paragraph",
            content:
              "Always use consistent indentation (typically two spaces)."
          }
        ]
      },

      {
        heading: "Creating HTML Elements",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every HTML tag is written directly."
          },
          {
            type: "code",
            language: "pug",
            content: `html\n  head\n    title DevSphere\n  body\n    h1 Hello\n    p Welcome`
          },
          {
            type: "paragraph",
            content:
              "No angle brackets are required."
          }
        ]
      },

      {
        heading: "Adding Text",
        blocks: [
          {
            type: "paragraph",
            content:
              "Text can be written immediately after a tag."
          },
          {
            type: "code",
            language: "pug",
            content: `h1 Express Tutorial\np Learning template engines.`
          },
          {
            type: "paragraph",
            content: "Produces:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Express Tutorial</h1>\n<p>Learning template engines.</p>`
          }
        ]
      },

      {
        heading: "Variables in Pug",
        blocks: [
          {
            type: "paragraph",
            content:
              "Variables passed from Express can be displayed directly."
          },
          {
            type: "paragraph",
            content: "Suppose Express sends:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("index", {\n    name: "Faiz"\n});`
          },
          {
            type: "paragraph",
            content: "Inside Pug:"
          },
          {
            type: "code",
            language: "pug",
            content: `h1 Welcome #{name}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome Faiz</h1>`
          }
        ]
      },

      {
        heading: "JavaScript Expressions",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug allows JavaScript expressions inside templates."
          },
          {
            type: "code",
            language: "pug",
            content: `p #{5 + 10}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<p>15</p>`
          },
          {
            type: "paragraph",
            content: "You can also assign variables."
          },
          {
            type: "code",
            language: "pug",
            content: `- const year = 2026\np #{year}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<p>2026</p>`
          }
        ]
      },

      {
        heading: "Attributes",
        blocks: [
          {
            type: "paragraph",
            content:
              "Attributes are placed inside parentheses."
          },
          {
            type: "code",
            language: "pug",
            content: `a(href="/about") About`
          },
          {
            type: "paragraph",
            content: "Produces:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="/about">About</a>`
          },
          {
            type: "paragraph",
            content: "Multiple attributes:"
          },
          {
            type: "code",
            language: "pug",
            content: `img(\n  src="/images/logo.png"\n  alt="Logo"\n  width="200"\n)`
          }
        ]
      },

      {
        heading: "IDs and Classes",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug provides shorthand syntax."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "html",
            content: `<div id="header" class="container"></div>`
          },
          {
            type: "paragraph",
            content: "Write:"
          },
          {
            type: "code",
            language: "pug",
            content: `#header.container`
          },
          {
            type: "paragraph",
            content: "Multiple classes:"
          },
          {
            type: "code",
            language: "pug",
            content: `.card.product.featured`
          },
          {
            type: "paragraph",
            content: "Produces:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="card product featured"></div>`
          }
        ]
      },

      {
        heading: "Conditionals",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug supports conditional rendering."
          },
          {
            type: "code",
            language: "pug",
            content: `if isLoggedIn\n  h2 Welcome back!\nelse\n  h2 Please Login`
          },
          {
            type: "paragraph",
            content:
              "This is useful for displaying different content based on user data."
          }
        ]
      },

      {
        heading: "Using unless",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug also supports `unless`, which works opposite to `if`."
          },
          {
            type: "code",
            language: "pug",
            content: `unless isLoggedIn\n  p Please sign in.`
          },
          {
            type: "paragraph",
            content: "Equivalent to:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!isLoggedIn)`
          }
        ]
      },

      {
        heading: "Loops",
        blocks: [
          {
            type: "paragraph",
            content:
              "Displaying repeated data is simple."
          },
          {
            type: "code",
            language: "pug",
            content: `each language in languages\n  li= language`
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "code",
            language: "javascript",
            content: `languages = ["JavaScript", "Node.js", "Express"]`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<li>JavaScript</li>\n<li>Node.js</li>\n<li>Express</li>`
          }
        ]
      },

      {
        heading: "While Loop",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug also supports `while`."
          },
          {
            type: "code",
            language: "pug",
            content: `- let i = 1\nwhile i <= 3\n  p Item #{i}\n  - i++`
          },
          {
            type: "paragraph",
            content:
              "Although possible, `each` is generally preferred for collections."
          }
        ]
      },

      {
        heading: "Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Visible HTML comment:"
          },
          {
            type: "code",
            language: "pug",
            content: `// This appears in HTML`
          },
          {
            type: "paragraph",
            content: "Hidden Pug comment:"
          },
          {
            type: "code",
            language: "pug",
            content: `//-\n  Internal developer notes.`
          },
          {
            type: "paragraph",
            content:
              "Hidden comments are removed before HTML is generated."
          }
        ]
      },

      {
        heading: "Plain Text",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes you need plain text."
          },
          {
            type: "code",
            language: "pug",
            content: `p.\n  This is\n  multiple lines\n  of text.`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "pug",
            content: `| Hello World`
          }
        ]
      },

      {
        heading: "Mixing HTML with Pug",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although Pug has its own syntax, you can still include raw HTML when necessary."
          },
          {
            type: "code",
            language: "pug",
            content: `div\n  <strong>Important</strong>`
          },
          {
            type: "paragraph",
            content:
              "This can be useful when migrating existing HTML templates or using snippets copied from documentation."
          }
        ]
      },

      {
        heading: "Differences Between HTML and Pug",
        blocks: [
          {
            type: "table",
            headers: ["HTML", "Pug"],
            rows: [
              ["Uses opening and closing tags", "Uses indentation"],
              ["More verbose", "Concise syntax"],
              ["Familiar to everyone", "Requires learning"],
              ["Closing tags required", "No closing tags"],
              ["Easy for beginners", "Better once familiar"]
            ]
          }
        ]
      },

      {
        heading: "Advantages of Pug",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Less typing",
              "Cleaner templates",
              "Excellent readability after learning",
              "Easy nesting",
              "Built-in JavaScript support",
              "Great Express integration",
              "Reduces repetitive HTML"
            ]
          }
        ]
      },

      {
        heading: "Limitations of Pug",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug is not perfect."
          },
          {
            type: "paragraph",
            content: "Some limitations include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Learning curve for beginners",
              "Indentation mistakes can break templates",
              "HTML developers must learn new syntax",
              "Less common than HTML-based templating",
              "Copy-pasting HTML from websites often requires conversion"
            ]
          }
        ]
      },

      {
        heading: "When Should You Choose Pug?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug is a great choice when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building Express applications",
              "Creating server-rendered websites",
              "Working on dashboards",
              "Developing admin panels",
              "Building internal business applications",
              "You prefer concise syntax over HTML"
            ]
          }
        ]
      },

      {
        heading: "When Should You Avoid Pug?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug may not be the best option when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building API-only servers",
              "Using React, Angular, Vue, or Next.js as the frontend",
              "Your team prefers plain HTML",
              "Designers frequently edit templates without Pug experience"
            ]
          }
        ]
      },

      {
        heading: "How Pug is Different from EJS",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although both are Express template engines, they follow different philosophies."
          },
          {
            type: "table",
            headers: ["Feature", "EJS", "Pug"],
            rows: [
              ["HTML Syntax", "Normal HTML", "Custom indentation syntax"],
              ["Learning Curve", "Easier", "Slightly steeper"],
              ["Code Length", "More verbose", "More concise"],
              ["HTML Familiarity", "Excellent", "Requires learning"],
              ["Readability", "Familiar", "Cleaner after experience"],
              ["Closing Tags", "Required", "Not required"]
            ]
          },
          {
            type: "paragraph",
            content:
              "If your team is comfortable with HTML, EJS may feel more natural. If you prefer writing less markup and don't mind learning a new syntax, Pug can improve productivity."
          }
        ]
      },

      {
        heading: "How Pug is Compiled Internally (Extra Knowledge)",
        blocks: [
          {
            type: "paragraph",
            content:
              "One common misconception is that browsers understand Pug directly. They do not."
          },
          {
            type: "paragraph",
            content: "When you call:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("index");`
          },
          {
            type: "paragraph",
            content: "Express performs roughly these steps:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Loads `index.pug` from the `views` directory.",
              "Passes the file to the Pug engine.",
              "Pug parses the indentation-based syntax into an internal representation.",
              "The template is compiled into standard HTML.",
              "Express sends the generated HTML as the HTTP response."
            ]
          },
          {
            type: "paragraph",
            content:
              "In production, compiled templates are often cached, so Express doesn't need to parse and compile the template on every request. This improves rendering performance and reduces server overhead."
          },
          {
            type: "paragraph",
            content:
              "Understanding this process helps explain why Pug is considered a server-side template language rather than a browser technology."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Pug is a powerful and expressive template engine for Express that replaces traditional HTML syntax with a clean, indentation-based language. It reduces repetition, eliminates closing tags, and makes templates more concise and readable. Pug integrates seamlessly with Express through the `view engine` configuration and supports variables, conditionals, loops, attributes, and JavaScript expressions."
          },
          {
            type: "paragraph",
            content:
              "While Pug has a learning curve compared to HTML-based templating, it offers significant productivity benefits for server-rendered applications, dashboards, admin panels, and internal business tools. The choice between Pug and HTML-based engines like EJS ultimately depends on your team's familiarity and the specific requirements of your project."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One common mistake when learning Pug is assuming that indentation is optional or purely aesthetic. In Pug, indentation defines the document structure—incorrect indentation can break your templates entirely or produce unexpected HTML. Always use consistent indentation, and consider using a linter or editor plugin that highlights Pug syntax to catch indentation errors early. Another often-overlooked aspect is that Pug's concise syntax can make templates harder to read for developers who are not familiar with it. If your team includes designers or developers who prefer plain HTML, EJS might be a better choice. However, for developers who embrace the syntax, Pug's minimalism can significantly speed up template writing and reduce boilerplate code in Express applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Handlebars
============================= */
    "expressjs-handlebars": {
    title: "Handlebars",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "In the previous lessons, you learned about EJS and Pug, two popular template engines used with Express.js. While both are excellent choices, they follow different philosophies. EJS allows you to embed JavaScript directly into HTML, whereas Pug replaces HTML with a concise, indentation-based syntax."
          },
          {
            type: "paragraph",
            content:
              "Handlebars takes a different approach. Instead of allowing unrestricted JavaScript inside templates, Handlebars encourages a logic-light design. Templates are responsible only for displaying data, while the application's business logic remains in JavaScript files such as route handlers and controllers."
          },
          {
            type: "paragraph",
            content:
              "This separation makes Handlebars templates cleaner, easier to maintain, and more suitable for large applications where designers and backend developers work together."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what Handlebars is, how to configure it with Express, its syntax, expressions, helpers, blocks, loops, conditionals, and when it is the right choice for your projects."
          }
        ]
      },

      {
        heading: "What is Handlebars?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars is a logic-light template engine that generates HTML dynamically using data provided by your Express application."
          },
          {
            type: "paragraph",
            content:
              "Instead of embedding JavaScript code throughout your HTML, Handlebars uses simple placeholder expressions enclosed within double curly braces (`{{ }}`)."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h1>Welcome {{name}}</h1>`
          },
          {
            type: "paragraph",
            content: "If Express provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{\n    name: "Faiz"\n}`
          },
          {
            type: "paragraph",
            content: "The generated HTML becomes:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome Faiz</h1>`
          },
          {
            type: "paragraph",
            content:
              "Like other template engines, browsers never receive Handlebars code. Express compiles the template into standard HTML before sending it to the client."
          }
        ]
      },

      {
        heading: "Why Handlebars Exists",
        blocks: [
          {
            type: "paragraph",
            content:
              "Traditional HTML pages cannot display dynamic data by themselves."
          },
          {
            type: "paragraph",
            content:
              "Although EJS solves this by allowing JavaScript directly inside templates, many developers found that too much embedded JavaScript could make templates difficult to maintain."
          },
          {
            type: "paragraph",
            content:
              "Handlebars was created to encourage separation of concerns."
          },
          {
            type: "paragraph",
            content:
              "Instead of writing:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Business logic",
              "Database queries",
              "Complex conditions"
            ]
          },
          {
            type: "paragraph",
            content:
              "inside templates, Handlebars expects that work to happen in your JavaScript code first."
          },
          {
            type: "paragraph",
            content:
              "Templates should mainly answer one question:"
          },
          {
            type: "quote",
            content: '"How should this data be displayed?"'
          },
          {
            type: "paragraph",
            content: "rather than"
          },
          {
            type: "quote",
            content: '"How should this data be calculated?"'
          }
        ]
      },

      {
        heading: "Why Use Handlebars?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars offers several advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Familiar HTML syntax",
              "Very easy to read",
              "Logic-light templates",
              "Good separation between presentation and application logic",
              "Reusable layouts and partials",
              "Built-in support for expressions and blocks",
              "Easy integration with Express",
              "Suitable for large teams"
            ]
          }
        ]
      },

      {
        heading: "How Handlebars Works with Express",
        blocks: [
          {
            type: "paragraph",
            content: "The rendering process looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Handlebars Template (.handlebars / .hbs)", "→",
              "Handlebars Engine", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "When a request arrives:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Express receives the request.",
              "A route handler prepares the required data.",
              "Express passes that data to a Handlebars template.",
              "Handlebars replaces template expressions with actual values.",
              "The generated HTML is sent back to the browser."
            ]
          }
        ]
      },

      {
        heading: "Installing Express Handlebars",
        blocks: [
          {
            type: "paragraph",
            content:
              "Express itself does not include Handlebars."
          },
          {
            type: "paragraph",
            content: "Install it using npm:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install express-handlebars`
          },
          {
            type: "paragraph",
            content:
              "This package provides everything needed to integrate Handlebars with Express."
          }
        ]
      },

      {
        heading: "Configuring Express",
        blocks: [
          {
            type: "paragraph",
            content:
              "Import the package."
          },
          {
            type: "code",
            language: "javascript",
            content: `const express = require("express");\nconst { engine } = require("express-handlebars");\n\nconst app = express();`
          },
          {
            type: "paragraph",
            content:
              "Register Handlebars as the view engine."
          },
          {
            type: "code",
            language: "javascript",
            content: `app.engine("handlebars", engine());\n\napp.set("view engine", "handlebars");`
          },
          {
            type: "paragraph",
            content:
              "Express now knows that template files will use the `.handlebars` extension."
          }
        ]
      },

      {
        heading: "Typical Project Structure",
        blocks: [
          {
            type: "tree",
            content: "project/\n│\n├── app.js\n│\n├── views/\n│   ├── home.handlebars\n│   ├── about.handlebars\n│   ├── layouts/\n│   └── partials/\n│\n├── public/\n│\n└── node_modules/"
          },
          {
            type: "paragraph",
            content:
              "The views directory stores templates, while layouts and partials help organize reusable content."
          }
        ]
      },

      {
        heading: "Creating Your First Handlebars Template",
        blocks: [
          {
            type: "paragraph",
            content: "Create a file:"
          },
          {
            type: "output",
            content: "views/home.handlebars"
          },
          {
            type: "paragraph",
            content: "Write:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h1>Welcome to DevSphere</h1>\n<p>Learning Express.js Handlebars.</p>`
          },
          {
            type: "paragraph",
            content: "Create a route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home");\n});`
          },
          {
            type: "paragraph",
            content: "Opening:"
          },
          {
            type: "output",
            content: "http://localhost:3000/"
          },
          {
            type: "paragraph",
            content:
              "renders the template and sends HTML to the browser."
          }
        ]
      },

      {
        heading: "Handlebars Expressions",
        blocks: [
          {
            type: "paragraph",
            content:
              "Expressions are the most fundamental feature of Handlebars."
          },
          {
            type: "paragraph",
            content:
              "They display data using double curly braces."
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h1>{{title}}</h1>\n<p>{{description}}</p>`
          },
          {
            type: "paragraph",
            content: "If Express provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home", {\n    title: "Express Tutorial",\n    description: "Learning Handlebars"\n});`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Express Tutorial</h1>\n<p>Learning Handlebars</p>`
          },
          {
            type: "paragraph",
            content:
              "Expressions automatically replace placeholders with actual values."
          }
        ]
      },

      {
        heading: "Displaying Multiple Variables",
        blocks: [
          {
            type: "paragraph",
            content:
              "Templates often display multiple pieces of information."
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h2>{{name}}</h2>\n<p>{{email}}</p>\n<p>{{country}}</p>`
          },
          {
            type: "paragraph",
            content:
              "Each placeholder corresponds to a property passed from Express."
          }
        ]
      },

      {
        heading: "Nested Object Properties",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars can access nested objects."
          },
          {
            type: "paragraph",
            content: "Suppose Express sends:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", {\n    user: {\n        name: "Faiz",\n        age: 22\n    }\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h2>{{user.name}}</h2>\n<p>{{user.age}}</p>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<h2>Faiz</h2>\n<p>22</p>`
          }
        ]
      },

      {
        heading: "Escaping HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "By default, Handlebars escapes HTML for security."
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `message = "<strong>Hello</strong>";`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{message}}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `&lt;strong&gt;Hello&lt;/strong&gt;`
          },
          {
            type: "paragraph",
            content:
              "The browser displays the tags as text instead of interpreting them as HTML."
          },
          {
            type: "paragraph",
            content:
              "This automatic escaping helps prevent Cross-Site Scripting (XSS) attacks."
          }
        ]
      },

      {
        heading: "Unescaped HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes you intentionally want HTML rendering."
          },
          {
            type: "paragraph",
            content: "Use triple braces:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{{message}}}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<strong>Hello</strong>`
          },
          {
            type: "paragraph",
            content:
              "Use this only with trusted content because unescaped HTML can introduce security vulnerabilities."
          }
        ]
      },

      {
        heading: "Helpers (Overview)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Helpers perform small operations inside templates."
          },
          {
            type: "paragraph",
            content:
              "Built-in helpers include conditionals and loops, while developers can create custom helpers."
          },
          {
            type: "paragraph",
            content: "Example helper usage:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{uppercase name}}`
          },
          {
            type: "paragraph",
            content:
              "Here, `uppercase` is a custom helper that converts text to uppercase."
          },
          {
            type: "paragraph",
            content:
              "We'll learn custom helpers in more advanced template engine lessons."
          }
        ]
      },

      {
        heading: "Blocks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars uses block expressions to group template sections."
          },
          {
            type: "paragraph",
            content: "A block begins with:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{#...}}`
          },
          {
            type: "paragraph",
            content: "and ends with:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{/...}}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{#if loggedIn}}\n<h2>Dashboard</h2>\n{{/if}}`
          },
          {
            type: "paragraph",
            content: "Blocks are commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Conditionals",
              "Loops",
              "Helpers",
              "Layouts",
              "Partials"
            ]
          }
        ]
      },

      {
        heading: "Conditionals",
        blocks: [
          {
            type: "paragraph",
            content:
              "Conditional rendering uses the built-in `if` helper."
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{#if isAdmin}}\n<p>Administrator Panel</p>\n{{/if}}`
          },
          {
            type: "paragraph",
            content: "If:"
          },
          {
            type: "code",
            language: "javascript",
            content: `isAdmin = true`
          },
          {
            type: "paragraph",
            content:
              "the paragraph appears."
          },
          {
            type: "paragraph",
            content:
              "Otherwise, nothing is rendered."
          }
        ]
      },

      {
        heading: "if...else",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars also supports `else`."
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{#if loggedIn}}\n<h2>Welcome</h2>\n{{else}}\n<h2>Please Login</h2>\n{{/if}}`
          },
          {
            type: "paragraph",
            content:
              "This allows templates to render different content based on available data."
          }
        ]
      },

      {
        heading: "Loops",
        blocks: [
          {
            type: "paragraph",
            content:
              "The `each` helper iterates over arrays."
          },
          {
            type: "paragraph",
            content: "Suppose Express sends:"
          },
          {
            type: "code",
            language: "javascript",
            content: `courses = [\n    "Node.js",\n    "Express",\n    "MongoDB"\n];`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `<ul>\n{{#each courses}}\n<li>{{this}}</li>\n{{/each}}\n</ul>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>\n<li>Node.js</li>\n<li>Express</li>\n<li>MongoDB</li>\n</ul>`
          },
          {
            type: "paragraph",
            content:
              "Inside an `each` loop, `this` represents the current item."
          }
        ]
      },

      {
        heading: "Looping Through Objects",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars can also iterate through object collections."
          },
          {
            type: "code",
            language: "javascript",
            content: `users = [\n    {\n        name: "Alice",\n        age: 24\n    },\n    {\n        name: "Bob",\n        age: 28\n    }\n];`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "handlebars",
            content: `{{#each users}}\n<h3>{{this.name}}</h3>\n<p>{{this.age}}</p>\n{{/each}}`
          }
        ]
      },

      {
        heading: "Advantages of Handlebars",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Very readable syntax",
              "Minimal learning curve",
              "Familiar HTML structure",
              "Automatic HTML escaping",
              "Cleaner templates",
              "Good separation between logic and presentation",
              "Easy collaboration between frontend and backend developers",
              "Excellent support for reusable layouts and partials"
            ]
          }
        ]
      },

      {
        heading: "Limitations of Handlebars",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although Handlebars is powerful, it has some limitations."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Limited JavaScript support inside templates",
              "Complex calculations should not be performed in templates",
              "Requires helper functions for advanced operations",
              "Less flexible than EJS for embedding custom JavaScript"
            ]
          },
          {
            type: "paragraph",
            content:
              "These limitations are intentional because Handlebars encourages better application architecture."
          }
        ]
      },

      {
        heading: "Real-World Usage",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars is commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server-rendered Express applications",
              "Dashboards",
              "Content Management Systems (CMS)",
              "Administrative panels",
              "Email template generation",
              "Report generation",
              "Documentation websites"
            ]
          },
          {
            type: "paragraph",
            content:
              "Because templates remain clean and readable, Handlebars works especially well in projects involving both developers and designers."
          }
        ]
      },

      {
        heading: "Comparison with EJS and Pug",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "EJS", "Pug", "Handlebars"],
            rows: [
              ["HTML Syntax", "Standard HTML", "Custom indentation syntax", "Standard HTML"],
              ["JavaScript in Templates", "Full JavaScript", "Limited JavaScript", "Logic-light helpers"],
              ["Learning Curve", "Easy", "Moderate", "Easy"],
              ["Readability", "Familiar", "Concise", "Very clean"],
              ["HTML Escaping", "Manual awareness required", "Automatic interpolation rules", "Automatic by default"],
              ["Best For", "Flexible applications", "Concise templates", "Maintainable server-rendered applications"]
            ]
          }
        ]
      },

      {
        heading: "When Should You Choose Handlebars?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars is an excellent choice when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "You want to keep HTML readable.",
              "Multiple developers work on templates.",
              "Designers contribute to frontend views.",
              "You prefer separating presentation from business logic.",
              "Your application has many reusable layouts and components."
            ]
          }
        ]
      },

      {
        heading: "When Should You Avoid Handlebars?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars may not be the best option when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "You need extensive JavaScript inside templates.",
              "You want maximum template flexibility.",
              "You're building an API-only backend.",
              "Your frontend is built entirely with React, Vue, Angular, or another SPA framework."
            ]
          }
        ]
      },

      {
        heading: "How Handlebars is Different from Other Template Engines (Extra Knowledge)",
        blocks: [
          {
            type: "paragraph",
            content:
              "One aspect rarely explained in beginner tutorials is why Handlebars is called a 'logic-light' template engine."
          },
          {
            type: "paragraph",
            content:
              "Handlebars intentionally restricts what you can do inside a template. For example, unlike EJS, you cannot freely write arbitrary JavaScript such as loops, variable declarations, or calculations directly in the template. Instead, you prepare the data in your Express route or controller and pass it to the template in a display-ready form."
          },
          {
            type: "paragraph",
            content: "This design has several advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Templates remain focused on presentation rather than business logic.",
              "The same data can be rendered by different templates without duplicating logic.",
              "Testing and maintaining applications becomes easier because calculations live in JavaScript files instead of view files.",
              "Teams can divide responsibilities more effectively—backend developers prepare the data, while frontend developers or designers work on the HTML structure."
            ]
          },
          {
            type: "paragraph",
            content:
              "This philosophy aligns with the broader software engineering principle of separation of concerns, making Handlebars a strong choice for medium and large Express applications where maintainability is just as important as functionality."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Handlebars is a logic-light template engine for Express that emphasizes clean separation between presentation and business logic. Using simple double curly brace expressions (`{{ }}`), Handlebars templates display data without embedding complex JavaScript logic, making them more readable, maintainable, and suitable for teams where designers and developers collaborate."
          },
          {
            type: "paragraph",
            content:
              "Handlebars supports expressions, conditionals with `if` and `else`, loops with `each`, nested objects, automatic HTML escaping, and unescaped output when needed. It integrates seamlessly with Express through the `express-handlebars` package and is an excellent choice for server-rendered applications, dashboards, CMS platforms, and email templates."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One common misconception about Handlebars is that its logic-light nature makes it less powerful than EJS or Pug. In reality, Handlebars' intentional limitations are a design feature that encourages better application architecture. By forcing developers to prepare data in route handlers rather than inside templates, Handlebars helps keep views clean and maintainable. Another often-overlooked advantage is that Handlebars' automatic HTML escaping reduces the risk of XSS vulnerabilities compared to template engines where developers must remember to escape output manually. If you find yourself needing complex logic inside Handlebars templates, it's usually a sign that the logic belongs in your Express route or a custom helper instead. This separation of concerns is what makes Handlebars a preferred choice for many large-scale Express applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Rendering Views
============================= */
    "expressjs-rendering-views": {
    title: "Rendering Views",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "So far, you've learned about Server-Side Rendering (SSR) and explored popular template engines such as EJS, Pug, and Handlebars. Each template engine has its own syntax, but they all serve the same purpose: generating HTML dynamically on the server."
          },
          {
            type: "paragraph",
            content:
              "However, simply creating template files isn't enough. Express also needs a way to locate those templates, process them using the appropriate template engine, and send the resulting HTML to the client's browser. This entire process is known as rendering views."
          },
          {
            type: "paragraph",
            content:
              "One of the biggest advantages of Express is that the rendering mechanism is almost identical regardless of the template engine you choose. Whether you're using EJS, Pug, Handlebars, or another supported engine, Express follows the same workflow."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what views are, how Express finds them, how to configure the views directory and view engine, how `res.render()` works internally, and the complete process of rendering dynamic pages."
          }
        ]
      },

      {
        heading: "What are Views?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A view is a template file that defines the structure of the HTML page sent to the client."
          },
          {
            type: "paragraph",
            content:
              "Unlike static HTML files, views can contain placeholders, variables, loops, conditionals, and other template syntax that allow the page to change dynamically based on data received from the server."
          },
          {
            type: "paragraph",
            content: "For example, instead of creating separate HTML pages like:"
          },
          {
            type: "output",
            content: "welcome-faiz.html"
          },
          {
            type: "output",
            content: "welcome-john.html"
          },
          {
            type: "output",
            content: "welcome-alice.html"
          },
          {
            type: "paragraph",
            content: "You can create a single view:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1>Welcome <%= name %></h1>`
          },
          {
            type: "paragraph",
            content:
              "Depending on the data provided, Express generates different HTML."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: "Input Data: name = \"Faiz\""
          },
          {
            type: "paragraph",
            content: "Generated HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome Faiz</h1>`
          },
          {
            type: "paragraph",
            content: "If another request sends:"
          },
          {
            type: "output",
            content: "name = \"Alice\""
          },
          {
            type: "paragraph",
            content: "The generated page becomes:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome Alice</h1>`
          },
          {
            type: "paragraph",
            content:
              "This allows one template to generate countless pages dynamically."
          }
        ]
      },

      {
        heading: "Why Do We Need Views?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Without views, every page would need to be written manually."
          },
          {
            type: "paragraph",
            content: "Imagine an e-commerce website with 50,000 products."
          },
          {
            type: "paragraph",
            content: "Without templates, you'd need:"
          },
          {
            type: "output",
            content: "product1.html"
          },
          {
            type: "output",
            content: "product2.html"
          },
          {
            type: "output",
            content: "product3.html"
          },
          {
            type: "output",
            content: "..."
          },
          {
            type: "output",
            content: "product50000.html"
          },
          {
            type: "paragraph",
            content:
              "Clearly, this isn't practical."
          },
          {
            type: "paragraph",
            content: "Instead, a single template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h2><%= product.name %></h2>\n<p><%= product.price %></p>`
          },
          {
            type: "paragraph",
            content:
              "can render every product page using different data."
          },
          {
            type: "paragraph",
            content: "Views make applications:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dynamic",
              "Reusable",
              "Easier to maintain",
              "Easier to update",
              "More scalable"
            ]
          }
        ]
      },

      {
        heading: "The Views Directory",
        blocks: [
          {
            type: "paragraph",
            content:
              "By convention, Express stores templates inside a folder named:"
          },
          {
            type: "output",
            content: "views/"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: "project/\n│\n├── app.js\n│\n├── views/\n│   ├── home.ejs\n│   ├── about.ejs\n│   ├── contact.ejs\n│   └── profile.ejs\n│\n├── public/\n│\n└── package.json"
          },
          {
            type: "paragraph",
            content:
              "Whenever Express needs to render a page, it searches inside this directory."
          },
          {
            type: "paragraph",
            content:
              "Although `views` is the default location, Express allows you to choose a different directory if needed."
          }
        ]
      },

      {
        heading: "Configuring the Views Directory",
        blocks: [
          {
            type: "paragraph",
            content:
              "Use `app.set('views')` to specify where template files are located."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const path = require("path");\n\napp.set("views", path.join(__dirname, "templates"));`
          },
          {
            type: "paragraph",
            content: "Now Express searches inside:"
          },
          {
            type: "output",
            content: "templates/"
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "output",
            content: "views/"
          },
          {
            type: "paragraph",
            content:
              "This flexibility is useful when organizing large projects or following custom folder structures."
          }
        ]
      },

      {
        heading: "Configuring the View Engine",
        blocks: [
          {
            type: "paragraph",
            content:
              "Express also needs to know which template engine should process the view files."
          },
          {
            type: "paragraph",
            content: "This is done using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.set("view engine", "ejs");`
          },
          {
            type: "paragraph",
            content: "Other examples:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.set("view engine", "pug");`
          },
          {
            type: "code",
            language: "javascript",
            content: `app.set("view engine", "handlebars");`
          },
          {
            type: "paragraph",
            content:
              "Once configured, Express automatically uses the corresponding rendering engine whenever `res.render()` is called."
          }
        ]
      },

      {
        heading: "How res.render() Works",
        blocks: [
          {
            type: "paragraph",
            content:
              "The primary method for rendering templates is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render(viewName);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home");\n});`
          },
          {
            type: "paragraph",
            content: "Notice something important:"
          },
          {
            type: "paragraph",
            content: "We wrote:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home");`
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home.ejs");`
          },
          {
            type: "paragraph",
            content:
              "Express automatically adds the correct file extension based on the configured view engine."
          },
          {
            type: "paragraph",
            content: "If the view engine is EJS:"
          },
          {
            type: "output",
            content: "home.ejs"
          },
          {
            type: "paragraph",
            content: "If the view engine is Pug:"
          },
          {
            type: "output",
            content: "home.pug"
          },
          {
            type: "paragraph",
            content: "If the view engine is Handlebars:"
          },
          {
            type: "output",
            content: "home.handlebars"
          },
          {
            type: "paragraph",
            content:
              "This makes your route handlers independent of the template engine."
          }
        ]
      },

      {
        heading: "Rendering HTML Dynamically",
        blocks: [
          {
            type: "paragraph",
            content:
              "Views become powerful because they combine templates with data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home", {\n        username: "Faiz",\n        age: 22\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Inside the template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1>Welcome <%= username %></h1>\n<p>Age: <%= age %></p>`
          },
          {
            type: "paragraph",
            content: "Generated HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome Faiz</h1>\n<p>Age: 22</p>`
          },
          {
            type: "paragraph",
            content:
              "The template stays the same while the data changes for each request."
          }
        ]
      },

      {
        heading: "Passing Template Names",
        blocks: [
          {
            type: "paragraph",
            content:
              "The first argument to `res.render()` specifies the template to render."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home");`
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("about");`
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("products");`
          },
          {
            type: "paragraph",
            content:
              "Each name corresponds to a template file inside the configured views directory."
          }
        ]
      },

      {
        heading: "Passing Data to Templates",
        blocks: [
          {
            type: "paragraph",
            content:
              "The second argument is an object containing data."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", {\n    name: "Alice",\n    country: "Canada"\n});`
          },
          {
            type: "paragraph",
            content:
              "The template receives these values and displays them dynamically."
          },
          {
            type: "paragraph",
            content:
              "Although we'll discuss data passing in much greater detail in the next lesson, it's important to know that `res.render()` accepts both the template name and the data needed to generate the final HTML."
          }
        ]
      },

      {
        heading: "Rendering Different Pages",
        blocks: [
          {
            type: "paragraph",
            content:
              "Each route typically renders a different view."
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home");\n});\n\napp.get("/about", (req, res) => {\n    res.render("about");\n});\n\napp.get("/contact", (req, res) => {\n    res.render("contact");\n});`
          },
          {
            type: "paragraph",
            content: "When users visit:"
          },
          {
            type: "output",
            content: "/"
          },
          {
            type: "paragraph",
            content: "they receive:"
          },
          {
            type: "output",
            content: "home"
          },
          {
            type: "paragraph",
            content: "Visiting:"
          },
          {
            type: "output",
            content: "/about"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: "about"
          },
          {
            type: "paragraph",
            content: "Similarly:"
          },
          {
            type: "output",
            content: "/contact"
          },
          {
            type: "paragraph",
            content: "renders:"
          },
          {
            type: "output",
            content: "contact"
          },
          {
            type: "paragraph",
            content:
              "This forms the basis of navigation in server-rendered Express applications."
          }
        ]
      },

      {
        heading: "The Complete View Rendering Process",
        blocks: [
          {
            type: "paragraph",
            content:
              "Understanding the internal workflow helps explain what Express is doing behind the scenes."
          },
          {
            type: "paragraph",
            content: "Suppose a user visits:"
          },
          {
            type: "output",
            content: "http://localhost:3000/profile"
          },
          {
            type: "paragraph",
            content: "The process is:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HTTP Request", "→",
              "Express Route", "→",
              "res.render(\"profile\")", "→",
              "Locate profile template", "→",
              "Template Engine", "→",
              "Generate HTML", "→",
              "Send Response", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "Each step happens automatically after calling `res.render()`."
          }
        ]
      },

      {
        heading: "How Express Finds a View (View Lookup Process)",
        blocks: [
          {
            type: "paragraph",
            content:
              "When you execute:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("dashboard");`
          },
          {
            type: "paragraph",
            content: "Express follows a predictable lookup process:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Determine the configured views directory.",
              "Determine the configured view engine.",
              "Append the correct file extension.",
              "Search for the template file.",
              "Load the template.",
              "Pass any supplied data.",
              "Ask the template engine to generate HTML.",
              "Send the HTML as the HTTP response."
            ]
          },
          {
            type: "paragraph",
            content:
              "If any step fails—for example, if the file doesn't exist—Express throws an error indicating that the view couldn't be found."
          },
          {
            type: "paragraph",
            content:
              "Understanding this lookup process makes it much easier to troubleshoot rendering problems."
          }
        ]
      },

      {
        heading: "Rendering Without a Template Engine",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many beginners wonder whether `res.render()` can work without a template engine."
          },
          {
            type: "paragraph",
            content: "The answer is no."
          },
          {
            type: "paragraph",
            content:
              "`res.render()` always relies on a rendering engine to process the template. If no view engine is configured, Express doesn't know how to convert the template into HTML."
          },
          {
            type: "paragraph",
            content:
              "If you simply want to send an existing HTML file without rendering, use:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.sendFile()`
          },
          {
            type: "paragraph",
            content: "instead."
          },
          {
            type: "paragraph",
            content: "This distinction is important:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`res.render()` generates dynamic HTML using a template engine.",
              "`res.sendFile()` sends an existing file exactly as it is."
            ]
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Forgetting to Configure the View Engine",
                answer: "Using `res.render(\"home\");` without `app.set(\"view engine\", \"ejs\");` causes rendering errors.",
                examples: [
                  {
                    title: "Missing",
                    language: "javascript",
                    content: `res.render("home");`
                  },
                  {
                    title: "With Configuration",
                    language: "javascript",
                    content: `app.set("view engine", "ejs");\nres.render("home");`
                  }
                ]
              },
              {
                question: "Wrong Views Directory",
                answer: "If your templates are inside `templates/` but Express expects `views/`, the template won't be found unless you configure the correct path.",
                examples: [
                  {
                    title: "Will Not Find",
                    language: "text",
                    content: "templates/"
                  },
                  {
                    title: "Configured",
                    language: "javascript",
                    content: `app.set("views", path.join(__dirname, "templates"));`
                  }
                ]
              },
              {
                question: "Including the File Extension",
                answer: "Avoid `res.render(\"home.ejs\");`. Instead, use `res.render(\"home\");` and let Express determine the extension automatically."
              },
              {
                question: "Misspelled Template Names",
                answer: "If the file is `profile.ejs` but you write `res.render(\"profiles\");`, Express won't find the file. Always use the exact template name."
              },
              {
                question: "Rendering Non-Existent Views",
                answer: "Always ensure the template exists before rendering it. Otherwise, Express throws a \"View not found\" error."
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
              "Keep all templates inside the designated views directory.",
              "Use meaningful template names such as `home`, `about`, `products`, and `profile`.",
              "Configure the view engine once during application startup.",
              "Let Express determine the template extension automatically.",
              "Separate business logic from templates by preparing data in route handlers or controllers.",
              "Keep templates focused on presentation rather than complex application logic.",
              "Organize reusable layouts and partials into dedicated folders as your project grows."
            ]
          }
        ]
      },

      {
        heading: "Rendering Views vs Sending Files",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although both ultimately return HTML to the browser, they serve different purposes."
          },
          {
            type: "table",
            headers: ["Feature", "`res.render()`", "`res.sendFile()`"],
            rows: [
              ["Generates HTML dynamically", "Yes", "No"],
              ["Requires a template engine", "Yes", "No"],
              ["Can display dynamic data", "Yes", "No"],
              ["Sends an existing file", "No", "Yes"],
              ["Best for server-side rendered applications", "Yes", "No"],
              ["Best for static HTML pages", "No", "Yes"]
            ]
          }
        ]
      },

      {
        heading: "How Express Keeps Rendering Engine Independent (Extra Knowledge)",
        blocks: [
          {
            type: "paragraph",
            content:
              "One design feature that's often overlooked is that Express itself does not render templates. Instead, it acts as a coordinator between your application and whichever template engine you've chosen."
          },
          {
            type: "paragraph",
            content: "When you call:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home");`
          },
          {
            type: "paragraph",
            content: "Express doesn't contain built-in knowledge of EJS, Pug, or Handlebars syntax. It simply:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Determines the configured view engine.",
              "Loads the appropriate rendering engine.",
              "Passes the template name and data to that engine.",
              "Receives the generated HTML.",
              "Sends the HTML to the client."
            ]
          },
          {
            type: "paragraph",
            content:
              "Because of this abstraction, your route handlers remain almost identical regardless of the template engine. Switching from EJS to Pug or Handlebars usually requires changing the template files and configuration, but most of your Express routing code stays the same. This engine-agnostic design is one of the reasons Express has remained flexible and popular across many different web development workflows."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Rendering views is the process of converting template files into dynamic HTML pages using Express and a template engine. Express uses the `views` directory and the configured `view engine` to locate and process templates, while `res.render()` handles the complete rendering workflow—from template lookup and data injection to HTML generation and response delivery."
          },
          {
            type: "paragraph",
            content:
              "By understanding how Express locates views, configures the view engine, passes data to templates, and sends the final HTML to the browser, you can build dynamic, maintainable, and scalable server-rendered applications. Whether you're using EJS, Pug, Handlebars, or another template engine, the core rendering mechanism remains consistent, making Express a flexible and powerful framework for server-side rendering."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One common mistake when rendering views is assuming that `res.render()` works without a configured view engine. If you forget to set `app.set('view engine', ...)`, Express will throw an error even if your template files exist. Another often-overlooked detail is that the `views` directory path is relative to the project root, so using `path.join(__dirname, 'views')` is a safer practice than relying on relative strings. Additionally, when you pass data to `res.render()`, ensure that the property names in your data object match the placeholders in your template—typos in property names can lead to silent rendering failures. These small details are what separate working rendering code from frustrating debugging sessions."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Passing Data to Templates
============================= */
    "expressjs-passing-data-to-templates": {
    title: "Passing Data to Templates",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "In the previous lesson, you learned how Express renders template files using `res.render()`. However, rendering a template alone is not very useful if every user sees exactly the same content. Most modern web applications display personalized, database-driven, or request-specific information. This is possible by passing data from your Express application to the template engine."
          },
          {
            type: "paragraph",
            content:
              "Whether you're using EJS, Pug, or Handlebars, the concept remains the same: your Express route prepares data, passes it to the template, and the template uses that data to generate dynamic HTML."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how data flows from Express to templates, how to work with variables, objects, arrays, user information, database results, and best practices for creating clean and maintainable server-rendered applications."
          }
        ]
      },

      {
        heading: "Why Pass Data to Templates?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building an online shopping website."
          },
          {
            type: "paragraph",
            content: "Instead of creating separate HTML files like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "product1.html",
              "product2.html",
              "product3.html",
              "product4.html"
            ]
          },
          {
            type: "paragraph",
            content: "You can create a single template called:"
          },
          {
            type: "output",
            content: "product.ejs"
          },
          {
            type: "paragraph",
            content: "Then send different product information to it."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("product", {\n    name: "Laptop",\n    price: 899\n});`
          },
          {
            type: "paragraph",
            content: "Later:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("product", {\n    name: "Phone",\n    price: 499\n});`
          },
          {
            type: "paragraph",
            content:
              "The same template displays completely different content depending on the data received."
          },
          {
            type: "paragraph",
            content:
              "This is one of the biggest advantages of server-side rendering."
          }
        ]
      },

      {
        heading: "How Data Flows in Express",
        blocks: [
          {
            type: "paragraph",
            content: "The complete process is surprisingly simple."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Route", "→",
              "Creates Data", "→",
              "res.render(\"view\", data)", "→",
              "Template Engine", "→",
              "Inserts Data", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "Every dynamic page follows this basic flow."
          }
        ]
      },

      {
        heading: "Passing Data with res.render()",
        blocks: [
          {
            type: "paragraph",
            content:
              "The `res.render()` method accepts two primary arguments:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render(viewName, dataObject);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home", {\n        title: "Welcome",\n        message: "Hello Express!"\n    });\n});`
          },
          {
            type: "paragraph",
            content:
              "The first argument specifies which template to render."
          },
          {
            type: "paragraph",
            content:
              "The second argument is an object containing the data available inside the template."
          }
        ]
      },

      {
        heading: "Accessing Variables Inside Templates",
        blocks: [
          {
            type: "paragraph",
            content:
              "Each template engine has its own syntax."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "EJS"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1><%= title %></h1>\n<p><%= message %></p>`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Pug"
          },
          {
            type: "code",
            language: "pug",
            content: `h1= title\np= message`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Handlebars"
          },
          {
            type: "code",
            language: "handlebars",
            content: `<h1>{{title}}</h1>\n<p>{{message}}</p>`
          },
          {
            type: "paragraph",
            content:
              "Although the syntax differs, the underlying idea is identical."
          }
        ]
      },

      {
        heading: "Passing Simple Variables",
        blocks: [
          {
            type: "paragraph",
            content:
              "The simplest data consists of primitive values."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", (req, res) => {\n    res.render("home", {\n        username: "Alice",\n        age: 24,\n        isLoggedIn: true\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Templates can display them directly."
          },
          {
            type: "paragraph",
            content: "Example (EJS):"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h2>Welcome <%= username %></h2>\n<p>Age: <%= age %></p>`
          }
        ]
      },

      {
        heading: "Passing Numbers",
        blocks: [
          {
            type: "paragraph",
            content:
              "Numeric values work exactly the same."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("dashboard", {\n    visitors: 1589,\n    sales: 210\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `Visitors Today: <%= visitors %>\nSales: <%= sales %>`
          }
        ]
      },

      {
        heading: "Passing Boolean Values",
        blocks: [
          {
            type: "paragraph",
            content:
              "Boolean variables are commonly used for conditions."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", {\n    isPremium: true\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% if (isPremium) { %>\n    Premium User\n<% } %>`
          }
        ]
      },

      {
        heading: "Passing Objects",
        blocks: [
          {
            type: "paragraph",
            content:
              "Objects are one of the most common data types passed to templates."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/user", (req, res) => {\n    res.render("profile", {\n        user: {\n            name: "Alice",\n            age: 25,\n            city: "London"\n        }\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h2><%= user.name %></h2>\n<p><%= user.age %></p>\n<p><%= user.city %></p>`
          },
          {
            type: "paragraph",
            content:
              "Objects make related data much easier to organize."
          }
        ]
      },

      {
        heading: "Nested Objects",
        blocks: [
          {
            type: "paragraph",
            content:
              "Objects may contain other objects."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", {\n    user: {\n        name: "John",\n        address: {\n            city: "New York",\n            country: "USA"\n        }\n    }\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `City:\n<%= user.address.city %>\nCountry:\n<%= user.address.country %>`
          },
          {
            type: "paragraph",
            content:
              "Nested objects are extremely common when working with APIs and databases."
          }
        ]
      },

      {
        heading: "Passing Arrays",
        blocks: [
          {
            type: "paragraph",
            content:
              "Templates frequently display lists."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("products", {\n    products: [\n        "Laptop",\n        "Phone",\n        "Tablet"\n    ]\n});`
          },
          {
            type: "paragraph",
            content: "In EJS:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<ul>\n<% products.forEach(product => { %>\n<li>\n<%= product %>\n</li>\n<% }) %>\n</ul>`
          },
          {
            type: "paragraph",
            content: "The generated HTML becomes:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>\n<li>Laptop</li>\n<li>Phone</li>\n<li>Tablet</li>\n</ul>`
          }
        ]
      },

      {
        heading: "Arrays of Objects",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most real applications display collections of structured data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("products", {\n    products: [\n        {\n            id: 1,\n            name: "Laptop",\n            price: 900\n        },\n        {\n            id: 2,\n            name: "Phone",\n            price: 500\n        }\n    ]\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% products.forEach(product => { %>\n<h3>\n<%= product.name %>\n</h3>\n<p>\n$<%= product.price %>\n</p>\n<% }) %>`
          },
          {
            type: "paragraph",
            content:
              "This pattern is used in almost every e-commerce application."
          }
        ]
      },

      {
        heading: "Dynamic Page Titles",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of hardcoding titles inside templates:"
          },
          {
            type: "code",
            language: "html",
            content: `<title>Website</title>`
          },
          {
            type: "paragraph",
            content: "Pass them dynamically."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home", {\n    pageTitle: "Home"\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<title>\n<%= pageTitle %>\n</title>`
          },
          {
            type: "paragraph",
            content: "Another page can simply pass:"
          },
          {
            type: "code",
            language: "javascript",
            content: `pageTitle: "About Us"`
          },
          {
            type: "paragraph",
            content:
              "The same template automatically updates the browser tab title."
          }
        ]
      },

      {
        heading: "Conditional Rendering",
        blocks: [
          {
            type: "paragraph",
            content:
              "Templates can show different content based on incoming data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", {\n    loggedIn: true\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% if (loggedIn) { %>\nWelcome Back\n<% } else { %>\nPlease Login\n<% } %>`
          },
          {
            type: "paragraph",
            content: "This is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login status",
              "Admin panels",
              "Premium content",
              "Feature availability",
              "Error messages"
            ]
          }
        ]
      },

      {
        heading: "Rendering Loops",
        blocks: [
          {
            type: "paragraph",
            content:
              "Loops allow templates to render unlimited amounts of content."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("students", {\n    students: [\n        "Alex",\n        "John",\n        "Emma"\n    ]\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% students.forEach(student => { %>\n<p>\n<%= student %>\n</p>\n<% }) %>`
          },
          {
            type: "paragraph",
            content:
              "The server generates as many HTML elements as needed."
          }
        ]
      },

      {
        heading: "Passing User Data",
        blocks: [
          {
            type: "paragraph",
            content:
              "Authenticated applications commonly pass user information to templates."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/dashboard", (req, res) => {\n    res.render("dashboard", {\n        user: {\n            name: "Alice",\n            email: "alice@example.com"\n        }\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h2>\nWelcome\n<%= user.name %>\n</h2>\n<p>\n<%= user.email %>\n</p>`
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User profile",
              "Dashboard",
              "Account settings",
              "Notifications"
            ]
          }
        ]
      },

      {
        heading: "Passing Request Data",
        blocks: [
          {
            type: "paragraph",
            content:
              "Information from the incoming request can also be forwarded to templates."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/search", (req, res) => {\n    res.render("search", {\n        keyword: req.query.keyword\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Request:"
          },
          {
            type: "output",
            content: "/search?keyword=laptop"
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `Searching for:\n<%= keyword %>`
          },
          {
            type: "paragraph",
            content:
              "This technique is commonly used for search pages and filters."
          }
        ]
      },

      {
        heading: "Rendering Database Results",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most Express applications retrieve data from a database before rendering."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await User.find();\nres.render("users", {\n    users\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<% users.forEach(user => { %>\n<p>\n<%= user.name %>\n</p>\n<% }) %>`
          },
          {
            type: "paragraph",
            content:
              "The database supplies the data, while the template decides how it should appear."
          }
        ]
      },

      {
        heading: "Template Data Flow",
        blocks: [
          {
            type: "paragraph",
            content:
              "Understanding the direction of data flow helps prevent confusion."
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "Express Route", "→",
              "Creates Data Object", "→",
              "res.render()", "→",
              "Template Engine", "→",
              "HTML Output", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "Notice that templates receive data. They should not be responsible for fetching database records or implementing business logic."
          }
        ]
      },

      {
        heading: "Escaping Output",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most template engines automatically escape HTML characters."
          },
          {
            type: "paragraph",
            content: "Suppose a username is:"
          },
          {
            type: "output",
            content: "<script>alert(\"Hi\")</script>"
          },
          {
            type: "paragraph",
            content:
              "Instead of executing JavaScript, the template outputs safe text."
          },
          {
            type: "paragraph",
            content: "Example (EJS):"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%= username %>`
          },
          {
            type: "paragraph",
            content: "Generated HTML:"
          },
          {
            type: "code",
            language: "html",
            content: "&lt;script&gt;alert(\"Hi\")&lt;/script&gt;"
          },
          {
            type: "paragraph",
            content:
              "This automatic escaping helps protect applications from Cross-Site Scripting (XSS) attacks."
          },
          {
            type: "paragraph",
            content:
              "If you intentionally need to render trusted HTML, many template engines provide special syntax (such as EJS's `<%- %>`), but it should be used only with sanitized content from trusted sources."
          }
        ]
      },

      {
        heading: "Practical Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `app.get("/dashboard", (req, res) => {\n    const user = {\n        name: "Alice",\n        role: "Admin"\n    };\n    const notifications = [\n        "New message",\n        "Order shipped",\n        "Profile updated"\n    ];\n    res.render("dashboard", {\n        pageTitle: "Dashboard",\n        user,\n        notifications\n    });\n});`
          },
          {
            type: "paragraph",
            content: "Template:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<h1>\n<%= pageTitle %>\n</h1>\n<h2>\nHello\n<%= user.name %>\n</h2>\n<p>\nRole:\n<%= user.role %>\n</p>\n<ul>\n<% notifications.forEach(item => { %>\n<li>\n<%= item %>\n</li>\n<% }) %>\n</ul>`
          },
          {
            type: "paragraph",
            content:
              "This single page demonstrates variables, objects, arrays, loops, and dynamic titles working together."
          }
        ]
      },

      {
        heading: "Common Data Types Passed to Templates",
        blocks: [
          {
            type: "table",
            headers: ["Data Type", "Example", "Common Use"],
            rows: [
              ["String", `"Alice"`, "Names, messages"],
              ["Number", "150", "Prices, counts"],
              ["Boolean", "true", "Conditional rendering"],
              ["Object", `{ name: "Alice" }`, "User profiles, settings"],
              ["Array", `["A", "B"]`, "Lists and menus"],
              ["Array of Objects", `[{ id:1 }, { id:2 }]`, "Products, users, posts"],
              ["Nested Object", `{ address: { city: "Paris" } }`, "Complex application data"]
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content:
              "Passing data to templates is used in nearly every server-rendered application."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce websites display product catalogs, shopping carts, and order histories.",
              "Blogging platforms render articles, author profiles, and comments from a database.",
              "Social media applications show personalized feeds, notifications, and user information.",
              "News websites generate article pages dynamically instead of maintaining separate HTML files.",
              "Educational platforms present courses, lessons, quizzes, and progress based on the logged-in user."
            ]
          },
          {
            type: "paragraph",
            content:
              "A single template can generate thousands of unique pages simply by receiving different data objects."
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
              "Pass only the data required by the current view.",
              "Keep business logic inside route handlers or service layers, not in templates.",
              "Use meaningful property names such as `user`, `products`, or `pageTitle` instead of generic names like `data`.",
              "Prefer structured objects over long lists of unrelated variables.",
              "Escape user-generated content by default and render raw HTML only when the content is trusted and sanitized.",
              "Avoid sending sensitive information (passwords, tokens, internal IDs, secrets) to templates, as anything passed to the view can become part of the generated HTML.",
              "Keep templates focused on presentation. Complex calculations, database queries, and validation should be completed before calling `res.render()`."
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
              "Forgetting to pass a variable that the template expects.",
              "Accessing properties that do not exist, resulting in `undefined` values.",
              "Performing heavy business logic directly inside templates.",
              "Passing unnecessary or confidential data to the client.",
              "Mixing data processing with presentation logic, making templates difficult to maintain.",
              "Using unescaped output for untrusted content, which can introduce security vulnerabilities."
            ]
          }
        ]
      },

      {
        heading: "A Professional Insight: The View Model Pattern",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many tutorials stop at passing plain variables, but larger Express applications often prepare a dedicated view model before rendering."
          },
          {
            type: "paragraph",
            content:
              "Instead of exposing raw database objects directly:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("profile", { user });`
          },
          {
            type: "paragraph",
            content: "A route can create a cleaner object tailored to the template:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const viewModel = {\n    pageTitle: "Profile",\n    displayName: \`\${user.firstName} \${user.lastName}\`,\n    memberSince: user.createdAt.toDateString(),\n    canEdit: user.role === "admin"\n};\nres.render("profile", viewModel);`
          },
          {
            type: "paragraph",
            content: "This approach offers several advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Templates remain simple and focused on presentation.",
              "Business logic stays inside the server code rather than the view.",
              "The same database model can be transformed differently for different pages.",
              "Future changes become easier because templates depend on a stable, purpose-built data structure instead of the underlying database schema."
            ]
          },
          {
            type: "paragraph",
            content:
              "This \"view model\" approach is widely used in professional Express applications because it improves maintainability, readability, and long-term scalability as projects grow."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Passing data to templates is the mechanism that transforms static view files into dynamic, personalized HTML pages. Using `res.render()`, Express routes can send variables, objects, arrays, and complex data structures to template engines like EJS, Pug, or Handlebars, which then generate the final HTML sent to the browser."
          },
          {
            type: "paragraph",
            content:
              "By understanding how to pass simple values, objects, arrays, database results, user data, and request information to templates, and by following best practices like using meaningful property names, escaping user-generated content, and preparing a dedicated view model, you can build clean, maintainable, and scalable server-rendered Express applications that deliver personalized content to every user."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common mistakes when passing data to templates is treating templates as a place to process or transform data. Remember that templates should focus on presentation—displaying data in a structured way. All data preparation, including formatting dates, calculating totals, filtering arrays, and applying business logic, should be done in your route handlers or service layers before calling `res.render()`. Another often-overlooked aspect is that passing too much data to templates can increase the size of the rendered HTML and expose unnecessary information to clients. Only pass what the template actually needs. This practice, combined with the view model pattern, keeps your Express applications secure, maintainable, and easier to test as they grow."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Layouts and Partials
============================= */
    "expressjs-layouts-and-partials": {
    title: "Layouts and Partials",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "As an Express application grows, you'll quickly notice that many pages share the same sections. Almost every website has a common header, navigation bar, footer, sidebar, or copyright notice. Copying this code into every template works initially, but maintaining it soon becomes difficult."
          },
          {
            type: "paragraph",
            content:
              "Imagine changing one navigation link. If your project has 50 pages, you'd have to edit the same HTML in 50 different files."
          },
          {
            type: "paragraph",
            content:
              "To solve this problem, template engines provide layouts and partials. These features let you reuse common template code across multiple pages, making your application cleaner, easier to maintain, and more scalable."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how layouts and partials work, why they're important, how they're organized in real-world Express projects, and the best practices used in production applications."
          }
        ]
      },

      {
        heading: "Why Layouts Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a website with these pages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home",
              "About",
              "Services",
              "Contact",
              "Blog"
            ]
          },
          {
            type: "paragraph",
            content:
              "Without layouts, every template might contain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Company logo",
              "Navigation menu",
              "Footer",
              "Copyright",
              "Social links"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<header>...</header>\n<nav>...</nav>\n<main>\n    Page Content\n</main>\n<footer>...</footer>`
          },
          {
            type: "paragraph",
            content:
              "The same code appears repeatedly in every template."
          },
          {
            type: "paragraph",
            content: "This creates several problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate code",
              "Difficult maintenance",
              "Increased chances of inconsistency",
              "Larger templates",
              "More editing work"
            ]
          },
          {
            type: "paragraph",
            content:
              "Layouts solve this by placing shared page structure in one reusable template."
          }
        ]
      },

      {
        heading: "What is a Layout?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A layout is a master template that defines the overall structure of a webpage."
          },
          {
            type: "paragraph",
            content: "Typically, a layout contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML document structure",
              "`<head>` section",
              "CSS links",
              "JavaScript files",
              "Header",
              "Navigation",
              "Footer",
              "A placeholder where page-specific content is inserted"
            ]
          },
          {
            type: "paragraph",
            content:
              "Instead of writing the complete HTML document for every page, individual templates only provide the content unique to that page."
          },
          {
            type: "paragraph",
            content: "Conceptually:"
          },
          {
            type: "tree",
            content: "Layout\n ├── Head\n ├── Header\n ├── Navigation\n ├── Page Content\n └── Footer"
          },
          {
            type: "paragraph",
            content:
              "The page content changes, while everything else stays the same."
          }
        ]
      },

      {
        heading: "What are Partials?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A partial is a reusable template fragment."
          },
          {
            type: "paragraph",
            content:
              "Unlike layouts, partials do not define an entire webpage."
          },
          {
            type: "paragraph",
            content:
              "Instead, they represent small reusable components."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Footer",
              "Navigation bar",
              "Sidebar",
              "Search bar",
              "Notification panel",
              "Product card",
              "User profile card",
              "Comment section"
            ]
          },
          {
            type: "paragraph",
            content:
              "A partial can be included inside multiple templates whenever needed."
          },
          {
            type: "paragraph",
            content:
              "Think of a partial as a reusable building block."
          }
        ]
      },

      {
        heading: "Layout vs Partial",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although both reduce duplicate code, they serve different purposes."
          },
          {
            type: "table",
            headers: ["Layout", "Partial"],
            rows: [
              ["Defines entire page structure", "Defines reusable page section"],
              ["Usually one per page", "Can be used many times"],
              ["Contains HTML document skeleton", "Contains small UI components"],
              ["Holds common page wrapper", "Holds reusable content blocks"]
            ]
          },
          {
            type: "paragraph",
            content:
              "A layout is the house, while partials are the rooms and furniture inside it."
          }
        ]
      },

      {
        heading: "How Layouts Work",
        blocks: [
          {
            type: "paragraph",
            content: "The rendering process looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser Request", "→",
              "Express Route", "→",
              "Layout Template", "→",
              "Insert Page Content", "→",
              "Generated HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content:
              "The layout wraps the page-specific template before sending the final HTML to the browser."
          }
        ]
      },

      {
        heading: "Why Use Partials?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your website header looks like this:"
          },
          {
            type: "code",
            language: "html",
            content: `<header>\n    <h1>DevSphere</h1>\n    <nav>\n        Home\n        Tutorials\n        Contact\n    </nav>\n</header>`
          },
          {
            type: "paragraph",
            content:
              "Without partials, every page contains this code."
          },
          {
            type: "paragraph",
            content:
              "With partials, you write it only once and reuse it everywhere."
          },
          {
            type: "paragraph",
            content: "Advantages include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Single source of truth",
              "Easy maintenance",
              "Consistent UI",
              "Cleaner templates",
              "Less duplication"
            ]
          }
        ]
      },

      {
        heading: "Reusing Header and Footer",
        blocks: [
          {
            type: "paragraph",
            content:
              "Headers and footers are the most common partials."
          },
          {
            type: "paragraph",
            content: "Typical structure:"
          },
          {
            type: "tree",
            content: "views/\n    partials/\n        header.ejs\n        footer.ejs\n    home.ejs\n    about.ejs\n    contact.ejs"
          },
          {
            type: "paragraph",
            content:
              "Each page includes the header and footer instead of rewriting them."
          },
          {
            type: "paragraph",
            content:
              "This makes updates much easier."
          }
        ]
      },

      {
        heading: "Shared Components",
        blocks: [
          {
            type: "paragraph",
            content:
              "Partials are useful for any component that appears multiple times."
          },
          {
            type: "paragraph",
            content: "Common examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bars",
              "Breadcrumbs",
              "Sidebars",
              "Search forms",
              "Pagination controls",
              "Product cards",
              "Blog cards",
              "User profiles",
              "Alerts",
              "Notification banners"
            ]
          },
          {
            type: "paragraph",
            content:
              "Instead of copying these components repeatedly, applications simply reuse the same partial."
          }
        ]
      },

      {
        heading: "Including Partials",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most template engines provide an include mechanism."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Example (EJS)"
          },
          {
            type: "code",
            language: "ejs",
            content: `<%- include("partials/header") %>\n<h1>Home Page</h1>\n<%- include("partials/footer") %>`
          },
          {
            type: "paragraph",
            content: "The final HTML becomes:"
          },
          {
            type: "code",
            language: "html",
            content: `<header>...</header>\n<h1>Home Page</h1>\n<footer>...</footer>`
          },
          {
            type: "paragraph",
            content:
              "The browser never knows separate files were used—it only receives the combined HTML."
          }
        ]
      },

      {
        heading: "Passing Data to Partials",
        blocks: [
          {
            type: "paragraph",
            content:
              "Partials can also receive data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.render("home", {\n    username: "Alice"\n});`
          },
          {
            type: "paragraph",
            content: "Partial:"
          },
          {
            type: "code",
            language: "ejs",
            content: `<header>\nWelcome\n<%= username %>\n</header>`
          },
          {
            type: "paragraph",
            content:
              "Since the partial is rendered as part of the same view, it has access to the data passed by `res.render()`. Some template engines also allow explicitly passing additional local variables to included partials."
          },
          {
            type: "paragraph",
            content:
              "This allows reusable components to display dynamic content."
          }
        ]
      },

      {
        heading: "Layout Templates",
        blocks: [
          {
            type: "paragraph",
            content:
              "A typical layout contains everything shared across pages."
          },
          {
            type: "paragraph",
            content: "Example structure:"
          },
          {
            type: "tree",
            content: "<html>\n<head>\nCSS Files\n</head>\n<body>\nHeader\nNavigation\nPage Content\nFooter\n</body>\n</html>"
          },
          {
            type: "paragraph",
            content:
              "Individual pages only provide the changing content."
          },
          {
            type: "paragraph",
            content:
              "This keeps templates focused and much smaller."
          }
        ]
      },

      {
        heading: "Nested Layouts (Overview)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Large applications sometimes require multiple layouts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: "Main Layout\n    ├── Public Pages\n    └── Admin Layout\n            ├── Dashboard\n            ├── Users\n            └── Settings"
          },
          {
            type: "paragraph",
            content:
              "An administration panel often uses a different sidebar, navigation, and design from the public website."
          },
          {
            type: "paragraph",
            content:
              "Rather than creating completely separate templates, applications may use nested or specialized layouts where supported by the chosen template engine or layout library."
          }
        ]
      },

      {
        heading: "The DRY Principle",
        blocks: [
          {
            type: "paragraph",
            content:
              "Layouts and partials strongly support the DRY (Don't Repeat Yourself) principle."
          },
          {
            type: "paragraph",
            content: "Instead of this:"
          },
          {
            type: "output",
            content: "Header"
          },
          {
            type: "output",
            content: "Header"
          },
          {
            type: "output",
            content: "Header"
          },
          {
            type: "output",
            content: "Header"
          },
          {
            type: "output",
            content: "Header"
          },
          {
            type: "paragraph",
            content: "You create one reusable component:"
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Reuse Everywhere"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate code",
              "Maintenance effort",
              "Bugs",
              "Development time"
            ]
          },
          {
            type: "paragraph",
            content:
              "The DRY principle is one of the most important practices in software engineering."
          }
        ]
      },

      {
        heading: "Folder Organization",
        blocks: [
          {
            type: "paragraph",
            content: "A common Express project structure looks like this:"
          },
          {
            type: "tree",
            content: "views/\n    layouts/\n        main.ejs\n    partials/\n        header.ejs\n        footer.ejs\n        navbar.ejs\n        sidebar.ejs\n    home.ejs\n    about.ejs\n    contact.ejs\n    dashboard.ejs"
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy navigation",
              "Logical grouping",
              "Cleaner projects",
              "Better scalability"
            ]
          },
          {
            type: "paragraph",
            content:
              "Some projects use a layout library such as `express-ejs-layouts` to manage the `layouts` folder, while others organize reusable templates manually. The exact structure may vary, but separating layouts and partials remains a common practice."
          }
        ]
      },

      {
        heading: "Real-World Project Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Small applications:"
          },
          {
            type: "tree",
            content: "views/\n    home.ejs\n    about.ejs"
          },
          {
            type: "paragraph",
            content: "Medium applications:"
          },
          {
            type: "tree",
            content: "views/\n    partials/\n    home.ejs\n    dashboard.ejs\n    contact.ejs"
          },
          {
            type: "paragraph",
            content: "Large production applications:"
          },
          {
            type: "tree",
            content: "views/\n    layouts/\n    partials/\n    admin/\n    auth/\n    blog/\n    dashboard/\n    shop/"
          },
          {
            type: "paragraph",
            content:
              "Notice that reusable components remain centralized even as the project grows."
          }
        ]
      },

      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content:
              "Developers often wonder whether splitting templates into many partials slows down the application."
          },
          {
            type: "paragraph",
            content:
              "In most cases, the impact is minimal."
          },
          {
            type: "paragraph",
            content:
              "Template engines compile and render templates efficiently, and the improvement in maintainability usually outweighs the small rendering overhead."
          },
          {
            type: "paragraph",
            content:
              "However, creating hundreds of tiny partials for very small elements can make templates harder to understand and slightly increase rendering work."
          },
          {
            type: "paragraph",
            content:
              "A good rule is to create partials only for components that are genuinely reused or logically separate."
          }
        ]
      },

      {
        heading: "Practical Example",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you're building an online learning platform."
          },
          {
            type: "paragraph",
            content: "Every page contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Company logo",
              "Navigation menu",
              "Search box",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of copying these sections into:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home",
              "Courses",
              "Tutorials",
              "Dashboard",
              "Profile",
              "Contact"
            ]
          },
          {
            type: "paragraph",
            content: "You organize your project like this:"
          },
          {
            type: "tree",
            content: "partials/\n    header\n    navbar\n    footer\npages/\n    home\n    courses\n    profile\n    contact"
          },
          {
            type: "paragraph",
            content:
              "Whenever the navigation menu changes, you edit a single file instead of updating every page individually."
          }
        ]
      },

      {
        heading: "Benefits of Layouts and Partials",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Eliminates duplicate HTML",
              "Encourages reusable UI components",
              "Simplifies maintenance",
              "Improves consistency across pages",
              "Makes templates easier to read",
              "Supports large-scale projects",
              "Encourages modular design",
              "Makes collaboration easier for development teams"
            ]
          },
          {
            type: "paragraph",
            content:
              "These benefits become more significant as the application grows."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Duplicating reusable code",
                answer: "Instead of creating a partial, developers copy the same HTML into multiple templates.",
                examples: [
                  {
                    title: "Avoid",
                    language: "text",
                    content: "Copying header code into every page template"
                  }
                ]
              },
              {
                question: "Creating extremely large layouts",
                answer: "Layouts should contain the common page structure only, not every possible component."
              },
              {
                question: "Creating unnecessary partials",
                answer: "Not every HTML snippet deserves its own partial. Over-fragmenting templates can make the project harder to follow."
              },
              {
                question: "Poor folder organization",
                answer: "Keeping reusable components scattered across different folders makes maintenance difficult."
              },
              {
                question: "Mixing business logic with templates",
                answer: "Templates should focus on presentation. Data processing should happen in route handlers or service layers before rendering."
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
              "Keep layouts responsible for the overall page structure only.",
              "Use partials for components reused across multiple pages.",
              "Organize layouts and partials into dedicated folders.",
              "Give partials descriptive names such as `header`, `navbar`, or `product-card`.",
              "Keep templates focused on presentation rather than business logic.",
              "Avoid deeply nested includes unless they improve clarity.",
              "Reuse components consistently to maintain a uniform user interface.",
              "Review reusable components periodically and merge or split them as the project evolves."
            ]
          }
        ]
      },

      {
        heading: "A Professional Insight: Think in Components, Not Pages",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many tutorials introduce layouts and partials as simple ways to avoid duplicate code. In professional applications, they serve a broader purpose—they encourage component-based thinking."
          },
          {
            type: "paragraph",
            content:
              "Instead of designing complete pages first, experienced developers identify reusable interface pieces:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Site header",
              "Navigation menu",
              "Hero section",
              "Product card",
              "Course card",
              "User profile",
              "Comment item",
              "Pagination controls",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content:
              "Pages are then assembled from these components, much like building with LEGO bricks."
          },
          {
            type: "tree",
            content: "Home Page\n ├── Header\n ├── Navbar\n ├── Hero\n ├── Course Cards\n ├── Testimonials\n └── Footer"
          },
          {
            type: "paragraph",
            content: "This mindset offers several long-term benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Designers and developers can update a component once and have changes reflected everywhere.",
              "Teams can work on different components independently without modifying entire pages.",
              "The same component can be reused across multiple sections of the application, reducing duplication and ensuring a consistent user experience.",
              "Migrating to another template engine or frontend framework becomes easier because the application's UI is already organized into logical, reusable building blocks."
            ]
          },
          {
            type: "paragraph",
            content:
              "This component-oriented approach is one reason modern Express applications remain maintainable even as they grow from a handful of pages to hundreds of templates."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Layouts and partials are essential features for building maintainable Express applications. Layouts define the overall page structure—the HTML skeleton, header, navigation, footer, and other shared elements—while partials represent reusable UI components like navigation bars, product cards, forms, and sidebars."
          },
          {
            type: "paragraph",
            content:
              "By separating shared structure from page-specific content, layouts and partials eliminate duplicate code, simplify maintenance, improve consistency, and make large applications easier to manage. Organizing layouts and partials into dedicated folders, using descriptive names, and thinking in components rather than pages are practices that scale well from small projects to enterprise applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common mistakes when using layouts and partials is treating them as an afterthought rather than designing them intentionally. A well-structured layout and partial system is not just about avoiding duplication—it's about creating a consistent, predictable user interface that can evolve over time. When you change a navigation menu in a partial, it should update everywhere automatically. When you add a new section to your layout, it should appear on every page without editing individual templates. Another often-overlooked aspect is that layouts and partials work best when they follow a consistent naming convention and folder structure across the entire project. This consistency makes it easier for new developers to understand the project, reduces onboarding time, and helps maintain a clean separation between the application's core structure and its page-specific content. Think of layouts as the foundation of your application's UI and partials as the building blocks—together they form a system that is both flexible and maintainable."
          }
        ]
      }
    ]
  },
};

export default expressjsTemplateEngines;