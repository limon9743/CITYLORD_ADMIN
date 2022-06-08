import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./MessageToContractorForm.css";

const MessageToContractorForm = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    const formData = new FormData();
    formData.append("tasktitle", data.tasktitle);
    formData.append("contractorname", data.contractorname);
    formData.append("contactnumber", data.contactnumber);
    formData.append("description", data.description);
    formData.append("image1", data.image1[0]);
    formData.append("image2", data.image2[0]);
    formData.append("otherinfo", data.otherinfo);
    axios.post(
      "https://api.clwapping.co.uk/api/admintocontractor/newadmintocontractor/",
      formData
    );
    console.log(formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.clwapping.co.uk/api/contractor/contractors/${id}`
      );
      const newData = await res.data;
      // setTenant(newData);
      setValue("contractorname", newData.firstname);
      setValue("contactnumber", newData.contact);
    };
    fetchData();
  }, []);

  return (
    <div className="form-with-property-brief-main-div">
      <div>
        <h2>Message To Contractor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="view-form-main-div">
            <div className="view-form-personal-info-div">
              <div className="view-form-input-field-with-title-div">
                <label>Task Title</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("tasktitle", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Contractor Name</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("contractorname", {})}
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
                <label>Task Description</label>
                <textarea
                  className="view-form-textarea-field-each"
                  type="text"
                  {...register("description", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Property Image-01</label>
                <input
                  className="view-form-input-field-each"
                  type="file"
                  {...register("image1", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Property Image-02</label>
                <input
                  className="view-form-input-field-each"
                  type="file"
                  {...register("image2", {})}
                />
              </div>

              <div className="view-form-input-field-with-title-div">
                <label>Other Info.</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("otherinfo", {})}
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
                    Send
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

export default MessageToContractorForm;
