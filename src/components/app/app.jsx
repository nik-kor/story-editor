import React from 'react';
import cn from 'bem-cn';

const cl = cn('app');

require('./app.css');

import { Text } from '../text/text';

export function App() {
    return <div className={ cl() }>
        <div className={ cl('text') }><Text/></div>
        <div className={ cl('comments') }>comments here</div>
    </div>;
}
