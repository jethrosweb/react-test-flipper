import React from "react"

class Square extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                value: null,
                flip: false
            }
        }
        handleClick() {
            let val = this.state.flip ? 'O' : 'X'
            this.setState({
                value: val,
                flip: !this.state.flip
            });
        }
        render() {
            return (
                <button onClick={this.handleClick.bind(this)}>{this.state.value}</button>
            )
        }
    }
    

export default Square