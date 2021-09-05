import styles from '/styles/common/Header.module.css';
import Icon from '/public/icon.png';
import Beer from '/public/beer.png';
import Image from 'next/image';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <Image src={Beer}  alt="アイコン" width={40} height={40} />
            <Image src={Icon}  alt="アイコン" />
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;
