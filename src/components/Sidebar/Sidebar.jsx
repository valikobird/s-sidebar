import logo from '../../logo-vz.png';
import { links, social } from '../../data';
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar showSidebar' : 'sidebar'}>
      <div className='sidebarHeader'>
        <img src={logo} className='logo' alt='logo' />
        <button className='closeBtn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='socialLinks'>
        {social.map((socialLink) => {
          const { id, url, icon } = socialLink;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
