import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListPosts from './ListPosts';

class Home extends Component{
    state = {
        posts: []
    }

    compnentDidMount(){
        this.getPosts();
    }

    getPosts = () => {
        axios.get('/api/posts')
            .then(res => {
                if(res.data){
                    this.setState({
                        posts: res.data
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render(){
        let {posts} = this.state;

        return(
            <div>
                <h1>Home</h1>
                <ListPosts posts={posts}/>
                <Input getPosts={this.getPosts}/>
            </div>
        )
    }
}

export default Home;