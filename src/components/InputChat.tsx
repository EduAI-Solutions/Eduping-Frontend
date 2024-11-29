import styles from './InputChat.module.scss';

interface InputChatProps {
  case?: 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'generate';
  inputValue: string;
  setInputValue: (value: string) => void;
  onClick?: () => void;
}

const InputChat = () => {
  return <div className={styles.container}>ㅁㄴㅇㄹ</div>;
};

export default InputChat;
