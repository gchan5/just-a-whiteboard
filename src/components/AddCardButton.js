import React, {Component} from 'react';
import { Form, Modal, Button, Input } from 'antd';

const FormItem = Form.Item;

const AddCardForm = Form.create() (
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;

        return (
            <Modal
                visible={visible}
                title="Add a new story"
                okText="Add"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Title">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: 'Please input the title of the story'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Points">
                        {getFieldDecorator('points', {
                            rules: []
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class AddCardButton extends Component {
    constructor() {
        super();

        this.state = {
            visible: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }

    openModal() {
        this.setState({
            visible: true
        })
    }

    closeModal() {
        this.setState({
            visible: false
        })
    }

    handleCreate() {
        const form = this.form;
        form.validateFields((err, values) => {
            if(err) {
                return;
            }

            console.log('Received values of form: ', values);

            if(values.points) {
                this.props.sizeStory({
                    title: values.title,
                    points: values.points,
                    id: this.props.custom.id,
                    sized: true
                })
            } else {
                this.props.addStory({
                    title: values.title,
                    points: 0,
                    id: this.props.custom.id,
                    sized: false
                })
            }

            form.resetFields();
            this.setState({
                visible: false
            });
        });
    }

    saveFormRef(form) {
        this.form = form;
    }

    render() {
        return (
            <div>
                <Button type="default" onClick={this.openModal} icon="plus-square">Add a Story</Button>
                <AddCardForm
                    visible={this.state.visible}
                    onCancel={this.closeModal}
                    onCreate={this.handleCreate}
                    ref={this.saveFormRef}
                />
            </div>
        )
    }
}

export default AddCardButton;
