const sidebar = (state = { open: false, openWide: false }, action) => {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      console.log('Toggling sidebar');
      return { open: !state.open, openWide: false };
    case 'TOGGLE_SIDEBAR_WIDE': 
      console.log('Toggling sidebar wide');
      return { open: false, openWide: !state.openWide };
    default:
      return state;
  }
}

export default sidebar;