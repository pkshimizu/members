import { connect } from 'react-redux';
import actions from '../../actions/dialogs';
import Map from '../../components/map';

const mapStateToProps = state => ({
  talents: state.talents.talents,
});

const mapDispatchToProps = dispatch => ({
  openTalentDetailDialog: () => {
    dispatch(actions.open('talent_detail', true));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
