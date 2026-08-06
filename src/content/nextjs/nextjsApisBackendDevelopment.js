const nextjsApisBackendDevelopment = {

/* ===========================
    First Topic : API Routes
============================= */
    "nextjs-api-routes": {
    title: "API Routes",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Goal",
        blocks: [
          {
            type: "paragraph",
            content: "Understand what APIs are, why they exist, how clients and servers communicate over HTTP, and why Next.js includes backend capabilities through API Routes."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are much more than static websites. They constantly exchange data between users, databases, external services, payment gateways, authentication providers, AI models, and countless other systems."
          },
          {
            type: "paragraph",
            content: "When you open Instagram, messages are loaded from a server."
          },
          {
            type: "paragraph",
            content: "When you log into GitHub, your credentials are verified by a server."
          },
          {
            type: "paragraph",
            content: "When you order food on Swiggy, your order is sent to a backend server."
          },
          {
            type: "paragraph",
            content: "When ChatGPT answers your question, your prompt is sent to an API."
          },
          {
            type: "paragraph",
            content: "All of these interactions rely on one of the most important concepts in web development:"
          },
          {
            type: "output",
            content: [
              "Application Programming Interfaces (APIs)."
            ]
          },
          {
            type: "paragraph",
            content: "Without APIs, modern web applications simply wouldn't exist."
          }
        ]
      },
      {
        heading: "What is an API?",
        blocks: [
          {
            type: "paragraph",
            content: "API stands for:"
          },
          {
            type: "output",
            content: [
              "Application Programming Interface"
            ]
          },
          {
            type: "paragraph",
            content: "Although the name sounds complicated, the idea is surprisingly simple."
          },
          {
            type: "paragraph",
            content: "An API is a communication bridge that allows two software applications to exchange information in a standardized way."
          },
          {
            type: "paragraph",
            content: "Think of it as a waiter in a restaurant."
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
            content: "The customer never enters the kitchen."
          },
          {
            type: "paragraph",
            content: "The chef never comes to the dining table."
          },
          {
            type: "paragraph",
            content: "The waiter carries requests and responses between them."
          },
          {
            type: "paragraph",
            content: "Similarly,"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The browser doesn't directly communicate with the database."
          },
          {
            type: "paragraph",
            content: "Instead, it sends requests to an API."
          },
          {
            type: "paragraph",
            content: "The API performs the necessary work and returns the results."
          }
        ]
      },
      {
        heading: "API Definition",
        blocks: [
          {
            type: "paragraph",
            content: "An API is a set of rules that defines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How clients send requests",
              "What information is required",
              "How servers respond",
              "What format the data uses",
              "Which operations are allowed"
            ]
          },
          {
            type: "paragraph",
            content: "This standardization allows completely different systems to communicate reliably."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine opening an e-commerce website."
          },
          {
            type: "paragraph",
            content: "You click:"
          },
          {
            type: "output",
            content: [
              "View Product"
            ]
          },
          {
            type: "paragraph",
            content: "Your browser does not access the database directly."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "GET /api/products/25", "→",
              "Server", "→",
              "Database", "→",
              "Product Data", "→",
              "Server", "→",
              "JSON Response", "→",
              "Browser", "→",
              "Display Product"
            ]
          },
          {
            type: "paragraph",
            content: "The browser only communicates with the API."
          }
        ]
      },
      {
        heading: "Everyday APIs You Already Use",
        blocks: [
          {
            type: "paragraph",
            content: "Every day you interact with APIs, often without realizing it."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Maps API",
              "Stripe Payment API",
              "OpenAI API",
              "GitHub API",
              "YouTube API",
              "Weather APIs",
              "Firebase APIs",
              "AWS APIs",
              "Twilio SMS API",
              "Cloudinary Image API"
            ]
          },
          {
            type: "paragraph",
            content: "When your application integrates with these services, it communicates through their APIs."
          }
        ]
      },
      {
        heading: "Why APIs Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a browser could directly connect to a database."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "This would create serious problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Anyone could modify data.",
              "Passwords would be exposed.",
              "Business rules could be bypassed.",
              "Databases would be publicly accessible.",
              "Security would be impossible to enforce."
            ]
          },
          {
            type: "paragraph",
            content: "Instead, APIs act as a protective layer."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The API decides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Who can access data",
              "What data can be modified",
              "Which operations are allowed",
              "How requests should be validated"
            ]
          }
        ]
      },
      {
        heading: "Problems APIs Solve",
        blocks: [
          {
            type: "paragraph",
            content: "APIs solve many important software engineering challenges."
          },
          {
            type: "paragraph",
            content: "Security"
          },
          {
            type: "paragraph",
            content: "Users never access the database directly."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Sensitive credentials remain hidden on the server."
          },
          {
            type: "paragraph",
            content: "Centralized Business Logic"
          },
          {
            type: "paragraph",
            content: "Suppose a shopping application requires:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Inventory validation",
              "Payment verification",
              "Discount calculation",
              "Tax calculation"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of implementing this logic in every client application:"
          },
          {
            type: "output",
            content: [
              "Web",
              "",
              "Mobile",
              "",
              "Desktop"
            ]
          },
          {
            type: "paragraph",
            content: "All clients simply call:"
          },
          {
            type: "output",
            content: [
              "POST /checkout"
            ]
          },
          {
            type: "paragraph",
            content: "The API handles everything."
          },
          {
            type: "paragraph",
            content: "Platform Independence"
          },
          {
            type: "paragraph",
            content: "One API can serve multiple clients."
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "API", "→",
              "Web", "→",
              "Mobile", "→",
              "Desktop", "→",
              "Smart TV", "→",
              "IoT Devices"
            ]
          },
          {
            type: "paragraph",
            content: "The backend remains the same."
          },
          {
            type: "paragraph",
            content: "Only the client changes."
          },
          {
            type: "paragraph",
            content: "Scalability"
          },
          {
            type: "paragraph",
            content: "APIs allow frontend and backend teams to work independently."
          },
          {
            type: "paragraph",
            content: "Frontend developers focus on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "UI",
              "UX",
              "State management"
            ]
          },
          {
            type: "paragraph",
            content: "Backend developers focus on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authentication",
              "Database",
              "Performance",
              "Business logic"
            ]
          },
          {
            type: "paragraph",
            content: "Both teams communicate through API contracts."
          }
        ]
      },
      {
        heading: "Frontend vs Backend",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest misconceptions beginners have is assuming that websites are only HTML, CSS, and JavaScript."
          },
          {
            type: "paragraph",
            content: "Modern applications consist of two major parts."
          },
          {
            type: "paragraph",
            content: "Frontend"
          },
          {
            type: "paragraph",
            content: "The frontend is everything users see and interact with."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Buttons",
              "Forms",
              "Images",
              "Navigation",
              "Animations",
              "Dashboard",
              "Theme",
              "Layout"
            ]
          },
          {
            type: "paragraph",
            content: "Technologies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js"
            ]
          },
          {
            type: "paragraph",
            content: "The frontend runs in the browser."
          },
          {
            type: "paragraph",
            content: "Backend"
          },
          {
            type: "paragraph",
            content: "The backend is responsible for processing data."
          },
          {
            type: "paragraph",
            content: "It handles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Databases",
              "Authentication",
              "Authorization",
              "Payments",
              "Emails",
              "File uploads",
              "Business logic",
              "APIs"
            ]
          },
          {
            type: "paragraph",
            content: "The backend runs on the server."
          }
        ]
      },
      {
        heading: "Frontend vs Backend Diagram",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Browser", "→",
              "Frontend", "→",
              "API", "→",
              "Backend", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Each layer has its own responsibility."
          }
        ]
      },
      {
        heading: "Example Login Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Consider logging into a website."
          },
          {
            type: "paragraph",
            content: "Frontend:"
          },
          {
            type: "flow",
            steps: [
              "Email", "→",
              "Password", "→",
              "Submit"
            ]
          },
          {
            type: "paragraph",
            content: "Backend:"
          },
          {
            type: "flow",
            steps: [
              "Validate Credentials", "→",
              "Check Database", "→",
              "Generate Session", "→",
              "Return Success"
            ]
          },
          {
            type: "paragraph",
            content: "The browser never verifies passwords itself."
          }
        ]
      },
      {
        heading: "Client-Server Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Almost every web application follows the Client-Server model."
          },
          {
            type: "paragraph",
            content: "Client"
          },
          {
            type: "paragraph",
            content: "The client requests information."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browser",
              "Mobile app",
              "Desktop app"
            ]
          },
          {
            type: "paragraph",
            content: "Clients initiate communication."
          },
          {
            type: "paragraph",
            content: "Server"
          },
          {
            type: "paragraph",
            content: "The server processes requests."
          },
          {
            type: "paragraph",
            content: "Responsibilities include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Execute code",
              "Query databases",
              "Authenticate users",
              "Generate responses",
              "Perform calculations"
            ]
          }
        ]
      },
      {
        heading: "Architecture Diagram",
        blocks: [
          {
            type: "flow",
            steps: [
              "Client", "→",
              "HTTP Request", "→",
              "Server", "→",
              "Database", "→",
              "HTTP Response", "→",
              "Client"
            ]
          },
          {
            type: "paragraph",
            content: "Every interaction follows this pattern."
          }
        ]
      },
      {
        heading: "Why This Architecture Works",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of placing everything inside the browser:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Everything"
            ]
          },
          {
            type: "paragraph",
            content: "Responsibilities are separated."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
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
              "Better security",
              "Better scalability",
              "Easier maintenance",
              "Centralized logic",
              "Faster updates"
            ]
          }
        ]
      },
      {
        heading: "HTTP Basics",
        blocks: [
          {
            type: "paragraph",
            content: "APIs communicate using a protocol called HTTP."
          },
          {
            type: "paragraph",
            content: "HTTP stands for:"
          },
          {
            type: "output",
            content: [
              "HyperText Transfer Protocol"
            ]
          },
          {
            type: "paragraph",
            content: "It defines how clients and servers exchange information."
          },
          {
            type: "paragraph",
            content: "Whenever you visit:"
          },
          {
            type: "output",
            content: [
              "https://example.com"
            ]
          },
          {
            type: "paragraph",
            content: "Your browser sends an HTTP request."
          },
          {
            type: "paragraph",
            content: "The server sends an HTTP response."
          }
        ]
      },
      {
        heading: "HTTP Request",
        blocks: [
          {
            type: "paragraph",
            content: "A request contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Method",
              "URL",
              "Headers",
              "Body"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /api/products HTTP/1.1
Host: example.com`
          }
        ]
      },
      {
        heading: "HTTP Response",
        blocks: [
          {
            type: "paragraph",
            content: "A response contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Status Code",
              "Headers",
              "Body"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `HTTP/1.1 200 OK

Content-Type: application/json`
          },
          {
            type: "paragraph",
            content: "Response body:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "Laptop",
  "price": 75000
}`
          }
        ]
      },
      {
        heading: "HTTP Methods Overview",
        blocks: [
          {
            type: "paragraph",
            content: "HTTP defines several methods that indicate the desired operation."
          },
          {
            type: "table",
            headers: ["Method", "Purpose"],
            rows: [
              ["GET", "Retrieve data"],
              ["POST", "Create data"],
              ["PUT", "Replace existing data"],
              ["PATCH", "Update part of existing data"],
              ["DELETE", "Remove data"]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content: "means:"
          },
          {
            type: "quote",
            content: "\"Give me the products.\""
          },
          {
            type: "paragraph",
            content: "Whereas:"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /products/15`
          },
          {
            type: "paragraph",
            content: "means:"
          },
          {
            type: "quote",
            content: "\"Delete product 15.\""
          },
          {
            type: "paragraph",
            content: "We'll explore these methods in detail later in this lesson series."
          }
        ]
      },
      {
        heading: "Request–Response Cycle",
        blocks: [
          {
            type: "paragraph",
            content: "Every API interaction follows the same lifecycle."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Create Request", "→",
              "Internet", "→",
              "Server", "→",
              "Business Logic", "→",
              "Database", "→",
              "Response", "→",
              "Client"
            ]
          },
          {
            type: "paragraph",
            content: "This cycle may complete in just a few milliseconds."
          }
        ]
      },
      {
        heading: "Complete Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine clicking:"
          },
          {
            type: "output",
            content: [
              "Load Users"
            ]
          },
          {
            type: "paragraph",
            content: "The browser sends:"
          },
          {
            type: "output",
            content: [
              "GET /api/users"
            ]
          },
          {
            type: "paragraph",
            content: "The server:"
          },
          {
            type: "flow",
            steps: [
              "Receives Request", "→",
              "Validates", "→",
              "Queries Database", "→",
              "Formats Data", "→",
              "Returns JSON"
            ]
          },
          {
            type: "paragraph",
            content: "The browser:"
          },
          {
            type: "flow",
            steps: [
              "Receives JSON", "→",
              "Updates UI"
            ]
          }
        ]
      },
      {
        heading: "Request Lifecycle Inside the Server",
        blocks: [
          {
            type: "paragraph",
            content: "Internally, the server performs multiple steps."
          },
          {
            type: "flow",
            steps: [
              "Receive Request", "→",
              "Routing", "→",
              "Authentication", "→",
              "Authorization", "→",
              "Validation", "→",
              "Business Logic", "→",
              "Database Query", "→",
              "Prepare Response", "→",
              "Send Response"
            ]
          },
          {
            type: "paragraph",
            content: "Each stage has a specific responsibility."
          }
        ]
      },
      {
        heading: "REST Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Most modern APIs follow an architectural style called REST."
          },
          {
            type: "paragraph",
            content: "REST stands for:"
          },
          {
            type: "output",
            content: [
              "Representational State Transfer"
            ]
          },
          {
            type: "paragraph",
            content: "It is not a protocol but a set of design principles for building web APIs."
          },
          {
            type: "paragraph",
            content: "A REST API treats everything as a resource."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Products",
              "Orders",
              "Posts",
              "Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Each resource has a URL."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/users",
              "/products",
              "/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Operations are performed using HTTP methods."
          },
          {
            type: "table",
            headers: ["Operation", "HTTP Method"],
            rows: [
              ["Read", "GET"],
              ["Create", "POST"],
              ["Update", "PUT or PATCH"],
              ["Delete", "DELETE"]
            ]
          },
          {
            type: "paragraph",
            content: "This combination forms the foundation of RESTful APIs."
          }
        ]
      },
      {
        heading: "REST Example",
        blocks: [
          {
            type: "paragraph",
            content: "Retrieve products:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content: "Create a product:"
          },
          {
            type: "code",
            language: "text",
            content: `POST /products`
          },
          {
            type: "paragraph",
            content: "Update product:"
          },
          {
            type: "code",
            language: "text",
            content: `PUT /products/15`
          },
          {
            type: "paragraph",
            content: "Delete product:"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /products/15`
          },
          {
            type: "paragraph",
            content: "This predictable structure makes APIs easy to understand and integrate."
          }
        ]
      },
      {
        heading: "What is JSON?",
        blocks: [
          {
            type: "paragraph",
            content: "Most APIs exchange data using JSON."
          },
          {
            type: "paragraph",
            content: "JSON stands for:"
          },
          {
            type: "output",
            content: [
              "JavaScript Object Notation"
            ]
          },
          {
            type: "paragraph",
            content: "Despite its name, JSON is language-independent and is supported by virtually every modern programming language."
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
  "name": "Faiz",
  "role": "Developer",
  "verified": true
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
              "Human-readable",
              "Lightweight",
              "Easy to parse",
              "Platform-independent"
            ]
          },
          {
            type: "paragraph",
            content: "For these reasons, it has become the standard format for web APIs."
          }
        ]
      },
      {
        heading: "Why JSON is Preferred",
        blocks: [
          {
            type: "paragraph",
            content: "Compared with older formats such as XML, JSON is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Less verbose",
              "Easier to read",
              "Faster to parse",
              "Better supported by JavaScript",
              "Widely adopted across APIs"
            ]
          },
          {
            type: "paragraph",
            content: "This is why almost every REST API returns JSON."
          }
        ]
      },
      {
        heading: "Why Next.js Supports Backend Development",
        blocks: [
          {
            type: "paragraph",
            content: "Originally, React focused only on building user interfaces."
          },
          {
            type: "paragraph",
            content: "Developers needed separate backend frameworks such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Express.js",
              "Django",
              "Laravel",
              "Spring Boot"
            ]
          },
          {
            type: "paragraph",
            content: "A typical architecture looked like this:"
          },
          {
            type: "flow",
            steps: [
              "React Frontend", "→",
              "Express API", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "While powerful, maintaining separate frontend and backend projects increases complexity."
          },
          {
            type: "paragraph",
            content: "Next.js introduced backend capabilities to simplify development."
          },
          {
            type: "paragraph",
            content: "With Next.js, you can build both the frontend and backend in a single project."
          },
          {
            type: "tree",
            content: `Next.js

├── Pages / App
├── API Routes / Route Handlers
├── Database Access
├── Authentication
├── Rendering
└── Deployment`
          },
          {
            type: "paragraph",
            content: "This unified approach reduces setup, simplifies deployment, and allows developers to share code between the client and server where appropriate."
          }
        ]
      },
      {
        heading: "Why API Routes Exist in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications only need a lightweight backend for tasks such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Processing forms",
              "Handling authentication",
              "Accessing databases",
              "Sending emails",
              "Uploading files",
              "Integrating payment gateways",
              "Calling third-party APIs"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating a separate Express server, Next.js lets you define backend endpoints directly inside your project using API Routes (Pages Router) or Route Handlers (App Router)."
          },
          {
            type: "paragraph",
            content: "This results in a simpler developer experience while still allowing you to build powerful backend functionality."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a contact form."
          },
          {
            type: "paragraph",
            content: "Without backend support:"
          },
          {
            type: "flow",
            steps: [
              "Next.js", "→",
              "Express Server", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "With Next.js API Routes:"
          },
          {
            type: "flow",
            steps: [
              "Next.js", "→",
              "API Route", "→",
              "Database"
            ]
          },
          {
            type: "output",
            content: [
              "One project.",
              "One deployment.",
              "One codebase."
            ]
          }
        ]
      },
      {
        heading: "Advantages of Built-in Backend Support",
        blocks: [
          {
            type: "paragraph",
            content: "Using Next.js for both frontend and backend offers several benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unified project structure",
              "Easier deployment",
              "Shared TypeScript types",
              "Simplified authentication",
              "Reduced configuration",
              "Faster development",
              "Excellent integration with React Server Components",
              "Native support for server-side rendering and data fetching"
            ]
          },
          {
            type: "paragraph",
            content: "For many applications, this removes the need for a separate backend framework altogether."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Many beginners think an API is simply a URL that returns JSON. In reality, an API is the contract between a client and a server. It defines how software systems communicate, what data can be exchanged, and under which rules those interactions occur.\nUnderstanding APIs is the foundation for everything you'll build in Next.js—from API Routes and Route Handlers to Server Actions, authentication, databases, payment integrations, AI applications, and full-stack architectures. Once you grasp the request–response model and client–server communication, the rest of Next.js backend development becomes much more intuitive."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this part, you learned the foundational concepts behind APIs and backend development. We explored what APIs are, why they exist, how they enable secure communication between clients and servers, and how HTTP, REST, and JSON form the backbone of modern web applications. We also examined the client–server architecture, the complete request–response lifecycle, and why Next.js includes backend capabilities to simplify full-stack development. These concepts provide the essential groundwork for understanding API Routes, which we'll begin implementing in the next part of this lesson."
          },
          {
            type: "divider",
          },
        ]
      },
      {
        heading: "API Routes — Part 2: API Routes Fundamentals",
        blocks: [
          {
            type: "paragraph",
            content: "Learn what API Routes are, how the Pages Router backend architecture works, how file-based API routing maps URLs to server functions, understand the complete API lifecycle, create your first API endpoint, and master the Request and Response objects."
          }
        ]
      },
      {
        heading: "What are API Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "So far, we've learned that APIs allow clients and servers to communicate."
          },
          {
            type: "paragraph",
            content: "The next question is:"
          },
          {
            type: "output",
            content: [
              "Where do we actually write backend code inside a Next.js application?"
            ]
          },
          {
            type: "paragraph",
            content: "The answer (in the Pages Router) is:"
          },
          {
            type: "output",
            content: [
              "API Routes"
            ]
          },
          {
            type: "paragraph",
            content: "API Routes allow you to write backend code directly inside your Next.js project without creating a separate Express.js, Fastify, or Node.js server."
          },
          {
            type: "paragraph",
            content: "Instead of having:"
          },
          {
            type: "flow",
            steps: [
              "React Frontend", "→",
              "Express Server", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "You can simply write:"
          },
          {
            type: "tree",
            content: `Next.js

├── Frontend Pages
├── API Routes
└── Database`
          },
          {
            type: "paragraph",
            content: "Everything lives inside one project."
          }
        ]
      },
      {
        heading: "Definition",
        blocks: [
          {
            type: "paragraph",
            content: "An API Route is a server-side endpoint that handles HTTP requests."
          },
          {
            type: "paragraph",
            content: "It behaves exactly like an endpoint in Express."
          },
          {
            type: "paragraph",
            content: "For example,"
          },
          {
            type: "code",
            language: "text",
            content: `/api/users`
          },
          {
            type: "paragraph",
            content: "can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fetch users",
              "Create users",
              "Delete users",
              "Update users"
            ]
          },
          {
            type: "paragraph",
            content: "depending on the HTTP method."
          },
          {
            type: "paragraph",
            content: "Unlike React components, API Routes never run inside the browser."
          },
          {
            type: "paragraph",
            content: "They always execute on the server."
          }
        ]
      },
      {
        heading: "API Routes are Server Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Think of an API Route as a function waiting for requests."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "GET /api/users", "→",
              "API Route", "→",
              "Process Request", "→",
              "Return Response"
            ]
          },
          {
            type: "paragraph",
            content: "Whenever someone visits:"
          },
          {
            type: "code",
            language: "text",
            content: `/api/users`
          },
          {
            type: "paragraph",
            content: "Next.js executes the corresponding server-side function."
          }
        ]
      },
      {
        heading: "Where are API Routes Located?",
        blocks: [
          {
            type: "paragraph",
            content: "Inside the Pages Router, API Routes are placed inside:"
          },
          {
            type: "code",
            language: "text",
            content: `pages/api`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `my-project/

pages/
│
├── index.js
├── about.js
│
└── api/
    ├── users.js
    ├── login.js
    ├── products.js
    └── orders.js`
          },
          {
            type: "paragraph",
            content: "Everything inside"
          },
          {
            type: "code",
            language: "text",
            content: `pages/api`
          },
          {
            type: "paragraph",
            content: "becomes a backend endpoint."
          }
        ]
      },
      {
        heading: "URL Mapping",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js automatically maps files to URLs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "pages/api/users.js", "→",
              "/api/users"
            ]
          },
          {
            type: "paragraph",
            content: "Likewise,"
          },
          {
            type: "flow",
            steps: [
              "pages/api/login.js", "→",
              "/api/login"
            ]
          },
          {
            type: "paragraph",
            content: "No configuration required."
          },
          {
            type: "paragraph",
            content: "This is known as File-based Routing."
          }
        ]
      },
      {
        heading: "Pages Router Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Internally, Pages Router contains two different routing systems."
          },
          {
            type: "tree",
            content: `pages/

├── index.js
├── blog.js
├── about.js
│
└── api/
      users.js
      login.js`
          },
          {
            type: "paragraph",
            content: "The routing engine treats these differently."
          },
          {
            type: "paragraph",
            content: "Normal pages become HTML pages."
          },
          {
            type: "code",
            language: "text",
            content: `/about`
          },
          {
            type: "paragraph",
            content: "renders HTML."
          },
          {
            type: "paragraph",
            content: "API files become backend endpoints."
          },
          {
            type: "code",
            language: "text",
            content: `/api/users`
          },
          {
            type: "paragraph",
            content: "returns data instead of HTML."
          }
        ]
      },
      {
        heading: "Architecture Overview",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "/about", "→",
              "React Page"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "/api/users", "→",
              "API Route", "→",
              "Database", "→",
              "JSON Response"
            ]
          },
          {
            type: "paragraph",
            content: "Although both use file-based routing, their purposes are completely different."
          }
        ]
      },
      {
        heading: "Why API Routes Were Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "Before Next.js API Routes, developers often created two separate repositories."
          },
          {
            type: "tree",
            content: `frontend/

backend/`
          },
          {
            type: "paragraph",
            content: "Frontend developers maintained React."
          },
          {
            type: "paragraph",
            content: "Backend developers maintained Express."
          },
          {
            type: "paragraph",
            content: "Deployment required:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Two projects",
              "Two servers",
              "Two environments",
              "Two deployments"
            ]
          },
          {
            type: "paragraph",
            content: "API Routes simplify this."
          },
          {
            type: "tree",
            content: `Next.js Project

├── UI
├── Backend
└── APIs`
          },
          {
            type: "paragraph",
            content: "Everything stays together."
          }
        ]
      },
      {
        heading: "File-Based Routing",
        blocks: [
          {
            type: "paragraph",
            content: "File-based routing is one of Next.js' biggest advantages."
          },
          {
            type: "paragraph",
            content: "Every file automatically becomes a route."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "pages/api/products.js", "→",
              "/api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "pages/api/orders.js", "→",
              "/api/orders"
            ]
          },
          {
            type: "paragraph",
            content: "No routing table."
          },
          {
            type: "paragraph",
            content: "No Express Router."
          },
          {
            type: "paragraph",
            content: "No manual registration."
          },
          {
            type: "paragraph",
            content: "Next.js does everything automatically."
          }
        ]
      },
      {
        heading: "Nested API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Folders create nested URLs."
          },
          {
            type: "paragraph",
            content: "Project:"
          },
          {
            type: "tree",
            content: `pages/

api/

users/

profile.js
settings.js
posts.js`
          },
          {
            type: "paragraph",
            content: "Automatically becomes:"
          },
          {
            type: "output",
            content: [
              "/api/users/profile",
              "",
              "/api/users/settings",
              "",
              "/api/users/posts"
            ]
          },
          {
            type: "paragraph",
            content: "Folder structure defines URL structure."
          }
        ]
      },
      {
        heading: "Deeply Nested APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `pages/

api/

admin/

users/

permissions.js`
          },
          {
            type: "paragraph",
            content: "Automatically becomes:"
          },
          {
            type: "code",
            language: "text",
            content: `/api/admin/users/permissions`
          },
          {
            type: "paragraph",
            content: "No additional configuration."
          }
        ]
      },
      {
        heading: "Dynamic API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Just like pages,"
          },
          {
            type: "paragraph",
            content: "API Routes support dynamic parameters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `pages/api/users/[id].js`
          },
          {
            type: "paragraph",
            content: "matches"
          },
          {
            type: "output",
            content: [
              "/api/users/15",
              "",
              "/api/users/42",
              "",
              "/api/users/200"
            ]
          },
          {
            type: "paragraph",
            content: "The value"
          },
          {
            type: "code",
            language: "text",
            content: `15`
          },
          {
            type: "paragraph",
            content: "becomes available inside the request."
          },
          {
            type: "paragraph",
            content: "We'll study Dynamic API Routes in a dedicated lesson."
          }
        ]
      },
      {
        heading: "Catch-all API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js also supports catch-all routing."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `pages/api/docs/[...slug].js`
          },
          {
            type: "paragraph",
            content: "Matches:"
          },
          {
            type: "output",
            content: [
              "/api/docs",
              "",
              "/api/docs/api",
              "",
              "/api/docs/api/auth",
              "",
              "/api/docs/api/auth/login"
            ]
          },
          {
            type: "paragraph",
            content: "This is useful for building documentation systems and complex nested APIs."
          }
        ]
      },
      {
        heading: "API Route Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Every API request follows the same lifecycle."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HTTP Request", "→",
              "Next.js Router", "→",
              "Find Matching API File", "→",
              "Execute Function", "→",
              "Business Logic", "→",
              "Database / External API", "→",
              "Prepare Response", "→",
              "Send HTTP Response", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Every request passes through these stages."
          }
        ]
      },
      {
        heading: "Internal API Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Let's examine what happens internally."
          },
          {
            type: "paragraph",
            content: "Suppose the browser sends:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /api/users`
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "flow",
            steps: [
              "Receive Request", "→",
              "Route Matching", "→",
              "Create Request Object", "→",
              "Create Response Object", "→",
              "Execute API Function", "→",
              "Business Logic", "→",
              "Return Response", "→",
              "Send to Client"
            ]
          },
          {
            type: "paragraph",
            content: "This entire process often completes within milliseconds."
          }
        ]
      },
      {
        heading: "Request Processing Pipeline",
        blocks: [
          {
            type: "paragraph",
            content: "A real production API often performs additional work."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Middleware", "→",
              "Authentication", "→",
              "Authorization", "→",
              "Validation", "→",
              "Business Logic", "→",
              "Database", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Although not every API includes all these steps, most production APIs follow this architecture."
          }
        ]
      },
      {
        heading: "Creating Your First API Route",
        blocks: [
          {
            type: "paragraph",
            content: "Let's create our first backend endpoint."
          },
          {
            type: "paragraph",
            content: "Project:"
          },
          {
            type: "tree",
            content: `pages/

api/

hello.js`
          },
          {
            type: "paragraph",
            content: "Code:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {
  res.status(200).json({
    message: "Hello DevSphere!"
  });
}`
          },
          {
            type: "paragraph",
            content: "Run:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm run dev`
          },
          {
            type: "paragraph",
            content: "Visit:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/api/hello`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "message": "Hello DevSphere!"
}`
          },
          {
            type: "paragraph",
            content: "Congratulations!"
          },
          {
            type: "paragraph",
            content: "You have built a backend endpoint inside Next.js."
          }
        ]
      },
      {
        heading: "Understanding the Handler Function",
        blocks: [
          {
            type: "paragraph",
            content: "Every API Route exports one default function."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

}`
          },
          {
            type: "paragraph",
            content: "This function runs every time someone accesses the endpoint."
          },
          {
            type: "paragraph",
            content: "Think of it like:"
          },
          {
            type: "flow",
            steps: [
              "Someone visits URL", "→",
              "Run Function", "→",
              "Return Response"
            ]
          }
        ]
      },
      {
        heading: "Request Object",
        blocks: [
          {
            type: "paragraph",
            content: "The first parameter is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req`
          },
          {
            type: "paragraph",
            content: "This represents the incoming HTTP request."
          },
          {
            type: "paragraph",
            content: "It contains everything the client sent."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {
  console.log(req.method);
}`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "GET"
            ]
          }
        ]
      },
      {
        heading: "Information Available Inside Request",
        blocks: [
          {
            type: "paragraph",
            content: "The request object contains useful information."
          },
          {
            type: "tree",
            content: `req

├── method
├── headers
├── body
├── query
├── cookies
└── url`
          },
          {
            type: "paragraph",
            content: "These properties allow you to understand what the client requested."
          }
        ]
      },
      {
        heading: "req.method",
        blocks: [
          {
            type: "paragraph",
            content: "Returns the HTTP method."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.method === "GET") {

}`
          },
          {
            type: "paragraph",
            content: "Possible values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "GET",
              "POST",
              "PUT",
              "PATCH",
              "DELETE"
            ]
          }
        ]
      },
      {
        heading: "req.query",
        blocks: [
          {
            type: "paragraph",
            content: "Contains URL query parameters."
          },
          {
            type: "paragraph",
            content: "Suppose the URL is:"
          },
          {
            type: "code",
            language: "text",
            content: `/api/users?page=2&limit=10`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.query`
          },
          {
            type: "paragraph",
            content: "becomes"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  page: "2",
  limit: "10"
}`
          }
        ]
      },
      {
        heading: "req.body",
        blocks: [
          {
            type: "paragraph",
            content: "Contains the request body."
          },
          {
            type: "paragraph",
            content: "Example request:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "Alice",
  "age": 25
}`
          },
          {
            type: "paragraph",
            content: "Inside API:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.body);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  name: "Alice",
  age: 25
}`
          }
        ]
      },
      {
        heading: "req.headers",
        blocks: [
          {
            type: "paragraph",
            content: "Contains request headers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.headers`
          },
          {
            type: "paragraph",
            content: "May contain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authorization",
              "Content-Type",
              "Accept",
              "User-Agent"
            ]
          },
          {
            type: "paragraph",
            content: "Headers are commonly used for authentication and content negotiation."
          }
        ]
      },
      {
        heading: "req.cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Contains browser cookies."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.cookies`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  session: "abc123"
}`
          },
          {
            type: "paragraph",
            content: "Useful for authentication and user sessions."
          }
        ]
      },
      {
        heading: "Response Object",
        blocks: [
          {
            type: "paragraph",
            content: "The second parameter is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res`
          },
          {
            type: "paragraph",
            content: "This sends data back to the client."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.json({
  success: true
});`
          }
        ]
      },
      {
        heading: "Common Response Methods",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js extends Node.js' response object with convenient helper methods."
          },
          {
            type: "table",
            headers: ["Method", "Purpose"],
            rows: [
              ["res.status()", "Set HTTP status code"],
              ["res.json()", "Return JSON"],
              ["res.send()", "Send text or data"],
              ["res.end()", "End response"],
              ["res.redirect()", "Redirect client"],
              ["res.setHeader()", "Set response headers"]
            ]
          }
        ]
      },
      {
        heading: "Returning JSON",
        blocks: [
          {
            type: "paragraph",
            content: "The most common response."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {
  res.json({
    name: "Laptop",
    price: 50000
  });
}`
          },
          {
            type: "paragraph",
            content: "Response:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name": "Laptop",
  "price": 50000
}`
          }
        ]
      },
      {
        heading: "Setting Status Codes",
        blocks: [
          {
            type: "paragraph",
            content: "Responses usually include status codes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.status(200).json({
    success: true
});`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.status(404).json({
    error: "User not found"
});`
          }
        ]
      },
      {
        heading: "Common HTTP Status Codes",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning"],
            rows: [
              ["200", "OK"],
              ["201", "Created"],
              ["204", "No Content"],
              ["400", "Bad Request"],
              ["401", "Unauthorized"],
              ["403", "Forbidden"],
              ["404", "Not Found"],
              ["409", "Conflict"],
              ["422", "Validation Error"],
              ["500", "Internal Server Error"]
            ]
          },
          {
            type: "paragraph",
            content: "Choosing appropriate status codes helps clients understand the outcome of a request."
          }
        ]
      },
      {
        heading: "Sending Plain Text",
        blocks: [
          {
            type: "paragraph",
            content: "Not every response needs JSON."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.send("Welcome to DevSphere!");`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: [
              "Welcome to DevSphere!"
            ]
          }
        ]
      },
      {
        heading: "Redirecting",
        blocks: [
          {
            type: "paragraph",
            content: "You can redirect users."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.redirect("/login");`
          },
          {
            type: "paragraph",
            content: "Useful after authentication or resource relocation."
          }
        ]
      },
      {
        heading: "Setting Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Headers provide metadata about the response."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Cache-Control", "no-store");`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("X-App", "DevSphere");`
          }
        ]
      },
      {
        heading: "Complete Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    const user = {
        id: 1,
        name: "Faiz",
        role: "Developer"
    };

    res.status(200).json(user);

}`
          },
          {
            type: "paragraph",
            content: "Visiting:"
          },
          {
            type: "code",
            language: "text",
            content: `/api/user`
          },
          {
            type: "paragraph",
            content: "Returns:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "id": 1,
  "name": "Faiz",
  "role": "Developer"
}`
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce application."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "GET /api/products", "→",
              "API Route", "→",
              "Database", "→",
              "Products", "→",
              "JSON Response", "→",
              "React UI"
            ]
          },
          {
            type: "paragraph",
            content: "The React frontend doesn't know how the database works. It only consumes the JSON returned by the API Route."
          }
        ]
      },
      {
        heading: "How API Routes Fit into a Next.js Application",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "React Frontend", "→",
              "fetch(\"/api/products\")", "→",
              "Next.js API Route", "→",
              "Business Logic", "→",
              "Prisma / SQL / ORM", "→",
              "Database", "→",
              "JSON Response", "→",
              "React Updates UI"
            ]
          },
          {
            type: "paragraph",
            content: "This architecture keeps your frontend focused on presentation while the backend handles data processing and persistence."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A common misconception is that API Routes are just \"functions that return JSON.\" In reality, they are server endpoints that participate in the entire HTTP lifecycle. They can authenticate users, validate input, interact with databases, call third-party services, send emails, upload files, manage cookies, and enforce business rules. Think of them as the backend entry points of your application—not merely data providers."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this part, you learned what API Routes are and how they enable backend development directly within a Next.js Pages Router application. We explored the Pages Router architecture, file-based API routing, nested and dynamic routes, and the complete request lifecycle from the browser to the server and back. You also created your first API Route, examined the req (request) and res (response) objects, learned the most common response methods, and understood how API Routes fit into a real-world full-stack architecture. These concepts form the foundation for building robust backend APIs, which we'll expand upon in the next part by exploring HTTP methods, CRUD operations, query parameters, body parsing, and production-ready API design."
          },
          {
            type: "divider",
          },
        ]
      },

      {
        heading: "API Routes — Part 3: HTTP Methods, CRUD Operations, Best Practices & Production Usage",
        blocks: [
          {
            type: "paragraph",
            content: "Master HTTP methods, query parameters, body parsing, status codes, headers, build a complete CRUD API, understand the strengths and limitations of API Routes, learn production best practices, and prepare for interviews."
          }
        ]
      },
      {
        heading: "HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content: "An API endpoint is not defined only by its URL. The HTTP method determines what operation should be performed."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "GET    /api/users",
              "POST   /api/users",
              "PUT    /api/users/1",
              "DELETE /api/users/1"
            ]
          },
          {
            type: "paragraph",
            content: "Although the URL looks similar, each request performs a different operation."
          },
          {
            type: "paragraph",
            content: "Think of HTTP methods as verbs that describe what action should happen."
          }
        ]
      },
      {
        heading: "Why HTTP Methods Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online shopping application."
          },
          {
            type: "paragraph",
            content: "Users may want to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View products",
              "Add a new product",
              "Update product details",
              "Delete a product"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating separate URLs like:"
          },
          {
            type: "output",
            content: [
              "/api/getProducts",
              "/api/addProduct",
              "/api/updateProduct",
              "/api/deleteProduct"
            ]
          },
          {
            type: "paragraph",
            content: "REST uses the same resource with different methods."
          },
          {
            type: "output",
            content: [
              "GET     /api/products",
              "POST    /api/products",
              "PUT     /api/products/1",
              "DELETE  /api/products/1"
            ]
          },
          {
            type: "paragraph",
            content: "This makes APIs cleaner, easier to understand, and more consistent."
          }
        ]
      },
      {
        heading: "Common HTTP Methods",
        blocks: [
          {
            type: "table",
            headers: ["Method", "Purpose", "Safe", "Idempotent"],
            rows: [
              ["GET", "Read data", "✅", "✅"],
              ["POST", "Create data", "❌", "❌"],
              ["PUT", "Replace entire resource", "❌", "✅"],
              ["PATCH", "Update part of resource", "❌", "❌"],
              ["DELETE", "Delete resource", "❌", "✅"],
              ["OPTIONS", "Ask supported methods", "✅", "✅"],
              ["HEAD", "Return headers only", "✅", "✅"]
            ]
          }
        ]
      },
      {
        heading: "GET Request",
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
            type: "output",
            content: [
              "GET /api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Handler:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    res.status(200).json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);

}`
          },
          {
            type: "paragraph",
            content: "GET requests should never modify data."
          }
        ]
      },
      {
        heading: "POST Request",
        blocks: [
          {
            type: "paragraph",
            content: "POST creates new resources."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "POST /api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Body:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Keyboard",
    "price": 2000
}`
          },
          {
            type: "paragraph",
            content: "API:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.method === "POST") {

    const product = req.body;

    res.status(201).json(product);

}`
          }
        ]
      },
      {
        heading: "PUT Request",
        blocks: [
          {
            type: "paragraph",
            content: "PUT replaces an existing resource."
          },
          {
            type: "output",
            content: [
              "PUT /api/products/10"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Gaming Laptop",
    "price": 80000
}`
          },
          {
            type: "paragraph",
            content: "PUT generally replaces the entire object."
          }
        ]
      },
      {
        heading: "PATCH Request",
        blocks: [
          {
            type: "paragraph",
            content: "PATCH updates only selected fields."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "PATCH /api/products/10"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
    "price": 76000
}`
          },
          {
            type: "paragraph",
            content: "Only the price changes."
          },
          {
            type: "paragraph",
            content: "Everything else remains unchanged."
          }
        ]
      },
      {
        heading: "DELETE Request",
        blocks: [
          {
            type: "paragraph",
            content: "Deletes resources."
          },
          {
            type: "output",
            content: [
              "DELETE /api/products/10"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.method === "DELETE") {

    res.status(204).end();

}`
          }
        ]
      },
      {
        heading: "Handling Multiple Methods",
        blocks: [
          {
            type: "paragraph",
            content: "Usually one endpoint handles several HTTP methods."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    switch (req.method) {

        case "GET":
            return res.json(users);

        case "POST":
            return res.status(201).json(newUser);

        case "PUT":
            return res.json(updatedUser);

        case "DELETE":
            return res.status(204).end();

        default:
            return res.status(405).json({
                message: "Method Not Allowed"
            });

    }

}`
          },
          {
            type: "paragraph",
            content: "This is the most common pattern in API Routes."
          }
        ]
      },
      {
        heading: "Query Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Query parameters provide additional information in the URL."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/api/products?page=2&limit=20"
            ]
          },
          {
            type: "paragraph",
            content: "Everything after ? is the query string."
          }
        ]
      },
      {
        heading: "Reading Query Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js parses them automatically."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    console.log(req.query);

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
    page: "2",
    limit: "20"
}`
          }
        ]
      },
      {
        heading: "Filtering Example",
        blocks: [
          {
            type: "output",
            content: [
              "/api/products?category=laptops"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const category = req.query.category;

const filtered = products.filter(
    p => p.category === category
);

res.json(filtered);`
          }
        ]
      },
      {
        heading: "Search Example",
        blocks: [
          {
            type: "output",
            content: [
              "/api/users?search=john"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const search = req.query.search;

const results = users.filter(user =>
    user.name.includes(search)
);

res.json(results);`
          }
        ]
      },
      {
        heading: "Pagination Example",
        blocks: [
          {
            type: "output",
            content: [
              "/api/products?page=3&limit=25"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const page = Number(req.query.page);

const limit = Number(req.query.limit);

const start = (page - 1) * limit;

const end = start + limit;

res.json(products.slice(start, end));`
          },
          {
            type: "paragraph",
            content: "Pagination is essential for large datasets."
          }
        ]
      },
      {
        heading: "Body Parsing",
        blocks: [
          {
            type: "paragraph",
            content: "The request body contains data sent by the client."
          },
          {
            type: "paragraph",
            content: "Example request:"
          },
          {
            type: "output",
            content: [
              "POST /api/users"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Alice",
    "age": 24
}`
          }
        ]
      },
      {
        heading: "Reading the Body",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js automatically parses JSON requests."
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    const user = req.body;

    console.log(user);

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
    name: "Alice",
    age: 24
}`
          }
        ]
      },
      {
        heading: "Sending Complex Objects",
        blocks: [
          {
            type: "paragraph",
            content: "Bodies can contain nested objects."
          },
          {
            type: "code",
            language: "json",
            content: `{
    "customer": {
        "name": "John"
    },
    "items": [
        "Laptop",
        "Mouse"
    ]
}`
          },
          {
            type: "paragraph",
            content: "Everything becomes available through:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.body`
          }
        ]
      },
      {
        heading: "Validating Input",
        blocks: [
          {
            type: "paragraph",
            content: "Never trust incoming data."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `createUser(req.body);`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!req.body.name) {

    return res.status(400).json({
        error: "Name is required"
    });

}`
          },
          {
            type: "paragraph",
            content: "Always validate data before using it."
          }
        ]
      },
      {
        heading: "HTTP Status Codes",
        blocks: [
          {
            type: "paragraph",
            content: "Status codes tell clients what happened."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.status(200).json(data);`
          }
        ]
      },
      {
        heading: "Common Status Codes",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning", "Typical Use"],
            rows: [
              ["200", "OK", "Successful GET"],
              ["201", "Created", "Resource created"],
              ["202", "Accepted", "Async processing"],
              ["204", "No Content", "Delete success"],
              ["301", "Permanent Redirect", "Resource moved"],
              ["302", "Temporary Redirect", "Temporary redirect"],
              ["304", "Not Modified", "Browser cache"],
              ["400", "Bad Request", "Invalid input"],
              ["401", "Unauthorized", "Login required"],
              ["403", "Forbidden", "Permission denied"],
              ["404", "Not Found", "Resource missing"],
              ["405", "Method Not Allowed", "Wrong HTTP method"],
              ["409", "Conflict", "Duplicate resource"],
              ["422", "Validation Error", "Invalid data"],
              ["429", "Too Many Requests", "Rate limit exceeded"],
              ["500", "Internal Server Error", "Server failure"]
            ]
          },
          {
            type: "paragraph",
            content: "Using the correct status code makes your API predictable and standards-compliant."
          }
        ]
      },
      {
        heading: "Response Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Headers provide metadata about the response."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader(
    "Cache-Control",
    "no-store"
);`
          }
        ]
      },
      {
        heading: "Useful Headers",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Type",
              "Authorization",
              "Cache-Control",
              "ETag",
              "Location",
              "Set-Cookie",
              "Access-Control-Allow-Origin"
            ]
          },
          {
            type: "paragraph",
            content: "Headers control caching, authentication, cookies, CORS, content negotiation, and much more."
          }
        ]
      },
      {
        heading: "Complete CRUD Example",
        blocks: [
          {
            type: "paragraph",
            content: "Let's combine everything into a single API Route."
          },
          {
            type: "code",
            language: "javascript",
            content: `let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

export default function handler(req, res) {

    switch (req.method) {

        case "GET":
            return res.status(200).json(users);

        case "POST":

            const newUser = {
                id: Date.now(),
                ...req.body
            };

            users.push(newUser);

            return res.status(201).json(newUser);

        case "PUT":

            const updated = req.body;

            users = users.map(user =>
                user.id === updated.id
                    ? updated
                    : user
            );

            return res.status(200).json(updated);

        case "DELETE":

            const id = Number(req.query.id);

            users = users.filter(
                user => user.id !== id
            );

            return res.status(204).end();

        default:

            return res.status(405).json({
                error: "Method Not Allowed"
            });

    }

}`
          },
          {
            type: "paragraph",
            content: "In production, the data would come from a database instead of an in-memory array."
          }
        ]
      },
      {
        heading: "Real-World CRUD Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Frontend", "→",
              "POST /api/products", "→",
              "Validate Request", "→",
              "Authenticate User", "→",
              "Business Logic", "→",
              "Prisma / SQL / ORM", "→",
              "Database", "→",
              "Return JSON Response", "→",
              "Update UI"
            ]
          },
          {
            type: "paragraph",
            content: "This is the backbone of most full-stack applications."
          }
        ]
      },
      {
        heading: "Advantages of API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "1. Full-stack Development"
          },
          {
            type: "paragraph",
            content: "Frontend and backend live in the same project."
          },
          {
            type: "paragraph",
            content: "2. File-based Routing"
          },
          {
            type: "paragraph",
            content: "No router configuration is required."
          },
          {
            type: "paragraph",
            content: "3. Server-side Security"
          },
          {
            type: "paragraph",
            content: "Secrets, API keys, and database credentials stay on the server."
          },
          {
            type: "paragraph",
            content: "4. Easy Database Integration"
          },
          {
            type: "paragraph",
            content: "API Routes work seamlessly with Prisma, Drizzle, Sequelize, Mongoose, PostgreSQL, MySQL, MongoDB, and other data sources."
          },
          {
            type: "paragraph",
            content: "5. Automatic Deployment"
          },
          {
            type: "paragraph",
            content: "Deploying a Next.js application also deploys its API Routes."
          },
          {
            type: "paragraph",
            content: "6. Excellent for Internal APIs"
          },
          {
            type: "paragraph",
            content: "Perfect for dashboards, SaaS products, admin panels, authentication, and backend-for-frontend (BFF) architectures."
          }
        ]
      },
      {
        heading: "Limitations of API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Not Available in the App Router"
          },
          {
            type: "paragraph",
            content: "In modern Next.js, Route Handlers (app/api) are the recommended replacement for new applications using the App Router."
          },
          {
            type: "paragraph",
            content: "Cold Starts on Serverless Platforms"
          },
          {
            type: "paragraph",
            content: "On serverless deployments, infrequently used functions may experience a small startup delay."
          },
          {
            type: "paragraph",
            content: "Less Suitable for Very Large Backend Systems"
          },
          {
            type: "paragraph",
            content: "Large microservice ecosystems often separate frontend and backend into independent services for scaling and team autonomy."
          },
          {
            type: "paragraph",
            content: "Request Limits"
          },
          {
            type: "paragraph",
            content: "Execution time, memory, and payload limits depend on the deployment platform (such as Vercel, AWS Lambda, etc.)."
          }
        ]
      },
      {
        heading: "When to Use API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "API Routes are a great choice when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building applications with the Pages Router.",
              "Creating internal APIs for your frontend.",
              "Integrating with databases.",
              "Handling authentication and sessions.",
              "Sending emails or notifications.",
              "Processing payments.",
              "Acting as a secure proxy to third-party APIs.",
              "Implementing webhooks.",
              "Uploading files."
            ]
          },
          {
            type: "paragraph",
            content: "Consider Route Handlers instead if you're building a new application with the App Router."
          }
        ]
      },
      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Validate every request.",
              "Authenticate and authorize protected endpoints.",
              "Return meaningful HTTP status codes.",
              "Never expose sensitive server errors to clients.",
              "Keep business logic separate from route files by using service layers.",
              "Use environment variables for secrets.",
              "Apply rate limiting to public APIs.",
              "Log requests and failures for observability.",
              "Version public APIs when introducing breaking changes.",
              "Keep responses consistent with a common JSON structure."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Using POST for Everything"
          },
          {
            type: "paragraph",
            content: "Choose HTTP methods that match the intended operation."
          },
          {
            type: "paragraph",
            content: "Ignoring Status Codes"
          },
          {
            type: "paragraph",
            content: "Returning 200 OK for every response makes debugging and client-side handling difficult."
          },
          {
            type: "paragraph",
            content: "Trusting User Input"
          },
          {
            type: "paragraph",
            content: "Always validate and sanitize request data before using it."
          },
          {
            type: "paragraph",
            content: "Exposing Internal Errors"
          },
          {
            type: "paragraph",
            content: "Do not send stack traces or database errors to clients."
          },
          {
            type: "paragraph",
            content: "Mixing Business Logic with Routing"
          },
          {
            type: "paragraph",
            content: "Keep API Route files thin. Move complex logic into reusable services or libraries."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "One of the biggest mistakes beginners make is treating API Routes as \"mini Express apps.\" While they feel similar, they are entry points into a larger Next.js ecosystem. API Routes should primarily coordinate requests—validate input, call business services, interact with databases or external APIs, and return responses. As your application grows, avoid placing all logic inside route files. Instead, organize your project into controllers, services, repositories, and utilities. This separation keeps your code maintainable, testable, and scalable as your application evolves."
          }
        ]
      },
      {
        heading: "Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. What are API Routes in Next.js?",
                answer: "API Routes are server-side endpoints in the Pages Router that allow developers to build backend APIs within a Next.js application."
              },
              {
                question: "2. Where are API Routes located?",
                answer: "Inside the pages/api directory."
              },
              {
                question: "3. How does file-based API routing work?",
                answer: "Each file under pages/api automatically maps to a URL under /api."
              },
              {
                question: "4. What is the difference between GET and POST?",
                answer: "GET retrieves data, while POST creates new resources."
              },
              {
                question: "5. What is req.body used for?",
                answer: "It contains the parsed request payload sent by the client."
              },
              {
                question: "6. Why are HTTP status codes important?",
                answer: "They communicate the outcome of a request to the client and enable proper error handling."
              },
              {
                question: "7. What is the difference between API Routes and Route Handlers?",
                answer: "API Routes belong to the Pages Router (pages/api), whereas Route Handlers belong to the App Router (app/api) and are the modern approach for new Next.js applications."
              },
              {
                question: "8. When should you use query parameters?",
                answer: "For filtering, searching, sorting, pagination, and optional request configuration."
              },
              {
                question: "9. Can API Routes connect directly to databases?",
                answer: "Yes. Since they run on the server, they can safely communicate with databases and external services."
              },
              {
                question: "10. Why should business logic be separated from API Route files?",
                answer: "It improves maintainability, reusability, testing, and scalability."
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
            content: "In this final part, you learned how API Routes handle different HTTP methods to implement RESTful operations, how to work with query parameters, request bodies, status codes, and response headers, and how these pieces come together in a complete CRUD API. You also explored production best practices, common pitfalls, and the strengths and limitations of API Routes. With these three parts combined, you now have a solid foundation in building backend APIs using the Pages Router. In the upcoming lessons, you'll build on this knowledge by exploring Route Handlers, Dynamic API Routes, Middleware, Response Helpers, CRUD APIs, and REST API Integration, which represent the modern backend capabilities of Next.js."
          },
          {
            type: "divider",
          },
        ]
      },
      {
        heading: "API Routes - Part 4: Advanced API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Learn how to build production-ready API Routes by understanding dynamic parameters, authentication, cookies, environment variables, database integration, external APIs, security, performance optimization, and scalable backend architecture."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned how to create API Routes, handle HTTP methods, work with requests and responses, and build CRUD APIs."
          },
          {
            type: "paragraph",
            content: "However, real-world APIs involve much more than simply returning JSON."
          },
          {
            type: "paragraph",
            content: "Production APIs must:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Handle dynamic URLs",
              "Validate user input",
              "Authenticate users",
              "Connect to databases",
              "Call external services",
              "Protect sensitive information",
              "Scale efficiently",
              "Handle failures gracefully"
            ]
          },
          {
            type: "paragraph",
            content: "This lesson focuses on these advanced topics so you can build APIs that are ready for real applications."
          }
        ]
      },
      {
        heading: "Dynamic Parameters Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Most APIs work with individual resources."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "/api/products"
            ]
          },
          {
            type: "paragraph",
            content: "returns every product."
          },
          {
            type: "paragraph",
            content: "But:"
          },
          {
            type: "output",
            content: [
              "/api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "returns only product 15."
          },
          {
            type: "paragraph",
            content: "The number 15 is called a dynamic parameter."
          }
        ]
      },
      {
        heading: "Why Dynamic Parameters Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Without dynamic routing, you would need separate files like:"
          },
          {
            type: "output",
            content: [
              "pages/api/product1.js",
              "pages/api/product2.js",
              "pages/api/product3.js",
              "..."
            ]
          },
          {
            type: "paragraph",
            content: "Obviously this isn't scalable."
          },
          {
            type: "paragraph",
            content: "Instead, Next.js supports dynamic routes."
          },
          {
            type: "tree",
            content: `pages/
    api/
        products/
            [id].js`
          },
          {
            type: "paragraph",
            content: "Now every URL like:"
          },
          {
            type: "output",
            content: [
              "/api/products/1",
              "/api/products/25",
              "/api/products/100"
            ]
          },
          {
            type: "paragraph",
            content: "is handled by a single file."
          }
        ]
      },
      {
        heading: "Accessing Dynamic Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Inside the API Route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    const { id } = req.query;

    res.json({
        productId: id
    });

}`
          },
          {
            type: "paragraph",
            content: "Request:"
          },
          {
            type: "output",
            content: [
              "GET /api/products/25"
            ]
          },
          {
            type: "paragraph",
            content: "Response"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "productId": "25"
}`
          }
        ]
      },
      {
        heading: "Multiple Dynamic Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Folder structure"
          },
          {
            type: "tree",
            content: `pages/api/
users/
    [userId]/
        posts/
            [postId].js`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "output",
            content: [
              "/api/users/12/posts/8"
            ]
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "paragraph",
            content: "req.query"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
    userId: "12",
    postId: "8"
}`
          },
          {
            type: "paragraph",
            content: "This is useful for nested resources."
          }
        ]
      },
      {
        heading: "Catch-all Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes the URL depth is unknown."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "/docs/react/hooks/useEffect",
              "/docs/node/http/server",
              "/docs/javascript/promises"
            ]
          },
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "output",
            content: [
              "pages/api/docs/[...slug].js"
            ]
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "paragraph",
            content: "req.query.slug"
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "code",
            language: "json",
            content: `[
    "react",
    "hooks",
    "useEffect"
]`
          }
        ]
      },
      {
        heading: "Optional Catch-all Routes",
        blocks: [
          {
            type: "output",
            content: [
              "[[...slug]].js"
            ]
          },
          {
            type: "paragraph",
            content: "supports"
          },
          {
            type: "output",
            content: [
              "/docs",
              "/docs/react",
              "/docs/react/hooks"
            ]
          },
          {
            type: "paragraph",
            content: "using one file."
          }
        ]
      },
      {
        heading: "Error Handling Basics",
        blocks: [
          {
            type: "paragraph",
            content: "No API is perfect."
          },
          {
            type: "paragraph",
            content: "Things fail every day."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Database offline",
              "Invalid user input",
              "Missing data",
              "External API unavailable",
              "Authentication failure",
              "Network timeout"
            ]
          },
          {
            type: "paragraph",
            content: "A good API never crashes."
          },
          {
            type: "paragraph",
            content: "It responds gracefully."
          }
        ]
      },
      {
        heading: "Using try...catch",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export default async function handler(req, res) {

    try {

        const data = await getUsers();

        res.status(200).json(data);

    }

    catch (error) {

        res.status(500).json({

            error: "Internal Server Error"

        });

    }

}`
          }
        ]
      },
      {
        heading: "Expected vs Unexpected Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Expected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Invalid email",
              "Wrong password",
              "Product not found",
              "Missing field"
            ]
          },
          {
            type: "paragraph",
            content: "Unexpected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Database crashed",
              "Server memory exhausted",
              "Programming bug",
              "Network failure"
            ]
          },
          {
            type: "paragraph",
            content: "Expected errors should return meaningful responses."
          },
          {
            type: "paragraph",
            content: "Unexpected errors should be logged while returning generic messages to clients."
          }
        ]
      },
      {
        heading: "Validation Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `createUser(req.body);`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!req.body.email) {

    return res.status(400).json({

        error: "Email required"

    });

}`
          },
          {
            type: "paragraph",
            content: "Never trust client input."
          }
        ]
      },
      {
        heading: "Authentication Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers one question:"
          },
          {
            type: "paragraph",
            content: "\"Who is making this request?\""
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login",
              "JWT",
              "OAuth",
              "Session Cookies",
              "Clerk",
              "NextAuth",
              "Auth.js",
              "Firebase Auth"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Authorization Header", "→",
              "API Route", "→",
              "Verify Token", "→",
              "Authenticated User"
            ]
          },
          {
            type: "paragraph",
            content: "Only verified users should access protected endpoints."
          }
        ]
      },
      {
        heading: "Authorization Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication verifies identity."
          },
          {
            type: "paragraph",
            content: "Authorization verifies permissions."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "comparison",
            leftTitle: "User: John",
            leftItems: [
              "Authenticated? ✅ Yes",
              "Can delete all users? ❌ No"
            ],
            rightTitle: "Admin: Sarah",
            rightItems: [
              "Authenticated? ✅ Yes",
              "Can delete users? ✅ Yes"
            ]
          },
          {
            type: "paragraph",
            content: "Never confuse authentication with authorization."
          }
        ]
      },
      {
        heading: "Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies store small pieces of information in browsers."
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session ID",
              "Theme",
              "Shopping Cart",
              "Authentication Token",
              "Language"
            ]
          }
        ]
      },
      {
        heading: "Reading Cookies",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const token = req.cookies.token;`
          }
        ]
      },
      {
        heading: "Setting Cookies",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader(

    "Set-Cookie",

    "theme=dark; Path=/"

);`
          }
        ]
      },
      {
        heading: "Secure Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Production cookies should include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HttpOnly",
              "Secure",
              "SameSite=Lax",
              "Path=/"
            ]
          },
          {
            type: "paragraph",
            content: "These improve security."
          }
        ]
      },
      {
        heading: "Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Never hardcode secrets."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `const password = "myPassword123";`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "text",
            content: `DATABASE_URL=...

JWT_SECRET=...

API_KEY=...`
          },
          {
            type: "paragraph",
            content: "Read them:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          }
        ]
      },
      {
        heading: "Why Environment Variables Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine uploading this code:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const stripeSecret = "sk_live_xxxxxxxxx";`
          },
          {
            type: "paragraph",
            content: "to GitHub."
          },
          {
            type: "paragraph",
            content: "Now anyone can steal your payment system."
          },
          {
            type: "paragraph",
            content: "Environment variables prevent this."
          }
        ]
      },
      {
        heading: "Database Connection Overview",
        blocks: [
          {
            type: "paragraph",
            content: "API Routes often connect directly to databases."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API Route", "→",
              "Prisma", "→",
              "PostgreSQL"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API Route", "→",
              "Mongoose", "→",
              "MongoDB"
            ]
          }
        ]
      },
      {
        heading: "Example with Prisma",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const users = await prisma.user.findMany();`
          }
        ]
      },
      {
        heading: "Example with SQL",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const users = await db.query(

    "SELECT * FROM users"

);`
          }
        ]
      },
      {
        heading: "Connection Reuse",
        blocks: [
          {
            type: "paragraph",
            content: "Creating a new database connection for every request is expensive."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Singleton Database Connection", "→",
              "Reuse Existing Connection", "→",
              "Better Performance"
            ]
          },
          {
            type: "paragraph",
            content: "Most ORMs provide pooling or singleton patterns."
          }
        ]
      },
      {
        heading: "External APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Many APIs don't own all their data."
          },
          {
            type: "paragraph",
            content: "Instead they call other APIs."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Your API", "→",
              "Weather API", "→",
              "Weather Data"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(

    "https://api.weather.com"

);

const data = await response.json();

res.json(data);`
          },
          {
            type: "paragraph",
            content: "Your API becomes a secure backend proxy."
          }
        ]
      },
      {
        heading: "Why Use External APIs Through API Routes?",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Weather API"
            ]
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Next.js API", "→",
              "Weather API"
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
              "Hide API keys",
              "Add caching",
              "Validate requests",
              "Combine multiple APIs",
              "Log requests",
              "Rate limit users"
            ]
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Fast APIs create better user experiences."
          },
          {
            type: "paragraph",
            content: "Reduce Database Queries"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "Query", "→",
              "Loop", "→",
              "100 More Queries"
            ]
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "output",
            content: [
              "Single Optimized Query"
            ]
          },
          {
            type: "paragraph",
            content: "Use Pagination"
          },
          {
            type: "paragraph",
            content: "Don't return"
          },
          {
            type: "output",
            content: [
              "100,000 users"
            ]
          },
          {
            type: "paragraph",
            content: "Return"
          },
          {
            type: "output",
            content: [
              "20 users/page"
            ]
          },
          {
            type: "paragraph",
            content: "Cache Frequently Used Data"
          },
          {
            type: "paragraph",
            content: "Instead of querying repeatedly,"
          },
          {
            type: "paragraph",
            content: "store results temporarily."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Cache", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "If the cache contains the data, the database is skipped."
          },
          {
            type: "paragraph",
            content: "Compress Responses"
          },
          {
            type: "paragraph",
            content: "Large JSON responses increase download time."
          },
          {
            type: "paragraph",
            content: "Enable compression in production environments when appropriate."
          },
          {
            type: "paragraph",
            content: "Avoid Blocking Work"
          },
          {
            type: "paragraph",
            content: "Sending emails or generating PDFs should often happen asynchronously instead of blocking the response."
          }
        ]
      },
      {
        heading: "Security Basics",
        blocks: [
          {
            type: "paragraph",
            content: "Security is not optional."
          },
          {
            type: "paragraph",
            content: "Validate Input"
          },
          {
            type: "paragraph",
            content: "Never trust user input."
          },
          {
            type: "paragraph",
            content: "Sanitize Data"
          },
          {
            type: "paragraph",
            content: "Prevent malicious content from entering databases or responses."
          },
          {
            type: "paragraph",
            content: "Prevent SQL Injection"
          },
          {
            type: "paragraph",
            content: "Never do this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.query(

\`SELECT * FROM users WHERE id = \${id}\`

);`
          },
          {
            type: "paragraph",
            content: "Use parameterized queries instead."
          },
          {
            type: "paragraph",
            content: "Authenticate Sensitive APIs"
          },
          {
            type: "paragraph",
            content: "Never expose admin APIs publicly."
          },
          {
            type: "paragraph",
            content: "Rate Limiting"
          },
          {
            type: "paragraph",
            content: "Prevent abuse."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "100 requests/minute"
            ]
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "output",
            content: [
              "Unlimited Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Hide Internal Errors"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "databasePassword":"..."
}`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "error":"Internal Server Error"
}`
          },
          {
            type: "paragraph",
            content: "Use HTTPS"
          },
          {
            type: "paragraph",
            content: "Always encrypt API traffic in production."
          }
        ]
      },
      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Keep Routes Thin"
          },
          {
            type: "paragraph",
            content: "API Routes should orchestrate requests, not contain complex business logic."
          },
          {
            type: "paragraph",
            content: "Move reusable logic into service files."
          },
          {
            type: "paragraph",
            content: "Validate Everything"
          },
          {
            type: "paragraph",
            content: "Validate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "body",
              "query",
              "headers",
              "cookies"
            ]
          },
          {
            type: "paragraph",
            content: "Return Consistent JSON"
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": true,
    "data": {}
}`
          },
          {
            type: "paragraph",
            content: "Error"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": false,
    "error": "User not found"
}`
          },
          {
            type: "paragraph",
            content: "Consistency simplifies frontend development."
          },
          {
            type: "paragraph",
            content: "Log Errors"
          },
          {
            type: "paragraph",
            content: "Use centralized logging tools to monitor failures instead of relying solely on console.log."
          },
          {
            type: "paragraph",
            content: "Version Public APIs"
          },
          {
            type: "paragraph",
            content: "For breaking changes, expose versions such as:"
          },
          {
            type: "output",
            content: [
              "/api/v1/users",
              "/api/v2/users"
            ]
          },
          {
            type: "paragraph",
            content: "Keep Secrets Out of Source Code"
          },
          {
            type: "paragraph",
            content: "Use environment variables for all sensitive configuration."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Mixing Business Logic with API Code"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "Route", "→",
              "500 lines"
            ]
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "flow",
            steps: [
              "Route", "→",
              "Service", "→",
              "Repository", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Returning Incorrect Status Codes"
          },
          {
            type: "paragraph",
            content: "Returning 200 OK for every response hides failures from clients."
          },
          {
            type: "paragraph",
            content: "Forgetting Input Validation"
          },
          {
            type: "paragraph",
            content: "Never assume request data is valid."
          },
          {
            type: "paragraph",
            content: "Making Sequential External Requests"
          },
          {
            type: "paragraph",
            content: "When requests are independent, run them in parallel using Promise.all()."
          },
          {
            type: "paragraph",
            content: "Returning Huge Payloads"
          },
          {
            type: "paragraph",
            content: "Large responses increase latency and memory usage."
          },
          {
            type: "paragraph",
            content: "Paginate or filter data whenever possible."
          },
          {
            type: "paragraph",
            content: "Exposing Secrets"
          },
          {
            type: "paragraph",
            content: "Never return tokens, API keys, database credentials, or stack traces to the client."
          }
        ]
      },
      {
        heading: "Production Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A scalable Next.js backend typically separates responsibilities into dedicated layers."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API Route", "→",
              "Authentication", "→",
              "Validation", "→",
              "Business Service", "→",
              "Database / External APIs", "→",
              "Caching Layer", "→",
              "JSON Response"
            ]
          },
          {
            type: "paragraph",
            content: "Each layer has a single responsibility, making the application easier to test, maintain, and scale."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A common misconception is that API Routes are intended to replace every backend architecture. They are excellent for backend-for-frontend (BFF) patterns, internal APIs, dashboards, SaaS applications, authentication flows, and medium-sized services. However, as systems grow into distributed microservices with multiple independent clients (web, mobile, third-party integrations), organizations often extract business logic into dedicated backend services while Next.js continues acting as the frontend layer or API gateway. Designing your API Routes with clear separation of concerns from the beginning makes this transition much easier."
          }
        ]
      },
      {
        heading: "Interview Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "1. What are dynamic API Routes in Next.js?",
                answer: "They are API Routes that use dynamic segments (such as [id].js) to handle requests for different resource identifiers with a single file."
              },
              {
                question: "2. How do you access a dynamic parameter?",
                answer: "Using req.query."
              },
              {
                question: "3. Why should API Routes use environment variables?",
                answer: "To securely store secrets like database URLs, JWT secrets, and API keys instead of hardcoding them."
              },
              {
                question: "4. What is the difference between authentication and authorization?",
                answer: "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to do."
              },
              {
                question: "5. Why should external APIs be called from API Routes instead of directly from the browser?",
                answer: "To hide API keys, validate requests, apply caching, aggregate multiple services, and enforce security policies."
              },
              {
                question: "6. Why is input validation important?",
                answer: "It prevents invalid data, security vulnerabilities, and unexpected application behavior."
              },
              {
                question: "7. How should production APIs handle unexpected errors?",
                answer: "Catch them, log them for monitoring, and return generic error messages without exposing internal implementation details."
              },
              {
                question: "8. What are some common API performance optimizations?",
                answer: "Database query optimization, pagination, caching, connection reuse, response compression, and parallelizing independent requests."
              },
              {
                question: "9. Why shouldn't business logic be placed directly inside API Routes?",
                answer: "Separating business logic into service layers improves maintainability, testing, reusability, and scalability."
              },
              {
                question: "10. When should you choose API Routes over Server Actions?",
                answer: "Choose API Routes when you need reusable HTTP endpoints, third-party integrations, webhooks, public or mobile APIs, or backend services consumed by multiple clients. Server Actions are more suitable for UI-driven mutations initiated directly from React components."
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
            content: "In this lesson, you explored the advanced capabilities required to build production-ready API Routes. You learned how dynamic routing enables flexible endpoints, how to handle errors gracefully, authenticate and authorize users, work with cookies and environment variables, connect to databases, integrate external APIs, optimize performance, and secure your backend. You also examined common architectural patterns, production best practices, and frequent mistakes to avoid. With both parts combined, you now have a strong understanding of API Routes in the Pages Router. In the next lessons, you'll build on this foundation by exploring Route Handlers, Dynamic API Routes, Middleware, Response Helpers, CRUD APIs, and REST API Integration, which represent the modern backend development workflow in Next.js."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Route Handlers
============================= */
    "nextjs-api-route-handlers": {
    title: "Route Handlers",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Why Route Handlers were introduced",
        blocks: [
          {
            type: "paragraph",
            content: "Before the App Router existed, Next.js only had API Routes inside the Pages Router.[cite: 1]"
          },
          {
            type: "tree",
            content: `pages/
    api/
        users.js
        posts.js`
          },
          {
            type: "paragraph",
            content: "These API Routes allowed developers to build backend APIs without creating a separate Express or Node.js server.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Although API Routes were powerful, they had one major limitation:[cite: 1]"
          },
          {
            type: "paragraph",
            content: "They belonged only to the Pages Router architecture.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "When Next.js introduced the App Router, everything changed.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "The App Router introduced:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "React Server Components[cite: 1]",
              "Streaming[cite: 1]",
              "Nested layouts[cite: 1]",
              "Server Actions[cite: 1]",
              "Route Groups[cite: 1]",
              "Partial Prerendering[cite: 1]",
              "Better caching[cite: 1]",
              "Better server rendering[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "But API Routes did not naturally fit into this new architecture.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Next.js therefore introduced Route Handlers.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Route Handlers are the App Router's native backend API solution.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Think of them as:[cite: 1]"
          },
          {
            type: "paragraph",
            content: "API Routes redesigned specifically for the App Router.[cite: 1]"
          }
        ]
      },

      {
        heading: "Evolution of Backend APIs in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding the history makes Route Handlers much easier.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Phase 1 — Traditional Node.js[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Express Server", "→",
              "REST API", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Everything was managed manually.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Phase 2 — Next.js Pages Router[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "pages/api", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Backend APIs lived inside Next.js.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Phase 3 — Next.js App Router[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Route Handlers", "→",
              "Server Components", "→",
              "Server Actions", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Everything now shares one modern server architecture.[cite: 1]"
          }
        ]
      },

      {
        heading: "Why API Routes Were Not Enough",
        blocks: [
          {
            type: "paragraph",
            content: "API Routes had several architectural limitations.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "1. Separate Routing System[cite: 1]"
          },
          {
            type: "paragraph",
            content: "API Routes existed only under[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `pages/api`
          },
          {
            type: "paragraph",
            content: "while pages lived elsewhere.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "There wasn't a unified routing architecture.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "2. Different Request APIs[cite: 1]"
          },
          {
            type: "paragraph",
            content: "API Routes used Node.js style objects.[cite: 1]"
          },
          {
            type: "output",
            content: [
              "req",
              "",
              "res"
            ]
          },
          {
            type: "paragraph",
            content: "Modern browsers use the Web Fetch API.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Next.js wanted both client and server to use similar APIs.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "3. Limited Edge Runtime Integration[cite: 1]"
          },
          {
            type: "paragraph",
            content: "API Routes originally depended heavily on Node.js.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Route Handlers were designed to support[cite: 1]"
          },
          {
            type: "output",
            content: [
              "Node Runtime",
              "",
              "Edge Runtime"
            ]
          },
          {
            type: "paragraph",
            content: "without changing application logic.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "4. Better Streaming[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Modern React supports streaming.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Streaming requires APIs based upon[cite: 1]"
          },
          {
            type: "output",
            content: [
              "Request",
              "",
              "Response",
              "",
              "ReadableStream"
            ]
          },
          {
            type: "paragraph",
            content: "rather than Express-like objects.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "5. Unified Web Standard APIs[cite: 1]"
          },
          {
            type: "paragraph",
            content: "The entire web platform is moving toward[cite: 1]"
          },
          {
            type: "output",
            content: [
              "Request",
              "",
              "Response",
              "",
              "Headers",
              "",
              "Cookies",
              "",
              "Streams"
            ]
          },
          {
            type: "paragraph",
            content: "instead of framework-specific objects.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Route Handlers embrace these standards.[cite: 1]"
          }
        ]
      },

      {
        heading: "API Routes vs Route Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "Although both create backend APIs, they belong to different architectures.[cite: 1]"
          },
          {
            type: "table",
            headers: ["Feature", "API Routes", "Route Handlers"],
            rows: [
              ["Router", "Pages Router", "App Router"],
              ["Folder", "pages/api", "app"],
              ["File", "users.js", "route.ts"],
              ["Request", "req", "Request / NextRequest"],
              ["Response", "res", "Response / NextResponse"],
              ["Streaming", "Limited", "Native"],
              ["Edge Runtime", "Limited", "Excellent"],
              ["Server Components Integration", "No", "Yes"],
              ["Modern Fetch APIs", "Partial", "Complete"],
              ["Future Direction", "Legacy", "Recommended"]
            ]
          },
          {
            type: "paragraph",
            content: "API Routes are still supported.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "However,[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Route Handlers are the preferred backend solution for all new App Router applications.[cite: 1]"
          }
        ]
      },

      {
        heading: "What Are Route Handlers?",
        blocks: [
          {
            type: "paragraph",
            content: "A Route Handler is simply a server file that responds to HTTP requests.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Instead of rendering UI,[cite: 1]"
          },
          {
            type: "paragraph",
            content: "it returns[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JSON[cite: 1]",
              "text[cite: 1]",
              "HTML[cite: 1]",
              "images[cite: 1]",
              "files[cite: 1]",
              "streams[cite: 1]",
              "redirects[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Think of it as[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "URL", "→",
              "Route Handler", "→",
              "Any HTTP Response"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike Pages,[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Route Handlers never return React components.[cite: 1]"
          }
        ]
      },

      {
        heading: "App Router Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A typical App Router application looks like[cite: 1]"
          },
          {
            type: "tree",
            content: `app/

    dashboard/

        page.tsx

    products/

        page.tsx

        route.ts

    users/

        route.ts

    api/

        products/

            route.ts`
          },
          {
            type: "paragraph",
            content: "Notice that[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `page.tsx`
          },
          {
            type: "paragraph",
            content: "renders UI,[cite: 1]"
          },
          {
            type: "paragraph",
            content: "while[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `route.ts`
          },
          {
            type: "paragraph",
            content: "handles HTTP requests.[cite: 1]"
          }
        ]
      },

      {
        heading: "Understanding route.ts",
        blocks: [
          {
            type: "paragraph",
            content: "The filename is always[cite: 1]"
          },
          {
            type: "output",
            content: [
              "route.ts",
              "",
              "or",
              "",
              "route.js"
            ]
          },
          {
            type: "paragraph",
            content: "Example[cite: 1]"
          },
          {
            type: "tree",
            content: `app/

    api/

        users/

            route.ts`
          },
          {
            type: "paragraph",
            content: "becomes[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `/api/users`
          }
        ]
      },

      {
        heading: "Route Handlers vs Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Inside one folder,[cite: 1]"
          },
          {
            type: "paragraph",
            content: "you may have[cite: 1]"
          },
          {
            type: "tree",
            content: `products/

    page.tsx`
          },
          {
            type: "paragraph",
            content: "or[cite: 1]"
          },
          {
            type: "tree",
            content: `products/

    route.ts`
          },
          {
            type: "paragraph",
            content: "but not both serving the exact same route.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "This prevents ambiguity about whether the route should render UI or return an HTTP response.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "If you need both a page and an API, place the API in a nested path such as products/api/route.ts or api/products/route.ts.[cite: 1]"
          }
        ]
      },

      {
        heading: "Folder Conventions",
        blocks: [
          {
            type: "paragraph",
            content: "Example[cite: 1]"
          },
          {
            type: "tree",
            content: `app/

    api/

        products/

            route.ts

        users/

            route.ts

        orders/

            route.ts`
          },
          {
            type: "paragraph",
            content: "Generated endpoints[cite: 1]"
          },
          {
            type: "output",
            content: [
              "/api/products",
              "",
              "/api/users",
              "",
              "/api/orders"
            ]
          },
          {
            type: "paragraph",
            content: "Everything is file-system based.[cite: 1]"
          }
        ]
      },

      {
        heading: "Your First Route Handler",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return Response.json({

        message: "Hello DevSphere"

    });

}`
          },
          {
            type: "paragraph",
            content: "Visiting[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `/api`
          },
          {
            type: "paragraph",
            content: "returns[cite: 1]"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "message": "Hello DevSphere"
}`
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No Express.[cite: 1]",
              "No server setup.[cite: 1]",
              "No routing configuration.[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Understanding HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content: "Every HTTP request contains a method.[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "GET[cite: 1]",
              "POST[cite: 1]",
              "PUT[cite: 1]",
              "PATCH[cite: 1]",
              "DELETE[cite: 1]",
              "OPTIONS[cite: 1]",
              "HEAD[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Each represents a different operation.[cite: 1]"
          }
        ]
      },

      {
        heading: "GET",
        blocks: [
          {
            type: "paragraph",
            content: "Used for reading data.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Example[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `GET /api/products`
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return Response.json({

        products: []

    });

}`
          },
          {
            type: "paragraph",
            content: "GET should never modify data.[cite: 1]"
          }
        ]
      },

      {
        heading: "POST",
        blocks: [
          {
            type: "paragraph",
            content: "Creates new data.[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `POST /api/products`
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

}`
          },
          {
            type: "paragraph",
            content: "Usually used for[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "registration[cite: 1]",
              "login[cite: 1]",
              "creating posts[cite: 1]",
              "creating products[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "PUT",
        blocks: [
          {
            type: "paragraph",
            content: "Updates an entire resource.[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `PUT /api/products/12`
          },
          {
            type: "paragraph",
            content: "Example[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function PUT(request: Request) {

}`
          }
        ]
      },

      {
        heading: "PATCH",
        blocks: [
          {
            type: "paragraph",
            content: "Updates only selected fields.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Example[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Instead of replacing[cite: 1]"
          },
          {
            type: "output",
            content: [
              "Product"
            ]
          },
          {
            type: "paragraph",
            content: "only update[cite: 1]"
          },
          {
            type: "output",
            content: [
              "Price"
            ]
          },
          {
            type: "paragraph",
            content: "PATCH performs partial updates.[cite: 1]"
          }
        ]
      },

      {
        heading: "DELETE",
        blocks: [
          {
            type: "paragraph",
            content: "Removes resources.[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /api/products/12`
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function DELETE() {

}`
          }
        ]
      },

      {
        heading: "OPTIONS",
        blocks: [
          {
            type: "paragraph",
            content: "Used mainly by browsers for CORS preflight requests.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "It tells clients which HTTP methods and headers are allowed before the actual request is sent.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Example:[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function OPTIONS() {
  return new Response(null, {
    headers: {
      Allow: "GET, POST, PUT, DELETE",
    },
  });
}`
          }
        ]
      },

      {
        heading: "HEAD",
        blocks: [
          {
            type: "paragraph",
            content: "HEAD works like GET but returns only the headers, not the response body.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "It's useful when clients need metadata such as:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Length[cite: 1]",
              "Last-Modified[cite: 1]",
              "Content-Type[cite: 1]",
              "Cache-Control[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "without downloading the full resource.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function HEAD() {
  return new Response(null, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}`
          }
        ]
      },

      {
        heading: "Request Object",
        blocks: [
          {
            type: "paragraph",
            content: "Every Route Handler receives a request object.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(request: Request) {

}`
          },
          {
            type: "paragraph",
            content: "This follows the standard Web Fetch API, making it familiar to developers who have used fetch() in browsers or other JavaScript runtimes.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "The request contains everything sent by the client:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "URL[cite: 1]",
              "HTTP method[cite: 1]",
              "Headers[cite: 1]",
              "Cookies[cite: 1]",
              "Body[cite: 1]",
              "Query parameters[cite: 1]",
              "Abort signal[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Think of it as a container holding the entire incoming HTTP request.[cite: 1]"
          }
        ]
      },

      {
        heading: "Reading the URL",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(request: Request) {

    console.log(request.url);

    return Response.json({});

}`
          },
          {
            type: "paragraph",
            content: "Example output:[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com/api/products?page=2`
          }
        ]
      },

      {
        heading: "Reading Query Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Use the URL API to extract search parameters.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    const page = searchParams.get("page");

    return Response.json({

        page

    });

}`
          },
          {
            type: "paragraph",
            content: "Request:[cite: 1]"
          },
          {
            type: "code",
            language: "text",
            content: `/api/products?page=3`
          },
          {
            type: "paragraph",
            content: "Response:[cite: 1]"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "page": "3"
}`
          }
        ]
      },

      {
        heading: "Reading the Request Body",
        blocks: [
          {
            type: "paragraph",
            content: "For methods like POST, PUT, or PATCH, you often need to read JSON sent by the client.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

    const body = await request.json();

    return Response.json(body);

}`
          },
          {
            type: "paragraph",
            content: "Because the body is a stream, it can usually be read only once.[cite: 1]"
          }
        ]
      },

      {
        heading: "Reading Form Data",
        blocks: [
          {
            type: "paragraph",
            content: "For HTML form submissions:[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

    const formData = await request.formData();

    const name = formData.get("name");

    return Response.json({

        name

    });

}`
          },
          {
            type: "paragraph",
            content: "This works seamlessly with traditional forms and file uploads.[cite: 1]"
          }
        ]
      },

      {
        heading: "NextRequest",
        blocks: [
          {
            type: "paragraph",
            content: "Although the standard Request object is sufficient in many cases, Next.js provides an enhanced version called NextRequest.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

}`
          },
          {
            type: "paragraph",
            content: "NextRequest extends the native Request object with Next.js-specific utilities.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Common additions include:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easier cookie access[cite: 1]",
              "Convenient URL parsing[cite: 1]",
              "Integration with middleware features[cite: 1]",
              "Better framework-specific APIs[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Use Request when you only need standard Web APIs, and NextRequest when you want Next.js enhancements.[cite: 1]"
          }
        ]
      },

      {
        heading: "Response Object",
        blocks: [
          {
            type: "paragraph",
            content: "Every Route Handler must return a response.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "The simplest approach uses the standard Response object.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return new Response("Hello");

}`
          },
          {
            type: "paragraph",
            content: "A response consists of:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Status code[cite: 1]",
              "Headers[cite: 1]",
              "Body[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Without a returned response, the client will never receive data.[cite: 1]"
          }
        ]
      },

      {
        heading: "Returning JSON",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js makes JSON responses straightforward.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return Response.json({

        success: true,

        message: "Products loaded"

    });

}`
          },
          {
            type: "paragraph",
            content: "This automatically:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sets the correct Content-Type[cite: 1]",
              "Converts JavaScript objects into JSON[cite: 1]",
              "Returns a valid HTTP response[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "NextResponse",
        blocks: [
          {
            type: "paragraph",
            content: "For advanced features, Next.js provides NextResponse.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({

        success: true

    });

}`
          },
          {
            type: "paragraph",
            content: "NextResponse adds framework-specific capabilities such as:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cookie manipulation[cite: 1]",
              "URL rewrites[cite: 1]",
              "Redirect helpers[cite: 1]",
              "Middleware integration[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Setting Custom Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Headers provide metadata about the response.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return new Response("Hello", {

        headers: {

            "Content-Type": "text/plain",

            "Cache-Control": "no-store"

        }

    });

}`
          },
          {
            type: "paragraph",
            content: "Headers are commonly used for:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Caching[cite: 1]",
              "Authentication[cite: 1]",
              "Security[cite: 1]",
              "CORS[cite: 1]",
              "Content negotiation[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Working with Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Using NextResponse, you can easily set cookies.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";

export async function GET() {

    const response = NextResponse.json({

        success: true

    });

    response.cookies.set("theme", "dark");

    return response;

}`
          },
          {
            type: "paragraph",
            content: "Cookies are widely used for:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sessions[cite: 1]",
              "Authentication tokens[cite: 1]",
              "User preferences[cite: 1]",
              "Shopping carts[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Redirects",
        blocks: [
          {
            type: "paragraph",
            content: "A Route Handler can redirect users to another URL.[cite: 1]"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.redirect(

        new URL("/login", "https://example.com")

    );

}`
          },
          {
            type: "paragraph",
            content: "Common use cases include:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Redirecting unauthenticated users[cite: 1]",
              "Moving to a new endpoint[cite: 1]",
              "Handling outdated URLs[cite: 1]"
            ]
          }
        ]
      },

      {
        heading: "Streaming Responses",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Route Handlers is native support for streaming.[cite: 1]"
          },
          {
            type: "paragraph",
            content: "Instead of waiting until all data is ready, the server can send chunks as they become available.[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "Chunk 1", "→",
              "Chunk 2", "→",
              "Chunk 3", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming is ideal for:[cite: 1]"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "AI responses[cite: 1]",
              "Chat applications[cite: 1]",
              "Large reports[cite: 1]",
              "Log viewers[cite: 1]",
              "Long-running tasks[cite: 1]"
            ]
          },
          {
            type: "paragraph",
            content: "Because Route Handlers are built on the Web Streams API, they integrate naturally with modern streaming workflows.[cite: 1]"
          }
        ]
      },

      {
        heading: "Route Handler Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Every request follows a predictable lifecycle.[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Client sends HTTP request", "→",
              "Next.js Router matches route.ts", "→",
              "Corresponding HTTP method (GET, POST, etc.) executes", "→",
              "Read request data (headers, body, cookies, URL)", "→",
              "Business logic (Database / External APIs / Validation)", "→",
              "Create Response or NextResponse", "→",
              "Send HTTP response to client"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this lifecycle makes debugging much easier because every request passes through the same sequence of stages.[cite: 1]"
          }
        ]
      },

      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce application.[cite: 1]"
          },
          {
            type: "flow",
            steps: [
              "Customer opens Product Page", "→",
              "GET /api/products/15", "→",
              "Route Handler", "→",
              "Database Query", "→",
              "JSON Response", "→",
              "Product Displayed"
            ]
          },
          {
            type: "paragraph",
            content: "The Route Handler acts as the bridge between the frontend and backend, retrieving data and returning it in a standardized HTTP response.[cite: 1]"
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "Route Handlers - Part 2"
      },

      {
        heading: "Route Handlers with Server Components",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of the App Router is that Route Handlers and Server Components live in the same server environment."
          },
          {
            type: "paragraph",
            content: "Unlike the Pages Router, where UI and backend APIs felt like separate systems, the App Router allows them to work together naturally."
          },
          {
            type: "paragraph",
            content: "Consider this structure:"
          },
          {
            type: "tree",
            content: `app/
│
├── products/
│   ├── page.tsx
│   └── route.ts`
          },
          {
            type: "paragraph",
            content: "page.tsx renders UI."
          },
          {
            type: "paragraph",
            content: "route.ts handles HTTP requests."
          },
          {
            type: "paragraph",
            content: "Although they are in the same folder hierarchy, they serve different purposes."
          }
        ]
      },
      {
        heading: "Should Server Components Call Route Handlers?",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners write code like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const products = await fetch("http://localhost:3000/api/products");`
          },
          {
            type: "paragraph",
            content: "inside a Server Component."
          },
          {
            type: "paragraph",
            content: "This works."
          },
          {
            type: "paragraph",
            content: "However, it is usually not the recommended approach."
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because both the Server Component and the Route Handler already execute on the server."
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "HTTP Request", "→",
              "Route Handler", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "you can simply do"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "which removes an unnecessary HTTP request."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
    const products = await prisma.product.findMany();

    return (
        <div>
            {products.map(product => (
                <p key={product.id}>{product.name}</p>
            ))}
        </div>
    );
}`
          },
          {
            type: "paragraph",
            content: "This is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "faster",
              "simpler",
              "more efficient"
            ]
          }
        ]
      },
      {
        heading: "When Should Server Components Call Route Handlers?",
        blocks: [
          {
            type: "paragraph",
            content: "There are valid situations."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "consuming an external microservice",
              "calling a third-party API gateway",
              "sharing an API with mobile applications",
              "exposing a public REST API"
            ]
          },
          {
            type: "paragraph",
            content: "Architecture:"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "Route Handler", "→",
              "External Service"
            ]
          },
          {
            type: "paragraph",
            content: "In these situations, using Route Handlers makes sense because they become a reusable backend interface."
          }
        ]
      },
      {
        heading: "Route Handlers with Server Actions",
        blocks: [
          {
            type: "paragraph",
            content: "Route Handlers and Server Actions solve different problems."
          },
          {
            type: "paragraph",
            content: "Many developers confuse them."
          },
          {
            type: "paragraph",
            content: "Route Handler"
          },
          {
            type: "paragraph",
            content: "Handles HTTP requests."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "GET /api/products", "→",
              "JSON"
            ]
          },
          {
            type: "paragraph",
            content: "Server Action"
          },
          {
            type: "paragraph",
            content: "Executes a server function."
          },
          {
            type: "flow",
            steps: [
              "<form>", "→",
              "Server Action", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "No REST endpoint is required."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "paragraph",
            content: "Route Handler"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

    const body = await request.json();

}`
          },
          {
            type: "paragraph",
            content: "Server Action"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use server";

export async function createProduct(formData: FormData) {

}`
          },
          {
            type: "paragraph",
            content: "Notice how much simpler Server Actions are."
          }
        ]
      },
      {
        heading: "Which Should You Choose?",
        blocks: [
          {
            type: "paragraph",
            content: "Use Server Actions when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "handling forms",
              "updating data",
              "creating records",
              "deleting records",
              "authenticated mutations"
            ]
          },
          {
            type: "paragraph",
            content: "Use Route Handlers when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "exposing APIs",
              "webhooks",
              "mobile apps",
              "third-party integrations",
              "public REST APIs"
            ]
          }
        ]
      },
      {
        heading: "Can They Work Together?",
        blocks: [
          {
            type: "paragraph",
            content: "Absolutely."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Server Action", "→",
              "Database", "→",
              "revalidatePath()", "→",
              "Updated UI"
            ]
          },
          {
            type: "paragraph",
            content: "Another example"
          },
          {
            type: "flow",
            steps: [
              "External Mobile App", "→",
              "Route Handler", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Same database."
          },
          {
            type: "paragraph",
            content: "Different consumers."
          }
        ]
      },
      {
        heading: "Database Integration",
        blocks: [
          {
            type: "paragraph",
            content: "Most Route Handlers exist to interact with a database."
          },
          {
            type: "paragraph",
            content: "Architecture"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Route Handler", "→",
              "ORM", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { prisma } from "@/lib/prisma";

export async function GET() {

    const users = await prisma.user.findMany();

    return Response.json(users);

}`
          },
          {
            type: "paragraph",
            content: "Creating Data"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

    const body = await request.json();

    const user = await prisma.user.create({

        data: body

    });

    return Response.json(user);

}`
          },
          {
            type: "paragraph",
            content: "SQL Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await db.query(

    "SELECT * FROM users"

);`
          },
          {
            type: "paragraph",
            content: "The Route Handler doesn't care which database you use."
          },
          {
            type: "paragraph",
            content: "It works equally well with"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "SQLite",
              "PlanetScale",
              "Supabase",
              "Neon",
              "Turso"
            ]
          }
        ]
      },
      {
        heading: "Database Connection Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Never create a new database connection on every request."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `const prisma = new PrismaClient();`
          },
          {
            type: "paragraph",
            content: "inside every Route Handler."
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { prisma } from "@/lib/prisma";`
          },
          {
            type: "paragraph",
            content: "Reuse one shared client."
          }
        ]
      },
      {
        heading: "Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers"
          },
          {
            type: "output",
            content: [
              "\"Who is this user?\""
            ]
          },
          {
            type: "paragraph",
            content: "Route Handlers commonly verify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "login sessions",
              "JWT tokens",
              "OAuth providers",
              "API keys"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { auth } from "@/auth";

export async function GET() {

    const session = await auth();

}`
          },
          {
            type: "paragraph",
            content: "If authentication fails"
          },
          {
            type: "output",
            content: [
              "401 Unauthorized"
            ]
          },
          {
            type: "paragraph",
            content: "should be returned."
          }
        ]
      },
      {
        heading: "Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication identifies the user."
          },
          {
            type: "paragraph",
            content: "Authorization determines what that user can do."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Admin", "→",
              "Delete Product", "→",
              "Allowed"
            ]
          },
          {
            type: "paragraph",
            content: "Normal User"
          },
          {
            type: "flow",
            steps: [
              "Delete Product", "→",
              "Forbidden"
            ]
          },
          {
            type: "paragraph",
            content: "Return"
          },
          {
            type: "output",
            content: [
              "403 Forbidden"
            ]
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "output",
            content: [
              "401 Unauthorized"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `if(session.user.role !== "admin"){

    return Response.json(

        {

            error: "Forbidden"

        },

        {

            status:403

        }

    );

}`
          },
          {
            type: "paragraph",
            content: "Always perform authorization checks on the server, never only in the client UI."
          }
        ]
      },
      {
        heading: "Caching",
        blocks: [
          {
            type: "paragraph",
            content: "Route Handlers can participate in Next.js caching."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {

    cache: "force-cache"

});`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {

    cache: "no-store"

});`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url, {

    next: {

        revalidate:60

    }

});`
          },
          {
            type: "paragraph",
            content: "Remember:"
          },
          {
            type: "paragraph",
            content: "Caching reduces database queries."
          },
          {
            type: "paragraph",
            content: "Cache Flow"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Route Handler", "→",
              "Cache?", "→",
              "Yes", "→",
              "Return Cached Data"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise"
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "Cache", "→",
              "Response"
            ]
          }
        ]
      },
      {
        heading: "Edge Runtime",
        blocks: [
          {
            type: "paragraph",
            content: "By default,"
          },
          {
            type: "paragraph",
            content: "Route Handlers run on the Node.js runtime."
          },
          {
            type: "paragraph",
            content: "However,"
          },
          {
            type: "paragraph",
            content: "they can also run on the Edge Runtime."
          },
          {
            type: "code",
            language: "javascript",
            content: `export const runtime = "edge";`
          },
          {
            type: "paragraph",
            content: "Now your API executes much closer to the user."
          },
          {
            type: "paragraph",
            content: "Benefits"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "lower latency",
              "faster response",
              "global execution"
            ]
          },
          {
            type: "paragraph",
            content: "Ideal for"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "authentication",
              "redirects",
              "personalization",
              "lightweight APIs"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid Edge Runtime for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "heavy CPU work",
              "large native Node.js libraries",
              "long-running database operations unsupported by the edge environment"
            ]
          }
        ]
      },
      {
        heading: "Performance Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications receive thousands of requests every minute."
          },
          {
            type: "paragraph",
            content: "Small improvements make a huge difference."
          },
          {
            type: "paragraph",
            content: "1. Avoid Duplicate Queries"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "User", "→",
              "Database", "→",
              "Orders", "→",
              "Database", "→",
              "Cart"
            ]
          },
          {
            type: "paragraph",
            content: "Better"
          },
          {
            type: "paragraph",
            content: "Fetch in parallel."
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, orders, cart] = await Promise.all([
    getUser(),
    getOrders(),
    getCart()
]);`
          },
          {
            type: "paragraph",
            content: "2. Cache Expensive Queries"
          },
          {
            type: "paragraph",
            content: "Frequently requested data should be cached."
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "product catalog",
              "blog posts",
              "categories",
              "countries"
            ]
          },
          {
            type: "paragraph",
            content: "3. Return Only Required Data"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "output",
            content: [
              "Entire User Table"
            ]
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "output",
            content: [
              "User Name",
              "Avatar"
            ]
          },
          {
            type: "paragraph",
            content: "Select only the fields you need to reduce payload size."
          },
          {
            type: "paragraph",
            content: "4. Compress Responses"
          },
          {
            type: "paragraph",
            content: "Large JSON responses consume bandwidth."
          },
          {
            type: "paragraph",
            content: "Enable"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "gzip",
              "Brotli"
            ]
          },
          {
            type: "paragraph",
            content: "through your deployment platform or reverse proxy."
          },
          {
            type: "paragraph",
            content: "5. Pagination"
          },
          {
            type: "paragraph",
            content: "Never return"
          },
          {
            type: "output",
            content: [
              "500,000 Products"
            ]
          },
          {
            type: "paragraph",
            content: "Instead"
          },
          {
            type: "output",
            content: [
              "20 Products"
            ]
          },
          {
            type: "paragraph",
            content: "per request."
          }
        ]
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "paragraph",
            content: "Route Handlers are backend code."
          },
          {
            type: "paragraph",
            content: "Security is therefore critical."
          },
          {
            type: "paragraph",
            content: "Validate Input"
          },
          {
            type: "paragraph",
            content: "Never trust incoming data."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `const body = await request.json();`
          },
          {
            type: "paragraph",
            content: "Immediately inserting into the database."
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "paragraph",
            content: "Validate first."
          },
          {
            type: "paragraph",
            content: "Use"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Zod",
              "Valibot",
              "Yup"
            ]
          },
          {
            type: "paragraph",
            content: "Prevent SQL Injection"
          },
          {
            type: "paragraph",
            content: "Never write"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.query(

"SELECT * FROM users WHERE id="+id

)`
          },
          {
            type: "paragraph",
            content: "Use parameterized queries or an ORM."
          },
          {
            type: "paragraph",
            content: "Authenticate Sensitive APIs"
          },
          {
            type: "paragraph",
            content: "Never expose"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "DELETE",
              "PUT",
              "PATCH"
            ]
          },
          {
            type: "paragraph",
            content: "without verifying the user."
          },
          {
            type: "paragraph",
            content: "Rate Limiting"
          },
          {
            type: "paragraph",
            content: "Protect against abuse."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "100 requests/minute"
            ]
          },
          {
            type: "paragraph",
            content: "per IP address or API key."
          },
          {
            type: "paragraph",
            content: "This helps prevent brute-force attacks and accidental overload."
          },
          {
            type: "paragraph",
            content: "Hide Internal Errors"
          },
          {
            type: "paragraph",
            content: "Never return"
          },
          {
            type: "output",
            content: [
              "Database password incorrect"
            ]
          },
          {
            type: "paragraph",
            content: "Instead"
          },
          {
            type: "output",
            content: [
              "Internal Server Error"
            ]
          },
          {
            type: "paragraph",
            content: "Log detailed errors on the server, but expose only safe messages to clients."
          },
          {
            type: "paragraph",
            content: "Use HTTPS"
          },
          {
            type: "paragraph",
            content: "Always deploy APIs over HTTPS to protect data in transit."
          }
        ]
      },
      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Keep Business Logic Separate"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "Route Handler", "→",
              "500 Lines"
            ]
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "flow",
            steps: [
              "Route Handler", "→",
              "Service Layer", "→",
              "Repository", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The Route Handler should coordinate requests, not contain all business logic."
          },
          {
            type: "paragraph",
            content: "Use TypeScript"
          },
          {
            type: "paragraph",
            content: "Define request and response types for safer APIs."
          },
          {
            type: "paragraph",
            content: "Validate Every Request"
          },
          {
            type: "paragraph",
            content: "Even if the frontend already validates input."
          },
          {
            type: "paragraph",
            content: "Handle Errors Gracefully"
          },
          {
            type: "paragraph",
            content: "Wrap database and external API calls with try...catch and return appropriate HTTP status codes."
          },
          {
            type: "paragraph",
            content: "Log Important Events"
          },
          {
            type: "paragraph",
            content: "Track:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "failed authentication",
              "unexpected errors",
              "slow queries",
              "external API failures"
            ]
          },
          {
            type: "paragraph",
            content: "This simplifies debugging and monitoring."
          },
          {
            type: "paragraph",
            content: "Version Public APIs"
          },
          {
            type: "paragraph",
            content: "For APIs consumed by external clients, consider versioning."
          },
          {
            type: "output",
            content: [
              "/api/v1/products",
              "/api/v2/products"
            ]
          },
          {
            type: "paragraph",
            content: "This avoids breaking existing integrations."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Using Route Handlers for Internal Database Calls"
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "HTTP", "→",
              "Route Handler", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Use"
          },
          {
            type: "flow",
            steps: [
              "Server Component", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Forgetting Authentication"
          },
          {
            type: "paragraph",
            content: "Public APIs without authentication are a serious security risk."
          },
          {
            type: "paragraph",
            content: "Returning Huge Payloads"
          },
          {
            type: "paragraph",
            content: "Always paginate and filter data."
          },
          {
            type: "paragraph",
            content: "Ignoring HTTP Status Codes"
          },
          {
            type: "paragraph",
            content: "Don't return"
          },
          {
            type: "output",
            content: [
              "200 OK"
            ]
          },
          {
            type: "paragraph",
            content: "for every response."
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "200 OK",
              "201 Created",
              "204 No Content",
              "400 Bad Request",
              "401 Unauthorized",
              "403 Forbidden",
              "404 Not Found",
              "500 Internal Server Error"
            ]
          },
          {
            type: "paragraph",
            content: "appropriately."
          },
          {
            type: "paragraph",
            content: "Mixing Business Logic and Routing"
          },
          {
            type: "paragraph",
            content: "Keep Route Handlers small and focused."
          },
          {
            type: "paragraph",
            content: "Not Validating Input"
          },
          {
            type: "paragraph",
            content: "Never trust user input, even from your own frontend."
          }
        ]
      },
      {
        heading: "Large-Scale Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "In enterprise applications, Route Handlers usually serve as the API layer between clients and business services."
          },
          {
            type: "code",
            language: "text",
            content: `                Browser
                   │
        ┌──────────┴──────────┐
        │                     │
   React Frontend        Mobile App
        │                     │
        └──────────┬──────────┘
                   │
             Route Handlers
                   │
        Authentication Layer
                   │
          Validation (Zod)
                   │
            Service Layer
                   │
         Repository / ORM Layer
                   │
               Database`
          },
          {
            type: "paragraph",
            content: "This layered architecture provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "separation of concerns",
              "easier testing",
              "better maintainability",
              "reusable business logic",
              "scalable APIs"
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A common misconception is that Route Handlers replace Server Actions. They do not—they solve different problems.\n\nA good rule of thumb is:\n\nServer Components → Read data directly from databases or services.\nServer Actions → Handle user-initiated mutations such as forms and button actions.\nRoute Handlers → Expose HTTP endpoints for browsers, mobile apps, webhooks, third-party services, and public APIs.\n\nAvoid making unnecessary HTTP requests from one server-side component to another within the same application. If your code already runs on the server and only needs internal data, call the database or service directly. Reserve Route Handlers for scenarios where an actual HTTP interface is required."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that Route Handlers are the App Router's modern backend API system, built on standard Web APIs. You explored how they integrate with Server Components and Server Actions, interact with databases, implement authentication and authorization, leverage caching and the Edge Runtime, and follow production-ready security and performance practices."
          },
          {
            type: "paragraph",
            content: "With this foundation, you can build scalable backend endpoints that serve web applications, mobile clients, third-party integrations, and webhooks while maintaining clean architecture and high performance. The next lessons will build on these concepts with dynamic route handlers, middleware, response helpers, CRUD APIs, and REST API integration."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Dynamic API Routes
============================= */
    "nextjs-dynamic-api-routes": {
    title: "Dynamic API Routes",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction to Dynamic API Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine you're building an e-commerce website."
          },
          {
            type: "paragraph",
            content: "You have thousands of products."
          },
          {
            type: "paragraph",
            content: "Should you create a separate API route for every product?"
          },
          {
            type: "output",
            content: [
              "/api/product1",
              "/api/product2",
              "/api/product3",
              "...",
              "/api/product100000"
            ]
          },
          {
            type: "paragraph",
            content: "Obviously not."
          },
          {
            type: "paragraph",
            content: "Instead, you create one dynamic route capable of handling every product."
          },
          {
            type: "output",
            content: [
              "/api/products/[id]"
            ]
          },
          {
            type: "paragraph",
            content: "Now,"
          },
          {
            type: "output",
            content: [
              "/api/products/1",
              "/api/products/25",
              "/api/products/487",
              "/api/products/9999"
            ]
          },
          {
            type: "paragraph",
            content: "all use the same API handler."
          },
          {
            type: "paragraph",
            content: "This is the idea behind Dynamic API Routes."
          },
          {
            type: "paragraph",
            content: "They allow one API endpoint to serve many different resources by extracting values directly from the URL."
          }
        ]
      },
      {
        heading: "Why Dynamic API Routes Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Without dynamic routes, APIs become impossible to maintain."
          },
          {
            type: "paragraph",
            content: "Imagine a blogging platform."
          },
          {
            type: "paragraph",
            content: "Without dynamic routing:"
          },
          {
            type: "output",
            content: [
              "/api/post1",
              "/api/post2",
              "/api/post3",
              "/api/post4"
            ]
          },
          {
            type: "paragraph",
            content: "After 10,000 blog posts,"
          },
          {
            type: "paragraph",
            content: "you would need 10,000 API files."
          },
          {
            type: "paragraph",
            content: "Instead,"
          },
          {
            type: "output",
            content: [
              "/api/posts/[slug]"
            ]
          },
          {
            type: "paragraph",
            content: "handles every blog article."
          },
          {
            type: "paragraph",
            content: "Dynamic routes make APIs:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "scalable",
              "reusable",
              "maintainable",
              "RESTful"
            ]
          }
        ]
      },
      {
        heading: "Static Route vs Dynamic Route",
        blocks: [
          {
            type: "paragraph",
            content: "Static route"
          },
          {
            type: "output",
            content: [
              "/api/users"
            ]
          },
          {
            type: "paragraph",
            content: "Always points to the same endpoint."
          },
          {
            type: "paragraph",
            content: "Dynamic route"
          },
          {
            type: "output",
            content: [
              "/api/users/[id]"
            ]
          },
          {
            type: "paragraph",
            content: "Changes depending on the URL."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "/api/users/15", "→",
              "id = 15"
            ]
          },
          {
            type: "flow",
            steps: [
              "/api/users/99", "→",
              "id = 99"
            ]
          },
          {
            type: "output",
            content: [
              "One file.",
              "Unlimited resources."
            ]
          }
        ]
      },
      {
        heading: "Dynamic Segments",
        blocks: [
          {
            type: "paragraph",
            content: "A dynamic segment is a folder or file enclosed in square brackets."
          },
          {
            type: "paragraph",
            content: "Pages Router"
          },
          {
            type: "tree",
            content: `pages/
    api/
        users/
            [id].ts`
          },
          {
            type: "paragraph",
            content: "App Router"
          },
          {
            type: "tree",
            content: `app/
    api/
        users/
            [id]/
                route.ts`
          },
          {
            type: "paragraph",
            content: "The part inside"
          },
          {
            type: "output",
            content: [
              "[]"
            ]
          },
          {
            type: "paragraph",
            content: "becomes a variable."
          }
        ]
      },
      {
        heading: "Understanding Route Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose the URL is"
          },
          {
            type: "output",
            content: [
              "/api/users/42"
            ]
          },
          {
            type: "paragraph",
            content: "The dynamic segment"
          },
          {
            type: "output",
            content: [
              "[id]"
            ]
          },
          {
            type: "paragraph",
            content: "captures"
          },
          {
            type: "output",
            content: [
              "42"
            ]
          },
          {
            type: "paragraph",
            content: "This captured value is called a route parameter."
          },
          {
            type: "paragraph",
            content: "Think of the URL like a template."
          },
          {
            type: "output",
            content: [
              "/api/users/{id}"
            ]
          },
          {
            type: "paragraph",
            content: "When a request arrives,"
          },
          {
            type: "paragraph",
            content: "Next.js replaces"
          },
          {
            type: "output",
            content: [
              "{id}"
            ]
          },
          {
            type: "paragraph",
            content: "with the actual value."
          }
        ]
      },
      {
        heading: "Dynamic Route Matching",
        blocks: [
          {
            type: "flow",
            steps: [
              "Incoming Request", "→",
              "/api/products/55", "→",
              "Matches", "→",
              "products/[id]", "→",
              "id = 55", "→",
              "Route Handler Executes"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js automatically extracts parameters before your code runs."
          }
        ]
      },
      {
        heading: "Dynamic API Routes in the Pages Router",
        blocks: [
          {
            type: "paragraph",
            content: "Folder structure"
          },
          {
            type: "tree",
            content: `pages/
    api/
        users/
            [id].ts`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function handler(req, res) {

    const { id } = req.query;

    res.status(200).json({

        id

    });

}`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "output",
            content: [
              "GET /api/users/20"
            ]
          },
          {
            type: "paragraph",
            content: "Response"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id": "20"
}`
          }
        ]
      },
      {
        heading: "Dynamic API Routes in the App Router",
        blocks: [
          {
            type: "paragraph",
            content: "Folder structure"
          },
          {
            type: "tree",
            content: `app/
    api/
        users/
            [id]/
                route.ts`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(

    request: Request,

    {

        params

    }: {

        params: {

            id: string

        }

    }

) {

    return Response.json({

        id: params.id

    });

}`
          }
        ]
      },
      {
        heading: "Understanding params",
        blocks: [
          {
            type: "paragraph",
            content: "The"
          },
          {
            type: "output",
            content: [
              "params"
            ]
          },
          {
            type: "paragraph",
            content: "object contains every dynamic segment."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "URL", "→",
              "/api/products/100"
            ]
          },
          {
            type: "paragraph",
            content: "Produces"
          },
          {
            type: "code",
            language: "javascript",
            content: `params = {

    id: "100"

}`
          },
          {
            type: "paragraph",
            content: "You don't manually parse the URL."
          },
          {
            type: "paragraph",
            content: "Next.js does it automatically."
          }
        ]
      },
      {
        heading: "Multiple Dynamic Segments",
        blocks: [
          {
            type: "paragraph",
            content: "Folder structure"
          },
          {
            type: "tree",
            content: `app/
    api/
        users/
            [userId]/
                posts/
                    [postId]/
                        route.ts`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "output",
            content: [
              "/api/users/5/posts/10"
            ]
          },
          {
            type: "paragraph",
            content: "Produces"
          },
          {
            type: "code",
            language: "javascript",
            content: `params = {

    userId: "5",

    postId: "10"

}`
          },
          {
            type: "paragraph",
            content: "This is extremely common in REST APIs."
          }
        ]
      },
      {
        heading: "Nested Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Real applications usually have nested resources."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Company", "→",
              "Departments", "→",
              "Employees"
            ]
          },
          {
            type: "paragraph",
            content: "Folder"
          },
          {
            type: "tree",
            content: `app/
    api/
        companies/
            [companyId]/
                departments/
                    [departmentId]/
                        employees/
                            [employeeId]/
                                route.ts`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "output",
            content: [
              "/api/companies/1/departments/5/employees/42"
            ]
          },
          {
            type: "paragraph",
            content: "Automatically becomes"
          },
          {
            type: "code",
            language: "javascript",
            content: `params = {

    companyId: "1",

    departmentId: "5",

    employeeId: "42"

}`
          },
          {
            type: "paragraph",
            content: "This scales beautifully."
          }
        ]
      },
      {
        heading: "Catch-all Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you don't know how many URL segments exist."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Documentation", "→",
              "chapter", "→",
              "section", "→",
              "topic"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "[id]",
              "[level]",
              "[topic]"
            ]
          },
          {
            type: "paragraph",
            content: "you can use"
          },
          {
            type: "output",
            content: [
              "[...slug]"
            ]
          },
          {
            type: "paragraph",
            content: "Folder"
          },
          {
            type: "tree",
            content: `app/
    api/
        docs/
            [...slug]/
                route.ts`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "output",
            content: [
              "/api/docs/react/hooks/useEffect"
            ]
          },
          {
            type: "paragraph",
            content: "Produces"
          },
          {
            type: "code",
            language: "javascript",
            content: `params = {

    slug: [

        "react",

        "hooks",

        "useEffect"

    ]

}`
          },
          {
            type: "paragraph",
            content: "Notice"
          },
          {
            type: "output",
            content: [
              "slug"
            ]
          },
          {
            type: "paragraph",
            content: "is now an array."
          }
        ]
      },
      {
        heading: "Optional Catch-all Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes the URL may or may not contain additional segments."
          },
          {
            type: "paragraph",
            content: "Use"
          },
          {
            type: "output",
            content: [
              "[[...slug]]"
            ]
          },
          {
            type: "paragraph",
            content: "Folder"
          },
          {
            type: "tree",
            content: `app/
    api/
        docs/
            [[...slug]]/
                route.ts`
          },
          {
            type: "paragraph",
            content: "Now all of these work."
          },
          {
            type: "output",
            content: [
              "/api/docs",
              "/api/docs/react",
              "/api/docs/react/hooks",
              "/api/docs/react/hooks/useEffect"
            ]
          },
          {
            type: "paragraph",
            content: "If nothing exists"
          },
          {
            type: "code",
            language: "javascript",
            content: `slug = undefined`
          },
          {
            type: "paragraph",
            content: "Otherwise"
          },
          {
            type: "code",
            language: "javascript",
            content: `slug = [

    "react",

    "hooks"

]`
          }
        ]
      },
      {
        heading: "Route Parameters vs Search Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "/api/products/50"
            ]
          },
          {
            type: "paragraph",
            content: "Route parameter"
          },
          {
            type: "output",
            content: [
              "id = 50"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "/api/products?page=2"
            ]
          },
          {
            type: "paragraph",
            content: "Search parameter"
          },
          {
            type: "output",
            content: [
              "page = 2"
            ]
          },
          {
            type: "paragraph",
            content: "Together"
          },
          {
            type: "output",
            content: [
              "/api/products/50?page=2"
            ]
          },
          {
            type: "paragraph",
            content: "Produces"
          },
          {
            type: "flow",
            steps: [
              "Route Parameter", "→",
              "50"
            ]
          },
          {
            type: "flow",
            steps: [
              "Search Parameter", "→",
              "2"
            ]
          }
        ]
      },
      {
        heading: "Reading Search Parameters",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(

    request: Request

) {

    const {

        searchParams

    } = new URL(request.url);

    const page = searchParams.get("page");

    return Response.json({

        page

    });

}`
          }
        ]
      },
      {
        heading: "Slugs",
        blocks: [
          {
            type: "paragraph",
            content: "Many websites don't expose database IDs."
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "/api/posts/42"
            ]
          },
          {
            type: "paragraph",
            content: "they use"
          },
          {
            type: "output",
            content: [
              "/api/posts/nextjs-routing-guide"
            ]
          },
          {
            type: "paragraph",
            content: "This readable value is called a slug."
          },
          {
            type: "paragraph",
            content: "Folder"
          },
          {
            type: "output",
            content: [
              "[slug]"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "params.slug"
            ]
          },
          {
            type: "paragraph",
            content: "Typical slugs"
          },
          {
            type: "output",
            content: [
              "nextjs-routing",
              "learn-react",
              "javascript-basics",
              "css-grid-guide"
            ]
          },
          {
            type: "paragraph",
            content: "Slugs improve:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SEO",
              "readability",
              "user experience"
            ]
          }
        ]
      },
      {
        heading: "IDs",
        blocks: [
          {
            type: "paragraph",
            content: "Numeric IDs remain the most common API identifier."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "/api/users/15"
            ]
          },
          {
            type: "paragraph",
            content: "Database query"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await prisma.user.findUnique({

    where: {

        id: Number(params.id)

    }

});`
          },
          {
            type: "paragraph",
            content: "Always convert IDs to the correct type before querying your database."
          }
        ]
      },
      {
        heading: "Parameter Validation",
        blocks: [
          {
            type: "paragraph",
            content: "Never trust parameters directly."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `const id = params.id;`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "javascript",
            content: `const id = Number(params.id);

if (Number.isNaN(id)) {

    return Response.json(

        {

            error: "Invalid ID"

        },

        {

            status: 400

        }

    );

}`
          },
          {
            type: "paragraph",
            content: "Validate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "IDs",
              "slugs",
              "UUIDs",
              "dates",
              "enums"
            ]
          },
          {
            type: "paragraph",
            content: "before using them."
          }
        ]
      },
      {
        heading: "REST Resource Mapping",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic routes naturally map to REST resources."
          },
          {
            type: "table",
            headers: ["URL", "Meaning"],
            rows: [
              ["/api/users", "Collection of users"],
              ["/api/users/15", "One specific user"],
              ["/api/users/15/posts", "Posts belonging to a user"],
              ["/api/users/15/posts/8", "One specific post"],
              ["/api/products/25/reviews", "Reviews of a product"],
              ["/api/orders/101/items", "Items inside an order"]
            ]
          },
          {
            type: "paragraph",
            content: "This hierarchical structure makes APIs intuitive and predictable."
          }
        ]
      },
      {
        heading: "Database Lookups",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic parameters are commonly used to retrieve data."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET(

    request: Request,

    { params }

) {

    const product = await prisma.product.findUnique({

        where: {

            id: Number(params.id)

        }

    });

    return Response.json(product);

}`
          },
          {
            type: "paragraph",
            content: "The request URL directly determines which database record is queried."
          }
        ]
      },
      {
        heading: "Nested Resources",
        blocks: [
          {
            type: "paragraph",
            content: "Relationships often exist between resources."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "flow",
            steps: [
              "Users", "→",
              "Posts"
            ]
          },
          {
            type: "flow",
            steps: [
              "Products", "→",
              "Reviews"
            ]
          },
          {
            type: "flow",
            steps: [
              "Orders", "→",
              "Items"
            ]
          },
          {
            type: "paragraph",
            content: "Example endpoint"
          },
          {
            type: "output",
            content: [
              "/api/products/5/reviews"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Product ID = 5", "→",
              "Database Query", "→",
              "Fetch Reviews", "→",
              "Return JSON"
            ]
          }
        ]
      },
      {
        heading: "Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic routes should always handle invalid input gracefully."
          },
          {
            type: "paragraph",
            content: "Resource Not Found"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!product) {

    return Response.json(

        {

            error: "Product not found"

        },

        {

            status: 404

        }

    );

}`
          },
          {
            type: "paragraph",
            content: "Invalid Identifier"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!Number.isInteger(id)) {

    return Response.json(

        {

            error: "Invalid product ID"

        },

        {

            status: 400

        }

    );

}`
          },
          {
            type: "paragraph",
            content: "Unexpected Error"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {

    // database lookup

} catch {

    return Response.json(

        {

            error: "Internal Server Error"

        },

        {

            status: 500

        }

    );

}`
          },
          {
            type: "paragraph",
            content: "Never expose database details or stack traces to clients."
          }
        ]
      },
      {
        heading: "Real-World Production Examples",
        blocks: [
          {
            type: "paragraph",
            content: "E-commerce"
          },
          {
            type: "output",
            content: [
              "GET /api/products/15",
              "PUT /api/products/15",
              "DELETE /api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "Social Media"
          },
          {
            type: "output",
            content: [
              "GET /api/users/7",
              "GET /api/users/7/posts",
              "POST /api/users/7/follow"
            ]
          },
          {
            type: "paragraph",
            content: "Learning Platform"
          },
          {
            type: "output",
            content: [
              "GET /api/courses/react",
              "GET /api/courses/react/chapters",
              "GET /api/courses/react/lessons/introduction"
            ]
          },
          {
            type: "paragraph",
            content: "Banking"
          },
          {
            type: "output",
            content: [
              "GET /api/accounts/1001",
              "GET /api/accounts/1001/transactions",
              "POST /api/accounts/1001/transfer"
            ]
          }
        ]
      },
      {
        heading: "Production Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A typical request flows through several stages."
          },
          {
            type: "flow",
            steps: [
              "Client Request", "→",
              "Dynamic Route Match", "→",
              "Extract Parameters", "→",
              "Validate Parameters", "→",
              "Authenticate User", "→",
              "Authorize Access", "→",
              "Database Query", "→",
              "Business Logic", "→",
              "Return Response"
            ]
          },
          {
            type: "paragraph",
            content: "Separating these responsibilities keeps your APIs secure, testable, and maintainable."
          }
        ]
      },
      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Use Meaningful Parameter Names"
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "output",
            content: [
              "[userId]",
              "[productId]",
              "[orderId]"
            ]
          },
          {
            type: "paragraph",
            content: "instead of generic names like:"
          },
          {
            type: "output",
            content: [
              "[id]",
              "[data]"
            ]
          },
          {
            type: "paragraph",
            content: "when multiple dynamic segments exist."
          },
          {
            type: "paragraph",
            content: "Validate Every Parameter"
          },
          {
            type: "paragraph",
            content: "Never assume URL parameters are valid. Validate format, type, and allowed values before using them."
          },
          {
            type: "paragraph",
            content: "Return Proper Status Codes"
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "200 — Success",
              "201 — Resource created",
              "204 — Successful request with no response body",
              "400 — Invalid parameters",
              "401 — Authentication required",
              "403 — Access forbidden",
              "404 — Resource not found",
              "409 — Resource conflict",
              "500 — Internal server error"
            ]
          },
          {
            type: "paragraph",
            content: "Keep URLs RESTful"
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "output",
            content: [
              "/api/products/15/reviews"
            ]
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "output",
            content: [
              "/api/getProductReviews?id=15"
            ]
          },
          {
            type: "paragraph",
            content: "Resource-oriented URLs are easier to understand and scale."
          },
          {
            type: "paragraph",
            content: "Avoid Deeply Nested Routes"
          },
          {
            type: "paragraph",
            content: "Although Next.js supports deeply nested folders, URLs with more than three or four levels often indicate overly coupled resources. Consider flattening the API if nesting becomes excessive."
          },
          {
            type: "paragraph",
            content: "Cache Read-Only Resources"
          },
          {
            type: "paragraph",
            content: "For resources that change infrequently, combine dynamic routes with caching or revalidation to reduce database load and improve response times."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Dynamic API Routes are more than a routing feature—they are the foundation of RESTful backend design in Next.js. Experienced developers don't think in terms of \"files\"; they think in terms of resources. Before creating a route, identify the resource (users, products, orders), then model URLs around that resource and its relationships. This leads to APIs that are intuitive, scalable, and easy for frontend developers, mobile apps, and third-party consumers to use."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic API Routes allow a single API endpoint to handle an unlimited number of resources by extracting values from the URL. You learned how to use dynamic segments, route parameters, nested routes, catch-all and optional catch-all routes, search parameters, slugs, and IDs. You also explored REST resource mapping, parameter validation, database lookups, nested resources, production-grade error handling, and architectural best practices."
          },
          {
            type: "paragraph",
            content: "Mastering Dynamic API Routes enables you to build flexible, maintainable, and scalable APIs that can power everything from simple blogs to enterprise-level e-commerce platforms and SaaS applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Middleware
============================= */
    "nextjs-middleware": {
    title: "Middleware",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Middleware",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is one of the most powerful features in Next.js because it allows you to execute code before a request reaches your application."
          },
          {
            type: "paragraph",
            content: "Imagine you want to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Check whether a user is logged in.",
              "Redirect users based on their country.",
              "Add security headers.",
              "Block malicious bots.",
              "Perform A/B testing.",
              "Rewrite URLs.",
              "Apply rate limiting.",
              "Log requests."
            ]
          },
          {
            type: "paragraph",
            content: "Should every page implement these checks individually?"
          },
          {
            type: "paragraph",
            content: "Absolutely not."
          },
          {
            type: "paragraph",
            content: "Instead, Middleware runs once at the beginning of the request lifecycle and can decide what should happen next."
          },
          {
            type: "paragraph",
            content: "Think of Middleware as a security guard standing at the entrance of your application."
          },
          {
            type: "code",
            language: "text",
            content: `Incoming Request
        │
        ▼
   Middleware
        │
 ┌──────┼─────────┐
 │      │         │
 ▼      ▼         ▼
Allow Redirect Rewrite
 │
 ▼
Page / API / Route Handler`
          },
          {
            type: "paragraph",
            content: "It acts before any page, API, or Route Handler is executed."
          }
        ]
      },
      {
        heading: "Why Middleware Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Before Middleware existed, developers had to repeat logic everywhere."
          },
          {
            type: "paragraph",
            content: "Imagine an admin dashboard."
          },
          {
            type: "paragraph",
            content: "Without Middleware:"
          },
          {
            type: "flow",
            steps: [
              "Dashboard Page", "→",
              "Check Login", "→",
              "Check Role", "→",
              "Render"
            ]
          },
          {
            type: "paragraph",
            content: "Profile page"
          },
          {
            type: "flow",
            steps: [
              "Profile", "→",
              "Check Login", "→",
              "Render"
            ]
          },
          {
            type: "paragraph",
            content: "Orders"
          },
          {
            type: "flow",
            steps: [
              "Orders", "→",
              "Check Login", "→",
              "Render"
            ]
          },
          {
            type: "paragraph",
            content: "Every page repeated the same authentication logic."
          },
          {
            type: "paragraph",
            content: "This causes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "duplicated code",
              "inconsistent security",
              "harder maintenance",
              "more bugs"
            ]
          },
          {
            type: "paragraph",
            content: "Middleware centralizes these concerns."
          }
        ]
      },
      {
        heading: "What is Middleware?",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is a special function that intercepts every matching HTTP request before it reaches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pages",
              "App Router pages",
              "Route Handlers",
              "API Routes",
              "Static assets (if configured)"
            ]
          },
          {
            type: "paragraph",
            content: "It can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "continue the request",
              "modify the request",
              "modify headers",
              "modify cookies",
              "redirect",
              "rewrite",
              "block requests",
              "return responses immediately"
            ]
          },
          {
            type: "paragraph",
            content: "It acts like a programmable gateway for your application."
          }
        ]
      },
      {
        heading: "Request Interception",
        blocks: [
          {
            type: "paragraph",
            content: "Every HTTP request passes through several stages."
          },
          {
            type: "paragraph",
            content: "Without Middleware:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Server", "→",
              "Page", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "With Middleware:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Middleware", "→",
              "Page", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Middleware gets the first opportunity to inspect the request."
          }
        ]
      },
      {
        heading: "Middleware Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Let's see the complete lifecycle."
          },
          {
            type: "flow",
            steps: [
              "User Visits", "→",
              "/dashboard", "→",
              "Request Sent", "→",
              "Middleware Starts", "→",
              "Read URL", "→",
              "Read Cookies", "→",
              "Read Headers", "→",
              "Authentication", "→",
              "Authorization", "→",
              "Rewrite / Redirect?", "→",
              "Yes → Respond", "→",
              "No", "→",
              "Continue Request", "→",
              "Page Executes", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that the page has not executed until Middleware allows it."
          }
        ]
      },
      {
        heading: "Where Middleware Lives",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is defined in a file named:"
          },
          {
            type: "output",
            content: [
              "middleware.ts"
            ]
          },
          {
            type: "paragraph",
            content: "placed in the root of your project."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `project/

    middleware.ts

    app/

    public/

    next.config.js`
          },
          {
            type: "paragraph",
            content: "Next.js automatically detects this file."
          }
        ]
      },
      {
        heading: "Creating Your First Middleware",
        blocks: [
          {
            type: "code",
            language: "typescript",
            content: `import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    console.log(request.nextUrl.pathname);

    return NextResponse.next();

}`
          },
          {
            type: "paragraph",
            content: "Every request now prints the URL."
          },
          {
            type: "paragraph",
            content: "The important line is"
          },
          {
            type: "output",
            content: [
              "NextResponse.next();"
            ]
          },
          {
            type: "paragraph",
            content: "It tells Next.js:"
          },
          {
            type: "paragraph",
            content: "Continue processing this request."
          }
        ]
      },
      {
        heading: "Understanding NextRequest",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware receives a"
          },
          {
            type: "output",
            content: [
              "NextRequest"
            ]
          },
          {
            type: "paragraph",
            content: "object."
          },
          {
            type: "paragraph",
            content: "It extends the standard Web Request API with additional Next.js features."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "typescript",
            content: `export function middleware(request: NextRequest) {

    console.log(request.nextUrl);

}`
          },
          {
            type: "paragraph",
            content: "Useful properties include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "request.nextUrl",
              "request.cookies",
              "request.headers",
              "request.method",
              "request.ip (when available through the platform)",
              "request.geo (platform dependent)"
            ]
          }
        ]
      },
      {
        heading: "Request Interception Example",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a user visits"
          },
          {
            type: "output",
            content: [
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Middleware executes first."
          },
          {
            type: "code",
            language: "typescript",
            content: `export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname === "/dashboard"){

        console.log("Dashboard accessed");

    }

    return NextResponse.next();

}`
          },
          {
            type: "paragraph",
            content: "Nothing reaches the page until this finishes."
          }
        ]
      },
      {
        heading: "Edge Runtime",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware runs on the Edge Runtime, not the traditional Node.js runtime."
          },
          {
            type: "paragraph",
            content: "That means it executes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "closer to users",
              "on distributed edge servers",
              "with very low latency"
            ]
          },
          {
            type: "paragraph",
            content: "Architecture"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Nearest Edge Server", "→",
              "Middleware", "→",
              "Application"
            ]
          },
          {
            type: "paragraph",
            content: "This makes Middleware ideal for operations that should happen as early as possible."
          }
        ]
      },
      {
        heading: "Edge Runtime Limitations",
        blocks: [
          {
            type: "paragraph",
            content: "Because Middleware runs on the Edge Runtime, some Node.js APIs are unavailable."
          },
          {
            type: "paragraph",
            content: "Avoid relying on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "native Node.js modules like fs",
              "long-running CPU-intensive tasks",
              "heavyweight libraries that require the full Node runtime"
            ]
          },
          {
            type: "paragraph",
            content: "Keep Middleware lightweight and fast."
          }
        ]
      },
      {
        heading: "matcher",
        blocks: [
          {
            type: "paragraph",
            content: "By default, Middleware runs on many routes, which can be unnecessary."
          },
          {
            type: "paragraph",
            content: "The matcher configuration lets you specify where Middleware should execute."
          },
          {
            type: "code",
            language: "javascript",
            content: `export const config = {

    matcher: ["/dashboard/:path*"]

};`
          },
          {
            type: "paragraph",
            content: "Now it runs only for:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/dashboard/profile",
              "/dashboard/settings",
              "/dashboard/users/15"
            ]
          },
          {
            type: "paragraph",
            content: "You can match multiple patterns:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/api/:path*"
  ]
};`
          },
          {
            type: "paragraph",
            content: "This improves performance by avoiding unnecessary execution."
          }
        ]
      },
      {
        heading: "Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common Middleware use cases is authentication."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Read Cookie", "→",
              "Session Exists?", "→",
              "Yes → Continue", "→",
              "No → Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "typescript",
            content: `export function middleware(request: NextRequest) {

    const token = request.cookies.get("token");

    if(!token){

        return NextResponse.redirect(

            new URL("/login", request.url)

        );

    }

    return NextResponse.next();

}`
          },
          {
            type: "paragraph",
            content: "Protected pages are now secured before they load."
          }
        ]
      },
      {
        heading: "Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication asks:"
          },
          {
            type: "paragraph",
            content: "Who is the user?"
          },
          {
            type: "paragraph",
            content: "Authorization asks:"
          },
          {
            type: "paragraph",
            content: "What is the user allowed to do?"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Admin?", "→",
              "Yes", "→",
              "Admin Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise"
          },
          {
            type: "flow",
            steps: [
              "Redirect", "→",
              "Access Denied"
            ]
          },
          {
            type: "paragraph",
            content: "Role information can be stored in a signed token or session and verified in Middleware."
          }
        ]
      },
      {
        heading: "Redirects",
        blocks: [
          {
            type: "paragraph",
            content: "Redirects send users to another URL."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.redirect(

    new URL("/login", request.url)

);`
          },
          {
            type: "paragraph",
            content: "Use redirects for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "authentication",
              "maintenance pages",
              "country-specific sites",
              "legacy URL migration"
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Old URL", "→",
              "Middleware", "→",
              "Redirect", "→",
              "New URL"
            ]
          }
        ]
      },
      {
        heading: "Rewrites",
        blocks: [
          {
            type: "paragraph",
            content: "Rewrites are different."
          },
          {
            type: "paragraph",
            content: "The browser URL stays the same."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.rewrite(

    new URL("/new-page", request.url)

);`
          },
          {
            type: "paragraph",
            content: "Browser shows"
          },
          {
            type: "output",
            content: [
              "/old-page"
            ]
          },
          {
            type: "paragraph",
            content: "Internally serves"
          },
          {
            type: "output",
            content: [
              "/new-page"
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
              "feature rollouts",
              "localization",
              "vanity URLs",
              "proxying requests"
            ]
          }
        ]
      },
      {
        heading: "Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware can inspect or modify request and response headers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.next();

response.headers.set(

    "x-powered-by",

    "DevSphere"

);

return response;`
          },
          {
            type: "paragraph",
            content: "Common headers include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Security-Policy",
              "Strict-Transport-Security",
              "X-Frame-Options",
              "X-Content-Type-Options",
              "custom analytics headers"
            ]
          }
        ]
      },
      {
        heading: "Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies are frequently read or modified in Middleware."
          },
          {
            type: "paragraph",
            content: "Read:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const theme = request.cookies.get("theme");`
          },
          {
            type: "paragraph",
            content: "Write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.next();

response.cookies.set(

    "theme",

    "dark"

);

return response;`
          },
          {
            type: "paragraph",
            content: "Typical uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "sessions",
              "preferences",
              "localization",
              "experiments"
            ]
          }
        ]
      },
      {
        heading: "CORS",
        blocks: [
          {
            type: "paragraph",
            content: "When browsers access APIs from another origin, Cross-Origin Resource Sharing (CORS) determines whether the request is allowed."
          },
          {
            type: "paragraph",
            content: "Middleware can add CORS headers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.next();

response.headers.set(
    "Access-Control-Allow-Origin",
    "https://example.com"
);

response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
);

return response;`
          },
          {
            type: "paragraph",
            content: "For production, avoid using \"*\" unless the API is intentionally public."
          }
        ]
      },
      {
        heading: "Rate Limiting",
        blocks: [
          {
            type: "paragraph",
            content: "Without rate limiting, attackers can flood your application."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Count Requests", "→",
              "Limit Exceeded?", "→",
              "Yes", "→",
              "429 Too Many Requests", "→",
              "No", "→",
              "Continue"
            ]
          },
          {
            type: "paragraph",
            content: "A common strategy stores request counts in Redis or another distributed cache keyed by IP or API key."
          }
        ]
      },
      {
        heading: "Bot Detection",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware can inspect:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User-Agent",
              "IP reputation",
              "request frequency",
              "unusual patterns"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const agent = request.headers.get("user-agent");

if(agent?.includes("BadBot")){

    return new Response("Forbidden", {

        status:403

    });

}`
          },
          {
            type: "paragraph",
            content: "Bot detection helps protect APIs from scraping and abuse."
          }
        ]
      },
      {
        heading: "Localization",
        blocks: [
          {
            type: "paragraph",
            content: "Global applications often serve different content based on language or region."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Accept-Language", "→",
              "fr", "→",
              "Redirect", "→",
              "/fr"
            ]
          },
          {
            type: "paragraph",
            content: "Or use a locale cookie to remember the user's preference."
          }
        ]
      },
      {
        heading: "Feature Flags",
        blocks: [
          {
            type: "paragraph",
            content: "Feature flags allow you to enable features for selected users without deploying new code."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Feature Enabled?", "→",
              "Yes", "→",
              "New Dashboard", "→",
              "No", "→",
              "Old Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Feature flags are useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "beta testing",
              "staged rollouts",
              "internal testing",
              "premium features"
            ]
          }
        ]
      },
      {
        heading: "A/B Testing",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware can randomly split users into groups."
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Random Assignment", "→",
              "Group A", "→",
              "Old Homepage"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "flow",
            steps: [
              "Visitor", "→",
              "Random Assignment", "→",
              "Group B", "→",
              "New Homepage"
            ]
          },
          {
            type: "paragraph",
            content: "Store the assigned variant in a cookie so users receive a consistent experience."
          },
          {
            type: "paragraph",
            content: "This allows teams to compare conversion rates, engagement, or performance between different versions."
          }
        ]
      },
      {
        heading: "Logging",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is an excellent place for centralized request logging."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log({
    path: request.nextUrl.pathname,
    method: request.method
});`
          },
          {
            type: "paragraph",
            content: "Production systems typically send logs to services like Datadog, Elastic, or Cloud Logging instead of the console."
          }
        ]
      },
      {
        heading: "Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware executes on every matched request."
          },
          {
            type: "paragraph",
            content: "Poorly optimized Middleware slows down the entire application."
          },
          {
            type: "paragraph",
            content: "Keep it:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "lightweight",
              "asynchronous where possible",
              "free of unnecessary database calls",
              "focused on quick decisions"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "flow",
            steps: [
              "Middleware", "→",
              "Heavy Database Query", "→",
              "Complex Calculations", "→",
              "API Requests", "→",
              "Continue"
            ]
          },
          {
            type: "paragraph",
            content: "Instead, use Middleware primarily for routing, validation, and lightweight checks."
          }
        ]
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is a key layer in a defense-in-depth strategy."
          },
          {
            type: "paragraph",
            content: "It can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "require HTTPS",
              "validate authentication tokens",
              "enforce authorization",
              "add security headers",
              "block malicious IPs",
              "prevent access to protected routes",
              "reject suspicious requests before they reach your application"
            ]
          },
          {
            type: "paragraph",
            content: "However, Middleware should not be your only security layer. Sensitive operations must still validate permissions inside Route Handlers or Server Actions."
          }
        ]
      },
      {
        heading: "Complete Middleware Workflow",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                 Incoming Request
                        │
                        ▼
                Middleware Starts
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
 Read Cookies     Read Headers     Read URL
        │               │                │
        └───────────────┼────────────────┘
                        ▼
              Authentication Check
                        │
                 Authorized?
              ┌─────────┴─────────┐
              │                   │
             No                  Yes
              │                   │
              ▼                   ▼
      Redirect / Reject     Feature Flags
                                  │
                                  ▼
                       Rewrite / Localization
                                  │
                                  ▼
                         Continue Request
                                  │
                                  ▼
                  Page / Route Handler / API
                                  │
                                  ▼
                            Final Response`
          }
        ]
      },
      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Keep Middleware focused on lightweight request processing.",
              "Use matcher to limit execution only to relevant routes.",
              "Avoid database queries unless absolutely necessary.",
              "Validate authentication tokens quickly.",
              "Store sessions in secure, HTTP-only cookies.",
              "Add appropriate security headers.",
              "Log important security events.",
              "Use feature flags instead of maintaining multiple deployments.",
              "Test redirects and rewrites thoroughly to avoid redirect loops.",
              "Monitor Middleware latency, especially in global deployments."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Running Middleware Everywhere"
          },
          {
            type: "paragraph",
            content: "Not every route needs Middleware."
          },
          {
            type: "paragraph",
            content: "Use matcher to avoid unnecessary work."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Performing Heavy Computation"
          },
          {
            type: "paragraph",
            content: "Middleware should not perform expensive database joins or CPU-intensive processing."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Infinite Redirect Loops"
          },
          {
            type: "paragraph",
            content: "Always ensure that your redirect target is excluded from the redirect condition."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Trusting Client-Side Authentication"
          },
          {
            type: "paragraph",
            content: "Middleware improves security but must be complemented by server-side authorization checks in Route Handlers or Server Actions."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Forgetting Static Assets"
          },
          {
            type: "paragraph",
            content: "Be careful that your matcher doesn't unintentionally process static files such as images, fonts, or scripts unless required."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Storing Sensitive Data in Plain Cookies"
          },
          {
            type: "paragraph",
            content: "Always use signed, encrypted, HTTP-only cookies for sensitive session information."
          }
        ]
      },
      {
        heading: "Large-Scale Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "In enterprise applications, Middleware is the application's first line of processing."
          },
          {
            type: "code",
            language: "text",
            content: `                 Browser
                    │
                    ▼
             CDN / Edge Network
                    │
                    ▼
               Middleware
                    │
     ┌──────────────┼──────────────┐
     │              │              │
     ▼              ▼              ▼
 Authentication  Localization  Feature Flags
     │              │              │
     └──────────────┼──────────────┘
                    ▼
          Route Handler / Page
                    │
                    ▼
          Service Layer / Database
                    │
                    ▼
               Final Response`
          },
          {
            type: "paragraph",
            content: "This architecture centralizes cross-cutting concerns while keeping business logic inside the application."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A useful way to think about Middleware is as application infrastructure, not business logic. Tasks that apply broadly to many requests—authentication checks, redirects, localization, feature flags, security headers, logging, and request shaping—belong in Middleware. Tasks that involve fetching business data, executing complex database operations, or implementing application-specific rules belong in Route Handlers, Server Actions, or your service layer. Keeping this separation results in applications that are easier to scale, debug, and maintain."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware is a powerful request interception mechanism that executes before requests reach your pages, APIs, Route Handlers, or other application code. It enables centralized handling of authentication, authorization, redirects, rewrites, cookies, headers, localization, feature flags, A/B testing, rate limiting, bot detection, logging, and security. By running on the Edge Runtime and using matcher to target only relevant routes, Middleware can significantly improve both application performance and maintainability. When used appropriately, it becomes the foundation of secure, scalable, and production-ready Next.js applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Response Helpers
============================= */
    "nextjs-response-helpers": {
    title: "Response Helpers",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Response Helpers",
        blocks: [
          {
            type: "paragraph",
            content: "Whenever a browser, mobile app, or another server sends a request to your application, your backend must send a response back."
          },
          {
            type: "paragraph",
            content: "But a response is much more than just returning some JSON."
          },
          {
            type: "paragraph",
            content: "A proper HTTP response can include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Data",
              "Status codes",
              "Cookies",
              "Headers",
              "Redirects",
              "File downloads",
              "Streams",
              "Cache instructions",
              "Security policies",
              "Content type information"
            ]
          },
          {
            type: "paragraph",
            content: "In Next.js, Response Helpers provide a clean and standardized way to build these responses."
          },
          {
            type: "paragraph",
            content: "If requests are the language clients use to communicate with servers, responses are the language servers use to communicate back."
          }
        ]
      },
      {
        heading: "Why Response Helpers Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine manually constructing every HTTP response."
          },
          {
            type: "paragraph",
            content: "You would need to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "convert objects into JSON",
              "manually set content types",
              "set status codes",
              "write cookies",
              "attach headers",
              "configure redirects"
            ]
          },
          {
            type: "paragraph",
            content: "Every endpoint would contain repetitive code."
          },
          {
            type: "paragraph",
            content: "Response Helpers simplify this process into expressive, readable methods."
          },
          {
            type: "paragraph",
            content: "Instead of writing dozens of low-level HTTP operations, you call one helper."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.json({
    success: true
});`
          },
          {
            type: "paragraph",
            content: "One line replaces several HTTP operations."
          }
        ]
      },
      {
        heading: "Understanding the HTTP Response",
        blocks: [
          {
            type: "paragraph",
            content: "Every HTTP response consists of several parts."
          },
          {
            type: "tree",
            content: `HTTP Response
├── Status Code
├── Headers
├── Cookies
├── Body
└── Metadata`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "HTTP/1.1 200 OK",
              "",
              "Content-Type: application/json",
              "",
              "Cache-Control: no-cache",
              "",
              "Set-Cookie: session=abc123",
              "",
              "{",
              "    \"message\":\"Success\"",
              "}"
            ]
          },
          {
            type: "paragraph",
            content: "The browser uses every part of this response."
          }
        ]
      },
      {
        heading: "Response API",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js builds upon the standard Web Response API."
          },
          {
            type: "paragraph",
            content: "The native Response object is available inside Route Handlers."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    return new Response(

        "Hello DevSphere"

    );

}`
          },
          {
            type: "paragraph",
            content: "This creates a plain text response."
          }
        ]
      },
      {
        heading: "Response Constructor",
        blocks: [
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "code",
            language: "javascript",
            content: `new Response(body, options)`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return new Response(

    "Welcome",

    {

        status:200,

        headers:{

            "Content-Type":"text/plain"

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "Components:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "body",
              "status",
              "headers"
            ]
          },
          {
            type: "paragraph",
            content: "This is the foundation upon which Next.js builds additional helpers."
          }
        ]
      },
      {
        heading: "NextResponse",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js introduces NextResponse, an extension of the standard Response object."
          },
          {
            type: "paragraph",
            content: "It provides convenient methods for common backend operations."
          },
          {
            type: "paragraph",
            content: "Import:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";`
          },
          {
            type: "paragraph",
            content: "Unlike the native Response object, NextResponse includes built-in support for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JSON responses",
              "redirects",
              "rewrites",
              "cookies",
              "header manipulation",
              "middleware integration"
            ]
          },
          {
            type: "paragraph",
            content: "Think of NextResponse as a supercharged Response object optimized for Next.js applications."
          }
        ]
      },
      {
        heading: "Response vs NextResponse",
        blocks: [
          {
            type: "table",
            headers: ["Response", "NextResponse"],
            rows: [
              ["Standard Web API", "Next.js Extension"],
              ["Basic responses", "Advanced helpers"],
              ["Manual cookie handling", "Built-in cookies"],
              ["Manual redirects", "Helper methods"],
              ["Standard headers", "Enhanced header utilities"],
              ["Works everywhere", "Optimized for Next.js"]
            ]
          },
          {
            type: "paragraph",
            content: "Use Response when you only need standard web functionality."
          },
          {
            type: "paragraph",
            content: "Use NextResponse whenever you need Next.js-specific features."
          }
        ]
      },
      {
        heading: "JSON Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Returning JSON is the most common operation in backend development."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";

export async function GET(){

    return NextResponse.json({

        id:1,

        name:"Laptop",

        price:50000

    });

}`
          },
          {
            type: "paragraph",
            content: "Response"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id":1,
    "name":"Laptop",
    "price":50000
}`
          },
          {
            type: "paragraph",
            content: "NextResponse.json() automatically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "serializes JavaScript objects",
              "sets Content-Type: application/json",
              "creates the HTTP response"
            ]
          }
        ]
      },
      {
        heading: "Setting Status Codes",
        blocks: [
          {
            type: "paragraph",
            content: "Status codes communicate the outcome of a request."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.json(

    {

        message:"Created"

    },

    {

        status:201

    }

);`
          }
        ]
      },
      {
        heading: "Common Status Codes",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning"],
            rows: [
              ["200", "Success"],
              ["201", "Resource Created"],
              ["202", "Accepted for Processing"],
              ["204", "No Content"],
              ["301", "Permanent Redirect"],
              ["302", "Temporary Redirect"],
              ["304", "Not Modified"],
              ["400", "Bad Request"],
              ["401", "Unauthorized"],
              ["403", "Forbidden"],
              ["404", "Not Found"],
              ["405", "Method Not Allowed"],
              ["409", "Conflict"],
              ["422", "Validation Failed"],
              ["429", "Too Many Requests"],
              ["500", "Internal Server Error"],
              ["503", "Service Unavailable"]
            ]
          },
          {
            type: "paragraph",
            content: "Choosing the correct status code makes APIs predictable and easier to consume."
          }
        ]
      },
      {
        heading: "Redirect Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes the client should be sent to another URL."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.redirect(

    new URL(

        "/login",

        request.url

    )

);`
          },
          {
            type: "paragraph",
            content: "Flow"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Middleware / Route Handler", "→",
              "Redirect", "→",
              "Browser Requests New URL"
            ]
          },
          {
            type: "paragraph",
            content: "Use redirects for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "authentication",
              "moved resources",
              "login pages",
              "onboarding flows"
            ]
          }
        ]
      },
      {
        heading: "Rewrite Responses",
        blocks: [
          {
            type: "paragraph",
            content: "A rewrite changes the destination without changing the browser URL."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.rewrite(

    new URL(

        "/new-dashboard",

        request.url

    )

);`
          },
          {
            type: "paragraph",
            content: "Browser still displays"
          },
          {
            type: "output",
            content: [
              "/dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Internally Next.js serves"
          },
          {
            type: "output",
            content: [
              "/new-dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "This is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A/B testing",
              "localization",
              "feature flags",
              "legacy URLs"
            ]
          }
        ]
      },
      {
        heading: "Working with Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies allow servers to store small pieces of information on the client."
          },
          {
            type: "paragraph",
            content: "Set a cookie"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.json({

    success:true

});

response.cookies.set(

    "theme",

    "dark"

);

return response;`
          },
          {
            type: "paragraph",
            content: "Read a cookie"
          },
          {
            type: "code",
            language: "javascript",
            content: `const theme = request.cookies.get("theme");`
          },
          {
            type: "paragraph",
            content: "Delete a cookie"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.cookies.delete("theme");`
          },
          {
            type: "paragraph",
            content: "Common use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "authentication tokens",
              "user preferences",
              "shopping carts",
              "language settings"
            ]
          }
        ]
      },
      {
        heading: "Working with Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Headers carry metadata about requests and responses."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.json({

    success:true

});

response.headers.set(

    "X-App-Version",

    "2.0"

);

return response;`
          },
          {
            type: "paragraph",
            content: "Useful headers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Type",
              "Cache-Control",
              "Authorization",
              "Content-Disposition",
              "ETag",
              "Location",
              "X-Request-ID"
            ]
          }
        ]
      },
      {
        heading: "File Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes an API needs to return files instead of JSON."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const file = await fetch("https://example.com/image.png");

return new Response(

    file.body,

    {

        headers:{

            "Content-Type":"image/png"

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "Possible file types:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "images",
              "PDFs",
              "ZIP archives",
              "Excel files",
              "videos",
              "audio"
            ]
          }
        ]
      },
      {
        heading: "Download Responses",
        blocks: [
          {
            type: "paragraph",
            content: "To force the browser to download a file instead of displaying it, use the Content-Disposition header."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return new Response(

    file,

    {

        headers:{

            "Content-Disposition":"attachment; filename=report.pdf",

            "Content-Type":"application/pdf"

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "The browser will prompt the user to save the file."
          }
        ]
      },
      {
        heading: "Streaming Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Large responses don't always need to be generated before sending data."
          },
          {
            type: "paragraph",
            content: "Streaming allows data to be sent progressively."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const stream = new ReadableStream({

    start(controller){

        controller.enqueue(

            new TextEncoder().encode("Hello")

        );

        controller.close();

    }

});

return new Response(stream);`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "lower latency",
              "faster first byte",
              "reduced memory usage",
              "better user experience"
            ]
          },
          {
            type: "paragraph",
            content: "Streaming is ideal for AI responses, logs, exports, and real-time data."
          }
        ]
      },
      {
        heading: "Error Responses",
        blocks: [
          {
            type: "paragraph",
            content: "A good API should always return meaningful error responses."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `return NextResponse.json(

    {

        error:"Product not found"

    },

    {

        status:404

    }

);`
          },
          {
            type: "paragraph",
            content: "Structure errors consistently:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": false,
    "error": {
        "code": "PRODUCT_NOT_FOUND",
        "message": "Product not found"
    }
}`
          },
          {
            type: "paragraph",
            content: "Consistent error shapes simplify frontend error handling."
          }
        ]
      },
      {
        heading: "Custom Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Not every response is JSON."
          },
          {
            type: "paragraph",
            content: "HTML"
          },
          {
            type: "code",
            language: "javascript",
            content: `return new Response(

    "<h1>Hello</h1>",

    {

        headers:{

            "Content-Type":"text/html"

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "XML"
          },
          {
            type: "output",
            content: [
              "Content-Type: application/xml"
            ]
          },
          {
            type: "paragraph",
            content: "CSV"
          },
          {
            type: "output",
            content: [
              "Content-Type: text/csv"
            ]
          },
          {
            type: "paragraph",
            content: "Plain Text"
          },
          {
            type: "output",
            content: [
              "Content-Type: text/plain"
            ]
          },
          {
            type: "paragraph",
            content: "Always choose the correct content type."
          }
        ]
      },
      {
        heading: "CORS Responses",
        blocks: [
          {
            type: "paragraph",
            content: "If your API is accessed from another origin, you must return appropriate CORS headers."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = NextResponse.json({

    success:true

});

response.headers.set(

    "Access-Control-Allow-Origin",

    "https://example.com"

);

response.headers.set(

    "Access-Control-Allow-Methods",

    "GET,POST,PUT,DELETE"

);

response.headers.set(

    "Access-Control-Allow-Headers",

    "Content-Type, Authorization"

);

return response;`
          },
          {
            type: "paragraph",
            content: "For public APIs, configure CORS carefully to avoid exposing sensitive resources."
          }
        ]
      },
      {
        heading: "Cache Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Cache headers tell browsers and CDNs how long responses may be stored."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.headers.set(

    "Cache-Control",

    "public, max-age=3600"

);`
          },
          {
            type: "paragraph",
            content: "Common directives:"
          },
          {
            type: "table",
            headers: ["Directive", "Purpose"],
            rows: [
              ["no-store", "Never cache"],
              ["no-cache", "Revalidate before use"],
              ["max-age", "Browser cache duration"],
              ["s-maxage", "CDN cache duration"],
              ["public", "Shared caches allowed"],
              ["private", "Only browser cache"]
            ]
          },
          {
            type: "paragraph",
            content: "Proper cache headers improve performance and reduce server load."
          }
        ]
      },
      {
        heading: "Content Negotiation",
        blocks: [
          {
            type: "paragraph",
            content: "Clients may request different response formats using the Accept header."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "Accept: application/json"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Accept: text/html"
            ]
          },
          {
            type: "paragraph",
            content: "Server logic"
          },
          {
            type: "code",
            language: "javascript",
            content: `const accept = request.headers.get("accept");

if(accept?.includes("application/json")){

    return NextResponse.json(data);

}

return new Response(renderHtml(data), {
    headers:{
        "Content-Type":"text/html"
    }
});`
          },
          {
            type: "paragraph",
            content: "This technique is known as content negotiation and allows one endpoint to serve multiple representations."
          }
        ]
      },
      {
        heading: "Security Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Security headers protect users against common web attacks."
          },
          {
            type: "paragraph",
            content: "Important examples include:"
          },
          {
            type: "output",
            content: [
              "Content-Security-Policy"
            ]
          },
          {
            type: "paragraph",
            content: "Restricts where scripts and resources may load from."
          },
          {
            type: "output",
            content: [
              "Strict-Transport-Security"
            ]
          },
          {
            type: "paragraph",
            content: "Forces HTTPS connections."
          },
          {
            type: "output",
            content: [
              "X-Content-Type-Options: nosniff"
            ]
          },
          {
            type: "paragraph",
            content: "Prevents MIME type sniffing."
          },
          {
            type: "output",
            content: [
              "X-Frame-Options: DENY"
            ]
          },
          {
            type: "paragraph",
            content: "Protects against clickjacking."
          },
          {
            type: "output",
            content: [
              "Referrer-Policy"
            ]
          },
          {
            type: "paragraph",
            content: "Controls referrer information sent to other sites."
          },
          {
            type: "paragraph",
            content: "These headers should be applied consistently across production APIs."
          }
        ]
      },
      {
        heading: "Complete Production Response Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Incoming Request", "→",
              "Route Handler", "→",
              "Business Logic", "→",
              "Database / External API", "→",
              "Prepare Response Data", "→",
              "Set Status Code", "→",
              "Add Headers", "→",
              "Set Cookies", "→",
              "Apply Cache Policy", "→",
              "Return NextResponse", "→",
              "Client Receives Response"
            ]
          },
          {
            type: "paragraph",
            content: "Separating these responsibilities leads to clean, maintainable backend code."
          }
        ]
      },
      {
        heading: "Production Response Helper Pattern",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of building responses manually in every endpoint, many teams create reusable helper functions."
          },
          {
            type: "code",
            language: "typescript",
            content: `export function success(data: unknown, status = 200) {
    return NextResponse.json(
        {
            success: true,
            data
        },
        { status }
    );
}

export function failure(message: string, status = 400) {
    return NextResponse.json(
        {
            success: false,
            error: { message }
        },
        { status }
    );
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
              "consistent API shape",
              "centralized response formatting",
              "easier maintenance",
              "reduced duplication",
              "improved frontend integration"
            ]
          }
        ]
      },
      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication API"
          },
          {
            type: "paragraph",
            content: "Returns a JWT token, sets a secure session cookie, and responds with user information."
          },
          {
            type: "paragraph",
            content: "File Export API"
          },
          {
            type: "paragraph",
            content: "Generates a CSV report and forces the browser to download it using Content-Disposition."
          },
          {
            type: "paragraph",
            content: "AI Chat API"
          },
          {
            type: "paragraph",
            content: "Streams tokens incrementally so users see the response appear in real time."
          },
          {
            type: "paragraph",
            content: "E-commerce Checkout API"
          },
          {
            type: "paragraph",
            content: "Returns 201 Created after an order is successfully stored, includes the order ID, and sets cache headers to prevent sensitive data from being cached."
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
              "Use NextResponse.json() for JSON APIs.",
              "Return meaningful HTTP status codes.",
              "Keep response structures consistent across all endpoints.",
              "Include descriptive error messages without exposing internal implementation details.",
              "Apply appropriate cache headers for each endpoint.",
              "Use secure, HTTP-only cookies for authentication.",
              "Add security headers to protect against common attacks.",
              "Stream large responses instead of buffering everything in memory.",
              "Reuse response helper utilities to avoid repetitive code.",
              "Document your API response format so frontend developers know what to expect."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Always Returning Status 200"
          },
          {
            type: "paragraph",
            content: "A failed request should not return 200 OK. Use the appropriate error status code."
          },
          {
            type: "paragraph",
            content: "Inconsistent Response Shapes"
          },
          {
            type: "paragraph",
            content: "Returning different JSON structures from different endpoints complicates frontend code."
          },
          {
            type: "paragraph",
            content: "Forgetting Content Types"
          },
          {
            type: "paragraph",
            content: "Always ensure the Content-Type matches the response body."
          },
          {
            type: "paragraph",
            content: "Exposing Internal Errors"
          },
          {
            type: "paragraph",
            content: "Never return stack traces or database errors directly to clients."
          },
          {
            type: "paragraph",
            content: "Missing Cache Headers"
          },
          {
            type: "paragraph",
            content: "Responses without proper cache directives may be cached incorrectly or not at all."
          },
          {
            type: "paragraph",
            content: "Weak Cookie Security"
          },
          {
            type: "paragraph",
            content: "Authentication cookies should generally be HttpOnly, Secure, and configured with an appropriate SameSite policy."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Professional backend development is not just about returning data—it is about communicating clearly with every client that consumes your API. A well-designed response includes the correct status code, a predictable JSON structure, secure headers, appropriate caching policies, and meaningful error information. Teams that standardize their response format early find it much easier to build scalable frontend applications, mobile apps, third-party integrations, and public APIs."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Response Helpers in Next.js simplify the creation of robust HTTP responses by extending the standard Web Response API with NextResponse. They make it easy to return JSON, configure status codes, perform redirects and rewrites, manage cookies and headers, stream data, serve files, handle CORS, control caching, negotiate content types, and apply security policies. By adopting consistent response structures, reusable helper functions, and production-grade practices, you can build APIs that are secure, performant, maintainable, and pleasant for clients to consume."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : CRUD API
============================= */
    "nextjs-crud-api": {
    title: "CRUD API",
    readingTime: "30 min",
        
    content: [
      {
        heading: "CRUD API",
        blocks: [
          {
            type: "paragraph",
            content: "Almost every backend application revolves around one fundamental concept:"
          },
          {
            type: "paragraph",
            content: "Managing data."
          },
          {
            type: "paragraph",
            content: "Whether you're building:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "an e-commerce platform,",
              "a banking application,",
              "a hospital management system,",
              "a social media platform,",
              "a CMS,",
              "or a learning platform like DevSphere,"
            ]
          },
          {
            type: "paragraph",
            content: "your backend is constantly performing four basic operations:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create data",
              "Read data",
              "Update data",
              "Delete data"
            ]
          },
          {
            type: "paragraph",
            content: "These four operations are collectively called CRUD."
          },
          {
            type: "paragraph",
            content: "CRUD APIs are the foundation of backend development. Once you master them, you'll understand how most real-world APIs work."
          }
        ]
      },
      {
        heading: "What is CRUD?",
        blocks: [
          {
            type: "paragraph",
            content: "CRUD stands for:"
          },
          {
            type: "table",
            headers: ["Letter", "Meaning", "Database Operation"],
            rows: [
              ["C", "Create", "INSERT"],
              ["R", "Read", "SELECT"],
              ["U", "Update", "UPDATE"],
              ["D", "Delete", "DELETE"]
            ]
          },
          {
            type: "paragraph",
            content: "Think of an online shopping website."
          },
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "output",
            content: [
              "Add Product"
            ]
          },
          {
            type: "paragraph",
            content: "Read"
          },
          {
            type: "output",
            content: [
              "View Products"
            ]
          },
          {
            type: "paragraph",
            content: "Update"
          },
          {
            type: "output",
            content: [
              "Edit Product"
            ]
          },
          {
            type: "paragraph",
            content: "Delete"
          },
          {
            type: "output",
            content: [
              "Remove Product"
            ]
          },
          {
            type: "paragraph",
            content: "Every major application repeats these operations millions of times every day."
          }
        ]
      },
      {
        heading: "Why CRUD APIs Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online bookstore."
          },
          {
            type: "paragraph",
            content: "Users should be able to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "add books",
              "view books",
              "edit book information",
              "delete books"
            ]
          },
          {
            type: "paragraph",
            content: "Without CRUD APIs, every frontend feature would need direct database access."
          },
          {
            type: "paragraph",
            content: "That is impossible because:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "databases should never be exposed publicly",
              "business logic must stay on the server",
              "authentication is required",
              "validation is required",
              "authorization is required"
            ]
          },
          {
            type: "paragraph",
            content: "Instead, the frontend communicates with a CRUD API."
          }
        ]
      },
      {
        heading: "CRUD Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HTTP Request", "→",
              "CRUD API", "→",
              "Business Logic", "→",
              "Database", "→",
              "CRUD API", "→",
              "JSON Response", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "The API becomes the bridge between the frontend and the database."
          }
        ]
      },
      {
        heading: "REST Resource Design",
        blocks: [
          {
            type: "paragraph",
            content: "Good CRUD APIs follow REST principles."
          },
          {
            type: "paragraph",
            content: "Suppose we manage products."
          },
          {
            type: "paragraph",
            content: "Collection endpoint"
          },
          {
            type: "output",
            content: [
              "/api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Individual resource"
          },
          {
            type: "output",
            content: [
              "/api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "REST operations become:"
          },
          {
            type: "table",
            headers: ["HTTP Method", "Endpoint", "Operation"],
            rows: [
              ["POST", "/api/products", "Create"],
              ["GET", "/api/products", "Read all"],
              ["GET", "/api/products/15", "Read one"],
              ["PUT", "/api/products/15", "Replace"],
              ["PATCH", "/api/products/15", "Partial update"],
              ["DELETE", "/api/products/15", "Delete"]
            ]
          },
          {
            type: "paragraph",
            content: "This predictable structure makes APIs easy to understand."
          }
        ]
      },
      {
        heading: "CRUD Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A production CRUD API usually follows this flow."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Route Handler / API Route", "→",
              "Validation", "→",
              "Authentication", "→",
              "Authorization", "→",
              "Business Logic", "→",
              "Database", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Each layer has a single responsibility."
          }
        ]
      },
      {
        heading: "CREATE Operation",
        blocks: [
          {
            type: "paragraph",
            content: "Creating means inserting new data."
          },
          {
            type: "paragraph",
            content: "Example request"
          },
          {
            type: "output",
            content: [
              "POST /api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Body"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name":"Laptop",
    "price":65000
}`
          },
          {
            type: "paragraph",
            content: "Example Route Handler"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function POST(request: Request) {

    const body = await request.json();

    const product = await prisma.product.create({

        data:{

            name: body.name,

            price: body.price

        }

    });

    return Response.json(product,{
        status:201
    });

}`
          },
          {
            type: "paragraph",
            content: "Response"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id":12,
    "name":"Laptop",
    "price":65000
}`
          }
        ]
      },
      {
        heading: "CREATE Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Read JSON", "→",
              "Validate", "→",
              "Authenticate", "→",
              "Insert Database", "→",
              "Return Created Resource", "→",
              "201 Created"
            ]
          }
        ]
      },
      {
        heading: "READ Operation",
        blocks: [
          {
            type: "paragraph",
            content: "Reading retrieves existing data."
          },
          {
            type: "paragraph",
            content: "Fetch all products"
          },
          {
            type: "output",
            content: [
              "GET /api/products"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    const products = await prisma.product.findMany();

    return Response.json(products);

}`
          }
        ]
      },
      {
        heading: "Reading a Single Resource",
        blocks: [
          {
            type: "output",
            content: [
              "GET /api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const product = await prisma.product.findUnique({

    where:{

        id:Number(params.id)

    }

});`
          },
          {
            type: "paragraph",
            content: "If the product doesn't exist:"
          },
          {
            type: "output",
            content: [
              "404 Not Found"
            ]
          }
        ]
      },
      {
        heading: "READ Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Receive Request", "→",
              "Validate Parameters", "→",
              "Query Database", "→",
              "Convert Result", "→",
              "Return JSON"
            ]
          }
        ]
      },
      {
        heading: "UPDATE Operation",
        blocks: [
          {
            type: "paragraph",
            content: "Updating modifies existing data."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "PUT /api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "Body"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "price":70000
}`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.update({

    where:{

        id:Number(params.id)

    },

    data:{

        price:70000

    }

});`
          },
          {
            type: "paragraph",
            content: "PUT usually replaces the entire resource, while PATCH modifies only selected fields."
          }
        ]
      },
      {
        heading: "PATCH Example",
        blocks: [
          {
            type: "output",
            content: [
              "PATCH /api/products/15"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
    "price":72000
}`
          },
          {
            type: "paragraph",
            content: "Only the provided fields are updated."
          }
        ]
      },
      {
        heading: "UPDATE Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Receive Request", "→",
              "Validate", "→",
              "Find Resource", "→",
              "Update Database", "→",
              "Return Updated Object"
            ]
          }
        ]
      },
      {
        heading: "DELETE Operation",
        blocks: [
          {
            type: "paragraph",
            content: "Delete removes data."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "DELETE /api/products/15"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.delete({

    where:{

        id:Number(params.id)

    }

});`
          },
          {
            type: "paragraph",
            content: "Successful deletion commonly returns:"
          },
          {
            type: "output",
            content: [
              "204 No Content"
            ]
          }
        ]
      },
      {
        heading: "DELETE Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Receive Request", "→",
              "Authenticate", "→",
              "Find Resource", "→",
              "Delete", "→",
              "Return Success"
            ]
          }
        ]
      },
      {
        heading: "Complete CRUD Flow",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `              Client
                 │
                 ▼
          Route Handler
                 │
      ┌──────────┼──────────┐
      │          │          │
 Validate   Authentication  Authorization
      │          │          │
      └──────────┼──────────┘
                 ▼
         Business Logic
                 │
                 ▼
            Database ORM
                 │
                 ▼
        Create / Read / Update / Delete
                 │
                 ▼
         JSON HTTP Response`
          }
        ]
      },
      {
        heading: "Database Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications separate responsibilities."
          },
          {
            type: "flow",
            steps: [
              "API", "→",
              "Service Layer", "→",
              "Repository", "→",
              "ORM", "→",
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
              "reusable logic",
              "easier testing",
              "maintainability",
              "scalability"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid placing complex business logic directly inside Route Handlers."
          }
        ]
      },
      {
        heading: "Prisma Example",
        blocks: [
          {
            type: "paragraph",
            content: "Schema"
          },
          {
            type: "code",
            language: "prisma",
            content: `model Product{

    id Int @id @default(autoincrement())

    name String

    price Float

}`
          },
          {
            type: "paragraph",
            content: "Read"
          },
          {
            type: "code",
            language: "javascript",
            content: `const products = await prisma.product.findMany();`
          },
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.create({

    data:{

        name:"Phone",

        price:25000

    }

});`
          },
          {
            type: "paragraph",
            content: "Update"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.update({

    where:{id:5},

    data:{price:30000}

});`
          },
          {
            type: "paragraph",
            content: "Delete"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.delete({

    where:{id:5}

});`
          },
          {
            type: "paragraph",
            content: "Prisma provides a type-safe, developer-friendly interface for SQL databases."
          }
        ]
      },
      {
        heading: "SQL Example",
        blocks: [
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "code",
            language: "sql",
            content: `INSERT INTO products(name,price)

VALUES('Laptop',60000);`
          },
          {
            type: "paragraph",
            content: "Read"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT *

FROM products;`
          },
          {
            type: "paragraph",
            content: "Update"
          },
          {
            type: "code",
            language: "sql",
            content: `UPDATE products

SET price=65000

WHERE id=5;`
          },
          {
            type: "paragraph",
            content: "Delete"
          },
          {
            type: "code",
            language: "sql",
            content: `DELETE FROM products

WHERE id=5;`
          },
          {
            type: "paragraph",
            content: "Understanding SQL helps you reason about what ORMs are doing under the hood."
          }
        ]
      },
      {
        heading: "MongoDB Example",
        blocks: [
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.products.insertOne({

    name:"Laptop",

    price:65000

});`
          },
          {
            type: "paragraph",
            content: "Read"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.products.find();`
          },
          {
            type: "paragraph",
            content: "Update"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.products.updateOne(

    {

        _id:id

    },

    {

        $set:{

            price:70000

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "Delete"
          },
          {
            type: "code",
            language: "javascript",
            content: `db.products.deleteOne({

    _id:id

});`
          },
          {
            type: "paragraph",
            content: "Unlike SQL, MongoDB stores data as documents rather than rows."
          }
        ]
      },
      {
        heading: "Validation",
        blocks: [
          {
            type: "paragraph",
            content: "Never trust client input."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `if(!body.name){

    return Response.json({

        error:"Name required"

    },

    {

        status:400

    });

}`
          },
          {
            type: "paragraph",
            content: "Modern applications commonly use libraries such as Zod, Yup, or Valibot for schema validation."
          },
          {
            type: "paragraph",
            content: "Validate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "required fields",
              "data types",
              "ranges",
              "string lengths",
              "email formats",
              "enums"
            ]
          },
          {
            type: "paragraph",
            content: "before touching the database."
          }
        ]
      },
      {
        heading: "Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "Handle predictable failures gracefully."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `try{

    // CRUD operation

}

catch{

    return Response.json({

        error:"Internal Server Error"

    },

    {

        status:500

    });

}`
          },
          {
            type: "paragraph",
            content: "Return meaningful messages while avoiding exposure of internal database details."
          }
        ]
      },
      {
        heading: "Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Before mutating data, verify the user's identity."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "JWT / Session", "→",
              "Authenticated?", "→",
              "Continue"
            ]
          },
          {
            type: "paragraph",
            content: "Unauthenticated users should receive:"
          },
          {
            type: "output",
            content: [
              "401 Unauthorized"
            ]
          }
        ]
      },
      {
        heading: "Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers:"
          },
          {
            type: "output",
            content: [
              "Who are you?"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization answers:"
          },
          {
            type: "output",
            content: [
              "What are you allowed to do?"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Delete Product", "→",
              "Admin?", "→",
              "Yes", "→",
              "Delete", "→",
              "No", "→",
              "403 Forbidden"
            ]
          },
          {
            type: "paragraph",
            content: "Never rely solely on frontend checks."
          }
        ]
      },
      {
        heading: "Transactions",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes multiple database operations must succeed or fail together."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "create order",
              "decrease inventory",
              "create payment record"
            ]
          },
          {
            type: "paragraph",
            content: "If one step fails, everything should roll back."
          },
          {
            type: "paragraph",
            content: "Prisma example"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.$transaction([

    prisma.order.create({...}),

    prisma.inventory.update({...})

]);`
          },
          {
            type: "paragraph",
            content: "Transactions preserve data consistency."
          }
        ]
      },
      {
        heading: "Relationships",
        blocks: [
          {
            type: "paragraph",
            content: "Real databases contain related data."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Posts"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await prisma.user.findUnique({

    where:{id:1},

    include:{

        posts:true

    }

});`
          },
          {
            type: "paragraph",
            content: "Understanding relationships is essential for building real-world CRUD APIs."
          }
        ]
      },
      {
        heading: "Pagination",
        blocks: [
          {
            type: "paragraph",
            content: "Returning millions of records at once is inefficient."
          },
          {
            type: "paragraph",
            content: "Instead, fetch data in smaller pages."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "GET /api/products?page=2&limit=20"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.findMany({

    skip:20,

    take:20

});`
          },
          {
            type: "paragraph",
            content: "Pagination reduces memory usage and improves response times."
          }
        ]
      },
      {
        heading: "Filtering",
        blocks: [
          {
            type: "paragraph",
            content: "Users rarely want every record."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "GET /api/products?category=laptop"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.findMany({

    where:{

        category:"laptop"

    }

});`
          },
          {
            type: "paragraph",
            content: "Filtering narrows results based on user-defined criteria."
          }
        ]
      },
      {
        heading: "Sorting",
        blocks: [
          {
            type: "paragraph",
            content: "Users often want results in a specific order."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "GET /api/products?sort=price"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma"
          },
          {
            type: "code",
            language: "javascript",
            content: `orderBy:{

    price:"asc"

}`
          },
          {
            type: "paragraph",
            content: "Common sort fields:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "price",
              "name",
              "createdAt",
              "updatedAt",
              "popularity",
              "rating"
            ]
          }
        ]
      },
      {
        heading: "Search",
        blocks: [
          {
            type: "paragraph",
            content: "Search allows users to find records by keywords."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "GET /api/products?search=laptop"
            ]
          },
          {
            type: "paragraph",
            content: "Prisma"
          },
          {
            type: "code",
            language: "javascript",
            content: `where:{

    name:{

        contains:"laptop",

        mode:"insensitive"

    }

}`
          },
          {
            type: "paragraph",
            content: "For large-scale applications, dedicated search engines such as Elasticsearch, OpenSearch, or Meilisearch provide significantly better performance and advanced search capabilities."
          }
        ]
      },
      {
        heading: "Complete Production CRUD Example",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `POST /api/products
GET /api/products
GET /api/products/15
PATCH /api/products/15
DELETE /api/products/15

             │
             ▼
     Route Handler
             │
             ▼
        Validate Input
             │
             ▼
 Authenticate & Authorize
             │
             ▼
      Business Logic
             │
             ▼
   Prisma / SQL / MongoDB
             │
             ▼
      Return HTTP Response`
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
              "Design APIs around resources, not actions.",
              "Use meaningful HTTP methods and status codes.",
              "Validate all incoming data.",
              "Authenticate and authorize sensitive operations.",
              "Use transactions for multi-step updates.",
              "Keep business logic outside Route Handlers.",
              "Support pagination, filtering, sorting, and search for collection endpoints.",
              "Return consistent JSON response structures.",
              "Log important CRUD operations for auditing and debugging.",
              "Write automated tests for every CRUD endpoint."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Exposing Database Errors"
          },
          {
            type: "paragraph",
            content: "Never send raw database exceptions to clients."
          },
          {
            type: "paragraph",
            content: "Skipping Validation"
          },
          {
            type: "paragraph",
            content: "Invalid data should be rejected before reaching the database."
          },
          {
            type: "paragraph",
            content: "Returning Entire Tables"
          },
          {
            type: "paragraph",
            content: "Always paginate large collections."
          },
          {
            type: "paragraph",
            content: "Ignoring Authorization"
          },
          {
            type: "paragraph",
            content: "Authentication without authorization can still allow users to modify resources they do not own."
          },
          {
            type: "paragraph",
            content: "Mixing Business Logic with Routing"
          },
          {
            type: "paragraph",
            content: "Keep Route Handlers thin and delegate complex operations to service layers."
          },
          {
            type: "paragraph",
            content: "Using PUT for Partial Updates"
          },
          {
            type: "paragraph",
            content: "Use PATCH when only a subset of fields changes."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "CRUD is often viewed as \"basic,\" but production-grade CRUD APIs are anything but simple. Professional systems combine CRUD operations with validation, authentication, authorization, transactions, pagination, filtering, search, logging, caching, and monitoring. Treat CRUD not as four isolated operations but as a complete lifecycle for managing resources. A well-designed CRUD API becomes the backbone upon which the rest of your application's business logic is built."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "CRUD APIs form the foundation of backend development by enabling applications to create, read, update, and delete resources through standardized REST endpoints. In this lesson, you learned how CRUD operations map to HTTP methods, how to design RESTful resource URLs, implement CRUD with Prisma, SQL, and MongoDB, validate user input, handle errors, enforce authentication and authorization, manage transactions and relationships, and support pagination, filtering, sorting, and search. By following these principles and best practices, you can build scalable, secure, and maintainable APIs that power real-world applications of any size."
          },
          {
            type: "divider"
          }
        ]
      },
      {
        heading: "CRUD API - Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned how to build CRUD APIs using REST principles, Route Handlers, databases, validation, authentication, authorization, transactions, pagination, filtering, sorting, and search."
          },
          {
            type: "paragraph",
            content: "However, a CRUD API that works on your local machine is not automatically production-ready."
          },
          {
            type: "paragraph",
            content: "Real-world APIs must handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "thousands of concurrent users",
              "malicious requests",
              "accidental data loss",
              "race conditions",
              "server failures",
              "database bottlenecks",
              "monitoring",
              "deployment",
              "scalability"
            ]
          },
          {
            type: "paragraph",
            content: "This lesson focuses on transforming a basic CRUD API into an enterprise-grade backend."
          }
        ]
      },
      {
        heading: "Production Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Professional applications rarely place all CRUD logic inside Route Handlers."
          },
          {
            type: "paragraph",
            content: "Instead, responsibilities are divided into layers."
          },
          {
            type: "code",
            language: "text",
            content: `Client
   │
   ▼
Route Handler
   │
   ▼
Validation Layer
   │
   ▼
Authentication
   │
   ▼
Authorization
   │
   ▼
Service Layer
   │
   ▼
Repository Layer
   │
   ▼
ORM
   │
   ▼
Database`
          },
          {
            type: "paragraph",
            content: "Each layer has a single responsibility."
          }
        ]
      },
      {
        heading: "Route Handler",
        blocks: [
          {
            type: "paragraph",
            content: "Responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "receiving requests",
              "validating HTTP input",
              "returning responses"
            ]
          },
          {
            type: "paragraph",
            content: "Should not contain business logic."
          }
        ]
      },
      {
        heading: "Service Layer",
        blocks: [
          {
            type: "paragraph",
            content: "Responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "business rules",
              "calculations",
              "workflows",
              "transactions",
              "permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Create Order", "→",
              "Check Inventory", "→",
              "Calculate Discount", "→",
              "Create Order", "→",
              "Reduce Stock", "→",
              "Send Notification"
            ]
          }
        ]
      },
      {
        heading: "Repository Layer",
        blocks: [
          {
            type: "paragraph",
            content: "Responsible for communicating with the database."
          },
          {
            type: "paragraph",
            content: "Instead of writing Prisma queries everywhere:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.findMany();`
          },
          {
            type: "paragraph",
            content: "you create reusable repository functions."
          },
          {
            type: "code",
            language: "javascript",
            content: `ProductRepository.findAll();`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "reusable",
              "testable",
              "maintainable"
            ]
          }
        ]
      },
      {
        heading: "Logging",
        blocks: [
          {
            type: "paragraph",
            content: "Production APIs should log important events."
          },
          {
            type: "paragraph",
            content: "Without logs:"
          },
          {
            type: "flow",
            steps: [
              "User reports a bug", "→",
              "Developer has no idea what happened"
            ]
          },
          {
            type: "paragraph",
            content: "With logs:"
          },
          {
            type: "flow",
            steps: [
              "Request Received", "→",
              "Database Query", "→",
              "Response Sent", "→",
              "Stored in Log System"
            ]
          },
          {
            type: "paragraph",
            content: "Useful information to log:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "request ID",
              "timestamp",
              "endpoint",
              "user ID",
              "response status",
              "execution time",
              "errors"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log({

    endpoint:"/api/products",

    method:"POST",

    userId:session.user.id

});`
          },
          {
            type: "paragraph",
            content: "In production, use centralized logging systems such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Winston",
              "Pino",
              "Datadog",
              "Grafana Loki",
              "Elastic Stack",
              "Cloud provider logging services"
            ]
          },
          {
            type: "paragraph",
            content: "Structured logs (JSON) are much easier to search and analyze than plain text."
          }
        ]
      },
      {
        heading: "Rate Limiting",
        blocks: [
          {
            type: "paragraph",
            content: "Without rate limiting, a single client can overwhelm your API."
          },
          {
            type: "paragraph",
            content: "Example attack:"
          },
          {
            type: "flow",
            steps: [
              "Bot", "→",
              "10000 Requests", "→",
              "Server Overloaded"
            ]
          },
          {
            type: "paragraph",
            content: "Rate limiting restricts how many requests a client can make within a given time window."
          },
          {
            type: "paragraph",
            content: "Example policy:"
          },
          {
            type: "flow",
            steps: [
              "100 Requests", "→",
              "Per Minute", "→",
              "Per User"
            ]
          },
          {
            type: "paragraph",
            content: "If the limit is exceeded:"
          },
          {
            type: "output",
            content: [
              "429 Too Many Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Common implementations use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Redis",
              "Upstash Redis",
              "Cloudflare",
              "API Gateway rate limiting"
            ]
          }
        ]
      },
      {
        heading: "Sliding Window Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of resetting counters every minute, many production systems use a sliding window."
          },
          {
            type: "flow",
            steps: [
              "Current Time", "→",
              "Previous 60 Seconds", "→",
              "Count Requests", "→",
              "Allow / Reject"
            ]
          },
          {
            type: "paragraph",
            content: "This produces smoother and fairer rate limiting."
          }
        ]
      },
      {
        heading: "Soft Delete",
        blocks: [
          {
            type: "paragraph",
            content: "Hard deletion permanently removes data."
          },
          {
            type: "flow",
            steps: [
              "DELETE", "→",
              "Row Removed Forever"
            ]
          },
          {
            type: "paragraph",
            content: "Sometimes this is dangerous."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "A customer accidentally deletes an important invoice."
          },
          {
            type: "paragraph",
            content: "Recovery becomes impossible."
          },
          {
            type: "paragraph",
            content: "Instead, many systems use soft delete."
          },
          {
            type: "paragraph",
            content: "Database:"
          },
          {
            type: "output",
            content: [
              "id",
              "name",
              "deletedAt"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of removing the row:"
          },
          {
            type: "flow",
            steps: [
              "deletedAt", "→",
              "Current Timestamp"
            ]
          },
          {
            type: "paragraph",
            content: "Query:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT

WHERE deletedAt IS NULL`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "recovery",
              "audit history",
              "legal compliance",
              "accidental deletion protection"
            ]
          }
        ]
      },
      {
        heading: "Soft Delete Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `await prisma.product.update({

    where:{id},

    data:{

        deletedAt:new Date()

    }

});`
          }
        ]
      },
      {
        heading: "Batch Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes users modify many records simultaneously."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "delete 100 emails",
              "update multiple products",
              "approve many requests"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "output",
            content: [
              "100 HTTP Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "output",
            content: [
              "1 Batch Request"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "POST /api/products/batch-delete"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
    "ids":[
        4,
        8,
        10
    ]
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
              "fewer requests",
              "lower latency",
              "reduced server load",
              "atomic operations when combined with transactions"
            ]
          }
        ]
      },
      {
        heading: "Optimistic Concurrency",
        blocks: [
          {
            type: "paragraph",
            content: "Two users may edit the same resource simultaneously."
          },
          {
            type: "paragraph",
            content: "Scenario:"
          },
          {
            type: "flow",
            steps: [
              "User A", "→",
              "Reads Product", "→",
              "Price = 500"
            ]
          },
          {
            type: "paragraph",
            content: "Meanwhile:"
          },
          {
            type: "flow",
            steps: [
              "User B", "→",
              "Updates Price", "→",
              "700"
            ]
          },
          {
            type: "paragraph",
            content: "Then User A saves:"
          },
          {
            type: "output",
            content: [
              "500"
            ]
          },
          {
            type: "paragraph",
            content: "User B's changes are overwritten."
          },
          {
            type: "paragraph",
            content: "This is called the Lost Update Problem."
          }
        ]
      },
      {
        heading: "Version-Based Concurrency",
        blocks: [
          {
            type: "paragraph",
            content: "Each row contains:"
          },
          {
            type: "output",
            content: [
              "version"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Product",
              "Version = 5"
            ]
          },
          {
            type: "paragraph",
            content: "Update query:"
          },
          {
            type: "code",
            language: "sql",
            content: `WHERE

id = 15

AND

version = 5`
          },
          {
            type: "paragraph",
            content: "If another update already changed the version:"
          },
          {
            type: "output",
            content: [
              "Update Fails"
            ]
          },
          {
            type: "paragraph",
            content: "The client can then refresh and retry."
          },
          {
            type: "paragraph",
            content: "This technique is known as Optimistic Concurrency Control (OCC) and prevents silent data loss."
          }
        ]
      },
      {
        heading: "Performance Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "As your application grows, performance becomes critical."
          }
        ]
      },
      {
        heading: "Reduce Database Queries",
        blocks: [
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "1 Request", "→",
              "20 Queries"
            ]
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "flow",
            steps: [
              "1 Request", "→",
              "2 Queries"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid unnecessary database access."
          }
        ]
      },
      {
        heading: "Select Only Required Fields",
        blocks: [
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `findMany()`
          },
          {
            type: "paragraph",
            content: "returns every column."
          },
          {
            type: "paragraph",
            content: "Better"
          },
          {
            type: "code",
            language: "javascript",
            content: `select:{

    id:true,

    name:true

}`
          },
          {
            type: "paragraph",
            content: "Smaller payloads mean faster responses."
          }
        ]
      },
      {
        heading: "Pagination",
        blocks: [
          {
            type: "paragraph",
            content: "Never return thousands of rows."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "sql",
            content: `LIMIT 20`
          }
        ]
      },
      {
        heading: "Database Indexes",
        blocks: [
          {
            type: "paragraph",
            content: "Searching without indexes:"
          },
          {
            type: "flow",
            steps: [
              "1 Million Rows", "→",
              "Full Scan"
            ]
          },
          {
            type: "paragraph",
            content: "Searching with indexes:"
          },
          {
            type: "flow",
            steps: [
              "Indexed Lookup", "→",
              "Milliseconds"
            ]
          },
          {
            type: "paragraph",
            content: "Frequently queried columns such as IDs, emails, slugs, and foreign keys should be indexed."
          }
        ]
      },
      {
        heading: "Connection Pooling",
        blocks: [
          {
            type: "paragraph",
            content: "Opening a new database connection for every request is expensive."
          },
          {
            type: "paragraph",
            content: "Connection pools reuse existing connections."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Connection Pool", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "This significantly improves throughput."
          }
        ]
      },
      {
        heading: "Caching",
        blocks: [
          {
            type: "paragraph",
            content: "Frequently requested resources should not always hit the database."
          },
          {
            type: "paragraph",
            content: "Without caching:"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "With caching:"
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Cache", "→",
              "Database (Only If Needed)"
            ]
          },
          {
            type: "paragraph",
            content: "Popular cache layers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Next.js Data Cache",
              "Redis",
              "CDN",
              "Browser Cache"
            ]
          },
          {
            type: "paragraph",
            content: "Suitable for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "product catalogs",
              "blog posts",
              "public profiles",
              "configuration data"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid caching highly personalized or rapidly changing data unless invalidation is carefully managed."
          }
        ]
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "paragraph",
            content: "CRUD APIs are common attack targets."
          }
        ]
      },
      {
        heading: "Validate Every Input",
        blocks: [
          {
            type: "paragraph",
            content: "Never trust client data."
          },
          {
            type: "paragraph",
            content: "Always validate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "types",
              "lengths",
              "ranges",
              "formats",
              "required fields"
            ]
          }
        ]
      },
      {
        heading: "Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Ensure the user is logged in before accessing protected resources."
          }
        ]
      },
      {
        heading: "Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Check whether the authenticated user has permission to perform the action."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Delete Product", "→",
              "Admin?", "→",
              "Yes", "→",
              "Delete", "→",
              "No", "→",
              "403 Forbidden"
            ]
          }
        ]
      },
      {
        heading: "Prevent SQL Injection",
        blocks: [
          {
            type: "paragraph",
            content: "Always use parameterized queries or an ORM."
          },
          {
            type: "paragraph",
            content: "Unsafe:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT *

FROM users

WHERE name=' " + userInput`
          },
          {
            type: "paragraph",
            content: "Safe:"
          },
          {
            type: "paragraph",
            content: "ORMs such as Prisma automatically parameterize queries."
          }
        ]
      },
      {
        heading: "Protect Sensitive Data",
        blocks: [
          {
            type: "paragraph",
            content: "Never return:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "passwords",
              "API keys",
              "secret tokens",
              "internal IDs unless necessary"
            ]
          }
        ]
      },
      {
        heading: "HTTPS",
        blocks: [
          {
            type: "paragraph",
            content: "Always deploy production APIs over HTTPS."
          }
        ]
      },
      {
        heading: "Secure Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Include headers such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Security-Policy",
              "X-Frame-Options",
              "Strict-Transport-Security",
              "X-Content-Type-Options"
            ]
          }
        ]
      },
      {
        heading: "Testing",
        blocks: [
          {
            type: "paragraph",
            content: "Every CRUD endpoint should be tested."
          },
          {
            type: "paragraph",
            content: "Testing types:"
          },
          {
            type: "paragraph",
            content: "Unit Tests"
          },
          {
            type: "paragraph",
            content: "Test individual functions."
          },
          {
            type: "paragraph",
            content: "Integration Tests"
          },
          {
            type: "paragraph",
            content: "Verify interactions between:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Route Handler",
              "Database",
              "Services"
            ]
          },
          {
            type: "paragraph",
            content: "End-to-End Tests"
          },
          {
            type: "paragraph",
            content: "Simulate real user workflows."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Create Product", "→",
              "Update Product", "→",
              "Delete Product"
            ]
          },
          {
            type: "paragraph",
            content: "Popular tools:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Jest",
              "Vitest",
              "Playwright",
              "Cypress",
              "Supertest"
            ]
          },
          {
            type: "paragraph",
            content: "Automated testing catches regressions before deployment."
          }
        ]
      },
      {
        heading: "Deployment",
        blocks: [
          {
            type: "paragraph",
            content: "Before deploying your CRUD API, ensure that:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "environment variables are configured",
              "database migrations have run",
              "secrets are stored securely",
              "HTTPS is enabled",
              "monitoring is active",
              "logging is configured",
              "backups are scheduled",
              "rate limiting is enabled",
              "health checks are available"
            ]
          },
          {
            type: "paragraph",
            content: "Typical deployment flow:"
          },
          {
            type: "flow",
            steps: [
              "Developer", "→",
              "Git Push", "→",
              "CI Pipeline", "→",
              "Run Tests", "→",
              "Build", "→",
              "Deploy", "→",
              "Production"
            ]
          }
        ]
      },
      {
        heading: "Production Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before releasing a CRUD API, verify that it includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✅ Validation",
              "✅ Authentication",
              "✅ Authorization",
              "✅ Logging",
              "✅ Rate limiting",
              "✅ Pagination",
              "✅ Error handling",
              "✅ Transactions",
              "✅ Soft delete (if appropriate)",
              "✅ Monitoring",
              "✅ Automated tests",
              "✅ Secure environment variables",
              "✅ Proper caching strategy",
              "✅ Database indexes",
              "✅ HTTPS"
            ]
          },
          {
            type: "paragraph",
            content: "Treat this checklist as a minimum baseline for production readiness."
          }
        ]
      },
      {
        heading: "Real-World CRUD Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                 Client
                    │
                    ▼
            API Gateway / CDN
                    │
                    ▼
             Route Handler
                    │
        ┌───────────┼────────────┐
        │           │            │
        ▼           ▼            ▼
 Validation   Authentication  Rate Limiting
        │           │            │
        └───────────┼────────────┘
                    ▼
             Authorization
                    │
                    ▼
             Service Layer
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
     Cache Lookup       Repository Layer
          │                   │
          └─────────┬─────────┘
                    ▼
              Prisma / ORM
                    │
                    ▼
                Database
                    │
                    ▼
          Logging & Monitoring
                    │
                    ▼
             HTTP Response`
          },
          {
            type: "paragraph",
            content: "This layered architecture is commonly used in scalable production systems because it separates concerns and makes each component easier to evolve independently."
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
              "Design APIs around RESTful resources.",
              "Keep Route Handlers thin and move business logic into services.",
              "Use validation libraries such as Zod for input validation.",
              "Implement authentication and authorization for protected endpoints.",
              "Prefer soft deletes for important business data.",
              "Use transactions for operations involving multiple writes.",
              "Paginate collection endpoints.",
              "Support filtering, sorting, and search where appropriate.",
              "Add rate limiting to public APIs.",
              "Cache frequently requested, mostly static data.",
              "Use structured logging and centralized monitoring.",
              "Write automated tests for every critical CRUD path.",
              "Version your API if introducing breaking changes."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Putting Business Logic in Route Handlers"
          },
          {
            type: "paragraph",
            content: "This makes code difficult to test and maintain."
          },
          {
            type: "paragraph",
            content: "Returning Large Datasets"
          },
          {
            type: "paragraph",
            content: "Always paginate large collections."
          },
          {
            type: "paragraph",
            content: "Forgetting Authorization Checks"
          },
          {
            type: "paragraph",
            content: "Authentication alone does not prevent unauthorized actions."
          },
          {
            type: "paragraph",
            content: "Using Hard Deletes Everywhere"
          },
          {
            type: "paragraph",
            content: "Important data may need to be recoverable or auditable."
          },
          {
            type: "paragraph",
            content: "Ignoring Concurrency"
          },
          {
            type: "paragraph",
            content: "Multiple users editing the same resource can overwrite each other's changes without optimistic concurrency control."
          },
          {
            type: "paragraph",
            content: "Missing Monitoring"
          },
          {
            type: "paragraph",
            content: "If you cannot observe your API in production, diagnosing failures becomes much harder."
          },
          {
            type: "paragraph",
            content: "Caching Without Invalidation"
          },
          {
            type: "paragraph",
            content: "Stale cache entries can cause users to see outdated information. Always define a clear invalidation strategy."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Many developers believe CRUD APIs are \"simple\" because the operations are only Create, Read, Update, and Delete. In reality, enterprise CRUD systems derive their complexity from everything surrounding those operations: validation, authentication, authorization, transactions, caching, concurrency control, rate limiting, logging, monitoring, testing, deployment, and scalability. The difference between a tutorial project and a production-ready backend is not the CRUD logic itself—it's the engineering practices that ensure the API remains reliable, secure, and maintainable under real-world conditions."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Building a production-ready CRUD API involves far more than implementing basic database operations. A robust architecture separates routing, business logic, and data access into dedicated layers; incorporates structured logging, rate limiting, soft deletes, batch operations, and optimistic concurrency; and applies caching, indexing, and connection pooling for performance. Security is strengthened through validation, authentication, authorization, HTTPS, and secure headers, while comprehensive testing and automated deployment pipelines improve reliability. By following these patterns and best practices, you can build CRUD APIs that are scalable, resilient, secure, and ready to support modern applications in production."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seven Topic : REST API Integration
============================= */
    "nextjs-rest-api-integration": {
    title: "REST API Integration",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications rarely operate in isolation. Instead of building every feature from scratch, they communicate with external services to access data, process payments, send emails, authenticate users, analyze content, and much more. This communication is known as API Integration."
          },
          {
            type: "paragraph",
            content: "Whether your application displays weather information, processes Stripe payments, authenticates users with Google, retrieves GitHub repositories, or fetches products from a CMS, it is integrating with one or more external APIs."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn how to consume REST APIs professionally in Next.js using the built-in fetch() API, understand authentication mechanisms, handle errors and retries, and build reliable integrations that are production-ready."
          }
        ]
      },
      {
        heading: "What is API Integration?",
        blocks: [
          {
            type: "paragraph",
            content: "API Integration is the process of connecting one application with another through an Application Programming Interface (API)."
          },
          {
            type: "paragraph",
            content: "Instead of directly accessing another application's database, your application communicates through HTTP requests and receives structured responses."
          },
          {
            type: "code",
            language: "text",
            content: `Your Next.js App
       │
       ▼
HTTP Request
       │
       ▼
External REST API
       │
       ▼
JSON Response
       │
       ▼
Render Data`
          },
          {
            type: "paragraph",
            content: "The API acts as a contract that defines how two systems exchange information."
          }
        ]
      },
      {
        heading: "Why API Integration Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine you're building an e-commerce website."
          },
          {
            type: "paragraph",
            content: "Should you build your own:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "payment gateway?",
              "email delivery system?",
              "maps platform?",
              "weather forecasting service?",
              "authentication provider?"
            ]
          },
          {
            type: "paragraph",
            content: "Of course not."
          },
          {
            type: "paragraph",
            content: "Instead, you integrate with existing services."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "table",
            headers: ["Feature", "Common API"],
            rows: [
              ["Payments", "Stripe"],
              ["Authentication", "Auth0, Clerk, Firebase"],
              ["Maps", "Google Maps"],
              ["Email", "Resend, SendGrid"],
              ["CMS", "Contentful, Sanity, Strapi"],
              ["Analytics", "Google Analytics"],
              ["AI", "OpenAI APIs"],
              ["File Storage", "Cloudinary, AWS S3"]
            ]
          },
          {
            type: "paragraph",
            content: "This saves months or even years of development effort."
          }
        ]
      },
      {
        heading: "REST API Integration Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A typical REST API integration follows this lifecycle:"
          },
          {
            type: "code",
            language: "text",
            content: `User Action
      │
      ▼
Next.js Component
      │
      ▼
HTTP Request
      │
      ▼
External API
      │
      ▼
JSON Response
      │
      ▼
Data Validation
      │
      ▼
UI Rendering`
          },
          {
            type: "paragraph",
            content: "Every successful integration follows these steps."
          }
        ]
      },
      {
        heading: "Understanding External APIs",
        blocks: [
          {
            type: "paragraph",
            content: "An external API is simply another server that exposes endpoints."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "GET /users",
              "GET /products",
              "POST /orders",
              "DELETE /comments/12"
            ]
          },
          {
            type: "paragraph",
            content: "Your application sends HTTP requests exactly like a browser."
          }
        ]
      },
      {
        heading: "Calling Third-Party APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js primarily uses the built-in fetch() function."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getUsers() {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    return users;

}`
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "fetch()", "→",
              "HTTP Request", "→",
              "Remote Server", "→",
              "JSON Response", "→",
              "JavaScript Object"
            ]
          }
        ]
      },
      {
        heading: "Where Can You Call External APIs?",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js allows API requests in multiple places."
          },
          {
            type: "paragraph",
            content: "Server Components"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await fetch(...);`
          },
          {
            type: "paragraph",
            content: "Best for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SEO",
              "security",
              "performance"
            ]
          },
          {
            type: "paragraph",
            content: "Route Handlers"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

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
              "proxy APIs",
              "hiding secrets",
              "backend aggregation"
            ]
          },
          {
            type: "paragraph",
            content: "Server Actions"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use server"`
          },
          {
            type: "paragraph",
            content: "Ideal for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "mutations",
              "authenticated operations"
            ]
          },
          {
            type: "paragraph",
            content: "Client Components"
          },
          {
            type: "code",
            language: "javascript",
            content: `useEffect(() => {

    fetch(...);

}, []);`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "dashboards",
              "user-specific data",
              "live updates"
            ]
          }
        ]
      },
      {
        heading: "Using fetch()",
        blocks: [
          {
            type: "paragraph",
            content: "The Fetch API is the recommended method in modern Next.js."
          },
          {
            type: "paragraph",
            content: "Basic syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url, options)`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(

    "https://api.example.com/products"

);`
          },
          {
            type: "paragraph",
            content: "Reading JSON"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = await response.json();`
          },
          {
            type: "paragraph",
            content: "Reading Text"
          },
          {
            type: "code",
            language: "javascript",
            content: `const html = await response.text();`
          },
          {
            type: "paragraph",
            content: "Reading Binary Data"
          },
          {
            type: "code",
            language: "javascript",
            content: `const blob = await response.blob();`
          }
        ]
      },
      {
        heading: "Complete GET Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {

    const response = await fetch(

        "https://dummyjson.com/products"
    );

    const products = await response.json();

    return Response.json(products);

}`
          }
        ]
      },
      {
        heading: "POST Request Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `await fetch(

    "https://api.example.com/products",

    {

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            name:"Laptop",

            price:70000

        })

    }

);`
          }
        ]
      },
      {
        heading: "PUT Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `await fetch(

    "/api/products/15",

    {

        method:"PUT",

        body:JSON.stringify({

            price:80000

        })

    }

);`
          }
        ]
      },
      {
        heading: "DELETE Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `await fetch(

    "/api/products/15",

    {

        method:"DELETE"

    }

);`
          }
        ]
      },
      {
        heading: "Axios Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Although Next.js recommends the native fetch() API, many projects also use Axios."
          },
          {
            type: "paragraph",
            content: "Installation"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install axios`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import axios from "axios";

const response = await axios.get(

    "https://api.example.com/products"

);

console.log(response.data);`
          }
        ]
      },
      {
        heading: "fetch() vs Axios",
        blocks: [
          {
            type: "table",
            headers: ["fetch()", "Axios"],
            rows: [
              ["Built into browsers and Node.js", "External library"],
              ["No installation", "Requires installation"],
              ["Native in Next.js", "Popular in many React projects"],
              ["Uses Response object", "Returns parsed data automatically"],
              ["Excellent cache integration", "Limited Next.js cache integration"],
              ["Recommended for App Router", "Often used in legacy projects"]
            ]
          },
          {
            type: "paragraph",
            content: "For modern App Router applications, prefer the built-in fetch() unless you need Axios-specific features or are maintaining an existing codebase."
          }
        ]
      },
      {
        heading: "Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Many APIs require authentication before allowing access."
          },
          {
            type: "paragraph",
            content: "Without authentication:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "401 Unauthorized"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication proves your application's identity."
          }
        ]
      },
      {
        heading: "API Keys",
        blocks: [
          {
            type: "paragraph",
            content: "The simplest authentication method."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "x-api-key:",
              "abc123xyz"
            ]
          },
          {
            type: "paragraph",
            content: "Using fetch:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(

    "https://api.example.com",

    {

        headers:{

            "x-api-key":process.env.API_KEY!

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "Never expose API keys in Client Components. Store them in environment variables and use them only on the server."
          }
        ]
      },
      {
        heading: "Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Store secrets in:"
          },
          {
            type: "output",
            content: [
              ".env.local"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `API_KEY=abcdef123456`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.API_KEY`
          },
          {
            type: "paragraph",
            content: "Never commit secret keys to version control."
          }
        ]
      },
      {
        heading: "OAuth Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Some APIs require users to log in through another provider."
          },
          {
            type: "paragraph",
            content: "Example providers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google",
              "GitHub",
              "Facebook",
              "Microsoft"
            ]
          },
          {
            type: "paragraph",
            content: "Flow"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Google Login", "→",
              "Authorization Code", "→",
              "Access Token", "→",
              "API Request"
            ]
          },
          {
            type: "paragraph",
            content: "OAuth allows applications to access user data without storing passwords."
          }
        ]
      },
      {
        heading: "Bearer Tokens",
        blocks: [
          {
            type: "paragraph",
            content: "Most modern APIs use bearer tokens."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "Authorization:",
              "Bearer eyJhbGci..."
            ]
          },
          {
            type: "paragraph",
            content: "Using fetch"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(

    "https://api.example.com",

    {

        headers:{

            Authorization:\`Bearer \${token}\`

        }

    }

);`
          },
          {
            type: "paragraph",
            content: "Bearer tokens should be stored securely and transmitted only over HTTPS."
          }
        ]
      },
      {
        heading: "Request Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Headers provide metadata about the request."
          },
          {
            type: "paragraph",
            content: "Common headers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Content-Type",
              "Authorization",
              "Accept",
              "User-Agent",
              "Cache-Control",
              "Accept-Language"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `headers:{

    "Content-Type":"application/json",

    Authorization:\`Bearer \${token}\`

}`
          }
        ]
      },
      {
        heading: "Request Body",
        blocks: [
          {
            type: "paragraph",
            content: "POST, PUT, and PATCH requests usually send a body."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name":"Keyboard",
    "price":2500
}`
          },
          {
            type: "paragraph",
            content: "Using fetch"
          },
          {
            type: "code",
            language: "javascript",
            content: `body:JSON.stringify({

    name:"Keyboard",

    price:2500

})`
          },
          {
            type: "paragraph",
            content: "Always serialize JavaScript objects with JSON.stringify() when sending JSON."
          }
        ]
      },
      {
        heading: "Query Parameters",
        blocks: [
          {
            type: "paragraph",
            content: "Query parameters modify API behavior without changing the endpoint."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "/api/products?page=2",
              "/api/products?category=laptops",
              "/api/products?sort=price"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple parameters"
          },
          {
            type: "output",
            content: [
              "/api/products?page=2&limit=20&sort=price"
            ]
          },
          {
            type: "paragraph",
            content: "Building URLs safely"
          },
          {
            type: "code",
            language: "javascript",
            content: `const url = new URL(

    "https://api.example.com/products"

);

url.searchParams.set("page","2");

url.searchParams.set("limit","20");`
          },
          {
            type: "paragraph",
            content: "Using URL and URLSearchParams avoids manual string concatenation and encoding errors."
          }
        ]
      },
      {
        heading: "Error Handling",
        blocks: [
          {
            type: "paragraph",
            content: "External APIs can fail for many reasons."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "invalid request",
              "authentication failure",
              "timeout",
              "server outage",
              "rate limiting"
            ]
          },
          {
            type: "paragraph",
            content: "Always check response.ok."
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(url);

if(!response.ok){

    throw new Error(

        "Request Failed"

    );

}`
          },
          {
            type: "paragraph",
            content: "Never assume every request succeeds."
          }
        ]
      },
      {
        heading: "Handling Different Status Codes",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `switch(response.status){

    case 200:

        break;

    case 401:

        break;

    case 404:

        break;

    case 429:

        break;

    case 500:

        break;

}`
          },
          {
            type: "paragraph",
            content: "Meaningful status handling improves user experience and debugging."
          }
        ]
      },
      {
        heading: "Timeouts",
        blocks: [
          {
            type: "paragraph",
            content: "An API should not keep users waiting forever."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "30 Seconds", "→",
              "Timeout", "→",
              "Cancel Request"
            ]
          },
          {
            type: "paragraph",
            content: "Using AbortController"
          },
          {
            type: "code",
            language: "javascript",
            content: `const controller = new AbortController();

setTimeout(

    ()=>controller.abort(),

    5000

);

await fetch(url,{

    signal:controller.signal

});`
          },
          {
            type: "paragraph",
            content: "Timeouts prevent hung requests and improve resilience."
          }
        ]
      },
      {
        heading: "Retries",
        blocks: [
          {
            type: "paragraph",
            content: "Some failures are temporary."
          },
          {
            type: "paragraph",
            content: "Instead of failing immediately:"
          },
          {
            type: "flow",
            steps: [
              "Attempt 1", "→",
              "Fails", "→",
              "Retry", "→",
              "Success"
            ]
          },
          {
            type: "paragraph",
            content: "Retry scenarios:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "temporary network issues",
              "503 Service Unavailable",
              "transient cloud failures"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid retrying validation errors (4xx) because they usually require user action."
          }
        ]
      },
      {
        heading: "Exponential Backoff",
        blocks: [
          {
            type: "paragraph",
            content: "Professional systems increase the delay between retries."
          },
          {
            type: "flow",
            steps: [
              "Retry 1", "→",
              "1 Second", "→",
              "Retry 2", "→",
              "2 Seconds", "→",
              "Retry 3", "→",
              "4 Seconds"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces pressure on struggling servers."
          }
        ]
      },
      {
        heading: "Parallel Requests",
        blocks: [
          {
            type: "paragraph",
            content: "Independent requests should execute simultaneously."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await fetchUsers();

const posts = await fetchPosts();`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [

    users,

    posts

] = await Promise.all([

    fetchUsers(),

    fetchPosts()

]);`
          },
          {
            type: "paragraph",
            content: "Execution"
          },
          {
            type: "code",
            language: "text",
            content: `Users API

───────┐

        │

Posts API

───────┘

↓

Finish Together`
          },
          {
            type: "paragraph",
            content: "Parallel fetching reduces total response time."
          }
        ]
      },
      {
        heading: "Sequential Requests",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes one request depends on another."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Fetch User", "→",
              "Receive User ID", "→",
              "Fetch Orders", "→",
              "Display Orders"
            ]
          },
          {
            type: "paragraph",
            content: "Code"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await fetchUser();

const orders = await fetchOrders(

    user.id

);`
          },
          {
            type: "paragraph",
            content: "Use sequential requests only when dependencies exist."
          }
        ]
      },
      {
        heading: "Choosing Between Parallel and Sequential",
        blocks: [
          {
            type: "table",
            headers: ["Scenario", "Recommended Pattern"],
            rows: [
              ["Independent APIs", "Parallel (Promise.all)"],
              ["Dependent Requests", "Sequential"],
              ["Dashboard Widgets", "Parallel"],
              ["User → Orders", "Sequential"],
              ["Multiple Product Details", "Parallel"],
              ["Authentication → User Profile", "Sequential"]
            ]
          }
        ]
      },
      {
        heading: "Complete Integration Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `async function getDashboardData() {

    const [

        users,

        posts,

        comments

    ] = await Promise.all([

        fetchUsers(),

        fetchPosts(),

        fetchComments()

    ]);

    return {

        users,

        posts,

        comments

    };

}`
          },
          {
            type: "paragraph",
            content: "This pattern is widely used in dashboards, analytics applications, and admin panels to minimize waiting time."
          }
        ]
      },
      {
        heading: "Real-World Integration Workflow",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `User Opens Dashboard
          │
          ▼
Next.js Server Component
          │
          ▼
Fetch Users API
          │
Fetch Orders API
          │
Fetch Analytics API
          │
      Promise.all()
          │
          ▼
Merge Results
          │
          ▼
Render Dashboard`
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
              "Prefer the built-in fetch() in modern Next.js applications.",
              "Keep API keys and secrets on the server.",
              "Store credentials in environment variables.",
              "Validate responses before using data.",
              "Handle common HTTP status codes explicitly.",
              "Apply reasonable timeouts to external requests.",
              "Retry only transient failures, preferably with exponential backoff.",
              "Use Promise.all() for independent requests.",
              "Use sequential requests only when data dependencies exist.",
              "Avoid exposing third-party credentials to the browser.",
              "Log integration failures for monitoring and debugging."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Exposing API Keys in Client Components"
          },
          {
            type: "paragraph",
            content: "Secrets should never be bundled into browser code."
          },
          {
            type: "paragraph",
            content: "Ignoring Failed Responses"
          },
          {
            type: "paragraph",
            content: "Always check response.ok or the status code."
          },
          {
            type: "paragraph",
            content: "Forgetting Timeouts"
          },
          {
            type: "paragraph",
            content: "A stalled external API can freeze your application if requests never terminate."
          },
          {
            type: "paragraph",
            content: "Retrying Every Error"
          },
          {
            type: "paragraph",
            content: "Do not retry validation or authentication errors automatically."
          },
          {
            type: "paragraph",
            content: "Sequential Requests Without Need"
          },
          {
            type: "paragraph",
            content: "Running independent requests one after another increases latency unnecessarily."
          },
          {
            type: "paragraph",
            content: "Hardcoding URLs"
          },
          {
            type: "paragraph",
            content: "Store base URLs and credentials in configuration or environment variables rather than scattering them throughout your codebase."
          },
          {
            type: "divider"
          }
        ]
      },
      {
        heading: "REST API Integration - Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, you learned the fundamentals of integrating external REST APIs using fetch(), authentication methods, request headers, query parameters, error handling, retries, and parallel requests."
          },
          {
            type: "paragraph",
            content: "However, integrating an external API successfully is only the beginning."
          },
          {
            type: "paragraph",
            content: "Production applications must also answer questions such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How do I securely store API keys?",
              "How do I cache expensive API responses?",
              "What happens if the API goes offline?",
              "How can I integrate payment providers?",
              "How do I connect AI services?",
              "How do I avoid rate limits?",
              "How should I structure integrations in large applications?"
            ]
          },
          {
            type: "paragraph",
            content: "This lesson answers these production-focused questions."
          }
        ]
      },
      {
        heading: "Payment APIs",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common API integrations is payment processing."
          },
          {
            type: "paragraph",
            content: "Instead of handling credit cards yourself, you integrate with trusted payment providers."
          },
          {
            type: "paragraph",
            content: "Popular providers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Stripe",
              "PayPal",
              "Razorpay",
              "Square",
              "Adyen"
            ]
          },
          {
            type: "paragraph",
            content: "Typical payment flow:"
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Checkout Page", "→",
              "Next.js Server", "→",
              "Payment API", "→",
              "Payment Gateway", "→",
              "Bank", "→",
              "Payment Status", "→",
              "Next.js", "→",
              "Success Page"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that the browser never communicates directly with your payment provider using secret credentials. The server acts as a secure intermediary."
          }
        ]
      },
      {
        heading: "Stripe Integration Example",
        blocks: [
          {
            type: "paragraph",
            content: "Creating a payment intent:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import Stripe from "stripe";

const stripe = new Stripe(

    process.env.STRIPE_SECRET_KEY!

);

const paymentIntent = await stripe.paymentIntents.create({

    amount:5000,

    currency:"usd"

});`
          },
          {
            type: "paragraph",
            content: "The server returns only the information the client needs (such as a client secret), never the secret API key itself."
          }
        ]
      },
      {
        heading: "Payment Security",
        blocks: [
          {
            type: "paragraph",
            content: "Always remember:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never expose secret keys",
              "Validate payment amounts on the server",
              "Verify webhook signatures",
              "Never trust client-submitted payment status"
            ]
          },
          {
            type: "paragraph",
            content: "A malicious user can modify frontend code, but they cannot modify your server logic."
          }
        ]
      },
      {
        heading: "Maps APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Maps APIs power:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "store locators",
              "delivery tracking",
              "route planning",
              "nearby search",
              "geocoding"
            ]
          },
          {
            type: "paragraph",
            content: "Popular providers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Maps",
              "Mapbox",
              "OpenStreetMap",
              "HERE Maps"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Enter Address", "→",
              "Geocoding API", "→",
              "Latitude + Longitude", "→",
              "Display Map"
            ]
          },
          {
            type: "paragraph",
            content: "Example request:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(

\`https://maps.googleapis.com/maps/api/geocode/json?address=Delhi&key=\${process.env.GOOGLE_MAP_KEY}\`

);`
          },
          {
            type: "paragraph",
            content: "For client-side maps, restrict browser API keys to approved domains to reduce misuse."
          }
        ]
      },
      {
        heading: "Weather APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Weather applications consume external weather providers."
          },
          {
            type: "paragraph",
            content: "Popular APIs:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "OpenWeather",
              "WeatherAPI",
              "Tomorrow.io",
              "AccuWeather"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Current Location", "→",
              "Weather API", "→",
              "Temperature", "→",
              "Forecast", "→",
              "Render UI"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(

\`https://api.weatherapi.com/v1/current.json?key=\${process.env.WEATHER_KEY}&q=London\`

);`
          },
          {
            type: "paragraph",
            content: "Weather data changes frequently, making it an ideal candidate for caching with periodic revalidation."
          }
        ]
      },
      {
        heading: "AI APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications increasingly integrate AI services."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "chatbots",
              "summarization",
              "translation",
              "code generation",
              "embeddings",
              "image generation"
            ]
          },
          {
            type: "paragraph",
            content: "Popular providers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "OpenAI",
              "Anthropic",
              "Google Gemini",
              "Cohere",
              "Mistral AI"
            ]
          },
          {
            type: "paragraph",
            content: "Example workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Prompt", "→",
              "Next.js Server", "→",
              "AI API", "→",
              "Generated Response", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Server-side integration:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch(

"https://api.openai.com/v1/chat/completions",

{

headers:{

Authorization:\`Bearer \${process.env.OPENAI_KEY}\`

}

}

);`
          },
          {
            type: "paragraph",
            content: "Because AI requests may incur costs, add rate limiting, monitoring, and usage quotas to prevent abuse."
          }
        ]
      },
      {
        heading: "Email APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Email providers handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "verification emails",
              "password resets",
              "invoices",
              "newsletters",
              "notifications"
            ]
          },
          {
            type: "paragraph",
            content: "Popular services:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Resend",
              "SendGrid",
              "Mailgun",
              "Amazon SES",
              "Postmark"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Registers", "→",
              "Server Action", "→",
              "Email API", "→",
              "Inbox"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await resend.emails.send({

to:"user@example.com",

subject:"Welcome!",

text:"Thanks for joining."

});`
          },
          {
            type: "paragraph",
            content: "Queue non-urgent emails in background jobs rather than blocking the user's request."
          }
        ]
      },
      {
        heading: "File Storage APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often need to store:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "profile images",
              "PDFs",
              "videos",
              "invoices",
              "backups"
            ]
          },
          {
            type: "paragraph",
            content: "Cloud storage providers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "AWS S3",
              "Cloudinary",
              "Google Cloud Storage",
              "Azure Blob Storage",
              "Supabase Storage"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "User Upload", "→",
              "Next.js Server", "→",
              "Storage API", "→",
              "File URL", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Never store large user uploads directly inside your project repository or the public folder in production."
          }
        ]
      },
      {
        heading: "Combining Multiple APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications frequently aggregate multiple services."
          },
          {
            type: "paragraph",
            content: "Example dashboard:"
          },
          {
            type: "tree",
            content: `Dashboard

│

├── Weather API

├── Maps API

├── Payment API

├── AI API

└── CMS API`
          },
          {
            type: "paragraph",
            content: "Instead of exposing each service directly to the browser, your backend can orchestrate them and return a single unified response."
          }
        ]
      },
      {
        heading: "Caching External APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Calling external APIs repeatedly is expensive."
          },
          {
            type: "paragraph",
            content: "Without cache:"
          },
          {
            type: "flow",
            steps: [
              "Every User", "→",
              "External API", "→",
              "Slow"
            ]
          },
          {
            type: "paragraph",
            content: "With cache:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Cache", "→",
              "External API", "→",
              "(Only When Needed)"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await fetch(url,{

next:{

revalidate:3600

}

});`
          },
          {
            type: "paragraph",
            content: "This caches the response for one hour before refreshing it."
          }
        ]
      },
      {
        heading: "What Should Be Cached?",
        blocks: [
          {
            type: "paragraph",
            content: "Good candidates:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "weather forecasts",
              "CMS content",
              "product catalogs",
              "exchange rates",
              "public documentation",
              "AI model metadata"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid caching:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "payment confirmations",
              "user profiles",
              "authentication data",
              "shopping carts",
              "rapidly changing personalized information"
            ]
          }
        ]
      },
      {
        heading: "Revalidation",
        blocks: [
          {
            type: "paragraph",
            content: "Cached data eventually becomes outdated."
          },
          {
            type: "paragraph",
            content: "Next.js solves this using revalidation."
          },
          {
            type: "flow",
            steps: [
              "Cached Response", "→",
              "Time Expires", "→",
              "Next Request", "→",
              "Background Refresh", "→",
              "Updated Cache"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetch(url,{

next:{

revalidate:600

}

});`
          },
          {
            type: "paragraph",
            content: "For content that changes unpredictably, pair caching with on-demand revalidation using revalidateTag() or revalidatePath()."
          }
        ]
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "paragraph",
            content: "External APIs introduce new attack surfaces."
          }
        ]
      },
      {
        heading: "Protect Secrets",
        blocks: [
          {
            type: "paragraph",
            content: "Never expose:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "API keys",
              "OAuth secrets",
              "private tokens"
            ]
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Next.js Server", "→",
              "External API"
            ]
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "External API", "→",
              "(API Key Exposed)"
            ]
          }
        ]
      },
      {
        heading: "Validate Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Do not assume external APIs always return valid data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if(!response.ok){

throw new Error(

"External API Failed"

);

}`
          },
          {
            type: "paragraph",
            content: "Also validate the shape of the returned JSON before trusting it."
          }
        ]
      },
      {
        heading: "Prevent Abuse",
        blocks: [
          {
            type: "paragraph",
            content: "Public integrations should include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "rate limiting",
              "authentication",
              "quotas",
              "monitoring"
            ]
          },
          {
            type: "paragraph",
            content: "Especially when connecting to paid APIs."
          }
        ]
      },
      {
        heading: "HTTPS",
        blocks: [
          {
            type: "paragraph",
            content: "Always communicate with external services over HTTPS to protect data in transit."
          }
        ]
      },
      {
        heading: "Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Configuration belongs outside source code."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              ".env.local"
            ]
          },
          {
            type: "code",
            language: "text",
            content: `OPENAI_API_KEY=...

STRIPE_SECRET_KEY=...

MAPS_API_KEY=...`
          },
          {
            type: "paragraph",
            content: "Access them:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.OPENAI_API_KEY`
          },
          {
            type: "paragraph",
            content: "Guidelines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never commit .env.local",
              "Rotate compromised keys immediately",
              "Use separate credentials for development, staging, and production"
            ]
          }
        ]
      },
      {
        heading: "Rate Limiting",
        blocks: [
          {
            type: "paragraph",
            content: "Many APIs enforce quotas."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "100 Requests", "→",
              "Per Minute"
            ]
          },
          {
            type: "paragraph",
            content: "If exceeded:"
          },
          {
            type: "output",
            content: [
              "429 Too Many Requests"
            ]
          },
          {
            type: "paragraph",
            content: "Strategies:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "exponential backoff",
              "caching",
              "request deduplication",
              "batching",
              "queueing"
            ]
          },
          {
            type: "paragraph",
            content: "Respect the provider's limits to avoid service interruptions."
          }
        ]
      },
      {
        heading: "Monitoring",
        blocks: [
          {
            type: "paragraph",
            content: "API integrations should be observable."
          },
          {
            type: "paragraph",
            content: "Monitor:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "response times",
              "failure rates",
              "timeout frequency",
              "request volume",
              "API quotas",
              "latency spikes"
            ]
          },
          {
            type: "paragraph",
            content: "Example workflow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "External API", "→",
              "Log Metrics", "→",
              "Monitoring Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Useful platforms include OpenTelemetry, Datadog, Grafana, New Relic, and cloud-native monitoring services."
          }
        ]
      },
      {
        heading: "Performance Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "External APIs often become the slowest part of an application."
          }
        ]
      },
      {
        heading: "Use Parallel Requests",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Users API", "→",
              "Orders API", "→",
              "Weather API"
            ]
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "text",
            content: `Users API

────┐

Orders API

────┤

Weather API

────┘

↓

Promise.all()`
          }
        ]
      },
      {
        heading: "Cache Expensive Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid repeated requests for identical data."
          }
        ]
      },
      {
        heading: "Compress Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Enable gzip or Brotli when supported by the provider."
          }
        ]
      },
      {
        heading: "Reduce Payload Size",
        blocks: [
          {
            type: "paragraph",
            content: "Request only the fields you actually need."
          },
          {
            type: "paragraph",
            content: "Many APIs support field selection or partial responses."
          }
        ]
      },
      {
        heading: "Timeout Long Requests",
        blocks: [
          {
            type: "paragraph",
            content: "Never wait indefinitely for an external service."
          }
        ]
      },
      {
        heading: "Use Regional Endpoints",
        blocks: [
          {
            type: "paragraph",
            content: "Choose API regions closest to your deployment to reduce network latency when providers support regional infrastructure."
          }
        ]
      },
      {
        heading: "Production Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Large systems isolate external API logic from UI components."
          },
          {
            type: "code",
            language: "text",
            content: `                Browser
                    │
                    ▼
          Server Component
                    │
                    ▼
         Integration Service
                    │
        ┌───────────┼────────────┐
        │           │            │
        ▼           ▼            ▼
 Payment API   Weather API   AI API
        │           │            │
        └───────────┼────────────┘
                    ▼
          Normalize Responses
                    │
                    ▼
               Business Logic
                    │
                    ▼
               Render UI`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "reusable integrations",
              "centralized authentication",
              "easier testing",
              "consistent error handling",
              "simpler provider replacement"
            ]
          }
        ]
      },
      {
        heading: "API Adapter Pattern",
        blocks: [
          {
            type: "paragraph",
            content: "One challenge often overlooked in basic tutorials is provider lock-in."
          },
          {
            type: "paragraph",
            content: "Instead of calling provider SDKs throughout your application:"
          },
          {
            type: "flow",
            steps: [
              "Product Page", "→",
              "Stripe SDK"
            ]
          },
          {
            type: "paragraph",
            content: "Create an abstraction layer:"
          },
          {
            type: "flow",
            steps: [
              "Product Page", "→",
              "PaymentService", "→",
              "Stripe Adapter"
            ]
          },
          {
            type: "paragraph",
            content: "If you later switch to another payment provider, only the adapter changes while the rest of your application remains unaffected."
          },
          {
            type: "paragraph",
            content: "This Adapter Pattern is widely used in enterprise systems because it minimizes coupling between business logic and third-party services."
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
              "Prefer server-side API integrations for secure credentials.",
              "Store secrets in environment variables.",
              "Validate all external responses.",
              "Handle timeouts and retries gracefully.",
              "Cache stable data and revalidate when appropriate.",
              "Use Promise.all() for independent requests.",
              "Respect API rate limits.",
              "Monitor latency, failures, and quotas.",
              "Build adapter or service layers to isolate third-party integrations.",
              "Log failures with sufficient context for debugging.",
              "Keep provider-specific code out of UI components."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Exposing Secret Keys"
          },
          {
            type: "paragraph",
            content: "Secrets should never be bundled into browser code."
          },
          {
            type: "paragraph",
            content: "Calling Paid APIs Repeatedly"
          },
          {
            type: "paragraph",
            content: "Cache responses whenever possible to reduce cost and latency."
          },
          {
            type: "paragraph",
            content: "Ignoring Rate Limits"
          },
          {
            type: "paragraph",
            content: "Uncontrolled traffic can quickly exhaust API quotas."
          },
          {
            type: "paragraph",
            content: "Trusting External Data Blindly"
          },
          {
            type: "paragraph",
            content: "Validate responses before using them."
          },
          {
            type: "paragraph",
            content: "Hardcoding Provider Logic"
          },
          {
            type: "paragraph",
            content: "Wrapping provider-specific code in service classes makes migrations much easier."
          },
          {
            type: "paragraph",
            content: "Sequential Independent Requests"
          },
          {
            type: "paragraph",
            content: "Run unrelated API calls in parallel to improve response times."
          },
          {
            type: "paragraph",
            content: "Missing Monitoring"
          },
          {
            type: "paragraph",
            content: "Without observability, diagnosing intermittent failures becomes extremely difficult."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A mature application rarely depends on just one external API. It may integrate payments, authentication, email delivery, cloud storage, AI services, analytics, and multiple internal microservices simultaneously. The key to managing this complexity is to treat integrations as part of your backend architecture rather than isolated fetch() calls. By introducing dedicated integration services, caching, monitoring, retries, security controls, and provider abstraction layers, you create a system that remains maintainable, resilient, and adaptable even as external services evolve."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Professional REST API integration extends far beyond making HTTP requests. In this lesson, you explored integrating common external services such as payment gateways, maps, weather providers, AI platforms, email services, and cloud storage. You learned how to secure credentials with environment variables, optimize performance through caching and revalidation, implement monitoring, rate limiting, and retries, and structure integrations using dedicated service layers and the Adapter Pattern. By applying these production-ready practices, your Next.js applications can communicate with external systems securely, efficiently, and reliably while remaining scalable and easy to maintain."
          }
        ]
      }
    ]
  },
};

export default nextjsApisBackendDevelopment;