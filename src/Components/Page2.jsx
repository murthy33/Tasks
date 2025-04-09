import React, { useState } from 'react';
import '../Styles/Page2.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainComponent from './MainComponent';
import MailsPage from './MailsPage';     
import GlobalPage from './GlobalPage'; 

const Page2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState('tasks');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderMainContent = () => {
    if (activePage === 'tasks') return <MainComponent searchQuery={searchQuery} />;
    if (activePage === 'mails') return <MailsPage />;
    if (activePage === 'global') return <GlobalPage />;
    return null;
  };

  return (
    <div className='page2Container'>
      <div className='top'>
        <Navbar setSearchQuery={setSearchQuery}/>
      </div>
      <div className='bottom'>
        <div className='left'>
          <Sidebar isopen={isSidebarOpen} toggleSidebar={toggleSidebar} setActivePage={setActivePage}/>
        </div>
        <div className='right'>
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Page2;
