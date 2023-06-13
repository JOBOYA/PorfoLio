
'use client'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from 'next/image';

//TODO add responsive card 

export const Project = () => (
    <>
        <div>
            <h1 id="projects" className="relative left-20 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4">
                <span className="text-pink-500">#</span>projects
                <span style={{ position: 'absolute', left: '200px', bottom: '20px', height: '1px', width: '33.33%', backgroundColor: '#D946EF' }}></span>
            </h1>
        </div>

        



        <Row justify="center" css={{ margin: "20px" }}>
        <div className="relative top-0 left-0 " >
            <Image src="/assets/dot.png" alt="dot" width={80} height={80} />
        </div>

            <Card css={{ width: "30%", margin: "0 10px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            What to watch
                        </Text>
                        <Text h4 color="white">
                            Stream the Acme event
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Image
                    src="https://nextui.org/images/card-example-4.jpeg"
                    objectFit="cover"
                    width="100%"
                    height={340}
                    alt="Card image background"
                />
            </Card>

            <Card css={{ width: "30%", margin: "0 10px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            Plant a tree
                        </Text>
                        <Text h4 color="white">
                            Contribute to the planet
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Image
                    src="https://nextui.org/images/card-example-3.jpeg"
                    width="100%"
                    height={340}
                    objectFit="cover"
                    alt="Card image background"
                />
            </Card>

            <Card css={{ width: "30%", margin: "0 10px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            Supercharged
                        </Text>
                        <Text h4 color="white">
                            Creates beauty like a beast
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Image
                    src="https://nextui.org/images/card-example-2.jpeg"
                    width="100%"
                    height={340}
                    objectFit="cover"
                    alt="Card image background"
                />
            </Card>
        </Row>

        <Row justify="center" gap={2} css={{ margin: "20px 20px 40px", marginLeft: "auto", marginRight: "auto" }}>

            <Card css={{ width: "40%", height: "300px", margin: "0 10px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            New
                        </Text>
                        <Text h3 color="black">
                            Acme camera
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src="https://nextui.org/images/card-example-6.jpeg"
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
                    <Row justify="center" gap={2} css={{ margin: "20px 20px 40px", marginLeft: "auto", marginRight: "auto" }}>

                        <Col>
                            <Text color="#000" size={12}>
                                Available soon.
                            </Text>
                            <Text color="#000" size={12}>
                                Get notified.
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
                                        Notify Me
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

            <Card css={{ width: "40%", height: "400px", margin: "0 10px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            Your day your way
                        </Text>
                        <Text h3 color="white">
                            Your checklist for better sleep
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src="https://nextui.org/images/card-example-5.jpeg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >


                    <Col>
                        <Row justify="center" css={{ margin: "20px 20px 40px" }}>

                            <Col span={3}>
                                <Card.Image
                                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                                    css={{ bg: "black", br: "50%" }}
                                    height={40}
                                    width={40}
                                    alt="Breathing app icon"
                                />
                            </Col>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                    Breathing App
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Get a good sleep.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="center" gap={2} css={{ margin: "20px 20px 40px", marginLeft: "auto", marginRight: "auto" }}>

                            <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Get App
                                </Text>
                            </Button>
                        </Row>
                    </Col>

                </Card.Footer>
            </Card>
            <div className="relative top-0 left-0 " >
            <Image src="/assets/dot.png" alt="dot" width={80} height={80} />
        </div>
        </Row>
        <div className="absolute right-0 border border-purple-500 half-border rounded p-12 ">

        </div>
    </>
);

export default Project;