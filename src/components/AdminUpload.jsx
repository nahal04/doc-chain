import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AdminUpload = (props) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }
    return (
        <div>
            <Button
                variant="contained"
                component="label"
                color="primary"
                fullWidth
                className={props.class}
                onChange={handleFileChange}
            >
            Upload File
            <input
                type="file"
                hidden
            />
            </Button>
            {file && <Typography>{file.name}</Typography>}
            <Button variant="contained" color="primary" className={props.class} disabled={!file} fullWidth>Submit</Button>
        </div>
    );
}

export default AdminUpload;
