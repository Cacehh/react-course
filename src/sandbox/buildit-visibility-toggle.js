console.log('Visibility Toggle loaded');

let buttonLabel = "Show Details";
let content = '';

const visibilityToggle = () => {
    if (content == '') {
        content = <p>Here are some details that would be visible</p>  
        buttonLabel = 'Hide Details';      
    } else {
        content = '';
        buttonLabel = 'Show Details';      
    }
    renderContent();
}

const appRoot = document.getElementById('app')

const renderContent = () => {
    const body = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityToggle}>{buttonLabel}</button>
            {content}
        </div>
    )

    ReactDOM.render(body, appRoot);
}

renderContent();