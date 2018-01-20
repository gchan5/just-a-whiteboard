export const ADD_STORY = "ADD_STORY";
export const SIZE_STORY = "SIZE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const DROP_STORY = "DROP_STORY";

export function addStory(story) {
    return {
        type: ADD_STORY,
        story: story
    }
}

export function sizeStory(story) {
    return {
        type: SIZE_STORY,
        story: story
    }
}

export function removeStory(id, sized) {
    return {
        type: REMOVE_STORY,
        id: id,
        sized: sized
    }
}

export function dropStory(result) {
    return {
        type: DROP_STORY,
        result: result
    }
}
