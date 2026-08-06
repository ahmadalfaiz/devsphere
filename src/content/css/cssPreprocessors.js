const cssPreprocessors = {

/* ===========================
    First Topic : Introduction to Sass
============================= */
    "css-sass-introduction": {
    title: "Introduction to Sass",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction to Sass",
        blocks: [
          {
            type: "paragraph",
            content: "As web projects grow, CSS files often become larger, harder to manage, and filled with repeated code. Imagine building a website with hundreds of pages, dozens of components, multiple color themes, and responsive layouts. Updating the primary color or changing the spacing across the entire project could require editing hundreds of lines of CSS."
          },
          {
            type: "paragraph",
            content: "This is the problem Sass was created to solve."
          },
          {
            type: "paragraph",
            content: "Sass is one of the most popular CSS preprocessors, providing powerful programming-like features such as variables, nesting, mixins, functions, modules, loops, and conditional logic. These features make writing CSS faster, cleaner, and much easier to maintain. Instead of replacing CSS, Sass extends it with additional capabilities and then compiles everything into standard CSS that browsers understand."
          },
          {
            type: "paragraph",
            content: "Today, even though modern CSS has introduced variables, nesting, cascade layers, and several advanced features, Sass remains widely used in professional projects because of its mature tooling, modular architecture, reusable code, and productivity improvements."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn what Sass is, why it exists, how it works, where it is used, and why thousands of professional developers still use it."
          }
        ]
      },
      {
        heading: "What is Sass?",
        blocks: [
          {
            type: "paragraph",
            content: "Sass stands for Syntactically Awesome Style Sheets."
          },
          {
            type: "paragraph",
            content: "It is a CSS preprocessor, meaning it adds extra features to CSS that browsers cannot understand directly. Before your website is loaded, Sass files are converted (compiled) into regular CSS."
          },
          {
            type: "paragraph",
            content: "The development workflow looks like this:"
          },
          {
            type: "output",
            content: [
              "Write Sass (.scss)",
              "        ↓",
              "Sass Compiler",
              "        ↓",
              "Generate CSS (.css)",
              "        ↓",
              "Browser reads CSS"
            ]
          },
          {
            type: "paragraph",
            content: "Browsers never execute Sass directly. They only read the compiled CSS."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "scss",
            content: `/* style.scss */
$primary-color: royalblue;

button {
    background: $primary-color;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "After compilation:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    background: royalblue;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "The browser never sees the variable—it only receives normal CSS."
          }
        ]
      },
      {
        heading: "Why Was Sass Created?",
        blocks: [
          {
            type: "paragraph",
            content: "Early CSS was intentionally simple. As websites became more complex, developers faced several problems."
          },
          {
            type: "paragraph",
            content: "Imagine a project containing this:"
          },
          {
            type: "code",
            language: "css",
            content: `.button {
    background: #2563eb;
}

.card-title {
    color: #2563eb;
}

.navbar {
    border-color: #2563eb;
}

.footer-link {
    color: #2563eb;
}`
          },
          {
            type: "paragraph",
            content: "Now suppose the designer changes the primary color. You must update every occurrence manually. Now imagine doing this across 5,000 lines of CSS."
          },
          {
            type: "paragraph",
            content: "Sass solves this using variables:"
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;

.button {
    background: $primary;
}

.card-title {
    color: $primary;
}

.navbar {
    border-color: $primary;
}`
          },
          {
            type: "paragraph",
            content: "Now changing one variable updates the entire project."
          },
          {
            type: "paragraph",
            content: "This is just one example. Sass also reduces duplication, improves organization, encourages reusable code, and makes large projects much easier to manage."
          }
        ]
      },
      {
        heading: "What is a CSS Preprocessor?",
        blocks: [
          {
            type: "paragraph",
            content: "A preprocessor is software that transforms one language into another before it reaches the browser."
          },
          {
            type: "paragraph",
            content: "Think of it like this:"
          },
          {
            type: "output",
            content: [
              "Developer",
              "      ↓",
              "Writes Sass",
              "      ↓",
              "Compiler converts it",
              "      ↓",
              "CSS",
              "      ↓",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "The browser only understands HTML, CSS, and JavaScript. Everything else must eventually become one of these languages."
          }
        ]
      },
      {
        heading: "Why Not Just Use CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS has improved dramatically. It now supports features like CSS Variables, Grid, Flexbox, Custom Properties, Native Nesting, Cascade Layers, Container Queries, calc(), clamp(), min(), max()."
          },
          {
            type: "paragraph",
            content: "So why do developers still use Sass? Because Sass still provides features that make development faster, especially in medium and large projects. For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better project organization",
              "More powerful functions",
              "Mixins",
              "Loops",
              "Conditional statements",
              "Mathematical operations",
              "Module system",
              "Partial files",
              "Easier code reuse"
            ]
          },
          {
            type: "paragraph",
            content: "Modern CSS has reduced the need for Sass, but it hasn't completely replaced it."
          }
        ]
      },
      {
        heading: "CSS vs Sass",
        blocks: [
          {
            type: "table",
            headers: [
              "CSS",
              "Sass"
            ],
            rows: [
              [
                "Native stylesheet language",
                "CSS preprocessor"
              ],
              [
                "Runs directly in browsers",
                "Must be compiled first"
              ],
              [
                "Limited programming features",
                "Programming-like features"
              ],
              [
                "No loops",
                "Supports loops"
              ],
              [
                "No mixins",
                "Supports mixins"
              ],
              [
                "No functions (beyond CSS functions)",
                "Custom functions"
              ],
              [
                "No file imports (historically; now @import deprecated and native imports limited)",
                "Powerful module system"
              ],
              [
                "Suitable for small projects",
                "Excellent for medium and large projects"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Remember: Every Sass project eventually becomes CSS."
          }
        ]
      },
      {
        heading: "History of Sass & Syntaxes",
        blocks: [
          {
            type: "paragraph",
            content: "Sass was introduced in 2006 by Hampton Catlin and later developed further by Natalie Weizenbaum and the Sass community."
          },
          {
            type: "paragraph",
            content: "Originally, Sass used an indentation-based syntax similar to Python."
          },
          {
            type: "code",
            language: "sass",
            content: `nav
  background: blue

  ul
    margin: 0`
          },
          {
            type: "paragraph",
            content: "Many developers preferred braces and semicolons because they matched CSS. This led to the introduction of SCSS (Sassy CSS)."
          },
          {
            type: "code",
            language: "scss",
            content: `nav {
    background: blue;

    ul {
        margin: 0;
    }
}`
          },
          {
            type: "paragraph",
            content: "Today, SCSS is the standard syntax used in almost every professional project."
          }
        ]
      },
      {
        heading: "Sass vs SCSS",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think these are different technologies. They're not. Sass is the language. It has two syntaxes."
          },
          {
            type: "comparison",
            leftTitle: "Sass Syntax",
            leftItems: [
              "Uses indentation.",
              "No braces.",
              "No semicolons.",
              "$color: blue\n\nbutton\n  background: $color"
            ],
            rightTitle: "SCSS Syntax",
            rightItems: [
              "Uses braces and semicolons.",
              "Looks almost identical to CSS.",
              "$color: blue;\n\nbutton {\n    background: $color;\n}"
            ]
          },
          {
            type: "paragraph",
            content: "Nearly all modern projects use SCSS because existing CSS can be copied directly into SCSS files without modification."
          }
        ]
      },
      {
        heading: "Why Developers Love Sass",
        blocks: [
          {
            type: "paragraph",
            content: "Sass significantly improves developer productivity. Instead of repeatedly writing similar CSS, developers create reusable building blocks."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less repetitive code",
              "Easier maintenance",
              "Better readability",
              "Reusable components",
              "Cleaner project organization",
              "Faster development",
              "Better scalability",
              "Easier collaboration"
            ]
          },
          {
            type: "paragraph",
            content: "Large companies often maintain CSS codebases containing tens of thousands of lines. Sass makes these projects manageable."
          }
        ]
      },
      {
        heading: "How Sass Works & Installation",
        blocks: [
          {
            type: "paragraph",
            content: "The workflow is simple."
          },
          {
            type: "output",
            content: "Create SCSS file → Write Sass features → Compiler processes file → Produces CSS → Browser loads CSS"
          },
          {
            type: "paragraph",
            content: "Compilation happens automatically during development using build tools."
          },
          {
            type: "paragraph",
            content: "Installing Sass"
          },
          {
            type: "paragraph",
            content: "The official implementation today is Dart Sass, distributed through npm. Install it globally:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install -g sass`
          },
          {
            type: "paragraph",
            content: "Check the installation: `sass --version`"
          },
          {
            type: "paragraph",
            content: "Compile a file: `sass style.scss style.css`"
          },
          {
            type: "paragraph",
            content: "Watch for changes automatically: `sass --watch style.scss:style.css`"
          },
          {
            type: "paragraph",
            content: "Every time you save the SCSS file, Sass regenerates the CSS automatically."
          }
        ]
      },
      {
        heading: "Typical Project Structure",
        blocks: [
          {
            type: "paragraph",
            content: "A small project may look like this:"
          },
          {
            type: "tree",
            content: `project/
├── index.html
├── scss/
│   └── style.scss
└── css/
    └── style.css`
          },
          {
            type: "paragraph",
            content: "For larger applications:"
          },
          {
            type: "tree",
            content: `scss/
├── base/
├── components/
├── layout/
├── pages/
├── themes/
├── utilities/
├── vendors/
└── style.scss`
          },
          {
            type: "paragraph",
            content: "The main file imports all other Sass modules. This organization keeps projects clean as they grow."
          }
        ]
      },
      {
        heading: "Features You'll Learn in Sass",
        blocks: [
          {
            type: "paragraph",
            content: "Sass offers many powerful features beyond standard CSS. Some of the most important are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Variables: `$primary: steelblue;` Store reusable values.",
              "Nesting: Keeps related styles together and mirrors HTML structure. Use sparingly.",
              "Partials: Split CSS into multiple files (e.g., `_buttons.scss`).",
              "Modules: Modern Sass uses `@use` and `@forward` instead of the older `@import`.",
              "Mixins: Reusable blocks of CSS (`@mixin center { ... }`).",
              "Functions: Create reusable calculations (`@function double($value) { ... }`).",
              "Inheritance: Share styles using placeholders (`%card { ... }`).",
              "Operators: Perform calculations (`width: 100px * 2;`).",
              "Loops: Generate repetitive CSS automatically (`@for $i from 1 through 5 { ... }`).",
              "Conditionals: Create dynamic styles (`@if $theme == dark { ... }`)."
            ]
          }
        ]
      },
      {
        heading: "Sass Compilation",
        blocks: [
          {
            type: "paragraph",
            content: "Compilation transforms SCSS into CSS."
          },
          {
            type: "comparison",
            leftTitle: "Sass Input",
            leftItems: [
              "$radius:10px;\n\n.card{\n    border-radius:$radius;\n}"
            ],
            rightTitle: "CSS Output",
            rightItems: [
              ".card{\n    border-radius:10px;\n}"
            ]
          },
          {
            type: "paragraph",
            content: "The browser never knows Sass existed."
          }
        ]
      },
      {
        heading: "Does Sass Make Websites Faster?",
        blocks: [
          {
            type: "paragraph",
            content: "This is a common misconception. No. Sass itself does not make websites load faster. The browser only downloads the generated CSS."
          },
          {
            type: "paragraph",
            content: "However, Sass helps developers write Cleaner CSS, Less duplicated code, Better organized styles, Easier-to-maintain projects. These practices can indirectly improve performance because developers are more likely to produce optimized stylesheets."
          }
        ]
      },
      {
        heading: "When Should You Use Sass?",
        blocks: [
          {
            type: "paragraph",
            content: "Sass is an excellent choice when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building medium or large websites.",
              "Working in teams.",
              "Creating reusable UI components.",
              "Developing design systems.",
              "Managing multiple themes.",
              "Maintaining long-term projects.",
              "Writing scalable CSS architectures."
            ]
          },
          {
            type: "paragraph",
            content: "For very small projects or simple landing pages, plain CSS is often sufficient."
          }
        ]
      },
      {
        heading: "Common Misconceptions About Sass",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "\"Sass replaces CSS.\"",
                answer: "No. Sass extends CSS and compiles into CSS."
              },
              {
                question: "\"Browsers understand Sass.\"",
                answer: "They don't. Browsers only understand CSS."
              },
              {
                question: "\"Sass is outdated.\"",
                answer: "Not at all. While modern CSS has adopted many features once unique to Sass, Sass remains valuable for large-scale projects thanks to its module system, mixins, functions, and mature ecosystem."
              },
              {
                question: "\"SCSS and Sass are different languages.\"",
                answer: "They are two syntaxes of the same language."
              },
              {
                question: "\"Sass automatically improves performance.\"",
                answer: "No. Good coding practices improve performance, not Sass itself."
              },
              {
                question: "\"Modern CSS has completely replaced Sass.\"",
                answer: "Modern CSS has reduced the need for Sass in some projects, but Sass is still widely used in production applications where code organization, reuse, and maintainability are priorities."
              }
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
              "Thinking Sass runs directly in the browser.",
              "Confusing Sass with SCSS.",
              "Using excessive nesting, leading to overly specific CSS.",
              "Continuing to use the deprecated @import instead of the modern @use and @forward module system.",
              "Using Sass for very small projects where plain CSS is simpler.",
              "Treating Sass as a replacement for good CSS practices.",
              "Overusing loops and mixins to generate unnecessary CSS.",
              "Forgetting that the final output is always standard CSS."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Sass is a powerful preprocessor that extends CSS with features like variables, nesting, mixins, and a robust module system. It solves the problems of code duplication and poor maintainability that arise in large CSS codebases. While browsers only understand standard CSS, Sass compiles your organized, programmatic `.scss` files into clean `.css` files."
          },
          {
            type: "paragraph",
            content: "This introduction provides the foundation for learning Sass. In the upcoming lessons, you'll explore each of its core features—variables, nesting, modules, mixins, inheritance, functions, control directives, and more—in depth, learning how to write cleaner, more scalable, and maintainable stylesheets for real-world projects."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A quick tip: If you are setting up a new project today using tools like Vite, Next.js, or Nuxt, Sass support is almost always built-in or requires just a single command to install. You don't need to manually run `sass --watch` in your terminal anymore!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Sass Variables
============================= */
    "css-sass-variables": {
    title: "Sass Variables",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Sass Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine you're building a website with hundreds of components. Your primary color appears in buttons, navigation bars, cards, alerts, links, icons, and footers. The same font sizes, spacing values, border radii, shadows, and breakpoints are repeated throughout your stylesheet."
          },
          {
            type: "paragraph",
            content: "Now imagine the designer says:"
          },
          {
            type: "output",
            content: "“Let's change the primary blue to purple, increase the border radius, and make all spacing slightly larger.”"
          },
          {
            type: "paragraph",
            content: "In plain CSS, you would have to manually search for every occurrence of those values and replace them one by one. Besides taking time, it's easy to miss some values, resulting in inconsistent styling."
          },
          {
            type: "paragraph",
            content: "This is exactly the problem Sass Variables were designed to solve."
          },
          {
            type: "paragraph",
            content: "Variables allow you to store reusable values in one place and use them throughout your entire project. Instead of hardcoding the same value repeatedly, you define it once and reference it wherever needed. If the value changes later, updating the variable automatically updates every place where it is used after Sass recompiles the stylesheet."
          },
          {
            type: "paragraph",
            content: "Although variables appear to be a simple feature, they are actually the foundation of scalable CSS architecture. Every large Sass project—from Bootstrap to enterprise design systems—relies heavily on variables."
          }
        ]
      },
      {
        heading: "What are Sass Variables?",
        blocks: [
          {
            type: "paragraph",
            content: "A Sass variable is simply a named container that stores a value."
          },
          {
            type: "paragraph",
            content: "The syntax is straightforward:"
          },
          {
            type: "output",
            content: "$variable-name: value;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "scss",
            content: `$primary-color: royalblue;

button {
    background: $primary-color;
}

h1 {
    color: $primary-color;
}`
          },
          {
            type: "paragraph",
            content: "Compiled CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    background: royalblue;
}

h1 {
    color: royalblue;
}`
          },
          {
            type: "paragraph",
            content: "Notice something important. The browser never receives `$primary-color`. Sass replaces every variable with its actual value during compilation. Variables exist only while Sass is generating CSS."
          }
        ]
      },
      {
        heading: "Why Variables Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Consider this CSS."
          },
          {
            type: "code",
            language: "css",
            content: `.card { border-radius: 12px; }
.button { border-radius: 12px; }
.modal { border-radius: 12px; }
.alert { border-radius: 12px; }`
          },
          {
            type: "paragraph",
            content: "Months later, the design system changes. Border radius becomes 18px. Now you have to locate every 12px."
          },
          {
            type: "paragraph",
            content: "Instead, write:"
          },
          {
            type: "code",
            language: "scss",
            content: `$radius: 12px;

.card { border-radius: $radius; }
.button { border-radius: $radius; }
.modal { border-radius: $radius; }
.alert { border-radius: $radius; }`
          },
          {
            type: "paragraph",
            content: "Changing one line updates the entire project."
          },
          {
            type: "code",
            language: "scss",
            content: `$radius: 18px;`
          },
          {
            type: "paragraph",
            content: "That's the real power of variables."
          }
        ]
      },
      {
        heading: "What Can Variables Store?",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think variables only store colors. Actually, they can store almost every Sass data type."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Colors: `$primary: #2563eb;`",
              "Numbers: `$padding: 20px;`",
              "Percentages: `$container-width: 90%;`",
              "Font Families: `$font-heading: \"Poppins\", sans-serif;`",
              "Border Radius: `$radius-small: 4px;`",
              "Shadows: `$shadow: 0 10px 30px rgba(0,0,0,.15);`",
              "Strings: `$page-theme: \"dark\";`",
              "Booleans: `$is-dark: true;` (Useful for @if logic)",
              "Lists: `$fonts: Arial, Helvetica, sans-serif;`",
              "Maps: `$colors: ( primary: #2563eb, success: #16a34a );` (Heavily used in frameworks)",
              "Null: `$border: null;` (Tells Sass no value exists)"
            ]
          }
        ]
      },
      {
        heading: "Naming Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Good naming is one of the most overlooked aspects of Sass."
          },
          {
            type: "comparison",
            leftTitle: "Bad names",
            leftItems: [
              "$blue",
              "$value",
              "$temp",
              "$test",
              "$x"
            ],
            rightTitle: "Good names",
            rightItems: [
              "$primary-color",
              "$secondary-color",
              "$heading-font",
              "$container-width",
              "$card-radius"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something. Professional developers rarely write: `$blue` Instead they write `$primary-color`. Why? Because today's blue might become green tomorrow. The role remains 'primary color'."
          },
          {
            type: "paragraph",
            content: "Always name variables based on purpose, not appearance."
          }
        ]
      },
      {
        heading: "Variable Scope",
        blocks: [
          {
            type: "paragraph",
            content: "Just like programming languages, Sass variables have scope. Understanding scope is extremely important. There are two kinds: Global Scope and Local Scope."
          },
          {
            type: "paragraph",
            content: "Global Variables"
          },
          {
            type: "paragraph",
            content: "Variables declared outside selectors become global."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;

.card { color: $primary; }
.button { background: $primary; }`
          },
          {
            type: "paragraph",
            content: "Every selector can access the variable."
          },
          {
            type: "paragraph",
            content: "Local Variables"
          },
          {
            type: "paragraph",
            content: "Variables created inside a selector only exist there."
          },
          {
            type: "code",
            language: "scss",
            content: `.card {
    $padding: 20px;
    padding: $padding;
}`
          },
          {
            type: "paragraph",
            content: "Trying to use it elsewhere (e.g., in `.button`) produces an error because `$padding` only exists inside `.card`."
          },
          {
            type: "paragraph",
            content: "Variable Shadowing"
          },
          {
            type: "paragraph",
            content: "Local variables can temporarily replace global variables."
          },
          {
            type: "code",
            language: "scss",
            content: `$color: blue;

.card {
    $color: red;
    color: $color; /* Output: red */
}

.button {
    color: $color; /* Output: blue */
}`
          },
          {
            type: "paragraph",
            content: "The global variable remains unchanged."
          }
        ]
      },
      {
        heading: "Variable Modifiers",
        blocks: [
          {
            type: "paragraph",
            content: "Reassigning Variables"
          },
          {
            type: "paragraph",
            content: "Variables aren't constants. You may change them. The newest assignment becomes the active value."
          },
          {
            type: "code",
            language: "scss",
            content: `$spacing: 20px;
$spacing: 30px;`
          },
          {
            type: "paragraph",
            content: "Default Variables (!default)"
          },
          {
            type: "paragraph",
            content: "Libraries often provide default values. Sass supports this using `!default`."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: blue !default;`
          },
          {
            type: "paragraph",
            content: "Meaning: Assign blue only if `$primary` has not already been defined."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: red;
$primary: blue !default;`
          },
          {
            type: "paragraph",
            content: "Result: `$primary` still equals `red`. This allows users to customize frameworks without editing the original source. Bootstrap relies heavily on this concept."
          }
        ]
      },
      {
        heading: "Advanced Variable Usage",
        blocks: [
          {
            type: "paragraph",
            content: "Using Variables Inside Calculations"
          },
          {
            type: "code",
            language: "scss",
            content: `$width: 400px;
.card { width: $width - 50px; } /* Output: 350px */`
          },
          {
            type: "paragraph",
            content: "Modern Sass recommends using `math.div()` for division instead of the legacy `/` operator to avoid ambiguity with CSS syntax."
          },
          {
            type: "paragraph",
            content: "Variables Referencing Other Variables"
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;
$link-color: $primary;
$button-color: $link-color;`
          },
          {
            type: "paragraph",
            content: "Variable Interpolation"
          },
          {
            type: "paragraph",
            content: "Sometimes variables need to appear inside selectors or property names. Interpolation uses: `#{$variable}`"
          },
          {
            type: "code",
            language: "scss",
            content: `$size: large;
.button-#{$size} { font-size: 20px; }

$property: margin;
.box { #{$property}: 20px; }`
          },
          {
            type: "paragraph",
            content: "Interpolation makes Sass much more dynamic."
          },
          {
            type: "paragraph",
            content: "Variables with Functions & Mixins"
          },
          {
            type: "paragraph",
            content: "Variables work naturally with Sass functions and mixins."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;
.button { background: lighten($primary, 10%); }`
          },
          {
            type: "paragraph",
            content: "Variables Inside Loops"
          },
          {
            type: "code",
            language: "scss",
            content: `$gap: 20px;
@for $i from 1 through 4 {
    .p-#{$i} {
        padding: $gap * $i;
    }
}`
          },
          {
            type: "paragraph",
            content: "Variables make automation possible."
          }
        ]
      },
      {
        heading: "Sass Variables vs CSS Variables",
        blocks: [
          {
            type: "paragraph",
            content: "This is probably the most misunderstood topic. Many beginners think they are identical. They are not."
          },
          {
            type: "table",
            headers: [
              "Sass Variables",
              "CSS Variables"
            ],
            rows: [
              [
                "Start with $",
                "Start with --"
              ],
              [
                "Exist only during compilation",
                "Exist in the browser"
              ],
              [
                "Cannot change after compilation",
                "Can change at runtime"
              ],
              [
                "Invisible in DevTools",
                "Visible in DevTools"
              ],
              [
                "Used by Sass",
                "Used by browsers"
              ],
              [
                "Excellent for reusable development values",
                "Excellent for dynamic themes"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "The Compilation Difference"
          },
          {
            type: "paragraph",
            content: "Sass variables completely disappear after compilation. CSS variables stay in the output. That's why JavaScript can modify CSS variables dynamically, but it can never modify Sass variables after compilation."
          },
          {
            type: "paragraph",
            content: "Combining Sass Variables and CSS Variables"
          },
          {
            type: "paragraph",
            content: "Modern projects often use both."
          },
          {
            type: "code",
            language: "scss",
            content: `$primary: #2563eb;
:root {
    --primary: #{$primary};
}`
          },
          {
            type: "paragraph",
            content: "Now Sass manages the initial value, while CSS variables allow runtime customization. This is one of the most common approaches in modern frontend frameworks."
          },
          {
            type: "paragraph",
            content: "CSS Variables Inside Sass"
          },
          {
            type: "paragraph",
            content: "A common beginner mistake is expecting Sass to perform calculations using CSS variables. This won't work in the same way because Sass runs before the browser knows the value of `var(--primary)`. If you need dynamic color transformations, you'll often use native CSS functions (where supported) or expose multiple precomputed values."
          }
        ]
      },
      {
        heading: "Variables for Design Tokens",
        blocks: [
          {
            type: "paragraph",
            content: "Professional design systems rarely use random values. Instead they define tokens."
          },
          {
            type: "code",
            language: "scss",
            content: `$color-primary: #2563eb;
$color-success: #16a34a;

$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 40px;

$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 16px;

$font-sm: 14px;
$font-md: 16px;
$font-lg: 20px;`
          },
          {
            type: "paragraph",
            content: "Every component references these variables. Nothing is hardcoded. This creates consistency throughout the application."
          }
        ]
      },
      {
        heading: "Organizing Variables",
        blocks: [
          {
            type: "paragraph",
            content: "As projects grow, variables should never stay inside one huge file. A better structure is:"
          },
          {
            type: "tree",
            content: `scss/
├── abstracts/
│   ├── _colors.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   ├── _breakpoints.scss
│   ├── _radius.scss
│   └── _shadows.scss
└── style.scss`
          },
          {
            type: "paragraph",
            content: "Using the modern module system:"
          },
          {
            type: "code",
            language: "scss",
            content: `@use "abstracts/colors";
@use "abstracts/spacing";`
          },
          {
            type: "paragraph",
            content: "This keeps variables organized, avoids global namespace conflicts, and scales much better than the older @import approach."
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
              "Naming variables after colors instead of their purpose.",
              "Creating too many variables for values that are used only once.",
              "Forgetting that Sass variables disappear after compilation.",
              "Confusing Sass variables with CSS custom properties.",
              "Trying to change Sass variables using JavaScript.",
              "Declaring important variables inside local scopes accidentally.",
              "Using legacy global functions and outdated @import syntax in new projects instead of the recommended module system.",
              "Hardcoding values throughout components instead of centralizing them into design tokens.",
              "Expecting Sass to evaluate runtime CSS variable values during compilation."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Sass variables may seem like a small feature, but they fundamentally change how stylesheets are written. They eliminate repetition, improve consistency, simplify maintenance, and provide a single source of truth for your design values. Nearly every advanced Sass concept—including mixins, functions, loops, modules, theming, and scalable design systems—builds upon effective use of variables. Mastering them early will make the rest of your Sass journey significantly easier and prepare you to work confidently on professional frontend projects of any size."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Sass Nesting
============================= */
    "css-sass-nesting": {
    title: "Sass Nesting",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Sass Nesting",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Sass over plain CSS is nesting. Nesting allows you to write CSS in a way that closely mirrors the structure of your HTML, making styles easier to read, organize, and maintain."
          },
          {
            type: "paragraph",
            content: "In traditional CSS, every selector must be written completely, even if multiple selectors belong to the same component. This often leads to repetitive code and makes large stylesheets difficult to navigate."
          },
          {
            type: "paragraph",
            content: "For example, consider a navigation bar."
          },
          {
            type: "comparison",
            leftTitle: "In plain CSS",
            leftItems: [
              ".navbar { background: #222; }",
              ".navbar ul { list-style: none; }",
              ".navbar li { display: inline-block; }",
              ".navbar a { color: white; }",
              ".navbar a:hover { color: orange; }"
            ],
            rightTitle: "With Sass Nesting",
            rightItems: [
              ".navbar {\n  background: #222;\n  ul { list-style: none; }\n  li { display: inline-block; }\n  a { color: white; \n      &:hover { color: orange; } \n  }\n}"
            ]
          },
          {
            type: "paragraph",
            content: "The code is shorter, cleaner, and clearly represents the HTML hierarchy."
          },
          {
            type: "paragraph",
            content: "After compilation, Sass automatically generates the equivalent CSS."
          },
          {
            type: "paragraph",
            content: "Nesting is one of the most frequently used Sass features because almost every website contains components with child elements. However, nesting is also one of the easiest features to misuse. Excessive nesting creates overly specific selectors, bloated CSS, and code that becomes harder—not easier—to maintain. Understanding when and how to nest is just as important as learning the syntax."
          }
        ]
      },
      {
        heading: "What is Sass Nesting?",
        blocks: [
          {
            type: "paragraph",
            content: "Sass nesting allows one selector to be placed inside another selector. Instead of repeatedly writing parent selectors, child selectors are written inside their parent block."
          },
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "scss",
            content: `.parent {
    property: value;
    .child {
        property: value;
    }
}`
          },
          {
            type: "paragraph",
            content: "Compiled CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.parent {
    property: value;
}
.parent .child {
    property: value;
}`
          },
          {
            type: "paragraph",
            content: "Sass automatically combines parent and child selectors."
          }
        ]
      },
      {
        heading: "Why Use Nesting?",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Without nesting",
            leftItems: [
              ".card { background: white; }",
              ".card h2 { font-size: 24px; }",
              ".card p { color: gray; }",
              ".card button { background: blue; }"
            ],
            rightTitle: "With nesting",
            rightItems: [
              ".card {\n  background: white;\n  h2 { font-size: 24px; }\n  p { color: gray; }\n  button { background: blue; }\n}"
            ]
          },
          {
            type: "paragraph",
            content: "The second version groups everything related to the .card component together, making it easier to understand and maintain."
          }
        ]
      },
      {
        heading: "How Sass Compiles Nested Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Sass simply joins selectors using descendant combinators unless instructed otherwise."
          },
          {
            type: "code",
            language: "scss",
            content: `.container {
    h1 {
        color: red;
    }
}`
          },
          {
            type: "paragraph",
            content: "Generated CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.container h1 {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Multiple Levels of Nesting"
          },
          {
            type: "paragraph",
            content: "You can nest several levels deep."
          },
          {
            type: "code",
            language: "scss",
            content: `nav {
    ul {
        li {
            a {
                color: black;
            }
        }
    }
}`
          },
          {
            type: "paragraph",
            content: "Compiled CSS: `nav ul li a { color: black; }`"
          }
        ]
      },
      {
        heading: "Nesting Pseudo Classes and the Parent Selector (&)",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common uses of nesting is with pseudo-classes."
          },
          {
            type: "paragraph",
            content: "Instead of writing `.button:hover { background: red; }`, use:"
          },
          {
            type: "code",
            language: "scss",
            content: `.button {
    background: blue;
    &:hover {
        background: red;
    }
}`
          },
          {
            type: "paragraph",
            content: "Notice the use of `&`. This is called the parent selector."
          },
          {
            type: "paragraph",
            content: "The ampersand (&) represents the current parent selector. Without `&`, Sass would generate `.button :hover` which means \"hovered descendant\" rather than \"hovered button.\""
          },
          {
            type: "paragraph",
            content: "Using & with Multiple Pseudo Classes"
          },
          {
            type: "code",
            language: "scss",
            content: `input {
    &:focus { border-color: blue; }
    &:hover { border-color: gray; }
    &:disabled { opacity: .5; }
}`
          }
        ]
      },
      {
        heading: "Using & for BEM and Modifiers",
        blocks: [
          {
            type: "paragraph",
            content: "Using & with Modifier Classes"
          },
          {
            type: "paragraph",
            content: "Suppose you use the BEM naming convention."
          },
          {
            type: "code",
            language: "scss",
            content: `.button {
    &--primary { background: blue; }
    &--large { font-size: 20px; }
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "css",
            content: `.button--primary { background: blue; }
.button--large { font-size: 20px; }`
          },
          {
            type: "paragraph",
            content: "Using & with BEM Elements"
          },
          {
            type: "code",
            language: "scss",
            content: `.card {
    &__title { font-size: 24px; }
    &__body { padding: 20px; }
}`
          },
          {
            type: "paragraph",
            content: "Output: `.card__title{} .card__body{}`. Many professional Sass codebases rely on this pattern."
          }
        ]
      },
      {
        heading: "Advanced Nesting",
        blocks: [
          {
            type: "paragraph",
            content: "Nesting Attribute Selectors"
          },
          {
            type: "code",
            language: "scss",
            content: `input {
    &[type="text"] {
        border: 1px solid gray;
    }
}`
          },
          {
            type: "paragraph",
            content: "Nesting Pseudo Elements"
          },
          {
            type: "code",
            language: "scss",
            content: `button {
    &::before { content: "★"; }
}`
          },
          {
            type: "paragraph",
            content: "Nesting Multiple Selectors"
          },
          {
            type: "code",
            language: "scss",
            content: `.card {
    h2, h3, h4 { color: navy; }
}`
          },
          {
            type: "paragraph",
            content: "Nesting Combinators"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Child combinator: `.menu { > li { ... } }` -> `.menu > li`",
              "Adjacent sibling: `.card { + .card { ... } }` -> `.card + .card`",
              "General sibling: `.alert { ~ .alert { ... } }` -> `.alert ~ .alert`"
            ]
          }
        ]
      },
      {
        heading: "Nesting Media Queries & Supports Rules",
        blocks: [
          {
            type: "paragraph",
            content: "One of Sass's nicest features is placing media queries inside components. Instead of collecting all media queries at the bottom of the stylesheet, you can keep responsive rules next to the component they affect."
          },
          {
            type: "code",
            language: "scss",
            content: `.card {
    width: 400px;

    @media(max-width: 768px) {
        width: 100%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "css",
            content: `.card { width: 400px; }
@media(max-width: 768px) {
    .card { width: 100%; }
}`
          },
          {
            type: "paragraph",
            content: "Nesting Supports Rules"
          },
          {
            type: "code",
            language: "scss",
            content: `.card {
    display: grid;
    @supports(display: subgrid) {
        display: subgrid;
    }
}`
          }
        ]
      },
      {
        heading: "Reverse Nesting with &",
        blocks: [
          {
            type: "paragraph",
            content: "The parent selector can also appear later in the selector."
          },
          {
            type: "code",
            language: "scss",
            content: `.button {
    .dark-theme & {
        background: black;
    }
}`
          },
          {
            type: "paragraph",
            content: "Output: `.dark-theme .button { background: black; }`"
          },
          {
            type: "paragraph",
            content: "This technique is especially useful for themes and context-dependent styling."
          }
        ]
      },
      {
        heading: "Advantages and When to Use Nesting",
        blocks: [
          {
            type: "paragraph",
            content: "Advantages of Sass Nesting:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reduces repetition.",
              "Makes styles mirror HTML structure.",
              "Groups related styles together.",
              "Improves readability.",
              "Makes components easier to maintain.",
              "Works naturally with media queries.",
              "Excellent for pseudo-classes and pseudo-elements.",
              "Integrates perfectly with BEM naming."
            ]
          },
          {
            type: "paragraph",
            content: "When Should You Nest? Good candidates include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Child elements of a component.",
              "Pseudo-classes (:hover, :focus, :active).",
              "Pseudo-elements (::before, ::after).",
              "Modifier classes.",
              "Media queries inside components.",
              "Attribute selectors.",
              "Theme-based parent selectors."
            ]
          }
        ]
      },
      {
        heading: "When Should You Avoid Nesting?",
        blocks: [
          {
            type: "paragraph",
            content: "Not everything should be nested. Avoid deeply nested structures like:"
          },
          {
            type: "code",
            language: "scss",
            content: `.page {
    .container {
        .content {
            .section {
                .card {
                    .header {
                        h2 {
                            span {
                                color: red;
                            }
                        }
                    }
                }
            }
        }
    }
}`
          },
          {
            type: "paragraph",
            content: "Although valid, this generates an extremely long selector: `.page .container .content .section .card .header h2 span`"
          },
          {
            type: "paragraph",
            content: "Such selectors are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hard to read.",
              "Hard to override.",
              "More specific than necessary.",
              "Difficult to maintain.",
              "Tightly coupled to the HTML structure."
            ]
          },
          {
            type: "paragraph",
            content: "A common recommendation in professional Sass codebases is to keep nesting shallow—generally no more than three levels deep."
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
                question: "Nesting too deeply because \"Sass allows it.\"",
                answer: "Keep nesting to a maximum of 3 levels deep to prevent overly specific selectors."
              },
              {
                question: "Forgetting to use & with pseudo-classes and pseudo-elements.",
                answer: "Without `&`, Sass will add a space, treating it as a descendant rather than a state of the parent."
              },
              {
                question: "Creating unnecessarily specific selectors.",
                answer: "Deep nesting creates selectors that are hard to override later."
              },
              {
                question: "Mirroring every level of HTML instead of styling components.",
                answer: "Don't recreate the entire DOM tree in CSS. Style the components directly."
              },
              {
                question: "Nesting unrelated selectors inside a component.",
                answer: "Only nest elements that structurally or conceptually belong to the parent component."
              },
              {
                question: "Confusing Sass nesting with native CSS nesting",
                answer: "They are similar but not identical. Native CSS often requires the & in places where Sass can infer the parent selector automatically."
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
            content: "Sass nesting is one of the features that makes writing styles feel natural and organized. Used correctly, it reduces repetition, groups related styles together, and makes components easier to understand. Used carelessly, it can produce overly specific selectors and tightly coupled code."
          },
          {
            type: "paragraph",
            content: "The goal isn't to nest as much as possible—it's to nest only where it improves clarity. Professional developers treat nesting as a tool for expressing component relationships, not as a way to replicate the entire HTML tree. Mastering this balance will help you write Sass that remains clean, scalable, and maintainable as your projects grow."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The Inception Rule: A good rule of thumb for nesting is the 'Inception Rule'—don't go deeper than three levels. If you find yourself writing `.card { .content { .list { .item { span { color: red; } } } } }`, it's time to create a new class for that item (e.g., `.card-item`) and start fresh. Keep it flat!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Sass Mixins
============================= */
    "css-sass-mixins": {
    title: "Sass Mixins",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Sass Mixins",
        blocks: [
          {
            type: "paragraph",
            content: "As your CSS projects grow, you'll quickly notice that the same group of CSS properties gets repeated over and over again."
          },
          {
            type: "paragraph",
            content: "For example, consider styling buttons:"
          },
          {
            type: "code",
            language: "css",
            content: `.button-primary {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    background: blue;
}

.button-success {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    background: green;
}`
          },
          {
            type: "paragraph",
            content: "Only the background color changes, while every other property is identical. This repetition makes code Difficult to maintain, Larger than necessary, Error-prone, Harder to update. Imagine changing the border-radius from 8px to 12px. You would need to edit every button class manually."
          },
          {
            type: "paragraph",
            content: "This is exactly the problem Sass Mixins solve."
          },
          {
            type: "paragraph",
            content: "A mixin allows you to write a block of reusable CSS once and include it anywhere in your stylesheet. Think of it as creating your own custom CSS instruction that can be reused with or without customization."
          },
          {
            type: "paragraph",
            content: "Mixins are one of Sass's most powerful features and are heavily used in professional frameworks, design systems, UI libraries, and component-based architectures."
          }
        ]
      },
      {
        heading: "What is a Sass Mixin?",
        blocks: [
          {
            type: "paragraph",
            content: "A mixin is a reusable collection of CSS declarations."
          },
          {
            type: "paragraph",
            content: "Instead of rewriting the same properties multiple times, you define them once using `@mixin` and reuse them using `@include`."
          },
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin mixin-name {
    property: value;
    property: value;
}

selector {
    @include mixin-name;
}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.btn {
    @include button;
}`
          },
          {
            type: "paragraph",
            content: "Compiled CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}`
          },
          {
            type: "paragraph",
            content: "Notice that the mixin itself disappears after compilation. Only the generated CSS remains."
          }
        ]
      },
      {
        heading: "Why Use Mixins?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose five different components require identical shadows."
          },
          {
            type: "comparison",
            leftTitle: "Without a mixin",
            leftItems: [
              ".card {\n  box-shadow: 0 10px 30px rgba(0,0,0,.15);\n}",
              ".modal {\n  box-shadow: 0 10px 30px rgba(0,0,0,.15);\n}",
              ".dropdown {\n  box-shadow: 0 10px 30px rgba(0,0,0,.15);\n}"
            ],
            rightTitle: "Using a mixin",
            rightItems: [
              "@mixin shadow {\n  box-shadow: 0 10px 30px rgba(0,0,0,.15);\n}",
              ".card {\n  @include shadow;\n}",
              ".modal {\n  @include shadow;\n}"
            ]
          },
          {
            type: "paragraph",
            content: "Now every component shares the same styling logic. Multiple mixins can be included in a single selector."
          }
        ]
      },
      {
        heading: "Mixins with Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "One of the greatest advantages of mixins is that they can accept arguments. Instead of creating separate mixins for every variation, you can make one flexible mixin."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin square($size) {
    width: $size;
    height: $size;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "scss",
            content: `.icon {
    @include square(50px);
}`
          },
          {
            type: "paragraph",
            content: "Multiple Parameters"
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin button($bg, $color) {
    background: $bg;
    color: $color;
    padding: 12px 20px;
}

.primary {
    @include button(blue, white);
}`
          },
          {
            type: "paragraph",
            content: "One mixin now creates unlimited button variations."
          },
          {
            type: "paragraph",
            content: "Default Parameter Values"
          },
          {
            type: "paragraph",
            content: "Parameters can have default values."
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin card($radius: 10px) {
    border-radius: $radius;
}

.box { @include card; } /* Output: border-radius: 10px; */
.profile { @include card(20px); } /* Output: border-radius: 20px; */`
          },
          {
            type: "paragraph",
            content: "Named Arguments"
          },
          {
            type: "paragraph",
            content: "Arguments can also be passed by name instead of position."
          },
          {
            type: "code",
            language: "scss",
            content: `@include button(
    $color: white,
    $bg: red,
    $radius: 10px
);`
          },
          {
            type: "paragraph",
            content: "Named arguments improve readability, especially for mixins with many parameters."
          },
          {
            type: "paragraph",
            content: "Variable Number of Arguments"
          },
          {
            type: "paragraph",
            content: "Sass supports variable-length arguments using `...`"
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin fonts($fonts...) {
    font-family: $fonts;
}`
          }
        ]
      },
      {
        heading: "Advanced Mixin Features",
        blocks: [
          {
            type: "paragraph",
            content: "Mixins with Conditional Logic"
          },
          {
            type: "paragraph",
            content: "Mixins become much more powerful when combined with `@if`."
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin theme($mode) {
    @if $mode == dark {
        background: #222;
        color: white;
    } @else {
        background: white;
        color: black;
    }
}

.card {
    @include theme(dark);
}`
          },
          {
            type: "paragraph",
            content: "Mixins with Loops"
          },
          {
            type: "paragraph",
            content: "Mixins can generate repetitive CSS automatically."
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin spacing($count) {
    @for $i from 1 through $count {
        .m-#{$i} {
            margin: $i * 10px;
        }
    }
}`
          },
          {
            type: "paragraph",
            content: "Content Blocks (@content)"
          },
          {
            type: "paragraph",
            content: "One of the most advanced and useful features of Sass mixins is `@content`. It allows a mixin to wrap custom CSS supplied by the caller."
          },
          {
            type: "code",
            language: "scss",
            content: `@mixin desktop {
    @media(min-width: 992px) {
        @content;
    }
}

.card {
    @include desktop {
        width: 500px;
        padding: 30px;
    }
}`
          },
          {
            type: "paragraph",
            content: "Instead of hardcoding styles inside the mixin, `@content` makes the mixin reusable for any CSS block. This feature is widely used for responsive design and theme wrappers."
          }
        ]
      },
      {
        heading: "Common Real-World Mixins",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Media Query Mixins",
                description: "@mixin mobile { @media(max-width: 768px) { @content; } }"
              },
              {
                title: "Transition Mixins",
                description: "@mixin transition { transition: all .3s ease; }"
              },
              {
                title: "Flexbox Centering",
                description: "@mixin flex-center { display: flex; justify-content: center; align-items: center; }"
              },
              {
                title: "Gradient Mixin",
                description: "@mixin gradient($start, $end) { background: linear-gradient(to right, $start, $end); }"
              },
              {
                title: "Circle Mixin",
                description: "@mixin circle($size) { width: $size; height: $size; border-radius: 50%; }"
              }
            ]
          }
        ]
      },
      {
        heading: "Mixins vs Other Sass Features",
        blocks: [
          {
            type: "paragraph",
            content: "Mixins vs Functions"
          },
          {
            type: "paragraph",
            content: "This is one of the most common interview questions."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mixins generate CSS. (Produce blocks of CSS)",
              "Functions return values. (Calculate and return values)"
            ]
          },
          {
            type: "paragraph",
            content: "Mixins vs Placeholder Selectors"
          },
          {
            type: "paragraph",
            content: "Both placeholders (`%name`) and mixins reduce repetition, but they work differently."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mixins copy the CSS wherever they are included, making them ideal for reusable patterns with parameters.",
              "Placeholder selectors use `@extend` to merge selectors, reducing duplicate CSS but offering less flexibility."
            ]
          },
          {
            type: "paragraph",
            content: "If your styles need customization through arguments or conditional logic, use a mixin. If several selectors should literally share the same declarations without variation, a placeholder may be more appropriate."
          }
        ]
      },
      {
        heading: "Organizing Mixins",
        blocks: [
          {
            type: "paragraph",
            content: "In professional projects, mixins are usually stored separately."
          },
          {
            type: "tree",
            content: `scss/
├── abstracts/
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── _functions.scss
├── components/
├── layout/
├── pages/
└── main.scss`
          },
          {
            type: "paragraph",
            content: "Using the modern Sass module system:"
          },
          {
            type: "code",
            language: "scss",
            content: `@use "abstracts/mixins";

.card {
    @include mixins.shadow;
}`
          },
          {
            type: "paragraph",
            content: "The `@use` rule is recommended over the older `@import`, which has been deprecated in modern Sass."
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
                question: "Creating a mixin for code that is only used once.",
                answer: "Mixins are for reusability. If it's used once, just write standard CSS."
              },
              {
                question: "Using mixins when a simple CSS class is sufficient.",
                answer: "If the CSS doesn't need to accept parameters, sometimes a standard utility class in your HTML is a cleaner approach."
              },
              {
                question: "Forgetting that every @include duplicates the mixin's CSS",
                answer: "Overusing large mixins without parameters can bloat your compiled CSS file."
              },
              {
                question: "Writing extremely large mixins",
                answer: "Mixins shouldn't handle too many unrelated responsibilities. Keep them focused."
              },
              {
                question: "Using positional arguments instead of named arguments",
                answer: "For mixins with many parameters, named arguments (`$color: blue`) improve readability significantly."
              },
              {
                question: "Confusing mixins with functions",
                answer: "Functions return values (`double(20px)`), while mixins generate CSS (`@include shadow;`)."
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
            content: "Sass Mixins are one of the core features that transform Sass from a simple CSS preprocessor into a powerful tool for building scalable stylesheets. They allow you to encapsulate reusable styling patterns, accept customizable parameters, include conditional logic, wrap responsive rules with `@content`, and integrate seamlessly with variables, functions, loops, and modules."
          },
          {
            type: "paragraph",
            content: "Used thoughtfully, mixins reduce repetition, improve consistency, and make your codebase significantly easier to maintain as projects grow from a handful of components to large design systems."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While Mixins are incredibly powerful, be careful of 'Mixin bloat'. Every time you `@include` a mixin, Sass copies all of those CSS rules into that selector in the final CSS file. If you have a massive mixin and you include it in 50 different classes, your compiled CSS file will be unnecessarily huge. For large blocks of identical CSS without parameters, consider using `%placeholders` with `@extend`."
          }
        ]
      }
    ]
  },
};

export default cssPreprocessors;