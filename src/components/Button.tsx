import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  color: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large' | 'full';
  iconSrc?: string;
  state?: 'active' | 'disabled' | 'pressed' | 'hover';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  color,
  size,
  iconSrc = '',
  state = 'active',
  onClick,
  children,
}: ButtonProps) => {
  const buttonClass = classNames(
    styles.button,
    styles[color],
    styles[size],
    styles[state],
    { [styles.icon]: iconSrc },
  );
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {iconSrc && <img className={styles.icon} src={iconSrc} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
