import React, {Component} from 'react';
import axios from 'axios';

class Input extends Component{
    state = {
        text: ""
    }

    addPost = () => {
        const text = {text: this.state.text}

        if(text.text && text.text.length > 0){
            axios.post('/api/create', text)
                .then(res => {
                    if(res.data){
                        this.props.getPosts();
                        this.setState({text: ""})
                    }
                })
                .catch(err => console.log(err))
        }
        else{
            console.log('Input field is empty')
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        let {text} = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={text} className = "Input"/> <br />
                <button onClick={this.addPost} className = "PostButton">Make a post!</button>
            </div>
        )
    }
}

export default Input