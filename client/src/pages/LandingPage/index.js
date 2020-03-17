import React, { Component } from "react";
import "./style.css";
import Modal from 'react-modal';
import Nav from '../../components/Nav';
import API from "../../utils/API";
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

class LandingPage extends Component {

    state = {
        editModalIsOpen: false,
        adminModalIsOpen: false,
        finishModalIsOpen: false,
        zipCode: "",
        zipAddress: [],
        streetAddress: "",
        houseNumber: "",
        city: "",
        state: "",
        zipOptions: null
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        setTimeout(() => { this.handleInputCheck() }, 500)
    };

    handleAddressInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleInputCheck = () => {

        API.findZip(this.state.zipCode)
            .then(res => {
                console.log("Zipcodes Found!")
                console.log(res.data)
                this.setState({
                    zipAddresses: res.data
                })
                setTimeout(() => { this.reviewAddresses() }, 1500)
            }).catch(err => {
                console.log("No Zipcodes Found")
                this.setState({
                    zipAddresses: "",
                    zipOptions: "",
                    city: "",
                    state: ""
                })
                console.log(err)
            })

    }

    reviewAddresses = () => {

        if (this.state.zipAddresses.length > 1) {
            this.displayZipOptions()

        } else if (this.state.zipAddresses.length === 1) {
            this.setState({
                city: this.state.zipAddresses[0].City,
                state: this.state.zipAddresses[0].State,
                zipOptions: ""
            })

        } else {
            console.log("No addresses found, you should NOT see this error")
        }
    }

    displayZipOptions = () => {
        this.setState({
            zipOptions: this.state.zipAddresses,
            city: "",
            state: ""
        })
    }

    selectOption = (id) => {

        for (var i = 0; i < this.state.zipOptions.length; i++) {
            if (this.state.zipOptions[i]._id === id) {
                this.setState({
                    city: this.state.zipOptions[i].City,
                    state: this.state.zipOptions[i].State,
                    zipOptions: ""
                })
            }
        }

    }

    mapAddress = (event) => {
        event.preventDefault();
        console.log("Mapping address: " + this.state.houseNumber + " " + this.state.streetAddress + " " + this.state.city + " " + this.state.state + ", " + this.state.zipCode)
        var addressBody = {
            number: this.state.houseNumber,
            street: this.state.streetAddress,
            suffix: this.state.streetSuffix,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        API.findAddress(addressBody)
            .then(res => {
                console.log(res.data.results)

                this.setState({
                    addLong: res.data.results[0].geometry.location.lng,
                    addLat: res.data.results[0].geometry.location.lat,
                })

            }).catch(err => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        console.log("Landing Page")
    }

    onAfterOpen = () => {
        console.log("Modal Is Opened")

    }



    openAdminModal = () => {
        this.setState({
            adminModalIsOpen: true
        })
    }

    closeAdminModal = () => {
        this.setState({
            adminModalIsOpen: false
        })
    }

    // submitRequest = (event) => {
    //     event.preventDefault();

    //     var requestData = {
    //         projName: this.state.projectName,
    //         projDesc: this.state.projectDescription,
    //         reqName: this.state.requesterName,
    //         reqEmail: this.state.requesterEmail,
    //         reqPhone: this.state.requesterPhone,
    //         reqBudget: this.state.requesterBudget,
    //         projNotes: this.state.projectNotes
    //     }

    //     console.log("You've submitted your request!")
    //     console.log(requestData)

    //     API.submitRequest({
    //         projName: this.state.projectName,
    //         projDesc: this.state.projectDescription,
    //         reqName: this.state.requesterName,
    //         reqEmail: this.state.requesterEmail,
    //         reqPhone: this.state.requesterPhone,
    //         reqBudget: this.state.requesterBudget,
    //         projNotes: this.state.projectNotes
    //     })
    //         .then(res => {
    //             alert("Youre request has been submitted!")
    //         })
    //         .catch(err => {
    //             alert("There was a problem processing your request, please make sure all forms are filled out or call 610-299-9918 to speak to Evan")
    //         })

    // }

    loginAdmin = (event) => {
        event.preventDefault()
        console.log(this.state.adminName)
        console.log(this.state.adminPassword)
        if (this.state.adminName === "evancleary@1creative.com" && this.state.adminPassword === "YKi34709") {
            document.location.href = '/xbyMGrZ4XIFuk2GiPHta'
        } else if (this.state.admin !== "evancleary" && this.state.adminPassword !== "YKi34709") {
            alert("You input the wrong information!")
        } else {
            alert("Error")
        }
    }

    reRoute = (url) => {
        // event.preventDefault();

        window.location.href = url
    }


    render() {
        return (

            <div className="container-fluid" style={{ background: '#FFF8DC', padding: '0', height: '100%', color: 'whitesmoke' }}>


                <div className="row" style={{ padding: '5%' }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card bg-primary" style={{ padding: '50px' }}>
                            <div className="card-header">
                                <h3>Address Lookup by Zipcode</h3>
                            </div>
                            <div className="card-body">


                                <div className="row">
                                    <div className="col-12">
                                        <form>
                                            <label>Enter Zipcode</label>
                                            <input type="number" onChange={this.handleInputChange} name="zipCode" value={this.state.zipCode} />
                                        </form>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        {this.state.city ?
                                            <h2>{this.state.city + ", " + this.state.state}</h2>
                                            : null}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        {this.state.city ?
                                            <div className="col-12">
                                                <form>

                                                    <label>Street Address</label>
                                                    <div className="form-row">
                                                 
                                                        <input style={{width: '20%'}}type="text" onChange={this.handleAddressInput} name="houseNumber" value={this.state.houseNumber} placeholder="123"/>
                                                  
                                                        <input style={{width: '60%'}}type="text" onChange={this.handleAddressInput} name="streetAddress" value={this.state.streetAddress} placeholder="Main"/>
                                                     
                                                       
                                                        <input style={{width: '20%'}}type="text" onChange={this.handleAddressInput} name="streetSuffix" value={this.state.streetSuffix} placeholder="Street"/>
                                                     
                                                    </div>

                                                    <button onClick={this.mapAddress} className="btn btn-warning">Map It!</button>
                                                </form>

                                            </div> : null}
                                    </div>
                                </div>

                                <div className="row">
                                    {this.state.zipOptions ?
                                        <>
                                            <div className="col-12"><h4>Please select the City you'd like to view</h4></div>
                                            <>
                                                {this.state.zipOptions.map(zipOption => (
                                                    <div className="col-lg-3 col-md-6" key={zipOption._id}>
                                                        <button style={{ margin: '5px', width: '100%' }} className="btn btn-light" onClick={() => this.selectOption(zipOption._id)}>{zipOption.City}</button>
                                                    </div>
                                                ))}

                                            </>
                                        </>


                                        : null}
                                </div>

                            </div>
                            <br />
                        </div>


                    </div>
                    <div className="col-md-2"></div>


                </div>




                {/* Admin Login Modal */}

                <Modal
                    isOpen={this.state.adminModalIsOpen}
                    onAfterOpen={this.afterOpenEditModal}
                    onRequestClose={this.closeAdminModal}
                    style={customStyles}
                    contentLabel={"Make your request here!"}
                    ariaHideApp={false}
                >
                    <div className="card" style={{ overflow: 'auto' }}>
                        <div className="card-header" style={{ textAlign: 'center' }}>
                            <h3>--------Admin Login--------</h3>
                            <button className="btn btn-sm btn-secondary" onClick={this.closeEditModal}>Exit</button>
                        </div>
                        <div className="card-body" style={{ height: '500px', overflow: 'auto' }}>
                            <form>
                                <label>Username</label>
                                <br />
                                <input className="form-group" type="text" value={this.state.adminName} onChange={this.handleInputChange} name="adminName" />
                                <br />

                                <label>Password</label>
                                <br />
                                <input className="form-group" type="password" value={this.state.adminPassword} onChange={this.handleInputChange} name="adminPassword" />
                                <br />


                                <button className="btn btn-success" onClick={this.loginAdmin}>Log In</button>

                            </form>

                        </div>


                    </div>

                </Modal>
            </div >


        )

    }

}

export default LandingPage;