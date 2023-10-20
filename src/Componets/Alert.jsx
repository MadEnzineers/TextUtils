import React from "react";

export default function Alert(props) {
  const Capatilize = (text) => {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      {props.alert.msg && (
        <div className="py-3">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show container `}
            role="alert"
          >
            <strong>{Capatilize(props.alert.type)}:</strong>
            &nbsp;{props.alert.msg}
          </div>
        </div>
      )}
    </>
  );
}
