import { Card, Col, Row, Button, Text } from "@nextui-org/react";
// import myImage from "../assets/DSC_0010_2.jpg";

const ServiceCard = ({name,src,designation,mail}) => {
    return (
        <div>
             <Card isHoverable={true} css={{ w: "100%", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} background="red" weight="bold" transform="uppercase" color="#424242">
                        {designation}
                    </Text>
                    <Text h3 color="#424242">
                        {name}
                    </Text>
                </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={src}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                    
                />
                </Card.Body>
                <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
                >
                <Row>
                    <Col>
                    <Text color="#000" size={12}>
                        Available on Mail.
                    </Text>
                    <Text color="#000" size={12}>
                        {mail}
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            About
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ServiceCard;