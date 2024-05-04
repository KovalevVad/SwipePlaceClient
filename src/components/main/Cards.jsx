import React from 'react';
import './Main.css';
import Moskow from '../../Image/Card_Moskow.jpg';
import Barselona from '../../Image/Card_Barselona.jpg';
import Paris from '../../Image/Card_Paris.jpg';


const Cards = () => {
    return (
        <section className='Cards'>
            <div className='Cards__wrapper'>
                <ul className='Cards__list'>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Moskow} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Москва -
                            </span>
                            крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.
                        </p>
                    </li>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Barselona} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Барселона –
                            </span>
                            столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством.
                        </p>
                    </li>
                    <li className='Cards__list__elem'>
                        <img className='Cards__list__elem-img' src={Paris} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Париж –
                            </span>
                            один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии.
                        </p>
                    </li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={Moskow} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Москва -
                            </span>
                            крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.
                        </p></li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={Moskow} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Москва -
                            </span>
                            крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.
                        </p></li>
                    <li className='Cards__list__elem'><img className='Cards__list__elem-img' src={Moskow} alt="Москва" />
                        <p className='Cards__list__elem-text'>
                            <span className='Cards__list__elem-bold_text'>
                                Москва -
                            </span>
                            крупнейшая столица Европы, наполненная достопримечательностями, памятниками истории и культуры, а также музеями мирового уровня.
                        </p></li>
                </ul>
            </div>
        </section>
    )
}
export default Cards;
