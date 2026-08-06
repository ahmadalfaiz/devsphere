const cssAdvancedSelectors = {

/* ===========================
    First Topic : Combinators
============================= */
    "css-combinators": {
    title: "Combinators",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Combinators",
        blocks: [
          {
            type: "paragraph",
            content: "As websites grow larger, selecting elements individually becomes inefficient. CSS provides Combinators that allow developers to target elements based on their relationship with other elements."
          },
          {
            type: "paragraph",
            content: "Combinators are one of the most powerful parts of CSS because they let you style elements according to the structure of the HTML document rather than assigning classes to every element."
          },
          {
            type: "paragraph",
            content: "Understanding combinators is essential for writing clean, scalable, and maintainable CSS."
          }
        ]
      },
      {
        heading: "What Are CSS Combinators?",
        blocks: [
          {
            type: "paragraph",
            content: "A Combinator is a symbol or character that defines the relationship between two selectors."
          },
          {
            type: "paragraph",
            content: "Instead of selecting elements directly, combinators select elements based on their position relative to other elements."
          },
          {
            type: "paragraph",
            content: "General Syntax"
          },
          {
            type: "code",
            language: "css",
            content: `selector1 combinator selector2 {
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
            content: `div p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "This selects all <p> elements inside a <div>."
          }
        ]
      },
      {
        heading: "Why Use Combinators?",
        blocks: [
          {
            type: "paragraph",
            content: "Without combinators:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="inside">Paragraph</p>
<p class="inside">Paragraph</p>
<p class="inside">Paragraph</p>`
          },
          {
            type: "code",
            language: "css",
            content: `.inside {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "You must add classes repeatedly."
          },
          {
            type: "paragraph",
            content: "With combinators:"
          },
          {
            type: "code",
            language: "css",
            content: `div p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "No extra classes are required."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner HTML",
              "Less repetitive code",
              "Better maintainability",
              "More precise targeting",
              "Improved scalability"
            ]
          }
        ]
      },
      {
        heading: "Types of CSS Combinators",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides four primary combinators:"
          },
          {
            type: "table",
            headers: [
              "Combinator",
              "Name"
            ],
            rows: [
              [
                "Space ( )",
                "Descendant Combinator"
              ],
              [
                ">",
                "Child Combinator"
              ],
              [
                "+",
                "Adjacent Sibling Combinator"
              ],
              [
                "~",
                "General Sibling Combinator"
              ]
            ]
          }
        ]
      },
      {
        heading: "1. Descendant Combinator",
        blocks: [
          {
            type: "paragraph",
            content: "The descendant combinator is represented by a space."
          },
          {
            type: "paragraph",
            content: "It selects all matching descendants regardless of depth."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "ancestor descendant"
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<div>
    <p>Paragraph 1</p>

    <section>
        <p>Paragraph 2</p>
    </section>
</div>`
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
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Both paragraphs become red."
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because both <p> elements are descendants of <div>."
          },
          {
            type: "paragraph",
            content: "Visual Representation"
          },
          {
            type: "output",
            content: [
              "div",
              "├── p",
              "└── section",
              "     └── p"
            ]
          },
          {
            type: "paragraph",
            content: "Both <p> elements match."
          },
          {
            type: "paragraph",
            content: "Descendant Combinator Characteristics"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Can target deeply nested elements",
              "Most commonly used combinator",
              "Searches through all descendants",
              "Useful for large layouts"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `article h2 {
    color: navy;
}`
          },
          {
            type: "paragraph",
            content: "Every <h2> inside an <article> gets selected."
          }
        ]
      },
      {
        heading: "2. Child Combinator (>)",
        blocks: [
          {
            type: "paragraph",
            content: "The child combinator selects only direct children."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "parent > child"
          },
          {
            type: "paragraph",
            content: "Example"
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
            type: "code",
            language: "css",
            content: `div > p {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only:"
          },
          {
            type: "output",
            content: "<p>Direct Child</p>"
          },
          {
            type: "paragraph",
            content: "gets styled."
          },
          {
            type: "paragraph",
            content: "Visual Representation"
          },
          {
            type: "output",
            content: [
              "div",
              "├── p ✓",
              "└── section",
              "     └── p ✗"
            ]
          },
          {
            type: "paragraph",
            content: "Only immediate children are selected."
          },
          {
            type: "paragraph",
            content: "When to Use Child Combinators"
          },
          {
            type: "paragraph",
            content: "Useful when you want strict control."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `nav > ul {
    list-style: none;
}`
          },
          {
            type: "paragraph",
            content: "This ensures only the navigation list is targeted."
          }
        ]
      },
      {
        heading: "Descendant vs Child Combinator",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "html",
            content: `<div>
    <p>Paragraph 1</p>

    <section>
        <p>Paragraph 2</p>
    </section>
</div>`
          },
          {
            type: "comparison",
            leftTitle: "Descendant (div p)",
            leftItems: [
              "Matches:",
              "Paragraph 1",
              "Paragraph 2"
            ],
            rightTitle: "Child (div > p)",
            rightItems: [
              "Matches:",
              "Paragraph 1 only."
            ]
          }
        ]
      },
      {
        heading: "3. Adjacent Sibling Combinator (+)",
        blocks: [
          {
            type: "paragraph",
            content: "Selects the immediately following sibling."
          },
          {
            type: "paragraph",
            content: "Syntax"
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
            language: "html",
            content: `<h2>Title</h2>

<p>Paragraph 1</p>

<p>Paragraph 2</p>`
          },
          {
            type: "code",
            language: "css",
            content: `h2 + p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only:"
          },
          {
            type: "output",
            content: "<p>Paragraph 1</p>"
          },
          {
            type: "paragraph",
            content: "is selected."
          },
          {
            type: "paragraph",
            content: "Visual Representation"
          },
          {
            type: "output",
            content: [
              "h2",
              "p  ✓",
              "p  ✗"
            ]
          },
          {
            type: "paragraph",
            content: "Only the first sibling after <h2> matches."
          },
          {
            type: "paragraph",
            content: "Practical Use Case"
          },
          {
            type: "paragraph",
            content: "Many professional websites style the first paragraph after a heading."
          },
          {
            type: "code",
            language: "css",
            content: `h1 + p {
    font-size: 18px;
}`
          },
          {
            type: "paragraph",
            content: "This creates attractive article layouts."
          }
        ]
      },
      {
        heading: "4. General Sibling Combinator (~)",
        blocks: [
          {
            type: "paragraph",
            content: "Selects all matching siblings after an element."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "element1 ~ element2"
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<h2>Heading</h2>

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>`
          },
          {
            type: "code",
            language: "css",
            content: `h2 ~ p {
    color: purple;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "All three paragraphs become purple."
          },
          {
            type: "paragraph",
            content: "Visual Representation"
          },
          {
            type: "output",
            content: [
              "h2",
              "p ✓",
              "p ✓",
              "p ✓"
            ]
          },
          {
            type: "paragraph",
            content: "Every matching sibling after <h2> is selected."
          }
        ]
      },
      {
        heading: "Adjacent Sibling vs General Sibling",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<h2>Heading</h2>

<p>One</p>
<p>Two</p>
<p>Three</p>`
          },
          {
            type: "comparison",
            leftTitle: "Adjacent Sibling (h2 + p)",
            leftItems: [
              "Matches:",
              "One only."
            ],
            rightTitle: "General Sibling (h2 ~ p)",
            rightItems: [
              "Matches:",
              "One",
              "Two",
              "Three",
              "all paragraphs."
            ]
          }
        ]
      },
      {
        heading: "Combinator Comparison Table",
        blocks: [
          {
            type: "table",
            headers: [
              "Selector",
              "Meaning"
            ],
            rows: [
              [
                "div p",
                "All descendant paragraphs"
              ],
              [
                "div > p",
                "Direct child paragraphs"
              ],
              [
                "h1 + p",
                "First paragraph immediately after h1"
              ],
              [
                "h1 ~ p",
                "All paragraphs after h1"
              ]
            ]
          }
        ]
      },
      {
        heading: "Combining Multiple Combinators",
        blocks: [
          {
            type: "paragraph",
            content: "Combinators can be chained together."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `nav > ul li a {
    color: darkblue;
}`
          },
          {
            type: "paragraph",
            content: "Explanation:"
          },
          {
            type: "output",
            content: [
              "nav",
              " └── ul",
              "      └── li",
              "           └── a"
            ]
          },
          {
            type: "paragraph",
            content: "The selector targets links inside list items inside a navigation list."
          }
        ]
      },
      {
        heading: "Complex Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<article>
    <h2>Article Title</h2>

    <p>Intro Paragraph</p>

    <section>
        <p>Content Paragraph</p>
    </section>
</article>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `article > h2 {
    color: navy;
}

h2 + p {
    font-weight: bold;
}

article p {
    line-height: 1.6;
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
              "Heading becomes navy",
              "Intro paragraph becomes bold",
              "All paragraphs get increased line height"
            ]
          }
        ]
      },
      {
        heading: "Combinators with Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <p>Paragraph</p>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container > p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Combinators work perfectly with classes."
          }
        ]
      },
      {
        heading: "Combinators with IDs",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `#main-content p {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Selects all paragraphs inside the element with id main-content."
          }
        ]
      },
      {
        heading: "Combinators with Pseudo-Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `nav li:hover > ul {
    display: block;
}`
          },
          {
            type: "paragraph",
            content: "Used frequently in dropdown menus."
          },
          {
            type: "paragraph",
            content: "Meaning: When a list item is hovered, show its direct child submenu."
          }
        ]
      },
      {
        heading: "Combinators and Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials skip this important topic."
          },
          {
            type: "paragraph",
            content: "Combinators themselves do not add specificity."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "div p"
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: "0,0,0,2"
          },
          {
            type: "paragraph",
            content: "The combinator contributes nothing."
          },
          {
            type: "paragraph",
            content: "Only selectors affect specificity."
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "On modern browsers, performance differences are usually negligible."
          },
          {
            type: "paragraph",
            content: "However:"
          },
          {
            type: "output",
            content: "body div section article p"
          },
          {
            type: "paragraph",
            content: "is harder to maintain than:"
          },
          {
            type: "output",
            content: ".article-text"
          },
          {
            type: "paragraph",
            content: "Good developers prefer readability over excessive nesting."
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
                question: "Mistake 1: Using descendant when child is required.",
                answer: "Using `nav ul li` targets every list item, even nested sub-menus. Use `nav > ul > li` when only direct children should be selected."
              },
              {
                question: "Mistake 2: Confusing + and ~",
                answer: "`h1 + p` selects only the single paragraph immediately following the h1. `h1 ~ p` selects all paragraphs that follow the h1 as siblings."
              },
              {
                question: "Mistake 3: Forgetting hierarchy",
                answer: "`div > p` works only for direct children. If a `<p>` is nested inside a `<section>` within the `<div>`, it will be ignored by this selector."
              }
            ]
          }
        ]
      },
      {
        heading: "Advanced Developer Insight: Modern CSS and Combinators",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS features such as :is(), :where(), and :has() become far more powerful when combined with combinators."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `article:has(> img) {
    border: 2px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Select any article that contains a direct child image."
          },
          {
            type: "paragraph",
            content: "This allows CSS to react to document structure in ways previously possible only with JavaScript."
          },
          {
            type: "paragraph",
            content: "This is a modern technique that many beginner tutorials do not explain."
          }
        ]
      },
      {
        heading: "Real Website Examples",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Navigation Menus",
                description: "nav > ul > li"
              },
              {
                title: "Blog Articles",
                description: "article h2"
              },
              {
                title: "Dropdown Menus",
                description: "li:hover > ul"
              },
              {
                title: "Card Components",
                description: ".card > img"
              },
              {
                title: "Form Styling",
                description: "label + input"
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
              "Use child combinators when structure matters.",
              "Avoid excessively deep selectors.",
              "Prefer readability over complexity.",
              "Combine combinators with classes for maintainable CSS.",
              "Use sibling combinators for layout and content relationships.",
              "Keep selectors as simple as possible.",
              "Understand document structure before writing combinators."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Combinators allow developers to select elements based on relationships within the HTML structure. They provide powerful control without adding unnecessary classes or IDs."
          },
          {
            type: "paragraph",
            content: "The four main combinators are:"
          },
          {
            type: "table",
            headers: [
              "Combinator",
              "Purpose"
            ],
            rows: [
              [
                "Space ( )",
                "Select all descendants"
              ],
              [
                ">",
                "Select direct children"
              ],
              [
                "+",
                "Select immediate sibling"
              ],
              [
                "~",
                "Select all following siblings"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "By mastering combinators, you can create cleaner HTML, write more maintainable CSS, build complex navigation systems, style structured content efficiently, and leverage advanced modern CSS features. Combinators form a critical foundation for responsive layouts, component-based design, dropdown menus, form styling, and professional front-end development."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Combinators are powerful, but deeply nested descendant selectors (e.g., `main .container .card .body p`) are a bad practice. They make your CSS brittle and tightly coupled to a very specific HTML structure. Prefer flat, component-based styling methodologies (like BEM) and use combinators sparingly for direct relationships."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Attribute Selectors
============================= */
    "css-attribute-selectors": {
    title: "Attribute Selectors",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Attribute Selectors in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "In previous lessons, we learned how to select elements using tag names, classes, IDs, combinators, and other selectors. However, there are situations where we want to target elements based on their attributes rather than their element type or class."
          },
          {
            type: "paragraph",
            content: "This is where Attribute Selectors become extremely useful."
          },
          {
            type: "paragraph",
            content: "Attribute selectors allow developers to select HTML elements according to the presence or value of an attribute. They are widely used in forms, links, accessibility improvements, data attributes, APIs, and modern component-based web development."
          }
        ]
      },
      {
        heading: "What are Attribute Selectors?",
        blocks: [
          {
            type: "paragraph",
            content: "An Attribute Selector selects HTML elements based on their attributes and attribute values."
          },
          {
            type: "paragraph",
            content: "General Syntax"
          },
          {
            type: "code",
            language: "css",
            content: `selector[attribute] {
    property: value;
}`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `selector[attribute="value"] {
    property: value;
}`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text">
<input type="password">`
          },
          {
            type: "code",
            language: "css",
            content: `input[type="password"] {
    background-color: lightyellow;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Password field gets a light yellow background.",
              "Text field remains unchanged."
            ]
          }
        ]
      },
      {
        heading: "Why Use Attribute Selectors?",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors help when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple elements share the same class.",
              "You want to style specific form fields.",
              "You want to target external links.",
              "You want to style elements based on custom data.",
              "You are working with dynamically generated HTML.",
              "You want cleaner CSS with fewer extra classes."
            ]
          },
          {
            type: "paragraph",
            content: "Without attribute selectors:"
          },
          {
            type: "code",
            language: "html",
            content: `<input class="password-field">`
          },
          {
            type: "code",
            language: "css",
            content: `.password-field {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "With attribute selectors:"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="password"] {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "No extra class is needed."
          }
        ]
      },
      {
        heading: "Types of CSS Attribute Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides several attribute selectors."
          },
          {
            type: "table",
            headers: [
              "Selector",
              "Meaning"
            ],
            rows: [
              [
                "[attr]",
                "Attribute exists"
              ],
              [
                "[attr=\"value\"]",
                "Exact match"
              ],
              [
                "[attr~=\"value\"]",
                "Contains word"
              ],
              [
                "[attr|=\"value\"]",
                "Starts with word followed by hyphen"
              ],
              [
                "[attr^=\"value\"]",
                "Starts with value"
              ],
              [
                "[attr$=\"value\"]",
                "Ends with value"
              ],
              [
                "[attr*=\"value\"]",
                "Contains value anywhere"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Let's understand each one."
          }
        ]
      },
      {
        heading: "1. Presence Selector [attribute]",
        blocks: [
          {
            type: "paragraph",
            content: "Selects elements that contain a specific attribute."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#">Home</a>
<a>About</a>
<a href="#">Contact</a>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `a[href] {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only links containing the href attribute become red."
          }
        ]
      },
      {
        heading: "2. Exact Value Selector [attribute=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Selects elements whose attribute exactly matches the given value."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text">
<input type="password">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="password"] {
    border: 2px solid red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only password input receives the red border."
          }
        ]
      },
      {
        heading: "3. Word Selector [attribute~=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Matches a complete word inside a space-separated list."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="note important">Paragraph 1</p>
<p class="note">Paragraph 2</p>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `[class~="important"] {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only the first paragraph becomes red."
          },
          {
            type: "paragraph",
            content: "Because:"
          },
          {
            type: "output",
            content: "class=\"note important\""
          },
          {
            type: "paragraph",
            content: "contains the whole word important."
          }
        ]
      },
      {
        heading: "4. Hyphen Selector [attribute|=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "value",
              "value-anything"
            ]
          },
          {
            type: "paragraph",
            content: "Mostly used with language attributes."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<p lang="en">English</p>
<p lang="en-US">American English</p>
<p lang="fr">French</p>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `[lang|="en"] {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Selected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "lang=\"en\"",
              "lang=\"en-US\""
            ]
          },
          {
            type: "paragraph",
            content: "Not selected:"
          },
          {
            type: "output",
            content: "lang=\"fr\""
          }
        ]
      },
      {
        heading: "5. Starts-With Selector [attribute^=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Matches attributes beginning with a specific value."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="https://google.com">Google</a>
<a href="http://example.com">Example</a>`
          },
          {
            type: "paragraph",
            content: "CSS"
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
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only secure HTTPS links become green."
          }
        ]
      },
      {
        heading: "6. Ends-With Selector [attribute$=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Matches attributes ending with a specific value."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="report.pdf">PDF</a>
<a href="image.png">PNG</a>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `a[href$=".pdf"] {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only PDF links become red."
          }
        ]
      },
      {
        heading: "7. Contains Selector [attribute*=\"value\"]",
        blocks: [
          {
            type: "paragraph",
            content: "Matches attributes containing a specific substring anywhere."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="flower-red.jpg">
<img src="tree.jpg">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `img[src*="red"] {
    border: 3px solid red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only the first image receives the border."
          }
        ]
      },
      {
        heading: "Styling Different Form Inputs",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors are heavily used with forms."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text">
<input type="email">
<input type="password">
<input type="submit">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="text"] {
    background-color: lightblue;
}

input[type="email"] {
    background-color: lightgreen;
}

input[type="password"] {
    background-color: lightyellow;
}

input[type="submit"] {
    background-color: royalblue;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "This allows different styles without adding extra classes."
          }
        ]
      },
      {
        heading: "Styling External Links",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="https://google.com">Google</a>
<a href="/about">About</a>`
          },
          {
            type: "paragraph",
            content: "CSS"
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
            content: "External links become green automatically."
          }
        ]
      },
      {
        heading: "Styling Download Links",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="guide.pdf">Guide</a>
<a href="photo.jpg">Photo</a>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `a[href$=".pdf"] {
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "All PDF downloads are highlighted."
          }
        ]
      },
      {
        heading: "Combining Multiple Attribute Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple attribute selectors can be chained together."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text" required>
<input type="text">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="text"][required] {
    border: 2px solid red;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "Only required text fields are selected."
          }
        ]
      },
      {
        heading: "Attribute Selectors with Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors can be combined with class selectors."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<button class="btn" disabled>
    Submit
</button>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.btn[disabled] {
    opacity: 0.5;
}`
          }
        ]
      },
      {
        heading: "Universal Attribute Selection",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors can be used without specifying an element."
          },
          {
            type: "code",
            language: "css",
            content: `[required] {
    border: 2px solid red;
}`
          },
          {
            type: "paragraph",
            content: "This selects every element that contains the required attribute."
          }
        ]
      },
      {
        heading: "Case Sensitivity in Attribute Selectors",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS supports explicit case-sensitive and case-insensitive matching."
          },
          {
            type: "paragraph",
            content: "Case-Insensitive Match"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="TEXT" i] {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "type=\"text\"",
              "type=\"TEXT\"",
              "type=\"Text\""
            ]
          },
          {
            type: "paragraph",
            content: "The i flag means ignore case."
          },
          {
            type: "paragraph",
            content: "Case-Sensitive Match"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="TEXT" s] {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "Matches only:"
          },
          {
            type: "output",
            content: "type=\"TEXT\""
          },
          {
            type: "paragraph",
            content: "The s flag enforces case sensitivity."
          },
          {
            type: "paragraph",
            content: "This feature is rarely covered in beginner tutorials but is very useful when handling third-party or dynamically generated content."
          }
        ]
      },
      {
        heading: "Attribute Selectors and Data Attributes",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites frequently use custom data attributes."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div data-status="success">
    Payment Completed
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `[data-status="success"] {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "The text becomes green."
          },
          {
            type: "paragraph",
            content: "This technique is widely used in React, Vue, Angular, and modern UI libraries."
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors are powerful but should be used thoughtfully."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: "input[type=\"email\"]"
          },
          {
            type: "paragraph",
            content: "Less efficient:"
          },
          {
            type: "output",
            content: "*[data-user]"
          },
          {
            type: "paragraph",
            content: "Browsers are highly optimized today, but highly complex attribute selectors on very large pages can be slightly slower than class selectors."
          },
          {
            type: "paragraph",
            content: "For frequently reused styles, classes are often preferred."
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
                question: "Missing Quotes",
                answer: "While input[type=text] often works, it is best practice to always enclose attribute values in quotes: input[type=\"text\"]. Unquoted values can fail if they contain spaces or special characters."
              },
              {
                question: "Using Wrong Selector",
                answer: "Using [class=\"btn\"] will ONLY match an element if 'btn' is its *only* class. If the element is <button class=\"btn primary\">, it will fail. Use the dot notation .btn instead."
              },
              {
                question: "Confusing ~= and *=",
                answer: "[class~=\"box\"] matches the exact whole word 'box' within a space-separated list. [class*=\"box\"] matches any string containing the letters 'box' (e.g., 'textbox', 'bigbox'). Understanding this prevents styling bugs."
              }
            ]
          }
        ]
      },
      {
        heading: "Practical Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<form>
    <input type="text" placeholder="Name">

    <input type="email" placeholder="Email">

    <input type="password" placeholder="Password">

    <input type="submit" value="Register">
</form>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input[type="text"],
input[type="email"],
input[type="password"] {
    width: 250px;
    padding: 10px;
    margin: 5px;
}

input[type="submit"] {
    background-color: royalblue;
    color: white;
    border: none;
    padding: 10px 20px;
}`
          },
          {
            type: "paragraph",
            content: "This creates a clean form without adding any classes."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute Selectors allow CSS to target elements based on the presence or value of attributes. They are especially useful for forms, links, accessibility attributes, custom data attributes, and dynamically generated content."
          },
          {
            type: "paragraph",
            content: "The main attribute selectors are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "[attr]",
              "[attr=\"value\"]",
              "[attr~=\"value\"]",
              "[attr|=\"value\"]",
              "[attr^=\"value\"]",
              "[attr$=\"value\"]",
              "[attr*=\"value\"]"
            ]
          },
          {
            type: "paragraph",
            content: "By mastering attribute selectors, you can write cleaner, more flexible, and more maintainable CSS while reducing unnecessary classes in your HTML. They are an essential tool used extensively in modern web development, component libraries, and large-scale applications."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 As you transition to writing CSS for modern JavaScript frameworks (React, Vue, Angular), you will find yourself using Attribute Selectors frequently with `data-*` attributes (e.g., `[data-theme=\"dark\"]` or `[data-state=\"loading\"]`). It is a highly robust way to style state changes without constantly toggling class names."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Pseudo Classes
============================= */
    "css-pseudo-classes": {
    title: "Pseudo Classes",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Pseudo Classes in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "While normal selectors target elements based on their name, class, ID, or attributes, sometimes we need to style elements based on their state, position, interaction, or relationship with other elements."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Style a link when the mouse hovers over it.",
              "Highlight an input field when it gains focus.",
              "Select the first item in a list.",
              "Style checked checkboxes differently."
            ]
          },
          {
            type: "paragraph",
            content: "CSS provides Pseudo Classes to handle such situations."
          },
          {
            type: "paragraph",
            content: "Pseudo classes are one of the most powerful features of CSS and are heavily used in modern websites, web applications, forms, navigation menus, and interactive UI components."
          }
        ]
      },
      {
        heading: "What is a Pseudo Class?",
        blocks: [
          {
            type: "paragraph",
            content: "A Pseudo Class is a keyword added to a selector that defines a special state of an element."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "selector:pseudo-class {\n    property: value;\n}"
          },
          {
            type: "paragraph",
            content: "Example"
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
            content: "When the user moves the mouse over the button, the background color changes."
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: ":hover"
          },
          {
            type: "paragraph",
            content: "is a pseudo class."
          }
        ]
      },
      {
        heading: "Why Use Pseudo Classes?",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo classes allow styling based on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User interaction",
              "Element state",
              "Element position",
              "Form validation status",
              "Link status",
              "Parent-child relationships"
            ]
          },
          {
            type: "paragraph",
            content: "Without pseudo classes, many interactive effects would require JavaScript."
          }
        ]
      },
      {
        heading: "Commonly Used Pseudo Classes",
        blocks: [
          {
            type: "table",
            headers: [
              "Pseudo Class",
              "Description"
            ],
            rows: [
              [
                ":hover",
                "Mouse pointer is over element"
              ],
              [
                ":active",
                "Element is being clicked"
              ],
              [
                ":focus",
                "Element has focus"
              ],
              [
                ":visited",
                "Link has been visited"
              ],
              [
                ":link",
                "Unvisited link"
              ],
              [
                ":first-child",
                "First child element"
              ],
              [
                ":last-child",
                "Last child element"
              ],
              [
                ":nth-child()",
                "Specific child position"
              ],
              [
                ":checked",
                "Checked checkbox/radio"
              ],
              [
                ":disabled",
                "Disabled form control"
              ],
              [
                ":enabled",
                "Enabled form control"
              ],
              [
                ":required",
                "Required form field"
              ],
              [
                ":not()",
                "Excludes matching elements"
              ],
              [
                ":empty",
                "Element contains no content"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Let's study them one by one."
          }
        ]
      },
      {
        heading: "Link Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Links have special states."
          },
          {
            type: "paragraph",
            content: "1. :link"
          },
          {
            type: "paragraph",
            content: "Targets links that have not been visited."
          },
          {
            type: "code",
            language: "css",
            content: `a:link {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "2. :visited"
          },
          {
            type: "paragraph",
            content: "Targets links already visited by the user."
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
            content: "3. :hover"
          },
          {
            type: "paragraph",
            content: "Targets elements when the mouse pointer is over them."
          },
          {
            type: "code",
            language: "css",
            content: `a:hover {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "4. :active"
          },
          {
            type: "paragraph",
            content: "Targets elements while being clicked."
          },
          {
            type: "code",
            language: "css",
            content: `a:active {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Recommended Order"
          },
          {
            type: "paragraph",
            content: "When using all link states together:"
          },
          {
            type: "code",
            language: "css",
            content: `a:link
a:visited
a:hover
a:active`
          },
          {
            type: "paragraph",
            content: "A common memory trick: LoVe HAte"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Link",
              "Visited",
              "Hover",
              "Active"
            ]
          }
        ]
      },
      {
        heading: "Hover Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most frequently used pseudo classes."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<button>Hover Me</button>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `button:hover {
    background-color: royalblue;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "When the cursor moves over the button, the style changes instantly."
          }
        ]
      },
      {
        heading: "Focus Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Used when an element receives keyboard or mouse focus."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input:focus {
    border: 2px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "When the user clicks inside the input field, the border becomes blue."
          }
        ]
      },
      {
        heading: "Active Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Used while clicking an element."
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
            content: "This creates a button press effect."
          }
        ]
      },
      {
        heading: "First Child Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Selects the first child element inside a parent."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
</ul>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `li:first-child {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Apple → Red",
              "Mango → Normal",
              "Orange → Normal"
            ]
          }
        ]
      },
      {
        heading: "Last Child Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Selects the last child."
          },
          {
            type: "code",
            language: "css",
            content: `li:last-child {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Apple → Normal",
              "Mango → Normal",
              "Orange → Green"
            ]
          }
        ]
      },
      {
        heading: "Nth Child Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Allows selecting elements by position."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: ":nth-child(number)"
          },
          {
            type: "paragraph",
            content: "Example"
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
            content: "Selects the second list item."
          },
          {
            type: "paragraph",
            content: "Even Rows"
          },
          {
            type: "code",
            language: "css",
            content: `tr:nth-child(even) {
    background-color: lightgray;
}`
          },
          {
            type: "paragraph",
            content: "Odd Rows"
          },
          {
            type: "code",
            language: "css",
            content: `tr:nth-child(odd) {
    background-color: white;
}`
          },
          {
            type: "paragraph",
            content: "Frequently used in tables."
          }
        ]
      },
      {
        heading: "Nth Child Formulas",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most powerful CSS features."
          },
          {
            type: "paragraph",
            content: "Every Third Element"
          },
          {
            type: "code",
            language: "css",
            content: `li:nth-child(3n) {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Matches: 3rd, 6th, 9th, 12th"
          },
          {
            type: "paragraph",
            content: "Alternate Elements"
          },
          {
            type: "code",
            language: "css",
            content: `li:nth-child(2n) {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Matches: 2nd, 4th, 6th, 8th"
          },
          {
            type: "paragraph",
            content: "First Three Elements"
          },
          {
            type: "code",
            language: "css",
            content: `li:nth-child(-n+3) {
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "Matches: 1st, 2nd, 3rd"
          },
          {
            type: "paragraph",
            content: "This advanced technique is rarely explained properly in beginner tutorials."
          }
        ]
      },
      {
        heading: "First-of-Type",
        blocks: [
          {
            type: "paragraph",
            content: "Selects the first occurrence of a particular element type."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div>
    <p>Paragraph 1</p>
    <h2>Heading</h2>
    <p>Paragraph 2</p>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `p:first-of-type {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Only the first paragraph is selected."
          }
        ]
      },
      {
        heading: "Last-of-Type",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `p:last-of-type {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Selects the last paragraph of that type."
          }
        ]
      },
      {
        heading: "Nth-of-Type",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `p:nth-of-type(2) {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Selects the second paragraph regardless of other element types."
          }
        ]
      },
      {
        heading: "Empty Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Targets elements containing no content."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div></div>
<div>Hello</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `div:empty {
    border: 2px solid red;
}`
          },
          {
            type: "paragraph",
            content: "Only the empty div receives the border."
          }
        ]
      },
      {
        heading: "Checked Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Used with checkboxes and radio buttons."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="checkbox" checked>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input:checked {
    width: 20px;
    height: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Styles checked inputs."
          }
        ]
      },
      {
        heading: "Disabled and Enabled Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Disabled Pseudo Class"
          },
          {
            type: "code",
            language: "html",
            content: `<input disabled>`
          },
          {
            type: "code",
            language: "css",
            content: `input:disabled {
    background-color: lightgray;
}`
          },
          {
            type: "paragraph",
            content: "Enabled Pseudo Class"
          },
          {
            type: "code",
            language: "css",
            content: `input:enabled {
    border: 2px solid green;
}`
          },
          {
            type: "paragraph",
            content: "Targets enabled controls."
          }
        ]
      },
      {
        heading: "Required and Optional Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Required Pseudo Class"
          },
          {
            type: "code",
            language: "html",
            content: `<input required>`
          },
          {
            type: "code",
            language: "css",
            content: `input:required {
    border-left: 4px solid red;
}`
          },
          {
            type: "paragraph",
            content: "Useful for form validation indicators."
          },
          {
            type: "paragraph",
            content: "Optional Pseudo Class"
          },
          {
            type: "code",
            language: "css",
            content: `input:optional {
    border-left: 4px solid green;
}`
          },
          {
            type: "paragraph",
            content: "Targets fields that are not required."
          }
        ]
      },
      {
        heading: "Valid and Invalid Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "These are extremely useful in forms."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<input type="email">`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}`
          },
          {
            type: "paragraph",
            content: "The browser automatically validates the email."
          }
        ]
      },
      {
        heading: "Read-Only and Read-Write",
        blocks: [
          {
            type: "paragraph",
            content: "Read Only"
          },
          {
            type: "code",
            language: "css",
            content: `input:read-only {
    background-color: #eee;
}`
          },
          {
            type: "paragraph",
            content: "Read Write"
          },
          {
            type: "code",
            language: "css",
            content: `input:read-write {
    background-color: white;
}`
          },
          {
            type: "paragraph",
            content: "Useful in large forms and dashboards."
          }
        ]
      },
      {
        heading: "Not Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Excludes elements."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<p>Paragraph</p>
<p class="special">Special</p>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `p:not(.special) {
    color: gray;
}`
          },
          {
            type: "paragraph",
            content: "Only normal paragraphs become gray."
          }
        ]
      },
      {
        heading: "Root Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Targets the root element of the document."
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --main-color: royalblue;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to html {} but commonly used for CSS variables."
          }
        ]
      },
      {
        heading: "Target Pseudo Class",
        blocks: [
          {
            type: "paragraph",
            content: "Used with URL fragments."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#section1">Go</a>

<div id="section1">
    Content
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `:target {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "When the URL becomes: page.html#section1 the target section gets highlighted."
          }
        ]
      },
      {
        heading: "Modern UI Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "These are often missing from beginner tutorials but are increasingly important."
          },
          {
            type: "paragraph",
            content: "Focus Visible"
          },
          {
            type: "code",
            language: "css",
            content: `button:focus-visible {
    outline: 3px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "Shows focus only when keyboard navigation is being used. Improves accessibility."
          },
          {
            type: "paragraph",
            content: "Focus Within"
          },
          {
            type: "code",
            language: "css",
            content: `.form-group:focus-within {
    background-color: lightblue;
}`
          },
          {
            type: "paragraph",
            content: "Parent element becomes styled when any child gains focus. Very useful for forms."
          },
          {
            type: "paragraph",
            content: "Placeholder Shown"
          },
          {
            type: "code",
            language: "css",
            content: `input:placeholder-shown {
    border-color: gray;
}`
          },
          {
            type: "paragraph",
            content: "Targets inputs displaying placeholder text."
          }
        ]
      },
      {
        heading: "Combining Pseudo Classes",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple pseudo classes can be chained."
          },
          {
            type: "code",
            language: "css",
            content: `button:hover:active {
    background-color: darkblue;
}`
          },
          {
            type: "paragraph",
            content: "This applies when: Mouse is over button AND Button is being clicked."
          }
        ]
      },
      {
        heading: "Difference Between Pseudo Classes and Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse them."
          },
          {
            type: "comparison",
            leftTitle: "Pseudo Class",
            leftItems: [
              "Targets a state.",
              "button:hover",
              "Changes the button when hovered."
            ],
            rightTitle: "Pseudo Element",
            rightItems: [
              "Targets a part of an element.",
              "p::first-letter",
              "Targets only the first letter."
            ]
          },
          {
            type: "table",
            headers: [
              "Feature",
              "Pseudo Class",
              "Pseudo Element"
            ],
            rows: [
              [
                "Syntax",
                ":",
                "::"
              ],
              [
                "Targets",
                "State",
                "Part of element"
              ],
              [
                "Example",
                ":hover",
                "::before"
              ],
              [
                "Example",
                ":focus",
                "::after"
              ]
            ]
          }
        ]
      },
      {
        heading: "Practical Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<form>
    <input type="email" required>

    <button>Submit</button>
</form>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `input:focus {
    border: 2px solid blue;
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

button:hover {
    background-color: royalblue;
    color: white;
}

button:active {
    transform: scale(0.95);
}`
          },
          {
            type: "paragraph",
            content: "This creates an interactive form using only CSS."
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
                question: "Forgetting the Colon",
                answer: "Pseudo classes must be prefixed with a single colon (:). Typing `buttonhover {}` instead of `button:hover {}` will fail silently.",
                examples: [
                  {
                    title: "Correct Syntax",
                    language: "css",
                    content: `button:hover { }`
                  }
                ]
              },
              {
                question: "Confusing Child and Of-Type",
                answer: "`:nth-child(2)` selects an element if it is the 2nd child of its parent, regardless of tag name. `:nth-of-type(2)` selects the 2nd element of that *specific tag* within the parent."
              },
              {
                question: "Styling Only Hover States",
                answer: "Adding `:hover` effects without also adding `:focus` or `:focus-visible` effects creates poor accessibility. Keyboard navigators will not see the visual changes.",
                examples: [
                  {
                    title: "Better Practice",
                    language: "css",
                    content: `button:hover,
button:focus {
    /* Styles */
}`
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
            content: "Pseudo Classes allow CSS to style elements based on their state, interaction, position, validation status, and relationships. They make web pages interactive without JavaScript and are fundamental to modern UI design."
          },
          {
            type: "paragraph",
            content: "Some of the most important pseudo classes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ":hover",
              ":focus",
              ":active",
              ":visited",
              ":first-child",
              ":last-child",
              ":nth-child()",
              ":not()",
              ":checked",
              ":disabled",
              ":valid",
              ":invalid",
              ":focus-visible",
              ":focus-within"
            ]
          },
          {
            type: "paragraph",
            content: "By mastering pseudo classes, you gain precise control over user interactions, form validation, navigation effects, accessibility improvements, and dynamic styling, making your websites more professional, responsive, and user-friendly."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common bug involves `:nth-child()`. If you write `p:nth-child(2)`, it does **not** mean \"the second paragraph\". It means \"select the element if it is a `<p>` AND it is the 2nd child overall\". If an `<h1>` is the first child, the first `<p>` is actually the second child. To strictly select the second paragraph, use `p:nth-of-type(2)`."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Pseudo Elements
============================= */
    "css-pseudo-elements": {
    title: "Pseudo Elements",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements are special CSS keywords that allow you to style a specific part of an element or create virtual content that does not exist in the HTML document."
          },
          {
            type: "paragraph",
            content: "Unlike normal selectors, pseudo-elements target portions of an element rather than the entire element itself."
          },
          {
            type: "paragraph",
            content: "They are written using a double colon (::)."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "selector::pseudo-element {\n    property: value;\n}"
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<p>This is a paragraph.</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p::first-letter {
    color: red;
    font-size: 40px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "paragraph",
            content: "The first letter of the paragraph becomes red and larger."
          }
        ]
      },
      {
        heading: "Why Use Pseudo Elements?",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements help developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Style specific portions of text",
              "Create decorative effects without extra HTML",
              "Insert content dynamically",
              "Improve UI design",
              "Reduce unnecessary markup",
              "Build professional-looking interfaces"
            ]
          },
          {
            type: "paragraph",
            content: "Without pseudo-elements, many visual effects would require additional <span> or <div> elements."
          }
        ]
      },
      {
        heading: "Pseudo Classes vs Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse pseudo-classes and pseudo-elements."
          },
          {
            type: "comparison",
            leftTitle: "Pseudo Class",
            leftItems: [
              "Selects an element in a particular state.",
              "button:hover",
              "Here the button changes when hovered."
            ],
            rightTitle: "Pseudo Element",
            rightItems: [
              "Selects a specific part of an element.",
              "p::first-line",
              "Here only the first line is styled."
            ]
          }
        ]
      },
      {
        heading: "Common CSS Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "1. ::first-line"
          },
          {
            type: "paragraph",
            content: "Styles the first line of a block-level element."
          },
          {
            type: "code",
            language: "html",
            content: `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p::first-line {
    color: blue;
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "2. ::first-letter"
          },
          {
            type: "paragraph",
            content: "Styles the first character of text."
          },
          {
            type: "code",
            language: "css",
            content: `p::first-letter {
    font-size: 48px;
    color: crimson;
}`
          },
          {
            type: "paragraph",
            content: "Often used in magazines and news articles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "The quick brown fox jumps over the lazy dog."
          },
          {
            type: "paragraph",
            content: "3. ::before"
          },
          {
            type: "paragraph",
            content: "Inserts content before an element."
          },
          {
            type: "code",
            language: "html",
            content: `<h2>CSS Tutorial</h2>`
          },
          {
            type: "code",
            language: "css",
            content: `h2::before {
    content: "🔥 ";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "🔥 CSS Tutorial"
          },
          {
            type: "paragraph",
            content: "4. ::after"
          },
          {
            type: "paragraph",
            content: "Inserts content after an element."
          },
          {
            type: "code",
            language: "css",
            content: `h2::after {
    content: " 🚀";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "CSS Tutorial 🚀"
          },
          {
            type: "paragraph",
            content: "Combining ::before and ::after"
          },
          {
            type: "code",
            language: "css",
            content: `h2::before {
    content: "[";
}

h2::after {
    content: "]";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "[CSS Tutorial]"
          },
          {
            type: "paragraph",
            content: "5. ::selection"
          },
          {
            type: "paragraph",
            content: "Styles selected text."
          },
          {
            type: "code",
            language: "css",
            content: `::selection {
    background-color: yellow;
    color: black;
}`
          },
          {
            type: "paragraph",
            content: "When users highlight text, the custom style appears."
          },
          {
            type: "paragraph",
            content: "6. ::marker"
          },
          {
            type: "paragraph",
            content: "Styles list bullets and numbers."
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`
          },
          {
            type: "code",
            language: "css",
            content: `li::marker {
    color: red;
    font-size: 20px;
}`
          },
          {
            type: "paragraph",
            content: "7. ::placeholder"
          },
          {
            type: "paragraph",
            content: "Styles placeholder text inside form fields."
          },
          {
            type: "code",
            language: "html",
            content: `<input type="text" placeholder="Enter your name">`
          },
          {
            type: "code",
            language: "css",
            content: `::placeholder {
    color: gray;
    font-style: italic;
}`
          },
          {
            type: "paragraph",
            content: "8. ::file-selector-button"
          },
          {
            type: "paragraph",
            content: "Styles file upload buttons."
          },
          {
            type: "code",
            language: "html",
            content: `<input type="file">`
          },
          {
            type: "code",
            language: "css",
            content: `::file-selector-button {
    background-color: royalblue;
    color: white;
    border: none;
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "9. ::backdrop"
          },
          {
            type: "paragraph",
            content: "Styles the background behind fullscreen elements and dialogs."
          },
          {
            type: "code",
            language: "css",
            content: `::backdrop {
    background-color: rgba(0,0,0,0.7);
}`
          },
          {
            type: "paragraph",
            content: "Commonly used with:"
          },
          {
            type: "code",
            language: "html",
            content: `<dialog>`
          },
          {
            type: "paragraph",
            content: "elements."
          }
        ]
      },
      {
        heading: "The content Property",
        blocks: [
          {
            type: "paragraph",
            content: "The content property is primarily used with ::before and ::after."
          },
          {
            type: "paragraph",
            content: "Text Content"
          },
          {
            type: "code",
            language: "css",
            content: `p::before {
    content: "Note: ";
}`
          },
          {
            type: "paragraph",
            content: "Unicode Characters"
          },
          {
            type: "code",
            language: "css",
            content: `p::before {
    content: "\\2605";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "★"
          },
          {
            type: "paragraph",
            content: "Adding Images"
          },
          {
            type: "code",
            language: "css",
            content: `p::before {
    content: url(icon.png);
}`
          },
          {
            type: "paragraph",
            content: "Empty Content"
          },
          {
            type: "paragraph",
            content: "Used for decorative shapes."
          },
          {
            type: "code",
            language: "css",
            content: `.box::before {
    content: "";
}`
          },
          {
            type: "paragraph",
            content: "This technique is very common in modern UI design."
          }
        ]
      },
      {
        heading: "Practical Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Example 1: Decorative Heading"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
          {
            type: "code",
            language: "css",
            content: `h1::before {
    content: "✨ ";
}

h1::after {
    content: " ✨";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "✨ Welcome ✨"
          },
          {
            type: "paragraph",
            content: "Example 2: Stylish Article"
          },
          {
            type: "code",
            language: "css",
            content: `article p::first-letter {
    font-size: 60px;
    color: crimson;
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "This creates a newspaper-style drop cap."
          },
          {
            type: "paragraph",
            content: "Example 3: Custom Quote Design"
          },
          {
            type: "code",
            language: "html",
            content: `<blockquote>
Learning CSS is fun.
</blockquote>`
          },
          {
            type: "code",
            language: "css",
            content: `blockquote::before {
    content: "❝";
    font-size: 40px;
}

blockquote::after {
    content: "❞";
    font-size: 40px;
}`
          },
          {
            type: "paragraph",
            content: "Example 4: Required Form Field"
          },
          {
            type: "code",
            language: "css",
            content: `label.required::after {
    content: " *";
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Email *",
              "Password *"
            ]
          },
          {
            type: "paragraph",
            content: "No extra HTML required."
          }
        ]
      },
      {
        heading: "Modern Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials only cover older pseudo-elements, but modern CSS includes several newer ones."
          },
          {
            type: "cards",
            items: [
              {
                title: "::target-text",
                description: "Highlights text targeted by URL fragments. ::target-text { background: yellow; }"
              },
              {
                title: "::cue",
                description: "Styles subtitles/captions in videos. ::cue { color: yellow; }"
              },
              {
                title: "::spelling-error",
                description: "Highlights spelling mistakes. ::spelling-error { text-decoration: red wavy underline; }"
              },
              {
                title: "::grammar-error",
                description: "Highlights grammar issues. ::grammar-error { text-decoration: blue wavy underline; }"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Browser support may vary."
          }
        ]
      },
      {
        heading: "Stacking and Positioning with Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements behave like actual child elements."
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    position: relative;
}

.card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.1);
}`
          },
          {
            type: "paragraph",
            content: "This technique is heavily used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero sections",
              "Image overlays",
              "Card hover effects",
              "Modern dashboards"
            ]
          }
        ]
      },
      {
        heading: "Performance Benefits",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers overlook this advantage."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="badge"></div>
<span class="icon"></span>`
          },
          {
            type: "paragraph",
            content: "You can create visual elements using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "::before",
              "::after"
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
              "Cleaner HTML",
              "Fewer DOM nodes",
              "Easier maintenance",
              "Better performance on large pages"
            ]
          }
        ]
      },
      {
        heading: "Limitations of Pseudo Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements cannot:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Exist independently",
              "Be selected with JavaScript directly in most cases",
              "Receive focus",
              "Be added to replaced elements in some situations",
              "Appear without the content property (::before and ::after)"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `div::before {
    content: "";
}`
          },
          {
            type: "paragraph",
            content: "Without content, nothing appears."
          }
        ]
      },
      {
        heading: "Browser Compatibility Note",
        blocks: [
          {
            type: "paragraph",
            content: "Modern browsers support:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "::first-line",
              "::first-letter",
              "::before",
              "::after",
              "::selection",
              "::marker",
              "::placeholder",
              "::file-selector-button",
              "::backdrop"
            ]
          },
          {
            type: "paragraph",
            content: "Newer pseudo-elements such as ::target-text, ::spelling-error, and ::grammar-error may have limited support. Always check compatibility when using advanced features."
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
              "Use pseudo-elements for decoration (.card::before) instead of extra HTML.",
              "Keep important content in HTML. Avoid inserting critical information with content: \"Important\"; because screen readers and search engines may not treat it as real content.",
              "Use double colons. Preferred modern syntax: ::before, ::after, ::first-letter. Although browsers still support :before for backward compatibility.",
              "Use semantic HTML first. Pseudo-elements should enhance content, not replace proper HTML structure."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements allow developers to style specific parts of elements and create virtual content without modifying HTML. Common pseudo-elements include ::first-line, ::first-letter, ::before, ::after, ::selection, ::marker, and ::placeholder. They are widely used for decorative effects, form enhancements, custom UI components, overlays, and professional web design patterns. By reducing unnecessary markup and enabling precise styling control, pseudo-elements are one of the most powerful tools in modern CSS."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A pro tip: if you ever create a `::before` or `::after` element and it refuses to appear on the screen, check if you forgot the `content: \"\";` property. It's the #1 reason pseudo-elements fail to render."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Specificity
============================= */
    "css-specificity": {
    title: "Specificity",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most confusing topics in CSS for beginners is Specificity. You may write multiple CSS rules targeting the same element and wonder:"
          },
          {
            type: "paragraph",
            content: "\"Which rule will the browser apply?\""
          },
          {
            type: "paragraph",
            content: "The answer lies in CSS Specificity."
          },
          {
            type: "paragraph",
            content: "Specificity is the mechanism browsers use to determine which CSS rule has the highest priority when multiple rules target the same element."
          },
          {
            type: "paragraph",
            content: "Understanding specificity is essential because it helps you:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Predict which styles will be applied",
              "Avoid unexpected styling conflicts",
              "Write cleaner CSS",
              "Reduce unnecessary use of !important",
              "Build scalable projects"
            ]
          },
          {
            type: "paragraph",
            content: "Many developers struggle with CSS not because of selectors, but because they do not understand specificity properly."
          }
        ]
      },
      {
        heading: "What is CSS Specificity?",
        blocks: [
          {
            type: "paragraph",
            content: "Specificity is a scoring system used by browsers to determine which CSS declaration wins when multiple declarations target the same element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="text">Hello World</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

.text {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Hello World → Red"
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because the class selector has higher specificity than the element selector."
          }
        ]
      },
      {
        heading: "Why Do We Need Specificity?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine CSS without specificity."
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

.text {
    color: red;
}

#message {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "If all rules had equal priority, browsers would not know which color to apply."
          },
          {
            type: "paragraph",
            content: "Specificity provides a consistent decision-making system."
          }
        ]
      },
      {
        heading: "The Specificity Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "Not all selectors are equal."
          },
          {
            type: "paragraph",
            content: "CSS gives different weights to different selector types."
          },
          {
            type: "paragraph",
            content: "From highest to lowest:"
          },
          {
            type: "table",
            headers: [
              "Selector Type",
              "Specificity Value"
            ],
            rows: [
              [
                "Inline Style",
                "1000"
              ],
              [
                "ID Selector",
                "100"
              ],
              [
                "Class, Attribute, Pseudo-class",
                "10"
              ],
              [
                "Element, Pseudo-element",
                "1"
              ],
              [
                "Universal Selector (*)",
                "0"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `#header {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Specificity: 100"
          },
          {
            type: "code",
            language: "css",
            content: `.menu {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Specificity: 10"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Specificity: 1"
          },
          {
            type: "paragraph",
            content: "Since: 100 > 10 > 1, the ID selector wins."
          }
        ]
      },
      {
        heading: "How Specificity is Calculated",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers calculate specificity using four categories."
          },
          {
            type: "paragraph",
            content: "Think of specificity as:"
          },
          {
            type: "output",
            content: "(A, B, C, D)"
          },
          {
            type: "paragraph",
            content: "Where:"
          },
          {
            type: "table",
            headers: [
              "Category",
              "Meaning"
            ],
            rows: [
              [
                "A",
                "Inline styles"
              ],
              [
                "B",
                "IDs"
              ],
              [
                "C",
                "Classes, attributes, pseudo-classes"
              ],
              [
                "D",
                "Elements and pseudo-elements"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `#header .menu p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Count selectors:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Inline Styles = 0",
              "IDs = 1",
              "Classes = 1",
              "Elements = 1"
            ]
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: "(0,1,1,1)"
          }
        ]
      },
      {
        heading: "Example 1: Element vs Class",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<p class="intro">Hello</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

.intro {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: [
              "p       → (0,0,0,1)",
              ".intro  → (0,0,1,0)"
            ]
          },
          {
            type: "paragraph",
            content: "Result: Red. Class selector wins."
          }
        ]
      },
      {
        heading: "Example 2: Class vs ID",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<p id="msg" class="intro">
    Hello
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `.intro {
    color: blue;
}

#msg {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: [
              ".intro → (0,0,1,0)",
              "#msg   → (0,1,0,0)"
            ]
          },
          {
            type: "paragraph",
            content: "Result: Red. ID selector wins."
          }
        ]
      },
      {
        heading: "Example 3: Multiple Classes",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<p class="box text">
    Hello
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    color: blue;
}

.text {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Both have:"
          },
          {
            type: "output",
            content: "(0,0,1,0)"
          },
          {
            type: "paragraph",
            content: "Same specificity."
          },
          {
            type: "paragraph",
            content: "Now the browser uses the next rule:"
          },
          {
            type: "paragraph",
            content: "Source Order"
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    color: blue;
}

.text {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result: Red. The later rule wins."
          }
        ]
      },
      {
        heading: "When Specificity is Equal",
        blocks: [
          {
            type: "paragraph",
            content: "If specificity scores are identical, CSS applies the rule that appears last."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result: Red. Because the second rule comes later."
          }
        ]
      },
      {
        heading: "Inline Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Inline styles have extremely high specificity."
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color:red;">
    Hello
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Result: Red"
          },
          {
            type: "paragraph",
            content: "Specificity: Inline Style = (1,0,0,0)"
          },
          {
            type: "paragraph",
            content: "This beats most normal selectors."
          }
        ]
      },
      {
        heading: "The !important Rule",
        blocks: [
          {
            type: "paragraph",
            content: "!important overrides normal specificity calculations."
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue !important;
}

#msg {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result: Blue"
          },
          {
            type: "paragraph",
            content: "Even though the ID selector is more specific."
          }
        ]
      },
      {
        heading: "Why Avoid Excessive !important?",
        blocks: [
          {
            type: "paragraph",
            content: "Bad practice:"
          },
          {
            type: "code",
            language: "css",
            content: `color: red !important;`
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hard to maintain",
              "Creates specificity wars",
              "Makes debugging difficult",
              "Breaks scalable CSS architecture"
            ]
          },
          {
            type: "paragraph",
            content: "Use it only when absolutely necessary."
          }
        ]
      },
      {
        heading: "Specificity Comparison Examples",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Example 1",
                description: "p \nSpecificity: (0,0,0,1)"
              },
              {
                title: "Example 2",
                description: ".content p \nSpecificity: (0,0,1,1)"
              },
              {
                title: "Example 3",
                description: "#main .content p \nSpecificity: (0,1,1,1)"
              },
              {
                title: "Example 4",
                description: "#main #content p \nSpecificity: (0,2,0,1) \nHigher specificity than Example 3."
              }
            ]
          }
        ]
      },
      {
        heading: "Attribute Selectors and Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "Attribute selectors count like classes."
          },
          {
            type: "output",
            content: "input[type=\"text\"]"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,1,1)"
          },
          {
            type: "paragraph",
            content: "Because: Attribute selector = 1 class-level weight, Element selector = 1 element-level weight"
          }
        ]
      },
      {
        heading: "Pseudo-Classes and Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-classes count like classes."
          },
          {
            type: "output",
            content: "button:hover"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,1,1)"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ":hover",
              ":focus",
              ":checked",
              ":first-child",
              ":nth-child()"
            ]
          },
          {
            type: "paragraph",
            content: "Each contributes class-level specificity."
          }
        ]
      },
      {
        heading: "Pseudo-Elements and Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "Pseudo-elements count like normal elements."
          },
          {
            type: "output",
            content: "p::first-line"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,0,2)"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "::before",
              "::after",
              "::first-letter",
              "::first-line"
            ]
          }
        ]
      },
      {
        heading: "Universal Selector and Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "The universal selector has no specificity value."
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
            content: "Specificity: (0,0,0,0)"
          },
          {
            type: "paragraph",
            content: "It contributes nothing."
          }
        ]
      },
      {
        heading: "Modern Specificity Rules Most Tutorials Skip",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS introduced selectors that behave differently."
          },
          {
            type: "paragraph",
            content: "Understanding them gives you an advantage over many developers."
          },
          {
            type: "paragraph",
            content: ":not()"
          },
          {
            type: "paragraph",
            content: "The :not() pseudo-class itself adds no specificity. Only its argument contributes."
          },
          {
            type: "output",
            content: ":not(.active)"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,1,0) Because .active contributes."
          },
          {
            type: "paragraph",
            content: ":is()"
          },
          {
            type: "paragraph",
            content: ":is() takes the specificity of the most specific selector inside it."
          },
          {
            type: "output",
            content: ":is(p, .box, #header)"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,1,0,0) Because #header is the most specific selector."
          },
          {
            type: "paragraph",
            content: ":where()"
          },
          {
            type: "paragraph",
            content: ":where() always has zero specificity."
          },
          {
            type: "output",
            content: ":where(.card)"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,0,0)"
          },
          {
            type: "paragraph",
            content: "This feature is extremely useful for scalable CSS systems."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:where(.btn) {
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Developers can easily override these styles later."
          },
          {
            type: "paragraph",
            content: ":has()"
          },
          {
            type: "paragraph",
            content: ":has() takes specificity from its arguments."
          },
          {
            type: "output",
            content: "div:has(img)"
          },
          {
            type: "paragraph",
            content: "Specificity: (0,0,0,2) One element for div and one for img."
          }
        ]
      },
      {
        heading: "Cascade vs Specificity",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers think specificity is everything."
          },
          {
            type: "paragraph",
            content: "It is not."
          },
          {
            type: "paragraph",
            content: "Before specificity is considered, CSS follows the Cascade."
          },
          {
            type: "paragraph",
            content: "The browser checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Origin (browser, user, author)",
              "Importance (!important)",
              "Specificity",
              "Source order"
            ]
          },
          {
            type: "paragraph",
            content: "Specificity is only one part of the cascade process."
          }
        ]
      },
      {
        heading: "Common Specificity Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Overusing IDs",
                answer: "Using selectors like `#header #menu #item` makes the styles incredibly difficult to override later without using more IDs or `!important`. Prefer classes: `.header .menu .item`.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `#header #menu #item { }`
                  }
                ]
              },
              {
                question: "Using Too Many Nested Selectors",
                answer: "Long chains like `.container .wrapper .content .box p` create unnecessarily high specificity and couple your CSS tightly to the HTML structure.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `.container .wrapper .content .box p { }`
                  }
                ]
              },
              {
                question: "Excessive !important",
                answer: "Using `!important` as a quick fix leads to CSS becoming unmaintainable. It creates a 'specificity war' where the only way to override a style is to use another `!important`.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `color: red !important;`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        heading: "Specificity Debugging Tips",
        blocks: [
          {
            type: "paragraph",
            content: "Modern browsers provide excellent developer tools."
          },
          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Chrome DevTools",
              "Inspect an element",
              "Open the Styles panel",
              "View crossed-out properties",
              "Check which selector won"
            ]
          },
          {
            type: "paragraph",
            content: "This is the fastest way to debug specificity issues."
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
              "Prefer Classes Over IDs: Use .btn-primary instead of #btn-primary.",
              "Keep Specificity Low: Low-specificity CSS is easier to maintain.",
              "Avoid Deep Nesting: Use .card-title instead of .main .wrapper .content .card .card-title.",
              "Use :where() for Reusable Components: Modern design systems often use :where(.component) to keep specificity near zero.",
              "Reserve !important for Special Cases: Utility classes, Accessibility fixes, Third-party CSS overrides."
            ]
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div id="container">
    <p class="message">
        Welcome
    </p>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

.message {
    color: green;
}

#container .message {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Specificities:"
          },
          {
            type: "output",
            content: [
              "p                    → (0,0,0,1)",
              ".message             → (0,0,1,0)",
              "#container .message  → (0,1,1,0)"
            ]
          },
          {
            type: "paragraph",
            content: "Result: Red"
          },
          {
            type: "paragraph",
            content: "Because (0,1,1,0) has the highest specificity."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Specificity is the browser's scoring system for deciding which style rule should be applied when multiple rules target the same element. Inline styles have the highest normal specificity, followed by IDs, classes/attributes/pseudo-classes, and finally elements/pseudo-elements. When specificity scores are equal, the rule that appears later in the stylesheet wins. The !important declaration can override normal specificity rules, but should be used sparingly. Modern selectors such as :is(), :where(), :not(), and :has() introduce advanced specificity behaviors that every modern CSS developer should understand. Mastering specificity helps you write predictable, maintainable, and scalable CSS without falling into the trap of overly complex selectors or excessive use of !important."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A great way to visualize specificity is the 'Star Wars' analogy: Elements are Stormtroopers (weak), Classes are Darth Vaders (strong), IDs are the Emperor (very strong), and Inline Styles are the Death Star (destroy everything). The `!important` rule is the Force itself—use it wisely, or it will destroy your codebase."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : !important Rule
============================= */
    "css-important-rule": {
    title: "!important Rule",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS !important Rule",
        blocks: [
          {
            type: "paragraph",
            content: "As you learned in the previous lesson, CSS uses the Cascade, Specificity, and Source Order to decide which style should be applied when multiple rules target the same element."
          },
          {
            type: "paragraph",
            content: "However, CSS also provides a special mechanism called the !important rule, which can override normal CSS priority calculations."
          },
          {
            type: "paragraph",
            content: "The !important rule tells the browser:"
          },
          {
            type: "output",
            content: "\"This declaration is extremely important. Apply it even if other rules have higher specificity.\""
          },
          {
            type: "paragraph",
            content: "Because of its power, !important is often considered both a useful tool and a dangerous one. Used correctly, it can solve difficult styling problems. Used excessively, it can make CSS difficult to maintain."
          }
        ]
      },
      {
        heading: "What is !important?",
        blocks: [
          {
            type: "paragraph",
            content: "The !important rule is added at the end of a CSS declaration."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "selector {\n    property: value !important;\n}"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "Here the text color becomes red, even if other normal CSS rules try to change it."
          }
        ]
      },
      {
        heading: "Why Was !important Created?",
        blocks: [
          {
            type: "paragraph",
            content: "In large websites, styles may come from multiple sources:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browser default styles",
              "External CSS libraries",
              "Frameworks",
              "Third-party widgets",
              "Your own stylesheets"
            ]
          },
          {
            type: "paragraph",
            content: "Sometimes overriding these styles becomes difficult."
          },
          {
            type: "paragraph",
            content: "The !important rule was introduced to allow developers to explicitly give certain declarations higher priority."
          }
        ]
      },
      {
        heading: "Basic Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<p class="message">
    Hello World
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue;
}

.message {
    color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Hello World → Red"
          },
          {
            type: "paragraph",
            content: "Even though both selectors target the same element, the !important declaration wins."
          }
        ]
      },
      {
        heading: "How !important Affects the Cascade",
        blocks: [
          {
            type: "paragraph",
            content: "Normally CSS follows:"
          },
          {
            type: "flow",
            steps: [
              "Source Order",
              "→",
              "Specificity",
              "→",
              "Cascade"
            ]
          },
          {
            type: "paragraph",
            content: "When !important is used:"
          },
          {
            type: "flow",
            steps: [
              "!important",
              "→",
              "Specificity",
              "→",
              "Source Order"
            ]
          },
          {
            type: "paragraph",
            content: "The browser first checks whether a declaration is marked as important."
          },
          {
            type: "paragraph",
            content: "If yes, it gets priority over normal declarations."
          }
        ]
      },
      {
        heading: "Example: !important vs Higher Specificity",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<p id="text">
    Hello
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `#text {
    color: blue;
}

p {
    color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: [
              "#text → 100",
              "p     → 1"
            ]
          },
          {
            type: "paragraph",
            content: "Normally the ID selector would win."
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Hello → Red"
          },
          {
            type: "paragraph",
            content: "Because !important overrides normal specificity."
          }
        ]
      },
      {
        heading: "When Multiple !important Rules Exist",
        blocks: [
          {
            type: "paragraph",
            content: "If multiple declarations contain !important, specificity becomes important again."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: blue !important;
}

.message {
    color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="message">
    Hello
</p>`
          },
          {
            type: "paragraph",
            content: "Specificity:"
          },
          {
            type: "output",
            content: [
              "p         → 1",
              ".message  → 10"
            ]
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
            content: "Since both declarations are important, the class selector wins due to higher specificity."
          }
        ]
      },
      {
        heading: "Importance Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "The browser follows this priority order:"
          },
          {
            type: "table",
            headers: [
              "Priority Level",
              "Example"
            ],
            rows: [
              [
                "User Agent Styles",
                "Browser defaults"
              ],
              [
                "Author Styles",
                "Your CSS"
              ],
              [
                "Author !important",
                "Your important CSS"
              ],
              [
                "User !important",
                "User-defined important CSS"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "In simple terms:"
          },
          {
            type: "flow",
            steps: [
              "Normal CSS",
              "→",
              "!important CSS"
            ]
          },
          {
            type: "paragraph",
            content: "Important declarations have higher priority."
          }
        ]
      },
      {
        heading: "Inline Styles and !important",
        blocks: [
          {
            type: "paragraph",
            content: "Inline styles normally have very high specificity."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color: blue;">
    Hello
</p>`
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
            content: "Result:"
          },
          {
            type: "output",
            content: "Blue. Inline style wins."
          },
          {
            type: "paragraph",
            content: "But:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red !important;
}`
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
            content: "The important declaration overrides the inline style."
          },
          {
            type: "paragraph",
            content: "Inline !important"
          },
          {
            type: "paragraph",
            content: "Inline styles can also contain !important."
          },
          {
            type: "code",
            language: "html",
            content: `<p style="color: blue !important;">
    Hello
</p>`
          },
          {
            type: "paragraph",
            content: "This becomes extremely difficult to override."
          },
          {
            type: "paragraph",
            content: "You would typically need another important declaration with higher priority."
          }
        ]
      },
      {
        heading: "Common Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "1. Overriding Third-Party Libraries"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    background: blue;
}`
          },
          {
            type: "paragraph",
            content: "Library CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    background: green;
}`
          },
          {
            type: "paragraph",
            content: "You can override it:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    background: blue !important;
}`
          },
          {
            type: "paragraph",
            content: "2. Utility Classes"
          },
          {
            type: "paragraph",
            content: "Many utility frameworks use important declarations."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.hidden {
    display: none !important;
}`
          },
          {
            type: "paragraph",
            content: "Whenever this class is added:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="hidden">`
          },
          {
            type: "paragraph",
            content: "the element becomes hidden regardless of other display rules."
          },
          {
            type: "paragraph",
            content: "3. Accessibility Fixes"
          },
          {
            type: "paragraph",
            content: "Sometimes accessibility requirements must override other styles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.high-contrast {
    color: black !important;
    background: white !important;
}`
          },
          {
            type: "paragraph",
            content: "4. Emergency Style Overrides"
          },
          {
            type: "paragraph",
            content: "When production issues occur, developers may temporarily use:"
          },
          {
            type: "output",
            content: "!important"
          },
          {
            type: "paragraph",
            content: "to quickly fix visual problems."
          }
        ]
      },
      {
        heading: "Problems with !important",
        blocks: [
          {
            type: "paragraph",
            content: "Although powerful, it can create serious maintenance problems."
          },
          {
            type: "faq",
            items: [
              {
                question: "Problem 1: Specificity Wars",
                answer: "Using !important forces subsequent overrides to also use !important, escalating the problem until the CSS becomes an unmanageable mess of overrides.",
                examples: [
                  {
                    title: "Example",
                    language: "css",
                    content: `.box { color: blue !important; }
.card .box { color: red !important; }
#container .card .box { color: green !important; }`
                  }
                ]
              },
              {
                question: "Problem 2: Hard to Debug",
                answer: "When a style refuses to apply despite high selector specificity, developers waste time hunting down hidden !important rules buried in large codebases."
              },
              {
                question: "Problem 3: Reduces Reusability",
                answer: "Reusable components rely on predictable overrides based on location and class names. Overusing !important ruins this predictability."
              }
            ]
          }
        ]
      },
      {
        heading: "Modern Alternatives to !important",
        blocks: [
          {
            type: "paragraph",
            content: "Experienced developers try these solutions first."
          },
          {
            type: "paragraph",
            content: "Better Selectors"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `.article p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Improve Specificity"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "css",
            content: `color: red !important;`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `.main-content .article p {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Better CSS Architecture"
          },
          {
            type: "paragraph",
            content: "Organized CSS often removes the need for important declarations."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "BEM",
              "SMACSS",
              "ITCSS",
              "Utility-first CSS"
            ]
          }
        ]
      },
      {
        heading: "!important and CSS Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Important declarations also affect custom properties."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --main-color: blue;
}

.card {
    --main-color: red !important;
}`
          },
          {
            type: "paragraph",
            content: "The important variable declaration receives higher priority."
          }
        ]
      },
      {
        heading: "!important Inside Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "You can use important declarations inside media queries."
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .menu {
        display: none !important;
    }
}`
          },
          {
            type: "paragraph",
            content: "This forces the menu to remain hidden on smaller screens."
          }
        ]
      },
      {
        heading: "!important and Shorthand Properties",
        blocks: [
          {
            type: "paragraph",
            content: "You can use important declarations with shorthand properties."
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    margin: 20px !important;
}`
          },
          {
            type: "paragraph",
            content: "This affects:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "margin-top",
              "margin-right",
              "margin-bottom",
              "margin-left"
            ]
          },
          {
            type: "paragraph",
            content: "all at once."
          }
        ]
      },
      {
        heading: "CSS Layers and !important (Modern CSS)",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials ignore this modern concept."
          },
          {
            type: "paragraph",
            content: "CSS now supports Cascade Layers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@layer base {
    p {
        color: blue;
    }
}

@layer components {
    p {
        color: red;
    }
}`
          },
          {
            type: "paragraph",
            content: "Layer order affects priority."
          },
          {
            type: "paragraph",
            content: "However:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    color: green !important;
}`
          },
          {
            type: "paragraph",
            content: "can still override normal layered declarations."
          },
          {
            type: "paragraph",
            content: "Understanding layers often removes the need for excessive use of !important."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<button class="btn">
    Submit
</button>`
          },
          {
            type: "paragraph",
            content: "Framework CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    background: gray;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "Your CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.btn {
    background: royalblue !important;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Button Background → Royal Blue"
          },
          {
            type: "paragraph",
            content: "The important declaration overrides the framework style."
          }
        ]
      },
      {
        heading: "When Should You Use !important?",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Good Uses",
            leftItems: [
              "✔ Accessibility overrides",
              "✔ Utility classes",
              "✔ Third-party CSS overrides",
              "✔ Temporary debugging",
              "✔ Emergency production fixes"
            ],
            rightTitle: "Bad Uses",
            rightItems: [
              "✖ Every component",
              "✖ Every color change",
              "✖ Avoiding specificity learning",
              "✖ Fixing poor CSS architecture",
              "✖ Replacing proper selector design"
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
              "Use It Sparingly: `color: red !important;` should not be your first solution.",
              "Understand Specificity First: Most problems can be solved through better selectors, proper cascade management, and cleaner architecture.",
              "Comment Important Declarations: Example: `.menu { display: none !important; /* Override Bootstrap navbar */ }` Future developers will thank you.",
              "Avoid Specificity Wars: If many declarations contain !important, consider refactoring your CSS.",
              "Prefer Maintainable Solutions: A well-structured stylesheet rarely needs many important declarations."
            ]
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
                question: "Q1. What is the purpose of !important in CSS?",
                answer: "It gives a CSS declaration higher priority than normal declarations and can override standard specificity rules."
              },
              {
                question: "Q2. Does !important override an ID selector?",
                answer: "Yes. An important declaration can override a normal ID selector."
              },
              {
                question: "Q3. What happens when two declarations both contain !important?",
                answer: "The browser compares specificity. If specificity is equal, source order decides the winner."
              },
              {
                question: "Q4. Is excessive use of !important recommended?",
                answer: "No. It makes CSS harder to maintain, debug, and extend."
              },
              {
                question: "Q5. What are common alternatives to !important?",
                answer: "Better selector design, proper specificity management, CSS architecture methodologies, Cascade Layers, and Utility classes."
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
            content: "The !important rule is a special CSS mechanism that gives a declaration higher priority than normal CSS rules. It can override selectors with greater specificity and is commonly used to override third-party styles, create utility classes, and implement accessibility fixes. When multiple important declarations target the same element, specificity and source order are used to determine the winner. Although powerful, excessive use of !important leads to maintenance problems, debugging difficulties, and specificity wars. Modern CSS practices encourage developers to rely on proper selector design, the cascade, and CSS architecture before resorting to !important. Mastering when to use—and when not to use—!important is an important step toward writing scalable and professional CSS."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Treat `!important` as a 'Break Glass in Case of Emergency' tool. If you use it to solve a basic layout bug today, it will almost certainly cause a bigger layout bug for you (or a teammate) next month."
          }
        ]
      }
    ]
  },
};

export default cssAdvancedSelectors;