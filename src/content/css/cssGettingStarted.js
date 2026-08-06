const cssGettingStarted = {

/* ===========================
    First Topic : Introduction to CSS
============================= */
    "introduction-to-css": {
    title: "Introduction to CSS",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction to CSS",
        blocks: [
          {
            type: "paragraph",
            content: "When you first learn HTML, you discover how to create the structure of a webpage using elements such as headings, paragraphs, images, tables, forms, and links."
          },
          {
            type: "paragraph",
            content: "However, HTML alone produces plain-looking pages. Without styling, every website would appear as simple text and basic elements arranged according to the browser's default rules."
          },
          {
            type: "paragraph",
            content: "This is where CSS comes in."
          },
          {
            type: "paragraph",
            content: "CSS (Cascading Style Sheets) is the language used to control the visual appearance of webpages. It allows developers to change colors, fonts, spacing, layouts, animations, responsiveness, and overall design."
          },
          {
            type: "paragraph",
            content: "HTML provides the structure."
          },
          {
            type: "paragraph",
            content: "CSS provides the presentation."
          },
          {
            type: "paragraph",
            content: "JavaScript provides the behavior."
          },
          {
            type: "paragraph",
            content: "Together, these three technologies form the foundation of modern web development."
          }
        ]
      },
      {
        heading: "What is CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS stands for:"
          },
          {
            type: "output",
            content: "Cascading Style Sheets"
          },
          {
            type: "paragraph",
            content: "It is a stylesheet language used to describe how HTML elements should be displayed on screen, printed on paper, or presented on other devices."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome to My Website</h1>\n\n<p>This is my first webpage.</p>`
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Black text",
              "Default font",
              "Default spacing",
              "Basic layout"
            ]
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}\n\np {\n    color: gray;\n}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blue heading",
              "Gray paragraph",
              "More visually appealing page"
            ]
          },
          {
            type: "paragraph",
            content: "CSS transforms plain HTML into professional-looking websites."
          }
        ]
      },
      {
        heading: "Why Was CSS Created?",
        blocks: [
          {
            type: "paragraph",
            content: "In the early days of the web, HTML handled both:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content",
              "Presentation"
            ]
          },
          {
            type: "paragraph",
            content: "Developers used tags such as:"
          },
          {
            type: "code",
            language: "html",
            content: `<font color="red">\nWelcome\n</font>`
          },
          {
            type: "paragraph",
            content: "and"
          },
          {
            type: "code",
            language: "html",
            content: `<center>\nHello World\n</center>`
          },
          {
            type: "paragraph",
            content: "This created several problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML became cluttered.",
              "Design changes were difficult.",
              "Websites became hard to maintain.",
              "Code duplication increased."
            ]
          },
          {
            type: "paragraph",
            content: "To solve these issues, CSS was introduced."
          },
          {
            type: "paragraph",
            content: "CSS separated:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content → HTML",
              "Presentation → CSS",
              "Behavior → JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "This separation remains one of the most important principles in modern web development."
          }
        ]
      },
      {
        heading: "What Can CSS Do?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS controls almost every visual aspect of a webpage."
          },
          {
            type: "paragraph",
            content: "It can change:"
          },
          {
            type: "paragraph",
            content: "Colors"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;\nbackground-color: yellow;`
          },
          {
            type: "paragraph",
            content: "Fonts"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: Arial, sans-serif;\nfont-size: 20px;`
          },
          {
            type: "paragraph",
            content: "Spacing"
          },
          {
            type: "code",
            language: "css",
            content: `margin: 20px;\npadding: 15px;`
          },
          {
            type: "paragraph",
            content: "Borders"
          },
          {
            type: "code",
            language: "css",
            content: `border: 2px solid black;`
          },
          {
            type: "paragraph",
            content: "Layouts"
          },
          {
            type: "code",
            language: "css",
            content: `display: flex;\ndisplay: grid;`
          },
          {
            type: "paragraph",
            content: "Animations"
          },
          {
            type: "code",
            language: "css",
            content: `transition: all 0.3s ease;`
          },
          {
            type: "paragraph",
            content: "Responsiveness"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {\n    body {\n        font-size: 14px;\n    }\n}`
          },
          {
            type: "paragraph",
            content: "CSS allows developers to create everything from simple blogs to complex web applications."
          }
        ]
      },
      {
        heading: "How CSS Works",
        blocks: [
          {
            type: "paragraph",
            content: "CSS works by selecting HTML elements and applying styles to them."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>CSS Tutorial</h1>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "The browser reads:"
          },
          {
            type: "output",
            content: [
              "Apply blue color",
              "to every h1 element."
            ]
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "CSS Tutorial",
              "appears in blue."
            ]
          }
        ]
      },
      {
        heading: "Understanding a CSS Rule",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS rule consists of two main parts:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}`
          },
          {
            type: "cards",
            items: [
              {
                title: "Selector",
                description: "h1 - Identifies which element will be styled."
              },
              {
                title: "Declaration Block",
                description: "{ color: blue; } - Contains style instructions."
              },
              {
                title: "Property",
                description: "color - Defines what should be changed."
              },
              {
                title: "Value",
                description: "blue - Specifies the new setting."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "flow",
            steps: [
              "Selector",
              "→",
              "Property",
              "→",
              "Value"
            ]
          }
        ]
      },
      {
        heading: "CSS Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `selector {\n    property: value;\n}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {\n    color: red;\n    font-size: 18px;\n}`
          },
          {
            type: "paragraph",
            content: "Breakdown:"
          },
          {
            type: "table",
            headers: [
              "Code",
              "Part"
            ],
            rows: [
              [
                "p",
                "Selector"
              ],
              [
                "color",
                "Property"
              ],
              [
                "red",
                "Value"
              ],
              [
                "font-size",
                "Property"
              ],
              [
                "18px",
                "Value"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Every declaration ends with:"
          },
          {
            type: "output",
            content: ";"
          },
          {
            type: "paragraph",
            content: "and declarations are enclosed inside:"
          },
          {
            type: "output",
            content: [
              "{",
              "}"
            ]
          }
        ]
      },
      {
        heading: "A Complete Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>My Website</h1>\n\n<p>Welcome to my page.</p>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: navy;\n}\n\np {\n    color: gray;\n    font-size: 18px;\n}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navy heading",
              "Gray paragraph",
              "Larger text"
            ]
          },
          {
            type: "paragraph",
            content: "This simple example demonstrates the basic relationship between HTML and CSS."
          }
        ]
      },
      {
        heading: "Advantages of CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS offers many benefits."
          },
          {
            type: "paragraph",
            content: "1. Separation of Content and Design"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML handles content.",
              "CSS handles appearance.",
              "This creates cleaner code."
            ]
          },
          {
            type: "paragraph",
            content: "2. Easier Maintenance"
          },
          {
            type: "paragraph",
            content: "Instead of modifying hundreds of pages individually:"
          },
          {
            type: "code",
            language: "css",
            content: `body {\n    font-family: Arial;\n}`
          },
          {
            type: "paragraph",
            content: "can update the entire website."
          },
          {
            type: "paragraph",
            content: "3. Consistency"
          },
          {
            type: "paragraph",
            content: "A single stylesheet can maintain a uniform design across all pages."
          },
          {
            type: "paragraph",
            content: "4. Better Performance"
          },
          {
            type: "paragraph",
            content: "External CSS files can be cached by browsers, reducing download times."
          },
          {
            type: "paragraph",
            content: "5. Responsive Design"
          },
          {
            type: "paragraph",
            content: "CSS allows websites to adapt to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Phones",
              "Tablets",
              "Laptops",
              "Desktop monitors"
            ]
          },
          {
            type: "paragraph",
            content: "6. Improved Accessibility"
          },
          {
            type: "paragraph",
            content: "Proper styling improves readability and usability for all users."
          }
        ]
      },
      {
        heading: "CSS Versions and Evolution",
        blocks: [
          {
            type: "paragraph",
            content: "CSS has evolved significantly over time."
          },
          {
            type: "paragraph",
            content: "CSS1 (1996)"
          },
          {
            type: "paragraph",
            content: "Introduced:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fonts",
              "Colors",
              "Basic spacing"
            ]
          },
          {
            type: "paragraph",
            content: "CSS2 (1998)"
          },
          {
            type: "paragraph",
            content: "Added:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Positioning",
              "Media types",
              "Advanced styling"
            ]
          },
          {
            type: "paragraph",
            content: "CSS2.1"
          },
          {
            type: "paragraph",
            content: "Improved compatibility and standardization."
          },
          {
            type: "paragraph",
            content: "CSS3"
          },
          {
            type: "paragraph",
            content: "Introduced major features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Animations",
              "Transitions",
              "Flexbox",
              "Gradients",
              "Shadows",
              "Media Queries",
              "Transformations"
            ]
          },
          {
            type: "paragraph",
            content: "Modern CSS"
          },
          {
            type: "paragraph",
            content: "Today CSS is no longer released as a single version."
          },
          {
            type: "paragraph",
            content: "Instead, features are developed as independent modules."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grid Layout",
              "Container Queries",
              "Cascade Layers",
              "Nesting",
              "Subgrid",
              "Logical Properties"
            ]
          },
          {
            type: "paragraph",
            content: "Modern CSS continues to evolve rapidly."
          }
        ]
      },
      {
        heading: "The Three Ways to Add CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS can be applied to HTML using three methods."
          },
          {
            type: "paragraph",
            content: "Inline CSS"
          },
          {
            type: "paragraph",
            content: "Styles are written directly inside an HTML element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 style="color: blue;">\n    Welcome\n</h1>`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Quick testing"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Difficult to maintain",
              "Repetitive",
              "Not recommended for large projects"
            ]
          },
          {
            type: "paragraph",
            content: "Internal CSS"
          },
          {
            type: "paragraph",
            content: "Styles are written inside a <style> element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<head>\n\n<style>\n\nh1 {\n    color: blue;\n}\n\n</style>\n\n</head>`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Suitable for small pages"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Not reusable across multiple pages"
            ]
          },
          {
            type: "paragraph",
            content: "External CSS"
          },
          {
            type: "paragraph",
            content: "Styles are stored in a separate file."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link\nrel="stylesheet"\nhref="styles.css">`
          },
          {
            type: "paragraph",
            content: "styles.css:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reusable",
              "Maintainable",
              "Industry standard"
            ]
          },
          {
            type: "paragraph",
            content: "Most professional websites use external stylesheets."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "500 pages",
              "10,000 products"
            ]
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "paragraph",
            content: "Every page would require manual formatting."
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.product-title {\n    color: darkblue;\n}`
          },
          {
            type: "paragraph",
            content: "One rule can style every product title instantly."
          },
          {
            type: "paragraph",
            content: "This demonstrates why CSS became essential for web development."
          }
        ]
      },
      {
        heading: "CSS and Modern Websites",
        blocks: [
          {
            type: "paragraph",
            content: "Almost every modern website relies heavily on CSS."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Social media platforms",
              "Online stores",
              "News websites",
              "Streaming platforms",
              "Educational portals",
              "Web applications"
            ]
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "example",
            items: [
              "Google",
              "YouTube",
              "Amazon",
              "Facebook",
              "Netflix"
            ]
          },
          {
            type: "paragraph",
            content: "would all appear as plain HTML documents."
          },
          {
            type: "paragraph",
            content: "CSS provides the visual experience users expect."
          }
        ]
      },
      {
        heading: "Browser Internals: How CSS is Applied",
        blocks: [
          {
            type: "paragraph",
            content: "Most beginner tutorials stop after explaining syntax."
          },
          {
            type: "paragraph",
            content: "Professional developers should understand what happens behind the scenes."
          },
          {
            type: "paragraph",
            content: "When a webpage loads:"
          },
          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Step 1: Browser downloads HTML (HTML File)",
              "Step 2: Browser builds DOM Tree (Document Object Model)",
              "Step 3: Browser downloads CSS files (styles.css)",
              "Step 4: Browser creates CSSOM (CSS Object Model). The CSSOM contains all CSS rules in a structured format.",
              "Step 5: DOM + CSSOM combine into Render Tree",
              "Step 6: Browser calculates layout (Where elements appear, how large they are, how much space they occupy)",
              "Step 7: Browser paints pixels on screen (Visible webpage)"
            ]
          },
          {
            type: "paragraph",
            content: "Simplified process:"
          },
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "DOM",
              "→",
              "DOM + CSSOM",
              "→",
              "Render Tree",
              "→",
              "Layout",
              "→",
              "Paint",
              "→",
              "Display"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this process helps explain many advanced CSS behaviors later."
          }
        ]
      },
      {
        heading: "Why Cascading Appears in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners know what CSS stands for but never learn why it is called Cascading Style Sheets."
          },
          {
            type: "paragraph",
            content: "The word cascading refers to how multiple style rules compete and combine."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "Later:"
          },
          {
            type: "code",
            language: "css",
            content: `p {\n    color: red;\n}`
          },
          {
            type: "paragraph",
            content: "Which color wins?"
          },
          {
            type: "paragraph",
            content: "The browser follows a set of cascading rules to determine the final style."
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "color: red;"
          },
          {
            type: "paragraph",
            content: "wins because it appears later."
          },
          {
            type: "paragraph",
            content: "This concept is one of the most important foundations of CSS and will be explored in depth in future lessons."
          }
        ]
      },
      {
        heading: "Common Beginner Misconceptions",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Is Not a Programming Language"
          },
          {
            type: "paragraph",
            content: "CSS contains rules and logic-like behavior, but it is primarily a stylesheet language."
          },
          {
            type: "paragraph",
            content: "CSS Is Not Just About Colors"
          },
          {
            type: "paragraph",
            content: "Modern CSS handles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layout systems",
              "Animations",
              "Responsive design",
              "Themes",
              "Complex UI components"
            ]
          },
          {
            type: "paragraph",
            content: "CSS Is Not Easy"
          },
          {
            type: "paragraph",
            content: "Basic CSS is simple."
          },
          {
            type: "paragraph",
            content: "Advanced CSS involves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layout algorithms",
              "Cascade rules",
              "Specificity",
              "Rendering performance",
              "Responsive architecture"
            ]
          },
          {
            type: "paragraph",
            content: "Many professional frontend engineers spend years mastering CSS."
          }
        ]
      },
      {
        heading: "Future Learning Roadmap",
        blocks: [
          {
            type: "paragraph",
            content: "Introduction to CSS is only the beginning."
          },
          {
            type: "paragraph",
            content: "After this topic, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Syntax",
              "CSS Selectors",
              "Colors",
              "Backgrounds",
              "Borders",
              "Margins",
              "Padding",
              "Width and Height",
              "Units",
              "Typography",
              "Positioning",
              "Flexbox",
              "Grid",
              "Responsive Design",
              "Transforms",
              "Transitions",
              "Animations",
              "CSS Variables",
              "Modern Layout Techniques",
              "Accessibility and Performance"
            ]
          },
          {
            type: "paragraph",
            content: "Each topic builds upon the concepts introduced here."
          }
        ]
      },
      {
        heading: "Professional Developer Perspective",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often think CSS is used merely to make websites look attractive."
          },
          {
            type: "paragraph",
            content: "Professional developers view CSS differently."
          },
          {
            type: "paragraph",
            content: "CSS is a powerful layout and rendering language that controls how information is presented across countless devices and screen sizes. Modern CSS handles responsive design, accessibility, theming, animation, component styling, design systems, and user experience. Large organizations invest significant effort in CSS architecture because maintainable styling directly impacts performance, usability, scalability, and long-term project success."
          },
          {
            type: "paragraph",
            content: "Understanding CSS deeply is not just about learning properties—it is about understanding how browsers render interfaces and how users interact with them."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS (Cascading Style Sheets) is the language responsible for the visual presentation of web pages. It separates design from content, allowing developers to control colors, typography, spacing, layouts, animations, responsiveness, and overall user experience. CSS works by selecting HTML elements and applying style rules consisting of selectors, properties, and values. It can be added using inline, internal, or external stylesheets, with external CSS being the preferred professional approach. Modern CSS has evolved far beyond simple styling and now powers sophisticated layouts, responsive interfaces, animations, design systems, and accessibility improvements. Behind the scenes, browsers process CSS through the CSSOM and rendering pipeline, making CSS a fundamental technology for understanding how modern websites are built and displayed."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Many beginners believe that CSS is only about making things look pretty. In reality, CSS is a structural rendering language. Mastering CSS means understanding how browsers calculate space, prioritize rules, and construct complex, interactive, and responsive layouts across thousands of different devices."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Why CSS?
============================= */
    "why-css": {
    title: "Why CSS?",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Why CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "After learning HTML, many beginners ask an important question:"
          },
          {
            type: "quote",
            content: "Why do we need CSS at all?"
          },
          {
            type: "paragraph",
            content: "If HTML can already display text, images, links, tables, and forms, then why was another technology created?"
          },
          {
            type: "paragraph",
            content: "The answer lies in understanding the difference between content and presentation."
          },
          {
            type: "paragraph",
            content: "HTML was designed to describe the structure and meaning of content. CSS was created to control how that content looks and appears to users."
          },
          {
            type: "paragraph",
            content: "Without CSS, the modern web would not exist as we know it. Websites would be difficult to read, hard to maintain, visually inconsistent, and nearly impossible to adapt to different devices."
          },
          {
            type: "paragraph",
            content: "This chapter explores why CSS was created, what problems it solves, and why it has become one of the most important technologies in web development."
          }
        ]
      },
      {
        heading: "The Problem Before CSS",
        blocks: [
          {
            type: "paragraph",
            content: "In the early years of the web, HTML handled both content and presentation."
          },
          {
            type: "paragraph",
            content: "Developers used HTML tags not only to define information but also to control appearance."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<font color="red" size="5">\nWelcome\n</font>\n<center>\nHello World\n</center>\n<body bgcolor="yellow">`
          },
          {
            type: "paragraph",
            content: "HTML pages quickly became cluttered with styling information."
          },
          {
            type: "paragraph",
            content: "A simple webpage might contain:"
          },
          {
            type: "code",
            language: "html",
            content: `<font>\n<center>\n<b>\n<i>`
          },
          {
            type: "paragraph",
            content: "mixed directly with content."
          },
          {
            type: "paragraph",
            content: "This created several problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML became difficult to read.",
              "Design changes required editing many pages.",
              "Websites became inconsistent.",
              "Code duplication increased.",
              "Maintenance became expensive."
            ]
          },
          {
            type: "paragraph",
            content: "The web needed a better solution."
          }
        ]
      },
      {
        heading: "The Birth of CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS was introduced to separate presentation from content."
          },
          {
            type: "paragraph",
            content: "Instead of writing:"
          },
          {
            type: "code",
            language: "html",
            content: `<font color="blue">\nWelcome\n</font>`
          },
          {
            type: "paragraph",
            content: "developers could write:"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "output",
            content: [
              "HTML → What the content is",
              "CSS  → How the content looks"
            ]
          },
          {
            type: "paragraph",
            content: "This separation transformed web development and remains one of the most important architectural decisions in web history."
          }
        ]
      },
      {
        heading: "HTML vs CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding the difference between HTML and CSS is essential."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "paragraph",
            content: "Defines structure."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>My Website</h1>\n\n<p>This is a paragraph.</p>`
          },
          {
            type: "paragraph",
            content: "HTML answers:"
          },
          {
            type: "output",
            content: "What is this?"
          },
          {
            type: "paragraph",
            content: "The browser understands:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Heading",
              "Paragraph"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "paragraph",
            content: "Defines appearance."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: navy;\n}\n\np {\n    font-size: 18px;\n}`
          },
          {
            type: "paragraph",
            content: "CSS answers:"
          },
          {
            type: "output",
            content: "How should it look?"
          },
          {
            type: "paragraph",
            content: "The browser understands:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blue heading",
              "Large paragraph text"
            ]
          }
        ]
      },
      {
        heading: "Why HTML Alone Is Not Enough",
        blocks: [
          {
            type: "paragraph",
            content: "Consider this webpage:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Online Store</h1>\n\n<p>Welcome to our shop.</p>\n\n<button>\nBuy Now\n</button>`
          },
          {
            type: "paragraph",
            content: "Without CSS, the browser displays:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Default font",
              "Default spacing",
              "Default colors",
              "Default button style"
            ]
          },
          {
            type: "paragraph",
            content: "The page works."
          },
          {
            type: "paragraph",
            content: "But it does not look professional."
          },
          {
            type: "paragraph",
            content: "Users today expect:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Attractive design",
              "Responsive layouts",
              "Smooth interactions",
              "Consistent branding"
            ]
          },
          {
            type: "paragraph",
            content: "HTML alone cannot provide these experiences."
          },
          {
            type: "paragraph",
            content: "CSS makes them possible."
          }
        ]
      },
      {
        heading: "CSS Makes Websites Attractive",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most obvious reasons CSS exists is visual design."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Plain black text",
              "White background",
              "Default styling"
            ]
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `body {\n    background-color: #f5f5f5;\n}\n\nh1 {\n    color: darkblue;\n}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better aesthetics",
              "Better readability",
              "Better user experience"
            ]
          },
          {
            type: "paragraph",
            content: "This is often the first reason beginners learn CSS."
          }
        ]
      },
      {
        heading: "CSS Improves Readability",
        blocks: [
          {
            type: "paragraph",
            content: "Good design is not just about beauty."
          },
          {
            type: "paragraph",
            content: "It is also about communication."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {\n    font-size: 18px;\n    line-height: 1.8;\n}`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easier reading",
              "Reduced eye strain",
              "Better comprehension"
            ]
          },
          {
            type: "paragraph",
            content: "Poorly styled content often discourages users from engaging with a website."
          }
        ]
      },
      {
        heading: "CSS Creates Consistency",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website with:"
          },
          {
            type: "output",
            content: "500 Pages"
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "paragraph",
            content: "Every page would require individual formatting."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h2 style="color: blue;">`
          },
          {
            type: "paragraph",
            content: "repeated hundreds of times."
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h2 {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "One rule controls every heading across the entire website."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Consistent branding",
              "Uniform design",
              "Easier updates"
            ]
          }
        ]
      },
      {
        heading: "CSS Reduces Repetition",
        blocks: [
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color:red;">`
          },
          {
            type: "paragraph",
            content: "might appear thousands of times."
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `p {\n    color: red;\n}`
          },
          {
            type: "paragraph",
            content: "the rule is written once."
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less code",
              "Easier maintenance",
              "Fewer mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "This principle becomes extremely important in large applications."
          }
        ]
      },
      {
        heading: "CSS Simplifies Maintenance",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a company changes its brand color."
          },
          {
            type: "paragraph",
            content: "Old color:"
          },
          {
            type: "output",
            content: "blue"
          },
          {
            type: "paragraph",
            content: "New color:"
          },
          {
            type: "output",
            content: "green"
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "paragraph",
            content: "Hundreds of pages must be updated manually."
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {\n    --brand-color: green;\n}`
          },
          {
            type: "paragraph",
            content: "A single modification updates the entire website."
          },
          {
            type: "paragraph",
            content: "This saves enormous amounts of development time."
          }
        ]
      },
      {
        heading: "CSS Enables Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Modern users access websites from:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Phones",
              "Tablets",
              "Laptops",
              "Desktop monitors",
              "TVs"
            ]
          },
          {
            type: "paragraph",
            content: "A layout that works on a desktop may fail on a mobile device."
          },
          {
            type: "paragraph",
            content: "CSS solves this using responsive design."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {\n    body {\n        font-size: 14px;\n    }\n}`
          },
          {
            type: "paragraph",
            content: "The website adapts automatically."
          },
          {
            type: "paragraph",
            content: "Without CSS, modern responsive websites would not exist."
          }
        ]
      },
      {
        heading: "CSS Creates Layouts",
        blocks: [
          {
            type: "paragraph",
            content: "One of CSS's most powerful roles is layout management."
          },
          {
            type: "paragraph",
            content: "Modern CSS provides:"
          },
          {
            type: "paragraph",
            content: "Flexbox"
          },
          {
            type: "code",
            language: "css",
            content: `display: flex;`
          },
          {
            type: "paragraph",
            content: "Used for one-dimensional layouts."
          },
          {
            type: "paragraph",
            content: "Grid"
          },
          {
            type: "code",
            language: "css",
            content: `display: grid;`
          },
          {
            type: "paragraph",
            content: "Used for two-dimensional layouts."
          },
          {
            type: "paragraph",
            content: "Positioning"
          },
          {
            type: "code",
            language: "css",
            content: `position: absolute;`
          },
          {
            type: "paragraph",
            content: "Used for precise placement."
          },
          {
            type: "paragraph",
            content: "These systems allow developers to create:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bars",
              "Dashboards",
              "Product pages",
              "Social media feeds",
              "Complex applications"
            ]
          },
          {
            type: "paragraph",
            content: "HTML alone cannot create these layouts effectively."
          }
        ]
      },
      {
        heading: "CSS Enables Animations and Transitions",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites often include movement."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `button {\n    transition: 0.3s;\n}`
          },
          {
            type: "paragraph",
            content: "Hover effect:"
          },
          {
            type: "code",
            language: "css",
            content: `button:hover {\n    transform: scale(1.1);\n}`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better feedback",
              "Improved usability",
              "More engaging interfaces"
            ]
          },
          {
            type: "paragraph",
            content: "Animations are a major reason modern websites feel interactive."
          }
        ]
      },
      {
        heading: "CSS Improves Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Accessibility means ensuring websites can be used by everyone."
          },
          {
            type: "paragraph",
            content: "CSS helps improve accessibility through:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better contrast",
              "Larger text",
              "Focus indicators",
              "Responsive layouts",
              "Reduced-motion support"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `button:focus {\n    outline: 3px solid blue;\n}`
          },
          {
            type: "paragraph",
            content: "This helps keyboard users navigate the page."
          },
          {
            type: "paragraph",
            content: "Accessibility is now a professional requirement for many organizations."
          }
        ]
      },
      {
        heading: "CSS Improves Website Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners never realize that CSS can improve performance."
          },
          {
            type: "paragraph",
            content: "External CSS files can be cached."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link\nrel="stylesheet"\nhref="styles.css">`
          },
          {
            type: "paragraph",
            content: "After the first visit:"
          },
          {
            type: "paragraph",
            content: "Browser stores CSS locally."
          },
          {
            type: "paragraph",
            content: "Future pages load faster because the stylesheet does not need to be downloaded repeatedly."
          },
          {
            type: "paragraph",
            content: "This improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Speed",
              "User experience",
              "Bandwidth usage"
            ]
          }
        ]
      },
      {
        heading: "CSS Supports Multiple Devices and Media",
        blocks: [
          {
            type: "paragraph",
            content: "One feature often overlooked is that CSS was originally designed to support multiple output formats."
          },
          {
            type: "paragraph",
            content: "A webpage may be displayed on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Monitor",
              "Phone",
              "Tablet",
              "Projector",
              "Printer",
              "Screen reader environment"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media print {\n    nav {\n        display: none;\n    }\n}`
          },
          {
            type: "paragraph",
            content: "The printed version becomes cleaner and easier to read."
          },
          {
            type: "paragraph",
            content: "CSS helps adapt content for different environments."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a news website."
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "All articles appear the same.",
              "No layout.",
              "No branding.",
              "No responsiveness."
            ]
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Professional typography",
              "Responsive design",
              "Consistent colors",
              "Navigation menus",
              "Article layouts",
              "Advertisements",
              "Dark mode"
            ]
          },
          {
            type: "paragraph",
            content: "The difference is dramatic."
          },
          {
            type: "paragraph",
            content: "CSS transforms raw information into a usable product."
          }
        ]
      },
      {
        heading: "Browser Internals: Why CSS Is More Important Than It Appears",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials explain CSS as a styling language."
          },
          {
            type: "paragraph",
            content: "Professionally, CSS is much more than that."
          },
          {
            type: "paragraph",
            content: "When a browser loads a page:"
          },
          {
            type: "flow",
            steps: [
              "HTML & CSS",
              "→",
              "DOM + CSSOM",
              "→",
              "Render Tree",
              "→",
              "Layout",
              "→",
              "Paint"
            ]
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "paragraph",
            content: "The browser still creates a page."
          },
          {
            type: "paragraph",
            content: "However:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layout capabilities become limited.",
              "Responsive design disappears.",
              "Modern UI systems become impossible."
            ]
          },
          {
            type: "paragraph",
            content: "CSS directly influences how browsers calculate size, position, and rendering of every visible element."
          },
          {
            type: "paragraph",
            content: "This means CSS is not merely \"decoration.\""
          },
          {
            type: "paragraph",
            content: "It is part of the browser's rendering engine."
          }
        ]
      },
      {
        heading: "Why CSS Is Called a Stylesheet Language",
        blocks: [
          {
            type: "paragraph",
            content: "Many people call CSS a programming language."
          },
          {
            type: "paragraph",
            content: "Technically, it is not."
          },
          {
            type: "paragraph",
            content: "CSS is a:"
          },
          {
            type: "output",
            content: "Stylesheet Language"
          },
          {
            type: "paragraph",
            content: "Its primary purpose is describing presentation rules."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n}`
          },
          {
            type: "paragraph",
            content: "This does not execute instructions like JavaScript."
          },
          {
            type: "paragraph",
            content: "Instead, it describes how content should be rendered."
          },
          {
            type: "paragraph",
            content: "Understanding this distinction helps explain CSS's design philosophy."
          }
        ]
      },
      {
        heading: "Common Misconceptions About CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Is Only About Colors"
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "Modern CSS handles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layouts",
              "Responsiveness",
              "Animations",
              "Themes",
              "Design systems",
              "User experience"
            ]
          },
          {
            type: "paragraph",
            content: "CSS Is Easy"
          },
          {
            type: "paragraph",
            content: "Basic CSS is easy."
          },
          {
            type: "paragraph",
            content: "Professional CSS involves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cascade",
              "Specificity",
              "Layout algorithms",
              "Rendering performance",
              "Accessibility"
            ]
          },
          {
            type: "paragraph",
            content: "Many experienced developers consider advanced CSS one of the most challenging frontend skills."
          },
          {
            type: "paragraph",
            content: "CSS Is Optional"
          },
          {
            type: "paragraph",
            content: "Technically a webpage can function without CSS."
          },
          {
            type: "paragraph",
            content: "Practically, modern websites depend heavily on CSS."
          },
          {
            type: "paragraph",
            content: "Without it, users would have a poor experience."
          }
        ]
      },
      {
        heading: "Why CSS Remains Essential Today",
        blocks: [
          {
            type: "paragraph",
            content: "Despite the rise of frameworks, libraries, and design systems, CSS remains fundamental."
          },
          {
            type: "paragraph",
            content: "Popular technologies such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Svelte"
            ]
          },
          {
            type: "paragraph",
            content: "all rely on CSS."
          },
          {
            type: "paragraph",
            content: "Even advanced UI frameworks ultimately generate CSS that browsers understand."
          },
          {
            type: "paragraph",
            content: "No frontend technology has replaced CSS."
          },
          {
            type: "paragraph",
            content: "Instead, modern tools build upon it."
          }
        ]
      },
      {
        heading: "Professional Developer Perspective",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often think CSS exists simply to make websites look attractive."
          },
          {
            type: "paragraph",
            content: "Professional developers understand that CSS solves a much larger problem: the separation of content from presentation. This separation improves maintainability, scalability, accessibility, consistency, responsiveness, and performance. Modern CSS is not merely a collection of visual properties—it is a sophisticated rendering language that controls layout systems, responsive behavior, animation engines, theming systems, and user experience across billions of devices. Every professional website relies on CSS not because it makes pages prettier, but because it provides the architecture necessary to build maintainable and scalable interfaces."
          }
        ]
      },
      {
        heading: "Future Learning Connections",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding why CSS exists creates the foundation for learning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Syntax",
              "CSS Selectors",
              "The Cascade",
              "Specificity",
              "Inheritance",
              "Colors",
              "Typography",
              "Box Model",
              "Flexbox",
              "Grid",
              "Positioning",
              "Responsive Design",
              "Animations",
              "CSS Variables",
              "Accessibility",
              "Performance Optimization"
            ]
          },
          {
            type: "paragraph",
            content: "All of these topics build upon the reasons CSS was originally created."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS exists because HTML was never designed to handle complex presentation and visual design. Early websites mixed content and styling together, making pages difficult to maintain and scale. CSS solved this problem by separating structure from presentation, allowing developers to control colors, typography, spacing, layouts, responsiveness, animations, accessibility, and overall user experience from a centralized system. Beyond making websites visually appealing, CSS improves maintainability, consistency, performance, scalability, and adaptability across different devices and media types. Modern web development depends on CSS not only for styling but also for layout management, responsive design, rendering control, and interface architecture, making it one of the most essential technologies on the web."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 CSS is not just a tool for decoration—it is the architectural foundation of the visual web. By strictly separating structure from style, it enables developers to build interfaces that are cleaner to write, easier to debug, and capable of adapting to an infinite variety of screens and devices."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : CSS Syntax
============================= */
    "css-syntax": {
    title: "CSS Syntax",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "Before you can style a webpage, you must understand the language structure that CSS follows."
          },
          {
            type: "paragraph",
            content: "Just as English has grammar rules and programming languages have syntax rules, CSS also follows a specific syntax that browsers use to understand styling instructions."
          },
          {
            type: "paragraph",
            content: "Every color change, font modification, animation, layout adjustment, and responsive design rule in CSS is written using this syntax."
          },
          {
            type: "paragraph",
            content: "Fortunately, CSS syntax is relatively simple to learn. However, understanding it deeply is important because almost every CSS concept you will learn later—selectors, specificity, inheritance, animations, Flexbox, Grid, and responsive design—builds upon the same syntax foundation."
          }
        ]
      },
      {
        heading: "What is CSS Syntax?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS syntax refers to the set of rules used to write CSS instructions correctly."
          },
          {
            type: "paragraph",
            content: "A CSS rule tells the browser:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which element should be styled?",
              "What property should be changed?",
              "What value should be applied?"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "This rule tells the browser:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Select all h1 elements",
              "Apply the color property",
              "Set its value to blue"
            ]
          },
          {
            type: "paragraph",
            content: "The browser then renders all <h1> elements in blue."
          }
        ]
      },
      {
        heading: "Basic Structure of a CSS Rule",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS rule consists of two major parts:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "output",
            content: [
              "Selector",
              "+",
              "Declaration Block"
            ]
          },
          {
            type: "paragraph",
            content: "Let's break it down."
          }
        ]
      },
      {
        heading: "Selector",
        blocks: [
          {
            type: "paragraph",
            content: "The selector identifies the HTML element(s) that should receive the styles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "h1"
          },
          {
            type: "paragraph",
            content: "This selector targets:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Heading One</h1>
<h1>Heading Two</h1>`
          },
          {
            type: "paragraph",
            content: "Both headings will receive the styles defined in the rule."
          }
        ]
      },
      {
        heading: "Declaration Block",
        blocks: [
          {
            type: "paragraph",
            content: "Everything inside the curly braces forms the declaration block."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `{
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "A declaration block contains one or more declarations."
          }
        ]
      },
      {
        heading: "Declaration",
        blocks: [
          {
            type: "paragraph",
            content: "A declaration consists of:"
          },
          {
            type: "output",
            content: "Property + Value"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: [
              "color → Property",
              "blue  → Value"
            ]
          },
          {
            type: "paragraph",
            content: "The declaration tells the browser what to change and what new setting to use."
          }
        ]
      },
      {
        heading: "Visual Breakdown",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Detailed structure:"
          },
          {
            type: "output",
            content: [
              "h1          → Selector",
              "",
              "{",
              "    color   → Property",
              "    :",
              "    blue    → Value",
              "    ;",
              "}"
            ]
          },
          {
            type: "paragraph",
            content: "Every CSS rule follows this pattern."
          }
        ]
      },
      {
        heading: "CSS Rule Anatomy",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red;
    font-size: 18px;
    text-align: center;
}`
          },
          {
            type: "paragraph",
            content: "Breakdown:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Selector",
                description: "p - Targets all paragraphs."
              },
              {
                title: "Declaration Block",
                description: "{ color: red; font-size: 18px; text-align: center; } - Contains multiple declarations."
              },
              {
                title: "Individual Declarations",
                description: "color: red; font-size: 18px; text-align: center; - Each declaration controls a specific aspect of the element."
              }
            ]
          }
        ]
      },
      {
        heading: "Property",
        blocks: [
          {
            type: "paragraph",
            content: "A property defines what aspect of an element should change."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "color",
              "background-color",
              "font-size",
              "margin",
              "border"
            ]
          },
          {
            type: "paragraph",
            content: "Properties are predefined by the CSS specification."
          },
          {
            type: "paragraph",
            content: "You cannot invent your own property names."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "css",
            content: `text-color: blue;`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          }
        ]
      },
      {
        heading: "Value",
        blocks: [
          {
            type: "paragraph",
            content: "A value specifies how the property should be applied."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Property:"
          },
          {
            type: "output",
            content: "color"
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "output",
            content: "blue"
          },
          {
            type: "paragraph",
            content: "Different properties accept different types of values."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: 20px;
width: 50%;
display: flex;
background-color: #ff0000;`
          }
        ]
      },
      {
        heading: "Curly Braces",
        blocks: [
          {
            type: "paragraph",
            content: "CSS declarations are enclosed within curly braces."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "The braces define the start and end of the declaration block."
          },
          {
            type: "paragraph",
            content: "Without braces:"
          },
          {
            type: "code",
            language: "css",
            content: `h1
color: blue;`
          },
          {
            type: "paragraph",
            content: "The browser cannot interpret the rule correctly."
          }
        ]
      },
      {
        heading: "Colon (:)",
        blocks: [
          {
            type: "paragraph",
            content: "The colon separates a property from its value."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "output",
            content: "Property : Value"
          },
          {
            type: "paragraph",
            content: "Without the colon:"
          },
          {
            type: "code",
            language: "css",
            content: `color blue;`
          },
          {
            type: "paragraph",
            content: "The rule becomes invalid."
          }
        ]
      },
      {
        heading: "Semicolon (;)",
        blocks: [
          {
            type: "paragraph",
            content: "The semicolon marks the end of a declaration."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Although the final declaration in a block may technically omit the semicolon:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue
}`
          },
          {
            type: "paragraph",
            content: "Professional developers almost always include it:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "This prevents future errors when additional declarations are added."
          }
        ]
      },
      {
        heading: "Multiple Declarations",
        blocks: [
          {
            type: "paragraph",
            content: "A selector can contain multiple declarations."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: navy;
    font-size: 36px;
    text-align: center;
}`
          },
          {
            type: "paragraph",
            content: "The browser applies all three styles."
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navy heading",
              "36px font size",
              "Centered text"
            ]
          }
        ]
      },
      {
        heading: "Multiple Rules",
        blocks: [
          {
            type: "paragraph",
            content: "A stylesheet usually contains many CSS rules."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: navy;
}

p {
    color: gray;
}

button {
    background-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Each rule targets different elements."
          }
        ]
      },
      {
        heading: "CSS Syntax Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>

<p>Hello World</p>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

p {
    color: gray;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blue heading",
              "Gray paragraph"
            ]
          },
          {
            type: "paragraph",
            content: "This demonstrates the basic relationship between HTML and CSS syntax."
          }
        ]
      },
      {
        heading: "Whitespace in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS ignores most extra whitespace."
          },
          {
            type: "paragraph",
            content: "These examples are equivalent:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}
h1{color:blue;}
h1
{
color:
blue;
}`
          },
          {
            type: "paragraph",
            content: "The browser interprets all of them the same way."
          },
          {
            type: "paragraph",
            content: "However, proper formatting improves readability."
          },
          {
            type: "paragraph",
            content: "Preferred:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          }
        ]
      },
      {
        heading: "CSS Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Comments allow developers to write notes inside CSS."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Comment */`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Main heading styles */

h1 {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Comments are ignored by browsers."
          },
          {
            type: "paragraph",
            content: "They are useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation",
              "Explanations",
              "Organization",
              "Team collaboration"
            ]
          }
        ]
      },
      {
        heading: "Single-Line vs Multi-Line Comments",
        blocks: [
          {
            type: "paragraph",
            content: "CSS officially uses:"
          },
          {
            type: "code",
            language: "css",
            content: `/* comment */`
          },
          {
            type: "paragraph",
            content: "for both single-line and multi-line comments."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
Primary Theme Color
Used Across Website
*/`
          },
          {
            type: "paragraph",
            content: "Unlike JavaScript:"
          },
          {
            type: "code",
            language: "javascript",
            content: `// comment`
          },
          {
            type: "paragraph",
            content: "CSS does not support // comments."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "css",
            content: `// Heading Color`
          }
        ]
      },
      {
        heading: "CSS Is Case-Insensitive (Mostly)",
        blocks: [
          {
            type: "paragraph",
            content: "Property names are generally case-insensitive."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `COLOR: blue;`
          },
          {
            type: "paragraph",
            content: "works similarly to:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "However, professional developers always use lowercase."
          },
          {
            type: "paragraph",
            content: "Recommended:"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Additionally, some values may be case-sensitive depending on context."
          },
          {
            type: "paragraph",
            content: "Consistency is important."
          }
        ]
      },
      {
        heading: "CSS Syntax and Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "A selector can target many types of elements."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Element selector:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Class selector:"
          },
          {
            type: "code",
            language: "css",
            content: `.note {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "ID selector:"
          },
          {
            type: "code",
            language: "css",
            content: `#header {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Although selectors become much more advanced later, they all use the same basic syntax structure."
          }
        ]
      },
      {
        heading: "CSS Syntax and Grouping",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple selectors can share the same declarations."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1, h2, h3 {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: [
              "Apply navy color to",
              "h1",
              "h2",
              "h3"
            ]
          },
          {
            type: "paragraph",
            content: "Grouping reduces code duplication."
          }
        ]
      },
      {
        heading: "CSS Syntax and Nesting of Rules",
        blocks: [
          {
            type: "paragraph",
            content: "Standard CSS rules cannot be placed inside other rules."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {

    color: blue;

    p {
        color: red;
    }

}`
          },
          {
            type: "paragraph",
            content: "Traditional CSS does not allow this structure."
          },
          {
            type: "paragraph",
            content: "Modern CSS now supports native nesting in certain situations, but it follows specific rules that will be discussed later."
          },
          {
            type: "paragraph",
            content: "For now, think of each CSS rule as a separate block."
          }
        ]
      },
      {
        heading: "Browser Internals: How CSS Syntax Is Parsed",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials stop after explaining selectors and declarations."
          },
          {
            type: "paragraph",
            content: "Professional developers benefit from understanding what happens inside the browser."
          },
          {
            type: "paragraph",
            content: "When the browser downloads CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "it performs several steps:"
          },
          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Step 1: Read raw CSS text. h1 { color: blue; }",
              "Step 2: Tokenization - The browser breaks the text into tokens.",
              "Step 3: Parsing - The browser verifies that the syntax follows CSS grammar rules.",
              "Step 4: CSSOM Construction - The rule becomes part of the CSS Object Model (CSSOM).",
              "Step 5: Style Calculation - The browser determines which elements match the selector.",
              "Step 6: Rendering - Styles are applied to the webpage."
            ]
          },
          {
            type: "paragraph",
            content: "Simplified flow:"
          },
          {
            type: "flow",
            steps: [
              "CSS File",
              "→",
              "Tokenizer",
              "→",
              "Parser",
              "→",
              "CSSOM",
              "→",
              "Style Calculation",
              "→",
              "Render Tree",
              "→",
              "Display"
            ]
          },
          {
            type: "paragraph",
            content: "This process occurs every time CSS is loaded."
          }
        ]
      },
      {
        heading: "Error Handling in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "One of CSS's most interesting features is its fault tolerance."
          },
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
    random-property: test;
    font-size: 18px;
}`
          },
          {
            type: "paragraph",
            content: "The browser encounters:"
          },
          {
            type: "output",
            content: "random-property"
          },
          {
            type: "paragraph",
            content: "which does not exist."
          },
          {
            type: "paragraph",
            content: "Instead of failing completely:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Apply color",
              "Ignore invalid property",
              "Apply font-size"
            ]
          },
          {
            type: "paragraph",
            content: "The rest of the rule still works."
          },
          {
            type: "paragraph",
            content: "This forgiving behavior helps maintain website stability."
          }
        ]
      },
      {
        heading: "Common CSS Syntax Errors",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Missing Colon",
                answer: "Leaving out the colon prevents the browser from separating the property from the value, making the rule invalid.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `color blue;`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `color: blue;`
                  }
                ]
              },
              {
                question: "Missing Semicolon",
                answer: "Omitting the semicolon at the end of a declaration causes the browser to merge it with the next line, breaking both styles.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `color: blue
font-size: 18px;`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `color: blue;
font-size: 18px;`
                  }
                ]
              },
              {
                question: "Missing Curly Brace",
                answer: "Forgetting the opening or closing curly brace breaks the structure of the entire declaration block.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `h1
    color: blue;
}`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `h1 {
    color: blue;
}`
                  }
                ]
              },
              {
                question: "Invalid Property Name",
                answer: "Using a property that does not exist in the CSS specification will cause that specific declaration to be ignored.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `text-color: red;`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `color: red;`
                  }
                ]
              },
              {
                question: "Invalid Value",
                answer: "Providing a value that the property doesn't accept will be ignored, but the rest of the valid properties in the block will still apply.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `font-size: giant;`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `font-size: 24px;`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        heading: "Best Practices for Writing CSS Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "Use Consistent Indentation"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Use Lowercase Property Names"
          },
          {
            type: "code",
            language: "css",
            content: `color: red;`
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `COLOR: RED;`
          },
          {
            type: "paragraph",
            content: "Always End Declarations with Semicolons"
          },
          {
            type: "code",
            language: "css",
            content: `color: blue;`
          },
          {
            type: "paragraph",
            content: "Use Meaningful Comments"
          },
          {
            type: "code",
            language: "css",
            content: `/* Navigation Bar Styles */`
          },
          {
            type: "paragraph",
            content: "Keep Rules Organized"
          },
          {
            type: "paragraph",
            content: "Group related styles together."
          }
        ]
      },
      {
        heading: "Real-World Developer Notes",
        blocks: [
          {
            type: "paragraph",
            content: "In small tutorials, CSS syntax appears extremely simple. However, modern CSS files in professional applications can contain thousands of rules, hundreds of selectors, custom properties, media queries, animations, and advanced layout systems. Clean syntax becomes increasingly important as projects grow. Many large teams use code formatters such as Prettier and style guides to ensure that CSS remains consistent and maintainable. While browsers are forgiving of minor syntax mistakes, professional developers aim to write clear, predictable, and standards-compliant CSS from the beginning."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS syntax is the grammatical structure used to write CSS rules. Every rule consists of a selector and a declaration block, where declarations are made up of properties and values. Curly braces define declaration blocks, colons separate properties from values, and semicolons terminate declarations. CSS supports multiple rules, grouped selectors, comments, and flexible whitespace while maintaining a simple and readable structure. Behind the scenes, browsers tokenize and parse CSS syntax to build the CSS Object Model (CSSOM), which is later used during rendering. Understanding CSS syntax is essential because every CSS feature—from colors and typography to Flexbox, Grid, animations, and responsive design—is built upon these same foundational rules."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While browsers are incredibly forgiving with CSS syntax errors, relying on that fault tolerance can lead to unexpected visual bugs. Developing the habit of writing clean, properly indented, and fully terminated CSS rules from day one will save you countless hours of debugging in the future."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : CSS Selectors
============================= */
    "css-selectors": {
    title: "CSS Selectors",
    readingTime: "26 min",
        
    content: [
        {
        heading: "CSS Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "After learning CSS syntax, the next question is:"
          },
          {
            type: "quote",
            content: "How does CSS know which HTML element should receive a style?"
          },
          {
            type: "paragraph",
            content: "The answer is CSS Selectors."
          },
          {
            type: "paragraph",
            content: "Selectors are one of the most important concepts in CSS because they determine which elements are targeted by styling rules."
          },
          {
            type: "paragraph",
            content: "Every CSS rule begins with a selector."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "h1 → Selector"
          },
          {
            type: "paragraph",
            content: "The selector tells the browser:"
          },
          {
            type: "quote",
            content: "\"Apply these styles to all h1 elements.\""
          },
          {
            type: "paragraph",
            content: "Without selectors, CSS would have no way to identify the elements that should be styled."
          },
          {
            type: "paragraph",
            content: "Understanding selectors is essential because they are used in every CSS project, from simple websites to large-scale web applications."
          }
        ]
      },
      {
        heading: "What is a CSS Selector?",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS selector is a pattern used to select one or more HTML elements."
          },
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `selector {
    property: value;
}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: [
              "Select all <p> elements",
              "Apply red text color"
            ]
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<p>Paragraph One</p>

<p>Paragraph Two</p>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Both paragraphs become red."
          }
        ]
      },
      {
        heading: "Why Selectors Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Selectors allow developers to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Target specific elements",
              "Apply styles efficiently",
              "Reduce code duplication",
              "Build complex layouts",
              "Create interactive effects",
              "Control large websites easily"
            ]
          },
          {
            type: "paragraph",
            content: "Without selectors, every element would require individual styling."
          }
        ]
      },
      {
        heading: "Types of CSS Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides several categories of selectors:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Basic Selectors",
              "Universal Selector",
              "Element Selector",
              "Class Selector",
              "ID Selector"
            ]
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grouping Selectors",
              "Multiple Selector Groups"
            ]
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Combinator Selectors",
              "Descendant Selector",
              "Child Selector",
              "Adjacent Sibling Selector",
              "General Sibling Selector"
            ]
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Attribute Selectors",
              "Attribute Presence",
              "Attribute Value Matching"
            ]
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pseudo-Class Selectors",
              "Hover",
              "Focus",
              "Active",
              "Checked",
              "First Child",
              "Last Child"
            ]
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pseudo-Element Selectors"
            ]
          },
          {
            type: "paragraph",
            content: "Modern CSS also includes advanced selectors introduced in Selectors Level 4."
          }
        ]
      },
      {
        heading: "Universal Selector (*)",
        blocks: [
          {
            type: "paragraph",
            content: "The universal selector matches every element."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `* {
    margin: 0;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Select every element on the page."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `* {
    box-sizing: border-box;
}`
          },
          {
            type: "paragraph",
            content: "Common usage:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CSS resets",
              "Global styling"
            ]
          }
        ]
      },
      {
        heading: "Element Selector",
        blocks: [
          {
            type: "paragraph",
            content: "Also called the Type Selector."
          },
          {
            type: "paragraph",
            content: "Targets all elements of a specific HTML tag."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Targets:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Heading One</h1>

<h1>Heading Two</h1>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "All h1 elements become blue."
          },
          {
            type: "paragraph",
            content: "More examples:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-size: 18px;
}
button {
    background-color: green;
}`
          }
        ]
      },
      {
        heading: "Class Selector",
        blocks: [
          {
            type: "paragraph",
            content: "Class selectors target elements using the class attribute."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: ".className"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="highlight">
Important Text
</p>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.highlight {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Important Text becomes red."
          }
        ]
      },
      {
        heading: "Why Classes Are Popular",
        blocks: [
          {
            type: "paragraph",
            content: "A class can be reused multiple times."
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="highlight">First</p>

<p class="highlight">Second</p>

<h2 class="highlight">Third</h2>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.highlight {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "All three elements receive the style."
          },
          {
            type: "paragraph",
            content: "Classes are the most commonly used selector type in professional development."
          }
        ]
      },
      {
        heading: "ID Selector",
        blocks: [
          {
            type: "paragraph",
            content: "Targets an element using its id attribute."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "#idName"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 id="mainTitle">
Welcome
</h1>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `#mainTitle {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Only that element is styled."
          }
        ]
      },
      {
        heading: "ID Rules",
        blocks: [
          {
            type: "paragraph",
            content: "An ID should be unique within a page."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 id="header">`
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 id="header">
<p id="header">`
          },
          {
            type: "paragraph",
            content: "Multiple elements should not share the same ID."
          }
        ]
      },
      {
        heading: "Grouping Selector",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple selectors can share the same styles."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

h2 {
    color: blue;
}

h3 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `h1, h2, h3 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less code",
              "Easier maintenance",
              "Better readability"
            ]
          }
        ]
      },
      {
        heading: "Descendant Selector",
        blocks: [
          {
            type: "paragraph",
            content: "Selects elements inside another element."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "ancestor descendant"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `div p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div>
    <p>Inside Div</p>
</div>

<p>Outside Div</p>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Inside Div → Red",
              "Outside Div → Unchanged"
            ]
          },
          {
            type: "paragraph",
            content: "The paragraph must be somewhere inside the div."
          }
        ]
      },
      {
        heading: "Child Selector (>)",
        blocks: [
          {
            type: "paragraph",
            content: "Targets direct children only."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "parent > child"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `div > p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div>
    <p>Direct Child</p>

    <section>
        <p>Nested Child</p>
    </section>
</div>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Direct Child → Blue",
              "Nested Child → Not Selected"
            ]
          },
          {
            type: "paragraph",
            content: "Only immediate children match."
          }
        ]
      },
      {
        heading: "Adjacent Sibling Selector (+)",
        blocks: [
          {
            type: "paragraph",
            content: "Targets the next sibling element."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "element1 + element2"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 + p {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Title</h1>

<p>Paragraph</p>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Paragraph becomes green."
          },
          {
            type: "paragraph",
            content: "The paragraph must immediately follow the heading."
          }
        ]
      },
      {
        heading: "General Sibling Selector (~)",
        blocks: [
          {
            type: "paragraph",
            content: "Targets all matching siblings after an element."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "element1 ~ element2"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 ~ p {
    color: orange;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Heading</h1>

<p>One</p>

<p>Two</p>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Both paragraphs become orange."
          }
        ]
      },
      {
        heading: "Attribute Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Select elements based on attributes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `input[type] {
    border: 1px solid black;
}`
          },
          {
            type: "paragraph",
            content: "Targets:"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text">

<input type="email">`
          },
          {
            type: "paragraph",
            content: "Exact Attribute Value"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="email"] {
    background-color: lightyellow;
}`
          },
          {
            type: "paragraph",
            content: "Targets only:"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="email">`
          },
          {
            type: "paragraph",
            content: "Attribute Starts With (^=)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a[href^="https"] {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="https://example.com">`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Attribute starts with \"https\""
          },
          {
            type: "paragraph",
            content: "Attribute Ends With ($=)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `img[src$=".png"] {
    border: 2px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "output",
            content: "Ends with .png"
          },
          {
            type: "paragraph",
            content: "Attribute Contains (*=)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a[href*="shop"] {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "output",
            content: [
              "Contains the word \"shop\"",
              "anywhere in the value."
            ]
          }
        ]
      },
      {
        heading: "Pseudo-Class Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-classes select elements based on state."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "selector:pseudo-class"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `button:hover {
    background-color: blue;
}`
          },
          {
            type: "paragraph",
            content: ":hover"
          },
          {
            type: "paragraph",
            content: "Triggered when the mouse pointer moves over an element."
          },
          {
            type: "code",
            language: "css",
            content: `button:hover {
    background-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Very common in navigation menus and buttons."
          },
          {
            type: "paragraph",
            content: ":focus"
          },
          {
            type: "paragraph",
            content: "Triggered when an element receives focus."
          },
          {
            type: "code",
            language: "css",
            content: `input:focus {
    border-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Common in forms."
          },
          {
            type: "paragraph",
            content: ":active"
          },
          {
            type: "paragraph",
            content: "Triggered while an element is being clicked."
          },
          {
            type: "code",
            language: "css",
            content: `button:active {
    transform: scale(0.95);
}`
          },
          {
            type: "paragraph",
            content: ":visited"
          },
          {
            type: "paragraph",
            content: "Styles visited links."
          },
          {
            type: "code",
            language: "css",
            content: `a:visited {
    color: purple;
}`
          },
          {
            type: "paragraph",
            content: ":checked"
          },
          {
            type: "paragraph",
            content: "Used with checkboxes and radio buttons."
          },
          {
            type: "code",
            language: "css",
            content: `input:checked {
    outline: 2px solid green;
}`
          },
          {
            type: "paragraph",
            content: ":first-child"
          },
          {
            type: "paragraph",
            content: "Selects the first child element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `li:first-child {
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: ":last-child"
          },
          {
            type: "paragraph",
            content: "Selects the last child element."
          },
          {
            type: "code",
            language: "css",
            content: `li:last-child {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: ":nth-child()"
          },
          {
            type: "paragraph",
            content: "One of the most powerful selectors."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `li:nth-child(2) {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Selects:"
          },
          {
            type: "output",
            content: "Second list item"
          },
          {
            type: "paragraph",
            content: "Odd Rows"
          },
          {
            type: "code",
            language: "css",
            content: `tr:nth-child(odd) {
    background: #eee;
}`
          },
          {
            type: "paragraph",
            content: "Even Rows"
          },
          {
            type: "code",
            language: "css",
            content: `tr:nth-child(even) {
    background: white;
}`
          },
          {
            type: "paragraph",
            content: "Frequently used in tables."
          }
        ]
      },
      {
        heading: "Pseudo-Element Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements target a specific part of an element."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "selector::pseudo-element"
          },
          {
            type: "paragraph",
            content: "::first-letter"
          },
          {
            type: "paragraph",
            content: "Styles the first letter."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p::first-letter {
    font-size: 32px;
}`
          },
          {
            type: "paragraph",
            content: "::first-line"
          },
          {
            type: "paragraph",
            content: "Styles the first line."
          },
          {
            type: "code",
            language: "css",
            content: `p::first-line {
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "::before"
          },
          {
            type: "paragraph",
            content: "Inserts content before an element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1::before {
    content: "★ ";
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "★ Heading"
          },
          {
            type: "paragraph",
            content: "::after"
          },
          {
            type: "paragraph",
            content: "Inserts content after an element."
          },
          {
            type: "code",
            language: "css",
            content: `h1::after {
    content: " ✓";
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Heading ✓"
          }
        ]
      },
      {
        heading: "Combining Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Selectors can be combined."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `div.highlight p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: [
              "Paragraphs inside a div",
              "that has class \"highlight\""
            ]
          },
          {
            type: "paragraph",
            content: "Combining selectors allows extremely precise targeting."
          }
        ]
      },
      {
        heading: "Advanced Selectors (Modern CSS)",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginner tutorials stop at basic selectors."
          },
          {
            type: "paragraph",
            content: "Modern CSS introduces powerful selectors that professional developers increasingly use."
          },
          {
            type: "paragraph",
            content: ":not()"
          },
          {
            type: "paragraph",
            content: "Selects elements that do NOT match a condition."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `button:not(.primary) {
    background: gray;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "All buttons except .primary"
          },
          {
            type: "paragraph",
            content: ":is()"
          },
          {
            type: "paragraph",
            content: "Groups multiple selectors efficiently."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:is(h1, h2, h3) {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to:"
          },
          {
            type: "code",
            language: "css",
            content: `h1, h2, h3 {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "but more flexible in complex selectors."
          },
          {
            type: "paragraph",
            content: ":where()"
          },
          {
            type: "paragraph",
            content: "Similar to :is()."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:where(section, article) p {
    line-height: 1.8;
}`
          },
          {
            type: "paragraph",
            content: "Special advantage:"
          },
          {
            type: "output",
            content: "Adds zero specificity"
          },
          {
            type: "paragraph",
            content: "This is extremely useful in large CSS systems."
          },
          {
            type: "paragraph",
            content: ":has() — The Parent Selector Revolution"
          },
          {
            type: "paragraph",
            content: "For years CSS could only select downward."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `div p`
          },
          {
            type: "paragraph",
            content: "Selects children."
          },
          {
            type: "paragraph",
            content: "Modern CSS now supports:"
          },
          {
            type: "code",
            language: "css",
            content: `.card:has(img) {
    border: 2px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Select cards that contain images."
          },
          {
            type: "paragraph",
            content: "This capability was considered impossible for many years and is one of the biggest advances in CSS selectors."
          },
          {
            type: "paragraph",
            content: "Many tutorials still do not explain its significance."
          }
        ]
      },
      {
        heading: "Browser Internals: How Selectors Work",
        blocks: [
          {
            type: "paragraph",
            content: "When CSS loads:"
          },
          {
            type: "code",
            language: "css",
            content: `.highlight {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "The browser:"
          },
          {
            type: "paragraph",
            content: "Step 1"
          },
          {
            type: "paragraph",
            content: "Builds the DOM tree."
          },
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "DOM"
            ]
          },
          {
            type: "paragraph",
            content: "Step 2"
          },
          {
            type: "paragraph",
            content: "Builds the CSSOM."
          },
          {
            type: "flow",
            steps: [
              "CSS",
              "→",
              "CSSOM"
            ]
          },
          {
            type: "paragraph",
            content: "Step 3"
          },
          {
            type: "paragraph",
            content: "Performs selector matching."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: ".highlight"
          },
          {
            type: "paragraph",
            content: "The browser searches for:"
          },
          {
            type: "output",
            content: "Elements whose class = highlight"
          },
          {
            type: "paragraph",
            content: "Step 4"
          },
          {
            type: "paragraph",
            content: "Applies declarations."
          },
          {
            type: "flow",
            steps: [
              "Match Found",
              "→",
              "Style Applied"
            ]
          },
          {
            type: "paragraph",
            content: "This process happens for every selector on the page."
          },
          {
            type: "paragraph",
            content: "Because selector matching affects rendering performance, professional developers often prefer simpler selectors over unnecessarily complex ones."
          }
        ]
      },
      {
        heading: "Selector Performance: A Professional Insight",
        blocks: [
          {
            type: "paragraph",
            content: "Most beginner tutorials ignore selector performance."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Fast:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
}`
          },
          {
            type: "paragraph",
            content: "Usually slower:"
          },
          {
            type: "code",
            language: "css",
            content: `body main section article div.card p span {
}`
          },
          {
            type: "paragraph",
            content: "Modern browsers are highly optimized, but excessively complex selectors can still increase style calculation costs on large applications."
          },
          {
            type: "paragraph",
            content: "Best practice:"
          },
          {
            type: "output",
            content: [
              "Keep selectors simple,",
              "clear, and maintainable."
            ]
          }
        ]
      },
      {
        heading: "Common Selector Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Forgetting the Dot for Classes",
                answer: "Classes must always be prefixed with a dot. Omitting it causes the browser to look for a non-existent HTML element instead of a class.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `highlight {
}`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `.highlight {
}`
                  }
                ]
              },
              {
                question: "Forgetting the Hash for IDs",
                answer: "IDs must be prefixed with a hash symbol. If you omit it, the browser treats it as a tag name.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `header {
}`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `#header {
}`
                  }
                ]
              },
              {
                question: "Confusing Child and Descendant Selectors",
                answer: "A descendant selector (space) targets any nested element regardless of depth. A child selector (>) only targets direct immediate children.",
                examples: [
                  {
                    title: "Descendant (Any nested paragraph)",
                    language: "css",
                    content: `div p`
                  },
                  {
                    title: "Child (Direct child only)",
                    language: "css",
                    content: `div > p`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        heading: "Real-World Developer Notes",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers spend far more time working with selectors than beginners realize. Modern websites often contain thousands of elements, and efficient selectors are essential for maintainability. In large projects, class selectors are generally preferred because they are reusable, predictable, and easy to scale. Advanced selectors such as :is(), :where(), and :has() are becoming increasingly important in modern CSS architecture, enabling developers to write cleaner and more expressive stylesheets. Understanding selectors deeply is one of the biggest steps toward mastering CSS."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS selectors are patterns used to target HTML elements and apply styles to them. They include basic selectors such as element, class, ID, and universal selectors; combinator selectors such as descendant, child, and sibling selectors; attribute selectors; pseudo-classes; and pseudo-elements. Modern CSS also provides advanced selectors like :not(), :is(), :where(), and :has() for more expressive styling. Behind the scenes, browsers use selectors during style calculation to match elements in the DOM and apply CSS rules. Mastering selectors is essential because they form the foundation of every CSS stylesheet, from simple webpages to complex modern web applications."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While it's tempting to use complex descendant selectors to target deeply nested elements, relying too heavily on them can make your CSS fragile and hard to maintain. A good rule of thumb is to keep your selectors as flat and straightforward as possible—using well-named classes is often the most professional approach."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : CSS Comments
============================= */
    "css-comments": {
    title: "CSS Comments",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Comments",
        blocks: [
          {
            type: "paragraph",
            content: "As CSS files grow larger, they often contain hundreds or even thousands of lines of code. Without proper organization, understanding, maintaining, and updating styles can become difficult."
          },
          {
            type: "paragraph",
            content: "This is where CSS comments become useful."
          },
          {
            type: "paragraph",
            content: "Comments allow developers to add notes, explanations, reminders, documentation, and section labels inside CSS code without affecting how the webpage looks or behaves."
          },
          {
            type: "paragraph",
            content: "The browser completely ignores comments during CSS processing, making them an excellent tool for improving code readability and maintainability."
          }
        ]
      },
      {
        heading: "What Are CSS Comments?",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS comment is a piece of text written inside a stylesheet that is ignored by the browser."
          },
          {
            type: "paragraph",
            content: "Comments are intended for developers, not users."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* This is a CSS comment */

h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "The comment does not affect the styling."
          },
          {
            type: "paragraph",
            content: "The browser only processes:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          }
        ]
      },
      {
        heading: "Why Use CSS Comments?",
        blocks: [
          {
            type: "paragraph",
            content: "Comments help developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Explain code",
              "Organize large stylesheets",
              "Document design decisions",
              "Leave notes for team members",
              "Temporarily disable CSS rules",
              "Improve code maintenance",
              "Make debugging easier"
            ]
          },
          {
            type: "paragraph",
            content: "Consider this example:"
          },
          {
            type: "code",
            language: "css",
            content: `.header {
    background: #003366;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "A future developer may not know why this color was chosen."
          },
          {
            type: "paragraph",
            content: "Using comments:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Company brand color */

.header {
    background: #003366;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "Now the purpose is clear."
          }
        ]
      },
      {
        heading: "CSS Comment Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "CSS comments begin with:"
          },
          {
            type: "output",
            content: "/*"
          },
          {
            type: "paragraph",
            content: "and end with:"
          },
          {
            type: "output",
            content: "*/"
          },
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Comment Text */`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Styling the main heading */

h1 {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Everything between:"
          },
          {
            type: "output",
            content: "/*"
          },
          {
            type: "paragraph",
            content: "and"
          },
          {
            type: "output",
            content: "*/"
          },
          {
            type: "paragraph",
            content: "is treated as a comment."
          }
        ]
      },
      {
        heading: "Single-Line Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Although CSS does not officially have a separate single-line comment syntax, developers often write short comments on one line."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Navigation Styles */

nav {
    background: black;
}`
          },
          {
            type: "paragraph",
            content: "This is the most common comment style."
          }
        ]
      },
      {
        heading: "Multi-Line Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Comments can span multiple lines."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
This section controls
the appearance of the
website header.
*/

header {
    background: #222;
}`
          },
          {
            type: "paragraph",
            content: "Multi-line comments are useful for detailed explanations."
          }
        ]
      },
      {
        heading: "Commenting Large Sections",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers use comments to divide large stylesheets into logical sections."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* ====================
   HEADER SECTION
==================== */

header {
    background: black;
}

/* ====================
   NAVIGATION SECTION
==================== */

nav {
    padding: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easier navigation",
              "Better readability",
              "Faster maintenance"
            ]
          },
          {
            type: "paragraph",
            content: "This technique is widely used in professional projects."
          }
        ]
      },
      {
        heading: "Using Comments to Explain Complex Code",
        blocks: [
          {
            type: "paragraph",
            content: "Simple CSS usually needs little explanation."
          },
          {
            type: "paragraph",
            content: "However, complex rules often benefit from comments."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Centering using Flexbox */

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`
          },
          {
            type: "paragraph",
            content: "Without the comment, beginners may not immediately understand the purpose."
          }
        ]
      },
      {
        heading: "Temporarily Disabling CSS Code",
        blocks: [
          {
            type: "paragraph",
            content: "One useful feature of comments is that they can disable CSS rules temporarily."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
h1 {
    color: red;
}
*/`
          },
          {
            type: "paragraph",
            content: "The browser ignores the entire rule."
          },
          {
            type: "paragraph",
            content: "This technique is frequently used during:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Testing",
              "Debugging",
              "Experimentation",
              "Design revisions"
            ]
          }
        ]
      },
      {
        heading: "Commenting Individual Properties",
        blocks: [
          {
            type: "paragraph",
            content: "Developers often comment specific properties."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 300px;

    /* Disabled temporarily */
    /* box-shadow: 0 0 10px gray; */
}`
          },
          {
            type: "paragraph",
            content: "The property is ignored while the rest of the rule remains active."
          }
        ]
      },
      {
        heading: "Comments Inside CSS Rules",
        blocks: [
          {
            type: "paragraph",
            content: "Comments can appear almost anywhere."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;

    /* Increase spacing */
    margin-bottom: 20px;
}`
          },
          {
            type: "paragraph",
            content: "The browser simply skips the comment and continues processing the rule."
          }
        ]
      },
      {
        heading: "Comments Between Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

/* Main content styles */

p {
    color: gray;
}`
          },
          {
            type: "paragraph",
            content: "Comments can separate logical sections of code."
          }
        ]
      },
      {
        heading: "Comments and Whitespace",
        blocks: [
          {
            type: "paragraph",
            content: "Comments do not affect formatting."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Comment */

h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Produces the same result as:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "The browser ignores the comment entirely."
          }
        ]
      },
      {
        heading: "Nested Comments Are Not Allowed",
        blocks: [
          {
            type: "paragraph",
            content: "One common mistake is attempting to place a comment inside another comment."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
Outer Comment

/* Inner Comment */

*/`
          },
          {
            type: "paragraph",
            content: "CSS does not support nested comments."
          },
          {
            type: "paragraph",
            content: "Browsers may interpret this incorrectly and produce unexpected results."
          },
          {
            type: "paragraph",
            content: "Always close one comment before starting another."
          }
        ]
      },
      {
        heading: "CSS Comments vs JavaScript Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often confuse CSS comments with JavaScript comments."
          },
          {
            type: "paragraph",
            content: "JavaScript supports:"
          },
          {
            type: "code",
            language: "javascript",
            content: `// Single-line comment

/* Multi-line comment */`
          },
          {
            type: "paragraph",
            content: "CSS only supports:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Comment */`
          },
          {
            type: "paragraph",
            content: "Incorrect CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `// This is wrong`
          },
          {
            type: "paragraph",
            content: "Browsers will treat this as invalid CSS."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "css",
            content: `/* This is correct */`
          }
        ]
      },
      {
        heading: "CSS Comments vs HTML Comments",
        blocks: [
          {
            type: "paragraph",
            content: "HTML uses:"
          },
          {
            type: "code",
            language: "html",
            content: ``
          },
          {
            type: "paragraph",
            content: "CSS uses:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Comment */`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: ``
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Website Header */`
          },
          {
            type: "paragraph",
            content: "The syntaxes are completely different."
          }
        ]
      },
      {
        heading: "How Browsers Handle Comments",
        blocks: [
          {
            type: "paragraph",
            content: "When a browser loads CSS, it performs several steps:"
          },
          {
            type: "flow",
            steps: [
              "CSS File",
              "→",
              "Tokenizer",
              "→",
              "Parser",
              "→",
              "CSSOM"
            ]
          },
          {
            type: "paragraph",
            content: "During tokenization, comments are identified and discarded."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Main Heading */

h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Internally becomes:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "The comment never reaches the styling stage."
          },
          {
            type: "paragraph",
            content: "This is why comments do not impact page appearance."
          }
        ]
      },
      {
        heading: "Comments in Minified CSS",
        blocks: [
          {
            type: "paragraph",
            content: "During production deployment, CSS is often minified."
          },
          {
            type: "paragraph",
            content: "Original:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Header Styles */

header {
    background: black;
}`
          },
          {
            type: "paragraph",
            content: "Minified:"
          },
          {
            type: "code",
            language: "css",
            content: `header{background:black}`
          },
          {
            type: "paragraph",
            content: "Most minification tools remove comments automatically."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smaller file size",
              "Faster downloads",
              "Better performance"
            ]
          }
        ]
      },
      {
        heading: "Important Comments in Production CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Some comments are intentionally preserved."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*!
 Theme Name: My Theme
 Version: 1.0
*/`
          },
          {
            type: "paragraph",
            content: "The exclamation mark:"
          },
          {
            type: "output",
            content: "/*!"
          },
          {
            type: "paragraph",
            content: "tells many minifiers to keep the comment."
          },
          {
            type: "paragraph",
            content: "This is commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "License information",
              "Copyright notices",
              "Framework metadata",
              "Theme information"
            ]
          },
          {
            type: "paragraph",
            content: "Many beginner tutorials never discuss this special type of comment."
          }
        ]
      },
      {
        heading: "Documentation Comments in Large Projects",
        blocks: [
          {
            type: "paragraph",
            content: "Enterprise-level CSS often contains documentation blocks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
----------------------------------
COMPONENT: PRIMARY BUTTON
PURPOSE:
Main call-to-action button

DEPENDENCIES:
Uses theme color variables
----------------------------------
*/

.btn-primary {
    background: blue;
}`
          },
          {
            type: "paragraph",
            content: "These comments help teams understand large codebases."
          }
        ]
      },
      {
        heading: "CSS Comments in Frameworks",
        blocks: [
          {
            type: "paragraph",
            content: "Popular frameworks make extensive use of comments."
          },
          {
            type: "paragraph",
            content: "Example from a large stylesheet:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Layout Utilities */

/* Typography Utilities */

/* Form Components */

/* Responsive Breakpoints */`
          },
          {
            type: "paragraph",
            content: "Comments help developers quickly locate relevant sections."
          }
        ]
      },
      {
        heading: "Best Practices for CSS Comments",
        blocks: [
          {
            type: "paragraph",
            content: "Comment Why, Not What"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Set color to blue */

h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "The code already shows that."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Matches company branding */

h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Explain the reason behind decisions."
          },
          {
            type: "paragraph",
            content: "Keep Comments Updated"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Red button */

button {
    background: green;
}`
          },
          {
            type: "paragraph",
            content: "Outdated comments create confusion."
          },
          {
            type: "paragraph",
            content: "Use Comments for Complex Logic"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Prevent layout shift on image loading */

.card img {
    aspect-ratio: 16/9;
}`
          },
          {
            type: "paragraph",
            content: "This provides valuable context."
          },
          {
            type: "paragraph",
            content: "Avoid Excessive Comments"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Paragraph */

p {
    /* Text color */
    color: black;
}`
          },
          {
            type: "paragraph",
            content: "Too many obvious comments can reduce readability."
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
                question: "Using JavaScript Syntax",
                answer: "CSS does not support double-slash (//) comments. Using them will break your styles.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `// Header styles`
                  },
                  {
                    title: "Correct",
                    language: "css",
                    content: `/* Header styles */`
                  }
                ]
              },
              {
                question: "Forgetting to Close Comments",
                answer: "If you omit the closing '*/', the browser will treat all subsequent CSS as part of the comment.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `/* Header styles

h1 {
    color: blue;
}`
                  }
                ]
              },
              {
                question: "Attempting Nested Comments",
                answer: "You cannot place a CSS comment inside another CSS comment. The first closing '*/' will terminate the entire block, causing syntax errors.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "css",
                    content: `/*
Comment

/* Another Comment */

*/`
                  }
                ]
              },
              {
                question: "Leaving Large Disabled Blocks",
                answer: "Leaving hundreds of lines of old, commented-out CSS clutters the file. It is better to rely on version control (like Git) and delete code you no longer need.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `/*
500 lines of old code
*/`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        heading: "Comments and Team Collaboration",
        blocks: [
          {
            type: "paragraph",
            content: "In team environments, comments serve as communication tools."
          },
          {
            type: "paragraph",
            content: "They help developers understand:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why a style exists",
              "Temporary workarounds",
              "Browser-specific fixes",
              "Future improvements",
              "Component structure"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `/*
Safari Fix:
Prevents flexbox overflow issue
*/

.container {
    min-width: 0;
}`
          },
          {
            type: "paragraph",
            content: "Without the comment, another developer might accidentally remove the rule."
          }
        ]
      },
      {
        heading: "Interview Question: Why Are Comments Important If Browsers Ignore Them?",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners assume comments are useless because browsers ignore them."
          },
          {
            type: "paragraph",
            content: "In reality, comments are essential because they improve:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Code readability",
              "Maintainability",
              "Team collaboration",
              "Debugging efficiency",
              "Project documentation"
            ]
          },
          {
            type: "paragraph",
            content: "Comments are for developers, not browsers."
          }
        ]
      },
      {
        heading: "Lesser-Known Fact About CSS Comments",
        blocks: [
          {
            type: "paragraph",
            content: "According to the CSS specification, comments are treated similarly to whitespace during parsing."
          },
          {
            type: "paragraph",
            content: "This means:"
          },
          {
            type: "code",
            language: "css",
            content: `h1/*comment*/{
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "is interpreted as:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Although technically valid, this style is discouraged because it reduces readability."
          },
          {
            type: "paragraph",
            content: "Most tutorials never explain this parser behavior."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS comments are developer notes that are ignored by browsers during CSS processing. They are created using /* comment */ syntax and can be used to explain code, organize stylesheets, document design decisions, improve collaboration, and temporarily disable CSS rules. CSS supports both short and multi-line comments, but nested comments are not allowed. Comments play an important role in large projects by making code easier to understand and maintain. Modern build tools often remove comments during minification, although special comments beginning with /*! can be preserved for licenses and metadata. Proper use of comments helps create cleaner, more maintainable, and more professional CSS codebases."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Writing good comments is as important as writing good code. Always remember the golden rule: Comment the 'why', not the 'what'. Anyone reading your CSS can see that `color: blue` makes the text blue, but they might need a comment to explain *why* it needs to be blue in that specific context."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Ways to Add CSS
============================= */
    "ways-to-add-css": {
    title: "Ways to Add CSS",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Ways to Add CSS",
        blocks: [
          {
            type: "paragraph",
            content: "After understanding CSS syntax, selectors, and comments, the next step is learning how CSS is connected to an HTML document."
          },
          {
            type: "paragraph",
            content: "Writing CSS alone is not enough. The browser must know where the CSS code is located and how it should be applied to the webpage."
          },
          {
            type: "paragraph",
            content: "CSS can be added to HTML in several ways, each designed for different situations. Some methods are suitable for quick testing, while others are preferred for professional web development."
          },
          {
            type: "paragraph",
            content: "Understanding these approaches is essential because the way CSS is added affects maintainability, performance, scalability, and code organization."
          }
        ]
      },
      {
        heading: "Why Do We Need to Add CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "HTML provides structure."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>

<p>This is a paragraph.</p>`
          },
          {
            type: "paragraph",
            content: "Without CSS, the page appears with default browser styling."
          },
          {
            type: "paragraph",
            content: "CSS allows us to control:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Colors",
              "Fonts",
              "Spacing",
              "Layout",
              "Animations",
              "Responsiveness",
              "Visual appearance"
            ]
          },
          {
            type: "paragraph",
            content: "To apply these styles, CSS must be connected to the HTML document."
          }
        ]
      },
      {
        heading: "Three Main Ways to Add CSS",
        blocks: [
          {
            type: "paragraph",
            content: "CSS can be added using:"
          },
          {
            type: "paragraph",
            content: "1. Inline CSS"
          },
          {
            type: "paragraph",
            content: "CSS is written directly inside an HTML element."
          },
          {
            type: "paragraph",
            content: "2. Internal CSS"
          },
          {
            type: "paragraph",
            content: "CSS is written inside a <style> element within the HTML document."
          },
          {
            type: "paragraph",
            content: "3. External CSS"
          },
          {
            type: "paragraph",
            content: "CSS is written in a separate .css file and linked to the HTML page."
          },
          {
            type: "paragraph",
            content: "These are the three standard methods supported by all modern browsers."
          }
        ]
      },
      {
        heading: "Overview Comparison",
        blocks: [
          {
            type: "table",
            headers: [
              "Method",
              "Location",
              "Best For"
            ],
            rows: [
              [
                "Inline CSS",
                "Inside HTML element",
                "Small changes, testing"
              ],
              [
                "Internal CSS",
                "Inside <style> tag",
                "Single-page websites"
              ],
              [
                "External CSS",
                "Separate CSS file",
                "Professional projects"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "In real-world development, external CSS is used most frequently."
          }
        ]
      },
      {
        heading: "1. Inline CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Inline CSS applies styles directly to an HTML element using the style attribute."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "html",
            content: `<tag style="property:value;">`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 style="color: blue;">
    Welcome
</h1>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Blue heading"
          },
          {
            type: "paragraph",
            content: "The style affects only that specific element."
          }
        ]
      },
      {
        heading: "How Inline CSS Works",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color:red;">
    Hello World
</p>`
          },
          {
            type: "paragraph",
            content: "The browser reads:"
          },
          {
            type: "output",
            content: [
              "Element:",
              "    p",
              "",
              "Style:",
              "    color:red"
            ]
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Text appears red."
          }
        ]
      },
      {
        heading: "Multiple Inline Properties",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple properties are separated by semicolons."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1
style="
color: blue;
background-color: yellow;
padding: 10px;
">
Welcome
</h1>`
          },
          {
            type: "paragraph",
            content: "Each property is applied directly to the element."
          }
        ]
      },
      {
        heading: "Advantages of Inline CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Quick Styling"
          },
          {
            type: "paragraph",
            content: "Useful for testing styles quickly."
          },
          {
            type: "paragraph",
            content: "High Priority"
          },
          {
            type: "paragraph",
            content: "Inline styles have very high specificity."
          },
          {
            type: "paragraph",
            content: "No Additional Files"
          },
          {
            type: "paragraph",
            content: "Everything remains inside the HTML element."
          }
        ]
      },
      {
        heading: "Disadvantages of Inline CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Poor Maintainability"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 style="color:red;">`
          },
          {
            type: "paragraph",
            content: "If hundreds of headings need updating, each must be modified individually."
          },
          {
            type: "paragraph",
            content: "Repeated Code"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 style="color:red;">
<h2 style="color:red;">
<p style="color:red;">`
          },
          {
            type: "paragraph",
            content: "The same style is duplicated."
          },
          {
            type: "paragraph",
            content: "Mixes Content and Presentation"
          },
          {
            type: "paragraph",
            content: "HTML should focus on structure."
          },
          {
            type: "paragraph",
            content: "CSS should focus on styling."
          },
          {
            type: "paragraph",
            content: "Inline CSS combines both."
          },
          {
            type: "paragraph",
            content: "Difficult to Scale"
          },
          {
            type: "paragraph",
            content: "Large websites become hard to maintain."
          }
        ]
      },
      {
        heading: "When to Use Inline CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Suitable for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Quick testing",
              "Email templates",
              "JavaScript-generated styles",
              "Small one-time adjustments"
            ]
          },
          {
            type: "paragraph",
            content: "Not recommended for full websites."
          }
        ]
      },
      {
        heading: "2. Internal CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Internal CSS places styles inside a <style> element."
          },
          {
            type: "paragraph",
            content: "The <style> element is usually placed inside the <head> section."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>

<html>

<head>

<style>
h1 {
    color: blue;
}

p {
    color: gray;
}
</style>

</head>

<body>

<h1>Welcome</h1>

<p>Hello World</p>

</body>

</html>`
          }
        ]
      },
      {
        heading: "How Internal CSS Works",
        blocks: [
          {
            type: "paragraph",
            content: "The browser:"
          },
          {
            type: "flow",
            steps: [
              "Loads HTML",
              "→",
              "Finds <style>",
              "→",
              "Parses CSS",
              "→",
              "Applies styles"
            ]
          },
          {
            type: "paragraph",
            content: "All matching elements receive the styles."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<style>

h1 {
    color: navy;
}

</style>

<h1>Heading One</h1>

<h1>Heading Two</h1>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Both headings become navy."
          }
        ]
      },
      {
        heading: "Advantages of Internal CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Centralized Styling"
          },
          {
            type: "paragraph",
            content: "Styles remain in one place."
          },
          {
            type: "paragraph",
            content: "No Separate File Needed"
          },
          {
            type: "paragraph",
            content: "Everything exists within one document."
          },
          {
            type: "paragraph",
            content: "Easier Than Inline CSS"
          },
          {
            type: "paragraph",
            content: "One rule can affect multiple elements."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "affects every heading."
          }
        ]
      },
      {
        heading: "Disadvantages of Internal CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Not Reusable"
          },
          {
            type: "paragraph",
            content: "Styles cannot easily be shared between multiple pages."
          },
          {
            type: "paragraph",
            content: "Larger HTML Files"
          },
          {
            type: "paragraph",
            content: "The HTML file contains both structure and styling."
          },
          {
            type: "paragraph",
            content: "Harder to Maintain Large Projects"
          },
          {
            type: "paragraph",
            content: "As CSS grows, the HTML file becomes cluttered."
          }
        ]
      },
      {
        heading: "When to Use Internal CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Suitable for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Single-page websites",
              "Small projects",
              "Learning CSS",
              "Prototypes",
              "Temporary development"
            ]
          }
        ]
      },
      {
        heading: "3. External CSS",
        blocks: [
          {
            type: "paragraph",
            content: "External CSS stores styles in a separate file."
          },
          {
            type: "paragraph",
            content: "Example file:"
          },
          {
            type: "output",
            content: "style.css"
          },
          {
            type: "paragraph",
            content: "Contents:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

p {
    color: gray;
}`
          },
          {
            type: "paragraph",
            content: "The file is connected using:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet" href="style.css">`
          },
          {
            type: "paragraph",
            content: "inside the <head>."
          }
        ]
      },
      {
        heading: "Complete Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>

<html>

<head>

<link
rel="stylesheet"
href="style.css">

</head>

<body>

<h1>Welcome</h1>

<p>Hello World</p>

</body>

</html>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

p {
    color: gray;
}`
          }
        ]
      },
      {
        heading: "How External CSS Works",
        blocks: [
          {
            type: "paragraph",
            content: "The browser:"
          },
          {
            type: "flow",
            steps: [
              "Load HTML",
              "→",
              "Find <link>",
              "→",
              "Request CSS File",
              "→",
              "Download CSS",
              "→",
              "Parse CSS",
              "→",
              "Apply Styles"
            ]
          },
          {
            type: "paragraph",
            content: "This is the standard workflow used by modern websites."
          }
        ]
      },
      {
        heading: "Advantages of External CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Reusable"
          },
          {
            type: "paragraph",
            content: "One stylesheet can style multiple pages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "index.html",
              "about.html",
              "contact.html"
            ]
          },
          {
            type: "paragraph",
            content: "All can use:"
          },
          {
            type: "output",
            content: "style.css"
          },
          {
            type: "paragraph",
            content: "Better Organization"
          },
          {
            type: "paragraph",
            content: "HTML and CSS remain separate."
          },
          {
            type: "output",
            content: [
              "HTML → Structure",
              "CSS → Presentation"
            ]
          },
          {
            type: "paragraph",
            content: "Easier Maintenance"
          },
          {
            type: "paragraph",
            content: "Changing one CSS rule updates all linked pages."
          },
          {
            type: "paragraph",
            content: "Better Performance"
          },
          {
            type: "paragraph",
            content: "Browsers cache external CSS files."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Visit Page 1",
              "Download CSS",
              "",
              "Visit Page 2",
              "Reuse Cached CSS"
            ]
          },
          {
            type: "paragraph",
            content: "Faster loading."
          },
          {
            type: "paragraph",
            content: "Industry Standard"
          },
          {
            type: "paragraph",
            content: "Nearly all professional websites use external CSS."
          }
        ]
      },
      {
        heading: "Disadvantages of External CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Additional HTTP Request"
          },
          {
            type: "paragraph",
            content: "The browser must download the CSS file."
          },
          {
            type: "paragraph",
            content: "Broken Links Cause Missing Styles"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="stylesheet"
href="wrong-name.css">`
          },
          {
            type: "paragraph",
            content: "The CSS file will not load."
          },
          {
            type: "paragraph",
            content: "Slightly More Setup"
          },
          {
            type: "paragraph",
            content: "Requires managing separate files."
          }
        ]
      },
      {
        heading: "External CSS File Locations",
        blocks: [
          {
            type: "paragraph",
            content: "Same Folder"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet"
href="style.css">`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "tree",
            content: `project/
│
├── index.html
├── style.css`
          },
          {
            type: "paragraph",
            content: "CSS Folder"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet"
href="css/style.css">`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "tree",
            content: `project/
│
├── index.html
│
└── css/
     └── style.css`
          }
        ]
      },
      {
        heading: "Using Multiple Stylesheets",
        blocks: [
          {
            type: "paragraph",
            content: "A webpage can load multiple CSS files."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="stylesheet"
href="layout.css">

<link
rel="stylesheet"
href="theme.css">`
          },
          {
            type: "paragraph",
            content: "The browser loads both stylesheets."
          },
          {
            type: "paragraph",
            content: "This approach is common in large projects."
          }
        ]
      },
      {
        heading: "CSS Priority (Cascade Order)",
        blocks: [
          {
            type: "paragraph",
            content: "A topic many beginner tutorials barely explain is:"
          },
          {
            type: "quote",
            content: "What happens if the same element receives styles from multiple sources?"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Inline CSS:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1 style="color:red;">`
          },
          {
            type: "paragraph",
            content: "Internal CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "External CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Which color wins?"
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Red"
          },
          {
            type: "paragraph",
            content: "Because inline CSS has higher priority."
          }
        ]
      },
      {
        heading: "CSS Precedence Order",
        blocks: [
          {
            type: "paragraph",
            content: "When specificity is equal:"
          },
          {
            type: "flow",
            steps: [
              "Inline CSS",
              "→",
              "Internal CSS",
              "→",
              "External CSS",
              "→",
              "Browser Default Styles"
            ]
          },
          {
            type: "paragraph",
            content: "Higher levels override lower levels."
          }
        ]
      },
      {
        heading: "Browser Default Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Even without CSS, browsers apply built-in styles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
          {
            type: "paragraph",
            content: "The browser automatically applies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large font",
              "Bold font",
              "Margins"
            ]
          },
          {
            type: "paragraph",
            content: "These are called User Agent Stylesheets."
          },
          {
            type: "paragraph",
            content: "Your CSS overrides them."
          },
          {
            type: "paragraph",
            content: "Most tutorials mention CSS methods but rarely explain this important concept."
          }
        ]
      },
      {
        heading: "Importing CSS with @import",
        blocks: [
          {
            type: "paragraph",
            content: "Another way to include CSS is:"
          },
          {
            type: "code",
            language: "css",
            content: `@import url("style.css");`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<style>

@import url("style.css");

</style>`
          },
          {
            type: "paragraph",
            content: "This loads an external stylesheet."
          },
          {
            type: "paragraph",
            content: "Why @import Is Less Common"
          },
          {
            type: "paragraph",
            content: "Although valid, it has drawbacks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Extra loading delay",
              "Lower performance",
              "More render blocking"
            ]
          },
          {
            type: "paragraph",
            content: "For this reason:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "is generally preferred."
          }
        ]
      },
      {
        heading: "Browser Internals: CSS Loading Process",
        blocks: [
          {
            type: "paragraph",
            content: "When a webpage loads:"
          },
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "DOM Tree",
              "→",
              "Find CSS",
              "→",
              "Download CSS",
              "→",
              "CSSOM",
              "→",
              "Render Tree",
              "→",
              "Display Page"
            ]
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "flow",
            steps: [
              "DOM",
              "→",
              "Render"
            ]
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "flow",
            steps: [
              "DOM + CSSOM",
              "→",
              "Render Tree",
              "→",
              "Layout",
              "→",
              "Paint"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this helps explain why CSS loading affects page rendering speed."
          }
        ]
      },
      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Prefer External CSS"
          },
          {
            type: "paragraph",
            content: "For almost all real websites:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet"
href="style.css">`
          },
          {
            type: "paragraph",
            content: "is the recommended approach."
          },
          {
            type: "paragraph",
            content: "Avoid Excessive Inline CSS"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color:red;">`
          },
          {
            type: "paragraph",
            content: "Repeated hundreds of times."
          },
          {
            type: "paragraph",
            content: "Keep CSS Separate"
          },
          {
            type: "paragraph",
            content: "Good structure:"
          },
          {
            type: "tree",
            content: `project/
├── html/
├── css/
├── images/
└── js/`
          },
          {
            type: "paragraph",
            content: "Organize Stylesheets"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "base.css",
              "layout.css",
              "components.css",
              "theme.css"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for larger projects."
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
                question: "Forgetting rel=\"stylesheet\"",
                answer: "Without the rel=\"stylesheet\" attribute, the browser does not know the linked file is a CSS stylesheet and will not apply it.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<link href="style.css">`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<link
rel="stylesheet"
href="style.css">`
                  }
                ]
              },
              {
                question: "Wrong File Path",
                answer: "Linking to the wrong directory will result in missing styles. Ensure the path correctly matches your folder structure.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<link
rel="stylesheet"
href="styles.css">`
                  },
                  {
                    title: "Correct (if in css folder)",
                    language: "html",
                    content: `<link
rel="stylesheet"
href="css/style.css">`
                  }
                ]
              },
              {
                question: "Using Inline CSS Everywhere",
                answer: "Applying styles directly to elements makes the code highly repetitive, difficult to scale, and extremely tedious to maintain."
              },
              {
                question: "Placing Style Rules Outside <style>",
                answer: "Internal CSS rules must be wrapped in <style> tags; otherwise, the browser will render them as plain text on the page.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<head>

h1 {
    color:red;
}

</head>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<head>

<style>
h1 {
    color:red;
}
</style>

</head>`
                  }
                ]
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
            content: "CSS can be added to HTML using three primary methods: Inline CSS, Internal CSS, and External CSS. Inline CSS uses the style attribute and affects only a specific element. Internal CSS places styles inside a <style> element within the HTML document, making it suitable for small projects and single-page websites. External CSS stores styles in separate .css files and connects them using the <link> element, providing better organization, reusability, maintainability, and performance. Modern web development overwhelmingly favors external stylesheets because they separate content from presentation and allow styles to be reused across multiple pages. Understanding how these methods work, their advantages, limitations, loading behavior, and precedence rules is essential for building professional, scalable, and maintainable websites."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 As you transition into professional web development, the separation of concerns becomes critical. By keeping your structure (HTML) completely separate from your styling (External CSS), you ensure that your projects remain clean, modular, and easy to upgrade in the future. Treat inline styles as an absolute last resort."
          }
        ]
      }
    ]
  },
};

export default cssGettingStarted;