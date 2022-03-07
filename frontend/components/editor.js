import React, { useEffect, useRef } from "react";

export default function Editor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <div className="moto-widget-contact_form-field moto-widget-contact_form-input">
          <CKEditor
            type=""
            name={name}
            editor={ClassicEditor}
            config={{
              toolbar: ["heading", "bold", "italic", "uploadImage"],
              ckfinder: {
                uploadUrl: "http://127.0.0.1:8000/ckeditor/upload/",
              },
            }}
            data={value}
            onChange={(event, editor) => {
              const data = editor.getData();
              // console.log({ event, editor, data })
              onChange(data);
            }}
          />
        </div>
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}
