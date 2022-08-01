import {Col, Row, Spacer, Text} from "@nextui-org/react";
import { GiRoundStar } from "react-icons/gi";

const SuccessText = ({Txt}) => {
    return (
        <div>
            <Row>
                <Col
                    css={{
                        display:"flex", 
                        alignItems:"center",
                    }}
                    
                >
                    <GiRoundStar
                        style={{
                            margin:"1rem",
                            fontSize:"2rem",
                            color: "#14a800"
                    }}
                    />
                    <Text
                        css={{fontSize:"1.5rem"}}
                    >
                        {Txt}
                    </Text>
                </Col>
            </Row>
        </div>
    );
};

export default SuccessText;