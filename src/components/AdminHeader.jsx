import React, { useState } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const AdminHeader = (props) => {
    
    return (
        <div>
           <Appbar postion="static" color="primary">
                <Toolbar>
                <Grid item container justify="left">
                <Typography variant="h5" style={{ fontWeight:"200" }}>doc-<span style={{ fontWeight: "500" }}>chain</span></Typography>
                </Grid>
                <Grid item container justify="flex-end">
                <Button variant="outlined" style={{ marginRight: 10 }} color="inherit" onClick={props.logOut}>Sign out</Button>
                <Button variant="contained" onClick={props.addChange}> { props.add ? "List" : "Add" }</Button>
                </Grid>
                    
                </Toolbar>
            </Appbar>
        </div>
    );
}

export default AdminHeader;
