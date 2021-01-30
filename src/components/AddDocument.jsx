import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import AdminUpload from './AdminUpload';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    textFieldStyle: {
        marginBottom: 10,
        marginTop: 10,
    },
    textStyles: {
        marginBottom: 20,
        marginTop: 50,
    },
    buttonStyle: {
        marginTop: 10,
    }
}));

const AddDocument = () => {
    const classes = useStyles();
    return (
        <div>
                <Typography className={classes.textStyles} variant="h3" align="center" color="primary">Add Document</Typography>
                <TextField required variant="outlined" className={classes.textFieldStyle} label="Document Name" name="docName" fullWidth />
                <TextField required variant="outlined" className={classes.textFieldStyle} label="Name of Holder"  name="holderName" fullWidth/>
                <TextField required variant="outlined" className={classes.textFieldStyle} label="Aadhar No."  name="aadhaar" fullWidth />
                <AdminUpload class={classes.buttonStyle} />
            
        </div>
    );
}

export default AddDocument;
