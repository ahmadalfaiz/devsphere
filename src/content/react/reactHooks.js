const reactHooks = {

/* ===========================
    First Topic : CSS in React
============================= */
    "introduction-to-hooks": {
    title: "Introduction to Hooks",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "When React was first released, developers primarily used Class Components to manage state, lifecycle methods, and side effects."
          },
 
          {
            type: "paragraph",
            content:
              "Functional Components existed, but they were often called stateless components because they could not use state or lifecycle features."
          },
 
          {
            type: "paragraph",
            content:
              "For example:"
          },
 
          {
            type: "list",
            items: [
              "Class Components could manage state.",
              "Class Components could perform API calls.",
              "Class Components could respond to lifecycle events.",
              "Functional Components could only receive props and return JSX."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This created a major imbalance in React development."
          },
 
          {
            type: "paragraph",
            content:
              "As applications grew larger, Class Components often became:"
          },
 
          {
            type: "list",
            items: [
              "Difficult to understand",
              "Hard to maintain",
              "Filled with repetitive logic",
              "Challenging to reuse functionality"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "To solve these problems, React introduced one of its most important features:"
          },
 
          {
            type: "quote",
            content:
              "Hooks"
          },
 
          {
            type: "paragraph",
            content:
              "Hooks allow Functional Components to use React features such as:"
          },
 
          {
            type: "list",
            items: [
              "State",
              "Side Effects",
              "Context",
              "References",
              "Performance Optimizations",
              "Custom Reusable Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without writing a single Class Component."
          },
 
          {
            type: "paragraph",
            content:
              "Today, Hooks are the standard way of building modern React applications. Most new React projects use Functional Components combined with Hooks."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What Hooks are",
              "Why Hooks were introduced",
              "Problems Hooks solve",
              "How Hooks changed React development",
              "Rules of Hooks",
              "Common React Hooks",
              "Custom Hooks",
              "Benefits and limitations",
              "Real-world usage patterns",
              "Best practices used by professional React developers"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand why Hooks became one of the most important features ever added to React."
          }
 
        ]
      },
 
      {
        heading: "What Are Hooks?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Hooks are special React functions that allow Functional Components to \"hook into\" React features."
          },
 
          {
            type: "paragraph",
            content:
              "Before Hooks:"
          },
 
          {
            type: "flow",
            steps: [
              "Functional Components",
              "→",
              "Props Only"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "After Hooks:"
          },
 
          {
            type: "flow",
            steps: [
              "Functional Components",
              "→",
              "State",
              "→",
              "Lifecycle Features",
              "→",
              "Side Effects",
              "→",
              "Context",
              "→",
              "Refs",
              "→",
              "Custom Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Hooks made Functional Components powerful enough to replace most Class Components."
          }
 
        ]
      },
 
      {
        heading: "Official Definition of Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "According to the React team:"
          },
 
          {
            type: "quote",
            content:
              "Hooks let you use state and other React features without writing a class."
          },
 
          {
            type: "paragraph",
            content:
              "This simple statement completely changed how React applications are built."
          }
 
        ]
      },
 
      {
        heading: "Why Were Hooks Introduced?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Hooks were introduced in React 16.8."
          },
 
          {
            type: "paragraph",
            content:
              "Before Hooks, React developers faced several major problems."
          }
 
        ]
      },
 
      {
        heading: "Problem 1: Complex Class Components",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Large Class Components often looked like:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `class UserDashboard extends React.Component {
  constructor() {
    super();
  }
 
  componentDidMount() {}
 
  componentDidUpdate() {}
 
  componentWillUnmount() {}
 
  render() {}
}`
          },
 
          {
            type: "paragraph",
            content:
              "A single component could easily grow to hundreds of lines. Understanding the flow became difficult."
          }
 
        ]
      },
 
      {
        heading: "Problem 2: Reusing Stateful Logic",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine multiple components needing:"
          },
 
          {
            type: "list",
            items: [
              "Window resize tracking",
              "Authentication logic",
              "API fetching",
              "Form handling"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Before Hooks, developers used:"
          },
 
          {
            type: "list",
            items: [
              "Higher Order Components (HOCs)",
              "Render Props",
              "Utility Classes"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These patterns worked but often made code complicated. Hooks introduced a much cleaner solution."
          }
 
        ]
      },
 
      {
        heading: "Problem 3: Lifecycle Method Confusion",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Class Components contained lifecycle methods such as:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `componentDidMount()
componentDidUpdate()
componentWillUnmount()`
          },
 
          {
            type: "paragraph",
            content:
              "Many beginners struggled to understand:"
          },
 
          {
            type: "list",
            items: [
              "When they execute",
              "Why they execute",
              "Which one should be used"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Hooks simplified this process significantly."
          }
 
        ]
      },
 
      {
        heading: "Problem 4: Large Components Become Hard to Maintain",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Related logic often became scattered across multiple lifecycle methods."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "flow",
            steps: [
              "API Fetching Logic → componentDidMount",
              "→",
              "Update Logic → componentDidUpdate",
              "→",
              "Cleanup Logic → componentWillUnmount"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "One feature could be split across multiple locations. Hooks allow related logic to stay together."
          }
 
        ]
      },
 
      {
        heading: "How Hooks Changed React",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before Hooks:"
          },
 
          {
            type: "flow",
            steps: [
              "Class Components",
              "→",
              "State",
              "→",
              "Lifecycle Methods",
              "→",
              "Complex Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "After Hooks:"
          },
 
          {
            type: "flow",
            steps: [
              "Functional Components",
              "→",
              "State",
              "→",
              "Effects",
              "→",
              "Context",
              "→",
              "Refs",
              "→",
              "Custom Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This significantly simplified React development."
          }
 
        ]
      },
 
      {
        heading: "Functional Components Before Hooks",
 
        blocks: [
 
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
            content:
              "This component:"
          },
 
          {
            type: "list",
            items: [
              "✅ Receives props",
              "❌ Cannot store state",
              "❌ Cannot perform lifecycle operations",
              "❌ Cannot manage side effects"
            ]
          }
 
        ]
      },
 
      {
        heading: "Functional Components After Hooks",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <h1>{count}</h1>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Now Functional Components can:"
          },
 
          {
            type: "list",
            items: [
              "✅ Store state",
              "✅ Respond to events",
              "✅ Manage side effects",
              "✅ Access Context",
              "✅ Use Refs"
            ]
          }
 
        ]
      },
 
      {
        heading: "Why Modern React Prefers Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Today React documentation primarily teaches Functional Components combined with Hooks."
          },
 
          {
            type: "paragraph",
            content:
              "Because Hooks provide:"
          },
 
          {
            type: "list",
            items: [
              "Simpler syntax",
              "Less boilerplate",
              "Better code reuse",
              "Easier testing",
              "Better readability"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Most modern React codebases follow this approach."
          }
 
        ]
      },
 
      {
        heading: "Hooks Always Start with \"use\"",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every Hook follows a naming convention."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "example",
            items: [
              "useState()",
              "useEffect()",
              "useContext()",
              "useRef()",
              "useMemo()",
              "useCallback()"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Custom Hooks also follow this rule:"
          },
 
          {
            type: "example",
            items: [
              "useAuth()",
              "useTheme()",
              "useFetch()"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The word use helps React identify Hook functions."
          }
 
        ]
      },
 
      {
        heading: "Most Common Built-In Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React provides several built-in Hooks. The most commonly used are:"
          },
 
          {
            type: "cards",
            items: [
              {
                title: "useState",
                description: "Adds state to Functional Components. Common use cases: counters, forms, toggles, and user input."
              },
 
              {
                title: "useEffect",
                description: "Performs side effects. Examples: API calls, timers, event listeners, and data fetching."
              },
 
              {
                title: "useContext",
                description: "Accesses shared application data. Examples: authentication, themes, and language settings."
              },
 
              {
                title: "useRef",
                description: "Creates persistent references. Examples: DOM access, input focus, and mutable values."
              },
 
              {
                title: "useMemo",
                description: "Optimizes expensive calculations by memoizing computed values."
              },
 
              {
                title: "useCallback",
                description: "Optimizes function creation by memoizing callback functions."
              }
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These Hooks form the foundation of modern React development."
          }
 
        ]
      },
 
      {
        heading: "What Hooks Cannot Do",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Hooks are powerful, but they have limitations."
          },
 
          {
            type: "paragraph",
            content:
              "Hooks:"
          },
 
          {
            type: "list",
            items: [
              "❌ Cannot be used inside Class Components",
              "❌ Cannot be called conditionally",
              "❌ Cannot be called inside loops",
              "❌ Cannot be called inside nested functions"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React enforces strict rules for Hook usage."
          }
 
        ]
      },
 
      {
        heading: "The Rules of Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React provides two fundamental rules."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Rule 1: Only Call Hooks at the Top Level."
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
  const [count, setCount] = useState(0);
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
            content: `if (loggedIn) {
  useState(0);
}`
          },
 
          {
            type: "paragraph",
            content:
              "Hooks must always be called in the same order."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Rule 2: Only Call Hooks from React Functions."
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
  useState();
}`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function useAuth() {
  useState();
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
            content: `function randomFunction() {
  useState();
}`
          },
 
          {
            type: "paragraph",
            content:
              "Hooks must only exist inside:"
          },
 
          {
            type: "list",
            items: [
              "Functional Components",
              "Custom Hooks"
            ]
          }
 
        ]
      },
 
      {
        heading: "Understanding Hook Order",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React tracks Hooks based on call order."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useState();
useEffect();
useRef();`
          },
 
          {
            type: "paragraph",
            content:
              "React expects this order to remain consistent. Changing the order can cause errors."
          },
 
          {
            type: "warning",
            content:
              "This is why conditional Hook calls are forbidden. Always call Hooks at the top level of your component, never inside conditions, loops, or nested functions."
          }
 
        ]
      },
 
      {
        heading: "What Are Custom Hooks?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the biggest advantages of Hooks is the ability to create your own Hooks."
          },
 
          {
            type: "example",
            items: [
              "useAuth()",
              "useFetch()",
              "useTheme()",
              "useWindowSize()"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Custom Hooks allow developers to reuse logic across multiple components. Instead of duplicating code, logic can be shared."
          },
 
          {
            type: "paragraph",
            content:
              "This dramatically improves maintainability."
          }
 
        ]
      },
 
      {
        heading: "Example Real-World Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Large applications frequently contain:"
          },
 
          {
            type: "cards",
            items: [
              {
                title: "useAuth()",
                description: "Authentication Hook that manages login, logout, and user information across the application."
              },
 
              {
                title: "useFetch()",
                description: "API Hook that manages requests, loading states, and errors for data fetching operations."
              },
 
              {
                title: "useTheme()",
                description: "Theme Hook that manages dark mode and light mode preferences throughout the application."
              }
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These Hooks can be reused throughout the application."
          }
 
        ]
      },
 
      {
        heading: "Hooks Encourage Better Separation of Concerns",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before Hooks, everything often became mixed together inside a single component:"
          },
 
          {
            type: "flow",
            steps: [
              "Component",
              "→",
              "UI + Lifecycle Methods + State Logic + Business Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "With Hooks, logic becomes easier to organize:"
          },
 
          {
            type: "flow",
            steps: [
              "UI Component",
              "→",
              "Custom Hooks",
              "→",
              "Reusable Logic"
            ]
          }
 
        ]
      },
 
      {
        heading: "Hooks and Component Reusability",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Hooks make components more reusable."
          },
 
          {
            type: "comparison",
            leftTitle: "Without Hooks",
            leftItems: [
              "Copy Code",
              "Paste Code",
              "Modify Code",
              "Repeat across every component"
            ],
 
            rightTitle: "With Hooks",
            rightItems: [
              "Create a Custom Hook",
              "Reuse Everywhere",
              "Update logic in one place",
              "All components stay in sync"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This reduces duplication significantly."
          }
 
        ]
      },
 
      {
        heading: "Hooks and React's Future",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Modern React development revolves around Hooks. New React features are primarily designed around Hook-based patterns."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Server Components integration",
              "Data fetching patterns",
              "Performance optimizations",
              "Concurrent rendering features"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding Hooks is essential for modern React development."
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
                question: "Mistake 1: Thinking Hooks Replace Components",
                answer:
                  "Hooks do not replace components. Hooks enhance components. Components are still the building blocks of your UI — Hooks simply give those components access to React features like state and side effects."
              },
 
              {
                question: "Mistake 2: Calling Hooks Conditionally",
                answer:
                  "Calling a Hook inside an if statement breaks React's Hook order tracking. React relies on Hooks being called in the exact same order on every render. Always call Hooks at the top level of your component.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `if (isLoggedIn) {
  useEffect();
}`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Overusing Hooks",
                answer:
                  "Not every piece of logic requires a Hook. Sometimes simple variables or helper functions are sufficient. Reach for Hooks only when you need React features like state, effects, or shared logic."
              },
 
              {
                question: "Mistake 4: Ignoring Custom Hooks",
                answer:
                  "Many beginners repeatedly copy and paste the same logic across multiple components. Custom Hooks often provide a much cleaner and more maintainable solution by allowing that logic to be written once and reused everywhere."
              },
 
              {
                question: "Mistake 5: Trying to Use Hooks in Class Components",
                answer:
                  "Hooks only work inside Functional Components and other Custom Hooks. They cannot be used inside Class Components. If you need Hook functionality, convert your Class Component to a Functional Component."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Hooks vs Class Components",
 
        blocks: [
 
          {
            type: "table",
            headers: [
              "Feature",
              "Class Components",
              "Hooks"
            ],
 
            rows: [
              ["State", "Yes", "Yes"],
              ["Lifecycle Features", "Yes", "Yes"],
              ["Reusable Logic", "Difficult", "Easy"],
              ["Boilerplate", "More", "Less"],
              ["Learning Curve", "Higher", "Lower"],
              ["Modern Recommendation", "Rarely Used", "Preferred"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Today Hooks are generally recommended for new development."
          }
 
        ]
      },
 
      {
        heading: "Professional React Development and Hooks",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Most professional React applications now follow:"
          },
 
          {
            type: "flow",
            steps: [
              "Functional Components",
              "→",
              "Hooks",
              "→",
              "Custom Hooks"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This combination provides:"
          },
 
          {
            type: "list",
            items: [
              "Cleaner code",
              "Better scalability",
              "Easier testing",
              "Improved maintainability"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "It has become the standard React architecture."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Hooks are special React functions that allow Functional Components to use React features such as state, side effects, context, references, and reusable logic."
          },
 
          {
            type: "paragraph",
            content:
              "They were introduced to solve problems associated with:"
          },
 
          {
            type: "list",
            items: [
              "Complex Class Components",
              "Lifecycle confusion",
              "Code reuse difficulties",
              "Large component maintenance"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Common Hooks include:"
          },
 
          {
            type: "list",
            items: [
              "useState",
              "useEffect",
              "useContext",
              "useRef",
              "useMemo",
              "useCallback"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Hooks transformed React development and are now the preferred way of building modern React applications."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding Hooks is one of the most important milestones in becoming a React developer."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think Hooks are simply a shorter replacement for Class Components. In reality, Hooks introduced an entirely new way of organizing React applications. Their biggest advantage is not shorter syntax — it is the ability to extract, share, and compose reusable stateful logic through Custom Hooks, something that was significantly harder to achieve before Hooks existed."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : useState Hooks
============================= */
    "usestate-hook": {
    title: "useState",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most important features of React is its ability to create dynamic and interactive user interfaces. Static content is useful, but modern web applications need to respond to user actions, update data, and reflect changes instantly on the screen."
          },
 
          {
            type: "paragraph",
            content:
              "Consider a counter application:"
          },
 
          {
            type: "list",
            items: [
              "A user clicks a button.",
              "The number increases.",
              "The screen updates automatically."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Or consider:"
          },
 
          {
            type: "list",
            items: [
              "A login form.",
              "A shopping cart.",
              "A dark mode toggle.",
              "A search box."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "All of these require React to remember information and update the UI when that information changes."
          },
 
          {
            type: "paragraph",
            content:
              "This is where State comes into play."
          },
 
          {
            type: "paragraph",
            content:
              "In modern React, the primary way to create and manage state inside functional components is through the useState Hook."
          },
 
          {
            type: "paragraph",
            content:
              "The useState Hook allows a component to:"
          },
 
          {
            type: "list",
            items: [
              "Store data",
              "Update data",
              "Trigger UI updates automatically",
              "Remember values between renders"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "It is often the very first Hook developers learn because nearly every React application uses it."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What useState is",
              "Why useState exists",
              "How React remembers values",
              "Creating state variables",
              "Updating state",
              "Multiple state variables",
              "Updating objects and arrays",
              "Functional updates",
              "Asynchronous behavior",
              "Common beginner mistakes",
              "Best practices used in professional React applications"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how React stores and updates component data using useState."
          }
 
        ]
      },
 
      {
        heading: "Why React Needs State",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Counter() {
  let count = 0;
 
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => count++}>
        Increment
      </button>
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "At first glance, this looks reasonable. However, clicking the button does not update the UI."
          },
 
          {
            type: "paragraph",
            content:
              "Why? Because React does not track ordinary JavaScript variables. React only re-renders when state changes."
          },
 
          {
            type: "paragraph",
            content:
              "This problem led to the introduction of state management. Instead of using normal variables, React provides:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useState()`
          },
 
          {
            type: "paragraph",
            content:
              "Which allows React to track changes and update the screen automatically."
          }
 
        ]
      },
 
      {
        heading: "What is useState?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useState is a React Hook that allows functional components to store and manage state."
          },
 
          {
            type: "quote",
            content:
              "useState lets a component remember information between renders."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
 
          {
            type: "paragraph",
            content:
              "This creates a state variable named count with an initial value of 0 and a function named setCount which updates that state."
          }
 
        ]
      },
 
      {
        heading: "Understanding the Syntax",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Basic syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [stateVariable, setStateVariable] = useState(initialValue);`
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [name, setName] = useState("John");`
          },
 
          {
            type: "paragraph",
            content:
              "Breaking it down:"
          },
 
          {
            type: "table",
            headers: [
              "Part",
              "Purpose"
            ],
 
            rows: [
              ["name", "Current state value"],
              ["setName", "Updates state"],
              ["useState()", "Creates state"],
              ["\"John\"", "Initial value"]
            ]
          }
 
        ]
      },
 
      {
        heading: "Importing useState",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before using it, import it from React:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useState } from "react";`
          },
 
          {
            type: "warning",
            content:
              "Without this import, React cannot recognize the Hook and will throw a reference error."
          }
 
        ]
      },
 
      {
        heading: "Your First useState Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useState } from "react";
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      <h1>{count}</h1>
 
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
 
export default Counter;`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "0\n\n[Increment]"
          },
 
          {
            type: "paragraph",
            content:
              "After clicking:"
          },
 
          {
            type: "output",
            content:
              "1\n\n[Increment]"
          },
 
          {
            type: "paragraph",
            content:
              "Then:"
          },
 
          {
            type: "output",
            content:
              "2\n\n[Increment]"
          },
 
          {
            type: "paragraph",
            content:
              "React automatically updates the UI."
          }
 
        ]
      },
 
      {
        heading: "How useState Works Internally",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Conceptually:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Render",
              "→",
              "React Creates State",
              "→",
              "User Interaction",
              "→",
              "setState Called",
              "→",
              "State Updated",
              "→",
              "Component Re-renders",
              "→",
              "UI Updates"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React stores the state value internally and preserves it between renders."
          }
 
        ]
      },
 
      {
        heading: "State vs Regular Variables",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Regular Variable:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `let count = 0;`
          },
 
          {
            type: "paragraph",
            content:
              "State Variable:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
 
          {
            type: "table",
            headers: [
              "Feature",
              "Variable",
              "State"
            ],
 
            rows: [
              ["Stores Data", "✅", "✅"],
              ["Persists Between Renders", "❌", "✅"],
              ["Triggers UI Update", "❌", "✅"],
              ["Managed By React", "❌", "✅"]
            ]
          },
 
          {
            type: "paragraph",
            content:
              "State is special because React tracks it."
          }
 
        ]
      },
 
      {
        heading: "Updating State",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "State should never be modified directly."
          },
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `count = count + 1;`
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "React must be informed through the setter function."
          }
 
        ]
      },
 
      {
        heading: "Multiple State Variables",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Components can have multiple pieces of state."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [name, setName] = useState("");
const [age, setAge] = useState(20);
const [city, setCity] = useState("Delhi");`
          },
 
          {
            type: "paragraph",
            content:
              "Each state variable operates independently."
          }
 
        ]
      },
 
      {
        heading: "State with Strings",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [message, setMessage] = useState("Hello");`
          },
 
          {
            type: "paragraph",
            content:
              "Update:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setMessage("Welcome");`
          },
 
          {
            type: "paragraph",
            content:
              "Before:"
          },
 
          {
            type: "output",
            content:
              "Hello"
          },
 
          {
            type: "paragraph",
            content:
              "After:"
          },
 
          {
            type: "output",
            content:
              "Welcome"
          }
 
        ]
      },
 
      {
        heading: "State with Numbers",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [score, setScore] = useState(10);`
          },
 
          {
            type: "paragraph",
            content:
              "Update:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setScore(score + 5);`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "15"
          }
 
        ]
      },
 
      {
        heading: "State with Booleans",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Useful for:"
          },
 
          {
            type: "list",
            items: [
              "Dark mode",
              "Authentication",
              "Visibility toggles"
            ]
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [isLoggedIn, setIsLoggedIn] = useState(false);`
          },
 
          {
            type: "paragraph",
            content:
              "Update:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setIsLoggedIn(true);`
          }
 
        ]
      },
 
      {
        heading: "Toggle Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [darkMode, setDarkMode] = useState(false);`
          },
 
          {
            type: "paragraph",
            content:
              "Toggle:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setDarkMode(!darkMode);`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "output",
            content: [
              "false → true",
              "true → false"
            ]
          }
 
        ]
      },
 
      {
        heading: "State with Arrays",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [items, setItems] = useState([]);`
          },
 
          {
            type: "paragraph",
            content:
              "Adding an item:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setItems([...items, "Laptop"]);`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "[\"Laptop\"]"
          },
 
          {
            type: "paragraph",
            content:
              "Add another:"
          },
 
          {
            type: "output",
            content:
              "[\"Laptop\", \"Phone\"]"
          }
 
        ]
      },
 
      {
        heading: "Why Arrays Must Be Updated Carefully",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `items.push("Laptop");
setItems(items);`
          },
 
          {
            type: "paragraph",
            content:
              "Problem: React may not detect changes correctly."
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setItems([...items, "Laptop"]);`
          },
 
          {
            type: "tip",
            content:
              "Always create a new array instead of mutating the existing one. React compares references to detect changes, so mutating the original array will not trigger a re-render."
          }
 
        ]
      },
 
      {
        heading: "State with Objects",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [user, setUser] = useState({
  name: "John",
  age: 25
});`
          },
 
          {
            type: "paragraph",
            content:
              "Update:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setUser({
  ...user,
  age: 26
});`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content: [
              "{",
              "  name: \"John\",",
              "  age: 26",
              "}"
            ]
          }
 
        ]
      },
 
      {
        heading: "Why State Should Be Immutable",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React expects state to be treated as immutable."
          },
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `user.age = 26;`
          },
 
          {
            type: "paragraph",
            content:
              "Good:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setUser({
  ...user,
  age: 26
});`
          },
 
          {
            type: "paragraph",
            content:
              "Immutability helps React detect changes efficiently."
          }
 
        ]
      },
 
      {
        heading: "Functional Updates",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Sometimes state depends on previous state."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "Use:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(prevCount => prevCount + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "This is called a functional update."
          }
 
        ]
      },
 
      {
        heading: "Why Functional Updates Matter",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Problem:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);
setCount(count + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "Expected:"
          },
 
          {
            type: "output",
            content:
              "+2"
          },
 
          {
            type: "paragraph",
            content:
              "Actual:"
          },
 
          {
            type: "output",
            content:
              "+1"
          },
 
          {
            type: "paragraph",
            content:
              "Because both updates use the same value."
          },
 
          {
            type: "paragraph",
            content:
              "Correct:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(prev => prev + 1);
setCount(prev => prev + 1);`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "+2"
          }
 
        ]
      },
 
      {
        heading: "State Updates Are Asynchronous",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React does not immediately update state."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);
 
console.log(count);`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Old value"
          },
 
          {
            type: "paragraph",
            content:
              "React schedules updates for performance reasons. This surprises many beginners."
          }
 
        ]
      },
 
      {
        heading: "Lazy Initialization",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Sometimes creating initial state is expensive."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useState(expensiveFunction());`
          },
 
          {
            type: "paragraph",
            content:
              "Use:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useState(() => expensiveFunction());`
          },
 
          {
            type: "paragraph",
            content:
              "React runs it only once during initial render. This improves performance."
          }
 
        ]
      },
 
      {
        heading: "Common useState Use Cases",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "Counter",
                description: "const [count, setCount] = useState(0);"
              },
 
              {
                title: "Form Input",
                description: "const [name, setName] = useState(\"\");"
              },
 
              {
                title: "Dark Mode",
                description: "const [darkMode, setDarkMode] = useState(false);"
              },
 
              {
                title: "Shopping Cart",
                description: "const [cart, setCart] = useState([]);"
              },
 
              {
                title: "User Data",
                description: "const [user, setUser] = useState(null);"
              }
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
                question: "Mistake 1: Forgetting to Import useState",
                answer:
                  "useState must be explicitly imported from React before use. Without this import, React cannot recognize the Hook and will throw a reference error.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `const [count, setCount] = useState(0);
// Missing import`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `import { useState } from "react";
 
const [count, setCount] = useState(0);`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Updating State Directly",
                answer:
                  "Mutating state directly bypasses React's update system. The UI will not re-render. Always use the setter function provided by useState.",
 
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
              },
 
              {
                question: "Mistake 3: Mutating Objects",
                answer:
                  "Directly modifying an object stored in state does not create a new reference. React will not detect the change and the UI will not update. Always spread the existing object and override only the changed properties.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `user.name = "Alex";`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `setUser({
  ...user,
  name: "Alex"
});`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Mutating Arrays",
                answer:
                  "Using array methods like push or splice mutates the existing array in place. React may not detect the change. Always create a new array using the spread operator or array methods that return a new array.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `items.push("Book");`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `setItems([...items, "Book"]);`
                  }
                ]
              },
 
              {
                question: "Mistake 5: Too Much State",
                answer:
                  "Storing derived values as separate state variables creates redundant state that must be kept in sync. If a value can be calculated from existing state, compute it directly instead.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");`
                  },
 
                  {
                    title: "Better",
                    language: "jsx",
                    content: `const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
 
const fullName = \`\${firstName} \${lastName}\`;`
                  }
                ]
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "When NOT to Use useState",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Avoid state when data:"
          },
 
          {
            type: "list",
            items: [
              "Never changes",
              "Can be derived from existing state",
              "Comes directly from props",
              "Is a constant value"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const taxRate = 0.18;`
          },
 
          {
            type: "paragraph",
            content:
              "No state required."
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
                title: "Use Meaningful Names",
                description: "Good: const [userName, setUserName]. Bad: const [x, setX]. Names should clearly describe what the state stores."
              },
 
              {
                title: "Keep State Minimal",
                description: "Store only necessary data. Avoid duplicate state that can be derived from existing state."
              },
 
              {
                title: "Prefer Functional Updates",
                description: "When new state depends on previous state, use setCount(prev => prev + 1) to avoid stale value bugs."
              },
 
              {
                title: "Never Mutate State",
                description: "Always create new arrays and objects instead of modifying existing ones. Immutability is key to React's change detection."
              },
 
              {
                title: "Group Related Data",
                description: "Instead of separate firstName, lastName, email, phone state variables, consider grouping them into a single user object when they are related."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Real-World Applications of useState",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Almost every React application uses useState. Examples:"
          },
 
          {
            type: "list",
            items: [
              "Login systems",
              "Shopping carts",
              "Dashboards",
              "Chat applications",
              "Todo lists",
              "Search filters",
              "Form validation",
              "Dark mode toggles"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "It is one of the most frequently used Hooks in React development."
          }
 
        ]
      },
 
      {
        heading: "useState Workflow",
 
        blocks: [
 
          {
            type: "flow",
            steps: [
              "Create State",
              "→",
              "Display State",
              "→",
              "User Interaction",
              "→",
              "Call Setter Function",
              "→",
              "State Updates",
              "→",
              "Component Re-renders",
              "→",
              "UI Updates Automatically"
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
              "The useState Hook allows React functional components to store and manage data that changes over time."
          },
 
          {
            type: "paragraph",
            content:
              "Key concepts learned:"
          },
 
          {
            type: "list",
            items: [
              "useState creates component state",
              "State persists between renders",
              "State updates trigger UI updates",
              "State can store strings, numbers, booleans, arrays, and objects",
              "State should never be mutated directly",
              "Functional updates help prevent bugs",
              "State updates are asynchronous",
              "Keeping state minimal improves performance"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "useState is often the first Hook developers master because it forms the foundation of interactive React applications."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think useState simply stores values. In reality, useState is React's mechanism for connecting data to the user interface. The moment state changes, React automatically determines what parts of the UI need updating and efficiently re-renders them. Understanding this connection between state and rendering is one of the biggest milestones in becoming a confident React developer."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : useEffect Hooks
============================= */
    "useeffect-hook": {
    title: "useEffect",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As applications become more dynamic, components often need to perform actions beyond simply rendering UI."
          },
 
          {
            type: "paragraph",
            content:
              "Examples include:"
          },
 
          {
            type: "list",
            items: [
              "Fetching data from an API",
              "Updating the browser title",
              "Setting up timers",
              "Listening for keyboard events",
              "Synchronizing with external systems",
              "Saving data to localStorage",
              "Connecting to WebSockets"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "These actions are called side effects."
          },
 
          {
            type: "paragraph",
            content:
              "A React component's primary job is to return JSX and describe what should appear on the screen. However, real applications frequently need to interact with the outside world."
          },
 
          {
            type: "paragraph",
            content:
              "React provides the useEffect Hook to handle these situations."
          },
 
          {
            type: "paragraph",
            content:
              "The useEffect Hook allows components to perform side effects after rendering. It is one of the most powerful Hooks in React and is used extensively in real-world applications."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What useEffect is",
              "Why React needs useEffect",
              "Understanding side effects",
              "Basic useEffect syntax",
              "Dependency arrays",
              "Running effects once",
              "Running effects on state changes",
              "Cleanup functions",
              "API requests",
              "Event listeners",
              "Timers and intervals",
              "Common mistakes",
              "Modern React best practices"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand when and how to use useEffect correctly in modern React applications."
          }
 
        ]
      },
 
      {
        heading: "What is a Side Effect?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A side effect is any operation that affects something outside the component itself."
          },
 
          {
            type: "paragraph",
            content:
              "Not a Side Effect:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const total = price * quantity;`
          },
 
          {
            type: "paragraph",
            content:
              "This simply calculates a value."
          },
 
          {
            type: "paragraph",
            content:
              "Side Effects:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `fetch("/api/users");`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `document.title = "Dashboard";`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `localStorage.setItem("theme", "dark");`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `window.addEventListener("resize", handleResize);`
          },
 
          {
            type: "paragraph",
            content:
              "These interact with systems outside React."
          }
 
        ]
      },
 
      {
        heading: "Why React Needs useEffect",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider a component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  document.title = "My App";
 
  return <h1>Hello</h1>;
}`
          },
 
          {
            type: "paragraph",
            content:
              "This technically works. However:"
          },
 
          {
            type: "list",
            items: [
              "It runs on every render.",
              "It mixes rendering with side-effect logic.",
              "It becomes difficult to maintain."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React introduced useEffect to separate rendering from side effects."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of:"
          },
 
          {
            type: "example",
            items: [
              "Render UI",
              "+",
              "Run External Logic"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React encourages:"
          },
 
          {
            type: "flow",
            steps: [
              "Render UI",
              "→",
              "Run Effect"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This keeps components predictable and organized."
          }
 
        ]
      },
 
      {
        heading: "What is useEffect?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useEffect is a React Hook that allows functional components to perform side effects after rendering."
          },
 
          {
            type: "quote",
            content:
              "useEffect lets you synchronize a component with an external system."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "API requests",
              "Browser APIs",
              "Timers",
              "Event listeners",
              "Local storage",
              "Third-party libraries"
            ]
          }
 
        ]
      },
 
      {
        heading: "Importing useEffect",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before using it:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect } from "react";`
          },
 
          {
            type: "warning",
            content:
              "Without this import, React cannot recognize the Hook and will throw a reference error."
          }
 
        ]
      },
 
      {
        heading: "Basic Syntax",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  // Side effect code
});`
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Component rendered");
});`
          },
 
          {
            type: "paragraph",
            content:
              "This runs after every render."
          }
 
        ]
      },
 
      {
        heading: "Understanding the Effect Lifecycle",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React follows this sequence:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Renders",
              "→",
              "DOM Updates",
              "→",
              "useEffect Runs"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Important: Effects run after React updates the screen. This ensures UI rendering remains fast and predictable."
          }
 
        ]
      },
 
      {
        heading: "Your First useEffect Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect } from "react";
 
function App() {
  useEffect(() => {
    console.log("Component rendered");
  });
 
  return <h1>Hello React</h1>;
}`
          },
 
          {
            type: "output",
            content:
              "Component rendered"
          },
 
          {
            type: "paragraph",
            content:
              "Every render triggers the effect."
          }
 
        ]
      },
 
      {
        heading: "Why Dependency Arrays Exist",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Without dependencies:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Running");
});`
          },
 
          {
            type: "paragraph",
            content:
              "Runs:"
          },
 
          {
            type: "flow",
            steps: [
              "Initial Render",
              "→",
              "Every Re-render"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is not always desirable. React provides dependency arrays to control when effects run."
          }
 
        ]
      },
 
      {
        heading: "Dependency Array Syntax",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  // Effect code
}, [dependencies]);`
          },
 
          {
            type: "paragraph",
            content:
              "The dependency array tells React when to rerun the effect."
          }
 
        ]
      },
 
      {
        heading: "Three Main useEffect Patterns",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Pattern 1: No Dependency Array"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Runs every render");
});`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "Initial Render → Runs",
              "→",
              "State Change → Runs Again",
              "→",
              "Another Render → Runs Again"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Use sparingly."
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Pattern 2: Empty Dependency Array"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Runs once");
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Mounts",
              "→",
              "Runs Once"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Common use cases:"
          },
 
          {
            type: "list",
            items: [
              "Initial API requests",
              "Initial setup",
              "Page analytics"
            ]
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "Pattern 3: Specific Dependencies"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Count changed");
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "Initial Render → Runs",
              "→",
              "count Changes → Runs Again",
              "→",
              "Other State Changes → Does Not Run"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is one of the most common patterns."
          }
 
        ]
      },
 
      {
        heading: "Running an Effect Once",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Welcome");
}, []);`
          },
 
          {
            type: "output",
            content:
              "Welcome"
          },
 
          {
            type: "paragraph",
            content:
              "Only once when the component mounts. Think of it as:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Appears",
              "→",
              "Run Effect"
            ]
          }
 
        ]
      },
 
      {
        heading: "Watching State Changes",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);
 
useEffect(() => {
  console.log("Count updated");
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "count = 0 → Effect Runs",
              "→",
              "count = 1 → Effect Runs",
              "→",
              "count = 2 → Effect Runs"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React watches the dependency."
          }
 
        ]
      },
 
      {
        heading: "Multiple Dependencies",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  console.log("Updated");
}, [count, name]);`
          },
 
          {
            type: "paragraph",
            content:
              "Runs when:"
          },
 
          {
            type: "list",
            items: [
              "count changes",
              "OR name changes"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Either dependency triggers the effect."
          }
 
        ]
      },
 
      {
        heading: "Real Example: Updating Page Title",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  document.title =
    \`Count: \${count}\`;
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content: [
              "Count: 0",
              "Count: 1",
              "Count: 2"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Browser title updates automatically. This is a common useEffect use case."
          }
 
        ]
      },
 
      {
        heading: "Fetching Data with useEffect",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most important applications of useEffect."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Workflow:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Mounts",
              "→",
              "API Request Sent",
              "→",
              "Data Received",
              "→",
              "State Updated",
              "→",
              "UI Re-renders"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This pattern appears in nearly every React application."
          }
 
        ]
      },
 
      {
        heading: "Saving Data to Local Storage",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  localStorage.setItem(
    "theme",
    theme
  );
}, [theme]);`
          },
 
          {
            type: "paragraph",
            content:
              "Whenever theme changes:"
          },
 
          {
            type: "output",
            content: [
              "Light → Stored",
              "Dark → Stored"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Useful for user preferences."
          }
 
        ]
      },
 
      {
        heading: "Using Timers",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  const timer =
    setTimeout(() => {
      console.log("Hello");
    }, 3000);
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Loads",
              "→",
              "Wait 3 Seconds",
              "→",
              "Print Message"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Timers are a common side effect."
          }
 
        ]
      },
 
      {
        heading: "Using Intervals",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  const interval =
    setInterval(() => {
      console.log("Running");
    }, 1000);
}, []);`
          },
 
          {
            type: "output",
            content: [
              "Running",
              "Running",
              "Running",
              "..."
            ]
          },
 
          {
            type: "warning",
            content:
              "Without cleanup, this interval continues running even after the component is removed, causing memory leaks."
          }
 
        ]
      },
 
      {
        heading: "What is Cleanup?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Some effects create resources that must be removed."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Event listeners",
              "Timers",
              "Intervals",
              "WebSockets",
              "Subscriptions"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React allows effects to return a cleanup function."
          }
 
        ]
      },
 
      {
        heading: "Cleanup Function Syntax",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  // Setup
 
  return () => {
    // Cleanup
  };
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "React runs cleanup:"
          },
 
          {
            type: "list",
            items: [
              "Before Effect Re-runs",
              "OR When Component Unmounts"
            ]
          }
 
        ]
      },
 
      {
        heading: "Cleaning Up Intervals",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  const interval =
    setInterval(() => {
      console.log("Running");
    }, 1000);
 
  return () => {
    clearInterval(interval);
  };
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Now React removes the interval correctly."
          }
 
        ]
      },
 
      {
        heading: "Event Listener Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };
 
  window.addEventListener(
    "resize",
    handleResize
  );
 
  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );
  };
}, []);`
          },
 
          {
            type: "comparison",
            leftTitle: "Without Cleanup",
            leftItems: [
              "Memory leaks",
              "Duplicate listeners",
              "Performance issues"
            ],
 
            rightTitle: "With Cleanup",
            rightItems: [
              "Safe",
              "Efficient",
              "Predictable"
            ]
          }
 
        ]
      },
 
      {
        heading: "Component Mounting and Unmounting",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Think of components like this:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Appears → Mounted",
              "→",
              "Component Removed → Unmounted"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Effects often perform:"
          },
 
          {
            type: "flow",
            steps: [
              "Setup on Mount",
              "→",
              "Cleanup on Unmount"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This pattern is extremely common."
          }
 
        ]
      },
 
      {
        heading: "Common useEffect Use Cases",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "API Requests",
                description: "Fetch data from a server when the component mounts or when a dependency changes."
              },
 
              {
                title: "Browser Title",
                description: "Update the browser tab title dynamically based on current application state."
              },
 
              {
                title: "Local Storage",
                description: "Persist user preferences such as themes, settings, or session data."
              },
 
              {
                title: "Timers",
                description: "Run countdowns, notifications, or delayed actions using setTimeout or setInterval."
              },
 
              {
                title: "Event Listeners",
                description: "Listen for keyboard events, window resize, or scroll tracking and clean up on unmount."
              },
 
              {
                title: "Third-Party Libraries",
                description: "Initialize and synchronize external libraries like charts, maps, or analytics tools."
              }
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
                question: "Mistake 1: Forgetting Dependencies",
                answer:
                  "If a value used inside useEffect is not listed in the dependency array, the effect will use a stale version of that value. Always include every value the effect depends on.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `useEffect(() => {
  console.log(count);
}, []); // count is missing`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `useEffect(() => {
  console.log(count);
}, [count]);`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Infinite Loops",
                answer:
                  "Calling a state setter inside useEffect without a proper dependency array causes the component to re-render infinitely. The effect runs, updates state, triggers a re-render, which runs the effect again.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `useEffect(() => {
  setCount(count + 1);
}); // No dependency array`
                  },
 
                  {
                    title: "Behavior",
                    language: "text",
                    content: `Render → setCount → Render → setCount → Forever`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Missing Cleanup",
                answer:
                  "Intervals, timers, and event listeners created inside useEffect continue running even after the component unmounts. Always return a cleanup function to remove them.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `useEffect(() => {
  setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);
 
  return () => clearInterval(interval);
}, []);`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Using useEffect for Everything",
                answer:
                  "Many beginners use useEffect for values that can simply be computed during rendering. Derived values do not need an effect — compute them directly instead.",
 
                examples: [
                  {
                    title: "Bad",
                    language: "jsx",
                    content: `useEffect(() => {
  setFullName(firstName + lastName);
}, [firstName, lastName]);`
                  },
 
                  {
                    title: "Better",
                    language: "jsx",
                    content: `const fullName = firstName + lastName;`
                  }
                ]
              },
 
              {
                question: "Mistake 5: Ignoring Dependency Warnings",
                answer:
                  "ESLint warnings about missing dependencies often indicate real bugs such as stale closures or effects that never rerun when they should. Always understand and address them rather than disabling the warning."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Modern React Thinking",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Earlier React tutorials often used useEffect heavily. Modern React encourages:"
          },
 
          {
            type: "quote",
            content:
              "Compute During Render Whenever Possible."
          },
 
          {
            type: "paragraph",
            content:
              "Use useEffect only when synchronizing with something outside React."
          },
 
          {
            type: "comparison",
            leftTitle: "Good useEffect",
            leftItems: [
              "API Calls",
              "Browser APIs",
              "Timers",
              "Subscriptions"
            ],
 
            rightTitle: "Bad useEffect",
            rightItems: [
              "Simple Calculations",
              "Derived Values"
            ]
          }
 
        ]
      },
 
      {
        heading: "useEffect Workflow",
 
        blocks: [
 
          {
            type: "flow",
            steps: [
              "Component Renders",
              "→",
              "React Updates DOM",
              "→",
              "Effect Runs",
              "→",
              "External System Updated",
              "→",
              "Cleanup (if needed)"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is the core mental model."
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
                title: "Keep Effects Focused",
                description: "One responsibility per effect. Separate unrelated side effects into their own useEffect calls."
              },
 
              {
                title: "Always Include Needed Dependencies",
                description: "Avoid stale data bugs by including every value the effect reads or uses in the dependency array."
              },
 
              {
                title: "Cleanup Resources",
                description: "Always return a cleanup function to remove event listeners, clear timers, and cancel subscriptions."
              },
 
              {
                title: "Avoid Unnecessary Effects",
                description: "Prefer regular React rendering when possible. If a value can be computed during render, do it there instead."
              },
 
              {
                title: "Separate Effects by Purpose",
                description: "Use multiple focused effects instead of one large effect. Example: one for API requests, one for the page title, one for event listeners."
              }
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
              "The useEffect Hook allows React components to perform side effects after rendering."
          },
 
          {
            type: "paragraph",
            content:
              "Key concepts learned:"
          },
 
          {
            type: "list",
            items: [
              "Side effects interact with systems outside React",
              "useEffect runs after rendering",
              "Dependency arrays control execution",
              "Empty arrays run effects once",
              "Dependencies rerun effects when values change",
              "Cleanup functions prevent memory leaks",
              "Common uses include APIs, timers, storage, and event listeners",
              "Modern React encourages using effects only when truly necessary"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "useEffect is one of the most important Hooks in React because it connects React applications to the outside world."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think useEffect is simply \"the place to put code after rendering.\" In reality, useEffect is specifically designed for synchronizing React with external systems such as APIs, browsers, timers, storage, and subscriptions. The best React developers actually try to use useEffect less, not more. If something can be calculated directly during rendering, it usually should be. Understanding when not to use useEffect is often more valuable than learning its syntax."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : useContext Hooks
============================= */
    "usecontext-hook": {
    title: "useContext",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As React applications grow, data often needs to be shared across multiple components."
          },
 
          {
            type: "paragraph",
            content:
              "Consider a real-world application:"
          },
 
          {
            type: "list",
            items: [
              "User authentication data",
              "Theme settings (Light/Dark Mode)",
              "Language preferences",
              "Shopping cart information",
              "Notifications",
              "Application settings"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Many components may need access to the same data."
          },
 
          {
            type: "paragraph",
            content:
              "Without a proper solution, developers often pass data manually from parent components to child components using props."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "flow",
            steps: [
              "App",
              "→",
              "Layout",
              "→",
              "Navbar",
              "→",
              "ProfileMenu",
              "→",
              "UserInfo"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "If UserInfo needs user data, every component in the chain must pass the props down."
          },
 
          {
            type: "paragraph",
            content:
              "This process is called Prop Drilling."
          },
 
          {
            type: "paragraph",
            content:
              "As applications grow, prop drilling becomes difficult to maintain."
          },
 
          {
            type: "paragraph",
            content:
              "React provides the Context API and the useContext Hook to solve this problem."
          },
 
          {
            type: "paragraph",
            content:
              "The useContext Hook allows components to access shared data directly without manually passing props through every intermediate component."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What useContext is",
              "Why React introduced Context",
              "Understanding prop drilling",
              "Creating Context",
              "Providing Context",
              "Consuming Context",
              "How useContext works internally",
              "Real-world use cases",
              "Context vs Props",
              "Context vs State Management Libraries",
              "Performance considerations",
              "Common mistakes",
              "Professional best practices"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand how to share data efficiently across React applications using Context."
          }
 
        ]
      },
 
      {
        heading: "The Problem: Prop Drilling",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider the following component hierarchy:"
          },
 
          {
            type: "flow",
            steps: [
              "App",
              "→",
              "Dashboard",
              "→",
              "Sidebar",
              "→",
              "ProfileCard"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Suppose App contains user information:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const user = {
  name: "John",
  role: "Admin"
};`
          },
 
          {
            type: "paragraph",
            content:
              "Without Context:"
          },
 
          {
            type: "flow",
            steps: [
              "App",
              "→",
              "Dashboard (passes user)",
              "→",
              "Sidebar (passes user)",
              "→",
              "ProfileCard (uses user)"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Even though only ProfileCard needs the data, every component must forward it."
          },
 
          {
            type: "paragraph",
            content:
              "This creates:"
          },
 
          {
            type: "list",
            items: [
              "Extra code",
              "Unnecessary complexity",
              "Difficult maintenance"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This problem is called prop drilling."
          }
 
        ]
      },
 
      {
        heading: "What is Context?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context is a React feature that allows data to be shared across components without manually passing props."
          },
 
          {
            type: "paragraph",
            content:
              "Think of Context as a global data channel."
          },
 
          {
            type: "paragraph",
            content:
              "Instead of passing down through every level:"
          },
 
          {
            type: "flow",
            steps: [
              "Parent",
              "→",
              "Child",
              "→",
              "Grandchild",
              "→",
              "Great Grandchild"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Data becomes available directly to any component:"
          },
 
          {
            type: "example",
            items: [
              "Context",
              "↙     ↓      ↘",
              "Navbar — Sidebar — Profile"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Any component can access the shared data."
          }
 
        ]
      },
 
      {
        heading: "What is useContext?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useContext is a React Hook that allows components to read values from a Context."
          },
 
          {
            type: "quote",
            content:
              "useContext lets you read and subscribe to context from your component."
          },
 
          {
            type: "paragraph",
            content:
              "It provides direct access to shared application data."
          }
 
        ]
      },
 
      {
        heading: "Why React Created Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before Context, data had to travel through every layer:"
          },
 
          {
            type: "flow",
            steps: [
              "Props",
              "→",
              "Props",
              "→",
              "Props",
              "→",
              "Props"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Large applications became difficult to manage. React introduced Context to:"
          },
 
          {
            type: "list",
            items: [
              "Reduce prop drilling",
              "Simplify shared state",
              "Improve component architecture",
              "Make data access easier"
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
              "Imagine a dark mode setting. Many components need it:"
          },
 
          {
            type: "tree",
            content: `App
  ├── Navbar
  ├── Sidebar
  ├── Footer
  ├── Dashboard
  └── Settings`
          },
 
          {
            type: "comparison",
            leftTitle: "Without Context",
            leftItems: [
              "Pass theme prop to Navbar",
              "Pass theme prop to Sidebar",
              "Pass theme prop to Footer",
              "Pass theme prop to Dashboard",
              "Pass theme prop to Settings"
            ],
 
            rightTitle: "With Context",
            rightItems: [
              "ThemeContext provides theme",
              "Any component accesses it directly",
              "No prop drilling needed",
              "Much cleaner architecture"
            ]
          }
 
        ]
      },
 
      {
        heading: "Three Parts of Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Using Context involves three steps:"
          },
 
          {
            type: "flow",
            steps: [
              "Create Context",
              "→",
              "Provide Context",
              "→",
              "Consume Context"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Every Context implementation follows this workflow."
          }
 
        ]
      },
 
      {
        heading: "Step 1: Creating Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context is created using createContext:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { createContext } from "react";
 
const ThemeContext = createContext();`
          },
 
          {
            type: "paragraph",
            content:
              "This creates a Context object. Think of it as creating a shared data container."
          }
 
        ]
      },
 
      {
        heading: "Step 2: Providing Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "A Provider supplies data to components."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<ThemeContext.Provider
  value="dark"
>
  <App />
</ThemeContext.Provider>`
          },
 
          {
            type: "paragraph",
            content:
              "The value becomes available to all child components."
          },
 
          {
            type: "paragraph",
            content:
              "Workflow:"
          },
 
          {
            type: "flow",
            steps: [
              "Provider",
              "→",
              "Child Components",
              "→",
              "Grandchild Components",
              "→",
              "All Descendants"
            ]
          }
 
        ]
      },
 
      {
        heading: "Step 3: Consuming Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Inside a component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useContext } from "react";
 
const theme = useContext(ThemeContext);`
          },
 
          {
            type: "paragraph",
            content:
              "React returns the value from the nearest Provider."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const theme = useContext(ThemeContext);
 
return <h1>{theme}</h1>;`
          },
 
          {
            type: "output",
            content:
              "dark"
          }
 
        ]
      },
 
      {
        heading: "Complete Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Create Context:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { createContext } from "react";
 
export const UserContext = createContext();`
          },
 
          {
            type: "paragraph",
            content:
              "Provide Context:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider
  value="John"
>
  <Dashboard />
</UserContext.Provider>`
          },
 
          {
            type: "paragraph",
            content:
              "Consume Context:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useContext } from "react";
 
const user = useContext(UserContext);
 
return <h1>{user}</h1>;`
          },
 
          {
            type: "output",
            content:
              "John"
          },
 
          {
            type: "paragraph",
            content:
              "The value travels directly through Context."
          }
 
        ]
      },
 
      {
        heading: "How useContext Works Internally",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React maintains a tree of Providers."
          },
 
          {
            type: "flow",
            steps: [
              "ThemeProvider",
              "→",
              "Navbar",
              "→",
              "Sidebar",
              "→",
              "Profile"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "When useContext(ThemeContext) is called, React searches upward until it finds the nearest matching Provider. Then it returns the provided value."
          }
 
        ]
      },
 
      {
        heading: "Understanding Provider Scope",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `<ThemeProvider>
  <Navbar />
</ThemeProvider>
 
<Footer />`
          },
 
          {
            type: "paragraph",
            content:
              "Navbar calling useContext(ThemeContext) works."
          },
 
          {
            type: "paragraph",
            content:
              "Footer calling useContext(ThemeContext) fails because Footer is outside the Provider."
          },
 
          {
            type: "warning",
            content:
              "Context only works inside its Provider scope. Components that are rendered outside the Provider boundary will not receive the Context value."
          }
 
        ]
      },
 
      {
        heading: "Using Objects as Context Values",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context values are often objects."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider
  value={{
    name: "John",
    role: "Admin"
  }}
>`
          },
 
          {
            type: "paragraph",
            content:
              "Access:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const user = useContext(UserContext);
 
console.log(user.name);`
          },
 
          {
            type: "output",
            content:
              "John"
          },
 
          {
            type: "paragraph",
            content:
              "This is extremely common."
          }
 
        ]
      },
 
      {
        heading: "Sharing State Through Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context becomes powerful when combined with useState."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [theme, setTheme] = useState("light");`
          },
 
          {
            type: "paragraph",
            content:
              "Provide both the value and the setter:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<ThemeContext.Provider
  value={{
    theme,
    setTheme
  }}
>`
          },
 
          {
            type: "paragraph",
            content:
              "Now any component can read and change the theme. This creates global shared state."
          }
 
        ]
      },
 
      {
        heading: "Theme Switcher Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context value:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `{
  theme,
  setTheme
}`
          },
 
          {
            type: "paragraph",
            content:
              "Component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const {
  theme,
  setTheme
} = useContext(ThemeContext);`
          },
 
          {
            type: "paragraph",
            content:
              "Update:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setTheme("dark");`
          },
 
          {
            type: "output",
            content: [
              "Entire Application",
              "Updates Automatically"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is one of the most common Context use cases."
          }
 
        ]
      },
 
      {
        heading: "Authentication Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many applications use:"
          },
 
          {
            type: "list",
            items: [
              "Current User",
              "Login Status",
              "Permissions",
              "Tokens"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Instead of passing auth props everywhere, AuthContext stores authentication data globally."
          },
 
          {
            type: "paragraph",
            content:
              "Components access it directly:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const user = useContext(AuthContext);`
          },
 
          {
            type: "paragraph",
            content:
              "This pattern appears in most professional applications."
          }
 
        ]
      },
 
      {
        heading: "Common useContext Use Cases",
 
        blocks: [
 
          {
            type: "cards",
            items: [
              {
                title: "Theme Management",
                description: "Share Light Mode and Dark Mode settings across the entire application."
              },
 
              {
                title: "Authentication",
                description: "Provide current user info, login status, and roles to any component that needs it."
              },
 
              {
                title: "Shopping Cart",
                description: "Share cart products, total price, and item count across cart and product components."
              },
 
              {
                title: "Language Settings",
                description: "Distribute the active language preference (English, Spanish, French) application-wide."
              },
 
              {
                title: "Notifications",
                description: "Share messages, alerts, and toast notifications globally across the application."
              },
 
              {
                title: "Application Settings",
                description: "Provide user preferences and configuration options to any component that needs them."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Context vs Props",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Props — best for direct communication:"
          },
 
          {
            type: "flow",
            steps: [
              "Parent",
              "→",
              "Child"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Context — best for globally needed values:"
          },
 
          {
            type: "flow",
            steps: [
              "Shared Data",
              "→",
              "Many Components"
            ]
          }
 
        ]
      },
 
      {
        heading: "When to Use Props",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Use props when:"
          },
 
          {
            type: "list",
            items: [
              "Data is needed by only a few components.",
              "Parent-child communication is simple.",
              "The component hierarchy is shallow."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Props remain React's primary data-sharing mechanism."
          }
 
        ]
      },
 
      {
        heading: "When to Use Context",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Use Context when:"
          },
 
          {
            type: "list",
            items: [
              "Many components need the same data.",
              "Prop drilling becomes excessive.",
              "Data is application-wide."
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
              "Theme",
              "Auth",
              "Language",
              "Cart"
            ]
          }
 
        ]
      },
 
      {
        heading: "Context vs State",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners confuse Context and State."
          },
 
          {
            type: "paragraph",
            content:
              "State stores data:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
 
          {
            type: "paragraph",
            content:
              "Context shares data:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useContext(ThemeContext);`
          },
 
          {
            type: "paragraph",
            content:
              "Think of it as:"
          },
 
          {
            type: "comparison",
            leftTitle: "State",
            leftItems: [
              "Stores data inside a component",
              "Local to the component by default",
              "Updated using setter functions"
            ],
 
            rightTitle: "Context",
            rightItems: [
              "Distributes data across components",
              "Available to any descendant",
              "Does not store — only shares"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Context does not replace state. It distributes state."
          }
 
        ]
      },
 
      {
        heading: "Context vs Redux",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Context often gets compared to Redux."
          },
 
          {
            type: "comparison",
            leftTitle: "Context",
            leftItems: [
              "Theme",
              "Auth",
              "Settings",
              "Small Shared State"
            ],
 
            rightTitle: "Redux",
            rightItems: [
              "Large Complex Applications",
              "Advanced State Logic",
              "Huge Data Flows"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Modern React applications frequently use Context before introducing Redux."
          }
 
        ]
      },
 
      {
        heading: "Performance Considerations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Every Context update causes consumers to re-render."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setTheme("dark");`
          },
 
          {
            type: "paragraph",
            content:
              "All components using ThemeContext update. This is usually fine. However:"
          },
 
          {
            type: "list",
            items: [
              "Huge Context objects",
              "Frequent updates",
              "Many consumers"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Can impact performance. Professional developers often split Contexts."
          },
 
          {
            type: "comparison",
            leftTitle: "Bad",
            leftItems: [
              "One Giant Context",
              "Auth + Theme + Cart + Settings + Notifications all in one",
              "Every update re-renders all consumers"
            ],
 
            rightTitle: "Better",
            rightItems: [
              "ThemeContext",
              "AuthContext",
              "CartContext",
              "Each focused and independent"
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
                question: "Mistake 1: Using Context Everywhere",
                answer:
                  "Not all data belongs in Context. Context is designed for data that many components across the tree need. For simple parent-child data sharing, props are the correct and simpler choice."
              },
 
              {
                question: "Mistake 2: Replacing Props Completely",
                answer:
                  "Props are still important and remain React's primary data-sharing mechanism. Context supplements props for application-wide data. It does not replace them for component-specific communication."
              },
 
              {
                question: "Mistake 3: Giant Context Objects",
                answer:
                  "Putting all application data into a single Context object means every update re-renders all consumers, even if they only care about one piece of data. Split related data into separate, focused Contexts instead."
              },
 
              {
                question: "Mistake 4: Forgetting Provider",
                answer:
                  "Calling useContext without wrapping the component tree inside the matching Provider will return undefined. Always ensure the consuming component is a descendant of the Provider.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `// No Provider wrapping the tree
const user = useContext(UserContext);`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `<UserContext.Provider value="John">
  <Dashboard />
</UserContext.Provider>`
                  }
                ]
              },
 
              {
                question: "Mistake 5: Creating Context Inside Components",
                answer:
                  "Creating Context inside a component causes a new Context object to be created on every render, which breaks the sharing mechanism entirely. Always create Context at the module level, outside of any component.",
 
                examples: [
                  {
                    title: "Incorrect",
                    language: "jsx",
                    content: `function App() {
  const Context = createContext();
}`
                  },
 
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `const Context = createContext();
 
function App() {
  // use Context here
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
            type: "cards",
            items: [
              {
                title: "Create Separate Context Files",
                description: "Organize Contexts into their own files. Example: contexts/AuthContext.js, contexts/ThemeContext.js, contexts/CartContext.js."
              },
 
              {
                title: "Keep Context Focused",
                description: "One responsibility per Context. Avoid mixing unrelated data into the same Context object."
              },
 
              {
                title: "Combine Context with Custom Hooks",
                description: "Create custom hooks like useAuth(), useTheme(), and useCart() that internally call useContext. This improves readability and hides implementation details."
              },
 
              {
                title: "Use Props First",
                description: "Only introduce Context when prop drilling becomes a real problem. Props are simpler and should remain the default choice."
              },
 
              {
                title: "Avoid Frequently Changing Data",
                description: "Rapidly changing values may be better handled with specialized state management solutions. Context is best for relatively stable shared data."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Context Workflow",
 
        blocks: [
 
          {
            type: "flow",
            steps: [
              "Create Context",
              "→",
              "Create Provider",
              "→",
              "Wrap Components",
              "→",
              "Consume with useContext",
              "→",
              "Access Shared Data"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This is the complete Context lifecycle."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The useContext Hook allows React components to access shared data without prop drilling."
          },
 
          {
            type: "paragraph",
            content:
              "Key concepts learned:"
          },
 
          {
            type: "list",
            items: [
              "Context solves prop drilling",
              "useContext reads values from Context",
              "Context requires a Provider",
              "Any descendant component can access shared values",
              "Common uses include theme, authentication, language, and cart data",
              "Context distributes state but does not replace state",
              "Props are still important",
              "Multiple focused Contexts are better than one giant Context"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Context is one of React's most important tools for managing shared application data and is widely used in modern React applications."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many beginners think useContext is a state management solution. It is not. Context itself does not manage state — it only provides a way to share data across components. The actual data is usually stored using useState or useReducer, while Context simply makes that data available throughout the component tree. Understanding this distinction helps you decide when Context is enough and when larger state management solutions like Redux or Zustand may be needed."
          }
 
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : useRef Hook
============================= */
    "useref-hook": {
    title: "useRef",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Most React Hooks trigger component updates when their values change."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "Whenever setCount() updates the state, React re-renders the component."
          },
          {
            type: "paragraph",
            content: "However, sometimes developers need to store data without causing a re-render."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Accessing an input field directly",
              "Focusing an element automatically",
              "Storing a timer ID",
              "Tracking previous values",
              "Measuring element dimensions",
              "Interacting with DOM elements",
              "Keeping mutable values between renders"
            ]
          },
          {
            type: "paragraph",
            content: "This is where the useRef Hook becomes useful."
          },
          {
            type: "paragraph",
            content: "The useRef Hook allows React components to store values that persist across renders without triggering re-renders when changed."
          },
          {
            type: "paragraph",
            content: "It also provides direct access to DOM elements."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What useRef is",
              "Why React introduced useRef",
              "How refs work",
              "Creating refs",
              "Accessing DOM elements",
              "Storing mutable values",
              "useRef vs useState",
              "Common use cases",
              "Advanced practical examples",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand when to use useRef and when not to use it."
          }
        ]
      },

      {
        heading: "What is useRef?",
        blocks: [
          {
            type: "paragraph",
            content: "useRef is a React Hook that creates a mutable object whose value persists across renders."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const ref = useRef(initialValue);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const countRef = useRef(0);`
          },
          {
            type: "paragraph",
            content: "React returns:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  current: 0
}`
          },
          {
            type: "paragraph",
            content: "The value is stored inside the current property."
          }
        ]
      },

      {
        heading: "Why React Introduced useRef",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a counter:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "Updating count:"
          },
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);`
          },
          {
            type: "paragraph",
            content: "causes:"
          },
          {
            type: "flow",
            steps: [
              "State Update", "→",
              "Component Re-renders", "→",
              "UI Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Sometimes re-rendering is unnecessary."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "Store timer ID",
              "Store previous value",
              "Store DOM reference"
            ]
          },
          {
            type: "paragraph",
            content: "Updating these values does not require UI updates."
          },
          {
            type: "paragraph",
            content: "React introduced useRef for these scenarios."
          }
        ]
      },

      {
        heading: "Understanding Refs",
        blocks: [
          {
            type: "paragraph",
            content: "Think of a ref as a persistent storage box."
          },
          {
            type: "flow",
            steps: [
              "Component Render", "→",
              "Ref Exists", "→",
              "Component Re-render", "→",
              "Same Ref Still Exists"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike ordinary variables:"
          },
          {
            type: "code",
            language: "jsx",
            content: `let count = 0;`
          },
          {
            type: "paragraph",
            content: "which reset after every render, refs preserve values."
          }
        ]
      },

      {
        heading: "Creating Your First Ref",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useRef } from "react";

function App() {
  const counterRef = useRef(0);

  return <h1>Hello</h1>;
}`
          },
          {
            type: "paragraph",
            content: "React creates:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  current: 0
}`
          },
          {
            type: "paragraph",
            content: "behind the scenes."
          }
        ]
      },

      {
        heading: "Understanding the current Property",
        blocks: [
          {
            type: "paragraph",
            content: "Every ref contains:"
          },
          {
            type: "output",
            content: "ref.current"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const countRef = useRef(5);

console.log(countRef.current);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "5"
          },
          {
            type: "paragraph",
            content: "Updating:"
          },
          {
            type: "code",
            language: "jsx",
            content: `countRef.current = 10;`
          },
          {
            type: "paragraph",
            content: "New value:"
          },
          {
            type: "output",
            content: "10"
          },
          {
            type: "paragraph",
            content: "No re-render occurs."
          }
        ]
      },

      {
        heading: "useRef vs Normal Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `let count = 0;`
          },
          {
            type: "paragraph",
            content: "Problem:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Variable Created", "→",
              "Re-render", "→",
              "Variable Resets"
            ]
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Value Lost"
          },
          {
            type: "paragraph",
            content: "Ref:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const countRef = useRef(0);`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Value Stored", "→",
              "Re-render", "→",
              "Value Preserved"
            ]
          },
          {
            type: "paragraph",
            content: "This persistence is one of the main benefits of useRef."
          }
        ]
      },

      {
        heading: "useRef vs useState",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these Hooks."
          },
          {
            type: "paragraph",
            content: "useState"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] =
  useState(0);`
          },
          {
            type: "paragraph",
            content: "Updating:"
          },
          {
            type: "code",
            language: "jsx",
            content: `setCount(1);`
          },
          {
            type: "paragraph",
            content: "causes:"
          },
          {
            type: "output",
            content: "Re-render"
          },
          {
            type: "paragraph",
            content: "useRef"
          },
          {
            type: "code",
            language: "jsx",
            content: `const countRef =
  useRef(0);`
          },
          {
            type: "paragraph",
            content: "Updating:"
          },
          {
            type: "code",
            language: "jsx",
            content: `countRef.current = 1;`
          },
          {
            type: "paragraph",
            content: "causes:"
          },
          {
            type: "output",
            content: "No Re-render"
          }
        ]
      },

      {
        heading: "Quick Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "useState", "useRef"],
            rows: [
              ["Persists Between Renders", "✅", "✅"],
              ["Triggers Re-render", "✅", "❌"],
              ["Used for UI State", "✅", "❌"],
              ["Used for DOM Access", "❌", "✅"],
              ["Stores Mutable Values", "Limited", "✅"]
            ]
          }
        ]
      },

      {
        heading: "Accessing DOM Elements",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common uses of useRef is accessing DOM elements."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const inputRef = useRef(null);`
          },
          {
            type: "paragraph",
            content: "Attach it:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<input ref={inputRef} />`
          },
          {
            type: "paragraph",
            content: "React now stores the input element inside:"
          },
          {
            type: "output",
            content: "inputRef.current"
          }
        ]
      },

      {
        heading: "Focusing an Input Automatically",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Clicking the button focuses the input."
          }
        ]
      },

      {
        heading: "How DOM Refs Work",
        blocks: [
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Create Ref", "→",
              "Attach to Element", "→",
              "React Stores DOM Node", "→",
              "Access Using current"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `inputRef.current`
          },
          {
            type: "paragraph",
            content: "returns:"
          },
          {
            type: "output",
            content: "Actual HTML Input Element"
          }
        ]
      },

      {
        heading: "Reading Input Values",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const inputRef = useRef();`
          },
          {
            type: "paragraph",
            content: "Access:"
          },
          {
            type: "code",
            language: "jsx",
            content: `console.log(
  inputRef.current.value
);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Current Input Value"
          },
          {
            type: "paragraph",
            content: "This creates an uncontrolled input."
          }
        ]
      },

      {
        heading: "Storing Mutable Values",
        blocks: [
          {
            type: "paragraph",
            content: "Refs can store any data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const userRef = useRef({
  name: "John"
});`
          },
          {
            type: "paragraph",
            content: "Access:"
          },
          {
            type: "code",
            language: "jsx",
            content: `console.log(
  userRef.current.name
);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "John"
          }
        ]
      },

      {
        heading: "Tracking Render Count",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const renderCount =
  useRef(0);

renderCount.current++;`
          },
          {
            type: "paragraph",
            content: "Every render:"
          },
          {
            type: "output",
            content: [
              "1",
              "2",
              "3",
              "4",
              "..."
            ]
          },
          {
            type: "paragraph",
            content: "This is useful for debugging."
          }
        ]
      },

      {
        heading: "Storing Previous Values",
        blocks: [
          {
            type: "paragraph",
            content: "One advanced use case is tracking previous state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const previousCount =
  useRef();`
          },
          {
            type: "paragraph",
            content: "Inside useEffect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `previousCount.current =
  count;`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "output",
            content: [
              "Current Value",
              "Previous Value"
            ]
          },
          {
            type: "paragraph",
            content: "can both be accessed."
          }
        ]
      },

      {
        heading: "Timer Example",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const timerRef =
  useRef(null);`
          },
          {
            type: "paragraph",
            content: "Store timer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `timerRef.current =
  setInterval(...);`
          },
          {
            type: "paragraph",
            content: "Later:"
          },
          {
            type: "code",
            language: "jsx",
            content: `clearInterval(
  timerRef.current
);`
          },
          {
            type: "paragraph",
            content: "Perfect use case because timer IDs do not need UI updates."
          }
        ]
      },

      {
        heading: "Measuring Element Size",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const divRef = useRef();`
          },
          {
            type: "paragraph",
            content: "Access:"
          },
          {
            type: "code",
            language: "jsx",
            content: `divRef.current.offsetWidth`
          },
          {
            type: "paragraph",
            content: "Possible measurements:"
          },
          {
            type: "output",
            content: [
              "Width",
              "Height",
              "Position",
              "Scroll Values"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for animations and responsive layouts."
          }
        ]
      },

      {
        heading: "Scrolling to Elements",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `sectionRef.current
  .scrollIntoView();`
          },
          {
            type: "paragraph",
            content: "Common use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Navigation menus",
              "Chat applications",
              "Form validation errors",
              "Landing pages"
            ]
          }
        ]
      },

      {
        heading: "useRef with useEffect",
        blocks: [
          {
            type: "paragraph",
            content: "Many DOM operations occur inside useEffect."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  inputRef.current.focus();
}, []);`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Component Mounts", "→",
              "Effect Runs", "→",
              "Input Focuses"
            ]
          },
          {
            type: "paragraph",
            content: "This is a common interview question."
          }
        ]
      },

      {
        heading: "Real-World useRef Use Cases",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Auto Focus Input",
                description: "Search Bars, Login Forms, Chat Applications"
              },
              {
                title: "Store Timers",
                description: "setTimeout, setInterval"
              },
              {
                title: "Track Previous Values",
                description: "Previous State, Previous Props"
              },
              {
                title: "Scroll Management",
                description: "Chat Windows, Navigation, Forms"
              },
              {
                title: "Measure DOM Elements",
                description: "Width, Height, Position"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Integrating Third-Party Libraries"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Charts",
              "Maps",
              "Video Players",
              "Animations"
            ]
          },
          {
            type: "paragraph",
            content: "Many external libraries require direct DOM access."
          }
        ]
      },

      {
        heading: "What useRef Does NOT Do",
        blocks: [
          {
            type: "paragraph",
            content: "A common misconception:"
          },
          {
            type: "code",
            language: "jsx",
            content: `ref.current = 100;`
          },
          {
            type: "paragraph",
            content: "does NOT update the UI."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>{ref.current}</h1>`
          },
          {
            type: "paragraph",
            content: "Updating:"
          },
          {
            type: "code",
            language: "jsx",
            content: `ref.current = 200;`
          },
          {
            type: "paragraph",
            content: "will not automatically re-render."
          },
          {
            type: "paragraph",
            content: "React does not track ref changes."
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
                question: "Mistake 1: Using useRef Instead of State",
                answer: "Incorrect: using `const countRef = useRef(0);` for UI updates. Refs do not trigger rendering. Use `useState` instead."
              },
              {
                question: "Mistake 2: Expecting UI Updates",
                answer: "Incorrect assumption: Update Ref → UI Changes. This does not happen."
              },
              {
                question: "Mistake 3: Reading Ref Before Mount",
                answer: "Incorrect: logging `inputRef.current` before the element exists outputs `null`. Always ensure the element is mounted."
              },
              {
                question: "Mistake 4: Overusing DOM Manipulation",
                answer: "React prefers declarative UI. Avoid excessive direct DOM manipulation. Use refs only when necessary."
              },
              {
                question: "Mistake 5: Forgetting current",
                answer: "Incorrect: `inputRef.focus();`. Correct: `inputRef.current.focus();`. All ref values live inside `.current`."
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
                title: "Use State for UI",
                description: "If the UI should update: `useState` is usually the correct choice."
              },
              {
                title: "Use Refs for DOM Access",
                description: "Examples: Focus, Scroll, Measure, Animation"
              },
              {
                title: "Keep Refs Simple",
                description: "Refs should store: DOM Elements, Timers, Previous Values. Avoid using them as a replacement for state management."
              },
              {
                title: "Combine useRef and useEffect",
                description: "Most DOM interactions occur after rendering. The typical pattern is: useRef → useEffect → DOM Operation"
              },
              {
                title: "Prefer Declarative React",
                description: "Only use direct DOM manipulation when React cannot solve the problem declaratively."
              }
            ]
          }
        ]
      },

      {
        heading: "useRef Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Create Ref", "→",
              "Attach or Store Value", "→",
              "Access current", "→",
              "Update Value", "→",
              "No Re-render Occurs"
            ]
          },
          {
            type: "paragraph",
            content: "This is the core lifecycle of a ref."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The useRef Hook provides a way to store mutable values that persist across renders without causing re-renders."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useRef creates persistent mutable storage",
              "Values are stored in the current property",
              "Updating refs does not trigger re-renders",
              "Refs are commonly used for DOM access",
              "Refs can store timers, previous values, and mutable data",
              "useRef is different from useState",
              "useRef is essential for focus management, scrolling, and third-party integrations"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding useRef is important because many real-world React applications rely on it for DOM interactions and performance optimizations."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think useRef exists only for accessing DOM elements. While DOM access is its most visible use case, professional React developers frequently use refs to store values that should survive re-renders without triggering UI updates. Timer IDs, previous state values, WebSocket connections, animation instances, and third-party library references are all common examples. Learning to distinguish between data that belongs in useState and data that belongs in useRef is a major step toward writing efficient React applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : useReducer Hook
============================= */
    "usereducer-hook": {
    title: "useReducer",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications become larger, managing state with only `useState` can become difficult."
          },
          {
            type: "paragraph",
            content: "Consider a simple counter:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "This works perfectly."
          },
          {
            type: "paragraph",
            content: "However, imagine a shopping cart application."
          },
          {
            type: "paragraph",
            content: "The cart may need to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Add products",
              "Remove products",
              "Increase quantity",
              "Decrease quantity",
              "Clear cart",
              "Apply discounts",
              "Calculate totals"
            ]
          },
          {
            type: "paragraph",
            content: "Managing all these updates using multiple `useState` calls can quickly become messy."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);
const [discount, setDiscount] = useState(0);
const [shipping, setShipping] = useState(0);`
          },
          {
            type: "paragraph",
            content: "As state logic grows, updating related values becomes harder."
          },
          {
            type: "paragraph",
            content: "React provides the useReducer Hook to manage complex state in a more organized and predictable way."
          },
          {
            type: "paragraph",
            content: "Many professional React applications use `useReducer` when state transitions become complicated."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What useReducer is",
              "Why React introduced useReducer",
              "Understanding reducers",
              "Actions and dispatch",
              "How useReducer works internally",
              "useReducer vs useState",
              "Managing complex state",
              "Real-world examples",
              "Combining useReducer with Context",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how to manage complex application state using useReducer."
          }
        ]
      },

      {
        heading: "What is useReducer?",
        blocks: [
          {
            type: "paragraph",
            content: "`useReducer` is a React Hook used for managing state through a reducer function."
          },
          {
            type: "paragraph",
            content: "Officially:"
          },
          {
            type: "quote",
            content: "useReducer is a Hook that lets you add a reducer to your component."
          },
          {
            type: "paragraph",
            content: "Instead of directly updating state:"
          },
          {
            type: "code",
            language: "jsx",
            content: `setCount(count + 1);`
          },
          {
            type: "paragraph",
            content: "you dispatch actions:"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch({
  type: "increment"
});`
          },
          {
            type: "paragraph",
            content: "A reducer then decides how state should change."
          }
        ]
      },

      {
        heading: "Why React Introduced useReducer",
        blocks: [
          {
            type: "paragraph",
            content: "For simple state:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "useState is perfect."
          },
          {
            type: "paragraph",
            content: "But consider:"
          },
          {
            type: "output",
            content: [
              "User Profile",
              "Shopping Cart",
              "Task Manager",
              "Authentication System",
              "Multi-Step Forms",
              "Dashboard Filters"
            ]
          },
          {
            type: "paragraph",
            content: "These often require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple related state values",
              "Complex update logic",
              "Predictable state transitions"
            ]
          },
          {
            type: "paragraph",
            content: "React introduced useReducer to organize this complexity."
          }
        ]
      },

      {
        heading: "Understanding the Reducer Concept",
        blocks: [
          {
            type: "paragraph",
            content: "A reducer is simply a function."
          },
          {
            type: "paragraph",
            content: "It takes:"
          },
          {
            type: "output",
            content: [
              "Current State",
              "+",
              "Action",
              "=",
              "New State"
            ]
          },
          {
            type: "paragraph",
            content: "Visualized:"
          },
          {
            type: "output",
            content: [
              "Current State",
              "      ↓",
              "    Reducer",
              "      ↑",
              "    Action",
              "      ↓",
              "  New State"
            ]
          },
          {
            type: "paragraph",
            content: "Reducers never modify state directly."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Old State", "→",
              "Create New State", "→",
              "Return New State"
            ]
          }
        ]
      },

      {
        heading: "Basic Syntax",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `const [state, dispatch] =
  useReducer(
    reducer,
    initialState
  );`
          },
          {
            type: "paragraph",
            content: "Two values are returned:"
          },
          {
            type: "output",
            content: [
              "state",
              "dispatch"
            ]
          }
        ]
      },

      {
        heading: "Understanding the Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Reducer Function"
          },
          {
            type: "code",
            language: "jsx",
            content: `function reducer(
  state,
  action
) {
  // ...
}`
          },
          {
            type: "paragraph",
            content: "Responsible for updating state."
          },
          {
            type: "paragraph",
            content: "Initial State"
          },
          {
            type: "code",
            language: "jsx",
            content: `const initialState = 0;`
          },
          {
            type: "paragraph",
            content: "Starting value."
          },
          {
            type: "paragraph",
            content: "Dispatch Function"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch(action);`
          },
          {
            type: "paragraph",
            content: "Sends instructions to the reducer."
          }
        ]
      },

      {
        heading: "Your First useReducer Example",
        blocks: [
          {
            type: "paragraph",
            content: "Reducer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function reducer(
  state,
  action
) {
  if (
    action.type ===
    "increment"
  ) {
    return state + 1;
  }

  return state;
}`
          },
          {
            type: "paragraph",
            content: "Hook:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count, dispatch] =
  useReducer(
    reducer,
    0
  );`
          },
          {
            type: "paragraph",
            content: "Dispatch:"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch({
  type: "increment"
});`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "0 → 1"
          }
        ]
      },

      {
        heading: "How useReducer Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "Step 1:"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch({
  type: "increment"
});`
          },
          {
            type: "paragraph",
            content: "Step 2:"
          },
          {
            type: "paragraph",
            content: "React calls:"
          },
          {
            type: "code",
            language: "jsx",
            content: `reducer(
  currentState,
  action
);`
          },
          {
            type: "paragraph",
            content: "Step 3:"
          },
          {
            type: "paragraph",
            content: "Reducer returns:"
          },
          {
            type: "code",
            language: "jsx",
            content: `newState`
          },
          {
            type: "paragraph",
            content: "Step 4:"
          },
          {
            type: "paragraph",
            content: "React updates the component."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Dispatch Action", "→",
              "Reducer Runs", "→",
              "New State Returned", "→",
              "React Re-renders"
            ]
          }
        ]
      },

      {
        heading: "The Reducer Function",
        blocks: [
          {
            type: "paragraph",
            content: "The reducer is the heart of useReducer."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function reducer(
  state,
  action
) {
  switch (
    action.type
  ) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}`
          },
          {
            type: "paragraph",
            content: "The reducer decides what happens for each action."
          }
        ]
      },

      {
        heading: "Understanding Actions",
        blocks: [
          {
            type: "paragraph",
            content: "Actions describe what happened."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  type: "increment"
}`
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  type: "deleteTask"
}`
          },
          {
            type: "paragraph",
            content: "Actions are plain JavaScript objects."
          }
        ]
      },

      {
        heading: "Understanding Action Types",
        blocks: [
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "increment",
              "decrement",
              "addItem",
              "removeItem",
              "login",
              "logout",
              "toggleTheme"
            ]
          },
          {
            type: "paragraph",
            content: "Each action represents a specific state change."
          }
        ]
      },

      {
        heading: "Counter Example",
        blocks: [
          {
            type: "paragraph",
            content: "Reducer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function reducer(
  state,
  action
) {

  switch (
    action.type
  ) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}`
          },
          {
            type: "paragraph",
            content: "Buttons:"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch({
  type: "increment"
});

dispatch({
  type: "decrement"
});`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "Count Updates",
              "Through Actions"
            ]
          }
        ]
      },

      {
        heading: "Using Objects as State",
        blocks: [
          {
            type: "paragraph",
            content: "State is often an object."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const initialState = {
  count: 0
};`
          },
          {
            type: "paragraph",
            content: "Reducer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `return {
  count:
    state.count + 1
};`
          },
          {
            type: "paragraph",
            content: "useReducer works with any state structure."
          }
        ]
      },

      {
        heading: "Passing Data with Actions",
        blocks: [
          {
            type: "paragraph",
            content: "Actions can carry extra data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `dispatch({
  type: "add",
  payload: 5
});`
          },
          {
            type: "paragraph",
            content: "Reducer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `case "add":

return (
  state +
  action.payload
);`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "Current Count + 5"
          },
          {
            type: "paragraph",
            content: "This pattern is extremely common."
          }
        ]
      },

      {
        heading: "Real-World Example: Todo List",
        blocks: [
          {
            type: "paragraph",
            content: "State:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
  tasks: []
}`
          },
          {
            type: "paragraph",
            content: "Actions:"
          },
          {
            type: "output",
            content: [
              "addTask",
              "deleteTask",
              "toggleTask"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Dispatch", "→",
              "Reducer", "→",
              "Updated Tasks"
            ]
          },
          {
            type: "paragraph",
            content: "This keeps logic centralized."
          }
        ]
      },

      {
        heading: "Why useReducer Improves Organization",
        blocks: [
          {
            type: "paragraph",
            content: "Without useReducer:"
          },
          {
            type: "code",
            language: "jsx",
            content: `setTasks(...)
setTotal(...)
setFilter(...)
setCompleted(...)`
          },
          {
            type: "paragraph",
            content: "State logic becomes scattered."
          },
          {
            type: "paragraph",
            content: "With useReducer:"
          },
          {
            type: "output",
            content: [
              "All State Logic",
              "Lives Inside",
              "One Reducer"
            ]
          },
          {
            type: "paragraph",
            content: "Much easier to maintain."
          }
        ]
      },

      {
        heading: "useReducer vs useState",
        blocks: [
          {
            type: "paragraph",
            content: "useState"
          },
          {
            type: "paragraph",
            content: "Best for:"
          },
          {
            type: "output",
            content: [
              "Simple Counters",
              "Input Fields",
              "Toggle Buttons"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [count,
setCount]`
          },
          {
            type: "paragraph",
            content: "useReducer"
          },
          {
            type: "paragraph",
            content: "Best for:"
          },
          {
            type: "output",
            content: [
              "Complex State",
              "Multiple Related Values",
              "Many Update Types"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [state,
dispatch]`
          }
        ]
      },

      {
        heading: "Quick Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "useState", "useReducer"],
            rows: [
              ["Simple State", "Excellent", "Good"],
              ["Complex Logic", "Difficult", "Excellent"],
              ["Multiple Updates", "Difficult", "Excellent"],
              ["Readability", "Good", "Better for Large Logic"],
              ["Scalability", "Moderate", "High"]
            ]
          }
        ]
      },

      {
        heading: "When to Use useReducer",
        blocks: [
          {
            type: "paragraph",
            content: "Good use cases:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Shopping Cart",
                description: "Add Item, Remove Item, Update Quantity, Clear Cart"
              },
              {
                title: "Authentication",
                description: "Login, Logout, Refresh Token, Update User"
              },
              {
                title: "Todo Applications",
                description: "Create, Delete, Toggle, Edit"
              },
              {
                title: "Multi-Step Forms",
                description: "Personal Info, Address, Payment, Confirmation"
              },
              {
                title: "Dashboards",
                description: "Filters, Sorting, Pagination, Search"
              }
            ]
          }
        ]
      },

      {
        heading: "Combining useReducer with Context",
        blocks: [
          {
            type: "paragraph",
            content: "A very common pattern:"
          },
          {
            type: "output",
            content: [
              "useReducer",
              "+",
              "Context"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Reducer Manages State", "→",
              "Context Shares State", "→",
              "Entire App Accesses State"
            ]
          },
          {
            type: "paragraph",
            content: "This creates lightweight global state management."
          },
          {
            type: "paragraph",
            content: "Many React applications use this instead of Redux."
          }
        ]
      },

      {
        heading: "useReducer and Redux",
        blocks: [
          {
            type: "paragraph",
            content: "If you've heard of Redux:"
          },
          {
            type: "output",
            content: [
              "Redux",
              "uses",
              "Reducers"
            ]
          },
          {
            type: "paragraph",
            content: "The concept is very similar."
          },
          {
            type: "paragraph",
            content: "Reducer:"
          },
          {
            type: "output",
            content: [
              "State",
              "+",
              "Action",
              "=",
              "New State"
            ]
          },
          {
            type: "paragraph",
            content: "Redux simply extends this idea to the entire application."
          },
          {
            type: "paragraph",
            content: "Learning useReducer makes Redux easier to understand later."
          }
        ]
      },

      {
        heading: "Immutable State Updates",
        blocks: [
          {
            type: "paragraph",
            content: "Reducers should never mutate state."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `state.count++;
return state;`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `return {
  ...state,
  count:
    state.count + 1
};`
          },
          {
            type: "paragraph",
            content: "Always return a new state object."
          }
        ]
      },

      {
        heading: "Understanding Pure Reducers",
        blocks: [
          {
            type: "paragraph",
            content: "A reducer should be:"
          },
          {
            type: "output",
            content: [
              "Predictable",
              "Consistent",
              "Pure"
            ]
          },
          {
            type: "paragraph",
            content: "Given:"
          },
          {
            type: "code",
            language: "jsx",
            content: `state
action`
          },
          {
            type: "paragraph",
            content: "it should always return the same result."
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "output",
            content: [
              "API Calls",
              "Random Numbers",
              "Date Generation",
              "Side Effects"
            ]
          },
          {
            type: "paragraph",
            content: "inside reducers."
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
                question: "Mistake 1: Using useReducer for Everything",
                answer: "Bad: Single Input Field, Simple Toggle, Basic Counter. `useState` is simpler for these cases."
              },
              {
                question: "Mistake 2: Mutating State",
                answer: "Incorrect: `state.items.push(newItem);`. Always return a brand new state object."
              },
              {
                question: "Mistake 3: Forgetting Default Case",
                answer: "Incorrect: Using a `switch(action.type)` without a `default: return state;` fallback. This can cause bugs by accidentally returning undefined.",
                examples: [
                  {
                    title: "Correct",
                    language: "jsx",
                    content: `default:
  return state;`
                  }
                ]
              },
              {
                question: "Mistake 4: Large Reducers",
                answer: "Avoid a 1000-line reducer. Split logic into smaller helper functions when necessary."
              },
              {
                question: "Mistake 5: Side Effects Inside Reducers",
                answer: "Incorrect: Calling `fetch(...)` inside a reducer. Reducers should only calculate state and must remain pure."
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
                title: "Use useState First",
                description: "If state is simple, `useState` is usually enough."
              },
              {
                title: "Use Reducers for Complex Logic",
                description: "When multiple updates affect related data, `useReducer` becomes valuable."
              },
              {
                title: "Use Action Constants",
                description: "Instead of `\"increment\"`, many teams use `INCREMENT` variables to reduce typos."
              },
              {
                title: "Keep Reducers Pure",
                description: "Reducers should only return state. Nothing else."
              },
              {
                title: "Combine with Context",
                description: "For medium-sized applications, Context + useReducer creates an excellent architecture."
              }
            ]
          }
        ]
      },

      {
        heading: "Mental Model of useReducer",
        blocks: [
          {
            type: "paragraph",
            content: "Think of useReducer as:"
          },
          {
            type: "output",
            content: "State Machine"
          },
          {
            type: "paragraph",
            content: "Every action:"
          },
          {
            type: "output",
            content: [
              "Triggers",
              "A Predictable",
              "State Transition"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "LOGIN",
              "↓",
              "User Authenticated",
              "",
              "LOGOUT",
              "↓",
              "User Removed"
            ]
          },
          {
            type: "paragraph",
            content: "State changes become easier to reason about."
          }
        ]
      },

      {
        heading: "useReducer Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "Dispatch", "→",
              "Reducer", "→",
              "New State", "→",
              "React Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "This is the complete lifecycle of useReducer."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The useReducer Hook provides a structured way to manage complex state in React applications."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useReducer manages state through reducers",
              "Reducers receive state and actions",
              "Dispatch sends actions to reducers",
              "Reducers return new state",
              "useReducer is ideal for complex state transitions",
              "Reducers should remain pure and immutable",
              "useReducer works exceptionally well with Context",
              "Many Redux concepts are based on reducers"
            ]
          },
          {
            type: "paragraph",
            content: "As applications grow, useReducer often becomes easier to maintain than multiple interconnected useState calls."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think useReducer exists to replace useState. It does not. React introduced useReducer to handle situations where state transitions become complex and difficult to manage with multiple state setters. A good rule followed by many professional developers is: start with useState, and only move to useReducer when you notice state logic becoming repetitive, interconnected, or difficult to reason about. This keeps components simple while still allowing your architecture to scale as the application grows."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : useMemo
============================= */
    "usememo-hook": {
    title: "useMemo",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, performance becomes increasingly important."
          },
          {
            type: "paragraph",
            content: "In small applications, rendering components repeatedly is rarely a problem. However, in larger applications, some calculations may become expensive and can slow down the user interface."
          },
          {
            type: "paragraph",
            content: "Consider a scenario where a component:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Filters thousands of products",
              "Sorts large datasets",
              "Performs complex mathematical calculations",
              "Processes analytics data",
              "Generates reports"
            ]
          },
          {
            type: "paragraph",
            content: "If these calculations run on every render, the application may become sluggish."
          },
          {
            type: "paragraph",
            content: "React provides the useMemo Hook to solve this problem."
          },
          {
            type: "paragraph",
            content: "The useMemo Hook allows React developers to cache (memoize) expensive calculations and reuse previous results when the required data has not changed."
          },
          {
            type: "paragraph",
            content: "Instead of recalculating values during every render, React can return a previously stored value."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What useMemo is",
              "Why useMemo exists",
              "How memoization works",
              "useMemo syntax",
              "Dependency arrays",
              "Expensive calculations",
              "Performance optimization",
              "Real-world use cases",
              "Common mistakes",
              "useMemo vs React.memo",
              "useMemo vs useCallback",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand when useMemo improves performance and when it should be avoided."
          }
        ]
      },

      {
        heading: "The Problem useMemo Solves",
        blocks: [
          {
            type: "paragraph",
            content: "React components re-render whenever:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State changes",
              "Props change",
              "Parent components re-render"
            ]
          },
          {
            type: "paragraph",
            content: "During each render, all code inside the component executes again."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);

  const result = expensiveCalculation();

  return (
    <>
      <p>{result}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Even if:"
          },
          {
            type: "output",
            content: ["count"]
          },
          {
            type: "paragraph",
            content: "changes,"
          },
          {
            type: "paragraph",
            content: "React will execute:"
          },
          {
            type: "output",
            content: ["expensiveCalculation()"]
          },
          {
            type: "paragraph",
            content: "again."
          },
          {
            type: "paragraph",
            content: "This happens even when the calculation result remains unchanged."
          },
          {
            type: "paragraph",
            content: "For small calculations this is fine."
          },
          {
            type: "paragraph",
            content: "For expensive calculations this can hurt performance."
          }
        ]
      },

      {
        heading: "What is useMemo?",
        blocks: [
          {
            type: "paragraph",
            content: "The useMemo Hook memoizes a calculated value."
          },
          {
            type: "paragraph",
            content: "Memoization means:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Store the result of a calculation and reuse it until its dependencies change."
            ]
          },
          {
            type: "paragraph",
            content: "Instead of recalculating every render, React returns the cached value."
          },
          {
            type: "paragraph",
            content: "Think of useMemo as:"
          },
          {
            type: "flow",
            steps: [
              "Calculate Once", "→",
              "Store Result", "→",
              "Reuse Result", "→",
              "Recalculate Only When Needed"
            ]
          },
          {
            type: "paragraph",
            content: "This can significantly improve rendering performance."
          }
        ]
      },

      {
        heading: "Basic Syntax",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const memoizedValue = useMemo(
  () => {
    return calculation();
  },
  [dependencies]
);`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "output",
            content: [
              "useMemo(",
              "  callbackFunction,",
              "  dependencyArray",
              ")"
            ]
          },
          {
            type: "paragraph",
            content: "The callback performs the calculation."
          },
          {
            type: "paragraph",
            content: "The dependency array determines when React should recalculate."
          }
        ]
      },

      {
        heading: "Simple Example",
        blocks: [
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);

  const square = count * count;

  return (
    <>
      <p>{square}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <>
      <p>{square}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "React recalculates:"
          },
          {
            type: "output",
            content: ["count * count"]
          },
          {
            type: "paragraph",
            content: "only when:"
          },
          {
            type: "output",
            content: ["count"]
          },
          {
            type: "paragraph",
            content: "changes."
          }
        ]
      },

      {
        heading: "Understanding Memoization",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine this calculation:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = calculateLargeDataset();`
          },
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Calculate", "→",
              "Render Again", "→",
              "Calculate Again", "→",
              "Render Again", "→",
              "Calculate Again"
            ]
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Calculate", "→",
              "Store Result", "→",
              "Render Again", "→",
              "Reuse Stored Result", "→",
              "Render Again", "→",
              "Reuse Stored Result"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces unnecessary work."
          }
        ]
      },

      {
        heading: "Dependency Array",
        blocks: [
          {
            type: "paragraph",
            content: "The dependency array controls when recalculation occurs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const result = useMemo(() => {
  return num * 10;
}, [num]);`
          },
          {
            type: "paragraph",
            content: "React recalculates only when:"
          },
          {
            type: "output",
            content: ["num"]
          },
          {
            type: "paragraph",
            content: "changes."
          }
        ]
      },

      {
        heading: "Empty Dependency Array",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const result = useMemo(() => {
  return expensiveCalculation();
}, []);`
          },
          {
            type: "paragraph",
            content: "Runs only once."
          },
          {
            type: "flow",
            steps: [
              "Initial Render", "→",
              "Calculate", "→",
              "Never Recalculate"
            ]
          },
          {
            type: "paragraph",
            content: "Similar to:"
          },
          {
            type: "output",
            content: ["componentDidMount"]
          },
          {
            type: "paragraph",
            content: "behavior."
          }
        ]
      },

      {
        heading: "Multiple Dependencies",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return price * quantity;
}, [price, quantity]);`
          },
          {
            type: "paragraph",
            content: "Recalculates when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "price changes",
              "quantity changes"
            ]
          }
        ]
      },

      {
        heading: "Expensive Calculations Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider filtering thousands of products."
          },
          {
            type: "code",
            language: "javascript",
            content: `const filteredProducts = products.filter(
  product => product.price > 100
);`
          },
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "paragraph",
            content: "Every render performs filtering again."
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const filteredProducts = useMemo(() => {
  return products.filter(
    product => product.price > 100
  );
}, [products]);`
          },
          {
            type: "paragraph",
            content: "Filtering happens only when:"
          },
          {
            type: "output",
            content: ["products"]
          },
          {
            type: "paragraph",
            content: "changes."
          },
          {
            type: "paragraph",
            content: "This becomes extremely valuable in large applications."
          }
        ]
      },

      {
        heading: "Real World Example: Search Filtering",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  );
}, [users, search]);`
          },
          {
            type: "paragraph",
            content: "Whenever:"
          },
          {
            type: "output",
            content: ["search"]
          },
          {
            type: "paragraph",
            content: "changes,"
          },
          {
            type: "paragraph",
            content: "React updates the filtered list."
          },
          {
            type: "paragraph",
            content: "Otherwise, the previous result is reused."
          }
        ]
      },

      {
        heading: "Real World Example: Sorting Data",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const sortedUsers = useMemo(() => {
  return [...users].sort(
    (a, b) => a.age - b.age
  );
}, [users]);`
          },
          {
            type: "paragraph",
            content: "Sorting large datasets repeatedly can be expensive."
          },
          {
            type: "paragraph",
            content: "useMemo avoids unnecessary sorting."
          }
        ]
      },

      {
        heading: "Real World Example: Analytics Dashboard",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Revenue Calculations",
              "Chart Data",
              "Statistics",
              "Predictions"
            ]
          },
          {
            type: "paragraph",
            content: "Each calculation may process thousands of records."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const revenue = useMemo(() => {
  return sales.reduce(
    (total, item) => total + item.amount,
    0
  );
}, [sales]);`
          },
          {
            type: "paragraph",
            content: "This prevents recalculating revenue during unrelated renders."
          }
        ]
      },

      {
        heading: "useMemo With Objects",
        blocks: [
          {
            type: "paragraph",
            content: "Objects are recreated during every render."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const settings = {
  theme: "dark"
};`
          },
          {
            type: "paragraph",
            content: "Each render creates a new object reference."
          },
          {
            type: "paragraph",
            content: "useMemo can stabilize it."
          },
          {
            type: "code",
            language: "javascript",
            content: `const settings = useMemo(() => {
  return {
    theme: "dark"
  };
}, []);`
          },
          {
            type: "paragraph",
            content: "Now React reuses the same object reference."
          }
        ]
      },

      {
        heading: "useMemo With Arrays",
        blocks: [
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const colors = ["red", "blue"];`
          },
          {
            type: "paragraph",
            content: "New array every render."
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const colors = useMemo(() => {
  return ["red", "blue"];
}, []);`
          },
          {
            type: "paragraph",
            content: "React reuses the same array."
          }
        ]
      },

      {
        heading: "Why Reference Equality Matters",
        blocks: [
          {
            type: "paragraph",
            content: "React compares objects and arrays by reference."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{} === {}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: ["false"]
          },
          {
            type: "paragraph",
            content: "Similarly:"
          },
          {
            type: "code",
            language: "javascript",
            content: `[] === []`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: ["false"]
          },
          {
            type: "paragraph",
            content: "Because each render creates new references."
          },
          {
            type: "paragraph",
            content: "useMemo preserves references."
          },
          {
            type: "paragraph",
            content: "This helps prevent unnecessary child renders."
          }
        ]
      },

      {
        heading: "useMemo and Child Components",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = useMemo(() => {
  return {
    name: "John"
  };
}, []);`
          },
          {
            type: "paragraph",
            content: "Passing:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Profile data={data} />`
          },
          {
            type: "paragraph",
            content: "prevents unnecessary updates caused by new object references."
          }
        ]
      },

      {
        heading: "useMemo vs React.memo",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers confuse these."
          },
          {
            type: "paragraph",
            content: "React.memo"
          },
          {
            type: "paragraph",
            content: "Memoizes an entire component."
          },
          {
            type: "code",
            language: "jsx",
            content: `const User = React.memo(function User() {
  return <h1>User</h1>;
});`
          },
          {
            type: "paragraph",
            content: "Purpose:"
          },
          {
            type: "output",
            content: ["Prevent Component Re-renders"]
          },
          {
            type: "paragraph",
            content: "useMemo"
          },
          {
            type: "paragraph",
            content: "Memoizes a value."
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return calculate();
}, []);`
          },
          {
            type: "paragraph",
            content: "Purpose:"
          },
          {
            type: "output",
            content: ["Prevent Expensive Recalculations"]
          }
        ]
      },

      {
        heading: "useMemo vs useCallback",
        blocks: [
          {
            type: "paragraph",
            content: "Another common confusion."
          },
          {
            type: "paragraph",
            content: "useMemo"
          },
          {
            type: "paragraph",
            content: "Memoizes values."
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return calculate();
}, []);`
          },
          {
            type: "paragraph",
            content: "Returns:"
          },
          {
            type: "output",
            content: ["Value"]
          },
          {
            type: "paragraph",
            content: "useCallback"
          },
          {
            type: "paragraph",
            content: "Memoizes functions."
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
            content: "Returns:"
          },
          {
            type: "output",
            content: ["Function"]
          },
          {
            type: "paragraph",
            content: "Rule:"
          },
          {
            type: "output",
            content: [
              "useMemo → Value",
              "useCallback → Function"
            ]
          }
        ]
      },

      {
        heading: "When Should You Use useMemo?",
        blocks: [
          {
            type: "paragraph",
            content: "Good candidates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large array filtering",
              "Complex sorting",
              "Expensive calculations",
              "Heavy data transformations",
              "Chart data generation",
              "Analytics calculations"
            ]
          },
          {
            type: "paragraph",
            content: "These operations benefit from caching."
          }
        ]
      },

      {
        heading: "When You Should NOT Use useMemo",
        blocks: [
          {
            type: "paragraph",
            content: "Bad candidate:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return count + 1;
}, [count]);`
          },
          {
            type: "paragraph",
            content: "This calculation is trivial."
          },
          {
            type: "paragraph",
            content: "The memoization overhead may outweigh the benefit."
          },
          {
            type: "paragraph",
            content: "Rule:"
          },
          {
            type: "output",
            content: ["Do not optimize cheap calculations."]
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
                question: "Mistake 1: Memoizing Everything",
                answer: "Bad: Wrapping simple strings or basic calculations in useMemo offers no performance benefit and clutters the code.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `const name = useMemo(() => {
  return "John";
}, []);`
                  }
                ]
              },
              {
                question: "Mistake 2: Missing Dependencies",
                answer: "Missing dependencies can create stale values where the cached result doesn't update when it should.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `const total = useMemo(() => {
  return price * quantity;
}, [price]); // Missing quantity`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `}, [price, quantity]);`
                  }
                ]
              },
              {
                question: "Mistake 3: Using useMemo Before Measuring",
                answer: "Many beginners optimize prematurely. Professional developers Measure → Identify Bottleneck → Optimize. Do not 'Optimize Everything' by default."
              },
              {
                question: "Mistake 4: Expecting useMemo to Prevent Re-renders",
                answer: "useMemo does not stop rendering. It only avoids recalculating values during the render. Component renders still occur."
              }
            ]
          }
        ]
      },

      {
        heading: "Performance Visualization",
        blocks: [
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Filter 10000 Products", "→",
              "Render", "→",
              "Filter 10000 Products", "→",
              "Render", "→",
              "Filter 10000 Products"
            ]
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "Filter 10000 Products", "→",
              "Store Result", "→",
              "Render", "→",
              "Reuse Result", "→",
              "Render", "→",
              "Reuse Result"
            ]
          },
          {
            type: "paragraph",
            content: "Significant performance improvement."
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
                title: "Use useMemo Only For Expensive Operations",
                description: "Focus on: Filtering, Sorting, Transformations, Heavy computations"
              },
              {
                title: "Always Include Dependencies",
                description: "Dependency arrays should reflect everything used inside the callback."
              },
              {
                title: "Measure Performance First",
                description: "Use React DevTools Profiler or Browser Performance Tools before optimization."
              },
              {
                title: "Combine With React.memo",
                description: "Large applications often use React.memo + useMemo for maximum performance."
              },
              {
                title: "Keep Memoized Logic Readable",
                description: "Avoid overly complicated memoized expressions. Maintain readability."
              }
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The useMemo Hook is a performance optimization tool that memoizes calculated values."
          },
          {
            type: "paragraph",
            content: "It allows React to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Store calculation results",
              "Reuse previous values",
              "Avoid unnecessary computations",
              "Improve rendering performance"
            ]
          },
          {
            type: "paragraph",
            content: "Basic syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const value = useMemo(
  () => calculation(),
  [dependencies]
);`
          },
          {
            type: "paragraph",
            content: "useMemo is particularly useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Filtering large datasets",
              "Sorting data",
              "Expensive calculations",
              "Data transformations",
              "Analytics processing"
            ]
          },
          {
            type: "paragraph",
            content: "Remember:"
          },
          {
            type: "output",
            content: [
              "useMemo → Memoizes Values",
              "useCallback → Memoizes Functions",
              "React.memo → Memoizes Components"
            ]
          },
          {
            type: "paragraph",
            content: "The goal of useMemo is not to make code shorter."
          },
          {
            type: "paragraph",
            content: "Its purpose is to make React applications faster and more efficient when expensive computations are involved."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common misconception is that useMemo always improves performance. In reality, useMemo itself has a small cost because React must store and compare dependencies. For simple calculations, useMemo can actually make code more complex without providing meaningful benefits. Professional React developers use useMemo only when a measurable performance problem exists or when stabilizing object and array references is necessary."
          }
        ]
      }
    ]
  },




  /* ===========================
    Eighth Topic : useCallback Hook
============================= */
    "usecallback-hook": {
    title: "useCallback",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications become larger and more complex, performance optimization becomes increasingly important."
          },
          {
            type: "paragraph",
            content: "Many developers learn about optimizing expensive calculations with:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useMemo()`
          },
          {
            type: "paragraph",
            content: "However, React applications also create something else during every render:"
          },
          {
            type: "output",
            content: "Functions"
          },
          {
            type: "paragraph",
            content: "Every time a component re-renders, all functions declared inside that component are recreated."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}`
          },
          {
            type: "paragraph",
            content: "Although the code looks identical after each render, React creates a completely new function object every time."
          },
          {
            type: "paragraph",
            content: "In many situations this is harmless."
          },
          {
            type: "paragraph",
            content: "However, when functions are passed to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Child components",
              "React.memo components",
              "Dependency arrays",
              "Custom hooks"
            ]
          },
          {
            type: "paragraph",
            content: "these constantly changing function references can trigger unnecessary re-renders and performance issues."
          },
          {
            type: "paragraph",
            content: "React provides the useCallback Hook to solve this problem."
          },
          {
            type: "paragraph",
            content: "The useCallback Hook allows developers to memoize functions and preserve the same function reference between renders until dependencies change."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What useCallback is",
              "Why useCallback exists",
              "Function recreation in React",
              "Function references",
              "useCallback syntax",
              "Dependency arrays",
              "React.memo integration",
              "Performance optimization",
              "Real-world use cases",
              "useCallback vs useMemo",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand when useCallback is useful, when it is unnecessary, and how professional React developers use it effectively."
          }
        ]
      },

      {
        heading: "The Problem useCallback Solves",
        blocks: [
          {
            type: "paragraph",
            content: "Consider this component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={handleClick}>
        Click Me
      </button>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Whenever:"
          },
          {
            type: "output",
            content: "count"
          },
          {
            type: "paragraph",
            content: "changes,"
          },
          {
            type: "paragraph",
            content: "React re-renders the component."
          },
          {
            type: "paragraph",
            content: "During that render:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = () => {
  console.log("Clicked");
};`
          },
          {
            type: "paragraph",
            content: "is recreated."
          },
          {
            type: "paragraph",
            content: "React sees it as:"
          },
          {
            type: "output",
            content: [
              "Old Function",
              "≠",
              "New Function"
            ]
          },
          {
            type: "paragraph",
            content: "even though both functions contain identical code."
          },
          {
            type: "paragraph",
            content: "This behavior becomes important when passing functions to child components."
          }
        ]
      },

      {
        heading: "Understanding Function References",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fn1 = () => {};
const fn2 = () => {};`
          },
          {
            type: "paragraph",
            content: "Comparison:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fn1 === fn2`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: "false"
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because they are different function objects."
          },
          {
            type: "paragraph",
            content: "Similarly:"
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
            content: "creates a brand-new function every render."
          },
          {
            type: "paragraph",
            content: "React compares references, not code content."
          }
        ]
      },

      {
        heading: "What is useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "The useCallback Hook memoizes a function."
          },
          {
            type: "paragraph",
            content: "Instead of creating a new function during every render, React stores the previous function and reuses it until dependencies change."
          },
          {
            type: "paragraph",
            content: "Think of it as:"
          },
          {
            type: "flow",
            steps: [
              "Create Function", "→",
              "Store Reference", "→",
              "Reuse Reference", "→",
              "Recreate Only When Needed"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents unnecessary function recreation."
          }
        ]
      },

      {
        heading: "Basic Syntax",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const memoizedFunction = useCallback(
  () => {
    // function logic
  },
  [dependencies]
);`
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "output",
            content: [
              "useCallback(",
              "  callbackFunction,",
              "  dependencyArray",
              ");"
            ]
          },
          {
            type: "paragraph",
            content: "The callback contains the function logic."
          },
          {
            type: "paragraph",
            content: "The dependency array determines when React should create a new function."
          }
        ]
      },

      {
        heading: "Simple Example",
        blocks: [
          {
            type: "paragraph",
            content: "Without useCallback:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "New function every render."
          },
          {
            type: "paragraph",
            content: "With useCallback:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useCallback } from "react";

function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "React reuses the same function reference."
          }
        ]
      },

      {
        heading: "Why Function Recreation Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a parent component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <Child
      onClick={handleClick}
    />
  );
}`
          },
          {
            type: "paragraph",
            content: "Every time:"
          },
          {
            type: "output",
            content: "count"
          },
          {
            type: "paragraph",
            content: "changes,"
          },
          {
            type: "paragraph",
            content: "a new:"
          },
          {
            type: "output",
            content: "handleClick"
          },
          {
            type: "paragraph",
            content: "function is created."
          },
          {
            type: "paragraph",
            content: "The child receives a new prop."
          },
          {
            type: "paragraph",
            content: "React assumes props changed."
          },
          {
            type: "paragraph",
            content: "Child re-renders."
          },
          {
            type: "paragraph",
            content: "Even if nothing meaningful changed."
          }
        ]
      },

      {
        heading: "useCallback With React.memo",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(
  ({ onClick }) => {
    console.log("Child Rendered");

    return (
      <button onClick={onClick}>
        Click
      </button>
    );
  }
);`
          },
          {
            type: "paragraph",
            content: "Without useCallback:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {};

  return (
    <>
      <Child onClick={handleClick} />

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "flow",
            steps: [
              "Parent Re-renders", "→",
              "New Function Created", "→",
              "Child Receives New Prop", "→",
              "Child Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "Even though the button logic never changed."
          },
          {
            type: "paragraph",
            content: "With useCallback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log("Hello");
}, []);`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "flow",
            steps: [
              "Parent Re-renders", "→",
              "Same Function Reference", "→",
              "Props Unchanged", "→",
              "Child Skips Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most important use cases of useCallback."
          }
        ]
      },

      {
        heading: "Dependency Array",
        blocks: [
          {
            type: "paragraph",
            content: "The dependency array controls when the function should be recreated."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log(count);
}, [count]);`
          },
          {
            type: "paragraph",
            content: "React creates a new function only when:"
          },
          {
            type: "output",
            content: "count"
          },
          {
            type: "paragraph",
            content: "changes."
          }
        ]
      },

      {
        heading: "Empty Dependency Array",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`
          },
          {
            type: "paragraph",
            content: "Behavior:"
          },
          {
            type: "flow",
            steps: [
              "Create Once", "→",
              "Reuse Forever"
            ]
          },
          {
            type: "paragraph",
            content: "Useful when the function depends on no changing values."
          }
        ]
      },

      {
        heading: "Multiple Dependencies",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const calculateTotal = useCallback(() => {
  return price * quantity;
}, [price, quantity]);`
          },
          {
            type: "paragraph",
            content: "React recreates the function when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "price changes",
              "quantity changes"
            ]
          }
        ]
      },

      {
        heading: "Real World Example: Search Application",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const handleSearch = useCallback(
  (query) => {
    setSearch(query);
  },
  []
);`
          },
          {
            type: "paragraph",
            content: "Useful when passing handlers to memoized child components."
          }
        ]
      },

      {
        heading: "Real World Example: API Requests",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const fetchUsers = useCallback(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);`
          },
          {
            type: "paragraph",
            content: "This creates a stable function reference."
          }
        ]
      },

      {
        heading: "Real World Example: Event Handlers",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const handleSubmit = useCallback(
  () => {
    console.log("Form Submitted");
  },
  []
);`
          },
          {
            type: "paragraph",
            content: "Particularly useful when passed through multiple component layers."
          }
        ]
      },

      {
        heading: "useCallback and useEffect",
        blocks: [
          {
            type: "paragraph",
            content: "A common use case is stabilizing functions used in:"
          },
          {
            type: "output",
            content: "useEffect"
          },
          {
            type: "paragraph",
            content: "Without useCallback:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const fetchData = () => {
    console.log("Fetching");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
}`
          },
          {
            type: "paragraph",
            content: "Problem:"
          },
          {
            type: "flow",
            steps: [
              "Render", "→",
              "New Function", "→",
              "Dependency Changed", "→",
              "Effect Runs Again"
            ]
          },
          {
            type: "paragraph",
            content: "Potential infinite loops."
          },
          {
            type: "paragraph",
            content: "Using useCallback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fetchData = useCallback(() => {
  console.log("Fetching");
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);`
          },
          {
            type: "paragraph",
            content: "Now the dependency remains stable."
          }
        ]
      },

      {
        heading: "useCallback vs useMemo",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers confuse these hooks."
          },
          {
            type: "paragraph",
            content: "useMemo"
          },
          {
            type: "paragraph",
            content: "Memoizes values."
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return calculateTotal();
}, []);`
          },
          {
            type: "paragraph",
            content: "Returns:"
          },
          {
            type: "output",
            content: "Value"
          },
          {
            type: "paragraph",
            content: "useCallback"
          },
          {
            type: "paragraph",
            content: "Memoizes functions."
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
            content: "Returns:"
          },
          {
            type: "output",
            content: "Function"
          },
          {
            type: "paragraph",
            content: "Rule:"
          },
          {
            type: "output",
            content: [
              "useMemo → Value",
              "useCallback → Function"
            ]
          }
        ]
      },

      {
        heading: "Internal Relationship Between useMemo and useCallback",
        blocks: [
          {
            type: "paragraph",
            content: "React internally treats:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useCallback(fn, deps)`
          },
          {
            type: "paragraph",
            content: "similar to:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useMemo(() => fn, deps)`
          },
          {
            type: "paragraph",
            content: "Because useCallback essentially memoizes a function value."
          }
        ]
      },

      {
        heading: "When Should You Use useCallback?",
        blocks: [
          {
            type: "paragraph",
            content: "Good candidates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Functions passed to React.memo components",
              "Functions inside dependency arrays",
              "Event handlers passed deep into component trees",
              "Functions used in custom hooks",
              "Performance-sensitive applications"
            ]
          },
          {
            type: "paragraph",
            content: "These scenarios benefit from stable function references."
          }
        ]
      },

      {
        heading: "When You Should NOT Use useCallback",
        blocks: [
          {
            type: "paragraph",
            content: "Bad example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log("Hello");
}, []);`
          },
          {
            type: "paragraph",
            content: "inside a simple component with no child optimization."
          },
          {
            type: "paragraph",
            content: "This provides little or no benefit."
          },
          {
            type: "paragraph",
            content: "Rule:"
          },
          {
            type: "output",
            content: "Do Not Memoize Everything"
          },
          {
            type: "paragraph",
            content: "Every useCallback has its own overhead."
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
                question: "Mistake 1: Using useCallback Everywhere",
                answer: "Bad: Wrapping every simple function in `useCallback`. Not every function needs memoization. It adds unnecessary complexity and overhead.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `const sayHello = useCallback(() => {
  console.log("Hello");
}, []);`
                  }
                ]
              },
              {
                question: "Mistake 2: Missing Dependencies",
                answer: "If you omit variables used inside the callback from the dependency array, the function will use stale values from the initial render.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `const handleClick = useCallback(() => {
  console.log(count);
}, []); // Missing: count`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `}, [count]);`
                  }
                ]
              },
              {
                question: "Mistake 3: Expecting Faster Rendering Automatically",
                answer: "useCallback does not magically improve performance. Benefits appear only when: Function references matter, Memoized children exist, or Re-renders are expensive."
              },
              {
                question: "Mistake 4: Ignoring React.memo",
                answer: "Using `useCallback` without `React.memo` on the child component often provides little benefit. Both frequently work together."
              }
            ]
          }
        ]
      },

      {
        heading: "Performance Visualization",
        blocks: [
          {
            type: "paragraph",
            content: "Without useCallback:"
          },
          {
            type: "flow",
            steps: [
              "Parent Render", "→",
              "New Function Created", "→",
              "Child Receives New Prop", "→",
              "Child Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "With useCallback:"
          },
          {
            type: "flow",
            steps: [
              "Parent Render", "→",
              "Same Function Reference", "→",
              "Props Unchanged", "→",
              "Child Skips Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "This can significantly reduce unnecessary rendering."
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
                title: "Use useCallback Only When Needed",
                description: "Memoization is a tool, not a requirement."
              },
              {
                title: "Combine With React.memo",
                description: "Most real-world benefits appear when used together. React.memo + useCallback = Optimized Rendering."
              },
              {
                title: "Always Include Dependencies",
                description: "Dependency arrays should accurately reflect values used inside the function."
              },
              {
                title: "Measure Before Optimizing",
                description: "Use React DevTools Profiler or Performance tools before adding optimizations."
              },
              {
                title: "Prioritize Readability",
                description: "Avoid excessive useCallback usage that makes code harder to understand."
              }
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The useCallback Hook is a performance optimization hook that memoizes functions."
          },
          {
            type: "paragraph",
            content: "Instead of creating a new function during every render, React reuses the previous function reference until dependencies change."
          },
          {
            type: "paragraph",
            content: "Basic syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handler = useCallback(
  () => {
    // logic
  },
  [dependencies]
);`
          },
          {
            type: "paragraph",
            content: "useCallback is particularly useful when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Passing functions to React.memo components",
              "Using functions inside useEffect dependencies",
              "Working with custom hooks",
              "Optimizing large applications"
            ]
          },
          {
            type: "paragraph",
            content: "Remember:"
          },
          {
            type: "output",
            content: [
              "useMemo → Memoizes Values",
              "useCallback → Memoizes Functions",
              "React.memo → Memoizes Components"
            ]
          },
          {
            type: "paragraph",
            content: "The primary purpose of useCallback is not reducing code."
          },
          {
            type: "paragraph",
            content: "Its purpose is reducing unnecessary re-renders caused by changing function references."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the biggest misconceptions about useCallback is that it makes functions execute faster. It does not. The function body runs at the same speed. What useCallback optimizes is the function reference, allowing React to recognize that the function has not changed. In modern React development, useCallback is most valuable when combined with React.memo, custom hooks, or effect dependencies—not as a default wrapper around every function you write."
          }
        ]
      }
    ]
  },




  /* ===========================
    Ninth Topic : Custom Hooks
============================= */
    "custom-hooks": {
    title: "Custom Hooks",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "React Hooks such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useState",
              "useEffect",
              "useContext",
              "useRef",
              "useReducer",
              "useMemo",
              "useCallback"
            ]
          },
          {
            type: "paragraph",
            content: "allow developers to add powerful functionality to functional components."
          },
          {
            type: "paragraph",
            content: "However, as applications grow, developers often notice a common problem:"
          },
          {
            type: "output",
            content: "The same logic appears in multiple components."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetching data from APIs",
              "Tracking window size",
              "Handling forms",
              "Managing authentication",
              "Working with localStorage",
              "Detecting online/offline status"
            ]
          },
          {
            type: "paragraph",
            content: "Copying the same Hook logic into multiple components violates one of the most important software engineering principles:"
          },
          {
            type: "output",
            content: "Don't Repeat Yourself (DRY)"
          },
          {
            type: "paragraph",
            content: "React solves this problem through:"
          },
          {
            type: "output",
            content: "Custom Hooks"
          },
          {
            type: "paragraph",
            content: "Custom Hooks allow developers to extract reusable stateful logic into separate functions and share that logic across multiple components."
          },
          {
            type: "paragraph",
            content: "They are one of the most powerful architectural features in modern React and are heavily used in professional applications."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Custom Hooks are",
              "Why Custom Hooks exist",
              "How Custom Hooks work",
              "Naming conventions",
              "Creating your first Custom Hook",
              "Reusing stateful logic",
              "Real-world examples",
              "Common use cases",
              "Custom Hooks vs Components",
              "Custom Hooks vs Utility Functions",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how to create reusable, scalable React logic using Custom Hooks."
          }
        ]
      },

      {
        heading: "The Problem Custom Hooks Solve",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine two components:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserProfile() {
  const [windowWidth, setWindowWidth] =
    useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);
}`
          },
          {
            type: "paragraph",
            content: "Another component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Dashboard() {
  const [windowWidth, setWindowWidth] =
    useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);
}`
          },
          {
            type: "paragraph",
            content: "Notice the problem:"
          },
          {
            type: "flow",
            steps: [
              "Same Logic", "→",
              "Copied Multiple Times", "→",
              "Harder Maintenance"
            ]
          },
          {
            type: "paragraph",
            content: "This is where Custom Hooks become useful."
          }
        ]
      },

      {
        heading: "What is a Custom Hook?",
        blocks: [
          {
            type: "paragraph",
            content: "A Custom Hook is simply:"
          },
          {
            type: "output",
            content: "A JavaScript function that uses React Hooks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useWindowWidth() {
  const [width, setWidth] =
    useState(window.innerWidth);

  return width;
}`
          },
          {
            type: "paragraph",
            content: "React treats it like any other Hook."
          },
          {
            type: "paragraph",
            content: "Now multiple components can reuse the same logic."
          }
        ]
      },

      {
        heading: "Why Are They Called \"Custom\" Hooks?",
        blocks: [
          {
            type: "paragraph",
            content: "React provides built-in Hooks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useState()",
              "useEffect()",
              "useContext()",
              "useRef()"
            ]
          },
          {
            type: "paragraph",
            content: "Developers can create their own Hooks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useAuth()",
              "useFetch()",
              "useLocalStorage()",
              "useWindowSize()"
            ]
          },
          {
            type: "paragraph",
            content: "Since they are developer-created Hooks:"
          },
          {
            type: "output",
            content: "Custom Hooks"
          }
        ]
      },

      {
        heading: "The Naming Rule",
        blocks: [
          {
            type: "paragraph",
            content: "Every Custom Hook must begin with:"
          },
          {
            type: "output",
            content: "use"
          },
          {
            type: "comparison",
            leftTitle: "Correct",
            leftItems: [
              "useAuth()",
              "useFetch()",
              "useTheme()",
              "useWindowSize()"
            ],
            rightTitle: "Incorrect",
            rightItems: [
              "authHook()",
              "fetchData()",
              "windowSize()"
            ]
          },
          {
            type: "paragraph",
            content: "React relies on this naming convention."
          },
          {
            type: "paragraph",
            content: "Without the:"
          },
          {
            type: "output",
            content: "use"
          },
          {
            type: "paragraph",
            content: "prefix,"
          },
          {
            type: "paragraph",
            content: "React cannot properly identify the function as a Hook."
          }
        ]
      },

      {
        heading: "Anatomy of a Custom Hook",
        blocks: [
          {
            type: "paragraph",
            content: "A Custom Hook typically contains:"
          },
          {
            type: "flow",
            steps: [
              "State", "→",
              "Effects", "→",
              "Logic", "→",
              "Return Values"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useCounter() {
  const [count, setCount] =
    useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment
  };
}`
          },
          {
            type: "paragraph",
            content: "The hook manages logic."
          },
          {
            type: "paragraph",
            content: "Components consume the hook."
          }
        ]
      },

      {
        heading: "Creating Your First Custom Hook",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useCounter() {
  const [count, setCount] =
    useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return {
    count,
    increment,
    decrement
  };
}`
          },
          {
            type: "paragraph",
            content: "Using it:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const {
    count,
    increment,
    decrement
  } = useCounter();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Now the counter logic can be reused anywhere."
          }
        ]
      },

      {
        heading: "How Custom Hooks Work",
        blocks: [
          {
            type: "paragraph",
            content: "Important concept:"
          },
          {
            type: "output",
            content: "Custom Hooks Do NOT Share State"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const counter1 = useCounter();
const counter2 = useCounter();`
          },
          {
            type: "paragraph",
            content: "Each hook instance gets:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Its Own State",
              "Its Own Effects",
              "Its Own Lifecycle"
            ]
          },
          {
            type: "paragraph",
            content: "The logic is shared."
          },
          {
            type: "paragraph",
            content: "The state is not."
          },
          {
            type: "paragraph",
            content: "This is one of the most misunderstood concepts among beginners."
          }
        ]
      },

      {
        heading: "Real World Example: useWindowSize",
        blocks: [
          {
            type: "paragraph",
            content: "Tracking browser dimensions is common."
          },
          {
            type: "paragraph",
            content: "Custom Hook:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useWindowSize() {
  const [width, setWidth] =
    useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return width;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const width = useWindowSize();

  return <h1>{width}</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Reusable and clean."
          }
        ]
      },

      {
        heading: "Real World Example: useLocalStorage",
        blocks: [
          {
            type: "paragraph",
            content: "Saving data in localStorage is common."
          },
          {
            type: "paragraph",
            content: "Custom Hook:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(() => {
      const stored =
        localStorage.getItem(key);

      return stored
        ? JSON.parse(stored)
        : initialValue;
    });

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }, [key, value]);

  return [value, setValue];
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [theme, setTheme] =
  useLocalStorage(
    "theme",
    "light"
  );`
          }
        ]
      },

      {
        heading: "Real World Example: useFetch",
        blocks: [
          {
            type: "paragraph",
            content: "API requests are extremely common."
          },
          {
            type: "paragraph",
            content: "Custom Hook:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useFetch(url) {
  const [data, setData] =
    useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users =
  useFetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "This pattern appears frequently in professional applications."
          }
        ]
      },

      {
        heading: "Common Categories of Custom Hooks",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Data Hooks",
                description: "Examples: `useFetch()`, `useUsers()`, `useProducts()`. Purpose: Handle API Data."
              },
              {
                title: "UI Hooks",
                description: "Examples: `useTheme()`, `useDarkMode()`, `useWindowSize()`. Purpose: Handle User Interface Logic."
              },
              {
                title: "Form Hooks",
                description: "Examples: `useForm()`, `useValidation()`. Purpose: Handle Form State."
              },
              {
                title: "Authentication Hooks",
                description: "Examples: `useAuth()`, `useCurrentUser()`. Purpose: Handle Login Logic."
              },
              {
                title: "Utility Hooks",
                description: "Examples: `useDebounce()`, `useClipboard()`, `useTimer()`. Purpose: Provide Reusable Utilities."
              }
            ]
          }
        ]
      },

      {
        heading: "Custom Hooks vs Components",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse them."
          },
          {
            type: "comparison",
            leftTitle: "Component",
            leftItems: [
              "Returns: JSX",
              "Example: `function Button() { return <button>Click</button>; }`",
              "Purpose: Render UI"
            ],
            rightTitle: "Custom Hook",
            rightItems: [
              "Returns: State, Functions, Data, Logic",
              "Example: `function useCounter() { return { count, increment }; }`",
              "Purpose: Reuse Logic"
            ]
          }
        ]
      },

      {
        heading: "Custom Hooks vs Utility Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Utility Function:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function calculateTax(amount) {
  return amount * 0.1;
}`
          },
          {
            type: "paragraph",
            content: "Contains:"
          },
          {
            type: "output",
            content: "No React Hooks"
          },
          {
            type: "paragraph",
            content: "Custom Hook:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useTax() {
  const [tax, setTax] =
    useState(0);
}`
          },
          {
            type: "paragraph",
            content: "Contains:"
          },
          {
            type: "output",
            content: "React Hooks"
          },
          {
            type: "paragraph",
            content: "Utility functions are general JavaScript."
          },
          {
            type: "paragraph",
            content: "Custom Hooks are React-specific."
          }
        ]
      },

      {
        heading: "Rules of Custom Hooks",
        blocks: [
          {
            type: "paragraph",
            content: "Custom Hooks follow the same Hook rules."
          },
          {
            type: "paragraph",
            content: "Rule 1: Only Call Hooks at Top Level"
          },
          {
            type: "comparison",
            leftTitle: "Correct",
            leftItems: [
              "`function useCounter() { const [count, setCount] = useState(0); }`"
            ],
            rightTitle: "Incorrect",
            rightItems: [
              "`if (condition) { useState(0); }`"
            ]
          },
          {
            type: "paragraph",
            content: "Rule 2: Only Call Hooks From React Functions"
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useState()",
              "useEffect()",
              "useCounter()"
            ]
          },
          {
            type: "paragraph",
            content: "inside:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components",
              "Custom Hooks"
            ]
          },
          {
            type: "paragraph",
            content: "Rule 3: Start With \"use\""
          },
          {
            type: "paragraph",
            content: "Required:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useFetch()",
              "useTheme()"
            ]
          }
        ]
      },

      {
        heading: "Benefits of Custom Hooks",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Reusability",
                description: "Write logic once. Use it everywhere."
              },
              {
                title: "Cleaner Components",
                description: "Bad: 500 lines inside component. Better: `const user = useUser(); const theme = useTheme();`"
              },
              {
                title: "Better Organization",
                description: "Logic stays separate from UI."
              },
              {
                title: "Easier Testing",
                description: "Hooks can be tested independently."
              },
              {
                title: "Improved Scalability",
                description: "Large applications become easier to maintain."
              }
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
                question: "Mistake 1: Creating Hooks Too Early",
                answer: "Not every function needs a Custom Hook. Extract only when logic becomes reusable or a component becomes too large."
              },
              {
                question: "Mistake 2: Returning Too Much",
                answer: "Bad: returning `{ state1, state2, state3, state4, state5 }`. Return only what consumers actually need."
              },
              {
                question: "Mistake 3: Sharing State Expectations",
                answer: "Wrong assumption: Custom Hook = Shared State. False. Each hook instance has independent state."
              },
              {
                question: "Mistake 4: Naming Without use Prefix",
                answer: "Bad: `counterHook()`. Good: `useCounter()`."
              },
              {
                question: "Mistake 5: Putting UI Inside Hooks",
                answer: "Bad: `function useCounter() { return <button>Click</button>; }`. Hooks should manage logic, not return UI."
              }
            ]
          }
        ]
      },

      {
        heading: "Folder Structure for Custom Hooks",
        blocks: [
          {
            type: "paragraph",
            content: "Small projects:"
          },
          {
            type: "tree",
            content: `src
├── hooks
│   ├── useCounter.js
│   ├── useFetch.js
│   └── useTheme.js`
          },
          {
            type: "paragraph",
            content: "Most professional projects maintain a dedicated:"
          },
          {
            type: "output",
            content: "hooks"
          },
          {
            type: "paragraph",
            content: "folder."
          }
        ]
      },

      {
        heading: "Custom Hooks in Large Applications",
        blocks: [
          {
            type: "paragraph",
            content: "Large companies frequently use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useAuth()",
              "usePermissions()",
              "useAnalytics()",
              "useFeatureFlags()",
              "useNotifications()",
              "useApi()"
            ]
          },
          {
            type: "paragraph",
            content: "These Hooks encapsulate complex business logic."
          },
          {
            type: "paragraph",
            content: "Instead of writing logic repeatedly:"
          },
          {
            type: "flow",
            steps: [
              "One Hook", "→",
              "Many Components"
            ]
          },
          {
            type: "paragraph",
            content: "This is a major reason React scales effectively in enterprise applications."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Custom Hooks allow developers to extract and reuse stateful React logic."
          },
          {
            type: "paragraph",
            content: "A Custom Hook is simply:"
          },
          {
            type: "output",
            content: [
              "A JavaScript Function",
              "+",
              "React Hooks"
            ]
          },
          {
            type: "paragraph",
            content: "They help:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reuse logic",
              "Reduce duplication",
              "Improve maintainability",
              "Organize code",
              "Scale applications"
            ]
          },
          {
            type: "paragraph",
            content: "Common examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "useFetch()",
              "useAuth()",
              "useTheme()",
              "useWindowSize()",
              "useLocalStorage()"
            ]
          },
          {
            type: "paragraph",
            content: "Remember:"
          },
          {
            type: "output",
            content: [
              "Components → Reuse UI",
              "Custom Hooks → Reuse Logic"
            ]
          },
          {
            type: "paragraph",
            content: "Custom Hooks are one of the most important patterns in modern React development and are heavily used in real-world applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The biggest shift in React architecture happens when developers stop thinking of Custom Hooks as \"advanced Hooks\" and start thinking of them as \"logic modules.\" In large applications, most business logic eventually moves out of components and into Custom Hooks. Components become focused on rendering UI, while Hooks handle data fetching, state management, permissions, analytics, authentication, and side effects. This separation dramatically improves scalability and maintainability as projects grow."
          }
        ]
      }
    ]
  },
};

export default reactHooks;