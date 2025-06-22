import styles from './WorkItem.module.css';

export default function WorkItem({date, border=true, title, children}) {
  return <div className={`${styles.parent} ${!border && styles.bordernone }`}>
    <p className={styles.date}>{date}</p>
    <div className={styles.container}>
      <h1 className={styles.title}><span>{title}</span>
        <svg className={styles.linksvg}
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <g clip-path="url(#clip0_28_113)">
                <path
                  d="M13.6682 5.4886C13.6682 5.01215 13.2813 4.62528 12.8049 4.62528L6.70642 4.62528C6.22997 4.62528 5.8431 5.01215 5.8431 5.4886C5.8431 5.96504 6.22997 6.35191 6.70642 6.35191L10.7257 6.35001L4.87878 12.1969C4.54146 12.5342 4.54146 13.0793 4.87878 13.4166C5.2161 13.7539 5.76115 13.7539 6.09848 13.4166L11.9435 7.57161L11.9454 11.5871C11.9454 12.0635 12.3323 12.4504 12.8087 12.4504C13.2852 12.4504 13.672 12.0635 13.672 11.5871L13.672 5.4886H13.6682Z"
                  fill="#efdcc3"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_113">
                  <rect
                    width="12.0744"
                    height="13.7993"
                    fill="white"
                    transform="translate(0 8.53784) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
            </h1>
      <p className={styles.desc}>{children}</p>
    </div>
  </div>
}