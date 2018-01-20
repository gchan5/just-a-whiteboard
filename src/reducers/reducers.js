import {
    ADD_STORY,
    SIZE_STORY,
    REMOVE_STORY,
    DROP_STORY
} from '../actions/actions.js';

const initialState = {
    sized: [],
    unsized: [],
    id: 0
}

function agileWhiteboard(state, action) {
    if( typeof state === 'undefined') {
        return initialState;
    }

    var newId = state.id + 1;

    switch(action.type) {
        case ADD_STORY:
            const addedState = {
                sized: state.sized,
                unsized: state.unsized.concat(action.story),
                id: newId
            };
            console.log("After add story: ", addedState);

            return addedState;

        case SIZE_STORY:
            const sizedState = {
                sized: state.sized.concat(action.story).sort(function (a, b) {
                    return a.points - b.points;
                }),
                unsized: state.unsized,
                id: newId
            };
            console.log("After sizing story: ", sizedState);

            return sizedState;

        case REMOVE_STORY:
            if(action.sized) {
                state.sized = state.sized.filter(function(story) {
                    return story.id !== action.id
                })
            } else {
                state.unsized = state.unsized.filter(function(story) {
                    return story.id !== action.id
                })
            }
            const newState = {
                sized: state.sized,
                unsized: state.unsized,
                id: newId
            }

            return newState;

        case DROP_STORY:
            const droppedState = dropStory(action.result, state, newId);
            console.log(droppedState);
            return droppedState;

        default:
            return state;
    }
}

function dropStory(result, state, newId) {
    console.log(result);

    if(result.destination == null) {
        return state;
    } else if(result.source.droppableId === result.destination.droppableId) {
        if(result.source.droppableId === "sized") {
            return {
                sized: reorder(state.sized, result.source.index, result.destination.index),
                unsized: state.unsized,
                id: newId
            }
        } else {
            return {
                sized: state.sized,
                unsized: reorder(state.unsized, result.source.index, result.destination.index),
                id: newId
            }
        }
    } else {
        if(result.source.droppableId === "sized") {
            const storyToRemove = state.sized[result.source.index];
            storyToRemove.sized = false;
            const newList = state.unsized.concat(storyToRemove);

            return {
                sized: state.sized.filter(function(story) {
                    return story.id !== storyToRemove.id;
                }),
                unsized: reorder(newList, newList.length - 1, result.destination.index),
                id: newId
            }
        } else {
            const storyToRemove = state.unsized[result.source.index];
            storyToRemove.sized = true;
            const newList = state.sized.concat(storyToRemove);

            return {
                sized: reorder(newList, newList.length - 1, result.destination.index),
                unsized: state.unsized.filter(function(story) {
                    return story.id !== storyToRemove.id;
                }),
                id: newId
            }
        }
    }

}

function reorder(list, start, end) {
    const result = Array.from(list);
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);

    return result;
}

export default agileWhiteboard;
