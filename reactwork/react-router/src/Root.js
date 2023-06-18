import React from 'react';
import RouterMain from './RouterMain';
import { BrowserRouter } from 'react-router-dom';

function Root(props) {
    return (
        <BrowserRouter>
            <RouterMain/>
        </BrowserRouter>
    );
}

export default Root;