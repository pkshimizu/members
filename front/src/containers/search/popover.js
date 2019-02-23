import { connect } from 'react-redux';
import TalentPopover from '../../components/search/popover';
import _ from 'lodash';

const mapStateToProps = state => ({
  open: state.dialog.talent_popover,
  selected_talent: state.talents.talents[
    _.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {},
  top: state.dialog.top,
  left: state.dialog.left,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TalentPopover);
