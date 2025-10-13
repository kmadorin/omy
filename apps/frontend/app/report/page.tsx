import "./report.css";
import Script from "next/script";

export default function ReportPage() {
  return (
    <div
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        lineHeight: 1.7,
        color: "#1a1a1a",
        background: "#f5f7fa",
        padding: "40px 20px",
        margin: 0,
        minHeight: "100vh",
      }}
    >
      <Script src="/chart.js" strategy="beforeInteractive" />

      {/* Title Page */}
      <div className="title-page">
        <h1>OhMyYield</h1>
        <div className="report-subtitle">Grant Final Report</div>
        <div className="milestone">
          Milestone 3: User Testing &amp; Feedback Gathering
        </div>
        <div className="date">October 2025</div>
      </div>

      {/* Content Pages */}
      <div className="content-page">
        <div className="executive-summary">
          <h2>Executive Summary</h2>
          <p>
            <strong>Completed Milestone 3:</strong> User testing and feedback
            gathering for OhMyYield, a conversational DeFi yield finder for EVM
            chains. Testing with <strong>7 users</strong> revealed strong
            technical validation (43% completed real transactions) and positive
            user feedback on ease of use. However, testing also exposed critical
            business model challenges: willingness to pay limited to $1-5/month
            subscription (43%) or transaction fees only (User 7&apos;s
            preference), combined with power users already knowing available
            yields.
          </p>

          <p>
            When combined with comprehensive market research (venture analysis
            scoring 36/45 with fatal weaknesses in monetization and
            competition), the evidence supports{" "}
            <strong>
              strategic pivot to B2B professional portfolio management
            </strong>{" "}
            serving RIAs, crypto funds, and DAO treasuries with higher ARPU
            potential.
          </p>
        </div>

        <h2>Milestone 3 Deliverables &amp; Results</h2>

        <h3>✅ Completed Deliverables (Week 6-9)</h3>
        <ul>
          <li>
            ✅ Recruited and tested with <strong>7 active DeFi users</strong>
          </li>
          <li>
            ✅ Conducted structured feedback surveys with quantitative +
            qualitative data
          </li>
          <li>
            ✅ <strong>3 users completed real blockchain transactions</strong> -
            validated technical execution
          </li>
          <li>✅ Gathered detailed UX feedback and feature requests</li>
          <li>✅ Analyzed results against comprehensive market research</li>
          <li>
            ✅ Validated technical functionality on Polygon and 4 more EVM
            networks
          </li>
          <li>✅ Identified strategic pivot direction based on evidence</li>
        </ul>

        <h3>User Testing Metrics Summary (7 Users)</h3>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Result</th>
              <th>Insight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Yield Discovery Success</strong>
              </td>
              <td>43% easily, 43% partially, 14% failed</td>
              <td>Feature works technically</td>
            </tr>
            <tr>
              <td>
                <strong>Investment Completion</strong>
              </td>
              <td>
                <strong>43% (3/7) completed transaction</strong>
              </td>
              <td>Mixed: 3 succeeded, 4 did not</td>
            </tr>
            <tr>
              <td>
                <strong>Time Savings</strong>
              </td>
              <td>29% significantly, 43% a little, 29% none</td>
              <td>Some value but not transformative</td>
            </tr>
            <tr>
              <td>
                <strong>Regular Usage Intent</strong>
              </td>
              <td>29% would use regularly, 57% maybe occasionally</td>
              <td>Interest but not habit-forming</td>
            </tr>
            <tr>
              <td>
                <strong>Willingness to Pay</strong>
              </td>
              <td>
                43% would pay $1-5/month, <strong>57% only if free</strong>
              </td>
              <td>Low price point problem</td>
            </tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>Important Note:</strong> User 7 stated willingness to pay{" "}
          <strong>transaction fees</strong> (not subscription) - suggesting
          alternative monetization model.
        </div>

        <p>
          <strong>Survey data:</strong>{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/18RCvkYIYGCP-rOtmjKX_20Hu55s3pe1fjaSHuef0C-s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Results
          </a>
        </p>
      </div>

      <div className="content-page page-break">
        <h2>User Testing Visualizations</h2>

        <div className="chart-section">
          <div className="chart-title">
            How often do you use DeFi protocols?
          </div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart1" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">
                  Regularly (several times per week) - 42.9%
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#ea4335" }}
                ></div>
                <div className="legend-text">
                  Sometimes (several times per month) - 14.3%
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#fbbc04" }}
                ></div>
                <div className="legend-text">
                  Rarely (tried a couple times) - 42.9%
                </div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Finding:</strong> Balanced mix of power users (43%) and
            beginners (43%) tested the product
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title">
            Were you able to find yields using the search feature?
          </div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart2" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">Yes, easily - 42.9%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#fbbc04" }}
                ></div>
                <div className="legend-text">Partially - 42.9%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#34a853" }}
                ></div>
                <div className="legend-text">
                  No, couldn&apos;t get it to work - 14.3%
                </div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Finding:</strong> 86% achieved some level of success,
            indicating core feature viability
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title">
            Did you try to invest through the application?
          </div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart3" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">
                  Yes, completed successfully - 42.9%
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#fbbc04" }}
                ></div>
                <div className="legend-text">Didn&apos;t try - 42.9%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#34a853" }}
                ></div>
                <div className="legend-text">Other - 14.3%</div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Critical Finding:</strong> 43% conversion to actual
            blockchain transactions validates technical execution
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title">
            Did this save you time compared to your usual method?
          </div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart4" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">Yes, significantly - 28.6%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#ea4335" }}
                ></div>
                <div className="legend-text">Yes, a little - 42.9%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#fbbc04" }}
                ></div>
                <div className="legend-text">About the same - 14.3%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#34a853" }}
                ></div>
                <div className="legend-text">
                  No, my usual method is faster - 14.3%
                </div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Finding:</strong> 72% reported some time savings, but only
            29% found it transformative
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title">
            Would you use this regularly if it were free?
          </div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart5" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">
                  Yes, several times per week - 28.6%
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#ea4335" }}
                ></div>
                <div className="legend-text">Maybe, occasionally - 57.1%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#fbbc04" }}
                ></div>
                <div className="legend-text">No - 14.3%</div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Finding:</strong> Strong interest but not habit-forming for
            most
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title">Would you pay for this product?</div>
          <div className="response-count">7 responses</div>
          <div className="chart-wrapper">
            <div className="chart-container">
              <canvas id="chart6" width="640" height="640"></canvas>
            </div>
            <div className="legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#4285f4" }}
                ></div>
                <div className="legend-text">Yes, $1-5/month - 42.9%</div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: "#ea4335" }}
                ></div>
                <div className="legend-text">No, only if free - 57.1%</div>
              </div>
            </div>
          </div>
          <div className="insight">
            <strong>Fatal Finding:</strong> 57% unwilling to pay, those willing
            only at low price ($1-5/month). User 7 indicated willingness to pay
            via transaction fees.
          </div>
        </div>
      </div>

      <div className="content-page page-break">
        <h2>Critical Qualitative Insights</h2>

        <h3>Strong Positive Signals</h3>
        <blockquote>
          <strong>User 6</strong> (Regular DeFi user, completed investment):
          &quot;I like the ease of accessing and finding best yields on the
          market. There is one centralized point, which allows users to save
          energy while investing.&quot;
        </blockquote>

        <blockquote>
          <strong>User 7</strong> (Completed investment): &quot;The simple
          investment process&quot;
        </blockquote>

        <ul>
          <li>
            <strong>43% (3/7) completed real blockchain transactions</strong> -
            validates technical execution
          </li>
          <li>
            <strong>29% saved significant time</strong> - demonstrates clear
            value for some users
          </li>
          <li>Simple UI consistently praised</li>
        </ul>

        <h3>Mixed/Negative Feedback</h3>
        <blockquote>
          <strong>User 1:</strong> &quot;Not thrilled honestly, it didn&apos;t
          really help me with my tasks. All these pools are already known.&quot;
        </blockquote>

        <blockquote>
          <strong>User 2:</strong> &quot;As someone close to zero investor in
          crypto, I don&apos;t want to think about what question to ask. I know
          for sure that people pay for Telegram channels and bots that give
          trading signals and market insights.&quot;
        </blockquote>

        <h3>Detailed Technical Issues (User 7)</h3>
        <ol>
          <li>
            Model doesn&apos;t understand abbreviations (e.g., &quot;BNB&quot;
            not recognized, only &quot;Binance blockchain&quot;)
          </li>
          <li>
            Unclear why no results found - model issue or genuinely no matches?
          </li>
          <li>Model doesn&apos;t explain how it understood the request</li>
          <li>No hints/suggestions while typing or when no results</li>
          <li>No way to filter or sort results</li>
        </ol>

        <div className="warning-box">
          <h3>Key Strategic Problems</h3>
          <ul>
            <li>
              <span className="status-cross">❌</span>{" "}
              <strong>For power users:</strong> Yields already known, not
              discovering new value
            </li>
            <li>
              <span className="status-cross">❌</span>{" "}
              <strong>For beginners:</strong> Want passive insights, not
              conversational interface
            </li>
            <li>
              <span className="status-cross">❌</span>{" "}
              <strong>Trust concerns:</strong> &quot;Could I trust it?&quot;
              (User 2)
            </li>
            <li>
              <span className="status-cross">❌</span>{" "}
              <strong>Monetization model:</strong> User 7 willing to pay
              transaction fees, NOT subscription
            </li>
            <li>
              <span className="status-cross">❌</span>{" "}
              <strong>Feature clarity:</strong> &quot;What else can it do?&quot;
              - unclear value beyond basic search
            </li>
          </ul>
        </div>
      </div>

      <div className="content-page page-break">
        <h2>Market Research &amp; Pivot Rationale</h2>

        <h3>Comprehensive Market Analysis</h3>
        <p>
          <strong>9-Dimension Venture Analysis:</strong>
        </p>
        <ul>
          <li>
            <strong>Total Score: 36/45</strong> - Strong foundation with fatal
            weaknesses
          </li>
          <li>
            <strong>Strengths:</strong> Time to Value (5/5), Market Timing
            (5/5), Founder-Market Fit (5/5)
          </li>
          <li>
            <strong>Fatal Weaknesses:</strong>
            <ul>
              <li>
                <strong>Monetization: 2/5</strong> - Users expect free tools
                (validated by testing)
              </li>
              <li>
                <strong>Competition: 2/5</strong> - Crowded market with funded
                incumbents (Zapper, Zerion, DeBank)
              </li>
              <li>
                <strong>Regulatory Risk: 1/5</strong> - SEC vs. Rari Capital
                precedent for similar products
              </li>
            </ul>
          </li>
        </ul>

        <p>
          <strong>Market Size Analysis:</strong>
        </p>
        <ul>
          <li>14.2M active DeFi users globally</li>
          <li>
            B2C DeFi tools struggle with monetization (most are VC-subsidized)
          </li>
          <li>
            Professional segment: 50+ DAOs with $50M+ treasuries (underserved)
          </li>
          <li>
            B2B proof: DeBank Cloud generates $4.23M ARR from API licensing
          </li>
        </ul>

        <h3>Why B2C Model Has Structural Challenges</h3>

        <div className="success-box">
          <h4>Positive Validation from Testing:</h4>
          <ul>
            <li>
              <span className="status-check">✅</span> Technical execution works
              - 43% completed transactions
            </li>
            <li>
              <span className="status-check">✅</span> Some users find clear
              value - 29% saved significant time
            </li>
            <li>
              <span className="status-check">✅</span> Core value prop
              resonates: &quot;one centralized point... saves energy&quot;
            </li>
            <li>
              <span className="status-check">✅</span> Simple investment process
              appreciated
            </li>
          </ul>
        </div>

        <h4>But Fundamental Business Model Problems Remain:</h4>

        <p>
          <strong>From User Testing:</strong>
        </p>
        <ol>
          <li>
            <strong>Monetization ceiling:</strong> 43% would pay only $1-5/month
            → ~$24-60/year LTV
          </li>
          <li>
            <strong>Alternative model:</strong> User 7 wants transaction fees,
            not subscription
          </li>
          <li>
            <strong>Power users already know yields:</strong> Not discovering
            new value
          </li>
          <li>
            <strong>Beginners want passive insights:</strong> Wrong product
            format for novices
          </li>
          <li>
            <strong>UX gaps:</strong> Model doesn&apos;t understand
            abbreviations, no filtering/sorting
          </li>
        </ol>

        <p>
          <strong>From Market Research (36/45 Venture Score):</strong>
        </p>
        <ol>
          <li>
            <strong>High CAC ($85+)</strong> requires LTV of $250+ → $1-5/month
            doesn&apos;t work at scale
          </li>
          <li>
            <strong>Competition (2/5):</strong> Incumbents (Zapper, Zerion) can
            copy AI features quickly
          </li>
          <li>
            <strong>Monetization (2/5):</strong> Users compare to free
            alternatives
          </li>
          <li>
            <strong>Regulatory Risk (1/5):</strong> SEC vs. Rari Capital
            precedent for direct investment tools
          </li>
        </ol>

        <div className="warning-box">
          <h4>Economic Reality Check:</h4>
          <ul>
            <li>At $5/month × 1,000 users = $60k/year revenue</li>
            <li>With $85 CAC = $85k just to acquire those 1,000 users</li>
            <li>
              Need ~17 months to break even per user (assuming zero churn)
            </li>
            <li>Requires massive scale (10k+ users) to sustain team</li>
          </ul>

          <p>
            <strong>Conclusion:</strong> Product has merit and some users love
            it, but B2C subscription model at $1-5/month is not
            venture-scalable. Need either: (a) Much higher ARPU from
            professional users, or (b) Transaction-based revenue model at
            massive scale.
          </p>
        </div>
      </div>

      <div className="content-page page-break">
        <h2>Strategic Pivot to B2B</h2>

        <h3>New Direction: Professional Portfolio Management</h3>

        <div className="info-box">
          <p>
            <strong>Important Context:</strong> The pivot is NOT because the
            product failed technically. User feedback validates:
          </p>
          <ul>
            <li>
              <span className="status-check">✅</span> Core product works (43%
              completed transactions)
            </li>
            <li>
              <span className="status-check">✅</span> Creates value (29% saved
              significant time)
            </li>
            <li>
              <span className="status-check">✅</span> Users appreciate the UX
              (&quot;saves energy while investing&quot;)
            </li>
          </ul>
          <p>
            <strong>The pivot is because:</strong> The B2C subscription model at
            $1-5/month doesn&apos;t support venture-scale economics when CAC is
            $85+ and incumbents can copy features.
          </p>
        </div>

        <h3>Target Customers</h3>
        <ul>
          <li>DAO Treasuries (50+ with $50M+ AUM)</li>
          <li>Crypto Hedge Funds and Family Offices</li>
          <li>Registered Investment Advisors (RIAs) entering crypto</li>
          <li>Institutional DeFi participants</li>
        </ul>

        <h3>Product Pivot</h3>
        <table>
          <tbody>
            <tr>
              <th>FROM</th>
              <th>TO</th>
            </tr>
            <tr>
              <td>Conversational yield finder for retail</td>
              <td>
                Advanced AI-powered yield analytics and multi-address portfolio
                management for professionals
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Why This Works</h3>
        <ol>
          <li>
            <strong>Higher Monetization:</strong> Professionals pay
            $200-500/month (vs. $1-5 retail) - economics work at scale
          </li>
          <li>
            <strong>Alternative Revenue Model:</strong> User 7&apos;s feedback
            suggests transaction-based fees could work for high-volume
            professional users
          </li>
          <li>
            <strong>Problem Acuteness:</strong> Managing $10M+ treasuries =
            urgent, high-value pain
          </li>
          <li>
            <strong>Competition:</strong> Incumbents focus on retail;
            professionals underserved
          </li>
          <li>
            <strong>Trust:</strong> B2B allows human-in-loop workflows, reduces
            autonomy risk
          </li>
          <li>
            <strong>Regulatory:</strong> Serving licensed advisors reduces SEC
            enforcement risk
          </li>
          <li>
            <strong>Founder Fit:</strong> Technical expertise in risk modeling
            aligns perfectly
          </li>
        </ol>

        <h3>Market Evidence</h3>
        <ul>
          <li>DeBank Cloud: $4.23M ARR from B2B API model</li>
          <li>Professional tools command premium pricing</li>
          <li>
            Compliance complexity = competitive moat for technical founders
          </li>
        </ul>
      </div>

      <div className="content-page page-break">
        <h2>Completed Contributions</h2>

        <h3>Technical</h3>
        <ul>
          <li>
            <span className="status-check">✅</span> Built conversational DeFi
            interface on 5 EVM chains including Polygon
          </li>
          <li>
            <span className="status-check">✅</span> Integrated multiple Polygon
            DeFi protocols for yield aggregation
          </li>
          <li>
            <span className="status-check">✅</span> Validated natural language
            search patterns for DeFi
          </li>
          <li>
            <span className="status-check">✅</span>{" "}
            <strong>3 real users completed blockchain transactions</strong> -
            proved technical viability
          </li>
          <li>
            <span className="status-check">✅</span> User-tested wallet
            connection and transaction flows
          </li>
          <li>
            <span className="status-check">✅</span> Open-source learnings for
            ecosystem
          </li>
        </ul>

        <h3>Research</h3>
        <ul>
          <li>
            <span className="status-check">✅</span> Documented B2C DeFi
            monetization challenges with real user data (
            <strong>7 users tested</strong>)
          </li>
          <li>
            <span className="status-check">✅</span> Identified mixed signals:
            technical success + business model challenges
          </li>
          <li>
            <span className="status-check">✅</span> Discovered alternative
            monetization preference: transaction fees vs. subscription
          </li>
          <li>
            <span className="status-check">✅</span> Validated trust
            considerations for AI-driven financial products
          </li>
          <li>
            <span className="status-check">✅</span> Identified underserved B2B
            segment
          </li>
        </ul>

        <h2>Complete Project Overview</h2>

        <h3>All Grant Milestones Status</h3>
        <table>
          <thead>
            <tr>
              <th>Timeline</th>
              <th>Objective</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Week 1-3</td>
              <td>Finish yield search agent</td>
              <td>
                <span className="status-check">✅</span> Completed
              </td>
            </tr>
            <tr>
              <td>Week 1-3</td>
              <td>Wallet management (EOA)</td>
              <td>
                <span className="status-check">✅</span> Completed
              </td>
            </tr>
            <tr>
              <td>Week 1-3</td>
              <td>In-app investment functionality</td>
              <td>
                <span className="status-check">✅</span> Completed
              </td>
            </tr>
            <tr>
              <td>Week 4-5</td>
              <td>Portfolio management features</td>
              <td>
                <span className="status-check">✅</span> Completed
              </td>
            </tr>
            <tr>
              <td>Week 6-9</td>
              <td>
                <strong>User testing &amp; feedback gathering</strong>
              </td>
              <td>
                <span className="status-check">✅</span>{" "}
                <strong>Completed</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Project Links &amp; Resources</h3>

        <h4>Live Application &amp; Demo:</h4>
        <ul>
          <li>
            Production Demo:{" "}
            <a
              href="https://omy-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://omy-chi.vercel.app/
            </a>
          </li>
        </ul>

        <h4>Technical Resources:</h4>
        <ul>
          <li>
            GitHub Repository:{" "}
            <a
              href="https://github.com/kmadorin/omy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kmadorin/omy
            </a>
          </li>
          <li>
            Technical Documentation:{" "}
            <a
              href="https://github.com/kmadorin/omy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kmadorin/omy
            </a>
          </li>
        </ul>

        <h4>Research &amp; Analysis:</h4>
        <ul>
          <li>
            User Feedback Survey (7 users):{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/18RCvkYIYGCP-rOtmjKX_20Hu55s3pe1fjaSHuef0C-s/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Results
            </a>
          </li>
          <li>
            Market Research &amp; Competition Analysis: Submitted as separate
            document
          </li>
        </ul>

        <h3>Project Description</h3>
        <p>
          <strong>OhMyYield</strong> is a conversational DeFi yield discovery
          platform built on Polygon that enables users to find optimal
          investment opportunities through natural language queries. The MVP
          includes wallet management, multi-protocol yield aggregation, and
          seamless investment execution.
        </p>

        <p>
          <strong>Pivot Direction:</strong> Following comprehensive user testing
          and market research, OhMyYield is pivoting to serve professional
          portfolio managers, RIAs, crypto funds, and DAO treasuries with
          advanced yield analytics, risk-adjusted scoring, and multi-address
          portfolio management tools.
        </p>

        <h4>Key Technologies:</h4>
        <ul>
          <li>Natural language processing for DeFi queries</li>
          <li>Multi-protocol yield aggregation</li>
          <li>Wallet connection and transaction execution</li>
          <li>Portfolio tracking and analytics</li>
        </ul>

        <h4>Target Market (Pivot):</h4>
        <ul>
          <li>DAO Treasuries with $10M+ AUM</li>
          <li>Crypto Hedge Funds and Family Offices</li>
          <li>Registered Investment Advisors entering DeFi</li>
          <li>Institutional DeFi participants</li>
        </ul>

        <h4>Supported Networks:</h4>
        <p>Ethereum, Polygon, Arbitrum, Base and Optimism</p>

        <h3>Next Steps</h3>
        <ul>
          <li>Validate B2B hypothesis with 10 prospect interviews</li>
          <li>Build compliance-grade dashboard prototype</li>
          <li>Secure 2-3 paid pilot commitments</li>
        </ul>

        <h3>Contact Information</h3>
        <p>
          <strong>Project:</strong> OhMyYield
        </p>
        <p>
          <strong>Founder:</strong> Kirill Madorin
        </p>
        <p>
          <strong>Email:</strong> madorinkv@gmail.com
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/kmadorin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/kmadorin/
          </a>
        </p>
        <p>
          <strong>Twitter/X:</strong>{" "}
          <a
            href="https://x.com/kirillmadorin"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://x.com/kirillmadorin
          </a>
        </p>

        <h2>Acknowledgments</h2>
        <p>
          Thank you to the Encode Club and Polygon for supporting this research
          and development. The completed MVP and user testing phase provided
          invaluable insights about the market and led to a strategic pivot that
          positions OhMyYield for sustainable growth in the professional DeFi
          management space.
        </p>

        <p>
          The grant enabled us to validate assumptions, gather real user
          feedback, and make evidence-based strategic decisions that increased
          our chances of building a sustainable business. This learning is the
          most valuable outcome of the funding.
        </p>
      </div>

      {/* Chart Initialization Script */}
      <Script id="chart-init" strategy="afterInteractive">
        {`
          const chartConfig = {
            type: 'doughnut',
            options: {
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.label + ': ' + context.parsed + ' (' +
                             ((context.parsed / 7) * 100).toFixed(1) + '%)';
                    }
                  }
                }
              }
            }
          };

          new Chart(document.getElementById('chart1'), {
            ...chartConfig,
            data: {
              labels: ['Regularly (several times per week)', 'Sometimes (several times per month)', 'Rarely (tried a couple times)'],
              datasets: [{
                data: [3, 1, 3],
                backgroundColor: ['#4285f4', '#ea4335', '#fbbc04'],
                borderWidth: 0
              }]
            }
          });

          new Chart(document.getElementById('chart2'), {
            ...chartConfig,
            data: {
              labels: ['Yes, easily', 'Partially - found something but not what I was looking for', 'No, couldn\\'t get it to work'],
              datasets: [{
                data: [3, 3, 1],
                backgroundColor: ['#4285f4', '#fbbc04', '#34a853'],
                borderWidth: 0
              }]
            }
          });

          new Chart(document.getElementById('chart3'), {
            ...chartConfig,
            data: {
              labels: ['Yes, transaction completed successfully', 'Didn\\'t try', 'Other'],
              datasets: [{
                data: [3, 3, 1],
                backgroundColor: ['#4285f4', '#fbbc04', '#34a853'],
                borderWidth: 0
              }]
            }
          });

          new Chart(document.getElementById('chart4'), {
            ...chartConfig,
            data: {
              labels: ['Yes, significantly', 'Yes, a little', 'About the same', 'No, my usual method is faster'],
              datasets: [{
                data: [2, 3, 1, 1],
                backgroundColor: ['#4285f4', '#ea4335', '#fbbc04', '#34a853'],
                borderWidth: 0
              }]
            }
          });

          new Chart(document.getElementById('chart5'), {
            ...chartConfig,
            data: {
              labels: ['Yes, several times per week', 'Maybe, occasionally', 'No'],
              datasets: [{
                data: [2, 4, 1],
                backgroundColor: ['#4285f4', '#ea4335', '#fbbc04'],
                borderWidth: 0
              }]
            }
          });

          new Chart(document.getElementById('chart6'), {
            ...chartConfig,
            data: {
              labels: ['Yes, $1-5/month', 'No, only if free'],
              datasets: [{
                data: [3, 4],
                backgroundColor: ['#4285f4', '#ea4335'],
                borderWidth: 0
              }]
            }
          });
        `}
      </Script>

      {/* Appendix A */}
      <div className="content-page page-break">
        <h2>Appendix A: Research Methodology</h2>

        <h3>9-Dimension Venture Analysis Framework</h3>
        <p>
          The strategic pivot decision was informed by a comprehensive{" "}
          <strong>9-Dimension Venture Analysis</strong> - a brutal,
          evidence-based framework for evaluating startup viability. This
          methodology scores ideas across nine critical dimensions on a 1-5
          scale, with a maximum possible score of 45 points.
        </p>

        <h4>Framework Overview</h4>
        <p>
          The analysis evaluates both product-market fit and business viability
          through:
        </p>

        <p>
          <strong>Product Dimensions:</strong>
        </p>
        <ol>
          <li>
            <strong>Problem Acuteness</strong> (1-5): How severe and frequent is
            the problem?
          </li>
          <li>
            <strong>Time to Value</strong> (1-5): How quickly do users
            experience the &quot;aha moment&quot;?
          </li>
          <li>
            <strong>Technical Feasibility</strong> (1-5): Can you actually build
            this safely?
          </li>
        </ol>

        <p>
          <strong>Market Dimensions:</strong>
        </p>
        <ol>
          <li>
            <strong>Market Timing</strong> (1-5): Is the market ready now?
          </li>
          <li>
            <strong>Competition &amp; Differentiation</strong> (1-5): How
            crowded? How different?
          </li>
          <li>
            <strong>Founder-Market Fit</strong> (1-5): Are you the right person?
          </li>
        </ol>

        <p>
          <strong>Business Model Dimensions:</strong>
        </p>
        <ol>
          <li>
            <strong>Distribution Strategy</strong> (1-5): How will you reach
            customers cost-effectively?
          </li>
          <li>
            <strong>Monetization Strength</strong> (1-5): Will people pay? How
            much? How often?
          </li>
          <li>
            <strong>Scalability &amp; Unit Economics</strong> (1-5): Does it get
            better with scale?
          </li>
        </ol>

        <h4>Scoring Rubric</h4>
        <p>Each dimension uses evidence-based criteria:</p>

        <table>
          <thead>
            <tr>
              <th>Score</th>
              <th>Problem Acuteness</th>
              <th>Timing</th>
              <th>Monetization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>5</strong>
              </td>
              <td>Daily pain, users desperately seeking solutions</td>
              <td>Perfect convergence, multiple tailwinds</td>
              <td>Clear ROI, subscription with expanding revenue</td>
            </tr>
            <tr>
              <td>
                <strong>4</strong>
              </td>
              <td>Weekly problem, significant pain</td>
              <td>Market ready, adoption accelerating</td>
              <td>Direct value, willing to pay, good margins</td>
            </tr>
            <tr>
              <td>
                <strong>3</strong>
              </td>
              <td>Monthly problem, moderate pain</td>
              <td>Early adopters ready</td>
              <td>Indirect value, some will pay</td>
            </tr>
            <tr>
              <td>
                <strong>2</strong>
              </td>
              <td>Quarterly problem, mild annoyance</td>
              <td>Too early, infrastructure missing</td>
              <td>Unclear value, price sensitivity</td>
            </tr>
            <tr>
              <td>
                <strong>1</strong>
              </td>
              <td>Yearly or less, vitamin not painkiller</td>
              <td>5+ years too early/late</td>
              <td>Ad-based only, users expect free</td>
            </tr>
          </tbody>
        </table>

        <h4>OhMyYield Analysis Results</h4>
        <p>
          <strong>Final Score: 36/45</strong>
        </p>

        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Score</th>
              <th>Assessment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time to Value</td>
              <td>
                <strong>5/5</strong>
              </td>
              <td>Instant &quot;aha moment&quot; (&lt;30 seconds)</td>
            </tr>
            <tr>
              <td>Market Timing</td>
              <td>
                <strong>5/5</strong>
              </td>
              <td>Perfect storm of LLM maturity + L2 adoption</td>
            </tr>
            <tr>
              <td>Founder-Market Fit</td>
              <td>
                <strong>5/5</strong>
              </td>
              <td>Deep DeFi protocol building experience</td>
            </tr>
            <tr>
              <td>Problem Acuteness</td>
              <td>
                <strong>4/5</strong>
              </td>
              <td>Real pain for 14.2M active DeFi users</td>
            </tr>
            <tr>
              <td>Distribution</td>
              <td>
                <strong>4/5</strong>
              </td>
              <td>Clear SEO/content channels exist</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>
                <strong>4/5</strong>
              </td>
              <td>High-margin software model</td>
            </tr>
            <tr>
              <td>Competition</td>
              <td>
                <strong>2/5</strong>
              </td>
              <td>Incumbents can copy AI features rapidly</td>
            </tr>
            <tr>
              <td>Technical Feasibility</td>
              <td>
                <strong>2/5</strong>
              </td>
              <td>AI + irreversible transactions = catastrophic risk</td>
            </tr>
            <tr>
              <td>Monetization</td>
              <td>
                <strong>2/5</strong>
              </td>
              <td>Users unwilling to pay at scale</td>
            </tr>
            <tr>
              <td>Regulatory Risk</td>
              <td>
                <strong>1/5</strong>
              </td>
              <td>SEC vs. Rari Capital precedent (implicit)</td>
            </tr>
          </tbody>
        </table>

        <h4>Analysis Process</h4>

        <p>
          <strong>Phase 1: Dimensional Scoring</strong>
        </p>
        <ul>
          <li>Each dimension scored independently with supporting evidence</li>
          <li>
            Evidence included: market research, competitor analysis, user
            interviews
          </li>
          <li>
            Reality checks applied: &quot;What would need to be true for this to
            be a 5?&quot;
          </li>
        </ul>

        <p>
          <strong>Phase 2: Diagnosis</strong>
        </p>
        <ul>
          <li>Identified strengths to leverage (founder expertise, timing)</li>
          <li>Flagged weaknesses that could &quot;kill the startup&quot;</li>
          <li>Overall verdict based on score distribution</li>
        </ul>

        <p>
          <strong>Phase 3: Strategic Pivot Generation</strong>
        </p>
        <p>Based on weakest dimensions, generated 3 evidence-backed pivots:</p>
        <ul>
          <li>
            <strong>Pivot 1:</strong> Compliance Moat (B2B for RIAs/funds)
          </li>
          <li>
            <strong>Pivot 2:</strong> Intent Engine (B2B API infrastructure)
          </li>
          <li>
            <strong>Pivot 3:</strong> Risk-Adjusted Oracle (B2B data product)
          </li>
        </ul>

        <p>
          <strong>Phase 4: Validation Through User Testing</strong>
        </p>
        <ul>
          <li>Conducted testing with 7 active DeFi users</li>
          <li>Collected quantitative metrics + qualitative feedback</li>
          <li>
            Cross-validated market research findings against real user data
          </li>
        </ul>

        <h4>Key Findings Integration</h4>
        <p>The methodology revealed:</p>

        <ol>
          <li>
            <strong>Technical validation:</strong> 43% completed transactions
            proves execution capability
          </li>
          <li>
            <strong>Monetization ceiling:</strong> $1-5/month willingness
            validated the 2/5 Monetization score
          </li>
          <li>
            <strong>Value perception gap:</strong> Power users already know
            yields - confirms market research
          </li>
          <li>
            <strong>Alternative model suggestion:</strong> User 7&apos;s
            transaction fee preference opens new path
          </li>
          <li>
            <strong>Trust barrier:</strong> &quot;Could I trust it?&quot;
            validates Technical Feasibility concerns
          </li>
        </ol>

        <h3>User Testing Methodology</h3>

        <p>
          <strong>Participants:</strong> 7 active DeFi users with varying
          experience levels
        </p>
        <p>
          <strong>Data Collection:</strong> Google Forms survey + qualitative
          interviews
        </p>

        <h4>User Selection Criteria:</h4>
        <ul>
          <li>
            Mix of experience levels: 43% regular users, 43% rare users, 14%
            occasional
          </li>
          <li>
            All had previous DeFi exposure (minimum: tried protocols a couple
            times)
          </li>
          <li>Diverse use cases: yield farmers, investors, casual users</li>
        </ul>

        <h4>Testing Protocol:</h4>
        <ol>
          <li>Product demonstration (5-10 minutes)</li>
          <li>Hands-on testing session (15-30 minutes)</li>
          <li>Structured survey (10 questions)</li>
          <li>Open-ended feedback collection</li>
        </ol>

        <h4>Key Metrics Tracked:</h4>
        <ul>
          <li>Yield discovery success rate</li>
          <li>Transaction completion rate</li>
          <li>Time savings assessment</li>
          <li>Usage intent</li>
          <li>Willingness to pay</li>
          <li>Qualitative pain points</li>
        </ul>

        <h4>Limitations:</h4>
        <ul>
          <li>Small sample size (n=7) limits statistical significance</li>
          <li>Self-selected participants may have positive bias</li>
          <li>Short testing period may not capture long-term retention</li>
        </ul>
      </div>

      {/* Appendix B */}
      <div className="content-page page-break">
        <h2>Appendix B: User Testing Protocol</h2>

        <h3>Testing Methodology</h3>

        <p>
          <strong>Sample Size:</strong> 7 active DeFi users
        </p>
        <p>
          <strong>Testing Period:</strong> October 1-13, 2025
        </p>
        <p>
          <strong>Data Collection:</strong> Google Forms survey + qualitative
          interviews
        </p>

        <h4>User Selection Criteria:</h4>
        <ul>
          <li>
            Mix of experience levels: 43% regular users, 43% rare users, 14%
            occasional
          </li>
          <li>
            All had previous DeFi exposure (minimum: tried protocols a couple
            times)
          </li>
          <li>Diverse use cases: yield farmers, investors, casual users</li>
        </ul>

        <h4>Testing Protocol:</h4>
        <ol>
          <li>Product demonstration (5-10 minutes)</li>
          <li>Hands-on testing session (15-30 minutes)</li>
          <li>Structured survey (10 questions)</li>
          <li>Open-ended feedback collection</li>
        </ol>

        <h4>Key Metrics Tracked:</h4>
        <ul>
          <li>Yield discovery success rate</li>
          <li>Transaction completion rate</li>
          <li>Time savings assessment</li>
          <li>Usage intent</li>
          <li>Willingness to pay</li>
          <li>Qualitative pain points</li>
        </ul>

        <h4>Limitations:</h4>
        <ul>
          <li>Small sample size (n=7) limits statistical significance</li>
          <li>Self-selected participants may have positive bias</li>
          <li>Short testing period may not capture long-term retention</li>
        </ul>

        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            paddingTop: "30px",
            borderTop: "2px solid #e8eaf6",
          }}
        >
          <p style={{ fontStyle: "italic", color: "#666" }}>Report End</p>
          <p style={{ fontSize: "13px", color: "#999", marginTop: "10px" }}>
            OhMyYield Grant Final Report | October 2025
          </p>
          <p style={{ fontSize: "12px", color: "#aaa", marginTop: "5px" }}>
            Prepared by Kirill Madorin
          </p>
        </div>
      </div>
    </div>
  );
}
