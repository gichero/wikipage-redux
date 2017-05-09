
const INITIAL_STATE = {
    title: "HomePage",
    // content: "Welcome to the HomePage"
    content: {},
    editing: false

}

export default function reducer(state = INITIAL_STATE, action){
    if (action.type === 'update-contents') {
        console.log(state);
        return Object.assign({}, state, {
          content: action.payload
        });
      } else {

        return state;
      }
  }
