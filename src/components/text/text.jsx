import React from 'react';
import cn from 'bem-cn';
import { connect } from 'react-redux';
import { textSelected } from '../../actions';

const cl = cn('text');

require('./text.css');

function getSelectionPosition() {
    let selection = window.getSelection();

    if (selection.rangeCount === 0 || selection.baseOffset === selection.focusOffset) {
        return null;
    }

    let range = window.getSelection().getRangeAt(0);
    let { startOffset, endOffset } = range;
    let dummy = document.createElement('span');
    range.insertNode(dummy);
    var offsetTop = dummy.offsetTop;

    dummy.parentNode.removeChild(dummy);

    return { offsetTop, textStart: startOffset, textEnd: endOffset };
}

const getParagraphsWithHighlight = (paragraphs, comment) => {
    let paragraph = Object.assign({}, paragraphs.find(p => p.id === comment.paragraphId));

    paragraph.text = [
        paragraph.text.slice(0, comment.textStart),
        <span className={ cl('highlight') }>{ paragraph.text.slice(comment.textStart, comment.textEnd) }</span>,
        paragraph.text.slice(comment.textEnd)
    ];

    paragraphs = paragraphs.map(p => {
        if (p.id === paragraph.id) {
            return paragraph;
        }

        return p;
    });

    return paragraphs;
};

const handleTextSelected = (...args) => {
    args[1](
        textSelected(Object.assign({ paragraphId: args[0] }, getSelectionPosition()))
    );
};

export const Text = connect(
    state => {
        return {
            paragraphs: state.paragraphs,
            activeComment: state.activeComment,
            comments: state.comments,
            selection: state.selection,
        }
    },
    dispatch => {
        return { dispatch };
    }
)(({ paragraphs, activeComment, comments, selection, dispatch }) =>  {
    if (activeComment) {
        if (selection && selection.id === activeComment) {
            // var rangeNode = document.getElementById(selection.paragraphId).firstChild;
            // var highlightDiv = document.createElement('span');
            // highlightDiv.style.backgroundColor = 'blue';

            // var range = document.createRange();
            // range.setStart(rangeNode, selection.textStart);
            // range.setEnd(rangeNode, selection.textEnd);
            // range.surroundContents(highlightDiv);
            paragraphs = getParagraphsWithHighlight(paragraphs, selection);
        } else {
            let comment = comments.find(c => c.id === activeComment);
            if (comment) {
                paragraphs = getParagraphsWithHighlight(paragraphs, comment);
            }
        }

    }

    return <div className={ cl }>
        {
            paragraphs.map(p => {
                return <p id={ p.id } key={ p.id } onMouseUp={ handleTextSelected.bind(null, p.id, dispatch) }>{ p.text }</p>;
            })
        }
    </div>
});
