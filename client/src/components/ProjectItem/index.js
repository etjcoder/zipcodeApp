import React, { Component } from "react";
import "./style.css";

// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'



class ProjectItem extends Component {

    state = {
       
    }

    componentDidMount = () => {
        // console.log(`Project Item ${this.props.key} Mounted`)
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    render() {
        return (
            <div style={{fontSize: '14px'}}>Project Items go here</div>

            // <tr>
            //     <td>
            //         <strong>{this.props.projName}</strong>
            //     </td>
            //     <td>
            //         {this.props.projDesc}
            //     </td>
            //     <td>
            //         {this.props.reqName}
            //     </td>
            //     <td>
            //         {this.props.reqEmail}
            //     </td>
            //     <td>
            //         #{this.props.reqPhone}
            //         </td>
            //     <td>
            //         {this.props.reqBudget}
            //         </td>
            //     <td>
            //         {this.props.projNotes}
            //     </td>
            //     <td>
            //         {this.props.completed === true ? "Completed" : "Not Completed Yet" }
            //     </td>

            //     <td>
            //         {this.props.active === true ? "Still Active" : "Inactive" }
            //     </td>
            // </tr>


        )

    }

}

export default ProjectItem;