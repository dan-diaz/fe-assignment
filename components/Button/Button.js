import cn from 'classnames';
import styles from './Button.module.scss'

const Button = ({ alternate, blue, className, disabled, href, onClick, text }) => {
  if (href) {
    return (
      <a
        className={cn(styles.button, className, {
          [styles.buttonAlternate]: alternate,
          [styles.buttonBlue]: blue
        })}
        disabled={disabled}
        href={href}
      >{text}</a>
    );
  }
  
  return (
    <button
      className={cn(styles.button, className, {
        [styles.buttonAlternate]: alternate,
        [styles.buttonBlue]: blue
      })}
      disabled={disabled}
      onClick={onClick || null}
      type='button'
    >{text}</button>
  );
};

export default Button;