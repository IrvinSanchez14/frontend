import * as ACTIONS from './constants';

export function setUserInformation(information) {
  return {
    type: ACTIONS.SET_USER_INFORMATION,
    information,
  };
}