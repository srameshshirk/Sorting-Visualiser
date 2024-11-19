import styles from './ArrayGraph.module.css'

interface ArrayGraphProps {
    array: number[]
}

function ArrayGraph({array}: ArrayGraphProps) {
    return <>
        {
            <div className={styles.arrayWhole}>
            {array.map((x) => <div className={styles.arrayBar} style={{height:x*100}}>{x}</div>)}
            </div>
        }
        </>
}

export default ArrayGraph