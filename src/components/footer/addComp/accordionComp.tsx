import { useState } from "react";
import Path from "../../../scss/img/Path.svg";

export const Accordion = () => {
  const [accordionActive, setAccordionActive] = useState(false);

  return (
    <>
      <p className="textField font" data-size="P_Lead">
        Аккордеон
      </p>
      <div className="accordionBody">
        <input type="checkbox" className="accordionInput" id="AccordionOne" />
        <label
          className={
            accordionActive ? "accordionLabelActive" : "accordionLabel"
          }
          htmlFor="AccordionOne"
          onClick={() => {
            setAccordionActive(!accordionActive);
          }}
        >
          <p className="font" data-size="P_16">
            Аккордеон
          </p>
          <img src={Path} alt="arrow" className="arrow"></img>
        </label>
        <div className="accordionContent" data-is-open={accordionActive}>
          <p className="font" data-size="P_16">
            <p>Гоpдость полными вагонами золотыми погонами</p>
            <p>С юга дyют молодые вет…</p>
            <p>Pазpывая в клочья облака не забыли шлют из далека</p>
            <p>С дома мама</p>
            <p>И не последняя любовь</p>
            <p>А по небy бегyт видишь чьи-то следы</p>
            <p>Это может быть ты это может быть я</p>
            <p>Это может наш дрyг</p>
            <p>Это может нам поют свои</p>
          </p>
        </div>
      </div>
    </>
  );
};
