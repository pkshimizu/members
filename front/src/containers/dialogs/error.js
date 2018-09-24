import { connect } from 'react-redux';
import Error from '../../components/dialogs/error';

const mapStateToProps = state => ({
  message: state.dialog.error_message
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
