const nodejsAsynchronousProgramming = {

/* ===========================
    First Topic : Callbacks
============================= */
    "nodejs-callbacks": {
    title: "Callbacks",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction to Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "So far in this course, you've learned that one of Node.js's biggest strengths is its ability to perform non-blocking asynchronous operations. But this raises an important question:"
          },
          {
            type: "quote",
            content: "If Node.js doesn't wait for an operation to finish, how does it know what to do after the operation completes?"
          },
          {
            type: "paragraph",
            content:
              "The answer is callbacks."
          },
          {
            type: "paragraph",
            content:
              "Callbacks are one of the oldest and most fundamental concepts in JavaScript and Node.js. Before Promises and `async/await` existed, callbacks were the primary way to write asynchronous code. Even today, many Node.js core modules, older libraries, and internal APIs rely on callbacks, making them an essential concept for every Node.js developer."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn what callbacks are, why they exist, how they work internally, how Node.js uses them for asynchronous programming, and the best practices for writing callback-based code."
          }
        ]
      },

      {
        heading: "Why Callbacks Exist",
        blocks: [
          {
            type: "paragraph",
            content:
              "Computers perform many operations that take time."
          },
          {
            type: "paragraph",
            content:
              "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reading a file",
              "Writing a file",
              "Downloading data from the internet",
              "Querying a database",
              "Waiting for a timer",
              "Uploading an image"
            ]
          },
          {
            type: "paragraph",
            content:
              "If JavaScript waited for each of these operations to finish before doing anything else, applications would become slow and unresponsive."
          },
          {
            type: "paragraph",
            content:
              "Imagine a web server handling thousands of users."
          },
          {
            type: "code",
            language: "text",
            content: `User A requests a file
↓
Server waits 3 seconds
↓
User B arrives
↓
Server still waiting...`
          },
          {
            type: "paragraph",
            content:
              "Every request would have to wait for the previous one."
          },
          {
            type: "paragraph",
            content:
              "Node.js avoids this problem by starting long-running operations and continuing with other work immediately."
          },
          {
            type: "paragraph",
            content:
              "But once the operation finishes, Node.js needs a way to notify your program."
          },
          {
            type: "paragraph",
            content:
              "That's exactly what callbacks provide."
          }
        ]
      },

      {
        heading: "What is a Callback?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A callback is simply a function that is passed to another function so it can be executed later."
          },
          {
            type: "paragraph",
            content:
              "In other words:"
          },
          {
            type: "quote",
            content: "A callback is a function that another function \"calls back\" after completing its work."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function greet(name) {
    console.log(\`Hello \${name}\`);
}

function processUser(callback) {
    const user = "Alice";

    callback(user);
}

processUser(greet);`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `Hello Alice`
          },
          {
            type: "paragraph",
            content:
              "Here:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`greet` is the callback.",
              "`processUser` decides when to execute it."
            ]
          }
        ]
      },

      {
        heading: "Functions Are Values",
        blocks: [
          {
            type: "paragraph",
            content:
              "Many beginners find callbacks confusing because they think functions can only be executed."
          },
          {
            type: "paragraph",
            content:
              "In JavaScript, functions are also values."
          },
          {
            type: "paragraph",
            content:
              "They can be:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Stored in variables",
              "Passed as arguments",
              "Returned from functions",
              "Assigned to objects",
              "Stored inside arrays"
            ]
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function sayHello() {
    console.log("Hello");
}

const myFunction = sayHello;

myFunction();`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `Hello`
          },
          {
            type: "paragraph",
            content:
              "Because functions are values, they can be passed just like numbers or strings."
          }
        ]
      },

      {
        heading: "Passing a Callback",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `function calculate(a, b, callback) {
    callback(a, b);
}

function add(x, y) {
    console.log(x + y);
}

calculate(10, 20, add);`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `30`
          },
          {
            type: "paragraph",
            content:
              "Notice that we passed the function itself:"
          },
          {
            type: "code",
            language: "javascript",
            content: `add`
          },
          {
            type: "paragraph",
            content:
              "not"
          },
          {
            type: "code",
            language: "javascript",
            content: `add()`
          },
          {
            type: "paragraph",
            content:
              "This is an important distinction."
          },
          {
            type: "paragraph",
            content:
              "`add`"
          },
          {
            type: "paragraph",
            content:
              "means:"
          },
          {
            type: "quote",
            content: "Here is the function."
          },
          {
            type: "paragraph",
            content:
              "while"
          },
          {
            type: "code",
            language: "javascript",
            content: `add()`
          },
          {
            type: "paragraph",
            content:
              "means:"
          },
          {
            type: "quote",
            content: "Execute the function immediately."
          }
        ]
      },

      {
        heading: "Anonymous Callback Functions",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callbacks are often written directly where they are needed."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(function () {
    console.log("Finished");
}, 1000);`
          },
          {
            type: "paragraph",
            content:
              "Here the callback has no name."
          },
          {
            type: "paragraph",
            content:
              "This is called an anonymous function."
          }
        ]
      },

      {
        heading: "Arrow Function Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern JavaScript usually uses arrow functions."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Finished");
}, 1000);`
          },
          {
            type: "paragraph",
            content:
              "This is shorter and easier to read."
          }
        ]
      },

      {
        heading: "Synchronous Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Not every callback is asynchronous."
          },
          {
            type: "paragraph",
            content:
              "Some callbacks execute immediately."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const numbers = [1, 2, 3];

numbers.forEach((number) => {
    console.log(number);
});`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `1
2
3`
          },
          {
            type: "paragraph",
            content:
              "The callback runs immediately during the loop."
          },
          {
            type: "paragraph",
            content:
              "This is a synchronous callback."
          },
          {
            type: "paragraph",
            content:
              "The calling function does not return until every callback has finished."
          }
        ]
      },

      {
        heading: "Asynchronous Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Some callbacks execute later."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 2000);

console.log("End");`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `Start
End
Timer Finished`
          },
          {
            type: "paragraph",
            content:
              "Here:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Timer starts.",
              "JavaScript continues.",
              "Callback executes later."
            ]
          },
          {
            type: "paragraph",
            content:
              "This is an asynchronous callback."
          }
        ]
      },

      {
        heading: "Synchronous vs Asynchronous Callbacks",
        blocks: [
          {
            type: "table",
            headers: ["Synchronous Callback", "Asynchronous Callback"],
            rows: [
              ["Executes immediately", "Executes later"],
              ["Blocks until finished", "Doesn't block execution"],
              ["Runs in the current call stack", "Runs after the async operation completes"],
              ["Example: `forEach()`", "Example: `setTimeout()`"]
            ]
          }
        ]
      },

      {
        heading: "Callback Execution Flow",
        blocks: [
          {
            type: "paragraph",
            content:
              "Let's examine an asynchronous callback."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");`
          },
          {
            type: "paragraph",
            content:
              "Execution flow:"
          },
          {
            type: "code",
            language: "text",
            content: `Run console.log("A")

↓

Start timer

↓

Continue immediately

↓

Run console.log("C")

↓

Timer completes

↓

Callback enters Event Loop

↓

Callback executes

↓

Print "B"`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `A
C
B`
          },
          {
            type: "paragraph",
            content:
              "The callback isn't executed by `setTimeout()` itself."
          },
          {
            type: "paragraph",
            content:
              "Instead:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timer finishes.",
              "Node.js notifies the Event Loop.",
              "Event Loop schedules the callback.",
              "JavaScript executes the callback when the call stack is empty."
            ]
          },
          {
            type: "paragraph",
            content:
              "We'll study this process in detail later in the Event Loop lesson."
          }
        ]
      },

      {
        heading: "Why Callbacks Are Perfect for I/O",
        blocks: [
          {
            type: "paragraph",
            content:
              "Reading a file may take milliseconds or several seconds."
          },
          {
            type: "paragraph",
            content:
              "Instead of waiting:"
          },
          {
            type: "code",
            language: "text",
            content: `Read file

↓

Wait...

↓

Wait...

↓

Wait...

↓

Continue`
          },
          {
            type: "paragraph",
            content:
              "Node.js does:"
          },
          {
            type: "code",
            language: "text",
            content: `Start reading

↓

Continue executing other code

↓

File finishes

↓

Execute callback`
          },
          {
            type: "paragraph",
            content:
              "This is why Node.js can efficiently handle thousands of simultaneous operations."
          }
        ]
      },

      {
        heading: "Callbacks with fs.readFile()",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of the most common callback APIs is:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import fs from "node:fs";

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});`
          },
          {
            type: "paragraph",
            content:
              "Notice the callback."
          },
          {
            type: "code",
            language: "javascript",
            content: `(err, data) => {

}`
          },
          {
            type: "paragraph",
            content:
              "Node.js calls it only after the file has been read."
          }
        ]
      },

      {
        heading: "The Error-First Callback Convention",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of Node.js's most important conventions is the **error-first callback pattern**."
          },
          {
            type: "paragraph",
            content:
              "Most callback APIs follow this structure:"
          },
          {
            type: "code",
            language: "javascript",
            content: `callback(error, result);`
          },
          {
            type: "paragraph",
            content:
              "The first argument always represents an error."
          },
          {
            type: "paragraph",
            content:
              "The second argument contains the successful result."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("users.json", "utf8", (err, data) => {

});`
          },
          {
            type: "paragraph",
            content:
              "If reading succeeds:"
          },
          {
            type: "output",
            content: `err

↓

null`
          },
          {
            type: "paragraph",
            content:
              "and"
          },
          {
            type: "output",
            content: `data

↓

file contents`
          },
          {
            type: "paragraph",
            content:
              "If reading fails:"
          },
          {
            type: "output",
            content: `err

↓

Error object`
          },
          {
            type: "paragraph",
            content:
              "and"
          },
          {
            type: "output",
            content: `data

↓

undefined`
          }
        ]
      },

      {
        heading: "Why Error Comes First",
        blocks: [
          {
            type: "paragraph",
            content:
              "This design makes error handling consistent across the Node.js ecosystem."
          },
          {
            type: "paragraph",
            content:
              "Instead of remembering different argument orders for different APIs, developers know that the first parameter should always be checked for errors."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (err) {
    console.error(err);
    return;
}`
          },
          {
            type: "paragraph",
            content:
              "Only after confirming there is no error should you process the result."
          }
        ]
      },

      {
        heading: "Example: Successful Callback",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("notes.txt", "utf8", (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data);

});`
          },
          {
            type: "paragraph",
            content:
              "If the file exists:"
          },
          {
            type: "output",
            content: `Hello Node.js`
          }
        ]
      },

      {
        heading: "Example: Failed Callback",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose the file doesn't exist."
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("missing.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err.code);
        return;
    }

});`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `ENOENT`
          },
          {
            type: "paragraph",
            content:
              "This lets your application recover instead of crashing unexpectedly."
          }
        ]
      },

      {
        heading: "Multiple Callback-Based APIs",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callbacks appear throughout Node.js."
          },
          {
            type: "paragraph",
            content:
              "Timers"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {

}, 1000);`
          },
          {
            type: "paragraph",
            content:
              "Intervals"
          },
          {
            type: "code",
            language: "javascript",
            content: `setInterval(() => {

}, 500);`
          },
          {
            type: "paragraph",
            content:
              "File system"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.writeFile(file, data, callback);`
          },
          {
            type: "paragraph",
            content:
              "Streams"
          },
          {
            type: "code",
            language: "javascript",
            content: `stream.on("data", callback);`
          },
          {
            type: "paragraph",
            content:
              "Events"
          },
          {
            type: "code",
            language: "javascript",
            content: `emitter.on("click", callback);`
          },
          {
            type: "paragraph",
            content:
              "Networking"
          },
          {
            type: "code",
            language: "javascript",
            content: `server.listen(3000, callback);`
          },
          {
            type: "paragraph",
            content:
              "Understanding callbacks makes these APIs much easier to learn."
          }
        ]
      },

      {
        heading: "Callback Execution Isn't Immediate",
        blocks: [
          {
            type: "paragraph",
            content:
              "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Program started");

fs.readFile("notes.txt", "utf8", (err, data) => {
    console.log("Finished reading");
});

console.log("Program finished");`
          },
          {
            type: "paragraph",
            content:
              "Output:"
          },
          {
            type: "output",
            content: `Program started
Program finished
Finished reading`
          },
          {
            type: "paragraph",
            content:
              "Even though `readFile()` appears before the second `console.log()`, the callback runs only after the file operation completes."
          },
          {
            type: "paragraph",
            content:
              "This illustrates the non-blocking nature of Node.js."
          }
        ]
      },

      {
        heading: "Real-World Example: Downloading a File",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine a browser downloading an image."
          },
          {
            type: "code",
            language: "text",
            content: `Start Download

↓

Continue loading webpage

↓

Image downloaded

↓

Display image`
          },
          {
            type: "paragraph",
            content:
              "The browser doesn't stop rendering the page while waiting for the download."
          },
          {
            type: "paragraph",
            content:
              "Callbacks enable this behavior."
          }
        ]
      },

      {
        heading: "Real-World Example: Restaurant Analogy",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine ordering food at a restaurant."
          },
          {
            type: "paragraph",
            content:
              "Blocking approach:"
          },
          {
            type: "code",
            language: "text",
            content: `Order

↓

Stand at kitchen

↓

Wait

↓

Wait

↓

Receive food`
          },
          {
            type: "paragraph",
            content:
              "You waste time doing nothing."
          },
          {
            type: "paragraph",
            content:
              "Node.js approach:"
          },
          {
            type: "code",
            language: "text",
            content: `Order food

↓

Sit with friends

↓

Talk

↓

Receive notification

↓

Collect food`
          },
          {
            type: "paragraph",
            content:
              "The notification is like a callback—it tells you when the task is complete."
          }
        ]
      },

      {
        heading: "Advantages of Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "## Simple Concept"
          },
          {
            type: "paragraph",
            content:
              "Callbacks are simply functions passed to other functions."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Efficient for Asynchronous Tasks"
          },
          {
            type: "paragraph",
            content:
              "They allow JavaScript to continue executing while operations happen in the background."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Foundation of Node.js"
          },
          {
            type: "paragraph",
            content:
              "Many Node.js APIs were originally designed around callbacks."
          },
          {
            type: "paragraph",
            content:
              "Understanding them helps you understand the platform itself."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Low Overhead"
          },
          {
            type: "paragraph",
            content:
              "Callbacks are lightweight and don't require additional abstractions."
          }
        ]
      },

      {
        heading: "Limitations of Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callbacks are powerful, but they also have drawbacks."
          },
          {
            type: "paragraph",
            content:
              "## Nested Code"
          },
          {
            type: "paragraph",
            content:
              "As multiple asynchronous operations depend on each other, callbacks become deeply nested."
          },
          {
            type: "code",
            language: "javascript",
            content: `step1(() => {

    step2(() => {

        step3(() => {

            step4(() => {

            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "This is difficult to read and maintain."
          },
          {
            type: "paragraph",
            content:
              "This problem is known as **Callback Hell**, which we'll explore in the next lesson."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Error Handling Becomes Harder"
          },
          {
            type: "paragraph",
            content:
              "Managing errors across several nested callbacks quickly becomes repetitive and difficult to follow."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Reduced Readability"
          },
          {
            type: "paragraph",
            content:
              "Deep nesting makes the logical flow of a program harder to understand compared to modern approaches like `async`/`await`."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "## Harder Composition"
          },
          {
            type: "paragraph",
            content:
              "Combining multiple independent asynchronous operations using callbacks often requires additional bookkeeping, whereas Promises provide built-in utilities such as `Promise.all()`."
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
                question: "Calling Instead of Passing",
                answer:
                  "Pass the function reference itself, not the result of calling it.",
                examples: [
                  {
                    title: "Incorrect",
                    language: "javascript",
                    content: `setTimeout(printMessage(), 1000);`
                  },
                  {
                    title: "Correct",
                    language: "javascript",
                    content: `setTimeout(printMessage, 1000);`
                  }
                ]
              },
              {
                question: "Ignoring Errors",
                answer:
                  "Always check the error first before using the result data.",
                examples: [
                  {
                    title: "Unsafe",
                    language: "javascript",
                    content: `fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});`
                  },
                  {
                    title: "Safe",
                    language: "javascript",
                    content: `if (err) {
    return;
}`
                  }
                ]
              },
              {
                question: "Assuming Asynchronous Order",
                answer:
                  "Code after an asynchronous operation executes before the callback. Work with data inside the callback (or use Promises/`async`-`await` in modern code).",
                examples: [
                  {
                    title: "Wrong Assumption",
                    language: "javascript",
                    content: `let data;

fs.readFile("file.txt", "utf8", (err, result) => {
    data = result;
});

console.log(data); // undefined`
                  }
                ]
              },
              {
                question: "Mixing Sync and Async APIs Unnecessarily",
                answer:
                  "Avoid using synchronous filesystem operations inside performance-critical servers when asynchronous callback-based alternatives are available. Blocking the main thread defeats one of Node.js's biggest advantages."
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
              "Understand that callbacks are ordinary JavaScript functions passed to other functions for later execution.",
              "Learn to distinguish between synchronous and asynchronous callbacks; not every callback runs later.",
              "Always follow the error-first callback convention by checking the `err` argument before using the result.",
              "Keep callback functions focused on a single responsibility to improve readability and maintainability.",
              "Prefer named callback functions when the logic becomes more than a few lines long.",
              "Avoid deeply nested callback structures; if the flow becomes difficult to follow, consider refactoring or using Promises in newer code.",
              "Be mindful of execution order—starting an asynchronous operation does not mean its callback runs immediately.",
              "Familiarize yourself with callback-based Node.js APIs, as you'll still encounter them in core modules, legacy libraries, and existing production code."
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
              "Callbacks laid the foundation for asynchronous programming in Node.js. Even though modern JavaScript often favors Promises and `async`/`await`, understanding callbacks is essential because they explain how asynchronous operations originated and how many Node.js APIs continue to work under the hood. One often overlooked aspect is that every Promise and `async`/`await` function ultimately relies on the same underlying callback mechanism to notify the program when an asynchronous operation completes. This is why callbacks are not just a historical concept—they remain the foundation upon which Node.js's entire asynchronous model is built. In the next lesson, you'll see how extensive callback usage can lead to Callback Hell and why newer asynchronous patterns were introduced to address its limitations."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callbacks are functions passed to other functions for later execution. They are fundamental to Node.js's asynchronous programming model, enabling non-blocking I/O operations without stopping the main thread. The error-first callback convention—where the first argument is always an error object or `null`—provides consistent error handling across the Node.js ecosystem."
          },
          {
            type: "paragraph",
            content:
              "Callbacks are used throughout core modules such as `fs`, `http`, `events`, and timers. While callbacks are simple and efficient, they can lead to deeply nested code and complicated error handling when multiple asynchronous operations are chained, a problem known as \"Callback Hell.\""
          },
          {
            type: "paragraph",
            content:
              "By following best practices such as checking errors first, using named functions for complex logic, and keeping callbacks focused on a single responsibility, you can write maintainable callback-based code. Understanding callbacks is essential because they form the foundation of all asynchronous programming in Node.js, and they remain relevant even when using modern alternatives like Promises and `async`/`await`."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Callback Hell
============================= */
    "nodejs-callback-hell": {
    title: "Callback Hell",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction to Callback Hell",
        blocks: [
          {
            type: "paragraph",
            content:
              "In the previous lesson, you learned that callbacks are the foundation of asynchronous programming in Node.js. They allow long-running operations such as reading files, making network requests, or querying databases to complete without blocking the main thread."
          },
          {
            type: "paragraph",
            content:
              "However, callbacks have one major drawback."
          },
          {
            type: "paragraph",
            content:
              "When multiple asynchronous operations depend on one another, callbacks often become deeply nested. As more operations are added, the code becomes harder to read, debug, maintain, and extend."
          },
          {
            type: "paragraph",
            content:
              "This problem is known as Callback Hell."
          },
          {
            type: "paragraph",
            content:
              "Understanding callback hell is important because it explains why Promises, async/await, and many modern JavaScript features were introduced. Even though modern Node.js applications rarely rely heavily on nested callbacks anymore, millions of existing projects still contain callback-based code."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, we'll understand what callback hell is, why it happens, why it's problematic, and how developers solved it."
          }
        ]
      },

      {
        heading: "What is Callback Hell?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callback Hell is a situation where multiple asynchronous callbacks are nested inside one another, creating code that is difficult to read and maintain."
          },
          {
            type: "paragraph",
            content:
              "The deeper the nesting becomes, the more confusing the program gets."
          },
          {
            type: "paragraph",
            content:
              "Imagine you want to perform several tasks in sequence:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Read a configuration file.",
              "Connect to a database.",
              "Fetch a user.",
              "Read the user's profile.",
              "Send an email."
            ]
          },
          {
            type: "paragraph",
            content:
              "Each step depends on the previous one completing successfully."
          },
          {
            type: "paragraph",
            content:
              "Using callbacks, the code often becomes:"
          },
          {
            type: "code",
            language: "javascript",
            content: `readConfig(function(configError, config) {

    if (configError) return;

    connectDatabase(config, function(dbError, db) {

        if (dbError) return;

        getUser(db, function(userError, user) {

            if (userError) return;

            readProfile(user, function(profileError, profile) {

                if (profileError) return;

                sendEmail(profile, function(emailError) {

                    if (emailError) return;

                    console.log("Done");

                });

            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Notice how every new operation is nested inside the previous callback."
          },
          {
            type: "paragraph",
            content:
              "The code keeps moving further to the right."
          },
          {
            type: "paragraph",
            content:
              "This staircase-shaped structure is often called the **Pyramid of Doom**."
          }
        ]
      },

      {
        heading: "Why Does Callback Hell Happen?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callback hell doesn't happen because callbacks are bad."
          },
          {
            type: "paragraph",
            content:
              "It happens because one asynchronous operation depends on the result of another."
          },
          {
            type: "paragraph",
            content:
              "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `Login user
      ↓
Load profile
      ↓
Load permissions
      ↓
Load dashboard
      ↓
Display dashboard`
          },
          {
            type: "paragraph",
            content:
              "Each operation must wait until the previous one finishes."
          },
          {
            type: "paragraph",
            content:
              "Callbacks naturally express this dependency by placing the next operation inside the previous callback."
          },
          {
            type: "paragraph",
            content:
              "As the number of dependent tasks increases, nesting grows."
          }
        ]
      },

      {
        heading: "Understanding the Pyramid of Doom",
        blocks: [
          {
            type: "paragraph",
            content:
              "The phrase Pyramid of Doom describes the triangular appearance created by excessive indentation."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `step1(function () {

    step2(function () {

        step3(function () {

            step4(function () {

                step5(function () {

                });

            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Every new level shifts the code further to the right."
          },
          {
            type: "paragraph",
            content:
              "The more levels you add, the harder it becomes to understand."
          }
        ]
      },

      {
        heading: "Real-World Example",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine an e-commerce application."
          },
          {
            type: "paragraph",
            content:
              "The application needs to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authenticate the user",
              "Load their shopping cart",
              "Check inventory",
              "Calculate shipping",
              "Process payment",
              "Generate invoice",
              "Send confirmation email"
            ]
          },
          {
            type: "paragraph",
            content:
              "Using callbacks:"
          },
          {
            type: "code",
            language: "javascript",
            content: `login(user, function(err, user) {

    getCart(user, function(err, cart) {

        checkInventory(cart, function(err, items) {

            calculateShipping(items, function(err, shipping) {

                processPayment(shipping, function(err) {

                    generateInvoice(function(err) {

                        sendEmail(function(err) {

                            console.log("Order completed");

                        });

                    });

                });

            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Although each function is simple, together they create deeply nested logic."
          }
        ]
      },

      {
        heading: "Why Callback Hell is Difficult to Maintain",
        blocks: [
          {
            type: "paragraph",
            content:
              "The biggest problem isn't indentation."
          },
          {
            type: "paragraph",
            content:
              "The real problem is maintainability."
          },
          {
            type: "paragraph",
            content:
              "Consider this code after six months."
          },
          {
            type: "paragraph",
            content:
              "Questions become difficult:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which callback belongs to which function?",
              "Where should a new step be inserted?",
              "Which error belongs to which operation?",
              "Which variables are still available?",
              "Where does execution actually continue?"
            ]
          },
          {
            type: "paragraph",
            content:
              "Developers spend more time understanding the code than writing new features."
          }
        ]
      },

      {
        heading: "Readability Problems",
        blocks: [
          {
            type: "paragraph",
            content:
              "Deep nesting makes code visually difficult."
          },
          {
            type: "paragraph",
            content:
              "Instead of reading from top to bottom:"
          },
          {
            type: "code",
            language: "text",
            content: `Step A
↓

Step B
↓

Step C
↓

Step D`
          },
          {
            type: "paragraph",
            content:
              "You read:"
          },
          {
            type: "code",
            language: "text",
            content: `Step A
    Step B
        Step C
            Step D
                Step E
                    Step F`
          },
          {
            type: "paragraph",
            content:
              "The actual program flow becomes hidden inside indentation."
          }
        ]
      },

      {
        heading: "Error Propagation Becomes Difficult",
        blocks: [
          {
            type: "paragraph",
            content:
              "Most Node.js callbacks follow the **error-first callback convention**:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function(error, result)`
          },
          {
            type: "paragraph",
            content:
              "Every callback must check errors."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("config.json", function(err, data) {

    if (err) {
        console.log(err);
        return;
    }

});`
          },
          {
            type: "paragraph",
            content:
              "Now imagine six nested callbacks."
          },
          {
            type: "paragraph",
            content:
              "Every level needs:"
          },
          {
            type: "code",
            language: "javascript",
            content: `if (err) {
    return;
}`
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `step1(function(err, result1) {

    if (err) return;

    step2(function(err, result2) {

        if (err) return;

        step3(function(err, result3) {

            if (err) return;

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "The same error handling logic is repeated over and over."
          }
        ]
      },

      {
        heading: "Debugging Becomes Harder",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose an error occurs."
          },
          {
            type: "paragraph",
            content:
              "Questions immediately arise:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Which callback failed?",
              "Which operation caused it?",
              "Which callback never executed?",
              "Which callback already finished?"
            ]
          },
          {
            type: "paragraph",
            content:
              "Tracing execution through multiple nested callbacks is difficult, especially in large applications."
          }
        ]
      },

      {
        heading: "Code Reuse Becomes Difficult",
        blocks: [
          {
            type: "paragraph",
            content:
              "Suppose this callback is useful elsewhere:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function(user) {
    // process user
}`
          },
          {
            type: "paragraph",
            content:
              "If it's buried five levels deep, extracting it into reusable code becomes harder."
          },
          {
            type: "paragraph",
            content:
              "Deep nesting often results in duplicated logic across projects."
          }
        ]
      },

      {
        heading: "Multiple Independent Operations",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes callbacks become nested even when they don't need to."
          },
          {
            type: "paragraph",
            content:
              "Incorrect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `getUser(function(user) {

    getProducts(function(products) {

        getOrders(function(orders) {

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "These operations may actually be independent."
          },
          {
            type: "paragraph",
            content:
              "They could run simultaneously instead of waiting for one another."
          },
          {
            type: "paragraph",
            content:
              "Poor callback design often causes unnecessary callback hell."
          }
        ]
      },

      {
        heading: "Visualizing Callback Hell",
        blocks: [
          {
            type: "paragraph",
            content:
              "Imagine climbing stairs."
          },
          {
            type: "code",
            language: "text",
            content: `Step 1

    Step 2

        Step 3

            Step 4

                Step 5

                    Step 6`
          },
          {
            type: "paragraph",
            content:
              "Now compare it with sequential code."
          },
          {
            type: "code",
            language: "text",
            content: `Step 1
Step 2
Step 3
Step 4
Step 5
Step 6`
          },
          {
            type: "paragraph",
            content:
              "Sequential code is much easier to understand."
          },
          {
            type: "paragraph",
            content:
              "This simplicity is exactly what Promises and async/await later provide."
          }
        ]
      },

      {
        heading: "Techniques to Reduce Callback Hell",
        blocks: [
          {
            type: "paragraph",
            content:
              "Before Promises existed, developers found ways to make callback-based code more manageable."
          },
          {
            type: "paragraph",
            content:
              "Although these techniques don't eliminate callbacks, they greatly improve readability and maintainability."
          }
        ]
      },

      {
        heading: "1. Use Named Functions Instead of Anonymous Callbacks",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of writing everything inline:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("data.txt", function(err, data) {

    if (err) return;

    processData(data);

});`
          },
          {
            type: "paragraph",
            content:
              "Extract the callback into a separate function:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function handleFile(err, data) {

    if (err) return;

    processData(data);

}

fs.readFile("data.txt", handleFile);`
          },
          {
            type: "paragraph",
            content:
              "Benefits:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cleaner code",
              "Easier debugging",
              "Reusable logic",
              "Smaller functions"
            ]
          }
        ]
      },

      {
        heading: "2. Break Large Tasks into Small Functions",
        blocks: [
          {
            type: "paragraph",
            content:
              "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `step1(function() {

    step2(function() {

        step3(function() {

            step4(function() {

            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Create small reusable functions."
          },
          {
            type: "code",
            language: "javascript",
            content: `function afterStep1() {
    step2(afterStep2);
}

function afterStep2() {
    step3(afterStep3);
}

function afterStep3() {
    step4(finish);
}

step1(afterStep1);`
          },
          {
            type: "paragraph",
            content:
              "The execution is exactly the same, but the code is much easier to read."
          }
        ]
      },

      {
        heading: "3. Separate Business Logic",
        blocks: [
          {
            type: "paragraph",
            content:
              "Don't place complex calculations inside callbacks."
          },
          {
            type: "paragraph",
            content:
              "Poor:"
          },
          {
            type: "code",
            language: "javascript",
            content: `readFile(function(data) {

    // 200 lines of processing

});`
          },
          {
            type: "paragraph",
            content:
              "Better:"
          },
          {
            type: "code",
            language: "javascript",
            content: `readFile(function(err, data) {

    processData(data);

});`
          },
          {
            type: "paragraph",
            content:
              "Move business logic into dedicated functions."
          }
        ]
      },

      {
        heading: "4. Keep Callback Functions Small",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callbacks should ideally perform one task."
          },
          {
            type: "paragraph",
            content:
              "Large callbacks become difficult to understand."
          },
          {
            type: "paragraph",
            content:
              "Good callbacks usually:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Validate errors",
              "Call another function",
              "Return quickly"
            ]
          }
        ]
      },

      {
        heading: "5. Avoid Unnecessary Nesting",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes asynchronous operations are independent."
          },
          {
            type: "paragraph",
            content:
              "Instead of nesting:"
          },
          {
            type: "code",
            language: "javascript",
            content: `readUsers(function(users) {

    readProducts(function(products) {

    });

});`
          },
          {
            type: "paragraph",
            content:
              "If neither depends on the other, they can start independently."
          },
          {
            type: "paragraph",
            content:
              "This reduces callback depth and improves performance."
          }
        ]
      },

      {
        heading: "Why Promises Were Introduced",
        blocks: [
          {
            type: "paragraph",
            content:
              "Developers quickly realized that callbacks did not scale well for complex applications."
          },
          {
            type: "paragraph",
            content:
              "As projects grew larger, callback hell became one of the biggest problems in JavaScript development."
          },
          {
            type: "paragraph",
            content:
              "Promises were introduced to solve this issue by representing the result of an asynchronous operation as an object, allowing asynchronous code to be chained instead of deeply nested."
          },
          {
            type: "paragraph",
            content:
              "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `step1(function() {

    step2(function() {

        step3(function() {

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Promises allow a flatter structure:"
          },
          {
            type: "code",
            language: "javascript",
            content: `step1()
    .then(step2)
    .then(step3)
    .then(step4)
    .catch(handleError);`
          },
          {
            type: "paragraph",
            content:
              "The code now reads from top to bottom instead of moving deeper to the right."
          },
          {
            type: "paragraph",
            content:
              "We'll study Promises in detail in the upcoming lessons."
          }
        ]
      },

      {
        heading: "Callback Hell vs Promise Chaining",
        blocks: [
          {
            type: "table",
            headers: ["Callback Hell", "Promise Chaining"],
            rows: [
              ["Deep nesting", "Flat structure"],
              ["Hard to read", "Easier to follow"],
              ["Repeated error handling", "Centralized `.catch()`"],
              ["Difficult debugging", "Cleaner stack traces"],
              ["Less maintainable", "More maintainable"],
              ["Large indentation", "Minimal indentation"]
            ]
          }
        ]
      },

      {
        heading: "Common Misconceptions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Callback hell is caused by callbacks",
                answer:
                  "No. Callbacks themselves are not the problem. Poor organization and excessive nesting create callback hell. Simple callbacks are perfectly fine."
              },
              {
                question: "Callback hell means callbacks are obsolete",
                answer:
                  "Not true. Node.js still uses callbacks in many APIs for compatibility and performance reasons. Even modern applications sometimes use callbacks when appropriate."
              },
              {
                question: "Promises eliminate asynchronous programming complexity",
                answer:
                  "Not entirely. Promises improve readability, but asynchronous programming still requires understanding execution order, error handling, and concurrency."
              },
              {
                question: "Every nested callback is callback hell",
                answer:
                  "No. One or two levels of nesting are completely normal. Callback hell usually refers to deeply nested, difficult-to-maintain callback chains."
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
              "Keep callback functions short and focused.",
              "Use the error-first callback convention consistently.",
              "Extract callbacks into named functions when they grow large.",
              "Separate business logic from asynchronous control flow.",
              "Avoid nesting independent asynchronous operations.",
              "Prefer Promises or async/await for new projects when appropriate.",
              "Maintain consistent indentation and formatting.",
              "Handle errors at every asynchronous boundary."
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
              "Callback hell occurs when multiple asynchronous callbacks are deeply nested.",
              "The resulting structure is often called the Pyramid of Doom because of its triangular indentation.",
              "Deep nesting reduces readability, maintainability, and makes debugging more difficult.",
              "Repeated error handling and tightly coupled logic are common drawbacks of callback-heavy code.",
              "You can reduce callback hell by using named functions, modularizing logic, keeping callbacks small, and avoiding unnecessary nesting.",
              "Callback hell motivated the introduction of Promises and, later, `async`/`await`, which provide a much cleaner way to write asynchronous code.",
              "Understanding callback hell is essential because you'll still encounter callback-based code in many existing Node.js applications, even if modern projects primarily use Promises and `async`/`await`."
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
              "One of the most important lessons from callback hell is that the problem is not about callbacks—it's about how they are organized. JavaScript functions are extremely powerful, but placing too much logic inside nested functions makes code difficult to reason about. The real solution to callback hell is not abandoning callbacks entirely, but learning to design functions that are small, focused, and reusable. This principle applies equally to Promises, async/await, and any other programming paradigm. Even with modern asynchronous patterns, you can still create unreadable code if you don't organize your logic properly. Understanding callback hell teaches developers to think about code organization, function boundaries, error handling, and the flow of control—skills that remain essential regardless of which asynchronous API you use."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content:
              "Callback Hell is a situation where multiple asynchronous callbacks are deeply nested, creating code that is difficult to read, debug, and maintain. It occurs when one asynchronous operation depends on the result of another, leading to a staircase-shaped structure often called the Pyramid of Doom."
          },
          {
            type: "paragraph",
            content:
              "Deeply nested callbacks make error handling repetitive, debugging difficult, and code reuse challenging. While callback hell was one of the biggest pain points in early Node.js development, developers developed strategies to manage it by using named functions, breaking tasks into small pieces, separating business logic, and avoiding unnecessary nesting."
          },
          {
            type: "paragraph",
            content:
              "Callback hell was one of the primary motivations for introducing Promises and async/await, which provide a flatter, more readable way to handle asynchronous operations. Even though modern Node.js applications primarily use these newer patterns, understanding callback hell is essential because many existing codebases still use callbacks, and the underlying concepts of asynchronous execution remain the same."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Promises
============================= */
    "nodejs-promises": {
    title: "Promises",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction to Promises",
        blocks: [
          {
            type: "paragraph",
            content:
              "Modern Node.js applications perform countless operations that take time to complete. Reading files, querying databases, making HTTP requests, communicating with APIs, and processing large datasets are all asynchronous operations. If JavaScript waited for each operation to finish before moving to the next one, applications would become slow and unresponsive."
          },
          {
            type: "paragraph",
            content:
              "Callbacks were the original solution to asynchronous programming, but as applications grew larger, deeply nested callbacks became difficult to read and maintain. This problem led to the introduction of Promises, one of the most important features in modern JavaScript."
          },
          {
            type: "paragraph",
            content:
              "Today, Promises form the foundation of nearly all asynchronous programming in Node.js. Features such as async/await, the Fetch API, database libraries, file system promises, and many modern frameworks are all built on top of Promises."
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll learn not only how to use Promises but also why they exist, how they work internally, and how to write clean, reliable asynchronous code."
          }
        ]
      },

      {
        heading: "Why Promises Were Introduced",
        blocks: [
          {
            type: "paragraph",
            content:
              "Before Promises, asynchronous code relied almost entirely on callbacks."
          },
          {
            type: "paragraph",
            content:
              "Consider a simple application that needs to:"
          },
          {
            type: "list",
            style: "orderedList",
            items: [
              "Read a configuration file.",
              "Connect to a database.",
              "Retrieve user information.",
              "Save a log file."
            ]
          },
          {
            type: "paragraph",
            content:
              "Using callbacks, the code often looked like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `readConfig(function (configError, config) {

    if (configError) {
        console.error(configError);
        return;
    }

    connectDatabase(config, function (dbError, db) {

        if (dbError) {
            console.error(dbError);
            return;
        }

        getUsers(db, function (userError, users) {

            if (userError) {
                console.error(userError);
                return;
            }

            saveLog(users, function (logError) {

                if (logError) {
                    console.error(logError);
                    return;
                }

                console.log("Completed");
            });

        });

    });

});`
          },
          {
            type: "paragraph",
            content:
              "Although this works, several problems quickly become obvious:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Deep nesting",
              "Difficult error handling",
              "Poor readability",
              "Hard to debug",
              "Difficult maintenance",
              "Difficult code reuse"
            ]
          },
          {
            type: "paragraph",
            content:
              "This pattern became famously known as the Callback Hell or the Pyramid of Doom."
          },
          {
            type: "paragraph",
            content:
              "Promises solve these problems by representing the eventual result of an asynchronous operation as an object that can be chained and composed."
          }
        ]
      },

      {
        heading: "What is a Promise?",
        blocks: [
          {
            type: "paragraph",
            content:
              "A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation."
          },
          {
            type: "paragraph",
            content:
              "Think of a promise in real life."
          },
          {
            type: "paragraph",
            content:
              "Imagine your friend says:"
          },
          {
            type: "quote",
            content: "I'll send you the project tomorrow."
          },
          {
            type: "paragraph",
            content:
              "Right now, you don't have the project."
          },
          {
            type: "paragraph",
            content:
              "Three outcomes are possible:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Your friend hasn't sent it yet.",
              "Your friend sends it successfully.",
              "Your friend fails to send it."
            ]
          },
          {
            type: "paragraph",
            content:
              "A Promise behaves exactly the same way."
          },
          {
            type: "paragraph",
            content:
              "It represents a value that **may not be available immediately but will become available later**."
          }
        ]
      },

      {
        heading: "Promise Lifecycle",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every Promise moves through a lifecycle."
          },
          {
            type: "code",
            language: "text",
            content: `          Pending
             |
      ----------------
      |              |
Resolved         Rejected
(Fulfilled)      (Failed)`
          },
          {
            type: "paragraph",
            content:
              "Once a Promise is fulfilled or rejected, its state can never change again."
          },
          {
            type: "paragraph",
            content:
              "This behavior is called immutability of promise state."
          }
        ]
      },

      {
        heading: "Promise States",
        blocks: [
          {
            type: "paragraph",
            content:
              "Every Promise is always in exactly one of these states."
          },
          {
            type: "paragraph",
            content:
              "1. Pending"
          },
          {
            type: "paragraph",
            content:
              "The asynchronous operation is still running."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reading a file",
              "Fetching data",
              "Waiting for a timer"
            ]
          },
          {
            type: "paragraph",
            content:
              "The result is not available yet."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "2. Fulfilled"
          },
          {
            type: "paragraph",
            content:
              "The operation completed successfully."
          },
          {
            type: "paragraph",
            content:
              "A value becomes available."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "output",
            content: `User data loaded`
          },
          {
            type: "paragraph",
            content:
              "or"
          },
          {
            type: "output",
            content: `File read successfully`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content:
              "3. Rejected"
          },
          {
            type: "paragraph",
            content:
              "Something went wrong."
          },
          {
            type: "paragraph",
            content:
              "Instead of returning a value, the Promise returns an error."
          },
          {
            type: "paragraph",
            content:
              "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "File not found",
              "Database connection failed",
              "Network timeout",
              "Permission denied"
            ]
          }
        ]
      },

      {
        heading: "Promise State Transition",
        blocks: [
          {
            type: "paragraph",
            content:
              "A Promise follows a very strict sequence."
          },
          {
            type: "code",
            language: "text",
            content: `Pending
   |
   | resolve()
   V
Fulfilled

OR

Pending
   |
   | reject()
   V
Rejected`
          },
          {
            type: "paragraph",
            content:
              "It can never move back to Pending."
          },
          {
            type: "paragraph",
            content:
              "It can never switch from Fulfilled to Rejected."
          },
          {
            type: "paragraph",
            content:
              "It can never switch from Rejected to Fulfilled."
          },
          {
            type: "paragraph",
            content:
              "Only one final state is allowed."
          }
        ]
      },

      {
        heading: "Creating a Promise",
        blocks: [
          {
            type: "paragraph",
            content:
              "A Promise is created using the `Promise` constructor."
          },
          {
            type: "paragraph",
            content:
              "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve, reject) => {

});`
          },
          {
            type: "paragraph",
            content:
              "The constructor receives a function called the executor function."
          },
          {
            type: "paragraph",
            content:
              "The executor receives two functions:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "resolve()",
              "reject()"
            ]
          }
        ]
      },

      {
        heading: "Understanding the Executor Function",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve, reject) => {

});`
          },
          {
            type: "paragraph",
            content:
              "This function starts executing immediately after the Promise is created."
          },
          {
            type: "paragraph",
            content:
              "It is responsible for performing the asynchronous work."
          },
          {
            type: "paragraph",
            content:
              "If everything succeeds:"
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve(result);`
          },
          {
            type: "paragraph",
            content:
              "If something fails:"
          },
          {
            type: "code",
            language: "javascript",
            content: `reject(error);`
          }
        ]
      },

      {
        heading: "Your First Promise",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve, reject) => {

    resolve("Hello from Promise");

});`
          },
          {
            type: "paragraph",
            content:
              "Nothing is printed yet because no one is consuming the Promise."
          }
        ]
      },

      {
        heading: "Consuming a Promise",
        blocks: [
          {
            type: "paragraph",
            content:
              "We use `.then()` to receive successful results."
          },
          {
            type: "code",
            language: "javascript",
            content: `promise.then((message) => {
    console.log(message);
});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Hello from Promise`
          }
        ]
      },

      {
        heading: "Understanding resolve()",
        blocks: [
          {
            type: "paragraph",
            content:
              "The `resolve()` function marks the Promise as fulfilled."
          },
          {
            type: "paragraph",
            content:
              "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve) => {

    resolve("Success");

});`
          },
          {
            type: "paragraph",
            content:
              "The Promise immediately becomes fulfilled."
          },
          {
            type: "paragraph",
            content:
              "resolve() can return any value."
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve(100);`
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve(true);`
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve({
    name: "Alice"
});`
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve([1,2,3]);`
          },
          {
            type: "code",
            language: "javascript",
            content: `resolve(null);`
          },
          {
            type: "paragraph",
            content:
              "All are valid."
          }
        ]
      },

      {
        heading: "Understanding reject()",
        blocks: [
          {
            type: "paragraph",
            content:
              "If something goes wrong:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve, reject) => {

    reject("Something failed");

});`
          },
          {
            type: "paragraph",
            content:
              "Now the Promise becomes rejected."
          },
          {
            type: "paragraph",
            content:
              "We receive the error using `.catch()`."
          },
          {
            type: "code",
            language: "javascript",
            content: `promise.catch(error => {

    console.log(error);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Something failed`
          }
        ]
      },

      {
        heading: "Simulating an Asynchronous Task",
        blocks: [
          {
            type: "paragraph",
            content:
              "Promises become useful when an operation takes time."
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data received");

    }, 2000);

});`
          },
          {
            type: "paragraph",
            content:
              "Consume it."
          },
          {
            type: "code",
            language: "javascript",
            content: `promise.then(data => {

    console.log(data);

});`
          },
          {
            type: "paragraph",
            content:
              "Output after two seconds"
          },
          {
            type: "output",
            content: `Data received`
          }
        ]
      },

      {
        heading: "Promise Execution Timeline",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Promise Created
      |

Executor Starts
      |

Waiting...

(setTimeout)

      |

resolve()

      |

then() Executes`
          },
          {
            type: "paragraph",
            content:
              "Notice that the executor starts immediately, while `.then()` executes only after the Promise resolves."
          }
        ]
      },

      {
        heading: "Using then()",
        blocks: [
          {
            type: "paragraph",
            content:
              "`.then()` handles successful completion."
          },
          {
            type: "code",
            language: "javascript",
            content: `promise.then(result => {

    console.log(result);

});`
          },
          {
            type: "paragraph",
            content:
              "The parameter receives the resolved value."
          },
          {
            type: "paragraph",
            content:
              "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise(resolve => {

    resolve(25);

});

promise.then(number => {

    console.log(number);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `25`
          }
        ]
      },

      {
        heading: "Returning Values from then()",
        blocks: [
          {
            type: "paragraph",
            content:
              "A very important feature of Promises is chaining."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve(10)

.then(number => {

    return number * 2;

})

.then(number => {

    console.log(number);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `20`
          },
          {
            type: "paragraph",
            content:
              "Every `.then()` returns another Promise."
          },
          {
            type: "paragraph",
            content:
              "This is why chaining works."
          }
        ]
      },

      {
        heading: "Multiple then() Calls",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve(5)

.then(value => {

    console.log(value);

    return value + 5;

})

.then(value => {

    console.log(value);

    return value * 2;

})

.then(value => {

    console.log(value);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `5
10
20`
          },
          {
            type: "paragraph",
            content:
              "Each step receives the previous result."
          }
        ]
      },

      {
        heading: "Returning Another Promise",
        blocks: [
          {
            type: "paragraph",
            content:
              "A `.then()` callback can return another Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve(5)

.then(value => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(value * 10);

        }, 1000);

    });

})

.then(result => {

    console.log(result);

});`
          },
          {
            type: "paragraph",
            content:
              "Output after one second"
          },
          {
            type: "output",
            content: `50`
          },
          {
            type: "paragraph",
            content:
              "Promise chaining automatically waits for returned Promises to finish."
          },
          {
            type: "paragraph",
            content:
              "This is called Promise flattening."
          },
          {
            type: "paragraph",
            content:
              "You don't have to manually unwrap nested Promises."
          }
        ]
      },

      {
        heading: "Error Handling with catch()",
        blocks: [
          {
            type: "paragraph",
            content:
              "Whenever something fails, use `.catch()`."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.reject("Invalid password")

.catch(error => {

    console.log(error);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Invalid password`
          }
        ]
      },

      {
        heading: "Throwing Errors",
        blocks: [
          {
            type: "paragraph",
            content:
              "Errors don't always come from `reject()`."
          },
          {
            type: "paragraph",
            content:
              "You can throw errors manually."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve()

.then(() => {

    throw new Error("Unexpected error");

})

.catch(error => {

    console.log(error.message);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Unexpected error`
          },
          {
            type: "paragraph",
            content:
              "Any exception thrown inside a `.then()` callback automatically rejects the next Promise in the chain."
          }
        ]
      },

      {
        heading: "Error Propagation",
        blocks: [
          {
            type: "paragraph",
            content:
              "One of the greatest advantages of Promises is automatic error propagation."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve()

.then(() => {

    throw new Error("Database failed");

})

.then(() => {

    console.log("Never runs");

})

.catch(error => {

    console.log(error.message);

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Database failed`
          },
          {
            type: "paragraph",
            content:
              "The error skips every remaining `.then()` until it finds a `.catch()`."
          },
          {
            type: "paragraph",
            content:
              "This makes error handling much cleaner than callbacks."
          }
        ]
      },

      {
        heading: "finally()",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sometimes you want code to execute whether the Promise succeeds or fails."
          },
          {
            type: "paragraph",
            content:
              "For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Closing a database connection",
              "Stopping a loading spinner",
              "Cleaning temporary files",
              "Releasing resources"
            ]
          },
          {
            type: "paragraph",
            content:
              "That's exactly what `.finally()` is for."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve("Done")

.finally(() => {

    console.log("Cleaning up");

});`
          },
          {
            type: "paragraph",
            content:
              "Output"
          },
          {
            type: "output",
            content: `Cleaning up`
          },
          {
            type: "paragraph",
            content:
              "Unlike `.then()` or `.catch()`, `.finally()` does not receive the resolved value or rejection reason. It is intended only for cleanup tasks that should run regardless of the Promise's outcome."
          }
        ]
      },

      {
        heading: "Promise Chaining",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most powerful features of Promises is chaining."
          },
          {
            type: "paragraph",
            content: "Instead of nesting asynchronous operations inside one another, each operation returns a Promise that the next step can use."
          },
          {
            type: "paragraph",
            content: "This results in cleaner, flatter, and more maintainable code."
          },
          {
            type: "paragraph",
            content: "Consider a backend application that needs to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Authenticate a user.",
              "Load their profile.",
              "Retrieve their orders.",
              "Generate a report."
            ]
          },
          {
            type: "paragraph",
            content: "Without Promises, this often leads to deeply nested callbacks."
          },
          {
            type: "paragraph",
            content: "With Promises:"
          },
          {
            type: "code",
            language: "javascript",
            content: `authenticateUser()
.then(user => {
    return loadProfile(user.id);
})
.then(profile => {
    return loadOrders(profile.id);
})
.then(orders => {
    return generateReport(orders);
})
.then(report => {
    console.log(report);
})
.catch(error => {
    console.error(error);
});`
          },
          {
            type: "paragraph",
            content: "Each `.then()` waits until the previous Promise completes."
          },
          {
            type: "paragraph",
            content: "This creates a readable sequence that resembles synchronous code while remaining asynchronous."
          }
        ]
      },
      {
        heading: "What Does then() Actually Return?",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think `.then()` simply executes a callback."
          },
          {
            type: "paragraph",
            content: "In reality, **every call to `.then()` returns a brand-new Promise.**"
          },
          {
            type: "code",
            language: "javascript",
            content: `const p = Promise.resolve(5);
const newPromise = p.then(value => {
    return value * 2;
});`
          },
          {
            type: "paragraph",
            content: "Here,"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`p` is one Promise.",
              "`newPromise` is another Promise."
            ]
          },
          {
            type: "paragraph",
            content: "This is what makes chaining possible."
          },
          {
            type: "paragraph",
            content: "Internally, the chain looks like this:"
          },
          {
            type: "code",
            language: "text",
            content: `Promise 1
     │
     ▼
then()
     │
Promise 2
     │
     ▼
then()
     │
Promise 3
     │
     ▼
catch()`
          },
          {
            type: "paragraph",
            content: "Every step creates another Promise."
          }
        ]
      },
      {
        heading: "Returning Normal Values",
        blocks: [
          {
            type: "paragraph",
            content: "If a `.then()` callback returns a normal JavaScript value, that value automatically becomes the resolved value of the next Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve(10)
.then(number => {
    return number + 5;
})
.then(result => {
    console.log(result);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "15"
          }
        ]
      },
      {
        heading: "Returning Another Promise",
        blocks: [
          {
            type: "paragraph",
            content: "If you return another Promise, JavaScript automatically waits for it."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve("Start")
.then(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Finished");
        }, 2000);
    });
})
.then(message => {
    console.log(message);
});`
          },
          {
            type: "paragraph",
            content: "Output (after 2 seconds)"
          },
          {
            type: "output",
            content: "Finished"
          },
          {
            type: "paragraph",
            content: "Notice that no extra code is needed to wait."
          },
          {
            type: "paragraph",
            content: "The Promise system automatically handles it."
          }
        ]
      },
      {
        heading: "Nested Promises vs Chained Promises",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `login()
.then(user => {
    getProfile(user.id)
    .then(profile => {
        console.log(profile);
    });
});`
          },
          {
            type: "paragraph",
            content: "This creates nested Promise code."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `login()
.then(user => {
    return getProfile(user.id);
})
.then(profile => {
    console.log(profile);
});`
          },
          {
            type: "paragraph",
            content: "Always return the Promise instead of nesting it."
          },
          {
            type: "paragraph",
            content: "This is much easier to read and debug."
          }
        ]
      },
      {
        heading: "Promise Resolution",
        blocks: [
          {
            type: "paragraph",
            content: "A Promise can resolve with another Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise(resolve => {
    resolve(
        Promise.resolve("Hello")
    );
});
promise.then(console.log);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Hello"
          },
          {
            type: "paragraph",
            content: "JavaScript automatically unwraps nested Promises."
          },
          {
            type: "paragraph",
            content: "You don't get:"
          },
          {
            type: "output",
            content: "Promise { Promise { \"Hello\" } }"
          },
          {
            type: "paragraph",
            content: "Instead, the outer Promise waits until the inner Promise finishes."
          }
        ]
      },
      {
        heading: "Multiple catch() Blocks",
        blocks: [
          {
            type: "paragraph",
            content: "You are not limited to a single `.catch()`."
          },
          {
            type: "code",
            language: "javascript",
            content: `stepOne()
.catch(error => {
    console.log("Recovered");
    return defaultValue;
})
.then(result => {
    return stepTwo(result);
})
.catch(error => {
    console.log("Step Two Failed");
});`
          },
          {
            type: "paragraph",
            content: "Each catch only handles errors that occur before it in the chain."
          }
        ]
      },
      {
        heading: "Error Bubbling",
        blocks: [
          {
            type: "paragraph",
            content: "Errors travel downward until a `.catch()` handles them."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve()
.then(() => {
    throw new Error("Error A");
})
.then(() => {
    console.log("Skipped");
})
.then(() => {
    console.log("Skipped Again");
})
.catch(error => {
    console.log(error.message);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Error A"
          },
          {
            type: "paragraph",
            content: "Every remaining `.then()` is skipped."
          }
        ]
      },
      {
        heading: "Recovering From Errors",
        blocks: [
          {
            type: "paragraph",
            content: "A `.catch()` can recover from an error by returning another value."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.reject("Database Offline")
.catch(error => {
    console.log(error);
    return [];
})
.then(users => {
    console.log(users);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Database Offline",
              "[]"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of terminating the chain, execution continues."
          }
        ]
      },
      {
        heading: "Promise Combinators",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes one Promise isn't enough."
          },
          {
            type: "paragraph",
            content: "You may need to execute several asynchronous operations together."
          },
          {
            type: "paragraph",
            content: "JavaScript provides several built-in combinators."
          }
        ]
      },
      {
        heading: "Promise.all()",
        blocks: [
          {
            type: "paragraph",
            content: "`Promise.all()` waits until **every Promise succeeds**."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.all([
    promise1,
    promise2,
    promise3
]);`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Payments");
Promise.all([p1, p2, p3])
.then(results => {
    console.log(results);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "[",
              "  \"User\",",
              "  \"Orders\",",
              "  \"Payments\"",
              "]"
            ]
          }
        ]
      },
      {
        heading: "When Should You Use Promise.all()?",
        blocks: [
          {
            type: "paragraph",
            content: "Common backend examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Load user and permissions simultaneously.",
              "Read multiple files.",
              "Fetch multiple APIs.",
              "Query multiple database tables.",
              "Download several resources."
            ]
          },
          {
            type: "paragraph",
            content: "Running them in parallel is much faster than waiting one after another."
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "output",
            content: [
              "2 sec",
              "+",
              "2 sec",
              "+",
              "2 sec",
              "=",
              "6 seconds"
            ]
          },
          {
            type: "paragraph",
            content: "they execute together."
          },
          {
            type: "output",
            content: "2 seconds total"
          }
        ]
      },
      {
        heading: "If One Promise Fails",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `Promise.all([
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3)
])
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Error"
          },
          {
            type: "paragraph",
            content: "As soon as one Promise rejects, the entire `Promise.all()` rejects."
          },
          {
            type: "paragraph",
            content: "This behavior is often called fail-fast."
          }
        ]
      },
      {
        heading: "Promise.allSettled()",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes you don't want one failure to stop everything."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "paragraph",
            content: "Uploading five images."
          },
          {
            type: "paragraph",
            content: "Even if one upload fails, you still want information about the remaining uploads."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.allSettled([
    Promise.resolve("Image 1"),
    Promise.reject("Image 2"),
    Promise.resolve("Image 3")
])
.then(results => {
    console.log(results);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "[",
              " { status: \"fulfilled\", value: \"Image 1\" },",
              " { status: \"rejected\", reason: \"Image 2\" },",
              " { status: \"fulfilled\", value: \"Image 3\" }",
              "]"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike `Promise.all()`, nothing fails immediately."
          },
          {
            type: "paragraph",
            content: "Every Promise finishes first."
          }
        ]
      },
      {
        heading: "Promise.race()",
        blocks: [
          {
            type: "paragraph",
            content: "`Promise.race()` returns the result of whichever Promise settles first."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fast = new Promise(resolve => {
    setTimeout(() => {
        resolve("Fast");
    },1000);
});
const slow = new Promise(resolve => {
    setTimeout(() => {
        resolve("Slow");
    },3000);
});
Promise.race([fast, slow])
.then(console.log);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Fast"
          }
        ]
      },
      {
        heading: "Real Uses",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Request timeout",
              "Fastest server wins",
              "Multiple mirrors",
              "CDN fallback"
            ]
          },
          {
            type: "paragraph",
            content: "Example timeout:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.race([
    fetchData(),
    timeoutPromise()
]);`
          },
          {
            type: "paragraph",
            content: "Whichever finishes first determines the result."
          }
        ]
      },
      {
        heading: "Promise.any()",
        blocks: [
          {
            type: "paragraph",
            content: "`Promise.any()` waits until the **first successful Promise**."
          },
          {
            type: "paragraph",
            content: "Rejected Promises are ignored unless every Promise fails."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.any([
    Promise.reject("A"),
    Promise.reject("B"),
    Promise.resolve("Success")
])
.then(console.log);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Success"
          },
          {
            type: "paragraph",
            content: "If all Promises reject, an `AggregateError` is thrown."
          }
        ]
      },
      {
        heading: "Promise Combinator Comparison",
        blocks: [
          {
            type: "table",
            headers: ["Method", "Success Condition", "Failure Condition", "Returns"],
            rows: [
              ["Promise.all()", "All succeed", "Any rejects", "Array of values"],
              ["Promise.allSettled()", "All finish", "Never fails early", "Status objects"],
              ["Promise.race()", "First settles", "First rejection if it happens first", "First settled value/reason"],
              ["Promise.any()", "First fulfilled", "All reject", "First successful value"]
            ]
          }
        ]
      },
      {
        heading: "Creating Delays Using Promises",
        blocks: [
          {
            type: "paragraph",
            content: "A common utility:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "javascript",
            content: `sleep(3000)
.then(() => {
    console.log("Three seconds later");
});`
          },
          {
            type: "paragraph",
            content: "This pattern is widely used in backend applications."
          }
        ]
      },
      {
        heading: "Promise-Based File Reading",
        blocks: [
          {
            type: "paragraph",
            content: "Modern Node.js recommends Promise APIs."
          },
          {
            type: "code",
            language: "javascript",
            content: `import { readFile } from "fs/promises";
readFile("data.txt", "utf8")
.then(data => {
    console.log(data);
})
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "This is much cleaner than callback-based APIs."
          }
        ]
      },
      {
        heading: "Promise-Based Database Query",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `connectDatabase()
.then(db => {
    return db.query("SELECT * FROM users");
})
.then(users => {
    console.log(users);
})
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "This style is common in Express, NestJS, Fastify, Prisma, Sequelize, and many other backend frameworks."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Forgetting to Return"
          },
          {
            type: "paragraph",
            content: "Incorrect"
          },
          {
            type: "code",
            language: "javascript",
            content: `login()
.then(user => {
    getProfile(user.id);
})
.then(profile => {
    console.log(profile);
});`
          },
          {
            type: "paragraph",
            content: "`profile` will be `undefined`."
          },
          {
            type: "paragraph",
            content: "Correct"
          },
          {
            type: "code",
            language: "javascript",
            content: `login()
.then(user => {
    return getProfile(user.id);
});`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Forgetting catch()"
          },
          {
            type: "paragraph",
            content: "Unhandled Promise rejections can terminate your application or produce warnings."
          },
          {
            type: "paragraph",
            content: "Always handle errors."
          },
          {
            type: "code",
            language: "javascript",
            content: `doSomething()
.catch(console.error);`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Mixing Callbacks and Promises"
          },
          {
            type: "paragraph",
            content: "Avoid code like:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile(file, (err, data) => {
    Promise.resolve(data)
    .then(...);
});`
          },
          {
            type: "paragraph",
            content: "Instead, use the Promise-based API directly."
          },
          {
            type: "code",
            language: "javascript",
            content: `import { readFile } from "fs/promises";`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Creating Unnecessary Promises"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `return new Promise(resolve => {
    resolve(value);
});`
          },
          {
            type: "paragraph",
            content: "Better"
          },
          {
            type: "code",
            language: "javascript",
            content: `return Promise.resolve(value);`
          },
          {
            type: "paragraph",
            content: "Or simply:"
          },
          {
            type: "code",
            language: "javascript",
            content: `return value;`
          },
          {
            type: "paragraph",
            content: "inside a `.then()` callback."
          }
        ]
      },

      {
        heading: "Promises and the Event Loop",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding Promises becomes much easier once you know how they interact with JavaScript's Event Loop."
          },
          {
            type: "paragraph",
            content: "Many beginners believe that Promises execute immediately after `resolve()` is called. That's not exactly true."
          },
          {
            type: "paragraph",
            content: "Instead, Promise callbacks (`.then()`, `.catch()`, `.finally()`) are placed into a special queue called the Microtask Queue."
          },
          {
            type: "paragraph",
            content: "The Event Loop executes them after the current synchronous code finishes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

Promise.resolve()
.then(() => {
    console.log("Promise");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Promise"
            ]
          },
          {
            type: "paragraph",
            content: "Even though the Promise is already resolved, its callback executes later."
          },
          {
            type: "paragraph",
            content: "This behavior ensures predictable execution."
          }
        ]
      },
      {
        heading: "Synchronous Code vs Promise Execution",
        blocks: [
          {
            type: "paragraph",
            content: "Execution order:"
          },
          {
            type: "code",
            language: "text",
            content: `Call Stack
    │
    ▼
console.log("Start")
    │
    ▼
Promise Created
    │
    ▼
console.log("End")
    │
    ▼
Call Stack Empty
    │
    ▼
Microtask Queue Executes
    │
    ▼
.then()`
          },
          {
            type: "paragraph",
            content: "This explains why Promise callbacks never interrupt currently executing synchronous code."
          }
        ]
      },
      {
        heading: "Promise Microtasks",
        blocks: [
          {
            type: "paragraph",
            content: "Promise callbacks belong to the Microtask Queue."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`.then()`",
              "`.catch()`",
              "`.finally()`",
              "`queueMicrotask()`"
            ]
          },
          {
            type: "paragraph",
            content: "Microtasks always execute before the Event Loop processes the next macrotask."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(1);

setTimeout(() => {
    console.log(2);
},0);

Promise.resolve()
.then(() => {
    console.log(3);
});

console.log(4);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "1",
              "4",
              "3",
              "2"
            ]
          },
          {
            type: "paragraph",
            content: "Explanation:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Synchronous code executes first.",
              "Promise callback enters the Microtask Queue.",
              "`setTimeout()` enters the Macrotask Queue.",
              "Microtasks execute before macrotasks."
            ]
          },
          {
            type: "paragraph",
            content: "We'll explore this behavior in much greater detail in the Event Loop, Microtasks, and Macrotasks lessons."
          }
        ]
      },
      {
        heading: "Promise vs Callback",
        blocks: [
          {
            type: "paragraph",
            content: "Consider file reading."
          },
          {
            type: "paragraph",
            content: "Callback approach:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("data.txt", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(data);
});`
          },
          {
            type: "paragraph",
            content: "Promise approach:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { readFile } from "fs/promises";

readFile("data.txt", "utf8")
.then(data => {
    console.log(data);
})
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "The Promise version separates success and failure handling more clearly and scales better as applications grow."
          }
        ]
      },
      {
        heading: "Promise vs async/await",
        blocks: [
          {
            type: "paragraph",
            content: "Promises and `async/await` are not different asynchronous systems."
          },
          {
            type: "paragraph",
            content: "async/await is built on top of Promises."
          },
          {
            type: "paragraph",
            content: "Promise version:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetchUsers()
.then(users => {
    console.log(users);
})
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "Async/Await version:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
    const users = await fetchUsers();
    console.log(users);
}
catch(error) {
    console.error(error);
}`
          },
          {
            type: "paragraph",
            content: "Both ultimately use Promises."
          },
          {
            type: "paragraph",
            content: "The `async/await` syntax simply makes asynchronous code look more like synchronous code."
          }
        ]
      },
      {
        heading: "When Should You Use Promises?",
        blocks: [
          {
            type: "paragraph",
            content: "Promises are ideal whenever an operation:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Takes time to complete.",
              "May succeed or fail.",
              "Should not block the application.",
              "Needs clean error handling.",
              "May need chaining with other asynchronous tasks."
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
              "Reading files",
              "Writing files",
              "Database queries",
              "API requests",
              "Authentication",
              "Image processing",
              "Sending emails",
              "Payment processing",
              "Cloud storage operations"
            ]
          }
        ]
      },
      {
        heading: "Practical Backend Example",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose an API endpoint needs to perform several tasks."
          },
          {
            type: "code",
            language: "text",
            content: `Receive Request
    │
    ▼
Validate User
    │
    ▼
Read Database
    │
    ▼
Generate Invoice
    │
    ▼
Save Invoice
    │
    ▼
Send Response`
          },
          {
            type: "paragraph",
            content: "Each step is asynchronous."
          },
          {
            type: "paragraph",
            content: "Using Promises:"
          },
          {
            type: "code",
            language: "javascript",
            content: `validateUser()
.then(user => {
    return fetchOrders(user.id);
})
.then(orders => {
    return generateInvoice(orders);
})
.then(invoice => {
    return saveInvoice(invoice);
})
.then(() => {
    console.log("Completed");
})
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "Each operation waits for the previous one while keeping the code flat and readable."
          }
        ]
      },
      {
        heading: "Performance Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Promises improve code organization, but they are not automatically faster than callbacks."
          },
          {
            type: "paragraph",
            content: "The actual asynchronous work—such as reading files or making network requests—takes the same amount of time."
          },
          {
            type: "paragraph",
            content: "Promises introduce a small amount of overhead because they create Promise objects and schedule microtasks, but this overhead is negligible for most applications."
          },
          {
            type: "paragraph",
            content: "Performance improvements usually come from:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Running independent tasks in parallel with `Promise.all()`.",
              "Avoiding unnecessary sequential operations.",
              "Reducing blocking synchronous code.",
              "Using asynchronous APIs effectively."
            ]
          }
        ]
      },
      {
        heading: "Avoid Sequential Promises When Possible",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose two operations are independent."
          },
          {
            type: "paragraph",
            content: "Less efficient:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await getUser();
const posts = await getPosts();`
          },
          {
            type: "paragraph",
            content: "If they don't depend on each other, they can run simultaneously."
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
]);`
          },
          {
            type: "paragraph",
            content: "Both requests start immediately, reducing the total execution time."
          },
          {
            type: "paragraph",
            content: "This pattern is heavily used in production backend applications."
          }
        ]
      },
      {
        heading: "Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Always Return Promises"
          },
          {
            type: "paragraph",
            content: "If you start an asynchronous operation inside `.then()`, return it."
          },
          {
            type: "code",
            language: "javascript",
            content: `return fetchUser();`
          },
          {
            type: "paragraph",
            content: "Avoid hiding asynchronous work inside callbacks without returning the resulting Promise."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Handle Errors"
          },
          {
            type: "paragraph",
            content: "Never ignore rejected Promises."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fetchData()
.catch(console.error);`
          },
          {
            type: "paragraph",
            content: "Ignoring errors can lead to unhandled Promise rejections and unstable applications."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Prefer Promise-Based APIs"
          },
          {
            type: "paragraph",
            content: "Modern Node.js provides Promise-based APIs for many built-in modules."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import fs from "fs/promises";`
          },
          {
            type: "code",
            language: "javascript",
            content: `import dns from "dns/promises";`
          },
          {
            type: "code",
            language: "javascript",
            content: `import timers from "timers/promises";`
          },
          {
            type: "paragraph",
            content: "These APIs integrate naturally with Promise chaining and `async/await`."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Keep Chains Readable"
          },
          {
            type: "paragraph",
            content: "Avoid creating very long Promise chains."
          },
          {
            type: "paragraph",
            content: "Instead, divide complex logic into smaller functions."
          },
          {
            type: "code",
            language: "javascript",
            content: `authenticate()
.then(loadProfile)
.then(loadOrders)
.then(generateInvoice)
.catch(handleError);`
          },
          {
            type: "paragraph",
            content: "Each function performs a single responsibility, making the code easier to test and maintain."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Use async/await for Complex Logic"
          },
          {
            type: "paragraph",
            content: "While Promises are powerful, long chains can still become difficult to read."
          },
          {
            type: "paragraph",
            content: "For multi-step workflows, `async/await` often provides clearer code."
          },
          {
            type: "paragraph",
            content: "We'll explore it thoroughly in the next lesson."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Forgetting to Return a Promise"
          },
          {
            type: "code",
            language: "javascript",
            content: `getUser()
.then(user => {
    fetchOrders(user.id);
})
.then(orders => {
    console.log(orders);
});`
          },
          {
            type: "paragraph",
            content: "Since `fetchOrders()` isn't returned, the next `.then()` receives `undefined`."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `getUser()
.then(user => {
    return fetchOrders(user.id);
});`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Using Promises for Synchronous Code"
          },
          {
            type: "paragraph",
            content: "Not every function needs a Promise."
          },
          {
            type: "paragraph",
            content: "Bad:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function add(a, b) {
    return Promise.resolve(a + b);
}`
          },
          {
            type: "paragraph",
            content: "Better:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function add(a, b) {
    return a + b;
}`
          },
          {
            type: "paragraph",
            content: "Reserve Promises for asynchronous operations."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Forgetting that Promise Creation Starts Immediately"
          },
          {
            type: "paragraph",
            content: "Many developers think Promises start when `.then()` is called."
          },
          {
            type: "paragraph",
            content: "Actually:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = new Promise(resolve => {
    console.log("Started");
    resolve();
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Started"
          },
          {
            type: "paragraph",
            content: "The executor runs immediately when the Promise is created, not when it is consumed."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Confusing resolve() with Return"
          },
          {
            type: "paragraph",
            content: "Inside the executor:"
          },
          {
            type: "code",
            language: "javascript",
            content: `new Promise((resolve) => {
    return "Hello";
});`
          },
          {
            type: "paragraph",
            content: "This does not resolve the Promise."
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `new Promise((resolve) => {
    resolve("Hello");
});`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Using Promise.all() When Failures Are Acceptable"
          },
          {
            type: "paragraph",
            content: "If you're processing multiple independent tasks and one failure shouldn't stop the others, prefer:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.allSettled(...)`
          },
          {
            type: "paragraph",
            content: "instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.all(...)`
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
                question: "Why were Promises introduced?",
                answer: "Promises were introduced to solve the readability, maintainability, and error-handling problems associated with deeply nested callback-based asynchronous code."
              },
              {
                question: "Can a Promise change its state after being fulfilled?",
                answer: "No. Once a Promise becomes fulfilled or rejected, its state is permanent."
              },
              {
                question: "What does `.then()` return?",
                answer: "Every call to `.then()` returns a new Promise, enabling Promise chaining."
              },
              {
                question: "What happens if you throw an error inside `.then()`?",
                answer: "The returned Promise is automatically rejected, and the error propagates to the nearest `.catch()`."
              },
              {
                question: "What is the difference between `Promise.all()` and `Promise.allSettled()`?",
                answer: "`Promise.all()` fails immediately if any Promise rejects. `Promise.allSettled()` waits for every Promise to finish and returns the outcome of each one."
              },
              {
                question: "Are async/await and Promises different?",
                answer: "No. `async/await` is syntactic sugar built on top of Promises."
              },
              {
                question: "Where are Promise callbacks executed?",
                answer: "Promise callbacks are executed from the Microtask Queue, which has higher priority than the Macrotask Queue in the Event Loop."
              }
            ]
          }
        ]
      },
      {
        heading: "Key Takeaways",
        blocks: [
          {
            type: "paragraph",
            content: "By now, you should understand that:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A Promise represents the eventual result of an asynchronous operation.",
              "Every Promise has three states: Pending, Fulfilled, and Rejected.",
              "`resolve()` fulfills a Promise, while `reject()` rejects it.",
              "`.then()` handles successful results, `.catch()` handles errors, and `.finally()` performs cleanup.",
              "Promise chaining creates clean, readable asynchronous workflows without deep nesting.",
              "Returning Promises from `.then()` enables automatic sequencing and error propagation.",
              "`Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()` help coordinate multiple asynchronous tasks.",
              "Promise callbacks execute as microtasks, before macrotasks like `setTimeout()`.",
              "Promises are the foundation of modern asynchronous programming, and `async/await` is built directly on top of them.",
              "Understanding Promises thoroughly is essential before learning `async/await`, the Event Loop, and advanced Node.js concurrency patterns."
            ]
          },
          {
            type: "paragraph",
            content: "In the next lesson, we'll build on this knowledge by exploring `async/await`, which makes Promise-based asynchronous code even cleaner and easier to write."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most common misconceptions among Node.js beginners is that Promises execute asynchronously by themselves. In reality, a Promise's executor runs synchronously when the Promise is created. The asynchronous part is how the result (fulfillment or rejection) is delivered—via microtasks that wait until the current synchronous execution completes. This distinction is crucial because it explains why code like `Promise.resolve().then(() => console.log('Hello'))` prints after all synchronous code, even when the Promise is already resolved. Understanding this subtle behavior is the first step toward mastering the Event Loop, microtasks, macrotasks, and the scheduling of asynchronous operations in Node.js. As you progress through the Node.js course, this mental model will help you reason about execution order, avoid race conditions, and write more predictable asynchronous applications."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that Promises are objects representing the eventual result of asynchronous operations, with three states: Pending, Fulfilled, and Rejected. You explored how `resolve()` and `reject()` control a Promise's outcome, how `.then()`, `.catch()`, and `.finally()` handle results and errors, and how Promise chaining flattens nested callbacks into clean, readable sequences."
          },
          {
            type: "paragraph",
            content: "You also learned how Promises interact with the Event Loop through the Microtask Queue, why Promise callbacks execute after synchronous code, and how `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()` coordinate multiple asynchronous operations. You explored practical backend use cases, performance considerations, and common mistakes such as forgetting to return Promises or confusing `resolve()` with `return`."
          },
          {
            type: "paragraph",
            content: "With this foundation, you're now ready to explore `async/await` in the next lesson, where you'll see how modern Node.js applications handle asynchronous code even more elegantly while building on everything you've learned about Promises."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : async/await
============================= */
    "nodejs-async-await": {
    title: "async/await",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Why async/await Was Introduced",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine reading code like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `loginUser()
    .then(user => getProfile(user.id))
    .then(profile => getOrders(profile.id))
    .then(orders => processOrders(orders))
    .catch(error => console.error(error));`
          },
          {
            type: "paragraph",
            content: "This is much better than callback hell, but long Promise chains can still become difficult to follow."
          },
          {
            type: "paragraph",
            content: "With async/await, the same logic becomes:"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
    const user = await loginUser();
    const profile = await getProfile(user.id);
    const orders = await getOrders(profile.id);
    processOrders(orders);
} catch (error) {
    console.error(error);
}`
          },
          {
            type: "paragraph",
            content: "Notice how the code reads from top to bottom just like synchronous code."
          },
          {
            type: "paragraph",
            content: "This is exactly why async/await became so popular."
          }
        ]
      },
      {
        heading: "What is async?",
        blocks: [
          {
            type: "paragraph",
            content: "The async keyword tells JavaScript that a function is asynchronous."
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
            content: "Although this function appears to return a string, it actually returns a Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `greet().then(console.log);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Hello"
          },
          {
            type: "paragraph",
            content: "You can verify it:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log(greet());`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Promise { 'Hello' }"
          },
          {
            type: "paragraph",
            content: "Even if you simply return a value, JavaScript automatically wraps it inside a Promise."
          },
          {
            type: "paragraph",
            content: "Internally, these are almost equivalent:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function greet() {
    return "Hello";
}`
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
        heading: "Rules of async Functions",
        blocks: [
          {
            type: "paragraph",
            content: "An async function:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Always returns a Promise.",
              "Can use the `await` keyword.",
              "Can return any value.",
              "Can throw errors.",
              "Can be awaited by another async function."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function square(num) {
    return num * num;
}

square(5).then(console.log);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "25"
          }
        ]
      },
      {
        heading: "What is await?",
        blocks: [
          {
            type: "paragraph",
            content: "The await keyword pauses an async function until a Promise settles."
          },
          {
            type: "paragraph",
            content: "Syntax"
          },
          {
            type: "code",
            language: "javascript",
            content: `const result = await promise;`
          },
          {
            type: "paragraph",
            content: "When JavaScript reaches an await statement:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "It pauses only the current async function.",
              "The Node.js event loop continues running.",
              "Other tasks continue executing.",
              "When the Promise resolves, execution resumes."
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `function fetchData() {
    return Promise.resolve("Data Loaded");
}

async function main() {
    const data = await fetchData();
    console.log(data);
}

main();`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Data Loaded"
          }
        ]
      },
      {
        heading: "await Only Works Inside async Functions",
        blocks: [
          {
            type: "paragraph",
            content: "This is invalid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function main() {
    const data = await fetchData();
}`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "SyntaxError"
          },
          {
            type: "paragraph",
            content: "Correct:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function main() {
    const data = await fetchData();
}`
          },
          {
            type: "paragraph",
            content: "The only exception is top-level await, which works inside ES Modules and will be covered later in the course."
          }
        ]
      },
      {
        heading: "A Simple Example",
        blocks: [
          {
            type: "paragraph",
            content: "Promise version"
          },
          {
            type: "code",
            language: "javascript",
            content: `function getMessage() {
    return Promise.resolve("Welcome");
}

getMessage()
    .then(message => {
        console.log(message);
    });`
          },
          {
            type: "paragraph",
            content: "Using async/await"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function showMessage() {
    const message = await getMessage();
    console.log(message);
}

showMessage();`
          },
          {
            type: "paragraph",
            content: "Both produce"
          },
          {
            type: "output",
            content: "Welcome"
          },
          {
            type: "paragraph",
            content: "The async/await version is usually easier to read."
          }
        ]
      },
      {
        heading: "Awaiting Real Asynchronous Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Consider reading a file."
          },
          {
            type: "code",
            language: "javascript",
            content: `import { readFile } from "fs/promises";

async function readConfig() {
    const data = await readFile("config.json", "utf8");
    console.log(data);
}

readConfig();`
          },
          {
            type: "paragraph",
            content: "Here,"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Node starts reading the file.",
              "The function pauses.",
              "The event loop continues.",
              "Once the file is read, execution resumes."
            ]
          },
          {
            type: "paragraph",
            content: "This is non-blocking, even though the code looks synchronous."
          }
        ]
      },
      {
        heading: "Execution Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function demo() {
    console.log("Start");
    await Promise.resolve();
    console.log("End");
}

demo();

console.log("Finished");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "Finished",
              "End"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because `await` pauses the async function and schedules the remaining code to execute after the current synchronous code completes."
          },
          {
            type: "paragraph",
            content: "This behavior is closely related to the Event Loop and Microtasks, which you'll study in upcoming lessons."
          }
        ]
      },
      {
        heading: "Await Doesn't Block the Entire Program",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners think await freezes Node.js."
          },
          {
            type: "paragraph",
            content: "It doesn't."
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function task() {
    console.log("Task started");
    await new Promise(resolve =>
        setTimeout(resolve, 3000)
    );
    console.log("Task completed");
}

task();

console.log("Application continues...");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Task started",
              "Application continues...",
              "Task completed"
            ]
          },
          {
            type: "paragraph",
            content: "Only the async function waits."
          },
          {
            type: "paragraph",
            content: "The Node.js process continues executing other work."
          }
        ]
      },
      {
        heading: "Returning Values",
        blocks: [
          {
            type: "paragraph",
            content: "You can return values normally."
          },
          {
            type: "code",
            language: "javascript",
            content: `async function add(a, b) {
    return a + b;
}

const result = await add(4, 6);
console.log(result);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "10"
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "output",
            content: [
              "return 10",
              "becomes",
              "Promise.resolve(10)"
            ]
          }
        ]
      },
      {
        heading: "Returning Promises",
        blocks: [
          {
            type: "paragraph",
            content: "You can also return another Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `async function getUser() {
    return fetchUser();
}`
          },
          {
            type: "paragraph",
            content: "This is perfectly valid."
          },
          {
            type: "paragraph",
            content: "JavaScript automatically waits for the returned Promise."
          }
        ]
      },
      {
        heading: "Error Handling with try...catch",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of async/await is cleaner error handling."
          },
          {
            type: "paragraph",
            content: "Without async/await"
          },
          {
            type: "code",
            language: "javascript",
            content: `login()
    .then(user => {
        return loadProfile(user.id);
    })
    .catch(error => {
        console.error(error);
    });`
          },
          {
            type: "paragraph",
            content: "With async/await"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function start() {
    try {
        const user = await login();
        const profile = await loadProfile(user.id);
        console.log(profile);
    } catch (error) {
        console.error(error.message);
    }
}`
          },
          {
            type: "paragraph",
            content: "The code looks almost identical to synchronous error handling."
          }
        ]
      },
      {
        heading: "Throwing Errors",
        blocks: [
          {
            type: "paragraph",
            content: "Errors inside async functions automatically reject the returned Promise."
          },
          {
            type: "code",
            language: "javascript",
            content: `async function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}`
          },
          {
            type: "paragraph",
            content: "Calling"
          },
          {
            type: "code",
            language: "javascript",
            content: `divide(10, 0)
    .catch(console.error);`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
    await divide(10, 0);
}
catch (error) {
    console.log(error.message);
}`
          },
          {
            type: "paragraph",
            content: "Both handle the same error."
          }
        ]
      },
      {
        heading: "Sequential Execution",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes one task depends on another."
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await getUser();
const orders = await getOrders(user.id);
const invoice = await generateInvoice(orders);`
          },
          {
            type: "paragraph",
            content: "Execution order"
          },
          {
            type: "code",
            language: "text",
            content: `getUser()
    │
    ▼
getOrders()
    │
    ▼
generateInvoice()`
          },
          {
            type: "paragraph",
            content: "Each step waits for the previous one."
          },
          {
            type: "paragraph",
            content: "This is called sequential execution."
          }
        ]
      },
      {
        heading: "Parallel Execution",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes tasks are independent."
          },
          {
            type: "paragraph",
            content: "Instead of this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const users = await getUsers();
const products = await getProducts();
const orders = await getOrders();`
          },
          {
            type: "paragraph",
            content: "Use"
          },
          {
            type: "code",
            language: "javascript",
            content: `const [users, products, orders] =
await Promise.all([
    getUsers(),
    getProducts(),
    getOrders()
]);`
          },
          {
            type: "paragraph",
            content: "All three requests begin immediately."
          },
          {
            type: "paragraph",
            content: "This is much faster."
          }
        ]
      },
      {
        heading: "Sequential vs Parallel",
        blocks: [
          {
            type: "paragraph",
            content: "Sequential"
          },
          {
            type: "code",
            language: "text",
            content: `Task A
    │
    ▼
Task B
    │
    ▼
Task C`
          },
          {
            type: "paragraph",
            content: "Total Time"
          },
          {
            type: "output",
            content: "3 seconds"
          },
          {
            type: "paragraph",
            content: "Parallel"
          },
          {
            type: "code",
            language: "text",
            content: `Task A
Task B
Task C`
          },
          {
            type: "paragraph",
            content: "Total Time"
          },
          {
            type: "output",
            content: "1 second"
          },
          {
            type: "paragraph",
            content: "if all three tasks take one second each."
          },
          {
            type: "paragraph",
            content: "Professional backend developers always ask:"
          },
          {
            type: "quote",
            content: "Do these tasks depend on each other?"
          },
          {
            type: "paragraph",
            content: "If not, run them in parallel."
          }
        ]
      },
      {
        heading: "Await Inside Loops",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes beginners write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `for (const file of files) {
    await processFile(file);
}`
          },
          {
            type: "paragraph",
            content: "This processes files one by one."
          },
          {
            type: "paragraph",
            content: "Sometimes that's correct."
          },
          {
            type: "paragraph",
            content: "Sometimes it's slow."
          },
          {
            type: "paragraph",
            content: "If every file is independent:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await Promise.all(
    files.map(processFile)
);`
          },
          {
            type: "paragraph",
            content: "Now every file is processed concurrently."
          },
          {
            type: "paragraph",
            content: "Choose the approach based on your application's requirements."
          }
        ]
      },
      {
        heading: "Async Functions Inside Array Methods",
        blocks: [
          {
            type: "paragraph",
            content: "A common mistake:"
          },
          {
            type: "code",
            language: "javascript",
            content: `files.forEach(async file => {
    await processFile(file);
});`
          },
          {
            type: "paragraph",
            content: "The outer function doesn't wait for these operations to finish."
          },
          {
            type: "paragraph",
            content: "Instead, use:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await Promise.all(
    files.map(processFile)
);`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `for (const file of files) {
    await processFile(file);
}`
          },
          {
            type: "paragraph",
            content: "Avoid `forEach()` for asynchronous work."
          }
        ]
      },
      {
        heading: "Mixing await with then()",
        blocks: [
          {
            type: "paragraph",
            content: "This is unnecessary:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data =
await fetchData().then(result => result);`
          },
          {
            type: "paragraph",
            content: "Simply write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = await fetchData();`
          },
          {
            type: "paragraph",
            content: "Choose one style and keep your code consistent."
          }
        ]
      },
      {
        heading: "Forgetting await",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = getUser();
console.log(user.name);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "undefined"
          },
          {
            type: "paragraph",
            content: "because"
          },
          {
            type: "output",
            content: "user"
          },
          {
            type: "paragraph",
            content: "is actually"
          },
          {
            type: "output",
            content: "Promise"
          },
          {
            type: "paragraph",
            content: "Correct"
          },
          {
            type: "code",
            language: "javascript",
            content: `const user = await getUser();
console.log(user.name);`
          }
        ]
      },
      {
        heading: "Forgetting try...catch",
        blocks: [
          {
            type: "paragraph",
            content: "Incorrect"
          },
          {
            type: "code",
            language: "javascript",
            content: `const data = await readFile("missing.txt");`
          },
          {
            type: "paragraph",
            content: "If the file doesn't exist, the Promise rejects."
          },
          {
            type: "paragraph",
            content: "Correct"
          },
          {
            type: "code",
            language: "javascript",
            content: `try {
    const data = await readFile("missing.txt");
}
catch (error) {
    console.error(error.message);
}`
          },
          {
            type: "paragraph",
            content: "Always handle possible failures."
          }
        ]
      },
      {
        heading: "Async Arrow Functions",
        blocks: [
          {
            type: "paragraph",
            content: "Arrow functions can also be async."
          },
          {
            type: "code",
            language: "javascript",
            content: `const fetchUser = async () => {
    return "John";
};`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "javascript",
            content: `const result = await fetchUser();`
          },
          {
            type: "paragraph",
            content: "Very common in Express applications."
          }
        ]
      },
      {
        heading: "Practical Backend Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import { readFile } from "fs/promises";

async function loadConfiguration() {
    try {
        const config =
        await readFile("config.json", "utf8");
        console.log(config);
    }
    catch (error) {
        console.error("Configuration error:", error.message);
    }
}

loadConfiguration();`
          },
          {
            type: "paragraph",
            content: "This style is commonly used in production Node.js applications."
          }
        ]
      },
      {
        heading: "When Should You Use async/await?",
        blocks: [
          {
            type: "paragraph",
            content: "Use async/await whenever you're working with Promise-based APIs such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "File system operations (`fs/promises`)",
              "Database queries",
              "REST API requests",
              "Authentication",
              "Cloud services",
              "Email services",
              "Reading configuration files",
              "Network communication",
              "External SDKs"
            ]
          },
          {
            type: "paragraph",
            content: "In modern Node.js, async/await is the default choice for asynchronous programming."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid these beginner mistakes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Forgetting the `async` keyword.",
              "Using `await` outside an async function.",
              "Forgetting to handle errors.",
              "Mixing `.then()` and `await` unnecessarily.",
              "Using `await` inside `forEach()`.",
              "Sequentially awaiting independent tasks.",
              "Assuming `await` blocks the entire Node.js process.",
              "Forgetting that async functions always return Promises."
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
              "Prefer async/await over long Promise chains for readability.",
              "Use `try...catch` to handle asynchronous errors.",
              "Use `Promise.all()` for independent operations.",
              "Avoid unnecessary sequential awaits.",
              "Don't ignore rejected Promises.",
              "Keep async functions focused on a single responsibility.",
              "Avoid deeply nested async logic by splitting code into smaller functions.",
              "Write clear, descriptive function names (`fetchUser`, `saveOrder`, `loadConfig`) so asynchronous workflows are easy to understand.",
              "Remember that `await` pauses only the current async function, not the Node.js event loop."
            ]
          },
          {
            type: "paragraph",
            content: "By mastering async/await, you'll be able to write asynchronous Node.js code that is cleaner, safer, and much easier to maintain. Since most modern Node.js frameworks and libraries are Promise-based, understanding async/await is an essential skill for building real-world backend applications."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most common mistakes developers make when learning async/await is assuming that marking a function as `async` automatically makes all its code execute asynchronously. This is incorrect. The `async` keyword only ensures that the function returns a Promise. The code inside the function still executes synchronously until it encounters an `await` statement. For example, `async function log() { console.log('Start'); await fetchData(); console.log('End'); }` will still execute `console.log('Start')` immediately. Only the `await` portion schedules the rest of the function for later execution. Understanding this distinction helps you avoid confusion about execution order and write more predictable asynchronous code. Another important insight: `await` is not a magic pause button—it's a scheduling mechanism that yields control back to the event loop until the awaited Promise settles. This is why Node.js remains responsive even when `await` is used, and why millions of concurrent connections can be handled efficiently despite individual functions being paused."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that async/await is syntactic sugar built on top of Promises, allowing asynchronous code to be written in a synchronous style. You explored how the `async` keyword marks a function as asynchronous and always returns a Promise, while `await` pauses execution until a Promise settles."
          },
          {
            type: "paragraph",
            content: "You also learned how async/await simplifies error handling through `try...catch`, how to execute operations sequentially and in parallel using `Promise.all()`, and how to avoid common mistakes such as forgetting `await`, using `await` inside `forEach()`, or mixing Promise chains with async/await unnecessarily."
          },
          {
            type: "paragraph",
            content: "Finally, you explored practical backend examples and best practices for writing clean, maintainable, production-ready asynchronous code. With async/await, you can build Node.js applications that are easier to read, debug, and extend while maintaining the non-blocking performance that makes JavaScript and Node.js powerful for backend development."
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Event Loop
============================= */
    "nodejs-event-loop": {
    title: "Event Loop",
    readingTime: "25 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest questions beginners ask when learning Node.js is:"
          },
          {
            type: "quote",
            content: "If JavaScript is single-threaded, how can Node.js handle thousands of users at the same time?"
          },
          {
            type: "paragraph",
            content: "Or,"
          },
          {
            type: "quote",
            content: "How does `setTimeout()` execute later if JavaScript runs one line at a time?"
          },
          {
            type: "paragraph",
            content: "Or,"
          },
          {
            type: "quote",
            content: "When I read a file or make an API request, why doesn't my application freeze?"
          },
          {
            type: "paragraph",
            content: "The answer to all these questions lies in one of the most important concepts in Node.js:"
          },
          {
            type: "paragraph",
            content: "The Event Loop."
          },
          {
            type: "paragraph",
            content: "The Event Loop is the heart of Node.js. It is responsible for coordinating asynchronous operations, scheduling callbacks, and allowing a single JavaScript thread to handle many concurrent tasks efficiently."
          },
          {
            type: "paragraph",
            content: "Understanding the Event Loop is essential because almost everything you build in Node.js—servers, databases, APIs, file systems, timers, streams, and networking—depends on it."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn how asynchronous code actually executes inside Node.js."
          }
        ]
      },
      {
        heading: "Why Does the Event Loop Exist?",
        blocks: [
          {
            type: "paragraph",
            content: "JavaScript can execute only one piece of JavaScript code at a time."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");
console.log("B");
console.log("C");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "A",
              "B",
              "C"
            ]
          },
          {
            type: "paragraph",
            content: "Every statement runs sequentially."
          },
          {
            type: "paragraph",
            content: "Now imagine a server handling thousands of requests."
          },
          {
            type: "paragraph",
            content: "Suppose reading one file takes 2 seconds."
          },
          {
            type: "paragraph",
            content: "If JavaScript waited for every file operation to complete before moving on, your application would spend most of its time doing nothing."
          },
          {
            type: "code",
            language: "text",
            content: `Read File (2s)
    │
    ▼
Next Request (wait)
    │
    ▼
Read Another File (2s)
    │
    ▼
Next Request`
          },
          {
            type: "paragraph",
            content: "A server built like this would be extremely slow."
          },
          {
            type: "paragraph",
            content: "Instead, Node.js starts the slow operation and immediately continues executing other work."
          },
          {
            type: "paragraph",
            content: "When the operation finishes, the Event Loop executes the callback."
          },
          {
            type: "paragraph",
            content: "This design allows Node.js to handle many concurrent operations without creating one thread per request."
          }
        ]
      },
      {
        heading: "The Big Picture",
        blocks: [
          {
            type: "paragraph",
            content: "The Event Loop works together with several components."
          },
          {
            type: "code",
            language: "text",
            content: `JavaScript Code
        │
        ▼
+----------------------+
|      Call Stack      |
+----------------------+
        │
        ▼
Node.js Runtime APIs
(fs, timers, network, DNS)
        │
        ▼
Completed Operations
        │
        ▼
Callback Queues
        │
        ▼
Event Loop
        │
        ▼
Call Stack Again`
          },
          {
            type: "paragraph",
            content: "Think of the Event Loop as a traffic controller."
          },
          {
            type: "paragraph",
            content: "It continuously checks:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Is JavaScript currently busy?",
              "Has any asynchronous operation finished?",
              "Is there a callback ready to execute?"
            ]
          },
          {
            type: "paragraph",
            content: "If the Call Stack is empty, it schedules the next callback."
          }
        ]
      },
      {
        heading: "The Call Stack",
        blocks: [
          {
            type: "paragraph",
            content: "The Call Stack is where JavaScript executes functions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function greet() {
    console.log("Hello");
}

function start() {
    greet();
}

start();`
          },
          {
            type: "paragraph",
            content: "Execution order"
          },
          {
            type: "code",
            language: "text",
            content: `start()
    │
    ▼
greet()
    │
    ▼
console.log()`
          },
          {
            type: "paragraph",
            content: "As functions finish, they are removed from the stack."
          },
          {
            type: "paragraph",
            content: "Eventually the stack becomes empty."
          },
          {
            type: "paragraph",
            content: "Only when the stack is empty can asynchronous callbacks begin executing."
          }
        ]
      },
      {
        heading: "What Happens During an Asynchronous Operation?",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", () => {
    console.log("File Loaded");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "File Loaded"
            ]
          },
          {
            type: "paragraph",
            content: "Many beginners expect:"
          },
          {
            type: "output",
            content: [
              "Start",
              "File Loaded",
              "End"
            ]
          },
          {
            type: "paragraph",
            content: "But that's not how Node.js works."
          },
          {
            type: "paragraph",
            content: "Let's see what actually happens."
          }
        ]
      },
      {
        heading: "Step 1 — JavaScript Executes",
        blocks: [
          {
            type: "code",
            language: "text",
            content: `Call Stack
    │
    ▼
console.log("Start")`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Start"
          }
        ]
      },
      {
        heading: "Step 2 — readFile Starts",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile(...)`
          },
          {
            type: "paragraph",
            content: "Node.js immediately hands the work to its File System API."
          },
          {
            type: "paragraph",
            content: "JavaScript does not wait."
          },
          {
            type: "paragraph",
            content: "The file reading happens outside the JavaScript thread."
          }
        ]
      },
      {
        heading: "Step 3 — Continue Executing",
        blocks: [
          {
            type: "paragraph",
            content: "The next line executes immediately."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "End"
          }
        ]
      },
      {
        heading: "Step 4 — File Reading Finishes",
        blocks: [
          {
            type: "paragraph",
            content: "After the operating system finishes reading the file,"
          },
          {
            type: "paragraph",
            content: "the callback becomes ready."
          },
          {
            type: "code",
            language: "text",
            content: `Callback Queue
    │
    ▼
readFile callback`
          }
        ]
      },
      {
        heading: "Step 5 — Event Loop Checks",
        blocks: [
          {
            type: "paragraph",
            content: "The Event Loop asks:"
          },
          {
            type: "quote",
            content: "Is the Call Stack empty?"
          },
          {
            type: "paragraph",
            content: "If yes,"
          },
          {
            type: "paragraph",
            content: "the callback moves to the Call Stack."
          },
          {
            type: "code",
            language: "text",
            content: `Call Stack
    │
    ▼
readFile callback`
          },
          {
            type: "paragraph",
            content: "Now,"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("File Loaded");`
          },
          {
            type: "paragraph",
            content: "runs."
          },
          {
            type: "paragraph",
            content: "Final output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "File Loaded"
            ]
          },
          {
            type: "paragraph",
            content: "This entire process happens automatically."
          }
        ]
      },
      {
        heading: "Node APIs",
        blocks: [
          {
            type: "paragraph",
            content: "When JavaScript encounters asynchronous operations,"
          },
          {
            type: "paragraph",
            content: "Node.js handles them using runtime APIs."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "File System (`fs`)",
              "Network requests",
              "HTTP server",
              "DNS lookups",
              "Timers",
              "Child processes",
              "Streams",
              "Compression",
              "Cryptography"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of blocking JavaScript,"
          },
          {
            type: "paragraph",
            content: "these APIs perform the work in the background."
          },
          {
            type: "paragraph",
            content: "When finished,"
          },
          {
            type: "paragraph",
            content: "they notify the Event Loop."
          }
        ]
      },
      {
        heading: "The Callback Queue",
        blocks: [
          {
            type: "paragraph",
            content: "Finished asynchronous operations place their callbacks into queues."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "code",
            language: "text",
            content: `setTimeout()
    │
    ▼
Timer Queue`
          },
          {
            type: "code",
            language: "text",
            content: `readFile()
    │
    ▼
I/O Queue`
          },
          {
            type: "code",
            language: "text",
            content: `HTTP Request
    │
    ▼
Network Queue`
          },
          {
            type: "paragraph",
            content: "These callbacks do not execute immediately."
          },
          {
            type: "paragraph",
            content: "They must wait until:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "the Call Stack is empty, and",
              "the Event Loop schedules them."
            ]
          }
        ]
      },
      {
        heading: "The Event Loop's Job",
        blocks: [
          {
            type: "paragraph",
            content: "The Event Loop continuously repeats this cycle:"
          },
          {
            type: "code",
            language: "text",
            content: `Is the Call Stack empty?
    │
    ▼
Yes
    │
    ▼
Is any callback waiting?
    │
    ▼
Yes
    │
    ▼
Move callback to Call Stack
    │
    ▼
Execute callback
    │
    ▼
Repeat`
          },
          {
            type: "paragraph",
            content: "This loop runs continuously while your application is running."
          },
          {
            type: "paragraph",
            content: "Hence the name:"
          },
          {
            type: "paragraph",
            content: "Event Loop."
          }
        ]
      },
      {
        heading: "Timers Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Many beginners believe"
          },
          {
            type: "output",
            content: "0 milliseconds"
          },
          {
            type: "paragraph",
            content: "means"
          },
          {
            type: "output",
            content: "Run immediately."
          },
          {
            type: "paragraph",
            content: "It doesn't."
          },
          {
            type: "paragraph",
            content: "It means"
          },
          {
            type: "quote",
            content: "Run after at least 0 milliseconds **when the Event Loop gets a chance**."
          },
          {
            type: "paragraph",
            content: "The callback still waits until synchronous code finishes."
          }
        ]
      },
      {
        heading: "Another Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "A",
              "C",
              "B"
            ]
          },
          {
            type: "paragraph",
            content: "Timeline"
          },
          {
            type: "code",
            language: "text",
            content: `A
    │
    ▼
Timer Starts
    │
    ▼
C
    │
    ▼
1 second later
    │
    ▼
B`
          }
        ]
      },
      {
        heading: "Multiple Timers",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => console.log("One"), 1000);
setTimeout(() => console.log("Two"), 500);
setTimeout(() => console.log("Three"), 1500);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Two",
              "One",
              "Three"
            ]
          },
          {
            type: "paragraph",
            content: "Timers are scheduled according to when they become ready, but their callbacks still depend on the Event Loop and a free Call Stack."
          }
        ]
      },
      {
        heading: "Blocking the Event Loop",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

while (true) {}`
          },
          {
            type: "paragraph",
            content: "What happens?"
          },
          {
            type: "paragraph",
            content: "The timer never executes."
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because"
          },
          {
            type: "code",
            language: "javascript",
            content: `while(true)`
          },
          {
            type: "paragraph",
            content: "never leaves the Call Stack."
          },
          {
            type: "paragraph",
            content: "The Event Loop never gets a chance to execute callbacks."
          },
          {
            type: "paragraph",
            content: "This is called blocking the Event Loop."
          }
        ]
      },
      {
        heading: "Another Blocking Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Done");
}, 100);

for (let i = 0; i < 1e10; i++) {}`
          },
          {
            type: "paragraph",
            content: "Although the timer is ready after 100 milliseconds,"
          },
          {
            type: "paragraph",
            content: "it cannot execute until the long loop finishes."
          },
          {
            type: "paragraph",
            content: "Timers specify the minimum delay, not the exact execution time."
          }
        ]
      },
      {
        heading: "High-Level Event Loop Phases",
        blocks: [
          {
            type: "paragraph",
            content: "Internally, Node.js processes work in several phases during each iteration of the Event Loop. At a high level, the important phases are:"
          },
          {
            type: "code",
            language: "text",
            content: `Timers
    │
    ▼
Pending Callbacks
    │
    ▼
Idle / Prepare
    │
    ▼
Poll (I/O)
    │
    ▼
Check
    │
    ▼
Close Callbacks`
          },
          {
            type: "paragraph",
            content: "You do **not** need to memorize every phase yet, but you should know their general purpose:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers → Executes callbacks from `setTimeout()` and `setInterval()` whose delay has expired.",
              "Pending Callbacks → Executes certain system-level callbacks deferred from previous iterations.",
              "Idle / Prepare → Internal Node.js work (not directly used by application code).",
              "Poll → Waits for and processes I/O events such as file system or network operations.",
              "Check → Executes callbacks scheduled by `setImmediate()`.",
              "Close Callbacks → Runs cleanup callbacks when resources like sockets are closed."
            ]
          },
          {
            type: "paragraph",
            content: "We'll revisit some of these phases when studying `setImmediate()` and `process.nextTick()`."
          }
        ]
      },
      {
        heading: "Real Execution Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `const fs = require("fs");

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

fs.readFile("data.txt", () => {
    console.log("File");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Possible output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Timer",
              "File"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "File",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Why can the last two lines change?"
          },
          {
            type: "paragraph",
            content: "Because file reading depends on the operating system and disk speed. The timer becomes eligible after its delay expires, while the file callback becomes eligible only after the I/O operation completes. Their relative order can therefore vary depending on timing."
          },
          {
            type: "paragraph",
            content: "This is why asynchronous execution isn't always determined solely by the order in which the code appears."
          }
        ]
      },
      {
        heading: "Event Loop vs Threads",
        blocks: [
          {
            type: "paragraph",
            content: "A common misconception is that the Event Loop itself performs asynchronous work."
          },
          {
            type: "paragraph",
            content: "It doesn't."
          },
          {
            type: "paragraph",
            content: "The Event Loop only schedules callbacks."
          },
          {
            type: "paragraph",
            content: "The actual work is performed by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Operating system services",
              "libuv (Node.js's asynchronous I/O library)",
              "Thread pool (for certain operations like some file system and crypto tasks)"
            ]
          },
          {
            type: "paragraph",
            content: "When the work completes, the Event Loop is notified and schedules the callback."
          }
        ]
      },
      {
        heading: "Common Misconceptions",
        blocks: [
          {
            type: "paragraph",
            content: "Node.js runs everything in parallel."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "JavaScript execution itself is single-threaded."
          },
          {
            type: "paragraph",
            content: "Only certain operations are handled asynchronously outside the JavaScript thread."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "setTimeout(0) executes immediately."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "It executes only after:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "the minimum delay has passed,",
              "the current JavaScript execution finishes, and",
              "the Event Loop schedules it."
            ]
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "The Event Loop executes callbacks while JavaScript is still running."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "Callbacks only execute when the Call Stack is empty."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "The Event Loop makes JavaScript multithreaded."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "The Event Loop coordinates asynchronous work, but JavaScript code still executes one callback or function at a time."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Long-running JavaScript doesn't affect asynchronous tasks."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "CPU-intensive synchronous code blocks the Event Loop, delaying timers, I/O callbacks, and incoming requests."
          }
        ]
      },
      {
        heading: "Why Understanding the Event Loop Matters",
        blocks: [
          {
            type: "paragraph",
            content: "The Event Loop explains why:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Node.js scales well for I/O-heavy applications.",
              "Non-blocking I/O is faster than blocking I/O for servers.",
              "Large synchronous computations can freeze an application.",
              "`setTimeout()` doesn't guarantee exact execution timing.",
              "File reads, database queries, and HTTP requests don't block other incoming requests.",
              "Understanding callback scheduling helps write more predictable asynchronous code."
            ]
          },
          {
            type: "paragraph",
            content: "Whether you're building REST APIs, chat servers, real-time applications, or backend services, the Event Loop is constantly working behind the scenes. Mastering it helps you write faster, more efficient Node.js applications and avoid subtle performance problems that are difficult to debug."
          },
          {
            type: "paragraph",
            content: "In the next lessons, we'll build on this foundation by exploring Microtasks, Macrotasks, `process.nextTick()`, and `setImmediate()`, which explain the precise order in which different asynchronous callbacks are executed."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most common misconceptions about the Event Loop is that it executes callbacks in the order they were created. In reality, the Event Loop processes callbacks in phases, and certain types of callbacks (like those from `setImmediate()`) have priority over others (like I/O callbacks) depending on which phase is active. This is why understanding the phase-based nature of the Event Loop is essential for writing predictable asynchronous code. Another important insight is that the Event Loop is not a feature of JavaScript itself—it is an implementation detail provided by the Node.js runtime (via libuv). In browsers, the Event Loop also exists but behaves slightly differently due to the presence of rendering tasks and user interactions. Understanding the Node.js Event Loop deeply allows you to design applications that are not only performant but also predictable and easy to debug, especially when dealing with complex asynchronous workflows involving timers, I/O, and network operations."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that the Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded. You explored the Call Stack, Node.js runtime APIs, callback queues, and how the Event Loop continuously moves callbacks from queues to the Call Stack when it becomes empty."
          },
          {
            type: "paragraph",
            content: "You also learned how asynchronous operations such as `setTimeout()` and file system operations interact with the Event Loop, why timers specify minimum delays rather than exact execution times, and how blocking the Event Loop with synchronous code can delay callbacks and degrade application performance."
          },
          {
            type: "paragraph",
            content: "Finally, you explored the high-level phases of the Event Loop and common misconceptions about how Node.js handles concurrency. This understanding is essential for writing efficient, scalable Node.js applications and will serve as the foundation for deeper topics such as Microtasks, Macrotasks, `process.nextTick()`, and `setImmediate()` in the upcoming lessons."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Microtasks
============================= */
    "nodejs-microtasks": {
    title: "Microtasks",
    readingTime: "25 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lesson, you learned about the Event Loop and how it continuously checks for asynchronous work to execute. However, not every asynchronous callback is treated equally. Some callbacks are considered more important and are executed before others."
          },
          {
            type: "paragraph",
            content: "This is where Microtasks come into the picture."
          },
          {
            type: "paragraph",
            content: "Understanding microtasks is one of the biggest milestones in mastering asynchronous JavaScript. It explains why Promise callbacks execute before timers, why `await` resumes execution almost immediately after a Promise resolves, and why certain asynchronous operations appear to \"jump ahead\" of others."
          },
          {
            type: "paragraph",
            content: "If you have ever wondered why the following code prints `Promise` before `Timer`, even though the timer is scheduled first, this lesson will answer that question."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Promise",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "To understand why this happens, we first need to understand what microtasks are."
          }
        ]
      },
      {
        heading: "What Are Microtasks?",
        blocks: [
          {
            type: "paragraph",
            content: "A microtask is a small asynchronous task that is scheduled to run immediately after the currently executing JavaScript code finishes, but before the Event Loop moves to the next phase or executes the next macrotask (such as a timer or I/O callback)."
          },
          {
            type: "paragraph",
            content: "Think of microtasks as high-priority asynchronous tasks."
          },
          {
            type: "paragraph",
            content: "Instead of waiting for the next Event Loop iteration, they are executed as soon as the current call stack becomes empty."
          },
          {
            type: "paragraph",
            content: "This makes microtasks much faster than normal asynchronous callbacks like `setTimeout()`."
          }
        ]
      },
      {
        heading: "Why Do Microtasks Exist?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine JavaScript had only timers and I/O callbacks."
          },
          {
            type: "paragraph",
            content: "Suppose a Promise resolves immediately."
          },
          {
            type: "code",
            language: "javascript",
            content: `const promise = Promise.resolve("Done");`
          },
          {
            type: "paragraph",
            content: "If Promise callbacks had to wait behind timers, file operations, and network requests, they would become unnecessarily slow."
          },
          {
            type: "paragraph",
            content: "Instead, JavaScript places Promise callbacks into a special queue called the Microtask Queue."
          },
          {
            type: "paragraph",
            content: "This ensures that Promise-related work finishes as soon as possible before moving on to less urgent tasks."
          }
        ]
      },
      {
        heading: "The Two Main Queues",
        blocks: [
          {
            type: "paragraph",
            content: "At a high level, Node.js maintains two important queues for asynchronous callbacks."
          },
          {
            type: "code",
            language: "text",
            content: `Microtask Queue
----------------
Promise.then()
.catch()
.finally()
await
queueMicrotask()
    │
    ▼
Higher Priority
----------------
Macrotask Queue
----------------
setTimeout()
setInterval()
I/O callbacks
setImmediate()`
          },
          {
            type: "paragraph",
            content: "The Event Loop always empties the Microtask Queue before processing the next macrotask."
          },
          {
            type: "paragraph",
            content: "This rule is the key to understanding JavaScript execution order."
          }
        ]
      },
      {
        heading: "The Microtask Queue",
        blocks: [
          {
            type: "paragraph",
            content: "Whenever a Promise settles (either fulfills or rejects), its callbacks are not executed immediately."
          },
          {
            type: "paragraph",
            content: "Instead, they are placed into the Microtask Queue."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve("Hello")
    .then(value => {
        console.log(value);
    });`
          },
          {
            type: "paragraph",
            content: "Execution flow"
          },
          {
            type: "code",
            language: "text",
            content: `Promise resolves
    │
    ▼
Callback enters Microtask Queue
    │
    ▼
Current JavaScript finishes
    │
    ▼
Event Loop processes Microtask Queue
    │
    ▼
console.log("Hello")`
          }
        ]
      },
      {
        heading: "Relationship with the Event Loop",
        blocks: [
          {
            type: "paragraph",
            content: "Recall the simplified Event Loop:"
          },
          {
            type: "code",
            language: "text",
            content: `Call Stack
    │
    ▼
Event Loop
    │
    ▼
Callback Queue`
          },
          {
            type: "paragraph",
            content: "Now let's make it more accurate."
          },
          {
            type: "code",
            language: "text",
            content: `Call Stack
    │
    ▼
Microtask Queue
    │
    ▼
Event Loop
    │
    ▼
Macrotask Queue`
          },
          {
            type: "paragraph",
            content: "The Event Loop follows this simplified order:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Execute synchronous JavaScript.",
              "Empty the entire Microtask Queue.",
              "Execute one macrotask.",
              "Empty the Microtask Queue again.",
              "Repeat."
            ]
          },
          {
            type: "paragraph",
            content: "This explains why Promise callbacks appear to execute \"before everything else.\""
          }
        ]
      },
      {
        heading: "First Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Promise"
            ]
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "code",
            language: "text",
            content: `console.log("Start")
    │
    ▼
Promise callback added to Microtask Queue
    │
    ▼
console.log("End")
    │
    ▼
Call Stack Empty
    │
    ▼
Run Microtask
    │
    ▼
Promise`
          }
        ]
      },
      {
        heading: "Promise vs setTimeout()",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the most common interview questions."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Promise",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Timeline:"
          },
          {
            type: "code",
            language: "text",
            content: `Start
    │
    ▼
Timer scheduled
    │
    ▼
Promise callback scheduled
    │
    ▼
End
    │
    ▼
Microtask Queue
    │
    ▼
Promise
    │
    ▼
Macrotask Queue
    │
    ▼
Timer`
          },
          {
            type: "paragraph",
            content: "The Promise callback has higher priority."
          }
        ]
      },
      {
        heading: "Multiple Promise Callbacks",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve().then(() => {
    console.log("One");
});

Promise.resolve().then(() => {
    console.log("Two");
});

Promise.resolve().then(() => {
    console.log("Three");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "One",
              "Two",
              "Three"
            ]
          },
          {
            type: "paragraph",
            content: "Microtasks execute in First-In, First-Out (FIFO) order."
          }
        ]
      },
      {
        heading: "Microtasks After Every Callback",
        blocks: [
          {
            type: "paragraph",
            content: "One fact many tutorials don't emphasize is that Node.js doesn't wait until the entire program finishes before processing microtasks."
          },
          {
            type: "paragraph",
            content: "Instead, after every callback or task completes, Node.js checks whether new microtasks were created."
          },
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timer");
    Promise.resolve().then(() => {
        console.log("Promise");
    });
}, 0);

setTimeout(() => {
    console.log("Second Timer");
}, 0);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Timer",
              "Promise",
              "Second Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "code",
            language: "text",
            content: `Timer callback
    │
    ▼
Creates Promise
    │
    ▼
Timer callback finishes
    │
    ▼
Microtask Queue emptied
    │
    ▼
Promise
    │
    ▼
Second Timer`
          },
          {
            type: "paragraph",
            content: "The Event Loop always drains the Microtask Queue before moving to the next task, even if both timers are already waiting."
          }
        ]
      },
      {
        heading: "queueMicrotask()",
        blocks: [
          {
            type: "paragraph",
            content: "Besides Promises, JavaScript provides another way to schedule microtasks:"
          },
          {
            type: "code",
            language: "javascript",
            content: `queueMicrotask(callback);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Microtask"
            ]
          },
          {
            type: "paragraph",
            content: "`queueMicrotask()` schedules a callback directly into the Microtask Queue without creating a Promise."
          }
        ]
      },
      {
        heading: "Promise vs queueMicrotask()",
        blocks: [
          {
            type: "paragraph",
            content: "Both schedule microtasks."
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve().then(() => {
    console.log("Promise");
});

queueMicrotask(() => {
    console.log("Microtask");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Promise",
              "Microtask"
            ]
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "output",
            content: [
              "Microtask",
              "Promise"
            ]
          },
          {
            type: "paragraph",
            content: "depending on which one was scheduled first."
          },
          {
            type: "paragraph",
            content: "Both share the same queue."
          }
        ]
      },
      {
        heading: "async/await Uses Microtasks",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers don't realize that `await` is built on top of Promises."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `async function demo() {
    console.log("Start");
    await Promise.resolve();
    console.log("End");
}

demo();

console.log("Outside");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "Outside",
              "End"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "The code after `await` is placed into the Microtask Queue."
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "code",
            language: "text",
            content: `Start
    │
    ▼
await
    │
    ▼
Outside
    │
    ▼
Microtask
    │
    ▼
End`
          },
          {
            type: "paragraph",
            content: "This is why `await` feels almost instantaneous."
          }
        ]
      },
      {
        heading: "Nested Microtasks",
        blocks: [
          {
            type: "paragraph",
            content: "Microtasks can create more microtasks."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve().then(() => {
    console.log("One");
    Promise.resolve().then(() => {
        console.log("Two");
    });
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "One",
              "Two"
            ]
          },
          {
            type: "paragraph",
            content: "Node.js continues processing newly created microtasks until the Microtask Queue becomes completely empty."
          }
        ]
      },
      {
        heading: "Microtask Starvation",
        blocks: [
          {
            type: "paragraph",
            content: "One important concept rarely covered in beginner tutorials is microtask starvation."
          },
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function run() {
    Promise.resolve().then(run);
}

run();`
          },
          {
            type: "paragraph",
            content: "Each Promise schedules another Promise."
          },
          {
            type: "paragraph",
            content: "The Microtask Queue never becomes empty."
          },
          {
            type: "paragraph",
            content: "As a result:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers stop executing.",
              "I/O callbacks cannot run.",
              "The Event Loop never progresses."
            ]
          },
          {
            type: "paragraph",
            content: "This situation is called microtask starvation."
          },
          {
            type: "paragraph",
            content: "Although uncommon, it demonstrates why developers should avoid creating endless chains of microtasks."
          }
        ]
      },
      {
        heading: "Real Backend Example",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine an Express route."
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", async (req, res) => {
    const user = await getUser();
    res.json(user);
});`
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Database request begins.",
              "JavaScript continues handling other requests.",
              "Database finishes.",
              "Promise resolves.",
              "Continuation after `await` enters the Microtask Queue.",
              "Response is sent."
            ]
          },
          {
            type: "paragraph",
            content: "This is one reason Node.js servers remain highly responsive."
          }
        ]
      },
      {
        heading: "Practical Execution Example",
        blocks: [
          {
            type: "paragraph",
            content: "Predict the output."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "A",
              "D",
              "B",
              "C"
            ]
          },
          {
            type: "paragraph",
            content: "Timeline"
          },
          {
            type: "code",
            language: "text",
            content: `A
    │
    ▼
Promise queued
    │
    ▼
Timer queued
    │
    ▼
D
    │
    ▼
Microtask
    │
    ▼
B
    │
    ▼
Macrotask
    │
    ▼
C`
          }
        ]
      },
      {
        heading: "Common Misconceptions",
        blocks: [
          {
            type: "paragraph",
            content: "Microtasks are synchronous."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "They are asynchronous, but they have higher priority than macrotasks."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Promises execute immediately."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "The Promise executor runs immediately, but `.then()` callbacks are scheduled as microtasks."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`await` blocks Node.js."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "It pauses only the current async function. The continuation is scheduled as a microtask while the Event Loop continues processing other work."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "`queueMicrotask()` is the same as `setTimeout(..., 0)`."
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "`queueMicrotask()` schedules a microtask, while `setTimeout()` schedules a macrotask. Microtasks always execute first."
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
              "Use Promises and `async/await` for most asynchronous programming instead of manually scheduling microtasks.",
              "Reserve `queueMicrotask()` for advanced scenarios where work must run after the current synchronous code but before the next Event Loop task.",
              "Avoid creating infinitely recursive Promise chains, as they can starve the Event Loop.",
              "Don't assume timers always execute first—Promise callbacks and `await` continuations have higher priority.",
              "Remember that the Microtask Queue is drained completely before the Event Loop proceeds to the next macrotask."
            ]
          },
          {
            type: "paragraph",
            content: "Understanding microtasks gives you a much deeper understanding of how modern JavaScript works. Every time you use Promises, `async/await`, or `queueMicrotask()`, you're relying on the Microtask Queue. This knowledge makes it much easier to predict execution order, debug asynchronous code, and write efficient Node.js applications. In the next lesson, we'll explore Macrotasks, which handle timers, I/O callbacks, and other asynchronous operations that run after all pending microtasks have finished."
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most valuable insights for understanding microtasks is recognizing that they are not just a Node.js feature—they are part of the JavaScript specification itself. The ECMAScript specification defines the concept of \"Jobs\" and \"Job Queues,\" which map directly to the Microtask Queue in Node.js and browsers. This means the behavior you learn here applies to JavaScript in any environment, not just Node.js. Another important realization is that microtasks are designed for operations that must happen as soon as possible but cannot run synchronously without blocking. For example, when a Promise resolves, its callbacks should not block the current synchronous execution, but they should run before any other asynchronous work because they often represent the logical continuation of the current operation. This design makes JavaScript both responsive and predictable, allowing developers to write clean asynchronous code without worrying about unnecessary delays. Understanding microtasks deeply transforms how you think about asynchronous execution, helping you avoid subtle bugs and performance issues in complex applications."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that microtasks are high-priority asynchronous tasks that execute immediately after the current synchronous code finishes and before any macrotasks (such as timers or I/O callbacks) are processed. You explored how Promise callbacks, `await` continuations, and `queueMicrotask()` all utilize the Microtask Queue, and how the Event Loop always drains this queue completely before moving to the next task."
          },
          {
            type: "paragraph",
            content: "You also learned why Promise callbacks execute before timers, how nested microtasks work, the concept of microtask starvation, and practical implications for building Node.js applications. This understanding is essential for predicting execution order, debugging asynchronous code, and designing efficient backend systems."
          },
          {
            type: "paragraph",
            content: "In the next lesson, we'll build on this foundation by exploring Macrotasks, which handle timers, I/O callbacks, and other asynchronous operations that run after all pending microtasks have finished. Together, microtasks and macrotasks form the complete picture of how Node.js schedules and executes asynchronous work."
          }
        ]
      }
    ]
  },




  /* ===========================
    Seventh Topic : Macrotasks
============================= */
    "nodejs-macrotasks": {
    title: "Macrotasks",
    readingTime: "25 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern Node.js applications rarely execute only one piece of code. A web server may receive thousands of requests, wait for database responses, schedule timers, and read files—all seemingly at the same time. The Event Loop makes this possible by organizing asynchronous work into different queues and execution phases."
          },
          {
            type: "paragraph",
            content: "In the previous lesson, you learned about Microtasks, which have the highest execution priority after the current JavaScript code finishes. In this lesson, we'll explore Macrotasks, the larger asynchronous tasks that make up most real-world Node.js applications."
          },
          {
            type: "paragraph",
            content: "Understanding macrotasks is essential because almost every asynchronous API you use—timers, file operations, network requests, streams, and sockets—ultimately schedules work as macrotasks."
          }
        ]
      },
      {
        heading: "What are Macrotasks?",
        blocks: [
          {
            type: "paragraph",
            content: "A Macrotask is a unit of asynchronous work that is scheduled to execute in one of the Event Loop's phases after the current JavaScript execution has completed."
          },
          {
            type: "paragraph",
            content: "Think of macrotasks as the Event Loop's main tasks."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timer callbacks",
              "File system callbacks",
              "Network callbacks",
              "HTTP server requests",
              "Stream events",
              "Socket events",
              "Immediate callbacks"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike microtasks, macrotasks do not run immediately after the current code. Instead, they wait until the Event Loop reaches the appropriate phase."
          }
        ]
      },
      {
        heading: "Simple Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Although the timeout is zero milliseconds, it still becomes a macrotask."
          }
        ]
      },
      {
        heading: "Why Do Macrotasks Exist?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine Node.js had no scheduling mechanism."
          },
          {
            type: "code",
            language: "javascript",
            content: `readFile();
setTimeout();
networkRequest();
databaseQuery();`
          },
          {
            type: "paragraph",
            content: "All these operations finish at different times."
          },
          {
            type: "paragraph",
            content: "Node.js needs a way to know:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "which callback is ready",
              "when it should execute",
              "what order it should follow"
            ]
          },
          {
            type: "paragraph",
            content: "Macrotasks solve this scheduling problem."
          },
          {
            type: "paragraph",
            content: "Instead of interrupting JavaScript execution, Node waits until the current work finishes and then executes the pending macrotasks one by one."
          }
        ]
      },
      {
        heading: "Where are Macrotasks Stored?",
        blocks: [
          {
            type: "paragraph",
            content: "Macrotasks are stored in queues managed by the Event Loop."
          },
          {
            type: "paragraph",
            content: "Different Event Loop phases maintain different kinds of macrotasks."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers Queue",
              "Pending Callbacks Queue",
              "Poll Queue",
              "Check Queue",
              "Close Callbacks Queue"
            ]
          },
          {
            type: "paragraph",
            content: "This is why saying \"the macrotask queue\" is technically a simplification. In Node.js, there are multiple queues corresponding to Event Loop phases."
          }
        ]
      },
      {
        heading: "Common Sources of Macrotasks",
        blocks: [
          {
            type: "paragraph",
            content: "The most common macrotasks in Node.js come from:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "`setTimeout()`",
              "`setInterval()`",
              "File System (`fs`)",
              "HTTP requests",
              "TCP sockets",
              "Streams",
              "DNS lookups",
              "`setImmediate()`",
              "Child processes"
            ]
          },
          {
            type: "paragraph",
            content: "These APIs perform work outside the JavaScript engine and notify the Event Loop when they are complete."
          }
        ]
      },
      {
        heading: "setTimeout()",
        blocks: [
          {
            type: "paragraph",
            content: "The most common macrotask."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Executed");
}, 1000);`
          },
          {
            type: "paragraph",
            content: "The callback waits at least one second before becoming eligible to execute."
          },
          {
            type: "paragraph",
            content: "Important:"
          },
          {
            type: "paragraph",
            content: "The callback does not execute exactly after one second."
          },
          {
            type: "paragraph",
            content: "It executes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "after one second has elapsed",
              "when the Event Loop reaches the Timers phase",
              "when the Call Stack is empty"
            ]
          }
        ]
      },
      {
        heading: "Zero Millisecond Timeout",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "A",
              "C",
              "B"
            ]
          },
          {
            type: "paragraph",
            content: "Even with zero delay:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "it never executes immediately",
              "it always waits for the current execution to finish"
            ]
          }
        ]
      },
      {
        heading: "setInterval()",
        blocks: [
          {
            type: "paragraph",
            content: "Unlike `setTimeout()`, this schedules repeated macrotasks."
          },
          {
            type: "code",
            language: "javascript",
            content: `setInterval(() => {
    console.log("Running...");
}, 1000);`
          },
          {
            type: "paragraph",
            content: "Every second, a new macrotask is added."
          },
          {
            type: "paragraph",
            content: "Stop it using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const id = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(id);`
          }
        ]
      },
      {
        heading: "File System Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "File operations are asynchronous."
          },
          {
            type: "code",
            language: "javascript",
            content: `const fs = require("fs");

fs.readFile("data.txt", () => {
    console.log("File loaded");
});

console.log("Done");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Done",
              "File loaded"
            ]
          },
          {
            type: "paragraph",
            content: "Reading the file happens in the background."
          },
          {
            type: "paragraph",
            content: "Once complete, its callback becomes a macrotask that runs during the Event Loop's Poll phase."
          }
        ]
      },
      {
        heading: "HTTP Requests",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your server receives a request."
          },
          {
            type: "code",
            language: "javascript",
            content: `server.on("request", (req, res) => {
    console.log("Request received");
});`
          },
          {
            type: "paragraph",
            content: "Each incoming request creates asynchronous work."
          },
          {
            type: "paragraph",
            content: "When data arrives, the callback becomes a macrotask."
          }
        ]
      },
      {
        heading: "Network Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "code",
            language: "javascript",
            content: `socket.on("data", callback);
socket.on("connect", callback);
socket.on("close", callback);`
          },
          {
            type: "paragraph",
            content: "These callbacks execute as macrotasks whenever the operating system reports new events."
          }
        ]
      },
      {
        heading: "Streams",
        blocks: [
          {
            type: "paragraph",
            content: "Streams also schedule macrotasks."
          },
          {
            type: "code",
            language: "javascript",
            content: `stream.on("data", chunk => {
    console.log(chunk);
});`
          },
          {
            type: "paragraph",
            content: "Each incoming chunk generates asynchronous work handled by the Event Loop."
          }
        ]
      },
      {
        heading: "Message Queue Concept",
        blocks: [
          {
            type: "paragraph",
            content: "When asynchronous operations finish, they do not immediately execute JavaScript."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Background work finishes.",
              "Callback enters the appropriate queue.",
              "Event Loop reaches the corresponding phase.",
              "Callback moves to the Call Stack.",
              "JavaScript executes it."
            ]
          },
          {
            type: "paragraph",
            content: "Visualization:"
          },
          {
            type: "code",
            language: "text",
            content: `Background Work
       │
       ▼
Macrotask Queue
       │
       ▼
 Event Loop
       │
       ▼
 Call Stack`
          }
        ]
      },
      {
        heading: "Execution Order",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "paragraph",
            content: "Current Call Stack"
          },
          {
            type: "code",
            language: "text",
            content: `console.log("Start")
console.log("End")`
          },
          {
            type: "paragraph",
            content: "Then"
          },
          {
            type: "code",
            language: "text",
            content: `Timers Queue
    │
    ▼
setTimeout callback`
          },
          {
            type: "paragraph",
            content: "Finally"
          },
          {
            type: "code",
            language: "text",
            content: `console.log("Timeout")`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Timeout"
            ]
          }
        ]
      },
      {
        heading: "Multiple Macrotasks",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("One");
}, 0);

setTimeout(() => {
    console.log("Two");
}, 0);

setTimeout(() => {
    console.log("Three");
}, 0);`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "One",
              "Two",
              "Three"
            ]
          },
          {
            type: "paragraph",
            content: "Callbacks are generally executed in the order they become ready within the same queue."
          }
        ]
      },
      {
        heading: "Macrotasks vs Microtasks",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the most important concepts in Node.js."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Promise",
              "Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "After the current code finishes:"
          },
          {
            type: "code",
            language: "text",
            content: `Current code
      │
      ▼
Microtasks
      │
      ▼
Macrotasks`
          },
          {
            type: "paragraph",
            content: "Promises are microtasks."
          },
          {
            type: "paragraph",
            content: "Timers are macrotasks."
          },
          {
            type: "paragraph",
            content: "Microtasks always execute first."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timer");
}, 0);

queueMicrotask(() => {
    console.log("Microtask");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Microtask",
              "Timer"
            ]
          }
        ]
      },
      {
        heading: "Event Loop Flow with Macrotasks",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");`
          },
          {
            type: "paragraph",
            content: "Execution"
          },
          {
            type: "paragraph",
            content: "Current Stack"
          },
          {
            type: "code",
            language: "text",
            content: `A
D`
          },
          {
            type: "paragraph",
            content: "Microtask Queue"
          },
          {
            type: "code",
            language: "text",
            content: `C`
          },
          {
            type: "paragraph",
            content: "Macrotask Queue"
          },
          {
            type: "code",
            language: "text",
            content: `B`
          },
          {
            type: "paragraph",
            content: "Final Output"
          },
          {
            type: "output",
            content: [
              "A",
              "D",
              "C",
              "B"
            ]
          }
        ]
      },
      {
        heading: "Multiple Queues in Node.js",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers often simplify macrotasks into a single task queue."
          },
          {
            type: "paragraph",
            content: "Node.js is more sophisticated."
          },
          {
            type: "paragraph",
            content: "Its Event Loop includes phases such as:"
          },
          {
            type: "code",
            language: "text",
            content: `Timers
    │
    ▼
Pending Callbacks
    │
    ▼
Idle / Prepare
    │
    ▼
Poll
    │
    ▼
Check
    │
    ▼
Close Callbacks`
          },
          {
            type: "paragraph",
            content: "Different asynchronous APIs place callbacks into different phases."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "table",
            headers: ["API", "Event Loop Phase"],
            rows: [
              ["setTimeout", "Timers"],
              ["setInterval", "Timers"],
              ["fs.readFile", "Poll"],
              ["HTTP requests", "Poll"],
              ["setImmediate", "Check"],
              ["socket close", "Close Callbacks"]
            ]
          },
          {
            type: "paragraph",
            content: "This phase-based scheduling is one reason Node.js scales efficiently under heavy workloads."
          }
        ]
      },
      {
        heading: "Timer Delay is a Minimum Delay",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners believe:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(fn, 1000);`
          },
          {
            type: "paragraph",
            content: "means:"
          },
          {
            type: "quote",
            content: "Execute exactly after one second."
          },
          {
            type: "paragraph",
            content: "This is incorrect."
          },
          {
            type: "paragraph",
            content: "It means:"
          },
          {
            type: "quote",
            content: "Execute no earlier than one second, once the Event Loop is free."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timer");
}, 1000);

const start = Date.now();

while (Date.now() - start < 3000) {}`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: "Timer"
          },
          {
            type: "paragraph",
            content: "The callback runs after roughly 3 seconds, not 1 second, because the Event Loop was blocked by the synchronous loop."
          }
        ]
      },
      {
        heading: "Macrotasks Never Interrupt JavaScript",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timer");
}, 0);

for (let i = 0; i < 1e9; i++) {}`
          },
          {
            type: "paragraph",
            content: "Even though the timer is ready, it cannot interrupt the running loop."
          },
          {
            type: "paragraph",
            content: "JavaScript execution is always completed before the Event Loop processes the next macrotask."
          }
        ]
      },
      {
        heading: "Real Backend Example",
        blocks: [
          {
            type: "paragraph",
            content: "Consider an Express server."
          },
          {
            type: "code",
            language: "javascript",
            content: `app.get("/", async (req, res) => {
    const data = await db.query();
    res.send(data);
});`
          },
          {
            type: "paragraph",
            content: "Internally:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "HTTP request arrives.",
              "Request callback becomes a macrotask.",
              "Database query starts.",
              "JavaScript continues serving other requests.",
              "Database finishes.",
              "Result callback becomes another macrotask.",
              "Response is sent."
            ]
          },
          {
            type: "paragraph",
            content: "This non-blocking model enables Node.js to efficiently handle many simultaneous connections."
          }
        ]
      },
      {
        heading: "Common Beginner Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Assuming `setTimeout(0)` Executes Immediately"
          },
          {
            type: "paragraph",
            content: "Wrong."
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(fn, 0);`
          },
          {
            type: "paragraph",
            content: "still creates a macrotask."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Ignoring Microtask Priority"
          },
          {
            type: "paragraph",
            content: "Developers often expect:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(...)
Promise.resolve(...)`
          },
          {
            type: "paragraph",
            content: "to run in registration order."
          },
          {
            type: "paragraph",
            content: "Microtasks always run before macrotasks."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Blocking the Event Loop"
          },
          {
            type: "code",
            language: "javascript",
            content: `while (true) {}`
          },
          {
            type: "paragraph",
            content: "No macrotask can execute until the loop ends."
          },
          {
            type: "paragraph",
            content: "Blocking synchronous code delays timers, I/O, and incoming requests."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Using Timers for Precise Scheduling"
          },
          {
            type: "paragraph",
            content: "Timers are suitable for general scheduling but are not real-time guarantees. Heavy CPU work or a busy Event Loop can delay their execution."
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
              "Understand that timers specify a minimum delay, not an exact execution time.",
              "Keep synchronous work short to avoid delaying queued macrotasks.",
              "Prefer asynchronous APIs (`fs.readFile`, network requests, database drivers) over synchronous alternatives in production servers.",
              "Use `setTimeout()` for delayed execution and `setInterval()` only for repeated tasks that can tolerate slight timing variations.",
              "Remember that Promise callbacks and other microtasks execute before macrotasks.",
              "Learn the high-level Event Loop phases to better understand callback execution order.",
              "Profile applications if timers or I/O appear delayed—Event Loop blocking is a common cause."
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
              "A macrotask is a unit of asynchronous work executed by the Event Loop in one of its phases.",
              "Timers, file operations, network events, streams, and HTTP callbacks are common sources of macrotasks.",
              "`setTimeout()` and `setInterval()` schedule timer macrotasks, while I/O operations are generally processed during the Poll phase.",
              "Macrotasks are processed after the current JavaScript execution completes and after all pending microtasks have been drained.",
              "`setTimeout(fn, 0)` never runs immediately; it simply makes the callback eligible for execution in a future Event Loop iteration.",
              "Long-running synchronous code blocks the Event Loop, delaying all pending macrotasks.",
              "Understanding macrotasks is essential for writing responsive, scalable, and high-performance Node.js applications."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most important insights about macrotasks is that they are not just about timers—they are the primary mechanism through which Node.js handles I/O. Every time you read a file, make an HTTP request, listen for a socket event, or process a stream, you are relying on macrotask scheduling. Understanding the difference between microtasks and macrotasks is essential for writing efficient, predictable code, especially in high-throughput servers where timing and responsiveness matter. Another often-overlooked point is that the Event Loop's phases are not just theoretical—they directly affect real application behavior. For example, `setTimeout()` callbacks execute during the Timers phase, while `setImmediate()` callbacks execute during the Check phase, which can lead to different ordering depending on when they are scheduled relative to I/O operations. Developers who deeply understand these concepts can design systems that are not only performant but also easier to debug and reason about, even under heavy production loads."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that macrotasks are the primary units of asynchronous work processed by the Event Loop. You explored common sources of macrotasks such as `setTimeout()`, `setInterval()`, file system operations, HTTP requests, network events, and streams. You also learned how macrotasks differ from microtasks in execution priority, how timers specify minimum delays rather than exact execution times, and how blocking the Event Loop with synchronous code can delay all pending macrotasks."
          },
          {
            type: "paragraph",
            content: "You also examined the phase-based nature of Node.js's Event Loop and how different asynchronous APIs place callbacks into different phases. This understanding is essential for writing predictable, scalable, and high-performance Node.js applications."
          },
          {
            type: "paragraph",
            content: "In the next lesson, we'll explore `setImmediate()` and `process.nextTick()`, two special APIs that schedule callbacks in specific Event Loop phases and offer unique scheduling behaviors that are important for advanced Node.js programming."
          }
        ]
      }
    ]
  },




  /* ===========================
    Eighth Topic : process.nextTick()
============================= */
    "nodejs-process-nexttick": {
    title: "process.nextTick()",
    readingTime: "25 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In the previous lessons, you learned about Callbacks, Promises, async/await, the Event Loop, Microtasks, and Macrotasks. You now understand that asynchronous tasks are scheduled rather than executed immediately."
          },
          {
            type: "paragraph",
            content: "However, Node.js has one scheduling mechanism that often surprises even experienced JavaScript developers: `process.nextTick()`."
          },
          {
            type: "paragraph",
            content: "Unlike browsers, Node.js introduces a special queue that has an even higher priority than Promise microtasks. This queue exists for internal Node.js operations as well as application code."
          },
          {
            type: "paragraph",
            content: "Understanding `process.nextTick()` is important because many core Node.js modules rely on it, and misuse of it can seriously affect your application's performance."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn exactly why `process.nextTick()` exists, how it works internally, when to use it, and when you should avoid it."
          }
        ]
      },
      {
        heading: "Why process.nextTick() Exists",
        blocks: [
          {
            type: "paragraph",
            content: "JavaScript is single-threaded."
          },
          {
            type: "paragraph",
            content: "When a function is executing, nothing else can interrupt it."
          },
          {
            type: "paragraph",
            content: "Sometimes, however, a library or framework wants to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "finish the current function,",
              "wait until the current Call Stack is empty,",
              "but execute before any timers, I/O callbacks, or even Promise callbacks."
            ]
          },
          {
            type: "paragraph",
            content: "This is exactly why Node.js introduced `process.nextTick()`."
          },
          {
            type: "paragraph",
            content: "It schedules a callback to execute immediately after the current operation completes, but before the Event Loop continues to the next phase."
          },
          {
            type: "paragraph",
            content: "Think of it as:"
          },
          {
            type: "quote",
            content: "Run this callback at the earliest possible safe moment."
          }
        ]
      },
      {
        heading: "What is process.nextTick()?",
        blocks: [
          {
            type: "paragraph",
            content: "`process.nextTick()` is a Node.js-specific method that schedules a callback into the Next Tick Queue."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(callback);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Next Tick"
            ]
          },
          {
            type: "paragraph",
            content: "Although the callback is asynchronous, it executes almost immediately after the current JavaScript finishes."
          }
        ]
      },
      {
        heading: "The Next Tick Queue",
        blocks: [
          {
            type: "paragraph",
            content: "Node.js maintains a dedicated queue called the Next Tick Queue."
          },
          {
            type: "paragraph",
            content: "Whenever you call:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(callback);`
          },
          {
            type: "paragraph",
            content: "the callback is placed into this queue."
          },
          {
            type: "paragraph",
            content: "After the current Call Stack becomes empty, Node.js drains the entire Next Tick Queue before doing anything else."
          },
          {
            type: "paragraph",
            content: "Visualization:"
          },
          {
            type: "code",
            language: "text",
            content: `Current Call Stack
        │
        ▼
 Next Tick Queue
        │
        ▼
 Promise Microtasks
        │
        ▼
 Event Loop Phases`
          },
          {
            type: "paragraph",
            content: "This ordering is unique to Node.js."
          }
        ]
      },
      {
        heading: "Why Isn't process.nextTick() Just Another Microtask?",
        blocks: [
          {
            type: "paragraph",
            content: "Many tutorials incorrectly say that `process.nextTick()` is simply a microtask."
          },
          {
            type: "paragraph",
            content: "That is not completely accurate."
          },
          {
            type: "paragraph",
            content: "Node.js actually maintains two high-priority queues:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "1. Next Tick Queue",
              "2. Promise Microtask Queue"
            ]
          },
          {
            type: "paragraph",
            content: "The Event Loop processes them in this order:"
          },
          {
            type: "code",
            language: "text",
            content: `Current JavaScript
    │
    ▼
process.nextTick()
    │
    ▼
Promise callbacks
    │
    ▼
Event Loop phases`
          },
          {
            type: "paragraph",
            content: "Therefore, `process.nextTick()` has higher priority than Promise microtasks."
          }
        ]
      },
      {
        heading: "Execution Priority",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "nextTick",
              "Promise",
              "Timer"
            ]
          },
          {
            type: "paragraph",
            content: "Execution order:"
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Current code",
              "Next Tick Queue",
              "Promise Microtasks",
              "Timers"
            ]
          }
        ]
      },
      {
        heading: "Why Does Node.js Give It Such High Priority?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine Node.js internally creates an object."
          },
          {
            type: "paragraph",
            content: "Immediately after creation, it must notify listeners."
          },
          {
            type: "paragraph",
            content: "Instead of doing:"
          },
          {
            type: "code",
            language: "javascript",
            content: `emitEvent();`
          },
          {
            type: "paragraph",
            content: "which executes immediately,"
          },
          {
            type: "paragraph",
            content: "Node schedules:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(() => {
    emitEvent();
});`
          },
          {
            type: "paragraph",
            content: "This gives users time to finish setting up listeners while still ensuring the event happens before any unrelated asynchronous work."
          },
          {
            type: "paragraph",
            content: "This pattern is used throughout Node.js core APIs."
          }
        ]
      },
      {
        heading: "Basic Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `function greet() {
    console.log("Hello");
    process.nextTick(() => {
        console.log("Welcome!");
    });
    console.log("Goodbye");
}

greet();`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Hello",
              "Goodbye",
              "Welcome!"
            ]
          },
          {
            type: "paragraph",
            content: "The callback waits until the current function completes."
          }
        ]
      },
      {
        heading: "Multiple nextTick() Calls",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(() => {
    console.log(1);
});

process.nextTick(() => {
    console.log(2);
});

process.nextTick(() => {
    console.log(3);
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "1",
              "2",
              "3"
            ]
          },
          {
            type: "paragraph",
            content: "Callbacks execute in FIFO (First In, First Out) order."
          }
        ]
      },
      {
        heading: "Nested process.nextTick()",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(() => {
    console.log("A");
    process.nextTick(() => {
        console.log("B");
    });
});

console.log("C");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "C",
              "A",
              "B"
            ]
          },
          {
            type: "paragraph",
            content: "Node.js continues draining the Next Tick Queue until it becomes empty."
          }
        ]
      },
      {
        heading: "process.nextTick() vs Promise Microtasks",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the biggest interview questions."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "Promise"
            ]
          },
          {
            type: "paragraph",
            content: "Although both are extremely high-priority asynchronous callbacks,"
          },
          {
            type: "paragraph",
            content: "Node.js always processes:"
          },
          {
            type: "code",
            language: "text",
            content: `Next Tick Queue
    │
    ▼
before
    │
    ▼
Promise Microtask Queue`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `Promise.resolve().then(() => {
    console.log("Promise 1");
});

process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "Promise 1",
              "Promise 2"
            ]
          }
        ]
      },
      {
        heading: "process.nextTick() vs setTimeout()",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timeout");
}, 0);

process.nextTick(() => {
    console.log("nextTick");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "Reason:"
          },
          {
            type: "paragraph",
            content: "`setTimeout()` waits until the Timers phase."
          },
          {
            type: "paragraph",
            content: "`process.nextTick()` executes before the Event Loop even reaches the Timers phase."
          }
        ]
      },
      {
        heading: "process.nextTick() vs setImmediate()",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(() => {
    console.log("Immediate");
});

process.nextTick(() => {
    console.log("nextTick");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "`setImmediate()` runs during the Check phase."
          },
          {
            type: "paragraph",
            content: "`process.nextTick()` runs before the Event Loop continues."
          }
        ]
      },
      {
        heading: "process.nextTick() vs queueMicrotask()",
        blocks: [
          {
            type: "paragraph",
            content: "Modern JavaScript also provides:"
          },
          {
            type: "code",
            language: "javascript",
            content: `queueMicrotask(() => {
    console.log("Microtask");
});`
          },
          {
            type: "paragraph",
            content: "Comparison:"
          },
          {
            type: "table",
            headers: ["Feature", "process.nextTick()", "queueMicrotask()"],
            rows: [
              ["Node.js specific", "✅", "❌"],
              ["Browser support", "❌", "✅"],
              ["Priority", "Highest", "Lower than nextTick"],
              ["Queue", "Next Tick Queue", "Microtask Queue"]
            ]
          },
          {
            type: "paragraph",
            content: "In Node.js:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(() => {
    console.log("nextTick");
});

queueMicrotask(() => {
    console.log("microtask");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "microtask"
            ]
          },
          {
            type: "paragraph",
            content: "If you're writing cross-platform JavaScript (browser + Node.js), `queueMicrotask()` is usually the portable choice. If you're working with Node.js internals or Node-specific APIs, `process.nextTick()` may be more appropriate."
          }
        ]
      },
      {
        heading: "Practical Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "1. Deferring Execution"
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `initialize();
callback();`
          },
          {
            type: "paragraph",
            content: "you can write:"
          },
          {
            type: "code",
            language: "javascript",
            content: `initialize();
process.nextTick(callback);`
          },
          {
            type: "paragraph",
            content: "The callback executes after initialization finishes."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "2. Consistent Asynchronous APIs"
          },
          {
            type: "paragraph",
            content: "Imagine:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function getData(callback) {
    callback();
}`
          },
          {
            type: "paragraph",
            content: "Sometimes the callback executes immediately."
          },
          {
            type: "paragraph",
            content: "Sometimes asynchronously."
          },
          {
            type: "paragraph",
            content: "This inconsistency is bad."
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function getData(callback) {
    process.nextTick(callback);
}`
          },
          {
            type: "paragraph",
            content: "Now the callback is always asynchronous."
          },
          {
            type: "paragraph",
            content: "This makes APIs easier to reason about."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "3. Allow Event Listeners to Register"
          },
          {
            type: "code",
            language: "javascript",
            content: `class MyEmitter {
    constructor() {
        process.nextTick(() => {
            this.emit("ready");
        });
    }
}`
          },
          {
            type: "paragraph",
            content: "The user now has time to attach listeners."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "4. Internal Node.js APIs"
          },
          {
            type: "paragraph",
            content: "Many Node.js core modules use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Streams",
              "EventEmitter",
              "HTTP",
              "DNS",
              "Crypto"
            ]
          },
          {
            type: "paragraph",
            content: "to schedule callbacks safely."
          }
        ]
      },
      {
        heading: "Understanding the Execution Flow",
        blocks: [
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

process.nextTick(() => {
    console.log("Tick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

setImmediate(() => {
    console.log("Immediate");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "paragraph",
            content: "Current Stack"
          },
          {
            type: "code",
            language: "text",
            content: `Start
End`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Next Tick Queue"
          },
          {
            type: "code",
            language: "text",
            content: `Tick`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Promise Queue"
          },
          {
            type: "code",
            language: "text",
            content: `Promise`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Timers Phase"
          },
          {
            type: "code",
            language: "text",
            content: `Timeout`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Check Phase"
          },
          {
            type: "code",
            language: "text",
            content: `Immediate`
          },
          {
            type: "paragraph",
            content: "One possible output is:"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Tick",
              "Promise",
              "Timeout",
              "Immediate"
            ]
          },
          {
            type: "note",
            content: "The relative order of `setTimeout(..., 0)` and `setImmediate()` can vary depending on the execution context (for example, whether they are scheduled from top-level code or inside an I/O callback). Their ordering is not guaranteed in all situations. However, `process.nextTick()` always runs before both."
          }
        ]
      },
      {
        heading: "Starvation Problem",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest dangers of `process.nextTick()` is Event Loop starvation."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function repeat() {
    process.nextTick(repeat);
}

repeat();`
          },
          {
            type: "paragraph",
            content: "What happens?"
          },
          {
            type: "paragraph",
            content: "Node continuously executes:"
          },
          {
            type: "code",
            language: "text",
            content: `Next Tick
    │
    ▼
Next Tick
    │
    ▼
Next Tick
    │
    ▼
Next Tick`
          },
          {
            type: "paragraph",
            content: "The Event Loop never reaches:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Timers",
              "I/O",
              "HTTP requests",
              "File system callbacks"
            ]
          },
          {
            type: "paragraph",
            content: "Everything else stops."
          },
          {
            type: "paragraph",
            content: "This is called **starvation**."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `let count = 0;

function loop() {
    count++;
    console.log(count);
    process.nextTick(loop);
}

loop();`
          },
          {
            type: "paragraph",
            content: "The application will continue scheduling more `nextTick()` callbacks without giving the Event Loop a chance to process other work. In practice, this can make your application appear frozen because timers, I/O callbacks, and incoming requests cannot run."
          }
        ]
      },
      {
        heading: "Why Promises Are Safer",
        blocks: [
          {
            type: "paragraph",
            content: "Promise callbacks are also high priority."
          },
          {
            type: "paragraph",
            content: "However, Node.js processes the Next Tick Queue first."
          },
          {
            type: "paragraph",
            content: "Excessive use of `process.nextTick()` can indefinitely postpone Promise callbacks as well."
          },
          {
            type: "paragraph",
            content: "For this reason:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prefer Promises for normal asynchronous flow.",
              "Reserve `process.nextTick()` for specialized Node.js scheduling needs."
            ]
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "Using process.nextTick() Everywhere"
          },
          {
            type: "paragraph",
            content: "Some developers think:"
          },
          {
            type: "quote",
            content: "Higher priority means better."
          },
          {
            type: "paragraph",
            content: "It doesn't."
          },
          {
            type: "paragraph",
            content: "Higher priority also means it can block other asynchronous work."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Recursive Scheduling"
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(loop);`
          },
          {
            type: "paragraph",
            content: "inside loops unless absolutely necessary."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Using It Instead of Promises"
          },
          {
            type: "paragraph",
            content: "For normal asynchronous logic:"
          },
          {
            type: "code",
            language: "javascript",
            content: `await
Promise.then()
queueMicrotask()`
          },
          {
            type: "paragraph",
            content: "are usually better choices."
          },
          {
            type: "paragraph",
            content: "Use `process.nextTick()` only when you specifically need Node.js's Next Tick Queue semantics."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Expecting It in Browsers"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(...)`
          },
          {
            type: "paragraph",
            content: "is Node.js specific."
          },
          {
            type: "paragraph",
            content: "It does not exist in standard browser JavaScript."
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
              "Use `process.nextTick()` sparingly and only when you need Node.js-specific scheduling behavior.",
              "Remember that `process.nextTick()` callbacks always execute before Promise microtasks and Event Loop phases.",
              "Avoid recursive `process.nextTick()` calls, as they can starve the Event Loop.",
              "Use Promises or `async/await` for most application-level asynchronous programming.",
              "Prefer `queueMicrotask()` when writing code intended to run in both browsers and Node.js.",
              "Never assume `process.nextTick()` is simply another timer—it bypasses the normal Event Loop phases.",
              "Be cautious when building libraries; excessive use of `process.nextTick()` can delay timers, I/O operations, and even Promise callbacks."
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
              "`process.nextTick()` is a Node.js-specific scheduling API that executes callbacks immediately after the current operation completes.",
              "It places callbacks into the Next Tick Queue, which has a higher priority than the Promise Microtask Queue.",
              "The Next Tick Queue is completely drained before the Event Loop proceeds to timers, I/O callbacks, or other phases.",
              "`process.nextTick()` is useful for deferring work, creating consistent asynchronous APIs, and supporting Node.js internals.",
              "It executes before `Promise.then()`, `queueMicrotask()`, `setTimeout()`, and `setImmediate()`.",
              "Recursive or excessive use can cause Event Loop starvation, preventing timers and I/O callbacks from running.",
              "In modern application code, Promises and `async/await` should be the default choice, while `process.nextTick()` should be reserved for advanced Node.js-specific scenarios."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most important insights about `process.nextTick()` is that it was designed primarily for internal Node.js use, not for general application code. Many core Node.js modules rely on it to schedule operations that must happen immediately after the current operation but before any I/O or timers. However, for most application code, using Promises or `async/await` is safer and more maintainable. A common mistake is using `process.nextTick()` to avoid `setTimeout(..., 0)` because it seems \"faster.\" While it is faster, it can also starve the Event Loop if used excessively. Another often-overlooked point is that `process.nextTick()` is not part of the JavaScript specification—it is a Node.js-specific API. If you're writing code that may run in browsers, `queueMicrotask()` is a more portable alternative. Understanding these subtleties helps you choose the right scheduling mechanism for the right situation, avoiding subtle bugs and performance issues in production applications."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that `process.nextTick()` is a Node.js-specific scheduling API that places callbacks into the Next Tick Queue, which has the highest execution priority in the Node.js Event Loop. You explored how it differs from Promise microtasks, `setTimeout()`, `setImmediate()`, and `queueMicrotask()`, and why it is used in Node.js core modules and library code."
          },
          {
            type: "paragraph",
            content: "You also learned about the dangers of recursive `process.nextTick()` calls, which can cause Event Loop starvation, and best practices for using it safely and sparingly. While `process.nextTick()` is a powerful tool, modern asynchronous programming in Node.js should primarily rely on Promises and `async/await` for application-level logic, reserving `process.nextTick()` for advanced scheduling scenarios where its specific behavior is required."
          },
          {
            type: "paragraph",
            content: "In the next lesson, we'll explore `setImmediate()`, which schedules callbacks during the Check phase of the Event Loop and offers a different scheduling behavior that is useful for I/O-heavy applications."
          }
        ]
      }
    ]
  },




  /* ===========================
    Ninth Topic : setImmediate()
============================= */
    "nodejs-setimmediate": {
    title: "setImmediate()",
    readingTime: "25 min",
        
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "As you have progressed through this section, you've learned how Node.js schedules asynchronous work using callbacks, Promises, async/await, microtasks, macrotasks, and process.nextTick(). There is one more scheduling mechanism that is unique to Node.js and often appears in interviews as well as production code: `setImmediate()`."
          },
          {
            type: "paragraph",
            content: "Many beginners assume that `setImmediate()` is simply another version of `setTimeout(fn, 0)`. Although they sometimes produce similar results, they are not the same. They belong to different Event Loop phases, have different execution guarantees, and are useful in different situations."
          },
          {
            type: "paragraph",
            content: "Understanding when `setImmediate()` executes, how it interacts with I/O operations, and how it differs from `setTimeout()` and `process.nextTick()` will give you a much deeper understanding of the Node.js Event Loop."
          }
        ]
      },
      {
        heading: "What is setImmediate()?",
        blocks: [
          {
            type: "paragraph",
            content: "`setImmediate()` is a Node.js scheduling function that executes a callback during the Check phase of the Event Loop, immediately after the Poll phase completes."
          },
          {
            type: "paragraph",
            content: "Syntax:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(callback);`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setImmediate(() => {
    console.log("Immediate");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Like timers, `setImmediate()` does not execute immediately. Instead, it schedules the callback to run during the Check phase of the next Event Loop iteration."
          }
        ]
      },
      {
        heading: "Why Does setImmediate() Exist?",
        blocks: [
          {
            type: "paragraph",
            content: "Before `setImmediate()` existed, developers often used:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(fn, 0);`
          },
          {
            type: "paragraph",
            content: "to defer work."
          },
          {
            type: "paragraph",
            content: "However, `setTimeout(fn, 0)` still uses the Timers phase, meaning its execution depends on timer scheduling and minimum timeout delays."
          },
          {
            type: "paragraph",
            content: "Node.js introduced `setImmediate()` to provide a way to say:"
          },
          {
            type: "quote",
            content: "Execute this callback as soon as the current Poll phase finishes."
          },
          {
            type: "paragraph",
            content: "This gives developers a more predictable way to defer execution without relying on timers."
          }
        ]
      },
      {
        heading: "The Check Phase",
        blocks: [
          {
            type: "paragraph",
            content: "The Node.js Event Loop consists of multiple phases."
          },
          {
            type: "paragraph",
            content: "A simplified version looks like this:"
          },
          {
            type: "code",
            language: "text",
            content: `Timers
    │
    ▼
Pending Callbacks
    │
    ▼
Idle / Prepare
    │
    ▼
Poll
    │
    ▼
Check
    │
    ▼
Close Callbacks`
          },
          {
            type: "paragraph",
            content: "`setImmediate()` callbacks are executed only during the Check phase."
          },
          {
            type: "paragraph",
            content: "Whenever the Event Loop reaches this phase, Node executes every callback that was scheduled using `setImmediate()`."
          }
        ]
      },
      {
        heading: "Basic Example",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `console.log("A");

setImmediate(() => {
    console.log("B");
});

console.log("C");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "A",
              "C",
              "B"
            ]
          },
          {
            type: "paragraph",
            content: "Execution flow:"
          },
          {
            type: "paragraph",
            content: "Current Call Stack"
          },
          {
            type: "code",
            language: "text",
            content: `A
C`
          },
          {
            type: "paragraph",
            content: "↓"
          },
          {
            type: "paragraph",
            content: "Check Phase"
          },
          {
            type: "code",
            language: "text",
            content: `B`
          }
        ]
      },
      {
        heading: "Multiple setImmediate() Calls",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(() => {
    console.log("First");
});

setImmediate(() => {
    console.log("Second");
});

setImmediate(() => {
    console.log("Third");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "First",
              "Second",
              "Third"
            ]
          },
          {
            type: "paragraph",
            content: "Callbacks execute in FIFO (First In, First Out) order."
          }
        ]
      },
      {
        heading: "Understanding the Event Loop Position",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we schedule different asynchronous operations."
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setImmediate(() => {
    console.log("Immediate");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "A common output is:"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "nextTick",
              "Promise",
              "Timeout",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Execution order:"
          },
          {
            type: "code",
            language: "text",
            content: `Current JavaScript
    │
    ▼
Next Tick Queue
    │
    ▼
Promise Microtasks
    │
    ▼
Timers Phase
    │
    ▼
Check Phase`
          },
          {
            type: "paragraph",
            content: "Notice that `setImmediate()` executes after timers in this particular example."
          },
          {
            type: "paragraph",
            content: "However, as you'll learn shortly, this order is not always guaranteed."
          }
        ]
      },
      {
        heading: "setImmediate() vs setTimeout(fn, 0)",
        blocks: [
          {
            type: "paragraph",
            content: "This is one of the most frequently asked Node.js interview questions."
          },
          {
            type: "paragraph",
            content: "Many developers think these are identical."
          },
          {
            type: "paragraph",
            content: "They are not."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(() => {
    console.log("Timeout");
}, 0);

setImmediate(() => {
    console.log("Immediate");
});`
          },
          {
            type: "paragraph",
            content: "Possible Output 1"
          },
          {
            type: "output",
            content: [
              "Timeout",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Possible Output 2"
          },
          {
            type: "output",
            content: [
              "Immediate",
              "Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "Because they belong to different Event Loop phases."
          },
          {
            type: "table",
            headers: ["Function", "Event Loop Phase"],
            rows: [
              ["setTimeout()", "Timers"],
              ["setImmediate()", "Check"]
            ]
          },
          {
            type: "paragraph",
            content: "From top-level code, the order is not guaranteed. It depends on how quickly the Event Loop reaches each phase."
          }
        ]
      },
      {
        heading: "The Important Difference",
        blocks: [
          {
            type: "paragraph",
            content: "`setTimeout(fn, 0)` means:"
          },
          {
            type: "quote",
            content: "Run after **at least** 0 milliseconds during the Timers phase."
          },
          {
            type: "paragraph",
            content: "`setImmediate()` means:"
          },
          {
            type: "quote",
            content: "Run during the next Check phase after the Poll phase completes."
          },
          {
            type: "paragraph",
            content: "Although both defer execution, they are scheduled differently."
          }
        ]
      },
      {
        heading: "I/O Interaction",
        blocks: [
          {
            type: "paragraph",
            content: "This is where `setImmediate()` becomes much more predictable."
          },
          {
            type: "paragraph",
            content: "Consider:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const fs = require("fs");

fs.readFile("test.txt", () => {
    setTimeout(() => {
        console.log("Timeout");
    }, 0);

    setImmediate(() => {
        console.log("Immediate");
    });
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Immediate",
              "Timeout"
            ]
          },
          {
            type: "paragraph",
            content: "Why?"
          },
          {
            type: "paragraph",
            content: "The file read callback executes during the Poll phase."
          },
          {
            type: "paragraph",
            content: "After the Poll phase completes, the Event Loop immediately enters the Check phase, where `setImmediate()` callbacks are processed before returning to the Timers phase."
          },
          {
            type: "paragraph",
            content: "This makes `setImmediate()` the preferred choice when scheduling work immediately after an I/O operation."
          }
        ]
      },
      {
        heading: "Visualizing I/O Execution",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose:"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile(...)`
          },
          {
            type: "paragraph",
            content: "Execution:"
          },
          {
            type: "code",
            language: "text",
            content: `Poll Phase
    │
    ▼
File callback executes
    │
    ▼
Check Phase
    │
    ▼
setImmediate()
    │
    ▼
Next Event Loop iteration
    │
    ▼
Timers`
          },
          {
            type: "paragraph",
            content: "This is why `setImmediate()` almost always wins over `setTimeout(fn, 0)` inside I/O callbacks."
          }
        ]
      },
      {
        heading: "setImmediate() vs process.nextTick()",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(() => {
    console.log("Immediate");
});

process.nextTick(() => {
    console.log("nextTick");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "nextTick",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Reason:"
          },
          {
            type: "paragraph",
            content: "`process.nextTick()` does not wait for the Event Loop phases."
          },
          {
            type: "paragraph",
            content: "It executes immediately after the current JavaScript finishes."
          },
          {
            type: "paragraph",
            content: "Execution order:"
          },
          {
            type: "code",
            language: "text",
            content: `Current Code
    │
    ▼
Next Tick Queue
    │
    ▼
Event Loop
    │
    ▼
Check Phase`
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "Another example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `console.log("Start");

setImmediate(() => {
    console.log("Immediate");
});

process.nextTick(() => {
    console.log("Tick");
});

console.log("End");`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Start",
              "End",
              "Tick",
              "Immediate"
            ]
          }
        ]
      },
      {
        heading: "setImmediate() vs Promise Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(() => {
    console.log("Immediate");
});

Promise.resolve().then(() => {
    console.log("Promise");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Promise",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Reason:"
          },
          {
            type: "paragraph",
            content: "Promise callbacks are microtasks."
          },
          {
            type: "paragraph",
            content: "Microtasks always execute before the Event Loop proceeds to the Check phase."
          },
          {
            type: "paragraph",
            content: "Execution order:"
          },
          {
            type: "code",
            language: "text",
            content: `Current Code
    │
    ▼
Next Tick Queue
    │
    ▼
Promise Microtasks
    │
    ▼
Event Loop
    │
    ▼
Check Phase`
          }
        ]
      },
      {
        heading: "setImmediate() vs queueMicrotask()",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `queueMicrotask(() => {
    console.log("Microtask");
});

setImmediate(() => {
    console.log("Immediate");
});`
          },
          {
            type: "paragraph",
            content: "Output"
          },
          {
            type: "output",
            content: [
              "Microtask",
              "Immediate"
            ]
          },
          {
            type: "paragraph",
            content: "Microtasks always execute before the Event Loop phases."
          }
        ]
      },
      {
        heading: "Scheduling Long Operations",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you have a CPU-intensive task."
          },
          {
            type: "paragraph",
            content: "Instead of:"
          },
          {
            type: "code",
            language: "javascript",
            content: `for (let i = 0; i < 1000000000; i++) {
    // heavy work
}`
          },
          {
            type: "paragraph",
            content: "you can break it into smaller chunks:"
          },
          {
            type: "code",
            language: "javascript",
            content: `function processChunk() {
    // Process part of the work
    if (moreWorkRemaining) {
        setImmediate(processChunk);
    }
}`
          },
          {
            type: "paragraph",
            content: "This allows the Event Loop to process:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "incoming HTTP requests",
              "timers",
              "file operations",
              "socket events"
            ]
          },
          {
            type: "paragraph",
            content: "between chunks."
          },
          {
            type: "paragraph",
            content: "This technique improves application responsiveness."
          }
        ]
      },
      {
        heading: "Real-World Use Cases",
        blocks: [
          {
            type: "paragraph",
            content: "1. Continue Processing After I/O"
          },
          {
            type: "code",
            language: "javascript",
            content: `fs.readFile("users.json", () => {
    setImmediate(() => {
        processData();
    });
});`
          },
          {
            type: "paragraph",
            content: "The file callback finishes quickly, while heavier processing is deferred to the Check phase."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "2. Prevent Long Blocking Operations"
          },
          {
            type: "paragraph",
            content: "Large loops can block the Event Loop."
          },
          {
            type: "paragraph",
            content: "Splitting work using `setImmediate()` gives other asynchronous tasks an opportunity to run."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "3. Scheduling Non-Urgent Work"
          },
          {
            type: "paragraph",
            content: "Suppose an HTTP request completes."
          },
          {
            type: "paragraph",
            content: "Instead of immediately performing logging:"
          },
          {
            type: "code",
            language: "javascript",
            content: `res.send(data);

setImmediate(() => {
    writeLogs();
});`
          },
          {
            type: "paragraph",
            content: "The response reaches the client first, while logging happens shortly afterward."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "4. Building Responsive CLI Applications"
          },
          {
            type: "paragraph",
            content: "Interactive terminal applications often perform small deferred updates using `setImmediate()` to avoid blocking user input."
          }
        ]
      },
      {
        heading: "Common Misconceptions",
        blocks: [
          {
            type: "paragraph",
            content: "⁂ setImmediate() Executes Immediately"
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "It executes during the Check phase."
          },
          {
            type: "paragraph",
            content: "Current JavaScript always finishes first."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "⁂ It Is the Same as setTimeout(fn, 0)"
          },
          {
            type: "paragraph",
            content: "False."
          },
          {
            type: "paragraph",
            content: "Different Event Loop phases."
          },
          {
            type: "paragraph",
            content: "Different scheduling behavior."
          },
          {
            type: "paragraph",
            content: "Different guarantees after I/O."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "⁂ It Is Faster Than setTimeout()"
          },
          {
            type: "paragraph",
            content: "Not necessarily."
          },
          {
            type: "paragraph",
            content: "It simply belongs to a different scheduling phase."
          },
          {
            type: "paragraph",
            content: "Neither should be chosen solely because it appears \"faster.\""
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "⁂ It Exists in Browsers"
          },
          {
            type: "paragraph",
            content: "Modern browsers do not provide the Node.js `setImmediate()` API."
          },
          {
            type: "paragraph",
            content: "Historically, a few environments experimented with similar APIs, but they are not part of the standard Web platform. If you need cross-platform scheduling, use alternatives such as `queueMicrotask()`, Promises, or `setTimeout()` depending on the behavior you need."
          }
        ]
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "paragraph",
            content: "⁂ Using setTimeout(fn, 0) After I/O"
          },
          {
            type: "paragraph",
            content: "After file operations, sockets, or database callbacks:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setImmediate()`
          },
          {
            type: "paragraph",
            content: "is usually the clearer and more predictable choice."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "⁂ Using process.nextTick() Instead"
          },
          {
            type: "paragraph",
            content: "Some developers replace everything with:"
          },
          {
            type: "code",
            language: "javascript",
            content: `process.nextTick(...)`
          },
          {
            type: "paragraph",
            content: "This can lead to Event Loop starvation."
          },
          {
            type: "paragraph",
            content: "`setImmediate()` allows the Event Loop to continue processing other work."
          },
          {
            type: "divider"
          },
          {
            type: "paragraph",
            content: "⁂ Assuming Execution Order"
          },
          {
            type: "paragraph",
            content: "Never write code that depends on:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setTimeout(...,0)`
          },
          {
            type: "paragraph",
            content: "always executing before:"
          },
          {
            type: "code",
            language: "javascript",
            content: `setImmediate(...)`
          },
          {
            type: "paragraph",
            content: "At the top level, Node.js does not guarantee their ordering."
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
              "Use `setImmediate()` when you want to schedule work **after the current Poll phase**, especially after I/O callbacks.",
              "Prefer `setImmediate()` over `setTimeout(fn, 0)` when the intent is \"run on the next Event Loop iteration\" rather than \"run after a delay.\"",
              "Use `process.nextTick()` only for specialized Node.js scheduling needs, not as a general replacement for `setImmediate()`.",
              "Avoid relying on the execution order between `setTimeout(fn, 0)` and `setImmediate()` from top-level code.",
              "Break large CPU-intensive tasks into smaller chunks using `setImmediate()` to keep the Event Loop responsive.",
              "Keep callbacks short so the Check phase is not blocked for long periods.",
              "Remember that Promise callbacks and `process.nextTick()` callbacks always execute before `setImmediate()`."
            ]
          }
        ]
      },
      {
        heading: "Choosing the Right Scheduling API",
        blocks: [
          {
            type: "table",
            headers: ["If you want to...", "Use"],
            rows: [
              ["Execute immediately after the current function", "`process.nextTick()`"],
              ["Schedule a Promise-based microtask", "`Promise.then()` / `queueMicrotask()`"],
              ["Run after the current Poll phase", "`setImmediate()`"],
              ["Run after a minimum delay", "`setTimeout()`"],
              ["Execute repeatedly at fixed intervals", "`setInterval()`"]
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
              "`setImmediate()` is a Node.js-specific scheduling API that executes callbacks during the Check phase of the Event Loop.",
              "It is designed to defer execution until the current Event Loop iteration has completed, making it particularly useful after I/O operations.",
              "Unlike `setTimeout(fn, 0)`, `setImmediate()` does not use the Timers phase and therefore behaves differently.",
              "The execution order between `setImmediate()` and `setTimeout(fn, 0)` is not guaranteed when scheduled from top-level code.",
              "Inside I/O callbacks, `setImmediate()` usually executes before `setTimeout(fn, 0)` because the Event Loop proceeds directly from the Poll phase to the Check phase.",
              "`process.nextTick()` and Promise callbacks always execute before `setImmediate()` because they are processed before the Event Loop continues to its phases.",
              "`setImmediate()` is a valuable tool for improving responsiveness by deferring non-urgent work without blocking the Event Loop."
            ]
          }
        ]
      },
      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 One of the most subtle yet important insights about `setImmediate()` is that its name can be misleading. \"Immediate\" suggests that the callback runs immediately, but it actually runs during the next Event Loop iteration's Check phase. This is why `process.nextTick()`—which runs before the Event Loop even continues—is actually more \"immediate\" than `setImmediate()`. The naming confusion often trips up developers, but understanding the actual behavior is far more important than memorizing the name. Another often-overlooked point is that `setImmediate()` is ideal for breaking up long-running synchronous operations without starving the Event Loop. By using `setImmediate()` to schedule the next chunk of work, you allow the Event Loop to process pending I/O, timers, and network requests between chunks, keeping your application responsive. This pattern is widely used in production Node.js applications that process large datasets, perform batch operations, or handle CPU-intensive tasks without blocking the main thread."
          }
        ]
      },
      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned that `setImmediate()` is a Node.js-specific scheduling function that executes callbacks during the Check phase of the Event Loop, immediately after the Poll phase completes. You explored how it differs from `setTimeout(fn, 0)`, why their execution order is not guaranteed from top-level code, and how `setImmediate()` becomes more predictable inside I/O callbacks."
          },
          {
            type: "paragraph",
            content: "You also learned how `setImmediate()` compares to `process.nextTick()`, Promise microtasks, and `queueMicrotask()`, and why it is useful for deferring non-urgent work, breaking up long-running operations, and improving application responsiveness. By understanding the Check phase and where `setImmediate()` fits into the Event Loop, you can make more informed scheduling decisions and write more efficient Node.js applications."
          },
          {
            type: "paragraph",
            content: "This concludes our exploration of Node.js asynchronous scheduling mechanisms. You now have a comprehensive understanding of callbacks, Promises, async/await, the Event Loop, microtasks, macrotasks, `process.nextTick()`, and `setImmediate()`. These concepts form the foundation of all non-blocking operations in Node.js and will serve you well as you build production-ready applications."
          }
        ]
      }
    ]
  },
};

export default nodejsAsynchronousProgramming;