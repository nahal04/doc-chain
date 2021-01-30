import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import Header from './Header';
import Query from './Query';

const App = () => {
    const [page, setPage] = useState(true);
    const pageHandler = () => {
        setPage(prev => !prev);
    }
    return (
        <div>
        <Grid container direction="column">
            <Grid item container>
                <Header page={page} pageChange={pageHandler}/>
            </Grid>
            <Grid item container style={{ marginTop: 200 }} xs={12}  lg={12} justify="center" alignItems="center">
                { page ? <Login /> : <Query /> }
            </Grid>
        </Grid>
        </div>
        
    );
}

export default App;