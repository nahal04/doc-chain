import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Header = (props) => {
    return (
        <div>
            <Appbar postion="static" color="primary">
                <Toolbar>
                <Grid item container justify="left">
                <Typography variant="h5" style={{ fontWeight:"200" }}>doc-<span style={{ fontWeight: "500" }}>chain</span></Typography>
                </Grid>
                <Grid item container justify="flex-end">
                <Button onClick={props.pageChange} variant="contained">{props.page ? "Query" : "Admin Login"}</Button>
                </Grid>
                    
                </Toolbar>
            </Appbar>
        </div>
    );
}

export default Header;
