import React, { useState } from "react";

export default function TextArea(props) {
  //Handle text value
  const handleTextChange = (event) => {
    if (event.target.value !== null) {
      setText(event.target.value);
    } else {
      setText("");
    }
  };

  //Handle text to UpperCase value
  const handleUpText = (event) => {
    let newText = text.toUpperCase();
    if (text.length > 1) {
      setText(newText.toUpperCase());
      props.ShowAlert("Text Has Been Converted To Upper Case!", "success");
    } else {
      props.ShowAlert("Enter Something To Convert In Upper Case!", "warning");
    }
    setTimeout(function () {
      props.ShowAlert(null);
    }, 3000);
  };
  //Handle text to UpperCase value
  const handleLowText = (event) => {
    let newText = text.toUpperCase();
    if (text.length > 1) {
      setText(newText.toLowerCase());
      props.ShowAlert("Text Has Been Converted To Lower Case!", "success");
    } else {
      props.ShowAlert("Enter Something To Convert In Lower Case!", "warning");
    }
    setTimeout(function () {
      props.ShowAlert(null);
    }, 3000);
  };

  const handleExtraSpace = (event) => {
    if (text.length > 1) {
      let newText = text.replace(/\s+/g, " ").trim();
      setText(newText);
      props.ShowAlert("Removed! Extra Spaaxe", "success");
    } else {
      props.ShowAlert("Enter Something To Removed! Extra Space", "warning");
    }
    setTimeout(function () {
      props.ShowAlert(null);
    }, 3000);
  };

  const handleClearBox = (event) => {
    if (text.length > 1) {
      setText(" ");
      props.ShowAlert("Box Has Been Cleared!!", "success");
    } else {
      props.ShowAlert("Already Cleared!!", "danger");
    }
    setTimeout(function () {
      props.ShowAlert(null);
    }, 3000);
  };

  //copyText fron textarea
  const handleCopyText = (event) => {
    const copyText = document.getElementById("TextArea").value;
    navigator.clipboard.writeText(copyText);
    if (text.length > 1) {
      setText(copyText);
      props.ShowAlert("Text Has Been Copied!!", "success");
    } else {
      props.ShowAlert("Enter Something For Copy!!", "warning");
    }
    setTimeout(function () {
      props.ShowAlert(null);
    }, 3000);
  };

  // const showAlert = (msg, type) => {
  //   return <Alert message={msg} type={type} />;
  // };

  // const [Alert, setAlert] = useState(null);
  const [copy, setCopy] = useState(false);
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-9">
            <h2 className={`text-${props.color}`}>
              Try TextUtils - Word Counter, Character Counter, Remove Extra
              space
            </h2>
          </div>
          <div className="col-md-3">
            {copy ? (
              <div className="text-success text-center copedtext" role="alert">
                <b>Text Has Been Copied</b>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="TextArea"
            style={{
              minHeight: "200px",
              backgroundColor: props.color === "light" ? "#ebf0ee" : "#ebf0ee",
            }}
            value={text}
            onChange={handleTextChange}
          ></textarea>
        </div>
        <div className="py-2">
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={handleUpText}
          >
            Enable Upper Case
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            style={{ marginLeft: "5px" }}
            onClick={handleLowText}
          >
            Enable Lower Case
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            style={{ marginLeft: "5px" }}
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            style={{ marginLeft: "5px" }}
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            style={{ marginLeft: "5px" }}
            onClick={handleClearBox}
          >
            Clear Box
          </button>
        </div>

        <div className={`py-3 text-${props.color}`}>
          <p>
            <b>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
            </b>
            Word and <b>{text.replace(/\s/g, "").length}</b> Characters
          </p>
          <p>
            <b>Space Count</b> :{text.split(" ").length - 1}
          </p>
          <p>
            <b>Minutes Read</b> :
            {text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length * 0.008}
          </p>
          <hr />
          <h3>Preview :</h3> {text === "" ? "Text Will Preview Here" : text}
        </div>
      </div>
    </>
  );
}
