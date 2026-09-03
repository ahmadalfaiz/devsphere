import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FaAd,
  FaArrowRight,
  FaBookOpen,
  FaBullhorn,
  FaBullseye,
  FaCheckCircle,
  FaChartLine,
  FaCloud,
  FaCode,
  FaComments,
  FaDatabase,
  FaEnvelope,
  FaGraduationCap,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaServer,
  FaTools,
  FaUsers,
} from "react-icons/fa";

import styles from "./Advertise.module.css";
import { setSEO } from "../../utils/seo";

function Advertise() {
  useEffect(() => {
    setSEO({
      title: "Advertise With Us - Reach Developers & Tech Learners | DevSphere",
      description:
        "Advertise with DevSphere and reach a developer-focused audience of programmers, technology learners, students, and software professionals through relevant sponsorship and advertising opportunities.",
      keywords:
        "Advertise with DevSphere, DevSphere advertising, developer audience, programming audience, tech advertising, developer sponsorship, software developer advertising, technology advertising",
      url: "/advertise-with-us",
    });
  }, []);

  const whyAdvertise = [
    {
      icon: FaUsers,
      title: "Developer-Focused Audience",
      description:
        "Connect with people who actively learn, build, practice, and explore software development and modern technology.",
    },
    {
      icon: FaBullseye,
      title: "Relevant Context",
      description:
        "Place your product or service alongside programming tutorials, technical content, developer resources, and learning experiences.",
    },
    {
      icon: FaChartLine,
      title: "Growing Platform",
      description:
        "Build visibility alongside a technology platform designed to continuously expand its content, resources, and developer audience.",
    },
    {
      icon: FaLightbulb,
      title: "Meaningful Visibility",
      description:
        "Go beyond generic advertising with opportunities designed to introduce useful products and services to a relevant technical audience.",
    },
  ];

  const audience = [
    {
      icon: FaCode,
      title: "Developers",
      description:
        "Software developers and programmers exploring technologies, tools, and development practices.",
    },
    {
      icon: FaGraduationCap,
      title: "Students & Learners",
      description:
        "Computer science students and aspiring developers building their technical knowledge and career skills.",
    },
    {
      icon: FaLaptopCode,
      title: "Web Developers",
      description:
        "Frontend, backend, and full-stack developers learning and working with modern web technologies.",
    },
    {
      icon: FaTools,
      title: "Technology Enthusiasts",
      description:
        "People interested in programming, software engineering, AI, developer tools, and emerging technologies.",
    },
  ];

  const opportunities = [
    {
      icon: FaHome,
      title: "Homepage Sponsorship",
      description:
        "Put your brand or product in front of visitors through prominent sponsorship opportunities on the DevSphere homepage.",
    },
    {
      icon: FaBookOpen,
      title: "Tutorial Sponsorship",
      description:
        "Reach learners while they are actively exploring programming languages, frameworks, tools, and development concepts.",
    },
    {
      icon: FaTools,
      title: "Developer Tool Promotion",
      description:
        "Promote developer-focused products, platforms, APIs, services, and tools in relevant areas of the website.",
    },
    {
      icon: FaLaptopCode,
      title: "Contextual Page Placement",
      description:
        "Place relevant promotions on pages where your product or service naturally aligns with the interests of the audience.",
    },
    {
      icon: FaBullhorn,
      title: "Sponsored Technical Content",
      description:
        "Explore opportunities for clearly identified sponsored articles or technical content created around relevant developer topics.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: FaEnvelope,
      title: "Contact Us",
      description:
        "Tell us about your company, product, service, and what you would like to promote on DevSphere.",
    },
    {
      number: "02",
      icon: FaComments,
      title: "Discuss Your Goals",
      description:
        "We'll discuss your target audience, campaign objectives, preferred placement, and the type of visibility you're looking for.",
    },
    {
      number: "03",
      icon: FaBullseye,
      title: "Choose a Placement",
      description:
        "Together, we'll determine an advertising or sponsorship opportunity that fits your goals and aligns with the DevSphere audience.",
    },
    {
      number: "04",
      icon: FaRocket,
      title: "Campaign Goes Live",
      description:
        "Once everything is agreed upon, your campaign can go live and start reaching the DevSphere audience.",
    },
  ];

  const industries = [
    {
      icon: FaCloud,
      title: "Cloud & Hosting",
    },
    {
      icon: FaCode,
      title: "Developer Tools",
    },
    {
      icon: FaLaptopCode,
      title: "SaaS & Software",
    },
    {
      icon: FaServer,
      title: "APIs & Infrastructure",
    },
    {
      icon: FaDatabase,
      title: "Databases & Data",
    },
    {
      icon: FaGraduationCap,
      title: "EdTech & Training",
    },
  ];

  const principles = [
    {
      icon: FaCheckCircle,
      title: "Relevance First",
      description:
        "We prioritize products and services that are genuinely relevant to developers, learners, and technology enthusiasts.",
    },
    {
      icon: FaBullhorn,
      title: "Clearly Identified",
      description:
        "Sponsored placements and paid content are clearly identified so visitors can distinguish advertising from editorial learning content.",
    },
    {
      icon: FaHandshake,
      title: "Long-Term Partnerships",
      description:
        "We aim to build useful, professional partnerships rather than treating advertising as a one-time transaction.",
    },
    {
      icon: FaUsers,
      title: "Audience Experience",
      description:
        "Advertising should complement the platform without compromising usability, trust, or the learning experience.",
    },
  ];

  return (
    <main className={styles.advertisePage}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <FaBullhorn aria-hidden="true" />
            <span>ADVERTISE WITH DEVSPHERE</span>
          </div>

          <h1>
            Reach Developers.
            <span> Grow Your Brand.</span>
          </h1>

          <p>
            Connect your product, service, or brand with a growing audience
            of developers, programmers, students, and technology learners
            through relevant advertising and sponsorship opportunities.
          </p>

          <div className={styles.heroActions}>
            <Link to="/contact-us" className={styles.primaryButton}>
              Contact Us
              <FaArrowRight aria-hidden="true" />
            </Link>

            <a href="#opportunities" className={styles.secondaryButton}>
              Explore Opportunities
            </a>
          </div>

          <div className={styles.heroHighlights}>
            <div className={styles.heroHighlight}>
              <div className={styles.highlightIcon}>
                <FaUsers aria-hidden="true" />
              </div>
              <div>
                <strong>Developer Audience</strong>
                <span>Built around technology & learning</span>
              </div>
            </div>

            <div className={styles.heroHighlight}>
              <div className={styles.highlightIcon}>
                <FaBullseye aria-hidden="true" />
              </div>
              <div>
                <strong>Relevant Placements</strong>
                <span>Designed for contextual visibility</span>
              </div>
            </div>

            <div className={styles.heroHighlight}>
              <div className={styles.highlightIcon}>
                <FaHandshake aria-hidden="true" />
              </div>
              <div>
                <strong>Partnerships</strong>
                <span>Built for long-term collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Advertise */}
      <section className={styles.whySection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>WHY DEVSHPERE</span>

          <h2>
            Advertise Where
            <span> Technology Meets Learning</span>
          </h2>

          <p>
            DevSphere brings learning, development, and technology-focused
            experiences together, creating opportunities for relevant brands
            to reach an audience interested in building and improving their
            technical skills.
          </p>
        </div>

        <div className={styles.whyGrid}>
          {whyAdvertise.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.whyCard}>
                <div className={styles.cardIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Audience */}
      <section className={styles.audienceSection}>
        <div className={styles.audienceContent}>
          <div className={styles.audienceHeading}>
            <span className={styles.sectionEyebrow}>OUR AUDIENCE</span>

            <h2>
              Reach People Who
              <span> Build With Technology</span>
            </h2>

            <p>
              DevSphere is built around people who want to learn technology,
              solve problems, build software, and keep developing their
              technical skills.
            </p>

            <p>
              Our audience includes learners at different stages of their
              development journey, from students and aspiring programmers to
              developers exploring new technologies and tools.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>
                    <Icon aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advertising Opportunities */}
      <section
        id="opportunities"
        className={styles.opportunitiesSection}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            ADVERTISING OPPORTUNITIES
          </span>

          <h2>
            Ways to Partner
            <span> With DevSphere</span>
          </h2>

          <p>
            Choose from advertising and sponsorship opportunities designed
            around the way developers and technology learners use DevSphere.
          </p>
        </div>

        <div className={styles.opportunitiesGrid}>
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`${styles.opportunityCard} ${
                  index === 0 ? styles.featuredOpportunity : ""
                }`}
              >
                <div className={styles.opportunityTop}>
                  <div className={styles.opportunityIcon}>
                    <Icon aria-hidden="true" />
                  </div>

                  <span className={styles.opportunityNumber}>
                    0{index + 1}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>HOW IT WORKS</span>

          <h2>
            A Simple Way to
            <span> Get Started</span>
          </h2>

          <p>
            We keep the process straightforward so we can focus on creating
            a partnership that works for your goals and our audience.
          </p>
        </div>

        <div className={styles.processGrid}>
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className={styles.processItem}>
                <div className={styles.processNumber}>{step.number}</div>

                <div className={styles.processIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                {index < process.length - 1 && (
                  <div className={styles.processConnector}>
                    <FaArrowRight aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Who We Work With */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesContent}>
          <div className={styles.industriesHeading}>
            <span className={styles.sectionEyebrow}>WHO WE WORK WITH</span>

            <h2>
              Built for
              <span> Technology-Focused Brands</span>
            </h2>

            <p>
              We are interested in working with companies and organizations
              whose products or services are useful, relevant, or interesting
              to developers and technology learners.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div key={industry.title} className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    <Icon aria-hidden="true" />
                  </div>

                  <span>{industry.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className={styles.principlesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            OUR PARTNERSHIP PRINCIPLES
          </span>

          <h2>
            Advertising Without
            <span> Compromising Trust</span>
          </h2>

          <p>
            We believe effective advertising should create value for both
            businesses and the people who use DevSphere.
          </p>
        </div>

        <div className={styles.principlesGrid}>
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className={styles.principleCard}
              >
                <div className={styles.principleIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <div className={styles.principleContent}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />

        <div className={styles.ctaCard}>
          <div className={styles.ctaIcon}>
            <FaAd aria-hidden="true" />
          </div>

          <span className={styles.sectionEyebrow}>
            LET'S WORK TOGETHER
          </span>

          <h2>
            Ready to Reach the
            <span> DevSphere Audience?</span>
          </h2>

          <p>
            If you have a product, service, or brand that belongs in the
            technology ecosystem, we'd love to hear from you. Get in touch
            with us to discuss advertising and partnership opportunities.
          </p>

          <div className={styles.ctaActions}>
            <Link to="/contact-us" className={styles.primaryButton}>
              Contact Us
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link to="/tutorials" className={styles.secondaryButton}>
              Explore DevSphere
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Advertise;