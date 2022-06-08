import { Step, StepLabel, Stepper } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import HtmlEditor from "../../Editor/HtmlEditor";
import TextEditor from "../../TextEditor/TextEditor";
import "./ToRent.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import Resizer from "react-image-file-resizer";
import LightBoxImageViewer from "../../LightBoxImageViewer/LightBoxImageViewer";
import ImageContainer from "../../ImageContainer/ImageContainer";

const ToRent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    control,
    unregister,
  } = useForm();
  const { field } = useController({
    name: "editorField",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const onSubmit = (data) => {
    const propertytitle = draftToHtml(
      convertToRaw(field.value.getCurrentContent())
    );
    delete data.editorField;
    const data1 = { ...data, propertytitle };
    console.log(data1);

    // const ToRentProperties = {
    //   propertyinfo: {
    //     housename: data.housename,
    //     landlordname: data.landlordname,
    //     streetnumber: data.streetnumber,
    //     postcode: data.postcode,
    //     city: data.city,
    //     buildingtype: data.buildingtype,
    //     housetype: data.housetype,
    //     bedrooms: data.bedrooms,
    //     bathrooms: data.bathrooms,
    //     floor: data.floor,
    //     lift: data.lift,
    //     driveaway: data.driveaway,
    //     availabledate: data.availabledate,
    //     valuationdate: data.valuationdate,
    //     isfeeapplied: data.isfeeapplied,
    //     lengthofproperty: data.lengthofproperty,
    //     propertystatus: data.propertystatus,
    //     propertycondition: data.propertycondition,
    //     renttype: data.renttype,
    //     servicerequired: data.servicerequired,
    //     rentamount: data.rentamount,
    //     epc: data.epc,
    //     virtualtour1: data.virtualtour1,
    //     virtualtour2: data.virtualtour2,
    //     virtualtour3: data.virtualtour3,
    //     virtualtour4: data.virtualtour4,
    //   },

    //   propertydetails: {
    //     title: data.title,
    //     details: data.details,
    //     features: data.features,
    //     conclusion: data.conclusion,
    //   },

    //   propertyimages: {
    //     image1: data.image1,
    //     image2: data.image2,
    //     image4: data.image4,
    //     image5: data.image5,
    //     image6: data.image6,
    //     image7: data.image7,
    //     image8: data.image8,
    //     image9: data.image9,
    //     image10: data.image10,
    //     image12: data.image12,
    //     image14: data.image14,
    //     image15: data.image15,
    //     image16: data.image16,
    //     image17: data.image17,
    //     image18: data.image18,
    //     image19: data.image19,
    //     image20: data.image20,
    //   },
    // };

    // axios.post(
    //   "https://api.clwapping.co.uk/api/property/torent/add",
    //   ToRentProperties
    // );
  };

  const [activeStep, setActiveStep] = useState(0);

  const stepNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 3) {
      setActiveStep(3);
    }
  };

  const stepBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 0) {
      setActiveStep(0);
    }
  };

  const resizeFile = (file) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };

  const imageOnChange = (e) => {
    try {
      const file = e.target.files[0];
      const image = resizeFile(file);
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="properties-to-rent-main-div">
      <div className="stepper-form-container">
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Property Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Legal Requirements</StepLabel>
          </Step>
          <Step>
            <StepLabel>Agreement</StepLabel>
          </Step>
          <Step>
            <StepLabel>Property Details</StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="newUser">
        {/* <h1>Properties to Rent</h1> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="property-information-div">
            {activeStep === 0 && (
              <div className="property-information-div-separated">
                <div className="input-field-with-title-div">
                  <label>House Name/Number</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("housename", {})}
                  />
                </div>

                <div className="input-field-with-title-div">
                  <label>Landlord Name</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("landlordname", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Street/Road Number</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("streetnumber", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Postcode</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("postcode", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>City</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("city", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
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
                <div className="input-field-with-title-div">
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
                <div className="input-field-with-title-div">
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

                <div className="input-field-with-title-div">
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

                <div className="input-field-with-title-div">
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
                <div className="input-field-with-title-div">
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
                <div className="input-field-with-title-div">
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
                <div className="input-field-with-title-div">
                  <label>Available Date</label>
                  <input
                    className="input-field-each"
                    type="date"
                    // placeholder="Available Date"
                    {...register("availabledate", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Valuation Date</label>
                  <input
                    className="input-field-each"
                    type="date"
                    // placeholder="Valuation Date"
                    {...register("valuationdate", {})}
                  />
                </div>
                {/* <div className="input-field-with-title-div">
                  <label>House Size in sqm.</label>
                  <input
                    className="input-field-each"
                    type="number"
                    placeholder="eg. 1000"
                    {...register("valuationdate", {})}
                  />
                </div> */}
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
                <div className="input-field-with-title-div">
                  <label>Is Fee Applied ?</label>

                  <div className="input-field-each">
                    <select
                      {...register("isfeeapplied", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div className="input-field-with-title-div">
                  <label>Length of Property</label>

                  <div className="input-field-each">
                    <select
                      {...register("lengthofproperty", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="shortlet">Short Let</option>
                      <option value="longlet">Long Let</option>
                    </select>
                  </div>
                </div>

                <div className="input-field-with-title-div">
                  <label>Property Status</label>
                  <div className="input-field-each">
                    <select
                      {...register("propertystatus", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="tolet">To Let</option>
                      <option value="underoffer">Under Offer</option>
                      <option value="letagreed">Let Agreed</option>
                    </select>
                  </div>
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
                      <option value="partfurnished">Part Furnished</option>
                      <option value="furnished">Furnished</option>
                      <option value="unfurnished">Unfurnished</option>
                    </select>
                  </div>
                </div>

                <div className="input-field-with-title-div">
                  <label>Rent Type</label>
                  <div className="input-field-each">
                    <select
                      {...register("renttype", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="perweek">Per Week</option>
                      <option value="permonth">Per Month</option>
                    </select>
                  </div>
                </div>
                <div className="input-field-with-title-div">
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
                      <option value="perweek">Let Only</option>
                      <option value="permonth">Let and Rent</option>
                      <option value="perweek">Management</option>
                      <option value="permonth">Rent to Rent</option>
                      <option value="permonth">Guaranteed Rent</option>
                    </select>
                  </div>
                </div>

                <div className="input-field-with-title-div">
                  <label>Rent Amount in £</label>
                  <input
                    className="input-field-each"
                    type="number"
                    // placeholder="Rent Amount in £"
                    {...register("rentamount", {})}
                    // pattern="[0-9].{2}"
                  />
                </div>

                {/* property files uploads start */}

                <div className="input-field-with-title-div">
                  <label>
                    Floorplans
                    <span style={{ fontSize: "12px" }}>
                      (You can select multiple files at a time)
                    </span>
                  </label>

                  <input
                    className="input-field-each"
                    type="file"
                    multiple
                    {...register("floorplans", {
                      onChange: (e) => {
                        imageOnChange(e, "floorplans");
                      },
                    })}

                    // {...register("floorplans", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>
                    EPC
                    <span style={{ fontSize: "12px" }}>
                      (You can select multiple files at a time)
                    </span>
                  </label>
                  <input
                    className="input-field-each"
                    type="file"
                    multiple
                    {...register("epc", {})}
                  />
                </div>

                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-01</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtour1", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-02</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtour2", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-03</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtour3", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-04</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtour4", {})}
                  />
                </div>
              </div>
            )}

            {/* Legal Requirements Start */}
            {activeStep === 1 && (
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

            {/* Agreement Start*/}
            {activeStep === 2 && (
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

            {/* Legal Requirements End */}

            {/* <div className="devider"></div> */}

            {/* Describe your property for website start*/}
            {activeStep === 3 && (
              <div className="proeprty-description-div-main-container">
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Details</label>

                    {/* HTML EDITOR DIV START */}
                    <Editor
                      editorState={field.value}
                      // toolbarClassName="toolbarClassName"
                      // wrapperClassName="wrapperClassName"
                      // editorClassName="editorClassName"
                      onEditorStateChange={field.onChange}
                      onBlur={field.onBlur}
                      editorStyle={{ height: "400px" }}
                    />
                    <hr />
                  </div>

                  {/* HTML EDITOR DIV END */}

                  {/* {console.log(editorState)} */}
                  {/* <div className="input-field-with-title-div">
                    <label>Property Details</label>
                    <HtmlEditor {...register("propertdetails", {})} />
                  </div>
                </div>
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Features</label>
                    <HtmlEditor {...register("propertfeatures", {})} />
                  </div>
                  <div className="input-field-with-title-div">
                    <label>Property Conslusion</label>
                    <HtmlEditor {...register("propertyconclusion", {})} />
                  </div> */}
                </div>
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Images</label>
                    <input
                      className="input-field-each"
                      type="file"
                      multiple
                      {...register("propertyimages", {})}
                    />
                  </div>
                </div>
                <div className="input-field-with-title-div">
                  <label>Image Previews</label>

                  <ImageContainer />
                </div>
              </div>
            )}

            {/* Describe ur property for website end */}
          </div>

          <div className="to-rent-form-next-back-submit-button-container">
            <button
              onClick={stepBack}
              className="to-rent-form-next-back-submit-button-each"
            >
              Back
            </button>
            {/* <button onClick={stepNext}>Next</button> */}
            {activeStep < 3 && (
              <button
                onClick={stepNext}
                display="none"
                className="to-rent-form-next-back-submit-button-each"
              >
                Next
              </button>
            )}
            {activeStep === 3 && (
              <input
                type="submit"
                className="to-rent-form-next-back-submit-button-each"
                onClick={() => {
                  alert("Form Submitted");
                }}
              />
            )}
          </div>

          {/* <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <input
              type="submit"
              className="form-next-back-submit-button-each"
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ToRent;
