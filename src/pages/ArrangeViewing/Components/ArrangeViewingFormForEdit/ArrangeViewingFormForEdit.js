import React, { useEffect, useState } from "react";
import "./ArrangeViewingFormForEdit.css";
import { properties } from "../../../../dammyData";
import { useForm } from "react-hook-form";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArrangeViewingFormForEdit = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  // console.log(data);
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://localhost:8080/api/view/registeredviewings/${id}`
      );
      const newData = await res.data;
      console.log(newData);
      setValue("firstname", newData.firstname);
      setValue("lastname", newData.lastname);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   function getViewings() {
  //     axios.get("https://api.clwapping.co.uk/api/view/viewings").then((res) => {
  //       const data = res.data;
  //       setInfo(data);
  //     });
  //   }
  //   getViewings();
  // }, ["https://api.clwapping.co.uk/api/view/viewings"]);
  // console.log(info);

  return (
    <div className="form-with-property-brief-main-div">
      <div>
        <h2>Arrange Viewing Details</h2>
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
                  {...register("contactnumber", {})}
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
              <h3>Property Info</h3>
              <div className="view-form-input-field-with-title-div">
                <label>House Name/Number</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("housename", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Street/Road Number</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("street", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Postcode</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("postcode", {})}
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
              <div className="input-field-with-title-div">
                <label>Property Condition</label>
                <div className="input-field-each">
                  <select
                    {...register("propertycondition", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="part furnished">Part Furnished</option>
                    <option value="furnished">Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="view-form-viewing-info-div">
              <h3>Viewing Info</h3>
              <div className="view-form-input-field-with-title-div">
                <label>Viewing Date</label>
                <input
                  className="view-form-input-field-each"
                  type="date"
                  {...register("viewingdate", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Viewing Time</label>
                <input
                  className="view-form-input-field-each"
                  type="time"
                  {...register("viewingtime", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Arranged By</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("arrangedby", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Arranged For</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("arrangedfor", {})}
                />
              </div>
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
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div>Property Details</div> */}
    </div>
  );
};

export default ArrangeViewingFormForEdit;
