import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

// carousel
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'

// navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// container
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Home() {
    return ( 

        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* navbar strat */}
            <Navbar className={styles.navbars} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className={styles.brand} href="#home">CarBike360</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.link} href="#features">Features</Nav.Link>
                        <Nav.Link className={styles.link} href="#pricing">Pricing</Nav.Link>
                        <NavDropdown className={styles.link} title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className={styles.link} href="#deets">Cars</Nav.Link>
                        <Nav.Link className={styles.link} eventKey={2} href="#memes">
                            Bikes
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navbar strat end*/}


            {/* main start */}
            <main className={styles.details}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.dbox}>
                            <Image className={styles.imaged} src="/2.jpg" layout='responsive'  alt="Pic1" width="100%" height="60" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.dbox2}>
                            <h2>Fortuner</h2>
                            <p>Will be launch soon</p>
                            <h1>Rs.40.00 Lakh</h1>
                            <div className={styles.dbtn}>
                                <a href='#'>Alert me when launched</a>
                            </div>
                            <h3>Available Colors</h3>
                            <div className={styles.color2}></div>
                        </div>
                    </Col>
                </Row>
                
                </Container>
            </main>

            <main className={styles.main}>
                <h1 className={styles.title}>
                CHECK MORE CARS IN INDIA
                </h1>

                <div className={styles.grid}>

                <div className={styles.card}>
                <Image src="/1.jpg"  alt="Pic1" width="400%" height="300px" />
                    <h2>Scorpio</h2>
                    <p>Automatic</p>
                    <h4>₹ 20.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/2.jpg" alt="Pic2" width="400%" height="300px" />
                    <h2>Fortuner</h2>
                    <p>Automatic</p>
                    <h4>₹ 40.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details2">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/3.jpg" alt="Pic3" width="400%" height="300px" />
                    <h2>Thar</h2>
                    <p>Automatic</p>
                    <h4>₹ 18.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details3">View Details</a>
                    </div>
                </div>

                <div className={styles.card}>
                <Image src="/4.jpg" alt="Pic4" width="400%" height="300px" />
                    <h2>Harrier</h2>
                    <p>Automatic</p>
                    <h4>₹ 22.00 Lakh Onwards</h4>
                    <div className={styles.details}>
                        <a href="details4">View Details</a>
                    </div>
                </div>

                </div>
            </main>

        </div>
    )
}
