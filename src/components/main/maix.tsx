const contentItems = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
  { name: 11 },
  { name: 12 },
]; //Массив был сделан для уменьшения кол-во однообразного кода

export const Main = () => {
  return (
    <div className="mainBody">
      <p className="H1 font" data-size="H1">
        Тестовое задание
      </p>
      <p className="font" data-size="P_Lead">
        Уровень: Junior
      </p>
      <p className="gridIntro font" data-size="H2">
        Сетка:
      </p>
      <div className="gridContent">
        {contentItems.map((contentItems) => {
          return (
            <p
              className="gridItem  font"
              data-size="P_Lead"
              key={contentItems.name}
            >
              {contentItems.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
