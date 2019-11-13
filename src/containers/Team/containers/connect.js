import { connect } from 'react-redux';
import { mapDispatchToProp, mapStateToProps } from './props';

const bindComponent = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProp
  )(Component);

export { bindComponent };

