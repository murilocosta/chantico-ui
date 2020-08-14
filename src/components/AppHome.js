import React from 'react';

import OmniBar from './OmniBar/OmniBar';
import OmniBarResult from './OmniBar/OmniBarResult';

export default function AppHome() {
    return (
        <React.Fragment>
            <OmniBar />
            <OmniBarResult />
        </React.Fragment>
    );
}