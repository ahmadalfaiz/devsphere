const cssWorkingWithText = {

/* ===========================
    First Topic : Text Formatting
============================= */
    "css-text-formatting": {
    title: "Text Formatting",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Text Formatting",
        blocks: [
          {
            type: "paragraph",
            content: "Text is the primary way users consume information on most websites. Whether it's a blog post, article, heading, navigation menu, product description, documentation page, or news website, text plays a critical role in communication."
          },
          {
            type: "paragraph",
            content: "While HTML provides the content, CSS controls how that content appears."
          },
          {
            type: "paragraph",
            content: "CSS Text Formatting is a collection of properties that allow developers to control:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Text color",
              "Alignment",
              "Decoration",
              "Spacing",
              "Transformation",
              "Direction",
              "Overflow handling",
              "Readability",
              "Typography behavior"
            ]
          },
          {
            type: "paragraph",
            content: "Good text formatting improves readability, accessibility, user experience, and visual appeal."
          }
        ]
      },
      {
        heading: "What is CSS Text Formatting?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Text Formatting refers to styling and controlling the appearance and layout of text within HTML elements."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<p class="text">
    Welcome to CSS.
</p>`
          },
          {
            type: "code",
            language: "css",
            content: `.text {
    color: blue;
    text-align: center;
    text-transform: uppercase;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "WELCOME TO CSS."
          },
          {
            type: "paragraph",
            content: "CSS allows us to customize text far beyond the browser's default appearance."
          }
        ]
      },
      {
        heading: "Why Text Formatting Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Proper text formatting helps:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Improve readability",
              "Enhance visual design",
              "Create professional layouts",
              "Improve accessibility",
              "Support multiple languages",
              "Increase user engagement"
            ]
          },
          {
            type: "paragraph",
            content: "Poorly formatted text can make even great content difficult to read."
          }
        ]
      },
      {
        heading: "The Most Important Text Formatting Properties",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides numerous text-related properties."
          },
          {
            type: "paragraph",
            content: "Commonly used ones include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "color",
              "text-align",
              "text-decoration",
              "text-transform",
              "text-indent",
              "letter-spacing",
              "word-spacing",
              "line-height",
              "text-shadow",
              "white-space",
              "overflow-wrap",
              "text-overflow",
              "direction",
              "writing-mode"
            ]
          },
          {
            type: "paragraph",
            content: "Let's explore each one."
          }
        ]
      },
      {
        heading: "Text Color",
        blocks: [
          {
            type: "paragraph",
            content: "The color property changes text color."
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
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Blue Text"
          },
          {
            type: "paragraph",
            content: "Using Named Colors"
          },
          {
            type: "code",
            language: "css",
            content: `color: red;
color: green;
color: purple;`
          },
          {
            type: "paragraph",
            content: "Using HEX Colors"
          },
          {
            type: "code",
            language: "css",
            content: `color: #ff0000;`
          },
          {
            type: "paragraph",
            content: "Using RGB"
          },
          {
            type: "code",
            language: "css",
            content: `color: rgb(255, 0, 0);`
          },
          {
            type: "paragraph",
            content: "Using HSL"
          },
          {
            type: "code",
            language: "css",
            content: `color: hsl(0, 100%, 50%);`
          }
        ]
      },
      {
        heading: "Text Alignment",
        blocks: [
          {
            type: "paragraph",
            content: "The text-align property controls horizontal alignment."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    text-align: center;
}`
          },
          {
            type: "paragraph",
            content: "Left Alignment"
          },
          {
            type: "code",
            language: "css",
            content: `text-align: left;`
          },
          {
            type: "paragraph",
            content: "Default for most left-to-right languages."
          },
          {
            type: "paragraph",
            content: "Right Alignment"
          },
          {
            type: "code",
            language: "css",
            content: `text-align: right;`
          },
          {
            type: "paragraph",
            content: "Center Alignment"
          },
          {
            type: "code",
            language: "css",
            content: `text-align: center;`
          },
          {
            type: "paragraph",
            content: "Places text in the center."
          },
          {
            type: "paragraph",
            content: "Justified Text"
          },
          {
            type: "code",
            language: "css",
            content: `text-align: justify;`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Text stretches so both",
              "left and right edges align."
            ]
          },
          {
            type: "paragraph",
            content: "Often used in newspapers and magazines."
          }
        ]
      },
      {
        heading: "Text Decoration",
        blocks: [
          {
            type: "paragraph",
            content: "The text-decoration property adds decorative lines."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration: underline;`
          },
          {
            type: "paragraph",
            content: "Underline"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration: underline;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Underlined Text"
          },
          {
            type: "paragraph",
            content: "Overline"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration: overline;`
          },
          {
            type: "paragraph",
            content: "Line Through"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration: line-through;`
          },
          {
            type: "paragraph",
            content: "Commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Discounted Prices"
            ]
          }
        ]
      },
      {
        heading: "Remove Underline from Links",
        blocks: [
          {
            type: "paragraph",
            content: "Default link:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#">Link</a>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    text-decoration: none;
}`
          }
        ]
      },
      {
        heading: "Modern Text Decoration Properties",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Text Level 3 introduced advanced decoration controls."
          },
          {
            type: "paragraph",
            content: "text-decoration-color"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration-color: red;`
          },
          {
            type: "paragraph",
            content: "text-decoration-style"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration-style: dashed;`
          },
          {
            type: "paragraph",
            content: "Possible values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "solid",
              "dashed",
              "dotted",
              "double",
              "wavy"
            ]
          },
          {
            type: "paragraph",
            content: "text-decoration-thickness"
          },
          {
            type: "code",
            language: "css",
            content: `text-decoration-thickness: 3px;`
          },
          {
            type: "paragraph",
            content: "Controls line thickness."
          }
        ]
      },
      {
        heading: "Text Transformation",
        blocks: [
          {
            type: "paragraph",
            content: "The text-transform property changes letter casing."
          },
          {
            type: "cards",
            items: [
              {
                title: "Uppercase",
                description: "text-transform: uppercase; Output: HELLO WORLD"
              },
              {
                title: "Lowercase",
                description: "text-transform: lowercase; Output: hello world"
              },
              {
                title: "Capitalize",
                description: "text-transform: capitalize; Output: Hello World"
              },
              {
                title: "None",
                description: "text-transform: none; Uses original text."
              }
            ]
          }
        ]
      },
      {
        heading: "Text Indentation",
        blocks: [
          {
            type: "paragraph",
            content: "The text-indent property indents the first line."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    text-indent: 50px;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "     First line starts inward."
          },
          {
            type: "paragraph",
            content: "Common in books and articles."
          }
        ]
      },
      {
        heading: "Letter Spacing",
        blocks: [
          {
            type: "paragraph",
            content: "The letter-spacing property controls space between characters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `letter-spacing: 3px;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "H E L L O"
          },
          {
            type: "paragraph",
            content: "Negative Letter Spacing"
          },
          {
            type: "code",
            language: "css",
            content: `letter-spacing: -1px;`
          },
          {
            type: "paragraph",
            content: "Characters become closer together."
          }
        ]
      },
      {
        heading: "Word Spacing",
        blocks: [
          {
            type: "paragraph",
            content: "The word-spacing property controls space between words."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `word-spacing: 10px;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Hello      World"
          }
        ]
      },
      {
        heading: "Line Height",
        blocks: [
          {
            type: "paragraph",
            content: "The line-height property controls vertical spacing between lines."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 2;`
          },
          {
            type: "paragraph",
            content: "Visual effect:"
          },
          {
            type: "output",
            content: [
              "Line One",
              "",
              "Line Two",
              "",
              "Line Three"
            ]
          },
          {
            type: "paragraph",
            content: "Why Line Height Matters"
          },
          {
            type: "paragraph",
            content: "Good line spacing improves readability."
          },
          {
            type: "paragraph",
            content: "Poor:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1;`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1.5;`
          },
          {
            type: "paragraph",
            content: "Many professional websites use values between:"
          },
          {
            type: "output",
            content: "1.4 – 1.8"
          }
        ]
      },
      {
        heading: "Text Shadow",
        blocks: [
          {
            type: "paragraph",
            content: "The text-shadow property adds shadow effects."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "text-shadow: horizontal vertical blur color;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `text-shadow: 2px 2px 4px gray;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Shadowed Text"
          },
          {
            type: "paragraph",
            content: "Multiple Text Shadows"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `text-shadow:
    1px 1px 2px black,
    0 0 10px blue;`
          },
          {
            type: "paragraph",
            content: "Creates layered effects."
          }
        ]
      },
      {
        heading: "White Space Handling",
        blocks: [
          {
            type: "paragraph",
            content: "The white-space property controls how spaces and line breaks behave."
          },
          {
            type: "cards",
            items: [
              {
                title: "Normal",
                description: "white-space: normal; Default behavior."
              },
              {
                title: "No Wrap",
                description: "white-space: nowrap; Prevents line breaks."
              },
              {
                title: "Pre",
                description: "white-space: pre; Preserves formatting exactly."
              },
              {
                title: "Pre-Wrap",
                description: "white-space: pre-wrap; Preserves formatting while allowing wrapping."
              }
            ]
          }
        ]
      },
      {
        heading: "Handling Long Words",
        blocks: [
          {
            type: "paragraph",
            content: "Long words can break layouts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "supercalifragilisticexpialidocious"
          },
          {
            type: "paragraph",
            content: "overflow-wrap"
          },
          {
            type: "code",
            language: "css",
            content: `overflow-wrap: break-word;`
          },
          {
            type: "paragraph",
            content: "Allows long words to wrap."
          },
          {
            type: "paragraph",
            content: "word-break"
          },
          {
            type: "code",
            language: "css",
            content: `word-break: break-all;`
          },
          {
            type: "paragraph",
            content: "Breaks words if necessary."
          }
        ]
      },
      {
        heading: "Text Overflow",
        blocks: [
          {
            type: "paragraph",
            content: "The text-overflow property controls hidden text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "This is a very long tex..."
          }
        ]
      },
      {
        heading: "Direction Property",
        blocks: [
          {
            type: "paragraph",
            content: "Controls writing direction."
          },
          {
            type: "paragraph",
            content: "Left to Right"
          },
          {
            type: "code",
            language: "css",
            content: `direction: ltr;`
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "English",
              "French",
              "German"
            ]
          },
          {
            type: "paragraph",
            content: "Right to Left"
          },
          {
            type: "code",
            language: "css",
            content: `direction: rtl;`
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Arabic",
              "Hebrew",
              "Urdu"
            ]
          }
        ]
      },
      {
        heading: "Writing Modes",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials ignore this powerful property."
          },
          {
            type: "paragraph",
            content: "The writing-mode property changes text flow direction."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `writing-mode: vertical-rl;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "V",
              "E",
              "R",
              "T",
              "I",
              "C",
              "A",
              "L"
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
              "East Asian languages",
              "Creative layouts",
              "Infographics"
            ]
          }
        ]
      },
      {
        heading: "Text Alignment in Different Languages",
        blocks: [
          {
            type: "paragraph",
            content: "Different languages have different writing systems."
          },
          {
            type: "paragraph",
            content: "CSS supports:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "direction",
              "writing-mode",
              "text-orientation"
            ]
          },
          {
            type: "paragraph",
            content: "This allows websites to support global audiences."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `writing-mode: vertical-rl;
text-orientation: upright;`
          }
        ]
      },
      {
        heading: "Text Clipping and Gradient Text",
        blocks: [
          {
            type: "paragraph",
            content: "A modern text effect often missing from beginner tutorials."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `background: linear-gradient(red, blue);

-webkit-background-clip: text;

color: transparent;`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Gradient Colored Text"
          },
          {
            type: "paragraph",
            content: "Used heavily in modern UI design."
          }
        ]
      },
      {
        heading: "Hyphenation",
        blocks: [
          {
            type: "paragraph",
            content: "CSS can automatically insert hyphens."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `hyphens: auto;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "inter-",
              "nationalization"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for justified text."
          }
        ]
      },
      {
        heading: "Text Rendering Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers provide rendering hints."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `text-rendering: optimizeLegibility;`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better kerning",
              "Improved ligatures",
              "Enhanced readability"
            ]
          },
          {
            type: "paragraph",
            content: "This property is rarely covered in beginner tutorials."
          }
        ]
      },
      {
        heading: "Text Selection Styling",
        blocks: [
          {
            type: "paragraph",
            content: "CSS can style selected text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `::selection {
    background: yellow;
    color: black;
}`
          },
          {
            type: "paragraph",
            content: "When users highlight text:"
          },
          {
            type: "output",
            content: [
              "Custom Selection Style",
              "appears."
            ]
          }
        ]
      },
      {
        heading: "Browser Internals: How Text Is Rendered",
        blocks: [
          {
            type: "paragraph",
            content: "When a browser displays text:"
          },
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "DOM Tree",
              "→",
              "CSS Parsing",
              "→",
              "Font Loading",
              "→",
              "Text Layout Engine",
              "→",
              "Glyph Positioning",
              "→",
              "Rendering"
            ]
          },
          {
            type: "paragraph",
            content: "The browser calculates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Character positions",
              "Word spacing",
              "Line breaks",
              "Alignment",
              "Shadows",
              "Decorations"
            ]
          },
          {
            type: "paragraph",
            content: "before displaying text."
          },
          {
            type: "paragraph",
            content: "This process is known as:"
          },
          {
            type: "output",
            content: "Text Layout"
          }
        ]
      },
      {
        heading: "Accessibility and Text Formatting",
        blocks: [
          {
            type: "paragraph",
            content: "Good formatting improves accessibility."
          },
          {
            type: "paragraph",
            content: "Recommendations:"
          },
          {
            type: "paragraph",
            content: "Use Sufficient Contrast"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "css",
            content: `color: black;
background: white;`
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "css",
            content: `color: lightgray;
background: white;`
          },
          {
            type: "paragraph",
            content: "Avoid Excessive Letter Spacing"
          },
          {
            type: "paragraph",
            content: "Too much spacing reduces readability."
          },
          {
            type: "paragraph",
            content: "Use Comfortable Line Height"
          },
          {
            type: "paragraph",
            content: "Recommended:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1.5;`
          },
          {
            type: "paragraph",
            content: "Avoid All-Caps for Large Paragraphs"
          },
          {
            type: "paragraph",
            content: "Harder to read. Use uppercase sparingly."
          }
        ]
      },
      {
        heading: "Common Text Formatting Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Using Center Alignment Everywhere",
                answer: "Center alignment makes large blocks of text difficult to read because the eye has to find a new starting point for every line. It is bad for long paragraphs."
              },
              {
                question: "Excessive Shadows",
                answer: "Adding too many or too intense text-shadows can blur the text and severely hurt readability."
              },
              {
                question: "Very Small Line Height",
                answer: "A tight line-height makes lines of text feel crowded and visually overwhelming."
              },
              {
                question: "Poor Color Contrast",
                answer: "Using light text on a light background or dark text on a dark background creates significant accessibility problems for users."
              },
              {
                question: "Preventing Text Wrapping",
                answer: "Forcing white-space: nowrap; on long strings without an overflow strategy can break responsive layouts and push content off-screen."
              },
              {
                question: "Overusing Capitalization",
                answer: "Writing entire paragraphs in uppercase removes shape variation from words, making them much more difficult for the brain to process quickly."
              }
            ]
          }
        ]
      },
      {
        heading: "Text Formatting Quick Reference",
        blocks: [
          {
            type: "table",
            headers: [
              "Property",
              "Purpose"
            ],
            rows: [
              [
                "color",
                "Text color"
              ],
              [
                "text-align",
                "Horizontal alignment"
              ],
              [
                "text-decoration",
                "Decorative lines"
              ],
              [
                "text-transform",
                "Change letter case"
              ],
              [
                "text-indent",
                "Indent first line"
              ],
              [
                "letter-spacing",
                "Space between characters"
              ],
              [
                "word-spacing",
                "Space between words"
              ],
              [
                "line-height",
                "Space between lines"
              ],
              [
                "text-shadow",
                "Text shadow"
              ],
              [
                "white-space",
                "Control wrapping"
              ],
              [
                "overflow-wrap",
                "Break long words"
              ],
              [
                "text-overflow",
                "Handle overflow text"
              ],
              [
                "direction",
                "Writing direction"
              ],
              [
                "writing-mode",
                "Text flow direction"
              ],
              [
                "hyphens",
                "Automatic hyphenation"
              ]
            ]
          }
        ]
      },
      {
        heading: "Lesser-Known Text Formatting Features",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials focus only on color, alignment, and decoration. Modern CSS offers much more:"
          },
          {
            type: "cards",
            items: [
              {
                title: "writing-mode",
                description: "Allows vertical text layouts."
              },
              {
                title: "text-orientation",
                description: "Controls character orientation in vertical writing."
              },
              {
                title: "hyphens",
                description: "Automatically hyphenates long words."
              },
              {
                title: "text-rendering",
                description: "Improves font rendering quality."
              },
              {
                title: "::selection",
                description: "Styles highlighted text."
              },
              {
                title: "Gradient Text",
                description: "Creates modern text effects using background clipping."
              },
              {
                title: "Multi-Language Support",
                description: "CSS supports left-to-right, right-to-left, and vertical writing systems."
              }
            ]
          },
          {
            type: "paragraph",
            content: "These features are increasingly important in modern web applications and international websites."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Text Formatting is a collection of properties that control the appearance, spacing, alignment, decoration, transformation, and behavior of text. Important properties include color, text-align, text-decoration, text-transform, letter-spacing, word-spacing, line-height, text-shadow, white-space, and text-overflow. CSS also provides advanced capabilities such as vertical writing modes, text orientation, automatic hyphenation, custom text selection styling, and rendering optimizations. Proper text formatting improves readability, accessibility, responsiveness, and visual design, making it one of the most important aspects of professional web development."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Good typography is often invisible. The best text formatting is the kind that users never notice because the reading experience is effortless. Always prioritize legible line heights (`1.5` or higher) and strong color contrast."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Fonts
============================= */
    "css-fonts": {
    title: "Fonts",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Text is one of the most important parts of any website. No matter how beautiful a design is, users spend most of their time reading content. The appearance of that text is controlled by fonts."
          },
          {
            type: "paragraph",
            content: "Fonts influence:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Readability",
              "User experience",
              "Brand identity",
              "Accessibility",
              "Professional appearance",
              "Visual hierarchy"
            ]
          },
          {
            type: "paragraph",
            content: "A news website, luxury brand, portfolio, banking application, and gaming website may all use different fonts to create different impressions."
          },
          {
            type: "paragraph",
            content: "CSS provides powerful font-related properties that allow developers to control how text looks, feels, and behaves across devices and browsers."
          }
        ]
      },
      {
        heading: "What Are Fonts in CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "A font is the visual design of characters such as letters, numbers, and symbols."
          },
          {
            type: "paragraph",
            content: "CSS allows developers to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Choose font families",
              "Adjust font size",
              "Change weight (thickness)",
              "Modify style",
              "Control spacing",
              "Load custom fonts",
              "Optimize font rendering"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-family: Arial, sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "The browser displays paragraph text using the Arial font."
          }
        ]
      },
      {
        heading: "Why Fonts Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Good font choices help:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Improve readability",
              "Establish brand identity",
              "Create visual hierarchy",
              "Enhance accessibility",
              "Improve user engagement",
              "Make websites look professional"
            ]
          },
          {
            type: "paragraph",
            content: "Poor font choices can make content difficult to read and reduce user trust."
          }
        ]
      },
      {
        heading: "The Main Font Properties",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides several font-related properties:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "font-family",
              "font-size",
              "font-style",
              "font-weight",
              "font-variant",
              "font-stretch",
              "line-height",
              "font"
            ]
          },
          {
            type: "paragraph",
            content: "Let's examine each one."
          }
        ]
      },
      {
        heading: "Font Family",
        blocks: [
          {
            type: "paragraph",
            content: "The font-family property specifies which font should be used."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-family: Arial;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Text displayed using Arial"
          },
          {
            type: "paragraph",
            content: "Font Fallbacks"
          },
          {
            type: "paragraph",
            content: "Not every computer has every font installed."
          },
          {
            type: "paragraph",
            content: "Therefore developers provide fallback fonts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-family: Arial, Helvetica, sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "Browser behavior:"
          },
          {
            type: "flow",
            steps: [
              "Try Arial",
              "→",
              "If unavailable → Helvetica",
              "→",
              "If unavailable → Any sans-serif font"
            ]
          },
          {
            type: "paragraph",
            content: "This is called a font stack."
          }
        ]
      },
      {
        heading: "Generic Font Families",
        blocks: [
          {
            type: "paragraph",
            content: "CSS defines generic font families that work on all systems."
          },
          {
            type: "cards",
            items: [
              {
                title: "Serif",
                description: "Fonts with decorative strokes. Traditional, professional. (e.g., Times New Roman, Georgia)"
              },
              {
                title: "Sans-Serif",
                description: "Fonts without decorative strokes. Modern, clean. (e.g., Arial, Helvetica)"
              },
              {
                title: "Monospace",
                description: "Every character occupies equal width. Used for code. (e.g., Courier New, Consolas)"
              },
              {
                title: "Cursive",
                description: "Handwriting-like fonts."
              },
              {
                title: "Fantasy",
                description: "Decorative fonts. Often used sparingly."
              },
              {
                title: "System UI",
                description: "Uses the OS default font. (e.g., Segoe UI, San Francisco, Roboto)"
              }
            ]
          }
        ]
      },
      {
        heading: "Font Size",
        blocks: [
          {
            type: "paragraph",
            content: "The font-size property controls text size."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-size: 20px;
}`
          }
        ]
      },
      {
        heading: "Common Units for Font Size",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Pixels (px)",
                description: "font-size: 18px; Most common for beginners."
              },
              {
                title: "Em (em)",
                description: "font-size: 1.5em; Relative to parent element."
              },
              {
                title: "Rem (rem)",
                description: "font-size: 1.5rem; Relative to root element. Modern websites commonly prefer rem."
              },
              {
                title: "Percentage (%)",
                description: "font-size: 120%;"
              },
              {
                title: "Viewport Units (vw/vh)",
                description: "font-size: 5vw; Size changes according to screen width."
              }
            ]
          }
        ]
      },
      {
        heading: "Absolute Size Keywords",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides predefined sizes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: small;`
          },
          {
            type: "paragraph",
            content: "Possible values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "xx-small",
              "x-small",
              "small",
              "medium",
              "large",
              "x-large",
              "xx-large"
            ]
          }
        ]
      },
      {
        heading: "Relative Size Keywords",
        blocks: [
          {
            type: "code",
            language: "css",
            content: `font-size: larger;
font-size: smaller;`
          },
          {
            type: "paragraph",
            content: "Relative to parent text size."
          }
        ]
      },
      {
        heading: "Font Weight",
        blocks: [
          {
            type: "paragraph",
            content: "The font-weight property controls thickness."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-weight: bold;`
          }
        ]
      },
      {
        heading: "Common Font Weight Values",
        blocks: [
          {
            type: "table",
            headers: [
              "Value",
              "Weight"
            ],
            rows: [
              [
                "100",
                "Thin"
              ],
              [
                "300",
                "Light"
              ],
              [
                "400",
                "Normal"
              ],
              [
                "500",
                "Medium"
              ],
              [
                "700",
                "Bold"
              ],
              [
                "900",
                "Black"
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
            content: `h1 {
    font-weight: 700;
}`
          }
        ]
      },
      {
        heading: "Font Style",
        blocks: [
          {
            type: "paragraph",
            content: "The font-style property controls italic styling."
          },
          {
            type: "cards",
            items: [
              {
                title: "Normal",
                description: "font-style: normal;"
              },
              {
                title: "Italic",
                description: "font-style: italic; Output: Italic Text"
              },
              {
                title: "Oblique",
                description: "font-style: oblique; Similar to italic but generated by slanting the font."
              }
            ]
          }
        ]
      },
      {
        heading: "Font Variant",
        blocks: [
          {
            type: "paragraph",
            content: "The font-variant property controls special character rendering."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-variant: small-caps;`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "HELLO WORLD using smaller capital letters."
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Headings",
              "Citations",
              "Typography effects"
            ]
          }
        ]
      },
      {
        heading: "Line Height",
        blocks: [
          {
            type: "paragraph",
            content: "Although often considered a text property, it is closely related to fonts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1.6;`
          },
          {
            type: "paragraph",
            content: "This increases spacing between lines."
          },
          {
            type: "paragraph",
            content: "Why Line Height Matters"
          },
          {
            type: "paragraph",
            content: "Poor:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1;`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1.5;`
          },
          {
            type: "paragraph",
            content: "Improves readability significantly."
          }
        ]
      },
      {
        heading: "The Font Shorthand Property",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of writing multiple properties:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.5;
    font-family: Arial, sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "You can write:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font: italic bold 20px/1.5 Arial, sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "This is called the font shorthand property."
          }
        ]
      },
      {
        heading: "Loading Custom Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites frequently use custom fonts."
          },
          {
            type: "paragraph",
            content: "Without custom fonts:"
          },
          {
            type: "output",
            content: "Users only see installed fonts."
          },
          {
            type: "paragraph",
            content: "With custom fonts:"
          },
          {
            type: "output",
            content: "Website can use any chosen font."
          }
        ]
      },
      {
        heading: "Using @font-face",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides the @font-face rule."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@font-face {
    font-family: "MyFont";
    src: url("fonts/myfont.woff2");
}

p {
    font-family: "MyFont";
}`
          },
          {
            type: "paragraph",
            content: "The browser downloads and uses the custom font."
          }
        ]
      },
      {
        heading: "Web Font Formats",
        blocks: [
          {
            type: "paragraph",
            content: "Common font file formats:"
          },
          {
            type: "table",
            headers: [
              "Format",
              "Description"
            ],
            rows: [
              [
                "WOFF",
                "Web Open Font Format"
              ],
              [
                "WOFF2",
                "Modern compressed format"
              ],
              [
                "TTF",
                "TrueType Font"
              ],
              [
                "OTF",
                "OpenType Font"
              ],
              [
                "SVG",
                "Older format"
              ],
              [
                "EOT",
                "Legacy Internet Explorer format"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Today: WOFF2 is generally preferred."
          }
        ]
      },
      {
        heading: "Using Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common ways to use custom fonts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="preconnect"
href="https://fonts.googleapis.com">

<link
href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: "Roboto", sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "The font is downloaded automatically."
          }
        ]
      },
      {
        heading: "Font Pairing",
        blocks: [
          {
            type: "paragraph",
            content: "A topic rarely explained in beginner tutorials."
          },
          {
            type: "paragraph",
            content: "Professional designs often combine multiple fonts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-family: Georgia, serif;
}

p {
    font-family: Arial, sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "This creates visual contrast."
          },
          {
            type: "paragraph",
            content: "Common pattern:"
          },
          {
            type: "output",
            content: [
              "Serif → Headings",
              "Sans-Serif → Body Text"
            ]
          }
        ]
      },
      {
        heading: "Safe Web Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Some fonts are available on most systems."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Arial",
              "Verdana",
              "Tahoma",
              "Trebuchet MS",
              "Georgia",
              "Times New Roman",
              "Courier New"
            ]
          },
          {
            type: "paragraph",
            content: "These are called:"
          },
          {
            type: "output",
            content: "Web Safe Fonts"
          },
          {
            type: "paragraph",
            content: "because they are widely supported."
          }
        ]
      },
      {
        heading: "Font Stretch",
        blocks: [
          {
            type: "paragraph",
            content: "The font-stretch property adjusts character width."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-stretch: condensed;`
          },
          {
            type: "paragraph",
            content: "Possible values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "ultra-condensed",
              "condensed",
              "normal",
              "expanded",
              "ultra-expanded"
            ]
          },
          {
            type: "paragraph",
            content: "Not all fonts support this feature."
          }
        ]
      },
      {
        heading: "Variable Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest modern developments in typography."
          },
          {
            type: "paragraph",
            content: "Traditional fonts:"
          },
          {
            type: "output",
            content: [
              "Regular Font File",
              "Bold Font File",
              "Light Font File",
              "Black Font File"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple files required."
          },
          {
            type: "paragraph",
            content: "Variable fonts:"
          },
          {
            type: "output",
            content: [
              "Single Font File",
              "containing multiple weights and styles."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-variation-settings: "wght" 650;`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smaller downloads",
              "Better performance",
              "More design flexibility"
            ]
          },
          {
            type: "paragraph",
            content: "Many tutorials ignore variable fonts despite their growing popularity."
          }
        ]
      },
      {
        heading: "Font Smoothing and Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers render fonts differently."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `text-rendering: optimizeLegibility;`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better kerning",
              "Improved ligatures",
              "Cleaner typography"
            ]
          }
        ]
      },
      {
        heading: "Kerning and Ligatures",
        blocks: [
          {
            type: "paragraph",
            content: "Modern fonts contain advanced typography features."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-kerning: normal;`
          },
          {
            type: "paragraph",
            content: "Kerning adjusts spacing between letters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Without kerning: A   V",
              "With kerning: AV"
            ]
          },
          {
            type: "paragraph",
            content: "Ligatures"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "fi, fl, ff may combine into a single glyph."
          },
          {
            type: "paragraph",
            content: "Enable:"
          },
          {
            type: "code",
            language: "css",
            content: `font-variant-ligatures: common-ligatures;`
          },
          {
            type: "paragraph",
            content: "This improves typography quality."
          }
        ]
      },
      {
        heading: "Responsive Typography",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites adapt font sizes for different screens."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "output",
            content: [
              "Small Screens → Smaller Text",
              "Large Screens → Larger Text"
            ]
          },
          {
            type: "paragraph",
            content: "This creates responsive typography without media queries."
          }
        ]
      },
      {
        heading: "Accessibility and Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Good font choices improve accessibility."
          },
          {
            type: "paragraph",
            content: "Use Readable Fonts"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Arial",
              "Verdana",
              "Roboto",
              "Open Sans"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid overly decorative fonts for large content."
          },
          {
            type: "paragraph",
            content: "Maintain Adequate Size"
          },
          {
            type: "paragraph",
            content: "Recommended minimum:"
          },
          {
            type: "code",
            language: "css",
            content: `font-size: 16px;`
          },
          {
            type: "paragraph",
            content: "for body text."
          },
          {
            type: "paragraph",
            content: "Ensure Proper Contrast"
          },
          {
            type: "paragraph",
            content: "Good typography requires sufficient contrast between text and background."
          },
          {
            type: "paragraph",
            content: "Avoid Too Many Fonts"
          },
          {
            type: "paragraph",
            content: "Usually: 2–3 font families are enough for most websites."
          }
        ]
      },
      {
        heading: "Browser Internals: How Fonts Are Rendered",
        blocks: [
          {
            type: "paragraph",
            content: "When a page loads:"
          },
          {
            type: "flow",
            steps: [
              "HTML",
              "→",
              "CSS Parsing",
              "→",
              "Font Selection",
              "→",
              "Font Download (if needed)",
              "→",
              "Glyph Generation",
              "→",
              "Text Layout",
              "→",
              "Rendering"
            ]
          },
          {
            type: "paragraph",
            content: "The browser determines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which font to use",
              "Character shapes",
              "Line spacing",
              "Font fallback behavior"
            ]
          },
          {
            type: "paragraph",
            content: "before displaying text."
          }
        ]
      },
      {
        heading: "Common Font Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Using Too Many Fonts",
                answer: "Using 6 different fonts creates visual inconsistency and drastically slows down page loading."
              },
              {
                question: "No Fallback Fonts",
                answer: "If you only declare a custom font and it fails to load, the browser might choose an unpredictable system font. Always use fallbacks.",
                examples: [
                  {
                    title: "Bad",
                    language: "css",
                    content: `font-family: MyCustomFont;`
                  },
                  {
                    title: "Good",
                    language: "css",
                    content: `font-family: MyCustomFont, Arial, sans-serif;`
                  }
                ]
              },
              {
                question: "Very Small Text",
                answer: "Extremely small text is hard to read and causes accessibility failures. Aim for at least 16px for body content."
              },
              {
                question: "Excessive Font Weights",
                answer: "Importing too many weight variations (100, 200, 300, 400, 500, etc.) from Google Fonts will significantly increase your webpage's file size."
              },
              {
                question: "Decorative Fonts Everywhere",
                answer: "Using highly stylized cursive or fantasy fonts for body text makes reading difficult and hurts user experience."
              }
            ]
          }
        ]
      },
      {
        heading: "Font Property Quick Reference",
        blocks: [
          {
            type: "table",
            headers: [
              "Property",
              "Purpose"
            ],
            rows: [
              [
                "font-family",
                "Select font"
              ],
              [
                "font-size",
                "Set text size"
              ],
              [
                "font-style",
                "Normal, italic, oblique"
              ],
              [
                "font-weight",
                "Control thickness"
              ],
              [
                "font-variant",
                "Small caps and variants"
              ],
              [
                "font-stretch",
                "Adjust width"
              ],
              [
                "line-height",
                "Space between lines"
              ],
              [
                "font",
                "Shorthand property"
              ],
              [
                "font-kerning",
                "Control character spacing"
              ],
              [
                "font-variation-settings",
                "Variable font settings"
              ]
            ]
          }
        ]
      },
      {
        heading: "Lesser-Known Font Features",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials cover only family, size, weight, and style. Modern CSS typography offers much more:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Variable Fonts",
                description: "Multiple weights and styles in one file."
              },
              {
                title: "Font Loading Optimization",
                description: "Using font-display to improve performance."
              },
              {
                title: "Kerning",
                description: "Improves character spacing."
              },
              {
                title: "Ligatures",
                description: "Creates more natural letter combinations."
              },
              {
                title: "Responsive Typography",
                description: "Using clamp() for adaptive text sizing."
              },
              {
                title: "Font Stretching",
                description: "Adjusts character width."
              },
              {
                title: "Typography Rendering",
                description: "Controls how text is displayed internally."
              }
            ]
          },
          {
            type: "paragraph",
            content: "These features are widely used in modern professional websites but are often absent from beginner tutorials."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Fonts control the appearance, style, size, weight, and rendering of text on web pages. Core properties include font-family, font-size, font-weight, font-style, font-variant, and line-height. CSS also supports custom fonts through @font-face, web-safe fonts, Google Fonts integration, and advanced typography features such as variable fonts, kerning, ligatures, responsive typography, and font rendering optimization. Choosing appropriate fonts improves readability, accessibility, branding, and overall user experience, making typography one of the most important aspects of modern web design."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 As web design evolves, Variable Fonts are becoming the new standard. Instead of loading four different files for light, regular, bold, and black text, you only load one highly optimized file that can stretch to any weight dynamically. Keep this in mind when optimizing your website's performance."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Google Fonts
============================= */
    "css-google-fonts": {
    title: "Google Fonts",
    readingTime: "22 min",
        
    content: [
        {
        heading: "Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Typography plays a major role in web design. A website's font affects readability, branding, professionalism, and user experience. While browsers provide several built-in fonts, modern websites often require more attractive and unique typography."
          },
          {
            type: "paragraph",
            content: "This is where Google Fonts becomes extremely useful."
          },
          {
            type: "paragraph",
            content: "Google Fonts is a free library of web fonts that developers can easily add to their websites without purchasing font licenses or hosting font files manually."
          },
          {
            type: "paragraph",
            content: "Today, millions of websites use Google Fonts because it provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hundreds of high-quality fonts",
              "Easy integration",
              "Cross-browser compatibility",
              "Mobile support",
              "Performance optimization",
              "Free commercial usage"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding Google Fonts is an essential skill for every web developer and designer."
          }
        ]
      },
      {
        heading: "What Are Google Fonts?",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts is a collection of open-source fonts provided by Google Fonts."
          },
          {
            type: "paragraph",
            content: "Instead of relying on fonts installed on a user's computer, websites can download fonts directly from Google's servers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Without Google Fonts:"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: Arial, sans-serif;`
          },
          {
            type: "paragraph",
            content: "With Google Fonts:"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: "Roboto", sans-serif;`
          },
          {
            type: "paragraph",
            content: "The browser automatically downloads the Roboto font and displays it correctly."
          }
        ]
      },
      {
        heading: "Why Use Google Fonts?",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts solve several common typography problems."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Free to use",
              "Hundreds of font families",
              "Easy implementation",
              "Responsive across devices",
              "Consistent appearance",
              "Supports multiple languages",
              "Optimized for web performance",
              "Frequently updated"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of depending on fonts installed on a user's system, Google Fonts ensures everyone sees the same typography."
          }
        ]
      },
      {
        heading: "How Google Fonts Work",
        blocks: [
          {
            type: "paragraph",
            content: "The process is simple:"
          },
          {
            type: "flow",
            steps: [
              "Website Loads",
              "→",
              "Browser Reads Font Link",
              "→",
              "Requests Font From Google",
              "→",
              "Font Downloaded",
              "→",
              "Text Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "The font file is delivered over the internet whenever the page loads."
          }
        ]
      },
      {
        heading: "Exploring the Google Fonts Library",
        blocks: [
          {
            type: "paragraph",
            content: "Visit:"
          },
          {
            type: "output",
            content: "Google Fonts Library"
          },
          {
            type: "paragraph",
            content: "You'll find hundreds of font families organized into categories."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Roboto",
              "Open Sans",
              "Montserrat",
              "Lato",
              "Poppins",
              "Oswald",
              "Merriweather",
              "Playfair Display",
              "Inter",
              "Nunito"
            ]
          },
          {
            type: "paragraph",
            content: "Each font includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Preview text",
              "Font weights",
              "Available styles",
              "Language support",
              "Download options"
            ]
          }
        ]
      },
      {
        heading: "Font Categories in Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts organizes fonts into categories."
          },
          {
            type: "paragraph",
            content: "Serif Fonts"
          },
          {
            type: "paragraph",
            content: "Fonts with decorative strokes."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Merriweather",
              "Lora",
              "Playfair Display",
              "Cormorant Garamond"
            ]
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Newspapers",
              "Books",
              "Editorial websites"
            ]
          },
          {
            type: "paragraph",
            content: "Appearance:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Traditional",
              "Elegant",
              "Professional"
            ]
          },
          {
            type: "paragraph",
            content: "Sans-Serif Fonts"
          },
          {
            type: "paragraph",
            content: "Fonts without decorative strokes."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Roboto",
              "Open Sans",
              "Inter",
              "Poppins",
              "Montserrat"
            ]
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Applications",
              "Dashboards",
              "Modern websites"
            ]
          },
          {
            type: "paragraph",
            content: "Appearance:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Clean",
              "Modern",
              "Minimal"
            ]
          },
          {
            type: "paragraph",
            content: "Monospace Fonts"
          },
          {
            type: "paragraph",
            content: "Every character occupies equal width."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Roboto Mono",
              "Source Code Pro",
              "Fira Code"
            ]
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Code snippets",
              "Developer tools",
              "Technical documentation"
            ]
          },
          {
            type: "paragraph",
            content: "Display Fonts"
          },
          {
            type: "paragraph",
            content: "Designed for large headings."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Bebas Neue",
              "Anton",
              "Abril Fatface"
            ]
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero sections",
              "Logos",
              "Marketing pages"
            ]
          },
          {
            type: "paragraph",
            content: "Handwriting Fonts"
          },
          {
            type: "paragraph",
            content: "Mimic handwritten text."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pacifico",
              "Dancing Script",
              "Caveat"
            ]
          },
          {
            type: "paragraph",
            content: "Used sparingly for decorative effects."
          }
        ]
      },
      {
        heading: "Adding Google Fonts to a Website",
        blocks: [
          {
            type: "paragraph",
            content: "There are multiple ways to use Google Fonts."
          },
          {
            type: "paragraph",
            content: "Method 1: Using the HTML Link Tag"
          },
          {
            type: "paragraph",
            content: "This is the most common method."
          },
          {
            type: "paragraph",
            content: "Step 1:"
          },
          {
            type: "paragraph",
            content: "Choose a font from Google Fonts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Roboto"
          },
          {
            type: "paragraph",
            content: "Step 2:"
          },
          {
            type: "paragraph",
            content: "Copy the generated link."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "Place it inside:"
          },
          {
            type: "output",
            content: "<head>"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<head>

<link
href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
rel="stylesheet">

</head>`
          },
          {
            type: "paragraph",
            content: "Step 3:"
          },
          {
            type: "paragraph",
            content: "Apply the font."
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: "Roboto", sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "Method 2: Using CSS @import"
          },
          {
            type: "paragraph",
            content: "Google Fonts also provides an import statement."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@import url(
'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
);`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: "Roboto", sans-serif;
}`
          }
        ]
      },
      {
        heading: "Which Method Is Better?",
        blocks: [
          {
            type: "paragraph",
            content: "Generally:"
          },
          {
            type: "output",
            content: [
              "<link>  → Preferred",
              "@import → Works but slower"
            ]
          },
          {
            type: "paragraph",
            content: "The <link> method allows browsers to start downloading fonts earlier."
          }
        ]
      },
      {
        heading: "Using Multiple Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "You can load multiple font families."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
href="https://fonts.googleapis.com/css2?family=Roboto&family=Poppins&display=swap"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-family: "Poppins", sans-serif;
}

p {
    font-family: "Roboto", sans-serif;
}`
          }
        ]
      },
      {
        heading: "Using Different Font Weights",
        blocks: [
          {
            type: "paragraph",
            content: "Most Google Fonts provide multiple weights."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "Available weights:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "300 Light",
              "400 Regular",
              "700 Bold"
            ]
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-weight: 700;
}

p {
    font-weight: 300;
}`
          }
        ]
      },
      {
        heading: "Using Italic Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Many fonts support italics."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400&display=swap"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "css",
            content: `p {
    font-style: italic;
}`
          }
        ]
      },
      {
        heading: "Understanding Font Families",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts only loads the font."
          },
          {
            type: "paragraph",
            content: "You still apply it using:"
          },
          {
            type: "output",
            content: "font-family"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: "Montserrat", sans-serif;
}`
          },
          {
            type: "paragraph",
            content: "Always include a fallback:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family:
        "Montserrat",
        Arial,
        sans-serif;
}`
          }
        ]
      },
      {
        heading: "Variable Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "A feature many tutorials barely discuss."
          },
          {
            type: "paragraph",
            content: "Traditional fonts require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Light Font File",
              "Regular Font File",
              "Bold Font File",
              "Black Font File"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple downloads."
          },
          {
            type: "paragraph",
            content: "Variable fonts store everything in one file."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Weight Range:",
              "100–900"
            ]
          },
          {
            type: "paragraph",
            content: "Single file."
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
              "Smaller file size",
              "More flexibility"
            ]
          },
          {
            type: "paragraph",
            content: "Many Google Fonts now provide variable versions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `font-variation-settings:
    "wght" 650;`
          }
        ]
      },
      {
        heading: "Font Pairing",
        blocks: [
          {
            type: "paragraph",
            content: "Choosing complementary fonts is an important design skill."
          },
          {
            type: "paragraph",
            content: "Common combinations:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Roboto + Merriweather",
                description: "Modern + Traditional"
              },
              {
                title: "Montserrat + Open Sans",
                description: "Professional + Readable"
              },
              {
                title: "Playfair Display + Inter",
                description: "Elegant + Modern"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Typical pattern:"
          },
          {
            type: "output",
            content: [
              "Heading Font",
              "      +",
              "Body Font"
            ]
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "A topic often ignored by beginner tutorials."
          },
          {
            type: "paragraph",
            content: "Every font download adds network requests."
          },
          {
            type: "paragraph",
            content: "Poor practice:"
          },
          {
            type: "output",
            content: [
              "10 Font Families",
              "15 Font Weights"
            ]
          },
          {
            type: "paragraph",
            content: "Large downloads."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "output",
            content: [
              "1–3 Font Families",
              "Only Needed Weights"
            ]
          },
          {
            type: "paragraph",
            content: "This improves performance."
          }
        ]
      },
      {
        heading: "The display Parameter",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts provides:"
          },
          {
            type: "output",
            content: "display=swap"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          },
          {
            type: "paragraph",
            content: "This controls what happens before the font loads."
          }
        ]
      },
      {
        heading: "Why display=swap Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Without it:"
          },
          {
            type: "output",
            content: "Invisible Text may appear temporarily."
          },
          {
            type: "paragraph",
            content: "With:"
          },
          {
            type: "flow",
            steps: [
              "Fallback Font",
              "→",
              "Google Font Loads",
              "→",
              "Font Swaps"
            ]
          },
          {
            type: "paragraph",
            content: "Users can read content immediately."
          },
          {
            type: "paragraph",
            content: "This improves perceived performance."
          }
        ]
      },
      {
        heading: "Preconnect Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "An advanced optimization rarely covered in beginner guides."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="preconnect"
href="https://fonts.googleapis.com">

<link
rel="preconnect"
href="https://fonts.gstatic.com"
crossorigin>`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster Connection",
              "Faster Font Loading"
            ]
          },
          {
            type: "paragraph",
            content: "Many production websites use this technique."
          }
        ]
      },
      {
        heading: "Self-Hosting Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of loading fonts from Google servers:"
          },
          {
            type: "output",
            content: "Google CDN"
          },
          {
            type: "paragraph",
            content: "you can download font files and host them yourself."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "More control",
              "Better privacy",
              "Reduced external dependencies"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `@font-face {
    font-family: "MyFont";

    src: url("myfont.woff2");
}`
          },
          {
            type: "paragraph",
            content: "This approach is increasingly common in privacy-focused applications."
          }
        ]
      },
      {
        heading: "Google Fonts and Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Font selection affects accessibility."
          },
          {
            type: "paragraph",
            content: "Good choices:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Roboto",
              "Open Sans",
              "Inter",
              "Lato",
              "Nunito"
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
              "Easy to read",
              "Clear letterforms",
              "Good spacing"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "output",
            content: "Overly decorative fonts for body content."
          }
        ]
      },
      {
        heading: "Language Support",
        blocks: [
          {
            type: "paragraph",
            content: "One major advantage of Google Fonts is multilingual support."
          },
          {
            type: "paragraph",
            content: "Many fonts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "English",
              "French",
              "German",
              "Spanish",
              "Hindi",
              "Arabic",
              "Japanese",
              "Korean",
              "Chinese"
            ]
          },
          {
            type: "paragraph",
            content: "Before choosing a font, verify that it supports the languages used on your website."
          }
        ]
      },
      {
        heading: "Google Fonts and Responsive Design",
        blocks: [
          {
            type: "paragraph",
            content: "Fonts should adapt to different screens."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-size:
    clamp(2rem, 5vw, 4rem);
}`
          },
          {
            type: "paragraph",
            content: "This creates responsive typography."
          },
          {
            type: "paragraph",
            content: "Google Fonts work seamlessly with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile devices",
              "Tablets",
              "Laptops",
              "Large screens"
            ]
          }
        ]
      },
      {
        heading: "Browser Internals: What Happens When a Google Font Loads?",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials stop at the <link> tag."
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "flow",
            steps: [
              "HTML Page",
              "→",
              "Browser Reads Font Link",
              "→",
              "Google CSS Downloaded",
              "→",
              "Font Files Requested",
              "→",
              "Font Cached",
              "→",
              "Text Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Once cached, future page loads become faster."
          },
          {
            type: "paragraph",
            content: "This is one reason Google Fonts are popular."
          }
        ]
      },
      {
        heading: "Common Google Fonts Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Loading Too Many Fonts",
                answer: "Loading 10 different font families is a bad practice. It severely harms your website's performance and loading speed."
              },
              {
                question: "Loading Unused Weights",
                answer: "Bad practice is loading 100, 200, 300, 400, 500, 600, 700, 800, 900 when you are only actively using 400 and 700 on your website."
              },
              {
                question: "Forgetting Fallback Fonts",
                answer: "Never use just font-family: \"Roboto\";. Always provide a fallback, such as font-family: \"Roboto\", sans-serif; so the browser has a backup if Google Fonts fails to load."
              },
              {
                question: "Using Decorative Fonts for Paragraphs",
                answer: "Using highly stylized fonts for body text makes your content very hard to read. Save decorative fonts for short headings."
              },
              {
                question: "Ignoring Performance",
                answer: "Too many font requests slow websites down. Use preconnect tags, limit weights, and utilize display=swap to keep your site fast."
              }
            ]
          }
        ]
      },
      {
        heading: "Popular Google Fonts Used in Real Projects",
        blocks: [
          {
            type: "table",
            headers: [
              "Font",
              "Common Usage"
            ],
            rows: [
              [
                "Roboto",
                "Apps and Android-style UI"
              ],
              [
                "Inter",
                "Modern interfaces"
              ],
              [
                "Open Sans",
                "Blogs and websites"
              ],
              [
                "Poppins",
                "Landing pages"
              ],
              [
                "Montserrat",
                "Marketing sites"
              ],
              [
                "Lato",
                "Corporate websites"
              ],
              [
                "Merriweather",
                "Articles and blogs"
              ],
              [
                "Playfair Display",
                "Luxury branding"
              ],
              [
                "Nunito",
                "Friendly UI designs"
              ],
              [
                "Oswald",
                "Headlines"
              ]
            ]
          }
        ]
      },
      {
        heading: "Lesser-Known Google Fonts Features",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials only explain how to copy a link and use a font. Modern Google Fonts provide much more."
          },
          {
            type: "cards",
            items: [
              {
                title: "Variable Fonts",
                description: "One file containing multiple weights."
              },
              {
                title: "Font Display Control",
                description: "Using display=swap for faster rendering."
              },
              {
                title: "Preconnect Optimization",
                description: "Speeds up font downloads."
              },
              {
                title: "Self-Hosting",
                description: "Host fonts locally instead of using Google's CDN."
              },
              {
                title: "Language Subsetting",
                description: "Load only required character sets."
              },
              {
                title: "Responsive Typography",
                description: "Combine Google Fonts with modern CSS functions like clamp()."
              },
              {
                title: "Performance Tuning",
                description: "Reduce unnecessary font weights and families."
              }
            ]
          },
          {
            type: "paragraph",
            content: "These techniques are commonly used by professional developers but rarely covered in beginner tutorials."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Google Fonts is a free library of open-source web fonts that allows developers to use high-quality typography on websites without relying on fonts installed on users' devices. Fonts can be added using HTML <link> tags or CSS @import statements, then applied through the font-family property. Google Fonts supports multiple font categories, font weights, italics, variable fonts, multilingual character sets, and responsive design. Advanced techniques such as display=swap, preconnect optimization, self-hosting, and variable font usage improve both performance and user experience. Proper use of Google Fonts helps create attractive, readable, accessible, and professional websites across all devices and browsers."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Performance is key with web fonts. Always include `&display=swap` in your Google Fonts URL. This ensures your text becomes visible immediately using a fallback system font, preventing the dreaded 'Flash of Invisible Text' (FOIT) while the Google Font finishes downloading."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Icons
============================= */
    "css-icons": {
    title: "Icons",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites rarely rely on plain text alone. Small visual symbols such as search icons, menu icons, social media icons, notification icons, shopping carts, user profiles, and navigation arrows help users understand interfaces quickly."
          },
          {
            type: "paragraph",
            content: "These symbols are called icons."
          },
          {
            type: "paragraph",
            content: "CSS itself does not provide a built-in collection of icons, but it allows developers to display, style, customize, animate, and manage icons from various sources."
          },
          {
            type: "paragraph",
            content: "Icons are used extensively in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation menus",
              "Buttons",
              "Forms",
              "Dashboards",
              "E-commerce websites",
              "Mobile applications",
              "Social media platforms",
              "Admin panels"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding how icons work is an important part of modern web design."
          }
        ]
      },
      {
        heading: "What Are Icons?",
        blocks: [
          {
            type: "paragraph",
            content: "Icons are small graphical representations of actions, objects, concepts, or information."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "🔍 Search",
              "🏠 Home",
              "❤️ Like",
              "🛒 Cart",
              "⚙️ Settings",
              "📧 Email"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of displaying lengthy text, icons provide a fast and visually appealing way to communicate functionality."
          }
        ]
      },
      {
        heading: "Why Use Icons?",
        blocks: [
          {
            type: "paragraph",
            content: "Icons improve user experience by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Making interfaces easier to understand",
              "Reducing text clutter",
              "Improving navigation",
              "Creating professional designs",
              "Enhancing visual appeal",
              "Saving space"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Without icon:"
          },
          {
            type: "code",
            language: "html",
            content: `<button>
    Search
</button>`
          },
          {
            type: "paragraph",
            content: "With icon:"
          },
          {
            type: "code",
            language: "html",
            content: `<button>
    🔍 Search
</button>`
          },
          {
            type: "paragraph",
            content: "Users can immediately recognize the button's purpose."
          }
        ]
      },
      {
        heading: "Ways to Add Icons in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "There are several popular methods:"
          },
          {
            type: "orderedList",
            style: "unordered",
            items: [
              "1. Icon Fonts (Examples: Font Awesome, Bootstrap Icons, Material Symbols)",
              "2. SVG Icons (Scalable vector graphics)",
              "3. Image Icons (PNG, JPG, WebP, etc.)",
              "4. Unicode Characters (Built-in symbols from Unicode)",
              "5. CSS-Generated Icons (Icons created using pure CSS)"
            ]
          }
        ]
      },
      {
        heading: "Using Font Awesome Icons",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most popular icon libraries is:"
          },
          {
            type: "output",
            content: "Font Awesome"
          },
          {
            type: "paragraph",
            content: "First include the library:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">`
          },
          {
            type: "paragraph",
            content: "Then use icons:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="fa-solid fa-house"></i>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "🏠 Home Icon"
          }
        ]
      },
      {
        heading: "Styling Icons with CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Icons behave like text in most icon libraries."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="fa-solid fa-heart"></i>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `i {
    color: red;
    font-size: 40px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Large Red Heart Icon"
          }
        ]
      },
      {
        heading: "Changing Icon Color",
        blocks: [
          {
            type: "paragraph",
            content: "Use the color property."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="fa-solid fa-star icon"></i>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Blue Star Icon"
          }
        ]
      },
      {
        heading: "Changing Icon Size",
        blocks: [
          {
            type: "paragraph",
            content: "Use font-size."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    font-size: 60px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Large Icon"
          }
        ]
      },
      {
        heading: "Adding Background to Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    background: black;
    color: white;
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "White Icon on Black Background"
          }
        ]
      },
      {
        heading: "Making Icons Circular",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    background: #3498db;
    color: white;
    padding: 15px;
    border-radius: 50%;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Circular Social Media Icon"
          },
          {
            type: "paragraph",
            content: "Commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Facebook buttons",
              "Twitter buttons",
              "Contact sections"
            ]
          }
        ]
      },
      {
        heading: "Adding Borders to Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    border: 2px solid black;
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Bordered Icon"
          }
        ]
      },
      {
        heading: "Hover Effects on Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Icons often change appearance when users hover over them."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    color: black;
}

.icon:hover {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Black → Red on Hover"
          }
        ]
      },
      {
        heading: "Icon Transitions",
        blocks: [
          {
            type: "paragraph",
            content: "Smooth hover effects improve user experience."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    color: black;
    transition: 0.3s;
}

.icon:hover {
    color: blue;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Smooth Color Change"
          }
        ]
      },
      {
        heading: "Rotating Icons",
        blocks: [
          {
            type: "paragraph",
            content: "CSS transforms can rotate icons."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon:hover {
    transform: rotate(180deg);
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Icon Rotates on Hover"
          }
        ]
      },
      {
        heading: "Scaling Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    transition: 0.3s;
}

.icon:hover {
    transform: scale(1.2);
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Icon Enlarges on Hover"
          }
        ]
      },
      {
        heading: "Adding Shadows to Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.icon {
    text-shadow: 2px 2px 5px gray;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Shadowed Icon"
          }
        ]
      },
      {
        heading: "Using Bootstrap Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Another popular icon library:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="bi bi-alarm"></i>`
          },
          {
            type: "paragraph",
            content: "Displays:"
          },
          {
            type: "output",
            content: "Alarm Icon"
          }
        ]
      },
      {
        heading: "Using Google Material Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Google provides Material Design icons."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link
href="https://fonts.googleapis.com/icon?family=Material+Icons"
rel="stylesheet">`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "html",
            content: `<span class="material-icons">
    home
</span>`
          },
          {
            type: "paragraph",
            content: "Displays:"
          },
          {
            type: "output",
            content: "Home Icon"
          }
        ]
      },
      {
        heading: "Using Unicode Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you don't need an external library."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<p>★ Star</p>

<p>✓ Success</p>

<p>✉ Email</p>`
          },
          {
            type: "paragraph",
            content: "These are Unicode characters."
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No downloads",
              "Fast loading",
              "Simple implementation"
            ]
          }
        ]
      },
      {
        heading: "Styling Unicode Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `.star {
    color: gold;
    font-size: 40px;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<span class="star">★</span>`
          }
        ]
      },
      {
        heading: "Using SVG Icons",
        blocks: [
          {
            type: "paragraph",
            content: "SVG is now considered the modern standard for many websites."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<svg
width="50"
height="50"
viewBox="0 0 24 24">

    <path
    fill="red"
    d="..."/>

</svg>`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Infinitely scalable",
              "Lightweight",
              "High quality",
              "Customizable",
              "Animation support"
            ]
          }
        ]
      },
      {
        heading: "Styling SVG Icons with CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `svg {
    width: 50px;
    height: 50px;
    fill: blue;
}`
          },
          {
            type: "paragraph",
            content: "The fill property controls SVG color."
          }
        ]
      },
      {
        heading: "Inline SVG Example",
        blocks: [
          {
            type: "code",
            language: "html",
            content: `<svg
viewBox="0 0 24 24">

    <circle
    cx="12"
    cy="12"
    r="10"/>

</svg>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `svg {
    fill: green;
}`
          }
        ]
      },
      {
        heading: "Image-Based Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional image icons can also be used."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<img
src="search.png"
alt="Search Icon">`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `img {
    width: 30px;
}`
          },
          {
            type: "paragraph",
            content: "Although simple, image icons are less flexible than SVGs."
          }
        ]
      },
      {
        heading: "CSS Generated Icons",
        blocks: [
          {
            type: "paragraph",
            content: "Many icons can be created using only CSS."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<div class="plus"></div>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.plus {
    width: 30px;
    height: 30px;
    position: relative;
}

.plus::before,
.plus::after {
    content: "";
    position: absolute;
    background: black;
}

.plus::before {
    width: 30px;
    height: 4px;
    top: 13px;
}

.plus::after {
    width: 4px;
    height: 30px;
    left: 13px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "+ Icon"
          },
          {
            type: "paragraph",
            content: "No images required."
          }
        ]
      },
      {
        heading: "Social Media Icons",
        blocks: [
          {
            type: "paragraph",
            content: "A very common use case."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="fa-brands fa-facebook"></i>

<i class="fa-brands fa-instagram"></i>

<i class="fa-brands fa-youtube"></i>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `i {
    font-size: 30px;
    margin: 10px;
}`
          }
        ]
      },
      {
        heading: "Icon Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials ignore accessibility, but professional websites must support screen readers."
          },
          {
            type: "paragraph",
            content: "Decorative icon:"
          },
          {
            type: "code",
            language: "html",
            content: `<i
class="fa-solid fa-star"
aria-hidden="true">
</i>`
          },
          {
            type: "paragraph",
            content: "Screen readers ignore decorative icons."
          },
          {
            type: "paragraph",
            content: "Meaningful Icons"
          },
          {
            type: "paragraph",
            content: "If an icon conveys important information, provide accessible text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<button aria-label="Search">
    <i class="fa-solid fa-magnifying-glass"></i>
</button>`
          },
          {
            type: "paragraph",
            content: "Screen readers announce:"
          },
          {
            type: "output",
            content: [
              "Search",
              "instead of:",
              "Button"
            ]
          }
        ]
      },
      {
        heading: "Icon Alignment with Text",
        blocks: [
          {
            type: "paragraph",
            content: "Icons often appear beside text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<button>
    <i class="fa-solid fa-download"></i>
    Download
</button>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `button i {
    margin-right: 5px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "[↓] Download"
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "When using icons, choose wisely:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Small Projects",
                description: "Unicode icons may be enough."
              },
              {
                title: "Medium Projects",
                description: "SVG icons are often best."
              },
              {
                title: "Large Applications",
                description: "Icon libraries provide consistency."
              },
              {
                title: "Performance-Critical Sites",
                description: "Use only required icons instead of loading huge icon packs."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Loading thousands of unused icons increases page size unnecessarily."
          }
        ]
      },
      {
        heading: "Font Icons vs SVG Icons",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "Font Icons",
              "SVG Icons"
            ],
            rows: [
              [
                "Scalability",
                "Excellent",
                "Excellent"
              ],
              [
                "Quality",
                "Good",
                "Excellent"
              ],
              [
                "CSS Styling",
                "Easy",
                "Easy"
              ],
              [
                "Animation",
                "Limited",
                "Powerful"
              ],
              [
                "Accessibility",
                "Moderate",
                "Better"
              ],
              [
                "Performance",
                "Good",
                "Excellent"
              ],
              [
                "Modern Usage",
                "Common",
                "Preferred"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Today, SVG icons are generally recommended for new projects."
          }
        ]
      },
      {
        heading: "Browser Internals: How Icon Fonts Work",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials simply show how to use icon libraries, but understanding the internal mechanism is valuable."
          },
          {
            type: "paragraph",
            content: "When using Font Awesome:"
          },
          {
            type: "code",
            language: "html",
            content: `<i class="fa-solid fa-user"></i>`
          },
          {
            type: "paragraph",
            content: "the icon is not actually an image."
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "flow",
            steps: [
              "Icon Font File",
              "→",
              "Unicode Character",
              "→",
              "Browser Rendering Engine",
              "→",
              "Displayed Icon"
            ]
          },
          {
            type: "paragraph",
            content: "The browser renders the icon similarly to text characters."
          },
          {
            type: "paragraph",
            content: "This is why properties such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "color",
              "font-size",
              "text-shadow"
            ]
          },
          {
            type: "paragraph",
            content: "work naturally on font icons."
          },
          {
            type: "paragraph",
            content: "SVG icons work differently because the browser renders vector graphics instead of font glyphs."
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
                question: "Forgetting Library Import",
                answer: "Using classes like 'fa-solid fa-house' won't work without linking the Font Awesome stylesheet in your HTML head. The icon simply won't display.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "html",
                    content: `<i class="fa-solid fa-house"></i>`
                  }
                ]
              },
              {
                question: "Using Images for Every Icon",
                answer: "Relying purely on PNG or JPG images for icons is bad for scalability and performance. They can become pixelated on high-resolution screens and require multiple HTTP requests."
              },
              {
                question: "Using Icons Without Labels",
                answer: "An icon button without text or an aria-label is completely inaccessible to screen reader users, who will not understand the button's purpose.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "html",
                    content: `<button>🔍</button>`
                  },
                  {
                    title: "Better Practice",
                    language: "html",
                    content: `<button aria-label="Search">🔍</button>`
                  }
                ]
              },
              {
                question: "Loading Huge Libraries Unnecessarily",
                answer: "Importing a 1MB font icon library when you only need three icons slows down your website. Consider SVG icons for small-scale needs to boost performance."
              }
            ]
          }
        ]
      },
      {
        heading: "Modern Icon Sources",
        blocks: [
          {
            type: "paragraph",
            content: "Popular icon collections include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Font Awesome",
              "Bootstrap Icons",
              "Material Symbols",
              "CSS.gg",
              "Heroicons",
              "Feather Icons",
              "Tabler Icons",
              "Lucide Icons"
            ]
          },
          {
            type: "paragraph",
            content: "Most modern frameworks and design systems rely heavily on SVG-based icon sets."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS icons enhance website usability, navigation, and visual appeal by representing actions and information through recognizable symbols. Icons can be added using icon fonts, SVG graphics, image files, Unicode characters, or pure CSS techniques. Developers can style icons with CSS properties such as color, font-size, background, border, transform, and transition to create interactive effects. Popular icon libraries include Font Awesome, Bootstrap Icons, and Material Symbols, while SVG icons have become the preferred modern solution because they are scalable, lightweight, highly customizable, and accessible. Understanding how icon fonts and SVGs work internally, along with proper accessibility practices and performance optimization, helps developers build professional, user-friendly, and efficient web interfaces."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 As you advance in frontend development, you'll find that inline SVGs are the gold standard for icons. Unlike font icons, SVGs can be manipulated in intricate ways, don't suffer from font-loading layout shifts, and offer pristine rendering quality on all modern devices."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Links
============================= */
    "css-links": {
    title: "Links",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Links",
        blocks: [
          {
            type: "paragraph",
            content: "Links are one of the most important elements on the web. They connect webpages, documents, images, downloads, and external resources, allowing users to navigate between different parts of a website or across the internet."
          },
          {
            type: "paragraph",
            content: "By default, browsers apply predefined styles to links, such as blue text for unvisited links and purple text for visited links. While these default styles work, modern websites usually customize links using CSS to match their design and improve user experience."
          },
          {
            type: "paragraph",
            content: "CSS provides complete control over how links look and behave, including colors, hover effects, animations, buttons, navigation menus, and accessibility improvements."
          }
        ]
      },
      {
        heading: "What Are CSS Links?",
        blocks: [
          {
            type: "paragraph",
            content: "A link is created using the HTML <a> (anchor) element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="https://example.com">
    Visit Website
</a>`
          },
          {
            type: "paragraph",
            content: "Without CSS, the browser applies its own default styling."
          },
          {
            type: "paragraph",
            content: "Default appearance:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unvisited Link → Blue",
              "Visited Link → Purple",
              "Hover → Underlined"
            ]
          },
          {
            type: "paragraph",
            content: "CSS allows us to customize these styles."
          }
        ]
      },
      {
        heading: "Why Style Links?",
        blocks: [
          {
            type: "paragraph",
            content: "Link styling helps:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Improve website appearance",
              "Enhance user experience",
              "Match brand colors",
              "Improve accessibility",
              "Create interactive navigation",
              "Increase click-through rates"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Without CSS:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#">Home</a>`
          },
          {
            type: "paragraph",
            content: "Default browser styling may look outdated."
          },
          {
            type: "paragraph",
            content: "With CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: white;
    background: black;
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "The link now appears modern and professional."
          }
        ]
      },
      {
        heading: "Basic Link Styling",
        blocks: [
          {
            type: "paragraph",
            content: "The simplest way to style links is by selecting the <a> element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#">
    Click Here
</a>`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Red Link"
          },
          {
            type: "paragraph",
            content: "Changing Link Color"
          },
          {
            type: "paragraph",
            content: "Use the color property."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Green Link Text"
          }
        ]
      },
      {
        heading: "Removing Underlines",
        blocks: [
          {
            type: "paragraph",
            content: "Links are underlined by default."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    text-decoration: none;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Link without underline"
          },
          {
            type: "paragraph",
            content: "This is commonly used in navigation menus."
          },
          {
            type: "paragraph",
            content: "Adding Underlines Back"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    text-decoration: underline;
}`
          },
          {
            type: "paragraph",
            content: "You can also customize the underline."
          },
          {
            type: "code",
            language: "css",
            content: `a {
    text-decoration-line: underline;
}`
          }
        ]
      },
      {
        heading: "Link Pseudo-Classes",
        blocks: [
          {
            type: "paragraph",
            content: "CSS provides special pseudo-classes for different link states."
          },
          {
            type: "paragraph",
            content: "These are among the most important concepts when styling links."
          },
          {
            type: "table",
            headers: [
              "Pseudo-Class",
              "Description"
            ],
            rows: [
              [
                ":link",
                "Unvisited link"
              ],
              [
                ":visited",
                "Visited link"
              ],
              [
                ":hover",
                "Mouse over link"
              ],
              [
                ":active",
                "Link being clicked"
              ],
              [
                ":focus",
                "Link focused by keyboard"
              ]
            ]
          }
        ]
      },
      {
        heading: "The :link Pseudo-Class",
        blocks: [
          {
            type: "paragraph",
            content: "Styles unvisited links."
          },
          {
            type: "paragraph",
            content: "Example:"
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
            content: "Result:"
          },
          {
            type: "output",
            content: "Blue Unvisited Link"
          }
        ]
      },
      {
        heading: "The :visited Pseudo-Class",
        blocks: [
          {
            type: "paragraph",
            content: "Styles links that the user has already visited."
          },
          {
            type: "paragraph",
            content: "Example:"
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
            content: "Result:"
          },
          {
            type: "output",
            content: "Purple Visited Link"
          }
        ]
      },
      {
        heading: "The :hover Pseudo-Class",
        blocks: [
          {
            type: "paragraph",
            content: "Applies styles when the mouse pointer moves over the link."
          },
          {
            type: "paragraph",
            content: "Example:"
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
            content: "Result:"
          },
          {
            type: "output",
            content: "Blue → Red on Hover"
          },
          {
            type: "paragraph",
            content: "This is one of the most commonly used link effects."
          }
        ]
      },
      {
        heading: "The :active Pseudo-Class",
        blocks: [
          {
            type: "paragraph",
            content: "Applies while the link is being clicked."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a:active {
    color: orange;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Orange During Click"
          }
        ]
      },
      {
        heading: "The :focus Pseudo-Class",
        blocks: [
          {
            type: "paragraph",
            content: "Applies when a user navigates using the keyboard."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a:focus {
    outline: 2px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "This improves accessibility."
          }
        ]
      },
      {
        heading: "Correct Order of Link Pseudo-Classes",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important CSS rules for links is the order of pseudo-classes."
          },
          {
            type: "paragraph",
            content: "Recommended order:"
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
            content: "Remember:"
          },
          {
            type: "output",
            content: [
              "LVHA",
              "",
              "Link",
              "Visited",
              "Hover",
              "Active"
            ]
          },
          {
            type: "paragraph",
            content: "Incorrect ordering can cause styles to behave unexpectedly."
          }
        ]
      },
      {
        heading: "Styling All Link States Together",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
}

a:active {
    color: orange;
}`
          },
          {
            type: "paragraph",
            content: "This creates a complete link experience."
          }
        ]
      },
      {
        heading: "Changing Link Background",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    background-color: yellow;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Link with Yellow Background"
          }
        ]
      },
      {
        heading: "Adding Padding",
        blocks: [
          {
            type: "paragraph",
            content: "Padding creates clickable space around the text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Larger Click Area"
          }
        ]
      },
      {
        heading: "Adding Borders",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    border: 2px solid black;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Bordered Link"
          }
        ]
      },
      {
        heading: "Creating Button-Like Links",
        blocks: [
          {
            type: "paragraph",
            content: "Links are often styled as buttons."
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="#">
    Register Now
</a>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    display: inline-block;
    background: #3498db;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 5px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Button-Style Link"
          }
        ]
      },
      {
        heading: "Rounded Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    border-radius: 25px;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Pill-Shaped Link"
          },
          {
            type: "paragraph",
            content: "Popular in modern UI design."
          }
        ]
      },
      {
        heading: "Hover Effects for Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a:hover {
    background: black;
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Background Changes on Hover"
          }
        ]
      },
      {
        heading: "Smooth Link Animations",
        blocks: [
          {
            type: "paragraph",
            content: "Transitions make hover effects smoother."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    transition: 0.3s;
}`
          },
          {
            type: "paragraph",
            content: "Combined with:"
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
            content: "The color changes gradually."
          }
        ]
      },
      {
        heading: "Underline Animation Effect",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites often animate underlines."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    text-decoration: none;
    position: relative;
}

a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background: black;
    transition: 0.3s;
}

a:hover::after {
    width: 100%;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Animated Underline on Hover"
          }
        ]
      },
      {
        heading: "Styling Navigation Menu Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<nav>

<a href="#">Home</a>

<a href="#">About</a>

<a href="#">Services</a>

</nav>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `nav a {
    text-decoration: none;
    padding: 10px;
}`
          },
          {
            type: "paragraph",
            content: "Commonly used in websites."
          }
        ]
      },
      {
        heading: "Block-Level Links",
        blocks: [
          {
            type: "paragraph",
            content: "Links are inline elements by default."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    display: block;
}`
          },
          {
            type: "paragraph",
            content: "Now the link occupies the entire available width."
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Menus",
              "Sidebars",
              "Cards"
            ]
          }
        ]
      },
      {
        heading: "Creating Full-Card Clickable Links",
        blocks: [
          {
            type: "paragraph",
            content: "Modern websites often make entire cards clickable."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a class="card" href="#">
    Product Details
</a>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.card {
    display: block;
    padding: 20px;
    border: 1px solid gray;
}`
          },
          {
            type: "paragraph",
            content: "Now the whole card acts as a link."
          }
        ]
      },
      {
        heading: "Styling Download Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="guide.pdf">
    Download Guide
</a>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    font-weight: bold;
}`
          },
          {
            type: "paragraph",
            content: "Can be combined with icons:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="guide.pdf">
    📄 Download PDF
</a>`
          }
        ]
      },
      {
        heading: "Styling Email Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="mailto:info@example.com">
    Contact Us
</a>`
          },
          {
            type: "paragraph",
            content: "CSS styling works exactly the same."
          }
        ]
      },
      {
        heading: "Styling Telephone Links",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="tel:+123456789">
    Call Us
</a>`
          },
          {
            type: "paragraph",
            content: "Useful for mobile websites."
          }
        ]
      },
      {
        heading: "Link Colors and Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "A common mistake is relying only on color differences."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: lightgray;
}`
          },
          {
            type: "paragraph",
            content: "Users may not recognize it as a link."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    color: blue;
    text-decoration: underline;
}`
          },
          {
            type: "paragraph",
            content: "Accessibility guidelines recommend making links clearly identifiable."
          }
        ]
      },
      {
        heading: "Focus Styling for Keyboard Users",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials ignore keyboard navigation."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a:focus {
    outline: 3px solid blue;
}`
          },
          {
            type: "paragraph",
            content: "This helps users who navigate using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tab Key",
              "Shift + Tab"
            ]
          },
          {
            type: "paragraph",
            content: "Removing focus indicators without replacements harms accessibility."
          }
        ]
      },
      {
        heading: "Cursor Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Links automatically show a pointer cursor."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `a {
    cursor: pointer;
}`
          },
          {
            type: "paragraph",
            content: "Usually unnecessary because browsers already apply it."
          }
        ]
      },
      {
        heading: "Styling External Links",
        blocks: [
          {
            type: "paragraph",
            content: "You may want external links to appear differently."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<a class="external" href="https://example.com">
    Website
</a>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `.external {
    color: green;
}`
          },
          {
            type: "paragraph",
            content: "You can even add an icon:"
          },
          {
            type: "code",
            language: "css",
            content: `.external::after {
    content: " ↗";
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Website ↗"
          }
        ]
      },
      {
        heading: "Styling Links Inside Different Sections",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `footer a {
    color: white;
}`
          },
          {
            type: "paragraph",
            content: "Only footer links are affected."
          }
        ]
      },
      {
        heading: "Browser Internals: How Links Work",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials explain link styling but not what happens internally."
          },
          {
            type: "paragraph",
            content: "When the browser encounters:"
          },
          {
            type: "code",
            language: "html",
            content: `<a href="about.html">
    About
</a>`
          },
          {
            type: "paragraph",
            content: "it creates a hyperlink object."
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "flow",
            steps: [
              "HTML Anchor",
              "→",
              "DOM Element",
              "→",
              "Link State Calculation",
              "→",
              "Visited / Unvisited",
              "→",
              "CSS Rules Applied",
              "→",
              "Rendered Link"
            ]
          },
          {
            type: "paragraph",
            content: "The browser continuously tracks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Whether the link was visited",
              "Whether it is hovered",
              "Whether it has focus",
              "Whether it is active"
            ]
          },
          {
            type: "paragraph",
            content: "This is why link pseudo-classes update automatically."
          }
        ]
      },
      {
        heading: "Privacy Restrictions on :visited",
        blocks: [
          {
            type: "paragraph",
            content: "One advanced topic most beginner tutorials ignore is browser security."
          },
          {
            type: "paragraph",
            content: "Years ago, websites could detect a user's browsing history using:"
          },
          {
            type: "output",
            content: "a:visited"
          },
          {
            type: "paragraph",
            content: "Modern browsers prevent this."
          },
          {
            type: "paragraph",
            content: "For security reasons:"
          },
          {
            type: "output",
            content: [
              "Visited Link Information",
              "Cannot Be Fully Accessed by JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "Only limited visual styling is allowed."
          },
          {
            type: "paragraph",
            content: "This protects user privacy."
          }
        ]
      },
      {
        heading: "Common Link Styling Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Removing Underlines Everywhere",
                answer: "Setting text-decoration: none; without providing another visual indicator can confuse users. They may not realize the text is clickable.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `a {
    text-decoration: none;
}`
                  }
                ]
              },
              {
                question: "Ignoring Hover States",
                answer: "Failing to define an a:hover state provides no hover feedback, making the link feel unresponsive and hurting user experience.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `a {
    color: blue;
}`
                  }
                ]
              },
              {
                question: "Removing Focus Outlines",
                answer: "Removing focus outlines without a replacement styling drastically harms accessibility for keyboard navigators.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `a:focus {
    outline: none;
}`
                  }
                ]
              },
              {
                question: "Using Low Contrast Colors",
                answer: "Using faint colors creates poor readability. Ensure your link color stands out against the background.",
                examples: [
                  {
                    title: "Bad Practice",
                    language: "css",
                    content: `a {
    color: #cccccc;
}`
                  }
                ]
              },
              {
                question: "Forgetting Visited Styles",
                answer: "Users may find navigation much harder if visited pages are not visually distinguishable from unvisited ones."
              }
            ]
          }
        ]
      },
      {
        heading: "Modern Link Design Trends",
        blocks: [
          {
            type: "paragraph",
            content: "Many modern websites use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Animated underlines",
              "Button-style links",
              "Gradient hover effects",
              "Icon-enhanced links",
              "Full-card clickable areas",
              "Smooth transitions",
              "Accessible focus indicators"
            ]
          },
          {
            type: "paragraph",
            content: "Good link design balances appearance, usability, and accessibility."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS links allow developers to customize the appearance and behavior of HTML hyperlinks. Using properties such as color, text-decoration, background, padding, border, and transition, links can be transformed from simple text into interactive navigation elements and buttons. CSS pseudo-classes like :link, :visited, :hover, :active, and :focus enable styling based on different user interactions. Modern web development also emphasizes accessibility through visible focus states, adequate contrast, and clear link identification. Understanding link states, browser behavior, privacy restrictions on visited links, and advanced effects such as animated underlines helps developers create professional, user-friendly, and accessible navigation experiences."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Always remember the LVHA rule (`:link`, `:visited`, `:hover`, `:active`) when declaring link pseudo-classes in your CSS. Because of the CSS cascade, placing them out of order can cause your hover or active states to be overridden and seemingly broken!"
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Lists
============================= */
    "css-lists": {
    title: "Lists",
    readingTime: "22 min",
        
    content: [
        {
        heading: "CSS Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Lists are one of the most commonly used elements in web development. They are used for navigation menus, feature lists, product specifications, sidebars, documentation indexes, checklists, and many other types of content."
          },
          {
            type: "paragraph",
            content: "By default, HTML provides basic list styling such as bullets and numbering. CSS allows developers to completely customize how lists appear, including bullet styles, numbering formats, positions, custom icons, spacing, and even creating fully customized navigation menus."
          },
          {
            type: "paragraph",
            content: "Understanding CSS list styling is essential for creating professional and visually appealing websites."
          }
        ]
      },
      {
        heading: "What Are Lists in HTML?",
        blocks: [
          {
            type: "paragraph",
            content: "HTML provides three types of lists:"
          },
          {
            type: "paragraph",
            content: "Unordered List"
          },
          {
            type: "paragraph",
            content: "Uses bullets."
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
          },
          {
            type: "paragraph",
            content: "Ordered List"
          },
          {
            type: "paragraph",
            content: "Uses numbering."
          },
          {
            type: "code",
            language: "html",
            content: `<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "1. HTML",
              "2. CSS",
              "3. JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "Description List"
          },
          {
            type: "paragraph",
            content: "Used for terms and definitions."
          },
          {
            type: "code",
            language: "html",
            content: `<dl>
    <dt>HTML</dt>
    <dd>Markup language</dd>

    <dt>CSS</dt>
    <dd>Styling language</dd>
</dl>`
          }
        ]
      },
      {
        heading: "Why Style Lists Using CSS?",
        blocks: [
          {
            type: "paragraph",
            content: "Default browser list styles are often too basic for modern websites."
          },
          {
            type: "paragraph",
            content: "CSS allows you to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Change bullet styles",
              "Customize numbering",
              "Remove bullets",
              "Use custom images",
              "Adjust spacing",
              "Create navigation menus",
              "Improve readability",
              "Build professional layouts"
            ]
          }
        ]
      },
      {
        heading: "The list-style Property",
        blocks: [
          {
            type: "paragraph",
            content: "The list-style property is a shorthand property that controls list markers."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "list-style: type position image;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style: square inside;
}`
          }
        ]
      },
      {
        heading: "CSS List Properties",
        blocks: [
          {
            type: "paragraph",
            content: "The main list-related properties are:"
          },
          {
            type: "table",
            headers: [
              "Property",
              "Purpose"
            ],
            rows: [
              [
                "list-style-type",
                "Defines marker type"
              ],
              [
                "list-style-position",
                "Controls marker placement"
              ],
              [
                "list-style-image",
                "Uses an image as marker"
              ],
              [
                "list-style",
                "Shorthand property"
              ]
            ]
          }
        ]
      },
      {
        heading: "list-style-type Property",
        blocks: [
          {
            type: "paragraph",
            content: "This property specifies the type of marker displayed."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "output",
            content: "list-style-type: value;"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: square;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "■ HTML",
              "■ CSS",
              "■ JavaScript"
            ]
          }
        ]
      },
      {
        heading: "Common list-style-type Values",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Disc",
                description: "Default unordered list marker. list-style-type: disc; Output: ● Item"
              },
              {
                title: "Circle",
                description: "Hollow circle marker. list-style-type: circle; Output: ○ Item"
              },
              {
                title: "Square",
                description: "Square marker. list-style-type: square; Output: ■ Item"
              },
              {
                title: "None",
                description: "Removes markers completely. list-style-type: none; Output: Item (no bullet)"
              }
            ]
          }
        ]
      },
      {
        heading: "Ordered List Marker Types",
        blocks: [
          {
            type: "paragraph",
            content: "CSS supports many numbering styles."
          },
          {
            type: "cards",
            items: [
              {
                title: "Decimal",
                description: "Default numbering. list-style-type: decimal; Output: 1. 2. 3."
              },
              {
                title: "Lower Alpha",
                description: "list-style-type: lower-alpha; Output: a. b. c."
              },
              {
                title: "Upper Alpha",
                description: "list-style-type: upper-alpha; Output: A. B. C."
              },
              {
                title: "Lower Roman",
                description: "list-style-type: lower-roman; Output: i. ii. iii."
              },
              {
                title: "Upper Roman",
                description: "list-style-type: upper-roman; Output: I. II. III."
              }
            ]
          }
        ]
      },
      {
        heading: "Additional Marker Types",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS supports many more numbering systems."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "css",
            content: `list-style-type: georgian;

list-style-type: armenian;

list-style-type: lower-greek;`
          },
          {
            type: "paragraph",
            content: "These are useful for multilingual and international websites."
          }
        ]
      },
      {
        heading: "list-style-position Property",
        blocks: [
          {
            type: "paragraph",
            content: "This property determines whether markers appear inside or outside the content area."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `list-style-position: inside;`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `list-style-position: outside;`
          },
          {
            type: "paragraph",
            content: "Outside (Default)"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-position: outside;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "• Item text starts here",
              "  and wraps below."
            ]
          },
          {
            type: "paragraph",
            content: "Marker stays outside the text block."
          },
          {
            type: "paragraph",
            content: "Inside"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-position: inside;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "• Item text starts here",
              "and wraps beneath marker."
            ]
          },
          {
            type: "paragraph",
            content: "Marker becomes part of the content flow."
          }
        ]
      },
      {
        heading: "list-style-image Property",
        blocks: [
          {
            type: "paragraph",
            content: "Allows using images as list markers."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "css",
            content: `list-style-image: url("star.png");`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-image: url("check.png");
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "✔ HTML",
              "✔ CSS",
              "✔ JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "When list-style-image Fails"
          },
          {
            type: "paragraph",
            content: "If the image cannot load, browsers fall back to:"
          },
          {
            type: "output",
            content: "list-style-type"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: square;
    list-style-image: url("missing.png");
}`
          },
          {
            type: "paragraph",
            content: "If the image is unavailable, square markers are displayed."
          }
        ]
      },
      {
        heading: "The list-style Shorthand Property",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of writing multiple properties separately:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: square;
    list-style-position: inside;
}`
          },
          {
            type: "paragraph",
            content: "You can write:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style: square inside;
}`
          }
        ]
      },
      {
        heading: "Removing Bullets from Lists",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common CSS tasks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: none;
}`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style: none;
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "HTML",
              "CSS",
              "JavaScript"
            ]
          }
        ]
      },
      {
        heading: "Creating Navigation Menus",
        blocks: [
          {
            type: "paragraph",
            content: "Modern navigation bars often start with unstyled lists."
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
</ul>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style: none;
    padding: 0;
    margin: 0;
}`
          },
          {
            type: "paragraph",
            content: "The bullets disappear, creating a clean foundation for navigation styling."
          }
        ]
      },
      {
        heading: "Controlling List Spacing",
        blocks: [
          {
            type: "paragraph",
            content: "Lists often contain unwanted spacing."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    margin: 0;
    padding: 0;
}`
          },
          {
            type: "paragraph",
            content: "This removes browser default spacing."
          }
        ]
      },
      {
        heading: "Styling Individual List Items",
        blocks: [
          {
            type: "paragraph",
            content: "You can style each list item separately."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `li {
    padding: 10px;
    border-bottom: 1px solid gray;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "HTML",
              "----------",
              "CSS",
              "----------",
              "JavaScript"
            ]
          }
        ]
      },
      {
        heading: "Using Background Images Instead of Markers",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers often avoid list-style-image and use background images."
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>`
          },
          {
            type: "paragraph",
            content: "CSS:"
          },
          {
            type: "code",
            language: "css",
            content: `li {
    list-style: none;

    background-image: url("check.png");

    background-repeat: no-repeat;

    background-position: left center;

    padding-left: 30px;
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
              "Better positioning control",
              "Better sizing control",
              "Better responsiveness"
            ]
          }
        ]
      },
      {
        heading: "Custom List Markers with ::marker",
        blocks: [
          {
            type: "paragraph",
            content: "Modern CSS introduced the ::marker pseudo-element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `li::marker {
    color: red;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Red bullet marker"
          },
          {
            type: "paragraph",
            content: "Change Marker Size"
          },
          {
            type: "code",
            language: "css",
            content: `li::marker {
    font-size: 24px;
}`
          },
          {
            type: "paragraph",
            content: "Change Marker Content"
          },
          {
            type: "code",
            language: "css",
            content: `li::marker {
    content: "✓ ";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "✓ HTML",
              "✓ CSS",
              "✓ JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "This powerful feature is often overlooked by beginner tutorials."
          }
        ]
      },
      {
        heading: "Nested Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Lists can contain other lists."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>
        Frontend

        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>`
          },
          {
            type: "paragraph",
            content: "CSS can style each level differently."
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: square;
}

ul ul {
    list-style-type: circle;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "■ Frontend",
              "   ○ HTML",
              "   ○ CSS"
            ]
          }
        ]
      },
      {
        heading: "Styling Ordered Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ol {
    list-style-type: upper-roman;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "I.",
              "II.",
              "III."
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
              "Legal documents",
              "Reports",
              "Academic content"
            ]
          }
        ]
      },
      {
        heading: "CSS Counters (Advanced List Numbering)",
        blocks: [
          {
            type: "paragraph",
            content: "Most tutorials stop at list-style-type."
          },
          {
            type: "paragraph",
            content: "Professional CSS also supports counters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `ol {
    counter-reset: section;
}

li {
    counter-increment: section;
}

li::before {
    content: "Step " counter(section) ": ";
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Step 1:",
              "Step 2:",
              "Step 3:"
            ]
          },
          {
            type: "paragraph",
            content: "CSS counters allow completely custom numbering systems."
          }
        ]
      },
      {
        heading: "Browser Default List Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers automatically apply:"
          },
          {
            type: "code",
            language: "css",
            content: `ul {
    list-style-type: disc;
    padding-left: 40px;
}`
          },
          {
            type: "paragraph",
            content: "This is why lists appear indented even when no CSS is written."
          }
        ]
      },
      {
        heading: "Accessibility Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Lists provide semantic meaning."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>Home</li>
    <li>About</li>
</ul>`
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "html",
            content: `<div>Home</div>
<div>About</div>`
          },
          {
            type: "paragraph",
            content: "Screen readers understand list structures and announce:"
          },
          {
            type: "output",
            content: "List with 2 items"
          },
          {
            type: "paragraph",
            content: "which improves accessibility."
          }
        ]
      },
      {
        heading: "Common List Styling Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Removing Markers Without Purpose",
                answer: "Bad practice: Using list-style: none; when users actually benefit from seeing visible bullets or numbers to distinguish items."
              },
              {
                question: "Excessive Nested Lists",
                answer: "Deep nesting reduces readability. If you go beyond 3 levels deep, consider restructuring your content."
              },
              {
                question: "Using Images That Are Too Large",
                answer: "If you use a 100x100px image with list-style-image, it will completely disrupt the alignment of your text. Always optimize the image size first."
              },
              {
                question: "Forgetting Default Padding",
                answer: "Many beginners wonder why lists are indented. It is because padding-left is applied by browsers automatically. To remove the indent, you must explicitly set padding: 0;."
              }
            ]
          }
        ]
      },
      {
        heading: "Browser Internals: How List Markers Work",
        blocks: [
          {
            type: "paragraph",
            content: "When a browser renders:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>
    <li>HTML</li>
</ul>`
          },
          {
            type: "paragraph",
            content: "The marker is not actually text."
          },
          {
            type: "paragraph",
            content: "Internally the browser creates:"
          },
          {
            type: "output",
            content: [
              "List Item",
              " ├─ Marker",
              " └─ Content"
            ]
          },
          {
            type: "paragraph",
            content: "Modern CSS exposes this marker through:"
          },
          {
            type: "output",
            content: "::marker"
          },
          {
            type: "paragraph",
            content: "which allows direct styling of bullets and numbers."
          },
          {
            type: "paragraph",
            content: "This explains why bullets behave differently from ordinary text."
          }
        ]
      },
      {
        heading: "When to Use Each List Type",
        blocks: [
          {
            type: "table",
            headers: [
              "List Type",
              "Best Use"
            ],
            rows: [
              [
                "ul",
                "Unordered items"
              ],
              [
                "ol",
                "Steps or rankings"
              ],
              [
                "dl",
                "Definitions and glossaries"
              ]
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
              "Shopping List → ul",
              "Installation Steps → ol",
              "Dictionary Terms → dl"
            ]
          },
          {
            type: "paragraph",
            content: "Choosing the correct list type improves semantics and accessibility."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Lists allow developers to customize how ordered, unordered, and description lists appear on a webpage. Using properties such as list-style-type, list-style-position, list-style-image, and the shorthand list-style, you can control markers, numbering styles, spacing, and appearance. Modern CSS also provides powerful features like ::marker and CSS counters for advanced marker customization and custom numbering systems. Proper list styling improves readability, accessibility, navigation design, and user experience, making lists an essential part of professional web development."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 While `list-style-image` exists, most professional developers prefer to use `list-style: none` combined with a `background-image` or an `::before` pseudo-element. It offers far greater control over the exact positioning, sizing, and alignment of custom list markers."
          }
        ]
      }
    ]
  },
};

export default cssWorkingWithText;