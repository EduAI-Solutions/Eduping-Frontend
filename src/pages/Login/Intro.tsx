import { LOGO } from '@/assets/images/imageURL';
import styles from './Intro.module.scss';
import Diamond from '@/pages/Login/Diamond';

const Intro = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        든든한 당신만의 <br />
        생활기록부 작성 헬퍼, AI 요모조모!
      </p>
      <img className={styles.favicon} src={LOGO.FAVICON_SECONDARY} />
      <img className={styles.logo} src={LOGO.INTRO} />
      <Diamond
        className={`${styles.diamond} ${styles.diamond1}`}
        width={3}
        height={4}
      />
      <Diamond
        className={`${styles.diamond} ${styles.diamond2}`}
        width={5}
        height={6}
      />
      <Diamond
        className={`${styles.diamond} ${styles.diamond3}`}
        width={4}
        height={5}
      />
    </div>
  );
};

export default Intro;
