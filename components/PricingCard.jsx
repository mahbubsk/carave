import {Grid, Card, Text, Button, Row} from "@nextui-org/react";
import {BsCheckCircleFill} from "react-icons/bs";

const PricingTable = ({cardTitle, isStandard, monthlyPrice}) => {
    return (
        <div>
            <Card isHoverable variant={isStandard && "bordered"}  isPressable css={{ width:"330px" }}>
                <Card.Header
                    css={{background: isStandard && "#e80505"}}
                >
                    <Text b css={{
                            margin:"auto",
                            fontSize: isStandard && "1.5rem",
                            color: isStandard && "#fff",
                        }}>
                        {cardTitle}
                    </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Row 
                        css={{
                            margin:"auto",
                            boxShadow: "5px 5px 35px #ddd",
                            width:"7rem",
                            height:"7rem",
                            borderRadius:"50%",
                            position:"relative"
                        }}
                    >
                        <Text
                            css={{
                                position:"absolute",
                                top:"50%",
                                left:"50%",
                                transform:"translate(-50%,-50%)",
                                fontSize:"2rem"
                            }}
                        >
                            {monthlyPrice}
                        </Text>
                    </Row>
                    <ul>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                        <Row
                            align="center"
                        >
                            <BsCheckCircleFill style={{color:"#005fcc"}}/>
                            <Text 
                                css={{marginLeft:"1rem"}}
                            >
                                Feature One
                            </Text>
                        </Row>
                </ul>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                <Row justify="center">
                    <Button size="sm">Agree</Button>
                </Row>
            </Card.Footer>
        </Card>
        </div>
    );
};

export default PricingTable;