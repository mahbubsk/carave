
import styles from '../styles/nav.module.css';
import {Container, Row, Switch, Tooltip, Text, useTheme} from '@nextui-org/react';
import Link from "next/link"
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import {BsFillSunFill} from 'react-icons/bs';

const Nav = ({handleChange, type}) => {
    const { theme } = useTheme();
    // console.log(type)
    // console.log(theme);
    return (
        <Text 
            css={{
                backgroundColor: "hsla(0,0%,100%,0.8)",
                shadow:"0px 5px 20px -5px rgb(2 1 1 / 10%)",
                position:"fixed",
                top:"0",
                width:"100%",
                zIndex:"111111",
                backdropFilter:"saturate(180%) blur(10px)"
            }} 
        >
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
                            placement="bottom"
                        >
                            <Switch
                                iconOn={<FaMoon/>}
                                iconOff={<BsFillSunFill/>}
                                onChange={handleChange}
                                shadow
                            />
                        </Tooltip>
                    </li>
                </ul>
                    
                </div>
            </Container>
        </Text>
    );
};

export default Nav;