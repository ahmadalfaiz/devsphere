const DEFAULT_TITLE = "DevSphere";

const DEFAULT_DESCRIPTION =
  "DevSphere is a free platform to learn web development, frontend development, backend development, programming, software engineering, interview preparation, and real-world projects.";

const DEFAULT_KEYWORDS =
  "Programming Tutorials, HTML Tutorial, CSS Tutorial, JavaScript Tutorial, React Tutorial, Next.js Tutorial, Node.js Tutorial, Express.js Tutorial, REST API Tutorial";

const SITE_URL = "https://devspherehq.com";

const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`;

function updateMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", `${SITE_URL}${url}`);
}

export function setSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  url = "/",
  image = DEFAULT_IMAGE,
  robots = "index, follow",
}) {
  document.title = title;

  updateMeta("title", title);
  updateMeta("description", description);
  updateMeta("keywords", keywords);
  updateMeta("robots", robots);
  updateMeta("googlebot", robots);

  updateCanonical(url);

  // Open Graph
  updateProperty("og:title", title);
  updateProperty("og:description", description);
  updateProperty("og:type", "website");
  updateProperty("og:url", `${SITE_URL}${url}`);
  updateProperty("og:image", image);
  updateProperty("og:site_name", "DevSphere");

  // Twitter
  updateMeta("twitter:card", "summary_large_image");
  updateMeta("twitter:title", title);
  updateMeta("twitter:description", description);
  updateMeta("twitter:image", image);
}