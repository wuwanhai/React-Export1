import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // 组件初始化，钩子函数
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }

    // 更新中
    componentDidUpdate(i,prevState) {
       console.log(i,prevState);
    }

    // 卸载
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let {date} = this.state;
        return (
            <div>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )

    }
}
export default DigitalClock;