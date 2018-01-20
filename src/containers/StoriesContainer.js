import { connect } from 'react-redux';
import Stories from '../components/Stories.js';
import { addStory, sizeStory } from '../actions/actions.js';

function mapStateToProps(state) {
    return {
        custom: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addStory: (story) => dispatch(addStory(story)),
        sizeStory: (story) => dispatch(sizeStory(story)),
    }
}

const StoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stories);

export default StoriesContainer;
