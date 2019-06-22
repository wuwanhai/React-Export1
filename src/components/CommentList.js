import React from 'react';

const CommentList = props => {
   // const {comments} = props.data;
   console.log(props.data)
    return (
       <div>
          <ul>
              {
                  props.data.map((tag,index)=>(
                      <ol key={index}>{tag}</ol>
                  ))
              }
          </ul>
       </div>
   )
};

export default CommentList;