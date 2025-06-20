import styles from './SkillItem.module.css';

export default function SkillItem({title, border=true, svg, children}) {
  return  <div className={`${styles.parent} ${!border && styles.bordernone }`}>
        <span className={styles.svg}>{svg}</span>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{children}</p>
      </div>
    </div>
}