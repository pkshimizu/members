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
      image: '',
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
      image: '',
      seat: {
        x: '30%',
        y: '60%',
      },
      status: 'outsourcing'
    },
  ],
};

const success = (key) => key + '_SUCCESS';

export default (state = initState, action) => {
  if (!action.type.startsWith('TALENTS_')) {
    return state;
  }
  switch (action.type) {
    case success(actionTypes.LOAD):
      return { ...state, talents: action.payload.data };
    default:
      return state;
  }
};
