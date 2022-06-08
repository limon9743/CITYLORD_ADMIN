import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./FormForContractorEdit.css";

const FormForContractorEdit = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .put(`https://api.clwapping.co.uk/api/contractor/contractors/${id}`, data)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.clwapping.co.uk/api/contractor/contractors/${id}`
      );
      const newData = await res.data;
      console.log(newData);
      setValue("firstname", newData.firstname);
      setValue("lastname", newData.lastname);
      setValue("contact", newData.contact);
      setValue("altcontact", newData.altcontact);
      setValue("email", newData.email);
      setValue("address1", newData.address1);
      setValue("address2", newData.address2);
      setValue("city", newData.city);
      setValue("postcode", newData.postcode);
      setValue("street", newData.street);
      setValue("carpenter", newData.carpenter);
      setValue("electrician", newData.electrician);
      setValue("plumber", newData.plumber);
      setValue("drywaller", newData.drywaller);
      setValue("plastering", newData.plastering);
      setValue("painter", newData.painter);
      setValue("wallpaperinstaller", newData.wallpaperinstaller);
      setValue("hvac", newData.hvac);
      setValue("mason", newData.mason);
      setValue("excavator", newData.excavator);
      setValue("demolition", newData.demolition);
      setValue("landscapers", newData.landscapers);
      setValue("concretespecialist", newData.concretespecialist);
      setValue("ironworker", newData.ironworker);
      setValue("steelworker", newData.steelworker);
      setValue("tilesetting", newData.tilesetting);
      setValue("floorlaying", newData.floorlaying);
      setValue("glassandglazing", newData.glassandglazing);
    };
    fetchData();
  }, []);

  return (
    <div className="form-with-property-brief-main-div">
      <div>
        <h2>Contractor Form</h2>
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
                  type="number"
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
                  {...register("postcode", {})}
                />
              </div>
              <div className="view-form-input-field-with-title-div">
                <label>Street</label>
                <input
                  className="view-form-input-field-each"
                  type="text"
                  {...register("street", {})}
                />
              </div>
            </div>
            <div className="view-form-viewing-info-div">
              <h3>Speciality in</h3>
              <div className="contractor-checkbox-div">
                <div className="contractor-checkbox-and-text-div">
                  <h4>Carpenter</h4>
                  <input
                    type="checkbox"
                    {...register("carpenter", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Electrician</h4>
                  <input
                    type="checkbox"
                    {...register("electrician", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Plumber</h4>
                  <input
                    type="checkbox"
                    {...register("plumber", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Drywaller</h4>
                  <input
                    type="checkbox"
                    {...register("drywaller", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Plastering</h4>
                  <input
                    type="checkbox"
                    {...register("plastering", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Painter</h4>
                  <input
                    type="checkbox"
                    {...register("painter", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Wallpaper Installer</h4>
                  <input
                    type="checkbox"
                    {...register("wallpaperinstaller", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>HVAC</h4>
                  <input
                    type="checkbox"
                    {...register("hvac", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Mason</h4>
                  <input
                    type="checkbox"
                    {...register("mason", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Roofer</h4>
                  <input
                    type="checkbox"
                    {...register("roofer", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
              </div>
            </div>
            <div className="view-form-viewing-info-div view-form-viewing-info-div-2">
              <div className="contractor-checkbox-div">
                <div className="contractor-checkbox-and-text-div">
                  <h4>Excavator</h4>
                  <input
                    type="checkbox"
                    {...register("excavator", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Demolition</h4>
                  <input
                    type="checkbox"
                    {...register("demolition", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Landscapers</h4>
                  <input
                    type="checkbox"
                    {...register("landscapers", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Concrete Specialist</h4>
                  <input
                    type="checkbox"
                    {...register("concretespecialist", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Ironworker</h4>
                  <input
                    type="checkbox"
                    {...register("ironworker", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Steelworker</h4>
                  <input
                    type="checkbox"
                    {...register("steelworker", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Tile Setting</h4>
                  <input
                    type="checkbox"
                    {...register("tilesetting", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Floor Laying</h4>
                  <input
                    type="checkbox"
                    {...register("floorlaying", {})}
                    className="contractor-checkbox-input-div"
                  />
                </div>
                <div className="contractor-checkbox-and-text-div">
                  <h4>Glass and Glazing</h4>
                  <input
                    type="checkbox"
                    {...register("glassandglazing", {})}
                    className="contractor-checkbox-input-div"
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

export default FormForContractorEdit;
