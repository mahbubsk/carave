import {useState} from "react";
import {Text, Spacer, Switch, Grid, Card, Row, Button} from "@nextui-org/react";
import PricingCard from "./PricingCard";
import {BsCheckCircleFill} from "react-icons/bs";

const Pricing = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        isChecked = !isChecked;
        setIsChecked(isChecked);
        console.log(isChecked);
    }
    return (
        <div>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "135deg, #fdd819 10%, #e80505 100%",
                    fontFamily: "walter",
                    textAlign:"center"
                }}
                >
                Pricing
            </Text>
            <Spacer y={1}/>

            <Text 
                css={{
                    textAlign:"center",
                    color:"#424242"
                }}
                h4>
                Our pricing is helping you to understand how we manage our deals. 
            </Text>
            <Spacer/>
            <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                        
                    }}>

            {
                isChecked ?
                <Text
                    css={{
                        margin:"1rem",
                        
                    }}
                >
                    Monthly
                </Text>
            :
                <Text
                    css={{
                        margin:"1rem",
                        textGradient: "135deg, #fdd819 10%, #e80505 100%",
                        fontWeight:"bold",
                        transition:"all 0.4s"
                }}
                >
                    Monthly
                </Text>
            }
            <Switch
                size="xl"
                onChange={handleChange}  
            />
            {
                isChecked ?
                <Text
                css={{
                    margin:"1rem",
                    textGradient: "135deg, #fdd819 10%, #e80505 100%",
                    fontWeight:"bold",
                    transition:"all 0.4s"
            }}
                    
                >
                    Yearly
                </Text>
            :
                <Text
                    css={{
                        margin:"1rem",
                        
                    }}
                >
                    Yearly
                </Text>
            }
            </div>

            <Spacer/>
            <Grid.Container gap={4} justify="center">
                <Grid xs={12} sm={6} md={4}>
                    <PricingCard cardTitle="Basic"/>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <PricingCard cardTitle="Standard" isStandard={true}/>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <PricingCard cardTitle="Premium"/>   
                </Grid>
            </Grid.Container>
        </div>
    );
};

export default Pricing;