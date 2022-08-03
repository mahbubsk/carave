import { Text, Image, Row, Col, Spacer } from "@nextui-org/react";
import {ImLocation} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import {BsTelephoneFill} from "react-icons/bs";

const Contact = () => {
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
                Contact
            </Text>
            
            <Row>
                <Col>
                    <Image
                        
                        width="470px"
                        src="/contact.svg"
                        alt="Contact Image"
                        title="Contact Image"
                        objectFit="cover"
                    />
                </Col>
                <Col
                    
                >
                    <Spacer y={3}/>
                    <Spacer/>
                    <Row
                        css={{
                            display:"flex",
                            alignItems:"center",
                            color:"#424242"
                        }}
                    >
                        <ImLocation
                            style={{
                                fontSize:"1.5rem",
                                color:"#005fcc"
                            }}
                        />
                        <Text
                            css={{
                                marginLeft:"0.8rem",
                                fontSize:"1.2rem"
                            }}
                        >
                            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                        </Text>
                    </Row>
                    <Spacer/>
                    <Row 
                        css={{
                            display:"flex",
                            alignItems:"center",
                            color:"#424242"
                        }}
                    >
                        <BsTelephoneFill
                            style={{
                                fontSize:"1.5rem",
                                color:"#005fcc"
                            }}
                        />
                        <Text
                            css={{
                                marginLeft:"0.5rem",
                                fontSize:"1.2rem"
                            }}
                        >
                            +880 00000 000000,
                            +880 00000 000000
                        </Text>
                        
                    </Row>
                    <Spacer/>
                    <Row 
                        css={{
                            display:"flex",
                            alignItems:"center",
                            color:"#424242"
                        }}
                    >
                        <SiGmail
                            style={{
                                fontSize:"1.5rem",
                                color:"#005fcc"
                            }}
                        />
                        <Text
                            css={{
                                marginLeft:"1rem",
                                fontSize:"1.2rem"
                            }}
                        >
                            carave-soft@gmail.com
                            
                        </Text>
                        
                    </Row>
                </Col>
                
            </Row>
            
        </div>
    );
};

export default Contact;