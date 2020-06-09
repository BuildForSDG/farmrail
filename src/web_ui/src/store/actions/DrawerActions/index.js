import { OPEN_DRAWER, CHANGE_DRAWER, DRAWER_ERROR } from '../../../components/common/Globals';

// Drawer Dispacth Functions
function openDrawer(id) {
  return {
    type: OPEN_DRAWER,
    id
  };
}

function changeDrawer(id) {
  return {
    type: CHANGE_DRAWER,
    id
  };
}

function drawerError(msg) {
  return {
    type: DRAWER_ERROR,
    msg
  };
}

// Drawer Handler Exports
export const drawerHandler = (cmd, id) => (dispatch) => {
  const msg = cmd ? `${cmd} is not a valid command` : `${id} is not valid`;

  switch (cmd) {
    case 'open':
      return dispatch(openDrawer(id));
    case 'close':
    case 'change':
      return dispatch(changeDrawer(id));
    default:
      return dispatch(drawerError(msg));
  }
};
