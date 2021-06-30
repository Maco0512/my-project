import React, { useRef, useState, useEffect } from "react";

export default function ImageUploader(props) {
  const [files, setFiles] = useState([null]);
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      return;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };
  // const pickImageHandler = () => {
  //   filePickerRef.current.click();
  // };

  let fileArray = [];

  const uploadMultipleFiles = (e) => {
    console.log(e.target.files);
    let fileObj = e.target.files;
    for (let i = 0; i < fileObj.length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[i]));
    }
    console.log(fileArray);
    setFiles(fileArray);
  };
  return (
    <div className="form-control">
      <input
        multiple
        id={props.id}
        {...props.register("images")}
        // ref={filePickerRef}
        // style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jprg"
        onChange={uploadMultipleFiles}
      />
      <div className={`image-upload ${props.center} && 'center`}>
        <div className={"image-upload__preview"}>
          {/* {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image</p>} */}
          <div className="multi-preview">
            {files &&
              files.map((url, i) => <img key={i} src={url} alt="..." />)}
          </div>
        </div>
        {/* <button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </button> */}
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
}
