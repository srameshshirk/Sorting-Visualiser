import { useEffect, useState } from 'react';
import styles from './Sorting.module.css'

export const Sorting = () => {
    const [generatedArray, setGeneratedArray] = useState([] as number[])

    useEffect(()=>{
        generateRandomArray() 
    },[])

    function renderArray() {
        return <>
        {
            <div className={styles.arrayWhole}>
            {generatedArray.map((x) => <div className={styles.arrayBar} style={{height:x*100}}>{x}</div>)}
            </div>
        }
        </>
    }


    function generateRandomArray(): void{
        let generatedArray: number[] = [];
        //console.log(Math.floor(Math.random()*10))
        for(let i=1;i<30;i++){
            generatedArray.push(Math.floor(Math.random()*10));
        }

        setGeneratedArray(generatedArray);
        //generatedArray.push()
    }
    function bubbleSort(): void {
        
    }

    return (
        <>{renderArray()}
        <button onClick={generateRandomArray}> Generate an array </button>
        <button onClick={bubbleSort}> Bubble Sort</button>
        </>
    )
}