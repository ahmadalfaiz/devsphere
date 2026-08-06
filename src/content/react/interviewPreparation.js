const interviewPreparation = {


/* ===========================
    First Topic : React Interview Questions
============================= */
    "react-interview-questions": {
    title: "React Interview Questions",
    readingTime: "83 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "React interviews are very different from traditional programming interviews."
          },
          {
            type: "paragraph",
            content: "Interviewers rarely focus only on syntax. Instead, they try to understand:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Whether you understand React fundamentals",
              "Whether you know how React works internally",
              "Whether you can build scalable applications",
              "Whether you understand performance optimization",
              "Whether you can debug real-world problems",
              "Whether you understand modern React practices"
            ]
          },
          {
            type: "paragraph",
            content: "Many beginners memorize React APIs but struggle to explain why React behaves the way it does. Professional React interviews focus heavily on concepts."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Most frequently asked React interview questions",
              "Detailed interview-ready answers",
              "Conceptual understanding behind each answer",
              "Common follow-up questions",
              "Real-world examples interviewers often discuss",
              "Common mistakes candidates make"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you will be prepared for React interviews ranging from internships and junior roles to experienced frontend developer positions."
          }
        ]
      },

      {
        heading: "Question 1: What is React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React is an open-source JavaScript library used for building user interfaces, particularly single-page applications. It was developed by Meta (Facebook) and focuses on creating reusable UI components. React allows developers to build complex user interfaces by breaking them into small independent components."
          },
          {
            type: "paragraph",
            content: "Key features include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component-Based Architecture",
              "Virtual DOM",
              "Declarative UI",
              "Reusable Components",
              "Efficient Rendering",
              "Rich Ecosystem"
            ]
          },
          {
            type: "paragraph",
            content: "React focuses only on the View layer of an application. This means React handles UI rendering but often relies on other libraries for routing, state management, and backend communication."
          },
          {
            type: "paragraph",
            content: "Interview Follow-Up: Why is React called a library instead of a framework?"
          },
          {
            type: "paragraph",
            content: "React only handles UI rendering. Frameworks typically provide complete solutions including Routing, State Management, Data Fetching, Project Structure. React leaves these decisions to developers. Therefore React is considered a library rather than a full framework."
          }
        ]
      },

      {
        heading: "Question 2: What are the main features of React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The most important features of React are:"
          },
          {
            type: "paragraph",
            content: "Component-Based Architecture: Applications are built using reusable components."
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
            content: "Virtual DOM: React uses a virtual representation of the DOM. Instead of updating the real DOM directly, React:"
          },
          {
            type: "flow",
            steps: [
              "State Change", "→",
              "Virtual DOM Updated", "→",
              "Diffing Process", "→",
              "Minimal DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This improves performance significantly."
          },
          {
            type: "paragraph",
            content: "JSX: Allows developers to write HTML-like syntax inside JavaScript."
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello React</h1>`
          },
          {
            type: "paragraph",
            content: "Declarative Programming: Developers describe what the UI should look like. React determines how to update it efficiently."
          },
          {
            type: "paragraph",
            content: "One-Way Data Flow: Data flows from parent components to child components through props. This makes applications easier to understand and debug."
          }
        ]
      },

      {
        heading: "Question 3: What is JSX?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript files."
          },
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello React</h1>;`
          },
          {
            type: "paragraph",
            content: "JSX is not understood directly by browsers. It is transformed into JavaScript by build tools such as Babel. Example transformation:"
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
            content: "Advantages of JSX: More readable code, Easier UI development, Better developer experience, Supports JavaScript expressions."
          },
          {
            type: "paragraph",
            content: "Common Interview Trap: Is JSX mandatory in React?"
          },
          {
            type: "paragraph",
            content: "No. React can be written without JSX using React.createElement(). However JSX is the standard approach because it is easier to read and maintain."
          }
        ]
      },

      {
        heading: "Question 4: What is the Virtual DOM?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Virtual DOM is a lightweight JavaScript representation of the real DOM. Whenever state or props change:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "React creates a new Virtual DOM tree.",
              "React compares it with the previous Virtual DOM.",
              "React identifies differences.",
              "Only changed elements are updated in the real DOM."
            ]
          },
          {
            type: "paragraph",
            content: "This process is called Reconciliation and uses Diffing Algorithm."
          },
          {
            type: "paragraph",
            content: "Why is Virtual DOM Faster? Updating the real DOM is expensive. React minimizes direct DOM manipulations. Instead of updating everything (Old DOM → Entire Re-render), React updates only affected parts. This improves application performance."
          },
          {
            type: "paragraph",
            content: "Interview Follow-Up: Does React always re-render the entire page?"
          },
          {
            type: "paragraph",
            content: "No. React re-renders components internally but updates only the necessary DOM elements after reconciliation."
          }
        ]
      },

      {
        heading: "Question 5: What is Reconciliation in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is the process React uses to determine what changed between two Virtual DOM trees."
          },
          {
            type: "paragraph",
            content: "Whenever state or props change:"
          },
          {
            type: "flow",
            steps: [
              "Previous Virtual DOM", "→",
              "Current Virtual DOM", "→",
              "Comparison", "→",
              "DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "React performs this comparison efficiently using its diffing algorithm."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster rendering, Better performance, Fewer DOM operations."
          }
        ]
      },

      {
        heading: "Question 6: What is the Diffing Algorithm?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Diffing Algorithm is React's method for comparing two Virtual DOM trees. Instead of comparing every element exhaustively, React uses heuristics."
          },
          {
            type: "paragraph",
            content: "Key assumptions:"
          },
          {
            type: "paragraph",
            content: "Rule 1: Different element types produce different trees. Example: `<div />` to `<section />`. React replaces the entire subtree."
          },
          {
            type: "paragraph",
            content: "Rule 2: Keys help identify list elements. React uses keys to determine which items changed. This significantly improves list rendering performance."
          }
        ]
      },

      {
        heading: "Question 7: What are Components in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Components are reusable pieces of user interface. React applications are built by combining components together."
          },
          {
            type: "tree",
            content: `Website
├── Navbar
├── Hero
├── ProductList
└── Footer`
          },
          {
            type: "paragraph",
            content: "Each component has a specific responsibility."
          },
          {
            type: "paragraph",
            content: "Benefits: Reusability, Maintainability, Scalability, Better code organization."
          }
        ]
      },

      {
        heading: "Question 8: What are the Types of Components in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: There are two primary component types:"
          },
          {
            type: "paragraph",
            content: "Functional Components: Modern React standard."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Hello</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Advantages: Simpler syntax, Hooks support, Easier maintenance."
          },
          {
            type: "paragraph",
            content: "Class Components: Older React approach."
          },
          {
            type: "code",
            language: "jsx",
            content: `class Welcome extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}`
          },
          {
            type: "paragraph",
            content: "Class components support: State, Lifecycle Methods. However, modern React primarily uses Functional Components."
          },
          {
            type: "paragraph",
            content: "Interview Follow-Up: Which should be used today?"
          },
          {
            type: "paragraph",
            content: "Functional Components. React officially recommends them for modern development."
          }
        ]
      },

      {
        heading: "Question 9: What is the Difference Between Functional and Class Components?",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Functional", "Class"],
            rows: [
              ["Syntax", "Simpler", "More Complex"],
              ["Hooks Support", "Yes", "No"],
              ["Uses Classes", "No", "Yes"],
              ["Uses this Keyword", "No", "Yes"],
              ["Modern Standard", "Yes", "No"],
              ["Easier Testing", "Yes", "Less Easy"]
            ]
          },
          {
            type: "paragraph",
            content: "Functional Components are preferred because they are cleaner and work seamlessly with Hooks."
          }
        ]
      },

      {
        heading: "Question 10: What are Props in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Props (Properties) are used to pass data from a parent component to a child component."
          },
          {
            type: "code",
            language: "jsx",
            content: `<User name="Alex" />`
          },
          {
            type: "paragraph",
            content: "The child component receives: `props.name`"
          },
          {
            type: "paragraph",
            content: "Props are: Read-only, Immutable, Passed from parent to child. Think of props as function parameters for components."
          },
          {
            type: "paragraph",
            content: "Why Are Props Important? They make components reusable."
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProductCard title="Phone" />
<ProductCard title="Laptop" />
<ProductCard title="Tablet" />`
          },
          {
            type: "paragraph",
            content: "One component can display different data."
          }
        ]
      },

      {
        heading: "Question 11: Why are Props Immutable?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Props should never be modified by child components."
          },
          {
            type: "paragraph",
            content: "Reason: React follows one-way data flow. Parent components own the data. Children only receive data."
          },
          {
            type: "paragraph",
            content: "Changing props directly would: Break predictability, Cause inconsistent UI, Make debugging difficult."
          },
          {
            type: "paragraph",
            content: "If data needs modification, the parent should update it and pass new props."
          }
        ]
      },

      {
        heading: "Question 12: What is State in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State is data managed internally by a component. Unlike props: Props → External Data, State → Internal Data."
          },
          {
            type: "paragraph",
            content: "State can change over time. Examples: Counter values, Form inputs, Loading states, User selections."
          },
          {
            type: "paragraph",
            content: "Whenever state changes:"
          },
          {
            type: "flow",
            steps: [
              "State Updated", "→",
              "Component Re-renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "State makes React applications dynamic and interactive."
          }
        ]
      },

      {
        heading: "Question 13: Difference Between Props and State?",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Props", "State"],
            rows: [
              ["Ownership", "Parent", "Component"],
              ["Mutable", "No", "Yes"],
              ["Purpose", "Pass Data", "Store Data"],
              ["Updated By", "Parent", "Component"],
              ["Re-render Trigger", "Yes", "Yes"]
            ]
          },
          {
            type: "paragraph",
            content: "Simple Rule: Props are received. State is managed."
          }
        ]
      },

      {
        heading: "Question 14: What is One-Way Data Binding?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React follows one-way data flow. Data moves:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child", "→",
              "Grandchild"
            ]
          },
          {
            type: "paragraph",
            content: "Children cannot directly modify parent data."
          },
          {
            type: "paragraph",
            content: "Benefits: Predictability, Easier debugging, Better maintainability, Clear data flow. This is one of React's core design principles."
          }
        ]
      },

      {
        heading: "Question 15: Why is React So Popular?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React became popular because it provides: Component Reusability, Virtual DOM Performance, Strong Community, Rich Ecosystem, Declarative Programming, Excellent Developer Experience, Scalability, Industry Adoption."
          },
          {
            type: "paragraph",
            content: "Additionally, React powers applications used by millions of users worldwide. Examples include: Facebook, Instagram, WhatsApp Web, Airbnb, Netflix (parts of UI)."
          },
          {
            type: "paragraph",
            content: "This widespread adoption created enormous community support and job opportunities."
          }
        ]
      },

      {
        heading: "Fundamentals Interview Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before moving to Components and State questions, ensure you can confidently explain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React",
              "JSX",
              "Virtual DOM",
              "Reconciliation",
              "Diffing Algorithm",
              "Components",
              "Functional Components",
              "Class Components",
              "Props",
              "State",
              "One-Way Data Flow",
              "React Architecture"
            ]
          }
        ]
      },

      {
        heading: "Question 16: Why Was React Created?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React was created by Jordan Walke while working at Meta (formerly Facebook)."
          },
          {
            type: "paragraph",
            content: "Before React, updating complex user interfaces became difficult because developers had to manually manipulate the DOM."
          },
          {
            type: "paragraph",
            content: "Problems included:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slow updates",
              "Complex UI synchronization",
              "Difficult maintenance",
              "Poor scalability"
            ]
          },
          {
            type: "paragraph",
            content: "React solved these problems by introducing:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component-Based Architecture",
              "Virtual DOM",
              "Declarative UI",
              "Efficient Rendering"
            ]
          },
          {
            type: "paragraph",
            content: "React allows developers to focus on describing the UI instead of manually updating it."
          }
        ]
      },

      {
        heading: "Question 17: What Does \"Declarative UI\" Mean?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React follows a declarative programming approach. In declarative programming, developers describe what the UI should look like for a given state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <Dashboard /> : <Login />}
  </div>
);`
          },
          {
            type: "paragraph",
            content: "React automatically updates the interface when state changes."
          },
          {
            type: "paragraph",
            content: "Without React, developers often had to manually: Create elements, Remove elements, Update content, Manage DOM state."
          },
          {
            type: "paragraph",
            content: "React handles these updates automatically."
          }
        ]
      },

      {
        heading: "Question 18: What Is Imperative Programming?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Imperative programming focuses on describing every step required to achieve a result."
          },
          {
            type: "paragraph",
            content: "Traditional JavaScript DOM manipulation is imperative."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const heading = document.getElementById("title");
heading.innerText = "Hello";
heading.style.color = "blue";`
          },
          {
            type: "paragraph",
            content: "The developer manually controls every DOM operation."
          },
          {
            type: "paragraph",
            content: "React abstracts these operations and uses a declarative approach instead."
          }
        ]
      },

      {
        heading: "Question 19: What Is a React Element?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A React Element is the smallest building block of a React application."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello React</h1>;`
          },
          {
            type: "paragraph",
            content: "React Elements are: Lightweight objects, Immutable, Descriptions of UI."
          },
          {
            type: "paragraph",
            content: "React uses these elements to create actual DOM elements. A component returns React Elements."
          }
        ]
      },

      {
        heading: "Question 20: Difference Between React Element and React Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "**React Element**: A plain object describing UI."
          },
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello</h1>;`
          },
          {
            type: "paragraph",
            content: "**React Component**: A function or class that returns React Elements."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Hello</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Difference:"
          },
          {
            type: "table",
            headers: ["React Element", "React Component"],
            rows: [
              ["UI description", "UI generator"],
              ["Immutable object", "Function/Class"],
              ["Cannot contain logic", "Can contain logic"],
              ["Returned by components", "Creates elements"]
            ]
          }
        ]
      },

      {
        heading: "Question 21: Why Does React Use Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Components allow developers to break applications into smaller reusable pieces."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reusability",
              "Easier maintenance",
              "Better organization",
              "Faster development",
              "Team collaboration"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating one huge file, applications are divided into small modules."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── Sidebar
├── ProductCard
└── Footer`
          },
          {
            type: "paragraph",
            content: "This architecture makes applications scalable."
          }
        ]
      },

      {
        heading: "Question 22: What Is Component Composition?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Component Composition means building large components using smaller components."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── HeroSection
├── ProductList
└── Footer`
          },
          {
            type: "paragraph",
            content: "Instead of creating one giant component, multiple components are combined together."
          },
          {
            type: "paragraph",
            content: "Benefits: Better reusability, Cleaner code, Easier testing, Easier maintenance."
          },
          {
            type: "paragraph",
            content: "Component Composition is one of React's most important design principles."
          }
        ]
      },

      {
        heading: "Question 23: Why Should Component Names Start With Capital Letters?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React distinguishes components from HTML elements using capitalization."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserProfile />`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<userProfile />`
          },
          {
            type: "paragraph",
            content: "React treats lowercase names as native HTML tags. Capitalized names tell React that the element represents a component."
          },
          {
            type: "paragraph",
            content: "This is why PascalCase naming is mandatory."
          }
        ]
      },

      {
        heading: "Question 24: What Is JSX Expression Embedding?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX allows JavaScript expressions to be embedded inside curly braces."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const name = "John";

return <h1>Hello {name}</h1>;`
          },
          {
            type: "paragraph",
            content: "Output: Hello John"
          },
          {
            type: "paragraph",
            content: "Common uses: Variables, Function calls, Calculations, Conditional rendering. JSX makes dynamic UI creation simple."
          }
        ]
      },

      {
        heading: "Question 25: Can JSX Contain Loops?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Direct loops such as `for(...)` cannot be written inside JSX."
          },
          {
            type: "paragraph",
            content: "Instead, methods like `map()` are used."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const users = ["Alex", "John"];

return (
  <ul>
    {users.map(user => (
      <li>{user}</li>
    ))}
  </ul>
);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Alex",
              "John"
            ]
          },
          {
            type: "paragraph",
            content: "React commonly uses `map()` for rendering lists."
          }
        ]
      },

      {
        heading: "Question 26: What Happens When State Changes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: When state changes:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "React schedules an update.",
              "Component re-renders.",
              "New Virtual DOM is created.",
              "Diffing algorithm compares changes.",
              "Real DOM updates only where necessary."
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "State Change", "→",
              "Component Re-render", "→",
              "New Virtual DOM", "→",
              "Diffing", "→",
              "DOM Update"
            ]
          },
          {
            type: "paragraph",
            content: "This process keeps UI synchronized with application data."
          }
        ]
      },

      {
        heading: "Question 27: Why Is React Considered Fast?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React is considered fast because it minimizes expensive DOM operations."
          },
          {
            type: "paragraph",
            content: "Key reasons:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**Virtual DOM:** React compares virtual representations before updating the browser.",
              "**Diffing Algorithm:** Only changed elements are updated.",
              "**Efficient Re-rendering:** React avoids unnecessary DOM modifications.",
              "**Component Architecture:** Updates can be isolated to specific parts of the application."
            ]
          },
          {
            type: "paragraph",
            content: "These optimizations improve performance significantly."
          }
        ]
      },

      {
        heading: "Question 28: What Is Unidirectional Data Flow?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React follows one-way data flow. Data moves: Parent → Child using props."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "<App>", "→",
              "<UserProfile />"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Predictable behavior, Easier debugging, Better maintainability, Clear data ownership."
          },
          {
            type: "paragraph",
            content: "One-way flow is a core React principle."
          }
        ]
      },

      {
        heading: "Question 29: Why Is React Called a Library and Not a Framework?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React focuses only on the View layer."
          },
          {
            type: "paragraph",
            content: "It does not provide built-in solutions for Routing, State management, API handling, Form management. Developers choose additional libraries when needed."
          },
          {
            type: "paragraph",
            content: "Example ecosystem:"
          },
          {
            type: "tree",
            content: `React
├── React Router
├── Redux
├── Axios
└── React Query`
          },
          {
            type: "paragraph",
            content: "Because React solves only UI rendering, it is classified as a library."
          }
        ]
      },

      {
        heading: "Question 30: What Is Reconciliation in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is React's process of determining what changed between two renders."
          },
          {
            type: "paragraph",
            content: "Process:"
          },
          {
            type: "flow",
            steps: [
              "Old Virtual DOM", "→",
              "New Virtual DOM", "→",
              "Comparison", "→",
              "Minimal DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "React compares previous and current trees and updates only the necessary DOM nodes. This process is responsible for React's efficient rendering behavior."
          }
        ]
      },

      {
        heading: "Question 31: What Is the Difference Between Rendering and Re-rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "**Rendering:** Occurs when a component appears for the first time."
          },
          {
            type: "flow",
            steps: [
              "Component Created", "→",
              "Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "**Re-rendering:** Occurs when: State changes, Props change, Parent re-renders."
          },
          {
            type: "flow",
            steps: [
              "State Updated", "→",
              "Component Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "Rendering is the initial UI creation, while re-rendering updates existing UI."
          }
        ]
      },

      {
        heading: "Question 32: What Is the Single Responsibility Principle in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Single Responsibility Principle states that a component should have one primary responsibility."
          },
          {
            type: "paragraph",
            content: "Good: Button Component (Only handles button UI)."
          },
          {
            type: "paragraph",
            content: "Bad: MegaComponent (Handles: Navbar, Forms, Authentication, API Calls, Dashboard)."
          },
          {
            type: "paragraph",
            content: "Benefits of SRP: Easier maintenance, Better readability, Easier testing, Better reusability."
          },
          {
            type: "paragraph",
            content: "Professional React applications heavily follow this principle."
          }
        ]
      },

      {
        heading: "Question 33: Why Is React Popular in Industry?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React is widely adopted because it provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component-Based Architecture",
              "Excellent Performance",
              "Huge Ecosystem",
              "Strong Community Support",
              "Reusable Code",
              "Easy Learning Curve",
              "Large Job Market"
            ]
          },
          {
            type: "paragraph",
            content: "Many companies use React for production systems, including: Meta, Netflix, Airbnb, Uber."
          },
          {
            type: "paragraph",
            content: "Its combination of performance, maintainability, and ecosystem support makes it one of the most popular frontend technologies."
          }
        ]
      },

      {
        heading: "Components → JSX → Props → State Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What are Components in React?"
          },
          {
            type: "paragraph",
            content: "Answer: Components are the fundamental building blocks of React applications."
          },
          {
            type: "paragraph",
            content: "A component is an independent and reusable piece of UI that contains its own structure, logic, and behavior. Instead of creating an entire webpage as one large file, React encourages developers to divide the application into smaller components."
          },
          {
            type: "paragraph",
            content: "Examples: Navbar, Sidebar, Footer, Product Card, Login Form, Dashboard Widget."
          },
          {
            type: "paragraph",
            content: "Each component can be reused multiple times throughout an application."
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── Sidebar
├── ProductList
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer`
          },
          {
            type: "paragraph",
            content: "Benefits: Reusability, Better maintainability, Easier testing, Improved scalability, Team collaboration."
          },
          {
            type: "paragraph",
            content: "React applications are essentially trees of components."
          }
        ]
      },

      {
        heading: "2. What are the different types of Components in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React mainly provides two types of components:"
          },
          {
            type: "paragraph",
            content: "**Functional Components**"
          },
          {
            type: "paragraph",
            content: "Created using JavaScript functions."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome() {
  return <h1>Hello</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Modern React primarily uses Functional Components. Advantages: Simpler syntax, Hooks support, Less boilerplate, Easier maintenance."
          },
          {
            type: "paragraph",
            content: "**Class Components**"
          },
          {
            type: "paragraph",
            content: "Created using JavaScript classes."
          },
          {
            type: "code",
            language: "jsx",
            content: `class Welcome extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}`
          },
          {
            type: "paragraph",
            content: "Class Components were widely used before Hooks were introduced. Today they are mostly found in legacy applications."
          }
        ]
      },

      {
        heading: "3. What is JSX?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like code inside JavaScript."
          },
          {
            type: "code",
            language: "jsx",
            content: `const element = <h1>Hello React</h1>;`
          },
          {
            type: "paragraph",
            content: "Without JSX:"
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
            content: "JSX makes UI code: More readable, Easier to write, Easier to maintain."
          },
          {
            type: "paragraph",
            content: "JSX is not understood directly by browsers. It is converted into JavaScript by Babel during compilation."
          }
        ]
      },

      {
        heading: "4. Why is JSX used in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX provides a cleaner way to describe UI. Without JSX, creating nested elements becomes difficult."
          },
          {
            type: "paragraph",
            content: "Example without JSX:"
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
    "Welcome"
  )
);`
          },
          {
            type: "paragraph",
            content: "With JSX:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<div>
  <h1>Welcome</h1>
</div>`
          },
          {
            type: "paragraph",
            content: "Advantages: Improved readability, Less code, Better developer experience, Easy visualization of UI structure. JSX combines JavaScript and UI representation in one place."
          }
        ]
      },

      {
        heading: "5. Can browsers understand JSX directly?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: No. Browsers only understand JavaScript. JSX must first be transformed into regular JavaScript. This transformation is usually performed by Babel."
          },
          {
            type: "paragraph",
            content: "JSX:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello</h1>`
          },
          {
            type: "paragraph",
            content: "Compiled output:"
          },
          {
            type: "code",
            language: "javascript",
            content: `React.createElement(
  "h1",
  null,
  "Hello"
);`
          },
          {
            type: "paragraph",
            content: "React then uses this generated code to build the Virtual DOM."
          }
        ]
      },

      {
        heading: "6. What are JSX Expressions?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX allows JavaScript expressions to be embedded using curly braces."
          },
          {
            type: "code",
            language: "jsx",
            content: `const name = "John";

<h1>Hello {name}</h1>;`
          },
          {
            type: "paragraph",
            content: "Output: Hello John"
          },
          {
            type: "paragraph",
            content: "Valid expressions: `{2 + 2}`, `{name}`, `{isLoggedIn}`, `{user.age}`, `{items.length}`."
          },
          {
            type: "paragraph",
            content: "Invalid: `{if(condition)}`, `{for(...) }`. Only expressions can be placed inside curly braces, not statements."
          }
        ]
      },

      {
        heading: "7. What is the difference between JSX and HTML?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Although JSX looks similar to HTML, they are not identical."
          },
          {
            type: "table",
            headers: ["HTML", "JSX"],
            rows: [
              ["class", "className"],
              ["for", "htmlFor"],
              ["onclick", "onClick"],
              ["Uses strings", "Uses JavaScript expressions"],
              ["Browser syntax", "JavaScript syntax"]
            ]
          },
          {
            type: "paragraph",
            content: "Example HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<label for="email">`
          },
          {
            type: "paragraph",
            content: "JSX:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<label htmlFor="email">`
          },
          {
            type: "paragraph",
            content: "JSX follows JavaScript rules, not HTML rules."
          }
        ]
      },

      {
        heading: "8. Why must JSX return a single parent element?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX expressions must evaluate to a single JavaScript object."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
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
            content: "Correct:"
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
            content: "Or:"
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
            content: "Fragments avoid unnecessary DOM elements."
          }
        ]
      },

      {
        heading: "9. What are Props in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Props stand for Properties. Props are used to pass data from a parent component to a child component."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User name="John" />`
          },
          {
            type: "paragraph",
            content: "Child:"
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
            content: "Output: John"
          },
          {
            type: "paragraph",
            content: "Props allow components to become reusable and dynamic."
          }
        ]
      },

      {
        heading: "10. Why are Props important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Without props, every component would display fixed data."
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
            content: "Using props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProductCard name="Phone" />
<ProductCard name="Laptop" />
<ProductCard name="Tablet" />`
          },
          {
            type: "paragraph",
            content: "Benefits: Reusability, Dynamic content, Better component design, Separation of concerns."
          },
          {
            type: "paragraph",
            content: "Props make components configurable."
          }
        ]
      },

      {
        heading: "11. Are Props mutable or immutable?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Props are immutable. This means a child component should never modify props it receives."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `props.name = "Alex";`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const displayName = props.name;`
          },
          {
            type: "paragraph",
            content: "Reason: React follows one-way data flow. Parents own the data. Children only receive and display it. Mutating props can create unpredictable behavior."
          }
        ]
      },

      {
        heading: "12. What is Prop Drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Prop Drilling occurs when data must be passed through multiple intermediate components."
          },
          {
            type: "tree",
            content: `App
 ↓
Dashboard
 ↓
Sidebar
 ↓
Profile`
          },
          {
            type: "paragraph",
            content: "If Profile needs user data: App → Dashboard → Sidebar → Profile. Every component must pass the prop."
          },
          {
            type: "paragraph",
            content: "Problems: Excessive code, Difficult maintenance, Deep nesting."
          },
          {
            type: "paragraph",
            content: "Solutions: Context API, Redux, Zustand, Recoil. Prop drilling becomes problematic in large applications."
          }
        ]
      },

      {
        heading: "13. What is State in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State is data managed internally by a component. Unlike props, state can change over time."
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "State is used for: User input, API responses, Counters, Theme switching, Modal visibility, Form management."
          },
          {
            type: "paragraph",
            content: "When state changes, React automatically re-renders the component."
          }
        ]
      },

      {
        heading: "14. What is the difference between Props and State?",
        blocks: [
          {
            type: "table",
            headers: ["Props", "State"],
            rows: [
              ["Passed from parent", "Managed inside component"],
              ["Immutable", "Mutable"],
              ["External data", "Internal data"],
              ["Read-only", "Can be updated"],
              ["Configures component", "Controls behavior"]
            ]
          },
          {
            type: "paragraph",
            content: "Example Props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User name="John" />`
          },
          {
            type: "paragraph",
            content: "Example State:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "Props are received. State is owned. This distinction is extremely important in React interviews."
          }
        ]
      },

      {
        heading: "15. Why does updating State trigger a re-render?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React tracks state changes. When state updates:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setCount(count + 1);`
          },
          {
            type: "paragraph",
            content: "React:"
          },
          {
            type: "flow",
            steps: [
              "State Changed", "→",
              "Component Re-renders", "→",
              "Virtual DOM Updated", "→",
              "Diffing Performed", "→",
              "Real DOM Updated"
            ]
          },
          {
            type: "paragraph",
            content: "This automatic update mechanism is one of React's core features. Developers don't manually update the DOM. React handles it automatically."
          }
        ]
      },

      {
        heading: "16. What is Lifting State Up?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lifting State Up means moving shared state to the nearest common parent."
          },
          {
            type: "tree",
            content: `Parent
├── ChildA
└── ChildB`
          },
          {
            type: "paragraph",
            content: "If both children need the same data: Instead of storing state separately (ChildA State, ChildB State), move state to Parent:"
          },
          {
            type: "flow",
            steps: [
              "Parent State", "→",
              "ChildA / ChildB"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Single source of truth, Easier synchronization, Better state management."
          },
          {
            type: "paragraph",
            content: "This is a very common React interview concept."
          }
        ]
      },

      {
        heading: "17. What is One-Way Data Flow in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React follows a one-way data flow model. Data moves:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child", "→",
              "Grandchild"
            ]
          },
          {
            type: "paragraph",
            content: "Data does not automatically flow upward."
          },
          {
            type: "paragraph",
            content: "Advantages: Predictable behavior, Easier debugging, Better maintainability, Improved scalability."
          },
          {
            type: "paragraph",
            content: "React's architecture heavily relies on one-way data flow."
          }
        ]
      },

      {
        heading: "18. When should you use State instead of Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use Props when: Data comes from parent, Component only displays information, Data should not be modified."
          },
          {
            type: "paragraph",
            content: "Use State when: Data changes over time, User interaction affects UI, Component manages its own data."
          },
          {
            type: "paragraph",
            content: "Examples requiring State: Counter, Search input, Login form, Modal visibility, Shopping cart quantity."
          },
          {
            type: "paragraph",
            content: "Examples requiring Props: Username from parent, Product details, Configuration values, Theme settings."
          },
          {
            type: "paragraph",
            content: "A common interview rule:"
          },
          {
            type: "output",
            content: [
              "Props = Data received",
              "State = Data owned"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this distinction is essential for designing React applications correctly."
          }
        ]
      },

      {
        heading: "19. What is Component Composition in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Component Composition is the practice of building larger components by combining smaller components."
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── Sidebar
├── Content
└── Footer`
          },
          {
            type: "paragraph",
            content: "Instead of creating one massive component, React encourages developers to compose multiple smaller components together."
          },
          {
            type: "paragraph",
            content: "Benefits: Better code organization, Easier maintenance, Improved reusability, Simpler testing."
          },
          {
            type: "paragraph",
            content: "React's architecture is heavily based on composition. In fact, React prefers composition over inheritance."
          }
        ]
      },

      {
        heading: "20. What is the difference between Composition and Inheritance?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Traditional OOP applications often use inheritance:"
          },
          {
            type: "tree",
            content: `Animal
 ├── Dog
 └── Cat`
          },
          {
            type: "paragraph",
            content: "React prefers composition."
          },
          {
            type: "tree",
            content: `Dashboard
├── Sidebar
├── Header
└── MainContent`
          },
          {
            type: "paragraph",
            content: "Why React prefers composition: More flexible, Easier to understand, Better code reuse, Less tightly coupled."
          },
          {
            type: "paragraph",
            content: "The React team officially recommends composition instead of inheritance for component reuse."
          }
        ]
      },

      {
        heading: "21. What is a Pure Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Pure Component produces the same output for the same input."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Input: `<Greeting name=\"John\" />`"
          },
          {
            type: "paragraph",
            content: "Output will always be: Hello John"
          },
          {
            type: "paragraph",
            content: "Characteristics: No side effects, Predictable output, Easier testing, Better optimization opportunities."
          },
          {
            type: "paragraph",
            content: "Most React components should ideally behave like pure functions."
          }
        ]
      },

      {
        heading: "22. What are Stateless and Stateful Components?",
        blocks: [
          {
            type: "paragraph",
            content: "**Stateless Component:** Contains no state."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Characteristics: Receives props, Displays UI, No internal state."
          },
          {
            type: "paragraph",
            content: "**Stateful Component:** Manages state internally."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Counter() {
  const [count, setCount] = useState(0);
  // ...
}`
          },
          {
            type: "paragraph",
            content: "Characteristics: Stores data, Updates UI dynamically, Handles interactions."
          },
          {
            type: "paragraph",
            content: "Modern Functional Components can be both stateless and stateful."
          }
        ]
      },

      {
        heading: "23. What is a Controlled Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Controlled Component is a form element whose value is controlled by React state."
          },
          {
            type: "code",
            language: "jsx",
            content: `<input
  value={name}
  onChange={handleChange}
/>`
          },
          {
            type: "flow",
            steps: [
              "Input Change", "→",
              "State Updates", "→",
              "UI Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Single source of truth, Easier validation, Better control over forms."
          },
          {
            type: "paragraph",
            content: "Controlled Components are the recommended approach for most React forms."
          }
        ]
      },

      {
        heading: "24. What is an Uncontrolled Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An Uncontrolled Component stores its own state inside the DOM."
          },
          {
            type: "code",
            language: "jsx",
            content: `<input ref={inputRef} />`
          },
          {
            type: "paragraph",
            content: "Value is retrieved using refs instead of React state."
          },
          {
            type: "paragraph",
            content: "Advantages: Less code, Simpler for small forms."
          },
          {
            type: "paragraph",
            content: "Disadvantages: Harder validation, Less predictable, Reduced React control."
          },
          {
            type: "paragraph",
            content: "Large applications typically favor Controlled Components."
          }
        ]
      },

      {
        heading: "25. What is the Single Source of Truth in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Single Source of Truth means data should exist in one place only."
          },
          {
            type: "paragraph",
            content: "Bad: State A = User Name, State B = User Name, State C = User Name. Now synchronization becomes difficult."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "flow",
            steps: [
              "Parent State", "→",
              "Child A / Child B / Child C"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Consistent data, Easier debugging, Better maintainability."
          },
          {
            type: "paragraph",
            content: "This concept is fundamental to React architecture."
          }
        ]
      },

      {
        heading: "26. What happens when a Component Re-renders?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: When state or props change:"
          },
          {
            type: "flow",
            steps: [
              "State Change", "→",
              "Component Function Runs Again", "→",
              "New Virtual DOM Created", "→",
              "Diffing Algorithm Runs", "→",
              "DOM Updates Applied"
            ]
          },
          {
            type: "paragraph",
            content: "**Important:** A re-render does NOT mean the entire real DOM is rebuilt. React updates only the changed parts. This is one reason React is efficient."
          }
        ]
      },

      {
        heading: "27. What causes a React Component to Re-render?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A component usually re-renders when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**State Changes:** `setCount(count + 1);`",
              "**Props Change:** `<User name=\"Alex\" />`",
              "**Parent Re-renders:** If a parent re-renders, child components usually re-render too.",
              "**Context Value Changes:** Components consuming Context will re-render when the context changes."
            ]
          },
          {
            type: "paragraph",
            content: "These are the primary causes of React re-renders."
          }
        ]
      },

      {
        heading: "28. Can a Child Component Update Parent State?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Yes. Although data flows downward, a parent can pass a function to a child."
          },
          {
            type: "flow",
            steps: [
              "Parent State", "→",
              "Child receives function", "→",
              "Child calls function", "→",
              "Parent State Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern is extremely common. Examples: Form submission, Delete buttons, Toggle actions, Modal controls."
          },
          {
            type: "paragraph",
            content: "The child does not directly modify parent state. Instead, it requests the parent to update it."
          }
        ]
      },

      {
        heading: "29. What is Props Destructuring?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Instead of:"
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
            content: "We can write:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User({ name }) {
  return <h1>{name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Cleaner code, Improved readability, Less repetition. Most modern React projects use props destructuring."
          }
        ]
      },

      {
        heading: "30. What is Default Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Default Props provide fallback values when props are not supplied."
          },
          {
            type: "code",
            language: "jsx",
            content: `function User({ name = "Guest" }) {
  return <h1>{name}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "If `<User />` is rendered, Output is: Guest"
          },
          {
            type: "paragraph",
            content: "Benefits: Prevents undefined values, Improves component reliability, Makes components safer."
          }
        ]
      },

      {
        heading: "31. What is the Children Prop in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Every React component automatically receives a special prop called: `props.children`"
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
            content: "Inside Card:"
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
            content: "Output: Hello. This enables highly reusable wrapper components."
          }
        ]
      },

      {
        heading: "32. Why is props.children Important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: It allows components to become flexible containers. Examples: Modal, Card, Layout, Sidebar, Dialog."
          },
          {
            type: "paragraph",
            content: "Without children: `<Card title=\"React\" />` (Limited flexibility)."
          },
          {
            type: "paragraph",
            content: "With children:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Card>
  Any JSX Content
</Card>`
          },
          {
            type: "paragraph",
            content: "The component becomes much more reusable. Many UI libraries heavily depend on children."
          }
        ]
      },

      {
        heading: "33. What is Conditional Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Conditional Rendering means displaying UI based on conditions."
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}`
          },
          {
            type: "flow",
            steps: [
              "Condition True → Dashboard",
              "Condition False → Login"
            ]
          },
          {
            type: "paragraph",
            content: "Common use cases: Authentication, Role-based UI, Loading states, Error messages."
          }
        ]
      },

      {
        heading: "34. Why Should State Never Be Mutated Directly?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Incorrect: `count = count + 1;` or `user.name = \"Alex\";`. React may not detect these changes properly."
          },
          {
            type: "paragraph",
            content: "Correct: `setCount(count + 1);`"
          },
          {
            type: "paragraph",
            content: "Benefits: Predictable updates, Proper re-rendering, Easier debugging, Better performance optimizations."
          },
          {
            type: "paragraph",
            content: "React expects state to be treated as immutable."
          }
        ]
      },

      {
        heading: "35. What is State Immutability?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Immutability means creating new data instead of modifying existing data."
          },
          {
            type: "paragraph",
            content: "Bad: `user.name = \"John\";`"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  ...user,
  name: "John"
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Easier change detection, Faster React optimizations, Reliable rendering, Simpler debugging. Most React performance features rely on immutable updates."
          }
        ]
      },

      {
        heading: "36. Explain the Complete Data Flow of a React Application.",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The typical React data flow looks like:"
          },
          {
            type: "flow",
            steps: [
              "Parent State", "→",
              "Props", "→",
              "Child Component", "→",
              "User Interaction", "→",
              "Event Handler", "→",
              "State Update", "→",
              "Re-render", "→",
              "Updated UI"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Counter", "→",
              "Button Click", "→",
              "setCount()", "→",
              "State Updates", "→",
              "Component Re-renders", "→",
              "New Count Displayed"
            ]
          },
          {
            type: "paragraph",
            content: "This cycle forms the foundation of how React applications work."
          }
        ]
      },

      {
        heading: "Lifecycle → Hooks Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What problem did React Hooks solve?"
          },
          {
            type: "paragraph",
            content: "Answer: Before Hooks were introduced, developers mainly used Class Components whenever they needed: State management, Lifecycle methods, Side effects, Complex logic."
          },
          {
            type: "paragraph",
            content: "This created several problems:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Large and Complex Components: Class components often became difficult to read and maintain.",
              "Logic Duplication: The same logic was frequently repeated across lifecycle methods (e.g., `componentDidMount()` and `componentDidUpdate()` might contain similar code).",
              "Difficult Reusability: Sharing stateful logic between components was complicated, requiring Higher Order Components (HOCs) or Render Props."
            ]
          },
          {
            type: "paragraph",
            content: "Hooks solved these issues by allowing Functional Components to use State, Side effects, Context, Refs, and Reducers without classes."
          },
          {
            type: "paragraph",
            content: "Result: Less code, Better readability, Easier reuse, Simpler architecture."
          }
        ]
      },

      {
        heading: "2. What is the relationship between Hooks and React Lifecycle?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hooks provide lifecycle functionality inside Functional Components."
          },
          {
            type: "paragraph",
            content: "Class Components used: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`."
          },
          {
            type: "paragraph",
            content: "Functional Components use `useEffect()` to handle all of these situations."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []);`
          },
          {
            type: "paragraph",
            content: "This single Hook replaces multiple lifecycle methods."
          }
        ]
      },

      {
        heading: "3. What is useState?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useState` is a Hook that allows Functional Components to store and update state."
          },
          {
            type: "code",
            language: "javascript",
            content: `const [state, setState] = useState(initialValue);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "Here: `count` = current state value, `setCount` = function that updates state."
          },
          {
            type: "paragraph",
            content: "When state changes (`setCount(5)`), React re-renders the component automatically."
          }
        ]
      },

      {
        heading: "4. What happens when state changes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Whenever state changes:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "React schedules a re-render.",
              "Component function executes again.",
              "New JSX is generated.",
              "Virtual DOM comparison occurs.",
              "UI updates if necessary."
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "State Update", "→",
              "Component Re-renders", "→",
              "New Virtual DOM", "→",
              "Diffing", "→",
              "UI Update"
            ]
          },
          {
            type: "paragraph",
            content: "React only updates changed parts of the UI."
          }
        ]
      },

      {
        heading: "5. Why should state never be modified directly?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Direct modification bypasses React's update mechanism."
          },
          {
            type: "paragraph",
            content: "Incorrect: `count = count + 1;` or `state.user.name = \"John\";` React cannot detect these changes properly."
          },
          {
            type: "paragraph",
            content: "Correct: `setCount(count + 1);`"
          },
          {
            type: "paragraph",
            content: "Benefits: Predictable updates, Proper re-rendering, Better debugging, Consistent UI. Always use state setter functions."
          }
        ]
      },

      {
        heading: "6. What is useEffect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useEffect` is a Hook used to perform side effects."
          },
          {
            type: "paragraph",
            content: "Examples of side effects: API calls, Timers, Event listeners, LocalStorage access, Analytics tracking."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log("Component rendered");
});`
          },
          {
            type: "paragraph",
            content: "React executes the effect after rendering."
          }
        ]
      },

      {
        heading: "7. What are side effects in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A side effect is any operation that interacts with something outside the component's rendering process."
          },
          {
            type: "comparison",
            leftTitle: "Side Effects",
            leftItems: [
              "API requests",
              "Fetching data",
              "Updating document title",
              "Subscribing to events",
              "Setting timers",
              "Writing to localStorage"
            ],
            rightTitle: "Not Side Effects",
            rightItems: [
              "Returning JSX",
              "Simple calculations",
              "Rendering UI"
            ]
          },
          {
            type: "paragraph",
            content: "Side effects are typically handled using `useEffect()`."
          }
        ]
      },

      {
        heading: "8. How does useEffect replace componentDidMount?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "In Class Components:"
          },
          {
            type: "code",
            language: "javascript",
            content: `componentDidMount() {
  fetchData();
}`
          },
          {
            type: "paragraph",
            content: "Equivalent Hook:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  fetchData();
}, []);`
          },
          {
            type: "paragraph",
            content: "The empty dependency array `[]` tells React: Run only once after initial render. This mimics `componentDidMount` behavior."
          }
        ]
      },

      {
        heading: "9. How does useEffect replace componentDidUpdate?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Class version:"
          },
          {
            type: "code",
            language: "javascript",
            content: `componentDidUpdate() {
  fetchData();
}`
          },
          {
            type: "paragraph",
            content: "Hook version:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  fetchData();
}, [searchTerm]);`
          },
          {
            type: "paragraph",
            content: "Now the effect runs whenever `searchTerm` changes. This behaves similarly to `componentDidUpdate` for specific values."
          }
        ]
      },

      {
        heading: "10. How does useEffect replace componentWillUnmount?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Cleanup functions replace `componentWillUnmount`."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);`
          },
          {
            type: "paragraph",
            content: "Cleanup executes when: Component unmounts OR Effect re-runs. This prevents memory leaks."
          }
        ]
      },

      {
        heading: "11. What is the dependency array in useEffect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The dependency array controls when an effect runs."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log("Effect");
}, [count]);`
          },
          {
            type: "paragraph",
            content: "React runs the effect whenever `count` changes. Dependencies help React avoid unnecessary executions."
          }
        ]
      },

      {
        heading: "12. What happens when no dependency array is provided?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log("Running");
});`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Initial Render", "→",
              "Every Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "The effect runs after every render. This can sometimes create performance issues."
          }
        ]
      },

      {
        heading: "13. What happens when an empty dependency array is used?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log("Mounted");
}, []);`
          },
          {
            type: "paragraph",
            content: "Behavior: Runs Once After Initial Render. Equivalent to `componentDidMount()`."
          },
          {
            type: "paragraph",
            content: "This is commonly used for Initial API requests, Initial setup logic, Analytics initialization."
          }
        ]
      },

      {
        heading: "14. What happens if dependencies are missing from useEffect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log(count);
}, []);`
          },
          {
            type: "paragraph",
            content: "Problem: `count` is used but not declared as a dependency. This can cause Stale values, Unexpected behavior, Bugs."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log(count);
}, [count]);`
          },
          {
            type: "paragraph",
            content: "React's ESLint rules help identify missing dependencies."
          }
        ]
      },

      {
        heading: "15. What is a cleanup function in useEffect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A cleanup function removes resources created by an effect."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);`
          },
          {
            type: "paragraph",
            content: "Purpose: Prevent memory leaks, Remove subscriptions, Stop timers, Clean event listeners. Cleanup is an essential part of professional React development."
          }
        ]
      },

      {
        heading: "16. What is useRef?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useRef` creates a mutable object that persists across renders."
          },
          {
            type: "code",
            language: "javascript",
            content: `const inputRef = useRef();`
          },
          {
            type: "paragraph",
            content: "Common uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**Access DOM Elements:** `inputRef.current.focus();`",
              "**Store Mutable Values:** `previousValue.current = count;`"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike state: Updating `useRef` Does NOT trigger re-render."
          }
        ]
      },

      {
        heading: "17. What is the difference between useRef and useState?",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "useState", "useRef"],
            rows: [
              ["Causes Re-render", "Yes", "No"],
              ["Stores Values", "Yes", "Yes"],
              ["Updates UI", "Yes", "No"],
              ["Mutable", "Via Setter", "Directly"],
              ["DOM Access", "No", "Yes"]
            ]
          },
          {
            type: "paragraph",
            content: "Example `useState`: `setCount(5);` (Triggers re-render)."
          },
          {
            type: "paragraph",
            content: "Example `useRef`: `ref.current = 5;` (No re-render occurs)."
          }
        ]
      },

      {
        heading: "18. When should you use useRef instead of useState?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use `useRef` when:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Value Should Persist: Timer IDs, Previous Values, Scroll Positions.",
              "UI Doesn't Need Updating: If changing the value shouldn't update the screen.",
              "DOM Manipulation: Focus Input, Scroll Element, Measure Size, Play Video.",
              "Avoiding Unnecessary Re-renders: Sometimes storing values in state causes needless renders. `useRef` is more efficient in those situations."
            ]
          }
        ]
      },

      {
        heading: "19. What is useContext and why is it used?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useContext` is a React Hook that allows components to access data from a Context without manually passing props through every level of the component tree."
          },
          {
            type: "paragraph",
            content: "It solves a problem known as: Prop Drilling."
          },
          {
            type: "paragraph",
            content: "Prop drilling occurs when data must pass through multiple intermediate components even though those components do not use the data themselves."
          },
          {
            type: "paragraph",
            content: "Without Context:"
          },
          {
            type: "tree",
            content: `App
 ↓
Navbar
 ↓
Sidebar
 ↓
Profile`
          },
          {
            type: "paragraph",
            content: "If user information originates in App but is only needed inside Profile, every component must pass the props down."
          },
          {
            type: "paragraph",
            content: "With Context:"
          },
          {
            type: "flow",
            steps: [
              "App (Provider)", "→",
              "Profile (Consumer)"
            ]
          },
          {
            type: "paragraph",
            content: "Profile can access the data directly."
          },
          {
            type: "paragraph",
            content: "Common use cases: Authentication, Theme switching, Language settings, User preferences, Global application settings."
          }
        ]
      },

      {
        heading: "20. How does useContext work internally?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Context works using two main parts:"
          },
          {
            type: "paragraph",
            content: "**Context Provider:** Stores and shares data."
          },
          {
            type: "code",
            language: "jsx",
            content: `<AuthProvider>`
          },
          {
            type: "paragraph",
            content: "**Context Consumer:** Reads data."
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = useContext(AuthContext);`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Provider", "→",
              "Stores Value", "→",
              "React Tracks Subscribers", "→",
              "Consumer Reads Value"
            ]
          },
          {
            type: "paragraph",
            content: "Whenever the provider value changes, React updates all subscribed consumers. This creates a centralized data-sharing system."
          }
        ]
      },

      {
        heading: "21. When should you use Context instead of Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use Props when: Data is needed by direct child components. Component relationships are simple."
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Button"
            ]
          },
          {
            type: "paragraph",
            content: "Props work perfectly."
          },
          {
            type: "paragraph",
            content: "Use Context when: Many components need the same data. Data must travel through multiple layers. Global state is required."
          },
          {
            type: "paragraph",
            content: "Examples: User Authentication, Theme, Language, Permissions."
          },
          {
            type: "paragraph",
            content: "Context should not replace all props. A common interview mistake is saying: \"Context should be used everywhere.\" This is incorrect. Props are still the preferred solution for local component communication."
          }
        ]
      },

      {
        heading: "22. What is useMemo?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useMemo` is a Hook used to memoize expensive calculations."
          },
          {
            type: "paragraph",
            content: "Memoization means: Store Previous Result, Reuse It Later, Avoid Recalculation."
          },
          {
            type: "code",
            language: "javascript",
            content: `const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);`
          },
          {
            type: "paragraph",
            content: "React: Computes once, Stores result, Reuses stored value, Recalculates only when dependencies change. This improves performance."
          }
        ]
      },

      {
        heading: "23. What problem does useMemo solve?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React re-renders components frequently. During every render: Functions Re-run, Calculations Re-run, Expressions Re-evaluate."
          },
          {
            type: "paragraph",
            content: "For simple calculations this is fine. For expensive calculations (Sorting huge datasets, Filtering thousands of records, Complex mathematical operations), repeated execution can slow the application."
          },
          {
            type: "paragraph",
            content: "`useMemo` prevents unnecessary recalculation."
          },
          {
            type: "paragraph",
            content: "Without `useMemo`:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Expensive Calculation", "→",
              "Render Again", "→",
              "Expensive Calculation Again"
            ]
          },
          {
            type: "paragraph",
            content: "With `useMemo`:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Calculation Once", "→",
              "Store Result", "→",
              "Reuse Result"
            ]
          }
        ]
      },

      {
        heading: "24. What is useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useCallback` memoizes functions."
          },
          {
            type: "paragraph",
            content: "Instead of storing a value (`useMemo()`), it stores a function reference."
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`
          },
          {
            type: "paragraph",
            content: "React returns the same function instance between renders until dependencies change."
          }
        ]
      },

      {
        heading: "25. What problem does useCallback solve?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Every render creates new function objects."
          },
          {
            type: "code",
            language: "javascript",
            content: `function App() {
  const handleClick = () => {};
}`
          },
          {
            type: "paragraph",
            content: "After re-render: Old Function Destroyed, New Function Created."
          },
          {
            type: "paragraph",
            content: "This becomes problematic when passing functions to memoized child components. React may think: New Function = Changed Prop, and unnecessarily re-render children."
          },
          {
            type: "paragraph",
            content: "`useCallback` prevents this."
          }
        ]
      },

      {
        heading: "26. Difference between useMemo and useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Many candidates confuse these Hooks."
          },
          {
            type: "paragraph",
            content: "**useMemo:** Memoizes values."
          },
          {
            type: "code",
            language: "javascript",
            content: `const sortedData = useMemo(...);`
          },
          {
            type: "paragraph",
            content: "Returns: Computed Value"
          },
          {
            type: "paragraph",
            content: "**useCallback:** Memoizes functions."
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(...);`
          },
          {
            type: "paragraph",
            content: "Returns: Function Reference"
          },
          {
            type: "table",
            headers: ["Hook", "Memoizes"],
            rows: [
              ["useMemo", "Value"],
              ["useCallback", "Function"]
            ]
          }
        ]
      },

      {
        heading: "27. When should you NOT use useMemo or useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A very common senior-level interview question."
          },
          {
            type: "paragraph",
            content: "Many beginners believe: More Memoization = Better Performance. This is false. Memoization itself has overhead."
          },
          {
            type: "paragraph",
            content: "Do NOT use them for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simple Calculations (`count + 1`)",
              "Tiny Arrays (`items.length`)",
              "Functions Not Passed Anywhere (`const greet = () => {};`)",
              "Premature Optimization"
            ]
          },
          {
            type: "paragraph",
            content: "Optimize only when performance problems actually exist."
          },
          {
            type: "paragraph",
            content: "Rule: Measure First, Optimize Second."
          }
        ]
      },

      {
        heading: "28. What are Custom Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Custom Hooks are reusable JavaScript functions that use React Hooks internally."
          },
          {
            type: "code",
            language: "javascript",
            content: `function useFetchData() {
  // logic
}`
          },
          {
            type: "paragraph",
            content: "Naming convention: Must start with \"use\". Examples: `useAuth`, `useFetch`, `useTheme`, `useLocalStorage`."
          },
          {
            type: "paragraph",
            content: "Custom Hooks allow logic reuse across components."
          }
        ]
      },

      {
        heading: "29. Why are Custom Hooks important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Without Custom Hooks:"
          },
          {
            type: "output",
            content: [
              "Component A: API Logic",
              "Component B: Same API Logic",
              "Component C: Same API Logic"
            ]
          },
          {
            type: "paragraph",
            content: "Code duplication occurs. With Custom Hooks: `useFetch()` Shared logic lives in one place."
          },
          {
            type: "paragraph",
            content: "Benefits: Reusability, Cleaner components, Easier maintenance, Better testing, Better scalability."
          }
        ]
      },

      {
        heading: "30. What are the Rules of Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Hooks follow strict rules."
          },
          {
            type: "paragraph",
            content: "**Rule 1: Only call Hooks at the top level.**"
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useState();
useEffect();`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if(condition){
   useState();
}`
          },
          {
            type: "paragraph",
            content: "**Rule 2: Only call Hooks inside Functional Components or Custom Hooks.**"
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function helper() {
  useState();
}`
          },
          {
            type: "paragraph",
            content: "These rules ensure React can correctly track Hook order."
          }
        ]
      },

      {
        heading: "31. Why can't Hooks be called conditionally?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React relies on Hook execution order."
          },
          {
            type: "paragraph",
            content: "Example: First Render:"
          },
          {
            type: "output",
            content: [
              "useState()",
              "useEffect()",
              "useState()"
            ]
          },
          {
            type: "paragraph",
            content: "Second Render (if `useEffect` was in a conditional that is now false):"
          },
          {
            type: "output",
            content: [
              "useState()",
              "useState()"
            ]
          },
          {
            type: "paragraph",
            content: "Now Hook positions shift. React becomes confused about: Which state belongs where, Which effect belongs where. This can cause unpredictable bugs."
          },
          {
            type: "paragraph",
            content: "Therefore: Hooks Must Always Execute In The Same Order."
          }
        ]
      },

      {
        heading: "32. What happens if Hook dependency arrays are incorrect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Incorrect dependencies can cause:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**Stale Data:** Using outdated values.",
              "**Infinite Loops:** Effect continuously re-runs.",
              "**Missing Updates:** UI fails to react to changes."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  fetchData(id);
}, []);`
          },
          {
            type: "paragraph",
            content: "Problem: `id` is missing. If `id` changes: Effect Will Not Run Again. Result: Outdated data appears."
          }
        ]
      },

      {
        heading: "33. What is a stale closure in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: One of the most common advanced Hook interview topics."
          },
          {
            type: "paragraph",
            content: "A stale closure occurs when a function remembers old state values."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  console.log(count);
}, []);`
          },
          {
            type: "paragraph",
            content: "The effect captures: Initial count and never sees updates."
          },
          {
            type: "paragraph",
            content: "Result: Outdated State, Unexpected Bugs."
          },
          {
            type: "paragraph",
            content: "Solution: Include proper dependencies."
          }
        ]
      },

      {
        heading: "34. How do you optimize React applications using Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common Hook optimizations:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`useMemo`: Prevent expensive recalculations.",
              "`useCallback`: Prevent unnecessary child renders.",
              "`useRef`: Store mutable values without re-rendering.",
              "Context Splitting: Avoid massive context updates.",
              "Custom Hooks: Encapsulate reusable logic.",
              "`React.memo`: Prevent unnecessary component renders."
            ]
          },
          {
            type: "paragraph",
            content: "Professional optimization focuses on: Reducing Unnecessary Renders rather than blindly adding Hooks."
          }
        ]
      },

      {
        heading: "35. How would you build a reusable authentication system using Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A common real-world interview scenario. Typical architecture:"
          },
          {
            type: "flow",
            steps: [
              "Auth Context", "→",
              "useAuth Custom Hook", "→",
              "Login Component / Protected Routes / Navbar / Profile"
            ]
          },
          {
            type: "paragraph",
            content: "Responsibilities:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Auth Context: Stores user state.",
              "useAuth: Provides reusable auth logic.",
              "Login: Authenticates user.",
              "Protected Route: Restricts access."
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Centralized authentication, Reusable logic, Cleaner architecture, Easier maintenance. This pattern is widely used in production React applications."
          }
        ]
      },

      {
        heading: "36. Explain a real-world scenario where useMemo and useCallback are used together.",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Imagine an e-commerce application. Component responsibilities: Product Search, Product Filtering, Product Sorting, Product Cards."
          },
          {
            type: "paragraph",
            content: "useMemo: Stores filtered product results."
          },
          {
            type: "flow",
            steps: [
              "Thousands of Products", "→",
              "Filter Once", "→",
              "Reuse Result"
            ]
          },
          {
            type: "paragraph",
            content: "Avoids repeated filtering."
          },
          {
            type: "paragraph",
            content: "useCallback: Stores event handlers. Example: Add To Cart, Wishlist, Compare Product. Functions remain stable."
          },
          {
            type: "paragraph",
            content: "Combined Benefit: Fewer Calculations, Fewer Child Re-renders, Better Performance."
          },
          {
            type: "paragraph",
            content: "This is one of the most common real-world optimization patterns used in production React applications."
          }
        ]
      },

      {
        heading: "Part 4: Performance Optimization Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is Performance Optimization in React?"
          },  
          {
            type: "paragraph",
            content: "Answer: Performance optimization is the process of improving a React application's speed, responsiveness, rendering efficiency, and resource usage."
          },
          {
            type: "paragraph",
            content: "The goal is to: Reduce unnecessary renders, Minimize CPU usage, Improve user experience, Speed up page loading, Reduce memory consumption."
          },
          {
            type: "paragraph",
            content: "A performant React application should:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Render Quickly",
              "Respond Instantly",
              "Use Resources Efficiently",
              "Scale Smoothly"
            ]
          },
          {
            type: "paragraph",
            content: "Performance optimization becomes increasingly important as applications grow larger and more complex."
          }
        ]
      },

      {
        heading: "2. Why is Performance Optimization Important in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React applications can become slow when: Components re-render unnecessarily, Large datasets are rendered, Expensive calculations repeat frequently, Network requests are inefficient, Large JavaScript bundles are loaded."
          },
          {
            type: "paragraph",
            content: "Consequences include: Slow UI, Laggy Interactions, Poor User Experience, Higher Resource Usage."
          },
          {
            type: "paragraph",
            content: "Optimization helps ensure: Faster rendering, Better responsiveness, Improved scalability, Higher user satisfaction."
          },
          {
            type: "paragraph",
            content: "Modern frontend development places significant emphasis on performance."
          }
        ]
      },

      {
        heading: "3. What is a React Re-render?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A re-render occurs when React executes a component function again to generate updated UI."
          },
          {
            type: "paragraph",
            content: "Example triggers: State Change, Props Change, Context Change, Parent Re-render."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "State Update", "→",
              "Component Re-renders", "→",
              "Virtual DOM Created", "→",
              "Diffing", "→",
              "UI Updated"
            ]
          },
          {
            type: "paragraph",
            content: "Re-rendering is normal and necessary. The real optimization challenge is Avoiding Unnecessary Re-renders, not avoiding all re-renders."
          }
        ]
      },

      {
        heading: "4. What causes a React component to re-render?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React components typically re-render when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**State Changes:** `setCount(count + 1);`",
              "**Props Change:** Parent passes new props.",
              "**Context Updates:** Context provider value changes.",
              "**Parent Re-renders:** Child components may re-render too.",
              "**Forced Updates:** Rare manual update scenarios."
            ]
          },
          {
            type: "paragraph",
            content: "**Important:** A component re-rendering does not automatically mean the DOM updates. React still performs Virtual DOM comparison first."
          }
        ]
      },

      {
        heading: "5. What are unnecessary re-renders?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Unnecessary re-renders occur when a component renders even though its visible output has not changed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Parent Re-renders", "→",
              "Child Re-renders", "→",
              "Props Unchanged"
            ]
          },
          {
            type: "paragraph",
            content: "The child's render was unnecessary."
          },
          {
            type: "paragraph",
            content: "Problems: Wasted CPU cycles, Slower applications, Poor scalability. Optimization techniques help prevent these extra renders."
          }
        ]
      },

      {
        heading: "6. What is React.memo()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.memo()` is a Higher Order Component used to prevent unnecessary re-renders of Functional Components."
          },
          {
            type: "code",
            language: "javascript",
            content: `const Profile = React.memo(function Profile() {
  return <h1>User</h1>;
});`
          },
          {
            type: "paragraph",
            content: "React stores the previous props. When new props arrive:"
          },
          {
            type: "flow",
            steps: [
              "Compare Old Props", "→",
              "Compare New Props", "→",
              "Same?", "→",
              "Skip Render"
            ]
          },
          {
            type: "paragraph",
            content: "This optimization is especially useful for frequently rendered child components."
          }
        ]
      },

      {
        heading: "7. How does React.memo() work internally?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.memo` performs a shallow comparison of props."
          },
          {
            type: "code",
            language: "javascript",
            content: `// Old Props
{ name: "John" }

// New Props
{ name: "John" }`
          },
          {
            type: "paragraph",
            content: "Result: Props Equal → Skip Re-render."
          },
          {
            type: "paragraph",
            content: "If props differ: Props Changed → Render Component."
          },
          {
            type: "paragraph",
            content: "`React.memo` only affects rendering behavior. It does not affect: State updates, Context updates, Internal component logic."
          }
        ]
      },

      {
        heading: "8. What is a shallow comparison?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A shallow comparison checks whether references are equal rather than deeply inspecting nested values."
          },
          {
            type: "code",
            language: "javascript",
            content: `const obj1 = { name: "John" };
const obj2 = { name: "John" };`
          },
          {
            type: "paragraph",
            content: "Result: `obj1 === obj2` is `false`. Although values appear identical, references differ."
          },
          {
            type: "paragraph",
            content: "`React.memo` uses shallow comparison because: Fast, Efficient, Low Overhead. Deep comparison would be significantly slower."
          }
        ]
      },

      {
        heading: "9. When should React.memo() be used?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.memo` is useful when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component Renders Frequently (Dashboard Widgets, Data Tables, Product Cards)",
              "Rendering Is Expensive (Complex UI calculations)",
              "Props Rarely Change (Component receives mostly static props)",
              "Large Lists (Many child components rendered repeatedly)"
            ]
          },
          {
            type: "paragraph",
            content: "Good optimization targets: Charts, Tables, Cards, Lists, Dashboards."
          }
        ]
      },

      {
        heading: "10. When should React.memo() NOT be used?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Many beginners overuse `React.memo`. Avoid it when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Small Components (`function Label() { return <span>Name</span>; }`)",
              "Frequently Changing Props (Memoization becomes ineffective)",
              "Simple UI (Optimization overhead may exceed benefits)",
              "Premature Optimization (Never optimize without evidence)"
            ]
          },
          {
            type: "paragraph",
            content: "Rule: Measure First, Optimize Second."
          }
        ]
      },

      {
        heading: "11. What is the Virtual DOM?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Virtual DOM is a lightweight JavaScript representation of the real DOM."
          },
          {
            type: "paragraph",
            content: "Instead of directly updating the browser DOM:"
          },
          {
            type: "flow",
            steps: [
              "State Change", "→",
              "Virtual DOM Update", "→",
              "Comparison", "→",
              "Minimal Real DOM Update"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster updates, Better performance, Reduced DOM operations. The Virtual DOM is one of React's core performance features."
          }
        ]
      },

      {
        heading: "12. Why is the Virtual DOM faster than direct DOM manipulation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Real DOM operations are expensive. Every update may require: Layout Calculation, Painting, Reflow, Repaint."
          },
          {
            type: "paragraph",
            content: "React minimizes these operations."
          },
          {
            type: "flow",
            steps: [
              "Old Virtual DOM", "→",
              "New Virtual DOM", "→",
              "Diffing", "→",
              "Update Only Changes"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces expensive browser work. Result: Better Performance, especially in large applications."
          }
        ]
      },

      {
        heading: "13. What is React Reconciliation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is React's process for determining what changed between renders."
          },
          {
            type: "paragraph",
            content: "React compares: Previous Virtual DOM vs New Virtual DOM and identifies: Added Elements, Removed Elements, Changed Elements."
          },
          {
            type: "paragraph",
            content: "Only affected parts are updated. This makes rendering highly efficient."
          }
        ]
      },

      {
        heading: "14. What is the Diffing Algorithm?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Diffing Algorithm is the mechanism React uses during reconciliation."
          },
          {
            type: "paragraph",
            content: "Instead of comparing entire DOM trees (O(n³) Complexity which would be extremely slow), React uses optimized heuristics (O(n) Complexity)."
          },
          {
            type: "paragraph",
            content: "This allows React to efficiently update large UIs. The Diffing Algorithm is a major reason React scales well."
          }
        ]
      },

      {
        heading: "15. Why are Keys important for performance?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Keys help React identify list items efficiently."
          },
          {
            type: "code",
            language: "javascript",
            content: `items.map(item => (
  <Product key={item.id} />
))`
          },
          {
            type: "paragraph",
            content: "Without keys: React Cannot Track Items Properly. Problems: Unnecessary re-renders, Incorrect updates, Lost component state."
          },
          {
            type: "paragraph",
            content: "Keys improve: Diffing Accuracy, Rendering Performance, List Stability."
          }
        ]
      },

      {
        heading: "16. Why should array indexes usually not be used as keys?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Using indexes (`key={index}`) can create problems when items are: Inserted, Removed, Reordered."
          },
          {
            type: "paragraph",
            content: "Example: List [A, B, C]. Insert new item 'X' at start: [X, A, B, C]. Indexes shift. React may mistakenly think items changed."
          },
          {
            type: "paragraph",
            content: "Effects: Unnecessary renders, UI bugs, State loss."
          },
          {
            type: "paragraph",
            content: "Prefer Database IDs or Unique Identifiers whenever possible."
          }
        ]
      },

      {
        heading: "17. What is Code Splitting?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code Splitting is a technique that divides JavaScript into smaller chunks."
          },
          {
            type: "paragraph",
            content: "Without code splitting:"
          },
          {
            type: "flow",
            steps: [
              "Load Entire Application", "→",
              "Huge Bundle", "→",
              "Slower Initial Load"
            ]
          },
          {
            type: "paragraph",
            content: "With code splitting:"
          },
          {
            type: "flow",
            steps: [
              "Load Only Needed Code", "→",
              "Faster Startup"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Smaller downloads, Faster loading, Better user experience. Code splitting is critical for large applications."
          }
        ]
      },

      {
        heading: "18. What are Lazy Loading and React.lazy()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lazy Loading means loading components only when they are needed."
          },
          {
            type: "flow",
            steps: [
              "User Opens Dashboard", "→",
              "Dashboard Code Loads"
            ]
          },
          {
            type: "paragraph",
            content: "React provides `React.lazy()` along with `Suspense`."
          },
          {
            type: "flow",
            steps: [
              "Application Starts", "→",
              "Load Essential Components", "→",
              "User Navigates", "→",
              "Load Additional Components"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Reduced bundle size, Faster initial load, Better scalability, Improved performance on slow networks. Lazy loading is widely used in production React applications."
          }
        ]
      },

      {
        heading: "19. What is Code Splitting in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code Splitting is a performance optimization technique that divides a large JavaScript bundle into smaller chunks."
          },
          {
            type: "paragraph",
            content: "Instead of downloading the entire application at once, users download only the code needed for the current page."
          },
          {
            type: "paragraph",
            content: "Traditional Loading:"
          },
          {
            type: "flow",
            steps: [
              "User Opens App", "→",
              "Downloads Entire Bundle", "→",
              "Application Loads"
            ]
          },
          {
            type: "paragraph",
            content: "Code Splitting:"
          },
          {
            type: "flow",
            steps: [
              "User Opens App", "→",
              "Downloads Required Chunk", "→",
              "Loads Faster"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster initial load time, Smaller bundle sizes, Better user experience, Improved performance on slower networks."
          },
          {
            type: "paragraph",
            content: "Code Splitting is commonly implemented using `React.lazy()` and dynamic imports."
          }
        ]
      },

      {
        heading: "20. What is Lazy Loading in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lazy Loading is the process of loading components only when they are needed."
          },
          {
            type: "paragraph",
            content: "Instead of loading all pages during startup, React loads components when users navigate to them."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Home Page Loaded", "→",
              "About Page Not Loaded Yet", "→",
              "User Opens About Page", "→",
              "About Component Downloads"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster startup time, Reduced network usage, Better scalability, Smaller initial bundle."
          },
          {
            type: "paragraph",
            content: "Lazy loading is especially useful for large applications with many routes."
          }
        ]
      },

      {
        heading: "21. What is React.lazy()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.lazy()` is a React feature used to dynamically import components."
          },
          {
            type: "paragraph",
            content: "It enables automatic code splitting by loading components only when required."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Route Requested", "→",
              "React.lazy()", "→",
              "Downloads Component", "→",
              "Renders Component"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Automatic code splitting, Smaller bundle size, Faster initial rendering."
          },
          {
            type: "paragraph",
            content: "`React.lazy` is commonly used with routing systems in modern React applications."
          }
        ]
      },

      {
        heading: "22. Why is Suspense Used with React.lazy()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Since lazy-loaded components require time to download, React needs something to display while loading."
          },
          {
            type: "paragraph",
            content: "Suspense provides a fallback UI during this loading period."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Component Requested", "→",
              "Downloading...", "→",
              "Fallback UI Shown", "→",
              "Component Loaded", "→",
              "Actual UI Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Common fallback examples: Loading..., Spinner, Skeleton Screen, Progress Indicator."
          },
          {
            type: "paragraph",
            content: "Suspense improves user experience during asynchronous loading."
          }
        ]
      },

      {
        heading: "23. What is Bundle Size and Why Does It Matter?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Bundle size refers to the total amount of JavaScript, CSS, and assets downloaded by the browser."
          },
          {
            type: "paragraph",
            content: "Large bundles cause: Slow page loads, Increased bandwidth usage, Poor mobile performance, Longer startup times."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Small Bundle → Fast Download → Fast Rendering",
              "Large Bundle → Slow Download → Slow Rendering"
            ]
          },
          {
            type: "paragraph",
            content: "Reducing bundle size is one of the most effective ways to improve React performance."
          }
        ]
      },

      {
        heading: "24. How Can Bundle Size Be Reduced in React Applications?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Several techniques help reduce bundle size:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Code splitting",
              "Lazy loading",
              "Tree shaking",
              "Removing unused libraries",
              "Using lighter alternatives",
              "Asset optimization",
              "Compressing images"
            ]
          },
          {
            type: "paragraph",
            content: "Developers should regularly analyze bundles to identify unnecessary code. Smaller bundles lead directly to better application performance."
          }
        ]
      },

      {
        heading: "25. What is Tree Shaking?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Tree Shaking is a build optimization process that removes unused code from the final production bundle."
          },
          {
            type: "paragraph",
            content: "Imagine importing a library containing 100 functions. If only 5 functions are used:"
          },
          {
            type: "tree",
            content: `Library
├── Function A ✅
├── Function B ✅
├── Function C ❌
├── Function D ❌
└── Function E ❌`
          },
          {
            type: "paragraph",
            content: "Tree shaking removes the unused functions."
          },
          {
            type: "paragraph",
            content: "Benefits: Smaller bundle size, Faster downloads, Better performance."
          },
          {
            type: "paragraph",
            content: "Modern build tools like Vite, Webpack, and Rollup support tree shaking automatically."
          }
        ]
      },

      {
        heading: "26. What is Virtualization in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Virtualization is a technique used when rendering very large lists."
          },
          {
            type: "paragraph",
            content: "Instead of rendering thousands of items simultaneously, React renders only the items currently visible on the screen."
          },
          {
            type: "paragraph",
            content: "Without Virtualization:"
          },
          {
            type: "flow",
            steps: [
              "10,000 Items", "→",
              "10,000 DOM Elements", "→",
              "Slow Performance"
            ]
          },
          {
            type: "paragraph",
            content: "With Virtualization:"
          },
          {
            type: "flow",
            steps: [
              "10,000 Items", "→",
              "Only Visible Items Rendered", "→",
              "Fast Performance"
            ]
          },
          {
            type: "paragraph",
            content: "Popular libraries include: `react-window`, `react-virtualized`."
          },
          {
            type: "paragraph",
            content: "Virtualization is critical for data-heavy applications."
          }
        ]
      },

      {
        heading: "27. Why Are Keys Important for Performance?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Keys help React identify which list items have changed."
          },
          {
            type: "paragraph",
            content: "Without proper keys:"
          },
          {
            type: "flow",
            steps: [
              "List Changes", "→",
              "React Re-renders More Items", "→",
              "Extra Work"
            ]
          },
          {
            type: "paragraph",
            content: "With proper keys:"
          },
          {
            type: "flow",
            steps: [
              "List Changes", "→",
              "React Detects Exact Changes", "→",
              "Minimal Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster reconciliation, Reduced DOM updates, Better rendering performance."
          },
          {
            type: "paragraph",
            content: "Keys should always be unique and stable. Using array indexes as keys is usually discouraged because it can cause inefficient updates."
          }
        ]
      },

      {
        heading: "28. What is the React Profiler?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Profiler is a performance analysis tool used to measure rendering behavior."
          },
          {
            type: "paragraph",
            content: "It helps developers identify: Slow components, Frequent re-renders, Performance bottlenecks, Expensive rendering operations."
          },
          {
            type: "paragraph",
            content: "The profiler shows:"
          },
          {
            type: "flow",
            steps: [
              "Component Rendered", "→",
              "Render Duration", "→",
              "Why It Rendered", "→",
              "Performance Analysis"
            ]
          },
          {
            type: "paragraph",
            content: "Common insights include: Which component is slow, How often components render, Whether optimizations are working."
          },
          {
            type: "paragraph",
            content: "React Profiler is one of the most valuable tools for diagnosing performance issues in real-world React applications."
          }
        ]
      },

      {
        heading: "Part 5: Routing → Forms → Events Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is Routing in React?"
          },
          {
            type: "paragraph",
            content: "Answer: Routing is the process of navigating between different pages or views in a React application without reloading the entire webpage."
          },
          {
            type: "paragraph",
            content: "In traditional websites:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "Browser Requests New Page", "→",
              "Entire Page Reloads"
            ]
          },
          {
            type: "paragraph",
            content: "In React:"
          },
          {
            type: "flow",
            steps: [
              "User Clicks Link", "→",
              "React Router Updates URL", "→",
              "Required Component Renders"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster navigation, Better user experience, No full page refresh, Single Page Application (SPA) behavior."
          },
          {
            type: "paragraph",
            content: "Routing is typically handled using React Router."
          }
        ]
      },

      {
        heading: "2. What is React Router?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Router is the most popular routing library for React applications."
          },
          {
            type: "paragraph",
            content: "It enables developers to: Create multiple pages, Handle navigation, Manage URLs, Build Single Page Applications."
          },
          {
            type: "paragraph",
            content: "React Router maps URLs to React components. Example:"
          },
          {
            type: "output",
            content: [
              "/          → Home",
              "/about     → About",
              "/contact   → Contact",
              "/profile   → Profile"
            ]
          },
          {
            type: "paragraph",
            content: "When the URL changes, React Router displays the appropriate component."
          }
        ]
      },

      {
        heading: "3. What is a Single Page Application (SPA)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Single Page Application (SPA) loads a single HTML page and dynamically updates content without refreshing the browser."
          },
          {
            type: "paragraph",
            content: "Traditional Website:"
          },
          {
            type: "flow",
            steps: [
              "Page Request", "→",
              "Server Sends New HTML", "→",
              "Page Reload"
            ]
          },
          {
            type: "paragraph",
            content: "SPA:"
          },
          {
            type: "flow",
            steps: [
              "Application Loads Once", "→",
              "React Updates UI", "→",
              "No Full Reload"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster navigation, Better user experience, Reduced server requests, Smoother interactions. React applications are commonly built as SPAs."
          }
        ]
      },

      {
        heading: "4. What is BrowserRouter?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `BrowserRouter` is a React Router component that enables routing using the browser's History API."
          },
          {
            type: "paragraph",
            content: "Responsibilities: Monitors URL changes, Maintains navigation history, Enables back and forward buttons, Synchronizes UI with URL."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Browser URL Changes", "→",
              "BrowserRouter Detects Change", "→",
              "Matching Route Found", "→",
              "Component Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Most React applications wrap the entire app inside `BrowserRouter`."
          }
        ]
      },

      {
        heading: "5. What is a Route?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Route defines which component should render for a specific URL path."
          },
          {
            type: "table",
            headers: ["Path", "Component"],
            rows: [
              ["/", "Home"],
              ["/about", "About"],
              ["/contact", "Contact"]
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Visits URL", "→",
              "Route Matches Path", "→",
              "Component Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Routes form the foundation of React navigation systems."
          }
        ]
      },

      {
        heading: "6. What is the Routes Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `Routes` is a container that holds multiple `Route` components. Its job is to find the best matching route and render it."
          },
          {
            type: "paragraph",
            content: "Example logic:"
          },
          {
            type: "flow",
            steps: [
              "Current URL", "→",
              "Routes Checks All Routes", "→",
              "Best Match Found", "→",
              "Component Displayed"
            ]
          },
          {
            type: "paragraph",
            content: "Without `Routes`, React Router would not know which page should appear."
          }
        ]
      },

      {
        heading: "7. What is the Difference Between Link and Anchor Tags?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Anchor Tag `<a>` Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Click Link", "→",
              "Full Page Reload"
            ]
          },
          {
            type: "paragraph",
            content: "React Router Link `<Link>` Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Click Link", "→",
              "React Handles Navigation", "→",
              "No Reload"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages of Link: Faster navigation, Preserves application state, Better SPA experience. In React applications, Link should usually be preferred over traditional anchor tags."
          }
        ]
      },

      {
        heading: "8. What is useNavigate?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useNavigate` is a React Router Hook used for programmatic navigation."
          },
          {
            type: "paragraph",
            content: "Instead of users clicking links, navigation can happen through code. Common use cases: Redirect after login, Redirect after form submission, Logout redirection, Protected route redirection."
          },
          {
            type: "paragraph",
            content: "Example flow:"
          },
          {
            type: "flow",
            steps: [
              "Login Successful", "→",
              "useNavigate()", "→",
              "Dashboard Opens"
            ]
          },
          {
            type: "paragraph",
            content: "This allows navigation based on application logic."
          }
        ]
      },

      {
        heading: "9. What are URL Parameters in React Router?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: URL Parameters are dynamic values embedded inside URLs."
          },
          {
            type: "output",
            content: [
              "/product/101",
              "/product/102",
              "/product/103"
            ]
          },
          {
            type: "paragraph",
            content: "Here `101`, `102`, `103` are route parameters."
          },
          {
            type: "paragraph",
            content: "Benefits: Dynamic pages, Reusable routes, Better scalability."
          },
          {
            type: "paragraph",
            content: "Common use cases: Product details, User profiles, Blog posts, Order information."
          }
        ]
      },

      {
        heading: "10. What is useParams?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useParams` is a React Router Hook that retrieves values from dynamic URL parameters."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "URL", "→",
              "/user/45", "→",
              "useParams()", "→",
              "45 Retrieved"
            ]
          },
          {
            type: "paragraph",
            content: "Common uses: Fetching user profiles, Product details pages, Blog article pages, Dynamic dashboards. It enables components to react to changing URL values."
          }
        ]
      },

      {
        heading: "11. What are Nested Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Nested Routes allow routes to exist inside other routes."
          },
          {
            type: "tree",
            content: `Dashboard
├── Profile
├── Settings
├── Orders
└── Analytics`
          },
          {
            type: "paragraph",
            content: "URL Structure:"
          },
          {
            type: "output",
            content: [
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Better organization, Modular routing, Cleaner architecture. Nested routes are commonly used in admin panels and dashboards."
          }
        ]
      },

      {
        heading: "12. What are Protected Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Protected Routes restrict access to authenticated users."
          },
          {
            type: "tree",
            content: `Public Pages
├── Home
├── Login
└── Register

Protected Pages
├── Dashboard
├── Orders
└── Profile`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Requests Dashboard", "→",
              "Authentication Checked", "→",
              "Allowed OR Redirected"
            ]
          },
          {
            type: "paragraph",
            content: "Protected routes improve application security and user access control."
          }
        ]
      },

      {
        heading: "13. What is a Form in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A form is a collection of input elements used to collect information from users."
          },
          {
            type: "paragraph",
            content: "Common form elements: Text fields, Password fields, Checkboxes, Radio buttons, Dropdowns, Text areas."
          },
          {
            type: "paragraph",
            content: "Examples: Login Form, Registration Form, Contact Form, Payment Form."
          },
          {
            type: "paragraph",
            content: "Forms are one of the most common UI features in React applications."
          }
        ]
      },

      {
        heading: "14. What are Controlled Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Controlled Components are form elements whose values are controlled by React state."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Types", "→",
              "State Updates", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Characteristics: React controls form data, Single source of truth, Easier validation, Easier debugging. Most modern React forms use controlled components."
          }
        ]
      },

      {
        heading: "15. What are Uncontrolled Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Uncontrolled Components store form data inside the DOM instead of React state."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Types", "→",
              "DOM Stores Value", "→",
              "Value Retrieved Later"
            ]
          },
          {
            type: "paragraph",
            content: "Characteristics: Less React involvement, Simpler for small forms, Uses refs frequently. While useful in some situations, controlled components are generally preferred."
          }
        ]
      },

      {
        heading: "16. What is Form Validation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Form Validation ensures that user input meets required rules before submission."
          },
          {
            type: "paragraph",
            content: "Examples: Email Required, Password Minimum Length, Phone Number Format, Required Fields."
          },
          {
            type: "paragraph",
            content: "Validation Types: Client-side validation, Server-side validation."
          },
          {
            type: "paragraph",
            content: "Benefits: Better data quality, Improved security, Better user experience, Reduced backend errors. Validation is essential for production applications."
          }
        ]
      },

      {
        heading: "17. Why Should Form Validation Not Rely Only on the Frontend?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Frontend validation improves user experience but can be bypassed."
          },
          {
            type: "flow",
            steps: [
              "User Manipulates Request", "→",
              "Invalid Data Sent"
            ]
          },
          {
            type: "paragraph",
            content: "Therefore: Frontend Validation + Backend Validation Both should exist."
          },
          {
            type: "paragraph",
            content: "Reasons: Security, Data integrity, Prevent malicious input, Protect database consistency. Professional applications always validate on the server."
          }
        ]
      },

      {
        heading: "18. What are Events in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Events are actions triggered by user interactions."
          },
          {
            type: "paragraph",
            content: "Examples: Click, Double Click, Input Change, Form Submission, Key Press, Mouse Movement."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Event Triggered", "→",
              "Event Handler Executes", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Events make React applications interactive and dynamic. Without events, applications would be static and unable to respond to user actions."
          }
        ]
      },

      {
        heading: "19. What is an Event Handler in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An Event Handler is a function that executes when a specific event occurs."
          },
          {
            type: "paragraph",
            content: "Examples: Button click, Form submission, Input change, Mouse hover, Keyboard press."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Event Occurs", "→",
              "Event Handler Executes", "→",
              "Application Responds"
            ]
          },
          {
            type: "paragraph",
            content: "Event handlers allow React applications to react to user interactions. Without event handlers, events would occur but no action would be performed."
          }
        ]
      },

      {
        heading: "20. What is SyntheticEvent in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React wraps native browser events inside an object called `SyntheticEvent`."
          },
          {
            type: "paragraph",
            content: "Purpose: Provides consistent behavior across browsers, Simplifies event handling, Normalizes browser differences."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Browser Event", "→",
              "React SyntheticEvent", "→",
              "Developer Uses Event Object"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Cross-browser compatibility, Predictable behavior, Easier development. Most React developers interact with SyntheticEvents without even realizing it."
          }
        ]
      },

      {
        heading: "21. What is the Difference Between onClick and onclick?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: In HTML: `onclick`. In React: `onClick`."
          },
          {
            type: "paragraph",
            content: "React follows camelCase naming conventions for events."
          },
          {
            type: "table",
            headers: ["HTML (Incorrect in React)", "React (Correct)"],
            rows: [
              ["onclick", "onClick"],
              ["onchange", "onChange"]
            ]
          },
          {
            type: "paragraph",
            content: "Using the correct React event naming convention is important for event handling to work properly."
          }
        ]
      },

      {
        heading: "22. What is preventDefault()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `preventDefault()` stops the browser's default behavior for an event."
          },
          {
            type: "paragraph",
            content: "Example: Form submission normally causes: Submit Form → Page Reload."
          },
          {
            type: "paragraph",
            content: "Using `preventDefault()`:"
          },
          {
            type: "flow",
            steps: [
              "Submit Form", "→",
              "Prevent Default Action", "→",
              "React Handles Submission"
            ]
          },
          {
            type: "paragraph",
            content: "Common use cases: Form submissions, Link clicks, Drag-and-drop operations."
          }
        ]
      },

      {
        heading: "23. Why is preventDefault() Commonly Used in Forms?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: By default, form submission refreshes the browser page."
          },
          {
            type: "paragraph",
            content: "In React applications: User Submits Form → Page Reload → Application State Lost."
          },
          {
            type: "paragraph",
            content: "Using `preventDefault()`: User Submits Form → No Reload → React Processes Data."
          },
          {
            type: "paragraph",
            content: "Benefits: Preserves state, Enables API requests, Improves user experience, Supports SPA behavior. Most React forms use `preventDefault()` during submission."
          }
        ]
      },

      {
        heading: "24. What is Event Propagation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Event Propagation describes how events travel through the DOM hierarchy."
          },
          {
            type: "tree",
            content: `Parent
 └── Child
      └── Button`
          },
          {
            type: "paragraph",
            content: "When the button is clicked:"
          },
          {
            type: "flow",
            steps: [
              "Button Click", "→",
              "Parent Receives Event", "→",
              "Higher Ancestors Receive Event"
            ]
          },
          {
            type: "paragraph",
            content: "This propagation behavior allows multiple elements to react to the same event. Understanding propagation is important for handling complex user interfaces."
          }
        ]
      },

      {
        heading: "25. What is Event Bubbling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Event Bubbling is the default event propagation behavior."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Button Clicked", "→",
              "Button Handler", "→",
              "Parent Handler", "→",
              "Grandparent Handler"
            ]
          },
          {
            type: "paragraph",
            content: "The event starts at the target element and moves upward through ancestors."
          },
          {
            type: "paragraph",
            content: "Example: Button → Card → Container → App."
          },
          {
            type: "paragraph",
            content: "Bubbling is commonly used for event delegation and centralized event handling."
          }
        ]
      },

      {
        heading: "26. What is stopPropagation()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `stopPropagation()` prevents an event from continuing its propagation path."
          },
          {
            type: "paragraph",
            content: "Without `stopPropagation()`: Button Click → Parent Triggered → Grandparent Triggered."
          },
          {
            type: "paragraph",
            content: "With `stopPropagation()`: Button Click → Button Handler Only."
          },
          {
            type: "paragraph",
            content: "Use cases: Nested clickable elements, Modal dialogs, Dropdown menus, Interactive cards. It provides greater control over event behavior."
          }
        ]
      },

      {
        heading: "27. What is Event Delegation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Event Delegation is a technique where a parent element handles events for its children."
          },
          {
            type: "paragraph",
            content: "Instead of: 100 Buttons → 100 Event Handlers."
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "flow",
            steps: [
              "Parent Container", "→",
              "1 Event Handler", "→",
              "Handles Child Events"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Better performance, Less memory usage, Cleaner code, Easier maintenance. React internally uses delegation extensively for event management."
          }
        ]
      },

      {
        heading: "28. What is useLocation in React Router?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useLocation` is a React Router Hook that provides information about the current URL."
          },
          {
            type: "paragraph",
            content: "It can provide: Current pathname, Search parameters, Navigation state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Current URL (/products/101)", "→",
              "useLocation()", "→",
              "Location Information Available"
            ]
          },
          {
            type: "paragraph",
            content: "Common uses: Analytics tracking, Active navigation highlighting, Conditional rendering, Breadcrumb generation."
          }
        ]
      },

      {
        heading: "29. What is useSearchParams?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useSearchParams` is a React Router Hook used to read and update URL query parameters."
          },
          {
            type: "paragraph",
            content: "Example URL: `/products?category=mobile&page=2`"
          },
          {
            type: "paragraph",
            content: "Query Parameters: `category = mobile`, `page = 2`"
          },
          {
            type: "paragraph",
            content: "Benefits: Shareable filters, Search functionality, Pagination support, Better user experience. It helps synchronize application state with the URL."
          }
        ]
      },

      {
        heading: "30. What is Programmatic Navigation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Programmatic Navigation means changing routes through JavaScript logic instead of user clicks."
          },
          {
            type: "paragraph",
            content: "Example scenarios: Login success redirect, Logout redirect, Payment success page, Error page redirection."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Business Logic Executes", "→",
              "Navigation Triggered", "→",
              "User Redirected"
            ]
          },
          {
            type: "paragraph",
            content: "In React Router, this is commonly achieved using `useNavigate()`."
          }
        ]
      },

      {
        heading: "31. What is Form Submission Flow in a Modern React Application?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A typical React form submission follows:"
          },
          {
            type: "flow",
            steps: [
              "User Fills Form", "→",
              "Validation Runs", "→",
              "Submit Clicked", "→",
              "preventDefault()", "→",
              "API Request Sent", "→",
              "Server Response Received", "→",
              "Success or Error Displayed"
            ]
          },
          {
            type: "paragraph",
            content: "This flow allows React to control the entire process without page reloads. Modern applications heavily rely on this pattern."
          }
        ]
      },

      {
        heading: "32. What is Real-Time Form Validation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Real-time validation checks user input while typing rather than waiting for submission."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Types Email", "→",
              "Validation Runs Immediately", "→",
              "Error or Success Feedback Shown"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster feedback, Better user experience, Reduced submission errors, Improved accessibility."
          }
        ]
      },

      {
        heading: "33. What is Debouncing in Form Inputs?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Debouncing delays execution until the user stops typing."
          },
          {
            type: "paragraph",
            content: "Without Debouncing: Typing → API Call → Typing → API Call → Typing → API Call"
          },
          {
            type: "paragraph",
            content: "With Debouncing: Typing → Wait → User Stops → Single API Call"
          },
          {
            type: "paragraph",
            content: "Benefits: Reduced server load, Better performance, Improved search experiences. Debouncing is commonly used in search bars and autocomplete fields."
          }
        ]
      },

      {
        heading: "34. What is the Difference Between Client-Side and Server-Side Validation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Client-Side Validation: Browser Checks Input. Examples: Required fields, Password length, Email format."
          },
          {
            type: "paragraph",
            content: "Server-Side Validation: Server Checks Input. Examples: Existing username, Authorization checks, Database constraints."
          },
          {
            type: "table",
            headers: ["Feature", "Client Side", "Server Side"],
            rows: [
              ["Speed", "Faster", "Slower (Requires Network)"],
              ["Security", "Can Be Bypassed", "More Secure"],
              ["User Experience", "Better UX (Instant)", "Delayed feedback"],
              ["Reliability", "Cannot Be Trusted Alone", "More Reliable"]
            ]
          },
          {
            type: "paragraph",
            content: "Professional applications use both."
          }
        ]
      },

      {
        heading: "35. What Are Common Form Security Risks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common security risks include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SQL Injection",
              "XSS (Cross-Site Scripting)",
              "CSRF Attacks",
              "Invalid Input Submission",
              "Malicious File Uploads"
            ]
          },
          {
            type: "paragraph",
            content: "Protection techniques: Input validation, Input sanitization, Authentication, Authorization, Server-side checks."
          },
          {
            type: "paragraph",
            content: "Security should never rely solely on frontend validation."
          }
        ]
      },

      {
        heading: "36. Explain the Complete Relationship Between Routing, Forms, and Events in React.",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Routing, Forms, and Events work together to create interactive React applications."
          },
          {
            type: "paragraph",
            content: "Example flow:"
          },
          {
            type: "flow",
            steps: [
              "User Visits Login Route", "→",
              "Form Displayed", "→",
              "User Enters Credentials", "→",
              "Input Events Trigger", "→",
              "State Updates", "→",
              "Form Submitted", "→",
              "Validation Runs", "→",
              "API Request Sent", "→",
              "Authentication Success", "→",
              "Programmatic Navigation", "→",
              "Dashboard Route Opens"
            ]
          },
          {
            type: "paragraph",
            content: "This workflow represents one of the most common real-world React application patterns. Understanding how routing, forms, and events interact is essential for building professional React applications."
          }
        ]
      },

      {
        heading: "Part 6: State Management Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is State in React?"
          },
          {
            type: "paragraph",
            content: "Answer: State is a built-in React mechanism used to store and manage data that can change over time."
          },
          {
            type: "paragraph",
            content: "When state changes, React automatically re-renders the component and updates the UI."
          },
          {
            type: "paragraph",
            content: "Examples of state:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Counter values",
              "Form inputs",
              "User information",
              "API responses",
              "Theme settings",
              "Modal visibility"
            ]
          },
          {
            type: "paragraph",
            content: "State makes React applications dynamic and interactive."
          }
        ]
      },

      {
        heading: "2. What is the difference between State and Props?",
        blocks: [
          {
            type: "table",
            headers: ["State", "Props"],
            rows: [
              ["Managed inside component", "Passed from parent component"],
              ["Mutable", "Immutable"],
              ["Can change over time", "Read-only"],
              ["Causes re-render when updated", "Causes re-render when received value changes"],
              ["Component owns it", "Parent owns it"]
            ]
          },
          {
            type: "paragraph",
            content: "State represents internal component data, while props represent external data received from another component."
          }
        ]
      },

      {
        heading: "3. What is useState?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useState` is a React Hook that allows Functional Components to create and manage state."
          },
          {
            type: "paragraph",
            content: "It returns: Current state value, State updater function."
          },
          {
            type: "paragraph",
            content: "Whenever the updater function runs, React schedules a re-render. It is the most commonly used React Hook."
          }
        ]
      },

      {
        heading: "4. Why doesn't React update state immediately?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State updates are asynchronous."
          },
          {
            type: "paragraph",
            content: "React batches multiple updates together to improve performance and avoid unnecessary re-renders."
          },
          {
            type: "paragraph",
            content: "Example: A state update request is queued. React then processes updates efficiently and performs a re-render. This behavior improves application performance."
          }
        ]
      },

      {
        heading: "5. What is state batching?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State batching is React's optimization technique where multiple state updates are grouped together and processed in a single render cycle."
          },
          {
            type: "paragraph",
            content: "Benefits: Fewer re-renders, Better performance, Reduced DOM operations."
          },
          {
            type: "paragraph",
            content: "Modern React automatically batches updates in most situations."
          }
        ]
      },

      {
        heading: "6. What happens when state changes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: When state changes:"
          },
          {
            type: "flow",
            steps: [
              "State Update", "→",
              "React Schedules Update", "→",
              "Component Re-renders", "→",
              "Virtual DOM Updated", "→",
              "Diffing Process", "→",
              "Real DOM Updated"
            ]
          },
          {
            type: "paragraph",
            content: "React updates only the parts of the UI that actually changed."
          }
        ]
      },

      {
        heading: "7. What is local state?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Local state belongs to a specific component."
          },
          {
            type: "paragraph",
            content: "Only that component can directly manage and update it."
          },
          {
            type: "paragraph",
            content: "Examples: Input field value, Toggle switch, Modal open/close state, Counter value."
          },
          {
            type: "paragraph",
            content: "Local state is ideal when data is needed by only one component."
          }
        ]
      },

      {
        heading: "8. What is global state?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Global state is shared across multiple components."
          },
          {
            type: "paragraph",
            content: "Instead of storing the same data in many places, it is centralized and accessible throughout the application."
          },
          {
            type: "paragraph",
            content: "Examples: Logged-in user, Theme settings, Shopping cart, Language preference, Notifications."
          },
          {
            type: "paragraph",
            content: "Global state prevents excessive prop drilling."
          }
        ]
      },

      {
        heading: "9. What is prop drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Prop drilling occurs when data must pass through multiple intermediate components just to reach a deeply nested child."
          },
          {
            type: "tree",
            content: `App
 ↓
Dashboard
 ↓
Profile
 ↓
Settings
 ↓
UserInfo`
          },
          {
            type: "paragraph",
            content: "Even if only UserInfo needs the data, every intermediate component must pass it down."
          },
          {
            type: "paragraph",
            content: "Problems: Verbose code, Harder maintenance, Poor scalability."
          }
        ]
      },

      {
        heading: "10. How does Context API solve prop drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Context API allows data to be shared directly with any descendant component."
          },
          {
            type: "paragraph",
            content: "Instead of: Parent → Child → Grandchild → GreatGrandchild"
          },
          {
            type: "paragraph",
            content: "React provides:"
          },
          {
            type: "flow",
            steps: [
              "Provider", "→",
              "Any Component Can Access Data"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Cleaner code, Easier state sharing, Less prop passing."
          }
        ]
      },

      {
        heading: "11. What is React Context API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Context API is React's built-in global state management solution."
          },
          {
            type: "paragraph",
            content: "It consists of:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Context creation",
              "Provider",
              "Consumer",
              "useContext Hook"
            ]
          },
          {
            type: "paragraph",
            content: "It allows components to access shared data without manually passing props."
          }
        ]
      },

      {
        heading: "12. When should Context API be used?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Good use cases: Authentication state, Theme switching, User preferences, Language settings, Notification systems."
          },
          {
            type: "paragraph",
            content: "Avoid using Context for extremely frequently changing data."
          }
        ]
      },

      {
        heading: "13. What are the limitations of Context API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common limitations:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Entire consumer tree may re-render",
              "Performance issues in large applications",
              "Difficult debugging in complex state structures",
              "Not ideal for highly dynamic state"
            ]
          },
          {
            type: "paragraph",
            content: "For larger applications, dedicated state libraries are often preferred."
          }
        ]
      },

      {
        heading: "14. What is Redux?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Redux is a predictable state management library."
          },
          {
            type: "paragraph",
            content: "It stores application state in a centralized store. All state updates follow a predictable pattern."
          },
          {
            type: "paragraph",
            content: "Core idea:"
          },
          {
            type: "flow",
            steps: [
              "Action", "→",
              "Reducer", "→",
              "Store Updated", "→",
              "UI Updated"
            ]
          },
          {
            type: "paragraph",
            content: "Redux provides better control over complex application state."
          }
        ]
      },

      {
        heading: "15. Why was Redux created?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Redux was designed to solve challenges such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prop drilling",
              "Complex shared state",
              "State synchronization",
              "Debugging state changes"
            ]
          },
          {
            type: "paragraph",
            content: "It introduced predictable state management for large applications."
          }
        ]
      },

      {
        heading: "16. What is a Redux Store?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Store is the central container that holds application state."
          },
          {
            type: "paragraph",
            content: "Think of it as a single source of truth."
          },
          {
            type: "paragraph",
            content: "Example data stored: User details, Cart items, Theme settings, API data."
          },
          {
            type: "paragraph",
            content: "All Redux-managed state resides inside the store."
          }
        ]
      },

      {
        heading: "17. What is an Action in Redux?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An Action is a plain JavaScript object describing what happened."
          },
          {
            type: "paragraph",
            content: "Examples: `LOGIN_USER`, `ADD_PRODUCT`, `REMOVE_ITEM`, `UPDATE_PROFILE`."
          },
          {
            type: "paragraph",
            content: "Actions do not change state directly. They simply describe intended changes."
          }
        ]
      },

      {
        heading: "18. What is a Reducer?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Reducer is a pure function that determines how state changes."
          },
          {
            type: "paragraph",
            content: "Responsibilities: Receive current state, Receive action, Return new state."
          },
          {
            type: "paragraph",
            content: "Reducers never mutate existing state. They always return a new state object."
          }
        ]
      },

      {
        heading: "19. Why must Redux Reducers be pure functions?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Pure functions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Produce same output for same input",
              "Have no side effects",
              "Are predictable"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Easier testing, Easier debugging, Consistent behavior."
          },
          {
            type: "paragraph",
            content: "Redux heavily relies on predictable updates."
          }
        ]
      },

      {
        heading: "20. What is Redux Toolkit (RTK)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Redux Toolkit is the official recommended way to use Redux."
          },
          {
            type: "paragraph",
            content: "It simplifies: Store configuration, Reducer creation, Action creation, Async operations."
          },
          {
            type: "paragraph",
            content: "Benefits: Less boilerplate, Faster development, Cleaner code."
          },
          {
            type: "paragraph",
            content: "Today, Redux Toolkit is preferred over traditional Redux."
          }
        ]
      },

      {
        heading: "21. Why is Redux Toolkit preferred over traditional Redux?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Traditional Redux required: Action types, Action creators, Reducers, Store setup."
          },
          {
            type: "paragraph",
            content: "Redux Toolkit automates much of this process."
          },
          {
            type: "paragraph",
            content: "Advantages: Less code, Better developer experience, Easier maintenance, Industry standard."
          }
        ]
      },

      {
        heading: "22. What is Zustand?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Zustand is a lightweight state management library."
          },
          {
            type: "paragraph",
            content: "Features: Minimal boilerplate, Easy setup, Fast performance, Simple API."
          },
          {
            type: "paragraph",
            content: "Many developers prefer Zustand for medium-sized React applications."
          }
        ]
      },

      {
        heading: "23. How is Zustand different from Redux?",
        blocks: [
          {
            type: "table",
            headers: ["Redux", "Zustand"],
            rows: [
              ["More boilerplate", "Minimal boilerplate"],
              ["Complex setup", "Easy setup"],
              ["Strict architecture", "Flexible architecture"],
              ["Larger ecosystem", "Lightweight"],
              ["Better for enterprise apps", "Great for small-medium apps"]
            ]
          },
          {
            type: "paragraph",
            content: "Both are valid choices depending on project size."
          }
        ]
      },

      {
        heading: "24. What is Recoil?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Recoil is a state management library developed by Meta."
          },
          {
            type: "paragraph",
            content: "It introduces: Atoms, Selectors."
          },
          {
            type: "paragraph",
            content: "Benefits: Fine-grained updates, Better performance, Simpler state sharing. It integrates naturally with React."
          }
        ]
      },

      {
        heading: "25. What is Server State?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Server state is data that originates from a backend server."
          },
          {
            type: "paragraph",
            content: "Examples: User profiles, Product lists, Orders, Notifications."
          },
          {
            type: "paragraph",
            content: "Characteristics: Stored remotely, Requires fetching, Needs synchronization."
          }
        ]
      },

      {
        heading: "26. What is Client State?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Client state exists entirely inside the browser."
          },
          {
            type: "paragraph",
            content: "Examples: Modal visibility, Input values, Theme selection, Sidebar state."
          },
          {
            type: "paragraph",
            content: "No backend involvement is required."
          }
        ]
      },

      {
        heading: "27. Why should Server State and Client State be treated differently?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Server state introduces additional challenges: Caching, Refetching, Synchronization, Stale data management."
          },
          {
            type: "paragraph",
            content: "Client state typically changes only within the browser."
          },
          {
            type: "paragraph",
            content: "Different problems require different solutions."
          }
        ]
      },

      {
        heading: "28. What is React Query (TanStack Query)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Query is a server-state management library."
          },
          {
            type: "paragraph",
            content: "Features: Data fetching, Caching, Background updates, Automatic refetching, Error handling."
          },
          {
            type: "paragraph",
            content: "It simplifies working with APIs significantly."
          }
        ]
      },

      {
        heading: "29. Why is React Query often preferred over Redux for API data?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Redux stores data. React Query manages data lifecycle."
          },
          {
            type: "paragraph",
            content: "Features provided automatically: Caching, Loading states, Refetching, Retry logic, Stale data handling."
          },
          {
            type: "paragraph",
            content: "This reduces custom code considerably."
          }
        ]
      },

      {
        heading: "30. What is the Single Source of Truth principle?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Single Source of Truth means state should exist in one authoritative location."
          },
          {
            type: "paragraph",
            content: "Benefits: Consistency, Easier debugging, Predictable behavior, Reduced duplication."
          },
          {
            type: "paragraph",
            content: "Redux strongly follows this principle."
          }
        ]
      },

      {
        heading: "31. What is State Lifting?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State lifting means moving state to the nearest common parent component."
          },
          {
            type: "tree",
            content: `Parent
 ├── Child A
 └── Child B`
          },
          {
            type: "paragraph",
            content: "If both children need the same data, state is moved to Parent. This enables shared access."
          }
        ]
      },

      {
        heading: "32. What are common State Management mistakes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common mistakes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Storing unnecessary state",
              "Duplicating state",
              "Excessive prop drilling",
              "Overusing Context",
              "Mutating state directly",
              "Using global state for local problems"
            ]
          },
          {
            type: "paragraph",
            content: "These can make applications harder to maintain."
          }
        ]
      },

      {
        heading: "33. How do you decide whether state should be local or global?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Use local state when: Only one component needs data."
          },
          {
            type: "paragraph",
            content: "Use global state when: Multiple unrelated components need access."
          },
          {
            type: "paragraph",
            content: "Rule: Keep state as local as possible, but as global as necessary."
          }
        ]
      },

      {
        heading: "34. What is state normalization?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State normalization means storing data in a structured, non-duplicated format."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster updates, Easier maintenance, Better performance."
          },
          {
            type: "paragraph",
            content: "Large Redux applications often normalize complex data."
          }
        ]
      },

      {
        heading: "35. What is the best state management solution in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: There is no universal answer. Common choices:"
          },
          {
            type: "table",
            headers: ["Scenario", "Recommended Solution"],
            rows: [
              ["Simple local data", "useState"],
              ["Shared app-wide data", "Context API"],
              ["Medium applications", "Zustand"],
              ["Large enterprise apps", "Redux Toolkit"],
              ["API data management", "React Query"]
            ]
          },
          {
            type: "paragraph",
            content: "The best choice depends on project requirements."
          }
        ]
      },

      {
        heading: "36. How would you answer \"Explain React State Management\" in an interview?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A strong answer:"
          },
          {
            type: "quote",
            content: "State management is the process of storing, updating, and sharing application data efficiently. React provides local state through useState and shared state through Context API. For larger applications, libraries such as Redux Toolkit, Zustand, and Recoil help manage global state more effectively. For server-side data, tools like React Query handle fetching, caching, synchronization, and background updates. The goal of state management is to keep UI and data synchronized while maintaining scalability, performance, and maintainability."
          }
        ]
      },

      {
        heading: "DevSphere Interview Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common mistake in interviews is assuming Redux is the answer to every state management problem. Strong React developers understand that modern React offers multiple solutions—useState, Context API, Redux Toolkit, Zustand, Recoil, and React Query—and they choose the right tool based on the scale and nature of the application's state rather than using one solution everywhere."
          }
        ]
      },

      {
        heading: "Part 7: React Architecture & Advanced Concepts Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is React Architecture?"
          },
          {
            type: "paragraph",
            content: "Answer: React Architecture refers to the overall structure and design principles used to build React applications."
          },
          {
            type: "paragraph",
            content: "React follows:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component-Based Architecture",
              "Unidirectional Data Flow",
              "Virtual DOM Rendering",
              "Declarative UI Development"
            ]
          },
          {
            type: "paragraph",
            content: "A React application is usually organized into:"
          },
          {
            type: "tree",
            content: `App
 ├── Components
 ├── Pages
 ├── Hooks
 ├── Services
 ├── Context
 ├── Routes
 └── Utilities`
          },
          {
            type: "paragraph",
            content: "Good architecture improves: Scalability, Maintainability, Reusability, Team collaboration."
          }
        ]
      },

      {
        heading: "2. What is the Virtual DOM?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Virtual DOM is a lightweight JavaScript representation of the real DOM."
          },
          {
            type: "paragraph",
            content: "Instead of updating the browser DOM directly:"
          },
          {
            type: "flow",
            steps: [
              "State Changes", "→",
              "Virtual DOM Updated", "→",
              "Diffing Process", "→",
              "Minimal DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This approach improves performance because DOM operations are expensive."
          }
        ]
      },

      {
        heading: "3. Why is the Virtual DOM faster than direct DOM manipulation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Direct DOM manipulation causes: Layout recalculations, Repainting, Reflow operations."
          },
          {
            type: "paragraph",
            content: "The Virtual DOM: Compares old and new versions, Finds only necessary changes, Updates only affected elements."
          },
          {
            type: "paragraph",
            content: "This minimizes expensive browser operations."
          }
        ]
      },

      {
        heading: "4. What is Reconciliation in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is React's process of comparing:"
          },
          {
            type: "output",
            content: "Previous Virtual DOM VS New Virtual DOM"
          },
          {
            type: "paragraph",
            content: "React identifies differences and updates only changed parts. This process is called Diffing. The goal is efficient UI updates."
          }
        ]
      },

      {
        heading: "5. What is React's Diffing Algorithm?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Diffing is the algorithm React uses during reconciliation."
          },
          {
            type: "paragraph",
            content: "Instead of comparing every node exhaustively, React makes assumptions:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Different element types create different trees.",
              "Keys help identify list items."
            ]
          },
          {
            type: "paragraph",
            content: "This allows React to compare trees efficiently in near O(n) complexity."
          }
        ]
      },

      {
        heading: "6. Why are Keys important in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Keys help React identify elements uniquely."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Before: A B C",
              "After: B C D"
            ]
          },
          {
            type: "paragraph",
            content: "Without keys: React may unnecessarily re-render elements."
          },
          {
            type: "paragraph",
            content: "With keys: React knows which items were added, removed, or moved."
          },
          {
            type: "paragraph",
            content: "Benefits: Better performance, Fewer bugs, Stable component identity."
          }
        ]
      },

      {
        heading: "7. What problems occur when using array index as key?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Using indexes can cause: Incorrect UI updates, Lost component state, Rendering bugs."
          },
          {
            type: "paragraph",
            content: "Especially problematic when: Sorting, Filtering, Adding items, Removing items."
          },
          {
            type: "paragraph",
            content: "Stable unique IDs are preferred."
          }
        ]
      },

      {
        heading: "8. What is React Fiber?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Fiber is React's internal rendering engine introduced in React 16."
          },
          {
            type: "paragraph",
            content: "Its purpose is: Better rendering performance, Incremental rendering, Task prioritization, Improved responsiveness."
          },
          {
            type: "paragraph",
            content: "Fiber allows React to pause, resume, and prioritize rendering work."
          }
        ]
      },

      {
        heading: "9. Why was React Fiber introduced?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Before Fiber:"
          },
          {
            type: "flow",
            steps: [
              "Rendering Task", "→",
              "Must Finish Completely"
            ]
          },
          {
            type: "paragraph",
            content: "Large updates could block the UI."
          },
          {
            type: "paragraph",
            content: "Fiber introduced:"
          },
          {
            type: "flow",
            steps: [
              "Work", "→",
              "Pause", "→",
              "Resume", "→",
              "Prioritize"
            ]
          },
          {
            type: "paragraph",
            content: "This improves user experience in complex applications."
          }
        ]
      },

      {
        heading: "10. What is Incremental Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Incremental Rendering means React can split rendering work into smaller chunks."
          },
          {
            type: "paragraph",
            content: "Instead of: Render Everything At Once"
          },
          {
            type: "paragraph",
            content: "React can:"
          },
          {
            type: "flow",
            steps: [
              "Render Part", "→",
              "Pause", "→",
              "Render Part", "→",
              "Pause", "→",
              "Continue"
            ]
          },
          {
            type: "paragraph",
            content: "This keeps the interface responsive."
          }
        ]
      },

      {
        heading: "11. What is React Strict Mode?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Strict Mode is a development-only tool that helps identify potential problems."
          },
          {
            type: "paragraph",
            content: "It provides warnings for: Unsafe lifecycle methods, Deprecated APIs, Side effects, Unexpected behavior."
          },
          {
            type: "paragraph",
            content: "It does not affect production builds."
          }
        ]
      },

      {
        heading: "12. Why does Strict Mode render components twice in development?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React intentionally double-invokes certain operations to detect side effects."
          },
          {
            type: "paragraph",
            content: "This helps identify: Impure functions, Unsafe effects, Hidden bugs."
          },
          {
            type: "paragraph",
            content: "The double rendering occurs only in development mode."
          }
        ]
      },

      {
        heading: "13. What is an Error Boundary?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An Error Boundary is a React component that catches JavaScript errors occurring in child components."
          },
          {
            type: "paragraph",
            content: "Without Error Boundaries:"
          },
          {
            type: "flow",
            steps: [
              "Error", "→",
              "Entire App Crashes"
            ]
          },
          {
            type: "paragraph",
            content: "With Error Boundaries:"
          },
          {
            type: "flow",
            steps: [
              "Error", "→",
              "Fallback UI Displayed"
            ]
          },
          {
            type: "paragraph",
            content: "This improves reliability."
          }
        ]
      },

      {
        heading: "14. What errors can Error Boundaries catch?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Error Boundaries catch: Rendering errors, Lifecycle errors, Constructor errors."
          },
          {
            type: "paragraph",
            content: "They do NOT catch: Event handler errors, Async errors, Server-side rendering errors."
          }
        ]
      },

      {
        heading: "15. What is a Higher-Order Component (HOC)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Higher-Order Component is a function that takes a component and returns an enhanced component."
          },
          {
            type: "paragraph",
            content: "Concept:"
          },
          {
            type: "flow",
            steps: [
              "Component", "→",
              "HOC", "→",
              "Enhanced Component"
            ]
          },
          {
            type: "paragraph",
            content: "Used for sharing reusable logic. Examples: Authentication, Logging, Analytics, Permissions."
          }
        ]
      },

      {
        heading: "16. What are advantages of Higher-Order Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Advantages: Logic reuse, Cleaner components, Separation of concerns, Better abstraction."
          },
          {
            type: "paragraph",
            content: "Before Hooks, HOCs were a common pattern."
          }
        ]
      },

      {
        heading: "17. What are disadvantages of Higher-Order Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Disadvantages: Deep component nesting, Wrapper hell, Hard debugging, Complex component trees."
          },
          {
            type: "paragraph",
            content: "Hooks have replaced many HOC use cases."
          }
        ]
      },

      {
        heading: "18. What is the Render Props pattern?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Render Props is a pattern where a component shares logic using a function prop."
          },
          {
            type: "paragraph",
            content: "Idea:"
          },
          {
            type: "flow",
            steps: [
              "Logic Component", "→",
              "Function Prop", "→",
              "UI Returned"
            ]
          },
          {
            type: "paragraph",
            content: "This allows logic reuse while maintaining UI flexibility."
          }
        ]
      },

      {
        heading: "19. What are React Portals?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Portals allow rendering components outside their parent DOM hierarchy."
          },
          {
            type: "tree",
            content: `App Root
 └── Modal`
          },
          {
            type: "paragraph",
            content: "Actual DOM:"
          },
          {
            type: "tree",
            content: `body
 ├── root
 └── modal-root`
          },
          {
            type: "paragraph",
            content: "Useful for: Modals, Tooltips, Popups, Dialogs."
          }
        ]
      },

      {
        heading: "20. Why are Portals useful?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Without Portals: Components may be affected by Overflow hidden, Z-index issues, Parent styling constraints."
          },
          {
            type: "paragraph",
            content: "Portals bypass these limitations."
          }
        ]
      },

      {
        heading: "21. What is Code Splitting?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code Splitting divides application code into smaller bundles."
          },
          {
            type: "paragraph",
            content: "Instead of loading everything: Entire App Bundle"
          },
          {
            type: "paragraph",
            content: "React loads: Home Bundle, About Bundle, Dashboard Bundle."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster initial load, Better performance, Reduced bundle size."
          }
        ]
      },

      {
        heading: "22. What is Lazy Loading?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lazy Loading means loading components only when needed."
          },
          {
            type: "flow",
            steps: [
              "User Visits Dashboard", "→",
              "Dashboard Code Loaded"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of loading every page initially."
          }
        ]
      },

      {
        heading: "23. What is React.lazy()?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.lazy` allows components to be loaded dynamically."
          },
          {
            type: "paragraph",
            content: "Benefits: Smaller initial bundles, Faster page load, Improved performance."
          },
          {
            type: "paragraph",
            content: "It is commonly used with Suspense."
          }
        ]
      },

      {
        heading: "24. What is Suspense?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Suspense allows React to display fallback content while waiting for something to load."
          },
          {
            type: "paragraph",
            content: "Example: Loading... Until: Component loads, Data arrives, Resource becomes available."
          }
        ]
      },

      {
        heading: "25. What is the purpose of Suspense fallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Fallback provides temporary UI while content loads."
          },
          {
            type: "paragraph",
            content: "Examples: Loading spinner, Skeleton screen, Progress indicator."
          },
          {
            type: "paragraph",
            content: "This improves perceived performance."
          }
        ]
      },

      {
        heading: "26. What are Concurrent Features in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Concurrent Features allow React to work on multiple tasks more intelligently."
          },
          {
            type: "paragraph",
            content: "Goals: Better responsiveness, Improved user experience, Interruptible rendering."
          },
          {
            type: "paragraph",
            content: "These features are built on Fiber architecture."
          }
        ]
      },

      {
        heading: "27. What is useTransition?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useTransition` allows low-priority updates to run in the background."
          },
          {
            type: "paragraph",
            content: "Example: Typing Search Query. Typing remains responsive while expensive filtering happens separately."
          },
          {
            type: "paragraph",
            content: "Benefits: Smoother UI, Better responsiveness."
          }
        ]
      },

      {
        heading: "28. What is useDeferredValue?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useDeferredValue` delays updating non-critical values."
          },
          {
            type: "paragraph",
            content: "Useful when: Rendering large lists, Filtering huge datasets, Expensive computations."
          },
          {
            type: "paragraph",
            content: "It helps prevent UI lag."
          }
        ]
      },

      {
        heading: "29. What are React Server Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Server Components are components rendered on the server rather than the browser."
          },
          {
            type: "paragraph",
            content: "Benefits: Smaller client bundles, Faster loading, Better SEO, Reduced JavaScript sent to users."
          },
          {
            type: "paragraph",
            content: "Introduced primarily through modern frameworks like Next.js."
          }
        ]
      },

      {
        heading: "30. What is the difference between Client Components and Server Components?",
        blocks: [
          {
            type: "table",
            headers: ["Client Component", "Server Component"],
            rows: [
              ["Runs in browser", "Runs on server"],
              ["Can use Hooks", "Limited Hook support"],
              ["Interactive", "Mainly rendering"],
              ["Larger bundle", "Smaller bundle"]
            ]
          },
          {
            type: "paragraph",
            content: "Both can work together."
          }
        ]
      },

      {
        heading: "31. What is Hydration in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hydration is the process where React attaches interactivity to server-rendered HTML."
          },
          {
            type: "paragraph",
            content: "Process:"
          },
          {
            type: "flow",
            steps: [
              "Server HTML Sent", "→",
              "Browser Receives HTML", "→",
              "React Attaches Events", "→",
              "Interactive Application"
            ]
          },
          {
            type: "paragraph",
            content: "This improves initial page load speed."
          }
        ]
      },

      {
        heading: "32. What is Component Composition?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Component Composition means building larger components from smaller components."
          },
          {
            type: "tree",
            content: `Dashboard
 ├── Navbar
 ├── Sidebar
 ├── Content
 └── Footer`
          },
          {
            type: "paragraph",
            content: "Composition is one of React's most important design principles."
          }
        ]
      },

      {
        heading: "33. What does \"Composition over Inheritance\" mean in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React prefers:"
          },
          {
            type: "flow",
            steps: [
              "Small Components", "→",
              "Combine Together"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of: Large Inheritance Chains."
          },
          {
            type: "paragraph",
            content: "Composition provides: Flexibility, Reusability, Simpler architecture."
          }
        ]
      },

      {
        heading: "34. What is Separation of Concerns in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Separation of Concerns means different responsibilities should be isolated."
          },
          {
            type: "paragraph",
            content: "Examples: UI Components, API Logic, State Management, Utilities."
          },
          {
            type: "paragraph",
            content: "Benefits: Easier maintenance, Better scalability, Cleaner code."
          }
        ]
      },

      {
        heading: "35. How would you structure a large React application?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common structure:"
          },
          {
            type: "tree",
            content: `src
├── components
├── pages
├── hooks
├── context
├── services
├── routes
├── utils
├── assets
└── App`
          },
          {
            type: "paragraph",
            content: "This structure scales well in enterprise applications."
          }
        ]
      },

      {
        heading: "36. How would you answer \"Explain React Architecture\" in an interview?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A strong answer:"
          },
          {
            type: "quote",
            content: "React Architecture is based on reusable components, unidirectional data flow, and Virtual DOM rendering. React applications are typically organized into components, pages, hooks, services, and state management layers. React uses reconciliation and the Virtual DOM to efficiently update the UI. Modern React also leverages Fiber architecture, lazy loading, code splitting, Suspense, and concurrent rendering features to improve performance and scalability. Good React architecture focuses on maintainability, reusability, performance, and separation of concerns."
          }
        ]
      },

      {
        heading: "DevSphere Interview Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most candidates can explain Hooks, State, and Props. What often differentiates strong React developers in interviews is their understanding of React's internal architecture—Virtual DOM, Reconciliation, Fiber, Suspense, Code Splitting, Server Components, and Rendering Behavior. Mastering these concepts demonstrates that you understand not only how React is used, but also why React works the way it does."
          }
        ]
      },

      {
        heading: "Part 8: Backend Integration Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. Why does React need a backend?"
          },
          {
            type: "paragraph",
            content: "Answer: React is primarily a frontend library. Its responsibility is to: Display UI, Handle user interactions, Manage state, Render components."
          },
          {
            type: "paragraph",
            content: "However, React cannot permanently store data. For persistent data storage, we need a backend."
          },
          {
            type: "paragraph",
            content: "Examples: User accounts, Product information, Orders, Blog posts, Payments."
          },
          {
            type: "paragraph",
            content: "The backend handles these operations and sends data to React through APIs."
          }
        ]
      },

      {
        heading: "2. How does React communicate with a backend?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React communicates with a backend using HTTP requests. Common request types: GET, POST, PUT, PATCH, DELETE."
          },
          {
            type: "paragraph",
            content: "Typical flow:"
          },
          {
            type: "flow",
            steps: [
              "React Frontend", "→",
              "API Request", "→",
              "Backend Server", "→",
              "Database", "→",
              "Response", "→",
              "React UI Updates"
            ]
          }
        ]
      },

      {
        heading: "3. What is an API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: API stands for Application Programming Interface."
          },
          {
            type: "paragraph",
            content: "An API acts as a bridge between frontend and backend systems."
          },
          {
            type: "flow",
            steps: [
              "Frontend requests data", "→",
              "API receives request", "→",
              "Backend processes request", "→",
              "API returns response"
            ]
          },
          {
            type: "paragraph",
            content: "Without APIs, frontend and backend cannot communicate effectively."
          }
        ]
      },

      {
        heading: "4. What is REST API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: REST (Representational State Transfer) is the most common API architecture. REST APIs use HTTP methods:"
          },
          {
            type: "table",
            headers: ["Method", "Purpose"],
            rows: [
              ["GET", "Fetch Data"],
              ["POST", "Create Data"],
              ["PUT", "Update Entire Resource"],
              ["PATCH", "Partial Update"],
              ["DELETE", "Remove Resource"]
            ]
          },
          {
            type: "paragraph",
            content: "Example: `GET /users`, `POST /users`, `DELETE /users/5`. Most React applications consume REST APIs."
          }
        ]
      },

      {
        heading: "5. What is JSON?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSON stands for JavaScript Object Notation."
          },
          {
            type: "paragraph",
            content: "It is the standard format used to exchange data between frontend and backend."
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
            content: "Benefits: Lightweight, Easy to read, Easy to parse, Supported by almost every backend language."
          }
        ]
      },

      {
        heading: "6. What is Fetch API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Fetch API is a browser feature used to make HTTP requests."
          },
          {
            type: "paragraph",
            content: "It allows React applications to: Fetch data, Send data, Update resources, Delete resources."
          },
          {
            type: "paragraph",
            content: "Fetch returns a Promise. It is built into modern browsers and requires no additional installation."
          }
        ]
      },

      {
        heading: "7. What is Axios?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Axios is a popular HTTP client library."
          },
          {
            type: "paragraph",
            content: "Advantages over Fetch: Automatic JSON parsing, Request interceptors, Response interceptors, Better error handling, Request cancellation."
          },
          {
            type: "paragraph",
            content: "Many professional React projects prefer Axios because of its developer-friendly features."
          }
        ]
      },

      {
        heading: "8. What is the difference between Fetch and Axios?",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Fetch", "Axios"],
            rows: [
              ["Built Into Browser", "Yes", "No"],
              ["Installation Required", "No", "Yes"],
              ["JSON Parsing", "Manual", "Automatic"],
              ["Interceptors", "No", "Yes"],
              ["Timeout Support", "Limited", "Built-In"],
              ["Error Handling", "More Verbose", "Simpler"]
            ]
          },
          {
            type: "paragraph",
            content: "Both are widely used. Axios is generally preferred in large projects."
          }
        ]
      },

      {
        heading: "9. What is CORS?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: CORS stands for Cross-Origin Resource Sharing."
          },
          {
            type: "paragraph",
            content: "Browsers block requests made to different domains for security reasons."
          },
          {
            type: "paragraph",
            content: "Example: Frontend on `localhost:3000`, Backend on `localhost:5000`."
          },
          {
            type: "paragraph",
            content: "These are considered different origins. Without proper CORS configuration, requests may fail. The backend must explicitly allow frontend access."
          }
        ]
      },

      {
        heading: "10. What is Express.js?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Express.js is a backend framework built on Node.js."
          },
          {
            type: "paragraph",
            content: "It helps developers: Create APIs, Handle requests, Process responses, Manage routes, Connect databases."
          },
          {
            type: "paragraph",
            content: "Express is one of the most common backend frameworks used with React."
          }
        ]
      },

      {
        heading: "11. Why is Express commonly used with React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Because Express: Is lightweight, Is easy to learn, Uses JavaScript, Integrates well with React, Works seamlessly with MongoDB."
          },
          {
            type: "paragraph",
            content: "This combination forms the MERN stack."
          }
        ]
      },

      {
        heading: "12. What is Node.js?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Node.js allows JavaScript to run outside the browser."
          },
          {
            type: "paragraph",
            content: "Without Node.js: JavaScript → Browser Only"
          },
          {
            type: "paragraph",
            content: "With Node.js: JavaScript → Browser + Server"
          },
          {
            type: "paragraph",
            content: "Node powers Express applications and backend APIs."
          }
        ]
      },

      {
        heading: "13. What is the MERN Stack?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: MERN stands for: MongoDB, Express.js, React, Node.js."
          },
          {
            type: "paragraph",
            content: "Architecture:"
          },
          {
            type: "flow",
            steps: [
              "React", "→",
              "Express", "→",
              "Node.js", "→",
              "MongoDB"
            ]
          },
          {
            type: "paragraph",
            content: "It allows developers to build full-stack applications using JavaScript throughout the stack."
          }
        ]
      },

      {
        heading: "14. Explain the complete MERN request flow.",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Example: User submits login form."
          },
          {
            type: "flow",
            steps: [
              "React Form", "→",
              "API Request", "→",
              "Express Route", "→",
              "Controller Logic", "→",
              "MongoDB Query", "→",
              "Database Result", "→",
              "JSON Response", "→",
              "React Updates UI"
            ]
          },
          {
            type: "paragraph",
            content: "This is the fundamental MERN workflow."
          }
        ]
      },

      {
        heading: "15. What is MongoDB?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: MongoDB is a NoSQL database."
          },
          {
            type: "paragraph",
            content: "Instead of tables and rows, MongoDB stores data as documents."
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "Alice",
  "email": "alice@example.com"
}`
          },
          {
            type: "paragraph",
            content: "Benefits: Flexible schema, Fast development, Easy JSON integration, Scales well."
          }
        ]
      },

      {
        heading: "16. Why is MongoDB popular with React applications?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Because React and MongoDB both work naturally with JSON-like data."
          },
          {
            type: "flow",
            steps: [
              "MongoDB Document", "→",
              "API Response", "→",
              "React State"
            ]
          },
          {
            type: "paragraph",
            content: "Minimal data transformation is required."
          }
        ]
      },

      {
        heading: "17. What is Mongoose?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Mongoose is an ODM (Object Data Modeling) library for MongoDB."
          },
          {
            type: "paragraph",
            content: "It provides: Schemas, Validation, Query helpers, Middleware."
          },
          {
            type: "paragraph",
            content: "Mongoose simplifies database operations in Node.js applications."
          }
        ]
      },

      {
        heading: "18. What is an Environment Variable?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Environment variables store configuration outside source code."
          },
          {
            type: "paragraph",
            content: "Examples: API URLs, Database URLs, JWT Secrets, API Keys."
          },
          {
            type: "paragraph",
            content: "This improves: Security, Flexibility, Deployment management."
          }
        ]
      },

      {
        heading: "19. Why should API keys never be hardcoded?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hardcoded keys become visible in source code."
          },
          {
            type: "paragraph",
            content: "Risks: Unauthorized access, Security breaches, Data leaks."
          },
          {
            type: "paragraph",
            content: "Instead: Store secrets in environment variables."
          }
        ]
      },

      {
        heading: "20. What is Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Authentication verifies who a user is."
          },
          {
            type: "paragraph",
            content: "Example: Username + Password. System checks identity and grants access."
          },
          {
            type: "paragraph",
            content: "Question answered: Who are you?"
          }
        ]
      },

      {
        heading: "21. What is Authorization?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Authorization determines what a user can access."
          },
          {
            type: "paragraph",
            content: "Example: Admin → Can delete users. Customer → Cannot delete users."
          },
          {
            type: "paragraph",
            content: "Question answered: What are you allowed to do?"
          }
        ]
      },

      {
        heading: "22. What is JWT Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JWT stands for JSON Web Token."
          },
          {
            type: "flow",
            steps: [
              "User logs in", "→",
              "Server creates token", "→",
              "Token sent to frontend", "→",
              "Frontend sends token in future requests"
            ]
          },
          {
            type: "paragraph",
            content: "The server verifies the token before granting access."
          }
        ]
      },

      {
        heading: "23. What are the three parts of a JWT?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A JWT contains: Header, Payload, Signature."
          },
          {
            type: "paragraph",
            content: "Structure: `xxxxx.yyyyy.zzzzz`"
          },
          {
            type: "paragraph",
            content: "Each section contains specific authentication information."
          }
        ]
      },

      {
        heading: "24. Where should JWT tokens be stored?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common options:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**Local Storage:** Pros: Easy. Cons: Vulnerable to XSS attacks.",
              "**HTTP-Only Cookies:** Pros: More secure, Not accessible through JavaScript. Cons: Slightly more setup."
            ]
          },
          {
            type: "paragraph",
            content: "Modern production applications often prefer HTTP-only cookies."
          }
        ]
      },

      {
        heading: "25. What is a Protected Route?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Protected Routes prevent unauthenticated users from accessing specific pages."
          },
          {
            type: "paragraph",
            content: "Example: `/dashboard`, `/profile`, `/settings`."
          },
          {
            type: "paragraph",
            content: "If user is not logged in: Redirect → Login Page."
          }
        ]
      },

      {
        heading: "26. How should React handle API errors?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Applications should handle: Network failures, Server errors, Validation errors, Unauthorized requests."
          },
          {
            type: "paragraph",
            content: "Common responses: Loading state, Success state, Error state."
          },
          {
            type: "paragraph",
            content: "This improves user experience significantly."
          }
        ]
      },

      {
        heading: "27. What are common backend integration mistakes?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common mistakes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hardcoding API URLs",
              "Ignoring error handling",
              "Storing secrets in frontend code",
              "Making unnecessary API requests",
              "Not validating user input",
              "Trusting frontend data completely"
            ]
          },
          {
            type: "paragraph",
            content: "Professional applications avoid these issues."
          }
        ]
      },

      {
        heading: "28. How would you describe React and backend integration in one interview answer?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "quote",
            content: "React acts as the frontend layer responsible for displaying UI and handling user interactions. It communicates with backend services through APIs using HTTP requests. The backend, often built with Node.js and Express, processes requests, interacts with databases like MongoDB, performs authentication and business logic, and returns responses. Together they form a complete full-stack application where React handles presentation while the backend manages data, security, and application logic."
          }
        ]
      },

      {
        heading: "Part 9: Testing Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is testing in React?"
          },
          {
            type: "paragraph",
            content: "Answer: Testing is the process of verifying that a React application behaves as expected."
          },
          {
            type: "paragraph",
            content: "The goal is to ensure that: Components render correctly, User interactions work properly, Data flows correctly, Bugs are caught early."
          },
          {
            type: "paragraph",
            content: "Testing helps developers confidently modify code without breaking existing functionality."
          }
        ]
      },

      {
        heading: "2. Why is testing important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: As applications grow larger, manual testing becomes difficult."
          },
          {
            type: "paragraph",
            content: "Testing helps: Detect bugs early, Prevent regressions, Improve code quality, Increase developer confidence, Reduce production issues."
          },
          {
            type: "paragraph",
            content: "Without testing, even small code changes can accidentally break existing features."
          }
        ]
      },

      {
        heading: "3. What is a test case?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A test case is a specific scenario used to verify application behavior."
          },
          {
            type: "paragraph",
            content: "Example: Login Form"
          },
          {
            type: "flow",
            steps: [
              "Input Valid Credentials", "→",
              "Click Login", "→",
              "User Redirected to Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "This entire scenario represents one test case."
          }
        ]
      },

      {
        heading: "4. What is a test suite?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A test suite is a collection of related test cases."
          },
          {
            type: "tree",
            content: `Login Tests
├── Successful Login
├── Invalid Password
├── Empty Form
└── Logout Test`
          },
          {
            type: "paragraph",
            content: "Grouping tests into suites improves organization."
          }
        ]
      },

      {
        heading: "5. What are the main types of testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The most common types are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unit Testing: Tests individual functions or components.",
              "Integration Testing: Tests multiple components working together.",
              "End-to-End Testing: Tests the complete user workflow.",
              "Snapshot Testing: Comppares rendered UI against a saved snapshot."
            ]
          }
        ]
      },

      {
        heading: "6. What is Unit Testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Unit Testing focuses on testing the smallest pieces of code independently."
          },
          {
            type: "paragraph",
            content: "Examples: Utility functions, Hooks, Individual React components."
          },
          {
            type: "paragraph",
            content: "Goal: Verify one unit works correctly. Unit tests are usually fast and easy to maintain."
          }
        ]
      },

      {
        heading: "7. What is Integration Testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Integration Testing verifies that multiple units work together correctly."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Login Form", "→",
              "API Request", "→",
              "Authentication Context", "→",
              "Dashboard Update"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of testing each piece separately, the interaction between them is tested."
          }
        ]
      },

      {
        heading: "8. What is End-to-End (E2E) Testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: End-to-End testing simulates real user behavior."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Open Website", "→",
              "Login", "→",
              "Add Product", "→",
              "Checkout", "→",
              "Payment Success"
            ]
          },
          {
            type: "paragraph",
            content: "The entire workflow is tested from start to finish. Popular tools: Cypress, Playwright, Selenium."
          }
        ]
      },

      {
        heading: "9. What is Jest?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Jest is the most popular JavaScript testing framework. Created by Meta (Facebook)."
          },
          {
            type: "paragraph",
            content: "Jest provides: Test runner, Assertions, Mocking, Coverage reports, Snapshot testing."
          },
          {
            type: "paragraph",
            content: "React projects commonly use Jest as the primary testing framework."
          }
        ]
      },

      {
        heading: "10. Why is Jest popular in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Jest offers: Simple setup, Fast execution, Snapshot testing, Mocking capabilities, Excellent React ecosystem support."
          },
          {
            type: "paragraph",
            content: "Most React starter projects already include Jest configuration."
          }
        ]
      },

      {
        heading: "11. What is React Testing Library (RTL)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Testing Library is a testing utility for React components."
          },
          {
            type: "paragraph",
            content: "Its philosophy: Test applications the way users use them."
          },
          {
            type: "paragraph",
            content: "Instead of testing implementation details, RTL focuses on: User interactions, Visible UI behavior, Accessibility."
          },
          {
            type: "paragraph",
            content: "This leads to more reliable tests."
          }
        ]
      },

      {
        heading: "12. Why is React Testing Library preferred over Enzyme?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Enzyme often encourages testing internal implementation details."
          },
          {
            type: "paragraph",
            content: "RTL focuses on: What users see, What users do."
          },
          {
            type: "paragraph",
            content: "Benefits: Better maintainability, More realistic tests, Less fragile code. Modern React projects generally prefer RTL."
          }
        ]
      },

      {
        heading: "13. What is an assertion?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An assertion checks whether a condition is true."
          },
          {
            type: "output",
            content: [
              "Expected: Login Button Exists",
              "Actual: Login Button Exists"
            ]
          },
          {
            type: "paragraph",
            content: "Test passes. Assertions verify application behavior."
          }
        ]
      },

      {
        heading: "14. What is test coverage?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Test coverage measures how much code is tested."
          },
          {
            type: "output",
            content: [
              "Application Code: 100 Lines",
              "Tested Code: 85 Lines",
              "Coverage = 85%"
            ]
          },
          {
            type: "paragraph",
            content: "Coverage metrics often include: Statements, Functions, Branches, Lines."
          },
          {
            type: "paragraph",
            content: "Higher coverage is generally better, but quality matters more than percentages."
          }
        ]
      },

      {
        heading: "15. What is Snapshot Testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Snapshot testing captures a component's rendered output."
          },
          {
            type: "flow",
            steps: [
              "Render Component", "→",
              "Create Snapshot", "→",
              "Future Tests Compare Output"
            ]
          },
          {
            type: "paragraph",
            content: "If UI changes unexpectedly, the test fails. Useful for detecting accidental UI modifications."
          }
        ]
      },

      {
        heading: "16. What are mocks in testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Mocks replace real dependencies with fake versions."
          },
          {
            type: "paragraph",
            content: "Examples: API requests, Database calls, External services."
          },
          {
            type: "paragraph",
            content: "Purpose: Test component behavior without relying on external systems. Mocks make tests faster and more predictable."
          }
        ]
      },

      {
        heading: "17. Why should API calls be mocked?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Real API requests introduce problems: Slow tests, Network dependency, Unstable responses."
          },
          {
            type: "paragraph",
            content: "Mocking provides: Consistent results, Faster execution, Reliable testing environment."
          },
          {
            type: "paragraph",
            content: "Professional test suites often mock external APIs."
          }
        ]
      },

      {
        heading: "18. What is a test runner?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A test runner executes test files automatically."
          },
          {
            type: "paragraph",
            content: "Responsibilities: Run tests, Report results, Show failures, Measure coverage."
          },
          {
            type: "paragraph",
            content: "Jest acts as both: Testing framework and Test runner."
          }
        ]
      },

      {
        heading: "19. What is the difference between testing behavior and testing implementation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "**Implementation Testing:** Testing internal state, Testing internal methods, Testing component internals."
          },
          {
            type: "paragraph",
            content: "**Behavior Testing:** Testing visible UI, Testing user interactions, Testing expected outcomes."
          },
          {
            type: "paragraph",
            content: "Modern React testing strongly favors behavior testing."
          }
        ]
      },

      {
        heading: "20. Why should tests resemble user behavior?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Users don't care about: Internal state, Internal functions, Component implementation."
          },
          {
            type: "paragraph",
            content: "Users care about: Buttons, Forms, Navigation, Content."
          },
          {
            type: "paragraph",
            content: "Testing user behavior produces more realistic and maintainable tests."
          }
        ]
      },

      {
        heading: "21. What should be tested in a React component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Typically test: Rendered content, User interactions, Form submissions, Conditional rendering, API results, Error states, Loading states."
          },
          {
            type: "paragraph",
            content: "Avoid testing implementation details."
          }
        ]
      },

      {
        heading: "22. What are common things that should NOT be tested?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Avoid testing: Internal variables, React internals, Third-party library behavior, Implementation details."
          },
          {
            type: "paragraph",
            content: "Focus on observable behavior."
          }
        ]
      },

      {
        heading: "23. What is accessibility testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Accessibility testing ensures applications are usable by all users."
          },
          {
            type: "paragraph",
            content: "Examples: Screen readers, Keyboard navigation, Proper labels, Semantic HTML."
          },
          {
            type: "paragraph",
            content: "Testing accessibility improves usability and compliance."
          }
        ]
      },

      {
        heading: "24. What is mocking a function?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Mocking a function means replacing its real implementation with a fake version."
          },
          {
            type: "flow",
            steps: [
              "Real Payment API", "→",
              "Mock Payment Function"
            ]
          },
          {
            type: "paragraph",
            content: "This isolates component behavior during testing."
          }
        ]
      },

      {
        heading: "25. What is asynchronous testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Asynchronous testing handles operations that take time."
          },
          {
            type: "paragraph",
            content: "Examples: API calls, Timers, Delayed responses."
          },
          {
            type: "paragraph",
            content: "Tests must wait for operations to complete before making assertions."
          }
        ]
      },

      {
        heading: "26. How do you test API loading states?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Typical flow:"
          },
          {
            type: "flow",
            steps: [
              "Show Loading Spinner", "→",
              "API Request Starts", "→",
              "Response Received", "→",
              "Display Data"
            ]
          },
          {
            type: "paragraph",
            content: "Tests should verify each stage separately."
          }
        ]
      },

      {
        heading: "27. How do you test error handling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Applications should handle failures gracefully."
          },
          {
            type: "flow",
            steps: [
              "API Request Fails", "→",
              "Display Error Message"
            ]
          },
          {
            type: "paragraph",
            content: "Tests should verify that errors are displayed correctly."
          }
        ]
      },

      {
        heading: "28. What is the testing pyramid?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Testing Pyramid is a testing strategy. Structure:"
          },
          {
            type: "tree",
            content: `         E2E (Small)
     Integration (Medium)
      Unit Tests (Large)`
          },
          {
            type: "paragraph",
            content: "Meaning: Most tests should be unit tests, Fewer integration tests, Even fewer end-to-end tests."
          },
          {
            type: "paragraph",
            content: "This keeps test suites fast and maintainable."
          }
        ]
      },

      {
        heading: "29. What is the difference between Unit, Integration, and E2E testing?",
        blocks: [
          {
            type: "table",
            headers: ["Type", "Scope"],
            rows: [
              ["Unit", "Single Function/Component"],
              ["Integration", "Multiple Components Together"],
              ["E2E", "Entire Application Workflow"]
            ]
          },
          {
            type: "paragraph",
            content: "Each serves a different purpose."
          }
        ]
      },

      {
        heading: "30. What is Continuous Testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Continuous Testing automatically runs tests whenever code changes."
          },
          {
            type: "paragraph",
            content: "Typical flow:"
          },
          {
            type: "flow",
            steps: [
              "Developer Pushes Code", "→",
              "CI/CD Pipeline", "→",
              "Tests Run Automatically", "→",
              "Deployment Decision"
            ]
          },
          {
            type: "paragraph",
            content: "This helps catch issues before production."
          }
        ]
      },

      {
        heading: "31. What are flaky tests?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Flaky tests produce inconsistent results."
          },
          {
            type: "output",
            content: [
              "Passes Sometimes",
              "Fails Sometimes"
            ]
          },
          {
            type: "paragraph",
            content: "Common causes: Timing issues, Network dependency, Shared state, Poor test isolation."
          },
          {
            type: "paragraph",
            content: "Flaky tests reduce trust in the testing system."
          }
        ]
      },

      {
        heading: "32. What is test isolation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Each test should run independently."
          },
          {
            type: "paragraph",
            content: "A test should not depend on: Previous tests, Shared data, External state."
          },
          {
            type: "paragraph",
            content: "Independent tests are easier to maintain and debug."
          }
        ]
      },

      {
        heading: "33. What are the benefits of automated testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Benefits include: Faster feedback, Better reliability, Fewer bugs, Safer refactoring, Improved developer confidence."
          },
          {
            type: "paragraph",
            content: "Automated testing becomes increasingly valuable as applications grow."
          }
        ]
      },

      {
        heading: "34. How much testing is enough?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: There is no fixed percentage."
          },
          {
            type: "paragraph",
            content: "Focus on: Critical business logic, User workflows, Frequently used features, Error handling."
          },
          {
            type: "paragraph",
            content: "The goal is confidence, not simply high coverage numbers."
          }
        ]
      },

      {
        heading: "35. What is the biggest mistake beginners make in React testing?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Many beginners test implementation details instead of user behavior."
          },
          {
            type: "paragraph",
            content: "Bad mindset: Test internal state."
          },
          {
            type: "paragraph",
            content: "Better mindset: Test what the user sees and does."
          },
          {
            type: "paragraph",
            content: "This creates more maintainable tests."
          }
        ]
      },

      {
        heading: "36. How would you describe React testing in an interview?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "quote",
            content: "React testing is the process of verifying that components and applications behave correctly from a user's perspective. Modern React applications typically use Jest as the testing framework and React Testing Library for component testing. Testing includes unit tests, integration tests, and end-to-end tests, helping developers catch bugs early, improve reliability, and confidently refactor code. The best testing strategy focuses on user behavior rather than implementation details, ensuring applications remain maintainable as they evolve."
          }
        ]
      },

      {
        heading: "Part 10: Production, Deployment & Real-World Scenario Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is a Production Build in React?"
          },
          {
            type: "paragraph",
            content: "Answer: A production build is the optimized version of a React application that is deployed to real users."
          },
          {
            type: "paragraph",
            content: "During production build generation: Code is minified, Unused code is removed, Files are compressed, Performance optimizations are applied."
          },
          {
            type: "flow",
            steps: [
              "Smaller Bundle Size", "→",
              "Faster Loading", "→",
              "Better Performance"
            ]
          },
          {
            type: "paragraph",
            content: "Production builds are significantly faster than development builds."
          }
        ]
      },

      {
        heading: "2. Why should developers never deploy a development build?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Development builds contain: Debugging tools, Warnings, Source maps, Development checks."
          },
          {
            type: "paragraph",
            content: "Problems: Larger file size, Slower performance, Security exposure, Poor user experience."
          },
          {
            type: "paragraph",
            content: "Production builds remove unnecessary development overhead."
          }
        ]
      },

      {
        heading: "3. What happens when React is built for production?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React performs several optimizations: JavaScript minification, Tree shaking, Dead code elimination, Asset optimization, Bundle optimization."
          },
          {
            type: "output",
            content: [
              "Development Build: 2 MB",
              "Production Build: 600 KB"
            ]
          },
          {
            type: "paragraph",
            content: "Smaller bundles improve loading speed."
          }
        ]
      },

      {
        heading: "4. What is deployment?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Deployment is the process of making an application available to users over the internet."
          },
          {
            type: "flow",
            steps: [
              "Local Development", "→",
              "Production Build", "→",
              "Hosting Platform", "→",
              "Public Website"
            ]
          },
          {
            type: "paragraph",
            content: "Without deployment, users cannot access the application."
          }
        ]
      },

      {
        heading: "5. What are popular React deployment platforms?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common platforms include: Vercel, Netlify, AWS, Azure, Firebase Hosting, Render, DigitalOcean."
          },
          {
            type: "paragraph",
            content: "For frontend-only React projects: Vercel and Netlify are the most popular choices."
          }
        ]
      },

      {
        heading: "6. Why is Vercel popular for React applications?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Advantages: Easy deployment, GitHub integration, Automatic deployments, Global CDN, Free hosting tier, Excellent React support."
          },
          {
            type: "paragraph",
            content: "Vercel is especially popular for React and Next.js applications."
          }
        ]
      },

      {
        heading: "7. Why is Netlify popular?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Netlify provides: Easy deployment, Continuous deployment, Environment variable support, Form handling, Redirect configuration."
          },
          {
            type: "paragraph",
            content: "Many React developers choose Netlify for static frontend hosting."
          }
        ]
      },

      {
        heading: "8. What is Continuous Deployment?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Continuous Deployment automatically deploys code whenever changes are pushed."
          },
          {
            type: "flow",
            steps: [
              "Git Push", "→",
              "Build Triggered", "→",
              "Tests Run", "→",
              "Deployment"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster releases, Reduced manual work, Improved development workflow."
          }
        ]
      },

      {
        heading: "9. What are environment variables?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Environment variables store configuration outside source code."
          },
          {
            type: "paragraph",
            content: "Examples: API URLs, JWT Secrets, Database URLs, Third-party API Keys."
          },
          {
            type: "paragraph",
            content: "Benefits: Better security, Easier configuration, Different values per environment."
          }
        ]
      },

      {
        heading: "10. Why should secrets never be stored in React source code?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React code runs in the browser. Anything inside the frontend bundle can be viewed by users."
          },
          {
            type: "paragraph",
            content: "Risks: API abuse, Unauthorized access, Security breaches."
          },
          {
            type: "paragraph",
            content: "Sensitive secrets belong on the backend, not the frontend."
          }
        ]
      },

      {
        heading: "11. What is the difference between Development and Production environments?",
        blocks: [
          {
            type: "table",
            headers: ["Environment", "Purpose", "Contents"],
            rows: [
              ["Development", "Used while building applications", "Debugging tools, Warnings, Development utilities"],
              ["Production", "Used by actual users", "Optimized code, Better performance, Minimal debugging info"]
            ]
          }
        ]
      },

      {
        heading: "12. What is a CDN?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: CDN stands for Content Delivery Network. A CDN stores copies of files across multiple geographic locations."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Nearest CDN Server", "→",
              "React Assets Delivered"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster loading, Reduced latency, Improved scalability."
          }
        ]
      },

      {
        heading: "13. What is code splitting?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code splitting divides application code into smaller chunks."
          },
          {
            type: "paragraph",
            content: "Instead of Loading Entire App, React loads Only Required Code."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster initial loading, Better user experience, Reduced bundle size."
          }
        ]
      },

      {
        heading: "14. What is lazy loading?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lazy loading delays loading until necessary."
          },
          {
            type: "flow",
            steps: [
              "User Opens Settings Page", "→",
              "Settings Code Downloads"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of downloading everything upfront. This improves performance significantly."
          }
        ]
      },

      {
        heading: "15. What is tree shaking?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Tree shaking removes unused code from the final bundle."
          },
          {
            type: "output",
            content: [
              "Imported 50 Functions",
              "Used 10 Functions",
              "Unused 40 Removed"
            ]
          },
          {
            type: "paragraph",
            content: "Result: Smaller bundles, Faster loading. Modern bundlers perform tree shaking automatically."
          }
        ]
      },

      {
        heading: "16. How can React application performance be improved?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common techniques:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React.memo",
              "useMemo",
              "useCallback",
              "Code splitting",
              "Lazy loading",
              "Virtualization",
              "Image optimization",
              "API optimization"
            ]
          },
          {
            type: "paragraph",
            content: "Performance optimization is an ongoing process."
          }
        ]
      },

      {
        heading: "17. What is bundle size?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Bundle size refers to the total size of generated application files."
          },
          {
            type: "paragraph",
            content: "Larger bundles: Load slower, Consume more bandwidth."
          },
          {
            type: "paragraph",
            content: "Smaller bundles: Load faster, Improve user experience."
          },
          {
            type: "paragraph",
            content: "Bundle size directly affects performance."
          }
        ]
      },

      {
        heading: "18. How can large bundle sizes be reduced?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Methods include: Code splitting, Lazy loading, Tree shaking, Removing unused dependencies, Dynamic imports, Asset optimization."
          },
          {
            type: "paragraph",
            content: "Large enterprise applications rely heavily on these techniques."
          }
        ]
      },

      {
        heading: "19. What would you do if a React application becomes slow?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: First identify the bottleneck."
          },
          {
            type: "flow",
            steps: [
              "React Profiler", "→",
              "Analyze Re-renders", "→",
              "Identify Expensive Operations", "→",
              "Optimize Components"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid premature optimization. Always measure before optimizing."
          }
        ]
      },

      {
        heading: "20. What is React Profiler used for?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Profiler helps identify: Slow renders, Frequent re-renders, Expensive components."
          },
          {
            type: "paragraph",
            content: "It allows developers to understand where performance issues originate."
          }
        ]
      },

      {
        heading: "21. A component re-renders unnecessarily. How would you fix it?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Possible solutions: `React.memo`, `useMemo`, `useCallback`, State restructuring, Context optimization."
          },
          {
            type: "paragraph",
            content: "First determine why re-rendering occurs before applying optimizations."
          }
        ]
      },

      {
        heading: "22. How would you optimize a large list containing thousands of items?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use virtualization. Examples: `react-window`, `react-virtualized`."
          },
          {
            type: "paragraph",
            content: "Instead of rendering 10,000 Items, Render only Visible Items."
          },
          {
            type: "paragraph",
            content: "This dramatically improves performance."
          }
        ]
      },

      {
        heading: "23. How would you handle loading states in production applications?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Users should receive feedback during data fetching."
          },
          {
            type: "paragraph",
            content: "Common UI: Loading Spinner, Skeleton Loader, Progress Indicator."
          },
          {
            type: "paragraph",
            content: "Good loading states improve user experience."
          }
        ]
      },

      {
        heading: "24. How would you handle API failures?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Never assume APIs always succeed. Handle: Network errors, Server errors, Timeout errors, Authentication failures."
          },
          {
            type: "paragraph",
            content: "Provide: Meaningful Error Messages, Retry Options, Fallback UI."
          }
        ]
      },

      {
        heading: "25. How would you secure API requests in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Security practices: Use HTTPS, Store secrets on backend, Validate tokens, Use authentication, Sanitize inputs."
          },
          {
            type: "paragraph",
            content: "Frontend security should always work alongside backend security."
          }
        ]
      },

      {
        heading: "26. What is the biggest security mistake React developers make?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Storing sensitive secrets inside frontend code."
          },
          {
            type: "paragraph",
            content: "Example: JWT Secret, Database Password, Private API Key."
          },
          {
            type: "paragraph",
            content: "These should never exist in React source code."
          }
        ]
      },

      {
        heading: "27. What is CORS and why does it matter in production?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: CORS controls which domains can access backend APIs."
          },
          {
            type: "paragraph",
            content: "Example: Frontend on `example.com`, Backend on `api.example.com`."
          },
          {
            type: "paragraph",
            content: "Backend must explicitly allow access. Incorrect CORS configuration often causes production failures."
          }
        ]
      },

      {
        heading: "28. How would you deploy a MERN application?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Typical deployment:"
          },
          {
            type: "flow",
            steps: [
              "React Frontend → Vercel / Netlify",
              "Node + Express Backend → Render / Railway / AWS",
              "MongoDB → MongoDB Atlas"
            ]
          },
          {
            type: "paragraph",
            content: "Each layer is deployed separately."
          }
        ]
      },

      {
        heading: "29. How would you handle different API URLs for development and production?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use environment variables."
          },
          {
            type: "output",
            content: [
              "Development: localhost API",
              "Production: Live API"
            ]
          },
          {
            type: "paragraph",
            content: "Switching environments becomes simple and safe."
          }
        ]
      },

      {
        heading: "30. What would you do if the application works locally but fails after deployment?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Check: Environment variables, API URLs, Build errors, CORS configuration, Routing configuration, Deployment logs."
          },
          {
            type: "paragraph",
            content: "These are the most common causes of deployment issues."
          }
        ]
      },

      {
        heading: "31. Why do React Router applications sometimes show 404 errors after deployment?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Router handles routing on the client side."
          },
          {
            type: "paragraph",
            content: "Problem: User Refreshes `/dashboard`. Server tries to find `/dashboard` as a real file and fails."
          },
          {
            type: "paragraph",
            content: "Solution: Configure redirect rules (e.g., `_redirects` file in Netlify) so all routes point back to the React application (`index.html`)."
          }
        ]
      },

      {
        heading: "32. What is monitoring in production?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Monitoring tracks application health after deployment."
          },
          {
            type: "paragraph",
            content: "Common metrics: Errors, Performance, Crashes, API failures."
          },
          {
            type: "paragraph",
            content: "Popular tools: Sentry, Datadog, New Relic."
          },
          {
            type: "paragraph",
            content: "Monitoring helps detect issues before users report them."
          }
        ]
      },

      {
        heading: "33. What is logging and why is it important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Logging records important application events."
          },
          {
            type: "paragraph",
            content: "Examples: User Login, API Failure, Payment Error."
          },
          {
            type: "paragraph",
            content: "Logs help developers debug production issues quickly."
          }
        ]
      },

      {
        heading: "34. How would you explain scalability in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Scalability means the application can grow without becoming difficult to maintain."
          },
          {
            type: "paragraph",
            content: "Achieved through: Component architecture, Reusable code, State management, Code splitting, Team collaboration practices."
          },
          {
            type: "paragraph",
            content: "Well-structured applications scale more easily."
          }
        ]
      },

      {
        heading: "35. Describe a production-ready React application.",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A production-ready React application typically includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Optimized build",
              "Authentication",
              "Error handling",
              "Loading states",
              "Environment variables",
              "Security measures",
              "Testing",
              "Performance optimization",
              "Deployment pipeline",
              "Monitoring"
            ]
          },
          {
            type: "paragraph",
            content: "These features make applications reliable and maintainable."
          }
        ]
      },

      {
        heading: "36. How would you describe production deployment in an interview?",
        blocks: [
          {
            type: "quote",
            content: "Production deployment is the process of converting a React application into an optimized build and hosting it on a platform where users can access it. A production-ready application should include performance optimizations, environment variables, secure API communication, proper error handling, testing, monitoring, and deployment automation. Modern React applications are commonly deployed using platforms like Vercel or Netlify, while backend services and databases are hosted separately. The goal is to deliver a fast, secure, scalable, and reliable user experience."
          }
        ]
      },

      {
        heading: "Part 11: Senior-Level React Interview Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. How would you structure a large-scale React application?"
          },
          {
            type: "paragraph",
            content: "Answer: A large React application should be organized around scalability, maintainability, and team collaboration."
          },
          {
            type: "paragraph",
            content: "Typical structure:"
          },
          {
            type: "tree",
            content: `src
├── app
├── routes
├── pages
├── components
├── features
├── hooks
├── services
├── context
├── utils
├── assets
└── tests`
          },
          {
            type: "paragraph",
            content: "Many senior developers prefer feature-based architecture:"
          },
          {
            type: "tree",
            content: `features
├── auth
├── products
├── cart
└── orders`
          },
          {
            type: "paragraph",
            content: "Benefits: Better scalability, Easier ownership by teams, Reduced coupling, Easier maintenance."
          },
          {
            type: "paragraph",
            content: "The goal is to keep business logic close to related UI."
          }
        ]
      },

      {
        heading: "2. How do you decide whether state should be local, lifted, or global?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: This is one of the most important React architecture decisions."
          },
          {
            type: "paragraph",
            content: "Local State: Used only by one component. Examples: Modal open/close, Input value, Dropdown state."
          },
          {
            type: "paragraph",
            content: "Lifted State: Used by sibling components. Examples: Shopping filters, Selected category. State is moved to common parent."
          },
          {
            type: "paragraph",
            content: "Global State: Used across the application. Examples: User Authentication, Theme, Cart Data, Notifications."
          },
          {
            type: "paragraph",
            content: "Senior developers avoid making everything global because excessive global state creates complexity."
          },
          {
            type: "paragraph",
            content: "Rule: Keep state as close as possible to where it is used."
          }
        ]
      },

      {
        heading: "3. What are the most common causes of React performance problems?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common causes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unnecessary Re-renders: Parent updates → Child updates unnecessarily.",
              "Large Component Trees: Huge components increase rendering cost.",
              "Expensive Calculations During Render:** Bad: Filtering 10,000 items on every render.",
              "Poor State Design: Updating large objects unnecessarily.",
              "Unoptimized Lists: Rendering thousands of elements.",
              "Excessive Context Updates: Context can trigger many re-renders."
            ]
          },
          {
            type: "paragraph",
            content: "Solutions: `React.memo`, `useMemo`, `useCallback`, Virtualization, Better state architecture."
          }
        ]
      },

      {
        heading: "4. What is React reconciliation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is React's process of comparing: Previous Virtual DOM vs New Virtual DOM."
          },
          {
            type: "paragraph",
            content: "React determines: What changed? and updates only necessary DOM nodes."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "State Change", "→",
              "Virtual DOM Created", "→",
              "Comparison", "→",
              "Minimal DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "This is why React is efficient."
          }
        ]
      },

      {
        heading: "5. What is the difference between rendering and re-rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Rendering: First time component appears. Initial UI Creation."
          },
          {
            type: "paragraph",
            content: "Re-rendering: Component updates because: State changed, Props changed, Context changed."
          },
          {
            type: "paragraph",
            content: "Example: `setCount(count + 1)` causes re-render."
          },
          {
            type: "paragraph",
            content: "Senior developers focus heavily on controlling unnecessary re-renders."
          }
        ]
      },

      {
        heading: "6. How would you optimize a React application with slow rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Steps:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Profile First: Use React DevTools Profiler to identify bottlenecks.",
              "Optimize Expensive Computations: Use `useMemo`.",
              "Prevent Child Re-renders: Use `React.memo`, `useCallback`.",
              "Virtualize Large Lists: Use `react-window`, `react-virtualized`.",
              "Lazy Load Components: Use `React.lazy`, Suspense."
            ]
          },
          {
            type: "paragraph",
            content: "Optimization should be data-driven, not guesswork."
          }
        ]
      },

      {
        heading: "7. What is code splitting and why is it important?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code splitting breaks JavaScript bundles into smaller pieces."
          },
          {
            type: "paragraph",
            content: "Instead of loading: Entire App, load: Only Required Parts."
          },
          {
            type: "flow",
            steps: [
              "Home Page → Load Home Bundle",
              "Settings Page → Load Settings Bundle"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Faster loading, Better user experience, Smaller initial bundle."
          },
          {
            type: "paragraph",
            content: "Usually implemented using: `React.lazy`, `Suspense`."
          }
        ]
      },

      {
        heading: "8. How would you handle authentication in a React application?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Typical flow:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Backend verifies credentials", "→",
              "JWT / Session issued", "→",
              "Store authentication state", "→",
              "Protect routes"
            ]
          },
          {
            type: "paragraph",
            content: "Common architecture: Auth Context → Protected Routes → API Interceptors."
          },
          {
            type: "paragraph",
            content: "**Important:** Never trust frontend authentication alone. Backend must validate every request."
          }
        ]
      },

      {
        heading: "9. What is the difference between authentication and authorization?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "Authentication: Verifies identity. Who are you? Example: Login."
          },
          {
            type: "paragraph",
            content: "Authorization: Determines permissions. What can you access? Example: Admin Dashboard Access."
          },
          {
            type: "flow",
            steps: [
              "Authentication", "→",
              "Authorization"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization always comes after authentication."
          }
        ]
      },

      {
        heading: "10. How would you implement role-based access control (RBAC) in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: User object: `{ role: \"admin\" }`"
          },
          {
            type: "paragraph",
            content: "Protected route checks: Admin, Manager, User."
          },
          {
            type: "output",
            content: [
              "Admin → Can access dashboard",
              "User → Cannot access dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Frontend hides UI. Backend enforces permissions. Both layers are required."
          }
        ]
      },

      {
        heading: "11. How would you manage API calls in a large application?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Avoid placing API logic inside components."
          },
          {
            type: "paragraph",
            content: "Bad: Component → Direct API Call"
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "flow",
            steps: [
              "Component", "→",
              "Service Layer", "→",
              "API Client", "→",
              "Backend"
            ]
          },
          {
            type: "paragraph",
            content: "Example structure:"
          },
          {
            type: "tree",
            content: `services
├── authService
├── productService
└── userService`
          },
          {
            type: "paragraph",
            content: "Benefits: Reusable, Testable, Maintainable."
          }
        ]
      },

      {
        heading: "12. What problems can Context API cause in large applications?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Context is useful but not free."
          },
          {
            type: "paragraph",
            content: "Problem:"
          },
          {
            type: "flow",
            steps: [
              "Context Value Changes", "→",
              "All Consumers Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "Large contexts may create performance issues."
          },
          {
            type: "paragraph",
            content: "Solutions: Split contexts, Memoize values, Use Redux/Zustand when needed."
          },
          {
            type: "paragraph",
            content: "Senior developers avoid putting everything inside one giant context."
          }
        ]
      },

      {
        heading: "13. When would you choose Redux over Context API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Use Context for: Theme, Language, Authentication."
          },
          {
            type: "paragraph",
            content: "Use Redux when: Complex State, Large Application, Many Updates."
          },
          {
            type: "paragraph",
            content: "Redux provides: Predictable updates, DevTools, Middleware, Better scalability."
          },
          {
            type: "paragraph",
            content: "Context is not a Redux replacement. They solve different problems."
          }
        ]
      },

      {
        heading: "14. What is hydration in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hydration occurs during SSR. Flow:"
          },
          {
            type: "flow",
            steps: [
              "Server renders HTML", "→",
              "Browser receives HTML", "→",
              "React attaches event handlers"
            ]
          },
          {
            type: "paragraph",
            content: "This process is called: Hydration."
          },
          {
            type: "paragraph",
            content: "Without hydration: HTML visible but not interactive. Hydration makes SSR content interactive."
          }
        ]
      },

      {
        heading: "15. What is the difference between CSR, SSR, and SSG?",
        blocks: [
          {
            type: "table",
            headers: ["Type", "Description", "Benefits"],
            rows: [
              ["CSR", "Client Side Rendering. Browser builds page.", "Good for traditional React SPAs."],
              ["SSR", "Server Side Rendering. Server renders page.", "Better SEO, Faster first paint."],
              ["SSG", "Static Site Generation. Build Time Rendering.", "Extremely fast, CDN-friendly."]
            ]
          },
          {
            type: "paragraph",
            content: "Frameworks like Next.js support all three."
          }
        ]
      },

      {
        heading: "16. How do you prevent memory leaks in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Common leak sources:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers (`setInterval()`)",
              "Event Listeners (`window.addEventListener()`)",
              "WebSockets (Persistent connections)",
              "API Requests (Completing after unmount)"
            ]
          },
          {
            type: "paragraph",
            content: "Cleanup example:"
          },
          {
            type: "flow",
            steps: [
              "Component Unmount", "→",
              "Cleanup Function Runs"
            ]
          },
          {
            type: "paragraph",
            content: "Usually handled inside: `useEffect` cleanup."
          }
        ]
      },

      {
        heading: "17. How would you handle error boundaries in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Error Boundaries catch rendering errors."
          },
          {
            type: "paragraph",
            content: "Without Error Boundary: One crash → Entire app crashes."
          },
          {
            type: "paragraph",
            content: "With Error Boundary: One crash → Fallback UI shown."
          },
          {
            type: "paragraph",
            content: "Example: \"Something went wrong. Please refresh.\""
          },
          {
            type: "paragraph",
            content: "Benefits: Better user experience, Better stability, Better monitoring."
          }
        ]
      },

      {
        heading: "18. What is the purpose of React.StrictMode?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: StrictMode helps identify problems during development."
          },
          {
            type: "paragraph",
            content: "Checks include: Unsafe lifecycle methods, Side effects, Deprecated APIs, Improper cleanup."
          },
          {
            type: "paragraph",
            content: "Important: Development Only. Not active in production builds. It intentionally runs some operations twice to reveal bugs."
          }
        ]
      },

      {
        heading: "19. How would you design a reusable component library?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A reusable component library should provide: Consistent APIs, Accessibility, Theme support, Documentation, Testing."
          },
          {
            type: "paragraph",
            content: "Examples: Button, Input, Modal, Table, Card."
          },
          {
            type: "paragraph",
            content: "Principles: Reusable, Configurable, Predictable, Accessible."
          },
          {
            type: "paragraph",
            content: "This is how design systems are built."
          }
        ]
      },

      {
        heading: "20. What is the biggest mistake developers make in React architecture?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The biggest mistake is: Overengineering too early."
          },
          {
            type: "paragraph",
            content: "Examples: Redux for tiny apps, Excessive abstractions, Too many custom hooks, Too many contexts, Premature optimization."
          },
          {
            type: "paragraph",
            content: "Senior developers follow:"
          },
          {
            type: "flow",
            steps: [
              "Start Simple", "→",
              "Measure Problems", "→",
              "Scale Architecture Gradually"
            ]
          },
          {
            type: "paragraph",
            content: "The best architecture is not the most complex one. The best architecture is the simplest one that solves the current problem while allowing future growth."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Junior React interviews mostly test syntax and APIs. Senior React interviews test decision-making. A senior engineer is expected to explain why a solution was chosen, what alternatives exist, what trade-offs were considered, how the application will scale in the future, and how performance, maintainability, testing, accessibility, and developer experience are affected by that decision. Mastering these architectural discussions is often what separates a React developer from a Senior React Engineer."
          }
        ]
      },

      {
        heading: "Part 12: Most Asked Rapid-Fire Questions",
        blocks: [
          {
            type: "paragraph",
            content: "1. What is React?"
          },
          {
            type: "paragraph",
            content: "Answer: React is an open-source JavaScript library developed by Facebook for building user interfaces, especially Single Page Applications (SPAs). It uses a component-based architecture and Virtual DOM to efficiently update the UI."
          }
        ]
      },

      {
        heading: "2. What are the main features of React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Main features include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component-Based Architecture",
              "Virtual DOM",
              "JSX",
              "One-Way Data Flow",
              "Reusable Components",
              "Declarative UI",
              "Strong Ecosystem"
            ]
          }
        ]
      },

      {
        heading: "3. What is JSX?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JSX (JavaScript XML) is a syntax extension that allows developers to write HTML-like code inside JavaScript."
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>Hello React</h1>`
          },
          {
            type: "paragraph",
            content: "JSX is converted into JavaScript by Babel."
          }
        ]
      },

      {
        heading: "4. Is JSX mandatory in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: No. React can be written without JSX using: `React.createElement()`. However, JSX is easier to read and widely used."
          }
        ]
      },

      {
        heading: "5. What is Babel?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Babel is a JavaScript compiler. It converts JSX and Modern JavaScript into browser-compatible JavaScript."
          }
        ]
      },

      {
        heading: "6. What is a Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Component is a reusable piece of UI. Examples: Navbar, Button, Product Card, Footer. React applications are built using components."
          }
        ]
      },

      {
        heading: "7. What are the types of Components?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Two main types: Functional Components, Class Components. Modern React primarily uses Functional Components."
          }
        ]
      },

      {
        heading: "8. What is Virtual DOM?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Virtual DOM is a lightweight JavaScript representation of the Real DOM. React compares Virtual DOM versions and updates only changed elements in the browser."
          }
        ]
      },

      {
        heading: "9. What is the Real DOM?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: The Real DOM is the actual browser DOM structure used to display web pages. Direct manipulation of Real DOM is slower than React's Virtual DOM approach."
          }
        ]
      },

      {
        heading: "10. What is Reconciliation?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Reconciliation is React's process of comparing old and new Virtual DOM trees and determining the minimum DOM updates required."
          }
        ]
      },

      {
        heading: "11. What is React Fiber?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Fiber is React's modern rendering engine. It improves: Rendering performance, Scheduling, Interruptible rendering, Concurrent features."
          }
        ]
      },

      {
        heading: "12. What is One-Way Data Binding?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Data flows from Parent ↓ Child through props. Children cannot directly modify parent data."
          }
        ]
      },

      {
        heading: "13. What are Props?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Props (Properties) are read-only values passed from parent components to child components. They help components communicate."
          }
        ]
      },

      {
        heading: "14. Are Props Mutable?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: No. Props are immutable. A child component should never modify props directly."
          }
        ]
      },

      {
        heading: "15. What is State?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: State is data managed inside a component. When state changes, React re-renders the component."
          }
        ]
      },

      {
        heading: "16. Difference between Props and State?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "**Props:** Passed from parent, Read-only."
          },
          {
            type: "paragraph",
            content: "**State:** Managed inside component, Can change."
          },
          {
            type: "paragraph",
            content: "Props are external data, state is internal data."
          }
        ]
      },

      {
        heading: "17. What is useState?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useState` is a React Hook used to add state to Functional Components. It allows components to store and update data."
          }
        ]
      },

      {
        heading: "18. What is useEffect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useEffect` allows components to perform side effects. Examples: API Calls, Timers, Event Listeners, DOM Manipulation."
          }
        ]
      },

      {
        heading: "19. What is a Side Effect?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A side effect is any operation that affects something outside the component rendering process. Examples: API Requests, Timers, Local Storage, Event Listeners."
          }
        ]
      },

      {
        heading: "20. What is a Hook?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hooks are special React functions that allow Functional Components to use React features like state and lifecycle behavior."
          }
        ]
      },

      {
        heading: "21. Why were Hooks introduced?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hooks were introduced to: Reduce Class Component complexity, Reuse logic, Improve readability, Simplify state management."
          }
        ]
      },

      {
        heading: "22. What is useContext?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useContext` allows components to access Context values without manually passing props through multiple levels."
          }
        ]
      },

      {
        heading: "23. What is Prop Drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Prop Drilling occurs when data is passed through many intermediate components that don't actually use it. Context API helps solve this problem."
          }
        ]
      },

      {
        heading: "24. What is Context API?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Context API provides a way to share data globally without passing props manually through every component."
          }
        ]
      },

      {
        heading: "25. What is useMemo?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useMemo` memoizes expensive calculations. It prevents unnecessary recalculations during re-renders."
          }
        ]
      },

      {
        heading: "26. What is useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useCallback` memoizes functions. It prevents function recreation on every render."
          }
        ]
      },

      {
        heading: "27. What is React.memo?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `React.memo` prevents unnecessary re-rendering of components when props have not changed."
          }
        ]
      },

      {
        heading: "28. Difference between useMemo and useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer:"
          },
          {
            type: "paragraph",
            content: "`useMemo`: Memoizes values."
          },
          {
            type: "paragraph",
            content: "`useCallback`: Memoizes functions."
          }
        ]
      },

      {
        heading: "29. What is a Custom Hook?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Custom Hook is a reusable JavaScript function that uses React Hooks internally. Examples: `useFetch()`, `useAuth()`, `useLocalStorage()`."
          }
        ]
      },

      {
        heading: "30. Why must Hooks be called at the top level?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React relies on Hook call order. Calling Hooks conditionally can break this order and cause bugs."
          }
        ]
      },

      {
        heading: "31. What are the Rules of Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Only call Hooks at the top level. Only call Hooks inside React components or custom Hooks."
          }
        ]
      },

      {
        heading: "32. What is Conditional Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Conditional Rendering displays different UI based on conditions."
          },
          {
            type: "output",
            content: [
              "Logged In → Dashboard",
              "Logged Out → Login Page"
            ]
          }
        ]
      },

      {
        heading: "33. What is List Rendering?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: List Rendering is displaying multiple elements from an array using methods like `map()`."
          }
        ]
      },

      {
        heading: "34. Why are Keys important in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Keys help React identify which list items changed, were added, or removed. This improves rendering efficiency."
          }
        ]
      },

      {
        heading: "35. Can two list items have the same key?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: No. Keys should be unique among siblings. Duplicate keys may cause rendering issues."
          }
        ]
      },

      {
        heading: "36. What is Fragment?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Fragment allows grouping multiple elements without adding an extra DOM node."
          },
          {
            type: "code",
            language: "jsx",
            content: `<>
  <h1>Hello</h1>
  <p>World</p>
</>`
          }
        ]
      },

      {
        heading: "37. What is Controlled Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Controlled Component stores form data inside React state. React controls the input value."
          }
        ]
      },

      {
        heading: "38. What is Uncontrolled Component?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An Uncontrolled Component stores form data inside the DOM and accesses it using refs."
          }
        ]
      },

      {
        heading: "39. What is useRef?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: `useRef` creates a mutable reference that persists across renders. Common uses: DOM Access, Storing mutable values."
          }
        ]
      },

      {
        heading: "40. Does updating useRef cause re-render?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: No. Changing `.current` does not trigger a re-render."
          }
        ]
      },

      {
        heading: "41. What is Event Handling in React?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Event Handling allows React components to respond to user actions. Examples: Click, Input, Submit, Hover."
          }
        ]
      },

      {
        heading: "42. What is Synthetic Event?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Synthetic Events are React's cross-browser wrapper around native browser events. They provide consistent behavior."
          }
        ]
      },

      {
        heading: "43. What is React Router?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Router is a library used for client-side routing in React applications."
          }
        ]
      },

      {
        heading: "44. What is a Single Page Application (SPA)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: An SPA loads one HTML page and updates content dynamically without full page reloads."
          }
        ]
      },

      {
        heading: "45. What is a Protected Route?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: A Protected Route restricts access to authenticated users. Unauthenticated users are redirected to login pages."
          }
        ]
      },

      {
        heading: "46. What is Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Authentication verifies a user's identity. Example: Username + Password."
          }
        ]
      },

      {
        heading: "47. What is Authorization?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Authorization determines what resources an authenticated user can access."
          }
        ]
      },

      {
        heading: "48. What is JWT?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: JWT (JSON Web Token) is a compact token format used for authentication and authorization."
          }
        ]
      },

      {
        heading: "49. What is CORS?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: CORS (Cross-Origin Resource Sharing) controls whether one domain can access resources from another domain."
          }
        ]
      },

      {
        heading: "50. What is React StrictMode?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: StrictMode helps detect potential problems during development. It is active only in development mode."
          }
        ]
      },

      {
        heading: "51. What is Code Splitting?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Code Splitting breaks large JavaScript bundles into smaller chunks loaded when needed."
          }
        ]
      },

      {
        heading: "52. What is Lazy Loading?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Lazy Loading loads components only when they are required. Often implemented using: `React.lazy()`, Suspense."
          }
        ]
      },

      {
        heading: "53. What is Tree Shaking?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Tree Shaking removes unused code from production bundles, reducing bundle size."
          }
        ]
      },

      {
        heading: "54. What is Hydration?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Hydration attaches React functionality and event handlers to server-rendered HTML."
          }
        ]
      },

      {
        heading: "55. What is Server-Side Rendering (SSR)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: SSR generates HTML on the server before sending it to the browser. Benefits: Better SEO, Faster initial load."
          }
        ]
      },

      {
        heading: "56. What is Client-Side Rendering (CSR)?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: CSR renders pages in the browser using JavaScript after the application loads."
          }
        ]
      },

      {
        heading: "57. What is React DevTools?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React DevTools is a browser extension used to inspect components, props, state, hooks, and performance."
          }
        ]
      },

      {
        heading: "58. What is React Profiler?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Profiler measures component rendering performance and helps identify bottlenecks."
          }
        ]
      },

      {
        heading: "59. What is Jest?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: Jest is a JavaScript testing framework commonly used for React applications."
          }
        ]
      },

      {
        heading: "60. What is React Testing Library?",
        blocks: [
          {
            type: "paragraph",
            content: "Answer: React Testing Library is used to test React components by simulating user interactions and verifying behavior."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Rapid-fire questions may look simple, but interviewers use them to judge the depth of your understanding. A strong React developer should not only memorize these answers but also be able to explain why a concept exists, when to use it, when not to use it, and how it impacts real-world React applications. Many senior interviews start with these seemingly basic questions before gradually moving into architecture, performance optimization, scalability, and system design discussions."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : React Best Practices
============================= */
    "react-best-practices": {
    title: "React Best Practices",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Learning React APIs is only the first step toward becoming a React developer."
          },
          {
            type: "paragraph",
            content: "What separates beginner React developers from professional React developers is not how many Hooks they know, but how they structure applications, write maintainable code, optimize performance, and collaborate effectively with teams."
          },
          {
            type: "paragraph",
            content: "A React application can work perfectly today and still become difficult to maintain six months later if it is built without proper practices."
          },
          {
            type: "paragraph",
            content: "React Best Practices are a collection of proven guidelines used by experienced developers to create applications that are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Scalable",
              "Maintainable",
              "Readable",
              "Reusable",
              "Performant",
              "Testable",
              "Team-friendly"
            ]
          },
          {
            type: "paragraph",
            content: "These practices are not strict rules enforced by React. Instead, they are lessons learned from building thousands of real-world React applications."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why best practices matter",
              "Component design principles",
              "State management best practices",
              "Performance best practices",
              "Folder structure recommendations",
              "Reusability principles",
              "API integration practices",
              "Security considerations",
              "Testing practices",
              "Production-ready development habits",
              "Common anti-patterns",
              "Real-world engineering principles"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you will understand how experienced React developers build applications that remain manageable even as they grow to hundreds of components and thousands of lines of code."
          }
        ]
      },

      {
        heading: "Why Best Practices Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners focus only on making the application work."
          },
          {
            type: "paragraph",
            content: "Professional developers focus on making the application:"
          },
          {
            type: "flow",
            steps: [
              "Work Today", "→",
              "Remain Maintainable Tomorrow", "→",
              "Scale Next Year"
            ]
          },
          {
            type: "paragraph",
            content: "Consider two applications:"
          },
          {
            type: "table",
            headers: ["Application A", "Application B"],
            rows: [
              ["Works", "Works"],
              ["But difficult to maintain", "Easy to understand"],
              ["", "Easy to scale"],
              ["", "Easy to debug"]
            ]
          },
          {
            type: "paragraph",
            content: "Both may produce identical output. However, Application B will be significantly easier to maintain over time."
          },
          {
            type: "paragraph",
            content: "Best practices help create Application B."
          }
        ]
      },

      {
        heading: "Think in Components, Not Pages",
        blocks: [
          {
            type: "paragraph",
            content: "One of React's core philosophies is:"
          },
          {
            type: "output",
            content: "Think in Components, Not Pages"
          },
          {
            type: "paragraph",
            content: "Beginners often design applications like: Home Page, About Page, Contact Page."
          },
          {
            type: "paragraph",
            content: "Experienced React developers think like: Navbar, Sidebar, Button, Card, Modal, Form, Footer."
          },
          {
            type: "paragraph",
            content: "Pages are simply combinations of reusable components. Example:"
          },
          {
            type: "tree",
            content: `Home Page
├── Navbar
├── Hero
├── ProductList
└── Footer`
          },
          {
            type: "paragraph",
            content: "This mindset is fundamental to scalable React development."
          }
        ]
      },

      {
        heading: "Follow the Single Responsibility Principle",
        blocks: [
          {
            type: "paragraph",
            content: "Each component should ideally have one responsibility."
          },
          {
            type: "paragraph",
            content: "Good: Button Component (Handles button rendering)."
          },
          {
            type: "paragraph",
            content: "Good: SearchBar Component (Handles search UI)."
          },
          {
            type: "paragraph",
            content: "Bad: MegaComponent (Handles: Authentication, Forms, API Calls, Dashboard, Navigation, Analytics)."
          },
          {
            type: "paragraph",
            content: "Large components become difficult to Read, Reuse, Debug, Test."
          },
          {
            type: "paragraph",
            content: "Smaller focused components are easier to maintain."
          }
        ]
      },

      {
        heading: "Keep Components Small",
        blocks: [
          {
            type: "paragraph",
            content: "A common rule used by experienced React developers:"
          },
          {
            type: "output",
            content: "If a component feels too large, it probably is."
          },
          {
            type: "paragraph",
            content: "Bad: App.jsx (1200 Lines)"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── Dashboard
├── UserTable
└── Footer`
          },
          {
            type: "paragraph",
            content: "Benefits: Easier debugging, Easier testing, Better readability, Better reusability."
          }
        ]
      },

      {
        heading: "Use Meaningful Component Names",
        blocks: [
          {
            type: "paragraph",
            content: "Poor naming creates confusion."
          },
          {
            type: "paragraph",
            content: "Bad: `A.jsx`, `Temp.jsx`, `Data.jsx`"
          },
          {
            type: "paragraph",
            content: "Good: `UserProfile.jsx`, `ProductCard.jsx`, `LoginForm.jsx`, `OrderTable.jsx`"
          },
          {
            type: "paragraph",
            content: "Names should clearly communicate purpose. A developer should understand a component's responsibility simply by reading its name."
          }
        ]
      },

      {
        heading: "Prefer Functional Components",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React development primarily uses Functional Components."
          },
          {
            type: "paragraph",
            content: "Reasons:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simpler syntax",
              "Hook support",
              "Better readability",
              "Less boilerplate",
              "Official React recommendation"
            ]
          },
          {
            type: "paragraph",
            content: "Example modern stack: Functional Components + Hooks + Context API."
          },
          {
            type: "paragraph",
            content: "Class Components are mostly encountered in legacy applications."
          }
        ]
      },

      {
        heading: "Avoid Unnecessary State",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest React mistakes is storing too much state."
          },
          {
            type: "paragraph",
            content: "Bad: Store Everything In State"
          },
          {
            type: "paragraph",
            content: "Good: Store Only Necessary Data"
          },
          {
            type: "paragraph",
            content: "Ask: Can this value be derived?"
          },
          {
            type: "paragraph",
            content: "Example: Bad: `firstName`, `lastName`, `fullName` (State contains all three)."
          },
          {
            type: "paragraph",
            content: "Good: `firstName`, `lastName`. Generate: `fullName` when needed."
          },
          {
            type: "paragraph",
            content: "Less state means fewer bugs."
          }
        ]
      },

      {
        heading: "Keep State Close to Where It Is Used",
        blocks: [
          {
            type: "paragraph",
            content: "Common beginner mistake: Global State For Everything."
          },
          {
            type: "paragraph",
            content: "Better approach: Local State First."
          },
          {
            type: "paragraph",
            content: "Decision process:"
          },
          {
            type: "flow",
            steps: [
              "One Component Uses It → Local State",
              "Multiple Components Need It → Lift State Up",
              "Whole App Needs It → Global State"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents unnecessary complexity."
          }
        ]
      },

      {
        heading: "Avoid Prop Drilling When Necessary",
        blocks: [
          {
            type: "paragraph",
            content: "Prop drilling occurs when data passes through multiple intermediate components."
          },
          {
            type: "tree",
            content: `App
↓
Page
↓
Section
↓
Card
↓
Button`
          },
          {
            type: "paragraph",
            content: "If only Button needs the data, intermediate components become unnecessary messengers."
          },
          {
            type: "paragraph",
            content: "Solutions: Context API, Redux, Zustand."
          },
          {
            type: "paragraph",
            content: "However: Do Not Use Context For Everything. Use it only when appropriate."
          }
        ]
      },

      {
        heading: "Reuse Components Instead of Duplicating UI",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: 10 Similar Buttons Written Separately"
          },
          {
            type: "paragraph",
            content: "Good: One Button Component Reused Everywhere"
          },
          {
            type: "paragraph",
            content: "Benefits: Less code, Consistent UI, Easier maintenance."
          },
          {
            type: "paragraph",
            content: "This principle applies to: Buttons, Forms, Cards, Tables, Modals."
          }
        ]
      },

      {
        heading: "Use Custom Hooks for Shared Logic",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers duplicate Hook logic."
          },
          {
            type: "paragraph",
            content: "Bad: Same useEffect Logic Repeated In 5 Components."
          },
          {
            type: "paragraph",
            content: "Better: Create Custom Hook."
          },
          {
            type: "paragraph",
            content: "Example: `useFetch()`, `useAuth()`, `useDebounce()`, `useLocalStorage()`."
          },
          {
            type: "paragraph",
            content: "Benefits: Reusability, Cleaner components, Easier testing."
          },
          {
            type: "paragraph",
            content: "Custom Hooks are one of the most powerful React patterns."
          }
        ]
      },

      {
        heading: "Separate UI from Business Logic",
        blocks: [
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "tree",
            content: `Component
├── UI
├── API Calls
├── Validation
├── Authentication
├── Data Processing`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "flow",
            steps: [
              "UI Component", "→",
              "Custom Hook", "→",
              "Service Layer", "→",
              "API"
            ]
          },
          {
            type: "paragraph",
            content: "Benefits: Easier testing, Easier maintenance, Better readability. This separation becomes critical in large applications."
          }
        ]
      },

      {
        heading: "Organize Files by Feature",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners organize by file type: `components`, `hooks`, `pages`, `styles`. This becomes difficult in large projects."
          },
          {
            type: "paragraph",
            content: "Feature-based structure:"
          },
          {
            type: "tree",
            content: `features
├── auth
├── products
├── cart
└── orders`
          },
          {
            type: "paragraph",
            content: "Inside each feature:"
          },
          {
            type: "tree",
            content: `auth
├── components
├── hooks
├── services
└── pages`
          },
          {
            type: "paragraph",
            content: "Benefits: Better scalability, Easier navigation, Clear ownership. Many large companies use this approach."
          }
        ]
      },

      {
        heading: "Use Environment Variables Properly",
        blocks: [
          {
            type: "paragraph",
            content: "Never hardcode: API Keys, Secrets, URLs, Tokens."
          },
          {
            type: "paragraph",
            content: "Bad: `https://api.production.com` inside source code."
          },
          {
            type: "paragraph",
            content: "Better: Environment Variables (e.g., `API_URL`, `AUTH_DOMAIN`, `CLIENT_ID`)."
          },
          {
            type: "paragraph",
            content: "Benefits: Security, Flexibility, Easier deployments."
          }
        ]
      },

      {
        heading: "Never Store Sensitive Secrets in React",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most misunderstood topics."
          },
          {
            type: "paragraph",
            content: "Important: Frontend Code Is Public. Anything shipped to the browser can be inspected."
          },
          {
            type: "paragraph",
            content: "Never store: Database passwords, Private API keys, Secret tokens inside React applications."
          },
          {
            type: "paragraph",
            content: "Sensitive information belongs on the backend."
          }
        ]
      },

      {
        heading: "Handle API Calls Properly",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid: API Calls Everywhere."
          },
          {
            type: "paragraph",
            content: "Bad: Component A, Component B, Component C all making similar requests."
          },
          {
            type: "paragraph",
            content: "Better: Service Layer."
          },
          {
            type: "tree",
            content: `services
├── authService
├── userService
└── productService`
          },
          {
            type: "paragraph",
            content: "Benefits: Reusable API logic, Easier maintenance, Easier testing."
          }
        ]
      },

      {
        heading: "Always Handle Loading and Error States",
        blocks: [
          {
            type: "paragraph",
            content: "Bad UX: Blank Screen while data loads. Good: Loading Spinner, Skeleton UI, Progress Indicator."
          },
          {
            type: "paragraph",
            content: "Bad UX: Application Crashes on error. Good: \"Unable to load data. Please try again.\""
          },
          {
            type: "paragraph",
            content: "Every API call should consider: Loading, Success, Error."
          },
          {
            type: "paragraph",
            content: "These three states form the foundation of reliable applications."
          }
        ]
      },

      {
        heading: "Use Memoization Carefully",
        blocks: [
          {
            type: "paragraph",
            content: "`React.memo` can reduce re-renders. However: Not Every Component Needs `React.memo`."
          },
          {
            type: "paragraph",
            content: "Bad: Memoize Everything. Good: Profile First, Optimize Second."
          },
          {
            type: "paragraph",
            content: "Use `useMemo` and `useCallback` Only When Needed. Many beginners assume: More `useMemo` = Better Performance. This is false. Both Hooks have their own cost."
          },
          {
            type: "paragraph",
            content: "Use them only when: Expensive calculations exist, Re-render problems are proven."
          }
        ]
      },

      {
        heading: "Use Keys Correctly",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: `index` as key for dynamic lists. Problem: Incorrect Updates, Unexpected Bugs."
          },
          {
            type: "paragraph",
            content: "Prefer: Database IDs, UUIDs, Unique Identifiers."
          },
          {
            type: "paragraph",
            content: "Stable keys help React reconcile efficiently."
          }
        ]
      },

      {
        heading: "Optimize Large Lists",
        blocks: [
          {
            type: "paragraph",
            content: "Rendering thousands of elements can hurt performance. Solution: Virtualization."
          },
          {
            type: "paragraph",
            content: "Libraries: `react-window`, `react-virtualized`. Only visible items are rendered."
          },
          {
            type: "paragraph",
            content: "This dramatically improves performance."
          }
        ]
      },

      {
        heading: "Implement Code Splitting",
        blocks: [
          {
            type: "paragraph",
            content: "Large bundles slow applications. Instead of Loading Entire App, Use Lazy Loading with `React.lazy()` and `Suspense`."
          },
          {
            type: "paragraph",
            content: "Benefits: Faster initial load, Better user experience, Smaller bundle sizes."
          }
        ]
      },

      {
        heading: "Write Tests for Important Logic",
        blocks: [
          {
            type: "paragraph",
            content: "Not every line needs testing. Focus on: Business logic, Critical components, Authentication, Forms, User interactions."
          },
          {
            type: "paragraph",
            content: "Common tools: Jest, React Testing Library. Good tests improve confidence during refactoring."
          }
        ]
      },

      {
        heading: "Prioritize Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Accessibility is often ignored by beginners."
          },
          {
            type: "paragraph",
            content: "Examples: Proper labels, Keyboard navigation, Semantic HTML, ARIA attributes."
          },
          {
            type: "paragraph",
            content: "Accessible applications: Reach more users, Improve usability, Improve SEO. Accessibility should be built from the start."
          }
        ]
      },

      {
        heading: "Avoid Deep Component Nesting",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: App → Layout → Container → Wrapper → Section → Content → Card"
          },
          {
            type: "paragraph",
            content: "Deep nesting reduces readability. Keep hierarchies as flat as possible."
          }
        ]
      },

      {
        heading: "Use Error Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "Without Error Boundaries: One Component Crash → Entire Application Crash."
          },
          {
            type: "paragraph",
            content: "With Error Boundaries: Component Crash → Fallback UI."
          },
          {
            type: "paragraph",
            content: "This improves application resilience."
          }
        ]
      },

      {
        heading: "Keep Dependencies Updated",
        blocks: [
          {
            type: "paragraph",
            content: "Benefits: Security fixes, Performance improvements, New features, Bug fixes."
          },
          {
            type: "paragraph",
            content: "However: Update Carefully. Always test after upgrades."
          }
        ]
      },

      {
        heading: "Document Important Decisions",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials never mention this. Senior teams document: Folder structure choices, State management decisions, Architecture decisions, API patterns."
          },
          {
            type: "paragraph",
            content: "Documentation reduces onboarding time for new developers."
          }
        ]
      },

      {
        heading: "Think About Future Maintenance",
        blocks: [
          {
            type: "paragraph",
            content: "A senior React mindset:"
          },
          {
            type: "output",
            content: "Can Another Developer Understand This 6 Months Later?"
          },
          {
            type: "paragraph",
            content: "If the answer is no: Simplify It."
          },
          {
            type: "paragraph",
            content: "Readable code is often better than clever code."
          }
        ]
      },

      {
        heading: "Common React Anti-Patterns",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Giant Components: 1000+ Line Components.",
              "Excessive Global State: Everything Stored In Redux.",
              "Unnecessary useEffect Usage: Many effects can be replaced with derived values.",
              "Prop Drilling Everywhere: Use Context when appropriate.",
              "Premature Optimization: Avoid optimizing before measuring.",
              "Duplicate Components: Reuse instead of rewriting.",
              "Mixing Concerns: Avoid placing UI, API, validation, and business logic in one component."
            ]
          }
        ]
      },

      {
        heading: "Professional React Development Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before shipping an application:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components are reusable",
              "State is minimal",
              "API logic is separated",
              "Error handling exists",
              "Loading states exist",
              "Accessibility is considered",
              "Performance bottlenecks are measured",
              "Environment variables are configured",
              "Sensitive data is secure",
              "Testing covers important features",
              "Code splitting is implemented",
              "Documentation exists"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "React Best Practices are not about writing more code. They are about writing better code."
          },
          {
            type: "paragraph",
            content: "Professional React applications prioritize: Reusability, Maintainability, Readability, Performance, Scalability, Security, Accessibility, Testability."
          },
          {
            type: "paragraph",
            content: "The best React developers are not those who know the most Hooks. They are the developers who consistently make good architectural decisions that keep applications simple, scalable, and maintainable over time."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The biggest difference between beginner and senior React developers is not React knowledge—it's decision making. Beginners ask, \"How do I build this feature?\" Senior developers ask, \"How do I build this feature so that it remains maintainable, scalable, testable, and understandable a year from now?\" Most React bugs in production are not caused by missing APIs—they are caused by poor architecture and ignored best practices. Mastering these principles is what transforms a React learner into a professional React engineer."
          }
        ]
      }
    ]
  },





  /* ===========================
    Third Topic : Common Mistakes
============================= */
    "common-mistakes": {
    title: "Common Mistakes",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "React is designed to make building user interfaces easier, but beginners—and even experienced developers—often make mistakes that lead to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Poor performance",
              "Unnecessary re-renders",
              "Difficult debugging",
              "Unmaintainable code",
              "Security issues",
              "Failed interviews",
              "Production bugs"
            ]
          },
          {
            type: "paragraph",
            content: "Interestingly, many React applications work correctly even when written poorly. This is why developers sometimes continue using bad practices without realizing the long-term consequences."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Common beginner mistakes",
              "Common intermediate mistakes",
              "Common performance mistakes",
              "State management mistakes",
              "Hooks mistakes",
              "Component design mistakes",
              "Routing mistakes",
              "API mistakes",
              "Testing mistakes",
              "Deployment mistakes",
              "Interview mistakes",
              "Professional practices to avoid these issues"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you will be able to recognize and avoid many of the mistakes that commonly appear in React projects and interviews."
          }
        ]
      },

      {
        heading: "Why React Developers Make Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Most React mistakes happen because developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Learn syntax without understanding concepts",
              "Memorize Hooks without understanding rendering",
              "Focus on making code work instead of making it maintainable",
              "Overuse advanced features",
              "Ignore React's mental model"
            ]
          },
          {
            type: "paragraph",
            content: "A React application can appear correct while hiding serious architectural problems. This is why experienced developers focus heavily on best practices."
          }
        ]
      },

      {
        heading: "Mistake 1: Thinking React Updates the DOM Directly",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think:"
          },
          {
            type: "flow",
            steps: [
              "State Changes", "→",
              "DOM Updates Directly"
            ]
          },
          {
            type: "paragraph",
            content: "Not exactly. Actual process:"
          },
          {
            type: "flow",
            steps: [
              "State Changes", "→",
              "Virtual DOM Updates", "→",
              "Diffing", "→",
              "Real DOM Updates"
            ]
          },
          {
            type: "paragraph",
            content: "React first updates its Virtual DOM representation before updating the actual browser DOM. Understanding this is essential for understanding performance optimization."
          }
        ]
      },

      {
        heading: "Mistake 2: Treating React as Just JavaScript",
        blocks: [
          {
            type: "paragraph",
            content: "Some developers think React is simply: JavaScript + HTML"
          },
          {
            type: "paragraph",
            content: "React is actually built around: Components, State, Data Flow, Re-rendering, Declarative UI."
          },
          {
            type: "paragraph",
            content: "Learning only JSX syntax is not enough. Understanding React's architecture is far more important."
          }
        ]
      },

      {
        heading: "Mistake 3: Creating Huge Components",
        blocks: [
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "tree",
            content: `DashboardComponent
├── Navbar
├── Sidebar
├── API Calls
├── Authentication
├── Forms
├── Tables
├── Charts
└── Hundreds of lines`
          },
          {
            type: "paragraph",
            content: "Problems: Difficult debugging, Poor readability, Poor reusability, Difficult testing."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "tree",
            content: `Dashboard
├── Navbar
├── Sidebar
├── UserTable
├── ChartSection
└── Footer`
          },
          {
            type: "paragraph",
            content: "Small components are easier to manage."
          }
        ]
      },

      {
        heading: "Mistake 4: Not Thinking in Components",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners build pages. React developers build components."
          },
          {
            type: "output",
            content: [
              "Wrong mindset: Home Page, About Page, Contact Page",
              "Better mindset: Navbar, Sidebar, Button, Card, Footer, Form, Modal"
            ]
          },
          {
            type: "paragraph",
            content: "Pages become combinations of components."
          }
        ]
      },

      {
        heading: "Mistake 5: Using State for Everything",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often store everything in state."
          },
          {
            type: "paragraph",
            content: "Example: First Name, Last Name, Full Name."
          },
          {
            type: "paragraph",
            content: "Incorrect: Store all three in state."
          },
          {
            type: "paragraph",
            content: "Better: Store: First Name, Last Name. Calculate: Full Name when rendering."
          },
          {
            type: "paragraph",
            content: "Rule: Store only data that truly changes independently."
          }
        ]
      },

      {
        heading: "Mistake 6: Storing Derived State",
        blocks: [
          {
            type: "paragraph",
            content: "Derived state is data that can be calculated from existing state."
          },
          {
            type: "paragraph",
            content: "Example: Cart Items. Derived: Total Price."
          },
          {
            type: "paragraph",
            content: "Bad: State: `cartItems`, `totalPrice`"
          },
          {
            type: "paragraph",
            content: "Good: State: `cartItems`. Calculate total when needed."
          },
          {
            type: "paragraph",
            content: "Duplicated state causes synchronization bugs."
          }
        ]
      },

      {
        heading: "Mistake 7: Directly Mutating State",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect mindset: Modify existing state. Example: `user.name = \"John\";`"
          },
          {
            type: "paragraph",
            content: "React may not detect changes properly."
          },
          {
            type: "paragraph",
            content: "Correct mindset: Create new state. React relies on immutability for efficient updates."
          },
          {
            type: "paragraph",
            content: "Never mutate: Objects, Arrays, State values directly."
          }
        ]
      },

      {
        heading: "Mistake 8: Using Array Index as Key",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `items.map((item, index) => (
  <Item key={index} />
))`
          },
          {
            type: "paragraph",
            content: "Problems: Wrong re-renders, Lost component state, UI inconsistencies."
          },
          {
            type: "paragraph",
            content: "Better: `key={item.id}`"
          },
          {
            type: "paragraph",
            content: "Keys should uniquely identify items."
          }
        ]
      },

      {
        heading: "Mistake 9: Forgetting Unique Keys",
        blocks: [
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "jsx",
            content: `items.map(item => (
  <Item />
))`
          },
          {
            type: "paragraph",
            content: "React needs keys to track list changes efficiently. Always provide stable unique keys."
          }
        ]
      },

      {
        heading: "Mistake 10: Overusing useEffect",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest React mistakes. Many developers use `useEffect` for everything."
          },
          {
            type: "paragraph",
            content: "Examples: Calculations, Event handlers, Derived state, Simple transformations."
          },
          {
            type: "paragraph",
            content: "Most of these do not require effects."
          },
          {
            type: "paragraph",
            content: "Rule: If logic can run during rendering, avoid `useEffect`."
          }
        ]
      },

      {
        heading: "Mistake 11: Using useEffect to Synchronize State",
        blocks: [
          {
            type: "paragraph",
            content: "Bad pattern:"
          },
          {
            type: "flow",
            steps: [
              "State A changes", "→",
              "useEffect runs", "→",
              "Update State B"
            ]
          },
          {
            type: "paragraph",
            content: "This creates unnecessary re-renders."
          },
          {
            type: "paragraph",
            content: "Instead: Calculate State B directly. Derived values usually don't need effects."
          }
        ]
      },

      {
        heading: "Mistake 12: Missing Dependencies in useEffect",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Effect uses: user, token",
              "Dependency array: [user]"
            ]
          },
          {
            type: "paragraph",
            content: "Problem: Effect may use stale values. Always include all dependencies used inside the effect."
          },
          {
            type: "paragraph",
            content: "Ignoring dependency warnings often introduces bugs."
          }
        ]
      },

      {
        heading: "Mistake 13: Infinite useEffect Loops",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Effect updates state", "→",
              "State change triggers effect", "→",
              "Effect updates state again"
            ]
          },
          {
            type: "paragraph",
            content: "Result: Infinite Re-render Loop. This is one of the most common React bugs."
          }
        ]
      },

      {
        heading: "Mistake 14: Breaking Hook Rules",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect: Hook inside loop, Hook inside condition, Hook inside nested function."
          },
          {
            type: "paragraph",
            content: "Hooks must always run: Top Level, Same Order, Every Render."
          },
          {
            type: "paragraph",
            content: "Violating these rules breaks React's Hook system."
          }
        ]
      },

      {
        heading: "Mistake 15: Overusing useMemo",
        blocks: [
          {
            type: "paragraph",
            content: "Some developers wrap everything with `useMemo` thinking it improves performance."
          },
          {
            type: "paragraph",
            content: "Reality: `useMemo` itself has overhead. Use it only when: Computation is expensive, Re-render optimization is measurable."
          },
          {
            type: "paragraph",
            content: "Premature optimization often makes code worse."
          }
        ]
      },

      {
        heading: "Mistake 16: Overusing useCallback",
        blocks: [
          {
            type: "paragraph",
            content: "Common misconception: `useCallback` = Faster App. Not necessarily."
          },
          {
            type: "paragraph",
            content: "If child components aren't memoized: `useCallback` provides no benefit. Sometimes it actually increases complexity."
          }
        ]
      },

      {
        heading: "Mistake 17: Wrapping Every Component with React.memo",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: `React.memo(Button)`, `React.memo(Input)`, `React.memo(Header)`, `React.memo(Footer)`."
          },
          {
            type: "paragraph",
            content: "Memoization is not free. Use it when profiling proves unnecessary re-renders are occurring."
          }
        ]
      },

      {
        heading: "Mistake 18: Prop Drilling Everywhere",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
 ↓
Dashboard
 ↓
Sidebar
 ↓
UserCard
 ↓
Profile`
          },
          {
            type: "paragraph",
            content: "Passing the same prop through many layers creates: Maintenance issues, Verbose code, Poor architecture."
          },
          {
            type: "paragraph",
            content: "Solutions: Context API, Zustand, Redux depending on complexity."
          }
        ]
      },

      {
        heading: "Mistake 19: Using Context for Everything",
        blocks: [
          {
            type: "paragraph",
            content: "Context solves prop drilling. However: Huge Context (User, Theme, Cart, Products, Notifications, Settings) causes large re-renders."
          },
          {
            type: "paragraph",
            content: "Better: Split contexts by responsibility."
          }
        ]
      },

      {
        heading: "Mistake 20: Fetching Data Inside Every Component",
        blocks: [
          {
            type: "paragraph",
            content: "Bad architecture: Navbar fetches user, Sidebar fetches user, Dashboard fetches user, Profile fetches user."
          },
          {
            type: "paragraph",
            content: "Results: Duplicate requests, Wasted bandwidth, Poor performance."
          },
          {
            type: "paragraph",
            content: "Use: Shared state, Context, React Query, SWR for centralized data management."
          }
        ]
      },

      {
        heading: "Mistake 21: Ignoring Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "Bad UX: Blank Screen while data loads."
          },
          {
            type: "paragraph",
            content: "Always provide: Loading indicators, Skeleton screens, Spinners. Users should know something is happening."
          }
        ]
      },

      {
        heading: "Mistake 22: Ignoring Error States",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: Request Fails → Nothing Happens."
          },
          {
            type: "paragraph",
            content: "Good: Show Error Message, Provide Retry Option."
          },
          {
            type: "paragraph",
            content: "Professional applications handle failures gracefully."
          }
        ]
      },

      {
        heading: "Mistake 23: Exposing Secrets in React",
        blocks: [
          {
            type: "paragraph",
            content: "Dangerous mistake: API Keys, Database Credentials, Private Tokens inside frontend code."
          },
          {
            type: "paragraph",
            content: "Remember: Everything shipped to the browser is visible. Frontend secrets are not secrets. Sensitive logic belongs on the server."
          }
        ]
      },

      {
        heading: "Mistake 24: Trusting Frontend Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Bad assumption: Protected Route → Secure Application."
          },
          {
            type: "paragraph",
            content: "Protected routes improve UX. Security must always be enforced by backend authorization. Never trust frontend checks."
          }
        ]
      },

      {
        heading: "Mistake 25: Ignoring Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Common mistakes: Missing labels, Missing alt text, Keyboard navigation failures, Poor contrast."
          },
          {
            type: "paragraph",
            content: "Accessibility is not optional. Professional applications must support all users."
          }
        ]
      },

      {
        heading: "Mistake 26: Ignoring Performance Until Production",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers optimize only after complaints."
          },
          {
            type: "paragraph",
            content: "Better workflow:"
          },
          {
            type: "flow",
            steps: [
              "Build", "→",
              "Measure", "→",
              "Profile", "→",
              "Optimize"
            ]
          },
          {
            type: "paragraph",
            content: "Performance should be monitored throughout development."
          }
        ]
      },

      {
        heading: "Mistake 27: Not Writing Tests",
        blocks: [
          {
            type: "paragraph",
            content: "Common excuse: \"I'll test manually.\""
          },
          {
            type: "paragraph",
            content: "Problem: Manual testing doesn't scale. Applications change constantly. Automated testing reduces regressions significantly."
          }
        ]
      },

      {
        heading: "Mistake 28: Testing Implementation Details",
        blocks: [
          {
            type: "paragraph",
            content: "Bad tests: State Values, Internal Functions, Hook Internals."
          },
          {
            type: "paragraph",
            content: "Good tests: User Behavior, User Actions, User Outcomes."
          },
          {
            type: "paragraph",
            content: "Test what users experience. Not how components are implemented."
          }
        ]
      },

      {
        heading: "Mistake 29: Copy-Pasting Code",
        blocks: [
          {
            type: "paragraph",
            content: "Repeated code usually indicates: Missing Component, Missing Custom Hook, Missing Utility Function."
          },
          {
            type: "paragraph",
            content: "Avoid duplication whenever possible."
          }
        ]
      },

      {
        heading: "Mistake 30: Ignoring Folder Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: `src` ├── 100 files"
          },
          {
            type: "paragraph",
            content: "Good: `components`, `pages`, `hooks`, `services`, `utils`, `contexts`, `assets`."
          },
          {
            type: "paragraph",
            content: "Organization becomes increasingly important as projects grow."
          }
        ]
      },

      {
        heading: "Common React Interview Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers fail interviews despite building projects. Reasons include:"
          },
          {
            type: "paragraph",
            content: "Memorizing Instead of Understanding: Interviewers often ask \"Why?\" not just \"How?\"."
          },
          {
            type: "paragraph",
            content: "Confusing useMemo and useCallback: A very common interview mistake. Remember: `useMemo` → Memoizes Values, `useCallback` → Memoizes Functions."
          },
          {
            type: "paragraph",
            content: "Not Understanding Re-renders: Most React interviews eventually test: Why components re-render, When they re-render, How to optimize re-renders. Understanding rendering is critical."
          },
          {
            type: "paragraph",
            content: "Blindly Repeating Best Practices: Bad answer: \"Always use useMemo.\" Good answer: \"Use useMemo when profiling shows an expensive computation is causing performance issues.\" Interviewers value reasoning."
          }
        ]
      },

      {
        heading: "Real-World Mistakes Senior Developers Avoid",
        blocks: [
          {
            type: "paragraph",
            content: "Experienced React developers typically avoid:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Premature optimization",
              "Massive components",
              "Global state abuse",
              "Excessive Context usage",
              "Unnecessary effects",
              "Duplicate state",
              "Tight coupling",
              "Poor folder structures"
            ]
          },
          {
            type: "paragraph",
            content: "They prioritize: Readability, Maintainability, Scalability, Predictability over clever code."
          }
        ]
      },

      {
        heading: "Common Mistakes Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before shipping a React application, verify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components are small",
              "State is minimal",
              "No derived state duplication",
              "No direct state mutation",
              "Stable list keys exist",
              "Effects have correct dependencies",
              "Hooks follow rules",
              "Loading states exist",
              "Error states exist",
              "Authentication is backed by server authorization",
              "Environment variables are configured correctly",
              "Tests cover critical functionality",
              "Accessibility basics are implemented",
              "Performance bottlenecks are measured, not guessed"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "React mistakes are rarely syntax mistakes."
          },
          {
            type: "paragraph",
            content: "Most real-world problems come from: Poor component design, Incorrect state management, Hook misuse, Unnecessary effects, Premature optimization, Weak architecture decisions."
          },
          {
            type: "paragraph",
            content: "The most successful React developers focus not just on making code work, but on making code: Maintainable, Scalable, Predictable, Performant, Easy to understand."
          },
          {
            type: "paragraph",
            content: "Avoiding these common mistakes will dramatically improve both your React projects and your performance in technical interviews."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The biggest mistake React developers make is optimizing too early and understanding too little. Many developers learn Hooks, Context, Redux, useMemo, and useCallback before truly understanding state, rendering, and component composition. In real-world projects, developers who master React fundamentals usually outperform developers who know every advanced Hook but lack architectural understanding. React expertise comes from understanding why React behaves the way it does, not from memorizing APIs."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : React Coding Challenges
============================= */
    "react-coding-challenges": {
    title: "React Coding Challenges",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Learning React by reading tutorials is useful."
          },
          {
            type: "paragraph",
            content: "Building projects is better."
          },
          {
            type: "paragraph",
            content: "Solving coding challenges is even better."
          },
          {
            type: "paragraph",
            content: "Coding challenges force developers to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Apply React concepts practically",
              "Think independently",
              "Debug real problems",
              "Improve problem-solving skills",
              "Prepare for technical interviews",
              "Build production-level thinking"
            ]
          },
          {
            type: "paragraph",
            content: "Many developers complete dozens of React tutorials but struggle when asked to build something from scratch. This happens because tutorials often show the solution first."
          },
          {
            type: "paragraph",
            content: "Coding challenges require you to create the solution yourself."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What React coding challenges are",
              "Why they are important",
              "Different challenge categories",
              "Beginner challenges",
              "Intermediate challenges",
              "Advanced challenges",
              "Interview-focused challenges",
              "Real-world company challenges",
              "Challenge-solving strategies",
              "Common mistakes during challenges",
              "How to use challenges for maximum growth"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you will know how to systematically improve your React skills through practical coding challenges."
          }
        ]
      },

      {
        heading: "What Are React Coding Challenges?",
        blocks: [
          {
            type: "paragraph",
            content: "React Coding Challenges are practical exercises where developers build features, components, or complete applications using React concepts."
          },
          {
            type: "paragraph",
            content: "Instead of learning `What useState does`, you build: Counter App, Todo App, Theme Switcher, Search Filter."
          },
          {
            type: "paragraph",
            content: "Instead of learning `What useEffect does`, you build: API Fetching, Live Search, Weather Dashboard."
          },
          {
            type: "paragraph",
            content: "Coding challenges bridge the gap between theory and real development."
          }
        ]
      },

      {
        heading: "Why Coding Challenges Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers experience this problem:"
          },
          {
            type: "flow",
            steps: [
              "Tutorial Finished", "→",
              "Everything Makes Sense", "→",
              "Open Blank Project", "→",
              "No Idea What To Build"
            ]
          },
          {
            type: "paragraph",
            content: "This is known as: Tutorial Hell."
          },
          {
            type: "paragraph",
            content: "Coding challenges solve this issue. Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better problem-solving",
              "Improved debugging skills",
              "Stronger React understanding",
              "Better interview performance",
              "Increased coding confidence",
              "Faster development speed"
            ]
          },
          {
            type: "paragraph",
            content: "Professional developers become skilled by solving problems, not just watching tutorials."
          }
        ]
      },

      {
        heading: "The React Learning Pyramid",
        blocks: [
          {
            type: "paragraph",
            content: "Most developers progress through these stages:"
          },
          {
            type: "flow",
            steps: [
              "Read React", "→",
              "Watch React", "→",
              "Follow Tutorials", "→",
              "Build Projects", "→",
              "Solve Challenges", "→",
              "Build Products"
            ]
          },
          {
            type: "paragraph",
            content: "The biggest improvement happens between Tutorials → Challenges because independent thinking begins here."
          }
        ]
      },

      {
        heading: "Categories of React Coding Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "React challenges generally fall into several categories."
          },
          {
            type: "paragraph",
            content: "Component Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: JSX, Components, Props. Examples: Button Component, Card Component, Modal Component, Accordion Component."
          },
          {
            type: "paragraph",
            content: "State Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: `useState`, State updates, User interactions. Examples: Counter, Todo List, Shopping Cart, Like Button."
          },
          {
            type: "paragraph",
            content: "Event Handling Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: Click events, Form events, Keyboard events. Examples: Character Counter, Form Validation, Search Input, Keyboard Shortcuts."
          },
          {
            type: "paragraph",
            content: "Hooks Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: `useEffect`, `useMemo`, `useCallback`, Custom Hooks. Examples: Timer, Debounced Search, Theme Hook, Online Status Hook."
          },
          {
            type: "paragraph",
            content: "API Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: Fetch API, Axios, Async operations. Examples: Weather App, GitHub User Search, Movie Search, Crypto Dashboard."
          },
          {
            type: "paragraph",
            content: "Performance Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: `React.memo`, `useMemo`, `useCallback`, Optimization. Examples: Large List Rendering, Virtualization, Search Optimization, Dashboard Optimization."
          },
          {
            type: "paragraph",
            content: "Architecture Challenges"
          },
          {
            type: "paragraph",
            content: "Focus on: Component design, Folder structure, State management. Examples: E-Commerce App, Admin Dashboard, Social Media Feed, Project Management Tool."
          }
        ]
      },

      {
        heading: "Beginner React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "These are ideal for developers learning React fundamentals."
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Challenge 1: Counter Application: Requirements: Increment, Decrement, Reset. Concepts: `useState`, Event handling.",
              "Challenge 2: Toggle Button: Requirements: ON, OFF. Concepts: Boolean state, Conditional rendering.",
              "Challenge 3: Character Counter: Requirements: Input field, Live character count. Concepts: Controlled components, State updates.",
              "Challenge 4: Dynamic Greeting: Requirements: Good Morning, Good Afternoon, Good Evening based on current time. Concepts: JavaScript Date, Conditional rendering.",
              "Challenge 5: Todo List: Requirements: Add tasks, Delete tasks, Mark complete. Concepts: Arrays, State management, List rendering."
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most important React challenges."
          }
        ]
      },

      {
        heading: "Intermediate React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "These challenges introduce real-world React patterns."
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Challenge 6: Search Filter: Requirements: Product list, Search input, Real-time filtering. Concepts: Array filtering, Controlled inputs.",
              "Challenge 7: Accordion: Requirements: Expand section, Collapse section. Concepts: Conditional rendering, State management.",
              "Challenge 8: FAQ System: Requirements: Question, Answer. Expand answers on click. Concepts: Components, State, Props.",
              "Challenge 9: Theme Switcher: Requirements: Light Mode, Dark Mode. Concepts: Context API, Global state.",
              "Challenge 10: Multi-Step Form: Requirements: Step 1, Step 2, Step 3, Review, Submit. Concepts: Forms, Navigation, Validation."
            ]
          }
        ]
      },

      {
        heading: "Advanced React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "These challenges resemble production-level tasks."
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Challenge 11: Infinite Scroll: Requirements: Load more content while scrolling. Concepts: `useEffect`, APIs, Performance.",
              "Challenge 12: Debounced Search: Requirements: Delay API requests while typing. Concepts: `useEffect`, Cleanup functions, Optimization.",
              "Challenge 13: Data Table: Requirements: Sorting, Searching, Pagination. Concepts: State management, Memoization.",
              "Challenge 14: Kanban Board: Requirements: Drag Tasks, Move Columns, Update Status. Concepts: Complex state, Drag and drop.",
              "Challenge 15: Real-Time Chat Interface: Requirements: Messages, Typing indicators, Live updates. Concepts: WebSockets, State synchronization."
            ]
          }
        ]
      },

      {
        heading: "Interview-Focused React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "Many companies use these challenges during interviews."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Build Tabs Component: Requirements: Tab 1, Tab 2, Tab 3. Switch content dynamically. Tests: State management, Component design.",
              "Build Modal Component: Requirements: Open, Close, Overlay. Tests: Conditional rendering, Event handling.",
              "Build Star Rating Component: Requirements: ★★★★★ Interactive ratings. Tests: State, Events.",
              "Build Pagination Component: Requirements: Previous, Next, Page Numbers. Tests: Logic, Component architecture.",
              "Build Autocomplete Search: Requirements: Search suggestions, Keyboard navigation. Tests: Advanced state handling, UX thinking."
            ]
          }
        ]
      },

      {
        heading: "Most Important React Challenges for Interviews",
        blocks: [
          {
            type: "paragraph",
            content: "If you can build these without help, you are interview-ready:"
          },
          {
            type: "output",
            content: [
              "Counter", "Todo List", "Accordion", "Tabs", "Modal", "Search Filter",
              "Pagination", "Form Validation", "Theme Switcher", "Custom Hook",
              "API Fetching", "Infinite Scroll", "Data Table"
            ]
          },
          {
            type: "paragraph",
            content: "These appear repeatedly across interview platforms."
          }
        ]
      },

      {
        heading: "Real-World Coding Challenge Progression",
        blocks: [
          {
            type: "paragraph",
            content: "A professional roadmap:"
          },
          {
            type: "flow",
            steps: [
              "Counter", "→",
              "Todo App", "→",
              "Search Filter", "→",
              "Form Validation", "→",
              "API Fetching", "→",
              "Authentication", "→",
              "Dashboard", "→",
              "E-Commerce Application"
            ]
          },
          {
            type: "paragraph",
            content: "Each step introduces new concepts naturally."
          }
        ]
      },

      {
        heading: "Challenge-Solving Framework",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers rarely start coding immediately. They first analyze."
          },
          {
            type: "paragraph",
            content: "Process:"
          },
          {
            type: "flow",
            steps: [
              "Understand Problem", "→",
              "Break Into Components", "→",
              "Identify State", "→",
              "Design Data Flow", "→",
              "Implement UI", "→",
              "Add Logic", "→",
              "Handle Edge Cases", "→",
              "Optimize"
            ]
          },
          {
            type: "paragraph",
            content: "This framework works for almost every challenge."
          }
        ]
      },

      {
        heading: "How Senior Developers Approach Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often ask: How do I code this?"
          },
          {
            type: "paragraph",
            content: "Senior developers ask: What state exists? What components exist? What data flows where?"
          },
          {
            type: "paragraph",
            content: "Example: Todo App. Senior developer thinks:"
          },
          {
            type: "output",
            content: [
              "State: tasks",
              "Components: TodoForm, TodoList, TodoItem"
            ]
          },
          {
            type: "paragraph",
            content: "before writing code. This architectural thinking separates juniors from seniors."
          }
        ]
      },

      {
        heading: "Common Mistakes During React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "Mistake 1: Starting Without Planning: Bad: Open Editor → Start Typing. Good: Understand Problem → Design Components → Then Code."
          },
          {
            type: "paragraph",
            content: "Mistake 2: One Giant Component: Bad: `App.jsx` 700 Lines. Good: `App` → `Header`, `Form`, `List`, `Footer`."
          },
          {
            type: "paragraph",
            content: "Mistake 3: Using State Everywhere: Many values should be derived instead of stored. Avoid unnecessary state."
          },
          {
            type: "paragraph",
            content: "Mistake 4: Ignoring Edge Cases: Examples: Empty Input, Empty List, Failed API, Network Error. Real-world applications must handle these situations."
          },
          {
            type: "paragraph",
            content: "Mistake 5: Premature Optimization: Beginners often add `useMemo`, `useCallback`, `React.memo` without performance problems. First make it work. Then optimize if necessary."
          }
        ]
      },

      {
        heading: "Challenge Difficulty Ladder",
        blocks: [
          {
            type: "table",
            headers: ["Level", "Challenges"],
            rows: [
              ["Level 1", "Counter, Toggle, Character Counter"],
              ["Level 2", "Todo App, Accordion, Tabs"],
              ["Level 3", "Forms, Validation, Search"],
              ["Level 4", "API Projects, Authentication, Protected Routes"],
              ["Level 5", "Dashboards, Kanban Boards, Chat Applications"],
              ["Level 6", "Production-Level Applications"]
            ]
          },
          {
            type: "paragraph",
            content: "This progression mirrors real React development."
          }
        ]
      },

      {
        heading: "Building Your Own React Challenges",
        blocks: [
          {
            type: "paragraph",
            content: "One of the fastest ways to improve: Turn everyday apps into challenges."
          },
          {
            type: "paragraph",
            content: "Examples: Calculator, Notes App, Expense Tracker, Movie Search, Weather Dashboard, E-Commerce Store, Blog Platform, Social Feed."
          },
          {
            type: "paragraph",
            content: "Every real application is simply a collection of React challenges."
          }
        ]
      },

      {
        heading: "The 30-Day React Challenge Strategy",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Week 1: Counter, Toggle, Accordion, Tabs, Todo List",
              "Week 2: Forms, Validation, Search, Theme Switcher, Custom Hooks",
              "Week 3: API Projects, Authentication, Protected Routes",
              "Week 4: Dashboard, E-Commerce App, Capstone Project"
            ]
          },
          {
            type: "paragraph",
            content: "This progression rapidly strengthens React skills."
          }
        ]
      },

      {
        heading: "Challenge Success Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before considering a challenge complete:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Works correctly",
              "Components are reusable",
              "State is minimal",
              "No unnecessary re-renders",
              "Handles errors",
              "Handles loading states",
              "Responsive design works",
              "Code is readable",
              "Folder structure is organized",
              "Edge cases are handled"
            ]
          },
          {
            type: "paragraph",
            content: "This mirrors professional development standards."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "React Coding Challenges transform theoretical knowledge into practical skills."
          },
          {
            type: "paragraph",
            content: "They help developers: Master React concepts, Improve problem-solving, Build confidence, Prepare for interviews, Learn architecture, Understand real-world development."
          },
          {
            type: "paragraph",
            content: "The best React developers are not those who read the most tutorials. They are the developers who consistently solve challenges, build projects, debug problems, and learn from mistakes."
          },
          {
            type: "paragraph",
            content: "Coding challenges are where React knowledge becomes React expertise."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most developers think coding challenges are mainly for interviews. In reality, interviews are just a side benefit. The true purpose of React challenges is to teach you how to think like a React developer. Every production application is simply a collection of smaller challenges connected together. Once you can confidently solve component, state, hooks, API, and architecture challenges independently, building full-scale React applications becomes dramatically easier."
          }
        ]
      }
    ]
  },
};

export default interviewPreparation;