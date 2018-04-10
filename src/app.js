console.log('App.js is running');

let app = {
    title: "Indecision App",
    subtitle: "Let me make a decision for you."
};

// JSX - Javascript XML
let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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

let templateTwo = (
    <div>
        <h1>{user.name.toUpperCase() + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);