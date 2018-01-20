import { connect } from 'react-redux';
import AddCardButton from '../components/AddCardButton.js';
import { addStory, sizeStory } from '../actions/actions.js';

function mapStateToProps(state) {
    return {
        custom: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addStory: (story) => dispatch(addStory(story)),
        sizeStory: (story) => dispatch(sizeStory(story))
    }
}

const AddCardButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCardButton);

export default AddCardButtonContainer;
