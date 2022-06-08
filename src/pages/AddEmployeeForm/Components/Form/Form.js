import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-with-property-brief-main-div">
      <div>
        <h2>Employee Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="view-form-main-div">
            <div className="view-form-personal-info-div">
              {/* <h3>Personal Info</h3> */}
              <div className="view-form-input-field-with-title-div">
                <label>First Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("firstname", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Sure Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("surename", {})}
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
            </div>

            <div className="view-form-property-info-div">
              {/* <h3>Professional Info</h3> */}
              <div className="view-form-input-field-with-title-div">
                <label>Joining Date</label>
                <input
                  className="view-form-input-field-each"
                  type="datetime-local"
                  {...register("joindate", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Contact Type</label>
                <div className="view-form-input-field-each">
                  <select
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                    {...register("contacttype", {})}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="parttime">Part Time</option>
                    <option value="fulltime">Full Time</option>
                  </select>
                </div>
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Working Time (From)</label>
                <input
                  className="view-form-input-field-each"
                  type="time"
                  {...register("timefrom", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Working Time (To)</label>
                <input
                  className="view-form-input-field-each"
                  type="time"
                  {...register("timeto", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Days Per Week</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("daysperweek", {})}
                />
              </div>
            </div>
            <div className="view-form-property-info-div">
              <div className="view-form-input-field-with-title-div">
                <label>Hours</label>
                <input
                  className="view-form-input-field-each"
                  type="number"
                  {...register("hours", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Role</label>
                <div className="view-form-input-field-each">
                  <select
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                    {...register("role", {})}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>
              </div>

              <div className="view-form-input-field-with-title-div">
                <label>Bank Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("bankname", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Account Number</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("accountnumber", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Sortcode</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("Sortcode", {})}
                />
              </div>
              <div className="add-employee-form-submit-button-div">
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

export default Form;
