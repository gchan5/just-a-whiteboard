import React, { Component } from 'react';
import { Card } from 'antd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteButtonContainer from '../containers/DeleteButtonContainer.js';

class Stories extends Component {
    constructor() {
        super();

        this.state = {
            stories: this.props
        }
    }

    render() {
        var stories = this.props.sized ? this.props.custom.sized : this.props.custom.unsized
        var list = this.props.sized ? "sized" : "unsized";

        return (
            <Droppable droppableId={list} direction="horizontal">
                {(provided, snapshot) => (
                    <div className="sized-header">
                        <div className="row vertical-align">
                            <div className="col-sm-10">
                                <h1 className="align-middle App-title">
                                    {list}
                                </h1>
                            </div>
                        </div>
                        <div className="row card-container" ref={provided.innerRef}>
                            {
                                stories.map((story, index) => (
                                    <Draggable
                                        key={story.id.toString()}
                                        draggableId={story.id.toString()}
                                        index={index.toString()}
                                    >
                                        {(provided, snapshot) => (
                                            <div>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Card title={story.title}
                                                        extra={<DeleteButtonContainer id={story.id} sized={story.sized} />}
                                                        style={{width: 200}}
                                                    >
                                                        <p>{story.points}</p>
                                                    </Card>
                                                </div>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            }
                        </div>
                    </div>
                )}
            </Droppable>
        )
    }
}

export default Stories;
