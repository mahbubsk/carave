import { Row, Container } from "@nextui-org/react";
import {RiCopyrightFill} from "react-icons/ri";

const Footer = () => {
    return (
        <Row 
            css={{
                shadow:"$xl",
                padding:"$10",
                textAlign:"center"
            }}
        >
            <Container 
                css={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}
            >
                <RiCopyrightFill
                    style={{
                        fontSize:"1.5rem",
                        marginRight:"1rem"
                    }}
                />
                Carave all right reserved 2022
            </Container>
        </Row>
    );
};

export default Footer;