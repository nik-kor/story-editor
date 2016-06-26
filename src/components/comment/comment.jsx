import React from 'react';
import cn from 'bem-cn';
import { connect } from 'react-redux';

const cl = cn('comment');

import moment from 'moment';

import { highlightComment, muteComment } from '../../actions';
require('./comment.css');

export const Comment = connect()(({ comment, dispatch }) => {
    let name = `Commented ${moment(comment.createdAt).format('DD-MM-YYYY HH:MM:SS')}`;
    return <div className={ cl } style={{ top: comment.offsetTop }}>
        <a className={ cl('link') }
            onMouseEnter={ () => dispatch(highlightComment(comment.id)) }
            onMouseLeave={ () => dispatch(muteComment()) }
        >{ name }</a>
    </div>;
});
