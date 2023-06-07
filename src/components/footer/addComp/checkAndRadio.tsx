export const CheckRadio = () => {
  const label = [
    { name: "Вариант 1" },
    { name: "Вариант 2" },
    { name: "Вариант 3" },
  ];
  return (
    <>
      <p className="textField font" data-size="P_Lead">
        Чексбокс и Радиобаттон
      </p>
      <div className="checkboxAndRadioButton">
        <div className="checkboxBody">
          {label.map((label) => {
            return (
              <label className="label" key={label.name}>
                <input type="checkbox" className="checkbox" />
                <span className="fakeSpan"></span>
                <span className="textCheckbox font" data-size="P_16">
                  {label.name}
                </span>
              </label>
            );
          })}
        </div>
        <div className="radiobuttonBody">
          {label.map((label) => {
            return (
              <label className="radioLabel" key={label.name}>
                <input type="radio" className="radio" name="1" />
                <span className="fakeRadioSpan"></span>
                <span className="textRadio font" data-size="P_16">
                  {label.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};
