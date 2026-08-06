const semanticHtml = {

/* ===========================
    First Topic : Introduction to Semantic HTML
============================= */
    "semantic-html": {
    title: "Introduction to Semantic HTML",
    readingTime: "23 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When developers first learn HTML, they often focus on making content appear on a webpage. A page may work perfectly and display all information correctly, but there is another important aspect of web development that beginners often overlook: meaning."
          },
 
          {
            type: "paragraph",
            content:
              "Consider the following structure:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="header">Website Logo</div>
 
<div class="navigation">
  Home | About | Contact
</div>
 
<div class="content">
  Welcome to our website.
</div>
 
<div class="footer">
  Copyright 2026
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "This code works, but the browser only sees a collection of generic div elements. It cannot easily understand which section is the header, navigation menu, main content, or footer."
          },
 
          {
            type: "paragraph",
            content:
              "Now consider:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
  Website Logo
</header>
 
<nav>
  Home | About | Contact
</nav>
 
<main>
  Welcome to our website.
</main>
 
<footer>
  Copyright 2026
</footer>`
          },
 
          {
            type: "paragraph",
            content:
              "Both versions look similar to users, but the second version provides meaning to browsers, search engines, accessibility tools, and developers. This approach is known as Semantic HTML."
          },
 
          {
            type: "paragraph",
            content:
              "Semantic HTML is one of the most important concepts in modern web development because it improves accessibility, SEO, maintainability, readability, and overall website structure."
          }
 
        ]
      },
 
      {
        heading: "What is Semantic HTML?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Semantic HTML refers to using HTML elements according to their intended meaning rather than simply using generic containers."
          },
 
          {
            type: "paragraph",
            content:
              "The word semantic means:"
          },
 
          {
            type: "quote",
            content:
              "Relating to meaning."
          },
 
          {
            type: "paragraph",
            content:
              "A semantic element clearly describes the purpose of its content."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
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
            content:
              "By looking at these tags, both humans and machines can immediately understand the role of the content."
          }
 
        ]
      },
 
      {
        heading: "Why Semantic HTML Was Introduced",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before HTML5, developers heavily relied on:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
<span>`
          },
 
          {
            type: "paragraph",
            content:
              "For almost everything."
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
 
<div id="menu"></div>
 
<div id="content"></div>
 
<div id="footer"></div>`
          },
 
          {
            type: "paragraph",
            content:
              "Although functional, this structure had several problems:"
          },
 
          {
            type: "list",
            items: [
              "Poor readability",
              "Difficult maintenance",
              "Limited accessibility",
              "Less meaningful structure",
              "Reduced SEO understanding"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "To solve these issues, HTML5 introduced semantic elements."
          }
 
        ]
      },
 
      {
        heading: "Semantic vs Non-Semantic Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Non-Semantic Elements do not describe their content."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div>
<span>`
          },
 
          {
            type: "paragraph",
            content:
              "Looking at:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div></div>`
          },
 
          {
            type: "paragraph",
            content:
              "You cannot determine whether it contains:"
          },
 
          {
            type: "list",
            items: [
              "Navigation",
              "Header",
              "Footer",
              "Main content",
              "Advertisement"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The tag itself provides no information."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Semantic Elements clearly describe their purpose."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<main>
<footer>`
          },
 
          {
            type: "paragraph",
            content:
              "Looking at:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav></nav>`
          },
 
          {
            type: "paragraph",
            content:
              "You immediately know:"
          },
 
          {
            type: "quote",
            content:
              "This section contains navigation links."
          }
 
        ]
      },
 
      {
        heading: "Why Semantic HTML Matters",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Semantic HTML is important for several reasons."
          }
 
        ]
      },
 
      {
        heading: "1. Better Readability",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Compare:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="header">
</div>
 
<div class="navigation">
</div>
 
<div class="footer">
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "With:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
</header>
 
<nav>
</nav>
 
<footer>
</footer>`
          },
 
          {
            type: "paragraph",
            content:
              "The second version is easier to understand. Future developers can immediately identify page sections."
          }
 
        ]
      },
 
      {
        heading: "2. Better Accessibility",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Accessibility tools such as screen readers rely heavily on semantic elements."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav>`
          },
 
          {
            type: "paragraph",
            content:
              "A screen reader may announce:"
          },
 
          {
            type: "quote",
            content:
              "Navigation region"
          },
 
          {
            type: "paragraph",
            content:
              "This helps visually impaired users navigate websites efficiently. Without semantic tags, screen readers receive less useful information."
          }
 
        ]
      },
 
      {
        heading: "3. Better SEO",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Search engines try to understand webpage content. Semantic HTML provides clear signals."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<article>`
          },
 
          {
            type: "paragraph",
            content:
              "Tells search engines:"
          },
 
          {
            type: "quote",
            content:
              "This is a standalone piece of content."
          },
 
          {
            type: "paragraph",
            content:
              "Similarly:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav>`
          },
 
          {
            type: "paragraph",
            content:
              "Indicates navigation links."
          },
 
          {
            type: "paragraph",
            content:
              "This helps search engines understand page structure more accurately."
          }
 
        ]
      },
 
      {
        heading: "4. Easier Maintenance",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Large websites may contain thousands of lines of code."
          },
 
          {
            type: "paragraph",
            content:
              "Compare:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div id="main-content">`
          },
 
          {
            type: "paragraph",
            content:
              "With:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<main>`
          },
 
          {
            type: "paragraph",
            content:
              "Semantic code is cleaner and easier to maintain."
          }
 
        ]
      },
 
      {
        heading: "5. Industry Standard",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Modern frameworks and libraries encourage semantic HTML."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "React",
              "Next.js",
              "Angular",
              "Vue",
              "Svelte"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Professional developers are expected to use semantic elements whenever possible."
          }
 
        ]
      },
 
      {
        heading: "Major Semantic HTML Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "HTML5 introduced several important semantic tags. Let's understand each one."
          }
 
        ]
      },
 
      {
        heading: "<header>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents introductory content."
          },
 
          {
            type: "paragraph",
            content:
              "Usually contains:"
          },
 
          {
            type: "list",
            items: [
              "Logo",
              "Site title",
              "Navigation",
              "Search bar"
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
  <h1>Tech Blog</h1>
</header>`
          },
 
          {
            type: "paragraph",
            content:
              "A page can have multiple headers. For example:"
          },
 
          {
            type: "list",
            items: [
              "Website header",
              "Article header"
            ]
          }
 
        ]
      },
 
      {
        heading: "<nav>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents navigation links."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`
          },
 
          {
            type: "tip",
            content:
              "Use nav only for major navigation areas. Not every group of links should be wrapped inside nav."
          }
 
        ]
      },
 
      {
        heading: "<main>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents the primary content of the page."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<main>
  <h2>Latest Articles</h2>
</main>`
          },
 
          {
            type: "note",
            content:
              "Important rule: A webpage should typically contain only one main element."
          }
 
        ]
      },
 
      {
        heading: "<section>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents a thematic grouping of content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<section>
  <h2>Services</h2>
  <p>Web Development</p>
</section>`
          },
 
          {
            type: "paragraph",
            content:
              "Think of a section as a chapter in a book. Each section should generally have its own heading."
          }
 
        ]
      },
 
      {
        heading: "<article>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents self-contained content."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Blog posts",
              "News articles",
              "Forum posts",
              "Product reviews"
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
            content: `<article>
  <h2>AI Revolution</h2>
  <p>Content...</p>
</article>`
          },
 
          {
            type: "paragraph",
            content:
              "An article should make sense even if separated from the rest of the page."
          }
 
        ]
      },
 
      {
        heading: "<aside>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents content indirectly related to the main content."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Advertisements",
              "Related links",
              "Author information",
              "Sidebars"
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
            content: `<aside>
  Related Articles
</aside>`
          }
 
        ]
      },
 
      {
        heading: "<footer>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents footer content."
          },
 
          {
            type: "paragraph",
            content:
              "Usually contains:"
          },
 
          {
            type: "list",
            items: [
              "Copyright information",
              "Contact details",
              "Legal links",
              "Social media links"
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
            content: `<footer>
  Copyright 2026
</footer>`
          },
 
          {
            type: "paragraph",
            content:
              "Like header, multiple footers may exist."
          }
 
        ]
      },
 
      {
        heading: "<figure> and <figcaption>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Used for images, diagrams, charts, and illustrations."
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
  <img src="earth.jpg">
  <figcaption>Planet Earth</figcaption>
</figure>`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Better structure",
              "Better accessibility",
              "Clear image descriptions"
            ]
          }
 
        ]
      },
 
      {
        heading: "<time>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents dates and times."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<time datetime="2026-07-15">
  July 15, 2026
</time>`
          },
 
          {
            type: "paragraph",
            content:
              "Search engines and browsers can interpret the date correctly."
          }
 
        ]
      },
 
      {
        heading: "<address>",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Represents contact information."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<address>
  support@example.com
</address>`
          },
 
          {
            type: "paragraph",
            content:
              "Typically used inside footer or article contact sections."
          }
 
        ]
      },
 
      {
        heading: "A Complete Semantic Page Example",
 
        blocks: [
 
          {
            type: "code",
            language: "html",
            content: `<header>
  <h1>Tech World</h1>
</header>
 
<nav>
  <a href="#">Home</a>
  <a href="#">Blog</a>
  <a href="#">Contact</a>
</nav>
 
<main>
 
  <article>
    <h2>Understanding AI</h2>
    <p>Article content...</p>
  </article>
 
  <aside>
    Related Posts
  </aside>
 
</main>
 
<footer>
  Copyright 2026
</footer>`
          },
 
          {
            type: "paragraph",
            content:
              "This structure clearly communicates the purpose of every section."
          }
 
        ]
      },
 
      {
        heading: "Semantic HTML and Accessibility",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Accessibility is one of the biggest reasons semantic HTML exists."
          },
 
          {
            type: "paragraph",
            content:
              "Screen readers build an accessibility tree from page structure."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav>`
          },
 
          {
            type: "paragraph",
            content:
              "A screen reader identifies:"
          },
 
          {
            type: "output",
            content:
              "Navigation Region"
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<main>`
          },
 
          {
            type: "paragraph",
            content:
              "A screen reader identifies:"
          },
 
          {
            type: "output",
            content:
              "Main Content"
          },
 
          {
            type: "paragraph",
            content:
              "This allows users to jump directly to important areas. Without semantic tags, navigation becomes significantly harder."
          }
 
        ]
      },
 
      {
        heading: "Semantic HTML and SEO",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Search engines attempt to understand:"
          },
 
          {
            type: "list",
            items: [
              "What is the page about?",
              "Which content is important?",
              "Which links are navigation?",
              "What is the main article?"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Semantic HTML provides clues."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<article>`
          },
 
          {
            type: "paragraph",
            content:
              "Helps identify primary content."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>`
          },
 
          {
            type: "paragraph",
            content:
              "Helps identify introductory information."
          },
 
          {
            type: "paragraph",
            content:
              "While semantic HTML alone does not guarantee higher rankings, it contributes to better content understanding and improved SEO practices."
          }
 
        ]
      },
 
      {
        heading: "Semantic HTML and Browser Internals",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Browsers do much more than simply display elements."
          },
 
          {
            type: "paragraph",
            content:
              "When HTML loads:"
          },
 
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "DOM Tree",
              "→",
              "Accessibility Tree",
              "→",
              "Rendering Engine"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Semantic elements contribute to the Accessibility Tree."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<nav>`
          },
 
          {
            type: "paragraph",
            content:
              "Becomes:"
          },
 
          {
            type: "output",
            content:
              "Role: Navigation"
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<main>`
          },
 
          {
            type: "paragraph",
            content:
              "Becomes:"
          },
 
          {
            type: "output",
            content:
              "Role: Main Content"
          },
 
          {
            type: "paragraph",
            content:
              "Assistive technologies depend on this information."
          }
 
        ]
      },
 
      {
        heading: "Common Semantic HTML Mistakes",
 
        blocks: [
 
          {
            type: "faq",
            items: [
              {
                question: "Using <div> For Everything",
                answer:
                  "When a semantic element already exists for a section's purpose, using a div instead loses that meaning for browsers, search engines, and assistive tools.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div class="nav">
</div>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<nav>
</nav>`
                  }
                ]
              },
 
              {
                question: "Using Multiple <main> Elements",
                answer:
                  "Usually only one main section should exist on a page. Multiple main elements confuse browsers and assistive technologies about which content is primary.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<main></main>
 
<main></main>`
                  }
                ]
              },
 
              {
                question: "Using <section> Without Headings",
                answer:
                  "Sections should generally have a heading so that both users and assistive tools can understand what the section is about.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<section>
  Content
</section>`
                  },
 
                  {
                    title: "Better",
                    language: "html",
                    content: `<section>
  <h2>Features</h2>
  Content
</section>`
                  }
                ]
              },
 
              {
                question: "Confusing <article> and <section>",
                answer:
                  "Many beginners misuse these two elements. The rule is: article is for independent content that makes sense on its own, while section is for thematically grouped content within a page."
              },
 
              {
                question: "Using Semantic Tags Only For Styling",
                answer:
                  "Using semantic tags because they produce a convenient visual result is incorrect. Semantic tags should reflect meaning, not appearance."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Semantic HTML in Real Websites",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A news website might use:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>`
          },
 
          {
            type: "paragraph",
            content:
              "An e-commerce site might use:"
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
              "A blog might use:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<header>
<nav>
<main>
<article>
<aside>
<footer>`
          },
 
          {
            type: "paragraph",
            content:
              "Almost every modern website relies heavily on semantic structure."
          }
 
        ]
      },
 
      {
        heading: "Best Practices",
 
        blocks: [
 
          {
            type: "list",
            items: [
              "✔ Use semantic tags whenever possible.",
              "✔ Prefer meaning over convenience.",
              "✔ Use <main> only once.",
              "✔ Give sections meaningful headings.",
              "✔ Use <article> for independent content.",
              "✔ Use <nav> only for major navigation.",
              "✔ Use <figure> for images with captions.",
              "✔ Use <time> for dates and timestamps.",
              "✔ Test accessibility with screen readers.",
              "✔ Combine semantic HTML with proper CSS and JavaScript."
            ]
          }
 
        ]
      },
 
      {
        heading: "Beyond Most Tutorials: Thinking Like a Browser",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Most tutorials teach semantic tags individually, but professional developers think in terms of document structure."
          },
 
          {
            type: "paragraph",
            content:
              "Before writing HTML, ask:"
          },
 
          {
            type: "list",
            items: [
              "What is the purpose of this content?",
              "Is it navigation?",
              "Is it the main content?",
              "Is it an article?",
              "Is it supplementary information?",
              "Is it contact information?"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Once you know the role of each section, choosing the correct semantic element becomes straightforward."
          },
 
          {
            type: "paragraph",
            content:
              "This approach leads to cleaner code, better accessibility, improved SEO, easier maintenance, and a more professional architecture."
          }
 
        ]
      },
 
      {
        heading: "Future Learning Connections",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Understanding Semantic HTML is essential before learning:"
          },
 
          {
            type: "list",
            items: [
              "HTML5 Semantic Elements in Depth",
              "Accessibility (ARIA)",
              "SEO Fundamentals",
              "CSS Layout Systems",
              "Responsive Design",
              "Web Performance",
              "React and JSX",
              "Next.js Development",
              "Modern Frontend Architecture"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Semantic HTML is not merely about choosing different tags. It is about creating webpages that communicate meaning to browsers, search engines, assistive technologies, and developers. Mastering semantic HTML is one of the biggest steps from writing beginner HTML to writing professional, industry-standard web code."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Semantic HTML is one of those skills that shows up on every senior developer's checklist but rarely gets the attention it deserves in beginner courses. The reason it matters so deeply is that it makes your intentions legible to machines — not just to other humans reading your code. A nav tag doesn't just look like navigation; it registers in the browser's accessibility tree, in Google's crawler, and in any tool that tries to programmatically understand your page. Writing div everywhere works today, but semantic HTML is how you write pages that are still understandable years from now, in contexts and technologies you haven't even encountered yet."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Header & Footer
============================= */
    "header-footer": {
    title: "Header & Footer",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "In modern web development, every webpage is usually divided into multiple sections. Two of the most important sections are the header and the footer. They help organize content, improve navigation, enhance accessibility, and create a consistent structure across a website."
          },

          {
            type: "paragraph",
            content: "Before HTML5, developers mainly used generic <div> elements for page sections. HTML5 introduced semantic elements like <header> and <footer>, making webpage structure more meaningful for browsers, search engines, and assistive technologies."
          }

        ]
      },

      {
        heading: "What is a Header?",

        blocks: [

          {
            type: "paragraph",
            content: "The <header> element represents introductory content or navigational aids for a webpage or a section of a webpage."
          },

          {
            type: "paragraph",
            content: "It typically contains:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Website logo",
              "Website title",
              "Navigation menu",
              "Search bar",
              "Author information",
              "Introductory content"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    <h1>Tech Blog</h1>
    <nav>
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">Contact</a>
    </nav>
</header>`
          },

          {
            type: "paragraph",
            content: "Output Structure:"
          },

          {
            type: "output",
            content: [
              "Tech Blog",
              "Home | Articles | Contact"
            ]
          }

        ]
      },

      {
        heading: "What is a Footer?",

        blocks: [

          {
            type: "paragraph",
            content: "The <footer> element represents the closing or ending section of a webpage or section."
          },

          {
            type: "paragraph",
            content: "It usually contains:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Copyright information",
              "Contact details",
              "Privacy policy links",
              "Terms and conditions",
              "Social media links",
              "Author information"
            ]
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>
    <p>&copy; 2026 Tech Blog. All Rights Reserved.</p>
</footer>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "output",
            content: [
              "© 2026 Tech Blog. All Rights Reserved."
            ]
          }

        ]
      },

      {
        heading: "Complete Page Example",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Header and Footer Example</title>
</head>
<body>

    <header>
        <h1>My Website</h1>

        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <main>
        <h2>Welcome</h2>
        <p>This is the main content area.</p>
    </main>

    <footer>
        <p>&copy; 2026 My Website</p>
    </footer>

</body>
</html>`
          },

          {
            type: "paragraph",
            content: "Typical Layout:"
          },

          {
            type: "output",
            content: [
              "+------------------------+",
              "|        HEADER          |",
              "| Logo + Navigation      |",
              "+------------------------+",
              "",
              "|       MAIN CONTENT     |",
              "|                        |",
              "|                        |",
              "",
              "+------------------------+",
              "|        FOOTER          |",
              "| Copyright Information  |",
              "+------------------------+"
            ]
          }

        ]
      },

      {
        heading: "Header Inside Sections",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners think a page can have only one header. This is incorrect."
          },

          {
            type: "paragraph",
            content: "Each section or article can have its own header."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<article>

    <header>
        <h2>Understanding HTML</h2>
        <p>Published on June 2026</p>
    </header>

    <p>HTML is the foundation of the web...</p>

</article>`
          },

          {
            type: "paragraph",
            content: "Here the header belongs to the article, not the entire page."
          }

        ]
      },

      {
        heading: "Footer Inside Sections",

        blocks: [

          {
            type: "paragraph",
            content: "Similarly, each article or section may contain its own footer."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<article>

    <h2>Introduction to HTML</h2>

    <p>HTML is used to create webpages.</p>

    <footer>
        <p>Written by John Doe</p>
    </footer>

</article>`
          },

          {
            type: "paragraph",
            content: "The footer provides information specific to that article."
          }

        ]
      },

      {
        heading: "Difference Between Header and Footer",

        blocks: [

          {
            type: "table",
            headers: [
              "Header",
              "Footer"
            ],

            rows: [
              ["Appears at the beginning", "Appears at the end"],
              ["Contains introductory content", "Contains concluding information"],
              ["Often includes navigation", "Often includes copyright details"],
              ["Helps users start navigation", "Helps users find additional information"],
              ["Usually placed at top", "Usually placed at bottom"]
            ]
          }

        ]
      },

      {
        heading: "Common Elements Found in Headers",

        blocks: [

          {
            type: "paragraph",
            content: "Logo"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    <img src="logo.png" alt="Company Logo">
</header>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Navigation Menu"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>
</header>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Search Bar"
          },

          {
            type: "code",
            language: "html",
            content: `<header>

    <form>
        <input type="search" placeholder="Search">
        <button>Search</button>
    </form>

</header>`
          }

        ]
      },

      {
        heading: "Common Elements Found in Footers",

        blocks: [

          {
            type: "paragraph",
            content: "Copyright Information"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>
    <p>&copy; 2026 Company Name</p>
</footer>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Contact Information"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>
    <p>Email: contact@example.com</p>
</footer>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Social Media Links"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>

    <a href="#">Facebook</a>
    <a href="#">Twitter</a>
    <a href="#">LinkedIn</a>

</footer>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Legal Pages"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>

    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>

</footer>`
          }

        ]
      },

      {
        heading: "Semantic Importance",

        blocks: [

          {
            type: "paragraph",
            content: "One of the biggest advantages of using <header> and <footer> is semantic meaning."
          },

          {
            type: "paragraph",
            content: "Compare these two examples:"
          },

          {
            type: "comparison",
            leftTitle: "Non-Semantic",
            leftItems: [
              "<div class=\"top-section\">",
              "    ...",
              "</div>",
              "",
              "<div class=\"bottom-section\">",
              "    ...",
              "</div>"
            ],
            rightTitle: "Semantic",
            rightItems: [
              "<header>",
              "    ...",
              "</header>",
              "",
              "<footer>",
              "    ...",
              "</footer>"
            ]
          },

          {
            type: "paragraph",
            content: "The second version clearly explains the purpose of each section."
          },

          {
            type: "paragraph",
            content: "Benefits include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better accessibility",
              "Better SEO",
              "Cleaner code",
              "Easier maintenance",
              "Improved readability"
            ]
          }

        ]
      },

      {
        heading: "How Search Engines Use Header and Footer",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines analyze page structure to understand content hierarchy."
          },

          {
            type: "paragraph",
            content: "A properly designed header helps search engines identify:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Website identity",
              "Navigation structure",
              "Main topics"
            ]
          },

          {
            type: "paragraph",
            content: "A footer helps search engines identify:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Important links",
              "Contact information",
              "Site ownership"
            ]
          },

          {
            type: "paragraph",
            content: "While headers and footers do not directly increase rankings, they improve the overall semantic quality of a webpage."
          }

        ]
      },

      {
        heading: "Accessibility Benefits",

        blocks: [

          {
            type: "paragraph",
            content: "Screen readers use semantic landmarks to help visually impaired users navigate webpages."
          },

          {
            type: "paragraph",
            content: "When a screen reader encounters:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>`
          },

          {
            type: "paragraph",
            content: "it understands:"
          },

          {
            type: "output",
            content: [
              "\"This is the beginning section of the page.\""
            ]
          },

          {
            type: "paragraph",
            content: "When it encounters:"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>`
          },

          {
            type: "paragraph",
            content: "it understands:"
          },

          {
            type: "output",
            content: [
              "\"This is the ending information section.\""
            ]
          },

          {
            type: "paragraph",
            content: "This significantly improves user experience."
          }

        ]
      },

      {
        heading: "Modern Website Header Structure",

        blocks: [

          {
            type: "paragraph",
            content: "A typical professional website header contains:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>

    <div class="logo">
        Company Logo
    </div>

    <nav>
        Navigation Links
    </nav>

    <button>
        Sign In
    </button>

</header>`
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
              "Navigation",
              "Search",
              "Login button",
              "Signup button",
              "Language selector"
            ]
          }

        ]
      },

      {
        heading: "Modern Website Footer Structure",

        blocks: [

          {
            type: "paragraph",
            content: "A professional footer often contains:"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>

    <section>
        Company Information
    </section>

    <section>
        Quick Links
    </section>

    <section>
        Contact Details
    </section>

    <section>
        Social Media Links
    </section>

</footer>`
          },

          {
            type: "paragraph",
            content: "Common contents:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Company details",
              "Product links",
              "Contact information",
              "Newsletter signup",
              "Legal documents",
              "Social links"
            ]
          }

        ]
      },

      {
        heading: "Browser Internals",

        blocks: [

          {
            type: "paragraph",
            content: "When a browser parses:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>`
          },

          {
            type: "paragraph",
            content: "or"
          },

          {
            type: "code",
            language: "html",
            content: `<footer>`
          },

          {
            type: "paragraph",
            content: "it creates semantic nodes inside the DOM tree."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<body>

    <header>
        <h1>Website</h1>
    </header>

    <footer>
        Copyright
    </footer>

</body>`
          },

          {
            type: "paragraph",
            content: "DOM Tree:"
          },

          {
            type: "tree",
            content: `body
 ├── header
 │    └── h1
 └── footer
      └── text`
          },

          {
            type: "paragraph",
            content: "Browsers do not automatically style headers or footers differently. They simply understand their meaning."
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
                question: "Using Header for Every Container",
                answer: "Use headers only for introductory content.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<div>\n    <header>Random Text</header>\n</div>`
                  }
                ]
              },
              {
                question: "Putting Entire Page Content Inside Header",
                answer: "The header should only contain introductory content.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<header>\n\n    Everything on the page\n\n</header>`
                  }
                ]
              },
              {
                question: "Using Footer for Main Content",
                answer: "Footers should contain supporting or concluding information.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<footer>\n    Full article content\n</footer>`
                  }
                ]
              },
              {
                question: "Ignoring Navigation",
                answer: "Many beginners place navigation outside the header. It's better to nest your <nav> inside the <header>.",
                examples: [
                  {
                    title: "Better",
                    language: "html",
                    content: `<header>\n\n    <nav>\n        ...\n    </nav>\n\n</header>`
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
              "Use One Main Header: Every webpage should usually have one primary page header.",
              "Use Semantic Navigation: Place your <nav> elements inside the <header>.",
              "Keep Footer Informative: Include contact information, copyright notice, and important links.",
              "Maintain Consistency: Keep the same header and footer design across all pages.",
              "Use Accessibility-Friendly Content: Provide meaningful text for links and navigation items."
            ]
          }

        ]
      },

      {
        heading: "Real-World Usage",

        blocks: [

          {
            type: "paragraph",
            content: "Almost every modern website uses header and footer sections:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce websites",
              "News portals",
              "Blogs",
              "Corporate websites",
              "Government portals",
              "Educational platforms",
              "SaaS applications"
            ]
          },

          {
            type: "paragraph",
            content: "Examples include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Amazon",
              "YouTube",
              "LinkedIn",
              "GitHub",
              "Netflix",
              "Wikipedia"
            ]
          },

          {
            type: "paragraph",
            content: "Each follows the same fundamental concept:"
          },

          {
            type: "output",
            content: [
              "Header = Introduction and Navigation",
              "Footer = Supporting and Closing Information"
            ]
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
              "<header> represents introductory content.",
              "<footer> represents concluding or supporting content.",
              "Both are semantic HTML5 elements.",
              "Multiple headers and footers can exist on a page when used inside sections or articles.",
              "They improve accessibility, SEO, readability, and maintainability.",
              "Headers commonly contain logos, titles, and navigation menus.",
              "Footers commonly contain copyright information, legal links, contact details, and social media links.",
              "Modern websites rely heavily on semantic headers and footers for professional structure and user experience."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A common misunderstanding is treating `<header>` and `<footer>` identically to the `<head>` tag. Remember that `<head>` contains invisible metadata (like scripts, styles, and titles) meant for the browser, whereas `<header>` and `<footer>` exist strictly inside the `<body>` and contain visible structural content meant for the user. Never place visible navigation or logos inside the `<head>`!"
          }

        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Main, Section & Article
============================= */
    "main-section-article": {
    title: "Main, Section & Article",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "As websites became larger and more complex, developers needed a better way to organize content than using countless <div> elements. HTML5 introduced semantic elements such as <main>, <section>, and <article> to provide meaning and structure to web pages."
          },

          {
            type: "paragraph",
            content: "These elements not only make code easier to understand but also improve accessibility, search engine optimization (SEO), maintainability, and communication between developers."
          },

          {
            type: "paragraph",
            content: "Understanding the difference between these three elements is extremely important because many developers use them incorrectly, even in professional projects."
          }

        ]
      },

      {
        heading: "Why Semantic Structure Matters",

        blocks: [

          {
            type: "paragraph",
            content: "Consider two versions of a webpage:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Non-Semantic Structure"
          },

          {
            type: "code",
            language: "html",
            content: `<div>
    <div>
        <h1>Tech News</h1>
    </div>

    <div>
        <h2>Latest AI Breakthrough</h2>
        <p>Article content...</p>
    </div>
</div>`
          },

          {
            type: "paragraph",
            content: "Everything is inside generic containers."
          },

          {
            type: "paragraph",
            content: "A browser can display it, but:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Search engines cannot easily identify important content.",
              "Screen readers cannot understand the page hierarchy.",
              "Developers must guess the purpose of each container."
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
            type: "code",
            language: "html",
            content: `<main>
    <article>
        <h2>Latest AI Breakthrough</h2>
        <p>Article content...</p>
    </article>
</main>`
          },

          {
            type: "paragraph",
            content: "Now the content has meaning."
          },

          {
            type: "paragraph",
            content: "The browser, search engine, accessibility tools, and developers all understand the role of each section."
          }

        ]
      },

      {
        heading: "The <main> Element",

        blocks: [

          {
            type: "paragraph",
            content: "The <main> element represents the primary content of the webpage."
          },

          {
            type: "paragraph",
            content: "It contains the content that is directly related to the page's purpose."
          },

          {
            type: "paragraph",
            content: "There should normally be only one <main> element on a page."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<body>

<header>
    Website Header
</header>

<main>
    Main content goes here
</main>

<footer>
    Website Footer
</footer>

</body>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "What Belongs Inside <main>?"
          },

          {
            type: "paragraph",
            content: "Examples include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blog content",
              "Product information",
              "Article content",
              "Course material",
              "Documentation pages",
              "Dashboard content"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "What Should NOT Be Inside <main>?"
          },

          {
            type: "paragraph",
            content: "Generally avoid placing:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Site navigation",
              "Repeated sidebars",
              "Copyright information",
              "Website headers",
              "Website footers"
            ]
          },

          {
            type: "paragraph",
            content: "These belong outside <main>."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Real-World Example"
          },

          {
            type: "code",
            language: "html",
            content: `<main>
    <h1>Learn HTML</h1>

    <p>Welcome to our HTML course.</p>

    <section>
        <h2>HTML Basics</h2>
    </section>
</main>`
          },

          {
            type: "paragraph",
            content: "The main learning content lives inside <main>."
          }

        ]
      },

      {
        heading: "The <section> Element",

        blocks: [

          {
            type: "paragraph",
            content: "The <section> element represents a thematic grouping of content."
          },

          {
            type: "paragraph",
            content: "Think of it as a chapter inside a book."
          },

          {
            type: "paragraph",
            content: "Each section should usually have a heading."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<section>
    <h2>Introduction</h2>

    <p>This chapter introduces HTML.</p>
</section>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "When to Use <section>"
          },

          {
            type: "paragraph",
            content: "Use it when content belongs together under a common topic."
          },

          {
            type: "paragraph",
            content: "Examples:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Introduction",
              "Features",
              "Services",
              "Testimonials",
              "FAQs",
              "Course chapters"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Real Website Example"
          },

          {
            type: "code",
            language: "html",
            content: `<main>

<section>
    <h2>About Us</h2>
    <p>Company information...</p>
</section>

<section>
    <h2>Our Services</h2>
    <p>Services information...</p>
</section>

<section>
    <h2>Contact</h2>
    <p>Contact details...</p>
</section>

</main>`
          },

          {
            type: "paragraph",
            content: "Each section represents a different topic."
          }

        ]
      },

      {
        heading: "The <article> Element",

        blocks: [

          {
            type: "paragraph",
            content: "The <article> element represents self-contained content that can stand on its own."
          },

          {
            type: "paragraph",
            content: "If content makes sense independently when copied elsewhere, it is usually an article."
          },

          {
            type: "paragraph",
            content: "Examples of Articles"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Blog posts",
              "News stories",
              "Forum posts",
              "Product reviews",
              "User comments",
              "Documentation articles"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<article>
    <h2>What is HTML?</h2>

    <p>HTML is the standard language for creating webpages.</p>
</article>`
          },

          {
            type: "paragraph",
            content: "This article can exist independently."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Real Blog Example"
          },

          {
            type: "code",
            language: "html",
            content: `<main>

<article>
    <h2>Introduction to HTML</h2>

    <p>HTML is the foundation of web development.</p>
</article>

<article>
    <h2>Understanding CSS</h2>

    <p>CSS controls webpage appearance.</p>
</article>

</main>`
          },

          {
            type: "paragraph",
            content: "Each blog post is an independent piece of content."
          }

        ]
      },

      {
        heading: "Difference Between Main, Section and Article",

        blocks: [

          {
            type: "table",
            headers: [
              "Element",
              "Purpose"
            ],

            rows: [
              ["<main>", "Main content of the webpage"],
              ["<section>", "A thematic grouping of related content"],
              ["<article>", "Self-contained independent content"]
            ]
          }

        ]
      },

      {
        heading: "Think of a Newspaper",

        blocks: [

          {
            type: "paragraph",
            content: "Imagine a newspaper."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Entire Newspaper"
          },

          {
            type: "output",
            content: [
              "<main>",
              "Represents the main content area."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Categories"
          },

          {
            type: "output",
            content: [
              "<section>",
              "Represent:",
              "Sports",
              "Politics",
              "Technology",
              "Business"
            ]
          },

          {
            type: "paragraph",
            content: "These are thematic groups."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Individual News Stories"
          },

          {
            type: "output",
            content: [
              "<article>",
              "Represent individual news articles."
            ]
          },

          {
            type: "paragraph",
            content: "Each article can exist independently."
          }

        ]
      },

      {
        heading: "Section vs Article (Most Confusing Topic)",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners struggle with this distinction."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use <section> When"
          },

          {
            type: "paragraph",
            content: "Content belongs to a broader topic."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<section>
    <h2>Our Services</h2>

    <p>Web Development</p>
    <p>SEO Services</p>
    <p>Digital Marketing</p>
</section>`
          },

          {
            type: "paragraph",
            content: "The content is part of one larger section."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use <article> When"
          },

          {
            type: "paragraph",
            content: "Content is independently meaningful."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<article>
    <h2>Google Launches New AI Model</h2>

    <p>Article details...</p>
</article>`
          },

          {
            type: "paragraph",
            content: "The content could be shared or published separately."
          }

        ]
      },

      {
        heading: "Nesting Section and Article",

        blocks: [

          {
            type: "paragraph",
            content: "Articles and sections can be nested."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Article Inside Section"
          },

          {
            type: "code",
            language: "html",
            content: `<section>

<h2>Technology News</h2>

<article>
    <h3>AI Update</h3>
</article>

<article>
    <h3>Quantum Computing News</h3>
</article>

</section>`
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "output",
            content: [
              "Section = Technology category",
              "Articles = Individual news stories"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Sections Inside Article"
          },

          {
            type: "code",
            language: "html",
            content: `<article>

<h1>Learn HTML</h1>

<section>
    <h2>Introduction</h2>
</section>

<section>
    <h2>HTML Elements</h2>
</section>

</article>`
          },

          {
            type: "paragraph",
            content: "The article contains multiple sections."
          }

        ]
      },

      {
        heading: "Complete Real-World Layout",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<body>

<header>
    Website Header
</header>

<main>

<section>

<h2>Latest Technology News</h2>

<article>
    <h3>AI Breakthrough</h3>
    <p>Article content...</p>
</article>

<article>
    <h3>New Smartphone Launch</h3>
    <p>Article content...</p>
</article>

</section>

</main>

<footer>
    Website Footer
</footer>

</body>`
          },

          {
            type: "paragraph",
            content: "This structure is semantic, accessible, and SEO-friendly."
          }

        ]
      },

      {
        heading: "Accessibility Benefits",

        blocks: [

          {
            type: "paragraph",
            content: "Screen readers use semantic elements to understand page structure."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "code",
            language: "html",
            content: `<main>`
          },

          {
            type: "paragraph",
            content: "tells assistive technologies:"
          },

          {
            type: "output",
            content: [
              "\"This is the primary content area.\""
            ]
          },

          {
            type: "paragraph",
            content: "Similarly:"
          },

          {
            type: "code",
            language: "html",
            content: `<section>`
          },

          {
            type: "paragraph",
            content: "identifies major content regions."
          },

          {
            type: "code",
            language: "html",
            content: `<article>`
          },

          {
            type: "paragraph",
            content: "identifies independent content units."
          },

          {
            type: "paragraph",
            content: "This greatly improves navigation for visually impaired users."
          }

        ]
      },

      {
        heading: "SEO Benefits",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines analyze page structure."
          },

          {
            type: "paragraph",
            content: "Semantic elements help search engines understand:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Main content",
              "Topic grouping",
              "Article boundaries",
              "Content hierarchy"
            ]
          },

          {
            type: "paragraph",
            content: "This improves content interpretation and can contribute to better indexing."
          }

        ]
      },

      {
        heading: "Browser Internals",

        blocks: [

          {
            type: "paragraph",
            content: "When the browser parses HTML:"
          },

          {
            type: "output",
            content: [
              "<main>",
              "<section>",
              "<article>"
            ]
          },

          {
            type: "paragraph",
            content: "it creates corresponding nodes in the DOM tree."
          },

          {
            type: "paragraph",
            content: "These semantic tags behave similarly to block-level elements visually, but they provide additional meaning in the document outline and accessibility tree."
          },

          {
            type: "paragraph",
            content: "This extra semantic information is what makes them valuable."
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
                question: "Using Only Divs",
                answer: "Use semantic elements to provide meaning to your structure instead of relying purely on generic div containers.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>\n    <div>\n        <div>\n        </div>\n    </div>\n</div>`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<main>\n    <section>\n        <article>\n        </article>\n    </section>\n</main>`
                  }
                ]
              },
              {
                question: "Using Article for Everything",
                answer: "An \"About Us\" page section is usually not an independent article. Use section instead.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<article>\n    <h2>About Us</h2>\n</article>`
                  },
                  {
                    title: "Use",
                    language: "html",
                    content: `<section>\n    <h2>About Us</h2>\n</section>`
                  }
                ]
              },
              {
                question: "Multiple Main Elements",
                answer: "A page should generally contain only one main content region.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<main>Main Content 1</main>\n\n<main>Main Content 2</main>`
                  }
                ]
              },
              {
                question: "Section Without Heading",
                answer: "Sections should usually have headings to define their thematic grouping.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<section>\n    <p>Some content</p>\n</section>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<section>\n    <h2>Features</h2>\n    <p>Some content</p>\n</section>`
                  }
                ]
              }
            ]
          }

        ]
      },

      {
        heading: "Modern Development Best Practices",

        blocks: [

          {
            type: "paragraph",
            content: "Professional developers typically follow these guidelines:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use <main> once per page.",
              "Use <section> for major content groups.",
              "Use <article> for standalone content.",
              "Prefer semantic elements over unnecessary <div> containers.",
              "Give every section a meaningful heading.",
              "Maintain a logical heading hierarchy.",
              "Design pages for both users and accessibility tools."
            ]
          }

        ]
      },

      {
        heading: "Future Learning Connection",

        blocks: [

          {
            type: "paragraph",
            content: "The elements learned here are the foundation of:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic HTML",
              "Accessibility (ARIA)",
              "SEO Optimization",
              "Responsive Web Design",
              "CSS Layouts",
              "CSS Grid",
              "Flexbox",
              "Web Components",
              "Modern Frontend Frameworks (React, Vue, Angular)"
            ]
          },

          {
            type: "paragraph",
            content: "Nearly every professional website uses <main>, <section>, and <article> extensively."
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
              "<main> represents the primary content area of a webpage.",
              "A page should generally contain only one <main> element.",
              "<section> groups related content under a common theme.",
              "<article> contains independent self-contained content.",
              "Articles can exist inside sections.",
              "Sections can exist inside articles.",
              "Semantic elements improve readability, accessibility, SEO, and maintainability.",
              "Use semantic tags whenever they accurately describe the content instead of relying solely on <div> elements.",
              "Proper semantic structure is a hallmark of professional frontend development."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 When thinking about `<article>` vs `<section>`, ask yourself the \"Syndication Test\". If you took the content inside the tag and published it on another website, embedded it in an email, or put it in an RSS feed, would it still make sense completely on its own? If yes, use an `<article>`. If it only makes sense in the context of the surrounding page, use a `<section>`."
          }

        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Aside & Navigation
============================= */
    "aside-nav": {
    title: "Aside & Navigation",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "When building a website, not all content serves the same purpose. Some content is the primary focus of the page, while some content helps users navigate or provides additional information."
          },

          {
            type: "paragraph",
            content: "HTML5 introduced semantic elements such as <nav> and <aside> to clearly describe the purpose of different sections of a webpage. These elements improve readability, accessibility, SEO, and maintainability."
          },

          {
            type: "paragraph",
            content: "In this tutorial, you will learn what Aside and Navigation elements are, when to use them, how they differ, and how professional websites utilize them."
          }

        ]
      },

      {
        heading: "What is Navigation (<nav>)?",

        blocks: [

          {
            type: "paragraph",
            content: "The <nav> element represents a section of a webpage that contains navigation links."
          },

          {
            type: "paragraph",
            content: "These links help users move between pages or sections of a website."
          },

          {
            type: "paragraph",
            content: "Example"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
</nav>`
          },

          {
            type: "paragraph",
            content: "The browser understands that this section is meant for navigation."
          }

        ]
      },

      {
        heading: "Why Use <nav>?",

        blocks: [

          {
            type: "paragraph",
            content: "Without semantic HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>
    <a href="#">Home</a>
    <a href="#">About</a>
</div>`
          },

          {
            type: "paragraph",
            content: "The browser sees only a generic container."
          },

          {
            type: "paragraph",
            content: "With semantic HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
</nav>`
          },

          {
            type: "paragraph",
            content: "The browser understands:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "This section contains navigation links",
              "Screen readers can identify it",
              "Search engines understand page structure better",
              "Accessibility improves"
            ]
          }

        ]
      },

      {
        heading: "Common Uses of <nav>",

        blocks: [

          {
            type: "paragraph",
            content: "Main Website Navigation"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/courses">Courses</a>
    <a href="/contact">Contact</a>
</nav>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Sidebar Navigation"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <ul>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
    </ul>
</nav>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Table of Contents"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <h2>Contents</h2>

    <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#examples">Examples</a></li>
    </ul>
</nav>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Pagination Navigation"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>
    <a href="#">Previous</a>
    <a href="#">Next</a>
</nav>`
          }

        ]
      },

      {
        heading: "What is Aside (<aside>)?",

        blocks: [

          {
            type: "paragraph",
            content: "The <aside> element represents content that is related to the main content but is not part of the primary content flow."
          },

          {
            type: "paragraph",
            content: "Think of it as supporting, complementary, or secondary information."
          }

        ]
      },

      {
        heading: "Real-Life Example",

        blocks: [

          {
            type: "paragraph",
            content: "Suppose you are reading an article about Artificial Intelligence."
          },

          {
            type: "paragraph",
            content: "Main content:"
          },

          {
            type: "code",
            language: "html",
            content: `<article>
    <h1>Introduction to Artificial Intelligence</h1>

    <p>AI is transforming modern industries...</p>
</article>`
          },

          {
            type: "paragraph",
            content: "Related information:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <h3>Did You Know?</h3>

    <p>The term AI was first coined in 1956.</p>
</aside>`
          },

          {
            type: "paragraph",
            content: "The aside supports the article but is not part of the article itself."
          }

        ]
      },

      {
        heading: "Common Uses of <aside>",

        blocks: [

          {
            type: "paragraph",
            content: "Sidebar"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <h3>Categories</h3>

    <ul>
        <li>Technology</li>
        <li>Science</li>
        <li>Programming</li>
    </ul>
</aside>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Related Articles"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <h3>Related Posts</h3>

    <ul>
        <li><a href="#">Introduction to HTML</a></li>
        <li><a href="#">CSS Basics</a></li>
    </ul>
</aside>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Author Information"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <h3>About the Author</h3>

    <p>John Doe is a web developer with 10 years of experience.</p>
</aside>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Advertisements"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <h3>Sponsored</h3>

    <img src="ad.jpg" alt="Advertisement">
</aside>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Helpful Tips"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>
    <strong>Tip:</strong>

    Always use semantic HTML whenever possible.
</aside>`
          }

        ]
      },

      {
        heading: "Basic Page Structure Using Both",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<body>

<header>
    <h1>My Blog</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">Articles</a>
    <a href="#">Contact</a>
</nav>

<main>

    <article>
        <h2>Learning HTML</h2>

        <p>This is the main article content.</p>
    </article>

    <aside>
        <h3>Related Topics</h3>

        <ul>
            <li>CSS Basics</li>
            <li>JavaScript Intro</li>
        </ul>
    </aside>

</main>

<footer>
    <p>Copyright 2026</p>
</footer>

</body>`
          },

          {
            type: "paragraph",
            content: "This is a common structure used in blogs and news websites."
          }

        ]
      },

      {
        heading: "Difference Between <nav> and <aside>",

        blocks: [

          {
            type: "table",
            headers: [
              "Feature",
              "<nav>",
              "<aside>"
            ],

            rows: [
              ["Purpose", "Navigation links", "Supporting content"],
              ["Helps user move around site", "Yes", "No"],
              ["Contains menus", "Yes", "Usually no"],
              ["Contains related information", "No", "Yes"],
              ["Used for sidebars", "Sometimes", "Commonly"],
              ["Improves accessibility", "Yes", "Yes"]
            ]
          }

        ]
      },

      {
        heading: "Can Navigation Be Inside Aside?",

        blocks: [

          {
            type: "paragraph",
            content: "Yes."
          },

          {
            type: "paragraph",
            content: "A sidebar often contains navigation links."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>

    <h3>Course Topics</h3>

    <nav>
        <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
    </nav>

</aside>`
          },

          {
            type: "paragraph",
            content: "This is perfectly valid."
          },

          {
            type: "paragraph",
            content: "Here:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "<aside> describes the sidebar",
              "<nav> describes the navigation menu inside it"
            ]
          }

        ]
      },

      {
        heading: "Can Aside Be Inside Article?",

        blocks: [

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
            content: `<article>

    <h2>History of HTML</h2>

    <p>HTML was created by Tim Berners-Lee...</p>

    <aside>
        <strong>Interesting Fact:</strong>
        HTML was first released in 1993.
    </aside>

</article>`
          },

          {
            type: "paragraph",
            content: "The aside provides additional information related to that specific article."
          }

        ]
      },

      {
        heading: "Accessibility Benefits",

        blocks: [

          {
            type: "paragraph",
            content: "Screen readers create landmarks from semantic elements."
          },

          {
            type: "paragraph",
            content: "When a screen reader encounters:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "It announces:"
          },

          {
            type: "output",
            content: [
              "Navigation region"
            ]
          },

          {
            type: "paragraph",
            content: "When it encounters:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>`
          },

          {
            type: "paragraph",
            content: "It announces:"
          },

          {
            type: "output",
            content: [
              "Complementary content region"
            ]
          },

          {
            type: "paragraph",
            content: "This helps visually impaired users understand the page structure quickly."
          }

        ]
      },

      {
        heading: "SEO Benefits",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines analyze semantic HTML to understand content hierarchy."
          },

          {
            type: "paragraph",
            content: "Using:"
          },

          {
            type: "code",
            language: "html",
            content: `<nav>`
          },

          {
            type: "paragraph",
            content: "helps search engines identify menus."
          },

          {
            type: "paragraph",
            content: "Using:"
          },

          {
            type: "code",
            language: "html",
            content: `<aside>`
          },

          {
            type: "paragraph",
            content: "helps search engines distinguish supplementary content from primary content."
          },

          {
            type: "paragraph",
            content: "This creates a clearer page structure and can improve content understanding."
          }

        ]
      },

      {
        heading: "Browser Internals",

        blocks: [

          {
            type: "paragraph",
            content: "Browsers build the DOM tree based on HTML elements."
          },

          {
            type: "paragraph",
            content: "When semantic elements such as:"
          },

          {
            type: "output",
            content: [
              "<nav>",
              "<aside>",
              "<header>",
              "<main>",
              "<footer>"
            ]
          },

          {
            type: "paragraph",
            content: "are used:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Accessibility trees become more meaningful",
              "Screen readers provide better navigation",
              "Search engines interpret content more accurately",
              "Developer tools display a cleaner structure"
            ]
          },

          {
            type: "paragraph",
            content: "The rendering is almost identical to a <div>, but the semantic meaning is significantly richer."
          }

        ]
      },

      {
        heading: "Modern Website Example",

        blocks: [

          {
            type: "paragraph",
            content: "A typical blog layout:"
          },

          {
            type: "tree",
            content: `<header>
Website logo and title

<nav>
Main menu

<main>
Main content area

<article>
Blog post

<aside>
Related posts, categories, ads

<footer>
Copyright and contact information`
          },

          {
            type: "paragraph",
            content: "This semantic structure is used by most professional websites today."
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
                question: "Using <nav> for Every Group of Links",
                answer: "Not every link needs a navigation section. Use <nav> only for important navigation blocks.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<nav>\n    <a href="#">Privacy Policy</a>\n</nav>`
                  }
                ]
              },
              {
                question: "Using Aside for Main Content",
                answer: "Main content should be inside <main>, <article>, or <section>, not inside <aside>.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "html",
                    content: `<aside>\n    <h1>Complete JavaScript Tutorial</h1>\n</aside>`
                  }
                ]
              },
              {
                question: "Replacing Everything With Divs",
                answer: "Semantic HTML provides more meaning. Avoid using generic divs when a semantic tag is appropriate.",
                examples: [
                  {
                    title: "Poor",
                    language: "html",
                    content: `<div class="sidebar">`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<aside>`
                  }
                ]
              },
              {
                question: "Creating Multiple Unnecessary Navigation Regions",
                answer: "Too many <nav> sections can confuse screen reader users. Only use <nav> where navigation is a primary purpose."
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
              "Use <nav> for important navigation areas.",
              "Use <aside> for supplementary content.",
              "Combine <aside> and <nav> when building sidebars.",
              "Keep primary content inside <main>.",
              "Prefer semantic elements over generic <div> containers.",
              "Use meaningful headings inside sidebars and navigation sections.",
              "Design layouts with accessibility in mind."
            ]
          }

        ]
      },

      {
        heading: "Real-World Developer Notes",

        blocks: [

          {
            type: "paragraph",
            content: "Large websites heavily rely on <nav> and <aside>:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "News websites use <aside> for related stories and advertisements.",
              "E-commerce websites use <aside> for product filters and recommendations.",
              "Documentation websites use <nav> for side menus and table of contents.",
              "Blogs use <aside> for author information and related posts.",
              "Learning platforms use <nav> for course navigation."
            ]
          },

          {
            type: "paragraph",
            content: "Modern frameworks like React, Next.js, Angular, and Vue still render these standard HTML semantic elements because accessibility and SEO remain critical."
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
              "<nav> defines a navigation section containing important links.",
              "<aside> defines supporting or secondary content.",
              "Navigation menus, side menus, and pagination usually belong inside <nav>.",
              "Related articles, advertisements, author information, and tips usually belong inside <aside>.",
              "An <aside> can contain a <nav>.",
              "Semantic elements improve accessibility, SEO, and code readability.",
              "Professional websites use <nav> and <aside> extensively to create clear, meaningful page structures."
            ]
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 Keep in mind that `<aside>` does not inherently mean 'sidebar' visually. While it's often styled as a sidebar using CSS, an `<aside>` can technically be placed anywhere on the page—even right in the middle of a paragraph—as long as its content is tangentially related to the main content. The tag dictates meaning, not visual placement."
          }

        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Semantic Best Practices
============================= */
    "semantic-best-practices": {
    title: "Semantic Best Practices",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Semantic HTML is the practice of using HTML elements according to their meaning and purpose rather than simply for their appearance. Instead of using generic elements everywhere, semantic HTML uses tags like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to clearly describe the role of content on a webpage."
          },

          {
            type: "paragraph",
            content: "Many beginners focus only on making a webpage look correct. Professional developers focus on making it meaningful, accessible, maintainable, SEO-friendly, and understandable by browsers, search engines, and assistive technologies."
          },

          {
            type: "paragraph",
            content: "Semantic HTML is one of the most important foundations of modern web development."
          }

        ]
      },

      {
        heading: "Why Semantic HTML Matters",

        blocks: [

          {
            type: "paragraph",
            content: "Consider the following code:"
          },

          {
            type: "code",
            language: "html",
            content: `<div class="top">
    Website Header
</div>

<div class="menu">
    Navigation Links
</div>

<div class="content">
    Main Content
</div>

<div class="bottom">
    Footer Content
</div>`
          },

          {
            type: "paragraph",
            content: "Although this works visually, the browser cannot understand the purpose of each section."
          },

          {
            type: "paragraph",
            content: "Now compare it with:"
          },

          {
            type: "code",
            language: "html",
            content: `<header>
    Website Header
</header>

<nav>
    Navigation Links
</nav>

<main>
    Main Content
</main>

<footer>
    Footer Content
</footer>`
          },

          {
            type: "paragraph",
            content: "This version immediately tells browsers, search engines, screen readers, and developers what each section represents."
          },

          {
            type: "paragraph",
            content: "The webpage is not only readable by humans but also understandable by machines."
          }

        ]
      },

      {
        heading: "Core Principle of Semantic HTML",

        blocks: [

          {
            type: "paragraph",
            content: "A simple rule followed by professional developers:"
          },

          {
            type: "quote",
            content: "Choose elements based on meaning, not appearance."
          },

          {
            type: "faq",
            items: [
              {
                question: "Headings vs Divs",
                answer: "Always use heading tags for titles instead of generic divs.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<div class="heading">\n    About Us\n</div>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<h1>About Us</h1>`
                  }
                ]
              },
              {
                question: "Buttons vs Divs",
                answer: "Buttons provide built-in accessibility and keyboard support.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<div onclick="submitForm()">\n    Submit\n</div>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<button type="submit">\n    Submit\n</button>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "The correct element already provides built-in accessibility, keyboard support, browser behavior, and semantic meaning."
          }

        ]
      },

      {
        heading: "Use Semantic Layout Elements",

        blocks: [

          {
            type: "paragraph",
            content: "HTML5 introduced several semantic layout tags."
          },

          {
            type: "paragraph",
            content: "Recommended Structure"
          },

          {
            type: "code",
            language: "html",
            content: `<body>

    <header>
        Site Header
    </header>

    <nav>
        Navigation Menu
    </nav>

    <main>

        <section>
            Content Section
        </section>

        <article>
            Blog Post
        </article>

        <aside>
            Sidebar
        </aside>

    </main>

    <footer>
        Footer Information
    </footer>

</body>`
          },

          {
            type: "paragraph",
            content: "Each tag serves a specific purpose."
          }

        ]
      },

      {
        heading: "Use Headings Properly",

        blocks: [

          {
            type: "paragraph",
            content: "Headings create the document structure."
          },

          {
            type: "faq",
            items: [
              {
                question: "Heading Hierarchy",
                answer: "Avoid skipping heading levels unnecessarily.",
                examples: [
                  {
                    title: "Good",
                    language: "html",
                    content: `<h1>Web Development</h1>\n\n<h2>HTML</h2>\n\n<h3>Elements</h3>\n\n<h3>Attributes</h3>\n\n<h2>CSS</h2>`
                  },
                  {
                    title: "Bad",
                    language: "html",
                    content: `<h1>Web Development</h1>\n\n<h4>HTML</h4>\n\n<h2>CSS</h2>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "Proper heading hierarchy helps:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "SEO",
              "Accessibility",
              "Screen readers",
              "Document structure"
            ]
          }

        ]
      },

      {
        heading: "Use Lists for Lists",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners create lists using paragraphs."
          },

          {
            type: "faq",
            items: [
              {
                question: "Paragraphs vs Lists",
                answer: "Use `<ul>` or `<ol>` elements to properly group list items so the browser understands the relationship.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<p>HTML</p>\n<p>CSS</p>\n<p>JavaScript</p>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n</ul>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "The browser now understands that the content is a list."
          }

        ]
      },

      {
        heading: "Use Buttons for Actions",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Divs for Actions",
                answer: "Generic elements like divs do not provide keyboard accessibility by default.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<div onclick="saveData()">\n    Save\n</div>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<button type="button">\n    Save\n</button>`
                  }
                ]
              }
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
              "Keyboard accessible",
              "Screen reader support",
              "Better user experience",
              "Built-in browser behavior"
            ]
          }

        ]
      },

      {
        heading: "Use Links for Navigation",

        blocks: [

          {
            type: "paragraph",
            content: "A link should navigate."
          },

          {
            type: "faq",
            items: [
              {
                question: "Buttons for Navigation",
                answer: "Use <a> for navigation and <button> for actions.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<button onclick="location.href='about.html'">\n    About\n</button>`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<a href="about.html">\n    About\n</a>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "This distinction is a common professional development practice."
          }

        ]
      },

      {
        heading: "Use Images Correctly",

        blocks: [

          {
            type: "paragraph",
            content: "Every meaningful image should contain an alternative description."
          },

          {
            type: "faq",
            items: [
              {
                question: "Missing Alt Text",
                answer: "The alt attribute is critical for accessibility.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<img src="logo.png">`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<img src="logo.png" alt="Company Logo">`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "The alt attribute helps:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Screen readers",
              "SEO",
              "Accessibility",
              "Users with slow connections"
            ]
          }

        ]
      },

      {
        heading: "Use Tables Only for Tabular Data",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Tables for Layout",
                answer: "In older websites, tables were used for layouts. Modern websites use semantic tags like <header>, <main>, etc.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<table>\n    <tr>\n        <td>Sidebar</td>\n        <td>Main Content</td>\n    </tr>\n</table>`
                  }
                ]
              }
            ]
          },

          {
            type: "paragraph",
            content: "Tables should only display structured data."
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
        heading: "Use Forms Semantically",

        blocks: [

          {
            type: "paragraph",
            content: "Always associate labels with form fields."
          },

          {
            type: "faq",
            items: [
              {
                question: "Inputs without Labels",
                answer: "Inputs should always have a label to improve accessibility.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<input type="email">`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<label for="email">\n    Email Address\n</label>\n\n<input type="email" id="email">`
                  }
                ]
              }
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
              "Better accessibility",
              "Easier form navigation",
              "Improved usability"
            ]
          }

        ]
      },

      {
        heading: "Prefer Semantic Elements Over Generic Divs",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners overuse <div>."
          },

          {
            type: "faq",
            items: [
              {
                question: "Div Overuse",
                answer: "Use <div> only when no semantic element fits the purpose.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div class="header"></div>\n<div class="nav"></div>\n<div class="content"></div>\n<div class="footer"></div>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<header></header>\n<nav></nav>\n<main></main>\n<footer></footer>`
                  }
                ]
              }
            ]
          }

        ]
      },

      {
        heading: "Avoid Div Soup",

        blocks: [

          {
            type: "paragraph",
            content: "Div Soup refers to excessive nesting of <div> elements."
          },

          {
            type: "faq",
            items: [
              {
                question: "Excessive Nesting",
                answer: "Cleaner code is easier to maintain.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div>\n    <div>\n        <div>\n            <div>\n                Content\n            </div>\n        </div>\n    </div>\n</div>`
                  },
                  {
                    title: "Better",
                    language: "html",
                    content: `<main>\n    <section>\n        Content\n    </section>\n</main>`
                  }
                ]
              }
            ]
          }

        ]
      },

      {
        heading: "Use Landmark Elements",

        blocks: [

          {
            type: "paragraph",
            content: "Landmarks help assistive technologies understand the page."
          },

          {
            type: "paragraph",
            content: "Important landmarks:"
          },

          {
            type: "table",
            headers: [
              "Element",
              "Purpose"
            ],

            rows: [
              ["<header>", "Header area"],
              ["<nav>", "Navigation"],
              ["<main>", "Main content"],
              ["<aside>", "Related content"],
              ["<footer>", "Footer area"]
            ]
          },

          {
            type: "paragraph",
            content: "Screen readers can quickly jump between these landmarks."
          },

          {
            type: "paragraph",
            content: "This significantly improves accessibility."
          }

        ]
      },

      {
        heading: "Use Article and Section Correctly",

        blocks: [

          {
            type: "paragraph",
            content: "Many developers confuse these tags."
          },

          {
            type: "paragraph",
            content: "Use <article> when content can stand alone."
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
              "Forum post",
              "Product review"
            ]
          },

          {
            type: "code",
            language: "html",
            content: `<article>
    <h2>React Tutorial</h2>
    <p>...</p>
</article>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use <section> for grouping related content."
          },

          {
            type: "code",
            language: "html",
            content: `<section>
    <h2>Features</h2>
</section>`
          },

          {
            type: "paragraph",
            content: "A simple rule:"
          },

          {
            type: "output",
            content: [
              "Standalone content → Article",
              "Related grouping → Section"
            ]
          }

        ]
      },

      {
        heading: "Use Figure and Figcaption",

        blocks: [

          {
            type: "paragraph",
            content: "For images, charts, diagrams, or illustrations:"
          },

          {
            type: "code",
            language: "html",
            content: `<figure>
    <img src="graph.png" alt="Sales Graph">

    <figcaption>
        Monthly sales growth
    </figcaption>
</figure>`
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
              "Better accessibility",
              "Clear relationship between image and description"
            ]
          }

        ]
      },

      {
        heading: "Use Time Element for Dates",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Paragraph vs Time Tag",
                answer: "Machines can now understand the actual date when the time tag is used.",
                examples: [
                  {
                    title: "Instead of",
                    language: "html",
                    content: `<p>June 15, 2026</p>`
                  },
                  {
                    title: "Use",
                    language: "html",
                    content: `<time datetime="2026-06-15">\n    June 15, 2026\n</time>`
                  }
                ]
              }
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
              "Blogs",
              "News sites",
              "Events",
              "Calendars"
            ]
          }

        ]
      },

      {
        heading: "Use Address Element Properly",

        blocks: [

          {
            type: "paragraph",
            content: "For contact information:"
          },

          {
            type: "code",
            language: "html",
            content: `<address>
    support@example.com
</address>`
          },

          {
            type: "paragraph",
            content: "Do not use <address> for ordinary addresses or random text."
          },

          {
            type: "paragraph",
            content: "Use it specifically for contact information related to the document or organization."
          }

        ]
      },

      {
        heading: "Accessibility Best Practices",

        blocks: [

          {
            type: "paragraph",
            content: "Semantic HTML automatically improves accessibility."
          },

          {
            type: "paragraph",
            content: "Always:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use proper headings",
              "Use labels with inputs",
              "Use buttons for actions",
              "Use links for navigation",
              "Use alt text for images",
              "Use semantic landmarks",
              "Maintain logical document structure"
            ]
          },

          {
            type: "paragraph",
            content: "Accessibility should be built into HTML itself rather than added later."
          }

        ]
      },

      {
        heading: "SEO Benefits of Semantic HTML",

        blocks: [

          {
            type: "paragraph",
            content: "Search engines use semantic information to understand webpages."
          },

          {
            type: "paragraph",
            content: "Semantic HTML helps search engines identify:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Main content",
              "Headings",
              "Navigation",
              "Articles",
              "Images",
              "Links"
            ]
          },

          {
            type: "paragraph",
            content: "Benefits include:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Better indexing",
              "Better crawlability",
              "Improved search visibility",
              "Richer search understanding"
            ]
          },

          {
            type: "paragraph",
            content: "Semantic HTML alone will not guarantee rankings, but it provides a strong SEO foundation."
          }

        ]
      },

      {
        heading: "Browser Internals: How Browsers Use Semantic HTML",

        blocks: [

          {
            type: "paragraph",
            content: "When the browser reads HTML:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "HTML is parsed.",
              "DOM tree is created.",
              "Accessibility tree is generated.",
              "Search engines analyze structure.",
              "Screen readers interpret landmarks."
            ]
          },

          {
            type: "paragraph",
            content: "Semantic elements contribute to all these processes."
          },

          {
            type: "paragraph",
            content: "This is why semantic HTML is more than just cleaner code—it provides meaningful information to multiple systems."
          }

        ]
      },

      {
        heading: "Common Semantic HTML Mistakes",

        blocks: [

          {
            type: "faq",
            items: [
              {
                question: "Using Divs Everywhere",
                answer: "Use structural tags like `<header>`.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<div class="header"></div>`
                  },
                  {
                    title: "Instead",
                    language: "html",
                    content: `<header></header>`
                  }
                ]
              },
              {
                question: "Using Buttons as Links",
                answer: "Buttons are for actions, links are for navigation.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<button>About Us</button>`
                  },
                  {
                    title: "Instead",
                    language: "html",
                    content: `<a href="about.html">\n    About Us\n</a>`
                  }
                ]
              },
              {
                question: "Skipping Heading Levels",
                answer: "Headings should follow a logical, sequential hierarchy.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<h1>Title</h1>\n<h4>Subtitle</h4>`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<h1>Title</h1>\n<h2>Subtitle</h2>`
                  }
                ]
              },
              {
                question: "Missing Alt Text",
                answer: "Images need alternative text.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<img src="logo.png">`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<img src="logo.png" alt="Company Logo">`
                  }
                ]
              },
              {
                question: "Using Tables for Layout",
                answer: "Avoid table-based layouts completely. Use semantic structure and CSS layout systems instead."
              }
            ]
          }

        ]
      },

      {
        heading: "Modern Industry Example",

        blocks: [

          {
            type: "paragraph",
            content: "A professional webpage structure often looks like:"
          },

          {
            type: "code",
            language: "html",
            content: `<body>

<header>
    Website Header
</header>

<nav>
    Main Navigation
</nav>

<main>

    <article>
        Blog Content
    </article>

    <aside>
        Related Posts
    </aside>

</main>

<footer>
    Contact Information
</footer>

</body>`
          },

          {
            type: "paragraph",
            content: "This structure is:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Semantic",
              "Accessible",
              "SEO-friendly",
              "Maintainable",
              "Industry-standard"
            ]
          }

        ]
      },

      {
        heading: "Best Practices Checklist",

        blocks: [

          {
            type: "paragraph",
            content: "Before publishing a webpage, verify:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Use semantic elements whenever possible",
              "Use proper heading hierarchy",
              "Use links for navigation",
              "Use buttons for actions",
              "Add alt text to images",
              "Label form fields correctly",
              "Use tables only for data",
              "Avoid unnecessary div nesting",
              "Use article and section appropriately",
              "Include landmarks such as header, nav, main, aside, and footer",
              "Write HTML based on meaning, not appearance",
              "Ensure accessibility from the beginning"
            ]
          }

        ]
      },

      {
        heading: "Conclusion",

        blocks: [

          {
            type: "paragraph",
            content: "Semantic HTML is one of the most important skills in frontend development. It makes webpages easier for browsers, search engines, screen readers, and developers to understand. A semantically structured webpage is more accessible, more maintainable, better optimized for SEO, and easier to scale as projects grow."
          },

          {
            type: "paragraph",
            content: "The golden rule of semantic HTML is simple:"
          },

          {
            type: "quote",
            content: "Use the HTML element that best describes the content's meaning."
          },

          {
            type: "paragraph",
            content: "When you follow this principle consistently, your code becomes cleaner, more professional, and aligned with modern web development standards."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 While it's crucial to understand Semantic HTML for accessibility and SEO, don't let it paralyze you during development. The web is full of 'Div Soup', and while it's not ideal, the browser will still render it perfectly fine. If you are ever truly stuck on whether a piece of content is an `<article>`, a `<section>`, or an `<aside>`, falling back to a `<div>` with a descriptive class name is perfectly acceptable. Strive for semantic perfection, but prioritize shipping working code."
          }

        ]
      }
    ]
  },
};

export default semanticHtml;