import { connect } from 'react-redux';
import dialogs from '../../actions/dialogs';
import talents from '../../actions/talents';
import Search from '../../components/search';
import _ from 'lodash';
import {lifecycle} from 'recompose';

const filter = (talents, keyword) => {
  if (!keyword) return talents;
  return _.filter(talents, (talent) => {
    const hiragana = talent.kana.replace(/[ァ-ン]/g, s => String.fromCharCode(s.charCodeAt(0) - 0x60));
    return _.includes(talent.name, keyword)
          || _.includes(talent.kana, keyword)
          || _.includes(hiragana, keyword)
          || _.includes(talent.department, keyword);
  });
};

const findCardElement = (element) => {
  if (_.startsWith(element.id, 'talent-card-')) {
    return element;
  }
  return findCardElement(element.parentElement);
};

const mapStateToProps = state => ({
  talents: filter(state.talents.talents, state.talents.search_keyword),
  selected_talent: state.talents.talents[
    _.findIndex(state.talents.talents, {id: state.talents.selected_talent})] || {}
});

const mapDispatchToProps = dispatch => ({
  loadTalents: () => {
    dispatch(talents.load());
  },
  openTalentDetailDialog: (talent_id) => () => {
    dispatch(talents.select(talent_id));
    dispatch(dialogs.open('talent_detail', true));
  },
  openTalentPopover: (talent_id) => (e) => {
    const card = findCardElement(e.target);
    const rect = card.getBoundingClientRect();
    dispatch(talents.select(talent_id));
    dispatch(dialogs.open('talent_popover', true, rect.y + rect.height - 10, rect.x));
  },
  closeTalentPopover: (talent_id) => () => {
    dispatch(dialogs.open('talent_popover', false));
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
)(enhanced(Search));
