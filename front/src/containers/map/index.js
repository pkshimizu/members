import { connect } from 'react-redux';
import dialogs from '../../actions/dialogs';
import talents from '../../actions/talents';
import Map from '../../components/map';

const mapStateToProps = state => ({
    talents: state.talents.talents,
});

const mapDispatchToProps = dispatch => ({
    openTalentDetailDialog: (talent_id) => () => {
        dispatch(talents.select(talent_id));
        dispatch(dialogs.open('talent_detail', true));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
