console.log('App.js is running');

// if statements
// ternary operators
// logical and operator


// only render the subtitle(and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

let app = {
    title: "Indecision App",
    subtitle: "Let me make a decision for you.",
    options: ['One', 'Two']
};

// JSX - Javascript XML
let template = (
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

let user = {
    name: 'Thomas',
    age: 25,
    location: 'Florianópolis'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

let templateTwo = (
    <div>
        <h1>{(user.name) ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);