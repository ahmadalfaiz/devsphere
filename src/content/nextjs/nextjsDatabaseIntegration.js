const nextjsDatabaseIntegration = {

/* ===========================
    First Topic : Environment Variables
============================= */
    "nextjs-environment-variables": {
    title: "Environment Variables",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Environment variables are one of the most important configuration mechanisms in a modern Next.js application. They allow you to keep **configuration separate from application code**, use different values across development, testing, staging, and production, and keep sensitive information such as database credentials and private API keys out of your source code."
          },
          {
            type: "paragraph",
            content: "For example, your application might need:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A database connection string",
              "Authentication secrets",
              "API keys",
              "OAuth client credentials",
              "Payment provider keys",
              "Email service credentials",
              "Storage credentials",
              "Application URLs",
              "Feature flags",
              "Analytics identifiers",
              "Third-party service configuration"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of hardcoding these values:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const databaseUrl = "postgresql://user:password@production-db.com/mydb";`
          },
          {
            type: "paragraph",
            content: "you can write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const databaseUrl = process.env.DATABASE_URL;`
          },
          {
            type: "paragraph",
            content: "and define the actual value outside your application source code."
          },
          {
            type: "paragraph",
            content: "Next.js provides built-in support for environment variables and automatically loads `.env*` files into `process.env`."
          }
        ]
      },

      {
        heading: "What You Will Learn",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "What environment variables are",
              "Why Next.js applications need them",
              "Environment variables vs hardcoded configuration",
              ".env files",
              ".env.local",
              ".env.development",
              ".env.production",
              ".env.test",
              ".env.*.local",
              "Environment-variable load order",
              "Accessing variables with process.env",
              "Server-only variables",
              "NEXT_PUBLIC_ variables",
              "The server/client boundary",
              "Build-time vs runtime variables",
              "Dynamic runtime configuration",
              "Variable interpolation",
              "Multiline environment variables",
              "next.config.js env",
              "@next/env",
              "Environment variables outside Next.js",
              "Database credentials",
              "API keys and secrets",
              "Authentication secrets",
              "Production environment management",
              "Preview/staging environments",
              "Docker considerations",
              "CI/CD",
              ".env.example",
              "Environment validation",
              "Security best practices",
              "Common mistakes",
              "Debugging undefined",
              "Production-ready architecture",
              "Practical examples"
            ]
          }
        ]
      },

      {
        heading: "What Are Environment Variables?",
        blocks: [
          {
            type: "paragraph",
            content: "An environment variable is a **key-value pair supplied to an application by its execution environment**."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://user:password@localhost:5432/mydb"`
          },
          {
            type: "paragraph",
            content: "Here:"
          },
          {
            type: "code",
            language: "text",
            content: `DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "is the variable name, while:"
          },
          {
            type: "code",
            language: "text",
            content: `postgresql://user:password@localhost:5432/mydb`
          },
          {
            type: "paragraph",
            content: "is its value."
          },
          {
            type: "paragraph",
            content: "Inside your Next.js application, you can access it using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "Conceptually:"
          },
          {
            type: "flow",
            steps: [
              "Environment", "→",
              "DATABASE_URL=...", "→",
              "Next.js loads it", "→",
              "process.env", "→",
              "Your server-side code"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js has built-in support for loading variables from `.env*` files."
          }
        ]
      },

      {
        heading: "Why Use Environment Variables?",
        blocks: [
          {
            type: "paragraph",
            content: "Consider a database connection."
          },
          {
            type: "paragraph",
            content: "Without environment variables:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const db = connect(\n  "postgresql://admin:password123@production.example.com/database"\n);`
          },
          {
            type: "paragraph",
            content: "This creates several problems."
          },
          {
            type: "paragraph",
            content: "Problem 1: Credentials are inside source code"
          },
          {
            type: "paragraph",
            content: "Anyone who gains access to the repository may see them."
          },
          {
            type: "paragraph",
            content: "Problem 2: Development and production become difficult"
          },
          {
            type: "paragraph",
            content: "Your local application needs one database:"
          },
          {
            type: "code",
            language: "text",
            content: `localhost`
          },
          {
            type: "paragraph",
            content: "while production needs another:"
          },
          {
            type: "code",
            language: "text",
            content: `production database`
          },
          {
            type: "paragraph",
            content: "Problem 3: Configuration changes require source-code changes"
          },
          {
            type: "paragraph",
            content: "Changing the database URL means modifying application code."
          },
          {
            type: "paragraph",
            content: "Problem 4: Secrets can accidentally enter Git history"
          },
          {
            type: "paragraph",
            content: "Even deleting a secret later doesn't necessarily remove it from Git history."
          },
          {
            type: "paragraph",
            content: "Environment variables solve this by separating:"
          },
          {
            type: "flow",
            steps: [
              "Application Code", "→",
              "Environment Configuration", "→",
              "Application"
            ]
          },
          {
            type: "paragraph",
            content: "The same application can therefore run with different configuration:"
          },
          {
            type: "flow",
            steps: [
              "Development", "→",
              "Local database"
            ]
          },
          {
            type: "flow",
            steps: [
              "Testing", "→",
              "Test database"
            ]
          },
          {
            type: "flow",
            steps: [
              "Preview/Staging", "→",
              "Staging database"
            ]
          },
          {
            type: "flow",
            steps: [
              "Production", "→",
              "Production database"
            ]
          }
        ]
      },

      {
        heading: "Environment Variables vs Hardcoded Values",
        blocks: [
          {
            type: "paragraph",
            content: "❌ Hardcoded"
          },
          {
            type: "code",
            language: "javascript",
            content: `const API_KEY = "sk-secret-123";`
          },
          {
            type: "paragraph",
            content: "✅ Environment variable"
          },
          {
            type: "code",
            language: "javascript",
            content: `const API_KEY = process.env.API_KEY;`
          },
          {
            type: "paragraph",
            content: "And:"
          },
          {
            type: "code",
            language: "env",
            content: `API_KEY=sk-secret-123`
          },
          {
            type: "paragraph",
            content: "This gives you a clean separation:"
          },
          {
            type: "flow",
            steps: [
              "Source code", "→",
              "same code everywhere"
            ]
          },
          {
            type: "flow",
            steps: [
              "Environment", "→",
              "different configuration per environment"
            ]
          },
          {
            type: "paragraph",
            content: "This is one of the fundamental principles behind environment-independent deployments."
          }
        ]
      },

      {
        heading: "Creating an Environment File",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js supports several `.env*` files."
          },
          {
            type: "paragraph",
            content: "The simplest approach is:"
          },
          {
            type: "tree",
            content: `my-next-app/\n├── app/\n├── public/\n├── package.json\n├── next.config.js\n├── .env.local\n└── ...`
          },
          {
            type: "paragraph",
            content: "Create:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://localhost:5432/myapp"\nAPI_KEY="my-secret-key"`
          },
          {
            type: "paragraph",
            content: "Next.js automatically loads these values into `process.env`."
          }
        ]
      },

      {
        heading: "Using an Environment Variable",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "You can access it on the server:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const apiUrl = process.env.API_URL;`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function Page() {\n  const response = await fetch(process.env.API_URL);\n\n  const data = await response.json();\n\n  return (\n    <main>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </main>\n  );\n}`
          },
          {
            type: "paragraph",
            content: "The important distinction is that this code is executing on the **server**."
          }
        ]
      },

      {
        heading: "The Most Important Rule: Server vs Client",
        blocks: [
          {
            type: "paragraph",
            content: "This is probably the single most important concept in Next.js environment variables."
          },
          {
            type: "paragraph",
            content: "Next.js essentially has two execution environments:"
          },
          {
            type: "flow",
            steps: [
              "Next.js Application", "→",
              "Server", "→",
              "Private variables", "→",
              "DATABASE_URL, API_SECRET, JWT_SECRET, STRIPE_SECRET_KEY"
            ]
          },
          {
            type: "flow",
            steps: [
              "Next.js Application", "→",
              "Browser", "→",
              "Public variables", "→",
              "NEXT_PUBLIC_*"
            ]
          },
          {
            type: "paragraph",
            content: "By default, environment variables are available to server-side code."
          },
          {
            type: "paragraph",
            content: "They are **not automatically available to browser-side JavaScript**."
          },
          {
            type: "paragraph",
            content: "This is intentional."
          },
          {
            type: "paragraph",
            content: "If every environment variable were automatically sent to the browser, a variable such as:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_PASSWORD=super-secret`
          },
          {
            type: "paragraph",
            content: "could potentially become visible to every user."
          }
        ]
      },

      {
        heading: "Server-Only Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Server-only variables should normally **not** have the `NEXT_PUBLIC_` prefix."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://..."\nJWT_SECRET="very-secret-value"\nSTRIPE_SECRET_KEY="sk_live_..."\nOPENAI_API_KEY="..."\nSMTP_PASSWORD="..."`
          },
          {
            type: "paragraph",
            content: "These can be used by server-side code:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const databaseUrl = process.env.DATABASE_URL;`
          },
          {
            type: "paragraph",
            content: "For example, inside a Route Handler:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export async function GET() {\n  const databaseUrl = process.env.DATABASE_URL;\n\n  // Use databaseUrl on the server\n\n  return Response.json({\n    success: true,\n  });\n}`
          },
          {
            type: "paragraph",
            content: "The secret itself does not need to be sent to the browser."
          }
        ]
      },

      {
        heading: "Public Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes the browser genuinely needs configuration."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_APP_NAME="DevSphere"\nNEXT_PUBLIC_ANALYTICS_ID="G-123456"\nNEXT_PUBLIC_API_BASE_URL="https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "The special prefix is:"
          },
          {
            type: "code",
            language: "text",
            content: `NEXT_PUBLIC_`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_APP_NAME="My Application"`
          },
          {
            type: "paragraph",
            content: "You can then use:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Header() {\n  return (\n    <header>\n      {process.env.NEXT_PUBLIC_APP_NAME}\n    </header>\n  );\n}`
          },
          {
            type: "paragraph",
            content: "Next.js makes `NEXT_PUBLIC_*` variables available to browser-side code by inlining their values into the JavaScript bundle during the build."
          }
        ]
      },

      {
        heading: "NEXT_PUBLIC_ Does NOT Mean Secret",
        blocks: [
          {
            type: "paragraph",
            content: "This is a critical security rule:"
          },
          {
            type: "quote",
            content: "Anything prefixed with `NEXT_PUBLIC_` should be considered public."
          },
          {
            type: "paragraph",
            content: "Never do this:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_DATABASE_PASSWORD="secret"`
          },
          {
            type: "paragraph",
            content: "or:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_STRIPE_SECRET_KEY="sk_live_..."`
          },
          {
            type: "paragraph",
            content: "or:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_JWT_SECRET="..."`
          },
          {
            type: "paragraph",
            content: "That effectively tells Next.js:"
          },
          {
            type: "quote",
            content: "Put this value into code that users can download."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_PASSWORD="secret"\nSTRIPE_SECRET_KEY="sk_live_..."\nJWT_SECRET="..."`
          },
          {
            type: "paragraph",
            content: "Keep them server-only."
          }
        ]
      },

      {
        heading: "Public Does Not Necessarily Mean Dangerous",
        blocks: [
          {
            type: "paragraph",
            content: "Not every API-related value is secret."
          },
          {
            type: "paragraph",
            content: "For example, some services intentionally provide a browser-safe public key:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_MAPS_API_KEY="public-key"`
          },
          {
            type: "paragraph",
            content: "or:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_ANALYTICS_ID="G-ABC123"`
          },
          {
            type: "paragraph",
            content: "Whether something is safe depends on the service's security model."
          },
          {
            type: "paragraph",
            content: "The rule is:"
          },
          {
            type: "quote",
            content: "Only expose a value if the service explicitly expects it to be public."
          },
          {
            type: "paragraph",
            content: "Don't assume something is safe merely because it's called an \"API key.\""
          }
        ]
      },

      {
        heading: ".env Files in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js supports several environment-file conventions."
          },
          {
            type: "paragraph",
            content: "Common files include:"
          },
          {
            type: "code",
            language: "text",
            content: `.env\n.env.local\n.env.development\n.env.development.local\n.env.production\n.env.production.local\n.env.test\n.env.test.local`
          },
          {
            type: "paragraph",
            content: "Their purpose is different."
          }
        ]
      },

      {
        heading: ".env",
        blocks: [
          {
            type: "paragraph",
            content: "`.env` is useful for shared default configuration."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "env",
            content: `APP_NAME="My Application"\nDEFAULT_PAGE_SIZE=20`
          },
          {
            type: "paragraph",
            content: "You can use it for values that are safe to share with the project."
          },
          {
            type: "paragraph",
            content: "However, don't treat `.env` as a secure vault."
          },
          {
            type: "paragraph",
            content: "If a value is secret, don't casually commit it."
          }
        ]
      },

      {
        heading: ".env.local",
        blocks: [
          {
            type: "paragraph",
            content: "For local development, `.env.local` is often the most convenient choice."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://localhost:5432/myapp"\nAPI_SECRET="local-secret"`
          },
          {
            type: "paragraph",
            content: "This file is intended for local overrides and sensitive local configuration."
          },
          {
            type: "paragraph",
            content: "The default `create-next-app` setup adds environment files to `.gitignore`, because environment files commonly contain secrets."
          },
          {
            type: "paragraph",
            content: "A typical setup is:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "for your actual local values and:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.example`
          },
          {
            type: "paragraph",
            content: "for documentation."
          }
        ]
      },

      {
        heading: ".env.development",
        blocks: [
          {
            type: "paragraph",
            content: "This file is used when the application runs in development mode."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="https://dev-api.example.com"`
          },
          {
            type: "paragraph",
            content: "When using:"
          },
          {
            type: "code",
            language: "bash",
            content: `next dev`
          },
          {
            type: "paragraph",
            content: "Next.js sets:"
          },
          {
            type: "code",
            language: "text",
            content: `NODE_ENV=development`
          },
          {
            type: "paragraph",
            content: "and loads development-specific environment configuration."
          }
        ]
      },

      {
        heading: ".env.production",
        blocks: [
          {
            type: "paragraph",
            content: "This file is intended for production configuration."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "When running a production build/application, production-specific environment files can be used."
          },
          {
            type: "paragraph",
            content: "However, for real deployments, it's often better to configure production secrets through your hosting platform rather than committing a `.env.production` containing real credentials."
          }
        ]
      },

      {
        heading: ".env.test",
        blocks: [
          {
            type: "paragraph",
            content: "Testing has its own environment:"
          },
          {
            type: "code",
            language: "text",
            content: `NODE_ENV=test`
          },
          {
            type: "paragraph",
            content: "You can create:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.test`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://localhost:5432/myapp_test"`
          },
          {
            type: "paragraph",
            content: "This prevents automated tests from accidentally using your development or production database."
          },
          {
            type: "paragraph",
            content: "Next.js specifically treats testing differently: `.env.local` isn't loaded in the test environment, helping make test configuration more deterministic."
          }
        ]
      },

      {
        heading: ".env.*.local",
        blocks: [
          {
            type: "paragraph",
            content: "You can also have environment-specific local overrides."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.development.local\n.env.production.local\n.env.test.local`
          },
          {
            type: "paragraph",
            content: "These are useful when you want local overrides for a particular environment."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `.env\n.env.development\n.env.development.local`
          },
          {
            type: "paragraph",
            content: "might represent:"
          },
          {
            type: "flow",
            steps: [
              "shared defaults", "→",
              "development defaults", "→",
              "developer-specific override"
            ]
          }
        ]
      },

      {
        heading: "Environment Variable Load Order",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js doesn't randomly choose between environment files."
          },
          {
            type: "paragraph",
            content: "It follows a defined lookup order:"
          },
          {
            type: "flow",
            steps: [
              "1. process.env", "→",
              "2. .env.$(NODE_ENV).local", "→",
              "3. .env.local", "→",
              "4. .env.$(NODE_ENV)", "→",
              "5. .env"
            ]
          },
          {
            type: "paragraph",
            content: "It stops when it finds the variable."
          },
          {
            type: "paragraph",
            content: "For development:"
          },
          {
            type: "flow",
            steps: [
              "process.env", "→",
              ".env.development.local", "→",
              ".env.local", "→",
              ".env.development", "→",
              ".env"
            ]
          },
          {
            type: "paragraph",
            content: "For production:"
          },
          {
            type: "flow",
            steps: [
              "process.env", "→",
              ".env.production.local", "→",
              ".env.local", "→",
              ".env.production", "→",
              ".env"
            ]
          },
          {
            type: "paragraph",
            content: "One important exception:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "is not loaded when:"
          },
          {
            type: "code",
            language: "text",
            content: `NODE_ENV=test`
          },
          {
            type: "paragraph",
            content: "This behavior helps keep tests reproducible."
          }
        ]
      },

      {
        heading: "Example of Override Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose `.env` contains:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="https://default.example.com"`
          },
          {
            type: "paragraph",
            content: "And `.env.local` contains:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="http://localhost:3000"`
          },
          {
            type: "paragraph",
            content: "During local development:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.API_URL`
          },
          {
            type: "paragraph",
            content: "will resolve to:"
          },
          {
            type: "code",
            language: "text",
            content: `http://localhost:3000`
          },
          {
            type: "paragraph",
            content: "because `.env.local` has higher priority."
          }
        ]
      },

      {
        heading: ".env Files Belong at the Project Root",
        blocks: [
          {
            type: "paragraph",
            content: "If your project uses:"
          },
          {
            type: "code",
            language: "text",
            content: `src/`
          },
          {
            type: "paragraph",
            content: "you should **not** put `.env.local` inside `src/`."
          },
          {
            type: "paragraph",
            content: "Incorrect:"
          },
          {
            type: "tree",
            content: `src/\n└── .env.local`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "tree",
            content: `my-app/\n├── src/\n├── public/\n├── package.json\n└── .env.local`
          },
          {
            type: "paragraph",
            content: "Next.js expects `.env*` files at the project root."
          }
        ]
      },

      {
        heading: "Reading Environment Variables with process.env",
        blocks: [
          {
            type: "paragraph",
            content: "The standard syntax is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.VARIABLE_NAME`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const databaseUrl = process.env.DATABASE_URL;`
          },
          {
            type: "paragraph",
            content: "Another:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const secret = process.env.JWT_SECRET;`
          },
          {
            type: "paragraph",
            content: "And:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const appUrl = process.env.NEXT_PUBLIC_APP_URL;`
          },
          {
            type: "paragraph",
            content: "Remember that availability depends on where the code executes."
          }
        ]
      },

      {
        heading: "Environment Variables Are Strings",
        blocks: [
          {
            type: "paragraph",
            content: "Environment variables are fundamentally text values."
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "env",
            content: `PORT=3000\nDEBUG=true\nMAX_CONNECTIONS=10`
          },
          {
            type: "paragraph",
            content: "You shouldn't assume these automatically become:"
          },
          {
            type: "code",
            language: "javascript",
            content: `number\nboolean\nnumber`
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const port = Number(process.env.PORT);\nconst debug = process.env.DEBUG === "true";\nconst maxConnections = Number(process.env.MAX_CONNECTIONS);`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const isProduction = process.env.NODE_ENV === "production";`
          }
        ]
      },

      {
        heading: "Provide Defaults Carefully",
        blocks: [
          {
            type: "paragraph",
            content: "You can provide a fallback:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const port = process.env.PORT || "3000";`
          },
          {
            type: "paragraph",
            content: "Or:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const appName =\n  process.env.NEXT_PUBLIC_APP_NAME || "My Application";`
          },
          {
            type: "paragraph",
            content: "This can be useful for optional configuration."
          },
          {
            type: "paragraph",
            content: "But don't blindly use fallbacks for required secrets."
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const databaseUrl =\n  process.env.DATABASE_URL || "some-default-database";`
          },
          {
            type: "paragraph",
            content: "If the database URL is required, it is usually better to fail immediately."
          }
        ]
      },

      {
        heading: "Validate Required Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "One of the strongest improvements you can make to a production Next.js application is **environment validation**."
          },
          {
            type: "paragraph",
            content: "Imagine production starts without:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "Your application might eventually crash when a user reaches a page that accesses the database."
          },
          {
            type: "paragraph",
            content: "A better approach is to validate configuration early."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const requiredEnv = [\n  "DATABASE_URL",\n  "AUTH_SECRET",\n];\n\nfor (const name of requiredEnv) {\n  if (!process.env[name]) {\n    throw new Error(\`Missing environment variable: \${name}\`);\n  }\n}`
          },
          {
            type: "paragraph",
            content: "Now configuration problems are discovered much earlier."
          }
        ]
      },

      {
        heading: "Schema Validation with Zod",
        blocks: [
          {
            type: "paragraph",
            content: "For larger applications, you can use a validation library such as Zod."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install zod`
          },
          {
            type: "paragraph",
            content: "Create:"
          },
          {
            type: "code",
            language: "text",
            content: `src/lib/env.ts`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `import { z } from "zod";\n\nconst envSchema = z.object({\n  DATABASE_URL: z.string().min(1),\n  AUTH_SECRET: z.string().min(1),\n  NEXT_PUBLIC_APP_URL: z.string().url(),\n});\n\nexport const env = envSchema.parse({\n  DATABASE_URL: process.env.DATABASE_URL,\n  AUTH_SECRET: process.env.AUTH_SECRET,\n  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,\n});`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `import { env } from "@/lib/env";\n\nconsole.log(env.DATABASE_URL);`
          },
          {
            type: "paragraph",
            content: "This provides a centralized configuration boundary."
          }
        ]
      },

      {
        heading: "Why Centralized Environment Configuration Is Better",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of scattering:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "through dozens of files, you can create:"
          },
          {
            type: "flow",
            steps: [
              "Environment", "→",
              "Validation", "→",
              "Central configuration", "→",
              "Application"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "tree",
            content: `src/\n├── lib/\n│   ├── env.ts\n│   ├── db.ts\n│   └── auth.ts`
          },
          {
            type: "paragraph",
            content: "This makes it easier to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "validate configuration",
              "document required variables",
              "catch typos",
              "distinguish public/private variables",
              "test configuration",
              "maintain large applications"
            ]
          }
        ]
      },

      {
        heading: "Server Components and Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "With the App Router, Server Components run on the server by default."
          },
          {
            type: "paragraph",
            content: "Therefore, they can safely access server-only variables."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default async function Dashboard() {\n  const databaseUrl = process.env.DATABASE_URL;\n\n  return (\n    <main>\n      <h1>Dashboard</h1>\n    </main>\n  );\n}`
          },
          {
            type: "paragraph",
            content: "However, don't render the actual secret:"
          },
          {
            type: "code",
            language: "jsx",
            content: `return <p>{process.env.DATABASE_URL}</p>;`
          },
          {
            type: "paragraph",
            content: "The fact that code executes on the server doesn't mean you should expose the value in HTML."
          }
        ]
      },

      {
        heading: "Client Components and Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";\n\nexport default function Settings() {\n  const value = process.env.DATABASE_URL;\n\n  return <div>{value}</div>;\n}`
          },
          {
            type: "paragraph",
            content: "This is wrong."
          },
          {
            type: "paragraph",
            content: "`DATABASE_URL` is server-only."
          },
          {
            type: "paragraph",
            content: "If the browser needs a value, explicitly mark it public:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_APP_URL="https://example.com"`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "jsx",
            content: `"use client";\n\nexport default function Settings() {\n  return (\n    <div>\n      {process.env.NEXT_PUBLIC_APP_URL}\n    </div>\n  );\n}`
          },
          {
            type: "paragraph",
            content: "The important architecture is:"
          },
          {
            type: "flow",
            steps: [
              "Server", "→",
              "private environment", "→",
              "DATABASE_URL, API_SECRET, AUTH_SECRET", "→",
              "Server Code", "→",
              "controlled output", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Don't move secrets across that boundary."
          }
        ]
      },

      {
        heading: "Server Actions and Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Server Actions execute on the server."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "ts",
            content: `"use server";\n\nexport async function createUser(formData: FormData) {\n  const databaseUrl = process.env.DATABASE_URL;\n\n  // Database operation...\n}`
          },
          {
            type: "paragraph",
            content: "The browser calls the action, but the secret remains on the server."
          },
          {
            type: "paragraph",
            content: "Conceptually:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "submit", "→",
              "Server Action", "→",
              "DATABASE_URL, AUTH_SECRET, API_SECRET", "→",
              "Database / External API"
            ]
          },
          {
            type: "paragraph",
            content: "This is one reason Server Actions can be useful for mutations involving sensitive server-side services."
          }
        ]
      },

      {
        heading: "Route Handlers and Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Route Handlers also execute server-side."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "ts",
            content: `import { NextResponse } from "next/server";\n\nexport async function GET() {\n  const apiKey = process.env.INTERNAL_API_KEY;\n\n  const response = await fetch(\n    "https://api.example.com/data",\n    {\n      headers: {\n        Authorization: \`Bearer \${apiKey}\`,\n      },\n    }\n  );\n\n  const data = await response.json();\n\n  return NextResponse.json(data);\n}`
          },
          {
            type: "paragraph",
            content: "The browser receives:"
          },
          {
            type: "code",
            language: "json",
            content: `{\n  "data": "...",\n}`
          },
          {
            type: "paragraph",
            content: "but doesn't receive:"
          },
          {
            type: "code",
            language: "text",
            content: `INTERNAL_API_KEY`
          },
          {
            type: "paragraph",
            content: "That's the correct server-to-service architecture."
          }
        ]
      },

      {
        heading: "Never Use a Secret as a Client-Side Shortcut",
        blocks: [
          {
            type: "paragraph",
            content: "A common beginner mistake is:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_API_KEY="secret-key"`
          },
          {
            type: "paragraph",
            content: "because:"
          },
          {
            type: "code",
            language: "tsx",
            content: `"use client";\n\nfetch("https://api.example.com", {\n  headers: {\n    Authorization: process.env.NEXT_PUBLIC_API_KEY,\n  },\n});`
          },
          {
            type: "paragraph",
            content: "works."
          },
          {
            type: "paragraph",
            content: "Technically it works."
          },
          {
            type: "paragraph",
            content: "Security-wise, that may be disastrous."
          },
          {
            type: "paragraph",
            content: "A better architecture is:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "request", "→",
              "Next.js Route Handler", "→",
              "secret API key", "→",
              "Third-party API", "→",
              "Next.js", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "This keeps the secret on the server."
          }
        ]
      },

      {
        heading: "Build-Time vs Runtime Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the most misunderstood parts of Next.js."
          },
          {
            type: "paragraph",
            content: "There are two important concepts:"
          },
          {
            type: "code",
            language: "text",
            content: `Build time\nRuntime`
          },
          {
            type: "paragraph",
            content: "Some values are embedded during:"
          },
          {
            type: "code",
            language: "bash",
            content: `next build`
          },
          {
            type: "paragraph",
            content: "while others can be read when the application is actually running."
          }
        ]
      },

      {
        heading: "NEXT_PUBLIC_ Variables Are Build-Time Values",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_API_URL="https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "and you run:"
          },
          {
            type: "code",
            language: "bash",
            content: `next build`
          },
          {
            type: "paragraph",
            content: "Next.js can inline the value into the browser bundle."
          },
          {
            type: "paragraph",
            content: "Conceptually:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.NEXT_PUBLIC_API_URL`
          },
          {
            type: "paragraph",
            content: "becomes something similar to:"
          },
          {
            type: "code",
            language: "javascript",
            content: `"https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "after the build."
          },
          {
            type: "paragraph",
            content: "Therefore:"
          },
          {
            type: "flow",
            steps: [
              "Build", "→",
              "NEXT_PUBLIC_API_URL", "→",
              "JavaScript bundle", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "The official documentation explicitly warns that changing these variables after the build won't change the already-built client bundle."
          }
        ]
      },

      {
        heading: "Why This Matters During Deployment",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "code",
            language: "text",
            content: `Build environment:\nNEXT_PUBLIC_API_URL=https://staging-api.example.com`
          },
          {
            type: "paragraph",
            content: "Then you deploy the exact same build artifact to production and set:"
          },
          {
            type: "code",
            language: "text",
            content: `NEXT_PUBLIC_API_URL=https://api.example.com`
          },
          {
            type: "paragraph",
            content: "That does **not** necessarily change the already-built browser code."
          },
          {
            type: "paragraph",
            content: "The production bundle may still contain:"
          },
          {
            type: "code",
            language: "text",
            content: `https://staging-api.example.com`
          },
          {
            type: "paragraph",
            content: "because the public value was determined during the build."
          },
          {
            type: "paragraph",
            content: "This is particularly important when using:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Docker",
              "CI/CD",
              "artifact promotion",
              "multi-environment deployments"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js explicitly documents this build-time freezing behavior for public variables."
          }
        ]
      },

      {
        heading: "Runtime Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Server-side code can access environment variables at runtime."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "ts",
            content: `export default async function Page() {\n  const databaseUrl = process.env.DATABASE_URL;\n\n  // Use it here\n}`
          },
          {
            type: "paragraph",
            content: "This allows the same server application artifact to potentially operate with different runtime configuration."
          },
          {
            type: "paragraph",
            content: "Next.js documents runtime environment support and recommends server-side mechanisms when values must remain dynamic after build time."
          }
        ]
      },

      {
        heading: "Dynamic Runtime Configuration for the Browser",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your browser needs a configuration value that must change **without rebuilding the application**."
          },
          {
            type: "paragraph",
            content: "You shouldn't assume:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_API_URL`
          },
          {
            type: "paragraph",
            content: "can do that."
          },
          {
            type: "paragraph",
            content: "Instead, you can expose a controlled runtime configuration through a server endpoint."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "ts",
            content: `export async function GET() {\n  return Response.json({\n    apiBaseUrl: process.env.API_BASE_URL,\n  });\n}`
          },
          {
            type: "paragraph",
            content: "Then the client can request:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const response = await fetch("/api/config");\nconst config = await response.json();`
          },
          {
            type: "paragraph",
            content: "The architecture becomes:"
          },
          {
            type: "flow",
            steps: [
              "Runtime environment", "→",
              "Next.js server", "→",
              "/api/config", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "Only expose values that are actually safe for the browser."
          }
        ]
      },

      {
        heading: "Environment Variables and Docker",
        blocks: [
          {
            type: "paragraph",
            content: "Docker introduces an important deployment consideration."
          },
          {
            type: "paragraph",
            content: "Suppose you build:"
          },
          {
            type: "code",
            language: "bash",
            content: `docker build -t my-next-app .`
          },
          {
            type: "paragraph",
            content: "and `NEXT_PUBLIC_API_URL` is required during:"
          },
          {
            type: "code",
            language: "bash",
            content: `next build`
          },
          {
            type: "paragraph",
            content: "Changing the value later with:"
          },
          {
            type: "code",
            language: "bash",
            content: `docker run -e NEXT_PUBLIC_API_URL="..." my-next-app`
          },
          {
            type: "paragraph",
            content: "may be too late for client-side code because the public value may already have been embedded in the JavaScript bundle."
          },
          {
            type: "paragraph",
            content: "This is why Docker deployments need a clear distinction between:"
          },
          {
            type: "code",
            language: "text",
            content: `Build-time configuration`
          },
          {
            type: "paragraph",
            content: "and:"
          },
          {
            type: "code",
            language: "text",
            content: `Runtime server configuration`
          },
          {
            type: "paragraph",
            content: "The current Next.js documentation specifically highlights this issue for promoting a single Docker image between environments."
          }
        ]
      },

      {
        heading: "Environment Variables in CI/CD",
        blocks: [
          {
            type: "paragraph",
            content: "In a CI/CD pipeline, you might have:"
          },
          {
            type: "flow",
            steps: [
              "Git repository", "→",
              "CI server", "→",
              "Install dependencies", "→",
              "Inject environment variables", "→",
              "next build", "→",
              "Deploy"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `DATABASE_URL\nAUTH_SECRET\nNEXT_PUBLIC_APP_URL`
          },
          {
            type: "paragraph",
            content: "can be supplied through your CI/CD platform's secret/environment configuration rather than committing them to Git."
          },
          {
            type: "paragraph",
            content: "This makes deployments repeatable while keeping secrets outside source control."
          }
        ]
      },

      {
        heading: "Production Environment Management",
        blocks: [
          {
            type: "paragraph",
            content: "For production applications, avoid relying exclusively on:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.production`
          },
          {
            type: "paragraph",
            content: "with real secrets committed to your repository."
          },
          {
            type: "paragraph",
            content: "A better model is:"
          },
          {
            type: "flow",
            steps: [
              "Local", "→",
              ".env.local"
            ]
          },
          {
            type: "flow",
            steps: [
              "CI/CD", "→",
              "Secret manager / CI secrets"
            ]
          },
          {
            type: "flow",
            steps: [
              "Production hosting", "→",
              "Environment configuration"
            ]
          },
          {
            type: "paragraph",
            content: "For example, Vercel allows environment variables to be scoped to environments such as Production, Preview, and Development."
          },
          {
            type: "paragraph",
            content: "This gives you:"
          },
          {
            type: "code",
            language: "text",
            content: `Development\nDATABASE_URL → development DB\n\nPreview\nDATABASE_URL → staging DB\n\nProduction\nDATABASE_URL → production DB`
          }
        ]
      },

      {
        heading: "Preview Environments Are Important",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you deploy every pull request."
          },
          {
            type: "paragraph",
            content: "You don't want:"
          },
          {
            type: "code",
            language: "text",
            content: `Pull Request #52\n      ↓\nProduction Database`
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "flow",
            steps: [
              "Pull Request", "→",
              "Preview deployment", "→",
              "Preview environment", "→",
              "Staging database"
            ]
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://preview-db..."`
          },
          {
            type: "paragraph",
            content: "while production has:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://production-db..."`
          },
          {
            type: "paragraph",
            content: "This prevents testing changes against real production data."
          }
        ]
      },

      {
        heading: ".env.example",
        blocks: [
          {
            type: "paragraph",
            content: "One of the best practices missing from many beginner tutorials is a proper `.env.example`."
          },
          {
            type: "paragraph",
            content: "Suppose your application requires:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL=\nAUTH_SECRET=\nSTRIPE_SECRET_KEY=\nNEXT_PUBLIC_APP_URL=`
          },
          {
            type: "paragraph",
            content: "Create:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.example`
          },
          {
            type: "paragraph",
            content: "with:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL=\nAUTH_SECRET=\nSTRIPE_SECRET_KEY=\nNEXT_PUBLIC_APP_URL=`
          },
          {
            type: "paragraph",
            content: "Commit this file."
          },
          {
            type: "paragraph",
            content: "Don't put actual secrets inside it."
          },
          {
            type: "paragraph",
            content: "Then another developer can do:"
          },
          {
            type: "code",
            language: "bash",
            content: `cp .env.example .env.local`
          },
          {
            type: "paragraph",
            content: "and fill in their local values."
          },
          {
            type: "paragraph",
            content: "This provides a configuration contract for the project. Vercel's current guidance also recommends committing `.env.example` while keeping actual secret values out of source control."
          }
        ]
      },

      {
        heading: ".env.example vs .env.local",
        blocks: [
          {
            type: "paragraph",
            content: "Think of them this way:"
          },
          {
            type: "paragraph",
            content: "`.env.example`"
          },
          {
            type: "code",
            language: "text",
            content: `Documentation`
          },
          {
            type: "paragraph",
            content: "Contains:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL=\nAUTH_SECRET=`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`.env.local`"
          },
          {
            type: "code",
            language: "text",
            content: `Actual local configuration`
          },
          {
            type: "paragraph",
            content: "Contains:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://localhost:5432/dev"\nAUTH_SECRET="actual-local-secret"`
          },
          {
            type: "paragraph",
            content: "So:"
          },
          {
            type: "flow",
            steps: [
              ".env.example", "→",
              "What variables are required?"
            ]
          },
          {
            type: "flow",
            steps: [
              ".env.local", "→",
              "What are my actual local values?"
            ]
          }
        ]
      },

      {
        heading: ".gitignore",
        blocks: [
          {
            type: "paragraph",
            content: "Make sure sensitive environment files aren't committed."
          },
          {
            type: "paragraph",
            content: "A typical `.gitignore` contains patterns such as:"
          },
          {
            type: "code",
            language: "gitignore",
            content: `.env*.local`
          },
          {
            type: "paragraph",
            content: "You can also explicitly ignore:"
          },
          {
            type: "code",
            language: "gitignore",
            content: `.env.local\n.env.development.local\n.env.production.local\n.env.test.local`
          },
          {
            type: "paragraph",
            content: "The default Next.js project template already configures environment files to avoid accidental commits."
          }
        ]
      },

      {
        heading: "What If You Accidentally Commit a Secret?",
        blocks: [
          {
            type: "paragraph",
            content: "Deleting the line isn't enough."
          },
          {
            type: "paragraph",
            content: "Suppose you accidentally commit:"
          },
          {
            type: "code",
            language: "env",
            content: `STRIPE_SECRET_KEY=real-secret`
          },
          {
            type: "paragraph",
            content: "Even if you later delete it:"
          },
          {
            type: "code",
            language: "bash",
            content: `git commit -m "remove secret"`
          },
          {
            type: "paragraph",
            content: "the secret may remain in Git history."
          },
          {
            type: "paragraph",
            content: "The correct response is:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Revoke/rotate the compromised secret.",
              "Generate a replacement.",
              "Remove the secret from the repository/history where appropriate.",
              "Update deployment configuration.",
              "Audit where the secret may have been exposed."
            ]
          },
          {
            type: "paragraph",
            content: "**Never assume a secret is safe just because the current file no longer contains it.**"
          }
        ]
      },

      {
        heading: "Referencing Other Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js supports variable expansion."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `API_HOST="https://api.example.com"\nAPI_URL="$API_HOST/v1"`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.API_URL`
          },
          {
            type: "paragraph",
            content: "can resolve to:"
          },
          {
            type: "code",
            language: "text",
            content: `https://api.example.com/v1`
          },
          {
            type: "paragraph",
            content: "Next.js supports `$VARIABLE` references inside `.env*` files."
          }
        ]
      },

      {
        heading: "Escaping $",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your actual value contains a dollar sign."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `PRICE="\\$100"`
          },
          {
            type: "paragraph",
            content: "The `$` can be escaped when it shouldn't be interpreted as variable expansion."
          },
          {
            type: "paragraph",
            content: "This is a small detail, but it can save time when working with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "passwords",
              "tokens",
              "shell-like strings",
              "generated configuration"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js documents escaping `$` with `\\`."
          }
        ]
      },

      {
        heading: "Multiline Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js also supports multiline environment variables."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nABC123\nXYZ456\n-----END PRIVATE KEY-----"`
          },
          {
            type: "paragraph",
            content: "You can also represent line breaks using:"
          },
          {
            type: "code",
            language: "env",
            content: `PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nABC123\\nXYZ456\\n-----END PRIVATE KEY-----"`
          },
          {
            type: "paragraph",
            content: "This can be useful for credentials such as private keys."
          },
          {
            type: "paragraph",
            content: "However, for highly sensitive credentials, always consider whether your deployment platform's secret-management mechanism provides a safer and more convenient way to store them."
          }
        ]
      },

      {
        heading: "next.config.js and Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js also provides an `env` configuration option inside:"
          },
          {
            type: "code",
            language: "text",
            content: `next.config.js`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const nextConfig = {\n  env: {\n    APP_VERSION: "1.0.0",\n  },\n};\n\nmodule.exports = nextConfig;`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.APP_VERSION`
          },
          {
            type: "paragraph",
            content: "can be referenced in the application."
          },
          {
            type: "paragraph",
            content: "But there is an extremely important warning."
          },
          {
            type: "paragraph",
            content: "Values defined using:"
          },
          {
            type: "code",
            language: "text",
            content: `next.config.js`
          },
          {
            type: "paragraph",
            content: "are included in the JavaScript bundle at build time. The `NEXT_PUBLIC_` prefix does not protect them when using this configuration mechanism."
          },
          {
            type: "paragraph",
            content: "Therefore, **do not use this mechanism for secrets**."
          }
        ]
      },

      {
        heading: "Why .env* Is Usually Better",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const nextConfig = {\n  env: {\n    API_SECRET: "secret",\n  },\n};`
          },
          {
            type: "paragraph",
            content: "prefer:"
          },
          {
            type: "code",
            language: "env",
            content: `API_SECRET="secret"`
          },
          {
            type: "paragraph",
            content: "and:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.API_SECRET`
          },
          {
            type: "paragraph",
            content: "This keeps environment configuration separate from the application configuration file."
          },
          {
            type: "paragraph",
            content: "The official Next.js documentation describes the `.env*` approach as the more ergonomic mechanism for normal environment variables."
          }
        ]
      },

      {
        heading: "@next/env",
        blocks: [
          {
            type: "paragraph",
            content: "Most applications don't need to manually load environment variables."
          },
          {
            type: "paragraph",
            content: "Next.js does it automatically."
          },
          {
            type: "paragraph",
            content: "However, you may have tooling that runs **outside the Next.js runtime**."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "ORM configuration",
              "database migration tooling",
              "test runners",
              "custom scripts",
              "build configuration"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js provides:"
          },
          {
            type: "code",
            language: "text",
            content: `@next/env`
          },
          {
            type: "paragraph",
            content: "for this situation."
          },
          {
            type: "paragraph",
            content: "Install it:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install @next/env`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `import { loadEnvConfig } from "@next/env";\n\nconst projectDir = process.cwd();\n\nloadEnvConfig(projectDir);`
          },
          {
            type: "paragraph",
            content: "Now your external tool can access:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "Next.js uses this package internally for loading `.env*` configuration."
          }
        ]
      },

      {
        heading: "Example: ORM Configuration",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your ORM configuration runs outside the Next.js application runtime."
          },
          {
            type: "paragraph",
            content: "You could create:"
          },
          {
            type: "code",
            language: "ts",
            content: `// envConfig.ts\n\nimport { loadEnvConfig } from "@next/env";\n\nloadEnvConfig(process.cwd());`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `// orm.config.ts\n\nimport "./envConfig";\n\nconst databaseUrl = process.env.DATABASE_URL;`
          },
          {
            type: "paragraph",
            content: "This becomes particularly useful in the database-integration lessons that follow."
          }
        ]
      },

      {
        heading: "Database Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "A common real-world configuration is:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://user:password@localhost:5432/myapp"`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `const databaseUrl = process.env.DATABASE_URL;`
          },
          {
            type: "paragraph",
            content: "MongoDB might use:"
          },
          {
            type: "code",
            language: "env",
            content: `MONGODB_URI="mongodb+srv://user:password@cluster.example.mongodb.net/myapp"`
          },
          {
            type: "paragraph",
            content: "Prisma commonly uses:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://..."`
          },
          {
            type: "paragraph",
            content: "The important security rule is:"
          },
          {
            type: "code",
            language: "text",
            content: `DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "should remain server-only."
          },
          {
            type: "paragraph",
            content: "Never:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_DATABASE_URL="..."`
          }
        ]
      },

      {
        heading: "Authentication Secrets",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication systems commonly require secrets such as:"
          },
          {
            type: "code",
            language: "env",
            content: `AUTH_SECRET="..."`
          },
          {
            type: "paragraph",
            content: "or:"
          },
          {
            type: "code",
            language: "env",
            content: `JWT_SECRET="..."`
          },
          {
            type: "paragraph",
            content: "These should remain private:"
          },
          {
            type: "code",
            language: "text",
            content: `Browser ❌\nServer ✅`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "ts",
            content: `const secret = process.env.AUTH_SECRET;`
          },
          {
            type: "paragraph",
            content: "Don't expose it through:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_AUTH_SECRET`
          }
        ]
      },

      {
        heading: "Third-Party API Credentials",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your application communicates with an email service:"
          },
          {
            type: "code",
            language: "env",
            content: `EMAIL_API_KEY="secret"`
          },
          {
            type: "paragraph",
            content: "Server:"
          },
          {
            type: "code",
            language: "ts",
            content: `const apiKey = process.env.EMAIL_API_KEY;`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "ts",
            content: `await fetch("https://email.example.com/send", {\n  headers: {\n    Authorization: \`Bearer \${apiKey}\`,\n  },\n});`
          },
          {
            type: "paragraph",
            content: "The browser never needs the API key."
          }
        ]
      },

      {
        heading: "A Secure API Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "API key", "→",
              "Third-party API"
            ]
          },
          {
            type: "paragraph",
            content: "use:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "request", "→",
              "Next.js Server", "→",
              "secret API key", "→",
              "Third-party API"
            ]
          },
          {
            type: "paragraph",
            content: "This architecture is useful for:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "payment providers",
              "email providers",
              "AI APIs",
              "private analytics APIs",
              "database services",
              "cloud storage",
              "internal microservices"
            ]
          }
        ]
      },

      {
        heading: "Environment Variables and Security",
        blocks: [
          {
            type: "paragraph",
            content: "Environment variables are useful for security, but they are **not a complete security system**."
          },
          {
            type: "paragraph",
            content: "Putting something in:"
          },
          {
            type: "code",
            language: "env",
            content: `API_SECRET=...`
          },
          {
            type: "paragraph",
            content: "doesn't magically make it secure."
          },
          {
            type: "paragraph",
            content: "Secrets can still leak through:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "logs",
              "error messages",
              "source maps",
              "client bundles",
              "HTML",
              "repositories",
              "CI logs",
              "Docker images",
              "screenshots",
              "monitoring systems"
            ]
          },
          {
            type: "paragraph",
            content: "Security requires controlling the entire data flow."
          }
        ]
      },

      {
        heading: "Don't Log Secrets",
        blocks: [
          {
            type: "paragraph",
            content: "Never do:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(process.env);`
          },
          {
            type: "paragraph",
            content: "or:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log({\n  apiKey: process.env.API_KEY,\n});`
          },
          {
            type: "paragraph",
            content: "Even temporary debugging code can end up in production logs."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log({\n  hasApiKey: Boolean(process.env.API_KEY),\n});`
          },
          {
            type: "paragraph",
            content: "This lets you verify presence without exposing the value."
          }
        ]
      },

      {
        heading: "Environment Variable Naming Conventions",
        blocks: [
          {
            type: "paragraph",
            content: "Use clear names:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL=\nAUTH_SECRET=\nSTRIPE_SECRET_KEY=\nSMTP_HOST=\nSMTP_USER=\nSMTP_PASSWORD=\nNEXT_PUBLIC_APP_URL=`
          },
          {
            type: "paragraph",
            content: "Avoid unclear names such as:"
          },
          {
            type: "code",
            language: "env",
            content: `KEY=\nSECRET=\nURL=\nVALUE=`
          },
          {
            type: "paragraph",
            content: "Clear naming makes configuration easier to understand and audit."
          }
        ]
      },

      {
        heading: "Don't Put Everything Behind NEXT_PUBLIC_",
        blocks: [
          {
            type: "paragraph",
            content: "A common mistake is:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_DATABASE_URL=\nNEXT_PUBLIC_API_SECRET=\nNEXT_PUBLIC_AUTH_SECRET=\nNEXT_PUBLIC_PRIVATE_KEY=`
          },
          {
            type: "paragraph",
            content: "because a developer thinks:"
          },
          {
            type: "quote",
            content: "I'm using these in a component, so I need `NEXT_PUBLIC_`."
          },
          {
            type: "paragraph",
            content: "The correct question is:"
          },
          {
            type: "quote",
            content: "Does the browser genuinely need this value?"
          },
          {
            type: "paragraph",
            content: "If the answer is no, move the operation to the server instead."
          }
        ]
      },

      {
        heading: "Common Mistake: Forgetting to Restart the Dev Server",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you start:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm run dev`
          },
          {
            type: "paragraph",
            content: "Then create:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "with:"
          },
          {
            type: "code",
            language: "env",
            content: `API_URL="https://example.com"`
          },
          {
            type: "paragraph",
            content: "If your development server doesn't pick up the change immediately, restart it:"
          },
          {
            type: "code",
            language: "bash",
            content: `Ctrl + C\nnpm run dev`
          },
          {
            type: "paragraph",
            content: "This is a common troubleshooting step when environment variables appear to be missing."
          }
        ]
      },

      {
        heading: "Common Mistake: Typo in the Variable Name",
        blocks: [
          {
            type: "paragraph",
            content: "You define:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="..."`
          },
          {
            type: "paragraph",
            content: "but write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URI`
          },
          {
            type: "paragraph",
            content: "Result:"
          },
          {
            type: "code",
            language: "text",
            content: `undefined`
          },
          {
            type: "paragraph",
            content: "Environment variable names must match exactly."
          }
        ]
      },

      {
        heading: "Common Mistake: Putting .env Inside src",
        blocks: [
          {
            type: "paragraph",
            content: "Wrong:"
          },
          {
            type: "tree",
            content: `src/.env.local`
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "tree",
            content: `.env.local\nsrc/`
          },
          {
            type: "paragraph",
            content: "Next.js loads environment files from the project root."
          }
        ]
      },

      {
        heading: "Common Mistake: Using Server Secrets in Client Components",
        blocks: [
          {
            type: "paragraph",
            content: "Wrong:"
          },
          {
            type: "code",
            language: "tsx",
            content: `"use client";\n\nconst secret = process.env.API_SECRET;`
          },
          {
            type: "paragraph",
            content: "If the browser genuinely needs configuration, expose only an intentionally public value."
          },
          {
            type: "paragraph",
            content: "For private functionality, move the operation to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server Component",
              "Server Action",
              "Route Handler",
              "server-side library"
            ]
          }
        ]
      },

      {
        heading: "Common Mistake: Assuming NEXT_PUBLIC_ Is Runtime Dynamic",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose production has:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_API_URL="https://api.example.com"`
          },
          {
            type: "paragraph",
            content: "You build:"
          },
          {
            type: "code",
            language: "bash",
            content: `npm run build`
          },
          {
            type: "paragraph",
            content: "Then change the server environment to:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_API_URL="https://new-api.example.com"`
          },
          {
            type: "paragraph",
            content: "without rebuilding."
          },
          {
            type: "paragraph",
            content: "The client bundle may still use the old value."
          },
          {
            type: "paragraph",
            content: "That's because public environment variables are inlined during the build."
          }
        ]
      },

      {
        heading: "Common Mistake: Dynamic Environment Lookups in Client Code",
        blocks: [
          {
            type: "paragraph",
            content: "This may not work as expected for public variables:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const key = "NEXT_PUBLIC_API_URL";\n\nconsole.log(process.env[key]);`
          },
          {
            type: "paragraph",
            content: "Likewise:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const env = process.env;\n\nconsole.log(env.NEXT_PUBLIC_API_URL);`
          },
          {
            type: "paragraph",
            content: "Next.js statically analyzes direct environment-variable references when replacing public variables during the build. Dynamic lookups aren't handled in the same way."
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.NEXT_PUBLIC_API_URL`
          },
          {
            type: "paragraph",
            content: "directly."
          }
        ]
      },

      {
        heading: "Common Mistake: Destructuring process.env",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid relying on:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const { NEXT_PUBLIC_API_URL } = process.env;`
          },
          {
            type: "paragraph",
            content: "when you need Next.js's static public-variable replacement."
          },
          {
            type: "paragraph",
            content: "Prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const apiUrl = process.env.NEXT_PUBLIC_API_URL;`
          },
          {
            type: "paragraph",
            content: "This makes the environment-variable reference explicit and compatible with Next.js's build-time substitution behavior."
          }
        ]
      },

      {
        heading: "Common Mistake: Using next.config.js for Secrets",
        blocks: [
          {
            type: "paragraph",
            content: "Never do:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const nextConfig = {\n  env: {\n    DATABASE_PASSWORD: "super-secret",\n  },\n};`
          },
          {
            type: "paragraph",
            content: "The `env` option in `next.config.js` causes those values to be included in the JavaScript bundle at build time."
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_PASSWORD="super-secret"`
          },
          {
            type: "paragraph",
            content: "instead."
          }
        ]
      },

      {
        heading: "Common Mistake: Using Production Database Locally",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="production-database"`
          },
          {
            type: "paragraph",
            content: "is accidentally copied into your local `.env.local`."
          },
          {
            type: "paragraph",
            content: "Then your local development application may execute:"
          },
          {
            type: "code",
            language: "text",
            content: `DELETE\nUPDATE\nINSERT`
          },
          {
            type: "paragraph",
            content: "against production."
          },
          {
            type: "paragraph",
            content: "A safer strategy is:"
          },
          {
            type: "code",
            language: "text",
            content: `Development → Development DB\nPreview     → Staging DB\nProduction  → Production DB`
          },
          {
            type: "paragraph",
            content: "This is especially important for applications with destructive database operations."
          }
        ]
      },

      {
        heading: "Common Mistake: Sharing .env.local",
        blocks: [
          {
            type: "paragraph",
            content: "Never casually send:"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "through:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "GitHub",
              "Slack",
              "Discord",
              "email",
              "public issue trackers",
              "screenshots",
              "forums"
            ]
          },
          {
            type: "paragraph",
            content: "because it may contain:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "passwords",
              "API keys",
              "tokens",
              "database credentials",
              "private keys"
            ]
          },
          {
            type: "paragraph",
            content: "Use a secret manager or secure deployment platform instead."
          }
        ]
      },

      {
        heading: "Debugging process.env.X === undefined",
        blocks: [
          {
            type: "paragraph",
            content: "When you see:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "returning:"
          },
          {
            type: "code",
            language: "text",
            content: `undefined`
          },
          {
            type: "paragraph",
            content: "check these in order:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is the file in the root?",
              "Is the name correct?",
              "Did you restart the development server?",
              "Is the code running on the server?",
              "If it's client-side, does it have `NEXT_PUBLIC_`?",
              "Is the variable configured for the correct deployment environment?",
              "Is the variable available at build time if it is public?",
              "Is the variable being dynamically accessed?"
            ]
          },
          {
            type: "paragraph",
            content: "These checks solve most environment-variable problems."
          }
        ]
      },

      {
        heading: "A Practical Environment Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "For a serious Next.js project, a clean structure could look like:"
          },
          {
            type: "tree",
            content: `my-app/\n├── app/\n│   ├── api/\n│   ├── dashboard/\n│   └── page.tsx\n│\n├── lib/\n│   ├── env.ts\n│   ├── db.ts\n│   └── auth.ts\n│\n├── public/\n│\n├── .env\n├── .env.example\n├── .env.local\n├── .env.development\n├── .env.test\n├── package.json\n└── next.config.ts`
          },
          {
            type: "paragraph",
            content: "The important relationship is:"
          },
          {
            type: "flow",
            steps: [
              ".env.example", "→",
              "documents", "→",
              "Required configuration"
            ]
          },
          {
            type: "flow",
            steps: [
              ".env.local", "→",
              "actual local values", "→",
              "Development"
            ]
          },
          {
            type: "flow",
            steps: [
              "Deployment platform", "→",
              "actual production secrets", "→",
              "Production"
            ]
          }
        ]
      },

      {
        heading: "Recommended Environment Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "For most projects, a practical approach is:"
          },
          {
            type: "paragraph",
            content: "`.env`"
          },
          {
            type: "paragraph",
            content: "Safe shared defaults:"
          },
          {
            type: "code",
            language: "env",
            content: `APP_NAME="My Application"`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`.env.local`"
          },
          {
            type: "paragraph",
            content: "Developer-specific secrets:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="..."\nAUTH_SECRET="..."`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`.env.development`"
          },
          {
            type: "paragraph",
            content: "Development-specific defaults:"
          },
          {
            type: "code",
            language: "env",
            content: `API_BASE_URL="https://dev-api.example.com"`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`.env.test`"
          },
          {
            type: "paragraph",
            content: "Test configuration:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="..."`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`.env.example`"
          },
          {
            type: "paragraph",
            content: "Documentation:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL=\nAUTH_SECRET=\nNEXT_PUBLIC_APP_URL=`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Production"
          },
          {
            type: "paragraph",
            content: "Store real secrets in your deployment platform or secret manager."
          }
        ]
      },

      {
        heading: "Environment Variables and Configuration Separation",
        blocks: [
          {
            type: "paragraph",
            content: "A mature application separates:"
          },
          {
            type: "code",
            language: "text",
            content: `Code`
          },
          {
            type: "paragraph",
            content: "from:"
          },
          {
            type: "code",
            language: "text",
            content: `Configuration`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `Same application code\n       │\n       ├── Development configuration\n       │\n       ├── Preview configuration\n       │\n       └── Production configuration`
          },
          {
            type: "paragraph",
            content: "This means you don't need:"
          },
          {
            type: "code",
            language: "text",
            content: `app-development/\napp-staging/\napp-production/`
          },
          {
            type: "paragraph",
            content: "Instead, you have:"
          },
          {
            type: "code",
            language: "text",
            content: `one application\n+\ndifferent environment configuration`
          }
        ]
      },

      {
        heading: "Environment Variables and Database Integration",
        blocks: [
          {
            type: "paragraph",
            content: "This lesson becomes especially important for the database lessons that follow."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "flow",
            steps: [
              "Environment Variables", "→",
              "DATABASE_URL", "→",
              "Database Client", "→",
              "MongoDB / PostgreSQL", "→",
              "ORM", "→",
              "Server Actions / Route Handlers", "→",
              "UI"
            ]
          },
          {
            type: "paragraph",
            content: "Without environment variables, database credentials would need to be embedded directly into application configuration."
          },
          {
            type: "paragraph",
            content: "That's one of the reasons environment configuration should be understood before connecting databases."
          }
        ]
      },

      {
        heading: "Environment Variables and Authentication",
        blocks: [
          {
            type: "paragraph",
            content: "Authentication follows a similar pattern:"
          },
          {
            type: "flow",
            steps: [
              ".env", "→",
              "AUTH_SECRET", "→",
              "Authentication library", "→",
              "Session/JWT", "→",
              "Protected routes"
            ]
          },
          {
            type: "paragraph",
            content: "The secret stays server-side."
          },
          {
            type: "paragraph",
            content: "The browser receives only the information it actually needs."
          }
        ]
      },

      {
        heading: "Environment Variables and External APIs",
        blocks: [
          {
            type: "paragraph",
            content: "For private APIs:"
          },
          {
            type: "flow",
            steps: [
              ".env.local", "→",
              "PRIVATE_API_KEY", "→",
              "Server Action / Route Handler", "→",
              "External API"
            ]
          },
          {
            type: "paragraph",
            content: "For public configuration:"
          },
          {
            type: "flow",
            steps: [
              ".env.local", "→",
              "NEXT_PUBLIC_API_URL", "→",
              "Browser bundle"
            ]
          },
          {
            type: "paragraph",
            content: "These are two fundamentally different use cases."
          }
        ]
      },

      {
        heading: "Environment Variables and Feature Flags",
        blocks: [
          {
            type: "paragraph",
            content: "Environment variables can also control features."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `ENABLE_NEW_DASHBOARD=true`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const enabled =\n  process.env.ENABLE_NEW_DASHBOARD === "true";`
          },
          {
            type: "paragraph",
            content: "This can be useful for simple deployment-level configuration."
          },
          {
            type: "paragraph",
            content: "For more sophisticated feature management, dedicated feature-flag systems may be more appropriate."
          }
        ]
      },

      {
        heading: "Environment Variables Are Not a Database",
        blocks: [
          {
            type: "paragraph",
            content: "Don't use environment variables for data that changes frequently."
          },
          {
            type: "paragraph",
            content: "Bad idea:"
          },
          {
            type: "code",
            language: "env",
            content: `CURRENT_USERS=15293`
          },
          {
            type: "paragraph",
            content: "and changing it every time a user signs up."
          },
          {
            type: "paragraph",
            content: "Environment variables are configuration, not application state."
          },
          {
            type: "paragraph",
            content: "Use a database, cache, or appropriate data store for dynamic application data."
          }
        ]
      },

      {
        heading: "Environment Variables Are Not a Secret Vault by Themselves",
        blocks: [
          {
            type: "paragraph",
            content: "This distinction is important:"
          },
          {
            type: "code",
            language: "text",
            content: `Environment variable\n        ≠\ncomplete secret-management solution`
          },
          {
            type: "paragraph",
            content: "A production secret should ideally be managed by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "deployment platform secrets",
              "cloud secret managers",
              "CI/CD secrets",
              "dedicated secret-management systems"
            ]
          },
          {
            type: "paragraph",
            content: "The exact choice depends on the infrastructure."
          },
          {
            type: "paragraph",
            content: "The key principle is:"
          },
          {
            type: "quote",
            content: "Keep secrets outside source control and expose them only to the processes that need them."
          }
        ]
      },

      {
        heading: "Production Checklist",
        blocks: [
          {
            type: "paragraph",
            content: "Before deploying a Next.js application, check:"
          },
          {
            type: "paragraph",
            content: "Configuration"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Required environment variables are documented.",
              ".env.example exists.",
              "Variable names are consistent.",
              "Required variables are validated."
            ]
          },
          {
            type: "paragraph",
            content: "Security"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Secrets aren't committed.",
              ".env.local is ignored.",
              "Private values don't use NEXT_PUBLIC_.",
              "Secrets aren't logged.",
              "Secrets aren't returned through API responses."
            ]
          },
          {
            type: "paragraph",
            content: "Client/server"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Client variables intentionally use NEXT_PUBLIC_.",
              "Server-only variables remain server-side.",
              "Sensitive operations use Server Actions/Route Handlers/server code."
            ]
          },
          {
            type: "paragraph",
            content: "Deployment"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Production variables are configured.",
              "Preview variables are configured.",
              "Build-time public variables are correct.",
              "Production uses the correct database.",
              "CI/CD secrets are configured."
            ]
          },
          {
            type: "paragraph",
            content: "Reliability"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Missing required variables fail early.",
              "Development and production databases are separated.",
              "Secrets can be rotated."
            ]
          }
        ]
      },

      {
        heading: "A Complete Example",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we're building an e-commerce application."
          },
          {
            type: "paragraph",
            content: "Our `.env.local` might contain:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="postgresql://localhost:5432/shop"\n\nAUTH_SECRET="local-auth-secret"\n\nPAYMENT_SECRET_KEY="local-payment-secret"\n\nEMAIL_API_KEY="local-email-secret"\n\nNEXT_PUBLIC_APP_URL="http://localhost:3000"\n\nNEXT_PUBLIC_ANALYTICS_ID="G-123456"`
          },
          {
            type: "paragraph",
            content: "Notice the distinction."
          },
          {
            type: "paragraph",
            content: "Private"
          },
          {
            type: "code",
            language: "text",
            content: `DATABASE_URL\nAUTH_SECRET\nPAYMENT_SECRET_KEY\nEMAIL_API_KEY`
          },
          {
            type: "paragraph",
            content: "Public"
          },
          {
            type: "code",
            language: "text",
            content: `NEXT_PUBLIC_APP_URL\nNEXT_PUBLIC_ANALYTICS_ID`
          }
        ]
      },

      {
        heading: "Server-Side Payment Example",
        blocks: [
          {
            type: "code",
            language: "ts",
            content: `"use server";\n\nexport async function createPayment(amount: number) {\n  const secretKey = process.env.PAYMENT_SECRET_KEY;\n\n  if (!secretKey) {\n    throw new Error("Payment configuration is missing");\n  }\n\n  // Call payment provider using secretKey\n\n  return {\n    success: true,\n  };\n}`
          },
          {
            type: "paragraph",
            content: "The browser triggers:"
          },
          {
            type: "code",
            language: "text",
            content: `createPayment()`
          },
          {
            type: "paragraph",
            content: "but never receives:"
          },
          {
            type: "code",
            language: "text",
            content: `PAYMENT_SECRET_KEY`
          }
        ]
      },

      {
        heading: "Client-Side Public Configuration",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `"use client";\n\nexport default function Footer() {\n  return (\n    <footer>\n      <p>\n        {process.env.NEXT_PUBLIC_APP_URL}\n      </p>\n    </footer>\n  );\n}`
          },
          {
            type: "paragraph",
            content: "This is acceptable because:"
          },
          {
            type: "code",
            language: "text",
            content: `NEXT_PUBLIC_APP_URL`
          },
          {
            type: "paragraph",
            content: "is intentionally public."
          }
        ]
      },

      {
        heading: "Recommended Production Architecture",
        blocks: [
          {
            type: "paragraph",
            content: "For a serious Next.js application, think about configuration like this:"
          },
          {
            type: "flow",
            steps: [
              "Environment Config", "→",
              "Server Variables", "→",
              "DATABASE_URL, AUTH_SECRET, API_SECRET", "→",
              "Next.js Server", "→",
              "DB, APIs, Auth"
            ]
          },
          {
            type: "flow",
            steps: [
              "Environment Config", "→",
              "Public Variables", "→",
              "NEXT_PUBLIC_*", "→",
              "Browser"
            ]
          },
          {
            type: "paragraph",
            content: "The most important security boundary is:"
          },
          {
            type: "flow",
            steps: [
              "SERVER", "→",
              "private configuration", "→",
              "SERVER/CLIENT BOUNDARY", "→",
              "CLIENT", "→",
              "public configuration"
            ]
          }
        ]
      },

      {
        heading: "Environment Variables in the Next.js Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content: "It's useful to understand where configuration enters the application:"
          },
          {
            type: "flow",
            steps: [
              ".env / hosting platform", "→",
              "Environment", "→",
              "Next.js initialization/build", "→",
              "Server", "→",
              "Runtime"
            ]
          },
          {
            type: "flow",
            steps: [
              ".env / hosting platform", "→",
              "Environment", "→",
              "Next.js initialization/build", "→",
              "Client build", "→",
              "NEXT_PUBLIC_*", "→",
              "Bundle"
            ]
          },
          {
            type: "paragraph",
            content: "This explains why a server secret and a public variable behave so differently."
          }
        ]
      },

      {
        heading: "Environment Variables vs NODE_ENV",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js also uses:"
          },
          {
            type: "code",
            language: "text",
            content: `NODE_ENV`
          },
          {
            type: "paragraph",
            content: "with the standard values:"
          },
          {
            type: "code",
            language: "text",
            content: `development\nproduction\ntest`
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (process.env.NODE_ENV === "production") {\n  // production-specific behavior\n}`
          },
          {
            type: "paragraph",
            content: "Next.js automatically sets `NODE_ENV` appropriately for its standard commands."
          },
          {
            type: "paragraph",
            content: "However, don't turn your entire configuration system into:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (NODE_ENV === "production") ...\nelse if (NODE_ENV === "development") ...`
          },
          {
            type: "paragraph",
            content: "Prefer explicit variables when the behavior represents an actual business/configuration choice."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `ENABLE_NEW_EDITOR=true`
          },
          {
            type: "paragraph",
            content: "is clearer than:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (process.env.NODE_ENV === "production") {\n  enableNewEditor();\n}`
          }
        ]
      },

      {
        heading: "Environment Variables and Testing",
        blocks: [
          {
            type: "paragraph",
            content: "A good testing strategy uses isolated configuration."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "env",
            content: `# .env.test\n\nDATABASE_URL="postgresql://localhost:5432/myapp_test"`
          },
          {
            type: "paragraph",
            content: "Then:"
          },
          {
            type: "flow",
            steps: [
              "Tests", "→",
              "Test database"
            ]
          },
          {
            type: "paragraph",
            content: "rather than:"
          },
          {
            type: "flow",
            steps: [
              "Tests", "→",
              "Development database"
            ]
          },
          {
            type: "paragraph",
            content: "or, even worse:"
          },
          {
            type: "flow",
            steps: [
              "Tests", "→",
              "Production database"
            ]
          },
          {
            type: "paragraph",
            content: "The isolation of testing configuration is one of the reasons Next.js provides `.env.test`."
          }
        ]
      },

      {
        heading: "Advanced: Typed Environment Variables",
        blocks: [
          {
            type: "paragraph",
            content: "For TypeScript projects, environment variables are naturally awkward because:"
          },
          {
            type: "code",
            language: "ts",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "may be:"
          },
          {
            type: "code",
            language: "ts",
            content: `string | undefined`
          },
          {
            type: "paragraph",
            content: "because the environment might not contain the variable."
          },
          {
            type: "paragraph",
            content: "You can improve this by validating environment variables at application startup."
          },
          {
            type: "paragraph",
            content: "Some current Next.js tooling also supports experimental typed environment-variable IntelliSense through `experimental.typedEnv`. Next.js generates environment-variable type information during development when enabled."
          },
          {
            type: "paragraph",
            content: "For production applications, runtime validation is still valuable because editor types alone cannot guarantee that a deployment actually contains the required secret."
          }
        ]
      },

      {
        heading: "Environment Variables and Monorepos",
        blocks: [
          {
            type: "paragraph",
            content: "In a monorepo, environment configuration requires extra care."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "tree",
            content: `apps/\n├── web/\n└── admin/\n\npackages/\n├── database/\n└── auth/`
          },
          {
            type: "paragraph",
            content: "You should establish clearly:"
          },
          {
            type: "quote",
            content: "Which application needs which variables?"
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `web\n ├── DATABASE_URL\n └── NEXT_PUBLIC_APP_URL\n\nadmin\n ├── DATABASE_URL\n └── ADMIN_SECRET\n\ndatabase package\n └── DATABASE_URL`
          },
          {
            type: "paragraph",
            content: "Avoid blindly sharing every secret with every package."
          },
          {
            type: "paragraph",
            content: "The principle of least privilege applies to configuration too."
          }
        ]
      },

      {
        heading: "Environment Variables and Security Boundaries",
        blocks: [
          {
            type: "paragraph",
            content: "A useful mental model is:"
          },
          {
            type: "paragraph",
            content: "Public configuration"
          },
          {
            type: "quote",
            content: "Can a user inspect it in DevTools?"
          },
          {
            type: "paragraph",
            content: "If yes, it isn't secret."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Server configuration"
          },
          {
            type: "quote",
            content: "Does only trusted server code need it?"
          },
          {
            type: "paragraph",
            content: "Keep it server-only."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Sensitive secret"
          },
          {
            type: "quote",
            content: "Would compromising it allow unauthorized access?"
          },
          {
            type: "paragraph",
            content: "Treat it as a credential and store/manage it accordingly."
          },
          {
            type: "paragraph",
            content: "This simple classification prevents many security mistakes."
          }
        ]
      },

      {
        heading: "Best Practices",
        blocks: [
          {
            type: "list",
            style: "ordered",
            items: [
              "Never hardcode secrets",
              "Treat `NEXT_PUBLIC_` as public",
              "Use `.env.local` for local secrets",
              "Commit `.env.example`",
              "Validate required variables",
              "Separate environments",
              "Keep databases isolated",
              "Understand build-time behavior",
              "Don't expose secrets through APIs",
              "Don't log secrets",
              "Use deployment secrets",
              "Rotate compromised credentials"
            ]
          }
        ]
      },

      {
        heading: "Quick Reference Table",
        blocks: [
          {
            type: "table",
            headers: ["Variable", "Server", "Browser", "Secret?"],
            rows: [
              ["DATABASE_URL", "✅", "❌", "✅"],
              ["AUTH_SECRET", "✅", "❌", "✅"],
              ["STRIPE_SECRET_KEY", "✅", "❌", "✅"],
              ["EMAIL_API_KEY", "✅", "❌", "✅"],
              ["NEXT_PUBLIC_APP_URL", "✅", "✅", "❌"],
              ["NEXT_PUBLIC_ANALYTICS_ID", "✅", "✅", "❌"],
              ["NEXT_PUBLIC_MAPS_KEY", "✅", "✅", "Depends on provider"],
              ["NODE_ENV", "✅", "Context-dependent", "❌"]
            ]
          },
          {
            type: "paragraph",
            content: "The key rule isn't simply \"API keys are secret.\" Some browser-facing services intentionally provide public identifiers/keys. **The service's security model determines whether a value may be exposed.**"
          }
        ]
      },

      {
        heading: "Environment Variables: The Mental Model You Should Remember",
        blocks: [
          {
            type: "paragraph",
            content: "If you remember only one diagram from this lesson, remember this:"
          },
          {
            type: "flow",
            steps: [
              "ENVIRONMENT", "→",
              "PRIVATE", "→",
              "DATABASE_URL, AUTH_SECRET, API_SECRET", "→",
              "SERVER"
            ]
          },
          {
            type: "flow",
            steps: [
              "ENVIRONMENT", "→",
              "PUBLIC", "→",
              "NEXT_PUBLIC_*", "→",
              "BROWSER"
            ]
          },
          {
            type: "flow",
            steps: [
              "SERVER", "→",
              "BROWSER", "→",
              "Application"
            ]
          },
          {
            type: "paragraph",
            content: "And remember the second rule:"
          },
          {
            type: "flow",
            steps: [
              "NEXT_PUBLIC_*", "→",
              "Build-time client bundle", "→",
              "Public"
            ]
          },
          {
            type: "paragraph",
            content: "while:"
          },
          {
            type: "flow",
            steps: [
              "DATABASE_URL, AUTH_SECRET, API_SECRET", "→",
              "Server", "→",
              "Private"
            ]
          }
        ]
      },

      {
        heading: "Environment Variables Cheat Sheet",
        blocks: [
          {
            type: "paragraph",
            content: "Create local configuration"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "paragraph",
            content: "Define a private variable"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="..."`
          },
          {
            type: "paragraph",
            content: "Read it on the server"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.DATABASE_URL`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Define a public variable"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_APP_URL="https://example.com"`
          },
          {
            type: "paragraph",
            content: "Read it from client-side code"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env.NEXT_PUBLIC_APP_URL`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Document required variables"
          },
          {
            type: "code",
            language: "text",
            content: `.env.example`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Load variables outside Next.js"
          },
          {
            type: "code",
            language: "bash",
            content: `npm install @next/env`
          },
          {
            type: "paragraph",
            content: "Load them manually"
          },
          {
            type: "code",
            language: "ts",
            content: `import { loadEnvConfig } from "@next/env";\n\nloadEnvConfig(process.cwd());`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Never do this"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_DATABASE_PASSWORD="..."`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Never commit"
          },
          {
            type: "code",
            language: "text",
            content: `.env.local`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Remember"
          },
          {
            type: "code",
            language: "text",
            content: `NEXT_PUBLIC_ = public`
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
                question: "What are environment variables?",
                answer: "They are external configuration values supplied to an application environment rather than hardcoded into application source code."
              },
              {
                question: "How do you access environment variables in Next.js?",
                answer: "Using `process.env.VARIABLE_NAME`."
              },
              {
                question: "How do you expose an environment variable to the browser?",
                answer: "Prefix it with `NEXT_PUBLIC_`."
              },
              {
                question: "Should database credentials use `NEXT_PUBLIC_`?",
                answer: "No."
              },
              {
                question: "Why?",
                answer: "Because public variables can be embedded into the client JavaScript bundle."
              },
              {
                question: "What is `.env.local` used for?",
                answer: "Local environment-specific configuration and commonly local secrets."
              },
              {
                question: "Where should `.env` files be placed?",
                answer: "At the project root."
              },
              {
                question: "What is `.env.production`?",
                answer: "Production-specific environment configuration."
              },
              {
                question: "What is `.env.test`?",
                answer: "Configuration used when `NODE_ENV=test`."
              },
              {
                question: "Are `NEXT_PUBLIC_` variables runtime dynamic?",
                answer: "Not in the normal client-bundle model; they are inlined at build time."
              },
              {
                question: "Can environment variables be used in Server Actions?",
                answer: "Yes. Server Actions execute on the server."
              },
              {
                question: "Can environment variables be used in Route Handlers?",
                answer: "Yes. Route Handlers execute on the server."
              },
              {
                question: "What is `@next/env`?",
                answer: "A package for loading Next.js-style `.env*` configuration in code that runs outside the normal Next.js runtime."
              },
              {
                question: "Should secrets be stored in Git?",
                answer: "No."
              }
            ]
          }
        ]
      },

      {
        heading: "Final Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Environment variables provide the configuration layer of a Next.js application."
          },
          {
            type: "paragraph",
            content: "They allow you to separate:"
          },
          {
            type: "code",
            language: "text",
            content: `Application code`
          },
          {
            type: "paragraph",
            content: "from:"
          },
          {
            type: "code",
            language: "text",
            content: `Environment configuration`
          },
          {
            type: "paragraph",
            content: "Next.js automatically loads `.env*` files and exposes values through:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.env`
          },
          {
            type: "paragraph",
            content: "The most important distinction is between **server-only** and **public** variables."
          },
          {
            type: "paragraph",
            content: "Server-only:"
          },
          {
            type: "code",
            language: "env",
            content: `DATABASE_URL="..."\nAUTH_SECRET="..."\nPAYMENT_SECRET_KEY="..."`
          },
          {
            type: "paragraph",
            content: "Public:"
          },
          {
            type: "code",
            language: "env",
            content: `NEXT_PUBLIC_APP_URL="..."\nNEXT_PUBLIC_ANALYTICS_ID="..."`
          },
          {
            type: "paragraph",
            content: "The `NEXT_PUBLIC_` prefix tells Next.js that a value may be embedded into client-side JavaScript during the build. Therefore, **never use it for secrets**."
          },
          {
            type: "paragraph",
            content: "For production applications, a strong configuration strategy looks like:"
          },
          {
            type: "flow",
            steps: [
              ".env.example", "→",
              "Configuration contract", "→",
              "Local development", "→",
              ".env.local"
            ]
          },
          {
            type: "flow",
            steps: [
              ".env.example", "→",
              "Configuration contract", "→",
              "Production", "→",
              "Secret manager / hosting platform"
            ]
          },
          {
            type: "flow",
            steps: [
              "Local development", "→",
              ".env.local", "→",
              "Next.js Server"
            ]
          },
          {
            type: "flow",
            steps: [
              "Production", "→",
              "Secret manager / hosting platform", "→",
              "Next.js Server"
            ]
          },
          {
            type: "flow",
            steps: [
              "Next.js Server", "→",
              "DB, Auth/API, Services"
            ]
          },
          {
            type: "paragraph",
            content: "And the most important security boundary is:"
          },
          {
            type: "flow",
            steps: [
              "SERVER", "→",
              "private secrets", "→",
              "SERVER/CLIENT BOUNDARY", "→",
              "CLIENT", "→",
              "public configuration"
            ]
          },
          {
            type: "paragraph",
            content: "Once you understand this boundary, environment variables become much easier to reason about—and the same principles will directly carry into **MongoDB, PostgreSQL, Prisma, Drizzle, authentication, Server Actions, Route Handlers, and production deployment**."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "For a production-grade Next.js application, don't think of environment variables as merely a way to \"hide API keys.\" Think of them as a **configuration contract between your application and its deployment environment**.\n\nA clean architecture is:\n\n.env.example → Document required configuration → Environment validation → Server-only / public classification → Database / Auth / APIs → Deployment-specific values → Development / Preview / Production\n\nThat approach scales far better than scattering `process.env.X` throughout the entire codebase.\n\nThe current Next.js documentation also recommends the same core model: `.env*` files for loading configuration, `NEXT_PUBLIC_` for values intentionally exposed to the browser, `@next/env` for external tooling, and careful consideration of build-time versus runtime values."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Connecting MongoDB
============================= */
    "nextjs-connecting-mongodb": {
    title: "Connecting MongoDB",
    readingTime: "30 min",
        
    content: [

    ]
  },



  /* ===========================
    Third Topic : Connecting PostgreSQL
============================= */
    "nextjs-connecting-postgresql": {
    title: "Connecting PostgreSQL",
    readingTime: "30 min",
        
    content: [

    ]
  },




  /* ===========================
    Fourth Topic : Prisma ORM
============================= */
    "nextjs-prisma-orm": {
    title: "Prisma ORM",
    readingTime: "30 min",
        
    content: [

    ]
  },




  /* ===========================
    Fifth Topic : Drizzle ORM
============================= */
    "nextjs-drizzle-orm": {
    title: "Drizzle ORM",
    readingTime: "30 min",
        
    content: [

    ]
  },




  /* ===========================
    Sixth Topic : CRUD Operations
============================= */
    "nextjs-crud-operations": {
    title: "CRUD Operations",
    readingTime: "30 min",
        
    content: [

    ]
  },
};

export default nextjsDatabaseIntegration;