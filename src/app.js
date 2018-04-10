console.log('App.js is running');

// JSX - Javascript XML
let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// create a templateTwo var JSX expression
// div
//  h1 -> Thomas
//  p  -> Age: 25
//  p  -> Location: Florianópolis
//  Render templateTwo instead of template

let templateTwo = (
    <div>
        <h1>Thomas</h1>
        <p>Age: 25</p>
        <p>Location: Florianópolis</p>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);