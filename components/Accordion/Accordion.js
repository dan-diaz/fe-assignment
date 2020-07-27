import { useState } from 'react';
import cn from 'classnames';
import styles from './Accordion.module.scss';
import { useSelector } from 'react-redux';

const Accordion = ({ children, label }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className={cn(styles.accordion, {
      [styles.accordion__isExpanded]: isExpanded
      })}>
      <p className={cn(styles.header, {
        [styles.header__isExpanded]: isExpanded,
        [styles.header__isCollapsed]: !isExpanded
        })} onClick={toggleIsExpanded}>{label}</p>
      <div className={cn(styles.content, {
        [styles.content__isExpanded]: isExpanded,
        [styles.content__isCollapsed]: !isExpanded
        })}>{children}</div>
    </div>
  )
};

export default Accordion;
