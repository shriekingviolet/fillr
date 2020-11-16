import React, {Component} from 'react';
import axios from 'axios';

class Input extends Component{
    state = {
        text: "",
        violenceCW: false,
        homophobiaCW: false,
        racismCW: false,
        transphobiaCW: false
    }

    addPost = () => {
        const post = {
            text: this.state.text,
            violenceCW: this.state.violenceCW,
            homophobiaCW: this.state.homophobiaCW,
            racismCW: this.state.racismCW,
            transphobiaCW: this.state.transphobiaCW
        }

        if(post.text && post.text.length > 0){
            axios.post('/api/create', post)
            .then(res => {
                if(res.data){
                    this.props.getPosts();
                    this.setState({text: ""})
                    this.setState({violenceCW: false})
                    this.setState({homophobiaCW: false})
                    this.setState({racismCW: false})
                    this.setState({transphobiaCW: false})
                }
            })
            .catch(err => console.log(err))
        }
        else{
            console.log("The post has no text!");
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleViolenceCWChange = (e) => {
        this.setState({
            violenceCW: !this.state.violenceCW
        })
    }

    handleHomophobiaCWChange = (e) => {
        this.setState({
            homophobiaCW: !this.state.homophobiaCW
        })
    }

    handleRacismCWChange = (e) => {
        this.setState({
            racismCW: !this.state.racismCW
        })
    }

    handleTransphobiaCWChange = (e) => {
        this.setState({
            transphobiaCW: !this.state.transphobiaCW
        })
    }

    render(){
        let {text} = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleTextChange} value={text} className = "Input"/> <br />
                <button onClick={this.addPost} className = "PostButton">Make a post!</button> <br/>
                <input onClick = {this.handleViolenceCWChange} name="violence" type="checkbox"/> <label for="violence">Violence</label> 
                <input onClick = {this.handleHomophobiaCWChange} name="homophobia" type="checkbox"/> <label for="homophobia">Homophobia</label> <br/>
                <input onClick = {this.handleRacismCWChange} name="racism" type="checkbox"/> <label for="racism">Racism</label>
                <input onClick = {this.handleTransphobiaCWChange} name="transphobia" type="checkbox"/> <label for="transphobia">Transphobia</label>
            </div>
        )
    }
}

export default Input