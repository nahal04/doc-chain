import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box, Typography } from '@material-ui/core';

const Query = () => {
    return (
        <div>
        
        <Box mt={20}>
        <Typography variant="h3" color="Primary" style={{ fontWeight: 200 }} >Find a <span style={{ fontWeight: "bold" }}>doc</span>ument</Typography>
        </Box>
        <Box mt={5}>
        <TextField fullWidth variant="outlined" label="Document ID" />
        </Box>
            
        </div>
    );
}

export default Query;
