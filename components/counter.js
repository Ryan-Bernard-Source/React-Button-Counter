"use client";
import {useState} from "react";
export default function Counter({initialCount=0, initialStep=1}){
    const [count,setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    function increment(){
        setCount(c => c+step);
    }

    function decrement(){
        setCount(c=>{
            const next=c-step;
            return next>=0 ? next:c;
        });
    }

    function reset(){
        setCount(0);
    }

    function handleStepChange(e){
        const value = Number(e.target.value);
        setStep(value>=1 ? value:1);
    }

    return(
        <div className="counter">
            <div className="count" aria-live="polite">
                Counter:<strong>{count}</strong>
            </div>

            <div className="buttons">
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>

            <label className="step-label">
                Step:<input type="number" min="1" value={step} onChange={handleStepChange}>
            </input>         
            </label>
        </div>
    );
}