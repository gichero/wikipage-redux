//action
// export function toggleEdit() {
//   return { type: 'toggle_edit' };
// }
//
// export function contentUpdate(c) {
//   return { type: 'content_update', content: c };
// }
//
// export function updatePage(t,c) {
//   console.log(c);
//   console.log(t);
//   let asyncAction = function(dispatch) {
//     $.ajax({
//       url: `http://localhost:4000/api/page/${t}`,
//       method: 'PUT',
//       data: { "content": c }
//     })
//     .then(data => dispatch(pageInfo(data)))
//     .catch(resp => dispatch(pageError(resp)))
//   };
//   return asyncAction;
// }
//
// function pageInfo(data) {
//   return { type: 'update_contents', payload: data };
// }
//
// function pageError(resp) {
//   let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
//   return { type: 'weather_error', error: error };
// }
//
// export function fetchPage(title) {
//   let asyncAction = function(dispatch) {
//     $.ajax({
//       url: `http://localhost:4000/api/page/${title}`
//     })
//     .then(data => dispatch(pageInfo(data)))
//     .catch(resp => dispatch(pageError(resp)))
//   };
//   return asyncAction;
// }


//render
// let pageInfo = this.props.page;
//     let body_content = pageInfo.editing ? (
//       <textarea className="body_edit" value={pageInfo.content} onChange={event => this.props.contentUpdate(event.target.value)}/>
//     ) : (
//       <div>{pageInfo.content}</div>
//     );
//     let save_control = <div className="base_link save_control" onClick={(event) => {this.props.updatePage(pageInfo.title,pageInfo.content);}}>Save Changes</div>;
//     return (
//       <div className="page_i">
//         <div className="page_header">
//           <div className="page_title">
//             <div>{pageInfo.title}</div>
//           </div>
//           <div className="edit_button base_link" onClick={this.props.toggleEdit}>Edit Page</div>
//         </div>
//         <div className="page_body">
//           {pageInfo.editing ? save_control : ""}
//           {body_content}
//         </div>
//       </div>
//     );
//   }
// }
//


//reducer
//reducer
// const INITIAL = {
//   title: "Home",
//   content: "This is the home page.",
//   editing: false
// }
//
// export default function reducer(state=INITIAL, action) {
//   if (action.type === 'update_contents') {
//     let title = action.payload.title;
//     let content = action.payload.content;
//     return Object.assign({}, state, {
//       title,
//       content
//     });
//   } else if (action.type === 'toggle_edit') {
//     return Object.assign({}, state, {
//       editing: !state.editing
//     });
//   } else if (action.type === 'content_update') {
//     return Object.assign({}, state, {
//       content: action.content
//     });
//   } else {
//     return state;
//   }
// }
