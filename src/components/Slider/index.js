import { useState } from 'react';
import styles from './Slider.module.css';
import ButtonSlider from '../ButtonSlider';
import Bar from '../Bar';

export default function Slider({ items }) {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    function getNextIndex(direction) {
        switch (direction) {
            case 'next': 
                return currentIndex === items.length - 1 ? 0 : currentIndex + 1;
            case 'prev':
                return currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            default:
                return currentIndex;
        }
    }

    function changeCurrentIndex(direction) {
        const index = getNextIndex(direction);
        setCurrentIndex(index);
    }
    return (
        <div className={ styles.slider }>
            <ButtonSlider
                direction="prev" 
                changeCurrentIndex={ changeCurrentIndex }
            />
            <ButtonSlider
                direction="next" 
                changeCurrentIndex={ changeCurrentIndex }
            />
            { items.map((el, ix) => 
                <img className={ ix === currentIndex ? styles.shown : styles.hidden }
                    key={ ix } 
                    src={ el } 
                    alt={ el }
                />
            ) }
            <Bar 
                items={items} 
                currentIndex={ currentIndex }
                setCurrentIndex={ setCurrentIndex }
            />
      </div>
    );
}