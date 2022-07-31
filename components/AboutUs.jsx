import AboutUsCard from "./AboutUsCard";
import { Grid, Text } from "@nextui-org/react";

const Service = () => {
    return (
        <div>
             <Text
                h1
                size={60}
                css={{
                    textGradient: "135deg, #fdd819 10%, #e80505 100%",
                }}
                style={{textAlign:"center"}}
                >
                About US
            </Text>
            <Grid.Container gap={4} justify="center">
                <Grid xs={12} sm={3}>
                    <AboutUsCard mail="imranhasan871@gmail.com" designation="Founder" src="/imran.jpg" name="Imran Hasan"/>
                </Grid>
                <Grid xs={12} sm={3}>
                    <AboutUsCard mail="skmahbubkr787@gmail.com" designation="Co-Founder" src="/mahbub.jpg" name="Khandakar Mahbub"/>
                    
                </Grid>
                
            </Grid.Container>
        </div>
    );
};

export default Service;