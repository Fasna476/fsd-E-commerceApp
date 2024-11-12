import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { alignProperty } from '@mui/material/styles/cssUtils';

const  Footer = () => {
  return (
    <footer style={footerStyle}>
    <div style={footerContentStyle}>
      {/* About Us Section */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>About Us</h4>
        <p style={paragraphStyle}>We are a leading e-commerce platform providing quality products at affordable prices. We aim to deliver excellent customer service and a seamless shopping experience.</p>
      </div>

      {/* Customer Service Section */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>Customer Service</h4>
        <ul style={listStyle}>
          <li><a href="/contact" style={linkStyle}>Contact Us</a></li>
          <li><a href="/faq" style={linkStyle}>FAQ</a></li>
          <li><a href="/returns" style={linkStyle}>Returns & Exchanges</a></li>
          <li><a href="/shipping" style={linkStyle}>Shipping Information</a></li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div style={columnStyle}>
        <h4 style={headingStyle}>Quick Links</h4>
        <ul style={listStyle}>
          <li><a href="/shop" style={linkStyle}>Shop</a></li>
          <li><a href="/about" style={linkStyle}>About Us</a></li>
          <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
          <li><a href="/terms" style={linkStyle}>Terms & Conditions</a></li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div style={columnStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <div style={socialIconsStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <FacebookOutlinedIcon size={40} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <InstagramIcon size={40} />
            </a>
            
          </div>
        </div>
    </div>
{/* Bottom Copyright Section */}
<div style={bottomStyle}>
        <p style={footerBottomText}>© 2024 E-Cart, All rights reserved</p>
      </div>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  backgroundColor: '#333', // Dark background color
  color: '#fff', // White text color
  padding: '40px 0', // Padding at the top and bottom of the footer
  fontSize: '14px', // Font size
  position: 'relative',
  bottom: '0',
  width: '100%',
  
};

const footerContentStyle = {
  display: 'flex', // Using flexbox for layout
  justifyContent: 'space-between', // Distribute sections equally
  maxWidth: '1200px', // Max width for content
  margin: '0 auto', // Center content horizontally
  paddingBottom: '20px', // Padding at the bottom
};

const columnStyle = {
  flex: 1, // Each column takes up equal space
  padding: '0 20px', // Padding between columns
};

const headingStyle = {
  fontSize: '18px', // Font size for headings
  fontWeight: 'bold', // Bold font weight for headings
  marginBottom: '10px', // Space below headings
};

const paragraphStyle = {
  fontSize: '14px', // Font size for paragraphs
  lineHeight: '1.6', // Line height for readability
};

const listStyle = {
  listStyleType: 'none', // No bullet points for lists
  padding: '0', // Remove padding
};

const linkStyle = {
  color: '#fff', // White text color for links
  textDecoration: 'none', // No underline for links
  fontSize: '14px', // Font size for links
  display: 'block', // Make links block level for better spacing
  marginBottom: '8px', // Space between links
};

const socialIconsStyle = {
  display: 'flex', // Flexbox layout for social media icons
  gap: '10px', // Space between icons
};

const socialIconStyle = {
  color: '#fff', // White color for social media icons
  textDecoration: 'none', // No underline
  fontSize: '16px', // Icon size
  justifyContent:'center',
  gap: '20px'

};

const bottomStyle = {
  textAlign: 'center', // Center the text
  paddingTop: '20px', // Space above copyright text
};

const footerBottomText = {
  fontSize: '12px', // Small font size for copyright text
};




export default Footer
