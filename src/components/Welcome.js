import React from 'react';
import NameCard from './NameCard'
import LikesButton from "./LikesButton";
import DigitalClock from "./DigitalClock";
import CommentBox from "./CommentBox";

class Welcome extends React.Component {
    render () {
        let arr = [
            'hello',
            'yes'
        ];
        let isLoginIn = true;
       return (
           <div>
               {isLoginIn ? <p>你好，已经登录</p> : <p>不要登录</p>}
               {/*<NameCard name={'吴万海'} age={55} favorite={arr}/>*/}
               {/*<LikesButton />*/}
               {/*<DigitalClock />*/}
               <CommentBox />
           </div>
       )
   }
}

export default Welcome;