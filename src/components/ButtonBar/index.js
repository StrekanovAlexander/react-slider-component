import styles from './ButtonBar.module.css';
export default function ButtonBar({ direction,  rebuildBar }) {
    const className=`${ styles.btn } ${ styles[direction] }`;
    return (
        <span 
            className={ className } 
            onClick={ () => rebuildBar(direction) }
        />
    );
} 