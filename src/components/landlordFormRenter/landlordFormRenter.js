import React, { useState, Component } from "react";
import "./landlordFormRenter.css";
import { useForm } from "react-hook-form";
import { Step, StepLabel, Stepper, TextField } from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";

// import LandlordForm from "../landlordForms/LandlordForm";
import {
  FormPersonal,
  FormProperty,
  FormAgreement,
} from "../landlordForms/LandlordForm";
import { withThemeCreator } from "@material-ui/styles";
import HtmlEditor from "../Editor/HtmlEditor";

const LandlordFormSeller = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      check: false,
    },
  });
  const onSubmit = (data) => console.log(data);

  const [activeStep, setActiveStep] = useState(0);

  const stepNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      setActiveStep(1);
    }
  };

  const stepBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 0) {
      setActiveStep(0);
    }
  };

  //   const steps = ["personal info", "property info", "agreement"];

  //   const getStepContent = (step) => {
  //     switch (step) {
  //       case 0:
  //         return <FormPersonal />;
  //       case 1:
  //         return <FormProperty />;
  //       case 2:
  //         return <FormAgreement />;
  //       default:
  //         return "Unknown step";
  //     }
  //   };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Renter Landlord Form </h1>
      <div className="stepper-form-container">
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Personal Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Address</StepLabel>
          </Step>
          {/* <Step>
            <StepLabel>Legal Requirements</StepLabel>
          </Step>
          <Step>
            <StepLabel>Agreement</StepLabel>
          </Step> */}
        </Stepper>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Persoanl Information Start*/}
          {activeStep === 0 && (
            <div className="personal-information-div">
              <div className="input-field-with-title-div ">
                <label>Firstname</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Firstname"
                  {...register("firstname", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Lastname</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Lastname"
                  {...register("lastname", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Contact Number</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Contact Number"
                  {...register("contactnumber", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Alternative Contact Number</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Alternative Contact Number"
                  {...register("alternativecontactnumber", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Email</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Email"
                  {...register("email", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Best time to contact</label>
                <input
                  className="input-field-each"
                  type="datetime-local"
                  placeholder="Best time to contact"
                  {...register("besttimetocontact", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Medium of correspondence</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Medium of correspondence"
                  {...register("mediumofcorrespondence", {})}
                />
              </div>
            </div>
          )}

          {/* Personal Information End*/}

          {/* Address Information Start*/}

          {activeStep === 1 && (
            <div className="personal-information-div">
              <div className="input-field-with-title-div ">
                <label>Address Line 1</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Address Line 1"
                  {...register("address1", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Address Line 2</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Address Line 2"
                  {...register("address2", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>City</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="City"
                  {...register("city", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Postcode</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Postcode"
                  {...register("postcode", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Street</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Street"
                  {...register("street", {})}
                />
              </div>
            </div>
          )}

          {/* Address Information End*/}
          {/* Property Information Start */}

          {activeStep === 2 && (
            <div className="property-information-div">
              <div className="input-field-with-title-div ">
                <label>House Name/Number</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="House Name/Number"
                  {...register("housenamenumber", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Road Number</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Road Number"
                  {...register("roadnumber", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Postcode</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="Postcode"
                  {...register("postcode", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>City</label>
                <input
                  className="input-field-each"
                  type="text"
                  placeholder="City"
                  {...register("city", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Building Type</label>
                <div className="input-field-each">
                  <select
                    {...register("buildingtype", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="maisonette">Maisonette</option>
                    <option value="apartment">Apartment</option>
                    <option value="cottage">Cottage</option>
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
              </div>
              <div className="input-field-with-title-div ">
                <label>House Type</label>
                <div className="input-field-each">
                  <select
                    {...register("housetype", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                    disabled={watch("buildingtype") === "flat"}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="detached">Detached</option>
                    <option value="semi-detached">Semi-Detached</option>
                    <option value="mid-terrace">Mid-terrace</option>
                    <option value="end-terrace">End-terrace</option>
                  </select>
                </div>
              </div>
              <div className="input-field-with-title-div ">
                <label>Bedrooms</label>
                <div className="input-field-each">
                  <select
                    {...register("bedrooms", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>

              <div className="input-field-with-title-div ">
                <label>Bathrooms</label>
                <div className="input-field-each">
                  <select
                    {...register("bathrooms", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </div>
              <div className="input-field-with-title-div ">
                <label>Floor</label>
                <div className="input-field-each">
                  <select
                    {...register("floor", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
              <div className="input-field-with-title-div ">
                <label>Lift</label>
                <div className="input-field-each">
                  <select
                    {...register("lift", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="input-field-with-title-div ">
                <label>Driveway</label>
                <div className="input-field-each">
                  <select
                    {...register("driveway", {})}
                    style={{
                      border: "none",
                      height: "20px",
                      width: "250px",
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* <div className="input-field-each">
                <select
                  {...register("garden", {})}
                  style={{
                    border: "none",
                    height: "20px",
                    width: "250px",
                  }}
                >
                  <option value="" selected disabled hidden>
                    Chain Free
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div> */}
              {/* <div className="input-field-each">
                <select
                  {...register("chainfree", {})}
                  style={{
                    border: "none",
                    height: "20px",
                    width: "250px",
                  }}
                >
                  <option selected disabled hidden>
                    Garden
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div> */}
              <div className="input-field-with-title-div ">
                <label>Available Date</label>
                <input
                  className="input-field-each"
                  type="date"
                  placeholder="Available Date"
                  {...register("availabledate", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>Validation Date</label>
                <input
                  className="input-field-each"
                  type="date"
                  placeholder="Valuation Date"
                  {...register("valuationdate", {})}
                />
              </div>
              {/* <input
                className="input-field-each"
                type="text"
                placeholder="House Size in sqm. eg. 1000"
                {...register("valuationdate", {})}
              /> */}
              {/* <div className="input-field-each">
                <select
                  {...register("tenure", {})}
                  style={{
                    border: "none",
                    height: "20px",
                    width: "250px",
                  }}
                >
                  <option selected disabled hidden>
                    Tenure
                  </option>
                  <option value="Freehold">Freehold</option>
                  <option value="Leasehold">Leasehold</option>
                </select>
              </div> */}

              <div className="input-field-with-title-div ">
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
                    <option value="partfurnished">Part Furnished</option>
                    <option value="furnished">Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </div>
              </div>
              {/* property files uploads start */}

              <div className="input-field-with-title-div ">
                <label>Floorplans</label>
                <input
                  className="input-field-each"
                  type="file"
                  multiple
                  {...register("floorplans", {})}
                />
              </div>
              <div className="input-field-with-title-div ">
                <label>EPC</label>
                <input
                  className="input-field-each"
                  type="file"
                  multiple
                  {...register("epc", {})}
                />
              </div>
            </div>
          )}

          {/* Legal Requirements Start */}
          {activeStep === 3 && (
            <div className="legal-requirements-div">
              <div className="radio-each-div ">
                <label>Fire Alarm</label>
                <label htmlFor="Yes">
                  <input
                    {...register("firealarm")}
                    type="radio"
                    name="firealarm"
                    value="yes"
                    id="Yes"
                    className="radio-each-button"
                  />
                  Yes
                </label>
                <label htmlFor="No">
                  <input
                    {...register("firealarm")}
                    type="radio"
                    name="firealarm"
                    value="no"
                    id="No"
                    className="radio-each-button"
                  />
                  No
                </label>
              </div>
              <div className="radio-each-div ">
                <label>Carbon Monoxide Alarm</label>
                <label htmlFor="Yes">
                  <input
                    {...register("coalarm")}
                    type="radio"
                    name="coalarm"
                    value="yes"
                    id="Yes"
                    className="radio-each-button"
                  />
                  Yes
                </label>
                <label htmlFor="No">
                  <input
                    {...register("coalarm")}
                    type="radio"
                    name="coalarm"
                    value="no"
                    id="No"
                    className="radio-each-button"
                  />
                  No
                </label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div className="input-field-with-title-div ">
                  <label>Select Services</label>
                  <div className="input-field-each">
                    <select
                      {...register("services", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="Freehold">Gas</option>
                      <option value="Leasehold">Electricity</option>
                      <option value="Leasehold">EPC</option>
                      <option value="Leasehold">PAT TEST</option>
                    </select>
                  </div>
                </div>
                <div className="input-field-with-title-div ">
                  <label>Issue Date</label>
                  <input
                    className="input-field-each"
                    type="date"
                    placeholder="Issue Date"
                    {...register("issuedate", {})}
                    display="none"
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Expiry Date</label>
                  <input
                    className="input-field-each"
                    type="date"
                    placeholder="Expire Date"
                    {...register("expiredate", {})}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Legal Requirements End */}

          {/* Property Information End */}
          {/* Agreement Start*/}
          {activeStep === 4 && (
            <div>
              <div className="checkbox-and-text-div">
                <h3>
                  If contract is signed by someone onbehalf of the landlord
                </h3>
                <input
                  type="checkbox"
                  placeholder="check"
                  {...register("check", {})}
                  className="checkbox-input-div"
                />
              </div>

              <div className="agreement-form-section-div">
                <div className="input-field-with-title-div ">
                  <label>Firstname</label>
                  <input
                    className="input-field-each"
                    type="text"
                    placeholder="Firstname"
                    {...register("firstnameother", {})}
                    disabled={watch("check") === false}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Lastname</label>
                  <input
                    className="input-field-each"
                    type="text"
                    placeholder="Lastname"
                    {...register("lastnameother", {})}
                    disabled={watch("check") === false}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Contact Number</label>
                  <input
                    className="input-field-each"
                    type="text"
                    placeholder="Contact Number"
                    {...register("contactnumberother", {})}
                    disabled={watch("check") === false}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Alternative Contact Number</label>
                  <input
                    className="input-field-each"
                    type="text"
                    placeholder="Alternative Contact Number"
                    {...register("alternativecontactnumberother", {})}
                    disabled={watch("check") === false}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Email</label>
                  <input
                    className="input-field-each"
                    type="text"
                    placeholder="Email"
                    {...register("emailother", {})}
                    disabled={watch("check") === false}
                  />
                </div>

                {/* upload agreement docs start  */}

                <div className="input-field-with-title-div ">
                  <label>Copy of Authority</label>
                  <input
                    className="input-field-each"
                    type="file"
                    multiple
                    {...register("copyofauthority", {})}
                    disabled={watch("check") === false}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Proof of ID</label>
                  <input
                    className="input-field-each"
                    type="file"
                    multiple
                    {...register("proofofid", {})}
                  />
                </div>
                <div className="input-field-with-title-div ">
                  <label>Proof of Address</label>
                  <input
                    className="input-field-each"
                    type="file"
                    multiple
                    {...register("proofofaddress", {})}
                  />
                </div>
                {/* <input
                  className="input-field-each"
                  type="file"
                  multiple
                  {...register("copyofagreement", {})}
                /> */}

                <div className="input-field-with-title-div ">
                  <label>Service Required</label>
                  <div className="input-field-each">
                    <select
                      {...register("servicerequired", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="Freehold">Let Only</option>
                      <option value="Leasehold">Let and Rent</option>
                      <option value="Leasehold">Management</option>
                      <option value="Leasehold">Rent to Rent</option>
                      <option value="Leasehold">Guaranteed Rent</option>
                    </select>
                  </div>
                </div>
                {/* upload agreement docs end   */}
              </div>
            </div>
          )}

          {/* Agreement End */}
          {/* <div>{getStepContent(activeStep)}</div> */}

          <div className="form-next-back-submit-button-container">
            <button
              onClick={stepBack}
              className="form-next-back-submit-button-each"
            >
              Back
            </button>
            {/* <button onClick={stepNext}>Next</button> */}
            {activeStep < 1 && (
              <button
                onClick={stepNext}
                display="none"
                className="form-next-back-submit-button-each"
              >
                Next
              </button>
            )}
            {activeStep === 1 && (
              <input
                type="submit"
                className="form-next-back-submit-button-each"
                onClick={() => {
                  alert("Form Submitted");
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandlordFormSeller;
