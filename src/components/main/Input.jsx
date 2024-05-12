import "./Search-section.css";

export const Input = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="box-content">
          <div className="box__title">
            <h2 className="box__title-text">SWIPEPLACE - СДЕЛАЙ ШАГ</h2>
          </div>
          <div className="box__cards">
            <div className="box__cards-text">
              {" "}
              Свайпайте карточки и выбирайте <br /> интересные места <br /> для
              путешествий, а SwipePlace <br /> поможет составить идеальную{" "}
              <br /> подборку специально для вас!
            </div>
          </div>
          <form action="">
            <div className="search">
              <input
                className="box__search"
                type="search"
                name="s"
                placeholder="Поиск"
              />
              {/* <input class="box__submit" type="submit" value="" placeholder=""> */}
              <button className="box__submit">
                <svg
                  width={25}
                  height={23}
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8674 14.4654H16.7381L16.3379 14.1103C17.7387 12.6112 18.582 10.665 18.582 8.54774C18.582 3.82676 14.4225 0 9.29102 0C4.15952 0 0 3.82676 0 8.54774C0 13.2687 4.15952 17.0955 9.29102 17.0955C11.5923 17.0955 13.7078 16.3196 15.3373 15.0309L15.7233 15.3991V16.438L22.8702 23L25 21.0406L17.8674 14.4654ZM9.29102 14.4654C5.73185 14.4654 2.85878 11.8222 2.85878 8.54774C2.85878 5.2733 5.73185 2.63007 9.29102 2.63007C12.8502 2.63007 15.7233 5.2733 15.7233 8.54774C15.7233 11.8222 12.8502 14.4654 9.29102 14.4654Z"
                    fill="#4C4C4C"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
