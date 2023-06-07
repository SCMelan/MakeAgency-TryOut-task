import { IValid } from "../footer";

export const Button = (props: IValid) => {
  return (
    <>
      <p className="textField font" data-size="P_Lead">
        Кнопка
      </p>
      <button
        className="button font"
        data-size="P_16"
        data-is-disabled={props.isEmailValid ? "false" : "true"} //Стилизация кнопки меняется при соблюдении условия валидности введённого email
      >
        Отправить
      </button>
    </>
  );
};
