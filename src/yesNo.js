import React from 'react';

export default class YesNo extends React.Component{
state = {
    clicked: false
}

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    }
    render(){
        return (
            <div>
                <h1>{this.state.clicked ? this.props.yesStatement : this.props.noStatement}</h1>
                <img src={this.state.clicked ? this.props.yesImage : this.props.noImage} onClick={this.clickHandler}/>
            </div>
        )
    }

}