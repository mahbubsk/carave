import {useState} from "react";
import {Text, Spacer, Switch} from "@nextui-org/react";
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
                    fontFamily: "walter"
                }}
                style={{textAlign:"center"}}
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

                <Text
                    css={{margin:"1rem"}}
                >
                    Monthly
                </Text>
                <Switch
                    size="xl"
                    onChange={handleChange}  
                />
                <Text
                    css={{margin:"1rem"}}
                >
                    Yearly
                </Text>
            </div>
        </div>
    );
};

export default Pricing;