import {useState} from 'react';
import styles from '../styles/nav.module.css';
import {Container, Row, Switch, Tooltip} from '@nextui-org/react';
import Link from "next/link"
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs';

const Nav = () => {
    const [isDark, setIsDark] = useState(false);
    
    const handleDarkMood = () => {
        if(isDark===false){
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }
    return (
        <nav className={styles.nav}>
            <Container>
                
                <div className={styles.ul}>
                <Link href="#" >
                    <span className={styles.logo}>Carave</span>
                </Link>
                <ul className={styles.ul}>
                    <li className={styles.navItem}>
                        <Tooltip
                            color="primary"
                            content="Github"
                            placement="bottom"
                        >
                            <BsGithub/>
                        </Tooltip>
                    </li>
                    <li className={styles.navItem}>
                        <Tooltip
                            color="primary"
                            content="Facebook"
                            placement="bottom"
                        >
                            <BsFacebook/>
                        </Tooltip>
                    </li>
                    <li className={[styles.navItem, styles.navItemContact].join(" ")}>
                        <Tooltip
                            color="primary"
                            content="Contact"
                            placement="bottom"
                        >
                            <IoMdContact/>
                        </Tooltip>
                    </li>
                    <li className={[styles.navItem, styles.navItemLinkdin].join(" ")}>
                        <Tooltip
                            color="primary"
                            content="Linkdin"
                            placement="bottom"
                        >
                            
                                <AiFillLinkedin/>
                        </Tooltip>
                    </li>
                    <li
                        className={[styles.navItem, styles.navItemLinkdin].join(" ")}>
                        <Tooltip
                            color="primary"
                            content={isDark ? "Dark" : "Normal"}
                            placement="bottom"
                        >
                            <Switch
                                iconOn={<FaMoon/>}
                                iconOff={<BsFillSunFill/>}
                                onChange={handleDarkMood}
                               
                            />
                        </Tooltip>
                    </li>
                </ul>
                    
                </div>
            </Container>
        </nav>
    );
};

export default Nav;