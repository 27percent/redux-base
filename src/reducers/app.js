const app = (state = { sidebar: { open: false, openWide: false } }, action) => {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      console.log('Toggling sidebar');
      return { ...state, sidebar: { open: !state.sidebar.open, openWide: false } };
    case 'TOGGLE_SIDEBAR_WIDE': 
      console.log('Toggling sidebar wide');
      return { ...state, sidebar: { open: false, openWide: !state.sidebar.openWide } };
    default:
      return state;
  }
}

export default app;