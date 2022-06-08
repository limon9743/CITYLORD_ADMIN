import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useForm, useController } from "react-hook-form";

const HtmlEditor = (props) => {
  // const { control } = useForm();
  // const { field } = useController({
  //   name: "editorField",
  //   control,
  //   defaultValue: EditorState.createEmpty(),
  // });

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  //   draftToHtml(convertToRaw(editorState.getCurrentContent()));
  //   const newEditorState2 = { newEditorState };
  //   console.log(newEditorState2);
  // };

  return (
    <div>
      <Editor
        editorState={props.editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={props.onEditorStateChange}
      />
      <hr />
    </div>
  );
};

export default HtmlEditor;
