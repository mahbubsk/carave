import {Grid, Card, Text, Button, Row} from "@nextui-org/react";
import {BsCheckCircleFill} from "react-icons/bs";

const PricingTable = ({cardTitle, isStandard}) => {
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