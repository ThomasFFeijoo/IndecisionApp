'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// create a templateTwo var JSX expression
// div
//  h1 -> Thomas
//  p  -> Age: 25
//  p  -> Location: Florianópolis
//  Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Thomas'
    ),
    React.createElement(
        'p',
        null,
        'Age: 25'
    ),
    React.createElement(
        'p',
        null,
        'Location: Florian\xF3polis'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
