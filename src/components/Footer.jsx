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
    <footer style={{ 
      background: 'var(--bg-deep)', 
      borderTop: '2px solid var(--primary)', 
      padding: '100px 40px 60px',
      marginTop: 'auto',
      color: 'white'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '64px',
          marginBottom: '80px'
        }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '12px', 
                overflow: 'hidden',
                border: '2px solid var(--primary)',
                padding: '4px',
                background: 'white'
              }}>
                <img src={brandData.logo} alt={brandData.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '24px', color: 'white', margin: 0 }}>
                {brandData.name.split('Verda')[0]}<span style={{ color: 'var(--primary)' }}>Verda</span>
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '32px', fontSize: '17px', lineHeight: 1.8 }}>
              {footerData.description}
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {footerData.socials.map((social, i) => {
                const Icon = iconMap[social.platform];
                return (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    whileHover={{ scale: 1.2, color: 'var(--primary)' }}
                    style={{ color: 'var(--text-muted)', transition: 'var(--transition-base)' }}
                  >
                    {Icon && <Icon size={24} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {footerData.columns.map((col, i) => (
            <div key={i}>
              <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <motion.a href={link.href} whileHover={{ x: 10, color: 'var(--primary)' }} style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ 
          borderTop: '1px solid var(--border-light)', 
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '14px',
          color: 'var(--text-muted)'
        }}>
          <p>{footerData.copyright}</p>
          <div style={{ display: 'flex', gap: '32px' }}>
            {footerData.bottomLinks.map((link, i) => (
              <a key={i} href={link.href} style={{ color: 'inherit' }}>{link.name}</a>
            ))}
            <a href="#" style={{ color: 'var(--accent)', fontWeight: 700 }}>{footerData.status}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
