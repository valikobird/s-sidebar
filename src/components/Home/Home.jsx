import { FaBars } from 'react-icons/fa6';
import { useGlobalContext } from '../../context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className='sidebarToggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
