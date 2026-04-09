import React from 'react';
import { motion } from 'framer-motion';
import { brandData, footerData } from '../data/data';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const iconMap = {
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    Linkedin: LinkedinIcon,
    Facebook: FacebookIcon,
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <div className="footer-logo">
                <img src={brandData.logo} alt={brandData.name} />
              </div>
              <h3 className="footer-title">
                {brandData.name.split('Verda')[0]}<span style={{ color: 'var(--primary)' }}>Verda</span>
              </h3>
            </div>
            <p className="footer-desc">
              {footerData.description}
            </p>
            <div className="footer-socials">
              {footerData.socials.map((social, i) => {
                const Icon = iconMap[social.platform];
                return (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    whileHover={{ scale: 1.2, color: 'var(--primary)' }}
                    className="social-link"
                  >
                    {Icon && <Icon size={24} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {footerData.columns.map((col, i) => (
            <div key={i} className="footer-column">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <motion.a href={link.href} whileHover={{ x: 10, color: 'var(--primary)' }}>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{footerData.copyright}</p>
          <div className="footer-legal">
            {footerData.bottomLinks.map((link, i) => (
              <a key={i} href={link.href}>{link.name}</a>
            ))}
            <a href="#" className="footer-status">{footerData.status}</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-main {
          background: var(--bg-deep);
          border-top: 2px solid var(--primary);
          padding: 100px 40px 60px;
          margin-top: auto;
          color: white;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 64px;
          margin-bottom: 80px;
        }
        .footer-brand {
          grid-column: span 2;
        }
        .footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          marginBottom: 32px;
        }
        .footer-logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid var(--primary);
          padding: 4px;
          background: white;
        }
        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .footer-title {
          font-size: 24px;
          color: white;
          margin: 0;
        }
        .footer-desc {
          color: var(--text-muted);
          max-width: 400px;
          margin: 32px 0;
          font-size: 17px;
          line-height: 1.8;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
        }
        .social-link {
          color: var(--text-muted);
          transition: var(--transition-base);
        }
        .footer-column h4 {
          color: white;
          margin-bottom: 24px;
          font-size: 18px;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-column a {
          color: var(--text-muted);
          font-size: 15px;
          text-decoration: none;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-light);
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: var(--text-muted);
        }
        .footer-legal {
          display: flex;
          gap: 32px;
        }
        .footer-legal a {
          color: inherit;
          text-decoration: none;
        }
        .footer-status {
          color: var(--accent) !important;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .footer-brand {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 60px 24px 40px;
          }
          .footer-grid {
            gap: 48px;
            margin-bottom: 60px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .footer-legal {
            flex-direction: column;
            gap: 16px;
          }
          .footer-logo-wrap {
            justify-content: center;
          }
          .footer-brand {
            text-align: center;
          }
          .footer-desc {
            margin: 24px auto;
          }
          .footer-socials {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
