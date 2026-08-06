const htmlConclusion = {

/* ===========================
    First Topic : HTML Learning Roadmap
============================= */
    "html-roadmap": {
    title: "HTML Learning Roadmap",
    readingTime: "26 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Learning HTML is the first step toward becoming a web developer. HTML (HyperText Markup Language) forms the foundation of every website on the internet. Whether you want to become a Frontend Developer, Full Stack Developer, UI Developer, Web Designer, or simply create your own websites, HTML is where the journey begins."
          },

          {
            type: "paragraph",
            content: "Many beginners make the mistake of learning HTML tags randomly. A better approach is to follow a structured roadmap that takes you from basic page creation to professional, accessible, responsive, and SEO-friendly web pages."
          },

          {
            type: "paragraph",
            content: "This roadmap provides a complete learning path from absolute beginner to advanced HTML developer. It combines industry best practices, modern HTML5 standards, accessibility guidelines, semantic markup principles, and real-world project building."
          }

        ]
      },

      {
        heading: "Why Learn HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Before starting the roadmap, it's important to understand why HTML matters."
          },

          {
            type: "paragraph",
            content: "HTML is responsible for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Structuring web pages",
              "Organizing content",
              "Creating forms",
              "Embedding media",
              "Improving SEO",
              "Supporting accessibility",
              "Communicating page meaning to browsers and search engines"
            ]
          },

          {
            type: "paragraph",
            content: "Without HTML:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS cannot style content properly",
              "JavaScript has nothing to manipulate",
              "Search engines cannot understand pages",
              "Screen readers cannot navigate content"
            ]
          },

          {
            type: "paragraph",
            content: "HTML is the backbone of the web."
          }

        ]
      },

      {
        heading: "What You Should Know Before Learning HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Good news:"
          },

          {
            type: "paragraph",
            content: "You don't need:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Programming experience",
              "Mathematics knowledge",
              "Computer Science background"
            ]
          },

          {
            type: "paragraph",
            content: "You only need:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "A computer",
              "A browser",
              "A text editor"
            ]
          },

          {
            type: "paragraph",
            content: "Popular editors:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Visual Studio Code",
              "Sublime Text",
              "Notepad++",
              "WebStorm"
            ]
          }

        ]
      },

      {
        heading: "HTML Learning Path Overview",

        blocks: [

          {
            type: "paragraph",
            content: ""
          },

          {
            type: "flow",
            steps: [
              "HTML Basics",
              "Text & Media",
              "Links & Navigation",
              "Lists & Tables",
              "Forms",
              "Semantic HTML",
              "Responsive Design",
              "Advanced HTML APIs",
              "Accessibility",
              "SEO",
              "Best Practices",
              "Projects"
            ]
          }

        ]
      },

      {
        heading: "Phase 1: HTML Fundamentals",

        blocks: [

          {
            type: "paragraph",
            content: "This phase builds your foundation."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn What HTML Is"
          },

          {
            type: "paragraph",
            content: "Understand:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "What HTML stands for",
              "How websites work",
              "Browser rendering process",
              "Client-server model",
              "HTML vs CSS vs JavaScript"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Understand HTML's role in web development."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn Basic Document Structure"
          },

          {
            type: "paragraph",
            content: "Every HTML page begins with:"
          },

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n</body>\n</html>`
          },

          {
            type: "paragraph",
            content: "Learn: DOCTYPE, html, head, body, title"
          },

          {
            type: "paragraph",
            content: "Goal: Create your first webpage."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn HTML Elements"
          },

          {
            type: "paragraph",
            content: "Understand:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Hello</h1>`
          },

          {
            type: "paragraph",
            content: "Parts:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Opening tag",
              "Content",
              "Closing tag"
            ]
          },

          {
            type: "paragraph",
            content: "Also learn: Nested elements, Parent elements, Child elements."
          },

          {
            type: "paragraph",
            content: "Goal: Understand how HTML elements work."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn HTML Attributes"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://example.com">Visit</a>`
          },

          {
            type: "paragraph",
            content: "Here: href is an attribute."
          },

          {
            type: "paragraph",
            content: "Learn: Attribute syntax, Global attributes, Common attributes."
          },

          {
            type: "paragraph",
            content: "Goal: Understand how to configure elements."
          }

        ]
      },

      {
        heading: "Phase 2: Content & Text Structure",

        blocks: [

          {
            type: "paragraph",
            content: "Learn how to organize page content."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Headings"
          },

          {
            type: "output",
            content: [
              "<h1>",
              "<h2>",
              "<h3>",
              "<h4>",
              "<h5>",
              "<h6>"
            ]
          },

          {
            type: "paragraph",
            content: "Understand heading hierarchy. Goal: Create structured content."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Paragraphs"
          },

          {
            type: "output",
            content: [
              "<p>"
            ]
          },

          {
            type: "paragraph",
            content: "Learn: Paragraphs, Line breaks, Horizontal rules."
          },

          {
            type: "paragraph",
            content: "Tags:"
          },

          {
            type: "output",
            content: [
              "<p>",
              "<br>",
              "<hr>"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Text Formatting"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<b>",
              "<strong>",
              "<i>",
              "<em>",
              "<mark>",
              "<small>",
              "<del>",
              "<ins>",
              "<sub>",
              "<sup>"
            ]
          },

          {
            type: "paragraph",
            content: "Understand semantic vs visual formatting. Goal: Format text professionally."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Quotations"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<blockquote>",
              "<q>",
              "<abbr>",
              "<cite>",
              "<address>"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Present references and quotations correctly."
          }

        ]
      },

      {
        heading: "Phase 3: Links & Navigation",

        blocks: [

          {
            type: "paragraph",
            content: "Links connect the web."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn Hyperlinks"
          },

          {
            type: "paragraph",
            content: "Tag:"
          },

          {
            type: "output",
            content: [
              "<a>"
            ]
          },

          {
            type: "paragraph",
            content: "Topics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Internal links",
              "External links",
              "Relative URLs",
              "Absolute URLs"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Connect pages together."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Anchor Links"
          },

          {
            type: "paragraph",
            content: "Learn page navigation:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#section">`
          },

          {
            type: "paragraph",
            content: "Goal: Create single-page navigation."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Email & Phone Links"
          },

          {
            type: "output",
            content: [
              "mailto:",
              "tel:"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="mailto:abc@example.com">`
          },

          {
            type: "paragraph",
            content: "Goal: Create contact links."
          }

        ]
      },

      {
        heading: "Phase 4: Images & Media",

        blocks: [

          {
            type: "paragraph",
            content: "Images"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<img>"
            ]
          },

          {
            type: "paragraph",
            content: "Attributes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "src",
              "alt",
              "width",
              "height"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Display images properly."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Favicon"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "code",
            language: "html",
            content: `<link rel="icon">`
          },

          {
            type: "paragraph",
            content: "Goal: Add browser tab icons."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Audio"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<audio>",
              "<source>"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Embed sound files."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Video"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<video>",
              "<source>"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Embed videos."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "YouTube Embedding"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<iframe>"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Display YouTube content."
          }

        ]
      },

      {
        heading: "Phase 5: Lists",

        blocks: [

          {
            type: "paragraph",
            content: "Lists are heavily used in real websites."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Ordered Lists"
          },

          {
            type: "output",
            content: [
              "<ol>",
              "<li>"
            ]
          },

          {
            type: "paragraph",
            content: "Used for: Rankings, Steps, Procedures."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Unordered Lists"
          },

          {
            type: "output",
            content: [
              "<ul>",
              "<li>"
            ]
          },

          {
            type: "paragraph",
            content: "Used for: Menus, Features, Categories."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Description Lists"
          },

          {
            type: "output",
            content: [
              "<dl>",
              "<dt>",
              "<dd>"
            ]
          },

          {
            type: "paragraph",
            content: "Used for: Glossaries, Definitions, FAQs."
          },

          {
            type: "paragraph",
            content: "Goal: Master all three list types."
          }

        ]
      },

      {
        heading: "Phase 6: Tables",

        blocks: [

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<table>",
              "<tr>",
              "<th>",
              "<td>"
            ]
          },

          {
            type: "paragraph",
            content: "Advanced:"
          },

          {
            type: "output",
            content: [
              "<thead>",
              "<tbody>",
              "<tfoot>",
              "<caption>"
            ]
          },

          {
            type: "paragraph",
            content: "Also learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "rowspan",
              "colspan"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Display tabular data correctly."
          }

        ]
      },

      {
        heading: "Phase 7: Layout Fundamentals",

        blocks: [

          {
            type: "paragraph",
            content: "Block Elements"
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "<div>",
              "<p>",
              "<h1>"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Inline Elements"
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "<span>",
              "<a>",
              "<strong>"
            ]
          },

          {
            type: "paragraph",
            content: "Understand differences. Goal: Understand page structure."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Div"
          },

          {
            type: "paragraph",
            content: "Learn: <div>. Purpose: Group content, Create layouts."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Span"
          },

          {
            type: "paragraph",
            content: "Learn: <span>. Purpose: Style specific text."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Class and ID"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "class=\"\"",
              "id=\"\""
            ]
          },

          {
            type: "paragraph",
            content: "Understand: CSS targeting, JavaScript targeting. Goal: Prepare for CSS and JavaScript."
          }

        ]
      },

      {
        heading: "Phase 8: Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Forms are among the most important HTML topics."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn Forms"
          },

          {
            type: "paragraph",
            content: "Tag:"
          },

          {
            type: "output",
            content: [
              "<form>"
            ]
          },

          {
            type: "paragraph",
            content: "Attributes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "action",
              "method"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Collect user input."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Form Elements"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<input>",
              "<textarea>",
              "<select>",
              "<option>",
              "<button>",
              "<label>"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Input Types"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "text",
              "email",
              "password",
              "number",
              "date",
              "radio",
              "checkbox",
              "file",
              "url",
              "search",
              "range",
              "color"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Master modern form controls."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Form Validation"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "required",
              "pattern",
              "min",
              "max",
              "maxlength"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Validate input without JavaScript."
          }

        ]
      },

      {
        heading: "Phase 9: Semantic HTML",

        blocks: [

          {
            type: "paragraph",
            content: "This is where beginners start becoming professional developers."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
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
            content: "Why? Semantic HTML improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "SEO",
              "Readability",
              "Maintainability"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Write meaningful HTML."
          }

        ]
      },

      {
        heading: "Phase 10: Responsive Design Concepts",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites must work on: Phones, Tablets, Laptops, Desktops."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Viewport Meta Tag"
          },

          {
            type: "code",
            language: "html",
            content: `<meta name="viewport">`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Responsive Images"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "srcset",
              "sizes",
              "<picture>"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Mobile-Friendly Pages"
          },

          {
            type: "paragraph",
            content: "Understand:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Flexible layouts",
              "Responsive content",
              "Touch-friendly design"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Create mobile-ready websites."
          }

        ]
      },

      {
        heading: "Phase 11: Advanced HTML5 Features",

        blocks: [

          {
            type: "paragraph",
            content: "Now learn modern browser APIs."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Canvas"
          },

          {
            type: "output",
            content: [
              "<canvas>"
            ]
          },

          {
            type: "paragraph",
            content: "Used for: Games, Charts, Drawing."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "SVG"
          },

          {
            type: "output",
            content: [
              "<svg>"
            ]
          },

          {
            type: "paragraph",
            content: "Used for: Icons, Logos, Scalable graphics."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Web Storage"
          },

          {
            type: "paragraph",
            content: "Learn: localStorage, sessionStorage. Goal: Store data in browser."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Geolocation API"
          },

          {
            type: "paragraph",
            content: "Get user location. Applications: Maps, Delivery apps, Ride-sharing."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Drag and Drop API"
          },

          {
            type: "paragraph",
            content: "Used for: File uploads, Dashboards, Kanban boards."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Web Workers"
          },

          {
            type: "paragraph",
            content: "Run background tasks. Goal: Improve performance."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Server-Sent Events"
          },

          {
            type: "paragraph",
            content: "Receive live updates from server. Applications: Live notifications, News feeds, Stock updates."
          }

        ]
      },

      {
        heading: "Phase 12: Accessibility (A11Y)",

        blocks: [

          {
            type: "paragraph",
            content: "Many roadmaps skip this. Professional developers don't."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML: Already helps accessibility.",
              "Alt Text: alt=\"\"",
              "Labels: <label>",
              "Keyboard Navigation: Ensure websites work without a mouse."
            ]
          },

          {
            type: "paragraph",
            content: "ARIA Attributes"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "aria-label",
              "aria-hidden",
              "aria-expanded",
              "aria-describedby"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Build inclusive websites."
          }

        ]
      },

      {
        heading: "Phase 13: SEO-Friendly HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines rely heavily on HTML."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Proper Headings"
          },

          {
            type: "paragraph",
            content: "Use: `<h1>`, `<h2>`, `<h3>` correctly."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Meta Tags"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "<title>",
              "<meta name=\"description\">"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Semantic Structure"
          },

          {
            type: "paragraph",
            content: "Search engines understand `<header>`, `<main>`, `<article>` better than random divs."
          },

          {
            type: "paragraph",
            content: "Goal: Make content discoverable."
          }

        ]
      },

      {
        heading: "Phase 14: HTML Standards & Reference Topics",

        blocks: [

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Global Attributes: id, class, title, hidden, tabindex, contenteditable",
              "HTML Entities: &nbsp;, &lt;, &gt;, &amp;",
              "Symbols: €, ©, ™, ✓",
              "Emojis: 😀, 🚀, ❤️",
              "Character Sets: <meta charset=\"UTF-8\">",
              "URL Encoding: Space → %20"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Understand web communication standards."
          }

        ]
      },

      {
        heading: "Phase 15: Build Real Projects",

        blocks: [

          {
            type: "paragraph",
            content: "This is where true learning happens."
          },

          {
            type: "cards",
            items: [
              {
                title: "Project 1: Personal Profile Page",
                description: "Contains: Heading, Image, About section, Contact links"
              },
              {
                title: "Project 2: Restaurant Website",
                description: "Contains: Navigation, Menu, Images, Contact form"
              },
              {
                title: "Project 3: Portfolio Website",
                description: "Contains: Hero section, Skills, Projects, Contact form"
              },
              {
                title: "Project 4: Blog Layout",
                description: "Contains: Header, Articles, Sidebar, Footer"
              },
              {
                title: "Project 5: Survey Form",
                description: "Contains: Text inputs, Radio buttons, Checkboxes, Validation"
              },
              {
                title: "Project 6: Responsive Landing Page",
                description: "Contains: Responsive images, Mobile navigation, Semantic HTML"
              }
            ]
          }

        ]
      },

      {
        heading: "Common Beginner Mistakes",

        blocks: [

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Using only divs everywhere",
              "❌ Skipping semantic tags",
              "❌ Forgetting alt attributes",
              "❌ Using headings only for size",
              "❌ Ignoring accessibility",
              "❌ Not validating HTML",
              "❌ Building pages without responsive design",
              "❌ Learning tags without building projects"
            ]
          }

        ]
      },

      {
        heading: "Recommended Learning Order",

        blocks: [

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "HTML Basics",
              "Text Formatting",
              "Links",
              "Images",
              "Lists",
              "Tables",
              "Div & Span",
              "Forms",
              "Semantic HTML",
              "Responsive Design",
              "HTML5 APIs",
              "Accessibility",
              "SEO",
              "Best Practices",
              "Projects"
            ]
          }

        ]
      },

      {
        heading: "How Long Does It Take?",

        blocks: [

          {
            type: "table",
            headers: [
              "Goal",
              "Time"
            ],

            rows: [
              ["Learn Basics", "1 Week"],
              ["Understand Most Tags", "2–3 Weeks"],
              ["Build Small Projects", "1 Month"],
              ["Become Comfortable", "2 Months"],
              ["Professional HTML Skills", "3–4 Months"]
            ]
          },

          {
            type: "paragraph",
            content: "With daily practice of 1–2 hours:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Month 1 → HTML Fundamentals + Projects",
              "Month 2 → Semantic HTML + Forms + Responsive Design",
              "Month 3 → Accessibility + SEO + Advanced Features",
              "Month 4 → Real-world Projects"
            ]
          }

        ]
      },

      {
        heading: "Final Advice",

        blocks: [

          {
            type: "paragraph",
            content: "Most beginners think HTML is just a collection of tags. Professional developers understand that HTML is about structure, meaning, accessibility, SEO, and maintainability. Learning every tag is useful, but learning when and why to use each tag is what separates beginners from professionals."
          },

          {
            type: "paragraph",
            content: "The most effective roadmap is:"
          },

          {
            type: "flow",
            steps: [
              "Learn Concept",
              "Practice Tag",
              "Build Mini Project",
              "Apply Best Practices",
              "Repeat"
            ]
          },

          {
            type: "paragraph",
            content: "If you can confidently build a responsive, accessible, semantic, SEO-friendly portfolio website with forms, media, navigation, and proper structure, you have mastered HTML at a professional level and are ready to move on to CSS and JavaScript."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 As you follow this roadmap, remember that HTML is a living language. The W3C and WHATWG are constantly refining standards. Always keep a reference documentation site like MDN Web Docs bookmarked, and focus on *understanding* the purpose of the structure rather than just memorizing every single tag."
          }

        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Next Step: CSS
============================= */
    "next-step-css": {
    title: "Next Step: CSS",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Congratulations! 🎉"
          },

          {
            type: "paragraph",
            content: "If you have completed HTML, you have learned how to create the structure of a webpage. However, a webpage built with only HTML often looks plain and unappealing. This is where CSS comes in."
          },

          {
            type: "paragraph",
            content: "CSS (Cascading Style Sheets) is the technology used to control the appearance, layout, colors, spacing, animations, and responsiveness of web pages."
          },

          {
            type: "paragraph",
            content: "Think of it this way:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML = Skeleton",
              "CSS = Skin, Clothes, Appearance",
              "JavaScript = Brain & Behavior"
            ]
          },

          {
            type: "paragraph",
            content: "HTML tells the browser what content exists, while CSS tells the browser how that content should look."
          },

          {
            type: "paragraph",
            content: "This tutorial explains why CSS is the natural next step after HTML, what you should learn, how to learn it effectively, and how CSS fits into the modern web development roadmap."
          }

        ]
      },

      {
        heading: "Why Learn CSS After HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Suppose you create this HTML page:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>My Website</h1>\n<p>Welcome to my website.</p>\n<button>Click Me</button>`
          },

          {
            type: "paragraph",
            content: "It works, but it looks very basic."
          },

          {
            type: "paragraph",
            content: "With CSS, you can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Change colors",
              "Add backgrounds",
              "Adjust spacing",
              "Style buttons",
              "Create layouts",
              "Add animations",
              "Build responsive websites",
              "Create professional user interfaces"
            ]
          },

          {
            type: "paragraph",
            content: "Without CSS, every website would look almost the same."
          }

        ]
      },

      {
        heading: "What Is CSS?",

        blocks: [

          {
            type: "paragraph",
            content: "CSS stands for:"
          },

          {
            type: "output",
            content: [
              "Cascading Style Sheets"
            ]
          },

          {
            type: "paragraph",
            content: "It is a stylesheet language used to describe how HTML elements should be displayed."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: blue;\n    font-size: 40px;\n}`
          },

          {
            type: "paragraph",
            content: "This CSS tells the browser:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Make headings blue",
              "Set font size to 40 pixels"
            ]
          },

          {
            type: "paragraph",
            content: "Result:"
          },

          {
            type: "output",
            content: [
              "The HTML content becomes visually appealing."
            ]
          }

        ]
      },

      {
        heading: "How HTML and CSS Work Together",

        blocks: [

          {
            type: "paragraph",
            content: "Consider this example:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HTML"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Hello World</h1>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "CSS"
          },

          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: red;\n}`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "The heading appears in red."
            ]
          },

          {
            type: "paragraph",
            content: "HTML provides the content. CSS provides the presentation."
          }

        ]
      },

      {
        heading: "Why CSS Is Essential",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites rely heavily on CSS."
          },

          {
            type: "comparison",
            leftTitle: "Without CSS",
            leftItems: [
              "❌ No layouts",
              "❌ No responsive design",
              "❌ No professional appearance",
              "❌ No animations",
              "❌ No user-friendly interfaces"
            ],
            rightTitle: "With CSS",
            rightItems: [
              "✅ Beautiful designs",
              "✅ Mobile-friendly pages",
              "✅ Interactive experiences",
              "✅ Better user engagement",
              "✅ Modern web applications"
            ]
          }

        ]
      },

      {
        heading: "CSS Learning Roadmap",

        blocks: [

          {
            type: "paragraph",
            content: "After HTML, follow this roadmap:"
          },

          {
            type: "flow",
            steps: [
              "CSS Fundamentals",
              "Selectors",
              "Colors & Backgrounds",
              "Typography",
              "Box Model",
              "Layouts",
              "Flexbox",
              "Grid",
              "Responsive Design",
              "Animations",
              "Advanced CSS",
              "Projects"
            ]
          }

        ]
      },

      {
        heading: "Phase 1: CSS Fundamentals",

        blocks: [

          {
            type: "paragraph",
            content: "Start by understanding how CSS works."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn CSS Syntax"
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
            content: "Components:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Selector",
              "Property",
              "Value"
            ]
          },

          {
            type: "paragraph",
            content: "Understand:"
          },

          {
            type: "code",
            language: "css",
            content: `selector {\n    property: value;\n}`
          },

          {
            type: "paragraph",
            content: "Goal: Understand the basic structure of CSS rules."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Learn How to Add CSS"
          },

          {
            type: "paragraph",
            content: "There are three ways."
          },

          {
            type: "paragraph",
            content: "Inline CSS"
          },

          {
            type: "code",
            language: "html",
            content: `<h1 style="color:red;">Hello</h1>`
          },

          {
            type: "paragraph",
            content: "Internal CSS"
          },

          {
            type: "code",
            language: "html",
            content: `<style>\nh1 {\n    color: red;\n}\n</style>`
          },

          {
            type: "paragraph",
            content: "External CSS"
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet" href="style.css">`
          },

          {
            type: "paragraph",
            content: "CSS:"
          },

          {
            type: "code",
            language: "css",
            content: `h1 {\n    color: red;\n}`
          },

          {
            type: "paragraph",
            content: "Best Practice: Use external CSS for real projects."
          }

        ]
      },

      {
        heading: "Phase 2: CSS Selectors",

        blocks: [

          {
            type: "paragraph",
            content: "Selectors tell CSS which elements to style."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Element Selector"
          },

          {
            type: "code",
            language: "css",
            content: `p {\n    color: blue;\n}`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Class Selector"
          },

          {
            type: "code",
            language: "css",
            content: `.card {\n    background: white;\n}`
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="card"></div>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "ID Selector"
          },

          {
            type: "code",
            language: "css",
            content: `#header {\n    background: black;\n}`
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<div id="header"></div>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Universal Selector"
          },

          {
            type: "code",
            language: "css",
            content: `* {\n    margin: 0;\n}`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Grouping Selector"
          },

          {
            type: "code",
            language: "css",
            content: `h1, h2, h3 {\n    color: navy;\n}`
          },

          {
            type: "paragraph",
            content: "Goal: Master selecting elements efficiently."
          }

        ]
      },

      {
        heading: "Phase 3: Colors and Backgrounds",

        blocks: [

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Text Color"
          },

          {
            type: "code",
            language: "css",
            content: `color: red;`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Background Color"
          },

          {
            type: "code",
            language: "css",
            content: `background-color: yellow;`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "RGB Colors"
          },

          {
            type: "code",
            language: "css",
            content: `color: rgb(255, 0, 0);`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HEX Colors"
          },

          {
            type: "code",
            language: "css",
            content: `color: #ff0000;`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HSL Colors"
          },

          {
            type: "code",
            language: "css",
            content: `color: hsl(0, 100%, 50%);`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Background Images"
          },

          {
            type: "code",
            language: "css",
            content: `background-image: url("image.jpg");`
          },

          {
            type: "paragraph",
            content: "Goal: Create visually attractive pages."
          }

        ]
      },

      {
        heading: "Phase 4: Typography",

        blocks: [

          {
            type: "paragraph",
            content: "Typography is one of the most important design skills."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Font Family: `font-family: Arial;`",
              "Font Size: `font-size: 20px;`",
              "Font Weight: `font-weight: bold;`",
              "Text Alignment: `text-align: center;`",
              "Line Height: `line-height: 1.6;`"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Make content readable and professional."
          }

        ]
      },

      {
        heading: "Phase 5: The CSS Box Model",

        blocks: [

          {
            type: "paragraph",
            content: "This is one of the most important CSS concepts."
          },

          {
            type: "paragraph",
            content: "Every HTML element is a box."
          },

          {
            type: "paragraph",
            content: "The box contains:"
          },

          {
            type: "tree",
            content: `Margin
 └─ Border
     └─ Padding
         └─ Content`
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Width: `width: 300px;`",
              "Height: `height: 200px;`",
              "Padding: `padding: 20px;`",
              "Border: `border: 2px solid black;`",
              "Margin: `margin: 20px;`"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Understand spacing and sizing."
          }

        ]
      },

      {
        heading: "Phase 6: CSS Layouts",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites are built using layouts."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Display Property"
          },

          {
            type: "output",
            content: [
              "display: block;",
              "display: inline;",
              "display: inline-block;"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Positioning"
          },

          {
            type: "output",
            content: [
              "position: static;",
              "position: relative;",
              "position: absolute;",
              "position: fixed;",
              "position: sticky;"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Understand element placement."
          }

        ]
      },

      {
        heading: "Phase 7: Flexbox",

        blocks: [

          {
            type: "paragraph",
            content: "Flexbox is the most useful layout system for beginners."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `.container {\n    display: flex;\n}`
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "justify-content",
              "align-items",
              "flex-direction",
              "flex-wrap",
              "gap"
            ]
          },

          {
            type: "paragraph",
            content: "What Flexbox Is Used For:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation bars",
              "Card layouts",
              "Centering content",
              "Horizontal layouts"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Create modern layouts easily."
          }

        ]
      },

      {
        heading: "Phase 8: CSS Grid",

        blocks: [

          {
            type: "paragraph",
            content: "Grid is designed for two-dimensional layouts."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `.container {\n    display: grid;\n}`
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "grid-template-columns",
              "grid-template-rows",
              "gap",
              "grid-area"
            ]
          },

          {
            type: "paragraph",
            content: "Used For:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboards",
              "Complex layouts",
              "Magazine-style pages"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Build professional page structures."
          }

        ]
      },

      {
        heading: "Phase 9: Responsive Design",

        blocks: [

          {
            type: "paragraph",
            content: "Most users browse on mobile devices."
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Media Queries"
          },

          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {\n\n}`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Relative Units"
          },

          {
            type: "paragraph",
            content: "Learn:"
          },

          {
            type: "output",
            content: [
              "%",
              "em",
              "rem",
              "vw",
              "vh"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Mobile-First Design"
          },

          {
            type: "paragraph",
            content: "Design for phones first. Then scale up."
          },

          {
            type: "paragraph",
            content: "Goal: Create websites that work everywhere."
          }

        ]
      },

      {
        heading: "Phase 10: CSS Transitions and Animations",

        blocks: [

          {
            type: "paragraph",
            content: "Add movement and polish."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Transition"
          },

          {
            type: "code",
            language: "css",
            content: `transition: 0.3s;`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Transform"
          },

          {
            type: "code",
            language: "css",
            content: `transform: scale(1.1);`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Animation"
          },

          {
            type: "code",
            language: "css",
            content: `@keyframes slide {\n\n}`
          },

          {
            type: "paragraph",
            content: "Goal: Make interfaces feel alive."
          }

        ]
      },

      {
        heading: "Phase 11: Advanced CSS Topics",

        blocks: [

          {
            type: "paragraph",
            content: "After mastering the basics, learn:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Variables: `--primary-color: blue;`",
              "Pseudo Classes: `:hover`, `:focus`, `:first-child`, `:last-child`",
              "Pseudo Elements: `::before`, `::after`",
              "CSS Functions: `calc()`, `clamp()`, `min()`, `max()`",
              "Gradients: `linear-gradient()`",
              "Filters: `filter: blur(5px);`"
            ]
          },

          {
            type: "paragraph",
            content: "Goal: Create advanced designs."
          }

        ]
      },

      {
        heading: "Projects to Build While Learning CSS",

        blocks: [

          {
            type: "paragraph",
            content: "Learning CSS without projects is ineffective."
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "cards",
            items: [
              {
                title: "Project 1: Personal Profile Page",
                description: "Practice: Colors, Typography, Spacing"
              },
              {
                title: "Project 2: Landing Page",
                description: "Practice: Hero section, Buttons, Layouts"
              },
              {
                title: "Project 3: Portfolio Website",
                description: "Practice: Flexbox, Responsive design"
              },
              {
                title: "Project 4: Pricing Cards",
                description: "Practice: Box model, Hover effects"
              },
              {
                title: "Project 5: Blog Layout",
                description: "Practice: CSS Grid, Typography"
              },
              {
                title: "Project 6: Responsive Dashboard",
                description: "Practice: Grid, Media queries"
              }
            ]
          }

        ]
      },

      {
        heading: "Common CSS Mistakes Beginners Make",

        blocks: [

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Using only pixels everywhere",
              "❌ Ignoring responsive design",
              "❌ Writing extremely long CSS files",
              "❌ Using too many colors",
              "❌ Not understanding the box model",
              "❌ Skipping Flexbox",
              "❌ Skipping Grid",
              "❌ Copy-pasting CSS without understanding it"
            ]
          }

        ]
      },

      {
        heading: "When Have You Learned CSS?",

        blocks: [

          {
            type: "paragraph",
            content: "You can consider yourself comfortable with CSS when you can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✅ Build responsive websites",
              "✅ Create layouts using Flexbox",
              "✅ Create layouts using Grid",
              "✅ Style forms",
              "✅ Design navigation bars",
              "✅ Create animations",
              "✅ Build mobile-friendly pages",
              "✅ Recreate website designs from screenshots"
            ]
          }

        ]
      },

      {
        heading: "What Comes After CSS?",

        blocks: [

          {
            type: "paragraph",
            content: "Once you are comfortable with HTML and CSS:"
          },

          {
            type: "flow",
            steps: [
              "HTML",
              "CSS",
              "JavaScript",
              "DOM Manipulation",
              "ES6+",
              "Git & GitHub",
              "React",
              "Backend Development",
              "Full Stack Development"
            ]
          },

          {
            type: "paragraph",
            content: "JavaScript is the next major technology because it adds interactivity and logic to web pages."
          }

        ]
      },

      {
        heading: "Professional Developer Path",

        blocks: [

          {
            type: "paragraph",
            content: "A modern Frontend Developer roadmap looks like:"
          },

          {
            type: "flow",
            steps: [
              "HTML",
              "CSS",
              "Responsive Design",
              "JavaScript",
              "DOM",
              "Git",
              "React",
              "APIs",
              "TypeScript",
              "Next.js"
            ]
          }

        ]
      },

      {
        heading: "Final Advice",

        blocks: [

          {
            type: "paragraph",
            content: "Do not rush to JavaScript immediately after learning a few CSS properties. Many beginners know JavaScript but struggle to build attractive interfaces because their CSS foundation is weak."
          },

          {
            type: "paragraph",
            content: "Spend time mastering:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Selectors",
              "Box Model",
              "Flexbox",
              "Grid",
              "Responsive Design",
              "Animations"
            ]
          },

          {
            type: "paragraph",
            content: "If you can build a fully responsive portfolio website, landing page, blog layout, pricing section, navigation bar, and contact form using HTML and CSS alone, you are ready to move confidently into JavaScript and modern frontend development."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 As you transition into CSS, remember that CSS is not just about making things 'pretty'—it's a robust layout engine. A great way to practice is to open your favorite websites (like YouTube or Twitter), right-click and 'Inspect' elements, and try to understand how they built their layouts using Flexbox and Grid. Don't be afraid to break things in the DevTools!"
          }

        ]
      }
    ]
  },
};

export default htmlConclusion;