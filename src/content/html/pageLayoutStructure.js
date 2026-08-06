const pageLayoutStructure = {

/* ===========================
    First Topic : Block vs Inline Elements
============================= */
    "block-inline-elements": {
    title: "Block vs Inline Elements",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When you start building web pages, you quickly notice that some HTML elements automatically start on a new line, while others stay within the same line as surrounding content."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "list",
            items: [
              "A heading appears on a new line.",
              "A paragraph appears on a new line.",
              "A link stays inside a paragraph.",
              "A bold word stays inside a sentence."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This behavior is not random. Every HTML element has a default display behavior that determines how it occupies space on a webpage."
          },
 
          {
            type: "paragraph",
            content:
              "HTML elements are generally divided into two main categories:"
          },
 
          {
            type: "orderedList",
            items: [
              "Block Elements",
              "Inline Elements"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding this distinction is one of the most important concepts in HTML because it affects page layout, CSS styling, responsive design, accessibility, and modern frontend development."
          },
 
          {
            type: "paragraph",
            content:
              "In this tutorial, you'll learn everything about block and inline elements, including browser behavior, rendering internals, common mistakes, real-world applications, and modern development practices."
          }
 
        ]
      },
 
      {
        heading: "Why Do We Need Block and Inline Elements?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a web page containing:"
          },
 
          {
            type: "list",
            items: [
              "Headings",
              "Paragraphs",
              "Images",
              "Buttons",
              "Links",
              "Navigation menus"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "If every element behaved exactly the same way, organizing content would be extremely difficult."
          },
 
          {
            type: "paragraph",
            content:
              "HTML solves this problem by giving different elements different layout behaviors."
          },
 
          {
            type: "paragraph",
            content:
              "Some elements are designed to create structure. Some elements are designed to exist within text."
          },
 
          {
            type: "paragraph",
            content:
              "This is where block and inline elements come into play."
          }
 
        ]
      },
 
      {
        heading: "What Are Block Elements?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A block element occupies the full available width of its parent container and automatically starts on a new line."
          },
 
          {
            type: "paragraph",
            content:
              "Think of block elements as large rectangular boxes stacked vertically."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>
 
<p>This is a paragraph.</p>
 
<p>This is another paragraph.</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content: [
              "Welcome",
              "",
              "This is a paragraph.",
              "",
              "This is another paragraph."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Notice that each element starts on a new line."
          }
 
        ]
      },
 
      {
        heading: "Characteristics of Block Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Block elements:"
          },
 
          {
            type: "list",
            items: [
              "✅ Start on a new line",
              "✅ Occupy the full available width",
              "✅ Create vertical structure",
              "✅ Can contain inline elements",
              "✅ Can usually contain other block elements"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h2>Title</h2>
    <p>Description</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "The div acts as a block container containing other block elements."
          }
 
        ]
      },
 
      {
        heading: "Common Block Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Some of the most frequently used block elements are:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
<p>
<h1> to <h6>
<section>
<article>
<header>
<footer>
<nav>
<main>
<aside>
<form>
<table>
<ul>
<ol>
<li>
<hr>`
          },
 
          {
            type: "paragraph",
            content:
              "These elements are used to structure webpages."
          }
 
        ]
      },
 
      {
        heading: "What Are Inline Elements?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Inline elements only occupy as much width as their content requires."
          },
 
          {
            type: "paragraph",
            content:
              "They do not start on a new line. Instead, they flow within surrounding content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
This is a <strong>bold</strong> word and
this is an <em>italic</em> word.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "This is a bold word and this is an italic word."
          },
 
          {
            type: "paragraph",
            content:
              "The inline elements remain inside the same line."
          }
 
        ]
      },
 
      {
        heading: "Characteristics of Inline Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Inline elements:"
          },
 
          {
            type: "list",
            items: [
              "✅ Do not start on a new line",
              "✅ Occupy only required width",
              "✅ Flow inside surrounding content",
              "✅ Usually contain text",
              "✅ Cannot normally contain block elements"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `Click <a href="#">here</a> to continue.`
          },
 
          {
            type: "paragraph",
            content:
              "The link remains inside the sentence."
          }
 
        ]
      },
 
      {
        heading: "Common Inline Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Frequently used inline elements include:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<a>
<span>
<strong>
<b>
<em>
<i>
<mark>
<small>
<sub>
<sup>
<code>
<abbr>
<label>`
          },
 
          {
            type: "paragraph",
            content:
              "These elements are generally used for formatting or enhancing text."
          }
 
        ]
      },
 
      {
        heading: "Visual Understanding",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider this HTML:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>HTML</h1>
 
<p>
Learn <strong>HTML</strong> and
<a href="#">Web Development</a>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Layout:"
          },
 
          {
            type: "output",
            content: [
              "--------------------------------",
              "HTML",
              "--------------------------------",
              "",
              "Learn HTML and Web Development."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The heading occupies its own block. The bold text and link remain inline."
          }
 
        ]
      },
 
      {
        heading: "Block Elements Example",
 
        blocks: [
 
          {
            type: "code",
            language: "html",
            content: `<div>Block 1</div>
 
<div>Block 2</div>
 
<div>Block 3</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content: [
              "Block 1",
              "",
              "Block 2",
              "",
              "Block 3"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Each element starts on a new line."
          }
 
        ]
      },
 
      {
        heading: "Inline Elements Example",
 
        blocks: [
 
          {
            type: "code",
            language: "html",
            content: `<span>HTML</span>
<span>CSS</span>
<span>JavaScript</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "HTML CSS JavaScript"
          },
 
          {
            type: "paragraph",
            content:
              "All elements remain on the same line."
          }
 
        ]
      },
 
      {
        heading: "Comparing Block and Inline Elements",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "Feature",
              "Block Elements",
              "Inline Elements"
            ],
 
            rows: [
              ["New line", "Yes", "No"],
              ["Width", "Full available width", "Content width only"],
              ["Layout purpose", "Structure", "Content formatting"],
              ["Can contain inline elements", "Yes", "Usually no block elements"],
              ["Vertical stacking", "Yes", "No"],
              ["Common examples", "div, p, h1", "span, a, strong"]
            ]
          }
 
        ]
      },
 
      {
        heading: "The <div> Element",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The most common block element is:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>`
          },
 
          {
            type: "paragraph",
            content:
              "The word \"div\" stands for:"
          },
 
          {
            type: "quote",
            content:
              "Division"
          },
 
          {
            type: "paragraph",
            content:
              "It is a generic block container used to group content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h2>Profile</h2>
    <p>Developer</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Modern websites use thousands of div elements."
          }
 
        ]
      },
 
      {
        heading: "The <span> Element",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The most common inline element is:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>`
          },
 
          {
            type: "paragraph",
            content:
              "It is a generic inline container."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
This is a <span>highlighted</span> word.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Developers often use span for styling specific pieces of text."
          }
 
        ]
      },
 
      {
        heading: "Why <div> and <span> Are So Important",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "These two elements have no visual meaning by themselves."
          },
 
          {
            type: "paragraph",
            content:
              "They simply provide containers for:"
          },
 
          {
            type: "list",
            items: [
              "CSS styling",
              "JavaScript manipulation",
              "Layout creation",
              "Dynamic content"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "You'll see them constantly in modern websites."
          }
 
        ]
      },
 
      {
        heading: "Browser Internals: How Rendering Works",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When a browser parses HTML:"
          },
 
          {
            type: "paragraph",
            content:
              "Step 1: HTML is converted into the DOM tree."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<body>
    <h1>Title</h1>
    <p>Text</p>
</body>`
          },
 
          {
            type: "paragraph",
            content:
              "Becomes:"
          },
 
          {
            type: "tree",
            content: `Body
  ├── H1
  └── P`
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Step 2: The browser applies default styles."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "code",
            language: "css",
            content: `h1 {
    display: block;
}
 
p {
    display: block;
}
 
span {
    display: inline;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Many beginners don't realize that browsers already provide built-in CSS rules."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Step 3: The layout engine calculates positions."
          },
 
          {
            type: "paragraph",
            content:
              "Block elements:"
          },
 
          {
            type: "output",
            content:
              "Stack vertically"
          },
 
          {
            type: "paragraph",
            content:
              "Inline elements:"
          },
 
          {
            type: "output",
            content:
              "Flow horizontally"
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Step 4: The page is rendered on screen."
          },
 
          {
            type: "paragraph",
            content:
              "This process happens for every webpage you visit."
          }
 
        ]
      },
 
      {
        heading: "Why Headings Are Block Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>HTML</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "If headings were inline elements:"
          },
 
          {
            type: "output",
            content:
              "HTML Some other text"
          },
 
          {
            type: "paragraph",
            content:
              "Would appear on the same line."
          },
 
          {
            type: "paragraph",
            content:
              "That would destroy page structure."
          },
 
          {
            type: "paragraph",
            content:
              "Therefore headings are block-level elements by default."
          }
 
        ]
      },
 
      {
        heading: "Why Links Are Inline Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<a href="#">Click Here</a>`
          },
 
          {
            type: "paragraph",
            content:
              "If links were block elements:"
          },
 
          {
            type: "output",
            content:
              "Click Here"
          },
 
          {
            type: "paragraph",
            content:
              "Would occupy an entire line."
          },
 
          {
            type: "paragraph",
            content:
              "This would make writing normal paragraphs impossible."
          },
 
          {
            type: "paragraph",
            content:
              "Therefore links are inline elements."
          }
 
        ]
      },
 
      {
        heading: "Nested Block and Inline Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Valid Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
Learn <strong>HTML</strong>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "The paragraph contains an inline element. This is completely normal."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Another example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h2>Title</h2>
    <p>Description</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "A block element contains other block elements. Also valid."
          }
 
        ]
      },
 
      {
        heading: "Invalid Structure Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>
    <div>Hello</div>
</span>`
          },
 
          {
            type: "warning",
            content:
              "Historically this was considered invalid because inline elements should not contain block elements. Modern HTML parsing is more flexible, but this structure is still poor practice."
          }
 
        ]
      },
 
      {
        heading: "Inline Elements Ignore Certain Dimensions",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A surprising behavior:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Hello</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Inline elements often ignore:"
          },
 
          {
            type: "code",
            language: "css",
            content: `width
height`
          },
 
          {
            type: "paragraph",
            content:
              "This is because inline elements are designed to flow with text."
          },
 
          {
            type: "paragraph",
            content:
              "Block elements, however, fully respect width and height properties."
          },
 
          {
            type: "paragraph",
            content:
              "This becomes important when learning CSS."
          }
 
        ]
      },
 
      {
        heading: "The Display Property Connection",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The distinction between block and inline elements is closely related to CSS."
          },
 
          {
            type: "paragraph",
            content:
              "Every HTML element has a default display value."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "code",
            language: "css",
            content: `div {
    display: block;
}
 
span {
    display: inline;
}`
          },
 
          {
            type: "paragraph",
            content:
              "CSS can change this behavior."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "css",
            content: `span {
    display: block;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Now the span behaves like a block element."
          },
 
          {
            type: "paragraph",
            content:
              "This concept is heavily used in modern frontend development."
          }
 
        ]
      },
 
      {
        heading: "Real-World Website Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider a blog page:"
          },
 
          {
            type: "output",
            content: [
              "Heading",
              "Paragraph",
              "Image",
              "Paragraph",
              "Button"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Behind the scenes:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Heading</h1>
 
<p>Paragraph</p>
 
<img>
 
<p>Paragraph</p>
 
<button>Read More</button>`
          },
 
          {
            type: "paragraph",
            content:
              "The page layout works because different elements have different display behaviors."
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
                question: "Assuming Every Element Behaves the Same",
                answer:
                  "Each element has its own display behavior. Assuming all HTML elements work similarly leads to layout bugs that are hard to debug.",
 
                examples: [
                  {
                    title: "Wrong Assumption",
                    language: "text",
                    content: `All HTML elements work similarly.`
                  }
                ]
              },
 
              {
                question: "Using <br> Instead of Proper Block Elements",
                answer:
                  "Stacking multiple br tags to create spacing is a bad practice. Use semantic block elements like p instead to properly separate content.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `Text<br><br><br>
More Text`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<p>Text</p>
 
<p>More Text</p>`
                  }
                ]
              },
 
              {
                question: "Using Many Empty Divs",
                answer:
                  "Creating empty div containers that serve no purpose adds unnecessary noise to the HTML structure. Only use containers when they serve a clear purpose.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div></div>
<div></div>
<div></div>`
                  }
                ]
              },
 
              {
                question: "Using Span for Large Layout Sections",
                answer:
                  "Span is an inline element designed for small pieces of text. Using it for large layout sections is semantically incorrect. Use block elements like div, section, or main instead.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<span>
Entire page content
</span>`
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
            content:
              "Many beginners think HTML is only about tags."
          },
 
          {
            type: "paragraph",
            content:
              "Professional developers think in terms of:"
          },
 
          {
            type: "list",
            items: [
              "Document Structure",
              "Layout Behavior",
              "Semantic Meaning",
              "Accessibility"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Block and inline elements sit at the center of all four."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding them helps you learn:"
          },
 
          {
            type: "list",
            items: [
              "CSS Layouts",
              "Flexbox",
              "Grid",
              "Responsive Design",
              "React Components",
              "Frontend Frameworks"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Much faster."
          }
 
        ]
      },
 
      {
        heading: "Modern HTML: Beyond Block and Inline",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML5 introduced semantic block elements such as:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<section>
<article>
<aside>
<footer>
<main>`
          },
 
          {
            type: "paragraph",
            content:
              "These provide meaning in addition to layout."
          },
 
          {
            type: "paragraph",
            content:
              "Modern websites rely heavily on these semantic elements."
          }
 
        ]
      },
 
      {
        heading: "Future Learning Connections",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Understanding block and inline elements prepares you for:"
          },
 
          {
            type: "list",
            items: [
              "CSS Selectors",
              "CSS Box Model",
              "Width and Height",
              "Margin and Padding",
              "Positioning",
              "Flexbox",
              "CSS Grid",
              "Responsive Design",
              "Bootstrap",
              "React Component Layouts"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Almost every CSS topic depends on this concept."
          }
 
        ]
      },
 
      {
        heading: "Key Takeaways",
 
        blocks: [
 
          {
            type: "list",
            items: [
              "HTML elements are generally categorized as block or inline elements.",
              "Block elements start on a new line and occupy full available width.",
              "Inline elements stay within surrounding content and only occupy necessary width.",
              "<div> is the most common block element.",
              "<span> is the most common inline element.",
              "Headings, paragraphs, sections, and lists are block elements.",
              "Links, bold text, italic text, and spans are inline elements.",
              "Browsers apply default display behaviors internally.",
              "CSS can change an element's display type.",
              "Understanding block and inline elements is essential before learning advanced CSS layouts such as Flexbox and Grid."
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
              "💡 The block vs inline distinction feels simple at first, but it quietly explains behavior that trips up developers even months into learning HTML. Why does setting a width on a span do nothing? Block vs inline. Why does adding padding to an inline element look strange? Block vs inline. Why does putting a div inside an anchor cause unexpected layout? Block vs inline. Rather than memorizing which elements belong to which category, try internalizing one question before placing any element: is this content meant to stand alone on its own line, or is it meant to live inside surrounding text? That single question almost always points you to the right element."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : HTML Div
============================= */
    "html-div": {
    title: "HTML Div",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As you learn HTML, you'll encounter many different tags such as headings, paragraphs, images, tables, lists, links, audio, and video. Each tag has a specific purpose."
          },
 
          {
            type: "paragraph",
            content:
              "However, there are situations where you need to group multiple elements together so that they can be organized, styled, manipulated with JavaScript, or arranged into layouts."
          },
 
          {
            type: "paragraph",
            content:
              "This is where the div element becomes extremely important."
          },
 
          {
            type: "paragraph",
            content:
              "The div tag is one of the most widely used HTML elements in web development. In fact, nearly every website on the internet uses hundreds or even thousands of div elements."
          },
 
          {
            type: "paragraph",
            content:
              "Modern websites, web applications, dashboards, e-commerce platforms, social media sites, and even React applications rely heavily on div containers for structuring content."
          },
 
          {
            type: "paragraph",
            content:
              "In this tutorial, you'll learn everything about HTML Divs, including their purpose, browser behavior, real-world applications, common mistakes, performance considerations, accessibility concerns, and modern best practices."
          }
 
        ]
      },
 
      {
        heading: "What is a Div?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The word div stands for:"
          },
 
          {
            type: "quote",
            content:
              "Division"
          },
 
          {
            type: "paragraph",
            content:
              "A div is a generic container element used to group other HTML elements together."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h2>About Us</h2>
    <p>Welcome to our website.</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "In this example, the div groups a heading and a paragraph into a single section."
          },
 
          {
            type: "paragraph",
            content:
              "The browser treats them as one logical container."
          }
 
        ]
      },
 
      {
        heading: "Why Was the Div Element Created?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a webpage without containers."
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Website</h1>
 
<p>Paragraph 1</p>
 
<p>Paragraph 2</p>
 
<img src="image.jpg">
 
<button>Read More</button>`
          },
 
          {
            type: "paragraph",
            content:
              "All elements exist independently."
          },
 
          {
            type: "paragraph",
            content:
              "Now suppose you want:"
          },
 
          {
            type: "list",
            items: [
              "A border around them",
              "A background color",
              "Equal spacing",
              "JavaScript interaction",
              "Responsive behavior"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without a container, managing these elements becomes difficult."
          },
 
          {
            type: "paragraph",
            content:
              "A div solves this problem by grouping them together."
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h1>Website</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Now the entire group can be styled or manipulated as a single unit."
          }
 
        ]
      },
 
      {
        heading: "Syntax of Div",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Basic syntax:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    Content goes here
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    Hello World
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "The opening tag starts the container. The closing tag ends the container. Everything inside belongs to the div."
          }
 
        ]
      },
 
      {
        heading: "Div is a Block-Level Element",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A div is a block-level element."
          },
 
          {
            type: "paragraph",
            content:
              "This means:"
          },
 
          {
            type: "list",
            items: [
              "It starts on a new line.",
              "It occupies the full available width.",
              "It pushes following elements onto a new line."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>First Div</div>
 
<div>Second Div</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content: [
              "First Div",
              "",
              "Second Div"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Each div appears on a separate line."
          }
 
        ]
      },
 
      {
        heading: "Characteristics of Div Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The div element:"
          },
 
          {
            type: "list",
            items: [
              "✔ Is a block element",
              "✔ Creates a container",
              "✔ Has no visual appearance by default",
              "✔ Has no semantic meaning",
              "✔ Can contain almost any HTML element",
              "✔ Can be styled using CSS",
              "✔ Can be accessed using JavaScript",
              "✔ Is widely used for layouts"
            ]
          }
 
        ]
      },
 
      {
        heading: "Div Has No Default Styling",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A div does not create borders, colors, spacing, or visual effects on its own."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>Hello</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Hello"
          },
 
          {
            type: "paragraph",
            content:
              "Nothing special appears. The div is present, but invisible."
          },
 
          {
            type: "note",
            content:
              "This is why beginners sometimes think divs are not working. The div exists in the page structure even though you cannot see it."
          }
 
        ]
      },
 
      {
        heading: "Div as a Container",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most common uses of a div is grouping content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <h2>Product Name</h2>
    <p>Price: $100</p>
    <button>Buy Now</button>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Here the div acts as a product card container."
          },
 
          {
            type: "paragraph",
            content:
              "Without the div, managing the entire card would be harder."
          }
 
        ]
      },
 
      {
        heading: "Div Inside Div",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Divs can contain other divs."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <div>
        Header
    </div>
 
    <div>
        Main Content
    </div>
 
    <div>
        Footer
    </div>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "This is called nesting."
          },
 
          {
            type: "paragraph",
            content:
              "Modern websites use deeply nested div structures."
          }
 
        ]
      },
 
      {
        heading: "Real-World Website Structure Using Divs",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A typical webpage may look like:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    Header
</div>
 
<div>
    Navigation
</div>
 
<div>
    Main Content
</div>
 
<div>
    Sidebar
</div>
 
<div>
    Footer
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Each section is contained inside its own div."
          },
 
          {
            type: "paragraph",
            content:
              "This allows developers to style and position them independently."
          }
 
        ]
      },
 
      {
        heading: "Using Div with CSS",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The real power of divs comes from CSS."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="box">
    Welcome
</div>`
          },
 
          {
            type: "code",
            language: "css",
            content: `.box {
    background-color: lightblue;
    padding: 20px;
}`
          },
 
          {
            type: "paragraph",
            content:
              "The div becomes a styled container. Almost every modern webpage relies on this concept."
          }
 
        ]
      },
 
      {
        heading: "Using Div with IDs",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A div can have an ID."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div id="header">
    My Website
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "IDs must be unique within a page."
          },
 
          {
            type: "paragraph",
            content:
              "Developers often use IDs when:"
          },
 
          {
            type: "list",
            items: [
              "Styling specific sections",
              "Accessing elements with JavaScript",
              "Creating page navigation"
            ]
          }
 
        ]
      },
 
      {
        heading: "Using Div with Classes",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Classes are more common than IDs."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="card">
    Product 1
</div>
 
<div class="card">
    Product 2
</div>
 
<div class="card">
    Product 3
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Multiple elements can share the same class. This makes styling easier."
          }
 
        ]
      },
 
      {
        heading: "Div and JavaScript",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JavaScript frequently interacts with divs."
          },
 
          {
            type: "paragraph",
            content:
              "Example uses:"
          },
 
          {
            type: "list",
            items: [
              "Show content",
              "Hide content",
              "Update content",
              "Create dynamic interfaces",
              "Build interactive dashboards"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Many web applications are essentially JavaScript continuously updating div elements."
          }
 
        ]
      },
 
      {
        heading: "Browser Internals: How Div Works",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When the browser reads:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    Hello World
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "It creates a DOM node."
          },
 
          {
            type: "paragraph",
            content:
              "Simplified DOM tree:"
          },
 
          {
            type: "tree",
            content: `Body
  └── Div
       └── Text`
          },
 
          {
            type: "paragraph",
            content:
              "The browser then:"
          },
 
          {
            type: "orderedList",
            items: [
              "Builds the DOM tree",
              "Applies CSS",
              "Calculates layout",
              "Paints pixels on screen"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The div becomes a rectangular box in the browser's layout engine. Even if invisible, the box still exists."
          }
 
        ]
      },
 
      {
        heading: "Div and the CSS Box Model",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every div follows the CSS Box Model."
          },
 
          {
            type: "paragraph",
            content:
              "A div consists of:"
          },
 
          {
            type: "list",
            items: [
              "Margin",
              "Border",
              "Padding",
              "Content"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Visual representation:"
          },
 
          {
            type: "tree",
            content: `+---------------------+
|       Margin        |
| +-----------------+ |
| |     Border      | |
| | +-------------+ | |
| | |   Padding   | | |
| | |  Content    | | |
| | +-------------+ | |
| +-----------------+ |
+---------------------+`
          },
 
          {
            type: "paragraph",
            content:
              "Understanding divs becomes much easier after learning the CSS Box Model."
          }
 
        ]
      },
 
      {
        heading: "Div vs Span",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners confuse div and span."
          },
 
          {
            type: "paragraph",
            content:
              "Div:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>Hello</div>`
          },
 
          {
            type: "list",
            items: [
              "Block element",
              "Starts on a new line",
              "Takes full width"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Span:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Hello</span>`
          },
 
          {
            type: "list",
            items: [
              "Inline element",
              "Stays in the current line",
              "Takes only required width"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Comparison:"
          },
 
          {
            type: "table",
            headers: [
              "Feature",
              "Div",
              "Span"
            ],
 
            rows: [
              ["Display Type", "Block", "Inline"],
              ["New Line", "Yes", "No"],
              ["Width", "Full Width", "Content Width"],
              ["Purpose", "Group Sections", "Group Text"]
            ]
          }
 
        ]
      },
 
      {
        heading: "Div vs Semantic HTML Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before HTML5, developers used divs for almost everything."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div id="header"></div>
 
<div id="nav"></div>
 
<div id="content"></div>
 
<div id="footer"></div>`
          },
 
          {
            type: "paragraph",
            content:
              "HTML5 introduced semantic elements:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header></header>
 
<nav></nav>
 
<main></main>
 
<footer></footer>`
          },
 
          {
            type: "paragraph",
            content:
              "These elements provide meaning."
          },
 
          {
            type: "paragraph",
            content:
              "Modern best practice:"
          },
 
          {
            type: "tip",
            content:
              "Use semantic elements whenever possible. Use divs when no semantic element fits the purpose."
          }
 
        ]
      },
 
      {
        heading: "Common Uses of Div",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Layout Containers:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="container">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Cards:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="card">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Navigation Menus:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="menu">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Sidebars:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="sidebar">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Dashboards:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="dashboard">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Popups:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="modal">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Forms:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="form-group">
</div>`
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
                question: "Using Div Everywhere",
                answer:
                  "Deeply nesting unnecessary divs, sometimes called Div Soup or Div Hell, makes code extremely difficult to read and maintain. Only create containers when they serve a real purpose.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>
    <div>
        <div>
            <div>
                Content
            </div>
        </div>
    </div>
</div>`
                  }
                ]
              },
 
              {
                question: "Ignoring Semantic Elements",
                answer:
                  "Using a div with an id when a semantic element already exists for that purpose is poor practice. Use header, nav, footer, and other semantic elements when they fit.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div id="header">
</div>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<header>
</header>`
                  }
                ]
              },
 
              {
                question: "Using Div Instead of Lists",
                answer:
                  "Using divs for list-like content strips the semantic meaning that ul and li provide. Choose elements according to their purpose.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`
                  }
                ]
              },
 
              {
                question: "Using Div for Buttons",
                answer:
                  "A div styled to look like a button lacks the keyboard support and accessibility behavior that the button element provides automatically.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>Submit</div>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<button>Submit</button>`
                  }
                ]
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Accessibility Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A div has:"
          },
 
          {
            type: "output",
            content:
              "No semantic meaning"
          },
 
          {
            type: "paragraph",
            content:
              "Screen readers treat it as a generic container."
          },
 
          {
            type: "paragraph",
            content:
              "Therefore, use semantic tags whenever possible."
          },
 
          {
            type: "comparison",
            leftTitle: "Good",
            leftItems: [
              "<nav>",
              "Semantic and accessible"
            ],
 
            rightTitle: "Bad",
            rightItems: [
              "<div class=\"nav\">",
              "No meaning for assistive tools"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Semantic elements improve:"
          },
 
          {
            type: "list",
            items: [
              "Accessibility",
              "SEO",
              "Maintainability"
            ]
          }
 
        ]
      },
 
      {
        heading: "Div in Modern Frontend Frameworks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Frameworks such as:"
          },
 
          {
            type: "list",
            items: [
              "React",
              "Angular",
              "Vue",
              "Next.js"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Heavily use divs."
          },
 
          {
            type: "paragraph",
            content:
              "Example React component:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="card">
    <h2>Product</h2>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "When building React applications, you'll often create dozens of div containers."
          },
 
          {
            type: "paragraph",
            content:
              "However, modern developers also use semantic elements whenever appropriate."
          }
 
        ]
      },
 
      {
        heading: "Performance Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every div becomes a DOM node."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
    <div>
        <div>
            <div>
                Content
            </div>
        </div>
    </div>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Creates multiple DOM nodes."
          },
 
          {
            type: "paragraph",
            content:
              "Excessive nesting:"
          },
 
          {
            type: "list",
            items: [
              "Increases DOM size",
              "Increases memory usage",
              "Makes debugging harder"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Large applications should keep DOM structures clean and meaningful."
          }
 
        ]
      },
 
      {
        heading: "Real-World Developer Notes",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional developers think of divs as:"
          },
 
          {
            type: "quote",
            content:
              "Building Blocks of Layout"
          },
 
          {
            type: "paragraph",
            content:
              "A webpage is often divided into:"
          },
 
          {
            type: "list",
            items: [
              "Header",
              "Navigation",
              "Main Content",
              "Sidebar",
              "Footer",
              "Cards",
              "Widgets",
              "Sections"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Each part is usually wrapped inside a div or semantic container."
          },
 
          {
            type: "paragraph",
            content:
              "Modern CSS technologies such as:"
          },
 
          {
            type: "list",
            items: [
              "Flexbox",
              "Grid",
              "Responsive Layouts"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Depend heavily on container elements like divs."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding divs thoroughly makes learning CSS significantly easier."
          }
 
        ]
      },
 
      {
        heading: "Future Learning Connections",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "After mastering divs, the next topics become much easier:"
          },
 
          {
            type: "list",
            items: [
              "CSS Selectors",
              "CSS Classes",
              "CSS IDs",
              "CSS Box Model",
              "Width and Height",
              "Margin and Padding",
              "Positioning",
              "Flexbox",
              "CSS Grid",
              "Responsive Design",
              "Bootstrap",
              "Tailwind CSS",
              "React Components"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Almost every frontend development concept builds upon the idea of containers, and the div element is the most fundamental container in HTML."
          }
 
        ]
      },
 
      {
        heading: "Key Takeaways",
 
        blocks: [
 
          {
            type: "list",
            items: [
              "<div> stands for Division.",
              "It is a generic block-level container element.",
              "Divs group related content together.",
              "They have no visual appearance by default.",
              "They are heavily used with CSS and JavaScript.",
              "Divs can contain almost any HTML element.",
              "IDs and classes are commonly attached to divs.",
              "Divs are essential for layouts, cards, forms, sidebars, and dashboards.",
              "Avoid excessive nesting and unnecessary divs.",
              "Prefer semantic HTML elements when appropriate.",
              "Modern web development relies heavily on div containers for organizing and structuring content."
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
              "💡 The div is often described as having \"no meaning,\" but that framing can be misleading for beginners. What it really means is that a div carries no content meaning — it doesn't describe whether its contents are navigation, an article, a form, or a footer. But it carries full layout meaning once CSS is applied. The skill professional developers build is knowing when a div is the right tool because nothing more specific exists for that container, versus when they're reaching for a div out of habit when header, nav, section, or aside would communicate intent far more clearly. A well-structured HTML file should have divs serving as layout helpers, not as a replacement for every semantic element."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : HTML Span
============================= */
    "html-span": {
    title: "HTML Span",
    readingTime: "21 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As you learn HTML, you'll encounter elements that structure entire sections of a webpage, such as headings, paragraphs, lists, tables, and divs. These elements usually create large blocks of content."
          },
 
          {
            type: "paragraph",
            content:
              "However, sometimes you don't want to affect an entire section. Instead, you only want to target a small piece of text within a sentence."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "list",
            items: [
              "Highlight a single word",
              "Change the color of a specific phrase",
              "Apply a custom font to part of a paragraph",
              "Add JavaScript functionality to a few characters",
              "Style a product price differently from surrounding text"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is where the span element becomes extremely useful."
          },
 
          {
            type: "paragraph",
            content:
              "The span tag is one of the most frequently used elements in modern web development. Although it appears simple, it plays a critical role in HTML, CSS, JavaScript, React, and frontend frameworks."
          },
 
          {
            type: "paragraph",
            content:
              "In this tutorial, you'll learn everything about HTML Span, including its purpose, browser behavior, styling techniques, accessibility considerations, performance implications, real-world usage, and best practices."
          }
 
        ]
      },
 
      {
        heading: "What is the Span Element?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The span element is a generic inline container used to group and target small portions of content."
          },
 
          {
            type: "paragraph",
            content:
              "Basic syntax:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Content</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Welcome to <span>HTML</span>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "In this example, the word \"HTML\" is wrapped inside a span element."
          },
 
          {
            type: "paragraph",
            content:
              "The browser treats it as a separate target that can later be styled or manipulated."
          }
 
        ]
      },
 
      {
        heading: "Why Was Span Created?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine you have a paragraph:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    HTML is the foundation of web development.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Now suppose you want only the word:"
          },
 
          {
            type: "output",
            content:
              "HTML"
          },
 
          {
            type: "paragraph",
            content:
              "To appear in red."
          },
 
          {
            type: "paragraph",
            content:
              "Without a span, you would have no way to specifically target that word."
          },
 
          {
            type: "paragraph",
            content:
              "Using span:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    <span>HTML</span> is the foundation of web development.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Now the word can be styled independently. This is the primary purpose of the span element."
          }
 
        ]
      },
 
      {
        heading: "What Does Span Mean?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Unlike tags such as:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<footer>
<nav>
<article>`
          },
 
          {
            type: "paragraph",
            content:
              "The span tag does not describe content. It has no semantic meaning."
          },
 
          {
            type: "paragraph",
            content:
              "The word \"span\" simply refers to:"
          },
 
          {
            type: "quote",
            content:
              "A small section or range of content"
          },
 
          {
            type: "paragraph",
            content:
              "Its job is to create a selectable container around inline content."
          }
 
        ]
      },
 
      {
        heading: "Span is an Inline Element",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The most important thing to understand:"
          },
 
          {
            type: "quote",
            content:
              "Span is an inline element."
          },
 
          {
            type: "paragraph",
            content:
              "This means:"
          },
 
          {
            type: "list",
            items: [
              "✔ It does not start on a new line",
              "✔ It occupies only the space its content needs",
              "✔ It flows naturally within surrounding text"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Learn <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Learn HTML, CSS, and JavaScript."
          },
 
          {
            type: "paragraph",
            content:
              "Everything remains on the same line."
          }
 
        ]
      },
 
      {
        heading: "Characteristics of Span",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The span element:"
          },
 
          {
            type: "list",
            items: [
              "✔ Is an inline element",
              "✔ Has no visual appearance by default",
              "✔ Has no semantic meaning",
              "✔ Occupies only required width",
              "✔ Is primarily used with CSS and JavaScript",
              "✔ Can contain text and inline elements",
              "✔ Is one of the most common utility elements in HTML"
            ]
          }
 
        ]
      },
 
      {
        heading: "Span Has No Default Styling",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Hello World</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Hello World"
          },
 
          {
            type: "paragraph",
            content:
              "Nothing special happens."
          },
 
          {
            type: "paragraph",
            content:
              "The span is present in the DOM, but the browser applies no visible styling."
          },
 
          {
            type: "note",
            content:
              "This often confuses beginners. A span becomes useful when combined with CSS or JavaScript."
          }
 
        ]
      },
 
      {
        heading: "Using Span with CSS",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most common uses of span is styling text."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Learn <span class="highlight">HTML</span>.
</p>`
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
            content:
              "Now only the word \"HTML\" appears in red. The rest of the paragraph remains unchanged."
          }
 
        ]
      },
 
      {
        heading: "Highlighting Important Text",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Sale ends on <span class="important">Friday</span>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Possible styling:"
          },
 
          {
            type: "code",
            language: "css",
            content: `.important {
    font-weight: bold;
}`
          },
 
          {
            type: "paragraph",
            content:
              "This allows emphasis without affecting surrounding content."
          }
 
        ]
      },
 
      {
        heading: "Multiple Spans in a Sentence",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Learn
    <span>HTML</span>,
    <span>CSS</span>,
    <span>JavaScript</span>,
    and
    <span>React</span>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Each span can be styled independently. This technique is widely used in modern websites."
          }
 
        ]
      },
 
      {
        heading: "Span vs Div",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "This is one of the most important HTML concepts."
          },
 
          {
            type: "paragraph",
            content:
              "Both elements are generic containers. However, they behave differently."
          },
 
          {
            type: "paragraph",
            content:
              "Div:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>Hello</div>`
          },
 
          {
            type: "list",
            items: [
              "Block-level element",
              "Starts on a new line",
              "Takes full width"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Span:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Hello</span>`
          },
 
          {
            type: "list",
            items: [
              "Inline element",
              "Remains in the current line",
              "Takes only required width"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Comparison:"
          },
 
          {
            type: "table",
            headers: [
              "Feature",
              "Div",
              "Span"
            ],
 
            rows: [
              ["Display Type", "Block", "Inline"],
              ["New Line", "Yes", "No"],
              ["Width", "Full Width", "Content Width"],
              ["Layout Usage", "Sections & Containers", "Text & Small Content"],
              ["Common Purpose", "Page Structure", "Text Styling"]
            ]
          }
 
        ]
      },
 
      {
        heading: "Browser Internals: How Span Works",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When the browser encounters:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Learn <span>HTML</span>.
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "It creates a DOM structure:"
          },
 
          {
            type: "tree",
            content: `Paragraph
  ├── Text: Learn
  ├── Span
  │     └── HTML
  └── Text: .`
          },
 
          {
            type: "paragraph",
            content:
              "The span becomes its own DOM node."
          },
 
          {
            type: "paragraph",
            content:
              "Because it is an inline element, the browser places it within the normal text flow."
          }
 
        ]
      },
 
      {
        heading: "Span and the Rendering Engine",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Browsers apply default CSS rules internally."
          },
 
          {
            type: "paragraph",
            content:
              "Simplified version:"
          },
 
          {
            type: "code",
            language: "css",
            content: `span {
    display: inline;
}`
          },
 
          {
            type: "paragraph",
            content:
              "This built-in rule is why span behaves differently from div."
          },
 
          {
            type: "paragraph",
            content:
              "The browser does not create a new block box. Instead, it creates an inline box inside the line of text."
          }
 
        ]
      },
 
      {
        heading: "Using Span with JavaScript",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Span elements are frequently used for dynamic updates."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Visitors:
    <span id="counter">0</span>
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "JavaScript can later update the number."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Live visitor count",
              "Notifications",
              "Stock prices",
              "Shopping cart totals",
              "Real-time scores"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is extremely common in web applications."
          }
 
        ]
      },
 
      {
        heading: "Span for Syntax Highlighting",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Code editors and documentation websites often use spans."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="keyword">const</span>
<span class="variable">name</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Each span receives different styling. This is how syntax highlighting works in many code editors."
          }
 
        ]
      },
 
      {
        heading: "Span in Navigation Menus",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<a href="#">
    Home <span>New</span>
</a>`
          },
 
          {
            type: "paragraph",
            content:
              "The \"New\" label can be styled differently. This is frequently used in:"
          },
 
          {
            type: "list",
            items: [
              "Menus",
              "Dashboards",
              "Admin panels",
              "E-commerce websites"
            ]
          }
 
        ]
      },
 
      {
        heading: "Span in Product Cards",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>
    Price:
    <span class="price">$99</span>
</p>`
          },
 
          {
            type: "paragraph",
            content:
              "The price can receive:"
          },
 
          {
            type: "list",
            items: [
              "Different color",
              "Larger font",
              "Bold styling"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without affecting surrounding text."
          }
 
        ]
      },
 
      {
        heading: "Span and Accessibility",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A span has:"
          },
 
          {
            type: "output",
            content:
              "No semantic meaning"
          },
 
          {
            type: "paragraph",
            content:
              "Screen readers treat it as a generic inline container."
          },
 
          {
            type: "paragraph",
            content:
              "Therefore, use span only when you need a container. Do not use it when a semantic element exists."
          },
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Important Warning</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Better:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<strong>Important Warning</strong>`
          },
 
          {
            type: "paragraph",
            content:
              "The second version communicates meaning."
          }
 
        ]
      },
 
      {
        heading: "Span vs Strong",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Developers often confuse these."
          },
 
          {
            type: "paragraph",
            content:
              "Span:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Important</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Meaning:"
          },
 
          {
            type: "output",
            content:
              "No semantic meaning"
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Strong:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<strong>Important</strong>`
          },
 
          {
            type: "paragraph",
            content:
              "Meaning:"
          },
 
          {
            type: "output",
            content:
              "This content is important."
          },
 
          {
            type: "paragraph",
            content:
              "Screen readers understand the significance."
          },
 
          {
            type: "paragraph",
            content:
              "Always choose semantic elements when possible."
          }
 
        ]
      },
 
      {
        heading: "Span vs Em",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Span:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Text</span>`
          },
 
          {
            type: "paragraph",
            content:
              "No meaning."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Em:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<em>Text</em>`
          },
 
          {
            type: "paragraph",
            content:
              "Indicates emphasis. The browser and accessibility tools understand the intent."
          }
 
        ]
      },
 
      {
        heading: "Common Uses of Span",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Text Highlighting:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="highlight">`
          },
 
          {
            type: "paragraph",
            content:
              "Colored Words:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="red">`
          },
 
          {
            type: "paragraph",
            content:
              "Price Display:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="price">`
          },
 
          {
            type: "paragraph",
            content:
              "Notification Counters:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="badge">`
          },
 
          {
            type: "paragraph",
            content:
              "Status Indicators:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="online">`
          },
 
          {
            type: "paragraph",
            content:
              "Icons:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="icon">`
          },
 
          {
            type: "paragraph",
            content:
              "Dynamic Content:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span id="score">`
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
                question: "Using Span for Layouts",
                answer:
                  "Span is designed for small inline content, not for large page sections. Use div, section, or main for layout containers.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<span>
    Entire Website Content
</span>`
                  }
                ]
              },
 
              {
                question: "Using Span Instead of Semantic Elements",
                answer:
                  "When a semantic tag already exists for the content's purpose, use it instead of span. Semantic tags improve accessibility and readability.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<span>Important Note</span>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<strong>Important Note</strong>`
                  }
                ]
              },
 
              {
                question: "Nesting Excessive Spans",
                answer:
                  "Deeply nesting spans creates unnecessary complexity and bloated markup. Keep HTML simple and flat wherever possible.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<span>
    <span>
        <span>
            Text
        </span>
    </span>
</span>`
                  }
                ]
              },
 
              {
                question: "Styling Everything with Span",
                answer:
                  "Many beginners wrap every word inside spans, creating bloated HTML. Use spans only when they are genuinely needed for targeting or styling."
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
            content:
              "Professional developers use span primarily for:"
          },
 
          {
            type: "list",
            items: [
              "Styling specific words",
              "Dynamic updates",
              "Labels and badges",
              "Syntax highlighting",
              "Inline icons",
              "Data formatting"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "A span should generally solve a specific problem. If a semantic element already exists, use that instead."
          },
 
          {
            type: "paragraph",
            content:
              "Modern frontend frameworks such as React, Vue, Angular, and Next.js use spans extensively because they allow precise control over small pieces of UI."
          }
 
        ]
      },
 
      {
        heading: "Performance Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every span becomes a DOM node."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span>Hello</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Creates one additional node. A few spans are harmless."
          },
 
          {
            type: "paragraph",
            content:
              "However, thousands of unnecessary spans increase:"
          },
 
          {
            type: "list",
            items: [
              "DOM size",
              "Memory usage",
              "Rendering complexity"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Large applications should avoid unnecessary markup."
          }
 
        ]
      },
 
      {
        heading: "Span in Modern Frameworks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<span class="username">
    John
</span>`
          },
 
          {
            type: "paragraph",
            content:
              "Common uses:"
          },
 
          {
            type: "list",
            items: [
              "Usernames",
              "Status indicators",
              "Counters",
              "Dynamic values",
              "Tags",
              "Labels"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Many React components contain spans for small UI elements."
          }
 
        ]
      },
 
      {
        heading: "Future Learning Connections",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Understanding span will help you learn:"
          },
 
          {
            type: "list",
            items: [
              "CSS Selectors",
              "CSS Classes",
              "CSS Colors",
              "Typography",
              "Inline Styling",
              "JavaScript DOM Manipulation",
              "Flexbox",
              "Grid",
              "React Components",
              "Dynamic UI Design"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The span element becomes increasingly important as websites become more interactive."
          }
 
        ]
      },
 
      {
        heading: "Key Takeaways",
 
        blocks: [
 
          {
            type: "list",
            items: [
              "<span> is a generic inline container element.",
              "It has no visual appearance by default.",
              "It has no semantic meaning.",
              "Span occupies only the width its content requires.",
              "It does not start on a new line.",
              "It is commonly used with CSS and JavaScript.",
              "Span is ideal for styling individual words or phrases.",
              "It is the inline counterpart of the <div> element.",
              "Avoid using span when semantic HTML elements are more appropriate.",
              "Modern web applications use spans extensively for badges, counters, labels, syntax highlighting, and dynamic content."
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
              "💡 The span and div share the same fundamental identity — they are hooks, not content. They describe nothing about what's inside them, which is precisely their value: they give you a place to attach CSS classes and JavaScript without committing to any semantic interpretation. The professional habit is to reach for a semantic element first (strong, em, mark, code, abbr) and only fall back to span when none of them fit. If you find yourself writing span for everything, it usually means you haven't yet explored how much semantic work the other inline elements can already do for you."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : HTML Classes
============================= */
    "html-classes": {
    title: "HTML Classes",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "As websites grow larger, managing the appearance and behavior of hundreds or thousands of HTML elements becomes challenging. Imagine having a webpage containing dozens of buttons, cards, headings, navigation links, forms, and sections. Applying styles individually to every element would be inefficient and difficult to maintain."
          },

          {
            type: "paragraph",
            content: "This is where the class attribute becomes one of the most important features in HTML."
          },

          {
            type: "paragraph",
            content: "The class attribute allows developers to group elements together under a common name so that they can be styled with CSS, selected with JavaScript, and organized more effectively."
          },

          {
            type: "paragraph",
            content: "In modern web development, classes are everywhere. Frameworks like Bootstrap, Tailwind CSS, React, Angular, Vue, and Next.js rely heavily on classes for styling and component design."
          },

          {
            type: "paragraph",
            content: "Understanding HTML classes properly is essential because they form the bridge between HTML structure, CSS styling, and JavaScript functionality."
          }

        ]
      },

      {
        heading: "What is an HTML Class?",

        blocks: [

          {
            type: "paragraph",
            content: "An HTML class is a global attribute used to assign one or more names to an element."
          },

          {
            type: "paragraph",
            content: "Syntax:"
          },

          {
            type: "code",
            language: "html",
            content: `<tag class="classname">
    Content
</tag>`
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="important">
    This is an important paragraph.
</p>`
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "output",
            content: [
              "important"
            ]
          },

          {
            type: "paragraph",
            content: "is the class name assigned to the paragraph."
          },

          {
            type: "paragraph",
            content: "The browser itself does not apply any special styling. The class simply acts as an identifier that CSS and JavaScript can use later."
          }

        ]
      },

      {
        heading: "Why Do We Need Classes?",

        blocks: [

          {
            type: "paragraph",
            content: "Consider a webpage with multiple buttons:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>Login</button>
<button>Register</button>
<button>Contact</button>`
          },

          {
            type: "paragraph",
            content: "Suppose you want all buttons to have:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blue background",
              "White text",
              "Rounded corners"
            ]
          },

          {
            type: "paragraph",
            content: "Instead of styling each button separately, you can assign the same class:"
          },

          {
            type: "code",
            language: "html",
            content: `<button class="btn">Login</button>
<button class="btn">Register</button>
<button class="btn">Contact</button>`
          },

          {
            type: "paragraph",
            content: "Now one CSS rule can style all buttons simultaneously."
          },

          {
            type: "paragraph",
            content: "This is the primary purpose of classes."
          }

        ]
      },

      {
        heading: "How Classes Work",

        blocks: [

          {
            type: "paragraph",
            content: "Think of a class as a label."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 class="heading">Welcome</h1>

<p class="heading">
    Introduction paragraph
</p>`
          },

          {
            type: "paragraph",
            content: "Both elements share the same class."
          },

          {
            type: "paragraph",
            content: "A CSS rule targeting that class affects both elements."
          },

          {
            type: "paragraph",
            content: "Classes allow multiple elements to belong to the same group."
          }

        ]
      },

      {
        heading: "The Class Attribute is Global",

        blocks: [

          {
            type: "paragraph",
            content: "The class attribute is a global attribute."
          },

          {
            type: "paragraph",
            content: "This means it can be used on almost every HTML element."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="container"></div>

<p class="text"></p>

<img class="profile-image">

<table class="student-table"></table>

<button class="primary-btn"></button>`
          },

          {
            type: "paragraph",
            content: "Classes are not limited to any specific tag."
          }

        ]
      },

      {
        heading: "Using Classes with CSS",

        blocks: [

          {
            type: "paragraph",
            content: "The most common use of classes is CSS styling."
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="highlight">
    HTML is awesome.
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
    font-weight: bold;
}`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "paragraph",
            content: "The paragraph appears red and bold."
          },

          {
            type: "paragraph",
            content: "The dot (.) before the class name tells CSS that it is targeting a class selector."
          }

        ]
      },

      {
        heading: "Class Selectors in CSS",

        blocks: [

          {
            type: "paragraph",
            content: "Syntax:"
          },

          {
            type: "code",
            language: "css",
            content: `.classname {
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
            content: `.card {
    border: 1px solid black;
}`
          },

          {
            type: "paragraph",
            content: "This targets all elements having:"
          },

          {
            type: "code",
            language: "html",
            content: `class="card"`
          }

        ]
      },

      {
        heading: "Applying One Class to Multiple Elements",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 class="red-text">Heading</h1>

<p class="red-text">Paragraph</p>

<span class="red-text">Span Text</span>`
          },

          {
            type: "paragraph",
            content: "CSS:"
          },

          {
            type: "code",
            language: "css",
            content: `.red-text {
    color: red;
}`
          },

          {
            type: "paragraph",
            content: "All elements become red."
          },

          {
            type: "paragraph",
            content: "This demonstrates one of the greatest advantages of classes: reusability."
          }

        ]
      },

      {
        heading: "Multiple Classes on a Single Element",

        blocks: [

          {
            type: "paragraph",
            content: "An element can have multiple classes."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button class="btn primary">
    Submit
</button>`
          },

          {
            type: "paragraph",
            content: "The button belongs to:"
          },

          {
            type: "output",
            content: [
              "btn",
              "primary"
            ]
          },

          {
            type: "paragraph",
            content: "Both classes can contribute styles."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `.btn {
    padding: 10px;
}

.primary {
    background-color: blue;
}`
          },

          {
            type: "paragraph",
            content: "The button receives both styles."
          },

          {
            type: "paragraph",
            content: "This technique is extremely common in professional development."
          }

        ]
      },

      {
        heading: "How Multiple Classes Improve Reusability",

        blocks: [

          {
            type: "paragraph",
            content: "Instead of creating:"
          },

          {
            type: "output",
            content: [
              ".login-button",
              ".register-button",
              ".contact-button"
            ]
          },

          {
            type: "paragraph",
            content: "Developers often create reusable classes:"
          },

          {
            type: "output",
            content: [
              ".btn",
              ".primary",
              ".large",
              ".rounded"
            ]
          },

          {
            type: "paragraph",
            content: "Then combine them:"
          },

          {
            type: "code",
            language: "html",
            content: `<button class="btn primary large rounded">
    Login
</button>`
          },

          {
            type: "paragraph",
            content: "This reduces duplicate code significantly."
          }

        ]
      },

      {
        heading: "Naming Classes",

        blocks: [

          {
            type: "paragraph",
            content: "Class names should be meaningful."
          },

          {
            type: "paragraph",
            content: "Good examples:"
          },

          {
            type: "output",
            content: [
              "class=\"header\"",
              "class=\"navbar\"",
              "class=\"product-card\"",
              "class=\"user-profile\"",
              "class=\"footer\""
            ]
          },

          {
            type: "paragraph",
            content: "Poor examples:"
          },

          {
            type: "output",
            content: [
              "class=\"box1\"",
              "class=\"item123\"",
              "class=\"abc\""
            ]
          },

          {
            type: "paragraph",
            content: "Meaningful names make projects easier to maintain."
          }

        ]
      },

      {
        heading: "Rules for Class Names",

        blocks: [

          {
            type: "paragraph",
            content: "Class names:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Can contain letters",
              "✔ Can contain numbers",
              "✔ Can contain hyphens",
              "✔ Can contain underscores"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "class=\"main-header\"",
              "",
              "class=\"product_card\"",
              "",
              "class=\"card1\""
            ]
          },

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "output",
            content: [
              "class=\"123header\""
            ]
          },

          {
            type: "paragraph",
            content: "Starting with numbers can create issues in CSS selectors."
          }

        ]
      },

      {
        heading: "Case Sensitivity",

        blocks: [

          {
            type: "paragraph",
            content: "HTML class names are case-sensitive when used in CSS and JavaScript."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="Title">`
          },

          {
            type: "paragraph",
            content: "is different from:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="title">`
          },

          {
            type: "paragraph",
            content: "Best practice:"
          },

          {
            type: "paragraph",
            content: "Use lowercase names."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `class="main-content"`
          }

        ]
      },

      {
        heading: "Browser Internals: How Classes Work",

        blocks: [

          {
            type: "paragraph",
            content: "When the browser parses HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="important">
    Hello
</p>`
          },

          {
            type: "paragraph",
            content: "it stores the class information in the DOM."
          },

          {
            type: "paragraph",
            content: "Internally:"
          },

          {
            type: "tree",
            content: `Paragraph Element
 ├── Class: important
 └── Text: Hello`
          },

          {
            type: "paragraph",
            content: "When CSS loads:"
          },

          {
            type: "code",
            language: "css",
            content: `.important {
    color: red;
}`
          },

          {
            type: "paragraph",
            content: "the browser matches the selector with the DOM node."
          },

          {
            type: "paragraph",
            content: "This process is called:"
          },

          {
            type: "output",
            content: [
              "Selector Matching"
            ]
          },

          {
            type: "paragraph",
            content: "After matching, styles are applied."
          }

        ]
      },

      {
        heading: "How CSS Finds Class Selectors",

        blocks: [

          {
            type: "paragraph",
            content: "Suppose:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="card"></div>`
          },

          {
            type: "paragraph",
            content: "and:"
          },

          {
            type: "code",
            language: "css",
            content: `.card {
    border: 1px solid black;
}`
          },

          {
            type: "paragraph",
            content: "The browser:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Reads the HTML",
              "Creates DOM nodes",
              "Reads CSS",
              "Finds .card",
              "Searches for matching class names",
              "Applies styles"
            ]
          },

          {
            type: "paragraph",
            content: "This happens automatically whenever a page loads."
          }

        ]
      },

      {
        heading: "Using Classes with JavaScript",

        blocks: [

          {
            type: "paragraph",
            content: "Classes are heavily used in JavaScript."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button class="submit-btn">
    Submit
</button>`
          },

          {
            type: "paragraph",
            content: "JavaScript can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Find elements",
              "Modify content",
              "Add styles",
              "Attach events",
              "Create animations"
            ]
          },

          {
            type: "paragraph",
            content: "Developers often use classes to select groups of elements."
          }

        ]
      },

      {
        heading: "Dynamic Classes",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites frequently add or remove classes dynamically."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "paragraph",
            content: "When a user clicks a button:"
          },

          {
            type: "output",
            content: [
              "Menu Closed"
            ]
          },

          {
            type: "paragraph",
            content: "might become:"
          },

          {
            type: "output",
            content: [
              "Menu Open"
            ]
          },

          {
            type: "paragraph",
            content: "by adding another class."
          },

          {
            type: "paragraph",
            content: "This technique powers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Dropdown menus",
              "Modals",
              "Accordions",
              "Tabs",
              "Navigation drawers",
              "Dark mode"
            ]
          },

          {
            type: "paragraph",
            content: "Almost every modern website uses dynamic classes."
          }

        ]
      },

      {
        heading: "Classes in Responsive Design",

        blocks: [

          {
            type: "paragraph",
            content: "Classes help create responsive layouts."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="mobile-menu">`
          },

          {
            type: "paragraph",
            content: "CSS may display it differently on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Phones",
              "Tablets",
              "Laptops",
              "Desktop screens"
            ]
          },

          {
            type: "paragraph",
            content: "This is one reason classes are central to modern CSS frameworks."
          }

        ]
      },

      {
        heading: "Classes in CSS Frameworks",

        blocks: [

          {
            type: "paragraph",
            content: "Frameworks use classes extensively."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Bootstrap"
          },

          {
            type: "output",
            content: [
              "class=\"container\"",
              "class=\"row\"",
              "class=\"btn\"",
              "class=\"card\""
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Tailwind CSS"
          },

          {
            type: "output",
            content: [
              "class=\"flex\"",
              "class=\"text-center\"",
              "class=\"bg-blue-500\""
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Without understanding classes, modern CSS frameworks become difficult to learn."
          }

        ]
      },

      {
        heading: "Classes in React",

        blocks: [

          {
            type: "paragraph",
            content: "React uses classes extensively for styling."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="card">`
          },

          {
            type: "paragraph",
            content: "or in JSX:"
          },

          {
            type: "code",
            language: "jsx",
            content: `<div className="card">`
          },

          {
            type: "paragraph",
            content: "Classes help React components maintain reusable styles."
          }

        ]
      },

      {
        heading: "Class vs ID",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most important concepts in HTML."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Class"
          },

          {
            type: "code",
            language: "html",
            content: `class="menu"`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Reusable",
              "Can be assigned to many elements",
              "Used for grouping"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="menu"></p>

<div class="menu"></div>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ID"
          },

          {
            type: "code",
            language: "html",
            content: `id="header"`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Must be unique",
              "Identifies a single element"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<header id="main-header"></header>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Comparison:"
          },

          {
            type: "table",
            headers: [
              "Feature",
              "Class",
              "ID"
            ],

            rows: [
              ["Reusable", "Yes", "No"],
              ["Multiple Elements", "Yes", "No"],
              ["Unique", "No", "Yes"],
              ["CSS Selector", ".classname", "#idname"],
              ["Common Use", "Styling Groups", "Identifying One Element"]
            ]
          }

        ]
      },

      {
        heading: "Common Real-World Class Names",

        blocks: [

          {
            type: "paragraph",
            content: "Navigation:"
          },

          {
            type: "output",
            content: [
              "class=\"navbar\""
            ]
          },

          {
            type: "paragraph",
            content: "Buttons:"
          },

          {
            type: "output",
            content: [
              "class=\"btn\""
            ]
          },

          {
            type: "paragraph",
            content: "Cards:"
          },

          {
            type: "output",
            content: [
              "class=\"card\""
            ]
          },

          {
            type: "paragraph",
            content: "Containers:"
          },

          {
            type: "output",
            content: [
              "class=\"container\""
            ]
          },

          {
            type: "paragraph",
            content: "Forms:"
          },

          {
            type: "output",
            content: [
              "class=\"form-group\""
            ]
          },

          {
            type: "paragraph",
            content: "Images:"
          },

          {
            type: "output",
            content: [
              "class=\"profile-image\""
            ]
          },

          {
            type: "paragraph",
            content: "Sections:"
          },

          {
            type: "output",
            content: [
              "class=\"hero-section\""
            ]
          },

          {
            type: "paragraph",
            content: "Footers:"
          },

          {
            type: "output",
            content: [
              "class=\"footer\""
            ]
          },

          {
            type: "paragraph",
            content: "These naming patterns appear across thousands of professional projects."
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
                question: "Using IDs Everywhere",
                answer: "If elements share behavior or styling, classes are usually better.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `id="button1"\nid="button2"\nid="button3"`
                  }
                ]
              },
              {
                question: "Giving Random Names",
                answer: "Meaningful names improve maintainability.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `class="abc"\nclass="xyz"\nclass="test123"`
                  }
                ]
              },
              {
                question: "Creating Too Many Classes",
                answer: "Excessive utility classes can clutter HTML. Use a balanced approach.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `class="red-text"\nclass="large-text"\nclass="bold-text"\nclass="left-text"`
                  }
                ]
              },
              {
                question: "Using Spaces Incorrectly",
                answer: "Classes must be separated by spaces.",
                examples: [
                  {
                    title: "Correct",
                    language: "html",
                    content: `class="btn primary"`
                  },
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `class="btn,primary"`
                  }
                ]
              },
              {
                question: "Using Duplicate Class Names for Different Purposes",
                answer: "This creates confusion. Use descriptive names.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `class="box"`
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
            content: "Professional developers often spend considerable time planning class naming conventions."
          },

          {
            type: "paragraph",
            content: "Popular methodologies include:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "BEM"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Block",
              "Element",
              "Modifier"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "card",
              "card__title",
              "card__button",
              "card--active"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Utility-Based Classes"
          },

          {
            type: "paragraph",
            content: "Used heavily in Tailwind CSS."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "text-center",
              "font-bold",
              "flex"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Component-Based Naming"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "user-card",
              "product-card",
              "profile-card"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Large projects rely on naming consistency for maintainability."
          }

        ]
      },

      {
        heading: "Performance Considerations",

        blocks: [

          {
            type: "paragraph",
            content: "Classes are lightweight."
          },

          {
            type: "paragraph",
            content: "However:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="box"></div>`
          },

          {
            type: "paragraph",
            content: "creates metadata that browsers must track."
          },

          {
            type: "paragraph",
            content: "Using thousands of unnecessary classes can increase complexity."
          },

          {
            type: "paragraph",
            content: "Modern browsers handle classes efficiently, but clean HTML remains important."
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "Understanding classes is essential before learning:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Selectors",
              "CSS Styling",
              "Flexbox",
              "CSS Grid",
              "Responsive Design",
              "JavaScript DOM Manipulation",
              "Bootstrap",
              "Tailwind CSS",
              "React",
              "Vue",
              "Angular",
              "Next.js"
            ]
          },

          {
            type: "paragraph",
            content: "Classes form one of the core foundations of frontend development."
          }

        ]
      },

      {
        heading: "Key Takeaways",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "The class attribute assigns one or more names to an HTML element.",
              "Classes are primarily used for CSS styling and JavaScript selection.",
              "Multiple elements can share the same class.",
              "An element can have multiple classes.",
              "CSS targets classes using the dot (.) selector.",
              "Classes are reusable, unlike IDs.",
              "Meaningful naming improves project maintainability.",
              "Classes are fundamental to modern web development frameworks.",
              "Responsive design, animations, interactivity, and component styling heavily depend on classes.",
              "Mastering classes is essential before moving deeper into CSS and JavaScript."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A common point of confusion for beginners transitioning to JavaScript frameworks like React is the use of `className` instead of `class`. Because `class` is a reserved keyword in JavaScript (used to create JavaScript classes), JSX uses `className` to apply CSS classes to HTML elements. Under the hood, React compiles this back into standard HTML `class` attributes before sending it to the browser."
          }

        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : HTML ID
============================= */
    "html-id": {
    title: "HTML ID",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "As websites become larger and more interactive, developers often need a way to uniquely identify specific elements on a webpage. For example:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "A navigation link may need to jump to a particular section.",
              "JavaScript may need to target one specific button.",
              "CSS may need to style a unique element differently.",
              "Accessibility features may need to connect labels with form inputs."
            ]
          },

          {
            type: "paragraph",
            content: "This is where the HTML id attribute becomes important."
          },

          {
            type: "paragraph",
            content: "The id attribute provides a unique identifier for an HTML element. Unlike classes, which can be shared by multiple elements, an ID is intended to identify a single, unique element within a webpage."
          },

          {
            type: "paragraph",
            content: "In modern web development, IDs are heavily used for navigation, JavaScript interactions, accessibility, form handling, and dynamic user interfaces."
          },

          {
            type: "paragraph",
            content: "Understanding IDs correctly is important because they form a bridge between HTML structure, CSS styling, browser navigation, JavaScript functionality, and accessibility systems."
          }

        ]
      },

      {
        heading: "What is an HTML ID?",

        blocks: [

          {
            type: "paragraph",
            content: "The id attribute is a global HTML attribute used to assign a unique identifier to an element."
          },

          {
            type: "paragraph",
            content: "Basic syntax:"
          },

          {
            type: "code",
            language: "html",
            content: `<tag id="uniqueName">
    Content
</tag>`
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="main-heading">
    Welcome to My Website
</h1>`
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "output",
            content: [
              "main-heading"
            ]
          },

          {
            type: "paragraph",
            content: "is the unique identifier assigned to the heading."
          },

          {
            type: "paragraph",
            content: "The browser stores this identifier and allows CSS, JavaScript, hyperlinks, and accessibility tools to reference it."
          }

        ]
      },

      {
        heading: "Why Do We Need IDs?",

        blocks: [

          {
            type: "paragraph",
            content: "Imagine a webpage containing multiple sections:"
          },

          {
            type: "code",
            language: "html",
            content: `<h2>About</h2>

<h2>Services</h2>

<h2>Contact</h2>`
          },

          {
            type: "paragraph",
            content: "Suppose you want a navigation link to jump directly to the Contact section."
          },

          {
            type: "paragraph",
            content: "Without an ID, the browser would not know exactly where to navigate."
          },

          {
            type: "paragraph",
            content: "Using an ID:"
          },

          {
            type: "code",
            language: "html",
            content: `<h2 id="contact">
    Contact
</h2>`
          },

          {
            type: "paragraph",
            content: "Now a link can directly point to that section."
          },

          {
            type: "paragraph",
            content: "This is one of the most common uses of IDs."
          }

        ]
      },

      {
        heading: "The Uniqueness Rule",

        blocks: [

          {
            type: "paragraph",
            content: "The most important rule:"
          },

          {
            type: "quote",
            content: "Every ID should be unique within a webpage."
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="header">Website Title</h1>

<section id="about"></section>

<footer id="footer"></footer>`
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="title">Heading 1</h1>

<h2 id="title">Heading 2</h2>`
          },

          {
            type: "paragraph",
            content: "Using the same ID on multiple elements can cause unexpected behavior in CSS, JavaScript, and browser navigation."
          }

        ]
      },

      {
        heading: "The ID Attribute is Global",

        blocks: [

          {
            type: "paragraph",
            content: "The id attribute is a global attribute."
          },

          {
            type: "paragraph",
            content: "This means it can be used on almost every HTML element."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "code",
            language: "html",
            content: `<div id="container"></div>

<p id="description"></p>

<img id="logo">

<button id="submit-btn"></button>

<table id="student-table"></table>`
          },

          {
            type: "paragraph",
            content: "IDs are not limited to specific tags."
          }

        ]
      },

      {
        heading: "Using IDs with CSS",

        blocks: [

          {
            type: "paragraph",
            content: "IDs can be targeted directly in CSS."
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="main-title">
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
            content: `#main-title {
    color: blue;
}`
          },

          {
            type: "paragraph",
            content: "Notice the hash symbol:"
          },

          {
            type: "output",
            content: [
              "#"
            ]
          },

          {
            type: "paragraph",
            content: "This tells CSS that it is targeting an ID selector."
          },

          {
            type: "paragraph",
            content: "The heading becomes blue."
          }

        ]
      },

      {
        heading: "ID Selectors in CSS",

        blocks: [

          {
            type: "paragraph",
            content: "Syntax:"
          },

          {
            type: "code",
            language: "css",
            content: `#idname {
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
            content: `#banner {
    background-color: black;
}`
          },

          {
            type: "paragraph",
            content: "This rule targets:"
          },

          {
            type: "code",
            language: "html",
            content: `<div id="banner"></div>`
          },

          {
            type: "paragraph",
            content: "and only that specific element."
          }

        ]
      },

      {
        heading: "Using IDs with JavaScript",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most powerful uses of IDs is JavaScript interaction."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button id="login-btn">
    Login
</button>`
          },

          {
            type: "paragraph",
            content: "JavaScript can instantly locate this button using its unique ID."
          },

          {
            type: "paragraph",
            content: "Common uses include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Handling button clicks",
              "Showing popups",
              "Updating content",
              "Form validation",
              "Creating animations",
              "Dynamic UI updates"
            ]
          },

          {
            type: "paragraph",
            content: "Because IDs are unique, JavaScript can find elements very efficiently."
          }

        ]
      },

      {
        heading: "Browser Internals: How IDs Work",

        blocks: [

          {
            type: "paragraph",
            content: "When the browser parses:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="welcome">
    Hello
</h1>`
          },

          {
            type: "paragraph",
            content: "it stores information in the DOM."
          },

          {
            type: "paragraph",
            content: "Internally:"
          },

          {
            type: "tree",
            content: `Heading Element
 ├── ID: welcome
 └── Text: Hello`
          },

          {
            type: "paragraph",
            content: "The browser also creates an internal lookup system for IDs."
          },

          {
            type: "paragraph",
            content: "This allows instant access when CSS, JavaScript, or hyperlinks reference the ID."
          },

          {
            type: "paragraph",
            content: "Unlike class selectors, browsers often optimize ID lookups because they are expected to be unique."
          }

        ]
      },

      {
        heading: "IDs and Fragment Navigation",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most useful features of IDs is page navigation."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h2 id="contact">
    Contact Us
</h2>`
          },

          {
            type: "paragraph",
            content: "A link can point directly to it:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#contact">
    Go to Contact Section
</a>`
          },

          {
            type: "paragraph",
            content: "When clicked:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "The browser searches for the ID.",
              "Scrolls to the matching element.",
              "Highlights it as the current location."
            ]
          },

          {
            type: "paragraph",
            content: "This feature is called:"
          },

          {
            type: "output",
            content: [
              "Fragment Navigation"
            ]
          },

          {
            type: "paragraph",
            content: "or"
          },

          {
            type: "output",
            content: [
              "Anchor Navigation"
            ]
          }

        ]
      },

      {
        heading: "How Browser URLs Use IDs",

        blocks: [

          {
            type: "paragraph",
            content: "Consider:"
          },

          {
            type: "output",
            content: [
              "https://example.com/page.html#contact"
            ]
          },

          {
            type: "paragraph",
            content: "The browser:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Loads the page.",
              "Searches for: id=\"contact\"",
              "Automatically scrolls to that section."
            ]
          },

          {
            type: "paragraph",
            content: "This mechanism powers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation websites",
              "Table of contents links",
              "FAQ pages",
              "Blog article navigation",
              "Single-page websites"
            ]
          }

        ]
      },

      {
        heading: "IDs and Accessibility",

        blocks: [

          {
            type: "paragraph",
            content: "IDs play a major role in accessibility."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<label for="email">
    Email Address
</label>

<input id="email">`
          },

          {
            type: "paragraph",
            content: "The label connects directly to the input field."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better screen reader support",
              "Improved keyboard navigation",
              "Easier form usage",
              "Better accessibility compliance"
            ]
          },

          {
            type: "paragraph",
            content: "This is one reason IDs are essential in forms."
          }

        ]
      },

      {
        heading: "IDs in Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input id="username">

<label for="username">
    Username
</label>`
          },

          {
            type: "paragraph",
            content: "When users click the label:"
          },

          {
            type: "output",
            content: [
              "Username"
            ]
          },

          {
            type: "paragraph",
            content: "the browser automatically focuses the input field."
          },

          {
            type: "paragraph",
            content: "This improves user experience significantly."
          }

        ]
      },

      {
        heading: "IDs in Single Page Applications",

        blocks: [

          {
            type: "paragraph",
            content: "Modern frameworks like:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "Vue",
              "Angular",
              "Next.js"
            ]
          },

          {
            type: "paragraph",
            content: "occasionally use IDs for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Scroll targets",
              "Accessibility relationships",
              "Dynamic widgets",
              "Third-party integrations"
            ]
          },

          {
            type: "paragraph",
            content: "However, most component styling is usually handled with classes rather than IDs."
          }

        ]
      },

      {
        heading: "ID Naming Rules",

        blocks: [

          {
            type: "paragraph",
            content: "ID values:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Can contain letters",
              "✔ Can contain numbers",
              "✔ Can contain hyphens",
              "✔ Can contain underscores"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "id=\"main-header\"",
              "",
              "id=\"user_profile\"",
              "",
              "id=\"section1\""
            ]
          },

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "output",
            content: [
              "id=\"123header\""
            ]
          },

          {
            type: "paragraph",
            content: "Although browsers may allow it, it can create issues when selecting elements with CSS or JavaScript."
          }

        ]
      },

      {
        heading: "Case Sensitivity",

        blocks: [

          {
            type: "paragraph",
            content: "IDs should be treated as case-sensitive."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `id="Header"`
          },

          {
            type: "paragraph",
            content: "is different from:"
          },

          {
            type: "code",
            language: "html",
            content: `id="header"`
          },

          {
            type: "paragraph",
            content: "Best practice:"
          },

          {
            type: "paragraph",
            content: "Use lowercase names."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `id="main-content"`
          },

          {
            type: "paragraph",
            content: "This improves consistency and avoids bugs."
          }

        ]
      },

      {
        heading: "ID vs Class",

        blocks: [

          {
            type: "paragraph",
            content: "This is one of the most important HTML concepts."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ID"
          },

          {
            type: "code",
            language: "html",
            content: `id="header"`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Unique",
              "Used for one element",
              "Referenced using #"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Class"
          },

          {
            type: "code",
            language: "html",
            content: `class="header"`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Reusable",
              "Can be shared by many elements",
              "Referenced using ."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Comparison:"
          },

          {
            type: "table",
            headers: [
              "Feature",
              "ID",
              "Class"
            ],

            rows: [
              ["Unique", "Yes", "No"],
              ["Reusable", "No", "Yes"],
              ["CSS Selector", "#id", ".class"],
              ["Elements Sharing It", "One", "Many"],
              ["JavaScript Selection", "Very Common", "Common"],
              ["Navigation Target", "Yes", "No"]
            ]
          }

        ]
      },

      {
        heading: "When to Use an ID",

        blocks: [

          {
            type: "paragraph",
            content: "Use IDs when:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Unique Page Sections"
          },

          {
            type: "code",
            language: "html",
            content: `<section id="about"></section>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Navigation Anchors"
          },

          {
            type: "code",
            language: "html",
            content: `<section id="services"></section>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Form Elements"
          },

          {
            type: "code",
            language: "html",
            content: `<input id="email">`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "JavaScript Targets"
          },

          {
            type: "code",
            language: "html",
            content: `<button id="submit-btn">`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Accessibility Relationships"
          },

          {
            type: "code",
            language: "html",
            content: `<label for="password">`
          }

        ]
      },

      {
        heading: "When NOT to Use an ID",

        blocks: [

          {
            type: "paragraph",
            content: "Avoid IDs when multiple elements need the same styling."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<button id="blue-btn">`
          },

          {
            type: "paragraph",
            content: "repeated several times."
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<button class="blue-btn">`
          },

          {
            type: "paragraph",
            content: "Classes are designed for reusable styling."
          }

        ]
      },

      {
        heading: "Common Real-World IDs",

        blocks: [

          {
            type: "paragraph",
            content: "Navigation:"
          },

          {
            type: "output",
            content: [
              "id=\"navbar\""
            ]
          },

          {
            type: "paragraph",
            content: "Header:"
          },

          {
            type: "output",
            content: [
              "id=\"header\""
            ]
          },

          {
            type: "paragraph",
            content: "Footer:"
          },

          {
            type: "output",
            content: [
              "id=\"footer\""
            ]
          },

          {
            type: "paragraph",
            content: "Hero Section:"
          },

          {
            type: "output",
            content: [
              "id=\"hero\""
            ]
          },

          {
            type: "paragraph",
            content: "Contact Section:"
          },

          {
            type: "output",
            content: [
              "id=\"contact\""
            ]
          },

          {
            type: "paragraph",
            content: "Form Fields:"
          },

          {
            type: "output",
            content: [
              "id=\"email\"",
              "",
              "id=\"password\""
            ]
          },

          {
            type: "paragraph",
            content: "Buttons:"
          },

          {
            type: "output",
            content: [
              "id=\"submit-btn\""
            ]
          },

          {
            type: "paragraph",
            content: "These naming patterns appear across countless professional projects."
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
                question: "Using the Same ID Multiple Times",
                answer: "IDs must be unique.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<p id="text"></p>\n\n<div id="text"></div>`
                  }
                ]
              },
              {
                question: "Using IDs Instead of Classes Everywhere",
                answer: "If elements share styling, classes are usually better.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `id="button1"\n\nid="button2"\n\nid="button3"`
                  }
                ]
              },
              {
                question: "Giving Meaningless Names",
                answer: "Use descriptive names.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `id="abc"\n\nid="test"\n\nid="box123"`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `id="user-profile"\n\nid="main-navigation"`
                  }
                ]
              },
              {
                question: "Using Spaces in IDs",
                answer: "Spaces are not allowed in IDs.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `id="main heading"`
                  },
                  {
                    title: "Use",
                    language: "html",
                    content: `id="main-heading"`
                  }
                ]
              },
              {
                question: "Styling Entire Websites with IDs",
                answer: "Many beginners overuse IDs for CSS. Professional projects usually use: Classes for styling, IDs for unique identification."
              }
            ]
          }

        ]
      },

      {
        heading: "Performance Considerations",

        blocks: [

          {
            type: "paragraph",
            content: "Historically, ID selectors were slightly faster because browsers could quickly locate unique elements."
          },

          {
            type: "paragraph",
            content: "Modern browsers are highly optimized, so the performance difference between IDs and classes is usually negligible."
          },

          {
            type: "paragraph",
            content: "Developers should focus more on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Readability",
              "Maintainability",
              "Proper semantics"
            ]
          },

          {
            type: "paragraph",
            content: "than micro-optimizations."
          }

        ]
      },

      {
        heading: "Real-World Developer Notes",

        blocks: [

          {
            type: "paragraph",
            content: "Professional developers typically use:"
          },

          {
            type: "comparison",
            leftTitle: "Classes For",
            leftItems: [
              "Styling",
              "Components",
              "Reusable UI"
            ],
            rightTitle: "IDs For",
            rightItems: [
              "Accessibility",
              "Navigation",
              "JavaScript hooks",
              "Unique page sections"
            ]
          },

          {
            type: "paragraph",
            content: "Large projects often contain hundreds of classes but relatively few IDs."
          },

          {
            type: "paragraph",
            content: "This is considered good practice."
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "Understanding IDs will help you learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Selectors",
              "CSS Specificity",
              "JavaScript DOM Manipulation",
              "Forms",
              "Accessibility (ARIA)",
              "Navigation Menus",
              "Single Page Applications",
              "React",
              "Vue",
              "Angular",
              "Next.js"
            ]
          },

          {
            type: "paragraph",
            content: "IDs become increasingly important as websites become more interactive and accessible."
          }

        ]
      },

      {
        heading: "Key Takeaways",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "The id attribute assigns a unique identifier to an HTML element.",
              "IDs should be unique within a webpage.",
              "CSS targets IDs using the # selector.",
              "JavaScript commonly uses IDs to locate elements quickly.",
              "IDs enable fragment navigation and anchor links.",
              "IDs play an important role in accessibility and form labeling.",
              "Use IDs for unique elements, not reusable styling.",
              "Classes are generally better for styling multiple elements.",
              "Professional developers use IDs primarily for navigation, accessibility, and JavaScript interactions.",
              "Mastering IDs is essential before learning advanced CSS, JavaScript, and modern frontend frameworks."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A common trap beginners fall into when styling with CSS is combining IDs and Classes incorrectly due to 'Specificity Wars'. An ID selector (`#header`) is significantly stronger than a class selector (`.header`). If you style an element with an ID, you will find it nearly impossible to override that style later using just a class. This is why modern CSS methodologies (like BEM or Tailwind) strongly advise against using IDs for styling, reserving them strictly for JavaScript hooks, anchor links, and accessibility labels."
          }

        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : HTML Layout
============================= */
    "html-layout": {
    title: "HTML Layout",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "When users visit a website, they do not see HTML tags, CSS properties, or JavaScript code. What they actually see is the layout of the webpage—the arrangement of headers, navigation menus, content areas, sidebars, images, advertisements, and footers."
          },

          {
            type: "paragraph",
            content: "A well-structured layout helps users navigate a website easily, understand content quickly, and enjoy a better browsing experience. Poor layouts can confuse users and make even high-quality content difficult to consume."
          },

          {
            type: "paragraph",
            content: "HTML Layout refers to the way different sections of a webpage are organized and structured. It provides the skeleton of a webpage before CSS adds styling and before JavaScript adds interactivity."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn what HTML layouts are, why they matter, semantic layout elements, traditional vs modern layouts, browser behavior, accessibility considerations, responsive design concepts, real-world layouts, best practices, and common mistakes developers make."
          }

        ]
      },

      {
        heading: "What is HTML Layout?",

        blocks: [

          {
            type: "paragraph",
            content: "An HTML layout is the arrangement of different sections of a webpage using HTML elements."
          },

          {
            type: "paragraph",
            content: "Think of a webpage like a building:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML provides the structure.",
              "CSS provides the appearance.",
              "JavaScript provides behavior."
            ]
          },

          {
            type: "paragraph",
            content: "Just as a building contains rooms organized in specific locations, a webpage contains sections organized into a layout."
          },

          {
            type: "paragraph",
            content: "A typical webpage layout contains:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Navigation Menu",
              "Main Content",
              "Sidebar",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Example structure:"
          },

          {
            type: "output",
            content: [
              "+----------------------+",
              "|        Header        |",
              "+----------------------+",
              "|      Navigation      |",
              "+----------------------+",
              "| Main Content | Aside |",
              "|              |       |",
              "+----------------------+",
              "|        Footer        |",
              "+----------------------+"
            ]
          },

          {
            type: "paragraph",
            content: "This structure forms the layout of the webpage."
          }

        ]
      },

      {
        heading: "Why Are Layouts Important?",

        blocks: [

          {
            type: "paragraph",
            content: "Without proper layout structure:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Content becomes difficult to read.",
              "Navigation becomes confusing.",
              "Search engines struggle to understand the page.",
              "Accessibility tools become less effective.",
              "Future maintenance becomes harder."
            ]
          },

          {
            type: "paragraph",
            content: "Good layouts provide:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better organization",
              "Improved readability",
              "Better accessibility",
              "Better SEO",
              "Easier maintenance",
              "Responsive design support"
            ]
          }

        ]
      },

      {
        heading: "Evolution of HTML Layouts",

        blocks: [

          {
            type: "paragraph",
            content: "Understanding layout history helps explain why modern HTML works the way it does."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Stage 1: Table-Based Layouts"
          },

          {
            type: "paragraph",
            content: "In the early days of the web, developers used tables to create layouts."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>
    <tr>
        <td>Header</td>
    </tr>
</table>`
          },

          {
            type: "paragraph",
            content: "Advantages:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Easy at the time"
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
              "Poor accessibility",
              "Difficult maintenance",
              "Complex code",
              "Bad SEO"
            ]
          },

          {
            type: "paragraph",
            content: "Today: Never use tables for page layouts. Tables should only display tabular data."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Stage 2: Div-Based Layouts"
          },

          {
            type: "paragraph",
            content: "Developers later used div elements."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="header"></div>

<div class="menu"></div>

<div class="content"></div>

<div class="footer"></div>`
          },

          {
            type: "paragraph",
            content: "Advantages:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better than tables",
              "Easier styling"
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
              "No meaning",
              "Poor semantic structure"
            ]
          },

          {
            type: "paragraph",
            content: "Everything became:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>`
          },

          {
            type: "paragraph",
            content: "which made pages harder to understand."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Stage 3: Semantic HTML Layouts"
          },

          {
            type: "paragraph",
            content: "HTML5 introduced semantic layout elements."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<header>",
              "<nav>",
              "<main>",
              "<section>",
              "<article>",
              "<aside>",
              "<footer>"
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
              "More meaningful",
              "Better SEO",
              "Better accessibility",
              "Easier maintenance"
            ]
          },

          {
            type: "paragraph",
            content: "This is the modern standard."
          }

        ]
      },

      {
        heading: "Semantic Layout Elements",

        blocks: [

          {
            type: "paragraph",
            content: "Modern HTML layouts use semantic elements instead of generic divs whenever possible."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Header Element"
          },

          {
            type: "paragraph",
            content: "The <header> element represents introductory content."
          },

          {
            type: "paragraph",
            content: "Common contents:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Logo",
              "Website title",
              "Search bar",
              "Navigation menu"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    Website Header
</header>`
          },

          {
            type: "paragraph",
            content: "Typical use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Top section of webpage",
              "Blog title area",
              "Company branding section"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Navigation Element"
          },

          {
            type: "paragraph",
            content: "The <nav> element contains navigation links."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    Home
    About
    Contact
</nav>`
          },

          {
            type: "paragraph",
            content: "Common contents:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Menus",
              "Sidebar navigation",
              "Breadcrumb navigation"
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
              "Helps search engines identify navigation.",
              "Helps screen readers understand page structure."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Main Element"
          },

          {
            type: "paragraph",
            content: "The <main> element contains the primary content of a webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<main>
    Main Page Content
</main>`
          },

          {
            type: "paragraph",
            content: "Important: A webpage should usually contain only one main element."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves accessibility",
              "Improves SEO",
              "Identifies primary content"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Section Element"
          },

          {
            type: "paragraph",
            content: "The <section> element groups related content together."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<section>
    About Us
</section>`
          },

          {
            type: "paragraph",
            content: "Common uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "About section",
              "Services section",
              "Contact section",
              "Features section"
            ]
          },

          {
            type: "paragraph",
            content: "Think of sections as chapters within a webpage."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Article Element"
          },

          {
            type: "paragraph",
            content: "The <article> element represents independent content."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blog post",
              "News article",
              "Product review",
              "Forum post"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<article>
    Blog Article
</article>`
          },

          {
            type: "paragraph",
            content: "A standalone article should make sense even if separated from the page."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Aside Element"
          },

          {
            type: "paragraph",
            content: "The <aside> element contains secondary content."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Advertisements",
              "Related posts",
              "Author information",
              "Sidebar widgets"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    Related Articles
</aside>`
          },

          {
            type: "paragraph",
            content: "This content supports the main content but is not central to it."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The Footer Element"
          },

          {
            type: "paragraph",
            content: "The <footer> element appears at the bottom."
          },

          {
            type: "paragraph",
            content: "Common contents:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Copyright",
              "Social links",
              "Contact details",
              "Terms and policies"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>
    Copyright 2026
</footer>`
          }

        ]
      },

      {
        heading: "Example of a Complete Modern Layout",

        blocks: [

          {
            type: "paragraph",
            content: "A typical webpage structure:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    Logo
</header>

<nav>
    Navigation
</nav>

<main>

    <section>
        Content
    </section>

    <aside>
        Sidebar
    </aside>

</main>

<footer>
    Footer
</footer>`
          },

          {
            type: "paragraph",
            content: "This is the foundation of many modern websites."
          }

        ]
      },

      {
        heading: "Browser Internals: How Layout Elements Work",

        blocks: [

          {
            type: "paragraph",
            content: "A common misconception is that layout elements automatically create layouts. They do not."
          },

          {
            type: "paragraph",
            content: "Consider:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<section>\n<footer>`
          },

          {
            type: "paragraph",
            content: "The browser simply creates DOM nodes."
          },

          {
            type: "paragraph",
            content: "Internally:"
          },

          {
            type: "tree",
            content: `Document
 ├── Header
 ├── Nav
 ├── Section
 └── Footer`
          },

          {
            type: "paragraph",
            content: "Without CSS:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Elements appear one below another.",
              "No advanced layout exists."
            ]
          },

          {
            type: "paragraph",
            content: "HTML provides structure. CSS provides positioning."
          }

        ]
      },

      {
        heading: "HTML Layout vs CSS Layout",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners confuse these concepts."
          },

          {
            type: "comparison",
            leftTitle: "HTML Layout",
            leftItems: [
              "Defines what content exists",
              "<header>, <nav>, <main>, <footer>",
              "Answers: What is this?"
            ],
            rightTitle: "CSS Layout",
            rightItems: [
              "Defines where content appears",
              "Flexbox, Grid, Positioning",
              "Answers: Where should it go?"
            ]
          }

        ]
      },

      {
        heading: "Common Website Layout Types",

        blocks: [

          {
            type: "paragraph",
            content: "Single Column Layout"
          },

          {
            type: "output",
            content: [
              "Header",
              "Content",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Common for: Blogs, Documentation, Mobile websites."
          },

          {
            type: "paragraph",
            content: "Advantages: Simple, Responsive."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Two Column Layout"
          },

          {
            type: "output",
            content: [
              "Content | Sidebar"
            ]
          },

          {
            type: "paragraph",
            content: "Common for: Blogs, News websites."
          },

          {
            type: "paragraph",
            content: "Advantages: Extra information area."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Three Column Layout"
          },

          {
            type: "output",
            content: [
              "Sidebar | Content | Sidebar"
            ]
          },

          {
            type: "paragraph",
            content: "Common for: Dashboards, Enterprise applications."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Grid Layout"
          },

          {
            type: "output",
            content: [
              "Card Card Card",
              "Card Card Card"
            ]
          },

          {
            type: "paragraph",
            content: "Common for: Product listings, Image galleries."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Magazine Layout"
          },

          {
            type: "paragraph",
            content: "Used by: News websites, Media portals."
          },

          {
            type: "paragraph",
            content: "Features: Multiple sections, Featured articles, Advertisements."
          }

        ]
      },

      {
        heading: "Responsive Layouts",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites must work on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Phones",
              "Tablets",
              "Laptops",
              "Desktop computers",
              "Large displays"
            ]
          },

          {
            type: "paragraph",
            content: "This is called Responsive Design."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "paragraph",
            content: "Desktop:"
          },

          {
            type: "output",
            content: [
              "Content | Sidebar"
            ]
          },

          {
            type: "paragraph",
            content: "Mobile:"
          },

          {
            type: "output",
            content: [
              "Content",
              "Sidebar"
            ]
          },

          {
            type: "paragraph",
            content: "The layout adapts to screen size. HTML structure remains the same. CSS changes the arrangement."
          }

        ]
      },

      {
        heading: "Accessibility and Layout",

        blocks: [

          {
            type: "paragraph",
            content: "Semantic layouts greatly improve accessibility."
          },

          {
            type: "paragraph",
            content: "Screen readers understand:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<main>\n<footer>`
          },

          {
            type: "paragraph",
            content: "better than:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>\n<div>\n<div>\n<div>`
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
              "Better keyboard support",
              "Improved screen reader experience",
              "Better compliance with accessibility standards"
            ]
          }

        ]
      },

      {
        heading: "SEO Benefits of Semantic Layouts",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines analyze page structure."
          },

          {
            type: "paragraph",
            content: "Using:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<article>\n<footer>`
          },

          {
            type: "paragraph",
            content: "helps search engines understand:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Main content",
              "Navigation",
              "Supporting content"
            ]
          },

          {
            type: "paragraph",
            content: "This can improve content discoverability. Semantic HTML contributes to better SEO."
          }

        ]
      },

      {
        heading: "Real-World Layout Example",

        blocks: [

          {
            type: "paragraph",
            content: "Consider an online store:"
          },

          {
            type: "tree",
            content: `Header
 ├── Logo
 ├── Search
 └── Cart

Navigation
 ├── Products
 ├── Categories
 └── Deals

Main
 ├── Product Grid
 └── Promotions

Footer
 ├── Contact
 ├── Policies
 └── Social Media`
          },

          {
            type: "paragraph",
            content: "Every major website follows a structured layout similar to this."
          }

        ]
      },

      {
        heading: "Common Layout Mistakes",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Using Tables for Layout",
                answer: "Modern websites should use semantic elements and CSS, not tables, for page structure.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<table>`
                  }
                ]
              },
              {
                question: "Excessive Div Usage",
                answer: "This creates \"div soup.\" Use semantic elements whenever possible.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>\n    <div>\n        <div>\n            Content\n        </div>\n    </div>\n</div>`
                  }
                ]
              },
              {
                question: "Missing Main Element",
                answer: "Main content should usually be wrapped in a main element.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<header></header>\n<section></section>\n<footer></footer>`
                  }
                ]
              },
              {
                question: "Ignoring Accessibility",
                answer: "Semantic elements improve accessibility better than generic divs.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div class="menu">`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<nav>`
                  }
                ]
              },
              {
                question: "Poor Content Organization",
                answer: "Use the correct element for the correct purpose.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<section>\n    Footer Content\n</section>`
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
            content: "Professional developers usually follow a layout planning process:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Identify page sections.",
              "Create semantic structure.",
              "Add CSS layout systems.",
              "Make layout responsive.",
              "Improve accessibility.",
              "Optimize performance."
            ]
          },

          {
            type: "paragraph",
            content: "Most modern websites use:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "CSS Flexbox",
              "CSS Grid",
              "Responsive Design"
            ]
          },

          {
            type: "paragraph",
            content: "together. HTML provides meaning while CSS handles placement."
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "Understanding HTML layouts will help you learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "CSS Selectors",
              "CSS Box Model",
              "CSS Flexbox",
              "CSS Grid",
              "Responsive Web Design",
              "Accessibility (ARIA)",
              "Bootstrap",
              "Tailwind CSS",
              "React Component Layouts",
              "Next.js Page Structures"
            ]
          },

          {
            type: "paragraph",
            content: "HTML Layout is one of the most important foundations of frontend development because every webpage, regardless of complexity, starts with a well-organized structure."
          }

        ]
      },

      {
        heading: "Key Takeaways",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML Layout defines the structure and organization of a webpage.",
              "Modern layouts use semantic elements such as <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>.",
              "Layout structure improves readability, accessibility, SEO, and maintainability.",
              "HTML provides structure, while CSS controls positioning and appearance.",
              "Semantic layouts are preferred over table-based and div-only layouts.",
              "Responsive layouts adapt to different screen sizes.",
              "Search engines and screen readers benefit from semantic structure.",
              "Modern websites rely on a combination of semantic HTML, Flexbox, Grid, and responsive design techniques.",
              "A well-designed layout is the foundation of every professional website.",
              "Mastering HTML layouts prepares you for advanced CSS, UI design, frontend frameworks, and modern web development."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A very common mistake beginners make is confusing `<section>` with `<div>`. If a container simply exists to help you apply a background color, flexbox alignment, or padding, you should use a `<div>`. You should only use a `<section>` if the content inside it represents a standalone thematic grouping that would logically require its own heading (even if that heading is visually hidden). Semantic HTML is about meaning, not visual layout."
          }

        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : HTML Iframes
============================= */
    "html-iframes": {
    title: "HTML Iframes",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites often need to display content from another webpage, application, map service, video platform, document viewer, payment gateway, or external system without forcing users to leave the current page. HTML provides a special element for this purpose called the iframe."
          },

          {
            type: "paragraph",
            content: "An iframe (Inline Frame) allows one HTML document to be embedded inside another HTML document. It acts like a window inside a webpage that can display an entirely different webpage or external resource."
          },

          {
            type: "paragraph",
            content: "Iframes are widely used for embedding YouTube videos, Google Maps, PDFs, dashboards, advertisements, payment forms, and third-party widgets."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn what iframes are, how they work internally, their attributes, security considerations, performance impacts, accessibility guidelines, real-world use cases, common mistakes, and modern best practices used by professional developers."
          }

        ]
      },

      {
        heading: "What is an HTML Iframe?",

        blocks: [

          {
            type: "paragraph",
            content: "The <iframe> element creates a rectangular area inside a webpage where another document can be displayed."
          },

          {
            type: "paragraph",
            content: "Basic syntax:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="https://example.com"></iframe>`
          },

          {
            type: "paragraph",
            content: "The webpage inside the iframe is completely separate from the parent webpage."
          },

          {
            type: "paragraph",
            content: "Think of an iframe as a browser window embedded inside another browser window."
          }

        ]
      },

      {
        heading: "Why Are Iframes Used?",

        blocks: [

          {
            type: "paragraph",
            content: "Iframes allow developers to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Embed external webpages",
              "Display videos",
              "Show maps",
              "Embed forms",
              "Display PDFs",
              "Load advertisements",
              "Integrate third-party widgets",
              "Display dashboards",
              "Isolate external content"
            ]
          },

          {
            type: "paragraph",
            content: "Without iframes, users would need to leave the current website to view such content."
          }

        ]
      },

      {
        heading: "Basic Iframe Example",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<iframe src="https://example.com"></iframe>`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "paragraph",
            content: "The browser loads the webpage from example.com inside the iframe area."
          }

        ]
      },

      {
        heading: "How Iframes Work Internally",

        blocks: [

          {
            type: "paragraph",
            content: "Most tutorials simply explain how to use iframes."
          },

          {
            type: "paragraph",
            content: "Professional developers should understand what happens behind the scenes."
          },

          {
            type: "paragraph",
            content: "When the browser encounters:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="https://example.com"></iframe>`
          },

          {
            type: "paragraph",
            content: "the browser:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Creates an iframe element.",
              "Starts a separate document environment.",
              "Makes another HTTP request.",
              "Downloads the external page.",
              "Creates a separate DOM tree.",
              "Creates a separate JavaScript execution context.",
              "Renders the content inside the frame."
            ]
          },

          {
            type: "paragraph",
            content: "Internally:"
          },

          {
            type: "tree",
            content: `Main Page
│
├── Parent DOM
│
└── Iframe
     │
     ├── Separate DOM
     ├── Separate CSS
     └── Separate JavaScript`
          },

          {
            type: "paragraph",
            content: "This separation is one of the biggest advantages of iframes."
          }

        ]
      },

      {
        heading: "The src Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "The src attribute specifies the URL to load."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="https://example.com"></iframe>`
          },

          {
            type: "paragraph",
            content: "Without a source:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe></iframe>`
          },

          {
            type: "paragraph",
            content: "the iframe will appear empty."
          }

        ]
      },

      {
        heading: "Setting Width and Height",

        blocks: [

          {
            type: "paragraph",
            content: "By default, browsers apply standard dimensions."
          },

          {
            type: "paragraph",
            content: "You can customize them."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
    src="https://example.com"
    width="800"
    height="400">
</iframe>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Width  = 800px",
              "Height = 400px"
            ]
          }

        ]
      },

      {
        heading: "Using CSS with Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "Instead of HTML attributes:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="page.html"></iframe>`
          },

          {
            type: "paragraph",
            content: "Use CSS:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe class="frame" src="page.html"></iframe>`
          },

          {
            type: "code",
            language: "css",
            content: `.frame {
    width: 100%;
    height: 500px;
}`
          },

          {
            type: "paragraph",
            content: "Modern websites typically prefer CSS-based sizing."
          }

        ]
      },

      {
        heading: "Removing the Border",

        blocks: [

          {
            type: "paragraph",
            content: "Browsers often display a border around iframes."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `iframe {
    border: none;
}`
          },

          {
            type: "paragraph",
            content: "This creates a cleaner appearance."
          }

        ]
      },

      {
        heading: "Embedding Another HTML Page",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="about.html"></iframe>`
          },

          {
            type: "paragraph",
            content: "If both files exist in the same project:"
          },

          {
            type: "tree",
            content: `project/
│
├── index.html
└── about.html`
          },

          {
            type: "paragraph",
            content: "the content of about.html will appear inside the iframe."
          }

        ]
      },

      {
        heading: "Embedding External Websites",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="https://example.com"></iframe>`
          },

          {
            type: "paragraph",
            content: "However, many websites block iframe embedding using security headers."
          },

          {
            type: "paragraph",
            content: "You may see:"
          },

          {
            type: "output",
            content: [
              "Refused to connect"
            ]
          },

          {
            type: "paragraph",
            content: "or"
          },

          {
            type: "output",
            content: [
              "X-Frame-Options error"
            ]
          },

          {
            type: "paragraph",
            content: "This is intentional for security reasons."
          }

        ]
      },

      {
        heading: "Iframe Title Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Accessibility requires meaningful titles."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="map.html"></iframe>`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
    src="map.html"
    title="Company Location Map">
</iframe>`
          },

          {
            type: "paragraph",
            content: "Screen readers use the title to describe the frame."
          }

        ]
      },

      {
        heading: "Embedding YouTube Videos",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most common iframe uses."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="https://www.youtube.com/embed/VIDEO_ID"
title="YouTube Video">
</iframe>`
          },

          {
            type: "paragraph",
            content: "YouTube automatically provides iframe embed code."
          },

          {
            type: "paragraph",
            content: "Steps:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Open a YouTube video.",
              "Click Share.",
              "Select Embed.",
              "Copy the iframe code.",
              "Paste it into your webpage."
            ]
          }

        ]
      },

      {
        heading: "Embedding Google Maps",

        blocks: [

          {
            type: "paragraph",
            content: "Google Maps also uses iframes."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="https://www.google.com/maps/embed?...">
</iframe>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Interactive maps",
              "Zoom controls",
              "Directions support"
            ]
          },

          {
            type: "paragraph",
            content: "without building a mapping system yourself."
          }

        ]
      },

      {
        heading: "Embedding PDFs",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="document.pdf"
width="100%"
height="600">
</iframe>`
          },

          {
            type: "paragraph",
            content: "The PDF viewer loads directly inside the webpage."
          },

          {
            type: "paragraph",
            content: "Common use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Resumes",
              "Reports",
              "Documentation",
              "User manuals"
            ]
          }

        ]
      },

      {
        heading: "Using target with Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "Links can load content into a specific iframe."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe name="contentFrame"></iframe>
<a href="page1.html"
target="contentFrame">
Page 1
</a>`
          },

          {
            type: "paragraph",
            content: "Clicking the link loads Page 1 inside the iframe."
          }

        ]
      },

      {
        heading: "The Loading Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Modern browsers support lazy loading."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="video.html"
loading="lazy">
</iframe>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster page load",
              "Reduced bandwidth usage",
              "Better performance"
            ]
          },

          {
            type: "paragraph",
            content: "The iframe loads only when approaching the viewport."
          }

        ]
      },

      {
        heading: "Fullscreen Support",

        blocks: [

          {
            type: "paragraph",
            content: "For videos and media:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="video.html"
allowfullscreen>
</iframe>`
          },

          {
            type: "paragraph",
            content: "Users can then switch to fullscreen mode."
          },

          {
            type: "paragraph",
            content: "Commonly used with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "YouTube",
              "Vimeo",
              "Interactive applications"
            ]
          }

        ]
      },

      {
        heading: "Security Risks of Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginner tutorials ignore this topic."
          },

          {
            type: "paragraph",
            content: "Professional developers must understand iframe security."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Clickjacking"
          },

          {
            type: "paragraph",
            content: "Attackers may place another website inside an invisible iframe."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "User thinks:",
              "Clicking a button",
              "",
              "Actually:",
              "Clicking a hidden banking button"
            ]
          },

          {
            type: "paragraph",
            content: "This is called Clickjacking."
          },

          {
            type: "paragraph",
            content: "Many websites prevent this through:"
          },

          {
            type: "output",
            content: [
              "X-Frame-Options"
            ]
          },

          {
            type: "paragraph",
            content: "or"
          },

          {
            type: "output",
            content: [
              "Content-Security-Policy"
            ]
          },

          {
            type: "paragraph",
            content: "headers."
          }

        ]
      },

      {
        heading: "The sandbox Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "The sandbox attribute restricts iframe behavior."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="external.html"
sandbox>
</iframe>`
          },

          {
            type: "paragraph",
            content: "Restrictions include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "No scripts",
              "No forms",
              "No popups",
              "No downloads"
            ]
          },

          {
            type: "paragraph",
            content: "unless explicitly allowed."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="external.html"
sandbox="allow-scripts">
</iframe>`
          },

          {
            type: "paragraph",
            content: "This allows JavaScript while keeping other restrictions."
          }

        ]
      },

      {
        heading: "Cross-Origin Restrictions",

        blocks: [

          {
            type: "paragraph",
            content: "A major concept many tutorials skip."
          },

          {
            type: "paragraph",
            content: "Suppose:"
          },

          {
            type: "output",
            content: [
              "Parent Page:",
              "https://mywebsite.com",
              "",
              "Iframe:",
              "https://google.com"
            ]
          },

          {
            type: "paragraph",
            content: "JavaScript cannot freely access the iframe content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `iframe.contentDocument`
          },

          {
            type: "paragraph",
            content: "may fail because of browser security policies."
          },

          {
            type: "paragraph",
            content: "This protection is called the:"
          },

          {
            type: "output",
            content: [
              "Same-Origin Policy"
            ]
          },

          {
            type: "paragraph",
            content: "and prevents malicious websites from stealing data."
          }

        ]
      },

      {
        heading: "Performance Considerations",

        blocks: [

          {
            type: "paragraph",
            content: "Each iframe may create:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Additional network requests",
              "Additional rendering work",
              "Additional JavaScript execution",
              "Additional memory usage"
            ]
          },

          {
            type: "paragraph",
            content: "Too many iframes can slow down a webpage."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "output",
            content: [
              "20 YouTube iframes",
              "10 Map iframes",
              "15 External Widgets"
            ]
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Slow loading",
              "Higher memory usage",
              "Poor user experience"
            ]
          }

        ]
      },

      {
        heading: "Responsive Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "Fixed-width iframes often break on mobile devices."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe width="1000"></iframe>`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "css",
            content: `iframe {
    width: 100%;
    max-width: 100%;
}`
          },

          {
            type: "paragraph",
            content: "This allows the iframe to adapt to screen size."
          }

        ]
      },

      {
        heading: "Accessibility Best Practices",

        blocks: [

          {
            type: "paragraph",
            content: "Always:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Add meaningful titles",
              "✔ Ensure keyboard accessibility",
              "✔ Avoid unnecessary iframes",
              "✔ Provide alternative content when possible"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
src="map.html"
title="Office Location Map">
</iframe>`
          }

        ]
      },

      {
        heading: "Real-World Uses of Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "Professional websites commonly use iframes for:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Video Platforms"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "YouTube",
              "Vimeo"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Maps"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Google Maps",
              "OpenStreetMap"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Payments"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Stripe Checkout",
              "Payment widgets"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Analytics Dashboards"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Business reports",
              "Monitoring tools"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Social Media Embeds"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Posts",
              "Tweets",
              "Feeds"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Forms"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Survey forms",
              "Contact forms"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Documents"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "PDFs",
              "Reports",
              "Presentations"
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
                question: "Embedding Websites That Block Iframes",
                answer: "Many websites forbid iframe embedding. Always test first.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<iframe src="https://somewebsite.com"></iframe>`
                  }
                ]
              },
              {
                question: "Missing Title Attribute",
                answer: "Always provide a meaningful title for accessibility.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<iframe src="page.html"></iframe>`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<iframe\nsrc="page.html"\ntitle="User Dashboard">\n</iframe>`
                  }
                ]
              },
              {
                question: "Fixed Dimensions Everywhere",
                answer: "Fixed dimensions provide a poor mobile experience. Use responsive sizing.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<iframe\nwidth="1200"\nheight="800">\n</iframe>`
                  }
                ]
              },
              {
                question: "Too Many Iframes",
                answer: "Each iframe consumes resources. Avoid embedding unnecessary content."
              },
              {
                question: "Ignoring Sandbox",
                answer: "Embedding untrusted content without restrictions can create security risks. Always consider using sandbox when loading third-party content."
              }
            ]
          }

        ]
      },

      {
        heading: "Browser Internals: Why Some Sites Refuse to Load",

        blocks: [

          {
            type: "paragraph",
            content: "Developers are often surprised when an iframe works for one website but not another."
          },

          {
            type: "paragraph",
            content: "The reason is that the server can send headers like:"
          },

          {
            type: "output",
            content: [
              "X-Frame-Options: DENY"
            ]
          },

          {
            type: "paragraph",
            content: "or"
          },

          {
            type: "output",
            content: [
              "Content-Security-Policy:",
              "frame-ancestors 'none'"
            ]
          },

          {
            type: "paragraph",
            content: "The browser then refuses to display that page inside an iframe."
          },

          {
            type: "paragraph",
            content: "This is a security feature, not a bug."
          }

        ]
      },

      {
        heading: "Modern Alternatives to Iframes",

        blocks: [

          {
            type: "paragraph",
            content: "While iframes are still useful, modern applications sometimes use:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "APIs",
              "Server-side rendering",
              "Web Components",
              "JavaScript SDKs",
              "Micro-Frontend architectures"
            ]
          },

          {
            type: "paragraph",
            content: "instead of embedding entire webpages."
          },

          {
            type: "paragraph",
            content: "However, iframes remain the safest way to isolate external content."
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "Understanding iframes will help you learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML Forms",
              "JavaScript Window Object",
              "Cross-Origin Communication",
              "postMessage API",
              "Web Security",
              "Content Security Policy (CSP)",
              "Authentication Systems",
              "Payment Gateway Integration",
              "Third-Party Widget Development",
              "Micro Frontends"
            ]
          },

          {
            type: "paragraph",
            content: "Iframes are deeply connected to modern web architecture."
          }

        ]
      },

      {
        heading: "Key Takeaways",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "The <iframe> element embeds another webpage inside the current webpage.",
              "Each iframe has its own DOM, CSS, JavaScript, and browsing context.",
              "Common uses include videos, maps, forms, PDFs, dashboards, and widgets.",
              "The src attribute specifies the content to load.",
              "The title attribute improves accessibility.",
              "The sandbox attribute improves security.",
              "Many websites block iframe embedding using security headers.",
              "The Same-Origin Policy prevents unauthorized access between pages.",
              "Too many iframes can hurt performance.",
              "Responsive sizing and lazy loading improve user experience.",
              "Iframes remain one of the most powerful and widely used embedding technologies in modern web development."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A critical security concept related to iframes is 'Cross-Site Scripting' (XSS). If you embed an external site using an iframe, you are essentially bringing that site's code into your users' browsers. If that external site is compromised, it could attempt to run malicious scripts. This is why the `sandbox` attribute is so incredibly important for third-party embeds—it acts as a firewall, preventing the iframe's scripts from executing unauthorized actions or breaking out into your parent document."
          }

        ]
      }
    ]
  },
};

export default pageLayoutStructure;