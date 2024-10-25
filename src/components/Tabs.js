import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('About');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="tabs">
      <ul>
        <li className={activeTab === 'About' ? 'active' : ''}>
          <Link to="/" onClick={() => handleTabClick('About')}>About</Link>
        </li>
        <li className={activeTab === 'CV' ? 'active' : ''}>
          <Link to="/cv" onClick={() => handleTabClick('CV')}>CV</Link>
        </li>
        <li className={activeTab === 'Publications' ? 'active' : ''}>
          <Link to="/publications" onClick={() => handleTabClick('Publications')}>Publications</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
