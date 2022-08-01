import {Text, Grid, Card, Row, Col, Spacer} from "@nextui-org/react";
import {GiRoundStar} from "react-icons/gi";
import SuccessText from "./SuccessText";
const Success = () => {
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
                Success
            </Text>
            <Grid.Container gap={4} justify="center">
                <Grid xs={12} sm={6} md={6}>
                    <Col>
                        <Row>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem dolorum commodi facere corporis sint cum! Quis recusandae ea nihil! Magni eligendi harum doloribus architecto, magnam explicabo corporis id vel?
                        </Row>
                        <Spacer/>
                        <SuccessText Txt="We optimized websites with a 100% success rate."/>
                        <SuccessText Txt="Image optimized successfully"/>
                        
                    </Col>
                    
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                   
                </Grid>
            </Grid.Container>
        </div>
    );
};

export default Success;