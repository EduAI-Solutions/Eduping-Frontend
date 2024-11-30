import { useRef } from 'react';
import styles from './InputChat.module.scss';
import { FileIcon, SendIcon } from '@/components/Icon';
import CircularProgress from '@mui/material/CircularProgress';

interface InputChatProps {
  status?: 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'generate';
  inputValue: {
    text: string;
    file: File | null;
  };
  setInputValue: (value: { text?: string; file?: File | null }) => void;
  onClick?: () => void;
}

const InputChat = ({
  status,
  inputValue,
  setInputValue,
  onClick,
}: InputChatProps) => {
  const isInputInvalid =
    status === 'disabled' || status === 'generate' || inputValue.text === '';
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`${styles.container} ${
        status === 'generate' ? styles.generate : ''
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files ? e.target.files[0] : null;
          setInputValue({ ...inputValue, file });
        }}
      />

      <div className={styles.icon}>
        {status === 'generate' ? (
          <CircularProgress size={20} thickness={6} sx={{ color: '#4CDA41' }} />
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click();
              }
            }}
          >
            <FileIcon color={status === 'disabled' ? '#C4C4C4' : '#919191'} />
          </button>
        )}
      </div>

      <input
        className={styles.input}
        placeholder={
          status === 'disabled'
            ? '지금은 명령어를 입력할 수 없습니다'
            : '명령어를 입력하세요!  예) 홍길동 학생의 1학년 장래희망은 뭐였지?'
        }
        value={
          status === 'generate' ? '응답을 생성중입니다...' : inputValue.text
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue &&
          setInputValue({ ...inputValue, text: e.target.value })
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === 'Enter' && !isInputInvalid && onClick && onClick()
        }
        disabled={status === 'disabled'}
      />

      <button
        className={styles.button}
        onClick={onClick}
        disabled={isInputInvalid}
      >
        <SendIcon status={status} />
      </button>
    </div>
  );
};

export default InputChat;
