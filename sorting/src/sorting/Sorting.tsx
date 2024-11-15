import { useEffect, useState } from 'react';
import styles from './Sorting.module.css'

export const Sorting = () => {
    const [generatedArray, setGeneratedArray] = useState([] as number[])
    const [TimeTaken,setTimeTaken] = useState<number>(0)
    
    //generateRandomArray();

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

    function swap(arr: number[], index1: number, index2: number) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }


    function generateRandomArray(): void{
        let randomArray: number[] = [];
        //console.log(Math.floor(Math.random()*10))
        for(let i=1;i<30;i++){
            randomArray.push(Math.floor(Math.random()*10));
        }

        setGeneratedArray(randomArray);
        //generatedArray.push()
    }



    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    async function bubbleSort(): Promise<void> {
        let start = performance.now();
        console.log("Timer has started");
        let arr = [...generatedArray]; 
        var size = arr.length;
    
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    setGeneratedArray([...arr]);
                    await sleep(10);
                }
            }
        }
        let timeTaken = performance.now() - start;
        console.log(timeTaken);
        setTimeTaken(timeTaken*0.001);
    }
    


    return (
        <>{renderArray()}
        <button onClick={generateRandomArray}> Generate an array </button>
        <button onClick={bubbleSort}> Bubble Sort</button> Timer : {TimeTaken}
        </>
    )
}