import { connect } from 'react-redux';
import actions from '../../actions/dialogs';
import TalentDetail from '../../components/dialogs/talent_detail';
import _ from 'lodash';

const mapStateToProps = state => ({
    talent: state.talents.talents[_.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {}
});

const mapDispatchToProps = dispatch => ({
    openDialog: (name, open) => {
        dispatch(actions.open(name, open));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TalentDetail);
