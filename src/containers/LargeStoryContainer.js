import React, { Component } from 'react';
import StoriesContainer from "./StoriesContainer.js";
import { DragDropContext } from 'react-beautiful-dnd';

class LargeStoryContainer extends Component {
    render() {
        return (
            <DragDropContext onDragEnd={this.props.dropStory}>
                <StoriesContainer sized={true} />
                <StoriesContainer sized={false} />
            </DragDropContext>
        )
    }
}

export default LargeStoryContainer;
