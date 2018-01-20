import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

class AddCardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible,
            onCancel: props.onCancel,
            onCreate: props.onCreate
        }
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                title="Add a new story"
                okText="Add"
                onCancel={this.state.onCancel}
                onOk={this.state.onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Title">

                    </FormItem>
                    <FormItem label="Points">

                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

AddCardForm = Form.create()(AddCardForm);

export default AddCardForm;
