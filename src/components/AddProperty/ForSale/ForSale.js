import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import HtmlEditor from "../../Editor/HtmlEditor";
import TextEditor from "../../TextEditor/TextEditor";
import "./ForSale.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const ForSale = () => {
  const [floorPlan01, setFloorPlan01] = useState();
  const [floorPlan02, setFloorPlan02] = useState();
  const [floorPlan03, setFloorPlan03] = useState();
  const [floorPlan04, setFloorPlan04] = useState();
  const [epcImage, setEpcImage] = useState(null);
  const [propertyImage1, setPropertyImage1] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    control,
  } = useForm();

  const { field: title } = useController({
    name: "propertytitle",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const { field: details } = useController({
    name: "propertydetails",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const { field: features } = useController({
    name: "propertyfeatures",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const { field: conclusion } = useController({
    name: "propertyconclusion",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const propertyTitle = draftToHtml(
    convertToRaw(title.value.getCurrentContent())
  );

  const propertyDetails = draftToHtml(
    convertToRaw(details.value.getCurrentContent())
  );
  const propertyFeatures = draftToHtml(
    convertToRaw(features.value.getCurrentContent())
  );

  const propertyConclusion = draftToHtml(
    convertToRaw(conclusion.value.getCurrentContent())
  );

  const onSubmit = (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("housenamenumber", data.housenamenumber);
    formData.append("landlordname", data.landlordname);
    formData.append("roadnumber", data.roadnumber);
    formData.append("postcode", data.postcode);
    formData.append("city", data.city);
    formData.append("buildingtype", data.buildingtype);
    formData.append("housetype", data.housetype);
    formData.append("bedrooms", data.bedrooms);
    formData.append("bathrooms", data.bathrooms);
    formData.append("floor", data.floor);
    formData.append("lift", data.lift);
    formData.append("driveway", data.driveway);
    formData.append("availabledate", data.availabledate);
    formData.append("valuationdate", data.valuationdate);
    formData.append("propertystatus", data.propertystatus);
    formData.append("propertycondition", data.propertycondition);
    formData.append("renttype", data.renttype);
    formData.append("rentamount", data.rentamount);
    formData.append("floorplan01", floorPlan01);
    formData.append("floorplan02", floorPlan02);
    formData.append("floorplan03", floorPlan03);
    formData.append("floorplan04", floorPlan04);
    formData.append("epc", epcImage);
    formData.append("virtualtoururl1", data.virtualtoururl1);
    formData.append("virtualtoururl2", data.virtualtoururl2);
    formData.append("virtualtoururl3", data.virtualtoururl3);
    formData.append("virtualtoururl4", data.virtualtoururl4);
    formData.append("propertytitle", propertyTitle);
    formData.append("propertydetails", propertyDetails);
    formData.append("propertyfeatures", propertyFeatures);
    formData.append("propertyconclusion", propertyConclusion);
    formData.append("propertyimage1", propertyImage1);
    axios.post(
      "https://api.clwapping.co.uk/api/propertyforsale/addproperty",
      formData
    );
  };

  // Floorplan Resize and Custom onChnage

  const resizeFloorPlan01 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setFloorPlan01(uri);
      },
      "file"
    );

  const OnChangeFloorPlan01 = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedFloorPlan01 = resizeFloorPlan01(file);
      setFloorPlan01(resizedFloorPlan01);
    } catch (err) {
      console.log(err);
    }
  };
  const resizeFloorPlan02 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setFloorPlan02(uri);
      },
      "file"
    );

  const OnChangeFloorPlan02 = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedFloorPlan02 = resizeFloorPlan02(file);
      setFloorPlan02(resizedFloorPlan02);
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFloorPlan03 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setFloorPlan03(uri);
      },
      "file"
    );

  const OnChangeFloorPlan03 = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedFloorPlan03 = resizeFloorPlan03(file);
      setFloorPlan03(resizedFloorPlan03);
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFloorPlan04 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setFloorPlan04(uri);
      },
      "file"
    );

  const OnChangeFloorPlan04 = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedFloorPlan04 = resizeFloorPlan04(file);
      setFloorPlan04(resizedFloorPlan04);
    } catch (err) {
      console.log(err);
    }
  };

  // Floorplan Resize and Custom onChnage End

  // EPC Image Resize and Custom onChnage

  const resizeEpcImage = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setEpcImage(uri);
      },
      "file"
    );

  const OnChangeEpcImage = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedEpcImage = resizeEpcImage(file);
      setEpcImage(resizedEpcImage);
    } catch (err) {
      console.log(err);
    }
  };

  // EPC Image Resize and Custom onChnage End

  // Property Image Resize and Custom onChnage Start

  const resizePropertyImage1 = (file) =>
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setPropertyImage1(uri);
      },
      "file"
    );

  const OnChangePropertyImage1 = (e) => {
    try {
      const file = e.target.files[0];
      console.log(file);
      const resizedPropertyImage1 = resizePropertyImage1(file);
      setPropertyImage1(resizedPropertyImage1);
    } catch (err) {
      console.log(err);
    }
  };

  // Property Image Resize and Custom onChnage End

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

  return (
    <div className="properties-to-rent-main-div">
      <div className="stepper-form-container">
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Property Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Property Details</StepLabel>
          </Step>
        </Stepper>
      </div>
      <div className="newUser">
        <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <div className="property-information-div">
            {activeStep === 0 && (
              <div className="for-sale-property-information-div">
                <div className="input-field-with-title-div">
                  <label>House Name/Number</label>
                  <input
                    className="input-field-each"
                    type="text"
                    {...register("housenamenumber", {})}
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
                    {...register("roadnumber", {})}
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
                    {...register("availabledate", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Valuation Date</label>
                  <input
                    className="input-field-each"
                    type="date"
                    {...register("valuationdate", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>House Size in sqm.</label>
                  <input
                    className="input-field-each"
                    type="number"
                    placeholder="eg. 1000"
                    {...register("valuationdate", {})}
                  />
                </div>
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

                {/* <div className="input-field-with-title-div">
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
                      <option value="yes">Short Let</option>
                      <option value="no">Long Let</option>
                    </select>
                  </div>
                </div> */}

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
                  <label>Rent Amount in £</label>
                  <input
                    className="input-field-each"
                    type="number"
                    {...register("rentamount", {})}
                  />
                </div>

                {/* property files uploads start */}

                <div className="input-field-with-title-div">
                  <label>Floorplan-01</label>
                  <input
                    className="input-field-each"
                    type="file"
                    {...register("floorplan01", {
                      onChange: (e) => {
                        OnChangeFloorPlan01(e, "floorplan01");
                      },
                    })}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Floorplan-02</label>
                  <input
                    className="input-field-each"
                    type="file"
                    {...register("floorplan02", {
                      onChange: (e) => {
                        OnChangeFloorPlan02(e, "floorplan02");
                      },
                    })}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Floorplan-03</label>
                  <input
                    className="input-field-each"
                    type="file"
                    {...register("floorplan03", {
                      onChange: (e) => {
                        OnChangeFloorPlan03(e, "floorplan03");
                      },
                    })}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Floorplan-04</label>
                  <input
                    className="input-field-each"
                    type="file"
                    {...register("floorplan04", {
                      onChange: (e) => {
                        OnChangeFloorPlan04(e, "floorplan04");
                      },
                    })}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>EPC</label>
                  <input
                    className="input-field-each"
                    type="file"
                    {...register("epc", {
                      onChange: (e) => {
                        OnChangeEpcImage(e, "epc");
                      },
                    })}
                  />
                </div>

                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-01</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtoururl1", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-02</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtoururl2", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-03</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtoururl3", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Virtual Tour URL-04</label>
                  <input
                    className="input-field-each"
                    type="url"
                    {...register("virtualtoururl4", {})}
                  />
                </div>
              </div>
            )}

            {/* <div className="devider "></div> */}

            {/* Describe your property for website start*/}

            {/* <TextEditor /> */}
            {/* <div className="proeprty-description-div-main-container">
            <div className="proeprty-description-div">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="input-field-with-title-div">
                  <label>Property Title</label>
                  <input
                    className="input-field-each"
                    type="text"
                    
                    {...register("propertytitle", {})}
                    
                  />
                </div>
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
                <label>Property Details</label>
                <textarea
                  className="input-field-each-textarea"
                  type="textarea"
                  
                  {...register("propertytitle", {})}
                />
              </div>
              <div className="input-field-with-title-div">
                <label>Property Features</label>
                <textarea
                  className="input-field-each-textarea"
                  type="textarea"
                  
                  {...register("propertyfeatures", {})}
                />
              </div>
              <div className="input-field-with-title-div">
                <label>Property Conslusion</label>
                <textarea
                  className="input-field-each-textarea"
                  type="textarea"
                  
                  {...register("propertyconslusion", {})}
                />
              </div>
            </div>
          </div> */}
            {/* Describe ur property for website end */}
            {activeStep === 1 && (
              <div className="proeprty-description-div-main-container">
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Title</label>
                    <Editor
                      editorState={title.value}
                      // toolbarClassName="toolbarClassName"
                      // wrapperClassName="wrapperClassName"
                      // editorClassName="editorClassName"
                      onEditorStateChange={title.onChange}
                      onBlur={title.onBlur}
                      editorStyle={{ height: "500px" }}
                    />
                    <hr />
                  </div>
                  <div className="input-field-with-title-div">
                    <label>Property Details</label>
                    <Editor
                      editorState={details.value}
                      // toolbarClassName="toolbarClassName"
                      // wrapperClassName="wrapperClassName"
                      // editorClassName="editorClassName"
                      onEditorStateChange={details.onChange}
                      onBlur={details.onBlur}
                      editorStyle={{ height: "500px" }}
                    />
                    <hr />
                  </div>
                </div>
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Features</label>
                    <Editor
                      editorState={features.value}
                      // toolbarClassName="toolbarClassName"
                      // wrapperClassName="wrapperClassName"
                      // editorClassName="editorClassName"
                      onEditorStateChange={features.onChange}
                      onBlur={features.onBlur}
                      editorStyle={{ height: "500px" }}
                    />
                    <hr />
                  </div>
                  <div className="input-field-with-title-div">
                    <label>Property Conclusion</label>
                    <Editor
                      editorState={conclusion.value}
                      // toolbarClassName="toolbarClassName"
                      // wrapperClassName="wrapperClassName"
                      // editorClassName="editorClassName"
                      onEditorStateChange={conclusion.onChange}
                      onBlur={conclusion.onBlur}
                      editorStyle={{ height: "500px" }}
                    />
                    <hr />
                  </div>
                </div>
                <div className="html-editor-div">
                  <div className="input-field-with-title-div">
                    <label>Property Image-01</label>
                    <input
                      className="input-field-each"
                      type="file"
                      {...register("propertyimage01", {
                        onChange: (e) => {
                          OnChangePropertyImage1(e, "propertyimage01");
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="to-rent-form-next-back-submit-button-container">
            <button
              onClick={stepBack}
              className="to-rent-form-next-back-submit-button-each"
            >
              Back
            </button>
            {/* <button onClick={stepNext}>Next</button> */}
            {activeStep < 1 && (
              <button
                onClick={stepNext}
                display="none"
                className="to-rent-form-next-back-submit-button-each"
              >
                Next
              </button>
            )}
            {activeStep === 1 && (
              <input
                type="submit"
                className="to-rent-form-next-back-submit-button-each"
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

export default ForSale;
