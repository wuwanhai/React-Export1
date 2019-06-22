import React from 'react';
import NameCard from './NameCard'
import LikesButton from "./LikesButton";
import DigitalClock from "./DigitalClock";
import CommentList from './CommentList'
import CommentBox from "./CommentBox";

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:[
                'hello'
            ]
        }
    }
    addComment = comment => {
        this.setState({
            value:[...this.state.value,comment]
        })
    };

    render () {
       const {value} = this.state;
       let isLoginIn = true;
       return (
           <div>
               {isLoginIn ? <p>你好，已经登录</p> : <p>不要登录</p>}
               {/*<NameCard name={'吴万海'} age={55} favorite={arr}/>*/}
               {/*<LikesButton />*/}
               {/*<DigitalClock />*/}
               <CommentList data={value} />
               <CommentBox onAddComment={this.addComment}/>
           </div>
       )
   }
}

export default Welcome;