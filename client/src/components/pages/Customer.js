import React, { useState, useEffect } from "react";
import "./Customer.css";
import ResultsList from "../resultslist/ResultsList"
import API from "../../utils/API"
// import Checkbox from "@material/react-checkbox"
// import { MDBInput } from 'mdbreact';
// import ViewCustomer from "./ViewCustomer";
// import { withRouter } from "react-router";

function Customer(props) {

    let [result, setResult] = useState([])

    useEffect(() => {
        loadCustomers()
    }, [])

    function handleSubmit (id) {   
        console.log("This is.id " + id);
        window.location.href="/viewcustomer/" + id;
    }

    function loadCustomers() {
        API.getCustomers()
            .then(response => {
                console.log(response);
                let customerRecords = [];
                for (let i = 0; i < response.data.length; i++) {
                    let customer = {
                        select: (<button name="Submit" className="formatButton" onClick= {() => handleSubmit(response.data[i]._id)}>Select</button>),
                        firstName: response.data[i].firstName,
                        lastName: response.data[i].lastName,
                        street: response.data[i].address.street,
                        city: response.data[i].address.city,
                        state: response.data[i].address.state,
                        zipcode: response.data[i].address.zipcode,
                        phone: response.data[i].Phone_Num,
                        email: response.data[i].Email
                    }
                    customerRecords.push(customer)
                    console.log("This is customer records ", customerRecords)
    
                }
                setResult( customerRecords );
            })
    }

    return (
        <>
            <ResultsList customerData = {result} />
    
        </>
    );
};

export default Customer;