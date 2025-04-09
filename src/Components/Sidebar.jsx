import React from 'react';
import '../Styles/Sidebar.css';
import { BiTask } from 'react-icons/bi';
import { CiGlobe, CiMail } from 'react-icons/ci';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Sidebar = ({ isopen, toggleSidebar ,setActivePage}) => {
  return (
    <div className={`sidebar ${isopen ? 'open' : 'closed'}`}>
      <div className='sidebar-item' onClick={toggleSidebar}>
        <IoReorderThreeOutline className='icon1' />
        {isopen && <span className='task-management'>TASK MANAGEMENT</span>}
      </div>
      <div className='sidebar-item' onClick={() => setActivePage('tasks')}>
        <BiTask className='icon2' />
        {isopen && <span className='tasks'>Tasks</span>}
      </div>
      <div className='sidebar-item' onClick={() => setActivePage('mails')}>
        <CiMail className='icon3' />
        {isopen && <span className='mails'>Mails</span>}
      </div>
      <div className='sidebar-item' onClick={() => setActivePage('global')}>
        <CiGlobe className='icon4' />
        {isopen && <span className='global'>Global</span>}
      </div>
    </div>
  );
};

export default Sidebar;
