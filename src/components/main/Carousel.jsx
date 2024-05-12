import React, { useEffect, useState } from 'react';
import './Main.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const carouselList = document.querySelector('.carousel__list');
        const carouselItems = document.querySelectorAll('.carousel__item');
        const elems = Array.from(carouselItems);

        const update = function(newActiveIndex) {
            const newActivePos = elems[newActiveIndex].dataset.pos;

            const current = elems.find((elem) => elem.dataset.pos == 0);
            const prev = elems.find((elem) => elem.dataset.pos == -1);
            const next = elems.find((elem) => elem.dataset.pos == 1);
            const first = elems.find((elem) => elem.dataset.pos == -2);
            const last = elems.find((elem) => elem.dataset.pos == 2);

            current.classList.remove('carousel__item_active');

            [current, prev, next, first, last].forEach(item => {
                var itemPos = item.dataset.pos;

                item.dataset.pos = getPos(itemPos, newActivePos);
            });

            setActiveIndex(newActiveIndex);
        };

        const getPos = function (current, active) {
            const diff = current - active;

            if (Math.abs(current - active) > 2) {
                return -current;
            }

            return diff;
        };

        const handleClick = function (event) {
            var newActive = event.target;
            var isItem = newActive.closest('.carousel__item');

            if (!isItem || newActive.classList.contains('carousel__item_active')) {
                return;
            }

            const newIndex = elems.findIndex(elem => elem === newActive);
            update(newIndex);
        };

        const interval = setInterval(() => {
            let newIndex = activeIndex + 1;
            if (newIndex === elems.length) {
                newIndex = 0;
            }
            update(newIndex);
        }, 1500);

        carouselList.addEventListener('click', handleClick);

        return () => {
            clearInterval(interval);
            carouselList.removeEventListener('click', handleClick);
        };
    }, [activeIndex]);

    return (
        <section className='Carousel'>
            <div className='Carousel__wrapper'>
                <div className="carousel">
                    <ul className="carousel__list">
                        <li className="carousel__item" data-pos="-1">1</li>
                        <li className="carousel__item" data-pos="0">2</li>
                        <li className="carousel__item" data-pos="1">3</li>
                        <li className="carousel__item" data-pos="2">4</li>
                        <li className="carousel__item" data-pos="-2">5</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
