/* eslint-disable @next/next/link-passhref */
import styles from '/styles/common/Header.module.css';
import Icon from '/public/icon.png';
import Beer from '/public/beer.png';
import Image from 'next/image';
import {backHome} from 'utils/CommonUtils';
import BeerIcon from '/public/beer.png';
import ChuhighIcon from '/public/chuhigh.png';
import SakeIcon from '/public/sake.png';
import WineIcon from '/public/wine.png';
import {Constant} from 'components/Constant';
import Link from 'next/link';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {

    let drinkColor = Constant.COLOR_BLACK;
    let snackColor = Constant.COLOR_BLACK;

    if (props.title == "Snack") {
        snackColor = Constant.COLOR_BLUE;
    } else {
        drinkColor = Constant.COLOR_BLUE;
    }

    let beerColor = Constant.COLOR_WHITE;
    let chuhighColor = Constant.COLOR_WHITE;
    let sakeColor = Constant.COLOR_WHITE;
    let wineColor = Constant.COLOR_WHITE;

    switch (props.title) {
        case "Beer":
            beerColor = Constant.COLOR_YELLOW;
            break;
        case "Chuhigh":
            chuhighColor = Constant.COLOR_YELLOW;
            break;
        case "Sake":
            sakeColor = Constant.COLOR_YELLOW;
            break;
        case "Wine":
            wineColor = Constant.COLOR_YELLOW;
            break;
        default:
    }

    return (
        <header className={styles.header}>
            <Image src={Beer} className={styles.icon} onClick={backHome} alt="アイコン" width={40} height={40} />
            <Image src={Icon} className={styles.icon} onClick={backHome} alt="アイコン" />
            <nav className={styles.nav}>
                <ul className={styles.bgCategoryUl}>
                    <div className={styles.hoverBlock}>
                        <li className={styles.bgCategoryLi}><a className={styles.aTag + Constant.CSS_JOIN + drinkColor}>DRINK</a>

                            <ul className={styles.smCategoryUl}>
                                <Link href="/drink/beer/beerList">
                                    <li className={styles.smCategoryLi + Constant.CSS_JOIN + beerColor}>
                                        <a>
                                            <Image src={BeerIcon} alt="Beer" width={20} height={20} />
                                            ビール
                                        </a>
                                    </li>
                                </Link>
                                <li className={styles.smCategoryLi + Constant.CSS_JOIN + chuhighColor}>
                                    <a>
                                        <Image src={ChuhighIcon} alt="Chuhigh" width={20} height={20} />
                                        チューハイ
                                    </a>
                                </li>
                                <li className={styles.smCategoryLi + Constant.CSS_JOIN + sakeColor}>
                                    <a>
                                        <Image src={SakeIcon} alt="Sake" width={20} height={20} />
                                        日本酒
                                    </a>
                                </li>
                                <li className={styles.smCategoryLi + Constant.CSS_JOIN + wineColor}>
                                    <a>
                                        <Image src={WineIcon} alt="Wine" width={20} height={20} />
                                        ワイン
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </div>

                    <li className={styles.categoryLi}><a className={styles.aTag + " " + snackColor}>SNACK</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
