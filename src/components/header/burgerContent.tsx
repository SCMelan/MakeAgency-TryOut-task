import AgencyLogo from "../../scss/img/logo.jpg";
import Link from "../../scss/img/Link.png";

export const BurgerContent = () => {
  return (
    <div className="burgerPosition">
      <div className="burgerBody">
        <div className="burgerContentBox">
          <div className="headerBurger">
            <img src={AgencyLogo} alt="AgencyLogo" className="AgencyLogo" />
            <p className="headerBurgerText font" data-size="P_14">
              Задание выполнил
            </p>
          </div>
          <div className="mainBurger">
            {" "}
            <p data-size="H2" className="font strong">
              Антонов<p data-size="H2">Кирилл Юрьевич</p>
            </p>
            <p className="infoAboutMe font" data-size="P_16">
              Приветствую, меня зовут Кирилл, на данный момент нахожусь в
              поисках работы по новому для себя напрвлению, ранее окончил ВУЗ по
              напрвлению "Менеджемент организации", получил красный диплом по
              данному направлению (ср.балл - 4.86), но к программированию всегда
              лежала душа, по этому после получения диплома я приступил к
              изучению Frontend направления, сейчас занимаюсь изучением новых
              технологий.
            </p>
            <p className="numberPhone font" data-size="H4">
              +7 (905) 968-60-97 / Telegram: +7 (951) 583-20-09
            </p>
          </div>
          <div className="footerBurger">
            <button className="Link">
              <img src={Link} alt="Link" />
            </button>
            <a
              href="https://scmelan.github.io/LandingPage/"
              className="textLink font"
              data-size="P_16"
              target="_blank"
            >
              Ссылка на Landing Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
