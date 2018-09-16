import { connect } from 'react-redux';
import talents from '../../actions/talents';
import SearchForm from '../../components/search/form';

const mapStateToProps = state => ({
    keyword: state.talents.search_keyword
});

const mapDispatchToProps = dispatch => ({
    updateSearchKeyword: (keyword) => {
        dispatch(talents.search(keyword));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
