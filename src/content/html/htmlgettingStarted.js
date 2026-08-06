const htmlgettingStarted = {


/* ===========================
    First Topic : Introduction to HTML
============================= */
    "introduction-to-html": {
    title: "Introduction to HTML",
    readingTime: "20 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML is the foundation of every website on the internet."
          },
 
          {
            type: "paragraph",
            content:
              "Whenever you open a webpage, whether it is YouTube, Amazon, Google, Facebook, Netflix, or a personal blog, HTML is being used behind the scenes to structure and organize the content displayed in your browser."
          },
 
          {
            type: "paragraph",
            content:
              "HTML provides the basic skeleton of a webpage. Without HTML, web browsers would have no way to understand what content should appear on a page."
          },
 
          {
            type: "paragraph",
            content:
              "Think of HTML as the structure of a building:"
          },
 
          {
            type: "list",
            items: [
              "HTML → Structure and layout",
              "CSS → Design and appearance",
              "JavaScript → Behavior and interactivity"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Just as a building needs walls, rooms, doors, and windows before decoration and electrical systems can be added, every webpage needs HTML before styling and functionality can be applied."
          },
 
          {
            type: "paragraph",
            content:
              "HTML is one of the first technologies every web developer learns because it serves as the foundation for all modern web development."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What HTML is",
              "Why HTML exists",
              "History of HTML",
              "How webpages work",
              "HTML documents and structure",
              "HTML tags and elements",
              "How browsers read HTML",
              "HTML versions and HTML5",
              "Real-world uses of HTML",
              "Advantages of HTML",
              "Common beginner mistakes",
              "Best practices followed by professionals"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand why HTML is the backbone of the web and how every website starts with HTML."
          }
 
        ]
      },
 
      {
        heading: "What is HTML?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML stands for:"
          },
 
          {
            type: "quote",
            content:
              "HyperText Markup Language"
          },
 
          {
            type: "paragraph",
            content:
              "Let's break this down."
          },
 
          {
            type: "paragraph",
            content:
              "HyperText refers to text that can contain links to other pages or resources."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "flow",
            steps: [
              "Page A",
              "→",
              "Click Link",
              "→",
              "Page B"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This ability to connect documents through links is what made the World Wide Web possible."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Markup means adding special annotations to content so that computers understand its structure."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "The browser understands:"
          },
 
          {
            type: "output",
            content:
              "This is a Heading"
          },
 
          {
            type: "paragraph",
            content:
              "The tags provide meaning to the content."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "HTML has its own set of rules and syntax used to describe webpage content."
          },
 
          {
            type: "paragraph",
            content:
              "However, HTML is not considered a programming language because it does not contain:"
          },
 
          {
            type: "list",
            items: [
              "Variables",
              "Loops",
              "Functions",
              "Conditions"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Instead, HTML is a markup language used to structure content."
          }
 
        ]
      },
 
      {
        heading: "Why Was HTML Created?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before HTML existed, sharing interconnected documents across computers was difficult."
          },
 
          {
            type: "paragraph",
            content:
              "In 1989, a computer scientist named Tim Berners-Lee proposed a system that would allow documents to be linked together and accessed through the internet."
          },
 
          {
            type: "paragraph",
            content:
              "This idea eventually became:"
          },
 
          {
            type: "output",
            content:
              "World Wide Web (WWW)"
          },
 
          {
            type: "paragraph",
            content:
              "To make the web possible, a language was needed to describe documents."
          },
 
          {
            type: "paragraph",
            content:
              "That language became HTML."
          },
 
          {
            type: "paragraph",
            content:
              "The primary goals were:"
          },
 
          {
            type: "list",
            items: [
              "Organize information",
              "Connect documents through hyperlinks",
              "Allow content sharing globally"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Today, HTML powers billions of webpages worldwide."
          }
 
        ]
      },
 
      {
        heading: "A Real-World Analogy",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine constructing a house."
          },
 
          {
            type: "paragraph",
            content:
              "The house requires:"
          },
 
          {
            type: "list",
            items: [
              "Foundation",
              "Walls",
              "Rooms",
              "Doors",
              "Windows",
              "Roof"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Only after the structure exists can you add:"
          },
 
          {
            type: "list",
            items: [
              "Paint",
              "Furniture",
              "Lighting",
              "Decoration"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Similarly:"
          },
 
          {
            type: "flow",
            steps: [
              "HTML → Structure",
              "CSS → Styling",
              "JavaScript → Functionality"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "tree",
            content: `Website
  ├── Header
  ├── Navigation
  ├── Main Content
  ├── Sidebar
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "HTML creates this structure."
          }
 
        ]
      },
 
      {
        heading: "How the Web Works",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When you visit a website, several steps occur behind the scenes."
          },
 
          {
            type: "paragraph",
            content:
              "Process:"
          },
 
          {
            type: "flow",
            steps: [
              "User Opens Website",
              "→",
              "Browser Sends Request",
              "→",
              "Server Responds",
              "→",
              "HTML File Received",
              "→",
              "Browser Reads HTML",
              "→",
              "Page Appears"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The browser cannot display a webpage until it receives and interprets HTML."
          },
 
          {
            type: "paragraph",
            content:
              "HTML acts as the instruction manual for the browser."
          }
 
        ]
      },
 
      {
        heading: "HTML Is Everywhere",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML is used in:"
          },
 
          {
            type: "cards",
            items: [
              {
                title: "Websites",
                description: "News websites, Blogs, E-commerce stores, Social media platforms."
              },
 
              {
                title: "Web Applications",
                description: "Gmail, Google Docs, Trello, Notion."
              },
 
              {
                title: "Emails",
                description: "Many professional emails are built using HTML."
              },
 
              {
                title: "Documentation Platforms",
                description: "Technical documentation, Online courses, Knowledge bases."
              },
 
              {
                title: "Mobile and Desktop Applications",
                description: "Many modern applications use web technologies internally, including HTML."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Understanding HTML Documents",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "An HTML webpage is stored inside an HTML document."
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
    <title>My First Page</title>
</head>
 
<body>
    <h1>Hello World</h1>
</body>
</html>`
          },
 
          {
            type: "paragraph",
            content:
              "Every webpage starts with an HTML document."
          },
 
          {
            type: "paragraph",
            content:
              "The browser reads this document from top to bottom."
          }
 
        ]
      },
 
      {
        heading: "What Are HTML Tags?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML uses tags to describe content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Here:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Is the opening tag."
          },
 
          {
            type: "code",
            language: "html",
            content: `</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Is the closing tag."
          },
 
          {
            type: "paragraph",
            content:
              "Content:"
          },
 
          {
            type: "output",
            content:
              "Welcome"
          },
 
          {
            type: "paragraph",
            content:
              "Is displayed as a heading. Tags tell browsers what content represents."
          }
 
        ]
      },
 
      {
        heading: "What Are HTML Elements?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "An HTML element consists of:"
          },
 
          {
            type: "flow",
            steps: [
              "Opening Tag",
              "+",
              "Content",
              "+",
              "Closing Tag"
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
            content: `<p>Hello World</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Structure:"
          },
 
          {
            type: "table",
            headers: [
              "Part",
              "Role"
            ],
 
            rows: [
              ["<p>", "Opening Tag"],
              ["Hello World", "Content"],
              ["</p>", "Closing Tag"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Together, they form an HTML element."
          }
 
        ]
      },
 
      {
        heading: "HTML Uses Nested Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Elements can contain other elements."
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
    <h1>Title</h1>
    <p>Description</p>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Structure:"
          },
 
          {
            type: "tree",
            content: `div
  ├── h1
  └── p`
          },
 
          {
            type: "paragraph",
            content:
              "This nesting creates the structure of webpages."
          }
 
        ]
      },
 
      {
        heading: "How Browsers Read HTML",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Browsers do not display raw HTML code."
          },
 
          {
            type: "paragraph",
            content:
              "Instead:"
          },
 
          {
            type: "flow",
            steps: [
              "HTML File",
              "→",
              "Browser Parses HTML",
              "→",
              "Creates DOM",
              "→",
              "Renders Page"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "DOM stands for:"
          },
 
          {
            type: "output",
            content:
              "Document Object Model"
          },
 
          {
            type: "paragraph",
            content:
              "The DOM is an internal tree-like representation of the webpage."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "tree",
            content: `html
  ├── head
  └── body
      ├── h1
      └── p`
          },
 
          {
            type: "paragraph",
            content:
              "This concept becomes extremely important when learning JavaScript later."
          }
 
        ]
      },
 
      {
        heading: "HTML Is Not a Programming Language",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners mistakenly believe HTML is a programming language."
          },
 
          {
            type: "paragraph",
            content:
              "HTML cannot:"
          },
 
          {
            type: "list",
            items: [
              "❌ Perform calculations",
              "❌ Create loops",
              "❌ Store variables",
              "❌ Execute logic"
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
              "Programming Languages:"
          },
 
          {
            type: "example",
            items: [
              "JavaScript",
              "Python",
              "Java",
              "C++"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "HTML simply describes structure."
          },
 
          {
            type: "paragraph",
            content:
              "It tells the browser:"
          },
 
          {
            type: "output",
            content: [
              "\"This is a heading.\"",
              "\"This is a paragraph.\"",
              "\"This is an image.\"",
              "\"This is a button.\""
            ]
          }
 
        ]
      },
 
      {
        heading: "Evolution of HTML",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML has evolved significantly over time."
          },
 
          {
            type: "paragraph",
            content:
              "Timeline:"
          },
 
          {
            type: "table",
            headers: [
              "Version",
              "Year"
            ],
 
            rows: [
              ["HTML 1.0", "1993"],
              ["HTML 2.0", "1995"],
              ["HTML 3.2", "1997"],
              ["HTML 4.01", "1999"],
              ["HTML5", "2014"],
              ["Modern HTML5", "Today"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "HTML5 introduced many powerful features including:"
          },
 
          {
            type: "list",
            items: [
              "Video support",
              "Audio support",
              "Semantic elements",
              "Better forms",
              "Improved APIs"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Most websites today use HTML5."
          }
 
        ]
      },
 
      {
        heading: "What Makes HTML5 Important?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before HTML5: Videos required plugins."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "output",
            content:
              "Adobe Flash"
          },
 
          {
            type: "paragraph",
            content:
              "HTML5 introduced native support."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<video>`
          },
 
          {
            type: "paragraph",
            content:
              "Similarly:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<audio>`
          },
 
          {
            type: "paragraph",
            content:
              "Allowed browsers to play media directly."
          },
 
          {
            type: "paragraph",
            content:
              "HTML5 also introduced semantic elements like:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<main>
<section>
<article>
<footer>`
          },
 
          {
            type: "paragraph",
            content:
              "These improved:"
          },
 
          {
            type: "list",
            items: [
              "Accessibility",
              "SEO",
              "Readability"
            ]
          }
 
        ]
      },
 
      {
        heading: "Advantages of HTML",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "Easy to Learn",
                description: "HTML syntax is beginner-friendly."
              },
 
              {
                title: "Human Readable",
                description: "Developers can easily understand HTML code."
              },
 
              {
                title: "Supported Everywhere",
                description: "Every browser supports HTML."
              },
 
              {
                title: "Platform Independent",
                description: "Works on Windows, Linux, macOS, Android, iOS."
              },
 
              {
                title: "Forms the Foundation of the Web",
                description: "Every webpage begins with HTML."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Real-World Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider an e-commerce website."
          },
 
          {
            type: "paragraph",
            content:
              "Structure:"
          },
 
          {
            type: "tree",
            content: `Amazon
  ├── Header
  ├── Search Bar
  ├── Navigation Menu
  ├── Product Listings
  ├── Shopping Cart
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "Every section begins as HTML. CSS styles it. JavaScript makes it interactive."
          },
 
          {
            type: "paragraph",
            content:
              "Without HTML, none of these sections would exist."
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
                question: "Mistake 1: Thinking HTML Is a Programming Language",
                answer:
                  "The incorrect belief is that HTML is like JavaScript. In reality, HTML structures content while JavaScript creates behavior."
              },
 
              {
                question: "Mistake 2: Ignoring Proper Structure",
                answer:
                  "Writing heading and paragraph tags without a complete HTML document skips the required structure. A proper document always includes the DOCTYPE, html, head, and body elements.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<h1>Title</h1>
<p>Paragraph</p>
 
// Without a complete HTML document`
                  },
 
                  {
                    title: "Good",
                    language: "html",
                    content: `<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Forgetting Closing Tags",
                answer:
                  "Leaving a tag unclosed can break the structure of the page. Every opening tag should have a matching closing tag.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<p>Hello`
                  },
 
                  {
                    title: "Correct",
                    language: "html",
                    content: `<p>Hello</p>`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Using HTML for Styling",
                answer:
                  "The incorrect mindset is that HTML should control colors and layout. The modern approach separates concerns: HTML handles structure, while CSS handles styling."
              },
 
              {
                question: "Mistake 5: Ignoring Semantic Meaning",
                answer:
                  "Many beginners use div for everything instead of choosing elements that describe their meaning. Modern HTML encourages meaningful elements over generic containers.",
 
                examples: [
                  {
                    title: "Overused",
                    language: "html",
                    content: `<div>
<div>
<div>`
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
            type: "paragraph",
            content:
              "Learn HTML Before CSS and JavaScript. Strong HTML fundamentals make advanced web development much easier."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Write Semantic HTML. Prefer meaningful elements."
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
<nav>
<footer>`
          },
 
          {
            type: "paragraph",
            content:
              "Instead of generic containers whenever possible."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Maintain Proper Structure. Always use:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
<body>`
          },
 
          {
            type: "paragraph",
            content:
              "Correctly."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Focus on Accessibility. Good HTML helps:"
          },
 
          {
            type: "list",
            items: [
              "Screen readers",
              "Assistive technologies",
              "Users with disabilities"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Think About Content Meaning. HTML is about describing content, not decorating it."
          }
 
        ]
      },
 
      {
        heading: "Introduction to the Modern Web Stack",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every modern website typically uses:"
          },
 
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "CSS",
              "→",
              "JavaScript"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Responsibilities:"
          },
 
          {
            type: "flow",
            steps: [
              "HTML → Structure",
              "CSS → Presentation",
              "JavaScript → Behavior"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding this separation is one of the most important concepts in web development."
          }
 
        ]
      },
 
      {
        heading: "HTML Introduction Checklist",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before moving forward, ensure you understand:"
          },
 
          {
            type: "list",
            items: [
              "HTML stands for HyperText Markup Language",
              "HTML structures webpage content",
              "HTML is not a programming language",
              "HTML uses tags and elements",
              "Browsers parse HTML into the DOM",
              "HTML forms the foundation of all websites",
              "HTML5 is the modern standard",
              "HTML works together with CSS and JavaScript",
              "Semantic HTML is important"
            ]
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML (HyperText Markup Language) is the standard markup language used to create and structure webpages."
          },
 
          {
            type: "paragraph",
            content:
              "It provides the foundation of every website by defining:"
          },
 
          {
            type: "list",
            items: [
              "Headings",
              "Paragraphs",
              "Images",
              "Links",
              "Forms",
              "Navigation",
              "Layout structure"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Browsers read HTML documents, convert them into the DOM, and render them as webpages."
          },
 
          {
            type: "paragraph",
            content:
              "HTML is not responsible for styling or interactivity. Instead, it works alongside CSS and JavaScript to create modern web experiences."
          },
 
          {
            type: "paragraph",
            content:
              "Without HTML, the World Wide Web as we know it would not exist."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think HTML is just a collection of tags. Professional developers view HTML very differently. Good HTML is about describing the meaning and structure of content. Well-written HTML improves accessibility, SEO, maintainability, browser compatibility, and overall user experience. The strongest frontend developers are often the ones with the strongest HTML fundamentals, because every framework, library, and modern web technology ultimately builds on top of HTML."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : History of HTML
============================= */
    "history-of-html": {
    title: "History of HTML",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "To understand modern web development, it is important to understand the history of HTML. Every webpage you visit today—whether it is a simple blog, an online shopping platform, a social media website, or a complex web application—is built upon HTML."
          },
          {
            type: "paragraph",
            content: "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the World Wide Web. However, HTML did not appear overnight. It evolved through decades of technological advancements, standardization efforts, and the growing needs of the internet."
          },
          {
            type: "paragraph",
            content: "The journey of HTML reflects the evolution of the web itself—from a simple document-sharing system used by researchers to the highly interactive and multimedia-rich internet we use today."
          }
        ]
      },

      {
        heading: "Why HTML Was Created",
        blocks: [
          {
            type: "paragraph",
            content: "Before HTML existed, sharing information across different computer systems was difficult. Researchers and organizations often used different operating systems and document formats, making information exchange inefficient."
          },
          {
            type: "paragraph",
            content: "In the late 1980s, scientists working across different countries needed a simple way to share research documents electronically."
          },
          {
            type: "paragraph",
            content: "The solution came from a British computer scientist named Tim Berners-Lee."
          },
          {
            type: "paragraph",
            content: "He envisioned a system where documents could be connected through hyperlinks and accessed from any computer connected to a network."
          },
          {
            type: "paragraph",
            content: "This idea eventually became:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The World Wide Web (WWW)",
              "Hyperlinks",
              "Web browsers",
              "HTML"
            ]
          }
        ]
      },

      {
        heading: "The Birth of HTML (1989–1991)",
        blocks: [
          {
            type: "paragraph",
            content: "In 1989, Tim Berners-Lee was working at CERN. He proposed a global hypertext system that would allow researchers to access and connect documents easily."
          },
          {
            type: "paragraph",
            content: "In 1990, he created:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The first web server",
              "The first web browser",
              "The first version of HTML"
            ]
          },
          {
            type: "paragraph",
            content: "By 1991, HTML was publicly introduced."
          },
          {
            type: "paragraph",
            content: "The earliest version of HTML contained only a small number of tags, including:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Paragraphs",
              "Lists",
              "Hyperlinks"
            ]
          },
          {
            type: "paragraph",
            content: "The primary purpose was not design or aesthetics. It was simply to organize and share information. A typical webpage during this period consisted mostly of plain text and links."
          }
        ]
      },

      {
        heading: "HTML 1.0 (1991)",
        blocks: [
          {
            type: "paragraph",
            content: "HTML 1.0 was the first official version."
          },
          {
            type: "paragraph",
            content: "Features: Basic text formatting, Headings, Paragraphs, Hyperlinks, Lists."
          },
          {
            type: "paragraph",
            content: "Limitations: No images, No tables, No forms, No multimedia, Very limited formatting."
          },
          {
            type: "paragraph",
            content: "Webpages looked extremely simple compared to modern standards. However, HTML 1.0 proved that the concept of interconnected web documents was practical and revolutionary."
          }
        ]
      },

      {
        heading: "HTML 2.0 (1995)",
        blocks: [
          {
            type: "paragraph",
            content: "As the web grew rapidly, a standardized version became necessary. In 1995, HTML 2.0 was released by the Internet Engineering Task Force (IETF). It became the first formal HTML specification."
          },
          {
            type: "paragraph",
            content: "New Features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Forms",
              "Input fields",
              "Buttons",
              "Text areas",
              "Improved standardization"
            ]
          },
          {
            type: "paragraph",
            content: "Forms were a major breakthrough because websites could now collect information from users. This transformed websites from static information pages into interactive systems."
          },
          {
            type: "paragraph",
            content: "Examples: Login pages, Search boxes, Registration forms. These became possible because of HTML 2.0."
          }
        ]
      },

      {
        heading: "HTML 3.2 (1997)",
        blocks: [
          {
            type: "paragraph",
            content: "The popularity of the internet exploded during the mid-1990s. Web developers wanted more control over webpage appearance. HTML 3.2 introduced several important features."
          },
          {
            type: "paragraph",
            content: "New Features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tables",
              "Images",
              "Applets",
              "Text formatting enhancements"
            ]
          },
          {
            type: "paragraph",
            content: "Tables changed web design significantly. Before CSS became popular, developers often used tables to create page layouts. This version also supported image embedding, making websites visually appealing for the first time."
          }
        ]
      },

      {
        heading: "HTML 4.0 (1997)",
        blocks: [
          {
            type: "paragraph",
            content: "Later in 1997, HTML 4.0 was introduced by the World Wide Web Consortium (W3C). This was one of the most influential versions in HTML history."
          },
          {
            type: "paragraph",
            content: "Major Improvements:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better accessibility support",
              "Internationalization",
              "Scripting support",
              "Style sheet integration",
              "Separation of content and presentation"
            ]
          },
          {
            type: "paragraph",
            content: "The biggest change was the encouragement of using CSS for styling instead of HTML formatting tags. Before HTML 4.0, developers frequently used tags for visual design."
          },
          {
            type: "paragraph",
            content: "HTML 4.0 promoted a cleaner approach:"
          },
          {
            type: "output",
            content: [
              "HTML for structure",
              "CSS for appearance",
              "JavaScript for behavior"
            ]
          },
          {
            type: "paragraph",
            content: "This philosophy still guides modern web development today."
          }
        ]
      },

      {
        heading: "XHTML Era (2000)",
        blocks: [
          {
            type: "paragraph",
            content: "Around 2000, developers wanted stricter coding standards. This led to the creation of XHTML. XHTML combined HTML with XML rules."
          },
          {
            type: "paragraph",
            content: "Requirements:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Every tag had to be properly closed.",
              "Tags had to be lowercase.",
              "Proper nesting was mandatory.",
              "Documents needed stricter syntax."
            ]
          },
          {
            type: "paragraph",
            content: "Example: A forgotten closing tag could cause errors."
          },
          {
            type: "paragraph",
            content: "Advantages: Cleaner code, Better consistency, Easier machine processing."
          },
          {
            type: "paragraph",
            content: "Drawbacks: Too strict for many developers, Small mistakes could break pages."
          },
          {
            type: "paragraph",
            content: "Although XHTML influenced coding standards, it never fully replaced HTML."
          }
        ]
      },

      {
        heading: "HTML5 Revolution (2008–2014)",
        blocks: [
          {
            type: "paragraph",
            content: "As web applications became more advanced, HTML needed major improvements. In 2008, work on HTML5 began. In 2014, HTML5 became an official recommendation. This was the most important update since HTML's creation."
          },
          {
            type: "paragraph",
            content: "Why HTML5 Was Needed"
          },
          {
            type: "paragraph",
            content: "Modern websites required: Audio, Video, Graphics, Mobile support, Better forms, Rich web applications."
          },
          {
            type: "paragraph",
            content: "Before HTML5, developers often relied on external plugins such as Adobe Flash. These plugins caused compatibility, performance, and security problems. HTML5 aimed to solve these issues natively."
          }
        ]
      },

      {
        heading: "Major Features Introduced in HTML5",
        blocks: [
          {
            type: "paragraph",
            content: "Semantic Elements"
          },
          {
            type: "paragraph",
            content: "HTML5 introduced meaningful tags such as:"
          },
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>`
          },
          {
            type: "paragraph",
            content: "These tags made webpages easier to understand for Browsers, Search engines, Developers, and Screen readers."
          },
          {
            type: "paragraph",
            content: "Native Audio Support"
          },
          {
            type: "paragraph",
            content: "Developers could now add sound without third-party plugins. Examples: Music players, Podcasts, Sound effects."
          },
          {
            type: "paragraph",
            content: "Native Video Support"
          },
          {
            type: "paragraph",
            content: "Video playback became a built-in browser feature. This greatly reduced dependency on Flash. Today, almost every streaming platform relies on HTML5 video technology."
          },
          {
            type: "paragraph",
            content: "Canvas Element"
          },
          {
            type: "paragraph",
            content: "The Canvas API enabled Drawing graphics, Animations, Games, and Charts directly inside the browser."
          },
          {
            type: "paragraph",
            content: "Improved Forms"
          },
          {
            type: "paragraph",
            content: "HTML5 introduced advanced input types such as: Email, Number, Date, Range, URL, Color. This improved user experience and built-in validation."
          },
          {
            type: "paragraph",
            content: "Local Storage"
          },
          {
            type: "paragraph",
            content: "Websites could now store data in the browser. This enabled User preferences, Offline applications, and Faster experiences without relying entirely on cookies."
          },
          {
            type: "paragraph",
            content: "Better Mobile Support"
          },
          {
            type: "paragraph",
            content: "HTML5 was designed with smartphones and tablets in mind. As mobile internet usage grew rapidly, HTML5 became essential for responsive web design."
          }
        ]
      },

      {
        heading: "HTML Living Standard",
        blocks: [
          {
            type: "paragraph",
            content: "In the past, HTML versions were released as separate milestones: HTML 1.0, HTML 2.0, HTML 3.2, HTML 4.0, HTML5."
          },
          {
            type: "paragraph",
            content: "Today, HTML follows a different approach. Instead of waiting years for a new version, it evolves continuously under the concept of the: **HTML Living Standard**"
          },
          {
            type: "paragraph",
            content: "Maintained by: WHATWG"
          },
          {
            type: "paragraph",
            content: "This allows HTML to improve continuously without requiring major version jumps."
          }
        ]
      },

      {
        heading: "Evolution Timeline of HTML",
        blocks: [
          {
            type: "table",
            headers: ["Year", "Version", "Major Contribution"],
            rows: [
              ["1989", "Concept Proposed", "World Wide Web idea"],
              ["1991", "HTML 1.0", "Basic webpage structure"],
              ["1995", "HTML 2.0", "Forms introduced"],
              ["1997", "HTML 3.2", "Tables and images"],
              ["1997", "HTML 4.0", "CSS and scripting support"],
              ["2000", "XHTML", "Strict XML-based HTML"],
              ["2014", "HTML5", "Multimedia, semantic tags, APIs"],
              ["Present", "Living Standard", "Continuous improvements"]
            ]
          }
        ]
      },

      {
        heading: "Impact of HTML on the World",
        blocks: [
          {
            type: "paragraph",
            content: "HTML transformed the way humans share information."
          },
          {
            type: "paragraph",
            content: "Without HTML, there would be: No websites, No online learning platforms, No social media, No online shopping, No streaming services, No modern web applications."
          },
          {
            type: "paragraph",
            content: "It became the foundation of digital communication across the globe. Today, billions of webpages rely on HTML, making it one of the most influential technologies ever created."
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
              "HTML was invented by Tim Berners-Lee at CERN.",
              "HTML was created to share and connect documents through hyperlinks.",
              "HTML 1.0 introduced basic webpage structure.",
              "HTML 2.0 introduced forms and user interaction.",
              "HTML 3.2 added images and tables.",
              "HTML 4.0 promoted separation of content and presentation through CSS.",
              "XHTML introduced stricter coding standards.",
              "HTML5 revolutionized web development with multimedia, semantic elements, forms, storage, and mobile support.",
              "Modern HTML follows the Living Standard model maintained by WHATWG.",
              "HTML remains the fundamental building block of every website on the internet."
            ]
          },
          {
            type: "paragraph",
            content: "Understanding the history of HTML helps developers appreciate why modern web technologies work the way they do and provides valuable insight into the evolution of the web itself."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : HTML Editors
============================= */
    "html-editors": {
    title: "HTML Editors",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Writing HTML code requires a tool where developers can create, edit, save, and manage HTML files. Such tools are known as HTML Editors."
          },
          {
            type: "paragraph",
            content: "An HTML editor is software or an online application that helps developers write HTML code efficiently. While HTML can technically be written in any plain text editor, specialized HTML editors provide features that make development faster, easier, and less error-prone."
          },
          {
            type: "paragraph",
            content: "Every website starts with code written in an editor. Whether you are creating a simple webpage or a large-scale web application, choosing the right HTML editor can significantly improve your productivity."
          }
        ]
      },

      {
        heading: "What is an HTML Editor?",
        blocks: [
          {
            type: "paragraph",
            content: "An HTML editor is a program used to create and modify HTML documents."
          },
          {
            type: "paragraph",
            content: "HTML files are simply text files containing HTML markup. Therefore, any text editor can be used to write HTML."
          },
          {
            type: "paragraph",
            content: "For example, you can write:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`
          },
          {
            type: "paragraph",
            content: "in: Notepad, VS Code, Sublime Text, Atom, Vim, Online editors, and save it as: `index.html`."
          },
          {
            type: "paragraph",
            content: "The browser will interpret the file as a webpage."
          }
        ]
      },

      {
        heading: "Why Do We Need HTML Editors?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine writing thousands of lines of HTML manually without assistance."
          },
          {
            type: "paragraph",
            content: "Problems would include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Typing mistakes",
              "Missing closing tags",
              "Incorrect nesting",
              "Slow development",
              "Difficult debugging"
            ]
          },
          {
            type: "paragraph",
            content: "Modern HTML editors solve these issues by providing tools that help developers write better code."
          },
          {
            type: "paragraph",
            content: "Benefits of HTML Editors"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster coding",
              "Error detection",
              "Syntax highlighting",
              "Code suggestions",
              "Auto-completion",
              "Project management",
              "Live preview",
              "Debugging support"
            ]
          },
          {
            type: "paragraph",
            content: "These features save countless hours during development."
          }
        ]
      },

      {
        heading: "Types of HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "HTML editors can be broadly divided into two categories."
          },
          {
            type: "paragraph",
            content: "1. Text-Based HTML Editors"
          },
          {
            type: "paragraph",
            content: "These editors require developers to write code manually."
          },
          {
            type: "paragraph",
            content: "Examples: Visual Studio Code, Sublime Text, Notepad++, Vim, Emacs."
          },
          {
            type: "paragraph",
            content: "Advantages: Full control over code, Faster for experienced developers, Lightweight, Flexible."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Requires knowledge of HTML, Less beginner-friendly."
          },
          {
            type: "paragraph",
            content: "Professional developers mostly prefer text-based editors."
          },
          {
            type: "paragraph",
            content: "2. WYSIWYG Editors"
          },
          {
            type: "paragraph",
            content: "WYSIWYG stands for: What You See Is What You Get."
          },
          {
            type: "paragraph",
            content: "These editors allow users to design webpages visually without writing much code."
          },
          {
            type: "paragraph",
            content: "Examples: Froala, CKEditor, Adobe Dreamweaver."
          },
          {
            type: "paragraph",
            content: "Advantages: Beginner-friendly, Visual editing, Faster content creation."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Less control, Generated code may be inefficient, Not ideal for large-scale projects."
          }
        ]
      },

      {
        heading: "Basic HTML Editing Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Regardless of the editor being used, the workflow remains almost identical."
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Create a new file.",
              "Write HTML code.",
              "Save the file with `.html` extension (Example: `index.html`).",
              "Open the file in a web browser.",
              "Refresh the browser whenever changes are made."
            ]
          },
          {
            type: "paragraph",
            content: "This cycle is often called: Edit → Save → Run → Test."
          }
        ]
      },

      {
        heading: "Common Features of Modern HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "Modern editors provide numerous productivity features."
          },
          {
            type: "paragraph",
            content: "Syntax Highlighting"
          },
          {
            type: "paragraph",
            content: "Different parts of code appear in different colors."
          },
          {
            type: "paragraph",
            content: "Example: Tags in one color, Attributes in another, Strings in another."
          },
          {
            type: "paragraph",
            content: "Benefits: Easier reading, Better understanding, Faster debugging. Without syntax highlighting, large files become difficult to read."
          },
          {
            type: "paragraph",
            content: "Auto Completion (IntelliSense)"
          },
          {
            type: "paragraph",
            content: "When typing: `<di`, the editor may automatically suggest: `<div>`."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster coding, Fewer typing errors, Better productivity."
          },
          {
            type: "paragraph",
            content: "Auto Closing Tags"
          },
          {
            type: "paragraph",
            content: "Typing: `<p>` may automatically generate: `<p></p>`."
          },
          {
            type: "paragraph",
            content: "Benefits: Prevents missing tags, Improves code quality."
          },
          {
            type: "paragraph",
            content: "Error Detection"
          },
          {
            type: "paragraph",
            content: "Modern editors highlight: Missing tags, Invalid attributes, Incorrect syntax before the code reaches the browser."
          },
          {
            type: "paragraph",
            content: "This helps developers fix mistakes early."
          },
          {
            type: "paragraph",
            content: "Code Formatting"
          },
          {
            type: "paragraph",
            content: "Editors can automatically organize code."
          },
          {
            type: "paragraph",
            content: "Example: Instead of:"
          },
          {
            type: "code",
            language: "html",
            content: `<html><body><h1>Hello</h1></body></html>`
          },
          {
            type: "paragraph",
            content: "they can format it as:"
          },
          {
            type: "code",
            language: "html",
            content: `<html>
    <body>
        <h1>Hello</h1>
    </body>
</html>`
          },
          {
            type: "paragraph",
            content: "making it easier to read."
          },
          {
            type: "paragraph",
            content: "Live Preview"
          },
          {
            type: "paragraph",
            content: "Some editors instantly display webpage changes without requiring manual refreshes."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster testing, Better user experience, Immediate feedback."
          },
          {
            type: "paragraph",
            content: "Extensions and Plugins"
          },
          {
            type: "paragraph",
            content: "Many editors support additional tools."
          },
          {
            type: "paragraph",
            content: "Examples: HTML snippets, CSS support, JavaScript support, Git integration, AI coding assistants."
          },
          {
            type: "paragraph",
            content: "Extensions significantly expand editor capabilities."
          }
        ]
      },

      {
        heading: "Popular HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "Notepad"
          },
          {
            type: "paragraph",
            content: "Notepad comes pre-installed with Windows."
          },
          {
            type: "paragraph",
            content: "Advantages: Extremely lightweight, No installation required, Simple interface."
          },
          {
            type: "paragraph",
            content: "Disadvantages: No syntax highlighting, No auto-completion, Limited features."
          },
          {
            type: "paragraph",
            content: "Good for learning basic HTML. Not ideal for professional development."
          },
          {
            type: "paragraph",
            content: "Notepad++"
          },
          {
            type: "paragraph",
            content: "Notepad++ is an advanced text editor."
          },
          {
            type: "paragraph",
            content: "Features: Syntax highlighting, Code folding, Auto-completion, Plugin support."
          },
          {
            type: "paragraph",
            content: "Advantages: Lightweight, Fast, Beginner-friendly. Many developers use it for small and medium projects."
          },
          {
            type: "paragraph",
            content: "Visual Studio Code (VS Code)"
          },
          {
            type: "paragraph",
            content: "Today, VS Code is the most popular HTML editor among developers."
          },
          {
            type: "paragraph",
            content: "Features: Syntax highlighting, IntelliSense, Git integration, Extensions marketplace, Live Server support, Debugging tools, AI integration."
          },
          {
            type: "paragraph",
            content: "Advantages: Free, Powerful, Cross-platform, Massive community support."
          },
          {
            type: "paragraph",
            content: "For most learners and professionals, VS Code is the recommended choice."
          },
          {
            type: "paragraph",
            content: "Sublime Text"
          },
          {
            type: "paragraph",
            content: "Sublime Text is known for its speed."
          },
          {
            type: "paragraph",
            content: "Features: Lightweight, Fast startup, Multi-cursor editing, Command palette."
          },
          {
            type: "paragraph",
            content: "Advantages: Very responsive, Clean interface. Popular among developers who prefer minimalism."
          },
          {
            type: "paragraph",
            content: "Vim"
          },
          {
            type: "paragraph",
            content: "Vim is a terminal-based editor."
          },
          {
            type: "paragraph",
            content: "Features: Keyboard-driven workflow, Highly customizable, Extremely fast."
          },
          {
            type: "paragraph",
            content: "Advantages: Powerful for advanced users, Available on most systems."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Steep learning curve. Often used by experienced developers and system administrators."
          },
          {
            type: "paragraph",
            content: "Emacs"
          },
          {
            type: "paragraph",
            content: "Emacs is another highly customizable editor."
          },
          {
            type: "paragraph",
            content: "Features: Extensive extensions, Custom workflows, Integrated tools."
          },
          {
            type: "paragraph",
            content: "Advantages: Powerful ecosystem."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Complex for beginners."
          },
          {
            type: "paragraph",
            content: "Adobe Dreamweaver"
          },
          {
            type: "paragraph",
            content: "Dreamweaver combines visual editing with coding."
          },
          {
            type: "paragraph",
            content: "Features: WYSIWYG design, Code editor, Responsive design tools."
          },
          {
            type: "paragraph",
            content: "Advantages: Visual design support."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Paid software, Less popular than modern editors."
          }
        ]
      },

      {
        heading: "Online HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "Not all HTML development requires local software. Many platforms allow coding directly in the browser."
          },
          {
            type: "paragraph",
            content: "OneCompiler"
          },
          {
            type: "paragraph",
            content: "Features: Browser-based coding, Instant execution, No installation required. Useful for quick experiments and learning."
          },
          {
            type: "paragraph",
            content: "CodePen"
          },
          {
            type: "paragraph",
            content: "A popular online frontend playground."
          },
          {
            type: "paragraph",
            content: "Features: HTML, CSS, JavaScript running together instantly. Great for sharing frontend projects."
          },
          {
            type: "paragraph",
            content: "JSFiddle"
          },
          {
            type: "paragraph",
            content: "Useful for testing frontend snippets quickly. Widely used in forums and discussions."
          },
          {
            type: "paragraph",
            content: "StackBlitz"
          },
          {
            type: "paragraph",
            content: "Provides a near real-world development environment directly in the browser. Popular for React, Angular, and modern frontend projects."
          }
        ]
      },

      {
        heading: "Rich Text HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "Some editors focus on content editing rather than coding."
          },
          {
            type: "paragraph",
            content: "CKEditor"
          },
          {
            type: "paragraph",
            content: "Allows users to: Format text, Insert images, Create tables, Generate HTML automatically."
          },
          {
            type: "paragraph",
            content: "Commonly used in: CMS platforms, Admin dashboards, Blog editors."
          },
          {
            type: "paragraph",
            content: "Froala"
          },
          {
            type: "paragraph",
            content: "A premium rich-text editor."
          },
          {
            type: "paragraph",
            content: "Features: Modern UI, Fast performance, Rich formatting tools."
          },
          {
            type: "paragraph",
            content: "Used in many enterprise applications."
          }
        ]
      },

      {
        heading: "Choosing the Right HTML Editor",
        blocks: [
          {
            type: "paragraph",
            content: "Different users need different editors."
          },
          {
            type: "paragraph",
            content: "For Beginners"
          },
          {
            type: "paragraph",
            content: "Recommended: VS Code, Notepad++, OneCompiler."
          },
          {
            type: "paragraph",
            content: "Reason: Easy to learn, Good documentation, Helpful features."
          },
          {
            type: "paragraph",
            content: "For Students"
          },
          {
            type: "paragraph",
            content: "Recommended: VS Code, CodePen, OneCompiler."
          },
          {
            type: "paragraph",
            content: "Reason: Free, Simple setup, Good learning environment."
          },
          {
            type: "paragraph",
            content: "For Professional Developers"
          },
          {
            type: "paragraph",
            content: "Recommended: VS Code, Sublime Text, Vim, Emacs."
          },
          {
            type: "paragraph",
            content: "Reason: Advanced workflows, Better productivity, Extensive customization."
          }
        ]
      },

      {
        heading: "HTML Editors vs IDEs",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse editors and IDEs."
          },
          {
            type: "paragraph",
            content: "HTML Editor: Focuses mainly on code editing. Examples: VS Code, Sublime Text, Notepad++."
          },
          {
            type: "paragraph",
            content: "IDE (Integrated Development Environment): Provides Editing, Debugging, Testing, Version control, Project management. Examples: WebStorm, Visual Studio, Eclipse."
          },
          {
            type: "paragraph",
            content: "An IDE is essentially a complete development ecosystem."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Saving Without .html Extension"
          },
          {
            type: "paragraph",
            content: "Wrong: `index`. Correct: `index.html`."
          },
          {
            type: "paragraph",
            content: "Using Word Processors"
          },
          {
            type: "paragraph",
            content: "Programs like Microsoft Word should not be used for HTML coding because they add formatting information that browsers cannot interpret correctly."
          },
          {
            type: "paragraph",
            content: "Forgetting to Save"
          },
          {
            type: "paragraph",
            content: "Many beginners modify code but forget to save the file before refreshing the browser."
          },
          {
            type: "paragraph",
            content: "Using Outdated Editors"
          },
          {
            type: "paragraph",
            content: "Modern editors provide tools that dramatically improve productivity. Learning with a modern editor is usually better."
          }
        ]
      },

      {
        heading: "The Future of HTML Editors",
        blocks: [
          {
            type: "paragraph",
            content: "HTML editors are evolving rapidly. Modern editors increasingly include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "AI-assisted coding",
              "Automatic bug detection",
              "Code generation",
              "Smart refactoring",
              "Cloud-based development",
              "Real-time collaboration"
            ]
          },
          {
            type: "paragraph",
            content: "The line between traditional editors and intelligent development environments continues to blur. Future editors will not only help developers write code but also assist in designing, debugging, optimizing, and deploying applications."
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
              "An HTML editor is software used to create and edit HTML documents.",
              "HTML can be written in any text editor, but specialized editors improve productivity.",
              "Text-based editors provide full control over code.",
              "WYSIWYG editors allow visual webpage creation.",
              "Features like syntax highlighting, auto-completion, and live preview make development easier.",
              "VS Code is currently the most popular HTML editor among developers.",
              "Online editors such as OneCompiler and CodePen are excellent for learning and experimentation.",
              "Rich text editors like CKEditor and Froala are commonly used in content management systems.",
              "Choosing the right editor depends on your experience level and project requirements.",
              "Modern HTML editors are becoming increasingly intelligent with AI-powered development tools.",
              "Understanding HTML editors is important because they are the primary tools used to transform HTML knowledge into real-world websites and web applications."
            ]
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : HTML Document Structure
============================= */
    "html-document-structure": {
    title: "HTML Document Structure",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Every HTML webpage follows a specific structure. Just as a building requires a proper blueprint before construction begins, a webpage requires a well-defined document structure before browsers can correctly interpret and display its content."
          },
          {
            type: "paragraph",
            content: "The HTML Document Structure is the standard framework that organizes all elements of a webpage. It tells the browser:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What type of document it is",
              "Where metadata is stored",
              "Where visible content begins",
              "How different sections of the webpage are organized"
            ]
          },
          {
            type: "paragraph",
            content: "Without a proper document structure, browsers may display pages incorrectly, search engines may struggle to understand content, and developers may find maintenance difficult."
          },
          {
            type: "paragraph",
            content: "Understanding document structure is one of the most important foundational skills in web development because every HTML page—from the smallest personal webpage to the largest web application—uses this structure."
          }
        ]
      },

      {
        heading: "What is an HTML Document?",
        blocks: [
          {
            type: "paragraph",
            content: "An HTML document is a text file containing HTML markup that a web browser reads and converts into a webpage."
          },
          {
            type: "paragraph",
            content: "Typically, HTML files use the extension: `.html` or `.htm`"
          },
          {
            type: "paragraph",
            content: "Examples: `index.html`, `about.html`, `contact.html`"
          },
          {
            type: "paragraph",
            content: "When a browser opens an HTML document, it parses the code and builds a visual webpage that users can interact with."
          }
        ]
      },

      {
        heading: "The Standard HTML Document Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Every modern HTML page generally follows this structure:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    Content goes here
</body>
</html>`
          },
          {
            type: "paragraph",
            content: "Although this structure appears simple, every part has a specific purpose."
          },
          {
            type: "paragraph",
            content: "Let's examine each component in detail."
          }
        ]
      },

      {
        heading: "Understanding the Structure Like a Building",
        blocks: [
          {
            type: "paragraph",
            content: "A useful analogy is to compare an HTML document with a house."
          },
          {
            type: "table",
            headers: ["House Component", "HTML Equivalent"],
            rows: [
              ["Foundation", "DOCTYPE"],
              ["Building", "html element"],
              ["Blueprint & Information", "head section"],
              ["Rooms & Furniture", "body section"]
            ]
          },
          {
            type: "paragraph",
            content: "Just as a house cannot function properly without its foundation and rooms, a webpage cannot function properly without its document structure."
          }
        ]
      },

      {
        heading: "The DOCTYPE Declaration",
        blocks: [
          {
            type: "paragraph",
            content: "The first line of every modern HTML document is:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>`
          },
          {
            type: "paragraph",
            content: "This declaration tells the browser: \"This document uses HTML5.\""
          },
          {
            type: "paragraph",
            content: "Why is it Important?"
          },
          {
            type: "paragraph",
            content: "Browsers support many old versions of HTML. Without the DOCTYPE declaration, browsers may switch into **Quirks Mode** where old rendering rules are used."
          },
          {
            type: "paragraph",
            content: "This can cause: Layout issues, Styling inconsistencies, Browser compatibility problems."
          },
          {
            type: "paragraph",
            content: "Adding the declaration ensures browsers use **Standards Mode** which follows modern web standards."
          },
          {
            type: "paragraph",
            content: "Important Facts About DOCTYPE"
          },
          {
            type: "paragraph",
            content: "It is Not a Tag: Many beginners think DOCTYPE is an HTML tag. It is actually a declaration. Wrong assumption: DOCTYPE is an HTML element. Correct: DOCTYPE is a browser instruction."
          },
          {
            type: "paragraph",
            content: "It Must Be the First Line:"
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>`
          },
          {
            type: "paragraph",
            content: "The DOCTYPE should always appear at the very beginning of the document."
          }
        ]
      },

      {
        heading: "The HTML Element",
        blocks: [
          {
            type: "paragraph",
            content: "The `<html>` element is the root element of every HTML document. Everything visible and invisible on a webpage exists inside this element."
          },
          {
            type: "code",
            language: "html",
            content: `<html>
    ...
</html>`
          },
          {
            type: "paragraph",
            content: "Think of it as the container that holds the entire webpage."
          },
          {
            type: "paragraph",
            content: "Why Is It Needed?"
          },
          {
            type: "paragraph",
            content: "The browser needs to know where the HTML document begins and ends. The `<html>` tag provides these boundaries."
          },
          {
            type: "paragraph",
            content: "Language Declaration"
          },
          {
            type: "paragraph",
            content: "Modern HTML often includes: `<html lang=\"en\">`"
          },
          {
            type: "paragraph",
            content: "The `lang` attribute tells browsers and assistive technologies which language the page uses."
          },
          {
            type: "paragraph",
            content: "Benefits: Better accessibility, Improved SEO, Better screen reader support, Improved browser behavior."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "<html lang=\"en\"> → English",
              "<html lang=\"fr\"> → French",
              "<html lang=\"es\"> → Spanish"
            ]
          }
        ]
      },

      {
        heading: "The Head Section",
        blocks: [
          {
            type: "paragraph",
            content: "Inside the `<html>` element comes the `<head>` section."
          },
          {
            type: "code",
            language: "html",
            content: `<head>
    <title>My Website</title>
</head>`
          },
          {
            type: "paragraph",
            content: "The head contains information about the webpage, not content displayed directly to users."
          },
          {
            type: "paragraph",
            content: "Purpose of the Head Section"
          },
          {
            type: "paragraph",
            content: "The `<head>` section stores metadata. Metadata means: Data about data."
          },
          {
            type: "paragraph",
            content: "The browser uses this information to understand and configure the webpage."
          }
        ]
      },

      {
        heading: "Common Elements Inside the Head",
        blocks: [
          {
            type: "paragraph",
            content: "The Title Element"
          },
          {
            type: "code",
            language: "html",
            content: `<title>My First Website</title>`
          },
          {
            type: "paragraph",
            content: "The title appears in: Browser tabs, Search engine results, Bookmarks, Browser history."
          },
          {
            type: "paragraph",
            content: "A meaningful title improves usability and SEO."
          },
          {
            type: "paragraph",
            content: "Meta Tags"
          },
          {
            type: "paragraph",
            content: "Meta tags provide information about the webpage."
          },
          {
            type: "code",
            language: "html",
            content: `<meta charset="UTF-8">`
          },
          {
            type: "paragraph",
            content: "This specifies the character encoding. Benefits: Supports special symbols, Supports multiple languages, Prevents text corruption."
          },
          {
            type: "paragraph",
            content: "Another common meta tag:"
          },
          {
            type: "code",
            language: "html",
            content: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
          },
          {
            type: "paragraph",
            content: "This helps webpages display correctly on: Phones, Tablets, Laptops, Desktop screens. It is essential for responsive design."
          },
          {
            type: "paragraph",
            content: "External CSS Links"
          },
          {
            type: "paragraph",
            content: "Stylesheets are usually connected inside the head:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet" href="styles.css">`
          },
          {
            type: "paragraph",
            content: "This allows CSS to style the webpage."
          },
          {
            type: "paragraph",
            content: "External Scripts"
          },
          {
            type: "paragraph",
            content: "JavaScript files may also be linked:"
          },
          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },
          {
            type: "paragraph",
            content: "Although many developers place scripts near the end of the body for performance reasons."
          }
        ]
      },

      {
        heading: "The Body Section",
        blocks: [
          {
            type: "paragraph",
            content: "The `<body>` element contains everything users actually see on the webpage."
          },
          {
            type: "code",
            language: "html",
            content: `<body>
    <h1>Welcome</h1>
    <p>This is my website.</p>
</body>`
          },
          {
            type: "paragraph",
            content: "Everything visible belongs inside the body."
          },
          {
            type: "paragraph",
            content: "Examples of Body Content"
          },
          {
            type: "paragraph",
            content: "The body can contain: Headings, Paragraphs, Images, Links, Videos, Forms, Tables, Buttons, Lists, Navigation menus."
          },
          {
            type: "paragraph",
            content: "If users can see it, it generally belongs in the body."
          }
        ]
      },

      {
        heading: "Browser Rendering Process",
        blocks: [
          {
            type: "paragraph",
            content: "When a browser opens an HTML document:"
          },
          {
            type: "flow",
            steps: [
              "Reads DOCTYPE", "→",
              "Processes HTML element", "→",
              "Reads metadata from head", "→",
              "Downloads linked CSS and JS", "→",
              "Renders body content", "→",
              "Displays webpage"
            ]
          },
          {
            type: "paragraph",
            content: "This process happens extremely quickly, often within milliseconds."
          }
        ]
      },

      {
        heading: "Visual Representation of Document Structure",
        blocks: [
          {
            type: "tree",
            content: `HTML Document
│
├── <!DOCTYPE html>
│
└── <html>
     │
     ├── <head>
     │     ├── title
     │     ├── meta
     │     ├── link
     │     └── script
     │
     └── <body>
           ├── headings
           ├── paragraphs
           ├── images
           ├── forms
           └── other content`
          },
          {
            type: "paragraph",
            content: "This hierarchy helps browsers understand relationships between elements."
          }
        ]
      },

      {
        heading: "Nested Structure",
        blocks: [
          {
            type: "paragraph",
            content: "HTML elements are nested inside one another."
          },
          {
            type: "code",
            language: "html",
            content: `<html>
    <body>
        <div>
            <p>Hello World</p>
        </div>
    </body>
</html>`
          },
          {
            type: "paragraph",
            content: "The hierarchy becomes:"
          },
          {
            type: "tree",
            content: `html
└── body
     └── div
          └── p`
          },
          {
            type: "paragraph",
            content: "This nesting creates the Document Object Model (DOM)."
          }
        ]
      },

      {
        heading: "Relationship with the DOM",
        blocks: [
          {
            type: "paragraph",
            content: "When the browser reads HTML, it creates a structure called the: **Document Object Model (DOM)**."
          },
          {
            type: "paragraph",
            content: "The DOM represents the webpage as a tree."
          },
          {
            type: "tree",
            content: `html
├── head
│    └── title
└── body
     ├── h1
     └── p`
          },
          {
            type: "paragraph",
            content: "JavaScript interacts with webpages through this DOM tree. Understanding document structure makes DOM manipulation much easier later."
          }
        ]
      },

      {
        heading: "HTML5 Semantic Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Modern HTML5 introduced semantic elements that improve document organization."
          },
          {
            type: "paragraph",
            content: "Common semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`."
          },
          {
            type: "tree",
            content: `Body
│
├── Header
├── Navigation
├── Main Content
│    ├── Section
│    └── Article
├── Sidebar
└── Footer`
          },
          {
            type: "paragraph",
            content: "Benefits: Better readability, Better SEO, Better accessibility, Easier maintenance."
          }
        ]
      },

      {
        heading: "Complete Modern HTML Document Structure",
        blocks: [
          {
            type: "paragraph",
            content: "A modern webpage often looks like this:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>

    <header>
        Website Header
    </header>

    <nav>
        Navigation Menu
    </nav>

    <main>
        Main Content
    </main>

    <footer>
        Footer Content
    </footer>

</body>
</html>`
          },
          {
            type: "paragraph",
            content: "This structure follows modern web development standards."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Forgetting the DOCTYPE: Without it, browsers may enter Quirks Mode."
          },
          {
            type: "paragraph",
            content: "Putting Visible Content Inside Head:"
          },
          {
            type: "paragraph",
            content: "Wrong:"
          },
          {
            type: "code",
            language: "html",
            content: `<head>
    <h1>Hello</h1>
</head>`
          },
          {
            type: "paragraph",
            content: "Visible content belongs in the body."
          },
          {
            type: "paragraph",
            content: "Forgetting Closing Tags:"
          },
          {
            type: "paragraph",
            content: "Wrong:"
          },
          {
            type: "code",
            language: "html",
            content: `<body>
    <p>Hello
</body>`
          },
          {
            type: "paragraph",
            content: "Proper nesting is important."
          },
          {
            type: "paragraph",
            content: "Missing Language Attribute:"
          },
          {
            type: "paragraph",
            content: "Wrong: `<html>`. Better: `<html lang=\"en\">`. This improves accessibility and SEO."
          },
          {
            type: "paragraph",
            content: "Placing Metadata Inside Body:"
          },
          {
            type: "paragraph",
            content: "Wrong:"
          },
          {
            type: "code",
            language: "html",
            content: `<body>
    <meta charset="UTF-8">
</body>`
          },
          {
            type: "paragraph",
            content: "Metadata belongs inside the head section."
          }
        ]
      },

      {
        heading: "Why Document Structure Matters",
        blocks: [
          {
            type: "paragraph",
            content: "A proper document structure provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better Browser Compatibility: Browsers can render pages consistently.",
              "Better Accessibility: Screen readers understand content correctly.",
              "Better SEO: Search engines can interpret content more effectively.",
              "Easier Maintenance: Developers can navigate code efficiently.",
              "Improved Team Collaboration: Consistent structure makes projects easier to manage."
            ]
          }
        ]
      },

      {
        heading: "Real-World Importance",
        blocks: [
          {
            type: "paragraph",
            content: "Every major website follows a structured HTML document. Examples include: Search engines, E-commerce platforms, Social media websites, News portals, Educational websites."
          },
          {
            type: "paragraph",
            content: "Regardless of complexity, every webpage starts with the same fundamental document structure."
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
              "An HTML document is a text file containing HTML markup.",
              "Every HTML document begins with `<!DOCTYPE html>`.",
              "The `<html>` element is the root container of the webpage.",
              "The `<head>` section stores metadata and configuration information.",
              "The `<body>` section contains all visible webpage content.",
              "Modern webpages often include semantic HTML5 elements such as `<header>`, `<main>`, and `<footer>`.",
              "HTML elements are organized in a hierarchical nested structure.",
              "Browsers convert HTML documents into a DOM tree for rendering and interaction.",
              "Proper document structure improves accessibility, SEO, maintainability, and browser compatibility.",
              "Understanding HTML document structure is essential because every webpage on the internet is built upon this foundation.",
              "Mastering HTML document structure is the first major step toward creating professional, standards-compliant, and maintainable websites."
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common misunderstanding among beginners is thinking that visual styling defines the page structure. In reality, the invisible HTML document structure is the most critical part of web development. Even if an application uses complex tools like React, Vue, or Angular, the final output must always adhere to this fundamental HTML document structure. A clean blueprint leads to a stable application."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Create Your First HTML Page
============================= */
    "first-html-page": {
    title: "Create Your First HTML Page",
    readingTime: "15 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Every website on the internet begins with an HTML page. Whether it is a simple personal blog, an online portfolio, a social media platform, or a large e-commerce website, HTML serves as the foundation that structures and organizes the content users see in their browsers."
          },
          {
            type: "paragraph",
            content: "Creating your first HTML page is one of the most exciting milestones in web development. With just a few lines of code, you can create a webpage that displays text, headings, images, links, and much more."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you will learn how to create your first HTML page from scratch, understand every line of code involved, view the page in a browser, and develop the mindset of a professional web developer."
          }
        ]
      },

      {
        heading: "What You Need Before Starting",
        blocks: [
          {
            type: "paragraph",
            content: "The good news is that HTML requires very little setup."
          },
          {
            type: "paragraph",
            content: "You only need:"
          },
          {
            type: "paragraph",
            content: "1. A Text Editor"
          },
          {
            type: "paragraph",
            content: "A text editor is used to write HTML code. Popular choices include: Visual Studio Code (VS Code), Sublime Text, Notepad++, Brackets, Vim, Atom (legacy), Windows Notepad."
          },
          {
            type: "paragraph",
            content: "VS Code is the most popular choice among modern developers because it provides: Syntax highlighting, Auto-completion, Extensions, Error detection, Integrated terminal."
          },
          {
            type: "paragraph",
            content: "2. A Web Browser"
          },
          {
            type: "paragraph",
            content: "A browser interprets HTML and displays the webpage. Common browsers include: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera."
          }
        ]
      },

      {
        heading: "Understanding How a Webpage Works",
        blocks: [
          {
            type: "paragraph",
            content: "Before writing code, it is important to understand what happens behind the scenes."
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "You write HTML code inside a file.",
              "You save the file with the `.html` extension. Example: `index.html`",
              "The browser reads the file.",
              "The browser converts the HTML into a visual webpage."
            ]
          },
          {
            type: "paragraph",
            content: "In simple words:"
          },
          {
            type: "flow",
            steps: [
              "HTML Code", "→",
              "Browser Reads It", "→",
              "Web Page Appears"
            ]
          },
          {
            type: "paragraph",
            content: "This process happens instantly whenever you open an HTML file."
          }
        ]
      },

      {
        heading: "Creating Your First HTML File",
        blocks: [
          {
            type: "paragraph",
            content: "Step 1: Create a Folder"
          },
          {
            type: "paragraph",
            content: "Create a new folder anywhere on your computer. Example: `My First Website`. Keeping project files inside dedicated folders is a good development practice."
          },
          {
            type: "paragraph",
            content: "Step 2: Create an HTML File"
          },
          {
            type: "paragraph",
            content: "Inside the folder: Create a new file named `index.html`."
          },
          {
            type: "paragraph",
            content: "The name `index.html` is important because web servers automatically look for this file as the homepage of a website."
          },
          {
            type: "paragraph",
            content: "Step 3: Open the File in Your Editor"
          },
          {
            type: "paragraph",
            content: "Open the file using your preferred editor. Initially it will be empty."
          }
        ]
      },

      {
        heading: "Writing Your First HTML Page",
        blocks: [
          {
            type: "paragraph",
            content: "Type the following code:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>

    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>

</body>
</html>`
          },
          {
            type: "paragraph",
            content: "Save the file."
          },
          {
            type: "paragraph",
            content: "Congratulations! You have just created your first webpage."
          }
        ]
      },

      {
        heading: "Understanding Every Line",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often copy code without understanding it. Professional developers understand the purpose of every line. Let's break it down."
          },
          {
            type: "paragraph",
            content: "<!DOCTYPE html>"
          },
          {
            type: "paragraph",
            content: "This declaration tells the browser: \"This document uses HTML5.\""
          },
          {
            type: "paragraph",
            content: "Without it, browsers may switch into compatibility mode and display pages inconsistently. It should always appear at the top of modern HTML documents."
          },
          {
            type: "paragraph",
            content: "<html>"
          },
          {
            type: "paragraph",
            content: "This is the root element of the page. Everything inside the webpage must be placed between `<html> ... </html>`. Think of it as the container holding the entire website."
          },
          {
            type: "paragraph",
            content: "<head>"
          },
          {
            type: "paragraph",
            content: "The `<head>` contains information about the webpage. It is not displayed directly on the screen."
          },
          {
            type: "paragraph",
            content: "Examples include: Page title, Character encoding, CSS files, Meta tags, SEO information."
          },
          {
            type: "paragraph",
            content: "<title>"
          },
          {
            type: "paragraph",
            content: "`<title>My First Web Page</title>`"
          },
          {
            type: "paragraph",
            content: "This defines the page title. The title appears in the Browser tab, Bookmarks, and Search engine results."
          },
          {
            type: "paragraph",
            content: "Example: `My First Web Page` shown on the browser tab."
          },
          {
            type: "paragraph",
            content: "<body>"
          },
          {
            type: "paragraph",
            content: "Everything visible to users goes inside the body."
          },
          {
            type: "paragraph",
            content: "Examples: Headings, Text, Images, Videos, Tables, Forms, Buttons. The body is the actual content area of the webpage."
          },
          {
            type: "paragraph",
            content: "<h1>"
          },
          {
            type: "paragraph",
            content: "`<h1>Hello World!</h1>` Creates the largest heading."
          },
          {
            type: "paragraph",
            content: "HTML provides six heading levels: `<h1>Largest</h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, `<h6>Smallest</h6>`."
          },
          {
            type: "paragraph",
            content: "Use headings to organize content logically."
          },
          {
            type: "paragraph",
            content: "<p>"
          },
          {
            type: "paragraph",
            content: "`<p>This is my first HTML page.</p>` Creates a paragraph."
          },
          {
            type: "paragraph",
            content: "Paragraphs are used for regular text content."
          }
        ]
      },

      {
        heading: "Viewing Your Webpage",
        blocks: [
          {
            type: "paragraph",
            content: "After saving the file:"
          },
          {
            type: "paragraph",
            content: "Method 1: Double-click `index.html`. The browser opens automatically."
          },
          {
            type: "paragraph",
            content: "Method 2: Right-click the file. Choose `Open With → Chrome` or `Open With → Firefox`."
          },
          {
            type: "paragraph",
            content: "Method 3 (Professional Method): If using VS Code: Install the Live Server extension. Then click `Go Live`."
          },
          {
            type: "paragraph",
            content: "Benefits: Automatic refresh, Faster development, Professional workflow."
          }
        ]
      },

      {
        heading: "Making Your First Modification",
        blocks: [
          {
            type: "paragraph",
            content: "Change: `<h1>Hello World!</h1>` to `<h1>Welcome to My Website</h1>`."
          },
          {
            type: "paragraph",
            content: "Save the file. Refresh the browser."
          },
          {
            type: "paragraph",
            content: "You will immediately see: Welcome to My Website."
          },
          {
            type: "paragraph",
            content: "This introduces one of the most important concepts in web development:"
          },
          {
            type: "flow",
            steps: [
              "Code", "→",
              "Save", "→",
              "Refresh", "→",
              "View Result"
            ]
          },
          {
            type: "paragraph",
            content: "You will repeat this cycle thousands of times as a developer."
          }
        ]
      },

      {
        heading: "Building a Slightly Better First Page",
        blocks: [
          {
            type: "paragraph",
            content: "Let's improve the webpage."
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>

    <h1>Crescent Heart</h1>

    <h2>About Me</h2>

    <p>
        I am learning HTML and web development.
    </p>

    <h2>My Goals</h2>

    <p>
        I want to become a full-stack developer.
    </p>

</body>
</html>`
          },
          {
            type: "paragraph",
            content: "This introduces: Multiple headings, Sections, Better structure. Now the page starts looking like a real website."
          }
        ]
      },

      {
        heading: "Adding an Image",
        blocks: [
          {
            type: "paragraph",
            content: "Images make webpages visually appealing."
          },
          {
            type: "code",
            language: "html",
            content: `<img src="profile.jpg" alt="Profile Picture">`
          },
          {
            type: "paragraph",
            content: "Explanation:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`src`: Specifies image location. `src=\"profile.jpg\"`",
              "`alt`: Alternative text shown if image cannot load. `alt=\"Profile Picture\"`"
            ]
          },
          {
            type: "paragraph",
            content: "Good accessibility practice always includes alt."
          }
        ]
      },

      {
        heading: "Adding a Link",
        blocks: [
          {
            type: "paragraph",
            content: "Links connect webpages together."
          },
          {
            type: "code",
            language: "html",
            content: `<a href="https://www.google.com">
    Visit Google
</a>`
          },
          {
            type: "paragraph",
            content: "Output: A clickable link that opens Google."
          },
          {
            type: "paragraph",
            content: "The internet itself is built on hyperlinks."
          }
        ]
      },

      {
        heading: "Adding a Button",
        blocks: [
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
            content: "Output: A clickable button. Initially it does nothing. Later, JavaScript can make buttons interactive."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Forgetting .html"
          },
          {
            type: "paragraph",
            content: "Wrong: `index.txt`. Correct: `index.html`."
          },
          {
            type: "paragraph",
            content: "Forgetting Closing Tags"
          },
          {
            type: "paragraph",
            content: "Wrong: `<h1>Hello`. Correct: `<h1>Hello</h1>`."
          },
          {
            type: "paragraph",
            content: "Saving Without Refreshing"
          },
          {
            type: "paragraph",
            content: "Many beginners edit code but forget to refresh the browser. Always: Save → Refresh."
          },
          {
            type: "paragraph",
            content: "Editing the Wrong File"
          },
          {
            type: "paragraph",
            content: "Sometimes multiple HTML files exist. Ensure you're editing the correct file."
          },
          {
            type: "paragraph",
            content: "Incorrect File Paths"
          },
          {
            type: "paragraph",
            content: "Wrong: `<img src=\"mypicture.png\">` when the image isn't in the same folder. Always verify paths carefully."
          }
        ]
      },

      {
        heading: "Real-World Developer Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers usually follow this workflow:"
          },
          {
            type: "flow",
            steps: [
              "Create Project Folder", "→",
              "Create index.html", "→",
              "Write HTML Structure", "→",
              "Add CSS Styling", "→",
              "Add JavaScript Functionality", "→",
              "Test in Browser", "→",
              "Deploy Website"
            ]
          },
          {
            type: "paragraph",
            content: "Every modern website follows this basic progression."
          }
        ]
      },

      {
        heading: "Why \"Hello World\" Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners underestimate the importance of their first webpage."
          },
          {
            type: "paragraph",
            content: "However, creating a page that displays \"Hello World\" proves several important things:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML is installed correctly.",
              "Your editor works properly.",
              "Your browser can render webpages.",
              "You understand the basic development workflow.",
              "You are ready to learn more advanced HTML concepts."
            ]
          },
          {
            type: "paragraph",
            content: "This tiny webpage is the first step toward building: Personal portfolios, Blogs, Business websites, Social networks, SaaS products, E-commerce platforms, Full-stack web applications."
          }
        ]
      },

      {
        heading: "Best Practices for Your First HTML Page",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Always use HTML5 doctype",
              "✔ Use meaningful page titles",
              "✔ Organize content with headings",
              "✔ Keep code properly indented",
              "✔ Save files with .html extension",
              "✔ Use descriptive filenames",
              "✔ Include alt text for images",
              "✔ Test pages in multiple browsers",
              "✔ Keep project files organized",
              "✔ Develop the habit of writing clean code from day one"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Creating your first HTML page is the foundation of web development. The process involves creating an `.html` file, writing the basic HTML document structure, adding content inside the `<body>`, saving the file, and opening it in a browser. Along the way, you learn how browsers interpret HTML and transform plain text code into visible webpages."
          },
          {
            type: "paragraph",
            content: "By understanding the purpose of elements like `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`, you gain a solid foundation for everything that follows in HTML, CSS, JavaScript, React, and full-stack development. Your first webpage may be simple, but it represents the beginning of building real websites and web applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common misconception is that 'coding' always means writing complex algorithms. In HTML, 'coding' is simply declaring what content goes where. Don't worry if it doesn't look pretty yet; that is what CSS is for. Your primary goal right now is mastering the structure and the Edit → Save → Refresh workflow."
          }
        ]
      }
    ]
  },
};

export default htmlgettingStarted;