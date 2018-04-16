export default function (React, PropTypes, Col) {

  class XInput extends React.Component {

    // constructor(props) {
    //   super(props);
    // }

    render() {
      const inputClassName = (this.props.className || '') + ' form-control';

      return (
        <Col
          lg={ this.props.lg }
          md={ this.props.md || 6 }
          xs={ this.props.xs || 12 }
        >
          <input
            type="text"
            id={ this.props.id }
            required="required"
            className={ inputClassName }
          />
        </Col>
      );
    }

  }

  // TODO - add everything else...
  XInput.propTypes = {
    id: PropTypes.string.isRequired,
    xs: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  };

  return XInput;

};
