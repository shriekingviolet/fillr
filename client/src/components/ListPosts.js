import React from 'react';

const ListPosts = ({posts}) => {
    
    return(
        <ul>
            {
                posts && posts.length > 0 ?(
                    posts.map(text => {
                        return(
                        <p key={text._id}>{text.text}</p>
                        )
                    })
                )
                :(
                    <p>No posts!</p>
                )
            }
        </ul>
    )
}

export default ListPosts