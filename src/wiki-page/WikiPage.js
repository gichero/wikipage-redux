import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.actions'

class WikiPage extends React.Component {

    componentWillReceiveProps(newProps){
        if(this.props.params.title !== newProps.params.title){
             this.props.fetchPage(newProps.params.title);
        }
    }
    componentDidMount() {
   this.props.fetchPage(this.props.params.title)
 }
    render(){
        return(

            <div>
            <button onClick={()=>this.props.fetchPage(this.props.params.title)}>Fetch</button>
            <textarea>{this.props.content.content}</textarea>
            <button onClick={()=>this.props.toggleEdit()}>edit</button>
            </div>
        )
    }
}

const WikiPageContainer = ReactRedux.connect(
    function(state){return state.wikiPage},
    actions
)(WikiPage);

export default WikiPageContainer;
