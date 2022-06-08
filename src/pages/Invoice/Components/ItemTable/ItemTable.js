import React, { useState } from "react";
import "./ItemTable.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ItemTable = () => {
  const [inputFields, setInputFields] = useState([
    { desc: "", qty: "", rate: "", amount: "" },
  ]);

  const handleChangeInput = (e, index) => {
    const newInputFields = [...inputFields];
    newInputFields[index][e.target.name] = e.target.value;

    newInputFields[index].amount =
      newInputFields[index].qty * newInputFields[index].rate;
    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { desc: "", qty: "", rate: "", amount: "" },
    ]);
  };
  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };
  return (
    <div>
      <div className="item-table-heading">
        <h4>Item Description</h4>
        <h4>Qty</h4>
        <h4>Rate</h4>
        <h4>Amount</h4>
      </div>
      {inputFields.map((item, index) => (
        <div className="table-row">
          <textarea
            name="desc"
            className="text-area-css"
            placeholder="Ietm/Description"
            value={item.desc}
            onChange={(e) => handleChangeInput(e, index)}
          ></textarea>
          <input
            name="qty"
            type="number"
            className="table-row-input-field"
            value={item.qty}
            onChange={(e) => handleChangeInput(e, index)}
          ></input>
          <input
            name="rate"
            type="number"
            className="table-row-input-field"
            value={item.rate}
            onChange={(e) => handleChangeInput(e, index)}
          ></input>
          <input
            name="amount"
            type="number"
            className="table-row-input-field"
            value={item.amount}
            onChange={(e) => handleChangeInput(e, index)}
          ></input>
        </div>
      ))}
      <div className="add-and-remove-icons-container">
        <RemoveIcon
          onClick={() => {
            handleRemoveFields();
          }}
        />
        <AddIcon
          onClick={() => {
            handleAddFields();
          }}
        />
      </div>
      <div className="add-note-and-total-div">
        <div className="add-note-div">
          <label>Add Note</label>
          <textarea
            name="note"
            className="text-area-css"
            placeholder="Ietm/Description"
          ></textarea>
        </div>
        <div className="sub-total-div">
          <div className="sub-total-heading-and-field-div">
            <label>Sub Total</label>
            <input type="number" className="sub-total-input-field" />
          </div>
          <div className="sub-total-heading-and-field-div">
            <label>Others(%)</label>
            <input type="number" className="sub-total-input-field" />
          </div>
          <div className="sub-total-heading-and-field-div">
            <label>Total</label>
            <input type="number" className="sub-total-input-field" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTable;
