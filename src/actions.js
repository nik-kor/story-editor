export const HIGHLIGHT_COMMENT = 'HIGHLIGHT_COMMENT';
export const highlightComment = (commentId) => {
    return {
        type: HIGHLIGHT_COMMENT,
        commentId,
    };
};

export const MUTE_COMMENT = 'MUTE_COMMENT';
export const muteComment = () => {
    return {
        type: MUTE_COMMENT,
    };
};

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment,
    };
};

export const TEXT_SELECTED = 'TEXT_SELECTED';
/**
 * @param { Comment } selection
 */
export const textSelected = (selection) => {
    return {
        type: TEXT_SELECTED,
        selection
    };
};

export const COMMENT_TEXT_CHANGED = 'COMMENT_TEXT_CHANGED';
export const commentTextChanged = (commentId, text) => {
    return {
        type: COMMENT_TEXT_CHANGED,
        text
    };
};
