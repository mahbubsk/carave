import styles from '../styles/hero.module.css';
import {Text, Button, Grid, Row } from "@nextui-org/react";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Text
                textAlign="center"
                margin="auto"
                weight="bold"
                size={100}
                css={{
                    width:"60%",
                    color:"#424242"
                }}
            >
                Your Solution 
                    <span className={styles.heroSpanText}>
                        Carave
                    </span>
                Is Here
            </Text>
            <Text 
                css={{
                    d:"flex",
                    ai:"center",
                    jc:"center"
                }}
            >
                <Button 
                    shadow color="warning" >
                    Know More 
                </Button>
            </Text>
        </div>
    );
};

export default Hero;