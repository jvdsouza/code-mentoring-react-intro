import React, {Component} from 'react';

class ClickComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    onButtonClick = () => {
        let currentCount = this.state.count;
        let nextCount = currentCount + 1;        
        this.setState({count: nextCount});
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Click me!</button>
                <div>{this.state.count}</div>
            </div>
        );
    }
    
}
export default ClickComponent;