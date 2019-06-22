import React from 'react';

class CommentBox extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value:''
        }
    }

    handleChange = event => {
        this.setState({
            value:event.target.value
        })
    };

    handleSubmit = event => {
        alert(this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form className='p-5'>
                <div className='form-group'>
                    <label> 留言板</label>
                    <input type="text"
                        className='form-control'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button className='btn btn-primary' onClick={this.handleSubmit}>提交</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;