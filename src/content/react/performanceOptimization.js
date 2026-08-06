const performanceOptimization = {


/* ===========================
    First Topic : React Performance Basics
============================= */
    "react-performance-basics": {
    title: "React Performance Basics",
    readingTime: "14 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, they often become more complex. A small project with a few components may run smoothly without any optimization, but a large application containing hundreds of components, API calls, forms, charts, tables, animations, and user interactions can quickly develop performance bottlenecks."
          },
          {
            type: "paragraph",
            content: "React Performance Optimization is the process of making your application faster, more responsive, and more efficient by reducing unnecessary work performed by React and the browser."
          },
          {
            type: "paragraph",
            content: "Performance optimization is not about making code shorter or more advanced. It is about ensuring that users experience smooth interactions, fast page loads, minimal lag, and efficient resource usage."
          },
          {
            type: "paragraph",
            content: "In this tutorial, we will learn how React handles rendering, what causes performance issues, how to identify bottlenecks, and the foundational techniques every React developer should understand before moving to advanced optimization techniques such as React.memo, useMemo, useCallback, lazy loading, code splitting, and virtualization."
          }
        ]
      },

      {
        heading: "Why Performance Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine you are building:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "An E-commerce Platform",
              "A Social Media Application",
              "A Chat Application",
              "A Project Management Dashboard",
              "A Video Streaming Platform"
            ]
          },
          {
            type: "paragraph",
            content: "These applications often handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large datasets",
              "Frequent state updates",
              "Real-time communication",
              "Complex user interfaces",
              "Multiple API requests"
            ]
          },
          {
            type: "paragraph",
            content: "If performance is not considered, users may experience:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slow page loading",
              "Delayed button clicks",
              "Laggy scrolling",
              "Freezing UI",
              "Excessive memory consumption",
              "Battery drain on mobile devices"
            ]
          },
          {
            type: "paragraph",
            content: "Even if an application works correctly, poor performance can make it feel broken. Modern users expect websites to respond almost instantly."
          }
        ]
      },

      {
        heading: "Understanding Performance in React",
        blocks: [
          {
            type: "paragraph",
            content: "Before optimizing React applications, it is important to understand what React actually does when data changes."
          },
          {
            type: "paragraph",
            content: "Whenever state or props change:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "React creates a new Virtual DOM tree.",
              "React compares it with the previous Virtual DOM tree.",
              "React identifies differences.",
              "React updates only the changed parts of the real DOM."
            ]
          },
          {
            type: "paragraph",
            content: "This process is called **Reconciliation**."
          },
          {
            type: "paragraph",
            content: "The Virtual DOM significantly improves efficiency compared to manually updating the browser DOM. However, creating component trees, comparing nodes, running component functions, and executing effects still consume CPU time."
          },
          {
            type: "paragraph",
            content: "The goal of performance optimization is not:"
          },
          {
            type: "output",
            content: "❌ Stop React from rendering"
          },
          {
            type: "paragraph",
            content: "The goal is:"
          },
          {
            type: "output",
            content: "✅ Prevent unnecessary rendering"
          }
        ]
      },

      {
        heading: "The Two Types of Performance",
        blocks: [
          {
            type: "paragraph",
            content: "React performance can generally be divided into two categories."
          },
          {
            type: "paragraph",
            content: "**1. Loading Performance**"
          },
          {
            type: "paragraph",
            content: "Loading performance refers to how quickly an application becomes usable."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Initial page load speed",
              "Bundle download size",
              "First Contentful Paint (FCP)",
              "Largest Contentful Paint (LCP)"
            ]
          },
          {
            type: "paragraph",
            content: "Loading performance is improved using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Code Splitting",
              "Lazy Loading",
              "Tree Shaking",
              "Asset Optimization",
              "Caching"
            ]
          },
          {
            type: "paragraph",
            content: "**2. Runtime Performance**"
          },
          {
            type: "paragraph",
            content: "Runtime performance refers to how efficiently the application behaves after loading."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Button click responsiveness",
              "Search filtering speed",
              "Scrolling smoothness",
              "Form interaction speed"
            ]
          },
          {
            type: "paragraph",
            content: "Runtime performance is improved using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Memoization",
              "Efficient state management",
              "Optimized rendering",
              "Virtualization",
              "Component architecture"
            ]
          }
        ]
      },

      {
        heading: "Common Causes of React Performance Problems",
        blocks: [
          {
            type: "paragraph",
            content: "Most performance issues come from a few predictable mistakes."
          },
          {
            type: "paragraph",
            content: "**1. Unnecessary Re-renders**"
          },
          {
            type: "paragraph",
            content: "This is the most common React performance problem."
          },
          {
            type: "paragraph",
            content: "Example: A parent component updates. All child components re-render. Even children whose data never changed may re-render."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Every time `count` changes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Parent re-renders",
              "Child re-renders (Even if Child does not use count)"
            ]
          },
          {
            type: "paragraph",
            content: "**2. Large Component Trees**"
          },
          {
            type: "paragraph",
            content: "Huge components are harder for React to process efficiently."
          },
          {
            type: "tree",
            content: `Dashboard
 ├── Header
 ├── Sidebar
 ├── Products
 ├── Orders
 ├── Analytics
 ├── Users
 └── Notifications`
          },
          {
            type: "paragraph",
            content: "If Dashboard updates frequently, everything may re-render. Breaking applications into smaller focused components improves performance."
          },
          {
            type: "paragraph",
            content: "**3. Expensive Calculations**"
          },
          {
            type: "paragraph",
            content: "Some calculations consume significant CPU resources."
          },
          {
            type: "code",
            language: "javascript",
            content: `const sortedProducts = products.sort(...);`
          },
          {
            type: "paragraph",
            content: "If this runs during every render, performance suffers. Especially with Large arrays, Filtering, Sorting, Aggregation, or Data transformation."
          },
          {
            type: "paragraph",
            content: "**4. Large Lists**"
          },
          {
            type: "paragraph",
            content: "Rendering thousands of DOM elements is expensive."
          },
          {
            type: "code",
            language: "jsx",
            content: `products.map(product => (
  <ProductCard />
))`
          },
          {
            type: "paragraph",
            content: "Rendering 10 items is easy. Rendering 10,000 items is not."
          },
          {
            type: "paragraph",
            content: "**5. Excessive API Calls**"
          },
          {
            type: "paragraph",
            content: "Repeated API requests can slow applications dramatically."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  fetchData();
});`
          },
          {
            type: "paragraph",
            content: "Without dependencies: The request runs after every render."
          },
          {
            type: "paragraph",
            content: "**6. Memory Leaks**"
          },
          {
            type: "paragraph",
            content: "Memory leaks occur when resources remain active after components disappear."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers",
              "Event listeners",
              "WebSocket connections",
              "API subscriptions"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);`
          },
          {
            type: "paragraph",
            content: "Timer never stops if cleanup function is omitted."
          }
        ]
      },

      {
        heading: "How React Detects Updates",
        blocks: [
          {
            type: "paragraph",
            content: "React uses a simple rule."
          },
          {
            type: "paragraph",
            content: "If state changes:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setCount(count + 1);`
          },
          {
            type: "paragraph",
            content: "React schedules a re-render."
          },
          {
            type: "paragraph",
            content: "If props change:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Child value={count} />`
          },
          {
            type: "paragraph",
            content: "React schedules a re-render."
          },
          {
            type: "paragraph",
            content: "If context changes:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ThemeProvider value={theme}>`
          },
          {
            type: "paragraph",
            content: "Consumers re-render."
          },
          {
            type: "paragraph",
            content: "Understanding these triggers is essential for optimization."
          }
        ]
      },

      {
        heading: "Measuring Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Optimization should be data-driven. Never optimize blindly. Measure first."
          },
          {
            type: "paragraph",
            content: "**React DevTools Profiler**"
          },
          {
            type: "paragraph",
            content: "React provides a Profiler inside React DevTools. It helps identify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slow components",
              "Re-render frequency",
              "Render duration",
              "Component update causes"
            ]
          },
          {
            type: "paragraph",
            content: "Questions the profiler answers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which component re-rendered?",
              "Why did it re-render?",
              "How long did it take?"
            ]
          },
          {
            type: "paragraph",
            content: "**Browser Performance Tools**"
          },
          {
            type: "paragraph",
            content: "Chrome DevTools provides: Performance Tab"
          },
          {
            type: "paragraph",
            content: "Tracks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CPU usage",
              "Rendering",
              "Paint operations",
              "JavaScript execution"
            ]
          },
          {
            type: "paragraph",
            content: "**Lighthouse**"
          },
          {
            type: "paragraph",
            content: "Measures:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Performance score",
              "Accessibility",
              "Best practices",
              "SEO"
            ]
          }
        ]
      },

      {
        heading: "React Performance Optimization Techniques",
        blocks: [
          {
            type: "paragraph",
            content: "The following techniques form the foundation of React optimization."
          },
          {
            type: "cards",
            items: [
              {
                title: "Memoization",
                description: "Storing previous results and reusing them. React.memo prevents unnecessary component re-renders. useMemo caches expensive calculations. useCallback caches function references."
              },
              {
                title: "Component Splitting",
                description: "Large components should be broken into smaller components. Smaller components are easier for React to optimize."
              },
              {
                title: "State Localization",
                description: "Keep state as close as possible to where it is used. Local state reduces unnecessary re-renders of parent components."
              },
              {
                title: "Virtualization",
                description: "Rendering thousands of rows is expensive. Virtualization renders only visible rows (e.g., using react-window). Huge performance improvement."
              },
              {
                title: "Lazy Loading & Code Splitting",
                description: "Load code only when required. Reduces initial bundle size. Benefits: Faster downloads, faster startup, better caching."
              },
              {
                title: "Debouncing & Throttling",
                description: "Debouncing groups sequential events into a single execution (useful for search inputs). Throttling limits execution frequency (useful for scroll/resize events)."
              }
            ]
          }
        ]
      },

      {
        heading: "React Rendering Myths",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Myth 1: \"Every re-render is bad.\"",
                answer: "False. React is designed to re-render. Unnecessary re-renders are the problem."
              },
              {
                question: "Myth 2: \"UseMemo everywhere.\"",
                answer: "False. useMemo itself has overhead. Only memoize expensive operations."
              },
              {
                question: "Myth 3: \"Performance optimization should happen first.\"",
                answer: "False. Build correct functionality first. Optimize after measuring bottlenecks."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Performance Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers usually follow this order:"
          },
          {
            type: "flow",
            steps: [
              "Step 1: Build working features.", "→",
              "Step 2: Measure performance.", "→",
              "Step 3: Find bottlenecks.", "→",
              "Step 4: Optimize only problematic areas.", "→",
              "Step 5: Measure again."
            ]
          },
          {
            type: "paragraph",
            content: "This approach prevents premature optimization."
          }
        ]
      },

      {
        heading: "React Performance Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before deploying a production React application, check:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components are reasonably small",
              "Large lists use virtualization",
              "Expensive calculations use useMemo",
              "Expensive callbacks use useCallback",
              "Unnecessary re-renders are minimized",
              "Code splitting is implemented",
              "Lazy loading is used",
              "Images are optimized",
              "API calls are cached when appropriate",
              "Memory leaks are cleaned up",
              "React DevTools Profiler shows healthy rendering"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "React performance optimization is the practice of reducing unnecessary rendering, minimizing CPU work, improving loading speed, and creating a smooth user experience."
          },
          {
            type: "paragraph",
            content: "Key concepts include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Understanding React's rendering process",
              "Avoiding unnecessary re-renders",
              "Keeping state localized",
              "Splitting large components",
              "Using memoization carefully",
              "Lazy loading components",
              "Code splitting bundles",
              "Virtualizing large lists",
              "Measuring performance before optimizing"
            ]
          },
          {
            type: "paragraph",
            content: "The most important lesson is that optimization should be guided by measurement, not assumptions. A fast React application is not the one with the most optimization techniques—it is the one that performs only the work that is truly necessary."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Premature optimization is the root of all evil. Before reaching for `useMemo` or `React.memo`, ask yourself if the component actually feels slow. Always use the React Profiler to prove a component is a bottleneck before adding optimization overhead. In many cases, simply moving state down closer to where it's used solves the re-render issue much more cleanly."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Memoization
============================= */
    "memoization": {
    title: "Memoization",
    readingTime: "15 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, performance becomes an important concern. Components may re-render frequently, expensive calculations may run repeatedly, and large UI trees can consume unnecessary CPU resources. One of the most common techniques React developers use to improve performance is Memoization."
          },
          {
            type: "paragraph",
            content: "Memoization is a performance optimization technique that stores the result of a computation and reuses it when the same input occurs again, instead of recalculating everything from scratch."
          },
          {
            type: "paragraph",
            content: "In React, memoization helps reduce:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unnecessary re-renders",
              "Repeated expensive calculations",
              "Creation of identical functions",
              "Performance bottlenecks in large applications"
            ]
          },
          {
            type: "paragraph",
            content: "However, memoization is often misunderstood. Many developers apply it everywhere, expecting automatic performance improvements. In reality, incorrect memoization can actually make an application slower."
          },
          {
            type: "paragraph",
            content: "This tutorial explores memoization from the ground up, including how it works, when to use it, when not to use it, and the various React tools that implement memoization."
          }
        ]
      },

      {
        heading: "What is Memoization?",
        blocks: [
          {
            type: "paragraph",
            content: "Memoization is a technique where the result of a function is cached (stored) after the first execution."
          },
          {
            type: "paragraph",
            content: "Instead of computing the result repeatedly, the previously stored result is returned whenever the same input is encountered."
          },
          {
            type: "paragraph",
            content: "Consider a simple example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function square(num) {
  console.log("Calculating...");
  return num * num;
}`
          },
          {
            type: "paragraph",
            content: "Every call performs the calculation:"
          },
          {
            type: "code",
            language: "javascript",
            content: `square(5);
square(5);
square(5);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Calculating...",
              "Calculating...",
              "Calculating..."
            ]
          },
          {
            type: "paragraph",
            content: "Even though the input never changes."
          },
          {
            type: "paragraph",
            content: "With memoization:"
          },
          {
            type: "code",
            language: "javascript",
            content: `square(5);
square(5);
square(5);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Calculating..."
          },
          {
            type: "paragraph",
            content: "The result is calculated once and reused."
          }
        ]
      },

      {
        heading: "Why React Needs Memoization",
        blocks: [
          {
            type: "paragraph",
            content: "React applications re-render frequently."
          },
          {
            type: "paragraph",
            content: "Whenever:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State changes",
              "Props change",
              "Context changes",
              "Parent components re-render"
            ]
          },
          {
            type: "paragraph",
            content: "React executes component functions again."
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

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <ProductList />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Each click causes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "App re-render",
              "ProductList re-render"
            ]
          },
          {
            type: "paragraph",
            content: "Even if ProductList data never changed."
          },
          {
            type: "paragraph",
            content: "For small applications this is fine. For large applications it becomes expensive."
          },
          {
            type: "paragraph",
            content: "Memoization helps React avoid unnecessary work."
          }
        ]
      },

      {
        heading: "Memoization vs Caching",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers use these terms interchangeably, but they are slightly different."
          },
          {
            type: "paragraph",
            content: "**Caching**"
          },
          {
            type: "paragraph",
            content: "Stores data for future use."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Store API response and reuse it later."
          },
          {
            type: "paragraph",
            content: "**Memoization**"
          },
          {
            type: "paragraph",
            content: "Stores the result of a computation based on inputs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "calculateTotal(products)"
          },
          {
            type: "paragraph",
            content: "If products remain unchanged: Use previous result."
          },
          {
            type: "paragraph",
            content: "Memoization is a specialized form of caching."
          }
        ]
      },

      {
        heading: "React's Three Memoization Tools",
        blocks: [
          {
            type: "paragraph",
            content: "React provides three major memoization mechanisms."
          },
          {
            type: "table",
            headers: ["Tool", "Purpose"],
            rows: [
              ["React.memo", "Memoize components"],
              ["useMemo", "Memoize values"],
              ["useCallback", "Memoize functions"]
            ]
          },
          {
            type: "paragraph",
            content: "Understanding the differences is crucial."
          }
        ]
      },

      {
        heading: "React.memo",
        blocks: [
          {
            type: "paragraph",
            content: "React.memo prevents unnecessary component re-renders."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(() => {
  console.log("Child Rendered");

  return <h1>Hello</h1>;
});`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Without React.memo:"
          },
          {
            type: "output",
            content: [
              "Parent Rendered",
              "Child Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "every time."
          },
          {
            type: "paragraph",
            content: "With React.memo:"
          },
          {
            type: "output",
            content: "Parent Rendered"
          },
          {
            type: "paragraph",
            content: "only. Child skips rendering because its props didn't change."
          }
        ]
      },

      {
        heading: "How React.memo Works",
        blocks: [
          {
            type: "paragraph",
            content: "React.memo performs a shallow comparison of props."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Child name="John" />`
          },
          {
            type: "paragraph",
            content: "If next render:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Child name="John" />`
          },
          {
            type: "paragraph",
            content: "React sees:"
          },
          {
            type: "output",
            content: [
              "Old = \"John\"",
              "New = \"John\""
            ]
          },
          {
            type: "paragraph",
            content: "No change. Re-render skipped."
          },
          {
            type: "paragraph",
            content: "**React.memo Limitation**"
          },
          {
            type: "paragraph",
            content: "React.memo only compares props. It does NOT prevent re-renders caused by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Internal state changes",
              "Context updates"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(() => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
});`
          },
          {
            type: "paragraph",
            content: "Clicking button still re-renders Child."
          }
        ]
      },

      {
        heading: "useMemo",
        blocks: [
          {
            type: "paragraph",
            content: "useMemo memoizes values."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const value = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);`
          },
          {
            type: "paragraph",
            content: "**Why useMemo Exists**"
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const sortedProducts = products.sort(...);`
          },
          {
            type: "paragraph",
            content: "Sorting thousands of products every render is expensive."
          },
          {
            type: "paragraph",
            content: "Without useMemo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const sortedProducts = expensiveSort(products);`
          },
          {
            type: "paragraph",
            content: "Runs on every render."
          },
          {
            type: "paragraph",
            content: "With useMemo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const sortedProducts = useMemo(() => {
  return expensiveSort(products);
}, [products]);`
          },
          {
            type: "paragraph",
            content: "Runs only when products change."
          }
        ]
      },

      {
        heading: "How useMemo Works",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = useMemo(() => {
  return cart.reduce(
    (sum, item) => sum + item.price,
    0
  );
}, [cart]);`
          },
          {
            type: "paragraph",
            content: "React:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Calculates once",
              "Stores result",
              "Reuses result",
              "Recalculates only if cart changes"
            ]
          },
          {
            type: "paragraph",
            content: "**When useMemo is Useful**"
          },
          {
            type: "paragraph",
            content: "Good use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Large Array Sorting: `products.sort(...)`",
              "Filtering Data: `products.filter(...)`",
              "Data Transformation: `groupBy(...)`",
              "Mathematical Calculations: `complexFormula(...)`",
              "Generating Large Objects: `createConfig(...)`"
            ]
          },
          {
            type: "paragraph",
            content: "**When useMemo is NOT Useful**"
          },
          {
            type: "paragraph",
            content: "Bad example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const name = useMemo(() => {
  return "John";
}, []);`
          },
          {
            type: "paragraph",
            content: "No expensive work. No benefit. Extra overhead."
          }
        ]
      },

      {
        heading: "useCallback",
        blocks: [
          {
            type: "paragraph",
            content: "useCallback memoizes functions."
          },
          {
            type: "paragraph",
            content: "Syntax:"
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
            content: "**Why useCallback Exists**"
          },
          {
            type: "paragraph",
            content: "Every render creates new functions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function Parent() {
  const handleClick = () => {
    console.log("Click");
  };
}`
          },
          {
            type: "paragraph",
            content: "Each render:"
          },
          {
            type: "output",
            content: "New Function Created"
          },
          {
            type: "paragraph",
            content: "This can break React.memo."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Child onClick={handleClick} />`
          },
          {
            type: "paragraph",
            content: "Even if Child uses React.memo:"
          },
          {
            type: "code",
            language: "javascript",
            content: `React.memo(Child)`
          },
          {
            type: "paragraph",
            content: "Child re-renders because:"
          },
          {
            type: "output",
            content: "Old Function !== New Function"
          },
          {
            type: "paragraph",
            content: "Different references."
          },
          {
            type: "paragraph",
            content: "Using useCallback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  console.log("Click");
}, []);`
          },
          {
            type: "paragraph",
            content: "Now function reference stays stable. Child can skip re-rendering."
          }
        ]
      },

      {
        heading: "The Memoization Triangle",
        blocks: [
          {
            type: "paragraph",
            content: "React performance optimization often involves:"
          },
          {
            type: "tree",
            content: `React.memo
      ↑
      |
useMemo ---- useCallback`
          },
          {
            type: "paragraph",
            content: "Together they reduce:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Component renders",
              "Value recalculations",
              "Function recreations"
            ]
          }
        ]
      },

      {
        heading: "Shallow Comparison Explained",
        blocks: [
          {
            type: "paragraph",
            content: "Memoization in React relies heavily on shallow comparison."
          },
          {
            type: "paragraph",
            content: "Primitive values:"
          },
          {
            type: "output",
            content: "5 === 5 (True)"
          },
          {
            type: "paragraph",
            content: "Objects:"
          },
          {
            type: "output",
            content: "{} === {} (False. Different references.)"
          },
          {
            type: "paragraph",
            content: "Arrays:"
          },
          {
            type: "output",
            content: "[] === [] (False. Different references.)"
          },
          {
            type: "paragraph",
            content: "This explains why memoization sometimes fails."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Child data={{ name: "John" }} />`
          },
          {
            type: "paragraph",
            content: "New object every render. React.memo cannot help."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = useMemo(() => ({
  name: "John"
}), []);`
          },
          {
            type: "paragraph",
            content: "Stable reference."
          }
        ]
      },

      {
        heading: "Real Performance Gains",
        blocks: [
          {
            type: "paragraph",
            content: "Memoization is most useful when:"
          },
          {
            type: "paragraph",
            content: "**Expensive Computation Exists**\nExample: Sorting 10,000 records"
          },
          {
            type: "paragraph",
            content: "**Large Component Trees Exist**\nExample:"
          },
          {
            type: "tree",
            content: `Dashboard
 ├── Analytics
 ├── Charts
 ├── Reports`
          },
          {
            type: "paragraph",
            content: "**Frequent Re-renders Exist**\nExample: Typing in search field"
          },
          {
            type: "paragraph",
            content: "**Heavy Child Components Exist**\nExample: Map, Chart, Video Player"
          }
        ]
      },

      {
        heading: "The Cost of Memoization",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials discuss benefits but ignore costs."
          },
          {
            type: "paragraph",
            content: "Memoization is not free. React must:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Store cached values",
              "Track dependencies",
              "Compare references"
            ]
          },
          {
            type: "paragraph",
            content: "Sometimes:"
          },
          {
            type: "output",
            content: "Memoization Cost > Recalculation Cost"
          },
          {
            type: "paragraph",
            content: "Result: Slower application."
          }
        ]
      },

      {
        heading: "Over-Memoization",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common React performance mistakes."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const value = useMemo(() => count + 1, [count]);`
          },
          {
            type: "paragraph",
            content: "Adding one number is extremely cheap. No memoization needed."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const handleClick = useCallback(() => {
  setOpen(true);
}, []);`
          },
          {
            type: "paragraph",
            content: "If function is not passed to memoized children: No benefit."
          }
        ]
      },

      {
        heading: "The Golden Rule",
        blocks: [
          {
            type: "paragraph",
            content: "Ask:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is the calculation expensive? If no: Don't memoize.",
              "Is the component expensive? If no: Don't memoize.",
              "Is the function causing re-renders? If no: Don't memoize."
            ]
          }
        ]
      },

      {
        heading: "Memoization and React 19",
        blocks: [
          {
            type: "paragraph",
            content: "React is moving toward automatic optimizations."
          },
          {
            type: "paragraph",
            content: "The React Compiler introduces concepts such as:"
          },
          {
            type: "output",
            content: ["\"use memo\"", "\"use no memo\""]
          },
          {
            type: "paragraph",
            content: "allowing React to automatically optimize many situations."
          },
          {
            type: "paragraph",
            content: "Future React applications may require significantly less manual memoization."
          },
          {
            type: "paragraph",
            content: "However, understanding memoization remains essential because:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Existing codebases use it heavily.",
              "Interviews frequently ask about it.",
              "Complex performance problems still require manual optimization."
            ]
          }
        ]
      },

      {
        heading: "Common Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "What is memoization?",
                answer: "A technique that stores previously computed results and reuses them instead of recalculating."
              },
              {
                question: "Difference between React.memo and useMemo?",
                answer: "React.memo memoizes components. useMemo memoizes values."
              },
              {
                question: "Difference between useMemo and useCallback?",
                answer: "useMemo caches values. useCallback caches functions."
              },
              {
                question: "Can memoization improve every React app?",
                answer: "No. Incorrect memoization may worsen performance."
              },
              {
                question: "Does React.memo prevent all re-renders?",
                answer: "No. State changes and context updates still trigger renders."
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
              "Measure performance before optimizing",
              "Use React DevTools Profiler",
              "Memoize expensive computations",
              "Memoize frequently recreated functions when necessary",
              "Use React.memo for expensive child components",
              "Keep state localized",
              "Understand reference equality",
              "Remove unnecessary memoization"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Memoization is one of the most important performance optimization techniques in React. It works by storing previously computed results and reusing them when inputs remain unchanged."
          },
          {
            type: "paragraph",
            content: "React provides three primary memoization tools:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React.memo → Memoizes components",
              "useMemo → Memoizes values",
              "useCallback → Memoizes functions"
            ]
          },
          {
            type: "paragraph",
            content: "Memoization helps reduce unnecessary re-renders, avoid expensive recalculations, and improve responsiveness in large applications. However, memoization itself has a cost, so it should be applied only where performance measurements indicate a real benefit."
          },
          {
            type: "paragraph",
            content: "The biggest takeaway is this:"
          },
          {
            type: "quote",
            content: "Memoization is a tool for solving performance problems, not a default coding pattern. Optimize based on evidence, not assumptions."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common anti-pattern is using `useCallback` on every single function inside a component \"just in case\". This forces React to allocate memory for the cache and run dependency comparisons on every render. If the function is not being passed down to a heavily optimized child component (wrapped in `React.memo`), `useCallback` is almost always a net performance loss."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : useMemo
============================= */
    "react-usememo-hook": {
    title: "useMemo",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As React applications grow larger, performance becomes increasingly important."
          },
 
          {
            type: "paragraph",
            content:
              "In small applications, React can re-render components and recalculate values so quickly that users never notice. However, in larger applications containing thousands of records, complex calculations, charts, dashboards, search systems, analytics panels, and dynamic user interfaces, unnecessary computations can gradually become a performance bottleneck."
          },
 
          {
            type: "paragraph",
            content:
              "Many developers initially assume that React itself is slow. In reality, React is often not the problem."
          },
 
          {
            type: "paragraph",
            content:
              "The real issue is usually that components repeatedly perform expensive work during every render, even when the result has not changed."
          },
 
          {
            type: "paragraph",
            content:
              "Consider a situation where:"
          },
 
          {
            type: "list",
            items: [
              "A dashboard filters 50,000 records",
              "A search system processes large datasets",
              "A reporting application generates complex statistics",
              "A table performs sorting and grouping operations"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "If these calculations execute during every render, the application may begin to feel sluggish, especially on lower-powered devices."
          },
 
          {
            type: "paragraph",
            content:
              "This is where the useMemo Hook becomes useful."
          },
 
          {
            type: "paragraph",
            content:
              "The purpose of useMemo is to remember the result of expensive calculations and reuse them when possible instead of recalculating everything again."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What useMemo is",
              "Why React provides useMemo",
              "The problem it solves",
              "How memoization works",
              "Understanding React re-renders",
              "Basic syntax of useMemo",
              "Your first memoized value",
              "Practical examples",
              "When useMemo should be used",
              "When useMemo should not be used"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand the true purpose of useMemo and be prepared to use it correctly in real-world React applications."
          }
 
        ]
      },
 
      {
        heading: "What is useMemo?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useMemo is a React Hook that memoizes a value."
          },
 
          {
            type: "paragraph",
            content:
              "In simple terms, it remembers the result of a calculation and returns the previously stored result until its dependencies change."
          },
 
          {
            type: "paragraph",
            content:
              "Basic syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);`
          },
 
          {
            type: "paragraph",
            content:
              "The first argument is a function that performs a calculation."
          },
 
          {
            type: "paragraph",
            content:
              "The second argument is a dependency array."
          },
 
          {
            type: "paragraph",
            content:
              "React executes the calculation only when one of the dependencies changes. Otherwise, React reuses the previously stored value."
          }
 
        ]
      },
 
      {
        heading: "Understanding Memoization",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before learning useMemo, it is important to understand the concept of memoization."
          },
 
          {
            type: "paragraph",
            content:
              "Memoization is a programming optimization technique that stores the result of expensive operations so they can be reused later."
          },
 
          {
            type: "paragraph",
            content:
              "Without memoization:"
          },
 
          {
            type: "flow",
            steps: [
              "Input",
              "→",
              "Calculation",
              "→",
              "Result"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The calculation runs every time."
          },
 
          {
            type: "paragraph",
            content:
              "With memoization:"
          },
 
          {
            type: "flow",
            steps: [
              "Input",
              "→",
              "Calculation",
              "→",
              "Store Result"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Same Input",
              "→",
              "Reuse Stored Result"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The calculation only happens once. Future requests reuse the cached result. This reduces unnecessary work."
          }
 
        ]
      },
 
      {
        heading: "Why Does useMemo Exist?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "To understand why useMemo exists, we must first understand React rendering."
          },
 
          {
            type: "paragraph",
            content:
              "Whenever state changes:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `setState(...)`
          },
 
          {
            type: "paragraph",
            content:
              "React re-renders the component."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);
 
  console.log("Component Rendered");
 
  return (
    <>
      <h1>{count}</h1>
 
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
 
          {
            type: "output",
            content:
              "Component Rendered"
          },
 
          {
            type: "paragraph",
            content:
              "Every button click:"
          },
 
          {
            type: "output",
            content: [
              "Component Rendered",
              "Component Rendered",
              "Component Rendered"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React executes the entire component function again. This behavior is completely normal."
          }
 
        ]
      },
 
      {
        heading: "What Happens During a Re-Render?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners think React only updates the changed part of the code. That is not what happens."
          },
 
          {
            type: "paragraph",
            content:
              "When a component re-renders:"
          },
 
          {
            type: "flow",
            steps: [
              "Component Function Executes Again",
              "→",
              "Variables Recreated",
              "→",
              "Calculations Run Again",
              "→",
              "JSX Rebuilt",
              "→",
              "React Compares Changes",
              "→",
              "DOM Updates"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Every variable inside the component is recalculated."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);
 
  const sum = 10 + 20;
 
  console.log("Calculating Sum");
 
  return (
    <>
      <h1>{sum}</h1>
 
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Output after clicks:"
          },
 
          {
            type: "output",
            content: [
              "Calculating Sum",
              "Calculating Sum",
              "Calculating Sum"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Even though the value never changes, React recalculates it because the component function runs again."
          },
 
          {
            type: "paragraph",
            content:
              "For simple calculations this is not a problem. For expensive calculations, it can become expensive."
          }
 
        ]
      },
 
      {
        heading: "The Real Problem useMemo Solves",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a search application containing 20,000 users."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const users = [...20000 records];`
          },
 
          {
            type: "paragraph",
            content:
              "Every time the component renders:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `users.filter(...)`
          },
 
          {
            type: "paragraph",
            content:
              "Runs again. Even if the data hasn't changed."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "flow",
            steps: [
              "User Types",
              "→",
              "Component Re-renders",
              "→",
              "Filter Runs Again",
              "→",
              "Results Generated"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Now imagine:"
          },
 
          {
            type: "list",
            items: [
              "20,000 users",
              "50,000 products",
              "100,000 transactions"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Repeated calculations can become costly. This is exactly the situation useMemo was designed to optimize."
          }
 
        ]
      },
 
      {
        heading: "Understanding useMemo Through a Real-Life Analogy",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a student solving a difficult mathematics problem."
          },
 
          {
            type: "paragraph",
            content:
              "Without memoization:"
          },
 
          {
            type: "flow",
            steps: [
              "Teacher asks question",
              "→",
              "Student solves from scratch"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Teacher asks same question",
              "→",
              "Student solves again"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Teacher asks same question",
              "→",
              "Student solves again"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "A lot of unnecessary work happens."
          },
 
          {
            type: "paragraph",
            content:
              "With memoization:"
          },
 
          {
            type: "flow",
            steps: [
              "Teacher asks question",
              "→",
              "Student solves it",
              "→",
              "Stores answer"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Teacher asks same question",
              "→",
              "Uses stored answer"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Much faster."
          },
 
          {
            type: "paragraph",
            content:
              "useMemo works similarly. It stores the result of expensive work and reuses it until something changes."
          }
 
        ]
      },
 
      {
        heading: "Basic Syntax of useMemo",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useMemo } from "react";
 
const value = useMemo(() => {
  return calculation();
}, [dependencies]);`
          },
 
          {
            type: "paragraph",
            content:
              "Breaking it down:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useMemo(
  () => {
    return calculation();
  },
  [dependencies]
);`
          },
 
          {
            type: "paragraph",
            content:
              "Part 1:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `() => {
  return calculation();
}`
          },
 
          {
            type: "paragraph",
            content:
              "This function performs the calculation."
          },
 
          {
            type: "paragraph",
            content:
              "Part 2:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `[dependencies]`
          },
 
          {
            type: "paragraph",
            content:
              "This tells React when to recalculate."
          },
 
          {
            type: "paragraph",
            content:
              "If dependencies remain unchanged:"
          },
 
          {
            type: "output",
            content:
              "Reuse previous result"
          },
 
          {
            type: "paragraph",
            content:
              "If dependencies change:"
          },
 
          {
            type: "output",
            content:
              "Run calculation again"
          }
 
        ]
      },
 
      {
        heading: "Your First useMemo Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useMemo, useState } from "react";
 
function App() {
  const [count, setCount] = useState(0);
 
  const doubledValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);
 
  return (
    <>
      <h2>{doubledValue}</h2>
 
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
 
export default App;`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Calculating..."
          },
 
          {
            type: "paragraph",
            content:
              "When count changes:"
          },
 
          {
            type: "output",
            content: [
              "Calculating...",
              "Calculating...",
              "Calculating..."
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Because the dependency changes, React recalculates the value."
          }
 
        ]
      },
 
      {
        heading: "Understanding the Dependency Array",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The dependency array controls when React recomputes the memoized value."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const result = useMemo(() => {
  return count * 2;
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "React watches:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `count`
          },
 
          {
            type: "paragraph",
            content:
              "If count changes:"
          },
 
          {
            type: "output",
            content:
              "Recalculate"
          },
 
          {
            type: "paragraph",
            content:
              "If count remains unchanged:"
          },
 
          {
            type: "output",
            content:
              "Reuse old value"
          },
 
          {
            type: "paragraph",
            content:
              "Think of it like:"
          },
 
          {
            type: "flow",
            steps: [
              "Dependency Changed?",
              "→",
              "YES → Recalculate Value",
              "→",
              "NO → Reuse Cached Value"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "The dependency array is one of the most important concepts in useMemo."
          }
 
        ]
      },
 
      {
        heading: "Example: Avoiding Unnecessary Calculations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Without useMemo:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [count, setCount] = useState(0);
 
  const square = count * count;
 
  return (
    <>
      <h1>{square}</h1>
 
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "This works perfectly."
          },
 
          {
            type: "paragraph",
            content:
              "But using useMemo here:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const square = useMemo(() => {
  return count * count;
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "Provides no meaningful benefit."
          },
 
          {
            type: "paragraph",
            content:
              "Why? Because:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `count * count`
          },
 
          {
            type: "paragraph",
            content:
              "Is already extremely fast. This introduces an important rule."
          }
 
        ]
      },
 
      {
        heading: "Important Rule: Not Every Calculation Needs useMemo",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners think:"
          },
 
          {
            type: "quote",
            content:
              "useMemo = Better Performance"
          },
 
          {
            type: "paragraph",
            content:
              "This is incorrect."
          },
 
          {
            type: "paragraph",
            content:
              "Using useMemo everywhere can actually make code harder to read and sometimes add unnecessary overhead."
          },
 
          {
            type: "paragraph",
            content:
              "Bad example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const total = useMemo(() => {
  return a + b;
}, [a, b]);`
          },
 
          {
            type: "paragraph",
            content:
              "This calculation is trivial. React can compute it instantly. Using useMemo here is unnecessary."
          },
 
          {
            type: "comparison",
            leftTitle: "Good Candidates for useMemo",
            leftItems: [
              "Large filtering operations",
              "Sorting huge datasets",
              "Expensive transformations",
              "Complex calculations",
              "Derived analytics data"
            ],
 
            rightTitle: "Poor Candidates",
            rightItems: [
              "Simple arithmetic",
              "Basic string concatenation",
              "Tiny arrays",
              "Trivial operations"
            ]
          }
 
        ]
      },
 
      {
        heading: "First Practical Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a product catalog."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const products = [
  "Laptop",
  "Phone",
  "Tablet",
  "Monitor"
];`
          },
 
          {
            type: "paragraph",
            content:
              "Without memoization:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const filteredProducts = products.filter(product =>
  product.includes(search)
);`
          },
 
          {
            type: "paragraph",
            content:
              "The filter executes every render."
          },
 
          {
            type: "paragraph",
            content:
              "With memoization:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const filteredProducts = useMemo(() => {
  return products.filter(product =>
    product.includes(search)
  );
}, [search]);`
          },
 
          {
            type: "paragraph",
            content:
              "Now React recalculates only when:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `search`
          },
 
          {
            type: "paragraph",
            content:
              "Changes. This is one of the most common real-world uses of useMemo."
          }
 
        ]
      },
 
      {
        heading: "Mental Model for useMemo",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Think of useMemo as:"
          },
 
          {
            type: "quote",
            content:
              "A storage box for expensive calculations."
          },
 
          {
            type: "paragraph",
            content:
              "React does:"
          },
 
          {
            type: "flow",
            steps: [
              "Calculation",
              "→",
              "Store Result",
              "→",
              "Dependency Changed?",
              "→",
              "NO → Reuse Result",
              "→",
              "YES → Recalculate"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This mental model will help you understand almost every future use case."
          }
 
        ]
      },
 
      {
        heading: "Common Beginner Misconceptions",
 
        blocks: [
 
          {
            type: "faq",
            items: [
              {
                question: "Misconception 1: useMemo prevents re-renders",
                answer:
                  "False. useMemo does NOT prevent re-renders. It only prevents unnecessary recalculations within a render that has already happened."
              },
 
              {
                question: "Misconception 2: Every variable should use useMemo",
                answer:
                  "False. Most variables should NOT use useMemo. Simple calculations are fast enough that wrapping them in useMemo adds unnecessary complexity."
              },
 
              {
                question: "Misconception 3: useMemo makes every application faster",
                answer:
                  "False. Sometimes it improves performance, and sometimes it adds unnecessary complexity. Always measure before optimizing."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Quick Recap",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before moving forward, ensure you understand:"
          },
 
          {
            type: "list",
            items: [
              "✅ useMemo is a React Hook",
              "✅ It memoizes values",
              "✅ It stores calculation results",
              "✅ It recalculates only when dependencies change",
              "✅ It is used for expensive computations",
              "✅ It does not stop component re-renders",
              "✅ It should not be used everywhere",
              "✅ Memoization means reusing previous results"
            ]
          }
 
        ]
      },
 
      {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before learning advanced useMemo patterns, you must fully understand dependency arrays because they control when React should recompute a memoized value."
          },
 
          {
            type: "paragraph",
            content:
              "Many bugs involving useMemo come from incorrect dependencies."
          }
 
        ]
      },
 
      {
        heading: "What is a Dependency Array?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "The dependency array is the second argument passed to useMemo."
          },
 
          {
            type: "paragraph",
            content:
              "Syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependency1, dependency2]);`
          },
 
          {
            type: "paragraph",
            content:
              "Structure:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `useMemo(
   callbackFunction,
   dependencyArray
)`
          },
 
          {
            type: "paragraph",
            content:
              "React watches every dependency inside the array."
          },
 
          {
            type: "paragraph",
            content:
              "If any dependency changes:"
          },
 
          {
            type: "output",
            content:
              "React recalculates value"
          },
 
          {
            type: "paragraph",
            content:
              "If no dependency changes:"
          },
 
          {
            type: "output",
            content:
              "React reuses cached value"
          }
 
        ]
      },
 
      {
        heading: "How React Checks Dependencies",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React uses Object.is() to compare previous and current dependency values."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const value = useMemo(() => {
  return num * 2;
}, [num]);`
          },
 
          {
            type: "paragraph",
            content:
              "Render Flow:"
          },
 
          {
            type: "flow",
            steps: [
              "num = 5",
              "→",
              "Calculate result",
              "→",
              "Store in cache"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Next Render: num = 5",
              "→",
              "Same value",
              "→",
              "Reuse cache"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Next Render: num = 10",
              "→",
              "Value changed",
              "→",
              "Recalculate"
            ]
          }
 
        ]
      },
 
      {
        heading: "Visualizing Dependency Behavior",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const result = useMemo(() => {
  console.log("Calculating...");
  return count * 10;
}, [count]);`
          },
 
          {
            type: "paragraph",
            content:
              "First Render:"
          },
 
          {
            type: "output",
            content:
              "Calculating..."
          },
 
          {
            type: "paragraph",
            content:
              "Count changes:"
          },
 
          {
            type: "output",
            content:
              "Calculating..."
          },
 
          {
            type: "paragraph",
            content:
              "Theme changes:"
          },
 
          {
            type: "output",
            content:
              "(no calculation)"
          },
 
          {
            type: "paragraph",
            content:
              "Because React only cares about:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `[count]`
          }
 
        ]
      },
 
      {
        heading: "Dependency Array with Multiple Values",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "You can track multiple dependencies."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const total = useMemo(() => {
  console.log("Calculating Total");
 
  return price * quantity;
}, [price, quantity]);`
          },
 
          {
            type: "paragraph",
            content:
              "React recalculates when:"
          },
 
          {
            type: "output",
            content: [
              "price changes",
              "OR",
              "quantity changes"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "React does NOT recalculate when:"
          },
 
          {
            type: "output",
            content: [
              "theme changes",
              "modal opens",
              "sidebar toggles"
            ]
          }
 
        ]
      },
 
      {
        heading: "Example: Shopping Cart Total",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useMemo, useState } from "react";
 
export default function Cart() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);
  const [theme, setTheme] = useState(false);
 
  const total = useMemo(() => {
    console.log("Calculating Total");
 
    return price * quantity;
  }, [price, quantity]);
 
  return (
    <div>
      <h2>Total: ₹{total}</h2>
 
      <button onClick={() => setPrice(price + 10)}>
        Increase Price
      </button>
 
      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>
 
      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>
    </div>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content: [
              "Initial Render: Calculating Total",
              "Price Changed: Calculating Total",
              "Quantity Changed: Calculating Total",
              "Theme Changed: (no calculation)"
            ]
          }
 
        ]
      },
 
      {
        heading: "Empty Dependency Array",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Sometimes developers write:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const data = useMemo(() => {
  console.log("Runs once");
  return expensiveOperation();
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "The empty dependency array means:"
          },
 
          {
            type: "output",
            content: [
              "Run once",
              "Cache forever"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Behavior:"
          },
 
          {
            type: "flow",
            steps: [
              "Initial Render",
              "→",
              "Compute value"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "Future Renders",
              "→",
              "Reuse cached value"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "Runs once"
          },
 
          {
            type: "paragraph",
            content:
              "Only once during component lifetime."
          }
 
        ]
      },
 
      {
        heading: "When Empty Arrays Are Useful",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Useful for:"
          },
 
          {
            type: "list",
            items: [
              "Static configurations",
              "Constant objects",
              "Constant arrays",
              "Initial expensive setup"
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
            content: `const countries = useMemo(() => {
  return [
    "India",
    "USA",
    "Germany",
    "Japan"
  ];
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "This array is created only once."
          }
 
        ]
      },
 
      {
        heading: "Missing Dependency Array",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const result = useMemo(() => {
  return expensiveCalculation();
});`
          },
 
          {
            type: "paragraph",
            content:
              "Notice [] is missing."
          },
 
          {
            type: "paragraph",
            content:
              "What happens?"
          },
 
          {
            type: "output",
            content:
              "Runs every render"
          },
 
          {
            type: "paragraph",
            content:
              "Which means:"
          },
 
          {
            type: "output",
            content:
              "No memoization benefit"
          },
 
          {
            type: "paragraph",
            content:
              "Equivalent to:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const result = expensiveCalculation();`
          },
 
          {
            type: "warning",
            content:
              "Avoid this mistake. Omitting the dependency array entirely defeats the purpose of useMemo."
          }
 
        ]
      },
 
      {
        heading: "Incorrect Dependency Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most common beginner mistakes:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  );
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Problem:"
          },
 
          {
            type: "output",
            content: [
              "search is used",
              "but not included"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "Filtered data never updates"
          },
 
          {
            type: "paragraph",
            content:
              "Bug:"
          },
 
          {
            type: "output",
            content:
              "UI shows stale data"
          }
 
        ]
      },
 
      {
        heading: "Correct Dependency Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  );
}, [users, search]);`
          },
 
          {
            type: "paragraph",
            content:
              "Now React knows:"
          },
 
          {
            type: "flow",
            steps: [
              "If users change OR search changes",
              "→",
              "Recalculate"
            ]
          }
 
        ]
      },
 
      {
        heading: "Why React's ESLint Plugin Warns You",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React provides an ESLint rule:"
          },
 
          {
            type: "code",
            language: "text",
            content: `react-hooks/exhaustive-deps`
          },
 
          {
            type: "paragraph",
            content:
              "Example Warning:"
          },
 
          {
            type: "output",
            content:
              "React Hook useMemo has missing dependency 'search'"
          },
 
          {
            type: "paragraph",
            content:
              "This warning exists because missing dependencies create subtle bugs."
          },
 
          {
            type: "note",
            content:
              "In professional React projects, never ignore dependency warnings blindly."
          }
 
        ]
      },
 
      {
        heading: "Objects and Arrays as Dependencies",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "This is where many developers get confused."
          },
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const options = {
  sort: true
};
 
const result = useMemo(() => {
  return processData(options);
}, [options]);`
          },
 
          {
            type: "paragraph",
            content:
              "Problem:"
          },
 
          {
            type: "paragraph",
            content:
              "Every render creates:"
          },
 
          {
            type: "output",
            content:
              "new object"
          },
 
          {
            type: "paragraph",
            content:
              "React sees:"
          },
 
          {
            type: "output",
            content:
              "old options !== new options"
          },
 
          {
            type: "paragraph",
            content:
              "Therefore:"
          },
 
          {
            type: "output",
            content:
              "useMemo recalculates every render"
          }
 
        ]
      },
 
      {
        heading: "Fixing Object Dependency Problems",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Bad:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const options = {
  sort: true
};`
          },
 
          {
            type: "paragraph",
            content:
              "Better:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const options = useMemo(() => {
  return {
    sort: true
  };
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Now:"
          },
 
          {
            type: "output",
            content:
              "Same reference"
          },
 
          {
            type: "paragraph",
            content:
              "Across renders."
          }
 
        ]
      },
 
      {
        heading: "Dependency Array Mental Model",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Think of dependencies as:"
          },
 
          {
            type: "output",
            content:
              "Inputs"
          },
 
          {
            type: "paragraph",
            content:
              "And memoized value as:"
          },
 
          {
            type: "output",
            content:
              "Output"
          },
 
          {
            type: "paragraph",
            content:
              "Diagram:"
          },
 
          {
            type: "flow",
            steps: [
              "Dependencies",
              "→",
              "useMemo",
              "→",
              "Cached Result"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "When inputs change:"
          },
 
          {
            type: "output",
            content:
              "New Output Generated"
          },
 
          {
            type: "paragraph",
            content:
              "When inputs stay same:"
          },
 
          {
            type: "output",
            content:
              "Cached Output Reused"
          }
 
        ]
      },
 
      {
        heading: "Common Dependency Mistakes",
 
        blocks: [
 
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Missing Dependencies",
                answer:
                  "When a value used inside the useMemo callback is not included in the dependency array, the memoized result will not update when that value changes, leading to stale data.",
 
                examples: [
                  {
                    title: "Problem",
                    language: "jsx",
                    content: `useMemo(() => {
  return users.filter(...);
}, []);
 
// Problem: Stale data`
                  }
                ]
              },
 
              {
                question: "Mistake 2: Too Many Dependencies",
                answer:
                  "Including values that aren't actually relevant to the calculation causes useMemo to recalculate too frequently, defeating the purpose of memoization. Only include values actually used inside the callback.",
 
                examples: [
                  {
                    title: "Problem",
                    language: "jsx",
                    content: `useMemo(() => {
  return expensiveCalculation();
}, [theme, modal, sidebar, count]);
 
// Problem: Recalculates too frequently`
                  }
                ]
              },
 
              {
                question: "Mistake 3: Objects Created Inside Render",
                answer:
                  "Creating a new object or array literal directly inside the component body produces a new reference on every render, which breaks memoization even if the contents are identical.",
 
                examples: [
                  {
                    title: "Problem",
                    language: "jsx",
                    content: `const config = {};
 
// New reference every render
// Result: Memoization breaks`
                  }
                ]
              },
 
              {
                question: "Mistake 4: Ignoring ESLint Warnings",
                answer:
                  "Ignoring the react-hooks/exhaustive-deps warning can cause stale UI, inconsistent data, and difficult-to-find bugs that only appear under specific conditions."
              }
            ]
          }
 
        ]
      },
 
      {
        heading: "Dependency Array Checklist",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Before writing useMemo, ask:"
          },
 
          {
            type: "orderedList",
            items: [
              "Which values are used inside callback?",
              "Have I included all of them?",
              "Am I accidentally creating new objects?",
              "Am I depending on stable references?"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "If all answers are correct:"
          },
 
          {
            type: "output",
            content:
              "useMemo will behave predictably."
          }
 
        ]
      },
 
      {
        heading: "Expensive Computations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Now that you understand dependency arrays, let's discuss the primary reason useMemo exists:"
          },
 
          {
            type: "quote",
            content:
              "Avoiding expensive computations."
          },
 
          {
            type: "paragraph",
            content:
              "Most tutorials stop at \"useMemo caches values.\""
          },
 
          {
            type: "paragraph",
            content:
              "Professional React developers think differently:"
          },
 
          {
            type: "quote",
            content:
              "Which computations are expensive enough to justify caching?"
          },
 
          {
            type: "paragraph",
            content:
              "Understanding this distinction separates beginner React developers from experienced engineers."
          }
 
        ]
      },
 
      {
        heading: "What is an Expensive Computation?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "An expensive computation is any operation that consumes noticeable CPU time when executed repeatedly."
          },
 
          {
            type: "paragraph",
            content:
              "Examples:"
          },
 
          {
            type: "list",
            items: [
              "Sorting large arrays",
              "Filtering huge datasets",
              "Data aggregation",
              "Mathematical calculations",
              "Statistical analysis",
              "Chart transformations",
              "Data grouping",
              "Search indexing"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Simple calculations are NOT expensive."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const total = price + tax;`
          },
 
          {
            type: "paragraph",
            content:
              "This takes microseconds. Using useMemo here is unnecessary."
          }
 
        ]
      },
 
      {
        heading: "Cheap vs Expensive Calculations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Cheap:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fullName = firstName + lastName;`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const age = birthYear - currentYear;`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const isAdmin = role === "admin";`
          },
 
          {
            type: "paragraph",
            content:
              "Expensive:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `100,000 item filter()`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `100,000 item sort()`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `Complex graph calculations`
          },
 
          {
            type: "code",
            language: "jsx",
            content: `Large dataset aggregation`
          },
 
          {
            type: "paragraph",
            content:
              "Rule:"
          },
 
          {
            type: "note",
            content:
              "If a computation is already fast, useMemo often hurts more than helps."
          }
 
        ]
      },
 
      {
        heading: "Example: Expensive Sorting",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Without useMemo:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const sortedProducts = products.sort((a, b) => {
  return a.price - b.price;
});`
          },
 
          {
            type: "paragraph",
            content:
              "Every render:"
          },
 
          {
            type: "output",
            content:
              "Sort executes again"
          },
 
          {
            type: "paragraph",
            content:
              "Even when unrelated state changes."
          }
 
        ]
      },
 
      {
        heading: "Optimized Version",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const sortedProducts = useMemo(() => {
  console.log("Sorting products");
 
  return [...products].sort((a, b) => {
    return a.price - b.price;
  });
}, [products]);`
          },
 
          {
            type: "paragraph",
            content:
              "Now sorting only runs when:"
          },
 
          {
            type: "output",
            content:
              "products changes"
          }
 
        ]
      },
 
      {
        heading: "Real Dashboard Scenario",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine an Analytics Dashboard. Contains:"
          },
 
          {
            type: "list",
            items: [
              "50,000 sales records",
              "charts",
              "filters",
              "search",
              "reports"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without memoization:"
          },
 
          {
            type: "flow",
            steps: [
              "Every button click",
              "→",
              "Entire dataset processed again"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "Laggy dashboard"
          },
 
          {
            type: "paragraph",
            content:
              "With useMemo:"
          },
 
          {
            type: "output",
            content:
              "Only recompute when dataset changes"
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "Smooth UI"
          }
 
        ]
      },
 
      {
        heading: "Measuring Expensive Operations",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `console.time("filter");
 
const result = users.filter(user =>
  user.active
);
 
console.timeEnd("filter");`
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content:
              "filter: 85ms"
          },
 
          {
            type: "paragraph",
            content:
              "85ms every render becomes noticeable. Perfect candidate for useMemo()."
          }
 
        ]
      },
 
      {
        heading: "Search Filtering (Most Common Real-World Use Case)",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Among all useMemo use cases, search filtering is the most common."
          },
 
          {
            type: "paragraph",
            content:
              "Almost every application contains:"
          },
 
          {
            type: "list",
            items: [
              "user search",
              "product search",
              "employee search",
              "movie search",
              "article search"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Filtering large collections repeatedly can become expensive."
          }
 
        ]
      },
 
      {
        heading: "Search Filtering Without useMemo",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useState } from "react";
 
const users = new Array(10000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: \`User \${i}\`
  }));
 
export default function App() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false);
 
  const filteredUsers = users.filter(user =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );
 
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <button
        onClick={() => setTheme(!theme)}
      >
        Toggle Theme
      </button>
 
      {filteredUsers.length}
    </div>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Problem:"
          },
 
          {
            type: "paragraph",
            content:
              "Theme change causes:"
          },
 
          {
            type: "flow",
            steps: [
              "Component re-render",
              "→",
              "Filter runs again",
              "→",
              "10,000 records processed again"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Completely unnecessary."
          }
 
        ]
      },
 
      {
        heading: "Search Filtering With useMemo",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useMemo, useState } from "react";
 
const users = new Array(10000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: \`User \${i}\`
  }));
 
export default function App() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false);
 
  const filteredUsers = useMemo(() => {
    console.log("Filtering users");
 
    return users.filter(user =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);
 
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <button
        onClick={() => setTheme(!theme)}
      >
        Toggle Theme
      </button>
 
      {filteredUsers.length}
    </div>
  );
}`
          }
 
        ]
      },
 
      {
        heading: "Output Behavior",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Initial Render:"
          },
 
          {
            type: "output",
            content:
              "Filtering users"
          },
 
          {
            type: "paragraph",
            content:
              "Typing:"
          },
 
          {
            type: "output",
            content:
              "Filtering users"
          },
 
          {
            type: "paragraph",
            content:
              "Theme Toggle:"
          },
 
          {
            type: "output",
            content:
              "(no filtering)"
          },
 
          {
            type: "paragraph",
            content:
              "This is exactly what we want."
          }
 
        ]
      },
 
      {
        heading: "Why Search Filtering Is a Perfect useMemo Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Search filtering satisfies all conditions:"
          },
 
          {
            type: "list",
            items: [
              "✅ Expensive operation",
              "✅ Frequently re-rendered component",
              "✅ Same input often reused",
              "✅ Clear dependency list"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Because of this, search filtering is one of the most common production uses of useMemo."
          }
 
        ]
      },
 
      {
        heading: "Real-World Examples",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Applications using similar optimization patterns:"
          },
 
          {
            type: "example",
            items: [
              "Amazon → Product Search",
              "Netflix → Movie Search",
              "LinkedIn → User Search",
              "GitHub → Repository Search",
              "YouTube → Video Search"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "All of them avoid unnecessary recalculations whenever possible."
          }
 
        ]
      },
 
      {
        heading: "Search Filtering Architecture",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Professional implementation often looks like:"
          },
 
          {
            type: "flow",
            steps: [
              "User Types",
              "→",
              "Debounce Input",
              "→",
              "Memoized Filter",
              "→",
              "Virtualized List",
              "→",
              "Render Results"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "This architecture scales far better than repeatedly filtering large datasets on every render."
          }
 
        ]
      },
 
      {
        heading: "Key Takeaways",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Dependency arrays determine when useMemo recalculates."
          },
 
          {
            type: "paragraph",
            content:
              "Expensive computations determine whether useMemo should be used."
          },
 
          {
            type: "paragraph",
            content:
              "Search filtering is one of the best real-world examples because it combines:"
          },
 
          {
            type: "list",
            items: [
              "large datasets",
              "frequent renders",
              "expensive operations",
              "predictable dependencies"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Understanding these three concepts forms the foundation for advanced useMemo patterns that we'll explore next:"
          },
 
          {
            type: "flow",
            steps: [
              "Object Reference Stability",
              "→",
              "useMemo + React.memo",
              "→",
              "useMemo vs useCallback",
              "→",
              "Real Production Optimization Patterns",
              "→",
              "React Fiber and Rendering Internals"
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
              "useMemo is a React Hook used to memoize values and avoid unnecessary recalculations during component re-renders."
          },
 
          {
            type: "paragraph",
            content:
              "It works by storing the result of a calculation and reusing that result until one of its dependencies changes."
          },
 
          {
            type: "paragraph",
            content:
              "The primary goal of useMemo is optimization, especially when dealing with expensive computations that run repeatedly during rendering."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding when to use useMemo is just as important as understanding how to use it."
          },
 
          {
            type: "paragraph",
            content:
              "In the next part, we will move beyond basic examples and explore:"
          },
 
          {
            type: "list",
            items: [
              "Expensive computations",
              "Search filtering systems",
              "Large dataset optimization",
              "Dependency arrays in depth",
              "Real-world performance examples",
              "Practical useMemo patterns used in production React applications"
            ]
          }
 
        ]
      },

      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 Many developers learn useMemo by memorizing its syntax. Professional React developers focus on understanding the problem it solves. Before reaching for useMemo, always ask yourself: \"Is this calculation actually expensive?\" If the answer is no, you probably don't need memoization. The best optimization is often avoiding unnecessary optimization altogether."
          },
          {
            type: "note",
            content: "💡 Dependency arrays are often treated as an afterthought, but they are really the contract between your calculation and React. The array isn't just a performance switch — it's a promise that says \"this value only depends on these inputs.\" If that promise is broken, by missing a dependency or by recreating an object every render, useMemo silently produces incorrect results instead of throwing an error. Reading the dependency array as a list of promises, not just a list of variables, is what helps professional developers catch subtle bugs before they reach production."
          }
 
        ]
      }
 
      
    ]
  },





  /* ===========================
    Fourth Topic : useCallback
============================= */
    "react-usecallback-hook": {
    title: "useCallback",
    readingTime: "14 min",
        
    content: [
        {
        heading: "Introduction",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "As React applications grow larger, performance becomes increasingly important."
          },
 
          {
            type: "paragraph",
            content:
              "A common misconception among beginners is that React performance issues come from rendering too many components. In reality, many performance problems occur because React repeatedly creates new objects, arrays, and functions during every render."
          },
 
          {
            type: "paragraph",
            content:
              "One of the tools React provides to solve this problem is the useCallback Hook."
          },
 
          {
            type: "paragraph",
            content:
              "However, there is an important truth that most tutorials never explain:"
          },
 
          {
            type: "quote",
            content:
              "useCallback does not make your functions execute faster. It simply prevents React from creating a new function reference on every render."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding this distinction is critical."
          },
 
          {
            type: "paragraph",
            content:
              "Many developers use useCallback everywhere and accidentally make their applications slower instead of faster."
          },
 
          {
            type: "paragraph",
            content:
              "In this lesson, you will learn:"
          },
 
          {
            type: "list",
            items: [
              "What useCallback is",
              "Why React created it",
              "Function references in JavaScript",
              "How React handles re-renders",
              "How useCallback works internally",
              "React.memo + useCallback optimization patterns",
              "Real-world production use cases",
              "Common mistakes developers make",
              "When NOT to use useCallback",
              "Advanced React performance concepts"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you will understand exactly when useCallback is useful and when it is unnecessary."
          }
 
        ]
      },
 
      {
        heading: "What is useCallback?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useCallback is a React Hook that memoizes a function and returns the same function reference between renders until one of its dependencies changes."
          },
 
          {
            type: "paragraph",
            content:
              "Basic Syntax:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const memoizedFunction = useCallback(() => {
  // logic
}, [dependencies]);`
          },
 
          {
            type: "paragraph",
            content:
              "React stores the function reference and reuses it on future renders whenever dependencies remain unchanged."
          },
 
          {
            type: "paragraph",
            content:
              "Simple Mental Model:"
          },
 
          {
            type: "paragraph",
            content:
              "Without useCallback:"
          },
 
          {
            type: "flow",
            steps: [
              "Render",
              "→",
              "Create New Function"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "With useCallback:"
          },
 
          {
            type: "flow",
            steps: [
              "Render",
              "→",
              "Reuse Previous Function"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Notice something important:"
          },
 
          {
            type: "note",
            content:
              "useCallback caches the function itself, NOT the result of the function. This is the biggest difference between useCallback and useMemo."
          }
 
        ]
      },
 
      {
        heading: "Why Does useCallback Exist?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "To understand useCallback, we first need to understand how JavaScript handles functions."
          },
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function sayHello() {
  console.log("Hello");
}`
          },
 
          {
            type: "paragraph",
            content:
              "Every time this code executes:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const sayHello = () => {
  console.log("Hello");
};`
          },
 
          {
            type: "paragraph",
            content:
              "JavaScript creates a new function object."
          },
 
          {
            type: "paragraph",
            content:
              "Even if the code looks identical:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fn1 = () => {};
const fn2 = () => {};`
          },
 
          {
            type: "paragraph",
            content:
              "Comparison:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `console.log(fn1 === fn2);`
          },
 
          {
            type: "output",
            content:
              "false"
          },
 
          {
            type: "paragraph",
            content:
              "Because:"
          },
 
          {
            type: "output",
            content:
              "Different Function References"
          },
 
          {
            type: "paragraph",
            content:
              "This behavior is completely normal JavaScript behavior."
          },
 
          {
            type: "paragraph",
            content:
              "React performance optimizations must work around this."
          }
 
        ]
      },
 
      {
        heading: "Understanding Function References",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const first = () => {
  console.log("Hello");
};
 
const second = first;
 
console.log(first === second);`
          },
 
          {
            type: "output",
            content:
              "true"
          },
 
          {
            type: "paragraph",
            content:
              "Why? Because both variables point to the same function reference."
          },
 
          {
            type: "paragraph",
            content:
              "Visualization:"
          },
 
          {
            type: "tree",
            content: `Memory
  └── Function Object
        ├── first
        └── second`
          },
 
          {
            type: "paragraph",
            content:
              "Now consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const first = () => {};
const second = () => {};
 
console.log(first === second);`
          },
 
          {
            type: "output",
            content:
              "false"
          },
 
          {
            type: "paragraph",
            content:
              "Visualization:"
          },
 
          {
            type: "tree",
            content: `Memory
  ├── Function A
  │     └── first
  └── Function B
        └── second`
          },
 
          {
            type: "paragraph",
            content:
              "Different references."
          },
 
          {
            type: "paragraph",
            content:
              "React uses this exact comparison strategy when checking props."
          }
 
        ]
      },
 
      {
        heading: "The Real Problem React Faces",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };
 
  return <Child onClick={handleClick} />;
}`
          },
 
          {
            type: "paragraph",
            content:
              "Looks harmless. But every Parent render creates:"
          },
 
          {
            type: "output",
            content:
              "New Function"
          },
 
          {
            type: "paragraph",
            content:
              "Meaning:"
          },
 
          {
            type: "output",
            content:
              "Old Function !== New Function"
          },
 
          {
            type: "paragraph",
            content:
              "React sees:"
          },
 
          {
            type: "output",
            content:
              "Prop Changed"
          },
 
          {
            type: "paragraph",
            content:
              "Even though the logic is identical."
          },
 
          {
            type: "paragraph",
            content:
              "This can trigger unnecessary child component re-renders."
          }
 
        ]
      },
 
      {
        heading: "React Re-Rendering Without useCallback",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useState } from "react";
 
function Child({ onClick }) {
  console.log("Child Rendered");
 
  return (
    <button onClick={onClick}>
      Click
    </button>
  );
}
 
export default function App() {
  const [count, setCount] = useState(0);
 
  const handleClick = () => {
    console.log("Button Clicked");
  };
 
  return (
    <>
      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Count {count}
      </button>
 
      <Child onClick={handleClick} />
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Clicking Count:"
          },
 
          {
            type: "flow",
            steps: [
              "Parent Re-renders",
              "→",
              "New handleClick Created",
              "→",
              "Child Receives New Prop",
              "→",
              "Child Re-renders"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Output:"
          },
 
          {
            type: "output",
            content: [
              "Child Rendered",
              "Child Rendered",
              "Child Rendered",
              "Child Rendered"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Even though Child's UI never changed."
          },
 
          {
            type: "paragraph",
            content:
              "This is where useCallback becomes useful."
          }
 
        ]
      },
 
      {
        heading: "Basic useCallback Example",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `import { useCallback, useState } from "react";
 
export default function App() {
  const [count, setCount] = useState(0);
 
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);
 
  return (
    <>
      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Count {count}
      </button>
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "React now stores:"
          },
 
          {
            type: "output",
            content:
              "handleClick Reference"
          },
 
          {
            type: "paragraph",
            content:
              "And reuses it."
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content: [
              "Same Function Reference",
              "Across Renders"
            ]
          }
 
        ]
      },
 
      {
        heading: "Understanding the Dependency Array",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Just like useMemo, useCallback accepts a dependency array."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleClick = useCallback(() => {
  console.log(count);
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
              "count changes",
              "→",
              "Create new function"
            ]
          },
 
          {
            type: "flow",
            steps: [
              "count unchanged",
              "→",
              "Reuse previous function"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Think of dependencies as:"
          },
 
          {
            type: "output",
            content:
              "Values used inside callback"
          },
 
          {
            type: "paragraph",
            content:
              "If a value changes:"
          },
 
          {
            type: "output",
            content:
              "New callback required"
          },
 
          {
            type: "paragraph",
            content:
              "Otherwise:"
          },
 
          {
            type: "output",
            content:
              "Reuse old callback"
          }
 
        ]
      },
 
      {
        heading: "useCallback vs Normal Function",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Without useCallback:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleClick = () => {
  console.log("Hello");
};`
          },
 
          {
            type: "paragraph",
            content:
              "Every render:"
          },
 
          {
            type: "output",
            content:
              "New Function"
          },
 
          {
            type: "divider"
          },
 
          {
            type: "paragraph",
            content:
              "With useCallback:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleClick = useCallback(() => {
  console.log("Hello");
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Every render:"
          },
 
          {
            type: "output",
            content:
              "Same Function"
          },
 
          {
            type: "paragraph",
            content:
              "This is the entire purpose of useCallback."
          }
 
        ]
      },
 
      {
        heading: "Key Observation",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many developers believe:"
          },
 
          {
            type: "quote",
            content:
              "useCallback makes functions faster"
          },
 
          {
            type: "paragraph",
            content:
              "This is incorrect."
          },
 
          {
            type: "paragraph",
            content:
              "The callback executes at exactly the same speed."
          },
 
          {
            type: "paragraph",
            content:
              "useCallback only optimizes:"
          },
 
          {
            type: "output",
            content:
              "Function Reference Stability"
          },
 
          {
            type: "paragraph",
            content:
              "NOT:"
          },
 
          {
            type: "output",
            content:
              "Execution Speed"
          }
 
        ]
      },
 
      {
        heading: "Real-World Analogy",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine a company employee ID."
          },
 
          {
            type: "paragraph",
            content:
              "Without useCallback:"
          },
 
          {
            type: "flow",
            steps: [
              "Every day",
              "→",
              "New Employee ID"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "With useCallback:"
          },
 
          {
            type: "output",
            content:
              "Same Employee ID"
          },
 
          {
            type: "paragraph",
            content:
              "The employee remains the same. Only the identity remains stable."
          },
 
          {
            type: "paragraph",
            content:
              "This is exactly how React treats memoized callbacks."
          }
 
        ]
      },
 
      {
        heading: "Summary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "useCallback is a React Hook that memoizes a function reference and reuses it between renders until dependencies change."
          },
 
          {
            type: "paragraph",
            content:
              "It exists because:"
          },
 
          {
            type: "list",
            items: [
              "JavaScript creates new functions on every render",
              "React compares props by reference",
              "New function references can trigger unnecessary re-renders"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "useCallback helps React preserve function identity, making it useful when working with:"
          },
 
          {
            type: "list",
            items: [
              "React.memo",
              "Memoized child components",
              "Expensive component trees",
              "Performance-sensitive applications"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Most importantly:"
          },
 
          {
            type: "quote",
            content:
              "useCallback does NOT make functions faster."
          },
 
          {
            type: "paragraph",
            content:
              "It makes function references stable."
          },
 
          {
            type: "paragraph",
            content:
              "This distinction forms the foundation of everything else we'll learn about useCallback."
          }
 
        ]
      },

      {
        heading: "React.memo + useCallback",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In the previous section, we learned that useCallback keeps a function reference stable."
          },
 
          {
            type: "paragraph",
            content:
              "Now comes the most important question:"
          },
 
          {
            type: "quote",
            content:
              "If useCallback only stabilizes function references, why do we even care?"
          },
 
          {
            type: "paragraph",
            content:
              "The answer lies in:"
          },
 
          {
            type: "output",
            content:
              "React.memo"
          },
 
          {
            type: "paragraph",
            content:
              "Most real-world useCallback usage exists because of React.memo."
          },
 
          {
            type: "paragraph",
            content:
              "Without React.memo:"
          },
 
          {
            type: "output",
            content:
              "useCallback is often useless."
          },
 
          {
            type: "paragraph",
            content:
              "Understanding their relationship is one of the biggest performance breakthroughs in React."
          }
 
        ]
      },
 
      {
        heading: "What is React.memo?",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React.memo is a higher-order component that prevents unnecessary re-renders when props haven't changed."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(function Child() {
  console.log("Child Rendered");
 
  return <h2>Child Component</h2>;
});`
          },
 
          {
            type: "paragraph",
            content:
              "React now performs:"
          },
 
          {
            type: "flow",
            steps: [
              "Previous Props",
              "vs",
              "Current Props"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "If props are unchanged:"
          },
 
          {
            type: "output",
            content:
              "Skip Re-render"
          },
 
          {
            type: "paragraph",
            content:
              "If props changed:"
          },
 
          {
            type: "output",
            content:
              "Re-render Component"
          }
 
        ]
      },
 
      {
        heading: "How React.memo Compares Props",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "React.memo uses Object.is() for shallow comparison."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const oldProps = {
  name: "John"
};
 
const newProps = {
  name: "John"
};`
          },
 
          {
            type: "paragraph",
            content:
              "React compares:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `"John" === "John"`
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "Props Same"
          },
 
          {
            type: "paragraph",
            content:
              "No re-render."
          }
 
        ]
      },
 
      {
        heading: "The Function Prop Problem",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(
  function Child({ onClick }) {
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
            content:
              "Parent:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function Parent() {
  const [count, setCount] = useState(0);
 
  const handleClick = () => {
    console.log("Clicked");
  };
 
  return (
    <>
      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Count
      </button>
 
      <Child onClick={handleClick} />
    </>
  );
}`
          },
 
          {
            type: "paragraph",
            content:
              "Looks fine. But every render creates:"
          },
 
          {
            type: "output",
            content:
              "New handleClick Function"
          },
 
          {
            type: "paragraph",
            content:
              "React sees:"
          },
 
          {
            type: "output",
            content:
              "Old Function !== New Function"
          },
 
          {
            type: "paragraph",
            content:
              "Therefore:"
          },
 
          {
            type: "output",
            content:
              "Props Changed"
          },
 
          {
            type: "paragraph",
            content:
              "Therefore:"
          },
 
          {
            type: "output",
            content:
              "Child Re-renders"
          },
 
          {
            type: "paragraph",
            content:
              "React.memo fails."
          }
 
        ]
      },
 
      {
        heading: "Visualization",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Render 1:"
          },
 
          {
            type: "output",
            content:
              "handleClick → Function A"
          },
 
          {
            type: "paragraph",
            content:
              "Render 2:"
          },
 
          {
            type: "output",
            content:
              "handleClick → Function B"
          },
 
          {
            type: "paragraph",
            content:
              "Comparison:"
          },
 
          {
            type: "output",
            content:
              "Function A !== Function B"
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "Child Re-render"
          },
 
          {
            type: "paragraph",
            content:
              "Even though the UI hasn't changed."
          }
 
        ]
      },
 
      {
        heading: "Fixing It with useCallback",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Now:"
          },
 
          {
            type: "paragraph",
            content:
              "Render 1:"
          },
 
          {
            type: "output",
            content:
              "handleClick → Function A"
          },
 
          {
            type: "paragraph",
            content:
              "Render 2:"
          },
 
          {
            type: "output",
            content:
              "handleClick → Function A"
          },
 
          {
            type: "paragraph",
            content:
              "Comparison:"
          },
 
          {
            type: "output",
            content:
              "Function A === Function A"
          },
 
          {
            type: "paragraph",
            content:
              "Result:"
          },
 
          {
            type: "output",
            content:
              "React.memo can skip render"
          },
 
          {
            type: "paragraph",
            content:
              "Optimization successful."
          }
 
        ]
      },
 
      {
        heading: "Complete Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Child Component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import React from "react";
 
const Child = React.memo(
  ({ onClick }) => {
    console.log("Child Rendered");
 
    return (
      <button onClick={onClick}>
        Child Button
      </button>
    );
  }
);
 
export default Child;`
          },
 
          {
            type: "paragraph",
            content:
              "Parent Component:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `import { useState, useCallback } from "react";
import Child from "./Child";
 
export default function App() {
  const [count, setCount] = useState(0);
 
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);
 
  return (
    <>
      <button
        onClick={() =>
          setCount(c => c + 1)
        }
      >
        Count {count}
      </button>
 
      <Child onClick={handleClick} />
    </>
  );
}`
          }
 
        ]
      },
 
      {
        heading: "Output Behavior",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Initial Render:"
          },
 
          {
            type: "output",
            content:
              "Child Rendered"
          },
 
          {
            type: "paragraph",
            content:
              "Count Increment:"
          },
 
          {
            type: "output",
            content:
              "(no child render)"
          },
 
          {
            type: "paragraph",
            content:
              "Count Increment Again:"
          },
 
          {
            type: "output",
            content:
              "(no child render)"
          },
 
          {
            type: "paragraph",
            content:
              "Because:"
          },
 
          {
            type: "flow",
            steps: [
              "Stable Function Reference",
              "+",
              "React.memo"
            ]
          }
 
        ]
      },
 
      {
        heading: "The Golden Rule of useCallback",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Most developers memorize:"
          },
 
          {
            type: "quote",
            content:
              "useCallback memoizes functions"
          },
 
          {
            type: "paragraph",
            content:
              "But senior engineers think:"
          },
 
          {
            type: "quote",
            content:
              "useCallback exists mainly to help React.memo work."
          },
 
          {
            type: "paragraph",
            content:
              "This is a much more accurate mental model."
          }
 
        ]
      },
 
      {
        heading: "When React.memo Alone Is Enough",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Consider:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const Child = React.memo(
  ({ name }) => {
    return <h2>{name}</h2>;
  }
);`
          },
 
          {
            type: "paragraph",
            content:
              "Parent:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Child name="John" />`
          },
 
          {
            type: "paragraph",
            content:
              "Strings are primitive values. React compares:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `"John" === "John"`
          },
 
          {
            type: "paragraph",
            content:
              "No issue. No useCallback required."
          }
 
        ]
      },
 
      {
        heading: "When useCallback Becomes Necessary",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Suppose:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Child onDelete={handleDelete} />`
          },
 
          {
            type: "paragraph",
            content:
              "Or:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Child onSave={handleSave} />`
          },
 
          {
            type: "paragraph",
            content:
              "Or:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Child onSubmit={handleSubmit} />`
          },
 
          {
            type: "paragraph",
            content:
              "Functions are reference types. New reference every render. React.memo breaks."
          },
 
          {
            type: "paragraph",
            content:
              "Now useCallback becomes valuable."
          }
 
        ]
      },
 
      {
        heading: "Event Handler Optimization",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "One of the most common production uses."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleSubmit = useCallback(() => {
  console.log("Submitting Form");
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Passed into:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<Form
  onSubmit={handleSubmit}
/>`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "flow",
            steps: [
              "Stable prop",
              "→",
              "Memoized form",
              "→",
              "Fewer renders"
            ]
          }
 
        ]
      },
 
      {
        heading: "Multiple Event Handlers",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleSave = useCallback(() => {
  saveData();
}, []);
 
const handleDelete = useCallback(() => {
  deleteData();
}, []);
 
const handleUpdate = useCallback(() => {
  updateData();
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Useful when Large Child Components receive multiple callbacks."
          }
 
        ]
      },
 
      {
        heading: "Real Dashboard Example",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Imagine an Analytics Dashboard. Contains:"
          },
 
          {
            type: "list",
            items: [
              "Chart Component",
              "Table Component",
              "Filter Component",
              "Sidebar Component"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Each receives callbacks:"
          },
 
          {
            type: "example",
            items: [
              "onFilterChange",
              "onRefresh",
              "onExport",
              "onSort"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Without useCallback:"
          },
 
          {
            type: "flow",
            steps: [
              "Every Parent Render",
              "→",
              "All callbacks recreated",
              "→",
              "Props change",
              "→",
              "Dashboard re-renders"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Huge performance cost."
          }
 
        ]
      },
 
      {
        heading: "Optimized Dashboard",
 
        blocks: [
 
          {
            type: "code",
            language: "jsx",
            content: `const handleExport = useCallback(() => {
  exportReport();
}, []);
 
const handleSort = useCallback(() => {
  sortData();
}, []);
 
const handleRefresh = useCallback(() => {
  fetchLatestData();
}, []);`
          },
 
          {
            type: "paragraph",
            content:
              "Now:"
          },
 
          {
            type: "flow",
            steps: [
              "Stable Callbacks",
              "→",
              "Stable Props",
              "→",
              "Memoized Children",
              "→",
              "Better Performance"
            ]
          }
 
        ]
      },
 
      {
        heading: "API Callback Pattern",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Common production example."
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const fetchUsers = useCallback(
  async () => {
    const res =
      await fetch("/api/users");
 
    return res.json();
  },
  []
);`
          },
 
          {
            type: "paragraph",
            content:
              "Useful when passing API handlers into:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<UserList
  fetchUsers={fetchUsers}
/>`
          },
 
          {
            type: "paragraph",
            content:
              "Especially when UserList is memoized."
          }
 
        ]
      },
 
      {
        heading: "Custom Hooks + useCallback",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Very common in professional codebases."
          },
 
          {
            type: "paragraph",
            content:
              "Example:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `function useCounter() {
  const [count, setCount] =
    useState(0);
 
  const increment =
    useCallback(() => {
      setCount(c => c + 1);
    }, []);
 
  return {
    count,
    increment
  };
}`
          },
 
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
 
          {
            type: "output",
            content: [
              "Stable API",
              "for custom hook consumers"
            ]
          }
 
        ]
      },
 
      {
        heading: "Why React Devs Overuse useCallback",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Many beginners write:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `const handleClick =
  useCallback(() => {
    console.log("Hello");
  }, []);`
          },
 
          {
            type: "paragraph",
            content:
              "For every button. Even:"
          },
 
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={handleClick}>`
          },
 
          {
            type: "paragraph",
            content:
              "With no memoized child."
          },
 
          {
            type: "paragraph",
            content:
              "This provides:"
          },
 
          {
            type: "output",
            content:
              "Zero Performance Benefit"
          },
 
          {
            type: "paragraph",
            content:
              "And adds:"
          },
 
          {
            type: "output",
            content: [
              "Extra Memory",
              "Extra Complexity"
            ]
          }
 
        ]
      },
 
      {
        heading: "Important Rule",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Ask yourself:"
          },
 
          {
            type: "quote",
            content:
              "Am I passing this callback to a memoized child?"
          },
 
          {
            type: "paragraph",
            content:
              "If:"
          },
 
          {
            type: "output",
            content:
              "No"
          },
 
          {
            type: "paragraph",
            content:
              "Then:"
          },
 
          {
            type: "tip",
            content:
              "You probably don't need useCallback."
          }
 
        ]
      },
 
      {
        heading: "Real Industry Insight",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "In large React applications:"
          },
 
          {
            type: "output",
            content:
              "90% of callbacks do NOT need useCallback"
          },
 
          {
            type: "paragraph",
            content:
              "The biggest gains usually come from:"
          },
 
          {
            type: "list",
            items: [
              "Architecture",
              "State design",
              "Component splitting",
              "Virtualization"
            ]
          },
 
          {
            type: "paragraph",
            content:
              "Not callback memoization."
          },
 
          {
            type: "paragraph",
            content:
              "useCallback is a surgical optimization tool."
          }
 
        ]
      },
 
      {
        heading: "Mental Model Upgrade",
 
        blocks: [
 
          {
            type: "paragraph",
            content:
              "Beginner Thinking:"
          },
 
          {
            type: "quote",
            content:
              "useCallback makes React faster"
          },
 
          {
            type: "paragraph",
            content:
              "Intermediate Thinking:"
          },
 
          {
            type: "quote",
            content:
              "useCallback prevents new function creation"
          },
 
          {
            type: "paragraph",
            content:
              "Senior Thinking:"
          },
 
          {
            type: "quote",
            content:
              "useCallback preserves function identity so that memoized children can skip renders."
          },
 
          {
            type: "paragraph",
            content:
              "This is the most accurate mental model."
          }
 
        ]
      },
 
      {
        heading: "DevSphere Special Note",
 
        blocks: [
 
          {
            type: "note",
            content:
              "💡 React.memo and useCallback are often taught as two separate topics, but they only make sense together. React.memo asks a question on every render: \"Did my props actually change?\" useCallback is how you make sure the answer can honestly be \"no\" for function props. Used alone, React.memo gets defeated by freshly created callbacks, and useCallback without React.memo just stabilizes a reference nobody checks. The real skill isn't memorizing either Hook — it's recognizing which components are expensive enough to memoize, and then making sure every prop they receive, including functions, stays referentially stable across renders."
          }
 
        ]
      }
    ]
  },





  /* ===========================
    Fifth Topic : React Profiler
============================= */
    "react-profiler": {
    title: "React Profiler",
    readingTime: "14 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow larger, performance becomes increasingly important."
          },
          {
            type: "paragraph",
            content: "A small application with a few components may render instantly, but a large dashboard, e-commerce platform, analytics tool, or social media application can contain hundreds or even thousands of components."
          },
          {
            type: "paragraph",
            content: "When performance issues appear, developers often ask:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which component is re-rendering too much?",
              "Why is my UI lagging?",
              "Which part of the application is slow?",
              "Is React causing the slowdown or my own code?",
              "Which optimization will actually improve performance?"
            ]
          },
          {
            type: "paragraph",
            content: "Answering these questions through guesswork is dangerous. Professional developers measure performance before optimizing."
          },
          {
            type: "paragraph",
            content: "This is exactly why React provides the Profiler."
          },
          {
            type: "paragraph",
            content: "The React Profiler helps developers analyze rendering behavior, identify unnecessary re-renders, measure component performance, and make data-driven optimization decisions."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What React Profiler is",
              "Why profiling matters",
              "How React rendering works",
              "Understanding render performance",
              "Using the <Profiler> API",
              "Understanding profiling metrics",
              "React Developer Tools Profiler",
              "Reading flame graphs",
              "Detecting unnecessary re-renders",
              "Finding performance bottlenecks",
              "Profiling Hooks and Context",
              "Real-world optimization workflows",
              "Common mistakes",
              "Production-level performance analysis techniques"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you will be able to identify performance problems in React applications like a professional frontend engineer."
          }
        ]
      },

      {
        heading: "What is React Profiler?",
        blocks: [
          {
            type: "paragraph",
            content: "React Profiler is a performance analysis tool that measures how often components render and how long those renders take."
          },
          {
            type: "paragraph",
            content: "Think of it as a performance microscope for React applications."
          },
          {
            type: "paragraph",
            content: "Instead of guessing where performance problems exist, Profiler shows exactly:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which components rendered",
              "Why they rendered",
              "How long rendering took",
              "Which updates were expensive",
              "Which optimizations are actually helping"
            ]
          },
          {
            type: "paragraph",
            content: "Without Profiler:"
          },
          {
            type: "flow",
            steps: [
              "Application feels slow", "→",
              "Guess the cause", "→",
              "Random optimizations"
            ]
          },
          {
            type: "paragraph",
            content: "With Profiler:"
          },
          {
            type: "flow",
            steps: [
              "Application feels slow", "→",
              "Measure performance", "→",
              "Identify bottleneck", "→",
              "Apply optimization", "→",
              "Verify improvement"
            ]
          },
          {
            type: "paragraph",
            content: "This is how professional React performance debugging works."
          }
        ]
      },

      {
        heading: "Why React Profiler Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers assume:"
          },
          {
            type: "output",
            content: "Slow UI = React is slow"
          },
          {
            type: "paragraph",
            content: "In reality:"
          },
          {
            type: "output",
            content: "Slow UI = unnecessary work inside components"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Expensive filtering",
              "Large lists",
              "Repeated calculations",
              "Context updates",
              "Excessive re-renders",
              "Poor component structure"
            ]
          },
          {
            type: "paragraph",
            content: "Profiler helps locate these problems."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Dashboard
├── Sidebar
├── Filters
├── Analytics Charts
├── Data Table
└── Notifications`
          },
          {
            type: "paragraph",
            content: "If a small notification update causes the entire dashboard to re-render, Profiler will reveal it immediately."
          }
        ]
      },

      {
        heading: "Understanding React Rendering Before Profiling",
        blocks: [
          {
            type: "paragraph",
            content: "Before learning Profiler, you must understand what React is measuring."
          },
          {
            type: "paragraph",
            content: "Whenever `setState()` runs, React starts a new render cycle."
          },
          {
            type: "paragraph",
            content: "Simplified flow:"
          },
          {
            type: "flow",
            steps: [
              "State Update", "→",
              "Render Phase", "→",
              "Reconciliation", "→",
              "Commit Phase", "→",
              "DOM Update"
            ]
          },
          {
            type: "paragraph",
            content: "Profiler measures different parts of this process."
          },
          {
            type: "paragraph",
            content: "Without understanding rendering, profiling data becomes meaningless."
          }
        ]
      },

      {
        heading: "What Does Profiler Measure?",
        blocks: [
          {
            type: "paragraph",
            content: "Profiler mainly measures:"
          },
          {
            type: "paragraph",
            content: "Render Duration"
          },
          {
            type: "paragraph",
            content: "How long React spent rendering components."
          },
          {
            type: "paragraph",
            content: "Commit Duration"
          },
          {
            type: "paragraph",
            content: "How long React spent applying changes to the DOM."
          },
          {
            type: "paragraph",
            content: "Render Frequency"
          },
          {
            type: "paragraph",
            content: "How often components render."
          },
          {
            type: "paragraph",
            content: "Update Causes"
          },
          {
            type: "paragraph",
            content: "Why a component rendered."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "State Change",
              "Props Change",
              "Context Change",
              "Parent Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "These metrics help developers locate performance bottlenecks."
          }
        ]
      },

      {
        heading: "React Profiler API",
        blocks: [
          {
            type: "paragraph",
            content: "React provides a built-in component called: `<Profiler>`"
          },
          {
            type: "paragraph",
            content: "It allows developers to measure rendering performance for a specific part of the application."
          },
          {
            type: "paragraph",
            content: "Basic syntax:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Profiler } from "react";

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(id);
}

function App() {
  return (
    <Profiler id="Dashboard" onRender={onRender}>
      <Dashboard />
    </Profiler>
  );
}`
          },
          {
            type: "paragraph",
            content: "Profiler wraps the components you want to analyze."
          }
        ]
      },

      {
        heading: "Understanding the Profiler Callback",
        blocks: [
          {
            type: "paragraph",
            content: "The second prop is: `onRender`"
          },
          {
            type: "paragraph",
            content: "React calls this function every time the profiled component renders."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log({
    id,
    phase,
    actualDuration
  });
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  id: "Dashboard",
  phase: "mount",
  actualDuration: 12.4
}`
          },
          {
            type: "paragraph",
            content: "This data allows developers to inspect rendering performance."
          }
        ]
      },

      {
        heading: "Understanding Every Callback Parameter",
        blocks: [
          {
            type: "paragraph",
            content: "id"
          },
          {
            type: "paragraph",
            content: "Identifies the Profiler instance."
          },
          {
            type: "paragraph",
            content: "Example: `<Profiler id=\"ProductList\">`"
          },
          {
            type: "paragraph",
            content: "Output: ProductList"
          },
          {
            type: "paragraph",
            content: "Useful when multiple profilers exist."
          },
          {
            type: "paragraph",
            content: "phase"
          },
          {
            type: "paragraph",
            content: "Indicates whether the component mounted or updated."
          },
          {
            type: "paragraph",
            content: "Possible values: mount, update"
          },
          {
            type: "paragraph",
            content: "Example: mount (Means: Component rendered for first time)"
          },
          {
            type: "paragraph",
            content: "Example: update (Means: Component re-rendered)"
          },
          {
            type: "paragraph",
            content: "actualDuration"
          },
          {
            type: "paragraph",
            content: "The most important metric. Represents: Actual time spent rendering"
          },
          {
            type: "paragraph",
            content: "Example: 15.6ms"
          },
          {
            type: "paragraph",
            content: "A higher value usually indicates expensive rendering."
          },
          {
            type: "paragraph",
            content: "baseDuration"
          },
          {
            type: "paragraph",
            content: "Represents: Estimated rendering cost without optimizations"
          },
          {
            type: "paragraph",
            content: "Useful for evaluating: React.memo, useMemo, useCallback"
          },
          {
            type: "paragraph",
            content: "Example: Base Duration = 40ms, Actual Duration = 12ms (This suggests optimizations are working.)"
          },
          {
            type: "paragraph",
            content: "startTime"
          },
          {
            type: "paragraph",
            content: "Time when React started rendering. Example: 5234.5ms"
          },
          {
            type: "paragraph",
            content: "commitTime"
          },
          {
            type: "paragraph",
            content: "Time when React committed changes. Example: 5250.1ms"
          }
        ]
      },

      {
        heading: "First Practical Profiling Example",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useState, Profiler } from "react";

function onRender(id, phase, actualDuration) {
  console.log(id, phase, actualDuration);
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default function App() {
  return (
    <Profiler id="Counter" onRender={onRender}>
      <Counter />
    </Profiler>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Counter mount 2.3",
              "Counter update 1.1",
              "Counter update 1.0",
              "Counter update 0.9"
            ]
          },
          {
            type: "paragraph",
            content: "Every update is now measurable."
          }
        ]
      },

      {
        heading: "Profiling Specific Components",
        blocks: [
          {
            type: "paragraph",
            content: "You rarely profile the entire application."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "tree",
            content: `App
├── Navbar
├── Sidebar
├── ProductList
├── Filters
└── Footer`
          },
          {
            type: "paragraph",
            content: "You profile expensive sections."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Profiler id="ProductList" onRender={onRender}>
  <ProductList />
</Profiler>`
          },
          {
            type: "paragraph",
            content: "This helps isolate performance bottlenecks."
          }
        ]
      },

      {
        heading: "React Developer Tools Profiler",
        blocks: [
          {
            type: "paragraph",
            content: "While the Profiler API is useful, most developers use: React Developer Tools which includes a dedicated Profiler tab."
          },
          {
            type: "paragraph",
            content: "Features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Visual profiling",
              "Render timelines",
              "Flame graphs",
              "Ranked charts",
              "Component update analysis",
              "Render duration tracking"
            ]
          },
          {
            type: "paragraph",
            content: "This is the primary profiling workflow used in industry."
          }
        ]
      },

      {
        heading: "Installing React Developer Tools",
        blocks: [
          {
            type: "paragraph",
            content: "Chrome: Install: React Developer Tools Extension"
          },
          {
            type: "paragraph",
            content: "After installation:"
          },
          {
            type: "flow",
            steps: [
              "Developer Tools", "→",
              "Profiler Tab"
            ]
          },
          {
            type: "paragraph",
            content: "You can now record React performance."
          }
        ]
      },

      {
        heading: "Profiling a React Application",
        blocks: [
          {
            type: "paragraph",
            content: "Basic workflow:"
          },
          {
            type: "flow",
            steps: [
              "Open Profiler", "→",
              "Start Recording", "→",
              "Interact with App", "→",
              "Stop Recording", "→",
              "Analyze Results"
            ]
          },
          {
            type: "paragraph",
            content: "Profiler records every render that occurred during the session."
          }
        ]
      },

      {
        heading: "Understanding a Profiling Session",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Types Search Query", "→",
              "Search Component Updates", "→",
              "Results Component Updates", "→",
              "Table Component Updates"
            ]
          },
          {
            type: "paragraph",
            content: "Profiler captures:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Number of renders",
              "Render durations",
              "Component hierarchy",
              "Render causes"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a complete performance snapshot."
          }
        ]
      },

      {
        heading: "Reading the Flame Graph",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most powerful Profiler visualizations is the Flame Graph."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
 ├── Navbar
 ├── Dashboard
 │    ├── Filters
 │    ├── Chart
 │    └── Table
 └── Footer`
          },
          {
            type: "paragraph",
            content: "Profiler displays components as bars."
          },
          {
            type: "paragraph",
            content: "Interpretation:"
          },
          {
            type: "output",
            content: [
              "Wide Bar = Expensive Render",
              "Narrow Bar = Fast Render"
            ]
          },
          {
            type: "paragraph",
            content: "Larger bars deserve investigation."
          }
        ]
      },

      {
        heading: "Understanding Ranked View",
        blocks: [
          {
            type: "paragraph",
            content: "Ranked View sorts components by rendering cost."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "1. DataTable   -   65ms",
              "2. ChartPanel  -   40ms",
              "3. Filters    -    10ms",
              "4. Navbar     -     2ms"
            ]
          },
          {
            type: "paragraph",
            content: "This immediately reveals where optimization effort should focus."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most developers learn useMemo, useCallback, and React.memo before learning profiling. Professional engineers do the opposite. They measure first, identify bottlenecks second, and optimize third. React Profiler exists because performance optimization based on assumptions often makes applications more complex without making them faster. Mastering the Profiler teaches you where performance problems actually exist, which is far more valuable than memorizing optimization hooks."
          }
        ]
      }
    ]
  },
};

export default performanceOptimization;