/**
 * Created by yumodev on 18/2/3.
 */
import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component{
    static propTypes = {
        comments : PropTypes.array,
        onDeleteComment:PropTypes.func
    }
    static defaultProps = {
        comments :[]
    }

    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }

    render(){
        // const comments = [
        //     {username: 'Jerry', content: 'Hello'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: 'Good'}
        // ]

        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        )
    }
}
export default CommentList;

