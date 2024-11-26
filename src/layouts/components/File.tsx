import styles from '../MainLayout.module.scss';
import { ICON, UPLOAD_STATUS } from '@/assets/images/imageURL';

const File = () => {
  const data: any[] = [
    { a: 'b' },
    { c: 'd' },
    { e: 'f' },
    { g: 'h' },
    { i: 'j' },
    { k: 'l' },
    { m: 'n' },
    { o: 'p' },
    { q: 'r' },
    { s: 't' },
    { u: 'v' },
    { w: 'x' },
    { y: 'z' },
  ];
  return (
    <div className={styles.data_container}>
      <h1 className={styles.title}>File</h1>
      <p className={styles.description}>
        학습할 생활기록부 파일을 업로드해 주세요.
      </p>
      <div className={styles.data_wrapper}>
        {data.length === 0 ? (
          <div className={styles.file_empty_container}>
            <img src={ICON.UPLOAD} alt="file" />
            파일을 드래그하여 추가하세요.
          </div>
        ) : (
          data.map((record) => <LifeRecord key={record.id} />)
        )}
      </div>
    </div>
  );
};

const LifeRecord = () => {
  const uploadStatus: 'ERROR' | 'SUCCESS' | 'LOADING' = 'ERROR';
  return (
    <div className={styles.life_record_container}>
      <img
        src={UPLOAD_STATUS[uploadStatus]}
        alt={uploadStatus}
        className={styles.status_icon}
      />
      <p className={styles.data_title}>생활기록부_2024_조진우_학생.pdf</p>
      <button className={styles.data_delete}>
        <img className={styles.delete_icon} src={ICON.XCIRCLE} alt="delete" />
      </button>
    </div>
  );
};

export default File;
