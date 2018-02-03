/**
 * Created by yumodev on 18/2/3.
 */
import React, {Component} from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            content:'',
        }
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    /**
     * 保存用户名到localStorage中
     * @param username
     * @private
     */
    saveUserName(username){
        console.log('saveUserName:'+username)
        localStorage.setItem('username', username)
    }

    /**
     * 失去焦点
     * @param event
     */
    handleUsernameBlue(event){
        console.log('handleUsernameBlue')
        this.saveUserName(event.target.value)
    }



    handleContentChage(event){
        this.setState(
            {
                content:event.target.value
            }
        )
    }

    handleSubmit(){
        if(this.props.onSubmit){
            // const {username, content} = this.state
            // this.props.onSubmit({username, content})

            this.props.onSubmit(
                {
                    username : this.state.username,
                    content : this.state.content,
                    createdTime : + new Date()
                }
            )
        }
        this.setState({content:''})
    }

    /**
     * 加载前
     */
    componentWillMount(){
        const username = localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }

    /**
     * Dom加载后
     */
    componentDidMount(){
        this.textarea.focus()
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-name">
                        <input value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}
                        onBlur={this.handleUsernameBlue.bind(this)}/>
                    </div>
                </div>

                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-name">
                        <textarea ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                        onChange={this.handleContentChage.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;
