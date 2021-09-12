import styles from '/styles/common/Header.module.css';
import Icon from '/public/icon.png';
import Beer from '/public/beer.png';
import Image from 'next/image';
import {backHome} from 'utils/CommonUtils';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Image src={Beer} className={styles.icon} onClick={backHome} alt="アイコン" width={40} height={40} />
            <Image src={Icon} className={styles.icon} onClick={backHome} alt="アイコン" />
            <nav className={styles.nav}>
                <ul className={styles.bgCategoryUl}>
                    <div className={styles.hoverBlock}>
                        <li className={styles.bgCategoryLi}><a className={styles.aTag}>DRINK</a>

                            <ul className={styles.smCategoryUl}>
                                <li className={styles.smCategoryLi}><a>ビール</a></li>
                                <li className={styles.smCategoryLi}><a>チューハイ</a></li>
                                <li className={styles.smCategoryLi}><a>日本酒</a></li>
                                <li className={styles.smCategoryLi}><a>ワイン</a></li>
                            </ul>
                        </li>
                    </div>

                    <li className={styles.categoryLi}><a className={styles.aTag}>SNACK</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
