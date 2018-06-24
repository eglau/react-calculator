import { connect } from 'react-redux';
import { updateDisplay } from '../actions';

import Button from '../components/Button';

const mapStateToProps = (state, props) => {
  return {
    display: props.display
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(updateDisplay(props.display))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);