import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
// import fire from '../../config/Fire';


class Footer extends Component {


    locationRef = (link) => {
        window.location.href = link
    }

    render() {
        return (

            <div className="footer" style={{ width: '100%', height: '100px', backgroundColor: '#00008B', textAlign: 'center' }}>
                <p style={{ color: 'white', textAlign: 'center', fontSize: '12px', padding: '25px' }}><span><a href="https://fawncircleinsurance.com/" style={{ color: 'white', fontSize: '12px' }}>Quotes Provided by Fawn Circle, LLC a local Independent Insurance Agency, who writes for MetLife Auto and Home</a></span></p>
            </div>
        );
    }
}

export default Footer;
