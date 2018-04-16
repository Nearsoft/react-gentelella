export default function (React, PropTypes, XInput) {

  function LabelElement(props) {
    // refactor - create new component
    if (!props.label) {
      return null;
    }

    const isRequiredElement = props.isRequired ? (<span className="required">*</span>) : null;
    const labelClassName = (props.className || '') + ' control-label';

    return (
      <label className={ labelClassName } htmlFor={ props.id }>
        { props.label } { isRequiredElement }
      </label>
    );
  }

  class XFormGroup extends React.Component {

    // constructor(props) {
    //   super(props);
    // }

    render() {
      const elementId = this.props.id;

      return (
        <div className="form-group">

          <LabelElement
            for={ this.props.id }
            label={ this.props.label }
            isRequired={ this.props.isRequired }
            className='col-md-3 col-sm-3 col-xs-12'
          />

          <XInput
            id={ elementId }
            className='col-md-6 col-sm-6 col-xs-12'
          />
        </div>
      );
    }
  }

  XFormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
  };

  return XFormGroup;

};
