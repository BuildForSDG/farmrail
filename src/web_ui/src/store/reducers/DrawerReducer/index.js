import { OPEN_DRAWER, CHANGE_DRAWER } from '../../../components/common/Globals';

const initialState = [
  {
    id: 0,
    isOpen: false
  }
];

const DrawerReducer = (state = initialState, action) => {
  const { id } = action;

  switch(action.type) {
    case OPEN_DRAWER:
    case CHANGE_DRAWER:
      return state.map(drawer => drawer.id === id ?
        { ...drawer, isOpen: !drawer.isOpen } :
        drawer
      );
    default:
      return state;
  }
}

export default DrawerReducer;