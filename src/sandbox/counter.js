
let count = 0;

const plusOne = () => {
    count++;
    renderCounterButton();
}

const minusOne = () => {
    count--;
    renderCounterButton();
}

const reset = () => {
    count = 0;
    renderCounterButton();
}




const renderCounterButton = () => {
    const buttonTemplate =  (
        <div>
            <h1>Click Counter: {count}</h1>
            <button id="plus1" className="button" onClick={plusOne}>+1</button>
            <button id="minus1" onClick={minusOne }>-1</button>
            <button id="reset" onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(buttonTemplate, appRoot);    
};

renderCounterButton();