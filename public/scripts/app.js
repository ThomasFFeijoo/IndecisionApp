console.log('App.js is running');

// JSX - Javascript XML
//let template = <p>This is JSX from app.js</p>;
let template = React.createElement(
    "h1",
    { id: "someId" },
    "Something new"
);
let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);