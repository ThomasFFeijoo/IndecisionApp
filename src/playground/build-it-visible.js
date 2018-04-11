const appRoot = document.getElementById('app');

let visibility = false;

const onToggle = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>
                {visibility ? 'Hide Details' : 'Show details'}
            </button>
            {(visibility && (
                <div>
                    <p>Hey, details are now visible</p>
                </div>
            ))}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();