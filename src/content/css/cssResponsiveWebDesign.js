const cssResponsiveWebDesign = {

/* ===========================
    First Topic : Responsive Design
============================= */
    "css-responsive-design": {
    title: "Responsive Design",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Responsive Design in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine opening a website on a large desktop monitor, a laptop, a tablet, and a smartphone. If the website looks good and functions properly on all these devices without creating separate versions, it is called a responsive website."
          },
          {
            type: "paragraph",
            content: "Responsive Design is a web design approach that allows web pages to automatically adapt their layout, images, typography, and content to different screen sizes, resolutions, and devices."
          },
          {
            type: "paragraph",
            content: "Modern users access websites from thousands of different devices. Therefore, responsive design is no longer optional—it is an essential requirement of modern web development."
          }
        ]
      },
      {
        heading: "What is Responsive Design?",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Design is a technique that makes web pages adjust dynamically according to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Screen size",
              "Device type",
              "Screen resolution",
              "Orientation (Portrait/Landscape)",
              "Available viewport space"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating separate websites for mobile and desktop, a single responsive website serves all devices."
          }
        ]
      },
      {
        heading: "Example",
        blocks: [
          {
            type: "paragraph",
            content: "A desktop layout may look like:"
          },
          {
            type: "output",
            content: [
              "----------------------------------",
              "| Sidebar | Main Content         |",
              "----------------------------------"
            ]
          },
          {
            type: "paragraph",
            content: "The same layout on mobile may become:"
          },
          {
            type: "output",
            content: [
              "----------------",
              "| Main Content |",
              "----------------",
              "| Sidebar      |",
              "----------------"
            ]
          },
          {
            type: "paragraph",
            content: "The content remains the same, but the layout changes to fit the available space."
          }
        ]
      },
      {
        heading: "Why Responsive Design is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive design provides several benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better User Experience: Users can comfortably browse the website regardless of device size.",
              "Mobile-First Internet: More than half of global web traffic comes from mobile devices.",
              "Improved SEO: Search engines prefer mobile-friendly websites.",
              "Easier Maintenance: One website is easier to maintain than separate desktop and mobile versions.",
              "Faster Development: Developers write one codebase instead of multiple versions.",
              "Future Compatibility: Responsive layouts adapt better to new screen sizes and devices."
            ]
          }
        ]
      },
      {
        heading: "Responsive Design vs Adaptive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse responsive and adaptive design."
          },
          {
            type: "table",
            headers: [
              "Responsive Design",
              "Adaptive Design"
            ],
            rows: [
              [
                "Fluid layout",
                "Fixed layouts"
              ],
              [
                "Adjusts continuously",
                "Uses predefined breakpoints"
              ],
              [
                "One flexible design",
                "Multiple static designs"
              ],
              [
                "Easier maintenance",
                "More maintenance"
              ],
              [
                "Preferred today",
                "Less common"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Responsive design is generally the modern industry standard."
          }
        ]
      },
      {
        heading: "The Viewport",
        blocks: [
          {
            type: "paragraph",
            content: "The viewport is the visible area of a webpage on a device."
          },
          {
            type: "paragraph",
            content: "Without proper viewport settings, mobile browsers may display desktop-sized pages."
          },
          {
            type: "paragraph",
            content: "Add this inside the <head> section:"
          },
          {
            type: "code",
            language: "html",
            content: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
          },
          {
            type: "paragraph",
            content: "Explanation"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "width=device-width: Matches the screen width.",
              "initial-scale=1.0: Sets the initial zoom level."
            ]
          },
          {
            type: "paragraph",
            content: "This tag is the foundation of responsive design."
          }
        ]
      },
      {
        heading: "Responsive Design Principles",
        blocks: [
          {
            type: "paragraph",
            content: "Modern responsive websites follow these principles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Flexible Layouts: Layouts should grow and shrink naturally.",
              "Flexible Images: Images should scale with the container.",
              "Flexible Typography: Text should remain readable on every screen size.",
              "Media Queries: Styles should change based on device characteristics.",
              "Mobile-First Development: Design for mobile first, then enhance for larger screens."
            ]
          }
        ]
      },
      {
        heading: "Fixed Width vs Fluid Width",
        blocks: [
          {
            type: "paragraph",
            content: "Fixed Width"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 1200px;
}`
          },
          {
            type: "paragraph",
            content: "Problem: Causes horizontal scrolling on small devices. Doesn't adapt to different screens."
          },
          {
            type: "paragraph",
            content: "Fluid Width"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 90%;
}`
          },
          {
            type: "paragraph",
            content: "Advantages: Adjusts automatically. Works across devices."
          },
          {
            type: "paragraph",
            content: "Responsive design favors fluid widths."
          }
        ]
      },
      {
        heading: "Responsive Units",
        blocks: [
          {
            type: "paragraph",
            content: "Using responsive units is crucial."
          },
          {
            type: "cards",
            items: [
              {
                title: "Percentage (%)",
                description: ".container { width: 80%; } \nRelative to parent element."
              },
              {
                title: "Viewport Width (vw)",
                description: ".box { width: 50vw; } \n50% of viewport width."
              },
              {
                title: "Viewport Height (vh)",
                description: ".box { height: 100vh; } \n100% of viewport height."
              },
              {
                title: "rem",
                description: "h1 { font-size: 2rem; } \nRelative to root font size."
              },
              {
                title: "em",
                description: "p { font-size: 1.2em; } \nRelative to parent font size."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Modern Recommendation: Use %, rem, em, vw, vh. Avoid excessive use of fixed pixels for layouts."
          }
        ]
      },
      {
        heading: "Responsive Images and Videos",
        blocks: [
          {
            type: "paragraph",
            content: "Images must scale properly."
          },
          {
            type: "code",
            language: "css",
            content: `img {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Prevents overflow. Maintains aspect ratio. Works on all screen sizes."
          },
          {
            type: "paragraph",
            content: "Responsive Videos"
          },
          {
            type: "paragraph",
            content: "Videos can overflow their containers."
          },
          {
            type: "code",
            language: "css",
            content: `video {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "This keeps videos responsive."
          }
        ]
      },
      {
        heading: "Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Media Queries are the heart of responsive design. They allow CSS to apply styles based on screen conditions."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "output",
            content: "@media (condition) {\n    CSS Rules\n}"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}`
          },
          {
            type: "paragraph",
            content: "When screen width becomes 768px or smaller, the styles are applied."
          }
        ]
      },
      {
        heading: "Common Breakpoints",
        blocks: [
          {
            type: "paragraph",
            content: "Although every project differs, common breakpoints are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile: 0px – 767px",
              "Tablet: 768px – 1023px",
              "Laptop: 1024px – 1439px",
              "Desktop: 1440px+"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 767px) {
    /* Mobile */
}

@media (min-width: 768px) {
    /* Tablet and above */
}

@media (min-width: 1024px) {
    /* Desktop */
}`
          }
        ]
      },
      {
        heading: "Mobile-First Approach",
        blocks: [
          {
            type: "paragraph",
            content: "Modern developers usually start with mobile layouts."
          },
          {
            type: "paragraph",
            content: "Step 1: Write mobile styles first."
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Step 2: Enhance for larger screens."
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Step 3: Enhance further."
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 1200px) {
    .card {
        width: 33.33%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Why Mobile First? Smaller CSS initially. Better performance. Easier scalability. Preferred by modern frameworks."
          }
        ]
      },
      {
        heading: "Responsive Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox naturally supports responsiveness."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 300px;
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Automatic wrapping. Flexible sizing. Minimal media queries."
          }
        ]
      },
      {
        heading: "Responsive Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Grid provides powerful responsive layouts."
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
    gap: 20px;
}`
          },
          {
            type: "paragraph",
            content: "This automatically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Creates columns when space exists.",
              "Removes columns when space is limited.",
              "Adjusts without extra media queries."
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most powerful responsive techniques in modern CSS."
          }
        ]
      },
      {
        heading: "Using minmax() for Responsive Layouts",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials stop at basic Grid. Professional developers often use:"
          },
          {
            type: "code",
            language: "css",
            content: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
          },
          {
            type: "paragraph",
            content: "Breakdown"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "250px: Minimum column width.",
              "1fr: Maximum flexible width."
            ]
          },
          {
            type: "paragraph",
            content: "Result: Cards never become too small. Layout remains responsive automatically."
          },
          {
            type: "paragraph",
            content: "This technique is widely used in production websites."
          }
        ]
      },
      {
        heading: "Responsive Typography",
        blocks: [
          {
            type: "paragraph",
            content: "Text should adapt to different screens."
          },
          {
            type: "paragraph",
            content: "Traditional Method"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 3rem;
}`
          },
          {
            type: "paragraph",
            content: "May appear too large on small devices."
          },
          {
            type: "paragraph",
            content: "Better Method"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: clamp(
        1.8rem,
        4vw,
        4rem
    );
}`
          },
          {
            type: "paragraph",
            content: "How clamp() Works"
          },
          {
            type: "output",
            content: "clamp(minimum, preferred, maximum)"
          },
          {
            type: "paragraph",
            content: "Example: clamp(1.8rem, 4vw, 4rem)"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never smaller than 1.8rem",
              "Scales with viewport",
              "Never larger than 4rem"
            ]
          },
          {
            type: "paragraph",
            content: "This modern technique is still missing from many beginner tutorials."
          }
        ]
      },
      {
        heading: "Orientation-Based Design",
        blocks: [
          {
            type: "paragraph",
            content: "Devices can be:"
          },
          {
            type: "output",
            content: [
              "Portrait",
              "|",
              "|",
              "|",
              "",
              "Landscape",
              "-------",
              "-------"
            ]
          },
          {
            type: "paragraph",
            content: "Media query:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (orientation: landscape) {
    body {
        background: lightyellow;
    }
}`
          },
          {
            type: "paragraph",
            content: "Useful for tablets and mobile devices."
          }
        ]
      },
      {
        heading: "Responsive Navigation Example",
        blocks: [
          {
            type: "paragraph",
            content: "Desktop:"
          },
          {
            type: "output",
            content: "Home About Services Contact"
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "output",
            content: "☰ Menu"
          },
          {
            type: "paragraph",
            content: "Media Query:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
}`
          },
          {
            type: "paragraph",
            content: "This forms the basis of mobile navigation systems."
          }
        ]
      },
      {
        heading: "Container Queries (Modern Responsive CSS)",
        blocks: [
          {
            type: "paragraph",
            content: "One limitation of media queries: They respond to screen size."
          },
          {
            type: "paragraph",
            content: "But sometimes we want components to respond to their own container size."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.card-container {
    container-type: inline-size;
}
@container (min-width: 500px) {
    .card {
        display: flex;
    }
}`
          },
          {
            type: "paragraph",
            content: "Why This Is Important"
          },
          {
            type: "paragraph",
            content: "Traditional responsive design:"
          },
          {
            type: "output",
            content: "Screen Size → Layout Changes"
          },
          {
            type: "paragraph",
            content: "Container Queries:"
          },
          {
            type: "output",
            content: "Component Size → Layout Changes"
          },
          {
            type: "paragraph",
            content: "This is one of the most significant modern CSS advancements and is still missing from many introductory tutorials."
          }
        ]
      },
      {
        heading: "Common Responsive Design Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Using Fixed Widths",
                answer: "Using `width: 1200px;` forces horizontal scrolling on smaller screens. Better: use `width: 100%;` and `max-width: 1200px;` so the container shrinks when necessary."
              },
              {
                question: "Forgetting Viewport Meta Tag",
                answer: "Without `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`, mobile browsers will try to display the desktop version of your site, making everything tiny and unreadable."
              },
              {
                question: "Excessive Media Queries",
                answer: "Too many breakpoints create maintenance problems. Rely on flexible layouts (Flexbox/Grid) first, and use media queries only when the layout breaks."
              },
              {
                question: "Not Testing Real Devices",
                answer: "A layout may work in browser developer tools but fail on actual devices. Always test on real phones and tablets."
              },
              {
                question: "Oversized Images",
                answer: "Loading a 4K image on a mobile device slows performance significantly. Always ensure images are optimized and responsive."
              }
            ]
          }
        ]
      },
      {
        heading: "Mini Project: Responsive Card Layout",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    padding: 20px;
    background: lightgray;
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
              "3 columns on large screens.",
              "2 columns on medium screens.",
              "1 column on small screens."
            ]
          },
          {
            type: "paragraph",
            content: "No additional media queries required."
          }
        ]
      },
      {
        heading: "Best Practices for Responsive Design",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use the viewport meta tag.",
              "Follow a mobile-first approach.",
              "Prefer Flexbox and Grid.",
              "Use responsive units (%, vw, vh, rem).",
              "Optimize images and media.",
              "Test multiple screen sizes.",
              "Avoid unnecessary breakpoints.",
              "Use clamp() for typography.",
              "Use auto-fit and minmax() in Grid.",
              "Explore Container Queries for modern component-based design."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Design is the practice of creating websites that automatically adapt to different devices, screen sizes, and orientations. It relies on flexible layouts, responsive units, scalable images, media queries, Flexbox, Grid, and mobile-first development principles."
          },
          {
            type: "paragraph",
            content: "Modern responsive development goes beyond traditional media queries. Techniques such as clamp(), minmax(), auto-fit, auto-fill, and Container Queries allow developers to build highly adaptive interfaces with less code and better maintainability."
          },
          {
            type: "paragraph",
            content: "A truly responsive website is not merely one that fits on a smaller screen—it is one that provides an optimal experience, performance, readability, and usability across every device, from smartphones to ultra-wide desktop displays."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A very common mistake is setting `height: 100vh` on mobile layouts. Due to the mobile browser's address bar expanding and collapsing, `100vh` often causes layout jumps or scrollbars. For modern responsive layouts, investigate the newer `dvh` (Dynamic Viewport Height) unit to solve this problem."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Viewport
============================= */
    "css-viewport": {
    title: "Viewport",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Viewport in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest challenges in modern web development is making websites look good on every device. A webpage may appear perfect on a desktop monitor but completely broken on a smartphone. The concept that makes responsive design possible is the Viewport."
          },
          {
            type: "paragraph",
            content: "The viewport is one of the most important concepts in CSS and Responsive Web Design. Understanding it properly helps developers create layouts that adapt seamlessly to mobile phones, tablets, laptops, desktops, smart TVs, foldable devices, and future screen technologies."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you will learn what a viewport is, why it is important, how browsers use it, viewport meta tags, viewport units (vw, vh, vmin, vmax), modern dynamic viewport units, common mistakes, and professional techniques used in real-world websites."
          }
        ]
      },
      {
        heading: "What is a Viewport?",
        blocks: [
          {
            type: "paragraph",
            content: "A viewport is the visible area of a webpage that the user can currently see inside their browser window."
          },
          {
            type: "paragraph",
            content: "Think of a webpage as a large canvas. The viewport acts like a window through which users view a portion of that canvas."
          },
          {
            type: "output",
            content: [
              "Entire Webpage",
              "+---------------------------------------+",
              "|                                       |",
              "|     Large Page Content                |",
              "|                                       |",
              "|     +-----------------------+         |",
              "|     |      Viewport         |         |",
              "|     |  Visible Area Only    |         |",
              "|     +-----------------------+         |",
              "|                                       |",
              "+---------------------------------------+"
            ]
          },
          {
            type: "paragraph",
            content: "Anything outside the viewport requires scrolling to become visible."
          }
        ]
      },
      {
        heading: "Why Viewport is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Without understanding the viewport, responsive design becomes nearly impossible."
          },
          {
            type: "paragraph",
            content: "The viewport determines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How much content is visible.",
              "How layouts adjust on different devices.",
              "How viewport units are calculated.",
              "How media queries behave.",
              "How images and videos scale.",
              "How mobile browsers render pages."
            ]
          },
          {
            type: "paragraph",
            content: "Modern responsive websites rely heavily on viewport concepts."
          }
        ]
      },
      {
        heading: "Viewport on Different Devices",
        blocks: [
          {
            type: "paragraph",
            content: "The viewport size changes depending on the device."
          },
          {
            type: "table",
            headers: [
              "Device",
              "Dimensions",
              "Example"
            ],
            rows: [
              [
                "Mobile",
                "Width: Small, Height: Tall",
                "390px × 844px"
              ],
              [
                "Tablet",
                "Width: Medium, Height: Medium",
                "768px × 1024px"
              ],
              [
                "Laptop",
                "Width: Large, Height: Medium",
                "1366px × 768px"
              ],
              [
                "Desktop",
                "Width: Very Large, Height: Large",
                "1920px × 1080px"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Since every device has a different viewport size, responsive layouts must adapt dynamically."
          }
        ]
      },
      {
        heading: "The Viewport Meta Tag",
        blocks: [
          {
            type: "paragraph",
            content: "When smartphones first appeared, most websites were designed only for desktops. Mobile browsers tried to display desktop pages by shrinking them. This often made websites appear tiny and unreadable."
          },
          {
            type: "paragraph",
            content: "To solve this problem, browsers introduced the viewport meta tag."
          },
          {
            type: "code",
            language: "html",
            content: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
          },
          {
            type: "paragraph",
            content: "This is one of the most important lines in responsive web development."
          }
        ]
      },
      {
        heading: "Understanding the Viewport Meta Tag",
        blocks: [
          {
            type: "paragraph",
            content: "width=device-width"
          },
          {
            type: "paragraph",
            content: "Sets the viewport width equal to the device width."
          },
          {
            type: "paragraph",
            content: "For example: Phone width = 390px, Viewport width = 390px."
          },
          {
            type: "paragraph",
            content: "Without this setting: Phone width = 390px, Browser may assume: Viewport width = 980px. This causes unwanted zooming."
          },
          {
            type: "paragraph",
            content: "initial-scale=1.0"
          },
          {
            type: "paragraph",
            content: "Defines the initial zoom level when the page loads."
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "1.0 = 100% zoom",
              "0.5 = 50% zoom",
              "2.0 = 200% zoom"
            ]
          },
          {
            type: "paragraph",
            content: "Usually: initial-scale=1.0 is recommended."
          }
        ]
      },
      {
        heading: "What Happens Without a Viewport Meta Tag?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a phone has 390px width. But the browser assumes 980px viewport."
          },
          {
            type: "paragraph",
            content: "Result: Desktop layout squeezed into mobile screen."
          },
          {
            type: "paragraph",
            content: "Users must zoom manually. The website becomes difficult to read and navigate."
          }
        ]
      },
      {
        heading: "CSS Viewport Units",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides units that directly reference the viewport size. These units are extremely useful for responsive design."
          },
          {
            type: "paragraph",
            content: "Viewport Width (vw)"
          },
          {
            type: "paragraph",
            content: "Definition: 1vw equals 1% of viewport width."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    width: 50vw;
}`
          },
          {
            type: "paragraph",
            content: "If viewport width is 1000px, Then: 50vw = 500px."
          },
          {
            type: "paragraph",
            content: "Viewport Height (vh)"
          },
          {
            type: "paragraph",
            content: "Definition: 1vh equals 1% of viewport height."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    height: 100vh;
}`
          },
          {
            type: "paragraph",
            content: "If viewport height is 900px, Then: 100vh = 900px. The section fills the entire screen."
          },
          {
            type: "paragraph",
            content: "vmin"
          },
          {
            type: "paragraph",
            content: "Definition: 1vmin equals 1% of the smaller viewport dimension."
          },
          {
            type: "paragraph",
            content: "Example: Viewport: 1200 × 800. Smaller value = 800. 1vmin = 8px."
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 5vmin;
}`
          },
          {
            type: "paragraph",
            content: "Text scales according to the smaller screen dimension."
          },
          {
            type: "paragraph",
            content: "vmax"
          },
          {
            type: "paragraph",
            content: "Definition: 1vmax equals 1% of the larger viewport dimension."
          },
          {
            type: "paragraph",
            content: "Example: Viewport: 1200 × 800. Larger value = 1200. 1vmax = 12px."
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `.box {
    width: 30vmax;
}`
          },
          {
            type: "paragraph",
            content: "Useful for certain creative layouts."
          }
        ]
      },
      {
        heading: "Viewport Units Comparison",
        blocks: [
          {
            type: "table",
            headers: [
              "Unit",
              "Relative To"
            ],
            rows: [
              [
                "vw",
                "Viewport Width"
              ],
              [
                "vh",
                "Viewport Height"
              ],
              [
                "vmin",
                "Smaller Dimension"
              ],
              [
                "vmax",
                "Larger Dimension"
              ]
            ]
          }
        ]
      },
      {
        heading: "Practical Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Fullscreen Hero Section"
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    height: 100vh;
}`
          },
          {
            type: "paragraph",
            content: "Creates a section that fills the entire screen."
          },
          {
            type: "paragraph",
            content: "Responsive Typography"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 5vw;
}`
          },
          {
            type: "paragraph",
            content: "The heading grows and shrinks with screen width."
          },
          {
            type: "paragraph",
            content: "Responsive Card"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 80vw;
}`
          },
          {
            type: "paragraph",
            content: "Card width adjusts automatically."
          }
        ]
      },
      {
        heading: "The Problem with Traditional 100vh",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials stop here, but modern web development has introduced a major challenge."
          },
          {
            type: "paragraph",
            content: "On mobile devices:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browser Address Bar",
              "Navigation Bar",
              "Dynamic Toolbars"
            ]
          },
          {
            type: "paragraph",
            content: "can appear and disappear."
          },
          {
            type: "paragraph",
            content: "As a result: height: 100vh; may become larger than the actual visible area."
          },
          {
            type: "paragraph",
            content: "This causes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Extra scrolling",
              "Layout jumps",
              "Cut-off content"
            ]
          }
        ]
      },
      {
        heading: "Modern Dynamic Viewport Units",
        blocks: [
          {
            type: "paragraph",
            content: "To solve the mobile viewport problem, browsers introduced new units."
          },
          {
            type: "paragraph",
            content: "Small Viewport Height (svh)"
          },
          {
            type: "code",
            language: "css",
            content: `height: 100svh;`
          },
          {
            type: "paragraph",
            content: "Represents: Smallest possible viewport height. Useful when browser UI is visible."
          },
          {
            type: "paragraph",
            content: "Large Viewport Height (lvh)"
          },
          {
            type: "code",
            language: "css",
            content: `height: 100lvh;`
          },
          {
            type: "paragraph",
            content: "Represents: Largest possible viewport height. Useful when browser UI is hidden."
          },
          {
            type: "paragraph",
            content: "Dynamic Viewport Height (dvh)"
          },
          {
            type: "code",
            language: "css",
            content: `height: 100dvh;`
          },
          {
            type: "paragraph",
            content: "Represents: Current visible viewport height. Updates dynamically as browser bars appear and disappear."
          },
          {
            type: "paragraph",
            content: "Modern Recommendation"
          },
          {
            type: "paragraph",
            content: "Instead of: height: 100vh; Use: height: 100dvh; for mobile-friendly fullscreen layouts."
          },
          {
            type: "paragraph",
            content: "This is a modern professional technique still missing from many beginner tutorials."
          }
        ]
      },
      {
        heading: "Visual Viewport vs Layout Viewport",
        blocks: [
          {
            type: "paragraph",
            content: "This is an advanced concept that many tutorials skip. Browsers actually maintain two viewport types."
          },
          {
            type: "comparison",
            leftTitle: "Layout Viewport",
            leftItems: [
              "Used for:",
              "Page layout",
              "CSS calculations",
              "Media queries"
            ],
            rightTitle: "Visual Viewport",
            rightItems: [
              "Represents:",
              "Actual visible area"
            ]
          },
          {
            type: "paragraph",
            content: "When users zoom: Layout Viewport → Same. Visual Viewport → Changes."
          },
          {
            type: "paragraph",
            content: "Understanding this difference helps explain certain mobile layout behaviors."
          }
        ]
      },
      {
        heading: "Viewport and Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Media queries use viewport dimensions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    body {
        background: lightblue;
    }
}`
          },
          {
            type: "paragraph",
            content: "If viewport width becomes 768px or less, the rule applies. This is the foundation of responsive design."
          }
        ]
      },
      {
        heading: "Viewport and Flexbox",
        blocks: [
          {
            type: "paragraph",
            content: "Flexbox works beautifully with viewport units."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 90vw;
}`
          },
          {
            type: "paragraph",
            content: "The container automatically adjusts according to screen width."
          }
        ]
      },
      {
        heading: "Viewport and Grid",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Grid also benefits from viewport sizing."
          },
          {
            type: "code",
            language: "css",
            content: `.grid {
    width: 95vw;
}`
          },
          {
            type: "paragraph",
            content: "Combined with: repeat(auto-fit, minmax()), it creates highly responsive layouts."
          }
        ]
      },
      {
        heading: "Combining Viewport Units with clamp()",
        blocks: [
          {
            type: "paragraph",
            content: "Modern responsive typography often uses:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: clamp(
        2rem,
        5vw,
        4rem
    );
}`
          },
          {
            type: "paragraph",
            content: "Benefits"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prevents text from becoming too small.",
              "Prevents text from becoming too large.",
              "Scales smoothly."
            ]
          },
          {
            type: "paragraph",
            content: "Many professional websites use this technique."
          }
        ]
      },
      {
        heading: "Common Viewport Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Forgetting the Meta Tag",
                answer: "Without `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`, mobile browsers will render your site as a tiny, zoomed-out desktop page."
              },
              {
                question: "Using Only Pixels",
                answer: "Using `width: 1200px;` breaks layouts on smaller screens. Use percentages or `vw` (like `width: 90vw;`) for fluid responsiveness."
              },
              {
                question: "Overusing vh",
                answer: "Using `height: 100vh;` often causes content to be cut off by mobile browser toolbars. It is better to use `height: 100dvh;`."
              },
              {
                question: "Extremely Large Text",
                answer: "Setting `font-size: 15vw;` might look okay on a phone, but it will be gigantically unusable on a 4K monitor. Always bound viewport typography using `clamp()`."
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
            content: "Viewport units are commonly used for:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Hero Sections",
                description: "height: 100dvh;"
              },
              {
                title: "Landing Pages",
                description: "width: 100vw;"
              },
              {
                title: "Responsive Typography",
                description: "font-size: 4vw;"
              },
              {
                title: "Fullscreen Menus",
                description: "width: 100vw;\nheight: 100dvh;"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Mobile Apps Built with Web Technologies: Viewport units help simulate native app layouts."
          }
        ]
      },
      {
        heading: "Mini Project: Responsive Hero Section",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<section class="hero">
    <h1>Welcome</h1>
</section>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: lightblue;
}

.hero h1 {
    font-size: clamp(
        2rem,
        5vw,
        5rem
    );
}`
          },
          {
            type: "paragraph",
            content: "Result: Fullscreen section. Responsive text. Mobile-friendly behavior. Modern viewport support."
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
              "Always include the viewport meta tag.",
              "Use responsive viewport units when appropriate.",
              "Prefer dvh over vh for mobile fullscreen layouts.",
              "Combine viewport units with clamp().",
              "Test on real devices.",
              "Avoid fixed widths whenever possible.",
              "Use media queries alongside viewport units.",
              "Understand the difference between visual and layout viewports.",
              "Build mobile-first layouts.",
              "Consider foldable devices and dynamic screen environments."
            ]
          }
        ]
      },
      {
        heading: "Viewport on Foldable and Multi-Screen Devices (Advanced)",
        blocks: [
          {
            type: "paragraph",
            content: "Modern devices are evolving beyond traditional phones. Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Foldable phones",
              "Dual-screen devices",
              "Large tablets",
              "Future mixed-reality displays"
            ]
          },
          {
            type: "paragraph",
            content: "Viewport dimensions can change instantly when a device is folded or unfolded. A layout that relies heavily on fixed dimensions may break."
          },
          {
            type: "paragraph",
            content: "Responsive layouts built using vw, vh, dvh, Grid, Flexbox, and clamp() adapt much more effectively to these new device categories. This is becoming increasingly important in modern web development."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The viewport is the visible area of a webpage within the browser window and serves as the foundation of responsive web design. It determines how content is displayed across different devices and directly influences media queries, viewport units, responsive layouts, and mobile rendering behavior."
          },
          {
            type: "paragraph",
            content: "CSS provides viewport-based units such as vw, vh, vmin, and vmax, while modern browsers now support svh, lvh, and dvh to solve mobile viewport issues caused by dynamic browser interfaces. Understanding viewport concepts, viewport meta tags, responsive units, and modern dynamic viewport sizing techniques enables developers to build websites that adapt smoothly across smartphones, tablets, desktops, foldable devices, and future screen technologies."
          },
          {
            type: "paragraph",
            content: "Mastering the viewport is one of the most important steps toward becoming an expert in responsive web development."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While `100vw` seems like a great way to make an element full-width, be careful! On Windows and some other OS environments, `100vw` includes the width of the vertical scrollbar, causing unwanted horizontal scrolling. It is almost always safer to use `width: 100%;` instead."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Media Queries
============================= */
    "css-media-queries": {
    title: "Media Queries",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Media Queries in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites are viewed on phones, tablets, laptops, desktops, TVs, smartwatches, foldable devices, and even car displays. A layout that looks perfect on a desktop may become unusable on a mobile phone. To solve this problem, CSS provides Media Queries."
          },
          {
            type: "paragraph",
            content: "Media Queries allow developers to apply different CSS rules based on the characteristics of a device or viewport, such as screen width, height, orientation, resolution, and user preferences."
          },
          {
            type: "paragraph",
            content: "They are one of the most important technologies behind Responsive Web Design (RWD)."
          }
        ]
      },
      {
        heading: "What are Media Queries?",
        blocks: [
          {
            type: "paragraph",
            content: "A Media Query is a CSS technique that applies styles only when certain conditions are met."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}`
          },
          {
            type: "paragraph",
            content: "The styles inside this block will only be applied when the viewport width is 768px or less."
          }
        ]
      },
      {
        heading: "Why Media Queries are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Without Media Queries:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop layouts break on mobile devices.",
              "Text may become too small.",
              "Images may overflow containers.",
              "Navigation menus may become unusable.",
              "User experience suffers."
            ]
          },
          {
            type: "paragraph",
            content: "With Media Queries:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layouts adapt to different screen sizes.",
              "Content remains readable.",
              "Navigation becomes mobile-friendly.",
              "Images scale properly.",
              "Websites look professional on all devices."
            ]
          }
        ]
      },
      {
        heading: "Basic Syntax",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `@media media-type and (condition) {
    CSS Rules
}`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media screen and (max-width: 600px) {
    h1 {
        font-size: 24px;
    }
}`
          },
          {
            type: "paragraph",
            content: "Breakdown"
          },
          {
            type: "table",
            headers: [
              "Part",
              "Description"
            ],
            rows: [
              [
                "@media",
                "Starts a media query"
              ],
              [
                "screen",
                "Media type"
              ],
              [
                "and",
                "Combines conditions"
              ],
              [
                "(max-width: 600px)",
                "Condition"
              ],
              [
                "{ }",
                "CSS rules to apply"
              ]
            ]
          }
        ]
      },
      {
        heading: "Simple Example",
        blocks: [
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
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    color: blue;
}

@media (max-width: 600px) {
    h1 {
        color: red;
    }
}`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: [
              "Desktop → Blue heading",
              "Mobile → Red heading"
            ]
          }
        ]
      },
      {
        heading: "Media Types",
        blocks: [
          {
            type: "paragraph",
            content: "Media types specify the category of device."
          },
          {
            type: "paragraph",
            content: "1. screen"
          },
          {
            type: "paragraph",
            content: "For screens such as phones, tablets, and monitors."
          },
          {
            type: "code",
            language: "css",
            content: `@media screen {
    body {
        background: white;
    }
}`
          },
          {
            type: "paragraph",
            content: "2. print"
          },
          {
            type: "paragraph",
            content: "Applied when printing a page."
          },
          {
            type: "code",
            language: "css",
            content: `@media print {
    body {
        color: black;
        background: white;
    }
}`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reports",
              "Invoices",
              "Documentation",
              "PDFs"
            ]
          },
          {
            type: "paragraph",
            content: "3. all"
          },
          {
            type: "paragraph",
            content: "Default media type."
          },
          {
            type: "code",
            language: "css",
            content: `@media all {
    p {
        color: black;
    }
}`
          },
          {
            type: "paragraph",
            content: "Applies everywhere."
          }
        ]
      },
      {
        heading: "Width-Based Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "The most commonly used media queries."
          },
          {
            type: "paragraph",
            content: "max-width"
          },
          {
            type: "paragraph",
            content: "Styles apply when width is less than or equal to a value."
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Width ≤ 768px"
          },
          {
            type: "paragraph",
            content: "min-width"
          },
          {
            type: "paragraph",
            content: "Styles apply when width is greater than or equal to a value."
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {
    .container {
        width: 80%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Width ≥ 768px"
          }
        ]
      },
      {
        heading: "Combining min-width and max-width",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 600px) and (max-width: 900px) {
    body {
        background: lightgray;
    }
}`
          },
          {
            type: "paragraph",
            content: "Meaning: 600px ≤ Width ≤ 900px"
          }
        ]
      },
      {
        heading: "Common Breakpoints",
        blocks: [
          {
            type: "paragraph",
            content: "Although every project differs, these breakpoints are widely used."
          },
          {
            type: "code",
            language: "css",
            content: `/* Mobile */
@media (max-width: 576px) { }

/* Tablet */
@media (min-width: 577px) and (max-width: 768px) { }

/* Small Laptop */
@media (min-width: 769px) and (max-width: 992px) { }

/* Desktop */
@media (min-width: 993px) and (max-width: 1200px) { }

/* Large Desktop */
@media (min-width: 1201px) { }`
          }
        ]
      },
      {
        heading: "Mobile-First Approach",
        blocks: [
          {
            type: "paragraph",
            content: "Modern developers prefer Mobile-First Design. Start with styles for small devices and enhance them for larger screens."
          },
          {
            type: "paragraph",
            content: "Base CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Larger screens:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {
    .container {
        width: 80%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better performance",
              "Cleaner code",
              "Easier maintenance",
              "Recommended by modern web standards"
            ]
          }
        ]
      },
      {
        heading: "Desktop-First Approach",
        blocks: [
          {
            type: "paragraph",
            content: "Older technique."
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 80%;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Works fine, but Mobile-First is generally preferred."
          }
        ]
      },
      {
        heading: "Orientation Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Detect device orientation."
          },
          {
            type: "paragraph",
            content: "Portrait"
          },
          {
            type: "code",
            language: "css",
            content: `@media (orientation: portrait) {
    body {
        background: lightblue;
    }
}`
          },
          {
            type: "paragraph",
            content: "Landscape"
          },
          {
            type: "code",
            language: "css",
            content: `@media (orientation: landscape) {
    body {
        background: lightgreen;
    }
}`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile apps",
              "Dashboards",
              "Games",
              "Image galleries"
            ]
          }
        ]
      },
      {
        heading: "Height-Based Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Target viewport height."
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-height: 700px) {
    .hero {
        height: auto;
    }
}`
          },
          {
            type: "paragraph",
            content: "Useful when screen height is limited."
          }
        ]
      },
      {
        heading: "Resolution Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Target screen density."
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-resolution: 2dppx) {
    img {
        image-rendering: auto;
    }
}`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Retina displays",
              "High-density screens",
              "High-quality graphics"
            ]
          }
        ]
      },
      {
        heading: "Aspect Ratio Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Target the relationship between width and height."
          },
          {
            type: "code",
            language: "css",
            content: `@media (aspect-ratio: 16/9) {
    body {
        background: lightyellow;
    }
}`
          },
          {
            type: "paragraph",
            content: "Wide Screens"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-aspect-ratio: 16/9) {
    .video {
        width: 80%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Tall Screens"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-aspect-ratio: 4/3) {
    .video {
        width: 100%;
    }
}`
          }
        ]
      },
      {
        heading: "Media Query Operators",
        blocks: [
          {
            type: "paragraph",
            content: "and"
          },
          {
            type: "paragraph",
            content: "Combines conditions."
          },
          {
            type: "code",
            language: "css",
            content: `@media screen and (max-width: 768px) {
}`
          },
          {
            type: "paragraph",
            content: "not"
          },
          {
            type: "paragraph",
            content: "Negates a query."
          },
          {
            type: "code",
            language: "css",
            content: `@media not print {
}`
          },
          {
            type: "paragraph",
            content: "only"
          },
          {
            type: "paragraph",
            content: "Prevents older browsers from applying styles incorrectly."
          },
          {
            type: "code",
            language: "css",
            content: `@media only screen and (max-width: 768px) {
}`
          },
          {
            type: "paragraph",
            content: "Rarely needed today."
          }
        ]
      },
      {
        heading: "Responsive Navigation Example",
        blocks: [
          {
            type: "paragraph",
            content: "Desktop:"
          },
          {
            type: "code",
            language: "css",
            content: `.nav {
    display: flex;
}`
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 768px) {
    .nav {
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
              "Desktop → Horizontal menu",
              "Mobile → Vertical menu"
            ]
          }
        ]
      },
      {
        heading: "Responsive Grid Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}`
          },
          {
            type: "paragraph",
            content: "Tablet:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 900px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}`
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }
}`
          }
        ]
      },
      {
        heading: "Responsive Typography",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 40px;
}`
          },
          {
            type: "paragraph",
            content: "Mobile:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 600px) {
    h1 {
        font-size: 28px;
    }
}`
          },
          {
            type: "paragraph",
            content: "This keeps text readable."
          }
        ]
      },
      {
        heading: "Responsive Images",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `img {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "Additional control:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 600px) {
    img {
        border-radius: 10px;
    }
}`
          }
        ]
      },
      {
        heading: "Multiple Media Queries",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `@media (max-width: 1200px) {
}

@media (max-width: 992px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}`
          },
          {
            type: "paragraph",
            content: "Each breakpoint can modify the layout progressively."
          }
        ]
      },
      {
        heading: "Modern Range Syntax (Media Queries Level 4)",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials still focus only on older syntax, but modern CSS supports cleaner range expressions."
          },
          {
            type: "paragraph",
            content: "Traditional:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 600px) and (max-width: 900px) {
}`
          },
          {
            type: "paragraph",
            content: "Modern:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (600px <= width <= 900px) {
}`
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (width >= 768px) {
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
              "Easier to read",
              "Similar to mathematical expressions",
              "Recommended in modern CSS"
            ]
          }
        ]
      },
      {
        heading: "User Preference Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most powerful modern features."
          },
          {
            type: "paragraph",
            content: "Dark Mode Detection"
          },
          {
            type: "code",
            language: "css",
            content: `@media (prefers-color-scheme: dark) {
    body {
        background: #121212;
        color: white;
    }
}`
          },
          {
            type: "paragraph",
            content: "Automatically matches the user's OS theme."
          },
          {
            type: "paragraph",
            content: "Reduced Motion"
          },
          {
            type: "paragraph",
            content: "Some users are sensitive to animations."
          },
          {
            type: "code",
            language: "css",
            content: `@media (prefers-reduced-motion: reduce) {
    * {
        animation: none;
        transition: none;
    }
}`
          },
          {
            type: "paragraph",
            content: "Improves accessibility."
          },
          {
            type: "paragraph",
            content: "High Contrast Preference"
          },
          {
            type: "code",
            language: "css",
            content: `@media (prefers-contrast: more) {
    button {
        border: 3px solid black;
    }
}`
          },
          {
            type: "paragraph",
            content: "Enhances readability."
          }
        ]
      },
      {
        heading: "Media Queries vs Container Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials stop at Media Queries, but modern CSS introduces Container Queries."
          },
          {
            type: "comparison",
            leftTitle: "Media Query",
            leftItems: [
              "Responds to viewport size.",
              "@media (max-width: 768px)",
              "Media Queries answer: \"How large is the screen?\""
            ],
            rightTitle: "Container Query",
            rightItems: [
              "Responds to parent container size.",
              "@container (max-width: 500px)",
              "Container Queries answer: \"How large is this component?\""
            ]
          },
          {
            type: "paragraph",
            content: "Modern component-based design increasingly uses both."
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
                question: "1. Too Many Breakpoints",
                answer: "Avoid chaining highly specific breakpoints like `@media (max-width: 1199px)`, `@media (max-width: 1188px)`, etc. Use meaningful breakpoints that correspond to typical device sizes."
              },
              {
                question: "2. Ignoring Mobile Devices",
                answer: "Avoid setting fixed widths like `width: 1200px;`. Instead, use `max-width: 100%;` to ensure elements scale down naturally."
              },
              {
                question: "3. Overwriting Styles Repeatedly",
                answer: "Failing to adopt a Mobile-First or Desktop-First pattern can lead to writing the same styles over and over. Keep media query structure organized."
              },
              {
                question: "4. Using Device-Specific Breakpoints",
                answer: "Avoid targeting specific models like `@media (width: 390px)`. Devices change constantly; use content-based breakpoints (where the design visually breaks) instead."
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
            content: "Media Queries are supported by all modern browsers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Firefox",
              "Edge",
              "Safari",
              "Opera",
              "Mobile Browsers"
            ]
          },
          {
            type: "paragraph",
            content: "Advanced features such as prefers-color-scheme, prefers-reduced-motion, and modern range syntax are also widely supported in current browsers."
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
              "Use Mobile-First design",
              "Prefer min-width strategy",
              "Use relative units where possible",
              "Test on multiple screen sizes",
              "Keep breakpoints meaningful",
              "Support dark mode when appropriate",
              "Respect accessibility preferences",
              "Avoid excessive media queries",
              "Combine Flexbox/Grid with Media Queries"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Media Queries are the foundation of responsive web design. They allow CSS to adapt layouts, typography, navigation, images, and components to different screen sizes and device characteristics."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Media Queries are and their basic syntax",
              "Media types",
              "min-width and max-width",
              "Breakpoints and Mobile-First design",
              "Orientation queries",
              "Height and resolution queries",
              "Aspect ratio queries and Query operators",
              "Responsive layouts",
              "Modern range syntax",
              "Dark mode and accessibility preferences",
              "Media Queries vs Container Queries",
              "Best practices and common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering Media Queries enables you to build websites that look professional and function correctly across virtually every device, making them one of the most essential tools in modern CSS development."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Modern native CSS nesting makes writing media queries much cleaner. You can now nest the `@media` block directly inside the selector it modifies, keeping all your component logic in one place rather than scrolling to the bottom of the file."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Responsive Images
============================= */
    "css-responsive-images": {
    title: "Responsive Images",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Responsive Images in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Images are one of the most important elements of modern websites. They improve visual appeal, communicate information quickly, and enhance user experience. However, an image that looks perfect on a desktop can overflow, appear too large, load slowly, or become distorted on smaller devices."
          },
          {
            type: "paragraph",
            content: "This is where Responsive Images come into play."
          },
          {
            type: "paragraph",
            content: "Responsive images automatically adapt to different screen sizes, resolutions, and device capabilities, ensuring that images remain visually appealing, load efficiently, and improve website performance."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you'll learn everything about responsive images—from basic CSS techniques to advanced modern approaches used by professional developers."
          }
        ]
      },
      {
        heading: "What are Responsive Images?",
        blocks: [
          {
            type: "paragraph",
            content: "A responsive image is an image that adjusts itself according to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Screen size",
              "Viewport dimensions",
              "Device resolution",
              "Container size",
              "Network conditions"
            ]
          },
          {
            type: "paragraph",
            content: "The goal is to display the most appropriate image without breaking the layout or wasting bandwidth."
          }
        ]
      },
      {
        heading: "Why Responsive Images are Important",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Without responsive images",
            leftItems: [
              "Images may overflow their containers.",
              "Mobile users may download unnecessarily large files.",
              "Page loading speed becomes slower.",
              "Layouts may break on smaller devices.",
              "User experience suffers."
            ],
            rightTitle: "With responsive images",
            rightItems: [
              "Images scale properly.",
              "Faster page loading.",
              "Better mobile experience.",
              "Improved SEO.",
              "Reduced bandwidth usage.",
              "Better Core Web Vitals scores."
            ]
          }
        ]
      },
      {
        heading: "The Simplest Responsive Image",
        blocks: [
          {
            type: "paragraph",
            content: "The most common responsive image technique is:"
          },
          {
            type: "code",
            language: "css",
            content: `img {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "How It Works"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "max-width: 100%; Prevents the image from becoming wider than its parent container.",
              "height: auto; Maintains the original aspect ratio."
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="mountain.jpg" alt="Mountain">`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large screens → Image displays normally.",
              "Small screens → Image shrinks proportionally.",
              "No distortion occurs."
            ]
          },
          {
            type: "paragraph",
            content: "This is the foundation of responsive image design."
          }
        ]
      },
      {
        heading: "Understanding Why width: 100% is Different",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners use:"
          },
          {
            type: "code",
            language: "css",
            content: `img {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "While this works, it behaves differently."
          },
          {
            type: "comparison",
            leftTitle: "width: 100%",
            leftItems: [
              "The image always stretches to fill its container.",
              "Even if the original image is smaller, it may become blurry."
            ],
            rightTitle: "max-width: 100%",
            rightItems: [
              "The image only shrinks when necessary.",
              "This is usually the preferred approach."
            ]
          }
        ]
      },
      {
        heading: "Responsive Images Inside Containers",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="card">
    <img src="nature.jpg" alt="Nature">
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 300px;
}

.card img {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "The image automatically fits within the card."
          },
          {
            type: "paragraph",
            content: "Making Images Fit the Entire Viewport Width"
          },
          {
            type: "paragraph",
            content: "Sometimes hero banners should cover the screen width."
          },
          {
            type: "code",
            language: "css",
            content: `.hero img {
    width: 100%;
    height: auto;
}`
          }
        ]
      },
      {
        heading: "Responsive Background Images",
        blocks: [
          {
            type: "paragraph",
            content: "Background images also need responsiveness."
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    background-image: url("banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}`
          },
          {
            type: "paragraph",
            content: "background-size: cover"
          },
          {
            type: "paragraph",
            content: "The image: Covers the entire area. Maintains aspect ratio. May crop parts of the image."
          },
          {
            type: "paragraph",
            content: "background-size: contain"
          },
          {
            type: "paragraph",
            content: "The image: Fully visible. Maintains aspect ratio. May leave empty space."
          }
        ]
      },
      {
        heading: "Understanding Aspect Ratio",
        blocks: [
          {
            type: "paragraph",
            content: "An image's aspect ratio is: Width ÷ Height"
          },
          {
            type: "table",
            headers: [
              "Resolution",
              "Ratio"
            ],
            rows: [
              [
                "1920 × 1080",
                "16:9"
              ],
              [
                "1280 × 720",
                "16:9"
              ],
              [
                "1000 × 1000",
                "1:1"
              ],
              [
                "1200 × 1600",
                "3:4"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Maintaining aspect ratio prevents image distortion."
          },
          {
            type: "paragraph",
            content: "The aspect-ratio Property"
          },
          {
            type: "paragraph",
            content: "Modern CSS provides:"
          },
          {
            type: "code",
            language: "css",
            content: `.image-box {
    aspect-ratio: 16 / 9;
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Prevents layout shifts. Reserves image space before loading. Improves user experience."
          }
        ]
      },
      {
        heading: "The object-fit Property",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important modern image properties."
          },
          {
            type: "paragraph",
            content: "object-fit: cover"
          },
          {
            type: "code",
            language: "css",
            content: `img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "Behavior: Fills entire area. Maintains aspect ratio. Crops extra portions. Perfect for: Cards, Galleries, Hero sections"
          },
          {
            type: "paragraph",
            content: "object-fit: contain"
          },
          {
            type: "paragraph",
            content: "Behavior: Entire image remains visible. No cropping. Empty space may appear."
          },
          {
            type: "paragraph",
            content: "object-fit: fill"
          },
          {
            type: "paragraph",
            content: "Image stretches. Usually not recommended."
          },
          {
            type: "paragraph",
            content: "object-fit: none"
          },
          {
            type: "paragraph",
            content: "Original image size remains unchanged."
          },
          {
            type: "paragraph",
            content: "object-fit: scale-down"
          },
          {
            type: "paragraph",
            content: "Chooses the smaller result between none and contain."
          }
        ]
      },
      {
        heading: "The object-position Property",
        blocks: [
          {
            type: "paragraph",
            content: "Controls which part of the image remains visible."
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
            content: "Examples"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Top Focus: object-position: top;",
              "Bottom Focus: object-position: bottom;",
              "Left Focus: object-position: left;",
              "Custom Position: object-position: 20% 40%;"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for portraits and product images."
          }
        ]
      },
      {
        heading: "Responsive Image Galleries",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Grid Gallery"
          },
          {
            type: "paragraph",
            content: "Modern approach:"
          },
          {
            type: "code",
            language: "css",
            content: `.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}
.gallery img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "This automatically adapts to screen size."
          }
        ]
      },
      {
        heading: "HTML Responsive Images Using srcset",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials focus mainly on CSS. Professional websites also use HTML responsive image features."
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
alt="Landscape">`
          },
          {
            type: "paragraph",
            content: "Browser automatically selects the most appropriate image."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster loading. Lower bandwidth usage. Better performance."
          },
          {
            type: "paragraph",
            content: "Using sizes with srcset"
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
sizes="
(max-width: 600px) 100vw,
(max-width: 1000px) 50vw,
33vw"
alt="Landscape">`
          },
          {
            type: "paragraph",
            content: "The browser calculates the optimal image size before downloading. This is how modern websites optimize images."
          }
        ]
      },
      {
        heading: "The picture Element",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes completely different images are needed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<picture>
    <source
        media="(max-width: 768px)"
        srcset="mobile.jpg">

    <source
        media="(min-width: 769px)"
        srcset="desktop.jpg">

    <img src="desktop.jpg" alt="Banner">
</picture>`
          },
          {
            type: "paragraph",
            content: "Result: Mobile users receive mobile image. Desktop users receive desktop image."
          },
          {
            type: "paragraph",
            content: "Art Direction in Responsive Images"
          },
          {
            type: "paragraph",
            content: "A concept rarely explained in beginner tutorials. Sometimes shrinking the same image isn't enough."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop: Wide landscape photo",
              "Mobile: Zoomed portrait crop"
            ]
          },
          {
            type: "paragraph",
            content: "The <picture> element enables this. This technique is called Art Direction."
          }
        ]
      },
      {
        heading: "High-Density Displays (Retina Screens)",
        blocks: [
          {
            type: "paragraph",
            content: "Modern devices often have very dense screens."
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
srcset="
image.jpg 1x,
image@2x.jpg 2x"
alt="Photo">`
          },
          {
            type: "paragraph",
            content: "Retina devices automatically load the higher-resolution image."
          }
        ]
      },
      {
        heading: "Preventing Layout Shift (CLS)",
        blocks: [
          {
            type: "paragraph",
            content: "A major performance issue occurs when images load after the page structure."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="photo.jpg">`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "html",
            content: `<img
src="photo.jpg"
width="1200"
height="800"
alt="Photo">`
          },
          {
            type: "paragraph",
            content: "The browser reserves space before the image loads."
          },
          {
            type: "paragraph",
            content: "Benefits: Better user experience, Improved Core Web Vitals, Better SEO rankings. Many tutorials overlook this crucial optimization."
          }
        ]
      },
      {
        heading: "Lazy Loading Images",
        blocks: [
          {
            type: "paragraph",
            content: "Modern browsers support lazy loading."
          },
          {
            type: "code",
            language: "html",
            content: `<img
src="photo.jpg"
loading="lazy"
alt="Photo">`
          },
          {
            type: "paragraph",
            content: "Benefits: Faster page load. Reduced bandwidth. Better performance. Images load only when needed."
          }
        ]
      },
      {
        heading: "Responsive Images Using clamp()",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS allows fluid image sizing."
          },
          {
            type: "code",
            language: "css",
            content: `img {
    width: clamp(200px, 50vw, 800px);
}`
          },
          {
            type: "paragraph",
            content: "Meaning: Minimum: 200px, Preferred: 50vw, Maximum: 800px."
          },
          {
            type: "paragraph",
            content: "This creates smoother responsiveness than abrupt breakpoints."
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
                question: "1. Fixed Width Images",
                answer: "Using `width: 1000px;` will force the image to overflow and cause horizontal scrolling on mobile devices."
              },
              {
                question: "2. Missing height: auto",
                answer: "Using `width: 100%;` without `height: auto;` or `object-fit` can result in vertically stretched and distorted images."
              },
              {
                question: "3. Oversized Images",
                answer: "Uploading a 5000 × 4000 pixel image for a 300 × 200 pixel display wastes massive amounts of bandwidth and slows down the page."
              },
              {
                question: "4. Ignoring Retina Displays",
                answer: "Providing only 1x resolution images may cause them to appear blurry on modern high-density screens (like newer iPhones or MacBooks)."
              },
              {
                question: "5. Not Using Lazy Loading",
                answer: "Large image-heavy pages without `loading=\"lazy\"` force the user to download all images at once, causing terrible initial load times."
              }
            ]
          }
        ]
      },
      {
        heading: "Responsive Images vs Responsive Background Images",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Image Element",
              "Background Image"
            ],
            rows: [
              [
                "SEO Friendly",
                "Yes",
                "No"
              ],
              [
                "Accessible",
                "Yes",
                "No"
              ],
              [
                "Can Use Alt Text",
                "Yes",
                "No"
              ],
              [
                "Responsive via srcset",
                "Yes",
                "No"
              ],
              [
                "Decorative Use",
                "Limited",
                "Excellent"
              ],
              [
                "Content Image",
                "Best Choice",
                "Not Recommended"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Rule of thumb:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Important content → Use <img>",
              "Decorative visuals → Use background images"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive Images ensure that images look good, load efficiently, and adapt to every device. By combining CSS techniques such as max-width, height: auto, object-fit, Grid layouts, Flexbox, Media Queries, and modern HTML features like srcset, sizes, and the <picture> element, developers can build fast, visually appealing, and highly optimized websites."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What responsive images are and why they are important",
              "max-width: 100% vs width: 100%",
              "height: auto and Aspect ratios",
              "Responsive background images",
              "object-fit and object-position",
              "Responsive galleries using Flexbox and Grid",
              "HTML attributes: srcset, sizes, and <picture> for Art direction",
              "Retina image support",
              "Layout shift prevention and Lazy loading",
              "Modern responsive image techniques using clamp()",
              "Best practices and common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering responsive images is essential for modern web development because images often account for the largest portion of a webpage's download size. Proper image responsiveness not only improves appearance but also significantly boosts performance, accessibility, and user experience."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A pro tip: Always explicitly set the `width` and `height` attributes on your `<img>` tags in HTML, even if you are styling them with CSS. This allows the browser to calculate the image's aspect ratio immediately, reserving the correct amount of space on the page before the image finishes downloading, effectively eliminating Cumulative Layout Shift (CLS)."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Responsive Videos
============================= */
    "css-responsive-videos": {
    title: "Responsive Videos",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Responsive Videos in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Videos are one of the most engaging elements on modern websites. However, a video that looks perfect on a desktop screen may overflow, become distorted, or leave unwanted spaces on mobile devices. Responsive videos solve this problem by automatically adapting to different screen sizes while maintaining their aspect ratio and visual quality."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you'll learn how responsive videos work, why they are important, and the modern techniques used by professional developers to create flexible video layouts."
          }
        ]
      },
      {
        heading: "What Are Responsive Videos?",
        blocks: [
          {
            type: "paragraph",
            content: "A responsive video automatically adjusts its size according to the available screen space without losing its proportions."
          },
          {
            type: "paragraph",
            content: "A responsive video should:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fit different screen sizes",
              "Maintain its aspect ratio",
              "Avoid horizontal scrolling",
              "Prevent distortion",
              "Provide a good viewing experience on all devices"
            ]
          },
          {
            type: "paragraph",
            content: "Non-Responsive Video"
          },
          {
            type: "code",
            language: "html",
            content: `<video width="800" controls>
    <source src="movie.mp4">
</video>`
          },
          {
            type: "paragraph",
            content: "Problem: Looks fine on desktop, Overflows on mobile screens, Causes layout issues."
          }
        ]
      },
      {
        heading: "Why Responsive Videos Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Modern users access websites through:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smartphones",
              "Tablets",
              "Laptops",
              "Desktop computers",
              "Smart TVs"
            ]
          },
          {
            type: "paragraph",
            content: "A fixed-size video cannot work properly across all these devices."
          },
          {
            type: "paragraph",
            content: "Benefits of responsive videos:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better user experience",
              "Improved mobile friendliness",
              "Faster page adaptation",
              "Professional appearance",
              "Better SEO performance",
              "Reduced layout breakage"
            ]
          }
        ]
      },
      {
        heading: "Making HTML5 Videos Responsive",
        blocks: [
          {
            type: "paragraph",
            content: "The simplest technique is using percentages."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<video class="responsive-video" controls>
    <source src="movie.mp4">
</video>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.responsive-video {
    width: 100%;
    height: auto;
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
              "Video fills available width",
              "Height adjusts automatically",
              "Aspect ratio remains intact"
            ]
          }
        ]
      },
      {
        heading: "Understanding width: 100%",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `video {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "The video expands to occupy the full width of its parent container."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <video controls>
        <source src="movie.mp4">
    </video>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    width: 600px;
}

video {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Video width becomes: 600px."
          },
          {
            type: "paragraph",
            content: "If container width changes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop → 600px",
              "Tablet → 450px",
              "Mobile → 300px"
            ]
          },
          {
            type: "paragraph",
            content: "Video automatically scales."
          }
        ]
      },
      {
        heading: "Using max-width for Better Control",
        blocks: [
          {
            type: "paragraph",
            content: "Many professional websites prefer:"
          },
          {
            type: "code",
            language: "css",
            content: `video {
    max-width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "Why? Suppose video is originally 640px × 360px. If container is larger (e.g., 1000px):"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Using only width: 100%; The video may stretch and lose quality.",
              "Using max-width: 100%; prevents unnecessary enlargement."
            ]
          }
        ]
      },
      {
        heading: "Responsive Embedded Videos",
        blocks: [
          {
            type: "paragraph",
            content: "Most websites embed videos from YouTube, Vimeo, Dailymotion, Wistia."
          },
          {
            type: "paragraph",
            content: "These platforms use an <iframe>."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<iframe
src="https://www.youtube.com/embed/video-id">
</iframe>`
          },
          {
            type: "paragraph",
            content: "Making iframes responsive requires special handling."
          }
        ]
      },
      {
        heading: "Traditional Responsive iframe Method",
        blocks: [
          {
            type: "paragraph",
            content: "For years, developers used the \"padding hack\"."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="video-wrapper">
    <iframe
    src="https://www.youtube.com/embed/video-id">
    </iframe>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
}

.video-wrapper iframe {
    position: absolute;
    width: 100%;
    height: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Why 56.25%? Most videos use 16:9. Calculation: 9 ÷ 16 × 100 = 56.25%. This preserves the aspect ratio."
          }
        ]
      },
      {
        heading: "Modern Approach: aspect-ratio Property",
        blocks: [
          {
            type: "paragraph",
            content: "CSS now provides a much cleaner solution."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<iframe
class="video"
src="https://www.youtube.com/embed/video-id">
</iframe>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.video {
    width: 100%;
    aspect-ratio: 16 / 9;
}`
          },
          {
            type: "paragraph",
            content: "This automatically maintains proportions."
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
              "Easier maintenance",
              "No positioning tricks",
              "Better readability"
            ]
          },
          {
            type: "paragraph",
            content: "This is the modern industry-standard solution."
          }
        ]
      },
      {
        heading: "Responsive YouTube Video Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div class="video-container">
    <iframe
        src="https://www.youtube.com/embed/video-id"
        allowfullscreen>
    </iframe>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.video-container iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
}`
          },
          {
            type: "paragraph",
            content: "Result: Mobile-friendly, Responsive, Clean design."
          }
        ]
      },
      {
        heading: "Different Video Aspect Ratios",
        blocks: [
          {
            type: "paragraph",
            content: "Not all videos are 16:9."
          },
          {
            type: "cards",
            items: [
              {
                title: "4:3 Video",
                description: "video { aspect-ratio: 4 / 3; } \nCommon in older videos."
              },
              {
                title: "1:1 Video",
                description: "video { aspect-ratio: 1 / 1; } \nUsed for social media content."
              },
              {
                title: "9:16 Video",
                description: "video { aspect-ratio: 9 / 16; } \nUsed for: Instagram Reels, YouTube Shorts, TikTok."
              }
            ]
          }
        ]
      },
      {
        heading: "Controlling Video Object Fitting",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes video dimensions and container dimensions differ. Use object-fit."
          },
          {
            type: "code",
            language: "css",
            content: `video {
    object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "cover: Fills entire container, Crops excess portions."
          },
          {
            type: "paragraph",
            content: "contain: Entire video visible, No cropping, Empty space may appear."
          },
          {
            type: "paragraph",
            content: "fill: Stretches video, Can distort proportions, Usually avoided."
          }
        ]
      },
      {
        heading: "Responsive Background Videos",
        blocks: [
          {
            type: "paragraph",
            content: "Many landing pages use full-screen background videos."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<video autoplay muted loop>
    <source src="video.mp4">
</video>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `video {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "Result: Covers entire screen, Maintains aspect ratio, Creates modern hero sections."
          }
        ]
      },
      {
        heading: "Fullscreen Hero Video Section",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<section class="hero">
    <video autoplay muted loop>
        <source src="hero.mp4">
    </video>

    <h1>Welcome</h1>
</section>`
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    position: relative;
    height: 100vh;
}

.hero video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}`
          },
          {
            type: "paragraph",
            content: "This pattern is widely used on premium websites."
          }
        ]
      },
      {
        heading: "Responsive Videos Inside Flexbox",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <video controls>
        <source src="movie.mp4">
    </video>
</div>`
          },
          {
            type: "code",
            language: "css",
            content: `.container {
    display: flex;
}

video {
    width: 100%;
    height: auto;
}`
          },
          {
            type: "paragraph",
            content: "The video automatically adjusts within the flex layout."
          }
        ]
      },
      {
        heading: "Responsive Videos Inside Grid",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

video {
    width: 100%;
    aspect-ratio: 16 / 9;
}`
          },
          {
            type: "paragraph",
            content: "Perfect for video galleries."
          }
        ]
      },
      {
        heading: "Creating a Responsive Video Gallery",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="gallery">
    <video controls></video>
    <video controls></video>
    <video controls></video>
</div>`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.gallery video {
    width: 100%;
    aspect-ratio: 16 / 9;
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Automatically adapts to screen size. No media queries required. Modern responsive layout."
          }
        ]
      },
      {
        heading: "Lazy Loading Videos",
        blocks: [
          {
            type: "paragraph",
            content: "One topic many beginner tutorials skip is performance optimization. Videos are heavy resources."
          },
          {
            type: "paragraph",
            content: "For embedded videos:"
          },
          {
            type: "code",
            language: "html",
            content: `<iframe
loading="lazy"
src="https://www.youtube.com/embed/video-id">
</iframe>`
          },
          {
            type: "paragraph",
            content: "Benefits: Faster page load. Better performance. Improved Core Web Vitals. Reduced bandwidth usage."
          }
        ]
      },
      {
        heading: "Responsive Videos and Mobile Data",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers consider network conditions."
          },
          {
            type: "paragraph",
            content: "Strategies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use compressed videos",
              "Serve lower resolutions on mobile",
              "Lazy-load embedded videos",
              "Avoid autoplay with sound"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<video controls preload="metadata">`
          },
          {
            type: "paragraph",
            content: "Using preload=\"metadata\" loads only essential information initially. This improves loading speed significantly."
          }
        ]
      },
      {
        heading: "Accessibility Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Videos should be accessible to all users."
          },
          {
            type: "paragraph",
            content: "Add Captions"
          },
          {
            type: "code",
            language: "html",
            content: `<video controls>
    <source src="movie.mp4">

    <track
        src="captions.vtt"
        kind="captions"
        srclang="en">
</video>`
          },
          {
            type: "paragraph",
            content: "Benefits: Helps hearing-impaired users. Improves accessibility compliance."
          },
          {
            type: "paragraph",
            content: "Provide Controls"
          },
          {
            type: "code",
            language: "html",
            content: `<video controls>`
          },
          {
            type: "paragraph",
            content: "Avoid hiding controls unless absolutely necessary."
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
                question: "1. Using Fixed Width",
                answer: "Using `video { width: 900px; }` prevents the video from shrinking on mobile devices, causing horizontal scrolling. Use `width: 100%;` instead."
              },
              {
                question: "2. Forgetting Height Auto",
                answer: "Using `width: 100%;` with a fixed height like `height: 300px;` distorts the video's aspect ratio. Use `height: auto;` or `aspect-ratio: 16/9;`."
              },
              {
                question: "3. Ignoring Aspect Ratio",
                answer: "Setting an iframe to `width: 100%;` without setting an aspect ratio or using the padding hack will cause it to collapse to a tiny sliver or distort."
              },
              {
                question: "4. Autoplaying Sound",
                answer: "Avoid `<video autoplay>`. Modern browsers (Chrome, Safari) actively block autoplaying videos that contain unmuted audio. Always use `<video autoplay muted>` if you want it to play automatically."
              }
            ]
          }
        ]
      },
      {
        heading: "Modern Responsive Video Pattern",
        blocks: [
          {
            type: "paragraph",
            content: "A practical professional setup:"
          },
          {
            type: "code",
            language: "html",
            content: `<iframe
class="responsive-video"
src="https://www.youtube.com/embed/video-id"
loading="lazy"
allowfullscreen>
</iframe>`
          },
          {
            type: "code",
            language: "css",
            content: `.responsive-video {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
}`
          },
          {
            type: "paragraph",
            content: "This solution is: Responsive, Lightweight, Modern, Easy to maintain, Production-ready."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Responsive videos ensure that video content looks great across desktops, tablets, and mobile devices. For HTML5 videos, the most common solution is using width: 100% and height: auto. For embedded videos such as YouTube and Vimeo, modern developers use the aspect-ratio property to maintain proper dimensions without complex CSS hacks."
          },
          {
            type: "paragraph",
            content: "Key concepts covered in this tutorial:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What responsive videos are and why responsiveness matters",
              "Responsive HTML5 videos using width/height",
              "Responsive embedded iframes using padding hack or aspect-ratio",
              "Different video aspect ratios (16:9, 4:3, 1:1, 9:16)",
              "object-fit for video scaling",
              "Background videos and Hero section videos",
              "Flexbox and Grid video layouts and responsive galleries",
              "Lazy loading, preload, and mobile optimization techniques",
              "Accessibility best practices (captions and controls)",
              "Common mistakes and solutions"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering responsive videos is an important step toward building professional, mobile-friendly, and performance-optimized websites that deliver an excellent viewing experience on every device."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While the `aspect-ratio` CSS property is the modern standard, if you need to support very old browsers (like Internet Explorer 11), you will still need to use the \"padding-bottom hack\" for responsive iframes. For all modern development, stick to `aspect-ratio`."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Mobile First Design
============================= */
    "css-mobile-first-design": {
    title: "Mobile First Design",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Mobile First Design",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web development is no longer centered around desktop computers. Today, a significant portion of web traffic comes from smartphones and tablets. As a result, developers need a design approach that prioritizes smaller screens before expanding to larger devices. This approach is known as Mobile First Design."
          },
          {
            type: "paragraph",
            content: "Mobile First Design has become one of the most important principles in responsive web development because it helps create faster, cleaner, and more user-friendly websites."
          },
          {
            type: "paragraph",
            content: "In this tutorial, you'll learn what Mobile First Design is, why it matters, how it works, how to implement it using CSS, and the professional techniques used by modern developers."
          }
        ]
      },
      {
        heading: "What is Mobile First Design?",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile First Design is a web design strategy where developers design and build the website for mobile devices first, then progressively enhance it for tablets, laptops, and desktops."
          },
          {
            type: "paragraph",
            content: "Instead of starting with a large desktop layout and shrinking it down, Mobile First Design starts with the smallest screen and gradually adds features as screen size increases."
          },
          {
            type: "comparison",
            leftTitle: "Traditional Desktop-First Approach",
            leftItems: [
              "Desktop Design",
              "↓",
              "Tablet Design",
              "↓",
              "Mobile Design"
            ],
            rightTitle: "Mobile-First Approach",
            rightItems: [
              "Mobile Design",
              "↓",
              "Tablet Design",
              "↓",
              "Desktop Design"
            ]
          },
          {
            type: "paragraph",
            content: "Mobile First focuses on essential content first and adds enhancements later."
          }
        ]
      },
      {
        heading: "Why Mobile First Design Became Important",
        blocks: [
          {
            type: "paragraph",
            content: "Years ago, most users accessed websites through desktop computers."
          },
          {
            type: "paragraph",
            content: "Today:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smartphones dominate web traffic.",
              "Users browse websites on various screen sizes.",
              "Search engines prioritize mobile-friendly websites.",
              "Mobile devices often have slower networks and less processing power."
            ]
          },
          {
            type: "paragraph",
            content: "As a result, websites designed only for desktops can provide poor experiences on mobile devices."
          }
        ]
      },
      {
        heading: "Core Philosophy of Mobile First Design",
        blocks: [
          {
            type: "paragraph",
            content: "The Mobile First philosophy can be summarized as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content First",
              "Performance First",
              "Accessibility First",
              "Enhancement Later"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of asking:"
          },
          {
            type: "output",
            content: "How can I make my desktop website fit on mobile?"
          },
          {
            type: "paragraph",
            content: "Mobile First asks:"
          },
          {
            type: "output",
            content: "What is the most important content users need on mobile?"
          },
          {
            type: "paragraph",
            content: "This mindset creates cleaner and more effective designs."
          }
        ]
      },
      {
        heading: "Benefits of Mobile First Design",
        blocks: [
          {
            type: "paragraph",
            content: "1. Better User Experience"
          },
          {
            type: "paragraph",
            content: "Mobile users receive a layout specifically designed for small screens. Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easier navigation",
              "Better readability",
              "Larger touch targets",
              "Reduced clutter"
            ]
          },
          {
            type: "paragraph",
            content: "2. Faster Websites"
          },
          {
            type: "paragraph",
            content: "Mobile First naturally encourages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smaller CSS files",
              "Optimized images",
              "Reduced unnecessary content"
            ]
          },
          {
            type: "paragraph",
            content: "This improves loading speed."
          },
          {
            type: "paragraph",
            content: "3. Improved SEO"
          },
          {
            type: "paragraph",
            content: "Search engines use mobile friendliness as an important ranking factor. A responsive mobile-friendly website can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Improve rankings",
              "Reduce bounce rates",
              "Increase engagement"
            ]
          },
          {
            type: "paragraph",
            content: "4. Cleaner Design"
          },
          {
            type: "paragraph",
            content: "Since screen space is limited, developers focus on essentials. This often results in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simpler interfaces",
              "Better visual hierarchy",
              "Improved usability"
            ]
          },
          {
            type: "paragraph",
            content: "5. Easier Scalability"
          },
          {
            type: "paragraph",
            content: "Adding features to larger screens is usually easier than removing them from a desktop-first design."
          }
        ]
      },
      {
        heading: "Understanding Progressive Enhancement",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile First Design relies heavily on a concept called Progressive Enhancement."
          },
          {
            type: "paragraph",
            content: "Progressive Enhancement means:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Build the basic experience first.",
              "Ensure it works everywhere.",
              "Add advanced features when possible."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Mobile Layout",
              "Logo",
              "Menu",
              "Content",
              "Footer",
              "",
              "Tablet Layout",
              "Logo",
              "Menu",
              "Content + Sidebar",
              "Footer",
              "",
              "Desktop Layout",
              "Logo + Navigation",
              "Content + Sidebar",
              "Extra Features",
              "Footer"
            ]
          },
          {
            type: "paragraph",
            content: "The experience becomes richer as screen size increases."
          }
        ]
      },
      {
        heading: "Mobile First vs Desktop First",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Mobile First",
            leftItems: [
              "body { font-size: 16px; }",
              "@media (min-width: 768px) { body { font-size: 18px; } }",
              "Start with mobile styles.",
              "Enhance for larger screens."
            ],
            rightTitle: "Desktop First",
            rightItems: [
              "body { font-size: 18px; }",
              "@media (max-width: 768px) { body { font-size: 16px; } }",
              "Start with desktop styles.",
              "Reduce features for smaller screens."
            ]
          },
          {
            type: "table",
            headers: [
              "Mobile First",
              "Desktop First"
            ],
            rows: [
              [
                "Starts small",
                "Starts large"
              ],
              [
                "Progressive enhancement",
                "Graceful degradation"
              ],
              [
                "Better performance",
                "Often heavier"
              ],
              [
                "Modern standard",
                "Older approach"
              ],
              [
                "Easier responsive scaling",
                "Harder responsive scaling"
              ]
            ]
          }
        ]
      },
      {
        heading: "Mobile First CSS Structure",
        blocks: [
          {
            type: "paragraph",
            content: "The basic structure is:"
          },
          {
            type: "code",
            language: "css",
            content: `/* Mobile Styles */

body {
    margin: 0;
}

.container {
    padding: 15px;
}

/* Tablet */

@media (min-width: 768px) {

}

/* Desktop */

@media (min-width: 1024px) {

}`
          },
          {
            type: "paragraph",
            content: "Notice: min-width is used instead of: max-width"
          },
          {
            type: "paragraph",
            content: "This is the hallmark of Mobile First CSS."
          }
        ]
      },
      {
        heading: "Understanding min-width Media Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile First"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    width: 100%;
}

@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}

@media (min-width: 1200px) {
    .card {
        width: 33.33%;
    }
}`
          },
          {
            type: "paragraph",
            content: "Screen widths:"
          },
          {
            type: "output",
            content: [
              "0px–767px      → 100%",
              "768px–1199px   → 50%",
              "1200px+        → 33.33%"
            ]
          },
          {
            type: "paragraph",
            content: "Each larger breakpoint enhances the layout."
          }
        ]
      },
      {
        heading: "Building a Mobile First Layout",
        blocks: [
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
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
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box {
    padding: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Mobile layout:"
          },
          {
            type: "output",
            content: [
              "1",
              "2",
              "3"
            ]
          },
          {
            type: "paragraph",
            content: "Tablet Enhancement"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {

    .container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .box {
        width: 48%;
    }

}`
          },
          {
            type: "paragraph",
            content: "Tablet layout:"
          },
          {
            type: "output",
            content: [
              "1   2",
              "3"
            ]
          },
          {
            type: "paragraph",
            content: "Desktop Enhancement"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 1200px) {

    .box {
        width: 31%;
    }

}`
          },
          {
            type: "paragraph",
            content: "Desktop layout:"
          },
          {
            type: "output",
            content: [
              "1   2   3"
            ]
          }
        ]
      },
      {
        heading: "Mobile First Navigation Example",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile"
          },
          {
            type: "code",
            language: "css",
            content: `nav ul {
    display: flex;
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
              "Home",
              "About",
              "Contact",
              "Blog"
            ]
          },
          {
            type: "paragraph",
            content: "Desktop"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {

    nav ul {
        flex-direction: row;
    }

}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Home About Contact Blog"
            ]
          },
          {
            type: "paragraph",
            content: "The navigation grows naturally with screen size."
          }
        ]
      },
      {
        heading: "Mobile First Typography",
        blocks: [
          {
            type: "paragraph",
            content: "Text should also scale progressively."
          },
          {
            type: "paragraph",
            content: "Mobile"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: 1.8rem;
}`
          },
          {
            type: "paragraph",
            content: "Tablet"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {

    h1 {
        font-size: 2.5rem;
    }

}`
          },
          {
            type: "paragraph",
            content: "Desktop"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 1200px) {

    h1 {
        font-size: 3.5rem;
    }

}`
          },
          {
            type: "paragraph",
            content: "This improves readability across devices."
          }
        ]
      },
      {
        heading: "Mobile First Images",
        blocks: [
          {
            type: "paragraph",
            content: "Images should adapt to screen size."
          },
          {
            type: "code",
            language: "css",
            content: `img {
    max-width: 100%;
    height: auto;
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
              "Prevents overflow",
              "Maintains aspect ratio",
              "Works on all devices"
            ]
          }
        ]
      },
      {
        heading: "Mobile First Using CSS Grid",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile"
          },
          {
            type: "code",
            language: "css",
            content: `.grid {
    display: grid;
    grid-template-columns: 1fr;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            type: "paragraph",
            content: "Tablet"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) {

    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1  2",
              "3"
            ]
          },
          {
            type: "paragraph",
            content: "Desktop"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 1200px) {

    .grid {
        grid-template-columns: repeat(3, 1fr);
    }

}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1  2  3"
            ]
          }
        ]
      },
      {
        heading: "Common Mobile First Breakpoints",
        blocks: [
          {
            type: "paragraph",
            content: "Although breakpoints vary by project, common ranges are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile: 0px – 767px",
              "Tablet: 768px – 1023px",
              "Laptop: 1024px – 1199px",
              "Desktop: 1200px+"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 768px) { }

@media (min-width: 1024px) { }

@media (min-width: 1200px) { }`
          }
        ]
      },
      {
        heading: "Designing for Touch Screens",
        blocks: [
          {
            type: "paragraph",
            content: "A topic often overlooked by beginner tutorials is touch interaction."
          },
          {
            type: "paragraph",
            content: "Desktop users: Mouse, Keyboard"
          },
          {
            type: "paragraph",
            content: "Mobile users: Finger Touch"
          },
          {
            type: "paragraph",
            content: "Buttons should be larger."
          },
          {
            type: "paragraph",
            content: "Poor:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    width: 20px;
    height: 20px;
}`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    min-width: 44px;
    min-height: 44px;
}`
          },
          {
            type: "paragraph",
            content: "This improves usability significantly."
          }
        ]
      },
      {
        heading: "Mobile First Performance Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers optimize mobile devices first. Common practices:"
          },
          {
            type: "paragraph",
            content: "Load Smaller Images"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="small.jpg">`
          },
          {
            type: "paragraph",
            content: "Lazy Loading"
          },
          {
            type: "code",
            language: "html",
            content: `<img
src="image.jpg"
loading="lazy">`
          },
          {
            type: "paragraph",
            content: "Reduce Heavy Animations"
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "output",
            content: `animation:
complexAnimation 10s infinite;`
          },
          {
            type: "paragraph",
            content: "on low-powered devices."
          },
          {
            type: "paragraph",
            content: "Minimize Unused CSS: Only include styles that are necessary."
          }
        ]
      },
      {
        heading: "Content Prioritization",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important Mobile First concepts is content prioritization."
          },
          {
            type: "paragraph",
            content: "Ask: What does the user need first?"
          },
          {
            type: "paragraph",
            content: "Example: Mobile users may care about:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Product information",
              "Price",
              "Contact button"
            ]
          },
          {
            type: "paragraph",
            content: "Less important:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large banners",
              "Decorative content",
              "Secondary widgets"
            ]
          },
          {
            type: "paragraph",
            content: "This principle improves usability dramatically."
          }
        ]
      },
      {
        heading: "Mobile First and Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile First naturally supports accessibility. Focus on:"
          },
          {
            type: "paragraph",
            content: "Readable Text"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-size: 16px;
}`
          },
          {
            type: "paragraph",
            content: "Adequate Spacing"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    padding: 12px 20px;
}`
          },
          {
            type: "paragraph",
            content: "Touch-Friendly Controls: Avoid tiny clickable areas."
          },
          {
            type: "paragraph",
            content: "High Contrast"
          },
          {
            type: "code",
            language: "css",
            content: `color: #000;
background: #fff;`
          },
          {
            type: "paragraph",
            content: "This improves readability for all users."
          }
        ]
      },
      {
        heading: "Modern Mobile First Technique: Content-Based Breakpoints",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials teach fixed device breakpoints only. Professional developers increasingly use content-based breakpoints."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tablet = 768px",
              "Desktop = 1200px"
            ]
          },
          {
            type: "paragraph",
            content: "Ask: When does the layout break?"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@media (min-width: 840px) {
}`
          },
          {
            type: "paragraph",
            content: "If the design looks good until 840px, use 840px."
          },
          {
            type: "paragraph",
            content: "This creates more flexible and future-proof layouts."
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
                question: "1. Designing Desktop First",
                answer: "Wrong workflow: Desktop -> Tablet -> Mobile. Better workflow: Mobile -> Tablet -> Desktop."
              },
              {
                question: "2. Using max-width Everywhere",
                answer: "Mobile First usually relies on min-width media queries, not max-width."
              },
              {
                question: "3. Hiding Important Content",
                answer: "Avoid using display: none; for essential information on mobile devices."
              },
              {
                question: "4. Ignoring Performance",
                answer: "Heavy images and scripts can ruin mobile experiences. Always optimize assets."
              },
              {
                question: "5. Creating Tiny Buttons",
                answer: "Touch targets should be easy to tap. Ensure adequate sizing and padding."
              }
            ]
          }
        ]
      },
      {
        heading: "Real-World Mobile First Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers often follow this process:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Step 1: Design mobile layout.",
              "Step 2: Add typography.",
              "Step 3: Make images responsive.",
              "Step 4: Create responsive navigation.",
              "Step 5: Add tablet enhancements.",
              "Step 6: Add desktop enhancements.",
              "Step 7: Test on multiple screen sizes.",
              "Step 8: Optimize performance."
            ]
          },
          {
            type: "paragraph",
            content: "This workflow produces clean, scalable designs."
          }
        ]
      },
      {
        heading: "Complete Mobile First Example",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `body {
    margin: 0;
    font-size: 16px;
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

img {
    max-width: 100%;
    height: auto;
}

@media (min-width: 768px) {

    .container {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (min-width: 1200px) {

    .container {
        grid-template-columns: repeat(4, 1fr);
    }

}`
          },
          {
            type: "paragraph",
            content: "This demonstrates the complete Mobile First philosophy:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile styles first",
              "Progressive enhancement",
              "Responsive layout",
              "Scalable design"
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Mobile First Design is a modern web development strategy that starts with the smallest screens and progressively enhances the experience for larger devices. Instead of shrinking desktop layouts, developers build mobile experiences first and then expand them using min-width media queries."
          },
          {
            type: "paragraph",
            content: "Key concepts covered in this tutorial:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Mobile First Design is and why it became important",
              "Progressive Enhancement and Mobile First vs Desktop First",
              "Using min-width media queries",
              "Responsive Flexbox and Grid layouts",
              "Mobile navigation design, typography, and responsive images",
              "Common breakpoints and Content-based breakpoints",
              "Touch-friendly interfaces, performance optimization, and accessibility considerations",
              "Content prioritization",
              "Professional Mobile First workflow"
            ]
          },
          {
            type: "paragraph",
            content: "By mastering Mobile First Design, you will build websites that are faster, cleaner, more accessible, and better suited for the modern web, where mobile devices are often the primary way users interact with content."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Think of Mobile First as writing the foundation of a house. The mobile view is your foundation (the core styles). Media queries for tablets and desktops are the extra floors and rooms added on top. If the foundation is strong and lean, the entire structure will perform better!"
          }
        ]
      }
    ]
  },
};

export default cssResponsiveWebDesign;