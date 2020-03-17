import React, { Component } from "react";
import "./style.css";
import Nav from '../../components/Nav';
import RequestItem from '../../components/RequestItem';
import API from "../../utils/API";





class AdminPage extends Component {

    state = {
        showLanding: true,
        showAbout: false,
        showContact: false,
        showQuote: false,
        newProjectName: "",
        newProjectImage: "",
        newProjectRepo: "",
        newProjectLink: ""
    }

    componentDidMount = () => {
        this.loadStates()
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadStates = () => {
        API.gatherQuotes()
            .then(res => {
                this.setState({
                    quotes: res.data
                })
            }).catch(err => {
                console.log("error getting quotes")
            })
    }


    // testAdmin = () => {

    //         document.location.href = '/'

    // }



    render() {
        return (
            <div className="container-fluid" style={{ background: 'black', padding: 0, fontSize: '20px' }}>
                <Nav />

                <br />
                <br />

                <div className="row" style={{ padding: '25px' }}>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="card">
                            <div className="card-header" style={{ textAlign: 'center' }}>
                                Quote Requests
                            </div>
                            <div className="card-body" style={{ overflow: 'auto', fontSize: 20 }}>
                                <table style={{ border: '1px solid black' }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>DOB</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Vehicles</th>
                                            <th>Drivers</th>
                                            <th>Notes</th>
                                            <th>Homeowner?</th>
                                            <th>Group?</th>
                                            <th>Group Code</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {this.state.quotes ?

                                            <>
                                                {this.state.quotes.map(quote => (
                                                    <RequestItem
                                                        key={quote._id}
                                                        name={quote.firstName + " " + quote.lastName}
                                                        dob={quote.dob}
                                                        address={quote.street + " " + quote.city + " " + quote.state + ", " + quote.zip}
                                                        email={quote.email}
                                                        phone={quote.phone}
                                                        drivers={quote.drivers}
                                                        vehicles={quote.vehicles}
                                                        notes={quote.notes}
                                                        homeowner={quote.homeowner}
                                                        group={quote.group}
                                                        groupCode={quote.groupCode}
                                                        created={quote.created_at}
                                                    />
                                                ))}

                                            </>

                                            : null}

                                    </tbody>
                                </table>


                            </div>
                        </div>


                    </div>
                    <div className="col-lg-1"></div>
                </div>

                

          



            </div>
        )

    }

}

export default AdminPage;