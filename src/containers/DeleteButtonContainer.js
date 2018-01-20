import { connect } from 'react-redux';
import DeleteButton from '../components/DeleteButton.js';
import { removeStory } from '../actions/actions.js';

function mapStateToProps(state) {
    return {
        custom: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeStory: (id, sized) => dispatch(removeStory(id, sized))
    }
}

const DeleteButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton);

export default DeleteButtonContainer;
