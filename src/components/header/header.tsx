import { useState } from "react";

import { BurgerContent } from "./burgerContent";

import AgencyLogo from "../../scss/img/logo.jpg";

export const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <>
      <div className="headerBody">
        <div className="leftBlock">
          <img src={AgencyLogo} alt="AgencyLogo" className="AgencyLogo" />
          <p className="surname font" data-size="P_14">
            Антонов{" "}
            <p className="nameAndPatronymic font" data-size="P_14">
              Кирилл Юрьевич
            </p>
          </p>
        </div>
        <button
          className={activeBurger ? "burgerActive" : "burger"}
          onClick={() => {
            setActiveBurger(!activeBurger);
          }}
        >
          <div className="burgerBtn">
            <span />
          </div>
        </button>
      </div>
      <div className={activeBurger ? "menu active" : "menu"}>
        <BurgerContent />
      </div>
    </>
  );
};
