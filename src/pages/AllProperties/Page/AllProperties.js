import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import HtmlEditor from "../../../components/Editor/HtmlEditor";
import MyEditor from "../../../components/Editor/HtmlEditor";
import Buttons from "../Components/Buttons/Buttons";
import PropertyBriefBox from "../Components/PropertyBriefBox/PropertyBriefBox";
import PropertyLists from "../Components/PropertyLists/PropertyLists";
import "./AllProperties.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
const AllProperties = (props) => {
  const { register, handleSubmit, control } = useForm();
  const { field: input1 } = useController({
    name: "title",
    control,
    defaultValue: EditorState.createEmpty(),
  });
  const { field: input2 } = useController({
    name: "description",
    control,
    defaultValue: EditorState.createEmpty(),
  });

  const onSubmit = (data) => {
    const propertytitle = draftToHtml(
      convertToRaw(input1.value.getCurrentContent())
    );
    const propertydescription = draftToHtml(
      convertToRaw(input2.value.getCurrentContent())
    );
    delete data.title;
    delete data.description;
    const data1 = { ...data, propertytitle, propertydescription };
    console.log(data1);
  };

  return (
    <div className="all-properties-main">
      {/* <Buttons /> */}
      <PropertyBriefBox />
      <PropertyLists />
      {/* <MyEditor /> */}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Editor
          editorState={input1.value}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={input1.onChange}
        />
        <hr />
        <Editor
          editorState={input2.value}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={input2.onChange}
        />
        <hr />

        <input type="text" {...register("housename", {})} />
        <input type="file" {...register("image", {})} />
        <input type="submit" />
      </form> */}
    </div>
  );
};
export default AllProperties;
