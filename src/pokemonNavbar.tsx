import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./../styles/index.css";
import Link from "next/link";
import ForwardButton from "../pages/forwardButton";
import BackButton from "../pages/backButton";
import Search from "./search";

interface navbarProp {
  goBack: () => number;
  goForward: () => number;
}

function PokemonNavbar(props: navbarProp) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <button
          onClick={props.goBack}
          style={{ border: "none", background: "none" }}
        >
          <BackButton />
        </button>
        <Link href={"http://localhost:5173"}>
          <Navbar.Brand href="#">Pokédex</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Link
            href={`search`}
            style={{ textDecoration: "none", color: "#41295a" }}
          >
            Advanced Search
          </Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Search />
          <button
            onClick={props.goForward}
            style={{ border: "none", background: "none" }}
          >
            <ForwardButton />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PokemonNavbar;
