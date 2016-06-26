import React from 'react';
import cn from 'bem-cn';
import { connect } from 'react-redux';
    // state => {
    //     return {};
    // },
    // dispatch => {
    //     return { dispatch };
    // }
    //

export const Text = connect(
    (state) => {
        return {
            paragraphs: state.paragraphs
        }
    }
)(({ paragraphs }) =>  {
    console.log(paragraphs);

    return <div className={ cn('text') }>
        {
            paragraphs.map(p => {
                return <p>{ p.text }</p>;
            })
        }
    </div>
});
