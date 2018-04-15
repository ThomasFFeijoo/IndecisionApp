class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne() {
        console.log('handleAddOne');
    }

    handleMinusOne() {
        console.log('handleMinusOne');
    }

    handleReset() {
        console.log('handleReset');
    }

    render() {
        return (
          <div>
              <h1>Count: </h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>reset</button>
          </div>
        );
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));

/*
let count = 0;
// arrow function
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {

    // JSX doesn't have built in data binding, so this needs to be done
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();*/
