import { useState, useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import { Container, Switch, Loading, Spacer, Text } from "@nextui-org/react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Review from "../components/Review";
import Success from "../components/Success";
import CompanyLogos from "../components/CompanyLogos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


import MessengerCustomerChat from 'react-messenger-customer-chat';



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    // const loadingMessage = ;
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [isLoading])


    return (


        <div>


            <Head>
                <title>Carave</title>
                <meta name="description" content="Carave Software Solution" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                isLoading ?
                    <Text css={{ display: "flex", ai: "center", jc: "center", width: "100%", height: "100vh" }} >
                        <Loading type="spinner" size="xl" />
                    </Text>
                    :
                    <main>
                        <Nav />
                        <Container>
                            <Spacer y={1} />
                            <Hero />
                            <Spacer y={3} />
                            <hr />
                            <Spacer y={3} />
                            <AboutUs />
                            <Spacer y={3} />
                            <Pricing />
                            <Spacer y={3} />
                            <hr />
                            <Review />
                            <Spacer y={3} />
                            <hr />
                            <Success />
                            <Spacer y={3} />
                            <hr />
                            <Contact />
                            <Spacer y={3} />
                            <CompanyLogos />
                            <Spacer y={3} />
                        </Container>
                        <MessengerCustomerChat
                            pageId="315825732576242"
                            appId="906769103521842"
                        />

                        <Footer />
                    </main>
            }
        </div>
    )
}
