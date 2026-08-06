const cssModernLayoutSystems = {

/* ===========================
    First Topic : Flexbox Introduction
============================= */
    "css-flexbox-introduction": {
    title: "Flexbox Introduction",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Flexbox Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites rarely use old layout techniques such as floats and excessive positioning for arranging elements. Instead, developers use Flexbox (Flexible Box Layout), one of the most powerful layout systems in CSS."
          },
          {
            type: "paragraph",
            content: "Flexbox was designed to solve common layout problems such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Centering content vertically and horizontally",
              "Creating responsive navigation bars",
              "Distributing space between elements",
              "Aligning items regardless of their size",
              "Building flexible and adaptable layouts"
            ]
          },
          {
            type: "paragraph",
            content: "Before Flexbox, achieving these tasks often required complicated CSS hacks. Flexbox provides a clean, efficient, and responsive way to control layouts."
          }
        ]
      },
      {
        heading: "What is Flexbox?",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox (Flexible Box Layout Module) is a one-dimensional layout system in CSS that allows you to arrange items in rows or columns and control their alignment, spacing, sizing, and order."
          },
          {
            type: "paragraph",
            content: "A Flexbox layout consists of:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Flex Container – The parent element",
              "Flex Items – The direct children inside the container"
            ]
          },
          {
            type: "paragraph",
            content: "When an element becomes a flex container, its direct children automatically become flex items."
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
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
              ".container → Flex Container",
              "Three <div> elements → Flex Items"
            ]
          }
        ]
      },
      {
        heading: "Why Was Flexbox Created?",
        blocks: [
          {
            type: "paragraph",
            content: "Before Flexbox, developers relied on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Floats",
              "Inline-block layouts",
              "Table layouts",
              "Complex positioning"
            ]
          },
          {
            type: "paragraph",
            content: "These methods had limitations:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Float Problems",
                description: "Issues: Clearing floats was difficult, Parent height collapse, Poor vertical alignment support"
              },
              {
                title: "Inline-Block Problems",
                description: "Issues: Unwanted whitespace, Limited alignment control"
              },
              {
                title: "Positioning Problems",
                description: "Issues: Elements removed from normal flow, Difficult responsive layouts"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Flexbox solves all these problems with a dedicated layout system."
          }
        ]
      },
      {
        heading: "The Flexbox Terminology",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding Flexbox terminology is extremely important."
          },
          {
            type: "paragraph",
            content: "Main Axis"
          },
          {
            type: "paragraph",
            content: "The primary direction in which flex items are arranged."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Default:"
          },
          {
            type: "output",
            content: "flex-direction: row;"
          },
          {
            type: "paragraph",
            content: "Main axis runs horizontally."
          },
          {
            type: "output",
            content: [
              "Main Axis →",
              "--------------------------------",
              "Item1   Item2   Item3",
              "--------------------------------"
            ]
          },
          {
            type: "paragraph",
            content: "Cross Axis"
          },
          {
            type: "paragraph",
            content: "The axis perpendicular to the main axis."
          },
          {
            type: "output",
            content: [
              "        Cross Axis",
              "             ↓",
              "Item1 Item2 Item3"
            ]
          },
          {
            type: "paragraph",
            content: "When main axis is horizontal, cross axis becomes vertical."
          }
        ]
      },
      {
        heading: "Flex Container and Flex Items",
        blocks: [
          {
            type: "paragraph",
            content: "Flex Container"
          },
          {
            type: "paragraph",
            content: "The parent element with:"
          },
          {
            type: "output",
            content: "display: flex;"
          },
          {
            type: "paragraph",
            content: "Flex Items"
          },
          {
            type: "paragraph",
            content: "Direct children of the flex container."
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "The three child divs are flex items."
          }
        ]
      },
      {
        heading: "Creating Your First Flexbox Layout",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}

.box {
    width: 100px;
    height: 100px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "[A] [B] [C]"
          },
          {
            type: "paragraph",
            content: "Items appear side-by-side automatically."
          }
        ]
      },
      {
        heading: "Flex Container vs Normal Container",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Normal Block Layout",
            leftItems: [
              "<div>A</div>",
              "<div>B</div>",
              "<div>C</div>",
              "Output:",
              "A",
              "B",
              "C",
              "Each div starts on a new line."
            ],
            rightTitle: "Flex Layout",
            rightItems: [
              ".container { display: flex; }",
              "Output:",
              "A B C",
              "Items become arranged in a row."
            ]
          }
        ]
      },
      {
        heading: "Display Flex vs Display Inline-Flex",
        blocks: [
          {
            type: "paragraph",
            content: "display: flex"
          },
          {
            type: "paragraph",
            content: "Creates a block-level flex container."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Container occupies full width."
          },
          {
            type: "paragraph",
            content: "display: inline-flex"
          },
          {
            type: "paragraph",
            content: "Creates an inline-level flex container."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: inline-flex;
}`
          },
          {
            type: "paragraph",
            content: "Container occupies only necessary width."
          }
        ]
      },
      {
        heading: "Understanding the Default Flex Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "When you write:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Several default properties are automatically applied. Equivalent to:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
}`
          },
          {
            type: "paragraph",
            content: "Many beginners don't realize Flexbox already has these defaults."
          }
        ]
      },
      {
        heading: "The Two Parts of Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox properties are divided into:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Container Properties",
                description: "Applied to the parent. Examples: display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content, gap"
              },
              {
                title: "Item Properties",
                description: "Applied to children. Examples: flex-grow, flex-shrink, flex-basis, flex, align-self, order"
              }
            ]
          }
        ]
      },
      {
        heading: "Understanding One-Dimensional Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox is called a one-dimensional layout system."
          },
          {
            type: "paragraph",
            content: "It controls layout in one direction at a time."
          },
          {
            type: "paragraph",
            content: "Horizontal Control"
          },
          {
            type: "output",
            content: "flex-direction: row;"
          },
          {
            type: "paragraph",
            content: "Vertical Control"
          },
          {
            type: "output",
            content: "flex-direction: column;"
          }
        ]
      },
      {
        heading: "Flexbox vs Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these."
          },
          {
            type: "comparison",
            leftTitle: "Flexbox",
            leftItems: [
              "One-dimensional.",
              "→ Row or ↓ Column",
              "Best for:",
              "Navigation bars",
              "Toolbars",
              "Buttons",
              "Menus",
              "Cards"
            ],
            rightTitle: "Grid",
            rightItems: [
              "Two-dimensional.",
              "Rows + Columns",
              "Best for:",
              "Full page layouts",
              "Dashboards",
              "Galleries",
              "Complex designs"
            ]
          },
          {
            type: "paragraph",
            content: "Rule of Thumb: Use Flexbox → Components, Grid → Page layouts. Most modern websites use both together."
          }
        ]
      },
      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Real-World Example: Navigation Bar"
          },
          {
            type: "code",
            language: "html",
            content: `<nav class="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
</nav>`
          },
          {
            type: "code",
            language: "css",
            content: `.navbar {
    display: flex;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Real-World Example: Perfect Centering"
          },
          {
            type: "paragraph",
            content: "One of the biggest reasons developers love Flexbox."
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="box">Center Me</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`
          },
          {
            type: "paragraph",
            content: "Perfectly centered both horizontally and vertically. Before Flexbox, this required complicated hacks."
          }
        ]
      },
      {
        heading: "How Flexbox Handles Available Space",
        blocks: [
          {
            type: "paragraph",
            content: "A major advantage of Flexbox is automatic space distribution."
          },
          {
            type: "paragraph",
            content: "Flexbox calculates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Available space",
              "Item sizes",
              "Alignment",
              "Distribution"
            ]
          },
          {
            type: "paragraph",
            content: "and adjusts the layout automatically."
          },
          {
            type: "paragraph",
            content: "This is why Flexbox is called Flexible Box Layout."
          },
          {
            type: "paragraph",
            content: "The Hidden Power of Flexbox: Content-Aware Layout"
          },
          {
            type: "paragraph",
            content: "Most tutorials stop at alignment. A deeper understanding is that Flexbox is content-aware."
          },
          {
            type: "paragraph",
            content: "Traditional layouts often break. Flexbox adjusts intelligently according to content size. This is one reason modern UI frameworks rely heavily on Flexbox."
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
                question: "Mistake 1: Applying Flexbox to Children",
                answer: "Applying display: flex; to the child elements instead of the parent container is a common error. Flexbox MUST be applied to the parent to align its children.",
                examples: [
                  {
                    title: "Wrong Practice",
                    language: "css",
                    content: `.item { display: flex; }`
                  },
                  {
                    title: "Correct Practice",
                    language: "css",
                    content: `.container { display: flex; }`
                  }
                ]
              },
              {
                question: "Mistake 2: Forgetting Direct Child Rule",
                answer: "Flexbox only affects DIRECT children. If you have a flex container, and inside that is a <section>, and inside that is a <div>, the <div> is NOT a flex item. Only the <section> is."
              },
              {
                question: "Mistake 3: Using Flexbox for Entire Complex Layouts",
                answer: "Trying to build an entire page layout (header, sidebar, main content, footer) purely with Flexbox can become messy. Use CSS Grid for the macro page layout, and Flexbox for the micro component layouts inside."
              },
              {
                question: "Mistake 4: Ignoring Responsive Behavior",
                answer: "Assuming items will just shrink infinitely. You must explicitly control wrapping (flex-wrap: wrap) or use media queries to ensure items stack correctly on mobile screens."
              }
            ]
          }
        ]
      },
      {
        heading: "Interview Questions and Answers",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. What is Flexbox?",
                answer: "Flexbox is a one-dimensional CSS layout model used to align, distribute, and arrange elements efficiently."
              },
              {
                question: "2. What are the two main components of Flexbox?",
                answer: "Flex Container and Flex Items."
              },
              {
                question: "3. How do you create a flex container?",
                answer: "display: flex;"
              },
              {
                question: "4. What is the main axis?",
                answer: "The primary direction along which flex items are arranged."
              },
              {
                question: "5. What is the cross axis?",
                answer: "The axis perpendicular to the main axis."
              },
              {
                question: "6. Difference between Flexbox and Grid?",
                answer: "Flexbox is one-dimensional, while Grid is two-dimensional."
              },
              {
                question: "7. What is the difference between flex and inline-flex?",
                answer: "flex → block-level container, inline-flex → inline-level container."
              },
              {
                question: "8. Why is Flexbox popular?",
                answer: "Because it simplifies alignment, spacing, centering, responsiveness, and layout creation."
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
            content: "Flexbox is a modern CSS layout system designed to arrange elements efficiently in a row or column. It introduces the concepts of flex containers, flex items, the main axis, and the cross axis, making alignment and spacing much easier than older methods like floats or positioning."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Flexbox is",
              "Why it was created",
              "Flex Container and Flex Items",
              "Main Axis and Cross Axis",
              "display: flex and display: inline-flex",
              "Default Flexbox behavior",
              "One-dimensional layout concepts",
              "Flexbox vs Grid",
              "Real-world use cases",
              "Common mistakes and best practices"
            ]
          },
          {
            type: "paragraph",
            content: "Flexbox is one of the most important CSS skills for modern web development. Nearly every professional website uses Flexbox in some form, making it an essential tool for building responsive and maintainable user interfaces."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 If you ever struggle to remember Flexbox properties, try playing a game like 'Flexbox Froggy'. It's one of the best ways to build muscle memory for properties like `justify-content` and `align-items`."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Flex Container
============================= */
    "css-flex-container": {
    title: "Flex Container",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Flex Container",
        blocks: [
          {
            type: "paragraph",
            content: "A Flex Container is the parent element that enables the Flexbox layout model for its children. When an element becomes a flex container, all of its direct child elements become flex items and can be arranged, aligned, sized, and distributed using Flexbox properties."
          },
          {
            type: "paragraph",
            content: "Understanding the flex container is essential because almost every Flexbox behavior begins at the container level. Properties such as direction, wrapping, alignment, and spacing are controlled by the container, while properties like order and growth are controlled by individual flex items."
          }
        ]
      },
      {
        heading: "What is a Flex Container?",
        blocks: [
          {
            type: "paragraph",
            content: "A flex container is any HTML element whose display property is set to flex or inline-flex."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "In this example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ".container becomes a flex container.",
              "All direct children become flex items.",
              "Flexbox rules now control the layout of the children."
            ]
          }
        ]
      },
      {
        heading: "Why Flex Containers Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Before Flexbox, developers often used:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Floats",
              "Positioning",
              "Tables",
              "Inline-block layouts"
            ]
          },
          {
            type: "paragraph",
            content: "These approaches made alignment difficult, especially for responsive designs."
          },
          {
            type: "paragraph",
            content: "Flex containers solve many common problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Horizontal alignment",
              "Vertical alignment",
              "Equal-height columns",
              "Responsive layouts",
              "Dynamic spacing",
              "Easy content distribution"
            ]
          }
        ]
      },
      {
        heading: "Creating a Flex Container",
        blocks: [
          {
            type: "paragraph",
            content: "There are two ways:"
          },
          {
            type: "paragraph",
            content: "1. display: flex"
          },
          {
            type: "paragraph",
            content: "Creates a block-level flex container."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "The container behaves like a block element and occupies the available width."
          },
          {
            type: "paragraph",
            content: "2. display: inline-flex"
          },
          {
            type: "paragraph",
            content: "Creates an inline-level flex container."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: inline-flex;
}`
          },
          {
            type: "paragraph",
            content: "The container only takes the space needed by its content."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.flex-box {
    display: inline-flex;
    border: 2px solid black;
}`
          },
          {
            type: "paragraph",
            content: "Unlike display:flex, the container does not stretch across the entire row."
          }
        ]
      },
      {
        heading: "Understanding Main Axis and Cross Axis",
        blocks: [
          {
            type: "paragraph",
            content: "Before learning flex container properties, understand two important concepts."
          },
          {
            type: "paragraph",
            content: "Main Axis"
          },
          {
            type: "paragraph",
            content: "The primary direction in which flex items are arranged."
          },
          {
            type: "paragraph",
            content: "Default:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-direction: row;`
          },
          {
            type: "paragraph",
            content: "Main Axis:"
          },
          {
            type: "output",
            content: "→ → →"
          },
          {
            type: "paragraph",
            content: "Items move horizontally."
          },
          {
            type: "paragraph",
            content: "Cross Axis"
          },
          {
            type: "paragraph",
            content: "The direction perpendicular to the main axis."
          },
          {
            type: "paragraph",
            content: "For a row layout:"
          },
          {
            type: "output",
            content: [
              "↓",
              "↓",
              "↓"
            ]
          },
          {
            type: "paragraph",
            content: "Items align vertically along the cross axis."
          },
          {
            type: "paragraph",
            content: "Visual Representation"
          },
          {
            type: "output",
            content: [
              "Cross Axis",
              "    ↓",
              "    ↓",
              "",
              "+----------------------+",
              "| Item1 Item2 Item3    | → Main Axis",
              "+----------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Almost every flex container property works on one of these two axes."
          }
        ]
      },
      {
        heading: "Flex Container Properties",
        blocks: [
          {
            type: "paragraph",
            content: "The most important flex container properties are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "display",
              "flex-direction",
              "flex-wrap",
              "flex-flow",
              "justify-content",
              "align-items",
              "align-content",
              "gap",
              "row-gap",
              "column-gap"
            ]
          },
          {
            type: "paragraph",
            content: "Let's study them one by one."
          }
        ]
      },
      {
        heading: "flex-direction",
        blocks: [
          {
            type: "paragraph",
            content: "Controls the direction of the main axis."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-direction: value;`
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "row",
              "row-reverse",
              "column",
              "column-reverse"
            ]
          },
          {
            type: "paragraph",
            content: "row (Default)"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-direction: row;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "1 2 3 4"
          },
          {
            type: "paragraph",
            content: "Items appear left to right."
          },
          {
            type: "paragraph",
            content: "row-reverse"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-direction: row-reverse;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "4 3 2 1"
          },
          {
            type: "paragraph",
            content: "Items appear in reverse order."
          },
          {
            type: "paragraph",
            content: "column"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-direction: column;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1",
              "2",
              "3",
              "4"
            ]
          },
          {
            type: "paragraph",
            content: "Items stack vertically."
          },
          {
            type: "paragraph",
            content: "column-reverse"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-direction: column-reverse;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "4",
              "3",
              "2",
              "1"
            ]
          },
          {
            type: "paragraph",
            content: "Items stack vertically in reverse order."
          }
        ]
      },
      {
        heading: "flex-wrap",
        blocks: [
          {
            type: "paragraph",
            content: "Determines whether items stay on one line or move to multiple lines."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-wrap: value;`
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          },
          {
            type: "paragraph",
            content: "nowrap (Default)"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-wrap: nowrap;
}`
          },
          {
            type: "paragraph",
            content: "Items stay on a single line."
          },
          {
            type: "output",
            content: "1 2 3 4 5 6 7"
          },
          {
            type: "paragraph",
            content: "They may shrink to fit."
          },
          {
            type: "paragraph",
            content: "wrap"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-wrap: wrap;
}`
          },
          {
            type: "paragraph",
            content: "Items move to the next line when space runs out."
          },
          {
            type: "output",
            content: [
              "1 2 3",
              "4 5 6",
              "7"
            ]
          },
          {
            type: "paragraph",
            content: "This is very useful in responsive layouts."
          },
          {
            type: "paragraph",
            content: "wrap-reverse"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-wrap: wrap-reverse;
}`
          },
          {
            type: "paragraph",
            content: "Items wrap in reverse cross-axis order."
          }
        ]
      },
      {
        heading: "flex-flow",
        blocks: [
          {
            type: "paragraph",
            content: "Shorthand for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "flex-direction",
              "flex-wrap"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-flow: row wrap;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-direction: row;
    flex-wrap: wrap;
}`
          }
        ]
      },
      {
        heading: "justify-content",
        blocks: [
          {
            type: "paragraph",
            content: "Controls alignment along the main axis."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: value;`
          },
          {
            type: "paragraph",
            content: "flex-start"
          },
          {
            type: "paragraph",
            content: "Default value."
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: flex-start;`
          },
          {
            type: "output",
            content: "1 2 3"
          },
          {
            type: "paragraph",
            content: "Items start from the beginning."
          },
          {
            type: "paragraph",
            content: "flex-end"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: flex-end;`
          },
          {
            type: "output",
            content: "          1 2 3"
          },
          {
            type: "paragraph",
            content: "Items move to the end."
          },
          {
            type: "paragraph",
            content: "center"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: center;`
          },
          {
            type: "output",
            content: "     1 2 3"
          },
          {
            type: "paragraph",
            content: "Items appear in the center."
          },
          {
            type: "paragraph",
            content: "space-between"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: space-between;`
          },
          {
            type: "output",
            content: "1      2      3"
          },
          {
            type: "paragraph",
            content: "Equal space between items."
          },
          {
            type: "paragraph",
            content: "space-around"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: space-around;`
          },
          {
            type: "output",
            content: " 1    2    3"
          },
          {
            type: "paragraph",
            content: "Equal space around each item."
          },
          {
            type: "paragraph",
            content: "space-evenly"
          },
          {
            type: "code",
            language: "css",
            content: `justify-content: space-evenly;`
          },
          {
            type: "output",
            content: "   1   2   3"
          },
          {
            type: "paragraph",
            content: "All spaces become equal."
          },
          {
            type: "paragraph",
            content: "This is one of the most useful modern values."
          }
        ]
      },
      {
        heading: "align-items",
        blocks: [
          {
            type: "paragraph",
            content: "Controls alignment on the cross axis."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: value;`
          },
          {
            type: "paragraph",
            content: "stretch (Default)"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: stretch;`
          },
          {
            type: "paragraph",
            content: "Items stretch to fill the container height."
          },
          {
            type: "paragraph",
            content: "flex-start"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: flex-start;`
          },
          {
            type: "paragraph",
            content: "Items align at the top."
          },
          {
            type: "paragraph",
            content: "flex-end"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: flex-end;`
          },
          {
            type: "paragraph",
            content: "Items align at the bottom."
          },
          {
            type: "paragraph",
            content: "center"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: center;`
          },
          {
            type: "paragraph",
            content: "Items align vertically at the center. One of the most frequently used Flexbox properties."
          },
          {
            type: "paragraph",
            content: "baseline"
          },
          {
            type: "code",
            language: "css",
            content: `align-items: baseline;`
          },
          {
            type: "paragraph",
            content: "Items align according to text baseline. Useful when items contain text with different font sizes."
          }
        ]
      },
      {
        heading: "align-content",
        blocks: [
          {
            type: "paragraph",
            content: "Used when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple rows exist",
              "flex-wrap is enabled"
            ]
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `align-content: value;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}`
          },
          {
            type: "paragraph",
            content: "This controls spacing between rows."
          },
          {
            type: "paragraph",
            content: "Common Values"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "align-content: flex-start;",
              "align-content: flex-end;",
              "align-content: center;",
              "align-content: space-between;",
              "align-content: space-around;",
              "align-content: space-evenly;",
              "align-content: stretch;"
            ]
          }
        ]
      },
      {
        heading: "Difference Between align-items and align-content",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these properties."
          },
          {
            type: "paragraph",
            content: "align-items"
          },
          {
            type: "paragraph",
            content: "Controls alignment of items within a row."
          },
          {
            type: "code",
            language: "css",
            content: `align-items: center;`
          },
          {
            type: "paragraph",
            content: "Works even with one row."
          },
          {
            type: "paragraph",
            content: "align-content"
          },
          {
            type: "paragraph",
            content: "Controls spacing between rows."
          },
          {
            type: "code",
            language: "css",
            content: `align-content: center;`
          },
          {
            type: "paragraph",
            content: "Only works when multiple rows exist."
          },
          {
            type: "paragraph",
            content: "Quick Comparison"
          },
          {
            type: "table",
            headers: [
              "Property",
              "Controls",
              "Works with single row?",
              "Works with multiple rows?"
            ],
            rows: [
              [
                "align-items",
                "Items",
                "Yes",
                "Both"
              ],
              [
                "align-content",
                "Rows",
                "No",
                "Both"
              ]
            ]
          }
        ]
      },
      {
        heading: "gap Property",
        blocks: [
          {
            type: "paragraph",
            content: "Creates space between flex items."
          },
          {
            type: "paragraph",
            content: "Modern CSS recommends using gap instead of margins for spacing."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Item1    Item2    Item3"
          },
          {
            type: "paragraph",
            content: "row-gap"
          },
          {
            type: "paragraph",
            content: "Adds spacing between rows."
          },
          {
            type: "code",
            language: "css",
            content: `row-gap: 20px;`
          },
          {
            type: "paragraph",
            content: "column-gap"
          },
          {
            type: "paragraph",
            content: "Adds spacing between columns."
          },
          {
            type: "code",
            language: "css",
            content: `column-gap: 20px;`
          }
        ]
      },
      {
        heading: "Complete Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 300px;
    border: 2px solid black;
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
              "Items arranged horizontally",
              "Wrapped if needed",
              "Centered horizontally",
              "Centered vertically",
              "Equal spacing between items"
            ]
          }
        ]
      },
      {
        heading: "Practical Layout Example",
        blocks: [
          {
            type: "paragraph",
            content: "Navigation Bar"
          },
          {
            type: "code",
            language: "html",
            content: `<nav class="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
</nav>`
          },
          {
            type: "code",
            language: "css",
            content: `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`
          },
          {
            type: "paragraph",
            content: "Flex containers make navigation bars extremely easy to create."
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
                question: "1. Applying Flex Properties to Child Elements",
                answer: "Properties like justify-content work on the container, not the individual item.",
                examples: [
                  {
                    title: "Wrong Practice",
                    language: "css",
                    content: `.item {
    justify-content: center;
}`
                  }
                ]
              },
              {
                question: "2. Confusing Main Axis and Cross Axis",
                answer: "Remember: flex-direction: row sets the Main Axis to Horizontal and the Cross Axis to Vertical. If you change it to column, they swap."
              },
              {
                question: "3. Using align-content for Single Row Layouts",
                answer: "align-content controls the space between multiple rows. For single-row layouts, use align-items: center; instead.",
                examples: [
                  {
                    title: "Wrong Practice",
                    language: "css",
                    content: `align-content: center;`
                  }
                ]
              },
              {
                question: "4. Forgetting display: flex",
                answer: "Without setting display: flex;, none of the flex container properties (like justify-content or gap) will work."
              }
            ]
          }
        ]
      },
      {
        heading: "Advanced Flex Container Concepts",
        blocks: [
          {
            type: "paragraph",
            content: "Writing Modes Affect Axes"
          },
          {
            type: "paragraph",
            content: "In languages with different writing directions, the perceived start and end positions can change. This is why Flexbox uses logical terms like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "flex-start",
              "flex-end"
            ]
          },
          {
            type: "paragraph",
            content: "instead of always saying left and right."
          },
          {
            type: "paragraph",
            content: "Gap vs Margin"
          },
          {
            type: "paragraph",
            content: "Many tutorials teach margins for spacing. Modern developers often prefer:"
          },
          {
            type: "code",
            language: "css",
            content: `gap: 20px;`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner code",
              "No extra spacing on outer edges",
              "Easier maintenance",
              "Better responsive behavior"
            ]
          }
        ]
      },
      {
        heading: "Flexbox and Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Flex containers naturally adapt to different screen sizes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "As screen width decreases, items automatically move to the next row."
          },
          {
            type: "paragraph",
            content: "This is one of the major reasons Flexbox became so popular."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "A Flex Container is the parent element that activates the Flexbox layout system. It is created using display:flex or display:inline-flex, and its direct children become flex items."
          },
          {
            type: "paragraph",
            content: "The most important flex container properties are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "flex-direction → Controls layout direction",
              "flex-wrap → Controls wrapping behavior",
              "flex-flow → Shorthand for direction and wrap",
              "justify-content → Aligns items on the main axis",
              "align-items → Aligns items on the cross axis",
              "align-content → Aligns multiple rows",
              "gap, row-gap, column-gap → Creates spacing between items"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering flex containers is the foundation of Flexbox. Once you fully understand these properties, creating responsive navigation bars, card layouts, galleries, dashboards, and modern website structures becomes significantly easier and requires much less code than traditional layout techniques."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A great mental model for Flexbox: Think of the container as a track. `justify-content` controls how items slide *along* the track, while `align-items` controls how they slide *perpendicular* to the track. Remembering this makes aligning items second nature."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Flex Items
============================= */
    "css-flex-items": {
    title: "Flex Items",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Flex Items",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, we learned about Flex Containers, which control the overall layout of a Flexbox system. However, the real power of Flexbox comes from Flex Items—the individual elements inside a flex container that can grow, shrink, reorder, and align themselves dynamically."
          },
          {
            type: "paragraph",
            content: "A Flex Item is any direct child of a flex container. Once an element becomes a flex item, it gains access to special Flexbox properties that allow precise control over its size, position, and behavior."
          },
          {
            type: "paragraph",
            content: "Understanding flex items is essential because modern web layouts often depend on controlling how individual elements behave within a flexible container."
          }
        ]
      },
      {
        heading: "What Are Flex Items?",
        blocks: [
          {
            type: "paragraph",
            content: "When a parent element uses:"
          },
          {
            type: "code",
            language: "css",
            content: `display: flex;`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `display: inline-flex;`
          },
          {
            type: "paragraph",
            content: "all of its direct children automatically become flex items."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "In this example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ".container is the flex container.",
              "All three .item elements are flex items."
            ]
          },
          {
            type: "paragraph",
            content: "Visual Representation:"
          },
          {
            type: "output",
            content: [
              "Flex Container",
              "+-----------------------------------+",
              "| Item 1 | Item 2 | Item 3          |",
              "+-----------------------------------+"
            ]
          }
        ]
      },
      {
        heading: "Direct Children Rule",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important Flexbox concepts is:"
          },
          {
            type: "output",
            content: "Only direct children become flex items."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">

    <div class="item">
        <span>Text</span>
    </div>

</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
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
              ".item is a flex item.",
              "<span> is NOT a flex item because it is not a direct child of .container."
            ]
          },
          {
            type: "paragraph",
            content: "This rule explains many Flexbox-related bugs beginners encounter."
          }
        ]
      },
      {
        heading: "Flex Item Properties",
        blocks: [
          {
            type: "paragraph",
            content: "The main properties that control flex items are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "order",
              "flex-grow",
              "flex-shrink",
              "flex-basis",
              "flex",
              "align-self"
            ]
          },
          {
            type: "paragraph",
            content: "These properties work on individual items rather than the container."
          }
        ]
      },
      {
        heading: "order Property",
        blocks: [
          {
            type: "paragraph",
            content: "The order property changes the visual order of flex items."
          },
          {
            type: "paragraph",
            content: "Default value:"
          },
          {
            type: "code",
            language: "css",
            content: `order: 0;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="item one">1</div>
    <div class="item two">2</div>
    <div class="item three">3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}

.one {
    order: 3;
}

.two {
    order: 1;
}

.three {
    order: 2;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "2 3 1"
          },
          {
            type: "paragraph",
            content: "Although the HTML order is:"
          },
          {
            type: "output",
            content: "1 2 3"
          },
          {
            type: "paragraph",
            content: "the display order becomes:"
          },
          {
            type: "output",
            content: "2 3 1"
          }
        ]
      },
      {
        heading: "How order Works",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox sorts items from the lowest order value to the highest."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    order: -1;
}

.item2 {
    order: 5;
}

.item3 {
    order: 2;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "item1 item3 item2"
          },
          {
            type: "paragraph",
            content: "Because:"
          },
          {
            type: "output",
            content: "-1 < 2 < 5"
          },
          {
            type: "paragraph",
            content: "When to Use order"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Responsive layouts",
              "Sidebar rearrangement",
              "Mobile-first designs",
              "Card layouts"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "comparison",
            leftTitle: "Desktop",
            leftItems: [
              "Sidebar | Content"
            ],
            rightTitle: "Mobile",
            rightItems: [
              "Content",
              "Sidebar"
            ]
          },
          {
            type: "paragraph",
            content: "Using order, this can be achieved without changing HTML structure."
          }
        ]
      },
      {
        heading: "flex-grow Property",
        blocks: [
          {
            type: "paragraph",
            content: "Determines how much an item should grow when extra space is available."
          },
          {
            type: "paragraph",
            content: "Default:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-grow: 0;`
          },
          {
            type: "paragraph",
            content: "Meaning: Do not grow."
          },
          {
            type: "paragraph",
            content: "Example 1"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}

.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 1;
}

.item3 {
    flex-grow: 1;
}`
          },
          {
            type: "paragraph",
            content: "Result: All items occupy equal space."
          },
          {
            type: "output",
            content: "|----|----|----|"
          },
          {
            type: "paragraph",
            content: "Example 2"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 2;
}

.item3 {
    flex-grow: 1;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "|---|------|---|"
          },
          {
            type: "paragraph",
            content: "Item 2 gets twice as much extra space."
          }
        ]
      },
      {
        heading: "Understanding flex-grow Ratios",
        blocks: [
          {
            type: "paragraph",
            content: "Flex-grow values represent proportions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 3;
}`
          },
          {
            type: "paragraph",
            content: "Available space: 400px"
          },
          {
            type: "paragraph",
            content: "Distribution:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "item1 = 100px",
              "item2 = 300px"
            ]
          },
          {
            type: "paragraph",
            content: "Ratio:"
          },
          {
            type: "output",
            content: "1 : 3"
          }
        ]
      },
      {
        heading: "flex-shrink Property",
        blocks: [
          {
            type: "paragraph",
            content: "Controls how items shrink when space becomes limited."
          },
          {
            type: "paragraph",
            content: "Default:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-shrink: 1;`
          },
          {
            type: "paragraph",
            content: "Meaning: Allow shrinking."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    flex-shrink: 1;
}

.item2 {
    flex-shrink: 2;
}`
          },
          {
            type: "paragraph",
            content: "When space becomes smaller: Item 2 shrinks twice as much as Item 1."
          },
          {
            type: "paragraph",
            content: "Preventing Shrinking"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex-shrink: 0;
}`
          },
          {
            type: "paragraph",
            content: "Now the item keeps its size. Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logos",
              "Icons",
              "Fixed-width elements"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.logo {
    flex-shrink: 0;
}`
          },
          {
            type: "paragraph",
            content: "A navigation logo should often remain unchanged regardless of screen width."
          }
        ]
      },
      {
        heading: "flex-basis Property",
        blocks: [
          {
            type: "paragraph",
            content: "Defines the initial size of a flex item before remaining space is distributed."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-basis: value;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex-basis: 200px;
}`
          },
          {
            type: "paragraph",
            content: "The item starts with a width of 200px before Flexbox calculations occur."
          }
        ]
      },
      {
        heading: "flex-basis vs width",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners assume they are identical."
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    width: 200px;
}`
          },
          {
            type: "paragraph",
            content: "and"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex-basis: 200px;
}`
          },
          {
            type: "paragraph",
            content: "can produce different results in Flexbox."
          },
          {
            type: "paragraph",
            content: "Reason:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "width is a sizing property.",
              "flex-basis participates directly in Flexbox calculations."
            ]
          },
          {
            type: "paragraph",
            content: "Modern Flexbox layouts generally prefer flex-basis over width for flexible sizing."
          },
          {
            type: "paragraph",
            content: "Common flex-basis Values"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "flex-basis: auto; (Uses content size)",
              "flex-basis: 0; (Starts from zero size)",
              "flex-basis: 300px; (Starts from 300px)",
              "flex-basis: 50%; (Starts from 50% of container size)"
            ]
          }
        ]
      },
      {
        heading: "The flex Shorthand Property",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of writing:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}`
          },
          {
            type: "paragraph",
            content: "we can use:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "This is one of the most common Flexbox shortcuts."
          },
          {
            type: "paragraph",
            content: "flex Shorthand Syntax"
          },
          {
            type: "output",
            content: "flex: grow shrink basis;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `flex: 2 1 200px;`
          },
          {
            type: "paragraph",
            content: "Means:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-grow: 2;
flex-shrink: 1;
flex-basis: 200px;`
          }
        ]
      },
      {
        heading: "Common flex Values",
        blocks: [
          {
            type: "paragraph",
            content: "flex: 1"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "All items share space equally."
          },
          {
            type: "paragraph",
            content: "flex: auto"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: auto;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to: flex: 1 1 auto;"
          },
          {
            type: "paragraph",
            content: "flex: none"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: none;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to: flex: 0 0 auto; Item neither grows nor shrinks."
          },
          {
            type: "paragraph",
            content: "flex: initial"
          },
          {
            type: "code",
            language: "css",
            content: `flex: initial;`
          },
          {
            type: "paragraph",
            content: "Equivalent to: flex: 0 1 auto; Default behavior."
          }
        ]
      },
      {
        heading: "align-self Property",
        blocks: [
          {
            type: "paragraph",
            content: "Allows a single flex item to override the container's align-items value."
          },
          {
            type: "paragraph",
            content: "Container:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    align-items: center;
}`
          },
          {
            type: "paragraph",
            content: "All items align at the center. Now:"
          },
          {
            type: "code",
            language: "css",
            content: `.special {
    align-self: flex-start;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Item 1",
              "Item 2",
              "Item 3 (moves to top)"
            ]
          },
          {
            type: "paragraph",
            content: "Only the selected item changes position."
          },
          {
            type: "paragraph",
            content: "Common align-self Values"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "align-self: auto;",
              "align-self: flex-start;",
              "align-self: flex-end;",
              "align-self: center;",
              "align-self: stretch;",
              "align-self: baseline;"
            ]
          },
          {
            type: "paragraph",
            content: "Practical Example"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="box">1</div>
    <div class="box special">2</div>
    <div class="box">3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    height: 200px;
    align-items: center;
}

.special {
    align-self: flex-start;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1     3",
              " 2"
            ]
          },
          {
            type: "paragraph",
            content: "Item 2 moves independently."
          }
        ]
      },
      {
        heading: "Flex Item Sizing Strategy Used by Modern Websites",
        blocks: [
          {
            type: "paragraph",
            content: "Most professional websites use combinations like:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `.sidebar {
    flex: 0 0 250px;
}`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `.content {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "+----------------------+",
              "| Sidebar | Content    |",
              "+----------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Sidebar remains fixed while content expands."
          },
          {
            type: "paragraph",
            content: "This pattern is used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboards",
              "Admin panels",
              "Blog layouts",
              "SaaS applications"
            ]
          }
        ]
      },
      {
        heading: "Minimum and Maximum Sizes with Flex Items",
        blocks: [
          {
            type: "paragraph",
            content: "A topic many tutorials barely discuss is combining Flexbox with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "min-width",
              "max-width",
              "min-height",
              "max-height"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    flex: 1;
    min-width: 250px;
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
              "Card grows when space is available.",
              "Card never becomes smaller than 250px."
            ]
          },
          {
            type: "paragraph",
            content: "This technique powers modern responsive card layouts."
          }
        ]
      },
      {
        heading: "Why flex: 1 Sometimes Doesn't Work",
        blocks: [
          {
            type: "paragraph",
            content: "A common beginner confusion:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "yet items don't shrink as expected."
          },
          {
            type: "paragraph",
            content: "Reason:"
          },
          {
            type: "paragraph",
            content: "Many elements have content that prevents shrinking."
          },
          {
            type: "paragraph",
            content: "Solution:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1;
    min-width: 0;
}`
          },
          {
            type: "paragraph",
            content: "This allows the item to shrink properly. This is a real-world Flexbox trick that many basic tutorials completely skip."
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
                question: "1. Using Flex Item Properties on the Container",
                answer: "Applying flex-grow to the .container will do nothing. It is a flex item property and must be applied to the children.",
                examples: [
                  {
                    title: "Wrong Practice",
                    language: "css",
                    content: `.container {
    flex-grow: 1;
}`
                  }
                ]
              },
              {
                question: "2. Expecting Nested Elements to Become Flex Items",
                answer: "Flexbox only controls DIRECT children. If you have a span inside a div inside a flex container, the span is NOT a flex item."
              },
              {
                question: "3. Overusing order",
                answer: "Using order: 999; everywhere creates brittle CSS that is incredibly hard to maintain. Furthermore, changing visual order without changing DOM order creates massive accessibility issues for screen reader users."
              },
              {
                question: "4. Forgetting flex-shrink",
                answer: "Items might unexpectedly overflow their container on small screens because flex-shrink: 0; prevents them from scaling down."
              },
              {
                question: "5. Mixing width and flex-basis Incorrectly",
                answer: "Applying both width and flex-basis to an item can produce highly unpredictable sizing. Stick to flex-basis for flex items.",
                examples: [
                  {
                    title: "Unpredictable Sizing",
                    language: "css",
                    content: `.item {
    width: 300px;
    flex-basis: 150px;
}`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        heading: "Real-World Flex Item Layout Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div class="layout">
    <aside class="sidebar"></aside>
    <main class="content"></main>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.layout {
    display: flex;
}

.sidebar {
    flex: 0 0 250px;
}

.content {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "+---------+------------------+",
              "| Sidebar |     Content      |",
              "+---------+------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "The sidebar remains fixed while the content area automatically fills remaining space."
          },
          {
            type: "paragraph",
            content: "This pattern appears in thousands of modern web applications."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "A Flex Item is any direct child of a flex container. Flex items can independently control their size, growth, shrink behavior, alignment, and display order using special Flexbox properties."
          },
          {
            type: "paragraph",
            content: "The most important flex item properties are:"
          },
          {
            type: "table",
            headers: [
              "Property",
              "Purpose"
            ],
            rows: [
              [
                "order",
                "Changes visual order"
              ],
              [
                "flex-grow",
                "Controls growth"
              ],
              [
                "flex-shrink",
                "Controls shrinking"
              ],
              [
                "flex-basis",
                "Sets initial size"
              ],
              [
                "flex",
                "Shorthand for grow, shrink, and basis"
              ],
              [
                "align-self",
                "Overrides item alignment"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Flex items are what make Flexbox truly powerful. By combining container properties such as justify-content and align-items with item properties such as flex-grow, flex-shrink, and align-self, developers can build highly responsive layouts that adapt smoothly to different screen sizes without relying on floats, positioning hacks, or complex calculations."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A quick trick to remember the `flex` shorthand: The order is `grow`, `shrink`, `basis`. You can remember this as **G**o **S**ee **B**atman. `flex: 1 0 200px;` means Grow=1, Shrink=0, Basis=200px."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Responsive Flexbox
============================= */
    "css-responsive-flexbox": {
    title: "Responsive Flexbox",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Responsive Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites are viewed on phones, tablets, laptops, desktops, TVs, and even foldable devices. A layout that looks perfect on a large monitor may become unusable on a mobile screen. This is where Responsive Flexbox becomes extremely valuable."
          },
          {
            type: "paragraph",
            content: "Flexbox was designed to create flexible layouts that can automatically adjust according to the available space. By combining Flexbox with responsive design techniques such as percentages, flexible sizing, wrapping, and media queries, developers can build layouts that work smoothly across all screen sizes."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you will learn how to make Flexbox layouts responsive, understand common patterns used in real-world websites, and avoid mistakes that often break responsive designs."
          }
        ]
      },
      {
        heading: "What is Responsive Flexbox?",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Flexbox means using Flexbox in a way that allows elements to adapt to different screen sizes without creating horizontal scrolling, overlapping content, or broken layouts."
          },
          {
            type: "paragraph",
            content: "Instead of defining rigid dimensions, Flexbox lets items:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grow when extra space is available",
              "Shrink when space becomes limited",
              "Wrap onto new rows",
              "Change direction based on screen size",
              "Maintain proper alignment automatically"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "On a large screen, items may appear side by side."
          },
          {
            type: "output",
            content: "[Item 1] [Item 2] [Item 3]"
          },
          {
            type: "paragraph",
            content: "On a smaller screen, they may wrap:"
          },
          {
            type: "output",
            content: [
              "[Item 1]",
              "[Item 2]",
              "[Item 3]"
            ]
          },
          {
            type: "paragraph",
            content: "This adaptability is the foundation of responsive design."
          }
        ]
      },
      {
        heading: "Why Flexbox is Great for Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Before Flexbox existed, developers used:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Floats",
              "Tables",
              "Inline-block layouts",
              "Complex positioning hacks"
            ]
          },
          {
            type: "paragraph",
            content: "These methods required a large amount of code and often broke on different devices."
          },
          {
            type: "paragraph",
            content: "Flexbox solves many of these problems because it:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Automatically distributes space",
              "✔ Aligns elements easily",
              "✔ Handles varying content sizes",
              "✔ Supports wrapping",
              "✔ Works well with media queries",
              "✔ Reduces layout code significantly"
            ]
          }
        ]
      },
      {
        heading: "The Role of Flex Containers and Flex Items",
        blocks: [
          {
            type: "paragraph",
            content: "A responsive Flexbox layout consists of:"
          },
          {
            type: "paragraph",
            content: "Flex Container"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Flex Items"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "The container controls layout behavior while items adapt within that layout."
          }
        ]
      },
      {
        heading: "Making Items Flexible",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest reasons Flexbox is responsive is the flex property."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1;
}`
          },
          {
            type: "paragraph",
            content: "This means:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grow if space is available",
              "Shrink if space is limited",
              "Share available space equally"
            ]
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "|----Item1----|----Item2----|----Item3----|"
          },
          {
            type: "paragraph",
            content: "Regardless of screen width, all items resize proportionally."
          }
        ]
      },
      {
        heading: "Using Percentage Widths",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox works very well with percentages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex-basis: 30%;
}`
          },
          {
            type: "paragraph",
            content: "This tells each item to start with 30% width."
          },
          {
            type: "paragraph",
            content: "Large screens:"
          },
          {
            type: "output",
            content: "[Item][Item][Item]"
          },
          {
            type: "paragraph",
            content: "Smaller screens:"
          },
          {
            type: "output",
            content: [
              "[Item][Item]",
              "[Item]"
            ]
          },
          {
            type: "paragraph",
            content: "when wrapping is enabled."
          }
        ]
      },
      {
        heading: "Understanding Flex Wrap",
        blocks: [
          {
            type: "paragraph",
            content: "Without wrapping, items try to stay on one line."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: nowrap;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "[Item1][Item2][Item3][Item4]"
          },
          {
            type: "paragraph",
            content: "On small screens, items may become extremely narrow."
          },
          {
            type: "paragraph",
            content: "Enabling Wrapping"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
}`
          },
          {
            type: "paragraph",
            content: "Now items move to a new row when necessary."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[1][2][3][4]",
              "",
              "Tablet:",
              "[1][2]",
              "[3][4]",
              "",
              "Mobile:",
              "[1]",
              "[2]",
              "[3]",
              "[4]"
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most important responsive Flexbox techniques."
          }
        ]
      },
      {
        heading: "Using the Flex Shorthand",
        blocks: [
          {
            type: "paragraph",
            content: "A common responsive pattern:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1 1 300px;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "code",
            language: "css",
            content: `flex-grow: 1;
flex-shrink: 1;
flex-basis: 300px;`
          },
          {
            type: "paragraph",
            content: "Explanation:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grow when space exists",
              "Shrink when needed",
              "Preferred width = 300px"
            ]
          },
          {
            type: "paragraph",
            content: "This creates highly responsive cards."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;
}`
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[Card][Card][Card]",
              "",
              "Tablet:",
              "[Card][Card]",
              "[Card]",
              "",
              "Mobile:",
              "[Card]",
              "[Card]",
              "[Card]"
            ]
          },
          {
            type: "paragraph",
            content: "No media query required."
          }
        ]
      },
      {
        heading: "Changing Layout Direction",
        blocks: [
          {
            type: "paragraph",
            content: "Large screens often use rows:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-direction: row;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "[Sidebar][Content]"
          },
          {
            type: "paragraph",
            content: "On mobile, vertical layouts are often better."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    flex-direction: column;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "[Sidebar]",
              "[Content]"
            ]
          }
        ]
      },
      {
        heading: "Using Media Queries with Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Media queries allow layouts to adapt to specific screen sizes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-direction: row;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}`
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[Menu][Content]",
              "",
              "Mobile:",
              "[Menu]",
              "[Content]"
            ]
          },
          {
            type: "paragraph",
            content: "This is a common responsive design technique."
          }
        ]
      },
      {
        heading: "Responsive Navigation Bar",
        blocks: [
          {
            type: "paragraph",
            content: "Desktop navigation:"
          },
          {
            type: "code",
            language: "css",
            content: `.navbar {
    display: flex;
    justify-content: space-between;
}`
          },
          {
            type: "paragraph",
            content: "Desktop:"
          },
          {
            type: "output",
            content: "Logo     Home About Contact"
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Logo",
              "Home",
              "About",
              "Contact"
            ]
          },
          {
            type: "paragraph",
            content: "This improves readability on small screens."
          }
        ]
      },
      {
        heading: "Responsive Card Layout",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common Flexbox use cases."
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="cards">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 250px;
}`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[1][2][3]",
              "",
              "Tablet:",
              "[1][2]",
              "[3]",
              "",
              "Mobile:",
              "[1]",
              "[2]",
              "[3]"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern is widely used in portfolios, blogs, and dashboards."
          }
        ]
      },
      {
        heading: "Responsive Equal Height Columns",
        blocks: [
          {
            type: "paragraph",
            content: "A common challenge before Flexbox was creating equal-height columns."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "All columns automatically stretch to equal height."
          },
          {
            type: "output",
            content: [
              "┌─────────┐",
              "│Column 1 │",
              "│         │",
              "└─────────┘",
              "",
              "┌─────────┐",
              "│Column 2 │",
              "│         │",
              "└─────────┘"
            ]
          },
          {
            type: "paragraph",
            content: "This works regardless of content length."
          }
        ]
      },
      {
        heading: "Using Gap for Responsive Spacing",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of margins:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    gap: 20px;
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
              "Cleaner code",
              "Consistent spacing",
              "Easier responsiveness"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    gap: clamp(10px, 2vw, 30px);
}`
          },
          {
            type: "paragraph",
            content: "Spacing automatically adapts to screen size."
          }
        ]
      },
      {
        heading: "Responsive Centering",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox makes responsive centering simple."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`
          },
          {
            type: "paragraph",
            content: "The content remains centered regardless of screen dimensions."
          }
        ]
      },
      {
        heading: "Preventing Layout Breaks",
        blocks: [
          {
            type: "paragraph",
            content: "A common problem:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    width: 500px;
}`
          },
          {
            type: "paragraph",
            content: "Small screens may overflow."
          },
          {
            type: "paragraph",
            content: "Better approach:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    max-width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    flex: 1 1 300px;
}`
          },
          {
            type: "paragraph",
            content: "This allows items to resize naturally."
          }
        ]
      },
      {
        heading: "Understanding min-width and Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers don't know this important Flexbox behavior."
          },
          {
            type: "paragraph",
            content: "Flex items have:"
          },
          {
            type: "code",
            language: "css",
            content: `min-width: auto;`
          },
          {
            type: "paragraph",
            content: "by default."
          },
          {
            type: "paragraph",
            content: "Sometimes content refuses to shrink."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    min-width: 0;
}`
          },
          {
            type: "paragraph",
            content: "This allows long text to shrink properly."
          },
          {
            type: "paragraph",
            content: "Without it:"
          },
          {
            type: "output",
            content: "Overflow occurs"
          },
          {
            type: "paragraph",
            content: "With it:"
          },
          {
            type: "output",
            content: "Content adapts correctly"
          },
          {
            type: "paragraph",
            content: "This is one of the most overlooked Flexbox concepts."
          }
        ]
      },
      {
        heading: "Creating Responsive Sidebars",
        blocks: [
          {
            type: "paragraph",
            content: "Desktop:"
          },
          {
            type: "code",
            language: "css",
            content: `.layout {
    display: flex;
}

.sidebar {
    width: 250px;
}`
          },
          {
            type: "paragraph",
            content: "Layout:"
          },
          {
            type: "output",
            content: "[Sidebar][Content]"
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .layout {
        flex-direction: column;
    }
}`
          },
          {
            type: "paragraph",
            content: "Layout:"
          },
          {
            type: "output",
            content: [
              "[Sidebar]",
              "[Content]"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern is used in admin dashboards and blogs."
          }
        ]
      },
      {
        heading: "Responsive Pricing Cards Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.pricing {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.plan {
    flex: 1 1 280px;
}`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[Basic][Pro][Premium]",
              "",
              "Tablet:",
              "[Basic][Pro]",
              "[Premium]",
              "",
              "Mobile:",
              "[Basic]",
              "[Pro]",
              "[Premium]"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a professional responsive design with minimal code."
          }
        ]
      },
      {
        heading: "Common Responsive Flexbox Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. Forgetting flex-wrap",
                answer: "Applying display: flex; without flex-wrap: wrap; forces all items to stay on a single line, causing them to shrink unreadably or overflow the screen on mobile devices.",
                examples: [
                  {
                    title: "Correct Practice",
                    language: "css",
                    content: `.container {
    display: flex;
    flex-wrap: wrap;
}`
                  }
                ]
              },
              {
                question: "2. Using Fixed Widths",
                answer: "Using hardcoded pixel widths (e.g., width: 400px;) breaks responsiveness. Use flex-basis or percentages instead.",
                examples: [
                  {
                    title: "Correct Practice",
                    language: "css",
                    content: `.card {
    flex: 1 1 400px;
}`
                  }
                ]
              },
              {
                question: "3. Excessive Media Queries",
                answer: "Many layouts can become responsive automatically using flex-wrap, flex-grow, flex-shrink, and flex-basis without needing dozens of media query breakpoints."
              },
              {
                question: "4. Ignoring Small Screens",
                answer: "Always test on Mobile phones, Tablets, Laptops, and Desktop monitors. A layout that works on desktop is not automatically responsive."
              }
            ]
          }
        ]
      },
      {
        heading: "Advanced Responsive Technique: Auto-Filling Card Layouts",
        blocks: [
          {
            type: "paragraph",
            content: "A powerful pattern:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 320px;
}`
          },
          {
            type: "paragraph",
            content: "Why professionals love it:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No fixed number of columns",
              "No complicated calculations",
              "Cards automatically fit available space",
              "Works on nearly every screen size"
            ]
          },
          {
            type: "paragraph",
            content: "Many modern dashboards, SaaS products, and portfolio websites use this technique."
          }
        ]
      },
      {
        heading: "Flexbox vs Grid for Responsive Design",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Flexbox",
              "Grid"
            ],
            rows: [
              [
                "One-dimensional layout",
                "Excellent",
                "Good"
              ],
              [
                "Two-dimensional layout",
                "Limited",
                "Excellent"
              ],
              [
                "Navigation bars",
                "Excellent",
                "Good"
              ],
              [
                "Card rows",
                "Excellent",
                "Excellent"
              ],
              [
                "Complex page layouts",
                "Moderate",
                "Excellent"
              ],
              [
                "Content alignment",
                "Excellent",
                "Good"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "General rule:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Flexbox for rows, columns, navigation bars, menus, and component layouts.",
              "Use Grid for complete page structures and complex layouts."
            ]
          },
          {
            type: "paragraph",
            content: "Professional developers often use both together."
          }
        ]
      },
      {
        heading: "Best Practices for Responsive Flexbox",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Enable flex-wrap when appropriate.",
              "Avoid fixed widths whenever possible.",
              "Use flex-basis instead of rigid dimensions.",
              "Combine Flexbox with media queries.",
              "Test on multiple screen sizes.",
              "Use gap for spacing.",
              "Prefer flexible units such as %, rem, vw, and vh.",
              "Set min-width: 0 when content refuses to shrink.",
              "Build mobile-friendly layouts first whenever possible."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Flexbox is the practice of using Flexbox to create layouts that automatically adapt to different screen sizes. By combining properties such as flex-wrap, flex-grow, flex-shrink, flex-basis, and flex-direction, developers can build flexible and user-friendly interfaces with much less code than older layout techniques."
          },
          {
            type: "paragraph",
            content: "Key concepts learned in this tutorial:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Responsive design adapts layouts to different devices.",
              "Flexbox naturally supports responsive behavior.",
              "flex-wrap allows items to move to new rows.",
              "flex: 1 1 300px is a powerful responsive pattern.",
              "Media queries can change layout direction.",
              "Navigation bars, cards, sidebars, and pricing tables become easier to build.",
              "min-width: 0 solves many hidden Flexbox overflow problems.",
              "Flexbox reduces the need for complex responsive code."
            ]
          },
          {
            type: "paragraph",
            content: "Responsive Flexbox is one of the most important skills in modern CSS because it forms the foundation of countless real-world layouts used in websites, web applications, dashboards, e-commerce platforms, and mobile-friendly interfaces."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common layout issue occurs when a flex item contains a long word or URL that won't wrap, causing the whole flex container to break out of the screen. Setting `min-width: 0;` on the flex item, along with `word-break: break-word;` on the text element, will solve this nearly every time."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : CSS Grid Introduction
============================= */
    "css-grid-introduction": {
    title: "CSS Grid Introduction",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Grid Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites are no longer simple vertical pages. They contain complex layouts such as dashboards, magazine-style articles, admin panels, image galleries, product listings, analytics screens, and responsive web applications. Creating these layouts with older CSS techniques like floats, positioning, tables, or even Flexbox can become difficult and require excessive code."
          },
          {
            type: "paragraph",
            content: "To solve this problem, CSS introduced Grid Layout, commonly known as CSS Grid."
          },
          {
            type: "paragraph",
            content: "CSS Grid is a powerful two-dimensional layout system that allows developers to control both rows and columns simultaneously. It is one of the most important modern CSS technologies and has fundamentally changed how professional web layouts are built."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you will learn what CSS Grid is, why it was created, how it works, its core concepts, and how it differs from previous layout methods."
          }
        ]
      },
      {
        heading: "What is CSS Grid?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Grid Layout is a layout system that organizes web content into rows and columns."
          },
          {
            type: "paragraph",
            content: "Instead of positioning elements manually, Grid allows developers to create a structured layout and place items exactly where they belong."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "Once an element becomes a grid container, its child elements become grid items."
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "Grid then controls how these items are arranged."
          }
        ]
      },
      {
        heading: "Why CSS Grid Was Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "Before Grid, developers relied on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML tables",
              "CSS floats",
              "Inline-block layouts",
              "Positioning",
              "Flexbox workarounds"
            ]
          },
          {
            type: "paragraph",
            content: "These methods had limitations."
          },
          {
            type: "paragraph",
            content: "Example of a typical webpage:"
          },
          {
            type: "output",
            content: [
              "----------------------------------",
              "Header",
              "----------------------------------",
              "Sidebar | Main Content",
              "----------------------------------",
              "Footer",
              "----------------------------------"
            ]
          },
          {
            type: "paragraph",
            content: "Creating such layouts with floats often required:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Clearing floats",
              "Width calculations",
              "Positioning tricks",
              "Extra wrapper elements"
            ]
          },
          {
            type: "paragraph",
            content: "CSS Grid solves these issues by providing a dedicated layout system specifically designed for page structures."
          }
        ]
      },
      {
        heading: "The Evolution of Web Layouts",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding Grid becomes easier when you understand its history."
          },
          {
            type: "paragraph",
            content: "1. Table-Based Layouts"
          },
          {
            type: "paragraph",
            content: "Years ago, developers used HTML tables."
          },
          {
            type: "code",
            language: "html",
            content: `<table>
    <tr>
        <td>Sidebar</td>
        <td>Content</td>
    </tr>
</table>`
          },
          {
            type: "paragraph",
            content: "Problems: Poor accessibility, Difficult maintenance, Not responsive."
          },
          {
            type: "paragraph",
            content: "2. Float-Based Layouts"
          },
          {
            type: "code",
            language: "css",
            content: `.sidebar {
    float: left;
}`
          },
          {
            type: "paragraph",
            content: "Problems: Float clearing issues, Complex layouts became difficult."
          },
          {
            type: "paragraph",
            content: "3. Flexbox"
          },
          {
            type: "paragraph",
            content: "Flexbox solved many alignment problems."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Flexbox works extremely well for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bars",
              "Menus",
              "Cards",
              "Single-direction layouts"
            ]
          },
          {
            type: "paragraph",
            content: "However, Flexbox is primarily one-dimensional. It controls: Row OR column. Not both simultaneously."
          },
          {
            type: "paragraph",
            content: "4. CSS Grid"
          },
          {
            type: "paragraph",
            content: "Grid provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Rows AND columns together",
              "Full layout control",
              "Complex page structures",
              "Easier responsive design"
            ]
          },
          {
            type: "paragraph",
            content: "This makes Grid the most powerful layout system currently available in CSS."
          }
        ]
      },
      {
        heading: "One-Dimensional vs Two-Dimensional Layout",
        blocks: [
          {
            type: "paragraph",
            content: "This is the most important concept in Grid."
          },
          {
            type: "comparison",
            leftTitle: "Flexbox (One-Dimensional)",
            leftItems: [
              "Flexbox controls one axis at a time.",
              "[1] [2] [3] [4]",
              "or",
              "[1]",
              "[2]",
              "[3]",
              "[4]"
            ],
            rightTitle: "Grid (Two-Dimensional)",
            rightItems: [
              "Grid controls rows and columns together.",
              "+-----+-----+-----+",
              "|  1  |  2  |  3  |",
              "+-----+-----+-----+",
              "|  4  |  5  |  6  |",
              "+-----+-----+-----+"
            ]
          },
          {
            type: "paragraph",
            content: "This ability makes Grid perfect for complete page layouts."
          }
        ]
      },
      {
        heading: "Real-World Examples of CSS Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Grid is commonly used for:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Dashboard Layouts",
                description: "+----------------------+\n| Header               |\n+------+---------------+\n| Menu | Content       |\n+------+---------------+\n| Footer               |\n+----------------------+"
              },
              {
                title: "E-commerce Product Grids",
                description: "[Product] [Product] [Product]\n[Product] [Product] [Product]"
              },
              {
                title: "News Websites",
                description: "+------------+------------+\n| Main Story | Side Story |\n+------------+------------+\n| Article    | Article    |\n+------------+------------+"
              },
              {
                title: "Photo Galleries & Admin Panels",
                description: "[IMG] [IMG] [IMG]\nSidebar | Analytics Cards"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Grid was specifically designed to simplify these layouts."
          }
        ]
      },
      {
        heading: "Understanding Grid Terminology",
        blocks: [
          {
            type: "paragraph",
            content: "Before writing Grid code, learn its vocabulary."
          },
          {
            type: "paragraph",
            content: "Grid Container"
          },
          {
            type: "paragraph",
            content: "The parent element. Everything inside becomes part of the grid."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "Grid Items"
          },
          {
            type: "paragraph",
            content: "The direct children. Each child is a grid item."
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "Grid Lines"
          },
          {
            type: "paragraph",
            content: "Invisible lines separating rows and columns. Grid uses these lines for positioning."
          },
          {
            type: "output",
            content: [
              "1    2    3    4",
              "|----|----|----|"
            ]
          },
          {
            type: "paragraph",
            content: "Grid Tracks"
          },
          {
            type: "paragraph",
            content: "A row or column between two grid lines."
          },
          {
            type: "output",
            content: [
              "Column Track",
              "|----|",
              "Row Track",
              "--------"
            ]
          },
          {
            type: "paragraph",
            content: "Grid Cells"
          },
          {
            type: "paragraph",
            content: "The smallest unit inside a grid. Like a spreadsheet cell."
          },
          {
            type: "output",
            content: [
              "+----+",
              "|Cell|",
              "+----+"
            ]
          },
          {
            type: "paragraph",
            content: "Grid Areas"
          },
          {
            type: "paragraph",
            content: "Multiple cells combined together. A single item can occupy multiple cells."
          },
          {
            type: "output",
            content: [
              "+--------+",
              "| Header |",
              "+--------+"
            ]
          }
        ]
      },
      {
        heading: "Creating Your First Grid",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "At this stage, Grid is active but no columns are defined. Items appear vertically."
          },
          {
            type: "output",
            content: [
              "1",
              "2",
              "3"
            ]
          }
        ]
      },
      {
        heading: "Defining Columns",
        blocks: [
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "output",
            content: "grid-template-columns"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "+-----+-----+-----+",
              "|  1  |  2  |  3  |",
              "+-----+-----+-----+"
            ]
          },
          {
            type: "paragraph",
            content: "Three columns are created."
          }
        ]
      },
      {
        heading: "Defining Rows",
        blocks: [
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "output",
            content: "grid-template-rows"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-rows: 100px 100px;
}`
          },
          {
            type: "paragraph",
            content: "Creates two rows."
          },
          {
            type: "output",
            content: [
              "+-----+",
              "|Row1 |",
              "+-----+",
              "|Row2 |",
              "+-----+"
            ]
          }
        ]
      },
      {
        heading: "Fractional Units (fr)",
        blocks: [
          {
            type: "paragraph",
            content: "One of Grid's greatest features."
          },
          {
            type: "paragraph",
            content: "Instead of pixels:"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: 1fr 1fr 1fr;`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: [
              "Available Space",
              "----------------",
              "33% | 33% | 33%"
            ]
          },
          {
            type: "paragraph",
            content: "Different ratios:"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: 1fr 2fr 1fr;`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "25% | 50% | 25%"
          },
          {
            type: "paragraph",
            content: "This makes layouts highly flexible."
          }
        ]
      },
      {
        heading: "Adding Space Between Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "css",
            content: `gap: 20px;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "[Item]   [Item]",
              "   20px",
              "[Item]   [Item]"
            ]
          },
          {
            type: "paragraph",
            content: "No need for complex margins."
          }
        ]
      },
      {
        heading: "Why Developers Love Grid",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner Code: Less CSS.",
              "Better Structure: Layouts become easier to understand.",
              "Responsive Design: Works naturally with modern responsive techniques.",
              "Precise Placement: Items can be placed exactly where desired.",
              "Reduced Hacks: No float clearing. No positioning tricks. No layout workarounds."
            ]
          }
        ]
      },
      {
        heading: "Grid vs Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think Grid replaces Flexbox. It does not. Both solve different problems."
          },
          {
            type: "table",
            headers: [
              "Feature",
              "Flexbox",
              "Grid"
            ],
            rows: [
              [
                "One-dimensional layout",
                "Excellent",
                "Good"
              ],
              [
                "Two-dimensional layout",
                "Limited",
                "Excellent"
              ],
              [
                "Navigation bars",
                "Excellent",
                "Good"
              ],
              [
                "Page layouts",
                "Moderate",
                "Excellent"
              ],
              [
                "Alignment",
                "Excellent",
                "Excellent"
              ],
              [
                "Component layouts",
                "Excellent",
                "Good"
              ],
              [
                "Dashboards",
                "Good",
                "Excellent"
              ]
            ]
          },
          {
            type: "comparison",
            leftTitle: "Use Flexbox For",
            leftItems: [
              "Menus",
              "Navigation bars",
              "Buttons",
              "Toolbars",
              "Card alignment",
              "Example: [Home][About][Contact]"
            ],
            rightTitle: "Use Grid For",
            rightItems: [
              "Entire page layouts",
              "Dashboards",
              "Galleries",
              "Product grids",
              "Magazine designs"
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
                question: "Mistake 1: Using Grid for Everything",
                answer: "Grid is powerful but not always necessary. Sometimes Flexbox is simpler and more appropriate for single-row components like navigation menus."
              },
              {
                question: "Mistake 2: Using Fixed Width Columns Everywhere",
                answer: "Using `grid-template-columns: 300px 300px 300px;` will cause responsive issues on smaller screens. Better: use `grid-template-columns: 1fr 1fr 1fr;`."
              },
              {
                question: "Mistake 3: Ignoring Gap",
                answer: "Using `margin-right: 20px;` on grid items is bad practice. Better: use `gap: 20px;` on the grid container. It is cleaner and easier."
              },
              {
                question: "Mistake 4: Not Understanding the Grid Structure",
                answer: "Many developers jump into advanced properties before understanding Containers, Items, Tracks, Lines, and Cells. Mastering these basics makes Grid much easier."
              }
            ]
          }
        ]
      },
      {
        heading: "Modern CSS Grid Capabilities",
        blocks: [
          {
            type: "paragraph",
            content: "Many introductory tutorials stop after rows and columns. Modern Grid can do much more. Grid supports:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dynamic layouts",
              "Auto-generated columns and rows",
              "Responsive grids without media queries",
              "Overlapping items",
              "Named grid areas",
              "Advanced alignment",
              "Subgrid layouts",
              "Masonry-like structures (emerging features)"
            ]
          },
          {
            type: "paragraph",
            content: "These capabilities allow developers to create layouts previously impossible with traditional CSS."
          }
        ]
      },
      {
        heading: "How CSS Grid Changed Web Development",
        blocks: [
          {
            type: "paragraph",
            content: "Before Grid:"
          },
          {
            type: "output",
            content: "Complex Layout = Many Hacks"
          },
          {
            type: "paragraph",
            content: "After Grid:"
          },
          {
            type: "output",
            content: "Complex Layout = Simple CSS"
          },
          {
            type: "paragraph",
            content: "A dashboard that previously required hundreds of lines of layout code can now be built with a few Grid properties."
          },
          {
            type: "paragraph",
            content: "This is why CSS Grid is considered one of the biggest advancements in CSS history."
          }
        ]
      },
      {
        heading: "When Should You Choose CSS Grid?",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Choose Grid when:",
            leftItems: [
              "✔ You need rows and columns.",
              "✔ You are building a page layout.",
              "✔ You need precise positioning.",
              "✔ You are creating galleries or dashboards.",
              "✔ Multiple elements must align both horizontally and vertically."
            ],
            rightTitle: "Avoid Grid when:",
            rightItems: [
              "✖ You only need a simple row.",
              "✖ You only need a simple column.",
              "✖ Flexbox can solve the problem more easily."
            ]
          }
        ]
      },
      {
        heading: "The Mental Model of Grid (Often Missing in Tutorials)",
        blocks: [
          {
            type: "paragraph",
            content: "The biggest reason beginners struggle with Grid is that they think in terms of elements instead of space."
          },
          {
            type: "paragraph",
            content: "With Flexbox, you usually think:"
          },
          {
            type: "output",
            content: "How should these items align?"
          },
          {
            type: "paragraph",
            content: "With Grid, you should think:"
          },
          {
            type: "output",
            content: "How should this page space be divided?"
          },
          {
            type: "paragraph",
            content: "This shift in thinking is the secret to mastering Grid quickly."
          },
          {
            type: "paragraph",
            content: "Professional developers often design the grid structure first and place content into it afterward."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Grid is a powerful two-dimensional layout system that allows developers to organize content into rows and columns simultaneously. It was created to solve layout challenges that were difficult with floats, positioning, tables, and even Flexbox."
          },
          {
            type: "paragraph",
            content: "Key concepts covered in this tutorial:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Grid is a two-dimensional layout system.",
              "A Grid consists of containers and items.",
              "Important concepts include grid lines, tracks, cells, and areas.",
              "display: grid creates a grid container.",
              "grid-template-columns defines columns.",
              "grid-template-rows defines rows.",
              "fr units create flexible layouts.",
              "gap adds spacing between grid items.",
              "Grid is ideal for dashboards, galleries, page layouts, and responsive designs.",
              "Flexbox and Grid complement each other rather than compete."
            ]
          },
          {
            type: "paragraph",
            content: "Most importantly, remember this principle:"
          },
          {
            type: "output",
            content: "Flexbox controls how items flow. Grid controls how space is organized."
          },
          {
            type: "paragraph",
            content: "Once you understand that distinction, learning advanced CSS Grid becomes dramatically easier."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very helpful debugging technique: when learning CSS Grid, temporarily add `border: 1px solid red;` to your grid container and `border: 1px solid blue;` to all your grid items. Seeing the physical boundaries of the tracks and cells makes understanding Grid 10x faster."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Grid Container
============================= */
    "css-grid-container": {
    title: "Grid Container",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Grid Container",
        blocks: [
          {
            type: "paragraph",
            content: "In CSS Grid, everything starts with the Grid Container. Without a grid container, there is no grid layout."
          },
          {
            type: "paragraph",
            content: "A Grid Container is the parent element that holds grid items and defines how those items should be arranged into rows and columns. It acts as the control center of the entire grid system."
          },
          {
            type: "paragraph",
            content: "When you apply display: grid or display: inline-grid to an element, that element becomes a Grid Container, and all its direct children automatically become Grid Items."
          },
          {
            type: "paragraph",
            content: "Understanding the Grid Container is crucial because nearly every Grid property you will use in future lessons belongs to the container rather than the items."
          }
        ]
      },
      {
        heading: "What is a Grid Container?",
        blocks: [
          {
            type: "paragraph",
            content: "A Grid Container is an HTML element whose display property is set to:"
          },
          {
            type: "code",
            language: "css",
            content: `display: grid;`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `display: inline-grid;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "The <div class=\"container\"> becomes the Grid Container. The three child divs become Grid Items."
          },
          {
            type: "paragraph",
            content: "Visual representation:"
          },
          {
            type: "tree",
            content: `Grid Container
│
├── Grid Item 1
├── Grid Item 2
└── Grid Item 3`
          }
        ]
      },
      {
        heading: "Why Do We Need a Grid Container?",
        blocks: [
          {
            type: "paragraph",
            content: "Before Grid can arrange elements into rows and columns, it needs a parent element to define:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Number of columns",
              "Number of rows",
              "Spacing",
              "Alignment",
              "Sizing",
              "Placement rules"
            ]
          },
          {
            type: "paragraph",
            content: "The Grid Container performs all these tasks. Think of it as the blueprint of a building."
          },
          {
            type: "output",
            content: [
              "Blueprint = Grid Container",
              "",
              "Rooms = Grid Items"
            ]
          },
          {
            type: "paragraph",
            content: "Without the blueprint, rooms cannot be arranged properly."
          }
        ]
      },
      {
        heading: "Creating Your First Grid Container",
        blocks: [
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="grid-container">
    <div>Apple</div>
    <div>Mango</div>
    <div>Orange</div>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.grid-container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "The browser now treats this element as a Grid Container. However, since no columns are defined yet, the items appear vertically."
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Apple",
              "Mango",
              "Orange"
            ]
          }
        ]
      },
      {
        heading: "display: grid vs display: inline-grid",
        blocks: [
          {
            type: "paragraph",
            content: "display: grid"
          },
          {
            type: "paragraph",
            content: "This is the most commonly used value."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "Characteristics: Creates a block-level grid container. Occupies the full available width. Starts on a new line. Behaves similarly to block elements."
          },
          {
            type: "paragraph",
            content: "Most modern layouts use display: grid."
          },
          {
            type: "paragraph",
            content: "display: inline-grid"
          },
          {
            type: "paragraph",
            content: "CSS Grid also provides:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: inline-grid;
}`
          },
          {
            type: "paragraph",
            content: "Characteristics: Creates an inline-level grid container. Only takes the width required by its content. Can appear beside other inline elements."
          },
          {
            type: "paragraph",
            content: "Example Output:"
          },
          {
            type: "output",
            content: "Text [Grid Container] Text"
          },
          {
            type: "paragraph",
            content: "Unlike display: grid, it does not automatically take the full width."
          }
        ]
      },
      {
        heading: "Understanding Direct Children",
        blocks: [
          {
            type: "paragraph",
            content: "A very important Grid rule:"
          },
          {
            type: "output",
            content: "Only direct children become Grid Items."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="box">
        <p>Hello</p>
    </div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "Grid item: box. Not: Hello."
          },
          {
            type: "paragraph",
            content: "The paragraph remains a normal child inside the grid item."
          },
          {
            type: "paragraph",
            content: "Visual representation:"
          },
          {
            type: "tree",
            content: `Grid Container
│
└── Grid Item (.box)
     │
     └── Paragraph`
          },
          {
            type: "paragraph",
            content: "Many beginners misunderstand this concept."
          }
        ]
      },
      {
        heading: "Defining Grid Columns",
        blocks: [
          {
            type: "paragraph",
            content: "Once a container becomes a grid, we can define columns."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "+-------+-------+-------+",
              "|   1   |   2   |   3   |",
              "+-------+-------+-------+"
            ]
          },
          {
            type: "paragraph",
            content: "Three columns are created."
          }
        ]
      },
      {
        heading: "Defining Grid Rows",
        blocks: [
          {
            type: "paragraph",
            content: "Rows can also be defined."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-rows: 100px 100px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "+-------+",
              "| Row 1 |",
              "+-------+",
              "| Row 2 |",
              "+-------+"
            ]
          },
          {
            type: "paragraph",
            content: "The container now controls row height."
          }
        ]
      },
      {
        heading: "Combining Rows and Columns",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 100px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "+-------+-------+",
              "|   1   |   2   |",
              "+-------+-------+",
              "|   3   |   4   |",
              "+-------+-------+"
            ]
          },
          {
            type: "paragraph",
            content: "The Grid Container now controls a complete layout structure."
          }
        ]
      },
      {
        heading: "Understanding the fr Unit",
        blocks: [
          {
            type: "paragraph",
            content: "One of Grid's most powerful features is the fractional unit (fr)."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: [
              "Available Width",
              "-----------------------",
              "33% | 33% | 33%"
            ]
          },
          {
            type: "paragraph",
            content: "All columns share space equally."
          },
          {
            type: "paragraph",
            content: "Different proportions:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-template-columns: 1fr 2fr 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "25% | 50% | 25%"
          },
          {
            type: "paragraph",
            content: "This flexibility is one reason Grid is so powerful."
          }
        ]
      },
      {
        heading: "Adding Space Between Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "The Grid Container controls spacing using gap."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "[Item] 20px [Item]"
          },
          {
            type: "paragraph",
            content: "Benefits: Cleaner code, No margin calculations, Consistent spacing."
          },
          {
            type: "paragraph",
            content: "row-gap and column-gap"
          },
          {
            type: "paragraph",
            content: "You can control row and column spacing separately."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    row-gap: 30px;
    column-gap: 15px;
}`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    gap: 30px 15px;
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Row Gap = 30px, Column Gap = 15px."
          }
        ]
      },
      {
        heading: "Explicit Grid vs Implicit Grid",
        blocks: [
          {
            type: "paragraph",
            content: "This concept is often skipped in beginner tutorials but is extremely important."
          },
          {
            type: "paragraph",
            content: "Explicit Grid"
          },
          {
            type: "paragraph",
            content: "Tracks you define manually."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-template-columns: 1fr 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Creates: Column 1, Column 2. Explicitly."
          },
          {
            type: "paragraph",
            content: "Implicit Grid"
          },
          {
            type: "paragraph",
            content: "Additional tracks created automatically by the browser."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Defined Columns = 2",
              "Items = 5"
            ]
          },
          {
            type: "paragraph",
            content: "Grid automatically creates extra rows."
          },
          {
            type: "output",
            content: [
              "+----+----+",
              "| 1  | 2  |",
              "+----+----+",
              "| 3  | 4  |",
              "+----+----+",
              "| 5  |    |",
              "+----+----+"
            ]
          },
          {
            type: "paragraph",
            content: "These automatically created rows belong to the implicit grid. Understanding this behavior helps avoid layout surprises."
          }
        ]
      },
      {
        heading: "Controlling Automatically Created Rows and Columns",
        blocks: [
          {
            type: "paragraph",
            content: "Use grid-auto-rows"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-auto-rows: 150px;
}`
          },
          {
            type: "paragraph",
            content: "Every automatically generated row becomes 150px high."
          },
          {
            type: "paragraph",
            content: "Use grid-auto-columns"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-auto-columns: 200px;
}`
          },
          {
            type: "paragraph",
            content: "Automatically generated columns become 200px wide."
          }
        ]
      },
      {
        heading: "The grid-auto-flow Property",
        blocks: [
          {
            type: "paragraph",
            content: "This property determines how items are placed automatically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-auto-flow: row;
}`
          },
          {
            type: "paragraph",
            content: "Default behavior:"
          },
          {
            type: "output",
            content: [
              "1 2 3",
              "4 5 6"
            ]
          },
          {
            type: "paragraph",
            content: "Column flow:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-auto-flow: column;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1 4",
              "2 5",
              "3 6"
            ]
          },
          {
            type: "paragraph",
            content: "This property is surprisingly useful in advanced layouts."
          }
        ]
      },
      {
        heading: "Aligning Items Inside the Grid Container",
        blocks: [
          {
            type: "paragraph",
            content: "The container controls alignment using:"
          },
          {
            type: "paragraph",
            content: "justify-items"
          },
          {
            type: "paragraph",
            content: "Horizontal alignment."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    justify-items: center;
}`
          },
          {
            type: "paragraph",
            content: "align-items"
          },
          {
            type: "paragraph",
            content: "Vertical alignment."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    align-items: center;
}`
          },
          {
            type: "paragraph",
            content: "place-items"
          },
          {
            type: "paragraph",
            content: "Shorthand:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    place-items: center;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to: justify-items: center; align-items: center;"
          }
        ]
      },
      {
        heading: "Aligning the Entire Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you want to align the entire grid structure."
          },
          {
            type: "paragraph",
            content: "justify-content"
          },
          {
            type: "paragraph",
            content: "Controls horizontal placement."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    justify-content: center;
}`
          },
          {
            type: "paragraph",
            content: "align-content"
          },
          {
            type: "paragraph",
            content: "Controls vertical placement."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    align-content: center;
}`
          },
          {
            type: "paragraph",
            content: "place-content"
          },
          {
            type: "paragraph",
            content: "Shorthand:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    place-content: center;
}`
          },
          {
            type: "paragraph",
            content: "This distinction between item alignment and grid alignment confuses many beginners."
          }
        ]
      },
      {
        heading: "Nested Grid Containers",
        blocks: [
          {
            type: "paragraph",
            content: "A Grid Item can also become another Grid Container."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="parent">
    <div class="child-grid">
        <div>A</div>
        <div>B</div>
    </div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.parent {
    display: grid;
}

.child-grid {
    display: grid;
}`
          },
          {
            type: "paragraph",
            content: "Visual representation:"
          },
          {
            type: "tree",
            content: `Grid Container
│
└── Grid Item
      │
      └── Grid Container`
          },
          {
            type: "paragraph",
            content: "This technique is heavily used in modern dashboards and web applications."
          }
        ]
      },
      {
        heading: "Responsive Grid Containers",
        blocks: [
          {
            type: "paragraph",
            content: "One of Grid's greatest strengths is responsiveness."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "[1][2][3][4]",
              "",
              "Tablet:",
              "[1][2]",
              "[3][4]",
              "",
              "Mobile:",
              "[1]",
              "[2]",
              "[3]",
              "[4]"
            ]
          },
          {
            type: "paragraph",
            content: "Many tutorials mention Grid responsiveness, but this pattern is one of the most powerful real-world techniques used by professional developers."
          }
        ]
      },
      {
        heading: "Grid Container Performance Benefits",
        blocks: [
          {
            type: "paragraph",
            content: "A lesser-known advantage of Grid Containers is layout efficiency."
          },
          {
            type: "paragraph",
            content: "Modern browsers optimize Grid calculations extremely well."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fewer wrapper elements",
              "Cleaner DOM structure",
              "Easier maintenance",
              "Better readability",
              "Reduced layout complexity"
            ]
          },
          {
            type: "paragraph",
            content: "For large applications, this can significantly improve development productivity."
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
                question: "Mistake 1: Forgetting display:grid",
                answer: "Grid properties won't work without it.",
                examples: [
                  {
                    title: "Wrong Practice",
                    language: "css",
                    content: `.container {
    grid-template-columns: 1fr 1fr;
}`
                  },
                  {
                    title: "Correct Practice",
                    language: "css",
                    content: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}`
                  }
                ]
              },
              {
                question: "Mistake 2: Expecting Nested Elements to Become Grid Items",
                answer: "Only direct children participate in the grid."
              },
              {
                question: "Mistake 3: Using Fixed Sizes Everywhere",
                answer: "Using `grid-template-columns: 300px 300px 300px;` is bad practice. Better: `grid-template-columns: 1fr 1fr 1fr;`"
              },
              {
                question: "Mistake 4: Confusing align-items and align-content",
                answer: "Remember: align-items = Align individual items. align-content = Align entire grid."
              },
              {
                question: "Mistake 5: Ignoring Implicit Grids",
                answer: "Many developers define only a few tracks and forget that Grid may create additional rows automatically."
              }
            ]
          }
        ]
      },
      {
        heading: "Grid Container Properties Overview",
        blocks: [
          {
            type: "table",
            headers: [
              "Property",
              "Purpose"
            ],
            rows: [
              [
                "display",
                "Creates grid container"
              ],
              [
                "grid-template-columns",
                "Defines columns"
              ],
              [
                "grid-template-rows",
                "Defines rows"
              ],
              [
                "gap",
                "Space between items"
              ],
              [
                "row-gap",
                "Row spacing"
              ],
              [
                "column-gap",
                "Column spacing"
              ],
              [
                "grid-auto-rows",
                "Size implicit rows"
              ],
              [
                "grid-auto-columns",
                "Size implicit columns"
              ],
              [
                "grid-auto-flow",
                "Placement direction"
              ],
              [
                "justify-items",
                "Horizontal item alignment"
              ],
              [
                "align-items",
                "Vertical item alignment"
              ],
              [
                "place-items",
                "Shorthand item alignment"
              ],
              [
                "justify-content",
                "Horizontal grid alignment"
              ],
              [
                "align-content",
                "Vertical grid alignment"
              ],
              [
                "place-content",
                "Shorthand grid alignment"
              ]
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "A Grid Container is the foundation of every CSS Grid layout. It is created by applying display: grid or display: inline-grid to an element. Once an element becomes a Grid Container, its direct children become Grid Items, and the container gains the ability to control rows, columns, spacing, sizing, placement, and alignment."
          },
          {
            type: "paragraph",
            content: "Key concepts learned in this tutorial:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grid Containers are the parent elements of Grid layouts.",
              "display: grid creates a block-level grid container.",
              "display: inline-grid creates an inline-level grid container.",
              "Direct children become Grid Items.",
              "grid-template-columns defines columns.",
              "grid-template-rows defines rows.",
              "gap, row-gap, and column-gap control spacing.",
              "Explicit grids are manually defined tracks.",
              "Implicit grids are automatically generated tracks.",
              "grid-auto-rows, grid-auto-columns, and grid-auto-flow control automatic placement.",
              "Alignment can be applied to individual items or the entire grid.",
              "Grid Containers can be nested for advanced layouts.",
              "Responsive grids are often built using auto-fit, auto-fill, and minmax()."
            ]
          },
          {
            type: "paragraph",
            content: "Most importantly, remember this principle:"
          },
          {
            type: "output",
            content: "The Grid Container defines the layout. Grid Items simply live inside the structure that the container creates. Understanding the container thoroughly makes every advanced Grid feature much easier to learn."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common point of confusion is `gap`. Remember that `gap` only creates space *between* Grid Items. It does not create padding between the Grid Items and the edge of the Grid Container itself. If you want space around the edges of the grid, apply `padding` to the Grid Container."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Grid Items
============================= */
    "css-grid-items": {
    title: "Grid Items",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "In CSS Grid Layout, a Grid Container creates the grid structure, while the elements placed inside it become Grid Items."
          },
          {
            type: "paragraph",
            content: "A Grid Item is any direct child element of a grid container. These items can be positioned, resized, aligned, reordered, and stretched across rows and columns using powerful CSS Grid properties."
          },
          {
            type: "paragraph",
            content: "Think of a grid container as a spreadsheet and grid items as the cells that hold content. The real power of CSS Grid comes from controlling how these grid items occupy space within the grid."
          }
        ]
      },
      {
        heading: "Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}`
          },
          {
            type: "paragraph",
            content: "In this example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ".container is the Grid Container.",
              "Each .item is a Grid Item."
            ]
          }
        ]
      },
      {
        heading: "Understanding Grid Lines",
        blocks: [
          {
            type: "paragraph",
            content: "Before learning grid item properties, it is important to understand Grid Lines."
          },
          {
            type: "paragraph",
            content: "When a grid is created, vertical and horizontal lines are automatically generated."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}`
          },
          {
            type: "paragraph",
            content: "The grid will contain:"
          },
          {
            type: "output",
            content: [
              "Line 1   Line 2   Line 3   Line 4",
              " |         |         |         |",
              "+---------+---------+---------+"
            ]
          },
          {
            type: "paragraph",
            content: "Grid items can start and end at specific grid lines."
          }
        ]
      },
      {
        heading: "The grid-column Property",
        blocks: [
          {
            type: "paragraph",
            content: "The grid-column property specifies how many columns an item should occupy."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "grid-column: start-line / end-line;"
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    grid-column: 1 / 3;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "+-------------------+",
              "|      Item 1       |",
              "+-------------------+",
              "| Item2 | Item3     |",
              "+-------+-----------+"
            ]
          },
          {
            type: "paragraph",
            content: "Item 1 spans across two columns."
          }
        ]
      },
      {
        heading: "The grid-row Property",
        blocks: [
          {
            type: "paragraph",
            content: "The grid-row property specifies how many rows an item occupies."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    grid-row: 1 / 3;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "+-------+-------+",
              "| Item1 | Item2 |",
              "|       +-------+",
              "|       | Item3 |",
              "+-------+-------+"
            ]
          },
          {
            type: "paragraph",
            content: "Item 1 spans two rows."
          }
        ]
      },
      {
        heading: "Grid Column Start and End",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of using shorthand, start and end values can be defined separately."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-column-start: 1;
    grid-column-end: 4;
}`
          },
          {
            type: "paragraph",
            content: "This makes the item span from line 1 to line 4."
          }
        ]
      },
      {
        heading: "Grid Row Start and End",
        blocks: [
          {
            type: "paragraph",
            content: "Similarly:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-row-start: 1;
    grid-row-end: 3;
}`
          },
          {
            type: "paragraph",
            content: "The item will occupy two rows."
          }
        ]
      },
      {
        heading: "Using span Keyword",
        blocks: [
          {
            type: "paragraph",
            content: "The span keyword specifies how many tracks an item should cover."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-column: span 2;
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Occupy 2 columns from current position."
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-row: span 3;
}`
          },
          {
            type: "paragraph",
            content: "The item covers three rows."
          }
        ]
      },
      {
        heading: "Why span is Useful",
        blocks: [
          {
            type: "paragraph",
            content: "Without knowing exact line numbers:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    grid-column: span 2;
}`
          },
          {
            type: "paragraph",
            content: "This makes layouts easier to maintain when the grid changes."
          }
        ]
      },
      {
        heading: "Positioning Grid Items Explicitly",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.item {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
}`
          },
          {
            type: "paragraph",
            content: "The item starts at column line 2 and ends at column line 4. This gives precise control over layout placement."
          }
        ]
      },
      {
        heading: "Negative Grid Line Numbers",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Grid allows negative numbering."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-column: 1 / -1;
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Start from first line",
              "End at last line"
            ]
          },
          {
            type: "paragraph",
            content: "This is extremely useful because it works regardless of how many columns exist."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.header {
    grid-column: 1 / -1;
}`
          },
          {
            type: "paragraph",
            content: "The header automatically spans the full width of the grid."
          }
        ]
      },
      {
        heading: "Naming Grid Lines",
        blocks: [
          {
            type: "paragraph",
            content: "Grid lines can have custom names."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns:
        [start] 1fr
        [middle] 1fr
        [end] 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Now items can use:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-column: start / end;
}`
          },
          {
            type: "paragraph",
            content: "This improves readability in large projects."
          }
        ]
      },
      {
        heading: "The grid-area Property",
        blocks: [
          {
            type: "paragraph",
            content: "grid-area is a shorthand that controls both row and column placement."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: [
              "grid-area:",
              "row-start /",
              "column-start /",
              "row-end /",
              "column-end;"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-area: 1 / 1 / 3 / 3;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
}`
          }
        ]
      },
      {
        heading: "Named Grid Areas",
        blocks: [
          {
            type: "paragraph",
            content: "Grid items can be assigned names."
          },
          {
            type: "paragraph",
            content: "Container"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
}`
          },
          {
            type: "paragraph",
            content: "Items"
          },
          {
            type: "code",
            language: "css",
            content: `.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
}

.footer {
    grid-area: footer;
}`
          },
          {
            type: "paragraph",
            content: "This creates highly readable layouts."
          }
        ]
      },
      {
        heading: "Layering Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "Multiple grid items can occupy the same area."
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    grid-area: 1 / 1 / 3 / 3;
}

.item2 {
    grid-area: 1 / 1 / 3 / 3;
}`
          },
          {
            type: "paragraph",
            content: "Both items overlap. Control stacking with:"
          },
          {
            type: "code",
            language: "css",
            content: `z-index: 10;`
          },
          {
            type: "paragraph",
            content: "Higher z-index appears on top."
          }
        ]
      },
      {
        heading: "Aligning Individual Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "Grid containers can align all items together. However, individual items can override alignment."
          },
          {
            type: "paragraph",
            content: "justify-self"
          },
          {
            type: "paragraph",
            content: "Controls horizontal alignment."
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    justify-self: center;
}`
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "start",
              "end",
              "center",
              "stretch"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    justify-self: end;
}`
          },
          {
            type: "paragraph",
            content: "Moves item toward the right side of its cell."
          },
          {
            type: "paragraph",
            content: "align-self"
          },
          {
            type: "paragraph",
            content: "Controls vertical alignment."
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    align-self: center;
}`
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "start",
              "end",
              "center",
              "stretch"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    align-self: end;
}`
          },
          {
            type: "paragraph",
            content: "Moves item to the bottom."
          },
          {
            type: "paragraph",
            content: "place-self"
          },
          {
            type: "paragraph",
            content: "Shorthand for align-self and justify-self."
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    place-self: center;
}`
          },
          {
            type: "paragraph",
            content: "Equivalent to:"
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    align-self: center;
    justify-self: center;
}`
          }
        ]
      },
      {
        heading: "Controlling Item Order",
        blocks: [
          {
            type: "paragraph",
            content: "Grid items can be visually reordered."
          },
          {
            type: "code",
            language: "css",
            content: `.item {
    order: 2;
}
.item2 {
    order: 1;
}`
          },
          {
            type: "paragraph",
            content: "Items with smaller order values appear first."
          },
          {
            type: "paragraph",
            content: "Important Note"
          },
          {
            type: "paragraph",
            content: "Only visual order changes. The HTML document order remains unchanged. This is important for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "Screen readers",
              "Keyboard navigation",
              "SEO"
            ]
          }
        ]
      },
      {
        heading: "Implicit Grid Placement",
        blocks: [
          {
            type: "paragraph",
            content: "If an item is not explicitly positioned:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
          },
          {
            type: "paragraph",
            content: "CSS automatically places items. This is called Auto Placement."
          }
        ]
      },
      {
        heading: "Auto Placement Algorithm",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>`
          },
          {
            type: "paragraph",
            content: "CSS fills grid cells:"
          },
          {
            type: "output",
            content: [
              "1 2 3",
              "4"
            ]
          },
          {
            type: "paragraph",
            content: "from left to right and top to bottom."
          }
        ]
      },
      {
        heading: "Dense Packing",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes empty gaps appear."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    grid-auto-flow: row dense;
}`
          },
          {
            type: "paragraph",
            content: "The dense keyword allows CSS to fill available gaps with smaller items. This creates more compact layouts."
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Photo galleries",
              "Dashboards",
              "Product cards",
              "Pinterest-style layouts"
            ]
          }
        ]
      },
      {
        heading: "Grid Items and Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Grid items can adapt automatically."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`
          },
          {
            type: "paragraph",
            content: "Items automatically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grow",
              "Shrink",
              "Rearrange"
            ]
          },
          {
            type: "paragraph",
            content: "based on available screen width. This reduces the need for media queries."
          }
        ]
      },
      {
        heading: "Advanced Technique: Full-Bleed Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites often create sections that stretch across the entire viewport."
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    grid-column: 1 / -1;
}`
          },
          {
            type: "paragraph",
            content: "This makes the element span every column. Common examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero banners",
              "Headers",
              "Footers",
              "Advertisement sections"
            ]
          },
          {
            type: "paragraph",
            content: "Many beginner tutorials skip this practical use case even though it is widely used in production websites."
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
                question: "1. Using Grid Properties on Non-Grid Items",
                answer: "Using `grid-column: 1 / 3;` on an element that isn't a direct child of a grid container will have absolutely no effect. Grid properties work only inside a grid container."
              },
              {
                question: "2. Confusing Grid Lines with Columns",
                answer: "`grid-column: 1 / 3;` does not mean \"column 1 to column 3\". It means \"Start at line 1, End at line 3\", which actually spans exactly two columns, not three."
              },
              {
                question: "3. Forgetting Negative Line Numbers",
                answer: "Many developers hardcode end lines like `grid-column: 1 / 7;`. Instead, using `grid-column: 1 / -1;` is much more flexible because it spans the item across all columns regardless of how many columns are later added to the container."
              },
              {
                question: "4. Overusing Explicit Placement",
                answer: "Avoid positioning every item manually using `grid-column` and `grid-row`. Let auto-placement handle most items and only position the important ones to create cleaner, maintainable code."
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
            content: "CSS Grid is supported by all modern browsers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Edge",
              "Firefox",
              "Safari",
              "Opera"
            ]
          },
          {
            type: "paragraph",
            content: "It is considered a standard and production-ready layout system."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Grid Items are",
              "How grid lines work",
              "grid-column and grid-row",
              "grid-column-start, grid-column-end, grid-row-start, grid-row-end",
              "span keyword",
              "Negative line numbers",
              "Named grid lines and grid-area",
              "Named grid areas",
              "Item overlapping and layering",
              "justify-self, align-self, place-self",
              "order and Auto placement",
              "Dense packing",
              "Responsive grid item behavior",
              "Full-bleed layout techniques",
              "Common mistakes and best practices"
            ]
          },
          {
            type: "paragraph",
            content: "Grid Items are where the true power of CSS Grid becomes visible. While the Grid Container defines the structure, Grid Items allow you to precisely control how content occupies, spans, aligns, and adapts within that structure, enabling everything from simple card layouts to complex professional dashboards and magazine-style designs."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A quick trick for `grid-area` syntax to keep you from getting lost: It follows a counter-clockwise pattern starting from the top. `grid-area: row-start / column-start / row-end / column-end;`. Think of it as Top, Left, Bottom, Right!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Eighth Topic : Grid Layout Examples
============================= */
    "css-grid-layout-projects": {
    title: "Grid Layout Examples",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Grid Layout Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Learning CSS Grid properties individually is important, but the real power of Grid becomes visible when you start building actual layouts."
          },
          {
            type: "paragraph",
            content: "In previous lessons, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grid Containers",
              "Grid Items",
              "Grid Lines",
              "Grid Tracks",
              "Grid Areas",
              "Alignment",
              "Auto Placement"
            ]
          },
          {
            type: "paragraph",
            content: "Now it's time to combine all of these concepts to create practical layouts used in modern websites."
          },
          {
            type: "paragraph",
            content: "This tutorial focuses on real-world CSS Grid examples ranging from simple page structures to advanced responsive layouts used by professional developers."
          }
        ]
      },
      {
        heading: "Why Study Grid Layout Examples?",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners understand Grid properties but struggle to build actual layouts."
          },
          {
            type: "paragraph",
            content: "For example, they know:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "grid-template-columns",
              "grid-column",
              "grid-row",
              "gap"
            ]
          },
          {
            type: "paragraph",
            content: "but cannot create:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Website layouts",
              "Dashboards",
              "Photo galleries",
              "Magazine designs",
              "Landing pages"
            ]
          },
          {
            type: "paragraph",
            content: "Studying layout examples helps bridge the gap between theory and real-world implementation."
          }
        ]
      },
      {
        heading: "Example 1: Basic Two-Column Layout",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common layouts on the web."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: [
              "+----------+-------------------+",
              "| Sidebar  |      Content      |",
              "+----------+-------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Explanation: First column = fixed width. Second column = remaining space. This layout is used in Admin panels, Blogs, Documentation websites."
          }
        ]
      },
      {
        heading: "Example 2: Three-Column Layout",
        blocks: [
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: [
              "+-------+-------+-------+",
              "| Col1  | Col2  | Col3  |",
              "+-------+-------+-------+"
            ]
          },
          {
            type: "paragraph",
            content: "Use Cases: Product cards, Feature sections, Team member sections."
          }
        ]
      },
      {
        heading: "Example 3: Website Layout",
        blocks: [
          {
            type: "paragraph",
            content: "A complete website structure."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <aside>Sidebar</aside>
    <footer>Footer</footer>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;

    grid-template-columns: 250px 1fr;

    grid-template-areas:
        "header header"
        "nav nav"
        "sidebar main"
        "footer footer";
}

header { grid-area: header; }
nav { grid-area: nav; }
aside { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }`
          },
          {
            type: "paragraph",
            content: "Visual Layout"
          },
          {
            type: "output",
            content: [
              "+------------------------+",
              "|         Header         |",
              "+------------------------+",
              "|       Navigation       |",
              "+------------------------+",
              "| Sidebar | Main Content |",
              "+------------------------+",
              "|         Footer         |",
              "+------------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "This approach makes layouts highly readable."
          }
        ]
      },
      {
        heading: "Example 4: Card Grid Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Very common in modern websites."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: [
              "+----+----+----+----+",
              "| C1 | C2 | C3 | C4 |",
              "+----+----+----+----+"
            ]
          },
          {
            type: "paragraph",
            content: "Applications: Product listings, Blog cards, Portfolio projects, Service cards."
          }
        ]
      },
      {
        heading: "Example 5: Responsive Card Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of fixed columns:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(250px, 1fr)
    );
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "What Happens?"
          },
          {
            type: "output",
            content: [
              "Large screen:",
              "Card Card Card Card",
              "",
              "Medium screen:",
              "Card Card Card",
              "",
              "Small screen:",
              "Card Card",
              "",
              "Mobile:",
              "Card"
            ]
          },
          {
            type: "paragraph",
            content: "No media query required. This is one of the most powerful Grid techniques."
          }
        ]
      },
      {
        heading: "Example 6: Holy Grail Layout",
        blocks: [
          {
            type: "paragraph",
            content: "A classic web design pattern."
          },
          {
            type: "paragraph",
            content: "Structure"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Left Sidebar",
              "Main Content",
              "Right Sidebar",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas:
        "header header header"
        "left main right"
        "footer footer footer";
}`
          },
          {
            type: "paragraph",
            content: "Layout"
          },
          {
            type: "output",
            content: [
              "+-------------------------+",
              "|         Header          |",
              "+-------------------------+",
              "| Left | Main | Right     |",
              "+-------------------------+",
              "|         Footer          |",
              "+-------------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Widely used in: News websites, Portals, Dashboards."
          }
        ]
      },
      {
        heading: "Example 7: Magazine Layout",
        blocks: [
          {
            type: "paragraph",
            content: "One area can span multiple tracks."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.featured {
    grid-column: span 2;
    grid-row: span 2;
}`
          },
          {
            type: "paragraph",
            content: "Layout"
          },
          {
            type: "output",
            content: [
              "+----------+----------+",
              "| Featured | Featured |",
              "| Featured | Featured |",
              "+----------+----------+",
              "| Card     | Card     |",
              "+----------+----------+"
            ]
          },
          {
            type: "paragraph",
            content: "Used by: News sites, Magazines, Editorial websites."
          }
        ]
      },
      {
        heading: "Example 8: Image Gallery",
        blocks: [
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Result: Images automatically fit available space."
          },
          {
            type: "output",
            content: [
              "Img Img Img Img",
              "Img Img Img Img"
            ]
          },
          {
            type: "paragraph",
            content: "Perfect for: Photography portfolios, Travel websites, E-commerce galleries."
          }
        ]
      },
      {
        heading: "Example 9: Masonry-Style Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Although true masonry support is still evolving, a similar effect can be achieved."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 100px;
}
.tall {
    grid-row: span 3;
}
.medium {
    grid-row: span 2;
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: [
              "+----+----+----+",
              "|    |    |    |",
              "|Tall|Med |    |",
              "|    |    |    |",
              "+----+----+----+"
            ]
          },
          {
            type: "paragraph",
            content: "Popular on: Pinterest-like websites, Design portfolios."
          }
        ]
      },
      {
        heading: "Example 10: Dashboard Layout",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most practical Grid use cases."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:
        "sidebar header"
        "sidebar main";
}`
          },
          {
            type: "paragraph",
            content: "Layout"
          },
          {
            type: "output",
            content: [
              "+------------------------+",
              "|Sidebar | Header        |",
              "|        +-------------- |",
              "|        | Main Content  |",
              "+------------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Used by: Analytics dashboards, CRM systems, Admin panels."
          }
        ]
      },
      {
        heading: "Example 11: Pricing Table Layout",
        blocks: [
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}`
          },
          {
            type: "paragraph",
            content: "Layout"
          },
          {
            type: "output",
            content: [
              "+------+ +------+ +------+",
              "|Basic | | Pro  | |Elite |",
              "+------+ +------+ +------+"
            ]
          },
          {
            type: "paragraph",
            content: "Ideal for SaaS websites."
          }
        ]
      },
      {
        heading: "Example 12: Centering Content with Grid",
        blocks: [
          {
            type: "paragraph",
            content: "One of the simplest yet most useful tricks."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    place-items: center;
    height: 100vh;
}`
          },
          {
            type: "paragraph",
            content: "Result: The content is perfectly centered both vertically and horizontally. Many tutorials mention Flexbox centering but overlook that Grid can achieve the same result with a single property."
          }
        ]
      },
      {
        heading: "Example 13: Equal Height Cards",
        blocks: [
          {
            type: "paragraph",
            content: "A common design problem."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
          },
          {
            type: "paragraph",
            content: "All grid items naturally stretch to equal heights within the same row. Unlike older float layouts, no extra hacks are required."
          }
        ]
      },
      {
        heading: "Example 14: Full-Width Hero Section",
        blocks: [
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    grid-column: 1 / -1;
}`
          },
          {
            type: "paragraph",
            content: "Result: The hero spans across all columns. Used for: Landing pages, Banners, Promotional sections."
          }
        ]
      },
      {
        heading: "Example 15: Responsive Sidebar Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Desktop"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-columns: 250px 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Mobile"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Desktop:",
              "Sidebar | Content",
              "",
              "Mobile:",
              "Sidebar",
              "Content"
            ]
          }
        ]
      },
      {
        heading: "Example 16: Nested Grid Layout",
        blocks: [
          {
            type: "paragraph",
            content: "A grid item can also become a grid container."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}`
          },
          {
            type: "paragraph",
            content: "Structure"
          },
          {
            type: "tree",
            content: `Outer Grid
   |
   └── Inner Grid`
          },
          {
            type: "paragraph",
            content: "This creates highly modular layouts."
          }
        ]
      },
      {
        heading: "Example 17: Subgrid Layout (Modern CSS)",
        blocks: [
          {
            type: "paragraph",
            content: "Subgrid is one of the newest Grid features."
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.child {
    display: grid;
    grid-template-columns: subgrid;
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
              "Child grids align perfectly with parent grids.",
              "Consistent spacing.",
              "Easier complex layouts."
            ]
          },
          {
            type: "paragraph",
            content: "Many older tutorials ignore this modern feature."
          }
        ]
      },
      {
        heading: "Example 18: Auto-Fit vs Auto-Fill",
        blocks: [
          {
            type: "paragraph",
            content: "These are often misunderstood."
          },
          {
            type: "comparison",
            leftTitle: "Auto-Fit",
            leftItems: [
              "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",
              "Unused columns collapse."
            ],
            rightTitle: "Auto-Fill",
            rightItems: [
              "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
              "Empty columns remain reserved."
            ]
          },
          {
            type: "paragraph",
            content: "Practical Rule: Use auto-fit for most responsive layouts."
          }
        ]
      },
      {
        heading: "Example 19: Overlapping Grid Items",
        blocks: [
          {
            type: "paragraph",
            content: "Grid allows elements to overlap."
          },
          {
            type: "code",
            language: "css",
            content: `.item1 {
    grid-area: 1/1/3/3;
}

.item2 {
    grid-area: 1/1/3/3;
}`
          },
          {
            type: "paragraph",
            content: "Use: z-index: 10; to control which item appears on top."
          },
          {
            type: "paragraph",
            content: "Applications: Hero text over images, Promotional banners, Interactive cards."
          }
        ]
      },
      {
        heading: "Example 20: Modern Landing Page Layout",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.container {
    display: grid;
    grid-template-areas:
        "header"
        "hero"
        "features"
        "testimonials"
        "footer";
}`
          },
          {
            type: "paragraph",
            content: "This section-based structure is used by most modern startup websites."
          }
        ]
      },
      {
        heading: "Performance Tips for Large Grid Layouts",
        blocks: [
          {
            type: "paragraph",
            content: "When working with large grids:"
          },
          {
            type: "paragraph",
            content: "Use Fraction Units"
          },
          {
            type: "paragraph",
            content: "Better: 1fr 2fr 1fr"
          },
          {
            type: "paragraph",
            content: "Instead of: 200px 400px 200px"
          },
          {
            type: "paragraph",
            content: "Avoid Excessive Nesting"
          },
          {
            type: "paragraph",
            content: "Too many nested grids can make layouts harder to maintain."
          },
          {
            type: "paragraph",
            content: "Use Named Areas"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-areas:
    "header header"
    "sidebar main";`
          },
          {
            type: "paragraph",
            content: "is far easier to understand than manually tracking line numbers."
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
                question: "Using Grid for One-Dimensional Layouts",
                answer: "If content only moves in one direction (e.g., a simple row of buttons), Flexbox is usually better and requires less CSS."
              },
              {
                question: "Hardcoding Widths",
                answer: "Avoid hardcoding values like `grid-template-columns: 300px 300px 300px;` as this will break on mobile devices. Use `repeat(3, 1fr);` or `auto-fit` for better responsiveness."
              },
              {
                question: "Ignoring Responsive Behavior",
                answer: "Always test your layout on Desktop, Tablet, and Mobile. A grid that looks great on a 4K monitor might be unreadable on a phone."
              },
              {
                question: "Overusing Explicit Placement",
                answer: "Avoid positioning every item manually using line numbers. Let Grid's auto-placement system do most of the work to keep your CSS clean and maintainable."
              }
            ]
          }
        ]
      },
      {
        heading: "Grid vs Flexbox in Real Layouts",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Grid",
              "Flexbox"
            ],
            rows: [
              [
                "Rows + Columns",
                "✅",
                "❌"
              ],
              [
                "Two-Dimensional Layout",
                "✅",
                "❌"
              ],
              [
                "Content Alignment",
                "✅",
                "✅"
              ],
              [
                "Complex Page Layouts",
                "✅",
                "⚠️"
              ],
              [
                "Navigation Menus",
                "⚠️",
                "✅"
              ],
              [
                "Card Rows",
                "✅",
                "✅"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Rule of Thumb:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Flexbox for components.",
              "Use Grid for page layouts."
            ]
          },
          {
            type: "paragraph",
            content: "Professional developers often use both together."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this tutorial, you learned how CSS Grid is used in real-world layouts through practical examples, including:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Two-column layouts",
              "Three-column layouts",
              "Complete website structures",
              "Card grids",
              "Responsive galleries",
              "Dashboards",
              "Pricing tables",
              "Magazine layouts",
              "Masonry-style designs",
              "Nested grids",
              "Subgrid",
              "Auto-fit vs Auto-fill",
              "Overlapping elements",
              "Landing page structures"
            ]
          },
          {
            type: "paragraph",
            content: "The biggest lesson is that CSS Grid is not just a collection of properties—it is a complete layout system. Once you understand how grid containers and grid items work together, you can build almost any modern web layout with cleaner code, fewer media queries, and greater flexibility than older layout techniques. Professional developers rely on Grid for complex page structures because it provides precise control while remaining highly responsive and maintainable."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Example 5 (Responsive Card Layout) using `repeat(auto-fit, minmax(250px, 1fr))` is arguably the most useful CSS snippet you will ever learn for modern web development. Commit it to memory. It builds perfectly responsive card grids without a single media query."
          }
        ]
      }
    ]
  },
};

export default cssModernLayoutSystems;