// install -> import -> use

/*
import validator from 'validator';

console.log(validator.isEmail('test@hehe.com'));*/

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing');

ReactDOM.render(template, document.getElementById('app'));
