const gettingStarted = {

  "introduction-to-react": {
  /* Abhi ke liye ye wala add kr rhe hain upar me */
  title: "Introduction to React",
  readingTime: "12 min",

  content: [

    {
      heading: "What is React?",

      blocks: [

        {
          type: "paragraph",
          content:
            "React is a JavaScript library used to build User Interfaces (UI)."
        },

        {
          type: "paragraph",
          content:
            "It helps developers create fast, interactive, and dynamic web applications."
        },

        {
          type: "paragraph",
          content:
            "React was developed by Facebook (Meta) and is currently one of the most popular frontend technologies in the world."
        }

      ]
    },

    {
      heading: "What Can React Build?",

      blocks: [

        {
          type: "paragraph",
          content:
            "React can be used to build:"
        },

        {
          type: "list",
          items: [
            "Social Media Platforms",
            "E-Commerce Websites",
            "Learning Platforms",
            "Dashboards",
            "SaaS Applications",
            "Portfolio Websites",
            "Project Management Tools",
            "Enterprise Applications"
          ]
        },

        {
          type: "example",
          items: [
            "Facebook",
            "Instagram",
            "Netflix",
            "Airbnb",
            "WhatsApp Web",
            "Dropbox"
          ]
        }

      ]
    },

    {
      heading: "Why Do We Need React?",

      blocks: [

        {
          type: "paragraph",
          content:
            "Before React, developers often used plain HTML, CSS and JavaScript to create websites."
        },

        {
          type: "paragraph",
          content:
            "As applications became larger, managing the user interface became difficult."
        },

        {
          type: "paragraph",
          content:
            "Imagine updating:"
        },

        {
          type: "list",
          items: [
            "User Profile",
            "Notifications",
            "Messages",
            "Shopping Cart",
            "Dashboard Data"
          ]
        },

        {
          type: "paragraph",
          content:
            "all at the same time."
        },

        {
          type: "paragraph",
          content:
            "React makes this process easier by organizing applications into reusable parts."
        }

      ]
    },

    {
      heading: "React in Simple Words",

      blocks: [

        {
          type: "paragraph",
          content:
            "Think of React as a system that helps you build websites using small reusable blocks."
        },

        {
          type: "paragraph",
          content:
            "Instead of creating one huge webpage, React allows you to divide the application into smaller sections."
        },

        {
          type: "tree",
          content: `Website
  ├── Navbar
  ├── Sidebar
  ├── Hero Section
  ├── Profile Card
  └── Footer`
        },

        {
          type: "paragraph",
          content:
            "Each section can be managed independently."
        },

        {
          type: "paragraph",
          content:
            "This makes development easier and cleaner."
        }

      ]
    },

    {
      heading: "Key Benefits of React",

      blocks: [

        {
          type: "list",
          items: [
            "✔ Faster Development",
            "✔ Reusable Code",
            "✔ Better Code Organization",
            "✔ Easier Maintenance",
            "✔ Large Community Support",
            "✔ High Industry Demand",
            "✔ Excellent Career Opportunities"
          ]
        }

      ]
    },

    {
      heading: "React Applications Are Everywhere",

      blocks: [

        {
          type: "paragraph",
          content:
            "Many modern websites use React because it provides a smooth user experience."
        },

        {
          type: "paragraph",
          content:
            "Common examples include:"
        },

        {
          type: "example",
          items: [
            "Infinite scrolling feeds",
            "Real-time dashboards",
            "Interactive forms",
            "Search suggestions",
            "Live notifications",
            "Dynamic content updates"
          ]
        }

      ]
    },

    {
      heading: "React vs Traditional Web Development",

      blocks: [

        {
          type: "table",
          headers: [
            "Traditional Approach",
            "React Approach"
          ],

          rows: [
            ["Large code files", "Smaller organized structure"],
            ["Difficult maintenance", "Easier maintenance"],
            ["Repeated code", "Reusable code"],
            ["Hard to scale", "Easy to scale"],
            ["Complex UI management", "Simpler UI management"]
          ]
        }

      ]
    },

    {
      heading: "Your First React Example",

      blocks: [

        {
          type: "paragraph",
          content:
            'The traditional "Hello World" example:'
        },

        {
          type: "code",
          language: "javascript",
          content: `function App() {
  return (
    <h1>Hello React!</h1>
  );
}

export default App;`
        },

        {
          type: "output",
          content:
            "Hello React!"
        },

        {
          type: "paragraph",
          content:
            "This simple example creates a React application that displays text on the screen."
        }

      ]
    },

    {
      heading: "Important Facts About React",

      blocks: [

        {
          type: "list",
          items: [
            "📌 React is a Library, not a Framework.",
            "📌 React focuses on building User Interfaces.",
            "📌 React is Open Source.",
            "📌 React was created by Facebook (Meta).",
            "📌 React is currently one of the most demanded frontend technologies.",
            "📌 React works especially well for Single Page Applications (SPAs)."
          ]
        }

      ]
    },

    {
      heading: "Industry Demand",

      blocks: [

        {
          type: "paragraph",
          content:
            "React is one of the most requested skills in frontend and full-stack development jobs."
        },

        {
          type: "paragraph",
          content:
            "Companies frequently look for React developers because:"
        },

        {
          type: "list",
          items: [
            "React applications are scalable",
            "React developers are productive",
            "React has a large ecosystem",
            "React integrates well with modern technologies"
          ]
        }

      ]
    },

    {
      heading: "When Should You Learn React?",

      blocks: [

        {
          type: "paragraph",
          content:
            "You should learn React if:"
        },

        {
          type: "list",
          items: [
            "You know basic HTML",
            "You know basic CSS",
            "You know JavaScript fundamentals"
          ]
        },

        {
          type: "flow",
          steps: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
          ]
        }

      ]
    },

    {
      heading: "What Will You Learn Next?",

      blocks: [

        {
          type: "paragraph",
          content:
            "In the upcoming lessons, you will learn:"
        },

        {
          type: "list",
          items: [
            "Setting Up React",
            "Creating Your First Project",
            "React Folder Structure",
            "JSX",
            "Components",
            "Rendering Content",
            "Event Handling",
            "State Management",
            "API Integration",
            "Real Projects"
          ]
        },

        {
          type: "paragraph",
          content:
            "By the end of this tutorial series, you will be able to build complete modern web applications using React."
        }

      ]
    },

    {
      heading: "Special DevSphere Note Box",

      blocks: [

        {
          type: "note",
          content:
            "💡 Remember: React is not used to replace HTML, CSS, or JavaScript. React works with them to make building modern user interfaces faster, cleaner, and more efficient."
        }

      ]
    }

  ]
}, /* Ye wala added bracket hai abhi ke liye */

  
/* =========================
  Second topic : Why React? 
========================== */
  "why-react": {
  title: "Why React?",
  readingTime: "8 min",

  content: [

    {
      heading: "Why React?",

      blocks: [

        {
          type: "paragraph",
          content: "If HTML creates the structure of a webpage, CSS makes it beautiful, and JavaScript adds behavior, then React helps developers manage all of these pieces efficiently when applications become large and complex."
        },

        {
          type: "paragraph",
          content: "Modern websites are no longer simple collections of pages. Applications such as Facebook, Instagram, Netflix, Airbnb, and WhatsApp Web contain thousands of interactive elements that constantly update without refreshing the page."
        },

        {
          type: "paragraph",
          content: "Building such applications using only vanilla JavaScript quickly becomes difficult."
        },

        {
          type: "paragraph",
          content: "React was created to solve these challenges."
        },

        {
          type: "paragraph",
          content: "In this lesson, you will learn why React was created, what problems it solves, and why it has become one of the most popular frontend technologies in the world."
        }

      ]
    },

    {
      heading: "The Problem with Traditional Web Development",

      blocks: [

        {
          type: "paragraph",
          content: "Before React, developers primarily built websites using:"
        },

        {
          type: "orderedList",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Direct DOM Manipulation"
          ]
        },

        {
          type: "paragraph",
          content: "Whenever data changed, developers often had to manually update the webpage."
        },

        {
          type: "paragraph",
          content: "Consider a shopping website."
        },

        {
          type: "list",
          items: [
            "Adds a product to the cart",
            "Removes an item",
            "Changes quantity",
            "Applies a coupon"
          ]
        },

        {
          type: "paragraph",
          content: "Many parts of the page must update simultaneously."
        },

        {
          type: "orderedList",
          items: [
            "Cart count",
            "Total price",
            "Discount amount",
            "Product list",
            "Checkout summary"
          ]
        },

        {
          type: "note",
          content: "Managing all these updates manually becomes increasingly difficult as the application grows."
        }

      ]
    },

    {
      heading: "Challenges Developers Faced",

      blocks: [

        {
          type: "paragraph",
          content: "As projects become larger, developers face:"
        },

        {
          type: "list",
          items: [
            "Repeated code",
            "Difficult maintenance",
            "Slow development",
            "Complex debugging",
            "Performance problems"
          ]
        },

        {
          type: "note",
          content: "React was designed to solve these issues."
        }

      ]
    },

    {
      heading: "Why Was React Created?",

      blocks: [

        {
          type: "paragraph",
          content: "React was originally developed by Facebook engineers."
        },

        {
          type: "paragraph",
          content: "Facebook's interface was becoming increasingly dynamic and interactive."
        },

        {
          type: "paragraph",
          content: "Updating large sections of the page efficiently while maintaining performance became challenging."
        },

        {
          type: "paragraph",
          content: "The traditional approach required extensive manual DOM manipulation, which often led to:"
        },

        {
          type: "list",
          items: [
            "Slow rendering",
            "Complicated code",
            "Difficult maintenance"
          ]
        },

        {
          type: "paragraph",
          content: "To solve these problems, Facebook introduced React in 2013 as an open-source JavaScript library."
        },

        {
          type: "paragraph",
          content: "Its goal was simple:"
        },

        {
          type: "quote",
          content: "Make building complex user interfaces easier, faster, and more maintainable."
        }

      ]
    },

    {
      heading: "Reason 1: Component-Based Architecture",

      blocks: [

        {
          type: "paragraph",
          content: "One of React's biggest innovations is its component-based approach."
        },

        {
          type: "paragraph",
          content: "A component is an independent, reusable piece of UI."
        },

        {
          type: "paragraph",
          content: "Instead of building one huge webpage, React encourages developers to break applications into smaller pieces."
        },

        {
          type: "tree",
          content: `Website
  ├── Navbar
  ├── Sidebar
  ├── Search Bar
  ├── Product Card
  └── Footer`
        },

        {
          type: "paragraph",
          content: "Each part becomes an individual component."
        },

        {
          type: "list",
          items: [
            "Reusable code",
            "Cleaner structure",
            "Easier debugging",
            "Faster development",
            "Better team collaboration"
          ]
        },

        {
          type: "note",
          content: "A single Button component can be reused hundreds of times throughout an application, dramatically reducing development effort."
        }

      ]
    },

    {
      heading: "Reason 2: Reusable Components Save Time",

      blocks: [

        {
          type: "paragraph",
          content: "Imagine building an e-commerce website."
        },

        {
          type: "comparison",

          leftTitle: "Without React",

          leftItems: [
            "You may create the same product card dozens of times."
          ],

          rightTitle: "With React",

          rightItems: [
            "You create the ProductCard component once and reuse it everywhere."
          ]
        },

        {
          type: "list",
          items: [
            "Less code duplication",
            "Faster feature development",
            "Consistent design",
            "Easier updates"
          ]
        },

        {
          type: "note",
          content: "If you want to change the product card design later, you only update one component and every page automatically reflects the changes."
        }

      ]
    },

    {
      heading: "Reason 3: Virtual DOM Improves Performance",

      blocks: [

        {
          type: "paragraph",
          content:
            "One of React's most famous features is the Virtual DOM."
        },

        {
          type: "paragraph",
          content:
            "To understand it, first understand the DOM."
        },

        {
          type: "paragraph",
          content:
            "DOM (Document Object Model) is the browser's representation of a webpage."
        },

        {
          type: "paragraph",
          content:
            "Directly updating the DOM is expensive because browsers must:"
        },

        {
          type: "list",
          items: [
            "Recalculate layouts",
            "Repaint elements",
            "Re-render sections of the page"
          ]
        },

        {
          type: "paragraph",
          content:
            "React introduces a lightweight copy called the Virtual DOM."
        },

        {
          type: "paragraph",
          content:
            "React compares changes in this virtual version before updating the real DOM."
        },

        {
          type: "paragraph",
          content:
            "Only the elements that actually changed are updated, reducing unnecessary work and improving responsiveness."
        },

        {
          type: "paragraph",
          title: "Example",
          content:
            "Suppose a user likes a post."
        },

        {
          type: "comparison",
          leftTitle: "Traditional Approach",
          leftItems: [
            "Entire sections may be reprocessed."
          ],

          rightTitle: "React Approach",
          rightItems: [
            "Only the like counter changes."
          ]
        },

        {
          type: "paragraph",
          content:
            "Benefits:"
        },

        {
          type: "orderedList",
          items: [
            "Faster updates",
            "Better performance",
            "Smoother user experience"
          ]
        },

        {
          type: "paragraph",
          content:
            "Especially important in applications with:"
        },

        {
          type: "orderedList",
          items: [
            "Live notifications",
            "Chats",
            "Dashboards",
            "Social feeds",
            "Real-time updates"
          ]
        }

      ]
    },

    {
      heading: "Reason 4: Easier Maintenance",

      blocks: [

        {
          type: "paragraph",
          content:
            "Large applications can contain thousands of files."
        },

        {
          type: "paragraph",
          content:
            "Maintaining a massive JavaScript codebase is difficult."
        },

        {
          type: "paragraph",
          content:
            "React improves maintainability because:"
        },

        {
          type: "list",
          items: [
            "Components are isolated",
            "Features are organized logically",
            "Bugs are easier to locate",
            "Changes affect fewer files"
          ]
        },

        {
          type: "note",
          content:
            "Teams can confidently scale applications without creating chaos."
        }

      ]
    },

    {
      heading: "Reason 5: Better Developer Experience",

      blocks: [

        {
          type: "paragraph",
          content:
            "React significantly improves the developer experience."
        },

        {
          type: "paragraph",
          content:
            "Developers spend less time:"
        },

        {
          type: "list",
          items: [
            "Rewriting code",
            "Fixing repetitive bugs",
            "Managing DOM updates"
          ]
        },

        {
          type: "paragraph",
          content:
            "And more time:"
        },

        {
          type: "list",
          items: [
            "Building features",
            "Improving user experience",
            "Creating business logic"
          ]
        },

        {
          type: "note",
          content:
            "This increases productivity and reduces development costs."
        }

      ]
    },

    {
      heading: "Reason 6: Predictable Data Flow",

      blocks: [

        {
          type: "paragraph",
          content:
            "React follows a concept called One-Way Data Flow."
        },

        {
          type: "paragraph",
          content:
            "Data moves from:"
        },

        {
          type: "flow",
          steps: ["Parent Component", "→", "Child Component"]
        },

        {
          type: "paragraph",
          content:
            "This predictable structure makes applications easier to understand and debug."
        },

        {
          type: "paragraph",
          content:
            "It reduces confusion about where data originates and how UI updates occur."
        },

        {
          type: "paragraph",
          content:
            "Benefits:"
        },

        {
          type: "list",
          items: [
            "Easier debugging",
            "Cleaner architecture",
            "Better scalability",
            "More predictable behavior"
          ]
        }

      ]
    },

    {
      heading: "Reason 7: React Scales Well",

      blocks: [

        {
          type: "paragraph",
          content:
            "React works equally well for:"
        },

        {
          type: "cards",
          items: [
            {
              title: "Small Projects",
              description:
                "Portfolio websites, Landing pages, Personal blogs"
            },

            {
              title: "Medium Projects",
              description:
                "Dashboards, Learning platforms, Admin panels"
            },

            {
              title: "Large Projects",
              description:
                "Social networks, Streaming platforms, Enterprise software, SaaS products"
            }
          ]
        },

        {
          type: "note",
          content:
            "Many companies choose React because it can grow with their products."
        }

      ]
    },

    {
      heading: "Reason 8: Massive Ecosystem",

      blocks: [

        {
          type: "paragraph",
          content:
            "React itself focuses only on building user interfaces."
        },

        {
          type: "paragraph",
          content:
            "For everything else, there are specialized tools."
        },

        {
          type: "paragraph",
          content:
            "Popular React ecosystem tools include:"
        },

        {
          type: "list",
          items: [
            "React Router (Routing)",
            "Redux (State Management)",
            "React Query (Data Fetching)",
            "Next.js (Full-stack React)",
            "Material UI (UI Components)",
            "Tailwind CSS (Styling)"
          ]
        },

        {
          type: "note",
          content:
            "This ecosystem allows developers to build almost any type of application."
        }

      ]
    },

    {
      heading: "Reason 9: Strong Community Support",

      blocks: [

        {
          type: "paragraph",
          content:
            "React has one of the largest developer communities in the world."
        },

        {
          type: "paragraph",
          content:
            "Benefits:"
        },

        {
          type: "list",
          items: [
            "Thousands of tutorials",
            "Open-source libraries",
            "Community support",
            "Frequent improvements",
            "Large job market"
          ]
        },

        {
          type: "paragraph",
          content:
            "If you face a problem, chances are someone has already solved it."
        },

        {
          type: "note",
          content:
            "This makes learning React significantly easier."
        }

      ]
    },

    {
      heading: "Reason 10: React Powers Real Products",

      blocks: [

        {
          type: "paragraph",
          content:
            "React is used by many major companies."
        },

        {
          type: "example",
          items: [
            "Facebook",
            "Instagram",
            "Netflix",
            "Airbnb",
            "WhatsApp Web",
            "Dropbox"
          ]
        },

        {
          type: "paragraph",
          content:
            "These applications serve millions of users daily."
        },

        {
          type: "note",
          content:
            "Their adoption demonstrates React's reliability and scalability."
        }

      ]
    },

    {
      heading: "Reason 11: React and Mobile Development",

      blocks: [

        {
          type: "paragraph",
          content:
            "Learning React provides an additional advantage."
        },

        {
          type: "paragraph",
          content:
            "React Native allows developers to build mobile applications using React concepts."
        },

        {
          type: "paragraph",
          content:
            "This means:"
        },

        {
          type: "list",
          items: [
            "Similar development philosophy",
            "Shared knowledge",
            "Faster learning curve"
          ]
        },

        {
          type: "paragraph",
          content:
            "Developers can work on:"
        },

        {
          type: "example",
          items: [
            "Web Applications",
            "Android Apps",
            "iOS Apps"
          ]
        },

        {
          type: "paragraph",
          content:
            "using a similar ecosystem."
        }

      ]
    },

    {
      heading: "Reason 12: React Works Well with AI Tools",

      blocks: [

        {
          type: "paragraph",
          content:
            "A modern reason many tutorials still overlook is React's compatibility with AI-assisted development."
        },

        {
          type: "paragraph",
          content:
            "Tools such as:"
        },

        {
          type: "example",
          items: [
            "ChatGPT",
            "GitHub Copilot",
            "Cursor",
            "Windsurf"
          ]
        },

        {
          type: "paragraph",
          content:
            "can generate React components very effectively."
        },

        {
          type: "paragraph",
          content:
            "Because React applications are component-based and highly structured, AI tools can understand and generate React code more accurately than many older frontend approaches."
        },

        {
          type: "note",
          content:
            "This has become increasingly important in modern development workflows."
        }

      ]
    },

    {
      heading: "Reason 13: Industry Demand",

      blocks: [

        {
          type: "paragraph",
          content:
            "React remains one of the most requested frontend skills in the software industry."
        },

        {
          type: "paragraph",
          content:
            "Companies hire React developers because:"
        },

        {
          type: "list",
          items: [
            "Development is faster",
            "Maintenance is easier",
            "Applications scale well",
            "Large talent pool exists"
          ]
        },

        {
          type: "paragraph",
          content:
            "React skills are valuable for:"
        },

        {
          type: "orderedList",
          items: [
            "Frontend Developers",
            "Full-Stack Developers",
            "MERN Stack Developers",
            "Startup Founders",
            "Freelancers"
          ]
        },

        {
          type: "note",
          content:
            "For many developers, React becomes the gateway to professional web development."
        }

      ]
    },

    {
      heading: "Should You Learn React?",

      blocks: [

        {
          type: "paragraph",
          content:
            "You should learn React if:"
        },

        {
          type: "list",
          items: [
            "You know HTML",
            "You know CSS",
            "You understand JavaScript fundamentals"
          ]
        },

        {
          type: "paragraph",
          content:
            "Recommended learning path:"
        },

        {
          type: "flow",
          steps: [
            "HTML",
            "→",
            "CSS",
            "→",
            "JavaScript",
            "→",
            "React"
          ]
        },

        {
          type: "paragraph",
          content:
            "React is not a replacement for JavaScript."
        },

        {
          type: "note",
          content:
            "Instead, React helps you use JavaScript more effectively to build modern user interfaces."
        }

      ]
    },

    {
      heading: "Summary",

      blocks: [

        {
          type: "paragraph",
          content:
            "React became popular because it solved real problems faced by developers building large applications."
        },

        {
          type: "paragraph",
          content:
            "React provides:"
        },

        {
          type: "list",
          items: [
            "Component-Based Architecture",
            "Reusable Code",
            "Virtual DOM Performance",
            "Easier Maintenance",
            "Predictable Data Flow",
            "Strong Ecosystem",
            "Massive Community Support",
            "Excellent Scalability",
            "Mobile Development Opportunities",
            "High Industry Demand"
          ]
        },

        {
          type: "note",
          content:
            "These advantages make React one of the most powerful tools for building modern web applications."
        }

      ]
    },

    {
      heading: "DevSphere Special Note",

      blocks: [

        {
          type: "note",
          content:
            "💡 Many beginners believe React became popular only because it is fast."
        },

        {
          type: "paragraph",
          content:
            "Performance is important, but React's biggest advantage is actually developer productivity."
        },

        {
          type: "paragraph",
          content:
            "React allows teams to build, maintain, scale, and collaborate on large applications far more efficiently than traditional frontend approaches."
        },

        {
          type: "note",
          content:
            "That productivity advantage is the real reason React became an industry standard."
        }

      ]
    },

  ]
},


/* =========================
  Third topic : React Environment Setup
========================== */
  "react-environment-setup": {
    title: "React Environment Setup",
    readingTime: "10 min",

    content: [
    {
      heading: "Introduction",

      blocks: [
        {
          type: "paragraph",
          content:
            "Before we can build React applications, we need to prepare our development environment."
        },

        {
          type: "paragraph",
          content:
            "A development environment is the collection of tools required to write, run, test, and manage React applications efficiently."
        },

        {
          type: "paragraph",
          content:
            "Think of it as setting up a workshop before building a machine."
        },

        {
          type: "paragraph",
          content:
            "Without the proper tools, React code cannot run, dependencies cannot be installed, and projects cannot be created."
        },

        {
          type: "paragraph",
          content:
            "In this lesson, you will learn:"
        },

        {
          type: "list",
          items: [
            "What a React development environment is",
            "Why React needs additional tools",
            "Installing Node.js and npm",
            "Choosing a code editor",
            "Verifying the installation",
            "Creating a React project",
            "Understanding the role of Vite",
            "Common setup mistakes and how to avoid them",
            "Professional development practices used by React developers"
          ]
        },

        {
          type: "note",
          content:
            "By the end of this lesson, your system will be fully prepared for React development."
        }
      ]
    },

    {
      heading: "Why React Requires a Development Environment",

      blocks: [
        {
          type: "paragraph",
          content:
            "When we create a normal webpage using HTML, CSS, and JavaScript, the browser can directly read and execute the files."
        },

        {
          type: "paragraph",
          content:
            "React works differently."
        },

        {
          type: "paragraph",
          content:
            "React applications use:"
        },

        {
          type: "list",
          items: [
            "JSX syntax",
            "ES6+ JavaScript features",
            "Component architecture",
            "Build tools",
            "Package management systems"
          ]
        },

        {
          type: "paragraph",
          content:
            "Browsers cannot understand JSX directly."
        },

        {
          type: "paragraph",
          content:
            "For example:"
        },

        {
          type: "code",
          language: "javascript",
          content: `function App() {
  return <h1>Hello React</h1>;
}`
        },

        {
          type: "paragraph",
          content:
            "The browser cannot execute this code as-is."
        },

        {
          type: "paragraph",
          content:
            "It must first be transformed into regular JavaScript."
        },

        {
          type: "paragraph",
          content:
            "This transformation process is handled by development tools behind the scenes."
        },

        {
          type: "warning",
          content:
            "That is why React requires a proper development environment."
        }
      ]
    },

    {
      heading: "Tools Required for React Development",

      blocks: [
        {
          type: "paragraph",
          content:
            "A modern React setup typically includes:"
        },

        {
          type: "table",
          headers: ["Tool", "Purpose"],
          rows: [
            ["Node.js", "Runs JavaScript outside the browser"],
            ["npm", "Installs packages and dependencies"],
            ["Vite", "Creates and serves React applications"],
            ["VS Code", "Code editor"],
            ["Browser", "Displays the application"],
            ["Git (Optional)", "Version control"]
          ]
        },

        {
          type: "paragraph",
          content:
            "These tools work together to provide a smooth development experience."
        }
      ]
    },

    {
      heading: "Step 1: Install Node.js",

      blocks: [
        {
          type: "paragraph",
          content:
            "The first tool every React developer must install is Node.js."
        },

        {
          type: "paragraph",
          content:
            "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser."
        },

        {
          type: "paragraph",
          content:
            "React development tools rely on Node.js to execute build processes, install packages, and start development servers."
        },

        {
          type: "warning",
          content:
            "Without Node.js, React projects cannot be created."
        }
      ]
    },

    {
      heading: "Why React Needs Node.js",

      blocks: [
        {
          type: "paragraph",
          content:
            "Node.js provides:"
        },

        {
          type: "list",
          items: [
            "Package installation",
            "Development server",
            "Build tools",
            "Project scripts",
            "Dependency management"
          ]
        },

        {
          type: "paragraph",
          content:
            "Almost every modern frontend framework relies on Node.js."
        },

        {
          type: "paragraph",
          content:
            "This includes:"
        },

        {
          type: "list",
          items: [
            "React",
            "Next.js",
            "Vue",
            "Angular",
            "Svelte"
          ]
        }
      ]
    },

    {
      heading: "Downloading Node.js",

      blocks: [
        {
          type: "paragraph",
          content:
            "Visit the official Node.js website and download the latest LTS version."
        },

        {
          type: "paragraph",
          content:
            "LTS stands for Long-Term Support."
        },

        {
          type: "paragraph",
          content:
            "It is recommended because:"
        },

        {
          type: "list",
          items: [
            "More stable",
            "Fewer bugs",
            "Better compatibility",
            "Widely used in industry"
          ]
        },

        {
          type: "tip",
          content:
            "Avoid experimental versions when learning React."
        }
      ]
    },

    {
      heading: "Step 2: Verify Node.js Installation",

      blocks: [
        {
          type: "paragraph",
          content:
            "After installation, open the terminal and run:"
        },

        {
          type: "code",
          language: "bash",
          content: `node -v`
        },

        {
          type: "paragraph",
          content:
            "Example output:"
        },

        {
          type: "output",
          content: `v22.15.0`
        },

        {
          type: "note",
          content:
            "This confirms Node.js is installed correctly."
        }
      ]
    },

    {
      heading: "Step 3: Verify npm Installation",

      blocks: [
        {
          type: "paragraph",
          content:
            "npm stands for Node Package Manager."
        },

        {
          type: "paragraph",
          content:
            "It is automatically installed with Node.js."
        },

        {
          type: "paragraph",
          content:
            "Check it using:"
        },

        {
          type: "code",
          language: "bash",
          content: `npm -v`
        },

        {
          type: "paragraph",
          content:
            "Example output:"
        },

        {
          type: "output",
          content: `10.9.2`
        },

        {
          type: "note",
          content:
            "If a version number appears, npm is ready to use."
        }
      ]
    },

    {
      heading: "What is npm?",

      blocks: [

        {
          type: "paragraph",
          content:
            "Modern applications use thousands of reusable packages."
        },

        {
          type: "paragraph",
          content:
            "Instead of writing everything from scratch, developers install packages using npm."
        },

        {
          type: "paragraph",
          content:
            "Examples:"
        },

        {
          type: "list",
          items: [
            "React",
            "React Router",
            "Axios",
            "Redux",
            "Tailwind CSS"
          ]
        },

        {
          type: "paragraph",
          content:
            "npm downloads and manages these packages automatically."
        }

      ]
    },

    {
      heading: "Step 4: Install a Code Editor",

      blocks: [

        {
          type: "paragraph",
          content:
            "A code editor is where we write React code."
        },

        {
          type: "paragraph",
          content:
            "The most popular editor for React development is:"
        },

        {
          type: "note",
          content:
            "Visual Studio Code (VS Code)"
        },

        {
          type: "paragraph",
          content:
            "Why developers prefer VS Code:"
        },

        {
          type: "list",
          items: [
            "Free",
            "Fast",
            "Lightweight",
            "Excellent React support",
            "Huge extension ecosystem",
            "Built-in terminal"
          ]
        },

        {
          type: "paragraph",
          content:
            "It has become the industry standard editor for React development."
        }

      ]
    },

    {
      heading: "Recommended VS Code Extensions",

      blocks: [

        {
          type: "paragraph",
          content:
            "Professional React developers commonly install:"
        },

        {
          type: "cards",
          items: [
            {
              title: "ES7+ React Snippets",
              description: "Provides React shortcuts."
            },
            {
              title: "Prettier",
              description: "Automatically formats code."
            },
            {
              title: "ESLint",
              description: "Detects code mistakes and potential bugs."
            },
            {
              title: "GitHub Copilot (Optional)",
              description: "AI-powered coding assistant."
            }
          ]
        }

      ]
    },

    {
      heading: "ES7+ React Snippets",

      blocks: [

        {
          type: "paragraph",
          content:
            "Provides React shortcuts."
        },

        {
          type: "paragraph",
          content:
            "Example:"
        },

        {
          type: "paragraph",
          content:
            "Typing:"
        },

        {
          type: "code",
          language: "bash",
          content: `rafce`
        },

        {
          type: "paragraph",
          content:
            "Automatically generates:"
        },

        {
          type: "code",
          language: "javascript",
          content: `const App = () => {
  return (
    <div>
          
    </div>
  );
};

export default App;`
        }

      ]
    },

    {
      heading: "Prettier",

      blocks: [

        {
          type: "paragraph",
          content:
            "Automatically formats code."
        },

        {
          type: "paragraph",
          content:
            "Benefits:"
        },

        {
          type: "list",
          items: [
            "Cleaner code",
            "Consistent style",
            "Easier collaboration"
          ]
        }

      ]
    },

    {
      heading: "ESLint",

      blocks: [

        {
          type: "paragraph",
          content:
            "Detects code mistakes and potential bugs."
        },

        {
          type: "paragraph",
          content:
            "Benefits:"
        },

        {
          type: "list",
          items: [
            "Better code quality",
            "Faster debugging",
            "Industry-standard development"
          ]
        }

      ]
    },

    {
      heading: "GitHub Copilot (Optional)",

      blocks: [

        {
          type: "paragraph",
          content:
            "AI-powered coding assistant."
        },

        {
          type: "paragraph",
          content:
            "Can help generate:"
        },

        {
          type: "list",
          items: [
            "Components",
            "Functions",
            "Explanations",
            "Boilerplate code"
          ]
        }

      ]
    },

    {
      heading: "Step 5: Create Your First React Project",

      blocks: [

        {
          type: "paragraph",
          content:
            "Modern React projects are typically created using Vite."
        }

      ]
    },

    {
      heading: "Why Not Create React App?",

      blocks: [

        {
          type: "paragraph",
          content:
            "For many years, Create React App (CRA) was the standard tool."
        },

        {
          type: "paragraph",
          content:
            "Today, Vite has become the preferred option because it is:"
        },

        {
          type: "list",
          items: [
            "Faster",
            "Simpler",
            "More modern",
            "Better developer experience"
          ]
        },

        {
          type: "paragraph",
          content:
            "Most new React projects use Vite."
        }

      ]
    },

    {
      heading: "Creating a React Project with Vite",

      blocks: [

        {
          type: "paragraph",
          content:
            "Run:"
        },

        {
          type: "code",
          language: "bash",
          content: `npm create vite@latest`
        },

        {
          type: "paragraph",
          content:
            "The terminal will ask:"
        },

        {
          type: "paragraph",
          content:
            "Project name:"
        },

        {
          type: "code",
          language: "bash",
          content: `my-react-app`
        },

        {
          type: "paragraph",
          content:
            "Next:"
        },

        {
          type: "paragraph",
          content:
            "Select a framework:"
        },

        {
          type: "note",
          content:
            "Choose: React"
        },

        {
          type: "paragraph",
          content:
            "Then:"
        },

        {
          type: "paragraph",
          content:
            "Select a variant:"
        },

        {
          type: "list",
          items: [
            "JavaScript",
            "TypeScript"
          ]
        },

        {
          type: "paragraph",
          content:
            "Choose according to your preference."
        }

      ]
    },

    {
      heading: "Step 6: Navigate into the Project",

      blocks: [

        {
          type: "paragraph",
          content:
            "Move into the project folder:"
        },

        {
          type: "code",
          language: "bash",
          content: `cd my-react-app`
        }

      ]
    },

    {
      heading: "Step 7: Install Dependencies",

      blocks: [

        {
          type: "paragraph",
          content:
            "Run:"
        },

        {
          type: "code",
          language: "bash",
          content: `npm install`
        },

        {
          type: "paragraph",
          content:
            "This downloads all required packages."
        },

        {
          type: "paragraph",
          content:
            "React projects depend on many packages that are listed in:"
        },

        {
          type: "code",
          language: "bash",
          content: `package.json`
        },

        {
          type: "paragraph",
          content:
            "npm automatically installs them into:"
        },

        {
          type: "code",
          language: "bash",
          content: `node_modules`
        }

      ]
    },

    {
      heading: "Step 8: Start the Development Server",

      blocks: [

        {
          type: "paragraph",
          content:
            "Run:"
        },

        {
          type: "code",
          language: "bash",
          content: `npm run dev`
        },

        {
          type: "paragraph",
          content:
            "Example output:"
        },

        {
          type: "output",
          content: `Local: http://localhost:5173/`
        },

        {
          type: "paragraph",
          content:
            "Open the URL in your browser."
        },

        {
          type: "paragraph",
          content:
            "You should see the default React application."
        },

        {
          type: "tip",
          content:
            "Congratulations! Your React environment is now working."
        }

      ]
    },

    {
      heading: "Understanding What Just Happened",

      blocks: [

        {
          type: "paragraph",
          content:
            "When you run:"
        },

        {
          type: "code",
          language: "bash",
          content: `npm run dev`
        },

        {
          type: "paragraph",
          content:
            "Vite starts a development server."
        },

        {
          type: "paragraph",
          content:
            "This server:"
        },

        {
          type: "list",
          items: [
            "Watches file changes",
            "Rebuilds automatically",
            "Refreshes the browser",
            "Displays errors instantly"
          ]
        },

        {
          type: "paragraph",
          content:
            "This creates a much faster workflow than traditional web development."
        }

      ]
    },

    {
      heading: "React Development Workflow",

      blocks: [

        {
          type: "paragraph",
          content:
            "A typical React workflow looks like:"
        },

        {
          type: "flow",
          steps: [
            "Write Code",
            "→",
            "Save File",
            "→",
            "Vite Detects Changes",
            "→",
            "Application Rebuilds",
            "→",
            "Browser Updates Automatically"
          ]
        },

        {
          type: "paragraph",
          content:
            "This feature is called Hot Module Replacement (HMR)."
        }

      ]
    },

    {
      heading: "What is Hot Module Replacement (HMR)?",

      blocks: [

        {
          type: "paragraph",
          content:
            "HMR updates only the changed part of the application."
        },

        {
          type: "paragraph",
          content:
            "Without HMR:"
        },

        {
          type: "flow",
          steps: [
            "Change Code",
            "→",
            "Reload Entire Page",
            "→",
            "Lose Current State"
          ]
        },

        {
          type: "paragraph",
          content:
            "With HMR:"
        },

        {
          type: "flow",
          steps: [
            "Change Code",
            "→",
            "Only Updated Component Reloads",
            "→",
            "Much Faster Development"
          ]
        },

        {
          type: "tip",
          content:
            "This is one reason React development feels smooth."
        }

      ]
    },

    {
      heading: "Understanding Project Structure",

      blocks: [

        {
          type: "paragraph",
          content:
            "After creating a React project, you may see:"
        },

        {
          type: "tree",
          content: `my-react-app
    ├── node_modules
    ├── public
    ├── src
    ├── package.json
    ├── vite.config.js
    └── index.html`
        }

      ]
    },

    {
      heading: "Important Folders",

      blocks: [

        {
          type: "cards",
          items: [
            {
              title: "src",
              description: "Contains application code."
            },
            {
              title: "public",
              description: "Stores static files."
            },
            {
              title: "node_modules",
              description: "Contains installed packages."
            },
            {
              title: "package.json",
              description: "Stores project metadata and dependencies."
            }
          ]
        }

      ]
    },

    {
      heading: "Inside the src Folder",

      blocks: [

        {
          type: "paragraph",
          content:
            "Examples:"
        },

        {
          type: "list",
          items: [
            "Components",
            "Pages",
            "Styles",
            "Logic"
          ]
        }

      ]
    },

    {
      heading: "Inside the public Folder",

      blocks: [

        {
          type: "paragraph",
          content:
            "Examples:"
        },

        {
          type: "list",
          items: [
            "Images",
            "Icons",
            "PDFs"
          ]
        }

      ]
    },

    {
      heading: "node_modules",

      blocks: [

        {
          type: "paragraph",
          content:
            "Contains installed packages."
        },

        {
          type: "warning",
          content:
            "Do not edit this folder manually."
        }

      ]
    },

    {
      heading: "package.json",

      blocks: [

        {
          type: "paragraph",
          content:
            "Stores project metadata and dependencies."
        },

        {
          type: "note",
          content:
            "Think of it as the control center of your React project."
        }

      ]
    },

    {
      heading: "Common Setup Errors",

      blocks: [

        {
          type: "faq",
          items: [
            {
              question: "Error 1: node is not recognized",
              answer: "Cause: Node.js is not installed correctly. Solution: Reinstall Node.js and restart the terminal."
            },
            {
              question: "Error 2: npm is not recognized",
              answer: "Cause: npm installation issue. Solution: Reinstall Node.js. npm comes bundled with it."
            },
            {
              question: "Error 3: Port already in use",
              answer: "Cause: Another application is using the same port. Solution: Close the existing process or use another port."
            },
            {
              question: "Error 4: Module not found",
              answer: "Cause: Dependencies not installed. Solution: Run npm install."
            }
          ]
        }

      ]
    },

    {
      heading: "Professional React Setup Practices",

      blocks: [

        {
          type: "paragraph",
          content:
            "Many beginner tutorials stop after creating a React project."
        },

        {
          type: "paragraph",
          content:
            "Professional developers usually do a few additional things:"
        }

      ]
    },

    {
      heading: "Initialize Git",

      blocks: [

        {
          type: "code",
          language: "bash",
          content: `git init`
        },

        {
          type: "paragraph",
          content:
            "This tracks code changes."
        }

      ]
    },

    {
      heading: "Install Prettier",

      blocks: [

        {
          type: "code",
          language: "bash",
          content: `npm install --save-dev prettier`
        },

        {
          type: "paragraph",
          content:
            "Maintains consistent formatting."
        }

      ]
    },

    {
      heading: "Install ESLint",

      blocks: [

        {
          type: "code",
          language: "bash",
          content: `npm install eslint`
        },

        {
          type: "paragraph",
          content:
            "Improves code quality."
        }

      ]
    },

    {
      heading: "Use GitHub",

      blocks: [

        {
          type: "paragraph",
          content:
            "Store projects remotely and collaborate with others."
        }

      ]
    },

    {
      heading: "React Environment Setup Checklist",

      blocks: [

        {
          type: "paragraph",
          content:
            "Before moving forward, ensure:"
        },

        {
          type: "list",
          items: [
            "Node.js installed",
            "npm installed",
            "VS Code installed",
            "React project created",
            "Dependencies installed",
            "Development server running",
            "Browser displays React application"
          ]
        },

        {
          type: "tip",
          content:
            "If all boxes are checked, your environment is ready."
        }

      ]
    },

    {
      heading: "Summary",

      blocks: [

        {
          type: "paragraph",
          content:
            "Setting up a React environment involves preparing the tools required to build modern React applications."
        },

        {
          type: "paragraph",
          content:
            "The setup process includes:"
        },

        {
          type: "list",
          items: [
            "Installing Node.js",
            "Verifying npm",
            "Installing VS Code",
            "Creating a React project with Vite",
            "Installing dependencies",
            "Running the development server",
            "Understanding project structure",
            "Learning the development workflow"
          ]
        },

        {
          type: "paragraph",
          content:
            "These tools form the foundation of every React application you will build."
        }

      ]
    },

    {
      heading: "DevSphere Special Note",

      blocks: [

        {
          type: "note",
          content:
            "💡 Many beginners think React is the most important thing to install."
        },

        {
          type: "paragraph",
          content:
            "In reality, Node.js is the foundation of the entire React ecosystem."
        },

        {
          type: "paragraph",
          content:
            "React, Vite, Next.js, Tailwind CSS, Redux, React Router, and thousands of other frontend tools all depend on Node.js. Understanding the role of Node.js early will make learning modern web development much easier later."
        }

      ]
    },
  ]
},




/* =========================================
  Fourth topic : Create Your First React App
========================================== */
  "first-react-app": {
    title: "Create Your First React App",
    readingTime: "15 min",

    content: [
      {
        heading: "Create Your First React App",

        blocks: [

          {
            type: "paragraph",
            content:
              "Now that your React development environment is ready, it's time to create your first React application."
          },

          {
            type: "paragraph",
            content:
              "This is the moment where all the tools you installed—Node.js, npm, VS Code, and Vite—start working together."
          },

          {
            type: "paragraph",
            content:
              "Creating a React application is much more than generating a folder with files."
          },

          {
            type: "paragraph",
            content:
              "You are setting up:"
          },

          {
            type: "list",
            items: [
              "A development server",
              "A build system",
              "Dependency management",
              "Modern JavaScript support",
              "React itself"
            ]
          },

          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },

          {
            type: "list",
            items: [
              "How React applications are created",
              "Why modern React uses Vite",
              "Creating your first React project",
              "Understanding the generated files",
              "Running the application",
              "Making your first modification",
              "Understanding Hot Module Replacement (HMR)",
              "Common beginner mistakes",
              "Professional project setup practices"
            ]
          },

          {
            type: "note",
            content:
              "By the end of this lesson, you will have a fully working React application running on your computer and understand exactly how it was created."
          }

        ]
      },

      {
        heading: "What Does 'Creating a React App' Actually Mean?",

        blocks: [

          {
            type: "paragraph",
            content:
              "Many beginners think React is installed globally on their computer."
          },

          {
            type: "paragraph",
            content:
              "That is not how modern React development works."
          },

          {
            type: "paragraph",
            content:
              "When you create a React project, several things happen automatically:"
          },

          {
            type: "list",
            items: [
              "Project structure is generated",
              "React packages are installed",
              "Build tools are configured",
              "Development scripts are created",
              "Dependencies are linked together"
            ]
          },

          {
            type: "paragraph",
            content:
              "Instead of manually configuring dozens of tools, Vite prepares everything for you."
          },

          {
            type: "paragraph",
            content:
              "This allows developers to start building immediately."
          }

        ]
      },

      {
        heading: "Modern React Uses Vite",

        blocks: [

          {
            type: "paragraph",
            content:
              "For many years, React developers used a tool called Create React App (CRA)."
          },

          {
            type: "paragraph",
            content:
              "A typical command looked like:"
          },

          {
            type: "code",
            language: "bash",
            content: `npx create-react-app my-app`
          },

          {
            type: "paragraph",
            content:
              "While CRA was revolutionary when it launched, modern frontend development has evolved."
          },

          {
            type: "paragraph",
            content:
              "Today, most React developers use Vite."
          }

        ]
      },

      {
        heading: "Why Vite Replaced Create React App",

        blocks: [

          {
            type: "cards",
            items: [
              {
                title: "Faster Startup",
                description: "Vite starts almost instantly. Large projects that take several seconds in CRA often start in less than a second with Vite."
              },
              {
                title: "Faster Updates",
                description: "When files change, Vite updates only what is necessary. This creates a much smoother development experience."
              },
              {
                title: "Simpler Configuration",
                description: "Modern tooling works out of the box. Less configuration means fewer setup headaches."
              },
              {
                title: "Better Developer Experience",
                description: "Vite was designed specifically to improve frontend development speed."
              }
            ]
          },

          {
            type: "tip",
            content:
              "For new React projects, Vite has become the industry standard."
          }

        ]
      },

      {
        heading: "Creating Your First React App",

        blocks: [

          {
            type: "paragraph",
            content:
              "Open your terminal and run:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm create vite@latest`
          },

          {
            type: "paragraph",
            content:
              "You will see a setup wizard."
          }

        ]
      },

      {
        heading: "Step 1: Enter Project Name",

        blocks: [

          {
            type: "paragraph",
            content:
              "The terminal will ask:"
          },

          {
            type: "output",
            content: `Project name:`
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "output",
            content: `my-react-app`
          },

          {
            type: "paragraph",
            content:
              "You can choose any valid project name."
          },

          {
            type: "example",
            items: [
              "portfolio",
              "expense-tracker",
              "weather-app",
              "learn-react"
            ]
          },

          {
            type: "paragraph",
            content:
              "Avoid:"
          },

          {
            type: "orderedList",
            items: [
              "My React App",
              "React Project!"
            ]
          },

          {
            type: "warning",
            content:
              "Spaces and special characters can cause issues."
          }

        ]
      },

      {
        heading: "Step 2: Select Framework",

        blocks: [

          {
            type: "paragraph",
            content:
              "The next prompt asks:"
          },

          {
            type: "output",
            content: `Select a framework:`
          },

          {
            type: "paragraph",
            content:
              "Choose:"
          },

          {
            type: "output",
            content: `React`
          },

          {
            type: "paragraph",
            content:
              "This tells Vite to generate a React project."
          }

        ]
      },

      {
        heading: "Step 3: Select Variant",

        blocks: [

          {
            type: "paragraph",
            content:
              "Next:"
          },

          {
            type: "output",
            content: `Select a variant:`
          },

          {
            type: "paragraph",
            content:
              "You will typically see:"
          },

          {
            type: "list",
            items: [
              "JavaScript",
              "TypeScript"
            ]
          },

          {
            type: "cards",
            items: [
              {
                title: "Choose JavaScript If",
                description: "You are learning React, you are new to frontend development, and you want fewer concepts initially."
              },
              {
                title: "Choose TypeScript If",
                description: "You already know JavaScript well, you want stronger type safety, and you are building larger applications."
              }
            ]
          },

          {
            type: "tip",
            content:
              "For most beginners, JavaScript is recommended."
          }

        ]
      },

      {
        heading: "Project Creation Complete",

        blocks: [

          {
            type: "paragraph",
            content:
              "After completing the prompts, Vite generates your project structure."
          },

          {
            type: "paragraph",
            content:
              "You will see something similar to:"
          },

          {
            type: "output",
            content: `Scaffolding project...
      Done.`
          },

          {
            type: "paragraph",
            content:
              "Your React application now exists on your computer."
          },

          {
            type: "warning",
            content:
              "However, dependencies are not installed yet."
          }

        ]
      },

      {
        heading: "Navigate Into the Project",

        blocks: [

          {
            type: "paragraph",
            content:
              "Move into the project folder:"
          },

          {
            type: "code",
            language: "bash",
            content: `cd my-react-app`
          },

          {
            type: "paragraph",
            content:
              "Replace:"
          },

          {
            type: "output",
            content: `my-react-app`
          },

          {
            type: "paragraph",
            content:
              "with your actual project name."
          }

        ]
      },

      {
        heading: "Install Dependencies",

        blocks: [

          {
            type: "paragraph",
            content:
              "Run:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm install`
          },

          {
            type: "paragraph",
            content:
              "or:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm i`
          },

          {
            type: "note",
            content:
              "Both commands do the same thing."
          }

        ]
      },

      {
        heading: "What Happens During npm Install?",

        blocks: [

          {
            type: "paragraph",
            content:
              "npm reads:"
          },

          {
            type: "output",
            content: `package.json`
          },

          {
            type: "paragraph",
            content:
              "and downloads all required packages."
          },

          {
            type: "paragraph",
            content:
              "Examples include:"
          },

          {
            type: "list",
            items: [
              "React",
              "React DOM",
              "Vite",
              "Supporting libraries"
            ]
          },

          {
            type: "paragraph",
            content:
              "These packages are stored inside:"
          },

          {
            type: "output",
            content: `node_modules`
          },

          {
            type: "warning",
            content:
              "This folder may contain thousands of files. Do not edit it manually."
          }

        ]
      },

      {
        heading: "Start the Development Server",

        blocks: [

          {
            type: "paragraph",
            content:
              "Once installation finishes, run:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm run dev`
          },

          {
            type: "paragraph",
            content:
              "You may see output like:"
          },

          {
            type: "output",
            content: `VITE v7.x ready in 200ms

      ➜ Local: http://localhost:5173/`
          },

          {
            type: "paragraph",
            content:
              "Open the displayed URL in your browser."
          },

          {
            type: "paragraph",
            content:
              "Usually:"
          },

          {
            type: "output",
            content: `http://localhost:5173`
          }

        ]
      },

      {
        heading: "Congratulations!",

        blocks: [

          {
            type: "paragraph",
            content:
              "You have successfully launched your first React application."
          },

          {
            type: "paragraph",
            content:
              "You should see the default Vite + React screen."
          },

          {
            type: "paragraph",
            content:
              "This confirms:"
          },

          {
            type: "list",
            items: [
              "React is installed",
              "Dependencies are installed",
              "Vite is working",
              "Development server is running",
              "Browser is connected correctly"
            ]
          }

        ]
      },

      {
        heading: "Understanding the Generated Project Structure",

        blocks: [

          {
            type: "paragraph",
            content:
              "A newly created React application typically looks like:"
          },

          {
            type: "tree",
            content: `my-react-app
      ├── node_modules
      ├── public
      ├── src
      ├── package.json
      ├── vite.config.js
      ├── index.html
      └── package-lock.json`
          },

          {
            type: "paragraph",
            content:
              "Each file has a specific purpose."
          }

        ]
      },

      {
        heading: "src Folder",

        blocks: [

          {
            type: "paragraph",
            content:
              "The most important folder."
          },

          {
            type: "paragraph",
            content:
              "Contains:"
          },

          {
            type: "list",
            items: [
              "Components",
              "Pages",
              "Styles",
              "Logic",
              "React code"
            ]
          },

          {
            type: "note",
            content:
              "You will spend most of your time here."
          }

        ]
      },

      {
        heading: "public Folder",

        blocks: [

          {
            type: "paragraph",
            content:
              "Contains static files."
          },

          {
            type: "paragraph",
            content:
              "Examples:"
          },

          {
            type: "list",
            items: [
              "Images",
              "Icons",
              "PDFs",
              "Fonts"
            ]
          },

          {
            type: "paragraph",
            content:
              "Files here are served directly by the browser."
          }

        ]
      },

      {
        heading: "package.json",

        blocks: [

          {
            type: "paragraph",
            content:
              "The control center of your project."
          },

          {
            type: "paragraph",
            content:
              "Contains:"
          },

          {
            type: "list",
            items: [
              "Project name",
              "Dependencies",
              "Scripts",
              "Version information"
            ]
          },

          {
            type: "paragraph",
            content:
              "Example scripts:"
          },

          {
            type: "code",
            content: `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}`
          }

        ]
      },

      {
        heading: "node_modules",

        blocks: [

          {
            type: "paragraph",
            content:
              "Contains installed packages."
          },

          {
            type: "warning",
            content:
              "Never modify this folder manually."
          },

          {
            type: "paragraph",
            content:
              "npm manages it automatically."
          }

        ]
      },

      {
        heading: "vite.config.js",

        blocks: [

          {
            type: "paragraph",
            content:
              "Configuration file for Vite."
          },

          {
            type: "paragraph",
            content:
              "Most beginners rarely need to edit it."
          },

          {
            type: "paragraph",
            content:
              "As projects grow, it can be customized."
          }

        ]
      },

      {
        heading: "Your First React Modification",

        blocks: [

          {
            type: "paragraph",
            content:
              "Let's make a simple change."
          },

          {
            type: "paragraph",
            content:
              "Open:"
          },

          {
            type: "output",
            content: `src/App.jsx`
          },

          {
            type: "paragraph",
            content:
              "You may see code similar to:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;`
          },

          {
            type: "paragraph",
            content:
              "Replace it with:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function App() {
  return (
    <h1>Hello React!</h1>
  );
}

export default App;`
          },

          {
            type: "paragraph",
            content:
              "Save the file."
          }

        ]
      },

      {
        heading: "What Happens After Saving?",

        blocks: [

          {
            type: "paragraph",
            content:
              "You do not need to refresh the browser."
          },

          {
            type: "paragraph",
            content:
              "Vite detects the change automatically."
          },

          {
            type: "paragraph",
            content:
              "The page updates instantly."
          },

          {
            type: "paragraph",
            content:
              "This happens because of:"
          },

          {
            type: "output",
            content: `Hot Module Replacement (HMR)`
          }

        ]
      },

      {
        heading: "Understanding HMR",

        blocks: [

          {
            type: "comparison",
            leftTitle: "Traditional Workflow",
            leftItems: [
              "Write Code",
              "Save",
              "Reload Browser",
              "See Changes"
            ],
            rightTitle: "React + Vite Workflow",
            rightItems: [
              "Write Code",
              "Save",
              "HMR Updates Application",
              "See Changes Instantly"
            ]
          },

          {
            type: "note",
            content:
              "This dramatically improves development speed."
          }

        ]
      },

      {
        heading: "Common Beginner Mistakes",

        blocks: [

          {
            type: "cards",
            items: [
              {
                title: "Mistake 1: Forgetting npm install",
                description: "Symptoms: Module not found. Fix: npm install"
              },
              {
                title: "Mistake 2: Running Commands Outside the Project Folder",
                description: "Wrong: npm run dev from another directory. Correct: cd my-react-app then npm run dev"
              },
              {
                title: "Mistake 3: Closing the Terminal",
                description: "The development server runs inside the terminal. If you close it, the application stops running. Restart using npm run dev."
              },
              {
                title: "Mistake 4: Editing node_modules",
                description: "Never edit node_modules. Changes will eventually be lost. Always edit files inside src."
              }
            ]
          }

        ]
      },

      {
        heading: "Professional Practices After Creating a Project",

        blocks: [

          {
            type: "paragraph",
            content:
              "Most experienced React developers immediately perform a few additional steps."
          },

          {
            type: "tree",
            /*title: "Initialize Git",*/
            content: `Initialize Git

Tracks code changes.`,
          },

          {
            type: "code",
            language: "bash",
            content: `git init`
          },

          {
            type: "tree",
            /*title: "Create a Git Repository",*/
            content: `Create a Git Repository
            
Push the project to GitHub, GitLab, or Bitbucket. This creates backups and enables collaboration.`
          },

          {
            type: "tree",
            /*title: "Install Prettier",*/
            content: `Install Prettier
            
Automatically formats code.`
          },

          {
            type: "code",
            language: "bash",
            content: `npm install --save-dev prettier`
          },

          {
            type: "tree",
            /*title: "Install ESLint",*/
            content: `Install ESLint
            
Helps catch mistakes early.`
          },

          {
            type: "code",
            language: "bash",
            content: `npm install eslint`
          }

        ]
      },

      {
        heading: "Create a Proper Folder Structure",

        blocks: [

          {
            type: "paragraph",
            content:
              "Instead of keeping everything inside src:"
          },

          {
            type: "tree",
            content: `src
      ├── components
      ├── pages
      ├── assets
      ├── hooks
      ├── services
      └── styles`
          },

          {
            type: "note",
            content:
              "This becomes important as projects grow."
          }

        ]
      },

      {
        heading: "Create React App vs Vite",

        blocks: [

          {
            type: "table",
            headers: [
              "Feature",
              "Create React App",
              "Vite"
            ],
            rows: [
              ["Startup Speed", "Slower", "Very Fast"],
              ["Build Speed", "Slower", "Faster"],
              ["HMR Performance", "Good", "Excellent"],
              ["Modern Standards", "Older", "Modern"],
              ["New Projects", "Rarely Used", "Recommended"]
            ]
          },

          {
            type: "tip",
            content:
              "For modern React development, Vite is the preferred choice."
          }

        ]
      },

      {
        heading: "React Project Creation Checklist",

        blocks: [

          {
            type: "paragraph",
            content:
              "Before moving forward, ensure:"
          },

          {
            type: "list",
            items: [
              "Project created successfully",
              "React selected",
              "Dependencies installed",
              "Development server running",
              "Browser displays React app",
              "App.jsx modified successfully",
              "Changes appear instantly"
            ]
          },

          {
            type: "note",
            content:
              "If all are complete, you are ready to start building React applications."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content:
              "Creating a React application involves much more than generating files."
          },

          {
            type: "paragraph",
            content:
              "Modern React development uses Vite to provide:"
          },

          {
            type: "list",
            items: [
              "Fast project creation",
              "Lightning-fast development server",
              "Hot Module Replacement",
              "Modern tooling",
              "Better developer experience"
            ]
          },

          {
            type: "paragraph",
            content:
              "The basic workflow is:"
          },

          {
            type: "flow",
            steps: [
              "Create Project",
              "Install Dependencies",
              "Run Development Server",
              "Edit App.jsx",
              "Build Features"
            ]
          },

          {
            type: "note",
            content:
              "Understanding this workflow is one of the most important foundations of React development."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "tip",
            content:
              "💡 Many beginners think creating a React app is the same as installing React."
          },

          {
            type: "paragraph",
            content:
              "They are actually different things."
          },

          {
            type: "paragraph",
            content:
              "Installing React simply downloads the React package."
          },

          {
            type: "paragraph",
            content:
              "Creating a React application sets up an entire development ecosystem including React, Vite, build tools, development servers, package management, and project structure."
          },

          {
            type: "note",
            content:
              "Understanding this distinction helps you understand how modern frontend development actually works behind the scenes."
          }

        ]
      },
  ]
},




/* =====================================
  Fifth topic : React Project Structure
====================================== */
  "react-project-structure": {
    title: "React Project Structure",
    readingTime: "10 min",

    content: [
      {
        heading: "React Project Structure",

        blocks: [

          {
            type: "paragraph",
            content:
              "As React applications grow, organizing files properly becomes just as important as writing code."
          },

          {
            type: "paragraph",
            content:
              "A small React project may contain only a few files, but a real-world application can contain hundreds or even thousands of components, pages, hooks, services, assets, and utility functions."
          },

          {
            type: "paragraph",
            content:
              "Without a proper structure, projects quickly become:"
          },

          {
            type: "list",
            items: [
              "Difficult to navigate",
              "Hard to maintain",
              "Challenging to scale",
              "Error-prone for teams"
            ]
          },

          {
            type: "paragraph",
            content:
              "This is why professional React developers spend significant time designing project structure."
          },

          {
            type: "paragraph",
            content:
              "A good folder structure helps developers:"
          },

          {
            type: "list",
            items: [
              "Find files quickly",
              "Understand the application architecture",
              "Collaborate efficiently",
              "Scale projects smoothly",
              "Reduce technical debt"
            ]
          },

          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },

          {
            type: "list",
            items: [
              "Why project structure matters",
              "The default React project structure",
              "The purpose of each folder",
              "Feature-based vs type-based organization",
              "Modern React folder structures used in industry",
              "How large companies organize React projects",
              "Common mistakes beginners make",
              "Professional best practices for scalable applications"
            ]
          },

          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will know how to organize React applications from small projects to enterprise-level products."
          }
        ]
      },

      {
        heading: "Why Project Structure Matters",

        blocks: [

          {
            type: "paragraph",
            content:
              "Imagine opening a React project and seeing:"
          },

          {
            type: "tree",
            content: `src
  ├── App.jsx
  ├── Home.jsx
  ├── Dashboard.jsx
  ├── Login.jsx
  ├── Navbar.jsx
  ├── Button.jsx
  ├── UserAPI.js
  ├── Auth.js
  ├── Product.js
  ├── Cart.js
  ├── Theme.js
  ├── Profile.js
  ├── Settings.js
  └── 200 more files...`
          },

          {
            type: "paragraph",
            content:
              "Finding anything becomes frustrating."
          },

          {
            type: "paragraph",
            content:
              "As applications grow:"
          },

          {
            type: "list",
            items: [
              "New developers need more onboarding time",
              "Features become harder to maintain",
              "Bugs become harder to locate",
              "Code duplication increases"
            ]
          },

          {
            type: "paragraph",
            content:
              "A proper folder structure solves these problems by grouping related code together."
          }
        ]
      },

      {
        heading: "Default React Project Structure",

        blocks: [

          {
            type: "paragraph",
            content:
              "A newly created Vite React project typically looks like:"
          },

          {
            type: "tree",
            content: `my-react-app
        ├── node_modules
        ├── public
        ├── src
        ├── package.json
        ├── vite.config.js
        ├── index.html
        └── package-lock.json`
          },

          {
            type: "paragraph",
            content:
              "Each file and folder serves a specific purpose."
          }
        ]
      },

      {
        heading: "Understanding the Root Files",

        blocks: [

          {
            type: "cards",
            items: [
              {
                title: "package.json",
                description:
                  "Stores project information, dependencies, scripts, and version details."
              },
              {
                title: "package-lock.json",
                description:
                  "Locks exact dependency versions for consistent installations."
              },
              {
                title: "vite.config.js",
                description:
                  "Configuration file used for plugins, aliases, and build customization."
              },
              {
                title: "index.html",
                description:
                  "Single HTML file where React mounts the entire application."
              }
            ]
          }
        ]
      },

      {
        heading: "package.json",

        blocks: [

          {
            type: "paragraph",
            content:
              "This is the control center of your project."
          },

          {
            type: "paragraph",
            content:
              "It contains:"
          },

          {
            type: "list",
            items: [
              "Project information",
              "Installed dependencies",
              "npm scripts",
              "Version information"
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "code",
            language: "json",
            content: `{
  "name": "my-react-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}`
          },

          {
            type: "note",
            content:
              "Without this file, npm cannot manage your project."
          }
        ]
      },

      {
        heading: "package-lock.json",

        blocks: [

          {
            type: "paragraph",
            content:
              "This file locks exact dependency versions."
          },

          {
            type: "paragraph",
            content:
              "Benefits:"
          },

          {
            type: "list",
            items: [
              "Consistent installations",
              "Fewer dependency conflicts",
              "Better team collaboration"
            ]
          },

          {
            type: "tip",
            content:
              "Most developers never edit it manually."
          }
        ]
      },

      {
        heading: "vite.config.js",

        blocks: [

          {
            type: "paragraph",
            content:
              "This is Vite's configuration file."
          },

          {
            type: "paragraph",
            content:
              "It can be used for:"
          },

          {
            type: "list",
            items: [
              "Path aliases",
              "Plugins",
              "Build customization",
              "Environment settings"
            ]
          },

          {
            type: "tip",
            content:
              "Beginners rarely need to modify it."
          }
        ]
      },

      {
        heading: "index.html",

        blocks: [

          {
            type: "paragraph",
            content:
              "Unlike traditional websites, React uses a single HTML file."
          },

          {
            type: "paragraph",
            content:
              "React mounts the application inside:"
          },

          {
            type: "code",
            language: "html",
            content: `<div id="root"></div>`
          },

          {
            type: "paragraph",
            content:
              "Everything you see on the page is rendered inside this root element."
          }
        ]
      },

      {
        heading: "The src Folder",

        blocks: [

          {
            type: "paragraph",
            content:
              "The most important folder in every React application."
          },

          {
            type: "paragraph",
            content:
              "Almost all development happens here."
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `src
  ├── App.jsx
  ├── main.jsx
  ├── components
  ├── pages
  ├── assets
  └── styles`
          },

          {
            type: "cards",
            items: [
              {
                title: "main.jsx",
                description:
                  "The true entry point of the application."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

  ReactDOM.createRoot(
    document.getElementById("root")
  ).render(<App />);`
          },

          {
            type: "paragraph",
            content:
              "This file tells React where to render the application."
          },

          {
            type: "cards",
            items: [
              {
                title: "App.jsx",
                description:
                  "The root component."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Most components eventually connect to App.jsx."
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function App() {
  return
    <h1>
      Hello React
    </h1>;
  }

export default App;`
          },

          {
            type: "paragraph",
            content:
              "Think of App.jsx as the starting point of your UI."
          }

        ]
      },

      {
        heading: "The public Folder",

        blocks: [

          {
            type: "paragraph",
            content:
              "Contains static assets."
          },

          {
            type: "paragraph",
            content:
              "Examples:"
          },

          {
            type: "list",
            items: [
              "Images",
              "Icons",
              "PDFs",
              "Manifest files",
              "Favicons"
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `public
     ├── logo.png
     ├── favicon.ico
     └── resume.pdf`
          },

          {
            type: "paragraph",
            content:
              "Files inside public are served directly by the browser."
          }

        ]
      },

      {
        heading: "Common Folder Types in React Projects",

        blocks: [

          {
            type: "cards",
            items: [
              {
                title: "components",
                description:
                  "Reusable UI pieces."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `components
      ├── Button.jsx
      ├── Navbar.jsx
      ├── Card.jsx
      └── Modal.jsx`
          },

          {
            type: "paragraph",
            content:
              "Components should ideally:"
          },

          {
            type: "list",
            items: [
              "Be reusable",
              "Be independent",
              "Focus on a single responsibility"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "pages",
                description:
                  "Represents complete screens or routes."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `pages
    ├── Home.jsx
    ├── About.jsx
    ├── Dashboard.jsx
    └── Profile.jsx`
          },

          {
            type: "paragraph",
            content:
              "A page typically combines multiple components together."
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "assets",
                description:
                  "Stores static resources."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `assets
    ├── images
    ├── icons
    ├── videos
    └── fonts`
          },

          {
            type: "paragraph",
            content:
              "Keeping assets organized prevents clutter."
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "styles",
                description:
                  "Contains styling files."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `styles
    ├── global.css
    ├── variables.css
    └── theme.css`
          },

          {
            type: "paragraph",
            content:
              "Large projects often centralize styling here."
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "hooks",
                description:
                  "Stores custom React hooks."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `hooks
    ├── useAuth.js
    ├── useTheme.js
    └── useFetch.js`
          },

          {
            type: "paragraph",
            content:
              "Custom hooks allow reusable stateful logic."
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "services",
                description:
                  "Contains API and business logic."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `services
      ├── authService.js
      ├── userService.js
      └── productService.js`
          },

          {
            type: "paragraph",
            content:
              "This keeps network logic separate from UI code."
          },

          {
            type: "divider"
          },

          {
            type: "cards",
            items: [
              {
                title: "utils",
                description:
                  "Utility/helper functions."
              }
            ]
          },

          {
            type: "paragraph",
            content:
              "Example:"
          },

          {
            type: "tree",
            content: `utils
    ├── formatDate.js
    ├── currency.js
    └── validators.js`
          },

          {
            type: "paragraph",
            content:
              "These functions can be reused throughout the application."
          }

        ]
      },

      {
        heading: "Two Popular Organization Strategies",

        blocks: [
          {
            type: "paragraph",
            content:
              "There are two common ways React developers organize project files."
          },

          {
            type: "paragraph",
            content: "Strategy 1: Type-Based Structure"
          },

          {
            type: "paragraph",
            content:
              "Organizes files by their type."
          },

          {
            type: "code",
            language: "plaintext",
            content: `src
  ├── components
  ├── pages
  ├── hooks
  ├── services
  ├── utils
  └── assets`
          },

          {
            type: "paragraph",
            content:
              "Advantages:"
          },

          {
            type: "list",
            items: [
              "Easy to understand",
              "Great for beginners",
              "Common in small projects"
            ]
          },

          {
            type: "paragraph",
            content:
              "Disadvantages:"
          },

          {
            type: "list",
            items: [
              "Becomes harder to manage in large applications"
            ]
          },

          {
            type: "paragraph",
            content: "Strategy 2: Feature-Based Structure"
          },

          {
            type: "paragraph",
            content:
              "Organizes files by feature."
          },

          {
            type: "code",
            language: "plaintext",
            content: `src
  ├── features
  │   ├── auth
  │   │   ├── Login.jsx
  │   │   ├── Register.jsx
  │   │   └── authService.js
  │   │
  │   ├── products
  │   │   ├── ProductList.jsx
  │   │   ├── ProductCard.jsx
  │   │   └── productService.js
  │   │
  │   └── cart
  │       ├── Cart.jsx
  │       └── cartService.js`
          },

          {
            type: "paragraph",
            content:
              "Advantages:"
          },

          {
            type: "list",
            items: [
              "Scales extremely well",
              "Easier for teams",
              "Better maintenance"
            ]
          },

          {
            type: "note",
            content:
              "Most modern enterprise applications use feature-based architecture."
          }
        ]
      },

      {
        heading: "Recommended Structure for Beginners",

        blocks: [
          {
            type: "paragraph",
            content:
              "A practical structure:"
          },

          {
            type: "code",
            language: "plaintext",
            content: `src
  ├── assets
  ├── components
  ├── pages
  ├── hooks
  ├── services
  ├── utils
  ├── styles
  ├── App.jsx
  └── main.jsx`
          },

          {
            type: "paragraph",
            content:
              "Simple enough to learn."
          },

          {
            type: "paragraph",
            content:
              "Flexible enough to scale."
          }
        ]
      },

      {
        heading: "Recommended Structure for Medium Projects",

        blocks: [
          {
            type: "code",
            language: "plaintext",
            content: `src
  ├── assets
  ├── components
  ├── layouts
  ├── pages
  ├── hooks
  ├── services
  ├── context
  ├── utils
  ├── styles
  └── routes`
          },

          {
            type: "paragraph",
            content:
              "Suitable for:"
          },

          {
            type: "list",
            items: [
              "Dashboards",
              "SaaS products",
              "Learning platforms"
            ]
          }
        ]
      },

      {
        heading: "Recommended Structure for Large Applications",

        blocks: [
          {
            type: "code",
            language: "plaintext",
            content: `src
  ├── features
  ├── shared
  ├── services
  ├── hooks
  ├── routes
  ├── store
  ├── assets
  └── utils`
          },

          {
            type: "paragraph",
            content:
              "This structure is commonly found in:"
          },

          {
            type: "list",
            items: [
              "Enterprise software",
              "Banking applications",
              "E-commerce platforms",
              "Social networks"
            ]
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",

        blocks: [
          {
            type: "paragraph",
            content: "Mistake 1: Keeping Everything in src"
          },

          {
            type: "paragraph",
            content:
              "Bad:"
          },

          {
            type: "code",
            language: "jsx",
            content: `src
  ├── Home.jsx
  ├── Login.jsx
  ├── Navbar.jsx
  ├── Button.jsx
  ├── Product.jsx
  ├── Cart.jsx`
          },

          {
            type: "paragraph",
            content:
              "This becomes messy quickly."
          },

          {
            type: "paragraph",
            content: "Mistake 2: Creating Too Many Folders Too Early"
          },

          {
            type: "paragraph",
            content:
              "Some beginners create:"
          },

          {
            type: "code",
            language: "jsx",
            content: `src
  ├── atoms
  ├── molecules
  ├── organisms
  ├── templates
  ├── providers
  ├── wrappers
  ├── containers`
          },

          {
            type: "paragraph",
            content:
              "before the project even has 10 components."
          },

          {
            type: "paragraph",
            content:
              "Start simple."
          },

          {
            type: "paragraph",
            content:
              "Scale when necessary."
          },

          {
            type: "paragraph",
            content: "Mistake 3: Mixing API Logic with Components"
          },

          {
            type: "paragraph",
            content:
              "Bad:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function Product() {
  // API request here
}`
          },

          {
            type: "paragraph",
            content:
              "Better:"
          },

          {
            type: "code",
            language: "plaintext",
            content: `services
      └── productService.js`
          },

          {
            type: "paragraph",
            content:
              "Keep UI and business logic separate."
          },

          {
            type: "paragraph",
            content: "Mistake 4: Duplicate Components"
          },

          {
            type: "paragraph",
            content:
              "Avoid:"
          },

          {
            type: "list",
            items: [
              "Button.jsx",
              "PrimaryButton.jsx",
              "MainButton.jsx"
            ]
          },

          {
            type: "paragraph",
            content:
              "when one reusable Button component can solve the problem."
          }
        ]
      },

      {
        heading: "Professional React Structure Principles",

        blocks: [
          {
            type: "paragraph",
            content:
              "Professional React developers follow these rules:"
          },

          {
            type: "orderedList",
            items: [
              "Group Related Code Together",
              "Separate UI from Logic",
              "Keep Components Small",
              "Create Reusable Building Blocks",
              "Optimize for Growth"
            ]
          },

          {
            type: "paragraph",
            content:
              "Everything related to a feature should stay close together."
          },

          {
            type: "paragraph",
            content:
              "Components should focus on presentation."
          },

          {
            type: "paragraph",
            content:
              "Smaller components are easier to test and maintain."
          },

          {
            type: "paragraph",
            content:
              "Avoid rewriting the same code."
          },

          {
            type: "paragraph",
            content:
              "Structure should support future expansion."
          }
        ]
      },

      {
        heading: "How Big Companies Structure React Projects",

        blocks: [
          {
            type: "paragraph",
            content:
              "Companies such as:"
          },

          {
            type: "list",
            items: [
              "Meta",
              "Netflix",
              "Airbnb",
              "Shopify"
            ]
          },

          {
            type: "paragraph",
            content:
              "typically use feature-based architectures combined with shared component libraries."
          },

          {
            type: "paragraph",
            content:
              "This allows hundreds of developers to work on the same codebase efficiently."
          }
        ]
      },

      {
        heading: "React Project Structure Evolution",

        blocks: [
          {
            type: "paragraph",
            content:
              "Most projects evolve like this:"
          },

          {
            type: "flow",
            steps: [
              "Small Project",
              "→",
              "Type-Based Structure",
              "→",
              "Growing Application",
              "→",
              "Mixed Structure",
              "→",
              "Large Product",
              "→",
              "Feature-Based Structure"
            ]
          },

          {
            type: "paragraph",
            content:
              "You do not need an enterprise structure on day one."
          },

          {
            type: "paragraph",
            content:
              "Structure should evolve with project complexity."
          }
        ]
      },

      {
        heading: "Summary",

        blocks: [
          {
            type: "paragraph",
            content:
              "React project structure is the foundation of maintainable applications."
          },

          {
            type: "paragraph",
            content:
              "A good structure provides:"
          },

          {
            type: "list",
            items: [
              "Better organization",
              "Faster development",
              "Easier debugging",
              "Improved scalability",
              "Better team collaboration"
            ]
          },

          {
            type: "paragraph",
            content:
              "Common folders include:"
          },

          {
            type: "list",
            items: [
              "components",
              "pages",
              "assets",
              "hooks",
              "services",
              "utils",
              "styles"
            ]
          },

          {
            type: "paragraph",
            content:
              "For beginners:"
          },

          {
            type: "list",
            items: [
              "components",
              "pages",
              "services",
              "hooks"
            ]
          },

          {
            type: "paragraph",
            content:
              "is usually the best starting point."
          },

          {
            type: "paragraph",
            content:
              "As applications grow, feature-based architecture becomes increasingly valuable."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [
          {
            type: "note",
            content:
              "💡 Many beginners believe folder structure is only about keeping files organized. In reality, folder structure is an architectural decision. A good structure reduces bugs, improves team productivity, speeds up onboarding, and makes future scaling dramatically easier. The larger the project becomes, the more valuable a well-designed structure becomes."
          }
        ]
      }
  ]
},




/* ========================================
  Sixth topic : React Development Workflow
========================================== */
  "react-development-workflow": {
    title: "React Development Workflow",
    readingTime: "8 min",

    content: [
      {
        heading: "React Development Workflow",

        blocks: [

          {
            type: "paragraph",
            content: "Creating a React application is not just about writing code."
          },

          {
            type: "paragraph",
            content: "Professional React development follows a structured workflow that helps developers build applications efficiently, maintain code quality, reduce bugs, and scale projects as they grow."
          },

          {
            type: "paragraph",
            content: "When working with React, developers continuously move through a cycle of:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Planning",
              "Designing Components",
              "Writing Code",
              "Testing Features",
              "Debugging Issues",
              "Optimizing Performance",
              "Deploying Applications"
            ]
          },

          {
            type: "paragraph",
            content: "Understanding this workflow is just as important as learning React syntax."
          },

          {
            type: "paragraph",
            content: "Many beginners focus only on learning components, hooks, and state management, but professional developers spend much of their time following an organized development process."
          },

          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "What a React development workflow is",
              "How professional React applications are built",
              "The role of components in development",
              "How React developers think before writing code",
              "The React development cycle",
              "Hot Module Replacement (HMR)",
              "Debugging workflows",
              "Testing workflows",
              "Git and version control practices",
              "Common beginner mistakes",
              "Professional development habits used in industry"
            ]
          },

          {
            type: "paragraph",
            content: "By the end of this lesson, you will understand how React applications are built from idea to deployment."
          }

        ]
      },

      {
        heading: "What is a Development Workflow?",

        blocks: [

          {
            type: "paragraph",
            content: "A development workflow is the step-by-step process developers follow when building software."
          },

          {
            type: "paragraph",
            content: "Instead of randomly creating files and writing code, developers follow a structured approach."
          },

          {
            type: "paragraph",
            content: "A typical React workflow looks like:"
          },

          {
            type: "flow",
            steps: [
              "Idea",
              "→",
              "Plan UI",
              "→",
              "Break Into Components",
              "→",
              "Build Components",
              "→",
              "Manage State",
              "→",
              "Connect Data",
              "→",
              "Test Application",
              "→",
              "Optimize Performance",
              "→",
              "Deploy"
            ],
          },

          {
            type: "paragraph",
            content: "This workflow makes large projects easier to manage and maintain."
          }

        ]
      },

      {
        heading: "Why React Development Is Different",

        blocks: [

          {
            type: "paragraph",
            content: "Traditional websites often consist of static pages."
          },

          {
            type: "paragraph",
            content: "React applications are different because they are:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Dynamic",
              "Interactive",
              "Component-driven",
              "Data-driven"
            ]
          },

          {
            type: "paragraph",
            content: "React developers spend less time manipulating HTML manually and more time thinking about:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Components",
              "Data flow",
              "State management",
              "User interactions"
            ]
          },

          {
            type: "paragraph",
            content: "This shift changes the entire development process."
          }

        ]
      },

      {
        heading: "The React Mindset",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most important concepts taught in the official React documentation is:"
          },

          {
            type: "paragraph",
            content: "Think in Components"
          },

          {
            type: "paragraph",
            content: "Before writing code, developers identify the different parts of the user interface."
          },

          {
            type: "paragraph",
            content: "Consider an e-commerce website."
          },

          {
            type: "paragraph",
            content: "Instead of viewing it as one page, React developers see:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Navbar",
              "Search Bar",
              "Product List",
              "Product Card",
              "Shopping Cart",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Each section becomes a component."
          },

          {
            type: "tree",
            content: `Website
    ├── Navbar
    ├── SearchBar
    ├── ProductList
    │   ├── ProductCard
    │   ├── ProductCard
    │   └── ProductCard
    ├── Cart
    └── Footer`
          },

          {
            type: "paragraph",
            content: "This component-based thinking is the foundation of React development."
          }

        ]
      },

      {
        heading: "Step 1: Understand the Requirements",

        blocks: [

          {
            type: "paragraph",
            content: "Before writing code, developers first understand what needs to be built."
          },

          {
            type: "paragraph",
            content: "Questions typically include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "What problem does the application solve?",
              "Who will use it?",
              "What features are required?",
              "What data is needed?",
              "What user actions are possible?"
            ]
          },

          {
            type: "paragraph",
            content: "For example, if building a task manager:"
          },

          {
            type: "paragraph",
            content: "Features might include:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Add tasks",
              "Edit tasks",
              "Delete tasks",
              "Mark tasks complete",
              "Filter tasks"
            ]
          },

          {
            type: "paragraph",
            content: "Understanding requirements prevents wasted development effort later."
          }

        ]
      },

      {
        heading: "Step 2: Design the User Interface",

        blocks: [

          {
            type: "paragraph",
            content: "After understanding requirements, developers design the UI."
          },

          {
            type: "paragraph",
            content: "This may be done using:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Pen and paper",
              "Whiteboards",
              "Figma",
              "Adobe XD",
              "Sketch"
            ]
          },

          {
            type: "paragraph",
            content: "The goal is to visualize the application before coding."
          },

          {
            type: "example",
            style: "unordered",
            items: [
              "Task Manager",
              "Header",
              "Task Input",
              "Task List",
              "Filter Buttons",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "At this stage, developers begin identifying potential React components."
          }

        ]
      },

      {
        heading: "Step 3: Break the UI Into Components",

        blocks: [

          {
            type: "paragraph",
            content: "Once the design exists, developers divide it into reusable components."
          },

          {
            type: "structure",
            items: [
              "TaskManager",
              "├── Header",
              "├── TaskForm",
              "├── TaskList",
              "│   └── TaskItem",
              "├── FilterButtons",
              "└── Footer"
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
              "Reusable code",
              "Easier maintenance",
              "Cleaner architecture",
              "Better scalability"
            ]
          },

          {
            type: "paragraph",
            content: "This step is one of the most important parts of React development."
          }

        ]
      },

      {
        heading: "Step 4: Create the Project",

        blocks: [

          {
            type: "paragraph",
            content: "After planning, developers create the React project."
          },

          {
            type: "paragraph",
            content: "Modern React development typically uses Vite."
          },

          {
            type: "code",
            language: "bash",
            content: `npm create vite@latest`
          },

          {
            type: "paragraph",
            content: "Select:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "JavaScript (or TypeScript)"
            ]
          },

          {
            type: "paragraph",
            content: "Then install dependencies:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm install`
          },

          {
            type: "paragraph",
            content: "Start the development server:"
          },

          {
            type: "code",
            language: "bash",
            content: `npm run dev`
          },

          {
            type: "paragraph",
            content: "The application is now ready for development."
          }

        ]
      },

      {
        heading: "Step 5: Build Static Components First",

        blocks: [

          {
            type: "paragraph",
            content: "Professional React developers often start with static components."
          },

          {
            type: "paragraph",
            content: "Static means:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "No state",
              "No API calls",
              "No user interactions"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function ProductCard() {
  return (
    <div>
      <h2>Product Name</h2>
      <p>$100</p>
    </div>
  );
}`
          },

          {
            type: "paragraph",
            content: "Building static UI first helps developers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Focus on layout",
              "Validate design",
              "Catch UI issues early"
            ]
          }

        ]
      },

      {
        heading: "Step 6: Identify Application State",

        blocks: [

          {
            type: "paragraph",
            content: "After static components exist, developers determine what data changes over time."
          },

          {
            type: "paragraph",
            content: "This changing data is called State."
          },

          {
            type: "example",
            style: "unordered",
            items: [
              "User information",
              "Shopping cart items",
              "Search text",
              "Notifications",
              "Dark mode setting"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },

          {
            type: "paragraph",
            content: "A common beginner mistake is putting state everywhere."
          },

          {
            type: "paragraph",
            content: "Professional developers carefully decide:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "What should be state?",
              "Where should state live?"
            ]
          }

        ]
      },

      {
        heading: "Step 7: Establish Data Flow",

        blocks: [

          {
            type: "paragraph",
            content: "React follows: One-Way Data Flow"
          },

          {
            type: "paragraph",
            content: "Data usually moves:"
          },

          {
            type: "flow",
            steps: [
              "Parent Component",
              "→",
              "Child Component"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "flow",
            steps: [
              "App",
              "→",
              "ProductList",
              "→",
              "ProductCard"
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
              "Predictable behavior",
              "Easier debugging",
              "Cleaner architecture"
            ]
          },

          {
            type: "paragraph",
            content: "Understanding data flow is essential for building scalable React applications."
          }

        ]
      },

      {
        heading: "Step 8: Add User Interactions",

        blocks: [

          {
            type: "paragraph",
            content: "Once UI and state are ready, developers implement user interactions."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Button clicks",
              "Form submissions",
              "Search input",
              "Dropdown selections"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `<button onClick={() => setCount(count + 1)}>
  Increment
</button>`
          },

          {
            type: "paragraph",
            content: "At this stage the application becomes interactive."
          }

        ]
      },

      {
        heading: "Step 9: Connect External Data",

        blocks: [

          {
            type: "paragraph",
            content: "Most real applications use external data."
          },

          {
            type: "paragraph",
            content: "Developers fetch data from APIs."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  fetch("/api/users")
    .then(response => response.json())
    .then(data => setUsers(data));
}, []);`
          },

          {
            type: "paragraph",
            content: "Examples of external data:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Products",
              "User accounts",
              "News articles",
              "Weather information",
              "Messages"
            ]
          },

          {
            type: "paragraph",
            content: "This transforms static applications into dynamic applications."
          }

        ]
      },

      {
        heading: "Step 10: Continuous Development With HMR",

        blocks: [

          {
            type: "paragraph",
            content: "During development, React applications typically use:"
          },

          {
            type: "paragraph",
            content: "Hot Module Replacement (HMR)"
          },

          {
            type: "paragraph",
            content: "Traditional Workflow:"
          },

          {
            type: "flow",
            steps: [
              "Write Code",
              "→",
              "Save File",
              "→",
              "Reload Browser",
              "→",
              "See Changes"
            ]
          },

          {
            type: "paragraph",
            content: "React + Vite Workflow:"
          },

          {
            type: "flow",
            steps: [
              "Write Code",
              "→",
              "Save File",
              "→",
              "HMR Updates Application",
              "→",
              "See Changes Instantly"
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
              "Faster development",
              "Better productivity",
              "Immediate feedback"
            ]
          },

          {
            type: "paragraph",
            content: "HMR is one reason modern frontend development feels significantly smoother."
          }

        ]
      },

      {
        heading: "Step 11: Debugging Workflow",

        blocks: [

          {
            type: "paragraph",
            content: "No application is bug-free."
          },

          {
            type: "paragraph",
            content: "Professional developers constantly debug applications."
          },

          {
            type: "paragraph",
            content: "Common debugging tools include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browser Developer Tools",
              "React Developer Tools",
              "Console Logs",
              "Network Tab"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `console.log(user);`
          },

          {
            type: "paragraph",
            content: "Typical debugging workflow:"
          },

          {
            type: "flow",
            steps: [
              "Identify Bug",
              "→",
              "Reproduce Bug",
              "→",
              "Locate Source",
              "→",
              "Fix Issue",
              "→",
              "Retest Application"
            ]
          },

          {
            type: "paragraph",
            content: "Good debugging skills are often more valuable than memorizing syntax."
          }

        ]
      },

      {
        heading: "Step 12: Refactoring",

        blocks: [

          {
            type: "paragraph",
            content: "As applications grow, code quality becomes important."
          },

          {
            type: "paragraph",
            content: "Refactoring means:"
          },

          {
            type: "highlight",
            content: "Improving code without changing behavior."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Splitting large components",
              "Removing duplicate code",
              "Creating reusable hooks",
              "Improving folder structure"
            ]
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function App() {
  // 500 lines of code
}`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "jsx",
            content: `<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>`
          },

          {
            type: "paragraph",
            content: "Refactoring keeps applications maintainable."
          }

        ]
      },

      {
        heading: "Step 13: Testing",

        blocks: [

          {
            type: "paragraph",
            content: "Professional React applications are tested before deployment."
          },

          {
            type: "paragraph",
            content: "Types of testing:"
          },

          {
          type: "cards",
            items: [
              {
                title: "Unit Testing",
                description:
                  "Tests individual functions or components."
              },
              {
                title: "Integration Testing",
                description:
                  "Tests multiple components working together."
              },
              {
                title: "End-to-End Testing",
                description:
                  "Tests the entire user workflow."
              },
            ]
          },

          {
            type: "paragraph",
            content: "Popular Tools"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Jest",
              "React Testing Library",
              "Cypress",
              "Playwright"
            ]
          },

          {
            type: "paragraph",
            content: "Testing reduces production bugs significantly."
          },

          /*{
            type: "code",
            language: "javascript",
            content: `function App() {
  // 500 lines of code
}`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "jsx",
            content: `<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>`
          },

          {
            type: "paragraph",
            content: "Refactoring keeps applications maintainable."
          }*/

        ]
      },

      {
        heading: "Step 14: Version Control With Git",

        blocks: [
          {
            type: "paragraph",
            content: "React developers rarely work without Git."
          },

          {
            type: "paragraph",
            content: "Common workflow:"
          },

          {
            type: "paragraph",
            content: "Initialize repository:"
          },

          {
            type: "code",
            language: "bash",
            content: `git init`
          },

          {
            type: "paragraph",
            content: "Track Changes"
          },

          {
            type: "code",
            language: "bash",
            content: `git add .
git commit -m "Initial commit"`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Backup Code",
              "Track History",
              "Collaborate with teams",
              "Revert mistakes"
            ]
          },

          {
            type: "paragraph",
            content: "Git is considered an essential skill for React developers."
          }
        ]
      },

      {
        heading: "Step 15: Deployment",

        blocks: [
          {
            type: "paragraph",
            content: "After development and testing, the application is deployed."
          },

          {
            type: "paragraph",
            content: "Common platforms include:"
          },

          {
            type: "example",
            style: "unordered",
            items: [
              "Vercel",
              "Netlify",
              "GitHub Pages",
              "AWS",
              "Azure"
            ]
          },

          {
            type: "paragraph",
            content: "Deployment Workflow "
          },

          {
            type: "flow",
            steps: [
              "Build Application",
              "→",
              "Upload Files",
              "→",
              "Configue Hosting",
              "→",
              "Publish Website"
            ]
          },

          {
            type: "paragraph",
            content: "Users can now access the application online."
          },
        ]
      },

      {
        heading: "Common Beginner Workflow Mistakes",

        blocks: [
          {
            type: "faq",
            items: [
            {
              question: "Mistake 1: Writing Code Before Planning",
              answer: "Leads to messy architecture."
            },
            {
              question: "Mistake 2: Creating Huge Components",
              answer: "Large components become difficult to maintain."
            },
            {
              question: "Mistake 3: Ignoring Component Reusability",
              answer: "Causes duplicated code."
            },
            {
              question: "Mistake 4: Poor Folder Organization",
              answer: "Makes projects difficult to scale."
            },
            {
              question: "Mistake 5: Skipping Git",
              answer: "Makes recovery and collaboration difficult."
            },
            {
              question: "Mistake 6: Not Testing Changes",
              answer: "Allows bugs to reach production."
            }
          ]
          },
        ]
      },

      {
        heading: "Professional React Workflow Checklist",

        blocks: [
          {
            type: "paragraph",
            content: "Before considering a feature complete, many React developers ensure:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Requirements understood",
              "UI planned",
              "Components identified",
              "State designed properly",
              "Data flow organized",
              "Feature implemented",
              "Tested successfully",
              "Refactored if necessary",
              "Committed to Git",
              "Ready for deployment"
            ]
          }
        ]
      },

      {
        heading: "Summary",

        blocks: [
          {
            type: "paragraph",
            content: "React development is much more than writing JSX."
          },

          {
            type: "paragraph",
            content: "A professional workflow typically includes:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Planning requirements",
              "Designing the UI",
              "Thinking in components",
              "Creating reusable components",
              "Managing state",
              "Establishing data flow",
              "Connecting APIs",
              "Using HMR for rapid development",
              "Debugging and testing",
              "Version control with Git",
              "Deployment"
            ]
          },

          {
            type: "paragraph",
            content: "Following this workflow helps developers build applications that are easier to maintain, scale, and collaborate on."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [
          {
            type: "note",
            content: "💡 Many beginners believe React development starts with writing code. Professional developers usually spend a significant amount of time planning components, state, and data flow before they write a single line of JSX. The better the planning phase, the faster and cleaner the development phase becomes."
          },
        ]
      },
    ]
  }
};

export default gettingStarted;






































/* New Image adder code for tuto
{
  type: "image",

  src: "/images/react/react-component-tree.png",

  alt: "React Component Tree",

  caption:
    "React applications are built using reusable components."
}

or

{
  type: "image",

  src: "https://example.com/react-dom-diagram.png",

  caption:
    "Relationship between React and the DOM."
}
*/


/*
import reactFlow
from "../../../assets/tutorials/react/react-flow.png";

import componentTree
from "../../../assets/tutorials/react/component-tree.png";

--for single image--

{
  heading: "How React Works",

  paragraphs: [
    "The following diagram shows the basic React workflow."
  ],

  image: reactFlow,

  imageCaption:
    "React Component Rendering Flow"
}

-- for double or more images --
{
  heading: "React Architecture",

  images: [
    {
      src: reactFlow,
      caption: "React Workflow"
    },

    {
      src: componentTree,
      caption: "Component Tree"
    }
  ]
}
*/