const htmlInterviewPreparation = {

/* ===========================
    First Topic : HTML Interview Questions
============================= */
    "html-interview-questions": {
    title: "HTML Interview Questions",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Part 1: HTML Fundamentals",

        blocks: [

          {
            type: "paragraph",
            content: "This section covers the most important HTML fundamentals that are frequently asked in internships, placement drives, frontend interviews, and software engineering interviews. These questions focus on understanding the foundation of HTML rather than memorizing tags. HTML is the standard markup language used to structure content on the web and remains the backbone of every website. (Great Learning)"
          }

        ]
      },

      {
        heading: "1. What is HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "HTML stands for HyperText Markup Language."
          },

          {
            type: "paragraph",
            content: "It is the standard markup language used to create and structure web pages. HTML defines the content and structure of a webpage by using elements such as headings, paragraphs, images, links, tables, forms, and multimedia."
          },

          {
            type: "paragraph",
            content: "HTML is called a markup language, not a programming language, because it does not perform logical operations or calculations. Instead, it describes how content should be organized and displayed in a browser. (Great Learning)"
          },

          {
            type: "note",
            content: "Interview Tip: A complete answer should mention: HTML = HyperText Markup Language, Used for structuring web content, Not a programming language, Works together with CSS and JavaScript."
          }

        ]
      },

      {
        heading: "2. Why is HTML called HyperText Markup Language?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The name consists of three parts:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HyperText: HyperText refers to text containing links that connect one document to another.",
              "Markup: Markup means adding tags around content to describe its structure and meaning.",
              "Language: It is a language consisting of rules and syntax used to create web documents."
            ]
          },

          {
            type: "paragraph",
            content: "Therefore, HTML is a language that uses markup tags to create interconnected web documents."
          }

        ]
      },

      {
        heading: "3. Is HTML a Programming Language?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "No. HTML is a markup language, not a programming language."
          },

          {
            type: "paragraph",
            content: "A programming language can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Make decisions",
              "Execute loops",
              "Perform calculations",
              "Implement algorithms"
            ]
          },

          {
            type: "paragraph",
            content: "HTML cannot perform any of these tasks. Instead, HTML only defines the structure and meaning of content on a webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "HTML can create a button.",
              "JavaScript can define what happens when the button is clicked."
            ]
          }

        ]
      },

      {
        heading: "4. What is the role of HTML in web development?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "HTML forms the structure of a webpage."
          },

          {
            type: "paragraph",
            content: "In modern web development:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML provides structure",
              "CSS provides styling",
              "JavaScript provides interactivity"
            ]
          },

          {
            type: "paragraph",
            content: "Think of a webpage as a house:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML = Skeleton/Structure",
              "CSS = Paint and Decoration",
              "JavaScript = Electrical System and Automation"
            ]
          }

        ]
      },

      {
        heading: "5. Who invented HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "HTML was invented by Tim Berners-Lee in 1991."
          },

          {
            type: "paragraph",
            content: "He created HTML while working at CERN as part of the development of the World Wide Web."
          },

          {
            type: "paragraph",
            content: "The original purpose of HTML was to allow researchers to share documents through interconnected hyperlinks. (TutorialsPoint)"
          }

        ]
      },

      {
        heading: "6. Briefly explain the evolution of HTML.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML 1.0 (1991): Basic text formatting, Hyperlinks",
              "HTML 2.0 (1995): First official HTML standard",
              "HTML 3.2 (1997): Tables, Applets, More formatting options",
              "HTML 4.01 (1999): Better styling support, Separation of content and presentation",
              "XHTML (2000): Stricter XML-based version of HTML",
              "HTML5 (2014): Semantic elements, Audio and video support, Canvas, Local Storage, Modern APIs"
            ]
          },

          {
            type: "paragraph",
            content: "Today, HTML is maintained as a Living Standard that evolves continuously. (Educative)"
          }

        ]
      },

      {
        heading: "7. What is HTML5?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "HTML5 is the modern version of HTML."
          },

          {
            type: "paragraph",
            content: "It introduced many new features that previously required third-party plugins such as Flash."
          },

          {
            type: "paragraph",
            content: "Major additions include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic elements",
              "Audio support",
              "Video support",
              "Canvas graphics",
              "SVG integration",
              "Geolocation API",
              "Web Storage API",
              "Improved forms"
            ]
          },

          {
            type: "paragraph",
            content: "HTML5 significantly improved accessibility, performance, and developer experience. (Verve AI)"
          }

        ]
      },

      {
        heading: "8. What is the difference between HTML and HTML5?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "table",
            headers: [
              "HTML",
              "HTML5"
            ],

            rows: [
              ["Older versions", "Modern standard"],
              ["Limited multimedia support", "Native audio and video"],
              ["Mostly generic div-based layouts", "Semantic elements"],
              ["Basic form controls", "Advanced form controls"],
              ["No built-in storage APIs", "LocalStorage and SessionStorage"],
              ["No Canvas support", "Canvas support"]
            ]
          },

          {
            type: "paragraph",
            content: "HTML5 provides richer functionality and better support for modern web applications. (GeeksforGeeks)"
          }

        ]
      },

      {
        heading: "9. What is the basic structure of an HTML document?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "An HTML document consists of:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "DOCTYPE: Defines document type.",
              "html: Root element.",
              "head: Contains metadata.",
              "body: Contains visible page content."
            ]
          },

          {
            type: "paragraph",
            content: "Structure:"
          },

          {
            type: "output",
            content: [
              "DOCTYPE",
              "html",
              "head",
              "body"
            ]
          },

          {
            type: "paragraph",
            content: "This structure helps browsers correctly interpret the page. (GeeksforGeeks)"
          }

        ]
      },

      {
        heading: "10. What is the purpose of the head section?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The head section contains metadata about the webpage."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Page title",
              "Character encoding",
              "Viewport settings",
              "External CSS files",
              "JavaScript files",
              "SEO metadata"
            ]
          },

          {
            type: "paragraph",
            content: "Content inside the head is generally not displayed directly on the webpage."
          }

        ]
      },

      {
        heading: "11. What is the purpose of the body section?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The body contains all content visible to users."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Paragraphs",
              "Images",
              "Links",
              "Tables",
              "Forms",
              "Videos"
            ]
          },

          {
            type: "paragraph",
            content: "Everything a user sees is generally placed inside the body element."
          }

        ]
      },

      {
        heading: "12. What is DOCTYPE?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "DOCTYPE is a declaration placed at the beginning of an HTML document."
          },

          {
            type: "paragraph",
            content: "Its purpose is to tell the browser which rendering mode should be used."
          },

          {
            type: "paragraph",
            content: "For HTML5:"
          },

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>`
          },

          {
            type: "paragraph",
            content: "This is the simplest DOCTYPE declaration introduced by HTML5. (ITLead)"
          }

        ]
      },

      {
        heading: "13. Why is DOCTYPE important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "DOCTYPE ensures that browsers render the page using Standards Mode."
          },

          {
            type: "paragraph",
            content: "Without it, browsers may switch to Quirks Mode, which attempts to mimic older browser behavior."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Consistent rendering",
              "Better standards compliance",
              "Fewer layout issues",
              "Improved cross-browser compatibility"
            ]
          },

          {
            type: "paragraph",
            content: "(ITLead)"
          }

        ]
      },

      {
        heading: "14. What happens if DOCTYPE is missing?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "If DOCTYPE is omitted:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browser may enter Quirks Mode",
              "Layout inconsistencies can occur",
              "Older rendering rules may be applied",
              "Cross-browser behavior becomes unpredictable"
            ]
          },

          {
            type: "paragraph",
            content: "Modern websites should always include a DOCTYPE declaration. (ITLead)"
          }

        ]
      },

      {
        heading: "15. What is an HTML Element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "An HTML element consists of:"
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
            content: "Example conceptually:"
          },

          {
            type: "output",
            content: [
              "Element = Opening Tag + Content + Closing Tag"
            ]
          },

          {
            type: "paragraph",
            content: "Elements represent parts of a webpage such as:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Paragraphs",
              "Links",
              "Images",
              "Tables"
            ]
          }

        ]
      },

      {
        heading: "16. What is the difference between a Tag and an Element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "This is a common interview question."
          },

          {
            type: "comparison",
            leftTitle: "Tag",
            leftItems: [
              "The markup itself.",
              "Examples:",
              "Opening tag",
              "Closing tag"
            ],
            rightTitle: "Element",
            rightItems: [
              "The complete structure including content.",
              "Example:",
              "Tag = individual markup markers",
              "Element = complete content unit"
            ]
          },

          {
            type: "paragraph",
            content: "Many candidates incorrectly use these terms interchangeably. (DAAC)"
          }

        ]
      },

      {
        heading: "17. What are Empty Elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Empty elements contain no content and do not require closing tags."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "br",
              "hr",
              "img",
              "input",
              "meta",
              "link"
            ]
          },

          {
            type: "paragraph",
            content: "These are also called Void Elements. (DAAC)"
          }

        ]
      },

      {
        heading: "18. What are HTML Attributes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Attributes provide additional information about elements."
          },

          {
            type: "paragraph",
            content: "They are written inside the opening tag."
          },

          {
            type: "paragraph",
            content: "Examples include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "id",
              "class",
              "href",
              "src",
              "alt",
              "title"
            ]
          },

          {
            type: "paragraph",
            content: "Attributes modify the behavior or appearance of an element. (Great Learning)"
          }

        ]
      },

      {
        heading: "19. What are Global Attributes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Global attributes can be applied to almost every HTML element."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "id",
              "class",
              "title",
              "style",
              "hidden",
              "lang",
              "tabindex"
            ]
          },

          {
            type: "paragraph",
            content: "They provide universal functionality across different elements."
          }

        ]
      },

      {
        heading: "20. What is the difference between id and class?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "comparison",
            leftTitle: "id",
            leftItems: [
              "Unique within a page",
              "Used for one specific element"
            ],
            rightTitle: "class",
            rightItems: [
              "Can be reused",
              "Applied to multiple elements"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "One employee ID belongs to one person.",
              "A department name can belong to many employees.",
              "Similarly:",
              "id = unique",
              "class = reusable"
            ]
          },

          {
            type: "paragraph",
            content: "(Great Learning)"
          }

        ]
      },

      {
        heading: "21. How does a browser render an HTML page?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Browser rendering generally follows these steps:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Download HTML document",
              "Parse HTML",
              "Create DOM Tree",
              "Download CSS resources",
              "Create CSSOM",
              "Combine DOM + CSSOM",
              "Create Render Tree",
              "Calculate layout",
              "Paint pixels on screen"
            ]
          },

          {
            type: "paragraph",
            content: "This process converts HTML code into the webpage users see."
          }

        ]
      },

      {
        heading: "22. What is the DOM?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "DOM stands for Document Object Model."
          },

          {
            type: "paragraph",
            content: "It is a tree-like representation of an HTML document."
          },

          {
            type: "paragraph",
            content: "Every HTML element becomes a node inside the DOM tree."
          },

          {
            type: "paragraph",
            content: "JavaScript uses the DOM to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Read content",
              "Modify content",
              "Add elements",
              "Remove elements",
              "Respond to user actions"
            ]
          }

        ]
      },

      {
        heading: "23. What is HTML Parsing?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "HTML parsing is the process by which the browser reads and interprets HTML code."
          },

          {
            type: "paragraph",
            content: "The parser:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Reads HTML from top to bottom",
              "Identifies elements",
              "Creates DOM nodes",
              "Builds the DOM tree"
            ]
          },

          {
            type: "paragraph",
            content: "Parsing converts raw HTML text into a structured document object model."
          }

        ]
      },

      {
        heading: "24. What is the difference between Parsing and Rendering?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "comparison",
            leftTitle: "Parsing",
            leftItems: [
              "Reading and understanding HTML."
            ],
            rightTitle: "Rendering",
            rightItems: [
              "Displaying the page visually."
            ]
          },

          {
            type: "paragraph",
            content: "In simple terms:"
          },

          {
            type: "output",
            content: [
              "Parsing = Understanding the document",
              "Rendering = Drawing the document"
            ]
          },

          {
            type: "paragraph",
            content: "Both are essential steps in loading a webpage."
          }

        ]
      },

      {
        heading: "25. What is the rendering pipeline of a browser?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The rendering pipeline is the sequence of steps browsers use to display webpages:"
          },

          {
            type: "flow",
            steps: [
              "HTML",
              "DOM",
              "CSSOM",
              "Render Tree",
              "Layout",
              "Paint",
              "Composite"
            ]
          },

          {
            type: "note",
            content: "Interview-Winning One-Line Answer: The browser parses HTML into a DOM tree, combines it with CSS information to create a render tree, calculates layout, and finally paints pixels on the screen. This answer often impresses interviewers because it demonstrates understanding beyond basic HTML syntax."
          }

        ]
      },

      {
        heading: "Key Topics to Revise Before Interviews",

        blocks: [

          {
            type: "paragraph",
            content: "From Part 1, make sure you can confidently explain:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML and its purpose",
              "Evolution of HTML",
              "HTML vs HTML5",
              "Document structure",
              "DOCTYPE and rendering modes",
              "Elements vs Tags",
              "Empty Elements",
              "Attributes",
              "DOM",
              "HTML Parsing",
              "Browser Rendering Pipeline"
            ]
          },

          {
            type: "paragraph",
            content: "Mastering these fundamentals makes the remaining HTML interview sections significantly easier."
          },
          {
            type: "divider"
          }

        ]
      },

      {
        heading: "Part 2: HTML Document Structure"
      },

      {
        heading: "1. What are the main sections of an HTML document?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "An HTML document is generally divided into two major sections:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "<head>"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Contains metadata about the webpage.",
              "Includes title, meta tags, stylesheets, scripts, favicon, etc.",
              "Content inside the head is usually not displayed directly on the page."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "<body>"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Contains all visible content shown to users.",
              "Includes headings, paragraphs, images, forms, videos, tables, etc."
            ]
          },

          {
            type: "paragraph",
            content: "Together they form a complete webpage structure."
          }

        ]
      },

      {
        heading: "2. What is the purpose of the <html> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <html> element is the root element of an HTML document."
          },

          {
            type: "paragraph",
            content: "It wraps the entire webpage and tells the browser that everything inside belongs to an HTML document."
          },

          {
            type: "paragraph",
            content: "It usually contains:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<head>",
              "<body>"
            ]
          },

          {
            type: "paragraph",
            content: "The browser begins parsing the page from the <html> element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<html>\n    <head>\n    </head>\n\n    <body>\n    </body>\n</html>`
          }

        ]
      },

      {
        heading: "3. Why is the lang attribute important in the <html> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The lang attribute specifies the language of the webpage."
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
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Helps screen readers pronounce words correctly.",
              "Improves accessibility.",
              "Helps search engines understand content language.",
              "Assists browser translation tools."
            ]
          },

          {
            type: "paragraph",
            content: "Without it, accessibility tools may struggle to interpret the page correctly."
          }

        ]
      },

      {
        heading: "4. What is the purpose of the <head> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <head> element stores information about the document rather than visible page content."
          },

          {
            type: "paragraph",
            content: "Common items inside <head>:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Title",
              "Meta tags",
              "CSS files",
              "JavaScript files",
              "Character encoding",
              "Favicon"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<head>\n    <title>My Website</title>\n    <meta charset="UTF-8">\n</head>`
          }

        ]
      },

      {
        heading: "5. What is the purpose of the <body> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <body> element contains all visible content displayed to users."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Paragraphs",
              "Images",
              "Forms",
              "Videos",
              "Tables"
            ]
          },

          {
            type: "paragraph",
            content: "Everything users interact with is usually inside the body."
          }

        ]
      },

      {
        heading: "6. What is the purpose of the <title> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <title> tag defines the title of a webpage."
          },

          {
            type: "paragraph",
            content: "It appears:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "On browser tabs",
              "In bookmarks",
              "In search engine results"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<title>Learn HTML</title>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves SEO",
              "Helps users identify pages",
              "Provides meaningful browser tab names"
            ]
          }

        ]
      },

      {
        heading: "7. Where should the <title> tag be placed?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <title> tag must be placed inside the <head> section."
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<head>\n    <title>My Page</title>\n</head>`
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<body>\n    <title>My Page</title>\n</body>`
          },

          {
            type: "paragraph",
            content: "Browsers expect the title to be inside the head."
          }

        ]
      },

      {
        heading: "8. Why is the page title important for SEO?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Search engines often use the title as the clickable headline in search results."
          },

          {
            type: "paragraph",
            content: "A good title:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Describes the page clearly",
              "Contains relevant keywords",
              "Improves click-through rate",
              "Helps ranking"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Good:",
              "<title>HTML Interview Questions for Beginners</title>",
              "",
              "Poor:",
              "<title>Page 1</title>"
            ]
          }

        ]
      },

      {
        heading: "9. What are meta tags?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Meta tags provide information about the webpage."
          },

          {
            type: "paragraph",
            content: "They are placed inside the <head> section."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">\n<meta name="description" content="HTML Tutorial">`
          },

          {
            type: "paragraph",
            content: "Meta tags are primarily used by:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browsers",
              "Search engines",
              "Social media platforms"
            ]
          }

        ]
      },

      {
        heading: "10. What is the purpose of <meta charset=\"UTF-8\">?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "It specifies the character encoding used by the webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "UTF-8 supports:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "English",
              "Hindi",
              "Chinese",
              "Arabic",
              "Emojis",
              "Most world languages"
            ]
          },

          {
            type: "paragraph",
            content: "It is the modern standard encoding for websites."
          }

        ]
      },

      {
        heading: "11. What happens if character encoding is not specified?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The browser may guess the encoding incorrectly."
          },

          {
            type: "paragraph",
            content: "This can cause:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Garbled text",
              "Strange symbols",
              "Incorrect display of special characters"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Instead of:",
              "Café",
              "",
              "It might display:",
              "CafÃ©"
            ]
          },

          {
            type: "paragraph",
            content: "Therefore UTF-8 should always be specified."
          }

        ]
      },

      {
        heading: "12. What is the purpose of the meta description tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The meta description provides a summary of the webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta\nname="description"\ncontent="Learn HTML from beginner to advanced level">`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves SEO",
              "Appears in search results",
              "Helps users understand page content"
            ]
          }

        ]
      },

      {
        heading: "13. What is the viewport meta tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The viewport meta tag controls how webpages appear on mobile devices."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta\nname="viewport"\ncontent="width=device-width, initial-scale=1.0">`
          },

          {
            type: "paragraph",
            content: "Without it:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Pages may appear zoomed out.",
              "Mobile layouts may break."
            ]
          }

        ]
      },

      {
        heading: "14. What does width=device-width mean?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "It tells the browser:"
          },

          {
            type: "output",
            content: [
              "\"Set the page width equal to the device screen width.\""
            ]
          },

          {
            type: "paragraph",
            content: "Example: On a phone:"
          },

          {
            type: "output",
            content: [
              "width=device-width"
            ]
          },

          {
            type: "paragraph",
            content: "makes the webpage fit the screen properly. It is essential for responsive design."
          }

        ]
      },

      {
        heading: "15. What does initial-scale=1.0 mean?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "It tells the browser to load the page at 100% zoom."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "initial-scale=1.0"
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
              "Consistent display",
              "Better mobile experience",
              "Prevents unwanted zoom levels"
            ]
          }

        ]
      },

      {
        heading: "16. What is the purpose of the <link> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <link> tag connects external resources to the webpage."
          },

          {
            type: "paragraph",
            content: "Most commonly:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS files",
              "Favicons"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<link\nrel="stylesheet"\nhref="style.css">`
          },

          {
            type: "paragraph",
            content: "The browser downloads the resource and applies it to the page."
          }

        ]
      },

      {
        heading: "17. How do you connect an external CSS file?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Using the <link> element."
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
            content: "Explanation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "rel=\"stylesheet\" indicates a CSS file.",
              "href specifies the file location."
            ]
          }

        ]
      },

      {
        heading: "18. What is a favicon and how is it added?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A favicon is the small icon displayed in browser tabs."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<link\nrel="icon"\nhref="favicon.ico">`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves branding",
              "Makes tabs easier to identify",
              "Gives websites a professional appearance"
            ]
          }

        ]
      },

      {
        heading: "19. What is the purpose of the <script> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <script> tag is used to include JavaScript."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "JavaScript can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Add interactivity",
              "Validate forms",
              "Fetch data",
              "Manipulate HTML"
            ]
          }

        ]
      },

      {
        heading: "20. What is the difference between internal and external JavaScript?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Internal JavaScript"
          },

          {
            type: "paragraph",
            content: "Written directly inside the page:"
          },

          {
            type: "code",
            language: "html",
            content: `<script>\nalert("Hello");\n</script>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "External JavaScript"
          },

          {
            type: "paragraph",
            content: "Stored in a separate file:"
          },

          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "External scripts are preferred because they:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improve maintainability",
              "Promote code reuse",
              "Keep HTML cleaner"
            ]
          }

        ]
      },

      {
        heading: "21. Why are scripts often placed before the closing </body> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "If scripts load first, they can block page rendering."
          },

          {
            type: "paragraph",
            content: "Placing them near the end allows:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML to load first.",
              "Content to appear faster.",
              "Better user experience."
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<body>\n    Content here\n\n    <script src="app.js"></script>\n</body>`
          }

        ]
      },

      {
        heading: "22. What is the purpose of the defer attribute in scripts?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "defer tells the browser:"
          },

          {
            type: "output",
            content: [
              "\"Download the script now but execute it after HTML parsing finishes.\""
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<script src="app.js" defer></script>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster page rendering",
              "Prevents blocking HTML parsing"
            ]
          }

        ]
      },

      {
        heading: "23. What is the purpose of the <noscript> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <noscript> element provides alternative content when JavaScript is disabled."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<noscript>\nPlease enable JavaScript to use this website.\n</noscript>`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "User guidance",
              "Progressive enhancement"
            ]
          }

        ]
      },

      {
        heading: "24. What is the purpose of the <base> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <base> tag defines a default URL for all relative links."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<base href="https://example.com/">`
          },

          {
            type: "paragraph",
            content: "Now:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="about.html">`
          },

          {
            type: "paragraph",
            content: "becomes:"
          },

          {
            type: "output",
            content: [
              "https://example.com/about.html"
            ]
          },

          {
            type: "paragraph",
            content: "Only one <base> tag should be used per document."
          }

        ]
      },

      {
        heading: "25. What are absolute and relative URLs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Absolute URL"
          },

          {
            type: "paragraph",
            content: "Contains the full address."
          },

          {
            type: "output",
            content: [
              "https://example.com/about.html"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Relative URL"
          },

          {
            type: "paragraph",
            content: "Contains only the path."
          },

          {
            type: "output",
            content: [
              "about.html"
            ]
          },

          {
            type: "paragraph",
            content: "Relative URLs are shorter and easier to maintain."
          }

        ]
      },

      {
        heading: "26. In what order does a browser process an HTML document?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The browser generally follows these steps:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Downloads HTML.",
              "Reads the DOCTYPE.",
              "Parses the HTML.",
              "Builds the DOM tree.",
              "Downloads CSS.",
              "Creates the CSSOM.",
              "Executes JavaScript.",
              "Combines DOM and CSSOM.",
              "Creates the render tree.",
              "Paints the page on screen."
            ]
          },

          {
            type: "paragraph",
            content: "Understanding this process helps developers optimize website performance."
          }

        ]
      },

      {
        heading: "27. What are the most important tags inside the <head> section of a modern webpage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A modern webpage commonly contains:"
          },

          {
            type: "code",
            language: "html",
            content: `<head>\n    <meta charset="UTF-8">\n\n    <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1.0">\n\n    <title>Page Title</title>\n\n    <meta\n    name="description"\n    content="Page Description">\n\n    <link\n    rel="stylesheet"\n    href="style.css">\n\n    <script\n    src="app.js"\n    defer></script>\n</head>`
          },

          {
            type: "paragraph",
            content: "These tags provide:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Proper encoding",
              "Mobile responsiveness",
              "SEO optimization",
              "Styling",
              "Functionality"
            ]
          }

        ]
      },

      {
        heading: "Interviewer Favorite Quick Question",

        blocks: [

          {
            type: "paragraph",
            content: "Q: Which part of an HTML document is visible to users?"
          },

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The content inside the <body> element is visible to users. The <head> section mainly contains metadata and configuration information that is not directly displayed on the webpage."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 3: Text Formatting & Content Elements"
      },

      {
        heading: "1. What are HTML text formatting elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "HTML text formatting elements are tags used to structure, emphasize, highlight, or present text in a meaningful way."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "<strong>Important</strong>",
              "<em>Emphasized</em>",
              "<mark>Highlighted</mark>",
              "<small>Small text</small>"
            ]
          },

          {
            type: "paragraph",
            content: "These elements improve:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Readability",
              "Accessibility",
              "SEO",
              "Content structure"
            ]
          },

          {
            type: "paragraph",
            content: "Many formatting tags provide semantic meaning rather than only visual styling."
          }

        ]
      },

      {
        heading: "2. What are HTML headings?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Headings define titles and subheadings of content."
          },

          {
            type: "paragraph",
            content: "HTML provides six heading levels:"
          },

          {
            type: "output",
            content: [
              "<h1>Main Heading</h1>",
              "<h2>Sub Heading</h2>",
              "<h3>Section Heading</h3>",
              "<h4>Subsection</h4>",
              "<h5>Minor Heading</h5>",
              "<h6>Smallest Heading</h6>"
            ]
          },

          {
            type: "paragraph",
            content: "Hierarchy:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "h1 → Highest importance",
              "h6 → Lowest importance"
            ]
          },

          {
            type: "paragraph",
            content: "Headings help:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Organize content",
              "Improve SEO",
              "Enhance accessibility",
              "Assist screen readers"
            ]
          }

        ]
      },

      {
        heading: "3. Why should there typically be only one <h1> on a page?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <h1> represents the main topic of the page."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>HTML Interview Questions</h1>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Clear document structure",
              "Better SEO understanding",
              "Easier navigation for screen readers"
            ]
          },

          {
            type: "paragraph",
            content: "Although HTML5 technically allows multiple <h1> elements in different sections, most SEO and accessibility guidelines recommend a single primary <h1>."
          }

        ]
      },

      {
        heading: "4. What is the difference between headings and paragraphs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "Heading",
            leftItems: [
              "<h2>About Us</h2>",
              "Used for:",
              "Titles",
              "Section names",
              "Content hierarchy"
            ],
            rightTitle: "Paragraph",
            rightItems: [
              "<p>We are a software company.</p>",
              "Used for:",
              "Regular textual content"
            ]
          },

          {
            type: "paragraph",
            content: "Headings define structure, while paragraphs contain information."
          }

        ]
      },

      {
        heading: "5. What is the <p> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <p> tag represents a paragraph."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>This is a paragraph.</p>`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Block-level element",
              "Automatically adds spacing",
              "Improves readability"
            ]
          },

          {
            type: "paragraph",
            content: "Paragraphs should be used for normal text content."
          }

        ]
      },

      {
        heading: "6. Can paragraphs be nested inside other paragraphs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "No."
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>\n    First paragraph\n    <p>Second paragraph</p>\n</p>`
          },

          {
            type: "paragraph",
            content: "HTML automatically closes the first paragraph before starting the second."
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>First paragraph</p>\n<p>Second paragraph</p>`
          }

        ]
      },

      {
        heading: "7. What is the <br> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <br> tag inserts a line break."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `Hello<br>\nWorld`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Hello\nWorld"
            ]
          },

          {
            type: "paragraph",
            content: "It is an empty element and does not require a closing tag."
          }

        ]
      },

      {
        heading: "8. When should <br> be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Use <br> when a line break is part of the content."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Addresses",
              "Poems",
              "Song lyrics"
            ]
          },

          {
            type: "code",
            language: "html",
            content: `123 Main Street<br>\nNew York<br>\nUSA`
          },

          {
            type: "paragraph",
            content: "Do not use <br> to create layout spacing."
          }

        ]
      },

      {
        heading: "9. What is the <hr> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <hr> tag creates a thematic break between sections."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Chapter 1</p>\n<hr>\n<p>Chapter 2</p>`
          },

          {
            type: "paragraph",
            content: "It represents a change in topic rather than merely drawing a line."
          }

        ]
      },

      {
        heading: "10. What is the difference between <strong> and <b>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "<strong>",
            leftItems: [
              "<strong>Warning!</strong>",
              "Meaning:",
              "Indicates importance",
              "Semantic element",
              "Screen readers emphasize it"
            ],
            rightTitle: "<b>",
            rightItems: [
              "<b>Warning!</b>",
              "Meaning:",
              "Only bold appearance",
              "No semantic importance"
            ]
          },

          {
            type: "note",
            content: "Interview Tip: Use <strong> when importance matters."
          }

        ]
      },

      {
        heading: "11. What is the difference between <em> and <i>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "<em>",
            leftItems: [
              "<em>Important note</em>",
              "Meaning:",
              "Emphasized content",
              "Semantic meaning"
            ],
            rightTitle: "<i>",
            rightItems: [
              "<i>Scientific name</i>",
              "Meaning:",
              "Alternative voice",
              "Technical term",
              "Foreign phrase"
            ]
          },

          {
            type: "paragraph",
            content: "Interviewers often expect you to know that <em> carries meaning while <i> is mostly presentational."
          }

        ]
      },

      {
        heading: "12. What does the <mark> tag do?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <mark> tag highlights text."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Learn <mark>HTML</mark> today.</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Highlighted text (usually yellow)."
            ]
          },

          {
            type: "paragraph",
            content: "Common uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Search results",
              "Important terms",
              "Highlighted content"
            ]
          }

        ]
      },

      {
        heading: "13. What is the purpose of the <small> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <small> tag represents side comments, legal text, or fine print."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<small>Terms and conditions apply.</small>`
          },

          {
            type: "paragraph",
            content: "Common usage:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Copyright notices",
              "Disclaimers",
              "Legal information"
            ]
          }

        ]
      },

      {
        heading: "14. What is the <del> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <del> tag indicates deleted content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Price: <del>$100</del> $80</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "$100 $80"
            ]
          },

          {
            type: "paragraph",
            content: "Often used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Discounts",
              "Revision tracking",
              "Content updates"
            ]
          }

        ]
      },

      {
        heading: "15. What is the <ins> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <ins> tag represents inserted content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p><ins>New feature added</ins></p>`
          },

          {
            type: "paragraph",
            content: "Usually rendered with an underline. Often used together with <del>."
          }

        ]
      },

      {
        heading: "16. What are subscript and superscript?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Subscript"
          },

          {
            type: "code",
            language: "html",
            content: `H<sub>2</sub>O`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "H₂O"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Superscript"
          },

          {
            type: "code",
            language: "html",
            content: `x<sup>2</sup>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "x²"
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
              "Mathematical formulas",
              "Scientific notation",
              "Chemical equations"
            ]
          }

        ]
      },

      {
        heading: "17. What is the <blockquote> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <blockquote> tag represents a quotation from another source."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<blockquote>\n    The future depends on what you do today.\n</blockquote>`
          },

          {
            type: "paragraph",
            content: "Browsers typically indent blockquotes."
          }

        ]
      },

      {
        heading: "18. What is the purpose of the cite attribute in <blockquote>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<blockquote cite="https://example.com">\n    Knowledge is power.\n</blockquote>`
          },

          {
            type: "paragraph",
            content: "The cite attribute identifies the source of the quotation."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better semantics",
              "Source attribution",
              "Improved documentation"
            ]
          }

        ]
      },

      {
        heading: "19. What is the <q> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <q> tag is used for short inline quotations."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>He said <q>Hello World</q>.</p>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "He said \"Hello World\"."
            ]
          },

          {
            type: "paragraph",
            content: "Unlike <blockquote>, <q> is inline."
          }

        ]
      },

      {
        heading: "20. What is the difference between <blockquote> and <q>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Feature",
              "<blockquote>",
              "<q>"
            ],

            rows: [
              ["Type", "Block-level", "Inline"],
              ["Quote Length", "Long", "Short"],
              ["Layout", "New section", "Within text"],
              ["Indentation", "Usually yes", "No"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<blockquote>\nLong quotation\n</blockquote>\n\n<q>Short quotation</q>`
          }

        ]
      },

      {
        heading: "21. What is the <pre> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <pre> tag displays text exactly as written."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<pre>\nLine 1\n    Line 2\n        Line 3\n</pre>`
          },

          {
            type: "paragraph",
            content: "Preserves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Spaces",
              "Tabs",
              "Line breaks"
            ]
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Code",
              "ASCII art",
              "Structured text"
            ]
          }

        ]
      },

      {
        heading: "22. What is the <code> tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <code> tag identifies computer code."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<code>console.log("Hello");</code>`
          },

          {
            type: "paragraph",
            content: "Browsers typically display code in a monospace font."
          }

        ]
      },

      {
        heading: "23. What is the difference between <pre> and <code>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "<code>",
            leftItems: [
              "Represents code semantically.",
              "<code>let x = 5;</code>"
            ],
            rightTitle: "<pre>",
            rightItems: [
              "Preserves formatting.",
              "<pre>\nlet x = 5;\nconsole.log(x);\n</pre>"
            ]
          },

          {
            type: "paragraph",
            content: "Often used together:"
          },

          {
            type: "code",
            language: "html",
            content: `<pre>\n<code>\nlet x = 5;\nconsole.log(x);\n</code>\n</pre>`
          },

          {
            type: "paragraph",
            content: "This is the recommended practice."
          }

        ]
      },

      {
        heading: "24. What other code-related HTML elements should developers know?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "<kbd>"
          },

          {
            type: "paragraph",
            content: "Keyboard input"
          },

          {
            type: "code",
            language: "html",
            content: `<kbd>Ctrl</kbd> + <kbd>C</kbd>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "<samp>"
          },

          {
            type: "paragraph",
            content: "Program output"
          },

          {
            type: "code",
            language: "html",
            content: `<samp>File saved successfully.</samp>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "<var>"
          },

          {
            type: "paragraph",
            content: "Variable names"
          },

          {
            type: "code",
            language: "html",
            content: `<var>x</var>`
          },

          {
            type: "paragraph",
            content: "These improve semantic meaning for technical content."
          }

        ]
      },

      {
        heading: "25. Why are semantic formatting elements preferred over purely visual tags?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic elements communicate meaning, not just appearance."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<strong>Important</strong>`
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `<b>Important</b>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility: Screen readers understand intent.",
              "SEO: Search engines understand content importance.",
              "Maintainability: Code becomes easier to understand.",
              "Future-Proofing: Content remains meaningful even if styles change."
            ]
          },

          {
            type: "paragraph",
            content: "This is one of the most important modern HTML best practices."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 4: Links & Navigation",
      },

      {
        heading: "1. What is the purpose of the <a> (anchor) tag in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The <a> tag is used to create hyperlinks in HTML. Hyperlinks allow users to navigate from one page, section, file, or website to another."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://example.com">Visit Website</a>`
          },

          {
            type: "paragraph",
            content: "Key Points"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Stands for \"anchor\".",
              "Creates clickable links.",
              "Requires the href attribute to specify the destination.",
              "Can link to webpages, files, email addresses, phone numbers, and page sections."
            ]
          }

        ]
      },

      {
        heading: "2. What is the href attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The href (Hypertext Reference) attribute specifies the destination URL of a hyperlink."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://google.com">Google</a>`
          },

          {
            type: "paragraph",
            content: "Here, clicking the link takes the user to Google."
          },

          {
            type: "note",
            content: "Interview Tip: Without href, an anchor behaves like normal text and is not considered a functional link."
          }

        ]
      },

      {
        heading: "3. What is the difference between an internal link and an external link?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Internal Link"
          },

          {
            type: "paragraph",
            content: "Points to another page within the same website."
          },

          {
            type: "code",
            language: "html",
            content: `<a href="/about.html">About Us</a>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "External Link"
          },

          {
            type: "paragraph",
            content: "Points to a different website."
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://www.wikipedia.org">Wikipedia</a>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Comparison"
          },

          {
            type: "table",
            headers: [
              "Internal Link",
              "External Link"
            ],

            rows: [
              ["Points to the same website", "Points to a different website"],
              ["Faster navigation", "Takes user elsewhere"],
              ["Helps site structure", "Connects outside resources"]
            ]
          }

        ]
      },

      {
        heading: "4. What is the difference between Relative URLs and Absolute URLs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Relative URL"
          },

          {
            type: "paragraph",
            content: "Specifies location relative to the current page."
          },

          {
            type: "code",
            language: "html",
            content: `<a href="contact.html">Contact</a>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Absolute URL"
          },

          {
            type: "paragraph",
            content: "Contains the complete web address."
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://www.example.com/contact.html">Contact</a>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Comparison"
          },

          {
            type: "table",
            headers: [
              "Relative URL",
              "Absolute URL"
            ],

            rows: [
              ["Shorter", "Full address"],
              ["Good for internal pages", "Good for external resources"],
              ["Easier to maintain", "Works from any location"]
            ]
          }

        ]
      },

      {
        heading: "5. When should you use Relative URLs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Relative URLs should be used when linking pages within the same website."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="products.html">Products</a>`
          },

          {
            type: "paragraph",
            content: "Benefits"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Easier website maintenance",
              "Better portability",
              "No need to update domain names across files"
            ]
          }

        ]
      },

      {
        heading: "6. When should you use Absolute URLs?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Absolute URLs should be used when linking to external websites or resources."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://developer.mozilla.org">\n    MDN Documentation\n</a>`
          },

          {
            type: "paragraph",
            content: "Benefits"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Works from any location",
              "Required for external destinations"
            ]
          }

        ]
      },

      {
        heading: "7. How do you open a link in a new tab?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Use the target=\"_blank\" attribute."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://google.com" target="_blank">\n    Open Google\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "The link opens in a new browser tab or window."
          }

        ]
      },

      {
        heading: "8. What are the possible values of the target attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "table",
            headers: [
              "Value",
              "Meaning"
            ],

            rows: [
              ["_self", "Opens in same tab (default)"],
              ["_blank", "Opens in new tab"],
              ["_parent", "Opens in parent frame"],
              ["_top", "Opens in full window"]
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="page.html" target="_self">Open Here</a>`
          }

        ]
      },

      {
        heading: "9. Why should rel=\"noopener noreferrer\" be used with target=\"_blank\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Opening external pages with _blank can create security and performance issues."
          },

          {
            type: "paragraph",
            content: "Recommended Practice"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="https://example.com"\n   target="_blank"\n   rel="noopener noreferrer">\n   Visit Site\n</a>`
          },

          {
            type: "paragraph",
            content: "Benefits"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Prevents tab hijacking attacks.",
              "Improves security.",
              "Prevents access to the original page via window.opener."
            ]
          },

          {
            type: "paragraph",
            content: "This is a common modern interview question."
          }

        ]
      },

      {
        heading: "10. What is an Email Link in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "An email link opens the user's email application."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="mailto:hello@example.com">\n    Send Email\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "Clicking opens the default email client with the recipient pre-filled."
          }

        ]
      },

      {
        heading: "11. How can you prefill the subject line in an email link?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Use query parameters."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="mailto:support@example.com?subject=Help Needed">\n    Contact Support\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "The subject field is automatically filled."
          }

        ]
      },

      {
        heading: "12. What is a Telephone Link?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Telephone links allow users to call directly from supported devices."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="tel:+919876543210">\n    Call Us\n</a>`
          },

          {
            type: "paragraph",
            content: "Common Usage"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile websites",
              "Contact pages",
              "Business websites"
            ]
          }

        ]
      },

      {
        heading: "13. What is a Bookmark Link in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "A bookmark link jumps to a specific section within a webpage."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#contact">Go to Contact</a>\n<section id="contact">\n    Contact Information\n</section>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "The page scrolls directly to the contact section."
          }

        ]
      },

      {
        heading: "14. Why are bookmark links useful?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "They improve navigation on long pages."
          },

          {
            type: "paragraph",
            content: "Common Uses"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Documentation sites",
              "FAQs",
              "Blogs",
              "Tutorials",
              "Table of Contents"
            ]
          },

          {
            type: "paragraph",
            content: "Benefits"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better user experience",
              "Faster navigation",
              "Improved accessibility"
            ]
          }

        ]
      },

      {
        heading: "15. What is a Download Link?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "A download link allows users to download a file instead of opening it."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="resume.pdf" download>\n    Download Resume\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "The browser downloads the file."
          }

        ]
      },

      {
        heading: "16. Can you specify a custom download filename?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="resume.pdf" download="John_Resume.pdf">\n    Download Resume\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "The file downloads as: John_Resume.pdf"
          }

        ]
      },

      {
        heading: "17. Can an image be used as a hyperlink?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="home.html">\n    <img src="logo.png" alt="Company Logo">\n</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "paragraph",
            content: "Clicking the image acts like clicking a link."
          }

        ]
      },

      {
        heading: "18. Can block-level elements be placed inside an anchor tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Yes, in HTML5."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="article.html">\n    <article>\n        <h2>News Title</h2>\n        <p>Read More...</p>\n    </article>\n</a>`
          },

          {
            type: "paragraph",
            content: "Before HTML5: This was generally invalid."
          },

          {
            type: "paragraph",
            content: "HTML5: Fully supported and widely used."
          }

        ]
      },

      {
        heading: "19. What happens if the href attribute is omitted?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The anchor becomes non-navigational."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<a>Click Me</a>`
          },

          {
            type: "paragraph",
            content: "Result"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "No destination",
              "Not treated as a proper hyperlink",
              "Accessibility may suffer"
            ]
          }

        ]
      },

      {
        heading: "20. What is the difference between a button and a link?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "comparison",
            leftTitle: "Link",
            leftItems: [
              "Used for navigation.",
              "<a href=\"about.html\">About</a>"
            ],
            rightTitle: "Button",
            rightItems: [
              "Used for actions.",
              "<button>Submit</button>"
            ]
          },

          {
            type: "paragraph",
            content: "Interview Rule:"
          },

          {
            type: "output",
            content: [
              "Navigation → Use <a>",
              "Action → Use <button>"
            ]
          },

          {
            type: "paragraph",
            content: "Using the wrong element is a common accessibility mistake."
          }

        ]
      },

      {
        heading: "21. What are navigation best practices in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Good navigation should be:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Simple",
              "Consistent",
              "Accessible",
              "Semantic",
              "Mobile-friendly"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n    <a href="/contact">Contact</a>\n</nav>`
          }

        ]
      },

      {
        heading: "22. Why should the <nav> element be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "The <nav> element identifies major navigation sections."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>\n    <ul>\n        <li><a href="/">Home</a></li>\n        <li><a href="/blog">Blog</a></li>\n    </ul>\n</nav>`
          },

          {
            type: "paragraph",
            content: "Benefits"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better semantics",
              "Improved accessibility",
              "Easier for screen readers"
            ]
          }

        ]
      },

      {
        heading: "23. What accessibility practices should be followed for links?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Good Practice"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="pricing.html">\n    View Pricing Plans\n</a>`
          },

          {
            type: "paragraph",
            content: "Bad Practice"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="pricing.html">\n    Click Here\n</a>`
          },

          {
            type: "paragraph",
            content: "Why?"
          },

          {
            type: "paragraph",
            content: "Screen readers often read links independently. Descriptive text helps users understand the destination."
          }

        ]
      },

      {
        heading: "24. What is Link State in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "Links can exist in different states."
          },

          {
            type: "paragraph",
            content: "Common CSS Pseudo-Classes:"
          },

          {
            type: "output",
            content: [
              "a:link",
              "a:visited",
              "a:hover",
              "a:active"
            ]
          },

          {
            type: "table",
            headers: [
              "State",
              "Description"
            ],

            rows: [
              ["link", "Unvisited link"],
              ["visited", "Already visited"],
              ["hover", "Mouse over link"],
              ["active", "Being clicked"]
            ]
          }

        ]
      },

      {
        heading: "25. What are the most common mistakes developers make with links?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer"
          },

          {
            type: "paragraph",
            content: "1. Using buttons for navigation"
          },

          {
            type: "output",
            content: [
              "Wrong:\n<button>About</button>",
              "",
              "Correct:\n<a href=\"about.html\">About</a>"
            ]
          },

          {
            type: "paragraph",
            content: "2. Using vague text"
          },

          {
            type: "output",
            content: [
              "Wrong:\n<a href=\"guide.html\">Click Here</a>",
              "",
              "Correct:\n<a href=\"guide.html\">Read HTML Guide</a>"
            ]
          },

          {
            type: "paragraph",
            content: "3. Forgetting security attributes"
          },

          {
            type: "output",
            content: [
              "Wrong:\n<a href=\"site.com\" target=\"_blank\">",
              "",
              "Correct:\n<a href=\"site.com\" target=\"_blank\" rel=\"noopener noreferrer\">"
            ]
          },

          {
            type: "paragraph",
            content: "4. Broken links: Always verify that URLs exist."
          },

          {
            type: "paragraph",
            content: "5. Missing accessibility considerations: Provide meaningful link text and proper navigation structure."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 5: Images & Multimedia"
      },

      {
        heading: "1. What is the purpose of the <img> element in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "The <img> element is used to embed images into a web page. Unlike many HTML elements, it does not have a closing tag because it is an empty element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="image.jpg" alt="Mountain View">`
          },

          {
            type: "paragraph",
            content: "Important Attributes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "src → Specifies the image file location.",
              "alt → Alternative text displayed if the image cannot load.",
              "width and height → Define image dimensions."
            ]
          }

        ]
      },

      {
        heading: "2. Why is the alt attribute important?",

        blocks: [

          {
            type: "paragraph",
            content: "The alt attribute provides alternative text for an image."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves accessibility for screen readers.",
              "Appears when the image fails to load.",
              "Helps search engines understand image content.",
              "Improves SEO."
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="logo.png" alt="Company Logo">`
          },

          {
            type: "paragraph",
            content: "Without meaningful alt text, visually impaired users may miss important information."
          }

        ]
      },

      {
        heading: "3. What happens if the image source is incorrect?",

        blocks: [

          {
            type: "paragraph",
            content: "If the file specified in the src attribute cannot be found:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "The image will not display.",
              "The browser may show a broken image icon.",
              "The alt text will be displayed instead."
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="wrongfile.jpg" alt="Product Image">`
          }

        ]
      },

      {
        heading: "4. What are the most common image formats used on websites?",

        blocks: [

          {
            type: "paragraph",
            content: "JPEG/JPG"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Best for photographs.",
              "Supports millions of colors.",
              "Smaller file size."
            ]
          },

          {
            type: "paragraph",
            content: "PNG"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Supports transparency.",
              "Suitable for logos and graphics."
            ]
          },

          {
            type: "paragraph",
            content: "GIF"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Supports simple animations."
            ]
          },

          {
            type: "paragraph",
            content: "SVG"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Vector-based graphics.",
              "Scales without quality loss."
            ]
          },

          {
            type: "paragraph",
            content: "WebP"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Modern format.",
              "Smaller size than JPG and PNG.",
              "Better performance."
            ]
          },

          {
            type: "paragraph",
            content: "AVIF"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Excellent compression.",
              "Very high quality at smaller sizes."
            ]
          }

        ]
      },

      {
        heading: "5. Which image format should be used for photographs?",

        blocks: [

          {
            type: "paragraph",
            content: "JPEG (or WebP/AVIF when supported) is generally preferred because:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Excellent compression.",
              "Smaller file sizes.",
              "Faster loading."
            ]
          },

          {
            type: "paragraph",
            content: "Example Uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Travel photos",
              "Product images",
              "Portraits"
            ]
          }

        ]
      },

      {
        heading: "6. Which image format is best for logos and icons?",

        blocks: [

          {
            type: "paragraph",
            content: "SVG is usually the best choice because:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Infinitely scalable.",
              "Very small file sizes.",
              "Sharp at all resolutions."
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="logo.svg" alt="Company Logo">`
          }

        ]
      },

      {
        heading: "7. What is the difference between raster and vector images?",

        blocks: [

          {
            type: "comparison",
            leftTitle: "Raster Images",
            leftItems: [
              "Made of pixels.",
              "Examples: JPG, PNG, GIF, WebP",
              "When enlarged, quality decreases."
            ],
            rightTitle: "Vector Images",
            rightItems: [
              "Made using mathematical paths.",
              "Examples: SVG",
              "Can be scaled infinitely without losing quality."
            ]
          }

        ]
      },

      {
        heading: "8. How do you specify image dimensions?",

        blocks: [

          {
            type: "paragraph",
            content: "Using width and height."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="photo.jpg" alt="Photo" width="500" height="300">`
          },

          {
            type: "paragraph",
            content: "Providing dimensions helps browsers reserve space before the image loads, reducing layout shifts."
          }

        ]
      },

      {
        heading: "9. What is a responsive image?",

        blocks: [

          {
            type: "paragraph",
            content: "A responsive image automatically adapts to different screen sizes and devices."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="photo.jpg" alt="Nature" style="max-width:100%;">`
          },

          {
            type: "paragraph",
            content: "Responsive images improve:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "User experience",
              "Mobile compatibility",
              "Page performance"
            ]
          }

        ]
      },

      {
        heading: "10. What is the purpose of the <picture> element?",

        blocks: [

          {
            type: "paragraph",
            content: "The <picture> element allows developers to provide multiple image versions."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Landscape">
</picture>`
          },

          {
            type: "paragraph",
            content: "The browser selects the most appropriate image."
          }

        ]
      },

      {
        heading: "11. What is the srcset attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "srcset provides multiple image sources for different screen resolutions."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img
src="small.jpg"
srcset="
small.jpg 500w,
medium.jpg 1000w,
large.jpg 1500w"
alt="Nature">`
          },

          {
            type: "paragraph",
            content: "The browser automatically selects the best image."
          }

        ]
      },

      {
        heading: "12. What is the sizes attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "The sizes attribute works with srcset and tells the browser how much screen space the image will occupy."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img
srcset="small.jpg 500w,
medium.jpg 1000w"
sizes="(max-width: 600px) 100vw, 50vw"
alt="Sample">`
          },

          {
            type: "paragraph",
            content: "This improves loading efficiency."
          }

        ]
      },

      {
        heading: "13. What are <figure> and <figcaption>?",

        blocks: [

          {
            type: "paragraph",
            content: "<figure>"
          },

          {
            type: "paragraph",
            content: "Represents self-contained content."
          },

          {
            type: "paragraph",
            content: "<figcaption>"
          },

          {
            type: "paragraph",
            content: "Provides a caption for the figure."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<figure>
  <img src="bird.jpg" alt="Bird">
  <figcaption>A beautiful bird in flight.</figcaption>
</figure>`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Diagrams",
              "Charts",
              "Code snippets"
            ]
          }

        ]
      },

      {
        heading: "14. Why should <figure> be preferred over a simple image with text below it?",

        blocks: [

          {
            type: "paragraph",
            content: "Because it creates a semantic relationship between the image and its caption."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better accessibility.",
              "Better SEO.",
              "More meaningful HTML structure."
            ]
          }

        ]
      },

      {
        heading: "15. What is the purpose of the <audio> element?",

        blocks: [

          {
            type: "paragraph",
            content: "The <audio> element embeds sound files into a webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>`
          }

        ]
      },

      {
        heading: "16. Common attributes of the <audio> element?",

        blocks: [

          {
            type: "table",
            headers: [
              "Attribute",
              "Description"
            ],

            rows: [
              ["controls", "Shows audio controls."],
              ["autoplay", "Starts playback automatically."],
              ["loop", "Repeats playback."],
              ["muted", "Starts muted."],
              ["preload", "Hints how audio should be loaded."]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<audio controls loop>`
          }

        ]
      },

      {
        heading: "17. What is the purpose of the <video> element?",

        blocks: [

          {
            type: "paragraph",
            content: "The <video> element embeds video content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
</video>`
          }

        ]
      },

      {
        heading: "18. What are common video attributes?",

        blocks: [

          {
            type: "table",
            headers: [
              "Attribute",
              "Description"
            ],

            rows: [
              ["controls", "Shows playback controls."],
              ["autoplay", "Starts automatically."],
              ["loop", "Repeats playback."],
              ["muted", "Mutes sound."],
              ["poster", "Displays an image before playback starts."]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<video controls poster="thumbnail.jpg">`
          }

        ]
      },

      {
        heading: "19. What is the poster attribute in videos?",

        blocks: [

          {
            type: "paragraph",
            content: "The poster attribute specifies an image shown before the video begins playing."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<video poster="preview.jpg">`
          },

          {
            type: "paragraph",
            content: "This improves user experience by displaying a thumbnail."
          }

        ]
      },

      {
        heading: "20. How can you embed a YouTube video in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Using an iframe."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/VIDEO_ID"
title="YouTube video player"
allowfullscreen>
</iframe>`
          },

          {
            type: "paragraph",
            content: "This is the standard approach recommended by YouTube."
          }

        ]
      },

      {
        heading: "21. What is the difference between hosting videos yourself and embedding YouTube videos?",

        blocks: [

          {
            type: "comparison",
            leftTitle: "Self-hosted Video",
            leftItems: [
              "Advantages: Full control, No third-party branding.",
              "Disadvantages: Higher bandwidth costs, More server load."
            ],
            rightTitle: "YouTube Embed",
            rightItems: [
              "Advantages: Free hosting, Fast delivery, Adaptive streaming.",
              "Disadvantages: Third-party branding, Less control."
            ]
          }

        ]
      },

      {
        heading: "22. What is lazy loading for images?",

        blocks: [

          {
            type: "paragraph",
            content: "Lazy loading delays image loading until the image becomes visible on the screen."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img
src="photo.jpg"
alt="Nature"
loading="lazy">`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster page loading.",
              "Reduced bandwidth usage.",
              "Better performance."
            ]
          }

        ]
      },

      {
        heading: "23. How can multimedia affect website performance?",

        blocks: [

          {
            type: "paragraph",
            content: "Large media files can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Increase loading times.",
              "Consume bandwidth.",
              "Hurt SEO rankings.",
              "Create poor mobile experiences."
            ]
          },

          {
            type: "paragraph",
            content: "Solutions:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Compress images.",
              "Use WebP or AVIF.",
              "Use lazy loading.",
              "Optimize videos.",
              "Use CDNs."
            ]
          }

        ]
      },

      {
        heading: "24. What accessibility practices should be followed for images and multimedia?",

        blocks: [

          {
            type: "paragraph",
            content: "Images"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use meaningful alt text."
            ]
          },

          {
            type: "paragraph",
            content: "Decorative Images"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="divider.png" alt="">`
          },

          {
            type: "paragraph",
            content: "Videos"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Provide captions.",
              "Provide transcripts."
            ]
          },

          {
            type: "paragraph",
            content: "Audio"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Provide transcripts."
            ]
          },

          {
            type: "paragraph",
            content: "Controls"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Ensure keyboard accessibility."
            ]
          },

          {
            type: "paragraph",
            content: "These practices make content usable for all users."
          }

        ]
      },

      {
        heading: "25. What are the best practices for images and multimedia in modern websites?",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "Always use meaningful alt text.",
              "Prefer SVG for logos and icons.",
              "Use WebP or AVIF when possible.",
              "Implement responsive images.",
              "Use lazy loading.",
              "Compress media files.",
              "Add captions and transcripts.",
              "Specify image dimensions.",
              "Use semantic elements like <figure> and <figcaption>.",
              "Test multimedia on both desktop and mobile devices."
            ]
          },

          {
            type: "paragraph",
            content: "Following these practices results in faster, more accessible, SEO-friendly, and professional web pages."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 6: Lists"
      },

      {
        heading: "1. What are lists in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Lists are used to organize related items in a structured manner. They help present information clearly and improve readability."
          },

          {
            type: "paragraph",
            content: "HTML provides three main types of lists:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Ordered Lists (<ol>)",
              "Unordered Lists (<ul>)",
              "Description Lists (<dl>)"
            ]
          },

          {
            type: "paragraph",
            content: "Lists are widely used for menus, navigation links, instructions, product features, FAQs, and documentation."
          }

        ]
      },

      {
        heading: "2. What are the different types of lists available in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "HTML supports three list types:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Ordered List"
          },

          {
            type: "paragraph",
            content: "Displays items in a numbered sequence."
          },

          {
            type: "code",
            language: "html",
            content: `<ol>\n  <li>Wake Up</li>\n  <li>Exercise</li>\n  <li>Study</li>\n</ol>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Unordered List"
          },

          {
            type: "paragraph",
            content: "Displays items with bullet points."
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Apple</li>\n  <li>Mango</li>\n</ul>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Description List"
          },

          {
            type: "paragraph",
            content: "Displays terms and their descriptions."
          },

          {
            type: "code",
            language: "html",
            content: `<dl>\n  <dt>HTML</dt>\n  <dd>Markup language for web pages.</dd>\n</dl>`
          }

        ]
      },

      {
        heading: "3. What is an ordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "An ordered list represents items that have a specific sequence or order."
          },

          {
            type: "paragraph",
            content: "It uses the <ol> element."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ol>\n  <li>Install Software</li>\n  <li>Configure Settings</li>\n  <li>Launch Application</li>\n</ol>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "1. Install Software",
              "2. Configure Settings",
              "3. Launch Application"
            ]
          }

        ]
      },

      {
        heading: "4. What is an unordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "An unordered list displays items where order does not matter."
          },

          {
            type: "paragraph",
            content: "It uses the <ul> element."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "• HTML",
              "• CSS",
              "• JavaScript"
            ]
          }

        ]
      },

      {
        heading: "5. What is a description list?",

        blocks: [

          {
            type: "paragraph",
            content: "A description list is used to display terms and their corresponding explanations."
          },

          {
            type: "paragraph",
            content: "It uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<dl> → Description List",
              "<dt> → Description Term",
              "<dd> → Description Definition"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<dl>\n  <dt>CPU</dt>\n  <dd>Central Processing Unit</dd>\n\n  <dt>RAM</dt>\n  <dd>Random Access Memory</dd>\n</dl>`
          }

        ]
      },

      {
        heading: "6. What is the purpose of the <li> element?",

        blocks: [

          {
            type: "paragraph",
            content: "The <li> element represents an individual list item."
          },

          {
            type: "paragraph",
            content: "It must be placed inside:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<ol>",
              "<ul>"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Tea</li>\n  <li>Coffee</li>\n</ul>`
          },

          {
            type: "paragraph",
            content: "Without <li>, the browser cannot properly interpret list items."
          }

        ]
      },

      {
        heading: "7. Can <li> be used outside a list?",

        blocks: [

          {
            type: "paragraph",
            content: "No."
          },

          {
            type: "paragraph",
            content: "<li> should only be used inside:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<ul>",
              "or",
              "<ol>"
            ]
          },

          {
            type: "paragraph",
            content: "Using it outside a list creates invalid HTML."
          }

        ]
      },

      {
        heading: "8. When should you use an ordered list instead of an unordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "Use an ordered list when sequence matters."
          },

          {
            type: "paragraph",
            content: "Examples"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Step-by-step instructions",
              "Recipes",
              "Rankings",
              "Procedures",
              "Tutorials"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<ol>\n  <li>Create Account</li>\n  <li>Verify Email</li>\n  <li>Login</li>\n</ol>`
          }

        ]
      },

      {
        heading: "9. When should you use an unordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "Use an unordered list when sequence is unimportant."
          },

          {
            type: "paragraph",
            content: "Examples"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Features",
              "Categories",
              "Navigation menus",
              "Shopping lists"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Home</li>\n  <li>About</li>\n  <li>Contact</li>\n</ul>`
          }

        ]
      },

      {
        heading: "10. What attributes are available for ordered lists?",

        blocks: [

          {
            type: "paragraph",
            content: "Common attributes include:"
          },

          {
            type: "paragraph",
            content: "type"
          },

          {
            type: "paragraph",
            content: "Changes numbering style."
          },

          {
            type: "code",
            language: "html",
            content: `<ol type="A">`
          },

          {
            type: "paragraph",
            content: "Possible values:"
          },

          {
            type: "table",
            headers: [
              "Value",
              "Meaning"
            ],

            rows: [
              ["1", "Numbers"],
              ["A", "Uppercase Letters"],
              ["a", "Lowercase Letters"],
              ["I", "Uppercase Roman Numerals"],
              ["i", "Lowercase Roman Numerals"]
            ]
          }

        ]
      },

      {
        heading: "11. What is the start attribute in an ordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "The start attribute specifies the starting number."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ol start="5">\n  <li>Item</li>\n  <li>Item</li>\n</ol>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "5. Item",
              "6. Item"
            ]
          },

          {
            type: "paragraph",
            content: "Useful when continuing numbering across sections."
          }

        ]
      },

      {
        heading: "12. What is the reversed attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "The reversed attribute makes numbering count backward."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ol reversed>\n  <li>Third</li>\n  <li>Second</li>\n  <li>First</li>\n</ol>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "3. Third",
              "2. Second",
              "1. First"
            ]
          }

        ]
      },

      {
        heading: "13. Can you change the numbering type of an ordered list?",

        blocks: [

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Using the type attribute."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ol type="I">\n  <li>Introduction</li>\n  <li>Chapter One</li>\n</ol>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "I. Introduction",
              "II. Chapter One"
            ]
          }

        ]
      },

      {
        heading: "14. What is a nested list?",

        blocks: [

          {
            type: "paragraph",
            content: "A nested list is a list placed inside another list item."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>`
          },

          {
            type: "paragraph",
            content: "Nested lists represent hierarchical relationships."
          }

        ]
      },

      {
        heading: "15. Can ordered and unordered lists be nested together?",

        blocks: [

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<ol>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ol>`
          },

          {
            type: "paragraph",
            content: "This is commonly used in documentation and tutorials."
          }

        ]
      },

      {
        heading: "16. What is the correct way to create a multilevel list?",

        blocks: [

          {
            type: "paragraph",
            content: "Place the nested list inside the parent <li> element."
          },

          {
            type: "paragraph",
            content: "Correct"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Programming\n    <ul>\n      <li>Python</li>\n      <li>Java</li>\n    </ul>\n  </li>\n</ul>`
          }

        ]
      },

      {
        heading: "17. How are lists commonly used in website navigation?",

        blocks: [

          {
            type: "paragraph",
            content: "Most navigation menus are built using unordered lists."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>\n  <ul>\n    <li>Home</li>\n    <li>Services</li>\n    <li>Contact</li>\n  </ul>\n</nav>`
          },

          {
            type: "paragraph",
            content: "This provides semantic structure and accessibility."
          }

        ]
      },

      {
        heading: "18. Why are unordered lists preferred for navigation menus?",

        blocks: [

          {
            type: "paragraph",
            content: "Because navigation links do not have a meaningful sequence."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic structure",
              "Better accessibility",
              "Easier CSS styling",
              "Better maintainability"
            ]
          }

        ]
      },

      {
        heading: "19. What are some real-world uses of ordered lists?",

        blocks: [

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Installation guides",
              "Cooking recipes",
              "Exam rankings",
              "Learning roadmaps",
              "Instructions"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<ol>\n  <li>Download File</li>\n  <li>Install Package</li>\n  <li>Run Application</li>\n</ol>`
          }

        ]
      },

      {
        heading: "20. What are some real-world uses of unordered lists?",

        blocks: [

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation menus",
              "Product features",
              "Categories",
              "Skills lists",
              "Benefits sections"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<ul>\n  <li>Fast</li>\n  <li>Secure</li>\n  <li>Reliable</li>\n</ul>`
          }

        ]
      },

      {
        heading: "21. What are some real-world uses of description lists?",

        blocks: [

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Glossaries",
              "FAQs",
              "Definitions",
              "Metadata displays",
              "Technical documentation"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<dl>\n  <dt>API</dt>\n  <dd>Application Programming Interface</dd>\n</dl>`
          }

        ]
      },

      {
        heading: "22. How do lists improve accessibility?",

        blocks: [

          {
            type: "paragraph",
            content: "Screen readers recognize list structures and announce:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Number of items",
              "Item position",
              "List type"
            ]
          },

          {
            type: "paragraph",
            content: "This helps users understand content organization more easily."
          }

        ]
      },

      {
        heading: "23. How do lists help SEO?",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "Improve content structure.",
              "Increase readability.",
              "Help search engines understand relationships between items.",
              "May appear in rich search results."
            ]
          },

          {
            type: "paragraph",
            content: "Well-structured lists improve user experience and SEO."
          }

        ]
      },

      {
        heading: "24. How are list bullets and numbering customized?",

        blocks: [

          {
            type: "paragraph",
            content: "Using CSS."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "css",
            content: `ul {\n  list-style-type: square;\n}\n\nol {\n  list-style-type: upper-roman;\n}`
          },

          {
            type: "paragraph",
            content: "Common values:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "disc",
              "circle",
              "square",
              "decimal",
              "lower-alpha",
              "upper-alpha",
              "lower-roman",
              "upper-roman"
            ]
          }

        ]
      },

      {
        heading: "25. What are the best practices when working with HTML lists?",

        blocks: [

          {
            type: "list",
            style: "unordered",
            items: [
              "Use <ol> when order matters.",
              "Use <ul> when order does not matter.",
              "Use <dl> for terms and definitions.",
              "Always place <li> inside <ol> or <ul>.",
              "Create nested lists correctly.",
              "Use lists for navigation menus.",
              "Avoid using lists only for visual layout.",
              "Keep list structures semantic.",
              "Use CSS for styling instead of deprecated HTML attributes.",
              "Ensure accessibility by using proper list markup."
            ]
          },

          {
            type: "paragraph",
            content: "Following these practices creates cleaner, more accessible, and professional HTML documents."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 7: Tables"
      },

      {
        heading: "1. What is an HTML table?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "An HTML table is a structure used to organize data into rows and columns. It is created using the <table> element and contains rows (<tr>), headers (<th>), and data cells (<td>)."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>`
          }

        ]
      },

      {
        heading: "2. Which tag is used to create a table in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <table> tag is used to create a table container. All table-related elements must be placed inside it."
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  \n</table>`
          }

        ]
      },

      {
        heading: "3. What is the role of the <tr> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<tr> stands for Table Row."
          },

          {
            type: "paragraph",
            content: "It creates a horizontal row inside a table."
          },

          {
            type: "code",
            language: "html",
            content: `<tr>\n  <td>Apple</td>\n  <td>100</td>\n</tr>`
          },

          {
            type: "paragraph",
            content: "Each <tr> can contain multiple cells."
          }

        ]
      },

      {
        heading: "4. What is the difference between <td> and <th>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Element",
              "Purpose"
            ],

            rows: [
              ["<td>", "Table data cell"],
              ["<th>", "Table header cell"]
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<tr>\n  <th>Name</th>\n  <th>Age</th>\n</tr>\n\n<tr>\n  <td>John</td>\n  <td>25</td>\n</tr>`
          },

          {
            type: "paragraph",
            content: "By default, <th> text is bold and centered."
          }

        ]
      },

      {
        heading: "5. What is a table cell?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A table cell is the smallest unit of a table that contains data."
          },

          {
            type: "paragraph",
            content: "Cells are created using:"
          },

          {
            type: "output",
            content: [
              "<td>Data</td>",
              "or",
              "<th>Header</th>"
            ]
          }

        ]
      },

      {
        heading: "6. What is a table header?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A table header describes the meaning of data within a column or row."
          },

          {
            type: "paragraph",
            content: "Headers improve readability and accessibility."
          },

          {
            type: "output",
            content: [
              "<th>Product</th>",
              "<th>Price</th>"
            ]
          }

        ]
      },

      {
        heading: "7. What is the purpose of the <caption> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <caption> element provides a title or description for a table."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <caption>Student Records</caption>\n</table>`
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
              "Helps users understand table content",
              "Useful for screen readers"
            ]
          }

        ]
      },

      {
        heading: "8. Where should the <caption> element be placed?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "It should be the first child inside the <table> element."
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <caption>Employee Data</caption>\n\n  <tr>\n    <th>Name</th>\n  </tr>\n</table>`
          }

        ]
      },

      {
        heading: "9. What is the purpose of colspan?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "colspan allows a cell to span multiple columns."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<tr>\n  <th colspan="2">Employee Information</th>\n</tr>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "Employee Information",
              "--------------------"
            ]
          },

          {
            type: "paragraph",
            content: "The header covers two columns."
          }

        ]
      },

      {
        heading: "10. What is the purpose of rowspan?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "rowspan allows a cell to span multiple rows."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<td rowspan="2">Sales</td>`
          },

          {
            type: "paragraph",
            content: "The cell will occupy space across two rows."
          }

        ]
      },

      {
        heading: "11. Can rowspan and colspan be used together?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "A cell can span both rows and columns simultaneously."
          },

          {
            type: "code",
            language: "html",
            content: `<td rowspan="2" colspan="3">\n  Combined Cell\n</td>`
          },

          {
            type: "paragraph",
            content: "This is useful for complex table layouts."
          }

        ]
      },

      {
        heading: "12. What are <thead>, <tbody>, and <tfoot>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "These elements logically divide a table into sections."
          },

          {
            type: "table",
            headers: [
              "Element",
              "Purpose"
            ],

            rows: [
              ["<thead>", "Header section"],
              ["<tbody>", "Main data section"],
              ["<tfoot>", "Footer section"]
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n\n  <thead>\n    <tr>\n      <th>Name</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>John</td>\n    </tr>\n  </tbody>\n\n  <tfoot>\n    <tr>\n      <td>Total: 1</td>\n    </tr>\n  </tfoot>\n\n</table>`
          }

        ]
      },

      {
        heading: "13. Why are table sections important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "They improve:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Readability",
              "Accessibility",
              "Code organization",
              "Printing support",
              "Data processing"
            ]
          },

          {
            type: "paragraph",
            content: "Large tables become easier to manage."
          }

        ]
      },

      {
        heading: "14. What is the scope attribute in tables?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The scope attribute defines which cells a header applies to."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<th scope="col">Name</th>`
          },

          {
            type: "paragraph",
            content: "Possible values:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "col",
              "row",
              "colgroup",
              "rowgroup"
            ]
          },

          {
            type: "paragraph",
            content: "This helps screen readers understand relationships."
          }

        ]
      },

      {
        heading: "15. Why is table accessibility important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Accessible tables help:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Screen reader users",
              "Keyboard users",
              "Users with visual impairments"
            ]
          },

          {
            type: "paragraph",
            content: "Without proper structure, complex tables become difficult to understand."
          }

        ]
      },

      {
        heading: "16. How can you make tables more accessible?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Best practices:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Use <caption>",
              "✔ Use <th> for headers",
              "✔ Use scope",
              "✔ Use logical structure",
              "✔ Keep tables simple",
              "✔ Use semantic HTML"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <caption>Monthly Sales</caption>\n\n  <tr>\n    <th scope="col">Month</th>\n    <th scope="col">Revenue</th>\n  </tr>\n</table>`
          }

        ]
      },

      {
        heading: "17. When should tables be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Tables should only be used for tabular data."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Product comparisons",
              "Financial reports",
              "Timetables",
              "Employee records",
              "Statistics"
            ]
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "output",
            content: [
              "<table>"
            ]
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "paragraph",
            content: "Using tables for page layouts."
          }

        ]
      },

      {
        heading: "18. Why should tables not be used for page layout?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Older websites used tables for layouts."
          },

          {
            type: "paragraph",
            content: "Modern websites use:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Flexbox",
              "CSS Grid",
              "Semantic HTML"
            ]
          },

          {
            type: "paragraph",
            content: "Problems with layout tables:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Poor accessibility",
              "Difficult maintenance",
              "Responsive issues",
              "Bad SEO"
            ]
          }

        ]
      },

      {
        heading: "19. What is a layout table?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A layout table is a table used to arrange page elements instead of displaying data."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <tr>\n    <td>Sidebar</td>\n    <td>Main Content</td>\n  </tr>\n</table>`
          },

          {
            type: "paragraph",
            content: "This is considered outdated."
          }

        ]
      },

      {
        heading: "20. What is nested table?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A nested table is a table placed inside another table cell."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <tr>\n    <td>\n\n      <table>\n        <tr>\n          <td>Nested</td>\n        </tr>\n      </table>\n\n    </td>\n  </tr>\n</table>`
          },

          {
            type: "paragraph",
            content: "Used rarely today."
          }

        ]
      },

      {
        heading: "21. What are some common mistakes when creating tables?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Common mistakes include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Using tables for layouts",
              "❌ Missing headers",
              "❌ Forgetting captions",
              "❌ Excessive nesting",
              "❌ Not using accessibility attributes",
              "❌ Overusing rowspan and colspan",
              "❌ Creating very wide tables"
            ]
          }

        ]
      },

      {
        heading: "22. What problems can excessive rowspan and colspan cause?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Large merged cells can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Confuse users",
              "Complicate maintenance",
              "Break responsiveness",
              "Reduce accessibility"
            ]
          },

          {
            type: "paragraph",
            content: "Use them only when necessary."
          }

        ]
      },

      {
        heading: "23. How do tables affect responsive design?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Wide tables often overflow on mobile devices."
          },

          {
            type: "paragraph",
            content: "Example problem:"
          },

          {
            type: "output",
            content: [
              "Phone Screen",
              "----------------",
              "| Large Table |",
              "----------------"
            ]
          },

          {
            type: "paragraph",
            content: "Solutions:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Horizontal scrolling",
              "Responsive table wrappers",
              "Simplified layouts",
              "Data cards for mobile"
            ]
          }

        ]
      },

      {
        heading: "24. How can a table be made responsive?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A common technique is wrapping the table inside a scrollable container."
          },

          {
            type: "code",
            language: "html",
            content: `<div class="table-container">\n  <table>\n    ...\n  </table>\n</div>`
          },

          {
            type: "code",
            language: "css",
            content: `.table-container {\n  overflow-x: auto;\n}`
          },

          {
            type: "paragraph",
            content: "This prevents content from breaking on small screens."
          }

        ]
      },

      {
        heading: "25. What is the difference between semantic and non-semantic table structure?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Non-semantic"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <tr>\n    <td>Name</td>\n    <td>Age</td>\n  </tr>\n</table>`
          },

          {
            type: "paragraph",
            content: "Headers are unclear."
          },

          {
            type: "paragraph",
            content: "Semantic"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <caption>Student Data</caption>\n\n  <thead>\n    <tr>\n      <th scope="col">Name</th>\n      <th scope="col">Age</th>\n    </tr>\n  </thead>\n</table>`
          },

          {
            type: "paragraph",
            content: "Advantages:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better accessibility",
              "Better maintainability",
              "Better screen reader support",
              "Professional HTML structure"
            ]
          }

        ]
      },

      {
        heading: "26. What is a real-world example of a well-structured table?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n\n  <caption>Employee Salary Report</caption>\n\n  <thead>\n    <tr>\n      <th scope="col">Employee</th>\n      <th scope="col">Department</th>\n      <th scope="col">Salary</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Sales</td>\n      <td>$5000</td>\n    </tr>\n\n    <tr>\n      <td>Emma</td>\n      <td>HR</td>\n      <td>$4500</td>\n    </tr>\n  </tbody>\n\n</table>`
          },

          {
            type: "paragraph",
            content: "This example follows modern HTML standards and accessibility guidelines."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 8: Forms Fundamentals"
      },

      {
        heading: "1. What is an HTML form?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "An HTML form is a section of a webpage used to collect user input and send it to a server for processing."
          },

          {
            type: "paragraph",
            content: "Forms can collect:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "User names",
              "Passwords",
              "Email addresses",
              "Feedback",
              "Search queries",
              "Payment information"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<form>\n  <input type="text" name="username">\n  <button type="submit">Submit</button>\n</form>`
          },

          {
            type: "paragraph",
            content: "The form acts as a container for various input elements."
          }

        ]
      },

      {
        heading: "2. Which tag is used to create a form in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <form> tag is used to create a form."
          },

          {
            type: "code",
            language: "html",
            content: `<form>\n  Form elements go here\n</form>`
          },

          {
            type: "paragraph",
            content: "Every input element should generally be placed inside a form."
          }

        ]
      },

      {
        heading: "3. What is the purpose of the <form> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <form> element:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Groups related form controls",
              "Collects user input",
              "Defines where data should be sent",
              "Defines how data should be sent",
              "Controls form submission behavior"
            ]
          },

          {
            type: "paragraph",
            content: "Without a form element, user data cannot be properly submitted to a server."
          }

        ]
      },

      {
        heading: "4. What is form submission?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Form submission is the process of sending user-entered data from the browser to a server."
          },

          {
            type: "paragraph",
            content: "Example Flow"
          },

          {
            type: "flow",
            steps: [
              "User fills form",
              "Clicks Submit",
              "Browser collects data",
              "Browser sends request",
              "Server processes data",
              "Server returns response"
            ]
          },

          {
            type: "paragraph",
            content: "This process is the foundation of web applications."
          }

        ]
      },

      {
        heading: "5. What is the action attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The action attribute specifies where the form data will be sent after submission."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<form action="/register">\n</form>`
          },

          {
            type: "paragraph",
            content: "The browser sends form data to:"
          },

          {
            type: "output",
            content: [
              "/register"
            ]
          },

          {
            type: "paragraph",
            content: "for processing."
          }

        ]
      },

      {
        heading: "6. What happens if the action attribute is omitted?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "If action is omitted, the form submits data to the current page URL."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<form>\n</form>`
          },

          {
            type: "paragraph",
            content: "The browser sends the form data to the same page currently loaded."
          }

        ]
      },

      {
        heading: "7. What is the method attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The method attribute defines how form data is sent to the server."
          },

          {
            type: "paragraph",
            content: "Two common values are:"
          },

          {
            type: "output",
            content: [
              "method=\"GET\"",
              "and",
              "method=\"POST\""
            ]
          }

        ]
      },

      {
        heading: "8. What is the GET method?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "GET sends form data through the URL."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<form method="GET">\n</form>`
          },

          {
            type: "paragraph",
            content: "Generated URL:"
          },

          {
            type: "output",
            content: [
              "example.com/search?q=html"
            ]
          },

          {
            type: "paragraph",
            content: "The data becomes visible in the address bar."
          }

        ]
      },

      {
        heading: "9. What is the POST method?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "POST sends form data inside the HTTP request body."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<form method="POST">\n</form>`
          },

          {
            type: "paragraph",
            content: "The data is not shown in the URL."
          },

          {
            type: "paragraph",
            content: "POST is commonly used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Login forms",
              "Registration forms",
              "Payments",
              "Sensitive information"
            ]
          }

        ]
      },

      {
        heading: "10. What are the main differences between GET and POST?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Feature",
              "GET",
              "POST"
            ],

            rows: [
              ["Data location", "URL", "Request body"],
              ["Visible in browser", "Yes", "No"],
              ["Bookmarkable", "Yes", "No"],
              ["Cached", "Yes", "Usually No"],
              ["Data size", "Limited", "Larger"],
              ["Security", "Less secure", "More secure"]
            ]
          }

        ]
      },

      {
        heading: "11. When should GET be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "GET should be used when retrieving data."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Search forms",
              "Filters",
              "Public information requests"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Search for products",
              "Search for articles",
              "Search for users"
            ]
          },

          {
            type: "paragraph",
            content: "GET is ideal when the request does not modify server data."
          }

        ]
      },

      {
        heading: "12. When should POST be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "POST should be used when creating or updating data."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "User registration",
              "Login systems",
              "File uploads",
              "Payment forms",
              "Feedback forms"
            ]
          },

          {
            type: "paragraph",
            content: "POST is generally preferred for sensitive information."
          }

        ]
      },

      {
        heading: "13. Is POST completely secure?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "No."
          },

          {
            type: "paragraph",
            content: "POST only hides data from the URL."
          },

          {
            type: "paragraph",
            content: "For real security:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use HTTPS",
              "Validate data on the server",
              "Encrypt sensitive information",
              "Implement authentication"
            ]
          },

          {
            type: "paragraph",
            content: "Many beginners mistakenly believe POST alone provides security."
          }

        ]
      },

      {
        heading: "14. What happens during the form submission process?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The browser follows these steps:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "User fills the form.",
              "User clicks submit.",
              "Browser validates inputs.",
              "Browser creates request data.",
              "Request is sent to the server.",
              "Server processes data.",
              "Server returns response.",
              "Browser displays result."
            ]
          }

        ]
      },

      {
        heading: "15. What is the form lifecycle?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The form lifecycle refers to the complete journey of a form."
          },

          {
            type: "flow",
            steps: [
              "Display form",
              "User enters data",
              "Validation",
              "Submission",
              "Server processing",
              "Response received",
              "Success/Error handling"
            ]
          },

          {
            type: "paragraph",
            content: "Understanding this lifecycle is important for full-stack development."
          }

        ]
      },

      {
        heading: "16. What is client-side form handling?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Client-side handling occurs inside the browser before data reaches the server."
          },

          {
            type: "paragraph",
            content: "Usually performed with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML validation",
              "JavaScript validation"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `if (username === "") {\n  alert("Enter username");\n}`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster feedback",
              "Better user experience",
              "Reduced server load"
            ]
          }

        ]
      },

      {
        heading: "17. What is server-side form handling?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Server-side handling occurs after the form reaches the server."
          },

          {
            type: "paragraph",
            content: "Languages used include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Node.js",
              "PHP",
              "Python",
              "Java",
              "C#",
              "Ruby"
            ]
          },

          {
            type: "paragraph",
            content: "Server-side validation is mandatory because client-side validation can be bypassed."
          }

        ]
      },

      {
        heading: "18. Why is server-side validation important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Users can disable JavaScript or manipulate requests."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Browser validation skipped",
              "Modified request sent"
            ]
          },

          {
            type: "paragraph",
            content: "Without server validation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Invalid data may be stored",
              "Security vulnerabilities may occur"
            ]
          },

          {
            type: "paragraph",
            content: "Server validation is the final security checkpoint."
          }

        ]
      },

      {
        heading: "19. What is the default method of a form?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "If no method is specified:"
          },

          {
            type: "code",
            language: "html",
            content: `<form>\n</form>`
          },

          {
            type: "paragraph",
            content: "the browser uses:"
          },

          {
            type: "output",
            content: [
              "method=\"GET\""
            ]
          },

          {
            type: "paragraph",
            content: "by default."
          }

        ]
      },

      {
        heading: "20. What is the default submit behavior of a form?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "When a submit button is clicked:"
          },

          {
            type: "code",
            language: "html",
            content: `<button type="submit">`
          },

          {
            type: "paragraph",
            content: "the browser automatically:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Validates inputs",
              "Collects data",
              "Sends request",
              "Reloads or redirects page"
            ]
          },

          {
            type: "paragraph",
            content: "unless JavaScript prevents it."
          }

        ]
      },

      {
        heading: "21. Can JavaScript prevent form submission?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Using:"
          },

          {
            type: "output",
            content: [
              "event.preventDefault();"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `form.addEventListener("submit", function(event) {\n  event.preventDefault();\n});`
          },

          {
            type: "paragraph",
            content: "This is common in modern web applications."
          }

        ]
      },

      {
        heading: "22. What is asynchronous form submission?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Asynchronous submission sends data without refreshing the page."
          },

          {
            type: "paragraph",
            content: "Usually implemented using:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Fetch API",
              "AJAX"
            ]
          },

          {
            type: "paragraph",
            content: "Example flow:"
          },

          {
            type: "flow",
            steps: [
              "Submit Form",
              "JavaScript sends request",
              "Server responds",
              "Page remains unchanged"
            ]
          },

          {
            type: "paragraph",
            content: "Used heavily in modern applications."
          }

        ]
      },

      {
        heading: "23. Why do modern websites often avoid full page form reloads?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Asynchronous forms provide:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster user experience",
              "Better performance",
              "Real-time feedback",
              "Smoother interactions"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Gmail",
              "Facebook",
              "LinkedIn",
              "Instagram"
            ]
          }

        ]
      },

      {
        heading: "24. What are common mistakes developers make when working with forms?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Common mistakes include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Missing action attribute",
              "❌ Using GET for passwords",
              "❌ No validation",
              "❌ Relying only on client-side validation",
              "❌ Poor accessibility",
              "❌ Missing labels",
              "❌ Not handling errors properly",
              "❌ Forgetting HTTPS"
            ]
          },

          {
            type: "paragraph",
            content: "These mistakes often appear in beginner projects."
          }

        ]
      },

      {
        heading: "25. What are some best practices for HTML forms?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Use meaningful labels",
              "✔ Validate on both client and server",
              "✔ Use POST for sensitive data",
              "✔ Use HTTPS",
              "✔ Display helpful error messages",
              "✔ Keep forms simple",
              "✔ Ensure accessibility",
              "✔ Test on mobile devices",
              "✔ Provide success feedback",
              "✔ Protect against malicious input"
            ]
          },

          {
            type: "paragraph",
            content: "These practices lead to professional and secure forms."
          }

        ]
      },

      {
        heading: "26. Explain the complete form workflow in a real-world login system.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Consider a login page:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "User enters: Email, Password",
              "Browser performs client-side validation.",
              "Form sends POST request: POST /login",
              "Server verifies credentials.",
              "Server returns: Success or Invalid Credentials",
              "Browser displays result."
            ]
          },

          {
            type: "paragraph",
            content: "This workflow demonstrates how HTML forms interact with backend systems."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 9: Form Elements, Input Types and Form Validation"
      },

      {
        heading: "1. What is an <input> element in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <input> element is the most commonly used form control in HTML. It allows users to enter or select data."
          },

          {
            type: "paragraph",
            content: "Examples include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Text fields",
              "Password fields",
              "Checkboxes",
              "Radio buttons",
              "Date pickers",
              "File uploads"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="text" name="username">`
          },

          {
            type: "paragraph",
            content: "The behavior of an input field depends on its type attribute."
          }

        ]
      },

      {
        heading: "2. What is the purpose of the <label> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <label> element provides a text description for a form control."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<label for="email">Email:</label>\n<input type="email" id="email">`
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
              "Helps screen readers",
              "Makes forms easier to use",
              "Clicking the label focuses the associated field"
            ]
          },

          {
            type: "paragraph",
            content: "Using labels is considered a best practice."
          }

        ]
      },

      {
        heading: "3. How does the for attribute of a label work?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The for attribute connects a label to a form element using the element's id."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<label for="password">Password</label>\n<input id="password" type="password">`
          },

          {
            type: "paragraph",
            content: "The values must match."
          }

        ]
      },

      {
        heading: "4. What is a <textarea> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<textarea> is used for multi-line text input."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<textarea rows="5" cols="30"></textarea>`
          },

          {
            type: "paragraph",
            content: "Common use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Feedback forms",
              "Comments",
              "Messages",
              "Product reviews"
            ]
          },

          {
            type: "paragraph",
            content: "Unlike <input>, a textarea can contain multiple lines of text."
          }

        ]
      },

      {
        heading: "5. What is the difference between <input type=\"text\"> and <textarea>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Input Text",
              "Textarea"
            ],

            rows: [
              ["Single-line input", "Multi-line input"],
              ["Cannot easily handle paragraphs", "Designed for long text"],
              ["Uses value attribute", "Content placed between opening and closing tags"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="text">`
          },

          {
            type: "paragraph",
            content: "vs"
          },

          {
            type: "code",
            language: "html",
            content: `<textarea></textarea>`
          }

        ]
      },

      {
        heading: "6. What is the <select> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <select> element creates a dropdown list."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<select>\n  <option>India</option>\n  <option>USA</option>\n</select>`
          },

          {
            type: "paragraph",
            content: "Users can choose one or more options from the list."
          }

        ]
      },

      {
        heading: "7. What is the purpose of the <option> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <option> element defines an item inside a dropdown list."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<option value="india">India</option>`
          },

          {
            type: "paragraph",
            content: "Each option represents a selectable choice."
          }

        ]
      },

      {
        heading: "8. What is <optgroup>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<optgroup> groups related options inside a dropdown."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<select>\n  <optgroup label="Asia">\n    <option>India</option>\n    <option>Japan</option>\n  </optgroup>\n</select>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better organization",
              "Improved user experience",
              "Easier navigation in large dropdowns"
            ]
          }

        ]
      },

      {
        heading: "9. What is the <button> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <button> element creates a clickable button."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>Click Me</button>`
          },

          {
            type: "paragraph",
            content: "Buttons can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Submit forms",
              "Reset forms",
              "Trigger JavaScript actions"
            ]
          }

        ]
      },

      {
        heading: "10. What are the different button types?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Three main button types exist:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Submit"
          },

          {
            type: "code",
            language: "html",
            content: `<button type="submit">`
          },

          {
            type: "paragraph",
            content: "Submits the form."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Reset"
          },

          {
            type: "code",
            language: "html",
            content: `<button type="reset">`
          },

          {
            type: "paragraph",
            content: "Clears form values."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Button"
          },

          {
            type: "code",
            language: "html",
            content: `<button type="button">`
          },

          {
            type: "paragraph",
            content: "Performs custom JavaScript actions."
          }

        ]
      },

      {
        heading: "11. What is a <fieldset> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<fieldset> groups related form controls together."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<fieldset>\n  ...\n</fieldset>`
          },

          {
            type: "paragraph",
            content: "It creates a visual and semantic grouping of related inputs."
          }

        ]
      },

      {
        heading: "12. What is the purpose of <legend>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<legend> provides a title for a fieldset."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<fieldset>\n  <legend>Personal Information</legend>\n</fieldset>`
          },

          {
            type: "paragraph",
            content: "This improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "Readability",
              "Form organization"
            ]
          }

        ]
      },

      {
        heading: "13. What is a <datalist> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<datalist> provides autocomplete suggestions."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input list="cities">\n\n<datalist id="cities">\n  <option value="Delhi">\n  <option value="Mumbai">\n</datalist>`
          },

          {
            type: "paragraph",
            content: "Users can either:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Select a suggestion",
              "Enter their own value"
            ]
          }

        ]
      },

      {
        heading: "14. What is the <output> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <output> element displays calculation results."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<output>50</output>`
          },

          {
            type: "paragraph",
            content: "It is commonly used with JavaScript-based forms."
          }

        ]
      },

      {
        heading: "15. What is the most commonly used input type?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The most common type is:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="text">`
          },

          {
            type: "paragraph",
            content: "Used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Names",
              "Cities",
              "Titles",
              "Search keywords"
            ]
          }

        ]
      },

      {
        heading: "16. What is type=\"password\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Used for password entry."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="password">`
          },

          {
            type: "paragraph",
            content: "Characters appear masked:"
          },

          {
            type: "output",
            content: [
              "******"
            ]
          },

          {
            type: "paragraph",
            content: "This helps protect sensitive information from shoulder surfing."
          }

        ]
      },

      {
        heading: "17. What is type=\"email\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Used for email addresses."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="email">`
          },

          {
            type: "paragraph",
            content: "Browsers automatically validate email format."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "✔ user@gmail.com",
              "❌ usergmail.com"
            ]
          }

        ]
      },

      {
        heading: "18. What is type=\"number\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Allows numeric input."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="number">`
          },

          {
            type: "paragraph",
            content: "Supports:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Min values",
              "Max values",
              "Step increments"
            ]
          }

        ]
      },

      {
        heading: "19. What is type=\"url\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Used for website URLs."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="url">`
          },

          {
            type: "paragraph",
            content: "Browsers check for valid URL formatting."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "✔ https://example.com",
              "❌ example"
            ]
          }

        ]
      },

      {
        heading: "20. What is type=\"search\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Used specifically for search fields."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="search">`
          },

          {
            type: "paragraph",
            content: "Some browsers provide additional search-related UI features."
          }

        ]
      },

      {
        heading: "21. What are date-related input types?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "HTML provides several date and time controls:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<input type=\"date\">",
              "<input type=\"time\">",
              "<input type=\"month\">",
              "<input type=\"week\">",
              "<input type=\"datetime-local\">"
            ]
          },

          {
            type: "paragraph",
            content: "These generate browser-native date pickers."
          }

        ]
      },

      {
        heading: "22. What is type=\"color\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Creates a color picker."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="color">`
          },

          {
            type: "paragraph",
            content: "Users can visually select colors."
          }

        ]
      },

      {
        heading: "23. What is type=\"range\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Creates a slider control."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="range" min="0" max="100">`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Volume controls",
              "Ratings",
              "Brightness settings"
            ]
          }

        ]
      },

      {
        heading: "24. What is type=\"file\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Allows users to upload files."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="file">`
          },

          {
            type: "paragraph",
            content: "Common use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Profile pictures",
              "Documents",
              "Resume uploads"
            ]
          }

        ]
      },

      {
        heading: "25. What is a hidden input?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A hidden input stores data that users cannot see."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="hidden" value="123">`
          },

          {
            type: "paragraph",
            content: "Often used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Session information",
              "IDs",
              "Tokens"
            ]
          }

        ]
      },

      {
        heading: "26. What is the difference between radio buttons and checkboxes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "Radio Buttons",
            leftItems: [
              "Allow only one selection.",
              "<input type=\"radio\">"
            ],
            rightTitle: "Checkboxes",
            rightItems: [
              "Allow multiple selections.",
              "<input type=\"checkbox\">"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Gender → Radio buttons",
              "Hobbies → Checkboxes"
            ]
          }

        ]
      },

      {
        heading: "27. What is the required attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Makes a field mandatory."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="text" required>`
          },

          {
            type: "paragraph",
            content: "The form cannot be submitted if the field is empty."
          }

        ]
      },

      {
        heading: "28. What is the pattern attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Defines a regular expression for validation."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input pattern="[A-Za-z]{3,}">`
          },

          {
            type: "paragraph",
            content: "This field accepts only letters with at least three characters."
          }

        ]
      },

      {
        heading: "29. What are min and max attributes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "They restrict acceptable values."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="number" min="18" max="60">`
          },

          {
            type: "paragraph",
            content: "Only numbers between 18 and 60 are accepted."
          }

        ]
      },

      {
        heading: "30. What are minlength and maxlength?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "They control text length."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input minlength="5" maxlength="20">`
          },

          {
            type: "paragraph",
            content: "The user must enter between 5 and 20 characters."
          }

        ]
      },

      {
        heading: "31. What is the purpose of the placeholder attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Displays hint text inside a field."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input placeholder="Enter email">`
          },

          {
            type: "paragraph",
            content: "Placeholder text disappears when typing begins."
          }

        ]
      },

      {
        heading: "32. What is the difference between readonly and disabled?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Readonly",
              "Disabled"
            ],

            rows: [
              ["`<input readonly>`", "`<input disabled>`"],
              ["Value visible", "Value visible"],
              ["Value submitted", "Not submitted"],
              ["Cannot be edited", "Cannot be edited"]
            ]
          },

          {
            type: "paragraph",
            content: "This difference is frequently asked in interviews."
          }

        ]
      },

      {
        heading: "33. What is the autofocus attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Automatically places the cursor inside a field when the page loads."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input autofocus>`
          },

          {
            type: "paragraph",
            content: "Only one element should use autofocus per page."
          }

        ]
      },

      {
        heading: "34. What is the autocomplete attribute?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Controls browser autofill suggestions."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input autocomplete="email">`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Faster form completion",
              "Better user experience"
            ]
          }

        ]
      },

      {
        heading: "35. What is the HTML Constraint Validation API?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Constraint Validation API allows JavaScript to check form validity."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `input.checkValidity();`
          },

          {
            type: "paragraph",
            content: "Useful methods include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "checkValidity()",
              "reportValidity()",
              "setCustomValidity()"
            ]
          }

        ]
      },

      {
        heading: "36. What is custom validation?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Custom validation allows developers to define their own validation rules."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `if(password.length < 8){\n   input.setCustomValidity(\n      "Password must be at least 8 characters."\n   );\n}`
          },

          {
            type: "paragraph",
            content: "This provides more specific feedback than default browser messages."
          }

        ]
      },

      {
        heading: "37. Why should validation be performed on both client and server?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Client-side validation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Fast feedback",
              "✔ Better user experience"
            ]
          },

          {
            type: "paragraph",
            content: "Server-side validation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Security",
              "✔ Prevents malicious submissions"
            ]
          },

          {
            type: "paragraph",
            content: "Client-side validation can be bypassed, but server-side validation cannot be skipped."
          }

        ]
      },

      {
        heading: "38. What are some common form validation mistakes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Common mistakes include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Missing required fields",
              "❌ Weak password validation",
              "❌ No email validation",
              "❌ Trusting client-side validation only",
              "❌ Poor error messages",
              "❌ Not validating uploaded files",
              "❌ Ignoring accessibility requirements"
            ]
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 10: HTML Layout, Containers & Semantic HTML"
      },

      {
        heading: "1. What is HTML layout?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "HTML layout refers to the way content is structured and organized on a webpage."
          },

          {
            type: "paragraph",
            content: "A typical webpage layout may contain:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Navigation menu",
              "Main content",
              "Sidebar",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<header></header>\n<nav></nav>\n<main></main>\n<footer></footer>`
          },

          {
            type: "paragraph",
            content: "The layout provides structure, while CSS controls appearance."
          }

        ]
      },

      {
        heading: "2. What is a <div> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <div> element is a generic container used to group HTML elements together."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>\n  <h2>Profile</h2>\n  <p>User information</p>\n</div>`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Block-level element",
              "No semantic meaning",
              "Commonly used for styling and layout"
            ]
          },

          {
            type: "paragraph",
            content: "It is one of the most frequently used HTML elements."
          }

        ]
      },

      {
        heading: "3. Why is the <div> tag called a generic container?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Because it does not describe the content inside it."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>\n  Navigation Links\n</div>`
          },

          {
            type: "paragraph",
            content: "The browser knows only that it is a container."
          },

          {
            type: "paragraph",
            content: "Unlike semantic elements such as:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "which clearly indicates navigation content."
          }

        ]
      },

      {
        heading: "4. What is a <span> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <span> element is a generic inline container."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>\n  Welcome <span>John</span>\n</p>`
          },

          {
            type: "paragraph",
            content: "It is often used to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Style specific text",
              "Apply CSS",
              "Target content with JavaScript"
            ]
          }

        ]
      },

      {
        heading: "5. What is the difference between <div> and <span>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Div",
              "Span"
            ],

            rows: [
              ["Block element", "Inline element"],
              ["Starts on a new line", "Stays within the line"],
              ["Used for larger sections", "Used for small text portions"],
              ["Layout container", "Text container"]
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "<div>Block Content</div>",
              "<span>Inline Content</span>"
            ]
          }

        ]
      },

      {
        heading: "6. What are block-level elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Block elements occupy the full available width and start on a new line."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<div>",
              "<p>",
              "<h1>",
              "<section>",
              "<article>",
              "<header>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "New line starts automatically",
              "Can contain inline and block elements",
              "Used for page structure"
            ]
          }

        ]
      },

      {
        heading: "7. What are inline elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Inline elements occupy only the required width and remain within the current line."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<span>",
              "<a>",
              "<strong>",
              "<em>",
              "<img>"
            ]
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Do not start new lines",
              "Used within text content"
            ]
          }

        ]
      },

      {
        heading: "8. Can block elements contain inline elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>\n  <span>Hello</span>\n</div>`
          },

          {
            type: "paragraph",
            content: "This is perfectly valid HTML."
          }

        ]
      },

      {
        heading: "9. Can inline elements contain block elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Generally, no."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<span>\n  <div>Hello</div>\n</span>`
          },

          {
            type: "paragraph",
            content: "This creates invalid HTML structure in most situations."
          }

        ]
      },

      {
        heading: "10. What is meant by \"separation of content and presentation\"?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Content should be written in HTML while appearance should be controlled using CSS."
          },

          {
            type: "paragraph",
            content: "Bad practice:"
          },

          {
            type: "code",
            language: "html",
            content: `<font color="red">`
          },

          {
            type: "paragraph",
            content: "Modern approach:"
          },

          {
            type: "code",
            language: "html",
            content: `<p class="error">`
          },

          {
            type: "code",
            language: "css",
            content: `.error{\n   color:red;\n}`
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
              "Easier maintenance",
              "Better scalability"
            ]
          }

        ]
      },

      {
        heading: "11. What is Semantic HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic HTML uses tags that describe the meaning of content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "<header>",
              "<nav>",
              "<article>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "output",
            content: [
              "<div>",
              "<div>",
              "<div>"
            ]
          },

          {
            type: "paragraph",
            content: "Semantic elements make webpages easier to understand for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browsers",
              "Search engines",
              "Screen readers",
              "Developers"
            ]
          }

        ]
      },

      {
        heading: "12. Why is Semantic HTML important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic HTML improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility: Screen readers understand content better.",
              "SEO: Search engines better understand page structure.",
              "Readability: Code becomes easier to maintain.",
              "Maintainability: Developers can quickly identify page sections."
            ]
          }

        ]
      },

      {
        heading: "13. What is the difference between semantic and non-semantic elements?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "Semantic",
            leftItems: [
              "<header>",
              "<footer>",
              "<article>",
              "<nav>",
              "Clearly describe their purpose."
            ],
            rightTitle: "Non-Semantic",
            rightItems: [
              "<div>",
              "<span>",
              "Do not describe content meaning."
            ]
          }

        ]
      },

      {
        heading: "14. What is the purpose of the <header> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <header> element represents introductory content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n  <h1>My Blog</h1>\n</header>`
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
              "Site title",
              "Navigation links",
              "Search bar"
            ]
          }

        ]
      },

      {
        heading: "15. What is the purpose of the <footer> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The <footer> element represents closing information."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>\n  Copyright 2025\n</footer>`
          },

          {
            type: "paragraph",
            content: "Usually contains:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Copyright information",
              "Contact details",
              "Policies",
              "Social links"
            ]
          }

        ]
      },

      {
        heading: "16. What is the <main> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<main> represents the primary content of a page."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<main>\n  <h1>Article Title</h1>\n</main>`
          },

          {
            type: "paragraph",
            content: "Rules:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Only one main element per page",
              "Should not contain repeated content like navigation"
            ]
          }

        ]
      },

      {
        heading: "17. What is the purpose of the <section> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<section> groups related content into thematic sections."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<section>\n  <h2>Services</h2>\n</section>`
          },

          {
            type: "paragraph",
            content: "Think of it as a chapter in a book."
          }

        ]
      },

      {
        heading: "18. What is the purpose of the <article> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<article> represents independent, self-contained content."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blog posts",
              "News articles",
              "Product reviews",
              "Forum posts"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<article>\n  <h2>HTML Tutorial</h2>\n</article>`
          },

          {
            type: "paragraph",
            content: "The content should make sense even if viewed independently."
          }

        ]
      },

      {
        heading: "19. What is the difference between <section> and <article>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "Section",
            leftItems: [
              "Groups related content."
            ],
            rightTitle: "Article",
            rightItems: [
              "Represents standalone content."
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<section>\n   <article>Post 1</article>\n   <article>Post 2</article>\n</section>`
          },

          {
            type: "paragraph",
            content: "Interviewers ask this question very frequently."
          }

        ]
      },

      {
        heading: "20. What is the <aside> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<aside> contains content indirectly related to the main content."
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
              "Related articles",
              "Sidebars",
              "Author information"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>\n  Related Posts\n</aside>`
          }

        ]
      },

      {
        heading: "21. What is the <nav> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<nav> defines a navigation section."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>`
          },

          {
            type: "paragraph",
            content: "Used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Menus",
              "Side navigation",
              "Breadcrumbs"
            ]
          }

        ]
      },

      {
        heading: "22. What is the <figure> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<figure> groups media content with a caption."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<figure>\n  <img src="mountain.jpg">\n</figure>`
          },

          {
            type: "paragraph",
            content: "Commonly used for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Diagrams",
              "Charts",
              "Code snippets"
            ]
          }

        ]
      },

      {
        heading: "23. What is the purpose of <figcaption>?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<figcaption> provides a caption for a figure."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<figure>\n  <img src="mountain.jpg">\n  <figcaption>Mountain View</figcaption>\n</figure>`
          },

          {
            type: "paragraph",
            content: "Improves accessibility and understanding."
          }

        ]
      },

      {
        heading: "24. What is the <details> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<details> creates expandable and collapsible content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<details>\n  Content\n</details>`
          },

          {
            type: "paragraph",
            content: "Users can open or close it without JavaScript."
          }

        ]
      },

      {
        heading: "25. What is the <summary> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<summary> provides the visible heading for a details element."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<details>\n  <summary>Read More</summary>\n  Hidden Content\n</details>`
          },

          {
            type: "paragraph",
            content: "Clicking the summary expands the details."
          }

        ]
      },

      {
        heading: "26. What is the <time> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<time> represents dates and times in a machine-readable format."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<time datetime="2026-06-21">\n  June 21, 2026\n</time>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better SEO",
              "Better accessibility",
              "Structured data support"
            ]
          }

        ]
      },

      {
        heading: "27. What is the <address> element?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "<address> provides contact information."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<address>\n  contact@example.com\n</address>`
          },

          {
            type: "paragraph",
            content: "Common uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Author information",
              "Company contact details",
              "Organization addresses"
            ]
          }

        ]
      },

      {
        heading: "28. Why do search engines prefer Semantic HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic tags help search engines understand content hierarchy."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<article>`
          },

          {
            type: "paragraph",
            content: "immediately tells search engines: \"This is a standalone content piece.\""
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better indexing",
              "Better rankings",
              "Improved SEO"
            ]
          }

        ]
      },

      {
        heading: "29. How does Semantic HTML improve accessibility?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Screen readers rely heavily on semantic elements."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "A screen reader can announce: \"Navigation region\""
          },

          {
            type: "paragraph",
            content: "Similarly:"
          },

          {
            type: "output",
            content: [
              "<main>",
              "<header>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "provide meaningful landmarks for users with disabilities."
          }

        ]
      },

      {
        heading: "30. What is a common mistake beginners make regarding Semantic HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Using too many divs."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "output",
            content: [
              "<div class=\"header\">",
              "<div class=\"nav\">",
              "<div class=\"content\">",
              "<div class=\"footer\">"
            ]
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "output",
            content: [
              "<header>",
              "<nav>",
              "<main>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "This provides meaning, accessibility, and better SEO."
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 11: Accessibility (A11Y) & ARIA"
      },

      {
        heading: "1. What is Web Accessibility (A11Y)?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Web Accessibility (often abbreviated as A11Y) refers to designing and developing websites that can be used by everyone, including people with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Visual impairments",
              "Hearing impairments",
              "Motor disabilities",
              "Cognitive disabilities"
            ]
          },

          {
            type: "paragraph",
            content: "The goal is to ensure equal access to information and functionality."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "A blind user should be able to navigate your website using a screen reader."
            ]
          }

        ]
      },

      {
        heading: "2. Why is accessibility important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Accessibility is important because:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Makes websites usable for everyone",
              "Improves user experience",
              "Helps meet legal requirements in many countries",
              "Improves SEO",
              "Increases audience reach"
            ]
          },

          {
            type: "paragraph",
            content: "Accessibility is not just a feature—it is a responsibility."
          }

        ]
      },

      {
        heading: "3. What does A11Y mean?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A11Y is a numeronym for Accessibility."
          },

          {
            type: "paragraph",
            content: "There are:"
          },

          {
            type: "output",
            content: [
              "A",
              "11 letters",
              "Y",
              "between the first and last characters.",
              "",
              "Accessibility",
              "A + 11 letters + Y",
              "",
              "Hence:",
              "A11Y"
            ]
          }

        ]
      },

      {
        heading: "4. What is a screen reader?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A screen reader is assistive software that reads webpage content aloud."
          },

          {
            type: "paragraph",
            content: "Popular screen readers include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "NVDA",
              "JAWS",
              "VoiceOver",
              "TalkBack"
            ]
          },

          {
            type: "paragraph",
            content: "Screen readers rely heavily on proper HTML structure and semantic elements."
          }

        ]
      },

      {
        heading: "5. How does Semantic HTML improve accessibility?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic HTML provides meaning to content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "A screen reader can identify this as a navigation region."
          },

          {
            type: "paragraph",
            content: "Similarly:"
          },

          {
            type: "output",
            content: [
              "<header>",
              "<main>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "help users understand page structure."
          },

          {
            type: "paragraph",
            content: "Without semantic HTML, assistive technologies have less information available."
          }

        ]
      },

      {
        heading: "6. What is alt text?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Alt text is alternative text provided through the alt attribute of images."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="dog.jpg" alt="Golden Retriever running in a park">`
          },

          {
            type: "paragraph",
            content: "If the image cannot be viewed or a screen reader is being used, the alt text describes the image."
          }

        ]
      },

      {
        heading: "7. Why is the alt attribute important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The alt attribute:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Helps visually impaired users",
              "Improves accessibility",
              "Improves SEO",
              "Appears if an image fails to load"
            ]
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="dog.jpg" alt="image">`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="dog.jpg" alt="Golden Retriever running in a park">`
          }

        ]
      },

      {
        heading: "8. When should alt=\"\" be used?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Decorative images should use an empty alt attribute."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="border.png" alt="">`
          },

          {
            type: "paragraph",
            content: "This tells screen readers to ignore the image."
          }

        ]
      },

      {
        heading: "9. How should forms be made accessible?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Every form control should have a label."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="email">`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<label for="email">Email</label>\n<input id="email" type="email">`
          },

          {
            type: "paragraph",
            content: "Labels help screen readers identify form controls correctly."
          }

        ]
      },

      {
        heading: "10. What is keyboard accessibility?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Keyboard accessibility means users can operate the website without a mouse."
          },

          {
            type: "paragraph",
            content: "Common keyboard actions:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Tab → move forward",
              "Shift + Tab → move backward",
              "Enter → activate buttons",
              "Space → select controls"
            ]
          },

          {
            type: "paragraph",
            content: "All interactive elements should be keyboard accessible."
          }

        ]
      },

      {
        heading: "11. What is focus management?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Focus management controls which element currently receives keyboard input."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "paragraph",
            content: "When a modal opens, keyboard focus should move into the modal."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better accessibility",
              "Better user experience",
              "Easier navigation"
            ]
          }

        ]
      },

      {
        heading: "12. Why should focus indicators not be removed?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Focus indicators show keyboard users where they currently are."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "css",
            content: `*:focus {\n  outline: none;\n}`
          },

          {
            type: "paragraph",
            content: "Users may lose track of navigation."
          },

          {
            type: "paragraph",
            content: "If custom styles are used, always provide a visible replacement."
          }

        ]
      },

      {
        heading: "13. How can tables be made accessible?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Use:"
          },

          {
            type: "output",
            content: [
              "<table>",
              "<caption>",
              "<th>"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n  <caption>Monthly Sales</caption>\n</table>`
          },

          {
            type: "paragraph",
            content: "Headers should use:"
          },

          {
            type: "output",
            content: [
              "<th>"
            ]
          },

          {
            type: "paragraph",
            content: "instead of regular cells."
          },

          {
            type: "paragraph",
            content: "This helps screen readers understand relationships between data."
          }

        ]
      },

      {
        heading: "14. What are accessibility testing tools?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Popular tools include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Lighthouse",
              "axe DevTools",
              "WAVE",
              "Accessibility Insights"
            ]
          },

          {
            type: "paragraph",
            content: "These tools help identify accessibility issues automatically."
          }

        ]
      },

      {
        heading: "15. What is ARIA?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "ARIA stands for:"
          },

          {
            type: "output",
            content: [
              "Accessible Rich Internet Applications"
            ]
          },

          {
            type: "paragraph",
            content: "ARIA provides additional accessibility information to assistive technologies."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button aria-label="Close menu">`
          }

        ]
      },

      {
        heading: "16. Why was ARIA created?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Many modern UI components are built using JavaScript."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Custom dropdowns",
              "Tabs",
              "Accordions",
              "Modals"
            ]
          },

          {
            type: "paragraph",
            content: "Native HTML sometimes cannot fully describe these components."
          },

          {
            type: "paragraph",
            content: "ARIA fills those accessibility gaps."
          }

        ]
      },

      {
        heading: "17. What is the first rule of ARIA?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The first rule of ARIA is:"
          },

          {
            type: "output",
            content: [
              "Use native HTML whenever possible."
            ]
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<div role="button">`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>`
          },

          {
            type: "paragraph",
            content: "Native elements already provide accessibility support."
          }

        ]
      },

      {
        heading: "18. What is aria-label?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-label provides an accessible name directly."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button aria-label="Close">\n  X\n</button>`
          },

          {
            type: "paragraph",
            content: "Screen readers announce:"
          },

          {
            type: "output",
            content: [
              "Close button"
            ]
          },

          {
            type: "paragraph",
            content: "instead of simply:"
          },

          {
            type: "output",
            content: [
              "X"
            ]
          }

        ]
      },

      {
        heading: "19. What is aria-labelledby?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-labelledby uses another element's text as the accessible label."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<h2 id="title">Settings</h2>\n\n<div aria-labelledby="title">`
          },

          {
            type: "paragraph",
            content: "The screen reader uses \"Settings\" as the label."
          }

        ]
      },

      {
        heading: "20. What is aria-describedby?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-describedby provides additional descriptive information."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input aria-describedby="help">\n\n<p id="help">\n  Password must contain 8 characters.\n</p>`
          },

          {
            type: "paragraph",
            content: "Screen readers read the extra description."
          }

        ]
      },

      {
        heading: "21. What is aria-hidden?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-hidden=\"true\" hides content from screen readers."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<span aria-hidden="true">\n  ★\n</span>`
          },

          {
            type: "paragraph",
            content: "The star remains visible but is ignored by assistive technologies."
          }

        ]
      },

      {
        heading: "22. What is aria-expanded?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-expanded indicates whether a collapsible component is open or closed."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<button aria-expanded="false">`
          },

          {
            type: "paragraph",
            content: "When expanded:"
          },

          {
            type: "code",
            language: "html",
            content: `<button aria-expanded="true">`
          },

          {
            type: "paragraph",
            content: "Commonly used in:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accordions",
              "Menus",
              "Dropdowns"
            ]
          }

        ]
      },

      {
        heading: "23. What is aria-live?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "aria-live tells screen readers that content may change dynamically."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div aria-live="polite">`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Notifications",
              "Chat messages",
              "Status updates"
            ]
          },

          {
            type: "paragraph",
            content: "Screen readers announce updates automatically."
          }

        ]
      },

      {
        heading: "24. What are ARIA roles?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Roles define what an element represents."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "role=\"button\"",
              "role=\"dialog\"",
              "role=\"navigation\"",
              "role=\"alert\"",
              "role=\"tab\""
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div role="button">`
          },

          {
            type: "paragraph",
            content: "This tells assistive technologies that the element behaves like a button."
          }

        ]
      },

      {
        heading: "25. What are ARIA states and properties?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "States describe changing conditions."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "aria-expanded=\"true\"",
              "aria-checked=\"false\"",
              "aria-selected=\"true\""
            ]
          },

          {
            type: "paragraph",
            content: "Properties provide additional information."
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
              "aria-describedby",
              "aria-labelledby"
            ]
          }

        ]
      },

      {
        heading: "26. What is the difference between aria-label and aria-labelledby?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "aria-label",
            leftItems: [
              "Provides text directly.",
              "<button aria-label=\"Close\">"
            ],
            rightTitle: "aria-labelledby",
            rightItems: [
              "Uses another element's content.",
              "<h2 id=\"heading\">Close</h2>",
              "<button aria-labelledby=\"heading\">"
            ]
          },

          {
            type: "paragraph",
            content: "Generally, aria-labelledby is preferred when visible text already exists."
          }

        ]
      },

      {
        heading: "27. What are common ARIA mistakes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Common mistakes include:"
          },

          {
            type: "paragraph",
            content: "Using ARIA when native HTML exists"
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<div role="button">`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>`
          },

          {
            type: "paragraph",
            content: "Missing keyboard support"
          },

          {
            type: "paragraph",
            content: "Adding ARIA roles without keyboard functionality."
          },

          {
            type: "paragraph",
            content: "Incorrect states"
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `aria-expanded="false"`
          },

          {
            type: "paragraph",
            content: "while the menu is actually open."
          }

        ]
      },

      {
        heading: "28. Can ARIA fix bad HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "No."
          },

          {
            type: "paragraph",
            content: "ARIA enhances accessibility but cannot replace proper HTML structure."
          },

          {
            type: "paragraph",
            content: "Bad HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<div onclick="submit()">`
          },

          {
            type: "paragraph",
            content: "Adding:"
          },

          {
            type: "output",
            content: [
              "role=\"button\""
            ]
          },

          {
            type: "paragraph",
            content: "does not fully solve accessibility issues."
          },

          {
            type: "paragraph",
            content: "Use proper elements first."
          }

        ]
      },

      {
        heading: "29. How does accessibility affect SEO?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Accessibility and SEO often complement each other."
          },

          {
            type: "paragraph",
            content: "Benefits include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better semantic structure",
              "Better alt text",
              "Improved content hierarchy",
              "Better crawlability"
            ]
          },

          {
            type: "paragraph",
            content: "Search engines understand accessible content more effectively."
          }

        ]
      },

      {
        heading: "30. What are the most important accessibility practices every developer should follow?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use semantic HTML.",
              "Provide meaningful alt text.",
              "Label every form control.",
              "Ensure keyboard accessibility.",
              "Maintain visible focus states.",
              "Use proper heading hierarchy.",
              "Test with screen readers.",
              "Use ARIA only when necessary.",
              "Ensure sufficient color contrast.",
              "Regularly perform accessibility audits."
            ]
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 12: Responsive HTML, HTML5 APIs, HTML Performance & SEO"
      },

      {
        heading: "1. What is Responsive Web Design (RWD)?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Responsive Web Design is an approach that allows a website to adapt automatically to different screen sizes and devices."
          },

          {
            type: "paragraph",
            content: "A responsive website should work properly on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile phones",
              "Tablets",
              "Laptops",
              "Desktop monitors",
              "Smart TVs"
            ]
          },

          {
            type: "paragraph",
            content: "The goal is to provide an optimal viewing experience without requiring separate websites for different devices."
          }

        ]
      },

      {
        heading: "2. Why is responsive design important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Responsive design is important because:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Most internet traffic comes from mobile devices.",
              "Improves user experience.",
              "Reduces maintenance costs.",
              "Improves SEO rankings.",
              "Increases accessibility."
            ]
          },

          {
            type: "paragraph",
            content: "Modern websites are expected to be mobile-friendly by default."
          }

        ]
      },

      {
        heading: "3. What is the viewport meta tag?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The viewport meta tag controls how a webpage is displayed on mobile devices."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
          },

          {
            type: "paragraph",
            content: "Explanation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "width=device-width → Matches device screen width.",
              "initial-scale=1.0 → Sets default zoom level."
            ]
          },

          {
            type: "paragraph",
            content: "Without this tag, mobile browsers may render pages incorrectly."
          }

        ]
      },

      {
        heading: "4. What happens if the viewport meta tag is missing?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Without a viewport tag:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile browsers assume a desktop-sized layout.",
              "Text may appear tiny.",
              "Users must zoom manually.",
              "Layouts may break."
            ]
          },

          {
            type: "paragraph",
            content: "Therefore, the viewport tag is considered essential for responsive design."
          }

        ]
      },

      {
        heading: "5. What are responsive images?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Responsive images adapt to different screen sizes and resolutions."
          },

          {
            type: "paragraph",
            content: "Methods include:"
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
            content: `img {\n  max-width: 100%;\n  height: auto;\n}`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "HTML srcset"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="small.jpg"\n     srcset="small.jpg 480w,\n             medium.jpg 800w,\n             large.jpg 1200w">`
          },

          {
            type: "paragraph",
            content: "The browser chooses the most suitable image automatically."
          }

        ]
      },

      {
        heading: "6. What is the mobile-first approach?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Mobile-first design means designing for small screens first and then enhancing the layout for larger screens."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better performance",
              "Cleaner layouts",
              "Easier scaling",
              "Improved user experience"
            ]
          },

          {
            type: "paragraph",
            content: "Example workflow:"
          },

          {
            type: "output",
            content: [
              "Mobile → Tablet → Desktop"
            ]
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "output",
            content: [
              "Desktop → Mobile"
            ]
          }

        ]
      },

      {
        heading: "7. What is device compatibility?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Device compatibility means ensuring a website works correctly across:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Different screen sizes",
              "Browsers",
              "Operating systems",
              "Input methods"
            ]
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Firefox",
              "Safari",
              "Edge"
            ]
          },

          {
            type: "paragraph",
            content: "A good website should behave consistently across platforms."
          }

        ]
      },

      {
        heading: "8. What makes a page mobile-friendly?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A mobile-friendly page typically includes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Responsive layout",
              "Readable text",
              "Touch-friendly buttons",
              "Responsive images",
              "Fast loading speed",
              "Proper viewport configuration"
            ]
          }

        ]
      },

      {
        heading: "9. What is the Geolocation API?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Geolocation API allows websites to access a user's geographic location (with permission)."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `navigator.geolocation.getCurrentPosition();`
          },

          {
            type: "paragraph",
            content: "Common use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Maps",
              "Food delivery apps",
              "Ride-sharing services",
              "Weather applications"
            ]
          }

        ]
      },

      {
        heading: "10. Why does Geolocation require permission?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Location data is sensitive information."
          },

          {
            type: "paragraph",
            content: "Browsers require user permission to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Protect privacy",
              "Prevent tracking",
              "Improve security"
            ]
          },

          {
            type: "paragraph",
            content: "A website cannot access location without user consent."
          }

        ]
      },

      {
        heading: "11. What is the HTML Drag and Drop API?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Drag and Drop API allows users to drag elements and drop them elsewhere."
          },

          {
            type: "paragraph",
            content: "Common applications:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "File uploads",
              "Task boards",
              "Reordering lists",
              "Dashboard customization"
            ]
          }

        ]
      },

      {
        heading: "12. What is the Web Storage API?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Web Storage API allows websites to store data inside the browser."
          },

          {
            type: "paragraph",
            content: "Two storage mechanisms:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Local Storage",
              "Session Storage"
            ]
          },

          {
            type: "paragraph",
            content: "This data remains on the client side."
          }

        ]
      },

      {
        heading: "13. What is Local Storage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Local Storage stores data permanently until it is manually removed."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `localStorage.setItem("theme", "dark");`
          },

          {
            type: "paragraph",
            content: "Characteristics:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Persistent",
              "Browser-specific",
              "Key-value storage"
            ]
          }

        ]
      },

      {
        heading: "14. What is Session Storage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Session Storage stores data only for the current browser session."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `sessionStorage.setItem("user", "John");`
          },

          {
            type: "paragraph",
            content: "The data disappears when the browser tab closes."
          }

        ]
      },

      {
        heading: "15. Difference between Local Storage and Session Storage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "Local Storage",
              "Session Storage"
            ],

            rows: [
              ["Persists after browser restart", "Removed after tab closes"],
              ["Long-term storage", "Temporary storage"],
              ["Shared across tabs of same origin", "Tab-specific"]
            ]
          }

        ]
      },

      {
        heading: "16. What are Web Workers?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Web Workers allow JavaScript to run in background threads."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Prevent UI freezing",
              "Improve responsiveness",
              "Handle heavy computations"
            ]
          },

          {
            type: "paragraph",
            content: "Example use cases:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Image processing",
              "Data analysis",
              "Background calculations"
            ]
          }

        ]
      },

      {
        heading: "17. Why are Web Workers useful?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "JavaScript normally runs on a single thread."
          },

          {
            type: "paragraph",
            content: "Heavy tasks can block the UI."
          },

          {
            type: "paragraph",
            content: "Web Workers move those tasks into separate threads, allowing the page to remain responsive."
          }

        ]
      },

      {
        heading: "18. What are Server-Sent Events (SSE)?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Server-Sent Events allow a server to continuously send updates to a browser over a single connection."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Live scores",
              "Stock prices",
              "Notifications",
              "News feeds"
            ]
          },

          {
            type: "paragraph",
            content: "Communication direction:"
          },

          {
            type: "output",
            content: [
              "Server → Client",
              "only."
            ]
          }

        ]
      },

      {
        heading: "19. Difference between SSE and WebSockets?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "SSE",
            leftItems: [
              "Server → Client",
              "One-way communication."
            ],
            rightTitle: "WebSocket",
            rightItems: [
              "Server ↔ Client",
              "Two-way communication."
            ]
          },

          {
            type: "paragraph",
            content: "WebSockets are more suitable for chat applications."
          }

        ]
      },

      {
        heading: "20. What is the Canvas API?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Canvas is an HTML element used for dynamic graphics rendering."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas id="myCanvas"></canvas>`
          },

          {
            type: "paragraph",
            content: "Applications:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Games",
              "Drawing apps",
              "Data visualizations",
              "Animations"
            ]
          }

        ]
      },

      {
        heading: "21. What is SVG?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "SVG stands for Scalable Vector Graphics."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" />\n</svg>`
          },

          {
            type: "paragraph",
            content: "SVG uses XML-based vector graphics."
          }

        ]
      },

      {
        heading: "22. Difference between SVG and Canvas?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "table",
            headers: [
              "SVG",
              "Canvas"
            ],

            rows: [
              ["Vector-based", "Pixel-based"],
              ["Resolution-independent", "Faster for complex graphics"],
              ["DOM accessible", "Better for games and animations"],
              ["Best for icons and diagrams", ""]
            ]
          }

        ]
      },

      {
        heading: "23. What is page load time?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Page load time is the time required for a webpage to become usable."
          },

          {
            type: "paragraph",
            content: "Factors affecting load time:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "CSS",
              "JavaScript",
              "Fonts",
              "Network speed"
            ]
          },

          {
            type: "paragraph",
            content: "Faster websites provide better user experiences."
          }

        ]
      },

      {
        heading: "24. How can image optimization improve performance?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Image optimization reduces file size without significantly affecting quality."
          },

          {
            type: "paragraph",
            content: "Methods:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Compress images",
              "Use WebP",
              "Use AVIF",
              "Resize appropriately",
              "Use responsive images"
            ]
          },

          {
            type: "paragraph",
            content: "Images are often the largest assets on a webpage."
          }

        ]
      },

      {
        heading: "25. What is lazy loading?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Lazy loading delays resource loading until needed."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="photo.jpg" loading="lazy">`
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
              "Lower bandwidth usage",
              "Better performance scores"
            ]
          }

        ]
      },

      {
        heading: "26. What are script loading strategies?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Scripts can block page rendering."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Normal"
          },

          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "Blocks parsing."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Defer"
          },

          {
            type: "code",
            language: "html",
            content: `<script defer src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "Executes after HTML parsing."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Async"
          },

          {
            type: "code",
            language: "html",
            content: `<script async src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "Downloads and executes independently."
          }

        ]
      },

      {
        heading: "27. What is render-blocking content?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Resources that prevent page rendering are called render-blocking resources."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Large CSS files",
              "Blocking JavaScript"
            ]
          },

          {
            type: "paragraph",
            content: "Reducing render-blocking resources improves page speed."
          }

        ]
      },

      {
        heading: "28. What are some HTML performance best practices?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Best practices include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Optimize images",
              "Use lazy loading",
              "Minimize requests",
              "Use caching",
              "Defer scripts",
              "Compress assets",
              "Use responsive media"
            ]
          }

        ]
      },

      {
        heading: "29. What is SEO?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "SEO (Search Engine Optimization) is the process of improving a website's visibility in search engines."
          },

          {
            type: "paragraph",
            content: "Goals:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Higher rankings",
              "More traffic",
              "Better discoverability"
            ]
          }

        ]
      },

      {
        heading: "30. How does semantic HTML improve SEO?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Semantic elements provide meaning to content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "<article>",
              "<nav>",
              "<header>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "Search engines understand content structure more effectively."
          }

        ]
      },

      {
        heading: "31. What are meta tags?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Meta tags provide metadata about a webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta name="description"\n      content="HTML interview preparation guide">`
          },

          {
            type: "paragraph",
            content: "They are placed inside the <head> section."
          }

        ]
      },

      {
        heading: "32. What is a meta description?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A meta description summarizes a webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta name="description"\ncontent="Learn HTML interview questions and answers">`
          },

          {
            type: "paragraph",
            content: "Search engines may display it in search results."
          }

        ]
      },

      {
        heading: "33. What are Open Graph tags?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Open Graph tags control how pages appear when shared on social media."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta property="og:title"\ncontent="HTML Interview Guide">`
          },

          {
            type: "paragraph",
            content: "Common tags:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "og:title",
              "og:description",
              "og:image",
              "og:url"
            ]
          }

        ]
      },

      {
        heading: "34. Why is heading hierarchy important?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Proper heading structure improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "Readability",
              "SEO"
            ]
          },

          {
            type: "paragraph",
            content: "Good structure:"
          },

          {
            type: "output",
            content: [
              "<h1>Main Title</h1>",
              "<h2>Section</h2>",
              "<h3>Subsection</h3>"
            ]
          },

          {
            type: "paragraph",
            content: "Avoid skipping levels unnecessarily."
          }

        ]
      },

      {
        heading: "35. How do alt attributes help SEO?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Alt attributes help search engines understand image content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="laptop.jpg"\n     alt="Developer coding on a laptop">`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better image search visibility",
              "Improved accessibility",
              "Better page context"
            ]
          }

        ]
      },

      {
        heading: "36. What is crawlability?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Crawlability is a search engine's ability to discover and navigate website pages."
          },

          {
            type: "paragraph",
            content: "Factors affecting crawlability:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Internal links",
              "Semantic structure",
              "Proper URLs",
              "Accessible navigation"
            ]
          },

          {
            type: "paragraph",
            content: "If search engines cannot crawl pages, they cannot index them."
          }

        ]
      },

      {
        heading: "37. What is structured content?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Structured content organizes information logically using:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Lists",
              "Tables",
              "Semantic elements"
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
              "Better readability",
              "Better SEO",
              "Easier maintenance"
            ]
          }

        ]
      },

      {
        heading: "38. What are the most important SEO-friendly HTML practices?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use semantic HTML.",
              "Use descriptive page titles.",
              "Add meta descriptions.",
              "Maintain heading hierarchy.",
              "Provide alt text.",
              "Create crawlable navigation.",
              "Use clean URLs.",
              "Optimize images.",
              "Improve page speed.",
              "Ensure mobile friendliness."
            ]
          },
          {
            type: "divider"
          },

        ]
      },

      {
        heading: "Part 13: Security, Standards, Browser Rendering, Advanced Concepts, Scenarios & Practical Questions"
      },

      {
        heading: "1. What is Cross-Site Scripting (XSS)?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Cross-Site Scripting (XSS) is a security vulnerability where attackers inject malicious scripts into web pages viewed by other users."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<script>\nalert("Hacked");\n</script>`
          },

          {
            type: "paragraph",
            content: "If user input is displayed without proper sanitization, attackers may execute JavaScript inside another user's browser."
          },

          {
            type: "paragraph",
            content: "Risks:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Cookie theft",
              "Session hijacking",
              "Data theft",
              "Phishing attacks"
            ]
          }

        ]
      },

      {
        heading: "2. How can HTML contribute to XSS vulnerabilities?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "HTML itself does not execute attacks, but unsafe handling of user-generated content can create vulnerabilities."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "paragraph",
            content: "Suppose a comment section allows:"
          },

          {
            type: "code",
            language: "html",
            content: `<script>alert("XSS")</script>`
          },

          {
            type: "paragraph",
            content: "If displayed directly, the browser executes the script."
          },

          {
            type: "paragraph",
            content: "Prevention requires proper escaping and sanitization."
          }

        ]
      },

      {
        heading: "3. What is unsafe user input?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Unsafe user input refers to data entered by users that is displayed or processed without validation or sanitization."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Comment fields",
              "Search boxes",
              "Contact forms",
              "Profile descriptions"
            ]
          },

          {
            type: "paragraph",
            content: "Never trust user input directly."
          }

        ]
      },

      {
        heading: "4. What are some form security considerations?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Important considerations include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Input validation",
              "CSRF protection",
              "HTTPS usage",
              "Sanitizing data",
              "Limiting file uploads",
              "Preventing SQL Injection"
            ]
          },

          {
            type: "paragraph",
            content: "HTML provides validation features, but server-side validation is always required."
          }

        ]
      },

      {
        heading: "5. What security concerns exist with file uploads?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Potential risks include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Malware uploads",
              "Executable scripts",
              "Large file attacks",
              "Storage abuse"
            ]
          },

          {
            type: "paragraph",
            content: "Best practices:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Validate file types",
              "Restrict file size",
              "Rename uploaded files",
              "Scan uploaded content"
            ]
          }

        ]
      },

      {
        heading: "6. Why can iframes be a security concern?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Iframes can load third-party content."
          },

          {
            type: "paragraph",
            content: "Potential risks:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Clickjacking",
              "Malicious scripts",
              "Tracking users",
              "Data theft"
            ]
          },

          {
            type: "paragraph",
            content: "Developers should carefully control embedded content."
          }

        ]
      },

      {
        heading: "7. What is the sandbox attribute in an iframe?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The sandbox attribute restricts what an iframe can do."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<iframe src="page.html" sandbox></iframe>`
          },

          {
            type: "paragraph",
            content: "Restrictions may include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blocking scripts",
              "Preventing form submissions",
              "Disabling popups"
            ]
          },

          {
            type: "paragraph",
            content: "It improves security significantly."
          }

        ]
      },

      {
        heading: "8. What is Content Security Policy (CSP)?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Content Security Policy is a browser security mechanism that controls which resources may load on a webpage."
          },

          {
            type: "paragraph",
            content: "It helps prevent:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "XSS attacks",
              "Unauthorized scripts",
              "Data injection attacks"
            ]
          },

          {
            type: "paragraph",
            content: "CSP is usually configured using HTTP headers."
          }

        ]
      },

      {
        heading: "9. What is the W3C?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The World Wide Web Consortium (W3C) is an organization that develops web standards."
          },

          {
            type: "paragraph",
            content: "Its goals include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Web interoperability",
              "Accessibility",
              "Consistent implementation"
            ]
          },

          {
            type: "paragraph",
            content: "Many HTML recommendations originated from W3C."
          }

        ]
      },

      {
        heading: "10. What is WHATWG?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The WHATWG maintains the living HTML standard used by modern browsers."
          },

          {
            type: "paragraph",
            content: "Unlike older static specifications, the WHATWG standard continuously evolves."
          },

          {
            type: "paragraph",
            content: "Modern HTML specifications are primarily maintained by WHATWG."
          }

        ]
      },

      {
        heading: "11. What is HTML validation?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "HTML validation checks whether code follows official standards."
          },

          {
            type: "paragraph",
            content: "Validation helps detect:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Missing tags",
              "Incorrect nesting",
              "Invalid attributes",
              "Structural errors"
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
              "Better browser compatibility",
              "Improved maintainability",
              "Fewer bugs"
            ]
          }

        ]
      },

      {
        heading: "12. What are clean HTML coding practices?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Clean HTML should:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use proper indentation",
              "Use semantic elements",
              "Avoid unnecessary nesting",
              "Use descriptive names",
              "Follow standards"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "output",
            content: [
              "Good:",
              "<article>",
              "  <h2>News</h2>",
              "</article>",
              "",
              "Poor:",
              "<div>",
              "<div>",
              "<div>"
            ]
          }

        ]
      },

      {
        heading: "13. What are semantic HTML best practices?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Use meaningful elements whenever possible:"
          },

          {
            type: "output",
            content: [
              "<header>",
              "<nav>",
              "<main>",
              "<section>",
              "<article>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "Avoid using <div> for everything."
          },

          {
            type: "paragraph",
            content: "Semantic markup improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "SEO",
              "Readability"
            ]
          }

        ]
      },

      {
        heading: "14. What are accessibility best practices?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Important practices include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Alt text for images",
              "Labels for forms",
              "Keyboard accessibility",
              "Proper headings",
              "Semantic elements"
            ]
          },

          {
            type: "paragraph",
            content: "Accessibility should be considered from the beginning of development."
          }

        ]
      },

      {
        heading: "15. What are SEO best practices in HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Use:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Proper headings",
              "Meta descriptions",
              "Alt attributes",
              "Clean URLs",
              "Responsive design"
            ]
          },

          {
            type: "paragraph",
            content: "These help search engines understand content."
          }

        ]
      },

      {
        heading: "16. How do browsers parse HTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The browser reads HTML from top to bottom."
          },

          {
            type: "paragraph",
            content: "Steps:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Download HTML",
              "Parse markup",
              "Create DOM",
              "Load resources",
              "Render page"
            ]
          },

          {
            type: "paragraph",
            content: "This process occurs automatically whenever a webpage loads."
          }

        ]
      },

      {
        heading: "17. What is the DOM?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "DOM stands for Document Object Model."
          },

          {
            type: "paragraph",
            content: "It is a tree-like representation of the webpage."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<body>\n  <h1>Hello</h1>\n</body>`
          },

          {
            type: "paragraph",
            content: "DOM structure:"
          },

          {
            type: "tree",
            content: `Document\n └── Body\n      └── H1`
          },

          {
            type: "paragraph",
            content: "JavaScript interacts with the DOM."
          }

        ]
      },

      {
        heading: "18. What is the Render Tree?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Render Tree combines:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "DOM structure",
              "CSS styling information"
            ]
          },

          {
            type: "paragraph",
            content: "The browser uses it to determine what appears on screen."
          }

        ]
      },

      {
        heading: "19. What is reflow?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Reflow occurs when the browser recalculates element positions and dimensions."
          },

          {
            type: "paragraph",
            content: "Triggers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Window resizing",
              "Content changes",
              "Layout modifications"
            ]
          },

          {
            type: "paragraph",
            content: "Reflow is computationally expensive."
          }

        ]
      },

      {
        heading: "20. What is repaint?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Repaint occurs when visual appearance changes but layout remains unchanged."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `color: red;`
          },

          {
            type: "paragraph",
            content: "Changing color triggers repaint but usually not reflow."
          }

        ]
      },

      {
        heading: "21. What is the Critical Rendering Path?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The Critical Rendering Path is the sequence of steps required to render content on screen."
          },

          {
            type: "paragraph",
            content: "Steps:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML parsing",
              "DOM creation",
              "CSS parsing",
              "Render Tree creation",
              "Layout",
              "Paint"
            ]
          },

          {
            type: "paragraph",
            content: "Optimizing this path improves performance."
          }

        ]
      },

      {
        heading: "22. How can JavaScript affect HTML parsing?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Normal scripts block HTML parsing."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },

          {
            type: "paragraph",
            content: "The browser pauses HTML processing until the script loads and executes."
          },

          {
            type: "paragraph",
            content: "Using:"
          },

          {
            type: "code",
            language: "html",
            content: `<script defer>`
          },

          {
            type: "paragraph",
            content: "reduces blocking."
          }

        ]
      },

      {
        heading: "23. What is the difference between HTML and the DOM?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "HTML",
            leftItems: [
              "Static markup source.",
              "Example:",
              "<h1>Hello</h1>"
            ],
            rightTitle: "DOM",
            rightItems: [
              "Runtime representation created by the browser.",
              "JavaScript modifies the DOM, not the original HTML file."
            ]
          }

        ]
      },

      {
        heading: "24. What is the difference between HTML and XHTML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "HTML",
            leftItems: [
              "More forgiving.",
              "<p>Hello",
              "May still work."
            ],
            rightTitle: "XHTML",
            rightItems: [
              "Stricter XML-based syntax.",
              "<p>Hello</p>",
              "must be properly closed."
            ]
          }

        ]
      },

      {
        heading: "25. What is the difference between HTML and XML?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "comparison",
            leftTitle: "HTML",
            leftItems: [
              "Designed for displaying content.",
              "HTML has predefined tags."
            ],
            rightTitle: "XML",
            rightItems: [
              "Designed for storing and transporting data.",
              "XML allows custom tags."
            ]
          }

        ]
      },

      {
        heading: "26. What is Shadow DOM?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Shadow DOM creates encapsulated DOM trees."
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Style isolation",
              "Component isolation",
              "Reusable UI components"
            ]
          },

          {
            type: "paragraph",
            content: "It is heavily used in Web Components."
          }

        ]
      },

      {
        heading: "27. What is Progressive Enhancement?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Progressive Enhancement means:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Build basic functionality first.",
              "Add advanced features for capable browsers."
            ]
          },

          {
            type: "paragraph",
            content: "This ensures content remains accessible to all users."
          }

        ]
      },

      {
        heading: "28. What is Graceful Degradation?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Graceful Degradation starts with a fully featured experience and attempts to maintain functionality when features are unavailable."
          },

          {
            type: "paragraph",
            content: "Difference:"
          },

          {
            type: "output",
            content: [
              "Progressive Enhancement → Build upward.",
              "Graceful Degradation → Scale downward."
            ]
          }

        ]
      },

      {
        heading: "29. What are custom data attributes?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Custom data attributes store extra information inside HTML."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div data-user-id="123"></div>`
          },

          {
            type: "paragraph",
            content: "Accessed via JavaScript:"
          },

          {
            type: "code",
            language: "javascript",
            content: `element.dataset.userId`
          }

        ]
      },

      {
        heading: "30. What are Web Components?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Web Components allow developers to create reusable custom HTML elements."
          },

          {
            type: "paragraph",
            content: "Main technologies:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Custom Elements",
              "Shadow DOM",
              "HTML Templates"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<user-card></user-card>`
          }

        ]
      },

      {
        heading: "31. What is Microdata?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Microdata adds structured information to HTML."
          },

          {
            type: "paragraph",
            content: "It helps search engines understand content better."
          },

          {
            type: "paragraph",
            content: "Common uses:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Product information",
              "Reviews",
              "Events",
              "Recipes"
            ]
          }

        ]
      },

      {
        heading: "32. Scenario: How would you design an accessible form?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "I would:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use labels",
              "Use fieldsets",
              "Provide validation messages",
              "Ensure keyboard navigation",
              "Use semantic inputs",
              "Add ARIA only when needed"
            ]
          },

          {
            type: "paragraph",
            content: "Accessibility starts with proper HTML structure."
          }

        ]
      },

      {
        heading: "33. Scenario: How would you create an SEO-friendly webpage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "I would include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Title tag",
              "Meta description",
              "Proper headings",
              "Alt text",
              "Internal linking",
              "Mobile responsiveness"
            ]
          }

        ]
      },

      {
        heading: "34. Scenario: How would you structure a blog page?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Example structure:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<main>\n  <article>\n  </article>\n</main>\n<aside>\n<footer>`
          },

          {
            type: "paragraph",
            content: "This provides semantic meaning and improves SEO."
          }

        ]
      },

      {
        heading: "35. Scenario: How would you optimize a media-heavy webpage?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "I would:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Compress images",
              "Use WebP",
              "Implement lazy loading",
              "Optimize videos",
              "Use responsive images",
              "Reduce unnecessary assets"
            ]
          }

        ]
      },

      {
        heading: "36. Scenario: How would you improve accessibility in existing code?",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Steps:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Add missing alt text.",
              "Fix heading hierarchy.",
              "Add labels.",
              "Improve keyboard navigation.",
              "Replace generic divs with semantic elements.",
              "Test using screen readers."
            ]
          }

        ]
      },

      {
        heading: "37. Practical Question: Write a registration form.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Expected elements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Name",
              "Email",
              "Password",
              "Confirm Password",
              "Submit Button"
            ]
          },

          {
            type: "paragraph",
            content: "Interviewer evaluates:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Correct form structure",
              "Labels",
              "Validation attributes",
              "Accessibility"
            ]
          }

        ]
      },

      {
        heading: "38. Practical Question: Create a responsive webpage structure.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Expected sections:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<main>\n<section>\n<footer>`
          },

          {
            type: "paragraph",
            content: "Include viewport meta tag and responsive design principles."
          }

        ]
      },

      {
        heading: "39. Practical Question: Create an accessible navigation menu.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic <nav>",
              "Keyboard accessible links",
              "Clear labels",
              "Logical structure"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n  </ul>\n</nav>`
          }

        ]
      },

      {
        heading: "40. Practical Question: Build a table with merged cells.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "The interviewer expects use of:"
          },

          {
            type: "output",
            content: [
              "colspan",
              "rowspan"
            ]
          },

          {
            type: "paragraph",
            content: "and proper table semantics."
          }

        ]
      },

      {
        heading: "41. Practical Question: Design a complete contact form.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Expected fields:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Name",
              "Email",
              "Subject",
              "Message",
              "Submit button"
            ]
          },

          {
            type: "paragraph",
            content: "Should include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Labels",
              "Validation",
              "Accessibility support"
            ]
          }

        ]
      },

      {
        heading: "42. Practical Question: Build a semantic blog article page.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "Expected structure:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<main>\n  <article>\n    <section>\n  </article>\n<aside>\n<footer>`
          },

          {
            type: "paragraph",
            content: "This tests understanding of semantic HTML."
          }

        ]
      },

      {
        heading: "43. Practical Question: Build a mini HTML project.",

        blocks: [

          {
            type: "paragraph",
            content: "Answer:"
          },

          {
            type: "paragraph",
            content: "A strong interview solution typically includes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic structure",
              "Responsive layout",
              "Accessible navigation",
              "Optimized images",
              "Forms",
              "Tables",
              "Proper SEO elements"
            ]
          },

          {
            type: "paragraph",
            content: "This demonstrates complete HTML knowledge rather than isolated tag usage."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A very common trick question in advanced interviews revolves around the 'sandbox' attribute in iframes. Be prepared to explain that if you use both `allow-scripts` and `allow-same-origin` in the sandbox attribute of an iframe hosting malicious content, the sandboxed document can easily remove its own sandbox restrictions, effectively defeating the security entirely! Always grant the minimum permissions necessary."
          }

        ]
      }

    ]
  },




  /* ===========================
    Second Topic : HTML Coding Challenges
============================= */
    "html-coding-challenges": {
    title: "HTML Coding Challenges",
    readingTime: "20 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "You have completed the HTML learning journey. By now, you know about elements, headings, paragraphs, links, images, lists, tables, forms, semantic HTML, accessibility, responsive design, and many other important topics."
          },

          {
            type: "paragraph",
            content: "However, knowing HTML tags is only half of the journey."
          },

          {
            type: "paragraph",
            content: "The real learning happens when you build things."
          },

          {
            type: "paragraph",
            content: "This is where HTML Coding Challenges become important."
          },

          {
            type: "paragraph",
            content: "Coding challenges help you:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Apply what you've learned",
              "Improve problem-solving skills",
              "Develop confidence",
              "Learn practical website structure",
              "Prepare for real-world projects",
              "Build a portfolio",
              "Identify weak areas"
            ]
          },

          {
            type: "paragraph",
            content: "Think of coding challenges as a gym for your HTML skills. Reading tutorials teaches concepts, but challenges build experience."
          }

        ]
      },

      {
        heading: "Why HTML Challenges Matter",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners make a common mistake:"
          },

          {
            type: "flow",
            steps: [
              "Watch Tutorial",
              "Understand Topic",
              "Move to Next Topic"
            ]
          },

          {
            type: "paragraph",
            content: "Without practice, most concepts are forgotten quickly."
          },

          {
            type: "paragraph",
            content: "A better approach is:"
          },

          {
            type: "flow",
            steps: [
              "Learn Topic",
              "Practice Topic",
              "Build Mini Project",
              "Review Mistakes",
              "Move Forward"
            ]
          },

          {
            type: "paragraph",
            content: "Challenges transform passive knowledge into practical skills."
          }

        ]
      },

      {
        heading: "How to Approach HTML Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "When solving any challenge:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Step 1: Read Requirements Carefully"
          },

          {
            type: "paragraph",
            content: "Understand exactly what needs to be built."
          },

          {
            type: "paragraph",
            content: "Ask yourself:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "What content is needed?",
              "What HTML elements should be used?",
              "Which semantic tags fit best?"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Step 2: Plan Structure "
          },

          {
            type: "paragraph",
            content: "Before writing code, sketch the layout."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "tree",
            content: `Header
├── Logo
├── Navigation

Main
├── Hero Section
├── Features
├── Testimonials

Footer`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Step 3: Write Semantic HTML"
          },

          {
            type: "paragraph",
            content: "Always prefer meaningful tags."
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "output",
            content: [
              "<header>",
              "<nav>",
              "<main>",
              "<section>",
              "<article>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "output",
            content: [
              "<div>",
              "<div>",
              "<div>",
              "<div>"
            ]
          },

          {
            type: "paragraph",
            content: "unless necessary."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Step 4: Validate Your Work"
          },

          {
            type: "paragraph",
            content: "Check:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Missing closing tags",
              "Proper nesting",
              "Semantic structure",
              "Accessibility"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Step 5: Compare With Better Solutions"
          },

          {
            type: "paragraph",
            content: "After completing a challenge:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Review your code",
              "Find improvements",
              "Learn alternative approaches"
            ]
          },

          {
            type: "paragraph",
            content: "This is how professionals grow."
          }

        ]
      },

      {
        heading: "Beginner HTML Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "Start with simple tasks."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 1: Personal Introduction Page"
          },

          {
            type: "paragraph",
            content: "Create a page containing:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Your name",
              "Profile image",
              "Short biography",
              "Hobbies",
              "Contact information"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Paragraphs",
              "Images",
              "Lists"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 2: Favorite Movie Page"
          },

          {
            type: "paragraph",
            content: "Create a page that includes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Movie title",
              "Poster image",
              "Description",
              "Cast list",
              "Trailer link"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Links",
              "Lists"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 3: Recipe Page"
          },

          {
            type: "paragraph",
            content: "Create a cooking recipe. Include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Recipe title",
              "Ingredients list",
              "Cooking steps",
              "Preparation time"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Ordered lists",
              "Unordered lists",
              "Headings"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 4: Travel Destination Page"
          },

          {
            type: "paragraph",
            content: "Show information about a city. Include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Description",
              "Tourist attractions",
              "Travel tips"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Links",
              "Sections"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 5: Daily Schedule"
          },

          {
            type: "paragraph",
            content: "Create your daily timetable."
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Tables",
              "Table headers",
              "Table rows"
            ]
          }

        ]
      },

      {
        heading: "Intermediate HTML Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "These challenges combine multiple topics."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 6: Restaurant Website Structure"
          },

          {
            type: "paragraph",
            content: "Create:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Navigation",
              "Menu section",
              "About section",
              "Contact section",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Layout planning"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 7: Portfolio Website"
          },

          {
            type: "paragraph",
            content: "Build a portfolio containing:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "About Me",
              "Skills",
              "Projects",
              "Resume Link",
              "Contact Form"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Forms",
              "Navigation",
              "Semantic tags"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 8: News Article Page"
          },

          {
            type: "paragraph",
            content: "Create a newspaper article layout. Include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Headline",
              "Author",
              "Date",
              "Main article",
              "Related articles"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Article tag",
              "Sections",
              "Semantic structure"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 9: Product Landing Page"
          },

          {
            type: "paragraph",
            content: "Create:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Product image",
              "Features",
              "Pricing section",
              "Testimonials",
              "Buy button"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Content organization",
              "Accessibility"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 10: Event Registration Form"
          },

          {
            type: "paragraph",
            content: "Create a form with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Name",
              "Email",
              "Phone",
              "Gender",
              "Event Selection",
              "Submit Button"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Form elements",
              "Input types",
              "Validation"
            ]
          }

        ]
      },

      {
        heading: "Advanced HTML Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "These simulate real websites."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 11: Blog Homepage"
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Header",
              "Navigation",
              "Featured Post",
              "Recent Posts",
              "Sidebar",
              "Footer"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Layout planning"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 12: Online Course Website"
          },

          {
            type: "paragraph",
            content: "Include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Course catalog",
              "Instructor information",
              "Enrollment form",
              "Testimonials"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Tables",
              "Forms",
              "Sections"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 13: Documentation Page"
          },

          {
            type: "paragraph",
            content: "Create technical documentation with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Sidebar navigation",
              "Content sections",
              "Internal links"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Anchors",
              "IDs",
              "Navigation"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 14: E-Commerce Product Page"
          },

          {
            type: "paragraph",
            content: "Include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Product image gallery",
              "Description",
              "Specifications table",
              "Reviews",
              "Purchase form"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Tables",
              "Forms"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Challenge 15: Accessibility-Focused Website"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Alt text",
              "ARIA attributes",
              "Proper heading hierarchy"
            ]
          },

          {
            type: "paragraph",
            content: "Skills Practiced:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "SEO",
              "Best practices"
            ]
          }

        ]
      },

      {
        heading: "HTML-Only Real-World Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners immediately add CSS. Try solving these with HTML only."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Build a Wikipedia-Style Article"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Table of contents",
              "Internal links",
              "Multiple sections"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Build a University Website Structure"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Departments",
              "Courses",
              "Admission Form",
              "Contact Page"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Build a Resume"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Personal Information",
              "Education",
              "Skills",
              "Projects",
              "Experience"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Build a Survey Form"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple question types",
              "Validation",
              "Dropdowns",
              "Radio buttons",
              "Checkboxes"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Build a FAQ Page"
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Questions",
              "Answers",
              "Navigation"
            ]
          }

        ]
      },

      {
        heading: "Semantic HTML Challenge",

        blocks: [

          {
            type: "paragraph",
            content: "One of the best exercises."
          },

          {
            type: "paragraph",
            content: "Take this structure:"
          },

          {
            type: "tree",
            content: `Website
├── Header
├── Navigation
├── Main Content
├── Sidebar
├── Footer`
          },

          {
            type: "paragraph",
            content: "Build it using:"
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
            content: "without using unnecessary <div> elements."
          },

          {
            type: "paragraph",
            content: "This teaches proper semantic design."
          }

        ]
      },

      {
        heading: "Accessibility Challenge",

        blocks: [

          {
            type: "paragraph",
            content: "Create a webpage where:"
          },

          {
            type: "paragraph",
            content: "Every image has:"
          },

          {
            type: "code",
            language: "html",
            content: `alt=""`
          },

          {
            type: "paragraph",
            content: "Every form control has:"
          },

          {
            type: "code",
            language: "html",
            content: `<label>`
          },

          {
            type: "paragraph",
            content: "Every page has:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "One H1",
              "Logical heading order"
            ]
          },

          {
            type: "paragraph",
            content: "This challenge improves professional development skills."
          }

        ]
      },

      {
        heading: "SEO Challenge",

        blocks: [

          {
            type: "paragraph",
            content: "Create an article page with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Title",
              "Meta description",
              "Semantic tags",
              "Structured headings"
            ]
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "tree",
            content: `H1
 ├── H2
 │    ├── H3
 │    ├── H3`
          },

          {
            type: "paragraph",
            content: "This improves search engine understanding."
          }

        ]
      },

      {
        heading: "HTML Challenge Progression",

        blocks: [

          {
            type: "paragraph",
            content: "Follow this order: "
          },

          {
            type: "flow",
            steps: [
              "Basic Page",
              "Recipe Page",
              "Movie Page",
              "Table Challenge",
              "Form Challenge",
              "Portfolio",
              "Blog",
              "Landing Page",
              "Documentation Site",
              "Complete Website"
            ]
          }

        ]
      },

      {
        heading: "30-Day HTML Challenge Plan",

        blocks: [

          {
            type: "paragraph",
            content: "Week 1"
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Introduction Page",
              "Recipe Page",
              "Movie Page",
              "Hobby Page",
              "Travel Page",
              "Resume",
              "Review & Improve"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Week 2"
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Timetable",
              "Product Page",
              "Restaurant Page",
              "FAQ Page",
              "News Article",
              "Survey Form",
              "Review"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Week 3"
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Portfolio",
              "Blog Homepage",
              "Documentation Page",
              "Event Registration Form",
              "University Website",
              "Course Website",
              "Review"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Week 4"
          },

          {
            type: "paragraph",
            content: "Build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility Challenge",
              "Semantic HTML Challenge",
              "SEO Challenge",
              "Landing Page",
              "E-Commerce Page",
              "Complete Multi-Page Website",
              "Review",
              "Refactor",
              "Publish Project"
            ]
          }

        ]
      },

      {
        heading: "How Professionals Practice HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Professional developers rarely practice isolated tags."
          },

          {
            type: "paragraph",
            content: "Instead, they recreate real websites."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blog pages",
              "Product pages",
              "Portfolio sites",
              "News websites",
              "Company websites",
              "Documentation websites"
            ]
          },

          {
            type: "paragraph",
            content: "The best practice is:"
          },

          {
            type: "flow",
            steps: [
              "Learn Concept",
              "Build Component",
              "Build Page",
              "Build Website"
            ]
          }

        ]
      },

      {
        heading: "Common Mistakes During Challenges",

        blocks: [

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Using only <div> elements",
              "❌ Skipping semantic tags",
              "❌ Missing alt text",
              "❌ Incorrect heading hierarchy",
              "❌ Forgetting labels in forms",
              "❌ Not validating HTML",
              "❌ Copying solutions immediately",
              "❌ Building without planning"
            ]
          }

        ]
      },

      {
        heading: "Challenge Yourself Further",

        blocks: [

          {
            type: "paragraph",
            content: "After completing basic HTML challenges, try these advanced tasks:"
          },

          {
            type: "paragraph",
            content: "Recreate Famous Websites (HTML Structure Only)"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "YouTube homepage",
              "Wikipedia article",
              "Amazon product page",
              "Netflix landing page",
              "LinkedIn profile page"
            ]
          },

          {
            type: "paragraph",
            content: "Focus only on HTML structure. Ignore CSS initially. This develops strong structural thinking."
          }

        ]
      },

      {
        heading: "How to Know You're Good at HTML",

        blocks: [

          {
            type: "paragraph",
            content: "You are ready to move confidently into CSS when you can:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Create complete webpage structures without looking up tags",
              "Build forms from memory",
              "Use semantic elements correctly",
              "Create accessible HTML",
              "Build multi-page websites",
              "Organize content logically",
              "Understand SEO-friendly markup",
              "Validate and debug HTML independently"
            ]
          }

        ]
      },

      {
        heading: "Final Challenge: Build a Complete Website",

        blocks: [

          {
            type: "paragraph",
            content: "Create a website with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Home Page",
              "About Page",
              "Services Page",
              "Blog Page",
              "Contact Page"
            ]
          },

          {
            type: "paragraph",
            content: "Requirements:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Forms",
              "Tables",
              "Images",
              "Navigation",
              "Accessibility",
              "SEO-friendly structure"
            ]
          },

          {
            type: "paragraph",
            content: "If you can complete this project without constantly checking tutorials, you have successfully learned HTML and are ready to move on to CSS, JavaScript, and modern web development. 🚀"
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 An excellent way to test your raw HTML skills is to disable CSS completely on a modern website (you can use browser extensions like 'Web Developer' for this). Study how professional sites degrade gracefully. If a site's raw HTML reads sequentially and makes logical sense without any styling applied, they've done a great job with their semantic structure!"
          }

        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Common HTML Mistakes
============================= */
    "common-html-mistakes": {
    title: "Common HTML Mistakes",
    readingTime: "23 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Learning HTML is relatively easy compared to many programming languages, but beginners often develop bad habits that can create problems later. A webpage may appear to work in a browser, yet still contain mistakes that affect accessibility, SEO, maintainability, performance, and compatibility."
          },

          {
            type: "paragraph",
            content: "Professional developers spend just as much time avoiding mistakes as they do writing code."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you'll learn the most common HTML mistakes, why they happen, how to fix them, and how to write cleaner, more professional HTML."
          }

        ]
      },

      {
        heading: "Why HTML Mistakes Matter",

        blocks: [

          {
            type: "paragraph",
            content: "A small HTML mistake can lead to:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Broken layouts",
              "Accessibility issues",
              "Poor SEO rankings",
              "Validation errors",
              "Browser inconsistencies",
              "Maintenance difficulties",
              "Poor user experience"
            ]
          },

          {
            type: "paragraph",
            content: "For example, forgetting an image's alt attribute may seem harmless, but it can prevent screen reader users from understanding important content."
          },

          {
            type: "paragraph",
            content: "Good HTML is not just about making a page look correct—it is about making it work correctly for everyone."
          }

        ]
      },

      {
        heading: "Mistake 1: Forgetting the Document Structure",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners start writing content immediately."
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>My Website</h1>\n<p>Welcome!</p>`
          },

          {
            type: "paragraph",
            content: "The proper HTML document structure should include:"
          },

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n...\n</body>\n</html>`
          },

          {
            type: "paragraph",
            content: "Without a proper structure, browsers may enter compatibility mode and behave unexpectedly."
          }

        ]
      },

      {
        heading: "Mistake 2: Missing Closing Tags",

        blocks: [

          {
            type: "paragraph",
            content: "One of the most common beginner errors is forgetting to close elements."
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>This is a paragraph`
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>This is a paragraph</p>`
          },

          {
            type: "paragraph",
            content: "Although browsers often try to fix such mistakes automatically, relying on browser corrections can lead to unpredictable results."
          }

        ]
      },

      {
        heading: "Mistake 3: Improper Nesting of Elements",

        blocks: [

          {
            type: "paragraph",
            content: "HTML elements must be nested correctly."
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>\n<strong>Hello\n</p>\n</strong>`
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>\n<strong>Hello</strong>\n</p>`
          },

          {
            type: "paragraph",
            content: "A simple rule:"
          },

          {
            type: "output",
            content: [
              "The last element opened should be the first element closed."
            ]
          },

          {
            type: "paragraph",
            content: "Think of HTML elements like properly nested boxes."
          }

        ]
      },

      {
        heading: "Mistake 4: Using Too Many div Elements",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners wrap everything inside countless divs."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>\n<div>\n<div>\nContent\n</div>\n</div>\n</div>`
          },

          {
            type: "paragraph",
            content: "This creates what developers call:"
          },

          {
            type: "output",
            content: [
              "Div Soup"
            ]
          },

          {
            type: "paragraph",
            content: "Instead, use semantic elements when appropriate:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<nav>\n<main>\n<section>\n<article>\n<footer>`
          },

          {
            type: "paragraph",
            content: "Semantic HTML improves:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Readability",
              "Accessibility",
              "SEO",
              "Maintainability"
            ]
          }

        ]
      },

      {
        heading: "Mistake 5: Ignoring Semantic HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Some beginners use:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="header">`
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>`
          },

          {
            type: "paragraph",
            content: "Or:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="navigation">`
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "While both may look identical visually, semantic elements provide meaning to browsers, search engines, and assistive technologies."
          }

        ]
      },

      {
        heading: "Mistake 6: Skipping the Alt Attribute on Images",

        blocks: [

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="cat.jpg">`
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="cat.jpg" alt="Orange cat sitting on a sofa">`
          },

          {
            type: "paragraph",
            content: "Why alt text matters:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Helps visually impaired users",
              "Improves accessibility",
              "Assists search engines",
              "Provides fallback if images fail to load"
            ]
          },

          {
            type: "paragraph",
            content: "If an image is purely decorative:"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="design.png" alt="">`
          }

        ]
      },

      {
        heading: "Mistake 7: Using Headings Incorrectly",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners choose heading sizes based on appearance rather than structure."
          },

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Main Title</h1>\n<h4>Section</h4>\n<h2>Subsection</h2>`
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Main Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>`
          },

          {
            type: "paragraph",
            content: "Headings should create a logical hierarchy."
          },

          {
            type: "paragraph",
            content: "Think of headings like chapters in a book."
          }

        ]
      },

      {
        heading: "Mistake 8: Multiple H1 Elements Without Purpose",

        blocks: [

          {
            type: "paragraph",
            content: "Historically, pages were expected to have one main H1."
          },

          {
            type: "paragraph",
            content: "Bad structure:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Home</h1>\n<h1>Products</h1>\n<h1>Services</h1>`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<h1>Company Name</h1>\n\n<h2>Products</h2>\n\n<h2>Services</h2>`
          },

          {
            type: "paragraph",
            content: "Modern HTML5 allows multiple H1s in some contexts, but a single primary H1 remains the clearest approach for beginners and SEO."
          }

        ]
      },

      {
        heading: "Mistake 9: Using Line Breaks for Layout",

        blocks: [

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<p>Name</p>\n<br><br><br><br>\n<p>Email</p>`
          },

          {
            type: "paragraph",
            content: "Many beginners use excessive <br> tags to create spacing."
          },

          {
            type: "paragraph",
            content: "Instead, spacing should be controlled with CSS."
          },

          {
            type: "paragraph",
            content: "<br> should only represent an actual line break in content."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Poems",
              "Addresses",
              "Song lyrics"
            ]
          }

        ]
      },

      {
        heading: "Mistake 10: Forgetting Labels in Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Incorrect:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="text">`
          },

          {
            type: "paragraph",
            content: "Users may not know what information is required."
          },

          {
            type: "paragraph",
            content: "Correct:"
          },

          {
            type: "code",
            language: "html",
            content: `<label>Name</label>\n<input type="text">`
          },

          {
            type: "paragraph",
            content: "Labels improve:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "Form usability",
              "Clickable area"
            ]
          },

          {
            type: "paragraph",
            content: "Screen readers depend heavily on labels."
          }

        ]
      },

      {
        heading: "Mistake 11: Using Placeholder Instead of Labels",

        blocks: [

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<input placeholder="Enter Email">`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<label>Email</label>\n<input placeholder="Enter Email">`
          },

          {
            type: "paragraph",
            content: "Why?"
          },

          {
            type: "output",
            content: [
              "Placeholders disappear once users start typing.",
              "Labels remain visible and accessible."
            ]
          }

        ]
      },

      {
        heading: "Mistake 12: Not Validating Forms",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners create forms without validation."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="email">`
          },

          {
            type: "paragraph",
            content: "instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `<input type="email" required>`
          },

          {
            type: "paragraph",
            content: "Modern HTML provides built-in validation features."
          },

          {
            type: "paragraph",
            content: "Useful attributes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "required",
              "minlength",
              "maxlength",
              "min",
              "max",
              "pattern"
            ]
          },

          {
            type: "paragraph",
            content: "These reduce invalid submissions."
          }

        ]
      },

      {
        heading: "Mistake 13: Using Tables for Page Layout",

        blocks: [

          {
            type: "paragraph",
            content: "Years ago, developers built entire websites using tables."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<table>\n<tr>\n<td>Header</td>\n</tr>\n</table>`
          },

          {
            type: "paragraph",
            content: "Today this is considered poor practice."
          },

          {
            type: "paragraph",
            content: "Use tables only for tabular data."
          },

          {
            type: "paragraph",
            content: "Use CSS layouts such as:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Flexbox",
              "Grid"
            ]
          },

          {
            type: "paragraph",
            content: "for page structure."
          }

        ]
      },

      {
        heading: "Mistake 14: Missing the Viewport Meta Tag",

        blocks: [

          {
            type: "paragraph",
            content: "Without the viewport tag:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta name="viewport"\ncontent="width=device-width, initial-scale=1.0">`
          },

          {
            type: "paragraph",
            content: "Mobile devices may display pages incorrectly."
          },

          {
            type: "paragraph",
            content: "Symptoms:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Tiny text",
              "Zoomed-out layout",
              "Poor responsiveness"
            ]
          },

          {
            type: "paragraph",
            content: "Always include this tag."
          }

        ]
      },

      {
        heading: "Mistake 15: Forgetting Character Encoding",

        blocks: [

          {
            type: "paragraph",
            content: "Without:"
          },

          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },

          {
            type: "paragraph",
            content: "Special characters may appear incorrectly."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "output",
            content: [
              "€",
              "₹",
              "©",
              "✓",
              "😊"
            ]
          },

          {
            type: "paragraph",
            content: "UTF-8 supports almost every language and symbol."
          }

        ]
      },

      {
        heading: "Mistake 16: Using Deprecated Tags",

        blocks: [

          {
            type: "paragraph",
            content: "Some HTML tags are outdated."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<font>",
              "<center>",
              "<big>",
              "<strike>"
            ]
          },

          {
            type: "paragraph",
            content: "These were used in older HTML versions."
          },

          {
            type: "paragraph",
            content: "Modern HTML uses CSS for styling."
          },

          {
            type: "paragraph",
            content: "Instead of:"
          },

          {
            type: "code",
            language: "html",
            content: `<center>`
          },

          {
            type: "paragraph",
            content: "Use CSS:"
          },

          {
            type: "code",
            language: "css",
            content: `text-align: center;`
          }

        ]
      },

      {
        heading: "Mistake 17: Forgetting the Title Element",

        blocks: [

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<head>\n</head>`
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<head>\n<title>HTML Tutorial</title>\n</head>`
          },

          {
            type: "paragraph",
            content: "The title appears:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "In browser tabs",
              "In bookmarks",
              "In search results"
            ]
          },

          {
            type: "paragraph",
            content: "It is important for SEO and usability."
          }

        ]
      },

      {
        heading: "Mistake 18: Non-Descriptive Link Text",

        blocks: [

          {
            type: "paragraph",
            content: "Poor:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="article.html">Click Here</a>`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="article.html">\nRead the HTML Tutorial\n</a>`
          },

          {
            type: "paragraph",
            content: "Descriptive links help:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility",
              "Search engines",
              "User understanding"
            ]
          }

        ]
      },

      {
        heading: "Mistake 19: Empty Buttons and Links",

        blocks: [

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<button></button>`
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<a href="#"></a>`
          },

          {
            type: "paragraph",
            content: "Interactive elements should have meaningful content."
          },

          {
            type: "paragraph",
            content: "Good:"
          },

          {
            type: "code",
            language: "html",
            content: `<button>Submit</button>`
          }

        ]
      },

      {
        heading: "Mistake 20: Ignoring Accessibility",

        blocks: [

          {
            type: "paragraph",
            content: "Accessibility is one of the most overlooked areas."
          },

          {
            type: "paragraph",
            content: "Common accessibility mistakes:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Missing alt text",
              "❌ Missing labels",
              "❌ Poor heading structure",
              "❌ Non-descriptive links",
              "❌ Improper ARIA usage"
            ]
          },

          {
            type: "paragraph",
            content: "Accessibility should be considered from the beginning, not added later."
          }

        ]
      },

      {
        heading: "Mistake 21: Ignoring SEO Basics",

        blocks: [

          {
            type: "paragraph",
            content: "Many HTML mistakes hurt search rankings."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Missing title",
              "Missing meta description",
              "Poor heading structure",
              "Non-semantic HTML",
              "Missing image alt text"
            ]
          },

          {
            type: "paragraph",
            content: "Search engines use HTML structure to understand content."
          }

        ]
      },

      {
        heading: "Mistake 22: Copy-Pasting Without Understanding",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners copy code directly from tutorials."
          },

          {
            type: "paragraph",
            content: "Problem:"
          },

          {
            type: "output",
            content: [
              "Works today",
              "Breaks tomorrow"
            ]
          },

          {
            type: "paragraph",
            content: "Instead:"
          },

          {
            type: "flow",
            steps: [
              "Read the code",
              "Understand the purpose",
              "Modify it yourself"
            ]
          },

          {
            type: "paragraph",
            content: "Learning happens through understanding, not copying."
          }

        ]
      },

      {
        heading: "Mistake 23: Not Testing on Different Devices",

        blocks: [

          {
            type: "paragraph",
            content: "A page may look perfect on your laptop but break on:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Phones",
              "Tablets",
              "Large screens"
            ]
          },

          {
            type: "paragraph",
            content: "Always test:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop",
              "Mobile",
              "Different browsers"
            ]
          },

          {
            type: "paragraph",
            content: "Professional developers test frequently."
          }

        ]
      },

      {
        heading: "Mistake 24: Writing Unorganized HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n<div>\n<section>\n<h1>`
          },

          {
            type: "paragraph",
            content: "with random indentation."
          },

          {
            type: "paragraph",
            content: "Good formatting:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>\n    <section>\n        <h1>Title</h1>\n    </section>\n</header>`
          },

          {
            type: "paragraph",
            content: "Proper indentation:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Improves readability",
              "Makes debugging easier",
              "Helps team collaboration"
            ]
          }

        ]
      },

      {
        heading: "Mistake 25: Ignoring HTML Validation",

        blocks: [

          {
            type: "paragraph",
            content: "A page may appear correct while containing hidden errors."
          },

          {
            type: "paragraph",
            content: "Use validators to check:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Missing tags",
              "Incorrect nesting",
              "Invalid attributes"
            ]
          },

          {
            type: "paragraph",
            content: "Validation helps catch mistakes early."
          }

        ]
      },

      {
        heading: "Beginner HTML Error Checklist",

        blocks: [

          {
            type: "paragraph",
            content: "Before considering a page complete, ask:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Did I include <!DOCTYPE html>?",
              "Did I add a title?",
              "Did I add UTF-8 charset?",
              "Did I include the viewport tag?",
              "Are all tags properly closed?",
              "Is nesting correct?",
              "Are images using alt text?",
              "Are forms using labels?",
              "Is heading structure logical?",
              "Is semantic HTML used?",
              "Does the page work on mobile?",
              "Is the HTML validated?"
            ]
          },

          {
            type: "paragraph",
            content: "If the answer is \"yes\" to all, your HTML is already better than what many beginners write."
          }

        ]
      },

      {
        heading: "Professional HTML Mindset",

        blocks: [

          {
            type: "paragraph",
            content: "Beginners often ask:"
          },

          {
            type: "output",
            content: [
              "\"Does the page work?\""
            ]
          },

          {
            type: "paragraph",
            content: "Professionals ask:"
          },

          {
            type: "output",
            content: [
              "\"Does the page work correctly, accessibly, semantically, efficiently, and maintainably?\""
            ]
          },

          {
            type: "paragraph",
            content: "That difference separates beginner HTML from production-quality HTML."
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
              "Always use proper HTML document structure.",
              "Close and nest elements correctly.",
              "Prefer semantic HTML over excessive divs.",
              "Add alt text to images.",
              "Use labels for forms.",
              "Maintain proper heading hierarchy.",
              "Include charset and viewport meta tags.",
              "Avoid deprecated tags.",
              "Write accessible and SEO-friendly HTML.",
              "Validate your code regularly.",
              "Test on multiple devices and browsers."
            ]
          },

          {
            type: "paragraph",
            content: "Avoiding these common mistakes will make your HTML cleaner, more professional, more accessible, and much easier to maintain as your web development journey progresses. 🚀"
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 While browsers are incredibly forgiving and will often auto-close missing tags or restructure invalid nesting silently, relying on this behavior is dangerous. When you move on to learning JavaScript or frameworks like React, trying to target or manipulate these 'auto-corrected' DOM elements will cause confusing, impossible-to-debug errors. Always write strict, valid HTML!"
          }

        ]
      }
    ]
  },
};

export default htmlInterviewPreparation;