const reactFundamentals = {

/* ============================
  First less : JSX Fundamentals
============================= */
"jsx-fundamentals": {
    title: "JSX Fundamentals",
    readingTime: "18 min",
 
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "So far, you have learned:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Why React exists",
              "How to set up a React environment",
              "How to create a React application",
              "How React projects are structured",
              "How React development workflows operate"
            ]
          },

          {
            type: "paragraph",
            content: "Now it is time to learn one of React's most important concepts:"
          },

          {
            type: "quote",
            content:
              "JSX (JavaScript XML)"
          },
 
          {
            type: "paragraph",
            content:
              "JSX is the syntax developers use to describe what should appear on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "When most people first see React code, they often think:"
          },
 
          {
            type: "quote",
            content:
              "Why is HTML inside JavaScript?"
          },
 
          {
            type: "paragraph",
            content:
              "That is exactly what JSX looks like."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return <h1>Hello React</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "At first glance, it appears that HTML is being written inside JavaScript."
          },
 
          {
            type: "paragraph",
            content:
              "However, JSX is not actually HTML. It is a special syntax extension that React uses to create user interfaces more easily."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What JSX is",
              "Why JSX was created",
              "How JSX works behind the scenes",
              "Writing JSX expressions",
              "Embedding JavaScript inside JSX",
              "JSX rules and syntax",
              "JSX attributes",
              "JSX children",
              "Rendering lists",
              "Conditional rendering basics",
              "Common JSX mistakes",
              "JSX best practices used by professional developers"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how React uses JSX to build modern user interfaces."
          },

          {
            type: "divider"
          },
        ]
    },

    {
        heading: "What is JSX?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX stands for JavaScript XML."
          },
 
          {
            type: "paragraph",
            content:
              "It is a syntax extension for JavaScript that allows developers to write UI code in a way that resembles HTML."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello React</h1>;`
          },
 
          {
            type: "paragraph",
            content:
              "JSX makes React code easier to read and write because developers can describe UI directly within JavaScript."
          },
 
          {
            type: "paragraph",
            content:
              "Without JSX, creating the same element would require pure JavaScript:"
          },
 
          {
            type: "code",
            language: "javascript",
            content: `const element = React.createElement(
  "h1",
  null,
  "Hello React"
);`
          },
 
          {
            type: "paragraph",
            content:
              "Both versions produce the same result. However, the JSX version is much easier to understand."
          },
 
          {
            type: "paragraph",
            content:
              "This is why JSX became the standard way of writing React applications."
          }
 
        ]
      },
 
      {
        heading: "Why Was JSX Created?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before JSX existed, developers built interfaces using JavaScript function calls."
          },
 
          {
            type: "code",
            language: "javascript",
            content: `React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello World"
  )
);`
          },
 
          {
            type: "paragraph",
            content:
              "As applications became larger, this approach became difficult to read."
          },
 
          {
            type: "paragraph",
            content:
              "JSX was introduced to solve this problem. Benefits include:"
          },
 
          {
            type: "list",
            items: [
              "Cleaner syntax",
              "Better readability",
              "Easier maintenance",
              "Faster development",
              "More intuitive UI creation"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React developers can think about UI visually rather than mentally translating function calls."
          },

          {
            type: "divider"
          },
 
        ]
      },
 
      {
        heading: "JSX Looks Like HTML But Is Not HTML",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider this line:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello React</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "This looks exactly like HTML. However, browsers cannot understand JSX directly."
          },
 
          {
            type: "paragraph",
            content:
              "JSX must first be converted into regular JavaScript. Behind the scenes, React transforms the JSX above into:"
          },
 
          {
            type: "code",
            language: "javascript",
            content: `React.createElement(
  "h1",
  null,
  "Hello React"
);`
          },
 
          {
            type: "paragraph",
            content:
              "This transformation happens automatically using build tools such as:"
          },
 
          {
            type: "list",
            items: [
              "Vite",
              "Babel",
              "React Compiler tools"
            ]
          },
 
          {
            type: "note",
            content:
              "This is why React projects require a development environment. Without these build tools, JSX cannot run in the browser."
          }
 
        ]
      },
 
      {
        heading: "JSX Is an Expression",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX produces a value. Because of this, JSX can be:"
          },
 
          {
            type: "list",
            items: [
              "Assigned to variables",
              "Passed into functions",
              "Returned from components",
              "Stored in arrays"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const heading = <h1>Hello React</h1>;`
          },
 
          {
            type: "paragraph",
            content:
              "Later, it can be returned directly:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return heading;`
          },
 
          {
            type: "paragraph",
            content:
              "This flexibility makes JSX extremely powerful."
          },

          {
            type: "divider"
          },
 
        ]
      },
 
      {
        heading: "Your First JSX Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <h1>Welcome to React</h1>
  );
}
 
export default App;`
          },
 
          {
            type: "output",
            content:
              "Welcome to React"
          },
 
          {
            type: "paragraph",
            content:
              "The JSX describes what should appear on the page. React converts it into real browser elements."
          }
 
        ]
      },
 
      {
        heading: "Embedding JavaScript Inside JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of JSX's most useful features is the ability to combine UI and JavaScript."
          },
 
          {
            type: "paragraph",
            content:
              "JavaScript expressions are written inside curly braces:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{}`
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "John";
 
function App() {
  return (
    <h1>Hello {name}</h1>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Hello John"
          },
 
          {
            type: "paragraph",
            content:
              "React evaluates the JavaScript expression and inserts the result."
          }
 
        ]
      },
 
      {
        heading: "What Can Be Written Inside Curly Braces?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many JavaScript expressions can be used inside curly braces."
          },
 
          {
            type: "paragraph",
            content:
              "Variables:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const city = "London";
 
<p>{city}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Numbers:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{10}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Arithmetic:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{5 + 5}</p>`
          },
 
          {
            type: "output",
            content:
              "10"
          },
 
          {
            type: "paragraph",
            content:
              "Function Calls:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function greet() {
  return "Hello";
}
 
<p>{greet()}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Template Literals:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const first = "John";
const last = "Doe";
 
<p>{\`\${first} \${last}\`}</p>`
          },
 
          {
            type: "output",
            content:
              "John Doe"
          },
 
          {
            type: "tip",
            content:
              "Only expressions work inside curly braces. Statements like if, for, or while cannot be placed directly inside JSX."
          }
 
        ]
      },
 
      {
        heading: "JSX Can Render Multiple Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Real interfaces contain many elements. JSX can render them all together."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <div>
      <h1>React</h1>
      <p>Learning JSX</p>
    </div>
  );
}`
          },
 
          {
            type: "output",
            content:
              "React\nLearning JSX"
          }
 
        ]
      },
 
      {
        heading: "Why JSX Requires a Single Parent Element",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The following is invalid and will throw an error:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return (
  <h1>Hello</h1>
  <p>World</p>
);`
          },
 
          {
            type: "paragraph",
            content:
              "Correct approach — wrap everything in a single parent element:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);`
          },
 
          {
            type: "paragraph",
            content:
              "JSX must always return a single root element."
          },

          {
            type: "divider"
          },
 
        ]
      },
 
      {
        heading: "React Fragments",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Sometimes developers do not want unnecessary <div> elements cluttering the DOM."
          },
 
          {
            type: "paragraph",
            content:
              "React provides a special wrapper called a Fragment:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<>
  <h1>Hello</h1>
  <p>World</p>
</>`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits of using Fragments:"
          },
 
          {
            type: "list",
            items: [
              "No extra DOM nodes are added",
              "Cleaner markup in the browser",
              "Better performance in some cases"
            ]
          },
 
          {
            type: "tip",
            content:
              "Prefer Fragments over unnecessary wrapper <div> elements whenever the parent element serves no styling or layout purpose."
          }
 
        ]
      },
 
      {
        heading: "JSX Attributes",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Just like HTML, JSX supports attributes on elements."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<img src="logo.png" alt="Logo" />`
          },
 
          {
            type: "paragraph",
            content:
              "However, some attribute names differ from their HTML counterparts."
          }
 
        ]
      },
 
      {
        heading: "class Becomes className",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In HTML:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div class="container"></div>`
          },
 
          {
            type: "paragraph",
            content:
              "In JSX:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<div className="container"></div>`
          },
 
          {
            type: "paragraph",
            content:
              "The reason: class is a reserved keyword in JavaScript. React uses className instead to avoid conflicts."
          }
 
        ]
      },
 
      {
        heading: "for Becomes htmlFor",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In HTML:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<label for="email">Email</label>`
          },
 
          {
            type: "paragraph",
            content:
              "In JSX:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<label htmlFor="email">Email</label>`
          },
 
          {
            type: "paragraph",
            content:
              "This avoids conflicts with JavaScript's for keyword used in loops."
          }
 
        ]
      },
 
      {
        heading: "Self-Closing Tags",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In HTML, some elements do not need a closing tag:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<img>
<input>
<br>`
          },
 
          {
            type: "paragraph",
            content:
              "In JSX, all elements must be properly closed. Self-closing elements use a forward slash before the closing bracket:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<img />
<input />
<br />
<hr />`
          },
 
          {
            type: "warning",
            content:
              "Forgetting to self-close elements in JSX will cause a build error. Every element must be explicitly closed."
          }
 
        ]
      },
 
      {
        heading: "Writing Comments in JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Normal JavaScript comments do not work inside JSX markup."
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello</h1>
// This comment will break JSX`
          },
 
          {
            type: "paragraph",
            content:
              "Correct — wrap comments inside curly braces:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<>
  {/* This is a valid JSX comment */}
  <h1>Hello</h1>
</>`
          }
 
        ]
      },
 
      {
        heading: "JSX and Conditional Rendering",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX often displays content based on a condition."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const isLoggedIn = true;
 
function App() {
  return (
    <h1>
      {isLoggedIn ? "Welcome" : "Please Login"}
    </h1>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Welcome"
          },
 
          {
            type: "paragraph",
            content:
              "The ternary operator is the most common way to conditionally render content in JSX. This makes interfaces dynamic and responsive to data."
          }
 
        ]
      },
 
      {
        heading: "Rendering Lists with JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Arrays can be displayed using JSX with the help of the .map() method."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fruits = ["Apple", "Banana", "Mango"];
 
function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}`
          },
 
          {
            type: "output",
            content:
              "• Apple\n• Banana\n• Mango"
          },
 
          {
            type: "paragraph",
            content:
              "This pattern is used extensively in React applications to render dynamic lists of data."
          }
 
        ]
      },
 
      {
        heading: "Common JSX Mistakes",
 
        blocks: [
 
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Multiple Root Elements",

                answer:
                  "JSX must always return a single root element. Returning two sibling elements without a parent wrapper will throw an error.",

                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<h1>Hello</h1>
<p>World</p>`
                  },

                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<div>
  <h1>Hello</h1>
  <p>World</p>
</div>`
                  }
                ]
              },

              {
                question: "Mistake 2: Using class Instead of className",
                answer: "The class attribute is a reserved JavaScript keyword. In JSX, always use className instead.",

                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<div class="box">`
                  },

                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<div className="box">`
                  }
                ]
              },
              {
                question: "Mistake 3: Forgetting to Close Tags",
                answer: "All JSX elements must be closed. Self-closing elements like img, input, and br must use a forward slash: <img /> not <img>.",

                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<img>`
                  },

                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<img />`
                  }
                ]
              },
              {
                question: "Mistake 4: Using Statements Instead of Expressions",
                answer: "JSX curly braces accept expressions only. Statements like if blocks cannot be placed directly inside JSX. Use the ternary operator instead: {condition ? 'Yes' : 'No'}.",

                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<p>{if (true) "Hello"}</p>`
                  },

                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<p>{true ? "Hello" : ""}</p>`
                  }
                ]
              },
              {
                question: "Mistake 5: Using Regular Comments Inside JSX",
                answer: "Normal // or /* */ comments break JSX markup. Inside JSX, always use {/* comment */} syntax.",

                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `// This is wrong way of commenting
                    
/* This is also wrong way of commenting`
                  },

                  {
                    title: "Correct",
                    language: "jsx",
                    content: `{/* Correct way of commenting in jsx*/}
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>`
                  }
                ]
              },
              {
                question: "Mistake 6: Returning JSX Without Parentheses on Multiple Lines",
                answer: "When JSX spans multiple lines, always wrap it in parentheses after the return keyword. Omitting them causes JavaScript to insert an automatic semicolon and return undefined."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "JSX Best Practices",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional React developers generally follow these practices:"
          },
 
          {
            type: "list",
            items: [
              "Keep JSX readable and properly indented",
              "Avoid deeply nested JSX structures",
              "Use meaningful and descriptive component names",
              "Extract repeated UI patterns into separate components",
              "Use Fragments when no parent wrapper is needed",
              "Keep business logic outside of large JSX blocks",
              "Format JSX consistently throughout the codebase"
            ]
          },
 
          {
            type: "tip",
            content:
              "Readable JSX is easier to maintain and debug. If a JSX block becomes too large or complex, it is a good sign that it should be broken into smaller components."
          }
 
        ]
      },
 
      {
        heading: "JSX vs HTML",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "HTML",
              "JSX"
            ],
 
            rows: [
              ["Uses class", "Uses className"],
              ["Uses for", "Uses htmlFor"],
              ["Allows some unclosed tags", "Requires all tags to be closed"],
              ["Static markup only", "Dynamic UI with JavaScript"],
              ["No JavaScript expressions", "Supports JavaScript expressions in {}"],
              ["Comments with <!-- -->", "Comments with {/* */}"]
            ]
          }
 
        ]
      },
 
      {
        heading: "Why JSX Became So Popular",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX became popular because it combines:"
          },
 
          {
            type: "cards",
            items: [
              {
                title: "HTML-like Structure",
                description: "Developers write UI in a familiar, readable format similar to HTML markup."
              },
 
              {
                title: "Full JavaScript Power",
                description: "Logic, variables, functions, and expressions can all be used directly inside the UI."
              },
 
              {
                title: "Dynamic Rendering",
                description: "Interfaces update automatically based on data, conditions, and user interactions."
              }
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Developers can build interfaces faster while keeping code readable. This balance between simplicity and power is one of React's greatest strengths."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX is a syntax extension that allows developers to write UI code in a format similar to HTML while still using the full power of JavaScript."
          },
 
          {
            type: "paragraph",
            content:
              "JSX provides:"
          },
 
          {
            type: "list",
            items: [
              "HTML-like syntax for writing UI",
              "Better readability compared to raw React.createElement calls",
              "Full JavaScript integration with curly brace expressions",
              "Dynamic rendering based on data and conditions",
              "Easier component development and composition",
              "Cleaner and more maintainable UI code"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Although JSX looks like HTML, it is actually converted into JavaScript before running in the browser."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding JSX is one of the most important foundations of React development because nearly every React component is written using JSX."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think JSX is a React feature that browsers understand directly. In reality, browsers never see JSX. Before your application runs, tools like Vite and Babel transform JSX into regular JavaScript function calls. JSX exists purely to make the developer experience better, not because browsers require it."
          }
 
        ]
      }
	]
},



/* =============================
  Second Topic : KSX Expressions
============================== */
"jsx-expressions": {
  title: "JSX Expressions",
  readingTime: "16 min",
 
  content: [
    {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most powerful features of JSX is the ability to use JavaScript directly inside your markup."
          },
 
          {
            type: "paragraph",
            content:
              "This capability is called JSX Expressions."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of writing static content, JSX allows developers to dynamically generate values, perform calculations, display variables, execute functions, and render content based on application data."
          },
 
          {
            type: "paragraph",
            content:
              "For example, instead of writing:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello User</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "You can write:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "John";
 
<h1>Hello {name}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "And React will automatically display:"
          },
 
          {
            type: "output",
            content:
              "Hello John"
          },
 
          {
            type: "paragraph",
            content:
              "This ability to combine JavaScript and UI is one of the main reasons React is so powerful."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What JSX expressions are",
              "How curly braces work",
              "Displaying variables in JSX",
              "Using calculations inside JSX",
              "Calling functions in JSX",
              "Using objects and arrays",
              "Conditional rendering with expressions",
              "What values React can render",
              "Common mistakes beginners make",
              "Best practices used by professional React developers"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will be able to create dynamic user interfaces using JSX expressions confidently."
          }
 
        ]
      },
 
      {
        heading: "What is a JSX Expression?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A JSX expression is any valid JavaScript expression placed inside curly braces {} within JSX."
          },
 
          {
            type: "paragraph",
            content:
              "General syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{expression}`
          },
 
          {
            type: "paragraph",
            content:
              "React evaluates the expression and renders the result."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "Alex";
 
function App() {
  return (
    <h1>Hello {name}</h1>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Hello Alex"
          },
 
          {
            type: "paragraph",
            content:
              "The value inside the braces is evaluated before rendering."
          }
 
        ]
      },
 
      {
        heading: "Why JSX Expressions Are Important",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Without expressions, JSX would only display static content."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Welcome User</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "This never changes. With expressions:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const username = "Sarah";
 
<h1>Welcome {username}</h1>`
          },
 
          {
            type: "output",
            content:
              "Welcome Sarah"
          },
 
          {
            type: "paragraph",
            content:
              "This allows React applications to:"
          },
 
          {
            type: "list",
            items: [
              "Display dynamic data",
              "Show API responses",
              "Update UI automatically",
              "Create interactive applications",
              "Personalize user experiences"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Almost every React application relies heavily on JSX expressions."
          }
 
        ]
      },
 
      {
        heading: "Understanding Curly Braces",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Curly braces tell React: \"Switch from JSX mode to JavaScript mode.\""
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const age = 25;
 
<p>Age: {age}</p>`
          },
 
          {
            type: "output",
            content:
              "Age: 25"
          },
 
          {
            type: "paragraph",
            content:
              "Everything outside braces is treated as normal JSX. Everything inside braces is treated as JavaScript."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello {name}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "React interprets \"Hello \" as JSX content and {name} as JavaScript."
          }
 
        ]
      },
 
      {
        heading: "Displaying Variables",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The most common use of JSX expressions is displaying variables."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const city = "London";
 
function App() {
  return (
    <h2>City: {city}</h2>
  );
}`
          },
 
          {
            type: "output",
            content:
              "City: London"
          },
 
          {
            type: "paragraph",
            content:
              "Multiple variables can be displayed."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const firstName = "John";
const lastName = "Doe";
 
<h1>
  {firstName} {lastName}
</h1>`
          },
 
          {
            type: "output",
            content:
              "John Doe"
          }
 
        ]
      },
 
      {
        heading: "Using String Expressions",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Strings can be manipulated directly inside JSX."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "react";
 
<h1>{name.toUpperCase()}</h1>`
          },
 
          {
            type: "output",
            content:
              "REACT"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const language = "JavaScript";
 
<p>{language.toLowerCase()}</p>`
          },
 
          {
            type: "output",
            content:
              "javascript"
          },
 
          {
            type: "paragraph",
            content:
              "Because expressions use JavaScript, all string methods are available."
          }
 
        ]
      },
 
      {
        heading: "Using Numbers and Calculations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX expressions can perform calculations."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>{5 + 5}</h1>`
          },
 
          {
            type: "output",
            content:
              "10"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const price = 100;
const tax = 20;
 
<p>Total: {price + tax}</p>`
          },
 
          {
            type: "output",
            content:
              "Total: 120"
          },
 
          {
            type: "paragraph",
            content:
              "More complex calculations also work."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{(10 * 5) + 20}</p>`
          },
 
          {
            type: "output",
            content:
              "70"
          },
 
          {
            type: "paragraph",
            content:
              "React evaluates the expression before rendering."
          }
 
        ]
      },
 
      {
        heading: "Calling Functions Inside JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Functions can be called inside expressions."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function greet() {
  return "Hello World";
}
 
<h1>{greet()}</h1>`
          },
 
          {
            type: "output",
            content:
              "Hello World"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function getYear() {
  return new Date().getFullYear();
}
 
<p>{getYear()}</p>`
          },
 
          {
            type: "output",
            content:
              "2026"
          },
 
          {
            type: "paragraph",
            content:
              "This allows dynamic content generation."
          }
 
        ]
      },
 
      {
        heading: "Using Function Results with Variables",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Functions and variables often work together."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "Emma";
 
function greetUser(user) {
  return \`Hello \${user}\`;
}
 
<h1>{greetUser(name)}</h1>`
          },
 
          {
            type: "output",
            content:
              "Hello Emma"
          },
 
          {
            type: "paragraph",
            content:
              "This pattern is extremely common in React applications."
          }
 
        ]
      },
 
      {
        heading: "Using Ternary Expressions",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A ternary operator is an expression, so it works inside JSX."
          },
 
          {
            type: "paragraph",
            content:
              "Syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `condition ? value1 : value2`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const isLoggedIn = true;
 
<h1>
  {isLoggedIn ? "Welcome Back" : "Please Login"}
</h1>`
          },
 
          {
            type: "output",
            content:
              "Welcome Back"
          },
 
          {
            type: "paragraph",
            content:
              "If the condition becomes false:"
          },
 
          {
            type: "output",
            content:
              "Please Login"
          },
 
          {
            type: "paragraph",
            content:
              "This is one of the most common React patterns."
          }
 
        ]
      },
 
      {
        heading: "Using Logical AND (&&)",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React often uses the logical AND operator for conditional rendering."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const showMessage = true;
 
{showMessage && <h2>Hello User</h2>}`
          },
 
          {
            type: "output",
            content:
              "Hello User"
          },
 
          {
            type: "paragraph",
            content:
              "If showMessage is false, nothing is rendered."
          },
 
          {
            type: "tip",
            content:
              "This technique is widely used to show or hide UI elements based on a condition, without needing a full ternary expression."
          }
 
        ]
      },
 
      {
        heading: "Using Arrays Inside JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Arrays can be rendered directly."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const numbers = [1, 2, 3];
 
<p>{numbers}</p>`
          },
 
          {
            type: "output",
            content:
              "1,2,3"
          },
 
          {
            type: "paragraph",
            content:
              "Although possible, React developers usually use .map() for rendering lists."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fruits = ["Apple", "Mango", "Orange"];
 
<ul>
  {fruits.map(fruit => (
    <li>{fruit}</li>
  ))}
</ul>`
          },
 
          {
            type: "output",
            content:
              "• Apple\n• Mango\n• Orange"
          },
 
          {
            type: "paragraph",
            content:
              "This is the foundation of list rendering in React."
          }
 
        ]
      },
 
      {
        heading: "Using Objects in JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Objects themselves cannot be rendered directly."
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const user = {
  name: "John",
  age: 25
};
 
<p>{user}</p>`
          },
 
          {
            type: "warning",
            content:
              "This produces an error. React cannot render an entire object. You must access individual properties instead."
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{user.name}</p>`
          },
 
          {
            type: "output",
            content:
              "John"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{user.age}</p>`
          },
 
          {
            type: "output",
            content:
              "25"
          },
 
          {
            type: "paragraph",
            content:
              "React can render object properties, but not entire objects."
          }
 
        ]
      },
 
      {
        heading: "What Values React Can Render",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React can render:"
          },
 
          {
            type: "list",
            items: [
              "Strings",
              "Numbers",
              "JSX elements",
              "Arrays of JSX elements",
              "Boolean-controlled rendering",
              "Function results"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const score = 95;
 
<h1>{score}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Valid."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>{"Hello React"}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Valid."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>{5 * 5}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Valid."
          }
 
        ]
      },
 
      {
        heading: "Values React Does Not Render",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React silently ignores the following values and renders nothing:"
          },
 
          {
            type: "list",
            items: [
              "false",
              "true",
              "null",
              "undefined"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{false}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Nothing appears."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{null}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Nothing appears."
          },
 
          {
            type: "note",
            content:
              "This behavior is intentional and extremely useful for conditional rendering. When a condition is false or a value is null, React simply renders nothing instead of throwing an error."
          }
 
        ]
      },
 
      {
        heading: "JSX Expressions vs Statements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A very important rule: JSX accepts expressions, not statements."
          },
 
          {
            type: "paragraph",
            content:
              "Valid:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{5 + 5}`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{name}`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{isLoggedIn ? "Yes" : "No"}`
          },
 
          {
            type: "paragraph",
            content:
              "Invalid:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{
  if (isLoggedIn) {
    return "Hello";
  }
}`
          },
 
          {
            type: "paragraph",
            content:
              "Because if is a statement, not an expression. Instead, use the ternary operator:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{isLoggedIn ? "Hello" : "Login"}`
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
                question: "Mistake 1: Forgetting Curly Braces",
                answer:
                  "Without curly braces, React treats the content as plain text and renders it literally instead of evaluating the variable.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<h1>name</h1>`
                  },
 
                  {
                    title: "Output",
                    language: "text",
                    content: `name`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<h1>{name}</h1>`
                  },
 
                  {
                    title: "Output",
                    language: "text",
                    content: `John`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Rendering Entire Objects",
                answer:
                  "React cannot render a full JavaScript object. Attempting to do so will throw an error. Always access individual properties instead.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<p>{user}</p>`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<p>{user.name}</p>`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Using Statements Inside JSX",
                answer:
                  "JSX only accepts expressions. Placing an if statement inside curly braces will cause a syntax error. Use the ternary operator instead.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `{
  if (age > 18) {
    return "Adult";
  }
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `{age > 18 ? "Adult" : "Minor"}`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Overusing Complex Expressions",
                answer:
                  "Chaining multiple operations directly inside JSX makes code hard to read and debug. Move complex logic into a variable outside JSX.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `{users.filter(...).sort(...).map(...)}`
                  },
 
                  {
                    title: "Better",
                    language: "jsx",
                    content: `const processedUsers = users
  .filter(...)
  .sort(...);
 
{processedUsers.map(...)}`
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
              "Professional React developers generally:"
          },
 
          {
            type: "list",
            items: [
              "Keep expressions simple",
              "Move complex logic outside JSX",
              "Use descriptive variable names",
              "Prefer ternary operators for conditions",
              "Use .map() for lists",
              "Avoid deeply nested expressions",
              "Keep JSX readable"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fullName = \`\${first} \${last}\`;
 
<h1>{fullName}</h1>`
          },
 
          {
            type: "tip",
            content:
              "Better readability leads to better maintenance. If an expression inside JSX is getting too complex to read at a glance, extract it into a named variable before the return statement."
          }
 
        ]
      },
 
      {
        heading: "Real-World Examples",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "These patterns appear in almost every React application."
          },
 
          {
            type: "paragraph",
            content:
              "User Greeting:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Welcome {username}</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "Shopping Cart:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>Total: \${totalPrice}</p>`
          },
 
          {
            type: "paragraph",
            content:
              "Notifications:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{unreadCount > 0 && <span>{unreadCount}</span>}`
          },
 
          {
            type: "paragraph",
            content:
              "Current Year:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<p>{new Date().getFullYear()}</p>`
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX Expressions allow JavaScript code to be embedded directly inside JSX using curly braces {}."
          },
 
          {
            type: "paragraph",
            content:
              "They can be used for:"
          },
 
          {
            type: "list",
            items: [
              "Displaying variables",
              "Performing calculations",
              "Calling functions",
              "Rendering arrays",
              "Conditional rendering",
              "Showing dynamic content"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Key concepts learned:"
          },
 
          {
            type: "list",
            items: [
              "Curly braces enable JavaScript inside JSX",
              "Expressions are allowed — statements are not",
              "Variables can be rendered directly",
              "Functions can be executed inside JSX",
              "Ternary operators support conditional rendering",
              "Objects must be accessed through their properties",
              "Arrays are commonly rendered using .map()",
              "false, null, undefined, and true render nothing"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Mastering JSX expressions is one of the most important steps toward building dynamic React applications."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think JSX is simply HTML inside JavaScript. In reality, JSX becomes truly powerful when combined with expressions. Static JSX only creates layouts, but JSX expressions transform those layouts into dynamic, data-driven user interfaces that react to changing application state. This ability is one of the core foundations of modern React development."
          }
 
        ]
      }
  ]
},



/* ===============================
  Third Topic : Rendering Elements
================================ */
"rendering-elements": {
  title: "Rendering Elements",
  readingTime: "15 min",
 
  content: [
    {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "So far, you have learned about React, JSX, JSX Expressions, project structure, and development workflow."
          },
 
          {
            type: "paragraph",
            content:
              "Now it's time to understand one of the most important concepts in React:"
          },
 
          {
            type: "quote",
            content:
              "Rendering Elements"
          },
 
          {
            type: "paragraph",
            content:
              "Rendering is the process of displaying React elements on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "Whenever a React application displays text, images, buttons, forms, lists, or entire pages, React is rendering elements into the browser."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding how rendering works is essential because React applications constantly update their user interfaces based on changing data."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What rendering means in React",
              "What React elements are",
              "How React displays elements on the screen",
              "The role of ReactDOM",
              "Rendering single and multiple elements",
              "Updating rendered content",
              "How React efficiently updates the UI",
              "The difference between rendering and re-rendering",
              "Common beginner mistakes",
              "Professional rendering concepts used in real applications"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how React takes your components and displays them inside the browser."
          }
 
        ]
      },
 
      {
        heading: "What Does Rendering Mean?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Rendering simply means: Displaying something on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "For example, when a webpage shows:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Hello World</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "The browser renders that heading."
          },
 
          {
            type: "paragraph",
            content:
              "Similarly, when React displays:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello React</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "React renders that element into the browser."
          },
 
          {
            type: "quote",
            content:
              "Rendering = Converting React code into visible UI."
          }
 
        ]
      },
 
      {
        heading: "What Is a React Element?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before understanding rendering, we must understand React elements."
          },
 
          {
            type: "paragraph",
            content:
              "A React element is the smallest building block of a React application's UI."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello React</h1>;`
          },
 
          {
            type: "paragraph",
            content:
              "This creates a React element. A React element is:"
          },
 
          {
            type: "list",
            items: [
              "Lightweight",
              "Immutable",
              "A description of what should appear on the screen"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "It is not the actual DOM element. Instead, it tells React: \"Please display this UI.\""
          }
 
        ]
      },
 
      {
        heading: "Elements Are Descriptions, Not Real DOM Nodes",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners assume:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const heading = <h1>Hello</h1>;`
          },
 
          {
            type: "paragraph",
            content:
              "creates an actual HTML element. It does not."
          },
 
          {
            type: "paragraph",
            content:
              "Instead, React creates a JavaScript object describing the UI. Conceptually:"
          },
 
          {
            type: "code",
            language: "javascript",
            content: `{
  type: "h1",
  props: {
    children: "Hello"
  }
}`
          },
 
          {
            type: "paragraph",
            content:
              "React later converts this description into real DOM elements."
          },
 
          {
            type: "note",
            content:
              "This separation is one reason React can efficiently update interfaces. React works with lightweight JavaScript descriptions first, then decides the minimal changes needed in the actual DOM."
          }
 
        ]
      },
 
      {
        heading: "How React Displays Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React elements must be rendered into the browser. This process happens through ReactDOM."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import ReactDOM from "react-dom/client";
import App from "./App";
 
ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);`
          },
 
          {
            type: "paragraph",
            content:
              "This code tells React:"
          },
 
          {
            type: "orderedList",
            items: [
              "Find the root container.",
              "Render the App component inside it."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without rendering, React elements would never appear on the page."
          }
 
        ]
      },
 
      {
        heading: "The Root Container",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Inside index.html, you will usually find:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<div id="root"></div>`
          },
 
          {
            type: "paragraph",
            content:
              "This is known as the root container. React renders the entire application inside this element."
          },
 
          {
            type: "tree",
            content: `index.html
  └── root
        ↓
       App
        ↓
   Components
        ↓
       UI`
          },
 
          {
            type: "paragraph",
            content:
              "Everything visible in a React application ultimately appears inside this root element."
          }
 
        ]
      },
 
      {
        heading: "Rendering Your First Element",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const root = ReactDOM.createRoot(
  document.getElementById("root")
);
 
root.render(
  <h1>Hello React</h1>
);`
          },
 
          {
            type: "output",
            content:
              "Hello React"
          },
 
          {
            type: "paragraph",
            content:
              "React takes the element and displays it inside the browser."
          }
 
        ]
      },
 
      {
        heading: "Rendering JSX Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Since JSX creates React elements, rendering JSX is very common."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const element = (
  <div>
    <h1>Welcome</h1>
    <p>Learning React</p>
  </div>
);
 
root.render(element);`
          },
 
          {
            type: "output",
            content:
              "Welcome\nLearning React"
          },
 
          {
            type: "paragraph",
            content:
              "React converts the JSX into elements and renders them."
          }
 
        ]
      },
 
      {
        heading: "Rendering Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In real applications, developers rarely render individual elements directly. Instead, they render components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <h1>Hello React</h1>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Rendering:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `root.render(<App />);`
          },
 
          {
            type: "paragraph",
            content:
              "This is the most common rendering pattern in React."
          }
 
        ]
      },
 
      {
        heading: "Rendering Nested Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Components can render other components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Header() {
  return <h1>Header</h1>;
}
 
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Rendering:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `root.render(<App />);`
          },
 
          {
            type: "paragraph",
            content:
              "Hierarchy:"
          },
 
          {
            type: "tree",
            content: `App
  └── Header`
          },
 
          {
            type: "paragraph",
            content:
              "React renders the entire component tree."
          }
 
        ]
      },
 
      {
        heading: "Rendering Multiple Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React requires a single root element."
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return (
  <h1>Hello</h1>
  <p>World</p>
);`
          },
 
          {
            type: "paragraph",
            content:
              "Correct — wrap in a parent element:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);`
          },
 
          {
            type: "paragraph",
            content:
              "Or use a Fragment:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);`
          },
 
          {
            type: "paragraph",
            content:
              "React must always return one root container."
          }
 
        ]
      },
 
      {
        heading: "Rendering Dynamic Content",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of React's greatest strengths is rendering dynamic data."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const name = "John";
 
function App() {
  return (
    <h1>Hello {name}</h1>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Hello John"
          },
 
          {
            type: "paragraph",
            content:
              "React automatically inserts dynamic values into the rendered UI."
          }
 
        ]
      },
 
      {
        heading: "Rendering Expressions",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX can render JavaScript expressions."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <h1>{5 + 5}</h1>
  );
}`
          },
 
          {
            type: "output",
            content:
              "10"
          },
 
          {
            type: "paragraph",
            content:
              "React evaluates the expression and renders the result."
          }
 
        ]
      },
 
      {
        heading: "Rendering Lists",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React can render collections of data."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fruits = ["Apple", "Banana", "Mango"];`
          },
 
          {
            type: "paragraph",
            content:
              "Rendering:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}`
          },
 
          {
            type: "output",
            content:[
              "• Apple", "• Banana", "• Mango"]
          },
 
          {
            type: "paragraph",
            content:
              "This allows React applications to display dynamic data efficiently."
          }
 
        ]
      },
 
      {
        heading: "Rendering Conditional Content",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Sometimes content should appear only under certain conditions."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const isLoggedIn = true;`
          },
 
          {
            type: "paragraph",
            content:
              "Rendering:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <div>
      {isLoggedIn && <h1>Welcome Back</h1>}
    </div>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Welcome Back"
          },
 
          {
            type: "paragraph",
            content:
              "React can render UI conditionally based on application state."
          }
 
        ]
      },
 
      {
        heading: "Updating Rendered Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React applications are not static. UI changes when data changes."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);
 
  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "When the button is clicked:"
          },
 
          {
            type: "flow",
            steps: [
              "0",
              "1",
              "2",
              "3"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React updates the rendered output automatically."
          }
 
        ]
      },
 
      {
        heading: "Rendering vs Re-rendering",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "These terms are often confused."
          },
 
          {
            type: "paragraph",
            content:
              "Rendering — Displaying content for the first time:"
          },
 
          {
            type: "flow",
            steps: [
              "Application Starts", "→",
              "UI Appears"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Re-rendering — Updating UI after data changes:"
          },
 
          {
            type: "flow",
            steps: [
              "State Changes", "→",
              "Component Re-renders", "→",
              "Updated UI Appears"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React applications constantly re-render as users interact with them."
          }
 
        ]
      },
 
      {
        heading: "Why React Re-renders",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React re-renders whenever:"
          },
 
          {
            type: "list",
            items: [
              "State changes",
              "Props change",
              "Parent components re-render",
              "Context values change"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "State changes. React re-renders the component. Updated UI appears automatically."
          }
 
        ]
      },
 
      {
        heading: "How React Updates the UI Efficiently",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A common misconception:"
          },
 
          {
            type: "quote",
            content:
              "React rebuilds the entire page every time."
          },
 
          {
            type: "paragraph",
            content:
              "This is not true. React uses the Virtual DOM."
          },

          {
            type: "paragraph",
            content:
              "Process:"
          },
 
          {
            type: "flow",
            steps: [
              "State Changes", "→",
              "Virtual DOM Updates", "→",
              "Compare Old vs New", "→",
              "Update Only Differences", "→",
              "Browser Updates"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This optimization makes React applications fast."
          }
 
        ]
      },
 
      {
        heading: "The React Rendering Cycle",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A simplified rendering cycle:"
          },
 
          {
            type: "flow",
            steps: [
              "Write JSX", "→",
              "Create React Elements", "→",
              "Render Components", "→",
              "Display UI", "→",
              "User Interaction", "→",
              "State Changes", "→",
              "Re-render", "→",
              "Updated UI"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This cycle repeats continuously throughout the application's lifetime."
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
                question: "Mistake 1: Forgetting to Return JSX",
                answer:
                  "A component must always return JSX. Without the return keyword, the component returns undefined and nothing will appear on the screen.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function App() {
  <h1>Hello</h1>;
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `function App() {
  return <h1>Hello</h1>;
}`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Multiple Root Elements",
                answer:
                  "JSX must always return a single root element. Returning two sibling elements without a wrapper will throw an error. Use a parent div or a Fragment instead.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `return (
  <h1>Hello</h1>
  <p>World</p>
);`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Calling Components Like Functions",
                answer:
                  "Components must always be rendered using JSX syntax, not called as plain JavaScript functions. Calling them directly bypasses React's rendering system.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `App();`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<App />`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Assuming Re-render Means Full Page Reload",
                answer:
                  "React does not reload the entire page on re-render. It uses the Virtual DOM to calculate the minimal changes required and updates only the necessary parts of the UI."
              },
 
              {
                question: "Mistake 5: Mutating State Directly",
                answer:
                  "State must never be mutated directly. React will not detect the change and the UI will not update. Always use the state setter function provided by useState.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `count++;`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `setCount(count + 1);`
                  }
                ]
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Professional Rendering Practices",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional React developers usually:"
          },
 
          {
            type: "orderedList",
            items: [
              "Keep components small.",
              "Avoid unnecessary re-renders.",
              "Use reusable components.",
              "Manage state carefully.",
              "Optimize rendering performance.",
              "Separate UI from business logic.",
              "Use React DevTools for debugging."
            ]
          },
 
          {
            type: "tip",
            content:
              "These practices become increasingly important in larger applications. Building good habits early will save significant debugging time later."
          }
 
        ]
      },
 
      {
        heading: "Real-World Rendering Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider an e-commerce application."
          },
 
          {
            type: "paragraph",
            content:
              "Initial render:"
          },
 
          {
            type: "tree",
            content: `App
  ├── Navbar
  ├── Product List
  ├── Cart
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "User adds a product:"
          },
 
          {
            type: "flow",
            steps: [
              "Cart Count Changes",
              "Cart Re-renders",
              "UI Updates"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React updates only the affected parts instead of rebuilding the entire page. This is one reason React scales so well."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Rendering is the process of displaying React elements on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "React rendering involves:"
          },
 
          {
            type: "list",
            items: [
              "Creating React elements",
              "Rendering components",
              "Displaying UI",
              "Updating content dynamically",
              "Re-rendering when data changes",
              "Efficiently updating the DOM through the Virtual DOM"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Important concepts include:"
          },
 
          {
            type: "list",
            items: [
              "React Elements",
              "ReactDOM",
              "Root Container",
              "Component Rendering",
              "Dynamic Rendering",
              "Re-rendering",
              "Virtual DOM"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding rendering is essential because every React application depends on it."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think React renders actual HTML immediately when JSX is written. In reality, JSX first creates React elements (JavaScript descriptions of the UI). React then compares these descriptions, calculates what changed, and updates only the necessary parts of the DOM. This separation between UI description and actual DOM manipulation is one of React's most powerful design decisions."
          }
 
        ]
      }
  ]
},




/* ===============================
  Fourth Topic : Component Overview
================================ */
"component-overview": {
  title: "Component Overview",
  readingTime: "16 min",
 
  content: [
    {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Components are the fundamental building blocks of React applications."
          },
 
          {
            type: "paragraph",
            content:
              "Everything you see in a React application is typically built using components."
          },
 
          {
            type: "paragraph",
            content:
              "Buttons, navigation bars, forms, cards, dashboards, sidebars, product listings, and even entire pages are usually implemented as components."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of building a webpage as one large file, React encourages developers to divide the user interface into small, reusable pieces."
          },
 
          {
            type: "paragraph",
            content:
              "This approach makes applications:"
          },
 
          {
            type: "list",
            items: [
              "Easier to build",
              "Easier to understand",
              "Easier to maintain",
              "Easier to scale"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Components are one of the biggest reasons React became so popular among developers."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What React components are",
              "Why components exist",
              "How components improve development",
              "Different types of React components",
              "Creating your first component",
              "Reusing components",
              "Component composition",
              "Common component naming rules",
              "Common beginner mistakes",
              "Professional component design principles"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how React applications are built using components and why component-based architecture is one of React's most powerful features."
          }
 
        ]
      },
 
      {
        heading: "What is a Component?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A component is an independent, reusable piece of user interface."
          },
 
          {
            type: "paragraph",
            content:
              "Think of a component as a custom HTML element created by a developer."
          },
 
          {
            type: "paragraph",
            content:
              "For example, a webpage might contain:"
          },
 
          {
            type: "list",
            items: [
              "Navigation Bar",
              "Hero Section",
              "Product Card",
              "Footer"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "In React, each of these can be created as separate components."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of writing one huge file, React encourages developers to build applications using many small components that work together."
          },
 
          {
            type: "tree",
            content: `Website
  ├── Navbar
  ├── Hero
  ├── ProductCard
  └── Footer`
          }
 
        ]
      },
 
      {
        heading: "Understanding Components with a Real-World Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine building a house."
          },
 
          {
            type: "paragraph",
            content:
              "A house is not created as one giant object. It is made from smaller parts:"
          },
 
          {
            type: "list",
            items: [
              "Doors",
              "Windows",
              "Walls",
              "Rooms",
              "Roof"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Similarly, a React application is built from smaller UI pieces called components."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "tree",
            content: `E-Commerce Website
  ├── Navbar
  ├── SearchBar
  ├── ProductList
  │   ├── ProductCard
  │   ├── ProductCard
  │   └── ProductCard
  ├── ShoppingCart
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "Each piece can be developed independently. This makes development faster and more organized."
          }
 
        ]
      },
 
      {
        heading: "Why React Uses Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before component-based frameworks became popular, developers often wrote large HTML files containing everything."
          },
 
          {
            type: "paragraph",
            content:
              "Problems included:"
          },
 
          {
            type: "list",
            items: [
              "Code duplication",
              "Difficult maintenance",
              "Poor scalability",
              "Harder debugging"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Components solve these problems. Benefits include:"
          },
 
          {
            type: "list",
            items: [
              "Reusable code",
              "Better organization",
              "Easier maintenance",
              "Faster development",
              "Improved scalability"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Instead of rewriting the same UI repeatedly, developers can create a component once and reuse it everywhere."
          }
 
        ]
      },
 
      {
        heading: "A Simple React Component",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A React component is simply a JavaScript function that returns JSX."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Welcome to React</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "This function creates a reusable UI component. The returned JSX describes what should appear on the screen."
          }
 
        ]
      },
 
      {
        heading: "Using a Component",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "After creating a component, it can be rendered like an HTML element."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Welcome to React</h1>;
}
 
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Welcome to React"
          },
 
          {
            type: "paragraph",
            content:
              "Notice how <Welcome /> looks similar to an HTML tag. However, it represents a React component."
          }
 
        ]
      },
 
      {
        heading: "Components vs HTML Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners confuse components with HTML elements."
          },
 
          {
            type: "paragraph",
            content:
              "HTML Element:"
          },
 
          {
            type: "code",
            language: "html",
            content: `<h1>Hello</h1>`
          },
 
          {
            type: "paragraph",
            content:
              "React Component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Welcome />`
          },
 
          {
            type: "table",
            headers: [
              "HTML Elements",
              "React Components"
            ],
 
            rows: [
              ["Built into browser", "Created by developers"],
              ["Lowercase names", "PascalCase names"],
              ["Fixed behavior", "Custom behavior"],
              ["Cannot contain application logic", "Can contain logic"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Components allow developers to create their own reusable UI elements."
          }
 
        ]
      },
 
      {
        heading: "Components Make Code Reusable",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Suppose you need three product cards."
          },
 
          {
            type: "paragraph",
            content:
              "Without components:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<div>
  <h2>Phone</h2>
</div>
 
<div>
  <h2>Laptop</h2>
</div>
 
<div>
  <h2>Tablet</h2>
</div>`
          },
 
          {
            type: "paragraph",
            content:
              "Lots of repeated code. Using components:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<ProductCard />
<ProductCard />
<ProductCard />`
          },
 
          {
            type: "paragraph",
            content:
              "The UI can now be reused wherever needed. This significantly reduces duplication."
          }
 
        ]
      },
 
      {
        heading: "Reusability: One of React's Biggest Advantages",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a website containing:"
          },
 
          {
            type: "list",
            items: [
              "50 buttons",
              "100 cards",
              "20 forms"
            ]
          },
 
          {
            type: "comparison",
            leftTitle: "Without Reusable Components",
            leftItems: [
              "Every change must be repeated manually",
              "High risk of inconsistencies",
              "More time spent on duplicate work",
              "More bugs across repeated UI"
            ],
 
            rightTitle: "With Reusable Components",
            rightItems: [
              "Update the component once",
              "Every instance updates automatically",
              "Consistent design across the app",
              "Fewer bugs overall"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Faster development",
              "Consistent design",
              "Easier maintenance",
              "Fewer bugs"
            ]
          }
 
        ]
      },
 
      {
        heading: "Components Help Organize Applications",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As projects grow, components help organize code logically."
          },
 
          {
            type: "paragraph",
            content:
              "Example structure:"
          },
 
          {
            type: "tree",
            content: `src
  ├── components
  │   ├── Navbar.jsx
  │   ├── Button.jsx
  │   ├── Card.jsx
  │   └── Footer.jsx
  │
  ├── pages
  │   ├── Home.jsx
  │   └── Profile.jsx
  │
  └── App.jsx`
          },
 
          {
            type: "paragraph",
            content:
              "Each component has a clear responsibility. This makes projects easier to navigate."
          }
 
        ]
      },
 
      {
        heading: "Component-Based Architecture",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React follows a concept called Component-Based Architecture."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of thinking about pages, React developers think about components."
          },
 
          {
            type: "comparison",
            leftTitle: "Traditional Thinking",
            leftItems: [
              "Home Page",
              "About Page",
              "Contact Page"
            ],
 
            rightTitle: "React Thinking",
            rightItems: [
              "Navbar",
              "Sidebar",
              "Button",
              "Card",
              "Footer",
              "Form"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Pages are simply combinations of components. This mindset is essential for React development."
          }
 
        ]
      },
 
      {
        heading: "Components Can Contain Other Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One component can render other components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Navbar() {
  return <h2>Navbar</h2>;
}
 
function Footer() {
  return <h2>Footer</h2>;
}
 
function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Navbar\n\nFooter"
          },
 
          {
            type: "paragraph",
            content:
              "This technique is called Component Composition."
          }
 
        ]
      },
 
      {
        heading: "What is Component Composition?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Component Composition means building larger components using smaller components."
          },
 
          {
            type: "tree",
            content: `App
  ├── Navbar
  ├── Sidebar
  ├── Dashboard
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Cleaner code",
              "Better reuse",
              "Easier testing",
              "Easier maintenance"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Large applications are built almost entirely through composition."
          }
 
        ]
      },
 
      {
        heading: "Component Hierarchy",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React applications form a hierarchy of components."
          },
 
          {
            type: "tree",
            content: `App
  ├── Header
  ├── Main
  │   └── ProductList
  │       ├── ProductCard
  │       ├── ProductCard
  │       └── ProductCard
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "This parent-child relationship becomes important when learning:"
          },
 
          {
            type: "list",
            items: [
              "Props",
              "State",
              "Data Flow"
            ]
          }
 
        ]
      },
 
      {
        heading: "Naming Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React components should always use PascalCase."
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function ProductCard() {
  return <h2>Product</h2>;
}`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function UserProfile() {
  return <h2>User</h2>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function productCard() {
  return <h2>Product</h2>;
}`
          },
 
          {
            type: "warning",
            content:
              "React treats lowercase names as HTML elements. Always use PascalCase for component names."
          }
 
        ]
      },
 
      {
        heading: "Why PascalCase Matters",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React distinguishes components from HTML tags using capitalization."
          },
 
          {
            type: "paragraph",
            content:
              "React recognizes this as a component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<ProductCard />`
          },
 
          {
            type: "paragraph",
            content:
              "React assumes this is an HTML tag:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<productCard />`
          },
 
          {
            type: "paragraph",
            content:
              "This can cause unexpected behavior. Always use PascalCase."
          }
 
        ]
      },
 
      {
        heading: "Single Responsibility Principle",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional React components usually follow the Single Responsibility Principle."
          },
 
          {
            type: "paragraph",
            content:
              "Each component should focus on one job."
          },
 
          {
            type: "cards",
            items: [
              {
                title: "Button",
                description: "Only handles button UI. Nothing more."
              },
 
              {
                title: "Navbar",
                description: "Only handles navigation UI. Nothing more."
              },
 
              {
                title: "MegaComponent ✗",
                description: "Handles Navbar, Footer, Forms, API Calls, and Authentication all at once. Large components like this become very difficult to maintain."
              }
            ]
          },
 
          {
            type: "tip",
            content:
              "If a component is doing too many things, it is a strong signal to break it apart into smaller, focused components."
          }
 
        ]
      },
 
      {
        heading: "Components Improve Team Collaboration",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In large teams, components allow multiple developers to work simultaneously without conflicts."
          },
 
          {
            type: "example",
            items: [
              "Developer A → Navbar",
              "Developer B → Dashboard",
              "Developer C → Footer"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Because components are isolated, multiple developers can work simultaneously. This improves productivity significantly."
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
                question: "Mistake 1: Creating Huge Components",
                answer:
                  "Large components with hundreds of lines of code become very difficult to read, debug, and maintain. Break them into smaller focused components instead.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `function App() {
  // 500 lines of code
}`
                  },
 
                  {
                    title: "Better",
                    language: "jsx",
                    content: `<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Not Reusing Components",
                answer:
                  "Creating the same UI element repeatedly instead of turning it into a reusable component leads to duplication, inconsistency, and harder maintenance. Build a component once and reuse it everywhere.",
 
                examples: [
                  {
                    title: "Better",
                    language: "jsx",
                    content: `<Button />
<Button />
<Button />`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Poor Component Names",
                answer:
                  "Vague or meaningless component names make code very difficult to understand. Names should clearly describe the component's purpose.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `function x() {}
function abc() {}`
                  },
 
                  {
                    title: "Better",
                    language: "jsx",
                    content: `function ProductCard() {}`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Mixing Too Many Responsibilities",
                answer:
                  "Avoid creating components that fetch data, manage multiple forms, render large sections, and handle unrelated features all at once. Keep components focused on a single responsibility."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Professional Component Design Principles",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Experienced React developers follow several rules."
          },
 
          {
            type: "cards",
            items: [
              {
                title: "1. Keep Components Small",
                description: "Smaller components are easier to understand and maintain."
              },
 
              {
                title: "2. Make Components Reusable",
                description: "Avoid duplicate UI. Build once, use everywhere."
              },
 
              {
                title: "3. Use Meaningful Names",
                description: "Names should clearly describe the component's purpose."
              },
 
              {
                title: "4. Separate UI and Business Logic",
                description: "Keep presentation and logic organized in their own layers."
              },
 
              {
                title: "5. Prefer Composition Over Duplication",
                description: "Build larger components from smaller, focused ones."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "How Components Scale in Real Applications",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "Project Size",
              "Approximate Component Count"
            ],
 
            rows: [
              ["Small Project", "10–20 Components"],
              ["Medium Project", "50–100 Components"],
              ["Large Project", "Hundreds of Components"],
              ["Enterprise Application", "Thousands of Components"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Well-designed components allow applications to grow without becoming unmanageable."
          }
 
        ]
      },
 
      {
        heading: "Component Overview Checklist",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before moving forward, ensure you understand:"
          },
 
          {
            type: "list",
            items: [
              "Components are reusable UI pieces",
              "Components are JavaScript functions",
              "Components return JSX",
              "Components use PascalCase naming",
              "Components can render other components",
              "Components improve organization",
              "Components support code reuse",
              "Components form hierarchies",
              "Components help applications scale"
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
              "Components are the foundation of React development."
          },
 
          {
            type: "paragraph",
            content:
              "They allow developers to break complex interfaces into smaller, reusable pieces."
          },
 
          {
            type: "paragraph",
            content:
              "React components provide:"
          },
 
          {
            type: "list",
            items: [
              "Reusability",
              "Better organization",
              "Easier maintenance",
              "Improved scalability",
              "Faster development",
              "Better team collaboration"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React applications are built by combining many small components into larger user interfaces."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding components is one of the most important steps toward mastering React."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think React is mainly about JSX or JavaScript syntax. In reality, React's biggest innovation is its component-based architecture. Once you learn to think in components instead of pages, building large and scalable applications becomes dramatically easier."
          }
 
        ]
      }
  ]
},




/* ===============================
  Fifth Topic : Functional Components
================================ */
"functional-components": {
  title: "Functional Components",
  readingTime: "17 min",

  content: [
    {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Functional Components are the most commonly used type of component in modern React development."
          },
 
          {
            type: "paragraph",
            content:
              "In the early days of React, developers often used Class Components for building complex applications. However, with the introduction of React Hooks, Functional Components became powerful enough to handle almost every use case."
          },
 
          {
            type: "paragraph",
            content:
              "Today, Functional Components are the standard approach recommended by the React team and used by most React developers worldwide."
          },
 
          {
            type: "paragraph",
            content:
              "Almost every modern React application is built primarily using Functional Components."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What Functional Components are",
              "Why they are important",
              "How they work",
              "How React renders Functional Components",
              "Functional Components vs Class Components",
              "Returning JSX from components",
              "Reusable Functional Components",
              "Component composition",
              "Best practices used in industry",
              "Common beginner mistakes"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will be able to create reusable React interfaces using Functional Components confidently."
          }
 
        ]
      },
 
      {
        heading: "What is a Functional Component?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A Functional Component is simply a JavaScript function that returns JSX."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Hello React!</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "This function behaves like a React component because it returns JSX that React can render on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "When React encounters:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Welcome />`
          },
 
          {
            type: "paragraph",
            content:
              "It executes the function and displays the returned JSX."
          }
 
        ]
      },
 
      {
        heading: "Why Are They Called Functional Components?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "They are called Functional Components because they are created using JavaScript functions."
          },
 
          {
            type: "paragraph",
            content:
              "Unlike Class Components, they do not require:"
          },
 
          {
            type: "list",
            items: [
              "Classes",
              "Constructors",
              "render() methods",
              "this keyword"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Header() {
  return <h1>Website Header</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "The component is simply a function."
          }
 
        ]
      },
 
      {
        heading: "The Simplest Functional Component",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return <h1>Hello World</h1>;
}
 
export default App;`
          },
 
          {
            type: "output",
            content:
              "Hello World"
          },
 
          {
            type: "paragraph",
            content:
              "React calls the function and renders the returned JSX."
          }
 
        ]
      },
 
      {
        heading: "Understanding How React Renders Functional Components",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `function Greeting() {
  return <h1>Welcome!</h1>;
}
 
function App() {
  return <Greeting />;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Rendering Flow:"
          },
 
          {
            type: "flow",
            steps: [
              "App Component", "→",
              "Greeting Component", "→",
              "Returns JSX", "→",
              "React Renders UI"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React treats Functional Components as reusable UI generators."
          }
 
        ]
      },
 
      {
        heading: "Functional Components Return JSX",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The primary responsibility of a Functional Component is returning JSX."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Profile() {
  return (
    <div>
      <h2>John Doe</h2>
      <p>Frontend Developer</p>
    </div>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Returned JSX becomes part of the user interface."
          }
 
        ]
      },
 
      {
        heading: "Returning Multiple Elements",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "JSX must have a single root element."
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Or using a Fragment:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Fragments avoid adding unnecessary HTML elements."
          }
 
        ]
      },
 
      {
        heading: "Creating Reusable Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the biggest advantages of Functional Components is reusability."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h2>Welcome User</h2>;
}
 
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}`
          },
 
          {
            type: "output",
            content:
              ["Welcome User", "Welcome User", "Welcome User"]
          },
 
          {
            type: "paragraph",
            content:
              "The same component can be used multiple times."
          }
 
        ]
      },
 
      {
        heading: "Components Can Be Nested",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Components can contain other components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Navbar() {
  return <h2>Navbar</h2>;
}
 
function Footer() {
  return <h2>Footer</h2>;
}
 
function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Structure:"
          },
 
          {
            type: "tree",
            content: `App
  ├── Navbar
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "This is called Component Composition."
          }
 
        ]
      },
 
      {
        heading: "Functional Components Follow the Component-Based Architecture",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React applications are built by combining many small Functional Components."
          },
 
          {
            type: "tree",
            content: `Website
  ├── Header
  ├── Sidebar
  ├── ProductList
  │   ├── ProductCard
  │   ├── ProductCard
  │   └── ProductCard
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "Each component is responsible for a specific part of the UI."
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Easier maintenance",
              "Better organization",
              "Improved scalability",
              "Reusable code"
            ]
          }
 
        ]
      },
 
      {
        heading: "Arrow Function Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Functional Components can also be written using arrow functions."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const Welcome = () => {
  return <h1>Hello React</h1>;
};
 
export default Welcome;`
          },
 
          {
            type: "paragraph",
            content:
              "Or even shorter:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const Welcome = () => (
  <h1>Hello React</h1>
);
 
export default Welcome;`
          },
 
          {
            type: "paragraph",
            content:
              "Both approaches are valid. Many modern React projects prefer arrow functions."
          }
 
        ]
      },
 
      {
        heading: "Naming Rules for Functional Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Component names must start with an uppercase letter."
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Header() {
  return <h1>Header</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function header() {
  return <h1>Header</h1>;
}`
          },
 
          {
            type: "warning",
            content:
              "React treats lowercase names as HTML elements. Always use PascalCase for component names."
          },
 
          {
            type: "paragraph",
            content:
              "Always use PascalCase:"
          },
 
          {
            type: "example",
            items: [
              "UserProfile",
              "ShoppingCart",
              "ProductCard",
              "LoginForm"
            ]
          }
 
        ]
      },
 
      {
        heading: "One Component, One Responsibility",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A component should ideally focus on a single task."
          },
 
          {
            type: "paragraph",
            content:
              "Good:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Button() {
  return <button>Click Me</button>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function MegaComponent() {
  // Navbar
  // Sidebar
  // Dashboard
  // Footer
  // Forms
  // API Logic
  // Hundreds of lines
}`
          },
 
          {
            type: "paragraph",
            content:
              "Smaller components are easier to:"
          },
 
          {
            type: "list",
            items: [
              "Read",
              "Reuse",
              "Test",
              "Maintain"
            ]
          }
 
        ]
      },
 
      {
        heading: "Functional Components and Modern React",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Modern React development revolves around Functional Components."
          },
 
          {
            type: "paragraph",
            content:
              "They work seamlessly with:"
          },
 
          {
            type: "list",
            items: [
              "Hooks",
              "Context API",
              "React Router",
              "State Management Libraries",
              "API Integration"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "example",
            items: [
              "useState",
              "useEffect",
              "useContext",
              "useReducer",
              "useRef"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "All modern React features are designed with Functional Components in mind."
          }
 
        ]
      },
 
      {
        heading: "Functional Components vs Class Components",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "Feature",
              "Functional Component",
              "Class Component"
            ],
 
            rows: [
              ["Syntax", "Simple", "More Complex"],
              ["Uses Functions", "Yes", "No"],
              ["Uses Classes", "No", "Yes"],
              ["Uses Hooks", "Yes", "No"],
              ["Uses this Keyword", "No", "Yes"],
              ["Modern Standard", "Yes", "Rarely"],
              ["Recommended by React", "Yes", "No"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Modern React development strongly favors Functional Components."
          }
 
        ]
      },
 
      {
        heading: "Advantages of Functional Components",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "Simpler Syntax",
                description: "Less code is required compared to Class Components."
              },
 
              {
                title: "Easier to Read",
                description: "Functions are easier to understand than classes."
              },
 
              {
                title: "Better Reusability",
                description: "Small components can be reused throughout applications."
              },
 
              {
                title: "Hook Support",
                description: "Can use all modern React Hooks such as useState, useEffect, and more."
              },
 
              {
                title: "Better Performance Optimization",
                description: "Work well with React optimization techniques."
              },
 
              {
                title: "Industry Standard",
                description: "Used in nearly all new React projects."
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
              "Consider an e-commerce application. Instead of building everything inside one file:"
          },
 
          {
            type: "tree",
            content: `App
  ├── Navbar
  ├── SearchBar
  ├── ProductList
  │   ├── ProductCard
  │   ├── ProductCard
  │   └── ProductCard
  ├── Cart
  └── Footer`
          },
 
          {
            type: "paragraph",
            content:
              "Each section becomes a Functional Component. This makes the application:"
          },
 
          {
            type: "list",
            items: [
              "Easier to maintain",
              "Easier to scale",
              "Easier for teams to collaborate on"
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
                question: "Mistake 1: Forgetting return",
                answer:
                  "Without the return keyword, the component returns undefined and nothing will appear on the screen. Always explicitly return JSX from your component.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function App() {
  <h1>Hello</h1>;
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `function App() {
  return <h1>Hello</h1>;
}`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Using Lowercase Component Names",
                answer:
                  "React treats lowercase names as built-in HTML elements. If your component name starts with a lowercase letter, React will not recognize it as a component and will throw an error.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function profile() {
  return <h1>Profile</h1>;
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `function Profile() {
  return <h1>Profile</h1>;
}`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Returning Multiple Root Elements",
                answer:
                  "JSX must always return a single root element. Returning two sibling elements without a wrapper will cause a syntax error. Use a parent div or a Fragment instead.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `return (
  <h1>Hello</h1>
  <p>World</p>
);`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Creating Huge Components",
                answer:
                  "Large components with too much logic and UI crammed together become very difficult to read, debug, and reuse. Split them into smaller, focused, reusable pieces."
              },
 
              {
                question: "Mistake 5: Mixing Too Many Responsibilities",
                answer:
                  "Avoid combining UI rendering, API logic, state management, and utility functions inside one giant component. Each component should focus on a single, clear responsibility."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Best Practices",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "Use PascalCase Names",
                description: "Always name components with PascalCase. Example: UserProfile, ProductCard, LoginForm."
              },
 
              {
                title: "Keep Components Small",
                description: "Smaller components are easier to read, test, and maintain."
              },
 
              {
                title: "Focus on One Responsibility",
                description: "Each component should solve one problem and do it well."
              },
 
              {
                title: "Reuse Components",
                description: "Avoid duplicating UI code. Build once and reuse everywhere."
              },
 
              {
                title: "Prefer Functional Components",
                description: "Use Functional Components for all new React projects."
              },
 
              {
                title: "Use Fragments When Needed",
                description: "Avoid unnecessary wrapper divs. Use <> </> Fragments instead."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Functional Component Development Workflow",
 
        blocks: [
 
          {
            type: "flow",
            steps: [
              "Create Component", "→",
              "Return JSX", "→",
              "Reuse Component", "→",
              "Add Logic", "→",
              "Add State", "→",
              "Add Interactions", "→",
              "Scale Application"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is the typical path followed in modern React development."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Functional Components are JavaScript functions that return JSX and form the foundation of modern React development."
          },
 
          {
            type: "paragraph",
            content:
              "They provide:"
          },
 
          {
            type: "list",
            items: [
              "Simpler syntax",
              "Better readability",
              "Reusable UI",
              "Component composition",
              "Hook support",
              "Easier maintenance",
              "Better scalability"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Modern React applications are built almost entirely using Functional Components."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding them is one of the most important steps toward becoming a proficient React developer."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think Functional Components are just a shorter version of Class Components. In reality, Functional Components are the foundation of modern React. Hooks, Context API, React Router, and most modern React patterns are designed around Functional Components. Mastering them early will make learning advanced React concepts significantly easier."
          }
 
        ]
      }
  ]
},



/* ===============================
  Sixth Topic : Class Components
================================ */
"class-components": {
  title: "Class Components",
  readingTime: "17 min",

  content: [
    {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before React Hooks were introduced, Class Components were the primary way to create stateful React components."
          },
 
          {
            type: "paragraph",
            content:
              "They allowed developers to:"
          },
 
          {
            type: "list",
            items: [
              "Store and manage state",
              "Handle user interactions",
              "Perform lifecycle operations",
              "Build dynamic user interfaces"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "For many years, almost every React application was built using Class Components."
          },
 
          {
            type: "paragraph",
            content:
              "Today, Functional Components are the recommended approach for modern React development. However, understanding Class Components remains important because:"
          },
 
          {
            type: "list",
            items: [
              "Many older React projects still use them",
              "Large enterprise applications often contain Class Components",
              "Interview questions frequently cover them",
              "They help developers understand React's evolution"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What Class Components are",
              "Why they were created",
              "How to create a Class Component",
              "Understanding render()",
              "Using state in Class Components",
              "Handling events",
              "Component lifecycle basics",
              "Functional vs Class Components",
              "When Class Components are still useful",
              "Common mistakes beginners make"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how Class Components work and why React eventually shifted toward Functional Components."
          }
 
        ]
      },
 
      {
        heading: "What is a Class Component?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A Class Component is a JavaScript class that extends React's Component class and returns JSX through a special method called render()."
          },
 
          {
            type: "paragraph",
            content:
              "Basic example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import React, { Component } from "react";
 
class Welcome extends Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
 
export default Welcome;`
          },
 
          {
            type: "paragraph",
            content:
              "In this example:"
          },
 
          {
            type: "list",
            items: [
              "Welcome is a class",
              "It extends Component",
              "It contains a render() method",
              "render() returns JSX"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This JSX is then displayed on the screen."
          }
 
        ]
      },
 
      {
        heading: "Why Were Class Components Created?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In early React versions, Functional Components were extremely limited."
          },
 
          {
            type: "paragraph",
            content:
              "They could:"
          },
 
          {
            type: "list",
            items: [
              "✅ Display UI"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "But they could not:"
          },
 
          {
            type: "list",
            items: [
              "❌ Store state",
              "❌ Use lifecycle methods",
              "❌ Manage complex logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "To solve this problem, React introduced Class Components."
          },
 
          {
            type: "paragraph",
            content:
              "Class Components provided:"
          },
 
          {
            type: "list",
            items: [
              "State management",
              "Lifecycle methods",
              "Event handling",
              "Advanced component logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "For many years, they were the most powerful type of React component."
          }
 
        ]
      },
 
      {
        heading: "Structure of a Class Component",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A Class Component follows a specific structure:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import React, { Component } from "react";
 
class Greeting extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
 
export default Greeting;`
          },
 
          {
            type: "paragraph",
            content:
              "Important parts:"
          },
 
          {
            type: "table",
            headers: [
              "Part",
              "Purpose"
            ],
 
            rows: [
              ["class Greeting", "Creates a component"],
              ["extends Component", "Inherits React functionality"],
              ["render()", "Returns JSX"],
              ["export default", "Makes component reusable"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Every Class Component must contain a render() method."
          }
 
        ]
      },
 
      {
        heading: "Understanding render()",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The render() method is the heart of every Class Component."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    );
  }
}`
          },
 
          {
            type: "paragraph",
            content:
              "Purpose of render():"
          },
 
          {
            type: "list",
            items: [
              "Creates UI",
              "Returns JSX",
              "Runs whenever the component updates"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without render(), React would not know what to display."
          }
 
        ]
      },
 
      {
        heading: "Creating Your First Class Component",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import React, { Component } from "react";
 
class Welcome extends Component {
  render() {
    return (
      <h1>Welcome to React</h1>
    );
  }
}
 
export default Welcome;`
          },
 
          {
            type: "paragraph",
            content:
              "Usage:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import Welcome from "./Welcome";
 
function App() {
  return (
    <Welcome />
  );
}`
          },
 
          {
            type: "output",
            content:
              "Welcome to React"
          },
 
          {
            type: "paragraph",
            content:
              "The component behaves exactly like a Functional Component when rendered."
          }
 
        ]
      },
 
      {
        heading: "Using State in Class Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the biggest reasons Class Components became popular was state management."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class Counter extends Component {
  state = {
    count: 0
  };
 
  render() {
    return (
      <h1>{this.state.count}</h1>
    );
  }
}`
          },
 
          {
            type: "output",
            content:
              "0"
          },
 
          {
            type: "paragraph",
            content:
              "Here:"
          },
 
          {
            type: "list",
            items: [
              "state stores data",
              "React tracks changes",
              "UI updates automatically"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "State allows components to become dynamic."
          }
 
        ]
      },
 
      {
        heading: "Understanding this.state",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "State inside Class Components is accessed using:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `this.state`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class User extends Component {
  state = {
    name: "John"
  };
 
  render() {
    return (
      <h1>{this.state.name}</h1>
    );
  }
}`
          },
 
          {
            type: "output",
            content:
              "John"
          },
 
          {
            type: "paragraph",
            content:
              "The keyword this refers to the current component instance."
          }
 
        ]
      },
 
      {
        heading: "Updating State with setState()",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Unlike Functional Components, Class Components do not use useState(). Instead, they use:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `this.setState()`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class Counter extends Component {
  state = {
    count: 0
  };
 
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
 
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
 
        <button onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}`
          },
 
          {
            type: "paragraph",
            content:
              "Each click updates the state and triggers a re-render."
          }
 
        ]
      },
 
      {
        heading: "Why Not Modify State Directly?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `this.state.count = 10;`
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `this.setState({
  count: 10
});`
          },
 
          {
            type: "paragraph",
            content:
              "Reason: React tracks updates through setState(). Direct modification:"
          },
 
          {
            type: "list",
            items: [
              "Bypasses React",
              "Prevents proper updates",
              "Creates bugs"
            ]
          },
 
          {
            type: "warning",
            content:
              "Always use setState() to update state in Class Components. Never mutate this.state directly."
          }
 
        ]
      },
 
      {
        heading: "Handling Events",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Class Components can respond to user actions."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class Button extends Component {
  handleClick = () => {
    alert("Button Clicked");
  };
 
  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}`
          },
 
          {
            type: "paragraph",
            content:
              "Events include:"
          },
 
          {
            type: "list",
            items: [
              "Clicks",
              "Form submissions",
              "Keyboard input",
              "Mouse interactions"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This allows applications to become interactive."
          }
 
        ]
      },
 
      {
        heading: "Using Props in Class Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Props work similarly to Functional Components."
          },
 
          {
            type: "paragraph",
            content:
              "Parent:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<User name="Alex" />`
          },
 
          {
            type: "paragraph",
            content:
              "Child:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class User extends Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}`
          },
 
          {
            type: "output",
            content:
              "Alex"
          },
 
          {
            type: "paragraph",
            content:
              "Props are accessed using:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `this.props`
          }
 
        ]
      },
 
      {
        heading: "Component Lifecycle",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Class Components introduced lifecycle methods."
          },
 
          {
            type: "paragraph",
            content:
              "These methods run at different stages of a component's life."
          },
 
          {
            type: "paragraph",
            content:
              "Lifecycle stages:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Created", "→",
              "Mounted", "→",
              "Updated", "→",
              "Unmounted"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Lifecycle methods allow developers to run code during these stages."
          }
 
        ]
      },
 
      {
        heading: "Common Lifecycle Methods",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "componentDidMount() — Runs after the component appears on screen."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `componentDidMount() {
  console.log("Mounted");
}`
          },
 
          {
            type: "paragraph",
            content:
              "Common uses:"
          },
 
          {
            type: "list",
            items: [
              "API calls",
              "Data fetching",
              "Event listeners"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "componentDidUpdate() — Runs after updates."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `componentDidUpdate() {
  console.log("Updated");
}`
          },
 
          {
            type: "paragraph",
            content:
              "Common uses:"
          },
 
          {
            type: "list",
            items: [
              "Responding to state changes",
              "Updating external data"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "componentWillUnmount() — Runs before removal."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `componentWillUnmount() {
  console.log("Removed");
}`
          },
 
          {
            type: "paragraph",
            content:
              "Common uses:"
          },
 
          {
            type: "list",
            items: [
              "Cleanup operations",
              "Removing listeners",
              "Clearing timers"
            ]
          }
 
        ]
      },
 
      {
        heading: "Functional Components vs Class Components",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "Feature",
              "Functional",
              "Class"
            ],
 
            rows: [
              ["Simpler Syntax", "✅", "❌"],
              ["Hooks Support", "✅", "❌"],
              ["State Management", "✅", "✅"],
              ["Lifecycle Support", "✅ (Hooks)", "✅"],
              ["Less Boilerplate", "✅", "❌"],
              ["Modern Standard", "✅", "❌"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Today, Functional Components are preferred in nearly all new React projects."
          }
 
        ]
      },
 
      {
        heading: "Why Functional Components Replaced Class Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React Hooks introduced:"
          },
 
          {
            type: "example",
            items: [
              "useState()",
              "useEffect()",
              "useContext()",
              "useReducer()"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These allowed Functional Components to perform everything Class Components could do."
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "list",
            items: [
              "Less code",
              "Easier learning",
              "Better readability",
              "Better code reuse"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "As a result, Functional Components became the modern standard."
          }
 
        ]
      },
 
      {
        heading: "When Will You Still Encounter Class Components?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Even though new projects rarely use them, you may still find Class Components in:"
          },
 
          {
            type: "list",
            items: [
              "Legacy React applications",
              "Enterprise codebases",
              "Older tutorials",
              "Interview questions",
              "Existing production systems"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding them helps developers work with older React projects."
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
                question: "Mistake 1: Forgetting render()",
                answer:
                  "Every Class Component must contain a render() method. Without it, React does not know what to display and will throw an error.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `class App extends Component {
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `class App extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Using state Instead of this.state",
                answer:
                  "In Class Components, state is always accessed through the this keyword. Using state alone without this will result in a reference error.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<h1>{state.count}</h1>`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<h1>{this.state.count}</h1>`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Modifying State Directly",
                answer:
                  "State must never be mutated directly in Class Components. React will not detect the change and the UI will not update. Always use setState() instead.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `this.state.count++;`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `this.setState({
  count: this.state.count + 1
});`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Forgetting this.props",
                answer:
                  "Props in Class Components are always accessed through this.props. Attempting to access them directly without this will result in undefined.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<h1>{name}</h1>`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<h1>{this.props.name}</h1>`
                  }
                ]
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "When Should You Use Class Components?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "For modern React development:"
          },
 
          {
            type: "list",
            items: [
              "Learn them",
              "Understand them",
              "Recognize them"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "But build new projects using Functional Components."
          },
 
          {
            type: "note",
            content:
              "Class Components are mainly useful when maintaining older applications. For any new React project, always default to Functional Components."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Class Components were once the backbone of React development."
          },
 
          {
            type: "paragraph",
            content:
              "They introduced:"
          },
 
          {
            type: "list",
            items: [
              "State management",
              "Lifecycle methods",
              "Event handling",
              "Dynamic UI capabilities"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "A Class Component:"
          },
 
          {
            type: "list",
            items: [
              "Extends Component",
              "Uses render()",
              "Accesses props through this.props",
              "Accesses state through this.state",
              "Updates data using this.setState()"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Although Functional Components are now preferred, understanding Class Components remains valuable because many real-world React applications still contain them."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think Class Components are obsolete and can be ignored completely. While modern React development primarily uses Functional Components, a large number of production applications still contain Class Components written years ago. Knowing how to read and understand them can save you significant time when working with legacy React codebases or preparing for technical interviews."
          }
 
        ]
      }
  ]
},




/* ===============================
  Seventh Topic : Props
================================ */
"props": {
  title: "Props",
  readingTime: "17 min",

  content: [
    {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building a React application where every component always displayed the same information."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A UserCard component would always show the same user.",
              "A ProductCard would always display the same product.",
              "A Button would always contain the same text."
            ]
          },
          {
            type: "paragraph",
            content: "Such components would be reusable in code, but not reusable in practice."
          },
          {
            type: "paragraph",
            content: "This is where Props become important."
          },
          {
            type: "paragraph",
            content: "Props allow components to receive data from other components, making them dynamic, flexible, and reusable."
          },
          {
            type: "paragraph",
            content: "In React, props are one of the most fundamental concepts because they enable communication between components."
          },
          {
            type: "paragraph",
            content: "Almost every React application uses props extensively."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What props are",
              "Why props are needed",
              "How props work",
              "Passing data to components",
              "Multiple props",
              "Props and component reusability",
              "Passing strings, numbers, arrays, objects, and functions",
              "Children props",
              "Props destructuring",
              "Default props",
              "Common beginner mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how React components communicate using props and why props are considered the foundation of React component architecture."
          }
        ]
      },

      {
        heading: "What Are Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Props stands for:"
          },
          {
            type: "output",
            content: "Properties"
          },
          {
            type: "paragraph",
            content: "Props are used to pass data from a parent component to a child component."
          },
          {
            type: "paragraph",
            content: "Think of props as arguments passed into a JavaScript function."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "JavaScript Function:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function greet(name) {
  return \`Hello \${name}\`;
}

greet("Alex");`
          },
          {
            type: "paragraph",
            content: "React Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Greeting name="Alex" />`
          },
          {
            type: "paragraph",
            content: "In both cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Data is passed in",
              "The receiver uses that data",
              "The output changes accordingly"
            ]
          },
          {
            type: "paragraph",
            content: "Props make React components customizable."
          }
        ]
      },

      {
        heading: "Why Do We Need Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Without props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard() {
  return <h2>John</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Every instance displays:"
          },
          {
            type: "output",
            content: "John"
          },
          {
            type: "paragraph",
            content: "Not very useful."
          },
          {
            type: "paragraph",
            content: "With props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard(props) {
  return <h2>{props.name}</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserCard name="John" />
<UserCard name="Sarah" />
<UserCard name="David" />`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["John", "Sarah", "David"]
          },
          {
            type: "paragraph",
            content: "Now the same component can display different data."
          },
          {
            type: "paragraph",
            content: "This is true reusability."
          }
        ]
      },

      {
        heading: "Understanding Parent and Child Components",
        blocks: [
          {
            type: "paragraph",
            content: "Props always flow from:"
          },
          {
            type: "flow",
            steps: [
              "Parent Component", "→",
              "Child Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <UserCard name="Alex" />
  );
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
              "App is the parent",
              "UserCard is the child",
              "name is the prop"
            ]
          },
          {
            type: "paragraph",
            content: "The child receives data from the parent."
          },
          {
            type: "paragraph",
            content: "This follows React's:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          }
        ]
      },

      {
        heading: "Creating Your First Prop",
        blocks: [
          {
            type: "paragraph",
            content: "Parent Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <Welcome name="Alex" />
  );
}`
          },
          {
            type: "paragraph",
            content: "Child Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Hello Alex"
          },
          {
            type: "paragraph",
            content: "React automatically passes the prop into the component."
          }
        ]
      },

      {
        heading: "Understanding the props Object",
        blocks: [
          {
            type: "paragraph",
            content: "Inside a component, all props are stored inside an object called:"
          },
          {
            type: "output",
            content: "props"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  console.log(props);

  return (
    <h1>{props.name}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User name="John" age={25} />`
          },
          {
            type: "paragraph",
            content: "The props object becomes:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "John",
  "age": 25
}`
          },
          {
            type: "paragraph",
            content: "Every prop becomes a property of the props object."
          }
        ]
      },

      {
        heading: "Passing Multiple Props",
        blocks: [
          {
            type: "paragraph",
            content: "A component can receive multiple props."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User
  name="John"
  age={25}
/>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["John", "25"]
          },
          {
            type: "paragraph",
            content: "This allows components to display rich and dynamic data."
          }
        ]
      },

      {
        heading: "Passing String Props",
        blocks: [
          {
            type: "paragraph",
            content: "Strings are passed using quotation marks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User name="Alex" />`
          },
          {
            type: "paragraph",
            content: "Received:"
          },
          {
            type: "output",
            content: "props.name"
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "output",
            content: "Alex"
          },
          {
            type: "paragraph",
            content: "String props are the most commonly used type of prop."
          }
        ]
      },

      {
        heading: "Passing Number Props",
        blocks: [
          {
            type: "paragraph",
            content: "Numbers use curly braces."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User age={25} />`
          },
          {
            type: "paragraph",
            content: "Received:"
          },
          {
            type: "output",
            content: "props.age"
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "output",
            content: "25"
          },
          {
            type: "paragraph",
            content: "Curly braces tell React to evaluate JavaScript."
          }
        ]
      },

      {
        heading: "Passing Boolean Props",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User isLoggedIn={true} />`
          },
          {
            type: "paragraph",
            content: "Received:"
          },
          {
            type: "output",
            content: "props.isLoggedIn"
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "output",
            content: "true"
          },
          {
            type: "paragraph",
            content: "Shortcut syntax:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User isLoggedIn />`
          },
          {
            type: "paragraph",
            content: "React automatically interprets this as:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User isLoggedIn={true} />`
          }
        ]
      },

      {
        heading: "Passing Variables as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Props can contain variables."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const username = "Sarah";

<User name={username} />`
          },
          {
            type: "paragraph",
            content: "Received:"
          },
          {
            type: "output",
            content: "Sarah"
          },
          {
            type: "paragraph",
            content: "This is extremely common in real applications."
          }
        ]
      },

      {
        heading: "Passing Expressions as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Any valid JavaScript expression can be passed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User age={20 + 5} />`
          },
          {
            type: "paragraph",
            content: "Value:"
          },
          {
            type: "output",
            content: "25"
          },
          {
            type: "paragraph",
            content: "React evaluates the expression before passing it."
          }
        ]
      },

      {
        heading: "Passing Arrays as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

<List items={fruits} />`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Apple", "Banana", "Mango"]
          },
          {
            type: "paragraph",
            content: "Arrays are frequently passed to list components."
          }
        ]
      },

      {
        heading: "Passing Objects as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const user = {
  name: "John",
  age: 25
};

<UserCard user={user} />`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard(props) {
  return (
    <>
      <h2>{props.user.name}</h2>
      <p>{props.user.age}</p>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["John", "25"]
          },
          {
            type: "paragraph",
            content: "Objects allow multiple related values to travel together."
          }
        ]
      },

      {
        heading: "Passing Functions as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Functions can also be passed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const handleClick = () => {
    alert("Clicked");
  };

  return (
    <Button onClick={handleClick} />
  );
}`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Button(props) {
  return (
    <button onClick={props.onClick}>
      Click
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Why is this important?"
          },
          {
            type: "paragraph",
            content: "Because it allows child components to trigger actions defined in the parent."
          },
          {
            type: "paragraph",
            content: "This pattern is used constantly in React."
          }
        ]
      },

      {
        heading: "Props Are Read-Only",
        blocks: [
          {
            type: "paragraph",
            content: "Props should never be modified."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  props.name = "Alex";

  return <h1>{props.name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  return <h1>{props.name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Props are considered:"
          },
          {
            type: "output",
            content: "Immutable"
          },
          {
            type: "paragraph",
            content: "Meaning: They cannot be changed by the child component."
          }
        ]
      },

      {
        heading: "Why Are Props Immutable?",
        blocks: [
          {
            type: "paragraph",
            content: "React's data flow depends on predictable behavior."
          },
          {
            type: "paragraph",
            content: "If children could modify props:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Debugging would become difficult",
              "Components would behave unpredictably",
              "Data flow would break"
            ]
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Parent owns the data",
              "Child receives the data"
            ]
          }
        ]
      },

      {
        heading: "Props Destructuring",
        blocks: [
          {
            type: "paragraph",
            content: "Accessing props repeatedly can become verbose."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  return (
    <h1>{props.name}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Use destructuring:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User({ name }) {
  return (
    <h1>{name}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Multiple props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User({
  name,
  age
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "This is the modern and preferred approach."
          }
        ]
      },

      {
        heading: "The Special children Prop",
        blocks: [
          {
            type: "paragraph",
            content: "React automatically provides a special prop called:"
          },
          {
            type: "output",
            content: "children"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Card>
  <h1>Hello</h1>
</Card>`
          },
          {
            type: "paragraph",
            content: "Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Hello"
          },
          {
            type: "paragraph",
            content: "Everything placed between opening and closing tags becomes children."
          }
        ]
      },

      {
        heading: "Why children Is Useful",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Card>
  <p>First Content</p>
</Card>

<Card>
  <button>Submit</button>
</Card>`
          },
          {
            type: "paragraph",
            content: "The same component can wrap completely different content."
          },
          {
            type: "paragraph",
            content: "This makes components highly reusable."
          }
        ]
      },

      {
        heading: "Default Props",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a prop may not be provided."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User />`
          },
          {
            type: "paragraph",
            content: "Instead of showing:"
          },
          {
            type: "output",
            content: "undefined"
          },
          {
            type: "paragraph",
            content: "You can provide a default value."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User({
  name = "Guest"
}) {
  return <h1>{name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Guest"
          },
          {
            type: "paragraph",
            content: "This improves user experience."
          }
        ]
      },

      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Product Card:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function ProductCard({
  title,
  price
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>\${price}</p>
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProductCard
  title="Laptop"
  price={1000}
/>

<ProductCard
  title="Phone"
  price={500}
/>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Laptop - $1000", "Phone - $500"]
          },
          {
            type: "paragraph",
            content: "One component can display countless products."
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
                question: "Mistake 1: Forgetting Props Parameter",
                answer: "You must include `props` (or use destructuring) in your component definition to access passed data.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function User() {
  return <h1>{props.name}</h1>;
}`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `function User(props) {
  return <h1>{props.name}</h1>;
}`
                  }
                ]
              },
              {
                question: "Mistake 2: Modifying Props",
                answer: "Props are read-only. Modifying them causes unpredictable behavior and breaks the React data flow.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `props.name = "Alex";`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `// Use props directly without modifying them.
const currentName = props.name;`
                  }
                ]
              },
              {
                question: "Mistake 3: Missing Curly Braces",
                answer: "When passing numbers, booleans, or expressions, you must wrap them in curly braces so React knows to evaluate them.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<User age="25 + 5" />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<User age={25 + 5} />`
                  }
                ]
              },
              {
                question: "Mistake 4: Using Props in the Parent Incorrectly",
                answer: "Strings require quotation marks unless they are passed as variables using curly braces.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<User name={Alex} />`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<User name="Alex" />`
                  }
                ]
              },
              {
                question: "Mistake 5: Ignoring Destructuring",
                answer: "While using `props.propertyName` works, destructuring your props directly in the parameters improves readability and makes your code cleaner.",
                examples: [
                  {
                    title: "Less readable",
                    language: "javascript",
                    content: `props.name
props.age
props.email`
                  },
                  {
                    title: "Better",
                    language: "javascript",
                    content: `function User({
  name,
  age,
  email
}) {
  // component logic
}`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers usually:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Keep props simple",
              "Avoid deeply nested props",
              "Use destructuring",
              "Provide defaults when appropriate",
              "Pass only required data",
              "Keep components reusable",
              "Treat props as read-only"
            ]
          },
          {
            type: "paragraph",
            content: "Following these practices makes applications easier to maintain."
          }
        ]
      },

      {
        heading: "Props vs State",
        blocks: [
          {
            type: "table",
            headers: ["Props", "State"],
            rows: [
              ["Received from parent", "Managed by component"],
              ["Read-only", "Can change"],
              ["External data", "Internal data"],
              ["Controlled by parent", "Controlled by component"]
            ]
          },
          {
            type: "paragraph",
            content: "Simple rule:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Props = Input",
              "State = Memory"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this difference is crucial for React development."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Props are the mechanism React uses to pass data between components."
          },
          {
            type: "paragraph",
            content: "They allow:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component communication",
              "Dynamic content",
              "Reusability",
              "One-way data flow",
              "Flexible UI construction"
            ]
          },
          {
            type: "paragraph",
            content: "Props can contain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Strings",
              "Numbers",
              "Booleans",
              "Arrays",
              "Objects",
              "Functions",
              "JSX"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding props is one of the most important milestones in learning React because almost every React application relies heavily on them."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think props are simply a way to display text inside components. In reality, props are the foundation of component communication in React. Entire applications are built around passing data through props. Once you understand props deeply, concepts like state lifting, component composition, and even advanced state management become much easier to learn."
          }
        ]
      }
  ]
},





/* ===============================
  Eigth Topic : State
================================ */
"state": {
  title: "State",
  readingTime: "17 min",

  content: [
    {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "What state is"
          },
          {
            type: "paragraph",
            content: "State represents the parts of an application that can change over time. It is the data that determines what users currently see on their screen."
          },
          {
            type: "paragraph",
            content: "Why state exists"
          },
          {
            type: "paragraph",
            content: "State exists to allow components to create, manage, and track their own data independently. Without state, React components would be completely static."
          },
          {
            type: "paragraph",
            content: "Why modern UIs depend on state"
          },
          {
            type: "paragraph",
            content: "Modern user interfaces are highly interactive. When a user clicks a button, types in a form, or toggles a theme, the interface must respond instantly. Modern UIs depend on state to track these interactions and update the screen dynamically without reloading the entire page."
          }
        ]
      },

      {
        heading: "What is State?",
        blocks: [
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "quote",
            content: "State is a component's memory."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Counter value",
              "Input text",
              "Shopping cart items",
              "Theme mode",
              "Notifications"
            ]
          },
          {
            type: "paragraph",
            content: "Real-world analogy: Think of a component as a chef in a kitchen. Props are the recipe instructions given to the chef by the restaurant manager. State is the chef's own memory of how much salt they have already added to the soup. The chef updates this memory as they cook, and it directly affects the final dish."
          }
        ]
      },

      {
        heading: "Why Regular Variables Are Not Enough",
        blocks: [
          {
            type: "paragraph",
            content: "Show:"
          },
          {
            type: "code",
            language: "javascript",
            content: `let count = 0;`
          },
          {
            type: "paragraph",
            content: "Explain why React doesn't update the UI when this changes."
          },
          {
            type: "paragraph",
            content: "If you update a regular variable in React, the variable's value will change in the background, but React will not notice. React does not actively monitor regular JavaScript variables. Therefore, the UI will remain exactly the same, showing the old value."
          },
          {
            type: "paragraph",
            content: "Then introduce state."
          },
          {
            type: "paragraph",
            content: "This is where state comes in. State is a special React feature that tells React to actively monitor a value. When a state variable changes, it signals React to redraw the screen."
          },
          {
            type: "note",
            content: "This is a critical section many beginners struggle with. Understanding why standard variables fail to update the UI is the key to understanding React."
          }
        ]
      },

      {
        heading: "State as Component Memory",
        blocks: [
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State remembers values between renders.",
              "React stores state internally.",
              "State survives re-renders."
            ]
          },
          {
            type: "paragraph",
            content: "Every time a component updates, normal variables are recreated from scratch. State, however, is preserved safely inside React's internal engine, allowing the component to remember user inputs and interactions across multiple renders."
          }
        ]
      },

      {
        heading: "Introducing useState",
        blocks: [
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "Break down:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "count: The current state value.",
              "setCount: The function used to update the state.",
              "useState: The React Hook that creates the state.",
              "initial value: The 0 passed inside the parentheses, establishing the starting point."
            ]
          }
        ]
      },

      {
        heading: "Anatomy of useState",
        blocks: [
          {
            type: "paragraph",
            content: "Separate explanation:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [name, setName] = useState("John");`
          },
          {
            type: "table",
            headers: ["Part", "Meaning"],
            rows: [
              ["name", "Current state"],
              ["setName", "State updater function"],
              ["\"John\"", "Initial value"]
            ]
          }
        ]
      },

      {
        heading: "Updating State",
        blocks: [
          {
            type: "paragraph",
            content: "Show:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setCount(count + 1);`
          },
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State updates trigger re-renders.",
              "UI updates automatically."
            ]
          },
          {
            type: "paragraph",
            content: "When you call the updater function (like setCount), you are not just changing data. You are commanding React to process the component again with the new data, ensuring what the user sees matches the application's memory."
          }
        ]
      },

      {
        heading: "React Re-rendering and State",
        blocks: [
          {
            type: "note",
            content: "One of the most important sections."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "State Changes", "→",
              "React Re-renders Component", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Explain React's reactive nature:"
          },
          {
            type: "paragraph",
            content: "React is designed to react to changes. You rarely tell React exactly how to change the DOM (like 'update this paragraph text'). Instead, you update the state, and React automatically figures out how to re-render the component to reflect that new state on the screen."
          }
        ]
      },

      {
        heading: "Multiple State Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);
const [name, setName] = useState("");
const [darkMode, setDarkMode] = useState(false);`
          },
          {
            type: "paragraph",
            content: "Explain why this is normal:"
          },
          {
            type: "paragraph",
            content: "It is completely normal and encouraged to have multiple state variables inside a single component. Splitting related values into their own individual state variables makes your code easier to read, update, and maintain compared to stuffing everything into one massive object."
          }
        ]
      },

      {
        heading: "Different Types of State",
        blocks: [
          {
            type: "paragraph",
            content: "Number State"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "String State"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [name, setName] = useState("");`
          },
          {
            type: "paragraph",
            content: "Boolean State"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [isOpen, setIsOpen] = useState(false);`
          },
          {
            type: "paragraph",
            content: "Array State"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [tasks, setTasks] = useState([]);`
          },
          {
            type: "paragraph",
            content: "Object State"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, setUser] = useState({});`
          }
        ]
      },

      {
        heading: "State Is Local and Private",
        blocks: [
          {
            type: "tip",
            content: "Very important concept."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Counter />
<Counter />`
          },
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Each component gets its own state.",
              "State is isolated.",
              "One Counter does not affect another."
            ]
          },
          {
            type: "paragraph",
            content: "If you render the same component twice on the screen, React creates two completely separate memory banks for them. Clicking a button in the first Counter will only update the state for the first Counter. The second one remains unaffected. This is why state is considered local and private."
          }
        ]
      },

      {
        heading: "State vs Props",
        blocks: [
          {
            type: "paragraph",
            content: "This deserves its own section. Understanding the distinction is vital."
          },
          {
            type: "table",
            headers: ["Props", "State"],
            rows: [
              ["Passed from parent", "Managed inside component"],
              ["Read-only", "Can change"],
              ["External data", "Internal data"],
              ["Controlled by parent", "Controlled by component"]
            ]
          },
          {
            type: "paragraph",
            content: "Use a simple analogy:"
          },
          {
            type: "quote",
            content: "Props are information given to a component. State is information owned by a component."
          },
          {
            type: "note",
            content: "This explanation consistently resonates with developers."
          }
        ]
      },

      {
        heading: "When to Use State",
        blocks: [
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Use State For",
                description: "Form inputs, Theme switching, Modals, Counters, Notifications, Loading states."
              },
              {
                title: "Do Not Use State For",
                description: "Fixed values, Constants, Static content, Derived data that can be calculated on the fly."
              }
            ]
          }
        ]
      },

      {
        heading: "Sharing State Between Components",
        blocks: [
          {
            type: "paragraph",
            content: "Introduce:"
          },
          {
            type: "output",
            content: "Lifting State Up"
          },
          {
            type: "paragraph",
            content: "Explain:"
          },
          {
            type: "tree",
            content: `Parent Component (Holds State)
├── Child Component A (Receives state as props)
└── Child Component B (Receives state as props)`
          },
          {
            type: "paragraph",
            content: "When two sibling components need access to the exact same data, you cannot pass state sideways. Instead, you move the state to their closest common parent component. The parent then passes the state down to the children via props."
          },
          {
            type: "tip",
            content: "Very important React pattern."
          }
        ]
      },

      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Include FAQs:"
          },
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Using Regular Variables Instead of State",
                answer: "Regular variables do not trigger a UI update when they change. Always use useState for data that impacts the interface.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `let count = 0;`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `const [count, setCount] = useState(0);`
                  }
                ]
              },
              {
                question: "Mistake 2: Updating State Directly",
                answer: "You cannot change a state variable via direct assignment. You must always use the setter function provided by useState.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `count = count + 1;`
                  },
                  {
                    title: "Good",
                    language: "javascript",
                    content: `setCount(count + 1);`
                  }
                ]
              },
              {
                question: "Mistake 3: Putting Everything Into State",
                answer: "Not all data belongs in state. If a value never changes during the lifecycle of the component, it should be a regular constant outside or inside the component."
              },
              {
                question: "Mistake 4: Duplicating State",
                answer: "If component A and component B both hold identical state, it can lead to synchronization bugs. Lift the state up to a common parent instead."
              },
              {
                question: "Mistake 5: Storing Derived Data in State",
                answer: "If a value can be calculated from existing state or props, calculate it during the render rather than putting it in its own state. This is a modern React best-practice topic many tutorials skip.",
                examples: [
                  {
                    title: "Bad (Duplicated/Derived State)",
                    language: "javascript",
                    content: `const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Doe");
const [fullName, setFullName] = useState("John Doe");`
                  },
                  {
                    title: "Good (Calculated on the fly)",
                    language: "javascript",
                    content: `const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Doe");
const fullName = \`\${firstName} \${lastName}\`;`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "State Management Evolution",
        blocks: [
          {
            type: "paragraph",
            content: "This helps learners understand the bigger picture of how data flow has evolved in React applications:"
          },
          {
            type: "flow",
            steps: [
              "Local State", "→",
              "Lifting State Up", "→",
              "Context API", "→",
              "Redux / Zustand", "→",
              "Advanced State Management"
            ]
          }
        ]
      },

      {
        heading: "State Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Keep state minimal",
              "Avoid duplicate state",
              "Store only changing data",
              "Keep state close to where it's used",
              "Lift state only when needed"
            ]
          }
        ]
      },

      {
        heading: "State Checklist",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Component needs memory",
              "Value changes over time",
              "UI depends on value",
              "State updates trigger UI updates"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Cover:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State = component memory",
              "useState Hook",
              "State updates trigger re-renders",
              "State is local and private",
              "State vs Props",
              "Lifting State Up",
              "State best practices"
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think state is just a variable that can change. The real power of state is that React automatically re-renders the UI whenever state changes. State is not simply data storage—it is the mechanism that connects application data to what users see on the screen. Understanding this relationship is one of the most important milestones in becoming a React developer."
          },
          {
            type: "paragraph",
            content: "That structure would be strong enough for a global React course and aligns well with modern React documentation and industry practices."
          }
        ]
      }
  ]
},




/* ===============================
  Ninth Topic : Event Handling
================================ */
"event-handling": {
  title: "Event Handling",
  readingTime: "14 min",

  content: [
    {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are interactive."
          },
          {
            type: "paragraph",
            content: "Users click buttons, type into forms, submit data, hover over elements, press keyboard keys, scroll pages, and perform countless other actions."
          },
          {
            type: "paragraph",
            content: "These actions are called events."
          },
          {
            type: "paragraph",
            content: "React provides a powerful event handling system that allows components to respond to user interactions and update the user interface dynamically."
          },
          {
            type: "paragraph",
            content: "Without event handling, React applications would simply display static content with no way for users to interact with them."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What events are",
              "Why event handling is important",
              "How React handles events",
              "Event handlers and callback functions",
              "Common React events",
              "Passing arguments to event handlers",
              "The Synthetic Event system",
              "Event propagation",
              "Preventing default behavior",
              "Event handling best practices",
              "Common beginner mistakes",
              "Professional event handling patterns used in real applications"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how React applications respond to user actions and how event handling forms the foundation of interactive user interfaces."
          }
        ]
      },

      {
        heading: "What is an Event?",
        blocks: [
          {
            type: "paragraph",
            content: "An event is an action that occurs within a web page."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Clicking a button",
              "Typing in an input field",
              "Submitting a form",
              "Moving the mouse",
              "Pressing a keyboard key",
              "Scrolling a page",
              "Hovering over an element"
            ]
          },
          {
            type: "paragraph",
            content: "When an event occurs, React can execute a function in response."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A button click may increase a counter.",
              "A form submission may send data to a server.",
              "A search input may filter products.",
              "A dropdown selection may update displayed content."
            ]
          },
          {
            type: "paragraph",
            content: "Events make applications interactive."
          }
        ]
      },

      {
        heading: "Why Event Handling is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a React application with no event handling."
          },
          {
            type: "paragraph",
            content: "Users could:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View content",
              "Read text",
              "See buttons"
            ]
          },
          {
            type: "paragraph",
            content: "But they could not:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Click anything",
              "Submit forms",
              "Search data",
              "Navigate dynamically"
            ]
          },
          {
            type: "paragraph",
            content: "Without events, applications become static."
          },
          {
            type: "paragraph",
            content: "Event handling allows applications to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Respond to users",
              "Update state",
              "Trigger business logic",
              "Communicate with APIs",
              "Create dynamic experiences"
            ]
          },
          {
            type: "paragraph",
            content: "Almost every React application relies heavily on event handling."
          }
        ]
      },

      {
        heading: "How React Handles Events",
        blocks: [
          {
            type: "paragraph",
            content: "React uses event handlers."
          },
          {
            type: "paragraph",
            content: "An event handler is a function that executes when an event occurs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "When the button is clicked:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The click event occurs.",
              "React detects it.",
              "handleClick() executes.",
              "The alert appears."
            ]
          }
        ]
      },

      {
        heading: "React Events vs HTML Events",
        blocks: [
          {
            type: "paragraph",
            content: "React events look similar to HTML events but have important differences."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<button onclick="handleClick()">
  Click Me
</button>`
          },
          {
            type: "paragraph",
            content: "React"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={handleClick}>
  Click Me
</button>`
          },
          {
            type: "paragraph",
            content: "Key differences:"
          },
          {
            type: "table",
            headers: ["HTML", "React"],
            rows: [
              ["onclick", "onClick"],
              ["onchange", "onChange"],
              ["Uses strings", "Uses functions"],
              ["Lowercase", "CamelCase"]
            ]
          },
          {
            type: "paragraph",
            content: "React event names always use CamelCase."
          },
          {
            type: "example",
            style: "unordered",
            items: [
              "onClick",
              "onChange",
              "onSubmit",
              "onMouseEnter",
              "onKeyDown"
            ]
          }
        ]
      },

      {
        heading: "Understanding Event Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "An event handler is simply a function."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleClick() {
  console.log("Clicked");
}`
          },
          {
            type: "paragraph",
            content: "Attach it to an event:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={handleClick}>
  Click
</button>`
          },
          {
            type: "paragraph",
            content: "Whenever the event occurs, the function executes."
          }
        ]
      },

      {
        heading: "Common React Events",
        blocks: [
          {
            type: "paragraph",
            content: "React supports many events."
          },
          {
            type: "paragraph",
            content: "Some of the most commonly used include:"
          },
          {
            type: "table",
            headers: ["Event", "Purpose"],
            rows: [
              ["onClick", "Button clicks"],
              ["onChange", "Input changes"],
              ["onSubmit", "Form submissions"],
              ["onKeyDown", "Key presses"],
              ["onKeyUp", "Key releases"],
              ["onMouseEnter", "Mouse enters element"],
              ["onMouseLeave", "Mouse leaves element"],
              ["onFocus", "Element gains focus"],
              ["onBlur", "Element loses focus"],
              ["onScroll", "Page or container scrolls"]
            ]
          },
          {
            type: "paragraph",
            content: "These events cover most user interactions."
          }
        ]
      },

      {
        heading: "Handling Button Clicks",
        blocks: [
          {
            type: "paragraph",
            content: "The most common event is onClick."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  function greet() {
    alert("Hello!");
  }

  return (
    <button onClick={greet}>
      Say Hello
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "When the button is clicked:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks", "→",
              "onClick Fires", "→",
              "greet() Executes", "→",
              "Alert Appears"
            ]
          }
        ]
      },

      {
        heading: "Handling Input Changes",
        blocks: [
          {
            type: "paragraph",
            content: "Input fields commonly use onChange."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}`
          },
          {
            type: "paragraph",
            content: "Every time the user types:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "onChange fires",
              "The input value is captured",
              "React can update state"
            ]
          },
          {
            type: "paragraph",
            content: "This is the foundation of controlled forms."
          }
        ]
      },

      {
        heading: "Handling Form Submission",
        blocks: [
          {
            type: "paragraph",
            content: "Forms commonly use onSubmit."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}`
          },
          {
            type: "paragraph",
            content: "This allows React to process form data before sending it anywhere."
          }
        ]
      },

      {
        heading: "The Event Object",
        blocks: [
          {
            type: "paragraph",
            content: "React automatically passes an event object to event handlers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleClick(event) {
  console.log(event);
}`
          },
          {
            type: "paragraph",
            content: "The event object contains information such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Event type",
              "Target element",
              "Mouse position",
              "Keyboard key pressed",
              "Current value"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleChange(event) {
  console.log(event.target.value);
}`
          },
          {
            type: "paragraph",
            content: "event.target.value gives the current input value."
          }
        ]
      },

      {
        heading: "Synthetic Events",
        blocks: [
          {
            type: "paragraph",
            content: "React does not use browser events directly."
          },
          {
            type: "paragraph",
            content: "Instead, React uses a wrapper called a Synthetic Event."
          },
          {
            type: "paragraph",
            content: "A Synthetic Event:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Behaves like a normal browser event",
              "Works consistently across browsers",
              "Provides a unified API"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleClick(event) {
  console.log(event.type);
}`
          },
          {
            type: "paragraph",
            content: "Even though React uses Synthetic Events internally, developers interact with them almost exactly like normal events."
          },
          {
            type: "paragraph",
            content: "This browser consistency is one reason React event handling is reliable."
          }
        ]
      },

      {
        heading: "Passing Arguments to Event Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes event handlers need additional data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function greet(name) {
  alert(\`Hello \${name}\`);
}`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={greet("John")}>
  Click
</button>`
          },
          {
            type: "paragraph",
            content: "This executes immediately during rendering."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={() => greet("John")}>
  Click
</button>`
          },
          {
            type: "paragraph",
            content: "Now the function executes only when clicked."
          }
        ]
      },

      {
        heading: "Arrow Functions in Event Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "Arrow functions are commonly used when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Passing arguments",
              "Executing multiple actions"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button
  onClick={() => {
    console.log("Clicked");
    alert("Hello");
  }}
>
  Click
</button>`
          },
          {
            type: "paragraph",
            content: "This pattern is very common in React applications."
          }
        ]
      },

      {
        heading: "Preventing Default Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "Some HTML elements have default behavior."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Forms refresh the page.",
              "Links navigate automatically."
            ]
          },
          {
            type: "paragraph",
            content: "React allows preventing these actions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleSubmit(event) {
  event.preventDefault();
}`
          },
          {
            type: "paragraph",
            content: "preventDefault() stops the browser's default behavior."
          },
          {
            type: "paragraph",
            content: "This is extremely common in forms."
          }
        ]
      },

      {
        heading: "Event Propagation",
        blocks: [
          {
            type: "paragraph",
            content: "Events can travel through multiple elements."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div onClick={() => console.log("Parent")}>
  <button onClick={() => console.log("Button")}>
    Click
  </button>
</div>`
          },
          {
            type: "paragraph",
            content: "Clicking the button logs:"
          },
          {
            type: "output",
            content: ["Button", "Parent"]
          },
          {
            type: "paragraph",
            content: "The event bubbles upward."
          },
          {
            type: "paragraph",
            content: "This behavior is called:"
          },
          {
            type: "output",
            content: "Event Bubbling"
          }
        ]
      },

      {
        heading: "Stopping Event Propagation",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes bubbling is undesirable."
          },
          {
            type: "paragraph",
            content: "React provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "event.stopPropagation();"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleClick(event) {
  event.stopPropagation();
}`
          },
          {
            type: "paragraph",
            content: "Now the event stops at the current element."
          },
          {
            type: "paragraph",
            content: "Parent handlers will not execute."
          }
        ]
      },

      {
        heading: "Event Handling and State",
        blocks: [
          {
            type: "paragraph",
            content: "Events are often used together with state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Click Button", "→",
              "onClick Fires", "→",
              "State Updates", "→",
              "Component Re-renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern powers most React applications."
          }
        ]
      },

      {
        heading: "Event Handling Workflow in React",
        blocks: [
          {
            type: "paragraph",
            content: "A typical event workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Event Occurs", "→",
              "Event Handler Executes", "→",
              "State Updates", "→",
              "React Re-renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this flow is essential for debugging React applications."
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
                question: "Mistake 1: Calling Functions Instead of Passing Them",
                answer: "Adding parentheses to the function name executes it immediately during rendering, rather than waiting for the event.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<button onClick={handleClick()}>
  Click
</button>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<button onClick={handleClick}>
  Click
</button>`
                  }
                ]
              },
              {
                question: "Mistake 2: Forgetting preventDefault()",
                answer: "If you don't call preventDefault() on form submissions, the browser may refresh the page unexpectedly.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<form onSubmit={handleSubmit}>`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `function handleSubmit(event) {
  event.preventDefault();
}`
                  }
                ]
              },
              {
                question: "Mistake 3: Using HTML Event Names",
                answer: "React requires camelCase for event listeners. Lowercase event names will not work.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<button onclick={handleClick}>`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<button onClick={handleClick}>`
                  }
                ]
              },
              {
                question: "Mistake 4: Writing Large Event Handlers",
                answer: "Keep event handlers focused and readable. Move complex business logic to separate helper functions.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `function handleClick() {
  // 100 lines of logic
}`
                  },
                  {
                    title: "Better",
                    language: "javascript",
                    content: `function handleClick() {
  updateCart();
  showNotification();
}`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Event Handling Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers generally follow these rules:"
          },
          {
            type: "cards",
            items: [
              {
                title: "1. Keep Event Handlers Small",
                description: "Event handlers should focus on triggering actions, not containing large amounts of business logic."
              },
              {
                title: "2. Use Meaningful Names",
                description: "Good: handleSubmit, handleLogin, handleSearch. Avoid: click1, testFunction."
              },
              {
                title: "3. Separate Logic From UI",
                description: "Move complex logic into helper functions or services."
              },
              {
                title: "4. Use State for UI Updates",
                description: "Events should often trigger state updates rather than directly manipulating the DOM."
              },
              {
                title: "5. Prevent Unnecessary Re-renders",
                description: "Avoid creating overly complex inline event logic."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples of Event Handling",
        blocks: [
          {
            type: "paragraph",
            content: "React applications use events everywhere:"
          },
          {
            type: "cards",
            items: [
              {
                title: "E-commerce",
                description: "Add to Cart, Remove Item, Checkout"
              },
              {
                title: "Social Media",
                description: "Like Post, Comment, Follow User"
              },
              {
                title: "Dashboards",
                description: "Filter Data, Refresh Reports, Export Files"
              },
              {
                title: "Forms",
                description: "Login, Registration, Contact Forms"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Nearly every interactive feature begins with an event."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Event handling allows React applications to respond to user interactions."
          },
          {
            type: "paragraph",
            content: "React provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "onClick",
              "onChange",
              "onSubmit",
              "Keyboard events",
              "Mouse events",
              "Focus events"
            ]
          },
          {
            type: "paragraph",
            content: "Key concepts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Event handlers",
              "Synthetic Events",
              "Event objects",
              "Passing arguments",
              "Event propagation",
              "Preventing default behavior"
            ]
          },
          {
            type: "paragraph",
            content: "The typical workflow is:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Event Fires", "→",
              "Handler Executes", "→",
              "State Updates", "→",
              "UI Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering event handling is one of the most important steps toward building interactive React applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think event handling is only about button clicks. In professional React applications, events drive nearly everything—from updating state and fetching data to controlling navigation, animations, notifications, and entire user workflows. Understanding events deeply is one of the fastest ways to become comfortable building real-world React applications."
          }
        ]
      }
  ]
},




/* ===============================
  Tenth Topic : Conditional Rendering
================================ */
"conditional-rendering": {
  title: "Conditional Rendering",
  readingTime: "12 min",

  content: [
    {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In real-world applications, the user interface does not always display the same content."
          },
          {
            type: "paragraph",
            content: "A website may show different content depending on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Whether a user is logged in",
              "Whether data is loading",
              "Whether an API request succeeds",
              "Whether a shopping cart contains items",
              "Whether a user has permission to access a feature"
            ]
          },
          {
            type: "paragraph",
            content: "React provides a powerful feature called Conditional Rendering that allows developers to display different UI elements based on specific conditions."
          },
          {
            type: "paragraph",
            content: "Instead of manually hiding or showing elements using traditional DOM manipulation, React lets developers describe what should appear based on the application's current state."
          },
          {
            type: "paragraph",
            content: "Conditional rendering is one of the most frequently used techniques in React development because modern applications constantly respond to changing data and user actions."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What conditional rendering is",
              "Why conditional rendering is important",
              "How React handles conditional UI",
              "Using if statements",
              "Using ternary operators",
              "Using logical AND (&&)",
              "Returning null",
              "Conditional rendering with components",
              "Conditional rendering with lists",
              "Loading and error states",
              "Common beginner mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will be able to dynamically control what appears on the screen based on any condition."
          }
        ]
      },

      {
        heading: "What is Conditional Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Conditional Rendering means displaying different UI elements depending on whether a condition is true or false."
          },
          {
            type: "paragraph",
            content: "Think about a login system."
          },
          {
            type: "paragraph",
            content: "When a user is not logged in:"
          },
          {
            type: "output",
            content: "Login Button"
          },
          {
            type: "paragraph",
            content: "When a user is logged in:"
          },
          {
            type: "output",
            content: ["Welcome User", "Logout Button"]
          },
          {
            type: "paragraph",
            content: "The displayed UI changes depending on the application's state."
          },
          {
            type: "paragraph",
            content: "This dynamic UI behavior is called Conditional Rendering."
          }
        ]
      },

      {
        heading: "Why Conditional Rendering Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications constantly change their interface."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Social Media",
                description: "Show 'Like' if a post is not liked. Show 'Liked' if a post is already liked."
              },
              {
                title: "E-Commerce",
                description: "Show 'Add to Cart' when product is available. Show 'Out of Stock' when unavailable."
              },
              {
                title: "Authentication",
                description: "Show Login page for guests. Show Dashboard for authenticated users."
              },
              {
                title: "API Requests",
                description: "Show loading spinner while fetching data. Show data after loading completes."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Without conditional rendering, creating interactive applications would be extremely difficult."
          }
        ]
      },

      {
        heading: "How React Handles Conditional Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "React does not provide a special syntax called:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<If />`
          },
          {
            type: "paragraph",
            content: "Instead, React uses normal JavaScript logic."
          },
          {
            type: "paragraph",
            content: "This includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "if statements",
              "ternary operators",
              "logical AND (&&)",
              "variables",
              "functions"
            ]
          },
          {
            type: "paragraph",
            content: "Because JSX is JavaScript, all standard JavaScript decision-making techniques can be used."
          }
        ]
      },

      {
        heading: "Understanding the Basic Idea",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a variable:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const isLoggedIn = true;`
          },
          {
            type: "paragraph",
            content: "If the value is true:"
          },
          {
            type: "output",
            content: "Show Dashboard"
          },
          {
            type: "paragraph",
            content: "If the value is false:"
          },
          {
            type: "output",
            content: "Show Login Page"
          },
          {
            type: "paragraph",
            content: "React simply evaluates the condition and renders the appropriate UI."
          }
        ]
      },

      {
        heading: "Method 1: Conditional Rendering Using if Statements",
        blocks: [
          {
            type: "paragraph",
            content: "One of the simplest approaches is using an if statement before returning JSX."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }

  return <h1>Please Log In</h1>;
}`
          },
          {
            type: "paragraph",
            content: "How it works:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React evaluates the condition.",
              "If true, the first return executes.",
              "Otherwise, the second return executes."
            ]
          },
          {
            type: "paragraph",
            content: "This approach is easy to understand and works well for larger conditions."
          }
        ]
      },

      {
        heading: "When to Use if Statements",
        blocks: [
          {
            type: "paragraph",
            content: "Good for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple conditions",
              "Complex logic",
              "Readable code"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (isLoading) {
  return <Loading />;
}

if (error) {
  return <Error />;
}

return <Dashboard />;`
          },
          {
            type: "paragraph",
            content: "This style is commonly used in professional applications."
          }
        ]
      },

      {
        heading: "Method 2: Conditional Rendering Using the Ternary Operator",
        blocks: [
          {
            type: "paragraph",
            content: "The ternary operator is the most commonly used conditional rendering technique."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `condition ? trueValue : falseValue`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome Back!" : "Please Log In"}
    </h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Welcome Back!"
          },
          {
            type: "paragraph",
            content: "if true"
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: "Please Log In"
          },
          {
            type: "paragraph",
            content: "if false."
          }
        ]
      },

      {
        heading: "Why Developers Love Ternary Operators",
        blocks: [
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Short",
              "Clean",
              "Easy to read",
              "Perfect for simple UI decisions",
              "Very common in React projects."
            ]
          }
        ]
      },

      {
        heading: "Method 3: Conditional Rendering Using Logical AND (&&)",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you only want to display something when a condition is true."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Notification() {
  const hasMessages = true;

  return (
    <div>
      {hasMessages && <p>New Messages Available</p>}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "If true:"
          },
          {
            type: "output",
            content: "New Messages Available"
          },
          {
            type: "paragraph",
            content: "If false:"
          },
          {
            type: "output",
            content: "Nothing appears."
          }
        ]
      },

      {
        heading: "How Logical AND Works",
        blocks: [
          {
            type: "paragraph",
            content: "JavaScript evaluates:"
          },
          {
            type: "code",
            language: "javascript",
            content: `condition && expression`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "If condition is true: Render expression",
              "If condition is false: Ignore expression"
            ]
          },
          {
            type: "paragraph",
            content: "This is extremely common for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Notifications",
              "Badges",
              "Alerts",
              "Warnings",
              "Optional content"
            ]
          }
        ]
      },

      {
        heading: "Method 4: Returning null",
        blocks: [
          {
            type: "paragraph",
            content: "React allows components to render nothing."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Warning({ show }) {
  if (!show) {
    return null;
  }

  return <h1>Warning!</h1>;
}`
          },
          {
            type: "paragraph",
            content: "If show is false:"
          },
          {
            type: "output",
            content: "Nothing is rendered"
          },
          {
            type: "paragraph",
            content: "This technique is useful when components should completely disappear."
          }
        ]
      },

      {
        heading: "Conditional Rendering with Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes conditions become easier to manage using variables."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  const isLoggedIn = true;

  let message;

  if (isLoggedIn) {
    message = <h1>Welcome Back!</h1>;
  } else {
    message = <h1>Please Log In</h1>;
  }

  return message;
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
              "Easier debugging",
              "Better readability"
            ]
          }
        ]
      },

      {
        heading: "Conditional Rendering with Components",
        blocks: [
          {
            type: "paragraph",
            content: "Entire components can be rendered conditionally."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "If logged in:"
          },
          {
            type: "output",
            content: "Dashboard Component"
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: "Login Component"
          },
          {
            type: "paragraph",
            content: "This pattern appears frequently in authentication systems."
          }
        ]
      },

      {
        heading: "Real-World Example: Loading State",
        blocks: [
          {
            type: "paragraph",
            content: "Loading states are one of the most common uses of conditional rendering."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Users() {
  const isLoading = true;

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Users Loaded</p>
      )}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Loading..."
          },
          {
            type: "paragraph",
            content: "until data arrives."
          }
        ]
      },

      {
        heading: "Real-World Example: Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often display errors conditionally."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Data() {
  const error = true;

  if (error) {
    return <h1>Something Went Wrong</h1>;
  }

  return <h1>Data Loaded Successfully</h1>;
}`
          },
          {
            type: "paragraph",
            content: "This improves user experience by providing feedback."
          }
        ]
      },

      {
        heading: "Conditional Rendering with Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a list may be empty."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Cart() {
  const items = [];

  return (
    <>
      {items.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <p>Items Found</p>
      )}
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Common in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Shopping carts",
              "Search results",
              "Notifications",
              "User lists"
            ]
          }
        ]
      },

      {
        heading: "Multiple Conditions",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often require multiple conditions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (isLoading) {
  return <Loading />;
}

if (error) {
  return <Error />;
}

return <Dashboard />;`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Loading?", "→",
              "Error?", "→",
              "Success"
            ]
          },
          {
            type: "paragraph",
            content: "This approach keeps logic simple and readable."
          }
        ]
      },

      {
        heading: "Conditional Rendering vs CSS Hiding",
        blocks: [
          {
            type: "paragraph",
            content: "Some beginners attempt:"
          },
          {
            type: "code",
            language: "css",
            content: `display: none;`
          },
          {
            type: "paragraph",
            content: "instead of conditional rendering."
          },
          {
            type: "paragraph",
            content: "Difference:"
          },
          {
            type: "comparison",
            leftTitle: "CSS Hiding",
            leftItems: [
              "Element still exists in the DOM."
            ],
            rightTitle: "Conditional Rendering",
            rightItems: [
              "Element is not rendered at all."
            ]
          },
          {
            type: "paragraph",
            content: "Conditional rendering is generally more efficient when content is unnecessary."
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
                question: "Mistake 1: Using if Directly Inside JSX",
                answer: "JSX does not allow statements like `if` directly inside markup. You must use `if` statements before the `return`, or use ternary operators / `&&` operators inside JSX.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `return (
  <div>
    if(isLoggedIn) {
      <h1>Welcome</h1>
    }
  </div>
);`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `return (
  <div>
    {isLoggedIn && <h1>Welcome</h1>}
  </div>
);`
                  }
                ]
              },
              {
                question: "Mistake 2: Overusing Nested Ternaries",
                answer: "Nesting ternaries makes your code extremely hard to read. Use variables or separate `if` conditions before the return statement instead.",
                examples: [
                  {
                    title: "Incorrect (Hard to read)",
                    language: "javascript",
                    content: `condition1
  ? condition2
    ? value1
    : value2
  : value3`
                  }
                ]
              },
              {
                question: "Mistake 3: Forgetting the False Case",
                answer: "The ternary operator requires both outcomes (true and false). If you only need a true outcome, use the logical AND (&&) operator instead.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `{isLoggedIn ? <Dashboard />}`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `{isLoggedIn ? <Dashboard /> : <Login />}`
                  }
                ]
              },
              {
                question: "Mistake 4: Rendering Large Logic Blocks Inside JSX",
                answer: "Embedding complex condition logic directly inside your JSX makes the UI hard to manage. It's better to move complex logic outside JSX or into separate components.",
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `return (
  <div>
    {/* complex condition logic */}
  </div>
);`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Professional Best Practices",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Keep Conditions Simple",
                description: "Avoid complicated expressions directly in JSX."
              },
              {
                title: "Use Ternary for Small Decisions",
                description: "Good for text changes, button labels, and small UI variations."
              },
              {
                title: "Use if Statements for Complex Logic",
                description: "If statements offer much better readability when handling multiple checks before returning."
              },
              {
                title: "Create Dedicated Components",
                description: "Instead of {isAdmin && <HugeAdminPanel />}, consider just using <AdminPanel /> to encapsulate the logic. This improves maintainability."
              },
              {
                title: "Handle Loading, Error, and Success States",
                description: "Professional applications almost always account for Loading, Error, and Success states separately."
              }
            ]
          }
        ]
      },

      {
        heading: "Conditional Rendering Decision Guide",
        blocks: [
          {
            type: "table",
            headers: ["Use", "When"],
            rows: [
              ["if Statement", "Logic is complex or multiple conditions exist"],
              ["Ternary Operator", "Two possible outcomes exist (true/false)"],
              ["Logical AND (&&)", "Content appears only if true, nothing otherwise"],
              ["null", "Component should render absolutely nothing"]
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Conditional Rendering allows React applications to display different UI based on changing conditions."
          },
          {
            type: "paragraph",
            content: "React supports conditional rendering using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "if statements",
              "ternary operators",
              "logical AND (&&)",
              "variables",
              "components",
              "null rendering"
            ]
          },
          {
            type: "paragraph",
            content: "Common use cases include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication",
              "Loading screens",
              "Error messages",
              "Shopping carts",
              "Notifications",
              "API responses"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering conditional rendering is essential because nearly every real-world React application relies on it to create dynamic user experiences."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think conditional rendering is only about showing or hiding elements. In reality, it is the foundation of dynamic UI development. Login systems, dashboards, API-driven applications, e-commerce platforms, and social media feeds all rely heavily on conditional rendering. Once you master this concept, your React applications begin to feel truly interactive and intelligent."
          }
        ]
      }
  ]
},




/* ===============================
  Eleventh Topic : List and Keys
================================ */
"list-and-keys": {
  title: "List and Keys",
  readingTime: "14 min",

  content: [
    {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications rarely display a single piece of data."
          },
          {
            type: "paragraph",
            content: "Instead, they often display collections of information such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Product lists",
              "User profiles",
              "Notifications",
              "Comments",
              "Messages",
              "Tasks",
              "Orders",
              "Search results"
            ]
          },
          {
            type: "paragraph",
            content: "React provides a simple and efficient way to render collections of data using Lists."
          },
          {
            type: "paragraph",
            content: "Whenever React renders multiple items dynamically, it also requires something called Keys."
          },
          {
            type: "paragraph",
            content: "Keys help React identify which items have changed, been added, removed, or reordered."
          },
          {
            type: "paragraph",
            content: "Understanding Lists and Keys is essential because almost every real-world React application relies on them."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What lists are in React",
              "Why lists are important",
              "Rendering lists with JavaScript",
              "The map() method",
              "What keys are",
              "Why React requires keys",
              "Choosing good keys",
              "Common mistakes with keys",
              "Rendering components inside lists",
              "List performance optimization",
              "Real-world examples",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will be able to efficiently render dynamic collections of data while understanding how React tracks and updates them behind the scenes."
          }
        ]
      },

      {
        heading: "What Are Lists in React?",
        blocks: [
          {
            type: "paragraph",
            content: "A list is simply a collection of items displayed on the screen."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Apple",
              "Banana",
              "Orange",
              "Mango"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of manually writing every item:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<li>Apple</li>
<li>Banana</li>
<li>Orange</li>
<li>Mango</li>`
          },
          {
            type: "paragraph",
            content: "React allows developers to generate them dynamically from data."
          },
          {
            type: "paragraph",
            content: "This makes applications:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "More flexible",
              "Easier to maintain",
              "Easier to scale"
            ]
          }
        ]
      },

      {
        heading: "Why Lists Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website."
          },
          {
            type: "paragraph",
            content: "Products may change every day."
          },
          {
            type: "paragraph",
            content: "Writing:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Product />
<Product />
<Product />
<Product />`
          },
          {
            type: "paragraph",
            content: "manually is impractical."
          },
          {
            type: "paragraph",
            content: "Instead, data arrives from:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "APIs",
              "Databases",
              "User input"
            ]
          },
          {
            type: "paragraph",
            content: "React can automatically generate UI elements from that data."
          },
          {
            type: "paragraph",
            content: "This is where lists become powerful."
          }
        ]
      },

      {
        heading: "Understanding Arrays",
        blocks: [
          {
            type: "paragraph",
            content: "Lists in React usually begin with JavaScript arrays."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango"
];`
          },
          {
            type: "paragraph",
            content: "This array contains multiple values."
          },
          {
            type: "paragraph",
            content: "The goal is to display each item on the screen."
          }
        ]
      },

      {
        heading: "Rendering Lists with map()",
        blocks: [
          {
            type: "paragraph",
            content: "The most common way to render lists in React is using:"
          },
          {
            type: "output",
            content: "map()"
          },
          {
            type: "paragraph",
            content: "The map() method transforms every item into JSX."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const fruits = [
  "Apple",
  "Banana",
  "Orange"
];

function App() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["• Apple", "• Banana", "• Orange"]
          },
          {
            type: "paragraph",
            content: "React creates one list item for each array element."
          }
        ]
      },

      {
        heading: "How map() Works",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const numbers = [1, 2, 3];`
          },
          {
            type: "paragraph",
            content: "When React executes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `numbers.map((number) => (
  <li>{number}</li>
))`
          },
          {
            type: "paragraph",
            content: "It produces:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<li>1</li>
<li>2</li>
<li>3</li>`
          },
          {
            type: "paragraph",
            content: "React then renders them to the screen."
          }
        ]
      },

      {
        heading: "Why map() Is Preferred",
        blocks: [
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner code",
              "Dynamic rendering",
              "Easier maintenance",
              "Works with API data",
              "Scales easily"
            ]
          },
          {
            type: "paragraph",
            content: "Nearly every React application uses map()."
          }
        ]
      },

      {
        heading: "Rendering Objects in Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Real-world data is often stored as objects."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Sarah"
  },
  {
    id: 3,
    name: "Alex"
  }
];`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ul>
  {users.map((user) => (
    <li>{user.name}</li>
  ))}
</ul>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["John", "Sarah", "Alex"]
          },
          {
            type: "paragraph",
            content: "This is extremely common when displaying API data."
          }
        ]
      },

      {
        heading: "What Are Keys?",
        blocks: [
          {
            type: "paragraph",
            content: "When rendering multiple elements, React requires a special property called:"
          },
          {
            type: "output",
            content: "key"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ul>
  {users.map((user) => (
    <li key={user.id}>
      {user.name}
    </li>
  ))}
</ul>`
          },
          {
            type: "paragraph",
            content: "The key uniquely identifies each list item."
          }
        ]
      },

      {
        heading: "Why React Needs Keys",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a list:"
          },
          {
            type: "output",
            content: ["1. Apple", "2. Banana", "3. Orange"]
          },
          {
            type: "paragraph",
            content: "Now suppose Banana is removed."
          },
          {
            type: "paragraph",
            content: "New list:"
          },
          {
            type: "output",
            content: ["1. Apple", "2. Orange"]
          },
          {
            type: "paragraph",
            content: "React must determine:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which item disappeared?",
              "Which items stayed?",
              "Which items changed?"
            ]
          },
          {
            type: "paragraph",
            content: "Without keys, React must guess."
          },
          {
            type: "paragraph",
            content: "With keys, React knows exactly what happened."
          },
          {
            type: "paragraph",
            content: "This improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Performance",
              "Accuracy",
              "UI updates"
            ]
          }
        ]
      },

      {
        heading: "How React Uses Keys Internally",
        blocks: [
          {
            type: "paragraph",
            content: "React maintains a Virtual DOM."
          },
          {
            type: "paragraph",
            content: "When data changes:"
          },
          {
            type: "flow",
            steps: [
              "Old List", "→",
              "New List", "→",
              "Compare Differences", "→",
              "Update Real DOM"
            ]
          },
          {
            type: "paragraph",
            content: "Keys help React match old elements with new elements."
          },
          {
            type: "paragraph",
            content: "This process is called:"
          },
          {
            type: "output",
            content: "Reconciliation"
          },
          {
            type: "paragraph",
            content: "Good keys make reconciliation much faster."
          }
        ]
      },

      {
        heading: "Key Rules",
        blocks: [
          {
            type: "paragraph",
            content: "A key must be:"
          },
          {
            type: "paragraph",
            content: "Unique Among Siblings"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "jsx",
            content: `key={user.id}`
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "jsx",
            content: `key="user"`
          },
          {
            type: "paragraph",
            content: "for every item."
          },
          {
            type: "paragraph",
            content: "Stable"
          },
          {
            type: "paragraph",
            content: "A key should not change between renders."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "jsx",
            content: `key={product.id}`
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "jsx",
            content: `key={Math.random()}`
          },
          {
            type: "paragraph",
            content: "because it changes every render."
          },
          {
            type: "paragraph",
            content: "Predictable"
          },
          {
            type: "paragraph",
            content: "React should always receive the same key for the same item."
          }
        ]
      },

      {
        heading: "Best Key Choice",
        blocks: [
          {
            type: "paragraph",
            content: "The best key is usually:"
          },
          {
            type: "output",
            content: "id"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  id: 101,
  name: "Laptop"
}`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "jsx",
            content: `key={product.id}`
          },
          {
            type: "paragraph",
            content: "This is the professional standard."
          }
        ]
      },

      {
        heading: "Example: Product List",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Phone"
  }
];`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ul>
  {products.map((product) => (
    <li key={product.id}>
      {product.name}
    </li>
  ))}
</ul>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Laptop", "Phone"]
          }
        ]
      },

      {
        heading: "Rendering Components Inside Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Lists often render components rather than simple HTML."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard({ name }) {
  return <h2>{name}</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Using:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  users.map((user) => (
    <UserCard
      key={user.id}
      name={user.name}
    />
  ))
}`
          },
          {
            type: "paragraph",
            content: "This pattern appears in nearly every React application."
          }
        ]
      },

      {
        heading: "Key Placement",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserCard
  user={user}
>`
          },
          {
            type: "paragraph",
            content: "inside UserCard:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div key={user.id}>`
          },
          {
            type: "paragraph",
            content: "Wrong place."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  users.map((user) => (
    <UserCard
      key={user.id}
      user={user}
    />
  ))
}`
          },
          {
            type: "paragraph",
            content: "The key belongs where the list is created."
          }
        ]
      },

      {
        heading: "Using Index as a Key",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes developers write:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  users.map((user, index) => (
    <li key={index}>
      {user.name}
    </li>
  ))
}`
          },
          {
            type: "paragraph",
            content: "This works."
          },
          {
            type: "paragraph",
            content: "However, it is often discouraged."
          }
        ]
      },

      {
        heading: "Why Index Keys Can Cause Problems",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "output",
            content: ["Apple", "Banana", "Orange"]
          },
          {
            type: "paragraph",
            content: "Indexes:"
          },
          {
            type: "output",
            content: ["0", "1", "2"]
          },
          {
            type: "paragraph",
            content: "Remove Apple:"
          },
          {
            type: "output",
            content: ["Banana", "Orange"]
          },
          {
            type: "paragraph",
            content: "New indexes:"
          },
          {
            type: "output",
            content: ["0", "1"]
          },
          {
            type: "paragraph",
            content: "React may think items changed rather than moved."
          },
          {
            type: "paragraph",
            content: "This can lead to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Incorrect UI updates",
              "State bugs",
              "Performance issues"
            ]
          }
        ]
      },

      {
        heading: "When Index Keys Are Acceptable",
        blocks: [
          {
            type: "paragraph",
            content: "Index keys are generally acceptable when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "List never changes",
              "Items never reorder",
              "Items never get removed",
              "Items never get inserted"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Static list of weekdays"
          },
          {
            type: "paragraph",
            content: "Otherwise, use unique IDs."
          }
        ]
      },

      {
        heading: "Rendering Nested Lists",
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
            language: "javascript",
            content: `const categories = [
  {
    id: 1,
    name: "Fruits",
    items: ["Apple", "Banana"]
  }
];`
          },
          {
            type: "paragraph",
            content: "Rendering nested structures is common in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Menus",
              "Categories",
              "File systems",
              "Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Each level requires its own keys."
          }
        ]
      },

      {
        heading: "Conditional Rendering with Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes lists are empty."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  users.length === 0
    ? <p>No Users Found</p>
    : users.map(...)
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "No Users Found"
          },
          {
            type: "paragraph",
            content: "when the list has no data."
          },
          {
            type: "paragraph",
            content: "This improves user experience."
          }
        ]
      },

      {
        heading: "Real-World Example: Task Manager",
        blocks: [
          {
            type: "paragraph",
            content: "Tasks:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const tasks = [
  {
    id: 1,
    text: "Learn React"
  },
  {
    id: 2,
    text: "Build Project"
  }
];`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ul>
  {tasks.map((task) => (
    <li key={task.id}>
      {task.text}
    </li>
  ))}
</ul>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Learn React", "Build Project"]
          },
          {
            type: "paragraph",
            content: "This pattern powers many productivity applications."
          }
        ]
      },

      {
        heading: "Lists and API Data",
        blocks: [
          {
            type: "paragraph",
            content: "Most applications receive arrays from APIs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `[
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Sarah"
  }
]`
          },
          {
            type: "paragraph",
            content: "React commonly renders this using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `data.map(...)`
          },
          {
            type: "paragraph",
            content: "This is one of the most frequent use cases for lists."
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
                question: "Mistake 1: Forgetting Keys",
                answer: "React will warn you that 'Each child in a list should have a unique \"key\" prop.' This is crucial for tracking elements.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `{
  users.map((user) => (
    <li>{user.name}</li>
  ))
}`
                  },
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `{
  users.map((user) => (
    <li key={user.id}>
      {user.name}
    </li>
  ))
}`
                  }
                ]
              },
              {
                question: "Mistake 2: Using Random Keys",
                answer: "Random keys change on every single render. React cannot track elements properly, forcing it to recreate everything and lose state.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `key={Math.random()}`
                  }
                ]
              },
              {
                question: "Mistake 3: Using Non-Unique Keys",
                answer: "Keys must be unique among siblings. Using a generic string for every item will cause rendering bugs.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `key="user"`
                  }
                ]
              },
              {
                question: "Mistake 4: Putting Keys Inside Components",
                answer: "Keys belong where the list is generated (on the mapped element), not inside the component's internal HTML.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `<UserCard user={user} />
// inside UserCard:
<div key={user.id}>`
                  }
                ]
              },
              {
                question: "Mistake 5: Using Index for Dynamic Lists",
                answer: "This may cause incorrect re-renders, UI inconsistencies, and state issues. Use IDs whenever possible."
              }
            ]
          }
        ]
      },

      {
        heading: "Performance Benefits of Keys",
        blocks: [
          {
            type: "paragraph",
            content: "Good keys help React:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reuse DOM elements",
              "Avoid unnecessary updates",
              "Improve rendering speed",
              "Reduce memory usage"
            ]
          },
          {
            type: "paragraph",
            content: "This becomes especially important in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboards",
              "Social feeds",
              "Large product catalogs",
              "Chat applications"
            ]
          }
        ]
      },

      {
        heading: "Professional Best Practices",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Always Use Stable IDs",
                description: "Preferred: key={item.id}"
              },
              {
                title: "Avoid Random Keys",
                description: "Never: key={Math.random()}"
              },
              {
                title: "Avoid Index Keys for Dynamic Data",
                description: "Use real identifiers instead."
              },
              {
                title: "Keep Keys Unique",
                description: "Ensure they are unique among siblings."
              },
              {
                title: "Render Components Instead of Large JSX Blocks",
                description: "Example: <UserCard /> instead of huge repeated JSX. This improves readability and maintainability."
              }
            ]
          }
        ]
      },

      {
        heading: "How Lists and Keys Work Together",
        blocks: [
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Data Array", "→",
              "map()", "→",
              "Generate JSX", "→",
              "Assign Key", "→",
              "React Tracks Elements", "→",
              "Efficient Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This is the standard pattern used throughout React applications."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Lists allow React developers to display collections of data dynamically."
          },
          {
            type: "paragraph",
            content: "The most common technique is:"
          },
          {
            type: "output",
            content: "array.map()"
          },
          {
            type: "paragraph",
            content: "Keys help React identify elements efficiently during updates."
          },
          {
            type: "paragraph",
            content: "Best practices include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use map() for rendering lists",
              "Always provide keys",
              "Prefer unique IDs",
              "Avoid random keys",
              "Avoid index keys for dynamic data",
              "Keep keys stable and predictable"
            ]
          },
          {
            type: "paragraph",
            content: "Lists and Keys are fundamental React concepts because nearly every modern application displays dynamic collections of information."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think keys exist only to remove React warnings. In reality, keys are a core performance feature. They help React's reconciliation algorithm understand exactly which items changed between renders. Choosing good keys can dramatically improve rendering efficiency, while poor keys can introduce subtle bugs that become difficult to diagnose in larger applications."
          }
        ]
      }
  ]
},

};

export default reactFundamentals;

























/* New FAQ code to write answer + code */
/* 
{
  type: "faq",

  items: [
    {
      question: "Mistake 1: Multiple Root Elements",

      answer:
        "JSX must always return a single root element. Returning two sibling elements without a parent wrapper will throw an error.",

      examples: [
        {
          title: "Incorrect",
          language: "jsx",
          content: `<h1>Hello</h1>
<p>World</p>`
        },

        {
          title: "Correct",
          language: "jsx",
          content: `<div>
  <h1>Hello</h1>
  <p>World</p>
</div>`
        }
      ]
    }
  ]
}
*/


/* Multiple example code in FAQ */
/* 
{
  question: "...",
  answer: "...",

  examples: [
    {
      title: "Incorrect",
      language: "jsx",
      content: "..."
    },

    {
      title: "Correct",
      language: "jsx",
      content: "..."
    },

    {
      title: "Alternative Solution",
      language: "jsx",
      content: "..."
    },

    {
      title: "TypeScript Version",
      language: "tsx",
      content: "..."
    }
  ]
}
*/