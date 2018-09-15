import { connect } from 'react-redux';
import actions from '../../actions/talents';
import Site from '../../components/site';
import {lifecycle} from 'recompose';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    loadTalents: () => {
        dispatch(actions.load());
    }
});

const enhanced = lifecycle({
    componentDidMount() {
        this.props.loadTalents();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhanced(Site));
