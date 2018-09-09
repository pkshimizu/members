import { actionTypes } from '../actions/talents';

const initState = {
  talents: [
    {
      id: 1,
      name: '正 社員',
      kana: 'せい しゃいん',
      position: '役職',
      department: '部署',
      mail: 'mail@compass-e.com',
      slack: 'https://compassedujp.slack.com/team/U5MH6A6CS',
      image: 'https://avatars0.githubusercontent.com/u/300403?s=460&v=4',
      seat: {
        x: '30%',
        y: '30%',
      },
      status: 'employee'
    },
    {
      id: 2,
      name: '業務 委託',
      kana: 'ぎょうむ いたく',
      position: '役職',
      department: '部署',
      mail: 'mail@compass-e.com',
      slack: 'https://compassedujp.slack.com/team/U5MH6A6CS',
      image: 'https://avatars0.githubusercontent.com/u/300403?s=460&v=4',
      seat: {
        x: '30%',
        y: '60%',
      },
      status: 'outsourcing'
    },
  ],
  selected_talent: null,
};

const success = (key) => key + '_SUCCESS';

export default (state = initState, action) => {
  if (!action.type.startsWith('TALENTS_')) {
    return state;
  }
  switch (action.type) {
    case success(actionTypes.LOAD):
      return { ...state, talents: action.payload.data };
    case actionTypes.SELECT:
      return { ...state, selected_talent: action.payload.talent_id };
    default:
      return state;
  }
};
