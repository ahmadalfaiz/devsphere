import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight, FaChartBar, FaGlobe, FaUsers, FaCalendarAlt, FaQrcode, FaPaypal, FaCode, FaBookOpen, FaTools, FaServer, FaLock, FaUserSecret, FaChevronRight, FaHandshake, FaLaptopCode,} from "react-icons/fa";
import { FaCircleInfo,} from "react-icons/fa6";

import { setSEO } from "../../utils/seo";
import styles from "./Support.module.css";

const monthlySupport = [
  { month: "Sep", amount: null },
  { month: "Oct", amount: null },
  { month: "Nov", amount: null },
  { month: "Dec", amount: null },
  { month: "Jan", amount: null },
  { month: "Feb", amount: null },
  { month: "Mar", amount: null },
  { month: "Apr", amount: null },
  { month: "May", amount: null },
  { month: "Jun", amount: null },
  { month: "Jul", amount: null },
  { month: "Aug", amount: null },
];

const latestSupporters = [];

const topCountries = [];

const topSupporters = [];

const supportImpact = [
  {
    icon: FaBookOpen,
    title: "More Tutorials",
    description:
      "Support helps us create and maintain detailed programming and technology tutorials.",
  },
  {
    icon: FaTools,
    title: "Developer Tools",
    description:
      "We can continue building useful tools that make everyday development tasks easier.",
  },
  {
    icon: FaServer,
    title: "Infrastructure",
    description:
      "Hosting, storage, APIs, domains, and other infrastructure keep DevSphere available.",
  },
  {
    icon: FaLaptopCode,
    title: "New Features",
    description:
      "Your support gives us room to experiment with new learning experiences and platform features.",
  },
];

function formatAmount(amount, currency = "USD") {
  if (amount === null || amount === undefined) return "—";

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount}`;
  }
}

function Support() {
  useEffect(() => {
    setSEO({
      title: "Support DevSphere | Help Us Keep Learning Free",
      description:
        "Support DevSphere and help us continue building free programming tutorials, developer tools, resources, and learning experiences.",
      keywords:
        "Support DevSphere, DevSphere support, support programming platform, support developer education, DevSphere funding",
      url: "/support",
    });
  }, []);

  const hasMonthlyData = monthlySupport.some(
    (item) => typeof item.amount === "number"
  );

  return (
    <main className={styles.supportPage}>
      {/* =========================================================
          HERO / INTRO
      ========================================================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />

        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeIcon}>
              <FaHeart />
            </span>
            <span>Support the Project</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                Support <span>DevSphere</span>
              </h1>

              <p>
                DevSphere is a free technology learning platform built to help
                people learn programming, explore developer tools, and build
                practical technical skills.
              </p>

              <p>
                If you find DevSphere useful, you can support its continued
                development. Your support helps us create more tutorials,
                resources, tools, and learning experiences while keeping the
                core platform free.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="#support-options"
                  className={styles.primaryButton}
                >
                  <FaHeart />
                  <span>Support DevSphere</span>
                  <FaArrowRight />
                </a>

                <Link
                  to="/contact-us"
                  className={styles.secondaryButton}
                >
                  <span>Have a Question?</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.supportOrb}>
                <div className={styles.supportOrbInner}>
                  <FaHeart />
                </div>

                <span className={`${styles.orbit} ${styles.orbitOne}`} />
                <span className={`${styles.orbit} ${styles.orbitTwo}`} />
                <span className={`${styles.orbit} ${styles.orbitThree}`} />
              </div>

              <div className={styles.heroVisualNote}>
                <FaHandshake />
                <span>Built with community support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT OVERVIEW
      ========================================================== */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                <FaChartBar />
                Support Overview
              </span>

              <h2>See how the project is supported</h2>

              <p>
                We want support for DevSphere to be transparent. As the project
                grows, this section will show contribution activity over time.
              </p>
            </div>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaCalendarAlt />
              </div>

              <div className={styles.statContent}>
                <span className={styles.statLabel}>This Month</span>
                <strong className={styles.statValue}>—</strong>
                <span className={styles.statMeta}>
                  Support received this month
                </span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaUsers />
              </div>

              <div className={styles.statContent}>
                <span className={styles.statLabel}>Supporters</span>
                <strong className={styles.statValue}>—</strong>
                <span className={styles.statMeta}>
                  People who have supported DevSphere
                </span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaChartBar />
              </div>

              <div className={styles.statContent}>
                <span className={styles.statLabel}>This Year</span>
                <strong className={styles.statValue}>—</strong>
                <span className={styles.statMeta}>
                  Total support received this year
                </span>
              </div>
            </div>
          </div>

          {/* Monthly chart */}
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <div>
                <span className={styles.chartEyebrow}>
                  Monthly Support
                </span>
                <h3>Support over the last 12 months</h3>
              </div>

              <div className={styles.chartLegend}>
                <span className={styles.legendDot} />
                <span>Support received</span>
              </div>
            </div>

            {hasMonthlyData ? (
              <div className={styles.chartArea}>
                <div className={styles.chartYAxis}>
                  <span>Highest</span>
                  <span>Mid</span>
                  <span>Low</span>
                  <span>0</span>
                </div>

                <div className={styles.chart}>
                  <div className={styles.chartGrid}>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.bars}>
                    {monthlySupport.map((item) => (
                      <div className={styles.barColumn} key={item.month}>
                        <div className={styles.barWrapper}>
                          <div
                            className={styles.bar}
                            style={{
                              height: `${Math.max(
                                8,
                                Math.min(item.amount || 0, 100)
                              )}%`,
                            }}
                          />
                        </div>

                        <span className={styles.barLabel}>
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.chartEmpty}>
                <div className={styles.emptyIcon}>
                  <FaChartBar />
                </div>

                <h4>Support history will appear here</h4>

                <p>
                  Once DevSphere begins receiving and recording support, this
                  chart will show monthly contribution activity.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT OPTIONS
      ========================================================== */}
      <section
        className={styles.supportOptionsSection}
        id="support-options"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>
              <FaHeart />
              Ways to Support
            </span>

            <h2>Choose the option that works for you</h2>

            <p>
              Support DevSphere directly through one of the available payment
              methods.
            </p>
          </div>

          <div className={styles.paymentGrid}>
            {/* India / UPI */}
            <article className={styles.paymentCard}>
              <div className={styles.paymentTop}>
                <div className={styles.paymentIcon}>
                  <FaQrcode />
                </div>

                <span className={styles.paymentRegion}>
                  India
                </span>
              </div>

              <h3>Support via UPI</h3>

              <p>
                Indian supporters can use UPI to support DevSphere directly.
                Scan the QR code or use the available UPI payment option.
              </p>

              <div className={styles.qrPlaceholder}>
                <div className={styles.qrFrame}>
                  <FaQrcode />
                </div>

                <span>UPI QR Code</span>
                <small>Payment setup coming soon</small>
              </div>

              <div className={styles.paymentInfo}>
                <FaLock />
                <span>
                  Payment details will be securely provided here.
                </span>
              </div>

              <button
                type="button"
                className={styles.paymentButton}
                disabled
              >
                <FaQrcode />
                <span>UPI Support</span>
              </button>
            </article>

            {/* International / PayPal */}
            <article className={styles.paymentCard}>
              <div className={styles.paymentTop}>
                <div className={styles.paymentIcon}>
                  <FaPaypal />
                </div>

                <span className={styles.paymentRegion}>
                  International
                </span>
              </div>

              <h3>Support via PayPal</h3>

              <p>
                Supporters outside India can use PayPal to contribute toward
                the continued development of DevSphere.
              </p>

              <div className={styles.paypalBox}>
                <div className={styles.paypalIcon}>
                  <FaPaypal />
                </div>

                <strong>PayPal</strong>

                <span>
                  International support
                </span>
              </div>

              <div className={styles.paymentInfo}>
                <FaLock />
                <span>
                  You will be redirected to PayPal for payment.
                </span>
              </div>

              <button
                type="button"
                className={styles.paymentButton}
                disabled
              >
                <FaPaypal />
                <span>Support via PayPal</span>
              </button>
            </article>
          </div>

          <div className={styles.paymentNote}>
            <FaCircleInfo />

            <p>
              DevSphere is a technology learning project. Support is voluntary
              and helps fund the continued development, hosting, maintenance,
              and improvement of the platform.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LATEST SUPPORTERS
      ========================================================== */}
      <section className={styles.supportersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className={styles.sectionEyebrow}>
                <FaUsers />
                Community
              </span>

              <h2>Latest Supporters</h2>

              <p>
                A thank-you to the people helping DevSphere continue to grow.
              </p>
            </div>

            <div className={styles.tableBadge}>
              <FaHeart />
              <span>Thank you</span>
            </div>
          </div>

          <div className={styles.tableCard}>
            {latestSupporters.length > 0 ? (
              <div className={styles.tableWrapper}>
                <table className={styles.supportTable}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Supporter</th>
                      <th>Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    {latestSupporters.map((supporter) => (
                      <tr key={supporter.id}>
                        <td>{supporter.date}</td>

                        <td>
                          <div className={styles.supporterName}>
                            <span className={styles.avatar}>
                              {supporter.anonymous ? (
                                <FaUserSecret />
                              ) : (
                                supporter.name?.charAt(0)?.toUpperCase()
                              )}
                            </span>

                            <span>
                              {supporter.anonymous
                                ? "Anonymous"
                                : supporter.name}
                            </span>
                          </div>
                        </td>

                        <td>
                          {formatAmount(
                            supporter.amount,
                            supporter.currency
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={styles.tableEmpty}>
                <div className={styles.emptyIcon}>
                  <FaUsers />
                </div>

                <h3>No supporters to display yet</h3>

                <p>
                  Supporter activity will appear here once contributions are
                  received and recorded.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COUNTRIES
      ========================================================== */}
      <section className={styles.statisticsSection}>
        <div className={styles.container}>
          <div className={styles.statisticsGrid}>
            <div className={styles.statisticsIntro}>
              <span className={styles.sectionEyebrow}>
                <FaGlobe />
                Support Around the World
              </span>

              <h2>Top 10 Countries</h2>

              <p>
                As DevSphere grows, this section will show where support for
                the project comes from around the world.
              </p>

              <div className={styles.statisticsNote}>
                <FaGlobe />
                <span>
                  Country information is shown only where it is available and
                  appropriate to display.
                </span>
              </div>
            </div>

            <div className={styles.statisticsTableCard}>
              {topCountries.length > 0 ? (
                <div className={styles.tableWrapper}>
                  <table className={styles.supportTable}>
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Contribution</th>
                        <th>Average</th>
                        <th>Highest</th>
                      </tr>
                    </thead>

                    <tbody>
                      {topCountries.map((country, index) => (
                        <tr key={country.country}>
                          <td>
                            <div className={styles.countryCell}>
                              <span className={styles.countryRank}>
                                {index + 1}
                              </span>

                              <span>{country.country}</span>
                            </div>
                          </td>

                          <td>{country.contribution}%</td>

                          <td>
                            {formatAmount(
                              country.average,
                              country.currency
                            )}
                          </td>

                          <td>
                            {formatAmount(
                              country.highest,
                              country.currency
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className={styles.compactEmpty}>
                  <FaGlobe />

                  <span>
                    Country statistics will appear as support data becomes
                    available.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP SUPPORTERS
      ========================================================== */}
      <section className={styles.leaderboardSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className={styles.sectionEyebrow}>
                <FaHeart />
                Supporter Leaderboard
              </span>

              <h2>Top 100 Supporters</h2>

              <p>
                A long-term thank-you to supporters who have helped DevSphere
                over time.
              </p>
            </div>

            <div className={styles.leaderboardBadge}>
              <FaUsers />
              <span>Top 100</span>
            </div>
          </div>

          <div className={styles.leaderboardCard}>
            {topSupporters.length > 0 ? (
              <div className={styles.tableWrapper}>
                <table className={styles.supportTable}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Supporter</th>
                      <th>Support Count</th>
                      <th>Total Supported</th>
                    </tr>
                  </thead>

                  <tbody>
                    {topSupporters.map((supporter, index) => (
                      <tr key={supporter.id}>
                        <td>
                          <span className={styles.leaderboardRank}>
                            {index + 1}
                          </span>
                        </td>

                        <td>
                          <div className={styles.supporterName}>
                            <span className={styles.avatar}>
                              {supporter.anonymous ? (
                                <FaUserSecret />
                              ) : (
                                supporter.name?.charAt(0)?.toUpperCase()
                              )}
                            </span>

                            <span>
                              {supporter.anonymous
                                ? "Anonymous"
                                : supporter.name}
                            </span>
                          </div>
                        </td>

                        <td>{supporter.supportCount}</td>

                        <td>
                          {formatAmount(
                            supporter.total,
                            supporter.currency
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={styles.leaderboardEmpty}>
                <div className={styles.emptyTrophy}>
                  <FaHeart />
                </div>

                <h3>The leaderboard will grow with the community</h3>

                <p>
                  Once supporters begin contributing, the top supporters will
                  be listed here. Supporters who choose anonymity will remain
                  anonymous.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT SUPPORT HELPS BUILD
      ========================================================== */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>
              <FaCode />
              Where Support Goes
            </span>

            <h2>What your support helps build</h2>

            <p>
              Contributions help cover the real work and infrastructure behind
              DevSphere.
            </p>
          </div>

          <div className={styles.impactGrid}>
            {supportImpact.map((item) => {
              const Icon = item.icon;

              return (
                <article className={styles.impactCard} key={item.title}>
                  <div className={styles.impactIcon}>
                    <Icon />
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

      {/* =========================================================
          PRIVACY / ANONYMITY NOTE
      ========================================================== */}
      <section className={styles.privacySection}>
        <div className={styles.container}>
          <div className={styles.privacyCard}>
            <div className={styles.privacyIcon}>
              <FaUserSecret />
            </div>

            <div className={styles.privacyContent}>
              <span className={styles.privacyEyebrow}>
                Supporter Privacy
              </span>

              <h3>You can choose to support anonymously</h3>

              <p>
                Supporters will be able to choose whether their name appears
                publicly on the supporter lists. Anonymous contributions will
                be displayed simply as “Anonymous.”
              </p>
            </div>

            <FaChevronRight className={styles.privacyArrow} />
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL THANK YOU
      ========================================================== */}
      <section className={styles.thankYouSection}>
        <div className={styles.thankYouGlow} />

        <div className={styles.container}>
          <div className={styles.thankYouContent}>
            <div className={styles.thankYouIcon}>
              <FaHeart />
            </div>

            <span className={styles.thankYouEyebrow}>
              Thank You
            </span>

            <h2>Every bit of support matters.</h2>

            <p>
              Whether you contribute financially, learn with DevSphere, share
              it with someone else, or simply give us feedback — you're helping
              the project move forward.
            </p>

            <div className={styles.thankYouActions}>
              <a
                href="#support-options"
                className={styles.primaryButton}
              >
                <FaHeart />
                <span>Support DevSphere</span>
                <FaArrowRight />
              </a>

              <Link
                to="/"
                className={styles.secondaryButton}
              >
                <span>Explore DevSphere</span>
                <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;