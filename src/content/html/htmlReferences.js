const htmlReferences = {

/* ===========================
    First Topic : HTML Tags Reference
============================= */
    "html-tags-reference": {
    title: "HTML Tags Reference",
    readingTime: "26 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "After learning HTML elements, attributes, forms, tables, semantic tags, multimedia, and APIs, the next important step is understanding the complete collection of HTML tags available to developers."
          },
 
          {
            type: "paragraph",
            content:
              "An HTML tag is a keyword enclosed within angle brackets (< >) that tells the browser how content should be structured, displayed, or interpreted."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>
 
<p>This is a paragraph.</p>
 
<img src="image.jpg" alt="Image">`
          },
 
          {
            type: "paragraph",
            content:
              "HTML provides dozens of tags, each designed for a specific purpose. Some tags define page structure, some format text, some create forms, and others embed multimedia or improve accessibility."
          },
 
          {
            type: "paragraph",
            content:
              "This chapter serves as a comprehensive HTML tag reference, helping you understand what each tag does, when to use it, and why it exists."
          }
 
        ]
      },
 
      {
        heading: "What Is an HTML Tag?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "An HTML tag is a predefined instruction that tells the browser how content should be handled."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<p>Hello World</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Here:"
          },
 
          {
            type: "list",
            items: [
              "<p> = Opening tag",
              "Hello World = Content",
              "</p> = Closing tag"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Together they form an HTML element."
          }
 
        ]
      },
 
      {
        heading: "Types of HTML Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML tags can be divided into several categories:"
          },
 
          {
            type: "cards",
            items: [
              {
                title: "1. Document Structure Tags",
                description: "Used to create the basic framework of a webpage."
              },
 
              {
                title: "2. Text Formatting Tags",
                description: "Used to display and emphasize text."
              },
 
              {
                title: "3. Semantic Tags",
                description: "Used to describe content meaning."
              },
 
              {
                title: "4. Multimedia Tags",
                description: "Used for images, audio, video, graphics, and embedded content."
              },
 
              {
                title: "5. Form Tags",
                description: "Used for user input."
              },
 
              {
                title: "6. Table Tags",
                description: "Used for tabular data."
              },
 
              {
                title: "7. Metadata Tags",
                description: "Used inside the document head."
              },
 
              {
                title: "8. Interactive Tags",
                description: "Used to create interactive user experiences."
              },
 
              {
                title: "9. Accessibility Tags",
                description: "Used to improve usability for assistive technologies."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "HTML Document Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "These tags create the foundation of every webpage."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<html>", "Root element of HTML document"],
              ["<head>", "Contains metadata"],
              ["<title>", "Defines page title"],
              ["<body>", "Contains visible content"],
              ["<meta>", "Stores metadata"],
              ["<link>", "Links external resources"],
              ["<style>", "Internal CSS"],
              ["<script>", "JavaScript"],
              ["<base>", "Defines base URL"]
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
            content: `<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
 
<body>
 
</body>
</html>`
          }
 
        ]
      },
 
      {
        heading: "Text Content Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "These tags display text content."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<h1> to <h6>", "Headings"],
              ["<p>", "Paragraph"],
              ["<br>", "Line break"],
              ["<hr>", "Horizontal line"],
              ["<pre>", "Preformatted text"]
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
            content: `<h1>Main Heading</h1>
 
<p>This is a paragraph.</p>
 
<hr>`
          }
 
        ]
      },
 
      {
        heading: "Text Formatting Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used to emphasize or modify text appearance."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<b>", "Bold text"],
              ["<strong>", "Important text"],
              ["<i>", "Italic text"],
              ["<em>", "Emphasized text"],
              ["<u>", "Underlined text"],
              ["<mark>", "Highlighted text"],
              ["<small>", "Smaller text"],
              ["<del>", "Deleted text"],
              ["<ins>", "Inserted text"],
              ["<sub>", "Subscript"],
              ["<sup>", "Superscript"]
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
<strong>Important</strong>
and
<em>emphasized</em>
text.
</p>`
          }
 
        ]
      },
 
      {
        heading: "Quotation Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for citations and quotations."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<blockquote>", "Long quotation"],
              ["<q>", "Inline quotation"],
              ["<cite>", "Citation"],
              ["<abbr>", "Abbreviation"],
              ["<address>", "Contact information"],
              ["<bdo>", "Text direction override"]
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
            content: `<blockquote>
Knowledge is power.
</blockquote>`
          }
 
        ]
      },
 
      {
        heading: "Link Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for navigation."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<a>", "Hyperlink"]
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
            content: `<a href="about.html">
About Us
</a>`
          }
 
        ]
      },
 
      {
        heading: "Image Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for displaying graphics."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<img>", "Image"],
              ["<figure>", "Figure container"],
              ["<figcaption>", "Figure caption"],
              ["<picture>", "Responsive images"],
              ["<source>", "Alternative media source"]
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
            content: `<figure>
<img src="photo.jpg" alt="Mountain">
<figcaption>Mountain View</figcaption>
</figure>`
          }
 
        ]
      },
 
      {
        heading: "List Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for organizing content."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<ul>", "Unordered list"],
              ["<ol>", "Ordered list"],
              ["<li>", "List item"],
              ["<dl>", "Description list"],
              ["<dt>", "Description term"],
              ["<dd>", "Description definition"]
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
            content: `<ul>
<li>HTML</li>
<li>CSS</li>
</ul>`
          }
 
        ]
      },
 
      {
        heading: "Table Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for tabular data."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<table>", "Table"],
              ["<caption>", "Table title"],
              ["<tr>", "Row"],
              ["<th>", "Header cell"],
              ["<td>", "Data cell"],
              ["<thead>", "Table header"],
              ["<tbody>", "Table body"],
              ["<tfoot>", "Table footer"],
              ["<colgroup>", "Column group"],
              ["<col>", "Column definition"]
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
            content: `<table>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
 
<tr>
<td>John</td>
<td>25</td>
</tr>
</table>`
          }
 
        ]
      },
 
      {
        heading: "Form Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for collecting user input."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<form>", "Form container"],
              ["<input>", "Input field"],
              ["<label>", "Input label"],
              ["<textarea>", "Multi-line text"],
              ["<button>", "Button"],
              ["<select>", "Dropdown"],
              ["<option>", "Dropdown option"],
              ["<optgroup>", "Option group"],
              ["<fieldset>", "Group fields"],
              ["<legend>", "Fieldset title"],
              ["<datalist>", "Suggestion list"],
              ["<output>", "Calculation result"],
              ["<meter>", "Measurement value"],
              ["<progress>", "Progress indicator"]
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
            content: `<form>
 
<label>Name</label>
 
<input type="text">
 
<button>
Submit
</button>
 
</form>`
          }
 
        ]
      },
 
      {
        heading: "Semantic Layout Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Introduced in HTML5. These describe page structure."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<header>", "Header section"],
              ["<nav>", "Navigation"],
              ["<main>", "Main content"],
              ["<section>", "Section"],
              ["<article>", "Independent content"],
              ["<aside>", "Sidebar content"],
              ["<footer>", "Footer"]
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
            content: `<header>
<nav></nav>
</header>
 
<main>
 
<section>
 
<article>
 
</article>
 
</section>
 
</main>
 
<footer>
 
</footer>`
          }
 
        ]
      },
 
      {
        heading: "Multimedia Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for audio and video."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<audio>", "Audio player"],
              ["<video>", "Video player"],
              ["<track>", "Subtitles"],
              ["<source>", "Media source"]
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
            content: `<video controls>
<source src="movie.mp4">
</video>`
          }
 
        ]
      },
 
      {
        heading: "Embedded Content Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for external content."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<iframe>", "Embedded webpage"],
              ["<embed>", "External application"],
              ["<object>", "Embedded object"],
              ["<param>", "Object parameter"]
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
            content: `<iframe
src="https://example.com">
</iframe>`
          }
 
        ]
      },
 
      {
        heading: "Graphics Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for drawing and scalable graphics."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<canvas>", "Drawing area"],
              ["<svg>", "Vector graphics"]
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
            content: `<canvas
width="300"
height="200">
</canvas>`
          }
 
        ]
      },
 
      {
        heading: "Interactive Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for user interaction."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<details>", "Expandable content"],
              ["<summary>", "Details heading"],
              ["<dialog>", "Dialog box"]
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
            content: `<details>
 
<summary>
More Info
</summary>
 
<p>Hidden content.</p>
 
</details>`
          }
 
        ]
      },
 
      {
        heading: "Programming-Related Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Useful for code display."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<code>", "Code snippet"],
              ["<kbd>", "Keyboard input"],
              ["<samp>", "Program output"],
              ["<var>", "Variable"],
              ["<pre>", "Preformatted content"]
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
            content: `<code>
console.log("Hello");
</code>`
          }
 
        ]
      },
 
      {
        heading: "Metadata and SEO Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Found inside head."
          },
 
          {
            type: "table",
            headers: [
              "Tag",
              "Purpose"
            ],
 
            rows: [
              ["<title>", "Page title"],
              ["<meta>", "Metadata"],
              ["<link>", "External resource"],
              ["<base>", "Base URL"]
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
            content: `<meta
name="description"
content="HTML Tutorial">`
          }
 
        ]
      },
 
      {
        heading: "Frequently Used Void Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Some tags do not require closing tags. These are called void elements."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<br>
<hr>
<img>
<input>
<meta>
<link>
<source>
<track>
<area>
<col>
<embed>
<wbr>`
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<img></img>`
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<img src="image.jpg" alt="Image">`
          }
 
        ]
      },
 
      {
        heading: "Obsolete HTML Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Older HTML versions included tags that are now deprecated."
          },
 
          {
            type: "paragraph",
            content:
              "Avoid using:"
          },
 
          {
            type: "table",
            headers: [
              "Deprecated Tag",
              "Modern Alternative"
            ],
 
            rows: [
              ["<font>", "CSS"],
              ["<center>", "CSS"],
              ["<big>", "CSS"],
              ["<strike>", "CSS or <del>"],
              ["<tt>", "CSS or <code>"],
              ["<frameset>", "CSS Layout + iframe"],
              ["<frame>", "iframe"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<center>
Welcome
</center>`
          },
 
          {
            type: "paragraph",
            content:
              "Good:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div style="text-align:center;">
Welcome
</div>`
          }
 
        ]
      },
 
      {
        heading: "HTML Tag Categories Used Most in Real Projects",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In modern websites, developers primarily use:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<html>
<head>
<body>
 
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
 
<h1> - <h6>
<p>
 
<a>
<img>
 
<ul>
<ol>
<li>
 
<form>
<input>
<textarea>
<select>
<button>
 
<div>
<span>
 
<table>
 
<video>
<audio>
 
<canvas>
<svg>
 
<script>
<link>
<meta>`
          },
 
          {
            type: "paragraph",
            content:
              "These tags account for the majority of real-world HTML development."
          }
 
        ]
      },
 
      {
        heading: "Lesser-Known but Powerful HTML Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many tutorials ignore these useful tags."
          },
 
          {
            type: "cards",
            items: [
              {
                title: "<details>",
                description: "Creates collapsible sections."
              },
 
              {
                title: "<summary>",
                description: "Heading for <details>."
              },
 
              {
                title: "<dialog>",
                description: "Creates native modal dialogs."
              },
 
              {
                title: "<mark>",
                description: "Highlights text."
              },
 
              {
                title: "<time>",
                description: "Represents dates and times."
              },
 
              {
                title: "<meter>",
                description: "Displays measurements."
              },
 
              {
                title: "<progress>",
                description: "Shows task progress."
              },
 
              {
                title: "<picture>",
                description: "Provides responsive images."
              },
 
              {
                title: "<template>",
                description: "Stores reusable HTML fragments."
              },
 
              {
                title: "<data>",
                description: "Associates machine-readable values with content."
              }
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These tags often improve semantics and accessibility without requiring JavaScript."
          }
 
        ]
      },
 
      {
        heading: "Professional Developer Perspective",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners memorize tags."
          },
 
          {
            type: "paragraph",
            content:
              "Professional developers understand:"
          },
 
          {
            type: "orderedList",
            items: [
              "Which tag best represents content.",
              "How browsers interpret tags.",
              "Accessibility implications.",
              "SEO implications.",
              "Semantic meaning."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="title">
HTML Tutorial
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Good:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>
HTML Tutorial
</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Both display text. Only one properly communicates meaning."
          }
 
        ]
      },
 
      {
        heading: "Complete HTML Learning Roadmap",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "After mastering HTML tags, you should be comfortable with:"
          },
 
          {
            type: "list",
            items: [
              "HTML Elements",
              "Attributes",
              "Headings",
              "Paragraphs",
              "Links",
              "Images",
              "Lists",
              "Tables",
              "Forms",
              "Semantic HTML",
              "Multimedia",
              "Responsive Design",
              "Accessibility",
              "SEO-Friendly HTML",
              "HTML APIs",
              "HTML Best Practices"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The next major step is learning CSS to control layout, styling, animations, responsiveness, and visual design."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML tags are the building blocks of every webpage. They define structure, content, semantics, multimedia, forms, tables, graphics, accessibility features, and interactions."
          },
 
          {
            type: "paragraph",
            content:
              "Modern HTML includes semantic tags such as <header>, <main>, <section>, and <article>, along with multimedia tags like <audio>, <video>, <canvas>, and <svg>."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding not only what each tag does but also when and why to use it is essential for writing professional, accessible, maintainable, and SEO-friendly websites."
          },
 
          {
            type: "paragraph",
            content:
              "Rather than memorizing every tag, focus on understanding the purpose and semantic meaning of each one, which is the approach followed by experienced web developers."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 This reference is going to be the page you come back to more than any other tutorial in this course, and that's exactly how it should be used. Nobody, not even senior engineers, holds the full HTML tag list in their head. What separates an experienced developer from a beginner isn't memorization, it's knowing that a tag exists for almost any structural need, and developing the instinct to pause and ask \"is there already an element for this?\" before reaching for a div. Bookmark this page, not to memorize it, but to build that instinct over time."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Global Attributes
============================= */
    "global-attributes": {
    title: "Global Attributes",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "As you have already learned, many HTML elements have their own specific attributes. For example, the <a> tag uses href, the <img> tag uses src, and the <input> tag uses type."
          },

          {
            type: "paragraph",
            content: "However, HTML also provides a special set of attributes called Global Attributes."
          },

          {
            type: "paragraph",
            content: "Global attributes are unique because they can be applied to almost every HTML element, regardless of its type. Whether you're working with a heading, paragraph, image, form element, table, or semantic tag, these attributes can usually be used everywhere."
          },

          {
            type: "paragraph",
            content: "Understanding global attributes is essential because they are heavily used in:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS styling",
              "JavaScript interaction",
              "Accessibility",
              "SEO",
              "Responsive design",
              "UI development",
              "Frameworks like React, Angular, and Vue"
            ]
          },

          {
            type: "paragraph",
            content: "In modern web development, global attributes are among the most frequently used features of HTML."
          }

        ]
      },

      {
        heading: "What Are Global Attributes?",

        blocks: [

          {
            type: "paragraph",
            content: "Global attributes are attributes that can be used on almost all HTML elements."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="title">Welcome</h1>

<p class="description">
This is a paragraph.
</p>

<div hidden>
This content is hidden.
</div>`
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "output",
            content: [
              "id",
              "class",
              "hidden"
            ]
          },

          {
            type: "paragraph",
            content: "are all global attributes."
          }

        ]
      },

      {
        heading: "Why Do Global Attributes Exist?",

        blocks: [

          {
            type: "paragraph",
            content: "Without global attributes, every HTML tag would need separate attributes for styling, identification, accessibility, and scripting."
          },

          {
            type: "paragraph",
            content: "Global attributes provide a common way to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Identify elements",
              "Style elements",
              "Add metadata",
              "Improve accessibility",
              "Enable JavaScript interaction",
              "Control browser behavior"
            ]
          }

        ]
      },

      {
        heading: "Syntax of Global Attributes",

        blocks: [

          {
            type: "paragraph",
            content: "Global attributes are written inside the opening tag."
          },

          {
            type: "code",
            language: "html",
            content: `<tagname attribute="value">
Content
</tagname>`
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="info">
Hello World
</p>`
          }

        ]
      },

      {
        heading: "Most Important Global Attributes",

        blocks: [

          {
            type: "paragraph",
            content: "The following global attributes are used most frequently in real-world development."
          },

          {
            type: "table",
            headers: [
              "Attribute",
              "Purpose"
            ],

            rows: [
              ["id", "Unique identifier"],
              ["class", "Group elements"],
              ["style", "Inline CSS"],
              ["title", "Tooltip text"],
              ["hidden", "Hide element"],
              ["lang", "Language declaration"],
              ["dir", "Text direction"],
              ["tabindex", "Keyboard navigation"],
              ["contenteditable", "Editable content"],
              ["draggable", "Enable drag and drop"],
              ["spellcheck", "Spell checking"],
              ["translate", "Translation control"],
              ["accesskey", "Keyboard shortcut"],
              ["data-*", "Custom data storage"]
            ]
          },

          {
            type: "paragraph",
            content: "Let's study each one in detail."
          }

        ]
      },

      {
        heading: "The id Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "The id attribute uniquely identifies an element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 id="mainHeading">
Welcome
</h1>`
          },

          {
            type: "paragraph",
            content: "Rules:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Must be unique on a page",
              "No two elements should share the same ID"
            ]
          },

          {
            type: "faq",
            items: [
              {
                question: "Uniqueness of ID",
                answer: "An ID can only be used once per HTML document.",
                examples: [
                  {
                    title: "Correct",
                    language: "html",
                    content: `<h1 id="title">HTML</h1>\n\n<p id="description">\nLearning HTML\n</p>`
                  },
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<h1 id="title">HTML</h1>\n\n<p id="title">\nLearning HTML\n</p>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "Uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS styling",
              "JavaScript targeting",
              "Internal page links"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#contact">
Contact Section
</a>`
          }

        ]
      },

      {
        heading: "The class Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "The class attribute groups elements together."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="info">
Paragraph One
</p>

<p class="info">
Paragraph Two
</p>`
          },

          {
            type: "paragraph",
            content: "Unlike IDs:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Classes can be reused",
              "Multiple elements may share the same class"
            ]
          },

          {
            type: "paragraph",
            content: "Used extensively in CSS:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="highlight">
Important text
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
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Multiple Classes"
          },

          {
            type: "paragraph",
            content: "An element can have multiple classes."
          },

          {
            type: "code",
            language: "html",
            content: `<p class="info important large">
Hello World
</p>`
          },

          {
            type: "paragraph",
            content: "This allows combining styles efficiently."
          }

        ]
      },

      {
        heading: "The style Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Used to apply inline CSS."
          },

          {
            type: "paragraph",
            content: "Example:"
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
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Red colored text."
            ]
          },

          {
            type: "paragraph",
            content: "Although useful for testing, professional developers generally prefer external CSS."
          }

        ]
      },

      {
        heading: "The title Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Provides extra information about an element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p title="This is a tooltip">
Hover over me
</p>`
          },

          {
            type: "paragraph",
            content: "When the user places the mouse over the element, a tooltip appears."
          }

        ]
      },

      {
        heading: "The hidden Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Completely hides an element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p hidden>
You cannot see me.
</p>`
          },

          {
            type: "paragraph",
            content: "The browser does not display the content."
          },

          {
            type: "paragraph",
            content: "Equivalent CSS:"
          },

          {
            type: "code",
            language: "css",
            content: `display: none;`
          }

        ]
      },

      {
        heading: "The lang Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Specifies the language of content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<html lang="en">`
          },

          {
            type: "paragraph",
            content: "Other examples:"
          },

          {
            type: "output",
            content: [
              "<html lang=\"fr\">",
              "French",
              "",
              "<html lang=\"es\">",
              "Spanish",
              "",
              "<html lang=\"hi\">",
              "Hindi"
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
              "Accessibility",
              "Search engines",
              "Translation tools",
              "Screen readers"
            ]
          }

        ]
      },

      {
        heading: "The dir Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Controls text direction."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p dir="rtl">
مرحبا
</p>`
          },

          {
            type: "paragraph",
            content: "RTL = Right to Left"
          },

          {
            type: "paragraph",
            content: "Values:"
          },

          {
            type: "table",
            headers: [
              "Value",
              "Meaning"
            ],

            rows: [
              ["ltr", "Left to Right"],
              ["rtl", "Right to Left"],
              ["auto", "Browser decides"]
            ]
          }

        ]
      },

      {
        heading: "The tabindex Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Controls keyboard navigation order."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input tabindex="1">

<input tabindex="2">

<button tabindex="3">
Submit
</button>`
          },

          {
            type: "paragraph",
            content: "When pressing Tab:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "First input",
              "Second input",
              "Button"
            ]
          }

        ]
      },

      {
        heading: "The accesskey Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Creates keyboard shortcuts."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button accesskey="s">
Save
</button>`
          },

          {
            type: "paragraph",
            content: "Users can activate the button using browser-specific shortcut combinations."
          }

        ]
      },

      {
        heading: "The contenteditable Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Allows users to edit content directly."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p contenteditable="true">
Edit this text.
</p>`
          },

          {
            type: "paragraph",
            content: "The paragraph becomes editable inside the browser."
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Rich text editors",
              "Notes applications",
              "CMS systems"
            ]
          }

        ]
      },

      {
        heading: "The spellcheck Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Enables or disables spell checking."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<textarea spellcheck="true">
</textarea>`
          },

          {
            type: "paragraph",
            content: "Disable:"
          },

          {
            type: "code",
            language: "html",
            content: `<textarea spellcheck="false">
</textarea>`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Code editors",
              "Password-like text",
              "Special identifiers"
            ]
          }

        ]
      },

      {
        heading: "The draggable Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Makes elements draggable."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img
src="image.jpg"
draggable="true">`
          },

          {
            type: "paragraph",
            content: "Used with the Drag and Drop API."
          },

          {
            type: "paragraph",
            content: "Values:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "draggable=\"true\"",
              "draggable=\"false\""
            ]
          }

        ]
      },

      {
        heading: "The translate Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "Controls automatic translation."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p translate="no">
OpenAI
</p>`
          },

          {
            type: "paragraph",
            content: "The browser should not translate this content."
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Brand names",
              "Product names",
              "Technical terms"
            ]
          }

        ]
      },

      {
        heading: "The data-* Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most powerful HTML features."
          },

          {
            type: "paragraph",
            content: "Allows storing custom information."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div
data-userid="101"
data-role="admin">
</div>`
          },

          {
            type: "paragraph",
            content: "HTML itself ignores these attributes."
          },

          {
            type: "paragraph",
            content: "JavaScript can access them:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const user =
element.dataset.userid;`
          },

          {
            type: "paragraph",
            content: "Used extensively in:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "JavaScript applications",
              "React projects",
              "Dynamic websites"
            ]
          }

        ]
      },

      {
        heading: "The autocapitalize, autocorrect, enterkeyhint, inputmode, and inert Attributes",

        blocks: [

          {
            type: "paragraph",
            content: "The autocapitalize Attribute: Controls automatic capitalization on mobile devices."
          },

          {
            type: "code",
            language: "html",
            content: `<input autocapitalize="words">`
          },

          {
            type: "paragraph",
            content: "Values: none, words, sentences, characters. Useful for mobile forms."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The autocorrect Attribute: Controls automatic text correction. Often used on mobile browsers."
          },

          {
            type: "code",
            language: "html",
            content: `<input autocorrect="on">`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The enterkeyhint Attribute: Changes the label on mobile keyboards. This improves mobile user experience."
          },

          {
            type: "code",
            language: "html",
            content: `<input enterkeyhint="search">`
          },

          {
            type: "paragraph",
            content: "Possible values: search, go, next, send, done."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The inputmode Attribute: Suggests which virtual keyboard should appear. Very useful for mobile-friendly forms."
          },

          {
            type: "code",
            language: "html",
            content: `<input inputmode="numeric">`
          },

          {
            type: "paragraph",
            content: "Possible keyboards: numeric, decimal, email, url, tel, search, text."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "The inert Attribute: A newer HTML feature. Makes an element non-interactive. Often used in modals and dialogs."
          },

          {
            type: "code",
            language: "html",
            content: `<div inert>
Content here
</div>`
          },

          {
            type: "paragraph",
            content: "Users cannot: Click it, Focus it, Interact with it."
          }

        ]
      },

      {
        heading: "Global Event Attributes",

        blocks: [

          {
            type: "paragraph",
            content: "HTML also supports global event attributes."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "onclick",
              "ondblclick",
              "onmouseover",
              "onmouseout",
              "onkeydown",
              "onkeyup",
              "onchange",
              "onsubmit"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button onclick="alert('Hello')">
Click
</button>`
          },

          {
            type: "paragraph",
            content: "Although modern developers often use JavaScript event listeners instead."
          }

        ]
      },

      {
        heading: "Accessibility-Related Global Attributes",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites heavily rely on accessibility attributes."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "aria-label",
              "aria-hidden",
              "aria-describedby",
              "aria-expanded",
              "role"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button
aria-label="Close Menu">
X
</button>`
          },

          {
            type: "paragraph",
            content: "These help screen readers understand content."
          }

        ]
      },

      {
        heading: "Global Attributes Used Most in Real Projects",

        blocks: [

          {
            type: "paragraph",
            content: "If you inspect professional websites, you'll constantly see:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "id",
              "class",
              "style",
              "title",
              "hidden",
              "lang",
              "tabindex",
              "data-*",
              "aria-*",
              "role"
            ]
          },

          {
            type: "paragraph",
            content: "These are the most commonly used global attributes."
          }

        ]
      },

      {
        heading: "Complete Example",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>

<html lang="en">

<head>
<title>Global Attributes</title>
</head>

<body>

<h1
id="heading"
class="title"
title="Main Heading">

HTML Global Attributes

</h1>

<p
contenteditable="true"
spellcheck="true">

You can edit this text.

</p>

<button
accesskey="s"
data-action="save">

Save

</button>

</body>
</html>`
          },

          {
            type: "paragraph",
            content: "This example demonstrates several global attributes working together."
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
                question: "Using duplicate IDs",
                answer: "An ID must be absolutely unique across the entire document.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<p id="info"></p>\n\n<div id="info"></div>`
                  }
                ]
              },
              {
                question: "Overusing inline styles",
                answer: "Prefer CSS classes over the style attribute to keep HTML clean.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<p style="color:red;">`
                  }
                ]
              },
              {
                question: "Forgetting lang attribute",
                answer: "Always specify the language for screen readers and search engines.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<html>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<html lang="en">`
                  }
                ]
              },
              {
                question: "Using data-* when class is sufficient",
                answer: "If styling is the only goal, use a class instead of a custom data attribute.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<div data-color="red">`
                  },
                  {
                    title: "Use",
                    language: "html",
                    content: `<div class="red">`
                  }
                ]
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
            content: "All major global attributes are supported by:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Firefox",
              "Edge",
              "Safari",
              "Opera"
            ]
          },

          {
            type: "paragraph",
            content: "Newer attributes like: inert, enterkeyhint, autocapitalize may have varying support in older browsers but are widely supported in modern browsers."
          }

        ]
      },

      {
        heading: "Professional Developer Perspective",

        blocks: [

          {
            type: "paragraph",
            content: "Most beginners think HTML is only about tags."
          },

          {
            type: "paragraph",
            content: "Professional developers know that attributes give tags their power."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>
Save
</button>`
          },

          {
            type: "paragraph",
            content: "is just a button."
          },

          {
            type: "paragraph",
            content: "But:"
          },

          {
            type: "code",
            language: "html",
            content: `<button
id="saveBtn"
class="primary"
aria-label="Save document"
data-action="save">
Save
</button>`
          },

          {
            type: "paragraph",
            content: "is a button that:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Can be styled",
              "Can be targeted by JavaScript",
              "Is accessible",
              "Stores custom data",
              "Integrates with application logic"
            ]
          },

          {
            type: "paragraph",
            content: "That is why global attributes are among the most important concepts in modern HTML."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "Global attributes are special attributes that can be used on nearly all HTML elements. They provide a universal way to identify elements (id), group elements (class), apply styles (style), improve accessibility (aria-*, role), enable user interaction (contenteditable, draggable), manage keyboard navigation (tabindex, accesskey), control language settings (lang, dir), and store custom information (data-*). Modern web applications rely heavily on global attributes because they connect HTML with CSS, JavaScript, accessibility tools, search engines, and browser features. Mastering global attributes is essential for building professional, maintainable, accessible, and interactive websites."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 While Global Attributes can technically be applied to any HTML element, be aware that they don't always change the visual presentation immediately. Attributes like `hidden` or `dir` will have an instant visual effect, whereas attributes like `data-*`, `id`, or `class` simply attach invisible metadata to the DOM node, relying on your CSS or JavaScript to actually 'do' something with that data."
          }

        ]
      }
    ]
  },




  /* ===========================
    Third Topic : HTML Entities
============================= */
    "html-entities": {
    title: "HTML Entities",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "While writing HTML, you may sometimes need to display characters that have a special meaning in HTML itself. For example, how would you display the < symbol without the browser thinking you're starting an HTML tag?"
          },

          {
            type: "paragraph",
            content: "Similarly, what if you want to display symbols like:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "© (Copyright)",
              "® (Registered Trademark)",
              "€ (Euro)",
              "£ (Pound)",
              "♥ (Heart)",
              "→ (Arrow)",
              "Non-breaking spaces"
            ]
          },

          {
            type: "paragraph",
            content: "This is where HTML Entities come into play."
          },

          {
            type: "paragraph",
            content: "HTML entities allow you to display reserved characters, special symbols, emojis, mathematical operators, currency symbols, and many other characters that might otherwise be interpreted incorrectly by the browser."
          },

          {
            type: "paragraph",
            content: "Understanding entities is important because they improve:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Content display",
              "Typography",
              "Accessibility",
              "Internationalization",
              "Special symbol support",
              "Cross-browser consistency"
            ]
          }

        ]
      },

      {
        heading: "What Are HTML Entities?",

        blocks: [

          {
            type: "paragraph",
            content: "An HTML entity is a special code used to represent a character in HTML."
          },

          {
            type: "paragraph",
            content: "Instead of writing the actual character, you write its entity code."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&lt;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "<"
            ]
          },

          {
            type: "paragraph",
            content: "The browser converts the entity into the actual character when rendering the page."
          }

        ]
      },

      {
        heading: "Why Do We Need HTML Entities?",

        blocks: [

          {
            type: "paragraph",
            content: "Some characters have special meanings in HTML."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>5 < 10</p>`
          },

          {
            type: "paragraph",
            content: "The browser may think < 10 starts an HTML tag, causing unexpected behavior."
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>5 &lt; 10</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "5 < 10"
            ]
          },

          {
            type: "paragraph",
            content: "Entities solve this problem."
          }

        ]
      },

      {
        heading: "Structure of an HTML Entity",

        blocks: [

          {
            type: "paragraph",
            content: "Entities generally have three parts:"
          },

          {
            type: "output",
            content: [
              "&entityName;",
              "or",
              "&#entityNumber;",
              "or",
              "&#xhexadecimalNumber;"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "&lt;",
              "&#60;",
              "&#x3C;"
            ]
          },

          {
            type: "paragraph",
            content: "All three produce:"
          },

          {
            type: "output",
            content: [
              "<"
            ]
          }

        ]
      },

      {
        heading: "Types of HTML Entities",

        blocks: [

          {
            type: "paragraph",
            content: "HTML entities are commonly categorized into:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Named Entities",
              "Numeric Entities",
              "Hexadecimal Entities"
            ]
          }

        ]
      },

      {
        heading: "Named Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Named entities use a descriptive name."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&lt;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "<"
            ]
          },

          {
            type: "paragraph",
            content: "Another example:"
          },

          {
            type: "code",
            language: "html",
            content: `&copy;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "These are easier for humans to read."
          }

        ]
      },

      {
        heading: "Numeric Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Numeric entities use Unicode numbers."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#169;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Another example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#8364;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "€"
            ]
          }

        ]
      },

      {
        heading: "Hexadecimal Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Hexadecimal entities use Unicode hexadecimal values."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#x00A9;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#x20AC;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "€"
            ]
          }

        ]
      },

      {
        heading: "Reserved Characters in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "The most important use of entities is displaying reserved characters."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Less Than Symbol (<)"
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&lt;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "<"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Greater Than Symbol (>)"
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&gt;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              ">"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Ampersand (&)"
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&amp;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "&"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Double Quote (\")"
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&quot;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "\""
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Single Quote (')"
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&apos;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "'"
            ]
          }

        ]
      },

      {
        heading: "Example of Reserved Characters",

        blocks: [

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>
5 &lt; 10
</p>

<p>
10 &gt; 5
</p>

<p>
Tom &amp; Jerry
</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "5 < 10",
              "",
              "10 > 5",
              "",
              "Tom & Jerry"
            ]
          }

        ]
      },

      {
        heading: "Non-Breaking Space ( )",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most commonly used entities."
          },

          {
            type: "paragraph",
            content: "Normally, browsers collapse multiple spaces:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Hello     World</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "To preserve extra spaces:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>
Hello&nbsp;&nbsp;&nbsp;World
</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Hello   World"
            ]
          }

        ]
      },

      {
        heading: "Why Use Non-Breaking Spaces?",

        blocks: [

          {
            type: "paragraph",
            content: "They prevent automatic line breaks."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Mr.&nbsp;John"
            ]
          },

          {
            type: "paragraph",
            content: "The browser keeps both words together on the same line."
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Names",
              "Units",
              "Prices",
              "Dates"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "100&nbsp;kg"
            ]
          }

        ]
      },

      {
        heading: "Copyright Symbol",

        blocks: [

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&copy;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>
Copyright &copy; 2026
</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Copyright © 2026"
            ]
          }

        ]
      },

      {
        heading: "Registered Trademark Symbol",

        blocks: [

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&reg;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "®"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "OpenAI&reg;"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "OpenAI®"
            ]
          }

        ]
      },

      {
        heading: "Trademark Symbol",

        blocks: [

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "code",
            language: "html",
            content: `&trade;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "™"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "ChatBot&trade;"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "ChatBot™"
            ]
          }

        ]
      },

      {
        heading: "Currency Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Dollar"
          },

          {
            type: "code",
            language: "html",
            content: `&#36;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "$"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Euro"
          },

          {
            type: "code",
            language: "html",
            content: `&euro;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "€"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Pound"
          },

          {
            type: "code",
            language: "html",
            content: `&pound;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "£"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Yen"
          },

          {
            type: "code",
            language: "html",
            content: `&yen;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "¥"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Indian Rupee"
          },

          {
            type: "code",
            language: "html",
            content: `&#8377;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "₹"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "&#8377;500"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "₹500"
            ]
          }

        ]
      },

      {
        heading: "Mathematical Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Plus-Minus"
          },

          {
            type: "code",
            language: "html",
            content: `&plusmn;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "±"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Multiplication"
          },

          {
            type: "code",
            language: "html",
            content: `&times;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "×"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Division"
          },

          {
            type: "code",
            language: "html",
            content: `&divide;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "÷"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Infinity"
          },

          {
            type: "code",
            language: "html",
            content: `&infin;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "∞"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Not Equal"
          },

          {
            type: "code",
            language: "html",
            content: `&ne;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "≠"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Approximately Equal"
          },

          {
            type: "code",
            language: "html",
            content: `&asymp;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "≈"
            ]
          }

        ]
      },

      {
        heading: "Arrow Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Left Arrow:"
          },

          {
            type: "code",
            language: "html",
            content: `&larr;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "←"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Right Arrow:"
          },

          {
            type: "code",
            language: "html",
            content: `&rarr;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "→"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Up Arrow:"
          },

          {
            type: "code",
            language: "html",
            content: `&uarr;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "↑"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Down Arrow:"
          },

          {
            type: "code",
            language: "html",
            content: `&darr;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "↓"
            ]
          }

        ]
      },

      {
        heading: "Card and Heart Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Heart:"
          },

          {
            type: "code",
            language: "html",
            content: `&hearts;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "♥"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Diamond:"
          },

          {
            type: "code",
            language: "html",
            content: `&diams;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "♦"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Club:"
          },

          {
            type: "code",
            language: "html",
            content: `&clubs;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "♣"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Spade:"
          },

          {
            type: "code",
            language: "html",
            content: `&spades;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "♠"
            ]
          }

        ]
      },

      {
        heading: "Greek Letters",

        blocks: [

          {
            type: "paragraph",
            content: "Alpha:"
          },

          {
            type: "code",
            language: "html",
            content: `&alpha;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "α"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Beta:"
          },

          {
            type: "code",
            language: "html",
            content: `&beta;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "β"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Gamma:"
          },

          {
            type: "code",
            language: "html",
            content: `&gamma;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "γ"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Pi:"
          },

          {
            type: "code",
            language: "html",
            content: `&pi;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "π"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Omega:"
          },

          {
            type: "code",
            language: "html",
            content: `&omega;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "ω"
            ]
          }

        ]
      },

      {
        heading: "Quotation Mark Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Left Double Quote:"
          },

          {
            type: "code",
            language: "html",
            content: `&ldquo;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "“"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Right Double Quote:"
          },

          {
            type: "code",
            language: "html",
            content: `&rdquo;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "”"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Left Single Quote:"
          },

          {
            type: "code",
            language: "html",
            content: `&lsquo;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "‘"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Right Single Quote:"
          },

          {
            type: "code",
            language: "html",
            content: `&rsquo;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "’"
            ]
          },

          {
            type: "paragraph",
            content: "These provide professional typography compared to plain keyboard quotes."
          }

        ]
      },

      {
        heading: "HTML Entities vs Unicode Characters",

        blocks: [

          {
            type: "paragraph",
            content: "Instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `&copy;`
          },

          {
            type: "paragraph",
            content: "You can directly write:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Both work in modern browsers."
          },

          {
            type: "paragraph",
            content: "So why use entities?"
          },

          {
            type: "paragraph",
            content: "Advantages:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Clear meaning",
              "Easier to remember",
              "Safer in some environments",
              "Useful for reserved characters"
            ]
          },

          {
            type: "paragraph",
            content: "For most special symbols, modern developers often use Unicode directly."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>© 2026</p>`
          },

          {
            type: "paragraph",
            content: "works perfectly."
          }

        ]
      },

      {
        heading: "Using Emojis in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Because HTML supports Unicode, emojis can be inserted using numeric entities."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128512;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128640;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "🚀"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128151;`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "💗"
            ]
          },

          {
            type: "paragraph",
            content: "Modern websites frequently use emoji entities."
          }

        ]
      },

      {
        heading: "Finding Entity Codes",

        blocks: [

          {
            type: "paragraph",
            content: "You can find entity codes from:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML entity reference charts",
              "Unicode tables",
              "Browser documentation",
              "Online entity generators"
            ]
          },

          {
            type: "paragraph",
            content: "Popular symbols often have:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Named entity",
              "Numeric entity",
              "Hexadecimal entity"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "table",
            headers: [
              "Symbol",
              "Named",
              "Numeric"
            ],

            rows: [
              ["<", "&lt;", "&#60;"],
              [">", "&gt;", "&#62;"],
              ["©", "&copy;", "&#169;"],
              ["®", "&reg;", "&#174;"]
            ]
          }

        ]
      },

      {
        heading: "Entity Encoding and Security",

        blocks: [

          {
            type: "paragraph",
            content: "Entities can help display user-generated content safely."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "paragraph",
            content: "User enters:"
          },

          {
            type: "code",
            language: "html",
            content: `<script>alert("hack")</script>`
          },

          {
            type: "paragraph",
            content: "Encoded version:"
          },

          {
            type: "code",
            language: "html",
            content: `&lt;script&gt;
alert("hack")
&lt;/script&gt;`
          },

          {
            type: "paragraph",
            content: "Displayed as text:"
          },

          {
            type: "output",
            content: [
              "<script>alert(\"hack\")</script>"
            ]
          },

          {
            type: "paragraph",
            content: "instead of executing."
          },

          {
            type: "paragraph",
            content: "This concept is called HTML escaping and is a fundamental security practice."
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
                question: "Forgetting the Semicolon",
                answer: "Entities require a semicolon at the end to parse correctly.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `&lt`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `&lt;`
                  }
                ]
              },
              {
                question: "Using Raw Reserved Characters",
                answer: "Angle brackets can break layout if they look like HTML tags.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<p>5 < 10</p>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<p>5 &lt; 10</p>`
                  }
                ]
              },
              {
                question: "Using Too Many Non-Breaking Spaces",
                answer: "Using `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` for layout spacing is bad practice. Use CSS margins and padding instead."
              },
              {
                question: "Using Entities for Everything",
                answer: "Entities should only be used when necessary for reserved characters or special symbols.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `&#72;&#101;&#108;&#108;&#111;`
                  },
                  {
                    title: "Instead of",
                    language: "text",
                    content: `Hello`
                  }
                ]
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
              "Use entities for reserved HTML characters: &lt;, &gt;, &amp;",
              "Use Unicode when readability is better: ©, ₹, ✓",
              "Use &nbsp; only when preventing line breaks",
              "Prefer CSS for spacing",
              "Always include the semicolon",
              "Escape user-generated HTML content"
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
            content: `<!DOCTYPE html>
<html>
<head>
<title>HTML Entities Example</title>
</head>

<body>

<h1>
HTML Entities &amp; Symbols
</h1>

<p>
5 &lt; 10 and 10 &gt; 5
</p>

<p>
Price: &#8377;999
</p>

<p>
Copyright &copy; 2026
</p>

<p>
OpenAI&reg;
</p>

<p>
I &hearts; HTML
</p>

<p>
Math: 10 &times; 5 = 50
</p>

<p>
Direction: Go &rarr;
</p>

</body>
</html>`
          }

        ]
      },

      {
        heading: "Professional Developer Perspective",

        blocks: [

          {
            type: "paragraph",
            content: "Most beginner tutorials teach entities only as a way to display symbols. In professional development, entities serve three much larger purposes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Displaying reserved HTML characters safely",
              "Supporting international and special characters",
              "Preventing HTML injection through proper escaping"
            ]
          },

          {
            type: "paragraph",
            content: "Modern developers may use Unicode directly for many symbols, but entities remain essential whenever HTML syntax could conflict with displayed content."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "HTML Entities are special codes used to display reserved characters, symbols, currency signs, mathematical operators, arrows, emojis, and many other Unicode characters in HTML. They begin with & and end with ;, and can be written as named entities (&copy;), numeric entities (&#169;), or hexadecimal entities (&#x00A9;). Entities are particularly important for displaying reserved HTML characters like <, >, and &, preserving spaces with &nbsp;, improving typography, supporting international content, and safely rendering user-generated text. Mastering HTML entities helps you create more professional, accessible, secure, and standards-compliant web pages."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 While `&nbsp;` is incredibly common for keeping words together, modern CSS offers the `white-space: nowrap;` property. Professional developers often prefer wrapping a phrase in a `<span>` and applying CSS rather than stringing together multiple `&nbsp;` entities, as it keeps the HTML markup much cleaner."
          }

        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : HTML Symbols
============================= */
    "html-symbols": {
    title: "HTML Symbols",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Modern web pages often display much more than plain text. Websites use currency symbols, mathematical operators, arrows, emojis, trademarks, card suits, scientific notation, and many other special characters to communicate information effectively."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "₹ (Indian Rupee)",
              "€ (Euro)",
              "© (Copyright)",
              "™ (Trademark)",
              "✓ (Check Mark)",
              "★ (Star)",
              "→ (Arrow)",
              "∞ (Infinity)",
              "π (Pi)"
            ]
          },

          {
            type: "paragraph",
            content: "These characters are known as HTML Symbols."
          },

          {
            type: "paragraph",
            content: "HTML provides multiple ways to display symbols safely and consistently across browsers and devices."
          },

          {
            type: "paragraph",
            content: "Understanding symbols is important because they help create:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Professional websites",
              "Financial applications",
              "Scientific calculators",
              "Educational platforms",
              "E-commerce websites",
              "User-friendly interfaces"
            ]
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn everything about HTML symbols—from basic usage to professional best practices."
          }

        ]
      },

      {
        heading: "What Are HTML Symbols?",

        blocks: [

          {
            type: "paragraph",
            content: "HTML symbols are special characters that are not typically available directly on a standard keyboard but can be displayed on a webpage using:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Unicode characters",
              "HTML entity names",
              "Numeric entity codes",
              "Hexadecimal entity codes"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>&copy; 2026</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "© 2026"
            ]
          },

          {
            type: "paragraph",
            content: "The browser converts the symbol code into the actual character."
          }

        ]
      },

      {
        heading: "HTML Symbols vs HTML Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners confuse symbols and entities."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HTML Entity"
          },

          {
            type: "paragraph",
            content: "An entity is the code used to represent a character."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "&copy;"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HTML Symbol"
          },

          {
            type: "paragraph",
            content: "The actual displayed character:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "In simple words:"
          },

          {
            type: "table",
            headers: [
              "Entity",
              "Symbol"
            ],

            rows: [
              ["&copy;", "©"],
              ["&euro;", "€"],
              ["&hearts;", "♥"],
              ["&trade;", "™"]
            ]
          },

          {
            type: "paragraph",
            content: "Entities are the codes. Symbols are the visible results."
          }

        ]
      },

      {
        heading: "Why Are HTML Symbols Important?",

        blocks: [

          {
            type: "paragraph",
            content: "Symbols improve readability and professionalism."
          },

          {
            type: "paragraph",
            content: "Without symbols:"
          },

          {
            type: "output",
            content: [
              "Price: Rs 499"
            ]
          },

          {
            type: "paragraph",
            content: "With symbols:"
          },

          {
            type: "output",
            content: [
              "Price: ₹499"
            ]
          },

          {
            type: "paragraph",
            content: "Much cleaner and easier to understand."
          },

          {
            type: "paragraph",
            content: "Common uses include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Currency values",
              "Mathematical formulas",
              "Copyright notices",
              "Navigation arrows",
              "Ratings and reviews",
              "Scientific content",
              "User interface icons"
            ]
          }

        ]
      },

      {
        heading: "Ways to Display Symbols in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "There are three primary methods."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 1: Named Entity"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "&copy;"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 2: Numeric Entity"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "&#169;"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 3: Hexadecimal Entity"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "&#x00A9;"
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "All three produce the same result."
          }

        ]
      },

      {
        heading: "Currency Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Currency symbols are among the most commonly used HTML symbols."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Indian Rupee"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#8377;`
          },

          {
            type: "paragraph",
            content: "Output: ₹"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Price: &#8377;499</p>`
          },

          {
            type: "paragraph",
            content: "Output: Price: ₹499"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Dollar"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#36;`
          },

          {
            type: "paragraph",
            content: "Output: $"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Euro"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&euro;`
          },

          {
            type: "paragraph",
            content: "Output: €"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Pound"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&pound;`
          },

          {
            type: "paragraph",
            content: "Output: £"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Yen"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&yen;`
          },

          {
            type: "paragraph",
            content: "Output: ¥"
          }

        ]
      },

      {
        heading: "Copyright and Trademark Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "These symbols are frequently used in website footers."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Copyright"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&copy;`
          },

          {
            type: "paragraph",
            content: "Output: ©"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>© 2026 My Company</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Registered Trademark"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&reg;`
          },

          {
            type: "paragraph",
            content: "Output: ®"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Trademark"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&trade;`
          },

          {
            type: "paragraph",
            content: "Output: ™"
          }

        ]
      },

      {
        heading: "Mathematical Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Math-related websites and educational platforms frequently use these symbols."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Plus Minus"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&plusmn;`
          },

          {
            type: "paragraph",
            content: "Output: ±"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Multiplication"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&times;`
          },

          {
            type: "paragraph",
            content: "Output: ×"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Division"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&divide;`
          },

          {
            type: "paragraph",
            content: "Output: ÷"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Infinity"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&infin;`
          },

          {
            type: "paragraph",
            content: "Output: ∞"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Approximately Equal"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&asymp;`
          },

          {
            type: "paragraph",
            content: "Output: ≈"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Not Equal"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&ne;`
          },

          {
            type: "paragraph",
            content: "Output: ≠"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Less Than or Equal"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&le;`
          },

          {
            type: "paragraph",
            content: "Output: ≤"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Greater Than or Equal"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&ge;`
          },

          {
            type: "paragraph",
            content: "Output: ≥"
          }

        ]
      },

      {
        heading: "Greek Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Frequently used in mathematics, engineering, and science."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Alpha"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&alpha;`
          },

          {
            type: "paragraph",
            content: "Output: α"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Beta"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&beta;`
          },

          {
            type: "paragraph",
            content: "Output: β"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Gamma"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&gamma;`
          },

          {
            type: "paragraph",
            content: "Output: γ"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Delta"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&delta;`
          },

          {
            type: "paragraph",
            content: "Output: δ"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Pi"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&pi;`
          },

          {
            type: "paragraph",
            content: "Output: π"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Omega"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&omega;`
          },

          {
            type: "paragraph",
            content: "Output: ω"
          }

        ]
      },

      {
        heading: "Arrow Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Arrows are extremely popular in navigation and UI design."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Left Arrow"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&larr;`
          },

          {
            type: "paragraph",
            content: "Output: ←"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Right Arrow"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&rarr;`
          },

          {
            type: "paragraph",
            content: "Output: →"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Up Arrow"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&uarr;`
          },

          {
            type: "paragraph",
            content: "Output: ↑"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Down Arrow"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&darr;`
          },

          {
            type: "paragraph",
            content: "Output: ↓"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Double Arrow"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&hArr;`
          },

          {
            type: "paragraph",
            content: "Output: ⇔"
          }

        ]
      },

      {
        heading: "Check Marks and Crosses",

        blocks: [

          {
            type: "paragraph",
            content: "Often used in feature comparison tables."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Check Mark"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#10003;`
          },

          {
            type: "paragraph",
            content: "Output: ✓"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Heavy Check Mark"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#10004;`
          },

          {
            type: "paragraph",
            content: "Output: ✔"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Cross Mark"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#10006;`
          },

          {
            type: "paragraph",
            content: "Output: ✖"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "✓ Available",
              "✖ Not Available"
            ]
          }

        ]
      },

      {
        heading: "Star Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Used for ratings and reviews."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Filled Star"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#9733;`
          },

          {
            type: "paragraph",
            content: "Output: ★"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Empty Star"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&#9734;`
          },

          {
            type: "paragraph",
            content: "Output: ☆"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "★★★★★"
            ]
          }

        ]
      },

      {
        heading: "Card Suit Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Used in gaming websites and entertainment applications."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Heart"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&hearts;`
          },

          {
            type: "paragraph",
            content: "Output: ♥"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Diamond"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&diams;`
          },

          {
            type: "paragraph",
            content: "Output: ♦"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Club"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&clubs;`
          },

          {
            type: "paragraph",
            content: "Output: ♣"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Spade"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `&spades;`
          },

          {
            type: "paragraph",
            content: "Output: ♠"
          }

        ]
      },

      {
        heading: "Weather Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Modern Unicode includes weather-related symbols."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "code",
            language: "html",
            content: `&#9728;`
          },

          {
            type: "paragraph",
            content: "Output: ☀"
          },

          {
            type: "code",
            language: "html",
            content: `&#9729;`
          },

          {
            type: "paragraph",
            content: "Output: ☁"
          },

          {
            type: "code",
            language: "html",
            content: `&#9730;`
          },

          {
            type: "paragraph",
            content: "Output: ☂"
          }

        ]
      },

      {
        heading: "Phone and Communication Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#9742;`
          },

          {
            type: "paragraph",
            content: "Output: ☎"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#9993;`
          },

          {
            type: "paragraph",
            content: "Output: ✉"
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Contact pages",
              "Business websites",
              "Portfolios"
            ]
          }

        ]
      },

      {
        heading: "Emoji Symbols in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Since emojis are Unicode characters, they can be inserted using numeric codes."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128512;`
          },

          {
            type: "paragraph",
            content: "Output: 😀"
          },

          {
            type: "paragraph",
            content: "Rocket:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128640;`
          },

          {
            type: "paragraph",
            content: "Output: 🚀"
          },

          {
            type: "paragraph",
            content: "Heart:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128151;`
          },

          {
            type: "paragraph",
            content: "Output: 💗"
          },

          {
            type: "paragraph",
            content: "Fire:"
          },

          {
            type: "code",
            language: "html",
            content: `&#128293;`
          },

          {
            type: "paragraph",
            content: "Output: 🔥"
          }

        ]
      },

      {
        heading: "Using Unicode Directly",

        blocks: [

          {
            type: "paragraph",
            content: "Modern HTML supports UTF-8 by default."
          },

          {
            type: "paragraph",
            content: "Instead of:"
          },

          {
            type: "output",
            content: [
              "&copy;"
            ]
          },

          {
            type: "paragraph",
            content: "You can directly write:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Or:"
          },

          {
            type: "output",
            content: [
              "₹"
            ]
          },

          {
            type: "paragraph",
            content: "Or:"
          },

          {
            type: "output",
            content: [
              "✓"
            ]
          },

          {
            type: "paragraph",
            content: "This is increasingly common in modern development."
          }

        ]
      },

      {
        heading: "UTF-8 and Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "To ensure symbols display correctly, include UTF-8 encoding:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "Without UTF-8, some symbols may appear incorrectly."
          },

          {
            type: "paragraph",
            content: "Always include this tag inside <head>."
          }

        ]
      },

      {
        heading: "Symbols vs Icon Libraries",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners use symbols and icons interchangeably."
          },

          {
            type: "paragraph",
            content: "They are different."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HTML Symbol"
          },

          {
            type: "output",
            content: [
              "✓"
            ]
          },

          {
            type: "paragraph",
            content: "Simple text character."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Icon Library"
          },

          {
            type: "code",
            language: "html",
            content: `<i class="fa fa-check"></i>`
          },

          {
            type: "paragraph",
            content: "Uses external resources such as:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Font Awesome",
              "Bootstrap Icons",
              "Material Icons"
            ]
          },

          {
            type: "paragraph",
            content: "Use symbols for simple requirements."
          },

          {
            type: "paragraph",
            content: "Use icon libraries for advanced UI designs."
          }

        ]
      },

      {
        heading: "Real-World Example",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>HTML Symbols</title>
</head>

<body>

<h1>HTML Symbols Example</h1>

<p>Price: ₹999</p>

<p>Copyright © 2026</p>

<p>OpenAI™</p>

<p>Rating: ★★★★★</p>

<p>Success ✓</p>

<p>Go Next →</p>

<p>Infinity ∞</p>

<p>I ♥ HTML</p>

<p>Launch 🚀</p>

</body>

</html>`
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
                question: "Forgetting UTF-8",
                answer: "Without setting charset to UTF-8, many symbols will display as weird broken characters (like 'â‚¬' instead of '€').",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<head>\n</head>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<head>\n<meta charset="UTF-8">\n</head>`
                  }
                ]
              },
              {
                question: "Confusing Entities with Symbols",
                answer: "The entity is the code you type; the symbol is the visual result.",
                examples: [
                  {
                    title: "Entity",
                    language: "text",
                    content: `&copy;`
                  },
                  {
                    title: "Symbol",
                    language: "text",
                    content: `©`
                  }
                ]
              },
              {
                question: "Using Images for Simple Symbols",
                answer: "Using an `<img src=\"star.png\">` is heavier and harder to style than just using the text character `★`."
              },
              {
                question: "Not Testing Across Devices",
                answer: "Some rare Unicode symbols or modern emojis may render differently (or as blank boxes) depending on the OS, browser, or installed fonts. Always test important symbols."
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
              "Use UTF-8 encoding: `<meta charset=\"UTF-8\">`",
              "Prefer Unicode for common symbols: ©, ₹, ✓, ★",
              "Use entities for reserved HTML characters: &lt;, &gt;, &amp;",
              "Use icon libraries for complex interfaces",
              "Test symbol rendering on multiple devices",
              "Avoid excessive decorative symbols"
            ]
          }

        ]
      },

      {
        heading: "Professional Developer Perspective",

        blocks: [

          {
            type: "paragraph",
            content: "Most beginner tutorials only list popular symbol codes. However, professional developers think about symbols from a broader perspective:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Typography – Symbols improve readability and visual communication.",
              "Accessibility – Symbols should not replace meaningful text when conveying critical information.",
              "Internationalization – Different regions use different currencies and notation systems.",
              "Performance – Unicode symbols are lighter than image-based icons.",
              "User Experience – Well-chosen symbols make interfaces easier to understand instantly."
            ]
          },

          {
            type: "paragraph",
            content: "Modern websites often combine Unicode symbols, emojis, and icon libraries to create rich user interfaces while maintaining performance and accessibility."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "HTML Symbols are special characters used to display currency signs, mathematical operators, arrows, stars, card suits, trademarks, emojis, and many other visual characters on web pages. Symbols can be inserted using named entities (&copy;), numeric entities (&#169;), hexadecimal entities (&#x00A9;), or directly through Unicode characters. They are widely used in websites, applications, dashboards, educational platforms, and user interfaces. Understanding HTML symbols helps you create professional, readable, visually appealing, and internationally compatible web pages."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 While Unicode symbols like `★` or `→` are just text characters, you can style them exactly like normal text using CSS! You can change their `color`, `font-size`, `text-shadow`, and even apply `hover` effects. This makes them incredibly powerful and lightweight alternatives to image files for simple UI elements."
          }

        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : HTML Emojis
============================= */
    "html-emojis": {
    title: "HTML Emojis",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Emojis have become a universal language on the internet. From social media posts and chat applications to websites and dashboards, emojis help convey emotions, actions, objects, and ideas quickly and visually."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "😀 😎 🚀 ❤️ 🎉 📚 💻 🌍 🔥"
            ]
          },

          {
            type: "paragraph",
            content: "In HTML, emojis can be displayed just like normal text because modern web browsers support Unicode, the global standard for character encoding."
          },

          {
            type: "paragraph",
            content: "This means you can add emojis to your webpages without installing any special libraries, images, or plugins."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn everything about HTML emojis, including how they work, how to insert them, Unicode encoding, browser support, accessibility considerations, performance benefits, and professional best practices."
          }

        ]
      },

      {
        heading: "What Are HTML Emojis?",

        blocks: [

          {
            type: "paragraph",
            content: "An emoji is a Unicode character designed to represent:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Facial expressions 😀",
              "Emotions ❤️",
              "Animals 🐶",
              "Food 🍕",
              "Activities ⚽",
              "Objects 💻",
              "Transportation 🚗",
              "Nature 🌳",
              "Symbols ⭐"
            ]
          },

          {
            type: "paragraph",
            content: "HTML itself does not create emojis."
          },

          {
            type: "paragraph",
            content: "Instead, HTML displays Unicode emoji characters supported by the operating system and browser."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Hello 😀</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Hello 😀"
            ]
          }

        ]
      },

      {
        heading: "Why Emojis Work in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Modern browsers use Unicode character encoding."
          },

          {
            type: "paragraph",
            content: "Unicode assigns a unique code point to every character."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Unicode"
            ],

            rows: [
              ["😀", "U+1F600"],
              ["❤️", "U+2764"],
              ["🚀", "U+1F680"],
              ["🎉", "U+1F389"]
            ]
          },

          {
            type: "paragraph",
            content: "When a browser encounters one of these Unicode values, it renders the corresponding emoji."
          }

        ]
      },

      {
        heading: "UTF-8: The Foundation of Emojis",

        blocks: [

          {
            type: "paragraph",
            content: "Before using emojis, your webpage should use UTF-8 encoding."
          },

          {
            type: "paragraph",
            content: "Inside the <head> section:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "Why?"
          },

          {
            type: "paragraph",
            content: "UTF-8 supports virtually all Unicode characters, including:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Emojis",
              "Symbols",
              "Mathematical signs",
              "International languages"
            ]
          },

          {
            type: "paragraph",
            content: "Without UTF-8, some emojis may display incorrectly."
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
<meta charset="UTF-8">
<title>Emoji Example</title>
</head>
<body>

<p>Hello 😀</p>

</body>
</html>`
          }

        ]
      },

      {
        heading: "Methods to Add Emojis in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "There are three common methods."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 1: Direct Emoji Characters"
          },

          {
            type: "paragraph",
            content: "The simplest method."
          },

          {
            type: "code",
            language: "html",
            content: `<p>I love HTML ❤️</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "I love HTML ❤️"
            ]
          },

          {
            type: "paragraph",
            content: "This is the most common approach in modern development."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 2: Decimal Unicode Entity"
          },

          {
            type: "paragraph",
            content: "Each emoji has a Unicode number."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>&#128512;</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 3: Hexadecimal Unicode Entity"
          },

          {
            type: "paragraph",
            content: "Unicode can also be written in hexadecimal form."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>&#x1F600;</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          }

        ]
      },

      {
        heading: "Direct Character vs Unicode Entity",

        blocks: [

          {
            type: "paragraph",
            content: "Both methods work."
          },

          {
            type: "table",
            headers: [
              "Direct Character",
              "Decimal Entity",
              "Hexadecimal Entity"
            ],

            rows: [
              ["😀", "&#128512;", "&#x1F600;"]
            ]
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "paragraph",
            content: "Professional developers typically use direct characters unless dynamic generation is required."
          }

        ]
      },

      {
        heading: "Commonly Used Emojis",

        blocks: [

          {
            type: "paragraph",
            content: "Smileys"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning",
              "Code"
            ],

            rows: [
              ["😀", "Grinning Face", "&#128512;"],
              ["😃", "Smiling Face", "&#128515;"],
              ["😄", "Happy Face", "&#128516;"],
              ["😎", "Cool Face", "&#128526;"],
              ["😂", "Laughing Face", "&#128514;"],
              ["😍", "Heart Eyes", "&#128525;"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Welcome 😎</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Hearts and Love Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["❤️", "Red Heart"],
              ["💕", "Two Hearts"],
              ["💖", "Sparkling Heart"],
              ["💘", "Heart with Arrow"],
              ["💝", "Gift Heart"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>I love coding ❤️</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Hand Gestures"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["👍", "Thumbs Up"],
              ["👎", "Thumbs Down"],
              ["👏", "Clapping"],
              ["🙌", "Celebration"],
              ["✌️", "Victory"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Great Job 👍</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Technology Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["💻", "Laptop"],
              ["🖥️", "Desktop"],
              ["📱", "Mobile Phone"],
              ["⌨️", "Keyboard"],
              ["🖱️", "Mouse"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Learn HTML 💻</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Education Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["📚", "Books"],
              ["✏️", "Pencil"],
              ["🎓", "Graduation Cap"],
              ["📝", "Memo"],
              ["📖", "Open Book"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Study Time 📚</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Business Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["💼", "Briefcase"],
              ["📈", "Growth"],
              ["📊", "Chart"],
              ["💰", "Money Bag"],
              ["💵", "Dollar Bill"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Revenue Increased 📈</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Travel Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["✈️", "Airplane"],
              ["🚗", "Car"],
              ["🚆", "Train"],
              ["🚀", "Rocket"],
              ["🛳️", "Ship"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Launching Soon 🚀</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Nature Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["🌳", "Tree"],
              ["🌸", "Flower"],
              ["🌞", "Sun"],
              ["🌈", "Rainbow"],
              ["🌍", "Earth"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Save the Planet 🌍</p>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Food Emojis"
          },

          {
            type: "table",
            headers: [
              "Emoji",
              "Meaning"
            ],

            rows: [
              ["🍕", "Pizza"],
              ["🍔", "Burger"],
              ["🍎", "Apple"],
              ["☕", "Coffee"],
              ["🍰", "Cake"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Coffee Break ☕</p>`
          }

        ]
      },

      {
        heading: "Using Emojis in Headings",

        blocks: [

          {
            type: "paragraph",
            content: "Emojis can enhance headings."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>🚀 Learn HTML</h1>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "🚀 Learn HTML"
            ]
          }

        ]
      },

      {
        heading: "Using Emojis in Buttons",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>📩 Send Message</button>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "📩 Send Message"
            ]
          },

          {
            type: "paragraph",
            content: "This improves visual communication."
          }

        ]
      },

      {
        heading: "Using Emojis in Navigation",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
  🏠 Home
  📚 Courses
  📞 Contact
</nav>`
          }

        ]
      },

      {
        heading: "Using Emojis in Lists",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>
  <li>✅ HTML</li>
  <li>✅ CSS</li>
  <li>✅ JavaScript</li>
</ul>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "✅ HTML",
              "✅ CSS",
              "✅ JavaScript"
            ]
          }

        ]
      },

      {
        heading: "Emoji Categories",

        blocks: [

          {
            type: "paragraph",
            content: "Unicode organizes emojis into categories."
          },

          {
            type: "output",
            content: [
              "Smileys & Emotion",
              "😀 😂 😍 😎 😢",
              "",
              "People & Body",
              "👍 👏 🙌 ✌️",
              "",
              "Animals & Nature",
              "🐶 🐱 🌳 🌸",
              "",
              "Food & Drink",
              "🍕 🍔 ☕ 🍰",
              "",
              "Travel & Places",
              "🚗 ✈️ 🚀 🌍",
              "",
              "Activities",
              "⚽ 🎮 🎵 🎨",
              "",
              "Objects",
              "💻 📱 📚 🔑",
              "",
              "Symbols",
              "❤️ ⭐ ✔️ ⚠️",
              "",
              "Flags",
              "🇮🇳 🇺🇸 🇬🇧 🇯🇵"
            ]
          }

        ]
      },

      {
        heading: "Emoji Rendering Differences",

        blocks: [

          {
            type: "paragraph",
            content: "One important fact many tutorials ignore:"
          },

          {
            type: "paragraph",
            content: "Emojis look different on different systems."
          },

          {
            type: "paragraph",
            content: "The same emoji may appear differently on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Windows",
              "macOS",
              "Linux",
              "Android",
              "iPhone"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "paragraph",
            content: "Its design varies depending on the platform."
          },

          {
            type: "paragraph",
            content: "The meaning remains the same, but appearance differs."
          }

        ]
      },

      {
        heading: "Emojis and CSS",

        blocks: [

          {
            type: "paragraph",
            content: "You can style emojis like normal text."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="emoji">🚀</p>`
          },

          {
            type: "code",
            language: "css",
            content: `.emoji {
    font-size: 50px;
}`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Large rocket emoji."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Changing Emoji Size"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 style="font-size:60px;">
😀
</h1>`
          }

        ]
      },

      {
        heading: "Emojis in Links",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#">📧 Contact Us</a>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "📧 Contact Us"
            ]
          }

        ]
      },

      {
        heading: "Emojis in Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<label>👤 Username</label>
<input type="text">`
          },

          {
            type: "paragraph",
            content: "This can improve user experience when used carefully."
          }

        ]
      },

      {
        heading: "Accessibility Considerations",

        blocks: [

          {
            type: "paragraph",
            content: "This is something most beginner tutorials barely discuss."
          },

          {
            type: "paragraph",
            content: "Screen readers may read emojis differently."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>🚀 Launch</p>`
          },

          {
            type: "paragraph",
            content: "A screen reader may announce:"
          },

          {
            type: "output",
            content: [
              "\"Rocket Launch\"",
              "or",
              "\"Rocket\""
            ]
          },

          {
            type: "paragraph",
            content: "depending on the device."
          },

          {
            type: "paragraph",
            content: "For decorative emojis:"
          },

          {
            type: "code",
            language: "html",
            content: `<span aria-hidden="true">🚀</span>`
          },

          {
            type: "paragraph",
            content: "This prevents screen readers from reading unnecessary decorative content."
          }

        ]
      },

      {
        heading: "When Not to Use Emojis",

        blocks: [

          {
            type: "paragraph",
            content: "Avoid excessive emojis in:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Professional Legal Documents"
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "output",
            content: [
              "📜 Terms and Conditions 🚀🔥🎉"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Academic Content"
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "output",
            content: [
              "🧮 Mathematics Formula 😎"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Critical Navigation"
          },

          {
            type: "paragraph",
            content: "Too many emojis can reduce clarity."
          },

          {
            type: "paragraph",
            content: "Use them sparingly."
          }

        ]
      },

      {
        heading: "Emojis vs Images",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners use images instead of emojis."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="rocket.png">`
          },

          {
            type: "paragraph",
            content: "Often unnecessary."
          },

          {
            type: "paragraph",
            content: "Instead:"
          },

          {
            type: "output",
            content: [
              "🚀"
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
              "Faster loading",
              "Smaller page size",
              "Better scalability",
              "Easier maintenance"
            ]
          }

        ]
      },

      {
        heading: "Emojis vs Icons",

        blocks: [

          {
            type: "paragraph",
            content: "Emojis and icons are different."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Emoji"
          },

          {
            type: "output",
            content: [
              "🚀"
            ]
          },

          {
            type: "paragraph",
            content: "Unicode character."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Icon"
          },

          {
            type: "code",
            language: "html",
            content: `<i class="fa fa-rocket"></i>`
          },

          {
            type: "paragraph",
            content: "Requires an icon library."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use emojis for simple visual communication."
          },

          {
            type: "paragraph",
            content: "Use icons for professional UI systems."
          }

        ]
      },

      {
        heading: "Real-World Example",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>HTML Emojis</title>
</head>

<body>

<h1>🚀 Welcome to HTML</h1>

<p>Learn web development 💻</p>

<p>Practice daily 📚</p>

<p>Build projects 🔥</p>

<p>Launch your career 🎉</p>

<button>📩 Contact Us</button>

</body>

</html>`
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
                question: "Forgetting UTF-8",
                answer: "Without UTF-8 encoding, emojis may display as broken square boxes or incorrect characters.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<head>\n</head>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<head>\n<meta charset="UTF-8">\n</head>`
                  }
                ]
              },
              {
                question: "Overusing Emojis",
                answer: "Too many emojis can make content look unprofessional and difficult to read.",
                examples: [
                  {
                    title: "Bad",
                    language: "text",
                    content: `🚀🔥💻🎉📚⭐❤️😎`
                  }
                ]
              },
              {
                question: "Using Emojis as the Only Information",
                answer: "Text should accompany important actions. Users might misinterpret a solitary emoji.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<button>📩</button>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<button>📩 Send Message</button>`
                  }
                ]
              },
              {
                question: "Assuming All Devices Render Identically",
                answer: "Emoji appearance varies significantly across platforms (Windows, Apple, Android). Always test important interfaces to ensure the emotion/meaning translates correctly."
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
              "Always use UTF-8: `<meta charset=\"UTF-8\">`",
              "Use emojis to enhance content, not replace it",
              "Keep accessibility in mind (use `aria-hidden=\"true\"` for decorative emojis)",
              "Avoid excessive decorative emojis",
              "Test across devices",
              "Prefer direct emoji characters for readability",
              "Use emojis in headings, buttons, badges, and notifications thoughtfully"
            ]
          }

        ]
      },

      {
        heading: "Professional Developer Perspective",

        blocks: [

          {
            type: "paragraph",
            content: "Most tutorials stop after showing emoji codes. However, professional developers treat emojis as part of the user experience system."
          },

          {
            type: "paragraph",
            content: "They use emojis to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improve visual scanning",
              "Increase engagement",
              "Highlight actions",
              "Make interfaces friendlier",
              "Reduce dependence on images"
            ]
          },

          {
            type: "paragraph",
            content: "However, they also consider:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "International audiences",
              "Brand consistency",
              "Professional tone",
              "Cross-platform rendering"
            ]
          },

          {
            type: "paragraph",
            content: "Well-placed emojis can significantly improve usability, while excessive emojis can make a website appear unprofessional."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "HTML Emojis are Unicode characters that can be displayed directly in webpages without additional libraries or images. They work through UTF-8 encoding and can be inserted using direct characters, decimal Unicode entities, or hexadecimal Unicode entities. Emojis are commonly used in headings, buttons, navigation menus, forms, notifications, and user interfaces. They improve engagement, readability, and visual communication while requiring minimal resources. When used responsibly and with accessibility considerations, emojis become a powerful tool for creating modern, user-friendly web experiences."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 Did you know emojis are technically text? Because they are text, they inherit the `color` property of their parent element... sometimes! While colorful emojis usually ignore the CSS `color` property, \"monochrome\" or text-style emojis (like ♻️ or ✂️) *will* change color based on your CSS. Furthermore, applying `filter: grayscale(100%);` or `opacity` via CSS works perfectly on all emojis."
          }

        ]
      }
    ]
  },



  /* ===========================
    Sixth Topic : HTML Character Sets
============================= */
    "html-charsets": {
    title: "HTML Character Sets",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "When you create a webpage, you expect every letter, number, symbol, emoji, and special character to appear exactly as intended. Imagine writing a page containing Hindi text, Chinese characters, emojis, mathematical symbols, or currency signs, only to see strange symbols like Ã©, â‚¹, or ???? appear instead."
          },

          {
            type: "paragraph",
            content: "This problem is solved by Character Sets."
          },

          {
            type: "paragraph",
            content: "A character set tells the browser how text data is encoded and how it should be displayed. Without the correct character set, browsers cannot correctly interpret the characters stored in an HTML document."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn what HTML Character Sets are, why they are important, how UTF-8 works, common encoding standards, browser behavior, real-world examples, and professional best practices."
          }

        ]
      },

      {
        heading: "What Is a Character Set?",

        blocks: [

          {
            type: "paragraph",
            content: "A character set is a collection of characters that a computer can recognize and display."
          },

          {
            type: "paragraph",
            content: "These characters include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Letters (A, B, C)",
              "Numbers (1, 2, 3)",
              "Symbols ($, %, @)",
              "Punctuation (?, !, :)",
              "Mathematical symbols (∞, √, ±)",
              "Currency symbols (₹, €, £)",
              "Emojis (😀, ❤️, 🚀)",
              "Characters from different languages"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "A B C",
              "1 2 3",
              "$ % &",
              "😀 ❤️ 🚀",
              "नमस्ते",
              "你好",
              "こんにちは"
            ]
          },

          {
            type: "paragraph",
            content: "To display these characters correctly, browsers must know which encoding system was used."
          }

        ]
      },

      {
        heading: "Why Character Sets Matter",

        blocks: [

          {
            type: "paragraph",
            content: "Computers store everything as binary data:"
          },

          {
            type: "output",
            content: [
              "01000001",
              "01000010",
              "01000011"
            ]
          },

          {
            type: "paragraph",
            content: "These numbers have no meaning unless a character set tells the computer:"
          },

          {
            type: "output",
            content: [
              "01000001 = A",
              "01000010 = B",
              "01000011 = C"
            ]
          },

          {
            type: "paragraph",
            content: "Without a character set, the browser cannot properly interpret the data."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Real-World Example"
          },

          {
            type: "paragraph",
            content: "Suppose your webpage contains:"
          },

          {
            type: "output",
            content: [
              "Café"
            ]
          },

          {
            type: "paragraph",
            content: "If the browser uses the wrong encoding, it may display:"
          },

          {
            type: "output",
            content: [
              "CafÃ©"
            ]
          },

          {
            type: "paragraph",
            content: "Similarly:"
          },

          {
            type: "output",
            content: [
              "₹100"
            ]
          },

          {
            type: "paragraph",
            content: "could become:"
          },

          {
            type: "output",
            content: [
              "â‚¹100"
            ]
          },

          {
            type: "paragraph",
            content: "This happens because the browser decoded the bytes using the wrong character set."
          }

        ]
      },

      {
        heading: "Character Encoding vs Character Set",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners think these terms are identical."
          },

          {
            type: "comparison",
            leftTitle: "Character Set",
            leftItems: [
              "Defines the collection of available characters.",
              "Example:",
              "A",
              "B",
              "C",
              "1",
              "2",
              "3",
              "€",
              "₹",
              "😀"
            ],
            rightTitle: "Character Encoding",
            rightItems: [
              "Defines how those characters are stored in binary.",
              "Example:",
              "A → 01000001"
            ]
          },

          {
            type: "paragraph",
            content: "In practice, developers often use both terms interchangeably."
          }

        ]
      },

      {
        heading: "HTML Charset Declaration",

        blocks: [

          {
            type: "paragraph",
            content: "Every HTML page should declare its character encoding."
          },

          {
            type: "paragraph",
            content: "The recommended method is:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "Place it inside the <head> section."
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
<meta charset="UTF-8">
<title>Character Set Example</title>
</head>
<body>

<p>Hello World</p>

</body>
</html>`
          },

          {
            type: "paragraph",
            content: "This tells the browser:"
          },

          {
            type: "output",
            content: [
              "\"Interpret all text in this document using UTF-8 encoding.\""
            ]
          }

        ]
      },

      {
        heading: "What Is UTF-8?",

        blocks: [

          {
            type: "paragraph",
            content: "UTF-8 stands for:"
          },

          {
            type: "output",
            content: [
              "Unicode Transformation Format - 8 bit"
            ]
          },

          {
            type: "paragraph",
            content: "It is the modern standard character encoding used on the web."
          },

          {
            type: "paragraph",
            content: "Almost every website today uses UTF-8."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          }

        ]
      },

      {
        heading: "Why UTF-8 Is Recommended",

        blocks: [

          {
            type: "paragraph",
            content: "UTF-8 can represent:"
          },

          {
            type: "table",
            headers: [
              "Language/Type",
              "Example"
            ],

            rows: [
              ["English", "Hello"],
              ["Hindi", "नमस्ते"],
              ["Chinese", "你好"],
              ["Japanese", "こんにちは"],
              ["Arabic", "مرحبا"],
              ["Emojis", "😀 🚀 ❤️"],
              ["Mathematical Symbols", "∞ √ π ±"]
            ]
          },

          {
            type: "paragraph",
            content: "One encoding supports almost every language and symbol used worldwide."
          }

        ]
      },

      {
        heading: "Unicode and Character Sets",

        blocks: [

          {
            type: "paragraph",
            content: "UTF-8 is based on Unicode."
          },

          {
            type: "paragraph",
            content: "Unicode is a universal standard that assigns a unique number to every character."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "table",
            headers: [
              "Character",
              "Unicode"
            ],

            rows: [
              ["A", "U+0041"],
              ["₹", "U+20B9"],
              ["😀", "U+1F600"],
              ["♥", "U+2665"]
            ]
          },

          {
            type: "paragraph",
            content: "This ensures consistency across devices and platforms."
          }

        ]
      },

      {
        heading: "Common Character Sets",

        blocks: [

          {
            type: "paragraph",
            content: "Although UTF-8 dominates modern web development, other character sets still exist."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ASCII"
          },

          {
            type: "paragraph",
            content: "ASCII was one of the earliest character sets."
          },

          {
            type: "paragraph",
            content: "Supports:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "English letters",
              "Numbers",
              "Basic punctuation"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "A-Z",
              "a-z",
              "0-9"
            ]
          },

          {
            type: "paragraph",
            content: "ASCII supports only 128 characters. Not suitable for modern multilingual websites."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ANSI"
          },

          {
            type: "paragraph",
            content: "ANSI extended ASCII by adding more symbols. Supports around 256 characters."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "é",
              "ñ",
              "ö"
            ]
          },

          {
            type: "paragraph",
            content: "Still limited compared to Unicode."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ISO-8859-1 (Latin-1)"
          },

          {
            type: "paragraph",
            content: "Widely used before UTF-8 became popular."
          },

          {
            type: "paragraph",
            content: "Supports:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "English",
              "Western European languages"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "é",
              "è",
              "à",
              "ü"
            ]
          },

          {
            type: "paragraph",
            content: "Cannot support many modern languages."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "UTF-8"
          },

          {
            type: "paragraph",
            content: "Current web standard."
          },

          {
            type: "paragraph",
            content: "Supports:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "All major languages",
              "Symbols",
              "Currency signs",
              "Emojis",
              "Mathematical characters"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "UTF-16"
          },

          {
            type: "paragraph",
            content: "Another Unicode encoding. Used internally by some operating systems and programming languages. Less common for web pages."
          }

        ]
      },

      {
        heading: "How Browsers Determine Character Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "Browsers typically determine encoding using the following priority:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "HTTP Header",
              "Meta Charset Tag",
              "Browser Guessing"
            ]
          },

          {
            type: "paragraph",
            content: "1. HTTP Header"
          },

          {
            type: "paragraph",
            content: "Server sends:"
          },

          {
            type: "code",
            language: "http",
            content: `Content-Type: text/html; charset=UTF-8`
          },

          {
            type: "paragraph",
            content: "Highest priority."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "2. Meta Charset Tag"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "Most common method."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "3. Browser Guessing"
          },

          {
            type: "paragraph",
            content: "If no encoding is specified, browsers attempt to guess. This can produce incorrect results."
          }

        ]
      },

      {
        heading: "Character Sets and HTML Entities",

        blocks: [

          {
            type: "paragraph",
            content: "Character sets and entities work together."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>&copy;</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Entity:"
          },

          {
            type: "output",
            content: [
              "&copy;"
            ]
          },

          {
            type: "paragraph",
            content: "Represents:"
          },

          {
            type: "output",
            content: [
              "©"
            ]
          },

          {
            type: "paragraph",
            content: "Even if a symbol cannot be typed directly, entities provide an alternative."
          }

        ]
      },

      {
        heading: "Character Sets and Emojis",

        blocks: [

          {
            type: "paragraph",
            content: "Emojis require Unicode support."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>😀 🚀 ❤️</p>`
          },

          {
            type: "paragraph",
            content: "Works correctly because UTF-8 supports Unicode emoji characters."
          },

          {
            type: "paragraph",
            content: "Without UTF-8:"
          },

          {
            type: "output",
            content: [
              "?????",
              "or",
              "□ □ □"
            ]
          },

          {
            type: "paragraph",
            content: "might appear."
          }

        ]
      },

      {
        heading: "Character Sets and International Websites",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites often serve users worldwide."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Hello</p>
<p>नमस्ते</p>
<p>你好</p>
<p>مرحبا</p>`
          },

          {
            type: "paragraph",
            content: "UTF-8 ensures all these languages display correctly in the same document."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Viewing Different Languages"
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
<meta charset="UTF-8">
</head>
<body>

<p>English</p>
<p>हिन्दी</p>
<p>中文</p>
<p>日本語</p>
<p>العربية</p>

</body>
</html>`
          },

          {
            type: "paragraph",
            content: "All text displays properly using UTF-8."
          }

        ]
      },

      {
        heading: "Character Sets and Special Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "UTF-8 supports many special symbols."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>₹ 1000</p>
<p>€ 500</p>
<p>£ 300</p>
<p>© 2025</p>
<p>™ Brand</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "₹ 1000",
              "€ 500",
              "£ 300",
              "© 2025",
              "™ Brand"
            ]
          }

        ]
      },

      {
        heading: "Character Sets and Mathematical Symbols",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>π = 3.14159</p>
<p>∞ Infinity</p>
<p>√16 = 4</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "π = 3.14159",
              "∞ Infinity",
              "√16 = 4"
            ]
          }

        ]
      },

      {
        heading: "Character Sets and Databases",

        blocks: [

          {
            type: "paragraph",
            content: "One topic many beginner tutorials skip:"
          },

          {
            type: "paragraph",
            content: "Your webpage may use UTF-8, but your database must also use UTF-8."
          },

          {
            type: "paragraph",
            content: "Example workflow:"
          },

          {
            type: "flow",
            steps: [
              "Browser",
              "HTML Page",
              "Server",
              "Database"
            ]
          },

          {
            type: "paragraph",
            content: "If any layer uses a different encoding, characters may become corrupted."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "output",
            content: [
              "नमस्ते"
            ]
          },

          {
            type: "paragraph",
            content: "could become:"
          },

          {
            type: "output",
            content: [
              "à¤¨à¤®à¤¸à¥à¤¤à¥‡"
            ]
          },

          {
            type: "paragraph",
            content: "This is called encoding corruption."
          },

          {
            type: "paragraph",
            content: "Professional applications configure UTF-8 everywhere."
          }

        ]
      },

      {
        heading: "Character Sets and APIs",

        blocks: [

          {
            type: "paragraph",
            content: "Suppose an API sends:"
          },

          {
            type: "code",
            language: "json",
            content: `{
  "message": "Hello 😀"
}`
          },

          {
            type: "paragraph",
            content: "The API response should also use UTF-8."
          },

          {
            type: "paragraph",
            content: "Otherwise emojis and multilingual text may break."
          }

        ]
      },

      {
        heading: "Character Sets in Older HTML Versions",

        blocks: [

          {
            type: "paragraph",
            content: "Older HTML versions used:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta http-equiv="Content-Type"
content="text/html; charset=UTF-8">`
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta http-equiv="Content-Type"
content="text/html; charset=UTF-8">`
          },

          {
            type: "paragraph",
            content: "Modern HTML5 simplifies this to:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "This is now the recommended method."
          }

        ]
      },

      {
        heading: "Common Character Encoding Problems",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Missing Charset Declaration",
                answer: "Without a charset declaration, the browser might guess incorrectly.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<head>\n<title>My Website</title>\n</head>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<head>\n<meta charset="UTF-8">\n<title>My Website</title>\n</head>`
                  }
                ]
              },
              {
                question: "Mixed Encodings",
                answer: "Example: HTML → UTF-8, Database → Latin-1. Can create corrupted text. Use UTF-8 consistently everywhere."
              },
              {
                question: "Copy-Paste Issues",
                answer: "Sometimes text copied from documents contains special characters. Example: “Smart Quotes”. Without proper encoding, they may appear incorrectly."
              },
              {
                question: "Browser Guessing",
                answer: "Relying on browser detection can cause unexpected results. Always declare UTF-8."
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
              "Always use UTF-8: `<meta charset=\"UTF-8\">`",
              "Place charset near the top of `<head>`",
              "Use UTF-8 throughout your entire project: HTML, CSS, JavaScript, Databases, APIs",
              "Test multilingual content: Verify different languages display correctly.",
              "Avoid legacy encodings: Prefer UTF-8 over ASCII, ANSI, ISO-8859-1",
              "Use HTML entities when appropriate: `&copy;`, `&trade;`, `&nbsp;`"
            ]
          }

        ]
      },

      {
        heading: "Professional Developer Insight",

        blocks: [

          {
            type: "paragraph",
            content: "Most tutorials simply say:"
          },

          {
            type: "output",
            content: [
              "\"Add <meta charset=\"UTF-8\">.\""
            ]
          },

          {
            type: "paragraph",
            content: "However, professional developers understand that character encoding affects:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Internationalization",
              "SEO",
              "Accessibility",
              "Databases",
              "APIs",
              "Email systems",
              "User-generated content",
              "Emoji support"
            ]
          },

          {
            type: "paragraph",
            content: "UTF-8 has become the universal standard because it solves nearly all encoding issues while supporting virtually every language and symbol on Earth. Modern websites should treat UTF-8 not as an option, but as a requirement."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "HTML Character Sets define how characters are stored and displayed in a webpage. Without a proper character set, browsers may display incorrect text, symbols, or emojis. The modern standard is UTF-8, declared using:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "UTF-8 supports almost every language, symbol, currency sign, emoji, and special character used on the web. It is based on Unicode, ensures consistent rendering across devices, and is essential for modern multilingual websites. By using UTF-8 throughout your HTML, databases, APIs, and applications, you can prevent encoding errors and ensure that content is displayed correctly for users around the world."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A very subtle bug can occur if you place your `<meta charset=\"UTF-8\">` tag too low in the `<head>`. If the browser encounters characters it needs to render (like a complex `<title>`) *before* it reads the charset declaration, it might guess the encoding, render the title incorrectly, and then have to restart parsing once it hits the UTF-8 meta tag. Always make `<meta charset=\"UTF-8\">` the very first element inside your `<head>`."
          }

        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : URL Encoding
============================= */
    "url-encoding": {
    title: "URL Encoding",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Imagine you want to send the following text through a URL:"
          },

          {
            type: "output",
            content: [
              "Hello World!"
            ]
          },

          {
            type: "paragraph",
            content: "You might expect the URL to look like this:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=Hello World!`
          },

          {
            type: "paragraph",
            content: "However, URLs cannot safely contain certain characters such as spaces, quotes, special symbols, and non-English text. Browsers and servers need a standardized way to represent these characters."
          },

          {
            type: "paragraph",
            content: "This is where URL Encoding comes in."
          },

          {
            type: "paragraph",
            content: "URL Encoding converts unsafe characters into a format that can be transmitted safely over the internet. It is one of the fundamental concepts behind web communication, search queries, form submissions, APIs, and dynamic websites."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn what URL Encoding is, why it is necessary, how it works, common encoded characters, percent-encoding, UTF-8 interaction, form submission behavior, JavaScript methods, security considerations, and professional best practices."
          }

        ]
      },

      {
        heading: "What Is URL Encoding?",

        blocks: [

          {
            type: "paragraph",
            content: "URL Encoding is the process of converting characters into a format that can be safely included in a URL."
          },

          {
            type: "paragraph",
            content: "It replaces unsafe characters with a percent sign (%) followed by two hexadecimal digits representing the character's value."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "output",
            content: [
              "Space → %20"
            ]
          },

          {
            type: "paragraph",
            content: "So:"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "Hello%20World"
            ]
          },

          {
            type: "paragraph",
            content: "This process is also called:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Percent Encoding",
              "URL Escaping",
              "URI Encoding"
            ]
          }

        ]
      },

      {
        heading: "Why URL Encoding Is Needed",

        blocks: [

          {
            type: "paragraph",
            content: "URLs have rules about which characters can be used."
          },

          {
            type: "paragraph",
            content: "Some characters have special meanings:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "?",
              "&",
              "=",
              "#",
              "/",
              "%"
            ]
          },

          {
            type: "paragraph",
            content: "Others may not be supported safely across browsers and servers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Space",
              "\"",
              "<",
              ">",
              "{",
              "}",
              "|",
              "\\",
              "^",
              "`"
            ]
          },

          {
            type: "paragraph",
            content: "URL Encoding ensures that data is transmitted correctly without confusing the browser or server."
          }

        ]
      },

      {
        heading: "A Simple Example",

        blocks: [

          {
            type: "paragraph",
            content: "Without encoding:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=web design`
          },

          {
            type: "paragraph",
            content: "Problem:"
          },

          {
            type: "paragraph",
            content: "The browser sees the space as an invalid URL character."
          },

          {
            type: "paragraph",
            content: "Encoded version:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=web%20design`
          },

          {
            type: "paragraph",
            content: "Now the URL is valid."
          }

        ]
      },

      {
        heading: "How URL Encoding Works",

        blocks: [

          {
            type: "paragraph",
            content: "The browser converts a character into its ASCII or UTF-8 byte value and then represents that value as hexadecimal."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Character: Space",
              "ASCII value: 32",
              "Hexadecimal: 20",
              "Encoded form: %20"
            ]
          }

        ]
      },

      {
        heading: "What Is Percent Encoding?",

        blocks: [

          {
            type: "paragraph",
            content: "URL Encoding is commonly called Percent Encoding because encoded characters begin with %."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "table",
            headers: [
              "Character",
              "Encoded"
            ],

            rows: [
              ["Space", "%20"],
              ["!", "%21"],
              ["\"", "%22"],
              ["#", "%23"],
              ["$", "%24"],
              ["%", "%25"],
              ["&", "%26"],
              ["+", "%2B"],
              ["/", "%2F"],
              ["?", "%3F"],
              ["=", "%3D"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "A&B"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "A%26B"
            ]
          }

        ]
      },

      {
        heading: "URL Structure Refresher",

        blocks: [

          {
            type: "paragraph",
            content: "Consider:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=html&sort=latest`
          },

          {
            type: "paragraph",
            content: "Components:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "https://       → Protocol",
              "example.com    → Domain",
              "/search        → Path",
              "?q=html        → Query Parameter",
              "&sort=latest   → Additional Parameter"
            ]
          },

          {
            type: "paragraph",
            content: "Certain characters already have special meanings."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "output",
            content: [
              "&"
            ]
          },

          {
            type: "paragraph",
            content: "separates parameters."
          },

          {
            type: "paragraph",
            content: "Therefore, if you want a literal ampersand inside data, it must be encoded."
          },

          {
            type: "paragraph",
            content: "Wrong:"
          },

          {
            type: "output",
            content: [
              "?q=A&B"
            ]
          },

          {
            type: "paragraph",
            content: "Browser interprets:"
          },

          {
            type: "output",
            content: [
              "q = A",
              "B = ?"
            ]
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "output",
            content: [
              "?q=A%26B"
            ]
          }

        ]
      },

      {
        heading: "Characters That Usually Need Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "Space"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "Hello%20World"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Ampersand (&)"
          },

          {
            type: "output",
            content: [
              "Tom & Jerry"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "Tom%20%26%20Jerry"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Question Mark (?)"
          },

          {
            type: "output",
            content: [
              "What?"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "What%3F"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Hash (#)"
          },

          {
            type: "output",
            content: [
              "Chapter #1"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "Chapter%20%231"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Slash (/)"
          },

          {
            type: "output",
            content: [
              "A/B"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "A%2FB"
            ]
          }

        ]
      },

      {
        heading: "Reserved Characters",

        blocks: [

          {
            type: "paragraph",
            content: "Some characters have predefined meanings in URLs."
          },

          {
            type: "table",
            headers: [
              "Character",
              "Purpose:"
            ],

            rows: [
              [":", "Protocol separator"],
              ["/", "Path separator"],
              ["?", "Start query string"],
              ["&", "Parameter separator"],
              ["=", "Key-value separator"],
              ["#", "Fragment identifier"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/page?id=10#top`
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "?",
              "&",
              "=",
              "#"
            ]
          },

          {
            type: "paragraph",
            content: "are part of URL syntax."
          },

          {
            type: "paragraph",
            content: "If you want them as actual data, they must be encoded."
          }

        ]
      },

      {
        heading: "Unreserved Characters",

        blocks: [

          {
            type: "paragraph",
            content: "These characters can usually appear without encoding:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "A-Z",
              "a-z",
              "0-9",
              "-",
              "_",
              ".",
              "~"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "hello-world_2025"
            ]
          },

          {
            type: "paragraph",
            content: "requires no encoding."
          }

        ]
      },

      {
        heading: "URL Encoding Spaces",

        blocks: [

          {
            type: "paragraph",
            content: "One topic that often confuses beginners is how spaces are encoded."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 1: Percent Encoding"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "Hello%20World"
            ]
          },

          {
            type: "paragraph",
            content: "Most common."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 2: Plus Sign (+)"
          },

          {
            type: "paragraph",
            content: "In HTML form submissions:"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "may become:"
          },

          {
            type: "output",
            content: [
              "Hello+World"
            ]
          },

          {
            type: "paragraph",
            content: "Both often represent spaces, but they are used in different contexts."
          }

        ]
      },

      {
        heading: "URL Encoding in HTML Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Consider:"
          },

          {
            type: "code",
            language: "html",
            content: `<form action="/search">
<input type="text" name="query">
<button type="submit">Search</button>
</form>`
          },

          {
            type: "paragraph",
            content: "User enters:"
          },

          {
            type: "output",
            content: [
              "Web Development"
            ]
          },

          {
            type: "paragraph",
            content: "Browser sends:"
          },

          {
            type: "output",
            content: [
              "/search?query=Web+Development"
            ]
          },

          {
            type: "paragraph",
            content: "Notice:"
          },

          {
            type: "output",
            content: [
              "Space → +"
            ]
          },

          {
            type: "paragraph",
            content: "This is standard behavior for form submissions using the default encoding."
          }

        ]
      },

      {
        heading: "URL Encoding Non-English Characters",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites support many languages."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "नमस्ते"
            ]
          },

          {
            type: "paragraph",
            content: "Cannot appear directly in all URLs."
          },

          {
            type: "paragraph",
            content: "Encoded version:"
          },

          {
            type: "output",
            content: [
              "%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87"
            ]
          },

          {
            type: "paragraph",
            content: "Similarly:"
          },

          {
            type: "output",
            content: [
              "你好"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "%E4%BD%A0%E5%A5%BD"
            ]
          },

          {
            type: "paragraph",
            content: "This is possible because URLs use UTF-8 encoding before applying percent encoding."
          }

        ]
      },

      {
        heading: "URL Encoding Emojis",

        blocks: [

          {
            type: "paragraph",
            content: "Emojis must also be encoded."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "%F0%9F%98%80"
            ]
          },

          {
            type: "paragraph",
            content: "Example URL:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/?emoji=%F0%9F%98%80`
          },

          {
            type: "paragraph",
            content: "When decoded:"
          },

          {
            type: "output",
            content: [
              "😀"
            ]
          },

          {
            type: "paragraph",
            content: "appears correctly."
          }

        ]
      },

      {
        heading: "URL Encoding and UTF-8",

        blocks: [

          {
            type: "paragraph",
            content: "Most modern websites use UTF-8."
          },

          {
            type: "paragraph",
            content: "Process:"
          },

          {
            type: "flow",
            steps: [
              "Character",
              "UTF-8 Bytes",
              "Percent Encoding",
              "URL"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "€"
            ]
          },

          {
            type: "paragraph",
            content: "UTF-8 bytes:"
          },

          {
            type: "output",
            content: [
              "E2 82 AC"
            ]
          },

          {
            type: "paragraph",
            content: "Encoded URL:"
          },

          {
            type: "output",
            content: [
              "%E2%82%AC"
            ]
          }

        ]
      },

      {
        heading: "URL Decoding",

        blocks: [

          {
            type: "paragraph",
            content: "Encoding converts characters into URL-safe values."
          },

          {
            type: "paragraph",
            content: "Decoding reverses the process."
          },

          {
            type: "output",
            content: [
              "Encoded: Hello%20World",
              "Decoded: Hello World",
              "",
              "Encoded: A%26B",
              "Decoded: A&B"
            ]
          },

          {
            type: "paragraph",
            content: "Browsers and servers automatically decode many URLs during processing."
          }

        ]
      },

      {
        heading: "URL Encoding in JavaScript",

        blocks: [

          {
            type: "paragraph",
            content: "JavaScript provides built-in encoding functions."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "encodeURI()"
          },

          {
            type: "paragraph",
            content: "Encodes an entire URL."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const url = encodeURI("https://example.com/search?q=hello world");`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "output",
            content: [
              "https://example.com/search?q=hello%20world"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "encodeURIComponent()"
          },

          {
            type: "paragraph",
            content: "Encodes individual URL components."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `encodeURIComponent("Tom & Jerry");`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "output",
            content: [
              "Tom%20%26%20Jerry"
            ]
          },

          {
            type: "paragraph",
            content: "This is usually the safer choice when handling user input."
          }

        ]
      },

      {
        heading: "Difference Between encodeURI() and encodeURIComponent()",

        blocks: [

          {
            type: "paragraph",
            content: "encodeURI()"
          },

          {
            type: "paragraph",
            content: "Preserves URL structure."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `encodeURI("https://example.com/?q=hello world")`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "output",
            content: [
              "https://example.com/?q=hello%20world"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "encodeURIComponent()"
          },

          {
            type: "paragraph",
            content: "Encodes almost everything."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `encodeURIComponent("q=hello world")`
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "output",
            content: [
              "q%3Dhello%20world"
            ]
          },

          {
            type: "paragraph",
            content: "Use:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "encodeURI() for complete URLs",
              "encodeURIComponent() for parameters"
            ]
          }

        ]
      },

      {
        heading: "URL Encoding and APIs",

        blocks: [

          {
            type: "paragraph",
            content: "APIs frequently require URL encoding."
          },

          {
            type: "paragraph",
            content: "Example request:"
          },

          {
            type: "code",
            language: "text",
            content: `https://api.example.com/search?q=machine learning`
          },

          {
            type: "paragraph",
            content: "Encoded:"
          },

          {
            type: "code",
            language: "text",
            content: `https://api.example.com/search?q=machine%20learning`
          },

          {
            type: "paragraph",
            content: "Without encoding, the API may interpret the request incorrectly."
          }

        ]
      },

      {
        heading: "URL Encoding and Search Engines",

        blocks: [

          {
            type: "paragraph",
            content: "When searching Google:"
          },

          {
            type: "output",
            content: [
              "HTML Tutorial"
            ]
          },

          {
            type: "paragraph",
            content: "the browser converts it into something similar to:"
          },

          {
            type: "output",
            content: [
              "?q=HTML+Tutorial",
              "or",
              "?q=HTML%20Tutorial"
            ]
          },

          {
            type: "paragraph",
            content: "before sending the request."
          }

        ]
      },

      {
        heading: "Common URL Encoding Examples",

        blocks: [

          {
            type: "table",
            headers: [
              "Original",
              "Encoded"
            ],

            rows: [
              ["Hello World", "Hello%20World"],
              ["A&B", "A%26B"],
              ["Price = $50", "Price%20%3D%20%2450"],
              ["C# Tutorial", "C%23%20Tutorial"],
              ["user@example.com", "user%40example.com"],
              ["100%", "100%25"],
              ["Hello/World", "Hello%2FWorld"]
            ]
          }

        ]
      },

      {
        heading: "Security Importance of URL Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "One topic many tutorials barely discuss is security."
          },

          {
            type: "paragraph",
            content: "Improperly encoded URLs can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Break applications",
              "Corrupt data",
              "Cause API errors",
              "Enable injection attacks"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "name=Tom&admin=true"
            ]
          },

          {
            type: "paragraph",
            content: "Without encoding: Server may interpret:"
          },

          {
            type: "output",
            content: [
              "name = Tom",
              "admin = true"
            ]
          },

          {
            type: "paragraph",
            content: "Proper encoding prevents accidental parameter splitting."
          }

        ]
      },

      {
        heading: "Double Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "A common mistake is encoding data twice."
          },

          {
            type: "paragraph",
            content: "Original:"
          },

          {
            type: "output",
            content: [
              "Hello World"
            ]
          },

          {
            type: "paragraph",
            content: "Encoded once:"
          },

          {
            type: "output",
            content: [
              "Hello%20World"
            ]
          },

          {
            type: "paragraph",
            content: "Encoded again:"
          },

          {
            type: "output",
            content: [
              "Hello%2520World"
            ]
          },

          {
            type: "paragraph",
            content: "Notice:"
          },

          {
            type: "output",
            content: [
              "% → %25"
            ]
          },

          {
            type: "paragraph",
            content: "This creates incorrect URLs."
          },

          {
            type: "paragraph",
            content: "Always avoid unnecessary re-encoding."
          }

        ]
      },

      {
        heading: "Browser Auto-Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "Modern browsers automatically encode many characters."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=hello world`
          },

          {
            type: "paragraph",
            content: "may automatically become:"
          },

          {
            type: "code",
            language: "text",
            content: `https://example.com/search?q=hello%20world`
          },

          {
            type: "paragraph",
            content: "However, developers should never rely entirely on browser behavior."
          },

          {
            type: "paragraph",
            content: "Always encode user-generated data properly."
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
                question: "Forgetting to Encode Query Parameters",
                answer: "Unencoded ampersands or equals signs in data will split parameters.",
                examples: [
                  {
                    title: "Wrong",
                    language: "text",
                    content: `?q=Tom & Jerry`
                  },
                  {
                    title: "Correct",
                    language: "text",
                    content: `?q=Tom%20%26%20Jerry`
                  }
                ]
              },
              {
                question: "Encoding Entire URL Incorrectly",
                answer: "Using `encodeURIComponent` on an entire URL will break the protocol and path structure.",
                examples: [
                  {
                    title: "Wrong",
                    language: "javascript",
                    content: `encodeURIComponent("https://example.com")`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `encodeURI("https://example.com")`
                  }
                ]
              },
              {
                question: "Double Encoding",
                answer: "Encoding an already encoded string replaces the '%' with '%25'.",
                examples: [
                  {
                    title: "Wrong",
                    language: "text",
                    content: `Hello%2520World`
                  },
                  {
                    title: "Correct",
                    language: "text",
                    content: `Hello%20World`
                  }
                ]
              },
              {
                question: "Assuming All Languages Use ASCII",
                answer: "Modern websites must support Hindi, Chinese, Arabic, Japanese, and Emojis. UTF-8 encoding followed by percent-encoding makes this possible."
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
              "Always use UTF-8: Works with all modern languages and symbols.",
              "Encode user input: Especially Search queries, Form data, API parameters.",
              "Use encodeURIComponent(): For query values `encodeURIComponent(userInput)`.",
              "Avoid manual encoding: Let programming languages and frameworks handle encoding.",
              "Decode only when necessary: Avoid repeated encoding and decoding cycles.",
              "Test multilingual content: Verify URLs containing Hindi, Chinese, Arabic, Emojis, and Special symbols."
            ]
          }

        ]
      },

      {
        heading: "Professional Developer Insight",

        blocks: [

          {
            type: "paragraph",
            content: "Most beginner tutorials explain URL Encoding as simply replacing spaces with %20. In reality, URL Encoding is a critical part of web communication. Every search query, API request, form submission, social media link, multilingual URL, and tracking parameter depends on proper encoding. Modern applications routinely handle emojis, international languages, special symbols, and user-generated content, making URL Encoding an essential skill for every web developer."
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "URL Encoding is the process of converting unsafe URL characters into a safe format using percent encoding. Special characters such as spaces, ampersands, question marks, non-English text, and emojis are transformed into encoded representations that browsers and servers can reliably transmit and interpret. The most common encoding example is:"
          },

          {
            type: "output",
            content: [
              "Space → %20"
            ]
          },

          {
            type: "paragraph",
            content: "Modern websites use UTF-8 together with percent encoding to support all languages, symbols, and emojis. Proper URL Encoding prevents errors, improves compatibility, enhances security, and ensures that data is transmitted correctly across browsers, servers, APIs, and web applications."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A very tricky bug can occur when trying to URL encode a literal plus sign `+` that a user typed into a form. In URLs (specifically in the query string `application/x-www-form-urlencoded`), the `+` character is often historically interpreted as a space! Therefore, if a user types `C++`, and you don't properly encode it to `C%2B%2B`, the server might receive it as `C  ` (C followed by two spaces)."
          }

        ]
      }
    ]
  },
};

export default htmlReferences;