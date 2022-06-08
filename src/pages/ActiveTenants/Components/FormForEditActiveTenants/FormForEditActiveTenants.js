import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./FormForEditActiveTenants.css";

const FormForEditActiveTenants = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .put(
        `https://api.clwapping.co.uk/api/activetenant/activetenants/${id}`,
        data
      )
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.clwapping.co.uk/api/activetenant/activetenants/${id}`
      );
      const newData = await res.data;
      // setTenant(newData);
      setValue("firstname", newData.firstname);
      setValue("lastname", newData.lastname);
      setValue("contact", newData.contact);
      setValue("altcontact", newData.altcontact);
      setValue("email", newData.email);
      setValue("profession", newData.profession);
      setValue("address1", newData.address1);
      setValue("address2", newData.address2);
      setValue("city", newData.city);
      setValue("postcodepersonal", newData.postcodepersonal);
      setValue("streetpersonal", newData.streetpersonal);
      setValue("expectedrent", newData.expectedrent);
      setValue("bed", newData.bed);
      setValue("occupy", newData.occupy);
      setValue("postcodeproperty", newData.postcodeproperty);
      setValue("streetproperty", newData.streetproperty);
    };
    fetchData();
  }, []);

  return (
    <div className="form-with-property-brief-main-div">
      <div>
        <h2>Active Tenants Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="view-form-main-div">
            <div className="view-form-personal-info-div">
              <h3>Personal Info</h3>
              <div className="view-form-input-field-with-title-div">
                <label>First Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("firstname", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Last Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("lastname", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Contact Number</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("contact", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Alternative Contact Number</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("altcontact", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Email</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("email", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Profession</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("profession", {})}
                />
              </div>
            </div>

            <div className="view-form-property-info-div">
              <h3>Professional Info</h3>
              <div className="view-form-input-field-with-title-div">
                <label>Address Line 1</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("address1", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Address Line 2</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("address2", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>City</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("city", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Postcode</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("postcodepersonal", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Street</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("streetpersonal", {})}
                />
              </div>
            </div>
            <div className="view-form-property-info-div">
              <h3>Expected Requirements</h3>
              <div className="view-form-input-field-with-title-div">
                <label>Expected Rent Per Month</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("expectedrent", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Number of Bed</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("bed", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Number of Occupy</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("occupy", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Postcode</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("postcodeproperty", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Street</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("streetproperty", {})}
                />
              </div>
            </div>

            <div className="view-form-viewing-info-div view-form-viewing-info-div-2">
              <div className="contractor-checkbox-div">
                <div className="view-form-submit-button-div">
                  <Button
                    variant="contained"
                    style={{
                      width: "150px",
                      backgroundColor: "#EBC02B",
                      marginTop: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Property Details</div> */}
    </div>
  );
};

export default FormForEditActiveTenants;
