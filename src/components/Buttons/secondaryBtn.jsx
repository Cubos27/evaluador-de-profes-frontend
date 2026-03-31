import styles from './secondaryBtn.module.css';

export default function SecondaryBtn({ children, onClick }) {
    return (
        <button className={styles.secondaryBtn} onClick={onClick}>
            {children}
        </button>
    );
}