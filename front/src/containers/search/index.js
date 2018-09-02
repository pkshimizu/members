import { connect } from 'react-redux';
import actions from '../../actions/dialogs';
import Search from '../../components/search';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  openTalentDetailDialog: () => {
    dispatch(actions.open('talent_detail', true));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
