import { connect } from 'react-redux';
import SelfIntroductionEditForm from '../../components/dialogs/self_introduction_edit_form';
import _ from 'lodash';
import {reduxForm} from 'redux-form';

const mapStateToProps = state => ({
  talent: state.talents.talents[_.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {}
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'selfIntroductionEdit'
})(SelfIntroductionEditForm));
