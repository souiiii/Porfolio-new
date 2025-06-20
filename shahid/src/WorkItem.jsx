import styles from './WorkItem.module.css';

export default function WorkItem({date, border=true, title, children}) {
  return <div className={`${styles.parent} ${!border && styles.bordernone }`}>
    <p className={styles.date}>{date}</p>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{children}</p>
    </div>
  </div>
}