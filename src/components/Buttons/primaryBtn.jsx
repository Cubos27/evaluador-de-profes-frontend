import styles from './primaryBtn.module.css';

export default function PrimaryBtn({ children, onClick }) {
    return (
        <button className={styles.primaryBtn} onClick={onClick}>
            {children}
        </button>
    );
}