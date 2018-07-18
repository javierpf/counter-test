import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Progress = props => {
    return (
        <React.Fragment>
            {props.show && <CircularProgress size={50} />}
        </React.Fragment>
    );
};

export default Progress;
