const graphicsVisualContent = {

/* ===========================
    First Topic : HTML Canvas
============================= */
    "html-canvas": {
    title: "HTML Canvas",
    readingTime: "23 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "The <canvas> element is one of the most powerful features introduced in HTML5. It provides a drawable area on a web page where developers can create graphics, animations, games, charts, image processing tools, visualizations, and even complex applications directly inside the browser."
          },

          {
            type: "paragraph",
            content: "Unlike most HTML elements that represent content such as text, images, and forms, a canvas starts as an empty rectangular area. JavaScript is then used to draw and manipulate content inside it."
          },

          {
            type: "paragraph",
            content: "Think of a canvas as a digital drawing board. HTML creates the board, while JavaScript acts as the pencil, brush, and paint."
          }

        ]
      },

      {
        heading: "What is HTML Canvas?",

        blocks: [

          {
            type: "paragraph",
            content: "The HTML Canvas element is used to draw graphics dynamically using JavaScript."
          },

          {
            type: "paragraph",
            content: "Basic syntax:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas id="myCanvas" width="500" height="300"></canvas>`
          },

          {
            type: "paragraph",
            content: "This creates an empty drawing area that is 500 pixels wide and 300 pixels high."
          },

          {
            type: "paragraph",
            content: "By itself, nothing appears inside the canvas. JavaScript is required to draw content."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas id="myCanvas" width="300" height="200"></canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 80);
</script>`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "paragraph",
            content: "A blue rectangle appears inside the canvas."
          }

        ]
      },

      {
        heading: "Why Was Canvas Introduced?",

        blocks: [

          {
            type: "paragraph",
            content: "Before HTML5, creating graphics often required:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Flash",
              "Java Applets",
              "Silverlight",
              "Third-party plugins"
            ]
          },

          {
            type: "paragraph",
            content: "These technologies had several drawbacks:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Required installation",
              "Poor mobile support",
              "Security concerns",
              "Performance issues"
            ]
          },

          {
            type: "paragraph",
            content: "Canvas solved these problems by allowing browsers to render graphics natively."
          }

        ]
      },

      {
        heading: "How Canvas Works Internally",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas uses a bitmap-based rendering system."
          },

          {
            type: "paragraph",
            content: "When you draw on a canvas:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browser creates a pixel grid.",
              "JavaScript sends drawing commands.",
              "Browser paints pixels onto the grid.",
              "The drawing becomes part of the bitmap."
            ]
          },

          {
            type: "paragraph",
            content: "Unlike normal HTML elements:"
          },

          {
            type: "code",
            language: "html",
            content: `<div>Hello</div>`
          },

          {
            type: "paragraph",
            content: "which remain editable DOM elements, canvas drawings become pixels."
          },

          {
            type: "paragraph",
            content: "The browser does not remember individual shapes after drawing them."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillRect(10, 10, 100, 50);`
          },

          {
            type: "paragraph",
            content: "The browser remembers only the painted pixels, not the rectangle object."
          },

          {
            type: "paragraph",
            content: "This is one reason canvas is extremely fast."
          }

        ]
      },

      {
        heading: "Canvas vs SVG",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners confuse Canvas and SVG."
          },

          {
            type: "table",
            headers: [
              "Canvas",
              "SVG"
            ],

            rows: [
              ["Pixel-based", "Vector-based"],
              ["Controlled by JavaScript", "Controlled by XML/HTML"],
              ["Better for games", "Better for icons"],
              ["Faster for thousands of objects", "Better for static graphics"],
              ["Resolution dependent", "Resolution independent"],
              ["Not easily editable after drawing", "Elements remain editable"]
            ]
          },

          {
            type: "comparison",
            leftTitle: "Use Canvas When",
            leftItems: [
              "Building games",
              "Creating animations",
              "Data visualization",
              "Image editing",
              "Particle effects"
            ],
            rightTitle: "Use SVG When",
            rightItems: [
              "Logos",
              "Icons",
              "Charts",
              "Diagrams",
              "Responsive illustrations"
            ]
          }

        ]
      },

      {
        heading: "Creating a Canvas",

        blocks: [

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas id="board" width="600" height="400"></canvas>`
          },

          {
            type: "paragraph",
            content: "Important attributes:"
          },

          {
            type: "table",
            headers: [
              "Attribute",
              "Purpose"
            ],

            rows: [
              ["id", "Identifies canvas"],
              ["width", "Canvas width"],
              ["height", "Canvas height"]
            ]
          }

        ]
      },

      {
        heading: "Getting the Drawing Context",

        blocks: [

          {
            type: "paragraph",
            content: "The drawing context is the object used to draw graphics."
          },

          {
            type: "code",
            language: "javascript",
            content: `const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");`
          },

          {
            type: "paragraph",
            content: "The \"2d\" context enables two-dimensional drawing."
          },

          {
            type: "paragraph",
            content: "Canvas also supports:"
          },

          {
            type: "code",
            language: "javascript",
            content: `canvas.getContext("webgl");`
          },

          {
            type: "paragraph",
            content: "for 3D graphics."
          }

        ]
      },

      {
        heading: "Drawing Rectangles",

        blocks: [

          {
            type: "paragraph",
            content: "Filled Rectangle"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillRect(20, 20, 150, 100);`
          },

          {
            type: "paragraph",
            content: "Parameters:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "x-position",
              "y-position",
              "width",
              "height"
            ]
          },

          {
            type: "paragraph",
            content: "Change Color"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "red";
ctx.fillRect(20,20,150,100);`
          },

          {
            type: "paragraph",
            content: "Outlined Rectangle"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.strokeRect(20,20,150,100);`
          },

          {
            type: "paragraph",
            content: "Clear Area"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.clearRect(20,20,150,100);`
          },

          {
            type: "paragraph",
            content: "Removes drawn content."
          }

        ]
      },

      {
        heading: "Drawing Lines",

        blocks: [

          {
            type: "code",
            language: "javascript",
            content: `ctx.beginPath();

ctx.moveTo(50,50);
ctx.lineTo(200,100);

ctx.stroke();`
          },

          {
            type: "paragraph",
            content: "Output:"
          },

          {
            type: "paragraph",
            content: "A straight line appears."
          },

          {
            type: "paragraph",
            content: "Line Width"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.lineWidth = 5;`
          },

          {
            type: "paragraph",
            content: "Line Color"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.strokeStyle = "green";`
          }

        ]
      },

      {
        heading: "Drawing Circles",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas does not have a direct circle method."
          },

          {
            type: "paragraph",
            content: "Instead, circles are created using arcs."
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.beginPath();

ctx.arc(
100,
100,
50,
0,
2 * Math.PI
);

ctx.stroke();`
          },

          {
            type: "paragraph",
            content: "Parameters:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "x-coordinate",
              "y-coordinate",
              "radius",
              "start angle",
              "end angle"
            ]
          }

        ]
      },

      {
        heading: "Drawing Text",

        blocks: [

          {
            type: "paragraph",
            content: "Filled Text"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.font = "30px Arial";

ctx.fillText(
"Hello Canvas",
50,
100
);`
          },

          {
            type: "paragraph",
            content: "Outlined Text"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.strokeText(
"Hello Canvas",
50,
150
);`
          },

          {
            type: "paragraph",
            content: "Text Color"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "purple";`
          }

        ]
      },

      {
        heading: "Drawing Paths",

        blocks: [

          {
            type: "paragraph",
            content: "Complex shapes are created using paths."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.beginPath();

ctx.moveTo(100,50);
ctx.lineTo(150,150);
ctx.lineTo(50,150);

ctx.closePath();

ctx.stroke();`
          },

          {
            type: "paragraph",
            content: "This creates a triangle."
          }

        ]
      },

      {
        heading: "Drawing Images",

        blocks: [

          {
            type: "paragraph",
            content: "Images can be drawn directly on a canvas."
          },

          {
            type: "paragraph",
            content: "HTML:"
          },

          {
            type: "code",
            language: "html",
            content: `<img id="img" src="photo.jpg" hidden>`
          },

          {
            type: "paragraph",
            content: "JavaScript:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const img = document.getElementById("img");

img.onload = function() {
    ctx.drawImage(
        img,
        50,
        50
    );
};`
          },

          {
            type: "paragraph",
            content: "Cropping Images"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.drawImage(
img,
50,
50,
200,
150
);`
          },

          {
            type: "paragraph",
            content: "Resize while drawing."
          }

        ]
      },

      {
        heading: "Canvas Colors",

        blocks: [

          {
            type: "paragraph",
            content: "Colors can be defined using:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Color Names"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "red";`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Hex"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "#00ff00";`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "RGB"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "rgb(255,0,0)";`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "RGBA"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.fillStyle = "rgba(255,0,0,0.5)";`
          }

        ]
      },

      {
        heading: "Gradients",

        blocks: [

          {
            type: "paragraph",
            content: "Linear Gradient"
          },

          {
            type: "code",
            language: "javascript",
            content: `const gradient =
ctx.createLinearGradient(
0,0,200,0
);

gradient.addColorStop(0,"red");
gradient.addColorStop(1,"blue");

ctx.fillStyle = gradient;

ctx.fillRect(20,20,200,100);`
          },

          {
            type: "paragraph",
            content: "Radial Gradient"
          },

          {
            type: "code",
            language: "javascript",
            content: `const gradient =
ctx.createRadialGradient(
100,100,20,
100,100,80
);`
          },

          {
            type: "paragraph",
            content: "Creates circular color transitions."
          }

        ]
      },

      {
        heading: "Shadows",

        blocks: [

          {
            type: "code",
            language: "javascript",
            content: `ctx.shadowColor = "black";

ctx.shadowBlur = 10;

ctx.shadowOffsetX = 5;

ctx.shadowOffsetY = 5;`
          },

          {
            type: "paragraph",
            content: "Useful for UI effects."
          }

        ]
      },

      {
        heading: "Canvas Transformations",

        blocks: [

          {
            type: "paragraph",
            content: "Transformations modify how objects are drawn."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Translate"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.translate(100,50);`
          },

          {
            type: "paragraph",
            content: "Moves coordinate system."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Rotate"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.rotate(Math.PI / 4);`
          },

          {
            type: "paragraph",
            content: "Rotates 45°."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Scale"
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.scale(2,2);`
          },

          {
            type: "paragraph",
            content: "Doubles size."
          }

        ]
      },

      {
        heading: "Save and Restore State",

        blocks: [

          {
            type: "code",
            language: "javascript",
            content: `ctx.save();`
          },

          {
            type: "paragraph",
            content: "Stores current settings."
          },

          {
            type: "code",
            language: "javascript",
            content: `ctx.restore();`
          },

          {
            type: "paragraph",
            content: "Restores previous settings."
          },

          {
            type: "paragraph",
            content: "Useful when drawing multiple objects."
          }

        ]
      },

      {
        heading: "Animations",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas is widely used for animations."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `let x = 0;

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillRect(
        x,
        50,
        50,
        50
    );

    x++;

    requestAnimationFrame(
        animate
    );
}

animate();`
          },

          {
            type: "paragraph",
            content: "This moves a square across the screen."
          }

        ]
      },

      {
        heading: "Why requestAnimationFrame?",

        blocks: [

          {
            type: "paragraph",
            content: "Older method:"
          },

          {
            type: "output",
            content: [
              "setInterval()"
            ]
          },

          {
            type: "paragraph",
            content: "Modern method:"
          },

          {
            type: "output",
            content: [
              "requestAnimationFrame()"
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
              "Smoother animations",
              "Better performance",
              "Reduced CPU usage",
              "Syncs with screen refresh rate"
            ]
          }

        ]
      },

      {
        heading: "Creating Simple Game Loops",

        blocks: [

          {
            type: "paragraph",
            content: "Most canvas games follow:"
          },

          {
            type: "code",
            language: "javascript",
            content: `function gameLoop() {

    update();

    draw();

    requestAnimationFrame(
        gameLoop
    );
}`
          },

          {
            type: "paragraph",
            content: "This pattern powers:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Platform games",
              "Racing games",
              "Puzzle games",
              "Simulations"
            ]
          }

        ]
      },

      {
        heading: "Canvas and User Interaction",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas can respond to user events."
          },

          {
            type: "code",
            language: "javascript",
            content: `canvas.addEventListener(
"click",
function(event){
    console.log("Clicked");
}
);`
          },

          {
            type: "paragraph",
            content: "You can build:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Paint applications",
              "Drawing tools",
              "Games",
              "Interactive charts"
            ]
          }

        ]
      },

      {
        heading: "High-DPI (Retina) Displays",

        blocks: [

          {
            type: "paragraph",
            content: "Many tutorials ignore this important topic."
          },

          {
            type: "paragraph",
            content: "Problem:"
          },

          {
            type: "paragraph",
            content: "A canvas may appear blurry on Retina displays."
          },

          {
            type: "paragraph",
            content: "Solution:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const ratio =
window.devicePixelRatio;

canvas.width =
500 * ratio;

canvas.height =
300 * ratio;

ctx.scale(
ratio,
ratio
);`
          },

          {
            type: "paragraph",
            content: "This produces sharper graphics."
          }

        ]
      },

      {
        heading: "Canvas Performance Optimization",

        blocks: [

          {
            type: "paragraph",
            content: "For complex projects:"
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Minimize Redrawing"
          },

          {
            type: "paragraph",
            content: "Redraw only changed areas."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use Offscreen Canvas"
          },

          {
            type: "paragraph",
            content: "Render graphics in memory first."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Reduce Expensive Operations"
          },

          {
            type: "paragraph",
            content: "Avoid:"
          },

          {
            type: "output",
            content: [
              "shadowBlur"
            ]
          },

          {
            type: "paragraph",
            content: "inside large animation loops."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Cache Images"
          },

          {
            type: "paragraph",
            content: "Load images once and reuse them."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Use requestAnimationFrame"
          },

          {
            type: "paragraph",
            content: "Instead of:"
          },

          {
            type: "output",
            content: [
              "setInterval()"
            ]
          }

        ]
      },

      {
        heading: "Canvas Accessibility Limitations",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas content is not inherently accessible."
          },

          {
            type: "paragraph",
            content: "Screen readers cannot understand drawn pixels."
          },

          {
            type: "paragraph",
            content: "Bad:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas></canvas>`
          },

          {
            type: "paragraph",
            content: "Better:"
          },

          {
            type: "code",
            language: "html",
            content: `<canvas>
    Browser not supported.
</canvas>`
          },

          {
            type: "paragraph",
            content: "For critical information:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Provide text alternatives",
              "Add ARIA labels",
              "Avoid canvas-only interfaces"
            ]
          }

        ]
      },

      {
        heading: "Canvas Security: Tainted Canvas",

        blocks: [

          {
            type: "paragraph",
            content: "An advanced topic rarely covered in beginner tutorials."
          },

          {
            type: "paragraph",
            content: "Suppose you load an image from another domain:"
          },

          {
            type: "code",
            language: "javascript",
            content: `drawImage(externalImage);`
          },

          {
            type: "paragraph",
            content: "The browser may mark the canvas as \"tainted.\""
          },

          {
            type: "paragraph",
            content: "Then:"
          },

          {
            type: "code",
            language: "javascript",
            content: `canvas.toDataURL()`
          },

          {
            type: "paragraph",
            content: "will fail."
          },

          {
            type: "paragraph",
            content: "Reason:"
          },

          {
            type: "paragraph",
            content: "Preventing unauthorized access to cross-origin resources."
          },

          {
            type: "paragraph",
            content: "Solution:"
          },

          {
            type: "paragraph",
            content: "Enable CORS on the image source."
          }

        ]
      },

      {
        heading: "Real-World Uses of Canvas",

        blocks: [

          {
            type: "paragraph",
            content: "Canvas powers many modern applications:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Games: Browser games, Multiplayer games, Physics simulations",
              "Data Visualization: Charts, Dashboards, Financial graphs",
              "Image Editing: Filters, Cropping tools",
              "Drawing apps: Whiteboards, Collaborative drawing platforms",
              "Visual Effects: Particle systems, Fire effects, Snow effects",
              "Mapping Systems: GIS applications, Interactive maps"
            ]
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
                question: "Forgetting Width and Height",
                answer: "Canvas defaults to 300 × 150 if width and height are not provided.",
                examples: [
                  {
                    title: "Wrong",
                    language: "html",
                    content: `<canvas></canvas>`
                  }
                ]
              },
              {
                question: "Using CSS Instead of Attributes",
                answer: "Using CSS stretches the bitmap rather than changing the coordinate system.",
                examples: [
                  {
                    title: "Wrong",
                    language: "css",
                    content: `canvas {\n    width:600px;\n    height:400px;\n}`
                  },
                  {
                    title: "Correct",
                    language: "html",
                    content: `<canvas\nwidth="600"\nheight="400">\n</canvas>`
                  }
                ]
              },
              {
                question: "Forgetting beginPath()",
                answer: "Can cause unexpected connections between shapes."
              },
              {
                question: "Using setInterval for Animations",
                answer: "Use requestAnimationFrame() instead for better performance."
              },
              {
                question: "Redrawing Entire Scenes Unnecessarily",
                answer: "Can severely reduce performance."
              }
            ]
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "After mastering HTML Canvas, continue with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Canvas 2D API",
              "Canvas Animations",
              "Game Development",
              "Collision Detection",
              "Particle Systems",
              "Image Processing",
              "WebGL",
              "Three.js",
              "Data Visualization Libraries",
              "Interactive Graphics Applications"
            ]
          }

        ]
      },

      {
        heading: "Summary",

        blocks: [

          {
            type: "paragraph",
            content: "HTML Canvas is a powerful HTML5 feature that enables developers to create graphics dynamically using JavaScript. Unlike normal HTML elements, canvas operates on pixels, making it ideal for games, animations, visualizations, drawing applications, and image processing tools. By understanding drawing contexts, shapes, text rendering, transformations, animations, performance optimization, accessibility concerns, and browser internals, developers can create highly interactive and visually rich web applications directly inside the browser without relying on external plugins."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 An important detail about Canvas coordinates: Unlike standard math graphs where the origin `(0,0)` is at the bottom-left, the Canvas origin `(0,0)` is at the **top-left** corner of the element. The `x` axis increases to the right, and the `y` axis increases as you move **down**."
          }

        ]
      }
    ]
  },




  /* ===========================
    Second Topic : HTML SVG
============================= */
    "html-svg": {
    title: "HTML SVG",
    readingTime: "23 min",
        
    content: [
        {
        heading: "Introduction",

        blocks: [

          {
            type: "paragraph",
            content: "Modern websites use graphics everywhere—logos, icons, charts, illustrations, animations, infographics, maps, diagrams, and UI elements. Traditionally, these graphics were created using image formats such as JPG, PNG, or GIF. However, these formats can become blurry when enlarged and often require multiple versions for different screen sizes."
          },

          {
            type: "paragraph",
            content: "This is where SVG (Scalable Vector Graphics) becomes important."
          },

          {
            type: "paragraph",
            content: "SVG is an XML-based vector image format used to create graphics directly in web pages. Unlike normal images that are made of pixels, SVG graphics are made of mathematical shapes such as lines, curves, circles, and polygons. Because of this, SVG images can be scaled to any size without losing quality."
          },

          {
            type: "paragraph",
            content: "SVG is one of the most important technologies in modern frontend development and is widely used in professional websites, web applications, dashboards, design systems, and mobile interfaces."
          }

        ]
      },

      {
        heading: "What is SVG?",

        blocks: [

          {
            type: "paragraph",
            content: "SVG stands for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Scalable",
              "Vector",
              "Graphics"
            ]
          },

          {
            type: "paragraph",
            content: "It is a W3C standard for describing two-dimensional graphics using XML markup."
          },

          {
            type: "paragraph",
            content: "An SVG image is not stored as pixels. Instead, it stores instructions describing shapes and paths."
          },

          {
            type: "paragraph",
            content: "For example:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "A circle is stored as a circle definition.",
              "A rectangle is stored as width and height values.",
              "A line is stored as start and end coordinates."
            ]
          },

          {
            type: "paragraph",
            content: "When the browser renders the image, it draws these shapes dynamically."
          }

        ]
      },

      {
        heading: "Why SVG Was Created",

        blocks: [

          {
            type: "paragraph",
            content: "Before SVG became popular, web developers primarily used:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "JPG",
              "PNG",
              "GIF"
            ]
          },

          {
            type: "paragraph",
            content: "These formats work well for photographs but have limitations:"
          },

          {
            type: "paragraph",
            content: "Problems with Raster Images"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Lose quality when enlarged",
              "Require multiple resolutions",
              "Larger file sizes for simple graphics",
              "Hard to edit dynamically",
              "Cannot easily animate individual parts"
            ]
          },

          {
            type: "paragraph",
            content: "SVG solves these issues by storing graphics as mathematical instructions."
          }

        ]
      },

      {
        heading: "SVG vs Raster Images",

        blocks: [

          {
            type: "table",
            headers: [
              "Feature",
              "SVG",
              "PNG/JPG"
            ],

            rows: [
              ["Scalable", "Yes", "No"],
              ["Resolution Independent", "Yes", "No"],
              ["File Size for Icons", "Small", "Larger"],
              ["Editable via Code", "Yes", "No"],
              ["CSS Styling", "Yes", "Limited"],
              ["JavaScript Control", "Yes", "Limited"],
              ["Best for Logos", "Excellent", "Good"],
              ["Best for Photos", "Poor", "Excellent"]
            ]
          }

        ]
      },

      {
        heading: "How SVG Works",

        blocks: [

          {
            type: "paragraph",
            content: "SVG uses XML syntax."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>`
          },

          {
            type: "paragraph",
            content: "The browser interprets:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Create an SVG area",
              "Draw a circle",
              "Position it at the center",
              "Fill it with blue color"
            ]
          },

          {
            type: "paragraph",
            content: "Unlike PNG or JPG, the browser generates the graphic itself."
          }

        ]
      },

      {
        heading: "Basic SVG Structure",

        blocks: [

          {
            type: "code",
            language: "html",
            content: `<svg width="300" height="300">
  SVG content goes here
</svg>`
          },

          {
            type: "paragraph",
            content: "Attributes"
          },

          {
            type: "table",
            headers: [
              "Attribute",
              "Purpose"
            ],

            rows: [
              ["width", "Width of SVG"],
              ["height", "Height of SVG"],
              ["viewBox", "Defines coordinate system"],
              ["xmlns", "XML namespace"],
              ["preserveAspectRatio", "Controls scaling behavior"]
            ]
          }

        ]
      },

      {
        heading: "The viewBox Attribute",

        blocks: [

          {
            type: "paragraph",
            content: "The most important SVG attribute is:"
          },

          {
            type: "code",
            language: "html",
            content: `viewBox="0 0 100 100"`
          },

          {
            type: "paragraph",
            content: "Syntax:"
          },

          {
            type: "output",
            content: [
              "viewBox=\"minX minY width height\""
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<svg viewBox="0 0 100 100">`
          },

          {
            type: "paragraph",
            content: "Meaning:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Start at X = 0",
              "Start at Y = 0",
              "Width = 100 units",
              "Height = 100 units"
            ]
          },

          {
            type: "paragraph",
            content: "Why It Matters"
          },

          {
            type: "paragraph",
            content: "Without viewBox:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "SVG may not scale correctly."
            ]
          },

          {
            type: "paragraph",
            content: "With viewBox:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "SVG becomes responsive.",
              "Shapes remain proportional."
            ]
          },

          {
            type: "paragraph",
            content: "Modern SVG development heavily relies on viewBox."
          }

        ]
      },

      {
        heading: "Creating Basic Shapes",

        blocks: [

          {
            type: "paragraph",
            content: "Rectangle"
          },

          {
            type: "code",
            language: "html",
            content: `<svg width="200" height="100">
  <rect
    x="20"
    y="20"
    width="100"
    height="50"
    fill="red"
  />
</svg>`
          },

          {
            type: "paragraph",
            content: "Produces a rectangle."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Circle"
          },

          {
            type: "code",
            language: "html",
            content: `<svg width="200" height="200">
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
  />
</svg>`
          },

          {
            type: "paragraph",
            content: "Attributes"
          },

          {
            type: "table",
            headers: [
              "Attribute",
              "Meaning"
            ],

            rows: [
              ["cx", "Center X"],
              ["cy", "Center Y"],
              ["r", "Radius"]
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Ellipse"
          },

          {
            type: "code",
            language: "html",
            content: `<ellipse
  cx="150"
  cy="100"
  rx="80"
  ry="40"
  fill="green"
/>`
          },

          {
            type: "paragraph",
            content: "Creates an oval shape."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Line"
          },

          {
            type: "code",
            language: "html",
            content: `<line
  x1="10"
  y1="10"
  x2="200"
  y2="100"
  stroke="black"
  stroke-width="3"
/>`
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Polygon"
          },

          {
            type: "paragraph",
            content: "Creates multiple connected sides."
          },

          {
            type: "code",
            language: "html",
            content: `<polygon
  points="100,10 40,198 190,78 10,78 160,198"
  fill="gold"
/>`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Stars",
              "Badges",
              "Geometric shapes"
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Polyline"
          },

          {
            type: "paragraph",
            content: "Similar to polygon but remains open."
          },

          {
            type: "code",
            language: "html",
            content: `<polyline
  points="20,20 40,25 60,40 80,120"
  fill="none"
  stroke="black"
/>`
          }

        ]
      },

      {
        heading: "SVG Paths",

        blocks: [

          {
            type: "paragraph",
            content: "The most powerful SVG feature is:"
          },

          {
            type: "output",
            content: [
              "<path>"
            ]
          },

          {
            type: "paragraph",
            content: "Almost every complex SVG graphic uses paths."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<path
  d="M10 10 L100 100"
  stroke="black"
/>`
          },

          {
            type: "paragraph",
            content: "Common Path Commands"
          },

          {
            type: "table",
            headers: [
              "Command",
              "Meaning"
            ],

            rows: [
              ["M", "Move To"],
              ["L", "Line To"],
              ["H", "Horizontal Line"],
              ["V", "Vertical Line"],
              ["C", "Cubic Curve"],
              ["Q", "Quadratic Curve"],
              ["A", "Arc"],
              ["Z", "Close Path"]
            ]
          },

          {
            type: "paragraph",
            content: "Paths can create:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Logos",
              "Complex icons",
              "Illustrations",
              "Maps"
            ]
          },

          {
            type: "paragraph",
            content: "Most SVG icons are built entirely using paths."
          }

        ]
      },

      {
        heading: "Adding Text in SVG",

        blocks: [

          {
            type: "paragraph",
            content: "SVG can display text."
          },

          {
            type: "code",
            language: "html",
            content: `<svg width="300" height="100">
  <text
    x="50"
    y="50"
    font-size="30"
  >
    Hello SVG
  </text>
</svg>`
          },

          {
            type: "paragraph",
            content: "Useful for:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Charts",
              "Labels",
              "Infographics",
              "Data visualizations"
            ]
          }

        ]
      },

      {
        heading: "Styling SVG",

        blocks: [

          {
            type: "paragraph",
            content: "SVG supports CSS."
          },

          {
            type: "paragraph",
            content: "Inline:"
          },

          {
            type: "code",
            language: "html",
            content: `<circle fill="blue" />`
          },

          {
            type: "paragraph",
            content: "CSS:"
          },

          {
            type: "code",
            language: "css",
            content: `circle {
  fill: blue;
}`
          },

          {
            type: "paragraph",
            content: "SVG properties:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "fill",
              "stroke",
              "stroke-width",
              "opacity",
              "transform"
            ]
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "css",
            content: `circle {
  fill: red;
  stroke: black;
  stroke-width: 4;
}`
          }

        ]
      },

      {
        heading: "Embedding SVG in HTML",

        blocks: [

          {
            type: "paragraph",
            content: "There are several ways."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 1: Inline SVG"
          },

          {
            type: "code",
            language: "html",
            content: `<svg>\n ...\n</svg>`
          },

          {
            type: "paragraph",
            content: "Advantages"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Editable with CSS",
              "Editable with JavaScript",
              "Best performance"
            ]
          },

          {
            type: "paragraph",
            content: "Most modern applications prefer inline SVG."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 2: Using img Tag"
          },

          {
            type: "code",
            language: "html",
            content: `<img src="logo.svg" alt="Logo">`
          },

          {
            type: "paragraph",
            content: "Advantages:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Simple",
              "Easy caching"
            ]
          },

          {
            type: "paragraph",
            content: "Disadvantage:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Cannot style internal SVG elements."
            ]
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 3: Object Element"
          },

          {
            type: "code",
            language: "html",
            content: `<object data="logo.svg"></object>`
          },

          {
            type: "paragraph",
            content: "Allows interaction with external SVG."
          },

          {
            type: "divider"
          },

          {
            type: "paragraph",
            content: "Method 4: Embed Element"
          },

          {
            type: "code",
            language: "html",
            content: `<embed src="logo.svg">`
          },

          {
            type: "paragraph",
            content: "Less common today."
          }

        ]
      },

      {
        heading: "SVG Animation",

        blocks: [

          {
            type: "paragraph",
            content: "SVG supports animation."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "html",
            content: `<circle r="20">
  <animate
    attributeName="r"
    from="20"
    to="50"
    dur="2s"
    repeatCount="indefinite"
  />
</circle>`
          },

          {
            type: "paragraph",
            content: "Can animate:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Position",
              "Size",
              "Color",
              "Opacity",
              "Rotation"
            ]
          },

          {
            type: "paragraph",
            content: "Modern developers often combine SVG with:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS Animations",
              "JavaScript",
              "GSAP",
              "Framer Motion"
            ]
          }

        ]
      },

      {
        heading: "SVG and JavaScript",

        blocks: [

          {
            type: "paragraph",
            content: "SVG elements belong to the DOM."
          },

          {
            type: "paragraph",
            content: "Example:"
          },

          {
            type: "code",
            language: "javascript",
            content: `const circle =
document.querySelector("circle");

circle.style.fill = "red";`
          },

          {
            type: "paragraph",
            content: "This allows:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Interactive charts",
              "Dynamic maps",
              "Games",
              "Data visualizations"
            ]
          }

        ]
      },

      {
        heading: "SVG Icons",

        blocks: [

          {
            type: "paragraph",
            content: "Most modern icon libraries use SVG:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Heroicons",
              "Lucide",
              "Feather Icons",
              "Font Awesome SVG",
              "Material Icons"
            ]
          },

          {
            type: "paragraph",
            content: "Reasons:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Small size",
              "Sharp rendering",
              "Easy customization",
              "Responsive"
            ]
          }

        ]
      },

      {
        heading: "Browser Internals: How SVG Is Rendered",

        blocks: [

          {
            type: "paragraph",
            content: "When the browser loads SVG:"
          },

          {
            type: "orderedList",
            style: "unordered",
            items: [
              "Parses XML markup.",
              "Creates SVG DOM.",
              "Calculates coordinates.",
              "Draws shapes mathematically.",
              "Applies styles.",
              "Renders graphic."
            ]
          },

          {
            type: "paragraph",
            content: "Unlike PNG:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Browser does not load pixels.",
              "Browser generates graphics dynamically."
            ]
          },

          {
            type: "paragraph",
            content: "This is why SVG scales perfectly."
          }

        ]
      },

      {
        heading: "SVG vs Canvas",

        blocks: [

          {
            type: "paragraph",
            content: "Many beginners confuse SVG and Canvas."
          },

          {
            type: "table",
            headers: [
              "Feature",
              "SVG",
              "Canvas"
            ],

            rows: [
              ["Vector", "Yes", "No"],
              ["DOM Elements", "Yes", "No"],
              ["CSS Styling", "Yes", "Limited"],
              ["Accessibility", "Better", "Poor"],
              ["Large Data Visualization", "Good", "Excellent"],
              ["Games", "Limited", "Excellent"],
              ["Logos & Icons", "Excellent", "Not Ideal"]
            ]
          },

          {
            type: "comparison",
            leftTitle: "Use SVG For",
            leftItems: [
              "Icons",
              "Logos",
              "Charts",
              "Diagrams",
              "UI Graphics"
            ],
            rightTitle: "Use Canvas For",
            rightItems: [
              "Games",
              "Real-time rendering",
              "Particle effects",
              "Image processing"
            ]
          }

        ]
      },

      {
        heading: "Responsive SVG",

        blocks: [

          {
            type: "paragraph",
            content: "Best practice:"
          },

          {
            type: "code",
            language: "html",
            content: `<svg
  viewBox="0 0 500 500"
  width="100%"
>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Scales automatically.",
              "Works on phones.",
              "Works on tablets.",
              "Works on desktops."
            ]
          },

          {
            type: "paragraph",
            content: "This is the modern production approach."
          }

        ]
      },

      {
        heading: "Accessibility in SVG",

        blocks: [

          {
            type: "paragraph",
            content: "Add meaningful descriptions."
          },

          {
            type: "code",
            language: "html",
            content: `<svg
  role="img"
  aria-label="Company Logo"
>`
          },

          {
            type: "paragraph",
            content: "Or:"
          },

          {
            type: "code",
            language: "html",
            content: `<svg>
  <title>Company Logo</title>
</svg>`
          },

          {
            type: "paragraph",
            content: "Benefits:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Screen reader support",
              "Better accessibility",
              "Improved usability"
            ]
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
                question: "Forgetting viewBox",
                answer: "Without it, the SVG will not scale correctly.",
                examples: [
                  {
                    title: "Bad",
                    language: "html",
                    content: `<svg width="500" height="500">`
                  },
                  {
                    title: "Good",
                    language: "html",
                    content: `<svg\n  width="500"\n  height="500"\n  viewBox="0 0 500 500"\n>`
                  }
                ]
              },
              {
                question: "Using PNG Instead of SVG for Icons",
                answer: "Wrong choice for Logos, UI icons, Buttons. SVG provides better scalability."
              },
              {
                question: "Embedding Huge SVG Files",
                answer: "Exported design tools sometimes generate very long paths with unnecessary metadata. Optimize SVG files before deployment."
              },
              {
                question: "Ignoring Accessibility",
                answer: "Always include `<title>` or `aria-label`."
              },
              {
                question: "Using SVG for Large Photographs",
                answer: "SVG is not intended for Camera photos or Real-world images. Use JPG or WebP instead."
              }
            ]
          }

        ]
      },

      {
        heading: "Real-World Use Cases",

        blocks: [

          {
            type: "paragraph",
            content: "SVG is heavily used in:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "Website Logos: Company branding graphics.",
              "UI Icons: Navigation icons, buttons, menus.",
              "Data Visualization: Charts and dashboards.",
              "Maps: Interactive geographical maps.",
              "Infographics: Educational visual content.",
              "Loading Animations: Animated spinners and indicators.",
              "Illustrations: Modern SaaS landing pages frequently use SVG illustrations."
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
              "Always use viewBox",
              "Prefer SVG for logos and icons",
              "Use inline SVG when styling is needed",
              "Optimize SVG files before deployment",
              "Add accessibility information",
              "Use CSS for styling",
              "Keep SVG markup clean",
              "Make SVG responsive",
              "Use SVG over PNG for scalable UI graphics",
              "Use Canvas when rendering thousands of objects"
            ]
          }

        ]
      },

      {
        heading: "Future Learning Connections",

        blocks: [

          {
            type: "paragraph",
            content: "SVG is the foundation for many advanced frontend technologies:"
          },

          {
            type: "list",
            style: "unordered",
            items: [
              "CSS SVG Animations",
              "JavaScript SVG Manipulation",
              "SVG Filters",
              "SVG Masks",
              "SVG Clipping Paths",
              "D3.js Data Visualization",
              "Interactive Charts",
              "Map Rendering",
              "React SVG Components",
              "Framer Motion SVG Animations",
              "Advanced UI Design Systems"
            ]
          },

          {
            type: "paragraph",
            content: "Mastering SVG is an important step toward becoming a professional frontend developer because modern websites rely heavily on scalable, responsive, and interactive vector graphics."
          }

        ]
      },

      {
        heading: "DevSphere Special Note",

        blocks: [

          {
            type: "note",
            content: "💡 A very common trick in modern web development when dealing with inline SVGs is the `currentColor` value. If you set `fill=\"currentColor\"` or `stroke=\"currentColor\"` on an SVG path, the SVG will automatically inherit the CSS `color` property from its parent container (like a `<button>`). This makes building hover effects and dark-mode themes incredibly easy without writing extra CSS specifically for the SVG."
          }

        ]
      }
    ]
  },
};

export default graphicsVisualContent;