import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class LikesButton extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            likesButton:1
        }
    }
    increaaselLikes() {
        this.setState({
            likesButton:++this.state.likesButton
        })
    }
    render () {
        return (
            <div>
                <button className='btn btn-primary' onClick={()=>{this.increaaselLikes()}}>😂 {this.state.likesButton}</button>
            </div>
        )
    }
}

export default LikesButton;