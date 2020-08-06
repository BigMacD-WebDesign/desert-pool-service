import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { MDBRow, MDBCol } from 'mdbreact';
import CustomerCard from "../customercard/CustomerCard"
import "./AddCustomer.css";


function AddCustomer() {

    let [result, setResult] = useState({Name:"", Address:"", Phone_Num:"", Email:"" })
    const [formObject, setFormObject] = useState({})
    // useEffect(() => {
    //     loadCustomer()
    // }, [])
    function handleInputChange(event) {
        const { name, value } = event.target;
        setResult({...result, [name]: value})
      };

    //   const handlePush = () => {
    //     setEditable(false);
    // }
      function clearFields () {
        // formObject.Name="",
        // formObject.Address="",
        // formObject.Phone="",
        // formObject.Email=""
      }

    function addCustomer() {
        API.addCustomer({
            name: formObject.Name,
            address: formObject.Address,
            phone_num: formObject.Phone,
            email: formObject.Email
        })
            .then(response => clearFields())
            .catch(error => console.log(error));
            // setResult( customerRecord );
    };
    return (
        <>
            <h1>Add Customer Page</h1>

            <MDBRow>

                <MDBCol lg="12">
                    <CustomerCard CustomerRecord={result} handleChange={handleInputChange} editable={false}/>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default AddCustomer;