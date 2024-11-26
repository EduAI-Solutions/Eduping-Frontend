import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { LOGO, ICON } from '@/assets/images/imageURL';
import Button from '@/components/Button';
import History from './components/History';
import File from './components/File';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className={styles.sidebar}>
        <Link to="/">
          <img className={styles.logo} src={LOGO.FAVICON_PRIMARY} alt="logo" />
        </Link>
        <Button
          color="primary"
          size="full"
          onClick={() => console.log('click')}
          iconSrc={ICON.CHAT}
        >
          새로운 채팅
        </Button>
        <div className={styles.data_wrapper}>
          <History />
          <File />
        </div>
        <Button color="secondary" size="full">
          개인정보 관리
        </Button>
      </div>
      <div className="outlet-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
