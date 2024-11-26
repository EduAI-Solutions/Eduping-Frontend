import styles from '../MainLayout.module.scss';
import { ICON } from '@/assets/images/imageURL';
import { Link } from 'react-router-dom';

interface HistoryRoomProps {}

const History = () => {
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
      <h1 className={styles.title}>History</h1>
      <div className={styles.data_wrapper}>
        {data.length === 0 ? (
          <p className={styles.description}>채팅 기록이 없습니다.</p>
        ) : (
          data.map((chat) => <HistoryRoom key={chat.id} chat={chat} />)
        )}
      </div>
    </div>
  );
};

const HistoryRoom = (chat: any) => {
  return (
    <Link to={`/c/123`} className={styles.history_room_container}>
      <div className={styles.history_room_textbox}>
        <h2 className={styles.data_title}>
          조진우 학생이 어떤 과목에 강하고 어떤 과목에 약한지 정리해서 나에게
          알려줘
        </h2>
        <p className={styles.history_room_date}>2024.05.01</p>
      </div>
      <button className={styles.data_delete}>
        <img className={styles.delete_icon} src={ICON.TRASH} alt="delete" />
      </button>
    </Link>
  );
};

export default History;
