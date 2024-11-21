import Intro from '@/pages/Login/Intro';
import { useEffect, useState } from 'react';
import Auth from '@/pages/Login/Auth';

import styles from './page.module.scss';

const Login = () => {
  const [currentComponent, setCurrentComponent] = useState<'intro' | 'auth'>(
    'intro',
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentComponent('auth');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.before} ${
          currentComponent === 'intro' ? styles.visible : styles.hidden
        }`}
      >
        <Intro />
      </div>
      <div
        className={`${styles.after} ${
          currentComponent === 'auth' ? styles.visible : styles.hidden
        }`}
      >
        <Auth />
      </div>
    </div>
  );
};

export default Login;
