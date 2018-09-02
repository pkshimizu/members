import { connect } from 'react-redux';
import actions from '../../actions/dialogs';
import Dialogs from '../../components/dialogs';

const mapStateToProps = state => ({
  state: state.dialog
});

const mapDispatchToProps = dispatch => ({
  openDialog: (name, open) => {
    dispatch(actions.open(name, open));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
