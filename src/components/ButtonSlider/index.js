import styles from  './ButtonSlider.module.css';
export default function ButtonSlider({ direction, changeCurrentIndex }) {
    const className =`${styles.btn} ${styles[direction]}`;
    return (
        <span 
            className={ className } 
            onClick={ () => changeCurrentIndex(direction) } 
        />
    );
}