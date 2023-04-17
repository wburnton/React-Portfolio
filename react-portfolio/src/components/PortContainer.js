import React, { useState } from 'react'; 
import Portfolio from "./pages/Portfolio"; 
import About from "./pages/About"
import Resume from './pages/Resume'; 
import Contact from './pages/Contact'; 
import NavTabs from './Navigation'; 
import Project from './Project';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      } 
      if (currentPage === 'Contact') {
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        
        {renderPage()}
      </div>
    );
  } 
};