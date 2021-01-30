import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import Header from './Header';
import Query from './Query';
import AdminUpload from './AdminUpload';
import AdminContent from './AdminContent';
import AdminHeader from './AdminHeader';
import AddDocument from './AddDocument';

const App = () => {
    const [page, setPage] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [add, setAdd] = useState(false);
    const handleClick = () => {
        setAdd(prev => !prev)
    }
    const pageHandler = () => {
        setPage(prev => !prev);
    };

    const handleLogin = () => {
        setIsAdmin(true);
    }
    return (
        <div>
        <Grid container direction="column">
            <Grid item container>
                { isAdmin ? <AdminHeader add={add} addChange={handleClick} /> : <Header page={page} pageChange={pageHandler}/> }
            </Grid>
            <Grid item container style={{ marginTop: 150 }} xs={12}  lg={12} justify="center" alignItems="center">
                {(!isAdmin && page) && <Login logInClick={handleLogin} />}
                {(!isAdmin && !page) && <Query />}
                {(isAdmin && add) && <AddDocument />}
                {(isAdmin && !add) && <AdminContent />}
            </Grid>
        </Grid>
        </div>
        
    );
}

export default App;