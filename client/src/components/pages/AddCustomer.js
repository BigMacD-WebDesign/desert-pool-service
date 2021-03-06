import React, { useState } from "react";
import API from "../../utils/API";
import { MDBRow, MDBCol } from 'mdbreact';
import CustomerCard from "../customercard/CustomerCard"
import "./AddCustomer.css";
import moment from "moment";

function AddCustomer() {

    let [result, setResult] = useState(
        {
            firstName: "",
            lastName: "",
            city: "",
            state: "",
            zip: "",
            phone_num: "",
            email: ""
        })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setResult({ ...result, [name]: value })
    };

    function handleAdd() {
        API.addCustomer({
            firstName: result.firstName,
            lastName: result.lastName,
            address: {
                street: result.street,
                city: result.city,
                state: result.state,
                zipcode: result.zipcode
            },
            phone_num: result.phone_num,
            email: result.email,
            workOrders: {
                salt_pool: result.salt_pool,
                filter: result.filter,
                next_date_of_service: moment(result.next_date_of_service).toISOString()
            }
        })
            .then(response => {
                alert("Customer added.");
                setResult({
                    firstName: "",
                    lastName: "",
                    street: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    phone_num: "",
                    email: "",
                    salt_pool: "",
                    filter: "",
                    next_date_of_service: ""
                });
            })
            .catch(error => console.log(error))
    };

    return (
        <>
            <h1>Add Customer</h1>

            <MDBRow>

                <MDBCol lg="12">
                    <CustomerCard CustomerRecord={result} handleChange={handleInputChange} nonEditable={false} />
                </MDBCol>
            </MDBRow>
            <MDBRow>

                <MDBCol lg="12">
                    <button
                        className="formatButton"
                        onClick={handleAdd}
                    >Save</button>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default AddCustomer;