var React = require('react');

var App = React.createClass({

  render: function () {

    return (
      <div>
        <h1>I am in the react app component</h1>
        {this.props.children}
      </div>
    );
  },
});

module.exports = App;
