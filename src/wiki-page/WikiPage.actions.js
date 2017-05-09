import $ from 'jquery';

function pageInfo(info){
    return {type: 'update-contents',
            payload: info}
}

function pageError(resp){
     let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
        return { type: 'page_error', error: error };
}

export function fetchPage(title){
    console.log(title);
    let asyncAction = function(dispatch) {
    $.ajax({
        url: 'http://localhost:4000/api/page/' + title,
    })

     .then(info => dispatch(pageInfo(info)))
     .catch(resp => dispatch(pageError(resp)))
};
return asyncAction;

}

export function toggleEdit(title){
    let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/page/' +title,
      method: 'PUT',
      info: "content"
    })
    .then(info => dispatch(pageInfo(info)))
    .catch(resp => dispatch(pageError(resp)))
};
    return asyncAction;
}
