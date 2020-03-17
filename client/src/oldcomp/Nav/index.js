import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-boostrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import fire from '../../config/Fire';


class FawnNav extends Component {

    logOut = e => {
        console.log("Logging out");
        e.preventDefault();
        fire.auth().signOut();
        alert("You've signed out")
    }
    render() {
        return (

            <div>
                <Navbar bg="dark" expand="lg" style={{ color: 'whitesmoke' }}>

                    <Navbar.Brand href="/"><strong style={{ color: '#dab74e' }}>F A W N | Insurance</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{ color: 'whitesmoke' }}>
                            <Nav.Link href="/"><p style={{ color: 'whitesmoke' }}>Home</p></Nav.Link>
                            <Nav.Link href="/agent"><p style={{ color: 'whitesmoke' }}>Agent</p></Nav.Link>
                            <Nav.Link href="/client"><p style={{ color: 'whitesmoke' }}>Client</p></Nav.Link>
                           </Nav>
                        <Form inline>
                        <div style={{float: 'right'}}><Button variant="outline-warning" onClick={this.logOut} style={{ float: 'right' }}>Logout</Button></div>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default FawnNav;
