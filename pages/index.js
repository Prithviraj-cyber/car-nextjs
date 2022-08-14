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

// owl carousel
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



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

            {/* carouse start */}
            <Carousel className={styles.carousel}>
                <Carousel.Item interval={1000}>
                    <Image className="d-block" src="/car1.jpg" alt="First slide" layout='responsive' width="100" height="43"/>
                    <Carousel.Caption className={styles.caption}>
                        <h3>Enjoy The <span> Freedome</span><br/> To Choose</h3>
                        <p>From India Top 500 + Used Cars</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Image className="d-block" src="/car2.jpg" alt="First slide" layout='responsive' width="100" height="43"/>
                    <Carousel.Caption className={styles.caption}>
                       <h3>Enjoy The <span> Freedome</span><br/> To Choose</h3>
                        <p>From India Top 500 + Used Cars</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image className="d-block" src="/car3.jpg" alt="First slide" layout='responsive' width="100" height="43"/>
                    <Carousel.Caption className={styles.caption}>
                       <h3>Enjoy The <span> Freedome</span><br/> To Choose</h3>
                        <p>From India Top 500 + Used Cars</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* carouse start end*/}

            {/* main start */}
            <main className={styles.main}>
                <h1 className={styles.title}>
                    LATEST CARS IN INDIA
                </h1>

                <div className={styles.grid}>


                {/* owl carouesl */}
                {/* <OwlCarousel className='owl-theme' loop margin={10} item="3" nav autoplay> 
                    
                    <div class='item'>
                        <h4>1</h4>
                    </div>
                    <div class='item'>
                        <h4>2</h4>
                    </div>
                    <div class='item'>
                        <h4>3</h4>
                    </div>
                    <div class='item'>
                        <h4>4</h4>
                    </div>
                    <div class='item'>
                        <h4>5</h4>
                    </div>
                    <div class='item'>
                        <h4>6</h4>
                    </div>
                    <div class='item'>
                        <h4>7</h4>
                    </div>
                    <div class='item'>
                        <h4>8</h4>
                    </div>
                    <div class='item'>
                        <h4>9</h4>
                    </div>
                    <div class='item'>
                        <h4>10</h4>
                    </div>
                    <div class='item'>
                        <h4>11</h4>
                    </div>
                    <div class='item'>
                        <h4>12</h4>
                    </div>
                
                </OwlCarousel> */}


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
