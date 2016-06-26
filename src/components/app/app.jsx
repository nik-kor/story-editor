import React from 'react';
import cn from 'bem-cn';

const cl = cn('app');

require('./app.css');

import { Text } from '../text/text';
import { Comment } from '../comment/comment';
import { CommentPopup } from '../comment-popup/comment-popup';
import { connect } from 'react-redux';

export const App = connect(
    state => {
        return {
            comments: state.comments,
            activeComment: state.activeComment,
            selection: state.selection
        };
    }
)(({ comments, activeComment, selection }) => {
    let currentComment;
    if (selection) {
        currentComment = selection;
    } else if(activeComment) {
        currentComment = comments.find(c => c.id === activeComment);
    }

    return <div className={ cl() }>
        <div className={ cl('text') }><Text/></div>
        <div className={ cl('comments') }>
            {
                comments.map(c => <Comment comment={ c } />)
            }
            <CommentPopup comment={ currentComment } />
        </div>
    </div>;
})
