import React, { Component } from "react";
import "./style.css";
import Parralax from '../../components/Parralax';
import SmallParralax from '../../components/SmallParralax';
import Table from 'react-bootstrap/Table';
import CreateServiceRequest from '../../components/CreateServiceRequest'
import CreateReferral from '../../components/CreateReferral';
import API from '../../utils/API';
import AutoPolicySummary from '../../components/AutoPolicySummary'
import PropertyPolicySummary from '../../components/PropertyPolicySummary'
import UmbrellaPolicySummary from '../../components/UmbrellaPolicySummary'




class ClientPage extends Component {

    state = {
        showAutoPolicies: false,
        showPropertyPolicies: false,
        showUmbrellaPolicies: false
    }

    componentDidMount = () => {
        console.log("Landing Page Mounted")
        setTimeout(() => {
            this.getUserData()
        }, 1000)
    }

    getUserData = () => {

        var userID = this.props.user.uid
        API.findClientLogin(userID)
            .then(res =>
                this.setState({
                    userData: res.data[0]
                })
            )
            .catch(err => alert("Error finding user data"))
    }

    showAutoPolicy = (e) => {
        e.preventDefault()
        if (this.state.showAutoPolicies === true) {
            this.setState({
                showAutoPolicies: false
            })
        } else {
            this.setState({
                showAutoPolicies: true,
                showPropertyPolicies: false,
                showUmbrellaPolicies: false
            })
        }
    }
    showPropertyPolicy = (e) => {
        e.preventDefault()
        if (this.state.showPropertyPolicies === true) {
            this.setState({
                showPropertyPolicies: false
            })
        } else {
            this.setState({
                showAutoPolicies: false,
                showPropertyPolicies: true,
                showUmbrellaPolicies: false
            })
        }
    }
    showUmbrellaPolicy = (e) => {
        e.preventDefault()
        if (this.state.showUmbrellaPolicies === true) {
            this.setState({
                showUmbrellaPolicies: false
            })
        } else {
            this.setState({
                showAutoPolicies: false,
                showPropertyPolicies: false,
                showUmbrellaPolicies: true
            })
        }
    }

    showRequestForm = (e) => {
        e.preventDefault()
        if (this.state.showRequestForm === true) {
            this.setState({
                showRequestForm: false
            })
        } else {
            this.setState({
                showRequestForm: true
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <SmallParralax />
                {this.state.userData ?
                    <div className="card bg-dark" style={{ color: 'whitesmoke' }}>

                        <div className="card-header" style={{ textAlign: 'center' }}>
                            <h3>Welcome, {this.state.userData.firstName} {this.state.userData.lastName}!</h3>
                        </div>
                        <div className="card-body" style={{}}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-header" style={{ color: 'black', textAlign: 'center' }}>
                                            <h4>Service Request Form</h4> <br />
                                            <button className="btn btn-outline-info" onClick={this.showRequestForm} style={{ textAlign: 'center' }}>Show</button>
                                        </div>
                                        {this.state.showRequestForm ?
                                            <div className="card-body">
                                                <CreateServiceRequest />
                                            </div>

                                            : null}
                                    </div>
                                    <br />
                                </div>

                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header" style={{ color: 'black' }}>
                                                    <h3 style={{ textAlign: 'center' }}>Active Policies: {this.state.userData.autos.length + this.state.userData.properties.length + this.state.userData.umbrellas.length}</h3>

                                                </div>
                                                <div className="card-body">
                                                    <img alt="car" src="./car.jpg" style={{ width: '100%' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12" style={{ marginTop: '20px' }}>
                                            <CreateReferral />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card" style={{ overflow: 'auto' }}>
                                        <div className="card-header" style={{ overflow: '', color: 'black', textAlign: 'center' }}>
                                           <h4>Contact Information</h4>
                                        </div>
                                        <div className="card-body" style={{ padding: 0 }}>

                                             <Table style={{ width: '100%' }} striped bordered hover>
                                                <tbody>
                                                    <tr>
                                                        <td>Client Name</td>
                                                        <td>{this.state.userData.firstName} {this.state.userData.lastName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Your Service Rep</td>
                                                        <td>{this.state.userData.servicer ? this.state.userData.servier : "Randy Forster"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rep Phone #</td>
                                                        <td>{this.state.userData.servicerNumber ? this.state.userData.servicerNumber : "610-355-7896"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rep E-mail</td>
                                                        <td>{this.state.userData.serviceEmail ? this.state.userData.servicerEmail : "randyforster@1creative.com"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Carrier</td>
                                                        <td>{this.state.userData.autos[0].carrier}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Claims #
                                                        </td>
                                                        <td>
                                                            {this.state.userData.autos[0].carrier === "MetLife" ? '1-800-854-6011' : null}
                                                            {this.state.userData.autos[0].carrier === "Encompass" ? '1-800-588-7400' : null}
                                                            {this.state.userData.autos[0].carrier === "Plymouth Rock" ? '1-844-346-1225' : null}
                                                            {this.state.userData.autos[0].carrier === "Pure" ? '1-888-813-7873' : null}
                                                            {this.state.userData.autos[0].carrier === "Progressive" ? '1-800-776-4737' : null}
                                                            <br />
                                                            <p style={{fontSize: 10}}>If no number, please dial your Service Rep</p>
                                                        </td>
                                                    </tr>
                                                  
                                                    <tr>
                                                        <td>Your Email on File</td>
                                                        <td>{this.state.userData.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Your Number on File</td>
                                                        <td>{this.state.userData.telephone}</td>
                                                    </tr>

                                                </tbody>
                                            </Table>


                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="card" style={{overflow: 'auto'}}>
                                        <div className="card-header" style={{ textAlign: 'center', color: 'black' }}>
                                            <h4>Auto Policies</h4>
                                            <button className="btn-info btn" onClick={this.showAutoPolicy}>Toggle</button>
                                        </div>
                                        {this.state.showAutoPolicies ?
                                            <div className="card-body bg-dark" style={{overflow: 'auto'}}>
                                                <div className="row">
                                                    {this.state.userData.autos ?
                                                        <>
                                                            {this.state.userData.autos.map(autoData => (
                                                                <AutoPolicySummary
                                                                    key={autoData._id}
                                                                    autoData={autoData}
                                                                    admin={false}
                                                                    colSize="col-lg-12"
                                                                />
                                                            ))}

                                                            {/* <div className="col-lg-6">
                                                            <div className="row">
                                                                <CreateVehicle
                                                                    autoData={this.state.userData.autos}
                                                                    clientID={this.state.clientData._id}
                                                                />
                                                                <CreateDriver
                                                                    autoData={this.state.clientData.autos}
                                                                    clientID={this.state.clientData._id}
                                                                />
                                                            </div>
                                                        </div> */}
                                                        </>

                                                        : <p>No Autos for this Client yet</p>}
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </div>
                                <br />
                                <br />

                                <div className="col-lg-12">
                                    <br />
                                    <br />
                                    <div className="card">
                                        <div className="card-header" style={{ textAlign: 'center', color: 'black' }}>
                                            <h4>Property Policies</h4>
                                            <button className="btn-info btn" onClick={this.showPropertyPolicy}>Toggle</button>
                                        </div>
                                        {this.state.showPropertyPolicies ?
                                            <div className="card-body bg-dark" style={{overflow: 'auto'}}>
                                                {this.state.userData.properties ?

                                                    <>
                                                        {this.state.userData.properties.map(propertyData => (
                                                            <>
                                                                <PropertyPolicySummary
                                                                    key={propertyData._id}
                                                                    propertyData={propertyData}
                                                                    colSize="col-lg-12"
                                                                    admin={false}
                                                                />
                                                                <br />
                                                            </>
                                                        ))}

                                                    </>

                                                    : <p>No Properties Insured with us yet!</p>}

                                            </div>
                                            : null}
                                    </div>
                                </div>

                                <br />
                                <div className="col-lg-12">
                                    <br />
                                    <div className="card">
                                        <div className="card-header" style={{ textAlign: 'center', color: 'black' }}>
                                            <h4>Umbrella Policies</h4>
                                            <button className="btn-info btn" onClick={this.showUmbrellaPolicy}>Toggle</button>
                                        </div>
                                        {this.state.showUmbrellaPolicies ?
                                            <div className="card-body bg-dark" style={{overflow: 'auto'}}>
                                                <div className="col-lg-3"></div>
                                                {this.state.userData.umbrellas ?
                                                    <>
                                                        {this.state.userData.umbrellas.map(umbrellaData => (

                                                            <div className="col-lg-12" style={{ textAlign: 'center' }}>
                                                                <UmbrellaPolicySummary
                                                                    key={umbrellaData._id}
                                                                    umbrellaData={umbrellaData}
                                                                    admin={false}
                                                                    colSize={"col-lg-12"}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                    : <p>No Umbrellas for this client yet</p>}
                                                <div className="col-lg-3"></div>
                                            </div>
                                            : null}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    : null}

                <Parralax />
                <Parralax />
                <Parralax />
                <Parralax />
                <Parralax />
                <Parralax />
            </div>
        )

    }

}

export default ClientPage;