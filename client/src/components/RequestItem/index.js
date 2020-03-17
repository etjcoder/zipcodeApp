import React, { Component } from "react";
import "./style.css";

// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'



class RequestItem extends Component {

    state = {
       
    }

    componentDidMount = () => {
        console.log(`Request Item ${this.props.key} Mounted`)
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    render() {
        return (

            <tr>
                <td>
                    <strong>{this.props.name}</strong>
                </td>
                <td>
                    {this.props.dob}
                </td>
                <td>
                    {this.props.address}
                </td>
                <td>
                    {this.props.phone}
                </td>
                <td>
                    {this.props.email}
                    </td>
                <td>
                    {this.props.vehicles}
                    </td>
                <td>
                    {this.props.drivers}
                </td>
                <td>
                    {this.props.notes}
                </td>
                <td>
                    {this.props.homeowner === true ? "Yes" : "No"}
                </td>
                <td>
                    {this.props.group === true ? "Yes" : "No"}
                </td>
                <td>
                    {this.props.groupCode ? this.props.groupCode : null}
                </td>

                <td>
                    {this.props.created}
                </td>
            </tr>


        )

    }

}

export default RequestItem;