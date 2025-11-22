 "use client";

import { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Cylindra</span>
            <span className="logo-accent">AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Demo</a>
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Your AI-Powered <br />
            <span className="gradient-text">Marine Engineering Assistant</span>
          </h1>
          <p className="hero-subtitle">
            Instant technical support for merchant marine engineers. 
            Powered by advanced AI trained on official manuals and industry standards.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Get Early Access</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Technical Docs</span>
            </div>
            <div className="stat">
              <span className="stat-number">&lt;2s</span>
              <span className="stat-label">Response Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Built for Marine Engineers</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Instant Troubleshooting</h3>
              <p>Get step-by-step guidance for any technical issue. From engine alarms to system failures.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Official Documentation</h3>
              <p>Trained on SOLAS, MARPOL, and manufacturer manuals. Always accurate, always compliant.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Works Offline</h3>
              <p>PWA technology ensures access even without internet. Critical support when you need it most.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Maintenance Planning</h3>
              <p>Preventive maintenance schedules and reminders. Keep your vessel in peak condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <h2 className="section-title">Try it now</h2>
          <div className="demo-container">
            <div className="chat-window">
              <div className="chat-header">
                <span>Cylindra Assistant</span>
                <span className="status">● Online</span>
              </div>
              <div className="chat-messages">
                <div className="message assistant">
                  <div className="message-content">
                    Hello! I'm your marine engineering assistant. Ask me anything about troubleshooting, maintenance, or procedures.
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <input 
                  type="text" 
                  placeholder="Ask about high temperature alarms, fuel system purging, etc..."
                  className="input-field"
                />
                <button className="send-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">
                <span className="amount">€0</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ 10 queries per month</li>
                <li>✓ Basic troubleshooting</li>
                <li>✓ Community support</li>
                <li>✗ Offline access</li>
                <li>✗ Advanced features</li>
              </ul>
              <button className="btn-outline">Get Started</button>
            </div>
            
            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="amount">€19</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Unlimited queries</li>
                <li>✓ Full documentation access</li>
                <li>✓ Offline PWA</li>
                <li>✓ Priority support</li>
                <li>✓ Maintenance planner</li>
              </ul>
              <button className="btn-primary">Start Free Trial</button>
            </div>
            
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">€99</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                <li>✓ Everything in Pro</li>
                <li>✓ Custom integrations</li>
                <li>✓ API access</li>
                <li>✓ Multi-user accounts</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button className="btn-outline">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to transform your workflow?</h2>
          <p>Join hundreds of marine engineers already using Cylindra AI</p>
          <div className="cta-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Cylindra AI</h4>
              <p>The intelligent assistant for marine engineers worldwide.</p>
            </div>
            <div className="footer-section">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Demo</a>
            </div>
            <div className="footer-section">
              <h5>Company</h5>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-section">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Cylindra AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .landing-page {
          background: #0A0E27;
          color: #E5E7EB;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 14, 39, 0.8);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo-text {
          color: #E5E7EB;
        }

        .logo-accent {
          color: #20B2AA;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #20B2AA;
        }

        .btn-login {
          background: transparent;
          color: #E5E7EB;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-login:hover {
          border-color: #20B2AA;
          color: #20B2AA;
        }

        .btn-signup {
          background: linear-gradient(135deg, #20B2AA, #1E90FF);
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: transform 0.3s;
        }

        .btn-signup:hover {
          transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(32, 178, 170, 0.15), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(30, 144, 255, 0.15), transparent 50%);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #20B2AA, #1E90FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #9CA3AF;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #20B2AA, #1E90FF);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
        }

        .btn-secondary {
          background: transparent;
          color: #E5E7EB;
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: #20B2AA;
          color: #20B2AA;
        }

        .hero-stats {
          display: flex;
          gap: 4rem;
          justify-content: center;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #20B2AA;
        }

        .stat-label {
          color: #9CA3AF;
          font-size: 0.9rem;
        }

        /* Features Section */
        .features {
          padding: 6rem 2rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          font-weight: 700;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s, border-color 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: #20B2AA;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #9CA3AF;
          line-height: 1.6;
        }

        /* Demo Section */
        .demo {
          padding: 6rem 2rem;
        }

        .demo-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .chat-window {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .chat-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status {
          color: #28a745;
          font-size: 0.9rem;
        }

        .chat-messages {
          padding: 2rem 1.5rem;
          min-height: 200px;
        }

        .message {
          margin-bottom: 1rem;
        }

        .message-content {
          background: rgba(32, 178, 170, 0.1);
          border: 1px solid rgba(32, 178, 170, 0.3);
          padding: 1rem;
          border-radius: 12px;
          max-width: 80%;
        }

        .chat-input {
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .input-field {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #E5E7EB;
          font-size: 1rem;
        }

        .input-field:focus {
          outline: none;
          border-color: #20B2AA;
        }

        .send-btn {
          background: #20B2AA;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        /* Pricing Section */
        .pricing {
          padding: 6rem 2rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
        }

        .pricing-card.featured {
          border-color: #20B2AA;
          transform: scale(1.05);
        }

        .badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #20B2AA;
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .price {
          margin-bottom: 2rem;
        }

        .amount {
          font-size: 3rem;
          font-weight: 700;
          color: #20B2AA;
        }

        .period {
          color: #9CA3AF;
          font-size: 1rem;
        }

        .features-list {
          list-style: none;
          margin-bottom: 2rem;
        }

        .features-list li {
          padding: 0.5rem 0;
          color: #9CA3AF;
        }

        .btn-outline {
          background: transparent;
          color: #E5E7EB;
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          border-color: #20B2AA;
          color: #20B2AA;
        }

        /* CTA Section */
        .cta {
          padding: 6rem 2rem;
          text-align: center;
        }

        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta p {
          color: #9CA3AF;
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .cta-form {
          display: flex;
          gap: 1rem;
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .email-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: #E5E7EB;
          font-size: 1rem;
        }

        .email-input:focus {
          outline: none;
          border-color: #20B2AA;
        }

        /* Footer */
        .footer {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-section h4,
        .footer-section h5 {
          margin-bottom: 1rem;
        }

        .footer-section a {
          display: block;
          color: #9CA3AF;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: #20B2AA;
        }

        .footer-section p {
          color: #9CA3AF;
          line-height: 1.6;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #9CA3AF;
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }
          
          .hero-cta {
            flex-direction: column;
          }
          
          .cta-form {
            flex-direction: column;
          }

          .pricing-card.featured {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
