import { useState } from 'react';
import ButtonBar from "../ButtonBar";
import styles from './Bar.module.css';

export default function Bar({ items, currentIndex, setCurrentIndex }) {
    const [barItems, setBarItems] = useState(items.slice(0));
    
    function rebuildBar(direction) {
        let head;
        let tail;
        let index;
        if (direction === 'next') {
            head = barItems.slice(1);
            tail = barItems.slice(0, 1);
            index = 0;
        } else {
            head = barItems.slice(-1);
            tail = barItems.slice(0, barItems.length - 1);
            index = 5;
        }
        setBarItems(head.concat(tail));
        setCurrentIndex(index);
    }

    return (
        <div className={ styles.bar }>
            <ButtonBar direction="prev" rebuildBar={ rebuildBar } />
            <div className={ styles.images }>
                { barItems.map((el, ix) => 
                    <img 
                        className={ ix === currentIndex ? styles.active : null }
                        key={ ix } 
                        src={ el } 
                        alt={ el }
                        onClick={ () => setCurrentIndex(ix)}
                    />
                ) }
            </div>
            <ButtonBar direction="next" rebuildBar={ rebuildBar } />
        </div>
    );
}