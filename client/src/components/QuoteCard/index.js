import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'



class QuoteCard extends Component {

    state = {
        firstName: "",
        lastName: "",
        DOB: "",
        email: "",
        streetAddress: "",
        cityAddress: "",
        zipAddress: "",
        stateAddress: "",
        vehiclesBody: "",
        driversBody: "",
        quoteNotes: "",
        group: false,
        homeowner: false,
        groupCode: "",
        phone: ""

    }

    componentDidMount = () => {
        console.log("Contact Card Mounted")
    }

    handleInputChange = event => {
        // const { name, value } = event.target;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    handleQuoteSubmit = event => {
        event.preventDefault()

        var quoteData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.DOB,
            street: this.state.streetAddress,
            city: this.state.cityAddress,
            zip: this.state.zipAddress,
            state: this.state.stateAddress,
            email: this.state.email,
            homeowner: this.state.homeowner,
            vehicles: this.state.vehiclesBody,
            drivers: this.state.driversBody,
            notes: this.state.quoteNotes,
            group: this.state.group,
            groupCode: this.state.groupCode,
            phone: this.state.phone
        }

        console.log(quoteData)



        API.saveQuote({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.DOB,
            street: this.state.streetAddress,
            city: this.state.cityAddress,
            zip: this.state.zipAddress,
            state: this.state.stateAddress,
            homeowner: this.state.homeowner,
            email: this.state.email,
            vehicles: this.state.vehiclesBody,
            drivers: this.state.driversBody,
            notes: this.state.quoteNotes,
            group: this.state.group,
            groupCode: this.state.groupCode,
            phone: this.state.phone
        }).then(res => {
            console.log("Saved Quote!")
            this.props.submit();
            console.log(res.data)
        }
        ).catch(err => {
            
            console.log(err)
            alert("Quote entered incorrectly, please try again or call 610-299-9918")   
        })

    }





    render() {
        return (
            <div>
                <div className="card bg-primary" style={{ padding: '10px' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <div className="card-header" style={{ textAlign: 'center' }}>
                        <h2 className="contact-text" style={{ color: this.props.text }}>MetLife Auto and Home</h2>
                        <h2 className="contact-text" style={{ color: this.props.text }}>Quote Form</h2>
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h4 className="contact-text" style={{ color: this.props.text }}>Please fill out the form below, and submit for a quote!</h4>
                        </div>
                    </div>

                    <form style={{ color: this.props.text }}>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label >First Name</label>
                                <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="John" />
                            </div>
                            <div className="col-md-4">
                                <label>Last Name</label>
                                <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Jacobs" />
                            </div>
                            <div className="col-md-4">
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" value={this.state.DOB} onChange={this.handleInputChange} name="DOB" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6" style={{textAlign: 'center'}}>
                                <label>Phone Number <br /><p style={{fontSize:'12px'}}>We do not sell your information</p></label>
                                <input type="text" className="form-control" value={this.state.phone} onChange={this.handleInputChange} name="phone" />
                            </div>
                            <div className="col-md-3"></div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-8">
                                <label >Street Address</label>
                                <input type="text" className="form-control" value={this.state.streetAddress} onChange={this.handleInputChange} name="streetAddress" id="inputAddress" placeholder="1234 Main St" />
                            </div>

                            <div className="col-lg-4">
                                <label>City</label>
                                <input type="text" className="form-control" value={this.state.cityAddress} onChange={this.handleInputChange} name="cityAddress" id="inputCity" />
                            </div>
                        </div>

                        <div className="form-row">

                            <div className="form-group col-md-4">
                                <label>State</label>
                                <select id="inputState" className="form-control" value={this.state.stateAddress} onChange={this.handleInputChange} name="stateAddress">
                                    <option value="">Choose...</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Zip</label>
                                <input type="text" className="form-control" value={this.state.zipAddress} onChange={this.handleInputChange} name="zipAddress" id="inputZip" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="form-group col-md-4">
                                <label>Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} name="email" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Please write down the year/make/models of your vehicles</label>
                                <textarea value={this.state.vehiclesBody} onChange={this.handleInputChange} name="vehiclesBody" className="form-control" rows="5" cols="60" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Please write down the name / dates of birth of your drivers</label>
                                <textarea value={this.state.driversBody} onChange={this.handleInputChange} name="driversBody" className="form-control" rows="5" cols="60" />
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-3">
                                <label>Homeowner?</label>
                                <input type="checkbox" className="form-control" checked={this.state.homeowner} onChange={this.handleInputChange} name="homeowner" />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Employee Program?</label>
                                <input type="checkbox" className="form-control" checked={this.state.group} onChange={this.handleInputChange} name="group" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Discount Code (optional):</label>
                                <input type="text" className="form-control" value={this.state.groupCode} onChange={this.handleInputChange} name="groupCode" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label>Additional Notes (include any additional property information here)</label>
                                <textarea value={this.state.quoteNotes} onChange={this.handleInputChange} name="quoteNotes" className="form-control" rows="5" cols="60" />
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <br />
                            <p style={{ fontSize: '12px' }}>*Please note that we run Consumer Reports from Reporting Agencies when running your quotes. These include your credit rating, but does not have any impact on your credit score. The information gathered will be used strictly for the purposes of quoting your Auto and Home insurances</p>
                            <br />
                            <button className="btn btn-lg btn-success" onClick={this.handleQuoteSubmit}>Submit for Quote</button>
                            <br />
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        )

    }

}

export default QuoteCard;