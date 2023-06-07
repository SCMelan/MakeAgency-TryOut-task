import { ChangeEvent, useState } from "react";
import { IValid } from "../footer";

export const Email = (props: IValid) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue((event.target as HTMLInputElement).value);
    const validate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !validate.test((event.target as HTMLInputElement).value.toLowerCase())
    ) {
      setEmailError("Введите корректный e-mail");
      props.setIsValid!(false);
    } else {
      setEmailError("");
      props.setIsValid!(true);
    }
  };

  const checkClassName = () => {
    if (emailError && emailValue.length > 0) return "EMail invalidEmail font";
    if (emailValue) return "EMail activeEmail font";
    return "EMail font";
  }; //Решил попробовать задвать различные условия стилизации инпута  через функцию, т.к. в зависимости от состояния активности было несколько вариантво стилей и одним тернарным оператом не получилось решить данный вопрос

  return (
    <>
      <p className="textField font" data-size="P_Lead">
        Текстовое поле
      </p>
      <form>
        <input
          placeholder="E-Mail"
          className={checkClassName()}
          data-size="P_16"
          value={emailValue}
          onChange={changeEmail}
        />
        {emailValue.length > 0 && emailError && (
          <p className="emailError font" data-size="P_14">
            {emailError}
          </p>
        )}
      </form>
    </>
  );
};
