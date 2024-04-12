import { useMemo, useState, useCallback } from "react";

const UseMemoAndUseCallbackHook = () => {

    //const ordinaryVariable = "hello";
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [inc, setInc] = useState(0);

    //const square = squareOf(number);
    const square1 = useMemo(() => squareOf(number1), [number1]);

    const square2 = useCallback(() => squareOf(number2), [number2]);

    const onChange1 = event => {
        setNumber1(Number(event.target.value));
    };

    const onChange2 = event => {
        setNumber2(Number(event.target.value));
    };

    const onClick = () => setInc(i => i + 1);
    
    return (
        <div>               
            (useMemo() Hook) square of 
            <input type="text" value={number1} onChange={onChange1} />
            is {square1}
            
            <br></br>
            
            (useCallback() Hook) square of 
            <input type="text" value={number2} onChange={onChange2} />
            is {square2}
            
            <br></br>

            <button onClick={onClick}>Re-render</button>{inc}
        </div>
    );  
};

function squareOf(n){
    console.log('squareOf(' + n + ') called!');
    return n * n;
}

export default UseMemoAndUseCallbackHook;