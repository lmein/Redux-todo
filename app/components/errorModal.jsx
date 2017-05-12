const React = require('react');
// const PropTypes = require('prop-types');
//the following two was to fix modal error
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

//$ - jquery
const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    //everything above was added to fix modal issue.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    //empty div was due to fixing modal issue.  React does not like foundation messing with DOM.
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
