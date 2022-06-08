import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const TextEditor = () => {
  const [editorState, setEditorState] = useState(convertFromRaw(content));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
