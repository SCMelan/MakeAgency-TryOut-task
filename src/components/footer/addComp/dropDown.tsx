import Path from "../../../scss/img/Path.svg";
import { useState } from "react";

export const DropMenu = () => {
  const dropdownItems = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "TS" },
    { name: "Redux Toolkit" },
    { name: "SACC/SCSS" },
  ];

  const [activeDrop, setActiveDrop] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Выберите что-нибудь");
  const [activeLi, setActiveLi] = useState(false);

  return (
    <div className="dropdownMenu ">
      <p className="textField font" data-size="P_Lead">
        Выпадающий список
      </p>
      <button
        data-size="P_16"
        className={activeDrop ? "dropdownBtnActive font" : "dropdownBtn font"}
        onClick={() => {
          setActiveDrop(!activeDrop);
        }}
      >
        <p>{dropdownValue}</p>
        <img src={Path} alt="arrow" className="arrow"></img>
      </button>
      <div className={"drop"} data-is-open={activeDrop}>
        <div className="backShadow">
          {dropdownItems.map((dropdownItems) => {
            return (
              <div key={dropdownItems.name} className="dropdownLi">
                <p
                  data-size="P_16"
                  onClick={() => {
                    setDropdownValue(dropdownItems.name);
                    setActiveDrop(!activeDrop);
                    setActiveLi(!activeLi);
                  }}
                  className={
                    activeLi ? "dropdownA activeLi font" : "dropdownA font"
                  }
                >
                  {dropdownItems.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
