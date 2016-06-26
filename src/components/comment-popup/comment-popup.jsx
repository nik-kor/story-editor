import React from 'react';
import cn from 'bem-cn';
import { connect } from 'react-redux';

const cl = cn('comment-popup');

import { addComment, highlightComment, commentTextChanged } from '../../actions';
require('./comment-popup.css');

export const CommentPopup = connect(
    state => {
        return {
            selection: state.selection,
        };
    }
)(({ selection, dispatch }) => {
    let styles = !!selection
        ? { top: selection.offsetTop }
        : null;

    return <div className={ cl({ opened: !!selection}) } style={ styles }>
        <h3>Add comment</h3>
        <textarea
            onFocus={ () => dispatch(highlightComment(selection.id)) }
            onChange={ (e) => { dispatch(commentTextChanged(selection.id, e.target.value)) } }
            value={ selection ? selection.text : '' }
            onKeyDown={ (e) => { e.which === 13 && dispatch(addComment(selection)); } }
            className={ cl('comment') }></textarea>
        <button
            className={ cl('save') }
            onClick={ () => dispatch(addComment(selection)) }
        >Save</button>
    </div>;
});
