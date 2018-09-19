import { connect } from 'react-redux';
import SelfIntroductionEditDetail from '../../components/dialogs/self_introduction_edit_detail';
import _ from 'lodash';

const mapStateToProps = state => ({
  talent: state.talents.talents[_.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {}
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelfIntroductionEditDetail);
