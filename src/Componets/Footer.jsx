import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className={`pb-3  bg-${props.color}`}>
        <footer>
          <ul className="nav justify-content-center border-bottom ">
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 text-${props.color}`}>
                TextUtils
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 text-${props.color}`}>
                About
              </a>
            </li>
          </ul>
          <p className={`text-center text-${props.color}`}>
            MadEnzineers © 2023 Company, Inc
          </p>
        </footer>
      </div>
    </>
  );
}
