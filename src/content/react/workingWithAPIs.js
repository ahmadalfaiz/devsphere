const workingWithAPIs = {


/* ===========================
    First Topic : What is an API?
============================= */
    "an-api": {
    title: "What is an API?",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications rarely work alone."
          },
          {
            type: "paragraph",
            content: "When you open Instagram, it fetches posts from servers."
          },
          {
            type: "paragraph",
            content: "When you check the weather, weather data comes from a weather service."
          },
          {
            type: "paragraph",
            content: "When you shop online, product information comes from a database through a server."
          },
          {
            type: "paragraph",
            content: "When you log in to a website, your credentials are verified by a backend system."
          },
          {
            type: "paragraph",
            content: "All of these interactions happen through something called an **API**."
          },
          {
            type: "paragraph",
            content: "API is one of the most important concepts in modern web development."
          },
          {
            type: "paragraph",
            content: "Without APIs, React applications would be limited to displaying static information."
          },
          {
            type: "paragraph",
            content: "APIs allow React applications to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetch data from servers",
              "Send user information",
              "Store data in databases",
              "Authenticate users",
              "Upload files",
              "Process payments",
              "Communicate with external services"
            ]
          },
          {
            type: "paragraph",
            content: "Almost every real-world React application relies heavily on APIs."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What an API is",
              "Why APIs are needed",
              "How APIs work",
              "Request and Response concepts",
              "HTTP methods",
              "REST APIs",
              "JSON data",
              "APIs in React applications",
              "Public vs Private APIs",
              "API lifecycle",
              "Common API mistakes",
              "Industry best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you will clearly understand how React applications communicate with servers and external systems."
          }
        ]
      },

      {
        heading: "What Does API Stand For?",
        blocks: [
          {
            type: "paragraph",
            content: "API stands for:"
          },
          {
            type: "output",
            content: "Application Programming Interface"
          },
          {
            type: "paragraph",
            content: "The name sounds complicated, but the idea is simple."
          },
          {
            type: "paragraph",
            content: "An API acts as a **messenger** between two systems."
          },
          {
            type: "paragraph",
            content: "It allows one application to communicate with another application without knowing its internal implementation."
          },
          {
            type: "paragraph",
            content: "Think of an API as a bridge."
          },
          {
            type: "flow",
            steps: [
              "Application A", "→",
              "API", "→",
              "Application B"
            ]
          },
          {
            type: "paragraph",
            content: "The API handles communication between the two sides."
          }
        ]
      },

      {
        heading: "Real-Life Analogy: Restaurant",
        blocks: [
          {
            type: "paragraph",
            content: "The restaurant analogy is one of the easiest ways to understand APIs."
          },
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Waiter", "→",
              "Kitchen"
            ]
          },
          {
            type: "paragraph",
            content: "The customer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chooses food",
              "Places an order"
            ]
          },
          {
            type: "paragraph",
            content: "The waiter:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Takes the request",
              "Delivers it to the kitchen",
              "Brings back the response"
            ]
          },
          {
            type: "paragraph",
            content: "The kitchen:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Processes the request",
              "Prepares the food"
            ]
          },
          {
            type: "paragraph",
            content: "In this analogy:"
          },
          {
            type: "output",
            content: [
              "Customer = React App",
              "",
              "Waiter = API",
              "",
              "Kitchen = Server/Database"
            ]
          },
          {
            type: "paragraph",
            content: "The React application does not directly access the database."
          },
          {
            type: "paragraph",
            content: "Instead, it communicates through APIs."
          }
        ]
      },

      {
        heading: "Why APIs Are Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a React application trying to access a database directly."
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Security risks",
              "Database exposure",
              "Complex connections",
              "Lack of validation",
              "Difficult maintenance"
            ]
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "React App", "→",
              "API", "→",
              "Server", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The API becomes the controlled communication channel."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better security",
              "Easier maintenance",
              "Scalability",
              "Standardized communication",
              "Controlled access"
            ]
          }
        ]
      },

      {
        heading: "Where APIs Are Used",
        blocks: [
          {
            type: "paragraph",
            content: "APIs are everywhere."
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
                description: "Fetch Posts, Like Posts, Upload Images, Follow Users"
              },
              {
                title: "E-Commerce",
                description: "Fetch Products, Place Orders, Process Payments, Track Shipments"
              },
              {
                title: "Banking",
                description: "Transfer Money, Check Balance, Transaction History"
              },
              {
                title: "Weather Apps",
                description: "Get Temperature, Get Forecast, Get Humidity"
              },
              {
                title: "Maps",
                description: "Get Location, Get Routes, Calculate Distance"
              }
            ]
          },
          {
            type: "paragraph",
            content: "Almost every modern application depends on APIs."
          }
        ]
      },

      {
        heading: "Understanding Client and Server",
        blocks: [
          {
            type: "paragraph",
            content: "To understand APIs, you must understand:"
          },
          {
            type: "paragraph",
            content: "## Client"
          },
          {
            type: "paragraph",
            content: "The frontend application."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "React App",
              "Mobile App",
              "Website",
              "Desktop App"
            ]
          },
          {
            type: "paragraph",
            content: "## Server"
          },
          {
            type: "paragraph",
            content: "The backend application."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Node.js Server",
              "Express Server",
              "Django Server",
              "Spring Boot Server"
            ]
          },
          {
            type: "paragraph",
            content: "Communication:"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Request", "→",
              "Server", "→",
              "Response", "→",
              "Client"
            ]
          },
          {
            type: "paragraph",
            content: "This communication is the foundation of APIs."
          }
        ]
      },

      {
        heading: "What Is an API Request?",
        blocks: [
          {
            type: "paragraph",
            content: "A request is a message sent by the client."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Get all products"
          },
          {
            type: "paragraph",
            content: "The React application sends:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Example URL:"
          },
          {
            type: "output",
            content: "https://api.shop.com/products"
          },
          {
            type: "paragraph",
            content: "The server receives the request and processes it."
          }
        ]
      },

      {
        heading: "What Is an API Response?",
        blocks: [
          {
            type: "paragraph",
            content: "After processing the request, the server sends data back."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Phone"
  }
]`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "React App", "→",
              "Request", "→",
              "Server", "→",
              "Response", "→",
              "React App"
            ]
          },
          {
            type: "paragraph",
            content: "This response data is then displayed in the UI."
          }
        ]
      },

      {
        heading: "Understanding HTTP",
        blocks: [
          {
            type: "paragraph",
            content: "Most web APIs use:"
          },
          {
            type: "output",
            content: "HTTP"
          },
          {
            type: "paragraph",
            content: "which stands for:"
          },
          {
            type: "output",
            content: "HyperText Transfer Protocol"
          },
          {
            type: "paragraph",
            content: "HTTP defines how communication happens over the web."
          },
          {
            type: "paragraph",
            content: "Every API request uses HTTP."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `GET https://api.com/users`
          }
        ]
      },

      {
        heading: "HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content: "HTTP methods define what action should happen."
          },
          {
            type: "paragraph",
            content: "## GET"
          },
          {
            type: "paragraph",
            content: "Used to retrieve data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Give me product data."
          },
          {
            type: "paragraph",
            content: "## POST"
          },
          {
            type: "paragraph",
            content: "Used to create new data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Create a new user."
          },
          {
            type: "paragraph",
            content: "## PUT"
          },
          {
            type: "paragraph",
            content: "Used to update existing data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `PUT /users/1`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Update user 1."
          },
          {
            type: "paragraph",
            content: "## PATCH"
          },
          {
            type: "paragraph",
            content: "Used for partial updates."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `PATCH /users/1`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Update specific fields only."
          },
          {
            type: "paragraph",
            content: "## DELETE"
          },
          {
            type: "paragraph",
            content: "Used to remove data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "http",
            content: `DELETE /users/1`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Delete user 1."
          }
        ]
      },

      {
        heading: "REST APIs",
        blocks: [
          {
            type: "paragraph",
            content: "The most common APIs used with React are:"
          },
          {
            type: "output",
            content: "REST APIs"
          },
          {
            type: "paragraph",
            content: "REST stands for:"
          },
          {
            type: "output",
            content: "Representational State Transfer"
          },
          {
            type: "paragraph",
            content: "REST APIs use URLs and HTTP methods."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "GET    /users",
              "GET    /users/5",
              "POST   /users",
              "PUT    /users/5",
              "DELETE /users/5"
            ]
          },
          {
            type: "paragraph",
            content: "This predictable structure makes APIs easy to understand."
          }
        ]
      },

      {
        heading: "What Is JSON?",
        blocks: [
          {
            type: "paragraph",
            content: "Most APIs send data in:"
          },
          {
            type: "output",
            content: "JSON"
          },
          {
            type: "paragraph",
            content: "JSON stands for:"
          },
          {
            type: "output",
            content: "JavaScript Object Notation"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "John",
  "age": 25,
  "city": "New York"
}`
          },
          {
            type: "paragraph",
            content: "JSON is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lightweight",
              "Human-readable",
              "Easy for JavaScript to process"
            ]
          },
          {
            type: "paragraph",
            content: "Because React uses JavaScript, JSON is the perfect data format."
          }
        ]
      },

      {
        heading: "API Flow in a React Application",
        blocks: [
          {
            type: "paragraph",
            content: "A typical React API flow looks like:"
          },
          {
            type: "flow",
            steps: [
              "User Opens App", "→",
              "Component Mounts", "→",
              "API Request Sent", "→",
              "Server Processes Request", "→",
              "Response Received", "→",
              "State Updated", "→",
              "UI Re-renders"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Products Page", "→",
              "Fetch Products API", "→",
              "Receive Product Data", "→",
              "Display Products"
            ]
          },
          {
            type: "paragraph",
            content: "This cycle happens constantly in modern React applications."
          }
        ]
      },

      {
        heading: "Public APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Public APIs can be used by anyone."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Weather APIs",
              "Currency APIs",
              "News APIs",
              "Movie APIs"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "OpenWeather API",
              "TMDB API",
              "News API"
            ]
          },
          {
            type: "paragraph",
            content: "Developers use these APIs to add external functionality."
          }
        ]
      },

      {
        heading: "Private APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Private APIs require authorization."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Banking APIs",
              "Company APIs",
              "Internal Services",
              "Admin APIs"
            ]
          },
          {
            type: "paragraph",
            content: "Access is usually restricted using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tokens",
              "API Keys",
              "Authentication systems"
            ]
          }
        ]
      },

      {
        heading: "API Endpoints",
        blocks: [
          {
            type: "paragraph",
            content: "An endpoint is a specific API URL."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "https://api.shop.com/products"
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "output",
            content: "/products"
          },
          {
            type: "paragraph",
            content: "is the endpoint."
          },
          {
            type: "paragraph",
            content: "Other endpoints:"
          },
          {
            type: "output",
            content: [
              "/users",
              "/orders",
              "/profile",
              "/settings"
            ]
          },
          {
            type: "paragraph",
            content: "Each endpoint performs a specific task."
          }
        ]
      },

      {
        heading: "API Status Codes",
        blocks: [
          {
            type: "paragraph",
            content: "Servers return status codes to indicate results."
          },
          {
            type: "table",
            headers: ["Status Code", "Meaning"],
            rows: [
              ["200 OK", "Request Successful"],
              ["201 Created", "Resource Created"],
              ["400 Bad Request", "Invalid Request"],
              ["401 Unauthorized", "Authentication Required"],
              ["403 Forbidden", "Permission Denied"],
              ["404 Not Found", "Resource Not Found"],
              ["500 Internal Server Error", "Server Failure"]
            ]
          },
          {
            type: "paragraph",
            content: "Understanding status codes is critical for debugging APIs."
          }
        ]
      },

      {
        heading: "Authentication and APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Many APIs require authentication."
          },
          {
            type: "paragraph",
            content: "Example Login Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Login", "→",
              "Credentials Sent", "→",
              "Server Verifies", "→",
              "Token Generated", "→",
              "Token Stored", "→",
              "Future Requests Include Token"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents unauthorized access."
          }
        ]
      },

      {
        heading: "API Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "A professional API request often follows:"
          },
          {
            type: "flow",
            steps: [
              "Start Request", "→",
              "Show Loading", "→",
              "Receive Data", "→",
              "Update State", "→",
              "Render UI", "→",
              "Handle Errors"
            ]
          },
          {
            type: "paragraph",
            content: "Developers rarely think only about fetching data."
          },
          {
            type: "paragraph",
            content: "They also think about:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Loading states",
              "Error handling",
              "Empty states",
              "Retries"
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
                question: "Mistake 1: Assuming APIs Are Databases",
                answer: "Wrong: `API = Database`. Correct: `React → API → Server → Database`. API is only the communication layer."
              },
              {
                question: "Mistake 2: Ignoring Error Handling",
                answer: "Wrong: Only handle success. Always handle: Network failures, Server failures, Timeouts, Unauthorized access."
              },
              {
                question: "Mistake 3: Hardcoding Data",
                answer: "Beginners often use `const products = [...]` instead of fetching from APIs. Real applications use dynamic data."
              },
              {
                question: "Mistake 4: Fetching Too Frequently",
                answer: "Unnecessary API requests can slow applications, increase server load, and waste bandwidth."
              },
              {
                question: "Mistake 5: Exposing Secrets",
                answer: "Never expose API Keys, Private Tokens, or Passwords inside frontend code."
              }
            ]
          }
        ]
      },

      {
        heading: "Best Practices for API Usage",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✅ Keep API logic organized",
              "✅ Handle loading states",
              "✅ Handle errors properly",
              "✅ Validate responses",
              "✅ Secure authentication tokens",
              "✅ Avoid duplicate requests",
              "✅ Use environment variables for API URLs",
              "✅ Cache data when appropriate",
              "✅ Separate API code from UI code"
            ]
          }
        ]
      },

      {
        heading: "APIs and Modern React",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications use APIs for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication",
              "User profiles",
              "Product listings",
              "Search functionality",
              "Payments",
              "Chat systems",
              "Notifications",
              "Analytics"
            ]
          },
          {
            type: "paragraph",
            content: "Without APIs, most modern React applications would not be possible."
          }
        ]
      },

      {
        heading: "Something Most Tutorials Don't Explain",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think:"
          },
          {
            type: "output",
            content: "React Fetches Data"
          },
          {
            type: "paragraph",
            content: "But in reality:"
          },
          {
            type: "flow",
            steps: [
              "React", "→",
              "API Layer", "→",
              "Business Logic", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Large applications often introduce an **API service layer** between components and requests."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Component", "→",
              "UserService", "→",
              "API Request", "→",
              "Server"
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
              "Cleaner code",
              "Easier maintenance",
              "Reusable API logic",
              "Better testing"
            ]
          },
          {
            type: "paragraph",
            content: "This architecture becomes extremely important in professional projects and large codebases."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "An API (Application Programming Interface) is a communication bridge between applications."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "APIs allow React apps to communicate with servers",
              "APIs work through requests and responses",
              "HTTP powers most web APIs",
              "Common methods include GET, POST, PUT, PATCH, and DELETE",
              "REST APIs are the most widely used API style",
              "JSON is the most common API response format",
              "APIs power authentication, payments, products, messaging, and more",
              "Public APIs are open, while private APIs require authorization",
              "Status codes help identify request outcomes",
              "Professional applications rely heavily on API-driven architectures"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding APIs is one of the most important milestones in becoming a React developer because nearly every real-world React application communicates with external services through APIs."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most beginners think learning React means learning components and hooks. In reality, a huge portion of professional React development involves consuming APIs, handling asynchronous data, managing loading and error states, and transforming server responses into user-friendly interfaces. Mastering APIs often has a bigger impact on real-world application development than mastering JSX itself."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Fetch API
============================= */
    "fetch-api": {
    title: "Fetch API",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications constantly communicate with servers."
          },
          {
            type: "paragraph",
            content: "Whether you're displaying products from an e-commerce store, loading social media posts, fetching weather information, retrieving user profiles, or showing news articles, your React application needs a way to request data from external sources."
          },
          {
            type: "paragraph",
            content: "One of the most common ways to do this is through the Fetch API."
          },
          {
            type: "paragraph",
            content: "The Fetch API is a built-in JavaScript feature that allows applications to make HTTP requests and receive responses from servers."
          },
          {
            type: "paragraph",
            content: "Because Fetch is built directly into modern browsers, React developers can use it without installing additional libraries."
          },
          {
            type: "paragraph",
            content: "Examples of tasks performed using Fetch:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Loading products from an online store",
              "Fetching blog articles",
              "Retrieving user information",
              "Sending login credentials",
              "Posting comments",
              "Updating profile data",
              "Deleting records",
              "Uploading content to servers"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding Fetch is one of the most important skills for React developers because real-world applications rarely work with hardcoded data."
          },
          {
            type: "paragraph",
            content: "In this lesson, you will learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What the Fetch API is",
              "Why React applications use Fetch",
              "How Fetch works",
              "GET requests",
              "POST requests",
              "PUT requests",
              "PATCH requests",
              "DELETE requests",
              "Handling JSON data",
              "Error handling",
              "Loading states",
              "Async/Await with Fetch",
              "Common mistakes",
              "Industry best practices"
            ]
          },
          {
            type: "note",
            content: "By the end of this lesson, you'll be able to communicate with APIs confidently inside React applications."
          }
        ]
      },

      {
        heading: "What Is the Fetch API?",
        blocks: [
          {
            type: "paragraph",
            content: "The Fetch API is a browser-provided interface for making HTTP requests."
          },
          {
            type: "paragraph",
            content: "Basic syntax:"
          },
          {
            type: "output",
            content: "fetch(url)"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/users");`
          },
          {
            type: "paragraph",
            content: "This tells the browser:"
          },
          {
            type: "output",
            content: [
              "Send a request to the server",
              "and return the response."
            ]
          },
          {
            type: "paragraph",
            content: "The Fetch API returns a Promise."
          },
          {
            type: "paragraph",
            content: "Because server communication takes time, Fetch works asynchronously."
          }
        ]
      },

      {
        heading: "Why React Applications Use Fetch",
        blocks: [
          {
            type: "paragraph",
            content: "React components often need data that does not exist locally."
          },
          {
            type: "paragraph",
            content: "Consider an e-commerce application."
          },
          {
            type: "paragraph",
            content: "Without Fetch:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];`
          },
          {
            type: "paragraph",
            content: "This data is hardcoded."
          },
          {
            type: "paragraph",
            content: "Real applications use:"
          },
          {
            type: "flow",
            steps: [
              "React App", "→",
              "Fetch Request", "→",
              "Server", "→",
              "Database"
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
              "Dynamic data",
              "Real-time updates",
              "Better scalability",
              "Centralized data management",
              "Easier maintenance"
            ]
          }
        ]
      },

      {
        heading: "How Fetch Works",
        blocks: [
          {
            type: "paragraph",
            content: "A Fetch request follows this flow:"
          },
          {
            type: "flow",
            steps: [
              "React Component", "→",
              "fetch()", "→",
              "Server", "→",
              "Response", "→",
              "JavaScript Object", "→",
              "UI Update"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Load Products Page", "→",
              "Fetch Products API", "→",
              "Receive Product Data", "→",
              "Display Products"
            ]
          }
        ]
      },

      {
        heading: "Understanding Promises",
        blocks: [
          {
            type: "paragraph",
            content: "Fetch returns a Promise."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const result = fetch("https://api.example.com/users");`
          },
          {
            type: "paragraph",
            content: "The request does not complete immediately."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Request Sent", "→",
              "Waiting...", "→",
              "Response Arrives"
            ]
          },
          {
            type: "paragraph",
            content: "The Promise resolves once data is received."
          }
        ]
      },

      {
        heading: "Your First Fetch Request",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });`
          },
          {
            type: "paragraph",
            content: "Explanation:"
          },
          {
            type: "paragraph",
            content: "Step 1\nSend request:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://jsonplaceholder.typicode.com/users")`
          },
          {
            type: "paragraph",
            content: "Step 2\nConvert response to JSON:"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.json()`
          },
          {
            type: "paragraph",
            content: "Step 3\nAccess data:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(data);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `[
  {
    "id": 1,
    "name": "Leanne Graham"
  },
  {
    "id": 2,
    "name": "Ervin Howell"
  }
]`
          }
        ]
      },

      {
        heading: "Why response.json() Is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "The server sends data as a response object."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url)
  .then(response => {
    console.log(response);
  });`
          },
          {
            type: "paragraph",
            content: "This does not directly give the data."
          },
          {
            type: "paragraph",
            content: "You must convert it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.json()`
          },
          {
            type: "paragraph",
            content: "This transforms JSON into a JavaScript object."
          }
        ]
      },

      {
        heading: "Fetching Data in React",
        blocks: [
          {
            type: "paragraph",
            content: "The most common approach is using useEffect."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Component Mounts", "→",
              "Fetch Request", "→",
              "Receive Data", "→",
              "Update State", "→",
              "Re-render UI"
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the most common React patterns."
          }
        ]
      },

      {
        heading: "Using Async/Await with Fetch",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications typically use Async/Await."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "output",
            content: [
              ".then()",
              ".then()",
              ".then()"
            ]
          },
          {
            type: "paragraph",
            content: "Developers write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data);
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
          },
          {
            type: "paragraph",
            content: "Most professional codebases prefer Async/Await."
          }
        ]
      },

      {
        heading: "GET Requests",
        blocks: [
          {
            type: "paragraph",
            content: "GET retrieves data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/products");`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Give me products."
          },
          {
            type: "paragraph",
            content: "Used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Products",
              "Posts",
              "Comments",
              "Weather data"
            ]
          },
          {
            type: "paragraph",
            content: "GET is the most common request type."
          }
        ]
      },

      {
        heading: "POST Requests",
        blocks: [
          {
            type: "paragraph",
            content: "POST creates new data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    age: 25
  })
});`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Create a new user."
          },
          {
            type: "paragraph",
            content: "Common uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Registration",
              "Login",
              "Creating posts",
              "Adding comments"
            ]
          }
        ]
      },

      {
        heading: "PUT Requests",
        blocks: [
          {
            type: "paragraph",
            content: "PUT replaces existing data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John Updated"
  })
});`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Replace user 1 data."
          }
        ]
      },

      {
        heading: "PATCH Requests",
        blocks: [
          {
            type: "paragraph",
            content: "PATCH updates specific fields."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John Updated"
  })
});`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Update only the name field."
          },
          {
            type: "paragraph",
            content: "PATCH is often preferred over PUT."
          }
        ]
      },

      {
        heading: "DELETE Requests",
        blocks: [
          {
            type: "paragraph",
            content: "DELETE removes data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://api.example.com/users/1", {
  method: "DELETE"
});`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "output",
            content: "Delete user 1."
          },
          {
            type: "paragraph",
            content: "Common use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delete products",
              "Delete accounts",
              "Delete comments",
              "Delete messages"
            ]
          }
        ]
      },

      {
        heading: "Handling Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "API requests take time."
          },
          {
            type: "paragraph",
            content: "Bad UX:"
          },
          {
            type: "output",
            content: "Blank Screen"
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "output",
            content: "Loading..."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [loading, setLoading] = useState(true);`
          },
          {
            type: "paragraph",
            content: "After data arrives:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setLoading(false);`
          },
          {
            type: "paragraph",
            content: "Render:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <p>Loading...</p>;
}`
          },
          {
            type: "paragraph",
            content: "Professional applications always show loading states."
          }
        ]
      },

      {
        heading: "Handling Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Network requests can fail."
          },
          {
            type: "paragraph",
            content: "Possible reasons:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No internet",
              "Server down",
              "Invalid endpoint",
              "Timeout",
              "Authentication failure"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
  const response = await fetch(url);

  const data = await response.json();
}
catch(error) {
  console.log(error);
}`
          },
          {
            type: "paragraph",
            content: "Displaying errors improves user experience."
          }
        ]
      },

      {
        heading: "Checking Response Status",
        blocks: [
          {
            type: "paragraph",
            content: "Fetch does not automatically throw errors for bad status codes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(url);

if (!response.ok) {
  throw new Error("Request Failed");
}`
          },
          {
            type: "paragraph",
            content: "Always verify:"
          },
          {
            type: "output",
            content: "response.ok"
          },
          {
            type: "paragraph",
            content: "before processing data."
          }
        ]
      },

      {
        heading: "Complete Fetch Example",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      }
      catch(error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "This closely resembles production-level code."
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
                question: "Mistake 1: Forgetting response.json()",
                answer: "You must convert the response to JSON to get the data.",
                examples: [
                  {
                    title: "Wrong",
                    language: "javascript",
                    content: `const response = await fetch(url);\nconsole.log(response);`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `const data = await response.json();`
                  }
                ]
              },
              {
                question: "Mistake 2: Fetching Outside useEffect",
                answer: "Fetching directly inside the component body causes repeated requests (infinite loops).",
                examples: [
                  {
                    title: "Wrong",
                    language: "javascript",
                    content: `fetch(url); // inside component body`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `useEffect(() => {\n  fetch(url);\n}, []);`
                  }
                ]
              },
              {
                question: "Mistake 3: Ignoring Loading State",
                answer: "Users may think the application is broken when data takes time to load."
              },
              {
                question: "Mistake 4: Ignoring Errors",
                answer: "Always handle errors using `try/catch` or `.catch()`."
              },
              {
                question: "Mistake 5: Not Checking response.ok",
                answer: "Many beginners assume `fetch` succeeded when the server actually returned a 404, 500, or 401. Always verify response status."
              }
            ]
          }
        ]
      },

      {
        heading: "Fetch vs Axios",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers compare:"
          },
          {
            type: "output",
            content: "Fetch vs Axios"
          },
          {
            type: "comparison",
            leftTitle: "Fetch",
            leftItems: [
              "Built into browsers",
              "No installation required",
              "Lightweight"
            ],
            rightTitle: "Axios",
            rightItems: [
              "Simpler syntax",
              "Automatic JSON handling",
              "Better interceptors"
            ]
          },
          {
            type: "paragraph",
            content: "For beginners, learning Fetch first is highly recommended."
          }
        ]
      },

      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional React developers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use Async/Await",
              "Handle loading states",
              "Handle errors",
              "Check response status",
              "Separate API logic from UI logic",
              "Avoid duplicate requests",
              "Use environment variables for API URLs",
              "Cache data when necessary",
              "Keep API code organized"
            ]
          }
        ]
      },

      {
        heading: "Something Most Tutorials Don't Explain",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think Fetch is only about getting data."
          },
          {
            type: "paragraph",
            content: "Professional developers think about:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Caching",
              "Retries",
              "Rate Limits",
              "Pagination",
              "Authentication",
              "Request Cancellation",
              "Performance"
            ]
          },
          {
            type: "paragraph",
            content: "For example, large applications often cancel outdated requests:"
          },
          {
            type: "flow",
            steps: [
              "User Searches \"React\"", "→",
              "Request Sent"
            ]
          },
          {
            type: "flow",
            steps: [
              "User Searches \"React Router\"", "→",
              "New Request Sent"
            ]
          },
          {
            type: "output",
            content: "Old Request Cancelled"
          },
          {
            type: "paragraph",
            content: "This prevents outdated data from appearing."
          },
          {
            type: "paragraph",
            content: "Understanding request lifecycle management becomes extremely important as applications scale."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The Fetch API is the browser's built-in tool for communicating with servers."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetch sends HTTP requests",
              "Fetch returns Promises",
              "Response data is typically converted using response.json()",
              "Async/Await simplifies Fetch code",
              "GET retrieves data",
              "POST creates data",
              "PUT replaces data",
              "PATCH updates data",
              "DELETE removes data",
              "Loading states improve UX",
              "Error handling improves reliability",
              "Response status should always be checked",
              "Fetch is one of the most important tools in modern React development"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering Fetch is a major milestone because nearly every real-world React application depends on API communication."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Beginners often focus on displaying API data. Professional developers spend just as much time handling what happens when data doesn't arrive—loading states, error states, retries, authentication failures, request cancellation, and performance optimization. In production applications, managing API behavior is often more challenging than making the Fetch request itself."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Async and Await
============================= */
    "async-await": {
    title: "Async/Await",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications constantly perform asynchronous operations such as fetching API data, uploading files, authenticating users, loading dashboards, retrieving products, and sending form submissions."
          },
          {
            type: "paragraph",
            content: "To handle these operations efficiently, JavaScript provides Async/Await, one of the most important features every React developer must master."
          },
          {
            type: "paragraph",
            content: "Without Async/Await, asynchronous code can become difficult to read and maintain. With Async/Await, asynchronous operations look almost identical to normal synchronous code, making applications easier to understand and debug."
          }
        ]
      },

      {
        heading: "Why Do We Need Async/Await?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a React application fetching user information from a server."
          },
          {
            type: "paragraph",
            content: "The application sends a request and waits for a response."
          },
          {
            type: "paragraph",
            content: "This waiting period may take:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "100 milliseconds",
              "1 second",
              "5 seconds",
              "Even longer"
            ]
          },
          {
            type: "paragraph",
            content: "JavaScript cannot stop the entire application while waiting because that would freeze the UI."
          },
          {
            type: "paragraph",
            content: "Instead, JavaScript performs the operation asynchronously."
          }
        ]
      },

      {
        heading: "Understanding Synchronous vs Asynchronous Code",
        blocks: [
          {
            type: "paragraph",
            content: "Synchronous Code"
          },
          {
            type: "paragraph",
            content: "Synchronous code executes line by line."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

console.log("Middle");

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Start",
              "Middle",
              "End"
            ]
          },
          {
            type: "paragraph",
            content: "Each statement waits for the previous one to finish."
          },
          {
            type: "paragraph",
            content: "Asynchronous Code"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Inside Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "JavaScript does not wait for the timeout to finish."
          },
          {
            type: "paragraph",
            content: "It continues executing the remaining code."
          },
          {
            type: "paragraph",
            content: "This behavior is called asynchronous execution."
          }
        ]
      },

      {
        heading: "What is a Promise?",
        blocks: [
          {
            type: "paragraph",
            content: "Before understanding Async/Await, you must understand Promises."
          },
          {
            type: "paragraph",
            content: "A Promise represents a value that may become available in the future."
          },
          {
            type: "paragraph",
            content: "Think of a Promise as:"
          },
          {
            type: "quote",
            content: "\"I don't have the result yet, but I'll give it to you later.\""
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = fetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "The fetch request does not immediately return user data."
          },
          {
            type: "paragraph",
            content: "Instead, it returns a Promise."
          }
        ]
      },

      {
        heading: "Promise States",
        blocks: [
          {
            type: "paragraph",
            content: "A Promise can exist in three states."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "**Pending**: Operation is still running. (Request Sent → Waiting...)",
              "**Fulfilled**: Operation completed successfully. (Request Sent → Success)",
              "**Rejected**: Operation failed. (Request Sent → Error)"
            ]
          }
        ]
      },

      {
        heading: "Traditional Promise Syntax",
        blocks: [
          {
            type: "paragraph",
            content: "Before Async/Await, developers used `.then()`."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("/api/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });`
          },
          {
            type: "paragraph",
            content: "This works well for simple operations."
          },
          {
            type: "paragraph",
            content: "However, complex applications can create deeply nested Promise chains."
          }
        ]
      },

      {
        heading: "The Problem with Multiple .then()",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `fetch("/api/user")
  .then(user => {
    return fetch(\`/api/orders/\${user.id}\`);
  })
  .then(orders => {
    return fetch(\`/api/payments/\${orders.id}\`);
  })
  .then(payments => {
    console.log(payments);
  });`
          },
          {
            type: "paragraph",
            content: "As applications grow, readability decreases."
          },
          {
            type: "paragraph",
            content: "This problem led to Async/Await."
          }
        ]
      },

      {
        heading: "What is Async/Await?",
        blocks: [
          {
            type: "paragraph",
            content: "Async/Await is syntactic sugar built on top of Promises."
          },
          {
            type: "paragraph",
            content: "It allows developers to write asynchronous code that looks synchronous."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getUsers() {
  const response = await fetch("/api/users");

  const data = await response.json();

  console.log(data);
}`
          },
          {
            type: "paragraph",
            content: "This is significantly easier to read."
          }
        ]
      },

      {
        heading: "The async Keyword",
        blocks: [
          {
            type: "paragraph",
            content: "The `async` keyword converts a function into an asynchronous function."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function greet() {
  return "Hello";
}`
          },
          {
            type: "paragraph",
            content: "Even though a string is returned, JavaScript automatically wraps it inside a Promise."
          },
          {
            type: "paragraph",
            content: "Equivalent:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function greet() {
  return Promise.resolve("Hello");
}`
          }
        ]
      },

      {
        heading: "The await Keyword",
        blocks: [
          {
            type: "paragraph",
            content: "The `await` keyword pauses execution until a Promise resolves."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "JavaScript waits for the Promise result before continuing."
          },
          {
            type: "paragraph",
            content: "Without await:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = fetch("/api/users");

console.log(response);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Promise { <pending> }"
          },
          {
            type: "paragraph",
            content: "With await:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch("/api/users");

console.log(response);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Response Object"
          }
        ]
      },

      {
        heading: "Rules of await",
        blocks: [
          {
            type: "paragraph",
            content: "Await can only be used:"
          },
          {
            type: "paragraph",
            content: "Inside Async Functions"
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function loadData() {
  const data = await fetch("/api/users");
}`
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = await fetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "This produces an error."
          }
        ]
      },

      {
        heading: "Basic Async/Await Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  console.log(users);
}`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Send Request", "→",
              "Wait for Response", "→",
              "Convert JSON", "→",
              "Display Data"
            ]
          }
        ]
      },

      {
        heading: "Async/Await in React",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common React use cases is API fetching."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect } from "react";

function Users() {
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      console.log(data);
    }

    fetchUsers();
  }, []);

  return <h1>Users</h1>;
}`
          }
        ]
      },

      {
        heading: "Why Not Make useEffect Async?",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "jsx",
            content: `useEffect(async () => {
  const response = await fetch("/api/users");
}, []);`
          },
          {
            type: "paragraph",
            content: "React does not allow async callback functions directly inside useEffect."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "jsx",
            content: `useEffect(() => {
  async function fetchData() {
    const response = await fetch("/api/users");
  }

  fetchData();
}, []);`
          },
          {
            type: "paragraph",
            content: "This is the recommended pattern."
          }
        ]
      },

      {
        heading: "Handling Errors with try...catch",
        blocks: [
          {
            type: "paragraph",
            content: "API requests can fail."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Internet disconnected",
              "Server offline",
              "Invalid endpoint",
              "Timeout",
              "Permission denied"
            ]
          },
          {
            type: "paragraph",
            content: "Always handle errors."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function fetchUsers() {
  try {
    const response = await fetch("/api/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`
          }
        ]
      },

      {
        heading: "Complete React Example",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}`
          }
        ]
      },

      {
        heading: "Multiple Await Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Operations can be performed sequentially."
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getData() {
  const user = await fetch("/api/user");

  const orders = await fetch("/api/orders");

  const payments = await fetch("/api/payments");
}`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "User Request", "→",
              "Orders Request", "→",
              "Payments Request"
            ]
          },
          {
            type: "paragraph",
            content: "Each request waits for the previous one."
          }
        ]
      },

      {
        heading: "Performance Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes requests are independent."
          },
          {
            type: "paragraph",
            content: "Sequential execution becomes slow."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await fetch("/api/users");

const products = await fetch("/api/products");

const orders = await fetch("/api/orders");`
          },
          {
            type: "paragraph",
            content: "Total time:"
          },
          {
            type: "output",
            content: "1 sec + 1 sec + 1 sec = 3 sec"
          }
        ]
      },

      {
        heading: "Parallel Execution with Promise.all()",
        blocks: [
          {
            type: "paragraph",
            content: "Better approach:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [users, products, orders] =
  await Promise.all([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
  ]);`
          },
          {
            type: "paragraph",
            content: "Now all requests start together."
          },
          {
            type: "paragraph",
            content: "Total time:"
          },
          {
            type: "output",
            content: "1 second"
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "output",
            content: "3 seconds"
          },
          {
            type: "paragraph",
            content: "This optimization is often missing from beginner tutorials but is heavily used in production React applications."
          }
        ]
      },

      {
        heading: "Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "Users should know that data is loading."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [loading, setLoading] =
  useState(true);`
          },
          {
            type: "paragraph",
            content: "Fetching:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
  const response = await fetch("/api/users");

  const data = await response.json();

  setUsers(data);
}
finally {
  setLoading(false);
}`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <h2>Loading...</h2>;
}`
          },
          {
            type: "paragraph",
            content: "This improves user experience significantly."
          }
        ]
      },

      {
        heading: "Common Async/Await Mistakes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Mistake 1: Forgetting await",
                answer: "Incorrect: `const data = response.json();` Correct: `const data = await response.json();`"
              },
              {
                question: "Mistake 2: Missing Error Handling",
                answer: "Incorrect: Not wrapping the request in a try/catch. Correct: `try { const response = await fetch(\"/api/users\"); } catch(error) { console.error(error); }`"
              },
              {
                question: "Mistake 3: Making useEffect Async",
                answer: "Incorrect: `useEffect(async () => {});` Correct: `useEffect(() => { async function loadData() {} loadData(); }, []);`"
              },
              {
                question: "Mistake 4: Sequential Requests When Parallel Is Possible",
                answer: "Slow: `await fetch(\"/api/a\"); await fetch(\"/api/b\");` Fast: `await Promise.all([fetch(\"/api/a\"), fetch(\"/api/b\")]);`"
              }
            ]
          }
        ]
      },

      {
        heading: "When Should You Use Async/Await?",
        blocks: [
          {
            type: "paragraph",
            content: "Common React scenarios include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetching API data",
              "Login systems",
              "Registration forms",
              "Dashboard data loading",
              "Product retrieval",
              "File uploads",
              "Payment processing",
              "Database operations",
              "Authentication verification"
            ]
          },
          {
            type: "paragraph",
            content: "Whenever a Promise is involved, Async/Await is usually the preferred approach."
          }
        ]
      },

      {
        heading: "Async/Await vs Then()",
        blocks: [
          {
            type: "comparison",
            leftTitle: "Then()",
            leftItems: [
              "`fetch(\"/api/users\")`",
              "`  .then(response => response.json())`",
              "`  .then(data => console.log(data));`"
            ],
            rightTitle: "Async/Await",
            rightItems: [
              "`const response = await fetch(\"/api/users\");`",
              "`const data = await response.json();`",
              "`console.log(data);`"
            ]
          },
          {
            type: "paragraph",
            content: "Most developers find Async/Await more readable and easier to maintain."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Async/Await is a modern JavaScript feature that simplifies asynchronous programming. It is built on top of Promises and allows developers to write cleaner, more readable code when working with APIs, timers, database requests, file uploads, and other asynchronous operations."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Async functions always return Promises",
              "Await pauses execution until a Promise resolves",
              "Async/Await improves readability over .then()",
              "Error handling is done using try...catch",
              "React commonly uses Async/Await inside useEffect",
              "Promise.all() can dramatically improve performance",
              "Loading and error states are critical in real applications",
              "Async/Await is one of the most frequently used features in modern React development"
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most beginner tutorials teach Async/Await only as a replacement for .then(). Professional React developers use Async/Await together with loading states, error states, request cancellation, and Promise.all() optimization. Knowing when to run operations sequentially and when to run them in parallel is often more important than simply knowing the syntax itself."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Loading States
============================= */
    "loading-states": {
    title: "Loading States",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications rarely display all data instantly. Most applications need to fetch data from servers, load images, process requests, or download resources before displaying content."
          },
          {
            type: "paragraph",
            content: "During this waiting period, users need feedback that something is happening."
          },
          {
            type: "paragraph",
            content: "This feedback is called a Loading State."
          },
          {
            type: "paragraph",
            content: "A well-designed loading state improves user experience, reduces confusion, and makes applications feel faster and more professional."
          }
        ]
      },

      {
        heading: "What is a Loading State?",
        blocks: [
          {
            type: "paragraph",
            content: "A Loading State is a temporary UI displayed while an application is waiting for an asynchronous operation to complete."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetching API data",
              "Loading user profiles",
              "Submitting forms",
              "Uploading files",
              "Downloading reports",
              "Loading lazy-loaded components"
            ]
          },
          {
            type: "paragraph",
            content: "Without loading states, users may think the application is broken."
          }
        ]
      },

      {
        heading: "Why Loading States Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine clicking a button and seeing nothing happen for five seconds."
          },
          {
            type: "paragraph",
            content: "Users often assume:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The application froze",
              "The click didn't work",
              "The server is down"
            ]
          },
          {
            type: "paragraph",
            content: "Loading indicators solve this problem by communicating:"
          },
          {
            type: "output",
            content: "\"The application is working. Please wait.\""
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Better user experience",
              "Reduced user frustration",
              "Higher perceived performance",
              "Improved accessibility",
              "More professional applications"
            ]
          }
        ]
      },

      {
        heading: "The Simplest Loading State",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications start with a boolean state."
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
          },
          {
            type: "paragraph",
            content: "Output while data loads:"
          },
          {
            type: "output",
            content: "Loading..."
          },
          {
            type: "paragraph",
            content: "Output after data arrives:"
          },
          {
            type: "output",
            content: [
              "John",
              "Sarah",
              "David",
              "Emily"
            ]
          }
        ]
      },

      {
        heading: "Understanding the Loading Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Most loading states follow this sequence:"
          },
          {
            type: "flow",
            steps: [
              "Component Mounts", "→",
              "Loading = true", "→",
              "Start API Request", "→",
              "Receive Data", "→",
              "Update State", "→",
              "Loading = false", "→",
              "Render Content"
            ]
          },
          {
            type: "paragraph",
            content: "This pattern appears in almost every React application."
          }
        ]
      },

      {
        heading: "Using Async/Await With Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers prefer async/await because it improves readability."
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {
  async function fetchUsers() {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  fetchUsers();
}, []);`
          },
          {
            type: "paragraph",
            content: "The finally block ensures loading ends even if an error occurs."
          }
        ]
      },

      {
        heading: "Conditional Rendering for Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "React commonly uses conditional rendering to switch between UI states."
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <p>Loading data...</p>;
}

return <Dashboard />;`
          },
          {
            type: "paragraph",
            content: "Alternative:"
          },
          {
            type: "code",
            language: "jsx",
            content: `return (
  <>
    {loading ? (
      <p>Loading data...</p>
    ) : (
      <Dashboard />
    )}
  </>
);`
          },
          {
            type: "paragraph",
            content: "Both approaches are valid."
          }
        ]
      },

      {
        heading: "Loading Spinner Example",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of plain text, many applications use spinners."
          },
          {
            type: "code",
            language: "jsx",
            content: `function Loader() {
  return (
    <div className="spinner">
      Loading...
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
            content: `{loading && <Loader />}`
          },
          {
            type: "paragraph",
            content: "Common spinner types:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Circular spinner",
              "Rotating icon",
              "Progress wheel",
              "Animated dots"
            ]
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Loading...",
              "Loading.",
              "Loading..",
              "Loading...",
              "⏳ Loading...",
              "🔄 Loading..."
            ]
          }
        ]
      },

      {
        heading: "Skeleton Loading Screens",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications often use skeleton screens instead of spinners."
          },
          {
            type: "paragraph",
            content: "Instead of showing:"
          },
          {
            type: "output",
            content: "Loading..."
          },
          {
            type: "paragraph",
            content: "They display a placeholder resembling the final content."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "████████████████",
              "██████",
              "██████████"
            ]
          },
          {
            type: "paragraph",
            content: "When data arrives:"
          },
          {
            type: "output",
            content: [
              "John Doe",
              "Software Engineer",
              "New York"
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
              "Better perceived performance",
              "Reduced layout shifting",
              "More professional appearance"
            ]
          },
          {
            type: "paragraph",
            content: "Popular libraries:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "react-loading-skeleton",
              "Material UI Skeleton",
              "Chakra UI Skeleton"
            ]
          }
        ]
      },

      {
        heading: "Loading State During Form Submission",
        blocks: [
          {
            type: "paragraph",
            content: "Loading states are not only for fetching data. They are also important during form submission."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [loading, setLoading] = useState(false);

async function handleSubmit() {
  setLoading(true);

  await saveUser();

  setLoading(false);
}`
          },
          {
            type: "paragraph",
            content: "Button:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button disabled={loading}>
  {loading ? "Saving..." : "Save"}
</button>`
          },
          {
            type: "paragraph",
            content: "Output:\nBefore submission:"
          },
          {
            type: "output",
            content: "Save"
          },
          {
            type: "paragraph",
            content: "During submission:"
          },
          {
            type: "output",
            content: "Saving..."
          }
        ]
      },

      {
        heading: "Disabling UI During Loading",
        blocks: [
          {
            type: "paragraph",
            content: "A common professional practice is disabling controls while requests are active."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button disabled={loading}>
  Submit
</button>`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prevents duplicate requests",
              "Prevents accidental double-clicks",
              "Improves data consistency"
            ]
          }
        ]
      },

      {
        heading: "Handling Multiple Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often have several loading operations."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [usersLoading, setUsersLoading] = useState(true);
const [postsLoading, setPostsLoading] = useState(true);
const [commentsLoading, setCommentsLoading] = useState(true);`
          },
          {
            type: "paragraph",
            content: "Each section can load independently."
          },
          {
            type: "output",
            content: [
              "Users Loaded",
              "Posts Loading...",
              "Comments Loaded"
            ]
          },
          {
            type: "paragraph",
            content: "This provides a faster user experience than waiting for everything."
          }
        ]
      },

      {
        heading: "Loading States With React Suspense",
        blocks: [
          {
            type: "paragraph",
            content: "React provides a built-in mechanism called Suspense."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { Suspense } from "react";

<Suspense fallback={<h2>Loading...</h2>}>
  <Dashboard />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "Fallback UI appears while the component loads."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Load Component", "→",
              "Show Fallback", "→",
              "Component Ready", "→",
              "Render Component"
            ]
          },
          {
            type: "paragraph",
            content: "Suspense is heavily used with lazy loading."
          }
        ]
      },

      {
        heading: "Lazy Loading Components",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often split code into smaller chunks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { lazy, Suspense } from "react";

const Dashboard = lazy(() =>
  import("./Dashboard")
);`
          },
          {
            type: "paragraph",
            content: "Render:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Suspense fallback={<p>Loading Dashboard...</p>}>
  <Dashboard />
</Suspense>`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster initial load",
              "Smaller bundle size",
              "Better performance"
            ]
          }
        ]
      },

      {
        heading: "Loading States vs Error States",
        blocks: [
          {
            type: "paragraph",
            content: "Loading is only one possible state. A professional application usually handles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Loading",
              "Success",
              "Error",
              "Empty Data"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Something went wrong.</p>;
}

if (users.length === 0) {
  return <p>No users found.</p>;
}`
          },
          {
            type: "paragraph",
            content: "This prevents confusing user experiences."
          }
        ]
      },

      {
        heading: "Loading State Best Practices",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "1. Always Show Feedback",
                description: "Bad: User clicks button -> Nothing happens. Good: User clicks button -> Loading..."
              },
              {
                title: "2. Disable Repeated Actions",
                description: "Bad: Click Submit -> Click Submit Again -> Click Submit Again. Good: `<button disabled={loading}>`"
              },
              {
                title: "3. Use Skeleton Screens For Large Content",
                description: "Instead of \"Loading...\", show structural placeholders to reduce layout shifts."
              },
              {
                title: "4. Handle Errors",
                description: "Never assume requests always succeed. Always prepare for: Network failure, Server error, Timeout, Invalid response."
              },
              {
                title: "5. Keep Loading Indicators Consistent",
                description: "Use the same style throughout the application. Example: All pages use skeletons instead of mixing Spinners, Text, and Progress Bars randomly."
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
                question: "Mistake 1: Forgetting to Turn Loading Off",
                answer: "Incorrect: `setLoading(true); await fetchUsers();`. Loading never ends. Correct: Ensure `setLoading(false);` is called after data is fetched."
              },
              {
                question: "Mistake 2: Not Handling Errors",
                answer: "Incorrect: `await fetchUsers(); setLoading(false);`. If fetch fails, the app might show \"Loading...\" forever. Correct: Wrap in a `try...catch...finally` block."
              },
              {
                question: "Mistake 3: Showing Blank Screens",
                answer: "Incorrect: `return null;` while loading. Users see nothing and assume the app is broken. Correct: `return <p>Loading...</p>;`"
              },
              {
                question: "Mistake 4: One Global Loading State For Everything",
                answer: "Bad: Entire page waits for all requests to finish. Better: Each section loads independently, allowing users to interact with parts of the UI sooner."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples of Loading States",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Social Media Apps",
                description: "Loading posts..."
              },
              {
                title: "E-Commerce Sites",
                description: "Loading products..."
              },
              {
                title: "Banking Applications",
                description: "Processing transaction..."
              },
              {
                title: "Dashboard Applications",
                description: "Loading analytics..."
              },
              {
                title: "Chat Applications",
                description: "Connecting..."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Every modern application relies heavily on loading states."
          }
        ]
      },

      {
        heading: "Performance Insight",
        blocks: [
          {
            type: "paragraph",
            content: "An important concept many tutorials skip is: **Users care more about perceived speed than actual speed.**"
          },
          {
            type: "paragraph",
            content: "A page loading in 3 seconds with a skeleton screen often feels faster than a page loading in 2 seconds with a blank white screen."
          },
          {
            type: "paragraph",
            content: "Good loading states improve perceived performance even when actual performance remains unchanged."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Loading States help users understand that the application is actively working on a task."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What loading states are",
              "Why loading states matter",
              "Managing loading with useState",
              "Conditional rendering",
              "Async/Await loading patterns",
              "Form submission loading",
              "Disabling controls during requests",
              "Skeleton screens",
              "Suspense fallback UI",
              "Lazy loading components",
              "Loading vs error vs empty states",
              "Loading best practices",
              "Common mistakes to avoid"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering loading states is essential because almost every React application interacts with asynchronous data, APIs, forms, or lazy-loaded components. Professional applications use loading states not just to indicate progress, but to create a smoother and more trustworthy user experience."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A poorly managed loading experience—such as a jarring visual layout jump or a spinner that flashes for a split second—increases user cognitive load and can introduce Cumulative Layout Shift (CLS). By optimizing your loading states (like using skeleton loaders with pre-defined heights), you dramatically improve perceived performance and keep your interface structurally stable while data is fetching."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Error Handling
============================= */
    "error-handling": {
    title: "Error Handling",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As applications grow, errors become inevitable."
          },
          {
            type: "paragraph",
            content: "A network request may fail. A user may enter invalid data. An API might return unexpected results. A component could crash because of a programming mistake."
          },
          {
            type: "paragraph",
            content: "Professional React applications are not judged by whether errors occur. They are judged by how gracefully they handle those errors."
          },
          {
            type: "paragraph",
            content: "Error Handling is the process of detecting, managing, displaying, logging, and recovering from errors without breaking the entire application."
          },
          {
            type: "paragraph",
            content: "A well-designed error handling strategy improves:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User experience",
              "Application stability",
              "Debugging efficiency",
              "Reliability",
              "Maintainability"
            ]
          }
        ]
      },

      {
        heading: "What is Error Handling?",
        blocks: [
          {
            type: "paragraph",
            content: "Error Handling refers to the techniques used to manage unexpected situations in an application."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "output",
            content: [
              "Application Crashed",
              "White Screen",
              "User Confused"
            ]
          },
          {
            type: "paragraph",
            content: "A good application shows:"
          },
          {
            type: "output",
            content: [
              "Something went wrong.",
              "Please try again."
            ]
          },
          {
            type: "paragraph",
            content: "while logging useful information for developers."
          }
        ]
      },

      {
        heading: "Why Error Handling Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce website."
          },
          {
            type: "paragraph",
            content: "A product API fails."
          },
          {
            type: "paragraph",
            content: "Without error handling:"
          },
          {
            type: "output",
            content: "Blank page"
          },
          {
            type: "paragraph",
            content: "With error handling:"
          },
          {
            type: "output",
            content: [
              "Unable to load products.",
              "Please try again later."
            ]
          },
          {
            type: "paragraph",
            content: "The second experience is significantly better."
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prevents application crashes",
              "Improves user trust",
              "Makes debugging easier",
              "Reduces downtime",
              "Creates professional applications"
            ]
          }
        ]
      },

      {
        heading: "Types of Errors in React",
        blocks: [
          {
            type: "paragraph",
            content: "React applications commonly face several categories of errors."
          },
          {
            type: "paragraph",
            content: "**1. Syntax Errors**"
          },
          {
            type: "paragraph",
            content: "These occur during development."
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
    <h1>Hello
  );
}`
          },
          {
            type: "paragraph",
            content: "Missing tags or brackets cause compilation failures."
          },
          {
            type: "output",
            content: "Compilation Failed"
          },
          {
            type: "paragraph",
            content: "React immediately reports these errors."
          },
          {
            type: "paragraph",
            content: "**2. Runtime Errors**"
          },
          {
            type: "paragraph",
            content: "These occur while the application is running."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = null;

return (
  <h1>{user.name}</h1>
);`
          },
          {
            type: "output",
            content: "Cannot read properties of null"
          },
          {
            type: "paragraph",
            content: "The application crashes during execution."
          },
          {
            type: "paragraph",
            content: "**3. API Errors**"
          },
          {
            type: "paragraph",
            content: "These occur when external requests fail."
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "Possible failures:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Network disconnected",
              "Server unavailable",
              "Invalid response",
              "Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "These are among the most common real-world errors."
          },
          {
            type: "paragraph",
            content: "**4. Validation Errors**"
          },
          {
            type: "paragraph",
            content: "These occur when user input is incorrect."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Invalid Email",
              "Password Too Short",
              "Required Field Missing"
            ]
          },
          {
            type: "paragraph",
            content: "Validation errors should guide users instead of crashing the application."
          },
          {
            type: "paragraph",
            content: "**5. Logical Errors**"
          },
          {
            type: "paragraph",
            content: "The code runs successfully but produces incorrect results."
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = price - quantity;`
          },
          {
            type: "paragraph",
            content: "when the intended calculation was:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const total = price * quantity;`
          },
          {
            type: "paragraph",
            content: "These errors are often harder to detect."
          }
        ]
      },

      {
        heading: "Handling Errors with try...catch",
        blocks: [
          {
            type: "paragraph",
            content: "JavaScript provides a built-in mechanism called:"
          },
          {
            type: "output",
            content: "try...catch"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
  const data = JSON.parse(jsonString);
}
catch(error) {
  console.log(error);
}`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Execute Code", "→",
              "Error Occurs?", "→",
              "Yes", "→",
              "Catch Block Runs"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents the application from crashing."
          }
        ]
      },

      {
        heading: "Error Handling in Async Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Most React applications interact with APIs."
          },
          {
            type: "paragraph",
            content: "API requests should always include error handling."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function fetchUsers() {
  try {
    const response = await fetch("/api/users");

    const data = await response.json();

    setUsers(data);
  }
  catch(error) {
    console.error(error);
  }
}`
          },
          {
            type: "paragraph",
            content: "Without try-catch:"
          },
          {
            type: "flow",
            steps: [
              "API Failure", "→",
              "Unhandled Error", "→",
              "Broken UI"
            ]
          }
        ]
      },

      {
        heading: "Displaying Error Messages to Users",
        blocks: [
          {
            type: "paragraph",
            content: "Logging errors is useful for developers. Displaying meaningful messages is useful for users."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `const [error, setError] = useState("");
try {
  const response = await fetch("/api/users");
}
catch(error) {
  setError("Failed to load users.");
}`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{error && <p>{error}</p>}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Failed to load users."
          },
          {
            type: "paragraph",
            content: "This is much better than a broken screen."
          }
        ]
      },

      {
        heading: "Managing Loading and Error States Together",
        blocks: [
          {
            type: "paragraph",
            content: "Professional applications usually manage: Loading State, Success State, Error State."
          },
          {
            type: "code",
            language: "javascript",
            content: `const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [users, setUsers] = useState([]);`
          },
          {
            type: "paragraph",
            content: "Rendering:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>{error}</p>;
}

return <UserList />;`
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Loading", "→",
              "Success OR Error"
            ]
          }
        ]
      },

      {
        heading: "Understanding Error Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "One of React's most important error-handling features is:"
          },
          {
            type: "output",
            content: "Error Boundaries"
          },
          {
            type: "paragraph",
            content: "Error Boundaries catch rendering errors inside component trees."
          },
          {
            type: "paragraph",
            content: "Without Error Boundary:"
          },
          {
            type: "flow",
            steps: [
              "One Component Crashes", "→",
              "Entire App Crashes"
            ]
          },
          {
            type: "paragraph",
            content: "With Error Boundary:"
          },
          {
            type: "flow",
            steps: [
              "One Component Crashes", "→",
              "Fallback UI Appears", "→",
              "Rest of App Continues"
            ]
          }
        ]
      },

      {
        heading: "What Errors Can Error Boundaries Catch?",
        blocks: [
          {
            type: "paragraph",
            content: "Error Boundaries catch:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✅ Rendering errors",
              "✅ Lifecycle method errors",
              "✅ Constructor errors"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<UserProfile />`
          },
          {
            type: "paragraph",
            content: "If UserProfile crashes:"
          },
          {
            type: "output",
            content: "Something went wrong."
          },
          {
            type: "paragraph",
            content: "can be displayed instead."
          }
        ]
      },

      {
        heading: "Creating an Error Boundary",
        blocks: [
          {
            type: "paragraph",
            content: "Error Boundaries are currently implemented using Class Components."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>`
          }
        ]
      },

      {
        heading: "What Error Boundaries Cannot Catch",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials skip this important limitation."
          },
          {
            type: "paragraph",
            content: "Error Boundaries do NOT catch:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Event Handler Errors",
              "❌ Async Errors",
              "❌ setTimeout Errors",
              "❌ Promise Rejections",
              "❌ Server-Side Rendering Errors"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `button.onclick = () => {
  throw new Error();
}`
          },
          {
            type: "paragraph",
            content: "Error Boundary will not catch this."
          }
        ]
      },

      {
        heading: "Handling Event Handler Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Use try-catch manually."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleClick() {
  try {
    riskyOperation();
  }
  catch(error) {
    console.error(error);
  }
}`
          },
          {
            type: "paragraph",
            content: "This is the recommended approach."
          }
        ]
      },

      {
        heading: "Handling Promise Rejections",
        blocks: [
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("/api/users");`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("/api/users")
  .catch(error => {
    console.error(error);
  });`
          },
          {
            type: "paragraph",
            content: "Or using Async/Await:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
  await fetch("/api/users");
}
catch(error) {
  console.error(error);
}`
          }
        ]
      },

      {
        heading: "Logging Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often log errors to monitoring services."
          },
          {
            type: "paragraph",
            content: "Examples: Sentry, LogRocket, Datadog, New Relic."
          },
          {
            type: "paragraph",
            content: "Instead of just knowing an error happened, developers receive:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Error message",
              "Component name",
              "User session",
              "Browser details",
              "Stack trace"
            ]
          },
          {
            type: "paragraph",
            content: "This makes debugging much easier."
          }
        ]
      },

      {
        heading: "Error Recovery",
        blocks: [
          {
            type: "paragraph",
            content: "A highly underrated concept is: Recovery."
          },
          {
            type: "paragraph",
            content: "Good applications allow users to recover."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Failed to load data. [Retry]"
          },
          {
            type: "paragraph",
            content: "Retry button:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<button onClick={fetchUsers}>
  Retry
</button>`
          },
          {
            type: "paragraph",
            content: "Users should not be forced to refresh the entire application."
          }
        ]
      },

      {
        heading: "Defensive Programming",
        blocks: [
          {
            type: "paragraph",
            content: "Professional developers write code assuming data might be missing."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>{user.name}</h1>`
          },
          {
            type: "paragraph",
            content: "If user is null: Crash."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1>{user?.name}</h1>`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "undefined"
          },
          {
            type: "paragraph",
            content: "instead of Application Crashed."
          }
        ]
      },

      {
        heading: "Optional Chaining",
        blocks: [
          {
            type: "paragraph",
            content: "React applications heavily use `?.`."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `user?.profile?.email`
          },
          {
            type: "paragraph",
            content: "Without it, `user.profile.email` may crash when profile is undefined. Optional chaining is one of the simplest ways to reduce runtime errors."
          }
        ]
      },

      {
        heading: "Null Checks",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `if (!user) {
  return <p>No user found.</p>;
}`
          },
          {
            type: "paragraph",
            content: "Instead of crashing with `Cannot read properties of null`, users receive meaningful feedback."
          }
        ]
      },

      {
        heading: "Error Handling for Forms",
        blocks: [
          {
            type: "paragraph",
            content: "Forms should validate data before submission."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!email.includes("@")) {
  setError("Invalid email address");
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "Invalid email address"
          },
          {
            type: "paragraph",
            content: "instead of: Server Error. Validation catches problems earlier."
          }
        ]
      },

      {
        heading: "Error Handling Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Professional applications typically follow:"
          },
          {
            type: "flow",
            steps: [
              "Error Occurs", "→",
              "Catch Error", "→",
              "Log Error", "→",
              "Show Friendly Message", "→",
              "Provide Recovery Option"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a much smoother user experience."
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
                question: "Mistake 1: Ignoring Errors",
                answer: "Awaiting fetch without a try/catch block will cause unhandled rejections.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `await fetch("/api/users");`
                  },
                  {
                    title: "Good",
                    language: "javascript",
                    content: `try {\n  await fetch("/api/users");\n} catch(error) {\n  console.error(error);\n}`
                  }
                ]
              },
              {
                question: "Mistake 2: Showing Raw Error Messages",
                answer: "Bad: `TypeError: Cannot read property x of undefined`. Users don't understand this. Better: `Unable to load profile information.`"
              },
              {
                question: "Mistake 3: No Fallback UI",
                answer: "Bad: Blank Screen. Good: `Something went wrong. Please refresh the page.`"
              },
              {
                question: "Mistake 4: Forgetting Loading States",
                answer: "Bad: User waits forever with a frozen UI. Good: `Loading...` followed by Success OR Error."
              },
              {
                question: "Mistake 5: Assuming API Calls Always Succeed",
                answer: "Fetch will not throw an error on 404 or 500 status codes automatically.",
                examples: [
                  {
                    title: "Good",
                    language: "javascript",
                    content: `if (!response.ok) {\n  throw new Error("Request Failed");\n}`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "E-Commerce",
                description: "Unable to load products."
              },
              {
                title: "Banking",
                description: "Transaction failed. Please try again."
              },
              {
                title: "Social Media",
                description: "Could not load posts."
              },
              {
                title: "Dashboard",
                description: "Analytics temporarily unavailable."
              }
            ]
          },
          {
            type: "paragraph",
            content: "Every large React application contains hundreds of error-handling scenarios."
          }
        ]
      },

      {
        heading: "Advanced Insight: Error Prevention vs Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials focus only on catching errors. Professional developers focus on Preventing Errors."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Input validation",
              "Optional chaining",
              "TypeScript",
              "Defensive coding",
              "Null checks",
              "API response validation"
            ]
          },
          {
            type: "paragraph",
            content: "The best error is the one that never occurs."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Error Handling is one of the most important skills in React development."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What error handling is",
              "Types of React errors (Runtime, API, Validation, Logical, Syntax)",
              "try-catch blocks",
              "Async error handling",
              "Error messages",
              "Loading + error states",
              "Error Boundaries",
              "Error recovery",
              "Optional chaining & Defensive programming",
              "Logging and monitoring",
              "Common mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "A professional React application is not defined by the absence of errors. It is defined by how gracefully it handles failures. Well-designed error handling keeps applications stable, protects the user experience, simplifies debugging, and ensures that small problems never become catastrophic failures."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A proactive approach to error handling distinguishes junior developers from senior engineers. While catching errors is necessary, preventing them through defensive programming, strict type checking (like TypeScript), and rigorous input validation is what ultimately creates highly resilient and maintainable React applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : REST API Integration
============================= */
    "rest-api-integration": {
    title: "REST API Integration",
    readingTime: "12 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern React applications rarely work in isolation. Most real-world applications need data from a server, database, authentication service, payment gateway, weather service, social media platform, or another backend system."
          },
          {
            type: "paragraph",
            content: "This communication between the React frontend and backend services is commonly achieved through REST APIs."
          },
          {
            type: "paragraph",
            content: "Whether you're building an e-commerce store, social media platform, banking application, dashboard, or SaaS product, understanding REST API integration is one of the most important skills in React development."
          }
        ]
      },

      {
        heading: "What is a REST API?",
        blocks: [
          {
            type: "paragraph",
            content: "REST stands for: REpresentational State Transfer."
          },
          {
            type: "paragraph",
            content: "A REST API is a standardized way for applications to communicate over HTTP."
          },
          {
            type: "paragraph",
            content: "Instead of directly accessing a database from React, the frontend sends requests to an API server. The server processes the request and sends a response back."
          },
          {
            type: "paragraph",
            content: "Real-Life Example: Imagine ordering food through a restaurant waiter."
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Waiter", "→",
              "Kitchen", "→",
              "Waiter", "→",
              "Customer"
            ]
          },
          {
            type: "paragraph",
            content: "Similarly:"
          },
          {
            type: "flow",
            steps: [
              "React App", "→",
              "API", "→",
              "Database", "→",
              "API", "→",
              "React App"
            ]
          },
          {
            type: "paragraph",
            content: "React never talks directly to the database. The API acts as the middle layer."
          }
        ]
      },

      {
        heading: "Why React Applications Use APIs",
        blocks: [
          {
            type: "paragraph",
            content: "React is primarily responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Displaying UI",
              "Handling user interactions",
              "Managing frontend state"
            ]
          },
          {
            type: "paragraph",
            content: "Backend systems handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Databases",
              "Authentication",
              "Business logic",
              "Payment processing",
              "Data storage"
            ]
          },
          {
            type: "paragraph",
            content: "APIs connect these two worlds."
          }
        ]
      },

      {
        heading: "How API Communication Works",
        blocks: [
          {
            type: "paragraph",
            content: "A typical API request follows this flow:"
          },
          {
            type: "flow",
            steps: [
              "User Action", "→",
              "React Component", "→",
              "API Request", "→",
              "Backend Server", "→",
              "Database", "→",
              "Backend Response", "→",
              "React Updates UI"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User clicks 'Load Products'", "→",
              "React sends GET request", "→",
              "Server fetches products", "→",
              "Server returns JSON", "→",
              "React displays products"
            ]
          }
        ]
      },

      {
        heading: "Understanding HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content: "REST APIs use HTTP methods to perform different actions."
          },
          {
            type: "cards",
            items: [
              {
                title: "GET",
                description: "Used to retrieve data. Example: `GET /products`. Use cases: Fetch users, products, posts."
              },
              {
                title: "POST",
                description: "Used to create new data. Example: `POST /products`. Use cases: Registration, Creating products."
              },
              {
                title: "PUT",
                description: "Used to completely update existing data. Example: `PUT /products/1`."
              },
              {
                title: "PATCH",
                description: "Updates only specific fields. Example: `PATCH /products/1`."
              },
              {
                title: "DELETE",
                description: "Removes data. Example: `DELETE /products/1`."
              }
            ]
          }
        ]
      },

      {
        heading: "Understanding API Endpoints",
        blocks: [
          {
            type: "paragraph",
            content: "An endpoint is simply a URL representing a resource."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "https://api.shop.com/products"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/api/users",
              "/api/products",
              "/api/orders",
              "/api/posts"
            ]
          },
          {
            type: "paragraph",
            content: "Specific resource:"
          },
          {
            type: "output",
            content: "/api/products/10"
          },
          {
            type: "paragraph",
            content: "Product with ID 10 is requested."
          }
        ]
      },

      {
        heading: "Understanding JSON",
        blocks: [
          {
            type: "paragraph",
            content: "Most REST APIs exchange data using JSON."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "id": 1,
  "name": "John",
  "age": 25
}`
          },
          {
            type: "paragraph",
            content: "JSON is lightweight, readable, and easy for JavaScript to process."
          }
        ]
      },

      {
        heading: "Fetching Data in React",
        blocks: [
          {
            type: "paragraph",
            content: "The most common approach uses: `fetch()`"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default Users;`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Component Mounts", "→",
              "fetch() Executes", "→",
              "Server Responds", "→",
              "Data Stored in State", "→",
              "UI Re-renders"
            ]
          }
        ]
      },

      {
        heading: "Fetching Data Using Async/Await",
        blocks: [
          {
            type: "paragraph",
            content: "Most professional applications use async/await because it improves readability."
          },
          {
            type: "code",
            language: "jsx",
            content: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}`
          },
          {
            type: "paragraph",
            content: "This is generally easier to maintain than nested `.then()` chains."
          }
        ]
      },

      {
        heading: "Sending Data to APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Creating new records requires POST requests."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function createUser() {
  const response = await fetch(
    "https://api.example.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "John"
      })
    }
  );

  const data = await response.json();

  console.log(data);
}`
          }
        ]
      },

      {
        heading: "Updating and Deleting Existing Data",
        blocks: [
          {
            type: "paragraph",
            content: "Updating Data (PUT)"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(
  "https://api.example.com/users/1",
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Updated User"
    })
  }
);`
          },
          {
            type: "paragraph",
            content: "Deleting Data (DELETE)"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(
  "https://api.example.com/users/1",
  {
    method: "DELETE"
  }
);`
          }
        ]
      },

      {
        heading: "Handling Loading and Error States",
        blocks: [
          {
            type: "paragraph",
            content: "Fetching data takes time. Without a loading state, users may think the application is broken."
          },
          {
            type: "code",
            language: "jsx",
            content: `const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function loadData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  loadData();
}, []);

if (loading) return <h2>Loading...</h2>;
if (error) return <h2>{error}</h2>;`
          }
        ]
      },

      {
        heading: "Common Response Status Codes",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning"],
            rows: [
              ["200", "Success"],
              ["201", "Resource Created"],
              ["400", "Bad Request"],
              ["401", "Unauthorized"],
              ["403", "Forbidden"],
              ["404", "Not Found"],
              ["500", "Internal Server Error"]
            ]
          },
          {
            type: "paragraph",
            content: "Understanding these codes helps diagnose API issues quickly."
          }
        ]
      },

      {
        heading: "Working with Headers and Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Headers provide additional request information. Authentication APIs require them."
          },
          {
            type: "paragraph",
            content: "Typical flow:"
          },
          {
            type: "flow",
            steps: [
              "User Login", "→",
              "API Validates User", "→",
              "Server Returns Token", "→",
              "React Stores Token", "→",
              "Future Requests Include Token"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `headers: {
  "Content-Type": "application/json",
  "Authorization": \`Bearer \${token}\`
}`
          },
          {
            type: "paragraph",
            content: "This verifies user identity."
          }
        ]
      },

      {
        heading: "Environment Variables for API URLs",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid hardcoding URLs."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch("https://production-server.com/api")`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(import.meta.env.VITE_API_URL)`
          },
          {
            type: "paragraph",
            content: "Environment variables make deployment easier."
          }
        ]
      },

      {
        heading: "Organizing API Calls Professionally",
        blocks: [
          {
            type: "paragraph",
            content: "Beginners often place fetch requests directly inside components. As applications grow, this becomes messy."
          },
          {
            type: "paragraph",
            content: "Better Architecture:"
          },
          {
            type: "tree",
            content: `services/
 └── api.js`
          },
          {
            type: "paragraph",
            content: "Example (`api.js`):"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getUsers() {
  const response = await fetch(url);
  return response.json();
}`
          },
          {
            type: "paragraph",
            content: "Component:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await getUsers();`
          },
          {
            type: "paragraph",
            content: "Professional workflow:"
          },
          {
            type: "flow",
            steps: [
              "Frontend Component", "→",
              "API Service Layer", "→",
              "Fetch Request", "→",
              "Backend API", "→",
              "Database", "→",
              "Response", "→",
              "React State Update", "→",
              "UI Update"
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
                question: "Mistake 1: Forgetting await",
                answer: "Incorrect: `const data = response.json();` Correct: `const data = await response.json();`"
              },
              {
                question: "Mistake 2: Not Handling Errors",
                answer: "Always wrap async requests in `try/catch` blocks."
              },
              {
                question: "Mistake 3: Ignoring Loading States",
                answer: "Users should always know data is loading to prevent confusion."
              },
              {
                question: "Mistake 4: Hardcoding API URLs",
                answer: "Use environment variables instead for easier deployment."
              },
              {
                question: "Mistake 5: Fetching Data Every Render",
                answer: "Incorrect: `useEffect(() => { fetchUsers(); });` This runs continuously. Correct: Add an empty dependency array `[]` so it runs once."
              }
            ]
          }
        ]
      },

      {
        heading: "REST API Integration Checklist",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Endpoint is correct",
              "HTTP method is correct",
              "Headers are configured",
              "Loading state exists",
              "Error handling exists",
              "Response status checked",
              "Data stored in state",
              "UI updated correctly",
              "Environment variables used",
              "API logic separated when possible"
            ]
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "REST API integration is how React applications communicate with backend systems."
          },
          {
            type: "paragraph",
            content: "Key concepts learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What REST APIs are",
              "HTTP methods (GET, POST, PUT, PATCH, DELETE)",
              "API endpoints and JSON responses",
              "Fetch API and Async/Await",
              "Loading states and Error handling",
              "Authentication headers",
              "Environment variables",
              "Service-layer architecture",
              "Common mistakes and Production best practices"
            ]
          },
          {
            type: "paragraph",
            content: "Mastering REST API integration allows React applications to move beyond static interfaces and interact with real-world data, making it one of the most important skills in professional React development."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common beginner misconception is that API integration is simply calling fetch() and displaying data. In professional applications, the difficult part is managing loading states, errors, caching, authentication tokens, retries, request cancellation, and organizing API logic cleanly. The actual fetch call is often the easiest part of API integration."
          }
        ]
      }
    ]
  },
};

export default workingWithAPIs;