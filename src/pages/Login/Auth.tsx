import { useState } from 'react';
import styles from './Auth.module.scss';
import { LOGO } from '@/assets/images/imageURL';
import { TextField } from '@mui/material';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

interface Credentials {
  code: string;
  password: string;
}
const Auth = () => {
  const [form, setForm] = useState<Credentials>({
    code: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <img src={LOGO.FAVICON} alt="logo" className={styles.logo} />
      <p className={styles.description}>
        안녕하세요! <span className="font-bold">‘요모조모’</span>입니다.
        <br />
        <span className="font-bold">로그인을 진행해 주세요!</span>
      </p>
      <div className={styles.auth_container}>
        <TextField
          name="code"
          label="CODE"
          variant="outlined"
          fullWidth
          value={form.code}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="PASSWORD"
          variant="outlined"
          fullWidth
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div className={styles.auth_container}>
        <Button
          color="primary"
          size="full"
          onClick={() => {
            navigate('/');
          }}
        >
          로그인
        </Button>
        <Button color="secondary" size="full">
          권한 요청
        </Button>
      </div>
    </div>
  );
};

export default Auth;
