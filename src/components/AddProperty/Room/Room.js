import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HtmlEditor from "../../Editor/HtmlEditor";
import TextEditor from "../../TextEditor/TextEditor";
import "./Room.css";

const Room = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);

  const [activeStep, setActiveStep] = useState(0);

  const stepNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      setActiveStep(2);
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
    <div className="newUser">
      <div className="stepper-form-container">
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Property Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Room Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Others</StepLabel>
          </Step>
        </Stepper>
      </div>

      {/* <h1>Rooms</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <div className="property-information-div">
            <div className="input-field-with-title-div">
              <label>House Name/Number</label>
              <input
                className="input-field-each"
                type="text"
                // placeholder="House Name/Number"
                {...register("housenamenumber", {})}
              />
            </div>
            <div className="input-field-with-title-div">
              <label>Landlord Name</label>
              <input
                className="input-field-each"
                type="text"
                // placeholder="Landlord Name"
                {...register("landlordname", {})}
              />
            </div>
            <div className="input-field-with-title-div">
              <label>Street/Road Number</label>
              <input
                className="input-field-each"
                type="text"
                // placeholder="Street/Road Number"
                {...register("roadnumber", {})}
              />
            </div>
            <div className="input-field-with-title-div">
              <label>Postcode</label>
              <input
                className="input-field-each"
                type="text"
                // placeholder="Postcode"
                {...register("postcode", {})}
              />
            </div>
            <div className="input-field-with-title-div">
              <label>City</label>
              <input
                className="input-field-each"
                type="text"
                // placeholder="City"
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
              <label>Bed</label>
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
                </select>
              </div>
            </div>

            {/* <div className="input-field-with-title-div">
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
          </div> */}

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

            {/* <div className="input-field-with-title-div">
            <label>Floorplans</label>
            <input
              className="input-field-each"
              type="file"
              multiple
              {...register("floorplans", {})}
            />
          </div> */}
            <div className="input-field-with-title-div">
              <label>EPC</label>
              <input
                className="input-field-each"
                type="file"
                multiple
                {...register("epc", {})}
              />
            </div>

            <div className="input-field-with-title-div">
              <label>Virtual Tour URL</label>
              <input
                className="input-field-each"
                type="url"
                // placeholder="Virtual Tour URL"
                {...register("virtualtoururl", {})}
              />
            </div>
          </div>
        )}
        {/* Describe ur property for website end */}
        {activeStep === 1 && (
          <div>
            <div className="html-editor-div">
              <div className="input-field-with-title-div">
                <label>Property Title</label>
                <HtmlEditor />
              </div>
              <div className="input-field-with-title-div">
                <label>Property Details</label>
                <HtmlEditor />
              </div>
            </div>
            <div className="html-editor-div">
              <div className="input-field-with-title-div">
                <label>Property Features</label>
                <HtmlEditor />
              </div>
              <div className="input-field-with-title-div">
                <label>Property Conslusion</label>
                <HtmlEditor />
              </div>
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
          </div>
        )}

        {/* Room info including extra cost, amenities, etc. start */}

        {activeStep === 2 && (
          <div>
            <div className="extra-cost-amenities-etc-div-main">
              <div className="extra-cost-amenities-etc-div-each">
                <div className="input-field-with-title-div">
                  <h4>Extra Costs</h4>
                  <label>Deposit in £</label>
                  <input
                    className="input-field-each"
                    type="number"
                    multiple
                    {...register("deposit", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Bills Included</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
              </div>
              <div className="devider-extra-cost-amenities-etc"></div>
              <div className="extra-cost-amenities-etc-div-each">
                <div className="input-field-with-title-div">
                  <h4>Amenities</h4>
                  <label>Furnishings</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="yes">Furnished</option>
                      <option value="no">Part Furnished</option>
                      <option value="no">Unfurnished</option>
                    </select>
                  </div>
                </div>
                <div className="input-field-with-title-div">
                  <label>Parking</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Garage</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Garden/terrace</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Balcony/Patio</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Disabled access</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Living room</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
                  <label>Broadband included</label>
                  <div className="input-field-each">
                    <select
                      {...register("billsincluded", {})}
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
              </div>
              <div className="devider-extra-cost-amenities-etc"></div>
              <div className="extra-cost-amenities-etc-div-each">
                <div className="input-field-with-title-div">
                  <h4>Current household</h4>
                  <label>Flatmates</label>
                  <input
                    className="input-field-each"
                    type="number"
                    multiple
                    {...register("flatmates", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Total rooms</label>
                  <input
                    className="input-field-each"
                    type="number"
                    multiple
                    {...register("totalrooms", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Smoker?</label>
                  <div className="input-field-each">
                    <select
                      {...register("smoker", {})}
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
                  <label>Any pets?</label>
                  <div className="input-field-each">
                    <select
                      {...register("pets", {})}
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
                  <label>Language</label>
                  <input
                    className="input-field-each"
                    type="text"
                    multiple
                    {...register("language", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Occupation</label>
                  <input
                    className="input-field-each"
                    type="text"
                    multiple
                    {...register("occupation", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>Gender</label>
                  <input
                    className="input-field-each"
                    type="text"
                    multiple
                    {...register("gender", {})}
                  />
                </div>
              </div>
              <div className="devider-extra-cost-amenities-etc"></div>
              <div className="extra-cost-amenities-etc-div-each">
                <div className="input-field-with-title-div">
                  <h4>New flatmate preferences</h4>
                  <label>Couples OK?</label>
                  <div className="input-field-each">
                    <select
                      {...register("couplesnewmate", {})}
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
                  <label>Smoking OK?</label>
                  <div className="input-field-each">
                    <select
                      {...register("smokingnewmate", {})}
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
                  <label>Pets OK?</label>
                  <div className="input-field-each">
                    <select
                      {...register("petsnewmate", {})}
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
                  <label>Occupation</label>
                  <input
                    className="input-field-each"
                    type="text"
                    multiple
                    {...register("occupationnewmate", {})}
                  />
                </div>
                <div className="input-field-with-title-div">
                  <label>References?</label>
                  <div className="input-field-each">
                    <select
                      {...register("references", {})}
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
                  <label>Gender</label>
                  <div className="input-field-each">
                    <select
                      {...register("gendernewmate", {})}
                      style={{
                        border: "none",
                        height: "20px",
                        width: "250px",
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Select
                      </option>
                      <option value="yes">Male</option>
                      <option value="no">Female</option>
                      <option value="no">Male or Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Room info including extra cost, amenities, etc. end*/}
          </div>
        )}
        <div className="to-rent-form-next-back-submit-button-container">
          <button
            onClick={stepBack}
            className="to-rent-form-next-back-submit-button-each"
          >
            Back
          </button>
          {/* <button onClick={stepNext}>Next</button> */}
          {activeStep < 2 && (
            <button
              onClick={stepNext}
              display="none"
              className="to-rent-form-next-back-submit-button-each"
            >
              Next
            </button>
          )}
          {activeStep === 2 && (
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
  );
};

export default Room;
