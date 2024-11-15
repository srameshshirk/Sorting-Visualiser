import styles from './renderArray.module.css'
export const renderArray = (arr: number[]) => {
        return <>
        {
            <div className={styles.arrayWhole}>
            {arr.map((x) => <div className={styles.arrayBar} style={{height:x*100}}>{x}</div>)}
            </div>
        }
        </>
}