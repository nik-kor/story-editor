import {
    TEXT_SELECTED,
    HIGHLIGHT_COMMENT,
    MUTE_COMMENT,
    COMMENT_TEXT_CHANGED,
    ADD_COMMENT,
} from '../actions';

const uuid = require('node-uuid');

export const reducer = function(state, action) {

    switch (action.type) {

        case TEXT_SELECTED: return onTextSelected(state, action);
        case HIGHLIGHT_COMMENT: return onHighlightComment(state, action);
        case MUTE_COMMENT: return onMuteComment(state, action);
        case COMMENT_TEXT_CHANGED: return onCommentTextChanged(state, action);
        case ADD_COMMENT: return onAddComment(state, action);
        default: return state;
    }


    function onTextSelected(state, action) {
        let { selection } = action;
        selection.id = uuid.v4();

        return Object.assign({}, state, {
            selection
        });
    }

    function onHighlightComment(state, action) {
        return Object.assign({}, state, { activeComment: action.commentId });
    }

    function onCommentTextChanged(state, action) {
        return Object.assign({}, state, {
            selection: Object.assign({}, state.selection, { text: action.text })
        });
    }

    function onAddComment(state, action) {
        let comments = state.comments.slice(0);
        let comment = Object.assign({}, action.comment);
        comment.createdAt = Date.now();
        comments.push(comment);

        return Object.assign({}, state, {
            activeComment: null,
            selection: null,
            comments,
        });
    }

    function onMuteComment(state, action) {
        return Object.assign({}, state, { activeComment: null });
    }
};
