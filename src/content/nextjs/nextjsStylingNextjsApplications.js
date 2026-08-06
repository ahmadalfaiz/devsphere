const nextjsStylingNextjsApplications = {

/* ===========================
    First Topic : Global CSS
============================= */
    "nextjs-global-css": {
    title: "Global CSS",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Every modern website has a consistent appearance across its pages. Whether you visit the Home page, About page, Dashboard, or Contact page, you'll notice that the website maintains the same fonts, colors, spacing, button styles, and overall design language."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "GitHub uses the same typography and colors across all pages.",
              "Amazon maintains identical header, footer, and button styling throughout the website.",
              "YouTube keeps the same navigation bar, fonts, and dark/light theme across every page."
            ]
          },
          {
            type: "paragraph",
            content: "Imagine if every page had different fonts, different background colors, different button styles, and different spacing. The application would look inconsistent and unprofessional."
          },
          {
            type: "paragraph",
            content: "This is where Global CSS becomes essential. Global CSS allows you to define styles that apply to your entire Next.js application, providing a consistent design system without repeating the same CSS in every component."
          },
          {
            type: "paragraph",
            content: "Instead of writing the same styles multiple times, you write them once, import them once, and Next.js automatically applies them throughout the application."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Global CSS is",
              "Why it is important",
              "How Global CSS works in Next.js",
              "Creating and importing Global CSS",
              "Global CSS in App Router",
              "Global CSS in Pages Router",
              "CSS Reset",
              "Global typography",
              "CSS Variables",
              "Utility classes",
              "Third-party CSS",
              "Global CSS vs CSS Modules",
              "Best practices",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll confidently create and organize global styles for any Next.js project."
          }
        ]
      },

      {
        heading: "What is Global CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Global CSS is a stylesheet whose rules apply to the entire application instead of a single component. Think of it as the foundation of your website's design."
          },
          {
            type: "paragraph",
            content: "When you define styles inside a Global CSS file, every page and every component can automatically use those styles."
          },
          {
            type: "paragraph",
            content: "For example, suppose you want every page to have a white background, Arial font, dark gray text, blue hyperlinks, and smooth scrolling. Instead of writing these styles in every component, you define them once inside globals.css."
          },
          {
            type: "flow",
            steps: [
              "globals.css", "→",
              "Root Layout", "→",
              "Entire Application"
            ]
          },
          {
            type: "paragraph",
            content: "This saves time and ensures consistency throughout the application."
          }
        ]
      },

      {
        heading: "Why Do We Need Global CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a website with ten pages. Without Global CSS, you would have to write font styles for every single page. The same CSS gets repeated over and over."
          },
          {
            type: "paragraph",
            content: "This leads to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate code",
              "Larger CSS files",
              "Difficult maintenance",
              "Inconsistent UI"
            ]
          },
          {
            type: "paragraph",
            content: "Now imagine using Global CSS. One Font Definition → Entire Website Uses It. Need to change the font? Simply modify one file. Every page updates automatically. This is why almost every production application uses Global CSS."
          }
        ]
      },

      {
        heading: "How Global CSS Works in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike a normal React application, Next.js has specific rules for Global CSS. You cannot import Global CSS inside random components."
          },
          {
            type: "paragraph",
            content: "Instead, Global CSS must be imported only once from the application's root because Next.js builds optimized CSS bundles during compilation. Allowing every component to import Global CSS could create:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate styles",
              "Different loading order",
              "Style conflicts",
              "Hydration mismatches",
              "Larger bundles"
            ]
          },
          {
            type: "paragraph",
            content: "To avoid these problems, Next.js loads Global CSS once before rendering the application."
          },
          {
            type: "flow",
            steps: [
              "Application Starts", "→",
              "Global CSS Loads", "→",
              "Root Layout Loads", "→",
              "Pages Render", "→",
              "Components Render"
            ]
          },
          {
            type: "paragraph",
            content: "Since Global CSS loads first, every page starts with the same visual foundation."
          }
        ]
      },

      {
        heading: "Creating Your First Global CSS File",
        blocks: [
          {
            type: "paragraph",
            content: "When you create a Next.js application, you'll usually find a file named globals.css in your app directory. If it doesn't exist, you can simply create it."
          },
          {
            type: "tree",
            content: `app/
├── globals.css
├── layout.js
└── page.js`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* app/globals.css */

body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
}`
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "body: Targets the HTML <body> element.",
              "margin: 0;: Removes browser default margins.",
              "padding: 0;: Removes default internal spacing.",
              "background-color: #f5f5f5;: Sets the background color for the entire website.",
              "font-family: Arial, sans-serif;: Every text element inherits this font unless overridden."
            ]
          }
        ]
      },

      {
        heading: "Importing Global CSS (App Router)",
        blocks: [
          {
            type: "paragraph",
            content: "In the App Router, Global CSS is imported inside the root layout."
          },
          {
            type: "code",
            language: "javascript",
            content: `import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}`
          },
          {
            type: "paragraph",
            content: "The important line is: import \"./globals.css\";. This tells Next.js to load this stylesheet before rendering the application. Once imported here, every page automatically receives those styles. You don't need to import globals.css again anywhere else."
          }
        ]
      },

      {
        heading: "Let's See It in Action",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your globals.css contains:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    background: #eef4ff;
    font-family: Arial, sans-serif;
}

h1 {
    color: royalblue;
}

p {
    font-size: 18px;
}`
          },
          {
            type: "paragraph",
            content: "Now create a page:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Home() {
    return (
        <>
            <h1>Welcome to DevSphere</h1>

            <p>
                Learning Next.js is fun.
            </p>
        </>
    );
}`
          },
          {
            type: "paragraph",
            content: "The page component contains no CSS at all, yet it is fully styled because the styles came from globals.css."
          }
        ]
      },

      {
        heading: "Importing Global CSS (Pages Router)",
        blocks: [
          {
            type: "paragraph",
            content: "Projects using the Pages Router follow a slightly different structure. Global CSS is imported inside _app.js:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}`
          },
          {
            type: "paragraph",
            content: "The custom App component wraps every page, so importing Global CSS here automatically applies it to the entire application."
          }
        ]
      },

      {
        heading: "Why Only One Import?",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js enforces a simple rule: Import Global CSS exactly once from the application's root. This makes style loading predictable, efficient, and easier to maintain, avoiding:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate CSS imports",
              "Increased bundle size",
              "Unpredictable style loading order",
              "Harder debugging",
              "Possible hydration issues"
            ]
          }
        ]
      },

      {
        heading: "Understanding globals.css",
        blocks: [
          {
            type: "paragraph",
            content: "The globals.css file is simply a normal CSS file. There is nothing \"special\" about its syntax. What makes it special is where it is imported."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* app/globals.css */

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

h1 {
    color: royalblue;
}

a {
    color: #2563eb;
    text-decoration: none;
}`
          },
          {
            type: "paragraph",
            content: "After importing this file in the root layout:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import "./globals.css";`
          },
          {
            type: "paragraph",
            content: "Every page automatically gets these styles. You don't need to import it again."
          }
        ]
      },

      {
        heading: "Styling HTML Elements Globally",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Global CSS is styling HTML elements only once. Instead of styling every heading separately, you can simply write:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 40px;
    color: #1e293b;
}

h2 {
    font-size: 32px;
}

p {
    line-height: 1.7;
    color: #444;
}

img {
    max-width: 100%;
}

button {
    cursor: pointer;
}`
          },
          {
            type: "paragraph",
            content: "Now every <h1>, <h2>, <p>, <img>, and <button> automatically follows these rules. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Home() {
    return (
        <>
            <h1>DevSphere</h1>

            <p>
                Learn modern web development.
            </p>

            <button>Start Learning</button>
        </>
    );
}`
          },
          {
            type: "paragraph",
            content: "Without writing any CSS in this component, everything already looks consistent."
          }
        ]
      },

      {
        heading: "CSS Reset",
        blocks: [
          {
            type: "paragraph",
            content: "Every browser ships with its own default styles. For example, Chrome gives headings one margin, Firefox gives another, and Safari behaves differently again. This causes websites to look slightly different across browsers. Professional developers solve this by using a CSS Reset."
          },
          {
            type: "code",
            language: "css",
            content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`
          },
          {
            type: "paragraph",
            content: "Let's understand it:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "* (Universal Selector): Selects every element.",
              "margin: 0: Removes browser default margins.",
              "padding: 0: Removes default internal spacing.",
              "box-sizing: border-box: This property is extremely important."
            ]
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 300px;
    padding: 20px;
}`
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Without border-box: Actual width becomes 300 + 20 + 20 = 340px.",
              "With box-sizing: border-box: Actual width remains 300px."
            ]
          },
          {
            type: "paragraph",
            content: "This makes layouts much easier to predict. That is why almost every modern project starts with the universal border-box rule."
          }
        ]
      },

      {
        heading: "Using CSS Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Hardcoding colors everywhere is a bad practice. Imagine changing 'blue' to 'purple' across dozens of files. Instead, use CSS Variables."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary: #2563eb;
    --secondary: #9333ea;
    --danger: #ef4444;
}`
          },
          {
            type: "paragraph",
            content: "Now use them:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    background: var(--primary);
}

a {
    color: var(--primary);
}

.card {
    border-color: var(--primary);
}`
          },
          {
            type: "paragraph",
            content: "Now changing --primary updates the entire application."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ":root: Refers to the highest-level element of the webpage. Variables declared here are available throughout the application.",
              "var(): means \"Use the value stored inside --primary.\""
            ]
          }
        ]
      },

      {
        heading: "Global Typography and Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of defining fonts repeatedly, place them in Global CSS."
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #333;
}

h1 { font-size: 48px; }
h2 { font-size: 36px; }
h3 { font-size: 28px; }`
          },
          {
            type: "paragraph",
            content: "This creates a consistent typography system. Similarly for links and images:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: #2563eb;
    text-decoration: none;
    transition: color .3s;
}

a:hover {
    color: #1d4ed8;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}`
          }
        ]
      },

      {
        heading: "Utility Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes we need helper classes throughout the application. Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.text-center {
    text-align: center;
}

.mt-20 {
    margin-top: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div className="container">
    <h1 className="text-center">
        DevSphere
    </h1>
</div>`
          },
          {
            type: "paragraph",
            content: "These reusable classes reduce repetitive CSS."
          }
        ]
      },

      {
        heading: "Importing Third-Party CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Many packages include their own CSS files. These imports should be placed in your application's global entry point (such as the root layout) so they're loaded once and available throughout the app."
          },
          {
            type: "code",
            language: "javascript",
            content: `import "bootstrap/dist/css/bootstrap.min.css";
import "prismjs/themes/prism.css";`
          },
          {
            type: "paragraph",
            content: "Avoid importing the same third-party stylesheet inside multiple components."
          }
        ]
      },

      {
        heading: "Global CSS vs CSS Modules",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Global CSS",
            leftItems: [
              "Applies everywhere",
              "button { background: royalblue; }",
              "Every button becomes blue"
            ],
            rightTitle: "CSS Modules",
            rightItems: [
              "Applies only to one component",
              ".button { background: royalblue; }",
              "Only this button is blue"
            ]
          },
          {
            type: "paragraph",
            content: "A simple rule to remember: Global CSS defines your application's design system, while CSS Modules define individual components."
          }
        ]
      },

      {
        heading: "Global CSS with Tailwind CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Even Tailwind projects use Global CSS. A typical file looks like:"
          },
          {
            type: "code",
            language: "css",
            content: `@tailwind base;
@tailwind components;
@tailwind utilities;`
          },
          {
            type: "paragraph",
            content: "Developers also place CSS variables, Font definitions, Theme colors, Utility classes, and Animations inside the same global stylesheet."
          }
        ]
      },

      {
        heading: "Creating a Dark Theme",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Variables make theming extremely simple."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --bg: white;
    --text: black;
}

.dark {
    --bg: #121212;
    --text: white;
}

body {
    background: var(--bg);
    color: var(--text);
}`
          },
          {
            type: "paragraph",
            content: "When the dark class is applied, every page updates automatically."
          }
        ]
      },

      {
        heading: "Organizing Global Styles in Large Projects",
        blocks: [
          {
            type: "paragraph",
            content: "As applications grow, keeping everything inside one globals.css file becomes difficult. A scalable structure is:"
          },
          {
            type: "tree",
            content: `styles/
├── globals.css
├── reset.css
├── variables.css
├── typography.css
├── animations.css
├── utilities.css
└── themes.css`
          },
          {
            type: "paragraph",
            content: "This keeps styles modular while still maintaining a single global entry point."
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
              "Importing Global CSS Inside Components: Should only be imported from the application's root.",
              "Writing Everything in Global CSS: Avoid placing component-specific styles inside Global CSS.",
              "Overusing !important: Use it sparingly; improve selector specificity instead.",
              "Hardcoding Colors Everywhere: Use CSS variables instead.",
              "Ignoring Responsive Design: Global styles should account for different screen sizes."
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
              "Import Global CSS only once.",
              "Keep it focused on application-wide styles.",
              "Use CSS variables for colors, spacing, and typography.",
              "Create a CSS reset before adding custom styles.",
              "Prefer CSS Modules for component-specific styling.",
              "Organize styles into logical sections.",
              "Use meaningful class names.",
              "Remove unused CSS regularly."
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that Global CSS is used to define styles shared across an entire Next.js application. You explored how to create and import globals.css, the differences between the App Router and Pages Router approaches, how CSS resets, typography, variables, utility classes, and third-party styles fit into global styling, and why CSS Modules should be used for component-specific styles."
          },
          {
            type: "paragraph",
            content: "By keeping Global CSS focused on shared design foundations and combining it with scoped component styles, you can build Next.js applications that are consistent, maintainable, scalable, and easy to evolve as they grow."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most beginners treat globals.css as a dumping ground where every new style gets added. Professional developers don't. Instead, they think of Global CSS as the foundation of a design system. A good mental model is: Design Tokens (Colors, Fonts, Spacing) → Base Styles (html, body, headings) → Utilities (container, text-center) → Reusable Components (CSS Modules) → Pages. Notice that pages and components build upon the global foundation—they don't replace it. If you find yourself adding styles for a single button, card, or modal to globals.css, it's usually a sign those styles belong in a CSS Module instead. The best Next.js projects keep Global CSS small, intentional, and reusable, making it the single source of truth for the application's visual identity."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : CSS Modules
============================= */
    "nextjs-css-modules": {
    title: "CSS Modules",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As your Next.js application grows, so does the number of components. A simple project might contain only a few components, but a real-world application can easily have hundreds or even thousands of them."
          },
          {
            type: "paragraph",
            content: "Imagine you're building an e-commerce website with components like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navbar",
              "Footer",
              "Product Card",
              "Shopping Cart",
              "Login Form",
              "Dashboard",
              "Sidebar",
              "User Profile",
              "Search Bar",
              "Checkout Form"
            ]
          },
          {
            type: "paragraph",
            content: "Suppose every component uses a class named .button. Another component also defines .button. Which one should the browser use? The answer depends on CSS loading order, making your application unpredictable and difficult to maintain. This problem is known as CSS Namespace Collision."
          },
          {
            type: "paragraph",
            content: "To solve this issue, Next.js provides CSS Modules, a feature that scopes CSS locally to individual components. Instead of affecting the entire application like Global CSS, CSS Modules ensure that styles belong only to the component that imports them."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What CSS Modules are",
              "Why CSS Modules are needed",
              "How CSS Modules work internally",
              "Creating CSS Modules",
              "Importing CSS Modules",
              "Using CSS Modules in components",
              "Dynamic class names",
              "Multiple class names",
              "CSS Modules with React state",
              "CSS Modules with images",
              "CSS Modules with Sass",
              "Composition and reuse",
              "Global styles inside CSS Modules",
              "CSS Modules vs Global CSS",
              "Performance benefits",
              "Common mistakes",
              "Best practices"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand why CSS Modules are one of the most popular styling solutions in modern Next.js applications."
          }
        ]
      },

      {
        heading: "What are CSS Modules?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Modules are regular CSS files whose class names are locally scoped by default. Unlike Global CSS, where every class is available everywhere, CSS Modules keep styles isolated to the component that imports them."
          },
          {
            type: "paragraph",
            content: "Instead of Entire Website → Uses Same CSS Classes, CSS Modules work like:"
          },
          {
            type: "flow",
            steps: [
              "Component A", "→",
              "Own CSS", "→",
              "Component B", "→",
              "Own CSS", "→",
              "Component C", "→",
              "Own CSS"
            ]
          },
          {
            type: "paragraph",
            content: "Each component has its own private stylesheet."
          }
        ]
      },

      {
        heading: "Why Do We Need CSS Modules?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building two different buttons. Product Button (.button { background: blue; }) and Admin Button (.button { background: red; }). With normal CSS, both components use .button. Since CSS is global, the browser cannot distinguish between them. Eventually one style overrides the other. Result: Product Button → Unexpectedly becomes Red. This is called a style collision. CSS Modules completely eliminate this problem."
          }
        ]
      },

      {
        heading: "How CSS Modules Solve the Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you create Button.module.css (.button { background: royalblue; }). Another component contains Card.module.css (.button { background: green; })."
          },
          {
            type: "paragraph",
            content: "Although both files contain .button, Next.js automatically transforms them into something similar to Button_button__x72ad and Card_button__k91ab."
          },
          {
            type: "paragraph",
            content: "Notice that both generated class names are different. Therefore, no collision occurs. This automatic class name generation is the biggest advantage of CSS Modules."
          }
        ]
      },

      {
        heading: "How CSS Modules Work Internally",
        blocks: [
          {
            type: "paragraph",
            content: "When Next.js builds your application, it processes every .module.css file."
          },
          {
            type: "flow",
            steps: [
              "Original CSS", "→",
              "Compiler", "→",
              "Generated CSS", "→",
              "Component receives styles.button", "→",
              "Browser renders"
            ]
          },
          {
            type: "paragraph",
            content: "Everything happens automatically. You never need to create unique class names yourself."
          }
        ]
      },

      {
        heading: "Creating Your First CSS Module",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we have this project structure:"
          },
          {
            type: "tree",
            content: `app/
components/
├── Button.jsx
└── Button.module.css
layout.js
page.js`
          },
          {
            type: "paragraph",
            content: "Create Button.module.css. The .module.css extension tells Next.js: \"Treat this file as a CSS Module.\""
          }
        ]
      },

      {
        heading: "Writing Your First CSS Module",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.button {
    background: royalblue;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
}`
          },
          {
            type: "paragraph",
            content: "This looks like ordinary CSS. There is no special syntax. The magic happens during compilation."
          }
        ]
      },

      {
        heading: "Importing CSS Modules",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike Global CSS, CSS Modules are imported directly inside components."
          },
          {
            type: "code",
            language: "javascript",
            content: `import styles from "./Button.module.css";`
          },
          {
            type: "paragraph",
            content: "Let's understand this: styles is simply an object. It contains all your class names. Example: styles → button → button__82dhj."
          }
        ]
      },

      {
        heading: "Using CSS Modules",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import styles from "./Button.module.css";

export default function Button() {
    return (
        <button className={styles.button}>
            Buy Now
        </button>
    );
}`
          },
          {
            type: "paragraph",
            content: "Notice there is no string like className=\"button\". Instead, we write className={styles.button}."
          }
        ]
      },

      {
        heading: "Understanding styles.button",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners find this confusing. Suppose .card { } becomes styles.card. Similarly, .title { } becomes styles.title. Think of it like accessing properties from a JavaScript object."
          },
          {
            type: "code",
            language: "javascript",
            content: `const person = {
    name: "Alex"
};

person.name // "Alex"`
          },
          {
            type: "paragraph",
            content: "Similarly, styles.button accesses the generated class name."
          }
        ]
      },

      {
        heading: "Styling Multiple Elements",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.container {
    padding: 30px;
}

.title {
    font-size: 40px;
}

.description {
    color: gray;
}`
          },
          {
            type: "code",
            language: "jsx",
            content: `import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Learn Next.js
            </h1>

            <p className={styles.description}>
                Build production-ready web applications.
            </p>
        </section>
    );
}`
          },
          {
            type: "paragraph",
            content: "Each class remains completely isolated from the rest of the application."
          }
        ]
      },

      {
        heading: "Using Multiple Classes",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.button { padding: 12px; }
.primary { background: royalblue; }
.rounded { border-radius: 20px; }`
          },
          {
            type: "code",
            language: "jsx",
            content: `<button
    className={\`\${styles.button} \${styles.primary} \${styles.rounded}\`}
>
    Save
</button>`
          }
        ]
      },

      {
        heading: "Conditional Classes",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `<button
    className={
        isActive
            ? styles.active
            : styles.inactive
    }
>
    Status
</button>`
          }
        ]
      },

      {
        heading: "CSS Modules with React State",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `const [dark, setDark] = useState(false);

<div
    className={
        dark
        ? styles.dark
        : styles.light
    }
>`
          },
          {
            type: "paragraph",
            content: "This makes dynamic styling clean and predictable."
          }
        ]
      },

      {
        heading: "Pseudo Classes and Elements",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.button:hover { background: navy; }
.button:focus { outline: none; }

.title::after { content: ""; }`
          },
          {
            type: "paragraph",
            content: "Everything works exactly like normal CSS."
          }
        ]
      },

      {
        heading: "Composition and Reuse",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Modules intentionally encourage component encapsulation, while shared foundations should live in your global styles or design system."
          }
        ]
      },

      {
        heading: "Global Styles Inside CSS Modules",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you need a global selector. CSS Modules support the :global() syntax. Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:global(body) {
    overflow-x: hidden;
}`
          },
          {
            type: "paragraph",
            content: "Use this sparingly, as it bypasses local scoping."
          }
        ]
      },

      {
        heading: "CSS Modules vs Global CSS",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Global CSS", "CSS Modules"],
            rows: [
              ["Scope", "Entire application", "One component"],
              ["Usage", "Imported once", "Imported where needed"],
              ["Classes", "Shared styles", "Scoped styles"],
              ["Best For", "Foundation, Typography, Reset", "Individual components"]
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
              "Create one CSS Module per component.",
              "Keep class names descriptive.",
              "Use CSS variables for shared values.",
              "Keep global styles inside globals.css.",
              "Avoid excessive nesting.",
              "Prefer component encapsulation.",
              "Use conditional classes instead of inline styles where possible.",
              "Group related styles together."
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that CSS Modules provide locally scoped styling for components in Next.js, preventing class name collisions and making applications easier to maintain. You explored how to create and import CSS Modules, apply styles to components, combine and conditionally apply classes, use pseudo-classes, animations, images, Sass Modules, and selectively opt into global selectors."
          },
          {
            type: "paragraph",
            content: "By using Global CSS for shared design foundations and CSS Modules for component-specific styling, you can build Next.js applications that are scalable, maintainable, reusable, and free from the styling conflicts common in traditional global CSS approaches."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 CSS Modules are about component ownership, not just scoped CSS. Every React component should own its structure, behavior, and styling. The component, its styles, and its tests live together. This makes the component portable—you can move the entire folder to another project with minimal changes. This approach, often called component colocation, is one reason CSS Modules remain popular even alongside solutions like Tailwind CSS or CSS-in-JS. They naturally encourage self-contained, reusable components and cleaner project organization."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Sass
============================= */
    "nextjs-sass": {
    title: "Sass",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As web applications grow larger, writing plain CSS becomes increasingly difficult. Repeating colors, font sizes, spacing values, nested selectors, media queries, and maintaining thousands of lines of CSS can quickly become overwhelming."
          },
          {
            type: "paragraph",
            content: "Consider the following example:"
          },
          {
            type: "code",
            language: "css",
            content: `.button {
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
}

.card {
    border: 2px solid #2563eb;
}

.link {
    color: #2563eb;
}`
          },
          {
            type: "paragraph",
            content: "Notice that the same color (#2563eb) is repeated multiple times. Now imagine this color is used in 500 different files. If your designer decides to change the primary color, you'll have to manually update every occurrence."
          },
          {
            type: "paragraph",
            content: "This is where Sass becomes extremely useful. Sass extends CSS with powerful programming-like features such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Variables",
              "Nesting",
              "Mixins",
              "Functions",
              "Partials",
              "Modules",
              "Loops",
              "Conditions",
              "Mathematical operations"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js provides built-in support for Sass, making it easy to use these features without any additional configuration beyond installing the Sass package."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Sass is",
              "Why Sass exists",
              "Installing Sass",
              "SCSS vs Sass syntax",
              "Creating Sass files",
              "Global Sass",
              "Sass Modules",
              "Variables",
              "Nesting",
              "Mixins",
              "Functions",
              "Placeholders",
              "Inheritance",
              "Partials",
              "The modern @use and @forward system",
              "Sass with CSS Modules",
              "sassOptions configuration",
              "Best practices",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand how professional developers organize large-scale stylesheets using Sass in Next.js."
          }
        ]
      },

      {
        heading: "What is Sass?",
        blocks: [
          {
            type: "paragraph",
            content: "Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds programming capabilities to CSS. You write Sass code, and it is compiled into standard CSS that browsers understand."
          },
          {
            type: "flow",
            steps: [
              "Sass", "→",
              "Compiler", "→",
              "CSS", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Browsers cannot read Sass directly. They only understand CSS."
          }
        ]
      },

      {
        heading: "Why Was Sass Created?",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional CSS is simple but repetitive. With Sass, you use variables instead of repeating values."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;

.button {
    background: $primary;
}

.card {
    border-color: $primary;
}

.link {
    color: $primary;
}`
          },
          {
            type: "paragraph",
            content: "Now changing one variable updates every component. This is one of the biggest advantages of Sass."
          }
        ]
      },

      {
        heading: "Sass vs CSS",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "CSS", "Sass"],
            rows: [
              ["Standard language", "✅ Yes", "❌ No"],
              ["Variables", "❌ No", "✅ Yes"],
              ["Mixins", "❌ No", "✅ Yes"],
              ["Nesting", "Limited", "Full"],
              ["Functions", "❌ No", "✅ Yes"],
              ["Reuse", "Manual", "Easy"]
            ]
          },
          {
            type: "paragraph",
            content: "Remember: Every valid CSS file is also valid SCSS. This means you can gradually migrate from CSS to Sass."
          }
        ]
      },

      {
        heading: "SCSS vs Indented Sass Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "SCSS (Most Popular): Uses braces and semicolons (.scss extension). Indented Sass Syntax: No braces, no semicolons (.sass extension). Almost every modern Next.js project uses SCSS."
          }
        ]
      },

      {
        heading: "Installing Sass",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js has built-in support for Sass, but the Sass compiler must be installed."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install sass`
          },
          {
            type: "paragraph",
            content: "After installation, Next.js automatically detects .scss and .sass files. No additional plugins are required."
          },
          {
            type: "note",
            content: "The old next-sass package is obsolete. Modern Next.js has native Sass support, so simply installing the sass package is enough."
          }
        ]
      },

      {
        heading: "Project Structure",
        blocks: [
          {
            type: "tree",
            content: `app/
├── globals.scss
├── page.jsx
├── layout.jsx
└── components/
      ├── Button.jsx
      └── Button.module.scss`
          },
          {
            type: "paragraph",
            content: "Notice .module.scss. This creates a Sass Module, combining the benefits of Sass and CSS Modules."
          }
        ]
      },

      {
        heading: "Using Global Sass",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of globals.css, you can create globals.scss. Import it inside app/layout.jsx:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import "./globals.scss";`
          },
          {
            type: "paragraph",
            content: "Everything inside globals.scss becomes available globally."
          }
        ]
      },

      {
        heading: "Your First SCSS File",
        blocks: [
          {
            type: "code",
            language: "scss",
            content: `.button {
    background: royalblue;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
}`
          },
          {
            type: "paragraph",
            content: "Import it like a standard CSS Module:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import styles from "./Button.module.scss";

export default function Button() {
    return (
        <button className={styles.button}>
            Save
        </button>
    );
}`
          }
        ]
      },

      {
        heading: "Variables",
        blocks: [
          {
            type: "code",
            language: "scss",
            content: `$primary: royalblue;
$text: white;

.button {
    background: $primary;
    color: $text;
}`
          },
          {
            type: "paragraph",
            content: "Variables are commonly used for: Colors, Fonts, Border radius, Shadows, Breakpoints, Spacing, Animation durations."
          }
        ]
      },

      {
        heading: "Nesting",
        blocks: [
          {
            type: "code",
            language: "scss",
            content: `.card {

    h2 {
        font-size: 32px;
    }

    p {
        color: gray;
    }

    button {
        background: royalblue;
    }

}`
          },
          {
            type: "paragraph",
            content: "This mirrors the HTML structure, making styles easier to read."
          }
        ]
      },

      {
        heading: "Parent Selector (&)",
        blocks: [
          {
            type: "paragraph",
            content: "The & symbol refers to the current selector."
          },
          {
            type: "code",
            language: "scss",
            content: `.button {
    background: royalblue;

    &:hover {
        background: navy;
    }
}`
          }
        ]
      },

      {
        heading: "Mixins",
        blocks: [
          {
            type: "paragraph",
            content: "Mixins let you reuse blocks of styles."
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero {
    @include flexCenter;
}`
          }
        ]
      },

      {
        heading: "Functions",
        blocks: [
          {
            type: "code",
            language: "scss",
            content: `@function double($value) {
    @return $value * 2;
}

.box {
    padding: double(12px);
}`
          },
          {
            type: "paragraph",
            content: "Functions are useful for consistent sizing and design systems."
          }
        ]
      },

      {
        heading: "Partials",
        blocks: [
          {
            type: "paragraph",
            content: "Files beginning with _ are called partials. They are meant to be imported into other Sass files rather than compiled on their own."
          },
          {
            type: "tree",
            content: `styles/
├── _variables.scss
├── _mixins.scss
└── globals.scss`
          }
        ]
      },

      {
        heading: "The Modern @use Rule",
        blocks: [
          {
            type: "paragraph",
            content: "Older Sass projects commonly used @import, but it is deprecated. The recommended approach is @use. This namespaces variables, preventing naming conflicts."
          },
          {
            type: "code",
            language: "scss",
            content: `@use "./variables";

.button {
    color: variables.$primary;
}`
          }
        ]
      },

      {
        heading: "Mathematical Operations",
        blocks: [
          {
            type: "code",
            language: "scss",
            content: `$spacing: 8px;

.card {
    padding: $spacing * 3;
}`
          }
        ]
      },

      {
        heading: "Configuring sassOptions",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js allows you to customize Sass through next.config.js."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default {
    sassOptions: {
        additionalData: \`$brandColor: royalblue;\`,
    },
};`
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
              "Forgetting to install Sass: Install with 'npm install sass'.",
              "Using Deprecated @import: Prefer @use and @forward.",
              "Overusing Nesting: Avoid deeply nested structures (limit to 2-3 levels).",
              "Using Global SCSS for Everything: Keep component styles in .module.scss."
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
              "Prefer SCSS syntax over the indented Sass syntax.",
              "Use @use and @forward instead of @import.",
              "Organize variables, mixins, and functions into separate partials.",
              "Combine Sass Modules with CSS Modules for component-based styling.",
              "Keep global styles minimal.",
              "Use meaningful variable names."
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that Sass is a powerful CSS preprocessor that extends standard CSS with features such as variables, nesting, mixins, functions, placeholders, mathematical operations, partials, and the modern @use/@forward module system. You also learned how to install Sass in Next.js, create global and module-based SCSS files, configure sassOptions, and combine Sass with CSS Modules for scalable component styling."
          },
          {
            type: "paragraph",
            content: "By organizing styles into reusable modules and leveraging Sass's advanced features, you can build Next.js applications that are cleaner, easier to maintain, and better suited for large, production-ready projects."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Sass is a design system tool, not just a CSS shortcut. Professional developers use Sass to make their entire design system consistent. Every component should reference design tokens (colors, fonts, spacing) instead of hard-coded values. If your design team changes the brand color or spacing scale, updating one variable updates the entire application. This is why many enterprise Next.js applications still use Sass—even alongside Tailwind CSS. Sass excels at organizing reusable design logic behind the scenes."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Tailwind CSS
============================= */
    "nextjs-tailwind-css": {
    title: "Tailwind CSS",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications often contain hundreds or even thousands of UI components. Writing traditional CSS for each component can become repetitive, difficult to maintain, and time-consuming. Developers frequently switch between HTML/JSX files and CSS files just to style a single button or card."
          },
          {
            type: "paragraph",
            content: "Consider this simple button using traditional CSS."
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Button() {
    return (
        <button className="button">
            Save
        </button>
    );
}`
          },
          {
            type: "code",
            language: "css",
            content: `.button {
    background: royalblue;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "Although this works perfectly, maintaining separate CSS files for every component in a large project can become cumbersome. This is where Tailwind CSS comes in."
          },
          {
            type: "paragraph",
            content: "Instead of writing custom CSS for every component, Tailwind provides utility classes that allow you to build complete user interfaces directly inside your JSX. The same button becomes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Button() {
    return (
        <button className="bg-blue-600 text-white
                           px-5 py-3 
                           rounded-lg font-bold">
            Save
        </button>
    );
}`
          },
          {
            type: "paragraph",
            content: "No CSS file is required. Everything is written directly in the component. This is one of the reasons why Tailwind CSS has become one of the most popular CSS frameworks in modern web development, especially with React and Next.js."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Tailwind CSS is",
              "Why Tailwind CSS exists",
              "How Tailwind works",
              "Installing Tailwind in Next.js",
              "Project structure",
              "Utility-first styling",
              "Responsive design",
              "Flexbox and Grid",
              "Typography",
              "Colors",
              "Spacing",
              "States (Hover, Focus, Active)",
              "Dark mode",
              "Customizing Tailwind",
              "Using Tailwind with components",
              "Performance optimization",
              "Best practices",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll be able to build beautiful, responsive, and production-ready Next.js interfaces entirely with Tailwind CSS."
          }
        ]
      },

      {
        heading: "What is Tailwind CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind CSS is a utility-first CSS framework. Instead of providing ready-made components like Bootstrap, it provides hundreds of small utility classes. Each class performs exactly one job."
          },
          {
            type: "example",
            items: [
              "<div class=\"p-4\"> adds padding.",
              "<div class=\"bg-blue-500\"> adds a background color.",
              "<div class=\"rounded-lg\"> adds rounded corners."
            ]
          },
          {
            type: "paragraph",
            content: "By combining multiple utilities, you create complete designs."
          }
        ]
      },

      {
        heading: "Why Tailwind CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional CSS often leads to: Duplicate styles, Huge CSS files, Naming conflicts, Unused CSS, Constant switching between JSX and CSS."
          },
          {
            type: "paragraph",
            content: "Tailwind solves these problems by providing reusable utility classes. Instead of creating .card { padding: 20px; border-radius: 12px; background: white; }, you simply write <div className=\"p-5 rounded-xl bg-white\">. Everything remains inside your component."
          }
        ]
      },

      {
        heading: "Utility-First Philosophy",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind follows the Utility-First approach. Instead of creating custom CSS classes, you compose designs using small reusable utilities. Think of LEGO bricks. Each brick is small. But combining hundreds of bricks creates an amazing structure. Tailwind utilities work the same way."
          },
          {
            type: "flow",
            steps: [
              "Padding", "→",
              "Color", "→",
              "Margin", "→",
              "Flexbox", "→",
              "Border Radius", "→",
              "Complete UI"
            ]
          }
        ]
      },

      {
        heading: "Why Tailwind Works So Well with Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js encourages component-based development. Tailwind encourages component-based styling. Both philosophies perfectly complement each other."
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Card() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            ...
        </div>
    );
}`
          },
          {
            type: "paragraph",
            content: "The styling stays close to the component, making it easier to understand and maintain."
          }
        ]
      },

      {
        heading: "Installing Tailwind CSS",
        blocks: [
          {
            type: "paragraph",
            content: "If you're creating a new Next.js project, the recommended setup is to select Tailwind CSS during create-next-app. The project is configured automatically. If Tailwind is not already installed, follow the official installation guide for your Next.js version."
          }
        ]
      },

      {
        heading: "How Tailwind Works",
        blocks: [
          {
            type: "paragraph",
            content: "When Next.js builds your project, Tailwind scans every file."
          },
          {
            type: "flow",
            steps: [
              "JSX Files", "→",
              "Find Tailwind Classes", "→",
              "Generate Only Used CSS", "→",
              "Final Optimized CSS"
            ]
          },
          {
            type: "paragraph",
            content: "If your application never uses bg-red-700, Tailwind never includes it in the production build. This keeps CSS extremely small."
          }
        ]
      },

      {
        heading: "Your First Tailwind Component",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `export default function Button() {
    return (
        <button className="bg-blue-600 text-white
                           px-5 py-3 rounded-lg">
            Click Me
        </button>
    );
}`
          },
          {
            type: "table",
            headers: ["Class", "Purpose"],
            rows: [
              ["bg-blue-600", "Blue background"],
              ["text-white", "White text"],
              ["px-5", "Horizontal padding"],
              ["py-3", "Vertical padding"],
              ["rounded-lg", "Rounded corners"]
            ]
          }
        ]
      },

      {
        heading: "Typography",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind provides utilities for typography."
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1 className="text-5xl font-bold">
<p className="text-gray-600 leading-8">`
          },
          {
            type: "paragraph",
            content: "Useful typography utilities: text-sm, text-lg, text-xl, text-4xl, font-light, font-medium, font-bold, tracking-wide, leading-8, text-center."
          }
        ]
      },

      {
        heading: "Colors",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind provides an extensive color palette. Colors generally range from 50 to 950. Higher numbers represent darker shades."
          },
          {
            type: "example",
            items: [
              "<div className=\"bg-blue-500\">",
              "<div className=\"text-red-600\">",
              "<div className=\"border-green-500\">"
            ]
          }
        ]
      },

      {
        heading: "Spacing",
        blocks: [
          {
            type: "paragraph",
            content: "Padding: className=\"p-6\". Margin: className=\"m-6\". Directional spacing: pt-, pb-, pl-, pr-, mt-, mb-, ml-, mr-. Horizontal: px-6. Vertical: py-6."
          }
        ]
      },

      {
        heading: "Width and Height",
        blocks: [
          {
            type: "example",
            items: [
              "className=\"w-full\"",
              "className=\"h-screen\"",
              "className=\"max-w-5xl\"",
              "className=\"min-h-screen\""
            ]
          }
        ]
      },

      {
        heading: "Flexbox and Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox: <div className=\"flex\">. Center items: <div className=\"flex justify-center items-center\">. Space between: <div className=\"flex justify-between\">. Column: <div className=\"flex flex-col\">."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Grid: Two-column grid: <div className=\"grid grid-cols-2 gap-6\">. Three-column grid: <div className=\"grid grid-cols-3 gap-8\">. Responsive grid: <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-6\">."
          }
        ]
      },

      {
        heading: "Borders and Shadows",
        blocks: [
          {
            type: "paragraph",
            content: "Borders: border, border-2, border-blue-500. Rounded borders: rounded-lg, rounded-full. Shadows: shadow, shadow-md, shadow-xl."
          },
          {
            type: "code",
            language: "jsx",
            content: `<div className="bg-white shadow-lg rounded-xl p-6">`
          }
        ]
      },

      {
        heading: "Hover, Focus, and Active States",
        blocks: [
          {
            type: "paragraph",
            content: "Hover: <button className=\"bg-blue-600 hover:bg-blue-700\">. Focus: <input className=\"focus:outline-none focus:ring-2 focus:ring-blue-500\" />. Active: <button className=\"active:scale-95\">."
          }
        ]
      },

      {
        heading: "Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind makes responsive design extremely easy."
          },
          {
            type: "code",
            language: "jsx",
            content: `<div className="text-sm md:text-lg lg:text-2xl">`
          },
          {
            type: "paragraph",
            content: "Meaning: Small Screens → text-sm, Medium Screens → text-lg, Large Screens → text-2xl."
          }
        ]
      },

      {
        heading: "Dark Mode",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind includes built-in dark mode support."
          },
          {
            type: "code",
            language: "jsx",
            content: `<div className="bg-white dark:bg-gray-900">
<p className="text-black dark:text-white">`
          },
          {
            type: "paragraph",
            content: "Tailwind automatically switches styles when dark mode is active."
          }
        ]
      },

      {
        heading: "Transitions",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `<button
    className="transition duration-300 hover:bg-blue-700"
>`
          },
          {
            type: "paragraph",
            content: "Animations become smooth without writing custom CSS."
          }
        ]
      },

      {
        heading: "Combining Multiple Utilities",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `export default function Card() {
    return (
        <div className="bg-white rounded-xl 
                        shadow-lg p-6 
                        hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3">
                Tailwind CSS
            </h2>

            <p className="text-gray-600">
                Utility-first styling made simple.
            </p>
        </div>
    );
}`
          }
        ]
      },

      {
        heading: "Customizing Tailwind",
        blocks: [
          {
            type: "paragraph",
            content: "Configure brand colors, fonts, spacing, etc., in the Tailwind configuration file. Common customizations include: Brand colors, Font families, Custom spacing, Border radius, Animations, Breakpoints."
          }
        ]
      },

      {
        heading: "Using Tailwind with CSS Modules",
        blocks: [
          {
            type: "paragraph",
            content: "You are not forced to choose one. Many professional projects combine both. Tailwind: Layout, Spacing, Flexbox. CSS Modules: Complex animations, Component-specific styling."
          }
        ]
      },

      {
        heading: "The @apply Directive",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you repeat the same utility classes. The @apply directive extracts common utility combinations."
          },
          {
            type: "code",
            language: "css",
            content: `.btn-primary {
    @apply bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold 
    hover:bg-blue-700;
}`
          },
          {
            type: "paragraph",
            content: "Use @apply sparingly, as it defeats the utility-first philosophy if overused."
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
              "Writing Custom CSS for Everything: Tailwind already provides most utilities.",
              "Using Extremely Long Class Lists: Extract reusable components instead.",
              "Ignoring Responsive Design: Always think mobile first.",
              "Not Grouping Related Components: Create reusable UI components.",
              "Using Arbitrary Values Excessively: Prefer design system values."
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
              "Think in reusable components, not pages.",
              "Keep utility classes readable.",
              "Use responsive prefixes.",
              "Use dark mode consistently.",
              "Prefer design system values.",
              "Extract repeated UI into components.",
              "Use @apply only when necessary.",
              "Combine Tailwind with CSS Modules when appropriate.",
              "Keep your layout mobile-first."
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that Tailwind CSS is a utility-first CSS framework that enables you to build modern user interfaces directly within your JSX using small, reusable utility classes. You explored how Tailwind integrates with Next.js, how it generates only the CSS your application actually uses, and how to style layouts, typography, colors, spacing, Flexbox, Grid, responsive designs, hover and focus states, dark mode, transitions, and reusable components."
          },
          {
            type: "paragraph",
            content: "You also learned about customizing Tailwind, using the @apply directive, combining Tailwind with CSS Modules, common pitfalls, and professional best practices. By following the utility-first approach and building reusable components around a consistent design system, you can create scalable, maintainable, and highly performant Next.js applications with minimal custom CSS."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Tailwind is a design language, not just a CSS framework. Professional teams use it to make their entire design system consistent. Instead of asking 'How do I style this button?', they ask 'Does this button follow our design system?'. Tailwind encourages consistency through a shared vocabulary of spacing, colors, typography, and layout utilities. When combined with reusable React components, every button, card, modal, and form naturally follows the same visual language. This consistency is one of the biggest reasons companies adopt Tailwind for large-scale applications. It improves not only developer productivity but also design quality across the entire project."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : CSS-in-JS
============================= */
    "nextjs-css-in-js": {
    title: "CSS-in-JS",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are built using reusable components. Each component often has its own HTML (JSX), JavaScript logic, state, event handlers, and styles. Traditionally, these concerns are split across multiple files. While this works well, some developers prefer to keep the component and its styling together. Instead of writing CSS in a separate stylesheet, they write styles directly inside JavaScript or TypeScript. This approach is called CSS-in-JS."
          },
          {
            type: "paragraph",
            content: "CSS-in-JS allows developers to create component-scoped styles, dynamic styles based on props or state, themes, animations, and even generate CSS at runtime."
          },
          {
            type: "paragraph",
            content: "Although this example uses React's inline styles, modern CSS-in-JS libraries provide far more powerful features such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Automatic class generation",
              "Dynamic styling",
              "Theme support",
              "Server-side rendering",
              "Critical CSS extraction",
              "Scoped styles",
              "Nested selectors",
              "Pseudo classes",
              "Media queries"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js supports CSS-in-JS through several popular libraries, making it easy to build modern, scalable React applications. In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What CSS-in-JS is",
              "Why it exists",
              "How it works",
              "CSS-in-JS vs traditional CSS",
              "Popular CSS-in-JS libraries",
              "Using inline styles",
              "Styled Components",
              "Emotion",
              "Dynamic styling",
              "Theming",
              "Server Components and Client Components considerations",
              "Performance",
              "Advantages",
              "Disadvantages",
              "Best practices",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand when CSS-in-JS is the right choice for a Next.js application and when another styling approach might be better."
          }
        ]
      },

      {
        heading: "What is CSS-in-JS?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS-in-JS is a styling approach where CSS is written using JavaScript. Instead of writing .button { background: blue; } inside Button.css, you write styles alongside the component."
          },
          {
            type: "code",
            language: "javascript",
            content: `const Button = styled.button\`
    background: blue;
\`;`
          },
          {
            type: "paragraph",
            content: "The styling belongs to the component. This improves encapsulation and portability."
          }
        ]
      },

      {
        heading: "Why Was CSS-in-JS Created?",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications became larger, developers encountered several problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Global CSS conflicts",
              "Difficult naming conventions",
              "Unused CSS",
              "Component styles scattered across files",
              "Dynamic styling became complicated"
            ]
          },
          {
            type: "paragraph",
            content: "CSS-in-JS solves these by making styles part of the component itself. Think of it like this:"
          },
          {
            type: "flow",
            steps: [
              "React Component", "→",
              "UI", "→",
              "Logic", "→",
              "Styles"
            ]
          },
          {
            type: "paragraph",
            content: "Everything lives together."
          }
        ]
      },

      {
        heading: "How CSS-in-JS Works",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike ordinary CSS, CSS-in-JS libraries generate CSS automatically."
          },
          {
            type: "flow",
            steps: [
              "JavaScript Styles", "→",
              "Library", "→",
              "Generated CSS", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of manually writing unique class names, the library creates them. Example: .button may become .button_k82ad automatically. This prevents naming collisions."
          }
        ]
      },

      {
        heading: "CSS-in-JS vs Traditional CSS",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Traditional CSS", "CSS-in-JS"],
            rows: [
              ["Files", "Separate CSS files", "Styles inside JavaScript"],
              ["Scope", "Global by default", "Component scoped"],
              ["Naming", "Manual naming", "Automatic naming"],
              ["Dynamic Styling", "Limited", "Easy"],
              ["Values", "Static values", "Props and state based styles"],
              ["Stylesheet", "External stylesheet", "Generated CSS"]
            ]
          }
        ]
      },

      {
        heading: "CSS-in-JS vs CSS Modules",
        blocks: [
          {
            type: "comparison",
            leftTitle: "CSS Modules",
            leftItems: [
              "CSS files",
              "Build-time compilation",
              "Simple syntax"
            ],
            rightTitle: "CSS-in-JS",
            rightItems: [
              "JavaScript",
              "Usually runtime or hybrid",
              "JavaScript syntax"
            ]
          },
          {
            type: "paragraph",
            content: "Both are excellent. They simply solve styling differently."
          }
        ]
      },

      {
        heading: "Inline Styles (The Simplest CSS-in-JS)",
        blocks: [
          {
            type: "paragraph",
            content: "React supports inline styles."
          },
          {
            type: "code",
            language: "javascript",
            content: `const buttonStyle = {
    backgroundColor: "royalblue",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
};

export default function Button() {
    return (
        <button style={buttonStyle}>
            Save
        </button>
    );
}`
          },
          {
            type: "paragraph",
            content: "Notice backgroundColor instead of background-color. JavaScript uses camelCase property names."
          }
        ]
      },

      {
        heading: "Limitations of Inline Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Inline styles are useful, but they cannot easily handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hover states",
              "Media queries",
              "Pseudo-elements",
              "Keyframes",
              "Complex selectors"
            ]
          },
          {
            type: "paragraph",
            content: "This is why dedicated CSS-in-JS libraries exist."
          }
        ]
      },

      {
        heading: "Popular CSS-in-JS Libraries",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js works well with many CSS-in-JS solutions. Popular libraries include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Styled Components",
              "Emotion",
              "Panda CSS",
              "Stitches",
              "StyleX (Meta)",
              "Tamagui (cross-platform)"
            ]
          }
        ]
      },

      {
        heading: "Styled Components",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import styled from "styled-components";

const Button = styled.button\`
    background: royalblue;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
\`;

export default function Home() {
    return (
        <Button>
            Save
        </Button>
    );
}`
          }
        ]
      },

      {
        heading: "Dynamic Styling",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest strengths of CSS-in-JS is dynamic styling."
          },
          {
            type: "code",
            language: "javascript",
            content: `const Button = styled.button\`
    background: ${(props) =>
        props.primary ? "royalblue" : "gray"};
\`;`
          },
          {
            type: "paragraph",
            content: "Usage: <Button primary>Save</Button> or <Button>Cancel</Button>. The appearance changes automatically based on props."
          }
        ]
      },

      {
        heading: "Styling with React State",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const Button = styled.button\`
    background: ${(props) =>
        props.active ? "green" : "gray"};
\`;

<Button active={isLoggedIn}>
    Login
</Button>`
          },
          {
            type: "paragraph",
            content: "The style updates whenever state changes. No manual CSS switching is required."
          }
        ]
      },

      {
        heading: "Theming",
        blocks: [
          {
            type: "paragraph",
            content: "CSS-in-JS libraries usually include a theme system. Components can consume values from the theme instead of hardcoding colors."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy dark mode",
              "Consistent branding",
              "Centralized design tokens"
            ]
          }
        ]
      },

      {
        heading: "Animations",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import styled, { keyframes } from "styled-components";

const fade = keyframes\`
    from { opacity: 0; }
    to { opacity: 1; }
\`;

const Box = styled.div\`
    animation: \${fade} .5s ease;
\`;`
          }
        ]
      },

      {
        heading: "Server Components and Client Components Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "With the App Router, styling libraries that generate CSS during rendering require proper integration. Some CSS-in-JS libraries need a style registry or provider configured at the root of the application."
          },
          {
            type: "warning",
            content: "Always verify whether the library officially supports React Server Components and the App Router before using it."
          }
        ]
      },

      {
        heading: "Advantages vs Disadvantages",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Component-scoped styling",
              "Automatic class generation",
              "Dynamic styling",
              "Excellent theme support",
              "Co-location of styles and logic"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Additional library dependency",
              "Can increase bundle size",
              "Runtime style generation",
              "Learning curve",
              "May not be ideal for every project"
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
              "Keep styles close to reusable components.",
              "Use themes instead of hardcoded values.",
              "Prefer component composition over duplication.",
              "Reuse shared styled components.",
              "Understand your library's server-rendering support.",
              "Keep styling predictable.",
              "Choose one primary styling approach for the project.",
              "Avoid unnecessary runtime-generated styles for static designs."
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
              "Using Inline Styles Everywhere: Useful, but not a replacement for CSS-in-JS libraries.",
              "Recreating Styled Components Inside Render Functions: Create styled components outside the render function to avoid unnecessary recreation.",
              "Hardcoding Theme Values: Use theme tokens instead.",
              "Mixing Too Many Styling Approaches: Consistency improves maintainability."
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that CSS-in-JS is a styling approach that brings CSS into JavaScript, allowing component-scoped styles, automatic class generation, dynamic styling based on props and state, theming, and powerful integration with React. You explored inline styles, popular libraries such as Styled Components and Emotion, nested selectors, media queries, animations, theming, performance considerations, and how CSS-in-JS works with Next.js App Router, Server Components, and Client Components."
          },
          {
            type: "paragraph",
            content: "You also compared CSS-in-JS with traditional CSS, CSS Modules, and Tailwind CSS, learned when it is the right choice, and reviewed common mistakes and professional best practices. By understanding both its strengths and trade-offs, you can confidently decide when CSS-in-JS is the most appropriate styling solution for your Next.js applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One misconception is that CSS-in-JS is 'the future of CSS'. In reality, it is one styling strategy among many. Professional teams typically choose CSS-in-JS when styles are closely tied to component behavior. For example, a pricing card's appearance might change depending on the user subscription, theme, feature flags, screen size, and interactive state. With CSS-in-JS, these variations can be expressed directly through JavaScript instead of manually switching dozens of CSS classes. For largely static websites, however, CSS Modules or Tailwind CSS often provide a simpler and more performant solution. The most effective engineering decision is not choosing the 'most modern' styling solution—it's choosing the one that best matches the application's needs."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Fonts
============================= */
    "nextjs-fonts": {
    title: "Fonts",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Typography is one of the most important aspects of web design. A good font improves readability, enhances user experience, strengthens branding, and gives your website a professional appearance. On the other hand, poorly chosen or improperly loaded fonts can make a website feel slow, inconsistent, and difficult to read."
          },
 
          {
            type: "paragraph",
            content:
              "In traditional web development, developers usually include fonts using a link tag pointing to Google Fonts or by hosting font files themselves. While this approach works, it has several drawbacks:"
          },
 
          {
            type: "list",
            items: [
              "Additional network requests",
              "Render-blocking resources",
              "Flash of Invisible Text (FOIT)",
              "Flash of Unstyled Text (FOUT)",
              "Privacy concerns with third-party requests",
              "Poor Core Web Vitals scores"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Next.js solves these problems with the next/font module."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of requesting fonts from external servers every time a page loads, Next.js automatically downloads, optimizes, subsets, self-hosts, and serves fonts as part of your application. This significantly improves performance, privacy, and user experience."
          },
 
          {
            type: "paragraph",
            content:
              "This lesson covers everything you need to know about fonts in Next.js, including:"
          },
 
          {
            type: "list",
            items: [
              "Why font optimization matters",
              "The next/font module",
              "Google Fonts",
              "Local Fonts",
              "Variable Fonts",
              "Multiple Font Families",
              "Font Weights",
              "Font Styles",
              "Font Subsets",
              "CSS Variables",
              "Tailwind CSS integration",
              "Performance optimization",
              "Accessibility",
              "Best practices",
              "Common mistakes"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you'll understand not only how to use fonts in Next.js, but also why the framework handles fonts differently from traditional React applications."
          }
 
        ]
      },
 
      {
        heading: "Why Fonts Matter",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Fonts are much more than visual decoration."
          },
 
          {
            type: "paragraph",
            content:
              "Good typography improves:"
          },
 
          {
            type: "list",
            items: [
              "Readability",
              "Accessibility",
              "User engagement",
              "Branding",
              "Professional appearance",
              "Loading performance"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "A font affects how users perceive your website before they even begin reading the content."
          },
 
          {
            type: "paragraph",
            content:
              "Imagine visiting two websites:"
          },
 
          {
            type: "comparison",
            leftTitle: "Website A",
            leftItems: [
              "Default browser font",
              "Uneven spacing",
              "Slow loading custom font"
            ],
 
            rightTitle: "Website B",
            rightItems: [
              "Professional typography",
              "Fast loading",
              "Consistent design"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Users naturally trust the second website more."
          }
 
        ]
      },
 
      {
        heading: "The Problem with Traditional Font Loading",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Normally developers use Google Fonts like this:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<link
    rel="preconnect"
    href=
      "https://fonts.googleapis.com"
/>
 
<link
    href=
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;
      700&display=swap"
    rel="stylesheet"
/>`
          },
 
          {
            type: "paragraph",
            content:
              "Although simple, this has disadvantages:"
          },
 
          {
            type: "list",
            items: [
              "Extra DNS lookup",
              "Additional HTTP requests",
              "Third-party dependency",
              "Slower rendering",
              "Layout shifts",
              "Privacy concerns"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Next.js eliminates these issues."
          }
 
        ]
      },
 
      {
        heading: "What is next/font?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "next/font is Next.js's built-in font optimization system."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of downloading fonts in the browser, Next.js downloads them during the build process and serves them from your own application."
          },
 
          {
            type: "paragraph",
            content:
              "Benefits include:"
          },
 
          {
            type: "list",
            items: [
              "Automatic self-hosting",
              "Better Core Web Vitals",
              "Zero layout shift (when configured correctly)",
              "No external requests",
              "Better privacy",
              "Automatic optimization",
              "Font subsetting",
              "Variable font support"
            ]
          }
 
        ]
      },
 
      {
        heading: "How next/font Works",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The workflow is surprisingly simple."
          },
 
          {
            type: "flow",
            steps: [
              "Google Font",
              "→",
              "Build Time",
              "→",
              "Next.js Downloads Font",
              "→",
              "Optimizes Font",
              "→",
              "Self Hosts Font",
              "→",
              "Browser Loads Font"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Unlike traditional methods, users never need to contact Google's servers."
          }
 
        ]
      },
 
      {
        heading: "Types of Fonts Supported",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Next.js supports two primary font sources."
          },
 
          {
            type: "paragraph",
            content:
              "1. Google Fonts — automatically optimized."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { Inter } from "next/font/google";`
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "2. Local Fonts — useful for company branding, premium fonts, purchased fonts, offline projects, and custom typography."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import localFont from "next/font/local";`
          }
 
        ]
      },
 
      {
        heading: "Using Google Fonts",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Import the font."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { Inter } from "next/font/google";`
          },
 
          {
            type: "paragraph",
            content:
              "Create an instance."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const inter = Inter({
    subsets: ["latin"],
});`
          },
 
          {
            type: "paragraph",
            content:
              "Apply it."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Now the entire application uses the Inter font."
          }
 
        ]
      },
 
      {
        heading: "Understanding Font Configuration",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A font configuration usually looks like this."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const inter = Inter({
 
    subsets: ["latin"],
 
    weight: ["400", "700"],
 
    style: ["normal"],
 
    display: "swap",
 
});`
          },
 
          {
            type: "paragraph",
            content:
              "Each option controls a different aspect of the font."
          }
 
        ]
      },
 
      {
        heading: "Font Subsets",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Fonts contain thousands of characters. English only requires a small portion."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of downloading everything, Next.js lets you specify subsets."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `subsets: ["latin"]`
          },
 
          {
            type: "paragraph",
            content:
              "Other examples:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `subsets: ["latin", "latin-ext"]`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Smaller font files",
              "Faster loading",
              "Better performance"
            ]
          }
 
        ]
      },
 
      {
        heading: "Font Weight",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Different weights create visual hierarchy."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `weight: ["300", "400", "500", "700"]`
          },
 
          {
            type: "paragraph",
            content:
              "Common weights:"
          },
 
          {
            type: "table",
            headers: [
              "Weight",
              "Meaning"
            ],
 
            rows: [
              ["100", "Thin"],
              ["200", "Extra Light"],
              ["300", "Light"],
              ["400", "Regular"],
              ["500", "Medium"],
              ["600", "Semi Bold"],
              ["700", "Bold"],
              ["800", "Extra Bold"],
              ["900", "Black"]
            ]
          }
 
        ]
      },
 
      {
        heading: "Font Style",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "You can load styles too."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `style: ["normal", "italic"]`
          },
 
          {
            type: "paragraph",
            content:
              "Only required styles should be loaded."
          }
 
        ]
      },
 
      {
        heading: "Display Strategy",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `display: "swap"`
          },
 
          {
            type: "paragraph",
            content:
              "Popular values:"
          },
 
          {
            type: "list",
            items: [
              "auto",
              "swap",
              "block",
              "optional",
              "fallback"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Most applications use swap because it minimizes invisible text."
          }
 
        ]
      },
 
      {
        heading: "Variable Fonts",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Modern fonts often come as Variable Fonts."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of separate files for Regular, Medium, Bold, and Black, a single variable font contains all of them."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const inter = Inter({
    subsets: ["latin"],
});`
          },
 
          {
            type: "paragraph",
            content:
              "No need to specify multiple weights if the font supports variable axes."
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Smaller downloads",
              "Flexible typography",
              "Better performance",
              "Smooth font-weight transitions"
            ]
          }
 
        ]
      },
 
      {
        heading: "Using Multiple Google Fonts",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import {
    Inter,
    Roboto
} from "next/font/google";
 
const inter = Inter({
    subsets: ["latin"],
});
 
const roboto = Roboto({
    weight: "700",
    subsets: ["latin"],
});`
          },
 
          {
            type: "paragraph",
            content:
              "Usage:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1 className={roboto.className}>
    DevSphere
</h1>
 
<p className={inter.className}>
    Welcome
</p>`
          }
 
        ]
      },
 
      {
        heading: "Using Local Fonts",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Some projects use custom fonts."
          },
 
          {
            type: "paragraph",
            content:
              "Folder structure:"
          },
 
          {
            type: "tree",
            content: `app/
  fonts/
    MyFont-Regular.woff2`
          },
 
          {
            type: "paragraph",
            content:
              "Import:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import localFont from "next/font/local";
 
const myFont = localFont({
    src: "./fonts/MyFont-Regular.woff2",
});`
          },
 
          {
            type: "paragraph",
            content:
              "Apply:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<body className={myFont.className}>`
          }
 
        ]
      },
 
      {
        heading: "Loading Multiple Local Font Files",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const myFont = localFont({
 
    src: [
 
        {
            path: "./fonts/MyFont-Light.woff2",
            weight: "300",
        },
 
        {
            path: "./fonts/MyFont-Regular.woff2",
            weight: "400",
        },
 
        {
            path: "./fonts/MyFont-Bold.woff2",
            weight: "700",
        }
 
    ]
 
});`
          },
 
          {
            type: "paragraph",
            content:
              "Next.js automatically chooses the appropriate file based on the requested font weight."
          }
 
        ]
      },
 
      {
        heading: "Using CSS Variables",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Instead of applying the font directly, you can expose it as a CSS variable."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const inter = Inter({
 
    subsets: ["latin"],
 
    variable: "--font-inter",
 
});`
          },
 
          {
            type: "paragraph",
            content:
              "Apply it:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<body className={inter.variable}>`
          },
 
          {
            type: "paragraph",
            content:
              "Global CSS:"
          },
 
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: var(--font-inter);
}`
          },
 
          {
            type: "paragraph",
            content:
              "This approach is useful when multiple fonts are used throughout an application."
          }
 
        ]
      },
 
      {
        heading: "Using Fonts with Tailwind CSS",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Configure the variable."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const inter = Inter({
 
    subsets: ["latin"],
 
    variable: "--font-inter",
 
});`
          },
 
          {
            type: "paragraph",
            content:
              "Apply it."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<body className={inter.variable}>`
          },
 
          {
            type: "paragraph",
            content:
              "Tailwind configuration (conceptually):"
          },
 
          {
            type: "code",
            language: "javascript",
            content: `fontFamily: {
    sans: ["var(--font-inter)"],
}`
          },
 
          {
            type: "paragraph",
            content:
              "Now every class=\"font-sans\" uses the optimized Next.js font."
          }
 
        ]
      },
 
      {
        heading: "Applying Fonts to Specific Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Instead of applying fonts globally, they can be used on individual components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1 className={inter.className}>
    DevSphere
</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Only that heading receives the font."
          }
 
        ]
      },
 
      {
        heading: "Mixing Multiple Fonts",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional websites usually use one heading font and one body font."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const heading = Roboto({
 
    weight: "700",
 
    subsets: ["latin"]
 
});
 
const body = Inter({
 
    subsets: ["latin"]
 
});`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1 className={heading.className}>`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p className={body.className}>`
          },
 
          {
            type: "paragraph",
            content:
              "Avoid using too many font families, as they increase download size and reduce visual consistency."
          }
 
        ]
      },
 
      {
        heading: "Font Optimization",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the biggest advantages of Next.js is automatic optimization."
          },
 
          {
            type: "paragraph",
            content:
              "Next.js automatically:"
          },
 
          {
            type: "list",
            items: [
              "Self-hosts fonts",
              "Compresses files",
              "Preloads fonts when appropriate",
              "Removes unnecessary characters through subsetting",
              "Avoids layout shifts",
              "Reduces external requests"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These optimizations happen without additional configuration in most cases."
          }
 
        ]
      },
 
      {
        heading: "Font Formats",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Modern browsers support several formats."
          },
 
          {
            type: "table",
            headers: [
              "Format",
              "Recommended"
            ],
 
            rows: [
              ["WOFF2", "✅ Best choice"],
              ["WOFF", "Good"],
              ["TTF", "Older"],
              ["OTF", "Large"],
              ["EOT", "Legacy only"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Whenever possible, use WOFF2 for local fonts because it offers the best compression and browser support."
          }
 
        ]
      },
 
      {
        heading: "Accessibility Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Choosing a font is not only about aesthetics. Good typography improves accessibility."
          },
 
          {
            type: "paragraph",
            content:
              "Recommendations:"
          },
 
          {
            type: "list",
            items: [
              "Use readable fonts",
              "Maintain sufficient font size",
              "Ensure good line spacing",
              "Preserve strong color contrast",
              "Avoid decorative fonts for body text",
              "Limit the number of font families"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Readable typography benefits all users, especially those with visual impairments or reading difficulties."
          }
 
        ]
      },
 
      {
        heading: "Performance Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Fonts can significantly affect performance."
          },
 
          {
            type: "comparison",
            leftTitle: "Avoid",
            leftItems: [
              "Loading unnecessary weights",
              "Importing unused fonts",
              "Loading many font families",
              "Using oversized font files"
            ],
 
            rightTitle: "Instead",
            rightItems: [
              "Use subsets",
              "Prefer variable fonts",
              "Choose WOFF2",
              "Load only required styles",
              "Keep typography simple"
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
                question: "Importing Fonts with <link>",
                answer:
                  "Avoid using Google Fonts through HTML link tags in Next.js projects when next/font provides optimized alternatives that self-host the font at build time."
              },
 
              {
                question: "Loading Every Font Weight",
                answer:
                  "Load only the weights your design actually uses. Loading all nine weights adds unnecessary file size.",
 
                examples: [
                  {
                    title: "Avoid",
                    language: "jsx",
                    content: `weight: [
"100",
"200",
"300",
"400",
"500",
"600",
"700",
"800",
"900"
]`
                  }
                ]
              },
 
              {
                question: "Using Too Many Fonts",
                answer:
                  "More fonts mean more downloads, larger bundles, and slower websites. Most professional websites use only one or two font families."
              },
 
              {
                question: "Forgetting Subsets",
                answer:
                  "Loading the entire font when only Latin characters are needed wastes bandwidth. Always specify appropriate subsets whenever possible."
              },
 
              {
                question: "Applying Different Fonts Randomly",
                answer:
                  "Maintain a consistent typography system throughout the application. Random font choices reduce visual coherence and professionalism."
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
            items: [
              "✔ Prefer next/font over external font links.",
              "✔ Use WOFF2 for local fonts.",
              "✔ Choose variable fonts when available.",
              "✔ Load only the weights and styles you need.",
              "✔ Use subsets to reduce download size.",
              "✔ Limit font families to one or two.",
              "✔ Use CSS variables for reusable typography.",
              "✔ Test fonts on different devices and browsers.",
              "✔ Prioritize readability over decorative styles."
            ]
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think fonts are purely a design choice, but in modern web development they are also a performance concern. Every additional font family, weight, or style increases the amount of data the browser must download and process. A page using four font families with multiple weights can easily load several hundred kilobytes of font files before displaying text. The next/font system was designed to solve this by treating fonts as build-time assets rather than external resources. This means typography becomes part of your application's optimization pipeline, improving loading speed, Core Web Vitals, privacy, and user experience simultaneously. Professional developers don't just ask \"Which font looks good?\" They also ask: How many weights are actually needed? Can a variable font replace multiple files? Are the correct subsets being loaded? Is the font self-hosted for better privacy? Does the typography contribute to good Core Web Vitals? Thinking about fonts from both a design and engineering perspective is what separates production-ready Next.js applications from ordinary ones."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In this lesson, you learned how Next.js simplifies and optimizes font handling through the next/font module. You explored why traditional font loading can negatively impact performance, how Next.js self-hosts and optimizes Google and local fonts, and how to configure font subsets, weights, styles, display strategies, and variable fonts."
          },
 
          {
            type: "paragraph",
            content:
              "You also learned how to use multiple fonts, local fonts, CSS variables, and integrate fonts with Tailwind CSS."
          },
 
          {
            type: "paragraph",
            content:
              "Finally, you explored performance optimization, accessibility, common mistakes, and professional best practices. By using next/font effectively, you can build applications that not only look visually appealing but also deliver faster loading times, improved Core Web Vitals, stronger privacy, and a better overall user experience."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Theme Management
============================= */
    "nextjs-theme-management": {
    title: "Theme Management",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications are expected to provide more than just a beautiful interface—they should also offer a personalized user experience. One of the most common personalization features is theme management, allowing users to switch between Light Mode, Dark Mode, and even custom themes without affecting the application's functionality."
          },
          {
            type: "paragraph",
            content: "Today, almost every popular application—including GitHub, YouTube, Discord, Twitter (X), VS Code, and ChatGPT—supports multiple themes. Users expect websites to remember their preferred appearance across visits and devices."
          },
          {
            type: "paragraph",
            content: "In traditional web applications, implementing themes often involves manually changing CSS classes, storing preferences in local storage, and handling browser preferences. This can quickly become complex, especially in server-rendered applications."
          },
          {
            type: "paragraph",
            content: "Next.js simplifies theme management by combining React state management, CSS variables, Server Components, Client Components, and libraries like next-themes to create a seamless theming experience."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What themes are",
              "Why theme management is important",
              "Light vs Dark themes",
              "System theme detection",
              "Theme Provider",
              "Using next-themes",
              "CSS Variables",
              "Theme switching",
              "Persistent themes",
              "Tailwind CSS integration",
              "Multiple custom themes",
              "Dynamic theming",
              "Accessibility considerations",
              "Performance optimization",
              "Best practices",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll be able to build professional, flicker-free, scalable theme systems in Next.js applications."
          }
        ]
      },

      {
        heading: "What is Theme Management?",
        blocks: [
          {
            type: "paragraph",
            content: "Theme management is the process of changing an application's appearance without changing its functionality."
          },
          {
            type: "paragraph",
            content: "For example, these interfaces all perform the same tasks:"
          },
          {
            type: "comparison",
            leftTitle: "Light Theme",
            leftItems: [
              "Background : White",
              "Text : Black",
              "Buttons : Blue"
            ],
            rightTitle: "Dark Theme",
            rightItems: [
              "Background : #111827",
              "Text : White",
              "Buttons : Sky Blue"
            ]
          },
          {
            type: "paragraph",
            content: "Only the visual presentation changes."
          },
          {
            type: "paragraph",
            content: "The application's logic remains identical."
          }
        ]
      },

      {
        heading: "Why Theme Management Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Theme management provides several benefits."
          },
          {
            type: "cards",
            items: [
              {
                title: "Better User Experience",
                description: "Different users have different preferences. Some prefer Light mode, Dark mode, High contrast mode, or Brand colors. Allowing customization improves user satisfaction."
              },
              {
                title: "Reduced Eye Strain",
                description: "Dark mode is more comfortable in low-light environments. Many users spend hours using web applications. Dark themes reduce visual fatigue."
              },
              {
                title: "Accessibility",
                description: "Some users require Higher contrast, Larger readable colors, or Reduced brightness. Theme management improves accessibility."
              },
              {
                title: "Brand Identity",
                description: "Large companies often support multiple branded themes."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Default Theme", "→",
              "Customer Theme", "→",
              "Enterprise Theme", "→",
              "Holiday Theme"
            ]
          },
          {
            type: "paragraph",
            content: "The application remains the same while its appearance changes."
          }
        ]
      },

      {
        heading: "Types of Themes",
        blocks: [
          {
            type: "paragraph",
            content: "Common themes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Light Theme",
              "Dark Theme",
              "System Theme",
              "High Contrast Theme",
              "Brand Theme",
              "Seasonal Theme",
              "Custom User Theme"
            ]
          },
          {
            type: "paragraph",
            content: "Most applications start with Light and Dark themes."
          }
        ]
      },

      {
        heading: "Understanding Theme Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A theme usually contains design values instead of actual UI."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Theme", "→",
              "Colors", "→",
              "Fonts", "→",
              "Spacing", "→",
              "Border Radius", "→",
              "Shadows", "→",
              "Animations"
            ]
          },
          {
            type: "paragraph",
            content: "Components simply use these values."
          }
        ]
      },

      {
        heading: "What is a Theme Provider?",
        blocks: [
          {
            type: "paragraph",
            content: "A Theme Provider makes the current theme available throughout the application."
          },
          {
            type: "paragraph",
            content: "Instead of passing the theme manually to every component, all components can access it automatically."
          },
          {
            type: "tree",
            content: `[Theme Provider]
  ├── Navbar
  ├── Sidebar
  ├── Cards
  ├── Buttons
  └── Footer`
          },
          {
            type: "paragraph",
            content: "Every component receives the same active theme."
          }
        ]
      },

      {
        heading: "Theme Management in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "There are several ways to implement themes."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React Context",
              "next-themes",
              "CSS Variables",
              "Tailwind Dark Mode",
              "UI Libraries (Material UI, Chakra UI, etc.)"
            ]
          },
          {
            type: "paragraph",
            content: "The most popular solution for Next.js is next-themes because it integrates well with the App Router and supports system preferences."
          }
        ]
      },

      {
        heading: "Installing next-themes",
        blocks: [
          {
            type: "paragraph",
            content: "Install the package."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install next-themes`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "bash",
            content: `yarn add next-themes`
          }
        ]
      },

      {
        heading: "Creating a Theme Provider",
        blocks: [
          {
            type: "paragraph",
            content: "Create a provider component."
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}`
          },
          {
            type: "paragraph",
            content: "The \"use client\" directive is required because theme changes depend on browser APIs such as localStorage and matchMedia."
          }
        ]
      },

      {
        heading: "Using the Theme Provider",
        blocks: [
          {
            type: "paragraph",
            content: "Wrap your application."
          },
          {
            type: "code",
            language: "jsx",
            content: `import Providers from "./providers";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}`
          },
          {
            type: "paragraph",
            content: "Now every component can access the active theme."
          }
        ]
      },

      {
        heading: "Reading the Current Theme",
        blocks: [
          {
            type: "paragraph",
            content: "The useTheme hook provides access to the current theme."
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useTheme } from "next-themes";

export default function Home() {

    const { theme } = useTheme();

    return (
        <p>{theme}</p>
    );

}`
          },
          {
            type: "paragraph",
            content: "Possible values include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "light",
              "dark",
              "system"
            ]
          }
        ]
      },

      {
        heading: "Switching Themes",
        blocks: [
          {
            type: "paragraph",
            content: "Changing themes is simple."
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";

import { useTheme } from "next-themes";

export default function ThemeButton() {

    const {
        theme,
        setTheme
    } = useTheme();

    return (

        <button
            onClick={() =>
                setTheme(
                    theme === "dark"
                        ? "light"
                        : "dark"
                )
            }
        >
            Change Theme
        </button>

    );

}`
          },
          {
            type: "paragraph",
            content: "The theme updates instantly."
          }
        ]
      },

      {
        heading: "Understanding System Theme",
        blocks: [
          {
            type: "paragraph",
            content: "Many operating systems allow users to choose:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Light Mode",
              "Dark Mode"
            ]
          },
          {
            type: "paragraph",
            content: "The browser exposes this preference. Next-themes can automatically use it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<ThemeProvider
    defaultTheme="system"
>`
          },
          {
            type: "paragraph",
            content: "Now the website follows the user's operating system preference."
          }
        ]
      },

      {
        heading: "Theme Persistence",
        blocks: [
          {
            type: "paragraph",
            content: "Users expect their chosen theme to remain the same after refreshing the page. next-themes automatically stores the selected theme in local storage."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Selects Dark Theme", "→",
              "Theme Stored", "→",
              "Page Refresh", "→",
              "Dark Theme Restored"
            ]
          },
          {
            type: "paragraph",
            content: "No additional code is required."
          }
        ]
      },

      {
        heading: "Using CSS Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Hardcoding colors is not scalable. Instead:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {

    --background: white;

    --text: black;

}`
          },
          {
            type: "paragraph",
            content: "Dark mode"
          },
          {
            type: "code",
            language: "css",
            content: `.dark {

    --background: #111827;

    --text: white;

}`
          },
          {
            type: "paragraph",
            content: "Components use the variables."
          },
          {
            type: "code",
            language: "css",
            content: `body {

    background: var(--background);

    color: var(--text);

}`
          },
          {
            type: "paragraph",
            content: "Changing the variables updates the entire application."
          }
        ]
      },

      {
        heading: "Why CSS Variables Are Better",
        blocks: [
          {
            type: "paragraph",
            content: "Without variables:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    background: white;
}

.button {
    background: white;
}

.header {
    background: white;
}`
          },
          {
            type: "paragraph",
            content: "Every rule must change for a new theme."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "With variables:"
          },
          {
            type: "code",
            language: "css",
            content: `background: var(--background);`
          },
          {
            type: "paragraph",
            content: "Only one variable changes."
          }
        ]
      },

      {
        heading: "Using Themes with Tailwind CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Tailwind supports dark mode. Configuration typically enables class-based dark mode."
          },
          {
            type: "code",
            language: "javascript",
            content: `darkMode: "class"`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div
class="
bg-white
dark:bg-gray-900
text-black
dark:text-white
">`
          },
          {
            type: "paragraph",
            content: "When the dark class is applied to the document, Tailwind automatically switches styles. This works seamlessly with next-themes."
          }
        ]
      },

      {
        heading: "Multiple Custom Themes",
        blocks: [
          {
            type: "paragraph",
            content: "Applications are not limited to Light and Dark themes. Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Light",
              "Dark",
              "Blue",
              "Purple",
              "Corporate",
              "Ocean"
            ]
          },
          {
            type: "paragraph",
            content: "The theme can be selected dynamically."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTheme("ocean");`
          },
          {
            type: "paragraph",
            content: "Each theme simply defines a different set of CSS variables."
          }
        ]
      },

      {
        heading: "Dynamic Theme Objects",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of hardcoding values, define reusable theme objects."
          },
          {
            type: "code",
            language: "javascript",
            content: `const lightTheme = {
    background: "#ffffff",
    text: "#111827",
    primary: "#2563eb"
};

const darkTheme = {
    background: "#111827",
    text: "#ffffff",
    primary: "#60a5fa"
};`
          },
          {
            type: "paragraph",
            content: "These objects can drive CSS variables or UI library theme providers."
          }
        ]
      },

      {
        heading: "Theme-Aware Components",
        blocks: [
          {
            type: "paragraph",
            content: "Components should not know which theme is active. Instead, they use shared design tokens."
          },
          {
            type: "comparison",
            leftTitle: "Bad",
            leftItems: [
              "background: white;"
            ],
            rightTitle: "Good",
            rightItems: [
              "background: var(--background);"
            ]
          },
          {
            type: "paragraph",
            content: "This makes components reusable across every theme."
          }
        ]
      },

      {
        heading: "Theme Transition Animations",
        blocks: [
          {
            type: "paragraph",
            content: "Abrupt theme changes can feel jarring. Smooth transitions improve the experience."
          },
          {
            type: "code",
            language: "css",
            content: `body {

    transition:

        background-color .3s ease,

        color .3s ease;

}`
          },
          {
            type: "paragraph",
            content: "Avoid applying transitions to every property, as this can reduce performance."
          }
        ]
      },

      {
        heading: "Preventing Theme Flicker",
        blocks: [
          {
            type: "paragraph",
            content: "One common issue is the Flash of Incorrect Theme (FOIT/FART-like behavior). Example:"
          },
          {
            type: "flow",
            steps: [
              "Page Loads", "→",
              "Light Theme Appears", "→",
              "Dark Theme Loads", "→",
              "Screen Flashes"
            ]
          },
          {
            type: "paragraph",
            content: "To prevent this, next-themes injects a small script before hydration to apply the correct theme as early as possible. When using ThemeProvider, it's common to configure:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
>`
          },
          {
            type: "paragraph",
            content: "Additionally, in the App Router, use:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<html suppressHydrationWarning>`
          },
          {
            type: "paragraph",
            content: "because the theme class may differ between server-rendered HTML and the hydrated client. This combination minimizes hydration warnings and visible flickering."
          }
        ]
      },

      {
        heading: "Server Components vs Client Components",
        blocks: [
          {
            type: "paragraph",
            content: "This is where many beginners become confused. Theme selection relies on browser APIs, so:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "ThemeProvider",
              "useTheme()",
              "Theme toggle buttons"
            ]
          },
          {
            type: "paragraph",
            content: "must be Client Components."
          },
          {
            type: "paragraph",
            content: "However:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layouts",
              "Pages",
              "Server-rendered content"
            ]
          },
          {
            type: "paragraph",
            content: "can remain Server Components. A common architecture is:"
          },
          {
            type: "tree",
            content: `[Server Layout]
  └── [Client Theme Provider]
        ├── [Server Components]
        └── [Client Components]`
          },
          {
            type: "paragraph",
            content: "Only the interactive theme logic runs on the client."
          }
        ]
      },

      {
        heading: "Theme Management and Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Themes should never reduce readability. Follow these recommendations:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Maintain sufficient color contrast.",
              "Don't rely on color alone to convey information.",
              "Ensure focus indicators remain visible.",
              "Test both light and dark themes.",
              "Verify readability on mobile and desktop."
            ]
          }
        ]
      },

      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Efficient theme systems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Change CSS variables instead of rewriting styles.",
              "Minimize JavaScript during theme switches.",
              "Avoid rerendering the entire application unnecessarily.",
              "Keep theme objects lightweight.",
              "Load only required assets."
            ]
          },
          {
            type: "paragraph",
            content: "Most theme changes should require only a small DOM update."
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
                title: "Hardcoding Colors",
                description: "Avoid using `background: white;`. Use CSS variables like `background: var(--background);` instead."
              },
              {
                title: "Forgetting System Theme Support",
                description: "Many users expect websites to respect their operating system preference. Providing \"system\" as a default improves the experience."
              },
              {
                title: "Making Every Component a Client Component",
                description: "Only components that actually need theme interactivity should use \"use client\". Static UI can remain server-rendered."
              },
              {
                title: "Storing Theme in Multiple Places",
                description: "Use a single source of truth such as the Theme Provider. Duplicating state can lead to inconsistencies."
              },
              {
                title: "Ignoring Accessibility",
                description: "A visually appealing theme is not enough if users cannot comfortably read the content."
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
              "Use next-themes for most Next.js applications.",
              "Prefer CSS variables over hardcoded colors.",
              "Support Light, Dark, and System themes.",
              "Keep components theme-agnostic.",
              "Use design tokens for colors, spacing, and typography.",
              "Add smooth transitions for major color changes.",
              "Test on different browsers and operating systems.",
              "Keep interactive theme logic inside Client Components.",
              "Document your theme tokens for team consistency."
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Think Beyond Dark Mode: Many tutorials present theme management as nothing more than adding a Light/Dark toggle. In professional applications, however, a theme is essentially a design system. Instead of storing individual colors throughout your codebase, store semantic design tokens such as: --color-background, --color-surface, --color-primary, --color-success, --color-warning, --color-error. Components should never know which color is being used—they only know which design role they need. For example, a button should use --color-primary rather than a hardcoded blue value. This allows an entire application's branding to change simply by swapping theme tokens, without modifying any component code. This approach is widely used in enterprise applications, multi-brand SaaS platforms, white-label products, and design systems because it keeps themes scalable, maintainable, and easy to extend far beyond simple light and dark modes."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that theme management is about creating a consistent, customizable visual experience while keeping application logic unchanged. You explored Light, Dark, System, and custom themes, learned how next-themes integrates with Next.js, and saw how to configure a ThemeProvider, read and change themes, persist user preferences, and use CSS variables for scalable styling."
          },
          {
            type: "paragraph",
            content: "You also learned how themes work with Tailwind CSS, multiple custom themes, Server and Client Components, accessibility, performance optimization, hydration considerations, and professional best practices. By designing your application around reusable design tokens instead of hardcoded colors, you can build theme systems that are fast, maintainable, accessible, and ready for real-world production applications."
          }
        ]
      }
    ]
  },
};

export default nextjsStylingNextjsApplications;