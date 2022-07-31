import AboutUsCard from "./AboutUsCard";
import { Grid, Spacer, Text } from "@nextui-org/react";

const Service = () => {
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
                About US
            </Text>
            <Spacer y={1}/>

            <Text 
                css={{
                    width:"60%",
                    margin:"auto",
                    color:"#424242"
                }}
                h4>
                Carave Software Solutions is a software development company that serves across the world. We use technology for solving your business problems. EPR, WordPress, POS, E-commerce, Development, Deployment,  and Management of any kind of Problem.
            </Text>
            <Spacer y={1}/>
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