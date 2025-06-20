import styles from './Heading.module.css';

export default function Heading({children}) {
  return <div className={styles.parent}>
    {children}
  </div>;
}