import styles from '../styles/hero.module.css';
import {Text, Button, Grid } from "@nextui-org/react";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroText}>
                Your Solution 
                    <span className={styles.heroSpanText}>
                        Carave
                    </span>
                Is Here
            </h1>
            <div className={styles.heroBtnWrap}>
                <Button 
                    shadow color="warning" >
                    Know More 
                </Button>
            </div>
        </div>
    );
};

export default Hero;