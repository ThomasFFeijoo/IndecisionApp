'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var onToggle = function onToggle() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            visibility ? 'Hide Details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, details are now visible'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
