import React, { useState, useEffect } from "react";
import "./ViewCustomer.css";
import "../../utils/API";
import CustomerCard from "../customercard/CustomerCard";
// import GoogleApiWrapper from "../mapApi/Maps";
import { MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";

function ViewCustomer(props) {
    console.log(props.match.params.id)

    let [result, setResult] = useState({})
    let [editable, setEditable] = useState(true)
    // let [customerData, setCustomerData] = useState({})

    useEffect(() => {
        loadCustomer()
    }, [])

    const handleChange = (event) => {
        // event.preventDefault();
        const { name, value } = event.target;
        setResult({ ...result, [name]: value });
    }

    const handlePush = () => {
        setEditable(false);
    }

    const handleSave = () => {
        API.updateCustomer(props.match.params.id, { firstName: result.firstName, lastName: result.lastName, address: result.address, city: result.city, state: result.state, zipcode: result.zipcode, Phone_Num: result.phone_num, Email: result.email })
            .then(response => {
                setEditable(true);
                alert("Customer data updated.");
            })
            .catch(error => console.log(error))
    }
    function loadCustomer() {
        API.getCustomer(props.match.params.id)
            .then(response => {
                console.log("Get Customer Info ", response);
                // let customerRecord = [];
                // for (let i = 0; i < response.data.length; i++) {
                // let customer = {
                //     // select: (<button name="Submit" onClick= {() => handleSubmit(response.data[i]._id)}>Submit</button>),
                //     name: response.data.Name,
                //     address: response.data.Address,
                //     phone: response.data.Phone_Num,
                //     email: response.data.Email
                // }
                // customerRecord.push(customer)
                // console.log("This is the customer record ", customerRecord)

                setResult(response.data);
                // setCustomerData(response.data);

            })
    }
    return (
        <>
            <h1>View Customer Page</h1>

            <MDBRow>
                <MDBCol lg="4">
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: 500 }}>
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                            style={{ border: 0 }} allowFullScreen title="Customer Map"></iframe>
                    </div>
                </MDBCol>
                <MDBCol lg="8">
                    <CustomerCard CustomerRecord={result} handleChange={handleChange} editable={editable} />
                    {editable ? <button
                        className="formatButton"
                        onClick={handlePush}
                    >Edit</button> :
                        <button
                            className="formatButton"
                            onClick={handleSave}
                        >Save</button>}
                </MDBCol>

            </MDBRow>
            <MDBRow>

                <MDBCol>

                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ViewCustomer;