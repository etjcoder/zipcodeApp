import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import './style.css'


class Parralax extends Component {
    render() {
        return (

            <div>

                <div className="container-index">
                    <div className="parralax-index" style={{ height: this.props.height }} />

                </div>


            </div>



        )
    }
}

export default Parralax;
