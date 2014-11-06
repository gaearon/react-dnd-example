var React = require('react/addons');
var { DragDropMixin } = require('react-dnd');


var List = React.createClass({
    render: function () {
        var itemHtml = this.props.items.map(function (item, key) {
            return (
                <li>{item}</li>
            )
        });
        return (
            <div className="list">
                <ul>
                {itemHtml}
                </ul>
            </div>
        )
    }
});
var Cart = React.createClass({
    render: function () {
        var count = this.props.items.length;
        return (
            <div className="cart">
            Count: {count}
            </div>
        )
    }
});

var ExampleApp = React.createClass({
    getInitialState: function () {
        return {
            'list': [
                'apple',
                'pear',
                'orange'
            ],
            cart: []
        };
    },
    _addInCart: function () {
        this.setState(
            {
                cart: this.state.cart.concat('nut')
            }
        );
    },
    render: function () {
        var cartStyle = {
            border: '1px solid red'
        };
        return (
            <div>
                <List items={this.state.list}/>
                <Cart items={this.state.cart}/>
                <button onClick={this._addInCart}>Add a nut in cart!</button>
            </div>
        );
    }
});


module.exports = ExampleApp;