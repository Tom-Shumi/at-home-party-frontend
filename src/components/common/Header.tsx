import styles from '/styles/common/Header.module.css';
import Icon from '/public/icon.png';
import Beer from '/public/beer.png';
import Image from 'next/image';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <Image src={Beer} alt="アイコン" width={40} height={40} />
            <Image src={Icon} alt="アイコン" />
            <nav className={styles.nav}>
                <ul className={styles.bgCategoryUl}>
                    <li className={styles.bgCategoryLi}><a className={styles.aTag}>DRINK</a></li>

                    <ul className={styles.smCategoryUl}>
                        <li className={styles.smCategoryLi}><a>ビール</a></li>
                        <li className={styles.smCategoryLi}><a>チューハイ</a></li>
                        <li className={styles.smCategoryLi}><a>日本酒</a></li>
                        <li className={styles.smCategoryLi}><a>ワイン</a></li>
                    </ul>

                    <li className={styles.categoryLi}><a className={styles.aTag}>SNACK</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
