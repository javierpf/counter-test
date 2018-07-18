import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import { decrement, increment, fetchInitial, closeSnackbar, cleanState } from '../actions/counter-actions';
import Progress from './Progress'

class Counter extends Component {

    componentDidMount() {
        this.props.cleanState();
        this.props.fetchInitialCounter();
    }

    render() {
        const { counter, increment, decrement,
            error, loading, snackbarOpen } = this.props;
        return (
            < React.Fragment >
                <Progress show={loading} />
                {!loading && !error &&
                    <React.Fragment>
                        <Button
                            onClick={increment}
                            variant="contained"
                            color="primary"
                            style={{ marginRight: 10 }}
                        >
                            Increment
                        </Button>
                        <Button
                            onClick={decrement}
                            variant="contained"
                            color="primary"
                        >
                            Decrement
                        </Button>

                        <p> {counter} </p>
                    </React.Fragment>
                }
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={() => this.props.closeSnackbar()}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    message="I love pastafrolas."
                />
            </React.Fragment >
        )
    }
}


const mapStateToProps = state => ({
    counter: state.counter,
    error: state.error,
    loading: state.loading,
    snackbarOpen: state.snackbarOpen,
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fetchInitialCounter: () => dispatch(fetchInitial()),
    closeSnackbar: () => dispatch(closeSnackbar()),
    cleanState: () => dispatch(cleanState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
