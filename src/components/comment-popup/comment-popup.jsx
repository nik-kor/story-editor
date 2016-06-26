import React from 'react';
import cn from 'bem-cn';
import { connect } from 'react-redux';

const cl = cn('comment-popup');

import { addComment, highlightComment, commentTextChanged } from '../../actions';
require('./comment-popup.css');

export const CommentPopup = connect()(({ comment, dispatch }) => {
    if (!comment) {
        return <div />;
    }

    let isNew = !comment.createdAt;

    let styles = { top: isNew ? comment.offsetTop : comment.offsetTop + 20 };

    return <div className={ cl({ opened: !!comment}) } style={ styles }>
        { isNew && <h3>Add comment</h3> }
        { isNew && <textarea
                onFocus={ () => dispatch(highlightComment(comment.id)) }
                onChange={ (e) => { dispatch(commentTextChanged(comment.id, e.target.value)) } }
                value={ comment ? comment.text : '' }
                onKeyDown={ (e) => { comment.text.trim() && e.which === 13 && dispatch(addComment(comment)); } }
                className={ cl('comment') }></textarea>
        }
        { isNew && <button
                className={ cl('save') }
                onClick={ () => comment.text.trim() && dispatch(addComment(comment)) }
            >Save</button>
        }
        { !isNew && comment.text }
    </div>;
});
