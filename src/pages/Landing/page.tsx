import InputChat from '@/components/InputChat';
import styles from './page.module.scss';

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Chat App</h1>
      <InputChat />
    </div>
  );
};

export default Landing;
