console.log('App.js is running');


const app = {
    title: "Indecision App",
    subtitle: "Let me make a decision for you.",
    options: []
};

const onFormSubmit = (e) => {
    // prevent refresh
    e.preventDefault();
    // get value of element who called the event
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender

const appRoot = document.getElementById('app');

const render = () => {

    // JSX - Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

render();