var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillReceiveProps: function() {
        console.log('Set new props');
    },

    shouldComponentUpdate: function() {
        console.log('Change component')

        return true;
    },

    componentWillUpdate: function() {
        console.log(this.state.counter + ' - Counter has still the same value');
    },

    componentDidUpdate: function() {
        console.log(this.state.counter + ' - Counter has changed');
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Add'),
            React.createElement('button', {onClick: this.decrement}, 'Substract'),
        );
    }
});

var element = React.createElement('div', {className: 'counterList'}, 
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));
