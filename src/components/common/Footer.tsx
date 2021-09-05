import styles from '/styles/common/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>(c) shumiyat</div>
        </footer>
    )
}

export default Footer;
