const cssAdvancedCss = {

/* ===========================
    First Topic : CSS Variables
============================= */
    "css-variables": {
    title: "CSS Variables",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Variables",
        blocks: [
          {
            type: "paragraph",
            content: "As CSS projects grow larger, managing repeated values becomes increasingly difficult. Imagine using the same color, font size, spacing, or border radius dozens of times across hundreds of CSS rules. If the design changes, updating every occurrence manually becomes time-consuming and error-prone."
          },
          {
            type: "paragraph",
            content: "This is where CSS Variables come in."
          },
          {
            type: "paragraph",
            content: "CSS Variables, officially known as Custom Properties, allow developers to store reusable values in one place and use them throughout a stylesheet. If the value needs to change later, you only update it once."
          },
          {
            type: "paragraph",
            content: "Modern websites, design systems, UI frameworks, and large-scale applications rely heavily on CSS Variables because they make styling more maintainable, scalable, and dynamic."
          }
        ]
      },
      {
        heading: "What Are CSS Variables?",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS Variable is a custom property that stores a value which can be reused anywhere in your CSS. Think of it as a container that holds a value."
          },
          {
            type: "paragraph",
            content: "Instead of writing:"
          },
          {
            type: "code",
            language: "css",
            content: `.button {
    background-color: blue;
}

.card {
    border-color: blue;
}

.heading {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "You can define the color once:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "And use it everywhere:"
          },
          {
            type: "code",
            language: "css",
            content: `.button {
    background-color: var(--primary-color);
}

.card {
    border-color: var(--primary-color);
}

.heading {
    color: var(--primary-color);
}`
          },
          {
            type: "paragraph",
            content: "Now changing the entire theme requires modifying only one line."
          }
        ]
      },
      {
        heading: "Why CSS Variables Were Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "Before CSS Variables existed, developers often faced these problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Problem 1: Repetition (The same value appears multiple times).",
              "Problem 2: Difficult Maintenance (If the client says 'Change the blue color to green', every occurrence must be updated manually).",
              "Problem 3: Inconsistent Design (Different developers may accidentally use slightly different colors like #3498db, #3398db, #3488db)."
            ]
          },
          {
            type: "paragraph",
            content: "Solution: CSS Variables centralize values."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary-color: #3498db;
}`
          },
          {
            type: "paragraph",
            content: "One update affects the entire project."
          }
        ]
      },
      {
        heading: "CSS Variable Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "Variables are defined using two hyphens (--)."
          },
          {
            type: "paragraph",
            content: "Declaration"
          },
          {
            type: "output",
            content: "--variable-name: value;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `--primary-color: blue;`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "paragraph",
            content: "Variables are accessed using the var() function."
          },
          {
            type: "output",
            content: "property: var(--variable-name);"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: var(--primary-color);`
          }
        ]
      },
      {
        heading: "Creating Your First CSS Variable",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `:root {
    --main-color: crimson;
}`
          },
          {
            type: "paragraph",
            content: "Using it:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: var(--main-color);
}`
          },
          {
            type: "paragraph",
            content: "Output: The heading becomes crimson."
          }
        ]
      },
      {
        heading: "Understanding :root",
        blocks: [
          {
            type: "paragraph",
            content: "Most variables are declared inside :root."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "What is :root?"
          },
          {
            type: "paragraph",
            content: ":root represents the highest-level element of the document. In HTML, <html> is the root element."
          },
          {
            type: "paragraph",
            content: "Therefore, defining a variable inside :root creates a global variable available throughout the entire webpage."
          }
        ]
      },
      {
        heading: "Global vs Local Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Global Variables"
          },
          {
            type: "paragraph",
            content: "Variables defined inside :root can be used anywhere."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --text-color: #333;
}

body { color: var(--text-color); }
h1 { color: var(--text-color); }
p { color: var(--text-color); }`
          },
          {
            type: "paragraph",
            content: "Local Variables"
          },
          {
            type: "paragraph",
            content: "Variables can also be defined inside specific selectors."
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    --card-color: purple;
}`
          },
          {
            type: "paragraph",
            content: "Used inside the same scope:"
          },
          {
            type: "code",
            language: "css",
            content: `.card h2 {
    color: var(--card-color);
}`
          },
          {
            type: "paragraph",
            content: "The variable exists only within .card."
          },
          {
            type: "paragraph",
            content: "Variable Scope"
          },
          {
            type: "paragraph",
            content: "Understanding scope is one of the most important concepts."
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    --box-color: red;
}
.card {
    color: var(--box-color); /* Works */
}
h1 {
    color: var(--box-color); /* Will NOT work */
}`
          }
        ]
      },
      {
        heading: "Using Variables for Common Properties",
        blocks: [
          {
            type: "paragraph",
            content: "Using Variables for Colors (Most common use case)"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary: #3498db;
    --secondary: #2ecc71;
    --danger: #e74c3c;
}
.btn-primary { background: var(--primary); }
.btn-danger { background: var(--danger); }`
          },
          {
            type: "paragraph",
            content: "Using Variables for Typography"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --heading-size: 36px;
    --paragraph-size: 18px;
}
h1 { font-size: var(--heading-size); }
p { font-size: var(--paragraph-size); }`
          },
          {
            type: "paragraph",
            content: "Using Variables for Spacing"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --small-space: 10px;
    --medium-space: 20px;
    --large-space: 40px;
}
.card { padding: var(--medium-space); }`
          },
          {
            type: "paragraph",
            content: "Using Variables for Border Radius"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --radius: 12px;
}
.card { border-radius: var(--radius); }
.button { border-radius: var(--radius); }`
          },
          {
            type: "paragraph",
            content: "Using Variables for Shadows"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --shadow: 0 4px 10px rgba(0,0,0,0.2);
}
.card { box-shadow: var(--shadow); }`
          }
        ]
      },
      {
        heading: "Fallback Values",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a variable may not exist. CSS allows fallback values."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "var(variable, fallback)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `color: var(--main-color, black);`
          },
          {
            type: "paragraph",
            content: "Meaning: Use --main-color if it exists. Otherwise use black."
          },
          {
            type: "paragraph",
            content: "Nested Fallbacks"
          },
          {
            type: "code",
            language: "css",
            content: `color:
var(
    --primary-color,
    var(--secondary-color, black)
);`
          },
          {
            type: "paragraph",
            content: "Order: Use primary color. If unavailable, use secondary color. If unavailable, use black."
          }
        ]
      },
      {
        heading: "Variable Inheritance and Cascade",
        blocks: [
          {
            type: "paragraph",
            content: "Variable Inheritance"
          },
          {
            type: "paragraph",
            content: "CSS Variables automatically inherit."
          },
          {
            type: "code",
            language: "css",
            content: `body {
    --text-color: navy;
}
p {
    color: var(--text-color);
}`
          },
          {
            type: "paragraph",
            content: "Even though p doesn't define the variable, it inherits it."
          },
          {
            type: "paragraph",
            content: "Variable Cascade Behavior"
          },
          {
            type: "paragraph",
            content: "Variables follow normal CSS cascading rules."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --color: blue;
}

.container {
    --color: red;
}
.container p {
    color: var(--color);
}`
          },
          {
            type: "paragraph",
            content: "Output: Red. The closest variable definition wins."
          },
          {
            type: "paragraph",
            content: "Overriding Variables"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --theme-color: blue;
}
.dark-section {
    --theme-color: white;
}`
          },
          {
            type: "paragraph",
            content: "Inside .dark-section, white will be used."
          }
        ]
      },
      {
        heading: "Dynamic Theme Switching",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Variables are the foundation of modern theming systems."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --bg-color: white;
    --text-color: black;
}`
          },
          {
            type: "paragraph",
            content: "Dark mode:"
          },
          {
            type: "code",
            language: "css",
            content: `.dark-mode {
    --bg-color: black;
    --text-color: white;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    background: var(--bg-color);
    color: var(--text-color);
}`
          },
          {
            type: "paragraph",
            content: "Changing a class updates the entire theme. This is how many modern websites implement dark mode."
          }
        ]
      },
      {
        heading: "Variables in Advanced CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Variables Inside Calculations"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --spacing: 20px;
}
.card {
    padding: calc(var(--spacing) * 2);
}`
          },
          {
            type: "paragraph",
            content: "Result: padding: 40px;"
          },
          {
            type: "paragraph",
            content: "Variables with Gradients"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --start: #ff7e5f;
    --end: #feb47b;
}
.hero {
    background:
    linear-gradient(
        to right,
        var(--start),
        var(--end)
    );
}`
          },
          {
            type: "paragraph",
            content: "Variables with Animations"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --rotation: 180deg;
}
.box:hover {
    transform: rotate(var(--rotation));
}`
          },
          {
            type: "paragraph",
            content: "Variables can control animation behavior dynamically."
          },
          {
            type: "paragraph",
            content: "Variables in Media Queries"
          },
          {
            type: "paragraph",
            content: "Variables can be updated inside media queries."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --font-size: 16px;
}
@media (max-width: 768px) {
    :root {
        --font-size: 14px;
    }
}
body {
    font-size: var(--font-size);
}`
          },
          {
            type: "paragraph",
            content: "Responsive typography becomes much easier."
          }
        ]
      },
      {
        heading: "Advanced Design Token System",
        blocks: [
          {
            type: "paragraph",
            content: "Large projects often use variables as design tokens."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --color-primary: #3498db;
    --color-success: #2ecc71;
    --color-danger: #e74c3c;

    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;

    --radius-sm: 4px;
    --radius-lg: 12px;
}`
          },
          {
            type: "paragraph",
            content: "This creates a centralized design language for the entire application. Many professional frameworks use this approach."
          }
        ]
      },
      {
        heading: "CSS Variables vs Preprocessor Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Before CSS Variables, developers used Sass variables."
          },
          {
            type: "comparison",
            leftTitle: "Sass Variable",
            leftItems: [
              "$primary-color: blue;",
              "Processed before the browser receives the CSS."
            ],
            rightTitle: "CSS Variable",
            rightItems: [
              "--primary-color: blue;",
              "Exists in the browser and can change dynamically."
            ]
          },
          {
            type: "paragraph",
            content: "Because of this, `--theme-color` can be modified with JavaScript and media queries. This makes CSS Variables significantly more powerful."
          }
        ]
      },
      {
        heading: "Using Variables with JavaScript",
        blocks: [
          {
            type: "paragraph",
            content: "One major advantage rarely covered in beginner tutorials is direct JavaScript interaction."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --theme-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "JavaScript"
          },
          {
            type: "code",
            language: "javascript",
            content: `document.documentElement.style.setProperty(
    '--theme-color',
    'red'
);`
          },
          {
            type: "paragraph",
            content: "The UI updates instantly. This enables:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Theme switchers",
              "Color pickers",
              "Dynamic dashboards",
              "User personalization",
              "Interactive design systems"
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
                question: "1. Forgetting Double Hyphens",
                answer: "Wrong: `primary-color: blue;` Correct: `--primary-color: blue;`"
              },
              {
                question: "2. Forgetting var()",
                answer: "Wrong: `color: --primary-color;` Correct: `color: var(--primary-color);`"
              },
              {
                question: "3. Using Undefined Variables",
                answer: "Wrong: `color: var(--unknown);` If the variable doesn't exist, the property may fail. Use fallbacks: `color: var(--unknown, black);`"
              },
              {
                question: "4. Poor Naming",
                answer: "Bad: `--a`, `--b`, `--x`. Good: `--primary-color`, `--card-radius`, `--heading-size`."
              },
              {
                question: "5. Defining Too Many Local Variables",
                answer: "When values are reused globally, defining them in `:root` is usually better than repeating local declarations."
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
              "Use Meaningful Names: --primary-color, --danger-color",
              "Create a Design System: Store colors, spacing, typography, and shadows in one place.",
              "Use Global Variables for Reusable Values: :root { --main-padding: 20px; }",
              "Use Local Variables for Component-Specific Values: .card { --card-bg: white; }",
              "Always Consider Fallbacks: color: var(--text-color, black);"
            ]
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary: #3498db;
    --secondary: #2ecc71;
    --radius: 10px;
    --shadow: 0 4px 12px rgba(0,0,0,.15);
}
.card {
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 20px;
}
.button {
    background: var(--primary);
    color: white;
    border-radius: var(--radius);
}`
          },
          {
            type: "paragraph",
            content: "Later, changing: `--primary: purple;` updates every button automatically."
          }
        ]
      },
      {
        heading: "Browser Support",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Variables are supported by all modern browsers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Edge",
              "Firefox",
              "Safari",
              "Opera",
              "Mobile browsers"
            ]
          },
          {
            type: "paragraph",
            content: "They are considered a standard and essential part of modern CSS development."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Variables (Custom Properties) allow developers to store reusable values and use them throughout a stylesheet. They improve maintainability, consistency, scalability, and make modern features like theming and dynamic styling possible."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Variables are declared using --variable-name and accessed using var().",
              ":root is commonly used for global variables.",
              "Variables have scope, follow inheritance rules, and participate in the CSS cascade.",
              "Fallback values can prevent styling failures.",
              "Variables work with colors, typography, spacing, gradients, animations, and calculations.",
              "Media queries can modify variable values responsively.",
              "CSS Variables can be changed dynamically using JavaScript."
            ]
          },
          {
            type: "paragraph",
            content: "CSS Variables are one of the most important modern CSS features because they transform CSS from a collection of static rules into a flexible, maintainable, and dynamic styling system suitable for professional web applications."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common pain point: You CANNOT use CSS variables inside media query definitions. `@media (max-width: var(--mobile-bp))` will NOT work. You must use standard values for media query breakpoints."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : CSS Functions
============================= */
    "css-functions": {
    title: "CSS Functions",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Functions",
        blocks: [
          {
            type: "paragraph",
            content: "CSS is not limited to fixed values like 20px, red, or 50%. Modern CSS includes functions, which allow values to be calculated, transformed, generated, or manipulated dynamically."
          },
          {
            type: "paragraph",
            content: "Functions make CSS smarter and more flexible. Instead of hardcoding values, developers can create responsive layouts, dynamic sizing, color manipulations, transformations, gradients, animations, and much more."
          },
          {
            type: "paragraph",
            content: "Without CSS functions, modern responsive web design would be significantly more difficult."
          }
        ]
      },
      {
        heading: "What Are CSS Functions?",
        blocks: [
          {
            type: "paragraph",
            content: "A CSS function is a special value that performs a calculation or operation and returns a result that CSS can use."
          },
          {
            type: "paragraph",
            content: "General Syntax"
          },
          {
            type: "output",
            content: "property: function-name(arguments);"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 50px);`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "calc() is the function",
              "100% - 50px is the argument"
            ]
          },
          {
            type: "paragraph",
            content: "The result becomes the final width."
          }
        ]
      },
      {
        heading: "Why CSS Functions Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "CSS functions help developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create responsive layouts",
              "Perform calculations",
              "Manipulate colors",
              "Generate gradients",
              "Position elements dynamically",
              "Create transformations",
              "Control animations",
              "Work with CSS variables",
              "Build fluid typography",
              "Reduce JavaScript dependency"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `width: 450px;`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 50px);`
          },
          {
            type: "paragraph",
            content: "Now the width adapts automatically."
          }
        ]
      },
      {
        heading: "Structure of a CSS Function",
        blocks: [
          {
            type: "paragraph",
            content: "Most functions follow this pattern:"
          },
          {
            type: "output",
            content: "function-name(value1, value2, value3);"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `rgb(255, 0, 0);`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Function → rgb()",
              "Arguments → 255, 0, 0"
            ]
          },
          {
            type: "paragraph",
            content: "Output: red"
          }
        ]
      },
      {
        heading: "Categories of CSS Functions",
        blocks: [
          {
            type: "paragraph",
            content: "CSS functions can be grouped into:"
          },
          {
            type: "table",
            headers: [
              "Category",
              "Examples"
            ],
            rows: [
              [
                "Mathematical Functions",
                "calc(), min(), max(), clamp()"
              ],
              [
                "Color Functions",
                "rgb(), rgba(), hsl(), hsla()"
              ],
              [
                "Transform Functions",
                "rotate(), scale(), translate()"
              ],
              [
                "Gradient Functions",
                "linear-gradient(), radial-gradient()"
              ],
              [
                "Filter Functions",
                "blur(), brightness(), contrast()"
              ],
              [
                "Variable Functions",
                "var()"
              ],
              [
                "Image Functions",
                "url(), image-set()"
              ],
              [
                "Animation Functions",
                "cubic-bezier(), steps()"
              ],
              [
                "Counter Functions",
                "counter()"
              ],
              [
                "Grid Functions",
                "minmax(), repeat()"
              ]
            ]
          }
        ]
      },
      {
        heading: "Mathematical Functions",
        blocks: [
          {
            type: "paragraph",
            content: "These are among the most commonly used CSS functions."
          },
          {
            type: "paragraph",
            content: "calc()"
          },
          {
            type: "paragraph",
            content: "Performs mathematical calculations."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: calc(100% - 100px);
}`
          },
          {
            type: "paragraph",
            content: "CSS automatically calculates: 100% minus 100px."
          },
          {
            type: "paragraph",
            content: "Supported Operators: +, -, *, /"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: calc(16px + 2vw);`
          },
          {
            type: "paragraph",
            content: "This creates fluid text sizing."
          },
          {
            type: "paragraph",
            content: "min()"
          },
          {
            type: "paragraph",
            content: "Chooses the smallest value."
          },
          {
            type: "code",
            language: "css",
            content: `width: min(800px, 90%);`
          },
          {
            type: "paragraph",
            content: "If: 90% = 700px, Result: width: 700px;"
          },
          {
            type: "paragraph",
            content: "max()"
          },
          {
            type: "paragraph",
            content: "Chooses the largest value."
          },
          {
            type: "code",
            language: "css",
            content: `width: max(300px, 50%);`
          },
          {
            type: "paragraph",
            content: "Ensures width never becomes too small."
          },
          {
            type: "paragraph",
            content: "clamp()"
          },
          {
            type: "paragraph",
            content: "One of the most useful modern CSS functions."
          },
          {
            type: "output",
            content: "clamp(minimum, preferred, maximum)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: clamp(1rem, 3vw, 3rem);`
          },
          {
            type: "paragraph",
            content: "Meaning: Never smaller than 1rem, Prefer 3vw, Never larger than 3rem. Perfect for responsive typography."
          }
        ]
      },
      {
        heading: "Color Functions",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides multiple functions for creating colors."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "rgb(): Defines color using Red, Green, Blue values. color: rgb(255, 0, 0);",
              "rgba(): Adds transparency. color: rgba(255, 0, 0, 0.5); (0 = transparent, 1 = solid)",
              "hsl(): Uses Hue, Saturation, Lightness. color: hsl(240, 100%, 50%);",
              "hsla(): HSL plus transparency. color: hsla(240, 100%, 50%, 0.5);"
            ]
          }
        ]
      },
      {
        heading: "CSS Variable Function: var()",
        blocks: [
          {
            type: "paragraph",
            content: "Retrieves the value of a CSS variable."
          },
          {
            type: "paragraph",
            content: "Variable Definition"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --main-color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: var(--main-color);
}`
          },
          {
            type: "paragraph",
            content: "Fallback Values"
          },
          {
            type: "code",
            language: "css",
            content: `color: var(--theme-color, black);`
          },
          {
            type: "paragraph",
            content: "If variable doesn't exist: black is used."
          }
        ]
      },
      {
        heading: "Gradient Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Gradients are actually CSS functions."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "linear-gradient(): Creates a linear color transition. background: linear-gradient(to right, red, blue);",
              "radial-gradient(): Creates circular gradients. background: radial-gradient(red, blue);",
              "conic-gradient(): Creates a gradient around a center point. background: conic-gradient(red, yellow, green, blue);"
            ]
          }
        ]
      },
      {
        heading: "Transform Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Transform functions change an element's position, size, or orientation."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "translate(): Moves an element. transform: translate(50px, 20px);",
              "rotate(): Rotates an element. transform: rotate(45deg);",
              "scale(): Changes size. transform: scale(1.5);",
              "skew(): Tilts an element. transform: skew(20deg);"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple Transform Functions"
          },
          {
            type: "code",
            language: "css",
            content: `transform:
    translateX(50px)
    rotate(30deg)
    scale(1.2);`
          },
          {
            type: "paragraph",
            content: "Transforms are applied from right to left internally."
          }
        ]
      },
      {
        heading: "Filter Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Used to create visual effects."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "blur(): filter: blur(5px);",
              "brightness(): filter: brightness(150%);",
              "contrast(): filter: contrast(200%);",
              "grayscale(): filter: grayscale(100%);",
              "sepia(): filter: sepia(100%);",
              "invert(): filter: invert(100%);"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple Filters"
          },
          {
            type: "code",
            language: "css",
            content: `filter:
    brightness(120%)
    contrast(150%)
    blur(2px);`
          }
        ]
      },
      {
        heading: "Image Functions",
        blocks: [
          {
            type: "paragraph",
            content: "url()"
          },
          {
            type: "paragraph",
            content: "Loads external resources."
          },
          {
            type: "code",
            language: "css",
            content: `background-image:
    url("image.jpg");`
          },
          {
            type: "paragraph",
            content: "Used for: Images, Fonts, SVG files."
          },
          {
            type: "paragraph",
            content: "image-set()"
          },
          {
            type: "paragraph",
            content: "Provides multiple image versions."
          },
          {
            type: "code",
            language: "css",
            content: `background-image:
    image-set(
        url(img1.jpg) 1x,
        url(img2.jpg) 2x
    );`
          },
          {
            type: "paragraph",
            content: "Useful for retina displays."
          }
        ]
      },
      {
        heading: "Animation Timing Functions",
        blocks: [
          {
            type: "paragraph",
            content: "These control animation speed curves."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "ease: transition: all 1s ease; Starts slow → fast → slow.",
              "linear: transition: all 1s linear; Constant speed.",
              "cubic-bezier(): Custom timing. transition: all 1s cubic-bezier(.17,.67,.83,.67);",
              "steps(): Creates step-by-step movement. animation: typing 3s steps(20);"
            ]
          }
        ]
      },
      {
        heading: "Grid Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS Grid relies heavily on functions."
          },
          {
            type: "paragraph",
            content: "repeat()"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: 1fr 1fr 1fr;`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: repeat(3, 1fr);`
          },
          {
            type: "paragraph",
            content: "minmax()"
          },
          {
            type: "paragraph",
            content: "Defines size range."
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: minmax(200px, 1fr);`
          },
          {
            type: "paragraph",
            content: "Combining Functions"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns:
    repeat(
        auto-fit,
        minmax(250px, 1fr)
    );`
          },
          {
            type: "paragraph",
            content: "This creates highly responsive grids."
          }
        ]
      },
      {
        heading: "Counter Functions",
        blocks: [
          {
            type: "paragraph",
            content: "CSS can automatically generate numbering."
          },
          {
            type: "code",
            language: "css",
            content: `ol {
    counter-reset: item;
}

li {
    counter-increment: item;
}

li::before {
    content: counter(item) ". ";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1.",
              "2.",
              "3."
            ]
          }
        ]
      },
      {
        heading: "Nesting CSS Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Functions can be combined."
          },
          {
            type: "code",
            language: "css",
            content: `width:
    calc(
        100% - max(50px, 5vw)
    );`
          },
          {
            type: "paragraph",
            content: "CSS evaluates inner functions first. Order: max() ↓ calc() ↓ Final value."
          }
        ]
      },
      {
        heading: "Modern Functions Every Developer Should Know",
        blocks: [
          {
            type: "paragraph",
            content: "The most practical functions today are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "calc(), min(), max(), clamp()",
              "var()",
              "rgb(), hsl()",
              "linear-gradient()",
              "translate(), rotate(), scale()",
              "repeat(), minmax()"
            ]
          },
          {
            type: "paragraph",
            content: "These functions appear in nearly every modern website."
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
                question: "Forgetting Spaces in calc()",
                answer: "Wrong: `width: calc(100%-50px);` Correct: `width: calc(100% - 50px);`. CSS requires spaces around the `+` and `-` operators in calc()."
              },
              {
                question: "Using Undefined Variables",
                answer: "Wrong: `color: var(--primary);` If variable doesn't exist, value fails. Better: `color: var(--primary, blue);`"
              },
              {
                question: "Overusing Filters",
                answer: "Heavy filters can reduce performance. Avoid `filter: blur(50px);` unless truly necessary."
              },
              {
                question: "Using Fixed Sizes Instead of clamp()",
                answer: "Less responsive: `font-size: 40px;` Better: `font-size: clamp(1.5rem, 5vw, 3rem);`"
              }
            ]
          }
        ]
      },
      {
        heading: "Practical Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary: #2563eb;
}

.card {
    width: min(400px, 90%);
    padding: clamp(1rem, 3vw, 2rem);

    background:
    linear-gradient(
        135deg,
        #2563eb,
        #7c3aed
    );

    color: white;

    transform: translateY(0);

    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}`
          },
          {
            type: "paragraph",
            content: "This example uses: var(), min(), clamp(), linear-gradient(), translateY() which are some of the most commonly used CSS functions in modern web development."
          }
        ]
      },
      {
        heading: "Browser Support and Modern CSS Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Most common functions such as: calc(), var(), rgb(), hsl(), translate(), rotate(), scale(), linear-gradient() are supported by all modern browsers."
          },
          {
            type: "paragraph",
            content: "Newer functions like: clamp(), min(), max(), image-set() also enjoy excellent support in current browser versions and are widely used in responsive design."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS functions make styles dynamic, responsive, and reusable. Instead of relying on fixed values, developers can calculate dimensions, generate gradients, manipulate colors, transform elements, control animations, and build adaptive layouts directly in CSS."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What CSS functions are and their syntax",
              "Mathematical functions (calc(), min(), max(), clamp())",
              "Color functions (rgb(), rgba(), hsl(), hsla())",
              "Variable functions (var())",
              "Gradient, Transform, Filter, and Image functions",
              "Animation timing functions",
              "Grid functions (repeat(), minmax())",
              "Counter functions and Function nesting",
              "Common mistakes and best practices"
            ]
          },
          {
            type: "paragraph",
            content: "CSS functions are one of the foundations of modern CSS. Mastering them allows you to create responsive, maintainable, and professional user interfaces with far less code and significantly greater flexibility."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A pro tip: When creating a fluid typography scale with `clamp()`, you can easily calculate the ideal middle value (the `vw` unit) using an online clamp calculator. It saves time and ensures mathematically perfect scaling between your min and max bounds."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : calc()
============================= */
    "css-calc-function": {
    title: "calc()",
    readingTime: "22 min",
        
    content: [
        {
        heading: "calc() Function in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites must work across countless screen sizes, devices, and layouts. In the early days of CSS, developers often had to choose between fixed values (px) and relative values (%). This limitation made many layouts difficult to build."
          },
          {
            type: "paragraph",
            content: "The calc() function solved this problem by allowing CSS to perform mathematical calculations directly inside property values. It enables developers to combine different units, create dynamic layouts, and write more flexible and responsive CSS."
          },
          {
            type: "paragraph",
            content: "Today, calc() is one of the most powerful and widely used CSS functions in professional web development."
          }
        ]
      },
      {
        heading: "What is calc()?",
        blocks: [
          {
            type: "paragraph",
            content: "The calc() function allows CSS to calculate a value using mathematical expressions. Instead of manually calculating values yourself, you can let the browser calculate them automatically."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "property: calc(expression);"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 50px);`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "100% represents the available width",
              "50px is subtracted from it"
            ]
          },
          {
            type: "paragraph",
            content: "The browser calculates the final width."
          }
        ]
      },
      {
        heading: "Why Use calc()?",
        blocks: [
          {
            type: "paragraph",
            content: "Without calc(), many layouts require hardcoded values."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.sidebar {
    width: 250px;
}

.content {
    width: 750px;
}`
          },
          {
            type: "paragraph",
            content: "This only works for a specific screen size."
          },
          {
            type: "paragraph",
            content: "Using calc():"
          },
          {
            type: "code",
            language: "css",
            content: `.sidebar {
    width: 250px;
}

.content {
    width: calc(100% - 250px);
}`
          },
          {
            type: "paragraph",
            content: "Now the content area automatically adjusts to the remaining space."
          }
        ]
      },
      {
        heading: "Basic Mathematical Operators",
        blocks: [
          {
            type: "paragraph",
            content: "calc() supports four mathematical operations:"
          },
          {
            type: "table",
            headers: [
              "Operator",
              "Meaning"
            ],
            rows: [
              [
                "+",
                "Addition"
              ],
              [
                "-",
                "Subtraction"
              ],
              [
                "*",
                "Multiplication"
              ],
              [
                "/",
                "Division"
              ]
            ]
          }
        ]
      },
      {
        heading: "Examples of Operators",
        blocks: [
          {
            type: "paragraph",
            content: "Addition"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100px + 50px); /* Result: 150px */
font-size: calc(1rem + 4px);`
          },
          {
            type: "paragraph",
            content: "Subtraction"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 20px);`
          },
          {
            type: "paragraph",
            content: "If container width is 500px, the result is 480px. This is the most commonly used calc() operation."
          },
          {
            type: "paragraph",
            content: "Multiplication"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(50px * 3); /* Result: 150px */`
          },
          {
            type: "paragraph",
            content: "Useful for scaling values."
          },
          {
            type: "paragraph",
            content: "Division"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(300px / 3); /* Result: 100px */`
          }
        ]
      },
      {
        heading: "Important Syntax Rules",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners make mistakes when writing calc()."
          },
          {
            type: "comparison",
            leftTitle: "Wrong",
            leftItems: [
              "width: calc(100%-50px);"
            ],
            rightTitle: "Correct",
            rightItems: [
              "width: calc(100% - 50px);"
            ]
          },
          {
            type: "paragraph",
            content: "Spaces around operators are required for + and -."
          }
        ]
      },
      {
        heading: "Mixing Different Units",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of calc() is the ability to combine different units."
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 40px);`
          },
          {
            type: "paragraph",
            content: "Mixing Percentage and Pixels is impossible to achieve using a single CSS value."
          },
          {
            type: "paragraph",
            content: "More Examples:"
          },
          {
            type: "code",
            language: "css",
            content: `height: calc(100vh - 80px);
font-size: calc(1rem + 1vw);
padding: calc(10px + 2%);`
          }
        ]
      },
      {
        heading: "How Browsers Evaluate calc()",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(100% - 50px);`
          },
          {
            type: "paragraph",
            content: "The browser:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Step 1: Determines actual width. (e.g., 100% = 800px)",
              "Step 2: Performs calculation. (800px - 50px)",
              "Step 3: Applies result. (750px)"
            ]
          },
          {
            type: "paragraph",
            content: "This happens automatically whenever the layout changes."
          }
        ]
      },
      {
        heading: "Using calc() with Layout Properties",
        blocks: [
          {
            type: "paragraph",
            content: "Using calc() With Width"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: calc(100% - 40px);
}`
          },
          {
            type: "paragraph",
            content: "Ensures full width minus 40px. Useful for layouts with fixed spacing."
          },
          {
            type: "paragraph",
            content: "Using calc() With Height"
          },
          {
            type: "code",
            language: "css",
            content: `.main {
    height: calc(100vh - 80px);
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Viewport Height - Header Height. Perfect for full-screen layouts."
          },
          {
            type: "paragraph",
            content: "Real Example:"
          },
          {
            type: "code",
            language: "css",
            content: `header {
    height: 80px;
}

main {
    height: calc(100vh - 80px);
}`
          },
          {
            type: "paragraph",
            content: "The content area fills the remaining screen space."
          }
        ]
      },
      {
        heading: "Using calc() with Spacing and Typography",
        blocks: [
          {
            type: "paragraph",
            content: "Using calc() With Padding"
          },
          {
            type: "code",
            language: "css",
            content: `padding: calc(10px + 1vw);`
          },
          {
            type: "paragraph",
            content: "Padding increases slightly on larger screens."
          },
          {
            type: "paragraph",
            content: "Using calc() With Margin"
          },
          {
            type: "code",
            language: "css",
            content: `margin-top: calc(20px + 2vh);`
          },
          {
            type: "paragraph",
            content: "Creates responsive spacing."
          },
          {
            type: "paragraph",
            content: "Using calc() With Font Sizes"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: calc(16px + 1vw);`
          },
          {
            type: "paragraph",
            content: "Text grows as screen size increases. This creates fluid typography."
          },
          {
            type: "paragraph",
            content: "Responsive Typography Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: calc(1.5rem + 3vw);
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Larger on desktops, Smaller on mobiles, Automatically adapts."
          }
        ]
      },
      {
        heading: "Advanced calc() Techniques",
        blocks: [
          {
            type: "paragraph",
            content: "Centering Elements Using calc()"
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    width: 300px;
    position: absolute;
    left: calc(50% - 150px);
}`
          },
          {
            type: "paragraph",
            content: "Explanation: 50% of screen width minus half of box width. Result: Perfect centering."
          },
          {
            type: "paragraph",
            content: "Using calc() With CSS Variables"
          },
          {
            type: "paragraph",
            content: "One of the most powerful combinations."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --sidebar-width: 250px;
}

.content {
    width: calc(100% - var(--sidebar-width));
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Easy maintenance, Reusable values, Cleaner code."
          },
          {
            type: "paragraph",
            content: "Multiple Operations"
          },
          {
            type: "paragraph",
            content: "calc() supports complex expressions."
          },
          {
            type: "code",
            language: "css",
            content: `width: calc((100% - 40px) / 2);`
          },
          {
            type: "paragraph",
            content: "Meaning: Take full width, Subtract 40px, Divide by 2."
          }
        ]
      },
      {
        heading: "Nested Functions With calc()",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS allows combining functions."
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(max(300px, 50%) - 20px);`
          },
          {
            type: "paragraph",
            content: "Process: max() evaluated first, then calc() evaluated second."
          },
          {
            type: "paragraph",
            content: "calc() With min()"
          },
          {
            type: "code",
            language: "css",
            content: `width: calc(min(90%, 1000px) - 40px);`
          },
          {
            type: "paragraph",
            content: "Useful for responsive containers."
          },
          {
            type: "paragraph",
            content: "calc() With clamp()"
          },
          {
            type: "code",
            language: "css",
            content: `font-size:
calc(
    clamp(1rem, 2vw, 2rem)
    + 2px
);`
          },
          {
            type: "paragraph",
            content: "Combines responsive scaling with precise adjustments."
          }
        ]
      },
      {
        heading: "calc() with Layout Systems",
        blocks: [
          {
            type: "paragraph",
            content: "calc() and CSS Grid"
          },
          {
            type: "code",
            language: "css",
            content: `.grid {
    grid-template-columns:
        calc(70% - 10px)
        calc(30% - 10px);
}`
          },
          {
            type: "paragraph",
            content: "Allows precise grid sizing."
          },
          {
            type: "paragraph",
            content: "calc() and Flexbox"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    flex-basis: calc(50% - 20px);
}`
          },
          {
            type: "paragraph",
            content: "Useful for creating responsive card layouts."
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
                question: "Forgetting Spaces",
                answer: "Wrong: `width: calc(100%-20px);` Correct: `width: calc(100% - 20px);`"
              },
              {
                question: "Mixing Invalid Units",
                answer: "Wrong: `width: calc(100px + red);` CSS cannot calculate colors and lengths together."
              },
              {
                question: "Overcomplicated Expressions",
                answer: "Bad: `width: calc( (((100% - 40px) / 2) * 3) + 20px );` Keep expressions readable."
              },
              {
                question: "Using calc() When Unnecessary",
                answer: "Bad: `width: calc(100px);` Better: `width: 100px;` Use calc() only when calculations are needed."
              }
            ]
          }
        ]
      },
      {
        heading: "Real-World Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers commonly use calc() for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboard Layouts: width: calc(100% - 280px);",
              "Full-Screen Sections: height: calc(100vh - 70px);",
              "Responsive Typography: font-size: calc(1rem + 1vw);",
              "Grid Cards: width: calc(25% - 20px);",
              "Dynamic Margins: margin-left: calc(50% - 500px);"
            ]
          }
        ]
      },
      {
        heading: "calc() vs clamp()",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse them."
          },
          {
            type: "table",
            headers: [
              "Function",
              "Purpose",
              "Example"
            ],
            rows: [
              [
                "calc()",
                "Performs calculations.",
                "width: calc(100% - 50px);"
              ],
              [
                "clamp()",
                "Limits values.",
                "font-size: clamp(1rem, 3vw, 2rem);"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Combined Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size:
calc(
    clamp(1rem, 3vw, 2rem)
    + 2px
);`
          },
          {
            type: "paragraph",
            content: "Both functions complement each other."
          }
        ]
      },
      {
        heading: "Performance of calc()",
        blocks: [
          {
            type: "paragraph",
            content: "A common question is: Is calc() slow?"
          },
          {
            type: "paragraph",
            content: "No. Modern browsers optimize calc() extremely well. Even large websites use hundreds of calc() expressions without noticeable performance issues."
          }
        ]
      },
      {
        heading: "Browser Support",
        blocks: [
          {
            type: "paragraph",
            content: "calc() is supported by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Chrome",
              "Microsoft Edge",
              "Mozilla Firefox",
              "Safari",
              "Opera",
              "Android Browsers",
              "iOS Browsers"
            ]
          },
          {
            type: "paragraph",
            content: "It has excellent support across modern browsers and is considered completely safe for production websites."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The calc() function allows CSS to perform mathematical calculations directly within property values. It supports addition (+), subtraction (-), multiplication (*), and division (/), making it possible to combine different units such as pixels, percentages, viewport units, and rem values."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What calc() is and why it exists",
              "Syntax and structure of calc()",
              "Addition, subtraction, multiplication, and division",
              "Mixing different CSS units",
              "Using calc() with width, height, margin, padding, and font sizes",
              "Responsive typography techniques",
              "Combining calc() with CSS variables",
              "Using calc() in Flexbox and Grid layouts",
              "Nested functions with min(), max(), and clamp()",
              "Common mistakes and best practices"
            ]
          },
          {
            type: "paragraph",
            content: "The calc() function is one of the most practical tools in modern CSS. Once mastered, it enables highly flexible, responsive, and maintainable layouts that adapt naturally to different screen sizes and design requirements."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very powerful, yet simple, layout pattern: If you have a sticky header that is `60px` tall, and you want your main content to take up the rest of the screen exactly, use `min-height: calc(100vh - 60px);` on your `<main>` tag. It prevents annoying scrollbars while keeping the layout full-height."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : clamp()
============================= */
    "css-clamp-function": {
    title: "clamp()",
    readingTime: "22 min",
        
    content: [
        {
        heading: "clamp() Function in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web design demands layouts that adapt smoothly across small phones, large desktops, and everything in between. Earlier, developers relied heavily on media queries or complex calculations to achieve responsive sizing. But CSS introduced a much cleaner solution: the clamp() function."
          },
          {
            type: "paragraph",
            content: "clamp() is one of the most powerful modern CSS functions for responsive design, especially for fluid typography, spacing, and layout control."
          }
        ]
      },
      {
        heading: "What is clamp()?",
        blocks: [
          {
            type: "paragraph",
            content: "The clamp() function allows you to set a value that is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never smaller than a minimum value",
              "Always scales with a preferred (fluid) value",
              "Never larger than a maximum value"
            ]
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "property: clamp(minimum, preferred, maximum);"
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: clamp(1rem, 2vw, 2rem);`
          },
          {
            type: "paragraph",
            content: "This means:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Minimum size → 1rem",
              "Preferred scaling → 2vw",
              "Maximum size → 2rem"
            ]
          }
        ]
      },
      {
        heading: "Why clamp() Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Before clamp(), developers had to choose between:"
          },
          {
            type: "paragraph",
            content: "1. Fixed values"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: 18px;`
          },
          {
            type: "paragraph",
            content: "Problem: Not responsive"
          },
          {
            type: "paragraph",
            content: "2. Media queries"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: 16px;

@media (min-width: 768px){
  font-size: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Problem: Too many breakpoints"
          },
          {
            type: "paragraph",
            content: "3. calc() hacks"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: calc(16px + 1vw);`
          },
          {
            type: "paragraph",
            content: "Problem: No upper or lower limit"
          },
          {
            type: "paragraph",
            content: "Solution: clamp()"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: clamp(16px, 2vw, 24px);`
          },
          {
            type: "paragraph",
            content: "Now the size: Never goes below 16px, Scales smoothly, Never exceeds 24px."
          }
        ]
      },
      {
        heading: "How clamp() Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "The browser evaluates clamp() in three steps:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Step 1: Evaluate preferred value (e.g., 2vw → dynamic value based on viewport)",
              "Step 2: Compare with min and max. If value < min → use min. If value > max → use max. Otherwise → use preferred.",
              "Step 3: Final output"
            ]
          },
          {
            type: "paragraph",
            content: "Example: clamp(16px, 2vw, 24px)"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "If screen is small: Result = 16px",
              "If screen is medium: Result = 2vw",
              "If screen is large: Result = 24px"
            ]
          },
          {
            type: "widget",
            component: "LlmGeneratedComponent",
            props: {
              height: "600px",
              prompt: "Create an interactive visualizer for the CSS clamp() function. Strategy: Standard Layout. Inputs: Numeric inputs or sliders for Minimum size (e.g. 16px), Preferred size (e.g., in vw, like 4vw), and Maximum size (e.g. 48px). A main slider to simulate 'Viewport Width'. Behavior: Render a text element that applies the clamp() CSS based on the inputs. Display a real-time output reading of the computed font size in pixels, showing exactly when the size hits the minimum bound, when it scales fluidly, and when it hits the maximum ceiling."
            }
          }
        ]
      },
      {
        heading: "clamp() Syntax Breakdown",
        blocks: [
          {
            type: "paragraph",
            content: "clamp(min, preferred, max)"
          },
          {
            type: "table",
            headers: [
              "Part",
              "Meaning"
            ],
            rows: [
              [
                "min",
                "Smallest allowed value"
              ],
              [
                "preferred",
                "Fluid scaling value"
              ],
              [
                "max",
                "Largest allowed value"
              ]
            ]
          }
        ]
      },
      {
        heading: "Most Common Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "1. Responsive Typography (MOST IMPORTANT)"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Small screens → 2rem. Medium screens → scales smoothly. Large screens → 4rem."
          },
          {
            type: "paragraph",
            content: "2. Paragraph Text"
          },
          {
            type: "code",
            language: "css",
            content: `p {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
}`
          },
          {
            type: "paragraph",
            content: "Improves readability across devices."
          },
          {
            type: "paragraph",
            content: "3. Responsive Padding"
          },
          {
            type: "code",
            language: "css",
            content: `section {
  padding: clamp(1rem, 3vw, 3rem);
}`
          },
          {
            type: "paragraph",
            content: "Spacing adapts automatically."
          },
          {
            type: "paragraph",
            content: "4. Container Widths"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
  width: clamp(300px, 80%, 1200px);
}`
          },
          {
            type: "paragraph",
            content: "This ensures: Never too small (300px), Never too wide (1200px), Otherwise fluid."
          },
          {
            type: "paragraph",
            content: "5. Button Sizing"
          },
          {
            type: "code",
            language: "css",
            content: `button {
  padding: clamp(0.5rem, 2vw, 1rem);
}`
          },
          {
            type: "paragraph",
            content: "Buttons remain usable on all screens."
          }
        ]
      },
      {
        heading: "clamp() vs calc()",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these two."
          },
          {
            type: "table",
            headers: [
              "Function",
              "Purpose",
              "Example"
            ],
            rows: [
              [
                "calc()",
                "Mathematical calculation",
                "width: calc(100% - 50px);"
              ],
              [
                "clamp()",
                "Range control + responsiveness",
                "font-size: clamp(1rem, 2vw, 2rem);"
              ]
            ]
          }
        ]
      },
      {
        heading: "clamp() vs Media Queries",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Old approach (Media Queries)",
            leftItems: [
              "h1 { font-size: 24px; }",
              "@media (min-width: 768px){\n  h1 { font-size: 32px; }\n}",
              "Requires maintenance of breakpoints."
            ],
            rightTitle: "Modern approach (clamp())",
            rightItems: [
              "h1 {\n  font-size: clamp(24px, 4vw, 32px);\n}",
              "Benefits: No breakpoints needed, Smooth scaling, Less code, Easier maintenance."
            ]
          }
        ]
      },
      {
        heading: "Real-World Layout Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `:root {
  --space: clamp(1rem, 4vw, 3rem);
}

section {
  padding: var(--space);
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

p {
  font-size: clamp(1rem, 2vw, 1.25rem);
}`
          },
          {
            type: "paragraph",
            content: "This creates a fully responsive system with minimal code."
          }
        ]
      },
      {
        heading: "Advanced Usage Patterns",
        blocks: [
          {
            type: "paragraph",
            content: "1. Nested clamp()"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: clamp(1rem, calc(1rem + 1vw), 2rem);`
          },
          {
            type: "paragraph",
            content: "Adds controlled scaling inside clamp."
          },
          {
            type: "paragraph",
            content: "2. clamp() with CSS Variables"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
  --min: 1rem;
  --fluid: 2vw;
  --max: 2rem;
}

h1 {
  font-size: clamp(var(--min), var(--fluid), var(--max));
}`
          },
          {
            type: "paragraph",
            content: "Highly reusable design system."
          },
          {
            type: "paragraph",
            content: "3. clamp() for Layout Grids"
          },
          {
            type: "code",
            language: "css",
            content: `.grid {
  grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30vw, 300px), 1fr));
}`
          },
          {
            type: "paragraph",
            content: "This creates adaptive grid cards."
          }
        ]
      },
      {
        heading: "clamp() in Real Websites",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites use clamp() for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero headings",
              "Navigation spacing",
              "Card layouts",
              "Section padding",
              "Responsive buttons",
              "Typography systems"
            ]
          },
          {
            type: "paragraph",
            content: "It is widely used in production-level UI frameworks."
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
                question: "Wrong order of values",
                answer: "Wrong: `clamp(2rem, 1rem, 4rem);` (Min is larger than preferred). Correct: `clamp(1rem, 2vw, 4rem);`"
              },
              {
                question: "Using static middle value",
                answer: "Bad: `clamp(1rem, 16px, 2rem);` Using a fixed pixel value for the preferred size results in no responsiveness."
              },
              {
                question: "Ignoring units",
                answer: "Wrong: `clamp(1, 2, 3);` You must include units like `rem`, `px`, or `vw`."
              }
            ]
          }
        ]
      },
      {
        heading: "Browser Support",
        blocks: [
          {
            type: "paragraph",
            content: "clamp() is supported in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Firefox",
              "Safari",
              "Edge",
              "Mobile browsers"
            ]
          },
          {
            type: "paragraph",
            content: "It is safe for modern production websites."
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
              "Use clamp for typography first: font-size: clamp(1rem, 2vw, 2rem);",
              "Combine with rem and vw: Best fluid design pattern.",
              "Avoid overcomplicating: Keep expressions readable.",
              "Use design system variables: --space-lg: clamp(2rem, 5vw, 4rem);"
            ]
          },
          {
            type: "paragraph",
            content: "When to Use clamp():"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Responsive text",
              "Fluid spacing",
              "Adaptive layouts",
              "Device-independent scaling",
              "Reduced media queries"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The clamp() function is one of the most important modern CSS tools for responsive design. It allows developers to define a value that scales fluidly while staying within safe minimum and maximum limits."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What clamp() is and its Syntax and structure",
              "How it works internally",
              "Real-world use cases (Typography scaling, Layout, and spacing patterns)",
              "Comparison with calc() and media queries",
              "Advanced patterns with variables and grids",
              "Common mistakes and best practices"
            ]
          },
          {
            type: "paragraph",
            content: "Final Insight: If calc() gives you mathematical control, then clamp() gives you intelligent responsiveness. It is one of the key building blocks of modern CSS systems, enabling clean, scalable, and breakpoint-free responsive design."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While `clamp()` is incredibly powerful, determining the exact `vw` value to use for the preferred scaling can involve some tricky math. To save time, look up 'Fluid Typography Generators' or use tools like Utopia.fyi. They automatically calculate the perfect `clamp()` formula based on your chosen min and max viewport sizes!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : CSS Masking
============================= */
    "css-masking": {
    title: "CSS Masking",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Masking",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Masking is an advanced visual technique that allows you to control the visibility of elements using images, gradients, or SVG shapes as a mask layer."
          },
          {
            type: "paragraph",
            content: "Instead of simply hiding elements, masking defines how they are revealed — making it one of the most powerful tools for modern UI design, storytelling interfaces, and cinematic web effects."
          },
          {
            type: "paragraph",
            content: "It is widely used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero section fades and transitions",
              "Image reveals and scroll animations",
              "Creative layouts and UI compositions",
              "Video overlays and spotlight effects",
              "Advanced design systems and motion UI"
            ]
          }
        ]
      },
      {
        heading: "What is CSS Masking (Core Idea)",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Masking works by applying a mask layer over an element, which determines which parts are visible."
          },
          {
            type: "paragraph",
            content: "Think of it like a filter:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "🟢 Visible areas → allowed to pass through",
              "⚫ Hidden areas → blocked",
              "⚪ Partial areas → semi-transparent reveal"
            ]
          },
          {
            type: "paragraph",
            content: "Simple mental model:"
          },
          {
            type: "output",
            content: "Masking = “A stencil placed over an element that controls visibility pixel by pixel.”"
          }
        ]
      },
      {
        heading: "Why CSS Masking Exists (Beyond Basic CSS)",
        blocks: [
          {
            type: "paragraph",
            content: "Without masking, CSS only gives you:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "opacity → affects entire element",
              "overflow: hidden → hard cropping",
              "clip-path → geometric cutting only"
            ]
          },
          {
            type: "paragraph",
            content: "Masking solves a deeper problem:"
          },
          {
            type: "output",
            content: "It allows visual logic-based visibility control"
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "You can hide parts based on brightness",
              "You can use images as visibility maps",
              "You can create soft fades instead of hard cuts",
              "You can layer multiple visibility rules"
            ]
          }
        ]
      },
      {
        heading: "CSS Masking vs Other Techniques",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Masking",
              "Clip-path",
              "Opacity"
            ],
            rows: [
              [
                "Soft edges",
                "✅ Yes",
                "❌ No",
                "❌ No"
              ],
              [
                "Image-based control",
                "✅ Yes",
                "❌ No",
                "❌ No"
              ],
              [
                "Gradient fades",
                "✅ Yes",
                "❌ No",
                "⚠️ Global only"
              ],
              [
                "Complex shapes",
                "✅ Yes",
                "⚠️ Limited",
                "❌ No"
              ],
              [
                "UI realism",
                "Very High",
                "Medium",
                "Low"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Key takeaway: Masking is not just shape control — it is visibility design."
          }
        ]
      },
      {
        heading: "How CSS Masking Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Masking is based on alpha/luminance mapping:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "White → fully visible",
              "Black → fully transparent",
              "Gray → partial visibility"
            ]
          },
          {
            type: "paragraph",
            content: "This means:"
          },
          {
            type: "output",
            content: "You are not hiding elements — you are defining a visibility map."
          }
        ]
      },
      {
        heading: "Core CSS Masking Properties",
        blocks: [
          {
            type: "paragraph",
            content: "CSS masking is controlled through multiple properties, not just one."
          },
          {
            type: "paragraph",
            content: "mask-image (Primary Property)"
          },
          {
            type: "paragraph",
            content: "Defines the mask source."
          },
          {
            type: "code",
            language: "css",
            content: `.element {
  mask-image: url(mask.png);
}`
          },
          {
            type: "paragraph",
            content: "Supported sources: Images (PNG, SVG), Gradients, Multiple layers"
          },
          {
            type: "paragraph",
            content: "mask-mode"
          },
          {
            type: "paragraph",
            content: "Defines how mask values are interpreted."
          },
          {
            type: "code",
            language: "css",
            content: `.element {
  mask-mode: alpha;
}`
          },
          {
            type: "paragraph",
            content: "Values: alpha → transparency-based (most common), luminance → brightness-based, match-source"
          },
          {
            type: "paragraph",
            content: "mask-repeat, mask-position, mask-size"
          },
          {
            type: "code",
            language: "css",
            content: `mask-repeat: no-repeat;
mask-position: center;
mask-size: cover;`
          },
          {
            type: "paragraph",
            content: "Shorthand: mask"
          },
          {
            type: "code",
            language: "css",
            content: `.element {
  mask: url(mask.png) no-repeat center / cover;
}`
          }
        ]
      },
      {
        heading: "Basic Working Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="card">
  CSS Masking Example
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
  width: 300px;
  height: 200px;
  background: linear-gradient(135deg, #ff4d4d, #4d79ff);

  mask-image: url(shape-mask.png);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}`
          },
          {
            type: "paragraph",
            content: "Result: Only the areas defined in shape-mask.png are visible."
          }
        ]
      },
      {
        heading: "Gradient Masking (Most Important Real-World Usage)",
        blocks: [
          {
            type: "paragraph",
            content: "Gradient masking is the most widely used production technique."
          },
          {
            type: "paragraph",
            content: "Horizontal Fade (UI Standard)"
          },
          {
            type: "code",
            language: "css",
            content: `.fade {
  mask-image: linear-gradient(to right, black 70%, transparent);
}`
          },
          {
            type: "paragraph",
            content: "Effect: Left side → visible, Right side → gradually fades"
          },
          {
            type: "paragraph",
            content: "Vertical Fade"
          },
          {
            type: "code",
            language: "css",
            content: `mask-image: linear-gradient(to bottom, black 60%, transparent);`
          },
          {
            type: "paragraph",
            content: "Used in: scroll previews, image carousels, hero sections"
          },
          {
            type: "paragraph",
            content: "Radial Spotlight Mask"
          },
          {
            type: "code",
            language: "css",
            content: `mask-image: radial-gradient(circle, black 50%, transparent 80%);`
          },
          {
            type: "paragraph",
            content: "Used in: focus effects, spotlight UI, cinematic highlights"
          }
        ]
      },
      {
        heading: "SVG Masking (Professional-Level Technique)",
        blocks: [
          {
            type: "paragraph",
            content: "SVG masking gives precision-level control over visibility."
          },
          {
            type: "paragraph",
            content: "Example: Circular Mask"
          },
          {
            type: "paragraph",
            content: "SVG"
          },
          {
            type: "code",
            language: "html",
            content: `<svg width="0" height="0">
  <mask id="circleMask">
    <circle cx="100" cy="100" r="80" fill="white"/>
  </mask>
</svg>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.box {
  mask: url(#circleMask);
}`
          },
          {
            type: "paragraph",
            content: "Why SVG masking is powerful: Fully scalable, Animatable shapes, Perfect for UI motion design, No pixel loss"
          }
        ]
      },
      {
        heading: "Real UI Use Cases (Where Masking Actually Matters)",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Hero Image Fade",
                description: ".hero img {\n  mask-image: linear-gradient(to bottom, black 80%, transparent);\n}"
              },
              {
                title: "Scroll Reveal Effect",
                description: ".reveal {\n  mask-image: linear-gradient(to right, black 0%, transparent 100%);\n}"
              },
              {
                title: "Soft Edge Cards",
                description: ".card {\n  mask-image: radial-gradient(circle, black 85%, transparent);\n}"
              },
              {
                title: "Spotlight UI Effect",
                description: ".image {\n  mask-image: radial-gradient(circle at center, black 40%, transparent 70%);\n}"
              }
            ]
          }
        ]
      },
      {
        heading: "Browser Support Reality",
        blocks: [
          {
            type: "paragraph",
            content: "Masking is powerful but not perfectly uniform."
          },
          {
            type: "paragraph",
            content: "Safari requirement:"
          },
          {
            type: "output",
            content: "-webkit-mask-image"
          },
          {
            type: "paragraph",
            content: "Safe cross-browser usage:"
          },
          {
            type: "code",
            language: "css",
            content: `.element {
  -webkit-mask-image: url(mask.png);
  mask-image: url(mask.png);
}`
          }
        ]
      },
      {
        heading: "Common Mistakes Developers Make",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. Thinking mask = opacity",
                answer: "Mask controls visibility distribution, not global transparency."
              },
              {
                question: "2. Using only PNG masks",
                answer: "Gradients often perform better and scale better."
              },
              {
                question: "3. Forgetting vendor prefix",
                answer: "Safari silently breaks without -webkit-."
              },
              {
                question: "4. Overcomplicating masks",
                answer: "Simple gradients often outperform complex images."
              }
            ]
          }
        ]
      },
      {
        heading: "Performance Guidelines",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Prefer gradients over images whenever possible",
              "Avoid stacking multiple masks unnecessarily",
              "Keep SVG masks lightweight",
              "Avoid animating large bitmap masks",
              "Use GPU-friendly transitions when possible"
            ]
          }
        ]
      },
      {
        heading: "When to Use CSS Masking (Decision Framework)",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Use masking when:",
            leftItems: [
              "✔ You need smooth fades (not hard edges)",
              "✔ You want image-based visibility control",
              "✔ You are building modern UI/UX effects",
              "✔ Clip-path is too rigid",
              "✔ You need layered visual storytelling"
            ],
            rightTitle: "Avoid masking when:",
            rightItems: [
              "✘ Simple hiding is enough (display: none, overflow)",
              "✘ Performance is extremely constrained",
              "✘ A basic shape cut is sufficient"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Masking is a high-level visual control system that allows developers to define how elements are revealed instead of simply hiding them."
          },
          {
            type: "paragraph",
            content: "Unlike clip-path or opacity, masking enables:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smooth transparency transitions",
              "Image-driven visibility",
              "Gradient-based fades",
              "Advanced UI storytelling effects",
              "Cinematic interface design"
            ]
          },
          {
            type: "paragraph",
            content: "It becomes especially powerful when combined with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Gradients (for smooth fades)",
              "SVG (for precision shapes)",
              "Animations (for dynamic reveals)"
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Want a cool text effect? You can use `mask-image` on text to make it look like it's fading out at the edges, exactly like the fading image examples. This is fantastic for scrolling text carousels or 'read more' fade-outs!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Object Fit
============================= */
    "css-object-fit": {
    title: "Object Fit",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Object-Fit — Complete Practical Master Guide",
        blocks: [
          {
            type: "paragraph",
            content: "CSS object-fit is a layout property used to control how images, videos, and replaced elements scale and fit inside their containers without breaking aspect ratio or causing distortion."
          },
          {
            type: "paragraph",
            content: "It solves one of the most common real-world UI problems:"
          },
          {
            type: "output",
            content: "“How do I make images fill a box nicely without stretching or cropping badly?”"
          },
          {
            type: "paragraph",
            content: "This property is heavily used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Profile avatars",
              "Card layouts",
              "Product galleries (e-commerce)",
              "Hero images",
              "Video thumbnails",
              "Responsive grids"
            ]
          }
        ]
      },
      {
        heading: "1. The Problem Object-Fit Solves",
        blocks: [
          {
            type: "paragraph",
            content: "Without object-fit, images behave like this:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "They either stretch unnaturally",
              "Or overflow their container",
              "Or leave unwanted gaps"
            ]
          },
          {
            type: "paragraph",
            content: "Example problem: A square container with a landscape image:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Without object-fit → image looks distorted",
              "With object-fit → image looks clean and controlled"
            ]
          }
        ]
      },
      {
        heading: "2. What is Object-Fit?",
        blocks: [
          {
            type: "paragraph",
            content: "object-fit defines how an element (like <img> or <video>) should resize inside its container while maintaining aspect ratio."
          },
          {
            type: "paragraph",
            content: "Think of it like:"
          },
          {
            type: "output",
            content: "“background-size for images, but for real HTML elements.”"
          }
        ]
      },
      {
        heading: "3. Basic Syntax",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: fill;
}`
          }
        ]
      },
      {
        heading: "4. Object-Fit Values (Core Concept Section)",
        blocks: [
          {
            type: "paragraph",
            content: "Let’s understand each value deeply, not just as a list."
          },
          {
            type: "paragraph",
            content: "4.1 fill (Default Behavior)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: fill;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Fills entire container, Ignores aspect ratio, May distort image."
          },
          {
            type: "paragraph",
            content: "When it happens: Default if you don’t set object-fit."
          },
          {
            type: "paragraph",
            content: "4.2 contain (Safe Mode)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: contain;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Keeps aspect ratio, Entire image is visible, May leave empty space."
          },
          {
            type: "paragraph",
            content: "Use cases: Logos, Icons, Product images where cropping is unacceptable."
          },
          {
            type: "paragraph",
            content: "4.3 cover (Most Used in Modern UI)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Fills entire container, Maintains aspect ratio, Crops overflow."
          },
          {
            type: "paragraph",
            content: "Why developers love it: Clean UI, No empty gaps, Perfect for cards and grids."
          },
          {
            type: "paragraph",
            content: "4.4 none (Original Size Mode)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: none;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Image keeps original size, No scaling happens, May overflow container."
          },
          {
            type: "paragraph",
            content: "4.5 scale-down (Smart Hybrid Mode)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: scale-down;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Compares none and contain, Picks the smaller result."
          },
          {
            type: "paragraph",
            content: "Use cases: Adaptive image rendering, Mixed resolution environments."
          }
        ]
      },
      {
        heading: "5. Object-Fit in Real Layouts (Important Section)",
        blocks: [
          {
            type: "paragraph",
            content: "5.1 Profile Avatar (Perfect Circle Images)"
          },
          {
            type: "code",
            language: "css",
            content: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "👉 Ensures face is centered and not stretched."
          },
          {
            type: "paragraph",
            content: "5.2 Card Images (E-commerce Style)"
          },
          {
            type: "code",
            language: "css",
            content: `.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "👉 Used in Amazon-style product grids."
          },
          {
            type: "paragraph",
            content: "5.3 Hero Banner Image"
          },
          {
            type: "code",
            language: "css",
            content: `.hero img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "👉 Keeps visual impact without distortion."
          },
          {
            type: "paragraph",
            content: "5.4 Logo Handling (Contain Use Case)"
          },
          {
            type: "code",
            language: "css",
            content: `.logo {
  width: 150px;
  height: 80px;
  object-fit: contain;
}`
          },
          {
            type: "paragraph",
            content: "👉 Ensures full logo visibility."
          }
        ]
      },
      {
        heading: "6. Object Position (Hidden Power Partner)",
        blocks: [
          {
            type: "paragraph",
            content: "object-position works with object-fit to control which part of the image is focused."
          },
          {
            type: "paragraph",
            content: "6.1 Center Focus"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
  object-position: center;
}`
          },
          {
            type: "paragraph",
            content: "6.2 Top Focus (Useful for Faces)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
  object-position: top;
}`
          },
          {
            type: "paragraph",
            content: "6.3 Custom Focus"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
  object-position: 20% 30%;
}`
          },
          {
            type: "paragraph",
            content: "👉 Controls crop alignment precisely."
          }
        ]
      },
      {
        heading: "7. Object-Fit vs Background-Size (Very Important Interview Topic)",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Object-Fit",
              "Background-Size"
            ],
            rows: [
              [
                "Works on <img>",
                "✅",
                "❌"
              ],
              [
                "Works on <video>",
                "✅",
                "❌"
              ],
              [
                "Uses CSS background",
                "❌",
                "✅"
              ],
              [
                "Semantic HTML support",
                "Strong",
                "Weak"
              ],
              [
                "Accessibility",
                "Better",
                "Worse"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Key idea: Use object-fit for real content, background-size for decorative images."
          }
        ]
      },
      {
        heading: "8. Common Real-World Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "❌ 1. Forgetting height",
                answer: "object-fit does nothing without a fixed height or aspect ratio. `img { width: 100%; object-fit: cover; }` is wrong; it needs a height."
              },
              {
                question: "❌ 2. Using fill unintentionally",
                answer: "Causes stretched, distorted images in production because it is the default behavior if not explicitly overridden."
              },
              {
                question: "❌ 3. Overusing cover for logos",
                answer: "Using `cover` on logos or charts leads to cropped branding and missing information. Always use `contain` for these."
              }
            ]
          }
        ]
      },
      {
        heading: "9. Performance & Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Always define width + height",
              "Prefer cover for UI images",
              "Use contain for logos & icons",
              "Combine with aspect-ratio for modern layouts",
              "Avoid distortion-heavy fallback layouts"
            ]
          }
        ]
      },
      {
        heading: "10. Modern Pattern: Object-Fit + Aspect Ratio",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "👉 This is now a standard modern responsive pattern."
          }
        ]
      },
      {
        heading: "11. When to Use Object-Fit (Decision Guide)",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Use object-fit when:",
            leftItems: [
              "✔ Building responsive cards",
              "✔ Displaying user images",
              "✔ Handling product galleries",
              "✔ Creating video thumbnails",
              "✔ Designing hero sections"
            ],
            rightTitle: "Avoid when:",
            rightItems: [
              "✘ You need decorative backgrounds (use background-image)",
              "✘ No fixed container exists",
              "✘ Image distortion is acceptable (rare case)"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS object-fit is a layout control system for images and videos inside containers, ensuring they scale properly without breaking design consistency."
          },
          {
            type: "paragraph",
            content: "It replaces messy hacks with clean, predictable behavior:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "cover → modern UI standard",
              "contain → safe full visibility",
              "fill → legacy/stretch mode",
              "scale-down → adaptive fallback"
            ]
          },
          {
            type: "paragraph",
            content: "When combined with object-position and aspect-ratio, it becomes one of the most important tools for building responsive, production-grade UI layouts."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 `object-fit: cover` is magic for responsive image grids. If you have a grid where images might have slightly different original aspect ratios, applying `object-fit: cover` with a fixed `aspect-ratio` on the `<img>` tag ensures a perfectly uniform, beautiful grid without manually cropping images beforehand."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Object Position
============================= */
    "css-object-position": {
    title: "Object Position",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Object Position – Complete Tutorial (Master Guide)",
        blocks: [
          {
            type: "paragraph",
            content: "The CSS object-position property is one of the most underrated yet powerful tools for controlling how media (images, videos, and embedded objects) are positioned inside their containers when using object-fit."
          },
          {
            type: "paragraph",
            content: "If object-fit decides how the content scales, then object-position decides which part of that content is visible."
          },
          {
            type: "paragraph",
            content: "This tutorial is designed to take you from absolute beginner to advanced practical usage with real-world patterns, responsive tricks, and production-level understanding."
          }
        ]
      },
      {
        heading: "What is CSS Object Position?",
        blocks: [
          {
            type: "paragraph",
            content: "The object-position property defines the alignment of replaced content inside its box."
          },
          {
            type: "paragraph",
            content: "It works only on elements like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "<img>",
              "<video>",
              "<iframe>",
              "<embed>",
              "<object>"
            ]
          },
          {
            type: "paragraph",
            content: "Basic idea: When media is cropped or scaled using object-fit, object-position controls the visible focus area."
          }
        ]
      },
      {
        heading: "Syntax",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `img {
  object-position: x-position y-position;
}`
          },
          {
            type: "paragraph",
            content: "Default value:"
          },
          {
            type: "code",
            language: "css",
            content: `object-position: 50% 50%;`
          },
          {
            type: "paragraph",
            content: "This means: Center horizontally, Center vertically."
          }
        ]
      },
      {
        heading: "How Object Position Works (Core Concept)",
        blocks: [
          {
            type: "paragraph",
            content: "Think of an image like a movable layer inside a frame:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The container is fixed",
              "The image may be cropped (object-fit: cover)",
              "object-position moves the image inside that frame"
            ]
          },
          {
            type: "paragraph",
            content: "Example mental model:"
          },
          {
            type: "output",
            content: [
              "[ Container Box ]",
              "   ┌───────────────┐",
              "   │     IMAGE     │  ← you shift this inside the box",
              "   └───────────────┘"
            ]
          }
        ]
      },
      {
        heading: "Basic Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
}`
          },
          {
            type: "paragraph",
            content: "Result: Image fills the box, Center of image is visible."
          }
        ]
      },
      {
        heading: "Keyword Values",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides easy alignment keywords."
          },
          {
            type: "paragraph",
            content: "Horizontal & Vertical Keywords"
          },
          {
            type: "code",
            language: "css",
            content: `object-position: left top;
object-position: center center;
object-position: right bottom;`
          },
          {
            type: "table",
            headers: [
              "Value",
              "Effect"
            ],
            rows: [
              [
                "left",
                "aligns image to left"
              ],
              [
                "right",
                "aligns image to right"
              ],
              [
                "top",
                "aligns image to top"
              ],
              [
                "bottom",
                "aligns image to bottom"
              ],
              [
                "center",
                "default center alignment"
              ]
            ]
          }
        ]
      },
      {
        heading: "Percentage-Based Positioning (Most Important)",
        blocks: [
          {
            type: "paragraph",
            content: "Percentages give precise control over focus area."
          },
          {
            type: "code",
            language: "css",
            content: `object-position: 20% 80%;`
          },
          {
            type: "paragraph",
            content: "Breakdown:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "20% → horizontal position (left bias)",
              "80% → vertical position (bottom bias)"
            ]
          },
          {
            type: "paragraph",
            content: "Default: object-position: 50% 50%;"
          }
        ]
      },
      {
        heading: "Pixel-Based Positioning",
        blocks: [
          {
            type: "paragraph",
            content: "You can also use fixed offsets:"
          },
          {
            type: "code",
            language: "css",
            content: `object-position: 30px 10px;`
          },
          {
            type: "paragraph",
            content: "Meaning: Move image 30px right, Move image 10px down."
          }
        ]
      },
      {
        heading: "Object Position with Object Fit (Real Power Combo)",
        blocks: [
          {
            type: "paragraph",
            content: "object-position is useless without object-fit in most real cases."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: top;
}`
          },
          {
            type: "paragraph",
            content: "Result: Image fills box, Top part of image is prioritized (useful for faces)."
          }
        ]
      },
      {
        heading: "Real-World Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "Profile Images (Face Focus)"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
  object-position: top;
}`
          },
          {
            type: "paragraph",
            content: "✔ Keeps face visible instead of cropping it out."
          },
          {
            type: "paragraph",
            content: "Hero Banners"
          },
          {
            type: "code",
            language: "css",
            content: `.hero img {
  object-fit: cover;
  object-position: center right;
}`
          },
          {
            type: "paragraph",
            content: "✔ Focuses on right-side subject."
          },
          {
            type: "paragraph",
            content: "Product Images (E-commerce)"
          },
          {
            type: "code",
            language: "css",
            content: `.product img {
  object-fit: cover;
  object-position: center;
}`
          },
          {
            type: "paragraph",
            content: "✔ Keeps product centered and consistent."
          },
          {
            type: "paragraph",
            content: "Video Thumbnails"
          },
          {
            type: "code",
            language: "css",
            content: `video {
  object-fit: cover;
  object-position: 25% 50%;
}`
          },
          {
            type: "paragraph",
            content: "✔ Controls preview focus area."
          }
        ]
      },
      {
        heading: "Difference: object-position vs background-position",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "object-position",
              "background-position"
            ],
            rows: [
              [
                "Works on",
                "<img>, <video>",
                "background images"
              ],
              [
                "Affects",
                "replaced elements",
                "background layer"
              ],
              [
                "Requires object-fit",
                "often yes",
                "no"
              ]
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
                question: "1. Using without object-fit",
                answer: "`img { object-position: top; }` -> No visible effect unless cropping/scaling happens via `object-fit: cover` or `contain`."
              },
              {
                question: "2. Expecting resizing behavior",
                answer: "`object-position` does NOT resize images. It only shifts them around within the frame."
              },
              {
                question: "3. Using on normal divs",
                answer: "It only works on replaced elements like `<img>` and `<video>`. If you use it on a `<div>`, it will be ignored."
              }
            ]
          }
        ]
      },
      {
        heading: "Advanced Techniques",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive object positioning"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-fit: cover;
  object-position: 30% 20%;
}

@media (max-width: 600px) {
  img {
    object-position: center;
  }
}`
          },
          {
            type: "paragraph",
            content: "✔ Adjust focus per screen size."
          },
          {
            type: "paragraph",
            content: "Focus-based UI images"
          },
          {
            type: "paragraph",
            content: "You can align based on subject movement:"
          },
          {
            type: "code",
            language: "css",
            content: `object-position: 70% 30%;`
          },
          {
            type: "paragraph",
            content: "Useful when subject is off-center in photography."
          },
          {
            type: "paragraph",
            content: "Combined with CSS variables"
          },
          {
            type: "code",
            language: "css",
            content: `img {
  object-position: var(--x, center) var(--y, center);
}`
          },
          {
            type: "paragraph",
            content: "Then dynamically adjust via JS or themes."
          }
        ]
      },
      {
        heading: "Browser Support",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome ✔",
              "Firefox ✔",
              "Edge ✔",
              "Safari ✔",
              "Mobile browsers ✔"
            ]
          },
          {
            type: "paragraph",
            content: "Fully supported in all modern environments."
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
              "✔ Always use with object-fit",
              "✔ Prefer percentages over pixels for responsiveness",
              "✔ Use center as default fallback",
              "✔ Adjust focus for human subjects (faces, products)",
              "✔ Test on multiple screen sizes"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The object-position property is essentially a focus controller for images and videos inside containers."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "It does not resize content",
              "It shifts visible area",
              "It becomes powerful when combined with object-fit"
            ]
          },
          {
            type: "paragraph",
            content: "One-line memory trick:"
          },
          {
            type: "output",
            content: [
              "object-fit = how it fills",
              "object-position = what part you see"
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common bug: You apply `object-position: bottom;` to an image, but it doesn't move. Why? Because the image might already be filling the entire container height perfectly without any overflow. `object-position` only works if the image has *extra* hidden space to shift around inside the container."
          }
        ]
      }
    ]
  },
};

export default cssAdvancedCss;