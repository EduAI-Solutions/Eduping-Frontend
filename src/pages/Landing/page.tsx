import InputChat from '@/components/InputChat';
import styles from './page.module.scss';
import { useState } from 'react';
import Button from '@/components/Button';

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
      <div className={styles.subcontainer}>
        <h1 className={styles.title}>
          안녕하세요, <br /> '{'조진우'}' 선생님! 어떤 업무 보조가 필요하신가요?
        </h1>
        <p className={styles.subtitle}>
          아래 업무 보조 유형 중 원하는 유형을 선택하거나, 직접 프롬프트를
          입력해보세요.
        </p>
        <div className={styles.button_container}>
          <Button color="secondary" size="full">
            생기부 요약
          </Button>

          <Button color="secondary" size="full">
            생기부 요약
          </Button>

          <Button color="secondary" size="full">
            생기부 요약
          </Button>

          <Button color="secondary" size="full">
            생기부 요약
          </Button>
        </div>
      </div>
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
