import InputChat from '@/components/InputChat';
import styles from './page.module.scss';
import { useState } from 'react';

interface InputValueType {
  text: string; // 텍스트 입력 값
  file: File | null; // 파일 입력 값
}

const Landing = () => {
  const [inputValue, setInputValue] = useState<InputValueType>({
    text: '',
    file: null,
  });

  const handleSetInputValue = (value: {
    text?: string;
    file?: File | null;
  }) => {
    setInputValue((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitted value:', inputValue);
    setInputValue({ text: '', file: null });
  };
  return (
    <div className={styles.container}>
      <h1>Welcome to Chat App</h1>
      <InputChat
        status="default"
        inputValue={inputValue}
        setInputValue={handleSetInputValue}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Landing;
