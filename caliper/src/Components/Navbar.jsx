import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { RiFacebookLine } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

function MyNavbar() {
  return (
    <>
      <header className={styles.head}>
        <div style={{ display: "flex", marginLeft: "1100px" }}>
          <a className={styles.lnd1} href="#">
            <TfiYoutube />
          </a>
          <a className={styles.lnd1} href="#">
            <FaLinkedinIn />
          </a>
          <a className={styles.lnd1} href="#">
            <AiOutlineInstagram />
          </a>
          <a className={styles.lnd1} href="#">
            <RiFacebookLine />
          </a>
        </div>

        <div style={{ display: "flex", color: "white" }}>
          <div className={styles.lnd}>
            <IoCallOutline />
            info@briohydroponics.com
          </div>
          <div>
            <AiOutlineMail />
            info@briohydroponics.com
          </div>
        </div>
      </header>

      <Navbar id={styles.parent} expand="lg">
        <Container>
          <Navbar.Brand href="#home" id={styles.logo}>
            Acme Fresh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
                <img
                  src="data:image/png;base64,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"
                  width={"40px"}
                  alt="Acme Fresh"
                />
              </div>
              <Link className={styles.lin} to="/home">
                Home
              </Link>
              <Link className={styles.lin} to="/product">
                Product
              </Link>
              <Link className={styles.lin} to="/services">
                Check Yor Cart
              </Link>
              <Link className={styles.lin} to="/about">
                About
              </Link>
              <Link className={styles.lin} to="/contact">
                Contact
              </Link>

              <Link className={styles.lin} to="/blog">
                Blog
              </Link>

              <Link className={styles.lin} to="/training">
                Traingin
              </Link>
              <Link className={styles.lin} to="/e-store">
                E Store
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
