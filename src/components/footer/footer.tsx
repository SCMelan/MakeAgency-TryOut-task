import { SetStateAction, useState, Dispatch } from "react";
import { Accordion } from "./addComp/accordionComp";
import { Button } from "./addComp/btnComp";
import { CheckRadio } from "./addComp/checkAndRadio";
import { DropMenu } from "./addComp/dropDown";
import { Email } from "./addComp/emailComponent";

export interface IValid {
  isEmailValid: boolean;
  setIsValid?: Dispatch<SetStateAction<boolean>>;
}

export const Footer = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  return (
    <div className="footerBody">
      <p data-size="H2" className="UI font">
        UI:
      </p>
      <Email isEmailValid={isEmailValid} setIsValid={setIsEmailValid} />
      <DropMenu />
      <Button isEmailValid={isEmailValid} />
      <CheckRadio />
      <Accordion />
    </div>
  );
};
