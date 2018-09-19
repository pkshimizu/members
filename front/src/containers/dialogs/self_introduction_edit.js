import { connect } from 'react-redux';
import talents from '../../actions/talents';
import dialog from '../../actions/dialogs';
import _ from 'lodash';
import SelfIntroductionEdit from '../../components/dialogs/self_introduction_edit';

const mapStateToProps = state => ({
  talent: state.talents.talents[_.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {}
});

const mapDispatchToProps = dispatch => ({
  updateSelfIntroduction: (talent_id, {message, password}) => {
    dispatch(talents.updateSelfIntroduction(talent_id, message, password));
    dispatch(dialog.open('self_introduction_edit', false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelfIntroductionEdit);
