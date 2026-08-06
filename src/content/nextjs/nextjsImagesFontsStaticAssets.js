const nextjsImagesFontsStaticAssets = {

/* ===========================
    First Topic : Image Component
============================= */
    "nextjs-image-component": {
    title: "Image Component",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Images are one of the largest contributors to a webpage's loading time. A single unoptimized image can easily be several megabytes in size, causing slower page loads, increased bandwidth usage, poor user experience, and lower SEO rankings."
          },
          {
            type: "paragraph",
            content: "Traditional HTML uses the <img> tag to display images:"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="/images/profile.jpg" alt="Profile">`
          },
          {
            type: "paragraph",
            content: "While this works, it leaves many optimization responsibilities to the developer, such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Resizing images",
              "Compressing images",
              "Lazy loading",
              "Responsive image generation",
              "Serving modern image formats",
              "Preventing layout shifts"
            ]
          },
          {
            type: "paragraph",
            content: "Modern web applications require all these optimizations automatically. This is exactly why Next.js provides the Image Component."
          },
          {
            type: "paragraph",
            content: "Instead of using HTML's <img> element directly, Next.js offers an optimized <Image> component that automatically improves performance, user experience, and SEO. The Image component is one of the most powerful built-in features of Next.js and is widely used in production applications."
          },
          {
            type: "paragraph",
            content: "In this lesson you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why Next.js created the Image component",
              "Advantages over <img>",
              "Importing Image",
              "Basic usage",
              "Required properties",
              "Static images",
              "External images",
              "Image optimization",
              "Responsive images",
              "Fill mode",
              "Lazy loading",
              "Priority loading",
              "Placeholder blur",
              "Object fit",
              "Sizes attribute",
              "Image quality",
              "Custom loaders",
              "Accessibility",
              "Performance tips",
              "Common mistakes",
              "Best practices"
            ]
          }
        ]
      },

      {
        heading: "Why Not Just Use <img>?",
        blocks: [
          {
            type: "paragraph",
            content: "HTML images work perfectly."
          },
          {
            type: "code",
            language: "html",
            content: `<img
    src="/hero.jpg"
    alt="Hero"
/>`
          },
          {
            type: "paragraph",
            content: "But the browser receives exactly what you provide. If your image is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "5000 × 3500 pixels",
              "7 MB",
              "Too large for mobile"
            ]
          },
          {
            type: "paragraph",
            content: "The browser still downloads it. This wastes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Internet bandwidth",
              "CPU",
              "Memory",
              "Loading time"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js solves these problems automatically."
          }
        ]
      },

      {
        heading: "What is the Next.js Image Component?",
        blocks: [
          {
            type: "paragraph",
            content: "The Image component is an enhanced replacement for HTML's <img> tag. Import it like this:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import Image from "next/image";`
          },
          {
            type: "paragraph",
            content: "Instead of writing"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="/cat.jpg">`
          },
          {
            type: "paragraph",
            content: "you write"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/cat.jpg"
    alt="Cat"
    width={500}
    height={300}
/>`
          },
          {
            type: "paragraph",
            content: "Behind the scenes, Next.js performs multiple optimizations automatically."
          }
        ]
      },

      {
        heading: "Benefits of the Image Component",
        blocks: [
          {
            type: "paragraph",
            content: "The Image component provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Automatic optimization",
              "Responsive images",
              "Lazy loading",
              "Modern image formats (WebP/AVIF when supported)",
              "Better Core Web Vitals",
              "Reduced bandwidth usage",
              "Layout stability (reduced CLS)",
              "Built-in resizing",
              "Better caching",
              "Improved SEO"
            ]
          }
        ]
      },

      {
        heading: "How Image Optimization Works",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your original image is: Original Image (4000 × 3000, 5 MB). A mobile phone only needs: 400 × 300 (70 KB)."
          },
          {
            type: "paragraph",
            content: "Instead of downloading 5 MB, Next.js automatically creates a smaller optimized version."
          },
          {
            type: "flow",
            steps: [
              "Original", "→",
              "Resize", "→",
              "Compress", "→",
              "Convert Format", "→",
              "Serve Optimized Image"
            ]
          },
          {
            type: "paragraph",
            content: "The user downloads only what is needed."
          }
        ]
      },

      {
        heading: "Importing the Image Component",
        blocks: [
          {
            type: "paragraph",
            content: "Always import it first."
          },
          {
            type: "code",
            language: "javascript",
            content: `import Image from "next/image";`
          },
          {
            type: "paragraph",
            content: "Now it's ready to use."
          }
        ]
      },

      {
        heading: "Your First Image",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import Image from "next/image";

export default function Home() {

    return (

        <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
        />

    );

}`
          },
          {
            type: "paragraph",
            content: "Simple and optimized."
          }
        ]
      },

      {
        heading: "Understanding Required Properties",
        blocks: [
          {
            type: "paragraph",
            content: "The most important properties are:"
          },
          {
            type: "table",
            headers: ["Property", "Purpose"],
            rows: [
              ["src", "Image location"],
              ["alt", "Accessibility description"],
              ["width", "Original width"],
              ["height", "Original height"]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/logo.png"
    alt="Company Logo"
    width={200}
    height={100}
/>`
          }
        ]
      },

      {
        heading: "Why Width and Height Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners wonder why these are required. Reason: The browser reserves space before the image loads. Without reserved space:"
          },
          {
            type: "flow",
            steps: [
              "Text", "→",
              "Image Loads", "→",
              "Everything Moves"
            ]
          },
          {
            type: "paragraph",
            content: "This causes Cumulative Layout Shift (CLS). With width and height:"
          },
          {
            type: "flow",
            steps: [
              "Reserved Space", "→",
              "Image Loads", "→",
              "Nothing Moves"
            ]
          },
          {
            type: "paragraph",
            content: "Much smoother."
          }
        ]
      },

      {
        heading: "Static Images",
        blocks: [
          {
            type: "paragraph",
            content: "Images inside the public folder can be referenced directly."
          },
          {
            type: "tree",
            content: `[Project]
  ├── public/
  │    └── images/
  │         └── hero.jpg`
          },
          {
            type: "paragraph",
            content: "Use:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/images/hero.jpg"
    alt="Hero"
    width={900}
    height={500}
/>`
          },
          {
            type: "paragraph",
            content: "Notice that the public folder name is omitted from the path."
          }
        ]
      },

      {
        heading: "Importing Images Directly",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of using a string path, you can import the image."
          },
          {
            type: "code",
            language: "javascript",
            content: `import profile from "@/public/profile.png";`
          },
          {
            type: "paragraph",
            content: "Use it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src={profile}
    alt="Profile"
/>`
          },
          {
            type: "paragraph",
            content: "Next.js automatically knows the image dimensions, so width and height are inferred."
          },
          {
            type: "paragraph",
            content: "This approach improves type safety and catches missing files during compilation."
          }
        ]
      },

      {
        heading: "External Images",
        blocks: [
          {
            type: "paragraph",
            content: "Images from other websites also work. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="https://example.com/photo.jpg"
    alt="Photo"
    width={600}
    height={400}
/>`
          },
          {
            type: "paragraph",
            content: "However, external domains must be allowed in next.config.js."
          },
          {
            type: "code",
            language: "javascript",
            content: `module.exports = {

    images: {

        remotePatterns: [

            {
                protocol: "https",
                hostname: "example.com"
            }

        ]

    }

}`
          },
          {
            type: "paragraph",
            content: "Without configuration, Next.js blocks unknown image sources for security."
          }
        ]
      },

      {
        heading: "Responsive Images",
        blocks: [
          {
            type: "paragraph",
            content: "A desktop and mobile device should not receive identical image sizes. The Image component automatically generates multiple versions."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop: 1200 px",
              "Tablet: 768 px",
              "Mobile: 480 px"
            ]
          },
          {
            type: "paragraph",
            content: "The browser downloads the most appropriate version."
          }
        ]
      },

      {
        heading: "Using the sizes Property",
        blocks: [
          {
            type: "paragraph",
            content: "For responsive layouts, define how much viewport width the image occupies."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/banner.jpg"
    alt="Banner"
    fill
    sizes="(max-width:768px) 100vw,
           (max-width:1200px) 50vw,
           33vw"
/>`
          },
          {
            type: "paragraph",
            content: "This allows Next.js to generate optimal image sizes, reducing unnecessary downloads."
          }
        ]
      },

      {
        heading: "Fill Layout",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes width and height aren't fixed. Use fill."
          },
          {
            type: "code",
            language: "jsx",
            content: `<div
style={{
    position: "relative",
    width: "400px",
    height: "300px"
}}
>

<Image

    src="/nature.jpg"

    alt="Nature"

    fill

/>

</div>`
          },
          {
            type: "paragraph",
            content: "The parent container must have:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "position: relative",
              "Fixed dimensions"
            ]
          },
          {
            type: "paragraph",
            content: "Otherwise the image cannot determine its size."
          }
        ]
      },

      {
        heading: "Object Fit",
        blocks: [
          {
            type: "paragraph",
            content: "When using fill, control how the image behaves."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    fill
    src="/mountain.jpg"
    alt="Mountain"
    style={{
        objectFit: "cover"
    }}
/>`
          },
          {
            type: "paragraph",
            content: "Common values:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "cover",
              "contain",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ]
      },

      {
        heading: "Lazy Loading",
        blocks: [
          {
            type: "paragraph",
            content: "Images below the visible screen should not load immediately. Next.js lazily loads them automatically."
          },
          {
            type: "flow",
            steps: [
              "Page Opens", "→",
              "Visible Images Load", "→",
              "User Scrolls", "→",
              "Remaining Images Load"
            ]
          },
          {
            type: "paragraph",
            content: "This significantly improves page speed."
          }
        ]
      },

      {
        heading: "Priority Loading",
        blocks: [
          {
            type: "paragraph",
            content: "Some images are critical. Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero banner",
              "Logo above the fold"
            ]
          },
          {
            type: "paragraph",
            content: "Mark them as priority."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/hero.jpg"

    alt="Hero"

    priority

    width={1200}

    height={600}

/>`
          },
          {
            type: "paragraph",
            content: "Priority disables lazy loading and preloads the image for faster rendering. Use it sparingly."
          }
        ]
      },

      {
        heading: "Placeholder Blur",
        blocks: [
          {
            type: "paragraph",
            content: "Large images often appear blank while loading. Instead, show a blurred preview."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src={profile}
    alt="Profile"
    placeholder="blur"
/>`
          },
          {
            type: "paragraph",
            content: "Users perceive the page as loading faster because they immediately see a low-quality preview."
          }
        ]
      },

      {
        heading: "Image Quality",
        blocks: [
          {
            type: "paragraph",
            content: "Control compression quality."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/photo.jpg"

    alt="Photo"

    width={800}

    height={600}

    quality={80}

/>`
          },
          {
            type: "paragraph",
            content: "Default quality is generally sufficient."
          },
          {
            type: "comparison",
            leftTitle: "Higher quality means",
            leftItems: [
              "Better appearance",
              "Larger file size"
            ],
            rightTitle: "Lower quality means",
            rightItems: [
              "Smaller files",
              "Faster downloads"
            ]
          },
          {
            type: "paragraph",
            content: "Choose a balance."
          }
        ]
      },

      {
        heading: "Supported Image Formats",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js supports common formats including:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JPEG",
              "PNG",
              "WebP",
              "AVIF",
              "GIF (not optimized as animated)",
              "SVG (special handling)"
            ]
          },
          {
            type: "paragraph",
            content: "When possible, optimized formats like WebP or AVIF are automatically served if the browser supports them."
          }
        ]
      },

      {
        heading: "Custom Loaders",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes images come from a CDN like:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cloudinary",
              "Imgix",
              "Akamai",
              "ImageKit"
            ]
          },
          {
            type: "paragraph",
            content: "You can provide a custom loader."
          },
          {
            type: "code",
            language: "javascript",
            content: `const loader = ({ src, width, quality }) => {

    return \`https://example.com/\${src}?w=\${width}&q=\${quality || 75}\`;

};`
          },
          {
            type: "paragraph",
            content: "Use it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    loader={loader}
    src="photo.jpg"
    alt="Photo"
    width={600}
    height={400}
/>`
          },
          {
            type: "paragraph",
            content: "Custom loaders let external image services handle optimization."
          }
        ]
      },

      {
        heading: "Image Styling",
        blocks: [
          {
            type: "paragraph",
            content: "The Image component accepts CSS normally."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/cat.jpg"

    alt="Cat"

    width={300}

    height={300}

    className="rounded-lg shadow-lg"

/>`
          },
          {
            type: "paragraph",
            content: "Or"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/cat.jpg"

    alt="Cat"

    width={300}

    height={300}

    style={{

        borderRadius: "20px",

        border: "4px solid black"

    }}

/>`
          }
        ]
      },

      {
        heading: "Accessibility",
        blocks: [
          {
            type: "paragraph",
            content: "Always provide meaningful alternative text."
          },
          {
            type: "comparison",
            leftTitle: "Good",
            leftItems: [
              "alt=\"Golden Retriever running in a park\""
            ],
            rightTitle: "Bad",
            rightItems: [
              "alt=\"image\""
            ]
          },
          {
            type: "paragraph",
            content: "Poor alt text makes applications inaccessible to screen readers. Decorative images can use:"
          },
          {
            type: "code",
            language: "jsx",
            content: `alt=""`
          }
        ]
      },

      {
        heading: "Image Component vs HTML <img>",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "<img>", "next/image"],
            rows: [
              ["Lazy loading", "Browser-dependent", "✅ Automatic"],
              ["Responsive resizing", "❌ Manual", "✅ Automatic"],
              ["Optimization", "❌ No", "✅ Yes"],
              ["Modern formats", "❌ Manual", "✅ Automatic"],
              ["Layout shift prevention", "❌ Manual", "✅ Built-in"],
              ["Blur placeholder", "❌ No", "✅ Yes"],
              ["Performance", "Medium", "Excellent"]
            ]
          }
        ]
      },

      {
        heading: "Performance Tips",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use imported static images whenever possible.",
              "Always provide accurate dimensions.",
              "Use priority only for above-the-fold images.",
              "Configure remote image domains instead of disabling checks.",
              "Supply an appropriate sizes value for responsive images.",
              "Prefer modern formats like WebP or AVIF.",
              "Avoid uploading images much larger than their intended display size."
            ]
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Using <img> Everywhere",
                description: "Many beginners continue using HTML images. Prefer <Image /> for most application images to benefit from automatic optimization."
              },
              {
                title: "Forgetting the alt Attribute",
                description: "Every meaningful image should have descriptive alternative text."
              },
              {
                title: "Using priority on Every Image",
                description: "Only the most important images should be prioritized. Too many priority images reduce overall performance."
              },
              {
                title: "Ignoring sizes",
                description: "When using fill or responsive layouts, omitting sizes can cause browsers to download images larger than necessary."
              },
              {
                title: "Not Configuring External Domains",
                description: "Remote images require configuration in next.config.js. Otherwise they fail to load."
              },
              {
                title: "Using Massive Source Images",
                description: "Even though Next.js optimizes images, uploading extremely large originals increases build and processing time. Resize assets reasonably before deployment."
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
              "Use the Next.js Image component instead of <img> whenever possible.",
              "Store application assets inside the public folder or import them directly.",
              "Write meaningful alt text.",
              "Use fill for flexible layouts.",
              "Define the sizes attribute for responsive designs.",
              "Reserve priority for above-the-fold content.",
              "Configure remote image hosts securely.",
              "Keep image files optimized before uploading.",
              "Test layouts on mobile, tablet, and desktop devices."
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common misconception is that next/image is simply a prettier version of <img>. In reality, it is an image optimization pipeline. When a request arrives, Next.js can: Determine the device's viewport size, Generate the most appropriate image dimensions, Compress the image, Serve a modern format like WebP or AVIF when supported, and Cache the optimized result for future requests. Think of it as a smart image delivery system rather than a simple HTML element. This is why large Next.js applications can serve thousands of images efficiently without developers manually creating multiple resized versions for different devices."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "In this lesson, you learned how the Next.js Image Component improves performance by automatically optimizing images, generating responsive sizes, enabling lazy loading, preventing layout shifts, and serving modern image formats. You explored importing images, using static and external sources, configuring remote domains, working with fill, sizes, priority, placeholder, quality, custom loaders, styling, accessibility, and common pitfalls."
          },
          {
            type: "paragraph",
            content: "By using the Image component correctly, you can build applications that load faster, consume less bandwidth, achieve better Core Web Vitals, and provide a smoother experience across all devices without manually handling complex image optimization tasks."
          }
        ]
      }
    ]
  },




  /* ===========================
    Second Topic : Image Optimization
============================= */
    "nextjs-image-optimization": {
    title: "Image Optimization",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Images are one of the most resource-intensive assets on a website. In modern web applications, they often account for 50–80% of the total downloaded data. A poorly optimized website may have JavaScript files of only 300 KB but images totaling over 20 MB, resulting in slow loading times, higher bandwidth consumption, and poor user experience."
          },
          {
            type: "paragraph",
            content: "For example, imagine an e-commerce homepage displaying 12 product images, each 3 MB in size."
          },
          {
            type: "flow",
            steps: [
              "12 Images", "→",
              "3 MB Each", "→",
              "36 MB Total Download"
            ]
          },
          {
            type: "paragraph",
            content: "Even on a fast internet connection, downloading 36 MB before interacting with the page creates a poor experience."
          },
          {
            type: "paragraph",
            content: "Image optimization is the process of delivering images in the smallest possible size without noticeably reducing visual quality."
          },
          {
            type: "paragraph",
            content: "Next.js provides one of the most advanced built-in image optimization systems among modern web frameworks. Instead of asking developers to manually resize, compress, and convert images for every device, Next.js performs many of these optimizations automatically through its Image Optimization Pipeline."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why image optimization matters",
              "Browser image loading process",
              "Problems with traditional images",
              "Core Web Vitals and images",
              "Next.js Image Optimization Pipeline",
              "How optimization works internally",
              "Automatic resizing",
              "Automatic compression",
              "Responsive images",
              "srcset generation",
              "sizes attribute",
              "Modern image formats",
              "Lazy loading",
              "Image sizing strategies",
              "Static imports",
              "Local vs remote images",
              "Best practices for optimized images"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand not only how Next.js optimizes images, but why these optimizations significantly improve application performance."
          }
        ]
      },

      {
        heading: "Why Image Optimization Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Every image downloaded by the browser affects several important factors:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Page loading speed",
              "User experience",
              "Mobile performance",
              "Data usage",
              "SEO",
              "Core Web Vitals"
            ]
          },
          {
            type: "paragraph",
            content: "Even if your JavaScript code is perfectly optimized, oversized images can still make your website feel slow. Consider two websites."
          },
          {
            type: "comparison",
            leftTitle: "Website A",
            leftItems: [
              "HTML: 20 KB",
              "CSS: 80 KB",
              "JavaScript: 250 KB",
              "Images: 18 MB"
            ],
            rightTitle: "Website B",
            rightItems: [
              "HTML: 20 KB",
              "CSS: 80 KB",
              "JavaScript: 250 KB",
              "Optimized Images: 1.8 MB"
            ]
          },
          {
            type: "paragraph",
            content: "The code is identical. Only the images differ. Website B loads dramatically faster."
          }
        ]
      },

      {
        heading: "Understanding How Browsers Load Images",
        blocks: [
          {
            type: "paragraph",
            content: "When a browser encounters an image, it follows several steps."
          },
          {
            type: "flow",
            steps: [
              "HTML Received", "→",
              "Image URL Found", "→",
              "HTTP Request", "→",
              "Server Sends Image", "→",
              "Browser Downloads Image", "→",
              "Image Decoded", "→",
              "Image Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Every image requires:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Network requests",
              "CPU decoding",
              "Memory allocation",
              "GPU rendering"
            ]
          },
          {
            type: "paragraph",
            content: "Large images increase every one of these costs."
          }
        ]
      },

      {
        heading: "Common Problems with Traditional Images",
        blocks: [
          {
            type: "paragraph",
            content: "Without optimization, developers often encounter issues like:"
          },
          {
            type: "paragraph",
            content: "Oversized Images: Uploading a 4000 × 3000 image to display inside a 300 × 200 card wastes bandwidth."
          },
          {
            type: "paragraph",
            content: "Multiple Devices:"
          },
          {
            type: "comparison",
            leftTitle: "Desktop",
            leftItems: [
              "1200 px Image"
            ],
            rightTitle: "Mobile",
            rightItems: [
              "400 px Image"
            ]
          },
          {
            type: "paragraph",
            content: "Without optimization: Both devices receive the same image. The mobile device downloads unnecessary data."
          },
          {
            type: "paragraph",
            content: "Modern Formats: Many browsers support:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "WebP",
              "AVIF"
            ]
          },
          {
            type: "paragraph",
            content: "But developers often continue serving:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "JPEG",
              "PNG"
            ]
          },
          {
            type: "paragraph",
            content: "which are larger."
          },
          {
            type: "paragraph",
            content: "Slow Initial Loading: Large images delay page rendering. Users often leave websites that load slowly."
          }
        ]
      },

      {
        heading: "Core Web Vitals and Images",
        blocks: [
          {
            type: "paragraph",
            content: "Google evaluates websites using Core Web Vitals. Images directly affect all three important metrics."
          },
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP): LCP measures how quickly the largest visible content appears. Usually, this is:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Hero image",
              "Banner",
              "Featured product image"
            ]
          },
          {
            type: "paragraph",
            content: "Large unoptimized images increase LCP. Example:"
          },
          {
            type: "flow",
            steps: [
              "Page Opens", "→",
              "Hero Image Downloads", "→",
              "Hero Image Displays", "→",
              "LCP Completed"
            ]
          },
          {
            type: "paragraph",
            content: "Faster images = Better LCP."
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS): If the browser doesn't know an image's dimensions, the layout moves while loading. Example:"
          },
          {
            type: "flow",
            steps: [
              "Heading", "→",
              "Image Loads", "→",
              "Heading Moves Down"
            ]
          },
          {
            type: "paragraph",
            content: "Users hate this. Next.js prevents this by reserving image space before loading."
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP): Although INP mainly measures responsiveness, extremely large images consume CPU during decoding. This can delay interactions."
          }
        ]
      },

      {
        heading: "What is Image Optimization?",
        blocks: [
          {
            type: "paragraph",
            content: "Image optimization means delivering the smallest possible image while preserving acceptable visual quality. Optimization usually includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Compression",
              "Resizing",
              "Responsive delivery",
              "Modern formats",
              "Lazy loading",
              "Caching"
            ]
          },
          {
            type: "paragraph",
            content: "It is not just reducing file size. It is about serving the right image to the right device at the right time."
          }
        ]
      },

      {
        heading: "How Next.js Solves the Problem",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of developers manually creating:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "photo-300.jpg",
              "photo-600.jpg",
              "photo-900.jpg",
              "photo-1200.jpg",
              "photo.webp",
              "photo.avif"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js generates optimized images automatically. You only write:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/photo.jpg"
    alt="Photo"
    width={900}
    height={600}
/>`
          },
          {
            type: "paragraph",
            content: "Everything else happens behind the scenes."
          }
        ]
      },

      {
        heading: "The Next.js Image Optimization Pipeline",
        blocks: [
          {
            type: "paragraph",
            content: "The optimization pipeline is the heart of Next.js image performance."
          },
          {
            type: "flow",
            steps: [
              "Original Image", "→",
              "Image Request", "→",
              "Image Optimizer", "→",
              "Resize", "→",
              "Compress", "→",
              "Convert Format", "→",
              "Cache", "→",
              "Serve Optimized Version"
            ]
          },
          {
            type: "paragraph",
            content: "Every image passes through this pipeline only when necessary."
          }
        ]
      },

      {
        heading: "Step-by-Step Optimization Process",
        blocks: [
          {
            type: "paragraph",
            content: "Let's understand what actually happens. Suppose your original image is Beach.jpg (5000 × 3500, 6 MB). A mobile phone visits your website. Instead of downloading 6 MB, Next.js performs these steps."
          },
          {
            type: "paragraph",
            content: "Step 1: Receives image request."
          },
          {
            type: "flow",
            steps: [
              "User", "→",
              "Requests Beach Image"
            ]
          },
          {
            type: "paragraph",
            content: "Step 2: Determines device width. Example:"
          },
          {
            type: "flow",
            steps: [
              "Mobile", "→",
              "400 px Required"
            ]
          },
          {
            type: "paragraph",
            content: "Step 3: Resizes image."
          },
          {
            type: "flow",
            steps: [
              "5000 px", "→",
              "400 px"
            ]
          },
          {
            type: "paragraph",
            content: "Step 4: Compresses image."
          },
          {
            type: "flow",
            steps: [
              "6 MB", "→",
              "120 KB"
            ]
          },
          {
            type: "paragraph",
            content: "Step 5: Converts image."
          },
          {
            type: "flow",
            steps: [
              "JPEG", "→",
              "WebP"
            ]
          },
          {
            type: "paragraph",
            content: "(if browser supports it)"
          },
          {
            type: "paragraph",
            content: "Step 6: Caches optimized version. Next time, no optimization is required."
          },
          {
            type: "paragraph",
            content: "Step 7: Serves optimized image. Fast. Small. Responsive."
          }
        ]
      },

      {
        heading: "Automatic Resizing",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Next.js is automatic resizing. Suppose three devices visit your application."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Desktop: Needs 1200 px",
              "Tablet: Needs 800 px",
              "Phone: Needs 400 px"
            ]
          },
          {
            type: "paragraph",
            content: "Traditional websites often send: 1200 px to everyone. Next.js instead generates multiple versions automatically."
          },
          {
            type: "flow",
            steps: [
              "Original", "→",
              "400 px", "→",
              "800 px", "→",
              "1200 px"
            ]
          },
          {
            type: "paragraph",
            content: "Each browser downloads only the required size."
          }
        ]
      },

      {
        heading: "Automatic Compression",
        blocks: [
          {
            type: "paragraph",
            content: "Compression removes unnecessary image information while preserving visual quality. Example:"
          },
          {
            type: "comparison",
            leftTitle: "Original",
            leftItems: [
              "4 MB"
            ],
            rightTitle: "Compressed",
            rightItems: [
              "350 KB"
            ]
          },
          {
            type: "paragraph",
            content: "The image looks nearly identical, but downloads much faster. Next.js performs intelligent compression automatically."
          }
        ]
      },

      {
        heading: "Automatic Format Conversion",
        blocks: [
          {
            type: "paragraph",
            content: "Different image formats have different efficiencies."
          },
          {
            type: "table",
            headers: ["Format", "Compression", "Transparency", "Animation"],
            rows: [
              ["JPEG", "Good", "❌", "❌"],
              ["PNG", "Medium", "✅", "❌"],
              ["WebP", "Excellent", "✅", "✅"],
              ["AVIF", "Outstanding", "✅", "❌"]
            ]
          },
          {
            type: "paragraph",
            content: "Suppose a browser supports WebP. Instead of sending photo.jpg, Next.js may send photo.webp without changing your code. This alone can reduce image size by 25–50% depending on the image."
          }
        ]
      },

      {
        heading: "Understanding Responsive Images",
        blocks: [
          {
            type: "paragraph",
            content: "Different devices require different image resolutions. Next.js automatically creates responsive images."
          },
          {
            type: "flow",
            steps: [
              "Desktop: 1200 px", "→",
              "Laptop: 900 px", "→",
              "Tablet: 700 px", "→",
              "Phone: 400 px"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of downloading one huge image, each device downloads its optimal version."
          }
        ]
      },

      {
        heading: "How srcset Works",
        blocks: [
          {
            type: "paragraph",
            content: "Normally, developers would manually write:"
          },
          {
            type: "code",
            language: "html",
            content: `<img
src="image.jpg"

srcset="
image-400.jpg 400w,
image-800.jpg 800w,
image-1200.jpg 1200w"
>`
          },
          {
            type: "paragraph",
            content: "This is tedious and error-prone. With Next.js, simply write:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/mountain.jpg"
    alt="Mountain"
    width={1200}
    height={700}
/>`
          },
          {
            type: "paragraph",
            content: "Next.js automatically generates the appropriate srcset values behind the scenes. The browser then chooses the most suitable image based on the device's screen size and pixel density."
          }
        ]
      },

      {
        heading: "Understanding the sizes Attribute",
        blocks: [
          {
            type: "paragraph",
            content: "While srcset tells the browser which image sizes are available, the sizes attribute tells it how much space the image occupies in the layout. Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/banner.jpg"
    alt="Banner"
    fill
    sizes="
    (max-width:768px) 100vw,
    (max-width:1200px) 50vw,
    33vw"
/>`
          },
          {
            type: "paragraph",
            content: "Meaning:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Mobile → Image takes full viewport width.",
              "Tablet → Image takes half the viewport.",
              "Desktop → Image occupies roughly one-third of the viewport."
            ]
          },
          {
            type: "paragraph",
            content: "Without a proper sizes attribute, browsers may download larger images than necessary."
          }
        ]
      },

      {
        heading: "Why Responsive Images Save Bandwidth",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a 1500 px image."
          },
          {
            type: "comparison",
            leftTitle: "Desktop",
            leftItems: [
              "Downloads 1500 px"
            ],
            rightTitle: "Phone",
            rightItems: [
              "Needs only 450 px"
            ]
          },
          {
            type: "paragraph",
            content: "Without responsive images, the phone downloads over three times more pixels than required. Responsive optimization prevents this waste."
          }
        ]
      },

      {
        heading: "Static Image Imports",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js can import images directly."
          },
          {
            type: "code",
            language: "javascript",
            content: `import profile from "@/public/profile.png";`
          },
          {
            type: "paragraph",
            content: "Use it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src={profile}

    alt="Profile"

/>`
          },
          {
            type: "paragraph",
            content: "Benefits include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Automatic width detection",
              "Automatic height detection",
              "Build-time validation",
              "Better TypeScript support",
              "Easier refactoring"
            ]
          }
        ]
      },

      {
        heading: "Local Images vs Remote Images",
        blocks: [
          {
            type: "paragraph",
            content: "Local Images: Stored inside public/ or imported directly. Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Fast",
              "Build-time analysis",
              "Better optimization",
              "No external dependency"
            ]
          },
          {
            type: "paragraph",
            content: "Remote Images: Example https://example.com/image.jpg. Require configuration."
          },
          {
            type: "code",
            language: "javascript",
            content: `images: {

    remotePatterns: [

        {

            protocol: "https",

            hostname: "example.com"

        }

    ]

}`
          },
          {
            type: "paragraph",
            content: "This protects your application from fetching images from untrusted sources."
          }
        ]
      },

      {
        heading: "Lazy Loading",
        blocks: [
          {
            type: "paragraph",
            content: "Not every image should load immediately. Suppose a page contains 100 images. Traditional loading:"
          },
          {
            type: "flow",
            steps: [
              "100 Images", "→",
              "Download All"
            ]
          },
          {
            type: "paragraph",
            content: "Huge waste. Next.js instead uses lazy loading."
          },
          {
            type: "flow",
            steps: [
              "Visible Images", "→",
              "Load Immediately", "→",
              "Scroll", "→",
              "Load Remaining Images"
            ]
          },
          {
            type: "paragraph",
            content: "Only images near the viewport are downloaded. This significantly reduces initial page load time."
          }
        ]
      },

      {
        heading: "Above-the-Fold vs Below-the-Fold Images",
        blocks: [
          {
            type: "paragraph",
            content: "Images visible without scrolling are called above-the-fold. These should load immediately. Everything else should usually be lazy-loaded. Example:"
          },
          {
            type: "flow",
            steps: [
              "Hero Banner, Logo, Navigation", "→",
              "Above Fold"
            ]
          },
          {
            type: "flow",
            steps: [
              "Gallery, Testimonials, Footer Images", "→",
              "Lazy Loaded"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js applies this strategy automatically for most images."
          }
        ]
      },

      {
        heading: "Image Sizing Strategies",
        blocks: [
          {
            type: "paragraph",
            content: "Choosing correct dimensions is as important as optimization."
          },
          {
            type: "comparison",
            leftTitle: "Bad",
            leftItems: [
              "Display: 300 × 300",
              "Actual Image: 5000 × 5000"
            ],
            rightTitle: "Good",
            rightItems: [
              "Display: 300 × 300",
              "Actual Optimized Image: 320 × 320"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid uploading extremely large images if they will always be displayed at small sizes."
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
              "Use the next/image component instead of HTML <img>.",
              "Always specify image dimensions or use static imports.",
              "Let Next.js generate responsive images automatically.",
              "Configure remote image domains properly.",
              "Provide a meaningful sizes attribute for responsive layouts.",
              "Use modern formats whenever possible.",
              "Keep hero images optimized because they directly affect LCP.",
              "Prefer local images for static assets such as logos and icons.",
              "Avoid unnecessarily large source images."
            ]
          }
        ]
      },
      {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned how Next.js automatically optimizes images using the Image component, responsive images, lazy loading, modern image formats, and automatic resizing."
          },
          {
            type: "paragraph",
            content: "In this part, we'll explore advanced optimization techniques used in production applications, including remote images, caching, CDNs, custom loaders, debugging performance, SEO considerations, and real-world best practices."
          }
        ]
      },

      {
        heading: "Working with Remote Images",
        blocks: [
          {
            type: "paragraph",
            content: "Not every image is stored inside your project."
          },
          {
            type: "paragraph",
            content: "Many applications fetch images from:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cloudinary",
              "AWS S3",
              "ImageKit",
              "Contentful",
              "Sanity",
              "Strapi",
              "Shopify",
              "WordPress",
              "User uploads",
              "External APIs"
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
              "Database", "→",
              "Image URL", "→",
              "Next.js Image Component"
            ]
          },
          {
            type: "paragraph",
            content: "Example URL:"
          },
          {
            type: "code",
            language: "text",
            content: `https://images.example.com/products/laptop.jpg`
          },
          {
            type: "paragraph",
            content: "For security reasons, Next.js does not allow arbitrary external images. You must explicitly configure trusted image sources."
          }
        ]
      },

      {
        heading: "Configuring Remote Images",
        blocks: [
          {
            type: "paragraph",
            content: "Open:"
          },
          {
            type: "code",
            language: "javascript",
            content: `next.config.js`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `/** @type {import('next').NextConfig} */

const nextConfig = {

    images: {

        remotePatterns: [

            {

                protocol: "https",

                hostname: "images.example.com",

            },

        ],

    },

};

export default nextConfig;`
          },
          {
            type: "paragraph",
            content: "Now images from https://images.example.com can be optimized."
          }
        ]
      },

      {
        heading: "Allowing Multiple Domains",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications often use multiple image providers."
          },
          {
            type: "code",
            language: "javascript",
            content: `images: {

    remotePatterns: [

        {

            protocol: "https",

            hostname: "cdn.company.com",

        },

        {

            protocol: "https",

            hostname: "images.unsplash.com",

        },

        {

            protocol: "https",

            hostname: "res.cloudinary.com",

        },

    ],

}`
          },
          {
            type: "paragraph",
            content: "Only trusted domains should be added. Never allow unknown image sources."
          }
        ]
      },

      {
        heading: "Why Remote Domains Are Restricted",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine anyone could request https://randomsite.com/image.png through your optimizer."
          },
          {
            type: "paragraph",
            content: "Problems:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Server abuse",
              "Resource exhaustion",
              "Security risks",
              "Unexpected bandwidth costs"
            ]
          },
          {
            type: "paragraph",
            content: "Domain restrictions prevent these issues."
          }
        ]
      },

      {
        heading: "Image Caching",
        blocks: [
          {
            type: "paragraph",
            content: "Optimizing images requires CPU time. If every request triggered optimization, servers would become slow. Instead, Next.js caches optimized images."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "First Request", "→",
              "Optimize Image", "→",
              "Store in Cache", "→",
              "Future Requests", "→",
              "Serve Cached Version"
            ]
          },
          {
            type: "paragraph",
            content: "Only the first request performs the expensive optimization."
          }
        ]
      },

      {
        heading: "Benefits of Caching",
        blocks: [
          {
            type: "paragraph",
            content: "Caching provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster responses",
              "Lower CPU usage",
              "Reduced server load",
              "Better scalability",
              "Lower infrastructure costs"
            ]
          }
        ]
      },

      {
        heading: "Cache Lifetime (TTL)",
        blocks: [
          {
            type: "paragraph",
            content: "Optimized images remain cached for a configurable period."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Original Image", "→",
              "Optimized Once", "→",
              "Stored", "→",
              "Reused Until Cache Expires"
            ]
          },
          {
            type: "paragraph",
            content: "If the original image changes, a new optimized version is generated after cache expiration or invalidation."
          }
        ]
      },

      {
        heading: "How Browser Caching Helps",
        blocks: [
          {
            type: "paragraph",
            content: "Caching happens at multiple levels."
          },
          {
            type: "flow",
            steps: [
              "Server Cache", "→",
              "CDN Cache", "→",
              "Browser Cache"
            ]
          },
          {
            type: "paragraph",
            content: "If the browser already has the optimized image, it doesn't need another download. This greatly improves repeat visits."
          }
        ]
      },

      {
        heading: "Custom Image Loaders",
        blocks: [
          {
            type: "paragraph",
            content: "By default, Next.js performs optimization using its own loader. However, large organizations often use dedicated image services."
          },
          {
            type: "paragraph",
            content: "Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cloudinary",
              "ImageKit",
              "Imgix",
              "Akamai",
              "Fastly",
              "Cloudflare Images"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of the built-in optimizer, Next.js can delegate optimization."
          }
        ]
      },

      {
        heading: "Creating a Custom Loader",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export default function cloudinaryLoader({

    src,

    width,

    quality,

}) {

    return \`https://res.cloudinary.com/demo/image/upload/w_\${width},q_\${quality || 75}/\${src}\`;

}`
          },
          {
            type: "paragraph",
            content: "Usage:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    loader={cloudinaryLoader}

    src="profile.jpg"

    alt="Profile"

    width={500}

    height={500}

/>`
          },
          {
            type: "paragraph",
            content: "Now Cloudinary performs resizing and optimization."
          }
        ]
      },

      {
        heading: "When Should You Use a Custom Loader?",
        blocks: [
          {
            type: "paragraph",
            content: "Use custom loaders when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Images already exist on a CDN.",
              "Your organization uses a media optimization service.",
              "You need advanced transformations.",
              "You serve millions of images daily.",
              "You want edge-based optimization."
            ]
          },
          {
            type: "paragraph",
            content: "Small projects usually don't need custom loaders."
          }
        ]
      },

      {
        heading: "CDN Integration",
        blocks: [
          {
            type: "paragraph",
            content: "A CDN (Content Delivery Network) stores content across servers worldwide."
          },
          {
            type: "paragraph",
            content: "Without CDN:"
          },
          {
            type: "flow",
            steps: [
              "User (Japan)", "→",
              "Server (USA)", "→",
              "Image"
            ]
          },
          {
            type: "paragraph",
            content: "High latency."
          },
          {
            type: "paragraph",
            content: "With CDN:"
          },
          {
            type: "flow",
            steps: [
              "User (Japan)", "→",
              "Tokyo CDN", "→",
              "Image"
            ]
          },
          {
            type: "paragraph",
            content: "Very low latency."
          }
        ]
      },

      {
        heading: "Why CDNs Improve Image Performance",
        blocks: [
          {
            type: "paragraph",
            content: "CDNs:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Reduce latency",
              "Improve availability",
              "Reduce origin server load",
              "Handle traffic spikes",
              "Deliver images closer to users"
            ]
          },
          {
            type: "paragraph",
            content: "For global applications, CDNs are almost essential."
          }
        ]
      },

      {
        heading: "Image Optimization + CDN",
        blocks: [
          {
            type: "paragraph",
            content: "The ideal production workflow looks like this."
          },
          {
            type: "flow",
            steps: [
              "Original Image", "→",
              "Next.js Optimizer", "→",
              "CDN Cache", "→",
              "Worldwide Users"
            ]
          },
          {
            type: "paragraph",
            content: "The optimizer runs once. The CDN distributes optimized versions globally."
          }
        ]
      },

      {
        heading: "Optimizing Hero Images",
        blocks: [
          {
            type: "paragraph",
            content: "Hero images usually become the Largest Contentful Paint (LCP) element."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Header", "→",
              "Hero Image", "→",
              "CTA Button"
            ]
          },
          {
            type: "paragraph",
            content: "If the hero image loads slowly, your LCP score suffers."
          },
          {
            type: "paragraph",
            content: "For important above-the-fold images:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/hero.jpg"

    alt="Hero"

    priority

/>`
          },
          {
            type: "paragraph",
            content: "The priority prop tells Next.js to preload the image and avoid lazy loading. Use it sparingly—typically for only one or two critical images per page."
          }
        ]
      },

      {
        heading: "Choosing the Right Quality",
        blocks: [
          {
            type: "paragraph",
            content: "The quality prop controls image compression."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image

    src="/photo.jpg"

    alt="Photo"

    width={800}

    height={500}

    quality={75}

/>`
          },
          {
            type: "paragraph",
            content: "General recommendations:"
          },
          {
            type: "table",
            headers: ["Quality", "Use Case"],
            rows: [
              ["50–60", "Thumbnails"],
              ["65–75", "Most websites"],
              ["80–90", "Photography portfolios"],
              ["100", "Rarely recommended"]
            ]
          },
          {
            type: "paragraph",
            content: "Higher quality significantly increases file size."
          }
        ]
      },

      {
        heading: "SVG Images",
        blocks: [
          {
            type: "paragraph",
            content: "SVG files are vector graphics."
          },
          {
            type: "paragraph",
            content: "Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Infinitely scalable",
              "Very small for icons",
              "Sharp on every screen",
              "Resolution independent"
            ]
          },
          {
            type: "paragraph",
            content: "Best uses:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Logos",
              "Icons",
              "Simple illustrations"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid converting photos to SVG."
          }
        ]
      },

      {
        heading: "GIF vs Modern Alternatives",
        blocks: [
          {
            type: "paragraph",
            content: "Animated GIFs are inefficient. Instead of GIF, prefer:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "MP4",
              "WebM",
              "Animated WebP"
            ]
          },
          {
            type: "paragraph",
            content: "These provide much smaller file sizes and smoother playback."
          }
        ]
      },

      {
        heading: "Core Web Vitals and Image Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "Images have the greatest influence on page performance."
          },
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP): Improve LCP by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Optimizing hero images",
              "Using priority",
              "Reducing image size",
              "Serving modern formats"
            ]
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS): Prevent layout shifts by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Setting width",
              "Setting height",
              "Using fill with a correctly sized parent container",
              "Avoiding unknown image dimensions"
            ]
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP): Large image decoding can block the main thread. Reduce INP by:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Compressing images",
              "Lazy loading non-critical images",
              "Avoiding oversized assets"
            ]
          }
        ]
      },

      {
        heading: "SEO Benefits of Optimized Images",
        blocks: [
          {
            type: "paragraph",
            content: "Image optimization affects more than performance. It also improves search engine visibility."
          },
          {
            type: "paragraph",
            content: "Best practices include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Descriptive filenames",
              "Meaningful alt text",
              "Fast loading",
              "Proper dimensions",
              "Modern formats",
              "Responsive delivery"
            ]
          },
          {
            type: "paragraph",
            content: "Good example:"
          },
          {
            type: "code",
            language: "text",
            content: `red-running-shoes.jpg`
          },
          {
            type: "paragraph",
            content: "Poor example:"
          },
          {
            type: "code",
            language: "text",
            content: `IMG_845739.jpg`
          }
        ]
      },

      {
        heading: "Writing Better Alt Text",
        blocks: [
          {
            type: "paragraph",
            content: "Bad: Image"
          },
          {
            type: "paragraph",
            content: "Better: Red running shoes with white sole"
          },
          {
            type: "paragraph",
            content: "Best: Red running shoes displayed on a wooden table for an online sports store."
          },
          {
            type: "paragraph",
            content: "Remember: alt text should describe the image's purpose, not simply repeat nearby text."
          }
        ]
      },

      {
        heading: "Debugging Image Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Modern browsers provide excellent debugging tools."
          },
          {
            type: "paragraph",
            content: "Open:"
          },
          {
            type: "flow",
            steps: [
              "Chrome DevTools", "→",
              "Network", "→",
              "Img"
            ]
          },
          {
            type: "paragraph",
            content: "Check:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Image size",
              "Download time",
              "Compression",
              "Response headers",
              "Cache status"
            ]
          }
        ]
      },

      {
        heading: "Lighthouse Analysis",
        blocks: [
          {
            type: "paragraph",
            content: "Run Lighthouse. Pay attention to:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Properly size images",
              "Efficient image encoding",
              "Next-gen formats",
              "LCP",
              "CLS"
            ]
          },
          {
            type: "paragraph",
            content: "Lighthouse often identifies the exact images causing performance issues."
          }
        ]
      },

      {
        heading: "Common Image Optimization Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Mistake 1",
                description: "Uploading huge images. (e.g., 6000 px displayed as 300 px)."
              },
              {
                title: "Mistake 2",
                description: "Using HTML <img> everywhere instead of the Image component."
              },
              {
                title: "Mistake 3",
                description: "Missing image dimensions. Causes layout shifts."
              },
              {
                title: "Mistake 4",
                description: "Using priority on every image. Everything cannot be \"highest priority.\" Overusing it defeats the purpose and may slow initial rendering."
              },
              {
                title: "Mistake 5",
                description: "Ignoring responsive layouts. Desktop images should not be downloaded on small mobile devices."
              },
              {
                title: "Mistake 6",
                description: "Not configuring remote image domains. Images will fail to load or won't be optimized."
              },
              {
                title: "Mistake 7",
                description: "Choosing very high image quality unnecessarily. Users rarely notice the visual difference between quality 75 and 100, but the file size increase can be substantial."
              }
            ]
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
              "Always use the Image component for raster images.",
              "Import local images whenever possible.",
              "Configure remote image domains carefully.",
              "Use responsive layouts with the sizes prop.",
              "Reserve priority for above-the-fold images.",
              "Prefer WebP or AVIF when supported.",
              "Optimize source images before uploading them.",
              "Store frequently accessed images on a CDN.",
              "Use meaningful alt text for accessibility and SEO.",
              "Test image performance on real mobile devices.",
              "Monitor Core Web Vitals regularly.",
              "Audit image-heavy pages with Lighthouse before deployment."
            ]
          }
        ]
      },

      {
        heading: "Choosing the Right Image Strategy",
        blocks: [
          {
            type: "table",
            headers: ["Scenario", "Recommended Approach"],
            rows: [
              ["Company logo", "SVG"],
              ["Hero banner", "Image + priority"],
              ["Product gallery", "Image + lazy loading"],
              ["Blog thumbnails", "Responsive images"],
              ["User uploads", "Remote images + optimization"],
              ["CMS images", "CDN + custom loader (if applicable)"],
              ["Icons", "SVG or optimized icon library"],
              ["Decorative background", "CSS background image (when semantics are unnecessary)"]
            ]
          }
        ]
      },

      {
        heading: "Real-World Image Optimization Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A production-ready workflow often looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Designer Creates Image", "→",
              "Compress Source Image", "→",
              "Upload to Storage/CDN", "→",
              "Configure Remote Patterns", "→",
              "Render Using Image Component", "→",
              "Automatic Resize", "→",
              "Automatic Format Selection", "→",
              "Caching", "→",
              "CDN Distribution", "→",
              "Fast Delivery to Users"
            ]
          },
          {
            type: "paragraph",
            content: "This pipeline minimizes bandwidth while maximizing visual quality and user experience."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Think in Terms of \"Pixels Delivered,\" Not \"Images Delivered\". Many developers ask: \"How many images are on my page?\" A better question is: \"How many pixels am I delivering to this user's device?\" Imagine serving a 2000×1200 image to a phone that displays it at only 360×216 pixels. The browser still downloads millions of unnecessary pixels. Great image optimization is about matching the delivered resolution to the displayed resolution as closely as possible. This mindset changes how you build applications: Design responsive layouts first. Let the browser choose the correct image through srcset and sizes. Avoid oversized source assets. Optimize for the user's device, not your development monitor. The fastest image is not necessarily the smallest image—it's the right image for the current device, network, and viewport."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "Image optimization is one of the most impactful performance improvements you can make in a Next.js application. Rather than manually creating multiple image versions, Next.js automates resizing, compression, responsive image generation, modern format delivery, lazy loading, and caching through the Image component."
          },
          {
            type: "paragraph",
            content: "For production applications, combine the built-in optimizer with proper remote image configuration, CDN integration, effective caching, responsive layouts, meaningful alt text, and Core Web Vitals monitoring. By following these practices, you can build websites that load faster, consume less bandwidth, improve accessibility and SEO, and provide a smoother experience across mobile, tablet, and desktop devices."
          }
        ]
      }
    ]
  },




  /* ===========================
    Third Topic : Font Optimization
============================= */
    "nextjs-font-optimization": {
    title: "Font Optimization",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Typography is one of the first things users notice when visiting a website. A beautiful font can improve readability, strengthen branding, and create a professional appearance. However, fonts are also one of the most overlooked performance bottlenecks in modern web development."
          },
          {
            type: "paragraph",
            content: "Many developers spend hours optimizing images and JavaScript bundles but ignore fonts, even though a poorly loaded font can:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Delay page rendering",
              "Cause text to disappear temporarily",
              "Shift the page layout unexpectedly",
              "Increase network requests",
              "Hurt Core Web Vitals",
              "Reduce SEO performance",
              "Create a poor user experience"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js solves these problems with its built-in Font Optimization system through the next/font module. Instead of relying on third-party font servers at runtime, Next.js downloads, optimizes, subsets, self-hosts, preloads, and serves fonts efficiently from your own application."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Why font optimization matters",
              "How browsers load fonts",
              "Problems with traditional font loading",
              "How Next.js optimizes fonts automatically",
              "Google Fonts integration",
              "Local fonts",
              "Self-hosting fonts",
              "Font preloading",
              "Variable fonts",
              "Multiple font families",
              "Layout Shift (CLS)",
              "Font display strategies"
            ]
          },
          {
            type: "paragraph",
            content: "By the end of this lesson, you'll understand not only how to use fonts in Next.js, but also how modern browsers process fonts and why Next.js provides one of the best font loading experiences available today."
          }
        ]
      },

      {
        heading: "Why Font Optimization Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Fonts are files. Just like images and JavaScript, they must be downloaded before they can be displayed."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "CSS", "→",
              "Font File", "→",
              "Browser Renders Text"
            ]
          },
          {
            type: "paragraph",
            content: "If the font is slow, the entire page may appear incomplete."
          },
          {
            type: "paragraph",
            content: "Consider these two websites."
          },
          {
            type: "comparison",
            leftTitle: "Website A",
            leftItems: [
              "HTML",
              "CSS",
              "JavaScript",
              "Custom Font (1.8 Seconds)",
              "Text Appears"
            ],
            rightTitle: "Website B",
            rightItems: [
              "HTML",
              "CSS",
              "Optimized Font",
              "Immediate Text Rendering"
            ]
          },
          {
            type: "paragraph",
            content: "Both websites use the same font. Only the loading strategy differs. The second website feels dramatically faster."
          }
        ]
      },

      {
        heading: "Benefits of Font Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "Proper font optimization provides:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster page loading",
              "Better readability",
              "Improved Core Web Vitals",
              "Better SEO rankings",
              "Lower bandwidth usage",
              "Reduced layout shifts",
              "Consistent branding",
              "Better mobile experience"
            ]
          }
        ]
      },

      {
        heading: "Why Fonts Affect Website Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Many developers think fonts are \"small.\""
          },
          {
            type: "paragraph",
            content: "Not always. Some font families include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Thin",
              "Light",
              "Regular",
              "Medium",
              "SemiBold",
              "Bold",
              "ExtraBold",
              "Black"
            ]
          },
          {
            type: "paragraph",
            content: "Along with:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Italic versions",
              "Multiple language subsets"
            ]
          },
          {
            type: "paragraph",
            content: "A single font family can exceed several megabytes."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Regular", "→",
              "Bold", "→",
              "Italic", "→",
              "Bold Italic", "→",
              "Light", "→",
              "Medium", "→",
              "Black", "→",
              "Many Font Files"
            ]
          },
          {
            type: "paragraph",
            content: "Loading every font variation unnecessarily wastes bandwidth."
          }
        ]
      },

      {
        heading: "Web Fonts vs System Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "There are two main categories of fonts."
          },
          {
            type: "paragraph",
            content: "System Fonts: These are already installed on the user's operating system. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Arial",
              "Helvetica",
              "Segoe UI",
              "Roboto (Android)",
              "San Francisco (Apple)"
            ]
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Instant loading",
              "Zero downloads",
              "Excellent performance"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Different appearance across platforms",
              "Limited branding",
              "Less design flexibility"
            ]
          },
          {
            type: "paragraph",
            content: "Web Fonts: These are downloaded from the internet. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Fonts",
              "Inter",
              "Poppins",
              "Montserrat",
              "Roboto",
              "Open Sans"
            ]
          },
          {
            type: "comparison",
            leftTitle: "Advantages",
            leftItems: [
              "Consistent appearance",
              "Rich typography",
              "Strong branding"
            ],
            rightTitle: "Disadvantages",
            rightItems: [
              "Additional downloads",
              "Slower loading if poorly optimized"
            ]
          },
          {
            type: "paragraph",
            content: "Comparison:"
          },
          {
            type: "table",
            headers: ["Feature", "System Fonts", "Web Fonts"],
            rows: [
              ["Download Required", "❌", "✅"],
              ["Fastest Loading", "✅", "❌"],
              ["Branding", "Limited", "Excellent"],
              ["Consistent Appearance", "Partial", "Excellent"],
              ["Custom Design", "Limited", "Excellent"]
            ]
          }
        ]
      },

      {
        heading: "How Browsers Load Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Understanding browser font loading helps explain why optimization is important."
          },
          {
            type: "paragraph",
            content: "Suppose a webpage uses the font:"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: "Inter";`
          },
          {
            type: "paragraph",
            content: "The browser follows this process."
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "CSS", "→",
              "Font Declaration Found", "→",
              "Request Font File", "→",
              "Download Font", "→",
              "Decode Font", "→",
              "Render Text"
            ]
          },
          {
            type: "paragraph",
            content: "Only after the font is ready can the browser display the text correctly."
          }
        ]
      },

      {
        heading: "The Font Loading Waterfall",
        blocks: [
          {
            type: "paragraph",
            content: "Let's visualize it."
          },
          {
            type: "flow",
            steps: [
              "User Opens Website", "→",
              "HTML Downloaded", "→",
              "CSS Downloaded", "→",
              "Browser Finds Font", "→",
              "Font Request Sent", "→",
              "Font Downloaded", "→",
              "Text Rendered"
            ]
          },
          {
            type: "paragraph",
            content: "Every additional network request increases loading time."
          }
        ]
      },

      {
        heading: "Problems with Traditional Font Loading",
        blocks: [
          {
            type: "paragraph",
            content: "Traditional font loading introduces several issues."
          },
          {
            type: "paragraph",
            content: "Problem 1: Extra Network Requests. Using external font providers often requires:"
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "Google Fonts CSS", "→",
              "Google Fonts Server", "→",
              "Font Files"
            ]
          },
          {
            type: "paragraph",
            content: "Multiple requests increase latency."
          },
          {
            type: "paragraph",
            content: "Problem 2: Flash of Invisible Text (FOIT). Sometimes browsers hide text until fonts finish downloading."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Page Loads", "→",
              "Text Invisible", "→",
              "Font Downloads", "→",
              "Text Appears"
            ]
          },
          {
            type: "paragraph",
            content: "This is called Flash of Invisible Text (FOIT). Users see empty sections before the text appears."
          },
          {
            type: "paragraph",
            content: "Problem 3: Flash of Unstyled Text (FOUT). Another browser strategy is:"
          },
          {
            type: "flow",
            steps: [
              "Fallback Font", "→",
              "Custom Font Downloads", "→",
              "Text Changes"
            ]
          },
          {
            type: "paragraph",
            content: "The page initially renders using a fallback font and later switches to the custom font. This is called Flash of Unstyled Text (FOUT)."
          },
          {
            type: "paragraph",
            content: "Problem 4: Layout Shift. If the fallback font has different dimensions, the layout moves."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Fallback Font", "→",
              "Custom Font Loads", "→",
              "Heading Changes Width", "→",
              "Layout Moves"
            ]
          },
          {
            type: "paragraph",
            content: "Users experience unexpected content movement."
          },
          {
            type: "paragraph",
            content: "Problem 5: Unused Font Files. Many developers import: Every weight, Every style, Every language subset even though only one or two are actually used."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Downloaded Thin, Light, Regular, Medium, Bold, Black", "→",
              "Uses Only Regular"
            ]
          },
          {
            type: "paragraph",
            content: "This wastes bandwidth."
          }
        ]
      },

      {
        heading: "What is Font Optimization?",
        blocks: [
          {
            type: "paragraph",
            content: "Font optimization means delivering fonts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster",
              "Smaller",
              "Earlier",
              "Only when needed"
            ]
          },
          {
            type: "paragraph",
            content: "Optimization includes:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Self-hosting",
              "Compression",
              "Preloading",
              "Subsetting",
              "Caching",
              "Efficient loading",
              "Variable fonts",
              "Minimal requests"
            ]
          }
        ]
      },

      {
        heading: "How Next.js Solves Font Loading",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of loading fonts directly from external servers every time, Next.js performs optimization during development and build."
          },
          {
            type: "paragraph",
            content: "Workflow:"
          },
          {
            type: "flow",
            steps: [
              "Google Font", "→",
              "Downloaded During Build", "→",
              "Stored Inside Project", "→",
              "Self Hosted", "→",
              "Optimized Delivery"
            ]
          },
          {
            type: "paragraph",
            content: "This removes unnecessary external network requests."
          }
        ]
      },

      {
        heading: "Next.js Font Optimization Pipeline",
        blocks: [
          {
            type: "paragraph",
            content: "The optimization process looks like this."
          },
          {
            type: "flow",
            steps: [
              "Import Font", "→",
              "Download Font", "→",
              "Subset Font", "→",
              "Self Host", "→",
              "Generate CSS", "→",
              "Preload", "→",
              "Serve Optimized Font"
            ]
          },
          {
            type: "paragraph",
            content: "All of this happens automatically."
          }
        ]
      },

      {
        heading: "What is next/font?",
        blocks: [
          {
            type: "paragraph",
            content: "next/font is Next.js's built-in font optimization system. It automatically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Downloads fonts",
              "Self-hosts fonts",
              "Removes external requests",
              "Optimizes loading",
              "Prevents layout shifts",
              "Supports Google Fonts",
              "Supports local fonts",
              "Works with variable fonts"
            ]
          }
        ]
      },

      {
        heading: "Importing a Google Font",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import { Inter } from "next/font/google";`
          },
          {
            type: "paragraph",
            content: "Creating the font:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({

    subsets: ["latin"],

});`
          },
          {
            type: "paragraph",
            content: "Applying it:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<html lang="en" className={inter.className}>`
          },
          {
            type: "paragraph",
            content: "That's all. Next.js handles the optimization automatically."
          }
        ]
      },

      {
        heading: "Understanding Google Fonts in Next.js",
        blocks: [
          {
            type: "paragraph",
            content: "Without Next.js:"
          },
          {
            type: "flow",
            steps: [
              "Website", "→",
              "Google CSS", "→",
              "Google Font Server", "→",
              "Font Download"
            ]
          },
          {
            type: "paragraph",
            content: "With Next.js:"
          },
          {
            type: "flow",
            steps: [
              "Build Time", "→",
              "Download Font", "→",
              "Store Locally", "→",
              "Serve From Your App"
            ]
          },
          {
            type: "paragraph",
            content: "This significantly reduces dependency on third-party servers."
          }
        ]
      },

      {
        heading: "Importing Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import {

    Roboto,

} from "next/font/google";`
          },
          {
            type: "paragraph",
            content: "Create the font."
          },
          {
            type: "code",
            language: "javascript",
            content: `const roboto = Roboto({

    weight: "400",

    subsets: ["latin"],

});`
          },
          {
            type: "paragraph",
            content: "Apply it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={roboto.className}>`
          }
        ]
      },

      {
        heading: "Selecting Font Weights",
        blocks: [
          {
            type: "paragraph",
            content: "Only download the weights you actually use."
          },
          {
            type: "paragraph",
            content: "Good:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({

    weight: [

        "400",

        "700",

    ],

    subsets: ["latin"],

});`
          },
          {
            type: "paragraph",
            content: "Avoid:"
          },
          {
            type: "code",
            language: "javascript",
            content: `weight: [

"100",

"200",

"300",

"400",

"500",

"600",

"700",

"800",

"900"

]`
          },
          {
            type: "paragraph",
            content: "unless your application truly needs every weight."
          }
        ]
      },

      {
        heading: "Selecting Language Subsets",
        blocks: [
          {
            type: "paragraph",
            content: "Fonts often contain thousands of characters. You usually don't need all of them."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `subsets: [

    "latin",

]`
          },
          {
            type: "paragraph",
            content: "Other available subsets may include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "latin-ext",
              "cyrillic",
              "greek",
              "vietnamese",
              "devanagari",
              "arabic"
            ]
          },
          {
            type: "paragraph",
            content: "Downloading only required subsets reduces file size."
          }
        ]
      },

      {
        heading: "Using Local Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Not every project uses Google Fonts. Many companies have custom brand fonts."
          },
          {
            type: "tree",
            content: `[app]
  └── [public]
        └── [fonts]
              └── MyFont.woff2`
          },
          {
            type: "paragraph",
            content: "Import:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import localFont

from "next/font/local";`
          },
          {
            type: "paragraph",
            content: "Load it."
          },
          {
            type: "code",
            language: "javascript",
            content: `const myFont = localFont({

    src: "./fonts/MyFont.woff2",

});`
          },
          {
            type: "paragraph",
            content: "Use it."
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={myFont.className}>`
          }
        ]
      },

      {
        heading: "Why Use Local Fonts?",
        blocks: [
          {
            type: "paragraph",
            content: "Local fonts are useful when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Your company owns a custom typeface.",
              "The font isn't available on Google Fonts.",
              "Licensing requires self-hosting.",
              "You want complete control over font files.",
              "You need offline compatibility."
            ]
          }
        ]
      },

      {
        heading: "Self-hosting Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Self-hosting means the font is served directly from your application instead of a third-party provider."
          },
          {
            type: "paragraph",
            content: "Traditional approach:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Google Server", "→",
              "Font"
            ]
          },
          {
            type: "paragraph",
            content: "Self-hosted approach:"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Your Next.js App", "→",
              "Font"
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
              "Faster loading",
              "Improved privacy",
              "Better caching",
              "Reduced external dependencies",
              "More reliable availability"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js automatically self-hosts Google Fonts when using next/font/google."
          }
        ]
      },

      {
        heading: "Automatic Font Optimization",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Next.js is that you don't need to manually configure many optimizations."
          },
          {
            type: "paragraph",
            content: "When you use next/font, Next.js automatically:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Downloads required font files.",
              "Removes unnecessary network requests.",
              "Self-hosts fonts.",
              "Generates optimized CSS.",
              "Preloads important fonts.",
              "Minimizes layout shifts.",
              "Caches assets efficiently."
            ]
          },
          {
            type: "paragraph",
            content: "All of this happens with only a few lines of code."
          }
        ]
      },

      {
        heading: "Understanding Layout Shift (CLS)",
        blocks: [
          {
            type: "paragraph",
            content: "CLS (Cumulative Layout Shift) measures unexpected movement on a webpage. Fonts are a common cause."
          },
          {
            type: "paragraph",
            content: "Without optimization:"
          },
          {
            type: "flow",
            steps: [
              "Fallback Font", "→",
              "Custom Font", "→",
              "Text Width Changes", "→",
              "Layout Moves"
            ]
          },
          {
            type: "paragraph",
            content: "With Next.js:"
          },
          {
            type: "flow",
            steps: [
              "Optimized Font Metrics", "→",
              "Minimal Layout Shift", "→",
              "Stable Page"
            ]
          },
          {
            type: "paragraph",
            content: "The framework uses font metric adjustments to reduce visible movement during font swaps."
          }
        ]
      },

      {
        heading: "Font Display Strategies",
        blocks: [
          {
            type: "paragraph",
            content: "Browsers decide how text should behave while fonts are loading. Common strategies include:"
          },
          {
            type: "table",
            headers: ["Strategy", "Behavior"],
            rows: [
              ["auto", "Browser decides"],
              ["block", "Hide text temporarily"],
              ["swap", "Show fallback, then replace"],
              ["fallback", "Short block, then fallback"],
              ["optional", "Use custom font only if quickly available"]
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({

    subsets: ["latin"],

    display: "swap",

});`
          },
          {
            type: "paragraph",
            content: "swap is commonly recommended because users can read content immediately while the custom font loads."
          }
        ]
      },

      {
        heading: "Font Preloading",
        blocks: [
          {
            type: "paragraph",
            content: "Preloading tells the browser: \"This resource is important. Download it early.\""
          },
          {
            type: "paragraph",
            content: "Without preloading:"
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "CSS", "→",
              "Find Font", "→",
              "Download"
            ]
          },
          {
            type: "paragraph",
            content: "With preloading:"
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "Preload Font", "→",
              "Font Ready", "→",
              "Render"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js automatically preloads fonts imported through next/font when appropriate."
          }
        ]
      },

      {
        heading: "Variable Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Traditionally, every font weight is a separate file."
          },
          {
            type: "flow",
            steps: [
              "Regular", "→",
              "Bold", "→",
              "Light", "→",
              "Medium", "→",
              "Black"
            ]
          },
          {
            type: "paragraph",
            content: "Variable fonts combine multiple weights into a single file."
          },
          {
            type: "flow",
            steps: [
              "One Variable Font", "→",
              "100–900"
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
              "Fewer HTTP requests",
              "Smaller total download size",
              "Smooth weight transitions",
              "Better performance",
              "Greater design flexibility"
            ]
          },
          {
            type: "paragraph",
            content: "Many modern Google Fonts, such as Inter, support variable fonts and work seamlessly with next/font."
          }
        ]
      },

      {
        heading: "Using Multiple Font Families",
        blocks: [
          {
            type: "paragraph",
            content: "Applications often use one font for headings and another for body text."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `import {

    Inter,

    Merriweather,

}

from "next/font/google";`
          },
          {
            type: "paragraph",
            content: "Create both fonts."
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({

    subsets: ["latin"],

});\n\nconst merriweather = Merriweather({

    weight: "700",

    subsets: ["latin"],

});`
          },
          {
            type: "paragraph",
            content: "Apply them."
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1 className={merriweather.className}>

Welcome

</h1>\n\n<p className={inter.className}>

Next.js makes font optimization easy.

</p>`
          },
          {
            type: "paragraph",
            content: "This allows each font to be optimized independently while maintaining excellent performance."
          }
        ]
      },

      {
        heading: "Best Practices (Part 1)",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use next/font instead of manually linking Google Fonts.",
              "Download only the font weights you actually use.",
              "Select only the language subsets your application requires.",
              "Prefer variable fonts when available.",
              "Self-host fonts whenever possible.",
              "Use display: \"swap\" for better perceived performance.",
              "Minimize the number of font families.",
              "Reuse fonts consistently throughout the application.",
              "Test typography on mobile and desktop devices.",
              "Choose readable fonts before decorative ones."
            ]
          }
        ]
      },

      {
        heading: "Advanced Font Configuration",
        blocks: [
          {
            type: "paragraph",
            content: "By now, you know how to use next/font/google and next/font/local to load fonts. However, real-world applications rarely stop there."
          },
          {
            type: "paragraph",
            content: "Large production applications often require:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Multiple font families",
              "Different font weights",
              "Light/Dark theme typography",
              "Brand fonts",
              "Admin dashboard fonts",
              "Marketing website fonts",
              "Variable fonts",
              "Tailwind integration",
              "Performance optimization",
              "Global typography management"
            ]
          },
          {
            type: "paragraph",
            content: "This is where advanced font configuration becomes important."
          },
          {
            type: "paragraph",
            content: "Instead of simply importing fonts, professional developers build a complete typography system that is scalable, maintainable, and highly optimized."
          }
        ]
      },

      {
        heading: "Why Advanced Configuration Matters",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine building an e-commerce website."
          },
          {
            type: "paragraph",
            content: "You may have:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Brand heading font",
              "Body text font",
              "Code font",
              "Admin dashboard font",
              "Marketing page font"
            ]
          },
          {
            type: "paragraph",
            content: "If every page imports fonts separately, your application becomes difficult to maintain."
          },
          {
            type: "paragraph",
            content: "Instead, Next.js encourages central font configuration."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Heading Font", "→",
              "Geist"
            ]
          },
          {
            type: "flow",
            steps: [
              "Body Font", "→",
              "Inter"
            ]
          },
          {
            type: "flow",
            steps: [
              "Code Font", "→",
              "JetBrains Mono"
            ]
          },
          {
            type: "flow",
            steps: [
              "Admin", "→",
              "Roboto"
            ]
          },
          {
            type: "flow",
            steps: [
              "Marketing", "→",
              "Playfair Display"
            ]
          },
          {
            type: "paragraph",
            content: "Everything stays organized."
          }
        ]
      },

      {
        heading: "Organizing Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of writing fonts everywhere,"
          },
          {
            type: "paragraph",
            content: "Bad approach"
          },
          {
            type: "code",
            language: "javascript",
            content: `app/page.js
import { Inter } from "next/font/google"
...
app/about/page.js
import { Roboto } from "next/font/google"
...
app/contact/page.js
import { Poppins } from "next/font/google"`
          },
          {
            type: "paragraph",
            content: "Soon you'll forget"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "where fonts are used",
              "which weights are loaded",
              "duplicated downloads"
            ]
          },
          {
            type: "paragraph",
            content: "Better approach"
          },
          {
            type: "paragraph",
            content: "Create"
          },
          {
            type: "tree",
            content: `[app]
  ├── [lib]
  ├── [styles]
  └── fonts.js`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { Inter, Roboto, Geist } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto"
});

export const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist"
});`
          },
          {
            type: "paragraph",
            content: "Now every page imports from one place."
          },
          {
            type: "code",
            language: "javascript",
            content: `import { inter } from "@/fonts";`
          },
          {
            type: "paragraph",
            content: "Very clean."
          }
        ]
      },

      {
        heading: "Sharing Fonts Globally",
        blocks: [
          {
            type: "paragraph",
            content: "Most applications load fonts inside Root Layout."
          },
          {
            type: "code",
            language: "jsx",
            content: `app/layout.js

import "./globals.css";
import { inter } from "@/fonts";

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}`
          },
          {
            type: "paragraph",
            content: "Every page automatically uses Inter. No repeated imports."
          }
        ]
      },

      {
        heading: "Combining Multiple Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { Inter, Playfair_Display } from "next/font/google";

const bodyFont = Inter({
    subsets: ["latin"]
});

const headingFont = Playfair_Display({
    subsets: ["latin"]
});`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1 className={headingFont.className}>
    Welcome
</h1>

<p className={bodyFont.className}>
    Modern Next.js Typography
</p>`
          },
          {
            type: "paragraph",
            content: "Result"
          },
          {
            type: "flow",
            steps: [
              "Heading", "→",
              "Playfair Display"
            ]
          },
          {
            type: "flow",
            steps: [
              "Paragraph", "→",
              "Inter"
            ]
          }
        ]
      },

      {
        heading: "Font Variables vs className",
        blocks: [
          {
            type: "paragraph",
            content: "Next.js provides two common ways."
          },
          {
            type: "paragraph",
            content: "Using className"
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={inter.className}>`
          },
          {
            type: "paragraph",
            content: "Simple. Applies font directly."
          },
          {
            type: "paragraph",
            content: "Using variable"
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={inter.variable}>`
          },
          {
            type: "paragraph",
            content: "The font becomes a CSS variable. Useful for"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tailwind",
              "Themes",
              "Multiple fonts",
              "Design systems"
            ]
          },
          {
            type: "paragraph",
            content: "We'll study variables in detail next."
          }
        ]
      },

      {
        heading: "Configuring Different Weights",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of downloading everything,"
          },
          {
            type: "paragraph",
            content: "Bad"
          },
          {
            type: "code",
            language: "javascript",
            content: `weight: [
"100",
"200",
"300",
"400",
"500",
"600",
"700",
"800",
"900"
]`
          },
          {
            type: "paragraph",
            content: "Downloads many font files."
          },
          {
            type: "paragraph",
            content: "Better"
          },
          {
            type: "code",
            language: "javascript",
            content: `weight: [
"400",
"700"
]`
          },
          {
            type: "paragraph",
            content: "Load only required weights."
          },
          {
            type: "paragraph",
            content: "Benefits"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster loading",
              "Smaller bundle",
              "Better Lighthouse score"
            ]
          }
        ]
      },

      {
        heading: "Configuring Styles",
        blocks: [
          {
            type: "paragraph",
            content: "Some fonts support"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Normal",
              "Italic"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"]
});`
          },
          {
            type: "paragraph",
            content: "Now both styles are optimized."
          }
        ]
      },

      {
        heading: "Configuring Display",
        blocks: [
          {
            type: "paragraph",
            content: "You already learned"
          },
          {
            type: "code",
            language: "javascript",
            content: `display: "swap"`
          },
          {
            type: "paragraph",
            content: "But Next.js allows"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "swap",
              "fallback",
              "optional",
              "block",
              "auto"
            ]
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"],
    display: "swap"
});`
          },
          {
            type: "paragraph",
            content: "Usually"
          },
          {
            type: "code",
            language: "javascript",
            content: `swap`
          },
          {
            type: "paragraph",
            content: "is recommended."
          }
        ]
      },

      {
        heading: "Font Subsets",
        blocks: [
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"]
});`
          },
          {
            type: "paragraph",
            content: "Need Hindi?"
          },
          {
            type: "code",
            language: "javascript",
            content: `subsets: ["latin", "latin-ext"]`
          },
          {
            type: "paragraph",
            content: "Need Japanese? Load supported subset. Never download unnecessary character sets."
          }
        ]
      },

      {
        heading: "Loading Local Fonts",
        blocks: [
          {
            type: "code",
            language: "javascript",
            content: `import localFont from "next/font/local";

const brand = localFont({
    src: "./BrandFont-Regular.woff2"
});`
          },
          {
            type: "paragraph",
            content: "Multiple files"
          },
          {
            type: "code",
            language: "javascript",
            content: `const brand = localFont({
    src: [
        {
            path: "./Regular.woff2",
            weight: "400"
        },
        {
            path: "./Bold.woff2",
            weight: "700"
        }
    ]
});`
          },
          {
            type: "paragraph",
            content: "Professional projects commonly do this."
          }
        ]
      },

      {
        heading: "Using Variable Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of downloading"
          },
          {
            type: "flow",
            steps: [
              "Regular", "→",
              "Medium", "→",
              "SemiBold", "→",
              "Bold", "→",
              "ExtraBold"
            ]
          },
          {
            type: "paragraph",
            content: "One variable font contains everything."
          },
          {
            type: "code",
            language: "javascript",
            content: `const geist = Geist({
    subsets: ["latin"]
});`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `font-weight: 325;`
          },
          {
            type: "paragraph",
            content: "Perfectly valid."
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "One file",
              "Continuous weights",
              "Smaller downloads",
              "Better performance"
            ]
          }
        ]
      },

      {
        heading: "Mixing Local and Google Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "flow",
            steps: [
              "Google Font", "→",
              "Inter"
            ]
          },
          {
            type: "flow",
            steps: [
              "Brand Font", "→",
              "Custom Local Font"
            ]
          },
          {
            type: "flow",
            steps: [
              "Code Font", "→",
              "JetBrains Mono"
            ]
          },
          {
            type: "code",
            language: "javascript",
            content: `const brand = localFont({...});

const body = Inter({...});

const code = JetBrains_Mono({...});`
          },
          {
            type: "paragraph",
            content: "This architecture is extremely common."
          }
        ]
      },

      {
        heading: "Font Configuration for Large Projects",
        blocks: [
          {
            type: "paragraph",
            content: "A scalable folder structure"
          },
          {
            type: "tree",
            content: `[app]
  └── [fonts]
        ├── google.js
        ├── local.js
        └── index.js`
          },
          {
            type: "paragraph",
            content: "google.js"
          },
          {
            type: "code",
            language: "javascript",
            content: `export { Inter, Geist } from "next/font/google";`
          },
          {
            type: "paragraph",
            content: "local.js"
          },
          {
            type: "code",
            language: "javascript",
            content: `import localFont from "next/font/local";

export const brand = localFont({
    src: "./Brand.woff2"
});`
          },
          {
            type: "paragraph",
            content: "index.js"
          },
          {
            type: "code",
            language: "javascript",
            content: `export * from "./google";
export * from "./local";`
          },
          {
            type: "paragraph",
            content: "Everything is centralized."
          }
        ]
      },

      {
        heading: "Production Font Strategy",
        blocks: [
          {
            type: "paragraph",
            content: "Large applications usually follow this approach."
          },
          {
            type: "flow",
            steps: [
              "One Body Font", "→",
              "Entire website"
            ]
          },
          {
            type: "flow",
            steps: [
              "One Heading Font", "→",
              "Titles"
            ]
          },
          {
            type: "flow",
            steps: [
              "One Code Font", "→",
              "Documentation"
            ]
          },
          {
            type: "flow",
            steps: [
              "One Brand Font", "→",
              "Marketing"
            ]
          },
          {
            type: "flow",
            steps: [
              "Variable Fonts", "→",
              "Preferred whenever possible"
            ]
          },
          {
            type: "paragraph",
            content: "Simple typography systems are easier to maintain than dozens of unrelated fonts."
          }
        ]
      },

      {
        heading: "Advanced Configuration Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Keep all font imports in one file.",
              "Prefer variable fonts.",
              "Import only required weights.",
              "Use CSS variables for design systems.",
              "Load fonts globally whenever possible.",
              "Avoid importing fonts inside every component.",
              "Self-host brand fonts.",
              "Keep typography consistent across the project."
            ]
          }
        ]
      },

      {
        heading: "CSS Variables with Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "As your application grows, using className alone is no longer enough. Modern design systems often need to switch fonts dynamically, support multiple themes, integrate with CSS frameworks like Tailwind CSS, and reuse typography across hundreds of components."
          },
          {
            type: "paragraph",
            content: "This is where CSS Variables become extremely powerful."
          },
          {
            type: "paragraph",
            content: "Instead of directly applying a font to an element, Next.js allows you to expose the font as a reusable CSS custom property (variable). This makes your typography flexible, scalable, and easier to maintain."
          }
        ]
      },

      {
        heading: "What are CSS Variables?",
        blocks: [
          {
            type: "paragraph",
            content: "CSS Variables (also called CSS Custom Properties) are reusable values defined once and used throughout your styles."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "css",
            content: `:root {
    --primary-color: #2563eb;
}`
          },
          {
            type: "paragraph",
            content: "Then use it anywhere:"
          },
          {
            type: "code",
            language: "css",
            content: `button {
    background: var(--primary-color);
}`
          },
          {
            type: "paragraph",
            content: "The same idea applies to fonts. Instead of hardcoding a font family everywhere, we create a reusable font variable."
          }
        ]
      },

      {
        heading: "Creating a Font Variable",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we import the Inter font."
          },
          {
            type: "code",
            language: "javascript",
            content: `import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});`
          },
          {
            type: "paragraph",
            content: "Notice:"
          },
          {
            type: "code",
            language: "javascript",
            content: `variable: "--font-inter"`
          },
          {
            type: "paragraph",
            content: "Instead of generating only a class, Next.js now also creates a CSS variable."
          }
        ]
      },

      {
        heading: "Applying the Variable",
        blocks: [
          {
            type: "paragraph",
            content: "Inside the Root Layout:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={inter.variable}>
    {children}
</body>`
          },
          {
            type: "paragraph",
            content: "Now the CSS variable exists globally. Internally, Next.js generates something similar to:"
          },
          {
            type: "code",
            language: "css",
            content: `--font-inter: "__Inter_a83d4";`
          },
          {
            type: "paragraph",
            content: "You don't need to create this manually."
          }
        ]
      },

      {
        heading: "Using the Variable in CSS",
        blocks: [
          {
            type: "paragraph",
            content: "Now your global CSS becomes much cleaner."
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: var(--font-inter);
}`
          },
          {
            type: "paragraph",
            content: "Or"
          },
          {
            type: "code",
            language: "css",
            content: `h1 {
    font-family: var(--font-inter);
}`
          },
          {
            type: "paragraph",
            content: "Instead of writing font names repeatedly, you simply reference the variable."
          }
        ]
      },

      {
        heading: "Multiple Font Variables",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages is that multiple fonts can coexist."
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});`
          },
          {
            type: "paragraph",
            content: "Apply both:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={\`\${inter.variable} \${playfair.variable}\`}>
    {children}
</body>`
          },
          {
            type: "paragraph",
            content: "Now CSS becomes expressive:"
          },
          {
            type: "code",
            language: "css",
            content: `body {
    font-family: var(--font-body);
}

h1,
h2,
h3 {
    font-family: var(--font-heading);
}`
          },
          {
            type: "paragraph",
            content: "This creates a clean separation between body text and headings without scattering font imports throughout your project."
          }
        ]
      },

      {
        heading: "Why CSS Variables Are Better for Large Projects",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine a project with 500 components. Without variables:"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: Inter;`
          },
          {
            type: "paragraph",
            content: "appears everywhere. If your design team changes the font to Geist, every occurrence must be updated."
          },
          {
            type: "paragraph",
            content: "With variables:"
          },
          {
            type: "code",
            language: "css",
            content: `font-family: var(--font-body);`
          },
          {
            type: "paragraph",
            content: "Only the variable definition changes. Every component updates automatically. This is one reason why enterprise-scale applications prefer CSS variables for typography."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 CSS variables with `next/font` do more than just clean up your code—they are the bridge between Next.js and styling frameworks like Tailwind CSS. By injecting font variables at the root layout, you can seamlessly map them to your `tailwind.config.js` theme block. This decoupling means your React components only ever reference semantic Tailwind classes (e.g., `font-sans` or `font-heading`) rather than framework-specific font instances. When scaling applications or building white-label products, this separation of concerns is vital. The font configuration handles the loading and optimization pipeline, while CSS variables act as the standardized API for your design system."
          }
        ]
      },
      {
        heading: "Using Fonts with Tailwind CSS",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of Next.js Font Optimization is that it works beautifully with Tailwind CSS. Instead of hardcoding font families in CSS files, you can expose optimized fonts as CSS variables and use them directly as Tailwind utility classes."
          },
          {
            type: "paragraph",
            content: "This approach keeps your design system clean, reusable, and easy to maintain."
          },
          {
            type: "paragraph",
            content: "Step 1: Import the fonts"
          },
          {
            type: "code",
            language: "javascript",
            content: `import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});`
          },
          {
            type: "paragraph",
            content: "Step 2: Apply variables globally"
          },
          {
            type: "code",
            language: "jsx",
            content: `<body className={\`\${inter.variable} \${poppins.variable}\`}>
    {children}
</body>`
          },
          {
            type: "paragraph",
            content: "Step 3: Configure Tailwind"
          },
          {
            type: "code",
            language: "javascript",
            content: `// tailwind.config.js

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-poppins)"],
            },
        },
    },
};`
          },
          {
            type: "paragraph",
            content: "Step 4: Use fonts"
          },
          {
            type: "code",
            language: "jsx",
            content: `<h1 className="font-heading text-4xl">
    Welcome to DevSphere
</h1>

<p className="font-sans">
    Learn modern web development.
</p>`
          },
          {
            type: "paragraph",
            content: "Now changing fonts requires modifying only one configuration instead of hundreds of components."
          },
          {
            type: "paragraph",
            content: "Why this approach is recommended:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Centralized typography",
              "Easy maintenance",
              "Excellent scalability",
              "Theme friendly",
              "Production ready"
            ]
          }
        ]
      },

      {
        heading: "Loading Multiple Weights Efficiently",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners load every available font weight."
          },
          {
            type: "code",
            language: "javascript",
            content: `weight: [
"100",
"200",
"300",
"400",
"500",
"600",
"700",
"800",
"900"
]`
          },
          {
            type: "paragraph",
            content: "Although this works, it increases download size. Better approach: Only import the weights your UI actually uses."
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
});`
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Paragraphs → 400",
              "Buttons → 500",
              "Headings → 700"
            ]
          },
          {
            type: "paragraph",
            content: "No need to download 100, 200, 300, 800 and 900 if they never appear."
          },
          {
            type: "paragraph",
            content: "Variable fonts are even better. Instead of multiple files:"
          },
          {
            type: "flow",
            steps: [
              "Regular", "→",
              "Medium", "→",
              "Bold", "→",
              "Black"
            ]
          },
          {
            type: "paragraph",
            content: "A variable font contains every weight inside one optimized file."
          },
          {
            type: "code",
            language: "css",
            content: `font-weight: 325;
font-weight: 640;`
          },
          {
            type: "paragraph",
            content: "Any value can be used. Advantages:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smaller downloads",
              "Better flexibility",
              "Modern typography",
              "Fewer HTTP requests"
            ]
          },
          {
            type: "paragraph",
            content: "When should multiple weights be loaded?"
          },
          {
            type: "comparison",
            leftTitle: "Good reasons",
            leftItems: [
              "Marketing website",
              "Blog",
              "Portfolio",
              "News website",
              "Magazine"
            ],
            rightTitle: "Not necessary",
            rightItems: [
              "Admin dashboards",
              "Internal tools",
              "CRUD applications"
            ]
          },
          {
            type: "paragraph",
            content: "Those applications often work perfectly with only:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "400",
              "500",
              "700"
            ]
          }
        ]
      },

      {
        heading: "Font Subsetting",
        blocks: [
          {
            type: "paragraph",
            content: "Fonts contain thousands of characters. For example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "English",
              "French",
              "German",
              "Arabic",
              "Japanese",
              "Chinese",
              "Korean",
              "Mathematical symbols",
              "Currency symbols"
            ]
          },
          {
            type: "paragraph",
            content: "Most websites need only a small portion."
          },
          {
            type: "paragraph",
            content: "What is Font Subsetting? Font subsetting means downloading only the required characters. Instead of:"
          },
          {
            type: "flow",
            steps: [
              "Entire Font", "→",
              "5 MB"
            ]
          },
          {
            type: "paragraph",
            content: "Download:"
          },
          {
            type: "flow",
            steps: [
              "Latin Characters Only", "→",
              "200 KB"
            ]
          },
          {
            type: "paragraph",
            content: "Huge performance gain. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"],
});`
          },
          {
            type: "paragraph",
            content: "Need Latin Extended?"
          },
          {
            type: "code",
            language: "javascript",
            content: `subsets: ["latin", "latin-ext"]`
          },
          {
            type: "paragraph",
            content: "Only request what your users actually need."
          },
          {
            type: "paragraph",
            content: "Why subsetting improves performance. Smaller font files mean:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Faster downloads",
              "Faster rendering",
              "Better LCP",
              "Better Lighthouse score",
              "Less bandwidth"
            ]
          },
          {
            type: "paragraph",
            content: "Especially important on mobile networks."
          }
        ]
      },

      {
        heading: "Fallback Fonts",
        blocks: [
          {
            type: "paragraph",
            content: "Even optimized fonts take a little time to load. During that period, browsers display a fallback font. Example:"
          },
          {
            type: "flow",
            steps: [
              "Inter Loading...", "→",
              "Arial", "→",
              "Automatically changes to", "→",
              "Inter"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents invisible text. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});`
          },
          {
            type: "paragraph",
            content: "Browser:"
          },
          {
            type: "flow",
            steps: [
              "Fallback", "→",
              "Optimized Font"
            ]
          },
          {
            type: "paragraph",
            content: "Good fallback fonts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Sans-serif: Arial, Helvetica, Segoe UI, Roboto",
              "Serif: Georgia, Times New Roman",
              "Monospace: Courier New, Consolas, Monaco"
            ]
          },
          {
            type: "paragraph",
            content: "Why fallback fonts matter. Without good fallback fonts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Layout jumps",
              "Poor CLS",
              "Bad reading experience"
            ]
          },
          {
            type: "paragraph",
            content: "A good fallback closely matches the optimized font's metrics."
          }
        ]
      },

      {
        heading: "Performance Analysis",
        blocks: [
          {
            type: "paragraph",
            content: "How do you know font optimization is actually helping? Measure it. Useful tools:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lighthouse",
              "Chrome DevTools",
              "PageSpeed Insights",
              "WebPageTest",
              "DebugBear"
            ]
          },
          {
            type: "paragraph",
            content: "Things to observe:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Font download size",
              "Number of requests",
              "Render blocking",
              "CLS",
              "LCP",
              "First Paint",
              "Font loading waterfall"
            ]
          },
          {
            type: "paragraph",
            content: "Chrome DevTools:"
          },
          {
            type: "flow",
            steps: [
              "Network", "→",
              "Filter", "→",
              "Font"
            ]
          },
          {
            type: "paragraph",
            content: "You can immediately see:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "download size",
              "cache status",
              "loading time",
              "priority"
            ]
          },
          {
            type: "paragraph",
            content: "Lighthouse. After optimization, typical improvements include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Smaller transferred bytes",
              "Better Performance score",
              "Lower CLS",
              "Faster LCP",
              "Faster First Contentful Paint"
            ]
          }
        ]
      },

      {
        heading: "Core Web Vitals",
        blocks: [
          {
            type: "paragraph",
            content: "Font optimization directly affects Core Web Vitals."
          },
          {
            type: "paragraph",
            content: "Largest Contentful Paint (LCP): Usually the Largest heading, Hero text, or Landing page title."
          },
          {
            type: "paragraph",
            content: "If the font loads slowly, the largest content appears late, resulting in poor LCP. Optimized fonts improve this immediately."
          },
          {
            type: "paragraph",
            content: "Cumulative Layout Shift (CLS): Bad scenario:"
          },
          {
            type: "flow",
            steps: [
              "Fallback", "→",
              "Different Font", "→",
              "Entire layout moves"
            ]
          },
          {
            type: "paragraph",
            content: "Users hate this. Using display: \"swap\" plus matching fallback fonts greatly reduces layout shift."
          },
          {
            type: "paragraph",
            content: "Interaction to Next Paint (INP): Heavy rendering can delay interaction. Efficient font loading reduces unnecessary rendering work. Although fonts affect INP less than JavaScript, every optimization helps."
          }
        ]
      },

      {
        heading: "SEO Benefits",
        blocks: [
          {
            type: "paragraph",
            content: "Google does not rank websites because they use Next.js fonts. However, Google does reward fast websites with excellent user experience. Optimized fonts improve:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Page speed",
              "Core Web Vitals",
              "Mobile usability",
              "User engagement",
              "Bounce rate"
            ]
          },
          {
            type: "paragraph",
            content: "All of these indirectly contribute to better SEO performance."
          },
          {
            type: "paragraph",
            content: "Better crawl experience:"
          },
          {
            type: "flow",
            steps: [
              "Fast pages", "→",
              "Quick rendering", "→",
              "Less waiting", "→",
              "Better indexing"
            ]
          },
          {
            type: "paragraph",
            content: "Better user engagement:"
          },
          {
            type: "flow",
            steps: [
              "Readable typography", "→",
              "Longer reading sessions", "→",
              "Higher engagement", "→",
              "Better user satisfaction"
            ]
          }
        ]
      },

      {
        heading: "Accessibility Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "Performance is important, but readability is equally important."
          },
          {
            type: "paragraph",
            content: "Choose readable fonts. Good:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Inter",
              "Roboto",
              "Geist",
              "Open Sans",
              "Source Sans"
            ]
          },
          {
            type: "paragraph",
            content: "Avoid decorative fonts for body text."
          },
          {
            type: "paragraph",
            content: "Maintain proper contrast. Good fonts cannot compensate for poor color contrast. Always ensure readable combinations."
          },
          {
            type: "paragraph",
            content: "Respect browser zoom. Never prevent users from enlarging text."
          },
          {
            type: "paragraph",
            content: "Use sufficient font size. Generally 16px or larger for body text improves readability."
          },
          {
            type: "paragraph",
            content: "Avoid extremely thin weights. Bad: 100, 200 for long paragraphs. Prefer: 400, 500."
          },
          {
            type: "paragraph",
            content: "Use proper line height. Example:"
          },
          {
            type: "code",
            language: "css",
            content: `line-height: 1.6;`
          },
          {
            type: "paragraph",
            content: "Readable typography is an accessibility feature, not just a design choice."
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Professional Next.js applications usually follow these guidelines."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prefer next/font over importing fonts from external CDNs.",
              "Use variable fonts whenever available.",
              "Load only required subsets.",
              "Import only necessary weights.",
              "Use CSS variables for typography systems.",
              "Centralize font configuration.",
              "Use local fonts for proprietary branding.",
              "Test fonts on slow mobile connections.",
              "Measure performance with Lighthouse.",
              "Reuse fonts instead of importing them repeatedly.",
              "Keep typography consistent across the application."
            ]
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Loading unnecessary weights",
                description: "Avoid loading 100-900 if not used. Load only what is needed."
              },
              {
                title: "Using many font families",
                description: "Every additional family increases download size. Two or three carefully chosen families are usually enough."
              },
              {
                title: "Ignoring variable fonts",
                description: "Variable fonts often replace multiple static files with a single optimized file."
              },
              {
                title: "Importing fonts inside many components",
                description: "This creates maintenance problems. Import fonts once and reuse them."
              },
              {
                title: "Not testing on mobile",
                description: "A fast desktop connection can hide font loading issues. Always test on slower networks."
              },
              {
                title: "Choosing style over readability",
                description: "Beautiful fonts are not always readable. User experience should take priority."
              }
            ]
          }
        ]
      },

      {
        heading: "Real-world Font Loading Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A typical production workflow looks like this:"
          },
          {
            type: "flow",
            steps: [
              "Choose Typography", "→",
              "Select Google or Local Font", "→",
              "Prefer Variable Font", "→",
              "Choose Required Weights", "→",
              "Select Required Subsets", "→",
              "Import with next/font", "→",
              "Expose CSS Variables", "→",
              "Configure Tailwind / CSS", "→",
              "Apply Globally in layout.js", "→",
              "Test Performance", "→",
              "Audit Core Web Vitals", "→",
              "Deploy to Production"
            ]
          },
          {
            type: "paragraph",
            content: "This workflow is followed by many modern Next.js applications because it keeps typography organized, scalable, and highly performant."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Most tutorials teach how to import fonts, but experienced engineers think about typography as a performance system, not just a visual choice. A single unnecessary font family or five unused font weights may add hundreds of kilobytes to your initial page load. On a fast desktop connection this difference may seem negligible, but on a slow mobile network it can noticeably delay rendering and reduce Core Web Vitals. When designing a production application, ask these questions before adding any font: Does this font improve readability or only decoration? Can a variable font replace multiple static files? Are all imported weights actually used? Do users need every language subset? Does the fallback font closely match the final font to minimize layout shift? Have I measured the impact using Lighthouse or PageSpeed Insights? Treat fonts like any other performance asset. Every byte saved contributes to a faster, more accessible, and more enjoyable user experience."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Font optimization improves both performance and user experience.",
              "next/font automatically self-hosts fonts and removes unnecessary external requests.",
              "CSS variables make typography scalable and easy to maintain.",
              "Tailwind CSS integrates seamlessly with optimized fonts.",
              "Variable fonts are generally preferred because one file can replace multiple font-weight files.",
              "Load only the font weights and subsets your application actually uses.",
              "Fallback fonts and display: \"swap\" help reduce layout shifts.",
              "Font optimization positively impacts Core Web Vitals such as LCP and CLS.",
              "Readable typography also improves accessibility and indirectly benefits SEO.",
              "Centralizing font configuration, measuring performance, and following production best practices help create fast, maintainable Next.js applications."
            ]
          }
        ]
      }
    ]
  },




  /* ===========================
    Fourth Topic : Static Assets
============================= */
    "nextjs-static-assets": {
    title: "Static Assets",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications are much more than HTML, CSS, and JavaScript. Every website uses various files such as images, videos, PDFs, fonts, icons, robots.txt, favicon.ico, sitemap.xml, JSON files, audio clips, downloadable documents, and many other resources. These files are collectively known as static assets."
          },
          {
            type: "paragraph",
            content: "Unlike dynamic data that is generated by the server, static assets are pre-existing files that are served directly to the browser without any processing."
          },
          {
            type: "paragraph",
            content: "Next.js provides a simple yet highly optimized mechanism for managing and serving these assets through the public directory. Understanding how static assets work is essential because poor asset organization can lead to slower loading times, SEO issues, cache problems, unnecessary bandwidth usage, and a difficult-to-maintain project."
          },
          {
            type: "paragraph",
            content: "In this lesson, you'll learn how Next.js serves static assets, when to use the public folder, how static assets differ from imported assets, how caching works, production best practices, common mistakes, and performance optimization strategies used in real-world applications."
          }
        ]
      },

      {
        heading: "What are Static Assets?",
        blocks: [
          {
            type: "paragraph",
            content: "Static assets are files whose contents remain unchanged until a developer updates them."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Logos",
              "Icons",
              "Videos",
              "Audio files",
              "PDF documents",
              "Fonts",
              "JSON files",
              "robots.txt",
              "sitemap.xml",
              "favicon.ico",
              "Manifest files"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike API responses or database records, these files already exist before the application starts running."
          },
          {
            type: "paragraph",
            content: "For example,"
          },
          {
            type: "code",
            language: "text",
            content: `Logo.png`
          },
          {
            type: "paragraph",
            content: "always remains the same unless you replace the image."
          },
          {
            type: "paragraph",
            content: "Similarly,"
          },
          {
            type: "code",
            language: "text",
            content: `resume.pdf`
          },
          {
            type: "paragraph",
            content: "does not change for every user."
          }
        ]
      },

      {
        heading: "Static Assets vs Dynamic Data",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners confuse these concepts."
          },
          {
            type: "comparison",
            leftTitle: "Static Asset",
            leftItems: [
              "logo.png",
              "Stored inside the project.",
              "Served exactly as it exists."
            ],
            rightTitle: "Dynamic Data",
            rightItems: [
              "GET /api/products",
              "Generated by Database, API, Server, User input.",
              "Changes frequently."
            ]
          },
          {
            type: "paragraph",
            content: "Comparison"
          },
          {
            type: "table",
            headers: ["Static Assets", "Dynamic Data"],
            rows: [
              ["Already exists", "Generated at runtime"],
              ["Same for everyone", "Can differ for each user"],
              ["Usually cached", "Often fetched repeatedly"],
              ["Fast delivery", "Requires server processing"],
              ["Stored as files", "Stored in databases/APIs"]
            ]
          }
        ]
      },

      {
        heading: "Why Static Assets Matter",
        blocks: [
          {
            type: "paragraph",
            content: "Every website contains hundreds of assets."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "flow",
            steps: [
              "Homepage", "→",
              "Logo, Hero Image, Background, Icons, Fonts, Videos, Manifest, Favicon, PDF Brochure"
            ]
          },
          {
            type: "paragraph",
            content: "If these assets are poorly organized:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Larger bundle size",
              "Slow loading",
              "SEO issues",
              "Duplicate downloads",
              "Difficult maintenance"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js solves these problems through structured asset management."
          }
        ]
      },

      {
        heading: "The public Folder",
        blocks: [
          {
            type: "paragraph",
            content: "The public folder is the primary location for static assets."
          },
          {
            type: "paragraph",
            content: "Project structure"
          },
          {
            type: "tree",
            content: `[my-app]
  ├── [app]
  ├── [components]
  └── [public]
       ├── favicon.ico
       ├── logo.png
       ├── [images]
       ├── [icons]
       ├── [videos]
       ├── robots.txt
       └── sitemap.xml`
          },
          {
            type: "paragraph",
            content: "Everything inside public becomes publicly accessible."
          }
        ]
      },

      {
        heading: "How public Works",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose"
          },
          {
            type: "code",
            language: "text",
            content: `public/logo.png`
          },
          {
            type: "paragraph",
            content: "URL becomes"
          },
          {
            type: "code",
            language: "text",
            content: `/logo.png`
          },
          {
            type: "paragraph",
            content: "No need to write"
          },
          {
            type: "code",
            language: "text",
            content: `/public/logo.png`
          },
          {
            type: "paragraph",
            content: "because public itself is not part of the URL."
          },
          {
            type: "paragraph",
            content: "Example Project"
          },
          {
            type: "tree",
            content: `[public]
  └── [images]
       └── profile.jpg`
          },
          {
            type: "paragraph",
            content: "Browser URL"
          },
          {
            type: "code",
            language: "text",
            content: `/images/profile.jpg`
          }
        ]
      },

      {
        heading: "Accessing Static Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Inside HTML"
          },
          {
            type: "code",
            language: "html",
            content: `<img
    src="/images/profile.jpg"
    alt="Profile"
/>`
          },
          {
            type: "paragraph",
            content: "Browser automatically requests"
          },
          {
            type: "code",
            language: "text",
            content: `example.com/images/profile.jpg`
          },
          {
            type: "paragraph",
            content: "Inside Next.js Image Component"
          },
          {
            type: "code",
            language: "jsx",
            content: `import Image from "next/image";

<Image
    src="/images/profile.jpg"
    alt="Profile"
    width={500}
    height={300}
/>`
          },
          {
            type: "paragraph",
            content: "Recommended approach. You still reference the image using the same public path, but Next.js can optimize its loading when using the Image component."
          }
        ]
      },

      {
        heading: "Common Static Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Images"
          },
          {
            type: "tree",
            content: `[public]
  └── [images]
       ├── hero.jpg
       ├── team.png
       └── product.webp`
          },
          {
            type: "paragraph",
            content: "Icons"
          },
          {
            type: "tree",
            content: `[public]
  └── [icons]
       ├── search.svg
       ├── menu.svg
       └── user.svg`
          },
          {
            type: "paragraph",
            content: "Fonts"
          },
          {
            type: "tree",
            content: `[public]
  └── [fonts]
       └── brand.woff2`
          },
          {
            type: "paragraph",
            content: "Although next/font/local can import fonts from anywhere in your project, some developers still keep downloadable or legacy font files inside public/fonts."
          },
          {
            type: "paragraph",
            content: "Videos"
          },
          {
            type: "tree",
            content: `[public]
  └── [videos]
       └── intro.mp4`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "html",
            content: `<video controls>
    <source src="/videos/intro.mp4" />
</video>`
          },
          {
            type: "paragraph",
            content: "PDF Files"
          },
          {
            type: "tree",
            content: `[public]
  └── [docs]
       └── resume.pdf`
          },
          {
            type: "code",
            language: "html",
            content: `<a href="/docs/resume.pdf">
    Download Resume
</a>`
          },
          {
            type: "paragraph",
            content: "Audio"
          },
          {
            type: "tree",
            content: `[public]
  └── [audio]
       └── music.mp3`
          },
          {
            type: "paragraph",
            content: "JSON"
          },
          {
            type: "tree",
            content: `[public]
  └── [data]
       └── countries.json`
          },
          {
            type: "paragraph",
            content: "Accessible via"
          },
          {
            type: "code",
            language: "text",
            content: `/data/countries.json`
          }
        ]
      },

      {
        heading: "Special Files",
        blocks: [
          {
            type: "paragraph",
            content: "Some files must exist at predictable URLs."
          },
          {
            type: "paragraph",
            content: "Examples"
          },
          {
            type: "tree",
            content: `[public]
  ├── favicon.ico
  ├── robots.txt
  ├── sitemap.xml
  └── manifest.json`
          },
          {
            type: "paragraph",
            content: "Browser automatically requests"
          },
          {
            type: "code",
            language: "text",
            content: `/favicon.ico`
          },
          {
            type: "paragraph",
            content: "Search engines request"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "/robots.txt",
              "/sitemap.xml"
            ]
          },
          {
            type: "paragraph",
            content: "These files are commonly placed directly in the public folder so they are served from the root of your site."
          }
        ]
      },

      {
        heading: "Static Assets in the App Router",
        blocks: [
          {
            type: "paragraph",
            content: "With the App Router, the usage remains exactly the same."
          },
          {
            type: "tree",
            content: `[app]
  ├── layout.js
  ├── page.js
  └── [public]
       └── logo.png`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/logo.png"
    alt="Logo"
    width={200}
    height={80}
/>`
          },
          {
            type: "paragraph",
            content: "No extra configuration is required."
          }
        ]
      },

      {
        heading: "Static Assets in the Pages Router",
        blocks: [
          {
            type: "paragraph",
            content: "Similarly,"
          },
          {
            type: "tree",
            content: `[pages]
  ├── index.js
  └── [public]
       └── logo.png`
          },
          {
            type: "paragraph",
            content: "Usage remains identical. This consistency makes migration between routing systems easier."
          }
        ]
      },

      {
        heading: "Using SVG Files",
        blocks: [
          {
            type: "paragraph",
            content: "SVG icons are lightweight and scalable."
          },
          {
            type: "code",
            language: "text",
            content: `public/icons/search.svg`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "html",
            content: `<img
    src="/icons/search.svg"
    alt="Search"
/>`
          },
          {
            type: "paragraph",
            content: "or"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/icons/search.svg"
    alt="Search"
    width={24}
    height={24}
/>`
          },
          {
            type: "paragraph",
            content: "SVGs are ideal for icons, logos, and illustrations because they remain sharp at any resolution."
          }
        ]
      },

      {
        heading: "Organizing Static Assets",
        blocks: [
          {
            type: "paragraph",
            content: "As projects grow, organizing files becomes important."
          },
          {
            type: "paragraph",
            content: "Good structure"
          },
          {
            type: "tree",
            content: `[public]
  ├── [images]
  │    ├── [products]
  │    ├── [avatars]
  │    └── [backgrounds]
  ├── [icons]
  ├── [fonts]
  ├── [videos]
  ├── [documents]
  ├── [audio]
  ├── [animations]
  └── [json]`
          },
          {
            type: "paragraph",
            content: "Avoid dumping everything directly into public."
          }
        ]
      },

      {
        heading: "Importing Assets vs Using public",
        blocks: [
          {
            type: "paragraph",
            content: "There are two common approaches."
          },
          {
            type: "paragraph",
            content: "Importing Assets"
          },
          {
            type: "code",
            language: "jsx",
            content: `import hero from "@/assets/hero.png";

<Image
    src={hero}
    alt="Hero"
/>`
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Build-time optimization",
              "Automatic metadata",
              "Better tree-shaking",
              "Type safety in some setups"
            ]
          },
          {
            type: "paragraph",
            content: "Using public"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/images/hero.png"
    alt="Hero"
    width={900}
    height={500}
/>`
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simple URL access",
              "Ideal for assets referenced by path",
              "Great for downloadable files",
              "Easy to replace without changing imports"
            ]
          }
        ]
      },

      {
        heading: "When to Import Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Prefer importing when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "The asset belongs to a component.",
              "It is bundled with your application.",
              "You want automatic metadata (such as image dimensions).",
              "You want unused assets removed during bundling."
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "tree",
            content: `[components]
  └── [Button]
       └── icon.svg`
          },
          {
            type: "paragraph",
            content: "Only the Button component uses it. Importing keeps the dependency local."
          }
        ]
      },

      {
        heading: "When to Use the public Folder",
        blocks: [
          {
            type: "paragraph",
            content: "Prefer public when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Files need a stable URL.",
              "Users download the file directly.",
              "Search engines access it.",
              "External libraries expect a URL.",
              "The asset is shared across many pages."
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
              "/robots.txt",
              "/favicon.ico",
              "/docs/manual.pdf",
              "/images/logo.png"
            ]
          }
        ]
      },

      {
        heading: "Asset Loading Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Requests /logo.png", "→",
              "Next.js Server", "→",
              "Reads file from public/logo.png", "→",
              "Returns file directly"
            ]
          },
          {
            type: "paragraph",
            content: "Notice that no React component or API route processes the file."
          }
        ]
      },

      {
        heading: "Caching of Static Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Static assets are excellent candidates for browser caching because they rarely change."
          },
          {
            type: "paragraph",
            content: "When cached:"
          },
          {
            type: "flow",
            steps: [
              "First Visit", "→",
              "Download Image", "→",
              "Browser Stores Image", "→",
              "Second Visit", "→",
              "Load from Cache"
            ]
          },
          {
            type: "paragraph",
            content: "This reduces network requests and improves loading speed."
          },
          {
            type: "paragraph",
            content: "For assets that change frequently, use versioned file names such as:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "logo-v2.png",
              "banner-2026.webp"
            ]
          },
          {
            type: "paragraph",
            content: "This helps browsers fetch the updated file instead of using an older cached version."
          }
        ]
      },

      {
        heading: "Performance Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Use modern image formats like WebP or AVIF when appropriate.",
              "Compress images before adding them to the project.",
              "Keep videos outside the JavaScript bundle.",
              "Store downloadable files in public.",
              "Organize assets into meaningful folders.",
              "Prefer SVG for icons and logos.",
              "Use the Image component for images whenever possible.",
              "Remove unused assets during cleanup.",
              "Avoid storing extremely large files if they can be served from a CDN."
            ]
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "❌ Writing /public/logo.png",
                description: "Incorrect: <img src=\"/public/logo.png\" />. Correct: <img src=\"/logo.png\" />"
              },
              {
                title: "❌ Keeping all files in one folder",
                description: "public/ logo.png image1.png image2.png video.mp4 resume.pdf favicon.ico. Becomes difficult to maintain."
              },
              {
                title: "❌ Using the <img> tag for every image",
                description: "While <img> works, using Next.js Image provides lazy loading, responsive sizing, and automatic optimization."
              },
              {
                title: "❌ Storing component-specific assets in public",
                description: "If an image belongs only to a single component, importing it directly is often a cleaner approach."
              },
              {
                title: "❌ Uploading uncompressed images",
                description: "A 10 MB hero image can dramatically slow down page loading. Optimize assets before adding them to the project."
              }
            ]
          }
        ]
      },

      {
        heading: "Production Folder Structure",
        blocks: [
          {
            type: "paragraph",
            content: "A scalable organization might look like this:"
          },
          {
            type: "tree",
            content: `[public]
  ├── [images]
  │    ├── [products]
  │    ├── [blog]
  │    ├── [avatars]
  │    └── [backgrounds]
  ├── [icons]
  │    ├── [ui]
  │    └── [social]
  ├── [fonts]
  ├── [videos]
  ├── [documents]
  ├── [audio]
  ├── [animations]
  ├── [data]
  ├── favicon.ico
  ├── robots.txt
  ├── sitemap.xml
  └── manifest.json`
          },
          {
            type: "paragraph",
            content: "This structure scales well for enterprise projects."
          }
        ]
      },

      {
        heading: "Real-world Workflow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Create Asset", "→",
              "Optimize File Size", "→",
              "Choose Correct Format", "→",
              "Place in Appropriate Folder", "→",
              "Reference with URL", "→",
              "Use Image Component (if image)", "→",
              "Test Performance", "→",
              "Deploy"
            ]
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 A common misconception is that everything should go into the public folder. In reality, professional Next.js applications distinguish between public assets and module assets. Think of the public folder as a place for files that need a permanent URL and may be accessed directly by browsers, search engines, or external services. Examples include: robots.txt, favicon.ico, Downloadable PDFs, Open Graph images, Logos shared across the application. On the other hand, assets that belong exclusively to a React component—such as an icon used only by a specific button or an illustration shown only on one page—are often better imported directly into that component. This allows the build system to optimize them, include metadata, and eliminate unused files during bundling. A useful rule is: If you need a URL, use public. If the asset belongs to your code, consider importing it. This distinction helps keep projects organized, improves maintainability, and enables better optimization as applications grow."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Static assets are files such as images, fonts, videos, PDFs, icons, and configuration files that do not change at runtime.",
              "The public folder is the standard place for serving static assets in Next.js.",
              "Files inside public are accessed directly from the root URL (for example, public/logo.png becomes /logo.png).",
              "Both the App Router and Pages Router use the same approach for serving static assets.",
              "Use the Image component for images whenever possible to benefit from automatic optimization.",
              "Import component-specific assets directly, but use the public folder for files that require stable URLs or direct browser access.",
              "Organize assets into logical folders to improve maintainability.",
              "Optimize, compress, and cache assets to improve performance and Core Web Vitals.",
              "Choosing the right storage strategy for each asset leads to faster, cleaner, and more scalable Next.js applications."
            ]
          }
        ]
      }
    ]
  },




  /* ===========================
    Fifth Topic : Public Folder
============================= */
    "nextjs-public-folder": {
    title: "Public Folder",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "When building a web application, not every file is processed by React, Webpack, Turbopack, or Next.js. Many files need to be served exactly as they are."
          },
          {
            type: "paragraph",
            content: "Examples include:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Images",
              "Icons",
              "Logos",
              "Robots.txt",
              "favicon.ico",
              "PDFs",
              "Videos",
              "Audio files",
              "Static JSON",
              "Downloadable files"
            ]
          },
          {
            type: "paragraph",
            content: "These files are stored inside the public folder."
          },
          {
            type: "paragraph",
            content: "The public folder is one of the simplest yet most important folders in a Next.js application. Understanding when and when not to use it is essential for writing scalable applications."
          }
        ]
      },

      {
        heading: "What is the Public Folder?",
        blocks: [
          {
            type: "paragraph",
            content: "The public folder is a special directory located at the root of a Next.js project."
          },
          {
            type: "tree",
            content: `[my-app]
  ├── [app]
  ├── [components]
  ├── [public]
  ├── package.json
  └── next.config.js`
          },
          {
            type: "paragraph",
            content: "Unlike files inside app or src, files inside public are not bundled during build. Instead, Next.js serves them directly from the server."
          },
          {
            type: "paragraph",
            content: "Think of it like this:"
          },
          {
            type: "flow",
            steps: [
              "Browser Request", "→",
              "https://example.com/logo.png", "→",
              "public/logo.png", "→",
              "Returned directly"
            ]
          },
          {
            type: "paragraph",
            content: "There is no JavaScript processing. No React rendering. No bundling. Just a direct file response."
          }
        ]
      },

      {
        heading: "Why Does Next.js Need a Public Folder?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine every image was imported into JavaScript."
          },
          {
            type: "code",
            language: "javascript",
            content: `import logo from "./logo.png"`
          },
          {
            type: "paragraph",
            content: "This works for component images. But what about:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "robots.txt",
              "sitemap.xml",
              "favicon.ico",
              "downloadable PDFs",
              "thousands of product images",
              "verification files"
            ]
          },
          {
            type: "paragraph",
            content: "These aren't React components. They simply need to exist on the server. The public folder solves exactly this problem."
          }
        ]
      },

      {
        heading: "How Public Folder Works",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your project contains:"
          },
          {
            type: "tree",
            content: `[public]
  ├── logo.png
  ├── [images]
  │    └── hero.jpg
  ├── [docs]
  │    └── resume.pdf
  └── [icons]
       └── menu.svg`
          },
          {
            type: "paragraph",
            content: "Next.js automatically exposes these files. URL mapping becomes:"
          },
          {
            type: "flow",
            steps: [
              "public/logo.png", "→",
              "/logo.png"
            ]
          },
          {
            type: "flow",
            steps: [
              "public/images/hero.jpg", "→",
              "/images/hero.jpg"
            ]
          },
          {
            type: "flow",
            steps: [
              "public/docs/resume.pdf", "→",
              "/docs/resume.pdf"
            ]
          },
          {
            type: "flow",
            steps: [
              "public/icons/menu.svg", "→",
              "/icons/menu.svg"
            ]
          },
          {
            type: "paragraph",
            content: "Notice something important. The word public never appears in the URL. You never write:"
          },
          {
            type: "code",
            language: "text",
            content: `/public/logo.png`
          },
          {
            type: "paragraph",
            content: "Instead:"
          },
          {
            type: "code",
            language: "text",
            content: `/logo.png`
          }
        ]
      },

      {
        heading: "Accessing Public Files",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose we have"
          },
          {
            type: "tree",
            content: `[public]
  └── profile.png`
          },
          {
            type: "paragraph",
            content: "Inside JSX:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<img src="/profile.png" alt="Profile" />`
          },
          {
            type: "paragraph",
            content: "That's all. No imports. No require(). No path calculations."
          },
          {
            type: "paragraph",
            content: "Example Project:"
          },
          {
            type: "tree",
            content: `[public]
  └── banner.jpg`
          },
          {
            type: "paragraph",
            content: "Component:"
          },
          {
            type: "code",
            language: "jsx",
            content: `export default function Home() {
    return (
        <img
            src="/banner.jpg"
            alt="Banner"
        />
    );
}`
          },
          {
            type: "paragraph",
            content: "Browser requests"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com/banner.jpg`
          },
          {
            type: "paragraph",
            content: "Next.js returns"
          },
          {
            type: "code",
            language: "text",
            content: `public/banner.jpg`
          }
        ]
      },

      {
        heading: "Using Public Folder with the Image Component",
        blocks: [
          {
            type: "paragraph",
            content: "The recommended way to display images is using Next.js Image. Instead of"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="/hero.jpg" />`
          },
          {
            type: "paragraph",
            content: "Use"
          },
          {
            type: "code",
            language: "jsx",
            content: `import Image from "next/image";

export default function Home() {
    return (
        <Image
            src="/hero.jpg"
            alt="Hero"
            width={1200}
            height={600}
        />
    );
}`
          },
          {
            type: "paragraph",
            content: "Now you get"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "lazy loading",
              "responsive images",
              "optimization",
              "caching",
              "modern formats"
            ]
          },
          {
            type: "paragraph",
            content: "automatically."
          }
        ]
      },

      {
        heading: "Typical Public Folder Structure",
        blocks: [
          {
            type: "paragraph",
            content: "Small projects"
          },
          {
            type: "tree",
            content: `[public]
  ├── logo.png
  └── favicon.ico`
          },
          {
            type: "paragraph",
            content: "Medium projects"
          },
          {
            type: "tree",
            content: `[public]
  ├── [images]
  ├── [icons]
  ├── [videos]
  ├── [fonts]
  └── [documents]`
          },
          {
            type: "paragraph",
            content: "Large projects"
          },
          {
            type: "tree",
            content: `[public]
  ├── [images]
  │    ├── [products]
  │    ├── [avatars]
  │    └── [banners]
  ├── [icons]
  ├── [fonts]
  ├── [downloads]
  ├── [audio]
  ├── [video]
  ├── [seo]
  │    └── og-image.png
  ├── [documents]
  └── [animations]`
          },
          {
            type: "paragraph",
            content: "Organizing files early prevents future chaos."
          }
        ]
      },

      {
        heading: "Files Commonly Stored in Public Folder",
        blocks: [
          {
            type: "paragraph",
            content: "Images"
          },
          {
            type: "tree",
            content: `[public]
  └── [images]
       ├── hero.jpg
       ├── product1.jpg
       └── team.png`
          },
          {
            type: "paragraph",
            content: "Usage"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/images/hero.jpg"
    alt="Hero"
    width={900}
    height={500}
/>`
          },
          {
            type: "paragraph",
            content: "Icons"
          },
          {
            type: "tree",
            content: `[public]
  └── [icons]
       ├── search.svg
       ├── menu.svg
       └── close.svg`
          },
          {
            type: "code",
            language: "html",
            content: `<img src="/icons/menu.svg" />`
          },
          {
            type: "paragraph",
            content: "Videos"
          },
          {
            type: "tree",
            content: `[public]
  └── [videos]
       └── intro.mp4`
          },
          {
            type: "code",
            language: "html",
            content: `<video controls>
    <source src="/videos/intro.mp4" />
</video>`
          },
          {
            type: "paragraph",
            content: "PDFs"
          },
          {
            type: "tree",
            content: `[public]
  └── [docs]
       └── guide.pdf`
          },
          {
            type: "code",
            language: "html",
            content: `<a href="/docs/guide.pdf">
    Download Guide
</a>`
          },
          {
            type: "paragraph",
            content: "Audio"
          },
          {
            type: "tree",
            content: `[public]
  └── [audio]
       └── welcome.mp3`
          },
          {
            type: "code",
            language: "html",
            content: `<audio controls>
    <source src="/audio/welcome.mp3" />
</audio>`
          },
          {
            type: "paragraph",
            content: "JSON Files"
          },
          {
            type: "tree",
            content: `[public]
  └── [data]
       └── countries.json`
          },
          {
            type: "paragraph",
            content: "Access directly:"
          },
          {
            type: "code",
            language: "text",
            content: `/data/countries.json`
          },
          {
            type: "paragraph",
            content: "Useful for static configuration files."
          },
          {
            type: "paragraph",
            content: "favicon.ico. One of the most common files."
          },
          {
            type: "tree",
            content: `[public]
  └── favicon.ico`
          },
          {
            type: "paragraph",
            content: "Browser automatically requests"
          },
          {
            type: "code",
            language: "text",
            content: `/favicon.ico`
          },
          {
            type: "paragraph",
            content: "No configuration required."
          },
          {
            type: "paragraph",
            content: "robots.txt"
          },
          {
            type: "tree",
            content: `[public]
  └── robots.txt`
          },
          {
            type: "paragraph",
            content: "Automatically becomes"
          },
          {
            type: "code",
            language: "text",
            content: `https://site.com/robots.txt`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `User-agent: *

Allow: /

Sitemap: https://site.com/sitemap.xml`
          },
          {
            type: "paragraph",
            content: "sitemap.xml"
          },
          {
            type: "tree",
            content: `[public]
  └── sitemap.xml`
          },
          {
            type: "paragraph",
            content: "Accessible via"
          },
          {
            type: "code",
            language: "text",
            content: `/sitemap.xml`
          },
          {
            type: "paragraph",
            content: "Very useful for SEO."
          },
          {
            type: "paragraph",
            content: "Verification Files"
          },
          {
            type: "paragraph",
            content: "Google Search Console"
          },
          {
            type: "code",
            language: "text",
            content: `googlexxxxxxxx.html`
          },
          {
            type: "paragraph",
            content: "Microsoft"
          },
          {
            type: "code",
            language: "text",
            content: `BingSiteAuth.xml`
          },
          {
            type: "paragraph",
            content: "Facebook"
          },
          {
            type: "code",
            language: "text",
            content: `facebook-domain-verification.html`
          },
          {
            type: "paragraph",
            content: "All belong inside"
          },
          {
            type: "code",
            language: "text",
            content: `public/`
          }
        ]
      },

      {
        heading: "Using CSS Background Images",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose"
          },
          {
            type: "tree",
            content: `[public]
  └── [images]
       └── hero.jpg`
          },
          {
            type: "paragraph",
            content: "CSS"
          },
          {
            type: "code",
            language: "css",
            content: `.hero {
    background-image: url("/images/hero.jpg");
}`
          },
          {
            type: "paragraph",
            content: "Notice No imports. No relative paths. Just absolute URL."
          }
        ]
      },

      {
        heading: "Using SVG Files",
        blocks: [
          {
            type: "paragraph",
            content: "SVG works perfectly."
          },
          {
            type: "tree",
            content: `[public]
  └── [icons]
       └── logo.svg`
          },
          {
            type: "code",
            language: "html",
            content: `<img
    src="/icons/logo.svg"
    alt="Logo"
/>`
          },
          {
            type: "paragraph",
            content: "Or"
          },
          {
            type: "code",
            language: "css",
            content: `background-image: url("/icons/logo.svg");`
          }
        ]
      },

      {
        heading: "Downloadable Files",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose"
          },
          {
            type: "tree",
            content: `[public]
  └── [files]
       └── resume.pdf`
          },
          {
            type: "code",
            language: "html",
            content: `<a
    href="/files/resume.pdf"
    download
>
    Download Resume
</a>`
          },
          {
            type: "paragraph",
            content: "Browser immediately downloads the file."
          }
        ]
      },

      {
        heading: "Serving Static HTML",
        blocks: [
          {
            type: "tree",
            content: `[public]
  └── maintenance.html`
          },
          {
            type: "paragraph",
            content: "Accessible via"
          },
          {
            type: "code",
            language: "text",
            content: `/maintenance.html`
          },
          {
            type: "paragraph",
            content: "Sometimes useful for maintenance pages or standalone documentation."
          }
        ]
      },

      {
        heading: "Accessing Public Assets in JavaScript",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `const imagePath = "/images/profile.png";
<Image
    src={imagePath}
    width={200}
    height={200}
    alt="Profile"
/>`
          },
          {
            type: "paragraph",
            content: "Since it's simply a URL string, it can be dynamically generated."
          }
        ]
      },

      {
        heading: "Public Folder vs Importing Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Importing"
          },
          {
            type: "code",
            language: "javascript",
            content: `import logo from "./logo.png";`
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Type safety",
              "Tree shaking",
              "Automatic optimization",
              "Bundle awareness"
            ]
          },
          {
            type: "paragraph",
            content: "Public Folder"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/logo.png"
    width={150}
    height={80}
    alt="Logo"
/>`
          },
          {
            type: "paragraph",
            content: "Advantages"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Simple URLs",
              "Large static assets",
              "SEO files",
              "Downloads",
              "Public access"
            ]
          }
        ]
      },

      {
        heading: "When Should You Use Public Folder?",
        blocks: [
          {
            type: "paragraph",
            content: "Use it when:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "✔ Images shared across many pages",
              "✔ Logos",
              "✔ Icons",
              "✔ PDFs",
              "✔ Audio",
              "✔ Video",
              "✔ robots.txt",
              "✔ favicon.ico",
              "✔ sitemap.xml",
              "✔ Static JSON",
              "✔ Download files",
              "✔ Manifest files"
            ]
          }
        ]
      },

      {
        heading: "When Should You NOT Use Public Folder?",
        blocks: [
          {
            type: "paragraph",
            content: "Avoid storing:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ Sensitive files",
              "❌ API secrets",
              "❌ Database backups",
              "❌ Environment files",
              "❌ Private documents",
              "❌ User passwords",
              "❌ Server configuration"
            ]
          },
          {
            type: "paragraph",
            content: "Everything inside public is publicly accessible if someone knows the URL."
          },
          {
            type: "paragraph",
            content: "For example:"
          },
          {
            type: "code",
            language: "text",
            content: `public/private.pdf`
          },
          {
            type: "paragraph",
            content: "Anyone can access"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com/private.pdf`
          },
          {
            type: "paragraph",
            content: "So never place confidential information there."
          }
        ]
      },

      {
        heading: "Public Folder vs app Folder",
        blocks: [
          {
            type: "table",
            headers: ["app", "public"],
            rows: [
              ["React components", "Static assets"],
              ["Pages", "Images"],
              ["Layouts", "Videos"],
              ["Templates", "PDFs"],
              ["Server Components", "favicon.ico"],
              ["Client Components", "robots.txt"],
              ["Dynamic UI", "Static files"]
            ]
          }
        ]
      },

      {
        heading: "Public Folder Request Flow",
        blocks: [
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "GET /images/logo.png", "→",
              "Next.js Server", "→",
              "Looks inside public/images/logo.png", "→",
              "Returns file directly", "→",
              "Browser displays image"
            ]
          },
          {
            type: "paragraph",
            content: "Unlike React components, no rendering or compilation happens. The file is streamed directly from disk (or your hosting platform/CDN), making access simple and efficient."
          }
        ]
      },
      {
        heading: "Public Folder: Part 2",
        blocks: [
          {
            type: "paragraph",
            content: "In Part 1, we learned what the public folder is, how it works, and when to use it. In this part, we'll explore advanced concepts including caching, CDN integration, SEO assets, production best practices, security, and common mistakes. These are the concepts that separate beginner-level Next.js developers from professional developers building scalable production applications."
          }
        ]
      },

      {
        heading: "Asset Caching Behavior",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of serving static assets is browser caching."
          },
          {
            type: "paragraph",
            content: "Whenever a browser downloads an image, font, PDF, or video, it doesn't necessarily request it again every time the user visits your website. Instead, it stores (caches) the file locally."
          },
          {
            type: "paragraph",
            content: "First Visit"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Request logo.png", "→",
              "Next.js Server", "→",
              "Returns image", "→",
              "Browser stores it in cache"
            ]
          },
          {
            type: "paragraph",
            content: "Later: Second Visit"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Already cached", "→",
              "No download needed"
            ]
          },
          {
            type: "paragraph",
            content: "This makes websites significantly faster."
          }
        ]
      },

      {
        heading: "Cache-Control Headers",
        blocks: [
          {
            type: "paragraph",
            content: "Every static asset is returned with HTTP headers. Example:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cache-Control",
              "Content-Type",
              "ETag",
              "Last-Modified",
              "Content-Length"
            ]
          },
          {
            type: "paragraph",
            content: "The most important one is:"
          },
          {
            type: "code",
            language: "text",
            content: `Cache-Control`
          },
          {
            type: "paragraph",
            content: "It tells browsers:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "How long to keep a file",
              "When to request it again",
              "Whether it should always be revalidated"
            ]
          },
          {
            type: "paragraph",
            content: "By default, files inside the public folder are served conservatively because Next.js cannot know if you will replace them without changing the filename."
          },
          {
            type: "paragraph",
            content: "This means browsers may revalidate these files instead of caching them forever."
          }
        ]
      },

      {
        heading: "Versioning Static Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose your logo changes."
          },
          {
            type: "paragraph",
            content: "Old file"
          },
          {
            type: "code",
            language: "text",
            content: `logo.png`
          },
          {
            type: "paragraph",
            content: "Browser already cached it. Even after deployment, users may still see the old logo. Instead, professionals rename assets."
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "logo-v2.png",
              "logo-2026.png",
              "logo.abcd123.png"
            ]
          },
          {
            type: "paragraph",
            content: "Now browsers recognize it as a new file and download it immediately. This technique is called cache busting."
          }
        ]
      },

      {
        heading: "Fingerprinting (Hashing)",
        blocks: [
          {
            type: "paragraph",
            content: "Many build systems automatically generate filenames like:"
          },
          {
            type: "code",
            language: "text",
            content: `logo.a91f4b.png`
          },
          {
            type: "paragraph",
            content: "The random hash changes whenever the image changes. This guarantees users always receive the newest version."
          },
          {
            type: "paragraph",
            content: "Imported assets can be fingerprinted automatically by the bundler, whereas files placed directly in public keep the filenames you choose."
          }
        ]
      },

      {
        heading: "Using Public Folder with Remote Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Not every asset should live inside your project. Many production applications use:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "AWS S3",
              "Cloudinary",
              "ImageKit",
              "Azure Blob Storage",
              "Google Cloud Storage",
              "Cloudflare R2"
            ]
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "code",
            language: "text",
            content: `public/products/`
          },
          {
            type: "paragraph",
            content: "they may store"
          },
          {
            type: "code",
            language: "text",
            content: `https://cdn.example.com/products/`
          },
          {
            type: "paragraph",
            content: "Your application simply requests those URLs."
          }
        ]
      },

      {
        heading: "CDN Integration",
        blocks: [
          {
            type: "paragraph",
            content: "A CDN (Content Delivery Network) stores copies of files on servers across the world."
          },
          {
            type: "paragraph",
            content: "Without CDN"
          },
          {
            type: "flow",
            steps: [
              "India User", "→",
              "US Server", "→",
              "Image"
            ]
          },
          {
            type: "paragraph",
            content: "With CDN"
          },
          {
            type: "flow",
            steps: [
              "India User", "→",
              "Mumbai CDN", "→",
              "Image"
            ]
          },
          {
            type: "paragraph",
            content: "Latency becomes much lower. Pages load much faster. For global websites, using a CDN is almost always recommended."
          }
        ]
      },

      {
        heading: "assetPrefix",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes all static assets should come from a CDN instead of the same server. Next.js supports this using:"
          },
          {
            type: "code",
            language: "javascript",
            content: `// next.config.js

module.exports = {
    assetPrefix: "https://cdn.example.com",
}`
          },
          {
            type: "paragraph",
            content: "Now static asset URLs can resolve through the CDN, depending on your deployment strategy. This is useful for enterprise-scale applications that separate asset delivery from application servers."
          }
        ]
      },

      {
        heading: "basePath",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes an application is hosted inside a subdirectory. Example: Instead of"
          },
          {
            type: "code",
            language: "text",
            content: `example.com`
          },
          {
            type: "paragraph",
            content: "the application lives at"
          },
          {
            type: "code",
            language: "text",
            content: `example.com/dashboard`
          },
          {
            type: "paragraph",
            content: "Configure:"
          },
          {
            type: "code",
            language: "javascript",
            content: `module.exports = {
    basePath: "/dashboard",
}`
          },
          {
            type: "paragraph",
            content: "Now"
          },
          {
            type: "code",
            language: "text",
            content: `public/logo.png`
          },
          {
            type: "paragraph",
            content: "becomes"
          },
          {
            type: "code",
            language: "text",
            content: `/dashboard/logo.png`
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "code",
            language: "text",
            content: `/logo.png`
          },
          {
            type: "paragraph",
            content: "This is extremely useful when deploying under reverse proxies or shared domains."
          }
        ]
      },

      {
        heading: "Using Public Assets with basePath",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose"
          },
          {
            type: "code",
            language: "javascript",
            content: `basePath = "/admin"`
          },
          {
            type: "paragraph",
            content: "Your project contains"
          },
          {
            type: "code",
            language: "text",
            content: `public/logo.png`
          },
          {
            type: "paragraph",
            content: "Accessible URL becomes"
          },
          {
            type: "code",
            language: "text",
            content: `/admin/logo.png`
          },
          {
            type: "paragraph",
            content: "instead of"
          },
          {
            type: "code",
            language: "text",
            content: `/logo.png`
          },
          {
            type: "paragraph",
            content: "Always remember this while deploying."
          }
        ]
      },

      {
        heading: "SEO Assets",
        blocks: [
          {
            type: "paragraph",
            content: "Search engines expect certain files at predictable locations. The public folder is the perfect place for them."
          },
          {
            type: "paragraph",
            content: "favicon.ico"
          },
          {
            type: "tree",
            content: `[public]
  └── favicon.ico`
          },
          {
            type: "paragraph",
            content: "Accessible:"
          },
          {
            type: "code",
            language: "text",
            content: `/favicon.ico`
          },
          {
            type: "paragraph",
            content: "Browsers automatically request it."
          },
          {
            type: "paragraph",
            content: "robots.txt"
          },
          {
            type: "tree",
            content: `[public]
  └── robots.txt`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "code",
            language: "text",
            content: `User-agent: *

Allow: /

Sitemap: https://example.com/sitemap.xml`
          },
          {
            type: "paragraph",
            content: "This tells search engines which pages they can crawl."
          },
          {
            type: "paragraph",
            content: "sitemap.xml"
          },
          {
            type: "tree",
            content: `[public]
  └── sitemap.xml`
          },
          {
            type: "paragraph",
            content: "Search engines use it to discover all website pages. Large websites often generate this dynamically, but static sites can place it directly in the public folder."
          }
        ]
      },

      {
        heading: "Open Graph Images",
        blocks: [
          {
            type: "paragraph",
            content: "When sharing links on:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Facebook",
              "LinkedIn",
              "Discord",
              "WhatsApp",
              "X (Twitter)"
            ]
          },
          {
            type: "paragraph",
            content: "these platforms display a preview image. Usually stored as"
          },
          {
            type: "tree",
            content: `[public]
  └── og-image.png`
          },
          {
            type: "paragraph",
            content: "Referenced inside metadata. Example:"
          },
          {
            type: "code",
            language: "javascript",
            content: `export const metadata = {
    openGraph: {
        images: "/og-image.png",
    },
};`
          }
        ]
      },

      {
        heading: "Web Manifest",
        blocks: [
          {
            type: "paragraph",
            content: "Progressive Web Apps (PWAs) use"
          },
          {
            type: "code",
            language: "text",
            content: `manifest.json`
          },
          {
            type: "paragraph",
            content: "Example"
          },
          {
            type: "tree",
            content: `[public]
  └── manifest.json`
          },
          {
            type: "paragraph",
            content: "This defines"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "app name",
              "icons",
              "theme colors",
              "splash screens",
              "display mode"
            ]
          }
        ]
      },

      {
        heading: "Performance Implications",
        blocks: [
          {
            type: "paragraph",
            content: "The public folder is fast because files are served directly. No React rendering. No hydration. No JavaScript execution. Just"
          },
          {
            type: "flow",
            steps: [
              "Browser", "→",
              "Server", "→",
              "File"
            ]
          },
          {
            type: "paragraph",
            content: "However... Serving thousands of huge images from the public folder can still slow your application if they are not optimized. Always compress images before adding them."
          }
        ]
      },

      {
        heading: "Should Everything Go into Public?",
        blocks: [
          {
            type: "paragraph",
            content: "Absolutely not. Large enterprise projects avoid putting every asset there. Instead they split assets. Example"
          },
          {
            type: "flow",
            steps: [
              "Product Images", "→",
              "Cloudinary"
            ]
          },
          {
            type: "flow",
            steps: [
              "Videos", "→",
              "S3"
            ]
          },
          {
            type: "flow",
            steps: [
              "User Uploads", "→",
              "Cloud Storage"
            ]
          },
          {
            type: "flow",
            steps: [
              "Small Icons", "→",
              "public"
            ]
          },
          {
            type: "paragraph",
            content: "This improves scalability."
          }
        ]
      },

      {
        heading: "Security Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "One of the most misunderstood aspects of the public folder: Everything inside it is publicly accessible. If someone knows the URL"
          },
          {
            type: "code",
            language: "text",
            content: `https://example.com/private.pdf`
          },
          {
            type: "paragraph",
            content: "they can download it. Never place:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "❌ API keys",
              "❌ Database exports",
              "❌ Password files",
              "❌ Private documents",
              "❌ Confidential company data",
              "❌ Environment files"
            ]
          },
          {
            type: "paragraph",
            content: "inside"
          },
          {
            type: "code",
            language: "text",
            content: `public/`
          }
        ]
      },

      {
        heading: "User Uploads",
        blocks: [
          {
            type: "paragraph",
            content: "Many beginners upload user files directly into"
          },
          {
            type: "code",
            language: "text",
            content: `public/uploads`
          },
          {
            type: "paragraph",
            content: "This is usually a poor production strategy because:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "server storage grows indefinitely",
              "deployments may overwrite files",
              "serverless platforms often have ephemeral file systems",
              "scaling across multiple servers becomes difficult"
            ]
          },
          {
            type: "paragraph",
            content: "Better approach"
          },
          {
            type: "flow",
            steps: [
              "User Upload", "→",
              "Cloud Storage", "→",
              "URL stored in database", "→",
              "Application displays image"
            ]
          }
        ]
      },

      {
        heading: "Production Best Practices",
        blocks: [
          {
            type: "paragraph",
            content: "Keep the folder organized"
          },
          {
            type: "tree",
            content: `[public]
  ├── [images]
  ├── [icons]
  ├── [fonts]
  ├── [videos]
  ├── [downloads]
  └── [seo]`
          },
          {
            type: "paragraph",
            content: "Optimize images before uploading. Avoid"
          },
          {
            type: "code",
            language: "text",
            content: `10 MB hero.jpg`
          },
          {
            type: "paragraph",
            content: "Prefer"
          },
          {
            type: "code",
            language: "text",
            content: `350 KB hero.webp`
          },
          {
            type: "paragraph",
            content: "Compress SVG files. Many SVG files contain unnecessary metadata. Optimization tools can reduce their size significantly."
          },
          {
            type: "paragraph",
            content: "Use meaningful filenames. Instead of"
          },
          {
            type: "code",
            language: "text",
            content: `image1.png`
          },
          {
            type: "paragraph",
            content: "write"
          },
          {
            type: "code",
            language: "text",
            content: `team-photo.png`
          },
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "code",
            language: "text",
            content: `abc123.jpg`
          },
          {
            type: "paragraph",
            content: "write"
          },
          {
            type: "code",
            language: "text",
            content: `homepage-banner.webp`
          },
          {
            type: "paragraph",
            content: "This improves maintainability and SEO."
          },
          {
            type: "paragraph",
            content: "Remove unused assets. Large projects often accumulate:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "old-logo.png",
              "old-banner.png",
              "test.svg",
              "backup.pdf"
            ]
          },
          {
            type: "paragraph",
            content: "These increase repository size unnecessarily. Audit the public folder periodically."
          }
        ]
      },

      {
        heading: "Prefer the Image Component for Images",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of"
          },
          {
            type: "code",
            language: "html",
            content: `<img src="/hero.jpg" />`
          },
          {
            type: "paragraph",
            content: "prefer"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Image
    src="/hero.jpg"
    width={1200}
    height={700}
    alt="Hero"
/>`
          },
          {
            type: "paragraph",
            content: "This enables lazy loading, optimization, responsive sizing, and better performance."
          }
        ]
      },

      {
        heading: "Common Mistakes",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Mistake 1: Writing /public/...",
                description: "Wrong: <img src=\"/public/logo.png\" /> Correct: <img src=\"/logo.png\" />"
              },
              {
                title: "Mistake 2: Using relative paths",
                description: "Wrong: <img src=\"../logo.png\" /> Correct: <img src=\"/logo.png\" />"
              },
              {
                title: "Mistake 3: Storing sensitive files",
                description: "Never store files like public/database.sql. Everything in public is accessible by anyone."
              },
              {
                title: "Mistake 4: Uploading uncompressed images",
                description: "Uploading a file like 18 MB hero.jpg is a huge waste of bandwidth."
              },
              {
                title: "Mistake 5: Creating duplicate assets",
                description: "E.g., logo.png, logo-final.png, logo-final-final.png. Use proper versioning and remove obsolete files."
              },
              {
                title: "Mistake 6: Using public folder for every image",
                description: "Component-specific images imported directly benefit from automatic bundling and optimization. Use public only when a stable public URL is truly needed."
              }
            ]
          }
        ]
      },

      {
        heading: "Public Folder vs src/assets vs Imports",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "public", "src/assets", "Import"],
            rows: [
              ["Public URL", "✅", "❌", "❌"],
              ["Bundled", "❌", "✅", "✅"],
              ["Fingerprinted", "❌", "✅", "✅"],
              ["React Import", "❌", "✅", "✅"],
              ["Direct Browser Access", "✅", "❌", "❌"],
              ["Good for Downloads", "✅", "❌", "❌"],
              ["Good for Images in Components", "⚠️ Sometimes", "✅", "✅"],
              ["Good for SEO Files", "✅", "❌", "❌"]
            ]
          },
          {
            type: "paragraph",
            content: "Rule of thumb:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Use public for assets that need a fixed URL.",
              "Use imported assets for component-specific images and icons that benefit from bundling.",
              "Store user-generated files in cloud storage, not in public."
            ]
          }
        ]
      },

      {
        heading: "Real-world Project Organization",
        blocks: [
          {
            type: "paragraph",
            content: "A scalable Next.js project may organize its static assets like this:"
          },
          {
            type: "tree",
            content: `[public]
  ├── favicon.ico
  ├── robots.txt
  ├── sitemap.xml
  ├── manifest.json
  ├── [images]
  │    ├── [hero]
  │    ├── [team]
  │    ├── [blog]
  │    └── [products]
  ├── [icons]
  │    ├── [ui]
  │    ├── [social]
  │    └── [brands]
  ├── [fonts]
  ├── [videos]
  ├── [audio]
  ├── [downloads]
  ├── [seo]
  │    ├── og-image.png
  │    ├── twitter-card.png
  │    └── logo.png
  └── [animations]`
          },
          {
            type: "paragraph",
            content: "This structure is easy to navigate, scales well as the project grows, and keeps related assets grouped together."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 The public folder is not just a storage location—it is the public face of your application's static resources. A useful mental model is: Need a stable URL that anyone (or search engines) can access? → Put it in public. Need optimization, bundling, or tree-shaking? → Import the asset into your component. Need to store user uploads? → Use external object storage or a CDN. Many developers overuse the public folder and end up with thousands of unmanaged files. Professional teams treat it as a curated collection of application assets rather than a dumping ground. As your application grows, review the public directory regularly, remove unused files, compress assets, and organize everything into meaningful folders. Small habits like these have a noticeable impact on maintainability and performance."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The public folder is a special directory that serves static files directly without bundling. It is ideal for assets that require permanent, predictable URLs, such as images, icons, PDFs, videos, robots.txt, favicon.ico, manifest.json, and sitemap.xml. Because everything inside it is publicly accessible, sensitive information should never be stored there."
          },
          {
            type: "paragraph",
            content: "For production applications, combine the public folder with optimized images, CDN delivery, proper caching strategies, and clean organization. Knowing when to use public, when to import assets, and when to rely on external storage is an important architectural decision that helps keep Next.js applications fast, secure, and scalable."
          }
        ]
      }
    ]
  },




  /* ===========================
    Sixth Topic : Script Component
============================= */
    "nextjs-script-component": {
    title: "Script Component",
    readingTime: "30 min",
        
    content: [
        {
        heading: "Introduction",
        blocks: [
          {
            type: "paragraph",
            content: "Modern web applications rarely consist only of your own code. Most projects depend on third-party JavaScript such as Google Analytics, Google Tag Manager, Stripe, Razorpay, PayPal, Facebook Pixel, Hotjar, Intercom, chat widgets, advertisement scripts, maps, CAPTCHA services, A/B testing tools, and many others."
          },
          {
            type: "paragraph",
            content: "A common mistake developers make is loading these scripts using normal HTML <script> tags. While this works, it often hurts performance by blocking rendering, delaying page interactivity, increasing JavaScript execution time, and negatively affecting Core Web Vitals."
          },
          {
            type: "paragraph",
            content: "To solve this problem, Next.js provides the Script Component (next/script), which intelligently loads third-party JavaScript at the correct time without unnecessarily blocking your application."
          },
          {
            type: "paragraph",
            content: "Unlike a normal script tag, the Script Component understands page lifecycle, loading priorities, hydration, and browser rendering behavior. It gives developers precise control over when, where, and how external JavaScript should execute."
          }
        ]
      },

      {
        heading: "Why Not Use Normal <script> Tags?",
        blocks: [
          {
            type: "paragraph",
            content: "Imagine adding Google Analytics like this:"
          },
          {
            type: "code",
            language: "html",
            content: `<script src="https://example.com/analytics.js"></script>`
          },
          {
            type: "paragraph",
            content: "The browser immediately downloads and executes the file. If the script is large:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "HTML parsing pauses",
              "Rendering may stop",
              "User waits longer",
              "Largest Contentful Paint (LCP) increases",
              "Time to Interactive becomes slower"
            ]
          },
          {
            type: "paragraph",
            content: "This creates poor user experience. Large third-party scripts are one of the biggest reasons websites become slow."
          }
        ]
      },

      {
        heading: "The Next.js Solution",
        blocks: [
          {
            type: "paragraph",
            content: "Instead of writing:"
          },
          {
            type: "code",
            language: "html",
            content: `<script src="..."></script>`
          },
          {
            type: "paragraph",
            content: "You write:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" />

      <h1>Home Page</h1>
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Next.js now controls:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "loading",
              "execution",
              "priority",
              "optimization",
              "deduplication",
              "hydration timing"
            ]
          },
          {
            type: "paragraph",
            content: "without requiring extra configuration."
          }
        ]
      },

      {
        heading: "What is next/script?",
        blocks: [
          {
            type: "paragraph",
            content: "next/script is a built-in React component provided by Next.js."
          },
          {
            type: "code",
            language: "javascript",
            content: `import Script from "next/script";`
          },
          {
            type: "paragraph",
            content: "It is specifically designed for loading JavaScript resources efficiently. It can load:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "External CDN scripts",
              "Analytics",
              "Chat widgets",
              "Payment gateways",
              "Maps",
              "Advertisement SDKs",
              "Tracking pixels",
              "Internal JavaScript files",
              "Inline JavaScript"
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
            content: `import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/library.js" />

      <h1>Hello World</h1>
    </>
  );
}`
          }
        ]
      },

      {
        heading: "Loading Local Scripts",
        blocks: [
          {
            type: "paragraph",
            content: "Suppose you have:"
          },
          {
            type: "tree",
            content: `[public]
  └── [js]
       └── custom.js`
          },
          {
            type: "paragraph",
            content: "Load it like this:"
          },
          {
            type: "code",
            language: "jsx",
            content: `import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script src="/js/custom.js" />
    </>
  );
}`
          },
          {
            type: "paragraph",
            content: "Notice the path starts from the public folder."
          }
        ]
      },

      {
        heading: "Why Script Component Improves Performance",
        blocks: [
          {
            type: "paragraph",
            content: "Normal browser behavior:"
          },
          {
            type: "flow",
            steps: [
              "Read HTML", "→",
              "Encounter Script", "→",
              "Stop Parsing", "→",
              "Download Script", "→",
              "Execute Script", "→",
              "Continue HTML"
            ]
          },
          {
            type: "paragraph",
            content: "Next.js behavior:"
          },
          {
            type: "flow",
            steps: [
              "Read HTML", "→",
              "Render UI", "→",
              "Hydrate React", "→",
              "Load Script Strategically", "→",
              "Execute Script"
            ]
          },
          {
            type: "paragraph",
            content: "The user sees content earlier."
          }
        ]
      },

      {
        heading: "Script Loading Strategies",
        blocks: [
          {
            type: "paragraph",
            content: "One of the biggest advantages of the Script Component is the strategy prop."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="..."
    strategy="afterInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "There are four strategies."
          }
        ]
      },

      {
        heading: "1. beforeInteractive",
        blocks: [
          {
            type: "paragraph",
            content: "Loads the script before React hydrates."
          },
          {
            type: "flow",
            steps: [
              "HTML", "→",
              "Script Loads", "→",
              "Script Executes", "→",
              "React Starts"
            ]
          },
          {
            type: "paragraph",
            content: "Use only for scripts that must run before the application becomes interactive. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Cookie consent",
              "Bot detection",
              "Security scripts",
              "Critical monitoring",
              "Anti-fraud scripts"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="/security.js"
    strategy="beforeInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "Avoid using this unless absolutely necessary because it can delay hydration."
          }
        ]
      },

      {
        heading: "2. afterInteractive (Default)",
        blocks: [
          {
            type: "paragraph",
            content: "This is the default strategy."
          },
          {
            type: "flow",
            steps: [
              "Page Loads", "→",
              "React Hydrates", "→",
              "Script Loads", "→",
              "Script Executes"
            ]
          },
          {
            type: "paragraph",
            content: "Most third-party scripts belong here. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Google Analytics",
              "Stripe",
              "Chat Widgets",
              "Maps",
              "Marketing Tools"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="https://example.com/sdk.js"
    strategy="afterInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "This gives an excellent balance between speed and functionality."
          }
        ]
      },

      {
        heading: "3. lazyOnload",
        blocks: [
          {
            type: "paragraph",
            content: "Loads scripts only when the browser becomes idle."
          },
          {
            type: "flow",
            steps: [
              "Page Loaded", "→",
              "User Can Interact", "→",
              "Browser Idle", "→",
              "Script Loads"
            ]
          },
          {
            type: "paragraph",
            content: "Perfect for non-essential JavaScript. Examples:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Social widgets",
              "Live chat",
              "Recommendation engines",
              "Heatmaps",
              "Customer surveys"
            ]
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="https://example.com/chat.js"
    strategy="lazyOnload"
/>`
          },
          {
            type: "paragraph",
            content: "This minimizes impact on performance."
          }
        ]
      },

      {
        heading: "4. worker (Experimental)",
        blocks: [
          {
            type: "paragraph",
            content: "Runs scripts inside a Web Worker instead of the main browser thread (where supported/experimental)."
          },
          {
            type: "flow",
            steps: [
              "Main Thread", "→",
              "Web Worker", "→",
              "Heavy Script Runs"
            ]
          },
          {
            type: "paragraph",
            content: "Useful for computationally heavy third-party scripts that don't need direct DOM access, but support is limited and depends on the script."
          },
          {
            type: "paragraph",
            content: "Example:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="/heavy.js"
    strategy="worker"
/>`
          }
        ]
      },

      {
        heading: "Comparison of Loading Strategies",
        blocks: [
          {
            type: "table",
            headers: ["Strategy", "When it Loads", "Best For"],
            rows: [
              ["beforeInteractive", "Before hydration", "Security, cookie consent"],
              ["afterInteractive", "After hydration", "Analytics, payment SDKs"],
              ["lazyOnload", "Browser idle", "Chat, ads, social widgets"],
              ["worker", "Web Worker", "Heavy computation (experimental)"]
            ]
          }
        ]
      },

      {
        heading: "Loading Google Analytics",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          \`}
        </Script>
      </body>
    </html>
  );
}`
          },
          {
            type: "paragraph",
            content: "The external script downloads efficiently, while the inline configuration executes after the library is available."
          }
        ]
      },

      {
        heading: "Inline Scripts",
        blocks: [
          {
            type: "paragraph",
            content: "Not every script comes from a file. You can write inline JavaScript."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script id="welcome-script">
{\`
    console.log("Welcome");
\`}
</Script>`
          },
          {
            type: "paragraph",
            content: "The id prop is required for inline scripts so Next.js can uniquely identify and deduplicate them."
          }
        ]
      },

      {
        heading: "Loading Payment SDKs",
        blocks: [
          {
            type: "paragraph",
            content: "Example with Stripe:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="https://js.stripe.com/v3/"
    strategy="afterInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "Example with Razorpay:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
    src="https://checkout.razorpay.com/v1/checkout.js"
    strategy="afterInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "Load the SDK first, then invoke its APIs in user interactions such as button clicks."
          }
        ]
      },

      {
        heading: "Loading Google Maps",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `<Script
src={\`https://maps.googleapis.com/maps/api/js?key=YOUR_KEY\`}
strategy="afterInteractive"
/>`
          },
          {
            type: "paragraph",
            content: "Initialize the map after the script has loaded (see onLoad below)."
          }
        ]
      },

      {
        heading: "Loading Facebook Pixel",
        blocks: [
          {
            type: "code",
            language: "jsx",
            content: `<Script
strategy="afterInteractive"
src="https://connect.facebook.net/en_US/fbevents.js"
/>`
          }
        ]
      },

      {
        heading: "Event Callbacks",
        blocks: [
          {
            type: "paragraph",
            content: "The Script Component provides lifecycle callbacks."
          },
          {
            type: "paragraph",
            content: "onLoad: Runs after the script successfully loads."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
src="/library.js"
onLoad={() => {
    console.log("Loaded");
}}
/>`
          },
          {
            type: "paragraph",
            content: "Useful for initializing libraries that expose global objects."
          },
          {
            type: "paragraph",
            content: "onReady: Runs when the script is loaded and ready. It is especially useful if a component can mount again during client-side navigation."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
src="/sdk.js"
onReady={() => {
    console.log("SDK Ready");
}}
/>`
          },
          {
            type: "paragraph",
            content: "onError: Runs if loading fails."
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script
src="/library.js"
onError={() => {
    console.log("Failed");
}}
/>`
          },
          {
            type: "paragraph",
            content: "Always handle failures gracefully for third-party dependencies."
          }
        ]
      },

      {
        heading: "Script Placement",
        blocks: [
          {
            type: "paragraph",
            content: "You can place <Script>:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Inside a page",
              "Inside a layout",
              "Inside the root layout",
              "Inside reusable components (when appropriate)"
            ]
          },
          {
            type: "paragraph",
            content: "For site-wide services like analytics, the root layout is usually the best location so the script loads once."
          }
        ]
      },

      {
        heading: "Script Deduplication",
        blocks: [
          {
            type: "paragraph",
            content: "A unique optimization in Next.js is automatic deduplication. Imagine two pages both include:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script src="https://example.com/chat.js" />`
          },
          {
            type: "paragraph",
            content: "Without optimization:"
          },
          {
            type: "flow",
            steps: [
              "Page A", "→",
              "Download Chat SDK", "→",
              "Navigate", "→",
              "Download Again"
            ]
          },
          {
            type: "paragraph",
            content: "With Next.js:"
          },
          {
            type: "flow",
            steps: [
              "Download Once", "→",
              "Cache", "→",
              "Reuse Everywhere"
            ]
          },
          {
            type: "paragraph",
            content: "This prevents duplicate downloads and repeated execution, improving performance and avoiding bugs from loading the same SDK multiple times."
          }
        ]
      },

      {
        heading: "Loading Order",
        blocks: [
          {
            type: "paragraph",
            content: "When multiple scripts are present:"
          },
          {
            type: "code",
            language: "jsx",
            content: `<Script src="/a.js" strategy="afterInteractive" />
<Script src="/b.js" strategy="afterInteractive" />`
          },
          {
            type: "paragraph",
            content: "Next.js preserves their order, but if one script depends on another, it's safer to initialize dependent code inside onLoad/onReady rather than assuming network timing."
          }
        ]
      },

      {
        heading: "Using Scripts Conditionally",
        blocks: [
          {
            type: "paragraph",
            content: "Sometimes a script should only load when needed."
          },
          {
            type: "code",
            language: "jsx",
            content: `{
showChat && (
<Script
src="https://example.com/chat.js"
strategy="lazyOnload"
/>
)
}`
          },
          {
            type: "paragraph",
            content: "This avoids downloading unnecessary JavaScript for users who never use that feature."
          }
        ]
      },

      {
        heading: "Common Real-World Scripts",
        blocks: [
          {
            type: "table",
            headers: ["Service", "Recommended Strategy"],
            rows: [
              ["Google Analytics", "afterInteractive"],
              ["Google Tag Manager", "afterInteractive"],
              ["Stripe", "afterInteractive"],
              ["Razorpay", "afterInteractive"],
              ["PayPal SDK", "afterInteractive"],
              ["Google Maps", "afterInteractive"],
              ["Intercom", "lazyOnload"],
              ["Crisp Chat", "lazyOnload"],
              ["Hotjar", "lazyOnload"],
              ["Cookie Consent", "beforeInteractive"]
            ]
          }
        ]
      },

      {
        heading: "Script Component vs HTML <script>",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "HTML Script", "Next.js Script"],
            rows: [
              ["Loading control", "❌", "✅"],
              ["Performance optimization", "❌", "✅"],
              ["Hydration aware", "❌", "✅"],
              ["Lazy loading", "❌", "✅"],
              ["Deduplication", "❌", "✅"],
              ["Lifecycle callbacks", "❌", "✅"],
              ["Better Core Web Vitals", "❌", "✅"]
            ]
          }
        ]
      },

      {
        heading: "Security Considerations",
        blocks: [
          {
            type: "paragraph",
            content: "When working with third-party scripts:"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Prefer trusted providers and official CDNs.",
              "Load only the scripts you actually need.",
              "Avoid inline scripts unless necessary; if you use them, keep them small and controlled.",
              "Consider using a strong Content Security Policy (CSP) and nonces/hashes where appropriate.",
              "Do not include API secrets or private keys in client-side scripts."
            ]
          }
        ]
      },

      {
        heading: "Performance Best Practices",
        blocks: [
          {
            type: "list",
            style: "unordered",
            items: [
              "Default to afterInteractive unless there is a clear reason to choose another strategy.",
              "Use lazyOnload for non-essential features.",
              "Avoid beforeInteractive except for critical scripts.",
              "Remove unused third-party libraries regularly.",
              "Audit script impact using Lighthouse and Chrome DevTools.",
              "Prefer dynamic imports for your own application code instead of using <Script>."
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
              "Using normal <script> tags instead of next/script.",
              "Loading every third-party script in the root layout, even if only one page needs it.",
              "Using beforeInteractive for analytics or chat widgets.",
              "Assuming a script is available immediately instead of waiting for onLoad or onReady.",
              "Loading duplicate SDKs manually.",
              "Including large marketing scripts that provide little business value."
            ]
          }
        ]
      },

      {
        heading: "Real-World Workflow",
        blocks: [
          {
            type: "paragraph",
            content: "A production application might organize scripts like this:"
          },
          {
            type: "tree",
            content: `[Application]
  ├── [Root Layout]
  │    ├── Cookie consent (beforeInteractive)
  │    └── Google Analytics (afterInteractive)
  ├── [Checkout Page]
  │    └── Stripe or Razorpay SDK (afterInteractive)
  ├── [Contact Page]
  │    └── Google Maps (afterInteractive)
  └── [Support Page]
       └── Chat widget (lazyOnload)`
          },
          {
            type: "paragraph",
            content: "This approach ensures users download only the JavaScript they need, keeping the application fast and scalable."
          }
        ]
      },

      {
        heading: "DevSphere Special Note",
        blocks: [
          {
            type: "note",
            content: "💡 Many tutorials explain the available strategy values but stop there. The real performance benefit comes from treating third-party JavaScript as a limited performance budget. Before adding any script, ask: Does this script provide measurable value? Does it need to run on every page? Can it be loaded only after user interaction? Can it be delayed until the browser is idle? Can it be removed entirely? On large production applications, third-party scripts are often responsible for more JavaScript execution time than the application's own code. Choosing the correct loading strategy—and limiting unnecessary scripts—is one of the simplest ways to improve Core Web Vitals, SEO, battery usage, and overall user experience."
          }
        ]
      },

      {
        heading: "Summary",
        blocks: [
          {
            type: "paragraph",
            content: "The Script Component (next/script) is Next.js's optimized solution for loading third-party JavaScript. It offers intelligent loading strategies (beforeInteractive, afterInteractive, lazyOnload, and the experimental worker strategy), automatic deduplication, lifecycle callbacks, and better integration with React's rendering process. By replacing ordinary <script> tags with the Script Component, you can integrate analytics, payment gateways, maps, chat widgets, and other external libraries while minimizing their impact on rendering performance and Core Web Vitals. Choosing the appropriate loading strategy and loading scripts only where they are needed leads to faster, more maintainable, and production-ready Next.js applications."
          }
        ]
      }
    ]
  },
};

export default nextjsImagesFontsStaticAssets;