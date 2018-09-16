import { connect } from 'react-redux';
import dialogs from '../../actions/dialogs';
import talents from '../../actions/talents';
import floors from '../../actions/floors';
import Map from '../../components/map';
import {lifecycle} from 'recompose';

const mapStateToProps = state => ({
    floors: state.floors.floors,
    selected_floor: state.floors.selected_floor,
    keyword: state.talents.search_keyword
});

const mapDispatchToProps = dispatch => ({
    loadFloors: () => {
        dispatch(floors.load());
    },
    selectFloor: (floor_id) => {
        dispatch(floors.select(floor_id));
    },
    openTalentDetailDialog: (talent_id) => () => {
        dispatch(talents.select(talent_id));
        dispatch(dialogs.open('talent_detail', true));
    }
});

const enhanced = lifecycle({
    componentDidMount() {
        this.props.loadFloors();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhanced(Map));
