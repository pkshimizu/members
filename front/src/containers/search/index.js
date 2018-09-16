import { connect } from 'react-redux';
import dialogs from '../../actions/dialogs';
import talents from '../../actions/talents';
import Search from '../../components/search';
import _ from 'lodash';

const filter = (talents, keyword) => {
    if (!keyword) return talents;
    return _.filter(talents, (talent) => {
        return _.includes(talent.name, keyword)
          || _.includes(talent.kana, keyword)
          || _.includes(talent.department, keyword);
    });
};

const mapStateToProps = state => ({
    talents: filter(state.talents.talents, state.talents.search_keyword)
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
)(Search);
