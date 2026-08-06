const nodejsHttpServer = {

/* ===========================
    First Topic : HTTP Module
============================= */
    "nodejs-http-module": {
    title: "HTTP Module",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "Node.js is widely known for building fast and scalable web servers. But have you ever wondered how Node.js communicates with browsers before frameworks like Express or Fastify come into the picture?"
          },
          {
            type: "paragraph",
            content: "The answer is the HTTP module."
          },
          {
            type: "paragraph",
            content:
              "The HTTP module is one of Node.js's most important built-in modules. It provides everything needed to create web servers, receive requests from clients, and send responses back over the HTTP protocol."
          },
          {
            type: "paragraph",
            content:
              "In fact, every popular Node.js web framework—including Express, NestJS, Fastify, Koa, Hapi, and others—is ultimately built on top of Node.js's HTTP module."
          },
          {
            type: "paragraph",
            content:
              "Understanding this module helps you understand what actually happens behind the scenes whenever a user visits a website or an API receives a request."
          }
        ]
      },

      {
        heading: "What is the HTTP Module?",
        blocks: [
          {
            type: "paragraph",
            content:
              "The HTTP module is a built-in Node.js module that allows applications to communicate using the HyperText Transfer Protocol (HTTP)."
          },
          {
            type: "paragraph",
            content: "It enables your application to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create HTTP servers",
              "Receive incoming requests",
              "Send responses",
              "Handle headers",
              "Manage connections",
              "Build REST APIs",
              "Serve websites",
              "Communicate with other servers"
            ]
          },
          {
            type: "paragraph",
            content:
              "Unlike third-party packages, the HTTP module comes bundled with Node.js, so there is nothing to install."
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";`
          },
          {
            type: "paragraph",
            content: "or in CommonJS:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const http = require("node:http");`
          }
        ]
      },

      {
        heading: "Why Does Node.js Provide an HTTP Module?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Node.js was designed primarily for network applications."
          },
          {
            type: "paragraph",
            content:
              "Since nearly every web application communicates using HTTP, Node.js includes its own implementation so developers can build servers directly without external libraries."
          },
          {
            type: "paragraph",
            content:
              "Instead of relying on Apache, IIS, or another web server, Node.js applications can become the web server themselves."
          },
          {
            type: "paragraph",
            content: "This provides several benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Complete control over requests",
              "High performance",
              "Event-driven architecture",
              "Non-blocking I/O",
              "Lightweight server implementation",
              "Excellent scalability"
            ]
          }
        ]
      },

      {
        heading: "What is HTTP?",
        blocks: [
          {
            type: "paragraph",
            content:
              "HTTP stands for HyperText Transfer Protocol."
          },
          {
            type: "paragraph",
            content: "It is the communication protocol used between:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browser ↔ Web Server",
              "Mobile App ↔ API",
              "Frontend ↔ Backend",
              "Server ↔ Server"
            ]
          },
          {
            type: "paragraph",
            content: "Whenever you visit:"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com`
          },
          {
            type: "paragraph",
            content:
              "your browser sends an HTTP request."
          },
          {
            type: "paragraph",
            content:
              "The server processes it and sends an HTTP response."
          },
          {
            type: "paragraph",
            content:
              "The HTTP module allows Node.js to perform this communication."
          }
        ]
      },

      {
        heading: "Understanding Client-Server Architecture",
        blocks: [
          {
            type: "paragraph",
            content:
              "Before learning the HTTP module, it's important to understand the client-server model."
          },
          {
            type: "code",
            language: "text",
            content: `Client                     Server

Browser  ------------->  Node.js
          HTTP Request

Browser  <-------------  Node.js
         HTTP Response`
          },
          {
            type: "paragraph",
            content:
              "The client initiates communication."
          },
          {
            type: "paragraph",
            content:
              "The server waits for incoming requests."
          },
          {
            type: "paragraph",
            content:
              "Node.js applications using the HTTP module usually act as the server."
          },
          {
            type: "paragraph",
            content: "Examples of clients include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Chrome",
              "Firefox",
              "Safari",
              "Mobile apps",
              "React applications",
              "Postman",
              "curl"
            ]
          }
        ]
      },

      {
        heading: "What Happens When You Open a Website?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you visit:"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com`
          },
          {
            type: "paragraph",
            content:
              "Several things happen behind the scenes."
          },
          {
            type: "paragraph",
            content: "⇶ Step 1"
          },
          {
            type: "paragraph",
            content:
              "The browser finds the server's IP address."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 2"
          },
          {
            type: "paragraph",
            content:
              "A connection is established."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 3"
          },
          {
            type: "paragraph",
            content:
              "The browser sends an HTTP request."
          },
          {
            type: "code",
            language: "text",
            content: `GET /`
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 4"
          },
          {
            type: "paragraph",
            content:
              "Node.js receives the request."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 5"
          },
          {
            type: "paragraph",
            content:
              "Your application processes it."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 6"
          },
          {
            type: "paragraph",
            content:
              "A response is generated."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 7"
          },
          {
            type: "paragraph",
            content:
              "The browser receives HTML."
          },
          {
            type: "code",
            language: "text",
            content: `↓`
          },
          {
            type: "paragraph",
            content: "⇶ Step 8"
          },
          {
            type: "paragraph",
            content:
              "The webpage is displayed."
          },
          {
            type: "paragraph",
            content:
              "The HTTP module is responsible for handling Steps 4–6."
          }
        ]
      },

      {
        heading: "Importing the HTTP Module",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern Node.js recommends using the `node:` prefix."
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";`
          },
          {
            type: "paragraph",
            content: "CommonJS:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const http = require("http");`
          },
          {
            type: "paragraph",
            content: "Both work."
          },
          {
            type: "paragraph",
            content:
              "However, the `node:` prefix clearly indicates that the module is a built-in Node.js module rather than an installed package."
          }
        ]
      },

      {
        heading: "Why Use the `node:` Prefix?",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "http";`
          },
          {
            type: "paragraph",
            content: "prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";`
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Explicitly indicates a core module",
              "Prevents confusion with npm packages",
              "Improves readability",
              "Recommended by Node.js documentation"
            ]
          },
          {
            type: "paragraph",
            content:
              "The behavior remains exactly the same."
          }
        ]
      },

      {
        heading: "What Does the HTTP Module Provide?",
        blocks: [
          {
            type: "paragraph",
            content:
              "The module exposes many classes and functions."
          },
          {
            type: "paragraph",
            content:
              "Some important ones include:"
          },
          {
            type: "table",
            headers: ["Feature", "Purpose"],
            rows: [
              ["`createServer()`", "Creates an HTTP server"],
              ["`request()`", "Makes outgoing HTTP requests"],
              ["`get()`", "Sends GET requests"],
              ["`IncomingMessage`", "Represents client requests"],
              ["`ServerResponse`", "Represents server responses"],
              ["`Agent`", "Manages connection pooling"],
              ["`STATUS_CODES`", "Common HTTP status messages"],
              ["`METHODS`", "Supported HTTP methods"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Most beginners primarily use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`createServer()`",
              "`IncomingMessage`",
              "`ServerResponse`"
            ]
          }
        ]
      },

      {
        heading: "Creating an HTTP Server (Preview)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Creating a server is surprisingly simple."
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "Don't worry if some parts are unfamiliar."
          },
          {
            type: "paragraph",
            content:
              "The next lesson will explain server creation in detail."
          },
          {
            type: "paragraph",
            content:
              "For now, notice that everything starts with the HTTP module."
          }
        ]
      },

      {
        heading: "The Request-Response Model",
        blocks: [
          {
            type: "paragraph",
            content:
              "The HTTP module revolves around one important concept:"
          },
          {
            type: "quote",
            content: "Every request receives exactly one response."
          },
          {
            type: "paragraph",
            content:
              "Whenever a client sends a request,"
          },
          {
            type: "code",
            language: "text",
            content: `Browser
   │
   │ Request
   ▼
Node.js Server
   │
   │ Process
   ▼
Response`
          },
          {
            type: "paragraph",
            content:
              "the server must eventually send a response."
          },
          {
            type: "paragraph",
            content:
              "If it doesn't, the browser waits until the request times out."
          }
        ]
      },

      {
        heading: "The HTTP Server Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content:
              "A typical request handled by Node.js follows this sequence:"
          },
          {
            type: "code",
            language: "text",
            content: `Server Starts

↓

Waits for Requests

↓

Request Arrives

↓

Node.js Executes Callback

↓

Application Logic Runs

↓

Response Created

↓

Response Sent

↓

Server Waits Again`
          },
          {
            type: "paragraph",
            content:
              "Notice that the server does not stop after serving one request. It continues listening for new requests until it is shut down."
          }
        ]
      },

      {
        heading: "Understanding `createServer()`",
        blocks: [
          {
            type: "paragraph",
            content:
              "The most commonly used function is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `http.createServer()`
          },
          {
            type: "paragraph",
            content:
              "Its job is to create an HTTP server."
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

});`
          },
          {
            type: "paragraph",
            content:
              "The callback runs once for every incoming request."
          },
          {
            type: "paragraph",
            content:
              "If 100 users access your website simultaneously, this callback executes 100 times—once per request."
          },
          {
            type: "paragraph",
            content:
              "The callback receives two important objects:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Request object (`req`)",
              "Response object (`res`)"
            ]
          },
          {
            type: "paragraph",
            content:
              "These will be covered in upcoming lessons."
          }
        ]
      },

      {
        heading: "Request Object (Preview)",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request object contains information sent by the client."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "URL",
              "HTTP method",
              "Headers",
              "Cookies",
              "Body (for POST/PUT requests)",
              "Client information"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.on("request", (req) => {
    console.log(req.url);
});`
          }
        ]
      },

      {
        heading: "Response Object (Preview)",
        blocks: [
          {
            type: "paragraph",
            content:
              "The response object is used to send data back to the client."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.write("Hello");
res.end();`
          },
          {
            type: "paragraph",
            content: "or simply:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello World");`
          },
          {
            type: "paragraph",
            content:
              "Without calling `end()`, the client keeps waiting because the response is never completed."
          }
        ]
      },

      {
        heading: "HTTP is Stateless",
        blocks: [
          {
            type: "paragraph",
            content:
              "An important characteristic of HTTP is that it is stateless."
          },
          {
            type: "paragraph",
            content:
              "Each request is independent."
          },
          {
            type: "code",
            language: "text",
            content: `Request 1

(No memory)

Request 2

(No memory)

Request 3`
          },
          {
            type: "paragraph",
            content:
              "The server does not automatically remember previous requests."
          },
          {
            type: "paragraph",
            content: "Applications use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cookies",
              "Sessions",
              "JWT tokens",
              "Databases"
            ]
          },
          {
            type: "paragraph",
            content:
              "to maintain user state across multiple requests."
          }
        ]
      },

      {
        heading: "HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every request has a method indicating what the client wants to do."
          },
          {
            type: "paragraph",
            content: "Common methods include:"
          },
          {
            type: "table",
            headers: ["Method", "Purpose"],
            rows: [
              ["GET", "Retrieve data"],
              ["POST", "Create data"],
              ["PUT", "Replace existing data"],
              ["PATCH", "Update part of existing data"],
              ["DELETE", "Remove data"],
              ["HEAD", "Retrieve headers only"],
              ["OPTIONS", "Discover supported methods"]
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content:
              "asks the server to retrieve users, while"
          },
          {
            type: "code",
            language: "text",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content:
              "requests the creation of a new user."
          }
        ]
      },

      {
        heading: "HTTP Headers",
        blocks: [
          {
            type: "paragraph",
            content:
              "Requests and responses also include headers."
          },
          {
            type: "paragraph",
            content:
              "Headers contain metadata about the communication."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Content-Type",
              "Content-Length",
              "Authorization",
              "Accept",
              "Host",
              "User-Agent"
            ]
          },
          {
            type: "paragraph",
            content:
              "Headers help the client and server understand how the transmitted data should be interpreted."
          }
        ]
      },

      {
        heading: "HTTP Module vs HTTPS Module",
        blocks: [
          {
            type: "paragraph",
            content: "Node.js provides both:"
          },
          {
            type: "code",
            language: "text",
            content: `node:http`
          },
          {
            type: "paragraph",
            content: "and"
          },
          {
            type: "code",
            language: "text",
            content: `node:https`
          },
          {
            type: "paragraph",
            content:
              "The HTTP module sends data without encryption."
          },
          {
            type: "paragraph",
            content:
              "The HTTPS module encrypts communication using TLS/SSL, making it suitable for production websites and APIs."
          },
          {
            type: "table",
            headers: ["HTTP", "HTTPS"],
            rows: [
              ["Not encrypted", "Encrypted"],
              ["Port 80", "Port 443"],
              ["Less secure", "Secure"],
              ["Development/testing", "Production"]
            ]
          },
          {
            type: "paragraph",
            content:
              "The APIs are nearly identical, but HTTPS requires certificates."
          }
        ]
      },

      {
        heading: "Why Frameworks Like Express Exist",
        blocks: [
          {
            type: "paragraph",
            content:
              "You might wonder:"
          },
          {
            type: "quote",
            content: "If Node.js already has an HTTP module, why use Express?"
          },
          {
            type: "paragraph",
            content:
              "The HTTP module provides low-level building blocks. While powerful, many common tasks require writing repetitive code."
          },
          {
            type: "paragraph",
            content: "Frameworks like Express simplify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Routing",
              "Middleware",
              "Request parsing",
              "Response helpers",
              "Static file serving",
              "Error handling",
              "Cookie management",
              "Sessions"
            ]
          },
          {
            type: "paragraph",
            content:
              "For example, with the HTTP module you manually inspect `req.url` and `req.method` to determine which code should run. Express abstracts this into cleaner route definitions."
          },
          {
            type: "paragraph",
            content:
              "Even so, Express ultimately creates and works on top of a Node.js HTTP server. Understanding the HTTP module makes it easier to understand what frameworks are doing behind the scenes."
          }
        ]
      },

      {
        heading: "Common Use Cases of the HTTP Module",
        blocks: [
          {
            type: "paragraph",
            content:
              "The HTTP module is used to build:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Web servers",
              "REST APIs",
              "GraphQL servers",
              "Authentication servers",
              "Reverse proxies",
              "Microservices",
              "File servers",
              "Development servers",
              "Webhook receivers",
              "Internal backend services"
            ]
          },
          {
            type: "paragraph",
            content:
              "Even if you later adopt a framework, the underlying communication still relies on the concepts introduced by this module."
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
                question: "Forgetting to call `res.end()`",
                answer:
                  "Without calling `res.end()`, the client waits indefinitely because the response is never completed."
              },
              {
                question: "Assuming one server instance is created per request",
                answer:
                  "In reality, a single server handles many requests over its lifetime."
              },
              {
                question: "Performing long-running synchronous operations inside request handlers",
                answer:
                  "This blocks the event loop and delays other requests, reducing the application's throughput."
              },
              {
                question: "Confusing the `http` module with higher-level frameworks",
                answer:
                  "The `http` module is for servers and HTTP communication, while Express and similar frameworks provide higher-level abstractions built on top of it."
              },
              {
                question: "Treating HTTP as stateful",
                answer:
                  "HTTP is stateless by design. You must implement sessions, cookies, or tokens to maintain user state across requests."
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
              "Use the `node:http` import in modern Node.js projects.",
              "Prefer asynchronous APIs to keep the event loop responsive.",
              "Always send exactly one response for every request.",
              "Set appropriate status codes and response headers.",
              "Validate incoming request data before processing it.",
              "Handle errors gracefully instead of allowing the server to crash.",
              "Use HTTPS for production applications that handle real users or sensitive data.",
              "Move to a framework like Express or Fastify for large applications, but understand the HTTP module first—it provides the foundation on which those frameworks are built."
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
              "The HTTP module is a built-in Node.js core module for creating HTTP servers and clients.",
              "It enables applications to receive requests and send responses over the HTTP protocol.",
              "Node.js applications act as servers in a client-server architecture.",
              "The heart of the module is the request-response model, where every request must receive a response.",
              "`createServer()` creates an HTTP server and invokes a callback for each incoming request.",
              "The callback receives a request object and a response object, which you'll explore in the next lessons.",
              "Modern Node.js recommends importing the module using `node:http`.",
              "Frameworks such as Express and Fastify build on top of the HTTP module rather than replacing it. Understanding this module gives you a deeper understanding of how Node.js web applications actually work."
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
              "The HTTP module is one of the most fundamental and important built-in modules in Node.js. It provides the raw building blocks for creating HTTP servers and clients, handling incoming requests, and sending responses. Every major Node.js web framework—including Express, Fastify, Koa, NestJS, and Hapi—is built on top of the HTTP module, making it essential knowledge for any backend developer."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned what the HTTP module is, why Node.js provides it, how the client-server model works, what happens when a website is loaded, the request-response lifecycle, the stateless nature of HTTP, HTTP methods and headers, and the difference between the HTTP and HTTPS modules. You also explored why frameworks like Express exist and how they build on top of the HTTP module rather than replacing it."
          },
          {
            type: "paragraph",
            content:
              "In the next lesson, you'll dive deeper into creating HTTP servers and working with requests and responses using the HTTP module directly. Understanding these fundamentals will make it much easier to work with any Node.js web framework and debug issues that arise in production applications."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misconceptions about the HTTP module is that it's just for building REST APIs. In reality, the HTTP module is used for every type of network communication that uses the HTTP protocol: serving web pages, handling form submissions, processing file uploads, streaming video, proxying requests, receiving webhooks, and even implementing custom protocols on top of HTTP.\n\nAnother subtle point is that understanding the HTTP module helps you understand why certain behaviors occur in higher-level frameworks. For example, why middleware order matters, why `res.end()` must be called, why `req.url` includes query parameters, and why the `Content-Length` header is important. These details are abstracted away by frameworks, but they still exist at the HTTP layer.\n\nThinking of the HTTP module as the foundation rather than the final tool is the key insight. Frameworks make development faster, but the HTTP module is what makes Node.js a viable platform for building web applications at scale. Knowing both the foundation and the tools built on top of it makes you a more effective and versatile developer."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Creating Web Server
============================= */
    "nodejs-creating-web-server": {
    title: "Creating Web Server",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "In the previous lesson, you learned what the Node.js HTTP module is and how it forms the foundation of every Node.js web application."
          },
          {
            type: "paragraph",
            content:
              "Now it's time to use that knowledge to build something useful—your first web server."
          },
          {
            type: "paragraph",
            content:
              "A web server is simply a program that listens for HTTP requests from clients (such as browsers or mobile apps), processes those requests, and sends appropriate responses."
          },
          {
            type: "paragraph",
            content:
              "The exciting part is that with Node.js, you don't need Apache, Nginx, or IIS to start learning server development. Your JavaScript application itself becomes the web server."
          },
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you'll understand exactly how a Node.js server starts, listens for requests, handles multiple clients, and shuts down gracefully."
          }
        ]
      },

      {
        heading: "What is a Web Server?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A web server is software that waits for incoming HTTP requests and sends HTTP responses back to clients."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser
   │
   │ GET /
   ▼
Node.js Server
   │
   │ Processes request
   ▼
Returns HTML`
          },
          {
            type: "paragraph",
            content: "Whenever someone visits:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          },
          {
            type: "paragraph",
            content:
              "their browser sends an HTTP request."
          },
          {
            type: "paragraph",
            content:
              "The server receives it, executes your JavaScript code, and sends back a response."
          }
        ]
      },

      {
        heading: "How a Node.js Web Server Works",
        blocks: [
          {
            type: "paragraph",
            content:
              "A Node.js server follows a continuous cycle."
          },
          {
            type: "code",
            language: "text",
            content: `Start Server
      │
      ▼
Listen on Port
      │
      ▼
Wait for Requests
      │
      ▼
Request Arrives
      │
      ▼
Execute Callback
      │
      ▼
Generate Response
      │
      ▼
Send Response
      │
      ▼
Wait for Next Request`
          },
          {
            type: "paragraph",
            content:
              "Notice something important:"
          },
          {
            type: "paragraph",
            content:
              "The server does not stop after serving one request."
          },
          {
            type: "paragraph",
            content:
              "It keeps running until you explicitly stop it."
          }
        ]
      },

      {
        heading: "Creating a Web Server",
        blocks: [
          {
            type: "paragraph",
            content:
              "The HTTP module provides a function called:"
          },
          {
            type: "code",
            language: "javascript",
            content: `http.createServer()`
          },
          {
            type: "paragraph",
            content:
              "Its job is to create an HTTP server."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello, World!");
});`
          },
          {
            type: "paragraph",
            content:
              "Let's understand every part."
          }
        ]
      },

      {
        heading: "Understanding `http.createServer()`",
        blocks: [
          {
            type: "paragraph",
            content: "The syntax is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `http.createServer(requestListener)`
          },
          {
            type: "paragraph",
            content:
              "The function accepts another function called the request listener."
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

});`
          },
          {
            type: "paragraph",
            content:
              "This callback automatically executes whenever a client sends an HTTP request."
          },
          {
            type: "paragraph",
            content: "Think of it as saying:"
          },
          {
            type: "quote",
            content: "Whenever someone visits my server, run this function."
          }
        ]
      },

      {
        heading: "What Does `createServer()` Return?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many beginners assume `createServer()` immediately starts the server."
          },
          {
            type: "paragraph",
            content:
              "It doesn't."
          },
          {
            type: "paragraph",
            content:
              "Instead, it returns an instance of an HTTP server."
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer();`
          },
          {
            type: "paragraph",
            content:
              "The server exists in memory but is not yet accepting requests."
          },
          {
            type: "paragraph",
            content:
              "To begin accepting connections, you must call:"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(...)`
          }
        ]
      },

      {
        heading: "The Request Listener Callback",
        blocks: [
          {
            type: "paragraph",
            content:
              "The callback receives two objects:"
          },
          {
            type: "code",
            language: "javascript",
            content: `(req, res)`
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

});`
          },
          {
            type: "paragraph",
            content: "They represent:"
          },
          {
            type: "table",
            headers: ["Object", "Purpose"],
            rows: [
              ["`req`", "Information about the incoming request"],
              ["`res`", "Used to send a response back"]
            ]
          },
          {
            type: "paragraph",
            content:
              "You'll study both objects in detail in upcoming lessons."
          },
          {
            type: "paragraph",
            content: "For now, remember:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser

↓

Request

↓

req

↓

Your Code

↓

res

↓

Browser`
          }
        ]
      },

      {
        heading: "Sending the First Response",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every request must eventually receive a response."
          },
          {
            type: "paragraph",
            content:
              "The simplest response is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello World");`
          },
          {
            type: "paragraph",
            content: "Complete example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello World");
});`
          },
          {
            type: "paragraph",
            content:
              "When the browser visits the server, it receives:"
          },
          {
            type: "output",
            content: ["Hello World"]
          }
        ]
      },

      {
        heading: "Why `res.end()` is Important",
        blocks: [
          {
            type: "paragraph",
            content:
              "`res.end()` performs two tasks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sends data to the client.",
              "Closes the response."
            ]
          },
          {
            type: "paragraph",
            content: "Without it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

});`
          },
          {
            type: "paragraph",
            content:
              "the browser waits forever because no response is ever completed."
          },
          {
            type: "paragraph",
            content:
              "Always ensure every request ends with a response."
          }
        ]
      },

      {
        heading: "Starting the Server with `listen()`",
        blocks: [
          {
            type: "paragraph",
            content:
              "Creating the server isn't enough."
          },
          {
            type: "paragraph",
            content:
              "You must tell it where to listen."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "Now the server starts accepting connections."
          },
          {
            type: "paragraph",
            content: "Complete example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Server Running");
});

server.listen(3000);`
          }
        ]
      },

      {
        heading: "Understanding `listen()`",
        blocks: [
          {
            type: "paragraph",
            content: "General syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(port);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(5000);`
          },
          {
            type: "paragraph",
            content:
              "Now the application listens on:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:5000`
          }
        ]
      },

      {
        heading: "Listening with a Callback",
        blocks: [
          {
            type: "paragraph",
            content:
              "Usually you'll provide a callback."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000, () => {
    console.log("Server started");
});`
          },
          {
            type: "paragraph",
            content:
              "The callback executes once the server has successfully started."
          },
          {
            type: "paragraph",
            content: "Console output:"
          },
          {
            type: "output",
            content: ["Server started"]
          }
        ]
      },

      {
        heading: "Understanding Ports",
        blocks: [
          {
            type: "paragraph",
            content:
              "A computer can run many network applications simultaneously."
          },
          {
            type: "paragraph",
            content:
              "Ports allow the operating system to distinguish between them."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "table",
            headers: ["Port", "Service"],
            rows: [
              ["80", "HTTP"],
              ["443", "HTTPS"],
              ["21", "FTP"],
              ["22", "SSH"],
              ["25", "SMTP"],
              ["3000", "Common Node.js development"],
              ["5173", "Vite Development Server"]
            ]
          },
          {
            type: "paragraph",
            content: "When you write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "you're telling Node.js:"
          },
          {
            type: "quote",
            content: "Listen for HTTP requests arriving on port **3000**."
          }
        ]
      },

      {
        heading: "What is `localhost`?",
        blocks: [
          {
            type: "paragraph",
            content:
              "When testing locally, you'll often visit:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          },
          {
            type: "paragraph",
            content:
              "`localhost` refers to your own computer."
          },
          {
            type: "paragraph",
            content: "It resolves to:"
          },
          {
            type: "code",
            language: "text",
            content: `127.0.0.1`
          },
          {
            type: "paragraph",
            content:
              "which is called the **loopback address**."
          },
          {
            type: "paragraph",
            content:
              "Instead of communicating over the internet, your browser talks directly to your own machine."
          },
          {
            type: "paragraph",
            content: "These are equivalent:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          },
          {
            type: "code",
            language: "text",
            content: `http://127.0.0.1:3000`
          }
        ]
      },

      {
        heading: "Host and Port Together",
        blocks: [
          {
            type: "paragraph",
            content:
              "A server is identified by:"
          },
          {
            type: "code",
            language: "text",
            content: `Host + Port`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `localhost:3000`
          },
          {
            type: "code",
            language: "text",
            content: `example.com:80`
          },
          {
            type: "code",
            language: "text",
            content: `api.example.com:443`
          }
        ]
      },

      {
        heading: "Specifying a Host",
        blocks: [
          {
            type: "paragraph",
            content:
              "You can explicitly specify the host."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000, "localhost");`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000, "127.0.0.1");`
          },
          {
            type: "paragraph",
            content:
              "For local development, omitting the host is usually sufficient."
          }
        ]
      },

      {
        heading: "What Happens Internally?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you start the server."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "code",
            language: "text",
            content: `Node.js

↓

Opens Port 3000

↓

Registers Event Loop Listener

↓

Waits for Connections

↓

Browser Connects

↓

Callback Executes

↓

Response Sent

↓

Wait Again`
          },
          {
            type: "paragraph",
            content:
              "Notice that the server spends most of its time **waiting**, not actively executing code. This event-driven model is one reason Node.js scales well for I/O-heavy workloads."
          }
        ]
      },

      {
        heading: "Handling Multiple Requests",
        blocks: [
          {
            type: "paragraph",
            content:
              "A single server can process many requests over its lifetime."
          },
          {
            type: "code",
            language: "text",
            content: `Client A

↓

Server

↓

Client B

↓

Server

↓

Client C

↓

Server`
          },
          {
            type: "paragraph",
            content:
              "The same request listener callback runs once for every request."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {
    console.log("Request received");
    res.end("Done");
});`
          },
          {
            type: "paragraph",
            content:
              "If 100 users visit your application, you'll see:"
          },
          {
            type: "output",
            content: [
              "Request received",
              "Request received",
              "Request received",
              "..."
            ]
          },
          {
            type: "paragraph",
            content:
              "printed 100 times."
          },
          {
            type: "paragraph",
            content:
              "You create the server once, but its callback executes for every incoming request."
          }
        ]
      },

      {
        heading: "Can One Server Handle Many Users?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Yes."
          },
          {
            type: "paragraph",
            content:
              "Node.js is designed to handle many simultaneous connections efficiently."
          },
          {
            type: "paragraph",
            content:
              "Unlike creating one server per user, Node.js creates:"
          },
          {
            type: "code",
            language: "text",
            content: `One Server

↓

Thousands of Requests

↓

One Event Loop

↓

Non-blocking Operations`
          },
          {
            type: "paragraph",
            content:
              "This architecture is one of the reasons Node.js is popular for APIs, chat applications, and real-time services."
          }
        ]
      },

      {
        heading: "Development Workflow",
        blocks: [
          {
            type: "paragraph",
            content:
              "A typical Node.js development workflow looks like this:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Write server code.",
              "Save the file.",
              "Run the application:",
              "Open the browser:",
              "Test the response.",
              "Stop the server, modify the code, and run it again (or use a tool like Nodemon for automatic restarts)."
            ]
          },
          {
            type: "code",
            language: "bash",
            content: `node server.js`
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          }
        ]
      },

      {
        heading: "Stopping the Server",
        blocks: [
          {
            type: "paragraph",
            content:
              "To stop a running Node.js server from the terminal, press:"
          },
          {
            type: "code",
            language: "text",
            content: `Ctrl + C`
          },
          {
            type: "paragraph",
            content:
              "This sends an interrupt signal (`SIGINT`), causing the process to terminate."
          },
          {
            type: "paragraph",
            content:
              "The server stops listening, and the port becomes available again."
          }
        ]
      },

      {
        heading: "Gracefully Closing a Server",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes your application needs to stop accepting new requests without abruptly terminating existing ones."
          },
          {
            type: "paragraph",
            content:
              "The HTTP server provides the `close()` method."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.close(() => {
    console.log("Server closed");
});`
          },
          {
            type: "paragraph",
            content: "When `close()` is called:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The server stops accepting new connections.",
              "Existing connections are allowed to finish.",
              "The callback runs after the server has completely shut down."
            ]
          },
          {
            type: "paragraph",
            content:
              "This is especially useful during deployments or controlled shutdowns."
          }
        ]
      },

      {
        heading: "Common Server Startup Errors",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Port Already in Use",
                answer:
                  "If another application is already using the same port, you'll see an error similar to `EADDRINUSE`. Solution: Stop the other application, or use another port.",
                examples: [
                  {
                    title: "Use another port",
                    language: "javascript",
                    content: `server.listen(4000);`
                  }
                ]
              },
              {
                question: "Permission Denied",
                answer:
                  "On many operating systems, ports below `1024` require elevated privileges. Instead of `server.listen(80);` during development, prefer `server.listen(3000);`."
              },
              {
                question: "Server Doesn't Respond",
                answer:
                  "A common mistake is forgetting to send a response. The browser keeps loading because `res.end()` was never called.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `const server = http.createServer((req, res) => {
    console.log("Request");
});`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `const server = http.createServer((req, res) => {
    console.log("Request");
    res.end("OK");
});`
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Server Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content:
              "Here's a simplified view of what happens when you start a production server:"
          },
          {
            type: "code",
            language: "text",
            content: `Application Starts
        │
        ▼
Import Modules
        │
        ▼
Create HTTP Server
        │
        ▼
Listen on Port
        │
        ▼
Wait for Incoming Requests
        │
        ▼
Handle Request
        │
        ▼
Access Database / Files / APIs
        │
        ▼
Generate Response
        │
        ▼
Send Response
        │
        ▼
Repeat Until Shutdown`
          },
          {
            type: "paragraph",
            content:
              "Understanding this lifecycle will help you reason about everything you'll build later, from REST APIs to full-stack web applications."
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
                question: "Calling `createServer()` but forgetting `listen()`",
                answer:
                  "The server is created but never starts accepting connections."
              },
              {
                question: "Forgetting to call `res.end()`",
                answer:
                  "This causes requests to hang because the response is never completed."
              },
              {
                question: "Creating multiple servers when one server is sufficient",
                answer:
                  "A single server instance can handle many requests. Creating multiple servers wastes resources."
              },
              {
                question: "Hardcoding privileged ports like `80` during development",
                answer:
                  "Ports below 1024 often require elevated permissions. Use ports like 3000, 4000, or 8080 for development."
              },
              {
                question: "Assuming the callback runs only once",
                answer:
                  "It actually runs once **per request**. If 100 users visit your application, the callback executes 100 times."
              },
              {
                question: "Performing long-running synchronous work inside the request handler",
                answer:
                  "This blocks the event loop and delays other requests. Use asynchronous operations for I/O tasks."
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
              "Import the module using `node:http` in modern projects.",
              "Use a callback with `listen()` to confirm the server has started.",
              "Use ports such as `3000`, `4000`, or `8080` for development.",
              "Always send exactly one response for every request.",
              "Keep request handlers small and delegate complex logic to separate functions or modules.",
              "Handle shutdowns gracefully with `server.close()` when appropriate.",
              "Use tools like Nodemon during development to automatically restart the server after code changes."
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
              "A web server listens for HTTP requests and returns HTTP responses.",
              "`http.createServer()` creates an HTTP server but does not start listening.",
              "`server.listen()` binds the server to a port and begins accepting incoming connections.",
              "The request listener callback executes once for every incoming request, receiving `req` and `res` objects.",
              "`res.end()` sends the response and completes the request-response cycle.",
              "`localhost` refers to your own machine (`127.0.0.1`), making it ideal for local development.",
              "One Node.js server can efficiently handle many client requests using its event-driven, non-blocking architecture.",
              "Understanding the server lifecycle provides the foundation for the upcoming lessons on requests, responses, routing, and building complete HTTP applications."
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
              "Creating a web server with Node.js is surprisingly simple yet incredibly powerful. Using the built-in HTTP module, you can turn your JavaScript application into a fully functional web server that listens for HTTP requests, processes them, and sends appropriate responses. This is the foundation upon which every Node.js web framework—Express, Fastify, Koa, and more—is built."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned what a web server is, how Node.js servers work internally, how to create and start a server with `http.createServer()` and `server.listen()`, the importance of `res.end()`, how ports and hosts work, and how to handle multiple requests. You also explored common server startup errors, graceful shutdowns, development workflows, and professional best practices."
          },
          {
            type: "paragraph",
            content:
              "In the next lesson, you'll dive deeper into the request object (`req`) and learn how to access incoming data, headers, parameters, and more. Mastering these fundamentals will give you the confidence to build everything from simple APIs to production-ready web applications without the overhead of large frameworks."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misunderstandings about Node.js servers is the assumption that creating a server means it runs in a separate process or thread. In reality, a Node.js server runs in the same process as your application code. This means a single Node.js process can handle thousands of concurrent requests without creating multiple threads, thanks to the event loop.\n\nAnother subtle point is that the `createServer()` callback is not invoked immediately when the server starts. It's only called when a client actually sends a request. This means your server spends most of its time in an idle state, waiting for connections. Understanding this idle state is important because it explains why Node.js servers are so efficient—they only consume CPU when there's actual work to do.\n\nThink of the server as a restaurant. The server (`createServer()`) is like the restaurant itself, the `listen()` call is like opening the doors to customers, and the request listener is like the staff member who takes each customer's order and prepares the response. The restaurant doesn't close after one customer—it stays open and serves many customers, one after another, just as a Node.js server continues listening for and handling requests over its lifetime."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Request Object
============================= */
    "nodejs-request-object": {
    title: "Request Object",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Primary Focus: Receiving client data from incoming HTTP requests",
        blocks: [
          {
            type: "paragraph",
            content:
              "Whenever a browser, mobile app, or another server communicates with your Node.js application, it sends an HTTP request. That request contains valuable information such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which resource is being requested",
              "Which HTTP method is being used",
              "Any headers sent by the client",
              "URL parameters and query strings",
              "Cookies",
              "Request body (for POST/PUT/PATCH requests)",
              "Client information"
            ]
          },
          {
            type: "paragraph",
            content:
              "Node.js represents every incoming request using the Request Object (commonly named `req`)."
          },
          {
            type: "paragraph",
            content:
              "Understanding this object is one of the most important skills for backend development because every API, website, authentication system, file upload, and database operation begins with an incoming request."
          }
        ]
      },

      {
        heading: "What is the Request Object?",
        blocks: [
          {
            type: "paragraph",
            content:
              "The Request Object is an instance of http.IncomingMessage created automatically by Node.js whenever a client sends an HTTP request."
          },
          {
            type: "paragraph",
            content:
              "When using the HTTP module, it is the first parameter passed into the callback of `http.createServer()`."
          },
          {
            type: "code",
            language: "javascript",
            content: `const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "Every time a request arrives, Node.js creates a brand-new Request Object."
          },
          {
            type: "paragraph",
            content:
              "Think of it as a package containing everything the client sent."
          },
          {
            type: "code",
            language: "text",
            content: `Browser
   │
   │ HTTP Request
   ▼
Node.js Server

Request Object (req)

├── URL
├── Method
├── Headers
├── Cookies
├── Query Parameters
├── Body
├── HTTP Version
├── Socket Information
└── Client Details`
          }
        ]
      },

      {
        heading: "Request-Response Relationship",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every HTTP communication consists of two objects:"
          },
          {
            type: "code",
            language: "text",
            content: `Incoming Request
        │
        ▼
 Request Object (req)

        │
        ▼
 Your Server Logic

        │
        ▼
Response Object (res)

        │
        ▼
Client`
          },
          {
            type: "paragraph",
            content:
              "The request tells your server:"
          },
          {
            type: "quote",
            content: "Here is what I want."
          },
          {
            type: "paragraph",
            content:
              "The response tells the client:"
          },
          {
            type: "quote",
            content: "Here is your result."
          }
        ]
      },

      {
        heading: "The Lifecycle of a Request",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a user visits:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/products?id=10`
          },
          {
            type: "paragraph",
            content: "The browser sends:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /products?id=10 HTTP/1.1
Host: localhost:3000
User-Agent: Chrome
Accept: text/html`
          },
          {
            type: "paragraph",
            content:
              "Node.js converts this into a Request Object."
          },
          {
            type: "code",
            language: "text",
            content: `req.url
"/products?id=10"

req.method
"GET"

req.headers.host
"localhost:3000"

req.headers["user-agent"]
"Chrome..."`
          },
          {
            type: "paragraph",
            content:
              "Your application can now decide what to do."
          }
        ]
      },

      {
        heading: "Basic Server Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const http = require("node:http");

const server = http.createServer((req, res) => {

    console.log(req.method);
    console.log(req.url);

    res.end("Request received");
});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Visiting"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/about`
          },
          {
            type: "paragraph",
            content: "might print"
          },
          {
            type: "output",
            content: ["GET", "/about"]
          }
        ]
      },

      {
        heading: "req.url",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of the most commonly used properties."
          },
          {
            type: "paragraph",
            content:
              "It contains the requested URL."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.url);`
          },
          {
            type: "paragraph",
            content: "If the browser visits"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/users`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["/users"]
          },
          {
            type: "paragraph",
            content: "If the browser visits"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/products?id=5`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["/products?id=5"]
          },
          {
            type: "paragraph",
            content:
              "Notice that query parameters are included."
          }
        ]
      },

      {
        heading: "Routing Using req.url",
        blocks: [
          {
            type: "paragraph",
            content:
              "A simple router can be created using the URL."
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home");
    }

    else if (req.url === "/about") {
        res.end("About");
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["/", "/about", "/contact"]
          },
          {
            type: "paragraph",
            content:
              "Produces different responses depending on the URL."
          }
        ]
      },

      {
        heading: "req.method",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every request has an HTTP method."
          },
          {
            type: "paragraph",
            content: "Examples include"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "GET",
              "POST",
              "PUT",
              "PATCH",
              "DELETE",
              "OPTIONS",
              "HEAD"
            ]
          },
          {
            type: "paragraph",
            content: "You can read it using"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.method);`
          },
          {
            type: "paragraph",
            content: "Example output"
          },
          {
            type: "output",
            content: ["GET"]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: ["POST"]
          }
        ]
      },

      {
        heading: "Why Methods Matter",
        blocks: [
          {
            type: "paragraph",
            content:
              "The same URL can perform different operations."
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content: "Fetch users."
          },
          {
            type: "code",
            language: "text",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content: "Create user."
          },
          {
            type: "code",
            language: "text",
            content: `PUT /users/5`
          },
          {
            type: "paragraph",
            content: "Update user."
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /users/5`
          },
          {
            type: "paragraph",
            content: "Delete user."
          },
          {
            type: "paragraph",
            content:
              "Node.js identifies the action using"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.method`
          }
        ]
      },

      {
        heading: "Handling Multiple Methods",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/users") {

    if (req.method === "GET") {
        res.end("Get users");
    }

    else if (req.method === "POST") {
        res.end("Create user");
    }

}`
          },
          {
            type: "paragraph",
            content:
              "This is how frameworks like Express internally route requests."
          }
        ]
      },

      {
        heading: "Common HTTP Methods",
        blocks: [
          {
            type: "table",
            headers: ["Method", "Purpose"],
            rows: [
              ["GET", "Retrieve data"],
              ["POST", "Create new resource"],
              ["PUT", "Replace existing resource"],
              ["PATCH", "Update part of a resource"],
              ["DELETE", "Remove resource"],
              ["OPTIONS", "Supported methods"],
              ["HEAD", "Headers only"]
            ]
          }
        ]
      },

      {
        heading: "req.headers",
        blocks: [
          {
            type: "paragraph",
            content:
              "Headers contain metadata about the request."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.headers);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "code",
            language: "javascript",
            content: `{
  host: 'localhost:3000',
  connection: 'keep-alive',
  user-agent: 'Chrome',
  accept: 'text/html'
}`
          },
          {
            type: "paragraph",
            content:
              "Headers are stored as an object."
          }
        ]
      },

      {
        heading: "Reading Individual Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.headers.host);

console.log(req.headers["user-agent"]);

console.log(req.headers.accept);`
          },
          {
            type: "paragraph",
            content: "Possible output"
          },
          {
            type: "output",
            content: [
              "localhost:3000",
              "",
              "Mozilla/5.0...",
              "",
              "text/html"
            ]
          }
        ]
      },

      {
        heading: "Common Request Headers",
        blocks: [
          {
            type: "table",
            headers: ["Header", "Purpose"],
            rows: [
              ["Host", "Requested server"],
              ["User-Agent", "Browser/application"],
              ["Accept", "Accepted response type"],
              ["Content-Type", "Format of request body"],
              ["Content-Length", "Body size"],
              ["Authorization", "Authentication token"],
              ["Cookie", "Browser cookies"],
              ["Referer", "Previous page"],
              ["Accept-Language", "Preferred language"]
            ]
          }
        ]
      },

      {
        heading: "Why Headers Are Important",
        blocks: [
          {
            type: "paragraph",
            content:
              "Headers allow servers to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authenticate users",
              "Determine browser type",
              "Detect mobile devices",
              "Handle APIs",
              "Process JSON",
              "Manage caching",
              "Support compression",
              "Enable CORS"
            ]
          },
          {
            type: "paragraph",
            content:
              "Nearly every backend application relies on request headers."
          }
        ]
      },

      {
        heading: "HTTP Version",
        blocks: [
          {
            type: "paragraph",
            content:
              "Node.js exposes the protocol version."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.httpVersion);`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: ["1.1"]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: ["2.0"]
          },
          {
            type: "paragraph",
            content:
              "Useful for debugging and compatibility checks."
          }
        ]
      },

      {
        heading: "Query Strings",
        blocks: [
          {
            type: "paragraph",
            content:
              "A query string appears after the `?` in a URL."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `/products?page=2&sort=price`
          },
          {
            type: "paragraph",
            content:
              "Everything after `?` is called the query string."
          },
          {
            type: "code",
            language: "text",
            content: `?page=2&sort=price`
          }
        ]
      },

      {
        heading: "Reading Query Strings",
        blocks: [
          {
            type: "paragraph",
            content:
              "The raw URL contains them."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.url);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["/products?page=2&sort=price"]
          },
          {
            type: "paragraph",
            content:
              "To extract parameters, use the **URL** class."
          },
          {
            type: "code",
            language: "javascript",
            content: `const url = new URL(req.url, \`http://\${req.headers.host}\`);

console.log(url.searchParams.get("page"));

console.log(url.searchParams.get("sort"));`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["2", "price"]
          },
          {
            type: "paragraph",
            content:
              "This approach is much cleaner than manually splitting strings."
          }
        ]
      },

      {
        heading: "Multiple Query Parameters",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `/search?q=nodejs&page=3&limit=20`
          },
          {
            type: "code",
            language: "javascript",
            content: `const url = new URL(req.url, \`http://\${req.headers.host}\`);

console.log(url.searchParams.get("q"));
console.log(url.searchParams.get("page"));
console.log(url.searchParams.get("limit"));`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["nodejs", "3", "20"]
          }
        ]
      },

      {
        heading: "Request Body",
        blocks: [
          {
            type: "paragraph",
            content:
              "The body contains additional data sent by the client."
          },
          {
            type: "paragraph",
            content:
              "Usually present in"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "POST",
              "PUT",
              "PATCH"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `POST /users

{
    "name":"Alice"
}`
          },
          {
            type: "paragraph",
            content:
              "Unlike Express, Node.js does not automatically parse the body."
          },
          {
            type: "paragraph",
            content:
              "The request body arrives as a stream of chunks."
          }
        ]
      },

      {
        heading: "Why the Body Is a Stream",
        blocks: [
          {
            type: "paragraph",
            content:
              "A client may upload:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "a JSON object",
              "a 5 MB image",
              "a 2 GB video",
              "a ZIP archive"
            ]
          },
          {
            type: "paragraph",
            content:
              "Loading everything into memory at once would be inefficient."
          },
          {
            type: "paragraph",
            content:
              "Instead, Node.js receives data gradually."
          },
          {
            type: "code",
            language: "text",
            content: `Chunk 1

Chunk 2

Chunk 3

Chunk 4`
          }
        ]
      },

      {
        heading: "Reading the Request Body",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `let body = "";

req.on("data", chunk => {
    body += chunk;
});

req.on("end", () => {

    console.log(body);

    res.end("Received");

});`
          },
          {
            type: "paragraph",
            content: "If the client sends"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name":"John"
}`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ['{"name":"John"}']
          }
        ]
      },

      {
        heading: "Parsing JSON Requests",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most APIs receive JSON."
          },
          {
            type: "code",
            language: "javascript",
            content: `let body = "";

req.on("data", chunk => {
    body += chunk;
});

req.on("end", () => {

    const user = JSON.parse(body);

    console.log(user.name);

    res.end("Saved");

});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["John"]
          },
          {
            type: "paragraph",
            content:
              "Always validate incoming JSON because malformed JSON will throw an exception."
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
    const data = JSON.parse(body);
} catch {
    res.statusCode = 400;
    res.end("Invalid JSON");
}`
          }
        ]
      },

      {
        heading: "Incoming Streams",
        blocks: [
          {
            type: "paragraph",
            content:
              "The Request Object itself is a Readable Stream."
          },
          {
            type: "paragraph",
            content:
              "That means it supports stream events such as"
          },
          {
            type: "output",
            content: [
              "data",
              "end",
              "error",
              "close"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.on("data", chunk => {
    console.log(chunk.length);
});

req.on("end", () => {
    console.log("Finished");
});`
          },
          {
            type: "paragraph",
            content:
              "This streaming design allows Node.js to handle very large uploads efficiently."
          }
        ]
      },

      {
        heading: "Reading Binary Data",
        blocks: [
          {
            type: "paragraph",
            content:
              "Not every request contains text."
          },
          {
            type: "paragraph",
            content:
              "Clients may upload"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "PDFs",
              "Videos",
              "ZIP files"
            ]
          },
          {
            type: "paragraph",
            content:
              "In such cases, Node.js provides Buffer objects."
          },
          {
            type: "code",
            language: "javascript",
            content: `req.on("data", chunk => {
    console.log(Buffer.isBuffer(chunk));
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["true"]
          }
        ]
      },

      {
        heading: "Client Information",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request also contains network information through its socket."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.socket.remoteAddress);`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: ["127.0.0.1"]
          },
          {
            type: "paragraph",
            content: "You can also inspect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.socket.remotePort

req.socket.localPort

req.socket.localAddress`
          },
          {
            type: "paragraph",
            content:
              "This information is useful for debugging, analytics, logging, and security."
          }
        ]
      },

      {
        heading: "Detecting Browser Information",
        blocks: [
          {
            type: "paragraph",
            content:
              "You can inspect the `User-Agent` header."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.headers["user-agent"]);`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: ["Mozilla/5.0 Chrome/140..."]
          },
          {
            type: "paragraph",
            content:
              "Many websites use this to serve optimized content for different browsers or devices."
          }
        ]
      },

      {
        heading: "Detecting Content Type",
        blocks: [
          {
            type: "paragraph",
            content:
              "When clients send data, they specify its format."
          },
          {
            type: "code",
            language: "text",
            content: `Content-Type: application/json`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "text",
            content: `Content-Type: multipart/form-data`
          },
          {
            type: "paragraph",
            content: "Read it using"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.headers["content-type"]);`
          },
          {
            type: "paragraph",
            content:
              "This helps your server decide how to process the request body."
          }
        ]
      },

      {
        heading: "Practical Example: Logging Every Request",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const http = require("node:http");

http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("User Agent:", req.headers["user-agent"]);

    res.end("OK");

}).listen(3000);`
          },
          {
            type: "paragraph",
            content: "Console"
          },
          {
            type: "output",
            content: [
              "Method: GET",
              "URL: /about",
              "User Agent: Chrome..."
            ]
          },
          {
            type: "paragraph",
            content:
              "This is the foundation of request logging systems used in production."
          }
        ]
      },

      {
        heading: "Practical Example: Simple API Endpoint",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const http = require("node:http");

http.createServer((req, res) => {

    const url = new URL(req.url, \`http://\${req.headers.host}\`);

    if (
        req.method === "GET" &&
        url.pathname === "/hello"
    ) {

        const name = url.searchParams.get("name") || "Guest";

        res.end(\`Hello \${name}\`);

        return;
    }

    res.statusCode = 404;
    res.end("Not Found");

}).listen(3000);`
          },
          {
            type: "paragraph",
            content: "Request"
          },
          {
            type: "code",
            language: "text",
            content: `GET /hello?name=Faiz`
          },
          {
            type: "paragraph",
            content: "Response"
          },
          {
            type: "output",
            content: ["Hello Faiz"]
          },
          {
            type: "paragraph",
            content:
              "This demonstrates routing, query parsing, and method checking together."
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
                question: "Assuming `req.body` Exists",
                answer:
                  "Unlike Express, `req.body` does not exist automatically. You must read the incoming stream yourself."
              },
              {
                question: "Ignoring HTTP Methods",
                answer:
                  "Checking only the URL can produce incorrect behavior.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `if (req.url === "/users")`
                  },
                  {
                    title: "Better",
                    language: "javascript",
                    content: `if (
    req.url === "/users" &&
    req.method === "GET"
)`
                  }
                ]
              },
              {
                question: "Forgetting Error Handling",
                answer:
                  "Always validate JSON and handle stream errors.",
                examples: [
                  {
                    title: "Example",
                    language: "javascript",
                    content: `req.on("error", err => {
    console.error(err);
});`
                  }
                ]
              },
              {
                question: "Blocking the Request Handler",
                answer:
                  "Avoid expensive synchronous operations.",
                examples: [
                  {
                    title: "Bad",
                    language: "javascript",
                    content: `const data = fs.readFileSync("hugeFile.txt");`
                  },
                  {
                    title: "Good",
                    language: "javascript",
                    content: `fs.readFile("hugeFile.txt", () => {});`
                  }
                ]
              },
              {
                question: "Parsing Query Strings Manually",
                answer:
                  "Avoid code like `req.url.split(\"?\")`. Use the `URL` class instead. It is safer, cleaner, and handles URL encoding correctly.",
                examples: [
                  {
                    title: "Recommended",
                    language: "javascript",
                    content: `const url = new URL(req.url, \`http://\${req.headers.host}\`);`
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
              "Always check both `req.method` and `req.url` when routing.",
              "Use the `URL` class instead of manually parsing query strings.",
              "Treat the request body as a stream, especially for large payloads.",
              "Validate and sanitize all incoming data before using it.",
              "Wrap `JSON.parse()` in `try...catch` to handle invalid JSON.",
              "Avoid blocking the event loop with synchronous operations inside request handlers.",
              "Read only the headers you need, but never trust client-provided values blindly.",
              "Log essential request information (method, URL, status, response time) for debugging and monitoring.",
              "Limit accepted request body sizes to prevent memory exhaustion attacks.",
              "Keep request-handling logic modular by separating routing, validation, and business logic into different functions or files."
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
              "Every incoming HTTP request is represented by a Request Object (`req`).",
              "`req.url` identifies the requested resource, while `req.method` indicates the intended operation.",
              "`req.headers` provides metadata such as the host, content type, authorization, and user agent.",
              "Query parameters can be parsed cleanly using the `URL` class and `URLSearchParams`.",
              "The request body is delivered as a Readable Stream, allowing Node.js to efficiently handle large uploads without loading everything into memory at once.",
              "The Request Object also exposes protocol details, client network information, and stream events, making it the central source of information for processing every HTTP request in a Node.js application."
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
              "The Request Object is the foundation of every Node.js HTTP application. It contains all the information a client sends to your server, including the URL, HTTP method, headers, query parameters, cookies, body data, and client network details. Understanding how to read and use this information is essential for building any kind of web application, API, or backend service."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned how to access the request URL and method, read headers and query parameters, process the request body as a stream, parse JSON data, handle errors, and build simple routing logic. You also explored common mistakes and professional best practices for working with the Request Object."
          },
          {
            type: "paragraph",
            content:
              "In the next lesson, you'll explore the Response Object, which allows you to send status codes, headers, JSON data, HTML, and more back to the client. Together, the Request and Response objects form the complete request-response cycle that powers every Node.js web application."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misconceptions about the Request Object is that it contains all the data immediately. In reality, the request body arrives as a stream, which means it may not be fully available when your request handler starts executing. This is especially important for large uploads or slow network connections—you must wait for the entire body to arrive before processing it.\n\nAnother subtle point is that `req.url` includes the query string, but not the protocol or host. This is why the `URL` class requires a base URL when parsing. The `headers` object contains keys in lowercase, so you need to access `req.headers['content-type']` rather than `req.headers['Content-Type']`.\n\nThink of the Request Object as a container that the client fills as they communicate with your server. Some parts (like the method and URL) arrive immediately, while other parts (like the body) may take time to arrive. Learning to work with both the synchronous properties and the asynchronous stream of the request body is what separates beginner Node.js developers from those who can build robust, production-ready applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Response Object
============================= */
    "nodejs-response-object": {
    title: "Response Object",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Primary Focus: Sending responses to clients",
        blocks: [
          {
            type: "paragraph",
            content:
              "Whenever a browser, mobile app, or another server sends an HTTP request to your Node.js application, your server must send something back. That \"something\" is called the HTTP response."
          },
          {
            type: "paragraph",
            content:
              "In Node.js, the Response Object (`res`) represents the outgoing response that your server sends to the client. It allows you to send HTML pages, JSON data, images, files, status codes, HTTP headers, redirects, and much more."
          },
          {
            type: "paragraph",
            content:
              "Understanding the Response Object is one of the most important skills in backend development because every request must eventually receive exactly one response."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how responses work internally and how professional Node.js applications build and send responses efficiently."
          }
        ]
      },

      {
        heading: "What is the Response Object?",
        blocks: [
          {
            type: "paragraph",
            content:
              "When you create an HTTP server, Node.js automatically passes two objects to the request handler:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

});`
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`req` → Incoming request",
              "`res` → Outgoing response"
            ]
          },
          {
            type: "paragraph",
            content:
              "The response object is an instance of http.ServerResponse."
          },
          {
            type: "paragraph",
            content:
              "Its job is to build and send the HTTP response back to the client."
          },
          {
            type: "paragraph",
            content:
              "A response consists of three parts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Status Code",
              "Headers",
              "Response Body"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `HTTP/1.1 200 OK

Content-Type: text/plain

Hello World`
          },
          {
            type: "paragraph",
            content:
              "The response object is responsible for creating all of this."
          }
        ]
      },

      {
        heading: "Response Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every HTTP response follows the same lifecycle."
          },
          {
            type: "code",
            language: "text",
            content: `Client sends request
        │
        ▼
Server receives request
        │
        ▼
Process request
        │
        ▼
Set status code
        │
        ▼
Set headers
        │
        ▼
Write response body
        │
        ▼
End response
        │
        ▼
Connection completed`
          },
          {
            type: "paragraph",
            content:
              "Notice the important rule:"
          },
          {
            type: "quote",
            content: "A response is not complete until `res.end()` is called."
          }
        ]
      },

      {
        heading: "The Simplest Response",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Opening:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "output",
            content: ["Hello World"]
          },
          {
            type: "paragraph",
            content:
              "Even though we didn't set headers or status codes manually, Node.js automatically sends:"
          },
          {
            type: "output",
            content: [
              "Status: 200 OK",
              "Content-Length",
              "Date",
              "Connection"
            ]
          }
        ]
      },

      {
        heading: "How Node Builds the Response",
        blocks: [
          {
            type: "paragraph",
            content: "When you call:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello World");`
          },
          {
            type: "paragraph",
            content:
              "Node.js internally does something similar to:"
          },
          {
            type: "code",
            language: "text",
            content: `Status Code: 200

Headers:
Content-Type: application/octet-stream

Body:
Hello World`
          },
          {
            type: "paragraph",
            content:
              "The response is then sent to the browser."
          }
        ]
      },

      {
        heading: "res.write()",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes you don't want to send everything at once."
          },
          {
            type: "paragraph",
            content:
              "You may want to send data in multiple chunks."
          },
          {
            type: "paragraph",
            content:
              "For that, Node.js provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.write()`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.write("Hello ");
res.write("Node.js ");
res.write("Students!");
res.end();`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["Hello Node.js Students!"]
          },
          {
            type: "paragraph",
            content:
              "Each `write()` sends another chunk into the response stream."
          },
          {
            type: "paragraph",
            content:
              "The response is not finished until `res.end()` is called."
          }
        ]
      },

      {
        heading: "Why res.write() Exists",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose you're generating a huge report."
          },
          {
            type: "paragraph",
            content:
              "Instead of waiting until the report finishes, you can stream it gradually."
          },
          {
            type: "code",
            language: "text",
            content: `Generate first part
↓

Send first chunk

↓

Generate second part

↓

Send second chunk

↓

Generate third part

↓

Send third chunk

↓

Finish response`
          },
          {
            type: "paragraph",
            content:
              "This improves memory usage and allows the client to start receiving data sooner."
          }
        ]
      },

      {
        heading: "res.end()",
        blocks: [
          {
            type: "paragraph",
            content:
              "`res.end()` finishes the HTTP response."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Finished");`
          },
          {
            type: "paragraph",
            content: "Equivalent to"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.write("Finished");
res.end();`
          },
          {
            type: "paragraph",
            content: "After calling `res.end()`:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No more data can be written.",
              "The connection begins closing (unless keep-alive is used).",
              "The client receives the completed response."
            ]
          }
        ]
      },

      {
        heading: "Important Rule",
        blocks: [
          {
            type: "paragraph",
            content: "This is incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello");

res.write("World");`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "output",
            content: ["Error:", "Cannot write after end"]
          },
          {
            type: "paragraph",
            content:
              "Once a response ends, it cannot be modified."
          }
        ]
      },

      {
        heading: "Sending Multiple Chunks",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.write("Part 1\\n");

res.write("Part 2\\n");

res.write("Part 3\\n");

res.end("Done");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Part 1",
              "Part 2",
              "Part 3",
              "Done"
            ]
          }
        ]
      },

      {
        heading: "Response is a Writable Stream",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of the most important facts beginners often miss is:"
          },
          {
            type: "quote",
            content: "The Response Object is a Writable Stream."
          },
          {
            type: "paragraph",
            content:
              "That means it supports streaming APIs like:"
          },
          {
            type: "output",
            content: [
              "write()",
              "end()",
              "pipe()",
              "drain event"
            ]
          },
          {
            type: "paragraph",
            content:
              "You'll explore these in the Streams section."
          }
        ]
      },

      {
        heading: "Setting the Status Code",
        blocks: [
          {
            type: "paragraph",
            content:
              "HTTP responses always contain a status code."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "200 OK",
              "201 Created",
              "400 Bad Request",
              "404 Not Found",
              "500 Internal Server Error"
            ]
          },
          {
            type: "paragraph",
            content: "Node provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.statusCode = 404;

res.end("Page not found");`
          },
          {
            type: "paragraph",
            content: "Browser receives"
          },
          {
            type: "output",
            content: ["404 Not Found"]
          }
        ]
      },

      {
        heading: "Using writeHead()",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of setting properties one by one, Node allows setting status code and headers together."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200, {
    "Content-Type": "text/plain"
});

res.end("Success");`
          },
          {
            type: "paragraph",
            content: "This sends:"
          },
          {
            type: "output",
            content: [
              "Status: 200",
              "",
              "Content-Type: text/plain"
            ]
          }
        ]
      },

      {
        heading: "writeHead() Syntax",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(statusCode, headers);`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404, {
    "Content-Type": "text/plain"
});

res.end("Not Found");`
          }
        ]
      },

      {
        heading: "Status Code vs writeHead()",
        blocks: [
          {
            type: "paragraph",
            content: "Method 1"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.statusCode = 200;

res.setHeader("Content-Type", "text/plain");

res.end("Hello");`
          },
          {
            type: "paragraph",
            content: "Method 2"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200, {
    "Content-Type": "text/plain"
});

res.end("Hello");`
          },
          {
            type: "paragraph",
            content: "Both are valid."
          },
          {
            type: "paragraph",
            content:
              "Large projects often prefer the first approach because it's easier to modify headers before sending them."
          }
        ]
      },

      {
        heading: "What Are HTTP Headers?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Headers contain additional information about the response."
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "output",
            content: [
              "Content-Type",
              "Content-Length",
              "Cache-Control",
              "Set-Cookie",
              "Location",
              "Authorization",
              "ETag",
              "Content-Encoding"
            ]
          },
          {
            type: "paragraph",
            content:
              "Headers tell browsers how to interpret the response."
          }
        ]
      },

      {
        heading: "Setting Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Using `setHeader()`"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/plain");

res.end("Hello");`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Multiple headers"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "application/json");

res.setHeader("Cache-Control", "no-cache");

res.end("{}");`
          }
        ]
      },

      {
        heading: "Getting Response Headers",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.getHeader("Content-Type");`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/html");

console.log(res.getHeader("Content-Type"));`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["text/html"]
          }
        ]
      },

      {
        heading: "Removing Headers",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.removeHeader("X-Test");`
          },
          {
            type: "paragraph",
            content:
              "Useful before headers are sent."
          }
        ]
      },

      {
        heading: "Common Response Headers",
        blocks: [
          {
            type: "paragraph",
            content: "## Content-Type"
          },
          {
            type: "paragraph",
            content:
              "Specifies the type of data."
          },
          {
            type: "output",
            content: [
              "text/plain",
              "text/html",
              "application/json",
              "image/png",
              "application/pdf",
              "text/css",
              "application/javascript"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "## Cache-Control"
          },
          {
            type: "paragraph",
            content:
              "Controls browser caching."
          },
          {
            type: "output",
            content: [
              "Cache-Control: no-cache",
              "Cache-Control: max-age=3600"
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "## Location"
          },
          {
            type: "paragraph",
            content:
              "Used for redirects."
          },
          {
            type: "output",
            content: ["Location:", "/login"]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "## Set-Cookie"
          },
          {
            type: "paragraph",
            content:
              "Stores cookies in the browser."
          },
          {
            type: "output",
            content: ["Set-Cookie:", "session=abc123"]
          }
        ]
      },

      {
        heading: "Sending Plain Text",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/plain");

res.end("Welcome");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["Welcome"]
          }
        ]
      },

      {
        heading: "Sending HTML",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/html");

res.end(\`
<h1>Node.js</h1>
<p>Hello World</p>
\`);`
          },
          {
            type: "paragraph",
            content:
              "Browser renders"
          },
          {
            type: "paragraph",
            content: "# Node.js"
          },
          {
            type: "paragraph",
            content: "Hello World"
          },
          {
            type: "paragraph",
            content:
              "instead of showing HTML tags."
          }
        ]
      },

      {
        heading: "Sending JSON",
        blocks: [
          {
            type: "paragraph",
            content:
              "JSON APIs are extremely common."
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {
    name: "Faiz",
    age: 21
};

res.setHeader("Content-Type", "application/json");

res.end(JSON.stringify(user));`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Faiz",
    "age": 21
}`
          },
          {
            type: "paragraph",
            content:
              "Notice:"
          },
          {
            type: "paragraph",
            content:
              "Node cannot send JavaScript objects directly."
          },
          {
            type: "paragraph",
            content:
              "You must convert them using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `JSON.stringify()`
          }
        ]
      },

      {
        heading: "Sending Dynamic Data",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const users = 120;

res.end(\`Total Users: \${users}\`);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["Total Users: 120"]
          }
        ]
      },

      {
        heading: "Response Lifecycle Internals",
        blocks: [
          {
            type: "paragraph",
            content: "When you send"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello");`
          },
          {
            type: "paragraph",
            content:
              "Internally Node performs roughly:"
          },
          {
            type: "code",
            language: "text",
            content: `↓

Prepare headers

↓

Calculate content length

↓

Send headers

↓

Send body

↓

Flush socket

↓

Close response`
          },
          {
            type: "paragraph",
            content:
              "After headers are sent, they cannot be modified."
          }
        ]
      },

      {
        heading: "Detecting if Headers Are Already Sent",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log(res.headersSent);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["false"]
          },
          {
            type: "paragraph",
            content: "After:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello");`
          },
          {
            type: "output",
            content: ["true"]
          },
          {
            type: "paragraph",
            content:
              "Trying to modify headers afterward results in errors."
          }
        ]
      },

      {
        heading: "Redirects (Brief Introduction)",
        blocks: [
          {
            type: "paragraph",
            content:
              "A redirect tells the browser to visit another URL."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(302, {
    Location: "/login"
});

res.end();`
          },
          {
            type: "paragraph",
            content:
              "Browser automatically requests:"
          },
          {
            type: "code",
            language: "text",
            content: `/login`
          },
          {
            type: "paragraph",
            content:
              "Common redirect status codes include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "301 – Permanent Redirect",
              "302 – Temporary Redirect",
              "307 – Temporary Redirect (preserves HTTP method)",
              "308 – Permanent Redirect (preserves HTTP method)"
            ]
          },
          {
            type: "paragraph",
            content:
              "We'll explore redirects in more detail when covering routing and web frameworks."
          }
        ]
      },

      {
        heading: "Response Based on Request",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});`
          },
          {
            type: "paragraph",
            content: "Visiting:"
          },
          {
            type: "code",
            language: "text",
            content: `/`
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "output",
            content: ["Home"]
          },
          {
            type: "paragraph",
            content: "Visiting"
          },
          {
            type: "code",
            language: "text",
            content: `/about`
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "output",
            content: ["Not Found"]
          }
        ]
      },

      {
        heading: "Returning Different Content Types",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/json") {

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        language: "Node.js"
    }));

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/html") {

    res.setHeader("Content-Type", "text/html");

    res.end("<h1>Hello</h1>");

}`
          },
          {
            type: "paragraph",
            content: "Same server."
          },
          {
            type: "paragraph",
            content:
              "Different response types."
          }
        ]
      },

      {
        heading: "Common Response Status Codes",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning", "Typical Usage"],
            rows: [
              ["200", "OK", "Successful request"],
              ["201", "Created", "Resource created"],
              ["204", "No Content", "Success without a response body"],
              ["301", "Moved Permanently", "Permanent redirect"],
              ["302", "Found", "Temporary redirect"],
              ["304", "Not Modified", "Client can use cached version"],
              ["400", "Bad Request", "Invalid client request"],
              ["401", "Unauthorized", "Authentication required"],
              ["403", "Forbidden", "Permission denied"],
              ["404", "Not Found", "Resource does not exist"],
              ["405", "Method Not Allowed", "Unsupported HTTP method"],
              ["409", "Conflict", "Resource conflict"],
              ["500", "Internal Server Error", "Server-side error"],
              ["502", "Bad Gateway", "Invalid upstream response"],
              ["503", "Service Unavailable", "Server temporarily unavailable"]
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
                question: "Forgetting `res.end()`",
                answer:
                  "The browser waits indefinitely because the response never finishes.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.write("Hello");`
                  }
                ]
              },
              {
                question: "Sending Multiple Responses",
                answer:
                  "Only one response can be sent for a request.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.end("Success");

res.end("Again");`
                  }
                ]
              },
              {
                question: "Writing After End",
                answer:
                  "This throws an error because the response has already been completed.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.end("Done");

res.write("More");`
                  }
                ]
              },
              {
                question: "Forgetting `JSON.stringify()`",
                answer:
                  "Node cannot send JavaScript objects directly.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.end({
    name: "John"
});`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `res.end(JSON.stringify({
    name: "John"
}));`
                  }
                ]
              },
              {
                question: "Missing Content-Type",
                answer:
                  "Sending HTML or JSON without the appropriate `Content-Type` may cause browsers or clients to interpret the data incorrectly."
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
              "Always call `res.end()` exactly once for every request.",
              "Set the correct HTTP status code instead of relying on defaults.",
              "Send appropriate `Content-Type` headers for every response.",
              "Use `JSON.stringify()` when returning JSON from the core `http` module.",
              "Prefer `setHeader()` and `statusCode` for readable, maintainable code; use `writeHead()` when you want to send status and headers together.",
              "Stream large responses instead of loading everything into memory.",
              "Avoid sending sensitive information (stack traces, passwords, internal errors) in production responses.",
              "Keep responses consistent across your application (especially in APIs).",
              "Check `res.headersSent` before attempting to modify headers in complex asynchronous code.",
              "Return meaningful error messages along with proper status codes to make debugging easier for API consumers."
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
              "The Response Object (`res`) is used to send HTTP responses back to the client.",
              "A complete response consists of a status code, headers, and a body.",
              "`res.end()` must be called to complete the response.",
              "`res.write()` allows the response body to be sent in multiple chunks.",
              "`res.setHeader()` and `res.statusCode` set individual response metadata.",
              "`res.writeHead()` sets the status code and headers together in one call.",
              "Always choose the appropriate `Content-Type` header for the response data.",
              "`res` is a Writable Stream, enabling efficient streaming of large responses.",
              "The Response Object is the final step in the HTTP request-response cycle. Mastering it is essential because every Node.js server—whether built with the core `http` module or frameworks like Express, Fastify, or NestJS—ultimately relies on these same response concepts under the hood."
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
              "The Response Object is the counterpart to the Request Object and completes the HTTP request-response cycle. It allows you to send status codes, headers, and body data back to the client in formats such as plain text, HTML, JSON, and binary data. Using `res.write()` and `res.end()`, you can stream responses efficiently, while `res.statusCode`, `res.setHeader()`, and `res.writeHead()` give you full control over the response metadata."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned how to send responses using the core HTTP module, set status codes and headers, stream data with multiple chunks, handle redirects, and avoid common mistakes. You also explored how the response lifecycle works internally and why every request must receive exactly one response."
          },
          {
            type: "paragraph",
            content:
              "With both the Request and Response Objects now covered, you have the foundational knowledge to build complete HTTP servers in Node.js. In the next lessons, you'll apply these concepts to build routing, handle different content types, and create real-world APIs—all without relying on external frameworks."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misunderstandings about the Response Object is that `res.end()` is optional when sending a response. In reality, it's mandatory. Without `res.end()`, the client will wait indefinitely because the server never signals that the response is complete.\n\nAnother subtle point is that the Response Object is a stream, not just a static container. This means you can pipe data directly into it from other streams—such as reading a file and sending it to the client without ever loading the entire file into memory. This streaming capability is one of the primary reasons Node.js is so efficient for serving large files and streaming data.\n\nThink of the Response Object as the final message your server sends to the client. It must be complete, meaningful, and appropriately formatted. Just as you wouldn't send a letter without a proper closing, you should never leave an HTTP response unfinished. Mastering the Response Object is essential because it is the final step in every request-response cycle and the primary way your application communicates its results to the outside world."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Routing Basics
============================= */
    "nodejs-routing-basics": {
    title: "Routing Basics",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Primary Focus: Handling Different URLs",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every web application serves more than one page or API endpoint."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A blog has a home page, about page, contact page, and hundreds of blog posts.",
              "An online store has product pages, shopping cart, checkout, and user accounts.",
              "A REST API may expose dozens or even hundreds of endpoints."
            ]
          },
          {
            type: "paragraph",
            content:
              "When a browser requests different URLs, your server must determine which code should handle that request."
          },
          {
            type: "paragraph",
            content:
              "This process is called routing."
          },
          {
            type: "paragraph",
            content:
              "Routing is one of the most fundamental concepts in backend development. Whether you build applications using Node.js' built-in `http` module or frameworks like Express, Fastify, NestJS, or Koa, every request is eventually matched to a route."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how routing works from scratch using the core `http` module before moving on to frameworks later in the course."
          }
        ]
      },

      {
        heading: "What is Routing?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Routing is the process of matching an incoming HTTP request to the correct piece of server-side code."
          },
          {
            type: "paragraph",
            content: "In simple words:"
          },
          {
            type: "quote",
            content: "Routing decides what your server should do when a client requests a particular URL using a specific HTTP method."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /
↓
Return Home Page

GET /about
↓
Return About Page

GET /products
↓
Return Product List

POST /login
↓
Authenticate User`
          },
          {
            type: "paragraph",
            content:
              "The server looks at:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Request URL",
              "HTTP Method"
            ]
          },
          {
            type: "paragraph",
            content:
              "and then chooses the appropriate handler."
          }
        ]
      },

      {
        heading: "Why Routing Exists",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine a server without routing."
          },
          {
            type: "paragraph",
            content:
              "Every request would execute the exact same code."
          },
          {
            type: "code",
            language: "text",
            content: `Browser
    │
    ▼
Node Server

↓

Always sends:

Hello World`
          },
          {
            type: "paragraph",
            content:
              "No matter which page the user visits:"
          },
          {
            type: "code",
            language: "text",
            content: `/`
          },
          {
            type: "code",
            language: "text",
            content: `/about`
          },
          {
            type: "code",
            language: "text",
            content: `/contact`
          },
          {
            type: "code",
            language: "text",
            content: `/products`
          },
          {
            type: "paragraph",
            content:
              "Everything would return the same response."
          },
          {
            type: "paragraph",
            content:
              "That obviously isn't useful."
          },
          {
            type: "paragraph",
            content:
              "Routing allows one server to provide many different services."
          }
        ]
      },

      {
        heading: "How Routing Works",
        blocks: [
          {
            type: "paragraph",
            content:
              "When a request reaches the server:"
          },
          {
            type: "code",
            language: "text",
            content: `Client

↓

HTTP Request

↓

Node Server

↓

Read URL

↓

Read HTTP Method

↓

Find Matching Route

↓

Execute Handler

↓

Send Response`
          },
          {
            type: "paragraph",
            content:
              "This process happens for every request."
          }
        ]
      },

      {
        heading: "The Request Properties Used for Routing",
        blocks: [
          {
            type: "paragraph",
            content:
              "Node provides two important properties:"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.url`
          },
          {
            type: "paragraph",
            content:
              "Contains the requested path."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: ["/about"]
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `req.method`
          },
          {
            type: "paragraph",
            content:
              "Contains the HTTP method."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "output",
            content: [
              "GET",
              "POST",
              "PUT",
              "DELETE"
            ]
          },
          {
            type: "paragraph",
            content:
              "Together these uniquely identify a route."
          }
        ]
      },

      {
        heading: "Your First Manual Route",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");
    }

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Visiting"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/`
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "output",
            content: ["Home Page"]
          }
        ]
      },

      {
        heading: "Multiple Routes",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home");
    }

    else if (req.url === "/about") {
        res.end("About");
    }

    else if (req.url === "/contact") {
        res.end("Contact");
    }

    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "Now different URLs return different responses."
          }
        ]
      },

      {
        heading: "Understanding Route Matching",
        blocks: [
          {
            type: "paragraph",
            content:
              "The server compares the requested URL against predefined paths."
          },
          {
            type: "code",
            language: "text",
            content: `Incoming URL

↓

"/about"

↓

Compare

"/"

❌

↓

"/about"

✅

↓

Execute About Handler`
          },
          {
            type: "paragraph",
            content:
              "The first matching route is executed."
          }
        ]
      },

      {
        heading: "Exact Matching",
        blocks: [
          {
            type: "paragraph",
            content:
              "Node performs exact string comparison."
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/about")`
          },
          {
            type: "paragraph",
            content: "matches"
          },
          {
            type: "output",
            content: ["/about"]
          },
          {
            type: "paragraph",
            content: "but not"
          },
          {
            type: "output",
            content: [
              "/About",
              "/about/",
              "/about?x=10"
            ]
          },
          {
            type: "paragraph",
            content:
              "These are different URLs."
          }
        ]
      },

      {
        heading: "Understanding req.url",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose the browser requests"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/products?id=12`
          },
          {
            type: "paragraph",
            content: "Then"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(req.url);`
          },
          {
            type: "paragraph",
            content: "prints"
          },
          {
            type: "output",
            content: ["/products?id=12"]
          },
          {
            type: "paragraph",
            content:
              "Notice that the query string is included."
          },
          {
            type: "paragraph",
            content:
              "We'll learn proper URL parsing later."
          }
        ]
      },

      {
        heading: "Using req.method",
        blocks: [
          {
            type: "paragraph",
            content:
              "The same URL can perform different operations."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content: "Return users."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content: "Create a new user."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /users`
          },
          {
            type: "paragraph",
            content: "Delete a user."
          },
          {
            type: "paragraph",
            content:
              "Therefore routing usually depends on both URL and HTTP method."
          }
        ]
      },

      {
        heading: "Routing with URL and Method",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/users" && req.method === "GET") {

    res.end("List Users");

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/users" && req.method === "POST") {

    res.end("Create User");

}`
          },
          {
            type: "paragraph",
            content:
              "Even though the URL is the same, different handlers execute."
          }
        ]
      },

      {
        heading: "Complete Manual Routing Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        res.end("Home");

    }

    else if (req.url === "/about" && req.method === "GET") {

        res.end("About");

    }

    else if (req.url === "/users" && req.method === "GET") {

        res.end("User List");

    }

    else if (req.url === "/users" && req.method === "POST") {

        res.end("Create User");

    }

    else {

        res.statusCode = 404;

        res.end("Route Not Found");

    }

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "This is the simplest router."
          }
        ]
      },

      {
        heading: "Why HTTP Method Matters",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine a shopping website."
          },
          {
            type: "code",
            language: "text",
            content: `GET /cart`
          },
          {
            type: "paragraph",
            content: "Show cart."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `POST /cart`
          },
          {
            type: "paragraph",
            content: "Add item."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /cart`
          },
          {
            type: "paragraph",
            content: "Remove item."
          },
          {
            type: "paragraph",
            content: "Same URL."
          },
          {
            type: "paragraph",
            content:
              "Different operations."
          },
          {
            type: "paragraph",
            content:
              "Without checking the method, the server wouldn't know what the client wants."
          }
        ]
      },

      {
        heading: "What is a Route?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A route is simply:"
          },
          {
            type: "code",
            language: "text",
            content: `HTTP Method

+

URL

↓

Handler Function`
          },
          {
            type: "paragraph",
            content: "For example"
          },
          {
            type: "code",
            language: "text",
            content: `GET /

↓

Home Handler`
          },
          {
            type: "code",
            language: "text",
            content: `GET /about

↓

About Handler`
          },
          {
            type: "code",
            language: "text",
            content: `POST /login

↓

Login Handler`
          }
        ]
      },

      {
        heading: "Route Handler",
        blocks: [
          {
            type: "paragraph",
            content:
              "The code that executes after a route matches is called the **route handler**."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/about") {

    res.end("About Page");

}`
          },
          {
            type: "paragraph",
            content:
              "Everything inside the `if` block is the handler."
          }
        ]
      },

      {
        heading: "Creating a Proper 404 Page",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every server should handle unknown URLs."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.statusCode = 404;

res.end("Page Not Found");`
          },
          {
            type: "paragraph",
            content: "A browser requesting"
          },
          {
            type: "code",
            language: "text",
            content: `/unknown`
          },
          {
            type: "paragraph",
            content:
              "should receive"
          },
          {
            type: "output",
            content: ["404 Not Found"]
          },
          {
            type: "paragraph",
            content:
              "instead of crashing the server."
          }
        ]
      },

      {
        heading: "Better 404 Response",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404, {
    "Content-Type": "text/html"
});

res.end("<h1>404 - Page Not Found</h1>");`
          },
          {
            type: "paragraph",
            content:
              "Now browsers render a proper HTML page."
          }
        ]
      },

      {
        heading: "Why a 404 Route Is Important",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Requests may hang.",
              "Users get confusing behavior.",
              "Browsers wait indefinitely.",
              "APIs become inconsistent."
            ]
          },
          {
            type: "paragraph",
            content:
              "Always provide a fallback route."
          }
        ]
      },

      {
        heading: "Manual Routing Becomes Difficult",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your application has"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "10 pages"
            ]
          },
          {
            type: "code",
            language: "text",
            content: `if...

else if...

else if...

else if...`
          },
          {
            type: "paragraph",
            content:
              "Already large."
          },
          {
            type: "paragraph",
            content: "Now imagine"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "200 routes",
              "or",
              "1000 API endpoints"
            ]
          },
          {
            type: "paragraph",
            content:
              "The code becomes nearly impossible to maintain."
          },
          {
            type: "paragraph",
            content:
              "This is exactly why frameworks like Express exist."
          },
          {
            type: "paragraph",
            content:
              "But understanding manual routing helps you understand what Express is doing internally."
          }
        ]
      },

      {
        heading: "A Simple Router Design",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of writing hundreds of `if` statements, we can organize routes."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `function router(req, res) {

    if (req.url === "/") {
        res.end("Home");
        return;
    }

    if (req.url === "/about") {
        res.end("About");
        return;
    }

    res.statusCode = 404;
    res.end("Not Found");

}`
          },
          {
            type: "paragraph",
            content: "Then"
          },
          {
            type: "code",
            language: "javascript",
            content: `const server = http.createServer(router);`
          },
          {
            type: "paragraph",
            content:
              "Now the server code is cleaner."
          }
        ]
      },

      {
        heading: "Using switch Instead of if",
        blocks: [
          {
            type: "paragraph",
            content:
              "Some developers prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `switch (req.url) {

    case "/":

        res.end("Home");

        break;

    case "/about":

        res.end("About");

        break;

    default:

        res.statusCode = 404;

        res.end("Not Found");

}`
          },
          {
            type: "paragraph",
            content:
              "This is often easier to read for many routes."
          }
        ]
      },

      {
        heading: "Route Organization",
        blocks: [
          {
            type: "paragraph",
            content:
              "As applications grow, routes should be grouped."
          },
          {
            type: "paragraph",
            content: "Example project"
          },
          {
            type: "tree",
            content: `project/

│

├── server.js

├── routes/

│      home.js

│      users.js

│      products.js

│      auth.js

└── controllers/`
          },
          {
            type: "paragraph",
            content:
              "Instead of putting every route inside one huge file, each feature gets its own route module."
          },
          {
            type: "paragraph",
            content:
              "This makes large applications easier to maintain."
          }
        ]
      },

      {
        heading: "REST-Style Routing Basics",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern backend applications commonly follow **REST (Representational State Transfer)** conventions."
          },
          {
            type: "paragraph",
            content:
              "Instead of creating URLs like:"
          },
          {
            type: "code",
            language: "text",
            content: `/getUsers`
          },
          {
            type: "paragraph",
            content: "REST prefers:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content: "Similarly:"
          },
          {
            type: "table",
            headers: ["Method", "URL", "Meaning"],
            rows: [
              ["GET", "/users", "Retrieve all users"],
              ["GET", "/users/5", "Retrieve a single user"],
              ["POST", "/users", "Create a new user"],
              ["PUT", "/users/5", "Replace an existing user"],
              ["PATCH", "/users/5", "Partially update a user"],
              ["DELETE", "/users/5", "Delete a user"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Notice that the URL represents the resource, while the HTTP method represents the action."
          },
          {
            type: "paragraph",
            content:
              "This makes APIs predictable and easy to understand."
          }
        ]
      },

      {
        heading: "Example REST Router",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/products" && req.method === "GET") {

    res.end("All Products");

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/products" && req.method === "POST") {

    res.end("Product Created");

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/products" && req.method === "DELETE") {

    res.end("Delete Product");

}`
          },
          {
            type: "paragraph",
            content: "Same route."
          },
          {
            type: "paragraph",
            content:
              "Different HTTP methods."
          }
        ]
      },

      {
        heading: "Real-World Routing Flow",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose a user logs into an e-commerce website."
          },
          {
            type: "code",
            language: "text",
            content: `GET /
↓
Home Page

↓

GET /products
↓
Product List

↓

GET /products/25
↓
Product Details

↓

POST /cart
↓
Add Item

↓

GET /checkout
↓
Checkout Page`
          },
          {
            type: "paragraph",
            content:
              "Every click triggers a new route."
          }
        ]
      },

      {
        heading: "Route Matching Order Matters",
        blocks: [
          {
            type: "paragraph",
            content:
              "Consider this code:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url.startsWith("/users")) {

    res.end("Users");

}

else if (req.url === "/users/admin") {

    res.end("Admin");

}`
          },
          {
            type: "paragraph",
            content: "Request:"
          },
          {
            type: "code",
            language: "text",
            content: `/users/admin`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: ["Users"]
          },
          {
            type: "paragraph",
            content:
              "The second route is never reached because the first condition already matches."
          },
          {
            type: "paragraph",
            content:
              "Always place more specific routes before more general ones."
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
                question: "Forgetting the HTTP Method",
                answer:
                  "This matches every HTTP method, which can lead to unexpected behavior.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `if (req.url === "/login") {

}`
                  },
                  {
                    title: "Better",
                    language: "javascript",
                    content: `if (
    req.url === "/login" &&
    req.method === "POST"
)`
                  }
                ]
              },
              {
                question: "Missing 404 Handler",
                answer:
                  "Never assume every URL exists. Always include a fallback route."
              },
              {
                question: "Comparing Query Strings Incorrectly",
                answer:
                  "This fails for `/users?page=2` because `req.url` includes the query string. Use the `URL` class to parse the pathname.",
                examples: [
                  {
                    title: "This fails",
                    language: "javascript",
                    content: `if (req.url === "/users")`
                  },
                  {
                    title: "Correct approach",
                    language: "javascript",
                    content: `const url = new URL(req.url, \`http://\${req.headers.host}\`);

if (url.pathname === "/users") {
    res.end("Users");
}`
                  }
                ]
              },
              {
                question: "Sending Multiple Responses",
                answer:
                  "The second `res.end()` causes an error because only one response can be sent. Return immediately after sending a response or structure your routing with `else if`.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `if (req.url === "/") {

    res.end("Home");

}

res.end("Done");`
                  }
                ]
              },
              {
                question: "Mixing Business Logic with Routing",
                answer:
                  "Avoid writing database queries or large business logic directly inside routing conditions. Instead, use a layered approach: Route → Controller → Business Logic → Database. This keeps your code modular and easier to test."
              }
            ]
          }
        ]
      },

      {
        heading: "How Frameworks Like Express Improve Routing",
        blocks: [
          {
            type: "paragraph",
            content:
              "The manual routing you've learned in this lesson is exactly what Express builds upon."
          },
          {
            type: "paragraph",
            content:
              "Instead of writing:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/users" && req.method === "GET") {

}`
          },
          {
            type: "paragraph",
            content: "Express lets you write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/users", (req, res) => {
    res.send("Users");
});`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.post("/users", (req, res) => {
    res.send("User Created");
});`
          },
          {
            type: "paragraph",
            content:
              "Internally, Express still performs route matching—it simply provides a cleaner, more powerful API with support for route parameters, middleware, nested routers, and much more."
          },
          {
            type: "paragraph",
            content:
              "Understanding manual routing first gives you a much deeper understanding of how these frameworks actually work."
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
              "Always route using both URL and HTTP method whenever appropriate.",
              "Return a proper 404 Not Found response for unknown routes.",
              "Keep route handlers focused on routing; move business logic into separate modules or controllers.",
              "Organize routes by feature as your application grows.",
              "Follow REST-style URL conventions for APIs instead of action-based URLs.",
              "Match specific routes before generic ones to avoid accidental matches.",
              "Parse URLs correctly when handling query parameters instead of comparing raw `req.url` strings.",
              "Ensure each request sends exactly one response.",
              "Keep route names simple, consistent, and descriptive.",
              "As projects become larger, use a dedicated routing framework (such as Express) to improve maintainability, while remembering that it ultimately builds on the same routing principles covered in this lesson."
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
              "Routing is the process of matching incoming HTTP requests to specific server-side handlers based on the request URL and HTTP method.",
              "The `http` module provides `req.url` and `req.method` to identify each request.",
              "A route is defined by combining an HTTP method, a URL path, and a handler function.",
              "Every server should include a default 404 route to handle unknown URLs.",
              "Routing logic can be organized using `if/else` statements, `switch` statements, or separate route modules.",
              "RESTful routing uses the URL to identify resources and the HTTP method to specify the operation.",
              "REST conventions make APIs more predictable and easier to work with.",
              "As applications grow, manual routing becomes harder to maintain, which is why frameworks like Express provide cleaner abstractions.",
              "Understanding manual routing helps you understand what frameworks like Express are doing under the hood."
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
              "Routing is one of the most fundamental concepts in backend development. It allows a single server to handle many different URLs and HTTP methods, serving different content or performing different operations based on the request. Using the core `http` module, you can implement routing manually by checking `req.url` and `req.method` with conditional logic."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned how to implement manual routing with the `http` module, the importance of both URL and method for routing decisions, how to handle 404 errors, RESTful routing conventions, how to organize routes as applications grow, and why frameworks like Express build on these same fundamentals."
          },
          {
            type: "paragraph",
            content:
              "Mastering manual routing gives you a deeper understanding of how web servers work at a low level, making you better equipped to work with any framework or library that builds on top of Node.js' HTTP module."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misconceptions about routing is that the URL alone determines what code runs. In reality, HTTP method is equally important, especially when building REST APIs. The same URL with different methods—`GET /users`, `POST /users`, `DELETE /users`—performs completely different operations.\n\nAnother subtle point is that routing order matters. Node executes the first matching condition. If you place a generic route (`/users`) before a more specific one (`/users/admin`), the generic route will always match first, preventing the specific route from ever being reached. Always place more specific routes before broader ones.\n\nThink of routing as the entry point to your application's logic. Just as a receptionist directs visitors to different departments based on who they are and what they need, a router directs HTTP requests to different handlers based on the URL and method. A well-designed router makes your application predictable, maintainable, and easy to extend as new features are added."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Serving HTML
============================= */
    "nodejs-serving-html": {
    title: "Serving HTML",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Primary Focus: Returning Web Pages",
        blocks: [
          {
            type: "paragraph",
            content:
              "Until now, our Node.js server has been sending plain text responses like:"
          },
          {
            type: "output",
            content: ["Hello World"]
          },
          {
            type: "paragraph",
            content:
              "While this is useful for understanding how an HTTP server works, real websites don't send plain text—they send HTML documents."
          },
          {
            type: "paragraph",
            content:
              "Whenever you visit websites like Google, GitHub, Amazon, or YouTube, the server responds with HTML, which the browser interprets and renders into a visual web page."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how Node.js serves HTML to browsers, how to send HTML strings and HTML files, why the `Content-Type` header matters, how dynamic HTML works, and the basic idea behind template engines used by frameworks like Express."
          }
        ]
      },

      {
        heading: "What Does 'Serving HTML' Mean?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Serving HTML means sending an HTML document from the server to the client as an HTTP response."
          },
          {
            type: "paragraph",
            content:
              "The browser receives the HTML, parses it, builds the DOM (Document Object Model), downloads any linked CSS and JavaScript files, and finally renders the webpage on the screen."
          },
          {
            type: "paragraph",
            content: "The process looks like this:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser

↓

GET /

↓

Node.js Server

↓

Reads or Generates HTML

↓

Sends HTML Response

↓

Browser Parses HTML

↓

Page Appears`
          },
          {
            type: "paragraph",
            content:
              "This is the foundation of every traditional website."
          }
        ]
      },

      {
        heading: "Why Servers Send HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "A browser understands many types of content:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML",
              "CSS",
              "JavaScript",
              "Images",
              "Videos",
              "JSON",
              "Fonts",
              "PDFs"
            ]
          },
          {
            type: "paragraph",
            content:
              "When a user requests a webpage, the browser expects an HTML document as the primary response."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /`
          },
          {
            type: "paragraph",
            content: "Server returns:"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Welcome!</h1>
</body>
</html>`
          },
          {
            type: "paragraph",
            content:
              "The browser converts this into a visible webpage."
          }
        ]
      },

      {
        heading: "Sending HTML Directly",
        blocks: [
          {
            type: "paragraph",
            content:
              "The simplest approach is sending an HTML string."
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(\`
        <h1>Welcome</h1>
        <p>This page comes from Node.js.</p>
    \`);

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Welcome", "This page comes from Node.js."]
          },
          {
            type: "paragraph",
            content:
              "The browser renders HTML instead of displaying raw tags."
          }
        ]
      },

      {
        heading: "Why Content-Type Matters",
        blocks: [
          {
            type: "paragraph",
            content:
              "Whenever the server sends data, it should tell the browser what type of data it is sending."
          },
          {
            type: "paragraph",
            content:
              "This is done using the Content-Type response header."
          },
          {
            type: "paragraph",
            content: "For HTML:"
          },
          {
            type: "code",
            language: "text",
            content: `Content-Type: text/html`
          },
          {
            type: "paragraph",
            content:
              "Without this header, browsers may interpret the response incorrectly."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("<h1>Hello</h1>");`
          },
          {
            type: "paragraph",
            content:
              "Without `text/html`, some clients may treat it as plain text."
          },
          {
            type: "paragraph",
            content: "With:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/html");`
          },
          {
            type: "paragraph",
            content:
              "the browser knows it should parse HTML."
          }
        ]
      },

      {
        heading: "Understanding Browser Rendering",
        blocks: [
          {
            type: "paragraph",
            content: "When HTML reaches the browser:"
          },
          {
            type: "code",
            language: "text",
            content: `Node Server

↓

HTML Document

↓

Browser

↓

HTML Parser

↓

DOM Tree

↓

CSS Applied

↓

JavaScript Executes

↓

Rendered Webpage`
          },
          {
            type: "paragraph",
            content:
              "Node.js only sends data."
          },
          {
            type: "paragraph",
            content:
              "The browser is responsible for rendering it."
          }
        ]
      },

      {
        heading: "Sending Multi-Line HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "Using template literals makes HTML much easier to write."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(\`
<!DOCTYPE html>
<html>

<head>
    <title>Node Server</title>
</head>

<body>

<h1>Hello Node.js</h1>

<p>Learning HTTP Server</p>

</body>

</html>
\`);`
          },
          {
            type: "paragraph",
            content:
              "This approach is common for small demonstrations."
          }
        ]
      },

      {
        heading: "Why Inline HTML Isn't Ideal",
        blocks: [
          {
            type: "paragraph",
            content:
              "Although sending HTML strings works, large pages become difficult to maintain."
          },
          {
            type: "paragraph",
            content: "Imagine writing hundreds of lines like:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(\`
...
300 lines of HTML...
...
\`);`
          },
          {
            type: "paragraph",
            content: "Problems include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Poor readability",
              "Difficult maintenance",
              "No syntax highlighting",
              "Hard collaboration",
              "Mixing server code with HTML"
            ]
          },
          {
            type: "paragraph",
            content:
              "Instead, production applications usually store HTML in separate files."
          }
        ]
      },

      {
        heading: "Serving an HTML File",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your project looks like this:"
          },
          {
            type: "tree",
            content: `project/

│

├── server.js

└── index.html`
          },
          {
            type: "paragraph",
            content: "index.html"
          },
          {
            type: "code",
            language: "html",
            content: `<!DOCTYPE html>

<html>

<head>

<title>Home</title>

</head>

<body>

<h1>Welcome to Node.js</h1>

</body>

</html>`
          },
          {
            type: "paragraph",
            content:
              "Now the server reads the file before sending it."
          }
        ]
      },

      {
        heading: "Reading HTML Using fs",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {

    fs.readFile("index.html", (err, data) => {

        if (err) {

            res.statusCode = 500;
            res.end("Server Error");

            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);

    });

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "Now the browser receives the contents of `index.html`."
          }
        ]
      },

      {
        heading: "Why Reading HTML Files Is Better",
        blocks: [
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner code",
              "Easier editing",
              "Designers can edit HTML",
              "Better project organization",
              "HTML syntax highlighting",
              "Reusable pages"
            ]
          },
          {
            type: "paragraph",
            content:
              "Nearly every web application follows this approach."
          }
        ]
      },

      {
        heading: "Serving Different HTML Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `/

↓

index.html

/about

↓

about.html

/contact

↓

contact.html`
          },
          {
            type: "paragraph",
            content:
              "Routing determines which HTML file is served."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/") {

    // Serve index.html

}

else if (req.url === "/about") {

    // Serve about.html

}`
          }
        ]
      },

      {
        heading: "Reusing a Helper Function",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of repeating file-reading logic for every route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function serveHTML(file, res) {

    fs.readFile(file, (err, data) => {

        if (err) {

            res.statusCode = 500;
            res.end("Error");

            return;

        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);

    });

}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/") {

    serveHTML("index.html", res);

}

else if (req.url === "/about") {

    serveHTML("about.html", res);

}`
          },
          {
            type: "paragraph",
            content:
              "This keeps routing much cleaner."
          }
        ]
      },

      {
        heading: "Handling Missing HTML Files",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "text",
            content: `about.html`
          },
          {
            type: "paragraph",
            content:
              "does not exist."
          },
          {
            type: "paragraph",
            content:
              "`fs.readFile()` returns an error."
          },
          {
            type: "paragraph",
            content:
              "Always handle it properly."
          },
          {
            type: "code",
            language: "javascript",
            content: `if (err) {

    res.writeHead(500);

    res.end("Unable to load page");

    return;

}`
          },
          {
            type: "paragraph",
            content:
              "For missing routes, it's even better to return a proper 404 page."
          }
        ]
      },

      {
        heading: "Serving a Custom 404 HTML Page",
        blocks: [
          {
            type: "paragraph",
            content: "Project:"
          },
          {
            type: "code",
            language: "text",
            content: `index.html

about.html

404.html`
          },
          {
            type: "paragraph",
            content: "Unknown route:"
          },
          {
            type: "code",
            language: "javascript",
            content: `serveHTML("404.html", res);`
          },
          {
            type: "paragraph",
            content: "Response:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404, {
    "Content-Type": "text/html"
});`
          },
          {
            type: "paragraph",
            content:
              "Users now see a professional 'Page Not Found' page."
          }
        ]
      },

      {
        heading: "Serving HTML vs Plain Text",
        blocks: [
          {
            type: "paragraph",
            content: "Plain text:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("Hello");`
          },
          {
            type: "paragraph",
            content: "Browser shows:"
          },
          {
            type: "output",
            content: ["Hello"]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "HTML:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end("<h1>Hello</h1>");`
          },
          {
            type: "paragraph",
            content: "Browser shows:"
          },
          {
            type: "paragraph",
            content: "# Hello"
          },
          {
            type: "paragraph",
            content:
              "The browser interprets HTML tags rather than displaying them."
          }
        ]
      },

      {
        heading: "Dynamic HTML",
        blocks: [
          {
            type: "paragraph",
            content:
              "So far every HTML page has been static."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>Welcome</h1>`
          },
          {
            type: "paragraph",
            content:
              "Every visitor sees exactly the same page."
          },
          {
            type: "paragraph",
            content:
              "Dynamic HTML changes depending on data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const username = "Faiz";

res.end(\`
<h1>Welcome \${username}</h1>
\`);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ["Welcome Faiz"]
          },
          {
            type: "paragraph",
            content:
              "Now the server generates HTML dynamically."
          }
        ]
      },

      {
        heading: "More Dynamic Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const products = [
    "Laptop",
    "Phone",
    "Tablet"
];`
          },
          {
            type: "paragraph",
            content: "Generate HTML:"
          },
          {
            type: "code",
            language: "javascript",
            content: `let html = "<ul>";

for (const item of products) {

    html += \`<li>\${item}</li>\`;

}

html += "</ul>";

res.end(html);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "html",
            content: `<ul>

<li>Laptop</li>

<li>Phone</li>

<li>Tablet</li>

</ul>`
          },
          {
            type: "paragraph",
            content:
              "The browser renders a list automatically."
          }
        ]
      },

      {
        heading: "Where Dynamic HTML Is Used",
        blocks: [
          {
            type: "paragraph",
            content:
              "Dynamic HTML powers almost every server-rendered website."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "paragraph",
            content: "E-commerce"
          },
          {
            type: "output",
            content: [
              "Product Name",
              "Price",
              "Stock"
            ]
          },
          {
            type: "paragraph",
            content:
              "comes from a database."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Social Media"
          },
          {
            type: "output",
            content: [
              "Posts",
              "Comments",
              "Likes"
            ]
          },
          {
            type: "paragraph",
            content:
              "are inserted into HTML before sending it."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "News Website"
          },
          {
            type: "output",
            content: [
              "Headline",
              "Author",
              "Date"
            ]
          },
          {
            type: "paragraph",
            content:
              "changes every request."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Dashboard"
          },
          {
            type: "output",
            content: [
              "Logged-in User",
              "Notifications",
              "Statistics"
            ]
          },
          {
            type: "paragraph",
            content:
              "are generated dynamically."
          }
        ]
      },

      {
        heading: "HTML Templates",
        blocks: [
          {
            type: "paragraph",
            content:
              "Writing large HTML strings in JavaScript quickly becomes difficult."
          },
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(\`
...
500 lines
...
\`);`
          },
          {
            type: "paragraph",
            content:
              "This is hard to maintain."
          },
          {
            type: "paragraph",
            content:
              "Instead, developers use **template engines**."
          },
          {
            type: "paragraph",
            content:
              "A template separates HTML from JavaScript."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const name = "Alice";`
          },
          {
            type: "paragraph",
            content:
              "the HTML contains placeholders."
          },
          {
            type: "paragraph",
            content: "Example concept:"
          },
          {
            type: "code",
            language: "html",
            content: `<h1>{{name}}</h1>`
          },
          {
            type: "paragraph",
            content:
              "The server replaces:"
          },
          {
            type: "code",
            language: "text",
            content: `{{name}}`
          },
          {
            type: "paragraph",
            content: "with"
          },
          {
            type: "code",
            language: "text",
            content: `Alice`
          },
          {
            type: "paragraph",
            content:
              "before sending the page."
          }
        ]
      },

      {
        heading: "Common Template Engines",
        blocks: [
          {
            type: "paragraph",
            content:
              "Popular Node.js template engines include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "EJS",
              "Pug",
              "Handlebars",
              "Nunjucks",
              "Mustache"
            ]
          },
          {
            type: "paragraph",
            content:
              "Frameworks like Express integrate these easily."
          },
          {
            type: "paragraph",
            content:
              "You'll learn template engines in later lessons."
          }
        ]
      },

      {
        heading: "HTML Escaping",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose user input is:"
          },
          {
            type: "code",
            language: "text",
            content: `<script>alert("Hack")</script>`
          },
          {
            type: "paragraph",
            content:
              "If inserted directly into HTML:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(\`
<h1>\${username}</h1>
\`);`
          },
          {
            type: "paragraph",
            content:
              "the browser executes the script."
          },
          {
            type: "paragraph",
            content:
              "This becomes a Cross-Site Scripting (XSS) vulnerability."
          },
          {
            type: "paragraph",
            content:
              "Always escape or sanitize user-generated content before inserting it into HTML."
          },
          {
            type: "paragraph",
            content:
              "Modern template engines escape content automatically by default."
          }
        ]
      },

      {
        heading: "HTML and CSS",
        blocks: [
          {
            type: "paragraph",
            content:
              "HTML rarely exists alone."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet" href="style.css">`
          },
          {
            type: "paragraph",
            content:
              "When the browser sees this:"
          },
          {
            type: "code",
            language: "text",
            content: `HTML

↓

Requests style.css

↓

Server sends CSS

↓

Browser applies styles`
          },
          {
            type: "paragraph",
            content:
              "Serving CSS files will be covered in the 'Serving Static Files' lesson."
          }
        ]
      },

      {
        heading: "HTML and JavaScript",
        blocks: [
          {
            type: "paragraph",
            content: "Likewise:"
          },
          {
            type: "code",
            language: "html",
            content: `<script src="app.js"></script>`
          },
          {
            type: "paragraph",
            content:
              "The browser automatically requests:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /app.js`
          },
          {
            type: "paragraph",
            content:
              "The server must serve that JavaScript file."
          }
        ]
      },

      {
        heading: "HTML Response Lifecycle",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Browser

↓

GET /

↓

Node Server

↓

Route Matching

↓

Read HTML File

↓

Set Content-Type

↓

Send HTML

↓

Browser Parses HTML

↓

Downloads CSS

↓

Downloads JavaScript

↓

Displays Page`
          },
          {
            type: "paragraph",
            content:
              "This sequence happens every time a webpage is loaded."
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
                question: "Forgetting Content-Type",
                answer:
                  "Always set the correct content type for HTML responses.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.end(data);`
                  },
                  {
                    title: "Better",
                    language: "javascript",
                    content: `res.setHeader(
    "Content-Type",
    "text/html"
);`
                  }
                ]
              },
              {
                question: "Using Blocking File Reads",
                answer:
                  "`fs.readFileSync()` blocks the event loop and reduces server performance. Prefer asynchronous methods like `fs.readFile()` or Promise-based APIs."
              },
              {
                question: "Mixing HTML with Business Logic",
                answer:
                  "Avoid huge JavaScript files filled with HTML strings. Separate HTML, business logic, database logic, and routing to improve maintainability."
              },
              {
                question: "Ignoring Errors",
                answer:
                  "Always check `if (err)` when reading files. Otherwise your server may crash when files are missing."
              },
              {
                question: "Hardcoding Repeated HTML",
                answer:
                  "Avoid duplicating headers, footers, or navigation across many pages. Template engines and layouts solve this problem by allowing reusable page components."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Project Structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "A simple project may look like this:"
          },
          {
            type: "tree",
            content: `project/

│

├── server.js

├── pages/

│     index.html

│     about.html

│     contact.html

│     404.html

├── css/

├── js/

└── images/`
          },
          {
            type: "paragraph",
            content:
              "Keeping HTML files in a dedicated directory makes the project easier to navigate and scale."
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
              "Always send the correct `Content-Type: text/html` header when returning HTML.",
              "Store HTML in separate files instead of embedding large HTML strings directly in JavaScript.",
              "Use asynchronous file operations (`fs.readFile()` or `fs/promises`) to avoid blocking the event loop.",
              "Handle file read errors gracefully and return meaningful HTTP status codes.",
              "Create a custom `404.html` page for unknown routes to improve user experience.",
              "Keep routing logic, HTML templates, and business logic separated for cleaner code.",
              "Sanitize or escape user-generated content before inserting it into HTML to prevent XSS attacks.",
              "Use helper functions for serving HTML files to avoid code duplication.",
              "Organize pages into dedicated folders as your application grows.",
              "As projects become more complex, consider using template engines (such as EJS or Handlebars) for reusable layouts and dynamic content instead of manually constructing HTML strings."
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
              "Serving HTML means sending an HTML document as an HTTP response.",
              "The `Content-Type: text/html` header tells the browser to interpret the response as HTML.",
              "HTML can be sent as a string directly or read from a file using `fs.readFile()`.",
              "Reading HTML from separate files keeps code cleaner and easier to maintain.",
              "Dynamic HTML is generated by inserting data into HTML before sending it.",
              "Manually constructing HTML strings in JavaScript becomes hard to maintain at scale.",
              "Template engines provide a cleaner way to generate dynamic HTML with reusable layouts and built-in escaping for security.",
              "Always escape user input to prevent XSS vulnerabilities."
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
              "Serving HTML is one of the most fundamental tasks of any web server. While Node.js can send HTML as plain strings, real-world applications store HTML in separate files, read them asynchronously, and combine them with dynamic data to create personalized web pages."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned how to send HTML strings and HTML files, why the `Content-Type: text/html` header is essential, how to serve different pages using routing, how to handle missing files, the basics of dynamic HTML, the importance of HTML escaping for security, and how template engines help manage complex HTML layouts."
          },
          {
            type: "paragraph",
            content:
              "In the next lesson, you'll learn how to serve CSS, JavaScript, images, and other static files so your HTML pages can include styles, interactivity, and visual assets—making them complete modern web pages."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misconceptions about serving HTML is that the HTML file is what the browser actually renders. In reality, the browser receives the HTML and then requests all the linked CSS, JavaScript, and images separately. This means a single HTML response often triggers multiple additional requests from the browser to the server.\n\nAnother subtle point is that the `Content-Type` header is not optional. Without `text/html`, some browsers may render the response as plain text or attempt to download it as a file. This is one of the most common mistakes beginners make when first working with HTTP servers.\n\nThink of the HTML document as the skeleton of your webpage. It provides the structure, but CSS adds the styling and JavaScript adds the interactivity. Node.js doesn't need to know about CSS or JavaScript—it simply serves the files when the browser requests them. Understanding this separation of responsibilities is key to building efficient web servers."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Serving JSON
============================= */
    "nodejs-serving-json": {
    title: "",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Primary Focus: Building APIs",
        blocks: [
          {
            type: "paragraph",
            content:
              "Until now, we've learned how to serve HTML pages from a Node.js server. That approach is perfect for traditional websites where the server generates the webpage."
          },
          {
            type: "paragraph",
            content:
              "However, modern web applications work differently."
          },
          {
            type: "paragraph",
            content:
              "When you open applications like Instagram, Facebook, YouTube, Gmail, or an online banking app, the server often doesn't send HTML for every interaction. Instead, it sends JSON data, and JavaScript running in the browser updates the page dynamically."
          },
          {
            type: "paragraph",
            content:
              "This is the foundation of modern frontend frameworks like React, Angular, Vue, Next.js, Nuxt, Svelte, and mobile applications built using Flutter or React Native."
          },
          {
            type: "paragraph",
            content:
              "Learning how to serve JSON is one of the most important skills in backend development because almost every modern backend today is essentially an API server."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn how JSON responses work, how to send JavaScript objects and arrays as JSON, why `JSON.stringify()` is required, how API endpoints are designed, how frontend applications communicate with backend servers, and the basic REST concepts that power modern web development."
          }
        ]
      },

      {
        heading: "What is JSON?",
        blocks: [
          {
            type: "paragraph",
            content:
              "JSON (JavaScript Object Notation) is a lightweight data format used for exchanging information between applications."
          },
          {
            type: "paragraph",
            content:
              "Although JSON was inspired by JavaScript object syntax, it is a language-independent data format supported by virtually every programming language."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Alice",
    "age": 25,
    "city": "London"
}`
          },
          {
            type: "paragraph",
            content:
              "Unlike HTML, JSON is not meant for display. It is meant for transferring structured data."
          }
        ]
      },

      {
        heading: "Why JSON Exists",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine an online shopping application."
          },
          {
            type: "paragraph",
            content:
              "The browser asks the server:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content:
              "Instead of sending an HTML page, the server sends data like:"
          },
          {
            type: "code",
            language: "json",
            content: `[
    {
        "id": 1,
        "name": "Laptop",
        "price": 79999
    },
    {
        "id": 2,
        "name": "Phone",
        "price": 24999
    }
]`
          },
          {
            type: "paragraph",
            content:
              "The frontend (React, Angular, Vue, etc.) receives this JSON and decides how to display it."
          },
          {
            type: "paragraph",
            content:
              "This separation makes applications more flexible."
          }
        ]
      },

      {
        heading: "Why Modern Applications Prefer JSON",
        blocks: [
          {
            type: "paragraph",
            content: "Sending HTML means:"
          },
          {
            type: "code",
            language: "text",
            content: `Server

↓

Creates HTML

↓

Browser Displays Page`
          },
          {
            type: "paragraph",
            content: "Sending JSON means:"
          },
          {
            type: "code",
            language: "text",
            content: `Server

↓

Sends Data

↓

Frontend Builds UI`
          },
          {
            type: "paragraph",
            content: "This allows:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dynamic interfaces",
              "Faster page updates",
              "Mobile app support",
              "Single backend for multiple clients",
              "Better separation of responsibilities"
            ]
          }
        ]
      },

      {
        heading: "HTML vs JSON",
        blocks: [
          {
            type: "table",
            headers: ["HTML", "JSON"],
            rows: [
              ["Displays webpages", "Transfers data"],
              ["Parsed by browsers", "Parsed by applications"],
              ["Contains tags", "Contains key-value pairs"],
              ["Used for UI", "Used for APIs"],
              ["Human-readable webpage", "Machine-readable data"]
            ]
          }
        ]
      },

      {
        heading: "Serving JSON in Node.js",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we have an object:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {
    name: "Alice",
    age: 24
};`
          },
          {
            type: "paragraph",
            content:
              "We cannot directly send it like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(user);`
          },
          {
            type: "paragraph",
            content:
              "This causes an error because `res.end()` expects:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "String",
              "Buffer",
              "Uint8Array"
            ]
          },
          {
            type: "paragraph",
            content:
              "Node.js cannot automatically convert an object into JSON."
          }
        ]
      },

      {
        heading: "Why JSON.stringify() is Required",
        blocks: [
          {
            type: "paragraph",
            content:
              "To send an object, convert it into a JSON string."
          },
          {
            type: "code",
            language: "javascript",
            content: `const json = JSON.stringify(user);

res.end(json);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: ['{"name":"Alice","age":24}']
          },
          {
            type: "paragraph",
            content:
              "The browser receives a valid JSON response."
          }
        ]
      },

      {
        heading: "Sending JSON Correctly",
        blocks: [
          {
            type: "paragraph",
            content:
              "Always specify the correct Content-Type."
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    const user = {
        id: 1,
        name: "Alice"
    };

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(user));

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Response:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id": 1,
    "name": "Alice"
}`
          }
        ]
      },

      {
        heading: "Why Content-Type Matters",
        blocks: [
          {
            type: "paragraph",
            content:
              "When returning JSON, always send:"
          },
          {
            type: "code",
            language: "text",
            content: `Content-Type: application/json`
          },
          {
            type: "paragraph",
            content:
              "This tells clients:"
          },
          {
            type: "quote",
            content: "The response contains JSON."
          },
          {
            type: "paragraph",
            content: "Without this header:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browsers may guess incorrectly.",
              "API clients may fail to parse the response.",
              "Frontend libraries may not recognize the response format."
            ]
          }
        ]
      },

      {
        heading: "Sending Arrays",
        blocks: [
          {
            type: "paragraph",
            content:
              "JSON is not limited to objects."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
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
            content: "Response:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(JSON.stringify(products));`
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
        "id":1,
        "name":"Laptop"
    },
    {
        "id":2,
        "name":"Phone"
    }
]`
          },
          {
            type: "paragraph",
            content:
              "Arrays are commonly returned when listing resources."
          }
        ]
      },

      {
        heading: "Sending Nested JSON",
        blocks: [
          {
            type: "paragraph",
            content:
              "JSON can contain nested objects."
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = {

    id: 1,

    name: "Alice",

    address: {

        city: "London",

        country: "UK"

    }

};`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id":1,
    "name":"Alice",
    "address":{
        "city":"London",
        "country":"UK"
    }
}`
          },
          {
            type: "paragraph",
            content:
              "Nested JSON is extremely common in APIs."
          }
        ]
      },

      {
        heading: "API Endpoints",
        blocks: [
          {
            type: "paragraph",
            content:
              "An **API endpoint** is simply a URL that returns data instead of an HTML page."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Returns"
          },
          {
            type: "code",
            language: "json",
            content: `[
    {
        "id":1,
        "name":"Alice"
    }
]`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Another endpoint:"
          },
          {
            type: "code",
            language: "text",
            content: `GET /products`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Returns"
          },
          {
            type: "code",
            language: "json",
            content: `[
    {
        "id":101,
        "name":"Laptop"
    }
]`
          },
          {
            type: "paragraph",
            content:
              "Each endpoint provides a different resource."
          }
        ]
      },

      {
        heading: "Building a Simple JSON API",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    if (req.url === "/users") {

        const users = [

            {
                id: 1,
                name: "Alice"
            },

            {
                id: 2,
                name: "Bob"
            }

        ];

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));

    }

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Opening:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/users`
          },
          {
            type: "paragraph",
            content:
              "returns JSON instead of HTML."
          }
        ]
      },

      {
        heading: "Returning Different JSON for Different Routes",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `if (req.url === "/users") {

    // Return users

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `else if (req.url === "/products") {

    // Return products

}`
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "javascript",
            content: `else if (req.url === "/orders") {

    // Return orders

}`
          },
          {
            type: "paragraph",
            content:
              "This forms the basis of REST APIs."
          }
        ]
      },

      {
        heading: "JSON Responses and HTTP Methods",
        blocks: [
          {
            type: "paragraph",
            content:
              "The same endpoint may perform different actions."
          },
          {
            type: "code",
            language: "text",
            content: `GET /users`
          },
          {
            type: "paragraph",
            content: "Return users."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content: "Create user."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `PUT /users/10`
          },
          {
            type: "paragraph",
            content: "Update user."
          },
          {
            type: "divider"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE /users/10`
          },
          {
            type: "paragraph",
            content: "Delete user."
          },
          {
            type: "paragraph",
            content:
              "The URL identifies the resource."
          },
          {
            type: "paragraph",
            content:
              "The HTTP method identifies the operation."
          }
        ]
      },

      {
        heading: "Basic REST Concepts",
        blocks: [
          {
            type: "paragraph",
            content:
              "REST (Representational State Transfer) is a common way of designing APIs."
          },
          {
            type: "paragraph",
            content: "Typical REST endpoints:"
          },
          {
            type: "table",
            headers: ["Method", "URL", "Purpose"],
            rows: [
              ["GET", "/users", "Fetch users"],
              ["GET", "/users/5", "Fetch one user"],
              ["POST", "/users", "Create user"],
              ["PUT", "/users/5", "Replace user"],
              ["PATCH", "/users/5", "Update user"],
              ["DELETE", "/users/5", "Remove user"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Notice that the URL represents resources, not actions."
          },
          {
            type: "paragraph",
            content: "Avoid URLs like:"
          },
          {
            type: "code",
            language: "text",
            content: `/createUser`
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "text",
            content: `POST /users`
          },
          {
            type: "paragraph",
            content:
              "This makes APIs predictable and easier to use."
          }
        ]
      },

      {
        heading: "Sending Success Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200, {
    "Content-Type": "application/json"
});

res.end(JSON.stringify({

    success: true,

    message: "User fetched"

}));`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": true,
    "message": "User fetched"
}`
          },
          {
            type: "paragraph",
            content:
              "Many APIs include status information alongside the data."
          }
        ]
      },

      {
        heading: "Sending Error Responses",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a user is not found."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404, {
    "Content-Type": "application/json"
});

res.end(JSON.stringify({

    error: "User not found"

}));`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "error":"User not found"
}`
          },
          {
            type: "paragraph",
            content:
              "JSON is equally useful for communicating errors."
          }
        ]
      },

      {
        heading: "Pretty Printing JSON",
        blocks: [
          {
            type: "paragraph",
            content: "By default:"
          },
          {
            type: "code",
            language: "javascript",
            content: `JSON.stringify(user);`
          },
          {
            type: "paragraph",
            content: "returns:"
          },
          {
            type: "output",
            content: ['{"name":"Alice","age":20}']
          },
          {
            type: "paragraph",
            content:
              "For readability during development:"
          },
          {
            type: "code",
            language: "javascript",
            content: `JSON.stringify(user, null, 4);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "name": "Alice",
    "age": 20
}`
          },
          {
            type: "paragraph",
            content:
              "The third argument specifies the indentation."
          },
          {
            type: "note",
            content:
              "Pretty-printing is useful for debugging and development. Production APIs usually send compact JSON to reduce response size."
          }
        ]
      },

      {
        heading: "Frontend Communication",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `React Application

↓

fetch("/api/users")

↓

Node Server

↓

Database

↓

JSON Response

↓

React Receives JSON

↓

Updates UI`
          },
          {
            type: "paragraph",
            content:
              "This architecture powers almost every modern web application."
          }
        ]
      },

      {
        heading: "Browser vs API Client",
        blocks: [
          {
            type: "paragraph",
            content:
              "If you visit a JSON endpoint in a browser:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000/users`
          },
          {
            type: "paragraph",
            content:
              "you'll usually see raw JSON."
          },
          {
            type: "paragraph",
            content: "API tools like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Postman",
              "Insomnia",
              "Thunder Client",
              "curl"
            ]
          },
          {
            type: "paragraph",
            content:
              "display the same JSON in a more readable format."
          }
        ]
      },

      {
        heading: "Common Response Structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many production APIs follow a consistent structure."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Alice"
        }
    ]
}`
          },
          {
            type: "paragraph",
            content: "For errors:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "success": false,
    "error": "Invalid request"
}`
          },
          {
            type: "paragraph",
            content:
              "Keeping responses consistent makes APIs easier to consume."
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
                question: "Forgetting JSON.stringify()",
                answer:
                  "Node.js cannot send JavaScript objects directly. Always use `JSON.stringify()` before sending.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `res.end(user);`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `res.end(JSON.stringify(user));`
                  }
                ]
              },
              {
                question: "Wrong Content-Type",
                answer:
                  "Always use `application/json` for JSON responses, not `text/html`.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "text",
                    content: `Content-Type: text/html`
                  },
                  {
                    title: "Correct",
                    language: "text",
                    content: `Content-Type: application/json`
                  }
                ]
              },
              {
                question: "Returning Invalid JSON",
                answer:
                  "Correct JSON requires double quotes around keys and string values.",
                examples: [
                  {
                    title: "Invalid",
                    language: "text",
                    content: `{name: Alice}`
                  },
                  {
                    title: "Valid",
                    language: "json",
                    content: `{
    "name":"Alice"
}`
                  }
                ]
              },
              {
                question: "Mixing HTML and JSON",
                answer:
                  "Avoid returning HTML from API endpoints. APIs should return data, not presentation.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<h1>User Created</h1>`
                  },
                  {
                    title: "Better",
                    language: "json",
                    content: `{
    "message":"User Created"
}`
                  }
                ]
              },
              {
                question: "Inconsistent Response Formats",
                answer:
                  "Avoid responses like `{\"name\":\"Alice\"}` and elsewhere `{\"userName\":\"Alice\"}`. Use consistent property names and structures across your API."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World API Examples",
        blocks: [
          {
            type: "paragraph",
            content: "A weather API may return:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "city":"Delhi",
    "temperature":34,
    "condition":"Sunny"
}`
          },
          {
            type: "paragraph",
            content: "An e-commerce API may return:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id":101,
    "name":"Laptop",
    "price":79999,
    "stock":12
}`
          },
          {
            type: "paragraph",
            content: "A social media API may return:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "username":"john",
    "followers":2450,
    "posts":120
}`
          },
          {
            type: "paragraph",
            content:
              "Although the data differs, the communication mechanism remains the same: **HTTP + JSON**."
          }
        ]
      },

      {
        heading: "JSON vs HTML: Choosing the Right Response",
        blocks: [
          {
            type: "paragraph",
            content: "Use HTML when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building traditional server-rendered websites.",
              "Returning complete webpages to browsers.",
              "The server is responsible for generating the user interface."
            ]
          },
          {
            type: "paragraph",
            content: "Use JSON when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building REST APIs.",
              "Supporting React, Angular, Vue, or Next.js frontends.",
              "Creating mobile applications.",
              "Exposing services for third-party developers.",
              "Exchanging structured data between systems."
            ]
          },
          {
            type: "paragraph",
            content:
              "Modern applications often combine both approaches. For example, a website might serve an initial HTML page and then fetch additional JSON data through API endpoints to update the interface dynamically."
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
              "Always set the `Content-Type` header to `application/json` when returning JSON.",
              "Convert JavaScript objects and arrays using `JSON.stringify()` before sending them in the response.",
              "Return appropriate HTTP status codes (`200`, `201`, `400`, `404`, `500`, etc.) along with JSON responses.",
              "Design RESTful endpoints using resources (`/users`, `/products`) instead of action-based URLs (`/getUsers`, `/createProduct`).",
              "Keep JSON response structures consistent across your API.",
              "Return informative JSON error messages instead of plain text.",
              "Use pretty-printed JSON only during development or debugging; send compact JSON in production for better performance.",
              "Separate routing, business logic, and data access into different modules as your application grows.",
              "Avoid exposing sensitive information (such as passwords, API keys, or internal server details) in JSON responses.",
              "Design APIs with frontend and mobile clients in mind by returning clean, predictable, and well-structured JSON objects."
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
              "JSON is a lightweight, language-independent data format used to exchange structured data between applications.",
              "Node.js cannot send JavaScript objects directly—they must be converted to JSON strings using `JSON.stringify()`.",
              "Always set `Content-Type: application/json` when returning JSON responses.",
              "API endpoints return JSON data instead of HTML, enabling single backends to serve web, mobile, and other clients.",
              "RESTful APIs use URLs to represent resources and HTTP methods to represent actions.",
              "Consistent JSON response structures make APIs easier for frontend developers to consume and maintain.",
              "JSON APIs power almost all modern web applications, mobile apps, and third-party integrations."
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
              "Serving JSON is one of the most important skills in modern backend development. Unlike HTML, which is designed for display, JSON is designed for data exchange between applications. Almost every modern web application, mobile app, and third-party integration relies on JSON APIs to communicate between frontend and backend systems."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you learned what JSON is, why it exists, how to send JavaScript objects and arrays as JSON using `JSON.stringify()`, why the `Content-Type: application/json` header is essential, how to design RESTful API endpoints, the difference between HTML and JSON responses, common response structures, error handling, and how frontend applications consume JSON data."
          },
          {
            type: "paragraph",
            content:
              "In the next lesson, you'll learn how to serve static files such as CSS, JavaScript, images, and other assets, which are essential for building complete web applications that include styling and interactivity alongside your JSON APIs."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most common misunderstandings about JSON APIs is that they are only for frontend frameworks like React or Angular. In reality, JSON is the universal data format for all types of applications—web frontends, mobile apps (iOS, Android), desktop applications, IoT devices, and even server-to-server communication.\n\nAnother subtle point is that an API endpoint is not just about returning data—it's about returning the right data at the right time with the right status code. A well-designed API should also handle errors gracefully, support pagination for large datasets, filter and sort results, and return consistent response structures that make client-side development predictable and efficient.\n\nThink of a JSON API as a contract between your server and every client that consumes it. Just as a poorly written contract causes confusion and disputes, a poorly designed API causes confusion and bugs. Taking the time to design clean, consistent, and well-documented JSON APIs is one of the most valuable investments you can make as a backend developer."
          }
        ]
      }
    ]
  },




  /* ===========================
    Eighth Topic : Serving Static Files
============================= */
    "nodejs-serving-static-files": {
    title: "Serving Static Files",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern websites are much more than HTML pages. Every webpage depends on dozens (sometimes hundreds) of additional files such as CSS stylesheets, JavaScript bundles, images, icons, fonts, videos, and downloadable documents."
          },
          {
            type: "paragraph",
            content:
              "These files are called static files because the server usually sends them exactly as they are stored on disk, without generating new content for each request."
          },
          {
            type: "paragraph",
            content:
              "Node.js does not automatically serve static files. Unlike frameworks such as Express (using `express.static()`), the built-in HTTP module requires you to implement static file serving yourself."
          },
          {
            type: "paragraph",
            content:
              "Understanding how this works is extremely important because it teaches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "how browsers request resources",
              "how URLs map to files",
              "how HTTP responses are created",
              "how MIME types work",
              "how attackers exploit insecure file servers",
              "why frameworks behave the way they do internally"
            ]
          },
          {
            type: "paragraph",
            content:
              "In this lesson you'll build the mental model behind every static file server."
          }
        ]
      },

      {
        heading: "What Are Static Files?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A static file is any file whose contents are sent directly to the client without server-side processing."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML files",
              "CSS files",
              "JavaScript files",
              "PNG images",
              "JPEG images",
              "SVG icons",
              "Fonts",
              "PDF files",
              "Videos",
              "Audio files"
            ]
          },
          {
            type: "paragraph",
            content: "Example project:"
          },
          {
            type: "tree",
            content: `project/
│
├── server.js
│
└── public/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── logo.png
    └── favicon.ico`
          },
          {
            type: "paragraph",
            content: "When the browser requests"
          },
          {
            type: "output",
            content: "GET /"
          },
          {
            type: "paragraph",
            content: "the server returns"
          },
          {
            type: "output",
            content: "public/index.html"
          },
          {
            type: "paragraph",
            content: "Inside HTML:"
          },
          {
            type: "code",
            language: "html",
            content: `<link rel="stylesheet" href="/style.css">
<script src="/app.js"></script>
<img src="/logo.png">`
          },
          {
            type: "paragraph",
            content:
              "The browser automatically makes three more HTTP requests:"
          },
          {
            type: "output",
            content: ["GET /style.css", "GET /app.js", "GET /logo.png"]
          },
          {
            type: "paragraph",
            content:
              "The server must know how to respond to each of them."
          }
        ]
      },

      {
        heading: "Why Static File Serving Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Without static file serving:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "no CSS",
              "no JavaScript",
              "no images",
              "no icons",
              "no fonts"
            ]
          },
          {
            type: "paragraph",
            content: "The page would be plain HTML."
          },
          {
            type: "paragraph",
            content:
              "Every website—from Google to GitHub—serves thousands of static assets every second."
          }
        ]
      },

      {
        heading: "Browser Request Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a browser opening:"
          },
          {
            type: "output",
            content: "http://localhost:3000"
          },
          {
            type: "paragraph",
            content: "Sequence:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "GET /", "→",
              "Node Server", "→",
              "returns index.html", "→",
              "Browser parses HTML", "→",
              "GET style.css", "→",
              "GET app.js", "→",
              "GET logo.png", "→",
              "GET favicon.ico", "→",
              "Node Server", "→",
              "Returns each requested file"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that HTML is only the beginning."
          }
        ]
      },

      {
        heading: "Serving a Static File",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your project contains"
          },
          {
            type: "output",
            content: "public/style.css"
          },
          {
            type: "paragraph",
            content: "Using the File System module:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
    if (req.url === "/style.css") {
        fs.readFile("./public/style.css", (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end("Not Found");
            }

            res.setHeader("Content-Type", "text/css");
            res.end(data);
        });
    }
});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "When the browser requests"
          },
          {
            type: "output",
            content: "/style.css"
          },
          {
            type: "paragraph",
            content: "Node sends the CSS file."
          }
        ]
      },

      {
        heading: "Why fs.readFile() Returns a Buffer",
        blocks: [
          {
            type: "paragraph",
            content:
              "Unlike HTML strings, CSS, images, PDFs, and videos may contain binary data."
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile(path, (err, data) => {
    console.log(data);
});`
          },
          {
            type: "paragraph",
            content: "prints"
          },
          {
            type: "output",
            content: "<Buffer ...>"
          },
          {
            type: "paragraph",
            content: "The Buffer can be sent directly."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(data);`
          },
          {
            type: "paragraph",
            content: "No conversion required."
          }
        ]
      },

      {
        heading: "Mapping URLs to Files",
        blocks: [
          {
            type: "paragraph",
            content: "A browser requests"
          },
          {
            type: "output",
            content: "/images/logo.png"
          },
          {
            type: "paragraph",
            content: "The server translates that into"
          },
          {
            type: "output",
            content: "public/images/logo.png"
          },
          {
            type: "paragraph",
            content: "Typical mapping:"
          },
          {
            type: "flow",
            steps: [
              "Request URL", "→",
              "/style.css", "→",
              "Filesystem", "→",
              "public/style.css"
            ]
          },
          {
            type: "paragraph",
            content:
              "This mapping is the foundation of every static file server."
          }
        ]
      },

      {
        heading: "Serving Multiple File Types",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of writing `if (...)` for every file, we construct the path dynamically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import path from "node:path";

const filePath = path.join("public", req.url);`
          },
          {
            type: "paragraph",
            content: "If"
          },
          {
            type: "output",
            content: "req.url = /images/logo.png"
          },
          {
            type: "paragraph",
            content: "then"
          },
          {
            type: "output",
            content: "filePath = public/images/logo.png"
          },
          {
            type: "paragraph",
            content: "Now any file can be served."
          }
        ]
      },

      {
        heading: "Why path.join() Is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Never build paths like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const file = "public/" + req.url;`
          },
          {
            type: "paragraph",
            content:
              "Different operating systems use different separators."
          },
          {
            type: "paragraph",
            content: "Use `path.join()` instead."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const filePath = path.join("public", req.url);`
          },
          {
            type: "paragraph",
            content: "This works on Windows, Linux, and macOS."
          }
        ]
      },

      {
        heading: "Determining the MIME Type",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sending the correct file is only half the job."
          },
          {
            type: "paragraph",
            content:
              "The browser also needs to know what kind of file it received."
          },
          {
            type: "paragraph",
            content: "That's the purpose of `Content-Type`."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Content-Type", "text/css");`
          },
          {
            type: "paragraph",
            content:
              "Without it, browsers may display the file incorrectly."
          }
        ]
      },

      {
        heading: "Common MIME Types",
        blocks: [
          {
            type: "table",
            headers: ["Extension", "MIME Type"],
            rows: [
              [".html", "text/html"],
              [".css", "text/css"],
              [".js", "application/javascript"],
              [".json", "application/json"],
              [".png", "image/png"],
              [".jpg", "image/jpeg"],
              [".jpeg", "image/jpeg"],
              [".gif", "image/gif"],
              [".svg", "image/svg+xml"],
              [".ico", "image/x-icon"],
              [".pdf", "application/pdf"],
              [".txt", "text/plain"],
              [".xml", "application/xml"],
              [".mp4", "video/mp4"],
              [".mp3", "audio/mpeg"],
              [".woff", "font/woff"],
              [".woff2", "font/woff2"]
            ]
          }
        ]
      },

      {
        heading: "Detecting MIME Types Automatically",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of hardcoding every file `if (...)` we inspect the extension."
          },
          {
            type: "code",
            language: "javascript",
            content: `import path from "node:path";

const extension = path.extname(filePath);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "style.css", "→",
              ".css"
            ]
          },
          {
            type: "paragraph",
            content: "Simple mapping:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".json": "application/json"
};

const contentType =
    mimeTypes[extension] || "application/octet-stream";`
          },
          {
            type: "paragraph",
            content: "Unknown files become binary downloads."
          }
        ]
      },

      {
        heading: "A Simple Static File Server",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const server = http.createServer((req, res) => {

    const filePath = path.join("public", req.url);

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.statusCode = 404;
            return res.end("File not found");
        }

        res.end(data);

    });

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "This works, but it's not production-ready because it has security issues."
          }
        ]
      },

      {
        heading: "The Directory Traversal Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose someone requests"
          },
          {
            type: "output",
            content: "GET /../../server.js"
          },
          {
            type: "paragraph",
            content: "Naive path construction becomes"
          },
          {
            type: "output",
            content: "public/../../server.js"
          },
          {
            type: "paragraph",
            content: "which resolves to"
          },
          {
            type: "output",
            content: "server.js"
          },
          {
            type: "paragraph",
            content: "Now your server code is exposed."
          },
          {
            type: "paragraph",
            content: "Even worse:"
          },
          {
            type: "output",
            content: ["../../package.json", "../../.env", "../../config/database.js"]
          },
          {
            type: "paragraph",
            content:
              "Attackers routinely probe servers with such requests."
          },
          {
            type: "paragraph",
            content:
              "This attack is known as Directory Traversal (or Path Traversal)."
          }
        ]
      },

      {
        heading: "Preventing Directory Traversal",
        blocks: [
          {
            type: "paragraph",
            content:
              "Always resolve the requested path and verify it stays inside the intended directory."
          },
          {
            type: "code",
            language: "javascript",
            content: `const publicDir = path.resolve("public");

const requestedPath = path.resolve(publicDir, "." + req.url);

if (!requestedPath.startsWith(publicDir)) {
    res.statusCode = 403;
    return res.end("Forbidden");
}`
          },
          {
            type: "paragraph",
            content:
              "This ensures users cannot escape the `public` folder, even if they use `..` or encoded traversal attempts."
          }
        ]
      },

      {
        heading: "Handling Missing Files",
        blocks: [
          {
            type: "paragraph",
            content: "Never assume the file exists."
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile(filePath, (err, data) => {

    if (err) {

        res.statusCode = 404;

        return res.end("Not Found");

    }

});`
          },
          {
            type: "paragraph",
            content:
              "Returning a proper 404 Not Found improves debugging and matches browser expectations."
          }
        ]
      },

      {
        heading: "Serving index.html Automatically",
        blocks: [
          {
            type: "paragraph",
            content: "When visiting"
          },
          {
            type: "output",
            content: "http://localhost:3000/"
          },
          {
            type: "paragraph",
            content: "the browser requests"
          },
          {
            type: "output",
            content: "/"
          },
          {
            type: "paragraph",
            content:
              "Instead of looking for a file literally named `/`, serve the default page."
          },
          {
            type: "code",
            language: "javascript",
            content: `let requested = req.url;

if (requested === "/") {
    requested = "/index.html";
}`
          },
          {
            type: "paragraph",
            content:
              "This mirrors the behavior of real web servers like Apache and Nginx."
          }
        ]
      },

      {
        heading: "Cache Headers (Basic)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Static assets often change infrequently. Browsers can cache them to avoid repeated downloads."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader("Cache-Control", "public, max-age=3600");`
          },
          {
            type: "paragraph",
            content:
              "This tells the browser it may reuse the file for 3600 seconds (1 hour) before requesting it again."
          },
          {
            type: "paragraph",
            content: "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster page loads",
              "Reduced bandwidth",
              "Lower server load"
            ]
          },
          {
            type: "paragraph",
            content:
              "For frequently changing files during development, you might disable caching instead."
          }
        ]
      },

      {
        heading: "Serving Large Files Efficiently",
        blocks: [
          {
            type: "paragraph",
            content:
              "Using `fs.readFile()` loads the entire file into memory."
          },
          {
            type: "paragraph",
            content:
              "For very large files (videos, archives, etc.), streaming is much more efficient."
          },
          {
            type: "code",
            language: "javascript",
            content: `import fs from "node:fs";

const stream = fs.createReadStream(filePath);

stream.pipe(res);`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lower memory usage",
              "Faster response start",
              "Better scalability",
              "Built-in backpressure handling"
            ]
          },
          {
            type: "paragraph",
            content:
              "We'll explore streams in greater depth in the Streams section."
          }
        ]
      },

      {
        heading: "Typical Project Structure",
        blocks: [
          {
            type: "paragraph",
            content:
              "A common Node.js application organizes static assets like this:"
          },
          {
            type: "tree",
            content: `project/
├── server.js
├── package.json
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── css/
│   │    └── style.css
│   ├── js/
│   │    └── app.js
│   ├── images/
│   │    └── logo.png
│   ├── fonts/
│   └── favicon.ico
│
├── routes/
├── controllers/
├── views/
└── utils/`
          },
          {
            type: "paragraph",
            content:
              "Keeping all publicly accessible assets inside a dedicated `public` directory simplifies security and deployment."
          }
        ]
      },

      {
        heading: "How Express Serves Static Files",
        blocks: [
          {
            type: "paragraph",
            content:
              "Later, when using Express, the same functionality becomes:"
          },
          {
            type: "code",
            language: "javascript",
            content: `app.use(express.static("public"));`
          },
          {
            type: "paragraph",
            content:
              "One line replaces much of the manual logic you've learned."
          },
          {
            type: "paragraph",
            content:
              "Understanding the manual implementation helps you appreciate what Express is doing behind the scenes."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Using string concatenation for paths"
          },
          {
            type: "code",
            language: "javascript",
            content: `"public/" + req.url`
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `path.join()`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Forgetting the Content-Type header"
          },
          {
            type: "paragraph",
            content: "Without it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.end(file);`
          },
          {
            type: "paragraph",
            content:
              "the browser may not know how to interpret the response."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Exposing sensitive files"
          },
          {
            type: "paragraph",
            content: "Never serve:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              ".env",
              "package.json",
              "node_modules",
              "server.js",
              "config/"
            ]
          },
          {
            type: "paragraph",
            content:
              "Only expose assets intended for public access."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Reading every file into memory"
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile()`
          },
          {
            type: "paragraph",
            content: "for very large files."
          },
          {
            type: "paragraph",
            content: "Use streams instead."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Ignoring path traversal attacks"
          },
          {
            type: "paragraph",
            content:
              "Never trust user-supplied URLs."
          },
          {
            type: "paragraph",
            content:
              "Always validate and normalize paths before accessing the filesystem."
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
              "Store all public assets inside a dedicated `public` directory.",
              "Always construct file paths with the `path` module.",
              "Validate requested paths to prevent directory traversal attacks.",
              "Set the correct `Content-Type` header for every response.",
              "Return proper HTTP status codes such as 404 and 403 when appropriate.",
              "Stream large files using `fs.createReadStream()` instead of loading them fully into memory.",
              "Apply sensible cache headers for static assets in production.",
              "Never expose configuration files, source code, or secrets through your static file server.",
              "Keep your directory structure organized (for example: `css/`, `js/`, `images/`, `fonts/`).",
              "Remember that frameworks like Express automate static file serving, but the underlying concepts remain exactly the same. Understanding these fundamentals will make it much easier to debug, optimize, and secure real-world Node.js applications."
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
              "Serving static files is a fundamental part of every web application. In this lesson, you learned how Node.js handles CSS, JavaScript, images, fonts, videos, and other assets using the built-in HTTP and File System modules. You explored how browsers request resources, how URLs map to files, why MIME types matter, how to prevent directory traversal attacks, and why streaming is essential for large files."
          },
          {
            type: "paragraph",
            content:
              "You also discovered how frameworks like Express simplify static file serving with a single line of code, but more importantly, you now understand what happens behind that abstraction. These concepts form the foundation of every web server and will help you debug, optimize, and secure any Node.js application you build."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One subtle concept that many tutorials overlook is the distinction between serving files and serving content. A static file server is essentially a content router: it reads the URL, maps it to a filesystem path, determines the correct MIME type, and streams the file to the client. Once you understand this, every static file server—whether built manually, with Express, or with a CDN—becomes just a variation of this same pattern. Another critical insight is that caching is not optional in production. Without cache headers, browsers request the same assets repeatedly, increasing bandwidth and slowing page loads. Learning to serve files correctly with `Cache-Control` headers is just as important as learning to serve them at all. These two principles—correct MIME types and effective caching—separate hobby projects from production-grade applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Ninth Topic : HTTP Status Codes
============================= */
    "nodejs-http-status-codes": {
    title: "HTTP Status Codes",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "Whenever a client (such as a browser, mobile application, or another server) sends an HTTP request, the server must communicate the result of that request. Simply sending data is not enough—the client also needs to know whether the request succeeded, failed, requires authentication, or should be redirected elsewhere."
          },
          {
            type: "paragraph",
            content:
              "This is exactly what HTTP Status Codes are designed for."
          },
          {
            type: "paragraph",
            content:
              "Every HTTP response begins with a status code that tells the client how to interpret the response before it even reads the response body."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "http",
            content: `HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "Success"
}`
          },
          {
            type: "paragraph",
            content:
              "The `200 OK` immediately tells the client that the request was processed successfully."
          },
          {
            type: "paragraph",
            content:
              "Understanding status codes is one of the most important backend development skills because APIs, browsers, search engines, proxies, mobile apps, and web crawlers all rely on them."
          }
        ]
      },

      {
        heading: "What are HTTP Status Codes?",
        blocks: [
          {
            type: "paragraph",
            content:
              "An HTTP Status Code is a three-digit number returned by the server indicating the outcome of an HTTP request."
          },
          {
            type: "paragraph",
            content: "It answers questions like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Was the request successful?",
              "Was the requested resource found?",
              "Does the client need to log in?",
              "Has something gone wrong on the server?",
              "Should the browser redirect somewhere else?"
            ]
          },
          {
            type: "paragraph",
            content:
              "Every response from a Node.js HTTP server contains a status code."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.statusCode = 200;
res.end("Welcome!");`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404);
res.end("Page Not Found");`
          }
        ]
      },

      {
        heading: "Why Status Codes Matter",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine opening an online shopping website."
          },
          {
            type: "paragraph",
            content: "When you request"
          },
          {
            type: "output",
            content: "GET /products"
          },
          {
            type: "paragraph",
            content:
              "the server could respond in different ways."
          },
          {
            type: "paragraph",
            content: "If everything works:"
          },
          {
            type: "output",
            content: "200 OK"
          },
          {
            type: "paragraph",
            content: "If the product was created:"
          },
          {
            type: "output",
            content: "201 Created"
          },
          {
            type: "paragraph",
            content: "If you're not logged in:"
          },
          {
            type: "output",
            content: "401 Unauthorized"
          },
          {
            type: "paragraph",
            content: "If the product doesn't exist:"
          },
          {
            type: "output",
            content: "404 Not Found"
          },
          {
            type: "paragraph",
            content: "If the server crashes:"
          },
          {
            type: "output",
            content: "500 Internal Server Error"
          },
          {
            type: "paragraph",
            content:
              "Without status codes, the client would have no reliable way of understanding what happened."
          }
        ]
      },

      {
        heading: "Structure of an HTTP Response",
        blocks: [
          {
            type: "paragraph",
            content: "A response consists of several parts."
          },
          {
            type: "code",
            language: "http",
            content: `HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 45

{
   "success": true
}`
          },
          {
            type: "paragraph",
            content: "The first line contains:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTTP Version",
              "Status Code",
              "Status Message"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "HTTP/1.1 404 Not Found"
          },
          {
            type: "paragraph",
            content: "where `404` is the status code and `Not Found` is the reason phrase (status message)."
          }
        ]
      },

      {
        heading: "Status Code Categories",
        blocks: [
          {
            type: "paragraph",
            content:
              "HTTP status codes are divided into five groups."
          },
          {
            type: "table",
            headers: ["Range", "Meaning"],
            rows: [
              ["100–199", "Informational"],
              ["200–299", "Success"],
              ["300–399", "Redirection"],
              ["400–499", "Client Errors"],
              ["500–599", "Server Errors"]
            ]
          },
          {
            type: "paragraph",
            content:
              "A good backend developer should immediately recognize what each category means."
          }
        ]
      },

      {
        heading: "1xx Informational Responses",
        blocks: [
          {
            type: "paragraph",
            content:
              "These indicate that the request has been received and processing is continuing."
          },
          {
            type: "paragraph",
            content:
              "They are rarely used in everyday application development."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "100 Continue — The client may continue sending the request body.",
              "101 Switching Protocols — Used during protocol upgrades (such as WebSocket).",
              "103 Early Hints — Allows browsers to preload resources before the final response."
            ]
          },
          {
            type: "paragraph",
            content:
              "In normal REST API development, you will rarely send these manually."
          }
        ]
      },

      {
        heading: "2xx Success Responses",
        blocks: [
          {
            type: "paragraph",
            content:
              "These indicate that the request was processed successfully."
          },
          {
            type: "paragraph",
            content:
              "These are the most commonly used status codes."
          }
        ]
      },

      {
        heading: "200 OK",
        blocks: [
          {
            type: "paragraph",
            content:
              "The standard success response."
          },
          {
            type: "paragraph",
            content:
              "Use it when the request completed successfully."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.statusCode = 200;
res.end("Success");`
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Getting user data",
              "Fetching products",
              "Loading a webpage"
            ]
          }
        ]
      },

      {
        heading: "201 Created",
        blocks: [
          {
            type: "paragraph",
            content:
              "Used when the server successfully creates a new resource."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "POST /users"
          },
          {
            type: "paragraph",
            content: "returns"
          },
          {
            type: "output",
            content: "201 Created"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(201);
res.end("User created");`
          },
          {
            type: "paragraph",
            content: "Common uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User registration",
              "Creating posts",
              "Creating orders",
              "Uploading files"
            ]
          }
        ]
      },

      {
        heading: "202 Accepted",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request has been accepted but is still processing."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Background job",
              "Video conversion",
              "Email queue"
            ]
          }
        ]
      },

      {
        heading: "204 No Content",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request succeeded, but there is nothing to return."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "DELETE /users/5"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(204);
res.end();`
          },
          {
            type: "paragraph",
            content: "Notice there is no response body."
          },
          {
            type: "paragraph",
            content: "Perfect for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "DELETE requests",
              "Update operations with no returned data"
            ]
          }
        ]
      },

      {
        heading: "3xx Redirection Responses",
        blocks: [
          {
            type: "paragraph",
            content:
              "These tell the client that the requested resource has moved."
          },
          {
            type: "paragraph",
            content:
              "Browsers usually follow redirects automatically."
          }
        ]
      },

      {
        heading: "301 Moved Permanently",
        blocks: [
          {
            type: "paragraph",
            content:
              "Permanent redirect."
          },
          {
            type: "flow",
            steps: [
              "Old URL", "→",
              "New URL"
            ]
          },
          {
            type: "paragraph",
            content:
              "Search engines transfer SEO value to the new location."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "http://example.com", "→",
              "https://example.com"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(301,{
    Location:"https://example.com"
});
res.end();`
          }
        ]
      },

      {
        heading: "302 Found",
        blocks: [
          {
            type: "paragraph",
            content:
              "Temporary redirect."
          },
          {
            type: "paragraph",
            content:
              "The resource has moved temporarily."
          },
          {
            type: "paragraph",
            content:
              "Browsers redirect, but search engines do not permanently update their records."
          }
        ]
      },

      {
        heading: "304 Not Modified",
        blocks: [
          {
            type: "paragraph",
            content:
              "Used with browser caching."
          },
          {
            type: "paragraph",
            content: "Suppose the browser already has:"
          },
          {
            type: "output",
            content: "style.css"
          },
          {
            type: "paragraph",
            content:
              "Instead of downloading it again, the server can reply:"
          },
          {
            type: "output",
            content: "304 Not Modified"
          },
          {
            type: "paragraph",
            content:
              "The browser simply uses its cached copy."
          },
          {
            type: "paragraph",
            content:
              "This greatly improves website performance."
          }
        ]
      },

      {
        heading: "4xx Client Errors",
        blocks: [
          {
            type: "paragraph",
            content:
              "These indicate that the client made a mistake."
          },
          {
            type: "paragraph",
            content:
              "The server is working correctly."
          }
        ]
      },

      {
        heading: "400 Bad Request",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request is invalid."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Missing fields",
              "Invalid JSON",
              "Wrong format"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(400);
res.end("Invalid request");`
          }
        ]
      },

      {
        heading: "401 Unauthorized",
        blocks: [
          {
            type: "paragraph",
            content:
              "Authentication is required."
          },
          {
            type: "paragraph",
            content:
              "The client has not logged in or provided valid credentials."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Authorization header missing"
          },
          {
            type: "output",
            content: "401 Unauthorized"
          },
          {
            type: "paragraph",
            content:
              "Many beginners confuse 401 with 403."
          },
          {
            type: "paragraph",
            content: "Remember:"
          },
          {
            type: "quote",
            content: "401 means \"Who are you?\""
          }
        ]
      },

      {
        heading: "403 Forbidden",
        blocks: [
          {
            type: "paragraph",
            content:
              "The server understands who the user is."
          },
          {
            type: "paragraph",
            content:
              "However, the user is not allowed to perform the requested action."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Normal user tries to delete another user."
          },
          {
            type: "output",
            content: "403 Forbidden"
          },
          {
            type: "paragraph",
            content: "Think of it as:"
          },
          {
            type: "quote",
            content: "I know who you are, but you don't have permission."
          }
        ]
      },

      {
        heading: "404 Not Found",
        blocks: [
          {
            type: "paragraph",
            content:
              "Probably the most famous status code."
          },
          {
            type: "paragraph",
            content:
              "The requested resource doesn't exist."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404);
res.end("Page not found");`
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: "/unknown-page"
          },
          {
            type: "output",
            content: "/api/products/999"
          },
          {
            type: "paragraph",
            content: "where product 999 doesn't exist."
          }
        ]
      },

      {
        heading: "405 Method Not Allowed",
        blocks: [
          {
            type: "paragraph",
            content:
              "The URL exists."
          },
          {
            type: "paragraph",
            content:
              "But the HTTP method is incorrect."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "GET /users"
          },
          {
            type: "paragraph",
            content: "Allowed."
          },
          {
            type: "paragraph",
            content: "But"
          },
          {
            type: "output",
            content: "DELETE /users"
          },
          {
            type: "paragraph",
            content: "is not allowed."
          },
          {
            type: "paragraph",
            content: "The server returns"
          },
          {
            type: "output",
            content: "405 Method Not Allowed"
          }
        ]
      },

      {
        heading: "409 Conflict",
        blocks: [
          {
            type: "paragraph",
            content:
              "The request conflicts with the current server state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Trying to create"
          },
          {
            type: "output",
            content: "john@gmail.com"
          },
          {
            type: "paragraph",
            content: "when that email already exists."
          },
          {
            type: "output",
            content: "409 Conflict"
          },
          {
            type: "paragraph",
            content: "Other examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Duplicate username",
              "Duplicate order ID",
              "Version conflicts"
            ]
          }
        ]
      },

      {
        heading: "5xx Server Errors",
        blocks: [
          {
            type: "paragraph",
            content:
              "These indicate that the problem is on the server, not the client."
          }
        ]
      },

      {
        heading: "500 Internal Server Error",
        blocks: [
          {
            type: "paragraph",
            content:
              "The generic server error."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unexpected exception.",
              "Database failure.",
              "Programming bug.",
              "Unhandled error."
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `try{

}
catch(err){

    res.writeHead(500);

    res.end("Internal Server Error");

}`
          }
        ]
      },

      {
        heading: "502 Bad Gateway",
        blocks: [
          {
            type: "paragraph",
            content:
              "Occurs when one server receives an invalid response from another server."
          },
          {
            type: "paragraph",
            content: "Common in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "API gateways",
              "Reverse proxies",
              "Load balancers"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Nginx", "→",
              "Node Server (down)"
            ]
          },
          {
            type: "paragraph",
            content: "Nginx returns"
          },
          {
            type: "output",
            content: "502 Bad Gateway"
          }
        ]
      },

      {
        heading: "503 Service Unavailable",
        blocks: [
          {
            type: "paragraph",
            content:
              "The server is temporarily unavailable."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Maintenance",
              "Heavy traffic",
              "Database offline"
            ]
          },
          {
            type: "paragraph",
            content:
              "Unlike 500, this usually means the service will become available again later."
          },
          {
            type: "paragraph",
            content: "Servers often include a"
          },
          {
            type: "output",
            content: "Retry-After"
          },
          {
            type: "paragraph",
            content: "header."
          }
        ]
      },

      {
        heading: "Common Status Codes at a Glance",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning", "Typical Use"],
            rows: [
              ["200", "OK", "Successful request"],
              ["201", "Created", "Resource created"],
              ["202", "Accepted", "Processing later"],
              ["204", "No Content", "Success without body"],
              ["301", "Moved Permanently", "Permanent redirect"],
              ["302", "Found", "Temporary redirect"],
              ["304", "Not Modified", "Browser cache"],
              ["400", "Bad Request", "Invalid request"],
              ["401", "Unauthorized", "Authentication required"],
              ["403", "Forbidden", "Permission denied"],
              ["404", "Not Found", "Resource missing"],
              ["405", "Method Not Allowed", "Wrong HTTP method"],
              ["409", "Conflict", "Duplicate/conflicting resource"],
              ["500", "Internal Server Error", "Server failure"],
              ["502", "Bad Gateway", "Gateway/proxy error"],
              ["503", "Service Unavailable", "Temporary outage"]
            ]
          }
        ]
      },

      {
        heading: "Setting Status Codes in Node.js",
        blocks: [
          {
            type: "paragraph",
            content: "Using `statusCode`"
          },
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.end("Hello World");

});

server.listen(3000);`
          },
          {
            type: "paragraph",
            content: "Using `writeHead()`"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(404, {
    "Content-Type": "text/plain"
});

res.end("Page Not Found");`
          },
          {
            type: "paragraph",
            content:
              "This sets both the status code and response headers together."
          }
        ]
      },

      {
        heading: "Choosing the Correct Status Code",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many beginners always return `200 OK` even when something goes wrong."
          },
          {
            type: "paragraph",
            content:
              "That is considered poor API design."
          },
          {
            type: "paragraph",
            content: "Consider these scenarios:"
          },
          {
            type: "table",
            headers: ["Situation", "Correct Status"],
            rows: [
              ["User login successful", "200"],
              ["New user created", "201"],
              ["Deleted successfully", "204"],
              ["Invalid request", "400"],
              ["Login required", "401"],
              ["Permission denied", "403"],
              ["Page doesn't exist", "404"],
              ["Duplicate email", "409"],
              ["Unexpected server crash", "500"]
            ]
          },
          {
            type: "paragraph",
            content:
              "Choosing accurate status codes makes your API easier to understand, debug, and integrate with other systems."
          }
        ]
      },

      {
        heading: "REST API Best Practices",
        blocks: [
          {
            type: "paragraph",
            content:
              "When designing REST APIs, status codes should match the semantics of the operation rather than just indicating whether code executed."
          },
          {
            type: "paragraph",
            content:
              "Some widely accepted conventions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`GET` returning data → `200 OK`",
              "`POST` creating a new resource → `201 Created`",
              "`PUT` or `PATCH` updating successfully → `200 OK` (or `204 No Content` if no response body is needed)",
              "`DELETE` removing a resource → `204 No Content`",
              "Validation errors (missing or invalid input) → `400 Bad Request`",
              "Authentication failures → `401 Unauthorized`",
              "Authorization failures → `403 Forbidden`",
              "Missing resources → `404 Not Found`",
              "Duplicate resources or conflicting updates → `409 Conflict`",
              "Unexpected server-side failures → `500 Internal Server Error`"
            ]
          },
          {
            type: "paragraph",
            content:
              "Following these conventions makes your APIs predictable for frontend developers and third-party consumers."
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
                question: "Returning `200 OK` for every response",
                answer:
                  "Clients cannot distinguish between success and failure if every response uses the same status code."
              },
              {
                question: "Confusing `401` and `403`",
                answer:
                  "* `401` → Authentication is missing or invalid.\n* `403` → Authentication succeeded, but permission is denied."
              },
              {
                question: "Returning `500` for client mistakes",
                answer:
                  "If the client sends invalid data, the correct response is usually `400`, not `500`."
              },
              {
                question: "Sending a response body with `204`",
                answer:
                  "A `204 No Content` response must not include a message body. Sending content with it violates the HTTP specification and may cause clients to behave unexpectedly."
              },
              {
                question: "Ignoring caching status codes",
                answer:
                  "Using `304 Not Modified` appropriately can reduce bandwidth usage and improve application performance, especially for static resources."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Request Flow",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine a user interacts with an online store:"
          },
          {
            type: "flow",
            steps: [
              "GET /products", "→",
              "200 OK", "→",
              "Products are displayed.", "→",
              "POST /orders", "→",
              "201 Created", "→",
              "A new order is created.", "→",
              "DELETE /orders/15", "→",
              "204 No Content", "→",
              "The order is removed successfully.", "→",
              "GET /orders/999", "→",
              "404 Not Found", "→",
              "The requested order does not exist.", "→",
              "POST /users", "→",
              "(using an email address that already exists)", "→",
              "409 Conflict", "→",
              "The server reports that the resource conflicts with existing data."
            ]
          },
          {
            type: "paragraph",
            content:
              "This sequence demonstrates how different status codes clearly communicate the outcome of each operation."
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
              "Always return the most appropriate status code for the outcome of the request.",
              "Use `201 Created` when creating resources instead of `200 OK`.",
              "Use `204 No Content` when a successful operation has nothing to return.",
              "Distinguish carefully between `400`, `401`, `403`, and `404`.",
              "Avoid exposing sensitive internal error details in `500` responses.",
              "Combine meaningful status codes with clear JSON error messages for APIs.",
              "Follow standard REST conventions consistently across your application.",
              "Test your API responses to ensure clients receive the expected status codes in every scenario.",
              "Treat status codes as part of your API contract—they are just as important as the response body."
            ]
          },
          {
            type: "paragraph",
            content:
              "Mastering HTTP status codes enables you to build APIs and web servers that communicate clearly with browsers, frontend applications, mobile clients, and other services. Correct use of these codes improves interoperability, simplifies debugging, and makes your backend applications more reliable and standards-compliant."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "In this lesson, you learned that HTTP status codes are the primary way servers communicate the outcome of a request. You explored the five major categories—Informational, Success, Redirection, Client Errors, and Server Errors—and examined the most important status codes in each group."
          },
          {
            type: "paragraph",
            content:
              "You also learned how to set status codes in Node.js using `statusCode` and `writeHead()`, how to choose the correct status for different scenarios, and why status codes are essential for building reliable REST APIs. Proper use of status codes ensures that clients understand exactly what happened and how to respond."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most overlooked aspects of status codes is that they are part of your API's public contract. Frontend developers, mobile developers, and third-party integrators all rely on consistent status codes to handle responses correctly. Returning `200 OK` when something goes wrong is not just a technical mistake—it's a communication failure. A well-designed API uses status codes to convey clear, unambiguous meaning. Another subtle but important point is that `4xx` errors are entirely the client's responsibility to fix, while `5xx` errors indicate server issues that you must investigate. Understanding who is responsible for fixing each type of error makes debugging and error handling much more effective in production applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Tenth Topic : MIME Types
============================= */
    "nodejs-mime-types": {
    title: "MIME Types",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content:
              "When a browser requests a resource from a server, one of the most important pieces of information returned in the response is the MIME type. Without it, the browser has no reliable way of knowing whether the received data is an HTML page, a CSS stylesheet, a JavaScript file, an image, a PDF, or something else."
          },
          {
            type: "paragraph",
            content:
              "For example, imagine a browser requests `style.css`."
          },
          {
            type: "paragraph",
            content:
              "The server doesn't simply send the file. It also sends a header similar to this:"
          },
          {
            type: "code",
            language: "http",
            content: `HTTP/1.1 200 OK
Content-Type: text/css`
          },
          {
            type: "paragraph",
            content:
              "The browser reads the `Content-Type` header, sees `text/css`, and knows to treat the file as a stylesheet."
          },
          {
            type: "paragraph",
            content:
              "If the wrong MIME type is sent, browsers may refuse to execute JavaScript, display images incorrectly, download files instead of displaying them, or expose security vulnerabilities."
          },
          {
            type: "paragraph",
            content:
              "Understanding MIME types is therefore essential for anyone building web servers, APIs, or file-serving applications in Node.js."
          }
        ]
      },

      {
        heading: "What are MIME Types?",
        blocks: [
          {
            type: "paragraph",
            content: "MIME stands for:"
          },
          {
            type: "quote",
            content: "Multipurpose Internet Mail Extensions"
          },
          {
            type: "paragraph",
            content:
              "Although MIME was originally created for email attachments, it later became the standard way HTTP identifies the type of content being transferred over the internet."
          },
          {
            type: "paragraph",
            content:
              "A MIME type is simply a standardized string describing the format of data."
          },
          {
            type: "paragraph",
            content: "General format:"
          },
          {
            type: "output",
            content: "type/subtype"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "text/html",
              "text/css",
              "application/json",
              "application/pdf",
              "image/png",
              "image/jpeg",
              "video/mp4",
              "audio/mpeg"
            ]
          },
          {
            type: "paragraph",
            content:
              "The browser uses this information to determine how the received data should be processed."
          }
        ]
      },

      {
        heading: "Why MIME Types Matter",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose your server sends an HTML page."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "output",
            content: "Content-Type: text/html"
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "quote",
            content: "Render this as a webpage."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "Now suppose the server accidentally sends:"
          },
          {
            type: "output",
            content: "Content-Type: text/plain"
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "quote",
            content: "Display the HTML code as plain text."
          },
          {
            type: "paragraph",
            content:
              "Instead of rendering the webpage, users will literally see:"
          },
          {
            type: "code",
            language: "html",
            content: `<html>
<head>...</head>
<body>...</body>
</html>`
          },
          {
            type: "paragraph",
            content:
              "The content itself is identical. Only the MIME type changed."
          },
          {
            type: "paragraph",
            content:
              "This shows how important the `Content-Type` header is."
          }
        ]
      },

      {
        heading: "Content-Type Header",
        blocks: [
          {
            type: "paragraph",
            content:
              "The MIME type is communicated using the HTTP Content-Type response header."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.writeHead(200, {
    "Content-Type": "text/html"
});`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `response.setHeader("Content-Type", "text/html");`
          },
          {
            type: "paragraph",
            content:
              "Every HTTP response should include the correct content type whenever possible."
          }
        ]
      },

      {
        heading: "How Browsers Use MIME Types",
        blocks: [
          {
            type: "paragraph",
            content:
              "When a browser receives a response, it performs roughly the following steps:"
          },
          {
            type: "flow",
            steps: [
              "Receive HTTP response", "→",
              "Read Content-Type header", "→",
              "Determine file type", "→",
              "Choose correct parser", "→",
              "Render or download"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "flow",
            steps: [
              "text/html", "→",
              "HTML parser", "→",
              "Display webpage"
            ]
          },
          {
            type: "flow",
            steps: [
              "application/json", "→",
              "JSON parser", "→",
              "JavaScript fetch() receives object"
            ]
          },
          {
            type: "flow",
            steps: [
              "image/png", "→",
              "Image decoder", "→",
              "Display image"
            ]
          },
          {
            type: "flow",
            steps: [
              "application/pdf", "→",
              "PDF viewer", "→",
              "Open PDF"
            ]
          }
        ]
      },

      {
        heading: "Common MIME Types",
        blocks: [
          {
            type: "paragraph",
            content:
              "These are the MIME types you'll use most frequently when building Node.js applications."
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["HTML", "text/html"],
              ["CSS", "text/css"],
              ["JavaScript", "text/javascript"],
              ["JSON", "application/json"],
              ["XML", "application/xml"],
              ["CSV", "text/csv"],
              ["Plain text", "text/plain"]
            ]
          },
          {
            type: "paragraph",
            content: "Images"
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["PNG", "image/png"],
              ["JPEG", "image/jpeg"],
              ["GIF", "image/gif"],
              ["SVG", "image/svg+xml"],
              ["WebP", "image/webp"],
              ["ICO", "image/x-icon"],
              ["BMP", "image/bmp"]
            ]
          },
          {
            type: "paragraph",
            content: "Documents"
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["PDF", "application/pdf"],
              ["ZIP", "application/zip"],
              ["DOCX", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
              ["XLSX", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
              ["PPTX", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]
            ]
          },
          {
            type: "paragraph",
            content: "Fonts"
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["WOFF", "font/woff"],
              ["WOFF2", "font/woff2"],
              ["TTF", "font/ttf"],
              ["OTF", "font/otf"]
            ]
          },
          {
            type: "paragraph",
            content: "Audio"
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["MP3", "audio/mpeg"],
              ["WAV", "audio/wav"],
              ["OGG", "audio/ogg"]
            ]
          },
          {
            type: "paragraph",
            content: "Video"
          },
          {
            type: "table",
            headers: ["File", "MIME Type"],
            rows: [
              ["MP4", "video/mp4"],
              ["WebM", "video/webm"],
              ["OGG", "video/ogg"]
            ]
          }
        ]
      },

      {
        heading: "Serving HTML",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";

http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Welcome</h1>");

}).listen(3000);`
          },
          {
            type: "paragraph",
            content: "Browser renders:"
          },
          {
            type: "output",
            content: "Welcome"
          }
        ]
      },

      {
        heading: "Serving CSS",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200, {
    "Content-Type": "text/css"
});

res.end(\`
body{
    background:black;
    color:white;
}
\`);`
          },
          {
            type: "paragraph",
            content:
              "The browser recognizes it as CSS."
          }
        ]
      },

      {
        heading: "Serving JavaScript",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200, {
    "Content-Type": "text/javascript"
});

res.end(\`
console.log("Loaded");
\`);`
          },
          {
            type: "paragraph",
            content:
              "The browser executes it as JavaScript."
          }
        ]
      },

      {
        heading: "Serving JSON",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const data = {
    name: "Alice",
    age: 22
};

res.writeHead(200,{
    "Content-Type":"application/json"
});

res.end(JSON.stringify(data));`
          },
          {
            type: "paragraph",
            content: "Response:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "name":"Alice",
  "age":22
}`
          }
        ]
      },

      {
        heading: "Serving Images",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import fs from "node:fs";

const image = fs.readFileSync("logo.png");

res.writeHead(200,{
    "Content-Type":"image/png"
});

res.end(image);`
          },
          {
            type: "paragraph",
            content:
              "The browser automatically displays the image."
          }
        ]
      },

      {
        heading: "Serving PDFs",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const pdf = fs.readFileSync("guide.pdf");

res.writeHead(200,{
    "Content-Type":"application/pdf"
});

res.end(pdf);`
          },
          {
            type: "paragraph",
            content:
              "Most browsers open the PDF in their built-in PDF viewer."
          }
        ]
      },

      {
        heading: "Serving Downloads",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes you don't want the browser to display a file—you want it to download it."
          },
          {
            type: "paragraph",
            content:
              "Use the `Content-Disposition` header."
          },
          {
            type: "code",
            language: "javascript",
            content: `res.writeHead(200,{
    "Content-Type":"application/pdf",
    "Content-Disposition":"attachment; filename=guide.pdf"
});`
          },
          {
            type: "paragraph",
            content:
              "The browser downloads the file instead of opening it."
          }
        ]
      },

      {
        heading: "Browser Behavior Depends on MIME Type",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose `photo.png` is sent with:"
          },
          {
            type: "output",
            content: "Content-Type: image/png"
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "quote",
            content: "Displays image."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "output",
            content: "Content-Type: application/octet-stream"
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "quote",
            content: "Downloads the file."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Now:"
          },
          {
            type: "output",
            content: "Content-Type: text/plain"
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "paragraph",
            content:
              "May display unreadable binary characters or prompt for download."
          },
          {
            type: "paragraph",
            content:
              "The same bytes can produce different behavior solely because of the MIME type."
          }
        ]
      },

      {
        heading: "application/octet-stream",
        blocks: [
          {
            type: "paragraph",
            content:
              "This is the generic binary MIME type."
          },
          {
            type: "output",
            content: "application/octet-stream"
          },
          {
            type: "paragraph",
            content: "It means:"
          },
          {
            type: "quote",
            content: "This is arbitrary binary data."
          },
          {
            type: "paragraph",
            content:
              "Browsers generally download it rather than attempt to display it."
          },
          {
            type: "paragraph",
            content: "It's commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Unknown file types",
              "Binary executables",
              "Generic downloads"
            ]
          }
        ]
      },

      {
        heading: "Charset",
        blocks: [
          {
            type: "paragraph",
            content:
              "Text responses often include a character encoding."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Content-Type: text/html; charset=utf-8"
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader(
    "Content-Type",
    "text/html; charset=utf-8"
);`
          },
          {
            type: "paragraph",
            content:
              "UTF-8 is the standard encoding for modern web applications and ensures characters from many languages are interpreted correctly."
          }
        ]
      },

      {
        heading: "Detecting MIME Types",
        blocks: [
          {
            type: "paragraph",
            content:
              "When serving static files, manually writing every MIME type isn't practical."
          },
          {
            type: "paragraph",
            content:
              "Instead, detect the MIME type based on the file extension."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: ".png"
          },
          {
            type: "paragraph",
            content: "Map it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const mimeTypes = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".json":"application/json",
    ".png":"image/png",
    ".jpg":"image/jpeg"
};`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const contentType =
    mimeTypes[extension] ||
    "application/octet-stream";`
          }
        ]
      },

      {
        heading: "Using the mime-types Package",
        blocks: [
          {
            type: "paragraph",
            content:
              "Large applications typically rely on a maintained MIME database rather than hard-coding mappings."
          },
          {
            type: "code",
            language: "bash",
            content: `npm install mime-types`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import mime from "mime-types";

const type = mime.lookup("photo.png");

console.log(type);`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "image/png"
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `mime.lookup("style.css");`
          },
          {
            type: "paragraph",
            content: "Output:"
          },
          {
            type: "output",
            content: "text/css"
          },
          {
            type: "paragraph",
            content: "Fallback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const type =
    mime.lookup(filePath) ||
    "application/octet-stream";`
          },
          {
            type: "paragraph",
            content:
              "This is a common pattern in production servers."
          }
        ]
      },

      {
        heading: "Serving Static Files Correctly",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import fs from "node:fs";
import path from "node:path";
import mime from "mime-types";

const filePath = "./public/logo.png";

const content = fs.readFileSync(filePath);

const type =
    mime.lookup(filePath) ||
    "application/octet-stream";

res.writeHead(200,{
    "Content-Type": type
});

res.end(content);`
          },
          {
            type: "paragraph",
            content:
              "This approach automatically assigns the appropriate MIME type for supported file extensions."
          }
        ]
      },

      {
        heading: "MIME Types and APIs",
        blocks: [
          {
            type: "paragraph",
            content:
              "REST APIs nearly always use:"
          },
          {
            type: "output",
            content: "Content-Type: application/json"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.setHeader(
    "Content-Type",
    "application/json"
);

res.end(JSON.stringify(users));`
          },
          {
            type: "paragraph",
            content:
              "Clients immediately know how to parse the response."
          }
        ]
      },

      {
        heading: "MIME Types and File Uploads",
        blocks: [
          {
            type: "paragraph",
            content:
              "MIME types are also sent by clients when uploading files."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "image/png",
              "image/jpeg",
              "application/pdf"
            ]
          },
          {
            type: "paragraph",
            content:
              "Your server can inspect the uploaded file's MIME type to perform basic validation."
          },
          {
            type: "paragraph",
            content:
              "However, never trust it completely. Clients can forge MIME types, so critical applications should also inspect the file's actual contents (sometimes called checking the \"magic bytes\" or file signature)."
          }
        ]
      },

      {
        heading: "Content Negotiation (Basic Concept)",
        blocks: [
          {
            type: "paragraph",
            content:
              "HTTP allows clients to indicate which formats they can accept using the `Accept` request header."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: "Accept: application/json"
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: "Accept: text/html"
          },
          {
            type: "paragraph",
            content:
              "A server can examine this header and respond with the most appropriate MIME type."
          },
          {
            type: "paragraph",
            content:
              "For example, the same endpoint might return HTML for a browser and JSON for an API client. This process is called content negotiation. Full content negotiation is beyond the scope of this lesson, but understanding that MIME types are central to it is useful."
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
                question: "Forgetting the Content-Type header",
                answer:
                  "Always specify the correct MIME type when serving known content."
              },
              {
                question: "Serving JSON as text",
                answer:
                  "Incorrect: `Content-Type: text/plain`\nCorrect: `Content-Type: application/json`"
              },
              {
                question: "Serving CSS as HTML",
                answer:
                  "Incorrect: `Content-Type: text/html`\nCorrect: `Content-Type: text/css`"
              },
              {
                question: "Using incorrect image MIME types",
                answer:
                  "Wrong: `image/jpg`\nCorrect: `image/jpeg`"
              },
              {
                question: "Assuming browsers always guess correctly",
                answer:
                  "Older browsers sometimes attempted MIME sniffing—guessing the file type when the header was missing or incorrect. Modern browsers are much stricter for security reasons. Always send accurate `Content-Type` headers instead of relying on browser guesses."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-World Example: Serving Multiple File Types",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import mime from "mime-types";

http.createServer((req, res) => {

    const filePath =
        path.join("public", req.url);

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            return res.end("File not found");
        }

        const contentType =
            mime.lookup(filePath) ||
            "application/octet-stream";

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);

    });

}).listen(3000);`
          },
          {
            type: "paragraph",
            content:
              "This simple server can correctly return HTML, CSS, JavaScript, JSON, images, PDFs, and many other file types based on the requested file's extension."
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
              "Always send the correct `Content-Type` header.",
              "Use UTF-8 (`charset=utf-8`) for text-based responses.",
              "Prefer `application/json` for API responses.",
              "Use a MIME lookup library instead of manually maintaining large mappings.",
              "Fall back to `application/octet-stream` for unknown file types.",
              "Combine `Content-Type` with `Content-Disposition` when you want downloads.",
              "Never rely on browser MIME sniffing; send explicit types.",
              "Validate uploaded files using more than just the reported MIME type when security matters.",
              "Keep MIME type mappings updated as new file formats emerge."
            ]
          },
          {
            type: "paragraph",
            content:
              "MIME types may seem like a small detail, but they are fundamental to HTTP communication. They tell browsers, APIs, and other clients exactly how to interpret the bytes they receive, ensuring that web pages render correctly, scripts execute safely, images display properly, and downloads behave as expected. Mastering MIME types is therefore an essential skill for building reliable, secure, and standards-compliant Node.js web servers."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "In this lesson, you learned that MIME types are standardized strings that identify the format of content being transferred over HTTP. You explored the most common MIME types for HTML, CSS, JavaScript, JSON, images, documents, fonts, audio, and video, and you learned how the `Content-Type` header tells browsers how to interpret received data."
          },
          {
            type: "paragraph",
            content:
              "You also discovered how to serve different file types correctly in Node.js, how to detect MIME types using file extensions, how to use the `mime-types` package for production-grade applications, and why choosing the correct MIME type is essential for security, browser compatibility, and API design. Understanding MIME types ensures your server communicates clearly with clients and that users always receive the correct content."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content:
              "💡 One of the most subtle yet important concepts in web development is that the same binary data can be interpreted completely differently depending solely on the `Content-Type` header. A PNG image served as `text/plain` will appear as gibberish; a JSON response served as `text/html` may be ignored by frontend JavaScript. This is why professional HTTP servers always send explicit, correct MIME types. Another overlooked aspect is that MIME types are also a security boundary. Browsers have historically used MIME sniffing to guess content types, which attackers have exploited to execute malicious scripts. Modern browsers are stricter, but sending the correct `Content-Type` remains a key part of defense-in-depth security. A good rule of thumb: never rely on the browser to guess what you're sending. Always tell it explicitly."
          }
        ]
      }
    ]
  },
};

export default nodejsHttpServer;