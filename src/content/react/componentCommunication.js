const componentCommunication = {

/* ===========================
    First Topic : Parent to Child Communication
============================= */
    "parent-to-child-communication": {
    title: "Parent to Child Communication",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "React applications are built using components."
          },
          {
            type: "paragraph",
            content: "A real-world React application may contain dozens, hundreds, or even thousands of components working together."
          },
          {
            type: "paragraph",
            content: "For these components to function properly, they must be able to communicate with each other."
          },
          {
            type: "paragraph",
            content: "One of the most fundamental communication patterns in React is:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child Communication"
            ]
          },
          {
            type: "paragraph",
            content: "This means a parent component sends data to its child component."
          },
          {
            type: "paragraph",
            content: "In React, this communication happens using:"
          },
          {
            type: "output",
            content: "Props"
          },
          {
            type: "paragraph",
            content: "Props allow parent components to pass information, configuration, functions, and data down to child components."
          },
          {
            type: "paragraph",
            content: "Understanding Parent to Child Communication is essential because almost every React application relies on it."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Passing user information",
              "Passing product details",
              "Passing theme settings",
              "Passing button labels",
              "Passing event handlers",
              "Passing configuration options"
            ]
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Parent to Child Communication is",
              "Why React uses this approach",
              "How props enable communication",
              "Passing different types of data",
              "Passing functions as props",
              "Default props",
              "Prop drilling",
              "One-way data flow",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how data flows through React applications and how parent components communicate with their children."
          }
        ]
      },

      {
        heading: "What is Parent to Child Communication?",
        blocks: [
          {
            type: "paragraph",
            content: "Parent to Child Communication is the process where:"
          },
          {
            type: "flow",
            steps: [
              "Parent Component", "→",
              "Sends Data", "→",
              "Child Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "UserCard"
            ]
          },
          {
            type: "paragraph",
            content: "The App component may contain user information."
          },
          {
            type: "paragraph",
            content: "The UserCard component displays that information."
          },
          {
            type: "paragraph",
            content: "Instead of storing duplicate data inside both components, the parent passes the data to the child."
          }
        ]
      },

      {
        heading: "Why Parent to Child Communication Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine this component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard() {
  return (
    <h2>John Doe</h2>
  );
}`
          },
          {
            type: "paragraph",
            content: "This component always displays:"
          },
          {
            type: "output",
            content: "John Doe"
          },
          {
            type: "paragraph",
            content: "Not very reusable."
          },
          {
            type: "paragraph",
            content: "What if we want:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "John Doe",
              "Sarah Smith",
              "Alex Brown"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of hardcoding values, we allow the parent to provide data dynamically."
          },
          {
            type: "paragraph",
            content: "This creates reusable components."
          }
        ]
      },

      {
        heading: "Understanding Parent and Child Components",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Child() {
  return <h1>Hello</h1>;
}

function Parent() {
  return <Child />;
}`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "tree",
            content: `Parent
└── Child`
          },
          {
            type: "paragraph",
            content: "The Parent renders the Child."
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "output",
            content: [
              "Parent = Owner",
              "Child = Receiver"
            ]
          },
          {
            type: "paragraph",
            content: "The parent can send information to the child."
          }
        ]
      },

      {
        heading: "Props: The Foundation of Communication",
        blocks: [
          {
            type: "paragraph",
            content: "React uses:"
          },
          {
            type: "output",
            content: "Props (Properties)"
          },
          {
            type: "paragraph",
            content: "to send data from parent to child."
          },
          {
            type: "paragraph",
            content: "Example:"
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
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <UserCard name="John Doe" />
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "John Doe"
          },
          {
            type: "paragraph",
            content: "The parent sends:"
          },
          {
            type: "output",
            content: "name=\"John Doe\""
          },
          {
            type: "paragraph",
            content: "The child receives:"
          },
          {
            type: "output",
            content: "props.name"
          }
        ]
      },

      {
        heading: "Visualizing Data Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserCard name="John Doe" />`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "tree",
            content: `Parent
│
├── name="John Doe"
│
↓
Child
│
├── props.name
│
↓
Rendered UI`
          },
          {
            type: "paragraph",
            content: "This is React's primary communication pattern."
          }
        ]
      },

      {
        heading: "Passing Strings",
        blocks: [
          {
            type: "paragraph",
            content: "Strings are commonly passed through props."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  return (
    <Greeting
      message="Welcome to React"
    />
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
            content: `function Greeting(props) {
  return (
    <h1>{props.message}</h1>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Welcome to React"
          }
        ]
      },

      {
        heading: "Passing Numbers",
        blocks: [
          {
            type: "paragraph",
            content: "Props can contain numbers."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Product price={999} />`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Product(props) {
  return (
    <h2>\${props.price}</h2>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "$999"
          },
          {
            type: "paragraph",
            content: "Notice:"
          },
          {
            type: "output",
            content: "price={999}"
          },
          {
            type: "paragraph",
            content: "uses curly braces."
          }
        ]
      },

      {
        heading: "Passing Boolean Values",
        blocks: [
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<User
  isLoggedIn={true}
/>`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function User(props) {
  return (
    <p>
      {props.isLoggedIn
        ? "Logged In"
        : "Guest"}
    </p>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Logged In"
          }
        ]
      },

      {
        heading: "Passing Arrays",
        blocks: [
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const skills = [
    "React",
    "JavaScript",
    "CSS"
  ];

  return (
    <Profile skills={skills} />
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
            content: `function Profile(props) {
  return (
    <ul>
      {props.skills.map(skill => (
        <li>{skill}</li>
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
            content: [
              "React",
              "JavaScript",
              "CSS"
            ]
          }
        ]
      },

      {
        heading: "Passing Objects",
        blocks: [
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "javascript",
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
      <h2>
        {props.user.name}
      </h2>

      <p>
        {props.user.age}
      </p>
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
            content: [
              "John",
              "25"
            ]
          },
          {
            type: "paragraph",
            content: "Objects are frequently passed in professional applications."
          }
        ]
      },

      {
        heading: "Passing Multiple Props",
        blocks: [
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserCard
  name="John"
  age={25}
  city="London"
/>`
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
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.city}</p>
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
            content: [
              "John",
              "25",
              "London"
            ]
          },
          {
            type: "paragraph",
            content: "A component can receive any number of props."
          }
        ]
      },

      {
        heading: "Using Destructuring",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard(props) {
  return (
    <h2>{props.name}</h2>
  );
}`
          },
          {
            type: "paragraph",
            content: "Developers often use:"
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
            content: "For multiple props:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard({
  name,
  age,
  city
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "This improves readability."
          }
        ]
      },

      {
        heading: "Passing Functions as Props",
        blocks: [
          {
            type: "paragraph",
            content: "Props are not limited to data."
          },
          {
            type: "paragraph",
            content: "Functions can also be passed."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  function greet() {
    alert("Hello");
  }

  return (
    <Button
      onClick={greet}
    />
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
    <button
      onClick={props.onClick}
    >
      Click Me
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "When clicked:"
          },
          {
            type: "output",
            content: "Hello"
          },
          {
            type: "paragraph",
            content: "This pattern is extremely common in React."
          }
        ]
      },

      {
        heading: "Why Passing Functions Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Passing functions allows:"
          },
          {
            type: "flow",
            steps: [
              "Child", "→",
              "Trigger Action", "→",
              "Parent Logic Executes"
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
              "Button clicks",
              "Form submissions",
              "Delete actions",
              "Save actions",
              "Toggle actions"
            ]
          },
          {
            type: "paragraph",
            content: "This is how React enables child-to-parent interaction indirectly."
          }
        ]
      },

      {
        heading: "Passing JSX as Props",
        blocks: [
          {
            type: "paragraph",
            content: "React allows JSX to be passed."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Card
  title={
    <h1>Profile</h1>
  }
/>`
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Card(props) {
  return (
    <div>
      {props.title}
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
            content: "Profile"
          },
          {
            type: "paragraph",
            content: "Advanced component libraries frequently use this pattern."
          }
        ]
      },

      {
        heading: "The Special children Prop",
        blocks: [
          {
            type: "paragraph",
            content: "React automatically provides:"
          },
          {
            type: "output",
            content: "props.children"
          },
          {
            type: "paragraph",
            content: "Parent:"
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
            content: "Child:"
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
            content: "This is one of React's most powerful patterns."
          }
        ]
      },

      {
        heading: "One-Way Data Flow",
        blocks: [
          {
            type: "paragraph",
            content: "React follows:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "Data flows downward."
          },
          {
            type: "paragraph",
            content: "Not:"
          },
          {
            type: "output",
            content: [
              "Parent",
              "↕",
              "Child"
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
              "Predictable behavior",
              "Easier debugging",
              "Better scalability",
              "Cleaner architecture"
            ]
          },
          {
            type: "paragraph",
            content: "One-way data flow is a core React principle."
          }
        ]
      },

      {
        heading: "Parent Controls the Data",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const name = "John";

  return (
    <UserCard name={name} />
  );
}`
          },
          {
            type: "paragraph",
            content: "The child cannot directly modify:"
          },
          {
            type: "output",
            content: "John"
          },
          {
            type: "paragraph",
            content: "The parent owns the data."
          },
          {
            type: "paragraph",
            content: "The child only receives it."
          }
        ]
      },

      {
        heading: "Understanding Prop Drilling",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "If App wants Profile to receive data:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "The props must pass through every level."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<App user={user} />

<Dashboard user={user} />

<Sidebar user={user} />

<Profile user={user} />`
          },
          {
            type: "paragraph",
            content: "This is called:"
          },
          {
            type: "output",
            content: "Prop Drilling"
          }
        ]
      },

      {
        heading: "Why Prop Drilling Becomes a Problem",
        blocks: [
          {
            type: "paragraph",
            content: "As applications grow:"
          },
          {
            type: "flow",
            steps: [
              "More Components", "→",
              "More Levels", "→",
              "More Props"
            ]
          },
          {
            type: "paragraph",
            content: "The code becomes harder to manage."
          },
          {
            type: "paragraph",
            content: "Solutions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Context API",
              "Redux",
              "Zustand",
              "Recoil"
            ]
          },
          {
            type: "paragraph",
            content: "We'll explore these later."
          }
        ]
      },

      {
        heading: "Default Props",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes props may be missing."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function UserCard({
  name = "Guest"
}) {
  return <h2>{name}</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserCard />`
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
            content: "Default values improve reliability."
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
                question: "Mistake 1: Modifying Props",
                answer: "Incorrect: `props.name = \"Alex\";`. Props are Read Only. Never modify them."
              },
              {
                question: "Mistake 2: Forgetting Curly Braces",
                answer: "Incorrect: `<User age=\"25\" />`. When passing numbers: `<User age={25} />`. Use braces."
              },
              {
                question: "Mistake 3: Passing Too Many Props",
                answer: "Bad: `<UserCard name={name} age={age} city={city} country={country} zip={zip} phone={phone} />`. Often better: `<UserCard user={user} />`. Pass objects when appropriate."
              },
              {
                question: "Mistake 4: Unnecessary Prop Drilling",
                answer: "Passing props through many layers can create maintenance issues. Consider Context API when data is global."
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
                title: "Keep Components Reusable",
                description: "Avoid: `<UserCard name=\"John\" />` hardcoded inside the component. Allow parents to provide data."
              },
              {
                title: "Pass Only Required Data",
                description: "Bad: `<UserCard user={user} products={products} orders={orders} />`. Pass only what the component needs."
              },
              {
                title: "Prefer Destructuring",
                description: "Cleaner: `function UserCard({ name, age }) {}` instead of `props.name`, `props.age` everywhere."
              },
              {
                title: "Keep Data Ownership Clear",
                description: "The component that owns the state should control it. Children should receive data through props."
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
            content: "E-commerce application:"
          },
          {
            type: "tree",
            content: `App
│
├── ProductList
│
├── ProductCard
│
└── AddToCartButton`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Product Data", "→",
              "ProductList", "→",
              "ProductCard", "→",
              "AddToCartButton"
            ]
          },
          {
            type: "paragraph",
            content: "Every React application uses parent-to-child communication extensively."
          }
        ]
      },

      {
        heading: "Parent to Child vs Child to Parent",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Parent to Child",
            leftItems: [
              "Props"
            ],
            rightTitle: "Child to Parent",
            rightItems: [
              "Callback Functions"
            ]
          },
          {
            type: "paragraph",
            content: "Together they form the foundation of component communication in React."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Parent to Child Communication is the primary way components exchange data in React."
          },
          {
            type: "paragraph",
            content: "React uses:"
          },
          {
            type: "output",
            content: "Props"
          },
          {
            type: "paragraph",
            content: "for this communication."
          },
          {
            type: "paragraph",
            content: "Props can pass:"
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
            content: "React follows:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          },
          {
            type: "paragraph",
            content: "meaning:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding Parent to Child Communication is essential because nearly every React application relies on props to move data through the component tree."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the biggest signs of React maturity is realizing that components are not independent islands. Most React architecture revolves around deciding where data should live and how it should flow. Parent-to-child communication through props is the simplest, most predictable, and most scalable way to move data across a React application. Before learning advanced state management libraries, mastering props and one-way data flow will solve the majority of communication problems you'll encounter in real projects."
          }
        ]
      }
    ]
  },




/* ===========================
    Second Topic : Child to Parent Communication
============================= */
    "child-to-parent-communication": {
    title: "Child to Parent Communication",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In React, data usually flows from:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern is called:"
          },
          {
            type: "output",
            content: "Parent to Child Communication"
          },
          {
            type: "paragraph",
            content: "and is achieved using props."
          },
          {
            type: "paragraph",
            content: "However, real-world applications often require the opposite behavior."
          },
          {
            type: "paragraph",
            content: "Consider the following situations:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A button inside a child component needs to update data in the parent.",
              "A form component needs to send submitted data to the parent.",
              "A search bar needs to send the entered text to the parent.",
              "A product card needs to notify the parent when an item is added to the cart.",
              "A modal needs to tell the parent when it should close."
            ]
          },
          {
            type: "paragraph",
            content: "In all these cases:"
          },
          {
            type: "flow",
            steps: [
              "Child", "→",
              "Needs To Send Information", "→",
              "Parent"
            ]
          },
          {
            type: "paragraph",
            content: "At first glance, this seems impossible because React follows one-way data flow."
          },
          {
            type: "paragraph",
            content: "Fortunately, React provides a clean solution using:"
          },
          {
            type: "output",
            content: "Callback Functions"
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why child-to-parent communication is needed",
              "Why children cannot directly modify parent data",
              "How callback functions solve the problem",
              "Passing functions as props",
              "Sending data from child to parent",
              "Handling events in parent components",
              "Sharing state between components",
              "Lifting state up",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how child components communicate with their parents while still following React's one-way data flow philosophy."
          }
        ]
      },

      {
        heading: "Why Child to Parent Communication Is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a simple counter application."
          },
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "tree",
            content: `App
│
└── CounterButton`
          },
          {
            type: "paragraph",
            content: "The count value is stored in App."
          },
          {
            type: "paragraph",
            content: "However:"
          },
          {
            type: "output",
            content: "CounterButton"
          },
          {
            type: "paragraph",
            content: "contains the button that users click."
          },
          {
            type: "paragraph",
            content: "When the button is clicked:"
          },
          {
            type: "flow",
            steps: [
              "Child Component", "→",
              "Must Inform Parent", "→",
              "Update Count"
            ]
          },
          {
            type: "paragraph",
            content: "Without communication, the parent would never know the button was clicked."
          }
        ]
      },

      {
        heading: "Understanding the React Data Flow",
        blocks: [
          {
            type: "paragraph",
            content: "React follows:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "Data moves downward."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<App username="John" />`
          },
          {
            type: "paragraph",
            content: "The child receives:"
          },
          {
            type: "output",
            content: "props.username"
          },
          {
            type: "paragraph",
            content: "But the child cannot directly change the parent's state."
          },
          {
            type: "paragraph",
            content: "This is intentional."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Predictable behavior",
              "Easier debugging",
              "Better scalability",
              "Cleaner architecture"
            ]
          }
        ]
      },

      {
        heading: "Why Direct Child-to-Parent Access Is Not Allowed",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "tree",
            content: `App
│
└── Child`
          },
          {
            type: "paragraph",
            content: "Suppose App owns:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [count, setCount] = useState(0);`
          },
          {
            type: "paragraph",
            content: "The Child component cannot do:"
          },
          {
            type: "code",
            language: "javascript",
            content: `count = 100;`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `props.count = 100;`
          },
          {
            type: "paragraph",
            content: "Props are read-only."
          },
          {
            type: "paragraph",
            content: "React prevents this to maintain predictable data flow."
          }
        ]
      },

      {
        heading: "The Solution: Callback Functions",
        blocks: [
          {
            type: "paragraph",
            content: "React solves child-to-parent communication using:"
          },
          {
            type: "output",
            content: "Callback Functions"
          },
          {
            type: "paragraph",
            content: "The idea is simple:"
          },
          {
            type: "flow",
            steps: [
              "Parent Creates Function", "→",
              "Parent Passes Function To Child", "→",
              "Child Calls Function", "→",
              "Parent Executes Logic"
            ]
          },
          {
            type: "paragraph",
            content: "This allows the child to communicate with the parent indirectly."
          }
        ]
      },

      {
        heading: "Basic Callback Example",
        blocks: [
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  function handleClick() {
    alert("Button clicked");
  }

  return (
    <Child
      onButtonClick={handleClick}
    />
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
            content: `function Child(props) {
  return (
    <button
      onClick={props.onButtonClick}
    >
      Click Me
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "flow",
            steps: [
              "Click button", "→",
              "Button clicked"
            ]
          },
          {
            type: "paragraph",
            content: "The child triggers the parent's function."
          }
        ]
      },

      {
        heading: "Visualizing Callback Communication",
        blocks: [
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "tree",
            content: `Parent
│
├── Creates Function
│
├── Passes Function
│
↓
Child
│
├── User Action
│
├── Calls Function
│
↓
Parent Logic Runs`
          },
          {
            type: "paragraph",
            content: "This is the foundation of child-to-parent communication."
          }
        ]
      },

      {
        heading: "Sending Data to the Parent",
        blocks: [
          {
            type: "paragraph",
            content: "Callbacks become more powerful when data is passed."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  function receiveData(name) {
    console.log(name);
  }

  return (
    <Child
      sendData={receiveData}
    />
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
            content: `function Child(props) {

  function handleClick() {
    props.sendData("John");
  }

  return (
    <button onClick={handleClick}>
      Send Name
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "John"
          },
          {
            type: "paragraph",
            content: "The child sends information to the parent through the callback."
          }
        ]
      },

      {
        heading: "Sending User Input to the Parent",
        blocks: [
          {
            type: "paragraph",
            content: "A very common real-world example."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  function handleSearch(text) {
    console.log(text);
  }

  return (
    <SearchBar
      onSearch={handleSearch}
    />
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
            content: `function SearchBar(props) {

  return (
    <input
      onChange={(e) =>
        props.onSearch(
          e.target.value
        )
      }
    />
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
              "Typing:",
              "React",
              "",
              "Parent Receives:",
              "React"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern powers search bars, filters, and forms."
          }
        ]
      },

      {
        heading: "Updating Parent State From Child",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common use cases."
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  const [count, setCount] =
    useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>{count}</h2>

      <Child
        onIncrement={increment}
      />
    </>
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
            content: `function Child(props) {

  return (
    <button
      onClick={props.onIncrement}
    >
      Increment
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "flow",
            steps: [
              "0", "→",
              "Click", "→",
              "1", "→",
              "Click", "→",
              "2"
            ]
          },
          {
            type: "paragraph",
            content: "The child triggers updates in the parent."
          }
        ]
      },

      {
        heading: "Sending Objects to the Parent",
        blocks: [
          {
            type: "paragraph",
            content: "Children can send entire objects."
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Child(props) {

  const user = {
    name: "John",
    age: 25
  };

  return (
    <button
      onClick={() =>
        props.sendUser(user)
      }
    >
      Send User
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  function handleUser(user) {
    console.log(user);
  }

  return (
    <Child
      sendUser={handleUser}
    />
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "John",
  "age": 25
}`
          }
        ]
      },

      {
        heading: "Sending Arrays to the Parent",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Child:"
          },
          {
            type: "code",
            language: "javascript",
            content: `props.sendSkills([
  "React",
  "JavaScript",
  "CSS"
]);`
          },
          {
            type: "paragraph",
            content: "Parent receives:"
          },
          {
            type: "code",
            language: "json",
            content: `["React", "JavaScript", "CSS"]`
          },
          {
            type: "paragraph",
            content: "Any JavaScript value can be sent through callbacks."
          }
        ]
      },

      {
        heading: "Real-World Example: Add To Cart",
        blocks: [
          {
            type: "paragraph",
            content: "Structure:"
          },
          {
            type: "tree",
            content: `App
│
└── ProductCard`
          },
          {
            type: "paragraph",
            content: "Parent:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {

  function addToCart(product) {
    console.log(
      "Added:",
      product
    );
  }

  return (
    <ProductCard
      onAddToCart={addToCart}
    />
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
            content: `function ProductCard(props) {

  const product = "Laptop";

  return (
    <button
      onClick={() =>
        props.onAddToCart(product)
      }
    >
      Add To Cart
    </button>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Added: Laptop"
          },
          {
            type: "paragraph",
            content: "This pattern is used extensively in e-commerce applications."
          }
        ]
      },

      {
        heading: "Understanding Lifting State Up",
        blocks: [
          {
            type: "paragraph",
            content: "One of React's most important concepts."
          },
          {
            type: "paragraph",
            content: "Suppose two sibling components need the same data."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Child A State",
              "Child B State"
            ]
          },
          {
            type: "paragraph",
            content: "These states become difficult to synchronize."
          },
          {
            type: "paragraph",
            content: "React's solution:"
          },
          {
            type: "flow",
            steps: [
              "Move State Up", "→",
              "Common Parent", "→",
              "Share Through Props"
            ]
          },
          {
            type: "paragraph",
            content: "This process is called:"
          },
          {
            type: "output",
            content: "Lifting State Up"
          }
        ]
      },

      {
        heading: "Example of Lifting State Up",
        blocks: [
          {
            type: "paragraph",
            content: "Before:"
          },
          {
            type: "tree",
            content: `Parent
│
├── ChildA
│
└── ChildB`
          },
          {
            type: "paragraph",
            content: "After:"
          },
          {
            type: "tree",
            content: `Parent
│
├── State Lives Here
│
├── ChildA
│
└── ChildB`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "flow",
            steps: [
              "ChildA", "→",
              "Sends Data Up"
            ]
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Passes Updated Data Down"
            ]
          },
          {
            type: "output",
            content: "ChildB"
          },
          {
            type: "paragraph",
            content: "This is how many React applications share data."
          }
        ]
      },

      {
        heading: "Child-to-Parent Communication and Forms",
        blocks: [
          {
            type: "paragraph",
            content: "Forms are one of the biggest consumers of callback functions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "LoginForm", "→",
              "Sends Email", "→",
              "Parent"
            ]
          },
          {
            type: "paragraph",
            content: "The parent can then:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Validate input",
              "Send API requests",
              "Update application state",
              "Redirect users"
            ]
          },
          {
            type: "paragraph",
            content: "Most form workflows rely heavily on child-to-parent communication."
          }
        ]
      },

      {
        heading: "Callback Naming Conventions",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers often use names such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "onClick",
              "onSubmit",
              "onDelete",
              "onSearch",
              "onSelect",
              "onSave",
              "onClose",
              "onChange"
            ]
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserForm
  onSubmit={handleSubmit}
/>

<SearchBar
  onSearch={handleSearch}
/>`
          },
          {
            type: "paragraph",
            content: "This makes code easier to understand."
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
                question: "Mistake 1: Calling Function Immediately",
                answer: "Incorrect: `<Child onClick={handleClick()} />`. This executes immediately during render. Correct: `<Child onClick={handleClick} />`. Pass the function reference."
              },
              {
                question: "Mistake 2: Modifying Parent Props",
                answer: "Incorrect: `props.count++;`. Props are read-only. Always use callbacks to let the parent update its own state."
              },
              {
                question: "Mistake 3: Creating Unnecessary State",
                answer: "Bad: Keeping duplicate state in both Parent and Child. Keep a single source of truth (lift state up)."
              },
              {
                question: "Mistake 4: Sending Too Much Data",
                answer: "Bad: `props.sendEverything(hugeObject);`. Send only the specific data the parent actually needs."
              }
            ]
          }
        ]
      },

      {
        heading: "Parent to Child vs Child to Parent",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Parent to Child",
            leftItems: [
              "Uses Props",
              "Flow:",
              "Parent",
              "↓",
              "Child"
            ],
            rightTitle: "Child to Parent",
            rightItems: [
              "Uses Callback Functions",
              "Flow:",
              "Child",
              "↓",
              "Calls Parent Function",
              "↓",
              "Parent Updates State"
            ]
          },
          {
            type: "paragraph",
            content: "Together they form the backbone of React component communication."
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
                title: "Keep State High Enough",
                description: "Store shared state in the closest common parent."
              },
              {
                title: "Use Descriptive Callback Names",
                description: "Good: onSave, onDelete, onSubmit, onSearch. Bad: func1, callback123."
              },
              {
                title: "Send Minimal Data",
                description: "Pass only what the parent actually needs."
              },
              {
                title: "Avoid Deep Callback Chains",
                description: "Too many nested callbacks can make components difficult to manage. Consider Context API for deeply shared data."
              },
              {
                title: "Lift State When Necessary",
                description: "If multiple components need the same information: Move State Up instead of duplicating it."
              }
            ]
          }
        ]
      },

      {
        heading: "Real Application Communication Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
│
├── SearchBar
│
├── ProductList
│
└── Cart`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Types", "→",
              "SearchBar", "→",
              "Callback", "→",
              "App State Updates", "→",
              "ProductList Receives New Data"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern powers thousands of React applications every day."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Child-to-Parent Communication allows child components to notify parent components about events, actions, and data changes."
          },
          {
            type: "paragraph",
            content: "Because React follows:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          },
          {
            type: "paragraph",
            content: "children cannot directly modify parent state."
          },
          {
            type: "paragraph",
            content: "Instead React uses:"
          },
          {
            type: "output",
            content: "Callback Functions"
          },
          {
            type: "paragraph",
            content: "The workflow is:"
          },
          {
            type: "flow",
            steps: [
              "Parent Creates Function", "→",
              "Passes Function As Prop", "→",
              "Child Calls Function", "→",
              "Parent Updates State"
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
              "Form submissions",
              "Button clicks",
              "Search inputs",
              "Cart actions",
              "Modal controls",
              "Data sharing"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering callback functions and lifting state up is one of the biggest steps toward becoming proficient in React component architecture."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many beginners think child-to-parent communication \"breaks\" React's one-way data flow. It actually doesn't. Data still flows downward through props. The child simply requests an action by calling a function that belongs to the parent. The parent remains the owner of the state, preserving React's predictable architecture while still allowing components to interact effectively."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Sibling Communication
============================= */
    "sibling-communication": {
    title: "Sibling Communication",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, components often need to share data with each other."
          },
          {
            type: "paragraph",
            content: "Communication between a parent component and a child component is straightforward because React provides props for passing data downward and callback functions for sending data upward."
          },
          {
            type: "paragraph",
            content: "However, what happens when two sibling components need to communicate?"
          },
          {
            type: "paragraph",
            content: "Consider this structure:"
          },
          {
            type: "tree",
            content: `App
├── SearchBar
└── ProductList`
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SearchBar contains a search input.",
              "ProductList displays products."
            ]
          },
          {
            type: "paragraph",
            content: "When a user types in SearchBar, the product list should update immediately."
          },
          {
            type: "paragraph",
            content: "The problem is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SearchBar cannot directly access ProductList.",
              "ProductList cannot directly access SearchBar."
            ]
          },
          {
            type: "paragraph",
            content: "This situation is called Sibling Communication."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What sibling communication is",
              "Why siblings cannot communicate directly",
              "The React way to solve sibling communication",
              "Lifting state up",
              "Sharing state through a common parent",
              "Using Context API for sibling communication",
              "Communication patterns used in large applications",
              "Common mistakes beginners make",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand how sibling components share information efficiently in React applications."
          }
        ]
      },

      {
        heading: "What is Sibling Communication?",
        blocks: [
          {
            type: "paragraph",
            content: "Sibling communication refers to:"
          },
          {
            type: "output",
            content: "Sharing data between components that have the same parent."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Dashboard
├── Sidebar
└── Content`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sidebar and Content are siblings.",
              "Neither component is inside the other.",
              "Both belong to Dashboard."
            ]
          },
          {
            type: "paragraph",
            content: "If Sidebar changes something and Content must react to it, communication is required."
          }
        ]
      },

      {
        heading: "Why Siblings Cannot Communicate Directly",
        blocks: [
          {
            type: "paragraph",
            content: "React follows a strict data flow model:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "Data flows downward through props."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<App>
  <SearchBar />
  <ProductList />
</App>`
          },
          {
            type: "paragraph",
            content: "SearchBar cannot do:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ProductList products={filteredProducts} />`
          },
          {
            type: "paragraph",
            content: "because ProductList is not inside SearchBar."
          },
          {
            type: "paragraph",
            content: "Similarly, ProductList cannot access SearchBar's internal state."
          },
          {
            type: "paragraph",
            content: "This limitation is intentional because it keeps React applications:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Predictable",
              "Easier to debug",
              "Easier to maintain"
            ]
          }
        ]
      },

      {
        heading: "The React Solution",
        blocks: [
          {
            type: "paragraph",
            content: "React solves sibling communication through:"
          },
          {
            type: "output",
            content: "A Shared Parent"
          },
          {
            type: "paragraph",
            content: "Instead of communicating directly:"
          },
          {
            type: "output",
            content: "SearchBar ↔ ProductList ❌"
          },
          {
            type: "paragraph",
            content: "React uses:"
          },
          {
            type: "output",
            content: [
              "SearchBar",
              "     ↑",
              "     |",
              "    App",
              "     |",
              "     ↓",
              "ProductList"
            ]
          },
          {
            type: "paragraph",
            content: "The parent acts as a communication bridge."
          }
        ]
      },

      {
        heading: "Understanding \"Lifting State Up\"",
        blocks: [
          {
            type: "paragraph",
            content: "The official React solution for sibling communication is:"
          },
          {
            type: "output",
            content: "Lift the shared state to the closest common parent."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `App
├── SearchBar
└── ProductList`
          },
          {
            type: "paragraph",
            content: "Instead of storing search text inside SearchBar:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [search, setSearch] = useState("");`
          },
          {
            type: "paragraph",
            content: "move it to App:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductList
        search={search}
      />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SearchBar updates the state.",
              "ProductList reads the state.",
              "App controls the shared data."
            ]
          },
          {
            type: "paragraph",
            content: "This technique is called lifting state up."
          }
        ]
      },

      {
        heading: "Basic Example of Sibling Communication",
        blocks: [
          {
            type: "paragraph",
            content: "Parent Component"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [message, setMessage] =
    useState("");

  return (
    <>
      <InputBox
        setMessage={setMessage}
      />

      <DisplayBox
        message={message}
      />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "First Sibling"
          },
          {
            type: "code",
            language: "jsx",
            content: `function InputBox({ setMessage }) {
  return (
    <input
      onChange={(e) =>
        setMessage(e.target.value)
      }
    />
  );
}`
          },
          {
            type: "paragraph",
            content: "Second Sibling"
          },
          {
            type: "code",
            language: "jsx",
            content: `function DisplayBox({ message }) {
  return <h2>{message}</h2>;
}`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "User Types:",
              "Hello React",
              "",
              "Displayed:",
              "Hello React"
            ]
          },
          {
            type: "paragraph",
            content: "The siblings never communicate directly."
          },
          {
            type: "paragraph",
            content: "The parent manages the shared state."
          }
        ]
      },

      {
        heading: "Real-World Example: Product Search",
        blocks: [
          {
            type: "paragraph",
            content: "Component Structure"
          },
          {
            type: "tree",
            content: `App
├── SearchBar
└── ProductList`
          },
          {
            type: "paragraph",
            content: "App Component"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const [query, setQuery] =
    useState("");

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
      />

      <ProductList
        query={query}
      />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "SearchBar"
          },
          {
            type: "code",
            language: "jsx",
            content: `function SearchBar({
  query,
  setQuery
}) {
  return (
    <input
      value={query}
      onChange={(e) =>
        setQuery(e.target.value)
      }
    />
  );
}`
          },
          {
            type: "paragraph",
            content: "ProductList"
          },
          {
            type: "code",
            language: "jsx",
            content: `function ProductList({ query }) {
  return (
    <p>
      Searching for:
      {query}
    </p>
  );
}`
          },
          {
            type: "paragraph",
            content: "This pattern is used extensively in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "E-commerce websites",
              "Dashboards",
              "Admin panels",
              "SaaS applications"
            ]
          }
        ]
      },

      {
        heading: "Communication Flow Visualization",
        blocks: [
          {
            type: "paragraph",
            content: "When a user types:"
          },
          {
            type: "output",
            content: [
              "SearchBar",
              "     |",
              "     ↓",
              "setQuery()",
              "     |",
              "     ↓",
              "App State Updated",
              "     |",
              "     ↓",
              "ProductList Receives New Props"
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "State Update", "→",
              "Parent Re-renders", "→",
              "Sibling Receives New Data"
            ]
          },
          {
            type: "paragraph",
            content: "This predictable flow is one reason React scales well."
          }
        ]
      },

      {
        heading: "Sharing Multiple Values",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes siblings need more than one piece of shared information."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, setUser] =
  useState(null);

const [theme, setTheme] =
  useState("light");

const [language, setLanguage] =
  useState("English");`
          },
          {
            type: "paragraph",
            content: "The parent can pass these values to multiple siblings:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Navbar
  theme={theme}
/>

<Dashboard
  user={user}
  language={language}
/>`
          }
        ]
      },

      {
        heading: "When Lifting State Becomes Difficult",
        blocks: [
          {
            type: "paragraph",
            content: "For small applications:"
          },
          {
            type: "tree",
            content: `App
├── ComponentA
└── ComponentB`
          },
          {
            type: "paragraph",
            content: "lifting state is simple."
          },
          {
            type: "paragraph",
            content: "But large applications may look like:"
          },
          {
            type: "tree",
            content: `App
├── Layout
│   ├── Sidebar
│   ├── Header
│   └── Content
│       └── ProductList
└── SearchBar`
          },
          {
            type: "paragraph",
            content: "Passing props through many layers becomes annoying."
          },
          {
            type: "paragraph",
            content: "This problem is called:"
          },
          {
            type: "output",
            content: "Prop Drilling"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Layout", "→",
              "Content", "→",
              "ProductList"
            ]
          },
          {
            type: "paragraph",
            content: "The same data must pass through multiple components."
          }
        ]
      },

      {
        heading: "Using Context API for Sibling Communication",
        blocks: [
          {
            type: "paragraph",
            content: "When many sibling components need shared data, React provides:"
          },
          {
            type: "output",
            content: "Context API"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child", "→",
              "GrandChild", "→",
              "Sibling"
            ]
          },
          {
            type: "paragraph",
            content: "Context allows:"
          },
          {
            type: "output",
            content: [
              "Context",
              " ↙   ↘",
              "A     B"
            ]
          },
          {
            type: "paragraph",
            content: "Any component can access shared data directly."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "paragraph",
            content: "Create Context:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const ThemeContext =
  createContext();`
          },
          {
            type: "paragraph",
            content: "Provide Data:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ThemeContext.Provider
  value="dark"
>
  <Sidebar />
  <Content />
</ThemeContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Use Data:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const theme =
  useContext(ThemeContext);`
          },
          {
            type: "paragraph",
            content: "Now sibling components can access the same value without prop drilling."
          }
        ]
      },

      {
        heading: "Context vs Lifting State Up",
        blocks: [
          {
            type: "table",
            headers: ["Lifting State Up", "Context API"],
            rows: [
              ["Simple", "More powerful"],
              ["Small apps", "Large apps"],
              ["Few siblings", "Many siblings"],
              ["Easier to understand", "Reduces prop drilling"]
            ]
          }
        ]
      },

      {
        heading: "Other Communication Approaches",
        blocks: [
          {
            type: "paragraph",
            content: "Large React applications sometimes use:"
          },
          {
            type: "paragraph",
            content: "Redux"
          },
          {
            type: "paragraph",
            content: "Centralized state management."
          },
          {
            type: "output",
            content: [
              "Redux Store",
              " ↙      ↘",
              "A        B"
            ]
          },
          {
            type: "paragraph",
            content: "Zustand"
          },
          {
            type: "paragraph",
            content: "Lightweight global state library."
          },
          {
            type: "paragraph",
            content: "Recoil"
          },
          {
            type: "paragraph",
            content: "State management developed by Meta."
          },
          {
            type: "paragraph",
            content: "React Context"
          },
          {
            type: "paragraph",
            content: "Built directly into React."
          },
          {
            type: "paragraph",
            content: "For most projects:"
          },
          {
            type: "output",
            content: [
              "Small App",
              "→ Lift State Up",
              "",
              "Medium App",
              "→ Context API",
              "",
              "Large App",
              "→ Context + State Management Library"
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
                question: "Mistake 1: Trying Direct Communication",
                answer: "Wrong thinking: SearchBar → ProductList. React does not allow direct sibling communication. Always use a shared parent or Context."
              },
              {
                question: "Mistake 2: Duplicating State",
                answer: "Bad: Both `SearchBar` and `ProductList` maintaining their own copy of `[query, setQuery]`. Now two separate states exist. Shared data should have one source of truth."
              },
              {
                question: "Mistake 3: Lifting State Too High",
                answer: "Bad: Lifting state to the very top `<App>` component when only two deeply nested siblings need it. This can create unnecessary re-renders. Lift state only to the nearest common parent."
              },
              {
                question: "Mistake 4: Excessive Prop Drilling",
                answer: "Passing data through five or six layers of components just to reach a sibling usually indicates that the Context API may be a better solution."
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
                title: "1. Keep One Source of Truth",
                description: "Store shared data in one place."
              },
              {
                title: "2. Lift State Only as Needed",
                description: "Use the closest common parent."
              },
              {
                title: "3. Use Context for Widely Shared Data",
                description: "Examples: Theme, User information, Language settings, Authentication status."
              },
              {
                title: "4. Avoid Duplicate State",
                description: "Multiple copies of the same data often create bugs."
              },
              {
                title: "5. Think About Data Ownership",
                description: "Ask: Which component owns this data? Then place state there."
              }
            ]
          }
        ]
      },

      {
        heading: "Sibling Communication Decision Guide",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "If only two siblings need data",
                description: "Use: Lift State Up"
              },
              {
                title: "If many components need data",
                description: "Use: Context API"
              },
              {
                title: "If the application is very large",
                description: "Use: Redux, Zustand, Recoil"
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
            content: "Sibling communication occurs when components with the same parent need to share information."
          },
          {
            type: "paragraph",
            content: "React does not allow direct sibling-to-sibling communication."
          },
          {
            type: "paragraph",
            content: "Instead, React follows:"
          },
          {
            type: "flow",
            steps: [
              "Sibling", "→",
              "Parent", "→",
              "Sibling"
            ]
          },
          {
            type: "paragraph",
            content: "The most common solution is:"
          },
          {
            type: "output",
            content: "Lift State Up"
          },
          {
            type: "paragraph",
            content: "where shared state is stored in the closest common parent."
          },
          {
            type: "paragraph",
            content: "For larger applications, Context API helps eliminate prop drilling and allows multiple components to access shared data efficiently."
          },
          {
            type: "paragraph",
            content: "Understanding sibling communication is essential because it forms the foundation of React state management patterns used in real-world applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most beginners think sibling communication means making one component directly call another. Professional React developers think differently: they focus on where the shared state should live. Once state is placed in the correct parent component, sibling communication becomes a natural result of React's one-way data flow rather than a separate problem to solve."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Prop Drilling
============================= */
    "prop-drilling": {
    title: "Prop Drilling",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, components often need access to the same data."
          },
          {
            type: "paragraph",
            content: "In simple applications, passing data from a parent component to a child component using props is straightforward and effective."
          },
          {
            type: "paragraph",
            content: "However, problems begin to appear when data needs to travel through multiple layers of components before reaching the component that actually needs it."
          },
          {
            type: "paragraph",
            content: "This situation is known as Prop Drilling."
          },
          {
            type: "paragraph",
            content: "Prop Drilling occurs when props are passed through several intermediate components that do not use the data themselves but only forward it to deeper components."
          },
          {
            type: "paragraph",
            content: "Consider a component hierarchy:"
          },
          {
            type: "tree",
            content: `App
 └── Dashboard
      └── Sidebar
           └── UserProfile`
          },
          {
            type: "paragraph",
            content: "If UserProfile needs user data stored in App, the data may need to be passed through:"
          },
          {
            type: "flow",
            steps: [
              "<App user={user} />", "→",
              "<Dashboard user={user} />", "→",
              "<Sidebar user={user} />", "→",
              "<UserProfile user={user} />"
            ]
          },
          {
            type: "paragraph",
            content: "Even though Dashboard and Sidebar do not need the data, they still receive and forward it."
          },
          {
            type: "paragraph",
            content: "This repeated forwarding is called prop drilling."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What prop drilling is",
              "Why it happens in React",
              "How data flows through component trees",
              "Advantages and disadvantages of prop drilling",
              "Real-world examples",
              "Problems caused by deep prop chains",
              "Techniques to avoid prop drilling",
              "Context API as a solution",
              "State management alternatives",
              "Professional best practices",
              "Common beginner mistakes"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will understand when prop drilling is perfectly acceptable and when it becomes a sign that your application architecture needs improvement."
          }
        ]
      },

      {
        heading: "What Is Prop Drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Prop drilling is the process of passing props through multiple nested components to reach a deeply nested child component."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function App() {
  const username = "John";

  return <Dashboard username={username} />;
}
function Dashboard({ username }) {
  return <Sidebar username={username} />;
}
function Sidebar({ username }) {
  return <Profile username={username} />;
}
function Profile({ username }) {
  return <h2>{username}</h2>;
}`
          },
          {
            type: "paragraph",
            content: "The data originates in App but travels through multiple components before reaching Profile."
          },
          {
            type: "paragraph",
            content: "This is prop drilling."
          }
        ]
      },

      {
        heading: "Why Does Prop Drilling Happen?",
        blocks: [
          {
            type: "paragraph",
            content: "Prop drilling is not a React feature."
          },
          {
            type: "paragraph",
            content: "It is a natural consequence of React's data flow model."
          },
          {
            type: "paragraph",
            content: "React follows:"
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
            content: "Data moves downward through props."
          },
          {
            type: "paragraph",
            content: "If a deeply nested component requires data from a top-level component, the data must travel through every level in between."
          },
          {
            type: "paragraph",
            content: "As component trees grow, prop drilling becomes more noticeable."
          }
        ]
      },

      {
        heading: "Understanding React's One-Way Data Flow",
        blocks: [
          {
            type: "paragraph",
            content: "React follows a principle called:"
          },
          {
            type: "output",
            content: "One-Way Data Flow"
          },
          {
            type: "paragraph",
            content: "Data flows:"
          },
          {
            type: "flow",
            steps: [
              "Parent Component", "→",
              "Child Component", "→",
              "Nested Child"
            ]
          },
          {
            type: "paragraph",
            content: "Props are the mechanism that enables this flow."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Parent() {
  return <Child message="Hello" />;
}
function Child({ message }) {
  return <p>{message}</p>;
}`
          },
          {
            type: "paragraph",
            content: "This model makes React predictable and easy to debug."
          },
          {
            type: "paragraph",
            content: "Prop drilling is essentially an extension of this same concept across multiple component levels."
          }
        ]
      },

      {
        heading: "A Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce application."
          },
          {
            type: "tree",
            content: `App
 └── Layout
      └── Header
           └── UserMenu`
          },
          {
            type: "paragraph",
            content: "User information is stored in App."
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {
  name: "Alice"
};`
          },
          {
            type: "paragraph",
            content: "UserMenu needs access to the user."
          },
          {
            type: "paragraph",
            content: "The data must travel through:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Layout", "→",
              "Header", "→",
              "UserMenu"
            ]
          },
          {
            type: "paragraph",
            content: "Every intermediate component receives:"
          },
          {
            type: "output",
            content: "user={user}"
          },
          {
            type: "paragraph",
            content: "even though it never uses it."
          },
          {
            type: "paragraph",
            content: "This is classic prop drilling."
          }
        ]
      },

      {
        heading: "Why Prop Drilling Is Not Always Bad",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners believe prop drilling is always wrong."
          },
          {
            type: "paragraph",
            content: "That is not true."
          },
          {
            type: "paragraph",
            content: "For small applications, prop drilling is often the simplest solution."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "Passing props directly is perfectly fine."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Profile username="John" />`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy to understand",
              "No additional libraries",
              "Predictable behavior",
              "Minimal complexity"
            ]
          },
          {
            type: "paragraph",
            content: "Professional developers frequently use props when only a few component levels are involved."
          }
        ]
      },

      {
        heading: "When Prop Drilling Becomes a Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Problems arise when component depth increases."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Layout", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Navigation", "→",
              "UserMenu"
            ]
          },
          {
            type: "paragraph",
            content: "Now every component must forward:"
          },
          {
            type: "output",
            content: "user={user}"
          },
          {
            type: "paragraph",
            content: "This creates several issues."
          }
        ]
      },

      {
        heading: "Problems Caused by Prop Drilling",
        blocks: [
          {
            type: "paragraph",
            content: "1. Code Becomes Harder to Read"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Dashboard
  user={user}
  theme={theme}
  notifications={notifications}
/>`
          },
          {
            type: "paragraph",
            content: "Each layer forwards multiple props."
          },
          {
            type: "paragraph",
            content: "Files become cluttered quickly."
          },
          {
            type: "paragraph",
            content: "2. Components Become Tightly Coupled"
          },
          {
            type: "paragraph",
            content: "Intermediate components become dependent on props they do not actually use."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Sidebar({ user }) {
  return <Menu user={user} />;
}`
          },
          {
            type: "paragraph",
            content: "Sidebar exists only as a forwarding layer."
          },
          {
            type: "paragraph",
            content: "3. Refactoring Becomes Difficult"
          },
          {
            type: "paragraph",
            content: "Changing a prop name requires updating every component in the chain."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "username"
          },
          {
            type: "paragraph",
            content: "becomes:"
          },
          {
            type: "output",
            content: "currentUser"
          },
          {
            type: "paragraph",
            content: "Every forwarding component must be modified."
          },
          {
            type: "paragraph",
            content: "4. Increased Maintenance Cost"
          },
          {
            type: "paragraph",
            content: "As applications grow:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "More props",
              "More forwarding",
              "More complexity"
            ]
          },
          {
            type: "paragraph",
            content: "This increases maintenance effort significantly."
          },
          {
            type: "paragraph",
            content: "5. Reduced Component Reusability"
          },
          {
            type: "paragraph",
            content: "Components become tied to specific prop chains."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function Dashboard({ user })`
          },
          {
            type: "paragraph",
            content: "The component now depends on receiving user data even if it doesn't use it directly."
          }
        ]
      },

      {
        heading: "Identifying Prop Drilling",
        blocks: [
          {
            type: "paragraph",
            content: "A common sign is seeing components that only pass props forward."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `function Sidebar({ user }) {
  return <Profile user={user} />;
}`
          },
          {
            type: "paragraph",
            content: "If a component receives props but never uses them, it may be participating in prop drilling."
          }
        ]
      },

      {
        heading: "Visualizing a Prop Drilling Chain",
        blocks: [
          {
            type: "tree",
            content: `App
 │
 ├─ user
 │
 ▼
Dashboard
 │
 ├─ user
 │
 ▼
Sidebar
 │
 ├─ user
 │
 ▼
Profile`
          },
          {
            type: "paragraph",
            content: "Only Profile needs the data."
          },
          {
            type: "paragraph",
            content: "Everything else acts as a transport layer."
          }
        ]
      },

      {
        heading: "How Context API Solves Prop Drilling",
        blocks: [
          {
            type: "paragraph",
            content: "React provides the Context API to share data without passing props manually through every level."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "The data becomes available directly:"
          },
          {
            type: "flow",
            steps: [
              "Context Provider", "→",
              "Any Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const UserContext = createContext();
<UserContext.Provider value={user}>
  <Dashboard />
</UserContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = useContext(UserContext);`
          },
          {
            type: "paragraph",
            content: "can be used directly inside Profile."
          },
          {
            type: "paragraph",
            content: "No prop chain required."
          }
        ]
      },

      {
        heading: "Before and After Context",
        blocks: [
          {
            type: "paragraph",
            content: "With Prop Drilling"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "Data passed manually through every level."
          },
          {
            type: "paragraph",
            content: "With Context"
          },
          {
            type: "flow",
            steps: [
              "UserContext", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "Data accessed directly."
          },
          {
            type: "paragraph",
            content: "Cleaner and more scalable."
          }
        ]
      },

      {
        heading: "Other Solutions Beyond Context",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often use dedicated state management solutions."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Redux",
              "Zustand",
              "Recoil",
              "Jotai",
              "MobX"
            ]
          },
          {
            type: "paragraph",
            content: "These tools allow shared state access without excessive prop passing."
          },
          {
            type: "paragraph",
            content: "However, Context API is usually sufficient for many applications."
          }
        ]
      },

      {
        heading: "When Should You Use Props Instead?",
        blocks: [
          {
            type: "paragraph",
            content: "Use props when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Components are close together",
              "Data is needed by only a few components",
              "Simplicity is important",
              "The application is small"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Parent", "→",
              "Child"
            ]
          },
          {
            type: "paragraph",
            content: "Props remain the best solution."
          }
        ]
      },

      {
        heading: "When Should You Avoid Prop Drilling?",
        blocks: [
          {
            type: "paragraph",
            content: "Consider alternatives when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Data passes through many layers",
              "Multiple branches need the same data",
              "Components only forward props",
              "State becomes difficult to manage"
            ]
          },
          {
            type: "paragraph",
            content: "At this point, Context API or state management libraries become more appropriate."
          }
        ]
      },

      {
        heading: "Prop Drilling vs Context API",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Prop Drilling", "Context API"],
            rows: [
              ["Setup Complexity", "Low", "Medium"],
              ["Easy for Small Apps", "Yes", "Yes"],
              ["Scales Well", "No", "Yes"],
              ["Readability", "Good initially", "Better in large apps"],
              ["Deep Component Trees", "Difficult", "Easy"],
              ["Reusability", "Lower", "Higher"]
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
                question: "Mistake 1: Thinking Prop Drilling Is Always Bad",
                answer: "Props are still the preferred solution for many simple cases."
              },
              {
                question: "Mistake 2: Using Context Everywhere",
                answer: "Some developers replace every prop with Context. This creates unnecessary complexity. Use Context only when needed."
              },
              {
                question: "Mistake 3: Passing Too Many Props",
                answer: "Example: `<Component user={user} theme={theme} cart={cart} products={products} settings={settings} />`. Large prop lists often indicate architectural issues."
              },
              {
                question: "Mistake 4: Creating Deep Component Trees",
                answer: "Excessive nesting increases the likelihood of prop drilling problems."
              },
              {
                question: "Mistake 5: Ignoring State Placement",
                answer: "Sometimes prop drilling occurs because state is stored too high in the component tree. Keeping state closer to where it is used can reduce unnecessary prop passing."
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
                title: "Keep State Close to Usage",
                description: "Avoid storing everything in the root component."
              },
              {
                title: "Use Props for Local Communication",
                description: "Props remain the simplest and most maintainable solution for nearby components."
              },
              {
                title: "Use Context for Shared Global Data",
                description: "Examples: Authentication, Theme settings, Language preferences, User information."
              },
              {
                title: "Avoid Premature Optimization",
                description: "Do not introduce Context or Redux before the application actually needs it."
              },
              {
                title: "Refactor When Prop Chains Grow",
                description: "Long prop chains are a signal that architecture should be revisited."
              }
            ]
          }
        ]
      },

      {
        heading: "Real Industry Example",
        blocks: [
          {
            type: "paragraph",
            content: "Most large applications share data such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logged-in user",
              "Theme preferences",
              "Shopping cart",
              "Notifications"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of prop drilling across hundreds of components, companies use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Context API",
              "Redux",
              "Zustand",
              "Custom hooks"
            ]
          },
          {
            type: "paragraph",
            content: "This keeps applications maintainable as teams and codebases grow."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Prop drilling occurs when data is passed through multiple intermediate components using props."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "It happens because React follows one-way data flow."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simple",
              "Predictable",
              "Easy for small applications"
            ]
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cluttered code",
              "Tight coupling",
              "Poor scalability",
              "Difficult maintenance"
            ]
          },
          {
            type: "paragraph",
            content: "Solutions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better state placement",
              "Context API",
              "Redux",
              "Zustand",
              "Other state management tools"
            ]
          },
          {
            type: "paragraph",
            content: "Prop drilling is not inherently bad. It becomes a problem only when component trees become deep and intermediate components exist solely to forward data."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many developers spend years trying to eliminate all prop drilling. In reality, professional React developers do not avoid prop drilling completely—they avoid unnecessary prop drilling. Passing data through one or two levels is often simpler than introducing Context or Redux. The goal is not to remove props; the goal is to choose the simplest architecture that remains maintainable as the application grows."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Context API
============================= */
    "context-api": {
    title: "Context API",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As React applications grow, managing and sharing data between components becomes increasingly challenging."
          },
          {
            type: "paragraph",
            content: "In small applications, passing data through props is usually enough. However, in larger applications, certain data often needs to be accessed by many components located at different levels of the component tree."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logged-in user information",
              "Theme settings (Light/Dark Mode)",
              "Language preferences",
              "Shopping cart data",
              "Authentication status",
              "Notifications",
              "Application settings"
            ]
          },
          {
            type: "paragraph",
            content: "Without a centralized sharing mechanism, developers often end up passing props through multiple intermediate components."
          },
          {
            type: "paragraph",
            content: "This problem is commonly known as Prop Drilling."
          },
          {
            type: "paragraph",
            content: "React introduced the Context API to solve this problem."
          },
          {
            type: "paragraph",
            content: "The Context API provides a way to share data across the component tree without manually passing props through every component level."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "passing:"
          },
          {
            type: "output",
            content: "user={user}"
          },
          {
            type: "paragraph",
            content: "through every component,"
          },
          {
            type: "paragraph",
            content: "Context allows components to access shared data directly wherever they need it."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What Context API is",
              "Why Context API exists",
              "The problem it solves",
              "How Context works internally",
              "createContext()",
              "Provider Components",
              "useContext Hook",
              "Multiple Contexts",
              "Updating Context Values",
              "Context vs Props",
              "Context vs State Management Libraries",
              "Performance considerations",
              "Common mistakes",
              "Professional best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will be able to create, provide, consume, and manage shared application data using React Context API."
          }
        ]
      },

      {
        heading: "What Is Context API?",
        blocks: [
          {
            type: "paragraph",
            content: "The Context API is React's built-in mechanism for sharing data across multiple components without manually passing props at every level."
          },
          {
            type: "paragraph",
            content: "Think of Context as a global communication channel for a specific section of your application."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Component A", "→",
              "Component B", "→",
              "Component C"
            ]
          },
          {
            type: "paragraph",
            content: "passing data repeatedly,"
          },
          {
            type: "paragraph",
            content: "Context allows:"
          },
          {
            type: "flow",
            steps: [
              "Context", "→",
              "Any Component"
            ]
          },
          {
            type: "paragraph",
            content: "to access the same shared data."
          }
        ]
      },

      {
        heading: "Why Was Context API Created?",
        blocks: [
          {
            type: "paragraph",
            content: "Before Context API, React developers often encountered prop drilling."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "App", "→",
              "Dashboard", "→",
              "Sidebar", "→",
              "Profile"
            ]
          },
          {
            type: "paragraph",
            content: "If Profile needs user information stored in App:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {
  name: "John"
};`
          },
          {
            type: "paragraph",
            content: "the prop must travel through:"
          },
          {
            type: "flow",
            steps: [
              "<Dashboard user={user} />", "→",
              "<Sidebar user={user} />", "→",
              "<Profile user={user} />"
            ]
          },
          {
            type: "paragraph",
            content: "Even though Dashboard and Sidebar do not use the data themselves."
          },
          {
            type: "paragraph",
            content: "This creates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unnecessary code",
              "Tight component coupling",
              "Reduced maintainability",
              "Difficult scaling"
            ]
          },
          {
            type: "paragraph",
            content: "Context API solves this issue."
          }
        ]
      },

      {
        heading: "Real-World Analogy",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a company office."
          },
          {
            type: "paragraph",
            content: "Without Context:"
          },
          {
            type: "flow",
            steps: [
              "CEO", "→",
              "Manager", "→",
              "Team Lead", "→",
              "Developer"
            ]
          },
          {
            type: "paragraph",
            content: "Every message must pass through each person."
          },
          {
            type: "paragraph",
            content: "With Context:"
          },
          {
            type: "flow",
            steps: [
              "Company Portal", "→",
              "Everyone Can Access Information"
            ]
          },
          {
            type: "paragraph",
            content: "No middleman required."
          },
          {
            type: "paragraph",
            content: "Context works similarly inside React applications."
          }
        ]
      },

      {
        heading: "When Should You Use Context?",
        blocks: [
          {
            type: "paragraph",
            content: "Context is useful when multiple components require access to the same data."
          },
          {
            type: "paragraph",
            content: "Common examples:"
          },
          {
            type: "cards",
            items: [
              {
                title: "Authentication",
                description: "`currentUser` - Used by Navbar, Profile, Dashboard, Settings"
              },
              {
                title: "Theme Settings",
                description: "`theme = \"dark\"` - Used throughout the application"
              },
              {
                title: "Language Preferences",
                description: "`language = \"English\"` - Needed by many components"
              },
              {
                title: "Shopping Cart",
                description: "`cartItems` - Accessed by Product Pages, Cart Page, Navbar Badge, Checkout"
              }
            ]
          }
        ]
      },

      {
        heading: "Core Components of Context API",
        blocks: [
          {
            type: "paragraph",
            content: "Context API consists of three major parts:"
          },
          {
            type: "paragraph",
            content: "1. createContext()"
          },
          {
            type: "paragraph",
            content: "Creates a context object."
          },
          {
            type: "paragraph",
            content: "2. Provider"
          },
          {
            type: "paragraph",
            content: "Provides data."
          },
          {
            type: "paragraph",
            content: "3. Consumer (useContext)"
          },
          {
            type: "paragraph",
            content: "Consumes data."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Context Creation", "→",
              "Provider Supplies Data", "→",
              "Components Consume Data"
            ]
          }
        ]
      },

      {
        heading: "Step 1: Creating Context",
        blocks: [
          {
            type: "paragraph",
            content: "Context begins with:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { createContext } from "react";

const UserContext = createContext();`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const ThemeContext = createContext();`
          },
          {
            type: "paragraph",
            content: "This creates a Context object."
          },
          {
            type: "paragraph",
            content: "At this point:"
          },
          {
            type: "paragraph",
            content: "No data exists yet."
          },
          {
            type: "paragraph",
            content: "Only the communication channel exists."
          },
          {
            type: "paragraph",
            content: "Think of it as creating a container."
          }
        ]
      },

      {
        heading: "Understanding createContext()",
        blocks: [
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const MyContext = createContext(defaultValue);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const ThemeContext = createContext("light");`
          },
          {
            type: "paragraph",
            content: "Default value:"
          },
          {
            type: "output",
            content: "\"light\""
          },
          {
            type: "paragraph",
            content: "is used when no Provider exists above the component."
          }
        ]
      },

      {
        heading: "Step 2: Providing Context Data",
        blocks: [
          {
            type: "paragraph",
            content: "A Provider supplies data to components."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "value={user}"
          },
          {
            type: "paragraph",
            content: "becomes available to all descendant components."
          },
          {
            type: "paragraph",
            content: "Visual:"
          },
          {
            type: "flow",
            steps: [
              "Provider", "→",
              "Child", "→",
              "Grandchild", "→",
              "Great Grandchild"
            ]
          },
          {
            type: "paragraph",
            content: "Every component below can access the data."
          },
          {
            type: "paragraph",
            content: "Provider Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `const user = {
  name: "John",
  role: "Admin"
};

<UserContext.Provider value={user}>
  <Dashboard />
</UserContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Now every component inside Dashboard can access user data."
          }
        ]
      },

      {
        heading: "Step 3: Consuming Context",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React uses:"
          },
          {
            type: "output",
            content: "useContext()"
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const value = useContext(MyContext);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = useContext(UserContext);`
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "output",
            content: [
              "user.name",
              "and",
              "user.role"
            ]
          },
          {
            type: "paragraph",
            content: "are available directly."
          }
        ]
      },

      {
        heading: "Complete Context API Example",
        blocks: [
          {
            type: "paragraph",
            content: "Create Context"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { createContext } from "react";

export const UserContext = createContext();`
          },
          {
            type: "paragraph",
            content: "Provide Context"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider
  value={{ name: "John" }}
>
  <Profile />
</UserContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Consume Context"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}`
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
        heading: "How Context Works Internally",
        blocks: [
          {
            type: "paragraph",
            content: "React maintains a Context tree."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Provider value=user
├── Component A
│   └── Component B
│       └── Component C`
          },
          {
            type: "paragraph",
            content: "When:"
          },
          {
            type: "output",
            content: "useContext(UserContext)"
          },
          {
            type: "paragraph",
            content: "is called,"
          },
          {
            type: "paragraph",
            content: "React searches upward until it finds the nearest matching Provider."
          },
          {
            type: "paragraph",
            content: "Then it returns the Provider's value."
          }
        ]
      },

      {
        heading: "Multiple Components Using Same Context",
        blocks: [
          {
            type: "paragraph",
            content: "One Provider can serve many consumers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `UserContext Provider
├── Navbar
├── Profile
├── Dashboard
└── Settings`
          },
          {
            type: "paragraph",
            content: "Every component accesses the same shared data."
          }
        ]
      },

      {
        heading: "Updating Context Values",
        blocks: [
          {
            type: "paragraph",
            content: "Context can contain state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [theme, setTheme] =
useState("light");`
          },
          {
            type: "paragraph",
            content: "Provider:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ThemeContext.Provider
  value={{ theme, setTheme }}
>`
          },
          {
            type: "paragraph",
            content: "Consumer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { theme, setTheme } =
useContext(ThemeContext);`
          },
          {
            type: "paragraph",
            content: "Update:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTheme("dark");`
          },
          {
            type: "paragraph",
            content: "All subscribed components automatically re-render."
          }
        ]
      },

      {
        heading: "Context and State Together",
        blocks: [
          {
            type: "paragraph",
            content: "Context does not replace state."
          },
          {
            type: "paragraph",
            content: "A common pattern:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, setUser] =
useState(null);`
          },
          {
            type: "paragraph",
            content: "Store state:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider
 value={{ user, setUser }}
>`
          },
          {
            type: "paragraph",
            content: "Consume anywhere:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { user } =
useContext(UserContext);`
          },
          {
            type: "paragraph",
            content: "Context shares state."
          },
          {
            type: "paragraph",
            content: "State still stores data."
          }
        ]
      },

      {
        heading: "Context vs Props",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Props",
            leftItems: [
              "Parent",
              "↓",
              "Child",
              "↓",
              "Grandchild",
              "Data moves manually."
            ],
            rightTitle: "Context",
            rightItems: [
              "Provider",
              "↓",
              "Any Descendant Component",
              "Data accessed directly."
            ]
          }
        ]
      },

      {
        heading: "Context vs State",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse them."
          },
          {
            type: "comparison",
            leftTitle: "State",
            leftItems: [
              "Stores changing data.",
              "Example: `const [count, setCount] = useState(0);`"
            ],
            rightTitle: "Context",
            rightItems: [
              "Shares data.",
              "Example: `<UserContext.Provider>`"
            ]
          },
          {
            type: "paragraph",
            content: "Think of it this way:"
          },
          {
            type: "paragraph",
            content: "State stores data."
          },
          {
            type: "paragraph",
            content: "Context distributes data."
          }
        ]
      },

      {
        heading: "Context vs Redux",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers wonder:"
          },
          {
            type: "paragraph",
            content: "Should I use Context or Redux?"
          },
          {
            type: "comparison",
            leftTitle: "Context API",
            leftItems: [
              "Best for: Themes, Authentication, Language settings, Small-to-medium shared state"
            ],
            rightTitle: "Redux",
            rightItems: [
              "Best for: Large applications, Complex state interactions, Advanced debugging, Large teams"
            ]
          },
          {
            type: "paragraph",
            content: "Modern React applications often start with Context and only move to Redux when complexity increases."
          }
        ]
      },

      {
        heading: "Multiple Contexts",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often need more than one Context."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "ThemeContext",
              "UserContext",
              "LanguageContext",
              "CartContext"
            ]
          },
          {
            type: "paragraph",
            content: "Provider structure:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserContext.Provider>
  <ThemeContext.Provider>
    <App />
  </ThemeContext.Provider>
</UserContext.Provider>`
          },
          {
            type: "paragraph",
            content: "Consumers can access both."
          }
        ]
      },

      {
        heading: "Custom Context Hooks",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers rarely write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `useContext(UserContext);`
          },
          {
            type: "paragraph",
            content: "everywhere."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function useUser() {
  return useContext(UserContext);
}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = useUser();`
          },
          {
            type: "paragraph",
            content: "Cleaner and more maintainable."
          }
        ]
      },

      {
        heading: "Common Context API Use Cases",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Authentication",
                description: "currentUser"
              },
              {
                title: "Theme Management",
                description: "darkMode"
              },
              {
                title: "Language Selection",
                description: "selectedLanguage"
              },
              {
                title: "Shopping Cart",
                description: "cartItems"
              },
              {
                title: "Notifications",
                description: "notifications"
              }
            ]
          }
        ]
      },

      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials stop at usage."
          },
          {
            type: "paragraph",
            content: "Professional developers also understand performance implications."
          },
          {
            type: "paragraph",
            content: "When Context value changes:"
          },
          {
            type: "output",
            content: "value={user}"
          },
          {
            type: "paragraph",
            content: "Every consuming component re-renders."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Provider Updated", "→",
              "All Consumers Re-render"
            ]
          },
          {
            type: "paragraph",
            content: "This can become expensive."
          }
        ]
      },

      {
        heading: "Optimizing Context Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Split Contexts"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: "AppContext"
          },
          {
            type: "paragraph",
            content: "containing everything."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "UserContext",
              "ThemeContext",
              "CartContext"
            ]
          },
          {
            type: "paragraph",
            content: "Smaller updates. Fewer re-renders."
          },
          {
            type: "paragraph",
            content: "Memoize Values"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const value = useMemo(
  () => ({ user, setUser }),
  [user]
);`
          },
          {
            type: "paragraph",
            content: "Prevents unnecessary object recreation."
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
                answer: "Not every prop needs Context. Simple props are often better for component-to-component data passing."
              },
              {
                question: "Mistake 2: Creating One Massive Context",
                answer: "Bad: An `AppContext` containing User, Theme, Cart, Products, and Notifications. Split responsibilities into multiple Contexts."
              },
              {
                question: "Mistake 3: Forgetting Provider",
                answer: "Using `useContext()` without a `<Provider>` wrapping the component tree results in `undefined` or the default value."
              },
              {
                question: "Mistake 4: Storing Non-Shared Data",
                answer: "Local component state should remain local. Context is strictly for shared data."
              },
              {
                question: "Mistake 5: Ignoring Re-renders",
                answer: "Large Context values that change frequently can trigger excessive rendering in all consuming components."
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
                title: "Keep Context Focused",
                description: "One Context = One Responsibility."
              },
              {
                title: "Use Custom Hooks",
                description: "Instead of `useContext(UserContext)`, create a custom hook `useUser()`."
              },
              {
                title: "Combine Context With useReducer",
                description: "Common pattern: Context + useReducer. Used for scalable state management."
              },
              {
                title: "Avoid Context for Frequently Updating Data",
                description: "Examples: mousePosition, typingInput may cause excessive re-renders."
              },
              {
                title: "Place Providers Strategically",
                description: "Do not wrap the entire application unnecessarily. Keep Provider scope as small as possible."
              }
            ]
          }
        ]
      },

      {
        heading: "Real Industry Example",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications use Context for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication Context: currentUser, login(), logout()",
              "Theme Context: light, dark",
              "Settings Context: language, timezone, preferences"
            ]
          },
          {
            type: "paragraph",
            content: "Large companies often combine:"
          },
          {
            type: "output",
            content: [
              "Context API",
              "+",
              "Custom Hooks",
              "+",
              "useReducer"
            ]
          },
          {
            type: "paragraph",
            content: "for maintainable architecture."
          }
        ]
      },

      {
        heading: "Context API Evolution",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications evolve like this:"
          },
          {
            type: "flow",
            steps: [
              "Props", "→",
              "Prop Drilling", "→",
              "Context API", "→",
              "Context + Reducers", "→",
              "Advanced State Management"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding Context is a major milestone in becoming a professional React developer."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Context API provides a way to share data across components without manually passing props through every level."
          },
          {
            type: "paragraph",
            content: "Core concepts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "createContext()",
              "Provider",
              "useContext()"
            ]
          },
          {
            type: "paragraph",
            content: "Context solves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prop drilling",
              "Excessive prop forwarding",
              "Shared application state access"
            ]
          },
          {
            type: "paragraph",
            content: "Common use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication",
              "Themes",
              "Language settings",
              "Shopping carts",
              "Notifications"
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
              "Keep Context focused",
              "Split large contexts",
              "Use custom hooks",
              "Combine with useReducer when needed"
            ]
          },
          {
            type: "paragraph",
            content: "Context is one of the most important tools for building scalable React applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many developers think Context API is a state management solution like Redux. Technically, Context is not designed to manage state—it is designed to share state. The actual data is usually stored using useState or useReducer, while Context acts as the delivery mechanism that makes that data available throughout the component tree. Understanding this distinction helps developers design cleaner and more scalable React architectures."
          }
        ]
      }
    ]
  },
};

export default componentCommunication;