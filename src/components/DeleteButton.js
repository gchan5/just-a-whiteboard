import React, { Component } from 'react';
import { Button } from 'antd';


class DeleteButton extends Component {
    constructor() {
        super();

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.removeStory(this.props.id, this.props.sized);
    }

    render() {
        return (
            <Button shape="circle" onClick={this.handleRemove} icon="close" />
        )
    }
}

export default DeleteButton;
