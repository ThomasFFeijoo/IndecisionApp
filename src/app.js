console.log('App.js is running');

// if statements
// ternary operators
// logical and operator


// only render the subtitle(and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
    title: "Indecision App",
    subtitle: "Let me make a decision for you.",
    options: ['One', 'Two']
};

// JSX - Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
// arrow function
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

/*
can be done this way
<button onClick={() => {
    console.log('addOne');
}}>+1</button>
*/

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);