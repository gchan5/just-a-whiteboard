import { connect } from 'react-redux';
import LargeStoryContainer from '../containers/LargeStoryContainer.js';
import { dropStory } from '../actions/actions.js';

function mapStateToProps(state) {
    return {
        custom: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dropStory: (result) => dispatch(dropStory(result))
    }
}

const DragDropContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LargeStoryContainer);

export default DragDropContainer;
