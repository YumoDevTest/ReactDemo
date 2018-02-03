/**
 * Created by trunx on 18/2/3.
 */
import React, {Component} from 'react'
import  '../index.css'

class Header extends Component {
    constructor(){
        super()
        console.log('construct')
    }

    // 组件挂载开始之前调用
    componentWillMount(){
        console.log('component will mount')
    }

    // 组件挂载完成以后调用。
    componentDidMount(){
        console.log('component did mount')
    }

    componentWillUnMount(){
        console.log('component will un mount')
    }

    handlerClickOnTitle(e){
        alert("Chick on title:"+e.target.innerHTML)
    }
    render () {
        console.log('render')
        return (
            <div>
                <h1 onClick={this.handlerClickOnTitle}>React 小书</h1>
                <Main />
                <LikeButton />
                <LikeButtonProps linkedText="已赞" unlikedText="点赞" />
                <AddButton />
            </div>
        )
    }
}

class Main extends Component{
    render() {
        return (
            <div><h1> This is mainContent</h1></div>
        )
    }
}

class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

class LikeButtonProps extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        const linkedText = this.props.linkedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (

            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? linkedText : unlikedText} 👍
            </button>
        )
    }
}

class AddButton extends Component {
    constructor () {
        super()
        this.state = { countNum: 0 }
    }

    handleClickOnLikeButton () {
        this.setState({
            countNum: this.state.countNum+1
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.countNum}
            </button>
        )
    }
}
export default Header;

// class Header extends  Component {
//     render(){
//         return {<div><h1> React 小书</h1></div>}
//     }
// }