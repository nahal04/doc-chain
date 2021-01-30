import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'docId', headerName: 'Document ID', width: 200 },
    { field: 'docName', headerName: 'Document Name', width: 200},
    { field: 'holderName', headerName: 'Name of Holder', width: 250 },
    {
      field: 'aadhaar',
      headerName: 'Aadhaar No.',
      type: 'number',
      width: 250,
    },
  ];

const rows = [
    { id: 1, docId: 1, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
    { id: 2, docId: 2, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
    { id: 3, docId: 3, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
    { id: 4, docId: 4, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
    { id: 5, docId: 5, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
    { id: 6, docId: 6, docName: 'passport', holderName: "Someone", aadhaar: 1213423434354436 },
]

const AdminContent = () => {
    return (
        <Box style={{ height: 750, width: "90%" }} justify="center">
            <Typography align="center" variant="h3" color="primary" style={{ fontWeight: 400, marginBottom: 20 }}><span style={{ fontWeight: "bold" }}>Doc</span>uments added by you</Typography>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />

        </Box>
    );
}

export default AdminContent;
