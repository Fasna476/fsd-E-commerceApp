import React from 'react'
import catw from '../assets/catw.jpeg'
import catm from '../assets/catm.jpeg'
import catk from '../assets/catk.jpeg'

const CategorySection = ({ title, imageUrl, link }) => {
    return (
      <div style={categoryContainerStyle}>
        <a href={link} style={categoryLinkStyle}>
          <div style={categoryImageContainerStyle}>
            <img src={imageUrl} alt={title} style={categoryImageStyle} />
          </div>
          <h3 style={categoryTitleStyle}>{title}</h3>
        </a>
      </div>
    );
  };

const Shopbycategory = () => {
    console.log("shop ok")
  return (
    <div style={shopByCategoryStyle}>
      <h2 style={pageTitleStyle}>Shop by Category</h2>

      <div style={categoriesContainerStyle}>
        <CategorySection 
          title="Men" 
          imageUrl={catm}
          link="/men" 
        />
        <CategorySection 
          title="Women" 
          imageUrl={catw}
          link="/women" 
        />
        <CategorySection 
          title="Kids" imageUrl={catk}
          link="/kids" 
        />
      </div>
    </div>
  );
};

// Inline styles
const shopByCategoryStyle = {
  padding: '40px 0',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
};

const pageTitleStyle = {
  fontSize: '36px',
  marginBottom: '40px',
};

const categoriesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
};

const categoryContainerStyle = {
  width: '30%',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease',
};

const categoryLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const categoryImageContainerStyle = {
  height: '400px',
  width: '100%',
  overflow: 'hidden',
};

const categoryImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const categoryTitleStyle = {
  padding: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  backgroundColor: '#333',
  color: '#fff',
};
  


export default Shopbycategory